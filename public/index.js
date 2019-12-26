import ReactDOM from 'react-dom';
import React from 'react';
import App from './app';

// styles:
import "@feizheng/webkit-sass-reset/dist/base.scss";
import '@feizheng/photon';
import '@feizheng/react-sw-update-tips/dist/style.scss';
import '@feizheng/react-full-image/dist/style.scss';
import '@feizheng/webkit-sassui-animate-float/dist/index.scss';
import 'highlight.js/styles/github.css';
import './assets/style.scss';

ReactDOM.render(<App />, document.getElementById('app'));
