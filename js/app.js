/* ============================================================
   APP.JS — Lógica de la aplicación
   Navegación, estudio, audio (TTS), exámenes con regla del 100%
   y progreso guardado en el navegador (localStorage).
   ============================================================ */

/* ---------------- Estado y progreso ---------------- */

const STORE_KEY = "electricEnglishProgress_v1";

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const s = JSON.parse(raw);
      s.passed = s.passed || {};
      s.tries = s.tries || {};
      s.settings = Object.assign({ rate: 0.9 }, s.settings);
      return s;
    }
  } catch (e) { /* almacenamiento corrupto: empezar de cero */ }
  return { passed: {}, tries: {}, settings: { rate: 0.9 } };
}

function saveState() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* sin espacio */ }
}

function isPassed(modId) { return !!state.passed[modId]; }

function isLevelUnlocked(level) {
  if (level.alwaysUnlocked) return true;
  if (level.num === 1) return true;
  const prev = COURSE.levels.find(function (l) { return l.num === level.num - 1; });
  return prev.modules.every(function (m) { return isPassed(m.id); });
}

function isModuleUnlocked(modId) {
  for (let li = 0; li < COURSE.levels.length; li++) {
    const lv = COURSE.levels[li];
    for (let mi = 0; mi < lv.modules.length; mi++) {
      if (lv.modules[mi].id !== modId) continue;
      if (!isLevelUnlocked(lv)) return false;
      // En las secciones siempre abiertas no hay orden obligatorio
      if (lv.alwaysUnlocked) return true;
      if (mi === 0) return true;
      return isPassed(lv.modules[mi - 1].id);
    }
  }
  return false;
}

function nextModuleAfter(modId) {
  const mods = allModules();
  const idx = mods.findIndex(function (x) { return x.module.id === modId; });
  if (idx >= 0 && idx < mods.length - 1) return mods[idx + 1];
  return null;
}

function courseProgress() {
  const mods = allModules();
  const done = mods.filter(function (x) { return isPassed(x.module.id); }).length;
  return { done: done, total: mods.length, pct: Math.round((done / mods.length) * 100) };
}

/* ---------------- Utilidades ---------------- */

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

function sample(arr, n) { return shuffle(arr).slice(0, n); }

function toast(msg, ms) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(function () { t.classList.remove("show"); }, ms || 2600);
}

/* ---------------- Audio (voz del navegador) ---------------- */

let voices = [];

function refreshVoices() {
  if (!("speechSynthesis" in window)) return;
  voices = speechSynthesis.getVoices() || [];
  updateVoicesInfo();
}
if ("speechSynthesis" in window) {
  refreshVoices();
  speechSynthesis.onvoiceschanged = refreshVoices;
}

function pickVoice(lang) {
  const prefs = lang === "en"
    ? ["en-us", "en-gb", "en"]
    : ["es-mx", "es-us", "es-es", "es-419", "es"];
  for (let p = 0; p < prefs.length; p++) {
    const v = voices.find(function (v) {
      return v.lang && v.lang.replace("_", "-").toLowerCase().indexOf(prefs[p]) === 0;
    });
    if (v) return v;
  }
  return null;
}

/* ---------- Resaltado palabra por palabra (karaoke) ---------- */

let hlSpans = null;   // palabras del texto que se está leyendo
let hlWatch = null;   // vigilante por si el navegador no avisa que terminó

/* Envuelve cada palabra del elemento en un <span> para poder pintarla */
function wrapWords(el) {
  if (!el) return null;
  if (el.dataset.wrapped === "1") return el.querySelectorAll(".w");

  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
  const nodes = [];
  let n;
  while ((n = walker.nextNode())) nodes.push(n);

  nodes.forEach(function (node) {
    const frag = document.createDocumentFragment();
    node.textContent.split(/(\s+)/).forEach(function (part) {
      if (!part) return;
      if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
      const s = document.createElement("span");
      s.className = "w";
      s.textContent = part;
      frag.appendChild(s);
    });
    node.parentNode.replaceChild(frag, node);
  });

  el.dataset.wrapped = "1";
  return el.querySelectorAll(".w");
}

function clearHighlight() {
  if (hlWatch) { clearInterval(hlWatch); hlWatch = null; }
  if (!hlSpans) return;
  Array.prototype.forEach.call(hlSpans, function (s) { s.classList.remove("speaking-word"); });
  hlSpans = null;
}

/* Cuenta cuántas palabras hay antes de esta posición del texto */
function wordIndexAt(text, charIndex) {
  const before = text.slice(0, charIndex);
  const m = before.match(/\S+/g);
  return m ? m.length : 0;
}

const RATE_LENTO = 0.55;   // para que el oído separe cada palabra
const RATE_NORMAL = 1;     // velocidad real de la obra

let chainActive = false;
let chainId = 0;           // invalida reproducciones anteriores

/* Lee el texto una vez por cada velocidad de la lista.
   [0.9] = una pasada normal;  [0.55, 1] = lento y luego normal. */
function speakChain(text, lang, hlEl, rates) {
  if (!("speechSynthesis" in window)) { toast("Tu navegador no soporta voz. Prueba con Chrome o Edge."); return; }

  const myId = ++chainId;   // esta reproducción toma el control
  speechSynthesis.cancel();
  clearHighlight();
  chainActive = true;

  const spans = wrapWords(hlEl);
  if (spans && spans.length) hlSpans = spans;

  function apagarPalabras() {
    if (spans) Array.prototype.forEach.call(spans, function (s) { s.classList.remove("speaking-word"); });
  }

  let i = 0;
  function siguiente() {
    if (myId !== chainId) return;               // otro audio tomó el control
    if (i >= rates.length) { chainActive = false; clearHighlight(); return; }

    const rate = rates[i++];
    const u = new SpeechSynthesisUtterance(text);
    const v = pickVoice(lang);
    if (v) u.voice = v;
    u.lang = v ? v.lang : (lang === "en" ? "en-US" : "es-MX");
    u.rate = rate;

    if (spans && spans.length) {
      u.onboundary = function (ev) {
        if (myId !== chainId) return;
        if (ev.name && ev.name !== "word") return;
        const k = wordIndexAt(text, ev.charIndex);
        Array.prototype.forEach.call(spans, function (s, j) {
          s.classList.toggle("speaking-word", j === k);
        });
      };
    }
    u.onend = function () {
      if (myId !== chainId) return;
      apagarPalabras();
      // pausa breve entre la pasada lenta y la normal
      setTimeout(siguiente, i < rates.length ? 600 : 0);
    };
    u.onerror = function () {
      if (myId !== chainId) return;
      chainActive = false; clearHighlight();
    };

    speechSynthesis.speak(u);
  }
  siguiente();

  // Vigilante: algunos navegadores no disparan onend
  if (hlWatch) clearInterval(hlWatch);
  hlWatch = setInterval(function () {
    if (!chainActive && !speechSynthesis.speaking && !speechSynthesis.pending) clearHighlight();
  }, 200);
}

/* Una sola pasada, a la velocidad configurada */
function speak(text, lang, hlEl) {
  speakChain(text, lang, hlEl, [lang === "en" ? state.settings.rate : 1]);
}

/* Lento y luego normal: la técnica de práctica */
function speakDrill(text, lang, hlEl) {
  speakChain(text, lang, hlEl, [RATE_LENTO, RATE_NORMAL]);
}

/* Delegación: cualquier elemento con data-say habla al hacer clic.
   data-hl (selector) indica qué texto se va pintando mientras habla. */
document.addEventListener("click", function (ev) {
  const el = ev.target.closest("[data-say]");
  if (!el) return;
  ev.stopPropagation();
  const sel = el.getAttribute("data-hl");
  const target = sel ? document.querySelector(sel) : null;
  const texto = el.getAttribute("data-say");
  const lang = el.getAttribute("data-lang") || "en";
  if (el.getAttribute("data-mode") === "drill") speakDrill(texto, lang, target);
  else speak(texto, lang, target);
});

/* ---------------- Ajustes ---------------- */

function openSettings() {
  document.getElementById("settingsModal").classList.add("show");
  const slider = document.getElementById("rateSlider");
  slider.value = state.settings.rate;
  document.getElementById("rateLabel").textContent = state.settings.rate;
  updateVoicesInfo();
}
function closeSettings() { document.getElementById("settingsModal").classList.remove("show"); }

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("rateSlider");
  slider.addEventListener("input", function () {
    state.settings.rate = parseFloat(slider.value);
    document.getElementById("rateLabel").textContent = slider.value;
    saveState();
  });
  slider.addEventListener("change", function () { speak("This is the speed of the English voice.", "en"); });
  document.getElementById("settingsModal").addEventListener("click", function (e) {
    if (e.target === this) closeSettings();
  });
});

function updateVoicesInfo() {
  const el = document.getElementById("voicesInfo");
  if (!el) return;
  if (!("speechSynthesis" in window)) { el.textContent = "Este navegador no tiene voces instaladas."; return; }
  const en = pickVoice("en"), es = pickVoice("es");
  el.innerHTML =
    "<b>Voz en inglés:</b> " + (en ? esc(en.name) : "no encontrada") + "<br>" +
    "<b>Voz en español:</b> " + (es ? esc(es.name) : "no encontrada") + "<br>" +
    "Si falta una voz, instálala en Windows: Configuración → Hora e idioma → Voz.";
}

function resetProgress() {
  if (!confirm("¿Seguro que quieres borrar TODO tu progreso? Esta acción no se puede deshacer.")) return;
  state = { passed: {}, tries: {}, settings: state.settings };
  saveState();
  closeSettings();
  toast("Progreso borrado. ¡A empezar de nuevo con ganas! 💪");
  render();
}

/* ---------------- Router ---------------- */

window.addEventListener("hashchange", render);
document.addEventListener("DOMContentLoaded", render);

function route() {
  const h = location.hash || "#/home";
  const parts = h.replace(/^#\//, "").split("/");
  return { view: parts[0] || "home", id: parts[1] || null };
}

function render() {
  const app = document.getElementById("app");
  if (!app) return;
  const r = route();
  if ("speechSynthesis" in window) speechSynthesis.cancel();

  document.getElementById("navHome").classList.toggle("active", r.view === "home" || r.view === "level");
  document.getElementById("navDict").classList.toggle("active", r.view === "dict");

  if (r.view === "level") {
    const lv = COURSE.levels.find(function (l) { return l.id === r.id; });
    if (!lv || !isLevelUnlocked(lv)) { location.hash = "#/home"; return; }
    app.innerHTML = viewLevel(lv);
  } else if (r.view === "module") {
    const found = findModule(r.id);
    if (!found || !isModuleUnlocked(r.id)) { toast("🔒 Ese módulo todavía está bloqueado. Aprueba el anterior con 100%."); location.hash = "#/home"; return; }
    app.innerHTML = viewModule(found.level, found.module);
  } else if (r.view === "exam" || r.view === "practice") {
    const found = findModule(r.id);
    if (!found || !isModuleUnlocked(r.id)) { location.hash = "#/home"; return; }
    startQuiz(found.level, found.module, r.view === "exam");
    return;
  } else if (r.view === "dict") {
    app.innerHTML = viewDict();
    wireDict();
  } else {
    app.innerHTML = viewHome();
  }
  updateGlobalProgress();
  window.scrollTo(0, 0);
}

function updateGlobalProgress() {
  const p = courseProgress();
  const bar = document.getElementById("globalProgressBar");
  const pct = document.getElementById("globalProgressPct");
  if (bar) bar.style.width = p.pct + "%";
  if (pct) pct.textContent = p.pct + "%";
}

/* ---------------- Vista: Inicio ---------------- */

function viewHome() {
  const p = courseProgress();
  const words = allItems().length;
  const current = currentLevelName();
  let html = "";

  html += '<section class="hero">' +
    "<h2>⚡ De Ayudante a Foreman</h2>" +
    "<p>Aprende el inglés real de la obra eléctrica en EE.UU.: herramientas, seguridad, materiales, dispositivos y las frases para pedirlos y usarlos — con audio, imágenes y referencias al Código Eléctrico Nacional (NEC).</p>" +
    '<p style="margin-top:0.6rem"><b>Regla de la obra:</b> necesitas <b>100%</b> en el examen de cada módulo para desbloquear el siguiente. Igual que en el trabajo: se hace bien, o se vuelve a hacer.</p>' +
    '<div class="hero-stats">' +
    '<div class="stat"><b>' + words + "</b> palabras y frases</div>" +
    '<div class="stat"><b>' + p.done + "/" + p.total + "</b> módulos aprobados</div>" +
    '<div class="stat">Nivel actual: <b>' + esc(current) + "</b></div>" +
    "</div></section>";

  html += '<div class="levels-grid">';
  COURSE.levels.forEach(function (lv) {
    const unlocked = isLevelUnlocked(lv);
    const done = lv.modules.filter(function (m) { return isPassed(m.id); }).length;
    const pct = Math.round((done / lv.modules.length) * 100);
    html += '<div class="level-card ' + lv.color + (unlocked ? "" : " locked") + '" ' +
      (unlocked ? 'onclick="location.hash=\'#/level/' + lv.id + '\'"' : 'onclick="toast(\'🔒 Aprueba todos los módulos del nivel anterior para desbloquear este nivel.\')"') + ">" +
      '<div class="level-badge">' + iconHTML(lv.icon, "level-ico") + "</div>" +
      '<div class="level-info">' +
      '<div class="lv-num">' + (lv.alwaysUnlocked ? "⚡ Uso inmediato · siempre abierto" : "Nivel " + lv.num) + "</div>" +
      "<h3>" + esc(lv.title) + " <small>· " + esc(lv.en) + "</small></h3>" +
      "<p>" + esc(lv.desc) + "</p>" +
      "</div>" +
      '<div class="level-progress">' +
      (unlocked
        ? '<div class="pct">' + pct + '%</div><div class="modcount">' + done + " de " + lv.modules.length + ' módulos</div><div class="minibar"><span style="width:' + pct + '%"></span></div>'
        : '<div class="lock">🔒</div>') +
      "</div></div>";
  });
  html += "</div>";
  return html;
}

function currentLevelName() {
  for (let i = 0; i < COURSE.levels.length; i++) {
    const lv = COURSE.levels[i];
    if (lv.alwaysUnlocked) continue; // no cuenta para la carrera
    if (!lv.modules.every(function (m) { return isPassed(m.id); })) return lv.title + " (" + lv.en + ")";
  }
  return "¡Curso completado! 🎓";
}

/* ---------------- Vista: Nivel ---------------- */

function viewLevel(lv) {
  let html = '<div class="crumbs"><a href="#/home">🏠 Inicio</a> › <span>' + (lv.alwaysUnlocked ? "" : "Nivel " + lv.num + " · ") + esc(lv.title) + "</span></div>";
  html += '<div class="level-head">' +
    '<div class="level-badge level-card ' + lv.color + '" style="box-shadow:none;border:none;padding:0;cursor:default">' + iconHTML(lv.icon) + "</div>" +
    "<div><h2>" + (lv.alwaysUnlocked ? "" : "Nivel " + lv.num + ": ") + esc(lv.title) + " · " + esc(lv.en) + "</h2><p>" + esc(lv.desc) + "</p></div></div>";

  html += '<div class="modules-grid">';
  lv.modules.forEach(function (m, i) {
    const unlocked = isModuleUnlocked(m.id);
    const passed = isPassed(m.id);
    const status = passed
      ? '<span class="badge pass">✔ Aprobado 100%</span>'
      : unlocked ? '<span class="badge todo">▶ Disponible</span>' : '<span class="badge lock">🔒 Bloqueado</span>';
    html += '<div class="module-card' + (unlocked ? "" : " locked") + '" ' +
      (unlocked
        ? 'onclick="location.hash=\'#/module/' + m.id + '\'"'
        : 'onclick="toast(\'🔒 Aprueba el módulo anterior con 100% para desbloquear este.\')"') + ">" +
      '<div class="mod-top"><div class="mod-icon">' + esc(m.icon) + "</div>" +
      "<h4>" + (i + 1) + ". " + esc(m.title) + "<small>" + esc(m.en) + "</small></h4></div>" +
      "<p>" + esc(m.desc) + "</p>" +
      '<div class="mod-status">' + status + '<span class="badge count">' + m.items.length + " términos</span></div>" +
      "</div>";
  });
  html += "</div>";
  return html;
}

/* ---------------- Vista: Módulo (estudio) ---------------- */

function viewModule(lv, m) {
  let html = '<div class="crumbs"><a href="#/home">🏠 Inicio</a> › <a href="#/level/' + lv.id + '">' + (lv.alwaysUnlocked ? "" : "Nivel " + lv.num + " · ") + esc(lv.title) + "</a> › <span>" + esc(m.title) + "</span></div>";

  html += '<div class="study-head"><div class="row">' +
    '<div class="mod-icon" style="width:52px;height:52px;background:var(--navy-800);border-radius:12px;display:grid;place-items:center;font-size:1.5rem">' + esc(m.icon) + "</div>" +
    "<h2>" + esc(m.title) + "<small>" + esc(m.en) + " · " + m.items.length + " términos</small></h2>" +
    (isPassed(m.id) ? '<span class="badge pass" style="font-size:0.85rem">✔ Aprobado</span>' : "") +
    "</div>" +
    '<div class="desc">' + esc(m.desc) + "</div>" +
    (m.tip ? '<div class="tipbox"><span class="ico">💡</span><span>' + esc(m.tip) + "</span></div>" : "") +
    (m.necNote ? '<div class="necbox"><span class="ico">📖</span><span><b>NEC:</b> ' + esc(m.necNote) + "</span></div>" : "") +
    "</div>";

  html += '<div class="action-row">' +
    '<button class="btn ghost" onclick="location.hash=\'#/level/' + lv.id + '\'">← Volver</button>' +
    '<button class="btn dark" onclick="location.hash=\'#/practice/' + m.id + '\'">🎯 Practicar (sin calificación)</button>' +
    '<button class="btn primary" onclick="location.hash=\'#/exam/' + m.id + '\'">📝 Examen — necesitas 100%</button>' +
    "</div>";

  html += '<div class="vocab-grid">';
  m.items.forEach(function (it) { html += vocabCardHTML(it); });
  html += "</div>";

  html += '<div class="action-row" style="justify-content:center;margin-top:1.5rem">' +
    '<button class="btn primary big" onclick="location.hash=\'#/exam/' + m.id + '\'">📝 Estoy listo: hacer el examen</button>' +
    "</div>";
  return html;
}

let sayId = 0; /* ids únicos para el resaltado karaoke */

function vocabCardHTML(it) {
  const idEn = "sayEn" + (++sayId);
  const idEs = "sayEs" + sayId;
  const idEx = "sayEx" + sayId;

  let html = '<article class="vocab-card">';
  html += '<div class="vocab-main">' + iconHTML(it.icon) +
    '<div class="vocab-words">' +
    '<div class="es"><span id="' + idEs + '">' + esc(it.es) + "</span></div>" +
    '<div class="en"><span id="' + idEn + '">' + esc(it.en) + "</span></div>" +
    '<div class="pron">🗣 ' + esc(it.pron) + "</div>" +
    "</div></div>";

  html += '<div class="audio-row">' +
    '<button class="audio-btn" data-say="' + esc(speakableEn(it.en)) + '" data-lang="en" data-hl="#' + idEn + '">🔊 Inglés</button>' +
    '<button class="audio-btn drill" title="Lo dice despacio y luego a velocidad real" data-say="' + esc(speakableEn(it.en)) + '" data-lang="en" data-hl="#' + idEn + '" data-mode="drill">🐢→🐇 Lento y normal</button>' +
    '<button class="audio-btn" data-say="' + esc(speakableEs(it.es)) + '" data-lang="es" data-hl="#' + idEs + '">🔉 Español</button>' +
    "</div>";

  if (it.exEn) {
    html += '<div class="vocab-example">' +
      '<div class="en-ex">🇺🇸 <span id="' + idEx + '">' + esc(it.exEn) + "</span>" +
      '<button class="mini-audio" title="Escuchar ejemplo" data-say="' + esc(it.exEn) + '" data-lang="en" data-hl="#' + idEx + '">🔊</button>' +
      '<button class="mini-audio" title="Lento y luego normal" data-say="' + esc(it.exEn) + '" data-lang="en" data-hl="#' + idEx + '" data-mode="drill">🐢</button></div>' +
      '<div class="es-ex">🇲🇽 ' + esc(it.exEs || "") + "</div>" +
      "</div>";
  }
  if (it.note) html += '<div class="vocab-note"><b>💬 Nota de obra:</b> ' + esc(it.note) + "</div>";
  if (it.nec) html += '<div class="vocab-nec"><b>📖 NEC:</b> ' + esc(it.nec) + "</div>";
  html += "</article>";
  return html;
}

/* Limpia el texto para el audio (quita paréntesis y toma variantes) */
function speakableEn(en) {
  return en.replace(/\(.*?\)/g, "").split("/").map(function (s) { return s.trim(); }).filter(Boolean).join(". ");
}
function speakableEs(es) {
  return es.replace(/\(.*?\)/g, "").split("/").map(function (s) { return s.trim(); }).filter(Boolean).join(". ");
}

/* ---------------- Motor de exámenes ---------------- */

let quiz = null; // estado del examen en curso

function answerVariants(en) {
  // "pliers / lineman's pliers" → ["pliers", "lineman's pliers", "linemans pliers"]
  const base = en.replace(/\(.*?\)/g, "");
  const out = [];
  base.split("/").forEach(function (v) {
    const t = normalizeAns(v);
    if (t) {
      out.push(t);
      if (t.indexOf("'") >= 0) out.push(t.replace(/'/g, ""));
    }
  });
  return out;
}

function normalizeAns(s) {
  return String(s).toLowerCase()
    .replace(/\(.*?\)/g, " ")
    .replace(/[.,!?¡¿;:"]/g, " ")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isTypeable(it) {
  if (it.kind === "phrase") return false;
  const first = speakableEn(it.en).split(".")[0].trim();
  return first.length > 0 && first.length <= 22 && first.split(" ").length <= 2;
}

function buildQuestions(m, isExam) {
  const items = shuffle(m.items);
  const chosen = isExam ? items : items.slice(0, Math.min(8, items.length));
  return chosen.map(function (it, i) {
    let kind;
    const rot = i % 4;
    if (rot === 0) kind = "mc_es_en";
    else if (rot === 1) kind = "mc_en_es";
    else if (rot === 2) kind = "listen";
    else kind = isTypeable(it) ? "type" : "mc_es_en";

    const q = { item: it, kind: kind, answered: false, correct: false };

    if (kind === "mc_es_en" || kind === "listen") {
      const pool = m.items.filter(function (x) { return x !== it; });
      if (kind === "mc_es_en") {
        q.options = shuffle(sample(pool, 3).map(function (x) { return x.en; }).concat([it.en]));
        q.answer = it.en;
      } else {
        q.options = shuffle(sample(pool, 3).map(function (x) { return x.es; }).concat([it.es]));
        q.answer = it.es;
      }
    } else if (kind === "mc_en_es") {
      const pool = m.items.filter(function (x) { return x !== it; });
      q.options = shuffle(sample(pool, 3).map(function (x) { return x.es; }).concat([it.es]));
      q.answer = it.es;
    }
    return q;
  });
}

function startQuiz(lv, m, isExam) {
  quiz = {
    level: lv, module: m, isExam: isExam,
    questions: buildQuestions(m, isExam),
    index: 0
  };
  renderQuestion();
}

function renderQuestion() {
  const app = document.getElementById("app");
  const q = quiz.questions[quiz.index];
  const total = quiz.questions.length;
  const pct = Math.round((quiz.index / total) * 100);
  const it = q.item;
  const modeLabel = quiz.isExam ? "📝 Examen" : "🎯 Práctica";

  let inner = "";
  const kindLabels = {
    mc_es_en: "🇲🇽 → 🇺🇸 ¿Cómo se dice en inglés?",
    mc_en_es: "🇺🇸 → 🇲🇽 ¿Qué significa en español?",
    listen: "🎧 Escucha y elige lo que oíste",
    type: "⌨️ Escríbelo en inglés"
  };

  inner += '<div class="q-kind">' + kindLabels[q.kind] + "</div>";

  if (q.kind === "mc_es_en") {
    inner += '<div class="q-prompt">' + esc(it.es) + "</div>";
    inner += '<div class="q-icon-hint">' + iconHTML(it.icon) + "</div>";
    inner += optionsHTML(q, "en");
  } else if (q.kind === "mc_en_es") {
    inner += '<div class="q-prompt"><span id="qSay">' + esc(it.en) + '</span> <button class="mini-audio" data-say="' + esc(speakableEn(it.en)) + '" data-lang="en" data-hl="#qSay">🔊</button></div>';
    inner += '<div class="q-sub">Pronunciación: ' + esc(it.pron) + "</div>";
    inner += optionsHTML(q, "es");
  } else if (q.kind === "listen") {
    inner += '<div class="q-sub">Toca el altavoz las veces que necesites. Luego elige la palabra o frase que escuchaste.</div>';
    inner += '<div class="listen-big"><button data-say="' + esc(speakableEn(it.en).split(".")[0]) + '" data-lang="en" title="Escuchar">🔊</button></div>';
    inner += '<div style="text-align:center;margin:-0.6rem 0 1rem">' +
      '<button class="audio-btn drill" data-say="' + esc(speakableEn(it.en).split(".")[0]) + '" data-lang="en" data-mode="drill">🐢→🐇 Lento y normal</button></div>';
    inner += optionsHTML(q, "en");
  } else { // type
    inner += '<div class="q-prompt">' + esc(it.es) + "</div>";
    inner += '<div class="q-icon-hint">' + iconHTML(it.icon) + "</div>";
    inner += '<div class="type-zone"><input id="typeInput" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Escríbelo en inglés…">' +
      '<button class="btn primary" id="typeCheck">Revisar</button></div>';
  }

  inner += '<div class="feedback" id="feedback"></div>';
  inner += '<div class="quiz-next"><button class="btn dark" id="nextBtn" style="display:none">Siguiente →</button></div>';

  app.innerHTML =
    '<div class="quiz-wrap">' +
    '<div class="quiz-top">' +
    '<span class="qcount">' + modeLabel + " · " + (quiz.index + 1) + "/" + total + "</span>" +
    '<div class="qbar"><span style="width:' + pct + '%"></span></div>' +
    '<button class="btn ghost quit" onclick="quitQuiz()">✕ Salir</button>' +
    "</div>" +
    '<div class="question-card">' + inner + "</div>" +
    "</div>";

  // listeners
  document.getElementById("nextBtn").addEventListener("click", nextQuestion);
  if (q.kind === "type") {
    const input = document.getElementById("typeInput");
    const check = document.getElementById("typeCheck");
    input.focus();
    check.addEventListener("click", function () { gradeType(q, input, check); });
    input.addEventListener("keydown", function (e) { if (e.key === "Enter" && !q.answered) gradeType(q, input, check); });
  } else {
    Array.prototype.forEach.call(document.querySelectorAll(".opt"), function (btn) {
      btn.addEventListener("click", function () { gradeOption(q, btn); });
    });
    if (q.kind === "listen") setTimeout(function () { speak(speakableEn(it.en).split(".")[0], "en"); }, 350);
  }
}

function optionsHTML(q, lang) {
  const letters = ["A", "B", "C", "D"];
  let html = '<div class="options two-col">';
  q.options.forEach(function (opt, i) {
    html += '<button class="opt" data-val="' + esc(opt) + '">' +
      '<span class="opt-letter">' + letters[i] + "</span>" + esc(opt) + "</button>";
  });
  html += "</div>";
  return html;
}

function gradeOption(q, btn) {
  if (q.answered) return;
  q.answered = true;
  const chosen = btn.getAttribute("data-val");
  q.correct = chosen === q.answer;

  Array.prototype.forEach.call(document.querySelectorAll(".opt"), function (b) {
    b.disabled = true;
    if (b.getAttribute("data-val") === q.answer) b.classList.add("correct");
  });
  if (!q.correct) btn.classList.add("wrong");
  showFeedback(q);
}

function gradeType(q, input, check) {
  if (q.answered) return;
  const val = normalizeAns(input.value);
  if (!val) { input.focus(); return; }
  q.answered = true;
  q.correct = answerVariants(q.item.en).indexOf(val) >= 0;
  input.disabled = true; check.disabled = true;
  input.classList.add(q.correct ? "correct" : "wrong");
  showFeedback(q);
}

function showFeedback(q) {
  const fb = document.getElementById("feedback");
  const it = q.item;
  if (q.correct) {
    fb.className = "feedback show good";
    fb.innerHTML = "✅ <b>¡Correcto!</b> " + esc(it.es) + " = <b>" + esc(it.en) + "</b> 🗣 " + esc(it.pron);
  } else {
    fb.className = "feedback show bad";
    fb.innerHTML = "❌ <b>Incorrecto.</b> La respuesta es: <b>" + esc(it.en) + "</b> (" + esc(it.es) + ")<br>🗣 " + esc(it.pron) +
      (quiz.isExam ? "<br><b>Recuerda:</b> el examen exige 100%. Al final podrás repasar y volver a intentarlo." : "");
  }
  speak(speakableEn(it.en).split(".")[0], "en");
  const nb = document.getElementById("nextBtn");
  nb.style.display = "inline-flex";
  nb.textContent = quiz.index === quiz.questions.length - 1 ? "Ver resultado →" : "Siguiente →";
  nb.focus();
}

function nextQuestion() {
  if (quiz.index < quiz.questions.length - 1) {
    quiz.index++;
    renderQuestion();
    window.scrollTo(0, 0);
  } else {
    finishQuiz();
  }
}

function quitQuiz() {
  const m = quiz.module;
  quiz = null;
  location.hash = "#/module/" + m.id;
}

function finishQuiz() {
  const total = quiz.questions.length;
  const good = quiz.questions.filter(function (q) { return q.correct; }).length;
  const pct = Math.round((good / total) * 100);
  const passed = good === total;
  const m = quiz.module, lv = quiz.level;
  const app = document.getElementById("app");

  if (quiz.isExam) {
    state.tries[m.id] = (state.tries[m.id] || 0) + 1;
    if (passed && !isPassed(m.id)) {
      state.passed[m.id] = { score: 100, date: new Date().toISOString(), tries: state.tries[m.id] };
    }
    saveState();
    updateGlobalProgress();
  }

  const missed = quiz.questions.filter(function (q) { return !q.correct; });
  let missedHTML = "";
  if (missed.length) {
    missedHTML = '<div class="missed-list"><h4>📌 Repasa estos términos antes de volver a intentar:</h4>';
    missed.forEach(function (q) {
      missedHTML += '<div class="missed-item"><span class="en">' + esc(q.item.en) +
        ' <button class="mini-audio" data-say="' + esc(speakableEn(q.item.en)) + '" data-lang="en">🔊</button></span>' +
        '<span class="es">' + esc(q.item.es) + "</span></div>";
    });
    missedHTML += "</div>";
  }

  let html = "";
  if (quiz.isExam && passed) {
    const next = nextModuleAfter(m.id);
    html = '<div class="result-card">' +
      '<div class="big-emoji">🏆</div>' +
      "<h2>¡Módulo aprobado!</h2>" +
      '<div class="score pass">100%</div>' +
      "<p>Dominaste <b>" + esc(m.title) + "</b> (" + esc(m.en) + "). " +
      (next ? "Se desbloqueó: <b>" + esc(next.module.title) + "</b>" + (next.level.id !== lv.id ? " — ¡Nivel " + next.level.num + ": " + esc(next.level.title) + "!" : "") : "¡Completaste TODO el curso! Eres bilingüe de obra. 🎓") + "</p>" +
      '<div class="result-actions">' +
      (next ? '<button class="btn primary big" onclick="location.hash=\'#/module/' + next.module.id + '\'">Siguiente módulo →</button>' : "") +
      '<button class="btn ghost" onclick="location.hash=\'#/level/' + lv.id + '\'">Ver nivel</button>' +
      "</div></div>";
    toast("🎉 ¡100%! Módulo aprobado.");
  } else if (quiz.isExam) {
    html = '<div class="result-card">' +
      '<div class="big-emoji">🔁</div>' +
      "<h2>Todavía no — se exige 100%</h2>" +
      '<div class="score fail">' + pct + "%</div>" +
      "<p>Acertaste " + good + " de " + total + ". En la obra no se deja un circuito a medias: repasa los términos que fallaste y vuelve a intentarlo. ¡Ya casi!</p>" +
      missedHTML +
      '<div class="result-actions">' +
      '<button class="btn dark" onclick="location.hash=\'#/module/' + m.id + '\'">📚 Repasar el módulo</button>' +
      '<button class="btn primary" onclick="retakeExam()">🔄 Reintentar examen</button>' +
      "</div></div>";
  } else {
    html = '<div class="result-card">' +
      '<div class="big-emoji">' + (pct === 100 ? "💪" : "🎯") + "</div>" +
      "<h2>Práctica terminada</h2>" +
      '<div class="score ' + (pct === 100 ? "pass" : "") + '">' + pct + "%</div>" +
      "<p>" + (pct === 100 ? "¡Perfecto! Estás listo para el examen." : "Buen intento. Repasa y cuando te sientas seguro, lánzate al examen.") + "</p>" +
      missedHTML +
      '<div class="result-actions">' +
      '<button class="btn ghost" onclick="location.hash=\'#/module/' + m.id + '\'">📚 Volver al módulo</button>' +
      '<button class="btn primary" onclick="location.hash=\'#/exam/' + m.id + '\'">📝 Hacer el examen</button>' +
      "</div></div>";
  }

  app.innerHTML = html;
  window.scrollTo(0, 0);
}

function retakeExam() {
  const lv = quiz.level, m = quiz.module;
  startQuiz(lv, m, true);
}

/* ---------------- Vista: Diccionario ---------------- */

function viewDict() {
  return '<div class="crumbs"><a href="#/home">🏠 Inicio</a> › <span>Diccionario</span></div>' +
    '<div class="dict-head">' +
    '<input id="dictSearch" type="search" placeholder="🔎 Busca en español o inglés… (ej. pinzas, wire, casco)">' +
    '<div class="dict-count" id="dictCount"></div>' +
    "</div>" +
    '<div class="dict-list" id="dictList"></div>';
}

function wireDict() {
  const input = document.getElementById("dictSearch");
  const render = function () { renderDictList(input.value); };
  input.addEventListener("input", render);
  render();
  input.focus();
}

function renderDictList(query) {
  const list = document.getElementById("dictList");
  const count = document.getElementById("dictCount");
  const q = normalizeAns(query || "");
  const rows = allItems().filter(function (x) {
    if (!q) return true;
    return normalizeAns(x.item.es).indexOf(q) >= 0 || normalizeAns(x.item.en).indexOf(q) >= 0;
  });

  count.textContent = rows.length + " términos" + (q ? ' para "' + query + '"' : " en total");
  let html = "";
  rows.slice(0, 200).forEach(function (x) {
    html += '<div class="dict-row">' + iconHTML(x.item.icon) +
      '<div class="words"><div class="en">' + esc(x.item.en) + "</div>" +
      '<div class="es">' + esc(x.item.es) + " · 🗣 " + esc(x.item.pron) + "</div></div>" +
      '<span class="tag">N' + x.level.num + " · " + esc(x.module.title) + "</span>" +
      '<button class="audio-btn" data-say="' + esc(speakableEn(x.item.en)) + '" data-lang="en">🔊</button>' +
      "</div>";
  });
  list.innerHTML = html || '<p style="color:var(--ink-soft);padding:1rem">Sin resultados. Intenta con otra palabra.</p>';
}
