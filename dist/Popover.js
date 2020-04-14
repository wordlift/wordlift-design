import _objectSpread from "/Users/david/Developer/wordlift/libraries/wordlift-design/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _classCallCheck from "/Users/david/Developer/wordlift/libraries/wordlift-design/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/david/Developer/wordlift/libraries/wordlift-design/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "/Users/david/Developer/wordlift/libraries/wordlift-design/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "/Users/david/Developer/wordlift/libraries/wordlift-design/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _createSuper from "/Users/david/Developer/wordlift/libraries/wordlift-design/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper";
import _objectWithoutProperties from "/Users/david/Developer/wordlift/libraries/wordlift-design/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "/Users/david/Developer/wordlift/libraries/wordlift-design/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  visibility: ", ";\n  position: absolute;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: ", ";\n  border: 0.12rem solid ", ";\n  padding: 0.8rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-color: ", ";\n  border-style: solid;\n  border-width: ", ";\n  width: 0;\n  height: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: ", ";\n  align-items: center;\n  margin: 0.5rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/**
 * This file provides the Popover component. The Popover is generally structured in the following components:
 *
 * - PopoverManager, a component which calculates the best position where to display a popover given the target
 *                   bounding box and which automatically hides the Popover when the page scrolls, is resized or clicked
 *                   elsewhere.
 * -- Popover, the self-contained Popover.
 * --- PopoverPositioning, places the Popover at specific coordinates.
 * ---- PopoverContainer, contains the Popover Arrow and Popover Content
 * ----- PopoverArrow, displays the arrow.
 * ----- PopoverContent, the actual contents.
 *
 * The PopoverManager must be loaded inside an element child of `body` and absolutely positioned at 0:0 coordinates.
 * The utility function `createPopover` creates this element.
 */

/**
 * External dependencies
 */
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
/**
 * Internal dependencies
 */

import { color, spacing } from "./shared/styles";

/**
 * Supported directions.
 * @readonly
 * @enum {("top"|"left"|"right"|"bottom"|null)}
 */
var DIRECTIONS = {
  TOP: "top",
  RIGHT: "right",
  BOTTOM: "bottom",
  LEFT: "left",
  NONE: null
};
/**
 * Switch `flex-direction` based on the specified direction.
 *
 * @param {("top"|"right"|"bottom"|"left")} direction The arrow position.
 * @returns {("column"|"row-reverse"|"column-reverse"|"row")} The `flex-direction` attribute.
 */

var switchFlexDirection = function switchFlexDirection(direction) {
  switch (direction) {
    case DIRECTIONS.TOP:
      return "column";

    case DIRECTIONS.RIGHT:
      return "row-reverse";

    case DIRECTIONS.BOTTOM:
      return "column-reverse";
    // left

    default:
      return "row";
  }
};
/**
 * Switch `border-width` based on the specified direction.
 *
 * @param {("top"|"right"|"bottom"|"left")} direction The arrow position.
 * @returns {string} The `border-width` attribute.
 */


var switchBorderWidth = function switchBorderWidth(direction) {
  switch (direction) {
    case DIRECTIONS.TOP:
      return "0 .5rem .5rem .5rem";

    case DIRECTIONS.RIGHT:
      return ".5rem 0 .5rem .5rem";

    case DIRECTIONS.BOTTOM:
      return ".5rem .5rem 0 .5rem";
    // left

    default:
      return ".5rem .5rem .5rem 0";
  }
};
/**
 * Switch `border-color` based on the specified direction.
 *
 * @param {("top"|"right"|"bottom"|"left")} direction The arrow position.
 * @returns {string} The `border-width` attribute.
 */


var switchBorderColor = function switchBorderColor(direction) {
  switch (direction) {
    case DIRECTIONS.TOP:
    case DIRECTIONS.BOTTOM:
      return "".concat(color.primary, " transparent");
    // left, right

    default:
      return "transparent ".concat(color.primary);
  }
};
/**
 * The Popover Container component, which contains the Popover Arrow and Content components.
 *
 * @type {*|React.ReactElement<any, any>}
 */


var PopoverContainer = styled.div(_templateObject(), function (props) {
  return switchFlexDirection(props.direction);
});
/**
 * The Popover Arrow component.
 *
 * @type {*|React.ReactElement<any, any>}
 */

var PopoverArrow = styled.div(_templateObject2(), function (props) {
  return switchBorderColor(props.direction);
}, function (props) {
  return switchBorderWidth(props.direction);
});
/**
 * The Popover Content, which contains the actual children element.
 * @type {*|React.ReactElement<any, any>}
 */

var PopoverContent = styled.div(_templateObject3(), color.lightest, spacing.borderRadius.small, color.primary);
/**
 * The Popover component, composed by a Popover Container which contains a Popover Arrow and Popover Content.
 *
 * @param {*|React.ReactElement<any, any>} children The child components.
 * @param {{direction}} props The component properties.
 * @returns {React.ReactElement<any, any>} A component.
 * @constructor
 */

export var Popover = function Popover(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement(PopoverContainer, props, props.direction && /*#__PURE__*/React.createElement(PopoverArrow, props), /*#__PURE__*/React.createElement(PopoverContent, null, children));
};

/**
 * Provide the css `top` and `left` coordinates given the provided properties, i.e. the target selection `top`, `right`,
 * `bottom` and `left` coordinates, the Popover overall `width` and `height` and the requested `position`.
 *
 * Please note that this function doesn't calculate the best position for the popover. The position is provided as an
 * input parameter.
 *
 * @param {{
 *  top: Number,
 *  right: Number,
 *  bottom: Number,
 *  left: Number,
 *  width: Number,
 *  height: Number,
 *  position: ("top"|"right"|"bottom"|"left")
 *  }} props The required geometry.
 * @returns {string} The css `top` and `left` properties.
 */
var switchPositionByPosition = function switchPositionByPosition(props) {
  // Calculate the width and height of the target element (the selection bounding box), in order to get the center
  // left and top.
  var targetWidth = props.right - props.left;
  var targetHeight = props.bottom - props.top; // Get the left and top coordinates so that the popover is centered respect to the bounding box.

  var centerLeft = props.left + targetWidth / 2 - props.width / 2;
  var centerTop = props.top + targetHeight / 2 - props.height / 2; // Provide the css `top` and `left` properties based on the requested position.

  switch (props.position) {
    case POSITIONS.TOP:
      return "\n        top: ".concat(props.top - props.height, "px;\n        left: ").concat(centerLeft, "px;\n      ");

    case POSITIONS.RIGHT:
      return "\n        top: ".concat(centerTop, "px;\n        left: ").concat(props.right, "px;\n      ");

    case POSITIONS.BOTTOM:
      return "\n        top: ".concat(props.bottom, "px;\n        left: ").concat(centerLeft, "px;\n      ");

    case POSITIONS.LEFT:
      return "\n        top: ".concat(centerTop, "px;\n        left: ").concat(props.left - props.width, "px;\n      ");

    default: // No defaults.

  }
};
/**
 * A component which wraps the Popover Container component and places the child components at the desired position.
 *
 * Note that when a position isn't provided, the `visibility` is set to the `hidden`. This allows parent components to
 * render the component in order to get its size and decide its positioning.
 *
 * @type {*|React.ReactElement<any, any>}
 */


var PopoverPositioning = styled.span(_templateObject4(), function (props) {
  return null == props.position ? "hidden" : "visible";
}, function (props) {
  return switchPositionByPosition(props);
});
/**
 * The requested Popover position.
 *
 * @enum {("top"|"right"|"bottom"|"left"|null)}
 */

var POSITIONS = {
  TOP: "top",
  RIGHT: "right",
  BOTTOM: "bottom",
  LEFT: "left",
  NONE: null
};
/**
 * Switch from a Position (where the Popover is located respect to the target bounding box) to a Direction (where the
 * Popover Arrow is pointing).
 *
 * @param  {("top"|"right"|"bottom"|"left"|null)} position The position.
 * @returns {"top"|"left"|"right"|"bottom"|null} The direction.
 */

var directionFromPosition = function directionFromPosition(position) {
  switch (position) {
    case POSITIONS.TOP:
      return DIRECTIONS.BOTTOM;

    case POSITIONS.RIGHT:
      return DIRECTIONS.LEFT;

    case POSITIONS.BOTTOM:
      return DIRECTIONS.TOP;

    case POSITIONS.LEFT:
      return DIRECTIONS.RIGHT;

    default:
      return null;
  }
};
/**
 * The PopoverManager loads a Popover and calculates the best position to display it based on the bounding box.
 */


var PopoverManager = /*#__PURE__*/function (_React$Component) {
  _inherits(PopoverManager, _React$Component);

  var _super = _createSuper(PopoverManager);

  /**
   * Creates an instance.
   *
   * @param {{ top, right, bottom, left }} props The bounding box coordinates.
   */
  function PopoverManager(props) {
    var _this;

    _classCallCheck(this, PopoverManager);

    _this = _super.call(this, props);
    _this.getSuitablePosition = _this.getSuitablePosition.bind(_assertThisInitialized(_this)); // Receive the element.

    _this.setRef = function (el) {
      _this.el = el;
    };

    return _this;
  }
  /**
   * Calculate the best position based on the Popover size.
   *
   * If we don't like where the Popover is displayed, this is probably the best code to update.
   *
   * @param {{width, height}} size The Popover's size.
   * @returns {"top"|"right"|"bottom"|"left"|null} The best position.
   */


  _createClass(PopoverManager, [{
    key: "getSuitablePosition",
    value: function getSuitablePosition(size) {
      var _this$props = this.props,
          top = _this$props.top,
          right = _this$props.right,
          bottom = _this$props.bottom,
          left = _this$props.left;
      var positions = [POSITIONS.TOP, POSITIONS.RIGHT, POSITIONS.BOTTOM, POSITIONS.LEFT];

      for (var _i = 0, _positions = positions; _i < _positions.length; _i++) {
        var position = _positions[_i];

        switch (position) {
          case POSITIONS.TOP:
            if (top > size.height) return POSITIONS.TOP;
            break;

          case POSITIONS.RIGHT:
            if (right + size.width < document.body.offsetWidth) return POSITIONS.RIGHT;
            break;

          case POSITIONS.BOTTOM:
            if (bottom + size.height < document.body.offsetHeight) return POSITIONS.BOTTOM;
            break;

          case POSITIONS.LEFT:
            if (left > size.width) return POSITIONS.LEFT;
            break;
          // No suitable position found: return the first preferred one.

          default:
            return positions[0];
        }
      } // No preferred positions provided, return TOP.


      return POSITIONS.TOP;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // When the component is mount, its `visibility` is hidden because we didn't provide any position. We can then
      // get the offset width and height and use it to calculate the target position.
      //
      // When the target PopoverPositioning component will receive the position, it'll turn the component to `visible`.
      var size = {
        width: this.el.offsetWidth,
        height: this.el.offsetHeight
      }; // Get the best position given the size of the popover.

      var position = this.getSuitablePosition(size); // Update our state with the size and target position.

      this.setState(function (state) {
        return _objectSpread({}, state, {}, size, {
          position: position
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$this$stat = _objectSpread({}, this.props, {}, this.state),
          children = _this$props$this$stat.children,
          props = _objectWithoutProperties(_this$props$this$stat, ["children"]);

      return /*#__PURE__*/React.createElement(PopoverPositioning, Object.assign({}, props, {
        ref: this.setRef
      }), /*#__PURE__*/React.createElement(Popover, {
        direction: directionFromPosition(props.position)
      }, children));
    }
  }]);

  return PopoverManager;
}(React.Component);
/**
 * Create a Popover.
 *
 * @param {*} children The popover content.
 * @param {string} id The popover id. Creating multiple popovers with the same id ensures only one is displayed at a
 *                    time.
 * @param {*} props The properties.
 * @returns {Element} The DOM element where the components are attached to.
 */


export var createPopover = function createPopover(children, _ref2) {
  var _ref2$id = _ref2.id,
      id = _ref2$id === void 0 ? "one" : _ref2$id,
      props = _objectWithoutProperties(_ref2, ["id"]);

  var popoverId = "popover-".concat(id); // Get an existing element with that `id`.

  var el = document.getElementById(popoverId); // Create and append the element to the `body` if it doesn't exist.

  if (null === el) {
    el = document.createElement("span");
    el.id = popoverId;
    el.style.position = "absolute";
    el.style.top = "0";
    el.style.left = "0";
    document.body.appendChild(el);
  } // Unmount the Popover if the selection changes, the document is scrolled or resized.


  var unmountFn = function unmountFn() {
    ReactDOM.unmountComponentAtNode(el);
    document.removeEventListener("selectionchange", unmountFn);
    document.removeEventListener("scroll", unmountFn);
    document.removeEventListener("resize", unmountFn);
  };

  unmountFn();
  document.addEventListener("selectionchange", unmountFn);
  document.addEventListener("scroll", unmountFn);
  document.addEventListener("resize", unmountFn);
  return ReactDOM.render( /*#__PURE__*/React.createElement(PopoverManager, props, children), el);
};