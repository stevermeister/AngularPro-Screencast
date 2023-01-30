const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(addResourcesToCache(["/", "/index.html", "/some.js", "/dino.html"]));
});


self.addEventListener("fetch", (event) => {
 // console.log(`TRY TO FETCH ${event.request.url}`);


//   const fakeResponse = new Response(
//     "<p>Hello from your friendly neighborhood service worker!</p>",
//     {
//       headers: { "Content-Type": "text/html" },
//     }
//   );


//   event.respondWith(fakeResponse);

  //event.respondWith(caches.match(event.request));
  event.respondWith(caches.match("/dino.html"));
});


