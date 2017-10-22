import { setPolicyCookie } from './cookies';
import { playRandomYouTubeVideo } from './youTubePlayer';
let { $on, qs } = MFE.helpers ;

export function clickHandlers() {
  let header = qs('.header'),
      body = qs('body'),
      menuBtn = qs('.mobile-menu'),
      menuLink_1 = qs('[rel="js-play"]'),
      overlay = qs('.overlay');

  $on(qs('.cookie-policy__close'), 'click', setPolicyCookie); // Cookie Policy
  $on(menuLink_1, 'click', MFE.utils.openOverlay); // open overlay
  $on(overlay, 'click', MFE.utils.closeOverlay); // close overlay
  $on(menuLink_1, 'click', playRandomYouTubeVideo); // open overlay
  $on(menuBtn, 'click', function () {
    header.classList.toggle('header--open');
    body.classList.toggle('header--open');
  });
}
