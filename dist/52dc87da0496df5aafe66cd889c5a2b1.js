require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({11:[function(require,module,exports) {
"use strict";var e=require("bs-platform/lib/js/curry.js"),r=require("react"),t=require("reason-react/src/ReasonReact.js"),a=t.statelessComponent("Faq");function n(t,n){var c=a.slice();return c[9]=function(){return r.createElement("div",void 0,r.createElement("a",{onClick:e._1(t,"/")},"Home"),r.createElement("a",{onClick:e._1(t,"/faq")},"FAQ"),r.createElement("h1",void 0,"FAQ"))},c}exports.component=a,exports.make=n;
},{"bs-platform/lib/js/curry.js":30,"react":22,"reason-react/src/ReasonReact.js":27}],8:[function(require,module,exports) {
"use strict";var e=require("./Faq.bs.js"),r=[e.component,e.make];exports.importable=r;
},{"./Faq.bs.js":11}]},{},[8])