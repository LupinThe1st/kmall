import{u as ie}from"./setting-b3cb85fa.js";import{J as k,d as pe,r as i,c as me,G as ce,e as m,o as S,f as $,g as e,w as t,h as r,C,k as p,i as R,t as F,v as M,n as fe,F as ve,q as _e,z as B,K as U,p as ge,m as ye,_ as be}from"./index-3245cefb.js";const we=(n,d,g)=>k.get(`/admin/acl/user/${n}/${d}/?username=${g}`),Ve=n=>n.id?k.put("/admin/acl/user/update",n):k.post("/admin/acl/user/save",n),he=n=>k.get("/admin/acl/user/toAssign/"+n),Ce=n=>k.post("/admin/acl/user/doAssignRole",n),ke=n=>k.delete("/admin/acl/user/remove/"+n),xe=n=>k.delete("/admin/acl/user/batchRemove",{data:n}),Ue=n=>(ge("data-v-71d4776f"),n=n(),ye(),n),ze={style:{flex:"auto"}},Se=Ue(()=>R("h4",null,"分配角色(职位)",-1)),Re={style:{flex:"auto"}},qe=pe({__name:"index",setup(n){let d=i(1),g=i(5),E=i(0),z=i([]),f=i(!1),v=i(!1),x=i([]),y=i([]),s=me({username:"",name:"",password:""}),q=i([]),b=i(),w=i(""),L=ie();ce(()=>{V()});const V=async(o=1)=>{d.value=o;let l=await we(d.value,g.value,w.value);l.code==200&&(E.value=l.data.total,z.value=l.data.records)},G=()=>{V()},H=()=>{f.value=!0,Object.assign(s,{id:0,username:"",name:"",password:""}),B(()=>{b.value.clearValidate("username"),b.value.clearValidate("name"),b.value.clearValidate("password")})},J=o=>{f.value=!0,Object.assign(s,o),B(()=>{b.value.clearValidate("username"),b.value.clearValidate("name")})},K=async()=>{await b.value.validate(),(await Ve(s)).code==200?(f.value=!1,U({type:"success",message:s.id?"更新成功":"添加成功"}),window.location.reload()):(f.value=!1,U({type:"error",message:s.id?"更新失败":"添加失败"}))},Q=()=>{f.value=!1},W={username:[{required:!0,trigger:"blur",validator:(o,l,u)=>{l.trim().length>=5?u():u(new Error("用户名字至少五位"))}}],name:[{required:!0,trigger:"blur",validator:(o,l,u)=>{l.trim().length>=5?u():u(new Error("用户昵称至少五位"))}}],password:[{required:!0,trigger:"blur",validator:(o,l,u)=>{l.trim().length>=6?u():u(new Error("用户密码至少六位"))}}]},X=async o=>{Object.assign(s,o);let l=await he(s.id);l.code==200&&(x.value=l.data.allRolesList,y.value=l.data.assignRoles,v.value=!0)},I=i(!1),A=i(!0),Y=o=>{y.value=o?x.value:[],A.value=!1},Z=o=>{I.value=o.length===x.value.length,A.value=o.length!==x.value.length},ee=async()=>{let o={userId:s.id,roleIdList:y.value.map(u=>u.id)};(await Ce(o)).code==200&&(U({type:"success",message:"分配职务成功"}),v.value=!1,V(d.value))},le=async o=>{(await ke(o)).code==200&&(U({type:"success",message:"删除成功"}),V(z.value.length>1?d.value:d.value-1))},ae=o=>{q.value=o},te=async()=>{let o=q.value.map(u=>u.id);(await xe(o)).code==200&&(U({type:"success",message:"删除成功"}),V(z.value.length>1?d.value:d.value-1))},oe=()=>{V(),w.value=""},re=()=>{L.refsh=!L.refsh};return(o,l)=>{const u=m("el-input"),h=m("el-form-item"),c=m("el-button"),N=m("el-form"),O=m("el-card"),_=m("el-table-column"),se=m("el-popconfirm"),ne=m("el-table"),ue=m("el-pagination"),j=m("el-drawer"),P=m("el-checkbox"),de=m("el-checkbox-group");return S(),$("div",null,[e(O,{style:{height:"80px"}},{default:t(()=>[e(N,{inline:!0,class:"form"},{default:t(()=>[e(h,{label:"用户名:"},{default:t(()=>[e(u,{placeholder:"请你输入搜索用户名",modelValue:r(w),"onUpdate:modelValue":l[0]||(l[0]=a=>C(w)?w.value=a:w=a)},null,8,["modelValue"])]),_:1}),e(h,null,{default:t(()=>[e(c,{type:"primary",size:"default",disabled:!r(w),onClick:oe},{default:t(()=>[p(" 搜索 ")]),_:1},8,["disabled"]),e(c,{type:"primary",size:"default",onClick:re},{default:t(()=>[p(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1}),e(O,{style:{margin:"10px 0px"}},{default:t(()=>[e(c,{type:"primary",size:"default",onClick:H},{default:t(()=>[p(" 添加用户 ")]),_:1}),e(c,{type:"primary",size:"default",disabled:!r(q).length,onClick:te},{default:t(()=>[p(" 批量删除 ")]),_:1},8,["disabled"]),e(ne,{onSelectionChange:ae,style:{margin:"10px 0px"},border:"",data:r(z)},{default:t(()=>[e(_,{type:"selection",align:"center"}),e(_,{label:"#",align:"center",type:"index"}),e(_,{label:"ID",align:"center",prop:"id"}),e(_,{label:"用户名字",align:"center",prop:"username","show-overflow-tooltip":""}),e(_,{label:"用户名称",align:"center",prop:"name","show-overflow-tooltip":""}),e(_,{label:"用户角色",align:"center",prop:"roleName","show-overflow-tooltip":""}),e(_,{label:"创建时间",align:"center",prop:"createTime","show-overflow-tooltip":""}),e(_,{label:"更新时间",align:"center",prop:"updateTime","show-overflow-tooltip":""}),e(_,{label:"操作",width:"300px",align:"center"},{default:t(({row:a,$index:T})=>[e(c,{type:"primary",size:"small",icon:"User",onClick:D=>X(a)},{default:t(()=>[p(" 分配角色 ")]),_:2},1032,["onClick"]),e(c,{type:"primary",size:"small",icon:"Edit",onClick:D=>J(a)},{default:t(()=>[p(" 编辑 ")]),_:2},1032,["onClick"]),e(se,{title:`你确定要删除${a.username}?`,width:"260px",onConfirm:D=>le(a.id)},{reference:t(()=>[e(c,{type:"primary",size:"small",icon:"Delete"},{default:t(()=>[p(" 删除 ")]),_:1})]),_:2},1032,["title","onConfirm"])]),_:1})]),_:1},8,["data"]),e(ue,{"current-page":r(d),"onUpdate:currentPage":l[1]||(l[1]=a=>C(d)?d.value=a:d=a),"page-size":r(g),"onUpdate:pageSize":l[2]||(l[2]=a=>C(g)?g.value=a:g=a),"page-sizes":[5,7,9,11],background:!0,layout:"prev, pager, next, jumper,->,sizes,total",total:r(E),onCurrentChange:V,onSizeChange:G},null,8,["current-page","page-size","total"])]),_:1}),e(j,{modelValue:r(f),"onUpdate:modelValue":l[6]||(l[6]=a=>C(f)?f.value=a:f=a)},{header:t(()=>[R("h4",null,F(r(s).id?"更新用户":"添加用户"),1)]),default:t(()=>[e(N,{model:r(s),rules:W,ref_key:"formRef",ref:b},{default:t(()=>[e(h,{label:"用户姓名",prop:"username"},{default:t(()=>[e(u,{placeholder:"请您输入用户姓名",modelValue:r(s).username,"onUpdate:modelValue":l[3]||(l[3]=a=>r(s).username=a)},null,8,["modelValue"])]),_:1}),e(h,{label:"用户昵称",prop:"name"},{default:t(()=>[e(u,{placeholder:"请您输入用户昵称",modelValue:r(s).name,"onUpdate:modelValue":l[4]||(l[4]=a=>r(s).name=a)},null,8,["modelValue"])]),_:1}),r(s).id?fe("",!0):(S(),M(h,{key:0,label:"用户密码",prop:"password"},{default:t(()=>[e(u,{placeholder:"请您输入用户密码",modelValue:r(s).password,"onUpdate:modelValue":l[5]||(l[5]=a=>r(s).password=a)},null,8,["modelValue"])]),_:1}))]),_:1},8,["model"])]),footer:t(()=>[R("div",ze,[e(c,{onClick:Q},{default:t(()=>[p("取消")]),_:1}),e(c,{type:"primary",onClick:K},{default:t(()=>[p("确定")]),_:1})])]),_:1},8,["modelValue"]),e(j,{modelValue:r(v),"onUpdate:modelValue":l[11]||(l[11]=a=>C(v)?v.value=a:v=a)},{header:t(()=>[Se]),default:t(()=>[e(N,null,{default:t(()=>[e(h,{label:"用户姓名"},{default:t(()=>[e(u,{modelValue:r(s).username,"onUpdate:modelValue":l[7]||(l[7]=a=>r(s).username=a),disabled:!0},null,8,["modelValue"])]),_:1}),e(h,{label:"职位列表"},{default:t(()=>[e(P,{onChange:Y,modelValue:I.value,"onUpdate:modelValue":l[8]||(l[8]=a=>I.value=a),indeterminate:A.value},{default:t(()=>[p(" 全选 ")]),_:1},8,["modelValue","indeterminate"]),e(de,{modelValue:r(y),"onUpdate:modelValue":l[9]||(l[9]=a=>C(y)?y.value=a:y=a),onChange:Z},{default:t(()=>[(S(!0),$(ve,null,_e(r(x),(a,T)=>(S(),M(P,{key:T,label:a},{default:t(()=>[p(F(a.roleName),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),footer:t(()=>[R("div",Re,[e(c,{onClick:l[10]||(l[10]=a=>C(v)?v.value=!1:v=!1)},{default:t(()=>[p("取消")]),_:1}),e(c,{type:"primary",onClick:ee},{default:t(()=>[p("确定")]),_:1})])]),_:1},8,["modelValue"])])}}});const Oe=be(qe,[["__scopeId","data-v-71d4776f"]]);export{Oe as default};
