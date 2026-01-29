const browserApi = chrome || browser;

const script = document.createElement('script');
script.src = browserApi.runtime.getURL('page.js');
script.async = false;
(document.body || document.head).appendChild(script);
