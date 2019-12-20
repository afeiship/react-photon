# react-photon
> Photon components built with React.

## preview
- https://afeiship.github.io/react-photon/

## installation
```shell
npm i -S @feizheng/react-photon
```

## dynamic import
1. install `babel-plugin-import`

   ```shell
   npm i -D babel-plugin-import
   ```
2. `.babelrc`

  ```js
  {
    "presets": ["@babel/preset-env", "@babel/react"],
    "plugins": [
      // ....
      [ "import", { "libraryName": "@feizheng/react-photon", "libraryDirectory": "dist/lib" } ]
    ]
  }
  ```

## resources
- http://photonkit.com/
- https://www.robinwieruch.de/minimal-react-webpack-babel-setup
