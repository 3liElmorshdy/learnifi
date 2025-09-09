import{r as c}from"./router-CwybhznX.js";var C={exports:{}},E={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P;function q(){if(P)return E;P=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function a(n,i,r){var o=null;if(r!==void 0&&(o=""+r),i.key!==void 0&&(o=""+i.key),"key"in i){r={};for(var s in i)s!=="key"&&(r[s]=i[s])}else r=i;return i=r.ref,{$$typeof:e,type:n,key:o,ref:i!==void 0?i:null,props:r}}return E.Fragment=t,E.jsx=a,E.jsxs=a,E}var N;function J(){return N||(N=1,C.exports=q()),C.exports}var _e=J();let H={data:""},L=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||H,Y=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,U=/\/\*[^]*?\*\/|  +/g,z=/\n+/g,v=(e,t)=>{let a="",n="",i="";for(let r in e){let o=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+o+";":n+=r[1]=="f"?v(o,r):r+"{"+v(o,r[1]=="k"?"":t)+"}":typeof o=="object"?n+=v(o,t?t.replace(/([^,])+/g,s=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,s):s?s+" "+l:l)):r):o!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=v.p?v.p(r,o):r+":"+o+";")}return a+(t&&i?t+"{"+i+"}":i)+n},g={},S=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+S(e[a]);return t}return e},V=(e,t,a,n,i)=>{let r=S(e),o=g[r]||(g[r]=(l=>{let d=0,u=11;for(;d<l.length;)u=101*u+l.charCodeAt(d++)>>>0;return"go"+u})(r));if(!g[o]){let l=r!==e?e:(d=>{let u,f,m=[{}];for(;u=Y.exec(d.replace(U,""));)u[4]?m.shift():u[3]?(f=u[3].replace(z," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][u[1]]=u[2].replace(z," ").trim();return m[0]})(e);g[o]=v(i?{["@keyframes "+o]:l}:l,a?"":"."+o)}let s=a&&g.g?g.g:null;return a&&(g.g=g[o]),((l,d,u,f)=>{f?d.data=d.data.replace(f,l):d.data.indexOf(l)===-1&&(d.data=u?l+d.data:d.data+l)})(g[o],t,n,s),o},Z=(e,t,a)=>e.reduce((n,i,r)=>{let o=t[r];if(o&&o.call){let s=o(a),l=s&&s.props&&s.props.className||/^go/.test(s)&&s;o=l?"."+l:s&&typeof s=="object"?s.props?"":v(s,""):s===!1?"":s}return n+i+(o??"")},"");function O(e){let t=this||{},a=e.call?e(t.p):e;return V(a.unshift?a.raw?Z(a,[].slice.call(arguments,1),t.p):a.reduce((n,i)=>Object.assign(n,i&&i.call?i(t.p):i),{}):a,L(t.target),t.g,t.o,t.k)}let M,T,_;O.bind({g:1});let h=O.bind({k:1});function B(e,t,a,n){v.p=t,M=e,T=a,_=n}function b(e,t){let a=this||{};return function(){let n=arguments;function i(r,o){let s=Object.assign({},r),l=s.className||i.className;a.p=Object.assign({theme:T&&T()},s),a.o=/ *go\d+/.test(l),s.className=O.apply(a,n)+(l?" "+l:"");let d=e;return e[0]&&(d=s.as||e,delete s.as),_&&d[0]&&_(s),M(d,s)}return i}}var G=e=>typeof e=="function",D=(e,t)=>G(e)?e(t):e,W=(()=>{let e=0;return()=>(++e).toString()})(),F=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),X=20,I=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,X)};case 1:return{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:a}=t;return I(e,{type:e.toasts.find(r=>r.id===a.id)?1:0,toast:a});case 3:let{toastId:n}=t;return{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,dismissed:!0,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+i}))}}},R=[],x={toasts:[],pausedAt:void 0},w=e=>{x=I(x,e),R.forEach(t=>{t(x)})},Q={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},K=(e={})=>{let[t,a]=c.useState(x),n=c.useRef(x);c.useEffect(()=>(n.current!==x&&a(x),R.push(a),()=>{let r=R.indexOf(a);r>-1&&R.splice(r,1)}),[]);let i=t.toasts.map(r=>{var o,s,l;return{...e,...e[r.type],...r,removeDelay:r.removeDelay||((o=e[r.type])==null?void 0:o.removeDelay)||e?.removeDelay,duration:r.duration||((s=e[r.type])==null?void 0:s.duration)||e?.duration||Q[r.type],style:{...e.style,...(l=e[r.type])==null?void 0:l.style,...r.style}}});return{...t,toasts:i}},ee=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:a?.id||W()}),k=e=>(t,a)=>{let n=ee(t,e,a);return w({type:2,toast:n}),n.id},p=(e,t)=>k("blank")(e,t);p.error=k("error");p.success=k("success");p.loading=k("loading");p.custom=k("custom");p.dismiss=e=>{w({type:3,toastId:e})};p.remove=e=>w({type:4,toastId:e});p.promise=(e,t,a)=>{let n=p.loading(t.loading,{...a,...a?.loading});return typeof e=="function"&&(e=e()),e.then(i=>{let r=t.success?D(t.success,i):void 0;return r?p.success(r,{id:n,...a,...a?.success}):p.dismiss(n),i}).catch(i=>{let r=t.error?D(t.error,i):void 0;r?p.error(r,{id:n,...a,...a?.error}):p.dismiss(n)}),e};var te=(e,t)=>{w({type:1,toast:{id:e,height:t}})},re=()=>{w({type:5,time:Date.now()})},$=new Map,ae=1e3,se=(e,t=ae)=>{if($.has(e))return;let a=setTimeout(()=>{$.delete(e),w({type:4,toastId:e})},t);$.set(e,a)},ie=e=>{let{toasts:t,pausedAt:a}=K(e);c.useEffect(()=>{if(a)return;let r=Date.now(),o=t.map(s=>{if(s.duration===1/0)return;let l=(s.duration||0)+s.pauseDuration-(r-s.createdAt);if(l<0){s.visible&&p.dismiss(s.id);return}return setTimeout(()=>p.dismiss(s.id),l)});return()=>{o.forEach(s=>s&&clearTimeout(s))}},[t,a]);let n=c.useCallback(()=>{a&&w({type:6,time:Date.now()})},[a]),i=c.useCallback((r,o)=>{let{reverseOrder:s=!1,gutter:l=8,defaultPosition:d}=o||{},u=t.filter(y=>(y.position||d)===(r.position||d)&&y.height),f=u.findIndex(y=>y.id===r.id),m=u.filter((y,A)=>A<f&&y.visible).length;return u.filter(y=>y.visible).slice(...s?[m+1]:[0,m]).reduce((y,A)=>y+(A.height||0)+l,0)},[t]);return c.useEffect(()=>{t.forEach(r=>{if(r.dismissed)se(r.id,r.removeDelay);else{let o=$.get(r.id);o&&(clearTimeout(o),$.delete(r.id))}})},[t]),{toasts:t,handlers:{updateHeight:te,startPause:re,endPause:n,calculateOffset:i}}},oe=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ne=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,le=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,de=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${oe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ne} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${le} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ce=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ue=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ce} 1s linear infinite;
`,pe=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,me=h`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,fe=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${me} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ye=b("div")`
  position: absolute;
`,ge=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,he=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ve=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${he} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,be=({toast:e})=>{let{icon:t,type:a,iconTheme:n}=e;return t!==void 0?typeof t=="string"?c.createElement(ve,null,t):t:a==="blank"?null:c.createElement(ge,null,c.createElement(ue,{...n}),a!=="loading"&&c.createElement(ye,null,a==="error"?c.createElement(de,{...n}):c.createElement(fe,{...n})))},xe=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,we=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ee="0%{opacity:0;} 100%{opacity:1;}",$e="0%{opacity:1;} 100%{opacity:0;}",ke=b("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,je=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Re=(e,t)=>{let a=e.includes("top")?1:-1,[n,i]=F()?[Ee,$e]:[xe(a),we(a)];return{animation:t?`${h(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},De=c.memo(({toast:e,position:t,style:a,children:n})=>{let i=e.height?Re(e.position||t||"top-center",e.visible):{opacity:0},r=c.createElement(be,{toast:e}),o=c.createElement(je,{...e.ariaProps},D(e.message,e));return c.createElement(ke,{className:e.className,style:{...i,...a,...e.style}},typeof n=="function"?n({icon:r,message:o}):c.createElement(c.Fragment,null,r,o))});B(c.createElement);var Oe=({id:e,className:t,style:a,onHeightUpdate:n,children:i})=>{let r=c.useCallback(o=>{if(o){let s=()=>{let l=o.getBoundingClientRect().height;n(e,l)};s(),new MutationObserver(s).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return c.createElement("div",{ref:r,className:t,style:a},i)},Ae=(e,t)=>{let a=e.includes("top"),n=a?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:F()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...n,...i}},Ce=O`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,j=16,Pe=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:n,children:i,containerStyle:r,containerClassName:o})=>{let{toasts:s,handlers:l}=ie(a);return c.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:j,left:j,right:j,bottom:j,pointerEvents:"none",...r},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},s.map(d=>{let u=d.position||t,f=l.calculateOffset(d,{reverseOrder:e,gutter:n,defaultPosition:t}),m=Ae(u,f);return c.createElement(Oe,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Ce:"",style:m},d.type==="custom"?D(d.message,d):i?i(d):c.createElement(De,{toast:d,position:u}))}))},Ne=p;export{Pe as O,Ne as V,_e as j};
