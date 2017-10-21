(function (global) {
  // Set up global variables
  global.MFE = global.MFE !== undefined ? MFE : {};

  MFE.config = {};
  MFE.utils = {};
  MFE.components = {};
  MFE.menu = {};

  global.EVT = new EventEmitter2();

  global.addEventListener('DOMContentLoaded', function () {
    EVT.emit('init');
  });
})(window);
