import{r as e}from"./index.f1bc5ebf.js";import{u as L,s as v,a as $,P as U,L as b}from"./motion.e3ea24f3.js";import{j}from"./jsx-runtime.109e40f8.js";function M(){const n=e.useRef(!1);return L(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function A(){const n=M(),[o,t]=e.useState(0),r=e.useCallback(()=>{n.current&&t(o+1)},[o]);return[e.useCallback(()=>v.postRender(r),[r]),o]}class K extends e.Component{getSnapshotBeforeUpdate(o){const t=this.props.childRef.current;if(t&&o.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function O({children:n,isPresent:o}){const t=e.useId(),r=e.useRef(null),m=e.useRef({width:0,height:0,top:0,left:0});return e.useInsertionEffect(()=>{const{width:a,height:f,top:u,left:h}=m.current;if(o||!r.current||!a||!f)return;r.current.dataset.motionPopId=t;const d=document.createElement("style");return document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${f}px !important;
            top: ${u}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[o]),e.createElement(K,{isPresent:o,childRef:r,sizeRef:m},e.cloneElement(n,{ref:r}))}const y=({children:n,initial:o,isPresent:t,onExitComplete:r,custom:m,presenceAffectsLayout:a,mode:f})=>{const u=$(S),h=e.useId(),d=e.useMemo(()=>({id:h,initial:o,isPresent:t,custom:m,onExitComplete:i=>{u.set(i,!0);for(const c of u.values())if(!c)return;r&&r()},register:i=>(u.set(i,!1),()=>u.delete(i))}),a?void 0:[t]);return e.useMemo(()=>{u.forEach((i,c)=>u.set(c,!1))},[t]),e.useEffect(()=>{!t&&!u.size&&r&&r()},[t]),f==="popLayout"&&(n=e.createElement(O,{isPresent:t},n)),e.createElement(U.Provider,{value:d},n)};function S(){return new Map}function B(n){return e.useEffect(()=>()=>n(),[])}const E=n=>n.key||"";function G(n,o){n.forEach(t=>{const r=E(t);o.set(r,t)})}function T(n){const o=[];return e.Children.forEach(n,t=>{e.isValidElement(t)&&o.push(t)}),o}const W=({children:n,custom:o,initial:t=!0,onExitComplete:r,exitBeforeEnter:m,presenceAffectsLayout:a=!0,mode:f="sync"})=>{let[u]=A();const h=e.useContext(b).forceRender;h&&(u=h);const d=M(),i=T(n);let c=i;const l=new Set,R=e.useRef(c),x=e.useRef(new Map).current,C=e.useRef(!0);if(L(()=>{C.current=!1,G(i,x),R.current=c}),B(()=>{C.current=!0,x.clear(),l.clear()}),C.current)return e.createElement(e.Fragment,null,c.map(s=>e.createElement(y,{key:E(s),isPresent:!0,initial:t?void 0:!1,presenceAffectsLayout:a,mode:f},s)));c=[...c];const g=R.current.map(E),w=i.map(E),I=g.length;for(let s=0;s<I;s++){const p=g[s];w.indexOf(p)===-1&&l.add(p)}return f==="wait"&&l.size&&(c=[]),l.forEach(s=>{if(w.indexOf(s)!==-1)return;const p=x.get(s);if(!p)return;const P=g.indexOf(s),z=()=>{x.delete(s),l.delete(s);const k=R.current.findIndex(F=>F.key===s);if(R.current.splice(k,1),!l.size){if(R.current=i,d.current===!1)return;u(),r&&r()}};c.splice(P,0,e.createElement(y,{key:E(p),isPresent:!1,onExitComplete:z,custom:o,presenceAffectsLayout:a,mode:f},p))}),c=c.map(s=>{const p=s.key;return l.has(p)?s:e.createElement(y,{key:E(s),isPresent:!0,presenceAffectsLayout:a,mode:f},s)}),e.createElement(e.Fragment,null,l.size?c:c.map(s=>e.cloneElement(s)))},_=()=>j.jsx("img",{src:"src/assets/images/logo.png",width:"40",height:"40"});export{W as A,_ as L};
