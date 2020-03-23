const CORE_CACHE = 2
const CORE_CACHE_NAME = `demo-core-v${CORE_CACHE}`
const CORE_ASSETS = ["/offline", "./images/unsplash.jpg", "./dist/index.bundle.js", "./dist/style.css", "./dist/fonts/MuseoSans-100.otf","./dist/fonts/MuseoSans-300.otf","./dist/fonts/MuseoSans_700.otf","./dist/fonts/MuseoSans_500.otf",] 

self.addEventListener('install', (e) => {
    console.log("Installed")
    e.waitUntil(
        caches.open(CORE_CACHE_NAME)
        .then(cache => cache.addAll(CORE_ASSETS))
        .then(() => self.skipWaiting())
    )
})

self.addEventListener("activate", (e) => {
    console.log("Activated")
    e.waitUntil(clients.claim())
})

self.addEventListener("fetch", (e) => {
    
    const req = e.request
    console.log("Fetching:" + req)
    
        e.respondWith(
            caches.match(req)
            .then(cachedRes => {
                if (cachedRes) {
                    return cachedRes
                }
                return fetch(req)
                    .then((fetchRes) => fetchRes)
                    .catch((err) => {
                        return caches.open(CORE_CACHE_NAME)
                        .then(cache => cache.match('/offline'))})
            })
        )
})

function isHtmlGetRequest(req) {
    return req.method === 'GET' && (req.headers.get('accept') !== null && req.headers.get('accept').indexOf('text/html') > -1);
}