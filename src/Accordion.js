/**
 * External dependencies
 */
import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

/**
 * Internal dependencies
 */
import { typography } from "./shared/styles";

const commonCss = `
  border: solid 1px rgba(46, 91, 255, 0.11);
  padding: 1.125rem;
`;

const Heading = styled.div`
  ${commonCss}
  display: flex;
  align-items: center;
  ${(props) => props.open && `background: red;`}
  font-size: 1.125rem;
  font-weight: ${typography.weight.bold};
  cursor: pointer;
  user-select: none;
`;

const HeadingTitle = styled.div`
  flex: 1 0 content;
`;

const Body = styled.div`
  ${commonCss}
  border-top: 0;
`;

const DIRECTIONS = {
  UP: "up",
  DOWN: "down",
};

const Arrow = styled.div`
  width: 6px;
  height: 6px;
  border: 1px solid;
  ${(props) =>
    (DIRECTIONS.UP === props.direction &&
      `
    border-color: #0d8af9 transparent transparent #0d8af9;
    margin-top: 3px;
    transform: rotate(45deg);
  `) ||
    `
    border-color: rgba(0, 0, 0, 0.5) transparent transparent rgba(0, 0, 0, 0.5);
    margin-top: -3px;
    transform: rotate(-135deg);
  `}
`;
const ArrowDown = () => <Arrow direction={"down"} />;

const ArrowUp = () => <Arrow direction={"up"} />;

export function Accordion({ title, onClick, open, children, ...props }) {
  return (
    <div {...props}>
      <Heading onClick={onClick} open={open}>
        <HeadingTitle>{title}</HeadingTitle>
        {(open && <ArrowUp />) || <ArrowDown />}
      </Heading>
      {open && <Body>{children}</Body>}
    </div>
  );
}

Accordion.propTypes = {
  /**
   * The accordion title
   */
  title: PropTypes.string.isRequired,
  /**
   * The accordion's contents.
   */
  children: PropTypes.any.isRequired,
  /**
   * The onClick handler.
   */
  onClick: PropTypes.func,
  /**
   * Whether the accordion is open.
   */
  open: PropTypes.bool,
};

Accordion.defaultProps = {
  onClick: () => {},
  open: false,
};

export function withCloseable(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.handleClick = this.handleClick.bind(this);

      this.state = { open: props.open || false };
    }

    handleClick() {
      this.setState((state) => ({
        open: !state.open,
      }));
    }

    render() {
      const props = { ...this.props, ...this.state };

      return <WrappedComponent {...props} onClick={this.handleClick} />;
    }
  };
}

export class AccordionGroup extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    if (props.open)
      this.state = {
        // `key`, that we use later for comparison, is string.
        open: props.open.toString(),
      };
  }

  handleClick(key) {
    this.setState(() => ({
      open: key,
    }));
  }

  render() {
    const { children, open } = { ...this.props, ...this.state };

    return (
      <>
        {children.map((child) =>
          React.cloneElement(child, {
            onClick: () => this.handleClick(child.key),
            open: open === child.key,
          })
        )}
      </>
    );
  }
}

AccordionGroup.propTypes = {
  /**
   * Which accordion is open.
   */
  open: PropTypes.string,
  /**
   * The accordions.
   */
  children: PropTypes.arrayOf(Accordion),
};
