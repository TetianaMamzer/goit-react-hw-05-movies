"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[437],{242:function(e,t,r){r.d(t,{Cm:function(){return f},hG:function(){return i},jf:function(){return l},s7:function(){return o},z1:function(){return c}});var n=r(861),a=r(757),s=r.n(a),u=r(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"d649a357c5752881ce25a153e1a07557"}}),c=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/search/movie",{params:{query:t,page:r,include_adult:"false",language:"en-US"}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},435:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(791),a=r(49),s=r(87),u=r(689),c=r(184),o=function(e){var t=e.movies,r=(0,u.TH)();return t.map((function(e){var t=e.id,n=e.name,u=e.title;return(0,c.jsx)(s.rU,{className:a.Z.link,to:"/movies/".concat(t),state:{from:r},children:(0,c.jsx)("li",{className:a.Z.movieList,children:(0,c.jsx)("h2",{className:a.Z.title,children:n||u})})},t)}))},i=(0,n.memo)(o),l=function(e){var t=e.movies;return(0,c.jsx)("div",{className:a.Z.Searchbar,children:(0,c.jsx)("ul",{className:a.Z.movies,children:(0,c.jsx)(i,{movies:t})})})},f=(0,n.memo)(l)},437:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(433),a=r(861),s=r(439),u=r(757),c=r.n(u),o=r(791),i=r(87),l=r(242),f=r(49),m=r(494),p=r(184);var h=function(e){var t=e.onSubmit,r=(0,o.useState)(""),n=(0,s.Z)(r,2),a=n[0],u=n[1];return(0,p.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===a.trim())return alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0434\u043b\u044f \u043f\u043e\u0448\u0443\u043a\u0443");t(a),u("")},className:f.Z.SearchForm,children:[(0,p.jsx)("button",{type:"submit",className:f.Z.SearchFormButton,children:(0,p.jsx)("span",{className:f.Z.SearchFormLabel,children:(0,p.jsx)(m.Yfv,{})})}),(0,p.jsx)("input",{value:a,className:f.Z.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){return u(e.target.value)},name:"input"})]})},v=r(435),d=r(174),x=function(e){var t=e.loader;return(0,p.jsx)("button",{className:f.Z.Button,onClick:function(){return t()},children:"Loder more"})};var Z=function(){var e=(0,o.useState)([]),t=(0,s.Z)(e,2),r=t[0],u=t[1],m=(0,o.useState)(null),Z=(0,s.Z)(m,2),g=Z[0],j=Z[1],b=(0,o.useState)(!1),S=(0,s.Z)(b,2),w=S[0],k=S[1],N=(0,o.useState)(0),y=(0,s.Z)(N,2),C=y[0],_=y[1],F=(0,o.useState)(!1),L=(0,s.Z)(F,2),U=L[0],q=L[1],z=(0,i.lr)(),B=(0,s.Z)(z,2),G=B[0],T=B[1],D=G.get("search"),E=G.get("page");console.log(E),(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,(0,l.z1)(D,E);case 4:t=e.sent,u((function(e){return[].concat((0,n.Z)(e),(0,n.Z)(t.results))})),_(t.total_results),q(!0),console.log(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),j(e.t0.message);case 14:return e.prev=14,k(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}();D&&(e(),document.querySelector("form").reset())}),[D,E]);var H=Math.floor(C/20);return console.log(H),(0,p.jsxs)("div",{className:f.Z.Searchbar,children:[(0,p.jsx)(h,{onSubmit:function(e){D!==e&&(T({search:e,page:1}),u([]))}}),(0,p.jsx)(v.Z,{movies:r}),0===C&&U&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{className:f.Z.message,children:"\u0417\u0430 \u0432\u0430\u0448\u0438\u043c \u0437\u0430\u043f\u0438\u0442\u043e\u043c \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),(0,p.jsx)("img",{src:"https://i.gifer.com/GT4C.gif",alt:"nothing",className:f.Z.gif})]}),g&&(0,p.jsx)("h2",{className:f.Z.title,children:g}),w&&(0,p.jsx)(d.Z,{text:"Loading..."}),r.length>0&&E<H&&(0,p.jsx)(x,{loader:function(){T({search:D,page:Number(E)+1})},type:"button"})]})},g=function(){return(0,p.jsx)(Z,{})}}}]);
//# sourceMappingURL=437.085a0d16.chunk.js.map