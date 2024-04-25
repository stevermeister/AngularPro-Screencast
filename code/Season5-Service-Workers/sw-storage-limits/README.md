🖱️ User's Browser Data Storage:
- Web technologies can store data on a user's local device through the browser.
- Browsers provide storage quotas and automatic data eviction criteria.
- Data storage is managed per website's origin (scheme, hostname, port).

🛡️ Data Separation:
- Data is stored in "buckets" to prevent cross-website user tracking.
- In some cases, data is stored in separate partitions, e.g., within iframes.

💾 Storage Technologies:
- Cookies: Small data for stateful info, sent with HTTP requests.
- Web Storage: Key/value pairs via localStorage/sessionStorage, capped at 10 MiB.
- IndexedDB: Large, searchable data structures.
- Cache API: Persistent storage for faster webpage loading.
- Origin Private File System (OPFS): File and directory management system.

🕵️‍♂️ Private Browsing:
- In private/incognito modes, different quotas apply and data is deleted after the session ends.

📊 Quotas Per Browser:
- Vary among browsers; influenced by total disk space.
- Firefox: Up to 10% or 10 GiB in best-effort, 50% capped at 8 TiB for persistent.
- Chromium-based (Chrome, Edge): Up to 60% of total disk size.
- Safari: Up to 20%, increased to 60% for web apps on Home Screen/Dock.

🔍 Quota Monitoring:
- Developers can estimate used and available storage using navigator.storage.estimate().

❌ Quota Exceeded:
- Writes exceeding quota fail with QuotaExceededError.
- Best practice is to manage storage within try...catch blocks and delete data as needed.


https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria