import _taggedTemplateLiteral from "/Users/david/Developer/wordlift/libraries/wordlift-design/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: row wrap;\n  list-style: none;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      flex: none;\n      min-width: auto;\n      padding: 0;\n      background: #fff;\n      border: 1px solid #666;\n\n      svg {\n        display: block;\n        margin-right: 0;\n        width: 48px;\n        height: 48px;\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  flex: 0 1 20%;\n  min-width: 120px;\n\n  padding: 0px 7.5px 20px;\n\n  svg {\n    margin-right: 10px;\n    width: 24px;\n    height: 24px;\n  }\n\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: #666;\n  font-size: 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Icon } from './Icon';
import { icons } from './shared/icons';
var Meta = styled.div(_templateObject());
var Item = styled.li(_templateObject2(), function (props) {
  return props.minimal && css(_templateObject3());
});
var List = styled.ul(_templateObject4());
export default {
  title: 'Design System|Icon',
  component: Icon
};
export var labels = function labels() {
  return /*#__PURE__*/React.createElement(Fragment, null, "There are ", Object.keys(icons).length, " icons", /*#__PURE__*/React.createElement(List, null, Object.keys(icons).map(function (key) {
    return /*#__PURE__*/React.createElement(Item, {
      key: key
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: key,
      "aria-hidden": true
    }), /*#__PURE__*/React.createElement(Meta, null, key));
  })));
};
export var noLabels = function noLabels() {
  return /*#__PURE__*/React.createElement(List, null, Object.keys(icons).map(function (key) {
    return /*#__PURE__*/React.createElement(Item, {
      minimal: true,
      key: key
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: key,
      "aria-label": key
    }));
  }));
};
noLabels.story = {
  name: 'no labels'
};
export var inline = function inline() {
  return /*#__PURE__*/React.createElement(Fragment, null, "this is an inline ", /*#__PURE__*/React.createElement(Icon, {
    icon: "facehappy",
    "aria-label": "Happy face"
  }), " icon (default)");
};
export var block = function block() {
  return /*#__PURE__*/React.createElement(Fragment, null, "this is a block ", /*#__PURE__*/React.createElement(Icon, {
    icon: "facehappy",
    "aria-label": "Happy face",
    block: true
  }), " icon");
};