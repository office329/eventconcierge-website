// Meta pixel (2026-10-31) — for the paid boost of Aviel's video, which Meta can only aim at
// people who actually reach the site (landing-page views) when a pixel reports them.
// One file for all six pages, so the id lives in one place. Empty id = nothing loads at all.
// Events: PageView here; Lead (form stored) and Contact (wa.me click) beside the gtag events.
(function () {
  var PIXEL_ID = '';
  if (!PIXEL_ID) return;
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', PIXEL_ID);
  fbq('track', 'PageView');
})();
