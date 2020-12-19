// zone.js simplified
const oldSetTimeout = setTimeout;
setTimeout = (handler, timer) => {
  console.log('START');
  oldSetTimeout(_ => {
    handler();
    console.log('FINISH');
  }, timer);
}


//----------------------------------------------------------------

setTimeout(_ => {
  console.log('some action');
}, 3000);