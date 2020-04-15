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
import PropTypes from "prop-types";

/**
 * Supported directions.
 * @readonly
 * @enum {("top"|"left"|"right"|"bottom"|null)}
 */
const DIRECTIONS = {
  TOP: "top",
  RIGHT: "right",
  BOTTOM: "bottom",
  LEFT: "left",
  NONE: null,
};

/**
 * Switch `flex-direction` based on the specified direction.
 *
 * @param {("top"|"right"|"bottom"|"left")} direction The arrow position.
 * @returns {("column"|"row-reverse"|"column-reverse"|"row")} The `flex-direction` attribute.
 */
const switchFlexDirection = (direction) => {
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
const switchBorderWidth = (direction) => {
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
const switchBorderColor = (direction) => {
  switch (direction) {
    case DIRECTIONS.TOP:
    case DIRECTIONS.BOTTOM:
      return `${color.primary} transparent`;
    // left, right
    default:
      return `transparent ${color.primary}`;
  }
};

/**
 * The Popover Container component, which contains the Popover Arrow and Content components.
 *
 * @type {*|React.ReactElement<any, any>}
 */
const PopoverContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => switchFlexDirection(props.direction)};
  align-items: center;
  margin: 0.5rem;
`;

/**
 * The Popover Arrow component.
 *
 * @type {*|React.ReactElement<any, any>}
 */
const PopoverArrow = styled.div`
  border-color: ${(props) => switchBorderColor(props.direction)};
  border-style: solid;
  border-width: ${(props) => switchBorderWidth(props.direction)};
  width: 0;
  height: 0;
`;

/**
 * The Popover Content, which contains the actual children element.
 * @type {*|React.ReactElement<any, any>}
 */
const PopoverContent = styled.div`
  background: ${color.lightest};
  border-radius: ${spacing.borderRadius.small};
  border: 0.12rem solid ${color.primary};
  padding: 0.8rem;
`;

/**
 * The Popover component, composed by a Popover Container which contains a Popover Arrow and Popover Content.
 *
 * @param {*|React.ReactElement<any, any>} children The child components.
 * @param {{direction}} props The component properties.
 * @returns {React.ReactElement<any, any>} A component.
 * @constructor
 */
export const Popover = ({ children, ...props }) => (
  <PopoverContainer {...props}>
    {props.direction && <PopoverArrow {...props} />}
    <PopoverContent>{children}</PopoverContent>
  </PopoverContainer>
);

Popover.propTypes = {
  /**
   * The direction of the arrow, can be one of `top`, `right`, `bottom`, `left`. When not specified, no arrow is
   * displayed.
   */
  direction: PropTypes.oneOf(Object.values(DIRECTIONS)),
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
const switchPositionByPosition = (props) => {
  // Calculate the width and height of the target element (the selection bounding box), in order to get the center
  // left and top.
  const targetWidth = props.right - props.left;
  const targetHeight = props.bottom - props.top;
  // Get the left and top coordinates so that the popover is centered respect to the bounding box.
  const centerLeft = props.left + targetWidth / 2 - props.width / 2;
  const centerTop = props.top + targetHeight / 2 - props.height / 2;

  // Provide the css `top` and `left` properties based on the requested position.
  switch (props.position) {
    case POSITIONS.TOP:
      return `
        top: ${props.top - props.height}px;
        left: ${centerLeft}px;
      `;
    case POSITIONS.RIGHT:
      return `
        top: ${centerTop}px;
        left: ${props.right}px;
      `;
    case POSITIONS.BOTTOM:
      return `
        top: ${props.bottom}px;
        left: ${centerLeft}px;
      `;
    case POSITIONS.LEFT:
      return `
        top: ${centerTop}px;
        left: ${props.left - props.width}px;
      `;
    default:
    // No defaults.
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
const PopoverPositioning = styled.span`
  visibility: ${(props) => (null == props.position ? "hidden" : "visible")};
  position: absolute;
  z-index: 999999;
  ${(props) => switchPositionByPosition(props)}
`;

/**
 * The requested Popover position.
 *
 * @enum {("top"|"right"|"bottom"|"left"|null)}
 */
const POSITIONS = {
  TOP: "top",
  RIGHT: "right",
  BOTTOM: "bottom",
  LEFT: "left",
  NONE: null,
};

/**
 * Switch from a Position (where the Popover is located respect to the target bounding box) to a Direction (where the
 * Popover Arrow is pointing).
 *
 * @param  {("top"|"right"|"bottom"|"left"|null)} position The position.
 * @returns {"top"|"left"|"right"|"bottom"|null} The direction.
 */
const directionFromPosition = (position) => {
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
class PopoverManager extends React.Component {
  /**
   * Creates an instance.
   *
   * @param {{ top, right, bottom, left }} props The bounding box coordinates.
   */
  constructor(props) {
    super(props);

    this.getSuitablePosition = this.getSuitablePosition.bind(this);

    // Receive the element.
    this.setRef = (el) => {
      this.el = el;
    };
  }

  /**
   * Calculate the best position based on the Popover size.
   *
   * If we don't like where the Popover is displayed, this is probably the best code to update.
   *
   * @param {{width, height}} size The Popover's size.
   * @returns {"top"|"right"|"bottom"|"left"|null} The best position.
   */
  getSuitablePosition(size) {
    const { top, right, bottom, left, positions } = this.props;

    for (const position of positions) {
      switch (position) {
        case POSITIONS.TOP:
          if (top > size.height) return POSITIONS.TOP;
          break;
        case POSITIONS.RIGHT:
          if (right + size.width < document.body.offsetWidth)
            return POSITIONS.RIGHT;
          break;
        case POSITIONS.BOTTOM:
          if (bottom + size.height < document.body.offsetHeight)
            return POSITIONS.BOTTOM;
          break;
        case POSITIONS.LEFT:
          if (left > size.width) return POSITIONS.LEFT;
          break;
        // No suitable position found: return the first preferred one.
        default:
          return positions[0];
      }
    }

    // No preferred positions provided, return TOP.
    return POSITIONS.TOP;
  }

  componentDidMount() {
    // When the component is mount, its `visibility` is hidden because we didn't provide any position. We can then
    // get the offset width and height and use it to calculate the target position.
    //
    // When the target PopoverPositioning component will receive the position, it'll turn the component to `visible`.
    const size = {
      width: this.el.offsetWidth,
      height: this.el.offsetHeight,
    };

    // Get the best position given the size of the popover.
    const position = this.getSuitablePosition(size);

    // Update our state with the size and target position.
    this.setState((state) => ({ ...state, ...size, position }));
  }

  render() {
    const { children, ...props } = { ...this.props, ...this.state };

    return (
      <PopoverPositioning {...props} ref={this.setRef}>
        <Popover direction={directionFromPosition(props.position)}>
          {children}
        </Popover>
      </PopoverPositioning>
    );
  }
}

PopoverManager.propTypes = {
  /**
   * The `top` coordinate of the target element.
   */
  top: PropTypes.number.isRequired,
  /**
   * The `right` coordinate of the target element.
   */
  right: PropTypes.number.isRequired,
  /**
   * The `bottom` coordinate of the target element.
   */
  bottom: PropTypes.number.isRequired,
  /**
   * The `left` coordinate of the target element.
   */
  left: PropTypes.number.isRequired,
  /**
   * The preferred positions in order of preference
   */
  positions: PropTypes.arrayOf(
    PropTypes.shape([
      POSITIONS.TOP,
      POSITIONS.RIGHT,
      POSITIONS.BOTTOM,
      POSITIONS.LEFT,
    ])
  ).isRequired,
};

PopoverManager.defaultProps = {
  positions: [POSITIONS.TOP, POSITIONS.RIGHT, POSITIONS.BOTTOM, POSITIONS.LEFT],
};

/**
 * Create a Popover.
 *
 * @param {*} children The popover content.
 * @param {string} id The popover id. Creating multiple popovers with the same id ensures only one is displayed at a
 *                    time.
 * @param {*} props The properties.
 * @returns {{el: Element, unmount: Function}} The DOM element where the components are attached to.
 */
export const createPopover = (children, { id = "one", ...props }) => {
  const popoverId = `popover-${id}`;

  // Get an existing element with that `id`.
  let el = document.getElementById(popoverId);

  // Create and append the element to the `body` if it doesn't exist.
  if (null === el) {
    el = document.createElement("span");
    el.id = popoverId;
    el.style.position = "absolute";
    el.style.top = "0";
    el.style.left = "0";
    document.body.appendChild(el);
  }

  // Unmount the Popover if the selection changes, the document is scrolled or resized.
  const unmountFn = () => {
    ReactDOM.unmountComponentAtNode(el);
    document.removeEventListener("selectionchange", unmountFn);
    document.removeEventListener("scroll", unmountFn);
    document.removeEventListener("resize", unmountFn);
  };

  unmountFn();

  document.addEventListener("selectionchange", unmountFn);
  document.addEventListener("scroll", unmountFn);
  document.addEventListener("resize", unmountFn);

  return {
    el: ReactDOM.render(
      <PopoverManager {...props}>{children}</PopoverManager>,
      el
    ),
    unmount: unmountFn,
  };
};

createPopover.propTypes = {
  /**
   * The popover id. When multiple popovers are created with the same id, only one will be displayed at the same time.
   */
  id: PropTypes.string.isRequired,
  /**
   * The target bounding box `top`.
   */
  top: PropTypes.number.isRequired,
  /**
   * The target bounding box `right`.
   */
  right: PropTypes.number.isRequired,
  /**
   * The target bounding box `bottom`.
   */
  bottom: PropTypes.number.isRequired,
  /**
   * The target bounding box `left`.
   */
  left: PropTypes.number.isRequired,
};
