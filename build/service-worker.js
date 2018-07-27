"use strict";var precacheConfig=[["/idb-keyval-min.js","6d4654ea08c5743e458566f734e2c058"],["/images/admin-settings.png","1cd4f14e72e3a56668581f2cf79fb3fb"],["/images/dates.png","851cac80d0717e337d8e7cc731ce4901"],["/images/everyone.png","016da49bb463d6f0eefc2f749c35426c"],["/images/icons/icon-128x128.png","7e7cd7d93b7e1600699ae6f479146de3"],["/images/icons/icon-144x144.png","af15625121b98e57a2fd6d701e1306fb"],["/images/icons/icon-152x152.png","8fa9c1d5b31c70bbc3ac3b74a53699ce"],["/images/icons/icon-192x192.png","c2e66723e99db9e88256a004d3a9f543"],["/images/icons/icon-384x384.png","a56ead7101d2e803b70b0b3bb8ea8b93"],["/images/icons/icon-512x512.png","61447c3cca44a2d569a6e82cab347e0d"],["/images/icons/icon-72x72.png","b8f5c89232b4e4a30f34b508db7cdd10"],["/images/icons/icon-96x96.png","26755cbc8dbd9f055840260a7a6bce6f"],["/images/icons/icon.png","61447c3cca44a2d569a6e82cab347e0d"],["/images/next-button.png","d245c94303337971cbfeae54f3936ad6"],["/images/noti-off.png","1ce682b52607f1923a0d06c30c6540a1"],["/images/noti-on.png","9f093c490b22ac83bcd65e1b4771e7ae"],["/images/report.png","36c9401a8965c0bb8b15eb48308337fc"],["/images/splashscreens/ipad_splash.png","e0a09c9031e230c7de5ffdafa2e0e48e"],["/images/splashscreens/ipadpro1_splash.png","0b9b7655f70279f8500f92a9ea8380ad"],["/images/splashscreens/ipadpro2_splash.png","8e1c86fc37ca44e986c7e56be46b6be2"],["/images/splashscreens/iphone5_splash.png","3b2b1aea8ddcaa53c0d16013f4e9df8b"],["/images/splashscreens/iphone6_splash.png","68f77ff098ba626f75a0b94568b1c104"],["/images/splashscreens/iphoneplus_splash.png","6fe0a87577ec3dfc4f59e36f2d5ba431"],["/images/splashscreens/iphonex_splash.png","64d7a3e6a7bd33cfbc3605fd80c4c0b9"],["/images/superman.png","65e24095894cc204f814b4fb7b7e3a9f"],["/images/v.png","2fe4b226beb503055c4dc0af068cdf0b"],["/images/waitAuth.png","0900753007b6500cabdcf5858291cd33"],["/images/x.png","5c715a85447bf8df44efccb0b8632437"],["/index.html","41e9c99322bf1e89614350c70f3bc27c"],["/manifest.v1.73.json","1103f51e098dc6226fd0fe67377fbf2d"],["/notification-service-worker.js","497e70512468f5c7b9659d5b4e5bcc29"],["/static/css/main.a80446d1.css","2b4b33703886d12b3a17fe0660f5e8cd"],["/static/js/main.a0aa2969.js","0161effc05eaf54ce2217b8a7ac5292e"],["/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,n,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],c=new URL(a,self.location),s=createCacheKey(c,hashParamName,n,/\.\w{8}\./);return[c.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var c=new Request(n,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+n+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(n,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!a.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,c),a=urlsToCacheKeys.has(n));var s="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(s,self.location).toString(),a=urlsToCacheKeys.has(n)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}}),importScripts("/notification-service-worker.js");