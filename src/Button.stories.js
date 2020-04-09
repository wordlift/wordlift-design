/**
 * External dependencies
 */
import React from "react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

/**
 * Internal dependencies
 */
import Button from "./Button";

export default {
  component: Button,
  title: "Design System|Button",
  decorators: [(story) => <div style={{ padding: "1rem" }}>{story()}</div>],
};

export const allButtons = () => (
  <div>
    <Button>Primary</Button>
    <Button isDisabled={true}>Primary Disabled</Button>
    <br />
    <Button>Primary with Icon</Button>
    <Button isDisabled={true}>Primary with Icon Disabled</Button>
    <br />
    <Button appearance={"primaryOutline"}>Outline Primary</Button>
    <Button appearance={"primaryOutline"} isDisabled={true}>
      Outline Primary Disabled
    </Button>
    <br />
    <Button size={"large"}>Large</Button>
    <Button size={"medium"}>Medium</Button>
    <Button size={"small"}>Small</Button>
    <Button size={"mini"}>Mini</Button>
    <br />
    <Button appearance={"danger"}>Danger</Button>
    <Button appearance={"warning"}>Warning</Button>
    <Button appearance={"success"}>Success</Button>
    <br />
    <Button appearance={"secondary"}>Secondary</Button>
    <Button appearance={"dark"}>Dark</Button>
    <Button appearance={"light"}>Light</Button>
    <br />
    <Button appearance={"dangerOutline"}>Outline Danger</Button>
    <Button appearance={"warningOutline"}>Outline Warning</Button>
    <Button appearance={"successOutline"}>Outline Success</Button>
    <br />
    <Button appearance={"secondaryOutline"}>Outline Secondary</Button>
    <Button appearance={"darkOutline"}>Outline Dark</Button>
    <Button appearance={"lightOutline"}>Outline Light</Button>
  </div>
);

allButtons.story = {
  name: "all buttons",
};

export const knobs = () => (
  <Button
    appearance={select("Appearance", [
      "primary",
      "primaryOutline",
      "secondary",
      "secondaryOutline",
      "danger",
      "dangerOutline",
      "warning",
      "warningOutline",
      "success",
      "successOutline",
      "secondary",
      "secondaryOutline",
      "dark",
      "darkOutline",
      "light",
      "lightOutline",
    ])}
    size={select("Size", ["large", "medium", "small", "mini"])}
    isDisabled={boolean("Disabled")}
  >
    Button
  </Button>
);

knobs.story = {
  decorators: [withKnobs],
};
