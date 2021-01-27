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
/******/ 	return __webpack_require__(__webpack_require__.s = 386);
/******/ })
/************************************************************************/
/******/ ({

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(387);


/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _list = __webpack_require__(388);

var _dropdown = __webpack_require__(391);

var list1 = new _list.List();
var dropDown = new _dropdown.DropDown(document.querySelector('#dropDown'), [{
    title: 'USA'
}, {
    title: 'Canada'
}, {
    title: 'Germany'
}], undefined, function (option) {
    return console.log('SELECTED OPTION:', option);
});

var dropDown2 = new _dropdown.DropDown(document.querySelector('body'), [{
    title: 'English'
}, {
    title: 'Chinease'
}, {
    title: 'Itallian'
}], 'Choose lang', function (option) {
    return console.log('SELECTED OPTION:', option);
});

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.List = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = __webpack_require__(389);

__webpack_require__(390);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var prodURL = 'https://evening-dawn-11092.herokuapp.com/list';
var devURL = 'httplocalhost:6001/list';

var List = exports.List = function () {
    function List() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');

        _classCallCheck(this, List);

        this._target = target;
        this._tasks = []; // COLLECTION
        this._request = new _request.Request();
        this.render();
        this.fetchData();
    }

    _createClass(List, [{
        key: 'onSubmit',
        value: function onSubmit(e) {
            var _this = this;

            e.preventDefault();
            var value = this._input.value;
            var requestData = JSON.stringify({ title: value });

            this._request.post(prodURL, requestData, function (response) {
                var newItem = _this.renderOne(JSON.parse(response));
                _this._ul.appendChild(newItem);
                _this._input.value = '';
            }, function (status, response) {
                alert(response);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            this._form = document.createElement('form');
            this._input = document.createElement('input');
            this._input.type = 'text';
            this._form.appendChild(this._input);
            this._form.addEventListener('submit', function (e) {
                return _this2.onSubmit(e);
            });

            this._ul = document.createElement('ul');
            this._ul.classList.add('todos');
            this._target.appendChild(this._form);
            this._target.appendChild(this._ul);
        }
    }, {
        key: 'renderList',
        value: function renderList() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this._tasks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var task = _step.value;
                    // MODEL
                    console.log(task);
                    var li = this.renderOne(task);
                    this._ul.appendChild(li);
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
        key: 'renderOne',
        value: function renderOne(task) {
            var _this3 = this;

            var li = document.createElement('li');
            var btn = document.createElement('button');
            var span = document.createElement('span');

            var deleteHandler = function deleteHandler() {
                _this3.removeTask(task.id);
                btn.removeEventListener('click', deleteHandler);
            };

            btn.addEventListener('click', function () {
                return deleteHandler();
            });
            btn.textContent = 'delete';

            span.textContent = task.title;

            li.appendChild(span);
            li.appendChild(btn);

            li.id = 'task-' + task.id;

            if (task.completed) {
                li.classList.add('task_completed');
            }

            return li;
        }
    }, {
        key: 'removeTask',
        value: function removeTask(id) {
            var _this4 = this;

            this._request.delete(prodURL, id, function () {
                var removedEl = _this4._ul.querySelector('#task-' + id);

                _this4._ul.removeChild(removedEl);
            });
        }
    }, {
        key: 'fetchData',
        value: function fetchData() {
            var _this5 = this;

            this._request.get(prodURL, function (response) {
                _this5._tasks = JSON.parse(response);
                _this5.renderList();
            }, function (status, response) {
                alert('Something went wrong');
            });
        }
    }]);

    return List;
}();

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Request = exports.Request = function () {
    function Request() {
        _classCallCheck(this, Request);
    }

    _createClass(Request, [{
        key: 'get',

        // callback
        value: function get(url, onSuccess, onError) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.send();

            var stateChangeHandler = function stateChangeHandler() {
                if (xhr.readyState === 4) {
                    if (xhr.status !== 200) {
                        onError(xhr.status, xhr.responseText);
                    }

                    onSuccess(xhr.response);
                }
            };

            xhr.addEventListener('readystatechange', stateChangeHandler);
        }
    }, {
        key: 'post',
        value: function post(url, data, onSuccess, onError) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(data);

            var stateChangeHandler = function stateChangeHandler() {
                if (xhr.readyState === 4) {
                    if (xhr.status !== 200) {
                        onError(xhr.status, xhr.responseText);
                    }
                    onSuccess(xhr.response);
                }
            };

            xhr.addEventListener('readystatechange', stateChangeHandler);
        }
    }, {
        key: 'delete',
        value: function _delete(url, id, onSuccess) {
            var xhr = new XMLHttpRequest();
            xhr.open('DELETE', url + '/' + id);
            xhr.send();

            var stateChangeHandler = function stateChangeHandler() {
                if (xhr.readyState === 4) {
                    if (xhr.status !== 200) {
                        onError(xhr.status, xhr.responseText);
                    }
                    onSuccess();
                }
            };

            xhr.addEventListener('readystatechange', stateChangeHandler);
        }
    }]);

    return Request;
}();

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DropDown = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(392);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DropDown = exports.DropDown = function () {
    function DropDown() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [{ title: 'Hello', value: 'hello' }];
        var placeholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Sort by...';
        var onSelect = arguments[3];

        _classCallCheck(this, DropDown);

        this._target = target;
        this._options = options;
        this.onSelect = onSelect;
        this._placeholder = placeholder;
        this.isOpened = false;
        this.render();
    }

    _createClass(DropDown, [{
        key: 'render',
        value: function render() {
            var _this = this;

            this._button = document.createElement('button');
            this._ul = document.createElement('ul');
            this._root = document.createElement('div');
            this._button.textContent = this._placeholder;

            this._root.classList.add('dropdown');
            this._ul.classList.add('dropdown__list');
            this._button.classList.add('dropdown__control');
            this._button.addEventListener('click', function () {
                return _this.toggle();
            });

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this._options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var option = _step.value;

                    var li = this.renderItem(option);
                    this._ul.appendChild(li);
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

            this._root.appendChild(this._button);
            this._root.appendChild(this._ul);
            this._target.appendChild(this._root);
        }
    }, {
        key: 'renderItem',
        value: function renderItem(option) {
            var _this2 = this;

            var li = document.createElement('li');
            var button = document.createElement('button');
            button.innerHTML = option.title;

            button.addEventListener('click', function () {
                return _this2.selectOption(option);
            });

            li.classList.add('dropdown__item');
            li.appendChild(button);
            return li;
        }
    }, {
        key: 'selectOption',
        value: function selectOption(option) {
            this._button.innerHTML = option.title;
            this.close();
            if (this.onSelect) {
                this.onSelect(option);
            }
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            if (this.isOpened) {
                this.close();
            } else {
                this.open();
            }
        }
    }, {
        key: 'close',
        value: function close() {
            this._root.classList.remove('dropdown_active');
            this.isOpened = false;
        }
    }, {
        key: 'open',
        value: function open() {
            this._root.classList.add('dropdown_active');
            this.isOpened = true;
        }
    }]);

    return DropDown;
}();

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });