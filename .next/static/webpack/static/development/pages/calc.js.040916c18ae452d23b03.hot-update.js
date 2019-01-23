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
      var lastValue = _this.state.res.charAt(_this.state.res.length - 1);

      if (_this.state.res.length == 0 && digit == ".") {
        return false;
      } else {
        if (lastValue != "." || digit != ".") {
          var expression = _this.state.res + digit;

          _this.setState({
            res: expression
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onOperator", function (digit) {
      if (_this.state.res != "") {
        var lastValue = _this.state.res.charAt(_this.state.res.length - 1);

        if (!isNaN(lastValue)) {
          var expression = _this.state.res + digit;

          _this.setState({
            res: expression
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "executeOperation", function () {
      console.log("loool" + _data_digitsAndOperators__WEBPACK_IMPORTED_MODULE_2__["operators"].includes(_this.state.res));
      var results = eval(_this.state.res).toFixed(8);

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
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2849631335" + " " + "z-depth-2 light-blue lighten-2 white-text center-align results",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, this.state.res || "0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2849631335" + " " + "calc-container blue lighten-3 hoverable z-depth-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, _data_digitsAndOperators__WEBPACK_IMPORTED_MODULE_2__["digits"].map(function (digit) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          onClick: function onClick() {
            return _this2.onDigit(digit);
          },
          className: "jsx-2849631335" + " " + "waves-effect waves-light btn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, digit);
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2849631335" + " " + "operators center-align",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, _data_digitsAndOperators__WEBPACK_IMPORTED_MODULE_2__["operators"].map(function (digit) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          onClick: function onClick() {
            return _this2.onOperator(digit);
          },
          className: "jsx-2849631335" + " " + "waves-effect waves-light btn deep-orange darken-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
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
          lineNumber: 62
        },
        __self: this
      }, "C")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: this.executeOperation,
        className: "jsx-2849631335" + " " + "waves-effect waves-light btn deep-orange darken-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "=")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2849631335",
        css: ".results.jsx-2849631335{width:300px;margin:0 auto;font-size:32px;margin-bottom:10px;}.calc-container.jsx-2849631335{width:300px;margin:0 auto;text-align:center;padding:12px;}.calc-container.jsx-2849631335 a.jsx-2849631335{margin:5px;padding:0px 30px 0px 30px;}.operators.jsx-2849631335{border:1px solid #ccc;padding:10px;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb3N2aWNlbnRlL0Rlc2t0b3AvbXlyZXBvcy9yZWFjdC1zdGFydGVyLWNvdXJzZS9jb21wb25lbnRzL0NhbGN1bGF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VvQixBQUd5QixBQU1BLEFBTUQsQUFJVyxXQUhJLENBWlosQUFNQSxVQVVELElBZkUsQUFNRyxTQVVGLEVBSnBCLElBWHVCLEdBTVAsT0FVaEIsTUFUQSxHQU5BIiwiZmlsZSI6Ii9Vc2Vycy9jYXJsb3N2aWNlbnRlL0Rlc2t0b3AvbXlyZXBvcy9yZWFjdC1zdGFydGVyLWNvdXJzZS9jb21wb25lbnRzL0NhbGN1bGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkaWdpdHMsIG9wZXJhdG9ycyB9IGZyb20gJy4uL2RhdGEvZGlnaXRzQW5kT3BlcmF0b3JzJ1xuXG5jbGFzcyBDYWxjdWxhdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgcmVzOiBcIlwiXG4gICAgfVxuICAgIG9uRGlnaXQgPSAoZGlnaXQpID0+IHtcbiAgICAgICAgY29uc3QgbGFzdFZhbHVlID0gdGhpcy5zdGF0ZS5yZXMuY2hhckF0KHRoaXMuc3RhdGUucmVzLmxlbmd0aCAtIDEpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZXMubGVuZ3RoID09IDAgJiYgZGlnaXQgPT0gXCIuXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChsYXN0VmFsdWUgIT0gXCIuXCIgfHwgZGlnaXQgIT0gXCIuXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBleHByZXNzaW9uID0gdGhpcy5zdGF0ZS5yZXMgKyBkaWdpdDtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgcmVzOiBleHByZXNzaW9uXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uT3BlcmF0b3IgPSAoZGlnaXQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucmVzICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RWYWx1ZSA9IHRoaXMuc3RhdGUucmVzLmNoYXJBdCh0aGlzLnN0YXRlLnJlcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIGlmICghaXNOYU4obGFzdFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLnN0YXRlLnJlcyArIGRpZ2l0O1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICByZXM6IGV4cHJlc3Npb25cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGV4ZWN1dGVPcGVyYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9vb2xcIiArIG9wZXJhdG9ycy5pbmNsdWRlcyh0aGlzLnN0YXRlLnJlcykpO1xuICAgICAgICBjb25zdCByZXN1bHRzID0gZXZhbCh0aGlzLnN0YXRlLnJlcykudG9GaXhlZCg4KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByZXM6IHJlc3VsdHNcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei1kZXB0aC0yIGxpZ2h0LWJsdWUgbGlnaHRlbi0yIHdoaXRlLXRleHQgY2VudGVyLWFsaWduIHJlc3VsdHNcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmVzIHx8IFwiMFwifVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsYy1jb250YWluZXIgYmx1ZSBsaWdodGVuLTMgaG92ZXJhYmxlIHotZGVwdGgtMlwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaWdpdHMubWFwKGRpZ2l0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCIgb25DbGljaz17KCkgPT4gdGhpcy5vbkRpZ2l0KGRpZ2l0KX0+e2RpZ2l0fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BlcmF0b3JzIGNlbnRlci1hbGlnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9ycy5tYXAoZGlnaXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBkZWVwLW9yYW5nZSBkYXJrZW4tMVwiIG9uQ2xpY2s9eygpID0+IHRoaXMub25PcGVyYXRvcihkaWdpdCl9PntkaWdpdH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBkZWVwLW9yYW5nZSBkYXJrZW4tMVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyByZXM6IFwiXCIgfSl9PkM8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGRlZXAtb3JhbmdlIGRhcmtlbi0xXCIgb25DbGljaz17dGhpcy5leGVjdXRlT3BlcmF0aW9ufT49PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e1xuICAgICAgICAgICAgICAgICAgICBgXG4gICAgLnJlc3VsdHN7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhbGMtY29udGFpbmVye1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nIDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhbGMtY29udGFpbmVyIGF7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAzMHB4IDBweCAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5vcGVyYXRvcnN7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvcjsiXX0= */\n/*@ sourceURL=/Users/carlosvicente/Desktop/myrepos/react-starter-course/components/Calculator.js */",
        __self: this
      }));
    }
  }]);

  return Calculator;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Calculator);

/***/ })

})
//# sourceMappingURL=calc.js.040916c18ae452d23b03.hot-update.js.map