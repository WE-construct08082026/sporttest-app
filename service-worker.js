// Minimale service worker: cachet enkel de "schil" (deze wrapper),
// niet de data zelf. De echte data komt altijd live uit de iframe
// (Apps Script + Google Sheets).

const CACHE_NAME = "sporttest-shell-v1";
const SHELL_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

// Bij installatie: shell-bestanden in de cache zetten
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_FILES))
  );
  self.skipWaiting();
});

// Oude caches opruimen bij activatie
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Alleen shell-bestanden vanuit cache serveren; alle andere requests
// (o.a. de iframe naar Apps Script) gewoon naar het netwerk laten gaan.
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  const isShellFile = SHELL_FILES.some((file) =>
    url.pathname.endsWith(file.replace("./", "/"))
  );

  if (isShellFile) {
    event.respondWith(
      caches.match(event.request).then((cached) => cached || fetch(event.request))
    );
  }
  // Geen respondWith voor overige requests -> normaal netwerkgedrag (iframe blijft live)
});
