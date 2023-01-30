const VERSION = "v5";

log = (msg) => console.log(`${VERSION}:${msg}`);

self.addEventListener('push', function(event) {
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification
  const options = {
    body: "Buzz! Buzz!",
    icon: "https://i.stack.imgur.com/1rCh2.jpg?s=48&g=1",
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    tag: "vibration-sample",
  }

  let promise = self.registration.showNotification('Push notification!', options);

  event.waitUntil(promise);
});