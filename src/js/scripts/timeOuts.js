(function(MFE) {

  MFE.utils.twoSecTO = () => {
    setTimeout(()=> {
      console.log('Emit twoSecTO event')
      EVT.emit('TO1')
    }, 2000)
  }

  MFE.utils.fourSecTO = () => {
    setTimeout(()=> {
      console.log('Emit fourSecTO and check events')
      EVT.emit('TO2')
      EVT.emit('check')
    }, 4000)
  }

  EVT.on('init', MFE.utils.twoSecTO)
  EVT.on('TO1', MFE.utils.fourSecTO)
  EVT.on('check', MFE.utils.thisCheck)

})(MFE);
