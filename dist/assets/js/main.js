var mainModule =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global alert */
$(document).ready(function () {
  var _$$owlCarousel;

  $('.counter').counterUp({
    time: 2900
  });
  $("#clients-slider").owlCarousel((_$$owlCarousel = {
    loop: true,
    margin: 40,
    dots: true,
    nav: true,
    items: 2,
    responsiveClass: false
  }, _defineProperty(_$$owlCarousel, "nav", true), _defineProperty(_$$owlCarousel, "responsive", {
    0: {
      items: 1,
      nav: false
    },
    680: {
      items: 1,
      nav: false,
      loop: false
    },
    1000: {
      items: 2,
      nav: true
    }
  }), _$$owlCarousel));
  $("#datepicker").datepicker(); // thumnail-slider

  var image = $(".slide img");
  image.each(function (i) {
    var container = $(".singnal-slider ul");
    var imageUrl = image[i].src;
    container.append(getimage(imageUrl));
  });
  $("nav li img", this).click(function () {
    var nav = $(this);
    var url = nav.attr("src");
    image.attr("src", url);
  });

  function getimage(imageUrl) {
    return '<li><img src=" ' + imageUrl + ' " alt=""></li>';
  } //faq


  var accordionItem = document.querySelectorAll(".accordion-item");
  accordionItem.forEach(function (el) {
    return el.addEventListener("click", function () {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      } else {
        accordionItem.forEach(function (el2) {
          return el2.classList.remove("active");
        });
        el.classList.add("active");
      }
    });
  });
});

(function ($) {
  $.fn.countdown = function (options, callback) {
    //custom 'this' selector
    thisEl = $(this); // array of custom settings

    var settings = {
      date: null,
      format: null
    }; // append the settings array to options

    if (options) {
      $.extend(settings, options);
    } //create the countdown processing function


    function countdown_proc() {
      var eventDate = Date.parse(settings.date) / 1000;
      var currentDate = Math.floor($.now() / 1000);

      if (eventDate <= currentDate) {
        callback.call(this);
        clearInterval(interval);
      }

      var seconds = eventDate - currentDate;
      var days = Math.floor(seconds / (60 * 60 * 24)); //calculate the number of days

      seconds -= days * 60 * 60 * 24; //update the seconds variable with number of days removed

      var hours = Math.floor(seconds / (60 * 60));
      seconds -= hours * 60 * 60; //update the seconds variable with number of hours removed

      var minutes = Math.floor(seconds / 60);
      seconds -= minutes * 60; //update the seconds variable with number of minutes removed
      //conditional statements

      if (days == 1) {
        thisEl.find(".time-days").text("day");
      } else {
        thisEl.find(".time-days").text("days");
      }

      if (hours == 1) {
        thisEl.find(".time-hours").text("hour");
      } else {
        thisEl.find(".time-hours").text("hours");
      }

      if (minutes == 1) {
        thisEl.find(".time-minutes").text("minute");
      } else {
        thisEl.find(".time-minutes").text("minutes");
      }

      if (seconds == 1) {
        thisEl.find(".time-seconds").text("second");
      } else {
        thisEl.find(".time-seconds").text("seconds");
      } //logic for the two_digits ON setting


      if (settings.format == "on") {
        days = String(days).length >= 2 ? days : "0" + days;
        hours = String(hours).length >= 2 ? hours : "0" + hours;
        minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
        seconds = String(seconds).length >= 2 ? seconds : "0" + seconds;
      } //update the countdown's html values.


      thisEl.find(".days").text(days);
      thisEl.find(".hours").text(hours);
      thisEl.find(".minutes").text(minutes);
      thisEl.find(".seconds").text(seconds);
    } //run the function


    countdown_proc(); //loop the function

    interval = setInterval(countdown_proc, 1000);
  };

  $("#countdown").countdown({
    date: "1 January 2022 12:00:00",
    format: "on"
  }, function () {
    // This will run when the countdown ends
    alert("We're Out Now");
  });
})(jQuery);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/main */ "./js/main.js");
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_main__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _js_main__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _js_main__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
__webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");



/***/ })

/******/ });
//# sourceMappingURL=main.js.map