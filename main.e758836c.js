parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||n(e)||t(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,r){if(e){if("string"==typeof e)return l(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,r):void 0}}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return l(e)}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}addEventListener("click",function(r){var t=document.querySelector("tbody"),n=document.querySelector(".append-row"),o=document.querySelector(".remove-row"),l=document.querySelector(".append-column"),a=document.querySelector(".remove-column");if("append-row button"===r.target.className){var c=document.querySelector("tr").cloneNode(!0);t.append(c),10===t.children.length&&(n.disabled=!0),t.children.length>2&&(o.disabled=!1)}if("append-column button"===r.target.className)for(var d=0,i=e(t.children);d<i.length;d++){var u=i[d],m=document.createElement("td");u.append(m),10===u.children.length&&(l.disabled=!0),u.children.length>2&&(a.disabled=!1)}"remove-row button"===r.target.className&&(document.querySelector("tr").remove(),t.children.length<10&&(n.disabled=!1),2===t.children.length&&(o.disabled=!0));if("remove-column button"===r.target.className)for(var s=0,h=e(t.children);s<h.length;s++){var b=h[s];b.children[0].remove(),b.children.length<10&&(l.disabled=!1),2===b.children.length&&(a.disabled=!0)}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e758836c.js.map