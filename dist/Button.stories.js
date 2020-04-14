/**
 * External dependencies
 */
import React from "react";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
/**
 * Internal dependencies
 */

import { Button } from "./Button";
import { Icon } from "./Icon";
export default {
  title: "Design System|Button",
  component: Button
};
export var allButtons = function allButtons() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    size: "large"
  }, "Large"), /*#__PURE__*/React.createElement(Button, {
    size: "large"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "link",
    "aria-label": "Link"
  }), " Large with Icon"), /*#__PURE__*/React.createElement(Button, {
    size: "large"
  }, "Large with Icon ", /*#__PURE__*/React.createElement(Icon, {
    icon: "link",
    "aria-label": "Link"
  })), /*#__PURE__*/React.createElement(Button, {
    size: "medium"
  }, "Medium"), /*#__PURE__*/React.createElement(Button, {
    size: "small"
  }, "Small"), /*#__PURE__*/React.createElement(Button, {
    size: "mini"
  }, "Mini"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Button, {
    size: "large",
    variation: "outline"
  }, "Large"), /*#__PURE__*/React.createElement(Button, {
    size: "medium",
    variation: "outline"
  }, "Medium"), /*#__PURE__*/React.createElement(Button, {
    size: "small",
    variation: "outline"
  }, "Small"), /*#__PURE__*/React.createElement(Button, {
    size: "mini",
    variation: "outline"
  }, "Mini"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Button, {
    isDisabled: true,
    size: "large"
  }, "Large"), /*#__PURE__*/React.createElement(Button, {
    isDisabled: true,
    size: "medium"
  }, "Medium"), /*#__PURE__*/React.createElement(Button, {
    isDisabled: true,
    size: "small"
  }, "Small"), /*#__PURE__*/React.createElement(Button, {
    isDisabled: true,
    size: "mini"
  }, "Mini"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Button, {
    isDisabled: true,
    size: "large",
    variation: "outline"
  }, "Large"), /*#__PURE__*/React.createElement(Button, {
    isDisabled: true,
    size: "medium",
    variation: "outline"
  }, "Medium"), /*#__PURE__*/React.createElement(Button, {
    isDisabled: true,
    size: "small",
    variation: "outline"
  }, "Small"), /*#__PURE__*/React.createElement(Button, {
    isDisabled: true,
    size: "mini",
    variation: "outline"
  }, "Mini"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Button, {
    appearance: "danger",
    size: "large"
  }, "Danger"), /*#__PURE__*/React.createElement(Button, {
    appearance: "danger",
    size: "large",
    variation: "outline"
  }, "Danger Outline"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Button, {
    appearance: "warning",
    size: "large"
  }, "Warning"), /*#__PURE__*/React.createElement(Button, {
    appearance: "warning",
    size: "large",
    variation: "outline"
  }, "Warning Outline"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Button, {
    appearance: "success",
    size: "large"
  }, "Success"), /*#__PURE__*/React.createElement(Button, {
    appearance: "success",
    size: "large",
    variation: "outline"
  }, "Success Outline"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Button, {
    appearance: "secondary",
    size: "large"
  }, "Secondary"), /*#__PURE__*/React.createElement(Button, {
    appearance: "secondary",
    size: "large",
    variation: "outline"
  }, "Secondary Outline"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Button, {
    appearance: "dark",
    size: "large"
  }, "Dark"), /*#__PURE__*/React.createElement(Button, {
    appearance: "dark",
    size: "large",
    variation: "outline"
  }, "Dark Outline"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Button, {
    appearance: "light",
    size: "large"
  }, "Light"), /*#__PURE__*/React.createElement(Button, {
    appearance: "light",
    size: "large",
    variation: "outline"
  }, "Light Outline"), /*#__PURE__*/React.createElement("br", null));
};
allButtons.story = {
  name: "All Buttons"
};
export var knobs = function knobs() {
  return /*#__PURE__*/React.createElement(Button, {
    appearance: select("Appearance", ["primary", "danger", "warning", "success", "secondary", "dark", "light"]),
    size: select("Size", ["large", "medium", "small", "mini"]),
    variation: select("Variation", ["fill", "outline"]),
    isDisabled: boolean("Disabled")
  }, "Button");
};
knobs.story = {
  decorators: [withKnobs]
};