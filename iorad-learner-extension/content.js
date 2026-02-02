const browserApi = chrome || browser;

// Inject widget
const alreadyInjected = [
  'www.iorad.com',
].includes(window.location.hostname);
if (!alreadyInjected) {
  const script = document.createElement('script');
  script.src = browserApi.runtime.getURL('page.js');
  script.async = false;
  (document.body || document.head).appendChild(script);
}

// Forward the messages for the iorad widget to it
browserApi.runtime.onMessage.addListener((message) => {
  if (message && message.to === 'iorad-embed') {
    window.postMessage(message, '*');
  }
});
