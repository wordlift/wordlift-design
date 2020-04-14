module.exports = {
  stories: ["../src/**/*.stories.(mdx|js)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-knobs",
  ],
  // webpackFinal: (config) => ({
  //   ...config,
  //   module: {
  //     ...config.module,
  //     rules: [
  //       ...config.module.rules.filter((rule) => /\.css$/ !== rule.test),
  //       {
  //         test: /\.css1$/,
  //         exclude: [/\.module\.css$/, /@storybook/],
  //         use: [
  //           "style-loader",
  //           {
  //             loader: "css-loader",
  //             options: { importLoaders: 1, sourceMap: false },
  //           },
  //           {
  //             loader: "postcss-loader",
  //             options: {
  //               ident: "postcss",
  //               sourceMap: false,
  //             },
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // }),
};
