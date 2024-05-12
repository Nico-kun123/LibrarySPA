const __vite__fileDeps=["./AddBookView-PTPUvvFr.js","./AddBookView-Bd7pBlww.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ol(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const gt={},ir=[],fe=()=>{},Zm=()=>!1,Fi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),al=e=>e.startsWith("onUpdate:"),xt=Object.assign,ll=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},tg=Object.prototype.hasOwnProperty,et=(e,t)=>tg.call(e,t),K=Array.isArray,or=e=>Bi(e)==="[object Map]",Uh=e=>Bi(e)==="[object Set]",Y=e=>typeof e=="function",Ct=e=>typeof e=="string",Hn=e=>typeof e=="symbol",yt=e=>e!==null&&typeof e=="object",$h=e=>(yt(e)||Y(e))&&Y(e.then)&&Y(e.catch),jh=Object.prototype.toString,Bi=e=>jh.call(e),eg=e=>Bi(e).slice(8,-1),qh=e=>Bi(e)==="[object Object]",cl=e=>Ct(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,$r=ol(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ui=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ng=/-(\w)/g,Le=Ui(e=>e.replace(ng,(t,n)=>n?n.toUpperCase():"")),rg=/\B([A-Z])/g,wr=Ui(e=>e.replace(rg,"-$1").toLowerCase()),$i=Ui(e=>e.charAt(0).toUpperCase()+e.slice(1)),xo=Ui(e=>e?`on${$i(e)}`:""),dn=(e,t)=>!Object.is(e,t),ko=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Hh=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},sg=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Dc;const zh=()=>Dc||(Dc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ul(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Ct(r)?lg(r):ul(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Ct(e)||yt(e))return e}const ig=/;(?![^(]*\))/g,og=/:([^]+)/,ag=/\/\*[^]*?\*\//g;function lg(e){const t={};return e.replace(ag,"").split(ig).forEach(n=>{if(n){const r=n.split(og);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function hl(e){let t="";if(Ct(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const r=hl(e[n]);r&&(t+=r+" ")}else if(yt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const cg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ug=ol(cg);function Kh(e){return!!e||e===""}const Pn=e=>Ct(e)?e:e==null?"":K(e)||yt(e)&&(e.toString===jh||!Y(e.toString))?JSON.stringify(e,Gh,2):String(e),Gh=(e,t)=>t&&t.__v_isRef?Gh(e,t.value):or(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[No(r,i)+" =>"]=s,n),{})}:Uh(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>No(n))}:Hn(t)?No(t):yt(t)&&!K(t)&&!qh(t)?String(t):t,No=(e,t="")=>{var n;return Hn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pe;class hg{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=pe,!t&&pe&&(this.index=(pe.scopes||(pe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=pe;try{return pe=this,t()}finally{pe=n}}}on(){pe=this}off(){pe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function fg(e,t=pe){t&&t.active&&t.effects.push(e)}function dg(){return pe}let kn;class fl{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,fg(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,yn();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(pg(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),En()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=an,n=kn;try{return an=!0,kn=this,this._runnings++,xc(this),this.fn()}finally{kc(this),this._runnings--,kn=n,an=t}}stop(){var t;this.active&&(xc(this),kc(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function pg(e){return e.value}function xc(e){e._trackId++,e._depsLength=0}function kc(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Wh(e.deps[t],e);e.deps.length=e._depsLength}}function Wh(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let an=!0,da=0;const Qh=[];function yn(){Qh.push(an),an=!1}function En(){const e=Qh.pop();an=e===void 0?!0:e}function dl(){da++}function pl(){for(da--;!da&&pa.length;)pa.shift()()}function Yh(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Wh(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const pa=[];function Xh(e,t,n){dl();for(const r of e.keys()){let s;r._dirtyLevel<t&&(s??(s=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(s??(s=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&pa.push(r.scheduler)))}pl()}const Jh=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},ma=new WeakMap,Nn=Symbol(""),ga=Symbol("");function ne(e,t,n){if(an&&kn){let r=ma.get(e);r||ma.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=Jh(()=>r.delete(n))),Yh(kn,s)}}function He(e,t,n,r,s,i){const o=ma.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&K(e)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!Hn(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":K(e)?cl(n)&&a.push(o.get("length")):(a.push(o.get(Nn)),or(e)&&a.push(o.get(ga)));break;case"delete":K(e)||(a.push(o.get(Nn)),or(e)&&a.push(o.get(ga)));break;case"set":or(e)&&a.push(o.get(Nn));break}dl();for(const l of a)l&&Xh(l,4);pl()}const mg=ol("__proto__,__v_isRef,__isVue"),Zh=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Hn)),Nc=gg();function gg(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=ot(this);for(let i=0,o=this.length;i<o;i++)ne(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(ot)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){yn(),dl();const r=ot(this)[t].apply(this,n);return pl(),En(),r}}),e}function _g(e){Hn(e)||(e=String(e));const t=ot(this);return ne(t,"has",e),t.hasOwnProperty(e)}class tf{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Vg:sf:i?rf:nf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=K(t);if(!s){if(o&&et(Nc,n))return Reflect.get(Nc,n,r);if(n==="hasOwnProperty")return _g}const a=Reflect.get(t,n,r);return(Hn(n)?Zh.has(n):mg(n))||(s||ne(t,"get",n),i)?a:re(a)?o&&cl(n)?a:a.value:yt(a)?s?af(a):qi(a):a}}class ef extends tf{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const l=ts(i);if(!mi(r)&&!ts(r)&&(i=ot(i),r=ot(r)),!K(t)&&re(i)&&!re(r))return l?!1:(i.value=r,!0)}const o=K(t)&&cl(n)?Number(n)<t.length:et(t,n),a=Reflect.set(t,n,r,s);return t===ot(s)&&(o?dn(r,i)&&He(t,"set",n,r):He(t,"add",n,r)),a}deleteProperty(t,n){const r=et(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&He(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Hn(n)||!Zh.has(n))&&ne(t,"has",n),r}ownKeys(t){return ne(t,"iterate",K(t)?"length":Nn),Reflect.ownKeys(t)}}class yg extends tf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Eg=new ef,vg=new yg,Tg=new ef(!0);const ml=e=>e,ji=e=>Reflect.getPrototypeOf(e);function Us(e,t,n=!1,r=!1){e=e.__v_raw;const s=ot(e),i=ot(t);n||(dn(t,i)&&ne(s,"get",t),ne(s,"get",i));const{has:o}=ji(s),a=r?ml:n?yl:es;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function $s(e,t=!1){const n=this.__v_raw,r=ot(n),s=ot(e);return t||(dn(e,s)&&ne(r,"has",e),ne(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function js(e,t=!1){return e=e.__v_raw,!t&&ne(ot(e),"iterate",Nn),Reflect.get(e,"size",e)}function Oc(e){e=ot(e);const t=ot(this);return ji(t).has.call(t,e)||(t.add(e),He(t,"add",e,e)),this}function Mc(e,t){t=ot(t);const n=ot(this),{has:r,get:s}=ji(n);let i=r.call(n,e);i||(e=ot(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?dn(t,o)&&He(n,"set",e,t):He(n,"add",e,t),this}function Lc(e){const t=ot(this),{has:n,get:r}=ji(t);let s=n.call(t,e);s||(e=ot(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&He(t,"delete",e,void 0),i}function Fc(){const e=ot(this),t=e.size!==0,n=e.clear();return t&&He(e,"clear",void 0,void 0),n}function qs(e,t){return function(r,s){const i=this,o=i.__v_raw,a=ot(o),l=t?ml:e?yl:es;return!e&&ne(a,"iterate",Nn),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Hs(e,t,n){return function(...r){const s=this.__v_raw,i=ot(s),o=or(i),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=s[e](...r),u=n?ml:t?yl:es;return!t&&ne(i,"iterate",l?ga:Nn),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Ze(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function wg(){const e={get(i){return Us(this,i)},get size(){return js(this)},has:$s,add:Oc,set:Mc,delete:Lc,clear:Fc,forEach:qs(!1,!1)},t={get(i){return Us(this,i,!1,!0)},get size(){return js(this)},has:$s,add:Oc,set:Mc,delete:Lc,clear:Fc,forEach:qs(!1,!0)},n={get(i){return Us(this,i,!0)},get size(){return js(this,!0)},has(i){return $s.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:qs(!0,!1)},r={get(i){return Us(this,i,!0,!0)},get size(){return js(this,!0)},has(i){return $s.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:qs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Hs(i,!1,!1),n[i]=Hs(i,!0,!1),t[i]=Hs(i,!1,!0),r[i]=Hs(i,!0,!0)}),[e,n,t,r]}const[Ig,Ag,Rg,Sg]=wg();function gl(e,t){const n=t?e?Sg:Rg:e?Ag:Ig;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(et(n,s)&&s in r?n:r,s,i)}const Pg={get:gl(!1,!1)},Cg={get:gl(!1,!0)},bg={get:gl(!0,!1)};const nf=new WeakMap,rf=new WeakMap,sf=new WeakMap,Vg=new WeakMap;function Dg(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xg(e){return e.__v_skip||!Object.isExtensible(e)?0:Dg(eg(e))}function qi(e){return ts(e)?e:_l(e,!1,Eg,Pg,nf)}function of(e){return _l(e,!1,Tg,Cg,rf)}function af(e){return _l(e,!0,vg,bg,sf)}function _l(e,t,n,r,s){if(!yt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=xg(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function jr(e){return ts(e)?jr(e.__v_raw):!!(e&&e.__v_isReactive)}function ts(e){return!!(e&&e.__v_isReadonly)}function mi(e){return!!(e&&e.__v_isShallow)}function lf(e){return e?!!e.__v_raw:!1}function ot(e){const t=e&&e.__v_raw;return t?ot(t):e}function kg(e){return Object.isExtensible(e)&&Hh(e,"__v_skip",!0),e}const es=e=>yt(e)?qi(e):e,yl=e=>yt(e)?af(e):e;class cf{constructor(t,n,r,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new fl(()=>t(this._value),()=>ei(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=ot(this);return(!t._cacheable||t.effect.dirty)&&dn(t._value,t._value=t.effect.run())&&ei(t,4),uf(t),t.effect._dirtyLevel>=2&&ei(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Ng(e,t,n=!1){let r,s;const i=Y(e);return i?(r=e,s=fe):(r=e.get,s=e.set),new cf(r,s,i||!s,n)}function uf(e){var t;an&&kn&&(e=ot(e),Yh(kn,(t=e.dep)!=null?t:e.dep=Jh(()=>e.dep=void 0,e instanceof cf?e:void 0)))}function ei(e,t=4,n){e=ot(e);const r=e.dep;r&&Xh(r,t)}function re(e){return!!(e&&e.__v_isRef===!0)}function ni(e){return hf(e,!1)}function Og(e){return hf(e,!0)}function hf(e,t){return re(e)?e:new Mg(e,t)}class Mg{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ot(t),this._value=n?t:es(t)}get value(){return uf(this),this._value}set value(t){const n=this.__v_isShallow||mi(t)||ts(t);t=n?t:ot(t),dn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:es(t),ei(this,4))}}function Ve(e){return re(e)?e.value:e}const Lg={get:(e,t,n)=>Ve(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return re(s)&&!re(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function ff(e){return jr(e)?e:new Proxy(e,Lg)}/**
* @vue/runtime-core v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ln(e,t,n,r){try{return r?e(...r):e()}catch(s){Hi(s,t,n)}}function Ee(e,t,n,r){if(Y(e)){const s=ln(e,t,n,r);return s&&$h(s)&&s.catch(i=>{Hi(i,t,n)}),s}if(K(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Ee(e[i],t,n,r));return s}}function Hi(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,a)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){yn(),ln(l,null,10,[e,o,a]),En();return}}Fg(e,n,s,r)}function Fg(e,t,n,r=!0){console.error(e)}let ns=!1,_a=!1;const zt=[];let Ce=0;const ar=[];let en=null,Cn=0;const df=Promise.resolve();let El=null;function pf(e){const t=El||df;return e?t.then(this?e.bind(this):e):t}function Bg(e){let t=Ce+1,n=zt.length;for(;t<n;){const r=t+n>>>1,s=zt[r],i=rs(s);i<e||i===e&&s.pre?t=r+1:n=r}return t}function vl(e){(!zt.length||!zt.includes(e,ns&&e.allowRecurse?Ce+1:Ce))&&(e.id==null?zt.push(e):zt.splice(Bg(e.id),0,e),mf())}function mf(){!ns&&!_a&&(_a=!0,El=df.then(_f))}function Ug(e){const t=zt.indexOf(e);t>Ce&&zt.splice(t,1)}function $g(e){K(e)?ar.push(...e):(!en||!en.includes(e,e.allowRecurse?Cn+1:Cn))&&ar.push(e),mf()}function Bc(e,t,n=ns?Ce+1:0){for(;n<zt.length;n++){const r=zt[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;zt.splice(n,1),n--,r()}}}function gf(e){if(ar.length){const t=[...new Set(ar)].sort((n,r)=>rs(n)-rs(r));if(ar.length=0,en){en.push(...t);return}for(en=t,Cn=0;Cn<en.length;Cn++)en[Cn]();en=null,Cn=0}}const rs=e=>e.id==null?1/0:e.id,jg=(e,t)=>{const n=rs(e)-rs(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function _f(e){_a=!1,ns=!0,zt.sort(jg);try{for(Ce=0;Ce<zt.length;Ce++){const t=zt[Ce];t&&t.active!==!1&&ln(t,null,14)}}finally{Ce=0,zt.length=0,gf(),ns=!1,El=null,(zt.length||ar.length)&&_f()}}function qg(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||gt;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||gt;f&&(s=n.map(m=>Ct(m)?m.trim():m)),h&&(s=n.map(sg))}let a,l=r[a=xo(t)]||r[a=xo(Le(t))];!l&&i&&(l=r[a=xo(wr(t))]),l&&Ee(l,e,6,s);const c=r[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ee(c,e,6,s)}}function yf(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!Y(e)){const l=c=>{const u=yf(c,t,!0);u&&(a=!0,xt(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(yt(e)&&r.set(e,null),null):(K(i)?i.forEach(l=>o[l]=null):xt(o,i),yt(e)&&r.set(e,o),o)}function zi(e,t){return!e||!Fi(t)?!1:(t=t.slice(2).replace(/Once$/,""),et(e,t[0].toLowerCase()+t.slice(1))||et(e,wr(t))||et(e,t))}let ge=null,Ki=null;function gi(e){const t=ge;return ge=e,Ki=e&&e.type.__scopeId||null,t}function R1(e){Ki=e}function S1(){Ki=null}function ri(e,t=ge,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Xc(-1);const i=gi(t);let o;try{o=e(...s)}finally{gi(i),r._d&&Xc(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Oo(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:m,ctx:E,inheritAttrs:R}=e,S=gi(e);let I,k;try{if(n.shapeFlag&4){const X=s||r,dt=X;I=Pe(c.call(dt,X,u,h,m,f,E)),k=a}else{const X=t;I=Pe(X.length>1?X(h,{attrs:a,slots:o,emit:l}):X(h,null)),k=t.props?a:Hg(a)}}catch(X){zr.length=0,Hi(X,e,1),I=wt(Mn)}let F=I;if(k&&R!==!1){const X=Object.keys(k),{shapeFlag:dt}=F;X.length&&dt&7&&(i&&X.some(al)&&(k=zg(k,i)),F=hr(F,k))}return n.dirs&&(F=hr(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),I=F,gi(S),I}const Hg=e=>{let t;for(const n in e)(n==="class"||n==="style"||Fi(n))&&((t||(t={}))[n]=e[n]);return t},zg=(e,t)=>{const n={};for(const r in e)(!al(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Kg(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Uc(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!zi(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Uc(r,o,c):!0:!!o;return!1}function Uc(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!zi(n,i))return!0}return!1}function Gg({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ef="components";function Mo(e,t){return Qg(Ef,e,!0,t)||e}const Wg=Symbol.for("v-ndc");function Qg(e,t,n=!0,r=!1){const s=ge||Kt;if(s){const i=s.type;if(e===Ef){const a=j_(i,!1);if(a&&(a===t||a===Le(t)||a===$i(Le(t))))return i}const o=$c(s[e]||i[e],t)||$c(s.appContext[e],t);return!o&&r?i:o}}function $c(e,t){return e&&(e[t]||e[Le(t)]||e[$i(Le(t))])}const Yg=e=>e.__isSuspense;function Xg(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):$g(e)}const Jg=Symbol.for("v-scx"),Zg=()=>ze(Jg),zs={};function si(e,t,n){return vf(e,t,n)}function vf(e,t,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=gt){if(t&&i){const q=t;t=(...It)=>{q(...It),dt()}}const l=Kt,c=q=>r===!0?q:rr(q,r===!1?1:void 0);let u,h=!1,f=!1;if(re(e)?(u=()=>e.value,h=mi(e)):jr(e)?(u=()=>c(e),h=!0):K(e)?(f=!0,h=e.some(q=>jr(q)||mi(q)),u=()=>e.map(q=>{if(re(q))return q.value;if(jr(q))return c(q);if(Y(q))return ln(q,l,2)})):Y(e)?t?u=()=>ln(e,l,2):u=()=>(m&&m(),Ee(e,l,3,[E])):u=fe,t&&r){const q=u;u=()=>rr(q())}let m,E=q=>{m=F.onStop=()=>{ln(q,l,4),m=F.onStop=void 0}},R;if(Qi)if(E=fe,t?n&&Ee(t,l,3,[u(),f?[]:void 0,E]):u(),s==="sync"){const q=Zg();R=q.__watcherHandles||(q.__watcherHandles=[])}else return fe;let S=f?new Array(e.length).fill(zs):zs;const I=()=>{if(!(!F.active||!F.dirty))if(t){const q=F.run();(r||h||(f?q.some((It,se)=>dn(It,S[se])):dn(q,S)))&&(m&&m(),Ee(t,l,3,[q,S===zs?void 0:f&&S[0]===zs?[]:S,E]),S=q)}else F.run()};I.allowRecurse=!!t;let k;s==="sync"?k=I:s==="post"?k=()=>Zt(I,l&&l.suspense):(I.pre=!0,l&&(I.id=l.uid),k=()=>vl(I));const F=new fl(u,fe,k),X=dg(),dt=()=>{F.stop(),X&&ll(X.effects,F)};return t?n?I():S=F.run():s==="post"?Zt(F.run.bind(F),l&&l.suspense):F.run(),R&&R.push(dt),dt}function t_(e,t,n){const r=this.proxy,s=Ct(e)?e.includes(".")?Tf(r,e):()=>r[e]:e.bind(r,r);let i;Y(t)?i=t:(i=t.handler,n=t);const o=As(this),a=vf(s,i.bind(r),n);return o(),a}function Tf(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function rr(e,t,n=0,r){if(!yt(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),re(e))rr(e.value,t,n,r);else if(K(e))for(let s=0;s<e.length;s++)rr(e[s],t,n,r);else if(Uh(e)||or(e))e.forEach(s=>{rr(s,t,n,r)});else if(qh(e))for(const s in e)rr(e[s],t,n,r);return e}function An(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(yn(),Ee(l,n,8,[e.el,a,e,t]),En())}}/*! #__NO_SIDE_EFFECTS__ */function Is(e,t){return Y(e)?xt({name:e.name},t,{setup:e}):e}const ii=e=>!!e.type.__asyncLoader,wf=e=>e.type.__isKeepAlive;function e_(e,t){If(e,"a",t)}function n_(e,t){If(e,"da",t)}function If(e,t,n=Kt){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Gi(t,r,n),n){let s=n.parent;for(;s&&s.parent;)wf(s.parent.vnode)&&r_(r,t,n,s),s=s.parent}}function r_(e,t,n,r){const s=Gi(t,e,r,!0);Rf(()=>{ll(r[t],s)},n)}function Gi(e,t,n=Kt,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;yn();const a=As(n),l=Ee(t,n,e,o);return a(),En(),l});return r?s.unshift(i):s.push(i),i}}const Ye=e=>(t,n=Kt)=>(!Qi||e==="sp")&&Gi(e,(...r)=>t(...r),n),s_=Ye("bm"),Af=Ye("m"),i_=Ye("bu"),o_=Ye("u"),a_=Ye("bum"),Rf=Ye("um"),l_=Ye("sp"),c_=Ye("rtg"),u_=Ye("rtc");function h_(e,t=Kt){Gi("ec",e,t)}function jc(e,t,n,r){let s;const i=n;if(K(e)||Ct(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i)}else if(yt(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=t(e[c],c,a,i)}}else s=[];return s}const ya=e=>e?Uf(e)?Al(e)||e.proxy:ya(e.parent):null,qr=xt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ya(e.parent),$root:e=>ya(e.root),$emit:e=>e.emit,$options:e=>Tl(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,vl(e.update)}),$nextTick:e=>e.n||(e.n=pf.bind(e.proxy)),$watch:e=>t_.bind(e)}),Lo=(e,t)=>e!==gt&&!e.__isScriptSetup&&et(e,t),f_={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Lo(r,t))return o[t]=1,r[t];if(s!==gt&&et(s,t))return o[t]=2,s[t];if((c=e.propsOptions[0])&&et(c,t))return o[t]=3,i[t];if(n!==gt&&et(n,t))return o[t]=4,n[t];Ea&&(o[t]=0)}}const u=qr[t];let h,f;if(u)return t==="$attrs"&&ne(e.attrs,"get",""),u(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==gt&&et(n,t))return o[t]=4,n[t];if(f=l.config.globalProperties,et(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Lo(s,t)?(s[t]=n,!0):r!==gt&&et(r,t)?(r[t]=n,!0):et(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==gt&&et(e,o)||Lo(t,o)||(a=i[0])&&et(a,o)||et(r,o)||et(qr,o)||et(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:et(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function qc(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ea=!0;function d_(e){const t=Tl(e),n=e.proxy,r=e.ctx;Ea=!1,t.beforeCreate&&Hc(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:E,activated:R,deactivated:S,beforeDestroy:I,beforeUnmount:k,destroyed:F,unmounted:X,render:dt,renderTracked:q,renderTriggered:It,errorCaptured:se,serverPrefetch:Ue,expose:ie,inheritAttrs:Xe,components:In,directives:Ie,filters:br}=t;if(c&&p_(c,r,null),o)for(const ut in o){const st=o[ut];Y(st)&&(r[ut]=st.bind(n))}if(s){const ut=s.call(n,n);yt(ut)&&(e.data=qi(ut))}if(Ea=!0,i)for(const ut in i){const st=i[ut],$e=Y(st)?st.bind(n,n):Y(st.get)?st.get.bind(n,n):fe,Je=!Y(st)&&Y(st.set)?st.set.bind(n):fe,Ae=me({get:$e,set:Je});Object.defineProperty(r,ut,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Jt=>Ae.value=Jt})}if(a)for(const ut in a)Sf(a[ut],r,n,ut);if(l){const ut=Y(l)?l.call(n):l;Reflect.ownKeys(ut).forEach(st=>{oi(st,ut[st])})}u&&Hc(u,e,"c");function bt(ut,st){K(st)?st.forEach($e=>ut($e.bind(n))):st&&ut(st.bind(n))}if(bt(s_,h),bt(Af,f),bt(i_,m),bt(o_,E),bt(e_,R),bt(n_,S),bt(h_,se),bt(u_,q),bt(c_,It),bt(a_,k),bt(Rf,X),bt(l_,Ue),K(ie))if(ie.length){const ut=e.exposed||(e.exposed={});ie.forEach(st=>{Object.defineProperty(ut,st,{get:()=>n[st],set:$e=>n[st]=$e})})}else e.exposed||(e.exposed={});dt&&e.render===fe&&(e.render=dt),Xe!=null&&(e.inheritAttrs=Xe),In&&(e.components=In),Ie&&(e.directives=Ie)}function p_(e,t,n=fe){K(e)&&(e=va(e));for(const r in e){const s=e[r];let i;yt(s)?"default"in s?i=ze(s.from||r,s.default,!0):i=ze(s.from||r):i=ze(s),re(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Hc(e,t,n){Ee(K(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Sf(e,t,n,r){const s=r.includes(".")?Tf(n,r):()=>n[r];if(Ct(e)){const i=t[e];Y(i)&&si(s,i)}else if(Y(e))si(s,e.bind(n));else if(yt(e))if(K(e))e.forEach(i=>Sf(i,t,n,r));else{const i=Y(e.handler)?e.handler.bind(n):t[e.handler];Y(i)&&si(s,i,e)}}function Tl(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let l;return a?l=a:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(c=>_i(l,c,o,!0)),_i(l,t,o)),yt(t)&&i.set(t,l),l}function _i(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&_i(e,i,n,!0),s&&s.forEach(o=>_i(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=m_[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const m_={data:zc,props:Kc,emits:Kc,methods:Mr,computed:Mr,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:Mr,directives:Mr,watch:__,provide:zc,inject:g_};function zc(e,t){return t?e?function(){return xt(Y(e)?e.call(this,this):e,Y(t)?t.call(this,this):t)}:t:e}function g_(e,t){return Mr(va(e),va(t))}function va(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Yt(e,t){return e?[...new Set([].concat(e,t))]:t}function Mr(e,t){return e?xt(Object.create(null),e,t):t}function Kc(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:xt(Object.create(null),qc(e),qc(t??{})):t}function __(e,t){if(!e)return t;if(!t)return e;const n=xt(Object.create(null),e);for(const r in t)n[r]=Yt(e[r],t[r]);return n}function Pf(){return{app:null,config:{isNativeTag:Zm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let y_=0;function E_(e,t){return function(r,s=null){Y(r)||(r=xt({},r)),s!=null&&!yt(s)&&(s=null);const i=Pf(),o=new WeakSet;let a=!1;const l=i.app={_uid:y_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:H_,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&Y(c.install)?(o.add(c),c.install(l,...u)):Y(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const f=wt(r,s);return f.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&t?t(f,c):e(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Al(f.component)||f.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){const u=Hr;Hr=l;try{return c()}finally{Hr=u}}};return l}}let Hr=null;function oi(e,t){if(Kt){let n=Kt.provides;const r=Kt.parent&&Kt.parent.provides;r===n&&(n=Kt.provides=Object.create(r)),n[e]=t}}function ze(e,t,n=!1){const r=Kt||ge;if(r||Hr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Hr._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Y(t)?t.call(r&&r.proxy):t}}const Cf={},bf=()=>Object.create(Cf),Vf=e=>Object.getPrototypeOf(e)===Cf;function v_(e,t,n,r=!1){const s={},i=bf();e.propsDefaults=Object.create(null),Df(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:of(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function T_(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=ot(s),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(zi(e.emitsOptions,f))continue;const m=t[f];if(l)if(et(i,f))m!==i[f]&&(i[f]=m,c=!0);else{const E=Le(f);s[E]=Ta(l,a,E,m,e,!1)}else m!==i[f]&&(i[f]=m,c=!0)}}}else{Df(e,t,s,i)&&(c=!0);let u;for(const h in a)(!t||!et(t,h)&&((u=wr(h))===h||!et(t,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Ta(l,a,h,void 0,e,!0)):delete s[h]);if(i!==a)for(const h in i)(!t||!et(t,h))&&(delete i[h],c=!0)}c&&He(e.attrs,"set","")}function Df(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if($r(l))continue;const c=t[l];let u;s&&et(s,u=Le(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:zi(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=ot(n),c=a||gt;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ta(s,l,h,c[h],e,!et(c,h))}}return o}function Ta(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=et(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Y(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=As(s);r=c[n]=l.call(null,t),u()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===wr(n))&&(r=!0))}return r}function xf(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let l=!1;if(!Y(e)){const u=h=>{l=!0;const[f,m]=xf(h,t,!0);xt(o,f),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return yt(e)&&r.set(e,ir),ir;if(K(i))for(let u=0;u<i.length;u++){const h=Le(i[u]);Gc(h)&&(o[h]=gt)}else if(i)for(const u in i){const h=Le(u);if(Gc(h)){const f=i[u],m=o[h]=K(f)||Y(f)?{type:f}:xt({},f);if(m){const E=Yc(Boolean,m.type),R=Yc(String,m.type);m[0]=E>-1,m[1]=R<0||E<R,(E>-1||et(m,"default"))&&a.push(h)}}}const c=[o,a];return yt(e)&&r.set(e,c),c}function Gc(e){return e[0]!=="$"&&!$r(e)}function Wc(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Qc(e,t){return Wc(e)===Wc(t)}function Yc(e,t){return K(t)?t.findIndex(n=>Qc(n,e)):Y(t)&&Qc(t,e)?0:-1}const kf=e=>e[0]==="_"||e==="$stable",wl=e=>K(e)?e.map(Pe):[Pe(e)],w_=(e,t,n)=>{if(t._n)return t;const r=ri((...s)=>wl(t(...s)),n);return r._c=!1,r},Nf=(e,t,n)=>{const r=e._ctx;for(const s in e){if(kf(s))continue;const i=e[s];if(Y(i))t[s]=w_(s,i,r);else if(i!=null){const o=wl(i);t[s]=()=>o}}},Of=(e,t)=>{const n=wl(t);e.slots.default=()=>n},I_=(e,t)=>{const n=e.slots=bf();if(e.vnode.shapeFlag&32){const r=t._;r?(xt(n,t),Hh(n,"_",r)):Nf(t,n)}else t&&Of(e,t)},A_=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=gt;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(xt(s,t),!n&&a===1&&delete s._):(i=!t.$stable,Nf(t,s)),o=t}else t&&(Of(e,t),o={default:1});if(i)for(const a in s)!kf(a)&&o[a]==null&&delete s[a]};function wa(e,t,n,r,s=!1){if(K(e)){e.forEach((f,m)=>wa(f,t&&(K(t)?t[m]:t),n,r,s));return}if(ii(r)&&!s)return;const i=r.shapeFlag&4?Al(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=e,c=t&&t.r,u=a.refs===gt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ct(c)?(u[c]=null,et(h,c)&&(h[c]=null)):re(c)&&(c.value=null)),Y(l))ln(l,a,12,[o,u]);else{const f=Ct(l),m=re(l);if(f||m){const E=()=>{if(e.f){const R=f?et(h,l)?h[l]:u[l]:l.value;s?K(R)&&ll(R,i):K(R)?R.includes(i)||R.push(i):f?(u[l]=[i],et(h,l)&&(h[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else f?(u[l]=o,et(h,l)&&(h[l]=o)):m&&(l.value=o,e.k&&(u[e.k]=o))};o?(E.id=-1,Zt(E,n)):E()}}}const Zt=Xg;function R_(e){return S_(e)}function S_(e,t){const n=zh();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=fe,insertStaticContent:E}=e,R=(d,p,g,v=null,_=null,C=null,x=void 0,P=null,b=!!p.dynamicChildren)=>{if(d===p)return;d&&!Dr(d,p)&&(v=y(d),Jt(d,_,C,!0),d=null),p.patchFlag===-2&&(b=!1,p.dynamicChildren=null);const{type:A,ref:O,shapeFlag:j}=p;switch(A){case Wi:S(d,p,g,v);break;case Mn:I(d,p,g,v);break;case ai:d==null&&k(p,g,v,x);break;case ce:In(d,p,g,v,_,C,x,P,b);break;default:j&1?dt(d,p,g,v,_,C,x,P,b):j&6?Ie(d,p,g,v,_,C,x,P,b):(j&64||j&128)&&A.process(d,p,g,v,_,C,x,P,b,L)}O!=null&&_&&wa(O,d&&d.ref,C,p||d,!p)},S=(d,p,g,v)=>{if(d==null)r(p.el=a(p.children),g,v);else{const _=p.el=d.el;p.children!==d.children&&c(_,p.children)}},I=(d,p,g,v)=>{d==null?r(p.el=l(p.children||""),g,v):p.el=d.el},k=(d,p,g,v)=>{[d.el,d.anchor]=E(d.children,p,g,v,d.el,d.anchor)},F=({el:d,anchor:p},g,v)=>{let _;for(;d&&d!==p;)_=f(d),r(d,g,v),d=_;r(p,g,v)},X=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),s(d),d=g;s(p)},dt=(d,p,g,v,_,C,x,P,b)=>{p.type==="svg"?x="svg":p.type==="math"&&(x="mathml"),d==null?q(p,g,v,_,C,x,P,b):Ue(d,p,_,C,x,P,b)},q=(d,p,g,v,_,C,x,P)=>{let b,A;const{props:O,shapeFlag:j,transition:B,dirs:G}=d;if(b=d.el=o(d.type,C,O&&O.is,O),j&8?u(b,d.children):j&16&&se(d.children,b,null,v,_,Fo(d,C),x,P),G&&An(d,null,v,"created"),It(b,d,d.scopeId,x,v),O){for(const ht in O)ht!=="value"&&!$r(ht)&&i(b,ht,null,O[ht],C,d.children,v,_,$t);"value"in O&&i(b,"value",null,O.value,C),(A=O.onVnodeBeforeMount)&&Se(A,v,d)}G&&An(d,null,v,"beforeMount");const J=P_(_,B);J&&B.beforeEnter(b),r(b,p,g),((A=O&&O.onVnodeMounted)||J||G)&&Zt(()=>{A&&Se(A,v,d),J&&B.enter(b),G&&An(d,null,v,"mounted")},_)},It=(d,p,g,v,_)=>{if(g&&m(d,g),v)for(let C=0;C<v.length;C++)m(d,v[C]);if(_){let C=_.subTree;if(p===C){const x=_.vnode;It(d,x,x.scopeId,x.slotScopeIds,_.parent)}}},se=(d,p,g,v,_,C,x,P,b=0)=>{for(let A=b;A<d.length;A++){const O=d[A]=P?nn(d[A]):Pe(d[A]);R(null,O,p,g,v,_,C,x,P)}},Ue=(d,p,g,v,_,C,x)=>{const P=p.el=d.el;let{patchFlag:b,dynamicChildren:A,dirs:O}=p;b|=d.patchFlag&16;const j=d.props||gt,B=p.props||gt;let G;if(g&&Rn(g,!1),(G=B.onVnodeBeforeUpdate)&&Se(G,g,p,d),O&&An(p,d,g,"beforeUpdate"),g&&Rn(g,!0),A?ie(d.dynamicChildren,A,P,g,v,Fo(p,_),C):x||st(d,p,P,null,g,v,Fo(p,_),C,!1),b>0){if(b&16)Xe(P,p,j,B,g,v,_);else if(b&2&&j.class!==B.class&&i(P,"class",null,B.class,_),b&4&&i(P,"style",j.style,B.style,_),b&8){const J=p.dynamicProps;for(let ht=0;ht<J.length;ht++){const mt=J[ht],Vt=j[mt],de=B[mt];(de!==Vt||mt==="value")&&i(P,mt,Vt,de,_,d.children,g,v,$t)}}b&1&&d.children!==p.children&&u(P,p.children)}else!x&&A==null&&Xe(P,p,j,B,g,v,_);((G=B.onVnodeUpdated)||O)&&Zt(()=>{G&&Se(G,g,p,d),O&&An(p,d,g,"updated")},v)},ie=(d,p,g,v,_,C,x)=>{for(let P=0;P<p.length;P++){const b=d[P],A=p[P],O=b.el&&(b.type===ce||!Dr(b,A)||b.shapeFlag&70)?h(b.el):g;R(b,A,O,null,v,_,C,x,!0)}},Xe=(d,p,g,v,_,C,x)=>{if(g!==v){if(g!==gt)for(const P in g)!$r(P)&&!(P in v)&&i(d,P,g[P],null,x,p.children,_,C,$t);for(const P in v){if($r(P))continue;const b=v[P],A=g[P];b!==A&&P!=="value"&&i(d,P,A,b,x,p.children,_,C,$t)}"value"in v&&i(d,"value",g.value,v.value,x)}},In=(d,p,g,v,_,C,x,P,b)=>{const A=p.el=d?d.el:a(""),O=p.anchor=d?d.anchor:a("");let{patchFlag:j,dynamicChildren:B,slotScopeIds:G}=p;G&&(P=P?P.concat(G):G),d==null?(r(A,g,v),r(O,g,v),se(p.children||[],g,O,_,C,x,P,b)):j>0&&j&64&&B&&d.dynamicChildren?(ie(d.dynamicChildren,B,g,_,C,x,P),(p.key!=null||_&&p===_.subTree)&&Mf(d,p,!0)):st(d,p,g,O,_,C,x,P,b)},Ie=(d,p,g,v,_,C,x,P,b)=>{p.slotScopeIds=P,d==null?p.shapeFlag&512?_.ctx.activate(p,g,v,x,b):br(p,g,v,_,C,x,b):Wn(d,p,b)},br=(d,p,g,v,_,C,x)=>{const P=d.component=L_(d,v,_);if(wf(d)&&(P.ctx.renderer=L),F_(P),P.asyncDep){if(_&&_.registerDep(P,bt),!d.el){const b=P.subTree=wt(Mn);I(null,b,p,g)}}else bt(P,d,p,g,_,C,x)},Wn=(d,p,g)=>{const v=p.component=d.component;if(Kg(d,p,g))if(v.asyncDep&&!v.asyncResolved){ut(v,p,g);return}else v.next=p,Ug(v.update),v.effect.dirty=!0,v.update();else p.el=d.el,v.vnode=p},bt=(d,p,g,v,_,C,x)=>{const P=()=>{if(d.isMounted){let{next:O,bu:j,u:B,parent:G,vnode:J}=d;{const Xn=Lf(d);if(Xn){O&&(O.el=J.el,ut(d,O,x)),Xn.asyncDep.then(()=>{d.isUnmounted||P()});return}}let ht=O,mt;Rn(d,!1),O?(O.el=J.el,ut(d,O,x)):O=J,j&&ko(j),(mt=O.props&&O.props.onVnodeBeforeUpdate)&&Se(mt,G,O,J),Rn(d,!0);const Vt=Oo(d),de=d.subTree;d.subTree=Vt,R(de,Vt,h(de.el),y(de),d,_,C),O.el=Vt.el,ht===null&&Gg(d,Vt.el),B&&Zt(B,_),(mt=O.props&&O.props.onVnodeUpdated)&&Zt(()=>Se(mt,G,O,J),_)}else{let O;const{el:j,props:B}=p,{bm:G,m:J,parent:ht}=d,mt=ii(p);if(Rn(d,!1),G&&ko(G),!mt&&(O=B&&B.onVnodeBeforeMount)&&Se(O,ht,p),Rn(d,!0),j&&Et){const Vt=()=>{d.subTree=Oo(d),Et(j,d.subTree,d,_,null)};mt?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Vt()):Vt()}else{const Vt=d.subTree=Oo(d);R(null,Vt,g,v,d,_,C),p.el=Vt.el}if(J&&Zt(J,_),!mt&&(O=B&&B.onVnodeMounted)){const Vt=p;Zt(()=>Se(O,ht,Vt),_)}(p.shapeFlag&256||ht&&ii(ht.vnode)&&ht.vnode.shapeFlag&256)&&d.a&&Zt(d.a,_),d.isMounted=!0,p=g=v=null}},b=d.effect=new fl(P,fe,()=>vl(A),d.scope),A=d.update=()=>{b.dirty&&b.run()};A.id=d.uid,Rn(d,!0),A()},ut=(d,p,g)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,T_(d,p.props,v,g),A_(d,p.children,g),yn(),Bc(d),En()},st=(d,p,g,v,_,C,x,P,b=!1)=>{const A=d&&d.children,O=d?d.shapeFlag:0,j=p.children,{patchFlag:B,shapeFlag:G}=p;if(B>0){if(B&128){Je(A,j,g,v,_,C,x,P,b);return}else if(B&256){$e(A,j,g,v,_,C,x,P,b);return}}G&8?(O&16&&$t(A,_,C),j!==A&&u(g,j)):O&16?G&16?Je(A,j,g,v,_,C,x,P,b):$t(A,_,C,!0):(O&8&&u(g,""),G&16&&se(j,g,v,_,C,x,P,b))},$e=(d,p,g,v,_,C,x,P,b)=>{d=d||ir,p=p||ir;const A=d.length,O=p.length,j=Math.min(A,O);let B;for(B=0;B<j;B++){const G=p[B]=b?nn(p[B]):Pe(p[B]);R(d[B],G,g,null,_,C,x,P,b)}A>O?$t(d,_,C,!0,!1,j):se(p,g,v,_,C,x,P,b,j)},Je=(d,p,g,v,_,C,x,P,b)=>{let A=0;const O=p.length;let j=d.length-1,B=O-1;for(;A<=j&&A<=B;){const G=d[A],J=p[A]=b?nn(p[A]):Pe(p[A]);if(Dr(G,J))R(G,J,g,null,_,C,x,P,b);else break;A++}for(;A<=j&&A<=B;){const G=d[j],J=p[B]=b?nn(p[B]):Pe(p[B]);if(Dr(G,J))R(G,J,g,null,_,C,x,P,b);else break;j--,B--}if(A>j){if(A<=B){const G=B+1,J=G<O?p[G].el:v;for(;A<=B;)R(null,p[A]=b?nn(p[A]):Pe(p[A]),g,J,_,C,x,P,b),A++}}else if(A>B)for(;A<=j;)Jt(d[A],_,C,!0),A++;else{const G=A,J=A,ht=new Map;for(A=J;A<=B;A++){const oe=p[A]=b?nn(p[A]):Pe(p[A]);oe.key!=null&&ht.set(oe.key,A)}let mt,Vt=0;const de=B-J+1;let Xn=!1,Cc=0;const Vr=new Array(de);for(A=0;A<de;A++)Vr[A]=0;for(A=G;A<=j;A++){const oe=d[A];if(Vt>=de){Jt(oe,_,C,!0);continue}let Re;if(oe.key!=null)Re=ht.get(oe.key);else for(mt=J;mt<=B;mt++)if(Vr[mt-J]===0&&Dr(oe,p[mt])){Re=mt;break}Re===void 0?Jt(oe,_,C,!0):(Vr[Re-J]=A+1,Re>=Cc?Cc=Re:Xn=!0,R(oe,p[Re],g,null,_,C,x,P,b),Vt++)}const bc=Xn?C_(Vr):ir;for(mt=bc.length-1,A=de-1;A>=0;A--){const oe=J+A,Re=p[oe],Vc=oe+1<O?p[oe+1].el:v;Vr[A]===0?R(null,Re,g,Vc,_,C,x,P,b):Xn&&(mt<0||A!==bc[mt]?Ae(Re,g,Vc,2):mt--)}}},Ae=(d,p,g,v,_=null)=>{const{el:C,type:x,transition:P,children:b,shapeFlag:A}=d;if(A&6){Ae(d.component.subTree,p,g,v);return}if(A&128){d.suspense.move(p,g,v);return}if(A&64){x.move(d,p,g,L);return}if(x===ce){r(C,p,g);for(let j=0;j<b.length;j++)Ae(b[j],p,g,v);r(d.anchor,p,g);return}if(x===ai){F(d,p,g);return}if(v!==2&&A&1&&P)if(v===0)P.beforeEnter(C),r(C,p,g),Zt(()=>P.enter(C),_);else{const{leave:j,delayLeave:B,afterLeave:G}=P,J=()=>r(C,p,g),ht=()=>{j(C,()=>{J(),G&&G()})};B?B(C,J,ht):ht()}else r(C,p,g)},Jt=(d,p,g,v=!1,_=!1)=>{const{type:C,props:x,ref:P,children:b,dynamicChildren:A,shapeFlag:O,patchFlag:j,dirs:B}=d;if(P!=null&&wa(P,null,g,d,!0),O&256){p.ctx.deactivate(d);return}const G=O&1&&B,J=!ii(d);let ht;if(J&&(ht=x&&x.onVnodeBeforeUnmount)&&Se(ht,p,d),O&6)Bs(d.component,g,v);else{if(O&128){d.suspense.unmount(g,v);return}G&&An(d,null,p,"beforeUnmount"),O&64?d.type.remove(d,p,g,_,L,v):A&&(C!==ce||j>0&&j&64)?$t(A,p,g,!1,!0):(C===ce&&j&384||!_&&O&16)&&$t(b,p,g),v&&Qn(d)}(J&&(ht=x&&x.onVnodeUnmounted)||G)&&Zt(()=>{ht&&Se(ht,p,d),G&&An(d,null,p,"unmounted")},g)},Qn=d=>{const{type:p,el:g,anchor:v,transition:_}=d;if(p===ce){Yn(g,v);return}if(p===ai){X(d);return}const C=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:x,delayLeave:P}=_,b=()=>x(g,C);P?P(d.el,C,b):b()}else C()},Yn=(d,p)=>{let g;for(;d!==p;)g=f(d),s(d),d=g;s(p)},Bs=(d,p,g)=>{const{bum:v,scope:_,update:C,subTree:x,um:P}=d;v&&ko(v),_.stop(),C&&(C.active=!1,Jt(x,d,p,g)),P&&Zt(P,p),Zt(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},$t=(d,p,g,v=!1,_=!1,C=0)=>{for(let x=C;x<d.length;x++)Jt(d[x],p,g,v,_)},y=d=>d.shapeFlag&6?y(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el);let N=!1;const D=(d,p,g)=>{d==null?p._vnode&&Jt(p._vnode,null,null,!0):R(p._vnode||null,d,p,null,null,null,g),N||(N=!0,Bc(),gf(),N=!1),p._vnode=d},L={p:R,um:Jt,m:Ae,r:Qn,mt:br,mc:se,pc:st,pbc:ie,n:y,o:e};let at,Et;return{render:D,hydrate:at,createApp:E_(D,at)}}function Fo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Rn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function P_(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Mf(e,t,n=!1){const r=e.children,s=t.children;if(K(r)&&K(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=nn(s[i]),a.el=o.el),n||Mf(o,a)),a.type===Wi&&(a.el=o.el)}}function C_(e){const t=e.slice(),n=[0];let r,s,i,o,a;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(s=n[n.length-1],e[s]<c){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<c?i=a+1:o=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Lf(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Lf(t)}const b_=e=>e.__isTeleport,ce=Symbol.for("v-fgt"),Wi=Symbol.for("v-txt"),Mn=Symbol.for("v-cmt"),ai=Symbol.for("v-stc"),zr=[];let _e=null;function Ot(e=!1){zr.push(_e=e?null:[])}function V_(){zr.pop(),_e=zr[zr.length-1]||null}let ss=1;function Xc(e){ss+=e}function Ff(e){return e.dynamicChildren=ss>0?_e||ir:null,V_(),ss>0&&_e&&_e.push(e),e}function te(e,t,n,r,s,i){return Ff(it(e,t,n,r,s,i,!0))}function Ia(e,t,n,r,s){return Ff(wt(e,t,n,r,s,!0))}function Aa(e){return e?e.__v_isVNode===!0:!1}function Dr(e,t){return e.type===t.type&&e.key===t.key}const Bf=({key:e})=>e??null,li=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ct(e)||re(e)||Y(e)?{i:ge,r:e,k:t,f:!!n}:e:null);function it(e,t=null,n=null,r=0,s=null,i=e===ce?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Bf(t),ref:t&&li(t),scopeId:Ki,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ge};return a?(Il(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Ct(n)?8:16),ss>0&&!o&&_e&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_e.push(l),l}const wt=D_;function D_(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Wg)&&(e=Mn),Aa(e)){const a=hr(e,t,!0);return n&&Il(a,n),ss>0&&!i&&_e&&(a.shapeFlag&6?_e[_e.indexOf(e)]=a:_e.push(a)),a.patchFlag|=-2,a}if(q_(e)&&(e=e.__vccOpts),t){t=x_(t);let{class:a,style:l}=t;a&&!Ct(a)&&(t.class=hl(a)),yt(l)&&(lf(l)&&!K(l)&&(l=xt({},l)),t.style=ul(l))}const o=Ct(e)?1:Yg(e)?128:b_(e)?64:yt(e)?4:Y(e)?2:0;return it(e,t,n,r,s,o,i,!0)}function x_(e){return e?lf(e)||Vf(e)?xt({},e):e:null}function hr(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?N_(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Bf(a),ref:t&&t.ref?n&&s?K(s)?s.concat(li(t)):[s,li(t)]:li(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ce?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&hr(e.ssContent),ssFallback:e.ssFallback&&hr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ra(e=" ",t=0){return wt(Wi,null,e,t)}function k_(e,t){const n=wt(ai,null,e);return n.staticCount=t,n}function Bo(e="",t=!1){return t?(Ot(),Ia(Mn,null,e)):wt(Mn,null,e)}function Pe(e){return e==null||typeof e=="boolean"?wt(Mn):K(e)?wt(ce,null,e.slice()):typeof e=="object"?nn(e):wt(Wi,null,String(e))}function nn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:hr(e)}function Il(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Il(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Vf(t)?t._ctx=ge:s===3&&ge&&(ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Y(t)?(t={default:t,_ctx:ge},n=32):(t=String(t),r&64?(n=16,t=[Ra(t)]):n=8);e.children=t,e.shapeFlag|=n}function N_(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=hl([t.class,r.class]));else if(s==="style")t.style=ul([t.style,r.style]);else if(Fi(s)){const i=t[s],o=r[s];o&&i!==o&&!(K(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Se(e,t,n,r=null){Ee(e,t,7,[n,r])}const O_=Pf();let M_=0;function L_(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||O_,i={uid:M_++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new hg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xf(r,s),emitsOptions:yf(r,s),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:r.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=qg.bind(null,i),e.ce&&e.ce(i),i}let Kt=null,yi,Sa;{const e=zh(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};yi=t("__VUE_INSTANCE_SETTERS__",n=>Kt=n),Sa=t("__VUE_SSR_SETTERS__",n=>Qi=n)}const As=e=>{const t=Kt;return yi(e),e.scope.on(),()=>{e.scope.off(),yi(t)}},Jc=()=>{Kt&&Kt.scope.off(),yi(null)};function Uf(e){return e.vnode.shapeFlag&4}let Qi=!1;function F_(e,t=!1){t&&Sa(t);const{props:n,children:r}=e.vnode,s=Uf(e);v_(e,n,s,t),I_(e,r);const i=s?B_(e,t):void 0;return t&&Sa(!1),i}function B_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,f_);const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?$_(e):null,i=As(e);yn();const o=ln(r,e,0,[e.props,s]);if(En(),i(),$h(o)){if(o.then(Jc,Jc),t)return o.then(a=>{Zc(e,a,t)}).catch(a=>{Hi(a,e,0)});e.asyncDep=o}else Zc(e,o,t)}else $f(e,t)}function Zc(e,t,n){Y(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:yt(t)&&(e.setupState=ff(t)),$f(e,n)}let tu;function $f(e,t,n){const r=e.type;if(!e.render){if(!t&&tu&&!r.render){const s=r.template||Tl(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,c=xt(xt({isCustomElement:i,delimiters:a},o),l);r.render=tu(s,c)}}e.render=r.render||fe}{const s=As(e);yn();try{d_(e)}finally{En(),s()}}}const U_={get(e,t){return ne(e,"get",""),e[t]}};function $_(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,U_),slots:e.slots,emit:e.emit,expose:t}}function Al(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ff(kg(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in qr)return qr[n](e)},has(t,n){return n in t||n in qr}}))}function j_(e,t=!0){return Y(e)?e.displayName||e.name:e.name||t&&e.__name}function q_(e){return Y(e)&&"__vccOpts"in e}const me=(e,t)=>Ng(e,t,Qi);function jf(e,t,n){const r=arguments.length;return r===2?yt(t)&&!K(t)?Aa(t)?wt(e,null,[t]):wt(e,t):wt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Aa(n)&&(n=[n]),wt(e,t,n))}const H_="3.4.25";/**
* @vue/runtime-dom v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const z_="http://www.w3.org/2000/svg",K_="http://www.w3.org/1998/Math/MathML",rn=typeof document<"u"?document:null,eu=rn&&rn.createElement("template"),G_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?rn.createElementNS(z_,e):t==="mathml"?rn.createElementNS(K_,e):rn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>rn.createTextNode(e),createComment:e=>rn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{eu.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=eu.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},W_=Symbol("_vtc");function Q_(e,t,n){const r=e[W_];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const nu=Symbol("_vod"),Y_=Symbol("_vsh"),X_=Symbol(""),J_=/(^|;)\s*display\s*:/;function Z_(e,t,n){const r=e.style,s=Ct(n);let i=!1;if(n&&!s){if(t)if(Ct(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ci(r,a,"")}else for(const o in t)n[o]==null&&ci(r,o,"");for(const o in n)o==="display"&&(i=!0),ci(r,o,n[o])}else if(s){if(t!==n){const o=r[X_];o&&(n+=";"+o),r.cssText=n,i=J_.test(n)}}else t&&e.removeAttribute("style");nu in e&&(e[nu]=i?r.display:"",e[Y_]&&(r.display="none"))}const ru=/\s*!important$/;function ci(e,t,n){if(K(n))n.forEach(r=>ci(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ty(e,t);ru.test(n)?e.setProperty(wr(r),n.replace(ru,""),"important"):e[r]=n}}const su=["Webkit","Moz","ms"],Uo={};function ty(e,t){const n=Uo[t];if(n)return n;let r=Le(t);if(r!=="filter"&&r in e)return Uo[t]=r;r=$i(r);for(let s=0;s<su.length;s++){const i=su[s]+r;if(i in e)return Uo[t]=i}return t}const iu="http://www.w3.org/1999/xlink";function ey(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(iu,t.slice(6,t.length)):e.setAttributeNS(iu,t,n);else{const i=ug(t);n==null||i&&!Kh(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function ny(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?e.getAttribute("value")||"":e.value,u=n??"";(c!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Kh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function ry(e,t,n,r){e.addEventListener(t,n,r)}function sy(e,t,n,r){e.removeEventListener(t,n,r)}const ou=Symbol("_vei");function iy(e,t,n,r,s=null){const i=e[ou]||(e[ou]={}),o=i[t];if(r&&o)o.value=r;else{const[a,l]=oy(t);if(r){const c=i[t]=cy(r,s);ry(e,a,c,l)}else o&&(sy(e,a,o,l),i[t]=void 0)}}const au=/(?:Once|Passive|Capture)$/;function oy(e){let t;if(au.test(e)){t={};let r;for(;r=e.match(au);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):wr(e.slice(2)),t]}let $o=0;const ay=Promise.resolve(),ly=()=>$o||(ay.then(()=>$o=0),$o=Date.now());function cy(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(uy(r,n.value),t,5,[r])};return n.value=e,n.attached=ly(),n}function uy(e,t){if(K(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const lu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,hy=(e,t,n,r,s,i,o,a,l)=>{const c=s==="svg";t==="class"?Q_(e,r,c):t==="style"?Z_(e,n,r):Fi(t)?al(t)||iy(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):fy(e,t,r,c))?ny(e,t,r,i,o,a,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ey(e,t,r,c))};function fy(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&lu(t)&&Y(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return lu(t)&&Ct(n)?!1:t in e}const dy=xt({patchProp:hy},G_);let cu;function py(){return cu||(cu=R_(dy))}const my=(...e)=>{const t=py().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=_y(r);if(!s)return;const i=t._component;!Y(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,gy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function gy(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function _y(e){return Ct(e)?document.querySelector(e):e}const yy="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='3em'%20height='3em'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23FFBF5D'%20d='M6.5%2016q1.175%200%202.288.263T11%2017.05V7.2q-1.025-.6-2.175-.9T6.5%206q-.9%200-1.788.175T3%206.7v9.9q.875-.3%201.738-.45T6.5%2016m6.5%201.05q1.1-.525%202.213-.787T17.5%2016q.9%200%201.763.15T21%2016.6V6.7q-.825-.35-1.713-.525T17.5%206q-1.175%200-2.325.3T13%207.2zM12%2020q-1.2-.95-2.6-1.475T6.5%2018q-1.325%200-2.775.5T1%2020.05V5.55Q2.1%204.8%203.588%204.4T6.5%204q1.45%200%202.838.375T12%205.5q1.275-.75%202.663-1.125T17.5%204q1.425%200%202.913.4T23%205.55v14.5Q21.75%2019%2020.287%2018.5T17.5%2018q-1.5%200-2.9.525T12%2020m2-10.1V8.2q.825-.35%201.688-.525T17.5%207.5q.65%200%201.275.1T20%207.85v1.6q-.6-.225-1.213-.337T17.5%209q-.95%200-1.825.238T14%209.9m0%205.5v-1.7q.825-.35%201.688-.525T17.5%2013q.65%200%201.275.1t1.225.25v1.6q-.6-.225-1.213-.338T17.5%2014.5q-.95%200-1.825.225T14%2015.4m0-2.75v-1.7q.825-.35%201.688-.525t1.812-.175q.65%200%201.275.1T20%2010.6v1.6q-.6-.225-1.213-.338T17.5%2011.75q-.95%200-1.825.238T14%2012.65'/%3e%3c/svg%3e";/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Zn=typeof document<"u";function Ey(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const lt=Object.assign;function jo(e,t){const n={};for(const r in t){const s=t[r];n[r]=Te(s)?s.map(e):e(s)}return n}const Kr=()=>{},Te=Array.isArray,qf=/#/g,vy=/&/g,Ty=/\//g,wy=/=/g,Iy=/\?/g,Hf=/\+/g,Ay=/%5B/g,Ry=/%5D/g,zf=/%5E/g,Sy=/%60/g,Kf=/%7B/g,Py=/%7C/g,Gf=/%7D/g,Cy=/%20/g;function Rl(e){return encodeURI(""+e).replace(Py,"|").replace(Ay,"[").replace(Ry,"]")}function by(e){return Rl(e).replace(Kf,"{").replace(Gf,"}").replace(zf,"^")}function Pa(e){return Rl(e).replace(Hf,"%2B").replace(Cy,"+").replace(qf,"%23").replace(vy,"%26").replace(Sy,"`").replace(Kf,"{").replace(Gf,"}").replace(zf,"^")}function Vy(e){return Pa(e).replace(wy,"%3D")}function Dy(e){return Rl(e).replace(qf,"%23").replace(Iy,"%3F")}function xy(e){return e==null?"":Dy(e).replace(Ty,"%2F")}function is(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const ky=/\/$/,Ny=e=>e.replace(ky,"");function qo(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=Fy(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:is(o)}}function Oy(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function uu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function My(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&fr(t.matched[r],n.matched[s])&&Wf(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function fr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Wf(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ly(e[n],t[n]))return!1;return!0}function Ly(e,t){return Te(e)?hu(e,t):Te(t)?hu(t,e):e===t}function hu(e,t){return Te(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Fy(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var os;(function(e){e.pop="pop",e.push="push"})(os||(os={}));var Gr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Gr||(Gr={}));function By(e){if(!e)if(Zn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ny(e)}const Uy=/^[^#]+#/;function $y(e,t){return e.replace(Uy,"#")+t}function jy(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Yi=()=>({left:window.scrollX,top:window.scrollY});function qy(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=jy(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function fu(e,t){return(history.state?history.state.position-t:-1)+e}const Ca=new Map;function Hy(e,t){Ca.set(e,t)}function zy(e){const t=Ca.get(e);return Ca.delete(e),t}let Ky=()=>location.protocol+"//"+location.host;function Qf(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),uu(l,"")}return uu(n,e)+r+s}function Gy(e,t,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const m=Qf(e,location),E=n.value,R=t.value;let S=0;if(f){if(n.value=m,t.value=f,o&&o===E){o=null;return}S=R?f.position-R.position:0}else r(m);s.forEach(I=>{I(n.value,E,{delta:S,type:os.pop,direction:S?S>0?Gr.forward:Gr.back:Gr.unknown})})};function l(){o=n.value}function c(f){s.push(f);const m=()=>{const E=s.indexOf(f);E>-1&&s.splice(E,1)};return i.push(m),m}function u(){const{history:f}=window;f.state&&f.replaceState(lt({},f.state,{scroll:Yi()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function du(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Yi():null}}function Wy(e){const{history:t,location:n}=window,r={value:Qf(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=e.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+l:Ky()+e+l;try{t[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(m){console.error(m),n[u?"replace":"assign"](f)}}function o(l,c){const u=lt({},t.state,du(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=lt({},s.value,t.state,{forward:l,scroll:Yi()});i(u.current,u,!0);const h=lt({},du(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function Qy(e){e=By(e);const t=Wy(e),n=Gy(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=lt({location:"",base:e,go:r,createHref:$y.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Yy(e){return typeof e=="string"||e&&typeof e=="object"}function Yf(e){return typeof e=="string"||typeof e=="symbol"}const tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xf=Symbol("");var pu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(pu||(pu={}));function dr(e,t){return lt(new Error,{type:e,[Xf]:!0},t)}function je(e,t){return e instanceof Error&&Xf in e&&(t==null||!!(e.type&t))}const mu="[^/]+?",Xy={sensitive:!1,strict:!1,start:!0,end:!0},Jy=/[.+*?^${}()[\]/\\]/g;function Zy(e,t){const n=lt({},Xy,t),r=[];let s=n.start?"^":"";const i=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let m=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(Jy,"\\$&"),m+=40;else if(f.type===1){const{value:E,repeatable:R,optional:S,regexp:I}=f;i.push({name:E,repeatable:R,optional:S});const k=I||mu;if(k!==mu){m+=10;try{new RegExp(`(${k})`)}catch(X){throw new Error(`Invalid custom RegExp for param "${E}" (${k}): `+X.message)}}let F=R?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(F=S&&c.length<2?`(?:/${F})`:"/"+F),S&&(F+="?"),s+=F,m+=20,S&&(m+=-8),R&&(m+=-20),k===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",E=i[f-1];h[E.name]=m&&E.repeatable?m.split("/"):m}return h}function l(c){let u="",h=!1;for(const f of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:E,repeatable:R,optional:S}=m,I=E in c?c[E]:"";if(Te(I)&&!R)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const k=Te(I)?I.join("/"):I;if(!k)if(S)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${E}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function tE(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function eE(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=tE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(gu(r))return 1;if(gu(s))return-1}return s.length-r.length}function gu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const nE={type:0,value:""},rE=/[a-zA-Z0-9_]/;function sE(e){if(!e)return[[]];if(e==="/")return[[nE]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:rE.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function iE(e,t,n){const r=Zy(sE(e.path),n),s=lt(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function oE(e,t){const n=[],r=new Map;t=Eu({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,h,f){const m=!f,E=aE(u);E.aliasOf=f&&f.record;const R=Eu(t,u),S=[E];if("alias"in u){const F=typeof u.alias=="string"?[u.alias]:u.alias;for(const X of F)S.push(lt({},E,{components:f?f.record.components:E.components,path:X,aliasOf:f?f.record:E}))}let I,k;for(const F of S){const{path:X}=F;if(h&&X[0]!=="/"){const dt=h.record.path,q=dt[dt.length-1]==="/"?"":"/";F.path=h.record.path+(X&&q+X)}if(I=iE(F,h,R),f?f.alias.push(I):(k=k||I,k!==I&&k.alias.push(I),m&&u.name&&!yu(I)&&o(u.name)),E.children){const dt=E.children;for(let q=0;q<dt.length;q++)i(dt[q],I,f&&f.children[q])}f=f||I,(I.record.components&&Object.keys(I.record.components).length||I.record.name||I.record.redirect)&&l(I)}return k?()=>{o(k)}:Kr}function o(u){if(Yf(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&eE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Jf(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!yu(u)&&r.set(u.record.name,u)}function c(u,h){let f,m={},E,R;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw dr(1,{location:u});R=f.record.name,m=lt(_u(h.params,f.keys.filter(k=>!k.optional).concat(f.parent?f.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),u.params&&_u(u.params,f.keys.map(k=>k.name))),E=f.stringify(m)}else if(u.path!=null)E=u.path,f=n.find(k=>k.re.test(E)),f&&(m=f.parse(E),R=f.record.name);else{if(f=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!f)throw dr(1,{location:u,currentLocation:h});R=f.record.name,m=lt({},h.params,u.params),E=f.stringify(m)}const S=[];let I=f;for(;I;)S.unshift(I.record),I=I.parent;return{name:R,path:E,params:m,matched:S,meta:cE(S)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function _u(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function aE(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:lE(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function lE(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function yu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function cE(e){return e.reduce((t,n)=>lt(t,n.meta),{})}function Eu(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Jf(e,t){return t.children.some(n=>n===e||Jf(e,n))}function uE(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Hf," "),o=i.indexOf("="),a=is(o<0?i:i.slice(0,o)),l=o<0?null:is(i.slice(o+1));if(a in t){let c=t[a];Te(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function vu(e){let t="";for(let n in e){const r=e[n];if(n=Vy(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Te(r)?r.map(i=>i&&Pa(i)):[r&&Pa(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function hE(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Te(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const fE=Symbol(""),Tu=Symbol(""),Sl=Symbol(""),Zf=Symbol(""),ba=Symbol("");function xr(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function sn(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(dr(4,{from:n,to:t})):f instanceof Error?l(f):Yy(f)?l(dr(2,{from:t,to:f})):(o&&r.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=i(()=>e.call(r&&r.instances[s],t,n,c));let h=Promise.resolve(u);e.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function Ho(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(dE(l)){const u=(l.__vccOpts||l)[t];u&&i.push(sn(u,n,r,o,a,s))}else{let c=l();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=Ey(u)?u.default:u;o.components[a]=h;const m=(h.__vccOpts||h)[t];return m&&sn(m,n,r,o,a,s)()}))}}return i}function dE(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function wu(e){const t=ze(Sl),n=ze(Zf),r=me(()=>{const l=Ve(e.to);return t.resolve(l)}),s=me(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(fr.bind(null,u));if(f>-1)return f;const m=Iu(l[c-2]);return c>1&&Iu(u)===m&&h[h.length-1].path!==m?h.findIndex(fr.bind(null,l[c-2])):f}),i=me(()=>s.value>-1&&gE(n.params,r.value.params)),o=me(()=>s.value>-1&&s.value===n.matched.length-1&&Wf(n.params,r.value.params));function a(l={}){return mE(l)?t[Ve(e.replace)?"replace":"push"](Ve(e.to)).catch(Kr):Promise.resolve()}return{route:r,href:me(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const pE=Is({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wu,setup(e,{slots:t}){const n=qi(wu(e)),{options:r}=ze(Sl),s=me(()=>({[Au(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Au(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:jf("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ui=pE;function mE(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function gE(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Te(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Iu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Au=(e,t,n)=>e??t??n,_E=Is({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=ze(ba),s=me(()=>e.route||r.value),i=ze(Tu,0),o=me(()=>{let c=Ve(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=me(()=>s.value.matched[o.value]);oi(Tu,me(()=>o.value+1)),oi(fE,a),oi(ba,s);const l=ni();return si(()=>[l.value,a.value,e.name],([c,u,h],[f,m,E])=>{u&&(u.instances[h]=c,m&&m!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!fr(u,m)||!f)&&(u.enterCallbacks[h]||[]).forEach(R=>R(c))},{flush:"post"}),()=>{const c=s.value,u=e.name,h=a.value,f=h&&h.components[u];if(!f)return Ru(n.default,{Component:f,route:c});const m=h.props[u],E=m?m===!0?c.params:typeof m=="function"?m(c):m:null,S=jf(f,lt({},E,t,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Ru(n.default,{Component:S,route:c})||S}}});function Ru(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const td=_E;function yE(e){const t=oE(e.routes,e),n=e.parseQuery||uE,r=e.stringifyQuery||vu,s=e.history,i=xr(),o=xr(),a=xr(),l=Og(tn);let c=tn;Zn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=jo.bind(null,y=>""+y),h=jo.bind(null,xy),f=jo.bind(null,is);function m(y,N){let D,L;return Yf(y)?(D=t.getRecordMatcher(y),L=N):L=y,t.addRoute(L,D)}function E(y){const N=t.getRecordMatcher(y);N&&t.removeRoute(N)}function R(){return t.getRoutes().map(y=>y.record)}function S(y){return!!t.getRecordMatcher(y)}function I(y,N){if(N=lt({},N||l.value),typeof y=="string"){const p=qo(n,y,N.path),g=t.resolve({path:p.path},N),v=s.createHref(p.fullPath);return lt(p,g,{params:f(g.params),hash:is(p.hash),redirectedFrom:void 0,href:v})}let D;if(y.path!=null)D=lt({},y,{path:qo(n,y.path,N.path).path});else{const p=lt({},y.params);for(const g in p)p[g]==null&&delete p[g];D=lt({},y,{params:h(p)}),N.params=h(N.params)}const L=t.resolve(D,N),at=y.hash||"";L.params=u(f(L.params));const Et=Oy(r,lt({},y,{hash:by(at),path:L.path})),d=s.createHref(Et);return lt({fullPath:Et,hash:at,query:r===vu?hE(y.query):y.query||{}},L,{redirectedFrom:void 0,href:d})}function k(y){return typeof y=="string"?qo(n,y,l.value.path):lt({},y)}function F(y,N){if(c!==y)return dr(8,{from:N,to:y})}function X(y){return It(y)}function dt(y){return X(lt(k(y),{replace:!0}))}function q(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:D}=N;let L=typeof D=="function"?D(y):D;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=k(L):{path:L},L.params={}),lt({query:y.query,hash:y.hash,params:L.path!=null?{}:y.params},L)}}function It(y,N){const D=c=I(y),L=l.value,at=y.state,Et=y.force,d=y.replace===!0,p=q(D);if(p)return It(lt(k(p),{state:typeof p=="object"?lt({},at,p.state):at,force:Et,replace:d}),N||D);const g=D;g.redirectedFrom=N;let v;return!Et&&My(r,L,D)&&(v=dr(16,{to:g,from:L}),Ae(L,L,!0,!1)),(v?Promise.resolve(v):ie(g,L)).catch(_=>je(_)?je(_,2)?_:Je(_):st(_,g,L)).then(_=>{if(_){if(je(_,2))return It(lt({replace:d},k(_.to),{state:typeof _.to=="object"?lt({},at,_.to.state):at,force:Et}),N||g)}else _=In(g,L,!0,d,at);return Xe(g,L,_),_})}function se(y,N){const D=F(y,N);return D?Promise.reject(D):Promise.resolve()}function Ue(y){const N=Yn.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function ie(y,N){let D;const[L,at,Et]=EE(y,N);D=Ho(L.reverse(),"beforeRouteLeave",y,N);for(const p of L)p.leaveGuards.forEach(g=>{D.push(sn(g,y,N))});const d=se.bind(null,y,N);return D.push(d),$t(D).then(()=>{D=[];for(const p of i.list())D.push(sn(p,y,N));return D.push(d),$t(D)}).then(()=>{D=Ho(at,"beforeRouteUpdate",y,N);for(const p of at)p.updateGuards.forEach(g=>{D.push(sn(g,y,N))});return D.push(d),$t(D)}).then(()=>{D=[];for(const p of Et)if(p.beforeEnter)if(Te(p.beforeEnter))for(const g of p.beforeEnter)D.push(sn(g,y,N));else D.push(sn(p.beforeEnter,y,N));return D.push(d),$t(D)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),D=Ho(Et,"beforeRouteEnter",y,N,Ue),D.push(d),$t(D))).then(()=>{D=[];for(const p of o.list())D.push(sn(p,y,N));return D.push(d),$t(D)}).catch(p=>je(p,8)?p:Promise.reject(p))}function Xe(y,N,D){a.list().forEach(L=>Ue(()=>L(y,N,D)))}function In(y,N,D,L,at){const Et=F(y,N);if(Et)return Et;const d=N===tn,p=Zn?history.state:{};D&&(L||d?s.replace(y.fullPath,lt({scroll:d&&p&&p.scroll},at)):s.push(y.fullPath,at)),l.value=y,Ae(y,N,D,d),Je()}let Ie;function br(){Ie||(Ie=s.listen((y,N,D)=>{if(!Bs.listening)return;const L=I(y),at=q(L);if(at){It(lt(at,{replace:!0}),L).catch(Kr);return}c=L;const Et=l.value;Zn&&Hy(fu(Et.fullPath,D.delta),Yi()),ie(L,Et).catch(d=>je(d,12)?d:je(d,2)?(It(d.to,L).then(p=>{je(p,20)&&!D.delta&&D.type===os.pop&&s.go(-1,!1)}).catch(Kr),Promise.reject()):(D.delta&&s.go(-D.delta,!1),st(d,L,Et))).then(d=>{d=d||In(L,Et,!1),d&&(D.delta&&!je(d,8)?s.go(-D.delta,!1):D.type===os.pop&&je(d,20)&&s.go(-1,!1)),Xe(L,Et,d)}).catch(Kr)}))}let Wn=xr(),bt=xr(),ut;function st(y,N,D){Je(y);const L=bt.list();return L.length?L.forEach(at=>at(y,N,D)):console.error(y),Promise.reject(y)}function $e(){return ut&&l.value!==tn?Promise.resolve():new Promise((y,N)=>{Wn.add([y,N])})}function Je(y){return ut||(ut=!y,br(),Wn.list().forEach(([N,D])=>y?D(y):N()),Wn.reset()),y}function Ae(y,N,D,L){const{scrollBehavior:at}=e;if(!Zn||!at)return Promise.resolve();const Et=!D&&zy(fu(y.fullPath,0))||(L||!D)&&history.state&&history.state.scroll||null;return pf().then(()=>at(y,N,Et)).then(d=>d&&qy(d)).catch(d=>st(d,y,N))}const Jt=y=>s.go(y);let Qn;const Yn=new Set,Bs={currentRoute:l,listening:!0,addRoute:m,removeRoute:E,hasRoute:S,getRoutes:R,resolve:I,options:e,push:X,replace:dt,go:Jt,back:()=>Jt(-1),forward:()=>Jt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:bt.add,isReady:$e,install(y){const N=this;y.component("RouterLink",ui),y.component("RouterView",td),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Ve(l)}),Zn&&!Qn&&l.value===tn&&(Qn=!0,X(s.location).catch(at=>{}));const D={};for(const at in tn)Object.defineProperty(D,at,{get:()=>l.value[at],enumerable:!0});y.provide(Sl,N),y.provide(Zf,of(D)),y.provide(ba,l);const L=y.unmount;Yn.add(y),y.unmount=function(){Yn.delete(y),Yn.size<1&&(c=tn,Ie&&Ie(),Ie=null,l.value=tn,Qn=!1,ut=!1),L()}}};function $t(y){return y.reduce((N,D)=>N.then(()=>Ue(D)),Promise.resolve())}return Bs}function EE(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(c=>fr(c,a))?r.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(c=>fr(c,l))||s.push(l))}return[n,r,s]}const vE={class:"card"},TE=k_('<div class="separator"></div><p> Книги должны быть разбиты на группы по году публикации, группы должны быть отсортированы в обратном порядке (сначала новые), внутри группы книги сортируются по названию. </p><p>Нужна возможность добавлять и удалять книги.</p><p>Система должна рекомендовать хорошую книгу для прочтения:</p><ul><li> Хорошая книга должна пройти проверку временем, поэтому она должна быть издана не менее 3 лет назад; </li><li>Из всех проверенных временем книг нужно выбрать лучшие - с самым высоким рейтингом;</li><li>Если нашлось несколько хороших книг выбрать одну случайным образом.</li></ul><p>Дополнительные функции (по желанию):</p><ul><li>✅ Валидация ISBN;</li><li>Смена режима группировки (по рейтингу, по автору);</li><li>Редактирование книг;</li></ul>',7),wE={__name:"Title",props:["title"],setup(e){return(t,n)=>(Ot(),te("div",vE,[it("h1",null,Pn(e.title),1),TE]))}},IE={class:"logo"},AE=it("div",{class:"logo__wrapper"},[it("img",{src:yy,alt:"Logo",width:"45px",height:"45px"}),it("h1",null,"Библиотека")],-1),RE={class:"nav__links"},SE=Is({__name:"App",setup(e){return(t,n)=>(Ot(),te(ce,null,[it("header",null,[it("nav",null,[it("div",IE,[wt(Ve(ui),{to:"/"},{default:ri(()=>[AE]),_:1})]),it("div",RE,[wt(Ve(ui),{to:"/"},{default:ri(()=>[Ra("Главная")]),_:1}),wt(Ve(ui),{to:"/AddBook"},{default:ri(()=>[Ra("Добавить Книгу")]),_:1})])])]),wt(wE,{title:"SPA “Каталог книг”"}),wt(Ve(td))],64))}}),PE="modulepreload",CE=function(e,t){return new URL(e,t).href},Su={},bE=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(n.map(l=>{if(l=CE(l,r),l in Su)return;Su[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(!!r)for(let m=i.length-1;m>=0;m--){const E=i[m];if(E.href===l&&(!c||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":PE,c||(f.as="script",f.crossOrigin=""),f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,E)=>{f.addEventListener("load",m),f.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${l}`)))})}))}return s.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};var Pu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},VE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},nd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,l=s+2<e.length,c=l?e[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(f=64)),r.push(n[u],n[h],n[f],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ed(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):VE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new DE;const f=i<<2|a>>4;if(r.push(f),c!==64){const m=a<<4&240|c>>2;if(r.push(m),h!==64){const E=c<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class DE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xE=function(e){const t=ed(e);return nd.encodeByteArray(t,!0)},Ei=function(e){return xE(e).replace(/\./g,"")},kE=function(e){try{return nd.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=()=>NE().__FIREBASE_DEFAULTS__,ME=()=>{if(typeof process>"u"||typeof Pu>"u")return;const e=Pu.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},LE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&kE(e[1]);return t&&JSON.parse(t)},Pl=()=>{try{return OE()||ME()||LE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},FE=e=>{var t,n;return(n=(t=Pl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},BE=e=>{const t=FE(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},rd=()=>{var e;return(e=Pl())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ei(JSON.stringify(n)),Ei(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qE(){var e;const t=(e=Pl())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HE(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function zE(){return!qE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sd(){try{return typeof indexedDB=="object"}catch{return!1}}function id(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function KE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="FirebaseError";class vn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=GE,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xi.prototype.create)}}class Xi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?WE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new vn(s,a,r)}}function WE(e,t){return e.replace(QE,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const QE=/\{\$([^}]+)}/g;function vi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Cu(i)&&Cu(o)){if(!vi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Cu(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=1e3,XE=2,JE=4*60*60*1e3,ZE=.5;function bu(e,t=YE,n=XE){const r=t*Math.pow(n,e),s=Math.round(ZE*r*(Math.random()-.5)*2);return Math.min(JE,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e){return e&&e._delegate?e._delegate:e}class Ke{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new UE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(nv(t))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Sn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Sn){return this.instances.has(t)}getOptions(t=Sn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ev(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Sn){return this.component?this.component.multipleInstances?t:Sn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ev(e){return e===Sn?void 0:e}function nv(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new tv(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(nt||(nt={}));const sv={debug:nt.DEBUG,verbose:nt.VERBOSE,info:nt.INFO,warn:nt.WARN,error:nt.ERROR,silent:nt.SILENT},iv=nt.INFO,ov={[nt.DEBUG]:"log",[nt.VERBOSE]:"log",[nt.INFO]:"info",[nt.WARN]:"warn",[nt.ERROR]:"error"},av=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=ov[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Cl{constructor(t){this.name=t,this._logLevel=iv,this._logHandler=av,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in nt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?sv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,nt.DEBUG,...t),this._logHandler(this,nt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,nt.VERBOSE,...t),this._logHandler(this,nt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,nt.INFO,...t),this._logHandler(this,nt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,nt.WARN,...t),this._logHandler(this,nt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,nt.ERROR,...t),this._logHandler(this,nt.ERROR,...t)}}const lv=(e,t)=>t.some(n=>e instanceof n);let Vu,Du;function cv(){return Vu||(Vu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uv(){return Du||(Du=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const od=new WeakMap,Va=new WeakMap,ad=new WeakMap,zo=new WeakMap,bl=new WeakMap;function hv(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(cn(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&od.set(n,e)}).catch(()=>{}),bl.set(t,e),t}function fv(e){if(Va.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Va.set(e,t)}let Da={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Va.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ad.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function dv(e){Da=e(Da)}function pv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ko(this),t,...n);return ad.set(r,t.sort?t.sort():[t]),cn(r)}:uv().includes(e)?function(...t){return e.apply(Ko(this),t),cn(od.get(this))}:function(...t){return cn(e.apply(Ko(this),t))}}function mv(e){return typeof e=="function"?pv(e):(e instanceof IDBTransaction&&fv(e),lv(e,cv())?new Proxy(e,Da):e)}function cn(e){if(e instanceof IDBRequest)return hv(e);if(zo.has(e))return zo.get(e);const t=mv(e);return t!==e&&(zo.set(e,t),bl.set(t,e)),t}const Ko=e=>bl.get(e);function ld(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=cn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(cn(o.result),l.oldVersion,l.newVersion,cn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const gv=["get","getKey","getAll","getAllKeys","count"],_v=["put","add","delete","clear"],Go=new Map;function xu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Go.get(t))return Go.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=_v.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||gv.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Go.set(t,i),i}dv(e=>({...e,get:(t,n,r)=>xu(t,n)||e.get(t,n,r),has:(t,n)=>!!xu(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ev(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ev(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const xa="@firebase/app",ku="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new Cl("@firebase/app"),vv="@firebase/app-compat",Tv="@firebase/analytics-compat",wv="@firebase/analytics",Iv="@firebase/app-check-compat",Av="@firebase/app-check",Rv="@firebase/auth",Sv="@firebase/auth-compat",Pv="@firebase/database",Cv="@firebase/database-compat",bv="@firebase/functions",Vv="@firebase/functions-compat",Dv="@firebase/installations",xv="@firebase/installations-compat",kv="@firebase/messaging",Nv="@firebase/messaging-compat",Ov="@firebase/performance",Mv="@firebase/performance-compat",Lv="@firebase/remote-config",Fv="@firebase/remote-config-compat",Bv="@firebase/storage",Uv="@firebase/storage-compat",$v="@firebase/firestore",jv="@firebase/firestore-compat",qv="firebase",Hv="10.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="[DEFAULT]",zv={[xa]:"fire-core",[vv]:"fire-core-compat",[wv]:"fire-analytics",[Tv]:"fire-analytics-compat",[Av]:"fire-app-check",[Iv]:"fire-app-check-compat",[Rv]:"fire-auth",[Sv]:"fire-auth-compat",[Pv]:"fire-rtdb",[Cv]:"fire-rtdb-compat",[bv]:"fire-fn",[Vv]:"fire-fn-compat",[Dv]:"fire-iid",[xv]:"fire-iid-compat",[kv]:"fire-fcm",[Nv]:"fire-fcm-compat",[Ov]:"fire-perf",[Mv]:"fire-perf-compat",[Lv]:"fire-rc",[Fv]:"fire-rc-compat",[Bv]:"fire-gcs",[Uv]:"fire-gcs-compat",[$v]:"fire-fst",[jv]:"fire-fst-compat","fire-js":"fire-js",[qv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new Map,Kv=new Map,Na=new Map;function Nu(e,t){try{e.container.addComponent(t)}catch(n){Fn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function pn(e){const t=e.name;if(Na.has(t))return Fn.debug(`There were multiple attempts to register component ${t}.`),!1;Na.set(t,e);for(const n of Ti.values())Nu(n,e);for(const n of Kv.values())Nu(n,e);return!0}function Rs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},un=new Xi("app","Firebase",Gv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ke("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv=Hv;function cd(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ka,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw un.create("bad-app-name",{appName:String(s)});if(n||(n=rd()),!n)throw un.create("no-options");const i=Ti.get(s);if(i){if(vi(n,i.options)&&vi(r,i.config))return i;throw un.create("duplicate-app",{appName:s})}const o=new rv(s);for(const l of Na.values())o.addComponent(l);const a=new Wv(n,r,o);return Ti.set(s,a),a}function ud(e=ka){const t=Ti.get(e);if(!t&&e===ka&&rd())return cd();if(!t)throw un.create("no-app",{appName:e});return t}function ke(e,t,n){var r;let s=(r=zv[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Fn.warn(a.join(" "));return}pn(new Ke(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="firebase-heartbeat-database",Xv=1,as="firebase-heartbeat-store";let Wo=null;function hd(){return Wo||(Wo=ld(Yv,Xv,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(as)}catch(n){console.warn(n)}}}}).catch(e=>{throw un.create("idb-open",{originalErrorMessage:e.message})})),Wo}async function Jv(e){try{const n=(await hd()).transaction(as),r=await n.objectStore(as).get(fd(e));return await n.done,r}catch(t){if(t instanceof vn)Fn.warn(t.message);else{const n=un.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Fn.warn(n.message)}}}async function Ou(e,t){try{const r=(await hd()).transaction(as,"readwrite");await r.objectStore(as).put(t,fd(e)),await r.done}catch(n){if(n instanceof vn)Fn.warn(n.message);else{const r=un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fn.warn(r.message)}}}function fd(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=1024,t0=30*24*60*60*1e3;class e0{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new r0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Mu();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=t0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Mu(),{heartbeatsToSend:r,unsentEntries:s}=n0(this._heartbeatsCache.heartbeats),i=Ei(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Mu(){return new Date().toISOString().substring(0,10)}function n0(e,t=Zv){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Lu(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Lu(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class r0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sd()?id().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Jv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ou(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ou(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Lu(e){return Ei(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(e){pn(new Ke("platform-logger",t=>new yv(t),"PRIVATE")),pn(new Ke("heartbeat",t=>new e0(t),"PRIVATE")),ke(xa,ku,e),ke(xa,ku,"esm2017"),ke("fire-js","")}s0("");var i0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Vl=Vl||{},z=i0||self;function Ji(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Zi(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function o0(e){return Object.prototype.hasOwnProperty.call(e,Qo)&&e[Qo]||(e[Qo]=++a0)}var Qo="closure_uid_"+(1e9*Math.random()>>>0),a0=0;function l0(e,t,n){return e.call.apply(e.bind,arguments)}function c0(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function Gt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Gt=l0:Gt=c0,Gt.apply(null,arguments)}function Ks(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Nt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Tn(){this.s=this.s,this.o=this.o}var u0=0;Tn.prototype.s=!1;Tn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),u0!=0)&&o0(this)};Tn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const dd=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Dl(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Fu(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ji(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function Wt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Wt.prototype.h=function(){this.defaultPrevented=!0};var h0=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};z.addEventListener("test",n,t),z.removeEventListener("test",n,t)}catch{}return e}();function ls(e){return/^[\s\xa0]*$/.test(e)}function to(){var e=z.navigator;return e&&(e=e.userAgent)?e:""}function be(e){return to().indexOf(e)!=-1}function xl(e){return xl[" "](e),e}xl[" "]=function(){};function f0(e,t){var n=iT;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var d0=be("Opera"),pr=be("Trident")||be("MSIE"),pd=be("Edge"),Oa=pd||pr,md=be("Gecko")&&!(to().toLowerCase().indexOf("webkit")!=-1&&!be("Edge"))&&!(be("Trident")||be("MSIE"))&&!be("Edge"),p0=to().toLowerCase().indexOf("webkit")!=-1&&!be("Edge");function gd(){var e=z.document;return e?e.documentMode:void 0}var Ma;t:{var Yo="",Xo=function(){var e=to();if(md)return/rv:([^\);]+)(\)|;)/.exec(e);if(pd)return/Edge\/([\d\.]+)/.exec(e);if(pr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(p0)return/WebKit\/(\S+)/.exec(e);if(d0)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Xo&&(Yo=Xo?Xo[1]:""),pr){var Jo=gd();if(Jo!=null&&Jo>parseFloat(Yo)){Ma=String(Jo);break t}}Ma=Yo}var La;if(z.document&&pr){var Bu=gd();La=Bu||parseInt(Ma,10)||void 0}else La=void 0;var m0=La;function cs(e,t){if(Wt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(md){t:{try{xl(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:g0[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&cs.$.h.call(this)}}Nt(cs,Wt);var g0={2:"touch",3:"pen",4:"mouse"};cs.prototype.h=function(){cs.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var eo="closure_listenable_"+(1e6*Math.random()|0),_0=0;function y0(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++_0,this.fa=this.ia=!1}function no(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function kl(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function E0(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function _d(e){const t={};for(const n in e)t[n]=e[n];return t}const Uu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yd(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<Uu.length;i++)n=Uu[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ro(e){this.src=e,this.g={},this.h=0}ro.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Ba(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new y0(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function Fa(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=dd(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(no(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ba(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var Nl="closure_lm_"+(1e6*Math.random()|0),Zo={};function Ed(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ed(e,t[i],n,r,s);return null}return n=wd(n),e&&e[eo]?e.O(t,n,Zi(r)?!!r.capture:!!r,s):v0(e,t,n,!1,r,s)}function v0(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Zi(s)?!!s.capture:!!s,a=Ml(e);if(a||(e[Nl]=a=new ro(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=T0(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)h0||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Td(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function T0(){function e(n){return t.call(e.src,e.listener,n)}const t=w0;return e}function vd(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)vd(e,t[i],n,r,s);else r=Zi(r)?!!r.capture:!!r,n=wd(n),e&&e[eo]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Ba(i,n,r,s),-1<n&&(no(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ml(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ba(t,n,r,s)),(n=-1<e?t[e]:null)&&Ol(n))}function Ol(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[eo])Fa(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Td(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ml(t))?(Fa(n,e),n.h==0&&(n.src=null,t[Nl]=null)):no(e)}}}function Td(e){return e in Zo?Zo[e]:Zo[e]="on"+e}function w0(e,t){if(e.fa)e=!0;else{t=new cs(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Ol(e),e=n.call(r,t)}return e}function Ml(e){return e=e[Nl],e instanceof ro?e:null}var ta="__closure_events_fn_"+(1e9*Math.random()>>>0);function wd(e){return typeof e=="function"?e:(e[ta]||(e[ta]=function(t){return e.handleEvent(t)}),e[ta])}function kt(){Tn.call(this),this.i=new ro(this),this.S=this,this.J=null}Nt(kt,Tn);kt.prototype[eo]=!0;kt.prototype.removeEventListener=function(e,t,n,r){vd(this,e,t,n,r)};function Bt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Wt(t,e);else if(t instanceof Wt)t.target=t.target||e;else{var s=t;t=new Wt(r,e),yd(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Gs(o,r,!0,t)&&s}if(o=t.g=e,s=Gs(o,r,!0,t)&&s,s=Gs(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=Gs(o,r,!1,t)&&s}kt.prototype.N=function(){if(kt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)no(n[r]);delete e.g[t],e.h--}}this.J=null};kt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};kt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Gs(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Fa(e.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ll=z.JSON.stringify;class I0{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function A0(){var e=Fl;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class R0{constructor(){this.h=this.g=null}add(t,n){const r=Id.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Id=new I0(()=>new S0,e=>e.reset());class S0{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function P0(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function C0(e){z.setTimeout(()=>{throw e},0)}let us,hs=!1,Fl=new R0,Ad=()=>{const e=z.Promise.resolve(void 0);us=()=>{e.then(b0)}};var b0=()=>{for(var e;e=A0();){try{e.h.call(e.g)}catch(n){C0(n)}var t=Id;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}hs=!1};function so(e,t){kt.call(this),this.h=e||1,this.g=t||z,this.j=Gt(this.qb,this),this.l=Date.now()}Nt(so,kt);V=so.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Bt(this,"tick"),this.ga&&(Bl(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Bl(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}V.N=function(){so.$.N.call(this),Bl(this),delete this.g};function Ul(e,t,n){if(typeof e=="function")n&&(e=Gt(e,n));else if(e&&typeof e.handleEvent=="function")e=Gt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:z.setTimeout(e,t||0)}function Rd(e){e.g=Ul(()=>{e.g=null,e.i&&(e.i=!1,Rd(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class V0 extends Tn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Rd(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fs(e){Tn.call(this),this.h=e,this.g={}}Nt(fs,Tn);var $u=[];function Sd(e,t,n,r){Array.isArray(n)||(n&&($u[0]=n.toString()),n=$u);for(var s=0;s<n.length;s++){var i=Ed(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Pd(e){kl(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ol(t)},e),e.g={}}fs.prototype.N=function(){fs.$.N.call(this),Pd(this)};fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function io(){this.g=!0}io.prototype.Ea=function(){this.g=!1};function D0(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function x0(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function sr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+N0(e,n)+(r?" "+r:"")})}function k0(e,t){e.info(function(){return"TIMEOUT: "+t})}io.prototype.info=function(){};function N0(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ll(n)}catch{return t}}var zn={},ju=null;function oo(){return ju=ju||new kt}zn.Ta="serverreachability";function Cd(e){Wt.call(this,zn.Ta,e)}Nt(Cd,Wt);function ds(e){const t=oo();Bt(t,new Cd(t))}zn.STAT_EVENT="statevent";function bd(e,t){Wt.call(this,zn.STAT_EVENT,e),this.stat=t}Nt(bd,Wt);function Xt(e){const t=oo();Bt(t,new bd(t,e))}zn.Ua="timingevent";function Vd(e,t){Wt.call(this,zn.Ua,e),this.size=t}Nt(Vd,Wt);function Ss(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){e()},t)}var ao={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Dd={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function $l(){}$l.prototype.h=null;function qu(e){return e.h||(e.h=e.i())}function xd(){}var Ps={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function jl(){Wt.call(this,"d")}Nt(jl,Wt);function ql(){Wt.call(this,"c")}Nt(ql,Wt);var Ua;function lo(){}Nt(lo,$l);lo.prototype.g=function(){return new XMLHttpRequest};lo.prototype.i=function(){return{}};Ua=new lo;function Cs(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new fs(this),this.P=O0,e=Oa?125:void 0,this.V=new so(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new kd}function kd(){this.i=null,this.g="",this.h=!1}var O0=45e3,Nd={},$a={};V=Cs.prototype;V.setTimeout=function(e){this.P=e};function ja(e,t,n){e.L=1,e.A=uo(Ge(t)),e.u=n,e.S=!0,Od(e,null)}function Od(e,t){e.G=Date.now(),bs(e),e.B=Ge(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),qd(n.i,"t",r),e.o=0,n=e.l.J,e.h=new kd,e.g=up(e.l,n?t:null,!e.u),0<e.O&&(e.M=new V0(Gt(e.Pa,e,e.g),e.O)),Sd(e.U,e.g,"readystatechange",e.nb),t=e.I?_d(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),ds(),D0(e.j,e.v,e.B,e.m,e.W,e.u)}V.nb=function(e){e=e.target;const t=this.M;t&&De(e)==3?t.l():this.Pa(e)};V.Pa=function(e){try{if(e==this.g)t:{const u=De(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Oa||this.g&&(this.h.h||this.g.ja()||Gu(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?ds(3):ds(2)),co(this);var n=this.g.da();this.ca=n;e:if(Md(this)){var r=Gu(this.g);e="";var s=r.length,i=De(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bn(this),Wr(this);var o="";break e}this.h.i=new z.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,x0(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ls(a)){var c=a;break e}}c=null}if(n=c)sr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qa(this,n);else{this.i=!1,this.s=3,Xt(12),bn(this),Wr(this);break t}}this.S?(Ld(this,u,o),Oa&&this.i&&u==3&&(Sd(this.U,this.V,"tick",this.mb),this.V.start())):(sr(this.j,this.m,o,null),qa(this,o)),u==4&&bn(this),this.i&&!this.J&&(u==4?op(this.l,this):(this.i=!1,bs(this)))}else nT(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Xt(12)):(this.s=0,Xt(13)),bn(this),Wr(this)}}}catch{}finally{}};function Md(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function Ld(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=M0(e,n),s==$a){t==4&&(e.s=4,Xt(14),r=!1),sr(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Nd){e.s=4,Xt(15),sr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else sr(e.j,e.m,s,null),qa(e,s);Md(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,Xt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ql(t),t.M=!0,Xt(11))):(sr(e.j,e.m,n,"[Invalid Chunked Response]"),bn(e),Wr(e))}V.mb=function(){if(this.g){var e=De(this.g),t=this.g.ja();this.o<t.length&&(co(this),Ld(this,e,t),this.i&&e!=4&&bs(this))}};function M0(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?$a:(n=Number(t.substring(n,r)),isNaN(n)?Nd:(r+=1,r+n>t.length?$a:(t=t.slice(r,r+n),e.o=r+n,t)))}V.cancel=function(){this.J=!0,bn(this)};function bs(e){e.Y=Date.now()+e.P,Fd(e,e.P)}function Fd(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Ss(Gt(e.lb,e),t)}function co(e){e.C&&(z.clearTimeout(e.C),e.C=null)}V.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(k0(this.j,this.B),this.L!=2&&(ds(),Xt(17)),bn(this),this.s=2,Wr(this)):Fd(this,this.Y-e)};function Wr(e){e.l.H==0||e.J||op(e.l,e)}function bn(e){co(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Bl(e.V),Pd(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function qa(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Ha(n.i,e))){if(!e.K&&Ha(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Ai(n),po(n);else break t;Wl(n),Xt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ss(Gt(n.ib,n),6e3));if(1>=Kd(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Vn(n,11)}else if((e.K||n.g==e)&&Ai(n),!ls(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const E=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=r.i;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Hl(i,i.h),i.h=null))}if(r.F){const R=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,pt(r.I,r.F,R))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=cp(r,r.J?r.pa:null,r.Y),o.K){Gd(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(co(a),bs(a)),r.g=o}else sp(r);0<n.j.length&&mo(n)}else c[0]!="stop"&&c[0]!="close"||Vn(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Vn(n,7):Gl(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}ds(4)}catch{}}function L0(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Ji(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function F0(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Ji(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Bd(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Ji(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=F0(e),r=L0(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var Ud=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function B0(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function On(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof On){this.h=e.h,wi(this,e.j),this.s=e.s,this.g=e.g,Ii(this,e.m),this.l=e.l;var t=e.i,n=new ps;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Hu(this,n),this.o=e.o}else e&&(t=String(e).match(Ud))?(this.h=!1,wi(this,t[1]||"",!0),this.s=Lr(t[2]||""),this.g=Lr(t[3]||"",!0),Ii(this,t[4]),this.l=Lr(t[5]||"",!0),Hu(this,t[6]||"",!0),this.o=Lr(t[7]||"")):(this.h=!1,this.i=new ps(null,this.h))}On.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Fr(t,zu,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Fr(t,zu,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Fr(n,n.charAt(0)=="/"?j0:$0,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Fr(n,H0)),e.join("")};function Ge(e){return new On(e)}function wi(e,t,n){e.j=n?Lr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ii(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Hu(e,t,n){t instanceof ps?(e.i=t,z0(e.i,e.h)):(n||(t=Fr(t,q0)),e.i=new ps(t,e.h))}function pt(e,t,n){e.i.set(t,n)}function uo(e){return pt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Lr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Fr(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,U0),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function U0(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var zu=/[#\/\?@]/g,$0=/[#\?:]/g,j0=/[#\?]/g,q0=/[#\?@]/g,H0=/#/g;function ps(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function wn(e){e.g||(e.g=new Map,e.h=0,e.i&&B0(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}V=ps.prototype;V.add=function(e,t){wn(this),this.i=null,e=Ir(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function $d(e,t){wn(e),t=Ir(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function jd(e,t){return wn(e),t=Ir(e,t),e.g.has(t)}V.forEach=function(e,t){wn(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};V.ta=function(){wn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};V.Z=function(e){wn(this);let t=[];if(typeof e=="string")jd(this,e)&&(t=t.concat(this.g.get(Ir(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};V.set=function(e,t){return wn(this),this.i=null,e=Ir(this,e),jd(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};V.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function qd(e,t,n){$d(e,t),0<n.length&&(e.i=null,e.g.set(Ir(e,t),Dl(n)),e.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function Ir(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function z0(e,t){t&&!e.j&&(wn(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&($d(this,r),qd(this,s,n))},e)),e.j=t}var K0=class{constructor(e,t){this.g=e,this.map=t}};function Hd(e){this.l=e||G0,z.PerformanceNavigationTiming?(e=z.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var G0=10;function zd(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Kd(e){return e.h?1:e.g?e.g.size:0}function Ha(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Hl(e,t){e.g?e.g.add(t):e.h=t}function Gd(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Hd.prototype.cancel=function(){if(this.i=Wd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Wd(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Dl(e.i)}var W0=class{stringify(e){return z.JSON.stringify(e,void 0)}parse(e){return z.JSON.parse(e,void 0)}};function Q0(){this.g=new W0}function Y0(e,t,n){const r=n||"";try{Bd(e,function(s,i){let o=s;Zi(s)&&(o=Ll(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function X0(e,t){const n=new io;if(z.Image){const r=new Image;r.onload=Ks(Ws,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Ks(Ws,n,r,"TestLoadImage: error",!1,t),r.onabort=Ks(Ws,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ks(Ws,n,r,"TestLoadImage: timeout",!1,t),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Ws(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Vs(e){this.l=e.ec||null,this.j=e.ob||!1}Nt(Vs,$l);Vs.prototype.g=function(){return new ho(this.l,this.j)};Vs.prototype.i=function(e){return function(){return e}}({});function ho(e,t){kt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=zl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Nt(ho,kt);var zl=0;V=ho.prototype;V.open=function(e,t){if(this.readyState!=zl)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ms(this)};V.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||z).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ds(this)),this.readyState=zl};V.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ms(this)),this.g&&(this.readyState=3,ms(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Qd(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Qd(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}V.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ds(this):ms(this),this.readyState==3&&Qd(this)}};V.Za=function(e){this.g&&(this.response=this.responseText=e,Ds(this))};V.Ya=function(e){this.g&&(this.response=e,Ds(this))};V.ka=function(){this.g&&Ds(this)};function Ds(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ms(e)}V.setRequestHeader=function(e,t){this.v.append(e,t)};V.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ms(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ho.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var J0=z.JSON.parse;function Tt(e){kt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Yd,this.L=this.M=!1}Nt(Tt,kt);var Yd="",Z0=/^https?$/i,tT=["POST","PUT"];V=Tt.prototype;V.Oa=function(e){this.M=e};V.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ua.g(),this.C=this.u?qu(this.u):qu(Ua),this.g.onreadystatechange=Gt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){Ku(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=z.FormData&&e instanceof z.FormData,!(0<=dd(tT,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Zd(this),0<this.B&&((this.L=eT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Gt(this.ua,this)):this.A=Ul(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Ku(this,i)}};function eT(e){return pr&&typeof e.timeout=="number"&&e.ontimeout!==void 0}V.ua=function(){typeof Vl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Bt(this,"timeout"),this.abort(8))};function Ku(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Xd(e),fo(e)}function Xd(e){e.F||(e.F=!0,Bt(e,"complete"),Bt(e,"error"))}V.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Bt(this,"complete"),Bt(this,"abort"),fo(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fo(this,!0)),Tt.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?Jd(this):this.kb())};V.kb=function(){Jd(this)};function Jd(e){if(e.h&&typeof Vl<"u"&&(!e.C[1]||De(e)!=4||e.da()!=2)){if(e.v&&De(e)==4)Ul(e.La,0,e);else if(Bt(e,"readystatechange"),De(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(Ud)[1]||null;!s&&z.self&&z.self.location&&(s=z.self.location.protocol.slice(0,-1)),r=!Z0.test(s?s.toLowerCase():"")}n=r}if(n)Bt(e,"complete"),Bt(e,"success");else{e.m=6;try{var i=2<De(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Xd(e)}}finally{fo(e)}}}}function fo(e,t){if(e.g){Zd(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Bt(e,"ready");try{n.onreadystatechange=r}catch{}}}function Zd(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(z.clearTimeout(e.A),e.A=null)}V.isActive=function(){return!!this.g};function De(e){return e.g?e.g.readyState:0}V.da=function(){try{return 2<De(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),J0(t)}};function Gu(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Yd:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function nT(e){const t={};e=(e.g&&2<=De(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(ls(e[r]))continue;var n=P0(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}E0(t,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function tp(e){let t="";return kl(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Kl(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=tp(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):pt(e,t,n))}function kr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ep(e){this.Ga=0,this.j=[],this.l=new io,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=kr("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=kr("baseRetryDelayMs",5e3,e),this.hb=kr("retryDelaySeedMs",1e4,e),this.eb=kr("forwardChannelMaxRetries",2,e),this.xa=kr("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Hd(e&&e.concurrentRequestLimit),this.Ja=new Q0,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=ep.prototype;V.ra=8;V.H=1;function Gl(e){if(np(e),e.H==3){var t=e.W++,n=Ge(e.I);if(pt(n,"SID",e.K),pt(n,"RID",t),pt(n,"TYPE","terminate"),xs(e,n),t=new Cs(e,e.l,t),t.L=2,t.A=uo(Ge(n)),n=!1,z.navigator&&z.navigator.sendBeacon)try{n=z.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&z.Image&&(new Image().src=t.A,n=!0),n||(t.g=up(t.l,null),t.g.ha(t.A)),t.G=Date.now(),bs(t)}lp(e)}function po(e){e.g&&(Ql(e),e.g.cancel(),e.g=null)}function np(e){po(e),e.u&&(z.clearTimeout(e.u),e.u=null),Ai(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&z.clearTimeout(e.m),e.m=null)}function mo(e){if(!zd(e.i)&&!e.m){e.m=!0;var t=e.Na;us||Ad(),hs||(us(),hs=!0),Fl.add(t,e),e.C=0}}function rT(e,t){return Kd(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Ss(Gt(e.Na,e,t),ap(e,e.C)),e.C++,!0)}V.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new Cs(this,this.l,e);let i=this.s;if(this.U&&(i?(i=_d(i),yd(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=rp(this,s,t),n=Ge(this.I),pt(n,"RID",e),pt(n,"CVER",22),this.F&&pt(n,"X-HTTP-Session-Id",this.F),xs(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(tp(i)))+"&"+t:this.o&&Kl(n,this.o,i)),Hl(this.i,s),this.bb&&pt(n,"TYPE","init"),this.P?(pt(n,"$req",t),pt(n,"SID","null"),s.aa=!0,ja(s,n,null)):ja(s,n,t),this.H=2}}else this.H==3&&(e?Wu(this,e):this.j.length==0||zd(this.i)||Wu(this))};function Wu(e,t){var n;t?n=t.m:n=e.W++;const r=Ge(e.I);pt(r,"SID",e.K),pt(r,"RID",n),pt(r,"AID",e.V),xs(e,r),e.o&&e.s&&Kl(r,e.o,e.s),n=new Cs(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=rp(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Hl(e.i,n),ja(n,r,t)}function xs(e,t){e.na&&kl(e.na,function(n,r){pt(t,r,n)}),e.h&&Bd({},function(n,r){pt(t,r,n)})}function rp(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Gt(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{Y0(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function sp(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;us||Ad(),hs||(us(),hs=!0),Fl.add(t,e),e.A=0}}function Wl(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Ss(Gt(e.Ma,e),ap(e,e.A)),e.A++,!0)}V.Ma=function(){if(this.u=null,ip(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Ss(Gt(this.jb,this),e)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Xt(10),po(this),ip(this))};function Ql(e){e.B!=null&&(z.clearTimeout(e.B),e.B=null)}function ip(e){e.g=new Cs(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Ge(e.wa);pt(t,"RID","rpc"),pt(t,"SID",e.K),pt(t,"AID",e.V),pt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&pt(t,"TO",e.qa),pt(t,"TYPE","xmlhttp"),xs(e,t),e.o&&e.s&&Kl(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=uo(Ge(t)),n.u=null,n.S=!0,Od(n,e)}V.ib=function(){this.v!=null&&(this.v=null,po(this),Wl(this),Xt(19))};function Ai(e){e.v!=null&&(z.clearTimeout(e.v),e.v=null)}function op(e,t){var n=null;if(e.g==t){Ai(e),Ql(e),e.g=null;var r=2}else if(Ha(e.i,t))n=t.F,Gd(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=oo(),Bt(r,new Vd(r,n)),mo(e)}else sp(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&rT(e,t)||r==2&&Wl(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Vn(e,5);break;case 4:Vn(e,10);break;case 3:Vn(e,6);break;default:Vn(e,2)}}}function ap(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Vn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Gt(e.pb,e);n||(n=new On("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||wi(n,"https"),uo(n)),X0(n.toString(),r)}else Xt(2);e.H=0,e.h&&e.h.za(t),lp(e),np(e)}V.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Xt(2)):(this.l.info("Failed to ping google.com"),Xt(1))};function lp(e){if(e.H=0,e.ma=[],e.h){const t=Wd(e.i);(t.length!=0||e.j.length!=0)&&(Fu(e.ma,t),Fu(e.ma,e.j),e.i.i.length=0,Dl(e.j),e.j.length=0),e.h.ya()}}function cp(e,t,n){var r=n instanceof On?Ge(n):new On(n);if(r.g!="")t&&(r.g=t+"."+r.g),Ii(r,r.m);else{var s=z.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new On(null);r&&wi(i,r),t&&(i.g=t),s&&Ii(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&pt(r,n,t),pt(r,"VER",e.ra),xs(e,r),r}function up(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new Tt(new Vs({ob:n})):new Tt(e.va),t.Oa(e.J),t}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function hp(){}V=hp.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function Ri(){if(pr&&!(10<=Number(m0)))throw Error("Environmental error: no available transport.")}Ri.prototype.g=function(e,t){return new le(e,t)};function le(e,t){kt.call(this),this.g=new ep(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ls(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ls(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ar(this)}Nt(le,kt);le.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Xt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=cp(e,null,e.Y),mo(e)};le.prototype.close=function(){Gl(this.g)};le.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ll(e),e=n);t.j.push(new K0(t.fb++,e)),t.H==3&&mo(t)};le.prototype.N=function(){this.g.h=null,delete this.j,Gl(this.g),delete this.g,le.$.N.call(this)};function fp(e){jl.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Nt(fp,jl);function dp(){ql.call(this),this.status=1}Nt(dp,ql);function Ar(e){this.g=e}Nt(Ar,hp);Ar.prototype.Ba=function(){Bt(this.g,"a")};Ar.prototype.Aa=function(e){Bt(this.g,new fp(e))};Ar.prototype.za=function(e){Bt(this.g,new dp)};Ar.prototype.ya=function(){Bt(this.g,"b")};function sT(){this.blockSize=-1}function we(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Nt(we,sT);we.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ea(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}we.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)ea(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){ea(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){ea(this,r),s=0;break}}this.h=s,this.i+=t};we.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function ct(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var iT={};function Yl(e){return-128<=e&&128>e?f0(e,function(t){return new ct([t|0],0>t?-1:0)}):new ct([e|0],0>e?-1:0)}function xe(e){if(isNaN(e)||!isFinite(e))return lr;if(0>e)return Lt(xe(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=za;return new ct(t,0)}function pp(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Lt(pp(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=xe(Math.pow(t,8)),r=lr,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=xe(Math.pow(t,i)),r=r.R(i).add(xe(o))):(r=r.R(n),r=r.add(xe(o)))}return r}var za=4294967296,lr=Yl(0),Ka=Yl(1),Qu=Yl(16777216);V=ct.prototype;V.ea=function(){if(ue(this))return-Lt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:za+r)*t,t*=za}return e};V.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(qe(this))return"0";if(ue(this))return"-"+Lt(this).toString(e);for(var t=xe(Math.pow(e,6)),n=this,r="";;){var s=Pi(n,t).g;n=Si(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,qe(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};V.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function qe(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ue(e){return e.h==-1}V.X=function(e){return e=Si(this,e),ue(e)?-1:qe(e)?0:1};function Lt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new ct(n,~e.h).add(Ka)}V.abs=function(){return ue(this)?Lt(this):this};V.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ct(n,n[n.length-1]&-2147483648?-1:0)};function Si(e,t){return e.add(Lt(t))}V.R=function(e){if(qe(this)||qe(e))return lr;if(ue(this))return ue(e)?Lt(this).R(Lt(e)):Lt(Lt(this).R(e));if(ue(e))return Lt(this.R(Lt(e)));if(0>this.X(Qu)&&0>e.X(Qu))return xe(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,l=e.D(s)&65535;n[2*r+2*s]+=o*l,Qs(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Qs(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Qs(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Qs(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new ct(n,0)};function Qs(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Nr(e,t){this.g=e,this.h=t}function Pi(e,t){if(qe(t))throw Error("division by zero");if(qe(e))return new Nr(lr,lr);if(ue(e))return t=Pi(Lt(e),t),new Nr(Lt(t.g),Lt(t.h));if(ue(t))return t=Pi(e,Lt(t)),new Nr(Lt(t.g),t.h);if(30<e.g.length){if(ue(e)||ue(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Ka,r=t;0>=r.X(e);)n=Yu(n),r=Yu(r);var s=Jn(n,1),i=Jn(r,1);for(r=Jn(r,2),n=Jn(n,2);!qe(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=Jn(r,1),n=Jn(n,1)}return t=Si(e,s.R(t)),new Nr(s,t)}for(s=lr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=xe(n),o=i.R(t);ue(o)||0<o.X(e);)n-=r,i=xe(n),o=i.R(t);qe(i)&&(i=Ka),s=s.add(i),e=Si(e,o)}return new Nr(s,e)}V.gb=function(e){return Pi(this,e).h};V.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new ct(n,this.h&e.h)};V.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new ct(n,this.h|e.h)};V.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new ct(n,this.h^e.h)};function Yu(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new ct(n,e.h)}function Jn(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new ct(s,e.h)}Ri.prototype.createWebChannel=Ri.prototype.g;le.prototype.send=le.prototype.u;le.prototype.open=le.prototype.m;le.prototype.close=le.prototype.close;ao.NO_ERROR=0;ao.TIMEOUT=8;ao.HTTP_ERROR=6;Dd.COMPLETE="complete";xd.EventType=Ps;Ps.OPEN="a";Ps.CLOSE="b";Ps.ERROR="c";Ps.MESSAGE="d";kt.prototype.listen=kt.prototype.O;Tt.prototype.listenOnce=Tt.prototype.P;Tt.prototype.getLastError=Tt.prototype.Sa;Tt.prototype.getLastErrorCode=Tt.prototype.Ia;Tt.prototype.getStatus=Tt.prototype.da;Tt.prototype.getResponseJson=Tt.prototype.Wa;Tt.prototype.getResponseText=Tt.prototype.ja;Tt.prototype.send=Tt.prototype.ha;Tt.prototype.setWithCredentials=Tt.prototype.Oa;we.prototype.digest=we.prototype.l;we.prototype.reset=we.prototype.reset;we.prototype.update=we.prototype.j;ct.prototype.add=ct.prototype.add;ct.prototype.multiply=ct.prototype.R;ct.prototype.modulo=ct.prototype.gb;ct.prototype.compare=ct.prototype.X;ct.prototype.toNumber=ct.prototype.ea;ct.prototype.toString=ct.prototype.toString;ct.prototype.getBits=ct.prototype.D;ct.fromNumber=xe;ct.fromString=pp;var oT=function(){return new Ri},aT=function(){return oo()},na=ao,lT=Dd,cT=zn,Xu={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},uT=Vs,Ys=xd,hT=Tt,fT=we,cr=ct;const Ju="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}qt.UNAUTHENTICATED=new qt(null),qt.GOOGLE_CREDENTIALS=new qt("google-credentials-uid"),qt.FIRST_PARTY=new qt("first-party-uid"),qt.MOCK_USER=new qt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rr="10.11.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Cl("@firebase/firestore");function Or(){return Bn.logLevel}function M(e,...t){if(Bn.logLevel<=nt.DEBUG){const n=t.map(Xl);Bn.debug(`Firestore (${Rr}): ${e}`,...n)}}function We(e,...t){if(Bn.logLevel<=nt.ERROR){const n=t.map(Xl);Bn.error(`Firestore (${Rr}): ${e}`,...n)}}function mr(e,...t){if(Bn.logLevel<=nt.WARN){const n=t.map(Xl);Bn.warn(`Firestore (${Rr}): ${e}`,...n)}}function Xl(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e="Unexpected state"){const t=`FIRESTORE (${Rr}) INTERNAL ASSERTION FAILED: `+e;throw We(t),new Error(t)}function ft(e,t){e||H()}function Q(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends vn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class dT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(qt.UNAUTHENTICATED))}shutdown(){}}class pT{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mT{constructor(t){this.t=t,this.currentUser=qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new hn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new hn,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new hn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ft(typeof r.accessToken=="string"),new mp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ft(t===null||typeof t=="string"),new qt(t)}}class gT{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=qt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _T{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new gT(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(qt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yT{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ET{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ft(typeof n.token=="string"),this.R=n.token,new yT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=vT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function rt(e,t){return e<t?-1:e>t?1:0}function gr(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new U(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new U(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new U(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Pt.fromMillis(Date.now())}static fromDate(t){return Pt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Pt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?rt(this.nanoseconds,t.nanoseconds):rt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.timestamp=t}static fromTimestamp(t){return new W(t)}static min(){return new W(new Pt(0,0))}static max(){return new W(new Pt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t,n,r){n===void 0?n=0:n>t.length&&H(),r===void 0?r=t.length-n:r>t.length-n&&H(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return gs.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof gs?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class _t extends gs{construct(t,n,r){return new _t(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new U(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new _t(n)}static emptyPath(){return new _t([])}}const TT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends gs{construct(t,n,r){return new Ft(t,n,r)}static isValidIdentifier(t){return TT.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ft(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(w.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new U(w.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(w.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ft(n)}static emptyPath(){return new Ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.path=t}static fromPath(t){return new $(_t.fromString(t))}static fromName(t){return new $(_t.fromString(t).popFirst(5))}static empty(){return new $(_t.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&_t.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return _t.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new $(new _t(t.slice()))}}function wT(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new Pt(n+1,0):new Pt(n,r));return new mn(s,$.empty(),t)}function IT(e){return new mn(e.readTime,e.key,-1)}class mn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new mn(W.min(),$.empty(),-1)}static max(){return new mn(W.max(),$.empty(),-1)}}function AT(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=$.comparator(e.documentKey,t.documentKey),n!==0?n:rt(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ST{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(e){if(e.code!==w.FAILED_PRECONDITION||e.message!==RT)throw e;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new T((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):T.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):T.reject(n)}static resolve(t){return new T((n,r)=>{n(t)})}static reject(t){return new T((n,r)=>{r(t)})}static waitFor(t){return new T((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(t){let n=T.resolve(!1);for(const r of t)n=n.next(s=>s?T.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new T((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(t[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(t,n){return new T((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function PT(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ns(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Jl.oe=-1;function go(e){return e==null}function Ci(e){return e===0&&1/e==-1/0}function CT(e){return typeof e=="number"&&Number.isInteger(e)&&!Ci(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Sr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function _p(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,n){this.comparator=t,this.root=n||Mt.EMPTY}insert(t,n){return new vt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Mt.BLACK,null,null))}remove(t){return new vt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Mt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xs(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xs(this.root,t,this.comparator,!0)}}class Xs{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Mt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Mt.RED,this.left=s??Mt.EMPTY,this.right=i??Mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Mt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Mt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Mt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const t=this.left.check();if(t!==this.right.check())throw H();return t+(this.isRed()?0:1)}}Mt.EMPTY=null,Mt.RED=!0,Mt.BLACK=!1;Mt.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Mt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this.comparator=t,this.data=new vt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new th(this.data.getIterator())}getIteratorFrom(t){return new th(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Ut)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Ut(this.comparator);return n.data=t,n}}class th{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t){this.fields=t,t.sort(Ft.comparator)}static empty(){return new ye([])}unionWith(t){let n=new Ut(Ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ye(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return gr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new yp("Invalid base64 string: "+i):i}}(t);return new Qt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Qt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return rt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const bT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gn(e){if(ft(!!e),typeof e=="string"){let t=0;const n=bT.exec(e);if(ft(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Rt(e.seconds),nanos:Rt(e.nanos)}}function Rt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Un(e){return typeof e=="string"?Qt.fromBase64String(e):Qt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function tc(e){const t=e.mapValue.fields.__previous_value__;return Zl(t)?tc(t):t}function _s(e){const t=gn(e.mapValue.fields.__local_write_time__.timestampValue);return new Pt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(t,n,r,s,i,o,a,l,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ys{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ys("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ys&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $n(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Zl(e)?4:DT(e)?9007199254740991:10:H()}function Fe(e,t){if(e===t)return!0;const n=$n(e);if(n!==$n(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return _s(e).isEqual(_s(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=gn(s.timestampValue),a=gn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Un(s.bytesValue).isEqual(Un(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return Rt(s.geoPointValue.latitude)===Rt(i.geoPointValue.latitude)&&Rt(s.geoPointValue.longitude)===Rt(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Rt(s.integerValue)===Rt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Rt(s.doubleValue),a=Rt(i.doubleValue);return o===a?Ci(o)===Ci(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return gr(e.arrayValue.values||[],t.arrayValue.values||[],Fe);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Zu(o)!==Zu(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Fe(o[l],a[l])))return!1;return!0}(e,t);default:return H()}}function Es(e,t){return(e.values||[]).find(n=>Fe(n,t))!==void 0}function _r(e,t){if(e===t)return 0;const n=$n(e),r=$n(t);if(n!==r)return rt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return rt(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=Rt(i.integerValue||i.doubleValue),l=Rt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return eh(e.timestampValue,t.timestampValue);case 4:return eh(_s(e),_s(t));case 5:return rt(e.stringValue,t.stringValue);case 6:return function(i,o){const a=Un(i),l=Un(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=rt(a[c],l[c]);if(u!==0)return u}return rt(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=rt(Rt(i.latitude),Rt(o.latitude));return a!==0?a:rt(Rt(i.longitude),Rt(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=_r(a[c],l[c]);if(u)return u}return rt(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===Js.mapValue&&o===Js.mapValue)return 0;if(i===Js.mapValue)return 1;if(o===Js.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=rt(l[h],u[h]);if(f!==0)return f;const m=_r(a[l[h]],c[u[h]]);if(m!==0)return m}return rt(l.length,u.length)}(e.mapValue,t.mapValue);default:throw H()}}function eh(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return rt(e,t);const n=gn(e),r=gn(t),s=rt(n.seconds,r.seconds);return s!==0?s:rt(n.nanos,r.nanos)}function yr(e){return Ga(e)}function Ga(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=gn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Un(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return $.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ga(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ga(n.fields[o])}`;return s+"}"}(e.mapValue):H()}function Wa(e){return!!e&&"integerValue"in e}function ec(e){return!!e&&"arrayValue"in e}function nh(e){return!!e&&"nullValue"in e}function rh(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function hi(e){return!!e&&"mapValue"in e}function Qr(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Sr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Qr(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Qr(e.arrayValue.values[n]);return t}return Object.assign({},e)}function DT(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this.value=t}static empty(){return new he({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!hi(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Qr(n)}setAll(t){let n=Ft.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Qr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());hi(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Fe(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];hi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Sr(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new he(Qr(this.value))}}function Ep(e){const t=[];return Sr(e.fields,(n,r)=>{const s=new Ft([n]);if(hi(r)){const i=Ep(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new ye(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Ht(t,0,W.min(),W.min(),W.min(),he.empty(),0)}static newFoundDocument(t,n,r,s){return new Ht(t,1,n,W.min(),r,s,0)}static newNoDocument(t,n){return new Ht(t,2,n,W.min(),W.min(),he.empty(),0)}static newUnknownDocument(t,n){return new Ht(t,3,n,W.min(),W.min(),he.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=he.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=he.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ht&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t,n){this.position=t,this.inclusive=n}}function sh(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=_r(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ih(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Fe(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t,n="asc"){this.field=t,this.dir=n}}function xT(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{}class St extends vp{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new NT(t,n,r):n==="array-contains"?new LT(t,r):n==="in"?new FT(t,r):n==="not-in"?new BT(t,r):n==="array-contains-any"?new UT(t,r):new St(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new OT(t,r):new MT(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_r(n,this.value)):n!==null&&$n(this.value)===$n(n)&&this.matchesComparison(_r(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Be extends vp{constructor(t,n){super(),this.filters=t,this.op=n,this.ae=null}static create(t,n){return new Be(t,n)}matches(t){return Tp(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Tp(e){return e.op==="and"}function wp(e){return kT(e)&&Tp(e)}function kT(e){for(const t of e.filters)if(t instanceof Be)return!1;return!0}function Qa(e){if(e instanceof St)return e.field.canonicalString()+e.op.toString()+yr(e.value);if(wp(e))return e.filters.map(t=>Qa(t)).join(",");{const t=e.filters.map(n=>Qa(n)).join(",");return`${e.op}(${t})`}}function Ip(e,t){return e instanceof St?function(r,s){return s instanceof St&&r.op===s.op&&r.field.isEqual(s.field)&&Fe(r.value,s.value)}(e,t):e instanceof Be?function(r,s){return s instanceof Be&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Ip(o,s.filters[a]),!0):!1}(e,t):void H()}function Ap(e){return e instanceof St?function(n){return`${n.field.canonicalString()} ${n.op} ${yr(n.value)}`}(e):e instanceof Be?function(n){return n.op.toString()+" {"+n.getFilters().map(Ap).join(" ,")+"}"}(e):"Filter"}class NT extends St{constructor(t,n,r){super(t,n,r),this.key=$.fromName(r.referenceValue)}matches(t){const n=$.comparator(t.key,this.key);return this.matchesComparison(n)}}class OT extends St{constructor(t,n){super(t,"in",n),this.keys=Rp("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class MT extends St{constructor(t,n){super(t,"not-in",n),this.keys=Rp("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Rp(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class LT extends St{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ec(n)&&Es(n.arrayValue,this.value)}}class FT extends St{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Es(this.value.arrayValue,n)}}class BT extends St{constructor(t,n){super(t,"not-in",n)}matches(t){if(Es(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Es(this.value.arrayValue,n)}}class UT extends St{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ec(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Es(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function oh(e,t=null,n=[],r=[],s=null,i=null,o=null){return new $T(e,t,n,r,s,i,o)}function nc(e){const t=Q(e);if(t.ue===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Qa(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),go(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>yr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>yr(r)).join(",")),t.ue=n}return t.ue}function rc(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!xT(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ip(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ih(e.startAt,t.startAt)&&ih(e.endAt,t.endAt)}function Ya(e){return $.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function jT(e,t,n,r,s,i,o,a){return new _o(e,t,n,r,s,i,o,a)}function Sp(e){return new _o(e)}function ah(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function qT(e){return e.collectionGroup!==null}function Yr(e){const t=Q(e);if(t.ce===null){t.ce=[];const n=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ut(Ft.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.ce.push(new Vi(i,r))}),n.has(Ft.keyField().canonicalString())||t.ce.push(new Vi(Ft.keyField(),r))}return t.ce}function Ne(e){const t=Q(e);return t.le||(t.le=HT(t,Yr(e))),t.le}function HT(e,t){if(e.limitType==="F")return oh(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Vi(s.field,i)});const n=e.endAt?new bi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new bi(e.startAt.position,e.startAt.inclusive):null;return oh(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Xa(e,t,n){return new _o(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function yo(e,t){return rc(Ne(e),Ne(t))&&e.limitType===t.limitType}function Pp(e){return`${nc(Ne(e))}|lt:${e.limitType}`}function tr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Ap(s)).join(", ")}]`),go(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>yr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>yr(s)).join(",")),`Target(${r})`}(Ne(e))}; limitType=${e.limitType})`}function Eo(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):$.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Yr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=sh(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Yr(r),s)||r.endAt&&!function(o,a,l){const c=sh(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Yr(r),s))}(e,t)}function zT(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Cp(e){return(t,n)=>{let r=!1;for(const s of Yr(e)){const i=KT(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function KT(e,t,n){const r=e.field.isKeyField()?$.comparator(t.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?_r(l,c):H()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Sr(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return _p(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=new vt($.comparator);function Qe(){return GT}const bp=new vt($.comparator);function Br(...e){let t=bp;for(const n of e)t=t.insert(n.key,n);return t}function Vp(e){let t=bp;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Dn(){return Xr()}function Dp(){return Xr()}function Xr(){return new Pr(e=>e.toString(),(e,t)=>e.isEqual(t))}const WT=new vt($.comparator),QT=new Ut($.comparator);function Z(...e){let t=QT;for(const n of e)t=t.add(n);return t}const YT=new Ut(rt);function XT(){return YT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ci(t)?"-0":t}}function kp(e){return{integerValue:""+e}}function JT(e,t){return CT(t)?kp(t):xp(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this._=void 0}}function ZT(e,t,n){return e instanceof Di?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Zl(i)&&(i=tc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof vs?Op(e,t):e instanceof Ts?Mp(e,t):function(s,i){const o=Np(s,i),a=lh(o)+lh(s.Pe);return Wa(o)&&Wa(s.Pe)?kp(a):xp(s.serializer,a)}(e,t)}function tw(e,t,n){return e instanceof vs?Op(e,t):e instanceof Ts?Mp(e,t):n}function Np(e,t){return e instanceof xi?function(r){return Wa(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Di extends vo{}class vs extends vo{constructor(t){super(),this.elements=t}}function Op(e,t){const n=Lp(t);for(const r of e.elements)n.some(s=>Fe(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ts extends vo{constructor(t){super(),this.elements=t}}function Mp(e,t){let n=Lp(t);for(const r of e.elements)n=n.filter(s=>!Fe(s,r));return{arrayValue:{values:n}}}class xi extends vo{constructor(t,n){super(),this.serializer=t,this.Pe=n}}function lh(e){return Rt(e.integerValue||e.doubleValue)}function Lp(e){return ec(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function ew(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof vs&&s instanceof vs||r instanceof Ts&&s instanceof Ts?gr(r.elements,s.elements,Fe):r instanceof xi&&s instanceof xi?Fe(r.Pe,s.Pe):r instanceof Di&&s instanceof Di}(e.transform,t.transform)}class nw{constructor(t,n){this.version=t,this.transformResults=n}}class Oe{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Oe}static exists(t){return new Oe(void 0,t)}static updateTime(t){return new Oe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fi(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class To{}function Fp(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new sc(e.key,Oe.none()):new Os(e.key,e.data,Oe.none());{const n=e.data,r=he.empty();let s=new Ut(Ft.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Kn(e.key,r,new ye(s.toArray()),Oe.none())}}function rw(e,t,n){e instanceof Os?function(s,i,o){const a=s.value.clone(),l=uh(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Kn?function(s,i,o){if(!fi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=uh(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Bp(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Jr(e,t,n,r){return e instanceof Os?function(i,o,a,l){if(!fi(i.precondition,o))return a;const c=i.value.clone(),u=hh(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof Kn?function(i,o,a,l){if(!fi(i.precondition,o))return a;const c=hh(i.fieldTransforms,l,o),u=o.data;return u.setAll(Bp(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return fi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function sw(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Np(r.transform,s||null);i!=null&&(n===null&&(n=he.empty()),n.set(r.field,i))}return n||null}function ch(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&gr(r,s,(i,o)=>ew(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Os extends To{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Kn extends To{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Bp(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function uh(e,t,n){const r=new Map;ft(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,tw(o,a,n[s]))}return r}function hh(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ZT(i,o,t))}return r}class sc extends To{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iw extends To{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&rw(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Jr(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Jr(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Dp();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=Fp(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Z())}isEqual(t){return this.batchId===t.batchId&&gr(this.mutations,t.mutations,(n,r)=>ch(n,r))&&gr(this.baseMutations,t.baseMutations,(n,r)=>ch(n,r))}}class ic{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){ft(t.mutations.length===r.length);let s=function(){return WT}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ic(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At,tt;function cw(e){switch(e){default:return H();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Up(e){if(e===void 0)return We("GRPC error has no .code"),w.UNKNOWN;switch(e){case At.OK:return w.OK;case At.CANCELLED:return w.CANCELLED;case At.UNKNOWN:return w.UNKNOWN;case At.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case At.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case At.INTERNAL:return w.INTERNAL;case At.UNAVAILABLE:return w.UNAVAILABLE;case At.UNAUTHENTICATED:return w.UNAUTHENTICATED;case At.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case At.NOT_FOUND:return w.NOT_FOUND;case At.ALREADY_EXISTS:return w.ALREADY_EXISTS;case At.PERMISSION_DENIED:return w.PERMISSION_DENIED;case At.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case At.ABORTED:return w.ABORTED;case At.OUT_OF_RANGE:return w.OUT_OF_RANGE;case At.UNIMPLEMENTED:return w.UNIMPLEMENTED;case At.DATA_LOSS:return w.DATA_LOSS;default:return H()}}(tt=At||(At={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=new cr([4294967295,4294967295],0);function fh(e){const t=uw().encode(e),n=new fT;return n.update(t),new Uint8Array(n.digest())}function dh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new cr([n,r],0),new cr([s,i],0)]}class oc{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ur(`Invalid padding: ${n}`);if(r<0)throw new Ur(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ur(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Ur(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*t.length-n,this.Te=cr.fromNumber(this.Ie)}Ee(t,n,r){let s=t.add(n.multiply(cr.fromNumber(r)));return s.compare(hw)===1&&(s=new cr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const n=fh(t),[r,s]=dh(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new oc(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const n=fh(t),[r,s]=dh(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Ur extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Ms.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new wo(W.min(),s,new vt(rt),Qe(),Z())}}class Ms{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Ms(r,n,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,n,r,s){this.Re=t,this.removedTargetIds=n,this.key=r,this.Ve=s}}class $p{constructor(t,n){this.targetId=t,this.me=n}}class jp{constructor(t,n,r=Qt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ph{constructor(){this.fe=0,this.ge=gh(),this.pe=Qt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=Z(),n=Z(),r=Z();return this.ge.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:H()}}),new Ms(this.pe,this.ye,t,n,r)}ve(){this.we=!1,this.ge=gh()}Fe(t,n){this.we=!0,this.ge=this.ge.insert(t,n)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,ft(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class fw{constructor(t){this.Le=t,this.Be=new Map,this.ke=Qe(),this.qe=mh(),this.Qe=new vt(rt)}Ke(t){for(const n of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(n,t.Ve):this.Ue(n,t.key,t.Ve);for(const n of t.removedTargetIds)this.Ue(n,t.key,t.Ve)}We(t){this.forEachTarget(t,n=>{const r=this.Ge(n);switch(t.state){case 0:this.ze(n)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(t.resumeToken));break;default:H()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(t){const n=t.targetId,r=t.me.count,s=this.Je(n);if(s){const i=s.target;if(Ya(i))if(r===0){const o=new $(i.path);this.Ue(n,o,Ht.newNoDocument(o,W.min()))}else ft(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(t),l=a?this.Xe(a,t,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(t){const n=t.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Un(r).toUint8Array()}catch(l){if(l instanceof yp)return mr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new oc(o,s,i)}catch(l){return mr(l instanceof Ur?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(t,n,r){return n.me.count===r-this.nt(t,n.targetId)?0:2}nt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(t){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&Ya(a.target)){const l=new $(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Ht.newNoDocument(l,t))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=Z();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(t));const s=new wo(t,n,this.Qe,this.ke,r);return this.ke=Qe(),this.qe=mh(),this.Qe=new vt(rt),s}$e(t,n){if(!this.ze(t))return;const r=this.it(t,n.key)?2:0;this.Ge(t).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(t))}Ue(t,n,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(t)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const n=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let n=this.Be.get(t);return n||(n=new ph,this.Be.set(t,n)),n}st(t){let n=this.qe.get(t);return n||(n=new Ut(rt),this.qe=this.qe.insert(t,n)),n}ze(t){const n=this.Je(t)!==null;return n||M("WatchChangeAggregator","Detected inactive target",t),n}Je(t){const n=this.Be.get(t);return n&&n.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new ph),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.Ue(t,n,null)})}it(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function mh(){return new vt($.comparator)}function gh(){return new vt($.comparator)}const dw={asc:"ASCENDING",desc:"DESCENDING"},pw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mw={and:"AND",or:"OR"};class gw{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ja(e,t){return e.useProto3Json||go(t)?t:{value:t}}function ki(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function qp(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function _w(e,t){return ki(e,t.toTimestamp())}function Me(e){return ft(!!e),W.fromTimestamp(function(n){const r=gn(n);return new Pt(r.seconds,r.nanos)}(e))}function ac(e,t){return Za(e,t).canonicalString()}function Za(e,t){const n=function(s){return new _t(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Hp(e){const t=_t.fromString(e);return ft(Qp(t)),t}function tl(e,t){return ac(e.databaseId,t.path)}function ra(e,t){const n=Hp(t);if(n.get(1)!==e.databaseId.projectId)throw new U(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new U(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new $(Kp(n))}function zp(e,t){return ac(e.databaseId,t)}function yw(e){const t=Hp(e);return t.length===4?_t.emptyPath():Kp(t)}function el(e){return new _t(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Kp(e){return ft(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function _h(e,t,n){return{name:tl(e,t),fields:n.value.mapValue.fields}}function Ew(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(ft(u===void 0||typeof u=="string"),Qt.fromBase64String(u||"")):(ft(u===void 0||u instanceof Buffer||u instanceof Uint8Array),Qt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?w.UNKNOWN:Up(c.code);return new U(u,c.message||"")}(o);n=new jp(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ra(e,r.document.name),i=Me(r.document.updateTime),o=r.document.createTime?Me(r.document.createTime):W.min(),a=new he({mapValue:{fields:r.document.fields}}),l=Ht.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new di(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ra(e,r.document),i=r.readTime?Me(r.readTime):W.min(),o=Ht.newNoDocument(s,i),a=r.removedTargetIds||[];n=new di([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ra(e,r.document),i=r.removedTargetIds||[];n=new di([],i,s,null)}else{if(!("filter"in t))return H();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new lw(s,i),a=r.targetId;n=new $p(a,o)}}return n}function vw(e,t){let n;if(t instanceof Os)n={update:_h(e,t.key,t.value)};else if(t instanceof sc)n={delete:tl(e,t.key)};else if(t instanceof Kn)n={update:_h(e,t.key,t.data),updateMask:bw(t.fieldMask)};else{if(!(t instanceof iw))return H();n={verify:tl(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Di)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof vs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ts)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xi)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw H()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_w(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H()}(e,t.precondition)),n}function Tw(e,t){return e&&e.length>0?(ft(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?Me(s.updateTime):Me(i);return o.isEqual(W.min())&&(o=Me(i)),new nw(o,s.transformResults||[])}(n,t))):[]}function ww(e,t){return{documents:[zp(e,t.path)]}}function Iw(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=zp(e,s);const i=function(c){if(c.length!==0)return Wp(Be.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(u=>function(f){return{field:er(f.field),direction:Sw(f.dir)}}(u))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ja(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{_t:n,parent:s}}function Aw(e){let t=yw(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ft(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=Gp(h);return f instanceof Be&&wp(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(E){return new Vi(nr(E.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,go(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,m=h.values||[];return new bi(m,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,m=h.values||[];return new bi(m,f)}(n.endAt)),jT(t,s,o,i,a,"F",l,c)}function Rw(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Gp(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=nr(n.unaryFilter.field);return St.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=nr(n.unaryFilter.field);return St.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=nr(n.unaryFilter.field);return St.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=nr(n.unaryFilter.field);return St.create(o,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(e):e.fieldFilter!==void 0?function(n){return St.create(nr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Be.create(n.compositeFilter.filters.map(r=>Gp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return H()}}(n.compositeFilter.op))}(e):H()}function Sw(e){return dw[e]}function Pw(e){return pw[e]}function Cw(e){return mw[e]}function er(e){return{fieldPath:e.canonicalString()}}function nr(e){return Ft.fromServerFormat(e.fieldPath)}function Wp(e){return e instanceof St?function(n){if(n.op==="=="){if(rh(n.value))return{unaryFilter:{field:er(n.field),op:"IS_NAN"}};if(nh(n.value))return{unaryFilter:{field:er(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(rh(n.value))return{unaryFilter:{field:er(n.field),op:"IS_NOT_NAN"}};if(nh(n.value))return{unaryFilter:{field:er(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:er(n.field),op:Pw(n.op),value:n.value}}}(e):e instanceof Be?function(n){const r=n.getFilters().map(s=>Wp(s));return r.length===1?r[0]:{compositeFilter:{op:Cw(n.op),filters:r}}}(e):H()}function bw(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Qp(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,n,r,s,i=W.min(),o=W.min(),a=Qt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new on(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(t){this.ut=t}}function Dw(e){const t=Aw({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Xa(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(){this.on=new kw}addToCollectionParentIndex(t,n){return this.on.add(n),T.resolve()}getCollectionParents(t,n){return T.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return T.resolve()}deleteFieldIndex(t,n){return T.resolve()}deleteAllFieldIndexes(t){return T.resolve()}createTargetIndexes(t,n){return T.resolve()}getDocumentsMatchingTarget(t,n){return T.resolve(null)}getIndexType(t,n){return T.resolve(0)}getFieldIndexes(t,n){return T.resolve([])}getNextCollectionGroupToUpdate(t){return T.resolve(null)}getMinOffset(t,n){return T.resolve(mn.min())}getMinOffsetFromCollectionGroup(t,n){return T.resolve(mn.min())}updateCollectionGroup(t,n,r){return T.resolve()}updateIndexEntries(t,n){return T.resolve()}}class kw{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Ut(_t.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Ut(_t.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new Er(0)}static Nn(){return new Er(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(){this.changes=new Pr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Ht.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Jr(r.mutation,s,ye.empty(),Pt.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Z()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Z()){const s=Dn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=Br();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Dn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Z()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=Qe();const o=Xr(),a=function(){return Xr()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Kn)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Jr(u.mutation,c,u.mutation.getFieldMask(),Pt.now())):o.set(c.key,ye.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new Ow(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Xr();let s=new vt((o,a)=>o-a),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||ye.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||Z()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Dp();u.forEach(f=>{if(!i.has(f)){const m=Fp(n.get(f),r.get(f));m!==null&&h.set(f,m),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return $.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):qT(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):T.resolve(Dn());let a=-1,l=i;return o.next(c=>T.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?T.resolve():this.remoteDocumentCache.getEntry(t,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,l,c,Z())).next(u=>({batchId:a,changes:Vp(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new $(n)).next(r=>{let s=Br();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=Br();return this.indexManager.getCollectionParents(t,i).next(a=>T.forEach(a,l=>{const c=function(h,f){return new _o(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,Ht.newInvalidDocument(u)))});let a=Br();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&Jr(u.mutation,c,ye.empty(),Pt.now()),Eo(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return T.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Me(s.createTime)}}(n)),T.resolve()}getNamedQuery(t,n){return T.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(s){return{name:s.name,query:Dw(s.bundledQuery),readTime:Me(s.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(){this.overlays=new vt($.comparator),this.lr=new Map}getOverlay(t,n){return T.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Dn();return T.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.lt(t,n,i)}),T.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),T.resolve()}getOverlaysForCollection(t,n,r){const s=Dn(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return T.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new vt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Dn(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Dn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return T.resolve(a)}lt(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new aw(n,r));let i=this.lr.get(n);i===void 0&&(i=Z(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this.hr=new Ut(Dt.Pr),this.Ir=new Ut(Dt.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new Dt(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new Dt(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new $(new _t([])),r=new Dt(n,t),s=new Dt(n,t+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new $(new _t([])),r=new Dt(n,t),s=new Dt(n,t+1);let i=Z();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new Dt(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Dt{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return $.comparator(t.key,n.key)||rt(t.gr,n.gr)}static Tr(t,n){return rt(t.gr,n.gr)||$.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Ut(Dt.Pr)}checkEmpty(t){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ow(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Dt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(t,n){return T.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Dt(n,0),s=new Dt(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Ut(rt);return n.forEach(s=>{const i=new Dt(s,0),o=new Dt(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),T.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;$.isDocumentKey(i)||(i=i.child(""));const o=new Dt(new $(i),0);let a=new Ut(rt);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.gr)),!0)},o),T.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){ft(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return T.forEach(n.mutations,s=>{const i=new Dt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new Dt(n,0),s=this.yr.firstAfterOrEqual(r);return T.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,T.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(t){this.Cr=t,this.docs=function(){return new vt($.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():Ht.newInvalidDocument(n))}getEntries(t,n){let r=Qe();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ht.newInvalidDocument(s))}),T.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Qe();const o=n.path,a=new $(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||AT(IT(u),r)<=0||(s.has(u.key)||Eo(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(t,n,r,s){H()}vr(t,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new $w(this)}getSize(t){return T.resolve(this.size)}}class $w extends Nw{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(t,s)):this._r.removeEntry(r)}),T.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(t){this.persistence=t,this.Fr=new Pr(n=>nc(n),rc),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Mr=0,this.Or=new lc,this.targetCount=0,this.Nr=Er.On()}forEachTarget(t,n){return this.Fr.forEach((r,s)=>n(s)),T.resolve()}getLastRemoteSnapshotVersion(t){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return T.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),T.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new Er(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,T.resolve()}updateTargetData(t,n){return this.kn(n),T.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),T.waitFor(i).next(()=>s)}getTargetCount(t){return T.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return T.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),T.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),T.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return T.resolve(r)}containsKey(t,n){return T.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(t,n){this.Lr={},this.overlays={},this.Br=new Jl(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new jw(this),this.indexManager=new xw,this.remoteDocumentCache=function(s){return new Uw(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Vw(n),this.Kr=new Lw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Fw,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new Bw(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){M("MemoryPersistence","Starting transaction:",t);const s=new Hw(this.Br.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(t,n){return T.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class Hw extends ST{constructor(t){super(),this.currentSequenceNumber=t}}class cc{constructor(t){this.persistence=t,this.Gr=new lc,this.zr=null}static jr(t){return new cc(t)}get Hr(){if(this.zr)return this.zr;throw H()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),T.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),T.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),T.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Hr,r=>{const s=$.fromPath(r);return this.Jr(t,s).next(i=>{i||n.removeEntry(s,W.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return T.or([()=>T.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=s}static Qi(t,n){let r=Z(),s=Z();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new uc(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return zE()?8:PT(jE())>0?6:4}()}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.zi(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new zw;return this.Hi(t,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(t,n,o,a.size)})}).next(()=>i.result)}Ji(t,n,r,s){return r.documentReadCount<this.Ui?(Or()<=nt.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",tr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),T.resolve()):(Or()<=nt.DEBUG&&M("QueryEngine","Query:",tr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Or()<=nt.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",tr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ne(n))):T.resolve())}zi(t,n){if(ah(n))return T.resolve(null);let r=Ne(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Xa(n,null,"F"),r=Ne(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=Z(...i);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(t,Xa(n,null,"F")):this.Xi(t,c,n,l)}))})))}ji(t,n,r,s){return ah(n)||s.isEqual(W.min())?T.resolve(null):this.Gi.getDocuments(t,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?T.resolve(null):(Or()<=nt.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),tr(n)),this.Xi(t,o,n,wT(s,-1)).next(a=>a))})}Yi(t,n){let r=new Ut(Cp(t));return n.forEach((s,i)=>{Eo(t,i)&&(r=r.add(i))}),r}Zi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(t,n,r){return Or()<=nt.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",tr(n)),this.Gi.getDocumentsMatchingQuery(t,n,mn.min(),r)}Xi(t,n,r,s){return this.Gi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(t,n,r,s){this.persistence=t,this.es=n,this.serializer=s,this.ts=new vt(rt),this.ns=new Pr(i=>nc(i),rc),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Mw(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function Ww(e,t,n,r){return new Gw(e,t,n,r)}async function Yp(e,t){const n=Q(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=Z();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function Qw(e,t){const n=Q(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,f=h.keys();let m=T.resolve();return f.forEach(E=>{m=m.next(()=>u.getEntry(l,E)).next(R=>{const S=c.docVersions.get(E);ft(S!==null),R.version.compareTo(S)<0&&(h.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),u.addEntry(R)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Z();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Xp(e){const t=Q(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function Yw(e,t){const n=Q(e),r=t.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];t.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let m=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(Qt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),s=s.insert(h,m),function(R,S,I){return R.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(f,m,u)&&a.push(n.qr.updateTargetData(i,m))});let l=Qe(),c=Z();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Xw(i,o,t.documentUpdates).next(u=>{l=u.us,c=u.cs})),!r.isEqual(W.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ts=s,i))}function Xw(e,t,n){let r=Z(),s=Z();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=Qe();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:s}})}function Jw(e,t){const n=Q(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Zw(e,t){const n=Q(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,t).next(i=>i?(s=i,T.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new on(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(t,r.targetId)),r})}async function nl(e,t,n){const r=Q(e),s=r.ts.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ns(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(s.target)}function yh(e,t,n){const r=Q(e);let s=W.min(),i=Z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=Q(l),f=h.ns.get(u);return f!==void 0?T.resolve(h.ts.get(f)):h.qr.getTargetData(c,u)}(r,o,Ne(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,n?s:W.min(),n?i:Z())).next(a=>(tI(r,zT(t),a),{documents:a,ls:i})))}function tI(e,t,n){let r=e.rs.get(t)||W.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.rs.set(t,r)}class Eh{constructor(){this.activeTargetIds=XT()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class eI{constructor(){this.eo=new Eh,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new Eh,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs=null;function sa(){return Zs===null?Zs=function(){return 268435456+Math.round(2147483648*Math.random())}():Zs++,"0x"+Zs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}Eo(t){this.Ao=t}onMessage(t){this.Ro=t}close(){this.lo()}send(t){this.co(t)}Vo(){this.Po()}mo(){this.To()}fo(t){this.Ao(t)}po(t){this.Ro(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="WebChannelConnection";class iI extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.yo=r+"://"+n.host,this.wo=`projects/${s}/databases/${i}`,this.So=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get bo(){return!1}Do(n,r,s,i,o){const a=sa(),l=this.Co(n,r.toUriEncodedString());M("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(c,i,o),this.Fo(n,l,c,s).then(u=>(M("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw mr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}Mo(n,r,s,i,o,a){return this.Do(n,r,s,i,o)}vo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Rr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Co(n,r){const s=rI[n];return`${this.yo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Fo(t,n,r,s){const i=sa();return new Promise((o,a)=>{const l=new hT;l.setWithCredentials(!0),l.listenOnce(lT.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case na.NO_ERROR:const u=l.getResponseJson();M(jt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case na.TIMEOUT:M(jt,`RPC '${t}' ${i} timed out`),a(new U(w.DEADLINE_EXCEEDED,"Request time out"));break;case na.HTTP_ERROR:const h=l.getStatus();if(M(jt,`RPC '${t}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const E=function(S){const I=S.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(I)>=0?I:w.UNKNOWN}(m.status);a(new U(E,m.message))}else a(new U(w.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new U(w.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{M(jt,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(s);M(jt,`RPC '${t}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}xo(t,n,r){const s=sa(),i=[this.yo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=oT(),a=aT(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new uT({})),this.vo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");M(jt,`Creating RPC '${t}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,m=!1;const E=new sI({co:S=>{m?M(jt,`Not sending because RPC '${t}' stream ${s} is closed:`,S):(f||(M(jt,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),M(jt,`RPC '${t}' stream ${s} sending:`,S),h.send(S))},lo:()=>h.close()}),R=(S,I,k)=>{S.listen(I,F=>{try{k(F)}catch(X){setTimeout(()=>{throw X},0)}})};return R(h,Ys.EventType.OPEN,()=>{m||(M(jt,`RPC '${t}' stream ${s} transport opened.`),E.Vo())}),R(h,Ys.EventType.CLOSE,()=>{m||(m=!0,M(jt,`RPC '${t}' stream ${s} transport closed`),E.fo())}),R(h,Ys.EventType.ERROR,S=>{m||(m=!0,mr(jt,`RPC '${t}' stream ${s} transport errored:`,S),E.fo(new U(w.UNAVAILABLE,"The operation could not be completed")))}),R(h,Ys.EventType.MESSAGE,S=>{var I;if(!m){const k=S.data[0];ft(!!k);const F=k,X=F.error||((I=F[0])===null||I===void 0?void 0:I.error);if(X){M(jt,`RPC '${t}' stream ${s} received error:`,X);const dt=X.status;let q=function(Ue){const ie=At[Ue];if(ie!==void 0)return Up(ie)}(dt),It=X.message;q===void 0&&(q=w.INTERNAL,It="Unknown error status: "+dt+" with message "+X.message),m=!0,E.fo(new U(q,It)),h.close()}else M(jt,`RPC '${t}' stream ${s} received:`,k),E.po(k)}}),R(a,cT.STAT_EVENT,S=>{S.stat===Xu.PROXY?M(jt,`RPC '${t}' stream ${s} detected buffering proxy`):S.stat===Xu.NOPROXY&&M(jt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.mo()},0),E}}function ia(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(e){return new gw(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(t,n,r=1e3,s=1.5,i=6e4){this.si=t,this.timerId=n,this.Oo=r,this.No=s,this.Lo=i,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(t){this.cancel();const n=Math.floor(this.Bo+this.$o()),r=Math.max(0,Date.now()-this.qo),s=Math.max(0,n-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.qo=Date.now(),t())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){this.ko!==null&&(this.ko.skipDelay(),this.ko=null)}cancel(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(t,n,r,s,i,o,a,l){this.si=t,this.Wo=r,this.Go=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new Jp(t,n)}Yo(){return this.state===1||this.state===5||this.Zo()}Zo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&this.jo===null&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,()=>this.n_()))}r_(t){this.i_(),this.stream.send(t)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(t,n){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,t!==4?this.Jo.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(We(n.toString()),We("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.o_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Eo(n)}o_(){}auth(){this.state=1;const t=this.__(this.zo),n=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.zo===n&&this.a_(r,s)},r=>{t(()=>{const s=new U(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.u_(s)})})}a_(t,n){const r=this.__(this.zo);this.stream=this.c_(t,n),this.stream.ho(()=>{r(()=>this.listener.ho())}),this.stream.Io(()=>{r(()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,()=>(this.Zo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.u_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Xo(){this.state=5,this.Jo.Ko(async()=>{this.state=0,this.start()})}u_(t){return M("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}__(t){return n=>{this.si.enqueueAndForget(()=>this.zo===t?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oI extends Zp{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}c_(t,n){return this.connection.xo("Listen",t,n)}onMessage(t){this.Jo.reset();const n=Ew(this.serializer,t),r=function(i){if(!("targetChange"in i))return W.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?Me(o.readTime):W.min()}(t);return this.listener.l_(n,r)}h_(t){const n={};n.database=el(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Ya(l)?{documents:ww(i,l)}:{query:Iw(i,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=qp(i,o.resumeToken);const c=Ja(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(W.min())>0){a.readTime=ki(i,o.snapshotVersion.toTimestamp());const c=Ja(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=Rw(this.serializer,t);r&&(n.labels=r),this.r_(n)}P_(t){const n={};n.database=el(this.serializer),n.removeTarget=t,this.r_(n)}}class aI extends Zp{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(t,n){return this.connection.xo("Write",t,n)}onMessage(t){if(ft(!!t.streamToken),this.lastStreamToken=t.streamToken,this.I_){this.Jo.reset();const n=Tw(t.writeResults,t.commitTime),r=Me(t.commitTime);return this.listener.d_(r,n)}return ft(!t.writeResults||t.writeResults.length===0),this.I_=!0,this.listener.A_()}R_(){const t={};t.database=el(this.serializer),this.r_(t)}E_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>vw(this.serializer,r))};this.r_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.V_=!1}m_(){if(this.V_)throw new U(w.FAILED_PRECONDITION,"The client has already been terminated.")}Do(t,n,r,s){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Do(t,Za(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(w.UNKNOWN,i.toString())})}Mo(t,n,r,s,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,Za(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(w.UNKNOWN,o.toString())})}terminate(){this.V_=!0,this.connection.terminate()}}class cI{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(We(n),this.y_=!1):M("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.ro(o=>{r.enqueueAndForget(async()=>{Gn(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=Q(l);c.M_.add(4),await Ls(c),c.N_.set("Unknown"),c.M_.delete(4),await Ao(c)}(this))})}),this.N_=new cI(r,s)}}async function Ao(e){if(Gn(e))for(const t of e.x_)await t(!0)}async function Ls(e){for(const t of e.x_)await t(!1)}function tm(e,t){const n=Q(e);n.F_.has(t.targetId)||(n.F_.set(t.targetId,t),pc(n)?dc(n):Cr(n).Zo()&&fc(n,t))}function hc(e,t){const n=Q(e),r=Cr(n);n.F_.delete(t),r.Zo()&&em(n,t),n.F_.size===0&&(r.Zo()?r.t_():Gn(n)&&n.N_.set("Unknown"))}function fc(e,t){if(e.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(W.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Cr(e).h_(t)}function em(e,t){e.L_.xe(t),Cr(e).P_(t)}function dc(e){e.L_=new fw({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.F_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),Cr(e).start(),e.N_.w_()}function pc(e){return Gn(e)&&!Cr(e).Yo()&&e.F_.size>0}function Gn(e){return Q(e).M_.size===0}function nm(e){e.L_=void 0}async function hI(e){e.N_.set("Online")}async function fI(e){e.F_.forEach((t,n)=>{fc(e,t)})}async function dI(e,t){nm(e),pc(e)?(e.N_.D_(t),dc(e)):e.N_.set("Unknown")}async function pI(e,t,n){if(e.N_.set("Online"),t instanceof jp&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.F_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.F_.delete(a),s.L_.removeTarget(a))}(e,t)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ni(e,r)}else if(t instanceof di?e.L_.Ke(t):t instanceof $p?e.L_.He(t):e.L_.We(t),!n.isEqual(W.min()))try{const r=await Xp(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.L_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.F_.get(c);u&&i.F_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.F_.get(l);if(!u)return;i.F_.set(l,u.withResumeToken(Qt.EMPTY_BYTE_STRING,u.snapshotVersion)),em(i,l);const h=new on(u.target,l,c,u.sequenceNumber);fc(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await Ni(e,r)}}async function Ni(e,t,n){if(!Ns(t))throw t;e.M_.add(1),await Ls(e),e.N_.set("Offline"),n||(n=()=>Xp(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),e.M_.delete(1),await Ao(e)})}function rm(e,t){return t().catch(n=>Ni(e,n,t))}async function Ro(e){const t=Q(e),n=_n(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;mI(t);)try{const s=await Jw(t.localStore,r);if(s===null){t.v_.length===0&&n.t_();break}r=s.batchId,gI(t,s)}catch(s){await Ni(t,s)}sm(t)&&im(t)}function mI(e){return Gn(e)&&e.v_.length<10}function gI(e,t){e.v_.push(t);const n=_n(e);n.Zo()&&n.T_&&n.E_(t.mutations)}function sm(e){return Gn(e)&&!_n(e).Yo()&&e.v_.length>0}function im(e){_n(e).start()}async function _I(e){_n(e).R_()}async function yI(e){const t=_n(e);for(const n of e.v_)t.E_(n.mutations)}async function EI(e,t,n){const r=e.v_.shift(),s=ic.from(r,t,n);await rm(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Ro(e)}async function vI(e,t){t&&_n(e).T_&&await async function(r,s){if(function(o){return cw(o)&&o!==w.ABORTED}(s.code)){const i=r.v_.shift();_n(r).e_(),await rm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ro(r)}}(e,t),sm(e)&&im(e)}async function Th(e,t){const n=Q(e);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=Gn(n);n.M_.add(3),await Ls(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.M_.delete(3),await Ao(n)}async function TI(e,t){const n=Q(e);t?(n.M_.delete(2),await Ao(n)):t||(n.M_.add(2),await Ls(n),n.N_.set("Unknown"))}function Cr(e){return e.B_||(e.B_=function(n,r,s){const i=Q(n);return i.m_(),new oI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{ho:hI.bind(null,e),Io:fI.bind(null,e),Eo:dI.bind(null,e),l_:pI.bind(null,e)}),e.x_.push(async t=>{t?(e.B_.e_(),pc(e)?dc(e):e.N_.set("Unknown")):(await e.B_.stop(),nm(e))})),e.B_}function _n(e){return e.k_||(e.k_=function(n,r,s){const i=Q(n);return i.m_(),new aI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{ho:()=>Promise.resolve(),Io:_I.bind(null,e),Eo:vI.bind(null,e),A_:yI.bind(null,e),d_:EI.bind(null,e)}),e.x_.push(async t=>{t?(e.k_.e_(),await Ro(e)):(await e.k_.stop(),e.v_.length>0&&(M("RemoteStore",`Stopping write stream with ${e.v_.length} pending writes`),e.v_=[]))})),e.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new mc(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(w.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gc(e,t){if(We("AsyncQueue",`${t}: ${e}`),Ns(e))return new U(w.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t){this.comparator=t?(n,r)=>t(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=Br(),this.sortedSet=new vt(this.comparator)}static emptySet(t){return new ur(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ur)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new ur;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(){this.q_=new vt($.comparator)}track(t){const n=t.doc.key,r=this.q_.get(n);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(n,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(n):t.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:t.doc}):H():this.q_=this.q_.insert(n,t)}Q_(){const t=[];return this.q_.inorderTraversal((n,r)=>{t.push(r)}),t}}class vr{constructor(t,n,r,s,i,o,a,l,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new vr(t,n,ur.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&yo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class II{constructor(){this.queries=new Pr(t=>Pp(t),yo),this.onlineState="Unknown",this.z_=new Set}}async function AI(e,t){const n=Q(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.W_()&&t.G_()&&(r=2):(i=new wI,r=t.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=gc(o,`Initialization of query '${tr(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.U_.push(t),t.j_(n.onlineState),i.K_&&t.H_(i.K_)&&_c(n)}async function RI(e,t){const n=Q(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(t);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=t.G_()?0:1:!i.W_()&&t.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function SI(e,t){const n=Q(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.U_)a.H_(s)&&(r=!0);o.K_=s}}r&&_c(n)}function PI(e,t,n){const r=Q(e),s=r.queries.get(t);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(t)}function _c(e){e.z_.forEach(t=>{t.next()})}var rl,Ih;(Ih=rl||(rl={})).J_="default",Ih.Cache="cache";class CI{constructor(t,n,r){this.query=t,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new vr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),n=!0):this.ta(t,this.onlineState)&&(this.na(t),n=!0),this.X_=t,n}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),n=!0),n}ta(t,n){if(!t.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(t){t=vr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==rl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(t){this.key=t}}class am{constructor(t){this.key=t}}class bI{constructor(t,n){this.query=t,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Z(),this.mutatedKeys=Z(),this.Ia=Cp(t),this.Ta=new ur(this.Ia)}get Ea(){return this.la}da(t,n){const r=n?n.Aa:new wh,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const f=s.get(u),m=Eo(this.query,h)?h:null,E=!!f&&this.mutatedKeys.has(f.key),R=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let S=!1;f&&m?f.data.isEqual(m.data)?E!==R&&(r.track({type:3,doc:m}),S=!0):this.Ra(f,m)||(r.track({type:2,doc:m}),S=!0,(l&&this.Ia(m,l)>0||c&&this.Ia(m,c)<0)&&(a=!0)):!f&&m?(r.track({type:0,doc:m}),S=!0):f&&!m&&(r.track({type:1,doc:f}),S=!0,(l||c)&&(a=!0)),S&&(m?(o=o.add(m),i=R?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Ta:o,Aa:r,Zi:a,mutatedKeys:i}}Ra(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const o=t.Aa.Q_();o.sort((u,h)=>function(m,E){const R=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return R(m)-R(E)}(u.type,h.type)||this.Ia(u.doc,h.doc)),this.Va(r),s=s!=null&&s;const a=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,c=l!==this.ha;return this.ha=l,o.length!==0||c?{snapshot:new vr(this.query,t.Ta,i,o,t.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new wh,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(n=>this.la=this.la.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=Z(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return t.forEach(r=>{this.Pa.has(r)||n.push(new am(r))}),this.Pa.forEach(r=>{t.has(r)||n.push(new om(r))}),n}pa(t){this.la=t.ls,this.Pa=Z();const n=this.da(t.documents);return this.applyChanges(n,!0)}ya(){return vr.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class VI{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class DI{constructor(t){this.key=t,this.wa=!1}}class xI{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Pr(a=>Pp(a),yo),this.Da=new Map,this.Ca=new Set,this.va=new vt($.comparator),this.Fa=new Map,this.Ma=new lc,this.xa={},this.Oa=new Map,this.Na=Er.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function kI(e,t,n=!0){const r=dm(e);let s;const i=r.ba.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await lm(r,t,n,!0),s}async function NI(e,t){const n=dm(e);await lm(n,t,!0,!1)}async function lm(e,t,n,r){const s=await Zw(e.localStore,Ne(t)),i=s.targetId,o=n?e.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await OI(e,t,i,o==="current",s.resumeToken)),e.isPrimaryClient&&n&&tm(e.remoteStore,s),a}async function OI(e,t,n,r,s){e.Ba=(h,f,m)=>async function(R,S,I,k){let F=S.view.da(I);F.Zi&&(F=await yh(R.localStore,S.query,!1).then(({documents:It})=>S.view.da(It,F)));const X=k&&k.targetChanges.get(S.targetId),dt=k&&k.targetMismatches.get(S.targetId)!=null,q=S.view.applyChanges(F,R.isPrimaryClient,X,dt);return Rh(R,S.targetId,q.fa),q.snapshot}(e,h,f,m);const i=await yh(e.localStore,t,!0),o=new bI(t,i.ls),a=o.da(i.documents),l=Ms.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),c=o.applyChanges(a,e.isPrimaryClient,l);Rh(e,n,c.fa);const u=new VI(t,n,o);return e.ba.set(t,u),e.Da.has(n)?e.Da.get(n).push(t):e.Da.set(n,[t]),c.snapshot}async function MI(e,t,n){const r=Q(e),s=r.ba.get(t),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!yo(o,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await nl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&hc(r.remoteStore,s.targetId),sl(r,s.targetId)}).catch(ks)):(sl(r,s.targetId),await nl(r.localStore,s.targetId,!0))}async function LI(e,t){const n=Q(e),r=n.ba.get(t),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),hc(n.remoteStore,r.targetId))}async function FI(e,t,n){const r=zI(e);try{const s=await function(o,a){const l=Q(o),c=Pt.now(),u=a.reduce((m,E)=>m.add(E.key),Z());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let E=Qe(),R=Z();return l.ss.getEntries(m,u).next(S=>{E=S,E.forEach((I,k)=>{k.isValidDocument()||(R=R.add(I))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,E)).next(S=>{h=S;const I=[];for(const k of a){const F=sw(k,h.get(k.key).overlayedDocument);F!=null&&I.push(new Kn(k.key,F,Ep(F.value.mapValue),Oe.exists(!0)))}return l.mutationQueue.addMutationBatch(m,c,I,a)}).next(S=>{f=S;const I=S.applyToLocalDocumentSet(h,R);return l.documentOverlayCache.saveOverlays(m,S.batchId,I)})}).then(()=>({batchId:f.batchId,changes:Vp(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new vt(rt)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,s.batchId,n),await Fs(r,s.changes),await Ro(r.remoteStore)}catch(s){const i=gc(s,"Failed to persist write");n.reject(i)}}async function cm(e,t){const n=Q(e);try{const r=await Yw(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(ft(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?ft(o.wa):s.removedDocuments.size>0&&(ft(o.wa),o.wa=!1))}),await Fs(n,r,t)}catch(r){await ks(r)}}function Ah(e,t,n){const r=Q(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const a=o.view.j_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=Q(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.U_)f.j_(a)&&(c=!0)}),c&&_c(l)}(r.eventManager,t),s.length&&r.Sa.l_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function BI(e,t,n){const r=Q(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Fa.get(t),i=s&&s.key;if(i){let o=new vt($.comparator);o=o.insert(i,Ht.newNoDocument(i,W.min()));const a=Z().add(i),l=new wo(W.min(),new Map,new vt(rt),o,a);await cm(r,l),r.va=r.va.remove(i),r.Fa.delete(t),yc(r)}else await nl(r.localStore,t,!1).then(()=>sl(r,t,n)).catch(ks)}async function UI(e,t){const n=Q(e),r=t.batch.batchId;try{const s=await Qw(n.localStore,t);hm(n,r,null),um(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fs(n,s)}catch(s){await ks(s)}}async function $I(e,t,n){const r=Q(e);try{const s=await function(o,a){const l=Q(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(ft(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,t);hm(r,t,n),um(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Fs(r,s)}catch(s){await ks(s)}}function um(e,t){(e.Oa.get(t)||[]).forEach(n=>{n.resolve()}),e.Oa.delete(t)}function hm(e,t,n){const r=Q(e);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.xa[r.currentUser.toKey()]=s}}function sl(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Da.get(t))e.ba.delete(r),n&&e.Sa.ka(r,n);e.Da.delete(t),e.isPrimaryClient&&e.Ma.Rr(t).forEach(r=>{e.Ma.containsKey(r)||fm(e,r)})}function fm(e,t){e.Ca.delete(t.path.canonicalString());const n=e.va.get(t);n!==null&&(hc(e.remoteStore,n),e.va=e.va.remove(t),e.Fa.delete(n),yc(e))}function Rh(e,t,n){for(const r of n)r instanceof om?(e.Ma.addReference(r.key,t),jI(e,r)):r instanceof am?(M("SyncEngine","Document no longer in limbo: "+r.key),e.Ma.removeReference(r.key,t),e.Ma.containsKey(r.key)||fm(e,r.key)):H()}function jI(e,t){const n=t.key,r=n.path.canonicalString();e.va.get(n)||e.Ca.has(r)||(M("SyncEngine","New document in limbo: "+n),e.Ca.add(r),yc(e))}function yc(e){for(;e.Ca.size>0&&e.va.size<e.maxConcurrentLimboResolutions;){const t=e.Ca.values().next().value;e.Ca.delete(t);const n=new $(_t.fromString(t)),r=e.Na.next();e.Fa.set(r,new DI(n)),e.va=e.va.insert(n,r),tm(e.remoteStore,new on(Ne(Sp(n.path)),r,"TargetPurposeLimboResolution",Jl.oe))}}async function Fs(e,t,n){const r=Q(e),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=uc.Qi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.Sa.l_(s),await async function(l,c){const u=Q(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>T.forEach(c,f=>T.forEach(f.ki,m=>u.persistence.referenceDelegate.addReference(h,f.targetId,m)).next(()=>T.forEach(f.qi,m=>u.persistence.referenceDelegate.removeReference(h,f.targetId,m)))))}catch(h){if(!Ns(h))throw h;M("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const m=u.ts.get(f),E=m.snapshotVersion,R=m.withLastLimboFreeSnapshotVersion(E);u.ts=u.ts.insert(f,R)}}}(r.localStore,i))}async function qI(e,t){const n=Q(e);if(!n.currentUser.isEqual(t)){M("SyncEngine","User change. New user:",t.toKey());const r=await Yp(n.localStore,t);n.currentUser=t,function(i,o){i.Oa.forEach(a=>{a.forEach(l=>{l.reject(new U(w.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Fs(n,r._s)}}function HI(e,t){const n=Q(e),r=n.Fa.get(t);if(r&&r.wa)return Z().add(r.key);{let s=Z();const i=n.Da.get(t);if(!i)return s;for(const o of i){const a=n.ba.get(o);s=s.unionWith(a.view.Ea)}return s}}function dm(e){const t=Q(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=cm.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=HI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=BI.bind(null,t),t.Sa.l_=SI.bind(null,t.eventManager),t.Sa.ka=PI.bind(null,t.eventManager),t}function zI(e){const t=Q(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=UI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=$I.bind(null,t),t}class Sh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Io(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Ww(this.persistence,new Kw,t.initialUser,this.serializer)}createPersistence(t){return new qw(cc.jr,this.serializer)}createSharedClientState(t){return new eI}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class KI{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ah(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qI.bind(null,this.syncEngine),await TI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new II}()}createDatastore(t){const n=Io(t.databaseInfo.databaseId),r=function(i){return new iI(i)}(t.databaseInfo);return function(i,o,a,l){return new lI(i,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new uI(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Ah(this.syncEngine,n,0),function(){return vh.D()?new vh:new nI}())}createSyncEngine(t,n){return function(s,i,o,a,l,c,u){const h=new xI(s,i,o,a,l,c);return u&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const s=Q(r);M("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Ls(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):We("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=qt.UNAUTHENTICATED,this.clientId=gp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{M("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(M("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=gc(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function oa(e,t){e.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Yp(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Ph(e,t){e.asyncQueue.verifyOperationInProgress();const n=await YI(e);M("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Th(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Th(t.remoteStore,s)),e._onlineComponents=t}function QI(e){return e.name==="FirebaseError"?e.code===w.FAILED_PRECONDITION||e.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function YI(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await oa(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!QI(n))throw n;mr("Error using user provided cache. Falling back to memory cache: "+n),await oa(e,new Sh)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await oa(e,new Sh);return e._offlineComponents}async function pm(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await Ph(e,e._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await Ph(e,new KI))),e._onlineComponents}function XI(e){return pm(e).then(t=>t.syncEngine)}async function JI(e){const t=await pm(e),n=t.eventManager;return n.onListen=kI.bind(null,t.syncEngine),n.onUnlisten=MI.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=NI.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=LI.bind(null,t.syncEngine),n}function ZI(e,t,n={}){const r=new hn;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new GI({next:f=>{o.enqueueAndForget(()=>RI(i,h)),f.fromCache&&l.source==="server"?c.reject(new U(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new CI(a,u,{includeMetadataChanges:!0,ra:!0});return AI(i,h)}(await JI(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(e,t,n){if(!n)throw new U(w.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function tA(e,t,n,r){if(t===!0&&r===!0)throw new U(w.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function bh(e){if(!$.isDocumentKey(e))throw new U(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Vh(e){if($.isDocumentKey(e))throw new U(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ec(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":H()}function ws(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new U(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ec(e);throw new U(w.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new U(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new U(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}tA("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mm((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class So{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new U(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dh(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dT;switch(r.type){case"firstParty":return new _T(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ch.get(n);r&&(M("ComponentProvider","Removing Datastore"),Ch.delete(n),r.terminate())}(this),Promise.resolve()}}function eA(e,t,n,r={}){var s;const i=(e=ws(e,So))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&mr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=qt.MOCK_USER;else{a=$E(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new U(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new qt(c)}e._authCredentials=new pT(new mp(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Po(this.firestore,t,this._query)}}class ve{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ve(this.firestore,t,this._key)}}class fn extends Po{constructor(t,n,r){super(t,n,Sp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ve(this.firestore,null,new $(t))}withConverter(t){return new fn(this.firestore,t,this._path)}}function aa(e,t,...n){if(e=Ln(e),gm("collection","path",t),e instanceof So){const r=_t.fromString(t,...n);return Vh(r),new fn(e,null,r)}{if(!(e instanceof ve||e instanceof fn))throw new U(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(_t.fromString(t,...n));return Vh(r),new fn(e.firestore,null,r)}}function _m(e,t,...n){if(e=Ln(e),arguments.length===1&&(t=gp.newId()),gm("doc","path",t),e instanceof So){const r=_t.fromString(t,...n);return bh(r),new ve(e,null,new $(r))}{if(!(e instanceof ve||e instanceof fn))throw new U(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(_t.fromString(t,...n));return bh(r),new ve(e.firestore,e instanceof fn?e.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new Jp(this,"async_queue_retry"),this.hu=()=>{const n=ia();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Jo.Uo()};const t=ia();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const n=ia();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new hn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(t){if(!Ns(t))throw t;M("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(t){const n=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw We("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(t,n,r){this.Pu(),this.lu.indexOf(t)>-1&&(n=0);const s=mc.createAndSchedule(this,t,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&H()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const n of this._u)if(n.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const n=this._u.indexOf(t);this._u.splice(n,1)}}class Co extends So{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new nA}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Em(this),this._firestoreClient.terminate()}}function la(e,t){const n=ud(),r="(default)",s=Rs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=BE("firestore");i&&eA(s,...i)}return s}function ym(e){return e._firestoreClient||Em(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Em(e){var t,n,r;const s=e._freezeSettings(),i=function(a,l,c,u){return new VT(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,mm(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new WI(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Tr(Qt.fromBase64String(t))}catch(n){throw new U(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Tr(Qt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new U(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ft(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new U(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new U(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return rt(this._lat,t._lat)||rt(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=/^__.*__$/;class sA{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Kn(t,this.data,this.fieldMask,n,this.fieldTransforms):new Os(t,this.data,n,this.fieldTransforms)}}function Tm(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class wc{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new wc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.gu({path:r,yu:!1});return s.wu(t),s}Su(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Oi(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Tm(this.fu)&&rA.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class iA{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Io(t)}Fu(t,n,r,s=!1){return new wc({fu:t,methodName:n,vu:r,path:Ft.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oA(e){const t=e._freezeSettings(),n=Io(e._databaseId);return new iA(e._databaseId,!!t.ignoreUndefinedProperties,n)}function aA(e,t,n,r,s,i={}){const o=e.Fu(i.merge||i.mergeFields?2:0,t,n,s);Rm("Data must be an object, but it was:",o,r);const a=Im(r,o);let l,c;if(i.merge)l=new ye(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=lA(t,h,n);if(!o.contains(f))throw new U(w.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);uA(u,f)||u.push(f)}l=new ye(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new sA(new he(a),l,c)}function wm(e,t){if(Am(e=Ln(e)))return Rm("Unsupported field value:",t,e),Im(e,t);if(e instanceof vm)return function(r,s){if(!Tm(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=wm(a,s.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=Ln(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return JT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Pt.fromDate(r);return{timestampValue:ki(s.serializer,i)}}if(r instanceof Pt){const i=new Pt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ki(s.serializer,i)}}if(r instanceof Tc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Tr)return{bytesValue:qp(s.serializer,r._byteString)};if(r instanceof ve){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ac(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Ec(r)}`)}(e,t)}function Im(e,t){const n={};return _p(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Sr(e,(r,s)=>{const i=wm(s,t.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Am(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Pt||e instanceof Tc||e instanceof Tr||e instanceof ve||e instanceof vm)}function Rm(e,t,n){if(!Am(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ec(n);throw r==="an object"?t.Du(e+" a custom object"):t.Du(e+" "+r)}}function lA(e,t,n){if((t=Ln(t))instanceof vc)return t._internalPath;if(typeof t=="string")return Sm(e,t);throw Oi("Field path arguments must be of type string or ",e,!1,void 0,n)}const cA=new RegExp("[~\\*/\\[\\]]");function Sm(e,t,n){if(t.search(cA)>=0)throw Oi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new vc(...t.split("."))._internalPath}catch{throw Oi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Oi(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new U(w.INVALID_ARGUMENT,a+e+l)}function uA(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new hA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Cm("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hA extends Pm{data(){return super.data()}}function Cm(e,t){return typeof t=="string"?Sm(e,t):t instanceof vc?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new U(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dA{convertValue(t,n="none"){switch($n(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Un(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw H()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Sr(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new Tc(Rt(t.latitude),Rt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=tc(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_s(t));default:return null}}convertTimestamp(t){const n=gn(t);return new Pt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=_t.fromString(t);ft(Qp(r));const s=new ys(r.get(1),r.get(3)),i=new $(r.popFirst(5));return s.isEqual(n)||We(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(e,t,n){let r;return r=e?e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class mA extends Pm{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new pi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Cm("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class pi extends mA{data(t={}){return super.data(t)}}class gA{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new ti(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new pi(this._firestore,this._userDataWriter,r.key,r,new ti(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new pi(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ti(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new pi(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ti(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:_A(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _A(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}class yA extends dA{constructor(t){super(),this.firestore=t}convertBytes(t){return new Tr(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ve(this.firestore,null,n)}}function ca(e){e=ws(e,Po);const t=ws(e.firestore,Co),n=ym(t),r=new yA(t);return fA(e._query),ZI(n,e._query).then(s=>new gA(t,r,e,s))}function EA(e){return bm(ws(e.firestore,Co),[new sc(e._key,Oe.none())])}function V1(e,t){const n=ws(e.firestore,Co),r=_m(e),s=pA(e.converter,t);return bm(n,[aA(oA(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,Oe.exists(!1))]).then(()=>r)}function bm(e,t){return function(r,s){const i=new hn;return r.asyncQueue.enqueueAndForget(async()=>FI(await XI(r),s,i)),i.promise}(ym(e),t)}(function(t,n=!0){(function(s){Rr=s})(Qv),pn(new Ke("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Co(new mT(r.getProvider("auth-internal")),new ET(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new U(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ys(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),ke(Ju,"4.6.1",t),ke(Ju,"4.6.1","esm2017")})();const vA={name:"StreamlineInterfaceFavoriteAwardRibbonRewardLikeSocialRatingMedia"},bo=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},TA={xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 14 14"},wA=it("g",{fill:"none",stroke:"#888888","stroke-linecap":"round","stroke-linejoin":"round"},[it("circle",{cx:"6.87",cy:"5",r:"4.5"}),it("circle",{cx:"6.87",cy:"5",r:"2"}),it("path",{d:"m6 9.42l-.88 3.7a.51.51 0 0 1-.26.33a.54.54 0 0 1-.43 0L1.11 12a.51.51 0 0 1-.18-.78L3.5 8M8 9.37l.9 3.75a.5.5 0 0 0 .27.33a.51.51 0 0 0 .42 0l3.3-1.45a.5.5 0 0 0 .28-.35a.48.48 0 0 0-.1-.43l-2.68-3.41"})],-1),IA=[wA];function AA(e,t,n,r,s,i){return Ot(),te("svg",TA,IA)}const RA=bo(vA,[["render",AA]]),SA={name:"PhBooks"},PA={xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 256 256"},CA=it("path",{fill:"#888888",d:"m231.65 194.55l-33.19-157.8a16 16 0 0 0-19-12.39l-46.81 10.06a16.08 16.08 0 0 0-12.3 19l33.19 157.8A16 16 0 0 0 169.16 224a16.25 16.25 0 0 0 3.38-.36l46.81-10.06a16.09 16.09 0 0 0 12.3-19.03M136 50.15v-.09l46.8-10l3.33 15.87L139.33 66Zm6.62 31.47l46.82-10.05l3.34 15.9L146 97.53Zm6.64 31.57l46.82-10.06l13.3 63.24l-46.82 10.06ZM216 197.94l-46.8 10l-3.33-15.87l46.8-10.07l3.33 15.85zM104 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56 48h48v16H56Zm0 32h48v96H56Zm48 128H56v-16h48z"},null,-1),bA=[CA];function VA(e,t,n,r,s,i){return Ot(),te("svg",PA,bA)}const DA=bo(SA,[["render",VA]]),xA=Is({props:{name:{type:String,required:!0},authors:{type:Array,required:!0},year:{type:Number,required:!1},rating:{type:Number,required:!1},isbn:{type:String,required:!1}},methods:{async handleDelete(){if(confirm("Вы уверены, что хотите удалить эту книгу?"))try{this.$emit("delete-book",{name:this.name})}catch(t){console.error("Ошибка при удалении книги:",t)}}}}),kA={class:"mainfield__bookfield__book"},NA={key:0},OA={key:1},MA={key:2};function LA(e,t,n,r,s,i){return Ot(),te("div",kA,[it("h2",null,'"'+Pn(e.name)+'"',1),it("p",null,"Автор(-ы): "+Pn(e.authors.join(", ")),1),e.year?(Ot(),te("p",NA,"Год публикации: "+Pn(e.year),1)):Bo("",!0),e.rating!==null?(Ot(),te("p",OA,"Рейтинг: "+Pn(e.rating),1)):Bo("",!0),e.isbn?(Ot(),te("p",MA,"ISBN: "+Pn(e.isbn),1)):Bo("",!0),it("button",{onClick:t[0]||(t[0]=(...o)=>e.handleDelete&&e.handleDelete(...o))},"Удалить")])}const FA=bo(xA,[["render",LA]]),BA=Is({name:"HomeView",setup(){const e=ni(null),t=ni({});let n=ni(!1);const r=async()=>{try{const o=la(),a=aa(o,"books"),l=await ca(a),u=new Date().getFullYear()-3,h=l.docs.map(m=>m.data()).filter(m=>m.year&&m.year<=u&&(m.rating===void 0||m.rating>=0&&m.rating<=10)).sort((m,E)=>(E.rating||0)-(m.rating||0)),f=h[Math.floor(Math.random()*h.length)];e.value=f}catch(o){console.error("Не удалось получить рекомендованную книгу:",o)}},s=async()=>{try{const o=la(),a=aa(o,"books"),c=(await ca(a)).docs.map(f=>f.data()),u=Array.from(new Set(c.map(f=>!f.year||f.year===void 0?"Книги без указания года":f.year))),h={};u.forEach(f=>{h[f]=c.filter(m=>m.year===f||f==="Книги без указания года"&&!m.year)}),t.value=h,Object.values(t.value).forEach(f=>{f.sort((m,E)=>m.name.localeCompare(E.name))}),n.value=!0}catch(o){console.error("Ошибка при загрузке книг:",o)}},i=async o=>{try{const a=la(),l=aa(a,"books"),u=(await ca(l)).docs.find(h=>h.data().name===o);u?(await EA(_m(l,u.id)),alert(`Книга "${o}" удалена успешно.`),n.value=!1,await r(),await s()):console.warn(`Книга "${o}" не найдена.`)}catch(a){console.error("Ошибка при удалении книги:",a)}};return Af(()=>{r(),s()}),{recommendedBookRef:e,booksByYear:t,deleteBook:i,loaded:n}},components:{recommend:RA,booksIcon:DA,BookComponent:FA}}),UA={class:"mainfield"},$A={class:"mainfield__title"},jA=it("h1",null,"Рекомендуемая книга",-1),qA=it("div",{class:"separator"},null,-1),HA={class:"mainfield__bookfield"},zA={key:0},KA={class:"mainfield"},GA={class:"mainfield__title"},WA=it("h1",null,"Список Книг",-1),QA=it("div",{class:"separator"},null,-1),YA=it("p",null,"Добро пожаловать на главную страницу нашей библиотеки!",-1),XA={class:"mainfield__bookfield"},JA={key:0};function ZA(e,t,n,r,s,i){var c,u,h,f,m,E;const o=Mo("recommend"),a=Mo("BookComponent"),l=Mo("booksIcon");return Ot(),te("main",null,[it("div",UA,[it("div",$A,[wt(o),jA]),qA,it("div",HA,[(c=e.recommendedBookRef)!=null&&c.name?(Ot(),Ia(a,{key:1,name:(u=e.recommendedBookRef)==null?void 0:u.name,authors:(h=e.recommendedBookRef)==null?void 0:h.authors,year:(f=e.recommendedBookRef)==null?void 0:f.year,rating:(m=e.recommendedBookRef)==null?void 0:m.rating,isbn:(E=e.recommendedBookRef)==null?void 0:E.ISBN},null,8,["name","authors","year","rating","isbn"])):(Ot(),te("p",zA,"Загрузка..."))])]),it("div",KA,[it("div",GA,[wt(l),WA]),QA,YA,it("div",XA,[e.loaded?(Ot(!0),te(ce,{key:1},jc(e.booksByYear,(R,S)=>(Ot(),te("div",{class:"mainfield__bookfield__book-group",key:S},[it("h2",null,Pn(S),1),(Ot(!0),te(ce,null,jc(R,I=>(Ot(),Ia(a,{key:I==null?void 0:I.name,name:I==null?void 0:I.name,authors:I==null?void 0:I.authors,year:I==null?void 0:I.year,rating:I==null?void 0:I.rating,isbn:I==null?void 0:I.ISBN,onDeleteBook:k=>e.deleteBook(I.name)},null,8,["name","authors","year","rating","isbn","onDeleteBook"]))),128))]))),128)):(Ot(),te("p",JA,"Загрузка..."))])])])}const tR=bo(BA,[["render",ZA]]),eR=yE({history:Qy("./"),routes:[{path:"/",name:"home",component:tR},{path:"/AddBook",name:"add",component:()=>bE(()=>import("./AddBookView-PTPUvvFr.js"),__vite__mapDeps([0,1]),import.meta.url)}]});var nR="firebase",rR="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ke(nR,rR,"app");const Vm="@firebase/installations",Ic="0.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=1e4,xm=`w:${Ic}`,km="FIS_v2",sR="https://firebaseinstallations.googleapis.com/v1",iR=60*60*1e3,oR="installations",aR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},jn=new Xi(oR,aR,lR);function Nm(e){return e instanceof vn&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om({projectId:e}){return`${sR}/projects/${e}/installations`}function Mm(e){return{token:e.token,requestStatus:2,expiresIn:uR(e.expiresIn),creationTime:Date.now()}}async function Lm(e,t){const r=(await t.json()).error;return jn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Fm({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function cR(e,{refreshToken:t}){const n=Fm(e);return n.append("Authorization",hR(t)),n}async function Bm(e){const t=await e();return t.status>=500&&t.status<600?e():t}function uR(e){return Number(e.replace("s","000"))}function hR(e){return`${km} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Om(e),s=Fm(e),i=t.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:km,appId:e.appId,sdkVersion:xm},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await Bm(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Mm(c.authToken)}}else throw await Lm("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=/^[cdef][\w-]{21}$/,il="";function mR(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=gR(e);return pR.test(n)?n:il}catch{return il}}function gR(e){return dR(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=new Map;function jm(e,t){const n=Vo(e);qm(n,t),_R(n,t)}function qm(e,t){const n=$m.get(e);if(n)for(const r of n)r(t)}function _R(e,t){const n=yR();n&&n.postMessage({key:e,fid:t}),ER()}let xn=null;function yR(){return!xn&&"BroadcastChannel"in self&&(xn=new BroadcastChannel("[Firebase] FID Change"),xn.onmessage=e=>{qm(e.data.key,e.data.fid)}),xn}function ER(){$m.size===0&&xn&&(xn.close(),xn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR="firebase-installations-database",TR=1,qn="firebase-installations-store";let ua=null;function Ac(){return ua||(ua=ld(vR,TR,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(qn)}}})),ua}async function Mi(e,t){const n=Vo(e),s=(await Ac()).transaction(qn,"readwrite"),i=s.objectStore(qn),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&jm(e,t.fid),t}async function Hm(e){const t=Vo(e),r=(await Ac()).transaction(qn,"readwrite");await r.objectStore(qn).delete(t),await r.done}async function Do(e,t){const n=Vo(e),s=(await Ac()).transaction(qn,"readwrite"),i=s.objectStore(qn),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&jm(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rc(e){let t;const n=await Do(e.appConfig,r=>{const s=wR(r),i=IR(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===il?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function wR(e){const t=e||{fid:mR(),registrationStatus:0};return zm(t)}function IR(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(jn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=AR(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:RR(e)}:{installationEntry:t}}async function AR(e,t){try{const n=await fR(e,t);return Mi(e.appConfig,n)}catch(n){throw Nm(n)&&n.customData.serverCode===409?await Hm(e.appConfig):await Mi(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function RR(e){let t=await xh(e.appConfig);for(;t.registrationStatus===1;)await Um(100),t=await xh(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Rc(e);return r||n}return t}function xh(e){return Do(e,t=>{if(!t)throw jn.create("installation-not-found");return zm(t)})}function zm(e){return SR(e)?{fid:e.fid,registrationStatus:0}:e}function SR(e){return e.registrationStatus===1&&e.registrationTime+Dm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PR({appConfig:e,heartbeatServiceProvider:t},n){const r=CR(e,n),s=cR(e,n),i=t.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:xm,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await Bm(()=>fetch(r,a));if(l.ok){const c=await l.json();return Mm(c)}else throw await Lm("Generate Auth Token",l)}function CR(e,{fid:t}){return`${Om(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sc(e,t=!1){let n;const r=await Do(e.appConfig,i=>{if(!Km(i))throw jn.create("not-registered");const o=i.authToken;if(!t&&DR(o))return i;if(o.requestStatus===1)return n=bR(e,t),i;{if(!navigator.onLine)throw jn.create("app-offline");const a=kR(i);return n=VR(e,a),a}});return n?await n:r.authToken}async function bR(e,t){let n=await kh(e.appConfig);for(;n.authToken.requestStatus===1;)await Um(100),n=await kh(e.appConfig);const r=n.authToken;return r.requestStatus===0?Sc(e,t):r}function kh(e){return Do(e,t=>{if(!Km(t))throw jn.create("not-registered");const n=t.authToken;return NR(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function VR(e,t){try{const n=await PR(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Mi(e.appConfig,r),n}catch(n){if(Nm(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Hm(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Mi(e.appConfig,r)}throw n}}function Km(e){return e!==void 0&&e.registrationStatus===2}function DR(e){return e.requestStatus===2&&!xR(e)}function xR(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+iR}function kR(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function NR(e){return e.requestStatus===1&&e.requestTime+Dm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(e){const t=e,{installationEntry:n,registrationPromise:r}=await Rc(t);return r?r.catch(console.error):Sc(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MR(e,t=!1){const n=e;return await LR(n),(await Sc(n,t)).token}async function LR(e){const{registrationPromise:t}=await Rc(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(e){if(!e||!e.options)throw ha("App Configuration");if(!e.name)throw ha("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ha(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ha(e){return jn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="installations",BR="installations-internal",UR=e=>{const t=e.getProvider("app").getImmediate(),n=FR(t),r=Rs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},$R=e=>{const t=e.getProvider("app").getImmediate(),n=Rs(t,Gm).getImmediate();return{getId:()=>OR(n),getToken:s=>MR(n,s)}};function jR(){pn(new Ke(Gm,UR,"PUBLIC")),pn(new Ke(BR,$R,"PRIVATE"))}jR();ke(Vm,Ic);ke(Vm,Ic,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="analytics",qR="firebase_id",HR="origin",zR=60*1e3,KR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Pc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=new Cl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ae=new Xi("analytics","Analytics",GR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(e){if(!e.startsWith(Pc)){const t=ae.create("invalid-gtag-resource",{gtagURL:e});return ee.warn(t.message),""}return e}function Wm(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function QR(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function YR(e,t){const n=QR("firebase-js-sdk-policy",{createScriptURL:WR}),r=document.createElement("script"),s=`${Pc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function XR(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function JR(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const l=(await Wm(n)).find(c=>c.measurementId===s);l&&await t[l.appId]}}catch(a){ee.error(a)}e("config",s,i)}async function ZR(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Wm(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&t[c.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){ee.error(i)}}function t1(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,l]=o;await ZR(e,t,n,a,l)}else if(i==="config"){const[a,l]=o;await JR(e,t,n,r,a,l)}else if(i==="consent"){const[a]=o;e("consent","update",a)}else if(i==="get"){const[a,l,c]=o;e("get",a,l,c)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){ee.error(a)}}return s}function e1(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=t1(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function n1(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Pc)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=30,s1=1e3;class i1{constructor(t={},n=s1){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Qm=new i1;function o1(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function a1(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:o1(r)},i=KR.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw ae.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function l1(e,t=Qm,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw ae.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw ae.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new h1;return setTimeout(async()=>{a.abort()},zR),Ym({appId:r,apiKey:s,measurementId:i},o,a,t)}async function Ym(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Qm){var i;const{appId:o,measurementId:a}=e;try{await c1(r,t)}catch(l){if(a)return ee.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await a1(e);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!u1(c)){if(s.deleteThrottleMetadata(o),a)return ee.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((i=c==null?void 0:c.customData)===null||i===void 0?void 0:i.httpStatus)===503?bu(n,s.intervalMillis,r1):bu(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),ee.debug(`Calling attemptFetch again in ${u} millis`),Ym(e,h,r,s)}}function c1(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(ae.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function u1(e){if(!(e instanceof vn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class h1{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function f1(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(){if(sd())try{await id()}catch(e){return ee.warn(ae.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ee.warn(ae.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function p1(e,t,n,r,s,i,o){var a;const l=l1(e);l.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&ee.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>ee.error(m)),t.push(l);const c=d1().then(m=>{if(m)return r.getId()}),[u,h]=await Promise.all([l,c]);n1(i)||YR(i,u.measurementId),s("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[HR]="firebase",f.update=!0,h!=null&&(f[qR]=h),s("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(t){this.app=t}_delete(){return delete Zr[this.app.options.appId],Promise.resolve()}}let Zr={},Nh=[];const Oh={};let fa="dataLayer",g1="gtag",Mh,Xm,Lh=!1;function _1(){const e=[];if(HE()&&e.push("This is a browser extension environment."),KE()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=ae.create("invalid-analytics-context",{errorInfo:t});ee.warn(n.message)}}function y1(e,t,n){_1();const r=e.options.appId;if(!r)throw ae.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ee.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ae.create("no-api-key");if(Zr[r]!=null)throw ae.create("already-exists",{id:r});if(!Lh){XR(fa);const{wrappedGtag:i,gtagCore:o}=e1(Zr,Nh,Oh,fa,g1);Xm=i,Mh=o,Lh=!0}return Zr[r]=p1(e,Nh,Oh,t,Mh,fa,n),new m1(e)}function E1(e=ud()){e=Ln(e);const t=Rs(e,Li);return t.isInitialized()?t.getImmediate():v1(e)}function v1(e,t={}){const n=Rs(e,Li);if(n.isInitialized()){const s=n.getImmediate();if(vi(t,n.getOptions()))return s;throw ae.create("already-initialized")}return n.initialize({options:t})}function T1(e,t,n,r){e=Ln(e),f1(Xm,Zr[e.app.options.appId],t,n,r).catch(s=>ee.error(s))}const Fh="@firebase/analytics",Bh="0.10.2";function w1(){pn(new Ke(Li,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return y1(r,s,n)},"PUBLIC")),pn(new Ke("analytics-internal",e,"PRIVATE")),ke(Fh,Bh),ke(Fh,Bh,"esm2017");function e(t){try{const n=t.getProvider(Li).getImmediate();return{logEvent:(r,s,i)=>T1(n,r,s,i)}}catch(n){throw ae.create("interop-component-reg-failed",{reason:n})}}}w1();const Jm=my(SE);Jm.use(eR);const I1={apiKey:"AIzaSyC7ey0CwLjDiBWEFDFJKIIhqbarjwpZel0",authDomain:"library-spa-bcaa8.firebaseapp.com",projectId:"library-spa-bcaa8",storageBucket:"library-spa-bcaa8.appspot.com",messagingSenderId:"537920377418",appId:"1:537920377418:web:f8d2da5c2da1b802180cb3",measurementId:"G-N86HR887YX"},A1=cd(I1);E1(A1);Jm.mount("#app");export{bo as _,V1 as a,DA as b,aa as c,Is as d,Mo as e,te as f,la as g,it as h,wt as i,S1 as j,k_ as k,Ot as o,R1 as p,eR as r};
