(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1359:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r(0)),l=n(r(919)),a=n(r(880));function n(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return i.default.createElement(l.default,{eventId:a.default.eventId,result:a.default.result})}},869:function(e,t,r){e.exports={"orion-fusion-theme":"IconCritical-module__orion-fusion-theme___1w7CD","clinical-lowlight-theme":"IconCritical-module__clinical-lowlight-theme___3X54P",IconCritical:"IconCritical-module__IconCritical___1b2V4"}},870:function(e,t,r){e.exports={"orion-fusion-theme":"IconHigh-module__orion-fusion-theme___3Q6pB","clinical-lowlight-theme":"IconHigh-module__clinical-lowlight-theme___3oBDk",IconHigh:"IconHigh-module__IconHigh___1uiOM"}},871:function(e,t,r){e.exports={"orion-fusion-theme":"IconLow-module__orion-fusion-theme___3wgQP","clinical-lowlight-theme":"IconLow-module__clinical-lowlight-theme___2ZsdF",IconLow:"IconLow-module__IconLow___2AfY8"}},872:function(e,t,r){e.exports={"orion-fusion-theme":"IconAbnormal-module__orion-fusion-theme___3-Xp7","clinical-lowlight-theme":"IconAbnormal-module__clinical-lowlight-theme___3sUk6",IconAbnormal:"IconAbnormal-module__IconAbnormal___yOSdN"}},879:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r(0)),l=o(r(3)),a=o(r(21)),n=o(r(869));function o(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var s=l.default.bind(n.default),c=function(e){var t=u({},e),r=s(["IconCritical",e.className]);return i.default.createElement(a.default,u({className:r},t),i.default.createElement("path",{fill:"#E50000",d:"M47.7 23.2L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.1.4 1.6 0l22.9-22.9c.4-.4.4-1.2 0-1.6z"}),i.default.createElement("path",{fill:"#FFF",d:"M27 39h-6v-6h6v6zm0-11h-6V8h6v20z"}))};c.displayName="IconCritical",c.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var d=c;t.default=d},880:function(e,t,r){"use strict";function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.EnteredInErrorDiaBPResult=t.EnteredInErrorSysBPResult=t.NoDataResult=t.DefaultBloodPressureDiastolicResultWithNoId=t.DefaultBloodPressureSystolicResultWithNoId=t.MixedBPResultValue=t.ExtraDisplaysBloodPressureResult=t.UnverifiedBloodPressureResult2=t.UnverifiedBloodPressureResult1=t.DecoratedBloodPressureResult2=t.DecoratedBloodPressureResult1=t.DefaultBloodPressureResult=t.DefaultResultWithNoEventId=t.DefaultDiastolicResult=t.DefaultSystolicResult=t.EnteredInErrorResult=t.BadData=t.UnverifiedResult=t.DecoratedResult=t.SingleResultValue=t.default=void 0;t.DefaultResultWithNoEventId={id:"111",result:{value:"12345.678",unit:"mL"}};var n={eventId:"111",result:{value:"12345.678",unit:"mL"}},o=l(l({},n),{},{conceptDisplay:"Temperature Oral",datetimeDisplay:"Nov 23, 2019 13:31:31"});t.SingleResultValue=o;var u=l(l({},n),{},{isModified:!0,hasComment:!0,isUnverified:!1});t.DecoratedResult=u;var s=l(l({},n),{},{isModified:!1,hasComment:!1,isUnverified:!0});t.UnverifiedResult=s;t.BadData={eventId:"111",clinicalresult:{value:"354.23377777758678567867856785687678567856767868678567856785678567856785678567857856785678567856785678567856785678578567856",unit:"mmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHg"},interpretation:"critical"};var c=l(l({},n),{},{interpretation:"critical",status:"entered-in-error"});t.EnteredInErrorResult=c;var d={eventId:"111.1",result:{value:"180",unit:"mmHg"}};t.DefaultSystolicResult=d;var f={eventId:"111.2",result:{value:"80",unit:"mmHg"}};t.DefaultDiastolicResult=f;var m={systolic:l({},d)};t.DefaultBloodPressureSystolicResultWithNoId=m;var v={diastolic:l({},f)};t.DefaultBloodPressureDiastolicResultWithNoId=v;var _={id:"111",systolic:l({},d),diastolic:l({},f)};t.DefaultBloodPressureResult=_;var p={id:"111",systolic:l(l({},d),{},{isModified:!0,hasComment:!0,isUnverified:!1}),diastolic:l(l({},f),{},{isModified:!1,hasComment:!1,isUnverified:!1})};t.DecoratedBloodPressureResult1=p;var h={id:"111",systolic:l(l({},d),{},{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:l(l({},f),{},{isModified:!0,hasComment:!0,isUnverified:!1})};t.DecoratedBloodPressureResult2=h;var g={id:"111",systolic:l(l({},d),{},{isModified:!1,hasComment:!1,isUnverified:!0}),diastolic:l(l({},f),{},{isModified:!1,hasComment:!1,isUnverified:!1})};t.UnverifiedBloodPressureResult1=g;var y={id:"111",systolic:l(l({},d),{},{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:l(l({},f),{},{isModified:!1,hasComment:!1,isUnverified:!0})};t.UnverifiedBloodPressureResult2=y;var b={id:"111",systolic:l(l({},d),{},{conceptDisplay:"Blood Pressure Systolic",datetimeDisplay:"Nov 23, 2019 13:31:31"}),diastolic:l(l({},f),{},{conceptDisplay:"Blood Pressure Diastolic",datetimeDisplay:"Nov 23, 2019 13:31:44"})};t.ExtraDisplaysBloodPressureResult=b;var O={id:"111",systolic:l(l({},d),{},{interpretation:"critical"}),diastolic:l(l({},f),{},{interpretation:"low"})};t.MixedBPResultValue=O;t.NoDataResult={eventId:"",result:{value:null,unit:""},interpretation:"normal",isModified:!1,hasComment:!1,isUnverified:!1,resultNoData:!0};var w={id:"111",systolic:l(l({},d),{},{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1}),diastolic:l(l({},f),{},{isModified:!1,hasComment:!1})};t.EnteredInErrorSysBPResult=w;var P={id:"111",systolic:l(l({},d),{},{isModified:!1,hasComment:!1}),diastolic:l(l({},f),{},{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1})};t.EnteredInErrorDiaBPResult=P;var I=n;t.default=I},881:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r(0)),l=o(r(3)),a=o(r(21)),n=o(r(870));function o(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var s=l.default.bind(n.default),c=function(e){var t=u({},e),r=s(["IconHigh",e.className]);return i.default.createElement(a.default,u({className:r},t),i.default.createElement("path",{fill:"#da3b03",d:"M24 2.3L45.7 24 24 45.7 2.3 24 24 2.3M24 0a1.135 1.135 0 00-.8.3L.3 23.2a1.215 1.215 0 000 1.6l22.9 22.9a1.217 1.217 0 001.6 0l22.9-22.9a1.217 1.217 0 000-1.6L24.8.3A1.135 1.135 0 0024 0zm0 9L13 20h8v19h6V20h8z"}))};c.displayName="IconHigh",c.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var d=c;t.default=d},882:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r(0)),l=o(r(3)),a=o(r(21)),n=o(r(871));function o(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var s=l.default.bind(n.default),c=function(e){var t=u({},e),r=s(["IconLow",e.className]);return i.default.createElement(a.default,u({className:r},t),i.default.createElement("path",{fill:"#0053E6",d:"M24 2.3L45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.6.1-.8.3L.3 23.2c-.4.4-.4 1.2 0 1.6l22.9 22.9c.2.2.5.3.8.3s.6-.1.8-.3l22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.2-.2-.5-.3-.8-.3zm0 39l11-11h-8V9h-6v19h-8l11 11z"}))};c.displayName="IconLow",c.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var d=c;t.default=d},883:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r(0)),l=o(r(3)),a=o(r(21)),n=o(r(872));function o(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var s=l.default.bind(n.default),c=function(e){var t=u({},e),r=s(["IconAbnormal",e.className]);return i.default.createElement(a.default,u({className:r},t),i.default.createElement("path",{fill:"#654A08",d:"M24 2.3L45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.5.1-.8.3L.3 23.2c-.4.5-.4 1.1 0 1.6l22.9 22.9c.2.2.5.3.8.3s.5-.1.8-.3l22.9-22.9c.4-.5.4-1.1 0-1.6L24.8.3c-.3-.2-.5-.3-.8-.3zm0 8c3.9 3.9 4 13 4 13H15v6c0 10 9 13 9 13-3.9-3.9-4-13-4-13h13v-6c0-10-9-13-9-13z"}))};c.displayName="IconAbnormal",c.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var d=c;t.default=d},911:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(r(0)),l=r(8),a=u(r(285)),n=u(r(3)),o=u(r(914));function u(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,i,l=function(e,t){if(null==e)return{};var r,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d=n.default.bind(o.default),f={intl:l.intlShape.isRequired},m=function(e){var t=e.intl,r=c(e,["intl"]),l=d(["system-error"]);return i.default.createElement("span",s({},r,{className:r.className?"".concat(l," ").concat(r.className):l}),i.default.createElement(a.default,{className:d("icon-error"),"aria-hidden":"true"}),t.formatMessage({id:"Terra.clinicalResult.resultError"}))};m.propTypes=f;var v=(0,l.injectIntl)(m);t.default=v},912:function(e,t,r){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=((i=r(1))&&i.__esModule?i:{default:i}).default.oneOf(["critical","critical-high","critical-low","positive","abnormal","high","low","normal"]);t.default=l},913:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,l=(i=r(1))&&i.__esModule?i:{default:i};var a=l.default.shape({value:l.default.oneOfType([l.default.string,l.default.arrayOf(l.default.string)]),unit:l.default.string});t.default=a},914:function(e,t,r){e.exports={"entered-in-error":"OtherTemplates-module__entered-in-error___3Ge38","no-data":"OtherTemplates-module__no-data___27Cys","numeric-overflow":"OtherTemplates-module__numeric-overflow___3B9g4","system-error":"OtherTemplates-module__system-error___2V3F7","icon-error":"OtherTemplates-module__icon-error___3HCQc",truncated:"OtherTemplates-module__truncated___Eqkg6"}},919:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=v(r(0)),l=v(r(1)),a=v(r(3)),n=v(r(879)),o=v(r(881)),u=v(r(882)),s=v(r(883)),c=v(r(912)),d=v(r(913)),f=v(r(911)),m=v(r(922));function v(e){return e&&e.__esModule?e:{default:e}}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var r,i,l=function(e,t){if(null==e)return{};var r,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var h=a.default.bind(m.default),g={eventId:l.default.string,result:d.default,interpretation:c.default,isUnverified:l.default.bool,hideUnit:l.default.bool},y={critical:i.default.createElement(n.default,{className:h("icon-interpretation")}),"critical-high":i.default.createElement(n.default,{className:h("icon-interpretation")}),"critical-low":i.default.createElement(n.default,{className:h("icon-interpretation")}),positive:i.default.createElement(n.default,{className:h("icon-interpretation")}),abnormal:i.default.createElement(s.default,{className:h("icon-interpretation")}),high:i.default.createElement(o.default,{className:h("icon-interpretation")}),low:i.default.createElement(u.default,{className:h("icon-interpretation")})},b={critical:"critical","critical-high":"critical","critical-low":"critical",positive:"positive",abnormal:"abnormal",high:"high",low:"low"},O=function(e){e.eventId;var t=e.result,r=e.interpretation,l=e.isUnverified,a=e.hideUnit,n=p(e,["eventId","result","interpretation","isUnverified","hideUnit"]),o=null==t?void 0:t.value,u=h(["value",!l&&b[r],{unverified:l}]),s=h(["unit",{"unit-hidden":a}]);return o?i.default.createElement(i.default.Fragment,null,i.default.createElement("span",_({},n,{className:n.className?"".concat(u," ").concat(n.className):u}),r&&!l&&y[r],t.value),t.unit?i.default.createElement("span",{className:s},t.unit):null):i.default.createElement(f.default,null)};O.propTypes=g;var w=O;t.default=w},922:function(e,t,r){e.exports={value:"Observation-module__value___1svy8","icon-interpretation":"Observation-module__icon-interpretation___GEwGN",abnormal:"Observation-module__abnormal___1_I6a",critical:"Observation-module__critical___1YAHR",high:"Observation-module__high___nOYKC",low:"Observation-module__low___NacId",positive:"Observation-module__positive___1Bwho",unverified:"Observation-module__unverified___WXBpI",unit:"Observation-module__unit___1aZl3","unit-hidden":"Observation-module__unit-hidden___1USSd"}}}]);
//# sourceMappingURL=61-e44904e8994f124d434d.js.map