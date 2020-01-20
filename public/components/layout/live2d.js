import { L2Dwidget } from 'live2d-widget';

L2Dwidget.init({
  model: {
    scale: 1,
    hHeadPos: 0.5,
    vHeadPos: 0.618,
    jsonPath: 'node_modules/live2d-widget-model-hijiki/assets/hijiki.model.json'
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
