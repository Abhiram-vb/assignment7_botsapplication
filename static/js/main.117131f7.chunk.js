(this.webpackJsonpbotsapplication=this.webpackJsonpbotsapplication||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(13),r=c.n(n),i=(c(27),c(28),c(10)),o=c(3),l=(c(29),c(5)),d="ADD_TO_CART";var j=function(e){return{type:d,payload:e}},b="REMOVE_FROM_CART";var u=function(e){return{type:b,payload:e}},m=c(1),O=function(){var e=Object(l.c)((function(e){return e.data})),t=Object(l.b)();return Object(m.jsx)("div",{className:"mainBots",children:e.map((function(e){return Object(m.jsxs)("div",{className:"eachBot",children:[Object(m.jsx)("h1",{className:"botName",children:e.bot}),Object(m.jsxs)("div",{className:"indexValue",children:[Object(m.jsx)("p",{className:"cargHead",children:"Index value"}),Object(m.jsx)("p",{className:"cargPercent",children:e["index-value"]})]}),Object(m.jsxs)("div",{className:"carg",children:[Object(m.jsx)("h1",{className:"cargHead",children:"CAGR"}),Object(m.jsxs)("p",{className:"cargPercent",children:[e.cagr,"%"]})]}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)(i.b,{to:"/bots-details/".concat(e.id),children:Object(m.jsx)("button",{className:"viewAlgo",children:"View algo"})}),Object(m.jsx)("button",{className:"buy",onClick:function(){return t(j(e))},children:"Buy"}),Object(m.jsx)("button",{className:"remove",onClick:function(){return t(u(e))},children:"Remove"})]})]})}))})},h=(c(35),function(){return Object(m.jsx)("div",{className:"cartvalue",children:Object(m.jsx)(O,{})})}),x=(c(36),function(e){var t=Object(l.c)((function(e){return e.data})),c=e.match.params.id;c=parseInt(c);var a=t.filter((function(e){return e.id===c})),s=Object(l.b)();return Object(m.jsx)("div",{className:" widthClass",children:Object(m.jsxs)("div",{className:"eachBot",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"botName",children:a[0].bot}),Object(m.jsx)("p",{className:"cargPercent",children:a[0].description})]}),Object(m.jsxs)("div",{className:"indexValue",children:[Object(m.jsx)("p",{className:"cargHead",children:"Index value"}),Object(m.jsx)("p",{className:"cargPercent",children:a[0]["index-value"]})]}),Object(m.jsxs)("div",{className:"carg",children:[Object(m.jsx)("h1",{className:"cargHead",children:"CAGR"}),Object(m.jsxs)("p",{className:"cargPercent",children:[a[0].cagr,"%"]})]}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)(i.b,{to:"/bots",children:Object(m.jsx)("button",{className:"viewAlgo",children:"Back"})}),Object(m.jsx)("button",{className:"buy",onClick:function(){return s(j(a[0]))},children:"Buy"}),Object(m.jsx)("button",{className:"remove",onClick:function(){return s(u(a[0]))},children:"Remove"})]})]})})}),p=(c(37),function(){var e=Object(l.c)((function(e){return e.noOfCartItems}));return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"botsWelcome",children:"Welcome To Bots App"}),Object(m.jsxs)("div",{className:"cartvalue",children:[Object(m.jsx)(i.b,{to:"/bots",children:Object(m.jsx)("p",{children:"DashBoard"})}),Object(m.jsxs)("p",{className:"noOfItemsInCart",children:["No of Items In Cart: ",e]}),Object(m.jsx)(i.b,{to:"/cartItems",children:Object(m.jsxs)("div",{className:"cartImageAndText",children:[Object(m.jsx)("img",{alt:"cartImage",src:"https://media.istockphoto.com/photos/shopping-cart-vector-art-closeup-view-picture-id1251362621?b=1&k=20&m=1251362621&s=170667a&w=0&h=dRxDVhO60mUXTb3g5N5EFizNRm8Sq7xDKdmyeBeZTXQ=",className:"cartImage"}),Object(m.jsx)("p",{className:"cartText",children:"OpenCart"})]})})]})]})}),f=(c(38),function(){var e=Object(l.c)((function(e){return e.cartData})),t=0===e.length?Object(m.jsxs)("div",{className:"cartEmptyDiv",children:[Object(m.jsx)("h1",{className:"cartQuantity",children:"Cart Is Empty"}),Object(m.jsx)("img",{src:"https://i.pinimg.com/originals/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.png",alt:"cart is empty",className:"cartEmptyImage"})]}):Object(m.jsx)("h1",{className:"cartFull",children:"Cart"});return Object(m.jsxs)("div",{className:"cartBots",children:[t,e.map((function(e){return Object(m.jsx)("div",{className:"eachCartBot",children:Object(m.jsxs)("div",{className:"eachBot",children:[Object(m.jsx)("p",{className:"cargHead",children:e.bot}),Object(m.jsxs)("div",{className:"indexValue",children:[Object(m.jsx)("p",{className:"cargHead",children:"Index value"}),Object(m.jsx)("p",{className:"cargPercent",children:e["index-value"]})]}),Object(m.jsxs)("div",{className:"carg",children:[Object(m.jsx)("h1",{className:"cargHead",children:"CAGR"}),Object(m.jsxs)("p",{className:"cargPercent",children:[e.cagr,"%"]})]}),Object(m.jsx)("div",{className:"buttons",children:Object(m.jsxs)("h1",{className:"cargHead cartQuantity",children:["Quantity:",e.count]})})]})})}))]})});c(39);var g=function(){return Object(m.jsxs)("div",{className:"pageNotFound",children:[Object(m.jsx)("h1",{className:"botsWelcome",children:"Page not found click on DashBoard"}),Object(m.jsx)("img",{className:"pageNotFoundImage",src:"http://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg",alt:"page not found"})]})};var v=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(i.a,{children:[Object(m.jsx)(p,{}),Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{exact:!0,path:"/bots",component:h}),Object(m.jsx)(o.a,{exact:!0,path:"/bots-details/:id",component:x}),Object(m.jsx)(o.a,{exact:!0,path:"/cartItems",component:f}),Object(m.jsx)(o.a,{component:g})]})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))},C=c(22),I=c(4),y={noOfCartItems:0,data:[{id:1,bot:"Hot Bot",description:"Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics","index-value":289.34,cagr:34},{id:2,bot:"Cool Bot",description:"Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics","index-value":439.34,cagr:28},{id:3,bot:"Options Bot",description:"Options bot is low volatility portfolio of growth stocks selected based on our proprietary metrics","index-value":139.34,cagr:42}],cartData:[]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var c=e.cartData,a=c.filter((function(e){return e.id===t.payload.id})),s=null;if(a.length>0)s=c.map((function(e){return e.id===t.payload.id?Object(I.a)(Object(I.a)({},e),{},{count:e.count+1}):e}));else{var n=Object(I.a)(Object(I.a)({},t.payload),{},{count:1});s=[].concat(Object(C.a)(c),[n])}return console.log(s),Object(I.a)(Object(I.a)({},e),{},{cartData:s,noOfCartItems:e.noOfCartItems+1});case b:var r=e.cartData,i=[];if(r.length>0){var o=r.filter((function(e){return e.id===t.payload.id}));return console.log(o.length),o.length>0?(i=r,o[0].count>1?(i=r.map((function(e){return e.id===t.payload.id?Object(I.a)(Object(I.a)({},e),{},{count:e.count-1}):e})),Object(I.a)(Object(I.a)({},e),{},{cartData:i,noOfCartItems:e.noOfCartItems-1})):(i=r.filter((function(e){return e.id!==t.payload.id})),Object(I.a)(Object(I.a)({},e),{},{cartData:i,noOfCartItems:e.noOfCartItems-1}))):(i=r,alert("Selected Item is not in cart"),Object(I.a)(Object(I.a)({},e),{},{cartData:i,noOfCartItems:e.noOfCartItems}))}return i=r,alert("Cart Is Empty"),Object(I.a)(Object(I.a)({},e),{},{cartData:i,noOfCartItems:e.noOfCartItems});default:return y}},B=c(18),D=c(21),k=c.n(D),A=Object(B.b)(w,Object(B.a)(k.a));console.log(A.getState());var R=A;r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(l.a,{store:R,children:Object(m.jsx)(v,{})})}),document.getElementById("root")),N()}},[[40,1,2]]]);
//# sourceMappingURL=main.117131f7.chunk.js.map