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
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
/******/ })
/************************************************************************/
/******/ ({

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(62);


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _comments = __webpack_require__(63);

__webpack_require__(64);

(0, _comments.comments)();

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.comments = comments;
function comments() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');


    var root = document.createElement('div');
    var form = document.createElement('form');
    var name = document.createElement('input');
    var comment_area = document.createElement('textarea');
    var submit = document.createElement('button');
    var ul = document.createElement('ul');

    form.appendChild(name);
    form.appendChild(comment_area);
    form.appendChild(submit);
    root.appendChild(form);
    root.appendChild(ul);
    target.appendChild(root);

    name.type = 'text';
    name.placeholder = 'Name...';
    comment_area.placeholder = 'Lorem...';
    var bold = document.createElement('b');
    submit.appendChild(bold);
    bold.textContent = 'Add comment';

    root.classList.add('list');
    form.classList.add('list__form');
    name.classList.add('list__name');
    comment_area.classList.add('list__comment');
    submit.classList.add('list__submit');
    ul.classList.add('list__ul');

    form.addEventListener('submit', function (eventObject) {
        eventObject.preventDefault();
        renderListItem();
    });

    function renderListItem() {
        var li = document.createElement('li');
        ul.appendChild(li);
        li.classList.add('list__elem');

        var header = document.createElement('h2');
        li.appendChild(header);
        header.classList.add('list__header');
        header.textContent = name.value;

        var comment = document.createElement('h3');
        li.appendChild(comment);
        comment.classList.add('list__submitcomment');
        comment.textContent = comment_area.value;

        name.value = '';
        comment_area.value = '';
        var comment_date = document.createElement('h3');
        comment_date.classList.add('list__date');
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        if (hours < 10 && minutes < 10) {
            comment_date.textContent = day + '.' + month + '.' + year + ' in 0' + hours + ':0' + minutes;
        } else if (hours < 10 && minutes > 10) {
            comment_date.textContent = day + '.' + month + '.' + year + ' in 0' + hours + ':' + minutes;
        } else if (hours > 10 && minutes < 10) {
            comment_date.textContent = day + '.' + month + '.' + year + ' in ' + hours + ':0' + minutes;
        } else {
            comment_date.textContent = day + '.' + month + '.' + year + ' in ' + hours + ':' + minutes;
        }
        li.appendChild(comment_date);
    }
}

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });