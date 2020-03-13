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
/******/ ({

/***/ "./controllers/routing.js":
/*!********************************!*\
  !*** ./controllers/routing.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const fetch = __webpack_require__(/*! node-fetch */ \"node-fetch\");\nconst clientIdArray = [\"c0g3KCdeYfIgY-AqI1Wc_mxsO4n1fCwTrNUFAtkuoOs\", 'MzgjHArhWPqMzWaRBzbGVYvwGfko5Dq2C8xkNkaxb8k', 'XiE0S0hgNEIQoNQMzxWFgjfi8LUN6zasz6xLmolFJUQ', 'veo6OymYIOKetTx63Mop7wENnxdMJlDWhwMD3HCnysE', 'kKSTynEwDSyQGAfrsk4Um0X-8MWLd1qx0ZLj2MVdEV0']\nconst clientId = clientIdArray[Math.floor(Math.random() * clientIdArray.length + 1)]\nlet homeQuery = 'beach'\n\nfunction getImages(req, res) {\n\tfetch(\n\t\t`https://api.unsplash.com/search/photos?page=1&query=${homeQuery}&client_id=${clientId}`\n\t)\n\t\t.then(res => res.json())\n\t\t.then(body => {\n\t\t\tres.render(\"index\", {\n\t\t\t\ttitle: \"Unsplash img finder\",\n                heading: \"hello\",\n                query: true,\n\t\t\t\tdata: body\n\t\t\t});\n\t\t});\n}\n\nfunction getDetail(req, res) {\n\tfetch(\n\t\t`https://api.unsplash.com/photos/${req.params.id}?client_id=${clientId}`\n\t)\n\t\t.then(res => res.json())\n\t\t.then(body => {\n\t\t\tres.render(\"detail\", {\n\t\t\t\ttitle: body.description,\n\t\t\t\theading: body.description,\n\t\t\t\tdata: {\n\t\t\t\t\timg: body.urls.regular,\n\t\t\t\t\tdownload: body.links.download,\n\t\t\t\t\tlikes: body.likes,\n\t\t\t\t\tuser: body.user.username,\n\t\t\t\t\tfirstName: body.user.first_name,\n\t\t\t\t\tlastName: body.user.last_name,\n\t\t\t\t\tportfolio: body.user.portfolio_url,\n\t\t\t\t\tprofileImg: body.user.profile_image.large,\n\t\t\t\t\trelated: body.related_collections.results,\n\t\t\t\t\tviews: body.views,\n\t\t\t\t\tbio: body.user.bio,\n\t\t\t\t\ttwitter: body.user.twitter_username,\n\t\t\t\t\tinstagram: body.user.instagram_username\n\t\t\t\t}\n\t\t\t});\n\t\t});\n}\n\nfunction getPreviousPage(req, res, next) {\n\tres.redirect(\"/\");\n}\n\nasync function getResults(req, res) {\n\tif (req.body.search) {\n        homeQuery = req.body.search\n\t\tfetch(`https://api.unsplash.com/search/photos?page=1&query=${req.body.search}&client_id=${clientId}`)\n\t\t\t.then(res => res.json())\n\t\t\t.then(body => {\n\t\t\t\tres.render(\"index\", {\n\t\t\t\t\ttitle: \"Unsplash img finder\",\n                    heading: \"hello\",\n                    query: true,\n\t\t\t\t\tdata: body\n\t\t\t\t})\n\t\t\t})\n\t} else {\n        res.render(\"index\", {\n            title: \"Unsplash img finder\",\n            heading: \"No results found\",\n            query: false,\n            data: []\n        })\n    }\n}\n\nconst getRandomImg = async () => {\n    let randomArr = []\n    for (let index = 0; index < 10; index++) {\n        await fetch(`https://api.unsplash.com/photos/random?client_id=${clientId}`)\n            .then(res => res.json())\n            .then(body => {\n            randomArr.push(body)\n            })\n            .catch(err => console.log(err))\n    }\n    return randomArr\n}\n\nmodule.exports = {\n\tgetImages,\n\tgetDetail,\n\tgetPreviousPage,\n\tgetResults\n};\n\n\n//# sourceURL=webpack:///./controllers/routing.js?");

/***/ }),

/***/ "./routes/routes.js":
/*!**************************!*\
  !*** ./routes/routes.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\n\r\nconst router = express.Router();\r\nconst {\r\n    getImages,\r\n    getDetail,\r\n    getPreviousPage,\r\n    getResults\r\n} = __webpack_require__(/*! ../controllers/routing */ \"./controllers/routing.js\")\r\n\r\nrouter.get('/', getImages)\r\n    .get('/detail/:id', getDetail)\r\n    .get('/back', getPreviousPage)\r\n    .post('/search', getResults)\r\n\r\nmodule.exports = router;\n\n//# sourceURL=webpack:///./routes/routes.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\")\r\n\r\nconst config = {\r\n    port: 3000\r\n}\r\n\r\nconst app = express();\r\nconst routes = __webpack_require__(/*! ./routes/routes */ \"./routes/routes.js\");\r\n\r\napp.set('view engine', 'ejs')\r\n    .set('views', 'views')\r\n    .use('/public', express.static('public'))\r\n    .use(bodyParser.urlencoded({ extended: true }))\r\n    .use(__webpack_require__(/*! prerender-node */ \"prerender-node\"))\r\n    .use(routes)\r\n\r\napp.listen(config.port, function() {\r\n    console.log(`Application started on port: ${config.port}`);\r\n});\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./server.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./server.js */\"./server.js\");\n\n\n//# sourceURL=webpack:///multi_./server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ }),

/***/ "prerender-node":
/*!*********************************!*\
  !*** external "prerender-node" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prerender-node\");\n\n//# sourceURL=webpack:///external_%22prerender-node%22?");

/***/ })

/******/ });