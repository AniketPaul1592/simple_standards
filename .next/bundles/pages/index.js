
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(66);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(65);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _MyLayout = __webpack_require__(559);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = __webpack_require__(553);

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = __webpack_require__(557);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\lenovo\\Documents\\GitHub\\react-using-nextjs\\pages\\index.js?entry';


var Index = function Index(props) {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'Batman TV Shows'), _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, props.shows.map(function (_ref) {
    var show = _ref.show;
    return _react2.default.createElement('li', { key: show.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, _react2.default.createElement(_link2.default, { as: '/p/' + show.id, href: '/post?id=' + show.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, _react2.default.createElement('a', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, show.name)));
  })));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
  var res, data;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;

          console.log('Show data fetched. Count: ' + data.length);

          return _context.abrupt('return', {
            shows: data
          });

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\lenovo\\Documents\\GitHub\\react-using-nextjs\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\lenovo\\Documents\\GitHub\\react-using-nextjs\\pages\\index.js"); } } })();
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
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(553);

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

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(558);

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

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(554);


/***/ })

},[560]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MWVhZTI2NiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz8xZWFlMjY2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXlMYXlvdXQuanM/MWVhZTI2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuXHJcbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXHJcbiAgPExheW91dD5cclxuICAgIDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxyXG4gICAgPHVsPlxyXG4gICAgICB7cHJvcHMuc2hvd3MubWFwKCh7c2hvd30pID0+IChcclxuICAgICAgICA8bGkga2V5PXtzaG93LmlkfT5cclxuICAgICAgICAgIDxMaW5rIGFzPXtgL3AvJHtzaG93LmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke3Nob3cuaWR9YH0+XHJcbiAgICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICA8L0xheW91dD5cclxuKVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzaG93czogZGF0YVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IGhlYWRlckRpZmYgPSB7XHJcblx0bWFyZ2luUmlnaHQgOiAxNVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcblx0PGRpdj5cclxuXHQ8TGluayBocmVmPVwiL1wiPlxyXG5cdFx0PGEgc3R5bGU9e2hlYWRlckRpZmZ9PkhvbWU8L2E+XHJcblx0PC9MaW5rPlxyXG5cdDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuXHRcdDxhIHN0eWxlPXtoZWFkZXJEaWZmfT5BYm91dDwvYT5cclxuXHQ8L0xpbms+XHJcblx0PC9kaXY+XHJcbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXHJcblxyXG5jb25zdCBsYXlvdXRCb3VuZGFyeSA9IHtcclxuXHRtYXJnaW4gOiAyMCxcclxuXHRwYWRkaW5nOiAyMCxcclxuICBcdGJvcmRlcjogJzFweCBzb2xpZCAjREREJ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IChcclxuXHQ8ZGl2IHN0eWxlID0ge2xheW91dEJvdW5kYXJ5fT5cclxuXHRcdDxIZWFkZXIvPlxyXG5cdFx0e3Byb3BzLmNoaWxkcmVufVxyXG5cdDwvZGl2PlxyXG4pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9NeUxheW91dC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBSkE7QUFDQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFHQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQVJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUlBO0FBSEE7QUFDQTtBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        