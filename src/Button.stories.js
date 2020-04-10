/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import {action} from "@storybook/addon-actions";
import {boolean, select, withKnobs} from "@storybook/addon-knobs";
/**
 * Internal dependencies
 */
import {Button} from "./Button";
import {Icon} from "./Icon";
import {StoryLinkWrapper} from "./StoryLinkWrapper";

const CustomButton = styled.button`
  border: 1px solid green;
  background: lightgreen;
  color: rebeccapurple;
  padding: 1em;
  font-size: 1.2em;
`;

function ButtonWrapper(props) {
  return <CustomButton onClick={action("button action click")} {...props} />;
}

export default {
  title: "Design System|Button",
  component: Button,
};

export const allButtons = () => (
  <div>
    <Button appearance="primary">Primary</Button>
    <Button appearance="secondary">Secondary</Button>
    <Button appearance="tertiary">Tertiary</Button>
    <Button appearance="outline">Outline</Button>
    <Button appearance="primaryOutline">Outline primary</Button>
    <Button appearance="secondaryOutline">Outline secondary</Button>
    <Button appearance="primary" isDisabled>
      Disabled
    </Button>
    <br />
    <Button appearance="primary" isLoading>
      Primary
    </Button>
    <Button appearance="secondary" isLoading>
      Secondary
    </Button>
    <Button appearance="tertiary" isLoading>
      Tertiary
    </Button>
    <Button appearance="outline" isLoading>
      Outline
    </Button>
    <Button appearance="outline" isLoading loadingText="Custom...">
      Outline
    </Button>
    <br />
    <Button appearance="primary" size="small">
      Primary
    </Button>
    <Button appearance="secondary" size="small">
      Secondary
    </Button>
    <Button appearance="tertiary" size="small">
      Tertiary
    </Button>
    <Button appearance="outline" size="small">
      Outline
    </Button>
    <Button appearance="primary" isDisabled size="small">
      Disabled
    </Button>
    <Button appearance="outline" size="small" containsIcon>
      <Icon icon="link" aria-label="Link" />
    </Button>
    <Button appearance="outline" size="small">
      <Icon icon="link" />
      Link
    </Button>
  </div>
);

allButtons.story = {
  name: "all buttons",
};

export const buttonWrapper = () => (
  <div>
    <ButtonWrapper>Original Button Wrapper</ButtonWrapper>
    <br />
    <Button ButtonWrapper={ButtonWrapper} appearance="primary">
      Primary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="secondary">
      Secondary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="tertiary">
      Tertiary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="outline">
      Outline
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="primaryOutline">
      Outline primary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="secondaryOutline">
      Outline secondary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="primary" isDisabled>
      Disabled
    </Button>
    <br />
    <Button ButtonWrapper={ButtonWrapper} appearance="primary" isLoading>
      Primary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="secondary" isLoading>
      Secondary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="tertiary" isLoading>
      Tertiary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="outline" isLoading>
      Outline
    </Button>
    <Button
      ButtonWrapper={ButtonWrapper}
      appearance="outline"
      isLoading
      loadingText="Custom..."
    >
      Outline
    </Button>
    <br />
    <Button ButtonWrapper={ButtonWrapper} appearance="primary" size="small">
      Primary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="secondary" size="small">
      Secondary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="tertiary" size="small">
      Tertiary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="outline" size="small">
      Outline
    </Button>
    <Button
      ButtonWrapper={ButtonWrapper}
      appearance="primary"
      isDisabled
      size="small"
    >
      Disabled
    </Button>
    <Button
      ButtonWrapper={ButtonWrapper}
      appearance="outline"
      size="small"
      containsIcon
    >
      <Icon icon="link" aria-label="Link" />
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="outline" size="small">
      <Icon icon="link" />
      Link
    </Button>
  </div>
);

buttonWrapper.story = {
  name: "button wrapper",
};

export const anchorWrapper = () => (
  <div>
    <StoryLinkWrapper to="http://storybook.js.org">
      Original Link Wrapper
    </StoryLinkWrapper>
    <br />
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="primary"
      href="http://storybook.js.org"
    >
      Primary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="secondary"
      href="http://storybook.js.org"
    >
      Secondary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="tertiary"
      href="http://storybook.js.org"
    >
      Tertiary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      href="http://storybook.js.org"
    >
      Outline
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="primaryOutline"
      href="http://storybook.js.org"
    >
      Outline primary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="secondaryOutline"
      href="http://storybook.js.org"
    >
      Outline secondary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="primary"
      isDisabled
      href="http://storybook.js.org"
    >
      Disabled
    </Button>
    <br />
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="primary"
      isLoading
      href="http://storybook.js.org"
    >
      Primary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="secondary"
      isLoading
      href="http://storybook.js.org"
    >
      Secondary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="tertiary"
      isLoading
      href="http://storybook.js.org"
    >
      Tertiary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      isLoading
      href="http://storybook.js.org"
    >
      Outline
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      isLoading
      loadingText="Custom..."
      href="http://storybook.js.org"
    >
      Outline
    </Button>
    <br />
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="primary"
      size="small"
      href="http://storybook.js.org"
    >
      Primary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="secondary"
      size="small"
      href="http://storybook.js.org"
    >
      Secondary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="tertiary"
      size="small"
      href="http://storybook.js.org"
    >
      Tertiary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      size="small"
      href="http://storybook.js.org"
    >
      Outline
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="primary"
      isDisabled
      size="small"
      href="http://storybook.js.org"
    >
      Disabled
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      size="small"
      containsIcon
      href="http://storybook.js.org"
    >
      <Icon icon="link" aria-label="Link" />
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      size="small"
      href="http://storybook.js.org"
    >
      <Icon icon="link" />
      Link
    </Button>
  </div>
);

anchorWrapper.story = {
  name: "anchor wrapper",
};

export const buttonSizes = () => (
  <div>
    <Button size={"large"}>Large</Button>
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

buttonSizes.story = {
  name: "sizes",
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
    size={select("Size", ["large", "medium", "small", "mini"])}
    variation={select("Variation", ["fill", "outline"])}
    isDisabled={boolean("Disabled")}
  >
    Button
  </Button>
);

knobs.story = {
  decorators: [withKnobs],
};
