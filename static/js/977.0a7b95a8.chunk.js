"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[977],{242:function(e,r,t){t.d(r,{Cm:function(){return p},hG:function(){return o},jf:function(){return f},s7:function(){return i},z1:function(){return s}});var n=t(861),a=t(757),u=t.n(a),c=t(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"d649a357c5752881ce25a153e1a07557"}}),s=function(){var e=(0,n.Z)(u().mark((function e(r,t){var n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:r,page:t,include_adult:"false",language:"en-US"}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},435:function(e,r,t){t.d(r,{Z:function(){return f}});var n=t(791),a=t(49),u=t(87),c=t(689),s=t(184),i=function(e){var r=e.movies,t=(0,c.TH)();return r.map((function(e){var r=e.id,n=e.name,c=e.title;return(0,s.jsx)(u.rU,{className:a.Z.link,to:"/movies/".concat(r),state:{from:t},children:(0,s.jsx)("li",{className:a.Z.movieList,children:(0,s.jsx)("h2",{className:a.Z.title,children:n||c})})},r)}))},o=function(e){var r=e.movies;return(0,s.jsx)("div",{className:a.Z.Searchbar,children:(0,s.jsx)("ul",{className:a.Z.movies,children:(0,s.jsx)(i,{movies:r})})})},f=(0,n.memo)(o)},977:function(e,r,t){t.r(r),t.d(r,{default:function(){return l}});var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(242),i=t(791),o={},f=t(435),p=t(184);var v=function(){var e=(0,i.useState)([]),r=(0,a.Z)(e,2),t=r[0],u=r[1],v=(0,i.useState)(null),l=(0,a.Z)(v,2),m=l[0],d=l[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.s7)();case 3:r=e.sent,u(r.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),d(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)(f.Z,{movies:t}),m&&(0,p.jsx)("h2",{className:o.title,children:m})]})},l=function(){return(0,p.jsx)(v,{})}}}]);
//# sourceMappingURL=977.0a7b95a8.chunk.js.map