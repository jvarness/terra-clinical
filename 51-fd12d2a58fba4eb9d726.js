(window.webpackJsonp=window.webpackJsonp||[]).push([[51,52,53,54,55,108,124,125],{869:function(e,t,a){e.exports={"orion-fusion-theme":"IconCritical-module__orion-fusion-theme___1w7CD","clinical-lowlight-theme":"IconCritical-module__clinical-lowlight-theme___3X54P",IconCritical:"IconCritical-module__IconCritical___1b2V4"}},870:function(e,t,a){e.exports={"orion-fusion-theme":"IconHigh-module__orion-fusion-theme___3Q6pB","clinical-lowlight-theme":"IconHigh-module__clinical-lowlight-theme___3oBDk",IconHigh:"IconHigh-module__IconHigh___1uiOM"}},871:function(e,t,a){e.exports={"orion-fusion-theme":"IconLow-module__orion-fusion-theme___3wgQP","clinical-lowlight-theme":"IconLow-module__clinical-lowlight-theme___2ZsdF",IconLow:"IconLow-module__IconLow___2AfY8"}},872:function(e,t,a){e.exports={"orion-fusion-theme":"IconAbnormal-module__orion-fusion-theme___3-Xp7","clinical-lowlight-theme":"IconAbnormal-module__clinical-lowlight-theme___3sUk6",IconAbnormal:"IconAbnormal-module__IconAbnormal___yOSdN"}},873:function(e,t,a){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=r?Object.getOwnPropertyDescriptor(e,o):null;n&&(n.get||n.set)?Object.defineProperty(a,o,n):a[o]=e[o]}a.default=e,t&&t.set(e,a);return a}(a(0)),o=_(a(1)),n=_(a(3)),u=a(111),c=_(a(887)),d=_(a(188)),i=_(a(888));function _(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],l=!0,r=!1,o=void 0;try{for(var n,u=e[Symbol.iterator]();!(l=(n=u.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(e){r=!0,o=e}finally{try{l||null==u.return||u.return()}finally{if(r)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}var p=n.default.bind(i.default),h={example:o.default.element,exampleSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},v=function(e){var t=e.example,a=e.exampleSrc,l=e.title,o=e.description,n=e.isExpanded,i=f((0,r.useState)(n),2),_=i[0],s=i[1],m=f((0,r.useState)(!1),2),h=m[0],v=m[1],b=r.default.useContext(u.ThemeContext);return r.default.createElement("div",{className:p("template",b.className)},r.default.createElement("div",{className:p("header")},l&&r.default.createElement("h2",{className:p("title")},l)),r.default.createElement("div",{className:p("content",{"dynamic-content":h})},o&&r.default.createElement("div",{className:p("description")},o),t),a&&r.default.createElement("div",{className:p("footer")},r.default.createElement("div",{className:p("button-container")},r.default.createElement("button",{type:"button",className:p("bg-toggle"),onClick:function(){return v(!h)}},"Toggle Background"),r.default.createElement("button",{type:"button",className:p("code-toggle"),onClick:function(){return s(!_)}},r.default.createElement(c.default,{className:p("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(d.default,{className:p("chevron")}))),_&&r.default.createElement("div",{className:p("code")},a)))};v.propTypes=h,v.defaultProps={isExpanded:!1};var b=v;t.default=b},874:function(e,t,a){e.exports={"orion-fusion-theme":"IconDiamond-module__orion-fusion-theme___19Ilm","clinical-lowlight-theme":"IconDiamond-module__clinical-lowlight-theme___15CSZ",IconDiamond:"IconDiamond-module__IconDiamond___21vv7"}},876:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(a(0)),r=o(a(21));function o(e){return e&&e.__esModule?e:{default:e}}function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var u=function(e){var t=n({},e);return l.default.createElement(r.default,t,l.default.createElement("path",{d:"M46 2.1H2a2 2 0 00-2 2v28a2 2 0 002 2h31.2L45 45.9V34.1h1a2 2 0 002-2v-28a2 2 0 00-2-2z"}))};u.displayName="IconComment",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=u;t.default=c},877:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(1)),o=u(a(3)),n=u(a(878));function u(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(n.default),d={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},i=function(e){var t=e.src,a=e.name,r=e.url,o=e.version,n=l.default.createElement("a",{className:c("badge"),href:r||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},l.default.createElement("span",{className:c("badge-name")},r?"package":"npm"),l.default.createElement("span",{className:c("badge-version")},"v".concat(o))),u=t?l.default.createElement("a",{className:c("badge"),href:t},l.default.createElement("span",{className:c("badge-name")},"github"),l.default.createElement("span",{className:c("badge-version")},"source")):void 0;return l.default.createElement("div",{className:c("badge-container")},n,u)};i.propTypes=d;var _=i;t.default=_},878:function(e,t,a){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},879:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(3)),o=u(a(21)),n=u(a(869));function u(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var d=r.default.bind(n.default),i=function(e){var t=c({},e),a=d(["IconCritical",e.className]);return l.default.createElement(o.default,c({className:a},t),l.default.createElement("path",{fill:"#E50000",d:"M47.7 23.2L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.1.4 1.6 0l22.9-22.9c.4-.4.4-1.2 0-1.6z"}),l.default.createElement("path",{fill:"#FFF",d:"M27 39h-6v-6h6v6zm0-11h-6V8h6v20z"}))};i.displayName="IconCritical",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var _=i;t.default=_},881:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(3)),o=u(a(21)),n=u(a(870));function u(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var d=r.default.bind(n.default),i=function(e){var t=c({},e),a=d(["IconHigh",e.className]);return l.default.createElement(o.default,c({className:a},t),l.default.createElement("path",{fill:"#da3b03",d:"M24 2.3L45.7 24 24 45.7 2.3 24 24 2.3M24 0a1.135 1.135 0 00-.8.3L.3 23.2a1.215 1.215 0 000 1.6l22.9 22.9a1.217 1.217 0 001.6 0l22.9-22.9a1.217 1.217 0 000-1.6L24.8.3A1.135 1.135 0 0024 0zm0 9L13 20h8v19h6V20h8z"}))};i.displayName="IconHigh",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var _=i;t.default=_},882:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(3)),o=u(a(21)),n=u(a(871));function u(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var d=r.default.bind(n.default),i=function(e){var t=c({},e),a=d(["IconLow",e.className]);return l.default.createElement(o.default,c({className:a},t),l.default.createElement("path",{fill:"#0053E6",d:"M24 2.3L45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.6.1-.8.3L.3 23.2c-.4.4-.4 1.2 0 1.6l22.9 22.9c.2.2.5.3.8.3s.6-.1.8-.3l22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.2-.2-.5-.3-.8-.3zm0 39l11-11h-8V9h-6v19h-8l11 11z"}))};i.displayName="IconLow",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var _=i;t.default=_},883:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(3)),o=u(a(21)),n=u(a(872));function u(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var d=r.default.bind(n.default),i=function(e){var t=c({},e),a=d(["IconAbnormal",e.className]);return l.default.createElement(o.default,c({className:a},t),l.default.createElement("path",{fill:"#654A08",d:"M24 2.3L45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.5.1-.8.3L.3 23.2c-.4.5-.4 1.1 0 1.6l22.9 22.9c.2.2.5.3.8.3s.5-.1.8-.3l22.9-22.9c.4-.5.4-1.1 0-1.6L24.8.3c-.3-.2-.5-.3-.8-.3zm0 8c3.9 3.9 4 13 4 13H15v6c0 10 9 13 9 13-3.9-3.9-4-13-4-13h13v-6c0-10-9-13-9-13z"}))};i.displayName="IconAbnormal",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var _=i;t.default=_},885:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(a(0)),r=o(a(21));function o(e){return e&&e.__esModule?e:{default:e}}function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var u=function(e){var t=n({},e);return l.default.createElement(r.default,t,l.default.createElement("path",{d:"M24 0L3 42l-3 6h48L24 0zm-1.7 10.1l16 31.9H6.4l15.9-31.9z"}))};u.displayName="IconModified",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var c=u;t.default=c},886:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(3)),o=u(a(21)),n=u(a(874));function u(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var d=r.default.bind(n.default),i=function(e){var t=c({},e),a=d(["IconDiamond",e.className]);return l.default.createElement(o.default,c({className:a},t),l.default.createElement("path",{fill:"#78288C",d:"M24.8 47.7l22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.2.4 1.6 0z"}))};i.displayName="IconDiamond",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var _=i;t.default=_},887:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(a(0)),r=o(a(21));function o(e){return e&&e.__esModule?e:{default:e}}function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var u=function(e){var t=n({},e);return l.default.createElement(r.default,t,l.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=u;t.default=c},888:function(e,t,a){e.exports={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___e4g6e","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___MlAIc",template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK",chevron:"ExampleTemplate-module__chevron___3Xlby",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},889:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(a(0)),r=o(a(21));function o(e){return e&&e.__esModule?e:{default:e}}function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var u=function(e){var t=n({},e);return l.default.createElement(r.default,t,l.default.createElement("path",{d:"M38 0H10a2 2 0 00-2 2v44a2 2 0 002 2h28a2 2 0 002-2V2a2 2 0 00-2-2zM15 41h-4v-4h4zm0-7h-4v-4h4zm0-7h-4v-4h4zm7 14h-4v-4h4zm0-7h-4v-4h4zm0-7h-4v-4h4zm7 14h-4v-4h4zm0-7h-4v-4h4zm0-7h-4v-4h4zm8 14h-5V23h5zm0-25H11V3h26z"}))};u.displayName="IconCalculator",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var c=u;t.default=c},891:function(e,t,a){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=r?Object.getOwnPropertyDescriptor(e,o):null;n&&(n.get||n.set)?Object.defineProperty(a,o,n):a[o]=e[o]}a.default=e,t&&t.set(e,a);return a}(a(0)),o=d(a(1)),n=d(a(3)),u=a(111),c=d(a(895));function d(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}var _=n.default.bind(c.default),s={rows:o.default.arrayOf(o.default.shape({name:o.default.string,type:o.default.func,required:o.default.bool,defaultValue:o.default.string,description:o.default.func}))},f=function(e){var t=e.rows,a=(0,r.useContext)(u.ThemeContext);return r.default.createElement("table",{className:_("table",a.className)},r.default.createElement("thead",null,r.default.createElement("tr",{className:_("tr")},r.default.createElement("th",{className:_("th")},"Prop Name"),r.default.createElement("th",{className:_("th")},"Type"),r.default.createElement("th",{className:_("th")},"Is Required"),r.default.createElement("th",{className:_("th")},"Default Value"),r.default.createElement("th",{className:_("th")},"Description"))),r.default.createElement("tbody",null,t.map((function(e){return r.default.createElement("tr",{className:_("tr","props-tr"),key:e.name},r.default.createElement("td",{className:_(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:_(["td","props-td"])},e.type()),r.default.createElement("td",{className:_(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:_(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:_(["td","props-td"])},e.description()))}))))};f.propTypes=s;var m=f;t.default=m},895:function(e,t,a){e.exports={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3s97-","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___1kDLT",a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}}}]);
//# sourceMappingURL=51-fd12d2a58fba4eb9d726.js.map