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
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(50);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Button = exports.Button = function () {
    function Button() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');
        var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var onClick = arguments[2];

        _classCallCheck(this, Button);

        this._target = target;
        this._title = title;
        this._onClick = onClick;
        this.render();
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var _this = this;

            this._button = document.createElement('button');
            this._button.classList.add('btn');
            this._button.innerHTML = '<span>' + this._title + '</span>';

            if (this._onClick) {
                this._button.addEventListener('click', function (e) {
                    _this._onClick(e);
                });
            }

            this._target.appendChild(this._button);
        }
    }]);

    return Button;
}();

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(48);


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(49);

var _button = __webpack_require__(4);

var _modal = __webpack_require__(51);

var modalWindow = new _modal.Modal();
window.modalWindow = modalWindow;

var _loop = function _loop(i) {
    var btn = new _button.Button(undefined, 'Button ' + i, function () {
        modalWindow.show('<h2>Hello from button ' + i + '</h2>');
    });
};

for (var i = 0; i < 5; i++) {
    _loop(i);
}

new _button.Button(undefined, 'Show alert', function () {
    return alert('Do you like OOD?');
});

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Modal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _button = __webpack_require__(4);

__webpack_require__(52);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = exports.Modal = function () {
    function Modal() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');

        _classCallCheck(this, Modal);

        this._target = target;
        this._render();
    }

    _createClass(Modal, [{
        key: '_render',
        value: function _render() {
            var _this = this;

            this._modalOutlet = document.createElement('div');
            this._content = document.createElement('div');

            this._modalOutlet.classList.add('modal__outlet');
            this._content.classList.add('modal__content');

            this._modalOutlet.appendChild(this._content);
            this._target.appendChild(this._modalOutlet);
            this._closeButton = new _button.Button(this._modalOutlet, 'CLOSE', function () {
                return _this.hide();
            });
        }
    }, {
        key: 'show',
        value: function show(content) {
            this._modalOutlet.classList.add('modal__outlet_active');
            this._content.innerHTML = content;
        }
    }, {
        key: 'hide',
        value: function hide() {
            this._modalOutlet.classList.remove('modal__outlet_active');
        }
    }]);

    return Modal;
}();

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });