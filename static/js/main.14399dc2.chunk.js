(this["webpackJsonpgithub-react-app"]=this["webpackJsonpgithub-react-app"]||[]).push([[0],{36:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var a,n=c(1),r=c.n(n),s=c(30),i=c.n(s),l=(c(36),c(9)),o=c(2),j=Object(n.createContext)(),b=c(0),d=function(){var e=Object(n.useContext)(j),t=e.alert,c=e.hide;return t?Object(b.jsxs)("div",{className:"alert alert-".concat(t.type||"secondary"," alert-dismissible"),role:"alert",children:[t.text,Object(b.jsx)("button",{type:"button",className:"close","aria-label":"Close",onClick:c,children:Object(b.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}):null},u=function(){return Object(b.jsxs)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg justify-content-around",children:[Object(b.jsx)(l.c,{exact:!0,to:"/",className:"navbar-brand",children:"Github React App"}),Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(l.c,{exact:!0,to:"/",className:"nav-link",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(l.c,{to:"/about",className:"nav-link",children:"About"})})]})]})},h=c(13),O="SHOW_ALERT",p="HIDE_ALERT",x="CLEAR_USERS",m="GET_REPOS",f="GET_USER",g="SEARCH_USERS",v="SET_LOADING",y=function(e,t){switch(t.type){case O:return t.payload;case p:return null;default:return e}},N=function(e){var t=e.children,c=Object(n.useReducer)(y,null),a=Object(h.a)(c,2),r=a[0],s=a[1];return Object(b.jsx)(j.Provider,{value:{hide:function(){return s({type:p})},show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"secondary";s({type:O,payload:{type:t,text:e}})},alert:r},children:t})},w=c(12),_=c.n(w),k=c(15),E=c(16),C=c.n(E),R=Object(n.createContext)(),S=c(10),F=c(8),L=(a={},Object(S.a)(a,g,(function(e,t){var c=t.payload;return Object(F.a)(Object(F.a)({},e),{},{users:c,loading:!1})})),Object(S.a)(a,m,(function(e,t){var c=t.payload;return Object(F.a)(Object(F.a)({},e),{},{repos:c,loading:!1})})),Object(S.a)(a,f,(function(e,t){var c=t.payload;return Object(F.a)(Object(F.a)({},e),{},{user:c,loading:!1})})),Object(S.a)(a,v,(function(e,t){t.payload;return Object(F.a)(Object(F.a)({},e),{},{loading:!0})})),Object(S.a)(a,x,(function(e,t){t.payload;return Object(F.a)(Object(F.a)({},e),{},{users:[]})})),Object(S.a)(a,"DEFAULT",(function(e){return e})),a),T=function(e,t){var c=L[t.type]||c.DEFAULT;return c(e,t)},A=function(e){return"".concat(e,"client_id=").concat("9cd1249faecc54004f6e","&client_secret=").concat("be2605068ce793e5864b4acb90fb25b2d8126bec")},U=function(e){var t=e.children,c=Object(n.useReducer)(T,{user:{},users:[],loading:!1,repos:[]}),a=Object(h.a)(c,2),r=a[0],s=a[1],i=function(){var e=Object(k.a)(_.a.mark((function e(t){var c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(A("https://api.github.com/search/users?q=".concat(t,"&")));case 2:c=e.sent,s({type:g,payload:c.data.items});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(k.a)(_.a.mark((function e(t){var c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(A("https://api.github.com/users/".concat(t,"?")));case 2:c=e.sent,s({type:f,payload:c.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(k.a)(_.a.mark((function e(t){var c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(A("https://api.github.com/users/".concat(t,"/repos?per_page=5&")));case 2:c=e.sent,s({type:m,payload:c.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=r.user,d=r.users,u=r.repos,O=r.loading;return Object(b.jsx)(R.Provider,{value:{setLoading:function(){return s({type:v})},search:i,getUser:l,getRepos:o,clearUsers:function(){return s({type:x})},user:j,users:d,repos:u,loading:O},children:t})},P=function(e){return Object(b.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"display-4",children:"About app"}),Object(b.jsx)("p",{className:"lead",children:"This app allows you to search for github users and view their profile information"})]})})},D=function(e){var t=e.user;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("img",{src:t.avatar_url,alt:t.login,className:"card-image-top"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:t.login}),Object(b.jsx)(l.b,{to:"/profile/"+t.login,className:"btn btn-info",children:"Open"})]})]})},G=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),c=t[0],a=t[1],r=Object(n.useContext)(j),s=Object(n.useContext)(R);return Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Search user...",onKeyPress:function(e){"Enter"===e.key&&(s.clearUsers(),c.trim()?(r.hide(),s.search(c.trim())):r.show("Please, enter user data"))},value:c,onChange:function(e){return a(e.target.value)}})})},I=function(e){var t=Object(n.useContext)(R),c=t.loading,a=t.users;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(G,{}),Object(b.jsx)("div",{className:"row",children:c?Object(b.jsx)("p",{className:"text-center",children:"Loading..."}):a.map((function(e){return Object(b.jsx)("div",{className:"col-sm-4 mb-4",children:Object(b.jsx)(D,{user:e})},e.id)}))})]})},B=function(e){var t=e.repos;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsx)("div",{className:"card mb-3",children:Object(b.jsx)("div",{className:"card-body",children:Object(b.jsx)("h5",{children:Object(b.jsx)("a",{href:e.html_url,target:"_blank",rel:"noreferrer",children:e.name})})})},e.id)}))})},H=function(e){var t=e.match,c=Object(n.useContext)(R),a=c.getUser,r=c.getRepos,s=c.loading,i=c.user,o=c.repos,j=t.params.name;if(Object(n.useEffect)((function(){a(j),r(j)}),[]),s)return Object(b.jsx)("p",{className:"text-center",children:"Loading..."});var d=i.name,u=i.company,h=i.avatar_url,O=i.location,p=i.bio,x=i.blog,m=i.login,f=i.html_url,g=i.followers,v=i.following,y=i.public_repos,N=i.public_gists;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l.b,{to:"/",className:"btn btn-link",children:"Back to home page"}),Object(b.jsx)("div",{className:"card mb-4",children:Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-sm-3 text-center",children:[Object(b.jsx)("img",{src:h,alt:d,style:{width:"150px"}}),Object(b.jsx)("h1",{children:d}),O&&Object(b.jsxs)("p",{children:["Location: ",O]})]}),Object(b.jsxs)("div",{className:"col",children:[p&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{children:"BIO"}),Object(b.jsx)("p",{children:p})]}),Object(b.jsx)("a",{href:f,target:"_blank",rel:"noreferrer",className:"btn btn-dark",children:"Open profile"}),Object(b.jsxs)("ul",{children:[m&&Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:"Username: "})," ",m]}),u&&Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:"Company: "})," ",m]}),x&&Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:"Website: "})," ",m]})]}),Object(b.jsxs)("div",{className:"badge badge-primary",children:["Followers: ",g]}),Object(b.jsxs)("div",{className:"badge badge-success",children:["Following: ",v]}),Object(b.jsxs)("div",{className:"badge badge-info",children:["Repositories: ",y]}),Object(b.jsxs)("div",{className:"badge badge-dark",children:["Gists: ",N]})]})]})})}),Object(b.jsx)(B,{repos:o})]})};var J=function(){return Object(b.jsx)(U,{children:Object(b.jsx)(N,{children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(u,{}),Object(b.jsxs)("div",{className:"container pt-4",children:[Object(b.jsx)(d,{alert:{text:"Test alert"}}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",exact:!0,component:I}),Object(b.jsx)(o.a,{path:"/about",component:P}),Object(b.jsx)(o.a,{path:"/profile/:name",component:H})]})]})]})})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(J,{})}),document.getElementById("root")),W()}},[[62,1,2]]]);
//# sourceMappingURL=main.14399dc2.chunk.js.map