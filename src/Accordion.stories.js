/**
 * External dependencies
 */
import React from "react";
import styled from "@emotion/styled";

/**
 * Internal dependencies
 */
import { Accordion, AccordionGroup, withCloseable } from "./Accordion";

export default {
  title: "Design System|Accordion",
  component: Accordion,
};

const CloseableAccordion = withCloseable(Accordion);

export const accordion = () => (
  <CloseableAccordion title={"Hello World!"} open={true}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae
    blanditiis cupiditate doloremque ducimus esse, explicabo, illum ipsa, iste
    iusto mollitia odit quae quaerat quibusdam quod! Illum itaque molestias
    natus.
  </CloseableAccordion>
);

const StyledAccordion = styled(Accordion)`
  margin-bottom: 10px;
`;

export const accordionGroup = () => (
  <AccordionGroup open={1}>
    <StyledAccordion key={1} title={"Accordion 1"}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
      beatae blanditiis cupiditate doloremque ducimus esse, explicabo, illum
      ipsa, iste iusto mollitia odit quae quaerat quibusdam quod! Illum itaque
      molestias natus.
    </StyledAccordion>
    <StyledAccordion key={2} title={"Accordion 2"}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
      beatae blanditiis cupiditate doloremque ducimus esse, explicabo, illum
      ipsa, iste iusto mollitia odit quae quaerat quibusdam quod! Illum itaque
      molestias natus.
    </StyledAccordion>
  </AccordionGroup>
);
