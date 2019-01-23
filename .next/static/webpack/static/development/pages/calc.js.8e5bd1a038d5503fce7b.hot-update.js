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
        if (digit != ".") {
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
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2849631335" + " " + "z-depth-2 light-blue lighten-2 white-text center-align results",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, this.state.res || "0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2849631335" + " " + "calc-container blue lighten-3 hoverable z-depth-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
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
            lineNumber: 49
          },
          __self: this
        }, digit);
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2849631335" + " " + "operators center-align",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
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
            lineNumber: 57
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
          lineNumber: 61
        },
        __self: this
      }, "C")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: this.executeOperation,
        className: "jsx-2849631335" + " " + "waves-effect waves-light btn deep-orange darken-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "=")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2849631335",
        css: ".results.jsx-2849631335{width:300px;margin:0 auto;font-size:32px;margin-bottom:10px;}.calc-container.jsx-2849631335{width:300px;margin:0 auto;text-align:center;padding:12px;}.calc-container.jsx-2849631335 a.jsx-2849631335{margin:5px;padding:0px 30px 0px 30px;}.operators.jsx-2849631335{border:1px solid #ccc;padding:10px;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb3N2aWNlbnRlL0Rlc2t0b3AvbXlyZXBvcy9yZWFjdC1zdGFydGVyLWNvdXJzZS9jb21wb25lbnRzL0NhbGN1bGF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVvQixBQUd5QixBQU1BLEFBTUQsQUFJVyxXQUhJLENBWlosQUFNQSxVQVVELElBZkUsQUFNRyxTQVVGLEVBSnBCLElBWHVCLEdBTVAsT0FVaEIsTUFUQSxHQU5BIiwiZmlsZSI6Ii9Vc2Vycy9jYXJsb3N2aWNlbnRlL0Rlc2t0b3AvbXlyZXBvcy9yZWFjdC1zdGFydGVyLWNvdXJzZS9jb21wb25lbnRzL0NhbGN1bGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkaWdpdHMsIG9wZXJhdG9ycyB9IGZyb20gJy4uL2RhdGEvZGlnaXRzQW5kT3BlcmF0b3JzJ1xuXG5jbGFzcyBDYWxjdWxhdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgcmVzOiBcIlwiXG4gICAgfVxuICAgIG9uRGlnaXQgPSAoZGlnaXQpID0+IHtcbiAgICAgICAgY29uc3QgbGFzdFZhbHVlID0gdGhpcy5zdGF0ZS5yZXMuY2hhckF0KHRoaXMuc3RhdGUucmVzLmxlbmd0aCAtIDEpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZXMubGVuZ3RoID09IDAgJiYgZGlnaXQgPT0gXCIuXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkaWdpdCAhPSBcIi5cIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLnN0YXRlLnJlcyArIGRpZ2l0O1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICByZXM6IGV4cHJlc3Npb25cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25PcGVyYXRvciA9IChkaWdpdCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZXMgIT0gXCJcIikge1xuICAgICAgICAgICAgY29uc3QgbGFzdFZhbHVlID0gdGhpcy5zdGF0ZS5yZXMuY2hhckF0KHRoaXMuc3RhdGUucmVzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgaWYgKCFpc05hTihsYXN0VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXMuc3RhdGUucmVzICsgZGlnaXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHJlczogZXhwcmVzc2lvblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhlY3V0ZU9wZXJhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGV2YWwodGhpcy5zdGF0ZS5yZXMpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlczogcmVzdWx0c1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LWRlcHRoLTIgbGlnaHQtYmx1ZSBsaWdodGVuLTIgd2hpdGUtdGV4dCBjZW50ZXItYWxpZ24gcmVzdWx0c1wiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZXMgfHwgXCIwXCJ9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxjLWNvbnRhaW5lciBibHVlIGxpZ2h0ZW4tMyBob3ZlcmFibGUgei1kZXB0aC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpZ2l0cy5tYXAoZGlnaXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uRGlnaXQoZGlnaXQpfT57ZGlnaXR9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGVyYXRvcnMgY2VudGVyLWFsaWduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3JzLm1hcChkaWdpdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGRlZXAtb3JhbmdlIGRhcmtlbi0xXCIgb25DbGljaz17KCkgPT4gdGhpcy5vbk9wZXJhdG9yKGRpZ2l0KX0+e2RpZ2l0fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGRlZXAtb3JhbmdlIGRhcmtlbi0xXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHJlczogXCJcIiB9KX0+QzwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gZGVlcC1vcmFuZ2UgZGFya2VuLTFcIiBvbkNsaWNrPXt0aGlzLmV4ZWN1dGVPcGVyYXRpb259Pj08L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAucmVzdWx0c3tcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuY2FsYy1jb250YWluZXJ7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmcgMTJweDtcbiAgICAgICAgfVxuICAgICAgICAuY2FsYy1jb250YWluZXIgYXtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDMwcHggMHB4IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm9wZXJhdG9yc3tcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yOyJdfQ== */\n/*@ sourceURL=/Users/carlosvicente/Desktop/myrepos/react-starter-course/components/Calculator.js */",
        __self: this
      }));
    }
  }]);

  return Calculator;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Calculator);

/***/ })

})
//# sourceMappingURL=calc.js.8e5bd1a038d5503fce7b.hot-update.js.map