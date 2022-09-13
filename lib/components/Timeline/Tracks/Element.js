"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Basic = _interopRequireDefault(require("../../Elements/Basic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Element = function Element(props) {
  var time = props.time,
      style = props.style,
      title = props.title,
      start = props.start,
      end = props.end,
      classes = props.classes,
      dataSet = props.dataSet,
      tooltip = props.tooltip,
      clickElement = props.clickElement;

  var handleClick = function handleClick() {
    clickElement(props);
  };

  var elementStyle = _objectSpread({}, time.toStyleLeftAndWidth(start, end), {}, clickElement ? {
    cursor: 'pointer'
  } : {});

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-track__element",
    style: elementStyle,
    onClick: clickElement && handleClick && handleClick
  }, /*#__PURE__*/_react.default.createElement(_Basic.default, {
    title: title,
    start: start,
    end: end,
    style: style,
    classes: classes,
    dataSet: dataSet,
    tooltip: tooltip
  }));
};

Element.propTypes = {
  time: _propTypes.default.shape({
    toStyleLeftAndWidth: _propTypes.default.func
  }).isRequired,
  style: _propTypes.default.shape({}),
  classes: _propTypes.default.arrayOf(_propTypes.default.string.isRequired),
  dataSet: _propTypes.default.shape({}),
  title: _propTypes.default.node,
  start: _propTypes.default.instanceOf(Date).isRequired,
  end: _propTypes.default.instanceOf(Date).isRequired,
  tooltip: _propTypes.default.string,
  clickElement: _propTypes.default.func
};
Element.defaultTypes = {
  clickElement: undefined
};
var _default = Element;
exports.default = _default;