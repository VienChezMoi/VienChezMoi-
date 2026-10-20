// Service worker minimal : rend l'appli installable, sans garder d'ancienne version en mémoire.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
