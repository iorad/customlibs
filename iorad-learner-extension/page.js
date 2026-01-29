(function() {
  const USER_ID = 127; // SET YOUR OWN USER ID HERE

  window.ioradWidgetCustomOptions = {};

  const liveEmbedScript = document.createElement('script');
  liveEmbedScript.src = `https://www.iorad.com/widgets/live/${USER_ID}`;
  liveEmbedScript.async = true;
  (document.body || document.head).appendChild(liveEmbedScript);
}());
