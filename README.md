@@todo revise the readme.

## Compatibility

WordLift Design aims to be compatible with WordPress 5.0+. In order to achieve that we must take into account that
WordPress provides some packages already. The list of provided libraries is available on the [@wordpress/dependency-extraction-webpack-plugin](https://www.npmjs.com/package/@wordpress/dependency-extraction-webpack-plugin)
page:

| Request | Global | Script handle |
| --- | --- | --- |
| `@babel/runtime/regenerator` | `regeneratorRuntime` | `wp-polyfill` |
| `@wordpress/*` | `wp['*']` | `wp-*` |
| `jquery` | `jQuery` | `jquery` |
| `lodash-es` | `lodash` | `lodash` |
| `lodash` | `lodash` | `lodash` |
| `moment` | `moment` | `moment` |
| `react-dom` | `ReactDOM` | `react-dom` |
| `react` | `React` | `react` |

Some versions are available from the [element's package.json](https://github.com/WordPress/gutenberg/blob/v5.0.0/packages/element/package.json) of the [gutenberg project](https://github.com/WordPress/gutenberg):

| Package | Version |
| --- | --- | --- |
| `lodash` | `^4.17.10` |
| `lodash-es` | `^4.17.10` |
| `react-dom` | `^16.6.3` |
| `react` | `^16.6.3` |

That means that, in order to maintain WordPress 5.0+ compatibility we must stick to React 16.6.
