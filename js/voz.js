/* ============================================================
   VOZ.JS — Reconocimiento de voz
   Tú dices la palabra o la frase en inglés y la app te muestra
   qué palabras se entendieron (verde) y cuáles no (rojo).
   Usa el reconocedor del navegador (Chrome en Android, Safari en
   iPhone). Necesita internet: el audio lo procesa el servidor.
   ============================================================ */

const Voz = (function () {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  const disponible = !!SR;
  if (!disponible) document.documentElement.classList.add("no-mic");

  /* ---------- Normalización: lo dicho y lo escrito a la misma forma ---------- */

  const CONTRACCIONES = {
    "i'm": "i am", "you're": "you are", "we're": "we are", "they're": "they are",
    "it's": "it is", "that's": "that is", "what's": "what is", "where's": "where is",
    "who's": "who is", "there's": "there is", "here's": "here is", "how's": "how is",
    "he's": "he is", "she's": "she is", "let's": "let us",
    "i'll": "i will", "you'll": "you will", "we'll": "we will", "it'll": "it will",
    "i've": "i have", "you've": "you have", "we've": "we have", "i'd": "i would",
    "don't": "do not", "doesn't": "does not", "didn't": "did not", "can't": "can not",
    "won't": "will not", "isn't": "is not", "aren't": "are not", "wasn't": "was not",
    "weren't": "were not", "shouldn't": "should not", "couldn't": "could not",
    "wouldn't": "would not", "haven't": "have not", "hasn't": "has not"
  };

  const UNIDADES = {
    zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8,
    nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15,
    sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19
  };
  const DECENAS = { twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90 };
  const FRACCIONES = { "1/2": " half ", "1/4": " quarter ", "3/4": " three quarter " };

  /* "thirty five" -> "35",  "ten" -> "10": así da igual si se escribe o se dice */
  function numeros(tk) {
    const out = [];
    for (let i = 0; i < tk.length; i++) {
      const w = tk[i];
      if (DECENAS[w] !== undefined) {
        const u = UNIDADES[tk[i + 1]];
        if (u !== undefined && u > 0 && u < 10) { out.push(String(DECENAS[w] + u)); i++; }
        else out.push(String(DECENAS[w]));
      } else if (UNIDADES[w] !== undefined) {
        if (tk[i + 1] === "hundred") { out.push(String(UNIDADES[w] * 100)); i++; }
        else out.push(String(UNIDADES[w]));
      } else {
        out.push(w);
      }
    }
    return out;
  }

  /* El reconocedor a veces deletrea las siglas: "p d u" -> "pdu" */
  function unirLetras(tk) {
    const out = [];
    let i = 0;
    while (i < tk.length) {
      if (/^[a-z]$/.test(tk[i]) && /^[a-z]$/.test(tk[i + 1] || "")) {
        let w = "";
        while (i < tk.length && /^[a-z]$/.test(tk[i])) { w += tk[i]; i++; }
        out.push(w);
      } else {
        out.push(tk[i]);
        i++;
      }
    }
    return out;
  }

  function tokens(texto) {
    let s = String(texto || "").toLowerCase();
    s = s.replace(/\(.*?\)/g, " ");
    s = s.replace(/[‘’ʼ`]/g, "'");
    s = s.replace(/[–—]/g, " ");
    s = s.replace(/\$\s?(\d+)/g, " $1 dollars ");
    s = s.replace(/(\d+)\s*%/g, " $1 percent ");
    s = s.replace(/(\d+)\s*°/g, " $1 degree ");
    s = s.replace(/\b(\d)\/(\d)\b/g, function (m) { return FRACCIONES[m] || " " + m.replace("/", " ") + " "; });
    s = s.replace(/(\d)\s*"/g, "$1 inch ");
    s = s.replace(/&/g, " and ");
    s = s.replace(/\+/g, " plus ");
    s = s.replace(/[a-z]+'[a-z]+/g, function (w) { return CONTRACCIONES[w] || w; });
    s = s.replace(/'/g, "");
    s = s.replace(/[^a-z0-9]+/g, " ").trim();
    if (!s) return [];
    let tk = s.split(" ").map(function (w) {
      return w === "quarters" ? "quarter" : w === "halves" ? "half" : w;
    });
    tk = numeros(tk);
    tk = unirLetras(tk);
    return tk;
  }

  /* ---------- Comparación palabra por palabra ---------- */

  function lev(a, b) {
    if (a === b) return 0;
    const n = b.length;
    if (!a.length) return n;
    if (!n) return a.length;
    let prev = new Array(n + 1), cur = new Array(n + 1);
    for (let j = 0; j <= n; j++) prev[j] = j;
    for (let i = 1; i <= a.length; i++) {
      cur[0] = i;
      for (let j = 1; j <= n; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
      const t = prev; prev = cur; cur = t;
    }
    return prev[n];
  }

  /* Tolera un error pequeño en palabras largas ("screw"/"screws"),
     pero las cortas tienen que coincidir exacto: "wire" y "wine"
     son palabras distintas. Los números, siempre exactos. */
  function parecido(a, b) {
    if (a === b) return true;
    if (/\d/.test(a) || /\d/.test(b)) return false;
    const L = Math.max(a.length, b.length);
    const permitidos = L <= 4 ? 0 : L <= 7 ? 1 : 2;
    return permitidos > 0 && lev(a, b) <= permitidos;
  }

  /* Alinea lo esperado con lo oído respetando el orden (subsecuencia común más larga) */
  function alinear(obj, oido) {
    const n = obj.length, m = oido.length;
    const dp = [];
    for (let i = 0; i <= n; i++) dp.push(new Array(m + 1).fill(0));
    for (let i = n - 1; i >= 0; i--) {
      for (let j = m - 1; j >= 0; j--) {
        dp[i][j] = parecido(obj[i], oido[j]) ? 1 + dp[i + 1][j + 1] : Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
    const ok = new Array(n).fill(false);
    let i = 0, j = 0;
    while (i < n && j < m) {
      if (parecido(obj[i], oido[j]) && dp[i][j] === 1 + dp[i + 1][j + 1]) { ok[i] = true; i++; j++; }
      else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
      else j++;
    }
    return ok;
  }

  function puntuar(obj, oido) {
    let ok = alinear(obj, oido);
    let score = ok.filter(Boolean).length / obj.length;
    /* Términos cortos dichos "pegados" o separados: "channel locks" = "channellocks" */
    if (score < 1 && obj.length <= 3 && oido.length) {
      const a = obj.join(""), b = oido.join("");
      if (a.length >= 4 && 1 - lev(a, b) / Math.max(a.length, b.length) >= 0.85) {
        ok = obj.map(function () { return true; });
        score = 1;
      }
    }
    return { score: score, ok: ok };
  }

  /* Los términos con "/" aceptan cualquiera de sus variantes,
     igual que en el examen. Los ejemplos se evalúan completos. */
  function variantes(objetivo, dividir) {
    if (!dividir) return [String(objetivo)];
    return String(objetivo).replace(/\(.*?\)/g, "").split("/")
      .map(function (s) { return s.trim(); }).filter(Boolean);
  }

  function evaluar(objetivo, alternativas, dividir) {
    let mejor = { score: 0, obj: [], ok: [], oido: alternativas[0] || "" };
    let hubo = false;
    variantes(objetivo, dividir).forEach(function (v) {
      const obj = tokens(v);
      if (!obj.length) return;
      alternativas.forEach(function (alt) {
        const r = puntuar(obj, tokens(alt));
        if (!hubo || r.score > mejor.score) {
          mejor = { score: r.score, obj: obj, ok: r.ok, oido: alt };
          hubo = true;
        }
      });
    });
    return mejor;
  }

  /* ---------- Pintar el texto: verde se entendió, rojo no ---------- */

  function limpiarColores(el) {
    if (!el) return;
    Array.prototype.forEach.call(el.querySelectorAll(".w"), function (s) {
      s.classList.remove("dicho-ok", "dicho-mal");
    });
  }

  function pintar(el, r) {
    const spans = wrapWords(el);
    if (!spans) return;
    const bienCnt = {}, malCnt = {};
    r.obj.forEach(function (t, i) {
      const d = r.ok[i] ? bienCnt : malCnt;
      d[t] = (d[t] || 0) + 1;
    });
    Array.prototype.forEach.call(spans, function (s) {
      s.classList.remove("dicho-ok", "dicho-mal");
      let bien = false, mal = false;
      tokens(s.textContent).forEach(function (t) {
        if (bienCnt[t] > 0) { bienCnt[t]--; bien = true; }
        else if (malCnt[t] > 0) { malCnt[t]--; mal = true; }
      });
      if (mal) s.classList.add("dicho-mal");
      else if (bien) s.classList.add("dicho-ok");
    });
  }

  /* ---------- Escuchar ---------- */

  let escuchando = null;   // reconocimiento en curso

  function mostrar(res, clase, html) {
    if (!res) return;
    res.className = "mic-res show " + clase;
    res.innerHTML = html;
  }

  function mensajeError(e) {
    if (e === "not-allowed" || e === "service-not-allowed") {
      return "🔒 La app no tiene permiso para usar el micrófono. Actívalo en los ajustes del navegador para este sitio y vuelve a intentarlo.";
    }
    if (e === "audio-capture") return "🎤 No se encontró micrófono en este aparato.";
    if (e === "network") return "📶 El reconocimiento de voz necesita internet. Revisa tu conexión.";
    if (e === "language-not-supported") return "Este navegador no reconoce inglés por voz.";
    return "🎤 No se pudo escuchar (" + esc(e) + "). Intenta otra vez.";
  }

  function mostrarResultado(res, r) {
    const pct = Math.round(r.score * 100);
    let clase, titulo;
    if (pct === 100) { clase = "good"; titulo = "✅ ¡Perfecto! Se entendió todo."; }
    else if (pct >= 75) { clase = "ok"; titulo = "👍 ¡Bien! Casi todo se entendió."; }
    else { clase = "bad"; titulo = "🔁 Otra vez. Escúchalo lento y repítelo."; }
    mostrar(res, clase,
      '<span class="mic-pct">' + pct + "%</span><b>" + titulo + "</b>" +
      '<div class="mic-oido">Escuché: «' + esc(r.oido) + "»</div>" +
      (pct < 100 ? '<div class="mic-tip">Las palabras en <span class="dicho-mal-demo">rojo</span> no se entendieron.</div>' : ""));
  }

  function registrar(clave, score) {
    if (!clave) return;
    const pct = Math.round(score * 100);
    state.speech = state.speech || {};
    if (!(state.speech[clave] >= pct)) {
      state.speech[clave] = pct;
      saveState();
      refrescarContador();
    }
  }

  /* El contador "🎤 X/N pronunciados" del módulo se actualiza al momento */
  function refrescarContador() {
    const badge = document.querySelector(".mic-badge");
    const r = route();
    if (!badge || r.view !== "module") return;
    const f = findModule(r.id);
    if (f) badge.textContent = "🎤 " + dominados(f.module) + "/" + f.module.items.length + " pronunciados";
  }

  function detener() {
    if (!escuchando) return;
    const s = escuchando;
    escuchando = null;
    s.cancelado = true;
    try { s.rec.abort(); } catch (e) { /* ya terminó */ }
    s.boton.classList.remove("escuchando");
    s.boton.innerHTML = s.textoBoton;
  }

  function escuchar(b) {
    const el = document.querySelector(b.getAttribute("data-mic"));
    const res = document.querySelector(b.getAttribute("data-res"));
    const objetivo = b.getAttribute("data-obj") || "";
    const dividir = b.getAttribute("data-frase") !== "1";
    const clave = b.getAttribute("data-key");

    if (!disponible) {
      toast("🎤 Este navegador no reconoce voz. Usa Chrome en Android o Safari en iPhone.", 4000);
      return;
    }
    if (navigator.onLine === false) {
      toast("📶 Para practicar pronunciación necesitas internet.", 3500);
      return;
    }

    detener();
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    clearHighlight();
    limpiarColores(el);

    const rec = new SR();
    rec.lang = "en-US";
    rec.continuous = false;
    rec.interimResults = true;
    rec.maxAlternatives = 5;

    const s = { rec: rec, boton: b, textoBoton: b.innerHTML, finales: [], error: null, cancelado: false };
    escuchando = s;
    b.classList.add("escuchando");
    b.innerHTML = b.classList.contains("mini-audio") ? "⏹" : "⏹ Detener";
    const meta = dividir ? speakableEn(objetivo).split(".")[0] : objetivo;
    mostrar(res, "listening", "🎙️ Te escucho… di en inglés: <b>" + esc(meta) + "</b>");

    rec.onresult = function (e) {
      let parcial = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i];
        if (r.isFinal) {
          const alts = [];
          for (let k = 0; k < r.length; k++) alts.push(r[k].transcript);
          s.finales.push(alts);
        } else {
          parcial += r[0].transcript;
        }
      }
      if (parcial && !s.cancelado) mostrar(res, "listening", "🎙️ " + esc(parcial) + "…");
    };
    rec.onerror = function (e) { s.error = e.error; };
    rec.onend = function () {
      if (s.cancelado) return;
      if (escuchando === s) escuchando = null;
      b.classList.remove("escuchando");
      b.innerHTML = s.textoBoton;

      if (s.error && s.error !== "no-speech" && s.error !== "aborted") {
        mostrar(res, "bad", mensajeError(s.error));
        return;
      }
      let alternativas = [];
      if (s.finales.length === 1) alternativas = s.finales[0];
      else if (s.finales.length > 1) {
        alternativas.push(s.finales.map(function (a) { return a[0]; }).join(" "));
        s.finales.forEach(function (a) { alternativas = alternativas.concat(a); });
      }
      if (!alternativas.length) {
        mostrar(res, "bad", "🔇 No te escuché. Toca 🎤 y habla cerca del micrófono.");
        return;
      }
      const r = evaluar(objetivo, alternativas, dividir);
      if (el) pintar(el, r);
      mostrarResultado(res, r);
      registrar(clave, r.score);
      if (practica && clave === practica.claveActual) {
        const pct = Math.round(r.score * 100);
        if (practica.mejores[practica.i] === null || pct > practica.mejores[practica.i]) practica.mejores[practica.i] = pct;
      }
    };

    try {
      rec.start();
    } catch (err) {
      escuchando = null;
      b.classList.remove("escuchando");
      b.innerHTML = s.textoBoton;
      mostrar(res, "bad", "🎤 No se pudo iniciar el micrófono. Intenta otra vez.");
    }
  }

  /* Cualquier botón con data-mic escucha al tocarlo; si ya está
     escuchando, el segundo toque termina y califica. */
  document.addEventListener("click", function (ev) {
    const b = ev.target.closest("[data-mic]");
    if (!b) return;
    ev.preventDefault();
    ev.stopPropagation();
    if (escuchando && escuchando.boton === b) {
      try { escuchando.rec.stop(); } catch (e) { /* ya terminó */ }
      return;
    }
    escuchar(b);
  });

  /* ---------- Modo práctica: término por término ---------- */

  let practica = null;

  function dominados(m) {
    const sp = state.speech || {};
    let n = 0;
    m.items.forEach(function (it, i) { if (sp[m.id + ":" + i + ":t"] >= 75) n++; });
    return n;
  }

  function iniciarPractica(lv, m) {
    if (!disponible) {
      document.getElementById("app").innerHTML =
        '<div class="result-card"><div class="big-emoji">🎤</div><h2>Tu navegador no reconoce voz</h2>' +
        "<p>Para practicar pronunciación abre la app en <b>Chrome</b> (Android) o <b>Safari</b> (iPhone), con internet.</p>" +
        '<div class="result-actions"><button class="btn ghost" onclick="location.hash=\'#/module/' + m.id + '\'">← Volver al módulo</button></div></div>';
      return;
    }
    practica = { lv: lv, m: m, i: 0, mejores: m.items.map(function () { return null; }), claveActual: null };
    pintarPractica();
  }

  function pintarPractica() {
    const p = practica, m = p.m, it = m.items[p.i], n = m.items.length;
    const clave = m.id + ":" + p.i;
    p.claveActual = clave + ":t";
    const pct = Math.round((p.i / n) * 100);
    const decir = speakableEn(it.en);

    let html = '<div class="quiz-wrap">' +
      '<div class="quiz-top">' +
      '<span class="qcount">🎤 Pronunciación · ' + (p.i + 1) + "/" + n + "</span>" +
      '<div class="qbar"><span style="width:' + pct + '%"></span></div>' +
      '<button class="btn ghost quit" onclick="location.hash=\'#/module/' + m.id + '\'">✕ Salir</button>' +
      "</div>" +
      '<div class="question-card speak-card">' +
      '<div class="q-kind">🗣️ Escucha y repite en voz alta</div>' +
      '<div class="speak-es">' + esc(it.es) + "</div>" +
      '<div class="q-prompt"><span id="spkEn">' + esc(it.en) + "</span></div>" +
      '<div class="q-sub">🗣 ' + esc(it.pron) + "</div>" +
      '<div class="speak-audio">' +
      '<button class="audio-btn" data-say="' + esc(decir) + '" data-lang="en" data-hl="#spkEn">🔊 Escuchar</button>' +
      '<button class="audio-btn drill" data-say="' + esc(decir) + '" data-lang="en" data-hl="#spkEn" data-mode="drill">🐢→🐇 Lento y normal</button>' +
      "</div>" +
      '<div class="speak-mic"><button class="btn primary big" data-mic="#spkEn" data-res="#spkRes" data-obj="' + esc(it.en) + '" data-key="' + clave + ':t">🎤 Dilo en inglés</button></div>' +
      '<div class="mic-res" id="spkRes"></div>';

    if (it.exEn) {
      html += '<div class="speak-ex">' +
        '<div class="q-kind">💬 Ahora en una frase</div>' +
        '<div class="en-ex">🇺🇸 <span id="spkEx">' + esc(it.exEn) + "</span> " +
        '<button class="mini-audio" title="Escuchar" data-say="' + esc(it.exEn) + '" data-lang="en" data-hl="#spkEx">🔊</button>' +
        '<button class="mini-audio" title="Lento y luego normal" data-say="' + esc(it.exEn) + '" data-lang="en" data-hl="#spkEx" data-mode="drill">🐢</button></div>' +
        '<div class="es-ex">🇲🇽 ' + esc(it.exEs || "") + "</div>" +
        '<button class="audio-btn mic" data-mic="#spkEx" data-res="#spkExRes" data-obj="' + esc(it.exEn) + '" data-frase="1" data-key="' + clave + ':e">🎤 Decir la frase</button>' +
        '<div class="mic-res" id="spkExRes"></div>' +
        "</div>";
    }

    html += '<div class="speak-nav">' +
      (p.i > 0 ? '<button class="btn ghost" id="spkPrev">← Anterior</button>' : "<span></span>") +
      '<button class="btn dark" id="spkNext">' + (p.i === n - 1 ? "Ver resumen →" : "Siguiente →") + "</button>" +
      "</div></div></div>";

    document.getElementById("app").innerHTML = html;
    window.scrollTo(0, 0);

    document.getElementById("spkNext").addEventListener("click", function () {
      detener();
      if (p.i < n - 1) { p.i++; pintarPractica(); }
      else resumenPractica();
    });
    const prev = document.getElementById("spkPrev");
    if (prev) prev.addEventListener("click", function () { detener(); p.i--; pintarPractica(); });

    setTimeout(function () {
      if (practica === p && p.claveActual === clave + ":t" && !escuchando) speak(decir, "en", document.getElementById("spkEn"));
    }, 350);
  }

  function resumenPractica() {
    const p = practica, m = p.m;
    const bien = p.mejores.filter(function (x) { return x !== null && x >= 75; }).length;
    const faltan = m.items
      .map(function (it, i) { return { it: it, s: p.mejores[i] }; })
      .filter(function (o) { return o.s === null || o.s < 75; });
    const todo = bien === m.items.length;

    let lista = "";
    if (faltan.length) {
      lista = '<div class="missed-list"><h4>📌 Practica más estos:</h4>';
      faltan.forEach(function (o) {
        lista += '<div class="missed-item"><span class="en">' + esc(o.it.en) +
          ' <button class="mini-audio" data-say="' + esc(speakableEn(o.it.en)) + '" data-lang="en">🔊</button></span>' +
          '<span class="es">' + (o.s === null ? "sin intentar" : o.s + "%") + "</span></div>";
      });
      lista += "</div>";
    }

    document.getElementById("app").innerHTML =
      '<div class="result-card">' +
      '<div class="big-emoji">' + (todo ? "🏆" : "🎤") + "</div>" +
      "<h2>Práctica de pronunciación terminada</h2>" +
      '<div class="score ' + (todo ? "pass" : "") + '">' + bien + "/" + m.items.length + "</div>" +
      "<p>" + (todo
        ? "¡Se te entendió todo el módulo! Así te van a entender en la obra."
        : "Términos que se entendieron al menos al 75%. Repite los que faltan: escúchalos lento y dilos en voz alta.") + "</p>" +
      lista +
      '<div class="result-actions">' +
      '<button class="btn ghost" onclick="location.hash=\'#/module/' + m.id + '\'">📚 Volver al módulo</button>' +
      '<button class="btn primary" id="spkOtra">🔄 Practicar de nuevo</button>' +
      "</div></div>";
    window.scrollTo(0, 0);
    document.getElementById("spkOtra").addEventListener("click", function () { iniciarPractica(p.lv, m); });
  }

  return {
    disponible: disponible,
    detener: detener,
    dominados: dominados,
    iniciarPractica: iniciarPractica,
    /* para pruebas */
    _tokens: tokens,
    _evaluar: evaluar
  };
})();
