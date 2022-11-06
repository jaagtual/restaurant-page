(()=>{"use strict";var e,n,t,r,o,i,a,c,s,d,p,l,u,f,m={28:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,":root {\n    --my-width: max(20rem, 75vw);\n}\n\nbody {\n    background-color: #e0f2fe;\n}\n\nbutton {\n    border: none;\n    background-color: #94a3b8;\n    padding: 0.75rem 2rem;\n    border-radius: 2px;\n}\n\nbutton:hover {\n    color: #e0f2fe;\n    background-color: #475569;\n    transition: 0.15s;\n}\n\nli {\n    list-style-type: none;\n}\n\nul {\n    padding: 0;\n}\n\n.header {\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n}\n\n.header > ul{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    column-gap: 1rem;\n    width: var(--my-width);\n    justify-content: space-between;\n}\n\n@media (max-width: 350px) {\n    .header > ul {\n        grid-template-columns: repeat(1, 1fr);\n        justify-items: center;\n        row-gap: 0.75rem;\n    }\n}\n\n.header > ul > li {\n    display: grid;\n}\n\n#content {\n    display: grid;\n    justify-items: center;\n}\n\n.display {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-columns: 1fr;\n    justify-items: stretch;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    width: var(--my-width);\n}\n\n.grid-el {\n    display: grid;\n    justify-items: center;\n    background-color: #7dd3fc;\n    padding: 0px 5rem;\n    border-radius: 10px;\n    border: 2px solid #0c4a6e;\n}\n\n.menu-section {\n    border: none;\n    padding: 0.5rem 0px;\n    background-color: #0c4a6e;\n    color: #f0f9ff;\n    box-shadow: 6px 6px 2px 1px #cbd5e1;\n}",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],p=i[d]||0,l="".concat(d," ").concat(p);i[d]=p+1;var u=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var p=t(i[d]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},h={};function v(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,exports:{}};return m[e](t,t.exports,v),t.exports}v.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return v.d(n,{a:n}),n},v.d=(e,n)=>{for(var t in n)v.o(n,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},v.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),v.nc=void 0,e=v(379),n=v.n(e),t=v(795),r=v.n(t),o=v(569),i=v.n(o),a=v(565),c=v.n(a),s=v(216),d=v.n(s),p=v(589),l=v.n(p),u=v(28),(f={}).styleTagTransform=l(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),n()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,function(e){const n=document.createElement("div");n.classList.add("display"),[{category:"Drinks",items:[{title:"Soda",price:3,description:"Any soda you want"},{title:"Tap beer",price:8,description:"Ask the waiter for our beers on tap"}]},{category:"Appetizers",items:[{title:"Mac n cheese",price:6,description:"Classic mac n cheese"},{title:"Salad",price:22,description:"A plain salad"}]},{category:"Main Dishes",items:[{title:"Pizza",price:12,description:"A cheese pizza"},{title:"Burger",price:16,description:"Cheeseburger"}]},{category:"Dessert",items:[{title:"Ice Cream",price:5,description:"Chocolate or vanilla ice cream"},{title:"Cake",price:12,description:"Your choice of chocolate or red velvet cake"}]}].forEach((e=>{const t=document.createElement("h2");t.classList.add("grid-el","menu-section"),t.innerText=`${e.category}`,n.appendChild(t),e.items.forEach((e=>{const t=document.createElement("div");t.classList.add("grid-el"),t.innerHTML=`\n                <h2>${e.title}</h2>\n                <p>$${e.price}</p>\n                <p>${e.description}</p>\n            `,n.appendChild(t)}))})),e.appendChild(n)}(document.querySelector("#content"))})();