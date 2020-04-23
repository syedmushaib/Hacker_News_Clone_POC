webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/header-comp.js":
/*!***********************************!*\
  !*** ./components/header-comp.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/syekhali/project/POC/Hacker_News_Clone_POC/components/header-comp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function HeaderComponent() {
  var _this = this;

  var headerItems = ['Y', 'Top', 'New'];
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, headerItems.map(function (item) {
    __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 11
      }
    }, "item");
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (HeaderComponent);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: siteTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteTitle", function() { return siteTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-section */ "./components/header-section.js");
/* harmony import */ var _header_comp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-comp */ "./components/header-comp.js");
var _jsxFileName = "/Users/syekhali/project/POC/Hacker_News_Clone_POC/components/layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import styles from './layout.module.css';


 // import utilStyles from '../styles/utils.module.css';

var name = 'Syed Mushaib Khalid';
var siteTitle = 'Next.js Sample Website';

function Layout(_ref) {
  var children = _ref.children,
      home = _ref.home;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_header_section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, name)), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, children), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, "More"));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.084427de061d9d10b53e.hot-update.js.map