(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n.n(c),r=n(45),s=n.n(r),i=n(11),o=n(30),u=n(15),j=n(0),O=n.n(j),l=n(1),b=n(46),d=n(26),p=n(16),f=n(27),x={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/nwitter",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/nwitter",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTH_DOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/nwitter",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/nwitter",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/nwitter",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MESSAGIN_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/nwitter",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APP_ID},h=Object(b.a)(x),m=Object(d.c)(),v=Object(p.f)(),_=Object(f.c)(h),S=n(6),E=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1],j=Object(c.useState)(!0),b=Object(i.a)(j,2),p=b[0],f=b[1],x=Object(c.useState)(""),h=Object(i.a)(x,2),v=h[0],_=h[1],E=function(e){var t=e.target,n=t.name,c=t.value;"email"===n?a(c):"password"===n&&u(c)},g=function(){var e=Object(l.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,Object(d.b)(m,n,o);case 5:e.sent,e.next=11;break;case 8:return e.next=10,Object(d.d)(m,n,o);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),_(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("form",{onSubmit:g,className:"container",children:[Object(S.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:n,onChange:E,className:"authInput"}),Object(S.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:E,className:"authInput"}),Object(S.jsx)("input",{type:"submit",value:p?"\ud68c\uc6d0\uac00\uc785":"\ub85c\uadf8\uc778",className:"authInput authSubmit"}),v&&Object(S.jsx)("span",{className:"authError",children:v})]}),Object(S.jsx)("span",{onClick:function(){return f((function(e){return!e}))},className:"authSwitch",children:p?"\ub85c\uadf8\uc778":"\ud68c\uc6d0\uac00\uc785"})]})},g=n(25),T=n(35),w=function(){var e=function(){var e=Object(l.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===t.target.name&&(n=new d.a),e.next=4,Object(d.e)(m,n);case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{className:"authContainer",children:[Object(S.jsx)(g.a,{icon:T.b,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(S.jsx)(E,{}),Object(S.jsx)("div",{className:"authBtns",children:Object(S.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(S.jsx)(g.a,{icon:T.a})]})})]})},C=n(47),N=n(29),y=function(e){var t=e.nweetObj,n=e.isOwner,a=Object(c.useState)(!1),r=Object(i.a)(a,2),s=r[0],o=r[1],u=Object(c.useState)(t.text),j=Object(i.a)(u,2),b=j[0],d=j[1],x=function(){var e=Object(l.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc815\ub9d0 \ud2b8\uc717\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,Object(p.c)(Object(p.d)(v,"nweets/".concat(t.id)));case 4:if(""===t.attachmentUrl){e.next=7;break}return e.next=7,Object(f.a)(Object(f.d)(_,t.attachmentUrl));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){return o((function(e){return!e}))},m=function(){var e=Object(l.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,Object(p.j)(Object(p.d)(v,"nweets/".concat(t.id)),{text:b});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsx)("div",{className:"nweet",children:s?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("form",{onSubmit:m,className:"container nweetEdit",children:[Object(S.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:b,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;d(t)},className:"formInput"}),Object(S.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(S.jsx)("span",{onClick:h,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(S.jsxs)(S.Fragment,{children:[" ",Object(S.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(S.jsx)("img",{src:t.attachmentUrl}),n&&Object(S.jsxs)("div",{className:"nweet__actions",children:[Object(S.jsx)("span",{onClick:x,children:Object(S.jsx)(g.a,{icon:N.d})}),Object(S.jsx)("span",{onClick:h,children:Object(S.jsx)(g.a,{icon:N.a})})]})]})})},A=n(69),D=function(e){var t=e.userObj,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),u=Object(i.a)(o,2),j=u[0],b=u[1],d=Object(c.useRef)(),x=function(){var e=Object(l.a)(O.a.mark((function e(n){var c,a,i,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),c="",""===j){e.next=12;break}return a=Object(f.d)(_,"".concat(t.uid,"/").concat(Object(A.a)())),e.next=8,Object(f.e)(a,j,"data_url");case 8:return i=e.sent,e.next=11,Object(f.b)(i.ref);case 11:c=e.sent;case 12:return e.prev=12,e.next=15,Object(p.a)(Object(p.b)(v,"nweets"),{text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:c});case 15:o=e.sent,console.log("Document written with ID:",o.id),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(12),console.log(e.t0);case 22:s(""),h();case 24:case"end":return e.stop()}}),e,null,[[12,19]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){b(""),d.current.value=""};return Object(S.jsxs)("form",{onSubmit:x,className:"factoryForm",children:[Object(S.jsxs)("div",{className:"factoryInput__container",children:[Object(S.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(S.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(S.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(S.jsx)("span",{children:"Add photos"}),Object(S.jsx)(g.a,{icon:N.b})]}),Object(S.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;b(t)},n.readAsDataURL(t)},style:{opacity:0},ref:d}),j&&Object(S.jsxs)("div",{className:"factoryForm__attachment",children:[Object(S.jsx)("img",{src:j,style:{backgroundImage:j}}),Object(S.jsxs)("div",{className:"factoryForm__clear",onClick:h,children:[Object(S.jsx)("span",{children:"Remove"}),Object(S.jsx)(g.a,{icon:N.c})]})]})]})},R=function(e){var t=e.userObj,n=Object(c.useState)([]),a=Object(i.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){Object(p.g)(Object(p.b)(v,"nweets"),(function(e){var t=e.docs.map((function(e){return Object(C.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(D,{userObj:t}),Object(S.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(S.jsx)(y,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},P=function(e){var t,n=e.userObj;return Object(S.jsx)("nav",{children:Object(S.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(S.jsx)(g.a,{icon:T.b,color:"#04AAFF",size:"2x"})})}),Object(S.jsx)("li",{children:Object(S.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(S.jsx)(g.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(S.jsx)("span",{style:{marginTop:10},children:(null===n||void 0===n||null===(t=n.displayName)||void 0===t?void 0:t.length)?"".concat(n.displayName,"'\uc758 \ud504\ub85c\ud544"):"\ud504\ub85c\ud544"})]})})]})})},I=function(e){var t=e.refreshUser,n=e.userObj,a=Object(u.f)(),r=Object(c.useState)(n.displayName),s=Object(i.a)(r,2),o=s[0],j=s[1],b=function(){var e=Object(l.a)(O.a.mark((function e(c){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),n.displayName===o){e.next=6;break}return e.next=4,Object(d.g)(n,{displayName:o});case 4:t(),j("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){})),Object(S.jsxs)("div",{className:"container",children:[Object(S.jsxs)("form",{onSubmit:b,className:"profileForm",children:[Object(S.jsx)("input",{onChange:function(e){var t=e.target.value;j(t)},type:"text",autoFocus:!0,placeholder:"\uc774\ub984",value:o,className:"formInput"}),Object(S.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(S.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){Object(d.f)(m),a.push("/")},children:"Log Out"})]})},F=function(e){var t=e.refreshUser,n=e.isLoggedIn,c=e.userObj;return Object(S.jsxs)(o.a,{children:[n&&Object(S.jsx)(P,{userObj:c}),Object(S.jsx)(u.c,{children:Object(S.jsx)(S.Fragment,{children:n?Object(S.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(S.jsx)(u.a,{exact:!0,path:"/",children:Object(S.jsx)(R,{userObj:c})}),Object(S.jsx)(u.a,{exact:!0,path:"/profile",children:Object(S.jsx)(I,{userObj:c,refreshUser:t})})]}):Object(S.jsx)(u.a,{exact:!0,path:"/",children:Object(S.jsx)(w,{})})})})]})};var U=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(i.a)(r,2),o=s[0],u=s[1],j=Object(c.useState)(""),O=Object(i.a)(j,2),l=O[0],b=O[1];return Object(c.useEffect)((function(){m.onAuthStateChanged((function(e){e?(a(!0),b(e)):(a(!1),b(null)),u(!0)}))})),Object(S.jsxs)(S.Fragment,{children:[o?Object(S.jsx)(F,{refreshUser:function(){b(Object.assign({},m.currentUser))},isLoggedIn:n,userObj:l}):"Initializing...",Object(S.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," Nwitter"]})]})};n(66);s.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(U,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.e2245515.chunk.js.map