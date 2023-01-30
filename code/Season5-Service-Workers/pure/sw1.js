const VERSION = 'v1';

log = (msg) => console.log(`${VERSION}:${msg}`);


// self.addEventListener("install", () => {
//   caches.open(VERSION).then(cache => {
//     cache.add("/index-1.html");
//   });
// });

self.addEventListener("fetch", (event) => {
   // event.respondWith(caches.match(event.request));
   event.respondWith(caches.match("/dino.html"));
});



const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(addResourcesToCache(["/", "/index-1.html", "/sw1.js", "/dino.html"]));
});