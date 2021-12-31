/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/auth/auth.html":
/*!****************************!*\
  !*** ./src/auth/auth.html ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<form action=\\\"\\\" method=\\\"POST\\\" id=\\\"auth\\\">\\n    <input type=\\\"password\\\" />\\n    <input type=\\\"submit\\\" />\\n</form>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://client/./src/auth/auth.html?");

/***/ }),

/***/ "./src/orders/orders.html":
/*!********************************!*\
  !*** ./src/orders/orders.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<hr>\\n<form action=\\\"\\\" method=\\\"POST\\\">\\n    <textarea name=\\\"orders\\\" id=\\\"\\\" cols=\\\"30\\\" rows=\\\"10\\\">3763757154513</textarea><br>\\n    <input type=\\\"submit\\\">\\n</form>\\n<div></div>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://client/./src/orders/orders.html?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth */ \"./src/auth/auth.js\");\n/* harmony import */ var _orders_orders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders/orders */ \"./src/orders/orders.js\");\n\n\n\nconst node = document.createElement('div');\nnode.setAttribute('id', 'flp-app');\ndocument.body.appendChild(node);\n(0,_auth_auth__WEBPACK_IMPORTED_MODULE_0__.init)();\n(0,_orders_orders__WEBPACK_IMPORTED_MODULE_1__.init)();\n\n\n//# sourceURL=webpack://client/./src/app.js?");

/***/ }),

/***/ "./src/auth/auth.js":
/*!**************************!*\
  !*** ./src/auth/auth.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n/* harmony import */ var _auth_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.html */ \"./src/auth/auth.html\");\n\n\n\nconst APP_API = \"https://localhost:8081\";\n\nconst submitHandler = async (e) => {\n    e.preventDefault();\n    const res = await fetch(`${APP_API}/login`, { method: 'POST' });\n    const { accessToken } = await res.json();\n    document.cookie = `accessToken=${accessToken};`;\n};\n\nconst init = () => {\n    const node = document.querySelector('#flp-app');\n    node.insertAdjacentHTML('beforeend', _auth_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getLastChild)(node, 'form').addEventListener('submit', submitHandler);\n};\n\n\n//# sourceURL=webpack://client/./src/auth/auth.js?");

/***/ }),

/***/ "./src/orders/orders.js":
/*!******************************!*\
  !*** ./src/orders/orders.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n/* harmony import */ var _orders_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.html */ \"./src/orders/orders.html\");\n\n\n\nconst APP_API = \"https://localhost:8081\";\n\nconst getOrders = ({ target }) => target.querySelector('textarea').value.split(/\\n|,/);\n\nconst getHeader = () => ({ headers: new Headers({ Authorization: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCookie)('accessToken') }) });\n\nconst showOrders = ({ target }, stdout) => (target.nextElementSibling.innerHTML = stdout);\n\nconst submitHandler = async (e) => {\n    e.preventDefault();\n    try {\n        const res = await fetch(`${APP_API}/orders/${getOrders(e).join(',')}`, getHeader());\n        showOrders(e, await res.text());\n    } catch (error) {\n        console.log('Error', error);\n        e.target.nextElementSibling.innerText = 'Refresh the tokens!';\n    }\n};\n\nconst init = () => {\n    const node = document.querySelector('#flp-app');\n    node.insertAdjacentHTML('beforeend', _orders_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getLastChild)(node, 'form').addEventListener('submit', submitHandler);\n};\n\n\n//# sourceURL=webpack://client/./src/orders/orders.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLastChild\": () => (/* binding */ getLastChild),\n/* harmony export */   \"getCookie\": () => (/* binding */ getCookie)\n/* harmony export */ });\nconst getLastChild = (node, selector) => {\n    const nodes = node.querySelectorAll(selector);\n    return nodes[nodes.length - 1];\n};\n\nconst getCookie = (cookie) => {\n    const callback = (row) => row.startsWith(`${cookie}=`);\n    return document.cookie.split('; ').find(callback).split('=')[1];\n};\n\n\n//# sourceURL=webpack://client/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;