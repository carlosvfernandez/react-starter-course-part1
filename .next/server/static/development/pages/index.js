module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ComponentClass.js":
/*!**************************************!*\
  !*** ./components/ComponentClass.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/carlosvicente/Desktop/myrepos/react-starter-course/components/ComponentClass.js";


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "container-class",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-921911432",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-921911432",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.ClassName, " Class"), props.pupils.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: item.id,
      className: "jsx-921911432" + " " + "list-class",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.image,
      alt: "",
      className: "jsx-921911432",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-921911432",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, item.first_name, " ", item.last_name));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "921911432",
    css: "#container-class.jsx-921911432{-webkit-perspective:500px;-moz-perspective:500px;-ms-perspective:500px;perspective:500px;}.list-class.jsx-921911432{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.list-class.jsx-921911432 img.jsx-921911432{padding:3px;border:solid 1px #ccc;}.list-class.jsx-921911432 p.jsx-921911432{font-size:12px;font-weight:bold;font-style:italic;margin-left:12px;}.list-class.jsx-921911432:hover{-webkit-transform:translateY(10px)scale(1);-ms-transform:translateY(10px)scale(1);transform:translateY(10px)scale(1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb3N2aWNlbnRlL0Rlc2t0b3AvbXlyZXBvcy9yZWFjdC1zdGFydGVyLWNvdXJzZS9jb21wb25lbnRzL0NvbXBvbmVudENsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVvQixBQUd1QyxBQUdMLEFBR0QsQUFJRyxBQU1vQixZQVRiLEdBSUwsaUJBQ0MsRUFKdEIsZ0JBS3FCLGlCQUNyQixPQVZBLGVBSEEsNEJBZ0JBIiwiZmlsZSI6Ii9Vc2Vycy9jYXJsb3N2aWNlbnRlL0Rlc2t0b3AvbXlyZXBvcy9yZWFjdC1zdGFydGVyLWNvdXJzZS9jb21wb25lbnRzL0NvbXBvbmVudENsYXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG4gICAgPGRpdiBpZD1cImNvbnRhaW5lci1jbGFzc1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPntwcm9wcy5DbGFzc05hbWV9IENsYXNzPC9oMj5cbiAgICAgICAgICAgIHtwcm9wcy5wdXBpbHMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1jbGFzc1wiIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZX0gYWx0PVwiXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5maXJzdF9uYW1lfSB7aXRlbS5sYXN0X25hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAjY29udGFpbmVyLWNsYXNze1xuICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNTAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5saXN0LWNsYXNze1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubGlzdC1jbGFzcyBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxpc3QtY2xhc3MgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5saXN0LWNsYXNzOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweClzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=/Users/carlosvicente/Desktop/myrepos/react-starter-course/components/ComponentClass.js */",
    __self: this
  })));
});

/***/ }),

/***/ "./components/common/Header.js":
/*!*************************************!*\
  !*** ./components/common/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/carlosvicente/Desktop/myrepos/react-starter-course/components/common/Header.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "My course of Next.js and Rect"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })));
});

/***/ }),

/***/ "./components/common/TitleBar.js":
/*!***************************************!*\
  !*** ./components/common/TitleBar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/links */ "./data/links.js");
/* harmony import */ var _data_links__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_links__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/carlosvicente/Desktop/myrepos/react-starter-course/components/common/TitleBar.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    className: "brand-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Next.js & React course"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    id: "nav-mobile",
    className: "right hide-on-med-and-down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, _data_links__WEBPACK_IMPORTED_MODULE_2__["links"].map(function (link) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: link.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: link.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, link.name)));
  }))));
});

/***/ }),

/***/ "./data/links.js":
/*!***********************!*\
  !*** ./data/links.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

var links = [{
  url: "/",
  name: "Home"
}, {
  url: "/calc",
  name: "Calculator"
}];
module.exports = {
  links: links
};

/***/ }),

/***/ "./data/pupils.js":
/*!************************!*\
  !*** ./data/pupils.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

var bioloyPupils = [{
  "id": 1,
  "first_name": "Adelheid",
  "last_name": "Scothron",
  "email": "ascothron0@mapquest.com",
  "image": "https://robohash.org/commodiveritatisharum.png?size=50x50&set=set1"
}, {
  "id": 2,
  "first_name": "Angele",
  "last_name": "Enderwick",
  "email": "aenderwick1@fema.gov",
  "image": "https://robohash.org/quisitipsa.bmp?size=50x50&set=set1"
}, {
  "id": 3,
  "first_name": "Alie",
  "last_name": "Bilovsky",
  "email": "abilovsky2@geocities.com",
  "image": "https://robohash.org/quiadolorumexpedita.png?size=50x50&set=set1"
}, {
  "id": 4,
  "first_name": "Tucker",
  "last_name": "Grinikhin",
  "email": "tgrinikhin3@businessweek.com",
  "image": "https://robohash.org/deseruntculpablanditiis.bmp?size=50x50&set=set1"
}, {
  "id": 5,
  "first_name": "Rolf",
  "last_name": "Saile",
  "email": "rsaile4@cafepress.com",
  "image": "https://robohash.org/voluptatemvoluptatemminus.bmp?size=50x50&set=set1"
}, {
  "id": 6,
  "first_name": "Welch",
  "last_name": "Dye",
  "email": "wdye5@fastcompany.com",
  "image": "https://robohash.org/etvoluptatemdistinctio.bmp?size=50x50&set=set1"
}, {
  "id": 7,
  "first_name": "Syman",
  "last_name": "Jardine",
  "email": "sjardine6@unblog.fr",
  "image": "https://robohash.org/estquodrerum.jpg?size=50x50&set=set1"
}, {
  "id": 8,
  "first_name": "Daphna",
  "last_name": "Cudde",
  "email": "dcudde7@netlog.com",
  "image": "https://robohash.org/veliustonam.bmp?size=50x50&set=set1"
}, {
  "id": 9,
  "first_name": "Sig",
  "last_name": "Sollowaye",
  "email": "ssollowaye8@loc.gov",
  "image": "https://robohash.org/nonfacerevoluptas.png?size=50x50&set=set1"
}, {
  "id": 10,
  "first_name": "Hillery",
  "last_name": "Corden",
  "email": "hcorden9@1und1.de",
  "image": "https://robohash.org/consequaturvelitvel.jpg?size=50x50&set=set1"
}];
var mathPupils = [{
  "id": 1,
  "first_name": "Carrol",
  "last_name": "Gisburne",
  "email": "cgisburne0@mit.edu",
  "image": "https://robohash.org/essequasmodi.bmp?size=50x50&set=set1"
}, {
  "id": 2,
  "first_name": "Lexine",
  "last_name": "Playfoot",
  "email": "lplayfoot1@quantcast.com",
  "image": "https://robohash.org/inteneturquisquam.bmp?size=50x50&set=set1"
}, {
  "id": 3,
  "first_name": "Donny",
  "last_name": "Verdey",
  "email": "dverdey2@skype.com",
  "image": "https://robohash.org/rerummolestiaeeveniet.png?size=50x50&set=set1"
}, {
  "id": 4,
  "first_name": "Annecorinne",
  "last_name": "Seefeldt",
  "email": "aseefeldt3@admin.ch",
  "image": "https://robohash.org/autveroautem.jpg?size=50x50&set=set1"
}, {
  "id": 5,
  "first_name": "Tani",
  "last_name": "Klainman",
  "email": "tklainman4@bluehost.com",
  "image": "https://robohash.org/adipiscilaboreet.png?size=50x50&set=set1"
}, {
  "id": 6,
  "first_name": "Wendall",
  "last_name": "Longbone",
  "email": "wlongbone5@netvibes.com",
  "image": "https://robohash.org/excepturiquodet.bmp?size=50x50&set=set1"
}, {
  "id": 7,
  "first_name": "Jerome",
  "last_name": "Maclean",
  "email": "jmaclean6@deliciousdays.com",
  "image": "https://robohash.org/cumqueautsuscipit.bmp?size=50x50&set=set1"
}, {
  "id": 8,
  "first_name": "Neile",
  "last_name": "Adamiak",
  "email": "nadamiak7@unesco.org",
  "image": "https://robohash.org/voluptatemetsed.bmp?size=50x50&set=set1"
}, {
  "id": 9,
  "first_name": "Daisi",
  "last_name": "Fenlon",
  "email": "dfenlon8@walmart.com",
  "image": "https://robohash.org/eumconsequaturexpedita.bmp?size=50x50&set=set1"
}, {
  "id": 10,
  "first_name": "Jeffry",
  "last_name": "Bowton",
  "email": "jbowton9@cbslocal.com",
  "image": "https://robohash.org/auteaquesint.png?size=50x50&set=set1"
}];
module.exports = {
  bioloyPupils: bioloyPupils,
  mathPupils: mathPupils
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ComponentClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ComponentClass */ "./components/ComponentClass.js");
/* harmony import */ var _components_common_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/Header */ "./components/common/Header.js");
/* harmony import */ var _data_pupils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/pupils */ "./data/pupils.js");
/* harmony import */ var _data_pupils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_pupils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_common_TitleBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/common/TitleBar */ "./components/common/TitleBar.js");
var _jsxFileName = "/Users/carlosvicente/Desktop/myrepos/react-starter-course/pages/index.js";






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3634423921",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_common_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_common_TitleBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      textAlign: "center"
    },
    className: "jsx-3634423921",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Plan Courses"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-around"
    },
    className: "jsx-3634423921",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ComponentClass__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ClassName: "Biology",
    pupils: _data_pupils__WEBPACK_IMPORTED_MODULE_4__["bioloyPupils"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ComponentClass__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ClassName: "Math",
    pupils: _data_pupils__WEBPACK_IMPORTED_MODULE_4__["mathPupils"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3634423921",
    css: "body{background:#ffca20;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb3N2aWNlbnRlL0Rlc2t0b3AvbXlyZXBvcy9yZWFjdC1zdGFydGVyLWNvdXJzZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmdCLEFBR21DLG1CQUN0QiIsImZpbGUiOiIvVXNlcnMvY2FybG9zdmljZW50ZS9EZXNrdG9wL215cmVwb3MvcmVhY3Qtc3RhcnRlci1jb3Vyc2UvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50Q2xhc3MgZnJvbSAnLi4vY29tcG9uZW50cy9Db21wb25lbnRDbGFzcydcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vSGVhZGVyJ1xuaW1wb3J0IHsgYmlvbG95UHVwaWxzLCBtYXRoUHVwaWxzIH0gZnJvbSAnLi4vZGF0YS9wdXBpbHMnXG5pbXBvcnQgVGl0bGVCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vVGl0bGVCYXInXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxUaXRsZUJhciAvPlxuICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlBsYW4gQ291cnNlczwvaDE+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiIH19PlxuICAgICAgICAgICAgPENvbXBvbmVudENsYXNzIENsYXNzTmFtZT1cIkJpb2xvZ3lcIiBwdXBpbHM9e2Jpb2xveVB1cGlsc30gLz5cbiAgICAgICAgICAgIDxDb21wb25lbnRDbGFzcyBDbGFzc05hbWU9XCJNYXRoXCIgcHVwaWxzPXttYXRoUHVwaWxzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgYm9keXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmNhMjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4pIl19 */\n/*@ sourceURL=/Users/carlosvicente/Desktop/myrepos/react-starter-course/pages/index.js */",
    __self: this
  }));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map