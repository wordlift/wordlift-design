/**
 * External dependencies
 */
import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
/**
 * Internal dependencies
 */
import { createPopover, Popover, PopoverManager } from "./Popover";
import { Button } from "./Button";

export default {
  title: "Design System|Popover",
  component: Popover,
};

export const allPopovers = () => (
  <div>
    <Popover direction={null}>No direction</Popover>
    <Popover direction={"top"}>Top</Popover>
    <Popover direction={"left"}>Left</Popover>
    <Popover direction={"right"}>Right</Popover>
    <Popover direction={"bottom"}>Bottom</Popover>
    <Popover direction={"left"}>
      <Button size={"small"}>Add</Button>
    </Popover>
  </div>
);

export const createPopoverStory = () => {
  createPopover(<Popover>Hello World!</Popover>, {
    top: 200,
    right: 200,
    bottom: 200,
    left: 200,
  });
  return <div>This component requires interaction.</div>;
};

createPopoverStory.story = {
  name: "Create Popover",
};

export const selectionPopover = () => <></>;

selectionPopover.story = {
  decorators: [
    (storyFn) => (
      <>
        <div
          contentEditable={true}
          style={{
            width: "calc( 100% - 8.8rem )",
            height: "100%",
            fontFamily: "serif",
            fontSize: "1.2rem",
            lineHeight: "1.6rem",
            padding: "0 .4rem",
            boxSizing: "border",
            border: "1px solid lightgray",
            outline: "none",
            margin: "0 4rem",
          }}
          onSelect={() => {
            const selection = document.getSelection();
            if (0 === selection.rangeCount) return;

            const range = selection.getRangeAt(0);
            if (range.collapsed) return;

            const { top, right, bottom, left } = range.getBoundingClientRect();
            createPopover(
              <Button onClick={() => alert("Ouch!")}>Hello Mars!</Button>,
              {
                top,
                right,
                bottom,
                left,
              }
            );
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            assumenda at consequatur consequuntur eos et eum excepturi expedita
            fuga ipsam ipsum iste minima modi mollitia omnis recusandae
            similique voluptates, voluptatum?
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur, ipsam, voluptatum. Accusamus aperiam doloremque facere
            fuga quae? Eligendi facilis laudantium nesciunt odio placeat quidem,
            quo saepe sed voluptatem voluptates? Numquam?
          </p>
        </div>
        {storyFn()}
      </>
    ),
  ],
};

const StyledDraggable = styled.div`
  ${(props) => `
    transform: translate3d( ${props.x}px, ${props.y}px, 0 );
  `}
  border: 2px solid gray;
  width: 120px;
  height: 40px;
  cursor: grab;
  font-size: 0.5rem;
  font-family: sans-serif;
`;

class Draggable extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);

    this._handleMouseMove = () => {};

    this.state = { top: 0, right: 0, bottom: 0, left: 0 };

    this.setRef = (el) => (this.el = el);
  }

  handleMouseDown(e) {
    const { x, y } = this.el.getBoundingClientRect();
    this.offsetX = e.clientX - x;
    this.offsetY = e.clientY - y;

    this._handleMouseMove = (e) => {
      e.preventDefault();

      const { top, right, bottom, left } = this.el.getBoundingClientRect();

      const coords = {
        x: e.clientX - this.offsetX,
        y: e.clientY - this.offsetY,
      };

      this.setState((state) => ({
        ...state,
        ...coords,
        ...{ top, right, bottom, left },
      }));
    };
  }

  handleMouseMove(e) {
    this._handleMouseMove(e);
  }

  handleMouseUp() {
    this._handleMouseMove = () => {};
  }

  componentDidMount() {
    const { top, right, bottom, left } = this.el.getBoundingClientRect();

    this.setState((state) => ({ ...state, ...{ top, right, bottom, left } }));
  }

  render() {
    const props = { ...this.props, ...this.state };

    return (
      <div
        style={{
          height: "400px",
          border: "1px solid lightgray",
          overflow: "hidden",
        }}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
      >
        <StyledDraggable
          {...props}
          onMouseDown={this.handleMouseDown}
          ref={this.setRef}
        >
          {`x: ${props.x}, y: ${props.y}`}
          <br />
          {`top: ${props.top}, right: ${props.right}, bottom: ${props.bottom}, left: ${props.left}`}
        </StyledDraggable>
        <PopoverManager
          top={props.top}
          right={props.right}
          bottom={props.bottom}
          left={props.left}
          positions={["bottom", "right", "top", "left"]}
        >
          <Button>Click Me</Button>
        </PopoverManager>
      </div>
    );
  }
}

export const draggable = () => (
  <div>
    <Draggable />
  </div>
);
