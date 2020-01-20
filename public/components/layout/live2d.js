import { L2Dwidget } from 'live2d-widget';

L2Dwidget.init({
  model: {
    scale: 1,
    hHeadPos: 0.5,
    vHeadPos: 0.618,
    jsonPath: 'https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json'
  },
  display: {
    superSample: 2,
    width: 120,
    height: 220,
    position: 'top',
    hOffset: 20,
    vOffset: 20
  },
  mobile: {
    show: false,
    scale: 0.8
  },
  react: {
    opacityDefault: 0.7,
    opacityOnHover: 0.2
  }
});
