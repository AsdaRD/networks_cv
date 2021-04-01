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
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
/******/ })
/************************************************************************/
/******/ ({

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72);


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(73);

var _comment_pattern = __webpack_require__(74);

var comment = new _comment_pattern.Comment();

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Comment = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import './comment_pattern.scss'


var _comments = __webpack_require__(75);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Comment = exports.Comment = function () {
    function Comment() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');

        _classCallCheck(this, Comment);

        this._target = target;
        this._tasks = [];
        this.render();
        this.fetchData();
    }

    _createClass(Comment, [{
        key: 'renderList',
        value: function renderList() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this._tasks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var task = _step.value;
                    // MODEL
                    // console.log(task);
                    this._api = new _comments.Comments_list(this._list, task.author, task.text, task.date);
                    console.log(this._api);
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
        }
    }, {
        key: 'fetchData',
        value: function fetchData() {
            var _this = this;

            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://asda-osi.github.io/webpackcfg/build/STRINGLIFYHW');
            xhr.send();

            var stateChangeHandler = function stateChangeHandler() {
                if (xhr.readyState === 4) {
                    if (xhr.status !== 200) {
                        console.error('smth is wrong');
                        return;
                    }
                    _this._tasks = JSON.parse(xhr.response);
                    _this.renderList();
                }
            };
            xhr.addEventListener('readystatechange', stateChangeHandler);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            this._root = document.createElement('div');
            this._form = document.createElement('form');
            this._author = document.createElement('input');
            this._comment_area = document.createElement('textarea');
            this._submit_button = document.createElement('button');
            this._bold = document.createElement('b');
            this._list = document.createElement('ul');

            this._author.type = 'text';
            this._author.placeholder = 'Name...';
            this._comment_area.placeholder = 'Lorem...';
            this._bold.textContent = 'Add comment';

            this._root.classList.add('comment');
            this._form.classList.add('comment__form');
            this._author.classList.add('comment__author');
            this._comment_area.classList.add('comment__area');
            this._submit_button.classList.add('comment__submit');
            this._list.classList.add('comment__list');

            this._form.appendChild(this._author);
            this._form.appendChild(this._comment_area);
            this._form.appendChild(this._submit_button);
            this._submit_button.appendChild(this._bold);
            this._root.appendChild(this._form);
            this._root.appendChild(this._list);
            this._target.appendChild(this._root);

            this._form.addEventListener('submit', function (eventObject) {
                eventObject.preventDefault();
                if (_this2._author.value !== '' && _this2._comment_area.value !== '') {
                    _this2._comments_list = new _comments.Comments_list(_this2._list, _this2._author.value, _this2._comment_area.value);
                    _this2._author.value = '';
                    _this2._comment_area.value = '';
                }
            });
        }
    }]);

    return Comment;
}();

;

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Comments_list = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _date = __webpack_require__(76);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Comments_list = exports.Comments_list = function () {
    function Comments_list() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');
        var header_content = arguments[1];
        var comment_content = arguments[2];
        var date = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new _date.DateCR().full_date;

        _classCallCheck(this, Comments_list);

        this._target = target;
        this._header_content = header_content;
        this._comment_content = comment_content;
        this._date = date;
        this.render();
    }

    _createClass(Comments_list, [{
        key: 'render',
        value: function render() {
            this._elem = document.createElement('li');
            this._elem_header = document.createElement('h2');
            this._elem_content = document.createElement('h3');
            this._elem_date = document.createElement('h3');

            this._elem.classList.add('comment__list__elem');
            this._elem_header.classList.add('comment__list__elem__header');
            this._elem_content.classList.add('comment__list__elem__content');
            this._elem_date.classList.add('comment__list__elem__date');

            this._elem_date.textContent = this._date;
            this._elem_header.textContent = this._header_content;
            this._elem_content.textContent = this._comment_content;

            this._elem.appendChild(this._elem_header);
            this._elem.appendChild(this._elem_content);
            this._elem.appendChild(this._elem_date);
            this._target.appendChild(this._elem);
        }
    }]);

    return Comments_list;
}();

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateCR = exports.DateCR = function DateCR() {
    _classCallCheck(this, DateCR);

    this.date = new Date();
    this.day = this.date.getDate();
    this.month = this.date.getMonth();
    this.year = this.date.getFullYear();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    if (this.hours < 10 && this.minutes < 10) {
        this.full_date = this.day + "." + this.month + "." + this.year + " in 0" + this.hours + ":0" + this.minutes;
    } else if (this.hours < 10 && this.minutes > 10) {
        this.full_date = this.day + "." + this.month + "." + this.year + " in 0" + this.hours + ":" + this.minutes;
    } else if (this.hours > 10 && this.minutes < 10) {
        this.full_date = this.day + "." + this.month + "." + this.year + " in " + this.hours + ":0" + this.minutes;
    } else {
        this.full_date = this.day + "." + this.month + "." + this.year + " in " + this.hours + ":" + this.minutes;
    }
};

/***/ })

/******/ });