"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[923],{67:function(e,t,n){n.d(t,{X:function(){return i}});var r=n(861),u=n(757),a=n.n(u),c=n(340),i=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"b210646498b3592e6bb7ee7bde572bd7",n="https://api.themoviedb.org/3".concat(t,"api_key=").concat("b210646498b3592e6bb7ee7bde572bd7"),e.next=4,c.Z.get(n);case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},923:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),u=n(67),a=n(791),c=n(87),i=n(689),o=n(184),s=function(){var e=(0,c.lr)(),t=(0,r.Z)(e,2),n=t[0],s=t[1],f=(0,a.useState)([]),d=(0,r.Z)(f,2),l=d[0],h=d[1],p=n.get("query")||"",b=(0,i.TH)();(0,a.useEffect)((function(){var e="/search/movie?query=".concat(p,"&");(0,u.X)(e).then((function(e){return h(e.data.results)}))}),[p]);var v=l.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{to:"".concat(e.id),state:{from:b},children:e.title||e.name})},e.id)}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:(0,o.jsx)("input",{type:"text",value:p,onChange:function(e){var t=e.target.value;s({query:t})}})}),(0,o.jsx)("ul",{children:v})]})},f=function(){return(0,o.jsx)("main",{children:(0,o.jsx)(s,{})})}}}]);
//# sourceMappingURL=923.966cd630.chunk.js.map