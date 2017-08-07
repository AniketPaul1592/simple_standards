
          window.__NEXT_REGISTER_PAGE('/post', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(558);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\lenovo\\Documents\\GitHub\\react-using-nextjs\\components\\Header.js";


var headerDiff = {
	marginRight: 15
};

exports.default = function () {
	return _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement(_link2.default, { href: "/", __source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement("a", { style: headerDiff, __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, "Home")), _react2.default.createElement(_link2.default, { href: "/about", __source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, _react2.default.createElement("a", { style: headerDiff, __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, "About")));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\lenovo\\Documents\\GitHub\\react-using-nextjs\\components\\Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\lenovo\\Documents\\GitHub\\react-using-nextjs\\components\\Header.js"); } } })();

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(559);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\lenovo\\Documents\\GitHub\\react-using-nextjs\\components\\MyLayout.js';


var layoutBoundary = {
	margin: 20,
	padding: 20,
	border: '1px solid #DDD'
};

exports.default = function (props) {
	return _react2.default.createElement('div', { style: layoutBoundary, __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, _react2.default.createElement(_Header2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}), props.children);
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\lenovo\\Documents\\GitHub\\react-using-nextjs\\components\\MyLayout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\lenovo\\Documents\\GitHub\\react-using-nextjs\\components\\MyLayout.js"); } } })();

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _MyLayout = __webpack_require__(560);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\lenovo\\Documents\\GitHub\\react-using-nextjs\\pages\\post.js?entry';


var Content = function Content(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, props.url.query.title), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, 'This is the blog post content.'));
};

exports.default = function (props) {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(Content, { url: props.url, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\lenovo\\Documents\\GitHub\\react-using-nextjs\\pages\\post.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\lenovo\\Documents\\GitHub\\react-using-nextjs\\pages\\post.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/post")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(561);


/***/ })

},[562]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXHBvc3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82MzZlZjVkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXlMYXlvdXQuanM/NjM2ZWY1ZCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0LmpzPzYzNmVmNWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgaGVhZGVyRGlmZiA9IHtcclxuXHRtYXJnaW5SaWdodCA6IDE1XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuXHQ8ZGl2PlxyXG5cdDxMaW5rIGhyZWY9XCIvXCI+XHJcblx0XHQ8YSBzdHlsZT17aGVhZGVyRGlmZn0+SG9tZTwvYT5cclxuXHQ8L0xpbms+XHJcblx0PExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG5cdFx0PGEgc3R5bGU9e2hlYWRlckRpZmZ9PkFib3V0PC9hPlxyXG5cdDwvTGluaz5cclxuXHQ8L2Rpdj5cclxuKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcclxuXHJcbmNvbnN0IGxheW91dEJvdW5kYXJ5ID0ge1xyXG5cdG1hcmdpbiA6IDIwLFxyXG5cdHBhZGRpbmc6IDIwLFxyXG4gIFx0Ym9yZGVyOiAnMXB4IHNvbGlkICNEREQnXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxyXG5cdDxkaXYgc3R5bGUgPSB7bGF5b3V0Qm91bmRhcnl9PlxyXG5cdFx0PEhlYWRlci8+XHJcblx0XHR7cHJvcHMuY2hpbGRyZW59XHJcblx0PC9kaXY+XHJcbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL015TGF5b3V0LmpzIiwiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xyXG5cclxuY29uc3QgQ29udGVudCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8aDE+e3Byb3BzLnVybC5xdWVyeS50aXRsZX08L2gxPlxyXG4gICAgPHA+VGhpcyBpcyB0aGUgYmxvZyBwb3N0IGNvbnRlbnQuPC9wPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgICA8Q29udGVudCB1cmwgPSB7cHJvcHMudXJsfSAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9wb3N0LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBSUE7QUFIQTtBQUNBO0FBRUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        