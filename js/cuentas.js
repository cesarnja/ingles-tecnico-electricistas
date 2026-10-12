/* ============================================================
   CUENTAS.JS — Usuarios con su propia clave
   Cada persona entra con su usuario y su avance se guarda en la
   nube (Firebase de Google), así lo encuentra en cualquier
   teléfono. Se habla con Firebase por su API web directa, sin
   cargar su librería, para que la app siga ligera.
   Si firebase-config.js está vacío, la app funciona como
   siempre: sin cuenta, todo guardado en el teléfono.
   ============================================================ */

const Cuentas = (function () {
  const CFG = window.FIREBASE_CONFIG || null;
  const activo = !!(CFG && CFG.apiKey && CFG.projectId);

  const SESION_KEY = "inglesTecnicoSesion_v1";
  const SIN_CUENTA_KEY = "inglesTecnicoSinCuenta_v1";
  /* Firebase pide un correo; los usuarios no necesitan tener uno.
     Se usa un dominio reservado (.example.com) que nunca recibe correo. */
  const DOMINIO = "@inglestecnico.example.com";
  const AUTH = "https://identitytoolkit.googleapis.com/v1/";

  function leer(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  function escribir(k, v) {
    try {
      if (v == null) localStorage.removeItem(k);
      else localStorage.setItem(k, JSON.stringify(v));
    } catch (e) { /* sin espacio */ }
  }

  let sesion = activo ? leer(SESION_KEY) : null;
  let textoEstado = "";
  let ocupado = false, pendiente = false, temporizador = null, ultimaSync = 0, ultimoError = null;

  /* ---------------- Comunicación con Firebase ---------------- */

  function codigoError(j) {
    const e = (j && j.error) || {};
    const m = String(e.message || "").split(" ")[0].split(":")[0];
    if (/^[A-Z_]+$/.test(m)) return m;
    return e.status || ("HTTP_" + (e.code || "?"));
  }

  async function pedir(url, opciones) {
    let r;
    try { r = await fetch(url, opciones); }
    catch (e) { throw new Error("SIN_RED"); }
    if (r.status === 404 && opciones.method === "GET") return null;
    const j = await r.json().catch(function () { return {}; });
    if (!r.ok) throw new Error(codigoError(j));
    return j;
  }

  function postJSON(url, cuerpo) {
    return pedir(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(cuerpo) });
  }

  function urlDoc(uid) {
    return "https://firestore.googleapis.com/v1/projects/" + encodeURIComponent(CFG.projectId) +
      "/databases/(default)/documents/usuarios/" + encodeURIComponent(uid);
  }

  const api = {
    registrar: function (email, clave) {
      return postJSON(AUTH + "accounts:signUp?key=" + CFG.apiKey, { email: email, password: clave, returnSecureToken: true });
    },
    entrar: function (email, clave) {
      return postJSON(AUTH + "accounts:signInWithPassword?key=" + CFG.apiKey, { email: email, password: clave, returnSecureToken: true });
    },
    refrescar: function (refreshToken) {
      return pedir("https://securetoken.googleapis.com/v1/token?key=" + CFG.apiKey, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "grant_type=refresh_token&refresh_token=" + encodeURIComponent(refreshToken)
      });
    },
    cambiarClave: function (idToken, clave) {
      return postJSON(AUTH + "accounts:update?key=" + CFG.apiKey, { idToken: idToken, password: clave, returnSecureToken: true });
    },
    leerDoc: async function (uid, idToken) {
      const j = await pedir(urlDoc(uid), { method: "GET", headers: { Authorization: "Bearer " + idToken } });
      if (!j) return null;
      const f = j.fields || {};
      let progreso = null;
      try { progreso = f.progreso ? JSON.parse(f.progreso.stringValue) : null; } catch (e) { progreso = null; }
      return {
        usuario: f.usuario ? f.usuario.stringValue : "",
        nombre: f.nombre ? f.nombre.stringValue : "",
        progreso: progreso
      };
    },
    guardarDoc: function (uid, idToken, d) {
      return pedir(urlDoc(uid), {
        method: "PATCH",
        headers: { Authorization: "Bearer " + idToken, "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: {
            usuario: { stringValue: d.usuario || "" },
            nombre: { stringValue: d.nombre || "" },
            progreso: { stringValue: JSON.stringify(d.progreso || {}) },
            actualizado: { timestampValue: new Date().toISOString() }
          }
        })
      });
    }
  };

  /* Los tokens duran una hora; se renuevan solos antes de vencer */
  function guardarTokens(r) {
    sesion.idToken = r.idToken || r.id_token;
    sesion.refreshToken = r.refreshToken || r.refresh_token;
    sesion.expira = Date.now() + Number(r.expiresIn || r.expires_in || 3600) * 1000;
    escribir(SESION_KEY, sesion);
  }

  async function token() {
    if (!sesion) throw new Error("SIN_SESION");
    if (sesion.idToken && Date.now() < sesion.expira - 5 * 60 * 1000) return sesion.idToken;
    guardarTokens(await api.refrescar(sesion.refreshToken));
    return sesion.idToken;
  }

  /* ---------------- Mezclar avance de dos lugares ---------------- */

  /* Une lo del teléfono con lo de la nube sin perder nada:
     módulos aprobados en cualquiera de los dos, el mayor número de
     intentos y el mejor puntaje de pronunciación. Si alguien borró
     su progreso, lo anterior a ese borrado ya no cuenta. */
  function mezclar(a, b) {
    a = a || {}; b = b || {};
    const R = [a.resetAt || "", b.resetAt || ""].sort().pop();
    const vigente = function (s) { return !R || (s.updatedAt || "") >= R; };
    const fuentes = [b, a].filter(vigente);
    const out = {
      passed: {}, tries: {}, speech: {},
      settings: Object.assign({ rate: 0.9 }, b.settings, a.settings),
      updatedAt: [a.updatedAt || "", b.updatedAt || ""].sort().pop() || undefined
    };
    if (R) out.resetAt = R;
    fuentes.forEach(function (s) {
      Object.keys(s.passed || {}).forEach(function (k) {
        const x = s.passed[k], y = out.passed[k];
        if (!y || (x.date || "") < (y.date || "")) out.passed[k] = x;
      });
      Object.keys(s.tries || {}).forEach(function (k) { out.tries[k] = Math.max(out.tries[k] || 0, s.tries[k] || 0); });
      Object.keys(s.speech || {}).forEach(function (k) { out.speech[k] = Math.max(out.speech[k] || 0, s.speech[k] || 0); });
    });
    return out;
  }

  function huella(s) {
    s = s || {};
    const ord = function (o) {
      o = o || {};
      return Object.keys(o).sort().map(function (k) { return k + "=" + JSON.stringify(o[k]); }).join("|");
    };
    return [ord(s.passed), ord(s.tries), ord(s.speech), s.resetAt || ""].join("#");
  }

  /* ---------------- Sincronización ---------------- */

  function ponerEstado(t) {
    textoEstado = t;
    const el = document.getElementById("cuentaEstado");
    if (el) el.textContent = t;
  }

  /* Se llama cada vez que cambia el avance: espera 2 s y sube */
  function programar() {
    if (!activo || !sesion) return;
    clearTimeout(temporizador);
    temporizador = setTimeout(sincronizar, 2000);
  }

  const ERRORES_SESION = ["TOKEN_EXPIRED", "USER_DISABLED", "USER_NOT_FOUND", "INVALID_REFRESH_TOKEN",
    "INVALID_GRANT_TYPE", "MISSING_REFRESH_TOKEN", "UNAUTHENTICATED", "SIN_SESION", "INVALID_ID_TOKEN"];

  async function sincronizar() {
    if (!activo || !sesion) return;
    if (navigator.onLine === false) {
      ponerEstado("📴 Sin internet: tu avance se guarda en el teléfono y se sube cuando vuelva la señal.");
      return;
    }
    if (ocupado) { pendiente = true; return; }
    ocupado = true;
    ultimaSync = Date.now();
    ponerEstado("☁️ Sincronizando…");
    try {
      const tk = await token();
      const nube = await api.leerDoc(sesion.uid, tk);
      if (nube && nube.nombre && nube.nombre !== sesion.nombre) {
        sesion.nombre = nube.nombre;
        escribir(SESION_KEY, sesion);
      }
      if (nube && nube.progreso) {
        const mezcla = mezclar(state, nube.progreso);
        if (huella(mezcla) !== huella(state)) reemplazarEstado(mezcla);
      }
      await api.guardarDoc(sesion.uid, tk, { usuario: sesion.usuario, nombre: sesion.nombre, progreso: state });
      ponerEstado("✅ Tu avance está guardado en la nube.");
      ultimoError = null;
    } catch (e) {
      const c = e && e.message;
      if (c === "SIN_RED") {
        ponerEstado("📴 Sin internet: tu avance se guarda en el teléfono y se sube cuando vuelva la señal.");
      } else if (ERRORES_SESION.indexOf(c) >= 0) {
        cerrarSesionLocal();
        toast("🔑 Tu sesión venció. Entra de nuevo para seguir guardando tu avance.", 4500);
        location.hash = "#/login";
      } else {
        ponerEstado("⚠️ No se pudo sincronizar (" + c + "). Se volverá a intentar.");
        if (c !== ultimoError) toast("⚠️ " + textoError(c), 4500);
      }
      ultimoError = c;
    } finally {
      ocupado = false;
      if (pendiente) { pendiente = false; programar(); }
    }
  }

  function cerrarSesionLocal() {
    clearTimeout(temporizador);
    sesion = null;
    escribir(SESION_KEY, null);
    activarUsuario(null);
  }

  window.addEventListener("online", function () { if (activo && sesion) sincronizar(); });
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible" && activo && sesion && Date.now() - ultimaSync > 60000) sincronizar();
  });
  document.addEventListener("DOMContentLoaded", function () { if (activo && sesion) sincronizar(); });

  /* ---------------- Usuarios ---------------- */

  function limpiarUsuario(u) {
    return String(u || "").trim().toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/\s+/g, ".")
      .replace(/[^a-z0-9._-]/g, "");
  }
  function usuarioValido(u) { return /^[a-z][a-z0-9._-]{2,19}$/.test(u); }

  const MENSAJES = {
    SIN_RED: "📶 No hay internet. Para entrar o crear tu cuenta la primera vez necesitas conexión.",
    EMAIL_EXISTS: "Ese usuario ya existe. Elige otro, o entra con tu clave.",
    INVALID_LOGIN_CREDENTIALS: "Usuario o clave incorrectos.",
    EMAIL_NOT_FOUND: "Usuario o clave incorrectos.",
    INVALID_PASSWORD: "Usuario o clave incorrectos.",
    INVALID_EMAIL: "Ese usuario no es válido. Usa solo letras, números, punto o guion.",
    WEAK_PASSWORD: "La clave debe tener al menos 6 caracteres.",
    TOO_MANY_ATTEMPTS_TRY_LATER: "Demasiados intentos. Espera unos minutos y vuelve a probar.",
    USER_DISABLED: "Esta cuenta fue desactivada.",
    OPERATION_NOT_ALLOWED: "El registro con usuario y clave no está activado todavía en el servidor.",
    ADMIN_ONLY_OPERATION: "El registro de cuentas nuevas está cerrado. Pide que te creen la cuenta.",
    PERMISSION_DENIED: "El servidor no dejó guardar el avance. Hay que revisar las reglas de Firestore.",
    CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "Por seguridad, cierra sesión y vuelve a entrar antes de cambiar la clave."
  };
  function textoError(c) { return MENSAJES[c] || ("No se pudo completar (" + c + "). Intenta de nuevo."); }

  /* Si el teléfono ya tenía avance sin cuenta, se ofrece pasarlo a la
     cuenta nueva. Solo si la cuenta está vacía, para no mezclar el
     avance de dos personas que compartan teléfono. */
  function ofrecerMigrar(estado) {
    const anon = loadState(STORE_KEY);
    const n = Object.keys(anon.passed || {}).length;
    if (!n || Object.keys(estado.passed || {}).length) return estado;
    const ok = confirm("Este teléfono tiene " + n + (n === 1 ? " módulo aprobado" : " módulos aprobados") +
      " sin cuenta.\n\n¿Es tu avance? Si dices que sí, pasa a tu cuenta.");
    if (!ok) return estado;
    try { localStorage.removeItem(STORE_KEY); } catch (e) { /* nada */ }
    return mezclar(estado, anon);
  }

  async function entrarConCuenta(usuario, clave) {
    const r = await api.entrar(usuario + DOMINIO, clave);
    sesion = { uid: r.localId, usuario: usuario, nombre: usuario };
    guardarTokens(r);
    escribir(SIN_CUENTA_KEY, null);
    let nube = null;
    try { nube = await api.leerDoc(sesion.uid, sesion.idToken); } catch (e) { nube = null; }
    if (nube && nube.nombre) { sesion.nombre = nube.nombre; escribir(SESION_KEY, sesion); }
    const local = loadState(claveDeUsuario(sesion.uid));
    let inicial = nube && nube.progreso ? mezclar(local, nube.progreso) : local;
    inicial = ofrecerMigrar(inicial);
    activarUsuario(sesion.uid, inicial);
    sincronizar();
  }

  async function crearCuenta(nombre, usuario, clave) {
    const r = await api.registrar(usuario + DOMINIO, clave);
    sesion = { uid: r.localId, usuario: usuario, nombre: nombre };
    guardarTokens(r);
    escribir(SIN_CUENTA_KEY, null);
    const inicial = ofrecerMigrar(loadState(claveDeUsuario(sesion.uid)));
    activarUsuario(sesion.uid, inicial);
    await sincronizar();
  }

  async function salir() {
    if (!confirm("¿Cerrar sesión en este teléfono?\n\nTu avance queda guardado en tu cuenta.")) return;
    clearTimeout(temporizador);
    if (navigator.onLine !== false) await sincronizar();
    cerrarSesionLocal();
    closeSettings();
    toast("Sesión cerrada.");
    location.hash = "#/login";
  }

  /* ---------------- Pantallas de entrar y crear cuenta ---------------- */

  function campo(id, etiqueta, tipo, autocompletar, extra) {
    const esClave = tipo === "password";
    return '<div class="auth-field"><label for="' + id + '">' + etiqueta + "</label>" +
      '<div class="auth-input"><input id="' + id + '" type="' + tipo + '"' + (esClave ? ' class="con-ojo"' : "") + ' autocomplete="' + autocompletar + '" ' + (extra || "") + ">" +
      (esClave ? '<button type="button" class="auth-eye" data-ojo="' + id + '" title="Mostrar u ocultar la clave">👁</button>' : "") +
      "</div></div>";
  }

  function vista(tipo) {
    if (tipo === "registro") {
      return '<section class="auth-card">' +
        '<div class="auth-ico">📝</div>' +
        "<h2>Crea tu cuenta</h2>" +
        '<p class="auth-lead">Toma un minuto. No necesitas correo: con un usuario y una clave basta. Tu avance te va a seguir a cualquier teléfono.</p>' +
        '<form id="authForm" novalidate>' +
        campo("authName", "Tu nombre", "text", "name", 'placeholder="ej. María Jiménez"') +
        campo("authUser", "Usuario", "text", "username", 'autocapitalize="none" spellcheck="false" placeholder="ej. maria.jimenez"') +
        '<div class="auth-hint" id="authUserHint">Sin espacios ni acentos: letras, números, punto o guion.</div>' +
        campo("authPass", "Clave (mínimo 6 caracteres)", "password", "new-password", "") +
        campo("authPass2", "Repite la clave", "password", "new-password", "") +
        '<div class="auth-hint">⚠️ Anota tu clave en un lugar seguro. Como no usamos correo, no se puede recuperar sola.</div>' +
        '<button class="btn primary big auth-go" type="submit">Crear mi cuenta</button>' +
        "</form>" +
        '<div class="auth-msg" id="authMsg" role="status"></div>' +
        '<p class="auth-alt">¿Ya tienes cuenta? <a href="#/login">Entra aquí</a></p>' +
        "</section>";
    }
    return '<section class="auth-card">' +
      '<div class="auth-ico">👷</div>' +
      "<h2>Entra a tu cuenta</h2>" +
      '<p class="auth-lead">Cada persona estudia con su propio usuario. Tu avance se guarda en la nube y te sigue a cualquier teléfono.</p>' +
      '<form id="authForm" novalidate>' +
      campo("authUser", "Usuario", "text", "username", 'autocapitalize="none" spellcheck="false" placeholder="ej. cesar"') +
      campo("authPass", "Clave", "password", "current-password", "") +
      '<button class="btn primary big auth-go" type="submit">Entrar</button>' +
      "</form>" +
      '<div class="auth-msg" id="authMsg" role="status"></div>' +
      '<p class="auth-alt">¿Primera vez? <a href="#/registro">Crea tu cuenta aquí</a></p>' +
      '<p class="auth-skip"><a href="#/home" id="authSkip">Usar sin cuenta en este teléfono</a></p>' +
      "</section>";
  }

  function valor(id) { const el = document.getElementById(id); return el ? el.value : ""; }

  function aviso(texto, clase) {
    const el = document.getElementById("authMsg");
    if (!el) return;
    el.className = "auth-msg" + (clase ? " " + clase : "");
    el.textContent = texto;
  }

  function bloquear(si) {
    const f = document.getElementById("authForm");
    if (!f) return;
    Array.prototype.forEach.call(f.querySelectorAll("input, button"), function (x) { x.disabled = si; });
  }

  function conectarVista(tipo) {
    const form = document.getElementById("authForm");
    Array.prototype.forEach.call(document.querySelectorAll("[data-ojo]"), function (b) {
      b.addEventListener("click", function () {
        const inp = document.getElementById(b.getAttribute("data-ojo"));
        inp.type = inp.type === "password" ? "text" : "password";
      });
    });

    if (tipo === "registro") {
      const u = document.getElementById("authUser");
      const hint = document.getElementById("authUserHint");
      u.addEventListener("input", function () {
        const limpio = limpiarUsuario(u.value);
        hint.innerHTML = limpio
          ? "Tu usuario será: <b>" + esc(limpio) + "</b>" + (usuarioValido(limpio) ? " ✅" : " — debe empezar con letra y tener de 3 a 20 caracteres")
          : "Sin espacios ni acentos: letras, números, punto o guion.";
      });
      document.getElementById("authName").focus();
    } else {
      document.getElementById("authUser").focus();
      document.getElementById("authSkip").addEventListener("click", function (ev) {
        ev.preventDefault();
        escribir(SIN_CUENTA_KEY, "1");
        location.hash = "#/home";
      });
    }

    form.addEventListener("submit", async function (ev) {
      ev.preventDefault();
      const usuario = limpiarUsuario(valor("authUser"));
      const clave = valor("authPass");

      if (tipo === "registro") {
        const nombre = valor("authName").trim();
        if (!nombre) return aviso("Escribe tu nombre.");
        if (!usuarioValido(usuario)) return aviso("El usuario debe empezar con letra y tener de 3 a 20 caracteres: letras, números, punto o guion.");
        if (clave.length < 6) return aviso("La clave debe tener al menos 6 caracteres.");
        if (clave !== valor("authPass2")) return aviso("Las dos claves no coinciden.");
        bloquear(true);
        aviso("Creando tu cuenta…", "info");
        try {
          await crearCuenta(nombre, usuario, clave);
          toast("✅ Cuenta creada. ¡Bienvenido, " + nombre + "!", 3500);
          location.hash = "#/home";
        } catch (e) {
          bloquear(false);
          aviso(textoError(e.message));
        }
        return;
      }

      if (!usuario || !clave) return aviso("Escribe tu usuario y tu clave.");
      bloquear(true);
      aviso("Entrando…", "info");
      try {
        await entrarConCuenta(usuario, clave);
        toast("👋 ¡Hola, " + sesion.nombre + "!", 3000);
        location.hash = "#/home";
      } catch (e) {
        bloquear(false);
        aviso(textoError(e.message));
      }
    });
  }

  /* ---------------- Cuenta dentro de Ajustes ---------------- */

  function pintarAjustes() {
    const box = document.getElementById("cuentaBox");
    if (!box) return;
    if (!activo) { box.hidden = true; box.innerHTML = ""; return; }
    box.hidden = false;

    if (!sesion) {
      box.innerHTML = '<div class="cuenta-info">📱 Estás usando la app <b>sin cuenta</b>: tu avance solo vive en este teléfono.</div>' +
        '<div class="cuenta-acciones"><button class="btn primary" type="button" id="btnEntrar">👤 Entrar o crear cuenta</button></div>';
      document.getElementById("btnEntrar").addEventListener("click", function () {
        escribir(SIN_CUENTA_KEY, null);
        closeSettings();
        location.hash = "#/login";
      });
      return;
    }

    box.innerHTML = '<div class="cuenta-info">👤 <b>' + esc(sesion.nombre) + "</b> · usuario <code>" + esc(sesion.usuario) + "</code>" +
      '<div class="cuenta-estado" id="cuentaEstado">' + esc(textoEstado || "☁️ Tu avance se guarda en la nube.") + "</div></div>" +
      '<div class="cuenta-acciones">' +
      '<button class="btn ghost" type="button" id="btnClave">🔑 Cambiar clave</button>' +
      '<button class="btn ghost" type="button" id="btnSalir">🚪 Cerrar sesión</button>' +
      "</div>" +
      '<div class="cuenta-clave" id="cuentaClave" hidden>' +
      '<input id="claveActual" type="password" autocomplete="current-password" placeholder="Clave actual">' +
      '<input id="claveNueva" type="password" autocomplete="new-password" placeholder="Clave nueva (mínimo 6)">' +
      '<button class="btn primary" type="button" id="btnGuardarClave">Guardar clave nueva</button>' +
      '<div class="cuenta-estado" id="claveMsg"></div>' +
      "</div>";

    document.getElementById("btnSalir").addEventListener("click", salir);
    document.getElementById("btnClave").addEventListener("click", function () {
      const c = document.getElementById("cuentaClave");
      c.hidden = !c.hidden;
      if (!c.hidden) document.getElementById("claveActual").focus();
    });
    document.getElementById("btnGuardarClave").addEventListener("click", async function () {
      const msg = document.getElementById("claveMsg");
      const actual = valor("claveActual"), nueva = valor("claveNueva");
      if (nueva.length < 6) { msg.textContent = "La clave nueva debe tener al menos 6 caracteres."; return; }
      msg.textContent = "Guardando…";
      try {
        /* Firebase exige haber entrado hace poco: se vuelve a entrar con la clave actual */
        const r1 = await api.entrar(sesion.usuario + DOMINIO, actual);
        guardarTokens(await api.cambiarClave(r1.idToken, nueva));
        msg.textContent = "✅ Clave cambiada. Úsala la próxima vez que entres.";
        document.getElementById("claveActual").value = "";
        document.getElementById("claveNueva").value = "";
      } catch (e) {
        msg.textContent = textoError(e.message);
      }
    });
    if (navigator.onLine !== false) sincronizar();
  }

  return {
    activo: function () { return activo; },
    uid: function () { return activo && sesion ? sesion.uid : null; },
    nombre: function () { return activo && sesion ? sesion.nombre : null; },
    pideEntrar: function () { return activo && !sesion && leer(SIN_CUENTA_KEY) !== "1"; },
    programar: programar,
    sincronizar: sincronizar,
    vista: vista,
    conectarVista: conectarVista,
    pintarAjustes: pintarAjustes,
    /* para pruebas */
    _api: api,
    _mezclar: mezclar,
    _limpiarUsuario: limpiarUsuario
  };
})();
