## Mock API server

https://reqres.in/

## dependency

for async await

```sh
yarn add -D @babel/plugin-transform-runtime
yarn add @babel/runtime
```

add it in babel.config.js

```js
const presets = [
  [
    '@babel/env',
    {
      targets: {
        edge: '17',
        firefox: '60',
        chrome: '67',
        safari: '11.1'
      },
      useBuiltIns: 'usage'
    }
  ]
];

const plugins = [
  ['@babel/transform-runtime']
];

module.exports = { presets, plugins };
```
