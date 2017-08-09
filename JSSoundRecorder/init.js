module.exports = function() {
  // require("JSSoundRecorder/jquery/js/jquery-1.7.2");
  // require("JSSoundRecorder/bootstrap/js/bootstrap-transition");
  // require("JSSoundRecorder/bootstrap/js/bootstrap-alert");
  // require("JSSoundRecorder/bootstrap/js/bootstrap-modal");
  // require("JSSoundRecorder/bootstrap/js/bootstrap-dropdown");
  // require("JSSoundRecorder/bootstrap/js/bootstrap-scrollspy");
  // require("JSSoundRecorder/bootstrap/js/bootstrap-tab");
  // require("JSSoundRecorder/bootstrap/js/bootstrap-tooltip");
  // require("JSSoundRecorder/bootstrap/js/bootstrap-popover");
  // require("JSSoundRecorder/bootstrap/js/bootstrap-button");
  // require("JSSoundRecorder/bootstrap/js/bootstrap-collapse");
  // require("JSSoundRecorder/bootstrap/js/bootstrap-carousel");
  // require("JSSoundRecorder/bootstrap/js/bootstrap-typeahead");

  require("JSSoundRecorder/app/js/ACFIRFilter");
  require("JSSoundRecorder/app/js/ACAAFilter");
  require("JSSoundRecorder/app/js/ACSpectrum");
  require("JSSoundRecorder/app/js/ACFFT");
  require("JSSoundRecorder/app/js/SpectrumWorker");
  require("JSSoundRecorder/app/js/SpectrumDisplay");
  require("JSSoundRecorder/app/js/audioplayback");
  require("JSSoundRecorder/app/js/filedropbox");
  require("JSSoundRecorder/app/js/fft");

  var audioLayerControl = require("JSSoundRecorder/app/js/audioLayerControl");

  require("JSSoundRecorder/app/js/audiosequence");
  require("JSSoundRecorder/app/js/AudioSequenceEditor");
  require("JSSoundRecorder/app/js/mathutilities");
  require("JSSoundRecorder/app/js/wavetrack");
  require("JSSoundRecorder/app/js/binarytoolkit");
  require("JSSoundRecorder/app/js/filesystemutility");
  require("JSSoundRecorder/app/js/editorapp");

  require("JSSoundRecorder/js/lib/recorder");

  // require("JSSoundRecorder/js/recordLive");
  // require("JSSoundRecorder/js/sequencer");
  // require("JSSoundRecorder/js/drone");

  if (!window.$) {
    window.$ = function(i) {
      return document.querySelectorAll(i);
    };
  }

  return {
    audioLayerControl: audioLayerControl,
  }
}
