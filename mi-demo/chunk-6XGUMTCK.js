import{$ as Q,H as O,J as z,K as W,L as $,N as J,O as K,aa as X,b as U,c as M,e as N,f as E,h as L,j as P,k as V,m as R,n as q,p as H,r as D}from"./chunk-7ZJUYMMI.js";import{Ea as _,m as F,x as B,ya as d,z as k}from"./chunk-XOAWKSEI.js";import"./chunk-BMA7WWEI.js";import{Bb as S,Cb as I,Ka as s,Kb as a,P as h,Q as b,Rb as C,V as u,Va as c,Wa as y,Za as v,da as l,fb as w,gb as m,ib as j,jb as A,kb as f,pb as p,qb as i,rb as x,zb as g}from"./chunk-LZPW4HQQ.js";var Y=`
    .p-inputgroup,
    .p-inputgroup .p-iconfield,
    .p-inputgroup .p-floatlabel,
    .p-inputgroup .p-iftalabel {
        display: flex;
        align-items: stretch;
        width: 100%;
    }

    .p-inputgroup .p-inputtext,
    .p-inputgroup .p-inputwrapper {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-inputgroupaddon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('inputgroup.addon.padding');
        background: dt('inputgroup.addon.background');
        color: dt('inputgroup.addon.color');
        border-block-start: 1px solid dt('inputgroup.addon.border.color');
        border-block-end: 1px solid dt('inputgroup.addon.border.color');
        min-width: dt('inputgroup.addon.min.width');
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroupaddon + .p-inputgroupaddon {
        border-inline-start: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:last-child {
        border-inline-end: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:has(.p-button) {
        padding: 0;
        overflow: hidden;
    }

    .p-inputgroupaddon .p-button {
        border-radius: 0;
    }

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iconfield > .p-component,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroup > .p-component:first-child,
    .p-inputgroup > .p-inputwrapper:first-child > .p-component,
    .p-inputgroup > .p-iconfield:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroupaddon:last-child,
    .p-inputgroup > .p-component:last-child,
    .p-inputgroup > .p-inputwrapper:last-child > .p-component,
    .p-inputgroup > .p-iconfield:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup .p-component:focus,
    .p-inputgroup .p-component.p-focus,
    .p-inputgroup .p-inputwrapper-focus,
    .p-inputgroup .p-component:focus ~ label,
    .p-inputgroup .p-component.p-focus ~ label,
    .p-inputgroup .p-inputwrapper-focus ~ label {
        z-index: 1;
    }

    .p-inputgroup > .p-button:not(.p-button-icon-only) {
        width: auto;
    }

    .p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {
        border-inline-start: 0;
    }
`;var re=["*"],ae=`
    ${Y}

    /*For PrimeNG*/

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup:first-child > p-button > .p-button,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroup p-button:first-child,
    .p-inputgroup p-button:last-child {
        display: inline-flex;
    }

    .p-inputgroup:has(> p-button:first-child) .p-button {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup:has(> p-button:last-child) .p-button {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup > p-inputmask > .p-inputtext {
        width: 100%;
    }
`,ue={root:({instance:e})=>["p-inputgroup",{"p-inputgroup-fluid":e.fluid}]},Z=(()=>{class e extends _{name="inputgroup";theme=ae;classes=ue;static \u0275fac=(()=>{let n;return function(o){return(n||(n=l(e)))(o||e)}})();static \u0275prov=h({token:e,factory:e.\u0275fac})}return e})();var G=(()=>{class e extends D{styleClass;_componentStyle=u(Z);static \u0275fac=(()=>{let n;return function(o){return(n||(n=l(e)))(o||e)}})();static \u0275cmp=c({type:e,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostVars:3,hostBindings:function(t,o){t&2&&(w("data-pc-name","inputgroup"),f(o.cn(o.cx("root"),o.styleClass)))},inputs:{styleClass:"styleClass"},features:[C([Z]),v],ngContentSelectors:re,decls:1,vars:0,template:function(t,o){t&1&&(S(),I(0))},dependencies:[F,d],encapsulation:2})}return e})(),te=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=y({type:e});static \u0275inj=b({imports:[G,d,d]})}return e})();var de=["*"],le={root:"p-inputgroupaddon"},ne=(()=>{class e extends _{name="inputgroupaddon";classes=le;static \u0275fac=(()=>{let n;return function(o){return(n||(n=l(e)))(o||e)}})();static \u0275prov=h({token:e,factory:e.\u0275fac})}return e})(),T=(()=>{class e extends D{style;styleClass;_componentStyle=u(ne);get hostStyle(){return this.style}static \u0275fac=(()=>{let n;return function(o){return(n||(n=l(e)))(o||e)}})();static \u0275cmp=c({type:e,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:7,hostBindings:function(t,o){t&2&&(w("data-pc-name","inputgroupaddon"),A(o.hostStyle),f(o.styleClass),j("p-inputgroupaddon",!0))},inputs:{style:"style",styleClass:"styleClass"},features:[C([ne]),v],ngContentSelectors:de,decls:1,vars:0,template:function(t,o){t&1&&(S(),I(0))},dependencies:[F],encapsulation:2})}return e})(),oe=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=y({type:e});static \u0275inj=b({imports:[T,d,d]})}return e})();var pe=class e{fb=u(q);router=u(B);authService=u(k);passwordIcon="pi pi-eye-slash";passwordType="password";togglePasswordIcon=!1;isRememberActive=!1;selectedUser=null;userTypes=[{name:"Administrator",email:"admin@correo.com",password:"SuperSecurePassword@123",authLevel:"admin"},{name:"Moderator",email:"mod@correo.com",password:"DynamicPassword_123",authLevel:"mod"},{name:"User",email:"user@correo.com",password:"password.123",authLevel:"user"}];loginForm=this.fb.group({email:["",M.required],password:["",[M.required,M.minLength(6)]]});ngOnInit(){let r=this.authService.getSession();r&&(this.isRememberActive=!0,this.loginForm.controls.email.setValue(r.email),this.loginForm.controls.password.setValue(r.password))}onSubmit(){if(this.loginForm.invalid){this.loginForm.markAllAsTouched();return}let{email:r,password:n}=this.loginForm.value,t=this.userTypes.find(o=>o.email===r&&o.password===n);if(!t){console.error("Credenciales inv\xE1lidas");return}this.authService.login(r,n,t.authLevel),this.router.navigateByUrl("/main")}toggleIcon(){this.togglePasswordIcon=!this.togglePasswordIcon,this.passwordIcon=this.togglePasswordIcon?"pi pi-eye":"pi pi-eye-slash",this.passwordType=this.togglePasswordIcon?"text":"password"}rememberUser(){this.isRememberActive=!this.isRememberActive,this.isRememberActive&&!this.loginForm.invalid&&this.authService.saveSession(this.loginForm.value)}onSelectUser(r){let n=r.value,t=this.userTypes.find(o=>o.email===n);this.selectedUser=t??null,this.selectedUser?this.loginForm.patchValue({password:this.selectedUser.password}):this.loginForm.patchValue({password:""})}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=c({type:e,selectors:[["auth-login"]],decls:33,vars:7,consts:[[1,"min-h-screen","flex","items-center","justify-center","p-6"],[1,"w-full","max-w-md","p-6","rounded-2xl","shadow-md","flex","flex-col","gap-6","primary-border"],[1,"flex","flex-col","items-start","gap-2"],[1,"font-semibold"],[1,"text-sm"],["autocomplete","off",1,"flex","flex-col","gap-4",3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-2"],["id","email","optionLabel","name","optionValue","email","formControlName","email","placeholder","Select a user",3,"onChange","options"],["for","password",1,"text-sm"],[1,"cursor-pointer",3,"click"],["id","password","pInputText","","formControlName","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022","required","",1,"flex-1","text-sm",3,"type"],[1,"flex","items-center","justify-between","gap-4"],[1,"flex","items-center","justify-center","gap-2"],["inputId","remember","binary","true",3,"onChange","value"],["for","remember",1,"text-sm"],[1,"text-sm","underline","underline-offset-2","cursor-pointer"],[1,"flex","flex-col","gap-3","pt-2"],["pButton","","type","submit","label","Sign in",1,"w-full","font-medium",3,"disabled"],[1,"flex","items-center","justify-center","gap-2","p-3"],["href","/signup",1,"text-sm","underline-offset-2"]],template:function(n,t){n&1&&(p(0,"section",0)(1,"div",1)(2,"header",2)(3,"h1",3),a(4,"Welcome back"),i(),p(5,"p",4),a(6,"Sign in to continue to your account"),i()(),p(7,"form",5),g("ngSubmit",function(){return t.onSubmit()}),p(8,"div",6)(9,"label",4),a(10,"User"),i(),p(11,"p-select",7),g("onChange",function(ie){return t.onSelectUser(ie)}),i()(),p(12,"div",6)(13,"label",8),a(14,"Password"),i(),p(15,"p-inputgroup")(16,"p-inputgroup-addon",9),g("click",function(){return t.toggleIcon()}),x(17,"i"),i(),x(18,"input",10),i()(),p(19,"div",11)(20,"div",12)(21,"p-checkbox",13),g("onChange",function(){return t.rememberUser()}),i(),p(22,"label",14),a(23,"Remember me"),i()(),p(24,"a",15),a(25," Forgot password? "),i()(),p(26,"div",16),x(27,"button",17),i()(),p(28,"footer",18)(29,"p",4),a(30,"Don't have an account?"),i(),p(31,"a",19),a(32,"Sign up"),i()()()()),n&2&&(s(7),m("formGroup",t.loginForm),s(4),m("options",t.userTypes),s(6),f(t.passwordIcon),s(),m("type",t.passwordType),s(3),m("value",t.isRememberActive),s(6),m("disabled",t.loginForm.invalid))},dependencies:[H,L,U,N,E,R,P,V,z,O,$,W,K,J,te,G,oe,T,X,Q],encapsulation:2})};export{pe as LoginComponent};
