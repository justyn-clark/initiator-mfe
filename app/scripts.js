'use strict';

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
"use strict";

var Batman = function () {
  var identity = "Bruce Wayne";

  return {
    fightCrime: function fightCrime() {
      console.log("Cleaning up Gotham.");
    },

    goCivilian: function goCivilian() {
      console.log("Attend social events as " + identity);
    }
  };
}();

//console.log(Batman.goCivilian());
//console.log(Batman.fightCrime());
"use strict";

(function (MFE) {
  var gym = MFE.gym = {};
  gym.LAFitness = {};
  gym.TFFitness = {};
  gym.Golds = {};
})(MFE);
'use strict';

(function (MFE) {
  function getUserData() {
    return $.ajax({
      url: 'https://api.spotify.com/v1/users/125458843/playlists',
      headers: {
        'Authorization': 'Bearer ' + 'BQAW-SrN3PCIhz5XRkmapQzRPOC3JtpjxbTMhI0QNsW6fH5I7LXyc0om4DSFj5isBR7png7Pq4PeHO9f5BWz7WVmdrfwKcodTI4gHUQiOlvo50ZKLchF6Iyx58coOQAdVSoLziQemNZ-lRlA1V6Cwae_qQa02S20xQ'
      }
    });
  }

  /*getUserData()
    .then(function (response) {
      console.log(response);
      localStorage.setItem('playlists', JSON.stringify(response))
    })*/
})(MFE);
"use strict";
'use strict';

(function (global, $) {
  // Set up global variables
  global.MFE = global.MFE !== undefined ? MFE : {};

  $('.poo');
  MFE.config = {};
  MFE.utils = {};
  MFE.components = {};
  MFE.menu = {};

  global.EVT = new EventEmitter2();

  global.addEventListener('DOMContentLoaded', function () {
    EVT.emit('init');
  });
})(window, jQuery);
"use strict";
"use strict";
"use strict";

(function (MFE) {

  var countdown = MFE.countdown = {};

  var targetDate = "Oct 10, 2017 08:30:00"; // Set the date we're counting down to

  countdown.init = function () {
    setupClock();
    //setupCloseClickHandler(); //Get the time
  };

  var preload = function preload() {
    var countDownCookie = MFE.utils.getCookie("countdownclosed");
    if (!countDownCookie) {
      init();
    } else if (countDownCookie != "") {
      console.log("The cookie " + countDownCookie + " has been set.");
      document.querySelector('.countdown').hide();
    }
  };

  var setupClock = function setupClock() {
    var countDownDate = new Date(targetDate).getTime(); // Reading from the component
    var clock = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(distance % (1000 * 60) / 1000);
      document.querySelector('.counter').innerHTML = units(days) + ":" + units(hours) + ":" + units(minutes) + ":" + units(seconds);
      if (distance < 0) {
        clearInterval(clock);
        document.querySelector('.counter').innerHTML = "NOW LIVE"; // End countdown and display message
      }
    }, 1000);
  };

  var units = function units(n) {
    return n > 9 ? "" + n : "0" + n;
  };

  var setupCloseClickHandler = function setupCloseClickHandler() {
    document.querySelector('.counter').addEventListener('click', function (e) {
      e.preventDefault();
      //document.querySelector('.countdown').slideUp();
      MFE.utils.setCookie("countdownclosed", true, { expireDate: 3600 * 24 * 365 });
    });
  };

  EVT.on('init', countdown.init);

  //init();
  //preload();
})(MFE);
"use strict";

// Counter.js Module
var adder = function () {
  var plus = function plus() {
    var counter = 0;
    return function () {
      return counter++;
    };
  };
  return {
    adder1: plus(),
    adder2: plus()
  };
}();
"use strict";

var ns = ns !== undefined ? ns : {};
"use strict";

var _utils = require("./js/modules/utils");

var firstNames = ["big", "ol dirty", "lil", "the legendary", "chief", "boss"];
var lastNames = ["mac", "wig wig", "bastard", "mote", "johnson", "smasher"];

function getRandName(arr) {
  return arr[(0, _utils.randNumGen)(arr.length)];
}

console.log((0, _utils.randNumGen)(100));

document.querySelector('.randName').innerHTML = getRandName(firstNames) + ' ' + getRandName(lastNames);

function stringSplitter(str) {
  var word = str.split('');
  return word;
}
//var arr = stringSplitter('testing');

//var numbers = [1, 5, 10, 15, 22, 21, 32, 41, 11, 92, 54];

function mod(num) {

  if (num % 2 === 0) {
    console.log(num % 2 + ' ' + "is an even number");
  } else {
    console.log(num % 2 + ' ' + "is an odd number");
  }
}

console.log(mod(12));

var str = "Good Day";
var res = str.split("").map(function (val, index) {
  return index;
});

console.log(res + " " + str);

/*
var doubles = numbers.map(function(x) {
  return x * 2;
});
var lus = numbers.map(function(x) {
  return (x % 2) ;
});
console.log(lus);*/

//console.log(3 % 2 == 0);
//getEvenChars('justin')

/*setInterval(function () {
  var body = document.querySelector('body')
    body.style.backgroundColor = "red"
}, 1000)*/

//console.log(today.toLocaleTimeString());

(function (MFE) {

  //const today = new Date()
  //document.write(today.toLocaleTimeString())

  setInterval(function () {
    var today = new Date();
    var time = today.toLocaleTimeString();
    if (time == '6:30:00 AM') {
      var body = document.querySelector('body');
      body.classList.toggle('night');
    }
    if (time == '10:20:00 PM') {
      var body = document.querySelector('body');
      body.classList.toggle('night');
    }
    //console.log(time);
  }, 1000);

  /*MFE.utils.dayAndNight = function() {
    if (today.toLocaleTimeString().includes('1:34:00 AM')) {
      var body = document.querySelector('body')
      body.classList.toggle('night')
    }
     console.log(today.toLocaleTimeString());*/

  /*setInterval(function () {
    var body = document.querySelector('body')
    body.classList.toggle('night')
  }, 1000)*/
})(MFE);

//MFE.utils.dayAndNight()
"use strict";
'use strict';

(function () {
  function fetcher() {
    fetch('https://api.github.com/users/justyn-clark/repos').then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
    });
  };
  //EVT.on("init", fetcher())
})();
'use strict';

(function ($, MFE) {

  if (MFE.postsFeed) return;

  var dataFeed = MFE.dataFeed = {};

  var postsFeed = function postsFeed() {

    var $mainDIv = $('.posts-feed');

    $.getJSON("https://api.github.com/users/justyn-clark/repos", function (data) {

      dataFeed.dataLength = data.length;

      //console.log(data)

      localStorage.setItem('data', JSON.stringify(data));

      for (var i = 0; i < dataFeed.dataLength; i++) {

        var post = "<div class='posts-post'>" + "<div class='posts-image'></div>" + "<div class='posts-post-content'>" + "<a href='#' target='_blank'>" + "<div class='content-inner'>" + "<div class='content'>" + "<div class='posts-time'><p class='time'>" + data[i].name + "</p></div>" + "<div class='posts-subject'>" + "<h2>" + data[i].url + "</h2>" + "</div>" + "</div>" + "</div>" + "</a>" + "</div>" + "</div>";

        $mainDIv.append(post);
      }
    });
  };

  EVT.on('init', postsFeed);
})(jQuery, MFE);
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (MFE) {
  // Set up variables
  var config = MFE.config = {};
  var utils = MFE.utils = {};
  var components = MFE.components = {};
  var menu = MFE.menu = {};

  config.project = 'justynClark-new';
  config.developer = 'justyn clark';
  config.version = "1.0.0";

  var cookieMap;
  // Cookies
  utils.getCookies = function (update) {
    // Get cookies
    if (!cookieMap || update) {
      cookieMap = {};
      var i,
          cookies = document.cookie.split(";");
      for (i = 0; i < cookies.length; i++) {
        var index = cookies[i].indexOf('=');
        var x = cookies[i].substr(0, index);
        var y = cookies[i].substr(index + 1);
        x = x.replace(/^\s+|\s+$/g, '');
        if (x) cookieMap[x] = decodeURI(y);
      }
    }
    return cookieMap;
  };

  utils.getCookie = function (c, update) {
    // Get cookie
    return undefined.getCookies(update)[c];
  };

  utils.setCookie = function (name, value, opts) {
    // Set cookie MFE.utils.setCookie('jcCookie',true, {expireDate: (3600 * 24 * 365)});
    var value = encodeURI(value);
    opts = opts || {};
    value += ";path=" + (opts.path || "/");
    if (opts.domain) value += ";domain=" + opts.domain;
    var t = _typeof(opts.maxAge);
    if (t == "number" || t == "string") value += ";max-age=" + opts.maxAge;
    var e = opts.expireDate;
    if (typeof e == "number") e = new Date(new Date().getTime() + e * 1000);
    if (e) value += ';expires=' + e.toUTCString();
    if (opts.secure) value += ";secure";
    document.cookie = name + '=' + value;
    cookieMap = null;
  };

  // this checker
  utils.thisCheck = function () {
    console.log(this);
  };

  utils.randomNumber = function () {
    return Math.floor(Math.random() * 1000);
  };

  utils.output = function (x) {
    console.log(x);
  };

  // Character count in Element
  utils.charsInElement = function (elm) {
    if (elm.nodeType == 3) {
      // TEXT_NODE
      return elm.nodeValue.length;
    }
    var count = 0;
    for (var i = 0, child; child = elm.childNodes[i]; i++) {
      count += utils.charsInElement(child);
    }
    return count;
  };

  // Alert utility
  utils.alert = function (a) {
    alert(a);
  };

  utils.showBodyCharNum = function () {
    var elm = document.querySelector('body');
    console.log("This page has " + utils.charsInElement(elm) + " characters in the body");
  };

  utils.openOverlay = function () {
    var overlay = document.querySelector('.overlay');
    overlay.classList.toggle('overlay--open');
    console.log('overlay open');
  };

  utils.closeOverlay = function () {
    var overlay = document.querySelector('.overlay');
    overlay.classList.remove('overlay--open');
    console.log('overlay closed');
  };

  var loadNames = function loadNames() {
    var request;
    if (window.XMLHttpRequest) {
      request = new XMLHttpRequest();
    } else {
      request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open('GET', 'https://jsonplaceholder.typicode.com/users');
    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        var data = JSON.parse(request.responseText);
        console.log(data);
        localStorage.setItem('data', JSON.stringify(data));

        for (var i = 0; i < data.length; i++) {
          console.log(data[i].name);

          var names = data[i].name + "<br>" + data[i].email;
        }

        document.querySelector('[rel=copySection]').innerHTML = names;
      }
    };
    request.send();
  };

  var cookieSetter = function cookieSetter() {
    document.querySelector('.cookie-policy').classList.add('cookie-policy--hide');
    console.log('cookie set');
    utils.setCookie('jcCookie', true, { expireDate: 3600 * 24 * 365 });
  };

  // Set up click handlers
  var clickHandlers = function clickHandlers() {
    document.querySelector('[rel="main__openOverlay"]').addEventListener('click', utils.openOverlay); // open overlay
    document.querySelector('.overlay').addEventListener('click', utils.closeOverlay); // close overlay
    document.querySelector('[rel="main__loadNames"]').addEventListener('click', loadNames); // load ajax
    document.querySelector('[rel="main__clicker"]').addEventListener('click', function () {
      document.querySelector('[rel="main__clicker"]').innerHTML = adder.adder1();
      console.log(adder.adder2());
    });
    document.querySelector('.cookie-policy__close').addEventListener('click', cookieSetter); // Cookie Policy
  };

  setTimeout(function () {
    if (!document.cookie.match('jcCookie')) {
      document.querySelector('.cookie-policy').classList.add('cookie-policy--show');
    } else {
      console.log('cookie policy is hidden');
      document.querySelector('.cookie-policy').classList.add('cookie-policy--hide');
    }
  }, 1000);

  // init function
  var init = function init() {};

  EVT.on('init', clickHandlers);
  EVT.on('init', loadNames);

  return MFE;
})(MFE);

{
  var code = "</code>";
  //console.log(`I'm executing ${code} immediately!`);
}
"use strict";

var x = "yes";

(function (MFE) {

  switch (x) {
    case "yes":
      console.log("The first case is true");
      break;
    case "yes":
      break;
    case "yes":
      break;
    default:
      console.log("Nothing fancy here");
  }
})(MFE);
/*
(function() {
  localStorage.setItem('firstLS', 'Local Storage Value');
  const LS = localStorage.getItem('firstLS');
  console.log(LS);
})();
*/
"use strict";
'use strict';

function CafeGoodEats(name, price) {
  this.name = name;
  this.price = price;
}

function BreakfastItem(name, price) {
  CafeGoodEats.call(this, name, price);
  this.category = 'breakfast';
}

function LunchItem(name, price) {
  CafeGoodEats.call(this, name, price);
  this.category = 'lunch';
}

function DinnerItem(name, price) {
  CafeGoodEats.call(this, name, price);
  this.category = 'dinner';
}

// Foods
var pancakes = new BreakfastItem('Pancakes', 13.99);
var omelette = new BreakfastItem('Omettle', 11.99);
var coffee = new BreakfastItem('Coffee', 2.99);
var cheeseGrits = new BreakfastItem('Cheese Grits', 4.99);
var pizza = new LunchItem('Pepperoni and Cheese Pizza', 10.99);
var steak = new DinnerItem('Steak', 27.50);

var myMenu = {
  pancakes: pancakes,
  omelette: omelette,
  coffee: coffee,
  cheeseGrits: cheeseGrits,
  pizza: pizza,
  steak: steak
};

console.log(myMenu);
"use strict";

// Operations.js Module
(function () {
  // Multiply by 10 function
  var mulitiply = function mulitiply(x, y) {
    return x * y;
  };
  var sum = mulitiply(100, 9);

  //console.log(`Give me ${sum} dollars and 4 cents foo boo butt boy head`);

  // Create a counter function
  var makeCounter = function makeCounter() {
    var i = 0;
    var counter = function counter() {
      return i = i + 1;
    };
    return counter;
  };

  var counterOne = makeCounter();
  var counterTwo = makeCounter();
})();
"use strict";

/*function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      'use strict';
      if ((xhr.readyState == 4) && (xhr.status == 200)) {
        resolve(xhr.responseText);
        console.log(xhr.responseText);
      }
    }
    xhr.onerror = () => reject("There was an error bro");
    xhr.send();
  });
};
//console.log(myAsyncFunction('https://api.github.com/users/justyn-clark/repos'));
myAsyncFunction('https://api.github.com/users/justyn-clark/repos');*/

function ajaxProm(url) {
  var myFirstPromise = new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        resolve(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  });

  myFirstPromise.then(function (repos) {
    return console.log(repos[2].name);
  }).catch(function (error) {
    return console.log(error.message);
  });
}

//ajaxProm('https://api.github.com/users/justyn-clark/repos');


/*
let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing made async successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout(function(){
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage);
});
*/
"use strict";

var startNum = 5;

(function (x, MFE) {
  function loop(i) {
    if (i > 0) {
      loop(i - 1);
    }
    //console.log(`${i} is my loop iteration number for ${MFE.config.developer}`);
  }
  loop(x);
})(startNum, MFE);
'use strict';

(function (MFE) {

  MFE.utils.twoSecTO = function () {
    setTimeout(function () {
      console.log('Emit twoSecTO event');
      EVT.emit('TO1');
    }, 2000);
  };

  MFE.utils.fourSecTO = function () {
    setTimeout(function () {
      console.log('Emit fourSecTO and check events');
      EVT.emit('TO2');
      EVT.emit('check');
    }, 4000);
  };

  EVT.on('init', MFE.utils.twoSecTO);
  EVT.on('TO1', MFE.utils.fourSecTO);
  EVT.on('check', MFE.utils.thisCheck);
})(MFE);

//# sourceMappingURL=scripts.js.map
