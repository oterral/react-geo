!function(e){function t(t){for(var l,o,u=t[0],c=t[1],d=t[2],p=0,i=[];p<u.length;p++)o=u[p],a[o]&&i.push(a[o][0]),a[o]=0;for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&(e[l]=c[l]);for(f&&f(t);i.length;)i.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],l=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(l=!1)}l&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var l={},a={20:0},r=[];function o(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=l,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=c;r.push([459,1,0]),n()}({459:function(e,t,n){"use strict";var l=u(n(228));n(211);var a=u(n(2)),r=n(17),o=n(43);function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){l.default.info("You uploaded "+e.target.files[0].name)};(0,r.render)(a.default.createElement("div",null,a.default.createElement("div",{className:"example-block"},a.default.createElement("label",null,"UploadButton:",a.default.createElement("br",null),a.default.createElement(o.UploadButton,{onChange:c,icon:"upload"}))),a.default.createElement("div",{className:"example-block"},a.default.createElement("label",null,"UploadButton with a texted SimpleButton as child:",a.default.createElement("br",null),a.default.createElement(o.UploadButton,{onChange:c},a.default.createElement(o.SimpleButton,null,"Upload")))),a.default.createElement("div",{className:"example-block"},a.default.createElement(o.UploadButton,{onChange:c},a.default.createElement("span",{style:{fontWeight:"bold"}},"Click me to upload!")))),document.getElementById("exampleContainer"))}});