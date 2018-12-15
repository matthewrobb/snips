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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _people_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

_people_app__WEBPACK_IMPORTED_MODULE_0__["store"].container = document.body;
_people_app__WEBPACK_IMPORTED_MODULE_0__["store"].addPerson({
  firstName: "Ryan",
  lastName: "McMillan"
});
_people_app__WEBPACK_IMPORTED_MODULE_0__["store"].addPerson({
  firstName: "Kevin",
  lastName: "McCameron"
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var _ui_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


var store = new _store_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
mobx.autorun(function () {
  var container = store.container;

  if (container) {
    m.render(container, m(_ui_app_js__WEBPACK_IMPORTED_MODULE_0__["default"], store));
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _people_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);
  }

  _createClass(App, [{
    key: "view",
    value: function view(_ref) {
      var attrs = _ref.attrs;
      return m(_people_js__WEBPACK_IMPORTED_MODULE_0__["default"], attrs);
    }
  }]);

  return App;
}();
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "People", function() { return People; });
/* harmony import */ var _person_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var People =
/*#__PURE__*/
function () {
  function People() {
    _classCallCheck(this, People);
  }

  _createClass(People, [{
    key: "view",
    value: function view(_ref) {
      var attrs = _ref.attrs;
      var people = attrs.people,
          addPerson = attrs.addPerson;
      return m("div", m("button", {
        onclick: addPerson
      }, "Add Person"), m("ul", people.map(_person_js__WEBPACK_IMPORTED_MODULE_0__["default"].render)));
    }
  }]);

  return People;
}();
/* harmony default export */ __webpack_exports__["default"] = (People);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
/* harmony import */ var _renderable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Person =
/*#__PURE__*/
function (_Renderable) {
  _inherits(Person, _Renderable);

  function Person(vnode) {
    var _this;

    _classCallCheck(this, Person);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Person).apply(this, arguments));

    _this.onInput = function (_ref) {
      var target = _ref.target;
      _this.person[target.name] = target.value;
    };

    _this.person = vnode.attrs;
    return _this;
  }

  _createClass(Person, [{
    key: "view",
    value: function view(vnode) {
      var _vnode$attrs = vnode.attrs,
          firstName = _vnode$attrs.firstName,
          lastName = _vnode$attrs.lastName,
          fullName = _vnode$attrs.fullName;
      return m("li", {
        oninput: this.onInput
      }, m("div", "First Name: ", m("input", {
        name: "firstName",
        value: firstName
      })), m("div", "Last Name: ", m("input", {
        name: "lastName",
        value: lastName
      })), m("div", "Full Name: ", m("input", {
        readonly: true,
        value: fullName
      })));
    }
  }]);

  return Person;
}(_renderable__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Person);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderable", function() { return Renderable; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Renderable =
/*#__PURE__*/
function () {
  function Renderable() {
    _classCallCheck(this, Renderable);
  }

  _createClass(Renderable, null, [{
    key: "render",
    get: function get() {
      var value = m.bind(null, this);
      Object.defineProperty(this, "render", {
        value: value
      });
      return value;
    }
  }]);

  return Renderable;
}();
/* harmony default export */ __webpack_exports__["default"] = (Renderable);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
var _class, _descriptor, _descriptor2, _temp, _dec, _dec2, _class3, _descriptor3, _descriptor4, _temp2;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

var _window$mobx = window.mobx,
    autorun = _window$mobx.autorun,
    observable = _window$mobx.observable,
    computed = _window$mobx.computed,
    action = _window$mobx.action;
var Person = (_class = (_temp =
/*#__PURE__*/
function () {
  function Person() {
    var personData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Person);

    _initializerDefineProperty(this, "firstName", _descriptor, this);

    _initializerDefineProperty(this, "lastName", _descriptor2, this);

    Object.assign(this, personData);
  }

  _createClass(Person, [{
    key: "fullName",
    get: function get() {
      return "".concat(this.firstName, " ").concat(this.lastName);
    }
  }]);

  return Person;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "firstName", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "lastName", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _applyDecoratedDescriptor(_class.prototype, "fullName", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "fullName"), _class.prototype)), _class);
var Store = (_dec = observable.ref, _dec2 = action.bound, (_class3 = (_temp2 =
/*#__PURE__*/
function () {
  function Store() {
    _classCallCheck(this, Store);

    _initializerDefineProperty(this, "container", _descriptor3, this);

    _initializerDefineProperty(this, "people", _descriptor4, this);
  }

  _createClass(Store, [{
    key: "addPerson",
    value: function addPerson(personData) {
      this.people.push(new Person(personData));
    }
  }]);

  return Store;
}(), _temp2), (_descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "container", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "people", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor(_class3.prototype, "addPerson", [_dec2], Object.getOwnPropertyDescriptor(_class3.prototype, "addPerson"), _class3.prototype)), _class3));
/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWl0aHJpbC1tb2J4L2luZGV4LmpzIiwid2VicGFjazovLy8uL21pdGhyaWwtbW9ieC9wZW9wbGUtYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8uL21pdGhyaWwtbW9ieC9wZW9wbGUtYXBwL3VpL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9taXRocmlsLW1vYngvcGVvcGxlLWFwcC91aS9wZW9wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbWl0aHJpbC1tb2J4L3Blb3BsZS1hcHAvdWkvcGVyc29uLmpzIiwid2VicGFjazovLy8uL21pdGhyaWwtbW9ieC9wZW9wbGUtYXBwL3VpL3JlbmRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbWl0aHJpbC1tb2J4L3Blb3BsZS1hcHAvc3RvcmUuanMiXSwibmFtZXMiOlsic3RvcmUiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImJvZHkiLCJhZGRQZXJzb24iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsIlN0b3JlIiwibW9ieCIsImF1dG9ydW4iLCJtIiwicmVuZGVyIiwiQXBwIiwiYXR0cnMiLCJQZW9wbGUiLCJwZW9wbGUiLCJvbmNsaWNrIiwibWFwIiwiUGVyc29uIiwidm5vZGUiLCJhcmd1bWVudHMiLCJvbklucHV0IiwidGFyZ2V0IiwicGVyc29uIiwibmFtZSIsInZhbHVlIiwiZnVsbE5hbWUiLCJvbmlucHV0IiwicmVhZG9ubHkiLCJSZW5kZXJhYmxlIiwiYmluZCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwid2luZG93Iiwib2JzZXJ2YWJsZSIsImNvbXB1dGVkIiwiYWN0aW9uIiwicGVyc29uRGF0YSIsImFzc2lnbiIsInJlZiIsImJvdW5kIiwicHVzaCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztB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Ozs7Ozs7Ozs7bUJDUmdESSxNQUFNLENBQUN6QixJO0lBQWpEQyxPLGdCQUFBQSxPO0lBQVN5QixVLGdCQUFBQSxVO0lBQVlDLFEsZ0JBQUFBLFE7SUFBVUMsTSxnQkFBQUEsTTtBQUVoQyxJQUFNbEIsTUFBYjtBQUFBO0FBQUE7QUFJRSxvQkFBNkI7QUFBQSxRQUFqQm1CLFVBQWlCLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQzNCTixVQUFNLENBQUNPLE1BQVAsQ0FBYyxJQUFkLEVBQW9CRCxVQUFwQjtBQUNEOztBQU5IO0FBQUE7QUFBQSx3QkFRMkI7QUFDdkIsdUJBQVUsS0FBS2hDLFNBQWYsY0FBNEIsS0FBS0MsUUFBakM7QUFDRDtBQVZIOztBQUFBO0FBQUEsc0ZBQ0c0QixVQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUMwQixFQUQxQjtBQUFBO0FBQUEsNEVBRUdBLFVBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRXlCLEVBRnpCO0FBQUE7QUFBQSw2REFRR0MsUUFSSDtBQWFPLElBQU01QixLQUFiLFdBQ0cyQixVQUFVLENBQUNLLEdBRGQsVUFLR0gsTUFBTSxDQUFDSSxLQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsOEJBSzBCSCxVQUwxQixFQUtzQztBQUNsQyxXQUFLdEIsTUFBTCxDQUFZMEIsSUFBWixDQUFpQixJQUFJdkIsTUFBSixDQUFXbUIsVUFBWCxDQUFqQjtBQUNEO0FBUEg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDOEIsSUFEOUI7QUFBQTtBQUFBLDJFQUdHSCxVQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUd1QixFQUh2QjtBQUFBO0FBQUE7QUFVZTNCLG9FQUFmLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi9wZW9wbGUtYXBwXCI7XHJcblxyXG5zdG9yZS5jb250YWluZXIgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuc3RvcmUuYWRkUGVyc29uKHtcclxuICBmaXJzdE5hbWUgOiBcIlJ5YW5cIixcclxuICBsYXN0TmFtZSAgOiBcIk1jTWlsbGFuXCJcclxufSk7XHJcblxyXG5zdG9yZS5hZGRQZXJzb24oe1xyXG4gIGZpcnN0TmFtZSA6IFwiS2V2aW5cIixcclxuICBsYXN0TmFtZSAgOiBcIk1jQ2FtZXJvblwiXHJcbn0pOyIsImltcG9ydCBBcHAgZnJvbSBcIi4vdWkvYXBwLmpzXCI7XHJcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi9zdG9yZS5qc1wiO1xyXG4gXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IG5ldyBTdG9yZSgpO1xyXG5cclxubW9ieC5hdXRvcnVuKCgpPT4ge1xyXG4gIGNvbnN0IHsgY29udGFpbmVyIH0gPSBzdG9yZTtcclxuICBcclxuICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICBtLnJlbmRlcihjb250YWluZXIsIG0oQXBwLCBzdG9yZSkpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBQZW9wbGUgZnJvbSBcIi4vcGVvcGxlLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICB2aWV3KHsgYXR0cnMgfSkge1xyXG4gICAgcmV0dXJuIG0oUGVvcGxlLCBhdHRycyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCBQZXJzb24gZnJvbSBcIi4vcGVyc29uLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGVvcGxlIHtcclxuICB2aWV3KHsgYXR0cnMgfSkge1xyXG4gICAgY29uc3QgeyBwZW9wbGUsIGFkZFBlcnNvbiB9ID0gYXR0cnM7XHJcbiAgICBcclxuICAgIHJldHVybiBtKFwiZGl2XCIsIFxyXG4gICAgICBtKFwiYnV0dG9uXCIsIHsgb25jbGljazogYWRkUGVyc29uIH0sIFwiQWRkIFBlcnNvblwiKSxcclxuICAgICAgbShcInVsXCIsIHBlb3BsZS5tYXAoUGVyc29uLnJlbmRlcikpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVvcGxlO1xyXG4iLCJpbXBvcnQgUmVuZGVyYWJsZSBmcm9tIFwiLi9yZW5kZXJhYmxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGVyc29uIGV4dGVuZHMgUmVuZGVyYWJsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2bm9kZSkge1xyXG4gICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5wZXJzb24gPSB2bm9kZS5hdHRycztcclxuICAgIH1cclxuICBcclxuICAgIG9uSW5wdXQgPSAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICB0aGlzLnBlcnNvblt0YXJnZXQubmFtZV0gPSB0YXJnZXQudmFsdWU7XHJcbiAgICB9O1xyXG4gICAgIFxyXG4gICAgdmlldyh2bm9kZSkge1xyXG4gICAgICBjb25zdCB7IGZpcnN0TmFtZSwgbGFzdE5hbWUsIGZ1bGxOYW1lIH0gPSB2bm9kZS5hdHRycztcclxuICAgICAgXHJcbiAgICAgIHJldHVybiBtKFwibGlcIiwgeyBvbmlucHV0IDogdGhpcy5vbklucHV0IH0sXHJcbiAgICAgICAgbShcImRpdlwiLCBcIkZpcnN0IE5hbWU6IFwiLCBtKFwiaW5wdXRcIiwgeyBuYW1lIDogXCJmaXJzdE5hbWVcIiwgdmFsdWUgOiBmaXJzdE5hbWUgfSkpLFxyXG4gICAgICAgIG0oXCJkaXZcIiwgXCJMYXN0IE5hbWU6IFwiLCBtKFwiaW5wdXRcIiwgeyBuYW1lIDogXCJsYXN0TmFtZVwiLCB2YWx1ZSA6IGxhc3ROYW1lIH0pKSxcclxuICAgICAgICBtKFwiZGl2XCIsIFwiRnVsbCBOYW1lOiBcIiwgbShcImlucHV0XCIsIHsgcmVhZG9ubHkgOiB0cnVlLCB2YWx1ZSA6IGZ1bGxOYW1lIH0pKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJzb247IiwiZXhwb3J0IGNsYXNzIFJlbmRlcmFibGUge1xyXG4gICAgc3RhdGljIGdldCByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gbS5iaW5kKG51bGwsIHRoaXMpO1xyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJyZW5kZXJcIiwgeyB2YWx1ZSB9KTtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBSZW5kZXJhYmxlOyIsImNvbnN0IHsgYXV0b3J1biwgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIGFjdGlvbiB9ID0gd2luZG93Lm1vYng7XHJcblxyXG5leHBvcnQgY2xhc3MgUGVyc29uIHtcclxuICBAb2JzZXJ2YWJsZSBmaXJzdE5hbWUgPSBcIlwiO1xyXG4gIEBvYnNlcnZhYmxlIGxhc3ROYW1lID0gXCJcIjtcclxuXHJcbiAgY29uc3RydWN0b3IocGVyc29uRGF0YSA9IHt9KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHBlcnNvbkRhdGEpO1xyXG4gIH1cclxuXHJcbiAgQGNvbXB1dGVkIGdldCBmdWxsTmFtZSgpIHtcclxuICAgIHJldHVybiBgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcmUge1xyXG4gIEBvYnNlcnZhYmxlLnJlZiBjb250YWluZXIgPSBudWxsO1xyXG5cclxuICBAb2JzZXJ2YWJsZSBwZW9wbGUgPSBbXTtcclxuXHJcbiAgQGFjdGlvbi5ib3VuZCBhZGRQZXJzb24ocGVyc29uRGF0YSkge1xyXG4gICAgdGhpcy5wZW9wbGUucHVzaChuZXcgUGVyc29uKHBlcnNvbkRhdGEpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9