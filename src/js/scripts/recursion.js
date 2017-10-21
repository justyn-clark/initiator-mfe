let startNum = 5;

(function(x, MFE) {
  function loop(i) {
    if (i > 0) {
      loop(i - 1)
    }
    //console.log(`${i} is my loop iteration number for ${MFE.config.developer}`);
  }
  loop(x)
})(startNum, MFE);


