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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module1 */ \"./src/js/module1.js\");\n/* harmony import */ var _module2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module2 */ \"./src/js/module2.js\");\n/* harmony import */ var _module3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module3 */ \"./src/js/module3.js\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.json */ \"./src/js/data.json\");\nvar _data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ \"./src/js/data.json\", 1);\n//该文件是webpack的入口文件，不仅仅用于汇总所有的js文件，该文件里还可以引入：json文件、less文件等等。\r\n/* \r\n\tES6模块化：\r\n\t\t暴露：分别暴露、统一暴露、默认暴露\r\n\t\t引入：如何引入一个模块，取决于该模块是如何暴露的。\r\n*/\r\n\r\n//引入模块\r\n\r\n\r\n\r\n\r\n\r\nconsole.log(Object(_module1__WEBPACK_IMPORTED_MODULE_0__[\"sum\"])(1,2));\r\nconsole.log(Object(_module2__WEBPACK_IMPORTED_MODULE_1__[\"sub\"])(3,2));\r\nconsole.log(_module3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mul(3,3));\r\nconsole.log(_module3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(6,3));\r\nconsole.log(_data_json__WEBPACK_IMPORTED_MODULE_3__);\r\n\r\nsetTimeout(()=>{\r\n\tconsole.log('定时器的回调执行了');\r\n})\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/data.json":
/*!**************************!*\
  !*** ./src/js/data.json ***!
  \**************************/
/*! exports provided: teachers, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"teachers\\\":[{\\\"name\\\":\\\"老刘\\\",\\\"age\\\":18},{\\\"name\\\":\\\"渊\\\",\\\"age\\\":19}]}\");\n\n//# sourceURL=webpack:///./src/js/data.json?");

/***/ }),

/***/ "./src/js/module1.js":
/*!***************************!*\
  !*** ./src/js/module1.js ***!
  \***************************/
/*! exports provided: sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sum\", function() { return sum; });\n//使用分别暴露的方式，暴露一个加法函数\r\n\r\nfunction sum(a,b){\r\n\treturn a+b\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/module1.js?");

/***/ }),

/***/ "./src/js/module2.js":
/*!***************************!*\
  !*** ./src/js/module2.js ***!
  \***************************/
/*! exports provided: sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sub\", function() { return sub; });\n//使用统一暴露的方式，暴露一个减法函数\r\n\r\nfunction sub(a,b){\r\n\treturn a-b\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/module2.js?");

/***/ }),

/***/ "./src/js/module3.js":
/*!***************************!*\
  !*** ./src/js/module3.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//使用默认暴露的方式，暴露一个对象，该对象里包含：乘法、除法\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\t//乘法\r\n\tmul(a,b){\r\n\t\treturn a*b\r\n\t},\r\n\t//除法\r\n\tdiv(a,b){\r\n\t\treturn a/b\r\n\t}\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/module3.js?");

/***/ })

/******/ });