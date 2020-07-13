(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1309:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),a=l(n(3)),r=l(n(898)),i=l(n(935));function l(e){return e&&e.__esModule?e:{default:e}}var c=a.default.bind(i.default),s=function(){return o.default.createElement("div",null,o.default.createElement("p",null,"Given no props, the div is created, but there is no content to show. The ItemView is outlined below."),o.default.createElement("div",{className:c("itemview-wrapper")},o.default.createElement(r.default,{id:"ItemView"})))};t.default=s},876:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),a=r(n(21));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var l=function(e){var t=i({},e);return o.default.createElement(a.default,t,o.default.createElement("path",{d:"M46 2.1H2a2 2 0 00-2 2v28a2 2 0 002 2h31.2L45 45.9V34.1h1a2 2 0 002-2v-28a2 2 0 00-2-2z"}))};l.displayName="IconComment",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=l;t.default=c},884:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextStyles=t.default=void 0;var o=s(n(0)),a=s(n(1)),r=s(n(11)),i=s(n(3)),l=s(n(7)),c=s(n(890));function s(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var _=i.default.bind(c.default),f={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"};t.TextStyles=f;var p={text:a.default.string,textStyle:a.default.oneOf(Object.values(f)),isTruncated:a.default.bool,isDisabled:a.default.bool,icon:a.default.element,iconAlignment:a.default.oneOf(["center","top","inline"])},y={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},v=function(e){var t,n=e.text,a=e.textStyle,i=e.isTruncated,c=e.isDisabled,s=e.icon,p=e.iconAlignment,y=d(e,["text","textStyle","isTruncated","isDisabled","icon","iconAlignment"]),v=o.default.useContext(l.default),w=(0,r.default)(_("item-display",{"is-disabled":c},m({},"icon-".concat(p),s),v.className),y.className),O=_(["text",{"is-truncated":i},m({},"".concat(a),a===f.SECONDARY),m({},"".concat(a),a===f.ATTENTION),m({},"".concat(a),a===f.STRONG),{"strike-through":a===f.STRIKETHROUGH}]);return s&&(t=o.default.createElement("div",{className:_("icon")},s)),o.default.createElement("div",u({},y,{className:w,"aria-disabled":c}),t,o.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:O},n))};v.propTypes=p,v.defaultProps=y;var w=v;t.default=w},890:function(e,t,n){e.exports={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___3PFvw","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___1Yt2B","item-display":"ItemDisplay-module__item-display___3yi9q",text:"ItemDisplay-module__text___c-QUG",icon:"ItemDisplay-module__icon___SD1FM","icon-center":"ItemDisplay-module__icon-center___2_JkX","icon-top":"ItemDisplay-module__icon-top___19Qjs","icon-inline":"ItemDisplay-module__icon-inline___28SMk","is-truncated":"ItemDisplay-module__is-truncated___2UWjL","is-disabled":"ItemDisplay-module__is-disabled___1nKWv",secondary:"ItemDisplay-module__secondary___3UcUl",attention:"ItemDisplay-module__attention___3lc20",strong:"ItemDisplay-module__strong___EtBtH","strike-through":"ItemDisplay-module__strike-through___1ixOq"}},896:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=m(n(0)),a=m(n(1)),r=m(n(11)),i=m(n(3)),l=m(n(7)),c=m(n(876)),s=m(n(884)),u=m(n(897));function m(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=i.default.bind(u.default),p={text:a.default.string,isTruncated:a.default.bool},y=function(e){var t=e.text,n=e.isTruncated,a=_(e,["text","isTruncated"]),i=o.default.useContext(l.default),u=(0,r.default)(f("item-comment",i.className),a.className);return o.default.createElement(s.default,d({text:t,isTruncated:n,icon:o.default.createElement(c.default,{className:f("inline-icon")})},a,{className:u}))};y.propTypes=p,y.defaultProps={text:"",isTruncated:!1};var v=y;t.default=v},897:function(e,t,n){e.exports={"clinical-lowlight-theme":"ItemComment-module__clinical-lowlight-theme___bfjk8","orion-fusion-theme":"ItemComment-module__orion-fusion-theme___2IKgp","item-comment":"ItemComment-module__item-comment___3CMDj","inline-icon":"ItemComment-module__inline-icon___3zuUm"}},898:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AccessoryAlignments=t.TextEmphasisTypes=t.Layouts=t.default=void 0;var o=m(n(0)),a=m(n(1)),r=m(n(11)),i=m(n(3)),l=m(n(7)),c=m(n(884)),s=m(n(896)),u=m(n(905));function m(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=i.default.bind(u.default),p={ONE_COLUMN:"oneColumn",TWO_COLUMNS:"twoColumns"};t.Layouts=p;var y={DEFAULT:"default",START:"start"};t.TextEmphasisTypes=y;var v={ALIGN_TOP:"alignTop",ALIGN_CENTER:"alignCenter"};t.AccessoryAlignments=v;var w={layout:a.default.oneOf(["oneColumn","twoColumns"]),textEmphasis:a.default.oneOf(["default","start"]),isTruncated:a.default.bool,accessoryAlignment:a.default.oneOf(["alignTop","alignCenter"]),startAccessory:a.default.node,reserveStartAccessorySpace:a.default.bool,endAccessory:a.default.node,displays:a.default.arrayOf(a.default.element),comment:a.default.node,refCallback:a.default.func},O={layout:p.ONE_COLUMN,textEmphasis:y.DEFAULT,isTruncated:!1,accessoryAlignment:v.ALIGN_CENTER,startAccessory:void 0,reserveStartAccessorySpace:!1,endAccessory:void 0,displays:[],comment:void 0},b=function(e,t,n,a){var r;if(e||t){var i=f("accessory","".concat(a,"-accessory"),{"accessory-align-center":n===v.ALIGN_CENTER},{"accessory-align-top":n===v.ALIGN_TOP});r=o.default.createElement("div",{className:i},e)}return r},g=function(e,t){var n="content-primary-size",o="content-primary-color";return e>0&&(n="content-secondary-size"),(2===t&&1===e||e>=2)&&(o="content-secondary-color"),[n,o]},h=function(e,t,n,o){var a;return a=o===y.START?function(e,t,n){return 1===n?["content-secondary-size","content-secondary-color"]:g(e,t)}(e,t,n):g(e,t),["content"].concat(a)},I=function(e,t,n){if(null!=e&&e.length){for(var a=[],r=e.slice(0,8),i=t===p.TWO_COLUMNS?2:1;r.length;)a.push(r.splice(0,i));return o.default.createElement("div",{className:f("row-container")},a.map((function(e,t){return function(e,t,n,a){var r=t;return o.default.createElement("div",{className:f("row"),key:r},e.map((function(e,r){var i=r,l=h(t,n,r,a);return o.default.createElement("div",{className:f(l),key:i},e)})))}(e,t,a.length,n)})))}},T=function(e){var t=e.layout,n=e.textEmphasis,a=e.isTruncated,i=e.accessoryAlignment,c=e.startAccessory,s=e.reserveStartAccessorySpace,u=e.endAccessory,m=e.displays,y=e.comment,v=e.refCallback,w=_(e,["layout","textEmphasis","isTruncated","accessoryAlignment","startAccessory","reserveStartAccessorySpace","endAccessory","displays","comment","refCallback"]),O=o.default.useContext(l.default),g=(0,r.default)(f("item-view",{"is-truncated":a},{"one-column":t===p.ONE_COLUMN},{"two-columns":t===p.TWO_COLUMNS},O.className),w.className);return o.default.createElement("div",d({},w,{className:g,ref:v}),b(c,s,i,"start"),o.default.createElement("div",{className:f("body")},I(m,t,n),y),b(u,!1,i,"end"))};T.propTypes=w,T.defaultProps=O,T.Display=c.default,T.Comment=s.default;var E=T;t.default=E},905:function(e,t,n){e.exports={"clinical-lowlight-theme":"ItemView-module__clinical-lowlight-theme___BRJFI","orion-fusion-theme":"ItemView-module__orion-fusion-theme___33TOR","item-view":"ItemView-module__item-view___61CR3",accessory:"ItemView-module__accessory___3Htik","start-accessory":"ItemView-module__start-accessory___2waGL","end-accessory":"ItemView-module__end-accessory___iFidE","accessory-align-top":"ItemView-module__accessory-align-top___2gmqS","accessory-align-center":"ItemView-module__accessory-align-center___1DO3t",body:"ItemView-module__body___SD0Vl",row:"ItemView-module__row___1_JaL",content:"ItemView-module__content___3wPtn","is-truncated":"ItemView-module__is-truncated___1duic","one-column":"ItemView-module__one-column___2LPcY","row-container":"ItemView-module__row-container___3YCG9","two-columns":"ItemView-module__two-columns___rwj9b","content-primary-color":"ItemView-module__content-primary-color___3af5E","content-primary-size":"ItemView-module__content-primary-size___3xYXg","content-secondary-color":"ItemView-module__content-secondary-color___3j2Dv","content-secondary-size":"ItemView-module__content-secondary-size___2MzM9"}},935:function(e,t,n){e.exports={"itemview-wrapper":"ItemViewCommon-test-module__itemview-wrapper___vwriQ","comment-itemview-wrapper":"ItemViewCommon-test-module__comment-itemview-wrapper___3T5sf","overflow-displays-itemview":"ItemViewCommon-test-module__overflow-displays-itemview___bEzf0","accessory-itemview-wrapper":"ItemViewCommon-test-module__accessory-itemview-wrapper___3pRu-","itemview-fontsize":"ItemViewCommon-test-module__itemview-fontsize___1hIMC"}}}]);
//# sourceMappingURL=107-ea5cc2f4bd34450f9ce3.js.map