const CACHE_NAME = "srg-v1";
const ASSETS_TO_CACHE = [
    "./",
    "./icon.png",
    "./icon512_rounded.png",
    "./icon512_maskable.png",
    "./index.html",
    "./store.html",
    "./agent.html",
    "./area.html",
    "./404.html",
    "./script.js",
    "./store.js",
    "./agent.js",
    "./area.js",
    "./service-worker.js",
    "./transformer.js",
    "./style.css",
    "./manifest.json",
];
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Opened cache");
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting();
});
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(cacheNames.filter((cacheName) => cacheName !== CACHE_NAME).map((cacheName) => caches.delete(cacheName)));
        })
    );
    self.clients.claim();
});
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches
            .match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match("./404.html");
            })
    );
});
