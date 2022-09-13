"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseSvg = function CloseSvg() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 56 56",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "56",
    height: "8",
    rx: "4",
    transform: "rotate(-45 56.335 16.263)"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    width: "56",
    height: "8",
    rx: "4",
    transform: "rotate(45 -.707 15.364)"
  })));
};

var OpenSvg = function OpenSvg() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 56 56",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "46",
    height: "8",
    rx: "4",
    transform: "translate(5 7)"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    width: "46",
    height: "8",
    rx: "4",
    transform: "translate(5 41)"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    width: "46",
    height: "8",
    rx: "4",
    transform: "translate(5 24)"
  })));
};

var Toggle = function Toggle(_ref) {
  var toggleOpen = _ref.toggleOpen,
      isOpen = _ref.isOpen;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "rt-controls__button rt-controls__button--toggle",
    onClick: toggleOpen,
    type: "button"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "rt-visually-hidden"
  }, isOpen ? 'Close' : 'Open'), isOpen ? /*#__PURE__*/_react.default.createElement(CloseSvg, null) : /*#__PURE__*/_react.default.createElement(OpenSvg, null));
};

Toggle.propTypes = {
  toggleOpen: _propTypes.default.func.isRequired,
  isOpen: _propTypes.default.bool.isRequired
};
var _default = Toggle;
exports.default = _default;