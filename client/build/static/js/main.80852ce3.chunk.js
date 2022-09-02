(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{104:function(e,t,a){e.exports=a(140)},139:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),c=a(18),i=a(29),s=a(79),u=a(94),p=a(11),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify(Object(p.a)({},null===t||void 0===t?void 0:t.data))),Object(p.a)(Object(p.a)({},e),{},{authData:t.data,loading:!1,errors:null});case"LOGOUT":return localStorage.clear(),Object(p.a)(Object(p.a)({},e),{},{authData:null,loading:!1,errors:null});default:return e}},d=Object(i.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;case"LIKE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"CREATE":return[].concat(Object(u.a)(e),[t.payload]);case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));default:return e}},auth:m}),f=a(182),g=a(43),v=a(12),b=a(26),h=a(188),E=a(181),x=a(14),y=a.n(x),j=a(23),O=a(80),w=a.n(O).a.create({baseURL:"http://localhost:5000"});w.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var C=function(e){return w.patch("/posts/".concat(e,"/likePost"))},k=function(e,t){return w.patch("/posts/".concat(e),t)},N=function(e){return w.delete("/posts/".concat(e))},S=function(e){return w.post("/user/signin",e)},I=function(e){return w.post("/user/signup",e)},T=function(e){return function(){var t=Object(j.a)(y.a.mark((function t(a){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l=e,w.post("/posts",l);case 3:n=t.sent,r=n.data,a({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var l}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},D=function(e,t){return function(){var a=Object(j.a)(y.a.mark((function a(n){var r,l;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,k(e,t);case 3:r=a.sent,l=r.data,n({type:"UPDATE",payload:l}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},L=a(180),A=a(174),F=a(175),_=a(142),z=a(176),P=a(177),U=a(178),W=a(85),B=a.n(W),J=a(87),R=a.n(J),H=a(86),M=a.n(H),q=a(61),G=a.n(q),K=a(81),V=a.n(K),Y=a(170),Q=Object(Y.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),X=function(e){var t,a,n,l,o=e.post,i=e.setCurrentId,s=Object(c.b)(),u=Q(),p=JSON.parse(localStorage.getItem("profile")),m=function(){return o.likes.length>0?o.likes.find((function(e){var t,a;return e===((null===p||void 0===p||null===(t=p.result)||void 0===t?void 0:t.googleId)||(null===p||void 0===p||null===(a=p.result)||void 0===a?void 0:a._id))}))?r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{fontSize:"small"}),"\xa0",o.likes.length>2?"You and ".concat(o.likes.length-1," others"):"".concat(o.likes.length," like").concat(o.likes.length>1?"s":"")):r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{fontSize:"small"}),"\xa0",o.likes.length," ",1===o.likes.length?"Like":"Likes"):r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{fontSize:"small"}),"\xa0Like")};return r.a.createElement(A.a,{className:u.card},r.a.createElement(F.a,{className:u.media,image:o.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:o.title}),r.a.createElement("div",{className:u.overlay},r.a.createElement(_.a,{variant:"h6"},o.name),r.a.createElement(_.a,{variant:"body2"},V()(o.createdAt).fromNow())),((null===p||void 0===p||null===(t=p.result)||void 0===t?void 0:t.googleId)===(null===o||void 0===o?void 0:o.creator)||(null===p||void 0===p||null===(a=p.result)||void 0===a?void 0:a._id)===(null===o||void 0===o?void 0:o.creator))&&r.a.createElement("div",{className:u.overlay2},r.a.createElement(z.a,{onClick:function(){return i(o._id)},style:{color:"white"},size:"small"},r.a.createElement(M.a,{fontSize:"default"}))),r.a.createElement("div",{className:u.details},r.a.createElement(_.a,{variant:"body2",color:"textSecondary",component:"h2"},o.tags.map((function(e){return"#".concat(e," ")})))),r.a.createElement(_.a,{className:u.title,gutterBottom:!0,variant:"h5",component:"h2"},o.title),r.a.createElement(P.a,null,r.a.createElement(_.a,{variant:"body2",color:"textSecondary",component:"p"},o.message)),r.a.createElement(U.a,{className:u.cardActions},r.a.createElement(z.a,{size:"small",color:"primary",disabled:!(null===p||void 0===p?void 0:p.result),onClick:function(){return s((e=o._id,function(){var t=Object(j.a)(y.a.mark((function t(a){var n,r,l;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(localStorage.getItem("profile")),t.prev=1,t.next=4,C(e,null===n||void 0===n||n.token);case 4:r=t.sent,l=r.data,a({type:"LIKE",payload:l}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(m,null)),((null===p||void 0===p||null===(n=p.result)||void 0===n?void 0:n.googleId)===(null===o||void 0===o?void 0:o.creator)||(null===p||void 0===p||null===(l=p.result)||void 0===l?void 0:l._id)===(null===o||void 0===o?void 0:o.creator))&&r.a.createElement(z.a,{size:"small",color:"secondary",onClick:function(){return s((e=o._id,function(){var t=Object(j.a)(y.a.mark((function t(a){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(R.a,{fontSize:"small"})," Delete")))},Z=a(37),$=a(179),ee=Object(Y.a)((function(e){var t;return t={mainContainer:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},purple:{color:e.palette.getContrastText($.a[500]),backgroundColor:$.a[500]}},Object(Z.a)(t,e.breakpoints.down("sm"),{appBar:{padding:"10px 20px"},heading:{display:"none"},userName:{display:"none"},image:{marginLeft:"5px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"160px"}}),Object(Z.a)(t,"actionDiv",{textAlign:"center"}),t})),te=function(e){var t=e.setCurrentId,a=Object(c.c)((function(e){return e.posts})),n=ee();return a.length?r.a.createElement(E.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},a.map((function(e){return r.a.createElement(E.a,{key:e._id,item:!0,xs:12,sm:6,md:6},r.a.createElement(X,{post:e,setCurrentId:t}))}))):r.a.createElement(L.a,null)},ae=a(96),ne=a(187),re=a(88),le=a.n(re),oe=Object(Y.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ce=function(e){var t,a=e.currentId,l=e.setCurrentId,o=Object(n.useState)({title:"",message:"",tags:"",selectedFile:""}),i=Object(b.a)(o,2),s=i[0],u=i[1],m=Object(c.c)((function(e){return a?e.posts.find((function(e){return e._id===a})):null})),d=Object(c.b)(),f=oe(),g=JSON.parse(localStorage.getItem("profile"));Object(n.useEffect)((function(){m&&u(m)}),[m]);var v=function(){l(0),u({title:"",message:"",tags:"",selectedFile:""})},h=function(){var e=Object(j.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===a?(d(T(Object(p.a)(Object(p.a)({},s),{},{name:null===g||void 0===g||null===(n=g.result)||void 0===n?void 0:n.name}))),v()):(d(D(a,Object(p.a)(Object(p.a)({},s),{},{name:null===g||void 0===g||null===(r=g.result)||void 0===r?void 0:r.name}))),v());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(null===g||void 0===g||null===(t=g.result)||void 0===t?void 0:t.name)?r.a.createElement(ae.a,{className:f.paper},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(f.root," ").concat(f.form),onSubmit:h},r.a.createElement(_.a,{variant:"h6"},a?'Editing "'.concat(m.title,'"'):"Creating a post"),r.a.createElement(ne.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return u(Object(p.a)(Object(p.a)({},s),{},{title:e.target.value}))}}),r.a.createElement(ne.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:s.message,onChange:function(e){return u(Object(p.a)(Object(p.a)({},s),{},{message:e.target.value}))}}),r.a.createElement(ne.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:s.tags,onChange:function(e){return u(Object(p.a)(Object(p.a)({},s),{},{tags:e.target.value.split(",")}))}}),r.a.createElement("div",{className:f.fileInput},r.a.createElement(le.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return u(Object(p.a)(Object(p.a)({},s),{},{selectedFile:t}))}})),r.a.createElement(z.a,{className:f.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(z.a,{variant:"contained",color:"secondary",size:"small",onClick:v,fullWidth:!0},"Clear"))):r.a.createElement(ae.a,{className:f.paper},r.a.createElement(_.a,{variant:"h6",align:"center"},"Please Sign in to post and like"))},ie=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],l=t[1],o=Object(c.b)();return Object(n.useEffect)((function(){o(function(){var e=Object(j.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get("/posts");case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,o]),r.a.createElement(h.a,{in:!0},r.a.createElement(f.a,null,r.a.createElement(E.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3},r.a.createElement(E.a,{item:!0,xs:12,sm:7},r.a.createElement(te,{setCurrentId:l})),r.a.createElement(E.a,{item:!0,xs:12,sm:4},r.a.createElement(ce,{currentId:a,setCurrentId:l})))))},se=a(183),ue=a(184),pe=a(189),me=a(89),de=a(90),fe=a.n(de),ge=Object(Y.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText($.a[500]),backgroundColor:$.a[500]}}})),ve=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),t=Object(b.a)(e,2),a=t[0],l=t[1],o=Object(c.b)(),i=Object(v.g)(),s=Object(v.f)(),u=ge(),p=function(){o({type:"LOGOUT"}),s.push("/auth"),l(null)};return Object(n.useEffect)((function(){var e=null===a||void 0===a?void 0:a.token;e&&(1e3*Object(me.a)(e).exp<(new Date).getTime()&&p());l(JSON.parse(localStorage.getItem("profile")))}),[i]),r.a.createElement(se.a,{className:u.appBar,position:"static",color:"inherit"},r.a.createElement("div",{className:u.brandContainer},r.a.createElement(_.a,{component:g.b,to:"/",className:u.heading,variant:"h2",align:"center"},"Wits"),r.a.createElement("img",{className:u.image,src:fe.a,alt:"icon",height:"60"})),r.a.createElement(ue.a,{className:u.toolbar},(null===a||void 0===a?void 0:a.result)?r.a.createElement("div",{className:u.profile},r.a.createElement(pe.a,{className:u.purple,alt:null===a||void 0===a?void 0:a.result.name,src:null===a||void 0===a?void 0:a.result.imageUrl},null===a||void 0===a?void 0:a.result.name.charAt(0)),r.a.createElement(_.a,{className:u.userName,variant:"h6"},null===a||void 0===a?void 0:a.result.name),r.a.createElement(z.a,{variant:"contained",className:u.logout,color:"secondary",onClick:p},"Logout")):r.a.createElement(z.a,{component:g.b,to:"/auth",variant:"contained",color:"primary"},"Sign In")))},be=a(93),he=a.n(be),Ee=Object(Y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),xe=a(185),ye=a(186),je=a(91),Oe=a.n(je),we=a(92),Ce=a.n(we),ke=function(e){var t=e.name,a=e.handleChange,n=e.label,l=e.half,o=e.autoFocus,c=e.type,i=e.handleShowPassword;return r.a.createElement(E.a,{item:!0,xs:12,sm:l?6:12},r.a.createElement(ne.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:o,type:c,InputProps:"password"===t?{endAdornment:r.a.createElement(xe.a,{position:"end"},r.a.createElement(ye.a,{onClick:i},"password"===c?r.a.createElement(Oe.a,null):r.a.createElement(Ce.a,null)))}:null}))},Ne={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},Se=function(){var e=Object(n.useState)(Ne),t=Object(b.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),i=Object(b.a)(o,2),s=i[0],u=i[1],m=Object(c.b)(),d=Object(v.f)(),g=Ee(),h=Object(n.useState)(!1),x=Object(b.a)(h,2),O=x[0],w=x[1],C=function(e){return l(Object(p.a)(Object(p.a)({},a),{},Object(Z.a)({},e.target.name,e.target.value)))};return r.a.createElement(f.a,{component:"main",maxWidth:"xs"},r.a.createElement(ae.a,{className:g.paper,elevation:3},r.a.createElement(pe.a,{className:g.avatar},r.a.createElement(he.a,null)),r.a.createElement(_.a,{component:"h1",variant:"h5"},s?"Sign up":"Sign in"),r.a.createElement("form",{className:g.form,onSubmit:function(e){var t,n;e.preventDefault(),m(s?(t=a,n=d,function(){var e=Object(j.a)(y.a.mark((function e(a){var r,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I(t);case 3:r=e.sent,l=r.data,a({type:"AUTH",data:l}),n.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()):function(e,t){return function(){var a=Object(j.a)(y.a.mark((function a(n){var r,l;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,S(e);case 3:r=a.sent,l=r.data,n({type:"AUTH",data:l}),t.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(a,d))}},r.a.createElement(E.a,{container:!0,spacing:2},s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ke,{name:"firstName",label:"First Name",handleChange:C,autoFocus:!0,half:!0}),r.a.createElement(ke,{name:"lastName",label:"Last Name",handleChange:C,half:!0})),r.a.createElement(ke,{name:"email",label:"Email Address",handleChange:C,type:"email"}),r.a.createElement(ke,{name:"password",label:"Password",handleChange:C,type:O?"text":"password",handleShowPassword:function(){return w(!O)}}),s&&r.a.createElement(ke,{name:"confirmPassword",label:"Repeat Password",handleChange:C,type:"password"})),r.a.createElement(z.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:g.submit},s?"Sign Up":"Sign In"),r.a.createElement(E.a,{container:!0,justify:"flex-end"},r.a.createElement(E.a,{item:!0},r.a.createElement(z.a,{onClick:function(){l(Ne),u((function(e){return!e})),w(!1)}},s?"Already have an account? Sign in":"Don't have an account? Sign Up"))))))},Ie=function(){return r.a.createElement(g.a,null,r.a.createElement(f.a,{maxWidth:"lg"},r.a.createElement(ve,null),r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",exact:!0,component:ie}),r.a.createElement(v.a,{path:"/auth",exact:!0,component:Se}))))},Te=(a(139),Object(i.e)(d,Object(i.d)(Object(i.a)(s.a))));o.a.render(r.a.createElement(c.a,{store:Te},r.a.createElement(Ie,null)),document.getElementById("root"))},90:function(e,t,a){e.exports=a.p+"static/media/memories.5c0c63fb.png"}},[[104,1,2]]]);
//# sourceMappingURL=main.80852ce3.chunk.js.map