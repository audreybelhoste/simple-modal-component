"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

require("./Modal.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Modal = _ref => {
  let {
    children,
    isOpened,
    onClose,
    style
  } = _ref;
  (0, _react.useEffect)(() => {
    function handleEscapeKey(e) {
      if (e.code === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);
  return isOpened && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content",
    style: style,
    onClick: e => {
      e.stopPropagation();
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-close",
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "modal-sr-only"
  }, "Close")), /*#__PURE__*/_react.default.createElement("div", null, children)));
};

Modal.propTypes = {
  children: _propTypes.default.object,
  isOpened: _propTypes.default.bool,
  onClose: _propTypes.default.func
};
var _default = Modal;
exports.default = _default;