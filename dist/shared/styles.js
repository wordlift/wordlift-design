import _taggedTemplateLiteral from "/Users/david/Developer/wordlift/libraries/wordlift-design/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 ", "px;\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { css } from 'styled-components'; // Global style variables

export var background = {
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF'
};
export var color = {
  // Palette
  primary: '#026fff',
  // coral
  secondary: '#606972',
  // ocean
  tertiary: '#DDDDDD',
  orange: '#FC521F',
  gold: '#FFAE00',
  green: '#66BF3C',
  seafoam: '#37D5D3',
  purple: '#6F2CAC',
  ultraviolet: '#2A0481',
  // Monochrome
  lightest: '#ffffff',
  lighter: '#F8F8F8',
  light: '#f7f8fb',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#8f8f8f',
  dark: '#2d3338',
  darker: '#444444',
  darkest: '#333333',
  border: 'rgba(0,0,0,.1)',
  // Status
  positive: '#66BF3C',
  negative: '#FF4400',
  warning: '#fcba0b',
  disabledlight: '#eae5f0',
  disableddark: '#c3b8cb',
  danger: '#ff1e1f',
  success: '#15b95a'
};
export var spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30
  },
  borderRadius: {
    small: '4px',
    default: 10
  }
};
export var typography = {
  type: {
    primary: 'Montserrat, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace'
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900'
  },
  size: {
    mini: '.6rem',
    small: '.7rem',
    s1: '13',
    s2: '14',
    s3: '16',
    medium: '.8rem',
    m1: '20',
    m2: '24',
    m3: '28',
    large: '.9rem',
    l1: '32',
    l2: '40',
    l3: '48',
    code: '90'
  }
};
export var breakpoint = 600;
export var pageMargin = '5.55555';
export var pageMargins = css(_templateObject(), spacing.padding.medium, breakpoint * 1, pageMargin * 1, breakpoint * 2, pageMargin * 2, breakpoint * 3, pageMargin * 3, breakpoint * 4, pageMargin * 4);