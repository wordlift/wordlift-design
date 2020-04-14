import _objectWithoutProperties from "/Users/david/Developer/wordlift/libraries/wordlift-design/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "/Users/david/Developer/wordlift/libraries/wordlift-design/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border: .14rem solid transparent;\n  border-radius: ", ";\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  padding: ", ";\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: all 150ms ease-out;\n  transform: translate3d(0,0,0);\n  vertical-align: top;\n  white-space: nowrap;\n  user-select: none;\n  opacity: 1;\n  margin: 0;\n  background: transparent;\n\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1;\n\n  ", "\n\n  ", " {\n    transform: scale3d(1,1,1) translate3d(0,0,0);\n    transition: transform 700ms ", ";\n    opacity: 1;\n  }\n\n  ", " {\n    transform: translate3d(0, 100%, 0);\n  }\n\n  svg {\n    height: ", "px;\n    width: ", "px;\n    vertical-align: top;\n    margin-right: ", "px;\n    margin-top: ", "px;\n    margin-bottom: ", "px;\n\n    /* Necessary for js mouse events to not glitch out when hovering on svgs */\n    pointer-events: none;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n\n  ", "\n\n  ", ";\n\n    ", ";\n\n    ", ";\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  opacity: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: top;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { Fragment } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { color, spacing, typography } from "./shared/styles";
import { easing } from "./shared/animation";
var Text = styled.span(_templateObject());
var Loading = styled.span(_templateObject2());
var APPEARANCES = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DANGER: "danger",
  WARNING: "warning",
  SUCCESS: "success",
  DARK: "dark",
  LIGHT: "light"
};
var SIZES = {
  MINI: "mini",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
};
var VARIATIONS = {
  FILL: "fill",
  OUTLINE: "outline"
};

var switchPadding = function switchPadding(size) {
  switch (size) {
    case SIZES.MINI:
      return ".5rem 1.4rem";

    case SIZES.SMALL:
      return ".6rem 1.6rem";

    case SIZES.MEDIUM:
      return ".7rem 1.8rem";
    // large

    default:
      return ".9rem 4rem";
  }
};

var switchFontSize = function switchFontSize(size) {
  switch (size) {
    case SIZES.MINI:
      return typography.size.mini;

    case SIZES.SMALL:
      return typography.size.small;

    case SIZES.MEDIUM:
      return typography.size.medium;
    // large

    default:
      return typography.size.large;
  }
};

var switchBorderColor = function switchBorderColor(props) {
  if (props.disabled) return color.disabledlight;

  switch (props.appearance) {
    case APPEARANCES.PRIMARY:
      return color.primary;

    case APPEARANCES.DANGER:
      return color.danger;

    case APPEARANCES.WARNING:
      return color.warning;

    case APPEARANCES.SUCCESS:
      return color.success;

    case APPEARANCES.SECONDARY:
      return color.secondary;

    case APPEARANCES.DARK:
      return color.dark;

    case APPEARANCES.LIGHT:
      return color.light;

    default:
      return color.primary;
  }
};

var switchColor = function switchColor(props) {
  if (props.disabled) return color.disableddark;

  if (VARIATIONS.OUTLINE === props.variation) {
    if (APPEARANCES.LIGHT === props.appearance) return color.mediumdark;else return switchBorderColor(props);
  }

  if (APPEARANCES.LIGHT === props.appearance) {
    return color.darkest;
  } else {
    return color.lightest;
  }
};

var StyledButton = styled.button(_templateObject3(), spacing.borderRadius.small, function (props) {
  return switchPadding(props.size);
}, typography.type.primary, function (props) {
  return switchFontSize(props.size);
}, typography.weight.bold, function (props) {
  return !props.isLoading && "\n      &:hover {\n        transform: translate3d(0, -2px, 0);\n        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;\n      }\n\n      &:active {\n        transform: translate3d(0, 0, 0);\n      }\n\n      &:focus {\n        box-shadow: ".concat(rgba(color.primary, 0.4), " 0 1px 9px 2px;\n      }\n\n      &:focus:hover {\n        box-shadow: ").concat(rgba(color.primary, 0.2), " 0 8px 18px 0px;\n      }\n    ");
}, Text, easing.rubber, Loading, function (props) {
  return props.size === SIZES.SMALL ? "14" : "16";
}, function (props) {
  return props.size === SIZES.SMALL ? "14" : "16";
}, function (props) {
  return props.size === SIZES.SMALL ? "4" : "6";
}, function (props) {
  return props.size === SIZES.SMALL ? "-1" : "-2";
}, function (props) {
  return props.size === SIZES.SMALL ? "-1" : "-2";
}, function (props) {
  return props.isUnclickable && "\n      cursor: default !important;\n      pointer-events: none;\n      &:hover {\n        transform: none;\n      }\n    ";
}, function (props) {
  return props.isLoading && "\n      cursor: progress !important;\n      opacity: 0.7;\n\n      ".concat(Loading, " {\n        transition: transform 700ms ").concat(easing.rubber, ";\n        transform: translate3d(0, -50%, 0);\n        opacity: 1;\n      }\n\n      ").concat(Text, " {\n        transform: scale3d(0, 0, 1) translate3d(0, -100%, 0);\n        opacity: 0;\n      }\n\n      &:hover {\n        transform: none;\n      }\n    ");
}, function (props) {
  return props.containsIcon && "\n      svg {\n        display: block;\n        margin: 0;\n      }\n      padding: ".concat(props.size === SIZES.SMALL ? "7" : "12", "px;\n    ");
}, function (props) {
  return props.variation === VARIATIONS.FILL && "\n      background: ".concat(switchBorderColor(props), ";\n      border-color: ").concat(switchBorderColor(props), ";\n      color: ").concat(switchColor(props), ";\n\n      ").concat(!props.isLoading && "\n          &:active {\n            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;\n          }\n          &:focus {\n            box-shadow: ".concat(rgba(color.primary, 0.4), " 0 1px 9px 2px;\n          }\n          &:focus:hover {\n            box-shadow: ").concat(rgba(color.primary, 0.2), " 0 8px 18px 0px;\n          }\n        "), "\n    ");
}, function (props) {
  return props.variation === VARIATIONS.OUTLINE && "\n      background: ".concat(color.lightest, ";\n      border-color: ").concat(switchBorderColor(props), ";\n      color: ").concat(switchColor(props), ";\n\n      ").concat(!props.isLoading && "\n          &:active {\n            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;\n          }\n          &:focus {\n            box-shadow: ".concat(rgba(color.primary, 0.4), " 0 1px 9px 2px;\n          }\n          &:focus:hover {\n            box-shadow: ").concat(rgba(color.primary, 0.2), " 0 8px 18px 0px;\n          }\n        "), "\n    ");
}, function (props) {
  return props.disabled && "\n      cursor: not-allowed !important;\n      &:hover {\n        transform: none;\n        box-shadow: none;\n      }\n      \n    ".concat(props.variation === VARIATIONS.FILL && "\n      background-color: ".concat(color.disabledlight, ";\n      border-color: ").concat(color.disabledlight, ";\n      color: ").concat(color.disableddark, ";\n    "), "\n\n    ").concat(props.variation === VARIATIONS.OUTLINE && "\n      border-color: ".concat(color.disabledlight, ";\n      color: ").concat(color.disabledlight, ";\n    "), "\n\n  ");
}, function (props) {
  return props.appearance === APPEARANCES.OUTLINE && "\n      box-shadow: ".concat(color.medium, " 0 0 0 1px inset;\n      color: ").concat(color.dark, ";\n      background: transparent;\n\n      ").concat(!props.isLoading && "\n          &:hover {\n            box-shadow: ".concat(color.mediumdark, " 0 0 0 1px inset;\n          }\n\n          &:active {\n            background: ").concat(color.medium, ";\n            box-shadow: ").concat(color.medium, " 0 0 0 1px inset;\n            color: ").concat(color.darkest, ";\n          }\n          &:focus {\n            box-shadow: ").concat(color.medium, " 0 0 0 1px inset, ").concat(rgba(color.secondary, 0.4), " 0 1px 9px 2px;\n          }\n          &:focus:hover {\n            box-shadow: ").concat(color.medium, " 0 0 0 1px inset, ").concat(rgba(color.secondary, 0.2), " 0 8px 18px 0px;\n          }\n        "), ";\n    ");
}, function (props) {
  return props.appearance === APPEARANCES.PRIMARY_OUTLINE && "\n        box-shadow: ".concat(color.primary, " 0 0 0 1px inset;\n        color: ").concat(color.primary, ";\n\n        &:hover {\n          box-shadow: ").concat(color.primary, " 0 0 0 1px inset;\n          background: transparent;\n        }\n\n        &:active {\n          background: ").concat(color.primary, ";\n          box-shadow: ").concat(color.primary, " 0 0 0 1px inset;\n          color: ").concat(color.lightest, ";\n        }\n        &:focus {\n          box-shadow: ").concat(color.primary, " 0 0 0 1px inset, ").concat(rgba(color.primary, 0.4), " 0 1px 9px 2px;\n        }\n        &:focus:hover {\n          box-shadow: ").concat(color.primary, " 0 0 0 1px inset, ").concat(rgba(color.primary, 0.2), " 0 8px 18px 0px;\n        }\n      ");
}, function (props) {
  return props.appearance === APPEARANCES.SECONDARY_OUTLINE && "\n        box-shadow: ".concat(color.secondary, " 0 0 0 1px inset;\n        color: ").concat(color.secondary, ";\n\n        &:hover {\n          box-shadow: ").concat(color.secondary, " 0 0 0 1px inset;\n          background: transparent;\n        }\n\n        &:active {\n          background: ").concat(color.secondary, ";\n          box-shadow: ").concat(color.secondary, " 0 0 0 1px inset;\n          color: ").concat(color.lightest, ";\n        }\n        &:focus {\n          box-shadow: ").concat(color.secondary, " 0 0 0 1px inset,\n            ").concat(rgba(color.secondary, 0.4), " 0 1px 9px 2px;\n        }\n        &:focus:hover {\n          box-shadow: ").concat(color.secondary, " 0 0 0 1px inset,\n            ").concat(rgba(color.secondary, 0.2), " 0 8px 18px 0px;\n        }\n      ");
});
var ButtonLink = StyledButton.withComponent("a");

var applyStyle = function applyStyle(ButtonWrapper) {
  return ButtonWrapper && StyledButton.withComponent(function (_ref) {
    var containsIcon = _ref.containsIcon,
        isLoading = _ref.isLoading,
        isUnclickable = _ref.isUnclickable,
        rest = _objectWithoutProperties(_ref, ["containsIcon", "isLoading", "isUnclickable"]);

    return /*#__PURE__*/React.createElement(ButtonWrapper, rest);
  });
};

export function Button(_ref2) {
  var isDisabled = _ref2.isDisabled,
      isLoading = _ref2.isLoading,
      loadingText = _ref2.loadingText,
      isLink = _ref2.isLink,
      children = _ref2.children,
      ButtonWrapper = _ref2.ButtonWrapper,
      props = _objectWithoutProperties(_ref2, ["isDisabled", "isLoading", "loadingText", "isLink", "children", "ButtonWrapper"]);

  var buttonInner = /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Text, null, children), isLoading && /*#__PURE__*/React.createElement(Loading, null, loadingText || "Loading..."));
  var StyledButtonWrapper = React.useMemo(function () {
    return applyStyle(ButtonWrapper);
  }, [ButtonWrapper]);
  var SelectedButton = StyledButton;

  if (ButtonWrapper) {
    SelectedButton = StyledButtonWrapper;
  } else if (isLink) {
    SelectedButton = ButtonLink;
  }

  return /*#__PURE__*/React.createElement(SelectedButton, Object.assign({
    isLoading: isLoading,
    disabled: isDisabled
  }, props), buttonInner);
}
Button.defaultProps = {
  isLoading: false,
  loadingText: null,
  isLink: false,
  appearance: APPEARANCES.PRIMARY,
  variation: VARIATIONS.FILL,
  isDisabled: false,
  isUnclickable: false,
  containsIcon: false,
  size: SIZES.MEDIUM,
  ButtonWrapper: undefined
};