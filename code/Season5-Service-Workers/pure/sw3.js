const VERSION = 'v3';

log = (msg) => console.log(`${VERSION}:${msg}`);


addEventListener("message", (event) => {
  // event is an ExtendableMessageEvent object
  log(`from MAIN: ${event.data}`);

  setTimeout(_ => {
    event.source.postMessage("Hi client");
  }, 3000);
  
});