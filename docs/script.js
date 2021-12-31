(()=>{"use strict";var e={859:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),s=n.n(a)()(o());s.push([e.id,"form.hidden {\n    display: none;\n}\n",""]);const i=s},772:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),s=n.n(a)()(o());s.push([e.id,"div.hidden {\n  display: none;\n}\n",""]);const i=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&s[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],d=r.base?c[0]+r.base:c[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=n(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:l,updater:m,references:1})}s.push(l)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=n(a[s]);t[i].references--}for(var c=r(e,o),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=(e,t)=>{const n=e.querySelectorAll(t);return n[n.length-1]};var t=n(379),r=n.n(t),o=n(795),a=n.n(o),s=n(569),i=n.n(s),c=n(565),d=n.n(c),u=n(216),l=n.n(u),p=n(589),f=n.n(p),m=n(859),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=l(),r()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;const h=async e=>{e.preventDefault();const t=await fetch("https://antp.link:8080/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(e.target)))}),{accessToken:n}=await t.json();document.cookie=`accessToken=${n};`,document.querySelector("#auth").classList.add("hidden")};var y=n(772),b={};b.styleTagTransform=f(),b.setAttributes=d(),b.insert=i().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=l(),r()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals;const g=async e=>{e.preventDefault();const t=await fetch(`https://antp.link:8080/orders/${(({target:e})=>e.querySelector("textarea").value.split(/\n|,/))(e).join(",")}`,{headers:new Headers({Authorization:("accessToken",document.cookie?.split("; ")?.find((e=>e.startsWith("accessToken=")))?.split("=")[1])})});const n=await t.text();"Forbidden"===n?(document.querySelector("#auth").classList.remove("hidden"),document.querySelector("#orders").innerText=""):(({target:e},t)=>{e.nextElementSibling.innerHTML=t})(e,n)},T=document.createElement("div");T.setAttribute("id","flp-app"),document.body.appendChild(T),(()=>{const t=document.querySelector("#flp-app");t.insertAdjacentHTML("beforeend",'<hr> <form action="" method="POST"> <textarea name="orders" id="" cols="30" rows="10">3763757154513</textarea><br> <input type="submit"> </form> <hr> <div id="orders"></div> '),e(t,"form").addEventListener("submit",g)})(),(()=>{const t=document.querySelector("#flp-app");t.insertAdjacentHTML("beforeend",'<form action="" method="POST" id="auth" class="hidden"> <input type="password" name="password"/> <input type="submit" value="Refresh Token"/> </form> '),e(t,"form").addEventListener("submit",h)})()})()})();