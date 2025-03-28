'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2ef64fa918ff428c3e830dda4f32e629",
"version.json": "980547175e325fe622a3362b84d55b6a",
"index.html": "8c2b9f7be987f37464b8fe468e3c2e60",
"/": "8c2b9f7be987f37464b8fe468e3c2e60",
"main.dart.js": "f37d1b73bf6333427d471d6498ef2dc6",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "90c454c29b48f08bc06627d125f70466",
"assets/AssetManifest.json": "cbbf4f1b4aa2aa18045961c0dc7c022c",
"assets/NOTICES": "a96dce3bc11736f2d04249ea4b315ce7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0068b737eaf90a184ade15b22b0a7f28",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "82c40955df886c186076fda07c0e015a",
"assets/fonts/MaterialIcons-Regular.otf": "f67a02c0e7d0c8cc0cdaac07154144f7",
"assets/assets/ShM-8.jpeg": "ca3ce704d9abed42c5d7fa8542577d55",
"assets/assets/bag-1.jpeg": "e1e4cd48e003aa96fabf215d20f7de10",
"assets/assets/CGD-1.jpeg": "f45e39d0a50b9248f2be51cbc8c48b00",
"assets/assets/PW-5.jpeg": "af0fb500ddf7f58853849675cf46f047",
"assets/assets/UWM-5.jpeg": "847f63939f8fa80a3e0a89d550ac0774",
"assets/assets/SM-2.jpeg": "c2567e90cfd1978ccad0458bb5133791",
"assets/assets/PM-4.jpeg": "49d8100a4acb67d1ed3ea890e705a0f6",
"assets/assets/CGP-1.jpeg": "096a210e0f43c2a4c0db1f9f357606df",
"assets/assets/SW-3.jpeg": "17d45be165c63ee32cf2f51b2c549eea",
"assets/assets/ShM-4.jpeg": "80136628105c3de4ce511d676e59f1f6",
"assets/assets/ShW-5.jpeg": "62e2c0fdb74f3787e164832dcfaeb076",
"assets/assets/hat-3.jpeg": "385de515ea62428af3161a0985b39a80",
"assets/assets/socks-4.jpeg": "0373db699327c10698e177b969b51fd1",
"assets/assets/gloves-4.jpeg": "05f109b53e33bc1a896ba8ceff82f49c",
"assets/assets/wallet-1.jpeg": "e4b5c59da0aa86599a60867a0188ce32",
"assets/assets/PM-8.jpeg": "84f96ceb486122986eb129deb151ed17",
"assets/assets/PW-8.jpeg": "da2b53c225444239fa6930ca418ee12b",
"assets/assets/socks-5.jpeg": "5c059ea6f1bc4076ece7dee5474e569a",
"assets/assets/hat-2.jpeg": "6d5a4b95af0ae83d392d3dc2e771f11f",
"assets/assets/bobbi.gif": "c7b4e70a117c81187a7331a4ec91c5d9",
"assets/assets/ShW-4.jpeg": "71ecfcfd3f60d71d2f1a19bfd62bed50",
"assets/assets/purse-2.jpeg": "3b326357fb6b96db0208d418a180ed50",
"assets/assets/ShM-5.jpeg": "bc2b943ad4c3f669bd71c7e29a7143c9",
"assets/assets/SW-2.jpeg": "a9422284849647ce829df772db28f8b0",
"assets/assets/PM-5.jpeg": "d57df17a6c8aeeef50f5fd14215a370a",
"assets/assets/SM-3.jpeg": "c06904b73cae0d1c7793f14ffdfc865f",
"assets/assets/UWM-4.jpeg": "72e5bdacf3ca4e9984167302c9308aa2",
"assets/assets/CGJ-1.jpeg": "93003dab499c10d19294e28e30618345",
"assets/assets/CBS-6.jpeg": "c1211a8e490ca15c322e49cbe0fb77f7",
"assets/assets/PW-4.jpeg": "d184dd978a514ef059a780ef61071631",
"assets/assets/CBO-1.jpeg": "cd4dce5d2df221506904b0757f5be0e1",
"assets/assets/ShW-8.jpeg": "65f3f1c5a9c19c9d5c0415ddae09ce4c",
"assets/assets/ShM-2.jpeg": "082df6a71871bae784ef9949c5825ebb",
"assets/assets/ShW-3.jpeg": "ad7eba9e6e95db30198f73917984d35e",
"assets/assets/hat-5.jpeg": "1eccb3cc884aa71eaf31bee0ab6092fb",
"assets/assets/socks-2.jpeg": "282119a5015afdac5aa03859e4af1546",
"assets/assets/SM-8.jpeg": "8b26c9aac4b208ce84226003bb54b5ff",
"assets/assets/gloves-2.jpeg": "abb90e86b6fc2270166cdcb489e675c8",
"assets/assets/earrings-1.jpeg": "1483610ea63d311e164fe4444bb5ca03",
"assets/assets/PW-3.jpeg": "55ebb6abf6015c8e9ddbb6116897df99",
"assets/assets/CBS-1.jpeg": "384083876af53ecd54ebf8914037f69c",
"assets/assets/UWM-3.jpeg": "7fe910a73d5e8af5d2bf4fb860052e05",
"assets/assets/SM-4.jpeg": "16f018fae3a459872840510b07709998",
"assets/assets/PM-2.jpeg": "3cdac705808c5e4060fed857fff80e9a",
"assets/assets/UWW-2.jpeg": "b4d7bf31082f01c5803d3539841bbd0a",
"assets/assets/SW-5.jpeg": "9ab7747451595946fe09b7d59bc33ee6",
"assets/assets/SW-4.jpeg": "7e6186e9fa943fbd74cbcac761587ab9",
"assets/assets/UWW-3.jpeg": "cee40af254bb5abd95b5f717331905ab",
"assets/assets/PM-3.jpeg": "129d1dcbe9d59dad3dd7649c185f9b20",
"assets/assets/SM-5.jpeg": "c89216e17749d7ba028d05da8a2fc85e",
"assets/assets/CBShorts-1.jpeg": "384083876af53ecd54ebf8914037f69c",
"assets/assets/UWM-2.jpeg": "6f8b09eaa3cc0556e192124b729502d9",
"assets/assets/PW-2.jpeg": "5bc50a8bb0bf81d0feb7656fcfa65435",
"assets/assets/SW-8.jpeg": "ef8141adbff4247a9439c20575888020",
"assets/assets/gloves-3.jpeg": "48f70bf84335cffe644c28e5b43c7843",
"assets/assets/socks-3.jpeg": "15d382bdd7625ee1f06f0e6095a4adb1",
"assets/assets/hat-4.jpeg": "d065e2dc7cc85846e8f555094461f610",
"assets/assets/ShW-2.jpeg": "6fb180d0763bf6d8ff85706c49106e92",
"assets/assets/ShM-3.jpeg": "7473c73d3b3a97033bf32e14ac64baae",
"assets/assets/bracelets-1.jpeg": "a8e29d9353b1a3d6d46993aeac8e32d5",
"assets/assets/ShW-1.jpeg": "4b5e6048084e0da8a7b6ee80c3a6ab5e",
"assets/assets/SW-7.jpeg": "a628ad23bca7a3af27d8d0ce5f4b9509",
"assets/assets/SM-6.jpeg": "6826f811d77ca9da239e4a204ae9b251",
"assets/assets/UWM-1.jpeg": "0539bb5574087eed20a290f19eb2f43a",
"assets/assets/CBS-3.jpeg": "ea7043d70a0ca107304b008fe75cc5a2",
"assets/assets/PW-1.jpeg": "09e24a1d83041595874452fcce34dd19",
"assets/assets/CGS-1.jpeg": "173de8e2a7528fff6ee1bb327538cc9f",
"assets/assets/CBS-2.jpeg": "e7adced62d53e0dfd9ce4f6491547457",
"assets/assets/SM-7.jpeg": "eefcee2f8bffb5dd3b79184cdd4a75aa",
"assets/assets/PM-1.jpeg": "803cf89001a883932517f4b1b3bf2ed3",
"assets/assets/UWW-1.jpeg": "fb594180ae1f5d4fcc290c2390a3c6c3",
"assets/assets/SW-6.jpeg": "c171fc01a227343d140246c8c6103597",
"assets/assets/ShM-1.jpeg": "8786ff613441ca8e6d81063e22f6d873",
"assets/assets/socks-1.jpeg": "61951645d077437fcf0982656cd6964c",
"assets/assets/gloves-1.jpeg": "0a61c579bd6cfc0e8138033c20888d1b",
"assets/assets/SW-1.jpeg": "3014f8ea3f10db9a3b1f587d80309a1a",
"assets/assets/PM-6.jpeg": "f922a22a3ee46f3d2c16dd8cb5aa6499",
"assets/assets/CBS-5.jpeg": "bb699c1982949a5f8615a0a3b6c6bae9",
"assets/assets/PW-7.jpeg": "afbddac351b7427cc5453086d5b0a17b",
"assets/assets/socks-6.jpeg": "3a82e60376f2ff52fcadaf327e071159",
"assets/assets/hat-1.jpeg": "b183f11580e7e48f754259fcb4bed8ab",
"assets/assets/ShW-7.jpeg": "d1f46bcd6d8cd39e2a32e137be1c4c2d",
"assets/assets/purse-1.jpeg": "e5022dfa6274dc5df7ddeaea7cd42283",
"assets/assets/ShM-6.jpeg": "1e0cf919f07111dddc6846d935a2b1b7",
"assets/assets/CBCozy-1.jpeg": "3a1b6d941101bafa2103a1700204d134",
"assets/assets/ShM-7.jpeg": "feb3ae75dfb96a7d27002148c58f1951",
"assets/assets/ShW-6.jpeg": "a8356c6c2a31f8daa0058ee0f1151f08",
"assets/assets/wallet-2.jpeg": "717f14e6e1b8cc18211bfa114a027f71",
"assets/assets/CBP-1.jpeg": "71e22c0c7140c9f9ffe21e08d25fc9d9",
"assets/assets/bag-2.jpeg": "d891e7aa32e4879e98285649ee5f6f54",
"assets/assets/CGD-2.jpeg": "09b9bc2cbb352f77bd5d67641aa19014",
"assets/assets/PW-6.jpeg": "4b52369058efde21e48bc80c1862f439",
"assets/assets/SM-1.jpeg": "dc8b703fa1fecb404701d9fd57a4eaa4",
"assets/assets/PM-7.jpeg": "ee2708bfebb8a06fa909a2cbf6ac6d76",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
