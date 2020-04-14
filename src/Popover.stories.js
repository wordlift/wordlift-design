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
    <Popover direction={"top"}>Top</Popover>
    <Popover direction={"left"}>Left</Popover>
    <Popover direction={"right"}>Right</Popover>
    <Popover direction={"bottom"}>Bottom</Popover>
    <Popover direction={"left"}>
      <Button size={"small"}>Add</Button>
    </Popover>
  </div>
);

const onSelect = () => {
  console.log("EVENT RECEIVED");
  const selection = document.getSelection();

  openPopover(selection);
};

const openPopover = (selection) => {
  if (0 === selection.rangeCount) return;
  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();
  const popoverEl = document.createElement("div");
  const id = "popover-div-" + Math.floor(Math.random() * Math.floor(999999));
  popoverEl.id = id;
  popoverEl.style.position = "absolute";
  popoverEl.style.top = rect.y + "px";
  popoverEl.style.left = rect.x + rect.width + "px";
  document.body.appendChild(popoverEl);

  window.postMessage({ type: "wordlift/popover/close", payload: id }, "*");

  ReactDOM.render(<Popover direction={"left"}>Left</Popover>, popoverEl, () => {
    const listener = (message) => {
      if (
        "wordlift/popover/close" === message.data.type &&
        id !== message.data.payload
      ) {
        console.log("MESSAGE RECEIVED");
        ReactDOM.unmountComponentAtNode(popoverEl);
        window.removeEventListener("message", listener);
      }
    };
    window.addEventListener("message", listener);
  });
};

export const popoverOnSelection = () => (
  <div style={{ display: "flex" }}>
    <div contentEditable={true} onSelect={onSelect}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
      aliquam aliquid, aperiam assumenda aut consectetur ducimus eos est
      excepturi explicabo facilis fuga impedit iste reprehenderit sequi sint,
      soluta, totam vitae!
    </div>
    <div style={{ width: "400px" }} />
  </div>
);

export const createPopoverStory = () =>
  createPopover(<Popover>Hello World!</Popover>, {
    top: 200,
    right: 200,
    bottom: 200,
    left: 200,
  });

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
            width: "calc( 100% - .8rem )",
            height: "100%",
            fontFamily: "serif",
            fontSize: "1.2rem",
            lineHeight: "1.6rem",
            padding: "0 .4rem",
            boxSizing: "border",
            border: "1px solid lightgray",
            outline: "none",
          }}
          onSelect={() => {
            const selection = document.getSelection();
            if (0 === selection.rangeCount) return;

            const range = selection.getRangeAt(0);
            if (range.collapsed) return;

            const { top, right, bottom, left } = range.getBoundingClientRect();
            createPopover(<>Hello Mars!</>, {
              top,
              right,
              bottom,
              left,
            });
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
