import{j as s}from"./mui-CcQhKvkX.js";import{r}from"./react-CcBtCB7v.js";import{a as m}from"./vendor-DsPaXkF5.js";import{d as u}from"./styledComponents-CoZbl3wq.js";import{S as g,P as f,L as l,a as x,N as h}from"./index-BDHF3RPN.js";import{c as j,L as S}from"./router-CK-IR3zP.js";import"./lottie-BbHPf8Bg.js";import"./swiper-DSaxWTil.js";const y=u.div`
  padding: 20px;
  background-color: var(--background-color);
`,v=()=>{const{keyword:a}=j(),{setSearchQuery:o}=r.useContext(g),[n,c]=r.useState([]),[d,i]=r.useState(!0);return r.useEffect(()=>{a&&(o(a),c([]),i(!0))},[a,o]),r.useEffect(()=>{if(!a)return;(async()=>{try{const t=await m.get("/api/v1/search",{params:{keyword:a}});t.status===200&&c(t.data)}catch(t){console.log("An error occurred:",t.message)}finally{i(!1)}})()},[a]),s.jsxs(y,{children:[s.jsx(f,{pageName:"Search Results"}),d?s.jsx(l,{}):n.length>0?n.map((e,t)=>{var p;return s.jsx(S,{to:`/product/${encodeURIComponent(e.name)}`,style:{textDecoration:"none",color:"inherit"},children:s.jsx(x,{id:e.id,image:e.imageUrl,name:e.name,shipping:e.shippingFee,price:(p=e.prices[0])==null?void 0:p.setPrice})},t)}):s.jsx(h,{})]})};export{v as default};
