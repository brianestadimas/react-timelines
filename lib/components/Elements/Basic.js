"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formatDate = require("../../utils/formatDate");

var _classes = _interopRequireDefault(require("../../utils/classes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var buildDataAttributes = function buildDataAttributes() {
  var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var value = {};
  Object.keys(attributes).forEach(function (name) {
    value["data-".concat(name)] = attributes[name];
  });
  return value;
};

var Basic = function Basic(_ref) {
  var start = _ref.start,
      end = _ref.end,
      style = _ref.style,
      classes = _ref.classes,
      dataSet = _ref.dataSet,
      tooltip = _ref.tooltip;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _classes.default)('rt-element', classes),
    style: style
  }, buildDataAttributes(dataSet)), /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-element__content",
    "aria-hidden": "true"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-element__tooltip"
  }, tooltip ?
  /*#__PURE__*/
  // eslint-disable-next-line react/no-danger
  _react.default.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: tooltip.split('\n').join('<br>')
    }
  }) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("strong", null, "Start"), " ", (0, _formatDate.getDayMonth)(start)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("strong", null, "End"), " ", (0, _formatDate.getDayMonth)(end)))));
};

Basic.propTypes = {
  start: _propTypes.default.instanceOf(Date).isRequired,
  end: _propTypes.default.instanceOf(Date).isRequired,
  style: _propTypes.default.shape({}),
  classes: _propTypes.default.arrayOf(_propTypes.default.string.isRequired),
  dataSet: _propTypes.default.shape({}),
  tooltip: _propTypes.default.string
};
var _default = Basic;
exports.default = _default;