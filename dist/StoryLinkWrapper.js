import _objectWithoutProperties from "/Users/david/Developer/wordlift/libraries/wordlift-design/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";

/* eslint-disable import/no-extraneous-dependencies */
// This is allows us to test whether the link works via the actions addon
import React from 'react';
import { action } from '@storybook/addon-actions';
var fireClickAction = action('onLinkClick');
export function StoryLinkWrapper(_ref) {
  var children = _ref.children,
      className = _ref.className,
      href = _ref.href,
      onClick = _ref.onClick,
      to = _ref.to,
      rest = _objectWithoutProperties(_ref, ["children", "className", "href", "onClick", "to"]);

  var modifiedOnClick = function modifiedOnClick(event) {
    event.preventDefault();
    onClick();
    fireClickAction(href || to);
  };

  return /*#__PURE__*/React.createElement("a", Object.assign({
    className: className,
    href: href || to,
    onClick: modifiedOnClick
  }, rest), children);
}
StoryLinkWrapper.defaultProps = {
  className: '',
  href: null,
  onClick: function onClick() {},
  to: null
};