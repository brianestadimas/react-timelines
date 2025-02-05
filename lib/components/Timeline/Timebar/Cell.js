"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cell = function Cell(_ref) {
  var time = _ref.time,
      title = _ref.title,
      start = _ref.start,
      end = _ref.end;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-timebar__cell",
    style: time.toStyleLeftAndWidth(start, end)
  }, title);
};

Cell.propTypes = {
  time: _propTypes.default.shape({
    toStyleLeftAndWidth: _propTypes.default.func
  }),
  title: _propTypes.default.string,
  start: _propTypes.default.instanceOf(Date).isRequired,
  end: _propTypes.default.instanceOf(Date).isRequired
};
var _default = Cell;
exports.default = _default;