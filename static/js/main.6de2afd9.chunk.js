(this["webpackJsonptext-utils"]=this["webpackJsonptext-utils"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),o=a(4),s=a.n(o),n=(a(9),a(2)),l=(a(10),a(0));function d(e){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("nav",{style:{backgroundColor:"dark"===e.mode?"#1c2a35":"#F8F9FA"},className:"navbar navbar-expand-lg navbar-".concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand fs-4 fw-bold ms-2",href:"#",children:"Text Utils"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"}),Object(l.jsxs)("div",{className:"form-check form-switch",children:[Object(l.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"," ms-2 me-4"),htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})})}function b(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"mt-5 mb-3",children:Object(l.jsx)("textarea",{style:{backgroundColor:"dark"===e.mode?"#1c2a35":"",border:"dark"===e.mode?"none":"",color:"dark"===e.mode?"#fff":""},placeholder:"Your Preview Here \ud83d\udc49",readOnly:!0,value:e.textopt,className:"form-control mt-2",id:"mytextbox",rows:"4"})}),Object(l.jsx)("div",{className:"text-center mb-5",children:Object(l.jsx)("button",{style:{backgroundColor:"dark"===e.mode?"#1c2a35":""},onClick:function(){navigator.clipboard.writeText(e.textopt),e.setAlertState("Text Copied !")},className:"btn btn-dark ms-3 ",children:"Copy"})})]})}function i(e){var t=Object(c.useState)(""),a=Object(n.a)(t,2),r=a[0],o=a[1],s=Object(c.useState)(""),d=Object(n.a)(s,2),i=d[0],m=d[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"mt-5 mb-3",children:[Object(l.jsx)("label",{style:{backgroundColor:"dark"===e.mode?"#1c2a35":""},htmlFor:"mytextbox",className:"form-label badge text-wrap ".concat("light"===e.mode?"bg-dark":""," p-2 ms-2 fs-6"),children:"Enter your Text here \ud83d\udc47"}),Object(l.jsx)("textarea",{style:{backgroundColor:"dark"===e.mode?"#1c2a35":"",border:"dark"===e.mode?"none":"",color:"dark"===e.mode?"#fff":""},onChange:function(e){var t=e.target.value;o(t)},placeholder:"Enter Text \u270d",value:r,className:"form-control mt-2",id:"mytextbox",rows:"6"})]}),Object(l.jsx)("button",{style:{backgroundColor:"dark"===e.mode?"#1c2a35":""},onClick:function(){var e=r.toUpperCase();m(e)},className:"btn btn-dark m-2",children:"Upper case"}),Object(l.jsx)("button",{style:{backgroundColor:"dark"===e.mode?"#1c2a35":""},onClick:function(){var e=r.toLowerCase();m(e)},className:"btn btn-dark ms-2",children:"Lower case"}),Object(l.jsx)("button",{style:{backgroundColor:"dark"===e.mode?"#1c2a35":""},onClick:function(){var e=r.replace(/\s+/g," ").trim();m(e),o(e)},className:"btn btn-dark ms-2",children:"Remove Extra Spaces"}),Object(l.jsx)("button",{style:{backgroundColor:"dark"===e.mode?"#1c2a35":""},onClick:function(){o("")},className:"btn btn-dark ms-2",children:"Clear"})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h5",{className:"mt-5 mb-4 fw-bold",children:"Text Summary"}),Object(l.jsxs)("p",{children:["Words : ",r.split(" ").length-1," Characters : ",r.length]}),Object(l.jsxs)("p",{children:["Time to read : ",r.split(" ").length-1>0?.008*r.split(" ").length:0]})]}),Object(l.jsx)(b,{textopt:i,mode:e.mode,setAlertState:e.setAlertState})]})}function m(e){return e.alert&&Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"alert alert-success alert-dismissible fade show m-4",role:"alert",children:Object(l.jsx)("strong",{children:e.alert.message})})})}var j=function(){var e=Object(c.useState)("light"),t=Object(n.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)(null),s=Object(n.a)(o,2),b=s[0],j=s[1];function u(e){j({message:e}),setTimeout((function(){j(null)}),1500)}return Object(l.jsxs)("div",{className:"myFont",children:[Object(l.jsx)(d,{mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.color="#fff",document.body.style.backgroundColor="#171e24",u("Dark Mode Enabled !")):(r("light"),document.body.style.color="#000",document.body.style.backgroundColor="#fff",u("Light Mode Enabled !"))}}),Object(l.jsx)(m,{alert:b}),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(i,{mode:a,setAlertState:u})})]})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.6de2afd9.chunk.js.map