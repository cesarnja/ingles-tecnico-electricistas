/* ============================================================
   SW.JS — Service Worker
   Hace que la app funcione SIN INTERNET una vez instalada.
   Estrategia: para el código (html/js/css) va PRIMERO a la red, para
   que las mejoras se vean de inmediato, y usa el caché de respaldo si
   no hay señal. Para las imágenes usa primero el caché, que es
   instantáneo. Al cambiar contenido hay que subir el número de CACHE.
   ============================================================ */

const CACHE = "ingles-tecnico-v9";

const ASSETS = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/icons.js",
  "./js/data.js",
  "./js/app.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-48.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* El "cuerpo" de la app: HTML, JS y CSS.
   Para estos vamos PRIMERO a la red, así una actualización se ve de
   inmediato; si no hay internet, se responde con la copia guardada.
   Para las imágenes (que casi no cambian) usamos primero el caché,
   que es instantáneo. */
function esCuerpoDeLaApp(url) {
  return /\.(html|js|css|webmanifest)$/i.test(url.pathname) || url.pathname.endsWith("/");
}

self.addEventListener("fetch", function (e) {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // solo nuestros archivos

  const opciones = { ignoreSearch: true };

  if (req.mode === "navigate" || esCuerpoDeLaApp(url)) {
    // Red primero, caché de respaldo
    e.respondWith(
      fetch(req).then(function (resp) {
        if (resp && resp.status === 200) {
          const copia = resp.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copia); });
        }
        return resp;
      }).catch(function () {
        return caches.match(req, opciones).then(function (cached) {
          return cached || caches.match("./index.html", opciones);
        });
      })
    );
    return;
  }

  // Imágenes y demás: caché primero, y se actualiza por detrás
  e.respondWith(
    caches.match(req, opciones).then(function (cached) {
      const red = fetch(req).then(function (resp) {
        if (resp && resp.status === 200) {
          const copia = resp.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copia); });
        }
        return resp;
      }).catch(function () { return cached; });
      return cached || red;
    })
  );
});
