/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={208:(t,n,e)=>{e.d(n,{A:()=>f});var r=e(601),o=e.n(r),a=e(314),i=e.n(a),c=e(417),s=e.n(c),l=new URL(e(25),e.b),u=i()(o()),d=s()(l);u.push([t.id,`/* reset defaults in browsers */\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* add control panel */\n:root {\n  --primary-color: rgba(0, 0, 0, 0.4);\n  --secondary-color: rgba(125, 120, 120, 0.1);\n  --success-color: #28a745;\n  --info-color: #17a2b8;\n  --warning-color: #ffc107;\n  --danger-color: #dc3545;\n  --primary-text-color: rgba(255, 255, 255, 1);\n  --secondary-text-color: rgba(125, 120, 120, 1);\n  --body-bg: #f8f9fa;\n  --body-color: #212529;\n  --link-color: #007bff;\n  --link-hover-color: #0056b3;\n  --link-hover-decoration: underline;\n  --font-family-sans-serif: "Nunito", sans-serif;\n  --font-family-monospace: "Courier New", monospace;\n  --box-shadow-color: 7px 11px 50px #7d7866;\n  --padding: 20px;\n}\n\nbody {\n  font-family: "Roboto", sans-serif;\n  height: 100vh;\n  width: 100vw;\n  /* set the background */\n  background-image: url(${d});\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n  background-size: cover;\n  color: var(--primary-text-color);\n  /* grid settlement */\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.location-detail-container {\n  /* take the upper half */\n  grid-area: 1/1/2/-1;\n  /* center this specific container */\n  justify-self: center;\n  align-self: center;\n  /* color and sizing */\n  background-color: var(--primary-color);\n  width: 70%;\n  height: auto;\n  min-height: 40%;\n  padding: var(--padding);\n  border-radius: 30px;\n  box-shadow: var(--box-shadow-color);\n  /* children layout */\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  place-items: center;\n}\n#temp {\n  font-size: clamp(1.5em, 2vw, 2em); /* Responsive font size */\n  color: #ffa34e;\n}\n\n.city-details {\n  display: flex;\n  flex-direction: column;\n}\n.city-details div {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n/* Search section */\n.search-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;  /* Reduced from 15px */\n  width: 100%;\n  max-width: 400px;  /* Increased from 300px */\n  margin: 0 auto;\n}\n\n.search-section > label {\n  font-size: 1.2rem;\n  font-weight: 500;\n  color: var(--primary-text-color);\n  margin-bottom: 2px;  /* Reduced from 5px */\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n#search-city {\n  width: 100%;\n  padding: 10px 20px;  /* Slightly reduced padding */\n  background-color: rgba(0, 0, 0, 0.7);\n  color: var(--primary-text-color);\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 25px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n\n#search-city:focus {\n  outline: none;\n  border-color: rgba(255, 255, 255, 0.3);\n  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);\n}\n\n.search-section > div {\n  display: flex;\n  gap: 8px;  /* Reduced from 10px */\n  padding: 8px;  /* Reduced from 10px */\n  width: 100%;\n  justify-content: center;\n}\n\n#submit-btn {\n  background-color: #006400;\n  color: #ffffff;\n  border: none;\n  border-radius: 25px;\n  padding: 10px 25px;  /* Slightly reduced vertical padding */\n  cursor: pointer;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n  transition: transform 0.2s ease, background-color 0.3s ease;\n}\n\n#submit-btn:hover {\n  background-color: #008000;\n  transform: scale(1.05);\n}\n\n/* Arrow styling */\n.arrow {\n  transition: transform 0.2s ease;\n}\n\n/* weather details */\n.weather-details-container {\n  grid-area: 2/1/3/2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  width: 100%;\n  padding: var(--padding);\n  box-sizing: border-box;\n}\n\n.weather-details-card {\n  width: 100%;\n  height: auto;\n  padding: var(--padding);\n  border-radius: 30px;\n  box-shadow: var(--box-shadow-color);\n  background-color: var(--secondary-color);\n  /* Add responsive design */\n  max-width: 800px;\n  flex: 1;\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(3, minmax(120px, 1fr));\n  grid-template-rows: repeat(2, auto);\n  justify-items: center;\n}\n\n.weather-details-item {\n  background-color: var(--primary-color);\n  width: 75%; /* Take up full grid cell space */\n  max-width: 100%; /* Prevent overflow */\n  height: auto;\n  padding: 5;\n  text-align: center;\n  border-radius: 10px;\n  box-sizing: border-box;\n}\n\n.item-title {\n  color: var(--secondary-text-color);\n}\n\n.weather-details-item .item-title,\n.weather-details-item .item-value {\n  font-size: clamp(0.9rem, 1vw, 1.2rem); /* Responsive font size */\n  margin: 5px 0;\n}\n\n.location-detail-container,\n.weather-details-container,\n.weather-forecast-graph {\n  padding: 20px;\n  margin: 20px;\n}\n\n/* Adjust the graph container */\n.weather-forecast-graph {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: auto; /* Allow height to adjust automatically */\n  margin-top: 20px;\n  padding: 0 20px; /* Add some padding for spacing */\n}\n\n/* Adjust the graph card container */\n.graph-card {\n  width: 100%;\n  max-width: 800px; /* Set maximum width */\n  height: 400px; /* Fixed height for better control */\n  padding: var(--padding);\n  border-radius: 30px;\n  box-shadow: var(--box-shadow-color);\n  background-color: var(--secondary-color);\n  overflow: hidden; /* Ensure no overflow from the chart */\n  /* Make sure the graph resizes based on container size */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Adjust the chart itself to fit the container  */\n#curve_chart {\n  width: 100%;\n  height: 100%;\n  /* background-color: transparet; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Media Queries for Responsive Design */\n@media screen and (max-width: 768px) {\n  body {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto auto;\n    height: auto;\n    min-height: 100vh;\n  }\n\n  .location-detail-container {\n    grid-area: 1/1/2/2;\n    width: 90%;\n    grid-template-columns: 1fr;\n    gap: 20px;\n    margin: 10px;\n  }\n\n  .weather-details-container {\n    grid-area: 2/1/3/2;\n    padding: 10px;\n    margin: 10px;\n  }\n\n  .weather-details-card {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 15px;\n    padding: 15px;\n  }\n\n  .weather-forecast-graph {\n    grid-area: 3/1/4/2;\n    margin: 10px;\n  }\n\n  .graph-card {\n    height: 300px;\n    padding: 10px;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .weather-details-card {\n    grid-template-columns: 1fr;\n  }\n\n  .search-section {\n    max-width: 100%;\n    padding: 0 10px;\n  }\n\n  #search-city {\n    padding: 8px 15px;\n  }\n}`,""]);const f=u},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},417:t=>{t.exports=function(t,n){return n||(n={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]|(%20)/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],l=r.base?s[0]+r.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var f=e(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var h=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=r(t,o),l=0;l<a.length;l++){var u=e(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},659:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},25:(t,n,e)=>{t.exports=e.p+"a6f7310c50b1c284410f.jpg"}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return t[r](a,a.exports,e),a.exports}e.m=t,e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.b=document.baseURI||self.location.href,e.nc=void 0;var r=e(72),o=e.n(r),a=e(825),i=e.n(a),c=e(659),s=e.n(c),l=e(56),u=e.n(l),d=e(540),f=e.n(d),p=e(113),h=e.n(p),g=e(208),m={};function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function v(){v=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,e){return t[n]=e}}function u(t,n,e,r){var a=n&&n.prototype instanceof x?n:x,i=Object.create(a.prototype),c=new z(r||[]);return o(i,"_invoke",{value:C(t,e,c)}),i}function d(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=u;var f="suspendedStart",p="suspendedYield",h="executing",g="completed",m={};function x(){}function b(){}function w(){}var S={};l(S,i,(function(){return this}));var k=Object.getPrototypeOf,E=k&&k(k(N([])));E&&E!==e&&r.call(E,i)&&(S=E);var j=w.prototype=x.prototype=Object.create(S);function L(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function A(t,n){function e(o,a,i,c){var s=d(t[o],t,a);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==y(u)&&r.call(u,"__await")?n.resolve(u.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):n.resolve(u).then((function(t){l.value=t,i(l)}),(function(t){return e("throw",t,i,c)}))}c(s.arg)}var a;o(this,"_invoke",{value:function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return a=a?a.then(o,o):o()}})}function C(n,e,r){var o=f;return function(a,i){if(o===h)throw Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var s=T(c,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var l=d(n,e,r);if("normal"===l.type){if(o=r.done?g:p,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=g,r.method="throw",r.arg=l.arg)}}}function T(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,T(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var a=d(o,n.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,m;var i=a.arg;return i?i.done?(e[n.resultName]=i.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function _(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function N(n){if(n||""===n){var e=n[i];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,a=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(y(n)+" is not iterable")}return b.prototype=w,o(j,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:b,configurable:!0}),b.displayName=l(w,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===b||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,s,"GeneratorFunction")),t.prototype=Object.create(j),t},n.awrap=function(t){return{__await:t}},L(A.prototype),l(A.prototype,c,(function(){return this})),n.AsyncIterator=A,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new A(u(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(j),l(j,s,"Generator"),l(j,i,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=N,z.prototype={constructor:z,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),m},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),m}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;O(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:N(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),m}},n}function x(t,n,e,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void e(t)}c.done?n(s):Promise.resolve(s).then(r,o)}function b(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}function w(t){return"http://api.weatherapi.com/v1/forecast.json?key=".concat("1986480656ec490d950204923202611","&q=").concat(t,"&days=5")}m.styleTagTransform=h(),m.setAttributes=u(),m.insert=s().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=f(),o()(g.A,m),g.A&&g.A.locals&&g.A.locals;var S,k=document.querySelector("#search-city"),E=document.querySelector("#submit-btn"),j=document.querySelector("#city-name"),L=document.querySelector("#temp"),A=document.querySelector("#weather-condition"),C=function(t){if(Array.isArray(t))return t}(S=document.querySelectorAll(".item-value"))||function(t){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,r,o,a,i=[],c=!0,s=!1;try{for(o=(n=n.call(t)).next,!6;!(c=(e=o.call(n)).done)&&(i.push(e.value),6!==i.length);c=!0);}catch(t){s=!0,r=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw r}}return i}}(S)||function(t){if(t){if("string"==typeof t)return b(t,6);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,6):void 0}}(S)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),T=C[0],_=C[1],O=C[2],z=C[3],N=C[4],I=C[5],P=[];function M(){var t;return t=v().mark((function t(n){var e,r;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(w(n),{mode:"cors"});case 3:if((e=t.sent).ok){t.next=6;break}throw new Error("Failed to fetch weather data: ".concat(e.statusText));case 6:return t.next=8,e.json();case 8:R(r=t.sent),q(r),G(),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),o=t.t0,alert("Error fetching weather data: ".concat(o.message));case 17:case"end":return t.stop()}var o}),t,null,[[0,14]])})),M=function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){x(a,r,o,i,c,"next",t)}function c(t){x(a,r,o,i,c,"throw",t)}i(void 0)}))},M.apply(this,arguments)}function R(t){console.log(t);var n=t.location,e=t.current,r=t.forecast,o=n.name,a=n.country,i=e.temp_c,c=e.condition,s=e.feelslike_c,l=e.wind_degree,u=e.humidity,d=e.uv,f=r.forecastday[0].astro,p=f.moon_phase,h=f.sunrise;j.textContent="".concat(o,", ").concat(a),L.textContent="".concat(i,"°C"),A.textContent=c.text,F(s,l,u,d,p,h)}function F(t,n,e,r,o,a){T.textContent="".concat(t,"°C"),_.textContent=n,O.textContent="".concat(e,"%"),z.textContent=r,N.textContent=o,I.textContent=a}function q(t){P=t.forecast.forecastday.map((function(t){return{date:t.date,maxTemp:t.day.maxtemp_c,minTemp:t.day.mintemp_c}})),console.log(P)}function G(){if(0!==P.length){var t=[["Date","Max Temp (°C)","Min Temp (°C)"]];P.forEach((function(n){t.push([n.date,n.maxTemp,n.minTemp])}));var n=google.visualization.arrayToDataTable(t),e={backgroundColor:"transparent",width:800,height:400,chartArea:{top:"15%",bott:"15%",left:"15%",right:"15%",width:"85%",height:"70%"},title:{textStyle:{color:"#f97316",fontSize:16}},legend:{textStyle:{color:"#ffffff"},position:"top"},hAxis:{textStyle:{color:"#ffffff"},gridlines:{color:"#444444"},baselineColor:"#666666"},vAxis:{textStyle:{color:"#ffffff"},gridlines:{color:"#444444"},baselineColor:"#666666"},series:{0:{color:"#4ade80"},1:{color:"#22c55e"}},lineWidth:3,pointSize:5,animation:{duration:1e3,easing:"out"},cssClassNames:{chartArea:"weather-chart"}},r=new google.visualization.LineChart(document.getElementById("curve_chart"));r.draw(n,e),window.addEventListener("resize",(function(){r.draw(n,e)}))}else console.error("No data available to draw the chart!")}E.addEventListener("click",(function(t){t.preventDefault();var n=k.value.trim();n?function(t){M.apply(this,arguments)}(n):alert("Location input is empty!")})),google.charts.load("current",{packages:["corechart"]}),google.charts.setOnLoadCallback(G)})();