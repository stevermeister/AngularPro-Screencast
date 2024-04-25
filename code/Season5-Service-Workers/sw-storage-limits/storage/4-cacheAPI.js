/* 
Pros:
- Suitable for caching requests and enabling offline applications.
- Controlled programmatically, robust in terms of network performance optimization.
Cons:
- More complex to use than some other storage options.
- Primarily for storing HTTP requests, not arbitrary data.

ServiceWorkers:
- Can use the Cache API to store and retrieve data.
*/

caches.open('v1').then(async function(cache) {
    // Add a file to the cache
    await cache.add('./file.txt');
    let response = await cache.match('./file.txt');
    let text = await response.text();
    // Remove a file from the cache
    await cache.delete('./file.txt');

    // Add data to the cache
    await cache.put('/data', new Response('JohnDoe'));
    response = await cache.match('/data');
    text = await response.text();
    // Remove a data from the cache
    await cache.delete('/data');
});

