'use strict';
const CACHE='next-studio-v1';
const SHELL=['./','./index.html','./style.css','./app.js','./engine.js','./library.js','./icon.svg','./app.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('next-studio-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url), base=new URL('./',self.registration.scope);
  if(url.origin!==base.origin||!url.pathname.startsWith(base.pathname))return;
  if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(()=>caches.match(new URL('./index.html',base).href)));return;}
  if(SHELL.some(p=>new URL(p,base).href===url.href))e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)));
});
