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

/***/ "./src/js/api/api.js":
/*!***************************!*\
  !*** ./src/js/api/api.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCategories\": () => (/* binding */ getCategories),\n/* harmony export */   \"getProducts\": () => (/* binding */ getProducts),\n/* harmony export */   \"getProductsByCategory\": () => (/* binding */ getProductsByCategory),\n/* harmony export */   \"getProductsPerPage\": () => (/* binding */ getProductsPerPage)\n/* harmony export */ });\nconst getProducts = async(name) => {\r\n    return name ? await axios.get(`https://api-bsale-server.herokuapp.com/api/v1/products?name=${name}`) : await axios.get(`https://api-bsale-server.herokuapp.com/api/v1/products`)\r\n}\r\n\r\nconst getProductsPerPage = async(page) => {\r\n    const { data } = await axios.get(`https://api-bsale-server.herokuapp.com/api/v1/products?page=${page}`)\r\n    return data\r\n}\r\n\r\nconst getProductsByCategory = async(category) => {\r\n    const { data } = await axios.get(`https://api-bsale-server.herokuapp.com/api/v1/categories/${category}/products`)\r\n    return data\r\n}\r\n\r\n\r\nconst getCategories = async() => {\r\n    const { data } = await axios.get(`https://api-bsale-server.herokuapp.com/api/v1/categories`)\r\n    return data\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://frontend/./src/js/api/api.js?");

/***/ }),

/***/ "./src/js/components/Cards.js":
/*!************************************!*\
  !*** ./src/js/components/Cards.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCard\": () => (/* binding */ createCard)\n/* harmony export */ });\n/* harmony import */ var _utils_chileanPriceFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/chileanPriceFormat */ \"./src/js/utils/chileanPriceFormat.js\");\n\r\nconst createCard = (products) => {\r\n    const productList = document.getElementById('product-list')\r\n    productList.innerHTML = '';\r\n    products.forEach(element => {\r\n        const image = (element.url_image !== '' && element.url_image !== null) ? element.url_image : 'https://via.placeholder.com/200x200'\r\n        const div = document.createElement('div')\r\n        div.classList.add('col-md-4')\r\n        div.classList.add('mt-2')\r\n        div.innerHTML += `\r\n        <div class=\"card\"\">            \r\n        <img src=\"${image}\" class=\"card-img-top img-fluid\" alt=\"imagen producto\">                            \r\n            <div class=\"card-body\">            \r\n                <h5 class=\"card-title\">${element.name}</h5>\r\n                <p class=\"card-text\">${_utils_chileanPriceFormat__WEBPACK_IMPORTED_MODULE_0__.formatPrice.format(element.price)}</p>\r\n                <a href=\"#\" class=\"btn btn-primary\">Añadir al Carro</a>\r\n            </div>\r\n        </div>            \r\n    `\r\n        productList.appendChild(div)\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://frontend/./src/js/components/Cards.js?");

/***/ }),

/***/ "./src/js/components/Navbar.js":
/*!*************************************!*\
  !*** ./src/js/components/Navbar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNavItem\": () => (/* binding */ createNavItem)\n/* harmony export */ });\nconst createNavItem = (items) => {\r\n    const categoriesList = document.getElementById('categories-list');\r\n    categoriesList.innerHTML = '';\r\n    items.forEach(element => {\r\n        const li = document.createElement('li')\r\n        li.classList.add('nav-item')\r\n        li.innerHTML += `\r\n        <a class=\"nav-link active\" aria-current=\"page\" href=\"#\" id=\"${element.id}\">${element.name.toUpperCase()}</a>\r\n        `\r\n        categoriesList.appendChild(li)\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://frontend/./src/js/components/Navbar.js?");

/***/ }),

/***/ "./src/js/components/Pagination.js":
/*!*****************************************!*\
  !*** ./src/js/components/Pagination.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPagination\": () => (/* binding */ createPagination)\n/* harmony export */ });\nconst createPagination = (current, pages) => {\r\n    const pagination = document.getElementById('pagination')\r\n    pagination.innerHTML = ''\r\n    for (let i = 1; i <= pages; i++) {\r\n        const li = document.createElement('li')\r\n        li.classList.add('page-item')\r\n        const a = document.createElement('a')\r\n        a.setAttribute('href', '#')\r\n        a.classList.add('page-link')\r\n        a.innerText = i\r\n        li.appendChild(a)\r\n        pagination.appendChild(li)\r\n\r\n        if (i === current) {\r\n            a.classList.add('disabled')\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://frontend/./src/js/components/Pagination.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ \"./src/js/api/api.js\");\n/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Cards */ \"./src/js/components/Cards.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navbar */ \"./src/js/components/Navbar.js\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Pagination */ \"./src/js/components/Pagination.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst search = async() => {\r\n    const search = document.getElementById('input-search').value\r\n    const { data } = await (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.getProducts)(search)\r\n    return data.products\r\n}\r\n\r\nconst main = async() => {\r\n    const { data } = await (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.getProducts)();\r\n    const categories = await (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.getCategories)();\r\n    (0,_components_Cards__WEBPACK_IMPORTED_MODULE_1__.createCard)(data.products)\r\n    ;(0,_components_Navbar__WEBPACK_IMPORTED_MODULE_2__.createNavItem)(categories);\r\n    (0,_components_Pagination__WEBPACK_IMPORTED_MODULE_3__.createPagination)(data.current, data.pages)\r\n\r\n    const btnSearch = document.getElementById('btn-search-product')\r\n    btnSearch.addEventListener('click', async(e) => {\r\n        e.preventDefault()\r\n        const products = await search();\r\n        (0,_components_Cards__WEBPACK_IMPORTED_MODULE_1__.createCard)(products)\r\n    })\r\n\r\n    const navbarItems = document.getElementById('categories-list')\r\n    navbarItems.addEventListener('click', async(e) => {\r\n        const element = e.target.localName\r\n        if (element === 'a') {\r\n            const category = e.target.id\r\n            const data = await (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.getProductsByCategory)(category)\r\n            ;(0,_components_Cards__WEBPACK_IMPORTED_MODULE_1__.createCard)(data.products)\r\n            ;(0,_components_Pagination__WEBPACK_IMPORTED_MODULE_3__.createPagination)(data.current, data.pages)\r\n        }\r\n    })\r\n\r\n    const pagination = document.getElementById('pagination')\r\n    pagination.addEventListener('click', async(e) => {\r\n        e.preventDefault()\r\n        const element = e.target.localName\r\n        if (element === 'a') {\r\n            const page = e.target.innerText\r\n            const data = await (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.getProductsPerPage)(page)\r\n            console.log(data);\r\n            (0,_components_Cards__WEBPACK_IMPORTED_MODULE_1__.createCard)(data.products)\r\n            ;(0,_components_Pagination__WEBPACK_IMPORTED_MODULE_3__.createPagination)(data.current, data.pages)\r\n        }\r\n    })\r\n}\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', async(e) => {\r\n    await main()\r\n})\n\n//# sourceURL=webpack://frontend/./src/js/index.js?");

/***/ }),

/***/ "./src/js/utils/chileanPriceFormat.js":
/*!********************************************!*\
  !*** ./src/js/utils/chileanPriceFormat.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatPrice\": () => (/* binding */ formatPrice)\n/* harmony export */ });\nconst formatPrice = new Intl.NumberFormat('es-CL', {\r\n    style: 'currency',\r\n    currency: 'CLP',\r\n    minimumFractionDigits: 0\r\n})\r\n\r\n\n\n//# sourceURL=webpack://frontend/./src/js/utils/chileanPriceFormat.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;