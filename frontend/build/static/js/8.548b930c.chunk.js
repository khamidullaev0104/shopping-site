(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{133:function(e,a,t){"use strict";var c=t(2),s=t(4),r=t(6),n=t.n(r),o=t(0),i=t(8),l=t(1),d=["xxl","xl","lg","md","sm","xs"],b=o.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.as,b=void 0===o?"div":o,j=Object(s.a)(e,["bsPrefix","className","as"]),u=Object(i.a)(t,"col"),f=[],m=[];return d.forEach((function(e){var a,t,c,s=j[e];if(delete j[e],"object"===typeof s&&null!=s){var r=s.span;a=void 0===r||r,t=s.offset,c=s.order}else a=s;var n="xs"!==e?"-".concat(e):"";a&&f.push(!0===a?"".concat(u).concat(n):"".concat(u).concat(n,"-").concat(a)),null!=c&&m.push("order".concat(n,"-").concat(c)),null!=t&&m.push("offset".concat(n,"-").concat(t))})),f.length||f.push(u),Object(l.jsx)(b,Object(c.a)(Object(c.a)({},j),{},{ref:a,className:n.a.apply(void 0,[r].concat(f,m))}))}));b.displayName="Col",a.a=b},135:function(e,a,t){"use strict";var c=t(2),s=t(4),r=t(6),n=t.n(r),o=t(0),i=t(8),l=t(1),d=["xxl","xl","lg","md","sm","xs"],b=o.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.as,b=void 0===o?"div":o,j=Object(s.a)(e,["bsPrefix","className","as"]),u=Object(i.a)(t,"row"),f="".concat(u,"-cols"),m=[];return d.forEach((function(e){var a,t=j[e];delete j[e],a=null!=t&&"object"===typeof t?t.cols:t;var c="xs"!==e?"-".concat(e):"";null!=a&&m.push("".concat(f).concat(c,"-").concat(a))})),Object(l.jsx)(b,Object(c.a)(Object(c.a)({ref:a},j),{},{className:n.a.apply(void 0,[r,u].concat(m))}))}));b.displayName="Row",a.a=b},136:function(e,a,t){"use strict";var c=t(2),s=t(4),r=t(6),n=t.n(r),o=t(9),i=t.n(o),l=t(0),d=t(1),b={type:i.a.string,tooltip:i.a.bool,as:i.a.elementType},j=l.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,o=e.className,i=e.type,l=void 0===i?"valid":i,b=e.tooltip,j=void 0!==b&&b,u=Object(s.a)(e,["as","className","type","tooltip"]);return Object(d.jsx)(r,Object(c.a)(Object(c.a)({},u),{},{ref:a,className:n()(o,"".concat(l,"-").concat(j?"tooltip":"feedback"))}))}));j.displayName="Feedback",j.propTypes=b;var u=j,f=l.createContext({}),m=t(8),O=l.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,o=e.className,i=e.type,b=void 0===i?"checkbox":i,j=e.isValid,u=void 0!==j&&j,O=e.isInvalid,v=void 0!==O&&O,p=e.as,h=void 0===p?"input":p,x=Object(s.a)(e,["id","bsPrefix","className","type","isValid","isInvalid","as"]),N=Object(l.useContext)(f).controlId;return r=Object(m.a)(r,"form-check-input"),Object(d.jsx)(h,Object(c.a)(Object(c.a)({},x),{},{ref:a,type:b,id:t||N,className:n()(o,r,u&&"is-valid",v&&"is-invalid")}))}));O.displayName="FormCheckInput";var v=O,p=l.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.htmlFor,i=Object(s.a)(e,["bsPrefix","className","htmlFor"]),b=Object(l.useContext)(f).controlId;return t=Object(m.a)(t,"form-check-label"),Object(d.jsx)("label",Object(c.a)(Object(c.a)({},i),{},{ref:a,htmlFor:o||b,className:n()(r,t)}))}));p.displayName="FormCheckLabel";var h=p,x=l.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,o=e.bsSwitchPrefix,i=e.inline,b=void 0!==i&&i,j=e.disabled,O=void 0!==j&&j,p=e.isValid,x=void 0!==p&&p,N=e.isInvalid,y=void 0!==N&&N,g=e.feedbackTooltip,w=void 0!==g&&g,P=e.feedback,C=e.className,I=e.style,k=e.title,F=void 0===k?"":k,S=e.type,R=void 0===S?"checkbox":S,z=e.label,L=e.children,T=e.as,V=void 0===T?"input":T,E=Object(s.a)(e,["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","as"]);r=Object(m.a)(r,"form-check"),o=Object(m.a)(o,"form-switch");var G=Object(l.useContext)(f).controlId,q=Object(l.useMemo)((function(){return{controlId:t||G}}),[G,t]),B=null!=z&&!1!==z&&!L,H=Object(d.jsx)(v,Object(c.a)(Object(c.a)({},E),{},{type:"switch"===R?"checkbox":R,ref:a,isValid:x,isInvalid:y,disabled:O,as:V}));return Object(d.jsx)(f.Provider,{value:q,children:Object(d.jsx)("div",{style:I,className:n()(C,z&&r,b&&"".concat(r,"-inline"),"switch"===R&&o),children:L||Object(d.jsxs)(d.Fragment,{children:[H,B&&Object(d.jsx)(h,{title:F,children:z}),(x||y)&&Object(d.jsx)(u,{type:x?"valid":"invalid",tooltip:w,children:P})]})})})}));x.displayName="FormCheck";var N=Object.assign(x,{Input:v,Label:h}),y=t(14),g=(t(39),l.forwardRef((function(e,a){var t,r,o=e.bsPrefix,i=e.type,b=e.size,j=e.htmlSize,u=e.id,O=e.className,v=e.isValid,p=void 0!==v&&v,h=e.isInvalid,x=void 0!==h&&h,N=e.plaintext,g=e.readOnly,w=e.as,P=void 0===w?"input":w,C=Object(s.a)(e,["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),I=Object(l.useContext)(f).controlId;(o=Object(m.a)(o,"form-control"),N)?t=Object(y.a)({},"".concat(o,"-plaintext"),!0):(r={},Object(y.a)(r,o,!0),Object(y.a)(r,"".concat(o,"-").concat(b),b),t=r);return Object(d.jsx)(P,Object(c.a)(Object(c.a)({},C),{},{type:i,size:j,ref:a,readOnly:g,id:u||I,className:n()(O,t,p&&"is-valid",x&&"is-invalid","color"===i&&"".concat(o,"-color"))}))})));g.displayName="FormControl";var w=Object.assign(g,{Feedback:u}),P=t(26),C=Object(P.a)("form-floating"),I=l.forwardRef((function(e,a){var t=e.controlId,r=e.as,n=void 0===r?"div":r,o=Object(s.a)(e,["controlId","as"]),i=Object(l.useMemo)((function(){return{controlId:t}}),[t]);return Object(d.jsx)(f.Provider,{value:i,children:Object(d.jsx)(n,Object(c.a)(Object(c.a)({},o),{},{ref:a}))})}));I.displayName="FormGroup";var k=I,F=t(133),S=l.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,o=e.bsPrefix,i=e.column,b=e.visuallyHidden,j=e.className,u=e.htmlFor,O=Object(s.a)(e,["as","bsPrefix","column","visuallyHidden","className","htmlFor"]),v=Object(l.useContext)(f).controlId;o=Object(m.a)(o,"form-label");var p="col-form-label";"string"===typeof i&&(p="".concat(p," ").concat(p,"-").concat(i));var h=n()(j,o,b&&"visually-hidden",i&&p);return u=u||v,i?Object(d.jsx)(F.a,Object(c.a)({ref:a,as:"label",className:h,htmlFor:u},O)):Object(d.jsx)(r,Object(c.a)({ref:a,className:h,htmlFor:u},O))}));S.displayName="FormLabel",S.defaultProps={column:!1,visuallyHidden:!1};var R=S,z=l.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.id,i=Object(s.a)(e,["bsPrefix","className","id"]),b=Object(l.useContext)(f).controlId;return t=Object(m.a)(t,"form-range"),Object(d.jsx)("input",Object(c.a)(Object(c.a)({},i),{},{type:"range",ref:a,className:n()(r,t),id:o||b}))}));z.displayName="FormRange";var L=z,T=l.forwardRef((function(e,a){var t=e.bsPrefix,r=e.size,o=e.htmlSize,i=e.className,b=e.isValid,j=void 0!==b&&b,u=e.isInvalid,O=void 0!==u&&u,v=e.id,p=Object(s.a)(e,["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"]),h=Object(l.useContext)(f).controlId;return t=Object(m.a)(t,"form-select"),Object(d.jsx)("select",Object(c.a)(Object(c.a)({},p),{},{size:o,ref:a,className:n()(i,t,r&&"".concat(t,"-").concat(r),j&&"is-valid",O&&"is-invalid"),id:v||h}))}));T.displayName="FormSelect";var V=T,E=l.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.as,i=void 0===o?"small":o,l=e.muted,b=Object(s.a)(e,["bsPrefix","className","as","muted"]);return t=Object(m.a)(t,"form-text"),Object(d.jsx)(i,Object(c.a)(Object(c.a)({},b),{},{ref:a,className:n()(r,t,l&&"text-muted")}))}));E.displayName="FormText";var G=E,q=l.forwardRef((function(e,a){return Object(d.jsx)(N,Object(c.a)(Object(c.a)({},e),{},{ref:a,type:"switch"}))}));q.displayName="Switch";var B=Object.assign(q,{Input:N.Input,Label:N.Label}),H=l.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.children,i=e.controlId,l=e.label,b=Object(s.a)(e,["bsPrefix","className","children","controlId","label"]);return t=Object(m.a)(t,"form-floating"),Object(d.jsxs)(k,Object(c.a)(Object(c.a)({ref:a,className:n()(r,t),controlId:i},b),{},{children:[o,Object(d.jsx)("label",{htmlFor:i,children:l})]}))}));H.displayName="FloatingLabel";var J=H,M={_ref:i.a.any,validated:i.a.bool,as:i.a.elementType},A=l.forwardRef((function(e,a){var t=e.className,r=e.validated,o=e.as,i=void 0===o?"form":o,l=Object(s.a)(e,["className","validated","as"]);return Object(d.jsx)(i,Object(c.a)(Object(c.a)({},l),{},{ref:a,className:n()(t,r&&"was-validated")}))}));A.displayName="Form",A.propTypes=M;a.a=Object.assign(A,{Group:k,Control:w,Floating:C,Check:N,Switch:B,Label:R,Text:G,Range:L,Select:V,FloatingLabel:J})},137:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return s}));var c=function(e,a,t,c,s){return""!==e&&""!==a&&""!==t&&""!==c&&""!==s},s=function(e,a){return e===a}},153:function(e,a,t){"use strict";t.r(a);var c=t(7),s=t.n(c),r=t(10),n=t(40),o=t(0),i=t(74),l=t(5),d=t(135),b=t(133),j=t(136),u=t(86),f=t(124),m=t(32),O=t(35),v=t(1),p=function(e){var a=e.onChangeEmail,t=e.onChangePassword,c=e.onChangeConfirmPassword,s=e.onChangePhone,r=e.handleSubmit,n=e.onChangeFullName,o=Object(m.c)((function(e){return e.signup})).status;return Object(v.jsx)("div",{children:Object(v.jsx)(d.a,{className:"d-flex justify-content-center",children:Object(v.jsx)(b.a,{md:8,children:Object(v.jsxs)(j.a,{onSubmit:r,children:[Object(v.jsxs)(j.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(v.jsx)(j.a.Label,{children:"Email address"}),Object(v.jsx)(j.a.Control,{type:"email",placeholder:"example@gmail.com",size:"lg",onChange:a,required:!0})]}),Object(v.jsxs)(j.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(v.jsx)(j.a.Label,{children:"Full Name"}),Object(v.jsx)(j.a.Control,{type:"text",placeholder:"mills brown",size:"lg",onChange:n,required:!0})]}),Object(v.jsxs)(j.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(v.jsx)(j.a.Label,{children:"Password"}),Object(v.jsx)(j.a.Control,{type:"password",placeholder:"*****************",size:"lg",onChange:t,required:!0})]}),Object(v.jsxs)(j.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(v.jsx)(j.a.Label,{children:"Confirm Password"}),Object(v.jsx)(j.a.Control,{type:"password",placeholder:"*****************",size:"lg",onChange:c,required:!0})]}),Object(v.jsxs)(j.a.Group,{className:"mb-3",controlId:"formBasicPhone",children:[Object(v.jsx)(j.a.Label,{children:"Phone Number"}),Object(v.jsx)(j.a.Control,{type:"tel",placeholder:"0546949655",size:"lg",onChange:s,required:!0})]}),"loading"===o?Object(v.jsx)(u.a,{variant:"dark",disabled:!0,children:Object(v.jsx)(f.a,{animation:"border"})}):Object(v.jsx)(u.a,{variant:"outline-dark",type:"submit",children:"signup"}),Object(v.jsxs)(j.a.Text,{className:"text-muted h4 d-block py-2",children:["Already have an account?"," ",Object(v.jsx)(O.NavLink,{to:"/v1/auth/signin",className:"h6",children:"signin"})]})]})})})})},h=t(41),x=t(13),N=t(54),y=t(16),g=t.n(y),w=t(137);a.default=function(){var e=Object(m.b)(),a=Object(x.k)(),t=Object(o.useState)(""),c=Object(n.a)(t,2),d=c[0],b=c[1],j=Object(o.useState)(""),u=Object(n.a)(j,2),f=u[0],O=u[1],y=Object(o.useState)(""),P=Object(n.a)(y,2),C=P[0],I=P[1],k=Object(o.useState)(""),F=Object(n.a)(k,2),S=F[0],R=F[1],z=Object(o.useState)(""),L=Object(n.a)(z,2),T=L[0],V=L[1],E=Object(m.c)((function(e){return e.signup})).errorInfo,G=Object(m.c)((function(e){return e.auth})).userInfo;Object(o.useEffect)((function(){G&&a.push("/")}),[a,G]);var q=function(){var t=Object(r.a)(s.a.mark((function t(c){var r,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),t.prev=1,!Object(w.a)(d,T,f,C,S)){t.next=16;break}if(!Object(w.b)(f,C)){t.next=13;break}return t.next=8,e(Object(i.c)({email:d,fullName:T,password:f,phone:S}));case 8:r=t.sent,201===(n=Object(l.d)(r)).status?(localStorage.setItem("userInfo",JSON.stringify({email:n.email,phone:n.phone,role:n.role,userId:n.userId,userName:n.userName,status:n.status})),e(Object(h.c)(n)),g.a.set("accessToken",n.accessToken,{expires:7,secure:!1,sameSite:"Strict"}),N.b.success("account created successfully"),a.push("/")):(e(Object(i.b)(n)),N.b.error(null===E||void 0===E?void 0:E.message)),t.next=14;break;case 13:N.b.error("sorry, passwords do not match");case 14:t.next=17;break;case 16:N.b.error("please fill all fields");case 17:t.next=23;break;case 19:t.prev=19,t.t0=t.catch(1),e(Object(i.b)({message:null===t.t0||void 0===t.t0?void 0:t.t0.message})),N.b.error(null===E||void 0===E?void 0:E.message);case 23:case"end":return t.stop()}}),t,null,[[1,19]])})));return function(e){return t.apply(this,arguments)}}();return Object(v.jsx)(p,{email:d,password:f,confirmPassword:C,phone:S,onChangeEmail:function(e){return b(e.target.value)},onChangePassword:function(e){return O(e.target.value)},onChangeConfirmPassword:function(e){return I(e.target.value)},onChangePhone:function(e){return R(e.target.value)},onChangeFullName:function(e){return V(e.target.value)},handleSubmit:q})}}}]);
//# sourceMappingURL=8.548b930c.chunk.js.map