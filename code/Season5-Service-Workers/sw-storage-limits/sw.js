
class CacheAPI {
    static async fillStorage() {
        const cache = await caches.open('my-cache');
        for (let i = 0; i < 100; i++)
            cache.put(`/dummy-url-${i}`, new Response('A'.repeat(1024 * 1024 * 100))) 
    }
    
    static async clearStorage() {
        const cacheNames = await caches.keys();
        cacheNames.forEach(cacheName => caches.delete(cacheName))
    }
}



class IndexedDB {
    static fillStorage() {
        const request = indexedDB.open('largeDataDB');
        request.onsuccess = function(event) {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('dataStore')) {
                // Create an object store named 'items' with auto-incrementing keys
                db.createObjectStore('dataStore');
            }
            // Attempt to store roughly 10GB of data
            for (let index = 0; index < 100; index++) { // Store 100 x 100MB = ~10GB
                const blob = new Blob(['A'.repeat(1024 * 1024 * 100)], {type: 'text/plain'});
                const store = db.transaction(['dataStore'], 'readwrite').objectStore('dataStore');
                store.put(blob, `object${index}`);
            }
        };
    }
    static clearStorage() {
        const request = indexedDB.open('largeDataDB');
    
        request.onsuccess = function(event) {
            const db = event.target.result;
            const store = db.transaction(['dataStore'], 'readwrite').objectStore('dataStore');
            const clearRequest = store.clear();
    
            clearRequest.onsuccess = function() {
                console.log('Object store cleared successfully.');
            };
        };
    }
}

self['CacheAPI'] = CacheAPI;
self['IndexedDB'] = IndexedDB;

self.addEventListener("message", async (event) => {
    let [classname, method] = event.data.command.split('-');
    self[classname][method]();
});



