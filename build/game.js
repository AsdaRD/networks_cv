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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/0c4e9ed56c34071cd30b6338c918130f.png";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Car = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = exports.Car = function () {
    function Car() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');

        _classCallCheck(this, Car);

        this._target = target;
        this.render();
    }

    _createClass(Car, [{
        key: 'render',
        value: function render() {
            this._container = document.createElement('div');
            this._container.classList.add('car__container');
            this._image = document.createElement('img');
            this._image.src = __webpack_require__(0);
            this._image.classList.add('car');
            this._target.appendChild(this._container);
            this._container.appendChild(this._image);
        }
    }]);

    return Car;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _car = __webpack_require__(13);

var _controller = __webpack_require__(14);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');
        var players = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

        _classCallCheck(this, Game);

        this._target = target;
        this._players = players;
        this._render();
    }

    _createClass(Game, [{
        key: '_render',
        value: function _render() {
            for (var i = 0; i < this._players; i++) {
                this._field = document.createElement('div');

                this._car = new _car.Car(20, this._field);
                this._controller = new _controller.Controller(this._car, this._field);

                this._target.appendChild(this._field);
            }
        }
    }]);

    return Game;
}();

var myGame = new Game();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Car = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hotWheelsTransparentThumb = __webpack_require__(0);

var _hotWheelsTransparentThumb2 = _interopRequireDefault(_hotWheelsTransparentThumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = exports.Car = function () {
    function Car() {
        var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
        var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.querySelector('body');

        _classCallCheck(this, Car);

        this._speed = speed;
        this._target = target;
        this._currentCoordinates = {
            x: 0,
            y: 0
        };
        this._render();
    }

    _createClass(Car, [{
        key: '_render',
        value: function _render() {
            this._img = document.createElement('img');
            this._track = document.createElement('div');
            this._img.src = _hotWheelsTransparentThumb2.default;
            this._img.style.position = 'relative';
            this._img.style.transition = 'all 200ms';
            this._track.appendChild(this._img);
            this._target.appendChild(this._track);
        }
    }, {
        key: 'moveRight',
        value: function moveRight() {
            this._currentCoordinates.x += this._speed;
            this._img.style.transform = 'translateX(' + this._currentCoordinates.x + 'px)';
        }
    }, {
        key: 'moveLeft',
        value: function moveLeft() {
            this._currentCoordinates.x -= this._speed;
            this._img.style.transform = 'translateX(' + this._currentCoordinates.x + 'px)';
        }
    }]);

    return Car;
}();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Controller = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _car = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = exports.Controller = function () {
    function Controller() {
        var car = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _car.Car();
        var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.querySelector('body');

        _classCallCheck(this, Controller);

        this._target = target;
        this._car = car;
        this._render();
    }

    _createClass(Controller, [{
        key: '_render',
        value: function _render() {
            var _this = this;

            this._leftBtn = document.createElement('button');
            this._rightBtn = document.createElement('button');

            this._leftBtn.textContent = 'left';
            this._rightBtn.textContent = 'right';

            this._leftBtn.addEventListener('click', function () {
                return _this._car.moveLeft();
            });
            this._rightBtn.addEventListener('click', function () {
                return _this._car.moveRight();
            });

            this._target.appendChild(this._leftBtn);
            this._target.appendChild(this._rightBtn);
        }
    }]);

    return Controller;
}();

/***/ })
/******/ ]);