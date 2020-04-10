/**
 * External dependencies
 */
import React from "react";
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
