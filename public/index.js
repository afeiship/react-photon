import ReactDOM from 'react-dom';
import React from 'react';
import App from './app';

// styles:
import "@jswork/wsui-reset/dist/base.scss";
import '@jswork/photon';
import '@jswork/react-sw-update-tips/dist/style.scss';
import '@jswork/react-full-image/dist/style.scss';
import '@jswork/wsui-animate-float/dist/index.scss';
import 'highlight.js/styles/github.css';
import './assets/style.scss';

ReactDOM.render(<App />, document.getElementById('app'));
