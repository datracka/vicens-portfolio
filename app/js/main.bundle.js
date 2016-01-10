/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {if (process.env.NODE_ENV === 'development') {
	    __webpack_require__(2)
	}
	
	//require('material-design-lite');
	__webpack_require__(3);
	var $ = __webpack_require__(7);
	
	var ScrollReveal = __webpack_require__(8);
	console.log(ScrollReveal);
	
	//window.sr = ScrollReveal();
	//sr.reveal('.foo');
	
	//ambient background color http://codepen.io/somenumboola/pen/wAhCy
	//porfolio ideas:
	
	//http://impreza4.us-themes.com/portfolio-cities/
	//idea transition over pages: http://themeforest.net/item/material-design-admin-with-angularjs/full_screen_preview/13582227
	//idea button effect in portfolio. http://zephyr.us-themes.com/
	
	//section values:
	
	var $window = $(window);
	
	$(window).load(function () {
	
	    $(".section").each(function (index, section) {
	
	        var $section = $(section);
	        var sectionTop = $section.offset().top;
	        var sectionBottom = $section.offset().top + $section.height();
	        console.log("i: " + sectionTop + " " + sectionBottom);
	
	    });
	
	    console.log("#######################################");
	    $window.on("scroll", function () {
	
	
	        $(".section").each(function (index, section) {
	
	            var $section = $(section);
	            var $section_container = $section.find( "div:first" );
	            var sectionTop = $section.offset().top;
	            var sectionBottom = $section.offset().top + $section.height();
	
	            console.log($window.scrollTop());
	            if ($window.scrollTop() >= sectionTop && $window.scrollTop() < sectionBottom) {
	                $section_container.addClass('section__container--current');
	            } else {
	                $section_container.removeClass('section__container--current');
	            }
	        });
	
	    });
	
	});
	
	
	
	
	
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "<!doctype html>\n<html lang=\"\">\n<head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"description\" content=\"Vicens Fayos Portfolio and showcase\">\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Vicens Fayos</title>\n\n    <!-- Disable tap highlight on IE -->\n    <meta name=\"msapplication-tap-highlight\" content=\"no\">\n\n    <!-- Web Application Manifest -->\n    <link rel=\"manifest\" href=\"manifest.json\">\n\n    <!-- Add to homescreen for Chrome on Android -->\n    <meta name=\"mobile-web-app-capable\" content=\"yes\">\n    <meta name=\"application-name\" content=\"Vicens Fayos\">\n    <link rel=\"icon\" sizes=\"192x192\" href=\"images/touch/chrome-touch-icon-192x192.png\">\n\n    <!-- Add to homescreen for Safari on iOS -->\n    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">\n    <meta name=\"apple-mobile-web-app-title\" content=\"Web Starter Kit\">\n    <link rel=\"apple-touch-icon\" href=\"images/touch/apple-touch-icon.png\">\n\n    <!-- Tile icon for Win8 (144x144 + tile color) -->\n    <meta name=\"msapplication-TileImage\" content=\"images/touch/ms-touch-icon-144x144-precomposed.png\">\n    <meta name=\"msapplication-TileColor\" content=\"#2F3BA2\">\n\n    <!-- Color the status bar on mobile devices -->\n    <meta name=\"theme-color\" content=\"#2F3BA2\">\n    <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css'>\n    <script src=\"https://code.jquery.com/jquery-2.1.4.min.js\"></script>\n    <!--<script src=\"https://code.createjs.com/preloadjs-0.6.2.min.js\"></script>-->\n    <script src=\"js/main.bundle.js\"></script>\n</head>\n<body>\n<!-- Uses a header that scrolls with the text, rather than staying\nlocked at the top -->\n\n<section class=\"section\">\n    <div class=\"section__container section__container--current section__container--blue\">\n        <div class=\"section__wrapper\">\n            <div class=\"logos\" data-scroll-reveal=\"wait 1.0s and then enter top ease-in-out 20px\">\n                <div class=\"logos__wrapper\">\n                    <img src=\"images/cube.svg\" alt=\"duck\" class=\"logos__cube logos__cube--animated\">\n                    <img src=\"images/cube.svg\" alt=\"duck\" class=\"logos__cube\">\n                </div>\n            </div>\n            <h1 class=\"text\">\n\n                <small>Hi, I am Vicens Fayos</small>\n                <strong>Web App Developer Expert</strong>\n            </h1>\n        </div>\n        <a href=\"#\" class=\"more\">\n            <img src=\"images/arrow-bottom-drop-circle.svg\" alt=\"arrow bottom\" class=\"more__image more__image--animated\">\n        </a>\n    </div>\n</section>\n<section class=\"section\">\n    <div class=\"section__container section__container--padding section__container--red\">\n        <header class=\"i-love-it\">\n            <span>I</span>\n            <img class=\"i-love-it__heart i-love-it__heart--animated\" src=\"images/heart.svg\" alt=\"Language html5\">\n            <span>web development</span></header>\n        <h5 class=\"title\">My Skills</h5>\n\n        <div class=\"text text--justified\">\n            <p class=\"text__paragraph\">I have been working for more than 14 years in IT and media industry, focused\n                exclusively in web development. <span class=\"text__make-it-invisible-mobile\">It is my life\n                and I love it. In all this time I learnt a huge amount of technologies that unfortunately are impossible to enumerate right\n                now here. </span></p>\n            <p>Always I was focused in what I like: Create beautiful and functional Web apps with purpose, using\n                the most disruptive technologies and aiming to reach the best product with the best people and the best\n                processes.</p>\n        </div>\n        <div class=\"logos logos--margin-top\">\n            <img class=\"logos__html5\" src=\"images/language-html5.svg\" alt=\"Language html5\">\n            <img class=\"logos__css3\" src=\"images/language-css3.svg\" alt=\"Language css3\">\n            <img class=\"logos__javascript\" src=\"images/language-javascript.svg\" alt=\"Language Javascript\">\n            <img class=\"logos__php\" src=\"images/language-php.svg\" alt=\"Language PHP\">\n            <img class=\"logos__wordpress\" src=\"images/wordpress.svg\" alt=\"Wordpress\">\n        </div>\n    </div>\n</section>\n<section class=\"section\">\n    <div class=\"section__container section__container--padding section__container--orange\">\n        <div class=\"logos\">\n            <img class=\"logos__html5\" src=\"images/cellphone-android.svg\" alt=\"Mobile\">\n            <img class=\"logos__css3\" src=\"images/tablet-android.svg\" alt=\"Tablet\">\n            <img class=\"logos__javascript\" src=\"images/laptop-mac.svg\" alt=\"Laptop\">\n            <img class=\"logos__php\" src=\"images/monitor.svg\" alt=\"Monitor\">\n        </div>\n        <h5 class=\"title\">Management & Business Cases</h5>\n        <div class=\"text text--left\">\n            <p class=\"text__paragraph\">\n            <p class=\"text__paragraph\">I have proved experience as CTO and Project Manager for more than 4 years for the\n                most\n                biggest Advertising network in the\n                world, BBDO as part of the <a class=\"text__link\" href=\"http://www.proximitybarcelona.es/\"\n                                              target=\"_blank\">Proximity</a>\n                crew and, in addition, <span class=\"text__make-it-invisible-mobile\">as E-mail Consultant for the first eCommerce company in Spain</span>\n                on <a\n                        href=\"http://es.letsbonus.com/\"\n                        target=\"_blank\" class=\"text__link\">LetsBonus</a>, an Amazon company. <span\n                        class=\"text__make-it-invisible-mobile\">Further on, it is worth to mention that I\n            have experience\n            as technical consultant working for <a class=\"text__link\" href=\"https://www.accenture.com\"\n                                                   target=\"_blank\">Accenture</a>.</span></p>\n            <p>In those positions I achieved a bunch of successes stories like <span\n                    class=\"text__make-it-invisible-mobile\">successfully sending daily basis 8 millions Marketing emails,\n                working with management to build CRM programs for blue chip companies like <a class=\"text__link\"\n                                                                                              href=\"https://lacaixa.es/\"\n                                                                                              target=\"_blank\">LaCaixa</a>,\n                <a class=\"text__link\" href=\"http://www.danone.es/\"\n                   target=\"_blank\">Danone</a>,\n                <a class=\"text__link\" href=\"http://www.diageo.com/en-ie/pages/default.aspx\" target=\"_blank\">Idageo</a> and\n                <a class=\"text__link\" href=\"http://www.mediamarkt.de/\" target=\"_blank\">Mediamarkt</a>\n                and</span> leading the technical implementation from scratch for <a class=\"text__link\"\n                                                                                    href=\"http://www.volkswagenexperience.es/\"\n                                                                                    _target=\"_blank\">Volkswagen</a> and\n                <a\n                        href=\"http://www.audiclass.com/\" class=\"text__link\" target=\"_blank\">Audi</a> of the Spain\n                customer portal which\n                was selected, later on, as Worldwide portal technology standard.\n            </p>\n        </div>\n    </div>\n    </div>\n</section>\n<section class=\"section\">\n    <div class=\"section__container section__container--padding section__container--lila\">\n        <div class=\"logos\">\n            <img class=\"logos__html5\" src=\"images/responsive.svg\" alt=\"Responsive\">\n            <img class=\"logos__css3\" src=\"images/routes.svg\" alt=\"Routes\">\n            <img class=\"logos__javascript\" src=\"images/email-outline.svg\" alt=\"Laptop\">\n            <img class=\"logos__php\" src=\"images/cloud-outline.svg\" alt=\"Monitor\">\n        </div>\n        <h5 class=\"title\">Advertising & Gaming</h5>\n        <div class=\"text text--justified\">\n            <p class=\"text__paragraph\">More than 11 years of experience in the thrilling and demanding\n                advertising & gaming industry. <span class=\"text__make-it-invisible-mobile\">In all this time I learnt about management, technical processes and technologies\n                but, even more important, I learnt working with experienced professionals which inspired me both professionally and personally.</span>\n            </p>\n            <p class=\"text__paragraph\">After working for different studios and Agencies I am a proudly owner of 37\n                international prizes from most prestigious awards contest like,\n                <a class=\"text__link\" href=\"https://www.canneslions.com/\" target=\"_blank\">Cannes</a>, <a\n                        class=\"text__link\" href=\"http://dma-echo.org/\"\n                        target=\"_blank\">Echo</a>, <a\n                        href=\"http://elsolfestival.com/\" target=\"_blank\" class=\"text__link\">Sol</a></p>\n            <p class=\"text__paragraph\"><span class=\"text__make-it-invisible-mobile\">Some examples are: <a\n                    href=\"https://www.youtube.com/watch?v=UHFocF0Oc9A\" class=\"text__link\" target=\"_blank\">Eristoff night\n                street view</a>,\n                <a\n                        href=\"https://www.youtube.com/watch?v=ZXZ5I4adsVc\" class=\"text__link\" target=\"_blank\">Composing\n                    your life</a>, <a class=\"text__link\" href=\"https://www.youtube.com/watch?v=vuL_4g0L3Zs\"\n                                      target=\"_blank\">The great\n                    Scape</a>, <a class=\"text__link\" href=\"https://www.youtube.com/watch?v=Lz9sagcFbSk\" target=\"_blank\">Q5\n                    Generis</a> etc...</span>\n            </p>\n            <p>In gaming I had the honor of joined the Team of <a href=\"http://www.darkorbit.com\" class=\"text__link\"\n                                                                  target=\"_blank\">Dark Orbit</a> in <a\n                    href=\"http://www.bigpoint.com\" class=\"text__link\" target=\"_blank\">Big Point GmbH</a>. A global\n                leading company in Free 2 play gaming industry.</p>\n        </div>\n    </div>\n</section>\n<section class=\"section\">\n    <div class=\"section__container section__container--padding section__container--green\">\n        <h5 class=\"title\">Hit me up</h5>\n        <div class=\"text text--justified\">\n            <p class=\"text__paragraph\">I really think I can help you to build your project. Please reach me using one of\n                the following channels: </p>\n        </div>\n        <div class=\"logos\">\n            <a href=\"https://www.linkedin.com/in/vicensfayos\" target=\"_blank\">\n                <img class=\"logos__linkedin\" src=\"images/linkedin-box.svg\" alt=\"Language html5\">\n            </a>\n            <a href=\"mailto:contact@vicensfayos.com\" target=\"_blank\" alt=\"contact@vicensfayos.com\"><img class=\"logos__at\" src=\"images/at.svg\" alt=\"Language css3\"></a>\n            <a href=\"https://twitter.com/datracka\" target=\"_blank\"><img class=\"logos__twitter\" src=\"images/twitter.svg\" alt=\"Language Javascript\"></a>\n        </div>\n    </div>\n</section>\n\n\n<script>\n    (function (i, s, o, g, r, a, m) {\n        i['GoogleAnalyticsObject'] = r;\n        i[r] = i[r] || function () {\n                    (i[r].q = i[r].q || []).push(arguments)\n                }, i[r].l = 1 * new Date();\n        a = s.createElement(o),\n                m = s.getElementsByTagName(o)[0];\n        a.async = 1;\n        a.src = g;\n        m.parentNode.insertBefore(a, m)\n    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');\n    ga('create', 'UA-XXXXX-X', 'auto');\n    ga('send', 'pageview');\n</script>\n\n</body>\n</html>\n"

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "/* responsiveness */\n/* Palette templates paletton.com */\nhtml, body {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  font-size: 16px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: 'Raleway', helvetica, arial, sans-serif; }\n\n*, *:before, *:after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0; }\n\n.layout-container {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQIW2NkYGCQBOLnQAwGjDAGNgGwSgwVAE+2AgXahLM7AAAAAElFTkSuQmCC) repeat; }\n\n.section {\n  position: relative;\n  text-align: center;\n  height: 100%;\n  cursor: default;\n  display: block;\n  font-size: 16px; }\n  .section__container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: block; }\n    .section__container--padding {\n      padding: 3.5em; }\n    .section__container--current {\n      position: fixed; }\n    .section__container--orange {\n      background-color: #FF8F5F;\n      background-color: #FF8F5F;\n      background-image: -webkit-linear-gradient(top, #FF8F5F 60%, #eee);\n      background-image: linear-gradient(to bottom,#FF8F5F 60%, #eee); }\n    .section__container--green {\n      background-color: #4DCE9A;\n      background-color: #4DCE9A;\n      background-image: -webkit-linear-gradient(top, #4DCE9A 60%, #eee);\n      background-image: linear-gradient(to bottom,#4DCE9A 60%, #eee); }\n    .section__container--blue {\n      background-color: #597CCC;\n      background-color: #597CCC;\n      background-image: -webkit-linear-gradient(top, #597CCC 60%, #eee);\n      background-image: linear-gradient(to bottom,#597CCC 60%, #eee); }\n    .section__container--rosa {\n      background-color: #EF5986;\n      background-color: #EF5986;\n      background-image: -webkit-linear-gradient(top, #EF5986 60%, #eee);\n      background-image: linear-gradient(to bottom,#EF5986 60%, #eee); }\n    .section__container--lila {\n      background-color: #765CCF;\n      background-color: #765CCF;\n      background-image: -webkit-linear-gradient(top, #765CCF 60%, #eee);\n      background-image: linear-gradient(to bottom,#765CCF 60%, #eee); }\n    .section__container--red {\n      background-color: #FF635F;\n      background-color: #FF635F;\n      background-image: -webkit-linear-gradient(top, #FF635F 60%, #eee);\n      background-image: linear-gradient(to bottom,#FF635F 60%, #eee); }\n  .section__wrapper {\n    text-align: center;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    -moz-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    -o-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%); }\n  .section__wrapper2 {\n    padding: 2em;\n    height: 100%; }\n\n.logos {\n  font-size: 16px;\n  /* fix: a lot o code duplicated */\n  /* end refactor */ }\n  .logos--margin-top {\n    margin-top: 1em; }\n    @media (min-width: 960px) {\n      .logos--margin-top {\n        margin-top: 2em; } }\n\n@keyframes cube_animation {\n  0% {\n    transform: scale(1, 1);\n    transform: translate(-50%, -50%);\n    opacity: 1; }\n  50% {\n    transform: translate(-50%, -50%) scale(1.3, 1.3);\n    opacity: .4; }\n  100% {\n    transform: translate(-50%, -50%) scale(1.5, 1.5);\n    opacity: 0; } }\n  .logos__wrapper {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: block; }\n  .logos__cube {\n    width: 6em;\n    margin-top: -2em;\n    display: block;\n    text-align: center;\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n    @media (min-width: 960px) {\n      .logos__cube {\n        margin-top: 0em; } }\n    .logos__cube--animated {\n      animation: cube_animation 2s ease-out infinite; }\n  .logos__html5 {\n    width: 2em;\n    display: inline-block; }\n    @media (min-width: 960px) {\n      .logos__html5 {\n        width: 6em; } }\n  .logos__php {\n    width: 2em;\n    display: inline-block; }\n    @media (min-width: 960px) {\n      .logos__php {\n        width: 6em; } }\n  .logos__css3 {\n    width: 2em;\n    display: inline-block; }\n    @media (min-width: 960px) {\n      .logos__css3 {\n        width: 6em; } }\n  .logos__javascript {\n    width: 2em;\n    display: inline-block; }\n    @media (min-width: 960px) {\n      .logos__javascript {\n        width: 6em; } }\n  .logos__wordpress {\n    width: 2em;\n    display: inline-block; }\n    @media (min-width: 960px) {\n      .logos__wordpress {\n        width: 6em; } }\n  .logos__at {\n    width: 5em;\n    display: block;\n    margin: 0 auto; }\n  .logos__linkedin {\n    width: 5em;\n    display: block;\n    margin: 0 auto; }\n  .logos__twitter {\n    width: 5em;\n    display: block;\n    margin: 0 auto; }\n\n.title {\n  margin-top: 0.5em;\n  color: white;\n  font-weight: bold;\n  font-size: 1em; }\n  @media (min-width: 960px) {\n    .title {\n      font-size: 4em; } }\n\n.text {\n  display: block;\n  color: white;\n  margin-top: 1.5em; }\n  @media (min-width: 960px) {\n    .text {\n      margin-top: 3em;\n      margin-left: 12em;\n      margin-right: 12em; } }\n  .text small {\n    display: block;\n    font-size: 4vh;\n    font-weight: 100; }\n  .text strong {\n    display: block;\n    font-size: 8vh;\n    font-weight: bold;\n    margin-top: 0.2em; }\n  .text__link {\n    text-decoration: underline;\n    color: white; }\n  .text--justified {\n    text-align: justify; }\n  .text--left {\n    text-align: left; }\n  @media (max-width: 490px) {\n    .text__make-it-invisible-mobile {\n      display: none; } }\n  .text__paragraph {\n    margin-bottom: 1em; }\n\n.more {\n  width: 100%;\n  bottom: 4vh;\n  display: block;\n  position: absolute; }\n\n@keyframes more_animation {\n  0% {\n    opacity: 1; }\n  20% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 6px, 0);\n    transform: translate3d(0, 6px, 0); }\n  21% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0); }\n  41% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n  .more__image {\n    width: 3rem; }\n    .more__image--animated {\n      animation: more_animation 3s linear infinite; }\n\n.i-love-it {\n  color: white;\n  font-weight: bolder;\n  font-size: 1.5em;\n  text-transform: uppercase; }\n\n@keyframes heart_animation {\n  0% {\n    transform: scale(1, 1); }\n  50% {\n    transform: scale(1.3, 1.3); }\n  75% {\n    transform: scale(1, 1); }\n  100% {\n    transform: scale(1, 1); } }\n  @media (min-width: 960px) {\n    .i-love-it {\n      font-size: 4.5em; } }\n  .i-love-it__text {\n    display: inline-block; }\n  .i-love-it__heart {\n    display: inline-block;\n    width: 1.4em;\n    vertical-align: text-bottom; }\n    .i-love-it__heart--animated {\n      animation: heart_animation 2s ease-out infinite; }\n\nsection {\n  text-align: center;\n  position: relative;\n  background: #fff;\n  z-index: 800;\n  height: 100%; }\n\n.content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 10vh 6vw; }\n", ""]);
	
	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(ScrollReveal) {
	(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = factory(require, exports, module);
	  } else {
	    root.ScrollReveal = factory();
	  }
	}(this, function(require, exports, module) {
	
	/*
	            _____                 ________                       __
	           / ___/______________  / / / __ \___ _   _____  ____ _/ /
	           \__ \/ ___/ ___/ __ \/ / / /_/ / _ \ | / / _ \/ __ `/ /
	          ___/ / /__/ /  / /_/ / / / _, _/  __/ |/ /  __/ /_/ / /
	         /____/\___/_/   \____/_/_/_/ |_|\___/|___/\___/\__,_/_/    v3.0.6
	
	‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
	   Copyright 2014–2016 Julian Lloyd (@jlmakes) Open source under MIT license
	————————————————————————————————————————————————————————————————————————————————
	    https://scrollrevealjs.org — https://github.com/jlmakes/scrollreveal.js
	______________________________________________________________________________*/
	
	(function() {
	  var Tools, sr, _requestAnimationFrame;
	
	  this.ScrollReveal = (function() {
	    ScrollReveal.prototype.defaults = {
	      // Animation
	      origin      : 'bottom',
	      distance    : '20px',
	      duration    : 500,
	      delay       : 0,
	      rotate      : { x: 0, y: 0, z: 0 },
	      opacity     : 0,
	      scale       : 0.9,
	      easing      : 'cubic-bezier( 0.6, 0.2, 0.1, 1 )',
	      // Options
	      container   : null,
	      mobile      : true,
	      reset       : false,
	      useDelay    : 'always',
	      viewFactor  : 0.2,
	      viewOffset  : { top: 0, right: 0, bottom: 0, left: 0 },
	      afterReveal : function( domEl ) {},
	      afterReset  : function( domEl ) {}
	    };
	
	    function ScrollReveal( config ) {
	      if ( window == this ) {
	        return new ScrollReveal( config );
	      }
	      sr = this;
	      sr.tools = new Tools();
	      sr.tools.extend( sr.defaults, config || {} );
	
	      if ( sr.tools.isMobile() && !sr.defaults.mobile ) {
	        return false;
	      } else if ( !sr.tools.isSupported('transform') || !sr.tools.isSupported('transition') ) {
	        return console.warn('ScrollReveal is not supported in this browser.');
	      }
	
	      sr.store = {
	        elements   : {},
	        containers : []
	      };
	      sr.history     = [];
	      sr.counter     = 0;
	      sr.running     = false;
	      sr.initialized = false;
	      return sr;
	    }
	
	    ScrollReveal.prototype.reveal = function( selector, config, sync ) {
	      var elements, container, elem, elemId;
	
	      if ( config && config.container ) {
	        container = config.container;
	      } else if ( sr.defaults.container ) {
	        container = sr.defaults.container;
	      } else {
	        container = window.document.documentElement;
	      }
	
	      elements = Array.prototype.slice.call( container.querySelectorAll( selector ) );
	      if ( !elements.length ) {
	        console.warn('reveal(\'' + selector + '\') failed: no elements found.');
	        return sr;
	      }
	      for ( var i = 0; i < elements.length; i++ ) {
	        elem   = {}
	        elemId = elements[ i ].getAttribute('data-sr-id');
	
	        if ( elemId ) {
	          elem = sr.store.elements[ elemId ];
	        } else {
	          elem = {
	            id       : ++sr.counter,
	            domEl    : elements[ i ],
	            seen     : false,
	            revealed : false
	          };
	          elem.domEl.setAttribute( 'data-sr-id', elem.id );
	        }
	
	        sr.configure( elem, config || {} );
	        sr.style( elem );
	        sr.updateStore( elem );
	
	        if ( !elem.revealed ) {
	          elem.domEl.setAttribute( 'style',
	              elem.styles.inline
	            + elem.styles.transform.initial
	          );
	        }
	      }
	      if ( !sync ) {
	        sr.record( selector, config );
	        if ( sr.initTimeout ) {
	          window.clearTimeout( sr.initTimeout );
	        }
	        sr.initTimeout = window.setTimeout( sr.init, 0 );
	      }
	      return sr;
	    };
	
	    ScrollReveal.prototype.configure = function( elem, config ) {
	      if ( !elem.config ) {
	        elem.config = sr.tools.extendClone( sr.defaults, config );
	      } else {
	        elem.config = sr.tools.extendClone( elem.config, config );
	      }
	
	      if ( elem.config.origin === 'top' || elem.config.origin === 'bottom' ) {
	        elem.config.axis = 'Y';
	      } else {
	        elem.config.axis = 'X';
	      }
	
	      if ( elem.config.origin === 'top' || elem.config.origin === 'left' ) {
	        elem.config.distance = '-' + elem.config.distance;
	      }
	    };
	
	    ScrollReveal.prototype.style = function( elem ) {
	      var config   = elem.config;
	      var computed = window.getComputedStyle( elem.domEl );
	
	      if ( !elem.styles ) {
	        elem.styles = {
	          transition : {},
	          transform  : {},
	          computed   : {}
	        };
	        elem.styles.inline           = elem.domEl.getAttribute('style') || '';
	        elem.styles.inline          += '; visibility: visible; ';
	        elem.styles.computed.opacity = computed.opacity;
	
	        if ( !computed.transition || computed.transition == 'all 0s ease 0s' ) {
	          elem.styles.computed.transition = '';
	        } else {
	          elem.styles.computed.transition = computed.transition + ', ';
	        }
	      }
	
	      elem.styles.transition.instant = '-webkit-transition: ' + elem.styles.computed.transition + '-webkit-transform ' + config.duration / 1000 + 's ' + config.easing + ' 0s, opacity ' + config.duration / 1000 + 's ' + config.easing + ' 0s; ' +
	                                               'transition: ' + elem.styles.computed.transition + 'transform ' + config.duration / 1000 + 's ' + config.easing + ' 0s, opacity ' + config.duration / 1000 + 's ' + config.easing + ' 0s; ';
	
	      elem.styles.transition.delayed = '-webkit-transition: ' + elem.styles.computed.transition + '-webkit-transform ' + config.duration / 1000 + 's ' + config.easing + ' ' + config.delay / 1000 + 's, opacity ' + config.duration / 1000 + 's ' + config.easing + ' ' + config.delay / 1000 + 's; ' +
	                                               'transition: ' + elem.styles.computed.transition + 'transform ' + config.duration / 1000 + 's ' + config.easing + ' ' + config.delay / 1000 + 's, opacity ' + config.duration / 1000 + 's ' + config.easing + ' ' + config.delay / 1000 + 's; ';
	
	      elem.styles.transform.initial = ' -webkit-transform:';
	      elem.styles.transform.target  = ' -webkit-transform:';
	      generateTransform( elem.styles.transform );
	
	      elem.styles.transform.initial += 'transform:';
	      elem.styles.transform.target  += 'transform:';
	      generateTransform( elem.styles.transform );
	
	      function generateTransform( transform ) {
	        if ( parseInt( config.distance ) ) {
	          transform.initial += ' translate' + config.axis + '(' + config.distance + ')';
	          transform.target  += ' translate' + config.axis + '(0)';
	        }
	        if ( config.scale ) {
	          transform.initial += ' scale(' + config.scale + ')';
	          transform.target  += ' scale(1)';
	        }
	        if ( config.rotate.x ) {
	          transform.initial += ' rotateX(' + config.rotate.x + 'deg)';
	          transform.target  += ' rotateX(0)';
	        }
	        if ( config.rotate.y ) {
	          transform.initial += ' rotateY(' + config.rotate.y + 'deg)';
	          transform.target  += ' rotateY(0)';
	        }
	        if ( config.rotate.z ) {
	          transform.initial += ' rotateZ(' + config.rotate.z + 'deg)';
	          transform.target  += ' rotateZ(0)';
	        }
	        transform.initial += '; opacity: ' + config.opacity + ';';
	        transform.target  += '; opacity: ' + elem.styles.computed.opacity + ';';
	      }
	    };
	
	    ScrollReveal.prototype.updateStore = function( elem ) {
	      var container = elem.config.container;
	      if ( container && sr.store.containers.indexOf( container ) == -1 ) {
	        sr.store.containers.push( elem.config.container );
	      }
	      sr.store.elements[ elem.id ] = elem;
	    };
	
	    ScrollReveal.prototype.record = function( selector, config ) {
	      var record = {
	        selector : selector,
	        config   : config
	      };
	      sr.history.push( record );
	    };
	
	    ScrollReveal.prototype.init = function() {
	      sr.animate();
	      for ( var i = 0; i < sr.store.containers.length; i++ ) {
	        sr.store.containers[ i ].addEventListener( 'scroll', sr.handler );
	        sr.store.containers[ i ].addEventListener( 'resize', sr.handler );
	      }
	      if ( !sr.initialized ) {
	        window.addEventListener( 'scroll', sr.handler );
	        window.addEventListener( 'resize', sr.handler );
	        sr.initialized = true;
	      }
	      return sr;
	    };
	
	    ScrollReveal.prototype.handler = function() {
	      if ( !sr.running ) {
	        _requestAnimationFrame(function(){
	          sr.running = true;
	          sr.animate();
	        });
	      }
	    };
	
	    ScrollReveal.prototype.animate = function() {
	      var elem, visible;
	
	      sr.tools.forOwn( sr.store.elements, function( elemId ) {
	        elem    = sr.store.elements[ elemId ];
	        visible = sr.isElemVisible( elem );
	        if ( visible && !elem.revealed ) {
	
	          if ( elem.config.useDelay === 'always'
	          || ( elem.config.useDelay === 'onload' && !sr.initialized )
	          || ( elem.config.useDelay === 'once'   && !elem.seen ) ) {
	            elem.domEl.setAttribute( 'style',
	                elem.styles.inline
	              + elem.styles.transform.target
	              + elem.styles.transition.delayed
	            );
	          } else {
	            elem.domEl.setAttribute( 'style',
	                elem.styles.inline
	              + elem.styles.transform.target
	              + elem.styles.transition.instant
	            );
	          }
	          elem.seen = true;
	          queueCallback( 'reveal', elem );
	
	        } else if ( !visible && elem.config.reset && elem.revealed ) {
	          elem.domEl.setAttribute( 'style',
	              elem.styles.inline
	            + elem.styles.transform.initial
	            + elem.styles.transition.instant
	          );
	          queueCallback( 'reset', elem );
	        }
	      });
	
	      sr.running = false;
	
	      function queueCallback( type, elem ) {
	        var elapsed  = 0;
	        var duration = 0;
	        var callback = 'after';
	
	        switch ( type ) {
	          case 'reveal':
	            duration = elem.config.duration + elem.config.delay;
	            callback += 'Reveal';
	            break;
	          case 'reset':
	            duration = elem.config.duration;
	            callback += 'Reset';
	            break;
	        }
	
	        if ( elem.timer ) {
	          elapsed = Math.abs( elem.timer.started - new Date() );
	          window.clearTimeout( elem.timer.clock );
	        }
	
	        elem.timer = { started: new Date() };
	
	        elem.timer.clock = window.setTimeout(function() {
	          elem.config[ callback ]( elem.domEl );
	          elem.timer = null;
	        }, duration - elapsed );
	        return type === 'reveal' ? elem.revealed = true : elem.revealed = false;
	      }
	    };
	
	    ScrollReveal.prototype.getContainer = function( container ) {
	      if ( !container ) {
	        container = window.document.documentElement;
	      }
	      var w = container.clientWidth;
	      var h = container.clientHeight;
	      return {
	        width:  w,
	        height: h
	      };
	    };
	
	    ScrollReveal.prototype.getScrolled = function( container ) {
	      if ( !container ) {
	        return {
	          x: window.pageXOffset,
	          y: window.pageYOffset
	        };
	      } else {
	        var offset = sr.getOffset( container );
	        return {
	          x: container.scrollLeft + offset.left,
	          y: container.scrollTop  + offset.top
	        };
	      }
	    };
	
	    ScrollReveal.prototype.getOffset = function( domEl ) {
	      var offsetTop    = 0;
	      var offsetLeft   = 0;
	      var offsetHeight = domEl.offsetHeight;
	      var offsetWidth  = domEl.offsetWidth;
	
	      do {
	        if ( !isNaN( domEl.offsetTop ) ) {
	          offsetTop += domEl.offsetTop;
	        }
	        if ( !isNaN( domEl.offsetLeft ) ) {
	          offsetLeft += domEl.offsetLeft;
	        }
	      } while ( domEl = domEl.offsetParent );
	
	      return {
	        top    : offsetTop,
	        left   : offsetLeft,
	        height : offsetHeight,
	        width  : offsetWidth
	      };
	    };
	
	    ScrollReveal.prototype.isElemVisible = function( elem ) {
	      var offset     = sr.getOffset( elem.domEl );
	      var container  = sr.getContainer( elem.config.container );
	      var scrolled   = sr.getScrolled( elem.config.container );
	      var vF         = elem.config.viewFactor;
	
	      var elemHeight = offset.height;
	      var elemWidth  = offset.width;
	      var elemTop    = offset.top;
	      var elemLeft   = offset.left;
	      var elemBottom = elemTop  + elemHeight;
	      var elemRight  = elemLeft + elemWidth;
	
	      return ( confirmBounds() || isPositionFixed() );
	
	      function confirmBounds() {
	        var top        = elemTop    + elemHeight * vF;
	        var left       = elemLeft   + elemWidth  * vF;
	        var bottom     = elemBottom - elemHeight * vF;
	        var right      = elemRight  - elemWidth  * vF;
	
	        var viewTop    = scrolled.y + elem.config.viewOffset.top;
	        var viewLeft   = scrolled.x + elem.config.viewOffset.left;
	        var viewBottom = scrolled.y - elem.config.viewOffset.bottom + container.height;
	        var viewRight  = scrolled.x - elem.config.viewOffset.right  + container.width;
	
	        return ( top    < viewBottom )
	            && ( bottom > viewTop    )
	            && ( left   > viewLeft   )
	            && ( right  < viewRight  );
	      }
	
	      function isPositionFixed() {
	        return ( window.getComputedStyle( elem.domEl ).position === 'fixed' );
	      }
	    };
	
	    ScrollReveal.prototype.sync = function() {
	      if ( sr.history.length ) {
	        for ( var i = 0; i < sr.history.length; i++ ) {
	          var record = sr.history[ i ];
	          sr.reveal( record.selector, record.config, true );
	        };
	        sr.init();
	      } else {
	        console.warn('sync() failed: no reveals found.');
	      }
	      return sr;
	    };
	
	    return ScrollReveal;
	
	  })();
	
	  var Tools = (function() {
	
	    Tools.prototype.isObject = function( object ) {
	      return object !== null && typeof object === 'object' && object.constructor == Object;
	    };
	
	    Tools.prototype.forOwn = function( object, callback ) {
	      if ( !this.isObject( object ) ) {
	        throw new TypeError('Expected \'object\', but received \'' + typeof object + '\'.');
	      } else {
	        for ( var property in object ) {
	          if ( object.hasOwnProperty( property ) ) {
	            callback( property );
	          }
	        }
	      }
	    };
	
	    Tools.prototype.extend = function( target, source ) {
	      this.forOwn( source, function( property ) {
	        if ( this.isObject( source[ property ] ) ) {
	          if ( !target[ property ] || !this.isObject( target[ property ] ) ) {
	            target[ property ] = {};
	          }
	          this.extend( target[ property ], source[ property ] );
	        } else {
	          target[ property ] = source[ property ];
	        }
	      }.bind( this ));
	      return target;
	    };
	
	    Tools.prototype.extendClone = function( target, source ) {
	      return this.extend( this.extend( {}, target ), source );
	    };
	
	    Tools.prototype.isMobile = function() {
	      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent );
	    };
	
	    Tools.prototype.isSupported = function( feature ) {
	      var sensor    = document.createElement('sensor');
	      var cssPrefix = 'Webkit,Moz,O,'.split(',');
	      var tests     = ( feature + cssPrefix.join( feature + ',' ) ).split(',');
	
	      for ( var i = 0; i < tests.length; i++ ) {
	        if ( !sensor.style[ tests[ i ] ] === '' ) {
	          return false;
	        }
	      }
	      return true;
	    };
	
	    function Tools() {};
	    return Tools;
	
	  })();
	
	  var _requestAnimationFrame = window.requestAnimationFrame       ||
	                               window.webkitRequestAnimationFrame ||
	                               window.mozRequestAnimationFrame;
	
	}).call( this );
	
	return this.ScrollReveal;
	
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGViYmRlYzRiYjRiZDBhNzZiNTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2Nzcz9kZDI4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL34vc2Nyb2xscmV2ZWFsL2Rpc3Qvc2Nyb2xscmV2ZWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQUs7O0FBRUw7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxVQUFTOztBQUVULE1BQUs7O0FBRUwsRUFBQzs7Ozs7Ozs7Ozs7Ozs7QUN6REQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLDBDQUF5QztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXNCLGtCQUFrQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQSxFQUFDOztBQUVEOztBQUVBLEVBQUMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDBlYmJkZWM0YmI0YmQwYTc2YjU5XG4gKiovIiwiaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmVxdWlyZSgnLi4vLi4vYXBwL2luZGV4Lmh0bWwnKVxufVxuXG4vL3JlcXVpcmUoJ21hdGVyaWFsLWRlc2lnbi1saXRlJyk7XG5yZXF1aXJlKCcuLi9zdHlsZXMvbWFpbi5zY3NzJyk7XG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG52YXIgU2Nyb2xsUmV2ZWFsID0gcmVxdWlyZShcInNjcm9sbHJldmVhbFwiKTtcbmNvbnNvbGUubG9nKFNjcm9sbFJldmVhbCk7XG5cbi8vd2luZG93LnNyID0gU2Nyb2xsUmV2ZWFsKCk7XG4vL3NyLnJldmVhbCgnLmZvbycpO1xuXG4vL2FtYmllbnQgYmFja2dyb3VuZCBjb2xvciBodHRwOi8vY29kZXBlbi5pby9zb21lbnVtYm9vbGEvcGVuL3dBaEN5XG4vL3BvcmZvbGlvIGlkZWFzOlxuXG4vL2h0dHA6Ly9pbXByZXphNC51cy10aGVtZXMuY29tL3BvcnRmb2xpby1jaXRpZXMvXG4vL2lkZWEgdHJhbnNpdGlvbiBvdmVyIHBhZ2VzOiBodHRwOi8vdGhlbWVmb3Jlc3QubmV0L2l0ZW0vbWF0ZXJpYWwtZGVzaWduLWFkbWluLXdpdGgtYW5ndWxhcmpzL2Z1bGxfc2NyZWVuX3ByZXZpZXcvMTM1ODIyMjdcbi8vaWRlYSBidXR0b24gZWZmZWN0IGluIHBvcnRmb2xpby4gaHR0cDovL3plcGh5ci51cy10aGVtZXMuY29tL1xuXG4vL3NlY3Rpb24gdmFsdWVzOlxuXG52YXIgJHdpbmRvdyA9ICQod2luZG93KTtcblxuJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xuXG4gICAgJChcIi5zZWN0aW9uXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBzZWN0aW9uKSB7XG5cbiAgICAgICAgdmFyICRzZWN0aW9uID0gJChzZWN0aW9uKTtcbiAgICAgICAgdmFyIHNlY3Rpb25Ub3AgPSAkc2VjdGlvbi5vZmZzZXQoKS50b3A7XG4gICAgICAgIHZhciBzZWN0aW9uQm90dG9tID0gJHNlY3Rpb24ub2Zmc2V0KCkudG9wICsgJHNlY3Rpb24uaGVpZ2h0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaTogXCIgKyBzZWN0aW9uVG9wICsgXCIgXCIgKyBzZWN0aW9uQm90dG9tKTtcblxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XG4gICAgJHdpbmRvdy5vbihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XG5cblxuICAgICAgICAkKFwiLnNlY3Rpb25cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHNlY3Rpb24pIHtcblxuICAgICAgICAgICAgdmFyICRzZWN0aW9uID0gJChzZWN0aW9uKTtcbiAgICAgICAgICAgIHZhciAkc2VjdGlvbl9jb250YWluZXIgPSAkc2VjdGlvbi5maW5kKCBcImRpdjpmaXJzdFwiICk7XG4gICAgICAgICAgICB2YXIgc2VjdGlvblRvcCA9ICRzZWN0aW9uLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICAgIHZhciBzZWN0aW9uQm90dG9tID0gJHNlY3Rpb24ub2Zmc2V0KCkudG9wICsgJHNlY3Rpb24uaGVpZ2h0KCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCR3aW5kb3cuc2Nyb2xsVG9wKCkpO1xuICAgICAgICAgICAgaWYgKCR3aW5kb3cuc2Nyb2xsVG9wKCkgPj0gc2VjdGlvblRvcCAmJiAkd2luZG93LnNjcm9sbFRvcCgpIDwgc2VjdGlvbkJvdHRvbSkge1xuICAgICAgICAgICAgICAgICRzZWN0aW9uX2NvbnRhaW5lci5hZGRDbGFzcygnc2VjdGlvbl9fY29udGFpbmVyLS1jdXJyZW50Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRzZWN0aW9uX2NvbnRhaW5lci5yZW1vdmVDbGFzcygnc2VjdGlvbl9fY29udGFpbmVyLS1jdXJyZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pO1xuXG5cblxuXG5cblxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zY3JpcHRzL21haW4uanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8IWRvY3R5cGUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJcXFwiPlxcbjxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJ1dGYtOFxcXCI+XFxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZVxcXCI+XFxuICAgIDxtZXRhIG5hbWU9XFxcImRlc2NyaXB0aW9uXFxcIiBjb250ZW50PVxcXCJWaWNlbnMgRmF5b3MgUG9ydGZvbGlvIGFuZCBzaG93Y2FzZVxcXCI+XFxuXFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIj5cXG4gICAgPHRpdGxlPlZpY2VucyBGYXlvczwvdGl0bGU+XFxuXFxuICAgIDwhLS0gRGlzYWJsZSB0YXAgaGlnaGxpZ2h0IG9uIElFIC0tPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJtc2FwcGxpY2F0aW9uLXRhcC1oaWdobGlnaHRcXFwiIGNvbnRlbnQ9XFxcIm5vXFxcIj5cXG5cXG4gICAgPCEtLSBXZWIgQXBwbGljYXRpb24gTWFuaWZlc3QgLS0+XFxuICAgIDxsaW5rIHJlbD1cXFwibWFuaWZlc3RcXFwiIGhyZWY9XFxcIm1hbmlmZXN0Lmpzb25cXFwiPlxcblxcbiAgICA8IS0tIEFkZCB0byBob21lc2NyZWVuIGZvciBDaHJvbWUgb24gQW5kcm9pZCAtLT5cXG4gICAgPG1ldGEgbmFtZT1cXFwibW9iaWxlLXdlYi1hcHAtY2FwYWJsZVxcXCIgY29udGVudD1cXFwieWVzXFxcIj5cXG4gICAgPG1ldGEgbmFtZT1cXFwiYXBwbGljYXRpb24tbmFtZVxcXCIgY29udGVudD1cXFwiVmljZW5zIEZheW9zXFxcIj5cXG4gICAgPGxpbmsgcmVsPVxcXCJpY29uXFxcIiBzaXplcz1cXFwiMTkyeDE5MlxcXCIgaHJlZj1cXFwiaW1hZ2VzL3RvdWNoL2Nocm9tZS10b3VjaC1pY29uLTE5MngxOTIucG5nXFxcIj5cXG5cXG4gICAgPCEtLSBBZGQgdG8gaG9tZXNjcmVlbiBmb3IgU2FmYXJpIG9uIGlPUyAtLT5cXG4gICAgPG1ldGEgbmFtZT1cXFwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVxcXCIgY29udGVudD1cXFwieWVzXFxcIj5cXG4gICAgPG1ldGEgbmFtZT1cXFwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtc3RhdHVzLWJhci1zdHlsZVxcXCIgY29udGVudD1cXFwiYmxhY2tcXFwiPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZVxcXCIgY29udGVudD1cXFwiV2ViIFN0YXJ0ZXIgS2l0XFxcIj5cXG4gICAgPGxpbmsgcmVsPVxcXCJhcHBsZS10b3VjaC1pY29uXFxcIiBocmVmPVxcXCJpbWFnZXMvdG91Y2gvYXBwbGUtdG91Y2gtaWNvbi5wbmdcXFwiPlxcblxcbiAgICA8IS0tIFRpbGUgaWNvbiBmb3IgV2luOCAoMTQ0eDE0NCArIHRpbGUgY29sb3IpIC0tPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJtc2FwcGxpY2F0aW9uLVRpbGVJbWFnZVxcXCIgY29udGVudD1cXFwiaW1hZ2VzL3RvdWNoL21zLXRvdWNoLWljb24tMTQ0eDE0NC1wcmVjb21wb3NlZC5wbmdcXFwiPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclxcXCIgY29udGVudD1cXFwiIzJGM0JBMlxcXCI+XFxuXFxuICAgIDwhLS0gQ29sb3IgdGhlIHN0YXR1cyBiYXIgb24gbW9iaWxlIGRldmljZXMgLS0+XFxuICAgIDxtZXRhIG5hbWU9XFxcInRoZW1lLWNvbG9yXFxcIiBjb250ZW50PVxcXCIjMkYzQkEyXFxcIj5cXG4gICAgPGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXknIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnPlxcbiAgICA8c2NyaXB0IHNyYz1cXFwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTIuMS40Lm1pbi5qc1xcXCI+PC9zY3JpcHQ+XFxuICAgIDwhLS08c2NyaXB0IHNyYz1cXFwiaHR0cHM6Ly9jb2RlLmNyZWF0ZWpzLmNvbS9wcmVsb2FkanMtMC42LjIubWluLmpzXFxcIj48L3NjcmlwdD4tLT5cXG4gICAgPHNjcmlwdCBzcmM9XFxcImpzL21haW4uYnVuZGxlLmpzXFxcIj48L3NjcmlwdD5cXG48L2hlYWQ+XFxuPGJvZHk+XFxuPCEtLSBVc2VzIGEgaGVhZGVyIHRoYXQgc2Nyb2xscyB3aXRoIHRoZSB0ZXh0LCByYXRoZXIgdGhhbiBzdGF5aW5nXFxubG9ja2VkIGF0IHRoZSB0b3AgLS0+XFxuXFxuPHNlY3Rpb24gY2xhc3M9XFxcInNlY3Rpb25cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uX19jb250YWluZXIgc2VjdGlvbl9fY29udGFpbmVyLS1jdXJyZW50IHNlY3Rpb25fX2NvbnRhaW5lci0tYmx1ZVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uX193cmFwcGVyXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsb2dvc1xcXCIgZGF0YS1zY3JvbGwtcmV2ZWFsPVxcXCJ3YWl0IDEuMHMgYW5kIHRoZW4gZW50ZXIgdG9wIGVhc2UtaW4tb3V0IDIwcHhcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsb2dvc19fd3JhcHBlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiaW1hZ2VzL2N1YmUuc3ZnXFxcIiBhbHQ9XFxcImR1Y2tcXFwiIGNsYXNzPVxcXCJsb2dvc19fY3ViZSBsb2dvc19fY3ViZS0tYW5pbWF0ZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcImltYWdlcy9jdWJlLnN2Z1xcXCIgYWx0PVxcXCJkdWNrXFxcIiBjbGFzcz1cXFwibG9nb3NfX2N1YmVcXFwiPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8aDEgY2xhc3M9XFxcInRleHRcXFwiPlxcblxcbiAgICAgICAgICAgICAgICA8c21hbGw+SGksIEkgYW0gVmljZW5zIEZheW9zPC9zbWFsbD5cXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5XZWIgQXBwIERldmVsb3BlciBFeHBlcnQ8L3N0cm9uZz5cXG4gICAgICAgICAgICA8L2gxPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwibW9yZVxcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcImltYWdlcy9hcnJvdy1ib3R0b20tZHJvcC1jaXJjbGUuc3ZnXFxcIiBhbHQ9XFxcImFycm93IGJvdHRvbVxcXCIgY2xhc3M9XFxcIm1vcmVfX2ltYWdlIG1vcmVfX2ltYWdlLS1hbmltYXRlZFxcXCI+XFxuICAgICAgICA8L2E+XFxuICAgIDwvZGl2Plxcbjwvc2VjdGlvbj5cXG48c2VjdGlvbiBjbGFzcz1cXFwic2VjdGlvblxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb25fX2NvbnRhaW5lciBzZWN0aW9uX19jb250YWluZXItLXBhZGRpbmcgc2VjdGlvbl9fY29udGFpbmVyLS1yZWRcXFwiPlxcbiAgICAgICAgPGhlYWRlciBjbGFzcz1cXFwiaS1sb3ZlLWl0XFxcIj5cXG4gICAgICAgICAgICA8c3Bhbj5JPC9zcGFuPlxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImktbG92ZS1pdF9faGVhcnQgaS1sb3ZlLWl0X19oZWFydC0tYW5pbWF0ZWRcXFwiIHNyYz1cXFwiaW1hZ2VzL2hlYXJ0LnN2Z1xcXCIgYWx0PVxcXCJMYW5ndWFnZSBodG1sNVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4+d2ViIGRldmVsb3BtZW50PC9zcGFuPjwvaGVhZGVyPlxcbiAgICAgICAgPGg1IGNsYXNzPVxcXCJ0aXRsZVxcXCI+TXkgU2tpbGxzPC9oNT5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQgdGV4dC0tanVzdGlmaWVkXFxcIj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwidGV4dF9fcGFyYWdyYXBoXFxcIj5JIGhhdmUgYmVlbiB3b3JraW5nIGZvciBtb3JlIHRoYW4gMTQgeWVhcnMgaW4gSVQgYW5kIG1lZGlhIGluZHVzdHJ5LCBmb2N1c2VkXFxuICAgICAgICAgICAgICAgIGV4Y2x1c2l2ZWx5IGluIHdlYiBkZXZlbG9wbWVudC4gPHNwYW4gY2xhc3M9XFxcInRleHRfX21ha2UtaXQtaW52aXNpYmxlLW1vYmlsZVxcXCI+SXQgaXMgbXkgbGlmZVxcbiAgICAgICAgICAgICAgICBhbmQgSSBsb3ZlIGl0LiBJbiBhbGwgdGhpcyB0aW1lIEkgbGVhcm50IGEgaHVnZSBhbW91bnQgb2YgdGVjaG5vbG9naWVzIHRoYXQgdW5mb3J0dW5hdGVseSBhcmUgaW1wb3NzaWJsZSB0byBlbnVtZXJhdGUgcmlnaHRcXG4gICAgICAgICAgICAgICAgbm93IGhlcmUuIDwvc3Bhbj48L3A+XFxuICAgICAgICAgICAgPHA+QWx3YXlzIEkgd2FzIGZvY3VzZWQgaW4gd2hhdCBJIGxpa2U6IENyZWF0ZSBiZWF1dGlmdWwgYW5kIGZ1bmN0aW9uYWwgV2ViIGFwcHMgd2l0aCBwdXJwb3NlLCB1c2luZ1xcbiAgICAgICAgICAgICAgICB0aGUgbW9zdCBkaXNydXB0aXZlIHRlY2hub2xvZ2llcyBhbmQgYWltaW5nIHRvIHJlYWNoIHRoZSBiZXN0IHByb2R1Y3Qgd2l0aCB0aGUgYmVzdCBwZW9wbGUgYW5kIHRoZSBiZXN0XFxuICAgICAgICAgICAgICAgIHByb2Nlc3Nlcy48L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ29zIGxvZ29zLS1tYXJnaW4tdG9wXFxcIj5cXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJsb2dvc19faHRtbDVcXFwiIHNyYz1cXFwiaW1hZ2VzL2xhbmd1YWdlLWh0bWw1LnN2Z1xcXCIgYWx0PVxcXCJMYW5ndWFnZSBodG1sNVxcXCI+XFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwibG9nb3NfX2NzczNcXFwiIHNyYz1cXFwiaW1hZ2VzL2xhbmd1YWdlLWNzczMuc3ZnXFxcIiBhbHQ9XFxcIkxhbmd1YWdlIGNzczNcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImxvZ29zX19qYXZhc2NyaXB0XFxcIiBzcmM9XFxcImltYWdlcy9sYW5ndWFnZS1qYXZhc2NyaXB0LnN2Z1xcXCIgYWx0PVxcXCJMYW5ndWFnZSBKYXZhc2NyaXB0XFxcIj5cXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJsb2dvc19fcGhwXFxcIiBzcmM9XFxcImltYWdlcy9sYW5ndWFnZS1waHAuc3ZnXFxcIiBhbHQ9XFxcIkxhbmd1YWdlIFBIUFxcXCI+XFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwibG9nb3NfX3dvcmRwcmVzc1xcXCIgc3JjPVxcXCJpbWFnZXMvd29yZHByZXNzLnN2Z1xcXCIgYWx0PVxcXCJXb3JkcHJlc3NcXFwiPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2Plxcbjwvc2VjdGlvbj5cXG48c2VjdGlvbiBjbGFzcz1cXFwic2VjdGlvblxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb25fX2NvbnRhaW5lciBzZWN0aW9uX19jb250YWluZXItLXBhZGRpbmcgc2VjdGlvbl9fY29udGFpbmVyLS1vcmFuZ2VcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9nb3NcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImxvZ29zX19odG1sNVxcXCIgc3JjPVxcXCJpbWFnZXMvY2VsbHBob25lLWFuZHJvaWQuc3ZnXFxcIiBhbHQ9XFxcIk1vYmlsZVxcXCI+XFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwibG9nb3NfX2NzczNcXFwiIHNyYz1cXFwiaW1hZ2VzL3RhYmxldC1hbmRyb2lkLnN2Z1xcXCIgYWx0PVxcXCJUYWJsZXRcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImxvZ29zX19qYXZhc2NyaXB0XFxcIiBzcmM9XFxcImltYWdlcy9sYXB0b3AtbWFjLnN2Z1xcXCIgYWx0PVxcXCJMYXB0b3BcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImxvZ29zX19waHBcXFwiIHNyYz1cXFwiaW1hZ2VzL21vbml0b3Iuc3ZnXFxcIiBhbHQ9XFxcIk1vbml0b3JcXFwiPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8aDUgY2xhc3M9XFxcInRpdGxlXFxcIj5NYW5hZ2VtZW50ICYgQnVzaW5lc3MgQ2FzZXM8L2g1PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dCB0ZXh0LS1sZWZ0XFxcIj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwidGV4dF9fcGFyYWdyYXBoXFxcIj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwidGV4dF9fcGFyYWdyYXBoXFxcIj5JIGhhdmUgcHJvdmVkIGV4cGVyaWVuY2UgYXMgQ1RPIGFuZCBQcm9qZWN0IE1hbmFnZXIgZm9yIG1vcmUgdGhhbiA0IHllYXJzIGZvciB0aGVcXG4gICAgICAgICAgICAgICAgbW9zdFxcbiAgICAgICAgICAgICAgICBiaWdnZXN0IEFkdmVydGlzaW5nIG5ldHdvcmsgaW4gdGhlXFxuICAgICAgICAgICAgICAgIHdvcmxkLCBCQkRPIGFzIHBhcnQgb2YgdGhlIDxhIGNsYXNzPVxcXCJ0ZXh0X19saW5rXFxcIiBocmVmPVxcXCJodHRwOi8vd3d3LnByb3hpbWl0eWJhcmNlbG9uYS5lcy9cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5Qcm94aW1pdHk8L2E+XFxuICAgICAgICAgICAgICAgIGNyZXcgYW5kLCBpbiBhZGRpdGlvbiwgPHNwYW4gY2xhc3M9XFxcInRleHRfX21ha2UtaXQtaW52aXNpYmxlLW1vYmlsZVxcXCI+YXMgRS1tYWlsIENvbnN1bHRhbnQgZm9yIHRoZSBmaXJzdCBlQ29tbWVyY2UgY29tcGFueSBpbiBTcGFpbjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgb24gPGFcXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVxcXCJodHRwOi8vZXMubGV0c2JvbnVzLmNvbS9cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGNsYXNzPVxcXCJ0ZXh0X19saW5rXFxcIj5MZXRzQm9udXM8L2E+LCBhbiBBbWF6b24gY29tcGFueS4gPHNwYW5cXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidGV4dF9fbWFrZS1pdC1pbnZpc2libGUtbW9iaWxlXFxcIj5GdXJ0aGVyIG9uLCBpdCBpcyB3b3J0aCB0byBtZW50aW9uIHRoYXQgSVxcbiAgICAgICAgICAgIGhhdmUgZXhwZXJpZW5jZVxcbiAgICAgICAgICAgIGFzIHRlY2huaWNhbCBjb25zdWx0YW50IHdvcmtpbmcgZm9yIDxhIGNsYXNzPVxcXCJ0ZXh0X19saW5rXFxcIiBocmVmPVxcXCJodHRwczovL3d3dy5hY2NlbnR1cmUuY29tXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5BY2NlbnR1cmU8L2E+Ljwvc3Bhbj48L3A+XFxuICAgICAgICAgICAgPHA+SW4gdGhvc2UgcG9zaXRpb25zIEkgYWNoaWV2ZWQgYSBidW5jaCBvZiBzdWNjZXNzZXMgc3RvcmllcyBsaWtlIDxzcGFuXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidGV4dF9fbWFrZS1pdC1pbnZpc2libGUtbW9iaWxlXFxcIj5zdWNjZXNzZnVsbHkgc2VuZGluZyBkYWlseSBiYXNpcyA4IG1pbGxpb25zIE1hcmtldGluZyBlbWFpbHMsXFxuICAgICAgICAgICAgICAgIHdvcmtpbmcgd2l0aCBtYW5hZ2VtZW50IHRvIGJ1aWxkIENSTSBwcm9ncmFtcyBmb3IgYmx1ZSBjaGlwIGNvbXBhbmllcyBsaWtlIDxhIGNsYXNzPVxcXCJ0ZXh0X19saW5rXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVxcXCJodHRwczovL2xhY2FpeGEuZXMvXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+TGFDYWl4YTwvYT4sXFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJ0ZXh0X19saW5rXFxcIiBocmVmPVxcXCJodHRwOi8vd3d3LmRhbm9uZS5lcy9cXFwiXFxuICAgICAgICAgICAgICAgICAgIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5EYW5vbmU8L2E+LFxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwidGV4dF9fbGlua1xcXCIgaHJlZj1cXFwiaHR0cDovL3d3dy5kaWFnZW8uY29tL2VuLWllL3BhZ2VzL2RlZmF1bHQuYXNweFxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPklkYWdlbzwvYT4gYW5kXFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJ0ZXh0X19saW5rXFxcIiBocmVmPVxcXCJodHRwOi8vd3d3Lm1lZGlhbWFya3QuZGUvXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+TWVkaWFtYXJrdDwvYT5cXG4gICAgICAgICAgICAgICAgYW5kPC9zcGFuPiBsZWFkaW5nIHRoZSB0ZWNobmljYWwgaW1wbGVtZW50YXRpb24gZnJvbSBzY3JhdGNoIGZvciA8YSBjbGFzcz1cXFwidGV4dF9fbGlua1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVxcXCJodHRwOi8vd3d3LnZvbGtzd2FnZW5leHBlcmllbmNlLmVzL1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPlZvbGtzd2FnZW48L2E+IGFuZFxcbiAgICAgICAgICAgICAgICA8YVxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XFxcImh0dHA6Ly93d3cuYXVkaWNsYXNzLmNvbS9cXFwiIGNsYXNzPVxcXCJ0ZXh0X19saW5rXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+QXVkaTwvYT4gb2YgdGhlIFNwYWluXFxuICAgICAgICAgICAgICAgIGN1c3RvbWVyIHBvcnRhbCB3aGljaFxcbiAgICAgICAgICAgICAgICB3YXMgc2VsZWN0ZWQsIGxhdGVyIG9uLCBhcyBXb3JsZHdpZGUgcG9ydGFsIHRlY2hub2xvZ3kgc3RhbmRhcmQuXFxuICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L3NlY3Rpb24+XFxuPHNlY3Rpb24gY2xhc3M9XFxcInNlY3Rpb25cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uX19jb250YWluZXIgc2VjdGlvbl9fY29udGFpbmVyLS1wYWRkaW5nIHNlY3Rpb25fX2NvbnRhaW5lci0tbGlsYVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsb2dvc1xcXCI+XFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwibG9nb3NfX2h0bWw1XFxcIiBzcmM9XFxcImltYWdlcy9yZXNwb25zaXZlLnN2Z1xcXCIgYWx0PVxcXCJSZXNwb25zaXZlXFxcIj5cXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJsb2dvc19fY3NzM1xcXCIgc3JjPVxcXCJpbWFnZXMvcm91dGVzLnN2Z1xcXCIgYWx0PVxcXCJSb3V0ZXNcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImxvZ29zX19qYXZhc2NyaXB0XFxcIiBzcmM9XFxcImltYWdlcy9lbWFpbC1vdXRsaW5lLnN2Z1xcXCIgYWx0PVxcXCJMYXB0b3BcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImxvZ29zX19waHBcXFwiIHNyYz1cXFwiaW1hZ2VzL2Nsb3VkLW91dGxpbmUuc3ZnXFxcIiBhbHQ9XFxcIk1vbml0b3JcXFwiPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8aDUgY2xhc3M9XFxcInRpdGxlXFxcIj5BZHZlcnRpc2luZyAmIEdhbWluZzwvaDU+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0IHRleHQtLWp1c3RpZmllZFxcXCI+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRleHRfX3BhcmFncmFwaFxcXCI+TW9yZSB0aGFuIDExIHllYXJzIG9mIGV4cGVyaWVuY2UgaW4gdGhlIHRocmlsbGluZyBhbmQgZGVtYW5kaW5nXFxuICAgICAgICAgICAgICAgIGFkdmVydGlzaW5nICYgZ2FtaW5nIGluZHVzdHJ5LiA8c3BhbiBjbGFzcz1cXFwidGV4dF9fbWFrZS1pdC1pbnZpc2libGUtbW9iaWxlXFxcIj5JbiBhbGwgdGhpcyB0aW1lIEkgbGVhcm50IGFib3V0IG1hbmFnZW1lbnQsIHRlY2huaWNhbCBwcm9jZXNzZXMgYW5kIHRlY2hub2xvZ2llc1xcbiAgICAgICAgICAgICAgICBidXQsIGV2ZW4gbW9yZSBpbXBvcnRhbnQsIEkgbGVhcm50IHdvcmtpbmcgd2l0aCBleHBlcmllbmNlZCBwcm9mZXNzaW9uYWxzIHdoaWNoIGluc3BpcmVkIG1lIGJvdGggcHJvZmVzc2lvbmFsbHkgYW5kIHBlcnNvbmFsbHkuPC9zcGFuPlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwidGV4dF9fcGFyYWdyYXBoXFxcIj5BZnRlciB3b3JraW5nIGZvciBkaWZmZXJlbnQgc3R1ZGlvcyBhbmQgQWdlbmNpZXMgSSBhbSBhIHByb3VkbHkgb3duZXIgb2YgMzdcXG4gICAgICAgICAgICAgICAgaW50ZXJuYXRpb25hbCBwcml6ZXMgZnJvbSBtb3N0IHByZXN0aWdpb3VzIGF3YXJkcyBjb250ZXN0IGxpa2UsXFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJ0ZXh0X19saW5rXFxcIiBocmVmPVxcXCJodHRwczovL3d3dy5jYW5uZXNsaW9ucy5jb20vXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+Q2FubmVzPC9hPiwgPGFcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidGV4dF9fbGlua1xcXCIgaHJlZj1cXFwiaHR0cDovL2RtYS1lY2hvLm9yZy9cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPkVjaG88L2E+LCA8YVxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XFxcImh0dHA6Ly9lbHNvbGZlc3RpdmFsLmNvbS9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBjbGFzcz1cXFwidGV4dF9fbGlua1xcXCI+U29sPC9hPjwvcD5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwidGV4dF9fcGFyYWdyYXBoXFxcIj48c3BhbiBjbGFzcz1cXFwidGV4dF9fbWFrZS1pdC1pbnZpc2libGUtbW9iaWxlXFxcIj5Tb21lIGV4YW1wbGVzIGFyZTogPGFcXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XFxcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9VUhGb2NGME9jOUFcXFwiIGNsYXNzPVxcXCJ0ZXh0X19saW5rXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+RXJpc3RvZmYgbmlnaHRcXG4gICAgICAgICAgICAgICAgc3RyZWV0IHZpZXc8L2E+LFxcbiAgICAgICAgICAgICAgICA8YVxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XFxcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9WlhaNUk0YWRzVmNcXFwiIGNsYXNzPVxcXCJ0ZXh0X19saW5rXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+Q29tcG9zaW5nXFxuICAgICAgICAgICAgICAgICAgICB5b3VyIGxpZmU8L2E+LCA8YSBjbGFzcz1cXFwidGV4dF9fbGlua1xcXCIgaHJlZj1cXFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj12dUxfNGcwTDNac1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5UaGUgZ3JlYXRcXG4gICAgICAgICAgICAgICAgICAgIFNjYXBlPC9hPiwgPGEgY2xhc3M9XFxcInRleHRfX2xpbmtcXFwiIGhyZWY9XFxcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9THo5c2FnY0ZiU2tcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5RNVxcbiAgICAgICAgICAgICAgICAgICAgR2VuZXJpczwvYT4gZXRjLi4uPC9zcGFuPlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8cD5JbiBnYW1pbmcgSSBoYWQgdGhlIGhvbm9yIG9mIGpvaW5lZCB0aGUgVGVhbSBvZiA8YSBocmVmPVxcXCJodHRwOi8vd3d3LmRhcmtvcmJpdC5jb21cXFwiIGNsYXNzPVxcXCJ0ZXh0X19saW5rXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5EYXJrIE9yYml0PC9hPiBpbiA8YVxcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cXFwiaHR0cDovL3d3dy5iaWdwb2ludC5jb21cXFwiIGNsYXNzPVxcXCJ0ZXh0X19saW5rXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+QmlnIFBvaW50IEdtYkg8L2E+LiBBIGdsb2JhbFxcbiAgICAgICAgICAgICAgICBsZWFkaW5nIGNvbXBhbnkgaW4gRnJlZSAyIHBsYXkgZ2FtaW5nIGluZHVzdHJ5LjwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L3NlY3Rpb24+XFxuPHNlY3Rpb24gY2xhc3M9XFxcInNlY3Rpb25cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uX19jb250YWluZXIgc2VjdGlvbl9fY29udGFpbmVyLS1wYWRkaW5nIHNlY3Rpb25fX2NvbnRhaW5lci0tZ3JlZW5cXFwiPlxcbiAgICAgICAgPGg1IGNsYXNzPVxcXCJ0aXRsZVxcXCI+SGl0IG1lIHVwPC9oNT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQgdGV4dC0tanVzdGlmaWVkXFxcIj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwidGV4dF9fcGFyYWdyYXBoXFxcIj5JIHJlYWxseSB0aGluayBJIGNhbiBoZWxwIHlvdSB0byBidWlsZCB5b3VyIHByb2plY3QuIFBsZWFzZSByZWFjaCBtZSB1c2luZyBvbmUgb2ZcXG4gICAgICAgICAgICAgICAgdGhlIGZvbGxvd2luZyBjaGFubmVsczogPC9wPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsb2dvc1xcXCI+XFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3ZpY2Vuc2ZheW9zXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+XFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImxvZ29zX19saW5rZWRpblxcXCIgc3JjPVxcXCJpbWFnZXMvbGlua2VkaW4tYm94LnN2Z1xcXCIgYWx0PVxcXCJMYW5ndWFnZSBodG1sNVxcXCI+XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcIm1haWx0bzpjb250YWN0QHZpY2Vuc2ZheW9zLmNvbVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGFsdD1cXFwiY29udGFjdEB2aWNlbnNmYXlvcy5jb21cXFwiPjxpbWcgY2xhc3M9XFxcImxvZ29zX19hdFxcXCIgc3JjPVxcXCJpbWFnZXMvYXQuc3ZnXFxcIiBhbHQ9XFxcIkxhbmd1YWdlIGNzczNcXFwiPjwvYT5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL3R3aXR0ZXIuY29tL2RhdHJhY2thXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGltZyBjbGFzcz1cXFwibG9nb3NfX3R3aXR0ZXJcXFwiIHNyYz1cXFwiaW1hZ2VzL3R3aXR0ZXIuc3ZnXFxcIiBhbHQ9XFxcIkxhbmd1YWdlIEphdmFzY3JpcHRcXFwiPjwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L3NlY3Rpb24+XFxuXFxuXFxuPHNjcmlwdD5cXG4gICAgKGZ1bmN0aW9uIChpLCBzLCBvLCBnLCByLCBhLCBtKSB7XFxuICAgICAgICBpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXSA9IHI7XFxuICAgICAgICBpW3JdID0gaVtyXSB8fCBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgICAgICAgICAgICAoaVtyXS5xID0gaVtyXS5xIHx8IFtdKS5wdXNoKGFyZ3VtZW50cylcXG4gICAgICAgICAgICAgICAgfSwgaVtyXS5sID0gMSAqIG5ldyBEYXRlKCk7XFxuICAgICAgICBhID0gcy5jcmVhdGVFbGVtZW50KG8pLFxcbiAgICAgICAgICAgICAgICBtID0gcy5nZXRFbGVtZW50c0J5VGFnTmFtZShvKVswXTtcXG4gICAgICAgIGEuYXN5bmMgPSAxO1xcbiAgICAgICAgYS5zcmMgPSBnO1xcbiAgICAgICAgbS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBtKVxcbiAgICB9KSh3aW5kb3csIGRvY3VtZW50LCAnc2NyaXB0JywgJy8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL2FuYWx5dGljcy5qcycsICdnYScpO1xcbiAgICBnYSgnY3JlYXRlJywgJ1VBLVhYWFhYLVgnLCAnYXV0bycpO1xcbiAgICBnYSgnc2VuZCcsICdwYWdldmlldycpO1xcbjwvc2NyaXB0PlxcblxcbjwvYm9keT5cXG48L2h0bWw+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2luZGV4Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9tYWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3R5bGVzL21haW4uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogcmVzcG9uc2l2ZW5lc3MgKi9cXG4vKiBQYWxldHRlIHRlbXBsYXRlcyBwYWxldHRvbi5jb20gKi9cXG5odG1sLCBib2R5IHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBoZWx2ZXRpY2EsIGFyaWFsLCBzYW5zLXNlcmlmOyB9XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4ubGF5b3V0LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBUUFBQUFFQ0FZQUFBQ3A4WjUrQUFBQUcwbEVRVlFJVzJOa1lHQ1FCT0xuUUF3R2pEQUdOZ0d3U2d3VkFFKzJBZ1hhaExNN0FBQUFBRWxGVGtTdVFtQ0MpIHJlcGVhdDsgfVxcblxcbi5zZWN0aW9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxNnB4OyB9XFxuICAuc2VjdGlvbl9fY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAgIC5zZWN0aW9uX19jb250YWluZXItLXBhZGRpbmcge1xcbiAgICAgIHBhZGRpbmc6IDMuNWVtOyB9XFxuICAgIC5zZWN0aW9uX19jb250YWluZXItLWN1cnJlbnQge1xcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDsgfVxcbiAgICAuc2VjdGlvbl9fY29udGFpbmVyLS1vcmFuZ2Uge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjhGNUY7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOEY1RjtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNGRjhGNUYgNjAlLCAjZWVlKTtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCNGRjhGNUYgNjAlLCAjZWVlKTsgfVxcbiAgICAuc2VjdGlvbl9fY29udGFpbmVyLS1ncmVlbiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzREQ0U5QTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNERDRTlBO1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzREQ0U5QSA2MCUsICNlZWUpO1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIzREQ0U5QSA2MCUsICNlZWUpOyB9XFxuICAgIC5zZWN0aW9uX19jb250YWluZXItLWJsdWUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1OTdDQ0M7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU5N0NDQztcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICM1OTdDQ0MgNjAlLCAjZWVlKTtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCM1OTdDQ0MgNjAlLCAjZWVlKTsgfVxcbiAgICAuc2VjdGlvbl9fY29udGFpbmVyLS1yb3NhIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUY1OTg2O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRjU5ODY7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjRUY1OTg2IDYwJSwgI2VlZSk7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjRUY1OTg2IDYwJSwgI2VlZSk7IH1cXG4gICAgLnNlY3Rpb25fX2NvbnRhaW5lci0tbGlsYSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc2NUNDRjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzY1Q0NGO1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzc2NUNDRiA2MCUsICNlZWUpO1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIzc2NUNDRiA2MCUsICNlZWUpOyB9XFxuICAgIC5zZWN0aW9uX19jb250YWluZXItLXJlZCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjM1RjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2MzVGO1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI0ZGNjM1RiA2MCUsICNlZWUpO1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sI0ZGNjM1RiA2MCUsICNlZWUpOyB9XFxuICAuc2VjdGlvbl9fd3JhcHBlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxcbiAgLnNlY3Rpb25fX3dyYXBwZXIyIHtcXG4gICAgcGFkZGluZzogMmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4ubG9nb3Mge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgLyogZml4OiBhIGxvdCBvIGNvZGUgZHVwbGljYXRlZCAqL1xcbiAgLyogZW5kIHJlZmFjdG9yICovIH1cXG4gIC5sb2dvcy0tbWFyZ2luLXRvcCB7XFxuICAgIG1hcmdpbi10b3A6IDFlbTsgfVxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcXG4gICAgICAubG9nb3MtLW1hcmdpbi10b3Age1xcbiAgICAgICAgbWFyZ2luLXRvcDogMmVtOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGN1YmVfYW5pbWF0aW9uIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMywgMS4zKTtcXG4gICAgb3BhY2l0eTogLjQ7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjUsIDEuNSk7XFxuICAgIG9wYWNpdHk6IDA7IH0gfVxcbiAgLmxvZ29zX193cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAubG9nb3NfX2N1YmUge1xcbiAgICB3aWR0aDogNmVtO1xcbiAgICBtYXJnaW4tdG9wOiAtMmVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XFxuICAgICAgLmxvZ29zX19jdWJlIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDBlbTsgfSB9XFxuICAgIC5sb2dvc19fY3ViZS0tYW5pbWF0ZWQge1xcbiAgICAgIGFuaW1hdGlvbjogY3ViZV9hbmltYXRpb24gMnMgZWFzZS1vdXQgaW5maW5pdGU7IH1cXG4gIC5sb2dvc19faHRtbDUge1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XFxuICAgICAgLmxvZ29zX19odG1sNSB7XFxuICAgICAgICB3aWR0aDogNmVtOyB9IH1cXG4gIC5sb2dvc19fcGhwIHtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xcbiAgICAgIC5sb2dvc19fcGhwIHtcXG4gICAgICAgIHdpZHRoOiA2ZW07IH0gfVxcbiAgLmxvZ29zX19jc3MzIHtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xcbiAgICAgIC5sb2dvc19fY3NzMyB7XFxuICAgICAgICB3aWR0aDogNmVtOyB9IH1cXG4gIC5sb2dvc19famF2YXNjcmlwdCB7XFxuICAgIHdpZHRoOiAyZW07XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcXG4gICAgICAubG9nb3NfX2phdmFzY3JpcHQge1xcbiAgICAgICAgd2lkdGg6IDZlbTsgfSB9XFxuICAubG9nb3NfX3dvcmRwcmVzcyB7XFxuICAgIHdpZHRoOiAyZW07XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcXG4gICAgICAubG9nb3NfX3dvcmRwcmVzcyB7XFxuICAgICAgICB3aWR0aDogNmVtOyB9IH1cXG4gIC5sb2dvc19fYXQge1xcbiAgICB3aWR0aDogNWVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwIGF1dG87IH1cXG4gIC5sb2dvc19fbGlua2VkaW4ge1xcbiAgICB3aWR0aDogNWVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwIGF1dG87IH1cXG4gIC5sb2dvc19fdHdpdHRlciB7XFxuICAgIHdpZHRoOiA1ZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDAgYXV0bzsgfVxcblxcbi50aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxZW07IH1cXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xcbiAgICAudGl0bGUge1xcbiAgICAgIGZvbnQtc2l6ZTogNGVtOyB9IH1cXG5cXG4udGV4dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDEuNWVtOyB9XFxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcXG4gICAgLnRleHQge1xcbiAgICAgIG1hcmdpbi10b3A6IDNlbTtcXG4gICAgICBtYXJnaW4tbGVmdDogMTJlbTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEyZW07IH0gfVxcbiAgLnRleHQgc21hbGwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiA0dmg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7IH1cXG4gIC50ZXh0IHN0cm9uZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDh2aDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDAuMmVtOyB9XFxuICAudGV4dF9fbGluayB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjb2xvcjogd2hpdGU7IH1cXG4gIC50ZXh0LS1qdXN0aWZpZWQge1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5OyB9XFxuICAudGV4dC0tbGVmdCB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OTBweCkge1xcbiAgICAudGV4dF9fbWFrZS1pdC1pbnZpc2libGUtbW9iaWxlIHtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9IH1cXG4gIC50ZXh0X19wYXJhZ3JhcGgge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG5cXG4ubW9yZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogNHZoO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cXG5cXG5Aa2V5ZnJhbWVzIG1vcmVfYW5pbWF0aW9uIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgMjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDZweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNnB4LCAwKTsgfVxcbiAgMjElIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCk7IH1cXG4gIDQxJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgfSB9XFxuICAubW9yZV9faW1hZ2Uge1xcbiAgICB3aWR0aDogM3JlbTsgfVxcbiAgICAubW9yZV9faW1hZ2UtLWFuaW1hdGVkIHtcXG4gICAgICBhbmltYXRpb246IG1vcmVfYW5pbWF0aW9uIDNzIGxpbmVhciBpbmZpbml0ZTsgfVxcblxcbi5pLWxvdmUtaXQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuQGtleWZyYW1lcyBoZWFydF9hbmltYXRpb24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpOyB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMywgMS4zKTsgfVxcbiAgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7IH0gfVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XFxuICAgIC5pLWxvdmUtaXQge1xcbiAgICAgIGZvbnQtc2l6ZTogNC41ZW07IH0gfVxcbiAgLmktbG92ZS1pdF9fdGV4dCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcbiAgLmktbG92ZS1pdF9faGVhcnQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxLjRlbTtcXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tOyB9XFxuICAgIC5pLWxvdmUtaXRfX2hlYXJ0LS1hbmltYXRlZCB7XFxuICAgICAgYW5pbWF0aW9uOiBoZWFydF9hbmltYXRpb24gMnMgZWFzZS1vdXQgaW5maW5pdGU7IH1cXG5cXG5zZWN0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB6LWluZGV4OiA4MDA7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uY29udGVudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBwYWRkaW5nOiAxMHZoIDZ2dzsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9tYWluLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImpRdWVyeVwiXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuU2Nyb2xsUmV2ZWFsID0gZmFjdG9yeSgpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uKHJlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZSkge1xuXG4vKlxuICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgICAgIF9fX19fX19fICAgICAgICAgICAgICAgICAgICAgICBfX1xuICAgICAgICAgICAvIF9fXy9fX19fX19fX19fX19fXyAgLyAvIC8gX18gXFxfX18gXyAgIF9fX19fICBfX19fIF8vIC9cbiAgICAgICAgICAgXFxfXyBcXC8gX19fLyBfX18vIF9fIFxcLyAvIC8gL18vIC8gXyBcXCB8IC8gLyBfIFxcLyBfXyBgLyAvXG4gICAgICAgICAgX19fLyAvIC9fXy8gLyAgLyAvXy8gLyAvIC8gXywgXy8gIF9fLyB8LyAvICBfXy8gL18vIC8gL1xuICAgICAgICAgL19fX18vXFxfX18vXy8gICBcXF9fX18vXy9fL18vIHxffFxcX19fL3xfX18vXFxfX18vXFxfXyxfL18vICAgIHYzLjAuNlxuXG7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL7igL5cbiAgIENvcHlyaWdodCAyMDE04oCTMjAxNiBKdWxpYW4gTGxveWQgKEBqbG1ha2VzKSBPcGVuIHNvdXJjZSB1bmRlciBNSVQgbGljZW5zZVxu4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXG4gICAgaHR0cHM6Ly9zY3JvbGxyZXZlYWxqcy5vcmcg4oCUIGh0dHBzOi8vZ2l0aHViLmNvbS9qbG1ha2VzL3Njcm9sbHJldmVhbC5qc1xuX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fKi9cblxuKGZ1bmN0aW9uKCkge1xuICB2YXIgVG9vbHMsIHNyLCBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG4gIHRoaXMuU2Nyb2xsUmV2ZWFsID0gKGZ1bmN0aW9uKCkge1xuICAgIFNjcm9sbFJldmVhbC5wcm90b3R5cGUuZGVmYXVsdHMgPSB7XG4gICAgICAvLyBBbmltYXRpb25cbiAgICAgIG9yaWdpbiAgICAgIDogJ2JvdHRvbScsXG4gICAgICBkaXN0YW5jZSAgICA6ICcyMHB4JyxcbiAgICAgIGR1cmF0aW9uICAgIDogNTAwLFxuICAgICAgZGVsYXkgICAgICAgOiAwLFxuICAgICAgcm90YXRlICAgICAgOiB7IHg6IDAsIHk6IDAsIHo6IDAgfSxcbiAgICAgIG9wYWNpdHkgICAgIDogMCxcbiAgICAgIHNjYWxlICAgICAgIDogMC45LFxuICAgICAgZWFzaW5nICAgICAgOiAnY3ViaWMtYmV6aWVyKCAwLjYsIDAuMiwgMC4xLCAxICknLFxuICAgICAgLy8gT3B0aW9uc1xuICAgICAgY29udGFpbmVyICAgOiBudWxsLFxuICAgICAgbW9iaWxlICAgICAgOiB0cnVlLFxuICAgICAgcmVzZXQgICAgICAgOiBmYWxzZSxcbiAgICAgIHVzZURlbGF5ICAgIDogJ2Fsd2F5cycsXG4gICAgICB2aWV3RmFjdG9yICA6IDAuMixcbiAgICAgIHZpZXdPZmZzZXQgIDogeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAgfSxcbiAgICAgIGFmdGVyUmV2ZWFsIDogZnVuY3Rpb24oIGRvbUVsICkge30sXG4gICAgICBhZnRlclJlc2V0ICA6IGZ1bmN0aW9uKCBkb21FbCApIHt9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIFNjcm9sbFJldmVhbCggY29uZmlnICkge1xuICAgICAgaWYgKCB3aW5kb3cgPT0gdGhpcyApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTY3JvbGxSZXZlYWwoIGNvbmZpZyApO1xuICAgICAgfVxuICAgICAgc3IgPSB0aGlzO1xuICAgICAgc3IudG9vbHMgPSBuZXcgVG9vbHMoKTtcbiAgICAgIHNyLnRvb2xzLmV4dGVuZCggc3IuZGVmYXVsdHMsIGNvbmZpZyB8fCB7fSApO1xuXG4gICAgICBpZiAoIHNyLnRvb2xzLmlzTW9iaWxlKCkgJiYgIXNyLmRlZmF1bHRzLm1vYmlsZSApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIGlmICggIXNyLnRvb2xzLmlzU3VwcG9ydGVkKCd0cmFuc2Zvcm0nKSB8fCAhc3IudG9vbHMuaXNTdXBwb3J0ZWQoJ3RyYW5zaXRpb24nKSApIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybignU2Nyb2xsUmV2ZWFsIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyLicpO1xuICAgICAgfVxuXG4gICAgICBzci5zdG9yZSA9IHtcbiAgICAgICAgZWxlbWVudHMgICA6IHt9LFxuICAgICAgICBjb250YWluZXJzIDogW11cbiAgICAgIH07XG4gICAgICBzci5oaXN0b3J5ICAgICA9IFtdO1xuICAgICAgc3IuY291bnRlciAgICAgPSAwO1xuICAgICAgc3IucnVubmluZyAgICAgPSBmYWxzZTtcbiAgICAgIHNyLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICByZXR1cm4gc3I7XG4gICAgfVxuXG4gICAgU2Nyb2xsUmV2ZWFsLnByb3RvdHlwZS5yZXZlYWwgPSBmdW5jdGlvbiggc2VsZWN0b3IsIGNvbmZpZywgc3luYyApIHtcbiAgICAgIHZhciBlbGVtZW50cywgY29udGFpbmVyLCBlbGVtLCBlbGVtSWQ7XG5cbiAgICAgIGlmICggY29uZmlnICYmIGNvbmZpZy5jb250YWluZXIgKSB7XG4gICAgICAgIGNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXI7XG4gICAgICB9IGVsc2UgaWYgKCBzci5kZWZhdWx0cy5jb250YWluZXIgKSB7XG4gICAgICAgIGNvbnRhaW5lciA9IHNyLmRlZmF1bHRzLmNvbnRhaW5lcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lciA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApICk7XG4gICAgICBpZiAoICFlbGVtZW50cy5sZW5ndGggKSB7XG4gICAgICAgIGNvbnNvbGUud2FybigncmV2ZWFsKFxcJycgKyBzZWxlY3RvciArICdcXCcpIGZhaWxlZDogbm8gZWxlbWVudHMgZm91bmQuJyk7XG4gICAgICAgIHJldHVybiBzcjtcbiAgICAgIH1cbiAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICBlbGVtICAgPSB7fVxuICAgICAgICBlbGVtSWQgPSBlbGVtZW50c1sgaSBdLmdldEF0dHJpYnV0ZSgnZGF0YS1zci1pZCcpO1xuXG4gICAgICAgIGlmICggZWxlbUlkICkge1xuICAgICAgICAgIGVsZW0gPSBzci5zdG9yZS5lbGVtZW50c1sgZWxlbUlkIF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbSA9IHtcbiAgICAgICAgICAgIGlkICAgICAgIDogKytzci5jb3VudGVyLFxuICAgICAgICAgICAgZG9tRWwgICAgOiBlbGVtZW50c1sgaSBdLFxuICAgICAgICAgICAgc2VlbiAgICAgOiBmYWxzZSxcbiAgICAgICAgICAgIHJldmVhbGVkIDogZmFsc2VcbiAgICAgICAgICB9O1xuICAgICAgICAgIGVsZW0uZG9tRWwuc2V0QXR0cmlidXRlKCAnZGF0YS1zci1pZCcsIGVsZW0uaWQgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNyLmNvbmZpZ3VyZSggZWxlbSwgY29uZmlnIHx8IHt9ICk7XG4gICAgICAgIHNyLnN0eWxlKCBlbGVtICk7XG4gICAgICAgIHNyLnVwZGF0ZVN0b3JlKCBlbGVtICk7XG5cbiAgICAgICAgaWYgKCAhZWxlbS5yZXZlYWxlZCApIHtcbiAgICAgICAgICBlbGVtLmRvbUVsLnNldEF0dHJpYnV0ZSggJ3N0eWxlJyxcbiAgICAgICAgICAgICAgZWxlbS5zdHlsZXMuaW5saW5lXG4gICAgICAgICAgICArIGVsZW0uc3R5bGVzLnRyYW5zZm9ybS5pbml0aWFsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCAhc3luYyApIHtcbiAgICAgICAgc3IucmVjb3JkKCBzZWxlY3RvciwgY29uZmlnICk7XG4gICAgICAgIGlmICggc3IuaW5pdFRpbWVvdXQgKSB7XG4gICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCggc3IuaW5pdFRpbWVvdXQgKTtcbiAgICAgICAgfVxuICAgICAgICBzci5pbml0VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCBzci5pbml0LCAwICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3I7XG4gICAgfTtcblxuICAgIFNjcm9sbFJldmVhbC5wcm90b3R5cGUuY29uZmlndXJlID0gZnVuY3Rpb24oIGVsZW0sIGNvbmZpZyApIHtcbiAgICAgIGlmICggIWVsZW0uY29uZmlnICkge1xuICAgICAgICBlbGVtLmNvbmZpZyA9IHNyLnRvb2xzLmV4dGVuZENsb25lKCBzci5kZWZhdWx0cywgY29uZmlnICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtLmNvbmZpZyA9IHNyLnRvb2xzLmV4dGVuZENsb25lKCBlbGVtLmNvbmZpZywgY29uZmlnICk7XG4gICAgICB9XG5cbiAgICAgIGlmICggZWxlbS5jb25maWcub3JpZ2luID09PSAndG9wJyB8fCBlbGVtLmNvbmZpZy5vcmlnaW4gPT09ICdib3R0b20nICkge1xuICAgICAgICBlbGVtLmNvbmZpZy5heGlzID0gJ1knO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbS5jb25maWcuYXhpcyA9ICdYJztcbiAgICAgIH1cblxuICAgICAgaWYgKCBlbGVtLmNvbmZpZy5vcmlnaW4gPT09ICd0b3AnIHx8IGVsZW0uY29uZmlnLm9yaWdpbiA9PT0gJ2xlZnQnICkge1xuICAgICAgICBlbGVtLmNvbmZpZy5kaXN0YW5jZSA9ICctJyArIGVsZW0uY29uZmlnLmRpc3RhbmNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBTY3JvbGxSZXZlYWwucHJvdG90eXBlLnN0eWxlID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICB2YXIgY29uZmlnICAgPSBlbGVtLmNvbmZpZztcbiAgICAgIHZhciBjb21wdXRlZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBlbGVtLmRvbUVsICk7XG5cbiAgICAgIGlmICggIWVsZW0uc3R5bGVzICkge1xuICAgICAgICBlbGVtLnN0eWxlcyA9IHtcbiAgICAgICAgICB0cmFuc2l0aW9uIDoge30sXG4gICAgICAgICAgdHJhbnNmb3JtICA6IHt9LFxuICAgICAgICAgIGNvbXB1dGVkICAgOiB7fVxuICAgICAgICB9O1xuICAgICAgICBlbGVtLnN0eWxlcy5pbmxpbmUgICAgICAgICAgID0gZWxlbS5kb21FbC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgfHwgJyc7XG4gICAgICAgIGVsZW0uc3R5bGVzLmlubGluZSAgICAgICAgICArPSAnOyB2aXNpYmlsaXR5OiB2aXNpYmxlOyAnO1xuICAgICAgICBlbGVtLnN0eWxlcy5jb21wdXRlZC5vcGFjaXR5ID0gY29tcHV0ZWQub3BhY2l0eTtcblxuICAgICAgICBpZiAoICFjb21wdXRlZC50cmFuc2l0aW9uIHx8IGNvbXB1dGVkLnRyYW5zaXRpb24gPT0gJ2FsbCAwcyBlYXNlIDBzJyApIHtcbiAgICAgICAgICBlbGVtLnN0eWxlcy5jb21wdXRlZC50cmFuc2l0aW9uID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbS5zdHlsZXMuY29tcHV0ZWQudHJhbnNpdGlvbiA9IGNvbXB1dGVkLnRyYW5zaXRpb24gKyAnLCAnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGVsZW0uc3R5bGVzLnRyYW5zaXRpb24uaW5zdGFudCA9ICctd2Via2l0LXRyYW5zaXRpb246ICcgKyBlbGVtLnN0eWxlcy5jb21wdXRlZC50cmFuc2l0aW9uICsgJy13ZWJraXQtdHJhbnNmb3JtICcgKyBjb25maWcuZHVyYXRpb24gLyAxMDAwICsgJ3MgJyArIGNvbmZpZy5lYXNpbmcgKyAnIDBzLCBvcGFjaXR5ICcgKyBjb25maWcuZHVyYXRpb24gLyAxMDAwICsgJ3MgJyArIGNvbmZpZy5lYXNpbmcgKyAnIDBzOyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RyYW5zaXRpb246ICcgKyBlbGVtLnN0eWxlcy5jb21wdXRlZC50cmFuc2l0aW9uICsgJ3RyYW5zZm9ybSAnICsgY29uZmlnLmR1cmF0aW9uIC8gMTAwMCArICdzICcgKyBjb25maWcuZWFzaW5nICsgJyAwcywgb3BhY2l0eSAnICsgY29uZmlnLmR1cmF0aW9uIC8gMTAwMCArICdzICcgKyBjb25maWcuZWFzaW5nICsgJyAwczsgJztcblxuICAgICAgZWxlbS5zdHlsZXMudHJhbnNpdGlvbi5kZWxheWVkID0gJy13ZWJraXQtdHJhbnNpdGlvbjogJyArIGVsZW0uc3R5bGVzLmNvbXB1dGVkLnRyYW5zaXRpb24gKyAnLXdlYmtpdC10cmFuc2Zvcm0gJyArIGNvbmZpZy5kdXJhdGlvbiAvIDEwMDAgKyAncyAnICsgY29uZmlnLmVhc2luZyArICcgJyArIGNvbmZpZy5kZWxheSAvIDEwMDAgKyAncywgb3BhY2l0eSAnICsgY29uZmlnLmR1cmF0aW9uIC8gMTAwMCArICdzICcgKyBjb25maWcuZWFzaW5nICsgJyAnICsgY29uZmlnLmRlbGF5IC8gMTAwMCArICdzOyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RyYW5zaXRpb246ICcgKyBlbGVtLnN0eWxlcy5jb21wdXRlZC50cmFuc2l0aW9uICsgJ3RyYW5zZm9ybSAnICsgY29uZmlnLmR1cmF0aW9uIC8gMTAwMCArICdzICcgKyBjb25maWcuZWFzaW5nICsgJyAnICsgY29uZmlnLmRlbGF5IC8gMTAwMCArICdzLCBvcGFjaXR5ICcgKyBjb25maWcuZHVyYXRpb24gLyAxMDAwICsgJ3MgJyArIGNvbmZpZy5lYXNpbmcgKyAnICcgKyBjb25maWcuZGVsYXkgLyAxMDAwICsgJ3M7ICc7XG5cbiAgICAgIGVsZW0uc3R5bGVzLnRyYW5zZm9ybS5pbml0aWFsID0gJyAtd2Via2l0LXRyYW5zZm9ybTonO1xuICAgICAgZWxlbS5zdHlsZXMudHJhbnNmb3JtLnRhcmdldCAgPSAnIC13ZWJraXQtdHJhbnNmb3JtOic7XG4gICAgICBnZW5lcmF0ZVRyYW5zZm9ybSggZWxlbS5zdHlsZXMudHJhbnNmb3JtICk7XG5cbiAgICAgIGVsZW0uc3R5bGVzLnRyYW5zZm9ybS5pbml0aWFsICs9ICd0cmFuc2Zvcm06JztcbiAgICAgIGVsZW0uc3R5bGVzLnRyYW5zZm9ybS50YXJnZXQgICs9ICd0cmFuc2Zvcm06JztcbiAgICAgIGdlbmVyYXRlVHJhbnNmb3JtKCBlbGVtLnN0eWxlcy50cmFuc2Zvcm0gKTtcblxuICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVUcmFuc2Zvcm0oIHRyYW5zZm9ybSApIHtcbiAgICAgICAgaWYgKCBwYXJzZUludCggY29uZmlnLmRpc3RhbmNlICkgKSB7XG4gICAgICAgICAgdHJhbnNmb3JtLmluaXRpYWwgKz0gJyB0cmFuc2xhdGUnICsgY29uZmlnLmF4aXMgKyAnKCcgKyBjb25maWcuZGlzdGFuY2UgKyAnKSc7XG4gICAgICAgICAgdHJhbnNmb3JtLnRhcmdldCAgKz0gJyB0cmFuc2xhdGUnICsgY29uZmlnLmF4aXMgKyAnKDApJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIGNvbmZpZy5zY2FsZSApIHtcbiAgICAgICAgICB0cmFuc2Zvcm0uaW5pdGlhbCArPSAnIHNjYWxlKCcgKyBjb25maWcuc2NhbGUgKyAnKSc7XG4gICAgICAgICAgdHJhbnNmb3JtLnRhcmdldCAgKz0gJyBzY2FsZSgxKSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBjb25maWcucm90YXRlLnggKSB7XG4gICAgICAgICAgdHJhbnNmb3JtLmluaXRpYWwgKz0gJyByb3RhdGVYKCcgKyBjb25maWcucm90YXRlLnggKyAnZGVnKSc7XG4gICAgICAgICAgdHJhbnNmb3JtLnRhcmdldCAgKz0gJyByb3RhdGVYKDApJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIGNvbmZpZy5yb3RhdGUueSApIHtcbiAgICAgICAgICB0cmFuc2Zvcm0uaW5pdGlhbCArPSAnIHJvdGF0ZVkoJyArIGNvbmZpZy5yb3RhdGUueSArICdkZWcpJztcbiAgICAgICAgICB0cmFuc2Zvcm0udGFyZ2V0ICArPSAnIHJvdGF0ZVkoMCknO1xuICAgICAgICB9XG4gICAgICAgIGlmICggY29uZmlnLnJvdGF0ZS56ICkge1xuICAgICAgICAgIHRyYW5zZm9ybS5pbml0aWFsICs9ICcgcm90YXRlWignICsgY29uZmlnLnJvdGF0ZS56ICsgJ2RlZyknO1xuICAgICAgICAgIHRyYW5zZm9ybS50YXJnZXQgICs9ICcgcm90YXRlWigwKSc7XG4gICAgICAgIH1cbiAgICAgICAgdHJhbnNmb3JtLmluaXRpYWwgKz0gJzsgb3BhY2l0eTogJyArIGNvbmZpZy5vcGFjaXR5ICsgJzsnO1xuICAgICAgICB0cmFuc2Zvcm0udGFyZ2V0ICArPSAnOyBvcGFjaXR5OiAnICsgZWxlbS5zdHlsZXMuY29tcHV0ZWQub3BhY2l0eSArICc7JztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgU2Nyb2xsUmV2ZWFsLnByb3RvdHlwZS51cGRhdGVTdG9yZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IGVsZW0uY29uZmlnLmNvbnRhaW5lcjtcbiAgICAgIGlmICggY29udGFpbmVyICYmIHNyLnN0b3JlLmNvbnRhaW5lcnMuaW5kZXhPZiggY29udGFpbmVyICkgPT0gLTEgKSB7XG4gICAgICAgIHNyLnN0b3JlLmNvbnRhaW5lcnMucHVzaCggZWxlbS5jb25maWcuY29udGFpbmVyICk7XG4gICAgICB9XG4gICAgICBzci5zdG9yZS5lbGVtZW50c1sgZWxlbS5pZCBdID0gZWxlbTtcbiAgICB9O1xuXG4gICAgU2Nyb2xsUmV2ZWFsLnByb3RvdHlwZS5yZWNvcmQgPSBmdW5jdGlvbiggc2VsZWN0b3IsIGNvbmZpZyApIHtcbiAgICAgIHZhciByZWNvcmQgPSB7XG4gICAgICAgIHNlbGVjdG9yIDogc2VsZWN0b3IsXG4gICAgICAgIGNvbmZpZyAgIDogY29uZmlnXG4gICAgICB9O1xuICAgICAgc3IuaGlzdG9yeS5wdXNoKCByZWNvcmQgKTtcbiAgICB9O1xuXG4gICAgU2Nyb2xsUmV2ZWFsLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBzci5hbmltYXRlKCk7XG4gICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBzci5zdG9yZS5jb250YWluZXJzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICBzci5zdG9yZS5jb250YWluZXJzWyBpIF0uYWRkRXZlbnRMaXN0ZW5lciggJ3Njcm9sbCcsIHNyLmhhbmRsZXIgKTtcbiAgICAgICAgc3Iuc3RvcmUuY29udGFpbmVyc1sgaSBdLmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCBzci5oYW5kbGVyICk7XG4gICAgICB9XG4gICAgICBpZiAoICFzci5pbml0aWFsaXplZCApIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCBzci5oYW5kbGVyICk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgc3IuaGFuZGxlciApO1xuICAgICAgICBzci5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3I7XG4gICAgfTtcblxuICAgIFNjcm9sbFJldmVhbC5wcm90b3R5cGUuaGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCAhc3IucnVubmluZyApIHtcbiAgICAgICAgX3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe1xuICAgICAgICAgIHNyLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgIHNyLmFuaW1hdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFNjcm9sbFJldmVhbC5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsZW0sIHZpc2libGU7XG5cbiAgICAgIHNyLnRvb2xzLmZvck93biggc3Iuc3RvcmUuZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtSWQgKSB7XG4gICAgICAgIGVsZW0gICAgPSBzci5zdG9yZS5lbGVtZW50c1sgZWxlbUlkIF07XG4gICAgICAgIHZpc2libGUgPSBzci5pc0VsZW1WaXNpYmxlKCBlbGVtICk7XG4gICAgICAgIGlmICggdmlzaWJsZSAmJiAhZWxlbS5yZXZlYWxlZCApIHtcblxuICAgICAgICAgIGlmICggZWxlbS5jb25maWcudXNlRGVsYXkgPT09ICdhbHdheXMnXG4gICAgICAgICAgfHwgKCBlbGVtLmNvbmZpZy51c2VEZWxheSA9PT0gJ29ubG9hZCcgJiYgIXNyLmluaXRpYWxpemVkIClcbiAgICAgICAgICB8fCAoIGVsZW0uY29uZmlnLnVzZURlbGF5ID09PSAnb25jZScgICAmJiAhZWxlbS5zZWVuICkgKSB7XG4gICAgICAgICAgICBlbGVtLmRvbUVsLnNldEF0dHJpYnV0ZSggJ3N0eWxlJyxcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlcy5pbmxpbmVcbiAgICAgICAgICAgICAgKyBlbGVtLnN0eWxlcy50cmFuc2Zvcm0udGFyZ2V0XG4gICAgICAgICAgICAgICsgZWxlbS5zdHlsZXMudHJhbnNpdGlvbi5kZWxheWVkXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtLmRvbUVsLnNldEF0dHJpYnV0ZSggJ3N0eWxlJyxcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlcy5pbmxpbmVcbiAgICAgICAgICAgICAgKyBlbGVtLnN0eWxlcy50cmFuc2Zvcm0udGFyZ2V0XG4gICAgICAgICAgICAgICsgZWxlbS5zdHlsZXMudHJhbnNpdGlvbi5pbnN0YW50XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbGVtLnNlZW4gPSB0cnVlO1xuICAgICAgICAgIHF1ZXVlQ2FsbGJhY2soICdyZXZlYWwnLCBlbGVtICk7XG5cbiAgICAgICAgfSBlbHNlIGlmICggIXZpc2libGUgJiYgZWxlbS5jb25maWcucmVzZXQgJiYgZWxlbS5yZXZlYWxlZCApIHtcbiAgICAgICAgICBlbGVtLmRvbUVsLnNldEF0dHJpYnV0ZSggJ3N0eWxlJyxcbiAgICAgICAgICAgICAgZWxlbS5zdHlsZXMuaW5saW5lXG4gICAgICAgICAgICArIGVsZW0uc3R5bGVzLnRyYW5zZm9ybS5pbml0aWFsXG4gICAgICAgICAgICArIGVsZW0uc3R5bGVzLnRyYW5zaXRpb24uaW5zdGFudFxuICAgICAgICAgICk7XG4gICAgICAgICAgcXVldWVDYWxsYmFjayggJ3Jlc2V0JywgZWxlbSApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc3IucnVubmluZyA9IGZhbHNlO1xuXG4gICAgICBmdW5jdGlvbiBxdWV1ZUNhbGxiYWNrKCB0eXBlLCBlbGVtICkge1xuICAgICAgICB2YXIgZWxhcHNlZCAgPSAwO1xuICAgICAgICB2YXIgZHVyYXRpb24gPSAwO1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSAnYWZ0ZXInO1xuXG4gICAgICAgIHN3aXRjaCAoIHR5cGUgKSB7XG4gICAgICAgICAgY2FzZSAncmV2ZWFsJzpcbiAgICAgICAgICAgIGR1cmF0aW9uID0gZWxlbS5jb25maWcuZHVyYXRpb24gKyBlbGVtLmNvbmZpZy5kZWxheTtcbiAgICAgICAgICAgIGNhbGxiYWNrICs9ICdSZXZlYWwnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncmVzZXQnOlxuICAgICAgICAgICAgZHVyYXRpb24gPSBlbGVtLmNvbmZpZy5kdXJhdGlvbjtcbiAgICAgICAgICAgIGNhbGxiYWNrICs9ICdSZXNldCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggZWxlbS50aW1lciApIHtcbiAgICAgICAgICBlbGFwc2VkID0gTWF0aC5hYnMoIGVsZW0udGltZXIuc3RhcnRlZCAtIG5ldyBEYXRlKCkgKTtcbiAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KCBlbGVtLnRpbWVyLmNsb2NrICk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtLnRpbWVyID0geyBzdGFydGVkOiBuZXcgRGF0ZSgpIH07XG5cbiAgICAgICAgZWxlbS50aW1lci5jbG9jayA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGVsZW0uY29uZmlnWyBjYWxsYmFjayBdKCBlbGVtLmRvbUVsICk7XG4gICAgICAgICAgZWxlbS50aW1lciA9IG51bGw7XG4gICAgICAgIH0sIGR1cmF0aW9uIC0gZWxhcHNlZCApO1xuICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ3JldmVhbCcgPyBlbGVtLnJldmVhbGVkID0gdHJ1ZSA6IGVsZW0ucmV2ZWFsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgU2Nyb2xsUmV2ZWFsLnByb3RvdHlwZS5nZXRDb250YWluZXIgPSBmdW5jdGlvbiggY29udGFpbmVyICkge1xuICAgICAgaWYgKCAhY29udGFpbmVyICkge1xuICAgICAgICBjb250YWluZXIgPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgfVxuICAgICAgdmFyIHcgPSBjb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgICB2YXIgaCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogIHcsXG4gICAgICAgIGhlaWdodDogaFxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgU2Nyb2xsUmV2ZWFsLnByb3RvdHlwZS5nZXRTY3JvbGxlZCA9IGZ1bmN0aW9uKCBjb250YWluZXIgKSB7XG4gICAgICBpZiAoICFjb250YWluZXIgKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgIHk6IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG9mZnNldCA9IHNyLmdldE9mZnNldCggY29udGFpbmVyICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeDogY29udGFpbmVyLnNjcm9sbExlZnQgKyBvZmZzZXQubGVmdCxcbiAgICAgICAgICB5OiBjb250YWluZXIuc2Nyb2xsVG9wICArIG9mZnNldC50b3BcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgU2Nyb2xsUmV2ZWFsLnByb3RvdHlwZS5nZXRPZmZzZXQgPSBmdW5jdGlvbiggZG9tRWwgKSB7XG4gICAgICB2YXIgb2Zmc2V0VG9wICAgID0gMDtcbiAgICAgIHZhciBvZmZzZXRMZWZ0ICAgPSAwO1xuICAgICAgdmFyIG9mZnNldEhlaWdodCA9IGRvbUVsLm9mZnNldEhlaWdodDtcbiAgICAgIHZhciBvZmZzZXRXaWR0aCAgPSBkb21FbC5vZmZzZXRXaWR0aDtcblxuICAgICAgZG8ge1xuICAgICAgICBpZiAoICFpc05hTiggZG9tRWwub2Zmc2V0VG9wICkgKSB7XG4gICAgICAgICAgb2Zmc2V0VG9wICs9IGRvbUVsLm9mZnNldFRvcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICFpc05hTiggZG9tRWwub2Zmc2V0TGVmdCApICkge1xuICAgICAgICAgIG9mZnNldExlZnQgKz0gZG9tRWwub2Zmc2V0TGVmdDtcbiAgICAgICAgfVxuICAgICAgfSB3aGlsZSAoIGRvbUVsID0gZG9tRWwub2Zmc2V0UGFyZW50ICk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcCAgICA6IG9mZnNldFRvcCxcbiAgICAgICAgbGVmdCAgIDogb2Zmc2V0TGVmdCxcbiAgICAgICAgaGVpZ2h0IDogb2Zmc2V0SGVpZ2h0LFxuICAgICAgICB3aWR0aCAgOiBvZmZzZXRXaWR0aFxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgU2Nyb2xsUmV2ZWFsLnByb3RvdHlwZS5pc0VsZW1WaXNpYmxlID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICB2YXIgb2Zmc2V0ICAgICA9IHNyLmdldE9mZnNldCggZWxlbS5kb21FbCApO1xuICAgICAgdmFyIGNvbnRhaW5lciAgPSBzci5nZXRDb250YWluZXIoIGVsZW0uY29uZmlnLmNvbnRhaW5lciApO1xuICAgICAgdmFyIHNjcm9sbGVkICAgPSBzci5nZXRTY3JvbGxlZCggZWxlbS5jb25maWcuY29udGFpbmVyICk7XG4gICAgICB2YXIgdkYgICAgICAgICA9IGVsZW0uY29uZmlnLnZpZXdGYWN0b3I7XG5cbiAgICAgIHZhciBlbGVtSGVpZ2h0ID0gb2Zmc2V0LmhlaWdodDtcbiAgICAgIHZhciBlbGVtV2lkdGggID0gb2Zmc2V0LndpZHRoO1xuICAgICAgdmFyIGVsZW1Ub3AgICAgPSBvZmZzZXQudG9wO1xuICAgICAgdmFyIGVsZW1MZWZ0ICAgPSBvZmZzZXQubGVmdDtcbiAgICAgIHZhciBlbGVtQm90dG9tID0gZWxlbVRvcCAgKyBlbGVtSGVpZ2h0O1xuICAgICAgdmFyIGVsZW1SaWdodCAgPSBlbGVtTGVmdCArIGVsZW1XaWR0aDtcblxuICAgICAgcmV0dXJuICggY29uZmlybUJvdW5kcygpIHx8IGlzUG9zaXRpb25GaXhlZCgpICk7XG5cbiAgICAgIGZ1bmN0aW9uIGNvbmZpcm1Cb3VuZHMoKSB7XG4gICAgICAgIHZhciB0b3AgICAgICAgID0gZWxlbVRvcCAgICArIGVsZW1IZWlnaHQgKiB2RjtcbiAgICAgICAgdmFyIGxlZnQgICAgICAgPSBlbGVtTGVmdCAgICsgZWxlbVdpZHRoICAqIHZGO1xuICAgICAgICB2YXIgYm90dG9tICAgICA9IGVsZW1Cb3R0b20gLSBlbGVtSGVpZ2h0ICogdkY7XG4gICAgICAgIHZhciByaWdodCAgICAgID0gZWxlbVJpZ2h0ICAtIGVsZW1XaWR0aCAgKiB2RjtcblxuICAgICAgICB2YXIgdmlld1RvcCAgICA9IHNjcm9sbGVkLnkgKyBlbGVtLmNvbmZpZy52aWV3T2Zmc2V0LnRvcDtcbiAgICAgICAgdmFyIHZpZXdMZWZ0ICAgPSBzY3JvbGxlZC54ICsgZWxlbS5jb25maWcudmlld09mZnNldC5sZWZ0O1xuICAgICAgICB2YXIgdmlld0JvdHRvbSA9IHNjcm9sbGVkLnkgLSBlbGVtLmNvbmZpZy52aWV3T2Zmc2V0LmJvdHRvbSArIGNvbnRhaW5lci5oZWlnaHQ7XG4gICAgICAgIHZhciB2aWV3UmlnaHQgID0gc2Nyb2xsZWQueCAtIGVsZW0uY29uZmlnLnZpZXdPZmZzZXQucmlnaHQgICsgY29udGFpbmVyLndpZHRoO1xuXG4gICAgICAgIHJldHVybiAoIHRvcCAgICA8IHZpZXdCb3R0b20gKVxuICAgICAgICAgICAgJiYgKCBib3R0b20gPiB2aWV3VG9wICAgIClcbiAgICAgICAgICAgICYmICggbGVmdCAgID4gdmlld0xlZnQgICApXG4gICAgICAgICAgICAmJiAoIHJpZ2h0ICA8IHZpZXdSaWdodCAgKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaXNQb3NpdGlvbkZpeGVkKCkge1xuICAgICAgICByZXR1cm4gKCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggZWxlbS5kb21FbCApLnBvc2l0aW9uID09PSAnZml4ZWQnICk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFNjcm9sbFJldmVhbC5wcm90b3R5cGUuc3luYyA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCBzci5oaXN0b3J5Lmxlbmd0aCApIHtcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgc3IuaGlzdG9yeS5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gc3IuaGlzdG9yeVsgaSBdO1xuICAgICAgICAgIHNyLnJldmVhbCggcmVjb3JkLnNlbGVjdG9yLCByZWNvcmQuY29uZmlnLCB0cnVlICk7XG4gICAgICAgIH07XG4gICAgICAgIHNyLmluaXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2Fybignc3luYygpIGZhaWxlZDogbm8gcmV2ZWFscyBmb3VuZC4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzcjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNjcm9sbFJldmVhbDtcblxuICB9KSgpO1xuXG4gIHZhciBUb29scyA9IChmdW5jdGlvbigpIHtcblxuICAgIFRvb2xzLnByb3RvdHlwZS5pc09iamVjdCA9IGZ1bmN0aW9uKCBvYmplY3QgKSB7XG4gICAgICByZXR1cm4gb2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdC5jb25zdHJ1Y3RvciA9PSBPYmplY3Q7XG4gICAgfTtcblxuICAgIFRvb2xzLnByb3RvdHlwZS5mb3JPd24gPSBmdW5jdGlvbiggb2JqZWN0LCBjYWxsYmFjayApIHtcbiAgICAgIGlmICggIXRoaXMuaXNPYmplY3QoIG9iamVjdCApICkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcXCdvYmplY3RcXCcsIGJ1dCByZWNlaXZlZCBcXCcnICsgdHlwZW9mIG9iamVjdCArICdcXCcuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKCB2YXIgcHJvcGVydHkgaW4gb2JqZWN0ICkge1xuICAgICAgICAgIGlmICggb2JqZWN0Lmhhc093blByb3BlcnR5KCBwcm9wZXJ0eSApICkge1xuICAgICAgICAgICAgY2FsbGJhY2soIHByb3BlcnR5ICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIFRvb2xzLnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiggdGFyZ2V0LCBzb3VyY2UgKSB7XG4gICAgICB0aGlzLmZvck93biggc291cmNlLCBmdW5jdGlvbiggcHJvcGVydHkgKSB7XG4gICAgICAgIGlmICggdGhpcy5pc09iamVjdCggc291cmNlWyBwcm9wZXJ0eSBdICkgKSB7XG4gICAgICAgICAgaWYgKCAhdGFyZ2V0WyBwcm9wZXJ0eSBdIHx8ICF0aGlzLmlzT2JqZWN0KCB0YXJnZXRbIHByb3BlcnR5IF0gKSApIHtcbiAgICAgICAgICAgIHRhcmdldFsgcHJvcGVydHkgXSA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmV4dGVuZCggdGFyZ2V0WyBwcm9wZXJ0eSBdLCBzb3VyY2VbIHByb3BlcnR5IF0gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRbIHByb3BlcnR5IF0gPSBzb3VyY2VbIHByb3BlcnR5IF07XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCggdGhpcyApKTtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcblxuICAgIFRvb2xzLnByb3RvdHlwZS5leHRlbmRDbG9uZSA9IGZ1bmN0aW9uKCB0YXJnZXQsIHNvdXJjZSApIHtcbiAgICAgIHJldHVybiB0aGlzLmV4dGVuZCggdGhpcy5leHRlbmQoIHt9LCB0YXJnZXQgKSwgc291cmNlICk7XG4gICAgfTtcblxuICAgIFRvb2xzLnByb3RvdHlwZS5pc01vYmlsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCApO1xuICAgIH07XG5cbiAgICBUb29scy5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiggZmVhdHVyZSApIHtcbiAgICAgIHZhciBzZW5zb3IgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZW5zb3InKTtcbiAgICAgIHZhciBjc3NQcmVmaXggPSAnV2Via2l0LE1veixPLCcuc3BsaXQoJywnKTtcbiAgICAgIHZhciB0ZXN0cyAgICAgPSAoIGZlYXR1cmUgKyBjc3NQcmVmaXguam9pbiggZmVhdHVyZSArICcsJyApICkuc3BsaXQoJywnKTtcblxuICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgdGVzdHMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgIGlmICggIXNlbnNvci5zdHlsZVsgdGVzdHNbIGkgXSBdID09PSAnJyApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBUb29scygpIHt9O1xuICAgIHJldHVybiBUb29scztcblxuICB9KSgpO1xuXG4gIHZhciBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG59KS5jYWxsKCB0aGlzICk7XG5cbnJldHVybiB0aGlzLlNjcm9sbFJldmVhbDtcblxufSkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc2Nyb2xscmV2ZWFsL2Rpc3Qvc2Nyb2xscmV2ZWFsLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==