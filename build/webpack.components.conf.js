const merge = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base.conf');

module.exports = (inEnv) => {
  return merge(baseConfig(inEnv), {
    mode: 'production',
    entry: {
      button: './packages/button/main',
      'button-group': './packages/button-group/main',
      checkbox: './packages/checkbox/main',
      'form-group': './packages/form-group/main',
      icon: './packages/icon/main',
      input: './packages/input/main',
      'list-group': './packages/list-group/main',
      'nav-group': './packages/nav-group/main',
      pane: './packages/pane/main',
      'pane-group': './packages/pane-group/main',
      'radio-group': './packages/radio-group/main',
      select: './packages/select/main',
      'tab-item': './packages/tab-item/main',
      table: './packages/table/main',
      tabs: './packages/tabs/main',
      textarea: './packages/textarea/main',
      'toolbar-actions': './packages/toolbar-actions/main',
      'toolbar-footer': './packages/toolbar-footer/main',
      'toolbar-header': './packages/toolbar-header/main',
      window: './packages/window/main',
      'window-content': './packages/window-content/main'
    },
    output: {
      path: path.resolve(__dirname, '..', 'dist/lib'),
      filename: '[name]/index.js',
      library: '[name]',
      libraryTarget: 'umd'
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
  });
};
