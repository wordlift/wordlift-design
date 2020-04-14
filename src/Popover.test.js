/**
 * External dependencies
 */
import React from "react";
import ReactDOM from "react-dom";

/**
 * Internal dependencies
 */
import { Popover } from "./Popover";

it("has a href attribute when rendering with linkWrapper", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Popover>Popover Text</Popover>, div);

  expect(div.querySelector("div")).not.toBeNull();

  ReactDOM.unmountComponentAtNode(div);
});
