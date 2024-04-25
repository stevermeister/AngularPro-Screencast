/* 
Pros:
- Easy to use with simple API.
- Larger storage than cookies (5MB to 10MB).
Cons:
- Only string data can be stored, need to serialize other types.
- Data stored is not secure, stored in plain text.

ServiceWorkers:
- no direct access to localStorage.

*/
localStorage.setItem('user', 'John Doe');

let user = localStorage.getItem('user');

localStorage.removeItem('user');

/* 
Pros:
- Data is automatically cleared when the browser or tab is closed.
- Useful for data that should not persist between sessions.
Cons:
- Limited to the lifetime of the tab.
- Like Local Storage, only string data can be stored.

ServiceWorkers:
- no direct access to sessionStorage.

*/

sessionStorage.setItem('sessionUser', 'Jane Doe');

let sessionUser = sessionStorage.getItem('sessionUser');

sessionStorage.removeItem('sessionUser');

