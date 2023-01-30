const VERSION = 'v0';

log = (msg) => console.log(`${VERSION}:${msg}`);


self.addEventListener("install", (event) => {
  log("sw is installed");
});

self.addEventListener("active", (event) => {
  log("sw is activated");
});

log("sw file executed");

