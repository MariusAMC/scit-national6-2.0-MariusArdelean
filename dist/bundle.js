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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/getApi.js":
/*!***********************!*\
  !*** ./src/getApi.js ***!
  \***********************/
/*! exports provided: getAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAPI\", function() { return getAPI; });\nfunction getAPI(url, callback) {\r\n  fetch(url)\r\n    .then((r) => r.json())\r\n    .then(callback)\r\n    .catch((error) => {\r\n      console.log(error);\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/getApi.js?");

/***/ }),

/***/ "./src/getBreedImg.js":
/*!****************************!*\
  !*** ./src/getBreedImg.js ***!
  \****************************/
/*! exports provided: getBreedImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBreedImages\", function() { return getBreedImages; });\n/* harmony import */ var _getApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getApi */ \"./src/getApi.js\");\n/* harmony import */ var _renderFirstImg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderFirstImg */ \"./src/renderFirstImg.js\");\n\r\n\r\n\r\nfunction getBreedImages(chosenBreed) {\r\n  Object(_getApi__WEBPACK_IMPORTED_MODULE_0__[\"getAPI\"])(\r\n    `https://dog.ceo/api/breed/${chosenBreed}/images`,\r\n    _renderFirstImg__WEBPACK_IMPORTED_MODULE_1__[\"renderFirstImageOfBreed\"]\r\n  );\r\n}\r\n\n\n//# sourceURL=webpack:///./src/getBreedImg.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getApi */ \"./src/getApi.js\");\n/* harmony import */ var _renderBreeds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderBreeds */ \"./src/renderBreeds.js\");\n/* harmony import */ var _renderFirstImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderFirstImg */ \"./src/renderFirstImg.js\");\n/* harmony import */ var _renderLastBreed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderLastBreed */ \"./src/renderLastBreed.js\");\n\r\n\r\n\r\n\r\n\r\nif (!localStorage.getItem(\"name\") || !localStorage.getItem(\"password\")) {\r\n  window.location = \"/login.html\";\r\n}\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n  Object(_getApi__WEBPACK_IMPORTED_MODULE_0__[\"getAPI\"])(\"https://dog.ceo/api/breeds/list/all\", _renderBreeds__WEBPACK_IMPORTED_MODULE_1__[\"renderBreeds\"]);\r\n});\r\n\r\ndocument.getElementById(\"forward\").addEventListener(\"click\", increasePgImgNum);\r\n\r\ndocument.getElementById(\"backward\").addEventListener(\"click\", decreasePgImgNum);\r\n\r\nfunction increasePgImgNum() {\r\n  _renderLastBreed__WEBPACK_IMPORTED_MODULE_3__[\"pgNum\"].innerHTML++;\r\n  if (_renderLastBreed__WEBPACK_IMPORTED_MODULE_3__[\"pgNum\"].innerHTML > _renderFirstImg__WEBPACK_IMPORTED_MODULE_2__[\"imgArray\"].length) {\r\n    _renderLastBreed__WEBPACK_IMPORTED_MODULE_3__[\"pgNum\"].innerHTML = _renderFirstImg__WEBPACK_IMPORTED_MODULE_2__[\"imgArray\"].length;\r\n    return;\r\n  } else {\r\n    _renderLastBreed__WEBPACK_IMPORTED_MODULE_3__[\"breedImg\"].src = _renderFirstImg__WEBPACK_IMPORTED_MODULE_2__[\"imgArray\"][_renderLastBreed__WEBPACK_IMPORTED_MODULE_3__[\"pgNum\"].innerHTML - 1];\r\n    localStorage[\"index\"] = _renderLastBreed__WEBPACK_IMPORTED_MODULE_3__[\"pgNum\"].innerHTML - 1;\r\n  }\r\n}\r\n\r\nfunction decreasePgImgNum() {\r\n  _renderLastBreed__WEBPACK_IMPORTED_MODULE_3__[\"pgNum\"].innerHTML--;\r\n  if (_renderLastBreed__WEBPACK_IMPORTED_MODULE_3__[\"pgNum\"].innerHTML <= 0) {\r\n    _renderLastBreed__WEBPACK_IMPORTED_MODULE_3__[\"pgNum\"].innerHTML = 1;\r\n    return;\r\n  } else {\r\n    _renderLastBreed__WEBPACK_IMPORTED_MODULE_3__[\"breedImg\"].src = _renderFirstImg__WEBPACK_IMPORTED_MODULE_2__[\"imgArray\"][_renderLastBreed__WEBPACK_IMPORTED_MODULE_3__[\"pgNum\"].innerHTML - 1];\r\n    localStorage[\"index\"] = _renderLastBreed__WEBPACK_IMPORTED_MODULE_3__[\"pgNum\"].innerHTML - 1;\r\n  }\r\n}\r\n\r\ndocument.getElementById(\"logout\").addEventListener(\"click\", () => {\r\n  localStorage.removeItem(\"name\");\r\n  localStorage.removeItem(\"password\");\r\n  localStorage.removeItem(\"breed\");\r\n  localStorage.removeItem(\"index\");\r\n  window.location = \"/\";\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/reloadLastBreed.js":
/*!********************************!*\
  !*** ./src/reloadLastBreed.js ***!
  \********************************/
/*! exports provided: reloadLastBreed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reloadLastBreed\", function() { return reloadLastBreed; });\n/* harmony import */ var _getApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getApi */ \"./src/getApi.js\");\n/* harmony import */ var _renderLastBreed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderLastBreed */ \"./src/renderLastBreed.js\");\n\r\n\r\n\r\nfunction reloadLastBreed() {\r\n  if (localStorage.getItem(\"breed\") && localStorage.getItem(\"index\")) {\r\n    const localStorageBreed = localStorage.getItem(\"breed\");\r\n    const breedParagraphs = document.getElementsByClassName(\"breed\");\r\n    for (const breed of breedParagraphs) {\r\n      if (breed.innerHTML === localStorageBreed) {\r\n        breed.classList.add(\"breed--selected\");\r\n        const name = breed.innerHTML;\r\n        Object(_getApi__WEBPACK_IMPORTED_MODULE_0__[\"getAPI\"])(`https://dog.ceo/api/breed/${name}/images`, _renderLastBreed__WEBPACK_IMPORTED_MODULE_1__[\"renderLastBreed\"]);\r\n      }\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/reloadLastBreed.js?");

/***/ }),

/***/ "./src/renderBreeds.js":
/*!*****************************!*\
  !*** ./src/renderBreeds.js ***!
  \*****************************/
/*! exports provided: renderBreeds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderBreeds\", function() { return renderBreeds; });\n/* harmony import */ var _getBreedImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBreedImg */ \"./src/getBreedImg.js\");\n/* harmony import */ var _reloadLastBreed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reloadLastBreed */ \"./src/reloadLastBreed.js\");\n/* harmony import */ var _renderLastBreed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderLastBreed */ \"./src/renderLastBreed.js\");\n/* harmony import */ var _underlineCurrent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./underlineCurrent */ \"./src/underlineCurrent.js\");\n\r\n\r\n\r\n\r\n\r\nfunction renderBreeds(response) {\r\n  const breedList = response.message;\r\n  for (const breed in breedList) {\r\n    const breedName = document.createElement(\"p\");\r\n    breedName.classList.add(\"breed\");\r\n    const breedsDiv = document.getElementById(\"breeds\");\r\n    breedsDiv.appendChild(breedName);\r\n    breedName.innerHTML = breed;\r\n\r\n    breedName.addEventListener(\"click\", () => {\r\n      _renderLastBreed__WEBPACK_IMPORTED_MODULE_2__[\"pgNum\"].innerHTML = 1;\r\n      Object(_underlineCurrent__WEBPACK_IMPORTED_MODULE_3__[\"underlineCurrentBreed\"])(breedName);\r\n      Object(_getBreedImg__WEBPACK_IMPORTED_MODULE_0__[\"getBreedImages\"])(breedName.innerHTML);\r\n      localStorage.setItem(\"breed\", breedName.innerHTML);\r\n      localStorage.setItem(\"index\", _renderLastBreed__WEBPACK_IMPORTED_MODULE_2__[\"pgNum\"].innerHTML - 1);\r\n    });\r\n  }\r\n  if (window.location.reload) {\r\n    Object(_reloadLastBreed__WEBPACK_IMPORTED_MODULE_1__[\"reloadLastBreed\"])();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/renderBreeds.js?");

/***/ }),

/***/ "./src/renderFirstImg.js":
/*!*******************************!*\
  !*** ./src/renderFirstImg.js ***!
  \*******************************/
/*! exports provided: imgArray, renderFirstImageOfBreed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"imgArray\", function() { return imgArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderFirstImageOfBreed\", function() { return renderFirstImageOfBreed; });\n/* harmony import */ var _renderLastBreed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderLastBreed */ \"./src/renderLastBreed.js\");\n\r\n\r\nlet imgArray;\r\n\r\nfunction renderFirstImageOfBreed(response) {\r\n  imgArray = response.message;\r\n  _renderLastBreed__WEBPACK_IMPORTED_MODULE_0__[\"breedImg\"].src = imgArray[0];\r\n}\r\n\n\n//# sourceURL=webpack:///./src/renderFirstImg.js?");

/***/ }),

/***/ "./src/renderLastBreed.js":
/*!********************************!*\
  !*** ./src/renderLastBreed.js ***!
  \********************************/
/*! exports provided: breedImg, pgNum, renderLastBreed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"breedImg\", function() { return breedImg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pgNum\", function() { return pgNum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLastBreed\", function() { return renderLastBreed; });\n/* harmony import */ var _renderFirstImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderFirstImg */ \"./src/renderFirstImg.js\");\n\r\n\r\nconst breedImg = document.getElementById(\"breed-image\");\r\nconst pgNum = document.getElementById(\"page-number\");\r\n\r\nfunction renderLastBreed(response) {\r\n  imgArray = response.message;\r\n  const index = localStorage.getItem(\"index\");\r\n  breedImg.src = imgArray[index];\r\n  const number = parseInt(index) + 1;\r\n  pgNum.innerHTML = number;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/renderLastBreed.js?");

/***/ }),

/***/ "./src/underlineCurrent.js":
/*!*********************************!*\
  !*** ./src/underlineCurrent.js ***!
  \*********************************/
/*! exports provided: underlineCurrentBreed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"underlineCurrentBreed\", function() { return underlineCurrentBreed; });\nfunction underlineCurrentBreed(currentBreed) {\r\n  const breedParagraphs = document.getElementsByClassName(\"breed\");\r\n  for (const breed of breedParagraphs) {\r\n    breed.classList.remove(\"breed--selected\");\r\n  }\r\n  currentBreed.classList.add(\"breed--selected\");\r\n}\r\n\n\n//# sourceURL=webpack:///./src/underlineCurrent.js?");

/***/ })

/******/ });