!function(e){function t(t){for(var n,u,c=t[0],l=t[1],i=t[2],p=0,d=[];p<c.length;p++)u=c[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(f&&f(t);d.length;)d.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var l=r[c];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={9:0},a=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var f=l;a.push([446,1,0]),r()}({10:function(e,t,r){},446:function(e,t,r){r(23),e.exports=r(447)},447:function(e,t,r){"use strict";var n,o=r(18);o.initFunctions={},o.initFunctions=o.initFunctions||{},o.initFunctions.hydratePage=!0===((n=r(24))||{}).__esModule?n.default:n,o.pageConfig=function(){var e=r(448);return!0===(e||{}).__esModule?e.default:e}(),o.router=function(){var e=r(25);return!0===(e||{}).__esModule?e.default:e}(),o.renderPageToDom=function(){var e=r(26);return!0===(e||{}).__esModule?e.default:e}(),o.domRender=function(){var e=r(27);return!0===(e||{}).__esModule?e.default:e}(),function(){var e=r(28);!0===(e||{}).__esModule&&e.default}()},448:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(5),u=r(6);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e){return o.a.createElement("pre",c({style:{margin:0,wordWrap:"break-word",whiteSpace:"pre-wrap"}},e))}t.default=Object(a.a)((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"You can copy your data, then restore your data at ",o.a.createElement("a",{href:"/restore"},"/restore"),"."),o.a.createElement("p",null,o.a.createElement("button",{id:"copy-to-clipboard"},"Copy to Clipboard"),o.a.createElement("span",{id:"result",style:{margin:0,display:"inline-block",paddingLeft:14}})),o.a.createElement(l,{id:"data-dump"}))}),"Data",{onPageLoad:function(){var e=document.querySelector("#data-dump"),t=document.querySelector("#copy-to-clipboard"),r=document.querySelector("#result"),n=u.c.backup__dump({readable:!0});return e.textContent=n,void(t.onclick=function(){var e,t;e=n,(t=document.createElement("textarea")).value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),r.innerHTML="Success!"})}})},5:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));r(10);var n=r(0),o=r.n(n),a=r(7),u=r(8),c=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,null),o.a.createElement("div",{id:"page-wrapper"},t),o.a.createElement(u.a,null))};var l=r(9),i=function(e){e&&e();Object(l.a)()};var f=r(4);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function y(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.route,a=void 0===n?null:n,u=r.onPageLoad,l=r.noHeader,p=void 0!==l&&l,s=b(r,["route","onPageLoad","noHeader"]);a=a||"/"+t.toLowerCase().split(" ").join("-");var y=t+" - "+f.h,m=function(){return o.a.createElement(c,null,!p&&o.a.createElement("h1",null,t),o.a.createElement(e,null))};return d({view:m,route:a,title:y,on_page_load:function(){return i(u)},favicon:f.f,renderToDom:!0,renderToHtml:!0},s)}}});
//# sourceMappingURL=data.page.js.hash_92e3ad16355895d2475b.js.map