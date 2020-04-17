/**
 * External dependencies
 */
import React from "react";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";

/**
 * Internal dependencies
 */
import { Button } from "./Button";
import { Icon } from "./Icon";

export default {
  title: "Design System|Button",
  component: Button,
};

export const allButtons = () => (
  <div>
    <Button size={"large"}>Large</Button>
    <Button size={"large"}>
      <Icon icon="link" aria-label="Link" /> Large with Icon
    </Button>
    <Button size={"large"}>
      Large with Icon <Icon icon="link" aria-label="Link" />
    </Button>
    <Button size={"medium"}>Medium</Button>
    <Button size={"small"}>Small</Button>
    <Button size={"mini"}>Mini</Button>
    <br />
    <Button size={"large"} variation={"outline"}>
      Large
    </Button>
    <Button size={"medium"} variation={"outline"}>
      Medium
    </Button>
    <Button size={"small"} variation={"outline"}>
      Small
    </Button>
    <Button size={"mini"} variation={"outline"}>
      Mini
    </Button>
    <br />
    <Button isDisabled={true} size={"large"}>
      Large
    </Button>
    <Button isDisabled={true} size={"medium"}>
      Medium
    </Button>
    <Button isDisabled={true} size={"small"}>
      Small
    </Button>
    <Button isDisabled={true} size={"mini"}>
      Mini
    </Button>
    <br />
    <Button isDisabled={true} size={"large"} variation={"outline"}>
      Large
    </Button>
    <Button isDisabled={true} size={"medium"} variation={"outline"}>
      Medium
    </Button>
    <Button isDisabled={true} size={"small"} variation={"outline"}>
      Small
    </Button>
    <Button isDisabled={true} size={"mini"} variation={"outline"}>
      Mini
    </Button>
    <br />
    <Button appearance={"danger"} size={"large"}>
      Danger
    </Button>
    <Button appearance={"danger"} size={"large"} variation={"outline"}>
      Danger Outline
    </Button>
    <br />
    <Button appearance={"warning"} size={"large"}>
      Warning
    </Button>
    <Button appearance={"warning"} size={"large"} variation={"outline"}>
      Warning Outline
    </Button>
    <br />
    <Button appearance={"success"} size={"large"}>
      Success
    </Button>
    <Button appearance={"success"} size={"large"} variation={"outline"}>
      Success Outline
    </Button>
    <br />
    <Button appearance={"secondary"} size={"large"}>
      Secondary
    </Button>
    <Button appearance={"secondary"} size={"large"} variation={"outline"}>
      Secondary Outline
    </Button>
    <br />
    <Button appearance={"dark"} size={"large"}>
      Dark
    </Button>
    <Button appearance={"dark"} size={"large"} variation={"outline"}>
      Dark Outline
    </Button>
    <br />
    <Button appearance={"light"} size={"large"}>
      Light
    </Button>
    <Button appearance={"light"} size={"large"} variation={"outline"}>
      Light Outline
    </Button>
    <br />
  </div>
);

allButtons.story = {
  name: "All Buttons",
};

export const knobs = () => (
  <Button
    appearance={select("Appearance", [
      "primary",
      "danger",
      "warning",
      "success",
      "secondary",
      "dark",
      "light",
    ])}
    size={select("Size", ["large", "medium", "small", "mini"], "medium")}
    variation={select("Variation", ["fill", "outline"])}
    isDisabled={boolean("Disabled")}
  >
    Button
  </Button>
);

knobs.story = {
  decorators: [withKnobs],
};
