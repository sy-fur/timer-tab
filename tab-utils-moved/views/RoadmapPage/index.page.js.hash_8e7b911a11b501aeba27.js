!function(e){function t(t){for(var n,a,l=t[0],i=t[1],c=t[2],p=0,s=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(f&&f(t);s.length;)s.shift()();return u.push.apply(u,c||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,l=1;l<r.length;l++){var i=r[l];0!==o[i]&&(n=!1)}n&&(u.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={19:0},u=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var f=i;u.push([477,1,0]),r()}({10:function(e,t,r){},477:function(e,t,r){r(23),e.exports=r(478)},478:function(e,t,r){"use strict";var n,o=r(18);o.initFunctions={},o.initFunctions=o.initFunctions||{},o.initFunctions.hydratePage=!0===((n=r(24))||{}).__esModule?n.default:n,o.pageConfig=function(){var e=r(499);return!0===(e||{}).__esModule?e.default:e}(),o.router=function(){var e=r(25);return!0===(e||{}).__esModule?e.default:e}(),o.renderPageToDom=function(){var e=r(26);return!0===(e||{}).__esModule?e.default:e}(),o.domRender=function(){var e=r(27);return!0===(e||{}).__esModule?e.default:e}(),function(){var e=r(28);!0===(e||{}).__esModule&&e.default}()},499:function(e,t,r){"use strict";r.r(t);var n=r(5),o=r(0),u=r.n(o),a=r(4),l=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("ul",null,u.a.createElement(a.a,null)),u.a.createElement("p",null,"You have a wish? ",u.a.createElement("a",{href:"/suggest"},"Suggest a feature"),"!"))};t.default=Object(n.a)(l,"Roadmap")},5:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));r(10);var n=r(0),o=r.n(n),u=r(7),a=r(8),l=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,null),o.a.createElement("div",{id:"page-wrapper"},t),o.a.createElement(a.a,null))};var i=r(9),c=function(e){e&&e();Object(i.a)()};var f=r(4);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function v(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.route,u=void 0===n?null:n,a=r.onPageLoad,i=r.noHeader,p=void 0!==i&&i,d=b(r,["route","onPageLoad","noHeader"]);u=u||"/"+t.toLowerCase().split(" ").join("-");var v=t+" - "+f.h,O=function(){return o.a.createElement(l,null,!p&&o.a.createElement("h1",null,t),o.a.createElement(e,null))};return s({view:O,route:u,title:v,on_page_load:function(){return c(a)},favicon:f.f,renderToDom:!0,renderToHtml:!0},d)}}});
//# sourceMappingURL=index.page.js.hash_8e7b911a11b501aeba27.js.map