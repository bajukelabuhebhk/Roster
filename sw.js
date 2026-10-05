self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open('r1').then(c=>c.addAll(['./','index.html'])).catch(()=>{}))});
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin)return;e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open('r1').then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)))});
