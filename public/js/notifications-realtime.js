(function (global) {
  'use strict';

  const SOCKET_IO_CDN = 'https://cdn.jsdelivr.net/npm/socket.io-client@4.7.5/dist/socket.io.min.js';
  let socketInstance = null;
  let scriptLoadingPromise = null;
  let boundAudiences = new Set();

  function ensureSocketIoClient() {
    if (typeof global.io === 'function') return Promise.resolve();
    if (scriptLoadingPromise) return scriptLoadingPromise;
    scriptLoadingPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${SOCKET_IO_CDN}"]`);
      if (existing) {
        existing.addEventListener('load', () => resolve());
        existing.addEventListener('error', () => reject(new Error('Gagal memuat socket.io-client')));
        return;
      }
      const s = document.createElement('script');
      s.src = SOCKET_IO_CDN;
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error('Gagal memuat socket.io-client'));
      document.head.appendChild(s);
    });
    return scriptLoadingPromise;
  }

  function getSocket() {
    if (socketInstance) return socketInstance;
    if (typeof global.io !== 'function' || !global.API_BASE_URL) return null;
    socketInstance = global.io(global.API_BASE_URL, {
      path: '/socket.io',
      withCredentials: true,
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 10000,
    });
    return socketInstance;
  }

  const subscribers = [];
  let listenersAttached = false;
  let wasDisconnected = false;

  function attachCoreListeners(sock) {
    if (listenersAttached) return;
    listenersAttached = true;

    sock.on('connect', () => {
      if (wasDisconnected) {
        wasDisconnected = false;
        subscribers.forEach((sub) => {
          if (typeof sub.onReconnect === 'function') sub.onReconnect();
        });
      }
    });

    sock.on('disconnect', () => {
      wasDisconnected = true;
    });

    sock.on('notification:new', (payload) => {
      subscribers.forEach((sub) => {
        if (!sub.audience || !payload?.audience || sub.audience === payload.audience) {
          if (typeof sub.onNew === 'function') sub.onNew(payload);
        }
      });
    });

    sock.on('notification:read', (payload) => {
      subscribers.forEach((sub) => {
        if (!sub.audience || !payload?.audience || sub.audience === payload.audience) {
          if (typeof sub.onRead === 'function') sub.onRead(payload);
        }
      });
    });

    sock.on('notification:read-all', (payload) => {
      subscribers.forEach((sub) => {
        if (!sub.audience || !payload?.audience || sub.audience === payload.audience) {
          if (typeof sub.onReadAll === 'function') sub.onReadAll(payload);
        }
      });
    });

    sock.on('notification:unread-count', (payload) => {
      subscribers.forEach((sub) => {
        if (!sub.audience || !payload?.audience || sub.audience === payload.audience) {
          if (typeof sub.onUnreadCount === 'function') sub.onUnreadCount(payload);
        }
      });
    });

    sock.on('notification:updated', (payload) => {
      subscribers.forEach((sub) => {
        if (typeof sub.onUpdated === 'function') sub.onUpdated(payload);
      });
    });
  }

  async function subscribe(options) {
    const key = options.key || `${options.audience || 'all'}:${subscribers.length}`;
    const existingIdx = subscribers.findIndex((s) => s.key === key);
    if (existingIdx !== -1) {
      subscribers[existingIdx] = { ...options, key };
    } else {
      subscribers.push({ ...options, key });
    }
    if (options.audience) boundAudiences.add(options.audience);

    try {
      await ensureSocketIoClient();
      const sock = getSocket();
      if (sock) attachCoreListeners(sock);
      return sock;
    } catch (_) {
      return null;
    }
  }

  global.NotificationRealtime = {
    subscribe,
    isConnected() {
      return Boolean(socketInstance && socketInstance.connected);
    },
  };
})(window);
