"use strict";(self["webpackChunkvue_demo_gather"]=self["webpackChunkvue_demo_gather"]||[]).push([[562],{33562:function(e,t,l){l.r(t),l.d(t,{default:function(){return j}});l(57658);var a=l(73396),s=l(44870),n=l(87139);l(81037);const i=e=>((0,a.dD)("data-v-10c565c1"),e=e(),(0,a.Cn)(),e),u={class:"select"},c={class:"s select-box"},o={class:"s select-head"},r=["value"],v=i((()=>(0,a._)("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("path",{fill:"currentColor",d:"m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"})],-1))),d=[v],p=i((()=>(0,a._)("div",{class:"select-bar"},[(0,a._)("span")],-1))),f={class:"select-value-body"},g={class:"s search-input"},_=i((()=>(0,a._)("i",{class:"s"},null,-1))),h=["onClick"],y={key:1,class:"none"};var m={__name:"SelectInfinite",props:{arr:{type:Array,default:()=>[]},itemSize:{type:Number,default:34},end:{type:Number,default:0},start:{type:Number,default:0},substitute:{type:Object,default:()=>({key:"id",title:"title",content:"content"})},scrollTopBtnPos:{type:Number,default:200},visListHeight:{type:Number,default:150}},setup(e){const t=e;(0,s.iH)("");let l=0,i=(0,s.qj)(0),v=(0,s.iH)(t.start),m=(0,s.iH)(t.end),b=(0,s.qj)(t.itemSize),k=(0,s.iH)(),w=(0,s.iH)(t.visListHeight),H=(0,s.iH)(!1),S=(0,s.iH)(""),x=(0,s.iH)(""),j=(0,s.iH)(),C=(0,s.iH)(t.arr);function D(){return C.value.length*b}function U(){return`translate3d(0,${i}px,0)`}const z=(0,a.Fl)({get:()=>t.arr.slice(v.value,Math.min(m.value,C.value.length))});function $(e){const t=k.value.scrollTop;v.value=Math.floor(t/b),m.value=v.value+l,i=t-t%b}const L=(0,a.Fl)({get:()=>(console.log(b*z.value.length+"px"),b*z.value.length+"px")});function N(e){e.stopPropagation(),x.value&&x.value.focus(),H.value=!H.value}function I(e){S.value=e.value}function q(e){let l=e.target.value;l?(C.value=C.value.filter((e=>{var t=new RegExp(l);return t.test(e.content)})),console.log(C.value)):C.value=t.arr}return(0,a.bv)((()=>{document.onclick=function(e){e.target.classList.contains("s")||(H.value=!1)},l=Math.ceil(w.value/b),C.value.length<l?m.value=v.value+C.value.length:m.value=v.value+l})),(t,l)=>((0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("div",c,[(0,a._)("div",o,[(0,a._)("input",{ref_key:"input_s",ref:x,value:(0,s.SU)(S),onClick:N},null,8,r),(0,a._)("i",{class:"s inputIcon",onClick:N,style:(0,n.j5)({transform:`rotate(${(0,s.SU)(H)?"180deg":"0deg"})`})},d,4)]),(0,a._)("div",{class:"s select-body",style:(0,n.j5)({display:(0,s.SU)(H)?"block":"none",top:"auto"})},[p,(0,a._)("div",f,[(0,a._)("div",g,[(0,a._)("input",{ref_key:"search_input",ref:j,onChange:q,class:"s",type:"text",placeholder:"搜索"},null,544),_]),(0,a._)("div",{class:"s value-body",ref_key:"_$refs",ref:k,onScroll:$,style:(0,n.j5)({height:(0,s.SU)(L)})},[(0,a._)("div",{class:"infinite-list-phantom",style:(0,n.j5)({height:`${D()}px`})},null,4),(0,s.SU)(z).length?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"select-list-body",style:(0,n.j5)({transform:U()})},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,s.SU)(z),((t,l)=>((0,a.wg)(),(0,a.iD)("li",{onClick:e=>I(t),key:l,style:(0,n.j5)({height:e.itemSize-2+"px"})},(0,n.zw)(t.title),13,h)))),128))],4)):((0,a.wg)(),(0,a.iD)("div",y,"暂无匹配选项"))],36)])],4)])]))}},b=l(40089);const k=(0,b.Z)(m,[["__scopeId","data-v-10c565c1"]]);var w=k;const H={class:"box_L"};var S={__name:"Index",setup(e){let t=(0,s.qj)([]);for(let l=0;l<2e4;l++)t.push({id:l,value:l,title:`坤坤吃了 ${l} /碗`,content:`坤坤吃了 ${l} /碗`});return(e,l)=>((0,a.wg)(),(0,a.iD)("div",H,[(0,a.Wm)((0,s.SU)(w),{arr:(0,s.SU)(t)},{content:(0,a.w5)((({itemData:e})=>[(0,a._)("div",null,(0,n.zw)(e.title),1)])),_:1},8,["arr"])]))}};const x=S;var j=x}}]);
//# sourceMappingURL=562.f31be601.js.map