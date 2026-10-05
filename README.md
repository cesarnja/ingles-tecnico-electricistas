# ⚡ Inglés Técnico para Electricistas

**De Ayudante a Foreman · Español → English**

Aplicación web local para aprender el inglés real de la obra eléctrica en Estados Unidos: herramientas, equipo de seguridad, materiales, conductores, dispositivos y las frases para pedirlos y usarlos — con audio, imágenes ilustrativas y referencias al Código Eléctrico Nacional (NEC).

---

## 🚀 Cómo abrir la aplicación

**Opción 1 (recomendada):** doble clic en **`Iniciar-App.bat`**. Se abre en tu navegador y listo. Deja la ventana negra abierta mientras estudias.

**Opción 2:** doble clic en **`index.html`**. Se abre directo en el navegador (todo funciona igual).

> Usa **Chrome** o **Microsoft Edge** para que funcione el audio de pronunciación (voz en inglés y español). No necesitas internet.

## 📱 En tu teléfono

La app es una **PWA** (Progressive Web App): se puede instalar en el teléfono con su propio icono y funcionar sin internet. Tres rutas:

**A. En casa, misma red Wi-Fi (ya funciona):**
1. En la computadora, doble clic en `Iniciar-App.bat`. La ventana muestra la dirección para el teléfono (ej. `http://192.168.1.XX:8351`).
2. Si Windows pregunta por el Firewall, elige **"Permitir acceso"** (redes privadas).
3. En el teléfono, abre esa dirección en Chrome. *Requiere la computadora encendida.*

**B. Instalada en el teléfono, sin internet (recomendada) — YA DISPONIBLE:**

### 👉 https://cesarnja.github.io/ingles-tecnico-electricistas/

1. Abre esa dirección en **Chrome** en tu teléfono.
2. Menú **⋮** → **"Instalar aplicación"** (o "Agregar a pantalla de inicio").
3. Listo: la app queda con icono propio, a pantalla completa, y **funciona sin internet**.

Tu progreso se guarda en el teléfono. Las mejoras que se hagan en la computadora llegan solas con un `git push`.

**C. Archivo único por WhatsApp o Drive (emergencia):**
Manda `InglesTecnico-1archivo.html` a tu teléfono (WhatsApp contigo mismo, correo o Drive), descárgalo y ábrelo con Chrome. Todo funciona sin internet, pero sin icono de app, y si vuelves a descargar el archivo el progreso empieza de cero.

## 🎓 Cómo funciona el curso

| Nivel | Puesto | Contenido |
|-------|--------|-----------|
| ⚡ | **Conseguir trabajo (Getting Hired)** | **Siempre desbloqueado**, sin importar tu avance: (1) la llamada del reclutador, (2) la entrevista, (3) el primer día en la obra, (4) tus herramientas, (5) materiales de data center |
| 1 | **Ayudante (Helper)** | Herramientas de mano, seguridad y EPP, conductores y cables, cajas y conectores, dispositivos básicos, frases para pedir y entender |
| 2 | **Top Helper** | Herramientas eléctricas, conduit y doblado, cableado y rough-in, medición y pruebas, frases de instrucciones y avance |
| 3 | **Mecánico (Journeyman)** | Paneles y distribución, circuitos y NEC esencial, solución de problemas, planos y trim-out, frases para explicar y coordinar |
| 4 | **Foreman** | Dirigir la cuadrilla, seguridad OSHA y juntas, inspecciones y permisos, frases de liderazgo |

### Reglas del sistema

1. **Estudia** cada módulo: imagen + español + inglés + pronunciación escrita + audio 🔊 + oración de ejemplo + notas de obra y de NEC. Al tocar 🔊 **se va iluminando cada palabra mientras se pronuncia**, como karaoke: así relacionas el sonido con la palabra escrita.
   - El botón **🐢→🐇 Lento y normal** repite la frase **dos veces**: primero muy despacio (0.55×) para que tu oído separe cada palabra, y luego a velocidad real (1×) para acostumbrarte a como hablan en la obra. Repite en voz alta las dos veces — esa es la técnica que más rápido suelta la lengua.
2. **Practica** sin calificación las veces que quieras (8 preguntas al azar).
3. **Examen**: cubre TODOS los términos del módulo con 4 tipos de pregunta:
   - 🇲🇽→🇺🇸 elegir la palabra en inglés
   - 🇺🇸→🇲🇽 elegir el significado en español
   - 🎧 escuchar y elegir (comprensión auditiva)
   - ⌨️ escribir la palabra en inglés (escritura)
4. **Se exige 100%** para aprobar. Si fallas una, repasas y lo vuelves a intentar. Igual que en la obra: se hace bien, o se vuelve a hacer.
5. Al aprobar se **desbloquea el siguiente módulo**; al terminar todos los módulos de un nivel, se desbloquea el **siguiente puesto**.

> **Excepción a la regla:** la sección **⚡ Conseguir trabajo** está siempre abierta desde el primer día. Buscar trabajo no espera a que apruebes módulos — si mañana te llama un reclutador, necesitas esas frases hoy.

Tu progreso se guarda solo, en tu navegador. En ⚙️ Ajustes puedes cambiar la velocidad de la voz en inglés (empieza en 0.9× y súbela conforme mejores tu oído) o borrar el progreso.

### 📖 Diccionario

Botón **Diccionario** arriba: busca cualquier término en español o inglés, con audio. Sirve como referencia rápida en el trabajo.

## 📚 Fuentes y alcance

- La terminología sigue el **NEC (NFPA 70®)**: las notas citan números de artículo con explicación propia, **no** reproducen el texto del código (está protegido por derechos de autor). Verifica siempre la edición vigente y las enmiendas locales de tu estado.
- La seguridad laboral se rige por **OSHA 29 CFR 1926** y **NFPA 70E**.
- Las "notas de obra" recogen el inglés real del trabajo (dikes, Sawzall, make up the box…), que a veces difiere del término formal del código.

## 🗂️ Estructura del proyecto

```
Ingles tecnico/
├── index.html                  ← página principal
├── Iniciar-App.bat             ← acceso directo (doble clic)
├── InglesTecnico-1archivo.html ← versión de un archivo para enviar al teléfono
├── manifest.webmanifest        ← identidad de la app (nombre, iconos, colores)
├── sw.js                       ← service worker: funcionamiento sin internet
├── icons/                      ← iconos de la app (rayo sobre ámbar)
├── css/styles.css              ← diseño visual
├── js/data.js                  ← vocabulario del curso (391 términos y frases)
├── js/icons.js                 ← imágenes SVG ilustrativas
└── js/app.js                   ← lógica: navegación, audio, exámenes, progreso
```

> Si editas el vocabulario, regenera la versión de un archivo con: `python build_single_file.py` (los iconos se regeneran con `python gen_icons.py`).

## 🛠️ Cómo agregar más vocabulario

Abre `js/data.js` y copia el formato de cualquier término:

```js
{ es: "la palabra en español", en: "english word", pron: "pro-nun-cia-CIÓN",
  icon: { emoji: "🔧" },            // o { svg: "nombreDeIcono" } de js/icons.js
  exEs: "Oración de ejemplo en español.", exEn: "Example sentence in English.",
  note: "Nota de obra (opcional)", nec: "Referencia NEC (opcional)" }
```

Guarda el archivo y recarga la página: el nuevo término entra automático al módulo, a su examen y al diccionario.

## 🔮 Ideas para las siguientes versiones

- Repaso espaciado (los términos fallados regresan a los 1, 3 y 7 días)
- Reconocimiento de voz: pronuncia tú y la app te evalúa
- Módulos de media tensión (15kV/35kV) y certificación 3M
- Fotos reales de tus propias herramientas dentro de las tarjetas
- Más niveles: General Foreman, Superintendent, examen de licencia (Journeyman test)
