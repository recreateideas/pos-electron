(this["webpackJsonppos-ui"]=this["webpackJsonppos-ui"]||[]).push([[0],{206:function(n,e){},208:function(n,e){},218:function(n,e){},220:function(n,e){},245:function(n,e){},247:function(n,e){},248:function(n,e){},253:function(n,e){},255:function(n,e){},261:function(n,e){},263:function(n,e){},282:function(n,e){},294:function(n,e){},297:function(n,e){},323:function(n,e){},414:function(n,e,t){},419:function(n,e,t){},421:function(n,e,t){"use strict";t.r(e);var c=t(102),r=t.n(c),o=t(103),i=t(186),a=t(189),s=[{name:"express-app",endpoint:"http://127.0.0.1:2999",maxRetries:10}],u=function(){var n=Object(i.a)(r.a.mark((function n(){var e,t;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.allSettled(s.map((function(n){var e=n.name,t=n.endpoint,c=n.maxRetries;return new Promise((function(n,r){var i=1,s=setInterval((function(){a(t,(function(a,u,f){console.log(u),a||200!==u.statusCode||(console.log(u.body),n(Object(o.a)({},e,{endpoint:t,running:!0})),clearInterval(s)),i===c&&r(Object(o.a)({},e,{endpoint:t,running:!1})),i++}))}),1e3)}))})));case 2:return e=n.sent,t=Object.values(e).every((function(n){return"fulfilled"===n.status})),n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=(t(414),t(64)),l=t.n(f),p=t(187),d=t.n(p),j=t.p+"static/media/logo.6ce24c58.svg",b=(t(419),t(15));var h=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("img",{src:j,className:"App-logo",alt:"logo"}),Object(b.jsxs)("p",{children:["Edit ",Object(b.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(b.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},g=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,422)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),c(n),r(n),o(n),i(n)}))};u(),d.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),g()}},[[421,1,2]]]);
//# sourceMappingURL=main.df6f1233.chunk.js.map