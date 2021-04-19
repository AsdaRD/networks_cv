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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

document.addEventListener("DOMContentLoaded", function (event) {
  AOS.init();
});
var menu_link = document.querySelectorAll('.header__sidebar-link');
var menu_btn = document.querySelector('.header__sidebar-btn');
var btn_img = document.querySelector('.header__sidebar__img');
var modal_bar = document.querySelector('.header__sidebar');
menu_btn.addEventListener('click', function () {
  if (!modal_bar.classList.contains('header__sidebar__active')) {
    btn_img.classList.add('header__sidebar__img-active');
    modal_bar.classList.add('header__sidebar__active');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = menu_link[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var link = _step.value;

        link.classList.add('header__sidebar-link__active');
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } else {
    btn_img.classList.remove('header__sidebar__img-active');
    modal_bar.classList.remove('header__sidebar__active');
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = menu_link[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _link = _step2.value;

        _link.classList.remove('header__sidebar-link__active');
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }
});

var header = document.querySelector('.header__container');
var team_header = document.querySelector('.team__header');
var projects_header = document.querySelector('.projects__header');
var banners = document.querySelectorAll('.banner');

var nav_team_links = document.querySelectorAll('.nav-link-team');
var nav_projects_links = document.querySelectorAll('.nav-link-projects');
var nav_about_us_links = document.querySelectorAll('.nav-link-about_us');

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = nav_team_links[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var nav_team = _step3.value;

    nav_team.addEventListener('click', function () {
      window.scrollTo(0, team_header.offsetTop - header.offsetHeight);
    });
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3.return) {
      _iterator3.return();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
  for (var _iterator4 = nav_projects_links[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
    var nav_projects = _step4.value;

    nav_projects.addEventListener('click', function () {
      window.scrollTo(0, projects_header.offsetTop - header.offsetHeight);
    });
  }
} catch (err) {
  _didIteratorError4 = true;
  _iteratorError4 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion4 && _iterator4.return) {
      _iterator4.return();
    }
  } finally {
    if (_didIteratorError4) {
      throw _iteratorError4;
    }
  }
}

var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
  for (var _iterator5 = nav_about_us_links[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
    var nav_about_us = _step5.value;

    nav_about_us.addEventListener('click', function () {});
  }
} catch (err) {
  _didIteratorError5 = true;
  _iteratorError5 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion5 && _iterator5.return) {
      _iterator5.return();
    }
  } finally {
    if (_didIteratorError5) {
      throw _iteratorError5;
    }
  }
}

var _iteratorNormalCompletion6 = true;
var _didIteratorError6 = false;
var _iteratorError6 = undefined;

try {
  for (var _iterator6 = banners[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
    var banner = _step6.value;

    banner.addEventListener('click', function () {
      window.scrollTo(0, 0);
    });
  }
} catch (err) {
  _didIteratorError6 = true;
  _iteratorError6 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion6 && _iterator6.return) {
      _iterator6.return();
    }
  } finally {
    if (_didIteratorError6) {
      throw _iteratorError6;
    }
  }
}

/***/ })
/******/ ]);