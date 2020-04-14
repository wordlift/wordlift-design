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

const DIRECTIONS = {
  TOP: "top",
  RIGHT: "right",
  BOTTOM: "bottom",
  LEFT: "left",
};

const switchFlexDirection = (props) => {
  switch (props.direction) {
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

const switchBorderWidth = (props) => {
  switch (props.direction) {
    case DIRECTIONS.TOP:
      return "0 0.5rem 0.5rem 0.5rem";
    case DIRECTIONS.RIGHT:
      return "0.5rem 0 0.5rem 0.5rem";
    case DIRECTIONS.BOTTOM:
      return "0.5rem 0.5rem 0 0.5rem";
    // left
    default:
      return "0.5rem 0.5rem 0.5rem 0";
  }
};

const switchBorderColor = (props) => {
  switch (props.direction) {
    case DIRECTIONS.TOP:
    case DIRECTIONS.BOTTOM:
      return `${color.primary} transparent`;
    // left, right
    default:
      return `transparent ${color.primary}`;
  }
};

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => switchFlexDirection(props)};
  align-items: center;
`;

const Arrow = styled.div`
  border-color: ${(props) => switchBorderColor(props)};
  border-style: solid;
  border-width: ${(props) => switchBorderWidth(props)};
  width: 0;
  height: 0;
`;

const StyledPopover = styled.div`
  background: ${color.lightest};
  border-radius: ${spacing.borderRadius.small};
  border: 0.12rem solid ${color.primary};
  padding: 0.8rem;
`;

export const Popover = ({ children, ...props }) => (
  <Container {...props}>
    <Arrow {...props} />
    <StyledPopover>{children}</StyledPopover>
  </Container>
);

Popover.propTypes = {
  direction: PropTypes.oneOf(Object.values(DIRECTIONS)),
};

Popover.defaultProps = {
  direction: DIRECTIONS.LEFT,
};

const switchPositionByPosition = (props) => {
  switch (props.position) {
    case POSITIONS.TOP:
      return `
        top: ${props.top - props.height}px;
        left: ${props.left}px;
      `;
    case POSITIONS.RIGHT:
      return `
        top: ${props.top}px;
        left: ${props.right}px;
      `;
    case POSITIONS.BOTTOM:
      return `
        top: ${props.bottom}px;
        left: ${props.left}px;
      `;
    case POSITIONS.LEFT:
      return `
        top: ${props.top}px;
        left: ${props.left - props.width}px;
      `;
    default:
  }
};

const PopoverPositioning = styled.span`
  visibility: ${(props) => (null == props.position ? "hidden" : "visible")};
  position: absolute;
  ${(props) => switchPositionByPosition(props)}
`;

const POSITIONS = {
  TOP: "top",
  RIGHT: "right",
  BOTTOM: "bottom",
  LEFT: "left",
};

const directionFromPosition = (position) => {
  switch (position) {
    case POSITIONS.TOP:
      return DIRECTIONS.BOTTOM;
    case POSITIONS.RIGHT:
      return DIRECTIONS.LEFT;
    case POSITIONS.BOTTOM:
      return DIRECTIONS.TOP;
    default:
      return DIRECTIONS.RIGHT;
  }
};

class P extends React.Component {
  constructor(props) {
    super(props);

    this.getSuitablePosition = this.getSuitablePosition.bind(this);

    this.setRef = (el) => {
      this.el = el;
    };
  }

  getSuitablePosition(size) {
    const { top, right, bottom, left } = this.props;

    const positions = [
      POSITIONS.TOP,
      POSITIONS.RIGHT,
      POSITIONS.BOTTOM,
      POSITIONS.LEFT,
    ];

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
    const size = {
      // Add the popover margin to the size.
      width: this.el.offsetWidth + 10,
      height: this.el.offsetHeight + 10,
    };
    const position = this.getSuitablePosition(size);
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

  return ReactDOM.render(<P {...props}>{children}</P>, el);
};

createPopover.propTypes = {
  id: PropTypes.string.isRequired,
  top: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
  bottom: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
};
