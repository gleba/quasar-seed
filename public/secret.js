 console.log("maybe secret")
// self.addEventListener('install', (event) => {
//     console.log("installed")
//     event.waitUntil(precache);
// });
//
//
// self.addEventListener('activate', (event) => {
//     var cacheKeeplist = ['v2'];
//     console.log("activated")
//     event.waitUntil(
//         caches.keys().then((keyList) => {
//             console.log(":", keyList)
//             return Promise.all(keyList.map((key) => {
//                 console.log("::", key)
//                 if (cacheKeeplist.indexOf(key) === -1) {
//                     return caches.delete(key);
//                 }
//             }));
//         })
//     );
//
// });
//
// function precache() {
//     return caches.open(CACHE).then(function (cache) {
//         return cache.addAll([
//             '/quasar.prod.css',
//         ]);
//     });
// }
