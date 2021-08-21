# react-photon
> Photon components built with React.

## thanks to
[@frostney](https://github.com/frostney) Add me to the developer of `react-photon`.

## preview
- https://afeiship.github.io/react-photon/

## installation
```shell
npm i -S react-photon
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
      [ "import", { "libraryName": "react-photon", "libraryDirectory": "dist/lib" } ]
    ]
  }
  ```

## resources
- http://photonkit.com/
- https://www.robinwieruch.de/minimal-react-webpack-babel-setup
- https://vuikit.js.org/guide/introduction
