"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[7889],{55864:(e,t,n)=>{n.d(t,{zu:()=>d});var l=n(17234);const d=l.Ay.div`
  flex: 1;
  max-width: 980px;
  padding: 20px 20px 30px 20px;
`;l.Ay.div`
  display: flex;
  flex: 1;
`},27889:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>p,ThemesAllExample:()=>x});var l=n(80905),d=n(28169),s=n(73562),o=n(13529),a=n(69332),c=n(17234),r=n(98846),i=n(94458),h=n(55864),m=n(98557);const u=c.Ay.div`
  padding: 0 0 23px 0;
`,x=()=>{const e={};Object.keys(o).filter((e=>"function"!==typeof o[e])).filter((e=>!/^(defaultSettings)/.test(e))).forEach((t=>{e[t]=o[t]}));const[t,n]=(0,l.useState)(),c=(0,i.D)(),x=e[t]?e[t]:c.theme,p=(0,l.useContext)(r.pX);return(0,m.jsxs)(h.zu,{children:[(0,m.jsx)(s.default,{value:p.mdstr,theme:x,height:"300px !important",style:{margin:"0 0 23px 0"},extensions:[a.cg.markdown()]}),(0,m.jsxs)(u,{children:["Select Theme:",(0,m.jsxs)("select",{value:t,onChange:e=>{n(e.target.value)},children:[(0,m.jsx)("option",{children:"Select Theme"}),Object.keys(e).map(((e,t)=>(0,m.jsx)("option",{children:e},t)))]}),(0,m.jsx)("br",{}),(0,m.jsx)(d.N_,{to:"/theme/home",children:"All Theme Example"})]})]})},p=()=>(0,m.jsx)(r.lN,{path:()=>n.e(7363).then(n.bind(n,77363)),children:(0,m.jsx)(x,{})})},94458:(e,t,n)=>{n.d(t,{D:()=>d});var l=n(80905);function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light";const t=document.documentElement.getAttribute("data-color-mode"),[n,d]=(0,l.useState)("dark"===t?"dark":e);return(0,l.useEffect)((()=>{d("dark"===document.documentElement.getAttribute("data-color-mode")?"dark":"light"),document.addEventListener("colorschemechange",(e=>{d(e.detail.colorScheme)}))}),[]),{theme:n,setTheme:d}}}}]);
//# sourceMappingURL=7889.eea1925c.chunk.js.map