"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./Modal.css");

var Modal = function Modal(_ref) {
  var children = _ref.children,
      isOpened = _ref.isOpened,
      onClose = _ref.onClose,
      style = _ref.style;
  (0, _react.useEffect)(function () {
    function handleEscapeKey(e) {
      if (e.code === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleEscapeKey);
    return function () {
      return document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);
  return isOpened && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content",
    style: style,
    onClick: function onClick(e) {
      e.stopPropagation();
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-close",
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "modal-sr-only"
  }, "Close")), /*#__PURE__*/_react.default.createElement("div", null, children)));
};

var _default = Modal;
exports.default = _default;