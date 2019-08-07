// sw.js
var cacheName = 'WWW-EXAMPLE-COM-V1';
var filesToCache = [
    '/',                // index.html
];
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            console.info('[sw.js] cached all files');
            return cache.addAll(filesToCache);
        })
    );
});