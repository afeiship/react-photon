const path = require('path');

module.exports = (inEnv) => {
  return {
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
      path: path.resolve(__dirname, 'dist/lib')
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
      react: 'react',
      classnames: 'classnames',
      '@feizheng/noop': 'noop',
      '@feizheng/react-list': 'ReactList'
    }
  };
};
