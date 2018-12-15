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
var _class, _descriptor, _descriptor2, _temp, _dec, _class3, _descriptor3, _descriptor4, _temp2;

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
var Store = (_dec = observable.ref, (_class3 = (_temp2 =
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
})), _class3));
/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWl0aHJpbC1tb2J4L2luZGV4LmpzIiwid2VicGFjazovLy8uL21pdGhyaWwtbW9ieC9wZW9wbGUtYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8uL21pdGhyaWwtbW9ieC9wZW9wbGUtYXBwL3VpL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9taXRocmlsLW1vYngvcGVvcGxlLWFwcC91aS9wZW9wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbWl0aHJpbC1tb2J4L3Blb3BsZS1hcHAvdWkvcGVyc29uLmpzIiwid2VicGFjazovLy8uL21pdGhyaWwtbW9ieC9wZW9wbGUtYXBwL3VpL3JlbmRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbWl0aHJpbC1tb2J4L3Blb3BsZS1hcHAvc3RvcmUuanMiXSwibmFtZXMiOlsic3RvcmUiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImJvZHkiLCJhZGRQZXJzb24iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsIlN0b3JlIiwibW9ieCIsImF1dG9ydW4iLCJtIiwicmVuZGVyIiwiQXBwIiwiYXR0cnMiLCJQZW9wbGUiLCJwZW9wbGUiLCJvbmNsaWNrIiwibWFwIiwiUGVyc29uIiwidm5vZGUiLCJhcmd1bWVudHMiLCJvbklucHV0IiwidGFyZ2V0IiwicGVyc29uIiwibmFtZSIsInZhbHVlIiwiZnVsbE5hbWUiLCJvbmlucHV0IiwicmVhZG9ubHkiLCJSZW5kZXJhYmxlIiwiYmluZCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwid2luZG93Iiwib2JzZXJ2YWJsZSIsImNvbXB1dGVkIiwiYWN0aW9uIiwicGVyc29uRGF0YSIsImFzc2lnbiIsInJlZiIsInB1c2giXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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O21CQ1JnREksTUFBTSxDQUFDekIsSTtJQUFqREMsTyxnQkFBQUEsTztJQUFTeUIsVSxnQkFBQUEsVTtJQUFZQyxRLGdCQUFBQSxRO0lBQVVDLE0sZ0JBQUFBLE07QUFFaEMsSUFBTWxCLE1BQWI7QUFBQTtBQUFBO0FBSUUsb0JBQTZCO0FBQUEsUUFBakJtQixVQUFpQix1RUFBSixFQUFJOztBQUFBOztBQUFBOztBQUFBOztBQUMzQk4sVUFBTSxDQUFDTyxNQUFQLENBQWMsSUFBZCxFQUFvQkQsVUFBcEI7QUFDRDs7QUFOSDtBQUFBO0FBQUEsd0JBUTJCO0FBQ3ZCLHVCQUFVLEtBQUtoQyxTQUFmLGNBQTRCLEtBQUtDLFFBQWpDO0FBQ0Q7QUFWSDs7QUFBQTtBQUFBLHNGQUNHNEIsVUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDMEIsRUFEMUI7QUFBQTtBQUFBLDRFQUVHQSxVQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUV5QixFQUZ6QjtBQUFBO0FBQUEsNkRBUUdDLFFBUkg7QUFhTyxJQUFNNUIsS0FBYixXQUNHMkIsVUFBVSxDQUFDSyxHQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsOEJBS1lGLFVBTFosRUFLd0I7QUFDcEIsV0FBS3RCLE1BQUwsQ0FBWXlCLElBQVosQ0FBaUIsSUFBSXRCLE1BQUosQ0FBV21CLFVBQVgsQ0FBakI7QUFDRDtBQVBIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQzhCLElBRDlCO0FBQUE7QUFBQSwyRUFHR0gsVUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FHdUIsRUFIdkI7QUFBQTtBQUFBO0FBVWUzQixvRUFBZixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4vcGVvcGxlLWFwcFwiO1xyXG5cclxuc3RvcmUuY29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbnN0b3JlLmFkZFBlcnNvbih7XHJcbiAgZmlyc3ROYW1lIDogXCJSeWFuXCIsXHJcbiAgbGFzdE5hbWUgIDogXCJNY01pbGxhblwiXHJcbn0pO1xyXG5cclxuc3RvcmUuYWRkUGVyc29uKHtcclxuICBmaXJzdE5hbWUgOiBcIktldmluXCIsXHJcbiAgbGFzdE5hbWUgIDogXCJNY0NhbWVyb25cIlxyXG59KTsiLCJpbXBvcnQgQXBwIGZyb20gXCIuL3VpL2FwcC5qc1wiO1xyXG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4vc3RvcmUuanNcIjtcclxuIFxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBuZXcgU3RvcmUoKTtcclxuXHJcbm1vYnguYXV0b3J1bigoKT0+IHtcclxuICBjb25zdCB7IGNvbnRhaW5lciB9ID0gc3RvcmU7XHJcbiAgXHJcbiAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgbS5yZW5kZXIoY29udGFpbmVyLCBtKEFwcCwgc3RvcmUpKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuL3Blb3BsZS5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgdmlldyh7IGF0dHJzIH0pIHtcclxuICAgIHJldHVybiBtKFBlb3BsZSwgYXR0cnMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgUGVyc29uIGZyb20gXCIuL3BlcnNvbi5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBlb3BsZSB7XHJcbiAgdmlldyh7IGF0dHJzIH0pIHtcclxuICAgIGNvbnN0IHsgcGVvcGxlLCBhZGRQZXJzb24gfSA9IGF0dHJzO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbShcImRpdlwiLCBcclxuICAgICAgbShcImJ1dHRvblwiLCB7IG9uY2xpY2s6IGFkZFBlcnNvbiB9LCBcIkFkZCBQZXJzb25cIiksXHJcbiAgICAgIG0oXCJ1bFwiLCBwZW9wbGUubWFwKFBlcnNvbi5yZW5kZXIpKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlb3BsZTtcclxuIiwiaW1wb3J0IFJlbmRlcmFibGUgZnJvbSBcIi4vcmVuZGVyYWJsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBlcnNvbiBleHRlbmRzIFJlbmRlcmFibGUge1xyXG4gICAgY29uc3RydWN0b3Iodm5vZGUpIHtcclxuICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMucGVyc29uID0gdm5vZGUuYXR0cnM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBvbklucHV0ID0gKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgdGhpcy5wZXJzb25bdGFyZ2V0Lm5hbWVdID0gdGFyZ2V0LnZhbHVlO1xyXG4gICAgfTtcclxuICAgICBcclxuICAgIHZpZXcodm5vZGUpIHtcclxuICAgICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBmdWxsTmFtZSB9ID0gdm5vZGUuYXR0cnM7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gbShcImxpXCIsIHsgb25pbnB1dCA6IHRoaXMub25JbnB1dCB9LFxyXG4gICAgICAgIG0oXCJkaXZcIiwgXCJGaXJzdCBOYW1lOiBcIiwgbShcImlucHV0XCIsIHsgbmFtZSA6IFwiZmlyc3ROYW1lXCIsIHZhbHVlIDogZmlyc3ROYW1lIH0pKSxcclxuICAgICAgICBtKFwiZGl2XCIsIFwiTGFzdCBOYW1lOiBcIiwgbShcImlucHV0XCIsIHsgbmFtZSA6IFwibGFzdE5hbWVcIiwgdmFsdWUgOiBsYXN0TmFtZSB9KSksXHJcbiAgICAgICAgbShcImRpdlwiLCBcIkZ1bGwgTmFtZTogXCIsIG0oXCJpbnB1dFwiLCB7IHJlYWRvbmx5IDogdHJ1ZSwgdmFsdWUgOiBmdWxsTmFtZSB9KSlcclxuICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29uOyIsImV4cG9ydCBjbGFzcyBSZW5kZXJhYmxlIHtcclxuICAgIHN0YXRpYyBnZXQgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IG0uYmluZChudWxsLCB0aGlzKTtcclxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwicmVuZGVyXCIsIHsgdmFsdWUgfSk7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgUmVuZGVyYWJsZTsiLCJjb25zdCB7IGF1dG9ydW4sIG9ic2VydmFibGUsIGNvbXB1dGVkLCBhY3Rpb24gfSA9IHdpbmRvdy5tb2J4O1xyXG5cclxuZXhwb3J0IGNsYXNzIFBlcnNvbiB7XHJcbiAgQG9ic2VydmFibGUgZmlyc3ROYW1lID0gXCJcIjtcclxuICBAb2JzZXJ2YWJsZSBsYXN0TmFtZSA9IFwiXCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBlcnNvbkRhdGEgPSB7fSkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwZXJzb25EYXRhKTtcclxuICB9XHJcblxyXG4gIEBjb21wdXRlZCBnZXQgZnVsbE5hbWUoKSB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5maXJzdE5hbWV9ICR7dGhpcy5sYXN0TmFtZX1gO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0b3JlIHtcclxuICBAb2JzZXJ2YWJsZS5yZWYgY29udGFpbmVyID0gbnVsbDtcclxuXHJcbiAgQG9ic2VydmFibGUgcGVvcGxlID0gW107XHJcblxyXG4gIGFkZFBlcnNvbihwZXJzb25EYXRhKSB7XHJcbiAgICB0aGlzLnBlb3BsZS5wdXNoKG5ldyBQZXJzb24ocGVyc29uRGF0YSkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=