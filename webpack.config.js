const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (inEnv) => {
  return {
    mode: 'production',
    entry: './src/index.js',
    output: {
      filename: 'react-photon.js',
      library: 'ReactPhoton',
      libraryTarget: 'umd'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    externals: {
      classnames: 'classnames',
      react: 'react',
      'react-dom': 'react-dom',
      '@feizheng/noop': '@feizheng/noop',
      'object-assign': 'object-assign',
      'prop-types': 'prop-types',
      '@feizheng/react-list': '@feizheng/react-list'
    },
    plugins: [new CleanWebpackPlugin()]
  };
};
