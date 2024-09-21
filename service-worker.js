{
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker
                .register("service-worker.js")
                .then((registration) => {
                    console.log("Service Worker registered with scope:", registration.scope);
                })
                .catch((error) => {
                    console.log("Service Worker registration failed:", error);
                });
        });
    }
}
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("my-pwa-cache").then((cache) => {
            return cache.addAll(["agent.html", "agent-js.js", "area.html", "area-js.js", "icon.png", "index.html", "manifest.webmanifest", "pulltorefresh.js", "store.html", "store-js.js", "style.css", "transformer.js"]);
        })
    );
});
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
