"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1122],{41122:(e,n,t)=>{t.r(n),t.d(n,{Component:()=>f});var r=t(80905),o=t(67538),i=t(8070),s=t(27406),a=t(98557);const l=s.default.Original,d=s.default.Modified;let c="one\ntwo\nthree\nfour\nfive";const u=o.Z9.fromClass(class{update(e){e.docChanged&&console.log("Document changed! test 1")}}),h=o.Z9.fromClass(class{update(e){e.docChanged&&console.log("Document changed! test 2")}});function f(){return(0,a.jsx)(r.Fragment,{children:(0,a.jsx)(g,{})})}function g(){const[e,n]=(0,r.useState)(c),[t,o]=(0,r.useState)(c),f=(0,r.useRef)(null);return(0,a.jsxs)("div",{style:{width:"100%"},children:[(0,a.jsx)("div",{children:(0,a.jsx)("button",{onClick:()=>{var e,n;null===(e=f.current)||void 0===e||null===(n=e.view)||void 0===n||n.a.dispatch({effects:i.Pe.appendConfig.of([h])})},children:"Add extension 2"})}),(0,a.jsxs)(s.default,{ref:f,destroyRerender:!1,children:[(0,a.jsx)(l,{value:e,extensions:[u],onChange:e=>{n(e)}}),(0,a.jsx)(d,{value:t,onChange:e=>{o(e)}})]}),(0,a.jsxs)("div",{style:{display:"flex",marginTop:10},children:[(0,a.jsxs)("pre",{style:{flex:1},children:[e," "]}),(0,a.jsxs)("pre",{style:{backgroundColor:"#fff",flex:1},children:[t," "]})]})]})}},27406:(e,n,t)=>{t.r(n),t.d(n,{default:()=>j});var r=t(68102),o=t(49257),i=t(80905),s=t(73562),a=t(98557),l={modified:{doc:""},original:{doc:""}},d=(0,i.createContext)(l);function c(e,n){return(0,r.A)({},e,n,{modified:(0,r.A)({},e.modified,n.modified),original:(0,r.A)({},e.original,n.original)})}var u=()=>(0,i.useContext)(d),h=e=>{var{children:n,theme:t}=e,[o,s]=(0,i.useReducer)(c,(0,r.A)({},l,{theme:t}));return(0,i.useEffect)((()=>s({theme:t})),[t]),(0,a.jsx)(d.Provider,{value:(0,r.A)({},o,{dispatch:s}),children:n})},f=["extensions","value","selection","onChange"],g=e=>{var{extensions:n=[],value:t,selection:a,onChange:l}=e,d=(0,o.A)(e,f),{theme:c,dispatch:h}=u(),g=(0,s.getDefaultExtensions)((0,r.A)({},d,{theme:c}));return(0,i.useEffect)((()=>h({original:{doc:t,selection:a,extensions:[...g,...n]},originalExtension:{onChange:l,option:d,extension:[n]}})),[e]),null};g.displayName="CodeMirrorMerge.Original";var v=["extensions","value","selection","onChange"],x=e=>{var{extensions:n=[],value:t,selection:a,onChange:l}=e,d=(0,o.A)(e,v),{theme:c,dispatch:h}=u(),f=(0,s.getDefaultExtensions)((0,r.A)({},d,{theme:c}));return(0,i.useEffect)((()=>{h({modified:{doc:t,selection:a,extensions:[...f,...n]},modifiedExtension:{onChange:l,option:d,extension:[n]}})}),[e]),null};x.displayName="CodeMirrorMerge.Modified";var m=t(60125),p=t(67538),C=["className","children","orientation","revertControls","highlightChanges","gutter","collapseUnchanged","destroyRerender","renderRevertControl"],A=["modified","modifiedExtension","original","originalExtension","theme","dispatch"],E=i.forwardRef(((e,n)=>{var{className:t,children:l,orientation:d,revertControls:c,highlightChanges:h,gutter:f,collapseUnchanged:g,destroyRerender:v=!0,renderRevertControl:x}=e,E=(0,o.A)(e,C),w=u(),{modified:y,modifiedExtension:j,original:b,originalExtension:R,theme:M,dispatch:D}=w,S=(0,o.A)(w,A),k=(0,i.useRef)(null),N=(0,i.useRef)(),U={orientation:d,revertControls:c,highlightChanges:h,gutter:f,collapseUnchanged:g,renderRevertControl:x};(0,i.useImperativeHandle)(n,(()=>({container:k.current,view:N.current,modified:y,original:b,config:(0,r.A)({a:b,b:y,parent:k.current},U)})),[k,N,y,b,U]);var L=p.Lz.updateListener.of((e=>{if(e.docChanged&&"function"===typeof(null==R?void 0:R.onChange)){var n=e.state.doc.toString();null==R||R.onChange(n,e)}})),O=p.Lz.updateListener.of((e=>{if(e.docChanged&&"function"===typeof(null==j?void 0:j.onChange)){var n=e.state.doc.toString();null==j||j.onChange(n,e)}}));(0,i.useEffect)((()=>{!N.current&&k.current&&R&&j&&(N.current=new m.SV((0,r.A)({a:(0,r.A)({},b,{extensions:[...(null==R?void 0:R.extension)||[],...(0,s.getDefaultExtensions)((0,r.A)({},null==R?void 0:R.option,{theme:M})),L]}),b:(0,r.A)({},y,{extensions:[...(null==j?void 0:j.extension)||[],...(0,s.getDefaultExtensions)((0,r.A)({},null==j?void 0:j.option,{theme:M})),O]}),parent:k.current},U)),D({view:N.current}))}),[N,k,R,j]),(0,i.useEffect)((()=>{if(b&&b.doc&&N.current){var e,n,t=null==(e=N.current)?void 0:e.a.state.doc.toString();if(t!==b.doc)null==(n=N.current)||n.a.dispatch({changes:{from:0,to:t.length,insert:b.doc||""}})}if(y&&y.doc&&N.current){var o,i,a=null==(o=N.current)?void 0:o.b.state.doc.toString();if(a!==y.doc)null==(i=N.current)||i.b.dispatch({changes:{from:0,to:a.length,insert:y.doc||""}})}if(v&&N.current){var l=N.current.a.state.selection.ranges[0].from,d=N.current.b.state.selection.ranges[0].from;N.current.destroy(),N.current=new m.SV((0,r.A)({a:(0,r.A)({},b,{extensions:[...(null==R?void 0:R.extension)||[],...(0,s.getDefaultExtensions)((0,r.A)({},null==R?void 0:R.option,{theme:M}))]}),b:(0,r.A)({},y,{extensions:[...(null==j?void 0:j.extension)||[],...(0,s.getDefaultExtensions)((0,r.A)({},null==j?void 0:j.option,{theme:M}))]}),parent:k.current},U)),l&&(N.current.a.focus(),N.current.a.dispatch({selection:{anchor:l,head:l}})),d&&(N.current.b.focus(),N.current.b.dispatch({selection:{anchor:d,head:d}}))}}),[N,M,k.current,b,y,R,j,v]),(0,i.useEffect)((()=>()=>N.current&&N.current.destroy()),[]),(0,i.useEffect)((()=>{if(N.current){var e={};S.orientation!==d&&(e.orientation=d),S.revertControls!==c&&(e.revertControls=c),S.highlightChanges!==h&&(e.highlightChanges=h),S.gutter!==f&&(e.gutter=f),S.collapseUnchanged!==g&&(e.collapseUnchanged=g),S.renderRevertControl!==x&&(e.collapseUnchanged=g),Object.keys(e).length&&D&&N.current&&(N.current.reconfigure((0,r.A)({},e)),D((0,r.A)({},e)))}}),[D,N,d,c,h,f,g,x]);return(0,a.jsx)("div",(0,r.A)({ref:k,className:"cm-merge-theme"+(t?" "+t:"")},E,{children:l}))}));E.displayName="CodeMirrorMerge.Internal";var w=["theme"],y=i.forwardRef(((e,n)=>{var{theme:t}=e,i=(0,o.A)(e,w);return(0,a.jsx)(h,{theme:t,children:(0,a.jsx)(E,(0,r.A)({},i,{ref:n}))})}));y.Original=g,y.Modified=x,y.displayName="CodeMirrorMerge";const j=y}}]);
//# sourceMappingURL=1122.7bacc1c9.chunk.js.map