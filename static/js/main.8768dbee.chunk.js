(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{45:function(e,t,n){e.exports=n(56)},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),o=n.n(c),u=n(13),i=n(3),l=n(30),s=n(62),m=n(61),d=n(6),p=n(60),h=Object(d.a)({},p.a),f=n(21),E=n(43),O=function(e){return{type:"ADD_PRODUCT_TO_CART",payload:e}},b=function(e){return{type:"TOGGLE_IS_PRODUCTS_FETCHING",payload:e}},g=function(e){return{type:"TOGGLE_IS_PRODUCT_ADDING",payload:e}},_={items:[],isOrderSubmitting:!1,isProductsFetching:!1,isProductAdding:!1,isProductRemoving:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRODUCT_TO_CART":return Object(d.a)({},e,{items:[].concat(Object(E.a)(e.items),[t.payload])});case"REMOVE_PRODUCT_FROM_CART":var n=e.items,a=n.indexOf(t.payload);return Object(d.a)({},e,{items:n.filter((function(e,t){return t!==a}))});case"FETCH_CART_ITEMS":return Object(d.a)({},e,{items:t.payload});case"TOGGLE_IS_ORDER_SUBMITTING":return Object(d.a)({},e,{isOrderSubmitting:t.payload});case"TOGGLE_IS_PRODUCTS_FETCHING":return Object(d.a)({},e,{isProductsFetching:t.payload});case"TOGGLE_IS_PRODUCT_ADDING":return Object(d.a)({},e,{isProductAdding:t.payload});case"TOGGLE_IS_PRODUCT_REMOVING":return Object(d.a)({},e,{isProductRemoving:t.payload});default:return e}},v=function(e){return{type:"FETCH_NEW_PRODUCTS",payload:e}},w=function(e){return{type:"TOGGLE_IS_PRODUCTS_FETCHING",payload:e}},y={products:[],isProductsFetching:!1,isProductsAddingToCart:!1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_NEW_PRODUCTS":return Object(d.a)({},e,{products:t.payload});case"TOGGLE_IS_PRODUCTS_FETCHING":return Object(d.a)({},e,{isProductsFetching:t.payload});default:return e}},P=n(39),I=Object(f.c)({home:C,cart:T}),x=Object(f.d)(I,Object(f.a)(P.a)),G=n(44),j=n(31),R=function(){return r.a.createElement(j.a,null,"Footer")},S=n(58),D=function(e){var t=e.width,n=e.textColor,a=e.children;return r.a.createElement(S.a,{justify:"space-between",align:"center",w:t||"100%",h:"3.5em",p:"1em",boxSizing:"border-box",color:n||"gray.900"},a)},F=function(){return r.a.createElement(D,null,r.a.createElement(u.b,{to:"/"},"Home"),r.a.createElement(u.b,{to:"/women"},"Women"),r.a.createElement(u.b,{to:"/house_and_home"},"House&Home"),r.a.createElement(u.b,{to:"/cart"},"Cart"))},H=n(59),A=function(e){var t=e.size;return r.a.createElement(j.a,{w:(null===t||void 0===t?void 0:t.x)||"50px",h:(null===t||void 0===t?void 0:t.y)||"50px"},r.a.createElement(H.a,{w:"100%",h:"100%",src:"https://fakeimg.pl/120/bbbbbb",alt:"logo"}))},U=function(){return r.a.createElement(S.a,{px:[0,0,0,20],justify:"space-between",pos:"fixed",zIndex:1,w:"100%",shadow:"inset 0 40px 70px -60px black"},r.a.createElement(u.b,{to:"/"},r.a.createElement(A,{size:{x:"120px",y:"60px"}})),r.a.createElement(F,null))},L=function(){return r.a.createElement(U,null)},N=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),t,r.a.createElement(R,null))},k=function(e){var t=e.height,n=e.cover;return r.a.createElement(S.a,{align:"center",justify:"center",w:"100%",h:t,overflow:"hidden"},r.a.createElement("img",{width:"100%",src:n,alt:"cover"}))},M=function(){return r.a.createElement(N,null,r.a.createElement(k,{height:"85vh",cover:"https://fakeimg.pl/1000"}),"some goods")},W=function(e){var t=e.fetchProducts,n=e.fetchCartItems,c=e.cartItemsLength,o=Object(G.a)(e,["fetchProducts","fetchCartItems","cartItemsLength"]);return Object(a.useEffect)((function(){0===o.products.length&&t(),0===c&&n()}),[]),r.a.createElement(M,o)},z=n(9),B=n.n(z),J=n(17),V=Object(l.b)((function(e){var t=e.home,n=e.cart;return{products:t.products,cartItemsLength:n.items.length,isProductsFetching:t.isProductsFetching,isProductAddingToCart:n.isProductAdding}}),{addToCart:function(e){return function(){var t=Object(J.a)(B.a.mark((function t(n){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(g(!0)),n(O(e)),n(g(!1));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fetchProducts:function(){return function(){var e=Object(J.a)(B.a.mark((function e(t){var n,a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0)),e.next=3,new Promise((function(e){setTimeout((function(){var t=localStorage.getItem("all");e(t)}),2e3)}));case 3:n=e.sent,a=JSON.parse(n),t(w(!1)),t(v(a));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},fetchCartItems:function(){return function(){var e=Object(J.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(b(!0)),t(b(!1));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(W),$=function(){return r.a.createElement(N,null,"Here will be a cart page")},q=function(){return r.a.createElement(N,null,"Here will be a HouseAndHome page")},K=function(){return r.a.createElement(N,null,"Here will be a Women page")},Q=function(){return r.a.createElement(s.a,{theme:h},r.a.createElement(m.a,null),r.a.createElement(l.a,{store:x},r.a.createElement(u.a,{basename:"/shop"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(V,null)),r.a.createElement(i.a,{exact:!0,path:"/cart"},r.a.createElement($,null)),r.a.createElement(i.a,{exact:!0,path:"/house_and_home"},r.a.createElement(q,null)),r.a.createElement(i.a,{exact:!0,path:"/women"},r.a.createElement(K,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.8768dbee.chunk.js.map