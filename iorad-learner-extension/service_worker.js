const browserApi = chrome || browser;

// Open the side panel when the extension button is clicked
browserApi.action.onClicked.addListener((tab) => {
  browserApi.sidePanel.open({
    tabId: tab.id
  });
});
