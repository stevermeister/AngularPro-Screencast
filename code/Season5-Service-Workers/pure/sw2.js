const VERSION = 'v2';

log = (msg) => console.log(`${VERSION}:${msg}`);


// temporary solution to clean up cache from the old version 
async function cleanAllCache() {
  console.log('Started cleanup');
  const cacheNames = await caches.keys();
  for (const cacheName of cacheNames) {
      if(cacheName.slice(0,27) === 'dutch-tax-income-calculator') {
        await caches.delete(cacheName);
        console.log(`Cache with key ${cacheName} deleted`)
      }
  }
}
cleanAllCache();
