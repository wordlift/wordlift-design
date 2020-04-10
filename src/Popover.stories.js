/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
/**
 * Internal dependencies
 */
import { Popover } from "./Popover";
import { Button } from "./Button";
import { Icon } from "./Icon";

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
      <Button size={"small"}>
        Add
      </Button>
    </Popover>
  </div>
);

