(function () {
  'use strict';

  if (window.location.hostname !== 'nnvvff.github.io') return;

  try {
    if (window.localStorage.getItem('haomin.analytics.exclude') === '1') return;
  } catch (_) {
    // Visitors can still use the site when browser storage is unavailable.
  }

  if (document.querySelector('script[data-cf-beacon]')) return;

  var beacon = document.createElement('script');
  beacon.type = 'module';
  beacon.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  beacon.setAttribute('data-cf-beacon', JSON.stringify({
    token: 'df6a4bdbaec64919ad7b50f3c9fa0cd6'
  }));
  document.head.appendChild(beacon);
})();
