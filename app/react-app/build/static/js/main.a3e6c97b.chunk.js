(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{249:function(t,e){t.exports={errorHandler:function(t){return{status:t.response?t.response.status:t.status,data:t.response?t.response.data:t.data}},responseHandler:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{status:t.status,data:t.data}}}},269:function(t,e){},271:function(t,e){},281:function(t,e){},283:function(t,e){},308:function(t,e){},310:function(t,e){},311:function(t,e){},316:function(t,e){},318:function(t,e){},324:function(t,e){},326:function(t,e){},345:function(t,e){},357:function(t,e){},360:function(t,e){},386:function(t,e){},477:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"getProducts",(function(){return C}));var a={};n.r(a),n.d(a,"products",(function(){return G}));var c={};n.r(c),n.d(c,"data",(function(){return a}));var o={};n.r(o),n.d(o,"data",(function(){return r}));n(220);var u,s,i=n(0),d=n.n(i),p=n(80),l=n.n(p),f=n(48),O=n(68),b=n(211),j=n(52),v={data:{}},h=n(20),x=n.n(h),E=n(35),_=n(212),S=n.n(_),m=n(67),T=n.n(m),g=function(){var t=Object(E.a)(x.a.mark((function t(e){var n,r,a,c,o,u,s,i,d,p,l,f;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url,r=e.data,a=e.method,c=void 0===a?T.a.method:a,o=e.headers,u=void 0===o?T.a.headers:o,s=e.errorHandler,i=void 0===s?T.a.errorHandler:s,d=e.responseHandler,p=void 0===d?T.a.responseHandler:d,l={method:c,headers:u,data:r},t.prev=2,t.next=5,S()(n,l);case 5:return f=t.sent,t.abrupt("return",p(f));case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",i(t.t0));case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),R={SET_USER:"SET_USER",GET_PRODUCTS_PENDING:"GET_PRODUCTS_PENDING",GET_PRODUCTS_ERROR:"GET_PRODUCTS_ERROR",GET_PRODUCTS_SUCCESS:"GET_PRODUCTS_SUCCESS"},C=function(){return function(){var t=Object(E.a)(x.a.mark((function t(e,n){var r,a,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),a=r.data.products,e({type:R.GET_PRODUCTS_PENDING}),c={url:"http://localhost:2999/products",errorHandler:function(t){e({type:R.GET_PRODUCTS_ERROR,data:{message:t.message}})},responseHandler:function(t){var n;e({type:R.GET_PRODUCTS_SUCCESS,data:{products:null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.products}})}},a){t.next=6;break}return t.next=6,g(c);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},y={data:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v.data,e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.data;switch(n){case R.GET_PRODUCTS_SUCCESS:return Object(j.a)(Object(j.a)({},t),{},{products:r.products});default:return t}}},P=Object(O.b)(y),U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0,traceLimit:25}):O.c,w=[Object(O.a)(b.a)],D=Object(O.d)(P,U.apply(void 0,w)),G=function(t){return t.data.products},N=n(213),H=D,k=n(214),I=n(21),X=n(22),L=X.b.div(u||(u=Object(I.a)(["\n    ","\n"])),(function(t){return Object(k.a)(t.theme),Object(X.a)(s||(s=Object(I.a)([""])))})),M=n(7),J=function(t){return Object(M.jsx)(L,{children:"Order"})};J.displayName="Order";var V,q,z,A,B,F,$,K=J,Q=n(480),W=n(478),Y=n(479),Z=X.b.div(V||(V=Object(I.a)([""]))),tt=X.b.div(q||(q=Object(I.a)([""]))),et=X.b.div(z||(z=Object(I.a)(["\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    :hover {\n        background-color: rgba(0, 0, 0, 0.05);\n    }\n"]))),nt=X.b.img(A||(A=Object(I.a)(["\n    height: 100px;\n    width: 100px;\n"]))),rt=Object(X.b)(W.a)(B||(B=Object(I.a)(["\n    flex-grow: 0;\n    margin: 24px 0;\n    display: flex;\n    justify-content: flex-start;\n"]))),at=Object(X.b)(Y.a)(F||(F=Object(I.a)([""]))),ct=X.b.div($||($=Object(I.a)([""]))),ot=function(t){var e=Object(f.b)(),n=o.data.getProducts,r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?function(){return!0}:N.isEqual;return Object(f.c)(t,e)}(c.data.products);Object(i.useEffect)((function(){e(n())}),[r]),console.log(r);var a={xs:6,md:4,lg:2};return r?Object(M.jsx)(Z,{children:Object.keys(r).map((function(t){var e=r[t].items;return Object(M.jsx)(Q.a,{children:Object(M.jsx)(tt,{children:Object(M.jsx)(at,{children:e.map((function(t){var e=t.name,n=t.price,r=t.imageUrl;return Object(M.jsx)(rt,Object(j.a)(Object(j.a)({},a),{},{children:Object(M.jsxs)(et,{children:[Object(M.jsx)(nt,{alt:e,src:r}),Object(M.jsxs)(ct,{children:[e," - $",n]})]})}))}))})})})}))}):Object(M.jsx)("div",{children:"loading products..."})};ot.displayName="Products";var ut=ot,st=n(218),it=n(66),dt=n(252),pt=[{name:"data-service",endpoint:"http://127.0.0.1:2999/health",maxRetries:10}],lt=function(){var t=Object(E.a)(x.a.mark((function t(){var e,n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.allSettled(pt.map((function(t){var e=t.name,n=t.endpoint,r=t.maxRetries;return new Promise((function(t,a){var c=1,o=setInterval((function(){dt(n,(function(u,s,i){console.log(s),u||200!==s.statusCode||(console.log(s.body),t(Object(it.a)({},e,{endpoint:n,running:!0})),clearInterval(o)),c===r&&a(Object(it.a)({},e,{endpoint:n,running:!1})),c++}))}),1e3)}))})));case 2:return e=t.sent,n=Object.values(e).every((function(t){return"fulfilled"===t.status})),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ft=function(){var t=Object(i.useState)(!1),e=Object(st.a)(t,2),n=e[0],r=e[1];return Object(i.useEffect)((function(){function t(){return(t=Object(E.a)(x.a.mark((function t(){var e;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,lt();case 2:e=t.sent,r(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),n};var Ot=function(){var t=ft();return Object(M.jsx)("div",{className:"App",children:t?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(ut,{}),Object(M.jsx)(K,{})]}):"checking apps health..."})};l.a.render(Object(M.jsx)(d.a.StrictMode,{children:Object(M.jsx)(f.a,{store:H,children:Object(M.jsx)(Ot,{})})}),document.getElementById("root"))},67:function(t,e,n){var r=n(249),a={headers:{"Content-Type":"application/json"},method:"GET",errorHandler:r.errorHandler,responseHandler:r.responseHandler};t.exports=a}},[[477,1,2]]]);
//# sourceMappingURL=main.a3e6c97b.chunk.js.map