!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(0,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t};!function(t,n){var r=t.document,o=t.Object,l=function(e){var t,n,r,l,i=/^[A-Z]+[a-z]/,a=function(e,t){(t=t.toLowerCase())in u||(u[e]=(u[e]||[]).concat(t),u[t]=u[t.toUpperCase()]=e)},u=(o.create||o)(null),c={};for(n in e)for(l in e[n])for(r=e[n][l],u[l]=r,t=0;t<r.length;t++)u[r[t].toLowerCase()]=u[r[t].toUpperCase()]=l;return c.get=function(e){return"string"==typeof e?u[e]||(i.test(e)?[]:""):function(e){var t,n=[];for(t in u)e.test(t)&&n.push(t);return n}(e)},c.set=function(e,t){return i.test(e)?a(e,t):a(t,e),c},c}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});"object"!==(void 0===n?"undefined":e(n))&&(n={type:n||"auto"});var i,a,u,c,s,m,f,p,d,h="registerElement",L="__"+h+(1e5*t.Math.random()>>0),C="addEventListener",v="attached",M="Callback",T="detached",E="extends",b="attributeChanged"+M,g=v+M,y="connected"+M,H="disconnected"+M,w="created"+M,A=T+M,_="ADDITION",O="REMOVAL",N="DOMAttrModified",S="DOMContentLoaded",D="DOMSubtreeModified",k="<",I="=",P=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,x=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],F=[],R=[],V="",z=r.documentElement,U=F.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},j=o.prototype,q=j.hasOwnProperty,B=j.isPrototypeOf,Z=o.defineProperty,G=[],K=o.getOwnPropertyDescriptor,W=o.getOwnPropertyNames,X=o.getPrototypeOf,J=o.setPrototypeOf,Q=!!o.__proto__,Y="__dreCEv1",$=t.customElements,ee=!/^force/.test(n.type)&&!!($&&$.define&&$.get&&$.whenDefined),te=o.create||o,ne=t.Map||function(){var e,t=[],n=[];return{get:function(e){return n[U.call(t,e)]},set:function(r,o){(e=U.call(t,r))<0?n[t.push(r)-1]=o:n[e]=o}}},re=t.Promise||function(e){var t=[],n=!1,r={catch:function(){return r},then:function(e){return t.push(e),n&&setTimeout(o,1),r}};function o(e){for(n=!0;t.length;)t.shift()(e)}return e(o),r},oe=!1,le=te(null),ie=te(null),ae=new ne,ue=function(e){return e.toLowerCase()},ce=o.create||function e(t){return t?(e.prototype=t,new e):this},se=J||(Q?function(e,t){return e.__proto__=t,e}:W&&K?function(){function e(e,t){for(var n,r=W(t),o=0,l=r.length;o<l;o++)n=r[o],q.call(e,n)||Z(e,n,K(t,n))}return function(t,n){do{e(t,n)}while((n=X(n))&&!B.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),me=t.MutationObserver||t.WebKitMutationObserver,fe=(t.HTMLElement||t.Element||t.Node).prototype,pe=!B.call(fe,z),de=pe?function(e,t,n){return e[t]=n.value,e}:Z,he=pe?function(e){return 1===e.nodeType}:function(e){return B.call(fe,e)},Le=pe&&[],Ce=fe.attachShadow,ve=fe.cloneNode,Me=fe.dispatchEvent,Te=fe.getAttribute,Ee=fe.hasAttribute,be=fe.removeAttribute,ge=fe.setAttribute,ye=r.createElement,He=ye,we=me&&{attributes:!0,characterData:!0,attributeOldValue:!0},Ae=me||function(e){De=!1,z.removeEventListener(N,Ae)},_e=0,Oe=h in r&&!/^force-all/.test(n.type),Ne=!0,Se=!1,De=!0,ke=!0,Ie=!0;function Pe(){var e=i.splice(0,i.length);for(_e=0;e.length;)e.shift().call(null,e.shift())}function xe(e,t){for(var n=0,r=e.length;n<r;n++)Ge(e[n],t)}function Fe(e){return function(t){he(t)&&(Ge(t,e),V.length&&xe(t.querySelectorAll(V),e))}}function Re(e){var t=Te.call(e,"is"),n=e.nodeName.toUpperCase(),r=U.call(F,t?I+t.toUpperCase():k+n);return t&&-1<r&&!Ve(n,t)?-1:r}function Ve(e,t){return-1<V.indexOf(e+'[is="'+t+'"]')}function ze(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,o=e.target,l=e[_]||2,i=e[O]||3;!Ie||o&&o!==t||!t[b]||"style"===r||e.prevValue===e.newValue&&(""!==e.newValue||n!==l&&n!==i)||t[b](r,n===l?null:e.prevValue,n===i?null:e.newValue)}function Ue(e){var t=Fe(e);return function(e){i.push(t,e.target),_e&&clearTimeout(_e),_e=setTimeout(Pe,1)}}function je(e){ke&&(ke=!1,e.currentTarget.removeEventListener(S,je)),V.length&&xe((e.target||r).querySelectorAll(V),e.detail===T?T:v),pe&&function(){for(var e,t=0,n=Le.length;t<n;t++)e=Le[t],z.contains(e)||(n--,Le.splice(t--,1),Ge(e,T))}()}function qe(e,t){ge.call(this,e,t),a.call(this,{target:this})}function Be(e,t){se(e,t),s?s.observe(e,we):(De&&(e.setAttribute=qe,e[L]=c(e),e[C](D,a)),e[C](N,ze)),e[w]&&Ie&&(e.created=!0,e[w](),e.created=!1)}function Ze(e){throw new Error("A "+e+" type is already registered")}function Ge(e,t){var n,r,o=Re(e);-1<o&&(f(e,R[o]),o=0,t!==v||e[v]?t!==T||e[T]||(e[v]=!1,e[T]=!0,r="disconnected",o=1):(e[T]=!1,e[v]=!0,r="connected",o=1,pe&&U.call(Le,e)<0&&Le.push(e)),o&&(n=e[t+M]||e[r+M])&&n.call(e))}function Ke(){}function We(e,t,n){var o=n&&n[E]||"",l=t.prototype,i=ce(l),a=t.observedAttributes||G,u={prototype:i};de(i,w,{value:function(){if(oe)oe=!1;else if(!this[Y]){this[Y]=!0,new t(this),l[w]&&l[w].call(this);var e=le[ae.get(t)];(!ee||e.create.length>1)&&Qe(this)}}}),de(i,b,{value:function(e){-1<U.call(a,e)&&l[b].apply(this,arguments)}}),l[y]&&de(i,g,{value:l[y]}),l[H]&&de(i,A,{value:l[H]}),o&&(u[E]=o),e=e.toUpperCase(),le[e]={constructor:t,create:o?[o,ue(e)]:[e]},ae.set(t,e),r[h](e.toLowerCase(),u),Ye(e),ie[e].r()}function Xe(e){var t=le[e.toUpperCase()];return t&&t.constructor}function Je(e){return"string"==typeof e?e:e&&e.is||""}function Qe(e){for(var t,n=e[b],r=n?e.attributes:G,o=r.length;o--;)t=r[o],n.call(e,t.name||t.nodeName,null,t.value||t.nodeValue)}function Ye(e){return(e=e.toUpperCase())in ie||(ie[e]={},ie[e].p=new re(function(t){ie[e].r=t})),ie[e].p}function $e(){$&&delete t.customElements,Z(t,"customElements",{configurable:!0,value:new Ke}),Z(t,"CustomElementRegistry",{configurable:!0,value:Ke});for(var e=function(e){var n=t[e];if(n){t[e]=function(e){var t,o;return e||(e=this),e[Y]||(oe=!0,t=le[ae.get(e.constructor)],(e=(o=ee&&1===t.create.length)?Reflect.construct(n,G,t.constructor):r.createElement.apply(r,t.create))[Y]=!0,oe=!1,o||Qe(e)),e},t[e].prototype=n.prototype;try{n.prototype.constructor=t[e]}catch(r){Z(n,Y,{value:t[e]})}}},n=l.get(/^HTML[A-Z]*[a-z]/),o=n.length;o--;e(n[o]));r.createElement=function(e,t){var n=Je(t);return n?He.call(this,e,ue(n)):He.call(this,e)},Oe||(Se=!0,r[h](""))}if(me&&((d=r.createElement("div")).innerHTML="<div><div></div></div>",new me(function(e,t){if(e[0]&&"childList"==e[0].type&&!e[0].removedNodes[0].childNodes.length){var n=(d=K(fe,"innerHTML"))&&d.set;n&&Z(fe,"innerHTML",{set:function(e){for(;this.lastChild;)this.removeChild(this.lastChild);n.call(this,e)}})}t.disconnect(),d=null}).observe(d,{childList:!0,subtree:!0}),d.innerHTML=""),Oe||(J||Q?(f=function(e,t){B.call(t,e)||Be(e,t)},p=Be):p=f=function(e,t){e[L]||(e[L]=o(!0),Be(e,t))},pe?(De=!1,function(){var e=K(fe,C),t=e.value,n=function(e){var t=new CustomEvent(N,{bubbles:!0});t.attrName=e,t.prevValue=Te.call(this,e),t.newValue=null,t[O]=t.attrChange=2,be.call(this,e),Me.call(this,t)},r=function(e,t){var n=Ee.call(this,e),r=n&&Te.call(this,e),o=new CustomEvent(N,{bubbles:!0});ge.call(this,e,t),o.attrName=e,o.prevValue=n?r:null,o.newValue=t,n?o.MODIFICATION=o.attrChange=1:o[_]=o.attrChange=0,Me.call(this,o)},o=function(e){var t,n=e.currentTarget,r=n[L],o=e.propertyName;r.hasOwnProperty(o)&&(r=r[o],(t=new CustomEvent(N,{bubbles:!0})).attrName=r.name,t.prevValue=r.value||null,t.newValue=r.value=n[o]||null,null==t.prevValue?t[_]=t.attrChange=0:t.MODIFICATION=t.attrChange=1,Me.call(n,t))};e.value=function(e,l,i){e===N&&this[b]&&this.setAttribute!==r&&(this[L]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",o)),t.call(this,e,l,i)},Z(fe,C,e)}()):me||(z[C](N,Ae),z.setAttribute(L,1),z.removeAttribute(L),De&&(a=function(e){var t,n,r;if(this===e.target){for(r in t=this[L],this[L]=n=c(this),n){if(!(r in t))return u(0,this,r,t[r],n[r],_);if(n[r]!==t[r])return u(1,this,r,t[r],n[r],"MODIFICATION")}for(r in t)if(!(r in n))return u(2,this,r,t[r],n[r],O)}},u=function(e,t,n,r,o,l){var i={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:o};i[l]=e,ze(i)},c=function(e){for(var t,n,r={},o=e.attributes,l=0,i=o.length;l<i;l++)"setAttribute"!==(n=(t=o[l]).name)&&(r[n]=t.value);return r})),r[h]=function(e,t){if(n=e.toUpperCase(),Ne&&(Ne=!1,me?(s=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new me(function(r){for(var o,l,i,a=0,u=r.length;a<u;a++)"childList"===(o=r[a]).type?(n(o.addedNodes,e),n(o.removedNodes,t)):(l=o.target,Ie&&l[b]&&"style"!==o.attributeName&&(i=Te.call(l,o.attributeName))!==o.oldValue&&l[b](o.attributeName,o.oldValue,i))})}(Fe(v),Fe(T)),(m=function(e){return s.observe(e,{childList:!0,subtree:!0}),e})(r),Ce&&(fe.attachShadow=function(){return m(Ce.apply(this,arguments))})):(i=[],r[C]("DOMNodeInserted",Ue(v)),r[C]("DOMNodeRemoved",Ue(T))),r[C](S,je),r[C]("readystatechange",je),fe.cloneNode=function(e){var t=ve.call(this,!!e),n=Re(t);return-1<n&&p(t,R[n]),e&&V.length&&function(e){for(var t,n=0,r=e.length;n<r;n++)t=e[n],p(t,R[Re(t)])}(t.querySelectorAll(V)),t}),Se)return Se=!1;if(-2<U.call(F,I+n)+U.call(F,k+n)&&Ze(e),!P.test(n)||-1<U.call(x,n))throw new Error("The type "+e+" is invalid");var n,o,l=function(){return u?r.createElement(c,n):r.createElement(c)},a=t||j,u=q.call(a,E),c=u?t[E].toUpperCase():n;return u&&-1<U.call(F,k+c)&&Ze(c),o=F.push((u?I:k)+n)-1,V=V.concat(V.length?",":"",u?c+'[is="'+e.toLowerCase()+'"]':c),l.prototype=R[o]=q.call(a,"prototype")?a.prototype:ce(fe),V.length&&xe(r.querySelectorAll(V),v),l},r.createElement=He=function(e,t){var n=Je(t),o=n?ye.call(r,e,ue(n)):ye.call(r,e),l=""+e,i=U.call(F,(n?I:k)+(n||l).toUpperCase()),a=-1<i;return n&&(o.setAttribute("is",n=n.toLowerCase()),a&&(a=Ve(l.toUpperCase(),n))),Ie=!r.createElement.innerHTMLHelper,a&&p(o,R[i]),o}),Ke.prototype={constructor:Ke,define:ee?function(e,t,n){if(n)We(e,t,n);else{var r=e.toUpperCase();le[r]={constructor:t,create:[r]},ae.set(t,r),$.define(e,t)}}:We,get:ee?function(e){return $.get(e)||Xe(e)}:Xe,whenDefined:ee?function(e){return re.race([$.whenDefined(e),Ye(e)])}:Ye},!$||/^force/.test(n.type))$e();else if(!n.noBuiltIn)try{!function(e,n,o){if(n[E]="a",(e.prototype=ce(HTMLAnchorElement.prototype)).constructor=e,t.customElements.define(o,e,n),Te.call(r.createElement("a",{is:o}),"is")!==o||ee&&Te.call(new e,"is")!==o)throw n}(function e(){return Reflect.construct(HTMLAnchorElement,[],e)},{},"document-register-element-a")}catch(e){$e()}if(!n.noBuiltIn)try{ye.call(r,"a","a")}catch(e){ue=function(e){return{is:e.toLowerCase()}}}}(window);var l=function(e){return e.toLocaleString("en")},i=function(e){function l(e){var n;return t(this,l),(n=o(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e)),e=n).init(),o(n,e)}return r(l,e),n(l,[{key:"init",value:function(){}}]),l}(HTMLElement),a=function(e){function a(){return t(this,a),o(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return r(a,i),n(a,[{key:"connectedCallback",value:function(){var e=this;if(!this._connected){var t;this.classList.add("loading"),this.style.display="block",this.innerHTML='\n      <div class="style-root">\n        <div class="count-container">\n          <div class="count"></div>\n        </div>\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">\n          <g class="flat">\n            <path d="m54.7 5.1c-6.3-6.3-16.6-6.3-23 0l-1.8 1.8-1.8-1.8c-6.2-6.5-16.4-6.8-23-.7s-6.8 16.4-.7 23c.2.2.4.5.7.7l23.7 23.7c.3.3.7.4 1.1.4s.8-.1 1-.4l23.7-23.7c6.4-6.3 6.4-16.6.1-23z"/>\n          </g>\n          <g class="outline">\n            <path d="m54.7 5.1c-6.3-6.3-16.6-6.3-23 0l-1.8 1.8-1.8-1.8c-6.2-6.5-16.4-6.8-23-.7s-6.8 16.4-.7 23c.2.2.4.5.7.7l23.7 23.7c.3.3.7.4 1.1.4s.8-.1 1-.4l23.7-23.7c6.4-6.3 6.4-16.6.1-23zm-2 21.1-.2-.2-22.6 22.6-22.7-22.6c-5.3-5-5.5-13.4-.5-18.8s13.4-5.6 18.8-.6c.1.3.3.4.5.6l2.9 2.8c.6.6 1.5.6 2.1 0l2.8-2.8c5.3-5.1 13.7-5 18.8.3 5 5.2 5 13.4 0 18.5z"/>\n          </g>\n        </svg>\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 20 20">\n          <g class="sparkle">\n          '+(t=5,new Array(t).fill(void 0)).map(function(e){return'<g><circle cx="0" cy="0" r="1"/></g>'}).join("")+"\n          </g>\n        </svg>\n      </div>\n      ",this._styleRootElement=this.querySelector(".style-root"),this._countElement=this.querySelector(".count"),this._updateRootColor(),this._totalClaps=0;var n,r,o,i,a,u=void 0;this._initialClapCount=new Promise(function(e){return u=e}),this._cachedClapCount=0,this._bufferedClaps=0,this._updateClaps=(n=function(){if(e._totalClaps<10){var t=Math.min(e._bufferedClaps,10-e._totalClaps);(n=e.api,r=t,o=e.url,fetch(n+"/update-claps"+(o?"?url="+o:""),{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(r+",3.3.0")}).then(function(e){return e.text()}).then(function(e){return Number(e)})).then(function(n){n===e._cachedClapCount&&(e.classList.add("clap-limit-exceeded"),e._countElement.innerHTML=l(n)),e._cachedClapCount=n,e._totalClaps+=t,e._bufferedClaps=0})}var n,r,o},r=2e3,o=null,function(){var e=this,t=arguments;clearTimeout(o),o=setTimeout(function(){return n.apply(e,t)},r)}),this.addEventListener("mousedown",function(t){if(0===t.button&&(e.classList.add("clapped"),!e.classList.contains("clap-limit-exceeded"))){var n,r,o=Number(e._countElement.innerHTML.replace(",",""))+1;e.dispatchEvent(new CustomEvent("clapped",{bubbles:!0,detail:{clapCount:o}})),r="clap",(n=e).classList.remove(r),n.offsetWidth,n.classList.add(r),e._bufferedClaps++,e._updateClaps(),setTimeout(function(){e._countElement.innerHTML=l(o)},250),e.multiclap?e._bufferedClaps+e._totalClaps>=10&&e.classList.add("clap-limit-exceeded"):e.classList.add("clap-limit-exceeded")}}),(i=this.api,a=this.url,fetch(i+"/get-claps"+(a?"?url="+a:""),{headers:{"Content-Type":"text/plain"}}).then(function(e){return e.text()}).then(function(e){return Number(e)})).then(function(t){e.classList.remove("loading"),e._cachedClapCount=t,u(t),t>0&&(e._countElement.innerHTML=l(t))}),this._connected=!0}}},{key:"attributeChangedCallback",value:function(e,t,n){this._updateRootColor()}},{key:"_updateRootColor",value:function(){if(this._styleRootElement){var e=this.getAttribute("color")||"green",t=this._styleRootElement.style;t.fill=e,t.stroke=e,t.color=e}}},{key:"initialClapCount",get:function(){return this._initialClapCount}},{key:"color",get:function(){return this.getAttribute("color")},set:function(e){e?this.setAttribute("color",e):this.removeAttribute("color"),this._updateRootColor()}},{key:"api",set:function(e){e?this.setAttribute("api",e):this.removeAttribute("api")},get:function(){return this.getAttribute("api")||"https://api.applause-button.com"}},{key:"url",set:function(e){e?this.setAttribute("url",e):this.removeAttribute("url"),this._updateRootColor()},get:function(){return this.getAttribute("url")}},{key:"multiclap",get:function(){return"true"===this.getAttribute("multiclap")},set:function(e){e?this.setAttribute("multiclap",e?"true":"false"):this.removeAttribute("multiclap")}}],[{key:"observedAttributes",get:function(){return["color"]}}]),a}();customElements.define("applause-button",a)});