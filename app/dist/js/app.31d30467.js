(function(e){function t(t){for(var a,n,u=t[0],c=t[1],i=t[2],l=0,p=[];l<u.length;l++)n=u[l],o[n]&&p.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,n=1;n<r.length;n++){var u=r[n];0!==o[u]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var a={},n={app:0},o={app:0},s=[];function u(e){return c.p+"js/"+({about:"about","user details":"user details"}[e]||e)+"."+{about:"dacb2b24","user details":"95d5dc97"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"user details":1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise(function(t,r){for(var a="css/"+({about:"about","user details":"user details"}[e]||e)+"."+{about:"31d6cfe0","user details":"fae93916"}[e]+".css",o=c.p+a,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var i=s[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===a||l===o))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){i=p[u],l=i.getAttribute("data-href");if(l===a||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete n[e],d.parentNode.removeChild(d),r(s)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){n[e]=0}));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise(function(t,r){a=o[e]=[t,r]});t.push(a[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e),i=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+a+": "+n+")");s.type=a,s.request=n,r[1](s)}o[e]=void 0}};var p=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(r,a,function(t){return e[t]}.bind(null,a));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var d=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("64a9"),n=r.n(a);n.a},"0782":function(e,t,r){"use strict";var a=r("c366"),n=r.n(a);n.a},"0ab0":function(e,t,r){"use strict";var a=r("2b99"),n=r.n(a);n.a},"14b8":function(e,t,r){"use strict";var a=r("cb73"),n=r.n(a);n.a},"2b99":function(e,t,r){},"3f4a":function(e,t,r){"use strict";var a=r("bc3a"),n=r.n(a),o=r("c0d6");const s=()=>{return{authorization:o["a"].getters.get_bearer_token,"Content-Type":"application/graphql"}};t["a"]=()=>{return n.a.create({baseURL:"http://localhost:4000",headers:s()})}},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Banner"),e.get_bearer_token?e._e():r("BearerModal"),r("router-view")],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("h1",[r("router-link",{attrs:{to:"/"}},[e._v("GitHub Search App")])],1)])},u=[],c={},i=c,l=(r("f230"),r("2877")),p=Object(l["a"])(i,s,u,!1,null,null,null),d=p.exports,f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bearer-input"},[r("form",{attrs:{id:"bearer-input-form"},on:{submit:function(t){return t.preventDefault(),e.setBearer(t)}}},[r("input",{class:{error:e.errors},attrs:{type:"text",name:"bearer-input",id:"bearer-input",placeholder:"Enter a Bearer Token..."},domProps:{value:"Bearer "}}),r("label",{class:{error:e.errors},attrs:{for:"bearer-input"}},[e._v("Enter your GitHub Bearer Token")]),r("button",{attrs:{type:"submit"}},[e._v("Submit")])])])},h=[],m=r("c0d6"),_={data(){return{errors:!1}},methods:{checkBearer(e){return/^Bearer\s[a-f0-9]{40}$/.test(e)},setBearer(e){const t=new FormData(e.target).get("bearer-input");console.log(this.checkBearer(t)),this.checkBearer(t)?(localStorage.setItem("bearerToken",t),m["a"].dispatch("setBearerToken",t),this.errors=!1):this.errors=!0}}},b=_,g=(r("c9a5"),Object(l["a"])(b,f,h,!1,null,null,null)),v=g.exports,y=r("2f62"),T={components:{Banner:d,BearerModal:v},methods:{setBearer(e){const t=new FormData(e.target).get("bearer-input");localStorage.setItem("bearerToken",t),m["a"].dispatch("setBearerToken",t)}},computed:{...Object(y["b"])(["get_bearer_token"])},mounted(){const e=localStorage.getItem("bearerToken");localStorage.getItem("bearerToken")&&m["a"].dispatch("setBearerToken",e)}},E=T,S=(r("034f"),Object(l["a"])(E,n,o,!1,null,null,null)),C=S.exports,O=r("8c4f"),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("Search"),r("SearchCount"),e.get_users_array?r("Cards"):e._e()],1)},j=[],w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{attrs:{id:"github-search-form"},on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[r("input",{attrs:{type:"text",name:"search-input",id:"search-input",placeholder:"Enter a username..."},domProps:{value:e.get_search_input_text}}),r("button",{attrs:{type:"submit"}},[e._v("Submit")])])},x=[],A=r("3f4a"),B={methods:{async search(e){const t=new FormData(e.target).get("search-input");let r=null,a=null;if(t.length>0){const e=`{\n          user_search(name: "${t}") {\n            total_count\n            items {\n              id\n              login\n              avatar_url\n              public_repos\n              followers\n            }\n          }\n        }`,n=await Object(A["a"])().post("/api",e);r=n.data.data.user_search.total_count,a=n.data.data.user_search.items}m["a"].dispatch("setSearchInputText",t),m["a"].dispatch("setSearchCount",r),m["a"].dispatch("setUsersArray",a)}},computed:{...Object(y["b"])(["get_search_input_text"])}},P=B,R=(r("0782"),Object(l["a"])(P,w,x,!1,null,null,null)),N=R.exports,U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{attrs:{id:"search-count"}},[null!==e.get_search_count?r("p",[e._v("Users found: "+e._s(e.get_search_count))]):r("p",[e._v("Search for users above")])])},$=[],H={computed:{...Object(y["b"])(["get_search_count"])}},I=H,D=Object(l["a"])(I,U,$,!1,null,null,null),M=D.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-cards"},e._l(e.get_users_array,function(e){return r("Card",{key:e.id,attrs:{user_info:e}})}),1)},q=[],F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("img",{staticClass:"user-image",attrs:{src:e.user_info.avatar_url,title:"user image for "+e.user_info.login,alt:"user image for "+e.user_info.login}}),r("h2",{staticClass:"login"},[e._v(e._s(e.user_info.login))]),r("div",{staticClass:"info"},[r("div",[e._v("followers: "+e._s(e.user_info.followers))]),r("div",[e._v("repos: "+e._s(e.user_info.public_repos))])]),r("router-link",{staticClass:"more-info",attrs:{to:{name:"user details",params:{user:e.user_info.login}}}},[e._v("More Info")])],1)},G=[],K={props:["user_info"]},J=K,X=(r("0ab0"),Object(l["a"])(J,F,G,!1,null,null,null)),Y=X.exports,z={components:{Card:Y},computed:{...Object(y["b"])(["get_users_array"])}},Q=z,V=(r("14b8"),Object(l["a"])(Q,L,q,!1,null,null,null)),W=V.exports,Z={name:"home",components:{Search:N,SearchCount:M,Cards:W},computed:{...Object(y["b"])(["get_users_array"])}},ee=Z,te=(r("cccb"),Object(l["a"])(ee,k,j,!1,null,null,null)),re=te.exports;a["a"].use(O["a"]);var ae=new O["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:re,meta:{title:e=>"Home Page",metaTags:[{name:"description",content:"The home page of the GitHub search app."},{property:"og:description",content:"The home page of the GitHub search app."}]}},{path:"/about",name:"about",component:()=>r.e("about").then(r.bind(null,"f820")),meta:{title:e=>"About Page",metaTags:[{name:"description",content:"The about page."},{property:"og:description",content:"The about page."}]}},{path:"/:user",name:"user details",component:()=>r.e("user details").then(r.bind(null,"5320")),meta:{title:e=>`User Details - ${e.params.user}`,metaTags:[{name:"description",content:"The about page."},{property:"og:description",content:"The about page."}]}}]});a["a"].config.productionTip=!1,ae.beforeEach((e,t,r)=>{const a=e.matched.slice().reverse().find(t=>t.meta&&t.meta.title(e)),n=e.matched.slice().reverse().find(e=>e.meta&&e.meta.metaTags);if(a&&(document.title=a.meta.title(e)),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(e=>e.parentNode.removeChild(e)),!n)return r();n.meta.metaTags.map(e=>{const t=document.createElement("meta");return Object.keys(e).forEach(r=>{t.setAttribute(r,e[r])}),t.setAttribute("data-vue-router-controlled",""),t}).forEach(e=>document.head.appendChild(e)),r()}),new a["a"]({router:ae,store:m["a"],render:e=>e(C)}).$mount("#app")},"64a9":function(e,t,r){},"836f":function(e,t,r){},c0d6:function(e,t,r){"use strict";var a=r("2b0e"),n=r("2f62");a["a"].use(n["a"]),t["a"]=new n["a"].Store({state:{search_input_text:"",search_count:null,users_array:null,bearer:""},mutations:{SET_SEARCH_INPUT_TEXT(e,t){e["search_input_text"]=t},SET_SEARCH_COUNT(e,t){e["search_count"]=t},SET_USERS_ARRAY(e,t){e["users_array"]=t},SET_BEARER_TOKEN(e,t){e["bearer"]=t}},actions:{setSearchInputText(e,t){e.commit("SET_SEARCH_INPUT_TEXT",t)},setSearchCount(e,t){e.commit("SET_SEARCH_COUNT",t)},setUsersArray(e,t){e.commit("SET_USERS_ARRAY",t)},setBearerToken(e,t){e.commit("SET_BEARER_TOKEN",t)}},getters:{get_search_input_text:e=>e.search_input_text,get_search_count:e=>e.search_count,get_users_array:e=>e.users_array,get_bearer_token:e=>e.bearer}})},c366:function(e,t,r){},c9a5:function(e,t,r){"use strict";var a=r("cb17"),n=r.n(a);n.a},cb17:function(e,t,r){},cb73:function(e,t,r){},cccb:function(e,t,r){"use strict";var a=r("d563"),n=r.n(a);n.a},d563:function(e,t,r){},f230:function(e,t,r){"use strict";var a=r("836f"),n=r.n(a);n.a}});
//# sourceMappingURL=app.31d30467.js.map