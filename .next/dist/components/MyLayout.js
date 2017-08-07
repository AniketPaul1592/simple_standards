'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../components/Header');

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