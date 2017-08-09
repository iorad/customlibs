module.exports = function() {
  // require("./jquery/js/jquery-1.7.2");
  // require("./bootstrap/js/bootstrap-transition");
  // require("./bootstrap/js/bootstrap-alert");
  // require("./bootstrap/js/bootstrap-modal");
  // require("./bootstrap/js/bootstrap-dropdown");
  // require("./bootstrap/js/bootstrap-scrollspy");
  // require("./bootstrap/js/bootstrap-tab");
  // require("./bootstrap/js/bootstrap-tooltip");
  // require("./bootstrap/js/bootstrap-popover");
  // require("./bootstrap/js/bootstrap-button");
  // require("./bootstrap/js/bootstrap-collapse");
  // require("./bootstrap/js/bootstrap-carousel");
  // require("./bootstrap/js/bootstrap-typeahead");

  require("./app/js/ACFIRFilter");
  require("./app/js/ACAAFilter");
  require("./app/js/ACSpectrum");
  require("./app/js/ACFFT");
  require("./app/js/SpectrumWorker");
  require("./app/js/SpectrumDisplay");
  require("./app/js/audioplayback");
  require("./app/js/filedropbox");
  require("./app/js/fft");

  var audioLayerControl = require("./app/js/audioLayerControl");

  require("./app/js/audiosequence");
  require("./app/js/AudioSequenceEditor");
  require("./app/js/mathutilities");
  require("./app/js/wavetrack");
  require("./app/js/binarytoolkit");
  require("./app/js/filesystemutility");
  require("./app/js/editorapp");

  require("./js/lib/recorder");

  // require("./js/recordLive");
  // require("./js/sequencer");
  // require("./js/drone");

  if (!window.$) {
    window.$ = function(i) {
      return document.querySelectorAll(i);
    };
  }

  return {
    audioLayerControl: audioLayerControl,
  }
}
