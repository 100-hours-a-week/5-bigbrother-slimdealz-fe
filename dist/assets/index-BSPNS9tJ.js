import{i as v,j as e}from"./index-BV_68Uyj.js";import{r as n}from"./react-CWmeP4t5.js";import{a as B}from"./vendor-DsPaXkF5.js";const o={userProfileContainer:{padding:"20px",fontFamily:"Arial, sans-serif"},navBar:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},navBarButton:{backgroundColor:"transparent",border:"none",fontSize:"18px",cursor:"pointer"},userInfoSection:{marginBottom:"20px"},formGroup:{marginBottom:"10px"},formGroupLabel:{display:"block",marginBottom:"5px"},formGroupInput:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #ccc"},actionButtonSubmit:{backgroundColor:"#4CAF50",color:"white",padding:"10px 20px",border:"none",borderRadius:"4px",cursor:"pointer"},actionButton:{backgroundColor:"#008CBA",color:"white",padding:"10px 20px",border:"none",borderRadius:"4px",cursor:"pointer"},actionButtonCancel:{backgroundColor:"#f44336"},checkboxGroup:{marginBottom:"10px"},checkboxGroupInput:{marginRight:"5px"},switch:{display:"flex",alignItems:"center",marginBottom:"10px"}},T=()=>{const c=v(),[d,g]=n.useState(""),[i,f]=n.useState(""),[p,j]=n.useState(""),[u,b]=n.useState(""),[x,k]=n.useState(""),[h,y]=n.useState(""),[m,w]=n.useState(!1);n.useEffect(()=>{const t=new URLSearchParams(window.location.search),r=t.get("jwtToken"),s=t.get("refreshToken");if(r&&s){localStorage.setItem("jwtToken",r),localStorage.setItem("refreshToken",s);const a=S(r);k(a.name),j(a.role),b(a.kakao_Id),f(a.profile_image);const l=window.location.origin+window.location.pathname;window.history.replaceState(null,"",l)}},[]);function S(t){try{const s=t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(s).split("").map(function(l){return"%"+("00"+l.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}catch(r){return console.error("토큰 파싱 중 오류 발생:",r),null}}const I=async()=>{const t={name:x,nickname:d,kakao_Id:u,profileImage:i,role:p,card:h,notification_agree:m};try{const r=localStorage.getItem("jwtToken"),s=await B.post("undefined/api/v1/users/kakaologin",t,{headers:{Authorization:`Bearer ${r}`}});console.log("회원 정보 저장 성공:",s.data),c("/")}catch(r){console.error("회원 정보 저장 실패:",r)}};return e.jsxs("div",{style:o.userProfileContainer,children:[e.jsxs("div",{style:o.navBar,children:[e.jsx("button",{style:o.navBarButton,onClick:()=>c(-1),children:"←"}),e.jsx("h2",{children:"회원가입 추가 정보"})]}),e.jsxs("div",{style:o.userInfoSection,children:[e.jsx("h2",{children:"사용자 정보"}),i&&e.jsx("img",{src:i,alt:"Profile",style:{width:"150px",height:"150px",borderRadius:"50%"}}),e.jsxs("p",{children:[e.jsx("strong",{children:"이름:"})," ",x]}),e.jsxs("p",{children:[e.jsx("strong",{children:"역할:"})," ",p]}),e.jsxs("p",{children:[e.jsx("strong",{children:"소셜 ID:"})," ",u]})]}),e.jsxs("div",{style:o.userInfoSection,children:[e.jsx("h2",{children:"회원 정보 입력"}),e.jsxs("div",{style:o.formGroup,children:[e.jsx("label",{style:o.formGroupLabel,children:"닉네임:"}),e.jsx("input",{type:"text",style:o.formGroupInput,value:d,onChange:t=>g(t.target.value),placeholder:"닉네임을 입력하세요"})]}),e.jsxs("div",{style:o.formGroup,children:[e.jsx("label",{style:o.formGroupLabel,children:"카드 정보:"}),e.jsx("input",{type:"text",style:o.formGroupInput,value:h,onChange:t=>y(t.target.value),placeholder:"카드 정보를 입력하세요"})]}),e.jsx("div",{style:o.checkboxGroup,children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:m,onChange:t=>w(t.target.checked)}),"알림 수신 동의"]})}),e.jsx("button",{style:o.actionButtonSubmit,onClick:I,children:"회원가입 완료"})]})]})};export{T as default};
