(function() {
  const USER_ID = 127; // SET YOUR OWN USER ID HERE

  window.ioradWidgetCustomOptions = {
    widgetDomains: [window.location.hostname], // bypass error "Widget is not connected with this domain. Check the embed code with a proper user"
  };

  const liveEmbedScript = document.createElement('script');
  liveEmbedScript.src = `https://www.iorad.com/widgets/live/${USER_ID}`;
  liveEmbedScript.async = true;
  (document.body || document.head).appendChild(liveEmbedScript);
}());
