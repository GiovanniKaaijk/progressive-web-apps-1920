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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/script.js":
/*!*****************************!*\
  !*** ./public/js/script.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const clientIdArray = [\"c0g3KCdeYfIgY-AqI1Wc_mxsO4n1fCwTrNUFAtkuoOs\", 'MzgjHArhWPqMzWaRBzbGVYvwGfko5Dq2C8xkNkaxb8k', 'XiE0S0hgNEIQoNQMzxWFgjfi8LUN6zasz6xLmolFJUQ', 'veo6OymYIOKetTx63Mop7wENnxdMJlDWhwMD3HCnysE', 'kKSTynEwDSyQGAfrsk4Um0X-8MWLd1qx0ZLj2MVdEV0']\r\nconst clientId = clientIdArray[Math.floor(Math.random() * clientIdArray.length + 1)]\r\n\r\nconst input = document.querySelector('form.search input')\r\nlet toggle = true;\r\nif(input) {\r\n    input.addEventListener('input', function() {\r\n        if(input.value.length > 1) {\r\n            if(toggle) {\r\n                toggle = false\r\n                fetch(`https://api.unsplash.com/search/photos?page=1&query=${input.value}&client_id=${clientId}`)\r\n                .then(res => res.json())\r\n                .then(res => {\r\n                    const el = document.querySelector('.grid')\r\n                    if(res.results) {\r\n                        const articles = document.querySelectorAll('.grid .img-wrapper')\r\n                        articles.forEach(article => {\r\n                            article.remove()\r\n                        })\r\n                        res.results.forEach((item, i) => {\r\n                            const html = `<div class=\"img-wrapper\"><a href=\"/detail/${item.id}\"><img src=${item.urls.regular}></a></div>`\r\n                            el.insertAdjacentHTML(\"beforeend\", html)\r\n                        })\r\n                    }\r\n                    toggle = true\r\n                })\r\n            }\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack:///./public/js/script.js?");

/***/ })

/******/ });