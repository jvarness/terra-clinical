(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{1322:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n(0)),a=u(n(868)),o=u(n(918));function u(t){return t&&t.__esModule?t:{default:t}}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var a=p(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?d(t):e}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(s,t);var e,n,u,i=f(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),e=i.call(this,t),a.default.now=function(){return new Date(2016,8,20)},e.state={precision:"before",granularity:"year"},e.handleOnset=e.handleOnset.bind(d(e)),e.handleSubmit=e.handleSubmit.bind(d(e)),e}return e=s,(n=[{key:"handleOnset",value:function(t){this.setState({precision:t.precision,granularity:t.granularity,onsetDate:t.onsetDate,ageUnit:t.ageUnit})}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.setState((function(t){return{submittedData:{precision:t.precision,granularity:t.granularity,onsetDate:t.onsetDate,ageUnit:t.ageUnit}}}))}},{key:"render",value:function(){var t=(0,a.default)().subtract(6,"days");return r.default.createElement("div",null,r.default.createElement("p",null,"Onset picker with age to be less than a week."),r.default.createElement("p",null,"Current date locked to ".concat((0,a.default)().format("MM-DD-YYYY"))),r.default.createElement("p",null,"Birthdate locked to ".concat(t.format("MM-DD-YYYY"))),r.default.createElement("p",null,"Testing age granularity to not be populated for age less than a week."),r.default.createElement("form",{onSubmit:this.handleSubmit},r.default.createElement(o.default,{birthdate:t.format("YYYY-MM-DD"),id:"test",legend:"Date of Onset",onsetOnChange:this.handleOnset}),r.default.createElement("button",{type:"submit"},"Submit"),this.state.submittedData&&r.default.createElement("div",null,r.default.createElement("hr",null),r.default.createElement("p",null,"Form was submitted with"),r.default.createElement("p",null,JSON.stringify(this.state.submittedData)))))}}])&&l(e.prototype,n),u&&l(e,u),s}(r.default.Component);e.default=y}}]);
//# sourceMappingURL=192-78184fd4eafd0a916c4c.js.map