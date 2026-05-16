const CACHE_NAME = "ecotech-quiz-v1";

const urlsToCache = [
  "./",
  "./HTML/inicio.html",
  "./HTML/pergunta1.html",
  "./HTML/pergunta2.html",
  "./HTML/pergunta3.html",
  "./HTML/pergunta4.html",
  "./HTML/pergunta5.html",
  "./HTML/tela-final.html",

  "./CSS/style.css",
  "./CSS/fonts.css",

  "./JAVASCRIPT/main.js",
  "./JAVASCRIPT/tela-final.js",

  "./midia/background.PNG",
  "./midia/eco-quiz-icon.gif",
  "./midia/lixo-icon.gif",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
