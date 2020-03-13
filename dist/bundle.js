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

eval("const clientIdArray = [\"c0g3KCdeYfIgY-AqI1Wc_mxsO4n1fCwTrNUFAtkuoOs\", 'MzgjHArhWPqMzWaRBzbGVYvwGfko5Dq2C8xkNkaxb8k', 'XiE0S0hgNEIQoNQMzxWFgjfi8LUN6zasz6xLmolFJUQ', 'veo6OymYIOKetTx63Mop7wENnxdMJlDWhwMD3HCnysE', 'kKSTynEwDSyQGAfrsk4Um0X-8MWLd1qx0ZLj2MVdEV0']\nconst clientId = clientIdArray[Math.floor(Math.random() * clientIdArray.length + 1)]\n\nconst input = document.querySelector('form.search input')\nlet toggle = true;\n\ninput.addEventListener('input', function() {\n    if(input.value.length > 1) {\n        if(toggle) {\n            toggle = false\n            fetch(`https://api.unsplash.com/search/photos?page=1&query=${input.value}&client_id=${clientId}`)\n            .then(res => res.json())\n            .then(res => {\n                const el = document.querySelector('.grid')\n                if(res.results) {\n                    const articles = document.querySelectorAll('.grid .img-wrapper')\n                    articles.forEach(article => {\n                        article.remove()\n                    })\n                    res.results.forEach((item, i) => {\n                        const html = `<div class=\"img-wrapper\"><a href=\"${item.id}\"><img src=${item.urls.regular}></a></div>`\n                        el.insertAdjacentHTML(\"beforeend\", html)\n                    })\n                }\n                toggle = true\n            })\n        }\n    }\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvc2NyaXB0LmpzP2EyMjYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLFlBQVksYUFBYSxTQUFTO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsMEVBQTBFLFFBQVEsYUFBYSxrQkFBa0I7QUFDakg7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIuL3B1YmxpYy9qcy9zY3JpcHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjbGllbnRJZEFycmF5ID0gW1wiYzBnM0tDZGVZZklnWS1BcUkxV2NfbXhzTzRuMWZDd1RyTlVGQXRrdW9Pc1wiLCAnTXpnakhBcmhXUHFNeldhUkJ6YkdWWXZ3R2ZrbzVEcTJDOHhrTmtheGI4aycsICdYaUUwUzBoZ05FSVFvTlFNenhXRmdqZmk4TFVONnphc3o2eExtb2xGSlVRJywgJ3ZlbzZPeW1ZSU9LZXRUeDYzTW9wN3dFTm54ZE1KbERXaHdNRDNIQ255c0UnLCAna0tTVHluRXdEU3lRR0FmcnNrNFVtMFgtOE1XTGQxcXgwWkxqMk1WZEVWMCddXG5jb25zdCBjbGllbnRJZCA9IGNsaWVudElkQXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2xpZW50SWRBcnJheS5sZW5ndGggKyAxKV1cblxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLnNlYXJjaCBpbnB1dCcpXG5sZXQgdG9nZ2xlID0gdHJ1ZTtcblxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICBpZihpbnB1dC52YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgIGlmKHRvZ2dsZSkge1xuICAgICAgICAgICAgdG9nZ2xlID0gZmFsc2VcbiAgICAgICAgICAgIGZldGNoKGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vc2VhcmNoL3Bob3Rvcz9wYWdlPTEmcXVlcnk9JHtpbnB1dC52YWx1ZX0mY2xpZW50X2lkPSR7Y2xpZW50SWR9YClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJylcbiAgICAgICAgICAgICAgICBpZihyZXMucmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnRpY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkIC5pbWctd3JhcHBlcicpXG4gICAgICAgICAgICAgICAgICAgIGFydGljbGVzLmZvckVhY2goYXJ0aWNsZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHJlcy5yZXN1bHRzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBgPGRpdiBjbGFzcz1cImltZy13cmFwcGVyXCI+PGEgaHJlZj1cIiR7aXRlbS5pZH1cIj48aW1nIHNyYz0ke2l0ZW0udXJscy5yZWd1bGFyfT48L2E+PC9kaXY+YFxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGh0bWwpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRvZ2dsZSA9IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/js/script.js\n");

/***/ })

/******/ });