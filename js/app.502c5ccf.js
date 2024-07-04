(function(){"use strict";var e={2739:function(e,t,s){var o=s(3751),r=s(641),n=s(33);const a=e=>((0,r.Qi)("data-v-142adb19"),e=e(),(0,r.jt)(),e),c={id:"app"},l={class:"container mb-3"},i=a((()=>(0,r.Lk)("h1",{class:"text-center mt-2"},"Richard's Lessons",-1))),u={class:"d-flex"},d=["disabled"],m=a((()=>(0,r.Lk)("i",{class:"bi bi-bag-plus"},null,-1)));function p(e,t,s,o,a,p){const b=(0,r.g2)("Lesson"),h=(0,r.g2)("Checkout");return(0,r.uX)(),(0,r.CE)("main",c,[(0,r.Lk)("div",l,[i,(0,r.Lk)("div",u,[(0,r.Lk)("button",{class:"btn btn-primary fs-3 p-3 rounded-circle ms-auto",onClick:t[0]||(t[0]=(...e)=>p.showCheckOut&&p.showCheckOut(...e)),disabled:!p.cartSize&&a.showProduct},[(0,r.eW)((0,n.v_)(p.cartSize)+" ",1),m],8,d)]),a.showProduct?((0,r.uX)(),(0,r.Wv)(b,{key:0,lessons:a.lessons,onAddItemToCart:p.addToCart},null,8,["lessons","onAddItemToCart"])):((0,r.uX)(),(0,r.Wv)(h,{key:1,cart:a.cart,onRemoveItemFromCart:p.removeProduct,onCheckout:p.checkout},null,8,["cart","onRemoveItemFromCart","onCheckout"]))])])}s(4114);const b=e=>((0,r.Qi)("data-v-3b3acf00"),e=e(),(0,r.jt)(),e),h={class:"container"},v={class:"d-flex align-items-end gap-3 flex-wrap"},k=b((()=>(0,r.Lk)("label",{for:"sortAttribute"},"Sort By:",-1))),f=(0,r.Fv)('<option value="title" data-v-3b3acf00>Title</option><option value="subject" data-v-3b3acf00>Subject</option><option value="location" data-v-3b3acf00>Location</option><option value="price" data-v-3b3acf00>Price</option><option value="spaces" data-v-3b3acf00>Spaces</option>',5),L=[f],C=b((()=>(0,r.Lk)("label",{for:"sortOrder"},"Sort Order:",-1))),y=b((()=>(0,r.Lk)("option",{value:"asc"},"Ascending",-1))),w=b((()=>(0,r.Lk)("option",{value:"desc"},"Descending",-1))),O=[y,w],g={class:"row"},j={class:"card mb-3 rounded-0 border border-success-subtle"},T={class:"card-header d-flex"},A={class:"card-body"},P={class:"card-footer"},_=["onClick","disabled"],x=["onClick"];function S(e,t,s,a,c,l){return(0,r.uX)(),(0,r.CE)("div",h,[(0,r.Lk)("div",v,[(0,r.Lk)("div",null,[(0,r.bo)((0,r.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>c.searchTerm=e),placeholder:"Search for a lesson..."},null,512),[[o.Jo,c.searchTerm]])]),(0,r.Lk)("div",null,[k,(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>c.sortAttribute=e),class:"form-select"},L,512),[[o.u1,c.sortAttribute]])]),(0,r.Lk)("div",null,[C,(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>c.sortOrder=e),class:"form-select"},O,512),[[o.u1,c.sortOrder]])])]),(0,r.Lk)("div",g,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.lessons,(t=>((0,r.uX)(),(0,r.CE)("div",{class:"col-sm-4",key:t.id},[(0,r.Lk)("div",j,[(0,r.Lk)("div",T,[(0,r.Lk)("div",null,[(0,r.Lk)("p",null,"Subject: "+(0,n.v_)(t.subject),1),(0,r.Lk)("h5",null,"Title: "+(0,n.v_)(t.title),1)]),(0,r.Lk)("i",{class:(0,n.C4)([t.icon,"fs-1 ms-auto"])},null,2)]),(0,r.Lk)("div",A,[(0,r.Lk)("p",null,"Price: "+(0,n.v_)(t.price)+" AED",1),(0,r.Lk)("p",null,"Spaces: "+(0,n.v_)(t.spaces),1),(0,r.Lk)("p",null,"Location: "+(0,n.v_)(t.location),1)]),(0,r.Lk)("div",P,[(0,r.Lk)("button",{class:"btn btn-primary rounded-0",onClick:s=>e.$emit("add-item-to-cart",t),disabled:0===t.spaces}," Add to cart ",8,_),(0,r.Lk)("button",{class:"btn btn-danger rounded-0",onClick:s=>e.$emit("remove-item-from-cart",t)}," X ",8,x)])])])))),128))])])}var E={name:"Lessons",props:["lessons"],data(){return{searchTerm:"",sortAttribute:"subject",sortOrder:"asc"}}},I=s(6262);const U=(0,I.A)(E,[["render",S],["__scopeId","data-v-3b3acf00"]]);var $=U;const X=e=>((0,r.Qi)("data-v-439ce8b2"),e=e(),(0,r.jt)(),e),F={class:"container mt-4"},R={class:"row g-3"},V={class:"col-sm-8 border rounded-3"},z={class:"col-sm-12 mb-4 p-3"},J={class:"row"},Q={class:"col-sm-4"},D={class:"col-sm-4"},W=["onClick"],q={class:"col-sm-4"},K={class:"col-sm-4"},N={class:"container"},B={class:"row justify-content-center"},Z={class:"col-md-12"},G={class:"card"},H={class:"card-body"},M=X((()=>(0,r.Lk)("h5",{class:"card-title"},"User Information",-1))),Y={class:"mb-3"},ee=X((()=>(0,r.Lk)("label",{for:"username",class:"form-label"},"Username",-1))),te={class:"mb-3"},se=X((()=>(0,r.Lk)("label",{for:"phone",class:"form-label"},"Phone Number",-1))),oe=["disabled"];function re(e,t,s,a,c,l){return(0,r.uX)(),(0,r.CE)("div",F,[(0,r.Lk)("div",R,[(0,r.Lk)("div",V,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.cart,(t=>((0,r.uX)(),(0,r.CE)("div",{key:t.lesson.id,class:"border-bottom"},[(0,r.Lk)("div",z,[(0,r.Lk)("div",J,[(0,r.Lk)("div",Q,[(0,r.Lk)("i",{class:(0,n.C4)([t.lesson.icon,"display-1 ms-auto"])},null,2)]),(0,r.Lk)("div",D,[(0,r.Lk)("p",null,"Title: "+(0,n.v_)(t.lesson.title),1),(0,r.Lk)("p",null,"Quantity: "+(0,n.v_)(t.amount),1),(0,r.Lk)("button",{class:"btn btn-danger rounded-0",onClick:s=>e.$emit("remove-item-from-cart",t.lesson)},"X",8,W)]),(0,r.Lk)("div",q,[(0,r.Lk)("p",null,"Price: "+(0,n.v_)(t.lesson.price),1)])])])])))),128))]),(0,r.Lk)("div",K,[(0,r.Lk)("div",N,[(0,r.Lk)("div",B,[(0,r.Lk)("div",Z,[(0,r.Lk)("div",G,[(0,r.Lk)("div",H,[M,(0,r.Lk)("form",{onSubmit:t[2]||(t[2]=(0,o.D$)((t=>e.$emit("checkout")),["prevent"]))},[(0,r.Lk)("div",Y,[ee,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>c.username=e),class:"form-control",id:"username",name:"username",placeholder:"Enter your username",required:""},null,512),[[o.Jo,c.username]])]),(0,r.Lk)("div",te,[se,(0,r.bo)((0,r.Lk)("input",{type:"tel","onUpdate:modelValue":t[1]||(t[1]=e=>c.phonenumber=e),class:"form-control",id:"phone",name:"phone",placeholder:"Enter your phone number",required:""},null,512),[[o.Jo,c.phonenumber]])]),(0,r.Lk)("button",{type:"submit",class:"btn btn-primary",disabled:!l.validateUserCredentials},"Submit",8,oe)],32)])])])])])])])])}var ne={props:["cart"],data(){return{username:"",phonenumber:""}},computed:{validateUserCredentials(){return/^[a-zA-Z]+$/.test(this.username)&&/^\d+$/.test(this.phonenumber)}}};const ae=(0,I.A)(ne,[["render",re],["__scopeId","data-v-439ce8b2"]]);var ce=ae,le={components:{Lesson:$,Checkout:ce},data(){return{showProduct:!0,lessons:[],searchTerm:"",sortAttribute:"subject",sortOrder:"asc",cart:[],username:"",phonenumber:"",backendURL:"https://cst-3145-coursework-2-backend.vercel.app/"}},created(){this.getLessons()},watch:{searchTerm:"getLessons",sortAttribute:"getLessons",sortOrder:"getLessons"},methods:{async getLessons(){const e=`${this.backendURL}lessons/?search=${this.searchTerm}&sort=${this.sortAttribute}&order=${this.sortOrder}`,t=await fetch(e);this.lessons=await t.json()},addToCart(e){if(e.spaces>0){e.spaces--;const t=this.cart.findIndex((t=>t.lesson===e));t>-1?this.cart[t].amount++:this.cart.push({lesson:e,amount:1})}},removeProduct(e){const t=this.cart.findIndex((t=>t.lesson===e));-1!==t&&(this.cart[t].amount--,e.spaces++,0==this.cart[t].amount&&this.cart.splice(t,1))},async checkout(){const e={lessons:[...this.cart],username:this.username,phonenumber:this.phonenumber};await fetch(`${this.backendURL}orders`,{method:"POST",headers:{"content-Type":"application/json"},body:JSON.stringify(e)}),alert("Order successful!"),this.showProduct=!0},showCheckOut(){this.showProduct=!this.showProduct}},computed:{cartSize(){return this.cart.reduce(((e,t)=>e+t.amount),0)}}};const ie=(0,I.A)(le,[["render",p],["__scopeId","data-v-142adb19"]]);var ue=ie;(0,o.Ef)(ue).mount("#app")}},t={};function s(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,o,r,n){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],n=e[u][2];for(var c=!0,l=0;l<o.length;l++)(!1&n||a>=n)&&Object.keys(s.O).every((function(e){return s.O[e](o[l])}))?o.splice(l--,1):(c=!1,n<a&&(a=n));if(c){e.splice(u--,1);var i=r();void 0!==i&&(t=i)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[o,r,n]}}(),function(){s.d=function(e,t){for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,n,a=o[0],c=o[1],l=o[2],i=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)s.o(c,r)&&(s.m[r]=c[r]);if(l)var u=l(s)}for(t&&t(o);i<a.length;i++)n=a[i],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(u)},o=self["webpackChunkafterschool"]=self["webpackChunkafterschool"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=s.O(void 0,[504],(function(){return s(2739)}));o=s.O(o)})();
//# sourceMappingURL=app.502c5ccf.js.map