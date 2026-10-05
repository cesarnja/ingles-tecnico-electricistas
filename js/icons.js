/* ============================================================
   ICONS.JS — Biblioteca de imágenes SVG ilustrativas
   Estilo: líneas simples, color heredado (currentColor)
   Cada icono se dibuja en un lienzo de 64x64
   ============================================================ */

const SVG_ICONS = {

  /* ---------- HERRAMIENTAS DE MANO ---------- */

  pliers: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M26 8 L30 26 L24 44 L18 56" />
    <path d="M38 8 L34 26 L40 44 L46 56" />
    <path d="M26 8 Q32 2 38 8" />
    <path d="M30 26 L34 26" />
    <path d="M24 44 Q32 40 40 44" fill="currentColor" fill-opacity="0.15"/>
    <circle cx="32" cy="27" r="2.5" fill="currentColor"/>
  </g></svg>`,

  cutters: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 10 L30 24 L26 30" />
    <path d="M44 10 L34 24 L38 30" />
    <path d="M20 10 Q26 4 32 10 Q38 4 44 10" fill="currentColor" fill-opacity="0.15"/>
    <circle cx="32" cy="27" r="2.5" fill="currentColor"/>
    <path d="M26 30 L20 54" /><path d="M38 30 L44 54" />
  </g></svg>`,

  screwdriverFlat: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="26" y="6" width="12" height="20" rx="5" fill="currentColor" fill-opacity="0.15"/>
    <path d="M29 26 L29 40 L35 40 L35 26" />
    <path d="M32 40 L32 54" stroke-width="4"/>
    <path d="M28 56 L36 56" />
  </g></svg>`,

  screwdriverPhillips: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="26" y="6" width="12" height="20" rx="5" fill="currentColor" fill-opacity="0.15"/>
    <path d="M29 26 L29 40 L35 40 L35 26" />
    <path d="M32 40 L32 52" stroke-width="4"/>
    <path d="M28 56 L36 56" /><path d="M32 52 L32 58" stroke-width="2"/><path d="M29 55 L35 55" stroke-width="2"/>
  </g></svg>`,

  stripper: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 8 L30 26 L22 46 L16 56" />
    <path d="M42 8 L34 26 L42 46 L48 56" />
    <circle cx="32" cy="27" r="2.5" fill="currentColor"/>
    <path d="M25 14 a4 4 0 0 1 6 0" /><path d="M33 14 a4 4 0 0 1 6 0" />
    <path d="M27 20 a3 3 0 0 1 4.5 0" /><path d="M33 20 a3 3 0 0 1 4.5 0" />
  </g></svg>`,

  utilityKnife: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 42 L26 26 L34 34 L18 50 Z" fill="currentColor" fill-opacity="0.2"/>
    <path d="M26 26 L44 8 L56 8 L34 34" fill="currentColor" fill-opacity="0.08"/>
    <circle cx="22" cy="40" r="2" fill="currentColor"/>
  </g></svg>`,

  level: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="26" width="56" height="14" rx="3" fill="currentColor" fill-opacity="0.1"/>
    <rect x="26" y="29" width="12" height="8" rx="4"/>
    <circle cx="32" cy="33" r="2" fill="currentColor"/>
    <path d="M14 26 L14 40" /><path d="M50 26 L50 40" />
  </g></svg>`,

  allenKey: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 10 L20 46 L48 46" />
  </g></svg>`,

  tapeMeasure: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="12" y="16" width="30" height="28" rx="8" fill="currentColor" fill-opacity="0.12"/>
    <circle cx="27" cy="30" r="6"/>
    <path d="M42 36 L56 36 L56 44 L42 44" />
    <path d="M56 36 L56 32" /><path d="M50 44 L50 40" stroke-width="2"/><path d="M46 44 L46 41" stroke-width="2"/>
  </g></svg>`,

  hacksaw: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 20 Q10 12 18 12 L54 12 L54 34" fill="none"/>
    <path d="M10 20 L10 34 L54 34" fill="none"/>
    <path d="M10 34 L14 38 L18 34 L22 38 L26 34 L30 38 L34 34 L38 38 L42 34 L46 38 L50 34 L54 38" stroke-width="2"/>
    <path d="M10 20 L4 26 L8 44" />
  </g></svg>`,

  fishTape: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="28" cy="30" r="16" fill="currentColor" fill-opacity="0.08"/>
    <circle cx="28" cy="30" r="8"/>
    <path d="M28 14 Q46 14 50 30 L56 48" />
    <path d="M53 44 a4 4 0 1 0 6 4" stroke-width="2"/>
  </g></svg>`,

  flashlight: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 14 L30 14 L30 22 L26 28 L26 50 L18 50 L18 28 L14 22 Z" fill="currentColor" fill-opacity="0.12"/>
    <path d="M38 18 L48 12" /><path d="M40 26 L52 24" /><path d="M38 34 L48 40" />
  </g></svg>`,

  toolPouch: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 24 L58 24" stroke-width="4"/>
    <path d="M14 24 L14 44 Q14 52 24 52 L30 52 L30 24" fill="currentColor" fill-opacity="0.12"/>
    <path d="M20 24 L20 14" /><path d="M25 24 L25 12 L25 24" />
    <path d="M22 10 a3 3 0 0 1 6 4" stroke-width="2"/>
  </g></svg>`,

  /* ---------- SEGURIDAD (EPP) ---------- */

  hardHat: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 38 Q14 16 32 16 Q50 16 50 38" fill="currentColor" fill-opacity="0.15"/>
    <path d="M8 40 Q32 34 56 40 L54 46 Q32 40 10 46 Z" fill="currentColor" fill-opacity="0.15"/>
    <path d="M28 16 L28 26" /><path d="M36 16 L36 26" />
  </g></svg>`,

  earMuffs: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 34 Q14 10 32 10 Q50 10 50 34" />
    <rect x="8" y="32" width="12" height="18" rx="6" fill="currentColor" fill-opacity="0.15"/>
    <rect x="44" y="32" width="12" height="18" rx="6" fill="currentColor" fill-opacity="0.15"/>
  </g></svg>`,

  respirator: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 30 Q32 18 50 30 L46 46 Q32 54 18 46 Z" fill="currentColor" fill-opacity="0.12"/>
    <circle cx="32" cy="40" r="6"/>
    <path d="M14 30 L4 24" /><path d="M50 30 L60 24" /><path d="M18 46 L6 44" /><path d="M46 46 L58 44" />
  </g></svg>`,

  harness: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="32" cy="10" r="5"/>
    <path d="M24 20 L40 20 L44 40 L20 40 Z" fill="currentColor" fill-opacity="0.08"/>
    <path d="M24 20 L32 32 L40 20" /><path d="M20 40 L32 32 L44 40" />
    <path d="M24 40 L22 56" /><path d="M40 40 L42 56" />
    <circle cx="32" cy="32" r="3" fill="currentColor"/>
  </g></svg>`,

  gloves: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 54 L22 26 M22 26 L22 14 Q22 10 26 10 Q30 10 30 14 L30 24 M30 16 Q30 12 34 12 Q38 12 38 16 L38 24 M38 18 Q38 14 42 14 Q46 14 46 18 L46 30 Q46 34 44 38 L42 54" fill="currentColor" fill-opacity="0.08"/>
    <path d="M22 30 L14 24 Q11 21 14 18 Q17 16 20 19 L22 22" />
    <path d="M22 54 L42 54" />
  </g></svg>`,

  boots: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 8 L34 8 L34 30 Q46 32 54 40 Q58 44 56 50 L18 50 Z" fill="currentColor" fill-opacity="0.1"/>
    <path d="M18 50 L18 8" />
    <path d="M18 42 L56 46" />
    <path d="M34 14 L18 14" stroke-width="2"/><path d="M34 20 L18 20" stroke-width="2"/>
  </g></svg>`,

  vest: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 8 Q32 16 42 8 L48 20 L44 24 L44 54 L20 54 L20 24 L16 20 Z" fill="currentColor" fill-opacity="0.12"/>
    <path d="M26 8 L26 54" stroke-width="2" stroke-dasharray="4 3"/>
    <path d="M38 8 L38 54" stroke-width="2" stroke-dasharray="4 3"/>
    <path d="M20 36 L44 36" stroke-width="4" stroke-opacity="0.5"/>
  </g></svg>`,

  safetyGlasses: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 26 L58 26" />
    <path d="M10 26 Q10 40 20 40 Q30 40 30 28" fill="currentColor" fill-opacity="0.12"/>
    <path d="M34 28 Q34 40 44 40 Q54 40 54 26" fill="currentColor" fill-opacity="0.12"/>
    <path d="M30 30 Q32 28 34 30" />
  </g></svg>`,

  lockout: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="18" y="26" width="28" height="24" rx="4" fill="currentColor" fill-opacity="0.15"/>
    <path d="M24 26 L24 18 Q24 8 32 8 Q40 8 40 18 L40 26" />
    <circle cx="32" cy="36" r="3" fill="currentColor"/><path d="M32 39 L32 44" />
  </g></svg>`,

  firstAid: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="8" y="18" width="48" height="34" rx="6" fill="currentColor" fill-opacity="0.08"/>
    <path d="M24 18 L24 12 L40 12 L40 18" />
    <path d="M32 28 L32 42 M25 35 L39 35" stroke-width="4"/>
  </g></svg>`,

  /* ---------- MATERIALES Y CONDUCTORES ---------- */

  wireSpool: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="32" cy="14" rx="20" ry="6"/>
    <path d="M12 14 L12 44 A20 6 0 0 0 52 44 L52 14" fill="currentColor" fill-opacity="0.08"/>
    <path d="M12 24 A20 6 0 0 0 52 24" stroke-width="2"/><path d="M12 32 A20 6 0 0 0 52 32" stroke-width="2"/>
    <path d="M52 40 Q62 44 58 54" />
  </g></svg>`,

  romex: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 40 Q8 30 18 30 L46 30 Q56 30 56 22" stroke-width="8" stroke-opacity="0.25"/>
    <path d="M8 40 Q8 30 18 30 L34 30" stroke-width="8" stroke-opacity="0.25"/>
    <path d="M34 30 L46 30 Q56 30 56 22" stroke-width="2"/>
    <path d="M36 26 L48 26 Q52 26 53 20" stroke-width="2"/>
    <path d="M36 34 L48 34 Q54 34 55 26" stroke-width="2"/>
    <path d="M8 44 L8 36" stroke-width="2"/>
  </g></svg>`,

  singleWire: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 48 Q20 20 32 34 Q44 48 58 16" />
    <path d="M50 22 L58 16 L58 25" stroke-width="3"/>
  </g></svg>`,

  groundWire: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M32 6 L32 26"/>
    <path d="M16 30 L48 30" stroke-width="4"/>
    <path d="M22 38 L42 38" stroke-width="4"/>
    <path d="M28 46 L36 46" stroke-width="4"/>
  </g></svg>`,

  conduitEmt: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 24 L58 24 M6 36 L58 36" />
    <ellipse cx="58" cy="30" rx="3" ry="6"/>
    <rect x="24" y="21" width="10" height="18" rx="2" fill="currentColor" fill-opacity="0.15"/>
  </g></svg>`,

  conduitPvc: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 26 L40 26 Q46 26 46 32 L46 54 M6 38 L34 38 Q34 38 34 42 L34 54" />
    <ellipse cx="40" cy="54" rx="6" ry="3"/>
    <path d="M6 26 L6 38" stroke-width="2"/>
    <rect x="12" y="23" width="8" height="18" rx="2" fill="currentColor" fill-opacity="0.15"/>
  </g></svg>`,

  junctionBox: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="14" y="14" width="36" height="36" rx="3" fill="currentColor" fill-opacity="0.08"/>
    <circle cx="22" cy="22" r="2.5"/><circle cx="42" cy="22" r="2.5"/>
    <circle cx="22" cy="42" r="2.5"/><circle cx="42" cy="42" r="2.5"/>
    <circle cx="32" cy="32" r="5"/>
    <path d="M14 28 L8 28 M14 36 L8 36" stroke-width="2"/><path d="M50 28 L56 28 M50 36 L56 36" stroke-width="2"/>
  </g></svg>`,

  wireNut: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M24 30 L20 12 Q20 8 24 8 L40 8 Q44 8 44 12 L40 30 Z" fill="currentColor" fill-opacity="0.15"/>
    <path d="M22 16 L42 16" stroke-width="2"/><path d="M23 22 L41 22" stroke-width="2"/>
    <path d="M27 30 L24 44 Q22 52 16 56" /><path d="M32 30 L32 46" /><path d="M37 30 L40 44 Q42 52 48 56" />
  </g></svg>`,

  connector: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 26 L26 26 M6 38 L26 38" />
    <rect x="26" y="22" width="12" height="20" rx="2" fill="currentColor" fill-opacity="0.15"/>
    <path d="M38 28 L46 28 L46 22 L54 22 M38 36 L46 36 L46 42 L54 42" />
    <path d="M46 22 L46 42" stroke-width="2"/>
  </g></svg>`,

  coupling: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 26 L22 26 M4 38 L22 38" />
    <rect x="22" y="22" width="20" height="20" rx="3" fill="currentColor" fill-opacity="0.15"/>
    <path d="M42 26 L60 26 M42 38 L60 38" />
    <path d="M27 22 L27 42 M37 22 L37 42" stroke-width="2"/>
  </g></svg>`,

  strap: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 44 L18 44 Q14 28 32 28 Q50 28 46 44 L54 44" />
    <path d="M6 50 L58 50" stroke-width="2"/>
    <circle cx="13" cy="47" r="1.5" fill="currentColor"/><circle cx="51" cy="47" r="1.5" fill="currentColor"/>
    <path d="M22 40 Q22 34 32 34 Q42 34 42 40" stroke-width="2" stroke-opacity="0.5"/>
  </g></svg>`,

  anchor: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M26 10 L38 10 L36 16 L28 16 Z" fill="currentColor" fill-opacity="0.15"/>
    <path d="M28 16 L26 48 Q26 54 32 54 Q38 54 38 48 L36 16" fill="currentColor" fill-opacity="0.08"/>
    <path d="M27 22 L37 26 M27 30 L37 34 M27 38 L37 42" stroke-width="2"/>
  </g></svg>`,

  screws: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="22" cy="14" r="7" fill="currentColor" fill-opacity="0.15"/>
    <path d="M17 14 L27 14 M22 9 L22 19" stroke-width="2"/>
    <path d="M22 21 L22 50 L22 54" stroke-width="4"/>
    <path d="M17 26 L27 30 M17 34 L27 38 M17 42 L27 46" stroke-width="2"/>
  </g></svg>`,

  tape: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="30" cy="30" r="18" fill="currentColor" fill-opacity="0.12"/>
    <circle cx="30" cy="30" r="8"/>
    <path d="M46 40 L58 48 L58 54 L40 44" fill="currentColor" fill-opacity="0.2"/>
  </g></svg>`,

  /* ---------- DISPOSITIVOS ---------- */

  receptacle: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="18" y="6" width="28" height="52" rx="6" fill="currentColor" fill-opacity="0.08"/>
    <path d="M26 16 L26 24 M38 15 L38 25" stroke-width="3"/>
    <path d="M30 30 a3 3 0 0 0 4 0" stroke-width="2"/>
    <path d="M26 38 L26 46 M38 37 L38 47" stroke-width="3"/>
    <path d="M30 52 a3 3 0 0 0 4 0" stroke-width="2"/>
  </g></svg>`,

  gfci: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="18" y="6" width="28" height="52" rx="4" fill="currentColor" fill-opacity="0.08"/>
    <path d="M26 14 L26 20 M38 13 L38 21" stroke-width="3"/>
    <rect x="24" y="28" width="16" height="6" rx="1"/>
    <rect x="24" y="37" width="16" height="6" rx="1" fill="currentColor" fill-opacity="0.3"/>
    <path d="M26 50 L26 54 M38 49 L38 55" stroke-width="3"/>
  </g></svg>`,

  switch: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="18" y="6" width="28" height="52" rx="4" fill="currentColor" fill-opacity="0.08"/>
    <rect x="27" y="20" width="10" height="24" rx="2"/>
    <path d="M27 32 L37 32" stroke-width="2"/>
    <rect x="28" y="21" width="8" height="11" fill="currentColor" fill-opacity="0.3"/>
  </g></svg>`,

  switch3way: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="10" width="22" height="44" rx="4" fill="currentColor" fill-opacity="0.08"/>
    <rect x="12" y="22" width="9" height="20" rx="2"/>
    <rect x="36" y="10" width="22" height="44" rx="4" fill="currentColor" fill-opacity="0.08"/>
    <rect x="42" y="22" width="9" height="20" rx="2"/>
    <path d="M28 30 Q32 26 36 30" stroke-width="2" stroke-dasharray="3 2"/>
  </g></svg>`,

  dimmer: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="18" y="6" width="28" height="52" rx="4" fill="currentColor" fill-opacity="0.08"/>
    <path d="M26 44 L38 44 L38 20 Z" fill="currentColor" fill-opacity="0.25"/>
    <circle cx="32" cy="50" r="2" fill="currentColor"/>
  </g></svg>`,

  coverPlate: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="16" y="8" width="32" height="48" rx="4" fill="currentColor" fill-opacity="0.08"/>
    <rect x="26" y="20" width="12" height="24" rx="2"/>
    <circle cx="32" cy="14" r="1.5" fill="currentColor"/><circle cx="32" cy="50" r="1.5" fill="currentColor"/>
  </g></svg>`,

  breaker: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="20" y="8" width="24" height="48" rx="4" fill="currentColor" fill-opacity="0.1"/>
    <rect x="26" y="24" width="12" height="16" rx="2" fill="currentColor" fill-opacity="0.2"/>
    <path d="M32 24 L32 32" stroke-width="4"/>
    <path d="M26 14 L38 14" stroke-width="2"/>
    <text x="32" y="52" font-size="9" fill="currentColor" stroke="none" text-anchor="middle" font-family="sans-serif">20</text>
  </g></svg>`,

  panel: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="12" y="6" width="40" height="52" rx="3" fill="currentColor" fill-opacity="0.06"/>
    <path d="M32 14 L32 50" stroke-width="2"/>
    <rect x="20" y="16" width="8" height="6" rx="1" fill="currentColor" fill-opacity="0.3"/><rect x="36" y="16" width="8" height="6" rx="1" fill="currentColor" fill-opacity="0.3"/>
    <rect x="20" y="26" width="8" height="6" rx="1" fill="currentColor" fill-opacity="0.3"/><rect x="36" y="26" width="8" height="6" rx="1" fill="currentColor" fill-opacity="0.3"/>
    <rect x="20" y="36" width="8" height="6" rx="1" fill="currentColor" fill-opacity="0.3"/><rect x="36" y="36" width="8" height="6" rx="1" fill="currentColor" fill-opacity="0.3"/>
  </g></svg>`,

  meter: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="14" y="8" width="36" height="48" rx="4" fill="currentColor" fill-opacity="0.06"/>
    <circle cx="32" cy="28" r="14" fill="currentColor" fill-opacity="0.08"/>
    <path d="M32 28 L38 20" stroke-width="2"/>
    <rect x="22" y="46" width="20" height="6" rx="1"/>
  </g></svg>`,

  lightFixture: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M32 6 L32 16" />
    <path d="M16 30 Q16 16 32 16 Q48 16 48 30 Z" fill="currentColor" fill-opacity="0.12"/>
    <circle cx="32" cy="36" r="7" fill="currentColor" fill-opacity="0.2"/>
    <path d="M20 44 L16 50 M32 47 L32 54 M44 44 L48 50" stroke-width="2"/>
  </g></svg>`,

  smokeDetector: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="32" cy="32" r="24" fill="currentColor" fill-opacity="0.06"/>
    <circle cx="32" cy="32" r="14"/>
    <path d="M24 32 a8 8 0 0 1 16 0" stroke-width="2"/>
    <circle cx="32" cy="44" r="1.5" fill="currentColor"/>
    <path d="M14 18 L18 22 M50 18 L46 22" stroke-width="2"/>
  </g></svg>`,

  bulb: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 26 a12 12 0 1 1 24 0 Q44 34 38 40 L26 40 Q20 34 20 26 Z" fill="currentColor" fill-opacity="0.12"/>
    <path d="M27 44 L37 44 M28 49 L36 49" stroke-width="2"/>
    <path d="M30 53 L34 53" stroke-width="3"/>
  </g></svg>`,

  extensionCord: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 14 L22 14 L22 26 L10 26 Z" fill="currentColor" fill-opacity="0.15"/>
    <path d="M13 14 L13 8 M19 14 L19 8" stroke-width="3"/>
    <path d="M16 26 Q16 40 30 40 Q44 40 44 30 Q44 22 52 22" />
    <circle cx="30" cy="40" r="10" stroke-width="2" stroke-opacity="0.4"/>
  </g></svg>`,

  /* ---------- HERRAMIENTAS ELÉCTRICAS Y MEDICIÓN ---------- */

  drill: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 20 L44 20 L44 34 L30 34 L28 40 L18 40 L16 34 L12 34 Z" fill="currentColor" fill-opacity="0.12"/>
    <path d="M44 24 L54 24 M44 30 L54 30" stroke-width="4"/>
    <path d="M20 40 L18 52 L30 52 L28 40" fill="currentColor" fill-opacity="0.15"/>
  </g></svg>`,

  hammerDrill: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 22 L38 22 L38 34 L26 34 L24 40 L14 40 L12 34 L8 34 Z" fill="currentColor" fill-opacity="0.12"/>
    <path d="M38 26 L48 26 M38 31 L48 31" stroke-width="3"/>
    <path d="M48 24 L48 33 L58 28 Z" fill="currentColor" fill-opacity="0.3"/>
    <path d="M16 40 L14 52 L26 52 L24 40" fill="currentColor" fill-opacity="0.15"/>
  </g></svg>`,

  drillBit: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M30 54 L30 30 M34 54 L34 30" />
    <path d="M30 30 L26 24 L34 16 L30 10 L34 6" stroke-width="3"/>
    <path d="M34 30 L30 24 L38 16 L34 10" stroke-width="3"/>
  </g></svg>`,

  circularSaw: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 30 Q14 14 30 14 L44 14 Q50 14 50 22 L50 30 Z" fill="currentColor" fill-opacity="0.12"/>
    <circle cx="32" cy="34" r="14"/>
    <path d="M32 48 L28 52 L36 52 L32 48 M46 34 L52 36 M18 34 L12 36" stroke-width="2"/>
    <path d="M6 52 L58 52" stroke-width="2"/>
    <path d="M36 10 Q42 6 46 10" />
  </g></svg>`,

  recipSaw: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 26 Q4 26 4 32 Q4 38 8 38 L34 38 L34 26 Z" fill="currentColor" fill-opacity="0.12"/>
    <path d="M34 28 L42 28 L42 36 L34 36" />
    <path d="M42 30 L60 30 L58 33 L54 30 L52 33 L48 30 L46 33 L42 33" stroke-width="2"/>
  </g></svg>`,

  grinder: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M24 22 L58 22 Q62 22 62 28 Q62 34 58 34 L24 34 Z" fill="currentColor" fill-opacity="0.12"/>
    <circle cx="16" cy="36" r="12"/>
    <circle cx="16" cy="36" r="3" fill="currentColor"/>
    <path d="M24 26 L18 26" stroke-width="2"/>
  </g></svg>`,

  bender: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M50 8 L26 46" />
    <path d="M18 40 Q8 46 12 54 L34 54 Q40 46 30 42 Z" fill="currentColor" fill-opacity="0.15"/>
    <path d="M6 58 L58 58" stroke-width="2"/>
  </g></svg>`,

  multimeter: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="18" y="8" width="28" height="44" rx="4" fill="currentColor" fill-opacity="0.08"/>
    <rect x="23" y="14" width="18" height="10" rx="1" fill="currentColor" fill-opacity="0.2"/>
    <circle cx="32" cy="36" r="8"/>
    <path d="M32 36 L36 30" stroke-width="2"/>
    <path d="M22 52 L16 60 M42 52 L48 60" stroke-width="2"/>
    <circle cx="15" cy="61" r="2" fill="currentColor"/><circle cx="49" cy="61" r="2" fill="currentColor"/>
  </g></svg>`,

  voltTester: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M26 8 L38 8 L38 30 L34 56 L30 56 L26 30 Z" fill="currentColor" fill-opacity="0.1"/>
    <rect x="29" y="12" width="6" height="10" rx="1" fill="currentColor" fill-opacity="0.3"/>
    <path d="M44 18 L50 12 M46 26 L54 24 M20 18 L14 12 M18 26 L10 24" stroke-width="2"/>
  </g></svg>`,

  clampMeter: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 26 Q14 18 20 10 Q28 2 36 10 Q42 18 36 24" />
    <path d="M26 22 Q22 18 26 14 Q30 10 34 14" stroke-width="2"/>
    <rect x="20" y="26" width="24" height="30" rx="4" fill="currentColor" fill-opacity="0.1"/>
    <rect x="25" y="32" width="14" height="8" rx="1" fill="currentColor" fill-opacity="0.25"/>
  </g></svg>`,

  /* ---------- DOBLECES DE TUBERÍA ---------- */

  bend90: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 12 L10 34 Q10 50 26 50 L54 50" />
    <path d="M18 12 L18 34 Q18 42 26 42 L54 42" />
    <path d="M10 12 L18 12 M54 42 L54 50" stroke-width="3"/>
  </g></svg>`,

  bendOffset: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 44 L20 44 L34 28 L60 28" />
    <path d="M4 52 L22 52 L36 36 L60 36" />
    <path d="M4 44 L4 52 M60 28 L60 36" stroke-width="3"/>
  </g></svg>`,

  bendSaddle: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 44 L16 44 L26 32 L38 32 L48 44 L60 44" />
    <path d="M4 52 L18 52 L28 40 L36 40 L46 52 L60 52" />
    <path d="M26 58 L38 58" stroke-width="6" stroke-opacity="0.35"/>
  </g></svg>`,

  /* ---------- SISTEMA / CONCEPTOS ---------- */

  groundRod: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 26 L58 26" stroke-width="2"/>
    <path d="M10 26 L6 32 M20 26 L16 32 M30 26 L26 32 M40 26 L36 32 M50 26 L46 32 M58 26 L54 32" stroke-width="2"/>
    <path d="M36 8 Q28 12 30 20 L32 26" />
    <path d="M32 26 L36 56" stroke-width="4"/>
  </g></svg>`,

  circuit: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="8" y="20" width="14" height="24" rx="2" fill="currentColor" fill-opacity="0.12"/>
    <path d="M22 26 L44 26 M22 38 L44 38" />
    <circle cx="50" cy="32" r="7"/>
    <path d="M44 26 L50 25 M44 38 L50 39" />
    <path d="M47 32 L53 32 M50 29 L50 35" stroke-width="2"/>
  </g></svg>`,

  blueprint: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="8" y="12" width="48" height="40" rx="3" fill="currentColor" fill-opacity="0.06"/>
    <path d="M16 22 L34 22 L34 34 L48 34 L48 44 L16 44 Z" stroke-width="2"/>
    <path d="M34 22 L48 22 L48 34" stroke-width="2" stroke-dasharray="3 3"/>
    <circle cx="25" cy="44" r="2" fill="currentColor"/><path d="M40 34 L40 44" stroke-width="2"/>
  </g></svg>`,

  ladder: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 6 L12 58 M42 6 L52 58" />
    <path d="M20 18 L44 18 M18 30 L46 30 M16 42 L48 42" />
    <path d="M22 6 L42 6" />
  </g></svg>`,

  scaffold: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 6 L10 58 M54 6 L54 58" />
    <path d="M10 20 L54 20 M10 40 L54 40" stroke-width="4"/>
    <path d="M10 20 L54 40 M54 20 L10 40" stroke-width="2"/>
    <circle cx="10" cy="58" r="3"/><circle cx="54" cy="58" r="3"/>
  </g></svg>`,

  helper: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 18 Q20 8 32 8 Q44 8 44 18 L44 20 L20 20 Z" fill="currentColor" fill-opacity="0.2"/>
    <path d="M16 20 L48 20" />
    <circle cx="32" cy="28" r="8"/>
    <path d="M18 54 Q18 40 32 40 Q46 40 46 54" fill="currentColor" fill-opacity="0.08"/>
  </g></svg>`,

  foreman: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 16 Q20 6 32 6 Q44 6 44 16 L44 18 L20 18 Z" fill="currentColor" fill-opacity="0.2"/>
    <path d="M16 18 L48 18" />
    <circle cx="32" cy="26" r="7"/>
    <path d="M18 52 Q18 38 32 38 Q46 38 46 52" fill="currentColor" fill-opacity="0.08"/>
    <path d="M46 30 L56 24 M46 34 L58 34" stroke-width="2"/>
    <rect x="50" y="40" width="10" height="14" rx="2" stroke-width="2"/>
  </g></svg>`,

  talk: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 12 L44 12 Q50 12 50 18 L50 32 Q50 38 44 38 L24 38 L12 48 L14 38 Q8 38 8 32 Z" fill="currentColor" fill-opacity="0.08"/>
    <circle cx="20" cy="25" r="2" fill="currentColor"/><circle cx="29" cy="25" r="2" fill="currentColor"/><circle cx="38" cy="25" r="2" fill="currentColor"/>
  </g></svg>`,

  inspection: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="12" y="6" width="32" height="44" rx="3" fill="currentColor" fill-opacity="0.06"/>
    <path d="M18 16 L26 16 M18 26 L26 26 M18 36 L26 36" stroke-width="2"/>
    <path d="M30 15 L33 18 L38 12" stroke-width="2"/>
    <path d="M30 25 L33 28 L38 22" stroke-width="2"/>
    <circle cx="42" cy="42" r="10" fill="currentColor" fill-opacity="0.08"/>
    <path d="M49 49 L58 58" stroke-width="4"/>
  </g></svg>`,

  necBook: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 10 Q12 6 16 6 L50 6 L50 50 L16 50 Q12 50 12 54 L12 10" fill="currentColor" fill-opacity="0.08"/>
    <path d="M12 54 Q12 58 16 58 L50 58 L50 50" />
    <path d="M30 16 L30 32 M22 24 L38 24" stroke-width="3"/>
    <path d="M31 16 Q34 13 37 16 L37 20" stroke-width="2"/>
  </g></svg>`,

  calendar: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="8" y="12" width="48" height="44" rx="4" fill="currentColor" fill-opacity="0.06"/>
    <path d="M8 24 L56 24" />
    <path d="M20 6 L20 16 M44 6 L44 16" />
    <path d="M16 34 L22 34 M29 34 L35 34 M42 34 L48 34 M16 44 L22 44 M29 44 L35 44" stroke-width="3"/>
  </g></svg>`,

  materialsList: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="14" y="8" width="36" height="48" rx="3" fill="currentColor" fill-opacity="0.06"/>
    <path d="M26 8 L26 4 L38 4 L38 8" />
    <path d="M22 20 L26 24 L32 16" stroke-width="2"/>
    <path d="M36 20 L44 20" stroke-width="2"/>
    <path d="M22 32 L26 36 L32 28" stroke-width="2"/>
    <path d="M36 32 L44 32" stroke-width="2"/>
    <circle cx="25" cy="46" r="3" stroke-width="2"/>
    <path d="M36 46 L44 46" stroke-width="2"/>
  </g></svg>`,

  troubleshoot: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M24 8 L20 28 L30 28 L22 52 L44 24 L32 24 L40 8 Z" fill="currentColor" fill-opacity="0.15"/>
    <circle cx="48" cy="46" r="10"/>
    <path d="M48 41 L48 47 M48 51 L48 51.5" stroke-width="3"/>
  </g></svg>`,

  transformer: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="14" y="14" width="36" height="36" rx="4" fill="currentColor" fill-opacity="0.08"/>
    <path d="M24 22 a5 5 0 0 1 0 8 a5 5 0 0 1 0 8" />
    <path d="M40 22 a5 5 0 0 0 0 8 a5 5 0 0 0 0 8" />
    <path d="M32 18 L32 46" stroke-width="2" stroke-dasharray="4 3"/>
    <path d="M6 30 L14 30 M50 30 L58 30" />
  </g></svg>`,

  ampacity: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 50 L56 50 M8 50 L8 10" stroke-width="2"/>
    <path d="M14 44 Q28 40 34 28 Q40 16 52 14" />
    <circle cx="34" cy="28" r="3" fill="currentColor"/>
    <path d="M46 8 L52 14 L46 20" stroke-width="2"/>
  </g></svg>`,

  boxFill: `<svg viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="14" y="14" width="36" height="36" rx="3" fill="currentColor" fill-opacity="0.08"/>
    <path d="M20 44 Q24 34 20 26 M28 44 Q32 32 28 22 M36 44 Q40 34 36 24 M44 44 Q46 36 44 28" stroke-width="2"/>
    <path d="M14 24 L8 24 M50 24 L56 24" stroke-width="2"/>
  </g></svg>`
};

/* Devuelve el HTML de la imagen para un item: SVG propio o emoji */
function iconHTML(icon, cssClass) {
  cssClass = cssClass || "item-icon";
  if (!icon) return `<span class="${cssClass} emoji-icon">⚡</span>`;
  if (icon.svg && SVG_ICONS[icon.svg]) {
    return `<span class="${cssClass} svg-icon">${SVG_ICONS[icon.svg]}</span>`;
  }
  if (icon.emoji) {
    return `<span class="${cssClass} emoji-icon">${icon.emoji}</span>`;
  }
  return `<span class="${cssClass} emoji-icon">⚡</span>`;
}
