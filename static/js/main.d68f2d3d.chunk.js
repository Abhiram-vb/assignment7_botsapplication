(this.webpackJsonpbotsapplication=this.webpackJsonpbotsapplication||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(13),r=c.n(n),i=(c(27),c(28),c(10)),o=c(3),l=(c(29),c(5)),d="ADD_TO_CART";var j=function(e){return{type:d,payload:e}},b="REMOVE_FROM_CART";var u=function(e){return{type:b,payload:e}},O=c(1),m=function(){var e=Object(l.c)((function(e){return e.data})),t=Object(l.b)();return Object(O.jsx)("div",{className:"mainBots",children:e.map((function(e){return Object(O.jsxs)("div",{className:"eachBot",children:[Object(O.jsx)("h1",{className:"botName",children:e.bot}),Object(O.jsxs)("div",{className:"indexValue",children:[Object(O.jsx)("p",{className:"cargHead",children:"Index value"}),Object(O.jsx)("p",{className:"cargPercent",children:e["index-value"]})]}),Object(O.jsxs)("div",{className:"carg",children:[Object(O.jsx)("h1",{className:"cargHead",children:"CAGR"}),Object(O.jsxs)("p",{className:"cargPercent",children:[e.cagr,"%"]})]}),Object(O.jsxs)("div",{className:"buttons",children:[Object(O.jsx)(i.b,{to:"/bots-details/".concat(e.id),children:Object(O.jsx)("button",{className:"viewAlgo",children:"View algo"})}),Object(O.jsx)("button",{className:"buy",onClick:function(){return t(j(e))},children:"Buy"}),Object(O.jsx)("button",{className:"remove",onClick:function(){return t(u(e))},children:"Remove"})]})]})}))})},h=(c(35),function(){return Object(O.jsx)("div",{className:"cartvalue",children:Object(O.jsx)(m,{})})}),x=(c(36),function(e){var t=Object(l.c)((function(e){return e.data})),c=e.match.params.id;c=parseInt(c);var a=t.filter((function(e){return e.id===c})),s=Object(l.b)();return Object(O.jsx)("div",{className:" widthClass",children:Object(O.jsxs)("div",{className:"eachBot",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"botName",children:a[0].bot}),Object(O.jsx)("p",{className:"cargPercent",children:a[0].description})]}),Object(O.jsxs)("div",{className:"indexValue",children:[Object(O.jsx)("p",{className:"cargHead",children:"Index value"}),Object(O.jsx)("p",{className:"cargPercent",children:a[0]["index-value"]})]}),Object(O.jsxs)("div",{className:"carg",children:[Object(O.jsx)("h1",{className:"cargHead",children:"CAGR"}),Object(O.jsxs)("p",{className:"cargPercent",children:[a[0].cagr,"%"]})]}),Object(O.jsxs)("div",{className:"buttons",children:[Object(O.jsx)(i.b,{to:"/bots",children:Object(O.jsx)("button",{className:"viewAlgo",children:"Back"})}),Object(O.jsx)("button",{className:"buy",onClick:function(){return s(j(a[0]))},children:"Buy"}),Object(O.jsx)("button",{className:"remove",onClick:function(){return s(u(a[0]))},children:"Remove"})]})]})})}),p=(c(37),function(){var e=Object(l.c)((function(e){return e.noOfCartItems}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"botsWelcome",children:"Welcome To Bots App"}),Object(O.jsxs)("div",{className:"cartvalue",children:[Object(O.jsx)(i.b,{to:"/bots",children:Object(O.jsx)("p",{children:"DashBoard"})}),Object(O.jsxs)("p",{className:"noOfItemsInCart",children:["No of Items In Cart: ",e]}),Object(O.jsx)(i.b,{to:"/cartItems",children:Object(O.jsxs)("div",{className:"cartImageAndText",children:[Object(O.jsx)("img",{alt:"cartImage",src:"https://media.istockphoto.com/photos/shopping-cart-vector-art-closeup-view-picture-id1251362621?b=1&k=20&m=1251362621&s=170667a&w=0&h=dRxDVhO60mUXTb3g5N5EFizNRm8Sq7xDKdmyeBeZTXQ=",className:"cartImage"}),Object(O.jsx)("p",{className:"cartText",children:"OpenCart"})]})})]})]})}),f=(c(38),function(){var e=Object(l.c)((function(e){return e.cartData}));return Object(O.jsx)("div",{className:"cartBots",children:e.map((function(e){return Object(O.jsx)("div",{className:"eachCartBot",children:Object(O.jsxs)("div",{className:"eachBot",children:[Object(O.jsx)("p",{className:"cargHead",children:e.bot}),Object(O.jsxs)("div",{className:"indexValue",children:[Object(O.jsx)("p",{className:"cargHead",children:"Index value"}),Object(O.jsx)("p",{className:"cargPercent",children:e["index-value"]})]}),Object(O.jsxs)("div",{className:"carg",children:[Object(O.jsx)("h1",{className:"cargHead",children:"CAGR"}),Object(O.jsxs)("p",{className:"cargPercent",children:[e.cagr,"%"]})]}),Object(O.jsx)("div",{className:"buttons",children:Object(O.jsxs)("h1",{className:"cargHead cartQuantity",children:["Quantity:",e.count]})})]})})}))})});var v=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(p,{}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/bots",component:h}),Object(O.jsx)(o.a,{exact:!0,path:"/bots-details/:id",component:x}),Object(O.jsx)(o.a,{exact:!0,path:"/cartItems",component:f})]})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))},N=c(22),C=c(4),I={noOfCartItems:0,data:[{id:1,bot:"Hot Bot",description:"Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics","index-value":289.34,cagr:34},{id:2,bot:"Cool Bot",description:"Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics","index-value":439.34,cagr:28},{id:3,bot:"Options Bot",description:"Options bot is low volatility portfolio of growth stocks selected based on our proprietary metrics","index-value":139.34,cagr:42}],cartData:[]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var c=e.cartData,a=c.filter((function(e){return e.id===t.payload.id})),s=null;if(a.length>0)s=c.map((function(e){return e.id===t.payload.id?Object(C.a)(Object(C.a)({},e),{},{count:e.count+1}):e}));else{var n=Object(C.a)(Object(C.a)({},t.payload),{},{count:1});s=[].concat(Object(N.a)(c),[n])}return console.log(s),Object(C.a)(Object(C.a)({},e),{},{cartData:s,noOfCartItems:e.noOfCartItems+1});case b:var r=e.cartData,i=[];if(r.length>0){var o=r.filter((function(e){return e.id===t.payload.id}));return console.log(o.length),o.length>0?(i=r,o[0].count>1?(i=r.map((function(e){return e.id===t.payload.id?Object(C.a)(Object(C.a)({},e),{},{count:e.count-1}):e})),Object(C.a)(Object(C.a)({},e),{},{cartData:i,noOfCartItems:e.noOfCartItems-1})):(i=r.filter((function(e){return e.id!==t.payload.id})),Object(C.a)(Object(C.a)({},e),{},{cartData:i,noOfCartItems:e.noOfCartItems-1}))):(i=r,alert("Selected Item is not in cart"),Object(C.a)(Object(C.a)({},e),{},{cartData:i,noOfCartItems:e.noOfCartItems}))}return i=r,alert("Cart Is Empty"),Object(C.a)(Object(C.a)({},e),{},{cartData:i,noOfCartItems:e.noOfCartItems});default:return I}},B=c(18),w=c(21),D=c.n(w),k=Object(B.b)(y,Object(B.a)(D.a));console.log(k.getState());var A=k;r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(l.a,{store:A,children:Object(O.jsx)(v,{})})}),document.getElementById("root")),g()}},[[39,1,2]]]);
//# sourceMappingURL=main.d68f2d3d.chunk.js.map