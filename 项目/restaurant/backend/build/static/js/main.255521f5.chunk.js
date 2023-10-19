(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{140:function(e,t,n){e.exports=n(331)},145:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){},194:function(e,t){},331:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(135),o=n.n(c),l=(n(145),n(29)),u=n.n(l),i=u.a.create({baseURL:"/api"}),s=n(136),d=n.n(s);window._=d.a,window.api=i,window.axios=u.a;n(162);var m=n(15),f=n(3),p=function(e){var t={};return{clearCache:function(){t={}},read:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];var c=a.join("|");if(c in t)return t[c];throw e.apply(void 0,a).then((function(e){t[c]=e}))}}},h=(n(163),p((function(e){return i.get("/deskinfo?did="+e)})));function E(e){var t=e.did,n=h.read(t).data;return r.a.createElement("div",null,r.a.createElement("span",null,n.title),"-",r.a.createElement("span",null,n.name))}var b=Object(m.f)((function(e){var t=Object(a.useState)(0),n=Object(f.a)(t,2),c=n[0],o=n[1],l=e.match.params.rid,u=e.match.params.did;return r.a.createElement("div",{className:"LandingPage"},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"\u6b63\u5728\u52a0\u8f7d\u684c\u9762\u4fe1\u606f...")},r.a.createElement(E,{did:u})),r.a.createElement("h2",null,"\u8bf7\u9009\u62e9\u4eba\u6570"),r.a.createElement("ul",{className:"custom-count"},r.a.createElement("li",{className:1===c?"active":null,onClick:function(){return o(1)}},"1"),r.a.createElement("li",{className:2===c?"active":null,onClick:function(){return o(2)}},"2"),r.a.createElement("li",{className:3===c?"active":null,onClick:function(){return o(3)}},"3"),r.a.createElement("li",{className:4===c?"active":null,onClick:function(){return o(4)}},"4")),r.a.createElement("button",{onClick:function(){e.history.push("/r/".concat(l,"/d/").concat(u,"/c/").concat(c))}},"\u5f00\u59cb\u70b9\u9910"))})),g=n(139),v=n(44),O=n(45),y=n(48),j=n(46),k=n(49),w=n(21),x=n(4),C=Object(x.b)(),P=n(47),S=n.n(P),D=(n(197),{float:"left",width:"100px",height:"100px",border:"2px solid"}),N={border:"2px solid",padding:"5px",margin:"5px"};function V(e){var t=e.food,n=e.onUpdate,a=e.amount;return r.a.createElement("div",{style:N},r.a.createElement("h3",null,t.name),r.a.createElement("div",null,r.a.createElement("img",{style:D,src:"http://localhost:5002/upload/"+t.img,alt:t.name}),r.a.createElement("p",null,t.desc),r.a.createElement("p",null,t.price)),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){0!==a&&n(t,a-1)}},"-"),r.a.createElement("span",null,a),r.a.createElement("button",{onClick:function(){n(t,a+1)}},"+")))}function U(e){return e.reduce((function(e,t){return e+t.amount*t.food.price}),0)}function I(e){var t=Object(a.useState)(!1),n=Object(f.a)(t,2),c=n[0],o=n[1],l=U(e.foods);return r.a.createElement("div",{style:{position:"fixed",height:"50px",bottom:"5px",border:"2px solid",left:"5px",right:"5px",backgroundColor:"pink"}},c?r.a.createElement("button",{onClick:function(){return o(!1)}},"\u6536\u8d77"):r.a.createElement("button",{onClick:function(){return o(!0)}},"\u5c55\u5f00"),r.a.createElement("strong",null,"\u603b\u4ef7\uff1a",l),r.a.createElement("button",{onClick:function(){return e.onPlaceOrder()}},"\u4e0b\u5355"))}V.defaultProps={onUpdate:function(){}};var M=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(y.a)(this,Object(j.a)(t).call(this,e))).cartChange=function(e,t){var a=n.props.match.params;n.socket.emit("new food",{desk:"desk:"+a.did,food:e,amount:t})},n.foodChange=function(e,t){var a=Object(w.a)(n.state.cart,(function(n){var a=n.findIndex((function(t){return t.food.id===e.id}));a>=0?0===t?n.splice(a,1):n[a].amount=t:n.push({food:e,amount:t})}));n.setState({cart:a})},n.placeOrder=function(){console.log("\u4e0b\u5355");var e=n.props.match.params;console.log(e),i.post("/restaurant/".concat(e.rid,"/desk/").concat(e.did,"/order"),{deskName:n.state.deskInfo.name,customCount:e.count,totalPrice:U(n.state.cart),foods:n.state.cart}).then((function(t){C.push({pathname:"/r/".concat(e.rid,"/d/").concat(e.did,"/order-success"),state:t.data})}))},n.state={cart:[],foodMenu:[],deskInfo:{}},n}return Object(k.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;i.get("/deskinfo?did="+t.did).then((function(t){e.setState({deskInfo:t.data})})),i.get("/menu/restaurant/1").then((function(t){e.setState({foodMenu:t.data})})),this.socket=S()({path:"/desk",query:{desk:"desk:"+t.did}}),this.socket.on("connect",(function(){console.log("connect on"),e.socket.emit("join desk","desk:"+t.did)})),this.socket.on("cart food",(function(t){console.log("cart init",t),e.setState(Object(w.a)((function(e){var n;(n=e.cart).push.apply(n,Object(g.a)(t))})))})),this.socket.on("new food",(function(t){console.log(t),e.foodChange(t.food,t.amount)})),this.socket.on("placeorder success",(function(e){C.push({pathname:"/r/".concat(t.rid,"/d/").concat(t.did,"/order-success"),state:e})}))}},{key:"componentWillUnmount",value:function(){this.socket.close()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,this.state.foodMenu.map((function(t){var n=0,a=e.state.cart.find((function(e){return e.food.id===t.id}));return a&&(n=a.amount),r.a.createElement(V,{key:t.id,food:t,amount:n,onUpdate:e.cartChange})}))),r.a.createElement(I,{foods:this.state.cart,onUpdate:this.cartChange,onPlaceOrder:this.placeOrder}))}}]),t}(a.Component),R=n(16),W=n.n(R),F=n(31),L=n(6),q=n(14);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach((function(t){Object(q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _={border:"2px solid",margin:"5px",padding:"5px"};function A(e){var t=e.order,n=e.onDelete,c=Object(a.useState)(t),o=Object(f.a)(c,2),l=o[0],u=o[1];return r.a.createElement("div",{style:_},r.a.createElement("h2",null,l.deskName),r.a.createElement("h3",null,"\u603b\u4ef7\u683c\uff1a",l.totalPrice),r.a.createElement("h3",null,"\u4eba\u6570\uff1a",l.customCount),r.a.createElement("h3",null,"\u8ba2\u5355\u72b6\u6001\uff1a",l.status),r.a.createElement("div",null,r.a.createElement("button",null,"\u6253\u5370"),r.a.createElement("button",{onClick:function(){i.put("/restaurant/1/order/".concat(t.id,"/status"),{status:"confirmed"}).then((function(){u(J({},l,{status:"confirmed"}))}))}},"\u786e\u8ba4"),r.a.createElement("button",{onClick:function(){i.put("/restaurant/1/order/".concat(t.id,"/status"),{status:"completed"}).then((function(){u(J({},l,{status:"completed"}))}))}},"\u5b8c\u6210"),r.a.createElement("button",{onClick:function(){i.delete("/restaurant/1/order/".concat(t.id)).then((function(){n(t)}))}},"\u5220\u9664")))}var $=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(y.a)(this,Object(j.a)(t).call(this,e))).onDelete=function(e){var t=n.state.orders.findIndex((function(t){return t.id===e.id}));n.setState(Object(w.a)((function(e){e.orders.splice(t,1)})))},n.state={orders:[]},n}return Object(k.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;this.socket=S()({path:"/restaurant",query:{restaurant:"restaurant:"+t.rid}}),this.socket.on("connect",(function(){e.socket.emit("join restaurant","restaurant:"+t.rid)})),this.socket.on("new order",(function(t){e.setState(Object(w.a)((function(e){e.orders.unshift(t)})))})),i.get("/restaurant/1/order").then((function(t){e.setState(Object(w.a)((function(e){e.orders=t.data})))}))}},{key:"componentWillUnmount",value:function(){this.socket.close()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"\u8ba2\u5355\u7ba1\u7406"),r.a.createElement("div",null,this.state.orders.length>0?this.state.orders.map((function(t){return r.a.createElement(A,{onDelete:e.onDelete,key:t.id,order:t})})):r.a.createElement("div",null,"loading...")))}}]),t}(a.Component);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(n,!0).forEach((function(t){Object(q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H={float:"left",border:"1px solid",width:"100px",height:"100px",objectFit:"cover"},K={overflow:"hidden"},Q={border:"2px solid",padding:"5px",margin:"5px"};function T(e){var t=e.food,n=e.onDelete,c=Object(a.useState)(t),o=Object(f.a)(c,2),l=o[0],u=o[1],s=Object(a.useState)(!1),d=Object(f.a)(s,2),m=d[0],p=d[1],h=Object(a.useState)({name:t.name,desc:t.desc,price:t.price,category:t.category,status:t.status,img:null}),E=Object(f.a)(h,2),b=E[0],g=E[1];function v(e){g(G({},b,Object(q.a)({},e.target.name,e.target.value)))}function O(e){g(G({},b,{img:e.target.files[0]}))}return r.a.createElement("div",{style:Q},r.a.createElement("h3",null,l.name),m?r.a.createElement("div",null,r.a.createElement("form",null,"\u540d\u79f0\uff1a",r.a.createElement("input",{type:"text",onChange:v,defaultValue:l.name,name:"name"}),r.a.createElement("br",null),"\u63cf\u8ff0\uff1a",r.a.createElement("input",{type:"text",onChange:v,defaultValue:l.desc,name:"desc"}),r.a.createElement("br",null),"\u4ef7\u683c\uff1a",r.a.createElement("input",{type:"text",onChange:v,defaultValue:l.price,name:"price"}),r.a.createElement("br",null),"\u5206\u7c7b\uff1a",r.a.createElement("input",{type:"text",onChange:v,defaultValue:l.category,name:"category"}),r.a.createElement("br",null),"\u56fe\u7247\uff1a",r.a.createElement("input",{type:"file",onChange:O,name:"img"}))):r.a.createElement("div",{style:K},r.a.createElement("img",{src:"http://localhost:5002/upload/"+l.img,alt:l.name,style:H}),r.a.createElement("p",null,"\u63cf\u8ff0\uff1a",l.desc),r.a.createElement("p",null,"\u4ef7\u683c\uff1a",l.price),r.a.createElement("p",null,"\u5206\u7c7b\uff1a",l.category?l.category:"[\u6682\u672a\u5206\u7c7b]")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return p(!0)}},"\u4fee\u6539"),r.a.createElement("button",{onClick:function(){var e=new FormData;for(var n in b){var a=b[n];e.append(n,a)}i.put("/restaurant/1/food/"+t.id,e).then((function(e){p(!1),u(e.data)}))}},"\u4fdd\u5b58"),"on"===l.status&&r.a.createElement("button",{onClick:function(){i.put("/restaurant/1/food/"+t.id,G({},b,{status:"off"})).then((function(e){u(e.data)}))}},"\u4e0b\u67b6"),"off"===l.status&&r.a.createElement("button",{onClick:function(){i.put("/restaurant/1/food/"+t.id,G({},b,{status:"on"})).then((function(e){u(e.data)}))}},"\u4e0a\u67b6"),r.a.createElement("button",{onClick:function(){i.delete("/restaurant/1/food/"+t.id).then((function(){n(t.id)}))}},"\u5220\u9664")))}function X(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1];function o(e){c(n.filter((function(t){return t.id!==e})))}return Object(a.useEffect)((function(){i.get("/restaurant/1/food").then((function(e){c(e.data)}))}),[]),console.log(n),r.a.createElement("div",null,r.a.createElement(L.a,{to:"/manage/add-food"},"\u6dfb\u52a0\u83dc\u54c1"),r.a.createElement("div",null,n.map((function(e){return r.a.createElement(T,{onDelete:o,key:e.id,food:e})}))))}var Y=function(){return r.a.createElement("div",null,"desk manage")};function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(n,!0).forEach((function(t){Object(q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te=function(e){var t=Object(a.useState)({name:"",desc:"",price:0,category:"",status:"on",img:null}),n=Object(f.a)(t,2),c=n[0],o=n[1];function l(e){o(ee({},c,Object(q.a)({},e.target.name,e.target.value)))}return r.a.createElement("div",null,r.a.createElement("h2",null,"\u6dfb\u52a0\u83dc\u54c1"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=new FormData;for(var n in c){var a=c[n];t.append(n,a)}i.post("/restaurant/1/food",t).then((function(e){}))}},"\u540d\u79f0\uff1a",r.a.createElement("input",{type:"text",onChange:l,defaultValue:c.name,name:"name"}),r.a.createElement("br",null),"\u63cf\u8ff0\uff1a",r.a.createElement("input",{type:"text",onChange:l,defaultValue:c.desc,name:"desc"}),r.a.createElement("br",null),"\u4ef7\u683c\uff1a",r.a.createElement("input",{type:"text",onChange:l,defaultValue:c.price,name:"price"}),r.a.createElement("br",null),"\u5206\u7c7b\uff1a",r.a.createElement("input",{type:"text",onChange:l,defaultValue:c.category,name:"category"}),r.a.createElement("br",null),"\u56fe\u7247\uff1a",r.a.createElement("input",{type:"file",onChange:function(e){o(ee({},c,{img:e.target.files[0]}))},name:"img"}),r.a.createElement("br",null),r.a.createElement("button",null,"\u63d0\u4ea4")))},ne=p(Object(F.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.get("/userinfo").catch((function(){C.push("/")})));case 1:case"end":return e.stop()}}),e)}))));function ae(){var e=ne.read().data;return r.a.createElement("div",null,e&&"\u6b22\u8fce\uff1a"+e.title)}var re=Object(m.f)((function(e){function t(){return(t=Object(F.a)(W.a.mark((function t(){return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/logout");case 2:ne.clearCache(),e.history.push("/");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return console.log("==============",C==e.history),r.a.createElement("div",null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"loading...")},r.a.createElement(ae,null)),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(L.a,{to:"order"},"\u8ba2\u5355\u7ba1\u7406")),r.a.createElement("li",null,r.a.createElement(L.a,{to:"food"},"\u83dc\u54c1\u7ba1\u7406")),r.a.createElement("li",null,r.a.createElement(L.a,{to:"desk"},"\u684c\u9762\u7ba1\u7406")),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){return t.apply(this,arguments)}},"\u9000\u51fa")))),r.a.createElement("main",null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/restaurant/:rid/manage/order",component:$}),r.a.createElement(m.a,{path:"/restaurant/:rid/manage/food",component:X}),r.a.createElement(m.a,{path:"/restaurant/:rid/manage/desk",component:Y}),r.a.createElement(m.a,{path:"/restaurant/:rid/manage/add-food",component:te}))))})),ce=Object(m.f)((function(e){var t=Object(a.useRef)(),n=Object(a.useRef)(),c=Object(a.useRef)(),o=Object(a.useState)(null),l=Object(f.a)(o,2);l[0],l[1];function u(){return(u=Object(F.a)(W.a.mark((function a(r){var o,l,u,s;return W.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),o=t.current.value,l=n.current.value,u=c.current.value,a.prev=4,a.next=7,i.post("/login",{name:o,password:l,captcha:u});case 7:s=a.sent,e.history.push("/restaurant/".concat(s.data.id,"/manage/")),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(4),alert(a.t0.response.data.msg);case 14:case"end":return a.stop()}}),a,null,[[4,11]])})))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement("h2",null,"\u9910\u5385\u7ba1\u7406\u5458\u767b\u9646"),r.a.createElement("form",{onSubmit:function(e){return u.apply(this,arguments)}},r.a.createElement("input",{type:"text",ref:t}),r.a.createElement("input",{type:"password",ref:n}),r.a.createElement("input",{type:"text",ref:c}),r.a.createElement("img",{src:"/api/captcha",alt:"captcha"}),r.a.createElement("button",null,"Login")))}));console.log(window._);var oe=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(L.a,{to:"/login"},"\u767b\u9646"),r.a.createElement(L.a,{to:"/register"},"\u6ce8\u518c")))},le=function(e){return console.log(e),r.a.createElement("div",null,r.a.createElement("h2",null,"\u4e0b\u5355\u6210\u529f"),r.a.createElement("p",null,"\u603b\u4ef7\uff1a",e.location.state&&e.location.state.totalPrice))};var ue=function(){return r.a.createElement(m.b,{history:C},r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,component:oe}),r.a.createElement(m.a,{path:"/landing/r/:rid/d/:did",component:b}),r.a.createElement(m.a,{path:"/r/:rid/d/:did/c/:count",component:M}),r.a.createElement(m.a,{path:"/r/:rid/d/:did/order-success",component:le}),r.a.createElement(m.a,{path:"/restaurant/:rid/manage/",component:re}),r.a.createElement(m.a,{path:"/login",component:ce})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[140,1,2]]]);
//# sourceMappingURL=main.255521f5.chunk.js.map