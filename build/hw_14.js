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
/******/ 	return __webpack_require__(__webpack_require__.s = 429);
/******/ })
/************************************************************************/
/******/ ({

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(430);


/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(431);

/*import { SortingCategory } from './scripts/sorting_category';*/

function dropDownMenu() {
	var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');

	var menu = document.createElement('div');
	var button = document.createElement('button');
	var list = document.createElement('ul');

	menu.classList.add('menu');
	button.classList.add('menu__btn');
	list.classList.add('menu__category_list');

	button.textContent = 'Sort by';

	menu.appendChild(button);
	menu.appendChild(list);
	/*	list.appendChild(SortingCategory());*/
	target.appendChild(menu);
}
dropDownMenu();
/*
new SortingCategory(undefined, 'Name');
new SortingCategory(undefined, 'Date');
new SortingCategory(undefined, 'Price');
new SortingCategory(undefined, 'Size');
*/

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });