(()=>{var t={666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new P(n||[]);return a._invoke=function(t,e,r){var n=h;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=C(i,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?v:p,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=v,r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var h="suspendedStart",p="suspendedYield",f="executing",v="completed",y={};function m(){}function d(){}function g(){}var w={};c(w,a,(function(){return this}));var x=Object.getPrototypeOf,I=x&&x(x(j([])));I&&I!==r&&n.call(I,a)&&(w=I);var b=g.prototype=m.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,i,u){var c=l(t[o],t,a);if("throw"!==c.type){var s=c.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function C(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function j(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:O}}function O(){return{value:e,done:!0}}return d.prototype=g,c(b,"constructor",g),c(g,"constructor",d),d.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},L(E.prototype),c(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(b),c(b,u,"Generator"),c(b,a,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}(()=>{"use strict";r(666);var t=function(t){return document.querySelector(t)};function e(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=t.apply(r,n);function u(t){e(i,o,a,u,c,"next",t)}function c(t){e(i,o,a,u,c,"throw",t)}u(void 0)}))}}var o,a,i,u,c,s,l,h,p,f,v,y,m,d,g,w,x,I,b,L,E,C,N,S,P,j,O=window.location.search,_=new URLSearchParams(O),k=JSON.parse(localStorage.getItem("userData")),T=_.get("userId"),G=k.filter((function(t){return t.id==T}))[0],R=function(){var t=n(regeneratorRuntime.mark((function t(e){var r,n,o,a,i,u,c,s,l,h,p,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),r=e.target.InputName.value,n=e.target.InputCompanyName.value,o=e.target.InputCompanyStreet.value,a=e.target.InputCompanySuite.value,i=e.target.InputCompanyCity.value,u=e.target.InputCompanyZip.value,c=e.target.InputCompanyCatchPhrase.value,s=e.target.InputEmail.value,l=e.target.InputPhoneNumber.value,h=e.target.InputUsername.value,p=e.target.InputWebsite.value,f=e.target.InputUserId.value,F({name:r,username:h,email:s,address:{street:o,suite:a,city:i,zipcode:u},phone:l,website:p,company:{name:n,catchPhrase:c},hiddenID:f});case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F=function(){var t=n(regeneratorRuntime.mark((function t(e){var r,n,o,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}},t.prev=2,t.next=5,fetch("https://jsonplaceholder.typicode.com/users/1",r);case 5:return n=t.sent,t.next=8,n.json();case 8:o=t.sent,a=null,k.filter((function(t,r){return t.id==e.hiddenID&&(a=r),t.id==e.hiddenID}))[0],k.splice(a,1,o),localStorage.setItem("userData",JSON.stringify(k)),window.location.href="./index.html",t.next=20;break;case 17:t.prev=17,t.t0=t.catch(2),console.log(t.t0);case 20:case"end":return t.stop()}}),t,null,[[2,17]])})));return function(e){return t.apply(this,arguments)}}();t("form").addEventListener("submit",R),o=G.id,a=G.address,i=G.company,u=G.email,c=G.name,s=G.phone,l=G.username,h=G.website,p=i.name,f=i.catchPhrase,v=a.street,y=a.suite,m=a.city,d=a.zipcode,g=t("#InputName"),w=t("#InputCompanyName"),x=t("#InputCompanyStreet"),I=t("#InputCompanySuite"),b=t("#InputCompanyCity"),L=t("#InputCompanyZip"),E=t("#InputCompanyCatchPhrase"),C=t("#InputEmail"),N=t("#InputPhoneNumber"),S=t("#InputUsername"),P=t("#InputWebsite"),j=t("#InputUserId"),g.value=c,w.value=p,x.value=v,I.value=y,b.value=m,L.value=d,E.value=f,C.value=u,N.value=s,S.value=l,P.value=h,j.value=o})()})();