import{m as L,n as R,o as b,p as T,_ as d,q as $,t as p,r as N,v as S,w as U,j as i,x as A,y as M,f as P,L as x,z as X}from"./index-8955b117.js";function F(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function B(t){return parseFloat(t)}function E(t){return L("MuiSkeleton",t)}R("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const K=["animation","className","component","height","style","variant","width"];let h=t=>t,C,v,k,f;const W=t=>{const{classes:n,variant:a,animation:o,hasChildren:s,width:c,height:l}=t;return M({root:["root",a,o,s&&"withChildren",s&&!c&&"fitContent",s&&!l&&"heightAuto"]},E,n)},q=b(C||(C=h`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),z=b(v||(v=h`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),D=T("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:a}=t;return[n.root,n[a.variant],a.animation!==!1&&n[a.animation],a.hasChildren&&n.withChildren,a.hasChildren&&!a.width&&n.fitContent,a.hasChildren&&!a.height&&n.heightAuto]}})(({theme:t,ownerState:n})=>{const a=F(t.shape.borderRadius)||"px",o=B(t.shape.borderRadius);return d({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:$(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},n.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${a}/${Math.round(o/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},n.variant==="circular"&&{borderRadius:"50%"},n.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&p(k||(k=h`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),q),({ownerState:t,theme:n})=>t.animation==="wave"&&p(f||(f=h`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),z,(n.vars||n).palette.action.hover)),O=N.forwardRef(function(n,a){const o=S({props:n,name:"MuiSkeleton"}),{animation:s="pulse",className:c,component:l="span",height:g,style:j,variant:w="text",width:_}=o,m=U(o,K),u=d({},o,{animation:s,component:l,variant:w,hasChildren:!!m.children}),y=W(u);return i.jsx(D,d({as:l,ref:a,className:A(y.root,c),ownerState:u},m,{style:d({width:_,height:g},j)}))}),e=O,V="_collectionCard_m48s1_5",G="_imgContainer_m48s1_15",H="_imgLink_m48s1_19",I="_infoContainer_m48s1_27",J="_infoLink_m48s1_30",Q="_price_m48s1_39",r={collectionCard:V,imgContainer:G,imgLink:H,infoContainer:I,infoLink:J,price:Q},Z=({product:t})=>{const{image:n,title:a,price:o}=t,s=P(),c=()=>{s(X(t))};return i.jsxs("div",{className:r.collectionCard,onClick:c,children:[i.jsx("div",{className:r.imgContainer,children:i.jsx(x,{to:`/shop/${a.split(" ").join("-").toLowerCase()}`,className:r.imgLink,onClick:()=>window.scrollTo({top:0}),children:i.jsx("img",{src:n,alt:a})})}),i.jsxs("div",{className:r.infoContainer,children:[i.jsx(x,{to:`/shop/${a.split(" ").join("-").toLowerCase()}`,className:r.infoLink,onClick:()=>window.scrollTo({top:0}),children:a}),i.jsx("div",{className:r.price,children:o})]})]})},tt=()=>i.jsxs(i.Fragment,{children:[i.jsxs("div",{children:[i.jsx(e,{variant:"rectangular",sx:{width:"100%",height:"45em",backgroundColor:"#cccccc82"}}),i.jsx(e,{variant:"text",sx:{backgroundColor:"#cccccc82",marginTop:"0.8em",height:"3em"}})]}),i.jsxs("div",{children:[i.jsx(e,{variant:"rectangular",sx:{width:"100%",height:"45em",backgroundColor:"#cccccc82"}}),i.jsx(e,{variant:"text",sx:{backgroundColor:"#cccccc82",marginTop:"0.8em",height:"3em"}})]}),i.jsxs("div",{children:[i.jsx(e,{variant:"rectangular",sx:{width:"100%",height:"45em",backgroundColor:"#cccccc82"}}),i.jsx(e,{variant:"text",sx:{backgroundColor:"#cccccc82",marginTop:"0.8em",height:"3em"}})]}),i.jsxs("div",{children:[i.jsx(e,{variant:"rectangular",sx:{width:"100%",height:"45em",backgroundColor:"#cccccc82"}}),i.jsx(e,{variant:"text",sx:{backgroundColor:"#cccccc82",marginTop:"0.8em",height:"3em"}})]}),i.jsxs("div",{children:[i.jsx(e,{variant:"rectangular",sx:{width:"100%",height:"45em",backgroundColor:"#cccccc82"}}),i.jsx(e,{variant:"text",sx:{backgroundColor:"#cccccc82",marginTop:"0.8em",height:"3em"}})]}),i.jsxs("div",{children:[i.jsx(e,{variant:"rectangular",sx:{width:"100%",height:"45em",backgroundColor:"#cccccc82"}}),i.jsx(e,{variant:"text",sx:{backgroundColor:"#cccccc82",marginTop:"0.8em",height:"3em"}})]})]});export{Z as C,tt as a};
