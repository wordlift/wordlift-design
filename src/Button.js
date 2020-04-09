/**
 * External dependencies
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * Styles
 */
import "./Button.styles.css";

const APPEARANCES = {
  PRIMARY: "primary",
  PRIMARY_OUTLINE: "primaryOutline",
  SECONDARY: "secondary",
  SECONDARY_OUTLINE: "secondaryOutline",
  DARK: "dark",
  DARK_OUTLINE: "darkOutline",
  LIGHT: "light",
  LIGHT_OUTLINE: "lightOutline",
  DANGER: "danger",
  DANGER_OUTLINE: "dangerOutline",
  WARNING: "warning",
  WARNING_OUTLINE: "warningOutline",
  SUCCESS: "success",
  SUCCESS_OUTLINE: "successOutline",
};

const SIZES = {
  MINI: "mini",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

export default function Button({
  children,
  appearance = APPEARANCES.PRIMARY,
  size = SIZES.MEDIUM,
  isDisabled = false,
}) {
  const appearanceClassName =
    "btn--" + appearance.replace(/([A-Z])/, "-$1").toLowerCase();
  const sizeClassName = "btn--" + size;
  const disabledClassName = isDisabled ? "btn--disabled" : "";

  return (
    <button
      className={`btn ${appearanceClassName} ${sizeClassName} ${disabledClassName}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  appearance: PropTypes.oneOf(Object.values(APPEARANCES)),
  isDisabled: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SIZES)),
};

Button.defaultProps = {
  appearance: APPEARANCES.PRIMARY,
  isDisabled: false,
  size: SIZES.LARGE,
};
