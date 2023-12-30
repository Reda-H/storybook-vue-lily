import{r as f,k as c,o as a,d as m,t as y,n as _,l as C,m as h,e as l,p as d,j as r,q as i,s as z}from"./vue.esm-bundler-z4tZDdl6.js";import{_ as p}from"./_plugin-vue_export-helper-x3n3nnut.js";const g={name:"my-button",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,validator:function(e){return["small","medium","large"].indexOf(e)!==-1}},backgroundColor:{type:String}},emits:["click"],setup(e,{emit:t}){return e=f(e),{classes:c(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size||"medium"}`]:!0})),style:c(()=>({backgroundColor:e.backgroundColor})),onClick(){t("click")}}}};function B(e,t,o,n,v,k){return a(),m("button",{type:"button",class:_(n.classes),onClick:t[0]||(t[0]=(...s)=>n.onClick&&n.onClick(...s)),style:C(n.style)},y(o.label),7)}const A=p(g,[["render",B]]);g.__docgenInfo={displayName:"my-button",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"backgroundColor",type:{name:"string"}}],events:[{name:"click"}],sourceFiles:["C:/Users/Reda Herradi/Documents/repos/vite/lydia/src/stories/Button.vue"]};const b={name:"my-header",components:{MyButton:A},props:{user:{type:Object}},emits:["login","logout","createAccount"]},N={class:"storybook-header"},V=z('<div><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF"></path><path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9"></path><path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8"></path></g></svg><h1>Acme</h1></div>',1),w={key:0,class:"welcome"};function x(e,t,o,n,v,k){const s=h("my-button");return a(),m("header",null,[l("div",N,[V,l("div",null,[o.user?(a(),m("span",w,[d("Welcome, "),l("b",null,y(o.user.name),1),d("!")])):r("",!0),o.user?(a(),i(s,{key:1,size:"small",onClick:t[0]||(t[0]=u=>e.$emit("logout")),label:"Log out"})):r("",!0),o.user?r("",!0):(a(),i(s,{key:2,size:"small",onClick:t[1]||(t[1]=u=>e.$emit("login")),label:"Log in"})),o.user?r("",!0):(a(),i(s,{key:3,primary:"",size:"small",onClick:t[2]||(t[2]=u=>e.$emit("createAccount")),label:"Sign up"}))])])])}const $=p(b,[["render",x]]);b.__docgenInfo={displayName:"my-header",exportName:"default",description:"",tags:{},props:[{name:"user",type:{name:"object"}}],events:[{name:"logout"},{name:"login"},{name:"createAccount"}],sourceFiles:["C:/Users/Reda Herradi/Documents/repos/vite/lydia/src/stories/Header.vue"]};export{$ as M};
