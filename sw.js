// ── Service Worker — HD Calc ──────────────────────────
// Versión del caché: cambiar este número al actualizar la app
var CACHE_NAME = 'hd-calc-v5';

// Archivos que se guardan en el celular para funcionar sin internet
var ARCHIVOS_CACHE = [
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap'
];

// ── Instalación: guarda los archivos en el caché ──
self.addEventListener('install', function(event) {
  console.log('[SW] Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('[SW] Guardando archivos en caché');
      // Cachear archivos locales de forma estricta
      return cache.addAll(['./index.html', './manifest.json'])
        .then(function() {
          // Fuentes de Google: intentar cachear, no fallar si no hay internet
          return cache.add('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap')
            .catch(function() { console.log('[SW] Fuentes no disponibles offline, se usará sistema'); });
        });
    })
  );
  self.skipWaiting();
});

// ── Activación: limpia cachés viejos ──
self.addEventListener('activate', function(event) {
  console.log('[SW] Activando...');
  event.waitUntil(
    caches.keys().then(function(nombres) {
      return Promise.all(
        nombres
          .filter(function(nombre) { return nombre !== CACHE_NAME; })
          .map(function(nombre) {
            console.log('[SW] Eliminando caché antiguo:', nombre);
            return caches.delete(nombre);
          })
      );
    })
  );
  self.clients.claim();
});

// ── Fetch: sirve desde caché, con fallback a red ──
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(respuestaCacheada) {
      if (respuestaCacheada) {
        return respuestaCacheada; // Servir desde caché (funciona offline)
      }
      // No está en caché: ir a la red
      return fetch(event.request).then(function(respuestaRed) {
        // Guardar en caché si es una respuesta válida
        if (respuestaRed && respuestaRed.status === 200 && respuestaRed.type === 'basic') {
          var respuestaClon = respuestaRed.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, respuestaClon);
          });
        }
        return respuestaRed;
      }).catch(function() {
        // Sin internet y sin caché: mostrar index como fallback
        return caches.match('./index.html');
      });
    })
  );
});
