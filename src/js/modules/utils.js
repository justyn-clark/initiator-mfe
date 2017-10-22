import './cookies';

(function() {

  const body = document.querySelector('body');
  const header = document.querySelector('header')
  const overlay = document.querySelector('.overlay');
  const overlayInner = document.querySelector('.overlay__inner');



  MFE.helpers = {
    qs: (selector, scope) => (scope || document).querySelector(selector),
    qsa: (selector, scope) => (scope || document).querySelectorAll(selector),
    $on: (target, evt, callback, useCapture) => {
      target.addEventListener(evt, callback, !!useCapture)
    }
  }


  MFE.utils = {
    adder() {
      let increment = () => {
        let counter = 0;
        return function() {
          return counter = counter + 1;
        }
      }
      return increment()
    },
    thisCheck() {
      console.log(this);
    },
    randomNumber(len) {
      return Math.floor(Math.random() * len)
    },
    interval(callback, time) {
      setInterval(callback, time)
    },
    output(x) {
      console.log(x);
    },
    charsInElement(elm) {
      if (elm.nodeType == 3) { // TEXT_NODE
        return elm.nodeValue.length;
      }
      var count = 0;
      for (var i = 0, child; child = elm.childNodes[i]; i++) {
        count += MFE.utils.charsInElement(child);
      }
      return count;
    },
    showBodyCharNum() {
      var elm = document.querySelector('body');
      console.log("This page has " + MFE.utils.charsInElement(elm) + " characters in the body");
    },
    openOverlay() {
      overlay.classList.toggle('overlay--open');
      body.classList.add('overlay--open');
      overlayInner.classList.add('overlay--open');
    },
    closeOverlay() {
      var vid = document.querySelector('.video__modal');
      overlay.classList.toggle('overlay--open');
      body.classList.toggle('overlay--open');
      overlayInner.classList.toggle('overlay--open');
      body.removeChild(vid);
    },
    resize() {
      var width = window.innerWidth, height = window.innerHeight;

     /* var widthBox = document.querySelector('.window-size__width');
      var heightBox = document.querySelector('.window-size__height');

      widthBox.textContent = `Width: ${width}`;
      heightBox.textContent = `Height: ${height}`;*/

      window.addEventListener('resize', MFE.utils.resize);

      if (width > 768) {
        header.classList.remove('header--open');
      }
    }
  };
  /*<iframe width="1280" height="720" src="https://www.youtube.com/embed/RKYjdTiMkXM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>*/
})();
