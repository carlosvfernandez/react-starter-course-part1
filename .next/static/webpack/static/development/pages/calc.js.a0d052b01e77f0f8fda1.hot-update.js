webpackHotUpdate("static/development/pages/calc.js",{

/***/ "./components/Calculator.js":
/*!**********************************!*\
  !*** ./components/Calculator.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_digitsAndOperators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/digitsAndOperators */ "./data/digitsAndOperators.js");
/* harmony import */ var _data_digitsAndOperators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_digitsAndOperators__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/carlosvicente/Desktop/myrepos/react-starter-course/components/Calculator.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Calculator =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Calculator, _React$Component);

  function Calculator() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Calculator);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Calculator)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      res: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDigit", function (digit) {
      var expression = _this.state.res + digit;

      _this.setState({
        res: expression
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "executeOperation", function () {
      var results = eval(_this.state.res);

      _this.setState({
        res: results
      });
    });

    return _this;
  }

  _createClass(Calculator, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2849631335",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2849631335" + " " + "z-depth-2 light-blue lighten-2 white-text center-align results",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, this.state.res || "0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2849631335" + " " + "calc-container blue lighten-3 hoverable z-depth-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].map(function (digit) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          onClick: function onClick() {
            return _this2.onDigit(digit);
          },
          className: "jsx-2849631335" + " " + "waves-effect waves-light btn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, digit);
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2849631335" + " " + "operators center-align",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, ["+", "-", "/", "*"].map(function (digit) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          onClick: function onClick() {
            return _this2.onDigit(digit);
          },
          className: "jsx-2849631335" + " " + "waves-effect waves-light btn deep-orange darken-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, digit);
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.setState({
            res: ""
          });
        },
        className: "jsx-2849631335" + " " + "waves-effect waves-light btn deep-orange darken-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "C")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: this.executeOperation,
        className: "jsx-2849631335" + " " + "waves-effect waves-light btn deep-orange darken-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "=")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2849631335",
        css: ".results.jsx-2849631335{width:300px;margin:0 auto;font-size:32px;margin-bottom:10px;}.calc-container.jsx-2849631335{width:300px;margin:0 auto;text-align:center;padding:12px;}.calc-container.jsx-2849631335 a.jsx-2849631335{margin:5px;padding:0px 30px 0px 30px;}.operators.jsx-2849631335{border:1px solid #ccc;padding:10px;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb3N2aWNlbnRlL0Rlc2t0b3AvbXlyZXBvcy9yZWFjdC1zdGFydGVyLWNvdXJzZS9jb21wb25lbnRzL0NhbGN1bGF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NvQixBQUd5QixBQU1BLEFBTUQsQUFJVyxXQUhJLENBWlosQUFNQSxVQVVELElBZkUsQUFNRyxTQVVGLEVBSnBCLElBWHVCLEdBTVAsT0FVaEIsTUFUQSxHQU5BIiwiZmlsZSI6Ii9Vc2Vycy9jYXJsb3N2aWNlbnRlL0Rlc2t0b3AvbXlyZXBvcy9yZWFjdC1zdGFydGVyLWNvdXJzZS9jb21wb25lbnRzL0NhbGN1bGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RpZ2l0cywgb3BlcmF0b3JzfSBmcm9tICcuLi9kYXRhL2RpZ2l0c0FuZE9wZXJhdG9ycydcblxuY2xhc3MgQ2FsY3VsYXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHJlczogXCJcIlxuICAgIH1cbiAgICBvbkRpZ2l0ID0gKGRpZ2l0KSA9PiB7XG4gICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLnN0YXRlLnJlcyArIGRpZ2l0O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlczogZXhwcmVzc2lvblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGV4ZWN1dGVPcGVyYXRpb24gPSAoKT0+e1xuICAgICAgICBjb25zdCByZXN1bHRzID0gZXZhbCh0aGlzLnN0YXRlLnJlcyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcmVzOiByZXN1bHRzXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotZGVwdGgtMiBsaWdodC1ibHVlIGxpZ2h0ZW4tMiB3aGl0ZS10ZXh0IGNlbnRlci1hbGlnbiByZXN1bHRzXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlcyB8fCBcIjBcIn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGMtY29udGFpbmVyIGJsdWUgbGlnaHRlbi0zIGhvdmVyYWJsZSB6LWRlcHRoLTJcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgW1wiMFwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIi5cIl0ubWFwKGRpZ2l0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCIgb25DbGljaz17KCkgPT4gdGhpcy5vbkRpZ2l0KGRpZ2l0KX0+e2RpZ2l0fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BlcmF0b3JzIGNlbnRlci1hbGlnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIitcIiwgXCItXCIsIFwiL1wiLCBcIipcIl0ubWFwKGRpZ2l0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gZGVlcC1vcmFuZ2UgZGFya2VuLTFcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uRGlnaXQoZGlnaXQpfT57ZGlnaXR9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gZGVlcC1vcmFuZ2UgZGFya2VuLTFcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgcmVzOiBcIlwiIH0pfT5DPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBkZWVwLW9yYW5nZSBkYXJrZW4tMVwiIG9uQ2xpY2s9e3RoaXMuZXhlY3V0ZU9wZXJhdGlvbn0+PTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntcbiAgICAgICAgICAgICAgICAgICAgYFxuICAgIC5yZXN1bHRze1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYWxjLWNvbnRhaW5lcntcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZyAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYWxjLWNvbnRhaW5lciBhe1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMzBweCAwcHggMzBweDtcbiAgICAgICAgfVxuICAgICAgICAub3BlcmF0b3Jze1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0b3I7Il19 */\n/*@ sourceURL=/Users/carlosvicente/Desktop/myrepos/react-starter-course/components/Calculator.js */",
        __self: this
      }));
    }
  }]);

  return Calculator;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Calculator);

/***/ }),

/***/ "./data/digitsAndOperators.js":
/*!************************************!*\
  !*** ./data/digitsAndOperators.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
var operators = ["+", "-", "/", "*"];
module.exports = {
  digits: digits,
  operators: operators
};

/***/ })

})
//# sourceMappingURL=calc.js.a0d052b01e77f0f8fda1.hot-update.js.map