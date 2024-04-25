/* 
Pros:
- Supported by all browsers.
- Accessible from both client-side and server-side.
Cons:
- Limited storage capacity (about 4KB).
- Sent with every HTTP request, which can affect performance if overused.

ServiceWorkers:
- Can intercept and cache network requests, but not have direct access to cookies.
*/


// Set a cookie
document.cookie = "username=JohnDoe;";

// Get a cookie
function getCookie(name) {
    let cookies = document.cookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split('=');
        if(cookie[0].trim() === name) {
            return cookie[1];
        }
    }
    return "";
}

let username = getCookie("username"); // Output: JohnDoe

// Cleanup cookies
function clearCookies() {
    let cookies = document.cookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf('=');
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

// Call the clearCookies function at the end
clearCookies();

