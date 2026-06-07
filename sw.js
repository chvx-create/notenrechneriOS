{\rtf1\ansi\ansicpg1252\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const cacheName = 'notenrechner-v1';\
const assets = ['index.html', 'manifest.json'];\
\
// App beim ersten Aufruf komplett im Handy-Cache speichern\
self.addEventListener('install', e => \{\
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));\
\});\
\
// Daten direkt aus dem Cache laden, wenn offline\
self.addEventListener('fetch', e => \{\
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));\
\});}