import{$ as Fe,A as ot,Aa as fn,B as ke,Ba as mn,C as Un,Ca as Xe,D as Ne,Da as st,E as Qn,Ea as H,F as Kn,Fa as fi,G as Zn,H as Yn,I as Xn,L as ye,N as Jn,O as un,P as ei,R as se,S as Ie,T as ti,U as ni,V as Oe,X as ii,Y as oi,Z as De,a as Vt,aa as pn,b as cn,ba as Ye,ca as ri,da as si,e as Tt,ea as li,f as Et,g as Ce,ga as Be,h as Pe,ha as ai,i as xe,ia as Re,ja as rt,ka as At,la as ci,m as ie,ma as hn,n as we,na as di,o as qn,qa as ui,ta as pi,ua as hi,xa as Me,ya as Q,za as Lt}from"./chunk-XOAWKSEI.js";import{c as dn,d as kt,f as Ot,h as Dt,i as Ft,j as Mt}from"./chunk-BMA7WWEI.js";import{$ as P,$a as p,$b as Wn,Ab as c,Bb as pe,Cb as he,Db as L,Eb as ae,Fb as _,Gb as v,Hb as ln,Ib as Rn,Jb as _e,Ka as d,Kb as ve,Lb as Le,Mb as an,N as Ct,O as be,Oa as pt,Ob as Hn,P as R,Pa as N,Pb as jn,Q as Y,Qb as $n,Ra as Nn,Rb as V,S as Ue,Sa as rn,Sb as wt,Tb as te,Ub as Ee,V as y,Va as M,Vb as Gn,Wa as X,Xa as A,Za as f,_ as ue,a as I,aa as z,b as de,ba as U,bb as Bn,da as u,dc as ge,ea as on,fb as E,gb as a,hb as it,ia as T,ib as Ke,ic as It,ja as Te,jb as Ze,kb as g,l as An,lb as sn,ma as S,mc as h,na as Qe,nc as fe,o as Ln,oa as le,oc as ze,pb as x,pc as Z,qb as w,qc as St,rb as D,sa as xt,sb as W,t as Pn,tb as q,ub as ne,vb as re,y as zn,zb as $}from"./chunk-LZPW4HQQ.js";var Ii=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(N(pt),N(Qe))};static \u0275dir=A({type:t})}return t})(),Si=(()=>{class t extends Ii{static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275dir=A({type:t,features:[f]})}return t})(),je=new Ue("");var Ro={provide:je,useExisting:be(()=>Vi),multi:!0};function Ho(){let t=cn()?cn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var jo=new Ue(""),Vi=(()=>{class t extends Ii{_compositionMode;_composing=!1;constructor(e,n,i){super(e,n),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!Ho())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(N(pt),N(Qe),N(jo,8))};static \u0275dir=A({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,i){n&1&&$("input",function(s){return i._handleInput(s.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(s){return i._compositionEnd(s.target.value)})},standalone:!1,features:[V([Ro]),f]})}return t})();function xn(t){return t==null||wn(t)===0}function wn(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var yt=new Ue(""),In=new Ue(""),$o=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,mi=class{static min(o){return Ti(o)}static max(o){return Go(o)}static required(o){return Ei(o)}static requiredTrue(o){return Wo(o)}static email(o){return qo(o)}static minLength(o){return Uo(o)}static maxLength(o){return Qo(o)}static pattern(o){return Ko(o)}static nullValidator(o){return zt()}static compose(o){return Ai(o)}static composeAsync(o){return Pi(o)}};function Ti(t){return o=>{if(o.value==null||t==null)return null;let e=parseFloat(o.value);return!isNaN(e)&&e<t?{min:{min:t,actual:o.value}}:null}}function Go(t){return o=>{if(o.value==null||t==null)return null;let e=parseFloat(o.value);return!isNaN(e)&&e>t?{max:{max:t,actual:o.value}}:null}}function Ei(t){return xn(t.value)?{required:!0}:null}function Wo(t){return t.value===!0?null:{required:!0}}function qo(t){return xn(t.value)||$o.test(t.value)?null:{email:!0}}function Uo(t){return o=>{let e=o.value?.length??wn(o.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function Qo(t){return o=>{let e=o.value?.length??wn(o.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function Ko(t){if(!t)return zt;let o,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),o=new RegExp(e)):(e=t.toString(),o=t),n=>{if(xn(n.value))return null;let i=n.value;return o.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function zt(t){return null}function ki(t){return t!=null}function Oi(t){return Bn(t)?Ln(t):t}function Di(t){let o={};return t.forEach(e=>{o=e!=null?I(I({},o),e):o}),Object.keys(o).length===0?null:o}function Fi(t,o){return o.map(e=>e(t))}function Zo(t){return!t.validate}function Mi(t){return t.map(o=>Zo(o)?o:e=>o.validate(e))}function Ai(t){if(!t)return null;let o=t.filter(ki);return o.length==0?null:function(e){return Di(Fi(e,o))}}function Li(t){return t!=null?Ai(Mi(t)):null}function Pi(t){if(!t)return null;let o=t.filter(ki);return o.length==0?null:function(e){let n=Fi(e,o).map(Oi);return zn(n).pipe(Pn(Di))}}function zi(t){return t!=null?Pi(Mi(t)):null}function gi(t,o){return t===null?[o]:Array.isArray(t)?[...t,o]:[t,o]}function Ni(t){return t._rawValidators}function Bi(t){return t._rawAsyncValidators}function gn(t){return t?Array.isArray(t)?t:[t]:[]}function Nt(t,o){return Array.isArray(t)?t.includes(o):t===o}function bi(t,o){let e=gn(o);return gn(t).forEach(i=>{Nt(e,i)||e.push(i)}),e}function yi(t,o){return gn(o).filter(e=>!Nt(t,e))}var Bt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=Li(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=zi(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o=void 0){this.control&&this.control.reset(o)}hasError(o,e){return this.control?this.control.hasError(o,e):!1}getError(o,e){return this.control?this.control.getError(o,e):null}},Je=class extends Bt{name;get formDirective(){return null}get path(){return null}},Se=class extends Bt{_parent=null;name=null;valueAccessor=null},Rt=class{_cd;constructor(o){this._cd=o}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Yo={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},dc=de(I({},Yo),{"[class.ng-submitted]":"isSubmitted"}),uc=(()=>{class t extends Rt{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(N(Se,2))};static \u0275dir=A({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,i){n&2&&Ke("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[f]})}return t})(),pc=(()=>{class t extends Rt{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(N(Je,10))};static \u0275dir=A({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,i){n&2&&Ke("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[f]})}return t})();var ht="VALID",Pt="INVALID",lt="PENDING",ft="DISABLED",He=class{},Ht=class extends He{value;source;constructor(o,e){super(),this.value=o,this.source=e}},mt=class extends He{pristine;source;constructor(o,e){super(),this.pristine=o,this.source=e}},gt=class extends He{touched;source;constructor(o,e){super(),this.touched=o,this.source=e}},at=class extends He{status;source;constructor(o,e){super(),this.status=o,this.source=e}},bn=class extends He{source;constructor(o){super(),this.source=o}},yn=class extends He{source;constructor(o){super(),this.source=o}};function Sn(t){return(Wt(t)?t.validators:t)||null}function Xo(t){return Array.isArray(t)?Li(t):t||null}function Vn(t,o){return(Wt(o)?o.asyncValidators:t)||null}function Jo(t){return Array.isArray(t)?zi(t):t||null}function Wt(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Ri(t,o,e){let n=t.controls;if(!(o?Object.keys(n):n).length)throw new Ct(1e3,"");if(!n[e])throw new Ct(1001,"")}function Hi(t,o,e){t._forEachChild((n,i)=>{if(e[i]===void 0)throw new Ct(1002,"")})}var ct=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(o,e){this._assignValidators(o),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get status(){return ze(this.statusReactive)}set status(o){ze(()=>this.statusReactive.set(o))}_status=Z(()=>this.statusReactive());statusReactive=le(void 0);get valid(){return this.status===ht}get invalid(){return this.status===Pt}get pending(){return this.status==lt}get disabled(){return this.status===ft}get enabled(){return this.status!==ft}errors;get pristine(){return ze(this.pristineReactive)}set pristine(o){ze(()=>this.pristineReactive.set(o))}_pristine=Z(()=>this.pristineReactive());pristineReactive=le(!0);get dirty(){return!this.pristine}get touched(){return ze(this.touchedReactive)}set touched(o){ze(()=>this.touchedReactive.set(o))}_touched=Z(()=>this.touchedReactive());touchedReactive=le(!1);get untouched(){return!this.touched}_events=new An;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._assignValidators(o)}setAsyncValidators(o){this._assignAsyncValidators(o)}addValidators(o){this.setValidators(bi(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(bi(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators(yi(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators(yi(o,this._rawAsyncValidators))}hasValidator(o){return Nt(this._rawValidators,o)}hasAsyncValidator(o){return Nt(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){let e=this.touched===!1;this.touched=!0;let n=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsTouched(de(I({},o),{sourceControl:n})),e&&o.emitEvent!==!1&&this._events.next(new gt(!0,n))}markAllAsTouched(o={}){this.markAsTouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(o))}markAsUntouched(o={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=o.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:n})}),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,n),e&&o.emitEvent!==!1&&this._events.next(new gt(!1,n))}markAsDirty(o={}){let e=this.pristine===!0;this.pristine=!1;let n=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsDirty(de(I({},o),{sourceControl:n})),e&&o.emitEvent!==!1&&this._events.next(new mt(!1,n))}markAsPristine(o={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=o.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:o.emitEvent})}),this._parent&&!o.onlySelf&&this._parent._updatePristine(o,n),e&&o.emitEvent!==!1&&this._events.next(new mt(!0,n))}markAsPending(o={}){this.status=lt;let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new at(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.markAsPending(de(I({},o),{sourceControl:e}))}disable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=ft,this.errors=null,this._forEachChild(i=>{i.disable(de(I({},o),{onlySelf:!0}))}),this._updateValue();let n=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Ht(this.value,n)),this._events.next(new at(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(de(I({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=ht,this._forEachChild(n=>{n.enable(de(I({},o),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors(de(I({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(o,e){this._parent&&!o.onlySelf&&(this._parent.updateValueAndValidity(o),o.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ht||this.status===lt)&&this._runAsyncValidator(n,o.emitEvent)}let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Ht(this.value,e)),this._events.next(new at(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.updateValueAndValidity(de(I({},o),{sourceControl:e}))}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ft:ht}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o,e){if(this.asyncValidator){this.status=lt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let n=Oi(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:o})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let o=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,o}return!1}setErrors(o,e={}){this.errors=o,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(o){let e=o;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,i)=>n&&n._find(i),this)}getError(o,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[o]:null}hasError(o,e){return!!this.getError(o,e)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o,e,n){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),(o||n)&&this._events.next(new at(this.status,e)),this._parent&&this._parent._updateControlsErrors(o,e,n)}_initObservables(){this.valueChanges=new T,this.statusChanges=new T}_calculateStatus(){return this._allControlsDisabled()?ft:this.errors?Pt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(lt)?lt:this._anyControlsHaveStatus(Pt)?Pt:ht}_anyControlsHaveStatus(o){return this._anyControls(e=>e.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o,e){let n=!this._anyControlsDirty(),i=this.pristine!==n;this.pristine=n,this._parent&&!o.onlySelf&&this._parent._updatePristine(o,e),i&&this._events.next(new mt(this.pristine,e))}_updateTouched(o={},e){this.touched=this._anyControlsTouched(),this._events.next(new gt(this.touched,e)),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,e)}_onDisabledChange=[];_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){Wt(o)&&o.updateOn!=null&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){let e=this._parent&&this._parent.dirty;return!o&&!!e&&!this._parent._anyControlsDirty()}_find(o){return null}_assignValidators(o){this._rawValidators=Array.isArray(o)?o.slice():o,this._composedValidatorFn=Xo(this._rawValidators)}_assignAsyncValidators(o){this._rawAsyncValidators=Array.isArray(o)?o.slice():o,this._composedAsyncValidatorFn=Jo(this._rawAsyncValidators)}},jt=class extends ct{constructor(o,e,n){super(Sn(e),Vn(n,e)),this.controls=o,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(o,e){return this.controls[o]?this.controls[o]:(this.controls[o]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(o,e,n={}){this.registerControl(o,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(o,e={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(o,e,n={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],e&&this.registerControl(o,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(o){return this.controls.hasOwnProperty(o)&&this.controls[o].enabled}setValue(o,e={}){Hi(this,!0,o),Object.keys(o).forEach(n=>{Ri(this,!0,n),this.controls[n].setValue(o[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(o,e={}){o!=null&&(Object.keys(o).forEach(n=>{let i=this.controls[n];i&&i.patchValue(o[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(o={},e={}){this._forEachChild((n,i)=>{n.reset(o?o[i]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(o,e,n)=>(o[n]=e.getRawValue(),o))}_syncPendingControls(){let o=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return o&&this.updateValueAndValidity({onlySelf:!0}),o}_forEachChild(o){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&o(n,e)})}_setUpControls(){this._forEachChild(o=>{o.setParent(this),o._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(o){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&o(n))return!0;return!1}_reduceValue(){let o={};return this._reduceChildren(o,(e,n,i)=>((n.enabled||this.disabled)&&(e[i]=n.value),e))}_reduceChildren(o,e){let n=o;return this._forEachChild((i,r)=>{n=e(n,i,r)}),n}_allControlsDisabled(){for(let o of Object.keys(this.controls))if(this.controls[o].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(o){return this.controls.hasOwnProperty(o)?this.controls[o]:null}};var _n=class extends jt{};var qt=new Ue("",{providedIn:"root",factory:()=>Ut}),Ut="always";function ji(t,o){return[...o.path,t]}function vn(t,o,e=Ut){Tn(t,o),o.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&o.valueAccessor.setDisabledState?.(t.disabled),tr(t,o),ir(t,o),nr(t,o),er(t,o)}function _i(t,o,e=!0){let n=()=>{};o.valueAccessor&&(o.valueAccessor.registerOnChange(n),o.valueAccessor.registerOnTouched(n)),Gt(t,o),t&&(o._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function $t(t,o){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(o)})}function er(t,o){if(o.valueAccessor.setDisabledState){let e=n=>{o.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),o._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Tn(t,o){let e=Ni(t);o.validator!==null?t.setValidators(gi(e,o.validator)):typeof e=="function"&&t.setValidators([e]);let n=Bi(t);o.asyncValidator!==null?t.setAsyncValidators(gi(n,o.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let i=()=>t.updateValueAndValidity();$t(o._rawValidators,i),$t(o._rawAsyncValidators,i)}function Gt(t,o){let e=!1;if(t!==null){if(o.validator!==null){let i=Ni(t);if(Array.isArray(i)&&i.length>0){let r=i.filter(s=>s!==o.validator);r.length!==i.length&&(e=!0,t.setValidators(r))}}if(o.asyncValidator!==null){let i=Bi(t);if(Array.isArray(i)&&i.length>0){let r=i.filter(s=>s!==o.asyncValidator);r.length!==i.length&&(e=!0,t.setAsyncValidators(r))}}}let n=()=>{};return $t(o._rawValidators,n),$t(o._rawAsyncValidators,n),e}function tr(t,o){o.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&$i(t,o)})}function nr(t,o){o.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&$i(t,o),t.updateOn!=="submit"&&t.markAsTouched()})}function $i(t,o){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function ir(t,o){let e=(n,i)=>{o.valueAccessor.writeValue(n),i&&o.viewToModelUpdate(n)};t.registerOnChange(e),o._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function or(t,o){t==null,Tn(t,o)}function rr(t,o){return Gt(t,o)}function Gi(t,o){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(o,e.currentValue)}function sr(t){return Object.getPrototypeOf(t.constructor)===Si}function lr(t,o){t._syncPendingControls(),o.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Wi(t,o){if(!o)return null;Array.isArray(o);let e,n,i;return o.forEach(r=>{r.constructor===Vi?e=r:sr(r)?n=r:i=r}),i||n||e||null}function ar(t,o){let e=t.indexOf(o);e>-1&&t.splice(e,1)}function vi(t,o){let e=t.indexOf(o);e>-1&&t.splice(e,1)}function Ci(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var bt=class extends ct{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(o=null,e,n){super(Sn(e),Vn(n,e)),this._applyFormState(o),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Wt(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Ci(o)?this.defaultValue=o.value:this.defaultValue=o)}setValue(o,e={}){this.value=this._pendingValue=o,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(o,e={}){this.setValue(o,e)}reset(o=this.defaultValue,e={}){this._applyFormState(o),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){vi(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){vi(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(o){Ci(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}};var cr=t=>t instanceof bt;var dr={provide:Se,useExisting:be(()=>ur)},xi=Promise.resolve(),ur=(()=>{class t extends Se{_changeDetectorRef;callSetDisabledState;control=new bt;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new T;constructor(e,n,i,r,s,l){super(),this._changeDetectorRef=s,this.callSetDisabledState=l,this._parent=e,this._setValidators(n),this._setAsyncValidators(i),this.valueAccessor=Wi(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Gi(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){vn(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){xi.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,i=n!==0&&h(n);xi.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?ji(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(N(Je,9),N(yt,10),N(In,10),N(je,10),N(It,8),N(qt,8))};static \u0275dir=A({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[V([dr]),f,ue]})}return t})();var fc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})(),pr={provide:je,useExisting:be(()=>hr),multi:!0},hr=(()=>{class t extends Si{writeValue(e){let n=e??"";this.setProperty("value",n)}registerOnChange(e){this.onChange=n=>{e(n==""?null:parseFloat(n))}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275dir=A({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,i){n&1&&$("input",function(s){return i.onChange(s.target.value)})("blur",function(){return i.onTouched()})},standalone:!1,features:[V([pr]),f]})}return t})();var qi=new Ue("");var fr={provide:Je,useExisting:be(()=>mr)},mr=(()=>{class t extends Je{callSetDisabledState;get submitted(){return ze(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Z(()=>this._submittedReactive());_submittedReactive=le(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new T;constructor(e,n,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Gt(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){let n=this.form.get(e.path);return vn(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){_i(e.control||null,e,!1),ar(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,n){this.form.get(e.path).setValue(n)}onSubmit(e){return this._submittedReactive.set(!0),lr(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new bn(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this._submittedReactive.set(!1),this.form._events.next(new yn(this.form))}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,i=this.form.get(e.path);n!==i&&(_i(n||null,e),cr(i)&&(vn(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);or(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){let n=this.form.get(e.path);n&&rr(n,e)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Tn(this.form,this),this._oldForm&&Gt(this._oldForm,this)}static \u0275fac=function(n){return new(n||t)(N(yt,10),N(In,10),N(qt,8))};static \u0275dir=A({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,i){n&1&&$("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[V([fr]),f,ue]})}return t})();var gr={provide:Se,useExisting:be(()=>br)},br=(()=>{class t extends Se{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new T;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,i,r,s){super(),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(n),this._setAsyncValidators(i),this.valueAccessor=Wi(this,r)}ngOnChanges(e){this._added||this._setUpControl(),Gi(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return ji(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||t)(N(Je,13),N(yt,10),N(In,10),N(je,10),N(qi,8))};static \u0275dir=A({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[V([gr]),f,ue]})}return t})();function yr(t){return typeof t=="number"?t:parseFloat(t)}var Ui=(()=>{class t{_validator=zt;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):zt,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,features:[ue]})}return t})();var _r={provide:yt,useExisting:be(()=>vr),multi:!0},vr=(()=>{class t extends Ui{min;inputName="min";normalizeInput=e=>yr(e);createValidator=e=>Ti(e);static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275dir=A({type:t,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(n,i){n&2&&E("min",i._enabled?i.min:null)},inputs:{min:"min"},standalone:!1,features:[V([_r]),f]})}return t})(),Cr={provide:yt,useExisting:be(()=>xr),multi:!0};var xr=(()=>{class t extends Ui{required;inputName="required";normalizeInput=h;createValidator=e=>Ei;enabled(e){return e}static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275dir=A({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,i){n&2&&E("required",i._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[V([Cr]),f]})}return t})();var Qi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=X({type:t});static \u0275inj=Y({})}return t})(),Cn=class extends ct{constructor(o,e,n){super(Sn(e),Vn(n,e)),this.controls=o,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(o){return this.controls[this._adjustIndex(o)]}push(o,e={}){this.controls.push(o),this._registerControl(o),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(o,e,n={}){this.controls.splice(o,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(o,e={}){let n=this._adjustIndex(o);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(o,e,n={}){let i=this._adjustIndex(o);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),e&&(this.controls.splice(i,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(o,e={}){Hi(this,!1,o),o.forEach((n,i)=>{Ri(this,!1,i),this.at(i).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(o,e={}){o!=null&&(o.forEach((n,i)=>{this.at(i)&&this.at(i).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(o=[],e={}){this._forEachChild((n,i)=>{n.reset(o[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(o=>o.getRawValue())}clear(o={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:o.emitEvent}))}_adjustIndex(o){return o<0?o+this.length:o}_syncPendingControls(){let o=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return o&&this.updateValueAndValidity({onlySelf:!0}),o}_forEachChild(o){this.controls.forEach((e,n)=>{o(e,n)})}_updateValue(){this.value=this.controls.filter(o=>o.enabled||this.disabled).map(o=>o.value)}_anyControls(o){return this.controls.some(e=>e.enabled&&o(e))}_setUpControls(){this._forEachChild(o=>this._registerControl(o))}_allControlsDisabled(){for(let o of this.controls)if(o.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(o){o.setParent(this),o._registerOnCollectionChange(this._onCollectionChange)}_find(o){return this.at(o)??null}};function wi(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var mc=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let i=this._reduceControls(e),r={};return wi(n)?r=n:n!==null&&(r.validators=n.validator,r.asyncValidators=n.asyncValidator),new jt(i,r)}record(e,n=null){let i=this._reduceControls(e);return new _n(i,n)}control(e,n,i){let r={};return this.useNonNullable?(wi(n)?r=n:(r.validators=n,r.asyncValidators=i),new bt(e,de(I({},r),{nonNullable:!0}))):new bt(e,n,i)}array(e,n,i){let r=e.map(s=>this._createControl(s));return new Cn(r,n,i)}_reduceControls(e){let n={};return Object.keys(e).forEach(i=>{n[i]=this._createControl(e[i])}),n}_createControl(e){if(e instanceof bt)return e;if(e instanceof ct)return e;if(Array.isArray(e)){let n=e[0],i=e.length>1?e[1]:null,r=e.length>2?e[2]:null;return this.control(n,i,r)}else return this.control(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=R({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var gc=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:qt,useValue:e.callSetDisabledState??Ut}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=X({type:t});static \u0275inj=Y({imports:[Qi]})}return t})(),bc=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:qi,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:qt,useValue:e.callSetDisabledState??Ut}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=X({type:t});static \u0275inj=Y({imports:[Qi]})}return t})();function dt(...t){if(t){let o=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")o.push(n);else if(i==="object"){let r=Array.isArray(n)?[dt(...n)]:Object.entries(n).map(([s,l])=>l?s:void 0);o=r.length?o.concat(r.filter(s=>!!s)):o}}return o.join(" ").trim()}}var Qt={};function Ve(t="pui_id_"){return Object.hasOwn(Qt,t)||(Qt[t]=0),Qt[t]++,`${t}${Qt[t]}`}var Ki=(()=>{class t extends H{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275prov=R({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),G=(()=>{class t{document=y(Vt);platformId=y(xt);el=y(Qe);injector=y(on);cd=y(It);renderer=y(pt);config=y(fi);baseComponentStyle=y(Ki);baseStyle=y(H);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Ve("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",i={}){return di(e,n,i)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!qn(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>fn.off("theme:change",e))}_loadStyles(){let e=()=>{st.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),st.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!st.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),st.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!Xe.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,I({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,I({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,I({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(I({name:"global-style"},this.styleOptions),r),Xe.setLoadedStyleName("common")}if(!Xe.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,I({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(I({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),Xe.setLoadedStyleName(this.componentStyle?.name)}if(!Xe.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,I({name:"layer-order",first:!0},this.styleOptions)),Xe.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(n,I({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){st.clearLoadedStyleNames(),fn.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n={}){return dt(this._getOptionValue(this.$style?.classes,e,I({instance:this},n)))}sx(e="",n=!0,i={}){if(n)return this._getOptionValue(this.$style?.inlineStyles,e,I({instance:this},i))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=dt;static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,inputs:{dt:"dt"},features:[V([Ki,H]),ue]})}return t})();var et=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let i=n.trim().split(" ");for(let r=0;r<i.length;r++)e.classList.add(i[r])}else{let i=n.split(" ");for(let r=0;r<i.length;r++)e.className+=" "+i[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,i=0;for(var r=0;r<n.length;r++){if(n[r]==e)return i;n[r].nodeType==1&&i++}return-1}static indexWithinGroup(e,n){let i=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==e)return r;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,i="self"){i!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,i="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),i==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,i=!0){let r=oe=>{if(oe)return getComputedStyle(oe).getPropertyValue("position")==="relative"?oe:r(oe.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),l=n.offsetHeight,m=n.getBoundingClientRect(),C=this.getWindowScrollTop(),b=this.getWindowScrollLeft(),k=this.getViewport(),j=r(e)?.getBoundingClientRect()||{top:-1*C,left:-1*b},K,ce,F="top";m.top+l+s.height>k.height?(K=m.top-j.top-s.height,F="bottom",m.top+K<0&&(K=-1*m.top)):(K=l+m.top-j.top,F="top");let B=m.left+s.width-k.width,ee=m.left-j.left;if(s.width>k.width?ce=(m.left-j.left)*-1:B>0?ce=ee-B:ce=m.left-j.left,e.style.top=K+"px",e.style.left=ce+"px",e.style.transformOrigin=F,i){let oe=Kn(/-anchor-gutter$/)?.value;e.style.marginTop=F==="bottom"?`calc(${oe??"2px"} * -1)`:oe??""}}static absolutePosition(e,n,i=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,l=r.width,m=n.offsetHeight,C=n.offsetWidth,b=n.getBoundingClientRect(),k=this.getWindowScrollTop(),O=this.getWindowScrollLeft(),j=this.getViewport(),K,ce;b.top+m+s>j.height?(K=b.top+k-s,e.style.transformOrigin="bottom",K<0&&(K=k)):(K=m+b.top+k,e.style.transformOrigin="top"),b.left+l>j.width?ce=Math.max(0,b.left+O+C-l):ce=b.left+O,e.style.top=K+"px",e.style.left=ce+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let i=this.getParents(e),r=/(auto|scroll)/,s=l=>{let m=window.getComputedStyle(l,null);return r.test(m.getPropertyValue("overflow"))||r.test(m.getPropertyValue("overflowX"))||r.test(m.getPropertyValue("overflowY"))};for(let l of i){let m=l.nodeType===1&&l.dataset.scrollselectors;if(m){let C=m.split(",");for(let b of C){let k=this.findSingle(l,b);k&&s(k)&&n.push(k)}}l.nodeType!==9&&s(l)&&n.push(l)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),l=s?parseFloat(s):0,m=e.getBoundingClientRect(),b=n.getBoundingClientRect().top+document.body.scrollTop-(m.top+document.body.scrollTop)-r-l,k=e.scrollTop,O=e.clientHeight,j=this.getOuterHeight(n);b<0?e.scrollTop=k+b:b+j>O&&(e.scrollTop=k+b-O+j)}static fadeIn(e,n){e.style.opacity=0;let i=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,e.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(e,n){var i=1,r=50,s=n,l=r/s;let m=setInterval(()=>{i=i-l,i<=0&&(i=0,clearInterval(m)),e.style.opacity=i},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let i=e.offsetWidth;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(e,n){let i=e.offsetHeight;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let e=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||i.clientWidth||r.clientWidth,l=e.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:l}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var i=e.indexOf("Trident/");if(i>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,i){e[n].apply(e,i)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let i=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of i){let l=getComputedStyle(s);this.isVisible(s)&&l.display!="none"&&l.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let i=this.findSingle(e,this.getFocusableSelectorString(n));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,n=""){let i=this.getFocusableElements(e,n);return i.length>0?i[0]:null}static getLastFocusableElement(e,n){let i=this.getFocusableElements(e,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,n=!1){let i=t.getFocusableElements(e),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(l=>!!(l&&l.constructor&&l.call&&l.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let i=e.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...i){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...i),r}}static setAttribute(e,n="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(n,i)}static setAttributes(e,n={}){if(this.isElement(e)){let i=(r,s)=>{let l=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((m,C)=>{if(C!=null){let b=typeof C;if(b==="string"||b==="number")m.push(C);else if(b==="object"){let k=Array.isArray(C)?i(r,C):Object.entries(C).map(([O,j])=>r==="style"&&(j||j===0)?`${O.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${j}`:j?O:void 0);m=k.length?m.concat(k.filter(O=>!!O)):m}}return m},l)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let l=r.match(/^on(.+)/);l?e.addEventListener(l[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();function Pc(){Un({variableName:mn("scrollbar.width").name})}function Zi(){Qn({variableName:mn("scrollbar.width").name})}var ut=class{element;listener;scrollableParents;constructor(o,e=()=>{}){this.element=o,this.listener=e}bindScrollListener(){this.scrollableParents=et.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Kt=(()=>{class t extends G{autofocus=!1;focused=!1;platformId=y(xt);document=y(Vt);host=y(Qe);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){we(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=et.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275dir=A({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[f]})}return t})();var Yi=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var wr=`
    ${Yi}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Ir={root:({instance:t})=>["p-badge p-component",{"p-badge-circle":Re(t.value())&&String(t.value()).length===1,"p-badge-dot":Be(t.value()),"p-badge-sm":t.size()==="small"||t.badgeSize()==="small","p-badge-lg":t.size()==="large"||t.badgeSize()==="large","p-badge-xl":t.size()==="xlarge"||t.badgeSize()==="xlarge","p-badge-info":t.severity()==="info","p-badge-success":t.severity()==="success","p-badge-warn":t.severity()==="warn","p-badge-danger":t.severity()==="danger","p-badge-secondary":t.severity()==="secondary","p-badge-contrast":t.severity()==="contrast"}]},Xi=(()=>{class t extends H{name="badge";theme=wr;classes=Ir;static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275prov=R({token:t,factory:t.\u0275fac})}return t})();var En=(()=>{class t extends G{styleClass=S();badgeSize=S();size=S();severity=S();value=S();badgeDisabled=S(!1,{transform:h});_componentStyle=y(Xi);static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,i){n&2&&(g(i.cn(i.cx("root"),i.styleClass())),it("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[V([Xi]),f],decls:1,vars:1,template:function(n,i){n&1&&ve(0),n&2&&Le(i.value())},dependencies:[ie,Q],encapsulation:2,changeDetection:0})}return t})(),Ji=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=X({type:t});static \u0275inj=Y({imports:[En,Q,Q]})}return t})();var Vr=["*"],Tr={root:"p-fluid"},eo=(()=>{class t extends H{name="fluid";classes=Tr;static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275prov=R({token:t,factory:t.\u0275fac})}return t})();var tt=(()=>{class t extends G{_componentStyle=y(eo);static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,i){n&2&&g(i.cx("root"))},features:[V([eo]),f],ngContentSelectors:Vr,decls:1,vars:0,template:function(n,i){n&1&&(pe(),he(0))},dependencies:[ie],encapsulation:2,changeDetection:0})}return t})();var Er=["*"],kr=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,to=(()=>{class t extends H{name="baseicon";css=kr;static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275prov=R({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var me=(()=>{class t extends G{spin=!1;_componentStyle=y(to);getClassNames(){return dt("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,i){n&2&&g(i.getClassNames())},inputs:{spin:[2,"spin","spin",h]},features:[V([to]),f],ngContentSelectors:Er,decls:1,vars:0,template:function(n,i){n&1&&(pe(),he(0))},encapsulation:2,changeDetection:0})}return t})();var Or=["data-p-icon","blank"],no=(()=>{class t extends me{static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["","data-p-icon","blank"]],features:[f],attrs:Or,decls:1,vars:0,consts:[["width","1","height","1","fill","currentColor","fill-opacity","0"]],template:function(n,i){n&1&&(U(),D(0,"rect",0))},encapsulation:2})}return t})();var Dr=["data-p-icon","check"],Zt=(()=>{class t extends me{static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["","data-p-icon","check"]],features:[f],attrs:Dr,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,i){n&1&&(U(),D(0,"path",0))},encapsulation:2})}return t})();var Fr=["data-p-icon","chevron-down"],io=(()=>{class t extends me{static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["","data-p-icon","chevron-down"]],features:[f],attrs:Fr,decls:1,vars:0,consts:[["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(n,i){n&1&&(U(),D(0,"path",0))},encapsulation:2})}return t})();var Mr=["data-p-icon","minus"],oo=(()=>{class t extends me{static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["","data-p-icon","minus"]],features:[f],attrs:Mr,decls:1,vars:0,consts:[["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,i){n&1&&(U(),D(0,"path",0))},encapsulation:2})}return t})();var Ar=["data-p-icon","search"],ro=(()=>{class t extends me{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Ve()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["","data-p-icon","search"]],features:[f],attrs:Ar,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(U(),x(0,"g"),D(1,"path",0),w(),x(2,"defs")(3,"clipPath",1),D(4,"rect",2),w()()),n&2&&(E("clip-path",i.pathId),d(3),a("id",i.pathId))},encapsulation:2})}return t})();var Lr=["data-p-icon","spinner"],Yt=(()=>{class t extends me{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Ve()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["","data-p-icon","spinner"]],features:[f],attrs:Lr,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(U(),x(0,"g"),D(1,"path",0),w(),x(2,"defs")(3,"clipPath",1),D(4,"rect",2),w()()),n&2&&(E("clip-path",i.pathId),d(3),a("id",i.pathId))},encapsulation:2})}return t})();var Pr=["data-p-icon","times"],so=(()=>{class t extends me{static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["","data-p-icon","times"]],features:[f],attrs:Pr,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,i){n&1&&(U(),D(0,"path",0))},encapsulation:2})}return t})();var lo=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var zr=`
    ${lo}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,Nr={root:"p-ink"},ao=(()=>{class t extends H{name="ripple";theme=zr;classes=Nr;static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275prov=R({token:t,factory:t.\u0275fac})}return t})();var Xt=(()=>{class t extends G{zone=y(Te);_componentStyle=y(ao);animationListener;mouseDownListener;timeout;constructor(){super(),St(()=>{we(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(Ne(n,"p-ink-active"),!Oe(n)&&!Fe(n)){let l=Math.max(ye(this.el.nativeElement),De(this.el.nativeElement));n.style.height=l+"px",n.style.width=l+"px"}let i=oi(this.el.nativeElement),r=e.pageX-i.left+this.document.body.scrollTop-Fe(n)/2,s=e.pageY-i.top+this.document.body.scrollLeft-Oe(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),ke(n,"p-ink-active"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&Ne(l,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&Ne(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),Ne(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ri(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[V([ao]),f]})}return t})();var co=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Br=["content"],Rr=["loadingicon"],Hr=["icon"],jr=["*"],ho=t=>({class:t});function $r(t,o){t&1&&ne(0)}function Gr(t,o){if(t&1&&D(0,"span"),t&2){let e=c(3);g(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon)),E("aria-hidden",!0)("data-pc-section","loadingicon")}}function Wr(t,o){if(t&1&&(U(),D(0,"svg",7)),t&2){let e=c(3);g(e.cn(e.cx("loadingIcon"),e.spinnerIconClass())),a("spin",!0),E("aria-hidden",!0)("data-pc-section","loadingicon")}}function qr(t,o){if(t&1&&(W(0),p(1,Gr,1,4,"span",3)(2,Wr,1,5,"svg",6),q()),t&2){let e=c(2);d(),a("ngIf",e.loadingIcon),d(),a("ngIf",!e.loadingIcon)}}function Ur(t,o){}function Qr(t,o){if(t&1&&p(0,Ur,0,0,"ng-template",8),t&2){let e=c(2);a("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Kr(t,o){if(t&1&&(W(0),p(1,qr,3,2,"ng-container",2)(2,Qr,1,1,null,5),q()),t&2){let e=c();d(),a("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),d(),a("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",te(3,ho,e.cx("loadingIcon")))}}function Zr(t,o){if(t&1&&D(0,"span"),t&2){let e=c(2);g(e.cn("icon",e.iconClass())),E("data-pc-section","icon")}}function Yr(t,o){}function Xr(t,o){if(t&1&&p(0,Yr,0,0,"ng-template",8),t&2){let e=c(2);a("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Jr(t,o){if(t&1&&(W(0),p(1,Zr,1,3,"span",3)(2,Xr,1,1,null,5),q()),t&2){let e=c();d(),a("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),d(),a("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",te(3,ho,e.cx("icon")))}}function es(t,o){if(t&1&&(x(0,"span"),ve(1),w()),t&2){let e=c();g(e.cx("label")),E("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),d(),Le(e.label)}}function ts(t,o){if(t&1&&D(0,"p-badge",9),t&2){let e=c();a("value",e.badge)("severity",e.badgeSeverity)}}var ns={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":(t.icon||t.buttonProps?.icon||t.iconTemplate||t._iconTemplate||t.loadingIcon||t.loadingIconTemplate||t._loadingIconTemplate)&&!t.label&&!t.buttonProps?.label,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.iconClass()).filter(([,o])=>!!o).reduce((o,[e])=>o+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},Ge=(()=>{class t extends H{name="button";theme=co;classes=ns;static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275prov=R({token:t,factory:t.\u0275fac})}return t})();var $e={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},uo=(()=>{class t extends G{_componentStyle=y(Ge);static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275dir=A({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,i){n&2&&Ke("p-button-label",!0)},features:[V([Ge]),f]})}return t})(),po=(()=>{class t extends G{_componentStyle=y(Ge);static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275dir=A({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,i){n&2&&Ke("p-button-icon",!0)},features:[V([Ge]),f]})}return t})(),wu=(()=>{class t extends G{iconPos="left";loadingIcon;set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=rn(po);labelSignal=rn(uo);isIconOnly=Z(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}_severity;get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid=S(void 0,{transform:h});_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values($e);pcFluid=y(tt,{optional:!0,host:!0,skipSelf:!0});isTextButton=Z(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=y(Ge);ngAfterViewInit(){super.ngAfterViewInit(),ke(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}getStyleClass(){let e=[$e.button,$e.component];return this.icon&&!this.label&&Be(this.htmlElement.textContent)&&e.push($e.iconOnly),this.loading&&(e.push($e.disabled,$e.loading),!this.icon&&this.label&&e.push($e.labelOnly),this.icon&&!this.label&&!Be(this.htmlElement.textContent)&&e.push($e.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(i=>e.some(r=>i===`p-button-${r}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!se(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!se(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let i=this.label?"p-button-icon-"+this.iconPos:null;i&&ke(n,i);let r=this.getIconClass();r&&ke(n,r),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let e=se(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=se(this.htmlElement,".p-button-icon"),n=se(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275dir=A({type:t,selectors:[["","pButton",""]],contentQueries:function(n,i,r){n&1&&(ln(r,i.iconSignal,po,5),ln(r,i.labelSignal,uo,5)),n&2&&Rn(2)},hostVars:4,hostBindings:function(n,i){n&2&&Ke("p-button-icon-only",i.isIconOnly())("p-button-text",i.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",h],rounded:[2,"rounded","rounded",h],text:[2,"text","text",h],outlined:[2,"outlined","outlined",h],size:"size",plain:[2,"plain","plain",h],fluid:[1,"fluid"],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[V([Ge]),f]})}return t})(),is=(()=>{class t extends G{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=S(void 0,{transform:h});onClick=new T;onFocus=new T;onBlur=new T;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=y(tt,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=y(Ge);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,[this.icon]:!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&(L(r,Br,5),L(r,Rr,5),L(r,Hr,5),L(r,Me,4)),n&2){let s;_(s=v())&&(i.contentTemplate=s.first),_(s=v())&&(i.loadingIconTemplate=s.first),_(s=v())&&(i.iconTemplate=s.first),_(s=v())&&(i.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",h],loading:[2,"loading","loading",h],loadingIcon:"loadingIcon",raised:[2,"raised","raised",h],rounded:[2,"rounded","rounded",h],text:[2,"text","text",h],plain:[2,"plain","plain",h],severity:"severity",outlined:[2,"outlined","outlined",h],link:[2,"link","link",h],tabindex:[2,"tabindex","tabindex",fe],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",h],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[V([Ge]),f],ngContentSelectors:jr,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(n,i){n&1&&(pe(),x(0,"button",0),$("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),he(1),p(2,$r,1,0,"ng-container",1)(3,Kr,3,5,"ng-container",2)(4,Jr,3,5,"ng-container",2)(5,es,2,5,"span",3)(6,ts,1,2,"p-badge",4),w()),n&2&&(g(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),a("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus)),E("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex)),d(2),a("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),d(),a("ngIf",i.loading),d(),a("ngIf",!i.loading),d(),a("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),d(),a("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[ie,Ce,xe,Pe,Xt,Kt,Yt,Ji,En,Q],encapsulation:2,changeDetection:0})}return t})(),Iu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=X({type:t});static \u0275inj=Y({imports:[ie,is,Q,Q]})}return t})();var en=(()=>{class t extends G{modelValue=le(void 0);$filled=Z(()=>Re(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275dir=A({type:t,features:[f]})}return t})();var fo=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var os=`
    ${fo}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,rs={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},mo=(()=>{class t extends H{name="inputtext";theme=os;classes=rs;static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275prov=R({token:t,factory:t.\u0275fac})}return t})();var go=(()=>{class t extends en{ngControl=y(Se,{optional:!0,self:!0});pcFluid=y(tt,{optional:!0,host:!0,skipSelf:!0});pSize;variant=S();fluid=S(void 0,{transform:h});invalid=S(void 0,{transform:h});$variant=Z(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=y(mo);ngAfterViewInit(){super.ngAfterViewInit(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}ngDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275dir=A({type:t,selectors:[["","pInputText",""]],hostVars:2,hostBindings:function(n,i){n&1&&$("input",function(s){return i.onInput(s)}),n&2&&g(i.cx("root"))},inputs:{pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[V([mo]),f]})}return t})(),$u=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=X({type:t});static \u0275inj=Y({})}return t})();var tn=(()=>{class t extends en{required=S(void 0,{transform:h});invalid=S(void 0,{transform:h});disabled=S(void 0,{transform:h});name=S();_disabled=le(!1);$disabled=Z(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,n){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275dir=A({type:t,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[f]})}return t})();var bo=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var ss=["icon"],ls=["input"],as=(t,o)=>({checked:t,class:o});function cs(t,o){if(t&1&&D(0,"span",7),t&2){let e=c(3);g(e.cx("icon")),a("ngClass",e.checkboxIcon),E("data-pc-section","icon")}}function ds(t,o){if(t&1&&(U(),D(0,"svg",8)),t&2){let e=c(3);g(e.cx("icon")),E("data-pc-section","icon")}}function us(t,o){if(t&1&&(W(0),p(1,cs,1,4,"span",5)(2,ds,1,3,"svg",6),q()),t&2){let e=c(2);d(),a("ngIf",e.checkboxIcon),d(),a("ngIf",!e.checkboxIcon)}}function ps(t,o){if(t&1&&(U(),D(0,"svg",9)),t&2){let e=c(2);g(e.cx("icon")),E("data-pc-section","icon")}}function hs(t,o){if(t&1&&(W(0),p(1,us,3,2,"ng-container",2)(2,ps,1,3,"svg",4),q()),t&2){let e=c();d(),a("ngIf",e.checked),d(),a("ngIf",e._indeterminate())}}function fs(t,o){}function ms(t,o){t&1&&p(0,fs,0,0,"ng-template")}var gs=`
    ${bo}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,bs={root:({instance:t})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":t.checked,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-checkbox-sm p-inputfield-sm":t.size()==="small","p-checkbox-lg p-inputfield-lg":t.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},yo=(()=>{class t extends H{name="checkbox";theme=gs;classes=bs;static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275prov=R({token:t,factory:t.\u0275fac})}return t})();var ys={provide:je,useExisting:be(()=>_o),multi:!0},_o=(()=>{class t extends tn{value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=S();size=S();onChange=new T;onFocus=new T;onBlur=new T;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:ci(this.value,this.modelValue())}_indeterminate=le(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=y(yo);$variant=Z(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e),e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}updateModel(e){let n,i=this.injector.get(Se,null,{optional:!0,self:!0}),r=i&&!this.formControl?i.value:this.modelValue();this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(n),this.onModelChange(n)):(this.checked||this._indeterminate()?n=r.filter(s=>!At(s,this.value)):n=r?[...r,this.value]:[this.value],this.onModelChange(n),this.writeModelValue(n),this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(e,n){n(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,i,r){if(n&1&&(L(r,ss,4),L(r,Me,4)),n&2){let s;_(s=v())&&(i.checkboxIconTemplate=s.first),_(s=v())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&ae(ls,5),n&2){let r;_(r=v())&&(i.inputViewChild=r.first)}},hostVars:6,hostBindings:function(n,i){n&2&&(E("data-pc-name","checkbox")("data-p-highlight",i.checked)("data-p-checked",i.checked)("data-p-disabled",i.$disabled()),g(i.cn(i.cx("root"),i.styleClass)))},inputs:{value:"value",binary:[2,"binary","binary",h],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",fe],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",h],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",h],autofocus:[2,"autofocus","autofocus",h],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[V([ys,yo]),f,ue],decls:5,vars:22,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class",4,"ngIf"],[3,"class","ngClass",4,"ngIf"],["data-p-icon","check",3,"class",4,"ngIf"],[3,"ngClass"],["data-p-icon","check"],["data-p-icon","minus"]],template:function(n,i){if(n&1){let r=re();x(0,"input",1,0),$("focus",function(l){return P(r),z(i.onInputFocus(l))})("blur",function(l){return P(r),z(i.onInputBlur(l))})("change",function(l){return P(r),z(i.handleChange(l))}),w(),x(2,"div"),p(3,hs,3,2,"ng-container",2)(4,ms,1,0,null,3),w()}n&2&&(Ze(i.inputStyle),g(i.cn(i.cx("input"),i.inputClass)),a("checked",i.checked),E("id",i.inputId)("value",i.value)("name",i.name())("tabindex",i.tabindex)("required",i.required()?"":void 0)("readonly",i.readonly?"":void 0)("disabled",i.$disabled()?"":void 0)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel),d(2),g(i.cx("box")),d(),a("ngIf",!i.checkboxIconTemplate&&!i._checkboxIconTemplate),d(),a("ngTemplateOutlet",i.checkboxIconTemplate||i._checkboxIconTemplate)("ngTemplateOutletContext",Ee(19,as,i.checked,i.cx("icon"))))},dependencies:[ie,Tt,Ce,xe,Q,Zt,oo],encapsulation:2,changeDetection:0})}return t})(),gp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=X({type:t});static \u0275inj=Y({imports:[_o,Q,Q]})}return t})();var vo=(()=>{class t extends tn{pcFluid=y(tt,{optional:!0,host:!0,skipSelf:!0});fluid=S(void 0,{transform:h});variant=S();size=S();inputSize=S();pattern=S();min=S();max=S();step=S();minlength=S();maxlength=S();$variant=Z(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275dir=A({type:t,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[f]})}return t})();var Co=`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`;var _s=["*"],vs={root:({instance:t})=>["p-iconfield",{"p-iconfield-left":t.iconPosition=="left","p-iconfield-right":t.iconPosition=="right"}]},xo=(()=>{class t extends H{name="iconfield";theme=Co;classes=vs;static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275prov=R({token:t,factory:t.\u0275fac})}return t})();var kn=(()=>{class t extends G{iconPosition="left";styleClass;_componentStyle=y(xo);static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(n,i){n&2&&g(i.cn(i.cx("root"),i.styleClass))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},features:[V([xo]),f],ngContentSelectors:_s,decls:1,vars:0,template:function(n,i){n&1&&(pe(),he(0))},dependencies:[ie],encapsulation:2,changeDetection:0})}return t})(),Lp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=X({type:t});static \u0275inj=Y({imports:[kn]})}return t})();var Cs=["*"],xs={root:"p-inputicon"},wo=(()=>{class t extends H{name="inputicon";classes=xs;static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275prov=R({token:t,factory:t.\u0275fac})}return t})(),On=(()=>{class t extends G{styleClass;_componentStyle=y(wo);static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(n,i){n&2&&g(i.cn(i.cx("root"),i.styleClass))},inputs:{styleClass:"styleClass"},features:[V([wo]),f],ngContentSelectors:Cs,decls:1,vars:0,template:function(n,i){n&1&&(pe(),he(0))},dependencies:[ie,Q],encapsulation:2,changeDetection:0})}return t})(),Qp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=X({type:t});static \u0275inj=Y({imports:[On,Q,Q]})}return t})();var nt=class t{static isArray(o,e=!0){return Array.isArray(o)&&(e||o.length!==0)}static isObject(o,e=!0){return typeof o=="object"&&!Array.isArray(o)&&o!=null&&(e||Object.keys(o).length!==0)}static equals(o,e,n){return n?this.resolveFieldData(o,n)===this.resolveFieldData(e,n):this.equalsByValue(o,e)}static equalsByValue(o,e){if(o===e)return!0;if(o&&e&&typeof o=="object"&&typeof e=="object"){var n=Array.isArray(o),i=Array.isArray(e),r,s,l;if(n&&i){if(s=o.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.equalsByValue(o[r],e[r]))return!1;return!0}if(n!=i)return!1;var m=this.isDate(o),C=this.isDate(e);if(m!=C)return!1;if(m&&C)return o.getTime()==e.getTime();var b=o instanceof RegExp,k=e instanceof RegExp;if(b!=k)return!1;if(b&&k)return o.toString()==e.toString();var O=Object.keys(o);if(s=O.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,O[r]))return!1;for(r=s;r--!==0;)if(l=O[r],!this.equalsByValue(o[l],e[l]))return!1;return!0}return o!==o&&e!==e}static resolveFieldData(o,e){if(o&&e){if(this.isFunction(e))return e(o);if(e.indexOf(".")==-1)return o[e];{let n=e.split("."),i=o;for(let r=0,s=n.length;r<s;++r){if(i==null)return null;i=i[n[r]]}return i}}else return null}static isFunction(o){return!!(o&&o.constructor&&o.call&&o.apply)}static reorderArray(o,e,n){let i;o&&e!==n&&(n>=o.length&&(n%=o.length,e%=o.length),o.splice(n,0,o.splice(e,1)[0]))}static insertIntoOrderedArray(o,e,n,i){if(n.length>0){let r=!1;for(let s=0;s<n.length;s++)if(this.findIndexInList(n[s],i)>e){n.splice(s,0,o),r=!0;break}r||n.push(o)}else n.push(o)}static findIndexInList(o,e){let n=-1;if(e){for(let i=0;i<e.length;i++)if(e[i]==o){n=i;break}}return n}static contains(o,e){if(o!=null&&e&&e.length){for(let n of e)if(this.equals(o,n))return!0}return!1}static removeAccents(o){return o&&(o=o.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),o}static isDate(o){return Object.prototype.toString.call(o)==="[object Date]"}static isEmpty(o){return o==null||o===""||Array.isArray(o)&&o.length===0||!this.isDate(o)&&typeof o=="object"&&Object.keys(o).length===0}static isNotEmpty(o){return!this.isEmpty(o)}static compare(o,e,n,i=1){let r=-1,s=this.isEmpty(o),l=this.isEmpty(e);return s&&l?r=0:s?r=i:l?r=-i:typeof o=="string"&&typeof e=="string"?r=o.localeCompare(e,n,{numeric:!0}):r=o<e?-1:o>e?1:0,r}static sort(o,e,n=1,i,r=1){let s=t.compare(o,e,i,n),l=n;return(t.isEmpty(o)||t.isEmpty(e))&&(l=r===1?n:r),l*s}static merge(o,e){if(!(o==null&&e==null)){{if((o==null||typeof o=="object")&&(e==null||typeof e=="object"))return I(I({},o||{}),e||{});if((o==null||typeof o=="string")&&(e==null||typeof e=="string"))return[o||"",e||""].join(" ")}return e||o}}static isPrintableCharacter(o=""){return this.isNotEmpty(o)&&o.length===1&&o.match(/\S| /)}static getItemValue(o,...e){return this.isFunction(o)?o(...e):o}static findLastIndex(o,e){let n=-1;if(this.isNotEmpty(o))try{n=o.findLastIndex(e)}catch{n=o.lastIndexOf([...o].reverse().find(e))}return n}static findLast(o,e){let n;if(this.isNotEmpty(o))try{n=o.findLast(e)}catch{n=[...o].reverse().find(e)}return n}static deepEquals(o,e){if(o===e)return!0;if(o&&e&&typeof o=="object"&&typeof e=="object"){var n=Array.isArray(o),i=Array.isArray(e),r,s,l;if(n&&i){if(s=o.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(o[r],e[r]))return!1;return!0}if(n!=i)return!1;var m=o instanceof Date,C=e instanceof Date;if(m!=C)return!1;if(m&&C)return o.getTime()==e.getTime();var b=o instanceof RegExp,k=e instanceof RegExp;if(b!=k)return!1;if(b&&k)return o.toString()==e.toString();var O=Object.keys(o);if(s=O.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,O[r]))return!1;for(r=s;r--!==0;)if(l=O[r],!this.deepEquals(o[l],e[l]))return!1;return!0}return o!==o&&e!==e}static minifyCSS(o){return o&&o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(o){return this.isString(o)?o.replace(/(-|_)/g,"").toLowerCase():o}static isString(o,e=!0){return typeof o=="string"&&(e||o!=="")}},Io=0;function ch(t="pn_id_"){return Io++,`${t}${Io}`}function ws(){let t=[],o=(r,s)=>{let l=t.length>0?t[t.length-1]:{key:r,value:s},m=l.value+(l.key===r?0:s)+2;return t.push({key:r,value:m}),m},e=r=>{t=t.filter(s=>s.value!==r)},n=()=>t.length>0?t[t.length-1].value:0,i=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:i,set:(r,s,l)=>{s&&(s.style.zIndex=String(o(r,l)))},clear:r=>{r&&(e(i(r)),r.style.zIndex="")},getCurrent:()=>n(),generateZIndex:o,revertZIndex:e}}var We=ws();var So=["content"],Ss=["overlay"],Vs=["*"],Ts=(t,o,e,n,i,r,s,l,m,C,b,k,O,j)=>({"p-overlay p-component":!0,"p-overlay-modal p-overlay-mask p-overlay-mask-enter":t,"p-overlay-center":o,"p-overlay-top":e,"p-overlay-top-start":n,"p-overlay-top-end":i,"p-overlay-bottom":r,"p-overlay-bottom-start":s,"p-overlay-bottom-end":l,"p-overlay-left":m,"p-overlay-left-start":C,"p-overlay-left-end":b,"p-overlay-right":k,"p-overlay-right-start":O,"p-overlay-right-end":j}),Es=(t,o,e)=>({showTransitionParams:t,hideTransitionParams:o,transform:e}),ks=t=>({value:"visible",params:t}),Os=t=>({mode:t}),Ds=t=>({$implicit:t});function Fs(t,o){t&1&&ne(0)}function Ms(t,o){if(t&1){let e=re();x(0,"div",3,1),$("click",function(i){P(e);let r=c(2);return z(r.onOverlayContentClick(i))})("@overlayContentAnimation.start",function(i){P(e);let r=c(2);return z(r.onOverlayContentAnimationStart(i))})("@overlayContentAnimation.done",function(i){P(e);let r=c(2);return z(r.onOverlayContentAnimationDone(i))}),he(2),p(3,Fs,1,0,"ng-container",4),w()}if(t&2){let e=c(2);g(e.contentStyleClass),a("ngStyle",e.contentStyle)("ngClass","p-overlay-content")("@overlayContentAnimation",te(11,ks,Gn(7,Es,e.showTransitionOptions,e.hideTransitionOptions,e.transformOptions[e.modal?e.overlayResponsiveDirection:"default"]))),d(3),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",te(15,Ds,te(13,Os,e.overlayMode)))}}function As(t,o){if(t&1){let e=re();x(0,"div",3,0),$("click",function(){P(e);let i=c();return z(i.onOverlayClick())}),p(2,Ms,4,17,"div",2),w()}if(t&2){let e=c();g(e.styleClass),a("ngStyle",e.style)("ngClass",Wn(5,Ts,[e.modal,e.modal&&e.overlayResponsiveDirection==="center",e.modal&&e.overlayResponsiveDirection==="top",e.modal&&e.overlayResponsiveDirection==="top-start",e.modal&&e.overlayResponsiveDirection==="top-end",e.modal&&e.overlayResponsiveDirection==="bottom",e.modal&&e.overlayResponsiveDirection==="bottom-start",e.modal&&e.overlayResponsiveDirection==="bottom-end",e.modal&&e.overlayResponsiveDirection==="left",e.modal&&e.overlayResponsiveDirection==="left-start",e.modal&&e.overlayResponsiveDirection==="left-end",e.modal&&e.overlayResponsiveDirection==="right",e.modal&&e.overlayResponsiveDirection==="right-start",e.modal&&e.overlayResponsiveDirection==="right-end"])),d(2),a("ngIf",e.visible)}}var Ls=`
.p-overlay {
    position: absolute;
    top: 0;
}

.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
}

/* Github Issue #18560 */
.p-component-overlay.p-component {
    position: relative;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}

.p-overlay-content ~ .p-overlay-content {
    display: none;
}
`,Vo=(()=>{class t extends H{name="overlay";theme=Ls;static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275prov=R({token:t,factory:t.\u0275fac})}return t})(),Ps=Ft([Ot({transform:"{{transform}}",opacity:0}),kt("{{showTransitionParams}}")]),zs=Ft([kt("{{hideTransitionParams}}",Ot({transform:"{{transform}}",opacity:0}))]),To=(()=>{class t extends G{overlayService;zone;get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(e){this._mode=e}get style(){return nt.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(e){this._style=e}get styleClass(){return nt.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(e){this._styleClass=e}get contentStyle(){return nt.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(e){this._contentStyle=e}get contentStyleClass(){return nt.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(e){this._contentStyleClass=e}get target(){let e=this._target||this.overlayOptions?.target;return e===void 0?"@prev":e}set target(e){this._target=e}get autoZIndex(){let e=this._autoZIndex||this.overlayOptions?.autoZIndex;return e===void 0?!0:e}set autoZIndex(e){this._autoZIndex=e}get baseZIndex(){let e=this._baseZIndex||this.overlayOptions?.baseZIndex;return e===void 0?0:e}set baseZIndex(e){this._baseZIndex=e}get showTransitionOptions(){let e=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return e===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":e}set showTransitionOptions(e){this._showTransitionOptions=e}get hideTransitionOptions(){let e=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return e===void 0?".1s linear":e}set hideTransitionOptions(e){this._hideTransitionOptions=e}get listener(){return this._listener||this.overlayOptions?.listener}set listener(e){this._listener=e}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(e){this._responsive=e}get options(){return this._options}set options(e){this._options=e}appendTo=S(void 0);visibleChange=new T;onBeforeShow=new T;onShow=new T;onBeforeHide=new T;onHide=new T;onAnimationStart=new T;onAnimationDone=new T;overlayViewChild;contentViewChild;contentTemplate;templates;hostAttrSelector=S();$appendTo=Z(()=>this.appendTo()||this.config.overlayAppendTo());_contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=y(Vo);documentKeyboardListener;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(we(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return I(I({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return I(I({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return Jn(this.target,this.el?.nativeElement)}constructor(e,n){super(),this.overlayService=e,this.zone=n}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}show(e,n=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),n&&Ie(this.targetEl),this.modal&&ke(this.document?.body,"p-overflow-hidden")}hide(e,n=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),n&&Ie(this.targetEl),this.modal&&Ne(this.document?.body,"p-overflow-hidden");else return}alignOverlay(){!this.modal&&et.alignOverlay(this.overlayEl,this.targetEl,this.$appendTo())}onVisibleChange(e){this._visible=e,this.visibleChange.emit(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl}),this.isOverlayContentClicked=!0}onOverlayContentAnimationStart(e){switch(e.toState){case"visible":this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.autoZIndex&&We.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode]),this.hostAttrSelector()&&this.overlayEl&&this.overlayEl.setAttribute(this.hostAttrSelector(),""),et.appendOverlay(this.overlayEl,this.$appendTo()==="body"?this.document.body:this.$appendTo(),this.$appendTo()),this.alignOverlay();break;case"void":this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.modal&&ke(this.overlayEl,"p-overlay-mask-leave");break}this.handleEvents("onAnimationStart",e)}onOverlayContentAnimationDone(e){let n=this.overlayEl||e.element.parentElement;switch(e.toState){case"visible":this.visible&&(this.show(n,!0),this.bindListeners());break;case"void":if(!this.visible){this.hide(n,!0),this.modalVisible=!1,this.unbindListeners(),et.appendOverlay(this.overlayEl,this.targetEl,this.$appendTo()),We.clear(n),this.cd.markForCheck();break}}this.handleEvents("onAnimationDone",e)}handleEvents(e,n){this[e].emit(n),this.options&&this.options[e]&&this.options[e](n),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](n)}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new ut(this.targetEl,e=>{(this.listener?this.listener(e,{type:"scroll",mode:this.overlayMode,valid:!0}):!0)&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{let i=!(this.targetEl&&(this.targetEl.isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl.contains(e.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(e,{type:"outside",mode:this.overlayMode,valid:e.which!==3&&i}):i)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{(this.listener?this.listener(e,{type:"resize",mode:this.overlayMode,valid:!Ye()}):!Ye())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,"keydown",e=>{if(this.overlayOptions.hideOnEscape===!1||e.code!=="Escape")return;(this.listener?this.listener(e,{type:"keydown",mode:this.overlayMode,valid:!Ye()}):!Ye())&&this.zone.run(()=>{this.hide(e,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}ngOnDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&this.$appendTo()!=="self"&&(this.renderer.appendChild(this.el.nativeElement,this.overlayEl),We.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)(N(hi),N(Te))};static \u0275cmp=M({type:t,selectors:[["p-overlay"]],contentQueries:function(n,i,r){if(n&1&&(L(r,So,4),L(r,Me,4)),n&2){let s;_(s=v())&&(i.contentTemplate=s.first),_(s=v())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&(ae(Ss,5),ae(So,5)),n&2){let r;_(r=v())&&(i.overlayViewChild=r.first),_(r=v())&&(i.contentViewChild=r.first)}},inputs:{visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options",appendTo:[1,"appendTo"],hostAttrSelector:[1,"hostAttrSelector"]},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone"},features:[V([Vo]),f],ngContentSelectors:Vs,decls:1,vars:1,consts:[["overlay",""],["content",""],[3,"ngStyle","class","ngClass","click",4,"ngIf"],[3,"click","ngStyle","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&(pe(),p(0,As,3,20,"div",2)),n&2&&a("ngIf",i.modalVisible)},dependencies:[ie,Tt,Ce,xe,Pe,Q],encapsulation:2,data:{animation:[dn("overlayContentAnimation",[Dt(":enter",[Mt(Ps)]),Dt(":leave",[Mt(zs)])])]},changeDetection:0})}return t})();var Eo=["content"],Ns=["item"],Bs=["loader"],Rs=["loadericon"],Hs=["element"],js=["*"],Dn=(t,o)=>({$implicit:t,options:o}),$s=t=>({numCols:t}),Oo=t=>({options:t}),Gs=()=>({styleClass:"p-virtualscroller-loading-icon"}),Ws=(t,o)=>({rows:t,columns:o});function qs(t,o){t&1&&ne(0)}function Us(t,o){if(t&1&&(W(0),p(1,qs,1,0,"ng-container",10),q()),t&2){let e=c(2);d(),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Ee(2,Dn,e.loadedItems,e.getContentOptions()))}}function Qs(t,o){t&1&&ne(0)}function Ks(t,o){if(t&1&&(W(0),p(1,Qs,1,0,"ng-container",10),q()),t&2){let e=o.$implicit,n=o.index,i=c(3);d(),a("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",Ee(2,Dn,e,i.getOptions(n)))}}function Zs(t,o){if(t&1&&(x(0,"div",null,3),p(2,Ks,2,5,"ng-container",11),w()),t&2){let e=c(2);Ze(e.contentStyle),g(e.cn(e.cx("content"),e.contentStyleClass)),E("data-pc-section","content"),d(2),a("ngForOf",e.loadedItems)("ngForTrackBy",e._trackBy)}}function Ys(t,o){if(t&1&&D(0,"div",12),t&2){let e=c(2);g(e.cx("spacer")),a("ngStyle",e.spacerStyle),E("data-pc-section","spacer")}}function Xs(t,o){t&1&&ne(0)}function Js(t,o){if(t&1&&(W(0),p(1,Xs,1,0,"ng-container",10),q()),t&2){let e=o.index,n=c(4);d(),a("ngTemplateOutlet",n.loaderTemplate||n._loaderTemplate)("ngTemplateOutletContext",te(4,Oo,n.getLoaderOptions(e,n.both&&te(2,$s,n.numItemsInViewport.cols))))}}function el(t,o){if(t&1&&(W(0),p(1,Js,2,6,"ng-container",13),q()),t&2){let e=c(3);d(),a("ngForOf",e.loaderArr)}}function tl(t,o){t&1&&ne(0)}function nl(t,o){if(t&1&&(W(0),p(1,tl,1,0,"ng-container",10),q()),t&2){let e=c(4);d(),a("ngTemplateOutlet",e.loaderIconTemplate||e._loaderIconTemplate)("ngTemplateOutletContext",te(3,Oo,wt(2,Gs)))}}function il(t,o){if(t&1&&(U(),D(0,"svg",14)),t&2){let e=c(4);g(e.cx("loadingIcon")),a("spin",!0),E("data-pc-section","loadingIcon")}}function ol(t,o){if(t&1&&p(0,nl,2,5,"ng-container",6)(1,il,1,4,"ng-template",null,5,ge),t&2){let e=_e(2),n=c(3);a("ngIf",n.loaderIconTemplate||n._loaderIconTemplate)("ngIfElse",e)}}function rl(t,o){if(t&1&&(x(0,"div"),p(1,el,2,1,"ng-container",6)(2,ol,3,2,"ng-template",null,4,ge),w()),t&2){let e=_e(3),n=c(2);g(n.cx("loader")),E("data-pc-section","loader"),d(),a("ngIf",n.loaderTemplate||n._loaderTemplate)("ngIfElse",e)}}function sl(t,o){if(t&1){let e=re();W(0),x(1,"div",7,1),$("scroll",function(i){P(e);let r=c();return z(r.onContainerScroll(i))}),p(3,Us,2,5,"ng-container",6)(4,Zs,3,7,"ng-template",null,2,ge)(6,Ys,1,4,"div",8)(7,rl,4,5,"div",9),w(),q()}if(t&2){let e=_e(5),n=c();d(),g(n.cn(n.cx("root"),n.styleClass)),a("ngStyle",n._style),E("id",n._id)("tabindex",n.tabindex)("data-pc-name","scroller")("data-pc-section","root"),d(2),a("ngIf",n.contentTemplate||n._contentTemplate)("ngIfElse",e),d(3),a("ngIf",n._showSpacer),d(),a("ngIf",!n.loaderDisabled&&n._showLoader&&n.d_loading)}}function ll(t,o){t&1&&ne(0)}function al(t,o){if(t&1&&(W(0),p(1,ll,1,0,"ng-container",10),q()),t&2){let e=c(2);d(),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Ee(5,Dn,e.items,Ee(2,Ws,e._items,e.loadedColumns)))}}function cl(t,o){if(t&1&&(he(0),p(1,al,2,8,"ng-container",15)),t&2){let e=c();d(),a("ngIf",e.contentTemplate||e._contentTemplate)}}var dl=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: dt('virtualscroller.loader.mask.background');
    color: dt('virtualscroller.loader.mask.color');
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: dt('virtualscroller.loader.icon.size');
    width: dt('virtualscroller.loader.icon.size');
    height: dt('virtualscroller.loader.icon.size');
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,ul={root:({instance:t})=>["p-virtualscroller",{"p-virtualscroller-inline":t.inline,"p-virtualscroller-both p-both-scroll":t.both,"p-virtualscroller-horizontal p-horizontal-scroll":t.horizontal}],content:"p-virtualscroller-content",spacer:"p-virtualscroller-spacer",loader:({instance:t})=>["p-virtualscroller-loader",{"p-virtualscroller-loader-mask":!t.loaderTemplate}],loadingIcon:"p-virtualscroller-loading-icon"},ko=(()=>{class t extends H{name="virtualscroller";theme=dl;classes=ul;static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275prov=R({token:t,factory:t.\u0275fac})}return t})();var Fn=(()=>{class t extends G{zone;get id(){return this._id}set id(e){this._id=e}get style(){return this._style}set style(e){this._style=e}get styleClass(){return this._styleClass}set styleClass(e){this._styleClass=e}get tabindex(){return this._tabindex}set tabindex(e){this._tabindex=e}get items(){return this._items}set items(e){this._items=e}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e}get scrollHeight(){return this._scrollHeight}set scrollHeight(e){this._scrollHeight=e}get scrollWidth(){return this._scrollWidth}set scrollWidth(e){this._scrollWidth=e}get orientation(){return this._orientation}set orientation(e){this._orientation=e}get step(){return this._step}set step(e){this._step=e}get delay(){return this._delay}set delay(e){this._delay=e}get resizeDelay(){return this._resizeDelay}set resizeDelay(e){this._resizeDelay=e}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=e}get inline(){return this._inline}set inline(e){this._inline=e}get lazy(){return this._lazy}set lazy(e){this._lazy=e}get disabled(){return this._disabled}set disabled(e){this._disabled=e}get loaderDisabled(){return this._loaderDisabled}set loaderDisabled(e){this._loaderDisabled=e}get columns(){return this._columns}set columns(e){this._columns=e}get showSpacer(){return this._showSpacer}set showSpacer(e){this._showSpacer=e}get showLoader(){return this._showLoader}set showLoader(e){this._showLoader=e}get numToleratedItems(){return this._numToleratedItems}set numToleratedItems(e){this._numToleratedItems=e}get loading(){return this._loading}set loading(e){this._loading=e}get autoSize(){return this._autoSize}set autoSize(e){this._autoSize=e}get trackBy(){return this._trackBy}set trackBy(e){this._trackBy=e}get options(){return this._options}set options(e){this._options=e,e&&typeof e=="object"&&(Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i)),Object.entries(e).forEach(([n,i])=>this[`${n}`]!==i&&(this[`${n}`]=i)))}onLazyLoad=new T;onScroll=new T;onScrollIndexChange=new T;elementViewChild;contentViewChild;height;_id;_style;_styleClass;_tabindex=0;_items;_itemSize=0;_scrollHeight;_scrollWidth;_orientation="vertical";_step=0;_delay=0;_resizeDelay=10;_appendOnly=!1;_inline=!1;_lazy=!1;_disabled=!1;_loaderDisabled=!1;_columns;_showSpacer=!0;_showLoader=!1;_numToleratedItems;_loading;_autoSize=!1;_trackBy;_options;d_loading=!1;d_numToleratedItems;contentEl;contentTemplate;itemTemplate;loaderTemplate;loaderIconTemplate;templates;_contentTemplate;_itemTemplate;_loaderTemplate;_loaderIconTemplate;first=0;last=0;page=0;isRangeChanged=!1;numItemsInViewport=0;lastScrollPos=0;lazyLoadState={};loaderArr=[];spacerStyle={};contentStyle={};scrollTimeout;resizeTimeout;initialized=!1;windowResizeListener;defaultWidth;defaultHeight;defaultContentWidth;defaultContentHeight;_contentStyleClass;get contentStyleClass(){return this._contentStyleClass}set contentStyleClass(e){this._contentStyleClass=e}get vertical(){return this._orientation==="vertical"}get horizontal(){return this._orientation==="horizontal"}get both(){return this._orientation==="both"}get loadedItems(){return this._items&&!this.d_loading?this.both?this._items.slice(this._appendOnly?0:this.first.rows,this.last.rows).map(e=>this._columns?e:Array.isArray(e)?e.slice(this._appendOnly?0:this.first.cols,this.last.cols):e):this.horizontal&&this._columns?this._items:this._items.slice(this._appendOnly?0:this.first,this.last):[]}get loadedRows(){return this.d_loading?this._loaderDisabled?this.loaderArr:[]:this.loadedItems}get loadedColumns(){return this._columns&&(this.both||this.horizontal)?this.d_loading&&this._loaderDisabled?this.both?this.loaderArr[0]:this.loaderArr:this._columns.slice(this.both?this.first.cols:this.first,this.both?this.last.cols:this.last):this._columns}_componentStyle=y(ko);constructor(e){super(),this.zone=e}ngOnInit(){super.ngOnInit(),this.setInitialState()}ngOnChanges(e){super.ngOnChanges(e);let n=!1;if(this.scrollHeight=="100%"&&(this.height="100%"),e.loading){let{previousValue:i,currentValue:r}=e.loading;this.lazy&&i!==r&&r!==this.d_loading&&(this.d_loading=r,n=!0)}if(e.orientation&&(this.lastScrollPos=this.both?{top:0,left:0}:0),e.numToleratedItems){let{previousValue:i,currentValue:r}=e.numToleratedItems;i!==r&&r!==this.d_numToleratedItems&&(this.d_numToleratedItems=r)}if(e.options){let{previousValue:i,currentValue:r}=e.options;this.lazy&&i?.loading!==r?.loading&&r?.loading!==this.d_loading&&(this.d_loading=r.loading,n=!0),i?.numToleratedItems!==r?.numToleratedItems&&r?.numToleratedItems!==this.d_numToleratedItems&&(this.d_numToleratedItems=r.numToleratedItems)}this.initialized&&!n&&(e.items?.previousValue?.length!==e.items?.currentValue?.length||e.itemSize||e.scrollHeight||e.scrollWidth)&&(this.init(),this.calculateAutoSize())}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"loadericon":this._loaderIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewInit(){super.ngAfterViewInit(),Promise.resolve().then(()=>{this.viewInit()})}ngAfterViewChecked(){this.initialized||this.viewInit()}ngOnDestroy(){this.unbindResizeListener(),this.contentEl=null,this.initialized=!1,super.ngOnDestroy()}viewInit(){we(this.platformId)&&!this.initialized&&pn(this.elementViewChild?.nativeElement)&&(this.setInitialState(),this.setContentEl(this.contentEl),this.init(),this.defaultWidth=Fe(this.elementViewChild?.nativeElement),this.defaultHeight=Oe(this.elementViewChild?.nativeElement),this.defaultContentWidth=Fe(this.contentEl),this.defaultContentHeight=Oe(this.contentEl),this.initialized=!0)}init(){this._disabled||(this.setSpacerSize(),setTimeout(()=>{this.setSize()},1),this.calculateOptions(),this.bindResizeListener(),this.cd.detectChanges())}setContentEl(e){this.contentEl=e||this.contentViewChild?.nativeElement||se(this.elementViewChild?.nativeElement,".p-virtualscroller-content")}setInitialState(){this.first=this.both?{rows:0,cols:0}:0,this.last=this.both?{rows:0,cols:0}:0,this.numItemsInViewport=this.both?{rows:0,cols:0}:0,this.lastScrollPos=this.both?{top:0,left:0}:0,(this.d_loading===void 0||this.d_loading===!1)&&(this.d_loading=this._loading||!1),this.d_numToleratedItems=this._numToleratedItems,this.loaderArr=this.loaderArr.length>0?this.loaderArr:[]}getElementRef(){return this.elementViewChild}getPageByFirst(e){return Math.floor(((e??this.first)+this.d_numToleratedItems*4)/(this._step||1))}isPageChanged(e){return this._step?this.page!==this.getPageByFirst(e??this.first):!0}scrollTo(e){this.elementViewChild?.nativeElement?.scrollTo(e)}scrollToIndex(e,n="auto"){if(this.both?e.every(r=>r>-1):e>-1){let r=this.first,{scrollTop:s=0,scrollLeft:l=0}=this.elementViewChild?.nativeElement,{numToleratedItems:m}=this.calculateNumItems(),C=this.getContentPosition(),b=this.itemSize,k=(B=0,ee)=>B<=ee?0:B,O=(B,ee,oe)=>B*ee+oe,j=(B=0,ee=0)=>this.scrollTo({left:B,top:ee,behavior:n}),K=this.both?{rows:0,cols:0}:0,ce=!1,F=!1;this.both?(K={rows:k(e[0],m[0]),cols:k(e[1],m[1])},j(O(K.cols,b[1],C.left),O(K.rows,b[0],C.top)),F=this.lastScrollPos.top!==s||this.lastScrollPos.left!==l,ce=K.rows!==r.rows||K.cols!==r.cols):(K=k(e,m),this.horizontal?j(O(K,b,C.left),s):j(l,O(K,b,C.top)),F=this.lastScrollPos!==(this.horizontal?l:s),ce=K!==r),this.isRangeChanged=ce,F&&(this.first=K)}}scrollInView(e,n,i="auto"){if(n){let{first:r,viewport:s}=this.getRenderedRange(),l=(b=0,k=0)=>this.scrollTo({left:b,top:k,behavior:i}),m=n==="to-start",C=n==="to-end";if(m){if(this.both)s.first.rows-r.rows>e[0]?l(s.first.cols*this._itemSize[1],(s.first.rows-1)*this._itemSize[0]):s.first.cols-r.cols>e[1]&&l((s.first.cols-1)*this._itemSize[1],s.first.rows*this._itemSize[0]);else if(s.first-r>e){let b=(s.first-1)*this._itemSize;this.horizontal?l(b,0):l(0,b)}}else if(C){if(this.both)s.last.rows-r.rows<=e[0]+1?l(s.first.cols*this._itemSize[1],(s.first.rows+1)*this._itemSize[0]):s.last.cols-r.cols<=e[1]+1&&l((s.first.cols+1)*this._itemSize[1],s.first.rows*this._itemSize[0]);else if(s.last-r<=e+1){let b=(s.first+1)*this._itemSize;this.horizontal?l(b,0):l(0,b)}}}else this.scrollToIndex(e,i)}getRenderedRange(){let e=(r,s)=>s||r?Math.floor(r/(s||r)):0,n=this.first,i=0;if(this.elementViewChild?.nativeElement){let{scrollTop:r,scrollLeft:s}=this.elementViewChild.nativeElement;if(this.both)n={rows:e(r,this._itemSize[0]),cols:e(s,this._itemSize[1])},i={rows:n.rows+this.numItemsInViewport.rows,cols:n.cols+this.numItemsInViewport.cols};else{let l=this.horizontal?s:r;n=e(l,this._itemSize),i=n+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:n,last:i}}}calculateNumItems(){let e=this.getContentPosition(),n=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetWidth-e.left:0)||0,i=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetHeight-e.top:0)||0,r=(C,b)=>b||C?Math.ceil(C/(b||C)):0,s=C=>Math.ceil(C/2),l=this.both?{rows:r(i,this._itemSize[0]),cols:r(n,this._itemSize[1])}:r(this.horizontal?n:i,this._itemSize),m=this.d_numToleratedItems||(this.both?[s(l.rows),s(l.cols)]:s(l));return{numItemsInViewport:l,numToleratedItems:m}}calculateOptions(){let{numItemsInViewport:e,numToleratedItems:n}=this.calculateNumItems(),i=(l,m,C,b=!1)=>this.getLast(l+m+(l<C?2:3)*C,b),r=this.first,s=this.both?{rows:i(this.first.rows,e.rows,n[0]),cols:i(this.first.cols,e.cols,n[1],!0)}:i(this.first,e,n);this.last=s,this.numItemsInViewport=e,this.d_numToleratedItems=n,this._showLoader&&(this.loaderArr=this.both?Array.from({length:e.rows}).map(()=>Array.from({length:e.cols})):Array.from({length:e})),this._lazy&&Promise.resolve().then(()=>{this.lazyLoadState={first:this._step?this.both?{rows:0,cols:r.cols}:0:r,last:Math.min(this._step?this._step:this.last,this._items.length)},this.handleEvents("onLazyLoad",this.lazyLoadState)})}calculateAutoSize(){this._autoSize&&!this.d_loading&&Promise.resolve().then(()=>{if(this.contentEl){this.contentEl.style.minHeight=this.contentEl.style.minWidth="auto",this.contentEl.style.position="relative",this.elementViewChild.nativeElement.style.contain="none";let[e,n]=[Fe(this.contentEl),Oe(this.contentEl)];e!==this.defaultContentWidth&&(this.elementViewChild.nativeElement.style.width=""),n!==this.defaultContentHeight&&(this.elementViewChild.nativeElement.style.height="");let[i,r]=[Fe(this.elementViewChild.nativeElement),Oe(this.elementViewChild.nativeElement)];(this.both||this.horizontal)&&(this.elementViewChild.nativeElement.style.width=i<this.defaultWidth?i+"px":this._scrollWidth||this.defaultWidth+"px"),(this.both||this.vertical)&&(this.elementViewChild.nativeElement.style.height=r<this.defaultHeight?r+"px":this._scrollHeight||this.defaultHeight+"px"),this.contentEl.style.minHeight=this.contentEl.style.minWidth="",this.contentEl.style.position="",this.elementViewChild.nativeElement.style.contain=""}})}getLast(e=0,n=!1){return this._items?Math.min(n?(this._columns||this._items[0]).length:this._items.length,e):0}getContentPosition(){if(this.contentEl){let e=getComputedStyle(this.contentEl),n=parseFloat(e.paddingLeft)+Math.max(parseFloat(e.left)||0,0),i=parseFloat(e.paddingRight)+Math.max(parseFloat(e.right)||0,0),r=parseFloat(e.paddingTop)+Math.max(parseFloat(e.top)||0,0),s=parseFloat(e.paddingBottom)+Math.max(parseFloat(e.bottom)||0,0);return{left:n,right:i,top:r,bottom:s,x:n+i,y:r+s}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}}setSize(){if(this.elementViewChild?.nativeElement){let e=this.elementViewChild.nativeElement.parentElement.parentElement,n=this._scrollWidth||`${this.elementViewChild.nativeElement.offsetWidth||e.offsetWidth}px`,i=this._scrollHeight||`${this.elementViewChild.nativeElement.offsetHeight||e.offsetHeight}px`,r=(s,l)=>this.elementViewChild.nativeElement.style[s]=l;this.both||this.horizontal?(r("height",i),r("width",n)):r("height",i)}}setSpacerSize(){if(this._items){let e=this.getContentPosition(),n=(i,r,s,l=0)=>this.spacerStyle=de(I({},this.spacerStyle),{[`${i}`]:(r||[]).length*s+l+"px"});this.both?(n("height",this._items,this._itemSize[0],e.y),n("width",this._columns||this._items[1],this._itemSize[1],e.x)):this.horizontal?n("width",this._columns||this._items,this._itemSize,e.x):n("height",this._items,this._itemSize,e.y)}}setContentPosition(e){if(this.contentEl&&!this._appendOnly){let n=e?e.first:this.first,i=(s,l)=>s*l,r=(s=0,l=0)=>this.contentStyle=de(I({},this.contentStyle),{transform:`translate3d(${s}px, ${l}px, 0)`});if(this.both)r(i(n.cols,this._itemSize[1]),i(n.rows,this._itemSize[0]));else{let s=i(n,this._itemSize);this.horizontal?r(s,0):r(0,s)}}}onScrollPositionChange(e){let n=e.target;if(!n)throw new Error("Event target is null");let i=this.getContentPosition(),r=(F,B)=>F?F>B?F-B:F:0,s=(F,B)=>B||F?Math.floor(F/(B||F)):0,l=(F,B,ee,oe,Ae,qe)=>F<=Ae?Ae:qe?ee-oe-Ae:B+Ae-1,m=(F,B,ee,oe,Ae,qe,vt)=>F<=qe?0:Math.max(0,vt?F<B?ee:F-qe:F>B?ee:F-2*qe),C=(F,B,ee,oe,Ae,qe=!1)=>{let vt=B+oe+2*Ae;return F>=Ae&&(vt+=Ae+1),this.getLast(vt,qe)},b=r(n.scrollTop,i.top),k=r(n.scrollLeft,i.left),O=this.both?{rows:0,cols:0}:0,j=this.last,K=!1,ce=this.lastScrollPos;if(this.both){let F=this.lastScrollPos.top<=b,B=this.lastScrollPos.left<=k;if(!this._appendOnly||this._appendOnly&&(F||B)){let ee={rows:s(b,this._itemSize[0]),cols:s(k,this._itemSize[1])},oe={rows:l(ee.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],F),cols:l(ee.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],B)};O={rows:m(ee.rows,oe.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],F),cols:m(ee.cols,oe.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],B)},j={rows:C(ee.rows,O.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:C(ee.cols,O.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},K=O.rows!==this.first.rows||j.rows!==this.last.rows||O.cols!==this.first.cols||j.cols!==this.last.cols||this.isRangeChanged,ce={top:b,left:k}}}else{let F=this.horizontal?k:b,B=this.lastScrollPos<=F;if(!this._appendOnly||this._appendOnly&&B){let ee=s(F,this._itemSize),oe=l(ee,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,B);O=m(ee,oe,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,B),j=C(ee,O,this.last,this.numItemsInViewport,this.d_numToleratedItems),K=O!==this.first||j!==this.last||this.isRangeChanged,ce=F}}return{first:O,last:j,isRangeChanged:K,scrollPos:ce}}onScrollChange(e){let{first:n,last:i,isRangeChanged:r,scrollPos:s}=this.onScrollPositionChange(e);if(r){let l={first:n,last:i};if(this.setContentPosition(l),this.first=n,this.last=i,this.lastScrollPos=s,this.handleEvents("onScrollIndexChange",l),this._lazy&&this.isPageChanged(n)){let m={first:this._step?Math.min(this.getPageByFirst(n)*this._step,this._items.length-this._step):n,last:Math.min(this._step?(this.getPageByFirst(n)+1)*this._step:i,this._items.length)};(this.lazyLoadState.first!==m.first||this.lazyLoadState.last!==m.last)&&this.handleEvents("onLazyLoad",m),this.lazyLoadState=m}}}onContainerScroll(e){if(this.handleEvents("onScroll",{originalEvent:e}),this._delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this._showLoader){let{isRangeChanged:n}=this.onScrollPositionChange(e);(n||(this._step?this.isPageChanged():!1))&&(this.d_loading=!0,this.cd.detectChanges())}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(e),this.d_loading&&this._showLoader&&(!this._lazy||this._loading===void 0)&&(this.d_loading=!1,this.page=this.getPageByFirst()),this.cd.detectChanges()},this._delay)}else!this.d_loading&&this.onScrollChange(e)}bindResizeListener(){we(this.platformId)&&(this.windowResizeListener||this.zone.runOutsideAngular(()=>{let e=this.document.defaultView,n=Ye()?"orientationchange":"resize";this.windowResizeListener=this.renderer.listen(e,n,this.onWindowResize.bind(this))}))}unbindResizeListener(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null)}onWindowResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{if(pn(this.elementViewChild?.nativeElement)){let[e,n]=[Fe(this.elementViewChild?.nativeElement),Oe(this.elementViewChild?.nativeElement)],[i,r]=[e!==this.defaultWidth,n!==this.defaultHeight];(this.both?i||r:this.horizontal?i:this.vertical?r:!1)&&this.zone.run(()=>{this.d_numToleratedItems=this._numToleratedItems,this.defaultWidth=e,this.defaultHeight=n,this.defaultContentWidth=Fe(this.contentEl),this.defaultContentHeight=Oe(this.contentEl),this.init()})}},this._resizeDelay)}handleEvents(e,n){return this.options&&this.options[e]?this.options[e](n):this[e].emit(n)}getContentOptions(){return{contentStyleClass:`p-virtualscroller-content ${this.d_loading?"p-virtualscroller-loading":""}`,items:this.loadedItems,getItemOptions:e=>this.getOptions(e),loading:this.d_loading,getLoaderOptions:(e,n)=>this.getLoaderOptions(e,n),itemSize:this._itemSize,rows:this.loadedRows,columns:this.loadedColumns,spacerStyle:this.spacerStyle,contentStyle:this.contentStyle,vertical:this.vertical,horizontal:this.horizontal,both:this.both,scrollTo:this.scrollTo.bind(this),scrollToIndex:this.scrollToIndex.bind(this),orientation:this._orientation,scrollableElement:this.elementViewChild?.nativeElement}}getOptions(e){let n=(this._items||[]).length,i=this.both?this.first.rows+e:this.first+e;return{index:i,count:n,first:i===0,last:i===n-1,even:i%2===0,odd:i%2!==0}}getLoaderOptions(e,n){let i=this.loaderArr.length;return I({index:e,count:i,first:e===0,last:e===i-1,even:e%2===0,odd:e%2!==0,loading:this.d_loading},n)}static \u0275fac=function(n){return new(n||t)(N(Te))};static \u0275cmp=M({type:t,selectors:[["p-scroller"],["p-virtualscroller"],["p-virtual-scroller"],["p-virtualScroller"]],contentQueries:function(n,i,r){if(n&1&&(L(r,Eo,4),L(r,Ns,4),L(r,Bs,4),L(r,Rs,4),L(r,Me,4)),n&2){let s;_(s=v())&&(i.contentTemplate=s.first),_(s=v())&&(i.itemTemplate=s.first),_(s=v())&&(i.loaderTemplate=s.first),_(s=v())&&(i.loaderIconTemplate=s.first),_(s=v())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&(ae(Hs,5),ae(Eo,5)),n&2){let r;_(r=v())&&(i.elementViewChild=r.first),_(r=v())&&(i.contentViewChild=r.first)}},hostVars:2,hostBindings:function(n,i){n&2&&it("height",i.height)},inputs:{id:"id",style:"style",styleClass:"styleClass",tabindex:"tabindex",items:"items",itemSize:"itemSize",scrollHeight:"scrollHeight",scrollWidth:"scrollWidth",orientation:"orientation",step:"step",delay:"delay",resizeDelay:"resizeDelay",appendOnly:"appendOnly",inline:"inline",lazy:"lazy",disabled:"disabled",loaderDisabled:"loaderDisabled",columns:"columns",showSpacer:"showSpacer",showLoader:"showLoader",numToleratedItems:"numToleratedItems",loading:"loading",autoSize:"autoSize",trackBy:"trackBy",options:"options"},outputs:{onLazyLoad:"onLazyLoad",onScroll:"onScroll",onScrollIndexChange:"onScrollIndexChange"},features:[V([ko]),f,ue],ngContentSelectors:js,decls:3,vars:2,consts:[["disabledContainer",""],["element",""],["buildInContent",""],["content",""],["buildInLoader",""],["buildInLoaderIcon",""],[4,"ngIf","ngIfElse"],[3,"scroll","ngStyle"],[3,"class","ngStyle",4,"ngIf"],[3,"class",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"ngStyle"],[4,"ngFor","ngForOf"],["data-p-icon","spinner",3,"spin"],[4,"ngIf"]],template:function(n,i){if(n&1&&(pe(),p(0,sl,8,11,"ng-container",6)(1,cl,2,1,"ng-template",null,0,ge)),n&2){let r=_e(2);a("ngIf",!i._disabled)("ngIfElse",r)}},dependencies:[ie,Et,Ce,xe,Pe,Yt,Q],encapsulation:2})}return t})(),Yh=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=X({type:t});static \u0275inj=Y({imports:[Fn,Q,Q]})}return t})();var Do=`
    .p-tooltip {
        position: absolute;
        display: none;
        max-width: dt('tooltip.max.width');
    }

    .p-tooltip-right,
    .p-tooltip-left {
        padding: 0 dt('tooltip.gutter');
    }

    .p-tooltip-top,
    .p-tooltip-bottom {
        padding: dt('tooltip.gutter') 0;
    }

    .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;
        border-right-color: dt('tooltip.background');
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');
        border-left-color: dt('tooltip.background');
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }
`;var pl={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Fo=(()=>{class t extends H{name="tooltip";theme=Do;classes=pl;static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275prov=R({token:t,factory:t.\u0275fac})}return t})();var Mo=(()=>{class t extends G{zone;viewContainer;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;appendTo=S(void 0);$appendTo=Z(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:Ve("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=y(Fo);interactionInProgress=!1;constructor(e,n){super(),this.zone=e,this.viewContainer=n}ngAfterViewInit(){super.ngAfterViewInit(),we(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}ngOnChanges(e){super.ngOnChanges(e),e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=I(I({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(ot(e.relatedTarget,"p-tooltip")||ot(e.relatedTarget,"p-tooltip-text")||ot(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener?.()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let e=document.createElement("div");e.className="p-tooltip-arrow",e.setAttribute("data-pc-section","arrow"),this.container.appendChild(e),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?un(this.container,this.el.nativeElement):un(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),ei(this.container,250),this.getOption("tooltipZIndex")==="auto"?We.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&We.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e&&typeof e.createEmbeddedView=="function"){let n=this.viewContainer.createEmbeddedView(e);n.detectChanges(),n.rootNodes.forEach(i=>this.tooltipText.appendChild(i))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]}[e]||[];for(let[r,s]of i.entries())if(r===0)s.call(this);else if(this.isOutOfBounds())s.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),n=e.left+Yn(),i=e.top+Xn();return{left:n,top:i}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?se(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,n=ye(e),i=(De(e)-De(this.container))/2;this.alignTooltip(n,i);let r=this.getArrowElement();r.style.top="50%",r.style.right=null,r.style.bottom=null,r.style.left="0"}alignLeft(){this.preAlign("left");let e=this.getArrowElement(),n=ye(this.container),i=(De(this.el.nativeElement)-De(this.container))/2;this.alignTooltip(-n,i),e.style.top="50%",e.style.right="0",e.style.bottom=null,e.style.left=null}alignTop(){this.preAlign("top");let e=this.getArrowElement(),n=this.getHostOffset(),i=ye(this.container),r=(ye(this.el.nativeElement)-ye(this.container))/2,s=De(this.container);this.alignTooltip(r,-s);let l=n.left-this.getHostOffset().left+i/2;e.style.top=null,e.style.right=null,e.style.bottom="0",e.style.left=l+"px"}getArrowElement(){return se(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let e=this.getArrowElement(),n=ye(this.container),i=this.getHostOffset(),r=(ye(this.el.nativeElement)-ye(this.container))/2,s=De(this.el.nativeElement);this.alignTooltip(r,s);let l=i.left-this.getHostOffset().left+n/2;e.style.top="0",e.style.right=null,e.style.bottom=null,e.style.left=l+"px"}alignTooltip(e,n){let i=this.getHostOffset(),r=i.left+e,s=i.top+n;this.container.style.left=r+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=I(I({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return ot(e,"p-inputwrapper")?se(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px";let n="p-tooltip p-component p-tooltip-"+e;this.container.className=this.getOption("tooltipStyleClass")?n+" "+this.getOption("tooltipStyleClass"):n}isOutOfBounds(){let e=this.container.getBoundingClientRect(),n=e.top,i=e.left,r=ye(this.container),s=De(this.container),l=Zn();return i+r>l.width||i<0||n<0||n+s>l.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new ut(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):si(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&We.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||t)(N(Te),N(Nn))};static \u0275dir=A({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",h],showDelay:[2,"showDelay","showDelay",fe],hideDelay:[2,"hideDelay","hideDelay",fe],life:[2,"life","life",fe],positionTop:[2,"positionTop","positionTop",fe],positionLeft:[2,"positionLeft","positionLeft",fe],autoHide:[2,"autoHide","autoHide",h],fitContent:[2,"fitContent","fitContent",h],hideOnEscape:[2,"hideOnEscape","hideOnEscape",h],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"]},features:[V([Fo]),f,ue]})}return t})();var Ao=`
    .p-select {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('select.background');
        border: 1px solid dt('select.border.color');
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            outline-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration');
        border-radius: dt('select.border.radius');
        outline-color: transparent;
        box-shadow: dt('select.shadow');
    }

    .p-select:not(.p-disabled):hover {
        border-color: dt('select.hover.border.color');
    }

    .p-select:not(.p-disabled).p-focus {
        border-color: dt('select.focus.border.color');
        box-shadow: dt('select.focus.ring.shadow');
        outline: dt('select.focus.ring.width') dt('select.focus.ring.style') dt('select.focus.ring.color');
        outline-offset: dt('select.focus.ring.offset');
    }

    .p-select.p-variant-filled {
        background: dt('select.filled.background');
    }

    .p-select.p-variant-filled:not(.p-disabled):hover {
        background: dt('select.filled.hover.background');
    }

    .p-select.p-variant-filled:not(.p-disabled).p-focus {
        background: dt('select.filled.focus.background');
    }

    .p-select.p-invalid {
        border-color: dt('select.invalid.border.color');
    }

    .p-select.p-disabled {
        opacity: 1;
        background: dt('select.disabled.background');
    }

    .p-select-clear-icon {
        align-self: center;
        color: dt('select.clear.icon.color');
        inset-inline-end: dt('select.dropdown.width');
    }

    .p-select-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('select.dropdown.color');
        width: dt('select.dropdown.width');
        border-start-end-radius: dt('select.border.radius');
        border-end-end-radius: dt('select.border.radius');
    }

    .p-select-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        padding: dt('select.padding.y') dt('select.padding.x');
        text-overflow: ellipsis;
        cursor: pointer;
        color: dt('select.color');
        background: transparent;
        border: 0 none;
        outline: 0 none;
        font-size: 1rem;
    }

    .p-select-label.p-placeholder {
        color: dt('select.placeholder.color');
    }

    .p-select.p-invalid .p-select-label.p-placeholder {
        color: dt('select.invalid.placeholder.color');
    }

    .p-select.p-disabled .p-select-label {
        color: dt('select.disabled.color');
    }

    .p-select-label-empty {
        overflow: hidden;
        opacity: 0;
    }

    input.p-select-label {
        cursor: default;
    }

    .p-select-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('select.overlay.background');
        color: dt('select.overlay.color');
        border: 1px solid dt('select.overlay.border.color');
        border-radius: dt('select.overlay.border.radius');
        box-shadow: dt('select.overlay.shadow');
        min-width: 100%;
    }

    .p-select-header {
        padding: dt('select.list.header.padding');
    }

    .p-select-filter {
        width: 100%;
    }

    .p-select-list-container {
        overflow: auto;
    }

    .p-select-option-group {
        cursor: auto;
        margin: 0;
        padding: dt('select.option.group.padding');
        background: dt('select.option.group.background');
        color: dt('select.option.group.color');
        font-weight: dt('select.option.group.font.weight');
    }

    .p-select-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('select.list.padding');
        gap: dt('select.list.gap');
        display: flex;
        flex-direction: column;
    }

    .p-select-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('select.option.padding');
        border: 0 none;
        color: dt('select.option.color');
        background: transparent;
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration'),
            outline-color dt('select.transition.duration');
        border-radius: dt('select.option.border.radius');
    }

    .p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
        background: dt('select.option.focus.background');
        color: dt('select.option.focus.color');
    }

    .p-select-option.p-select-option-selected {
        background: dt('select.option.selected.background');
        color: dt('select.option.selected.color');
    }

    .p-select-option.p-select-option-selected.p-focus {
        background: dt('select.option.selected.focus.background');
        color: dt('select.option.selected.focus.color');
    }

    .p-select-option-blank-icon {
        flex-shrink: 0;
    }

    .p-select-option-check-icon {
        position: relative;
        flex-shrink: 0;
        margin-inline-start: dt('select.checkmark.gutter.start');
        margin-inline-end: dt('select.checkmark.gutter.end');
        color: dt('select.checkmark.color');
    }

    .p-select-empty-message {
        padding: dt('select.empty.message.padding');
    }

    .p-select-fluid {
        display: flex;
        width: 100%;
    }

    .p-select-sm .p-select-label {
        font-size: dt('select.sm.font.size');
        padding-block: dt('select.sm.padding.y');
        padding-inline: dt('select.sm.padding.x');
    }

    .p-select-sm .p-select-dropdown .p-icon {
        font-size: dt('select.sm.font.size');
        width: dt('select.sm.font.size');
        height: dt('select.sm.font.size');
    }

    .p-select-lg .p-select-label {
        font-size: dt('select.lg.font.size');
        padding-block: dt('select.lg.padding.y');
        padding-inline: dt('select.lg.padding.x');
    }

    .p-select-lg .p-select-dropdown .p-icon {
        font-size: dt('select.lg.font.size');
        width: dt('select.lg.font.size');
        height: dt('select.lg.font.size');
    }

    .p-floatlabel-in .p-select-filter {
        padding-block-start: dt('select.padding.y');
        padding-block-end: dt('select.padding.y');
    }
`;var _t=t=>({height:t}),Mn=t=>({$implicit:t});function hl(t,o){if(t&1&&(U(),D(0,"svg",5)),t&2){let e=c(2);g(e.cx("optionCheckIcon"))}}function fl(t,o){if(t&1&&(U(),D(0,"svg",6)),t&2){let e=c(2);g(e.cx("optionBlankIcon"))}}function ml(t,o){if(t&1&&(W(0),p(1,hl,1,2,"svg",3)(2,fl,1,2,"svg",4),q()),t&2){let e=c();d(),a("ngIf",e.selected),d(),a("ngIf",!e.selected)}}function gl(t,o){if(t&1&&(x(0,"span"),ve(1),w()),t&2){let e,n=c();d(),Le((e=n.label)!==null&&e!==void 0?e:"empty")}}function bl(t,o){t&1&&ne(0)}var yl=["item"],_l=["group"],vl=["loader"],Cl=["selectedItem"],xl=["header"],Lo=["filter"],wl=["footer"],Il=["emptyfilter"],Sl=["empty"],Vl=["dropdownicon"],Tl=["loadingicon"],El=["clearicon"],kl=["filtericon"],Ol=["onicon"],Dl=["officon"],Fl=["cancelicon"],Ml=["focusInput"],Al=["editableInput"],Ll=["items"],Pl=["scroller"],zl=["overlay"],Nl=["firstHiddenFocusableEl"],Bl=["lastHiddenFocusableEl"],Po=t=>({class:t}),zo=t=>({options:t}),No=(t,o)=>({$implicit:t,options:o}),Rl=()=>({});function Hl(t,o){if(t&1&&(W(0),ve(1),q()),t&2){let e=c(2);d(),Le(e.label()==="p-emptylabel"?"\xA0":e.label())}}function jl(t,o){if(t&1&&ne(0,24),t&2){let e=c(2);a("ngTemplateOutlet",e.selectedItemTemplate||e._selectedItemTemplate)("ngTemplateOutletContext",te(2,Mn,e.selectedOption))}}function $l(t,o){if(t&1&&(x(0,"span"),ve(1),w()),t&2){let e=c(3);d(),Le(e.label()==="p-emptylabel"?"\xA0":e.label())}}function Gl(t,o){if(t&1&&p(0,$l,2,1,"span",18),t&2){let e=c(2);a("ngIf",e.isSelectedOptionEmpty())}}function Wl(t,o){if(t&1){let e=re();x(0,"span",22,3),$("focus",function(i){P(e);let r=c();return z(r.onInputFocus(i))})("blur",function(i){P(e);let r=c();return z(r.onInputBlur(i))})("keydown",function(i){P(e);let r=c();return z(r.onKeyDown(i))}),p(2,Hl,2,1,"ng-container",20)(3,jl,1,4,"ng-container",23)(4,Gl,1,1,"ng-template",null,4,ge),w()}if(t&2){let e,n=_e(5),i=c();g(i.cx("label")),a("pTooltip",i.tooltip)("tooltipPosition",i.tooltipPosition)("positionStyle",i.tooltipPositionStyle)("tooltipStyleClass",i.tooltipStyleClass)("pAutoFocus",i.autofocus),E("aria-disabled",i.$disabled())("id",i.inputId)("aria-label",i.ariaLabel||(i.label()==="p-emptylabel"?void 0:i.label()))("aria-labelledby",i.ariaLabelledBy)("aria-haspopup","listbox")("aria-expanded",(e=i.overlayVisible)!==null&&e!==void 0?e:!1)("aria-controls",i.overlayVisible?i.id+"_list":null)("tabindex",i.$disabled()?-1:i.tabindex)("aria-activedescendant",i.focused?i.focusedOptionId:void 0)("aria-required",i.required())("required",i.required()?"":void 0)("disabled",i.$disabled()?"":void 0),d(2),a("ngIf",!i.selectedItemTemplate&&!i._selectedItemTemplate)("ngIfElse",n),d(),a("ngIf",(i.selectedItemTemplate||i._selectedItemTemplate)&&!i.isSelectedOptionEmpty())}}function ql(t,o){if(t&1){let e=re();x(0,"input",25,5),$("input",function(i){P(e);let r=c();return z(r.onEditableInput(i))})("keydown",function(i){P(e);let r=c();return z(r.onKeyDown(i))})("focus",function(i){P(e);let r=c();return z(r.onInputFocus(i))})("blur",function(i){P(e);let r=c();return z(r.onInputBlur(i))}),w()}if(t&2){let e=c();g(e.cx("label")),a("pAutoFocus",e.autofocus),E("id",e.inputId)("aria-haspopup","listbox")("placeholder",e.modelValue()===void 0||e.modelValue()===null?e.placeholder():void 0)("aria-label",e.ariaLabel||(e.label()==="p-emptylabel"?void 0:e.label()))("aria-activedescendant",e.focused?e.focusedOptionId:void 0)("name",e.name())("minlength",e.minlength())("min",e.min())("max",e.max())("pattern",e.pattern())("size",e.inputSize())("maxlength",e.maxlength())("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)}}function Ul(t,o){if(t&1){let e=re();U(),x(0,"svg",28),$("click",function(i){P(e);let r=c(2);return z(r.clear(i))}),w()}if(t&2){let e=c(2);g(e.cx("clearIcon")),E("data-pc-section","clearicon")}}function Ql(t,o){}function Kl(t,o){t&1&&p(0,Ql,0,0,"ng-template")}function Zl(t,o){if(t&1){let e=re();x(0,"span",29),$("click",function(i){P(e);let r=c(2);return z(r.clear(i))}),p(1,Kl,1,0,null,30),w()}if(t&2){let e=c(2);g(e.cx("clearIcon")),E("data-pc-section","clearicon"),d(),a("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)("ngTemplateOutletContext",te(5,Po,e.cx("clearIcon")))}}function Yl(t,o){if(t&1&&(W(0),p(1,Ul,1,3,"svg",26)(2,Zl,2,7,"span",27),q()),t&2){let e=c();d(),a("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),d(),a("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function Xl(t,o){t&1&&ne(0)}function Jl(t,o){if(t&1&&(W(0),p(1,Xl,1,0,"ng-container",31),q()),t&2){let e=c(2);d(),a("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function ea(t,o){if(t&1&&D(0,"span",33),t&2){let e=c(3);g(e.cn(e.cx("loadingIcon"),"pi-spin"+e.loadingIcon))}}function ta(t,o){if(t&1&&D(0,"span",33),t&2){let e=c(3);g(e.cn(e.cx("loadingIcon"),"pi pi-spinner pi-spin"))}}function na(t,o){if(t&1&&(W(0),p(1,ea,1,2,"span",32)(2,ta,1,2,"span",32),q()),t&2){let e=c(2);d(),a("ngIf",e.loadingIcon),d(),a("ngIf",!e.loadingIcon)}}function ia(t,o){if(t&1&&(W(0),p(1,Jl,2,1,"ng-container",18)(2,na,3,2,"ng-container",18),q()),t&2){let e=c();d(),a("ngIf",e.loadingIconTemplate||e._loadingIconTemplate),d(),a("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate)}}function oa(t,o){if(t&1&&D(0,"span"),t&2){let e=c(3);g(e.cn(e.cx("dropdownIcon"),e.dropdownIcon))}}function ra(t,o){if(t&1&&(U(),D(0,"svg",36)),t&2){let e=c(3);g(e.cx("dropdownIcon"))}}function sa(t,o){if(t&1&&(W(0),p(1,oa,1,2,"span",34)(2,ra,1,2,"svg",35),q()),t&2){let e=c(2);d(),a("ngIf",e.dropdownIcon),d(),a("ngIf",!e.dropdownIcon)}}function la(t,o){}function aa(t,o){t&1&&p(0,la,0,0,"ng-template")}function ca(t,o){if(t&1&&(x(0,"span"),p(1,aa,1,0,null,30),w()),t&2){let e=c(2);g(e.cx("dropdownIcon")),d(),a("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)("ngTemplateOutletContext",te(4,Po,e.cx("dropdownIcon")))}}function da(t,o){if(t&1&&p(0,sa,3,2,"ng-container",18)(1,ca,2,6,"span",34),t&2){let e=c();a("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),d(),a("ngIf",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function ua(t,o){t&1&&ne(0)}function pa(t,o){t&1&&ne(0)}function ha(t,o){if(t&1&&(W(0),p(1,pa,1,0,"ng-container",30),q()),t&2){let e=c(3);d(),a("ngTemplateOutlet",e.filterTemplate||e._filterTemplate)("ngTemplateOutletContext",te(2,zo,e.filterOptions))}}function fa(t,o){t&1&&(U(),D(0,"svg",42))}function ma(t,o){}function ga(t,o){t&1&&p(0,ma,0,0,"ng-template")}function ba(t,o){if(t&1&&(x(0,"span"),p(1,ga,1,0,null,31),w()),t&2){let e=c(4);d(),a("ngTemplateOutlet",e.filterIconTemplate||e._filterIconTemplate)}}function ya(t,o){if(t&1){let e=re();x(0,"p-iconfield")(1,"input",40,10),$("input",function(i){P(e);let r=c(3);return z(r.onFilterInputChange(i))})("keydown",function(i){P(e);let r=c(3);return z(r.onFilterKeyDown(i))})("blur",function(i){P(e);let r=c(3);return z(r.onFilterBlur(i))}),w(),x(3,"p-inputicon"),p(4,fa,1,0,"svg",41)(5,ba,2,1,"span",18),w()()}if(t&2){let e=c(3);d(),g(e.cx("pcFilter")),a("pSize",e.size())("value",e._filterValue()||"")("variant",e.$variant()),E("placeholder",e.filterPlaceholder)("aria-owns",e.id+"_list")("aria-label",e.ariaFilterLabel)("aria-activedescendant",e.focusedOptionId),d(3),a("ngIf",!e.filterIconTemplate&&!e._filterIconTemplate),d(),a("ngIf",e.filterIconTemplate||e._filterIconTemplate)}}function _a(t,o){if(t&1){let e=re();x(0,"div",29),$("click",function(i){return P(e),z(i.stopPropagation())}),p(1,ha,2,4,"ng-container",20)(2,ya,6,11,"ng-template",null,9,ge),w()}if(t&2){let e=_e(3),n=c(2);g(n.cx("header")),d(),a("ngIf",n.filterTemplate||n._filterTemplate)("ngIfElse",e)}}function va(t,o){t&1&&ne(0)}function Ca(t,o){if(t&1&&p(0,va,1,0,"ng-container",30),t&2){let e=o.$implicit,n=o.options;c(2);let i=_e(9);a("ngTemplateOutlet",i)("ngTemplateOutletContext",Ee(2,No,e,n))}}function xa(t,o){t&1&&ne(0)}function wa(t,o){if(t&1&&p(0,xa,1,0,"ng-container",30),t&2){let e=o.options,n=c(4);a("ngTemplateOutlet",n.loaderTemplate||n._loaderTemplate)("ngTemplateOutletContext",te(2,zo,e))}}function Ia(t,o){t&1&&(W(0),p(1,wa,1,4,"ng-template",null,12,ge),q())}function Sa(t,o){if(t&1){let e=re();x(0,"p-scroller",43,11),$("onLazyLoad",function(i){P(e);let r=c(2);return z(r.onLazyLoad.emit(i))}),p(2,Ca,1,5,"ng-template",null,2,ge)(4,Ia,3,0,"ng-container",18),w()}if(t&2){let e=c(2);Ze(te(8,_t,e.scrollHeight)),a("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),d(4),a("ngIf",e.loaderTemplate||e._loaderTemplate)}}function Va(t,o){t&1&&ne(0)}function Ta(t,o){if(t&1&&(W(0),p(1,Va,1,0,"ng-container",30),q()),t&2){c();let e=_e(9),n=c();d(),a("ngTemplateOutlet",e)("ngTemplateOutletContext",Ee(3,No,n.visibleOptions(),wt(2,Rl)))}}function Ea(t,o){if(t&1&&(x(0,"span"),ve(1),w()),t&2){let e=c(2).$implicit,n=c(3);d(),Le(n.getOptionGroupLabel(e.optionGroup))}}function ka(t,o){t&1&&ne(0)}function Oa(t,o){if(t&1&&(W(0),x(1,"li",47),p(2,Ea,2,1,"span",18)(3,ka,1,0,"ng-container",30),w(),q()),t&2){let e=c(),n=e.$implicit,i=e.index,r=c().options,s=c(2);d(),g(s.cx("optionGroup")),a("ngStyle",te(7,_t,r.itemSize+"px")),E("id",s.id+"_"+s.getOptionIndex(i,r)),d(),a("ngIf",!s.groupTemplate&&!s._groupTemplate),d(),a("ngTemplateOutlet",s.groupTemplate||s._groupTemplate)("ngTemplateOutletContext",te(9,Mn,n.optionGroup))}}function Da(t,o){if(t&1){let e=re();W(0),x(1,"p-selectItem",48),$("onClick",function(i){P(e);let r=c().$implicit,s=c(3);return z(s.onOptionSelect(i,r))})("onMouseEnter",function(i){P(e);let r=c().index,s=c().options,l=c(2);return z(l.onOptionMouseEnter(i,l.getOptionIndex(r,s)))}),w(),q()}if(t&2){let e=c(),n=e.$implicit,i=e.index,r=c().options,s=c(2);d(),a("id",s.id+"_"+s.getOptionIndex(i,r))("option",n)("checkmark",s.checkmark)("selected",s.isSelected(n))("label",s.getOptionLabel(n))("disabled",s.isOptionDisabled(n))("template",s.itemTemplate||s._itemTemplate)("focused",s.focusedOptionIndex()===s.getOptionIndex(i,r))("ariaPosInset",s.getAriaPosInset(s.getOptionIndex(i,r)))("ariaSetSize",s.ariaSetSize)}}function Fa(t,o){if(t&1&&p(0,Oa,4,11,"ng-container",18)(1,Da,2,10,"ng-container",18),t&2){let e=o.$implicit,n=c(3);a("ngIf",n.isOptionGroup(e)),d(),a("ngIf",!n.isOptionGroup(e))}}function Ma(t,o){if(t&1&&ve(0),t&2){let e=c(4);an(" ",e.emptyFilterMessageLabel," ")}}function Aa(t,o){t&1&&ne(0,null,14)}function La(t,o){if(t&1&&p(0,Aa,2,0,"ng-container",31),t&2){let e=c(4);a("ngTemplateOutlet",e.emptyFilterTemplate||e._emptyFilterTemplate||e.emptyTemplate||e._emptyTemplate)}}function Pa(t,o){if(t&1&&(x(0,"li",47),p(1,Ma,1,1)(2,La,1,1,"ng-container"),w()),t&2){let e=c().options,n=c(2);g(n.cx("emptyMessage")),a("ngStyle",te(4,_t,e.itemSize+"px")),d(),sn(!n.emptyFilterTemplate&&!n._emptyFilterTemplate&&!n.emptyTemplate?1:2)}}function za(t,o){if(t&1&&ve(0),t&2){let e=c(4);an(" ",e.emptyMessageLabel||e.emptyFilterMessageLabel," ")}}function Na(t,o){t&1&&ne(0,null,15)}function Ba(t,o){if(t&1&&p(0,Na,2,0,"ng-container",31),t&2){let e=c(4);a("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function Ra(t,o){if(t&1&&(x(0,"li",47),p(1,za,1,1)(2,Ba,1,1,"ng-container"),w()),t&2){let e=c().options,n=c(2);g(n.cx("emptyMessage")),a("ngStyle",te(4,_t,e.itemSize+"px")),d(),sn(!n.emptyTemplate&&!n._emptyTemplate?1:2)}}function Ha(t,o){if(t&1&&(x(0,"ul",44,13),p(2,Fa,2,2,"ng-template",45)(3,Pa,3,6,"li",46)(4,Ra,3,6,"li",46),w()),t&2){let e=o.$implicit,n=o.options,i=c(2);Ze(n.contentStyle),g(i.cn(i.cx("list"),n.contentStyleClass)),E("id",i.id+"_list")("aria-label",i.listLabel),d(2),a("ngForOf",e),d(),a("ngIf",i.filterValue&&i.isEmpty()),d(),a("ngIf",!i.filterValue&&i.isEmpty())}}function ja(t,o){t&1&&ne(0)}function $a(t,o){if(t&1){let e=re();x(0,"div",37)(1,"span",38,6),$("focus",function(i){P(e);let r=c();return z(r.onFirstHiddenFocus(i))}),w(),p(3,ua,1,0,"ng-container",31)(4,_a,4,4,"div",27),x(5,"div"),p(6,Sa,5,10,"p-scroller",39)(7,Ta,2,6,"ng-container",18)(8,Ha,5,9,"ng-template",null,7,ge),w(),p(10,ja,1,0,"ng-container",31),x(11,"span",38,8),$("focus",function(i){P(e);let r=c();return z(r.onLastHiddenFocus(i))}),w()()}if(t&2){let e=c();g(e.cn(e.cx("overlay"),e.panelStyleClass)),a("ngStyle",e.panelStyle),d(),E("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0),d(2),a("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),d(),a("ngIf",e.filter),d(),g(e.cx("listContainer")),it("max-height",e.virtualScroll?"auto":e.scrollHeight||"auto"),d(),a("ngIf",e.virtualScroll),d(),a("ngIf",!e.virtualScroll),d(3),a("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),d(),E("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0)}}var Ga=`
    ${Ao}

    /* For PrimeNG */
    .p-select-label.p-placeholder {
        color: dt('select.placeholder.color');
    }

    .p-select.ng-invalid.ng-dirty {
        border-color: dt('select.invalid.border.color');
    }

    .p-dropdown.ng-invalid.ng-dirty .p-dropdown-label.p-placeholder,
    .p-select.ng-invalid.ng-dirty .p-select-label.p-placeholder {
        color: dt('select.invalid.placeholder.color');
    }
`,Wa={root:({instance:t})=>["p-select p-component p-inputwrapper",{"p-disabled":t.$disabled(),"p-variant-filled":t.$variant()==="filled","p-focus":t.focused,"p-invalid":t.invalid(),"p-inputwrapper-filled":t.$filled(),"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-select-open":t.overlayVisible,"p-select-fluid":t.hasFluid,"p-select-sm p-inputfield-sm":t.size()==="small","p-select-lg p-inputfield-lg":t.size()==="large"}],label:({instance:t})=>["p-select-label",{"p-placeholder":t.placeholder()&&t.label()===t.placeholder(),"p-select-label-empty":!t.editable&&!t.selectedItemTemplate&&(t.label()===void 0||t.label()===null||t.label()==="p-emptylabel"||t.label().length===0)}],clearIcon:"p-select-clear-icon",dropdown:"p-select-dropdown",loadingIcon:"p-select-loading-icon",dropdownIcon:"p-select-dropdown-icon",overlay:"p-select-overlay p-component-overlay p-component",header:"p-select-header",pcFilter:"p-select-filter",listContainer:"p-select-list-container",list:"p-select-list",optionGroup:"p-select-option-group",optionGroupLabel:"p-select-option-group-label",option:({instance:t})=>["p-select-option",{"p-select-option-selected":t.selected&&!t.checkmark,"p-disabled":t.disabled,"p-focus":t.focused}],optionLabel:"p-select-option-label",optionCheckIcon:"p-select-option-check-icon",optionBlankIcon:"p-select-option-blank-icon",emptyMessage:"p-select-empty-message"},nn=(()=>{class t extends H{name="select";theme=Ga;classes=Wa;static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275prov=R({token:t,factory:t.\u0275fac})}return t})();var qa={provide:je,useExisting:be(()=>Bo),multi:!0},Ua=(()=>{class t extends G{id;option;selected;focused;label;disabled;visible;itemSize;ariaPosInset;ariaSetSize;template;checkmark;onClick=new T;onMouseEnter=new T;_componentStyle=y(nn);onOptionClick(e){this.onClick.emit(e)}onOptionMouseEnter(e){this.onMouseEnter.emit(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-selectItem"]],inputs:{id:"id",option:"option",selected:[2,"selected","selected",h],focused:[2,"focused","focused",h],label:"label",disabled:[2,"disabled","disabled",h],visible:[2,"visible","visible",h],itemSize:[2,"itemSize","itemSize",fe],ariaPosInset:"ariaPosInset",ariaSetSize:"ariaSetSize",template:"template",checkmark:[2,"checkmark","checkmark",h]},outputs:{onClick:"onClick",onMouseEnter:"onMouseEnter"},features:[V([nn]),f],decls:4,vars:19,consts:[["role","option","pRipple","",3,"click","mouseenter","id","ngStyle"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","check",3,"class",4,"ngIf"],["data-p-icon","blank",3,"class",4,"ngIf"],["data-p-icon","check"],["data-p-icon","blank"]],template:function(n,i){n&1&&(x(0,"li",0),$("click",function(s){return i.onOptionClick(s)})("mouseenter",function(s){return i.onOptionMouseEnter(s)}),p(1,ml,3,2,"ng-container",1)(2,gl,2,1,"span",1)(3,bl,1,0,"ng-container",2),w()),n&2&&(g(i.cx("option")),a("id",i.id)("ngStyle",te(15,_t,i.itemSize+"px")),E("aria-label",i.label)("aria-setsize",i.ariaSetSize)("aria-posinset",i.ariaPosInset)("aria-selected",i.selected)("data-p-focused",i.focused)("data-p-highlight",i.selected)("data-p-disabled",i.disabled),d(),a("ngIf",i.checkmark),d(),a("ngIf",!i.template),d(),a("ngTemplateOutlet",i.template)("ngTemplateOutletContext",te(17,Mn,i.option)))},dependencies:[ie,Ce,xe,Pe,Q,Xt,Zt,no],encapsulation:2})}return t})(),Bo=(()=>{class t extends vo{zone;filterService;id;scrollHeight="200px";filter;panelStyle;styleClass;panelStyleClass;readonly;editable;tabindex=0;set placeholder(e){this._placeholder.set(e)}get placeholder(){return this._placeholder.asReadonly()}loadingIcon;filterPlaceholder;filterLocale;inputId;dataKey;filterBy;filterFields;autofocus;resetFilterOnHide=!1;checkmark=!1;dropdownIcon;loading=!1;optionLabel;optionValue;optionDisabled;optionGroupLabel="label";optionGroupChildren="items";group;showClear;emptyFilterMessage="";emptyMessage="";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;overlayOptions;ariaFilterLabel;ariaLabel;ariaLabelledBy;filterMatchMode="contains";tooltip="";tooltipPosition="right";tooltipPositionStyle="absolute";tooltipStyleClass;focusOnHover=!0;selectOnFocus=!1;autoOptionFocus=!1;autofocusFilter=!0;get filterValue(){return this._filterValue()}set filterValue(e){setTimeout(()=>{this._filterValue.set(e)})}get options(){return this._options()}set options(e){ai(e,this._options())||this._options.set(e)}appendTo=S(void 0);onChange=new T;onFilter=new T;onFocus=new T;onBlur=new T;onClick=new T;onShow=new T;onHide=new T;onClear=new T;onLazyLoad=new T;_componentStyle=y(nn);filterViewChild;focusInputViewChild;editableInputViewChild;itemsViewChild;scroller;overlayViewChild;firstHiddenFocusableElementOnOverlay;lastHiddenFocusableElementOnOverlay;itemsWrapper;$appendTo=Z(()=>this.appendTo()||this.config.overlayAppendTo());itemTemplate;groupTemplate;loaderTemplate;selectedItemTemplate;headerTemplate;filterTemplate;footerTemplate;emptyFilterTemplate;emptyTemplate;dropdownIconTemplate;loadingIconTemplate;clearIconTemplate;filterIconTemplate;onIconTemplate;offIconTemplate;cancelIconTemplate;templates;_itemTemplate;_selectedItemTemplate;_headerTemplate;_filterTemplate;_footerTemplate;_emptyFilterTemplate;_emptyTemplate;_groupTemplate;_loaderTemplate;_dropdownIconTemplate;_loadingIconTemplate;_clearIconTemplate;_filterIconTemplate;_cancelIconTemplate;_onIconTemplate;_offIconTemplate;filterOptions;_options=le(null);_placeholder=le(void 0);value;hover;focused;overlayVisible;optionsChanged;panel;dimensionsUpdated;hoveredItem;selectedOptionUpdated;_filterValue=le(null);searchValue;searchIndex;searchTimeout;previousSearchChar;currentSearchChar;preventModelTouched;focusedOptionIndex=le(-1);labelId;listId;clicked=le(!1);get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(Lt.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage||this.config.getTranslation(Lt.EMPTY_FILTER_MESSAGE)}get isVisibleClearIcon(){return this.modelValue()!=null&&this.hasSelectedOption()&&this.showClear&&!this.$disabled()}get listLabel(){return this.config.getTranslation(Lt.ARIA).listLabel}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}visibleOptions=Z(()=>{let e=this.getAllVisibleAndNonVisibleOptions();if(this._filterValue()){let i=!(this.filterBy||this.optionLabel)&&!this.filterFields&&!this.optionValue?this.options?.filter(r=>r.label?r.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1:r.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1):this.filterService.filter(e,this.searchFields(),this._filterValue().trim(),this.filterMatchMode,this.filterLocale);if(this.group){let r=this.options||[],s=[];return r.forEach(l=>{let C=this.getOptionGroupChildren(l).filter(b=>i?.includes(b));C.length>0&&s.push(de(I({},l),{[typeof this.optionGroupChildren=="string"?this.optionGroupChildren:"items"]:[...C]}))}),this.flatOptions(s)}return i}return e});label=Z(()=>{let e=this.getAllVisibleAndNonVisibleOptions(),n=e.findIndex(i=>this.isOptionValueEqualsModelValue(i));if(n!==-1){let i=e[n];return this.getOptionLabel(i)}return this.placeholder()||"p-emptylabel"});selectedOption;constructor(e,n){super(),this.zone=e,this.filterService=n,St(()=>{let i=this.modelValue(),r=this.visibleOptions();if(r&&Re(r)){let s=this.findSelectedOptionIndex();if(s!==-1||i===void 0||typeof i=="string"&&i.length===0||this.isModelValueNotSet()||this.editable)this.selectedOption=r[s];else{let l=r.findIndex(m=>this.isSelected(m));l!==-1&&(this.selectedOption=r[l])}}Be(r)&&(i===void 0||this.isModelValueNotSet())&&Re(this.selectedOption)&&(this.selectedOption=null),i!==void 0&&this.editable&&this.updateEditableLabel(),this.cd.markForCheck()})}isModelValueNotSet(){return this.modelValue()===null&&!this.isOptionValueEqualsModelValue(this.selectedOption)}getAllVisibleAndNonVisibleOptions(){return this.group?this.flatOptions(this.options):this.options||[]}ngOnInit(){super.ngOnInit(),this.id=this.id||Ve("pn_id_"),this.autoUpdateModel(),this.filterBy&&(this.filterOptions={filter:e=>this.onFilterInputChange(e),reset:()=>this.resetFilter()})}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"filter":this._filterTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"emptyfilter":this._emptyFilterTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"filtericon":this._filterIconTemplate=e.template;break;case"cancelicon":this._cancelIconTemplate=e.template;break;case"onicon":this._onIconTemplate=e.template;break;case"officon":this._offIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewChecked(){if(this.optionsChanged&&this.overlayVisible&&(this.optionsChanged=!1,this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1)})),this.selectedOptionUpdated&&this.itemsWrapper){let e=se(this.overlayViewChild?.overlayViewChild?.nativeElement,"li.p-select-option-selected");e&&li(this.itemsWrapper,e),this.selectedOptionUpdated=!1}}flatOptions(e){return(e||[]).reduce((n,i,r)=>{n.push({optionGroup:i,group:!0,index:r});let s=this.getOptionGroupChildren(i);return s&&s.forEach(l=>n.push(l)),n},[])}autoUpdateModel(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption()&&(this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex()),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1))}onOptionSelect(e,n,i=!0,r=!1){if(!this.isOptionDisabled(n)){if(!this.isSelected(n)){let s=this.getOptionValue(n);this.updateModel(s,e),this.focusedOptionIndex.set(this.findSelectedOptionIndex()),r===!1&&this.onChange.emit({originalEvent:e,value:s})}i&&this.hide(!0)}}onOptionMouseEnter(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)}updateModel(e,n){this.value=e,this.onModelChange(e),this.writeModelValue(e),this.selectedOptionUpdated=!0}allowModelChange(){return!!this.modelValue()&&!this.placeholder()&&(this.modelValue()===void 0||this.modelValue()===null)&&!this.editable&&this.options&&this.options.length}isSelected(e){return this.isOptionValueEqualsModelValue(e)}isOptionValueEqualsModelValue(e){return e!=null&&!this.isOptionGroup(e)&&At(this.modelValue(),this.getOptionValue(e),this.equalityKey())}ngAfterViewInit(){super.ngAfterViewInit(),this.editable&&this.updateEditableLabel(),this.updatePlaceHolderForFloatingLabel()}updatePlaceHolderForFloatingLabel(){let e=this.el.nativeElement.parentElement,n=e?.classList.contains("p-float-label");if(e&&n&&!this.selectedOption){let i=e.querySelector("label");i&&this._placeholder.set(i.textContent)}}updateEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value=this.getOptionLabel(this.selectedOption)||this.modelValue()||"")}clearEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value="")}getOptionIndex(e,n){return this.virtualScrollerDisabled?e:n&&n.getItemOptions(e).index}getOptionLabel(e){return this.optionLabel!==void 0&&this.optionLabel!==null?rt(e,this.optionLabel):e&&e.label!==void 0?e.label:e}getOptionValue(e){return this.optionValue&&this.optionValue!==null?rt(e,this.optionValue):!this.optionLabel&&e&&e.value!==void 0?e.value:e}isSelectedOptionEmpty(){return Be(this.selectedOption)}isOptionDisabled(e){return this.optionDisabled?rt(e,this.optionDisabled):e&&e.disabled!==void 0?e.disabled:!1}getOptionGroupLabel(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null?rt(e,this.optionGroupLabel):e&&e.label!==void 0?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren!==void 0&&this.optionGroupChildren!==null?rt(e,this.optionGroupChildren):e.items}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(n=>this.isOptionGroup(n)).length:e)+1}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}resetFilter(){this._filterValue.set(null),this.filterViewChild&&this.filterViewChild.nativeElement&&(this.filterViewChild.nativeElement.value="")}onContainerClick(e){this.$disabled()||this.readonly||this.loading||(this.focusInputViewChild?.nativeElement.focus({preventScroll:!0}),!(e.target.tagName==="INPUT"||e.target.getAttribute("data-pc-section")==="clearicon"||e.target.closest('[data-pc-section="clearicon"]'))&&((!this.overlayViewChild||!this.overlayViewChild.el.nativeElement.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.onClick.emit(e),this.clicked.set(!0),this.cd.detectChanges()))}isEmpty(){return!this._options()||this.visibleOptions()&&this.visibleOptions().length===0}onEditableInput(e){let n=e.target.value;this.searchValue="",!this.searchOptions(e,n)&&this.focusedOptionIndex.set(-1),this.onModelChange(n),this.updateModel(n||null,e),setTimeout(()=>{this.onChange.emit({originalEvent:e,value:n})},1),!this.overlayVisible&&Re(n)&&this.show()}show(e){this.overlayVisible=!0,this.focusedOptionIndex.set(this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex()),e&&Ie(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}onOverlayAnimationStart(e){if(e.toState==="visible"){if(this.itemsWrapper=se(this.overlayViewChild?.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-select-list-container"),this.virtualScroll&&this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.options&&this.options.length)if(this.virtualScroll){let n=this.modelValue()?this.focusedOptionIndex():-1;n!==-1&&this.scroller?.scrollToIndex(n)}else{let n=se(this.itemsWrapper,".p-select-option.p-select-option-selected");n&&n.scrollIntoView({block:"nearest",inline:"nearest"})}this.filterViewChild&&this.filterViewChild.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter&&!this.editable&&this.filterViewChild.nativeElement.focus()),this.onShow.emit(e)}e.toState==="void"&&(this.itemsWrapper=null,this.onModelTouched(),this.onHide.emit(e))}hide(e){this.overlayVisible=!1,this.focusedOptionIndex.set(-1),this.clicked.set(!1),this.searchValue="",this.overlayOptions?.mode==="modal"&&Zi(),this.filter&&this.resetFilterOnHide&&this.resetFilter(),e&&(this.focusInputViewChild&&Ie(this.focusInputViewChild?.nativeElement),this.editable&&this.editableInputViewChild&&Ie(this.editableInputViewChild?.nativeElement)),this.cd.markForCheck()}onInputFocus(e){if(this.$disabled())return;this.focused=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),!this.preventModelTouched&&!this.overlayVisible&&this.onModelTouched(),this.preventModelTouched=!1}onKeyDown(e,n=!1){if(!(this.$disabled()||this.readonly||this.loading)){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Delete":this.onDeleteKey(e);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,n);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!e.metaKey&&ui(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}this.clicked.set(!1)}}onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e,!0);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break;default:break}}onFilterBlur(e){this.focusedOptionIndex.set(-1)}onArrowDownKey(e){if(!this.overlayVisible)this.show(),this.editable&&this.changeFocusedOptionIndex(e,this.findSelectedOptionIndex());else{let n=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n)}e.preventDefault(),e.stopPropagation()}changeFocusedOptionIndex(e,n){if(this.focusedOptionIndex()!==n&&(this.focusedOptionIndex.set(n),this.scrollInView(),this.selectOnFocus)){let i=this.visibleOptions()[n];this.onOptionSelect(e,i,!1)}}get virtualScrollerDisabled(){return!this.virtualScroll}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let i=se(this.itemsViewChild.nativeElement,`li[id="${n}"]`);i?i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}hasSelectedOption(){return this.modelValue()!==void 0}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}equalityKey(){return this.optionValue?void 0:this.dataKey}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let n=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidOption(i)):-1;return n>-1?n+e+1:e}findPrevOptionIndex(e){let n=e>0?hn(this.visibleOptions().slice(0,e),i=>this.isValidOption(i)):-1;return n>-1?n:e}findLastOptionIndex(){return hn(this.visibleOptions(),e=>this.isValidOption(e))}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}isValidOption(e){return e!=null&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionGroup(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null&&e.optionGroup!==void 0&&e.optionGroup!==null&&e.group}onArrowUpKey(e,n=!1){if(e.altKey&&!n){if(this.focusedOptionIndex()!==-1){let i=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,i)}this.overlayVisible&&this.hide()}else{let i=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),!this.overlayVisible&&this.show()}e.preventDefault(),e.stopPropagation()}onArrowLeftKey(e,n=!1){n&&this.focusedOptionIndex.set(-1)}onDeleteKey(e){this.showClear&&(this.clear(e),e.preventDefault())}onHomeKey(e,n=!1){if(n&&e.currentTarget&&e.currentTarget.setSelectionRange){let i=e.currentTarget;e.shiftKey?i.setSelectionRange(0,i.value.length):(i.setSelectionRange(0,0),this.focusedOptionIndex.set(-1))}else this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onEndKey(e,n=!1){if(n&&e.currentTarget&&e.currentTarget.setSelectionRange){let i=e.currentTarget;if(e.shiftKey)i.setSelectionRange(0,i.value.length);else{let r=i.value.length;i.setSelectionRange(r,r),this.focusedOptionIndex.set(-1)}}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onSpaceKey(e,n=!1){!this.editable&&!n&&this.onEnterKey(e)}onEnterKey(e,n=!1){if(!this.overlayVisible)this.focusedOptionIndex.set(-1),this.onArrowDownKey(e);else{if(this.focusedOptionIndex()!==-1){let i=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,i)}!n&&this.hide()}e.preventDefault()}onEscapeKey(e){this.overlayVisible&&(this.hide(!0),e.preventDefault(),e.stopPropagation())}onTabKey(e,n=!1){if(!n)if(this.overlayVisible&&this.hasFocusableElements())Ie(e.shiftKey?this.lastHiddenFocusableElementOnOverlay?.nativeElement:this.firstHiddenFocusableElementOnOverlay?.nativeElement),e.preventDefault();else{if(this.focusedOptionIndex()!==-1&&this.overlayVisible){let i=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,i)}this.overlayVisible&&this.hide(this.filter)}e.stopPropagation()}onFirstHiddenFocus(e){let n=e.relatedTarget===this.focusInputViewChild?.nativeElement?ni(this.overlayViewChild?.el?.nativeElement,":not(.p-hidden-focusable)"):this.focusInputViewChild?.nativeElement;Ie(n)}onLastHiddenFocus(e){let n=e.relatedTarget===this.focusInputViewChild?.nativeElement?ii(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInputViewChild?.nativeElement;Ie(n)}hasFocusableElements(){return ti(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])').length>0}onBackspaceKey(e,n=!1){n&&!this.overlayVisible&&this.show()}searchFields(){return this.filterBy?.split(",")||this.filterFields||[this.optionLabel]}searchOptions(e,n){this.searchValue=(this.searchValue||"")+n;let i=-1,r=!1;return i=this.visibleOptions().findIndex(s=>this.isOptionMatched(s)),i!==-1&&(r=!0),i===-1&&this.focusedOptionIndex()===-1&&(i=this.findFirstFocusedOptionIndex()),i!==-1&&setTimeout(()=>{this.changeFocusedOptionIndex(e,i)}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r}isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue?.toLocaleLowerCase(this.filterLocale))}onFilterInputChange(e){let n=e.target.value;this._filterValue.set(n),this.focusedOptionIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller?.scrollToIndex(0),setTimeout(()=>{this.overlayViewChild?.alignOverlay()}),this.cd.markForCheck()}applyFocus(){this.editable?se(this.el.nativeElement,".p-dropdown-label.p-inputtext").focus():Ie(this.focusInputViewChild?.nativeElement)}focus(){this.applyFocus()}clear(e){this.updateModel(null,e),this.clearEditableLabel(),this.onModelTouched(),this.onChange.emit({originalEvent:e,value:this.value}),this.onClear.emit(e),this.resetFilter()}writeControlValue(e,n){this.filter&&this.resetFilter(),this.value=e,this.allowModelChange()&&this.onModelChange(e),n(this.value),this.updateEditableLabel(),this.cd.markForCheck()}static \u0275fac=function(n){return new(n||t)(N(Te),N(pi))};static \u0275cmp=M({type:t,selectors:[["p-select"]],contentQueries:function(n,i,r){if(n&1&&(L(r,yl,4),L(r,_l,4),L(r,vl,4),L(r,Cl,4),L(r,xl,4),L(r,Lo,4),L(r,wl,4),L(r,Il,4),L(r,Sl,4),L(r,Vl,4),L(r,Tl,4),L(r,El,4),L(r,kl,4),L(r,Ol,4),L(r,Dl,4),L(r,Fl,4),L(r,Me,4)),n&2){let s;_(s=v())&&(i.itemTemplate=s.first),_(s=v())&&(i.groupTemplate=s.first),_(s=v())&&(i.loaderTemplate=s.first),_(s=v())&&(i.selectedItemTemplate=s.first),_(s=v())&&(i.headerTemplate=s.first),_(s=v())&&(i.filterTemplate=s.first),_(s=v())&&(i.footerTemplate=s.first),_(s=v())&&(i.emptyFilterTemplate=s.first),_(s=v())&&(i.emptyTemplate=s.first),_(s=v())&&(i.dropdownIconTemplate=s.first),_(s=v())&&(i.loadingIconTemplate=s.first),_(s=v())&&(i.clearIconTemplate=s.first),_(s=v())&&(i.filterIconTemplate=s.first),_(s=v())&&(i.onIconTemplate=s.first),_(s=v())&&(i.offIconTemplate=s.first),_(s=v())&&(i.cancelIconTemplate=s.first),_(s=v())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&(ae(Lo,5),ae(Ml,5),ae(Al,5),ae(Ll,5),ae(Pl,5),ae(zl,5),ae(Nl,5),ae(Bl,5)),n&2){let r;_(r=v())&&(i.filterViewChild=r.first),_(r=v())&&(i.focusInputViewChild=r.first),_(r=v())&&(i.editableInputViewChild=r.first),_(r=v())&&(i.itemsViewChild=r.first),_(r=v())&&(i.scroller=r.first),_(r=v())&&(i.overlayViewChild=r.first),_(r=v())&&(i.firstHiddenFocusableElementOnOverlay=r.first),_(r=v())&&(i.lastHiddenFocusableElementOnOverlay=r.first)}},hostVars:3,hostBindings:function(n,i){n&1&&$("click",function(s){return i.onContainerClick(s)}),n&2&&(E("id",i.id),g(i.cn(i.cx("root"),i.styleClass)))},inputs:{id:"id",scrollHeight:"scrollHeight",filter:[2,"filter","filter",h],panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",readonly:[2,"readonly","readonly",h],editable:[2,"editable","editable",h],tabindex:[2,"tabindex","tabindex",fe],placeholder:"placeholder",loadingIcon:"loadingIcon",filterPlaceholder:"filterPlaceholder",filterLocale:"filterLocale",inputId:"inputId",dataKey:"dataKey",filterBy:"filterBy",filterFields:"filterFields",autofocus:[2,"autofocus","autofocus",h],resetFilterOnHide:[2,"resetFilterOnHide","resetFilterOnHide",h],checkmark:[2,"checkmark","checkmark",h],dropdownIcon:"dropdownIcon",loading:[2,"loading","loading",h],optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",optionGroupLabel:"optionGroupLabel",optionGroupChildren:"optionGroupChildren",group:[2,"group","group",h],showClear:[2,"showClear","showClear",h],emptyFilterMessage:"emptyFilterMessage",emptyMessage:"emptyMessage",lazy:[2,"lazy","lazy",h],virtualScroll:[2,"virtualScroll","virtualScroll",h],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",fe],virtualScrollOptions:"virtualScrollOptions",overlayOptions:"overlayOptions",ariaFilterLabel:"ariaFilterLabel",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",filterMatchMode:"filterMatchMode",tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",focusOnHover:[2,"focusOnHover","focusOnHover",h],selectOnFocus:[2,"selectOnFocus","selectOnFocus",h],autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",h],autofocusFilter:[2,"autofocusFilter","autofocusFilter",h],filterValue:"filterValue",options:"options",appendTo:[1,"appendTo"]},outputs:{onChange:"onChange",onFilter:"onFilter",onFocus:"onFocus",onBlur:"onBlur",onClick:"onClick",onShow:"onShow",onHide:"onHide",onClear:"onClear",onLazyLoad:"onLazyLoad"},features:[V([qa,nn]),f],decls:11,vars:14,consts:[["elseBlock",""],["overlay",""],["content",""],["focusInput",""],["defaultPlaceholder",""],["editableInput",""],["firstHiddenFocusableEl",""],["buildInItems",""],["lastHiddenFocusableEl",""],["builtInFilterElement",""],["filter",""],["scroller",""],["loader",""],["items",""],["emptyFilter",""],["empty",""],["role","combobox",3,"class","pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus","focus","blur","keydown",4,"ngIf"],["type","text",3,"class","pAutoFocus","input","keydown","focus","blur",4,"ngIf"],[4,"ngIf"],["role","button","aria-label","dropdown trigger","aria-haspopup","listbox"],[4,"ngIf","ngIfElse"],[3,"visibleChange","onAnimationStart","onHide","hostAttrSelector","visible","options","target","appendTo"],["role","combobox",3,"focus","blur","keydown","pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","text",3,"input","keydown","focus","blur","pAutoFocus"],["data-p-icon","times",3,"class","click",4,"ngIf"],[3,"class","click",4,"ngIf"],["data-p-icon","times",3,"click"],[3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],["aria-hidden","true",3,"class",4,"ngIf"],["aria-hidden","true"],[3,"class",4,"ngIf"],["data-p-icon","chevron-down",3,"class",4,"ngIf"],["data-p-icon","chevron-down"],[3,"ngStyle"],["role","presentation",1,"p-hidden-accessible","p-hidden-focusable",3,"focus"],[3,"items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],["pInputText","","type","text","role","searchbox","autocomplete","off",3,"input","keydown","blur","pSize","value","variant"],["data-p-icon","search",4,"ngIf"],["data-p-icon","search"],[3,"onLazyLoad","items","itemSize","autoSize","lazy","options"],["role","listbox"],["ngFor","",3,"ngForOf"],["role","option",3,"class","ngStyle",4,"ngIf"],["role","option",3,"ngStyle"],[3,"onClick","onMouseEnter","id","option","checkmark","selected","label","disabled","template","focused","ariaPosInset","ariaSetSize"]],template:function(n,i){if(n&1){let r=re();p(0,Wl,6,22,"span",16)(1,ql,2,18,"input",17)(2,Yl,3,2,"ng-container",18),x(3,"div",19),p(4,ia,3,2,"ng-container",20)(5,da,2,2,"ng-template",null,0,ge),w(),x(7,"p-overlay",21,1),$n("visibleChange",function(l){return P(r),jn(i.overlayVisible,l)||(i.overlayVisible=l),z(l)}),$("onAnimationStart",function(l){return P(r),z(i.onOverlayAnimationStart(l))})("onHide",function(){return P(r),z(i.hide())}),p(9,$a,13,18,"ng-template",null,2,ge),w()}if(n&2){let r,s=_e(6);a("ngIf",!i.editable),d(),a("ngIf",i.editable),d(),a("ngIf",i.isVisibleClearIcon),d(),g(i.cx("dropdown")),E("aria-expanded",(r=i.overlayVisible)!==null&&r!==void 0?r:!1)("data-pc-section","trigger"),d(),a("ngIf",i.loading)("ngIfElse",s),d(3),a("hostAttrSelector",i.attrSelector),Hn("visible",i.overlayVisible),a("options",i.overlayOptions)("target","@parent")("appendTo",i.$appendTo())}},dependencies:[ie,Et,Ce,xe,Pe,Ua,To,Mo,Kt,so,io,ro,go,kn,On,Fn,Q],encapsulation:2,changeDetection:0})}return t})(),qf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=X({type:t});static \u0275inj=Y({imports:[Bo,Q,Q]})}return t})();export{je as a,Vi as b,mi as c,Se as d,uc as e,pc as f,ur as g,fc as h,hr as i,mr as j,br as k,vr as l,xr as m,mc as n,gc as o,bc as p,Ve as q,G as r,et as s,Pc as t,Zi as u,ut as v,Kt as w,En as x,Ji as y,tt as z,me as A,Zt as B,io as C,ro as D,Yt as E,so as F,Xt as G,wu as H,is as I,Iu as J,go as K,$u as L,tn as M,_o as N,gp as O,vo as P,kn as Q,Lp as R,On as S,Qp as T,nt as U,ch as V,We as W,To as X,Fn as Y,Yh as Z,Mo as _,Bo as $,qf as aa};
