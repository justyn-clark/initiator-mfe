import EventEmitter2 from 'eventemitter2';

(function(global){

  global.MFE = global.MFE !== undefined ? MFE : {}; // Declare Global Object
  global.EVT = new EventEmitter2();

  MFE.components = {};
  MFE.config = {};
  MFE.menu = {};
  MFE.utils = {};

  global.addEventListener('DOMContentLoaded', function() {
    EVT.emit('init');
  });

  console.log(MFE);

})(window);
