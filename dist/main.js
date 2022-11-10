(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([e.id,":root {\n    --my-width: max(20rem, 75vw);\n}\n\nbody {\n    background-color: #e0f2fe;\n}\n\nbutton {\n    border: none;\n    background-color: #94a3b8;\n    padding: 0.75rem 2rem;\n    border-radius: 2px;\n}\n\nbutton:hover {\n    color: #e0f2fe;\n    background-color: #475569;\n    transition: 0.15s;\n}\n\nli {\n    list-style-type: none;\n}\n\nul {\n    padding: 0;\n}\n\n.header {\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n}\n\n.header > ul{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    column-gap: 1rem;\n    width: var(--my-width);\n    justify-content: space-between;\n}\n\n@media (max-width: 350px) {\n    .header > ul {\n        grid-template-columns: repeat(1, 1fr);\n        justify-items: center;\n        row-gap: 0.75rem;\n    }\n}\n\n.header > ul > li {\n    display: grid;\n}\n\n#content {\n    display: grid;\n    justify-items: center;\n}\n\n.display {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-columns: 1fr;\n    justify-items: stretch;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    width: var(--my-width);\n}\n\n.grid-el {\n    display: grid;\n    justify-items: center;\n    background-color: #7dd3fc;\n    padding: 0px 5rem;\n    border-radius: 10px;\n    border: 2px solid #0c4a6e;\n}\n\n.menu-section {\n    border: none;\n    padding: 0.5rem 0px;\n    background-color: #0c4a6e;\n    color: #f0f9ff;\n    box-shadow: 6px 6px 2px 1px #cbd5e1;\n}",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var p=0;p<e.length;p++){var d=[].concat(e[p]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},a=[],c=0;c<e.length;c++){var s=e[c],p=r.base?s[0]+r.base:s[0],d=o[p]||0,l="".concat(p," ").concat(d);o[p]=d+1;var u=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=i(f,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var c=t(o[a]);n[c].references--}for(var s=r(e,i),p=0;p<o.length;p++){var d=t(o[p]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),i=t.n(r),o=t(569),a=t.n(o),c=t(565),s=t.n(c),p=t(216),d=t.n(p),l=t(589),u=t.n(l),f=t(28),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g=t.p+"f66723708a59a1a3f690.jpeg",h=t.p+"18a28cf0e0830b5cb9f0.jpeg",v=t.p+"c3418494fc3496467f15.jpeg",y=t.p+"9274899484a387fb9bb2.jpeg",b=t.p+"10ae1f12be5e1b070150.jpeg",x=t.p+"5352271016842c299d3b.jpeg",w=t.p+"5bce7294c871b69a118b.jpeg",j=t.p+"a7c6d2535073b073ba6d.jpeg";!function(e){const n=[{category:"Drinks",items:[{title:"Soda",price:3,description:"Any soda you want",img:g},{title:"Tap beer",price:8,description:"Ask the waiter for our beers on tap",img:h}]},{category:"Appetizers",items:[{title:"Mac n cheese",price:6,description:"Classic mac n cheese",img:v},{title:"Salad",price:22,description:"A plain salad",img:y}]},{category:"Main Dishes",items:[{title:"Pizza",price:12,description:"A cheese pizza",img:b},{title:"Burger",price:16,description:"Cheeseburger",img:x}]},{category:"Dessert",items:[{title:"Ice Cream",price:5,description:"Chocolate or vanilla ice cream",img:w},{title:"Cake",price:12,description:"Your choice of chocolate or red velvet cake",img:j}]}],t=document.createElement("div");t.classList.add("display"),n.forEach((e=>{const n=document.createElement("h2");n.classList.add("grid-el","menu-section"),n.innerText=`${e.category}`,t.appendChild(n),e.items.forEach((e=>{const n=document.createElement("div");n.classList.add("grid-el"),n.innerHTML=`\n                <h2>${e.title}</h2>\n                <p>$${e.price}</p>\n                <p>${e.description}</p>\n                <img src="${e.img}" alt="">\n            `,t.appendChild(n)}))})),e.appendChild(t)}(document.querySelector("#content"))})()})();