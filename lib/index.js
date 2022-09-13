"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Controls = _interopRequireDefault(require("./components/Controls"));

var _Layout = _interopRequireDefault(require("./components/Layout"));

var _time = _interopRequireDefault(require("./utils/time"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UNKNOWN_WIDTH = -1;

var Timeline = /*#__PURE__*/function (_Component) {
  _inherits(Timeline, _Component);

  var _super = _createSuper(Timeline);

  function Timeline(props) {
    var _this;

    _classCallCheck(this, Timeline);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleLayoutChange", function (_ref, cb) {
      var timelineViewportWidth = _ref.timelineViewportWidth,
          sidebarWidth = _ref.sidebarWidth;
      var scale = _this.props.scale;
      var time = (0, _time.default)(_objectSpread({}, scale, {
        viewportWidth: timelineViewportWidth
      }));

      _this.setState({
        time: time,
        timelineViewportWidth: timelineViewportWidth,
        sidebarWidth: sidebarWidth
      }, cb);
    });

    var _timelineViewportWidth = UNKNOWN_WIDTH;
    var _sidebarWidth = UNKNOWN_WIDTH;
    _this.state = {
      time: (0, _time.default)(_objectSpread({}, props.scale, {
        viewportWidth: _timelineViewportWidth
      })),
      timelineViewportWidth: _timelineViewportWidth,
      sidebarWidth: _sidebarWidth
    };
    return _this;
  } // eslint-disable-next-line camelcase


  _createClass(Timeline, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var scale = this.props.scale;
      var timelineViewportWidth = this.state.timelineViewportWidth;

      if (nextProps.scale !== scale) {
        var time = (0, _time.default)(_objectSpread({}, nextProps.scale, {
          viewportWidth: timelineViewportWidth
        }));
        this.setState({
          time: time
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$isOpen = _this$props.isOpen,
          isOpen = _this$props$isOpen === void 0 ? true : _this$props$isOpen,
          toggleOpen = _this$props.toggleOpen,
          zoomIn = _this$props.zoomIn,
          zoomOut = _this$props.zoomOut,
          _this$props$scale = _this$props.scale,
          zoom = _this$props$scale.zoom,
          zoomMin = _this$props$scale.zoomMin,
          zoomMax = _this$props$scale.zoomMax,
          tracks = _this$props.tracks,
          now = _this$props.now,
          timebar = _this$props.timebar,
          toggleTrackOpen = _this$props.toggleTrackOpen,
          _this$props$enableSti = _this$props.enableSticky,
          enableSticky = _this$props$enableSti === void 0 ? false : _this$props$enableSti,
          scrollToNow = _this$props.scrollToNow;
      var _this$state = this.state,
          time = _this$state.time,
          timelineViewportWidth = _this$state.timelineViewportWidth,
          sidebarWidth = _this$state.sidebarWidth;
      var _this$props2 = this.props,
          clickElement = _this$props2.clickElement,
          clickTrackButton = _this$props2.clickTrackButton;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "rt"
      }, /*#__PURE__*/_react.default.createElement(_Controls.default, {
        isOpen: isOpen,
        toggleOpen: toggleOpen,
        zoomIn: zoomIn,
        zoomOut: zoomOut,
        zoom: zoom,
        zoomMin: zoomMin,
        zoomMax: zoomMax
      }), /*#__PURE__*/_react.default.createElement(_Layout.default, {
        enableSticky: enableSticky,
        now: now,
        tracks: tracks,
        timebar: timebar,
        toggleTrackOpen: toggleTrackOpen,
        scrollToNow: scrollToNow,
        time: time,
        isOpen: isOpen,
        onLayoutChange: this.handleLayoutChange,
        timelineViewportWidth: timelineViewportWidth,
        sidebarWidth: sidebarWidth,
        clickElement: clickElement,
        clickTrackButton: clickTrackButton
      }));
    }
  }]);

  return Timeline;
}(_react.Component);

Timeline.propTypes = {
  scale: _propTypes.default.shape({
    start: _propTypes.default.instanceOf(Date).isRequired,
    end: _propTypes.default.instanceOf(Date).isRequired,
    zoom: _propTypes.default.number.isRequired,
    zoomMin: _propTypes.default.number,
    zoomMax: _propTypes.default.number,
    minWidth: _propTypes.default.number
  }),
  isOpen: _propTypes.default.bool,
  toggleOpen: _propTypes.default.func,
  zoomIn: _propTypes.default.func,
  zoomOut: _propTypes.default.func,
  clickElement: _propTypes.default.func,
  clickTrackButton: _propTypes.default.func,
  timebar: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  tracks: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  now: _propTypes.default.instanceOf(Date),
  toggleTrackOpen: _propTypes.default.func,
  enableSticky: _propTypes.default.bool,
  scrollToNow: _propTypes.default.bool
};
var _default = Timeline;
exports.default = _default;