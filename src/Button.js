/**
 * External dependencies
 */
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { rgba } from "polished";
import memoize from "lodash-es/memoize";
/**
 * Internal dependencies
 */
import { color, spacing, typography } from "./shared/styles";
import { easing } from "./shared/animation";

const Text = styled.span`
  display: inline-block;
  vertical-align: top;
`;

const Loading = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  opacity: 0;
`;

const APPEARANCES = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DANGER: "danger",
  WARNING: "warning",
  SUCCESS: "success",
  DARK: "dark",
  LIGHT: "light",
};

const SIZES = {
  MINI: "mini",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

const VARIATIONS = {
  FILL: "fill",
  OUTLINE: "outline",
};

const switchPadding = (size) => {
  switch (size) {
    case SIZES.MINI:
      return ".5rem 1.4rem";
    case SIZES.SMALL:
      return ".6rem 1.6rem";
    case SIZES.MEDIUM:
      return ".7rem 1.8rem";
    // large
    default:
      return ".9rem 4rem";
  }
};

const switchFontSize = (size) => {
  switch (size) {
    case SIZES.MINI:
      return typography.size.mini;
    case SIZES.SMALL:
      return typography.size.small;
    case SIZES.MEDIUM:
      return typography.size.medium;
    // large
    default:
      return typography.size.large;
  }
};

const switchBorderColor = (props) => {
  if (props.disabled) return color.disabledlight;

  switch (props.appearance) {
    case APPEARANCES.PRIMARY:
      return color.primary;
    case APPEARANCES.DANGER:
      return color.danger;
    case APPEARANCES.WARNING:
      return color.warning;
    case APPEARANCES.SUCCESS:
      return color.success;
    case APPEARANCES.SECONDARY:
      return color.secondary;
    case APPEARANCES.DARK:
      return color.dark;
    case APPEARANCES.LIGHT:
      return color.light;
    default:
      return color.primary;
  }
};

const switchColor = (props) => {
  if (props.disabled) return color.disableddark;

  if (VARIATIONS.OUTLINE === props.variation) {
    if (APPEARANCES.LIGHT === props.appearance) return color.mediumdark;
    else return switchBorderColor(props);
  }

  if (APPEARANCES.LIGHT === props.appearance) {
    return color.darkest;
  } else {
    return color.lightest;
  }
};

const StyledButton = styled.button`
  border: .14rem solid transparent;
  border-radius: ${spacing.borderRadius.small};
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: ${(props) => switchPadding(props.size)};
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 150ms ease-out;
  transform: translate3d(0,0,0);
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  margin: 0;
  background: transparent;

  font-family: ${typography.type.primary};
  font-size: ${(props) => switchFontSize(props.size)};
  font-weight: ${typography.weight.bold};
  line-height: 1;

  ${(props) =>
    !props.isLoading &&
    `
      &:hover {
        transform: translate3d(0, -2px, 0);
        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;
      }

      &:active {
        transform: translate3d(0, 0, 0);
      }

      &:focus {
        box-shadow: ${rgba(color.primary, 0.4)} 0 1px 9px 2px;
      }

      &:focus:hover {
        box-shadow: ${rgba(color.primary, 0.2)} 0 8px 18px 0px;
      }
    `}

  ${Text} {
    transform: scale3d(1,1,1) translate3d(0,0,0);
    transition: transform 700ms ${easing.rubber};
    opacity: 1;
  }

  ${Loading} {
    transform: translate3d(0, 100%, 0);
  }

  svg {
    height: ${(props) => (props.size === SIZES.SMALL ? "14" : "16")}px;
    width: ${(props) => (props.size === SIZES.SMALL ? "14" : "16")}px;
    vertical-align: top;
    margin-right: ${(props) => (props.size === SIZES.SMALL ? "4" : "6")}px;
    margin-top: ${(props) => (props.size === SIZES.SMALL ? "-1" : "-2")}px;
    margin-bottom: ${(props) => (props.size === SIZES.SMALL ? "-1" : "-2")}px;

    /* Necessary for js mouse events to not glitch out when hovering on svgs */
    pointer-events: none;
  }

  ${(props) =>
    props.isUnclickable &&
    `
      cursor: default !important;
      pointer-events: none;
      &:hover {
        transform: none;
      }
    `}

  ${(props) =>
    props.isLoading &&
    `
      cursor: progress !important;
      opacity: 0.7;

      ${Loading} {
        transition: transform 700ms ${easing.rubber};
        transform: translate3d(0, -50%, 0);
        opacity: 1;
      }

      ${Text} {
        transform: scale3d(0, 0, 1) translate3d(0, -100%, 0);
        opacity: 0;
      }

      &:hover {
        transform: none;
      }
    `}

  ${(props) =>
    props.containsIcon &&
    `
      svg {
        display: block;
        margin: 0;
      }
      padding: ${props.size === SIZES.SMALL ? "7" : "12"}px;
    `}

  ${(props) =>
    props.variation === VARIATIONS.FILL &&
    `
      background: ${switchBorderColor(props)};
      border-color: ${switchBorderColor(props)};
      color: ${switchColor(props)};

      ${
        !props.isLoading &&
        `
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${rgba(color.primary, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${rgba(color.primary, 0.2)} 0 8px 18px 0px;
          }
        `
      }
    `}

  ${(props) =>
    props.variation === VARIATIONS.OUTLINE &&
    `
      background: ${color.lightest};
      border-color: ${switchBorderColor(props)};
      color: ${switchColor(props)};

      ${
        !props.isLoading &&
        `
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${rgba(color.primary, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${rgba(color.primary, 0.2)} 0 8px 18px 0px;
          }
        `
      }
    `}


  ${(props) =>
    props.disabled &&
    `
      cursor: not-allowed !important;
      &:hover {
        transform: none;
        box-shadow: none;
      }
      
    ${
      props.variation === VARIATIONS.FILL &&
      `
      background-color: ${color.disabledlight};
      border-color: ${color.disabledlight};
      color: ${color.disableddark};
    `
    }

    ${
      props.variation === VARIATIONS.OUTLINE &&
      `
      border-color: ${color.disabledlight};
      color: ${color.disabledlight};
    `
    }

  `}

  ${(props) =>
    props.appearance === APPEARANCES.OUTLINE &&
    `
      box-shadow: ${color.medium} 0 0 0 1px inset;
      color: ${color.dark};
      background: transparent;

      ${
        !props.isLoading &&
        `
          &:hover {
            box-shadow: ${color.mediumdark} 0 0 0 1px inset;
          }

          &:active {
            background: ${color.medium};
            box-shadow: ${color.medium} 0 0 0 1px inset;
            color: ${color.darkest};
          }
          &:focus {
            box-shadow: ${color.medium} 0 0 0 1px inset, ${rgba(
          color.secondary,
          0.4
        )} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${color.medium} 0 0 0 1px inset, ${rgba(
          color.secondary,
          0.2
        )} 0 8px 18px 0px;
          }
        `
      };
    `};

    ${(props) =>
      props.appearance === APPEARANCES.PRIMARY_OUTLINE &&
      `
        box-shadow: ${color.primary} 0 0 0 1px inset;
        color: ${color.primary};

        &:hover {
          box-shadow: ${color.primary} 0 0 0 1px inset;
          background: transparent;
        }

        &:active {
          background: ${color.primary};
          box-shadow: ${color.primary} 0 0 0 1px inset;
          color: ${color.lightest};
        }
        &:focus {
          box-shadow: ${color.primary} 0 0 0 1px inset, ${rgba(
        color.primary,
        0.4
      )} 0 1px 9px 2px;
        }
        &:focus:hover {
          box-shadow: ${color.primary} 0 0 0 1px inset, ${rgba(
        color.primary,
        0.2
      )} 0 8px 18px 0px;
        }
      `};

    ${(props) =>
      props.appearance === APPEARANCES.SECONDARY_OUTLINE &&
      `
        box-shadow: ${color.secondary} 0 0 0 1px inset;
        color: ${color.secondary};

        &:hover {
          box-shadow: ${color.secondary} 0 0 0 1px inset;
          background: transparent;
        }

        &:active {
          background: ${color.secondary};
          box-shadow: ${color.secondary} 0 0 0 1px inset;
          color: ${color.lightest};
        }
        &:focus {
          box-shadow: ${color.secondary} 0 0 0 1px inset,
            ${rgba(color.secondary, 0.4)} 0 1px 9px 2px;
        }
        &:focus:hover {
          box-shadow: ${color.secondary} 0 0 0 1px inset,
            ${rgba(color.secondary, 0.2)} 0 8px 18px 0px;
        }
      `};

`;

const ButtonLink = StyledButton.withComponent("a");

const applyStyle = (ButtonWrapper) => {
  return (
    ButtonWrapper &&
    StyledButton.withComponent(
      ({ containsIcon, isLoading, isUnclickable, ...rest }) => (
        <ButtonWrapper {...rest} />
      )
    )
  );
};

export function Button({
  isDisabled,
  isLoading,
  loadingText,
  isLink,
  children,
  ButtonWrapper,
  ...props
}) {
  const buttonInner = (
    <Fragment>
      <Text>{children}</Text>
      {isLoading && <Loading>{loadingText || "Loading..."}</Loading>}
    </Fragment>
  );

  const StyledButtonWrapper = memoize(
    () => applyStyle(ButtonWrapper),
    () => ButtonWrapper
  );

  let SelectedButton = StyledButton;
  if (ButtonWrapper) {
    SelectedButton = StyledButtonWrapper;
  } else if (isLink) {
    SelectedButton = ButtonLink;
  }

  return (
    <SelectedButton isLoading={isLoading} disabled={isDisabled} {...props}>
      {buttonInner}
    </SelectedButton>
  );
}

Button.propTypes = {
  isLoading: PropTypes.bool,
  /**
   When a button is in the loading state you can supply custom text
  */
  loadingText: PropTypes.node,
  /**
   Buttons that have hrefs should use <a> instead of <button>
  */
  isLink: PropTypes.bool,
  children: PropTypes.node.isRequired,
  appearance: PropTypes.oneOf(Object.values(APPEARANCES)),
  variation: PropTypes.oneOf(Object.values(VARIATIONS)),
  isDisabled: PropTypes.bool,
  /**
   Prevents users from clicking on a button multiple times (for things like payment forms)
  */
  isUnclickable: PropTypes.bool,
  /**
   Buttons with icons by themselves have a circular shape
  */
  containsIcon: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SIZES)),
  ButtonWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

Button.defaultProps = {
  isLoading: false,
  loadingText: null,
  isLink: false,
  appearance: APPEARANCES.PRIMARY,
  variation: VARIATIONS.FILL,
  isDisabled: false,
  isUnclickable: false,
  containsIcon: false,
  size: SIZES.MEDIUM,
  ButtonWrapper: undefined,
};
