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

createPopoverStory.story = {
  name: "Create Popover",
};

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
