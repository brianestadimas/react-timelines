"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Body = _interopRequireDefault(require("../Body"));

var _Tracks = _interopRequireDefault(require("../Tracks"));

var _Grid = _interopRequireDefault(require("../Grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultProps = {
  time: {},
  grid: [],
  tracks: []
};
describe('<Body />', function () {
  it('renders <Tracks />', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Body.default, defaultProps));
    expect(wrapper.find(_Tracks.default).exists()).toBe(true);
  });
  it('renders <Grid /> if grid prop exists', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Body.default, defaultProps));
    expect(wrapper.find(_Grid.default).exists()).toBe(true);
  });
  it('does not render <Grid /> if grid prop does not exist', function () {
    var props = _objectSpread({}, defaultProps, {
      grid: undefined
    });

    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Body.default, props));
    expect(wrapper.find(_Grid.default).exists()).toBe(false);
  });
});