"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[226],{226:(e,t,r)=>{r.r(t),r.d(t,{Component:()=>g,HyperLinkExample:()=>w});var n=r(67538),c=/\b((?:https?|ftp):\/\/[^\s/$.?#].[^\s]*)\b/gi;class a extends n.xO{constructor(e){super(),this.state=void 0,this.state=e}eq(e){return this.state.url===e.state.url&&this.state.at===e.state.at}toDOM(){var e=document.createElement("a");return e.href=this.state.url,e.target="_blank",e.innerHTML='<svg viewBox="0 0 1024 1024" width="16" height="16" fill="currentColor"><path d="M607.934444 417.856853c-6.179746-6.1777-12.766768-11.746532-19.554358-16.910135l-0.01228 0.011256c-6.986111-6.719028-16.47216-10.857279-26.930349-10.857279-21.464871 0-38.864146 17.400299-38.864146 38.864146 0 9.497305 3.411703 18.196431 9.071609 24.947182l-0.001023 0c0.001023 0.001023 0.00307 0.00307 0.005117 0.004093 2.718925 3.242857 5.953595 6.03853 9.585309 8.251941 3.664459 3.021823 7.261381 5.997598 10.624988 9.361205l3.203972 3.204995c40.279379 40.229237 28.254507 109.539812-12.024871 149.820214L371.157763 796.383956c-40.278355 40.229237-105.761766 40.229237-146.042167 0l-3.229554-3.231601c-40.281425-40.278355-40.281425-105.809861 0-145.991002l75.93546-75.909877c9.742898-7.733125 15.997346-19.668968 15.997346-33.072233 0-23.312962-18.898419-42.211381-42.211381-42.211381-8.797363 0-16.963347 2.693342-23.725354 7.297197-0.021489-0.045025-0.044002-0.088004-0.066515-0.134053l-0.809435 0.757247c-2.989077 2.148943-5.691629 4.669346-8.025791 7.510044l-78.913281 73.841775c-74.178443 74.229608-74.178443 195.632609 0 269.758863l3.203972 3.202948c74.178443 74.127278 195.529255 74.127278 269.707698 0l171.829484-171.880649c74.076112-74.17435 80.357166-191.184297 6.282077-265.311575L607.934444 417.856853z"></path><path d="M855.61957 165.804257l-3.203972-3.203972c-74.17742-74.178443-195.528232-74.178443-269.706675 0L410.87944 334.479911c-74.178443 74.178443-78.263481 181.296089-4.085038 255.522628l3.152806 3.104711c3.368724 3.367701 6.865361 6.54302 10.434653 9.588379 2.583848 2.885723 5.618974 5.355985 8.992815 7.309476 0.025583 0.020466 0.052189 0.041956 0.077771 0.062422l0.011256-0.010233c5.377474 3.092431 11.608386 4.870938 18.257829 4.870938 20.263509 0 36.68962-16.428158 36.68962-36.68962 0-5.719258-1.309832-11.132548-3.645017-15.95846l0 0c-4.850471-10.891048-13.930267-17.521049-20.210297-23.802102l-3.15383-3.102664c-40.278355-40.278355-24.982998-98.79612 15.295358-139.074476l171.930791-171.830507c40.179095-40.280402 105.685018-40.280402 145.965419 0l3.206018 3.152806c40.279379 40.281425 40.279379 105.838513 0 146.06775l-75.686796 75.737962c-10.296507 7.628748-16.97358 19.865443-16.97358 33.662681 0 23.12365 18.745946 41.87062 41.87062 41.87062 8.048303 0 15.563464-2.275833 21.944801-6.211469 0.048095 0.081864 0.093121 0.157589 0.141216 0.240477l1.173732-1.083681c3.616364-2.421142 6.828522-5.393847 9.529027-8.792247l79.766718-73.603345C929.798013 361.334535 929.798013 239.981676 855.61957 165.804257z"></path></svg>',e.className="cm-hyper-link-icon",e.rel="nofollow",this.state.anchor&&this.state.anchor(e)||e}}function o(e,t){for(var r,o=[],i=e.state.doc;null!==(r=c.exec(i.toString()));){var s=r.index+r[0].length,l=n.NZ.widget({widget:new a({at:s,url:r[0],anchor:t}),side:1});o.push(l.range(s))}return n.NZ.set(o)}var i=n.Lz.baseTheme({".cm-hyper-link-icon":{display:"inline-block",verticalAlign:"middle",marginLeft:"0.2ch"},".cm-hyper-link-icon svg":{display:"block"},".cm-hyper-link-underline":{textDecoration:"underline"}}),s=[function(e){var{regexp:t,match:r,handle:i,anchor:s}=void 0===e?{}:e;return n.Z9.fromClass(class{constructor(e){this.decorator=void 0,this.decorations=void 0,t?(this.decorator=((e,t,r,o)=>new n.dT({regexp:e||c,decorate:(e,c,i,s,l)=>{var d=s[0],h=r&&"function"===typeof r?r(d,s.input,c,i):d;t&&t[d]&&(h=t[d]);var p=i,u=i,m=new a({at:p,url:h,anchor:o});e(c,i,n.NZ.mark({class:"cm-hyper-link-underline"})),e(p,u,n.NZ.widget({widget:m,side:1}))}}))(t,r,i,s),this.decorations=this.decorator.createDeco(e)):this.decorations=o(e,s)}update(e){(e.docChanged||e.viewportChanged)&&(t&&this.decorator?this.decorations=this.decorator.updateDeco(e,this.decorations):this.decorations=o(e.view,s))}},{decorations:e=>e.decorations})}(),i],l=r(73562),d=r(69332),h=r(98846),p=r(94458);var u=r(55864),m=r(98557);const w=()=>{const{theme:e}=(0,p.D)();return(0,m.jsx)(u.zu,{children:(0,m.jsx)(l.default,{value:'Hyper Link\n====\n\n- https://www.npmjs.com/package/@uiw/react-codemirror this url\n\n[url 1](https://www.npmjs.com)\n[url 2](https://www.npmjs.com/package/@uiw/react-codemirror)\n\n```js\nconst str = "https://www.npmjs.com/package/@uiw/react-codemirror"\n```\n',theme:e,height:"300px !important",style:{margin:"0 0 23px 0"},extensions:[d.cg.markdown(),s]})})},g=()=>(0,m.jsx)(h.lN,{path:()=>r.e(2933).then(r.bind(r,62933)),children:(0,m.jsx)(w,{})})},55864:(e,t,r)=>{r.d(t,{zu:()=>c});var n=r(17234);const c=n.Ay.div`
  flex: 1;
  max-width: 980px;
  padding: 20px 20px 30px 20px;
`;n.Ay.div`
  display: flex;
  flex: 1;
`},94458:(e,t,r)=>{r.d(t,{D:()=>c});var n=r(80905);function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light";const t=document.documentElement.getAttribute("data-color-mode"),[r,c]=(0,n.useState)("dark"===t?"dark":e);return(0,n.useEffect)((()=>{c("dark"===document.documentElement.getAttribute("data-color-mode")?"dark":"light"),document.addEventListener("colorschemechange",(e=>{c(e.detail.colorScheme)}))}),[]),{theme:r,setTheme:c}}}}]);
//# sourceMappingURL=226.68711afb.chunk.js.map