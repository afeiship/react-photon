!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("classnames"),require("@feizheng/noop")):"function"==typeof define&&define.amd?define(["react","classnames","@feizheng/noop"],t):"object"==typeof exports?exports.tabs=t(require("react"),require("classnames"),require("@feizheng/noop")):e.tabs=t(e.react,e.classnames,e["@feizheng/noop"])}(window,(function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=34)}({0:function(t,n){t.exports=e},1:function(e,n){e.exports=t},3:function(e,t){e.exports=n},34:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(1),u=n.n(a),i=n(3),c=n.n(i);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=b(t).call(this,e),n=!o||"object"!==l(o)&&"function"!=typeof o?y(r):o,v(y(n),"onClick",(function(e){var t=n.props,r=t.onChange,o=t.name,a=e.target.dataset.value;n.setState({value:a},(function(){r({target:{value:a,name:o}})}))})),n.state={value:e.value},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.className,n=(e.children,s(e,["className","children"]));return o.a.createElement("section",f({className:u()("tabs",t)},n),o.a.createElement("nav",{className:"tab-group ".concat("tabs","__menu")},this.menuView),o.a.createElement("div",{className:"".concat("tabs","__content")},this.contentView))}},{key:"menus",get:function(){var e=this.props.children;return o.a.Children.map(e,(function(e,t){var n=e.props,r=n.key,o=n.title;return{value:r||String(t),label:o}}))}},{key:"contents",get:function(){var e=this.props.children;return o.a.Children.map(e,(function(e,t){var n=e.props,r=n.key,o=n.children;return{value:r||String(t),children:o}}))}},{key:"menuView",get:function(){var e=this,t=this.state.value;return this.menus.map((function(n,r){return o.a.createElement("div",{key:r,onClick:e.onClick,"data-value":n.value,className:u()("tab-item",{active:t===n.value})},n.label)}))}},{key:"contentView",get:function(){var e=this.state.value;return this.contents.map((function(t){return t.value===e?o.a.createElement("div",{className:"tab-content",key:t.value},t.children):null}))}}])&&p(n.prototype,r),a&&p(n,a),t}(o.a.Component);v(d,"displayName","tabs"),v(d,"defaultProps",{onChange:c.a});t.default=d}})}));