console.log('Sidepanel loaded');

const browserApi = chrome || browser;

// Forward the messages for the iorad widget to the content script
window.addEventListener("message", (event) => {
  const message = event.data;
  if (message && message.to === 'iorad-embed') {
    browserApi.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      console.log('Forwarding message to content script in tab:', tabs[0]);
      browserApi.tabs.sendMessage(tabs[0].id, message, {
        frameId: 0, // main frame only
      });
    });
  }
});
