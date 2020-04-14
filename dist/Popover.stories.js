/**
 * External dependencies
 */
import React from "react";
import ReactDOM from "react-dom";
/**
 * Internal dependencies
 */

import { createPopover, Popover } from "./Popover";
import { Button } from "./Button";
export default {
  title: "Design System|Popover",
  component: Popover
};
export var allPopovers = function allPopovers() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Popover, {
    direction: null
  }, "No direction"), /*#__PURE__*/React.createElement(Popover, {
    direction: "top"
  }, "Top"), /*#__PURE__*/React.createElement(Popover, {
    direction: "left"
  }, "Left"), /*#__PURE__*/React.createElement(Popover, {
    direction: "right"
  }, "Right"), /*#__PURE__*/React.createElement(Popover, {
    direction: "bottom"
  }, "Bottom"), /*#__PURE__*/React.createElement(Popover, {
    direction: "left"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "small"
  }, "Add")));
};
export var createPopoverStory = function createPopoverStory() {
  return createPopover( /*#__PURE__*/React.createElement(Popover, null, "Hello World!"), {
    top: 200,
    right: 200,
    bottom: 200,
    left: 200
  });
};
createPopoverStory.story = {
  name: "Create Popover"
};
export var selectionPopover = function selectionPopover() {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
createPopoverStory.story = {
  name: "Create Popover"
};
selectionPopover.story = {
  decorators: [function (storyFn) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      contentEditable: true,
      style: {
        width: "calc( 100% - 8.8rem )",
        height: "100%",
        fontFamily: "serif",
        fontSize: "1.2rem",
        lineHeight: "1.6rem",
        padding: "0 .4rem",
        boxSizing: "border",
        border: "1px solid lightgray",
        outline: "none",
        margin: "0 4rem"
      },
      onSelect: function onSelect() {
        var selection = document.getSelection();
        if (0 === selection.rangeCount) return;
        var range = selection.getRangeAt(0);
        if (range.collapsed) return;

        var _range$getBoundingCli = range.getBoundingClientRect(),
            top = _range$getBoundingCli.top,
            right = _range$getBoundingCli.right,
            bottom = _range$getBoundingCli.bottom,
            left = _range$getBoundingCli.left;

        createPopover( /*#__PURE__*/React.createElement(Button, {
          onClick: function onClick() {
            return alert("Ouch!");
          }
        }, "Hello Mars!"), {
          top: top,
          right: right,
          bottom: bottom,
          left: left
        });
      }
    }, /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda at consequatur consequuntur eos et eum excepturi expedita fuga ipsam ipsum iste minima modi mollitia omnis recusandae similique voluptates, voluptatum?"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, ipsam, voluptatum. Accusamus aperiam doloremque facere fuga quae? Eligendi facilis laudantium nesciunt odio placeat quidem, quo saepe sed voluptatem voluptates? Numquam?")), storyFn());
  }]
};