/* 
Pros:
- Supports storing large amounts of structured data.
- Works asynchronously, does not block the UI.
Cons:
- Complex API, steeper learning curve than other storage options.
- Limited support in some older browsers.

ServiceWorkers:
- Can use IndexedDB to store data.
*/

let db;
let request = indexedDB.open('UserDatabase', 1);

request.onupgradeneeded = function(event) {
    db = event.target.result;
    let objectStore = db.createObjectStore('users', { keyPath: 'id' });
    objectStore.createIndex('name', 'name', { unique: false });
};

request.onsuccess = function(event) {
    db = event.target.result;
    let transaction = db.transaction(['users'], 'readwrite');
    let objectStore = transaction.objectStore('users');
    objectStore.add({ id: 1, name: 'John Doe' });
    
    let userTransaction = db.transaction(['users']);
    let userStore = userTransaction.objectStore('users');
    let userRequest = userStore.get(1);
    userRequest.onsuccess = function() {
        user = userRequest.result.name; // Output: John Doe
    };
};

request.onerror = function(event) {
    console.error('Database error: ', event.target.errorCode);
};
