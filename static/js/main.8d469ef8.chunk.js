(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n.n(c),r=n(45),s=n.n(r),i=n(11),u=n(30),j=n(15),o=n(0),l=n.n(o),b=n(1),O=n(46),d=n(26),f=n(16),p=n(27),x=Object(O.a)({apiKey:"AIzaSyBPbV4o2zH76dhw7JkommQTbTI87OdyeAM",authDomain:"nwitter-1d80f.firebaseapp.com",projectId:"nwitter-1d80f",storageBucket:"nwitter-1d80f.appspot.com",messagingSenderId:"358655136745",appId:"1:358655136745:web:4aebabb917818b47af7178"}),m=Object(d.c)(),h=Object(f.f)(),v=Object(p.c)(x),g=n(6),w=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(i.a)(r,2),u=s[0],j=s[1],o=Object(c.useState)(!0),O=Object(i.a)(o,2),f=O[0],p=O[1],x=Object(c.useState)(""),h=Object(i.a)(x,2),v=h[0],w=h[1],y=function(e){var t=e.target,n=t.name,c=t.value;"email"===n?a(c):"password"===n&&j(c)},N=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!f){e.next=8;break}return e.next=5,Object(d.b)(m,n,u);case 5:e.sent,e.next=11;break;case 8:return e.next=10,Object(d.d)(m,n,u);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),w(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:N,className:"container",children:[Object(g.jsx)("input",{name:"email",type:"text",placeholder:"\uc774\uba54\uc77c",required:!0,value:n,onChange:y,className:"authInput"}),Object(g.jsx)("input",{name:"password",type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",required:!0,value:u,onChange:y,className:"authInput"}),Object(g.jsx)("input",{type:"submit",value:f?"\ud68c\uc6d0\uac00\uc785":"\ub85c\uadf8\uc778",className:"authInput authSubmit"}),v&&Object(g.jsx)("span",{className:"authError",children:v})]}),Object(g.jsx)("span",{onClick:function(){return p((function(e){return!e}))},className:"authSwitch",children:f?"\ub85c\uadf8\uc778":"\ud68c\uc6d0\uac00\uc785"})]})},y=n(25),N=n(35),k=function(){var e=function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===t.target.name&&(n=new d.a),e.next=4,Object(d.e)(m,n);case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"authContainer",children:[Object(g.jsx)(y.a,{icon:N.b,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(g.jsx)(w,{}),Object(g.jsx)("div",{className:"authBtns",children:Object(g.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Google\ub85c \uc2dc\uc791\ud558\uae30 ",Object(g.jsx)(y.a,{icon:N.a})]})})]})},S=n(47),I=n(29),F=function(e){var t=e.nweetObj,n=e.isOwner,a=Object(c.useState)(!1),r=Object(i.a)(a,2),s=r[0],u=r[1],j=Object(c.useState)(t.text),o=Object(i.a)(j,2),O=o[0],d=o[1],x=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc815\ub9d0 \ud2b8\uc717\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,Object(f.c)(Object(f.d)(h,"nweets/".concat(t.id)));case 4:if(""===t.attachmentUrl){e.next=7;break}return e.next=7,Object(p.a)(Object(p.d)(v,t.attachmentUrl));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return u((function(e){return!e}))},w=function(){var e=Object(b.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,Object(f.j)(Object(f.d)(h,"nweets/".concat(t.id)),{text:O});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"nweet",children:s?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:w,className:"container nweetEdit",children:[Object(g.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:O,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;d(t)},className:"formInput"}),Object(g.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(g.jsx)("span",{onClick:m,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(g.jsxs)(g.Fragment,{children:[" ",Object(g.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(g.jsx)("img",{src:t.attachmentUrl}),n&&Object(g.jsxs)("div",{className:"nweet__actions",children:[Object(g.jsx)("span",{onClick:x,children:Object(g.jsx)(y.a,{icon:I.d})}),Object(g.jsx)("span",{onClick:m,children:Object(g.jsx)(y.a,{icon:I.a})})]})]})})},C=n(69),_=function(e){var t=e.userObj,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],s=a[1],u=Object(c.useState)(""),j=Object(i.a)(u,2),o=j[0],O=j[1],d=Object(c.useRef)(),x=function(){var e=Object(b.a)(l.a.mark((function e(n){var c,a,i,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),c="",""===o){e.next=12;break}return a=Object(p.d)(v,"".concat(t.uid,"/").concat(Object(C.a)())),e.next=8,Object(p.e)(a,o,"data_url");case 8:return i=e.sent,e.next=11,Object(p.b)(i.ref);case 11:c=e.sent;case 12:return e.prev=12,e.next=15,Object(f.a)(Object(f.b)(h,"nweets"),{text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:c});case 15:u=e.sent,console.log("Document written with ID:",u.id),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(12),console.log(e.t0);case 22:s(""),m();case 24:case"end":return e.stop()}}),e,null,[[12,19]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){O(""),d.current.value=""};return Object(g.jsxs)("form",{onSubmit:x,className:"factoryForm",children:[Object(g.jsxs)("div",{className:"factoryInput__container",children:[Object(g.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"\ubb34\uc2a8 \uc77c\uc774 \uc77c\uc5b4\ub098\uace0 \uc788\ub098\uc694?",maxLength:120}),Object(g.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(g.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(g.jsx)("span",{children:"\uc0ac\uc9c4 \ucca8\ubd80"}),Object(g.jsx)(y.a,{icon:I.b})]}),Object(g.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;O(t)},n.readAsDataURL(t)},style:{opacity:0},ref:d}),o&&Object(g.jsxs)("div",{className:"factoryForm__attachment",children:[Object(g.jsx)("img",{src:o,style:{backgroundImage:o}}),Object(g.jsxs)("div",{className:"factoryForm__clear",onClick:m,children:[Object(g.jsx)("span",{children:"Remove"}),Object(g.jsx)(y.a,{icon:I.c})]})]})]})},B=function(e){var t=e.userObj,n=Object(c.useState)([]),a=Object(i.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){Object(f.g)(Object(f.b)(h,"nweets"),(function(e){var t=e.docs.map((function(e){return Object(S.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(_,{userObj:t}),Object(g.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(g.jsx)(F,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},U=function(e){var t,n=e.userObj;return Object(g.jsx)("nav",{children:Object(g.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(g.jsx)("li",{children:Object(g.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(g.jsx)(y.a,{icon:N.b,color:"#04AAFF",size:"2x"})})}),Object(g.jsx)("li",{children:Object(g.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(g.jsx)(y.a,{icon:I.e,color:"#04AAFF",size:"2x"}),Object(g.jsx)("span",{style:{marginTop:10},children:(null===n||void 0===n||null===(t=n.displayName)||void 0===t?void 0:t.length)?"".concat(n.displayName,"'\uc758 \ud504\ub85c\ud544"):"\ud504\ub85c\ud544"})]})})]})})},A=function(e){var t=e.refreshUser,n=e.userObj,a=Object(j.f)(),r=Object(c.useState)(n.displayName),s=Object(i.a)(r,2),u=s[0],o=s[1],O=function(){var e=Object(b.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),n.displayName===u){e.next=6;break}return e.next=4,Object(d.g)(n,{displayName:u});case 4:t(),o("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){})),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("form",{onSubmit:O,className:"profileForm",children:[Object(g.jsx)("input",{onChange:function(e){var t=e.target.value;o(t)},type:"text",autoFocus:!0,placeholder:"\uc774\ub984",value:u,className:"formInput"}),Object(g.jsx)("input",{type:"submit",value:"\ud504\ub85c\ud544 \uc5c5\ub370\uc774\ud2b8",className:"formBtn",style:{marginTop:10}})]}),Object(g.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){Object(d.f)(m),a.push("/")},children:"\ub85c\uadf8\uc544\uc6c3"})]})},D=function(e){var t=e.refreshUser,n=e.isLoggedIn,c=e.userObj;return Object(g.jsxs)(u.a,{children:[n&&Object(g.jsx)(U,{userObj:c}),Object(g.jsx)(j.c,{children:Object(g.jsx)(g.Fragment,{children:n?Object(g.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(g.jsx)(j.a,{exact:!0,path:"/",children:Object(g.jsx)(B,{userObj:c})}),Object(g.jsx)(j.a,{exact:!0,path:"/profile",children:Object(g.jsx)(A,{userObj:c,refreshUser:t})})]}):Object(g.jsx)(j.a,{exact:!0,path:"/",children:Object(g.jsx)(k,{})})})})]})};var T=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(i.a)(r,2),u=s[0],j=s[1],o=Object(c.useState)(""),l=Object(i.a)(o,2),b=l[0],O=l[1];return Object(c.useEffect)((function(){m.onAuthStateChanged((function(e){e?(a(!0),O(e)):(a(!1),O(null)),j(!0)}))})),Object(g.jsxs)(g.Fragment,{children:[u?Object(g.jsx)(D,{refreshUser:function(){O(Object.assign({},m.currentUser))},isLoggedIn:n,userObj:b}):"Initializing...",Object(g.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," Nwitter"]})]})};n(66);s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(T,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.8d469ef8.chunk.js.map