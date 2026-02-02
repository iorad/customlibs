if ([
  'www.iorad.com',
].includes(window.location.hostname)) {
  // ignore, the website already has the iorad embed widget
  return;
}

const browserApi = chrome || browser;

const script = document.createElement('script');
script.src = browserApi.runtime.getURL('page.js');
script.async = false;
(document.body || document.head).appendChild(script);
