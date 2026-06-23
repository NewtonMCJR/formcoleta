var Q2=Object.defineProperty;var X2=(n,e,t)=>e in n?Q2(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var g=(n,e,t)=>X2(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const J2=()=>{};var cc={};/**
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
 */const Gu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Z2=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Wu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,f=u?n[s+2]:0,m=i>>2,_=(i&3)<<4|l>>4;let S=(l&15)<<2|f>>6,O=f&63;u||(O=64,a||(S=64)),r.push(t[m],t[_],t[S],t[O])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Gu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Z2(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const _=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||f==null||_==null)throw new ed;const S=i<<2|l>>4;if(r.push(S),f!==64){const O=l<<4&240|f>>2;if(r.push(O),_!==64){const D=f<<6&192|_;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ed extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const td=function(n){const e=Gu(n);return Wu.encodeByteArray(e,!0)},Ku=function(n){return td(n).replace(/\./g,"")},Yu=function(n){try{return Wu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rd=()=>nd().__FIREBASE_DEFAULTS__,sd=()=>{if(typeof process>"u"||typeof cc>"u")return;const n=cc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},id=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Yu(n[1]);return e&&JSON.parse(e)},Qu=()=>{try{return J2()||rd()||sd()||id()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},od=n=>{var e;return(e=Qu())==null?void 0:e[`_${n}`]};/**
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
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ad(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function ld(){var e;const n=(e=Qu())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ud(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function hd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dd(){return!ld()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fd(){try{return typeof indexedDB=="object"}catch{return!1}}function pd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const md="FirebaseError";class zt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=md,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,us.prototype.create)}}class us{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?gd(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new zt(s,l,r)}}function gd(n,e){return n.replace(wd,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const wd=/\{\$([^}]+)}/g;/**
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
 */function Xu(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _d(n,e){const t=new yd(n,e);return t.subscribe.bind(t)}class yd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ed(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=yo),s.error===void 0&&(s.error=yo),s.complete===void 0&&(s.complete=yo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ed(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function yo(){}/**
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
 */function Nn(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function oa(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}class On{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var se;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(se||(se={}));const bd={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},vd=se.INFO,Ad={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Td=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Ad[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class aa{constructor(e){this.name=e,this._logLevel=vd,this._logHandler=Td,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Id=(n,e)=>e.some(t=>n instanceof t);let uc,hc;function Cd(){return uc||(uc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xd(){return hc||(hc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ju=new WeakMap,Vo=new WeakMap,Zu=new WeakMap,Eo=new WeakMap,la=new WeakMap;function Rd(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(ln(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ju.set(t,n)}).catch(()=>{}),la.set(e,n),e}function Sd(n){if(Vo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Vo.set(n,e)}let Do={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Vo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Zu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ln(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Pd(n){Do=n(Do)}function kd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(bo(this),e,...t);return Zu.set(r,e.sort?e.sort():[e]),ln(r)}:xd().includes(n)?function(...e){return n.apply(bo(this),e),ln(Ju.get(this))}:function(...e){return ln(n.apply(bo(this),e))}}function Nd(n){return typeof n=="function"?kd(n):(n instanceof IDBTransaction&&Sd(n),Id(n,Cd())?new Proxy(n,Do):n)}function ln(n){if(n instanceof IDBRequest)return Rd(n);if(Eo.has(n))return Eo.get(n);const e=Nd(n);return e!==n&&(Eo.set(n,e),la.set(e,n)),e}const bo=n=>la.get(n);function Od(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=ln(a);return r&&a.addEventListener("upgradeneeded",u=>{r(ln(a.result),u.oldVersion,u.newVersion,ln(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Vd=["get","getKey","getAll","getAllKeys","count"],Dd=["put","add","delete","clear"],vo=new Map;function dc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(vo.get(e))return vo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Dd.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Vd.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[t](...l),s&&u.done]))[0]};return vo.set(e,i),i}Pd(n=>({...n,get:(e,t,r)=>dc(e,t)||n.get(e,t,r),has:(e,t)=>!!dc(e,t)||n.has(e,t)}));/**
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
 */class Ld{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Md(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Md(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lo="@firebase/app",fc="0.15.0";/**
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
 */const qt=new aa("@firebase/app"),Bd="@firebase/app-compat",Fd="@firebase/analytics-compat",Ud="@firebase/analytics",$d="@firebase/app-check-compat",Hd="@firebase/app-check",qd="@firebase/auth",jd="@firebase/auth-compat",zd="@firebase/database",Gd="@firebase/data-connect",Wd="@firebase/database-compat",Kd="@firebase/functions",Yd="@firebase/functions-compat",Qd="@firebase/installations",Xd="@firebase/installations-compat",Jd="@firebase/messaging",Zd="@firebase/messaging-compat",e0="@firebase/performance",t0="@firebase/performance-compat",n0="@firebase/remote-config",r0="@firebase/remote-config-compat",s0="@firebase/storage",i0="@firebase/storage-compat",o0="@firebase/firestore",a0="@firebase/ai",l0="@firebase/firestore-compat",c0="firebase",u0="12.15.0",h0={[Lo]:"fire-core",[Bd]:"fire-core-compat",[Ud]:"fire-analytics",[Fd]:"fire-analytics-compat",[Hd]:"fire-app-check",[$d]:"fire-app-check-compat",[qd]:"fire-auth",[jd]:"fire-auth-compat",[zd]:"fire-rtdb",[Gd]:"fire-data-connect",[Wd]:"fire-rtdb-compat",[Kd]:"fire-fn",[Yd]:"fire-fn-compat",[Qd]:"fire-iid",[Xd]:"fire-iid-compat",[Jd]:"fire-fcm",[Zd]:"fire-fcm-compat",[e0]:"fire-perf",[t0]:"fire-perf-compat",[n0]:"fire-rc",[r0]:"fire-rc-compat",[s0]:"fire-gcs",[i0]:"fire-gcs-compat",[o0]:"fire-fst",[l0]:"fire-fst-compat",[a0]:"fire-vertex","fire-js":"fire-js",[c0]:"fire-js-all"};/**
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
 */const d0=new Map,f0=new Map,pc=new Map;function mc(n,e){try{n.container.addComponent(e)}catch(t){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Vn(n){const e=n.name;if(pc.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;pc.set(e,n);for(const t of d0.values())mc(t,n);for(const t of f0.values())mc(t,n);return!0}function en(n){return n==null?!1:n.settings!==void 0}/**
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
 */const p0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ca=new us("app","Firebase",p0);/**
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
 */const hs=u0;function Dt(n,e,t){let r=h0[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(a.join(" "));return}Vn(new On(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const m0="firebase-heartbeat-database",g0=1,Qr="firebase-heartbeat-store";let Ao=null;function e1(){return Ao||(Ao=Od(m0,g0,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Qr)}catch(t){console.warn(t)}}}}).catch(n=>{throw ca.create("idb-open",{originalErrorMessage:n.message})})),Ao}async function w0(n){try{const t=(await e1()).transaction(Qr),r=await t.objectStore(Qr).get(t1(n));return await t.done,r}catch(e){if(e instanceof zt)qt.warn(e.message);else{const t=ca.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(t.message)}}}async function gc(n,e){try{const r=(await e1()).transaction(Qr,"readwrite");await r.objectStore(Qr).put(e,t1(n)),await r.done}catch(t){if(t instanceof zt)qt.warn(t.message);else{const r=ca.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});qt.warn(r.message)}}}function t1(n){return`${n.name}!${n.options.appId}`}/**
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
 */const _0=1024,y0=30;class E0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new v0(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>y0){const a=A0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){qt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wc(),{heartbeatsToSend:r,unsentEntries:s}=b0(this._heartbeatsCache.heartbeats),i=Ku(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return qt.warn(t),""}}}function wc(){return new Date().toISOString().substring(0,10)}function b0(n,e=_0){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),_c(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),_c(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class v0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fd()?pd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await w0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return gc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return gc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function _c(n){return Ku(JSON.stringify({version:2,heartbeats:n})).length}function A0(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function T0(n){Vn(new On("platform-logger",e=>new Ld(e),"PRIVATE")),Vn(new On("heartbeat",e=>new E0(e),"PRIVATE")),Dt(Lo,fc,n),Dt(Lo,fc,"esm2020"),Dt("fire-js","")}T0("");function n1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const I0=n1,r1=new us("auth","Firebase",n1());/**
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
 */const ri=new aa("@firebase/auth");function C0(n,...e){ri.logLevel<=se.WARN&&ri.warn(`Auth (${hs}): ${n}`,...e)}function Ys(n,...e){ri.logLevel<=se.ERROR&&ri.error(`Auth (${hs}): ${n}`,...e)}/**
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
 */function yc(n,...e){throw ua(n,...e)}function s1(n,...e){return ua(n,...e)}function i1(n,e,t){const r={...I0(),[e]:t};return new us("auth","Firebase",r).create(e,{appName:n.name})}function Qs(n){return i1(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ua(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return r1.create(n,...e)}function le(n,e,...t){if(!n)throw ua(e,...t)}function Br(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ys(e),new Error(e)}function si(n,e){n||Br(e)}function x0(){return Ec()==="http:"||Ec()==="https:"}function Ec(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function R0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(x0()||ud()||"connection"in navigator)?navigator.onLine:!0}function S0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ds{constructor(e,t){this.shortDelay=e,this.longDelay=t,si(t>e,"Short delay should be less than long delay!"),this.isMobile=ad()||hd()}get(){return R0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function P0(n,e){si(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class o1{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const k0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const N0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],O0=new ds(3e4,6e4);function a1(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Pi(n,e,t,r,s={}){return l1(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Xu({...a,key:n.config.apiKey}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const f={method:e,headers:u,...i};return cd()||(f.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&oa(n.emulatorConfig.host)&&(f.credentials="include"),o1.fetch()(await c1(n,n.config.apiHost,t,l),f)})}async function l1(n,e,t){n._canInitEmulator=!1;const r={...k0,...e};try{const s=new V0(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Bs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,f]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bs(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Bs(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Bs(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw i1(n,m,f);yc(n,m)}}catch(s){if(s instanceof zt)throw s;yc(n,"network-request-failed",{message:String(s)})}}async function c1(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?P0(n.config,s):`${n.config.apiScheme}://${s}`;return N0.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class V0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(s1(this.auth,"network-request-failed")),O0.get())})}}function Bs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=s1(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function D0(n,e){return Pi(n,"POST","/v1/accounts:delete",e)}async function ii(n,e){return Pi(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function L0(n,e=!1){const t=Nn(n),r=await t.getIdToken(e),s=u1(r);le(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Fr(To(s.auth_time)),issuedAtTime:Fr(To(s.iat)),expirationTime:Fr(To(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function To(n){return Number(n)*1e3}function u1(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ys("JWT malformed, contained fewer than 3 sections"),null;try{const s=Yu(t);return s?JSON.parse(s):(Ys("Failed to decode base64 JWT payload"),null)}catch(s){return Ys("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bc(n){const e=u1(n);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mo(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof zt&&M0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function M0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class B0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Bo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fr(this.lastLoginAt),this.creationTime=Fr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oi(n){var _;const e=n.auth,t=await n.getIdToken(),r=await Mo(n,ii(e,{idToken:t}));le(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(_=s.providerUserInfo)!=null&&_.length?h1(s.providerUserInfo):[],a=U0(n.providerData,i),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Bo(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function F0(n){const e=Nn(n);await oi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function U0(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function h1(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function $0(n,e){const t=await l1(n,{},async()=>{const r=Xu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await c1(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&oa(n.emulatorConfig.host)&&(u.credentials="include"),o1.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function H0(n,e){return Pi(n,"POST","/v2/accounts:revokeToken",a1(n,e))}/**
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
 */class Wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){le(e.length!==0,"internal-error");const t=bc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await $0(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Wn;return r&&(le(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wn,this.toJSON())}_performRefresh(){return Br("not implemented")}}/**
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
 */function Jt(n,e){le(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ot{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new B0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Bo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Mo(this,this.stsTokenManager.getToken(this.auth,e));return le(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return L0(this,e)}reload(){return F0(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ot({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await oi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(en(this.auth.app))return Promise.reject(Qs(this.auth));const e=await this.getIdToken();return await Mo(this,D0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,f=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:_,emailVerified:S,isAnonymous:O,providerData:D,stsTokenManager:U}=t;le(_&&U,e,"internal-error");const L=Wn.fromJSON(this.name,U);le(typeof _=="string",e,"internal-error"),Jt(r,e.name),Jt(s,e.name),le(typeof S=="boolean",e,"internal-error"),le(typeof O=="boolean",e,"internal-error"),Jt(i,e.name),Jt(a,e.name),Jt(l,e.name),Jt(u,e.name),Jt(f,e.name),Jt(m,e.name);const H=new Ot({uid:_,auth:e,email:s,emailVerified:S,displayName:r,isAnonymous:O,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:L,createdAt:f,lastLoginAt:m});return D&&Array.isArray(D)&&(H.providerData=D.map(re=>({...re}))),u&&(H._redirectEventId=u),H}static async _fromIdTokenResponse(e,t,r=!1){const s=new Wn;s.updateFromServerResponse(t);const i=new Ot({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await oi(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?h1(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Wn;l.updateFromIdToken(r);const u=new Ot({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Bo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,f),u}}/**
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
 */const vc=new Map;function Cn(n){si(n instanceof Function,"Expected a class definition");let e=vc.get(n);return e?(si(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,vc.set(n,e),e)}/**
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
 */class d1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}d1.type="NONE";const Ac=d1;/**
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
 */function Io(n,e,t){return`firebase:${n}:${e}:${t}`}class Kn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Io(this.userKey,s.apiKey,i),this.fullPersistenceKey=Io("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ii(this.auth,{idToken:e}).catch(()=>{});return t?Ot._fromGetAccountInfoResponse(this.auth,t,e):null}return Ot._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Kn(Cn(Ac),e,r);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||Cn(Ac);const a=Io(r,e.config.apiKey,e.name);let l=null;for(const f of t)try{const m=await f._get(a);if(m){let _;if(typeof m=="string"){const S=await ii(e,{idToken:m}).catch(()=>{});if(!S)break;_=await Ot._fromGetAccountInfoResponse(e,S,m)}else _=Ot._fromJSON(e,m);f!==i&&(l=_),i=f;break}}catch{}const u=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Kn(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async f=>{if(f!==i)try{await f._remove(a)}catch{}})),new Kn(i,e,r))}}/**
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
 */function Tc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(G0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(q0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(K0(e))return"Blackberry";if(Y0(e))return"Webos";if(j0(e))return"Safari";if((e.includes("chrome/")||z0(e))&&!e.includes("edge/"))return"Chrome";if(W0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function q0(n=Ct()){return/firefox\//i.test(n)}function j0(n=Ct()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function z0(n=Ct()){return/crios\//i.test(n)}function G0(n=Ct()){return/iemobile/i.test(n)}function W0(n=Ct()){return/android/i.test(n)}function K0(n=Ct()){return/blackberry/i.test(n)}function Y0(n=Ct()){return/webos/i.test(n)}/**
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
 */function f1(n,e=[]){let t;switch(n){case"Browser":t=Tc(Ct());break;case"Worker":t=`${Tc(Ct())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${hs}/${r}`}/**
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
 */class Q0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function X0(n,e={}){return Pi(n,"GET","/v2/passwordPolicy",a1(n,e))}/**
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
 */const J0=6;class Z0{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??J0,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ef{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ic(this),this.idTokenSubscription=new Ic(this),this.beforeStateQueue=new Q0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=r1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Cn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Kn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ii(this,{idToken:e}),r=await Ot._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(en(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await oi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=S0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(en(this.app))return Promise.reject(Qs(this));const t=e?Nn(e):null;return t&&le(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return en(this.app)?Promise.reject(Qs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return en(this.app)?Promise.reject(Qs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await X0(this),t=new Z0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new us("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await H0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Cn(e)||this._popupRedirectResolver;le(t,this,"argument-error"),this.redirectPersistenceManager=await Kn.create(this,[Cn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=f1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(en(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&C0(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function tf(n){return Nn(n)}class Ic{constructor(e){this.auth=e,this.observer=null,this.addObserver=_d(t=>this.observer=t)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function nf(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Cn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}new ds(3e4,6e4);/**
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
 */new ds(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
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
 */new ds(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
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
 */new ds(5e3,15e3);var Cc="@firebase/auth",xc="1.13.3";/**
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
 */class rf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function sf(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function of(n){Vn(new On("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;le(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:f1(n)},f=new ef(r,s,i,u);return nf(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Vn(new On("auth-internal",e=>{const t=tf(e.getProvider("auth").getImmediate());return(r=>new rf(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(Cc,xc,sf(n)),Dt(Cc,xc,"esm2020")}/**
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
 */const af=5*60;od("authIdTokenMaxAge");of("Browser");var Rc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ha,lf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,w){function E(){}E.prototype=w.prototype,A.F=w.prototype,A.prototype=new E,A.prototype.constructor=A,A.D=function(T,v,C){for(var y=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)y[Ze-2]=arguments[Ze];return w.prototype[v].apply(T,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,w,E){E||(E=0);const T=Array(16);if(typeof w=="string")for(var v=0;v<16;++v)T[v]=w.charCodeAt(E++)|w.charCodeAt(E++)<<8|w.charCodeAt(E++)<<16|w.charCodeAt(E++)<<24;else for(v=0;v<16;++v)T[v]=w[E++]|w[E++]<<8|w[E++]<<16|w[E++]<<24;w=A.g[0],E=A.g[1],v=A.g[2];let C=A.g[3],y;y=w+(C^E&(v^C))+T[0]+3614090360&4294967295,w=E+(y<<7&4294967295|y>>>25),y=C+(v^w&(E^v))+T[1]+3905402710&4294967295,C=w+(y<<12&4294967295|y>>>20),y=v+(E^C&(w^E))+T[2]+606105819&4294967295,v=C+(y<<17&4294967295|y>>>15),y=E+(w^v&(C^w))+T[3]+3250441966&4294967295,E=v+(y<<22&4294967295|y>>>10),y=w+(C^E&(v^C))+T[4]+4118548399&4294967295,w=E+(y<<7&4294967295|y>>>25),y=C+(v^w&(E^v))+T[5]+1200080426&4294967295,C=w+(y<<12&4294967295|y>>>20),y=v+(E^C&(w^E))+T[6]+2821735955&4294967295,v=C+(y<<17&4294967295|y>>>15),y=E+(w^v&(C^w))+T[7]+4249261313&4294967295,E=v+(y<<22&4294967295|y>>>10),y=w+(C^E&(v^C))+T[8]+1770035416&4294967295,w=E+(y<<7&4294967295|y>>>25),y=C+(v^w&(E^v))+T[9]+2336552879&4294967295,C=w+(y<<12&4294967295|y>>>20),y=v+(E^C&(w^E))+T[10]+4294925233&4294967295,v=C+(y<<17&4294967295|y>>>15),y=E+(w^v&(C^w))+T[11]+2304563134&4294967295,E=v+(y<<22&4294967295|y>>>10),y=w+(C^E&(v^C))+T[12]+1804603682&4294967295,w=E+(y<<7&4294967295|y>>>25),y=C+(v^w&(E^v))+T[13]+4254626195&4294967295,C=w+(y<<12&4294967295|y>>>20),y=v+(E^C&(w^E))+T[14]+2792965006&4294967295,v=C+(y<<17&4294967295|y>>>15),y=E+(w^v&(C^w))+T[15]+1236535329&4294967295,E=v+(y<<22&4294967295|y>>>10),y=w+(v^C&(E^v))+T[1]+4129170786&4294967295,w=E+(y<<5&4294967295|y>>>27),y=C+(E^v&(w^E))+T[6]+3225465664&4294967295,C=w+(y<<9&4294967295|y>>>23),y=v+(w^E&(C^w))+T[11]+643717713&4294967295,v=C+(y<<14&4294967295|y>>>18),y=E+(C^w&(v^C))+T[0]+3921069994&4294967295,E=v+(y<<20&4294967295|y>>>12),y=w+(v^C&(E^v))+T[5]+3593408605&4294967295,w=E+(y<<5&4294967295|y>>>27),y=C+(E^v&(w^E))+T[10]+38016083&4294967295,C=w+(y<<9&4294967295|y>>>23),y=v+(w^E&(C^w))+T[15]+3634488961&4294967295,v=C+(y<<14&4294967295|y>>>18),y=E+(C^w&(v^C))+T[4]+3889429448&4294967295,E=v+(y<<20&4294967295|y>>>12),y=w+(v^C&(E^v))+T[9]+568446438&4294967295,w=E+(y<<5&4294967295|y>>>27),y=C+(E^v&(w^E))+T[14]+3275163606&4294967295,C=w+(y<<9&4294967295|y>>>23),y=v+(w^E&(C^w))+T[3]+4107603335&4294967295,v=C+(y<<14&4294967295|y>>>18),y=E+(C^w&(v^C))+T[8]+1163531501&4294967295,E=v+(y<<20&4294967295|y>>>12),y=w+(v^C&(E^v))+T[13]+2850285829&4294967295,w=E+(y<<5&4294967295|y>>>27),y=C+(E^v&(w^E))+T[2]+4243563512&4294967295,C=w+(y<<9&4294967295|y>>>23),y=v+(w^E&(C^w))+T[7]+1735328473&4294967295,v=C+(y<<14&4294967295|y>>>18),y=E+(C^w&(v^C))+T[12]+2368359562&4294967295,E=v+(y<<20&4294967295|y>>>12),y=w+(E^v^C)+T[5]+4294588738&4294967295,w=E+(y<<4&4294967295|y>>>28),y=C+(w^E^v)+T[8]+2272392833&4294967295,C=w+(y<<11&4294967295|y>>>21),y=v+(C^w^E)+T[11]+1839030562&4294967295,v=C+(y<<16&4294967295|y>>>16),y=E+(v^C^w)+T[14]+4259657740&4294967295,E=v+(y<<23&4294967295|y>>>9),y=w+(E^v^C)+T[1]+2763975236&4294967295,w=E+(y<<4&4294967295|y>>>28),y=C+(w^E^v)+T[4]+1272893353&4294967295,C=w+(y<<11&4294967295|y>>>21),y=v+(C^w^E)+T[7]+4139469664&4294967295,v=C+(y<<16&4294967295|y>>>16),y=E+(v^C^w)+T[10]+3200236656&4294967295,E=v+(y<<23&4294967295|y>>>9),y=w+(E^v^C)+T[13]+681279174&4294967295,w=E+(y<<4&4294967295|y>>>28),y=C+(w^E^v)+T[0]+3936430074&4294967295,C=w+(y<<11&4294967295|y>>>21),y=v+(C^w^E)+T[3]+3572445317&4294967295,v=C+(y<<16&4294967295|y>>>16),y=E+(v^C^w)+T[6]+76029189&4294967295,E=v+(y<<23&4294967295|y>>>9),y=w+(E^v^C)+T[9]+3654602809&4294967295,w=E+(y<<4&4294967295|y>>>28),y=C+(w^E^v)+T[12]+3873151461&4294967295,C=w+(y<<11&4294967295|y>>>21),y=v+(C^w^E)+T[15]+530742520&4294967295,v=C+(y<<16&4294967295|y>>>16),y=E+(v^C^w)+T[2]+3299628645&4294967295,E=v+(y<<23&4294967295|y>>>9),y=w+(v^(E|~C))+T[0]+4096336452&4294967295,w=E+(y<<6&4294967295|y>>>26),y=C+(E^(w|~v))+T[7]+1126891415&4294967295,C=w+(y<<10&4294967295|y>>>22),y=v+(w^(C|~E))+T[14]+2878612391&4294967295,v=C+(y<<15&4294967295|y>>>17),y=E+(C^(v|~w))+T[5]+4237533241&4294967295,E=v+(y<<21&4294967295|y>>>11),y=w+(v^(E|~C))+T[12]+1700485571&4294967295,w=E+(y<<6&4294967295|y>>>26),y=C+(E^(w|~v))+T[3]+2399980690&4294967295,C=w+(y<<10&4294967295|y>>>22),y=v+(w^(C|~E))+T[10]+4293915773&4294967295,v=C+(y<<15&4294967295|y>>>17),y=E+(C^(v|~w))+T[1]+2240044497&4294967295,E=v+(y<<21&4294967295|y>>>11),y=w+(v^(E|~C))+T[8]+1873313359&4294967295,w=E+(y<<6&4294967295|y>>>26),y=C+(E^(w|~v))+T[15]+4264355552&4294967295,C=w+(y<<10&4294967295|y>>>22),y=v+(w^(C|~E))+T[6]+2734768916&4294967295,v=C+(y<<15&4294967295|y>>>17),y=E+(C^(v|~w))+T[13]+1309151649&4294967295,E=v+(y<<21&4294967295|y>>>11),y=w+(v^(E|~C))+T[4]+4149444226&4294967295,w=E+(y<<6&4294967295|y>>>26),y=C+(E^(w|~v))+T[11]+3174756917&4294967295,C=w+(y<<10&4294967295|y>>>22),y=v+(w^(C|~E))+T[2]+718787259&4294967295,v=C+(y<<15&4294967295|y>>>17),y=E+(C^(v|~w))+T[9]+3951481745&4294967295,A.g[0]=A.g[0]+w&4294967295,A.g[1]=A.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,A.g[2]=A.g[2]+v&4294967295,A.g[3]=A.g[3]+C&4294967295}r.prototype.v=function(A,w){w===void 0&&(w=A.length);const E=w-this.blockSize,T=this.C;let v=this.h,C=0;for(;C<w;){if(v==0)for(;C<=E;)s(this,A,C),C+=this.blockSize;if(typeof A=="string"){for(;C<w;)if(T[v++]=A.charCodeAt(C++),v==this.blockSize){s(this,T),v=0;break}}else for(;C<w;)if(T[v++]=A[C++],v==this.blockSize){s(this,T),v=0;break}}this.h=v,this.o+=w},r.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var w=1;w<A.length-8;++w)A[w]=0;w=this.o*8;for(var E=A.length-8;E<A.length;++E)A[E]=w&255,w/=256;for(this.v(A),A=Array(16),w=0,E=0;E<4;++E)for(let T=0;T<32;T+=8)A[w++]=this.g[E]>>>T&255;return A};function i(A,w){var E=l;return Object.prototype.hasOwnProperty.call(E,A)?E[A]:E[A]=w(A)}function a(A,w){this.h=w;const E=[];let T=!0;for(let v=A.length-1;v>=0;v--){const C=A[v]|0;T&&C==w||(E[v]=C,T=!1)}this.g=E}var l={};function u(A){return-128<=A&&A<128?i(A,function(w){return new a([w|0],w<0?-1:0)}):new a([A|0],A<0?-1:0)}function f(A){if(isNaN(A)||!isFinite(A))return _;if(A<0)return L(f(-A));const w=[];let E=1;for(let T=0;A>=E;T++)w[T]=A/E|0,E*=4294967296;return new a(w,0)}function m(A,w){if(A.length==0)throw Error("number format error: empty string");if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(A.charAt(0)=="-")return L(m(A.substring(1),w));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=f(Math.pow(w,8));let T=_;for(let C=0;C<A.length;C+=8){var v=Math.min(8,A.length-C);const y=parseInt(A.substring(C,C+v),w);v<8?(v=f(Math.pow(w,v)),T=T.j(v).add(f(y))):(T=T.j(E),T=T.add(f(y)))}return T}var _=u(0),S=u(1),O=u(16777216);n=a.prototype,n.m=function(){if(U(this))return-L(this).m();let A=0,w=1;for(let E=0;E<this.g.length;E++){const T=this.i(E);A+=(T>=0?T:4294967296+T)*w,w*=4294967296}return A},n.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(D(this))return"0";if(U(this))return"-"+L(this).toString(A);const w=f(Math.pow(A,6));var E=this;let T="";for(;;){const v=ne(E,w).g;E=H(E,v.j(w));let C=((E.g.length>0?E.g[0]:E.h)>>>0).toString(A);if(E=v,D(E))return C+T;for(;C.length<6;)C="0"+C;T=C+T}},n.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function D(A){if(A.h!=0)return!1;for(let w=0;w<A.g.length;w++)if(A.g[w]!=0)return!1;return!0}function U(A){return A.h==-1}n.l=function(A){return A=H(this,A),U(A)?-1:D(A)?0:1};function L(A){const w=A.g.length,E=[];for(let T=0;T<w;T++)E[T]=~A.g[T];return new a(E,~A.h).add(S)}n.abs=function(){return U(this)?L(this):this},n.add=function(A){const w=Math.max(this.g.length,A.g.length),E=[];let T=0;for(let v=0;v<=w;v++){let C=T+(this.i(v)&65535)+(A.i(v)&65535),y=(C>>>16)+(this.i(v)>>>16)+(A.i(v)>>>16);T=y>>>16,C&=65535,y&=65535,E[v]=y<<16|C}return new a(E,E[E.length-1]&-2147483648?-1:0)};function H(A,w){return A.add(L(w))}n.j=function(A){if(D(this)||D(A))return _;if(U(this))return U(A)?L(this).j(L(A)):L(L(this).j(A));if(U(A))return L(this.j(L(A)));if(this.l(O)<0&&A.l(O)<0)return f(this.m()*A.m());const w=this.g.length+A.g.length,E=[];for(var T=0;T<2*w;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(let v=0;v<A.g.length;v++){const C=this.i(T)>>>16,y=this.i(T)&65535,Ze=A.i(v)>>>16,yn=A.i(v)&65535;E[2*T+2*v]+=y*yn,re(E,2*T+2*v),E[2*T+2*v+1]+=C*yn,re(E,2*T+2*v+1),E[2*T+2*v+1]+=y*Ze,re(E,2*T+2*v+1),E[2*T+2*v+2]+=C*Ze,re(E,2*T+2*v+2)}for(A=0;A<w;A++)E[A]=E[2*A+1]<<16|E[2*A];for(A=w;A<2*w;A++)E[A]=0;return new a(E,0)};function re(A,w){for(;(A[w]&65535)!=A[w];)A[w+1]+=A[w]>>>16,A[w]&=65535,w++}function de(A,w){this.g=A,this.h=w}function ne(A,w){if(D(w))throw Error("division by zero");if(D(A))return new de(_,_);if(U(A))return w=ne(L(A),w),new de(L(w.g),L(w.h));if(U(w))return w=ne(A,L(w)),new de(L(w.g),w.h);if(A.g.length>30){if(U(A)||U(w))throw Error("slowDivide_ only works with positive integers.");for(var E=S,T=w;T.l(A)<=0;)E=he(E),T=he(T);var v=we(E,1),C=we(T,1);for(T=we(T,2),E=we(E,2);!D(T);){var y=C.add(T);y.l(A)<=0&&(v=v.add(E),C=y),T=we(T,1),E=we(E,1)}return w=H(A,v.j(w)),new de(v,w)}for(v=_;A.l(w)>=0;){for(E=Math.max(1,Math.floor(A.m()/w.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),C=f(E),y=C.j(w);U(y)||y.l(A)>0;)E-=T,C=f(E),y=C.j(w);D(C)&&(C=S),v=v.add(C),A=H(A,y)}return new de(v,A)}n.B=function(A){return ne(this,A).h},n.and=function(A){const w=Math.max(this.g.length,A.g.length),E=[];for(let T=0;T<w;T++)E[T]=this.i(T)&A.i(T);return new a(E,this.h&A.h)},n.or=function(A){const w=Math.max(this.g.length,A.g.length),E=[];for(let T=0;T<w;T++)E[T]=this.i(T)|A.i(T);return new a(E,this.h|A.h)},n.xor=function(A){const w=Math.max(this.g.length,A.g.length),E=[];for(let T=0;T<w;T++)E[T]=this.i(T)^A.i(T);return new a(E,this.h^A.h)};function he(A){const w=A.g.length+1,E=[];for(let T=0;T<w;T++)E[T]=A.i(T)<<1|A.i(T-1)>>>31;return new a(E,A.h)}function we(A,w){const E=w>>5;w%=32;const T=A.g.length-E,v=[];for(let C=0;C<T;C++)v[C]=w>0?A.i(C+E)>>>w|A.i(C+E+1)<<32-w:A.i(C+E);return new a(v,A.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,lf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,ha=a}).apply(typeof Rc<"u"?Rc:typeof self<"u"?self:typeof window<"u"?window:{});var Fs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var p1,Dr,m1,Xs,Fo,g1,w1,_1;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fs=="object"&&Fs];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var I=o[p];if(!(I in h))break e;h=h[I]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var h=[],p;for(p in c)Object.prototype.hasOwnProperty.call(c,p)&&h.push([p,c[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,h){return o.call.apply(o.bind,arguments)}function f(o,c,h){return f=u,f.apply(null,arguments)}function m(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function _(o,c){function h(){}h.prototype=c.prototype,o.Z=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(p,I,R){for(var B=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)B[Z-2]=arguments[Z];return c.prototype[I].apply(p,B)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function O(o){const c=o.length;if(c>0){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function D(o,c){for(let p=1;p<arguments.length;p++){const I=arguments[p];var h=typeof I;if(h=h!="object"?h:I?Array.isArray(I)?"array":h:"null",h=="array"||h=="object"&&typeof I.length=="number"){h=o.length||0;const R=I.length||0;o.length=h+R;for(let B=0;B<R;B++)o[h+B]=I[B]}else o.push(I)}}class U{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(o){a.setTimeout(()=>{throw o},0)}function H(){var o=A;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class re{constructor(){this.h=this.g=null}add(c,h){const p=de.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var de=new U(()=>new ne,o=>o.reset());class ne{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let he,we=!1,A=new re,w=()=>{const o=Promise.resolve(void 0);he=()=>{o.then(E)}};function E(){for(var o;o=H();){try{o.h.call(o.g)}catch(h){L(h)}var c=de;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}we=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return o}();function y(o){return/^[\s\xa0]*$/.test(o)}function Ze(o,c){v.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}_(Ze,v),Ze.prototype.init=function(o,c){const h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ze.Z.h.call(this)},Ze.prototype.h=function(){Ze.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var yn="closure_listenable_"+(Math.random()*1e6|0),_2=0;function y2(o,c,h,p,I){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=I,this.key=++_2,this.da=this.fa=!1}function As(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ts(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function E2(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function ll(o){const c={};for(const h in o)c[h]=o[h];return c}const cl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ul(o,c){let h,p;for(let I=1;I<arguments.length;I++){p=arguments[I];for(h in p)o[h]=p[h];for(let R=0;R<cl.length;R++)h=cl[R],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function Is(o){this.src=o,this.g={},this.h=0}Is.prototype.add=function(o,c,h,p,I){const R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);const B=Yi(o,c,p,I);return B>-1?(c=o[B],h||(c.fa=!1)):(c=new y2(c,this.src,R,!!p,I),c.fa=h,o.push(c)),c};function Ki(o,c){const h=c.type;if(h in o.g){var p=o.g[h],I=Array.prototype.indexOf.call(p,c,void 0),R;(R=I>=0)&&Array.prototype.splice.call(p,I,1),R&&(As(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Yi(o,c,h,p){for(let I=0;I<o.length;++I){const R=o[I];if(!R.da&&R.listener==c&&R.capture==!!h&&R.ha==p)return I}return-1}var Qi="closure_lm_"+(Math.random()*1e6|0),Xi={};function hl(o,c,h,p,I){if(Array.isArray(c)){for(let R=0;R<c.length;R++)hl(o,c[R],h,p,I);return null}return h=pl(h),o&&o[yn]?o.J(c,h,l(p)?!!p.capture:!1,I):b2(o,c,h,!1,p,I)}function b2(o,c,h,p,I,R){if(!c)throw Error("Invalid event type");const B=l(I)?!!I.capture:!!I;let Z=Zi(o);if(Z||(o[Qi]=Z=new Is(o)),h=Z.add(c,h,p,B,R),h.proxy)return h;if(p=v2(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)C||(I=B),I===void 0&&(I=!1),o.addEventListener(c.toString(),p,I);else if(o.attachEvent)o.attachEvent(fl(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function v2(){function o(h){return c.call(o.src,o.listener,h)}const c=A2;return o}function dl(o,c,h,p,I){if(Array.isArray(c))for(var R=0;R<c.length;R++)dl(o,c[R],h,p,I);else p=l(p)?!!p.capture:!!p,h=pl(h),o&&o[yn]?(o=o.i,R=String(c).toString(),R in o.g&&(c=o.g[R],h=Yi(c,h,p,I),h>-1&&(As(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete o.g[R],o.h--)))):o&&(o=Zi(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Yi(c,h,p,I)),(h=o>-1?c[o]:null)&&Ji(h))}function Ji(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[yn])Ki(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(fl(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=Zi(c))?(Ki(h,o),h.h==0&&(h.src=null,c[Qi]=null)):As(o)}}}function fl(o){return o in Xi?Xi[o]:Xi[o]="on"+o}function A2(o,c){if(o.da)o=!0;else{c=new Ze(c,this);const h=o.listener,p=o.ha||o.src;o.fa&&Ji(o),o=h.call(p,c)}return o}function Zi(o){return o=o[Qi],o instanceof Is?o:null}var eo="__closure_events_fn_"+(Math.random()*1e9>>>0);function pl(o){return typeof o=="function"?o:(o[eo]||(o[eo]=function(c){return o.handleEvent(c)}),o[eo])}function He(){T.call(this),this.i=new Is(this),this.M=this,this.G=null}_(He,T),He.prototype[yn]=!0,He.prototype.removeEventListener=function(o,c,h,p){dl(this,o,c,h,p)};function Ke(o,c){var h,p=o.G;if(p)for(h=[];p;p=p.G)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new v(c,o);else if(c instanceof v)c.target=c.target||o;else{var I=c;c=new v(p,o),ul(c,I)}I=!0;let R,B;if(h)for(B=h.length-1;B>=0;B--)R=c.g=h[B],I=Cs(R,p,!0,c)&&I;if(R=c.g=o,I=Cs(R,p,!0,c)&&I,I=Cs(R,p,!1,c)&&I,h)for(B=0;B<h.length;B++)R=c.g=h[B],I=Cs(R,p,!1,c)&&I}He.prototype.N=function(){if(He.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const h=o.g[c];for(let p=0;p<h.length;p++)As(h[p]);delete o.g[c],o.h--}}this.G=null},He.prototype.J=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},He.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function Cs(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let I=!0;for(let R=0;R<c.length;++R){const B=c[R];if(B&&!B.da&&B.capture==h){const Z=B.listener,Pe=B.ha||B.src;B.fa&&Ki(o.i,B),I=Z.call(Pe,p)!==!1&&I}}return I&&!p.defaultPrevented}function T2(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=f(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function ml(o){o.g=T2(()=>{o.g=null,o.i&&(o.i=!1,ml(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class I2 extends T{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ml(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gr(o){T.call(this),this.h=o,this.g={}}_(gr,T);var gl=[];function wl(o){Ts(o.g,function(c,h){this.g.hasOwnProperty(h)&&Ji(c)},o),o.g={}}gr.prototype.N=function(){gr.Z.N.call(this),wl(this)},gr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var to=a.JSON.stringify,C2=a.JSON.parse,x2=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function _l(){}function yl(){}var wr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function no(){v.call(this,"d")}_(no,v);function ro(){v.call(this,"c")}_(ro,v);var En={},El=null;function xs(){return El=El||new He}En.Ia="serverreachability";function bl(o){v.call(this,En.Ia,o)}_(bl,v);function _r(o){const c=xs();Ke(c,new bl(c))}En.STAT_EVENT="statevent";function vl(o,c){v.call(this,En.STAT_EVENT,o),this.stat=c}_(vl,v);function Ye(o){const c=xs();Ke(c,new vl(c,o))}En.Ja="timingevent";function Al(o,c){v.call(this,En.Ja,o),this.size=c}_(Al,v);function yr(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function Er(){this.g=!0}Er.prototype.ua=function(){this.g=!1};function R2(o,c,h,p,I,R){o.info(function(){if(o.g)if(R){var B="",Z=R.split("&");for(let me=0;me<Z.length;me++){var Pe=Z[me].split("=");if(Pe.length>1){const Ne=Pe[0];Pe=Pe[1];const Rt=Ne.split("_");B=Rt.length>=2&&Rt[1]=="type"?B+(Ne+"="+Pe+"&"):B+(Ne+"=redacted&")}}}else B=null;else B=R;return"XMLHTTP REQ ("+p+") [attempt "+I+"]: "+c+`
`+h+`
`+B})}function S2(o,c,h,p,I,R,B){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+I+"]: "+c+`
`+h+`
`+R+" "+B})}function Hn(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+k2(o,h)+(p?" "+p:"")})}function P2(o,c){o.info(function(){return"TIMEOUT: "+c})}Er.prototype.info=function(){};function k2(o,c){if(!o.g)return c;if(!c)return null;try{const R=JSON.parse(c);if(R){for(o=0;o<R.length;o++)if(Array.isArray(R[o])){var h=R[o];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var I=p[0];if(I!="noop"&&I!="stop"&&I!="close")for(let B=1;B<p.length;B++)p[B]=""}}}}return to(R)}catch{return c}}var Rs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Tl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Il;function so(){}_(so,_l),so.prototype.g=function(){return new XMLHttpRequest},Il=new so;function br(o){return encodeURIComponent(String(o))}function N2(o){var c=1;o=o.split(":");const h=[];for(;c>0&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function Gt(o,c,h,p){this.j=o,this.i=c,this.l=h,this.S=p||1,this.V=new gr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Cl}function Cl(){this.i=null,this.g="",this.h=!1}var xl={},io={};function oo(o,c,h){o.M=1,o.A=Ps(xt(c)),o.u=h,o.R=!0,Rl(o,null)}function Rl(o,c){o.F=Date.now(),Ss(o),o.B=xt(o.A);var h=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),$l(h.i,"t",p),o.C=0,h=o.j.L,o.h=new Cl,o.g=ic(o.j,h?c:null,!o.u),o.P>0&&(o.O=new I2(f(o.Y,o,o.g),o.P)),c=o.V,h=o.g,p=o.ba;var I="readystatechange";Array.isArray(I)||(I&&(gl[0]=I.toString()),I=gl);for(let R=0;R<I.length;R++){const B=hl(h,I[R],p||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=o.J?ll(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),_r(),R2(o.i,o.v,o.B,o.l,o.S,o.u)}Gt.prototype.ba=function(o){o=o.target;const c=this.O;c&&Yt(o)==3?c.j():this.Y(o)},Gt.prototype.Y=function(o){try{if(o==this.g)e:{const Z=Yt(this.g),Pe=this.g.ya(),me=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||Kl(this.g)))){this.K||Z!=4||Pe==7||(Pe==8||me<=0?_r(3):_r(2)),ao(this);var c=this.g.ca();this.X=c;var h=O2(this);if(this.o=c==200,S2(this.i,this.v,this.B,this.l,this.S,Z,c),this.o){if(this.U&&!this.L){t:{if(this.g){var p,I=this.g;if((p=I.g?I.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(p)){var R=p;break t}}R=null}if(o=R)Hn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,lo(this,o);else{this.o=!1,this.m=3,Ye(12),bn(this),vr(this);break e}}if(this.R){o=!0;let Ne;for(;!this.K&&this.C<h.length;)if(Ne=V2(this,h),Ne==io){Z==4&&(this.m=4,Ye(14),o=!1),Hn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ne==xl){this.m=4,Ye(15),Hn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else Hn(this.i,this.l,Ne,null),lo(this,Ne);if(Sl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||h.length!=0||this.h.h||(this.m=1,Ye(16),o=!1),this.o=this.o&&o,!o)Hn(this.i,this.l,h,"[Invalid Chunked Response]"),bn(this),vr(this);else if(h.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),wo(B),B.P=!0,Ye(11))}}else Hn(this.i,this.l,h,null),lo(this,h);Z==4&&bn(this),this.o&&!this.K&&(Z==4?tc(this.j,this):(this.o=!1,Ss(this)))}else K2(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,Ye(12)):(this.m=0,Ye(13)),bn(this),vr(this)}}}catch{}finally{}};function O2(o){if(!Sl(o))return o.g.la();const c=Kl(o.g);if(c==="")return"";let h="";const p=c.length,I=Yt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return bn(o),vr(o),"";o.h.i=new a.TextDecoder}for(let R=0;R<p;R++)o.h.h=!0,h+=o.h.i.decode(c[R],{stream:!(I&&R==p-1)});return c.length=0,o.h.g+=h,o.C=0,o.h.g}function Sl(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function V2(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?io:(h=Number(c.substring(h,p)),isNaN(h)?xl:(p+=1,p+h>c.length?io:(c=c.slice(p,p+h),o.C=p+h,c)))}Gt.prototype.cancel=function(){this.K=!0,bn(this)};function Ss(o){o.T=Date.now()+o.H,Pl(o,o.H)}function Pl(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=yr(f(o.aa,o),c)}function ao(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Gt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(P2(this.i,this.B),this.M!=2&&(_r(),Ye(17)),bn(this),this.m=2,vr(this)):Pl(this,this.T-o)};function vr(o){o.j.I==0||o.K||tc(o.j,o)}function bn(o){ao(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,wl(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function lo(o,c){try{var h=o.j;if(h.I!=0&&(h.g==o||co(h.h,o))){if(!o.L&&co(h.h,o)&&h.I==3){try{var p=h.Ba.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var I=p;if(I[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)Ds(h),Os(h);else break e;go(h),Ye(18)}}else h.xa=I[1],0<h.xa-h.K&&I[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=yr(f(h.Va,h),6e3));Ol(h.h)<=1&&h.ta&&(h.ta=void 0)}else An(h,11)}else if((o.L||h.g==o)&&Ds(h),!y(c))for(I=h.Ba.g.parse(c),c=0;c<I.length;c++){let me=I[c];const Ne=me[0];if(!(Ne<=h.K))if(h.K=Ne,me=me[1],h.I==2)if(me[0]=="c"){h.M=me[1],h.ba=me[2];const Rt=me[3];Rt!=null&&(h.ka=Rt,h.j.info("VER="+h.ka));const Tn=me[4];Tn!=null&&(h.za=Tn,h.j.info("SVER="+h.za));const Qt=me[5];Qt!=null&&typeof Qt=="number"&&Qt>0&&(p=1.5*Qt,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Xt=o.g;if(Xt){const Ms=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ms){var R=p.h;R.g||Ms.indexOf("spdy")==-1&&Ms.indexOf("quic")==-1&&Ms.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(uo(R,R.h),R.h=null))}if(p.G){const _o=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;_o&&(p.wa=_o,_e(p.J,p.G,_o))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var B=o;if(p.na=sc(p,p.L?p.ba:null,p.W),B.L){Vl(p.h,B);var Z=B,Pe=p.O;Pe&&(Z.H=Pe),Z.D&&(ao(Z),Ss(Z)),p.g=B}else Zl(p);h.i.length>0&&Vs(h)}else me[0]!="stop"&&me[0]!="close"||An(h,7);else h.I==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?An(h,7):mo(h):me[0]!="noop"&&h.l&&h.l.qa(me),h.A=0)}}_r(4)}catch{}}var D2=class{constructor(o,c){this.g=o,this.map=c}};function kl(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Nl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ol(o){return o.h?1:o.g?o.g.size:0}function co(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function uo(o,c){o.g?o.g.add(c):o.h=c}function Vl(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}kl.prototype.cancel=function(){if(this.i=Dl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Dl(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.G);return c}return O(o.i)}var Ll=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function L2(o,c){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const p=o[h].indexOf("=");let I,R=null;p>=0?(I=o[h].substring(0,p),R=o[h].substring(p+1)):I=o[h],c(I,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Wt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof Wt?(this.l=o.l,Ar(this,o.j),this.o=o.o,this.g=o.g,Tr(this,o.u),this.h=o.h,ho(this,Hl(o.i)),this.m=o.m):o&&(c=String(o).match(Ll))?(this.l=!1,Ar(this,c[1]||"",!0),this.o=Ir(c[2]||""),this.g=Ir(c[3]||"",!0),Tr(this,c[4]),this.h=Ir(c[5]||"",!0),ho(this,c[6]||"",!0),this.m=Ir(c[7]||"")):(this.l=!1,this.i=new xr(null,this.l))}Wt.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(Cr(c,Ml,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Cr(c,Ml,!0),"@"),o.push(br(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Cr(h,h.charAt(0)=="/"?F2:B2,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Cr(h,$2)),o.join("")},Wt.prototype.resolve=function(o){const c=xt(this);let h=!!o.j;h?Ar(c,o.j):h=!!o.o,h?c.o=o.o:h=!!o.g,h?c.g=o.g:h=o.u!=null;var p=o.h;if(h)Tr(c,o.u);else if(h=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var I=c.h.lastIndexOf("/");I!=-1&&(p=c.h.slice(0,I+1)+p)}if(I=p,I==".."||I==".")p="";else if(I.indexOf("./")!=-1||I.indexOf("/.")!=-1){p=I.lastIndexOf("/",0)==0,I=I.split("/");const R=[];for(let B=0;B<I.length;){const Z=I[B++];Z=="."?p&&B==I.length&&R.push(""):Z==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),p&&B==I.length&&R.push("")):(R.push(Z),p=!0)}p=R.join("/")}else p=I}return h?c.h=p:h=o.i.toString()!=="",h?ho(c,Hl(o.i)):h=!!o.m,h&&(c.m=o.m),c};function xt(o){return new Wt(o)}function Ar(o,c,h){o.j=h?Ir(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Tr(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function ho(o,c,h){c instanceof xr?(o.i=c,H2(o.i,o.l)):(h||(c=Cr(c,U2)),o.i=new xr(c,o.l))}function _e(o,c,h){o.i.set(c,h)}function Ps(o){return _e(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Ir(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Cr(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,M2),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function M2(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ml=/[#\/\?@]/g,B2=/[#\?:]/g,F2=/[#\?]/g,U2=/[#\?@]/g,$2=/#/g;function xr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function vn(o){o.g||(o.g=new Map,o.h=0,o.i&&L2(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=xr.prototype,n.add=function(o,c){vn(this),this.i=null,o=qn(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Bl(o,c){vn(o),c=qn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Fl(o,c){return vn(o),c=qn(o,c),o.g.has(c)}n.forEach=function(o,c){vn(this),this.g.forEach(function(h,p){h.forEach(function(I){o.call(c,I,p,this)},this)},this)};function Ul(o,c){vn(o);let h=[];if(typeof c=="string")Fl(o,c)&&(h=h.concat(o.g.get(qn(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)h=h.concat(o[c]);return h}n.set=function(o,c){return vn(this),this.i=null,o=qn(this,o),Fl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=Ul(this,o),o.length>0?String(o[0]):c):c};function $l(o,c,h){Bl(o,c),h.length>0&&(o.i=null,o.g.set(qn(o,c),O(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let p=0;p<c.length;p++){var h=c[p];const I=br(h);h=Ul(this,h);for(let R=0;R<h.length;R++){let B=I;h[R]!==""&&(B+="="+br(h[R])),o.push(B)}}return this.i=o.join("&")};function Hl(o){const c=new xr;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function qn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function H2(o,c){c&&!o.j&&(vn(o),o.i=null,o.g.forEach(function(h,p){const I=p.toLowerCase();p!=I&&(Bl(this,p),$l(this,I,h))},o)),o.j=c}function q2(o,c){const h=new Er;if(a.Image){const p=new Image;p.onload=m(Kt,h,"TestLoadImage: loaded",!0,c,p),p.onerror=m(Kt,h,"TestLoadImage: error",!1,c,p),p.onabort=m(Kt,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=m(Kt,h,"TestLoadImage: timeout",!1,c,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function j2(o,c){const h=new Er,p=new AbortController,I=setTimeout(()=>{p.abort(),Kt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(R=>{clearTimeout(I),R.ok?Kt(h,"TestPingServer: ok",!0,c):Kt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(I),Kt(h,"TestPingServer: error",!1,c)})}function Kt(o,c,h,p,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),p(h)}catch{}}function z2(){this.g=new x2}function fo(o){this.i=o.Sb||null,this.h=o.ab||!1}_(fo,_l),fo.prototype.g=function(){return new ks(this.i,this.h)};function ks(o,c){He.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}_(ks,He),n=ks.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,Sr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Rr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Sr(this)),this.g&&(this.readyState=3,Sr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ql(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function ql(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Rr(this):Sr(this),this.readyState==3&&ql(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Rr(this))},n.Na=function(o){this.g&&(this.response=o,Rr(this))},n.ga=function(){this.g&&Rr(this)};function Rr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Sr(o)}n.setRequestHeader=function(o,c){this.A.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Sr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ks.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function jl(o){let c="";return Ts(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function po(o,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=jl(h),typeof o=="string"?h!=null&&br(h):_e(o,c,h))}function ve(o){He.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}_(ve,He);var G2=/^https?$/i,W2=["POST","PUT"];n=ve.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Il.g(),this.g.onreadystatechange=S(f(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(R){zl(this,R);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var I in p)h.set(I,p[I]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const R of p.keys())h.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),I=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(W2,c,void 0)>=0)||p||I||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,B]of h)this.g.setRequestHeader(R,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(R){zl(this,R)}};function zl(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,Gl(o),Ns(o)}function Gl(o){o.A||(o.A=!0,Ke(o,"complete"),Ke(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Ke(this,"complete"),Ke(this,"abort"),Ns(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ns(this,!0)),ve.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Wl(this):this.Xa())},n.Xa=function(){Wl(this)};function Wl(o){if(o.h&&typeof i<"u"){if(o.v&&Yt(o)==4)setTimeout(o.Ca.bind(o),0);else if(Ke(o,"readystatechange"),Yt(o)==4){o.h=!1;try{const R=o.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=R===0){let B=String(o.D).match(Ll)[1]||null;!B&&a.self&&a.self.location&&(B=a.self.location.protocol.slice(0,-1)),p=!G2.test(B?B.toLowerCase():"")}h=p}if(h)Ke(o,"complete"),Ke(o,"success");else{o.o=6;try{var I=Yt(o)>2?o.g.statusText:""}catch{I=""}o.l=I+" ["+o.ca()+"]",Gl(o)}}finally{Ns(o)}}}}function Ns(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,c||Ke(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Yt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Yt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),C2(c)}};function Kl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function K2(o){const c={};o=(o.g&&Yt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(y(o[p]))continue;var h=N2(o[p]);const I=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=c[I]||[];c[I]=R,R.push(h)}E2(c,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Yl(o){this.za=0,this.i=[],this.j=new Er,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Pr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Pr("baseRetryDelayMs",5e3,o),this.Za=Pr("retryDelaySeedMs",1e4,o),this.Ta=Pr("forwardChannelMaxRetries",2,o),this.va=Pr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new kl(o&&o.concurrentRequestLimit),this.Ba=new z2,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Yl.prototype,n.ka=8,n.I=1,n.connect=function(o,c,h,p){Ye(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=sc(this,null,this.W),Vs(this)};function mo(o){if(Ql(o),o.I==3){var c=o.V++,h=xt(o.J);if(_e(h,"SID",o.M),_e(h,"RID",c),_e(h,"TYPE","terminate"),kr(o,h),c=new Gt(o,o.j,c),c.M=2,c.A=Ps(xt(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=ic(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Ss(c)}rc(o)}function Os(o){o.g&&(wo(o),o.g.cancel(),o.g=null)}function Ql(o){Os(o),o.v&&(a.clearTimeout(o.v),o.v=null),Ds(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Vs(o){if(!Nl(o.h)&&!o.m){o.m=!0;var c=o.Ea;he||w(),we||(he(),we=!0),A.add(c,o),o.D=0}}function Y2(o,c){return Ol(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=yr(f(o.Ea,o,c),nc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const I=new Gt(this,this.j,o);let R=this.o;if(this.U&&(R?(R=ll(R),ul(R,this.U)):R=this.U),this.u!==null||this.R||(I.J=R,R=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Jl(this,I,c),h=xt(this.J),_e(h,"RID",o),_e(h,"CVER",22),this.G&&_e(h,"X-HTTP-Session-Id",this.G),kr(this,h),R&&(this.R?c="headers="+br(jl(R))+"&"+c:this.u&&po(h,this.u,R)),uo(this.h,I),this.Ra&&_e(h,"TYPE","init"),this.S?(_e(h,"$req",c),_e(h,"SID","null"),I.U=!0,oo(I,h,null)):oo(I,h,c),this.I=2}}else this.I==3&&(o?Xl(this,o):this.i.length==0||Nl(this.h)||Xl(this))};function Xl(o,c){var h;c?h=c.l:h=o.V++;const p=xt(o.J);_e(p,"SID",o.M),_e(p,"RID",h),_e(p,"AID",o.K),kr(o,p),o.u&&o.o&&po(p,o.u,o.o),h=new Gt(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),c&&(o.i=c.G.concat(o.i)),c=Jl(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),uo(o.h,h),oo(h,p,c)}function kr(o,c){o.H&&Ts(o.H,function(h,p){_e(c,p,h)}),o.l&&Ts({},function(h,p){_e(c,p,h)})}function Jl(o,c,h){h=Math.min(o.i.length,h);const p=o.l?f(o.l.Ka,o.l,o):null;e:{var I=o.i;let Z=-1;for(;;){const Pe=["count="+h];Z==-1?h>0?(Z=I[0].g,Pe.push("ofs="+Z)):Z=0:Pe.push("ofs="+Z);let me=!0;for(let Ne=0;Ne<h;Ne++){var R=I[Ne].g;const Rt=I[Ne].map;if(R-=Z,R<0)Z=Math.max(0,I[Ne].g-100),me=!1;else try{R="req"+R+"_"||"";try{var B=Rt instanceof Map?Rt:Object.entries(Rt);for(const[Tn,Qt]of B){let Xt=Qt;l(Qt)&&(Xt=to(Qt)),Pe.push(R+Tn+"="+encodeURIComponent(Xt))}}catch(Tn){throw Pe.push(R+"type="+encodeURIComponent("_badmap")),Tn}}catch{p&&p(Rt)}}if(me){B=Pe.join("&");break e}}B=void 0}return o=o.i.splice(0,h),c.G=o,B}function Zl(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;he||w(),we||(he(),we=!0),A.add(c,o),o.A=0}}function go(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=yr(f(o.Da,o),nc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,ec(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=yr(f(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ye(10),Os(this),ec(this))};function wo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function ec(o){o.g=new Gt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=xt(o.na);_e(c,"RID","rpc"),_e(c,"SID",o.M),_e(c,"AID",o.K),_e(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&_e(c,"TO",o.ia),_e(c,"TYPE","xmlhttp"),kr(o,c),o.u&&o.o&&po(c,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=Ps(xt(c)),h.u=null,h.R=!0,Rl(h,o)}n.Va=function(){this.C!=null&&(this.C=null,Os(this),go(this),Ye(19))};function Ds(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function tc(o,c){var h=null;if(o.g==c){Ds(o),wo(o),o.g=null;var p=2}else if(co(o.h,c))h=c.G,Vl(o.h,c),p=1;else return;if(o.I!=0){if(c.o)if(p==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var I=o.D;p=xs(),Ke(p,new Al(p,h)),Vs(o)}else Zl(o);else if(I=c.m,I==3||I==0&&c.X>0||!(p==1&&Y2(o,c)||p==2&&go(o)))switch(h&&h.length>0&&(c=o.h,c.i=c.i.concat(h)),I){case 1:An(o,5);break;case 4:An(o,10);break;case 3:An(o,6);break;default:An(o,2)}}}function nc(o,c){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*c}function An(o,c){if(o.j.info("Error code "+c),c==2){var h=f(o.bb,o),p=o.Ua;const I=!p;p=new Wt(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ar(p,"https"),Ps(p),I?q2(p.toString(),h):j2(p.toString(),h)}else Ye(2);o.I=0,o.l&&o.l.pa(c),rc(o),Ql(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Ye(2)):(this.j.info("Failed to ping google.com"),Ye(1))};function rc(o){if(o.I=0,o.ja=[],o.l){const c=Dl(o.h);(c.length!=0||o.i.length!=0)&&(D(o.ja,c),D(o.ja,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.oa()}}function sc(o,c,h){var p=h instanceof Wt?xt(h):new Wt(h);if(p.g!="")c&&(p.g=c+"."+p.g),Tr(p,p.u);else{var I=a.location;p=I.protocol,c=c?c+"."+I.hostname:I.hostname,I=+I.port;const R=new Wt(null);p&&Ar(R,p),c&&(R.g=c),I&&Tr(R,I),h&&(R.h=h),p=R}return h=o.G,c=o.wa,h&&c&&_e(p,h,c),_e(p,"VER",o.ka),kr(o,p),p}function ic(o,c,h){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new ve(new fo({ab:h})):new ve(o.ma),c.Fa(o.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function oc(){}n=oc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ls(){}Ls.prototype.g=function(o,c){return new ot(o,c)};function ot(o,c){He.call(this),this.g=new Yl(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!y(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new jn(this)}_(ot,He),ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ot.prototype.close=function(){mo(this.g)},ot.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=to(o),o=h);c.i.push(new D2(c.Ya++,o)),c.I==3&&Vs(c)},ot.prototype.N=function(){this.g.l=null,delete this.j,mo(this.g),delete this.g,ot.Z.N.call(this)};function ac(o){no.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}_(ac,no);function lc(){ro.call(this),this.status=1}_(lc,ro);function jn(o){this.g=o}_(jn,oc),jn.prototype.ra=function(){Ke(this.g,"a")},jn.prototype.qa=function(o){Ke(this.g,new ac(o))},jn.prototype.pa=function(o){Ke(this.g,new lc)},jn.prototype.oa=function(){Ke(this.g,"b")},Ls.prototype.createWebChannel=Ls.prototype.g,ot.prototype.send=ot.prototype.o,ot.prototype.open=ot.prototype.m,ot.prototype.close=ot.prototype.close,_1=function(){return new Ls},w1=function(){return xs()},g1=En,Fo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Rs.NO_ERROR=0,Rs.TIMEOUT=8,Rs.HTTP_ERROR=6,Xs=Rs,Tl.COMPLETE="complete",m1=Tl,yl.EventType=wr,wr.OPEN="a",wr.CLOSE="b",wr.ERROR="c",wr.MESSAGE="d",He.prototype.listen=He.prototype.J,Dr=yl,ve.prototype.listenOnce=ve.prototype.K,ve.prototype.getLastError=ve.prototype.Ha,ve.prototype.getLastErrorCode=ve.prototype.ya,ve.prototype.getStatus=ve.prototype.ca,ve.prototype.getResponseJson=ve.prototype.La,ve.prototype.getResponseText=ve.prototype.la,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Fa,p1=ve}).apply(typeof Fs<"u"?Fs:typeof self<"u"?self:typeof window<"u"?window:{});/*!
 * re2js
 * RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
 *
 * @version v0.4.3
 * @author Alexey Vasiliev
 * @homepage https://github.com/le0pard/re2js#readme
 * @repository github:le0pard/re2js
 * @license MIT
 */const ye=class ye{};g(ye,"FOLD_CASE",1),g(ye,"LITERAL",2),g(ye,"CLASS_NL",4),g(ye,"DOT_NL",8),g(ye,"ONE_LINE",16),g(ye,"NON_GREEDY",32),g(ye,"PERL_X",64),g(ye,"UNICODE_GROUPS",128),g(ye,"WAS_DOLLAR",256),g(ye,"MATCH_NL",ye.CLASS_NL|ye.DOT_NL),g(ye,"PERL",ye.CLASS_NL|ye.ONE_LINE|ye.PERL_X|ye.UNICODE_GROUPS),g(ye,"POSIX",0),g(ye,"UNANCHORED",0),g(ye,"ANCHOR_START",1),g(ye,"ANCHOR_BOTH",2);let F=ye;class x{static toUpperCase(e){const t=String.fromCodePoint(e).toUpperCase();if(t.length>1)return e;const r=String.fromCodePoint(t.codePointAt(0)).toLowerCase();return r.length>1||r.codePointAt(0)!==e?e:t.codePointAt(0)}static toLowerCase(e){const t=String.fromCodePoint(e).toLowerCase();if(t.length>1)return e;const r=String.fromCodePoint(t.codePointAt(0)).toUpperCase();return r.length>1||r.codePointAt(0)!==e?e:t.codePointAt(0)}}g(x,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]]));const d=class d{};g(d,"CASE_ORBIT",new Map([[75,107],[107,8490],[8490,75],[83,115],[115,383],[383,83],[181,924],[924,956],[956,181],[197,229],[229,8491],[8491,197],[452,453],[453,454],[454,452],[455,456],[456,457],[457,455],[458,459],[459,460],[460,458],[497,498],[498,499],[499,497],[837,921],[921,953],[953,8126],[8126,837],[914,946],[946,976],[976,914],[917,949],[949,1013],[1013,917],[920,952],[952,977],[977,1012],[1012,920],[922,954],[954,1008],[1008,922],[928,960],[960,982],[982,928],[929,961],[961,1009],[1009,929],[931,962],[962,963],[963,931],[934,966],[966,981],[981,934],[937,969],[969,8486],[8486,937],[1042,1074],[1074,7296],[7296,1042],[1044,1076],[1076,7297],[7297,1044],[1054,1086],[1086,7298],[7298,1054],[1057,1089],[1089,7299],[7299,1057],[1058,1090],[1090,7300],[7300,7301],[7301,1058],[1066,1098],[1098,7302],[7302,1066],[1122,1123],[1123,7303],[7303,1122],[7304,42570],[42570,42571],[42571,7304],[7776,7777],[7777,7835],[7835,7776],[223,7838],[7838,223],[8064,8072],[8072,8064],[8065,8073],[8073,8065],[8066,8074],[8074,8066],[8067,8075],[8075,8067],[8068,8076],[8076,8068],[8069,8077],[8077,8069],[8070,8078],[8078,8070],[8071,8079],[8079,8071],[8080,8088],[8088,8080],[8081,8089],[8089,8081],[8082,8090],[8090,8082],[8083,8091],[8091,8083],[8084,8092],[8092,8084],[8085,8093],[8093,8085],[8086,8094],[8094,8086],[8087,8095],[8095,8087],[8096,8104],[8104,8096],[8097,8105],[8105,8097],[8098,8106],[8106,8098],[8099,8107],[8107,8099],[8100,8108],[8108,8100],[8101,8109],[8109,8101],[8102,8110],[8110,8102],[8103,8111],[8111,8103],[8115,8124],[8124,8115],[8131,8140],[8140,8131],[912,8147],[8147,912],[944,8163],[8163,944],[8179,8188],[8188,8179],[64261,64262],[64262,64261],[66560,66600],[66600,66560],[66561,66601],[66601,66561],[66562,66602],[66602,66562],[66563,66603],[66603,66563],[66564,66604],[66604,66564],[66565,66605],[66605,66565],[66566,66606],[66606,66566],[66567,66607],[66607,66567],[66568,66608],[66608,66568],[66569,66609],[66609,66569],[66570,66610],[66610,66570],[66571,66611],[66611,66571],[66572,66612],[66612,66572],[66573,66613],[66613,66573],[66574,66614],[66614,66574],[66575,66615],[66615,66575],[66576,66616],[66616,66576],[66577,66617],[66617,66577],[66578,66618],[66618,66578],[66579,66619],[66619,66579],[66580,66620],[66620,66580],[66581,66621],[66621,66581],[66582,66622],[66622,66582],[66583,66623],[66623,66583],[66584,66624],[66624,66584],[66585,66625],[66625,66585],[66586,66626],[66626,66586],[66587,66627],[66627,66587],[66588,66628],[66628,66588],[66589,66629],[66629,66589],[66590,66630],[66630,66590],[66591,66631],[66631,66591],[66592,66632],[66632,66592],[66593,66633],[66633,66593],[66594,66634],[66634,66594],[66595,66635],[66635,66595],[66596,66636],[66636,66596],[66597,66637],[66637,66597],[66598,66638],[66638,66598],[66599,66639],[66639,66599],[66736,66776],[66776,66736],[66737,66777],[66777,66737],[66738,66778],[66778,66738],[66739,66779],[66779,66739],[66740,66780],[66780,66740],[66741,66781],[66781,66741],[66742,66782],[66782,66742],[66743,66783],[66783,66743],[66744,66784],[66784,66744],[66745,66785],[66785,66745],[66746,66786],[66786,66746],[66747,66787],[66787,66747],[66748,66788],[66788,66748],[66749,66789],[66789,66749],[66750,66790],[66790,66750],[66751,66791],[66791,66751],[66752,66792],[66792,66752],[66753,66793],[66793,66753],[66754,66794],[66794,66754],[66755,66795],[66795,66755],[66756,66796],[66796,66756],[66757,66797],[66797,66757],[66758,66798],[66798,66758],[66759,66799],[66799,66759],[66760,66800],[66800,66760],[66761,66801],[66801,66761],[66762,66802],[66802,66762],[66763,66803],[66803,66763],[66764,66804],[66804,66764],[66765,66805],[66805,66765],[66766,66806],[66806,66766],[66767,66807],[66807,66767],[66768,66808],[66808,66768],[66769,66809],[66809,66769],[66770,66810],[66810,66770],[66771,66811],[66811,66771],[66928,66967],[66967,66928],[66929,66968],[66968,66929],[66930,66969],[66969,66930],[66931,66970],[66970,66931],[66932,66971],[66971,66932],[66933,66972],[66972,66933],[66934,66973],[66973,66934],[66935,66974],[66974,66935],[66936,66975],[66975,66936],[66937,66976],[66976,66937],[66938,66977],[66977,66938],[66940,66979],[66979,66940],[66941,66980],[66980,66941],[66942,66981],[66981,66942],[66943,66982],[66982,66943],[66944,66983],[66983,66944],[66945,66984],[66984,66945],[66946,66985],[66985,66946],[66947,66986],[66986,66947],[66948,66987],[66987,66948],[66949,66988],[66988,66949],[66950,66989],[66989,66950],[66951,66990],[66990,66951],[66952,66991],[66991,66952],[66953,66992],[66992,66953],[66954,66993],[66993,66954],[66956,66995],[66995,66956],[66957,66996],[66996,66957],[66958,66997],[66997,66958],[66959,66998],[66998,66959],[66960,66999],[66999,66960],[66961,67e3],[67e3,66961],[66962,67001],[67001,66962],[66964,67003],[67003,66964],[66965,67004],[67004,66965],[68736,68800],[68800,68736],[68737,68801],[68801,68737],[68738,68802],[68802,68738],[68739,68803],[68803,68739],[68740,68804],[68804,68740],[68741,68805],[68805,68741],[68742,68806],[68806,68742],[68743,68807],[68807,68743],[68744,68808],[68808,68744],[68745,68809],[68809,68745],[68746,68810],[68810,68746],[68747,68811],[68811,68747],[68748,68812],[68812,68748],[68749,68813],[68813,68749],[68750,68814],[68814,68750],[68751,68815],[68815,68751],[68752,68816],[68816,68752],[68753,68817],[68817,68753],[68754,68818],[68818,68754],[68755,68819],[68819,68755],[68756,68820],[68820,68756],[68757,68821],[68821,68757],[68758,68822],[68822,68758],[68759,68823],[68823,68759],[68760,68824],[68824,68760],[68761,68825],[68825,68761],[68762,68826],[68826,68762],[68763,68827],[68827,68763],[68764,68828],[68828,68764],[68765,68829],[68829,68765],[68766,68830],[68830,68766],[68767,68831],[68831,68767],[68768,68832],[68832,68768],[68769,68833],[68833,68769],[68770,68834],[68834,68770],[68771,68835],[68835,68771],[68772,68836],[68836,68772],[68773,68837],[68837,68773],[68774,68838],[68838,68774],[68775,68839],[68839,68775],[68776,68840],[68840,68776],[68777,68841],[68841,68777],[68778,68842],[68842,68778],[68779,68843],[68843,68779],[68780,68844],[68844,68780],[68781,68845],[68845,68781],[68782,68846],[68846,68782],[68783,68847],[68847,68783],[68784,68848],[68848,68784],[68785,68849],[68849,68785],[68786,68850],[68850,68786],[71840,71872],[71872,71840],[71841,71873],[71873,71841],[71842,71874],[71874,71842],[71843,71875],[71875,71843],[71844,71876],[71876,71844],[71845,71877],[71877,71845],[71846,71878],[71878,71846],[71847,71879],[71879,71847],[71848,71880],[71880,71848],[71849,71881],[71881,71849],[71850,71882],[71882,71850],[71851,71883],[71883,71851],[71852,71884],[71884,71852],[71853,71885],[71885,71853],[71854,71886],[71886,71854],[71855,71887],[71887,71855],[71856,71888],[71888,71856],[71857,71889],[71889,71857],[71858,71890],[71890,71858],[71859,71891],[71891,71859],[71860,71892],[71892,71860],[71861,71893],[71893,71861],[71862,71894],[71894,71862],[71863,71895],[71895,71863],[71864,71896],[71896,71864],[71865,71897],[71897,71865],[71866,71898],[71898,71866],[71867,71899],[71899,71867],[71868,71900],[71900,71868],[71869,71901],[71901,71869],[71870,71902],[71902,71870],[71871,71903],[71903,71871],[93760,93792],[93792,93760],[93761,93793],[93793,93761],[93762,93794],[93794,93762],[93763,93795],[93795,93763],[93764,93796],[93796,93764],[93765,93797],[93797,93765],[93766,93798],[93798,93766],[93767,93799],[93799,93767],[93768,93800],[93800,93768],[93769,93801],[93801,93769],[93770,93802],[93802,93770],[93771,93803],[93803,93771],[93772,93804],[93804,93772],[93773,93805],[93805,93773],[93774,93806],[93806,93774],[93775,93807],[93807,93775],[93776,93808],[93808,93776],[93777,93809],[93809,93777],[93778,93810],[93810,93778],[93779,93811],[93811,93779],[93780,93812],[93812,93780],[93781,93813],[93813,93781],[93782,93814],[93814,93782],[93783,93815],[93815,93783],[93784,93816],[93816,93784],[93785,93817],[93817,93785],[93786,93818],[93818,93786],[93787,93819],[93819,93787],[93788,93820],[93820,93788],[93789,93821],[93821,93789],[93790,93822],[93822,93790],[93791,93823],[93823,93791],[125184,125218],[125218,125184],[125185,125219],[125219,125185],[125186,125220],[125220,125186],[125187,125221],[125221,125187],[125188,125222],[125222,125188],[125189,125223],[125223,125189],[125190,125224],[125224,125190],[125191,125225],[125225,125191],[125192,125226],[125226,125192],[125193,125227],[125227,125193],[125194,125228],[125228,125194],[125195,125229],[125229,125195],[125196,125230],[125230,125196],[125197,125231],[125231,125197],[125198,125232],[125232,125198],[125199,125233],[125233,125199],[125200,125234],[125234,125200],[125201,125235],[125235,125201],[125202,125236],[125236,125202],[125203,125237],[125237,125203],[125204,125238],[125238,125204],[125205,125239],[125239,125205],[125206,125240],[125240,125206],[125207,125241],[125241,125207],[125208,125242],[125242,125208],[125209,125243],[125243,125209],[125210,125244],[125244,125210],[125211,125245],[125245,125211],[125212,125246],[125246,125212],[125213,125247],[125247,125213],[125214,125248],[125248,125214],[125215,125249],[125249,125215],[125216,125250],[125250,125216],[125217,125251],[125251,125217]])),g(d,"C",[[0,31,1],[127,159,1],[173,888,715],[889,896,7],[897,899,1],[907,909,2],[930,1328,398],[1367,1368,1],[1419,1420,1],[1424,1480,56],[1481,1487,1],[1515,1518,1],[1525,1541,1],[1564,1757,193],[1806,1807,1],[1867,1868,1],[1970,1983,1],[2043,2044,1],[2094,2095,1],[2111,2140,29],[2141,2143,2],[2155,2159,1],[2191,2199,1],[2274,2436,162],[2445,2446,1],[2449,2450,1],[2473,2481,8],[2483,2485,1],[2490,2491,1],[2501,2502,1],[2505,2506,1],[2511,2518,1],[2520,2523,1],[2526,2532,6],[2533,2559,26],[2560,2564,4],[2571,2574,1],[2577,2578,1],[2601,2609,8],[2612,2618,3],[2619,2621,2],[2627,2630,1],[2633,2634,1],[2638,2640,1],[2642,2648,1],[2653,2655,2],[2656,2661,1],[2679,2688,1],[2692,2702,10],[2706,2729,23],[2737,2740,3],[2746,2747,1],[2758,2766,4],[2767,2769,2],[2770,2783,1],[2788,2789,1],[2802,2808,1],[2816,2820,4],[2829,2830,1],[2833,2834,1],[2857,2865,8],[2868,2874,6],[2875,2885,10],[2886,2889,3],[2890,2894,4],[2895,2900,1],[2904,2907,1],[2910,2916,6],[2917,2936,19],[2937,2945,1],[2948,2955,7],[2956,2957,1],[2961,2966,5],[2967,2968,1],[2971,2973,2],[2976,2978,1],[2981,2983,1],[2987,2989,1],[3002,3005,1],[3011,3013,1],[3017,3022,5],[3023,3025,2],[3026,3030,1],[3032,3045,1],[3067,3071,1],[3085,3089,4],[3113,3130,17],[3131,3141,10],[3145,3150,5],[3151,3156,1],[3159,3163,4],[3164,3166,2],[3167,3172,5],[3173,3184,11],[3185,3190,1],[3213,3217,4],[3241,3252,11],[3258,3259,1],[3269,3273,4],[3278,3284,1],[3287,3292,1],[3295,3300,5],[3301,3312,11],[3316,3327,1],[3341,3345,4],[3397,3401,4],[3408,3411,1],[3428,3429,1],[3456,3460,4],[3479,3481,1],[3506,3516,10],[3518,3519,1],[3527,3529,1],[3531,3534,1],[3541,3543,2],[3552,3557,1],[3568,3569,1],[3573,3584,1],[3643,3646,1],[3676,3712,1],[3715,3717,2],[3723,3748,25],[3750,3774,24],[3775,3781,6],[3783,3791,8],[3802,3803,1],[3808,3839,1],[3912,3949,37],[3950,3952,1],[3992,4029,37],[4045,4059,14],[4060,4095,1],[4294,4296,2],[4297,4300,1],[4302,4303,1],[4681,4686,5],[4687,4695,8],[4697,4702,5],[4703,4745,42],[4750,4751,1],[4785,4790,5],[4791,4799,8],[4801,4806,5],[4807,4823,16],[4881,4886,5],[4887,4955,68],[4956,4989,33],[4990,4991,1],[5018,5023,1],[5110,5111,1],[5118,5119,1],[5789,5791,1],[5881,5887,1],[5910,5918,1],[5943,5951,1],[5972,5983,1],[5997,6001,4],[6004,6015,1],[6110,6111,1],[6122,6127,1],[6138,6143,1],[6158,6170,12],[6171,6175,1],[6265,6271,1],[6315,6319,1],[6390,6399,1],[6431,6444,13],[6445,6447,1],[6460,6463,1],[6465,6467,1],[6510,6511,1],[6517,6527,1],[6572,6575,1],[6602,6607,1],[6619,6621,1],[6684,6685,1],[6751,6781,30],[6782,6794,12],[6795,6799,1],[6810,6815,1],[6830,6831,1],[6863,6911,1],[6989,6991,1],[7039,7156,117],[7157,7163,1],[7224,7226,1],[7242,7244,1],[7305,7311,1],[7355,7356,1],[7368,7375,1],[7419,7423,1],[7958,7959,1],[7966,7967,1],[8006,8007,1],[8014,8015,1],[8024,8030,2],[8062,8063,1],[8117,8133,16],[8148,8149,1],[8156,8176,20],[8177,8181,4],[8191,8203,12],[8204,8207,1],[8234,8238,1],[8288,8303,1],[8306,8307,1],[8335,8349,14],[8350,8351,1],[8385,8399,1],[8433,8447,1],[8588,8591,1],[9255,9279,1],[9291,9311,1],[11124,11125,1],[11158,11508,350],[11509,11512,1],[11558,11560,2],[11561,11564,1],[11566,11567,1],[11624,11630,1],[11633,11646,1],[11671,11679,1],[11687,11743,8],[11870,11903,1],[11930,12020,90],[12021,12031,1],[12246,12271,1],[12352,12439,87],[12440,12544,104],[12545,12548,1],[12592,12687,95],[12772,12782,1],[12831,42125,29294],[42126,42127,1],[42183,42191,1],[42540,42559,1],[42744,42751,1],[42955,42959,1],[42962,42964,2],[42970,42993,1],[43053,43055,1],[43066,43071,1],[43128,43135,1],[43206,43213,1],[43226,43231,1],[43348,43358,1],[43389,43391,1],[43470,43482,12],[43483,43485,1],[43519,43575,56],[43576,43583,1],[43598,43599,1],[43610,43611,1],[43715,43738,1],[43767,43776,1],[43783,43784,1],[43791,43792,1],[43799,43807,1],[43815,43823,8],[43884,43887,1],[44014,44015,1],[44026,44031,1],[55204,55215,1],[55239,55242,1],[55292,63743,1],[64110,64111,1],[64218,64255,1],[64263,64274,1],[64280,64284,1],[64311,64317,6],[64319,64325,3],[64451,64466,1],[64912,64913,1],[64968,64974,1],[64976,65007,1],[65050,65055,1],[65107,65127,20],[65132,65135,1],[65141,65277,136],[65278,65280,1],[65471,65473,1],[65480,65481,1],[65488,65489,1],[65496,65497,1],[65501,65503,1],[65511,65519,8],[65520,65531,1],[65534,65535,1],[65548,65575,27],[65595,65598,3],[65614,65615,1],[65630,65663,1],[65787,65791,1],[65795,65798,1],[65844,65846,1],[65935,65949,14],[65950,65951,1],[65953,65999,1],[66046,66175,1],[66205,66207,1],[66257,66271,1],[66300,66303,1],[66340,66348,1],[66379,66383,1],[66427,66431,1],[66462,66500,38],[66501,66503,1],[66518,66559,1],[66718,66719,1],[66730,66735,1],[66772,66775,1],[66812,66815,1],[66856,66863,1],[66916,66926,1],[66939,66955,16],[66963,66966,3],[66978,66994,16],[67002,67005,3],[67006,67071,1],[67383,67391,1],[67414,67423,1],[67432,67455,1],[67462,67505,43],[67515,67583,1],[67590,67591,1],[67593,67638,45],[67641,67643,1],[67645,67646,1],[67670,67743,73],[67744,67750,1],[67760,67807,1],[67827,67830,3],[67831,67834,1],[67868,67870,1],[67898,67902,1],[67904,67967,1],[68024,68027,1],[68048,68049,1],[68100,68103,3],[68104,68107,1],[68116,68120,4],[68150,68151,1],[68155,68158,1],[68169,68175,1],[68185,68191,1],[68256,68287,1],[68327,68330,1],[68343,68351,1],[68406,68408,1],[68438,68439,1],[68467,68471,1],[68498,68504,1],[68509,68520,1],[68528,68607,1],[68681,68735,1],[68787,68799,1],[68851,68857,1],[68904,68911,1],[68922,69215,1],[69247,69290,43],[69294,69295,1],[69298,69372,1],[69416,69423,1],[69466,69487,1],[69514,69551,1],[69580,69599,1],[69623,69631,1],[69710,69713,1],[69750,69758,1],[69821,69827,6],[69828,69839,1],[69865,69871,1],[69882,69887,1],[69941,69960,19],[69961,69967,1],[70007,70015,1],[70112,70133,21],[70134,70143,1],[70162,70210,48],[70211,70271,1],[70279,70281,2],[70286,70302,16],[70314,70319,1],[70379,70383,1],[70394,70399,1],[70404,70413,9],[70414,70417,3],[70418,70441,23],[70449,70452,3],[70458,70469,11],[70470,70473,3],[70474,70478,4],[70479,70481,2],[70482,70486,1],[70488,70492,1],[70500,70501,1],[70509,70511,1],[70517,70655,1],[70748,70754,6],[70755,70783,1],[70856,70863,1],[70874,71039,1],[71094,71095,1],[71134,71167,1],[71237,71247,1],[71258,71263,1],[71277,71295,1],[71354,71359,1],[71370,71423,1],[71451,71452,1],[71468,71471,1],[71495,71679,1],[71740,71839,1],[71923,71934,1],[71943,71944,1],[71946,71947,1],[71956,71959,3],[71990,71993,3],[71994,72007,13],[72008,72015,1],[72026,72095,1],[72104,72105,1],[72152,72153,1],[72165,72191,1],[72264,72271,1],[72355,72367,1],[72441,72447,1],[72458,72703,1],[72713,72759,46],[72774,72783,1],[72813,72815,1],[72848,72849,1],[72872,72887,15],[72888,72959,1],[72967,72970,3],[73015,73017,1],[73019,73022,3],[73032,73039,1],[73050,73055,1],[73062,73065,3],[73103,73106,3],[73113,73119,1],[73130,73439,1],[73465,73471,1],[73489,73531,42],[73532,73533,1],[73562,73647,1],[73649,73663,1],[73714,73726,1],[74650,74751,1],[74863,74869,6],[74870,74879,1],[75076,77711,1],[77811,77823,1],[78896,78911,1],[78934,82943,1],[83527,92159,1],[92729,92735,1],[92767,92778,11],[92779,92781,1],[92863,92874,11],[92875,92879,1],[92910,92911,1],[92918,92927,1],[92998,93007,1],[93018,93026,8],[93048,93052,1],[93072,93759,1],[93851,93951,1],[94027,94030,1],[94088,94094,1],[94112,94175,1],[94181,94191,1],[94194,94207,1],[100344,100351,1],[101590,101631,1],[101641,110575,1],[110580,110588,8],[110591,110883,292],[110884,110897,1],[110899,110927,1],[110931,110932,1],[110934,110947,1],[110952,110959,1],[111356,113663,1],[113771,113775,1],[113789,113791,1],[113801,113807,1],[113818,113819,1],[113824,118527,1],[118574,118575,1],[118599,118607,1],[118724,118783,1],[119030,119039,1],[119079,119080,1],[119155,119162,1],[119275,119295,1],[119366,119487,1],[119508,119519,1],[119540,119551,1],[119639,119647,1],[119673,119807,1],[119893,119965,72],[119968,119969,1],[119971,119972,1],[119975,119976,1],[119981,119994,13],[119996,120004,8],[120070,120075,5],[120076,120085,9],[120093,120122,29],[120127,120133,6],[120135,120137,1],[120145,120486,341],[120487,120780,293],[120781,121484,703],[121485,121498,1],[121504,121520,16],[121521,122623,1],[122655,122660,1],[122667,122879,1],[122887,122905,18],[122906,122914,8],[122917,122923,6],[122924,122927,1],[122990,123022,1],[123024,123135,1],[123181,123183,1],[123198,123199,1],[123210,123213,1],[123216,123535,1],[123567,123583,1],[123642,123646,1],[123648,124111,1],[124154,124895,1],[124903,124908,5],[124911,124927,16],[125125,125126,1],[125143,125183,1],[125260,125263,1],[125274,125277,1],[125280,126064,1],[126133,126208,1],[126270,126463,1],[126468,126496,28],[126499,126501,2],[126502,126504,2],[126515,126520,5],[126522,126524,2],[126525,126529,1],[126531,126534,1],[126536,126540,2],[126544,126547,3],[126549,126550,1],[126552,126560,2],[126563,126565,2],[126566,126571,5],[126579,126589,5],[126591,126602,11],[126620,126624,1],[126628,126634,6],[126652,126703,1],[126706,126975,1],[127020,127023,1],[127124,127135,1],[127151,127152,1],[127168,127184,16],[127222,127231,1],[127406,127461,1],[127491,127503,1],[127548,127551,1],[127561,127567,1],[127570,127583,1],[127590,127743,1],[128728,128731,1],[128749,128751,1],[128765,128767,1],[128887,128890,1],[128986,128991,1],[129004,129007,1],[129009,129023,1],[129036,129039,1],[129096,129103,1],[129114,129119,1],[129160,129167,1],[129198,129199,1],[129202,129279,1],[129620,129631,1],[129646,129647,1],[129661,129663,1],[129673,129679,1],[129726,129734,8],[129735,129741,1],[129756,129759,1],[129769,129775,1],[129785,129791,1],[129939,129995,56],[129996,130031,1],[130042,131071,1],[173792,173823,1],[177978,177983,1],[178206,178207,1],[183970,183983,1],[191457,191471,1],[192094,194559,1],[195102,196607,1],[201547,201551,1],[205744,917759,1],[918e3,1114111,1]]),g(d,"Cc",[[0,31,1],[127,159,1]]),g(d,"Cf",[[173,1536,1363],[1537,1541,1],[1564,1757,193],[1807,2192,385],[2193,2274,81],[6158,8203,2045],[8204,8207,1],[8234,8238,1],[8288,8292,1],[8294,8303,1],[65279,65529,250],[65530,65531,1],[69821,69837,16],[78896,78911,1],[113824,113827,1],[119155,119162,1],[917505,917536,31],[917537,917631,1]]),g(d,"Co",[[57344,63743,1],[983040,1048573,1],[1048576,1114109,1]]),g(d,"Cs",[[55296,57343,1]]),g(d,"L",[[65,90,1],[97,122,1],[170,181,11],[186,192,6],[193,214,1],[216,246,1],[248,705,1],[710,721,1],[736,740,1],[748,750,2],[880,884,1],[886,887,1],[890,893,1],[895,902,7],[904,906,1],[908,910,2],[911,929,1],[931,1013,1],[1015,1153,1],[1162,1327,1],[1329,1366,1],[1369,1376,7],[1377,1416,1],[1488,1514,1],[1519,1522,1],[1568,1610,1],[1646,1647,1],[1649,1747,1],[1749,1765,16],[1766,1774,8],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2036,2037,1],[2042,2048,6],[2049,2069,1],[2074,2084,10],[2088,2112,24],[2113,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2249,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2417,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3654,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3782,3804,22],[3805,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4256,18],[4257,4293,1],[4295,4301,6],[4304,4346,1],[4348,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5024,5109,1],[5112,5117,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6103,6108,5],[6176,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6823,6917,94],[6918,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7293,1],[7296,7304,1],[7312,7354,1],[7357,7359,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,7424,6],[7425,7615,1],[7680,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8124,1],[8126,8130,4],[8131,8132,1],[8134,8140,1],[8144,8147,1],[8150,8155,1],[8160,8172,1],[8178,8180,1],[8182,8188,1],[8305,8319,14],[8336,8348,1],[8450,8455,5],[8458,8467,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8495,8505,1],[8508,8511,1],[8517,8521,1],[8526,8579,53],[8580,11264,2684],[11265,11492,1],[11499,11502,1],[11506,11507,1],[11520,11557,1],[11559,11565,6],[11568,11623,1],[11631,11648,17],[11649,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[11823,12293,470],[12294,12337,43],[12338,12341,1],[12347,12348,1],[12353,12438,1],[12445,12447,1],[12449,12538,1],[12540,12543,1],[12549,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,42124,1],[42192,42237,1],[42240,42508,1],[42512,42527,1],[42538,42539,1],[42560,42606,1],[42623,42653,1],[42656,42725,1],[42775,42783,1],[42786,42888,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43471,43488,17],[43489,43492,1],[43494,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43741,1],[43744,43754,1],[43762,43764,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43824,43866,1],[43868,43881,1],[43888,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64256,64262,1],[64275,64279,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65313,65338,1],[65345,65370,1],[65382,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66560,66717,1],[66736,66771,1],[66776,66811,1],[66816,66855,1],[66864,66915,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68736,68786,1],[68800,68850,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71840,71903,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[92992,92995,1],[93027,93047,1],[93053,93071,1],[93760,93823,1],[93952,94026,1],[94032,94099,67],[94100,94111,1],[94176,94177,1],[94179,94208,29],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120512,1],[120514,120538,1],[120540,120570,1],[120572,120596,1],[120598,120628,1],[120630,120654,1],[120656,120686,1],[120688,120712,1],[120714,120744,1],[120746,120770,1],[120772,120779,1],[122624,122654,1],[122661,122666,1],[122928,122989,1],[123136,123180,1],[123191,123197,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124139,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[125184,125251,1],[125259,126464,1205],[126465,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),g(d,"foldL",[[837,837,1]]),g(d,"Ll",[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,311,2],[312,328,2],[329,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[397,402,5],[405,409,4],[410,411,1],[414,417,3],[419,421,2],[424,426,2],[427,429,2],[432,436,4],[438,441,3],[442,445,3],[446,447,1],[454,460,3],[462,476,2],[477,495,2],[496,499,3],[501,505,4],[507,563,2],[564,569,1],[572,575,3],[576,578,2],[583,591,2],[592,659,1],[661,687,1],[881,883,2],[887,891,4],[892,893,1],[912,940,28],[941,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1020,1072,52],[1073,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1376,1416,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7424,7467,1],[7531,7543,1],[7545,7578,1],[7681,7829,2],[7830,7837,1],[7839,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8016,8023,1],[8032,8039,1],[8048,8061,1],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8112,8116,1],[8118,8119,1],[8126,8130,4],[8131,8132,1],[8134,8135,1],[8144,8147,1],[8150,8151,1],[8160,8167,1],[8178,8180,1],[8182,8183,1],[8458,8462,4],[8463,8467,4],[8495,8505,5],[8508,8509,1],[8518,8521,1],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11377,11379,2],[11380,11382,2],[11383,11387,1],[11393,11491,2],[11492,11500,8],[11502,11507,5],[11520,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42800,42801,1],[42803,42865,2],[42866,42872,1],[42874,42876,2],[42879,42887,2],[42892,42894,2],[42897,42899,2],[42900,42901,1],[42903,42921,2],[42927,42933,6],[42935,42947,2],[42952,42954,2],[42961,42969,2],[42998,43002,4],[43824,43866,1],[43872,43880,1],[43888,43967,1],[64256,64262,1],[64275,64279,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[119834,119859,1],[119886,119892,1],[119894,119911,1],[119938,119963,1],[119990,119993,1],[119995,119997,2],[119998,120003,1],[120005,120015,1],[120042,120067,1],[120094,120119,1],[120146,120171,1],[120198,120223,1],[120250,120275,1],[120302,120327,1],[120354,120379,1],[120406,120431,1],[120458,120485,1],[120514,120538,1],[120540,120545,1],[120572,120596,1],[120598,120603,1],[120630,120654,1],[120656,120661,1],[120688,120712,1],[120714,120719,1],[120746,120770,1],[120772,120777,1],[120779,122624,1845],[122625,122633,1],[122635,122654,1],[122661,122666,1],[125218,125251,1]]),g(d,"foldLl",[[65,90,1],[192,214,1],[216,222,1],[256,302,2],[306,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,453,1],[455,456,1],[458,459,1],[461,475,2],[478,494,2],[497,498,1],[500,502,2],[503,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[837,880,43],[882,886,4],[895,902,7],[904,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,984,9],[986,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8072,8079,1],[8088,8095,1],[8104,8111,1],[8120,8124,1],[8136,8140,1],[8152,8155,1],[8168,8172,1],[8184,8188,1],[8486,8490,4],[8491,8498,7],[8579,11264,2685],[11265,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[125184,125217,1]]),g(d,"Lm",[[688,705,1],[710,721,1],[736,740,1],[748,750,2],[884,890,6],[1369,1600,231],[1765,1766,1],[2036,2037,1],[2042,2074,32],[2084,2088,4],[2249,2417,168],[3654,3782,128],[4348,6103,1755],[6211,6823,612],[7288,7293,1],[7468,7530,1],[7544,7579,35],[7580,7615,1],[8305,8319,14],[8336,8348,1],[11388,11389,1],[11631,11823,192],[12293,12337,44],[12338,12341,1],[12347,12445,98],[12446,12540,94],[12541,12542,1],[40981,42232,1251],[42233,42237,1],[42508,42623,115],[42652,42653,1],[42775,42783,1],[42864,42888,24],[42994,42996,1],[43e3,43001,1],[43471,43494,23],[43632,43741,109],[43763,43764,1],[43868,43871,1],[43881,65392,21511],[65438,65439,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[92992,92995,1],[94099,94111,1],[94176,94177,1],[94179,110576,16397],[110577,110579,1],[110581,110587,1],[110589,110590,1],[122928,122989,1],[123191,123197,1],[124139,125259,1120]]),g(d,"Lo",[[170,186,16],[443,448,5],[449,451,1],[660,1488,828],[1489,1514,1],[1519,1522,1],[1568,1599,1],[1601,1610,1],[1646,1647,1],[1649,1747,1],[1749,1774,25],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2048,2069,1],[2112,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2248,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2418,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3653,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3804,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4352,114],[4353,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6108,6176,68],[6177,6210,1],[6212,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6917,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7287,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,8501,1083],[8502,8504,1],[11568,11623,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[12294,12348,54],[12353,12438,1],[12447,12449,2],[12450,12538,1],[12543,12549,6],[12550,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,40980,1],[40982,42124,1],[42192,42231,1],[42240,42507,1],[42512,42527,1],[42538,42539,1],[42606,42656,50],[42657,42725,1],[42895,42999,104],[43003,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43488,43492,1],[43495,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43631,1],[43633,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43740,1],[43744,43754,1],[43762,43777,15],[43778,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43968,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65382,65391,1],[65393,65437,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66640,66717,1],[66816,66855,1],[66864,66915,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[93027,93047,1],[93053,93071,1],[93952,94026,1],[94032,94208,176],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[122634,123136,502],[123137,123180,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124138,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),g(d,"Lt",[[453,459,3],[498,8072,7574],[8073,8079,1],[8088,8095,1],[8104,8111,1],[8124,8140,16],[8188,8188,1]]),g(d,"foldLt",[[452,454,2],[455,457,2],[458,460,2],[497,499,2],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8115,8131,16],[8179,8179,1]]),g(d,"Lu",[[65,90,1],[192,214,1],[216,222,1],[256,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,461,3],[463,475,2],[478,494,2],[497,500,3],[502,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[880,882,2],[886,895,9],[902,904,2],[905,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,978,3],[979,980,1],[984,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8120,8123,1],[8136,8139,1],[8152,8155,1],[8168,8172,1],[8184,8187,1],[8450,8455,5],[8459,8461,1],[8464,8466,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8496,8499,1],[8510,8511,1],[8517,8579,62],[11264,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[119808,119833,1],[119860,119885,1],[119912,119937,1],[119964,119966,2],[119967,119973,3],[119974,119977,3],[119978,119980,1],[119982,119989,1],[120016,120041,1],[120068,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120120,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120172,120197,1],[120224,120249,1],[120276,120301,1],[120328,120353,1],[120380,120405,1],[120432,120457,1],[120488,120512,1],[120546,120570,1],[120604,120628,1],[120662,120686,1],[120720,120744,1],[120778,125184,4406],[125185,125217,1]]),g(d,"Upper",d.Lu),g(d,"foldLu",[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,303,2],[307,311,2],[314,328,2],[331,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[402,405,3],[409,410,1],[414,417,3],[419,421,2],[424,429,5],[432,436,4],[438,441,3],[445,447,2],[453,454,1],[456,457,1],[459,460,1],[462,476,2],[477,495,2],[498,499,1],[501,505,4],[507,543,2],[547,563,2],[572,575,3],[576,578,2],[583,591,2],[592,596,1],[598,599,1],[601,603,2],[604,608,4],[609,613,2],[614,616,2],[617,620,1],[623,625,2],[626,629,3],[637,640,3],[642,643,1],[647,652,1],[658,669,11],[670,837,167],[881,883,2],[887,891,4],[892,893,1],[940,943,1],[945,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1072,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1377,1414,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7545,7549,4],[7566,7681,115],[7683,7829,2],[7835,7841,6],[7843,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8017,8023,2],[8032,8039,1],[8048,8061,1],[8112,8113,1],[8126,8144,18],[8145,8160,15],[8161,8165,4],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11379,11382,3],[11393,11491,2],[11500,11502,2],[11507,11520,13],[11521,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42803,42863,2],[42874,42876,2],[42879,42887,2],[42892,42897,5],[42899,42900,1],[42903,42921,2],[42933,42947,2],[42952,42954,2],[42961,42967,6],[42969,42998,29],[43859,43888,29],[43889,43967,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[125218,125251,1]]),g(d,"M",[[768,879,1],[1155,1161,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2307,1],[2362,2364,1],[2366,2383,1],[2385,2391,1],[2402,2403,1],[2433,2435,1],[2492,2494,2],[2495,2500,1],[2503,2504,1],[2507,2509,1],[2519,2530,11],[2531,2558,27],[2561,2563,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2672,31],[2673,2677,4],[2689,2691,1],[2748,2750,2],[2751,2757,1],[2759,2761,1],[2763,2765,1],[2786,2787,1],[2810,2815,1],[2817,2819,1],[2876,2878,2],[2879,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2914,2915,1],[2946,3006,60],[3007,3010,1],[3014,3016,1],[3018,3021,1],[3031,3072,41],[3073,3076,1],[3132,3134,2],[3135,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3203,1],[3260,3262,2],[3263,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3298,3299,1],[3315,3328,13],[3329,3331,1],[3387,3388,1],[3390,3396,1],[3398,3400,1],[3402,3405,1],[3415,3426,11],[3427,3457,30],[3458,3459,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3570,3571,1],[3633,3636,3],[3637,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3902,3903,1],[3953,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4139,101],[4140,4158,1],[4182,4185,1],[4190,4192,1],[4194,4196,1],[4199,4205,1],[4209,4212,1],[4226,4237,1],[4239,4250,11],[4251,4253,1],[4957,4959,1],[5906,5909,1],[5938,5940,1],[5970,5971,1],[6002,6003,1],[6068,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6443,1],[6448,6459,1],[6679,6683,1],[6741,6750,1],[6752,6780,1],[6783,6832,49],[6833,6862,1],[6912,6916,1],[6964,6980,1],[7019,7027,1],[7040,7042,1],[7073,7085,1],[7142,7155,1],[7204,7223,1],[7376,7378,1],[7380,7400,1],[7405,7412,7],[7415,7417,1],[7616,7679,1],[8400,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12335,1],[12441,12442,1],[42607,42610,1],[42612,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43043,24],[43044,43047,1],[43052,43136,84],[43137,43188,51],[43189,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43347,1],[43392,43395,1],[43443,43456,1],[43493,43561,68],[43562,43574,1],[43587,43596,9],[43597,43643,46],[43644,43645,1],[43696,43698,2],[43699,43700,1],[43703,43704,1],[43710,43711,1],[43713,43755,42],[43756,43759,1],[43765,43766,1],[44003,44010,1],[44012,44013,1],[64286,65024,738],[65025,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69632,69634,1],[69688,69702,1],[69744,69747,3],[69748,69759,11],[69760,69762,1],[69808,69818,1],[69826,69888,62],[69889,69890,1],[69927,69940,1],[69957,69958,1],[70003,70016,13],[70017,70018,1],[70067,70080,1],[70089,70092,1],[70094,70095,1],[70188,70199,1],[70206,70209,3],[70367,70378,1],[70400,70403,1],[70459,70460,1],[70462,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70502,3],[70503,70508,1],[70512,70516,1],[70709,70726,1],[70750,70832,82],[70833,70851,1],[71087,71093,1],[71096,71104,1],[71132,71133,1],[71216,71232,1],[71339,71351,1],[71453,71467,1],[71724,71738,1],[71984,71989,1],[71991,71992,1],[71995,71998,1],[72e3,72002,2],[72003,72145,142],[72146,72151,1],[72154,72160,1],[72164,72193,29],[72194,72202,1],[72243,72249,1],[72251,72254,1],[72263,72273,10],[72274,72283,1],[72330,72345,1],[72751,72758,1],[72760,72767,1],[72850,72871,1],[72873,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73098,67],[73099,73102,1],[73104,73105,1],[73107,73111,1],[73459,73462,1],[73472,73473,1],[73475,73524,49],[73525,73530,1],[73534,73538,1],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94033,2],[94034,94087,1],[94095,94098,1],[94180,94192,12],[94193,113821,19628],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119141,119145,1],[119149,119154,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]]),g(d,"foldM",[[921,953,32],[8126,8126,1]]),g(d,"Mc",[[2307,2363,56],[2366,2368,1],[2377,2380,1],[2382,2383,1],[2434,2435,1],[2494,2496,1],[2503,2504,1],[2507,2508,1],[2519,2563,44],[2622,2624,1],[2691,2750,59],[2751,2752,1],[2761,2763,2],[2764,2818,54],[2819,2878,59],[2880,2887,7],[2888,2891,3],[2892,2903,11],[3006,3007,1],[3009,3010,1],[3014,3016,1],[3018,3020,1],[3031,3073,42],[3074,3075,1],[3137,3140,1],[3202,3203,1],[3262,3264,2],[3265,3268,1],[3271,3272,1],[3274,3275,1],[3285,3286,1],[3315,3330,15],[3331,3390,59],[3391,3392,1],[3398,3400,1],[3402,3404,1],[3415,3458,43],[3459,3535,76],[3536,3537,1],[3544,3551,1],[3570,3571,1],[3902,3903,1],[3967,4139,172],[4140,4145,5],[4152,4155,3],[4156,4182,26],[4183,4194,11],[4195,4196,1],[4199,4205,1],[4227,4228,1],[4231,4236,1],[4239,4250,11],[4251,4252,1],[5909,5940,31],[6070,6078,8],[6079,6085,1],[6087,6088,1],[6435,6438,1],[6441,6443,1],[6448,6449,1],[6451,6456,1],[6681,6682,1],[6741,6743,2],[6753,6755,2],[6756,6765,9],[6766,6770,1],[6916,6965,49],[6971,6973,2],[6974,6977,1],[6979,6980,1],[7042,7073,31],[7078,7079,1],[7082,7143,61],[7146,7148,1],[7150,7154,4],[7155,7204,49],[7205,7211,1],[7220,7221,1],[7393,7415,22],[12334,12335,1],[43043,43044,1],[43047,43136,89],[43137,43188,51],[43189,43203,1],[43346,43347,1],[43395,43444,49],[43445,43450,5],[43451,43454,3],[43455,43456,1],[43567,43568,1],[43571,43572,1],[43597,43643,46],[43645,43755,110],[43758,43759,1],[43765,44003,238],[44004,44006,2],[44007,44009,2],[44010,44012,2],[69632,69634,2],[69762,69808,46],[69809,69810,1],[69815,69816,1],[69932,69957,25],[69958,70018,60],[70067,70069,1],[70079,70080,1],[70094,70188,94],[70189,70190,1],[70194,70195,1],[70197,70368,171],[70369,70370,1],[70402,70403,1],[70462,70463,1],[70465,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70709,210],[70710,70711,1],[70720,70721,1],[70725,70832,107],[70833,70834,1],[70841,70843,2],[70844,70846,1],[70849,71087,238],[71088,71089,1],[71096,71099,1],[71102,71216,114],[71217,71218,1],[71227,71228,1],[71230,71340,110],[71342,71343,1],[71350,71456,106],[71457,71462,5],[71724,71726,1],[71736,71984,248],[71985,71989,1],[71991,71992,1],[71997,72e3,3],[72002,72145,143],[72146,72147,1],[72156,72159,1],[72164,72249,85],[72279,72280,1],[72343,72751,408],[72766,72873,107],[72881,72884,3],[73098,73102,1],[73107,73108,1],[73110,73461,351],[73462,73475,13],[73524,73525,1],[73534,73535,1],[73537,94033,20496],[94034,94087,1],[94192,94193,1],[119141,119142,1],[119149,119154,1]]),g(d,"Me",[[1160,1161,1],[6846,8413,1567],[8414,8416,1],[8418,8420,1],[42608,42610,1]]),g(d,"Mn",[[768,879,1],[1155,1159,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2306,1],[2362,2364,2],[2369,2376,1],[2381,2385,4],[2386,2391,1],[2402,2403,1],[2433,2492,59],[2497,2500,1],[2509,2530,21],[2531,2558,27],[2561,2562,1],[2620,2625,5],[2626,2631,5],[2632,2635,3],[2636,2637,1],[2641,2672,31],[2673,2677,4],[2689,2690,1],[2748,2753,5],[2754,2757,1],[2759,2760,1],[2765,2786,21],[2787,2810,23],[2811,2815,1],[2817,2876,59],[2879,2881,2],[2882,2884,1],[2893,2901,8],[2902,2914,12],[2915,2946,31],[3008,3021,13],[3072,3076,4],[3132,3134,2],[3135,3136,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3260,59],[3263,3270,7],[3276,3277,1],[3298,3299,1],[3328,3329,1],[3387,3388,1],[3393,3396,1],[3405,3426,21],[3427,3457,30],[3530,3538,8],[3539,3540,1],[3542,3633,91],[3636,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3953,3966,1],[3968,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4141,103],[4142,4144,1],[4146,4151,1],[4153,4154,1],[4157,4158,1],[4184,4185,1],[4190,4192,1],[4209,4212,1],[4226,4229,3],[4230,4237,7],[4253,4957,704],[4958,4959,1],[5906,5908,1],[5938,5939,1],[5970,5971,1],[6002,6003,1],[6068,6069,1],[6071,6077,1],[6086,6089,3],[6090,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6434,1],[6439,6440,1],[6450,6457,7],[6458,6459,1],[6679,6680,1],[6683,6742,59],[6744,6750,1],[6752,6754,2],[6757,6764,1],[6771,6780,1],[6783,6832,49],[6833,6845,1],[6847,6862,1],[6912,6915,1],[6964,6966,2],[6967,6970,1],[6972,6978,6],[7019,7027,1],[7040,7041,1],[7074,7077,1],[7080,7081,1],[7083,7085,1],[7142,7144,2],[7145,7149,4],[7151,7153,1],[7212,7219,1],[7222,7223,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8400,8412,1],[8417,8421,4],[8422,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12333,1],[12441,12442,1],[42607,42612,5],[42613,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43045,26],[43046,43052,6],[43204,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43345,1],[43392,43394,1],[43443,43446,3],[43447,43449,1],[43452,43453,1],[43493,43561,68],[43562,43566,1],[43569,43570,1],[43573,43574,1],[43587,43596,9],[43644,43696,52],[43698,43700,1],[43703,43704,1],[43710,43711,1],[43713,43756,43],[43757,43766,9],[44005,44008,3],[44013,64286,20273],[65024,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69633,69688,55],[69689,69702,1],[69744,69747,3],[69748,69759,11],[69760,69761,1],[69811,69814,1],[69817,69818,1],[69826,69888,62],[69889,69890,1],[69927,69931,1],[69933,69940,1],[70003,70016,13],[70017,70070,53],[70071,70078,1],[70089,70092,1],[70095,70191,96],[70192,70193,1],[70196,70198,2],[70199,70206,7],[70209,70367,158],[70371,70378,1],[70400,70401,1],[70459,70460,1],[70464,70502,38],[70503,70508,1],[70512,70516,1],[70712,70719,1],[70722,70724,1],[70726,70750,24],[70835,70840,1],[70842,70847,5],[70848,70850,2],[70851,71090,239],[71091,71093,1],[71100,71101,1],[71103,71104,1],[71132,71133,1],[71219,71226,1],[71229,71231,2],[71232,71339,107],[71341,71344,3],[71345,71349,1],[71351,71453,102],[71454,71455,1],[71458,71461,1],[71463,71467,1],[71727,71735,1],[71737,71738,1],[71995,71996,1],[71998,72003,5],[72148,72151,1],[72154,72155,1],[72160,72193,33],[72194,72202,1],[72243,72248,1],[72251,72254,1],[72263,72273,10],[72274,72278,1],[72281,72283,1],[72330,72342,1],[72344,72345,1],[72752,72758,1],[72760,72765,1],[72767,72850,83],[72851,72871,1],[72874,72880,1],[72882,72883,1],[72885,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73104,73],[73105,73109,4],[73111,73459,348],[73460,73472,12],[73473,73526,53],[73527,73530,1],[73536,73538,2],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94095,64],[94096,94098,1],[94180,113821,19641],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]]),g(d,"foldMn",[[921,953,32],[8126,8126,1]]),g(d,"N",[[48,57,1],[178,179,1],[185,188,3],[189,190,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2548,2553,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[2930,2935,1],[3046,3058,1],[3174,3183,1],[3192,3198,1],[3302,3311,1],[3416,3422,1],[3430,3448,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3891,1],[4160,4169,1],[4240,4249,1],[4969,4988,1],[5870,5872,1],[6112,6121,1],[6128,6137,1],[6160,6169,1],[6470,6479,1],[6608,6618,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[8304,8308,4],[8309,8313,1],[8320,8329,1],[8528,8578,1],[8581,8585,1],[9312,9371,1],[9450,9471,1],[10102,10131,1],[11517,12295,778],[12321,12329,1],[12344,12346,1],[12690,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[42528,42537,1],[42726,42735,1],[43056,43061,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[65799,65843,1],[65856,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[66369,66378,9],[66513,66517,1],[66720,66729,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[68912,68921,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70113,70132,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71483,1],[71904,71922,1],[72016,72025,1],[72784,72812,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[73664,73684,1],[74752,74862,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125127,125135,1],[125264,125273,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1],[130032,130041,1]]),g(d,"Nd",[[48,57,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[3046,3055,1],[3174,3183,1],[3302,3311,1],[3430,3439,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3881,1],[4160,4169,1],[4240,4249,1],[6112,6121,1],[6160,6169,1],[6470,6479,1],[6608,6617,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[42528,42537,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[66720,66729,1],[68912,68921,1],[69734,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71481,1],[71904,71913,1],[72016,72025,1],[72784,72793,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125264,125273,1],[130032,130041,1]]),g(d,"Nl",[[5870,5872,1],[8544,8578,1],[8581,8584,1],[12295,12321,26],[12322,12329,1],[12344,12346,1],[42726,42735,1],[65856,65908,1],[66369,66378,9],[66513,66517,1],[74752,74862,1]]),g(d,"No",[[178,179,1],[185,188,3],[189,190,1],[2548,2553,1],[2930,2935,1],[3056,3058,1],[3192,3198,1],[3416,3422,1],[3440,3448,1],[3882,3891,1],[4969,4988,1],[6128,6137,1],[6618,8304,1686],[8308,8313,1],[8320,8329,1],[8528,8543,1],[8585,9312,727],[9313,9371,1],[9450,9471,1],[10102,10131,1],[11517,12690,1173],[12691,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[43056,43061,1],[65799,65843,1],[65909,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69733,1],[70113,70132,1],[71482,71483,1],[71914,71922,1],[72794,72812,1],[73664,73684,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[125127,125135,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1]]),g(d,"P",[[33,35,1],[37,42,1],[44,47,1],[58,59,1],[63,64,1],[91,93,1],[95,123,28],[125,161,36],[167,171,4],[182,183,1],[187,191,4],[894,903,9],[1370,1375,1],[1417,1418,1],[1470,1472,2],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3898,38],[3899,3901,1],[3973,4048,75],[4049,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5120,5742,622],[5787,5788,1],[5867,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8208,829],[8209,8231,1],[8240,8259,1],[8261,8273,1],[8275,8286,1],[8317,8318,1],[8333,8334,1],[8968,8971,1],[9001,9002,1],[10088,10101,1],[10181,10182,1],[10214,10223,1],[10627,10648,1],[10712,10715,1],[10748,10749,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11822,1],[11824,11855,1],[11858,11869,1],[12289,12291,1],[12296,12305,1],[12308,12319,1],[12336,12349,13],[12448,12539,91],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,64830,20819],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65121,1],[65123,65128,5],[65130,65131,1],[65281,65283,1],[65285,65290,1],[65292,65295,1],[65306,65307,1],[65311,65312,1],[65339,65341,1],[65343,65371,28],[65373,65375,2],[65376,65381,1],[65792,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69293,69461,168],[69462,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]]),g(d,"Pc",[[95,8255,8160],[8256,8276,20],[65075,65076,1],[65101,65103,1],[65343,65343,1]]),g(d,"Pd",[[45,1418,1373],[1470,5120,3650],[6150,8208,2058],[8209,8213,1],[11799,11802,3],[11834,11835,1],[11840,11869,29],[12316,12336,20],[12448,65073,52625],[65074,65112,38],[65123,65293,170],[69293,69293,1]]),g(d,"Pe",[[41,93,52],[125,3899,3774],[3901,5788,1887],[8262,8318,56],[8334,8969,635],[8971,9002,31],[10089,10101,2],[10182,10215,33],[10217,10223,2],[10628,10648,2],[10713,10715,2],[10749,11811,1062],[11813,11817,2],[11862,11868,2],[12297,12305,2],[12309,12315,2],[12318,12319,1],[64830,65048,218],[65078,65092,2],[65096,65114,18],[65116,65118,2],[65289,65341,52],[65373,65379,3]]),g(d,"Pf",[[187,8217,8030],[8221,8250,29],[11779,11781,2],[11786,11789,3],[11805,11809,4]]),g(d,"Pi",[[171,8216,8045],[8219,8220,1],[8223,8249,26],[11778,11780,2],[11785,11788,3],[11804,11808,4]]),g(d,"Po",[[33,35,1],[37,39,1],[42,46,2],[47,58,11],[59,63,4],[64,92,28],[161,167,6],[182,183,1],[191,894,703],[903,1370,467],[1371,1375,1],[1417,1472,55],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3973,113],[4048,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5742,5867,125],[5868,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6149,1],[6151,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8214,835],[8215,8224,9],[8225,8231,1],[8240,8248,1],[8251,8254,1],[8257,8259,1],[8263,8273,1],[8275,8277,2],[8278,8286,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11782,5],[11783,11784,1],[11787,11790,3],[11791,11798,1],[11800,11801,1],[11803,11806,3],[11807,11818,11],[11819,11822,1],[11824,11833,1],[11836,11839,1],[11841,11843,2],[11844,11855,1],[11858,11860,1],[12289,12291,1],[12349,12539,190],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,65040,21029],[65041,65046,1],[65049,65072,23],[65093,65094,1],[65097,65100,1],[65104,65106,1],[65108,65111,1],[65119,65121,1],[65128,65130,2],[65131,65281,150],[65282,65283,1],[65285,65287,1],[65290,65294,2],[65295,65306,11],[65307,65311,4],[65312,65340,28],[65377,65380,3],[65381,65792,411],[65793,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69461,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]]),g(d,"Ps",[[40,91,51],[123,3898,3775],[3900,5787,1887],[8218,8222,4],[8261,8317,56],[8333,8968,635],[8970,9001,31],[10088,10100,2],[10181,10214,33],[10216,10222,2],[10627,10647,2],[10712,10714,2],[10748,11810,1062],[11812,11816,2],[11842,11861,19],[11863,11867,2],[12296,12304,2],[12308,12314,2],[12317,64831,52514],[65047,65077,30],[65079,65091,2],[65095,65113,18],[65115,65117,2],[65288,65339,51],[65371,65375,4],[65378,65378,1]]),g(d,"S",[[36,43,7],[60,62,1],[94,96,2],[124,126,2],[162,166,1],[168,169,1],[172,174,2],[175,177,1],[180,184,4],[215,247,32],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,1014,113],[1154,1421,267],[1422,1423,1],[1542,1544,1],[1547,1550,3],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2046,2047,1],[2184,2546,362],[2547,2554,7],[2555,2801,246],[2928,3059,131],[3060,3066,1],[3199,3407,208],[3449,3647,198],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6107,366],[6464,6622,158],[6623,6655,1],[7009,7018,1],[7028,7036,1],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8352,8384,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8472,1],[8478,8483,1],[8485,8489,2],[8494,8506,12],[8507,8512,5],[8513,8516,1],[8522,8525,1],[8527,8586,59],[8587,8592,5],[8593,8967,1],[8972,9e3,1],[9003,9254,1],[9280,9290,1],[9372,9449,1],[9472,10087,1],[10132,10180,1],[10183,10213,1],[10224,10626,1],[10649,10711,1],[10716,10747,1],[10750,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12443,12444,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43048,43051,1],[43062,43065,1],[43639,43641,1],[43867,43882,15],[43883,64297,20414],[64434,64450,1],[64832,64847,1],[64975,65020,45],[65021,65023,1],[65122,65124,2],[65125,65126,1],[65129,65284,155],[65291,65308,17],[65309,65310,1],[65342,65344,2],[65372,65374,2],[65504,65510,1],[65512,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,123647,432],[126124,126128,4],[126254,126704,450],[126705,126976,271],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]]),g(d,"Sc",[[36,162,126],[163,165,1],[1423,1547,124],[2046,2047,1],[2546,2547,1],[2555,2801,246],[3065,3647,582],[6107,8352,2245],[8353,8384,1],[43064,65020,21956],[65129,65284,155],[65504,65505,1],[65509,65510,1],[73693,73696,1],[123647,126128,2481]]),g(d,"Sk",[[94,96,2],[168,175,7],[180,184,4],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,2184,1283],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[12443,12444,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43867,43882,15],[43883,64434,20551],[64435,64450,1],[65342,65344,2],[65507,127995,62488],[127996,127999,1]]),g(d,"Sm",[[43,60,17],[61,62,1],[124,126,2],[172,177,5],[215,247,32],[1014,1542,528],[1543,1544,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8472,8512,40],[8513,8516,1],[8523,8592,69],[8593,8596,1],[8602,8603,1],[8608,8614,3],[8622,8654,32],[8655,8658,3],[8660,8692,32],[8693,8959,1],[8992,8993,1],[9084,9115,31],[9116,9139,1],[9180,9185,1],[9655,9665,10],[9720,9727,1],[9839,10176,337],[10177,10180,1],[10183,10213,1],[10224,10239,1],[10496,10626,1],[10649,10711,1],[10716,10747,1],[10750,11007,1],[11056,11076,1],[11079,11084,1],[64297,65122,825],[65124,65126,1],[65291,65308,17],[65309,65310,1],[65372,65374,2],[65506,65513,7],[65514,65516,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[126704,126705,1]]),g(d,"So",[[166,169,3],[174,176,2],[1154,1421,267],[1422,1550,128],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2554,2928,374],[3059,3064,1],[3066,3199,133],[3407,3449,42],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6464,723],[6622,6655,1],[7009,7018,1],[7028,7036,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8478,7],[8479,8483,1],[8485,8489,2],[8494,8506,12],[8507,8522,15],[8524,8525,1],[8527,8586,59],[8587,8597,10],[8598,8601,1],[8604,8607,1],[8609,8610,1],[8612,8613,1],[8615,8621,1],[8623,8653,1],[8656,8657,1],[8659,8661,2],[8662,8691,1],[8960,8967,1],[8972,8991,1],[8994,9e3,1],[9003,9083,1],[9085,9114,1],[9140,9179,1],[9186,9254,1],[9280,9290,1],[9372,9449,1],[9472,9654,1],[9656,9664,1],[9666,9719,1],[9728,9838,1],[9840,10087,1],[10132,10175,1],[10240,10495,1],[11008,11055,1],[11077,11078,1],[11085,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[43048,43051,1],[43062,43063,1],[43065,43639,574],[43640,43641,1],[64832,64847,1],[64975,65021,46],[65022,65023,1],[65508,65512,4],[65517,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73692,1],[73697,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,126124,2909],[126254,126976,722],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,127994,1],[128e3,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]]),g(d,"Z",[[32,160,128],[5760,8192,2432],[8193,8202,1],[8232,8233,1],[8239,8287,48],[12288,12288,1]]),g(d,"Zl",[[8232,8232,1]]),g(d,"Zp",[[8233,8233,1]]),g(d,"Zs",[[32,160,128],[5760,8192,2432],[8193,8202,1],[8239,8287,48],[12288,12288,1]]),g(d,"Adlam",[[125184,125259,1],[125264,125273,1],[125278,125279,1]]),g(d,"Ahom",[[71424,71450,1],[71453,71467,1],[71472,71494,1]]),g(d,"Anatolian_Hieroglyphs",[[82944,83526,1]]),g(d,"Arabic",[[1536,1540,1],[1542,1547,1],[1549,1562,1],[1564,1566,1],[1568,1599,1],[1601,1610,1],[1622,1647,1],[1649,1756,1],[1758,1791,1],[1872,1919,1],[2160,2190,1],[2192,2193,1],[2200,2273,1],[2275,2303,1],[64336,64450,1],[64467,64829,1],[64832,64911,1],[64914,64967,1],[64975,65008,33],[65009,65023,1],[65136,65140,1],[65142,65276,1],[69216,69246,1],[69373,69375,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[126704,126705,1]]),g(d,"Armenian",[[1329,1366,1],[1369,1418,1],[1421,1423,1],[64275,64279,1]]),g(d,"Avestan",[[68352,68405,1],[68409,68415,1]]),g(d,"Balinese",[[6912,6988,1],[6992,7038,1]]),g(d,"Bamum",[[42656,42743,1],[92160,92728,1]]),g(d,"Bassa_Vah",[[92880,92909,1],[92912,92917,1]]),g(d,"Batak",[[7104,7155,1],[7164,7167,1]]),g(d,"Bengali",[[2432,2435,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2492,2500,1],[2503,2504,1],[2507,2510,1],[2519,2524,5],[2525,2527,2],[2528,2531,1],[2534,2558,1]]),g(d,"Bhaiksuki",[[72704,72712,1],[72714,72758,1],[72760,72773,1],[72784,72812,1]]),g(d,"Bopomofo",[[746,747,1],[12549,12591,1],[12704,12735,1]]),g(d,"Brahmi",[[69632,69709,1],[69714,69749,1],[69759,69759,1]]),g(d,"Braille",[[10240,10495,1]]),g(d,"Buginese",[[6656,6683,1],[6686,6687,1]]),g(d,"Buhid",[[5952,5971,1]]),g(d,"Canadian_Aboriginal",[[5120,5759,1],[6320,6389,1],[72368,72383,1]]),g(d,"Carian",[[66208,66256,1]]),g(d,"Caucasian_Albanian",[[66864,66915,1],[66927,66927,1]]),g(d,"Chakma",[[69888,69940,1],[69942,69959,1]]),g(d,"Cham",[[43520,43574,1],[43584,43597,1],[43600,43609,1],[43612,43615,1]]),g(d,"Cherokee",[[5024,5109,1],[5112,5117,1],[43888,43967,1]]),g(d,"Chorasmian",[[69552,69579,1]]),g(d,"Common",[[0,64,1],[91,96,1],[123,169,1],[171,185,1],[187,191,1],[215,247,32],[697,735,1],[741,745,1],[748,767,1],[884,894,10],[901,903,2],[1541,1548,7],[1563,1567,4],[1600,1757,157],[2274,2404,130],[2405,3647,1242],[4053,4056,1],[4347,5867,1520],[5868,5869,1],[5941,5942,1],[6146,6147,1],[6149,7379,1230],[7393,7401,8],[7402,7404,1],[7406,7411,1],[7413,7415,1],[7418,8192,774],[8193,8203,1],[8206,8292,1],[8294,8304,1],[8308,8318,1],[8320,8334,1],[8352,8384,1],[8448,8485,1],[8487,8489,1],[8492,8497,1],[8499,8525,1],[8527,8543,1],[8585,8587,1],[8592,9254,1],[9280,9290,1],[9312,10239,1],[10496,11123,1],[11126,11157,1],[11159,11263,1],[11776,11869,1],[12272,12292,1],[12294,12296,2],[12297,12320,1],[12336,12343,1],[12348,12351,1],[12443,12444,1],[12448,12539,91],[12540,12688,148],[12689,12703,1],[12736,12771,1],[12783,12832,49],[12833,12895,1],[12927,13007,1],[13055,13144,89],[13145,13311,1],[19904,19967,1],[42752,42785,1],[42888,42890,1],[43056,43065,1],[43310,43471,161],[43867,43882,15],[43883,64830,20947],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65126,1],[65128,65131,1],[65279,65281,2],[65282,65312,1],[65339,65344,1],[65371,65381,1],[65392,65438,46],[65439,65504,65],[65505,65510,1],[65512,65518,1],[65529,65533,1],[65792,65794,1],[65799,65843,1],[65847,65855,1],[65936,65948,1],[66e3,66044,1],[66273,66299,1],[113824,113827,1],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119142,1],[119146,119162,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119488,119507,1],[119520,119539,1],[119552,119638,1],[119648,119672,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120779,1],[120782,120831,1],[126065,126132,1],[126209,126269,1],[126976,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127232,127405,1],[127462,127487,1],[127489,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1],[130032,130041,1],[917505,917536,31],[917537,917631,1]]),g(d,"foldCommon",[[924,956,32]]),g(d,"Coptic",[[994,1007,1],[11392,11507,1],[11513,11519,1]]),g(d,"Cuneiform",[[73728,74649,1],[74752,74862,1],[74864,74868,1],[74880,75075,1]]),g(d,"Cypriot",[[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3]]),g(d,"Cypro_Minoan",[[77712,77810,1]]),g(d,"Cyrillic",[[1024,1156,1],[1159,1327,1],[7296,7304,1],[7467,7544,77],[11744,11775,1],[42560,42655,1],[65070,65071,1],[122928,122989,1],[123023,123023,1]]),g(d,"Deseret",[[66560,66639,1]]),g(d,"Devanagari",[[2304,2384,1],[2389,2403,1],[2406,2431,1],[43232,43263,1],[72448,72457,1]]),g(d,"Dives_Akuru",[[71936,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71989,1],[71991,71992,1],[71995,72006,1],[72016,72025,1]]),g(d,"Dogra",[[71680,71739,1]]),g(d,"Duployan",[[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[113820,113823,1]]),g(d,"Egyptian_Hieroglyphs",[[77824,78933,1]]),g(d,"Elbasan",[[66816,66855,1]]),g(d,"Elymaic",[[69600,69622,1]]),g(d,"Ethiopic",[[4608,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4957,4988,1],[4992,5017,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1]]),g(d,"Georgian",[[4256,4293,1],[4295,4301,6],[4304,4346,1],[4348,4351,1],[7312,7354,1],[7357,7359,1],[11520,11557,1],[11559,11565,6]]),g(d,"Glagolitic",[[11264,11359,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1]]),g(d,"Gothic",[[66352,66378,1]]),g(d,"Grantha",[[70400,70403,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70460,70468,1],[70471,70472,1],[70475,70477,1],[70480,70487,7],[70493,70499,1],[70502,70508,1],[70512,70516,1]]),g(d,"Greek",[[880,883,1],[885,887,1],[890,893,1],[895,900,5],[902,904,2],[905,906,1],[908,910,2],[911,929,1],[931,993,1],[1008,1023,1],[7462,7466,1],[7517,7521,1],[7526,7530,1],[7615,7936,321],[7937,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8132,1],[8134,8147,1],[8150,8155,1],[8157,8175,1],[8178,8180,1],[8182,8190,1],[8486,43877,35391],[65856,65934,1],[65952,119296,53344],[119297,119365,1]]),g(d,"foldGreek",[[181,837,656]]),g(d,"Gujarati",[[2689,2691,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2748,2757,1],[2759,2761,1],[2763,2765,1],[2768,2784,16],[2785,2787,1],[2790,2801,1],[2809,2815,1]]),g(d,"Gunjala_Gondi",[[73056,73061,1],[73063,73064,1],[73066,73102,1],[73104,73105,1],[73107,73112,1],[73120,73129,1]]),g(d,"Gurmukhi",[[2561,2563,1],[2565,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2649,8],[2650,2652,1],[2654,2662,8],[2663,2678,1]]),g(d,"Han",[[11904,11929,1],[11931,12019,1],[12032,12245,1],[12293,12295,2],[12321,12329,1],[12344,12347,1],[13312,19903,1],[19968,40959,1],[63744,64109,1],[64112,64217,1],[94178,94179,1],[94192,94193,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),g(d,"Hangul",[[4352,4607,1],[12334,12335,1],[12593,12686,1],[12800,12830,1],[12896,12926,1],[43360,43388,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1]]),g(d,"Hanifi_Rohingya",[[68864,68903,1],[68912,68921,1]]),g(d,"Hanunoo",[[5920,5940,1]]),g(d,"Hatran",[[67808,67826,1],[67828,67829,1],[67835,67839,1]]),g(d,"Hebrew",[[1425,1479,1],[1488,1514,1],[1519,1524,1],[64285,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64335,1]]),g(d,"Hiragana",[[12353,12438,1],[12445,12447,1],[110593,110879,1],[110898,110928,30],[110929,110930,1],[127488,127488,1]]),g(d,"Imperial_Aramaic",[[67648,67669,1],[67671,67679,1]]),g(d,"Inherited",[[768,879,1],[1157,1158,1],[1611,1621,1],[1648,2385,737],[2386,2388,1],[6832,6862,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8204,8205,1],[8400,8432,1],[12330,12333,1],[12441,12442,1],[65024,65039,1],[65056,65069,1],[66045,66272,227],[70459,118528,48069],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[917760,917999,1]]),g(d,"foldInherited",[[921,953,32],[8126,8126,1]]),g(d,"Inscriptional_Pahlavi",[[68448,68466,1],[68472,68479,1]]),g(d,"Inscriptional_Parthian",[[68416,68437,1],[68440,68447,1]]),g(d,"Javanese",[[43392,43469,1],[43472,43481,1],[43486,43487,1]]),g(d,"Kaithi",[[69760,69826,1],[69837,69837,1]]),g(d,"Kannada",[[3200,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3260,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3293,3294,1],[3296,3299,1],[3302,3311,1],[3313,3315,1]]),g(d,"Katakana",[[12449,12538,1],[12541,12543,1],[12784,12799,1],[13008,13054,1],[13056,13143,1],[65382,65391,1],[65393,65437,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110880,288],[110881,110882,1],[110933,110948,15],[110949,110951,1]]),g(d,"Kawi",[[73472,73488,1],[73490,73530,1],[73534,73561,1]]),g(d,"Kayah_Li",[[43264,43309,1],[43311,43311,1]]),g(d,"Kharoshthi",[[68096,68099,1],[68101,68102,1],[68108,68115,1],[68117,68119,1],[68121,68149,1],[68152,68154,1],[68159,68168,1],[68176,68184,1]]),g(d,"Khitan_Small_Script",[[94180,101120,6940],[101121,101589,1]]),g(d,"Khmer",[[6016,6109,1],[6112,6121,1],[6128,6137,1],[6624,6655,1]]),g(d,"Khojki",[[70144,70161,1],[70163,70209,1]]),g(d,"Khudawadi",[[70320,70378,1],[70384,70393,1]]),g(d,"Lao",[[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3773,1],[3776,3780,1],[3782,3784,2],[3785,3790,1],[3792,3801,1],[3804,3807,1]]),g(d,"Latin",[[65,90,1],[97,122,1],[170,186,16],[192,214,1],[216,246,1],[248,696,1],[736,740,1],[7424,7461,1],[7468,7516,1],[7522,7525,1],[7531,7543,1],[7545,7614,1],[7680,7935,1],[8305,8319,14],[8336,8348,1],[8490,8491,1],[8498,8526,28],[8544,8584,1],[11360,11391,1],[42786,42887,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43007,1],[43824,43866,1],[43868,43876,1],[43878,43881,1],[64256,64262,1],[65313,65338,1],[65345,65370,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[122624,122654,1],[122661,122666,1]]),g(d,"Lepcha",[[7168,7223,1],[7227,7241,1],[7245,7247,1]]),g(d,"Limbu",[[6400,6430,1],[6432,6443,1],[6448,6459,1],[6464,6468,4],[6469,6479,1]]),g(d,"Linear_A",[[67072,67382,1],[67392,67413,1],[67424,67431,1]]),g(d,"Linear_B",[[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1]]),g(d,"Lisu",[[42192,42239,1],[73648,73648,1]]),g(d,"Lycian",[[66176,66204,1]]),g(d,"Lydian",[[67872,67897,1],[67903,67903,1]]),g(d,"Mahajani",[[69968,70006,1]]),g(d,"Makasar",[[73440,73464,1]]),g(d,"Malayalam",[[3328,3340,1],[3342,3344,1],[3346,3396,1],[3398,3400,1],[3402,3407,1],[3412,3427,1],[3430,3455,1]]),g(d,"Mandaic",[[2112,2139,1],[2142,2142,1]]),g(d,"Manichaean",[[68288,68326,1],[68331,68342,1]]),g(d,"Marchen",[[72816,72847,1],[72850,72871,1],[72873,72886,1]]),g(d,"Masaram_Gondi",[[72960,72966,1],[72968,72969,1],[72971,73014,1],[73018,73020,2],[73021,73023,2],[73024,73031,1],[73040,73049,1]]),g(d,"Medefaidrin",[[93760,93850,1]]),g(d,"Meetei_Mayek",[[43744,43766,1],[43968,44013,1],[44016,44025,1]]),g(d,"Mende_Kikakui",[[124928,125124,1],[125127,125142,1]]),g(d,"Meroitic_Cursive",[[68e3,68023,1],[68028,68047,1],[68050,68095,1]]),g(d,"Meroitic_Hieroglyphs",[[67968,67999,1]]),g(d,"Miao",[[93952,94026,1],[94031,94087,1],[94095,94111,1]]),g(d,"Modi",[[71168,71236,1],[71248,71257,1]]),g(d,"Mongolian",[[6144,6145,1],[6148,6150,2],[6151,6169,1],[6176,6264,1],[6272,6314,1],[71264,71276,1]]),g(d,"Mro",[[92736,92766,1],[92768,92777,1],[92782,92783,1]]),g(d,"Multani",[[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70313,1]]),g(d,"Myanmar",[[4096,4255,1],[43488,43518,1],[43616,43647,1]]),g(d,"Nabataean",[[67712,67742,1],[67751,67759,1]]),g(d,"Nag_Mundari",[[124112,124153,1]]),g(d,"Nandinagari",[[72096,72103,1],[72106,72151,1],[72154,72164,1]]),g(d,"New_Tai_Lue",[[6528,6571,1],[6576,6601,1],[6608,6618,1],[6622,6623,1]]),g(d,"Newa",[[70656,70747,1],[70749,70753,1]]),g(d,"Nko",[[1984,2042,1],[2045,2047,1]]),g(d,"Nushu",[[94177,110960,16783],[110961,111355,1]]),g(d,"Nyiakeng_Puachue_Hmong",[[123136,123180,1],[123184,123197,1],[123200,123209,1],[123214,123215,1]]),g(d,"Ogham",[[5760,5788,1]]),g(d,"Ol_Chiki",[[7248,7295,1]]),g(d,"Old_Hungarian",[[68736,68786,1],[68800,68850,1],[68858,68863,1]]),g(d,"Old_Italic",[[66304,66339,1],[66349,66351,1]]),g(d,"Old_North_Arabian",[[68224,68255,1]]),g(d,"Old_Permic",[[66384,66426,1]]),g(d,"Old_Persian",[[66464,66499,1],[66504,66517,1]]),g(d,"Old_Sogdian",[[69376,69415,1]]),g(d,"Old_South_Arabian",[[68192,68223,1]]),g(d,"Old_Turkic",[[68608,68680,1]]),g(d,"Old_Uyghur",[[69488,69513,1]]),g(d,"Oriya",[[2817,2819,1],[2821,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2876,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2908,2909,1],[2911,2915,1],[2918,2935,1]]),g(d,"Osage",[[66736,66771,1],[66776,66811,1]]),g(d,"Osmanya",[[66688,66717,1],[66720,66729,1]]),g(d,"Pahawh_Hmong",[[92928,92997,1],[93008,93017,1],[93019,93025,1],[93027,93047,1],[93053,93071,1]]),g(d,"Palmyrene",[[67680,67711,1]]),g(d,"Pau_Cin_Hau",[[72384,72440,1]]),g(d,"Phags_Pa",[[43072,43127,1]]),g(d,"Phoenician",[[67840,67867,1],[67871,67871,1]]),g(d,"Psalter_Pahlavi",[[68480,68497,1],[68505,68508,1],[68521,68527,1]]),g(d,"Rejang",[[43312,43347,1],[43359,43359,1]]),g(d,"Runic",[[5792,5866,1],[5870,5880,1]]),g(d,"Samaritan",[[2048,2093,1],[2096,2110,1]]),g(d,"Saurashtra",[[43136,43205,1],[43214,43225,1]]),g(d,"Sharada",[[70016,70111,1]]),g(d,"Shavian",[[66640,66687,1]]),g(d,"Siddham",[[71040,71093,1],[71096,71133,1]]),g(d,"SignWriting",[[120832,121483,1],[121499,121503,1],[121505,121519,1]]),g(d,"Sinhala",[[3457,3459,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3558,3567,1],[3570,3572,1],[70113,70132,1]]),g(d,"Sogdian",[[69424,69465,1]]),g(d,"Sora_Sompeng",[[69840,69864,1],[69872,69881,1]]),g(d,"Soyombo",[[72272,72354,1]]),g(d,"Sundanese",[[7040,7103,1],[7360,7367,1]]),g(d,"Syloti_Nagri",[[43008,43052,1]]),g(d,"Syriac",[[1792,1805,1],[1807,1866,1],[1869,1871,1],[2144,2154,1]]),g(d,"Tagalog",[[5888,5909,1],[5919,5919,1]]),g(d,"Tagbanwa",[[5984,5996,1],[5998,6e3,1],[6002,6003,1]]),g(d,"Tai_Le",[[6480,6509,1],[6512,6516,1]]),g(d,"Tai_Tham",[[6688,6750,1],[6752,6780,1],[6783,6793,1],[6800,6809,1],[6816,6829,1]]),g(d,"Tai_Viet",[[43648,43714,1],[43739,43743,1]]),g(d,"Takri",[[71296,71353,1],[71360,71369,1]]),g(d,"Tamil",[[2946,2947,1],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3006,3010,1],[3014,3016,1],[3018,3021,1],[3024,3031,7],[3046,3066,1],[73664,73713,1],[73727,73727,1]]),g(d,"Tangsa",[[92784,92862,1],[92864,92873,1]]),g(d,"Tangut",[[94176,94208,32],[94209,100343,1],[100352,101119,1],[101632,101640,1]]),g(d,"Telugu",[[3072,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3132,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3160,3162,1],[3165,3168,3],[3169,3171,1],[3174,3183,1],[3191,3199,1]]),g(d,"Thaana",[[1920,1969,1]]),g(d,"Thai",[[3585,3642,1],[3648,3675,1]]),g(d,"Tibetan",[[3840,3911,1],[3913,3948,1],[3953,3991,1],[3993,4028,1],[4030,4044,1],[4046,4052,1],[4057,4058,1]]),g(d,"Tifinagh",[[11568,11623,1],[11631,11632,1],[11647,11647,1]]),g(d,"Tirhuta",[[70784,70855,1],[70864,70873,1]]),g(d,"Toto",[[123536,123566,1]]),g(d,"Ugaritic",[[66432,66461,1],[66463,66463,1]]),g(d,"Vai",[[42240,42539,1]]),g(d,"Vithkuqi",[[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1]]),g(d,"Wancho",[[123584,123641,1],[123647,123647,1]]),g(d,"Warang_Citi",[[71840,71922,1],[71935,71935,1]]),g(d,"Yezidi",[[69248,69289,1],[69291,69293,1],[69296,69297,1]]),g(d,"Yi",[[40960,42124,1],[42128,42182,1]]),g(d,"Zanabazar_Square",[[72192,72263,1]]),g(d,"CATEGORIES",new Map([["C",d.C],["Cc",d.Cc],["Cf",d.Cf],["Co",d.Co],["Cs",d.Cs],["L",d.L],["Ll",d.Ll],["Lm",d.Lm],["Lo",d.Lo],["Lt",d.Lt],["Lu",d.Lu],["M",d.M],["Mc",d.Mc],["Me",d.Me],["Mn",d.Mn],["N",d.N],["Nd",d.Nd],["Nl",d.Nl],["No",d.No],["P",d.P],["Pc",d.Pc],["Pd",d.Pd],["Pe",d.Pe],["Pf",d.Pf],["Pi",d.Pi],["Po",d.Po],["Ps",d.Ps],["S",d.S],["Sc",d.Sc],["Sk",d.Sk],["Sm",d.Sm],["So",d.So],["Z",d.Z],["Zl",d.Zl],["Zp",d.Zp],["Zs",d.Zs]])),g(d,"SCRIPTS",new Map([["Adlam",d.Adlam],["Ahom",d.Ahom],["Anatolian_Hieroglyphs",d.Anatolian_Hieroglyphs],["Arabic",d.Arabic],["Armenian",d.Armenian],["Avestan",d.Avestan],["Balinese",d.Balinese],["Bamum",d.Bamum],["Bassa_Vah",d.Bassa_Vah],["Batak",d.Batak],["Bengali",d.Bengali],["Bhaiksuki",d.Bhaiksuki],["Bopomofo",d.Bopomofo],["Brahmi",d.Brahmi],["Braille",d.Braille],["Buginese",d.Buginese],["Buhid",d.Buhid],["Canadian_Aboriginal",d.Canadian_Aboriginal],["Carian",d.Carian],["Caucasian_Albanian",d.Caucasian_Albanian],["Chakma",d.Chakma],["Cham",d.Cham],["Cherokee",d.Cherokee],["Chorasmian",d.Chorasmian],["Common",d.Common],["Coptic",d.Coptic],["Cuneiform",d.Cuneiform],["Cypriot",d.Cypriot],["Cypro_Minoan",d.Cypro_Minoan],["Cyrillic",d.Cyrillic],["Deseret",d.Deseret],["Devanagari",d.Devanagari],["Dives_Akuru",d.Dives_Akuru],["Dogra",d.Dogra],["Duployan",d.Duployan],["Egyptian_Hieroglyphs",d.Egyptian_Hieroglyphs],["Elbasan",d.Elbasan],["Elymaic",d.Elymaic],["Ethiopic",d.Ethiopic],["Georgian",d.Georgian],["Glagolitic",d.Glagolitic],["Gothic",d.Gothic],["Grantha",d.Grantha],["Greek",d.Greek],["Gujarati",d.Gujarati],["Gunjala_Gondi",d.Gunjala_Gondi],["Gurmukhi",d.Gurmukhi],["Han",d.Han],["Hangul",d.Hangul],["Hanifi_Rohingya",d.Hanifi_Rohingya],["Hanunoo",d.Hanunoo],["Hatran",d.Hatran],["Hebrew",d.Hebrew],["Hiragana",d.Hiragana],["Imperial_Aramaic",d.Imperial_Aramaic],["Inherited",d.Inherited],["Inscriptional_Pahlavi",d.Inscriptional_Pahlavi],["Inscriptional_Parthian",d.Inscriptional_Parthian],["Javanese",d.Javanese],["Kaithi",d.Kaithi],["Kannada",d.Kannada],["Katakana",d.Katakana],["Kawi",d.Kawi],["Kayah_Li",d.Kayah_Li],["Kharoshthi",d.Kharoshthi],["Khitan_Small_Script",d.Khitan_Small_Script],["Khmer",d.Khmer],["Khojki",d.Khojki],["Khudawadi",d.Khudawadi],["Lao",d.Lao],["Latin",d.Latin],["Lepcha",d.Lepcha],["Limbu",d.Limbu],["Linear_A",d.Linear_A],["Linear_B",d.Linear_B],["Lisu",d.Lisu],["Lycian",d.Lycian],["Lydian",d.Lydian],["Mahajani",d.Mahajani],["Makasar",d.Makasar],["Malayalam",d.Malayalam],["Mandaic",d.Mandaic],["Manichaean",d.Manichaean],["Marchen",d.Marchen],["Masaram_Gondi",d.Masaram_Gondi],["Medefaidrin",d.Medefaidrin],["Meetei_Mayek",d.Meetei_Mayek],["Mende_Kikakui",d.Mende_Kikakui],["Meroitic_Cursive",d.Meroitic_Cursive],["Meroitic_Hieroglyphs",d.Meroitic_Hieroglyphs],["Miao",d.Miao],["Modi",d.Modi],["Mongolian",d.Mongolian],["Mro",d.Mro],["Multani",d.Multani],["Myanmar",d.Myanmar],["Nabataean",d.Nabataean],["Nag_Mundari",d.Nag_Mundari],["Nandinagari",d.Nandinagari],["New_Tai_Lue",d.New_Tai_Lue],["Newa",d.Newa],["Nko",d.Nko],["Nushu",d.Nushu],["Nyiakeng_Puachue_Hmong",d.Nyiakeng_Puachue_Hmong],["Ogham",d.Ogham],["Ol_Chiki",d.Ol_Chiki],["Old_Hungarian",d.Old_Hungarian],["Old_Italic",d.Old_Italic],["Old_North_Arabian",d.Old_North_Arabian],["Old_Permic",d.Old_Permic],["Old_Persian",d.Old_Persian],["Old_Sogdian",d.Old_Sogdian],["Old_South_Arabian",d.Old_South_Arabian],["Old_Turkic",d.Old_Turkic],["Old_Uyghur",d.Old_Uyghur],["Oriya",d.Oriya],["Osage",d.Osage],["Osmanya",d.Osmanya],["Pahawh_Hmong",d.Pahawh_Hmong],["Palmyrene",d.Palmyrene],["Pau_Cin_Hau",d.Pau_Cin_Hau],["Phags_Pa",d.Phags_Pa],["Phoenician",d.Phoenician],["Psalter_Pahlavi",d.Psalter_Pahlavi],["Rejang",d.Rejang],["Runic",d.Runic],["Samaritan",d.Samaritan],["Saurashtra",d.Saurashtra],["Sharada",d.Sharada],["Shavian",d.Shavian],["Siddham",d.Siddham],["SignWriting",d.SignWriting],["Sinhala",d.Sinhala],["Sogdian",d.Sogdian],["Sora_Sompeng",d.Sora_Sompeng],["Soyombo",d.Soyombo],["Sundanese",d.Sundanese],["Syloti_Nagri",d.Syloti_Nagri],["Syriac",d.Syriac],["Tagalog",d.Tagalog],["Tagbanwa",d.Tagbanwa],["Tai_Le",d.Tai_Le],["Tai_Tham",d.Tai_Tham],["Tai_Viet",d.Tai_Viet],["Takri",d.Takri],["Tamil",d.Tamil],["Tangsa",d.Tangsa],["Tangut",d.Tangut],["Telugu",d.Telugu],["Thaana",d.Thaana],["Thai",d.Thai],["Tibetan",d.Tibetan],["Tifinagh",d.Tifinagh],["Tirhuta",d.Tirhuta],["Toto",d.Toto],["Ugaritic",d.Ugaritic],["Vai",d.Vai],["Vithkuqi",d.Vithkuqi],["Wancho",d.Wancho],["Warang_Citi",d.Warang_Citi],["Yezidi",d.Yezidi],["Yi",d.Yi],["Zanabazar_Square",d.Zanabazar_Square]])),g(d,"FOLD_CATEGORIES",new Map([["L",d.foldL],["Ll",d.foldLl],["Lt",d.foldLt],["Lu",d.foldLu],["M",d.foldM],["Mn",d.foldMn]])),g(d,"FOLD_SCRIPT",new Map([["Common",d.foldCommon],["Greek",d.foldGreek],["Inherited",d.foldInherited]]));let je=d;class K{static is32(e,t){let r=0,s=e.length;for(;r<s;){let i=r+Math.floor((s-r)/2),a=e[i];if(a[0]<=t&&t<=a[1])return(t-a[0])%a[2]===0;t<a[0]?s=i:r=i+1}return!1}static is(e,t){if(t<=this.MAX_LATIN1){for(let r of e)if(!(t>r[1]))return t<r[0]?!1:(t-r[0])%r[2]===0;return!1}return e.length>0&&t>=e[0][0]&&this.is32(e,t)}static isUpper(e){if(e<=this.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return this.is(je.Upper,e)}static isPrint(e){return e<=this.MAX_LATIN1?e>=32&&e<127||e>=161&&e!==173:this.is(je.L,e)||this.is(je.M,e)||this.is(je.N,e)||this.is(je.P,e)||this.is(je.S,e)}static simpleFold(e){if(je.CASE_ORBIT.has(e))return je.CASE_ORBIT.get(e);const t=x.toLowerCase(e);return t!==e?t:x.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e<0||t<0||e===t)return!0;if(e<=this.MAX_ASCII&&t<=this.MAX_ASCII)return x.CODES.get("A")<=e&&e<=x.CODES.get("Z")&&(e|=32),x.CODES.get("A")<=t&&t<=x.CODES.get("Z")&&(t|=32),e===t;for(let r=this.simpleFold(e);r!==e;r=this.simpleFold(r))if(r===t)return!0;return!1}}g(K,"MAX_RUNE",1114111),g(K,"MAX_ASCII",127),g(K,"MAX_LATIN1",255),g(K,"MAX_BMP",65535),g(K,"MIN_FOLD",65),g(K,"MAX_FOLD",125251);class Q{static emptyInts(){return[]}static isalnum(e){return x.CODES.get("0")<=e&&e<=x.CODES.get("9")||x.CODES.get("a")<=e&&e<=x.CODES.get("z")||x.CODES.get("A")<=e&&e<=x.CODES.get("Z")}static unhex(e){return x.CODES.get("0")<=e&&e<=x.CODES.get("9")?e-x.CODES.get("0"):x.CODES.get("a")<=e&&e<=x.CODES.get("f")?e-x.CODES.get("a")+10:x.CODES.get("A")<=e&&e<=x.CODES.get("F")?e-x.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(K.isPrint(e))this.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case x.CODES.get('"'):t+='\\"';break;case x.CODES.get("\\"):t+="\\\\";break;case x.CODES.get("	"):t+="\\t";break;case x.CODES.get(`
`):t+="\\n";break;case x.CODES.get("\r"):t+="\\r";break;case x.CODES.get("\b"):t+="\\b";break;case x.CODES.get("\f"):t+="\\f";break;default:{let r=e.toString(16);e<256?(t+="\\x",r.length===1&&(t+="0"),t+=r):t+=`\\x{${r}}`;break}}return t}static stringToRunes(e){return String(e).split("").map(t=>t.codePointAt(0))}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return x.CODES.get("a")<=e&&e<=x.CODES.get("z")||x.CODES.get("A")<=e&&e<=x.CODES.get("Z")||x.CODES.get("0")<=e&&e<=x.CODES.get("9")||e===x.CODES.get("_")}static emptyOpContext(e,t){let r=0;return e<0&&(r|=this.EMPTY_BEGIN_TEXT|this.EMPTY_BEGIN_LINE),e===x.CODES.get(`
`)&&(r|=this.EMPTY_BEGIN_LINE),t<0&&(r|=this.EMPTY_END_TEXT|this.EMPTY_END_LINE),t===x.CODES.get(`
`)&&(r|=this.EMPTY_END_LINE),this.isWordRune(e)!==this.isWordRune(t)?r|=this.EMPTY_WORD_BOUNDARY:r|=this.EMPTY_NO_WORD_BOUNDARY,r}static quoteMeta(e){return e.split("").map(t=>this.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>K.MAX_BMP?2:1}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Array.from(new TextEncoder().encode(e));{let t=[],r=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=i&63|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder)return new TextDecoder("utf-8").decode(new Uint8Array(e));{let t=[],r=0,s=0;for(;r<e.length;){let i=e[r++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[r++];t[s++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){let a=e[r++],l=e[r++],u=e[r++],f=((i&7)<<18|(a&63)<<12|(l&63)<<6|u&63)-65536;t[s++]=String.fromCharCode(55296+(f>>10)),t[s++]=String.fromCharCode(56320+(f&1023))}else{let a=e[r++],l=e[r++];t[s++]=String.fromCharCode((i&15)<<12|(a&63)<<6|l&63)}}return t.join("")}}}g(Q,"METACHARACTERS","\\.+*?()|[]{}^$"),g(Q,"EMPTY_BEGIN_LINE",1),g(Q,"EMPTY_END_LINE",2),g(Q,"EMPTY_BEGIN_TEXT",4),g(Q,"EMPTY_END_TEXT",8),g(Q,"EMPTY_WORD_BOUNDARY",16),g(Q,"EMPTY_NO_WORD_BOUNDARY",32),g(Q,"EMPTY_ALL",-1);const y1=(n=[],e=0)=>{const t={};for(let r=0;r<n.length;r++){const s=n[r],i=e+r;t[s]=i,t[i]=s}return Object.freeze(t)},Yr=class Yr{getEncoding(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===Yr.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===Yr.Encoding.UTF_16}};g(Yr,"Encoding",y1(["UTF_16","UTF_8"]));let dn=Yr;class Sc extends dn{constructor(e=null){super(),this.bytes=e}getEncoding(){return dn.Encoding.UTF_8}asCharSequence(){return Q.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}}class cf extends dn{constructor(e=null){super(),this.charSequence=e}getEncoding(){return dn.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return this.charSequence.toString().split("").map(e=>e.codePointAt(0))}length(){return this.charSequence.length}}class ai{static utf16(e){return new cf(e)}static utf8(e){return Array.isArray(e)?new Sc(e):new Sc(Q.stringToUtf8ByteArray(e))}}class ki extends Error{constructor(e){super(e),this.name="RE2JSException"}}class Ae extends ki{constructor(e,t=null){let r=`error parsing regexp: ${e}`;t&&(r+=`: \`${t}\``),super(r),this.name="RE2JSSyntaxException",this.message=r,this.error=e,this.input=t}getDescription(){return this.error}getPattern(){return this.input}}class uf extends ki{constructor(e){super(e),this.name="RE2JSCompileException"}}class Ut extends ki{constructor(e){super(e),this.name="RE2JSGroupException"}}class hf extends ki{constructor(e){super(e),this.name="RE2JSFlagsException"}}class df{static quoteReplacement(e){return e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(t=>{const r=t.codePointAt(0);return r===x.CODES["\\"]||r===x.CODES.$?`\\${t}`:t}).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const r=this.patternInput.re2();this.patternGroupCount=r.numberOfCapturingGroups(),this.groups=[],this.namedGroups=r.namedGroups,t instanceof dn?this.resetMatcherInput(t):Array.isArray(t)?this.resetMatcherInput(ai.utf8(t)):this.resetMatcherInput(ai.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Ut(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Ut(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}group(e=0){if(typeof e=="string"){const s=this.namedGroups[e];if(!Number.isFinite(s))throw new Ut(`group '${e}' not found`);e=s}const t=this.start(e),r=this.end(e);return t<0&&r<0?null:this.substring(t,r)}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new Ut(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new Ut("perhaps no match attempted");if(e===0||this.hasGroups)return;let t=this.groups[1]+1;t>this.matcherInputLength&&(t=this.matcherInputLength);const r=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!r[0])throw new Ut("inconsistency in matching group data");this.groups=r[1],this.hasGroups=!0}matches(){return this.genMatch(0,F.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,F.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new Ut(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}return e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1]&&e++),this.genMatch(e,F.UNANCHORED)}genMatch(e,t){const r=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return r[0]?(this.groups=r[1],this.hasMatch=!0,this.hasGroups=!1,this.anchorFlag=t,!0):!1}substring(e,t){return this.matcherInput.isUTF8Encoding()?Q.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let r="";const s=this.start(),i=this.end();return this.appendPos<s&&(r+=this.substring(this.appendPos,s)),this.appendPos=i,r+=t?this.appendReplacementInternalPerl(e):this.appendReplacementInternal(e),r}appendReplacementInternal(e){let t="",r=0;const s=e.length;for(let i=0;i<s-1;i++){if(e.codePointAt(i)===x.CODES.get("\\")){r<i&&(t+=e.substring(r,i)),i++,r=i;continue}if(e.codePointAt(i)===x.CODES.get("$")){let a=e.codePointAt(i+1);if(x.CODES.get("0")<=a&&a<=x.CODES.get("9")){let l=a-x.CODES.get("0");for(r<i&&(t+=e.substring(r,i)),i+=2;i<s&&(a=e.codePointAt(i),!(a<x.CODES.get("0")||a>x.CODES.get("9")||l*10+a-x.CODES.get("0")>this.patternGroupCount));i++)l=l*10+a-x.CODES.get("0");if(l>this.patternGroupCount)throw new Ut(`n > number of groups: ${l}`);const u=this.group(l);u!==null&&(t+=u),r=i,i--;continue}else if(a===x.CODES.get("{")){r<i&&(t+=e.substring(r,i)),i++;let l=i+1;for(;l<e.length&&e.codePointAt(l)!==x.CODES.get("}")&&e.codePointAt(l)!==x.CODES.get(" ");)l++;if(l===e.length||e.codePointAt(l)!==x.CODES.get("}"))throw new Ut("named capture group is missing trailing '}'");const u=e.substring(i+1,l);t+=this.group(u),r=l+1}}}return r<s&&(t+=e.substring(r,s)),t}appendReplacementInternalPerl(e){let t="",r=0;const s=e.length;for(let i=0;i<s-1;i++)if(e.codePointAt(i)===x.CODES.get("$")){let a=e.codePointAt(i+1);if(x.CODES.get("$")===a){r<i&&(t+=e.substring(r,i)),t+="$",i++,r=i+1;continue}else if(x.CODES.get("&")===a){r<i&&(t+=e.substring(r,i));const l=this.group(0);l!==null?t+=l:t+="$&",i++,r=i+1;continue}else if(x.CODES.get("1")<=a&&a<=x.CODES.get("9")){let l=a-x.CODES.get("0");for(r<i&&(t+=e.substring(r,i)),i+=2;i<s&&(a=e.codePointAt(i),!(a<x.CODES.get("0")||a>x.CODES.get("9")||l*10+a-x.CODES.get("0")>this.patternGroupCount));i++)l=l*10+a-x.CODES.get("0");if(l>this.patternGroupCount){t+=`$${l}`,r=i,i--;continue}const u=this.group(l);u!==null&&(t+=u),r=i,i--;continue}else if(a===x.CODES.get("<")){r<i&&(t+=e.substring(r,i)),i++;let l=i+1;for(;l<e.length&&e.codePointAt(l)!==x.CODES.get(">")&&e.codePointAt(l)!==x.CODES.get(" ");)l++;if(l===e.length||e.codePointAt(l)!==x.CODES.get(">")){t+=e.substring(i-1,l+1),r=l+1;continue}const u=e.substring(i+1,l);Object.prototype.hasOwnProperty.call(this.namedGroups,u)?t+=this.group(u):t+=`$<${u}>`,r=l+1}}return r<s&&(t+=e.substring(r,s)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,r=!1){let s="";for(this.reset();this.find()&&(s+=this.appendReplacement(e,r),!!t););return s+=this.appendTail(),s}}class tn{static EOF(){return-8}canCheckPrefix(){return!0}endPos(){return this.end}}class ff extends tn{constructor(e,t=0,r=e.length){super(),this.bytes=e,this.start=t,this.end=r}step(e){if(e+=this.start,e>=this.end)return tn.EOF();let t=this.bytes[e++]&255;return t&128?(t&224)===192?(t=t&31,e>=this.end?tn.EOF():(t=t<<6|this.bytes[e++]&63,t<<3|2)):(t&240)===224?(t=t&15,e+1>=this.end?tn.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|3)):(t=t&7,e+2>=this.end?tn.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|4)):t<<3|1}index(e,t){t+=this.start;const r=this.indexOf(this.bytes,e.prefixUTF8,t);return r<0?r:r-t}context(e){e+=this.start;let t=-1;if(e>this.start&&e<=this.end){let s=e-1;if(t=this.bytes[s--],t>=128){let i=e-4;for(i<this.start&&(i=this.start);s>=i&&(this.bytes[s]&192)===128;)s--;s<this.start&&(s=this.start),t=this.step(s)>>3}}const r=e<this.end?this.step(e)>>3:-1;return Q.emptyOpContext(t,r)}indexOf(e,t,r=0){let s=t.length;if(s===0)return-1;let i=e.length;for(let a=r;a<=i-s;a++)for(let l=0;l<s&&e[a+l]===t[l];l++)if(l===s-1)return a;return-1}}class pf extends tn{constructor(e,t=0,r=e.length){super(),this.charSequence=e,this.start=t,this.end=r}step(e){if(e+=this.start,e<this.end){const t=this.charSequence.codePointAt(e);return t<<3|Q.charCount(t)}else return tn.EOF()}index(e,t){t+=this.start;const r=this.charSequence.indexOf(e.prefix,t);return r<0?r:r-t}context(e){e+=this.start;const t=e>0&&e<=this.charSequence.length?this.charSequence.codePointAt(e-1):-1,r=e<this.charSequence.length?this.charSequence.codePointAt(e):-1;return Q.emptyOpContext(t,r)}}class Te{static fromUTF8(e,t=0,r=e.length){return new ff(e,t,r)}static fromUTF16(e,t=0,r=e.length){return new pf(e,t,r)}}const G=class G{static isPseudoOp(e){return e>=G.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===x.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new G(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t}constructor(e){this.op=e,this.flags=0,this.subs=G.emptySubs(),this.runes=null,this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups={}}reinit(){this.flags=0,this.subs=G.emptySubs(),this.runes=null,this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups={}}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case G.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case G.Op.EMPTY_MATCH:e+="(?:)";break;case G.Op.STAR:case G.Op.PLUS:case G.Op.QUEST:case G.Op.REPEAT:{const t=this.subs[0];switch(t.op>G.Op.CAPTURE||t.op===G.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case G.Op.STAR:e+="*";break;case G.Op.PLUS:e+="+";break;case G.Op.QUEST:e+="?";break;case G.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}this.flags&F.NON_GREEDY&&(e+="?");break}case G.Op.CONCAT:{for(let t of this.subs)t.op===G.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break}case G.Op.ALTERNATE:{let t="";for(let r of this.subs)e+=t,t="|",e+=r.appendTo();break}case G.Op.LITERAL:this.flags&F.FOLD_CASE&&(e+="(?i:");for(let t of this.runes)e+=Q.escapeRune(t);this.flags&F.FOLD_CASE&&(e+=")");break;case G.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case G.Op.ANY_CHAR:e+="(?s:.)";break;case G.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==G.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case G.Op.BEGIN_TEXT:e+="\\A";break;case G.Op.END_TEXT:this.flags&F.WAS_DOLLAR?e+="(?-m:$)":e+="\\z";break;case G.Op.BEGIN_LINE:e+="^";break;case G.Op.END_LINE:e+="$";break;case G.Op.WORD_BOUNDARY:e+="\\b";break;case G.Op.NO_WORD_BOUNDARY:e+="\\B";break;case G.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===K.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const r=this.runes[t]+1,s=this.runes[t+1]-1;e+=G.quoteIfHyphen(r),e+=Q.escapeRune(r),r!==s&&(e+="-",e+=G.quoteIfHyphen(s),e+=Q.escapeRune(s))}}else for(let t=0;t<this.runes.length;t+=2){const r=this.runes[t],s=this.runes[t+1];e+=G.quoteIfHyphen(r),e+=Q.escapeRune(r),r!==s&&(e+="-",e+=G.quoteIfHyphen(s),e+=Q.escapeRune(s))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===G.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const r=t.maxCap();e<r&&(e=r)}return e}equals(e){if(!(e!==null&&e instanceof G)||this.op!==e.op)return!1;switch(this.op){case G.Op.END_TEXT:{if((this.flags&F.WAS_DOLLAR)!==(e.flags&F.WAS_DOLLAR))return!1;break}case G.Op.LITERAL:case G.Op.CHAR_CLASS:{if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break}case G.Op.ALTERNATE:case G.Op.CONCAT:{if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break}case G.Op.STAR:case G.Op.PLUS:case G.Op.QUEST:{if((this.flags&F.NON_GREEDY)!==(e.flags&F.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break}case G.Op.REPEAT:{if((this.flags&F.NON_GREEDY)!==(e.flags&F.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break}case G.Op.CAPTURE:{if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break}}return!0}};g(G,"Op",y1(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","LEFT_PAREN","VERTICAL_BAR"]));let N=G;const pe=class pe{static isRuneOp(e){return pe.RUNE<=e&&e<=pe.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let r of e)t+=Q.escapeRune(r);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=null}matchRune(e){if(this.runes.length===1){const s=this.runes[0];return this.arg&F.FOLD_CASE?K.equalsIgnoreCase(s,e):e===s}for(let s=0;s<this.runes.length&&s<=8;s+=2){if(e<this.runes[s])return!1;if(e<=this.runes[s+1])return!0}let t=0,r=this.runes.length/2|0;for(;t<r;){const s=t+((r-t)/2|0);if(this.runes[2*s]<=e){if(e<=this.runes[2*s+1])return!0;t=s+1}else r=s}return!1}toString(){switch(this.op){case pe.ALT:return`alt -> ${this.out}, ${this.arg}`;case pe.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case pe.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case pe.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case pe.MATCH:return"match";case pe.FAIL:return"fail";case pe.NOP:return`nop -> ${this.out}`;case pe.RUNE:return this.runes===null?"rune <null>":["rune ",pe.escapeRunes(this.runes),this.arg&F.FOLD_CASE?"/i":""," -> ",this.out].join("");case pe.RUNE1:return`rune1 ${pe.escapeRunes(this.runes)} -> ${this.out}`;case pe.RUNE_ANY:return`any -> ${this.out}`;case pe.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}};g(pe,"ALT",1),g(pe,"ALT_MATCH",2),g(pe,"CAPTURE",3),g(pe,"EMPTY_WIDTH",4),g(pe,"FAIL",5),g(pe,"MATCH",6),g(pe,"NOP",7),g(pe,"RUNE",8),g(pe,"RUNE1",9),g(pe,"RUNE_ANY",10),g(pe,"RUNE_ANY_NOT_NL",11);let X=pe;class mf{constructor(){this.inst=[],this.start=0,this.numCap=2}getInst(e){return this.inst[e]}numInst(){return this.inst.length}addInst(e){this.inst.push(new X(e))}skipNop(e){let t=this.inst[e];for(;t.op===X.NOP||t.op===X.CAPTURE;)t=this.inst[e],e=t.out;return t}prefix(){let e="",t=this.skipNop(this.start);if(!X.isRuneOp(t.op)||t.runes.length!==1)return[t.op===X.MATCH,e];for(;X.isRuneOp(t.op)&&t.runes.length===1&&!(t.arg&F.FOLD_CASE);)e+=String.fromCodePoint(t.runes[0]),t=this.skipNop(t.out);return[t.op===X.MATCH,e]}startCond(){let e=0,t=this.start;e:for(;;){const r=this.inst[t];switch(r.op){case X.EMPTY_WIDTH:e|=r.arg;break;case X.FAIL:return-1;case X.CAPTURE:case X.NOP:break;default:break e}t=r.out}return e}next(e){const t=this.inst[e>>1];return e&1?t.arg:t.out}patch(e,t){for(;e!==0;){const r=this.inst[e>>1];e&1?(e=r.arg,r.arg=t):(e=r.out,r.out=t)}}append(e,t){if(e===0)return t;if(t===0)return e;let r=e;for(;;){const i=this.next(r);if(i===0)break;r=i}const s=this.inst[r>>1];return r&1?s.arg=t:s.out=t,e}toString(){let e="";for(let t=0;t<this.inst.length;t++){const r=e.length;e+=t,t===this.start&&(e+="*"),e+="        ".substring(e.length-r),e+=this.inst[t],e+=`
`}return e}}class Us{constructor(e=0,t=0,r=!1){this.i=e,this.out=t,this.nullable=r}}class Ur{static ANY_RUNE_NOT_NL(){return[0,x.CODES.get(`
`)-1,x.CODES.get(`
`)+1,K.MAX_RUNE]}static ANY_RUNE(){return[0,K.MAX_RUNE]}static compileRegexp(e){const t=new Ur,r=t.compile(e);return t.prog.patch(r.out,t.newInst(X.MATCH).i),t.prog.start=r.i,t.prog}constructor(){this.prog=new mf,this.newInst(X.FAIL)}newInst(e){return this.prog.addInst(e),new Us(this.prog.numInst()-1,0,!0)}nop(){const e=this.newInst(X.NOP);return e.out=e.i<<1,e}fail(){return new Us}cap(e){const t=this.newInst(X.CAPTURE);return t.out=t.i<<1,this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new Us(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const r=this.newInst(X.ALT),s=this.prog.getInst(r.i);return s.out=e.i,s.arg=t.i,r.out=this.prog.append(e.out,t.out),r.nullable=e.nullable||t.nullable,r}loop(e,t){const r=this.newInst(X.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=r.i<<1):(s.out=e.i,r.out=r.i<<1|1),this.prog.patch(e.out,r.i),r}quest(e,t){const r=this.newInst(X.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=r.i<<1):(s.out=e.i,r.out=r.i<<1|1),r.out=this.prog.append(r.out,e.out),r}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new Us(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(X.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=t.i<<1,t}rune(e,t){const r=this.newInst(X.RUNE);r.nullable=!1;const s=this.prog.getInst(r.i);return s.runes=e,t&=F.FOLD_CASE,(e.length!==1||K.simpleFold(e[0])===e[0])&&(t&=-2),s.arg=t,r.out=r.i<<1,!(t&F.FOLD_CASE)&&e.length===1||e.length===2&&e[0]===e[1]?s.op=X.RUNE1:e.length===2&&e[0]===0&&e[1]===K.MAX_RUNE?s.op=X.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===x.CODES.get(`
`)-1&&e[2]===x.CODES.get(`
`)+1&&e[3]===K.MAX_RUNE&&(s.op=X.RUNE_ANY_NOT_NL),r}compile(e){switch(e.op){case N.Op.NO_MATCH:return this.fail();case N.Op.EMPTY_MATCH:return this.nop();case N.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let r of e.runes){const s=this.rune([r],e.flags);t=t===null?s:this.cat(t,s)}return t}case N.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case N.Op.ANY_CHAR_NOT_NL:return this.rune(Ur.ANY_RUNE_NOT_NL(),0);case N.Op.ANY_CHAR:return this.rune(Ur.ANY_RUNE(),0);case N.Op.BEGIN_LINE:return this.empty(Q.EMPTY_BEGIN_LINE);case N.Op.END_LINE:return this.empty(Q.EMPTY_END_LINE);case N.Op.BEGIN_TEXT:return this.empty(Q.EMPTY_BEGIN_TEXT);case N.Op.END_TEXT:return this.empty(Q.EMPTY_END_TEXT);case N.Op.WORD_BOUNDARY:return this.empty(Q.EMPTY_WORD_BOUNDARY);case N.Op.NO_WORD_BOUNDARY:return this.empty(Q.EMPTY_NO_WORD_BOUNDARY);case N.Op.CAPTURE:{const t=this.cap(e.cap<<1),r=this.compile(e.subs[0]),s=this.cap(e.cap<<1|1);return this.cat(this.cat(t,r),s)}case N.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&F.NON_GREEDY)!==0);case N.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&F.NON_GREEDY)!==0);case N.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&F.NON_GREEDY)!==0);case N.Op.CONCAT:{if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.cat(t,s)}return t}}case N.Op.ALTERNATE:{if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.alt(t,s)}return t}}default:throw new uf("regexp: unhandled case in compile")}}}class bt{static simplify(e){if(e===null)return null;switch(e.op){case N.Op.CAPTURE:case N.Op.CONCAT:case N.Op.ALTERNATE:{let t=e;for(let r=0;r<e.subs.length;r++){const s=e.subs[r],i=bt.simplify(s);t===e&&i!==s&&(t=N.fromRegexp(e),t.runes=null,t.subs=e.subs.slice(0,e.subs.length)),t!==e&&(t.subs[r]=i)}return t}case N.Op.STAR:case N.Op.PLUS:case N.Op.QUEST:{const t=bt.simplify(e.subs[0]);return bt.simplify1(e.op,e.flags,t,e)}case N.Op.REPEAT:{if(e.min===0&&e.max===0)return new N(N.Op.EMPTY_MATCH);const t=bt.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return bt.simplify1(N.Op.STAR,e.flags,t,null);if(e.min===1)return bt.simplify1(N.Op.PLUS,e.flags,t,null);const s=new N(N.Op.CONCAT),i=[];for(let a=0;a<e.min-1;a++)i.push(t);return i.push(bt.simplify1(N.Op.PLUS,e.flags,t,null)),s.subs=i.slice(0),s}if(e.min===1&&e.max===1)return t;let r=null;if(e.min>0){r=[];for(let s=0;s<e.min;s++)r.push(t)}if(e.max>e.min){let s=bt.simplify1(N.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const a=new N(N.Op.CONCAT);a.subs=[t,s],s=bt.simplify1(N.Op.QUEST,e.flags,a,null)}if(r===null)return s;r.push(s)}if(r!==null){const s=new N(N.Op.CONCAT);return s.subs=r.slice(0),s}return new N(N.Op.NO_MATCH)}}return e}static simplify1(e,t,r,s){return r.op===N.Op.EMPTY_MATCH||e===r.op&&(t&F.NON_GREEDY)===(r.flags&F.NON_GREEDY)?r:(s!==null&&s.op===e&&(s.flags&F.NON_GREEDY)===(t&F.NON_GREEDY)&&r===s.subs[0]||(s=new N(e),s.flags=t,s.subs=[r]),s)}}class oe{constructor(e,t){this.sign=e,this.cls=t}}const Pc=[48,57],kc=[9,10,12,13,32,32],Nc=[48,57,65,90,95,95,97,122],Oc=new Map([["\\d",new oe(1,Pc)],["\\D",new oe(-1,Pc)],["\\s",new oe(1,kc)],["\\S",new oe(-1,kc)],["\\w",new oe(1,Nc)],["\\W",new oe(-1,Nc)]]),Vc=[48,57,65,90,97,122],Dc=[65,90,97,122],Lc=[0,127],Mc=[9,9,32,32],Bc=[0,31,127,127],Fc=[48,57],Uc=[33,126],$c=[97,122],Hc=[32,126],qc=[33,47,58,64,91,96,123,126],jc=[9,13,32,32],zc=[65,90],Gc=[48,57,65,90,95,95,97,122],Wc=[48,57,65,70,97,102],Kc=new Map([["[:alnum:]",new oe(1,Vc)],["[:^alnum:]",new oe(-1,Vc)],["[:alpha:]",new oe(1,Dc)],["[:^alpha:]",new oe(-1,Dc)],["[:ascii:]",new oe(1,Lc)],["[:^ascii:]",new oe(-1,Lc)],["[:blank:]",new oe(1,Mc)],["[:^blank:]",new oe(-1,Mc)],["[:cntrl:]",new oe(1,Bc)],["[:^cntrl:]",new oe(-1,Bc)],["[:digit:]",new oe(1,Fc)],["[:^digit:]",new oe(-1,Fc)],["[:graph:]",new oe(1,Uc)],["[:^graph:]",new oe(-1,Uc)],["[:lower:]",new oe(1,$c)],["[:^lower:]",new oe(-1,$c)],["[:print:]",new oe(1,Hc)],["[:^print:]",new oe(-1,Hc)],["[:punct:]",new oe(1,qc)],["[:^punct:]",new oe(-1,qc)],["[:space:]",new oe(1,jc)],["[:^space:]",new oe(-1,jc)],["[:upper:]",new oe(1,zc)],["[:^upper:]",new oe(-1,zc)],["[:word:]",new oe(1,Gc)],["[:^word:]",new oe(-1,Gc)],["[:xdigit:]",new oe(1,Wc)],["[:^xdigit:]",new oe(-1,Wc)]]);class ze{static charClassToString(e,t){let r="[";for(let s=0;s<t;s+=2){s>0&&(r+=" ");const i=e[s],a=e[s+1];i===a?r+=`0x${i.toString(16)}`:r+=`0x${i.toString(16)}-0x${a.toString(16)}`}return r+="]",r}static cmp(e,t,r,s){const i=e[t]-r;return i!==0?i:s-e[t+1]}static qsortIntPair(e,t,r){const s=((t+r)/2|0)&-2,i=e[s],a=e[s+1];let l=t,u=r;for(;l<=u;){for(;l<r&&ze.cmp(e,l,i,a)<0;)l+=2;for(;u>t&&ze.cmp(e,u,i,a)>0;)u-=2;if(l<=u){if(l!==u){let f=e[l];e[l]=e[u],e[u]=f,f=e[l+1],e[l+1]=e[u+1],e[u+1]=f}l+=2,u-=2}}t<u&&ze.qsortIntPair(e,t,u),l<r&&ze.qsortIntPair(e,l,r)}constructor(e=Q.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;ze.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const r=this.r[t],s=this.r[t+1];if(r<=this.r[e-1]+1){s>this.r[e-1]&&(this.r[e-1]=s);continue}this.r[e]=r,this.r[e+1]=s,e+=2}return this.len=e,this}appendLiteral(e,t){return t&F.FOLD_CASE?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let r=2;r<=4;r+=2)if(this.len>=r){const s=this.r[this.len-r],i=this.r[this.len-r+1];if(e<=i+1&&s<=t+1)return e<s&&(this.r[this.len-r]=e),t>i&&(this.r[this.len-r+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=K.MIN_FOLD&&t>=K.MAX_FOLD)return this.appendRange(e,t);if(t<K.MIN_FOLD||e>K.MAX_FOLD)return this.appendRange(e,t);e<K.MIN_FOLD&&(this.appendRange(e,K.MIN_FOLD-1),e=K.MIN_FOLD),t>K.MAX_FOLD&&(this.appendRange(K.MAX_FOLD+1,t),t=K.MAX_FOLD);for(let r=e;r<=t;r++){this.appendRange(r,r);for(let s=K.simpleFold(r);s!==r;s=K.simpleFold(s))this.appendRange(s,s)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let r=0;r<e.length;r+=2){const s=e[r],i=e[r+1];t<=s-1&&this.appendRange(t,s-1),t=i+1}return t<=K.MAX_RUNE&&this.appendRange(t,K.MAX_RUNE),this}appendTable(e){for(let t of e){const r=t[0],s=t[1],i=t[2];if(i===1){this.appendRange(r,s);continue}for(let a=r;a<=s;a+=i)this.appendRange(a,a)}return this}appendNegatedTable(e){let t=0;for(let r of e){const s=r[0],i=r[1],a=r[2];if(a===1){t<=s-1&&this.appendRange(t,s-1),t=i+1;continue}for(let l=s;l<=i;l+=a)t<=l-1&&this.appendRange(t,l-1),t=l+1}return t<=K.MAX_RUNE&&this.appendRange(t,K.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let r=0;r<this.len;r+=2){const s=this.r[r],i=this.r[r+1];e<=s-1&&(this.r[t]=e,this.r[t+1]=s-1,t+=2),e=i+1}return this.len=t,e<=K.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=K.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let r=e.cls;return t&&(r=new ze().appendFoldedClass(r).cleanClass().toArray()),this.appendClassWithSign(r,e.sign)}toString(){return ze.charClassToString(this.r,this.len)}}class $r{static of(e,t){return new $r(e,t)}constructor(e,t){this.first=e,this.second=t}}class gf{constructor(e){this.str=e,this.position=0}pos(){return this.position}rewindTo(e){this.position=e}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(e){this.position+=e}skipString(e){this.position+=e.length}pop(){const e=this.str.codePointAt(this.position);return this.position+=Q.charCount(e),e}lookingAt(e){return this.rest().startsWith(e)}rest(){return this.str.substring(this.position)}from(e){return this.str.substring(e,this.position)}toString(){return this.rest()}}const q=class q{static ANY_TABLE(){return[[0,K.MAX_RUNE,1]]}static unicodeTable(e){return e==="Any"?$r.of(q.ANY_TABLE(),q.ANY_TABLE()):je.CATEGORIES.has(e)?$r.of(je.CATEGORIES.get(e),je.FOLD_CATEGORIES.get(e)):je.SCRIPTS.has(e)?$r.of(je.SCRIPTS.get(e),je.FOLD_SCRIPT.get(e)):null}static minFoldRune(e){if(e<K.MIN_FOLD||e>K.MAX_FOLD)return e;let t=e;const r=e;for(e=K.simpleFold(e);e!==r;e=K.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===N.Op.EMPTY_MATCH)return null;if(e.op===N.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===N.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const r=new N(N.Op.LITERAL);return r.flags=t,r.runes=Q.stringToRunes(e),r}static parse(e,t){return new q(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const r=q.parseInt(e);if(r===-1||!e.more())return-1;let s;if(!e.lookingAt(","))s=r;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))s=-1;else if((s=q.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),r<0||r>1e3||s===-2||s>1e3||s>=0&&r>s)throw new Ae(q.ERR_INVALID_REPEAT_SIZE,e.from(t));return r<<16|s&K.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const r=e.codePointAt(t);if(r!==x.CODES.get("_")&&!Q.isalnum(r))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=x.CODES.get("0")&&e.peek()<=x.CODES.get("9");)e.skip(1);const r=e.from(t);return r.length===0||r.length>1&&r.codePointAt(0)===x.CODES.get("0")?-1:r.length>8?-2:parseFloat(r,10)}static isCharClass(e){return e.op===N.Op.LITERAL&&e.runes.length===1||e.op===N.Op.CHAR_CLASS||e.op===N.Op.ANY_CHAR_NOT_NL||e.op===N.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case N.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case N.Op.CHAR_CLASS:for(let r=0;r<e.runes.length;r+=2)if(e.runes[r]<=t&&t<=e.runes[r+1])return!0;return!1;case N.Op.ANY_CHAR_NOT_NL:return t!==x.CODES.get(`
`);case N.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case N.Op.ANY_CHAR:break;case N.Op.ANY_CHAR_NOT_NL:q.matchRune(t,x.CODES.get(`
`))&&(e.op=N.Op.ANY_CHAR);break;case N.Op.CHAR_CLASS:t.op===N.Op.LITERAL?e.runes=new ze(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new ze(e.runes).appendClass(t.runes).toArray();break;case N.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=N.Op.CHAR_CLASS,e.runes=new ze().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new Ae(q.ERR_TRAILING_BACKSLASH);let r=e.pop();e:switch(r){case x.CODES.get("1"):case x.CODES.get("2"):case x.CODES.get("3"):case x.CODES.get("4"):case x.CODES.get("5"):case x.CODES.get("6"):case x.CODES.get("7"):if(!e.more()||e.peek()<x.CODES.get("0")||e.peek()>x.CODES.get("7"))break;case x.CODES.get("0"):{let s=r-x.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<x.CODES.get("0")||e.peek()>x.CODES.get("7"));i++)s=s*8+e.peek()-x.CODES.get("0"),e.skip(1);return s}case x.CODES.get("x"):{if(!e.more())break;if(r=e.pop(),r===x.CODES.get("{")){let a=0,l=0;for(;;){if(!e.more())break e;if(r=e.pop(),r===x.CODES.get("}"))break;const u=Q.unhex(r);if(u<0||(l=l*16+u,l>K.MAX_RUNE))break e;a++}if(a===0)break e;return l}const s=Q.unhex(r);if(!e.more())break;r=e.pop();const i=Q.unhex(r);if(s<0||i<0)break;return s*16+i}case x.CODES.get("a"):return x.CODES.get("\x07");case x.CODES.get("f"):return x.CODES.get("\f");case x.CODES.get("n"):return x.CODES.get(`
`);case x.CODES.get("r"):return x.CODES.get("\r");case x.CODES.get("t"):return x.CODES.get("	");case x.CODES.get("v"):return x.CODES.get("\v");default:if(!Q.isalnum(r))return r;break}throw new Ae(q.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new Ae(q.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?q.parseEscape(e):e.pop()}static concatRunes(e,t){return[...e,...t]}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups={},this.stack=[],this.free=null}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):t=new N(e),t}reuse(e){e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!N.isPseudoOp(this.stack[t-1].op);)t--;const r=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),r}push(e){if(e.op===N.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=N.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===N.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&K.simpleFold(e.runes[0])===e.runes[2]&&K.simpleFold(e.runes[2])===e.runes[0]||e.op===N.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&K.simpleFold(e.runes[0])===e.runes[1]&&K.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|F.FOLD_CASE))return null;e.op=N.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|F.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),e}maybeConcat(e,t){const r=this.stack.length;if(r<2)return!1;const s=this.stack[r-1],i=this.stack[r-2];return s.op!==N.Op.LITERAL||i.op!==N.Op.LITERAL||(s.flags&F.FOLD_CASE)!==(i.flags&F.FOLD_CASE)?!1:(i.runes=q.concatRunes(i.runes,s.runes),e>=0?(s.runes=[e],s.flags=t,!0):(this.pop(),this.reuse(s),!1))}newLiteral(e,t){const r=this.newRegexp(N.Op.LITERAL);return r.flags=t,t&F.FOLD_CASE&&(e=q.minFoldRune(e)),r.runes=[e],r}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,r,s,i,a){let l=this.flags;if(l&F.PERL_X&&(i.more()&&i.lookingAt("?")&&(i.skip(1),l^=F.NON_GREEDY),a!==-1))throw new Ae(q.ERR_INVALID_REPEAT_OP,i.from(a));const u=this.stack.length;if(u===0)throw new Ae(q.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const f=this.stack[u-1];if(N.isPseudoOp(f.op))throw new Ae(q.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const m=this.newRegexp(e);m.min=t,m.max=r,m.flags=l,m.subs=[f],this.stack[u-1]=m}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(N.Op.EMPTY_MATCH)):this.push(this.collapse(e,N.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(N.Op.NO_MATCH)):this.push(this.collapse(e,N.Op.ALTERNATE))}cleanAlt(e){e.op===N.Op.CHAR_CLASS&&(e.runes=new ze(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===K.MAX_RUNE?(e.runes=null,e.op=N.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===x.CODES.get(`
`)-1&&e.runes[2]===x.CODES.get(`
`)+1&&e.runes[3]===K.MAX_RUNE&&(e.runes=null,e.op=N.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let r=0;for(let l of e)r+=l.op===t?l.subs.length:1;let s=new Array(r).fill(null),i=0;for(let l of e)l.op===t?(s.splice(i,l.subs.length,...l.subs),i+=l.subs.length,this.reuse(l)):s[i++]=l;let a=this.newRegexp(t);if(a.subs=s,t===N.Op.ALTERNATE&&(a.subs=this.factor(a.subs),a.subs.length===1)){const l=a;a=a.subs[0],this.reuse(l)}return a}factor(e){if(e.length<2)return e;let t=0,r=e.length,s=0,i=null,a=0,l=0,u=0;for(let m=0;m<=r;m++){let _=null,S=0,O=0;if(m<r){let D=e[t+m];if(D.op===N.Op.CONCAT&&D.subs.length>0&&(D=D.subs[0]),D.op===N.Op.LITERAL&&(_=D.runes,S=D.runes.length,O=D.flags&F.FOLD_CASE),O===l){let U=0;for(;U<a&&U<S&&i[U]===_[U];)U++;if(U>0){a=U;continue}}}if(m!==u)if(m===u+1)e[s++]=e[t+u];else{const D=this.newRegexp(N.Op.LITERAL);D.flags=l,D.runes=i.slice(0,a);for(let H=u;H<m;H++)e[t+H]=this.removeLeadingString(e[t+H],a);const U=this.collapse(e.slice(t+u,t+m),N.Op.ALTERNATE),L=this.newRegexp(N.Op.CONCAT);L.subs=[D,U],e[s++]=L}u=m,i=_,a=S,l=O}r=s,t=0,u=0,s=0;let f=null;for(let m=0;m<=r;m++){let _=null;if(!(m<r&&(_=q.leadingRegexp(e[t+m]),f!==null&&f.equals(_)&&(q.isCharClass(f)||f.op===N.Op.REPEAT&&f.min===f.max&&q.isCharClass(f.subs[0]))))){if(m!==u)if(m===u+1)e[s++]=e[t+u];else{const S=f;for(let U=u;U<m;U++){const L=U!==u;e[t+U]=this.removeLeadingRegexp(e[t+U],L)}const O=this.collapse(e.slice(t+u,t+m),N.Op.ALTERNATE),D=this.newRegexp(N.Op.CONCAT);D.subs=[S,O],e[s++]=D}u=m,f=_}}r=s,t=0,u=0,s=0;for(let m=0;m<=r;m++)if(!(m<r&&q.isCharClass(e[t+m]))){if(m!==u)if(m===u+1)e[s++]=e[t+u];else{let _=u;for(let O=u+1;O<m;O++){const D=e[t+_],U=e[t+O];(D.op<U.op||D.op===U.op&&(D.runes!==null?D.runes.length:0)<(U.runes!==null?U.runes.length:0))&&(_=O)}const S=e[t+u];e[t+u]=e[t+_],e[t+_]=S;for(let O=u+1;O<m;O++)q.mergeCharClass(e[t+u],e[t+O]),this.reuse(e[t+O]);this.cleanAlt(e[t+u]),e[s++]=e[t+u]}m<r&&(e[s++]=e[t+m]),u=m+1}r=s,t=0,u=0,s=0;for(let m=0;m<r;++m)m+1<r&&e[t+m].op===N.Op.EMPTY_MATCH&&e[t+m+1].op===N.Op.EMPTY_MATCH||(e[s++]=e[t+m]);return r=s,t=0,e.slice(t,r)}removeLeadingString(e,t){if(e.op===N.Op.CONCAT&&e.subs.length>0){const r=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=r,r.op===N.Op.EMPTY_MATCH)switch(this.reuse(r),e.subs.length){case 0:case 1:e.op=N.Op.EMPTY_MATCH,e.subs=null;break;case 2:{const s=e;e=e.subs[1],this.reuse(s);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===N.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=N.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===N.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:{e.op=N.Op.EMPTY_MATCH,e.subs=N.emptySubs();break}case 1:{const r=e;e=e.subs[0],this.reuse(r);break}}return e}return t&&this.reuse(e),this.newRegexp(N.Op.EMPTY_MATCH)}parseInternal(){if(this.flags&F.LITERAL)return q.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,r=-1;const s=new gf(this.wholeRegexp);for(;s.more();){let a=-1;e:switch(s.peek()){case x.CODES.get("("):if(this.flags&F.PERL_X&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(N.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case x.CODES.get("|"):this.parseVerticalBar(),s.skip(1);break;case x.CODES.get(")"):this.parseRightParen(),s.skip(1);break;case x.CODES.get("^"):this.flags&F.ONE_LINE?this.op(N.Op.BEGIN_TEXT):this.op(N.Op.BEGIN_LINE),s.skip(1);break;case x.CODES.get("$"):this.flags&F.ONE_LINE?this.op(N.Op.END_TEXT).flags|=F.WAS_DOLLAR:this.op(N.Op.END_LINE),s.skip(1);break;case x.CODES.get("."):this.flags&F.DOT_NL?this.op(N.Op.ANY_CHAR):this.op(N.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case x.CODES.get("["):this.parseClass(s);break;case x.CODES.get("*"):case x.CODES.get("+"):case x.CODES.get("?"):{a=s.pos();let l=null;switch(s.pop()){case x.CODES.get("*"):l=N.Op.STAR;break;case x.CODES.get("+"):l=N.Op.PLUS;break;case x.CODES.get("?"):l=N.Op.QUEST;break}this.repeat(l,t,r,a,s,e);break}case x.CODES.get("{"):{a=s.pos();const l=q.parseRepeat(s);if(l<0){s.rewindTo(a),this.literal(s.pop());break}t=l>>16,r=(l&K.MAX_BMP)<<16>>16,this.repeat(N.Op.REPEAT,t,r,a,s,e);break}case x.CODES.get("\\"):{const l=s.pos();if(s.skip(1),this.flags&F.PERL_X&&s.more())switch(s.pop()){case x.CODES.get("A"):this.op(N.Op.BEGIN_TEXT);break e;case x.CODES.get("b"):this.op(N.Op.WORD_BOUNDARY);break e;case x.CODES.get("B"):this.op(N.Op.NO_WORD_BOUNDARY);break e;case x.CODES.get("C"):throw new Ae(q.ERR_INVALID_ESCAPE,"\\C");case x.CODES.get("Q"):{let _=s.rest();const S=_.indexOf("\\E");S>=0&&(_=_.substring(0,S)),s.skipString(_),s.skipString("\\E");let O=0;for(;O<_.length;){const D=_.codePointAt(O);this.literal(D),O+=Q.charCount(D)}break e}case x.CODES.get("z"):this.op(N.Op.END_TEXT);break e;default:s.rewindTo(l);break}const u=this.newRegexp(N.Op.CHAR_CLASS);if(u.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const m=new ze;if(this.parseUnicodeClass(s,m)){u.runes=m.toArray(),this.push(u);break e}}const f=new ze;if(this.parsePerlClassEscape(s,f)){u.runes=f.toArray(),this.push(u);break e}s.rewindTo(l),this.reuse(u),this.literal(q.parseEscape(s));break}default:this.literal(s.pop());break}e=a}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new Ae(q.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),r=e.rest();if(r.startsWith("(?P<")||r.startsWith("(?<")){const l=r.charAt(2)==="P"?4:3,u=r.indexOf(">");if(u<0)throw new Ae(q.ERR_INVALID_NAMED_CAPTURE,r);const f=r.substring(l,u);if(e.skipString(f),e.skip(l+1),!q.isValidCaptureName(f))throw new Ae(q.ERR_INVALID_NAMED_CAPTURE,r.substring(0,u+1));const m=this.op(N.Op.LEFT_PAREN);if(m.cap=++this.numCap,this.namedGroups[f])throw new Ae(q.ERR_DUPLICATE_NAMED_CAPTURE,f);this.namedGroups[f]=this.numCap,m.name=f;return}e.skip(2);let s=this.flags,i=1,a=!1;e:for(;e.more();){const l=e.pop();switch(l){case x.CODES.get("i"):s|=F.FOLD_CASE,a=!0;break;case x.CODES.get("m"):s&=-17,a=!0;break;case x.CODES.get("s"):s|=F.DOT_NL,a=!0;break;case x.CODES.get("U"):s|=F.NON_GREEDY,a=!0;break;case x.CODES.get("-"):if(i<0)break e;i=-1,s=~s,a=!1;break;case x.CODES.get(":"):case x.CODES.get(")"):if(i<0){if(!a)break e;s=~s}l===x.CODES.get(":")&&this.op(N.Op.LEFT_PAREN),this.flags=s;return;default:break e}}throw new Ae(q.ERR_INVALID_PERL_OP,e.from(t))}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(N.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===N.Op.VERTICAL_BAR&&q.isCharClass(this.stack[e-1])&&q.isCharClass(this.stack[e-3])){let t=this.stack[e-1],r=this.stack[e-3];if(t.op>r.op){const s=r;r=t,t=s,this.stack[e-3]=r}return q.mergeCharClass(r,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],r=this.stack[e-2];if(r.op===N.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=r,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new Ae(q.ERR_INTERNAL_ERROR,"stack underflow");const t=this.pop(),r=this.pop();if(r.op!==N.Op.LEFT_PAREN)throw new Ae(q.ERR_MISSING_PAREN,this.wholeRegexp);this.flags=r.flags,r.cap===0?this.push(t):(r.op=N.Op.CAPTURE,r.subs=[t],this.push(r))}parsePerlClassEscape(e,t){const r=e.pos();if(!(this.flags&F.PERL_X)||!e.more()||e.pop()!==x.CODES.get("\\")||!e.more())return!1;e.pop();const s=e.from(r),i=Oc.has(s)?Oc.get(s):null;return i===null?!1:(t.appendGroup(i,(this.flags&F.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const r=e.rest(),s=r.indexOf(":]");if(s<0)return!1;const i=r.substring(0,s+2);e.skipString(i);const a=Kc.has(i)?Kc.get(i):null;if(a===null)throw new Ae(q.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(a,(this.flags&F.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const r=e.pos();if(!(this.flags&F.UNICODE_GROUPS)||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let s=1,i=e.pop();if(i===x.CODES.get("P")&&(s=-1),!e.more())throw e.rewindTo(r),new Ae(q.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let a;if(i!==x.CODES.get("{"))a=Q.runeToString(i);else{const m=e.rest(),_=m.indexOf("}");if(_<0)throw e.rewindTo(r),new Ae(q.ERR_INVALID_CHAR_RANGE,e.rest());a=m.substring(0,_),e.skipString(a),e.skip(1)}a.length!==0&&a.codePointAt(0)===x.CODES.get("^")&&(s=0-s,a=a.substring(1));const l=q.unicodeTable(a);if(l===null)throw new Ae(q.ERR_INVALID_CHAR_RANGE,e.from(r));const u=l.first,f=l.second;if(!(this.flags&F.FOLD_CASE)||f===null)t.appendTableWithSign(u,s);else{const m=new ze().appendTable(u).appendTable(f).cleanClass().toArray();t.appendClassWithSign(m,s)}return!0}parseClass(e){const t=e.pos();e.skip(1);const r=this.newRegexp(N.Op.CHAR_CLASS);r.flags=this.flags;const s=new ze;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),this.flags&F.CLASS_NL||s.appendRange(x.CODES.get(`
`),x.CODES.get(`
`)));let a=!0;for(;!e.more()||e.peek()!==x.CODES.get("]")||a;){if(e.more()&&e.lookingAt("-")&&!(this.flags&F.PERL_X)&&!a){const m=e.rest();if(m==="-"||!m.startsWith("-]"))throw e.rewindTo(t),new Ae(q.ERR_INVALID_CHAR_RANGE,e.rest())}a=!1;const l=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,s))continue;e.rewindTo(l)}if(this.parseUnicodeClass(e,s)||this.parsePerlClassEscape(e,s))continue;e.rewindTo(l);const u=q.parseClassChar(e,t);let f=u;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(f=q.parseClassChar(e,t),f<u)throw new Ae(q.ERR_INVALID_CHAR_RANGE,e.from(l))}this.flags&F.FOLD_CASE?s.appendFoldedRange(u,f):s.appendRange(u,f)}e.skip(1),s.cleanClass(),i<0&&s.negateClass(),r.runes=s.toArray(),this.push(r)}};g(q,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),g(q,"ERR_INVALID_CHAR_RANGE","invalid character class range"),g(q,"ERR_INVALID_ESCAPE","invalid escape sequence"),g(q,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),g(q,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),g(q,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),g(q,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),g(q,"ERR_MISSING_BRACKET","missing closing ]"),g(q,"ERR_MISSING_PAREN","missing closing )"),g(q,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),g(q,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),g(q,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name");let Uo=q;class wf{constructor(){this.inst=null,this.cap=[]}}class Yc{constructor(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}contains(e){const t=this.sparse[e];return t<this.size&&this.densePcs[t]===e}isEmpty(){return this.size===0}add(e){const t=this.size++;return this.sparse[e]=t,this.denseThreads[t]=null,this.densePcs[t]=e,t}clear(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}toString(){let e="{";for(let t=0;t<this.size;t++)t!==0&&(e+=", "),e+=this.densePcs[t];return e+="}",e}}class Yn{static fromRE2(e){const t=new Yn;return t.prog=e.prog,t.re2=e,t.q0=new Yc(t.prog.numInst()),t.q1=new Yc(t.prog.numInst()),t.pool=[],t.poolSize=0,t.matched=!1,t.matchcap=Array(t.prog.numCap<2?2:t.prog.numCap).fill(0),t.ncap=0,t}static fromMachine(e){const t=new Yn;return t.re2=e.re2,t.prog=e.prog,t.q0=e.q0,t.q1=e.q1,t.pool=e.pool,t.poolSize=e.poolSize,t.matched=e.matched,t.matchcap=e.matchcap,t.ncap=e.ncap,t}init(e){this.ncap=e,e>this.matchcap.length?this.initNewCap(e):this.resetCap(e)}resetCap(e){for(let t=0;t<this.poolSize;t++){const r=this.pool[t];r.cap=Array(e).fill(0)}}initNewCap(e){for(let t=0;t<this.poolSize;t++){const r=this.pool[t];r.cap=Array(e).fill(0)}this.matchcap=Array(e).fill(0)}submatches(){return this.ncap===0?Q.emptyInts():this.matchcap.slice(0,this.ncap)}alloc(e){let t;return this.poolSize>0?(this.poolSize--,t=this.pool[this.poolSize]):t=new wf,t.inst=e,t}freeQueue(e,t=0){const r=e.size-t,s=this.poolSize+r;this.pool.length<s&&(this.pool=this.pool.slice(0,Math.max(this.pool.length*2,s)));for(let i=t;i<e.size;i++){const a=e.denseThreads[i];a!==null&&(this.pool[this.poolSize]=a,this.poolSize++)}e.clear()}freeThread(e){this.pool.length<=this.poolSize&&(this.pool=this.pool.slice(0,this.pool.length*2)),this.pool[this.poolSize]=e,this.poolSize++}match(e,t,r){const s=this.re2.cond;if(s===Q.EMPTY_ALL||(r===F.ANCHOR_START||r===F.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap=Array(this.prog.numCap).fill(-1);let i=this.q0,a=this.q1,l=e.step(t),u=l>>3,f=l&7,m=-1,_=0;l!==tn.EOF()&&(l=e.step(t+f),m=l>>3,_=l&7);let S;for(t===0?S=Q.emptyOpContext(-1,u):S=e.context(t);;){if(i.isEmpty()){if(s&Q.EMPTY_BEGIN_TEXT&&t!==0||this.matched)break;if(this.re2.prefix.length!==0&&m!==this.re2.prefixRune&&e.canCheckPrefix()){const U=e.index(this.re2,t);if(U<0)break;t+=U,l=e.step(t),u=l>>3,f=l&7,l=e.step(t+f),m=l>>3,_=l&7}}!this.matched&&(t===0||r===F.UNANCHORED)&&(this.ncap>0&&(this.matchcap[0]=t),this.add(i,this.prog.start,t,this.matchcap,S,null));const O=t+f;if(S=e.context(O),this.step(i,a,t,O,u,S,r,t===e.endPos()),f===0||this.ncap===0&&this.matched)break;t+=f,u=m,f=_,u!==-1&&(l=e.step(t+f),m=l>>3,_=l&7);const D=i;i=a,a=D}return this.freeQueue(a),this.matched}step(e,t,r,s,i,a,l,u){const f=this.re2.longest;for(let m=0;m<e.size;m++){let _=e.denseThreads[m];if(_===null)continue;if(f&&this.matched&&this.ncap>0&&this.matchcap[0]<_.cap[0]){this.freeThread(_);continue}const S=_.inst;let O=!1;switch(S.op){case X.MATCH:if(l===F.ANCHOR_BOTH&&!u)break;this.ncap>0&&(!f||!this.matched||this.matchcap[1]<r)&&(_.cap[1]=r,this.matchcap=_.cap.slice(0,this.ncap)),f||this.freeQueue(e,m+1),this.matched=!0;break;case X.RUNE:O=S.matchRune(i);break;case X.RUNE1:O=i===S.runes[0];break;case X.RUNE_ANY:O=!0;break;case X.RUNE_ANY_NOT_NL:O=i!==x.CODES.get(`
`);break;default:throw new Error("bad inst")}O&&(_=this.add(t,S.out,s,_.cap,a,_)),_!==null&&(this.freeThread(_),e.denseThreads[m]=null)}e.clear()}add(e,t,r,s,i,a){if(t===0||e.contains(t))return a;const l=e.add(t),u=this.prog.inst[t];switch(u.op){case X.FAIL:break;case X.ALT:case X.ALT_MATCH:a=this.add(e,u.out,r,s,i,a),a=this.add(e,u.arg,r,s,i,a);break;case X.EMPTY_WIDTH:u.arg&~i||(a=this.add(e,u.out,r,s,i,a));break;case X.NOP:a=this.add(e,u.out,r,s,i,a);break;case X.CAPTURE:if(u.arg<this.ncap){const f=s[u.arg];s[u.arg]=r,this.add(e,u.out,r,s,i,null),s[u.arg]=f}else a=this.add(e,u.out,r,s,i,a);break;case X.MATCH:case X.RUNE:case X.RUNE1:case X.RUNE_ANY:case X.RUNE_ANY_NOT_NL:a===null?a=this.alloc(u):a.inst=u,this.ncap>0&&a.cap!==s&&(a.cap=s.slice(0,this.ncap)),e.denseThreads[l]=a,a=null;break;default:throw new Error("unhandled")}return a}}class _f{constructor(e){this.value=e}get(){return this.value}set(e){this.value=e}compareAndSet(e,t){return this.value===e?(this.value=t,!0):!1}}class Zt{static initTest(e){const t=Zt.compile(e),r=new Zt(t.expr,t.prog,t.numSubexp,t.longest);return r.cond=t.cond,r.prefix=t.prefix,r.prefixUTF8=t.prefixUTF8,r.prefixComplete=t.prefixComplete,r.prefixRune=t.prefixRune,r}static compile(e){return Zt.compileImpl(e,F.PERL,!1)}static compilePOSIX(e){return Zt.compileImpl(e,F.POSIX,!0)}static compileImpl(e,t,r){let s=Uo.parse(e,t);const i=s.maxCap();s=bt.simplify(s);const a=Ur.compileRegexp(s),l=new Zt(e,a,i,r),[u,f]=a.prefix();return l.prefixComplete=u,l.prefix=f,l.prefixUTF8=Q.stringToUtf8ByteArray(l.prefix),l.prefix.length>0&&(l.prefixRune=l.prefix.codePointAt(0)),l.namedGroups=s.namedGroups,l}static match(e,t){return Zt.compile(e).match(t)}constructor(e,t,r=0,s=0){this.expr=e,this.prog=t,this.numSubexp=r,this.longest=s,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.pooled=new _f}numberOfCapturingGroups(){return this.numSubexp}get(){let e;do e=this.pooled.get();while(e&&!this.pooled.compareAndSet(e,e.next));return e}reset(){this.pooled.set(null)}put(e,t){let r=this.pooled.get();do r=this.pooled.get(),!t&&r&&(e=Yn.fromMachine(e),t=!0),e.next!==r&&(e.next=r);while(!this.pooled.compareAndSet(r,e))}toString(){return this.expr}doExecute(e,t,r,s){let i=this.get(),a=!1;i?i.next!==null&&(i=Yn.fromMachine(i),a=!0):(i=Yn.fromRE2(this),a=!0),i.init(s);const l=i.match(e,t,r)?i.submatches():null;return this.put(i,a),l}match(e){return this.doExecute(Te.fromUTF16(e),0,F.UNANCHORED,0)!==null}matchWithGroup(e,t,r,s,i){return e instanceof dn||(e=ai.utf16(e)),this.matchMachineInput(e,t,r,s,i)}matchMachineInput(e,t,r,s,i){if(t>r)return[!1,null];const a=e.isUTF16Encoding()?Te.fromUTF16(e.asCharSequence(),0,r):Te.fromUTF8(e.asBytes(),0,r),l=this.doExecute(a,t,s,2*i);return l===null?[!1,null]:[!0,l]}matchUTF8(e){return this.doExecute(Te.fromUTF8(e),0,F.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,r){let s=0,i=0,a="";const l=Te.fromUTF16(e);let u=0;for(;i<=e.length;){const f=this.doExecute(l,i,F.UNANCHORED,2);if(f===null||f.length===0)break;a+=e.substring(s,f[0]),(f[1]>s||f[0]===0)&&(a+=t(e.substring(f[0],f[1])),u++),s=f[1];const m=l.step(i)&7;if(i+m>f[1]?i+=m:i+1>f[1]?i++:i=f[1],u>=r)break}return a+=e.substring(s),a}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let r=new Array(t).fill(-1);for(let s=0;s<e.length;s++)r[s]=e[s];e=r}return e}allMatches(e,t,r=s=>s){let s=[];const i=e.endPos();t<0&&(t=i+1);let a=0,l=0,u=-1;for(;l<t&&a<=i;){const f=this.doExecute(e,a,F.UNANCHORED,this.prog.numCap);if(f===null||f.length===0)break;let m=!0;if(f[1]===a){f[0]===u&&(m=!1);const _=e.step(a);_<0?a=i+1:a+=_&7}else a=f[1];u=f[1],m&&(s.push(r(this.pad(f))),l++)}return s}findUTF8(e){const t=this.doExecute(Te.fromUTF8(e),0,F.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.doExecute(Te.fromUTF8(e),0,F.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.doExecute(Te.fromUTF16(e),0,F.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.doExecute(Te.fromUTF16(e),0,F.UNANCHORED,2)}findUTF8Submatch(e){const t=this.doExecute(Te.fromUTF8(e),0,F.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.slice(t[2*s],t[2*s+1]));return r}findUTF8SubmatchIndex(e){return this.pad(this.doExecute(Te.fromUTF8(e),0,F.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.doExecute(Te.fromUTF16(e),0,F.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.substring(t[2*s],t[2*s+1]));return r}findSubmatchIndex(e){return this.pad(this.doExecute(Te.fromUTF16(e),0,F.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const r=this.allMatches(Te.fromUTF8(e),t,s=>e.slice(s[0],s[1]));return r.length===0?null:r}findAllUTF8Index(e,t){const r=this.allMatches(Te.fromUTF8(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAll(e,t){const r=this.allMatches(Te.fromUTF16(e),t,s=>e.substring(s[0],s[1]));return r.length===0?null:r}findAllIndex(e,t){const r=this.allMatches(Te.fromUTF16(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAllUTF8Submatch(e,t){const r=this.allMatches(Te.fromUTF8(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let a=0;a<i.length;a++)s[2*a]>=0&&(i[a]=e.slice(s[2*a],s[2*a+1]));return i});return r.length===0?null:r}findAllUTF8SubmatchIndex(e,t){const r=this.allMatches(Te.fromUTF8(e),t);return r.length===0?null:r}findAllSubmatch(e,t){const r=this.allMatches(Te.fromUTF16(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let a=0;a<i.length;a++)s[2*a]>=0&&(i[a]=e.substring(s[2*a],s[2*a+1]));return i});return r.length===0?null:r}findAllSubmatchIndex(e,t){const r=this.allMatches(Te.fromUTF16(e),t);return r.length===0?null:r}}const Qe=class Qe{static quote(e){return Q.quoteMeta(e)}static compile(e,t=0){let r=e;if(t&Qe.CASE_INSENSITIVE&&(r=`(?i)${r}`),t&Qe.DOTALL&&(r=`(?s)${r}`),t&Qe.MULTILINE&&(r=`(?m)${r}`),t&-32)throw new hf("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH");let s=F.PERL;t&Qe.DISABLE_UNICODE_GROUPS&&(s&=-129);const i=new Qe(e,t);return i.re2Input=Zt.compileImpl(r,s,(t&Qe.LONGEST_MATCH)!==0),i}static matches(e,t){return Qe.compile(e).matcher(t).matches()}static initTest(e,t,r){if(e==null)throw new Error("pattern is null");if(r==null)throw new Error("re2 is null");const s=new Qe(e,t);return s.re2Input=r,s}constructor(e,t){this.patternInput=e,this.flagsInput=t}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.matcher(e).matches()}matcher(e){return Array.isArray(e)&&(e=ai.utf8(e)),new df(this,e)}split(e,t=0){const r=this.matcher(e),s=[];let i=0,a=0;for(;r.find();){if(a===0&&r.end()===0){a=r.end();continue}if(t>0&&s.length===t-1)break;if(a===r.start()){if(t===0){i+=1,a=r.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(r.substring(a,r.start())),a=r.end()}if(t===0&&a!==r.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(r.substring(a,r.inputLength()))}return(t!==0||s.length===0)&&s.push(r.substring(a,r.inputLength())),s}toString(){return this.patternInput}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}};g(Qe,"CASE_INSENSITIVE",1),g(Qe,"DOTALL",2),g(Qe,"MULTILINE",4),g(Qe,"DISABLE_UNICODE_GROUPS",8),g(Qe,"LONGEST_MATCH",16);let Xr=Qe;/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let ar="12.15.0";function yf(n){ar=n}/**
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
 */const Dn=new aa("@firebase/firestore");function Nr(){return Dn.logLevel}function J(n,...e){if(Dn.logLevel<=se.DEBUG){const t=e.map(da);Dn.debug(`Firestore (${ar}): ${n}`,...t)}}function Ni(n,...e){if(Dn.logLevel<=se.ERROR){const t=e.map(da);Dn.error(`Firestore (${ar}): ${n}`,...t)}}function Ln(n,...e){if(Dn.logLevel<=se.WARN){const t=e.map(da);Dn.warn(`Firestore (${ar}): ${n}`,...t)}}function da(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function te(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,E1(n,r,t)}function E1(n,e,t){let r=`FIRESTORE (${ar}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ni(r),new Error(r)}function Y(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||E1(e,s,r)}function rt(n,e){return n}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends zt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Hr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Ef{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(lt.UNAUTHENTICATED))}shutdown(){}}class vf{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Y(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Hr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Hr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Hr)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string",31837,{l:r}),new Ef(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string",2055,{h:e}),new lt(e)}}class Af{constructor(e,t,r){this.T=e,this.P=t,this.R=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}A(){return this.R?this.R():null}get headers(){this.I.set("X-Goog-AuthUser",this.T);const e=this.A();return e&&this.I.set("Authorization",e),this.P&&this.I.set("X-Goog-Iam-Authorization-Token",this.P),this.I}}class Tf{constructor(e,t,r){this.T=e,this.P=t,this.R=r}getToken(){return Promise.resolve(new Af(this.T,this.P,this.R))}start(e,t){e.enqueueRetryable(()=>t(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class If{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,en(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Y(this.o===void 0,3512);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,J("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Qc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Y(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Qc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Cf(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class xf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Cf(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ge(n,e){return n<e?-1:n>e?1:0}function $o(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Co(s)===Co(i)?ge(s,i):Co(s)?1:-1}return ge(n.length,e.length)}const Rf=55296,Sf=57343;function Co(n){const e=n.charCodeAt(0);return e>=Rf&&e<=Sf}function er(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const tr="__name__";class St{constructor(e,t,r){t===void 0?t=0:t>e.length&&te(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&te(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return St.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof St?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=St.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ge(e.length,t.length)}static compareSegments(e,t){const r=St.isNumericId(e),s=St.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?St.extractNumericId(e).compare(St.extractNumericId(t)):$o(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ha.fromString(e.substring(4,e.length-2))}}class Ce extends St{construct(e,t,r){return new Ce(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new W($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Ce(t)}static emptyPath(){return new Ce([])}}const Pf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends St{construct(e,t,r){return new Fe(e,t,r)}static isValidIdentifier(e){return Pf.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===tr}static keyField(){return new Fe([tr])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new W($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new W($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(t)}static emptyPath(){return new Fe([])}}/**
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
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Ce.fromString(e))}static fromName(e){return new ee(Ce.fromString(e).popFirst(5))}static empty(){return new ee(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Ce(e.slice()))}}/**
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
 */function kf(n,e,t,r){if(e===!0&&r===!0)throw new W($.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function fs(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function b1(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":te(12329,{type:typeof n})}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Se(n,e){const t={typeString:n};return e&&(t.value=e),t}function ps(n,e){if(!fs(n))throw new W($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new W($.INVALID_ARGUMENT,t);return!0}/**
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
 */const Xc=-62135596800,Jc=1e6;class be{static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Jc);return new be(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new W($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new W($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Xc)throw new W($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Jc}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:be._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ps(e,be._jsonSchema))return new be(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Xc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}be._jsonSchemaVersion="firestore/timestamp/1.0",be._jsonSchema={type:Se("string",be._jsonSchemaVersion),seconds:Se("number"),nanoseconds:Se("number")};/**
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
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new be(0,0))}static max(){return new Ee(new be(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Jr=-1;function Nf(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Ee.fromTimestamp(r===1e9?new be(t+1,0):new be(t,r));return new fn(s,ee.empty(),e)}function Of(n){return new fn(n.readTime,n.key,Jr)}class fn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new fn(Ee.min(),ee.empty(),Jr)}static max(){return new fn(Ee.max(),ee.empty(),Jr)}}function Vf(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ee.comparator(n.documentKey,e.documentKey),t!==0?t:ge(n.largestBatchId,e.largestBatchId))}/**
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
 */class Df{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(s=>s?V.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new V((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const f=u;t(e[f]).next(m=>{a[f]=m,++l,l===i&&r(a)},m=>s(m))}})}static doWhile(e,t){return new V((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Lf(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function v1(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class A1{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}A1.ce=-1;/**
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
 */const Mf=-1;function fa(n){return n==null}function Zr(n){return n===0&&1/n==-1/0}function Bf(n){return typeof n=="number"&&Number.isInteger(n)&&!Zr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function Ff(n){return typeof n=="string"}/**
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
 */class ht{constructor(e,t){this.comparator=e,this.root=t||Be.EMPTY}insert(e,t){return new ht(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new ht(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $s(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $s(this.root,e,this.comparator,!1)}getReverseIterator(){return new $s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $s(this.root,e,this.comparator,!0)}}class $s{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Be.RED,this.left=s??Be.EMPTY,this.right=i??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Be(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Be.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw te(27949);return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw te(57766)}get value(){throw te(16141)}get color(){throw te(16727)}get left(){throw te(29726)}get right(){throw te(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Be(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ue{constructor(e){this.comparator=e,this.data=new ht(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Zc(this.data.getIterator())}getIteratorFrom(e){return new Zc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ue(this.comparator);return t.data=e,t}}class Zc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class rn{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new rn([])}unionWith(e){let t=new Ue(Fe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new rn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return er(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */function li(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Oi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Uf(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function T1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class $f extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $f("Invalid base64 string: "+i):i}}(e);return new dt(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const Hf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mn(n){if(Y(!!n,39018),typeof n=="string"){let e=0;const t=Hf.exec(n);if(Y(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(n.seconds),nanos:ke(n.nanos)}}function ke(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function es(n){return typeof n=="string"?dt.fromBase64String(n):dt.fromUint8Array(n)}/**
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
 */const I1="server_timestamp",C1="__type__",x1="__previous_value__",R1="__local_write_time__";function Vi(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[C1])==null?void 0:r.stringValue)===I1}function pa(n){const e=n.mapValue.fields[x1];return Vi(e)?pa(e):e}function ts(n){const e=Mn(n.mapValue.fields[R1].timestampValue);return new be(e.seconds,e.nanos)}/**
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
 */const Ho="(default)";class ci{constructor(e,t){this.projectId=e,this.database=t||Ho}static empty(){return new ci("","")}get isDefaultDatabase(){return this.database===Ho}isEqual(e){return e instanceof ci&&e.projectId===this.projectId&&e.database===this.database}}function qf(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new W($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ci(n.options.projectId,e)}/**
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
 */const S1="__type__",jf="__max__",Hs={mapValue:{}},P1="__vector__",ui="value",nr={nullValue:"NULL_VALUE"},st={booleanValue:!0},De={booleanValue:!1};function Le(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Vi(n)?4:zf(n)?9007199254740991:hi(n)?10:11:te(28295,{value:n})}function _t(n,e,t){if(n===e)return!0;const r=Le(n);if(r!==Le(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ts(n).isEqual(ts(e));case 3:return function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const l=Mn(i.timestampValue),u=Mn(a.timestampValue);return l.seconds===u.seconds&&l.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,a){return es(i.bytesValue).isEqual(es(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,a){return ke(i.geoPointValue.latitude)===ke(a.geoPointValue.latitude)&&ke(i.geoPointValue.longitude)===ke(a.geoPointValue.longitude)}(n,e);case 2:return function(i,a,l){if("integerValue"in i&&"integerValue"in a)return ke(i.integerValue)===ke(a.integerValue);let u,f;if("doubleValue"in i&&"doubleValue"in a)u=ke(i.doubleValue),f=ke(a.doubleValue);else{if(!(l!=null&&l.Ee))return!1;u=ke(i.integerValue??i.doubleValue),f=ke(a.integerValue??a.doubleValue)}return u===f?!!(l!=null&&l.he)||Zr(u)===Zr(f):!!(l===void 0||l.Te)&&isNaN(u)&&isNaN(f)}(n,e,t);case 9:return er(n.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>_t(s,i,t));case 10:case 11:return function(i,a,l){const u=i.mapValue.fields||{},f=a.mapValue.fields||{};if(li(u)!==li(f))return!1;for(const m in u)if(u.hasOwnProperty(m)&&(f[m]===void 0||!_t(u[m],f[m],l)))return!1;return!0}(n,e,t);default:return te(52216,{left:n})}}function ns(n,e){return(n.values||[]).find(t=>_t(t,e))!==void 0}function it(n,e){if(n===e)return 0;const t=Le(n),r=Le(e);if(t!==r)return ge(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ge(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=ke(i.integerValue||i.doubleValue),u=ke(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return eu(n.timestampValue,e.timestampValue);case 4:return eu(ts(n),ts(e));case 5:return $o(n.stringValue,e.stringValue);case 6:return function(i,a){const l=es(i),u=es(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let f=0;f<l.length&&f<u.length;f++){const m=ge(l[f],u[f]);if(m!==0)return m}return ge(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ge(ke(i.latitude),ke(a.latitude));return l!==0?l:ge(ke(i.longitude),ke(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return tu(n.arrayValue,e.arrayValue);case 10:return function(i,a){var S,O,D,U;const l=i.fields||{},u=a.fields||{},f=(S=l[ui])==null?void 0:S.arrayValue,m=(O=u[ui])==null?void 0:O.arrayValue,_=ge(((D=f==null?void 0:f.values)==null?void 0:D.length)||0,((U=m==null?void 0:m.values)==null?void 0:U.length)||0);return _!==0?_:tu(f,m)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Hs.mapValue&&a===Hs.mapValue)return 0;if(i===Hs.mapValue)return 1;if(a===Hs.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),f=a.fields||{},m=Object.keys(f);u.sort(),m.sort();for(let _=0;_<u.length&&_<m.length;++_){const S=$o(u[_],m[_]);if(S!==0)return S;const O=it(l[u[_]],f[m[_]]);if(O!==0)return O}return ge(u.length,m.length)}(n.mapValue,e.mapValue);default:throw te(23264,{Pe:t})}}function eu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ge(n,e);const t=Mn(n),r=Mn(e),s=ge(t.seconds,r.seconds);return s!==0?s:ge(t.nanos,r.nanos)}function tu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=it(t[s],r[s]);if(i!==void 0&&i!==0)return i}return ge(t.length,r.length)}function rr(n){return qo(n)}function qo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Mn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return es(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ee.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=qo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${qo(t.fields[a])}`;return s+"}"}(n.mapValue):te(61005,{value:n})}function Vt(n){return!!n&&"integerValue"in n}function xn(n){return!!n&&"doubleValue"in n}function pn(n){return Vt(n)||xn(n)}function sr(n){return!!n&&"arrayValue"in n}function Tt(n){return!!n&&"nullValue"in n}function yt(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Qn(n){return!!n&&"mapValue"in n}function hi(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[S1])==null?void 0:r.stringValue)===P1}function jo(n){var e,t;return(t=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[ui])==null?void 0:t.arrayValue}function qr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Oi(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=qr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qr(n.arrayValue.values[t]);return e}return{...n}}function zf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===jf}/**
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
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Qn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qr(t)}setAll(e){let t=Fe.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=qr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Qn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return _t(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Qn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Oi(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(qr(this.value))}}/**
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
 */function Di(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zr(e)?"-0":e}}function ma(n){return{integerValue:""+n}}function ga(n,e,t){return Number.isInteger(e)&&(t!=null&&t.preferIntegers)||Bf(e)?ma(e):Di(n,e)}/**
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
 */class Li{constructor(){this._=void 0}}function Gf(n,e,t){return n instanceof zo?function(s,i){const a={fields:{[C1]:{stringValue:I1},[R1]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Vi(i)&&(i=pa(i)),i&&(a.fields[x1]=i),{mapValue:a}}(t,e):n instanceof di?k1(n,e):n instanceof fi?N1(n,e):n instanceof pi?function(s,i){const a=Kf(s,i),l=mi(a)+mi(s.Re);return Vt(a)&&Vt(s.Re)?ma(l):Di(s.serializer,l)}(n,e):n instanceof Go?function(s,i){return nu(s,i,Math.min)}(n,e):n instanceof Wo?function(s,i){return nu(s,i,Math.max)}(n,e):void 0}function Wf(n,e,t){return n instanceof di?k1(n,e):n instanceof fi?N1(n,e):t}function Kf(n,e){return n instanceof pi?pn(e)?e:{integerValue:0}:null}class zo extends Li{}class di extends Li{constructor(e){super(),this.elements=e}}function k1(n,e){const t=O1(e);for(const r of n.elements)t.some(s=>_t(s,r))||t.push(r);return{arrayValue:{values:t}}}class fi extends Li{constructor(e){super(),this.elements=e}}function N1(n,e){let t=O1(e);for(const r of n.elements)t=t.filter(s=>!_t(s,r));return{arrayValue:{values:t}}}class wa extends Li{constructor(e,t){super(),this.serializer=e,this.Re=t}}class pi extends wa{}class Go extends wa{}class Wo extends wa{}function nu(n,e,t){if(!pn(e))return n.Re;const r=t(mi(e),mi(n.Re));return Vt(e)&&Vt(n.Re)?ma(r):Di(n.serializer,r)}function mi(n){return ke(n.integerValue||n.doubleValue)}function O1(n){return sr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Yf(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof di&&s instanceof di||r instanceof fi&&s instanceof fi?er(r.elements,s.elements,_t):r instanceof pi&&s instanceof pi||r instanceof Go&&s instanceof Go||r instanceof Wo&&s instanceof Wo?_t(r.Re,s.Re):r instanceof zo&&s instanceof zo}(n.transform,e.transform)}class Rn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Rn}static exists(e){return new Rn(void 0,e)}static updateTime(e){return new Rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Js(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class _a{}function V1(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Xf(n.key,Rn.none()):new ya(n.key,n.data,Rn.none());{const t=n.data,r=kt.empty();let s=new Ue(Fe.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Mi(n.key,r,new rn(s.toArray()),Rn.none())}}function Qf(n,e,t){n instanceof ya?function(s,i,a){const l=s.value.clone(),u=su(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Mi?function(s,i,a){if(!Js(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=su(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(D1(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function jr(n,e,t,r){return n instanceof ya?function(i,a,l,u){if(!Js(i.precondition,a))return l;const f=i.value.clone(),m=iu(i.fieldTransforms,u,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof Mi?function(i,a,l,u){if(!Js(i.precondition,a))return l;const f=iu(i.fieldTransforms,u,a),m=a.data;return m.setAll(D1(i)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(_=>_.field))}(n,e,t,r):function(i,a,l){return Js(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function ru(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&er(r,s,(i,a)=>Yf(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ya extends _a{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mi extends _a{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function D1(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function su(n,e,t){const r=new Map;Y(n.length===t.length,32656,{Ie:t.length,Ae:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,Wf(a,l,t[s]))}return r}function iu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Gf(i,a,e))}return r}class Xf extends _a{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gi{constructor(e,t){this.position=e,this.inclusive=t}}function ou(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=ee.comparator(ee.fromName(a.referenceValue),t.key):r=it(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function au(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!_t(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class L1{}class Ve extends L1{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Zf(e,t,r):t==="array-contains"?new n6(e,r):t==="in"?new r6(e,r):t==="not-in"?new s6(e,r):t==="array-contains-any"?new i6(e,r):new Ve(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new e6(e,r):new t6(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(it(t,this.value)):t!==null&&Le(this.value)===Le(t)&&this.matchesComparison(it(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mn extends L1{constructor(e,t){super(),this.filters=e,this.op=t,this.Ve=null}static create(e,t){return new mn(e,t)}matches(e){return M1(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Ve!==null||(this.Ve=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Ve}getFilters(){return Object.assign([],this.filters)}}function M1(n){return n.op==="and"}function B1(n){return Jf(n)&&M1(n)}function Jf(n){for(const e of n.filters)if(e instanceof mn)return!1;return!0}function Ko(n){if(n instanceof Ve)return n.field.canonicalString()+n.op.toString()+rr(n.value);if(B1(n))return n.filters.map(e=>Ko(e)).join(",");{const e=n.filters.map(t=>Ko(t)).join(",");return`${n.op}(${e})`}}function F1(n,e){return n instanceof Ve?function(r,s){return s instanceof Ve&&r.op===s.op&&r.field.isEqual(s.field)&&_t(r.value,s.value)}(n,e):n instanceof mn?function(r,s){return s instanceof mn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&F1(a,s.filters[l]),!0):!1}(n,e):void te(19439)}function U1(n){return n instanceof Ve?function(t){return`${t.field.canonicalString()} ${t.op} ${rr(t.value)}`}(n):n instanceof mn?function(t){return t.op.toString()+" {"+t.getFilters().map(U1).join(" ,")+"}"}(n):"Filter"}class Zf extends Ve{constructor(e,t,r){super(e,t,r),this.key=ee.fromName(r.referenceValue)}matches(e){const t=ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class e6 extends Ve{constructor(e,t){super(e,"in",t),this.keys=$1("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class t6 extends Ve{constructor(e,t){super(e,"not-in",t),this.keys=$1("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function $1(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>ee.fromName(r.referenceValue))}class n6 extends Ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return sr(t)&&ns(t.arrayValue,this.value)}}class r6 extends Ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ns(this.value.arrayValue,t)}}class s6 extends Ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(ns(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ns(this.value.arrayValue,t)}}class i6 extends Ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!sr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ns(this.value.arrayValue,r))}}/**
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
 */class wi{constructor(e,t="asc"){this.field=e,this.dir=t}}function o6(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class vt{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new vt(e,0,Ee.min(),Ee.min(),Ee.min(),kt.empty(),0)}static newFoundDocument(e,t,r,s){return new vt(e,1,t,Ee.min(),r,s,0)}static newNoDocument(e,t){return new vt(e,2,t,Ee.min(),Ee.min(),kt.empty(),0)}static newUnknownDocument(e,t){return new vt(e,3,t,Ee.min(),Ee.min(),kt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class a6{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.de=null}}function lu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new a6(n,e,t,r,s,i,a)}function H1(n){const e=rt(n);if(e.de===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ko(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),fa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>rr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>rr(r)).join(",")),e.de=t}return e.de}function q1(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!o6(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!F1(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!au(n.startAt,e.startAt)&&au(n.endAt,e.endAt)}function l6(n){return!!n.isCorePipeline}/**
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
 */class Bi{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.fe=null,this.me=null,this.pe=null,this.startAt,this.endAt}}function c6(n,e,t,r,s,i,a,l){return new Bi(n,e,t,r,s,i,a,l)}function u6(n){return new Bi(n)}function cu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function h6(n){return ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function d6(n){return n.collectionGroup!==null}function zr(n){const e=rt(n);if(e.fe===null){e.fe=[];const t=new Set;for(const i of e.explicitOrderBy)e.fe.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ue(Fe.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.fe.push(new wi(i,r))}),t.has(Fe.keyField().canonicalString())||e.fe.push(new wi(Fe.keyField(),r))}return e.fe}function Sn(n){const e=rt(n);return e.me||(e.me=f6(e,zr(n))),e.me}function f6(n,e){if(n.limitType==="F")return lu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new wi(s.field,i)});const t=n.endAt?new gi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new gi(n.startAt.position,n.startAt.inclusive):null;return lu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Yo(n,e,t){return new Bi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function p6(n,e){return q1(Sn(n),Sn(e))&&n.limitType===e.limitType}function Zs(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>U1(s)).join(", ")}]`),fa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>rr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>rr(s)).join(",")),`Target(${r})`}(Sn(n))}; limitType=${n.limitType})`}function Ea(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ee.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of zr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const f=ou(a,l,u);return a.inclusive?f<=0:f<0}(r.startAt,zr(r),s)||r.endAt&&!function(a,l,u){const f=ou(a,l,u);return a.inclusive?f>=0:f>0}(r.endAt,zr(r),s))}(n,e)}function j1(n){return(e,t)=>{let r=!1;for(const s of zr(n)){const i=m6(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function m6(n,e,t){const r=n.field.isKeyField()?ee.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),f=l.data.field(i);return u!==null&&f!==null?it(u,f):te(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return te(19790,{direction:n.dir})}}/**
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
 */var Re,ie;function g6(n){if(n===void 0)return Ni("GRPC error has no .code"),$.UNKNOWN;switch(n){case Re.OK:return $.OK;case Re.CANCELLED:return $.CANCELLED;case Re.UNKNOWN:return $.UNKNOWN;case Re.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Re.INTERNAL:return $.INTERNAL;case Re.UNAVAILABLE:return $.UNAVAILABLE;case Re.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Re.NOT_FOUND:return $.NOT_FOUND;case Re.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Re.ABORTED:return $.ABORTED;case Re.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Re.DATA_LOSS:return $.DATA_LOSS;default:return te(39323,{code:n})}}(ie=Re||(Re={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class lr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Oi(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return T1(this.inner)}size(){return this.innerSize}}/**
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
 */const w6=new ht(ee.comparator);function ei(){return w6}const z1=new ht(ee.comparator);function Or(...n){let e=z1;for(const t of n)e=e.insert(t.key,t);return e}function _6(n){let e=z1;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function nn(){return Gr()}function G1(){return Gr()}function Gr(){return new lr(n=>n.toString(),(n,e)=>n.isEqual(e))}const U3=new ht(ee.comparator),y6=new Ue(ee.comparator);function et(...n){let e=y6;for(const t of n)e=e.add(t);return e}const E6=new Ue(ge);function b6(){return E6}/**
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
 */const $3=new ha([4294967295,4294967295],0);/**
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
 */class v6{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ba(n){const e=Mn(n);return new be(e.seconds,e.nanos)}function A6(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function xo(n,e){return Qo(n,e.toTimestamp())}function uu(n){return Y(!!n,49232),Ee.fromTimestamp(ba(n))}function W1(n,e){return Xo(n,e).canonicalString()}function Xo(n,e){const t=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function T6(n){const e=Ce.fromString(n);return Y(S6(e),10190,{key:e.toString()}),e}function I6(n,e){return W1(n.databaseId,e.path)}function C6(n){const e=T6(n);return e.length===4?Ce.emptyPath():x6(e)}function x6(n){return Y(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function R6(n){let e=C6(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Y(r===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(_){const S=K1(_);return S instanceof mn&&B1(S)?S.getFilters():[S]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(S=>function(D){return new wi(zn(D.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(S))}(t.orderBy));let l=null;t.limit&&(l=function(_){let S;return S=typeof _=="object"?_.value:_,fa(S)?null:S}(t.limit));let u=null;t.startAt&&(u=function(_){const S=!!_.before,O=_.values||[];return new gi(O,S)}(t.startAt));let f=null;return t.endAt&&(f=function(_){const S=!_.before,O=_.values||[];return new gi(O,S)}(t.endAt)),c6(e,s,a,i,l,"F",u,f)}function K1(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=zn(t.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=zn(t.unaryFilter.field);return Ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zn(t.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=zn(t.unaryFilter.field);return Ve.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return te(61313);default:return te(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ve.create(zn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return te(58110);default:return te(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return mn.create(t.compositeFilter.filters.map(r=>K1(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te(1026)}}(t.compositeFilter.op))}(n):te(30097,{filter:n})}function zn(n){return Fe.fromServerFormat(n.fieldPath)}function S6(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Y1(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function rs(n,e){const t={fields:{}};return e.forEach((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=r._toProto(n)}),{mapValue:t}}function Q1(n){return{stringValue:n}}/**
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
 */function X1(n){return new v6(n,!0)}/**
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
 */class At{constructor(e){this._byteString=e}static fromBase64String(e){try{return new At(dt.fromBase64String(e))}catch(t){throw new W($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new At(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:At._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ps(e,At._jsonSchema))return At.fromBase64String(e.bytes)}}At._jsonSchemaVersion="firestore/bytes/1.0",At._jsonSchema={type:Se("string",At._jsonSchemaVersion),bytes:Se("string")};/**
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
 */class va{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new W($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function P6(){return new va(tr)}/**
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
 */class J1{constructor(e){this._methodName=e}}/**
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
 */class $t{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new W($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new W($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$t._jsonSchemaVersion}}static fromJSON(e){if(ps(e,$t._jsonSchema))return new $t(e.latitude,e.longitude)}}function k6(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */$t._jsonSchemaVersion="firestore/geoPoint/1.0",$t._jsonSchema={type:Se("string",$t._jsonSchemaVersion),latitude:Se("number"),longitude:Se("number")};class N6{bt(e){}shutdown(){}}/**
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
 */const hu="ConnectivityMonitor";class du{constructor(){this.vt=()=>this.St(),this.Dt=()=>this.xt(),this.Ct=[],this.Ft()}bt(e){this.Ct.push(e)}shutdown(){window.removeEventListener("online",this.vt),window.removeEventListener("offline",this.Dt)}Ft(){window.addEventListener("online",this.vt),window.addEventListener("offline",this.Dt)}St(){J(hu,"Network connectivity changed: AVAILABLE");for(const e of this.Ct)e(0)}xt(){J(hu,"Network connectivity changed: UNAVAILABLE");for(const e of this.Ct)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let qs=null;function Jo(){return qs===null?qs=function(){return 268435456+Math.round(2147483648*Math.random())}():qs++,"0x"+qs.toString(16)}/**
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
 */const Ro="RestConnection",O6={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class V6{get Ot(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Mt=t+"://"+e.host,this.Nt=`projects/${r}/databases/${s}`,this.Lt=this.databaseId.database===Ho?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Bt(e,t,r,s,i){const a=Jo(),l=this.Ut(e,t.toUriEncodedString());J(Ro,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Nt,"x-goog-request-params":this.Lt};this.kt(u,s,i);const{host:f}=new URL(l),m=oa(f);return this.qt(e,l,u,r,m).then(_=>(J(Ro,`Received RPC '${e}' ${a}: `,_),_),_=>{throw Ln(Ro,`RPC '${e}' ${a} failed with error: `,_,"url: ",l,"request:",r),_})}$t(e,t,r,s,i,a){return this.Bt(e,t,r,s,i)}kt(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ar}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Ut(e,t){const r=O6[e];let s=`${this.Mt}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class D6{constructor(e){this.Kt=e.Kt,this.Wt=e.Wt}Qt(e){this.Gt=e}zt(e){this.jt=e}Ht(e){this.Jt=e}onMessage(e){this.Yt=e}close(){this.Wt()}send(e){this.Kt(e)}Zt(){this.Gt()}Xt(){this.jt()}en(e){this.Jt(e)}tn(e){this.Yt(e)}}/**
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
 */const qe="WebChannelConnection",Vr=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Xn extends V6{constructor(e){super(e),this.nn=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static rn(){if(!Xn.sn){const e=w1();Vr(e,g1.STAT_EVENT,t=>{t.stat===Fo.PROXY?J(qe,"STAT_EVENT: detected buffering proxy"):t.stat===Fo.NOPROXY&&J(qe,"STAT_EVENT: detected no buffering proxy")}),Xn.sn=!0}}qt(e,t,r,s,i){const a=Jo();return new Promise((l,u)=>{const f=new p1;f.setWithCredentials(!0),f.listenOnce(m1.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Xs.NO_ERROR:const _=f.getResponseJson();J(qe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(_)),l(_);break;case Xs.TIMEOUT:J(qe,`RPC '${e}' ${a} timed out`),u(new W($.DEADLINE_EXCEEDED,"Request time out"));break;case Xs.HTTP_ERROR:const S=f.getStatus();if(J(qe,`RPC '${e}' ${a} failed with status:`,S,"response text:",f.getResponseText()),S>0){let O=f.getResponseJson();Array.isArray(O)&&(O=O[0]);const D=O==null?void 0:O.error;if(D&&D.status&&D.message){const U=function(H){const re=H.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(re)>=0?re:$.UNKNOWN}(D.status);u(new W(U,D.message))}else u(new W($.UNKNOWN,"Server responded with status "+f.getStatus()))}else u(new W($.UNAVAILABLE,"Connection failed."));break;default:te(9055,{_n:e,streamId:a,an:f.getLastErrorCode(),un:f.getLastError()})}}finally{J(qe,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(s);J(qe,`RPC '${e}' ${a} sending request:`,s),f.send(t,"POST",m,r,15)})}cn(e,t,r){const s=Jo(),i=[this.Mt,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.kt(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=i.join("");J(qe,`Creating RPC '${e}' stream ${s}: ${f}`,l);const m=a.createWebChannel(f,l);this.En(m);let _=!1,S=!1;const O=new D6({Kt:D=>{S?J(qe,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(_||(J(qe,`Opening RPC '${e}' stream ${s} transport.`),m.open(),_=!0),J(qe,`RPC '${e}' stream ${s} sending:`,D),m.send(D))},Wt:()=>m.close()});return Vr(m,Dr.EventType.OPEN,()=>{S||(J(qe,`RPC '${e}' stream ${s} transport opened.`),O.Zt())}),Vr(m,Dr.EventType.CLOSE,()=>{S||(S=!0,J(qe,`RPC '${e}' stream ${s} transport closed`),O.en(),this.hn(m))}),Vr(m,Dr.EventType.ERROR,D=>{S||(S=!0,Ln(qe,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),O.en(new W($.UNAVAILABLE,"The operation could not be completed")))}),Vr(m,Dr.EventType.MESSAGE,D=>{var U;if(!S){const L=D.data[0];Y(!!L,16349);const H=L,re=(H==null?void 0:H.error)||((U=H[0])==null?void 0:U.error);if(re){J(qe,`RPC '${e}' stream ${s} received error:`,re);const de=re.status;let ne=function(A){const w=Re[A];if(w!==void 0)return g6(w)}(de),he=re.message;de==="NOT_FOUND"&&he.includes("database")&&he.includes("does not exist")&&he.includes(this.databaseId.database)&&Ln(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ne===void 0&&(ne=$.INTERNAL,he="Unknown error status: "+de+" with message "+re.message),S=!0,O.en(new W(ne,he)),m.close()}else J(qe,`RPC '${e}' stream ${s} received:`,L),O.tn(L)}}),Xn.rn(),setTimeout(()=>{O.Xt()},0),O}terminate(){this.nn.forEach(e=>e.close()),this.nn=[]}En(e){this.nn.push(e)}hn(e){this.nn=this.nn.filter(t=>t===e)}kt(e,t,r){super.kt(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return _1()}}/**
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
 */function L6(n){return new Xn(n)}Xn.sn=!1;class M6{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Tn=e,this.timerId=t,this.Pn=r,this.Rn=s,this.In=i,this.An=0,this.Vn=null,this.dn=Date.now(),this.reset()}reset(){this.An=0}fn(){this.An=this.In}mn(e){this.cancel();const t=Math.floor(this.An+this.pn()),r=Math.max(0,Date.now()-this.dn),s=Math.max(0,t-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.An} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Vn=this.Tn.enqueueAfterDelay(this.timerId,s,()=>(this.dn=Date.now(),e())),this.An*=this.Rn,this.An<this.Pn&&(this.An=this.Pn),this.An>this.In&&(this.An=this.In)}gn(){this.Vn!==null&&(this.Vn.skipDelay(),this.Vn=null)}cancel(){this.Vn!==null&&(this.Vn.cancel(),this.Vn=null)}pn(){return(Math.random()-.5)*this.An}}/**
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
 */class B6{}class F6 extends B6{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.tr=!1}nr(){if(this.tr)throw new W($.FAILED_PRECONDITION,"The client has already been terminated.")}Bt(e,t,r,s){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Bt(e,Xo(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W($.UNKNOWN,i.toString())})}$t(e,t,r,s,i){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.$t(e,Xo(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new W($.UNKNOWN,a.toString())})}terminate(){this.tr=!0,this.connection.terminate()}}function U6(n,e,t,r){return new F6(n,e,t,r)}/**
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
 */const $6="ComponentProvider",fu=new Map;/**
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
 */const Z1=41943040;class wt{static withCacheSize(e){return new wt(e,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(Z1,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);/**
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
 */const H6=1048576;/**
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
 */const q6="firestore.googleapis.com",pu=!0;class mu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=q6,this.ssl=pu}else this.host=e.host,this.ssl=e.ssl??pu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Z1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<H6)throw new W($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=k6(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class j6{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bf;switch(r.type){case"firstParty":return new Tf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=fu.get(t);r&&(J($6,"Removing Datastore"),fu.delete(t),r.terminate())}(this),Promise.resolve()}}/**
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
 */class Aa{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Aa(this.firestore,e,this._query)}}class ct{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ta(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}toJSON(){return{type:ct._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ps(t,ct._jsonSchema))return new ct(e,r||null,new ee(Ce.fromString(t.referencePath)))}}ct._jsonSchemaVersion="firestore/documentReference/1.0",ct._jsonSchema={type:Se("string",ct._jsonSchemaVersion),referencePath:Se("string")};class Ta extends Aa{constructor(e,t,r){super(e,t,u6(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new ee(e))}withConverter(e){return new Ta(this.firestore,e,this._path)}}/**
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
 * Copyright 2024 Google LLC
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
 */class ut{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ut._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ps(e,ut._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ut(e.vectorValues);throw new W($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ut._jsonSchemaVersion="firestore/vectorValue/1.0",ut._jsonSchema={type:Se("string",ut._jsonSchemaVersion),vectorValues:Se("object")};/**
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
 */function z6(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te(40011,{dataSource:n})}}function ss(n,e,t){if(eh(n=Nn(n)))return W6("Unsupported field value:",e,n),G6(n,e);if(n instanceof J1)return function(s,i){if(!z6(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const a=s._toFieldTransform(i);a&&i.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){const a=[];let l=0;for(const u of s){let f=ss(u,i.childContextForArray(l));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),l++}return{arrayValue:{values:a}}}(n,e)}return function(s,i,a){if((s=Nn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return ga(i.serializer,s,a);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=be.fromDate(s);return{timestampValue:Qo(i.serializer,l)}}if(s instanceof be){const l=new be(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Qo(i.serializer,l)}}if(s instanceof $t)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof At)return{bytesValue:A6(i.serializer,s._byteString)};if(s instanceof ct){const l=i.databaseId,u=s.firestore._databaseId;if(!u.isEqual(l))throw i.createError(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:W1(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof ut)return function(u,f){const m=u instanceof ut?u.toArray():u;return{mapValue:{fields:{[S1]:{stringValue:P1},[ui]:{arrayValue:{values:m.map(S=>{if(typeof S!="number")throw f.createError("VectorValues must only contain numeric values.");return Di(f.serializer,S)})}}}}}}(s,i);if(Y1(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${b1(s)}`)}(n,e,t)}function G6(n,e){const t={};return T1(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Oi(n,(r,s)=>{const i=ss(s,e.childContextForField(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function eh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof be||n instanceof $t||n instanceof At||n instanceof ct||n instanceof J1||n instanceof ut||Y1(n))}function W6(n,e,t){if(!eh(t)||!fs(t)){const r=b1(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function Ia(n,e,t){if((e=Nn(e))instanceof va)return e._internalPath;if(typeof e=="string")return Y6(n,e);throw Zo("Field path arguments must be of type string or ",n,!1,void 0,t)}const K6=new RegExp("[~\\*/\\[\\]]");function Y6(n,e,t){if(e.search(K6)>=0)throw Zo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new va(...e.split("."))._internalPath}catch{throw Zo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Zo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new W($.INVALID_ARGUMENT,l+n+u)}function Q6(n){return typeof n._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
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
 */class We{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=kt.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const a=e[s];let l;i.nestedOptions&&fs(a)?l={mapValue:{fields:new We(i.nestedOptions).getOptionsProto(t,a)}}:a&&(l=ss(a,t)??void 0),l&&r.set(Fe.fromServerFormat(i.serverName),l)}}return r}getOptionsProto(e,t,r){const s=this._getKnownOptions(t,e);if(r){const i=new Map(Uf(r,(a,l)=>[Fe.fromServerFormat(l),a!==void 0?ss(a,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function X6(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!fs(t.fields))}(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(n.pipelineValue)))}function J6(n){return new ut(n)}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function M(n){let e;return n instanceof Fn?n:(e=fs(n)?sp(n):n instanceof Array?ip(n):th(n,void 0),e)}function So(n){if(n instanceof Fn)return n;if(n instanceof ut)return is(n);if(Array.isArray(n))return is(J6(n));throw new Error("Unsupported value: "+typeof n)}function Ca(n){return Ff(n)?tp(n):M(n)}class Fn{constructor(){this._protoValueType="ProtoValue"}add(e){return new k("add",[this,M(e)],"add")}asBoolean(){if(this instanceof gn)return this;if(this instanceof cr)return new rh(this);if(this instanceof ms)return new rp(this);if(this instanceof k)return new nh(this);throw new W("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new k("subtract",[this,M(e)],"subtract")}multiply(e){return new k("multiply",[this,M(e)],"multiply")}divide(e){return new k("divide",[this,M(e)],"divide")}mod(e){return new k("mod",[this,M(e)],"mod")}equal(e){return new k("equal",[this,M(e)],"equal").asBoolean()}notEqual(e){return new k("not_equal",[this,M(e)],"notEqual").asBoolean()}lessThan(e){return new k("less_than",[this,M(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new k("less_than_or_equal",[this,M(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new k("greater_than",[this,M(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new k("greater_than_or_equal",[this,M(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map(s=>M(s));return new k("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new k("array_contains",[this,M(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Lr(e.map(M),"arrayContainsAll"):e;return new k("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Lr(e.map(M),"arrayContainsAny"):e;return new k("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new k("array_reverse",[this])}arrayLength(){return new k("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Lr(e.map(M),"equalAny"):e;return new k("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Lr(e.map(M),"notEqualAny"):e;return new k("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new k("exists",[this],"exists").asBoolean()}charLength(){return new k("char_length",[this],"charLength")}like(e){return new k("like",[this,M(e)],"like").asBoolean()}regexContains(e){return new k("regex_contains",[this,M(e)],"regexContains").asBoolean()}regexFind(e){return new k("regex_find",[this,M(e)],"regexFind")}regexFindAll(e){return new k("regex_find_all",[this,M(e)],"regexFindAll")}regexMatch(e){return new k("regex_match",[this,M(e)],"regexMatch").asBoolean()}stringContains(e){return new k("string_contains",[this,M(e)],"stringContains").asBoolean()}startsWith(e){return new k("starts_with",[this,M(e)],"startsWith").asBoolean()}endsWith(e){return new k("ends_with",[this,M(e)],"endsWith").asBoolean()}toLower(){return new k("to_lower",[this],"toLower")}toUpper(){return new k("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(M(e)),new k("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(M(e)),new k("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(M(e)),new k("rtrim",t,"rtrim")}type(){return new k("type",[this])}isType(e){return new k("is_type",[this,is(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(M);return new k("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new k("string_index_of",[this,M(e)],"stringIndexOf")}stringRepeat(e){return new k("string_repeat",[this,M(e)],"stringRepeat")}stringReplaceAll(e,t){return new k("string_replace_all",[this,M(e),M(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new k("string_replace_one",[this,M(e),M(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(M);return new k("concat",[this,...r],"concat")}reverse(){return new k("reverse",[this],"reverse")}arrayFilter(e,t){return new k("array_filter",[this,M(e),t],"arrayFilter")}arrayTransform(e,t){return new k("array_transform",[this,M(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new k("array_transform",[this,M(e),M(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,M(e)];return t!==void 0&&r.push(M(t)),new k("array_slice",r,"arraySlice")}arrayFirst(){return new k("array_first",[this],"arrayFirst")}arrayFirstN(e){return new k("array_first_n",[this,M(e)],"arrayFirstN")}arrayLast(){return new k("array_last",[this],"arrayLast")}arrayLastN(e){return new k("array_last_n",[this,M(e)],"arrayLastN")}arrayMaximum(){return new k("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new k("maximum_n",[this,M(e)],"arrayMaximumN")}arrayMinimum(){return new k("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new k("minimum_n",[this,M(e)],"arrayMinimumN")}arrayIndexOf(e){return new k("array_index_of",[this,M(e),M("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new k("array_index_of",[this,M(e),M("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new k("array_index_of_all",[this,M(e)],"arrayIndexOfAll")}byteLength(){return new k("byte_length",[this],"byteLength")}ceil(){return new k("ceil",[this])}floor(){return new k("floor",[this])}abs(){return new k("abs",[this])}exp(){return new k("exp",[this])}mapGet(e){return new k("map_get",[this,is(e)],"mapGet")}mapSet(e,t,...r){const s=[this,M(e),M(t),...r.map(M)];return new k("map_set",s,"mapSet")}mapKeys(){return new k("map_keys",[this],"mapKeys")}mapValues(){return new k("map_values",[this],"mapValues")}mapEntries(){return new k("map_entries",[this],"mapEntries")}getField(e){return new k("get_field",[this,M(e)],"get_field")}count(){return at._create("count",[this],"count")}sum(){return at._create("sum",[this],"sum")}average(){return at._create("average",[this],"average")}minimum(){return at._create("minimum",[this],"minimum")}maximum(){return at._create("maximum",[this],"maximum")}first(){return at._create("first",[this],"first")}last(){return at._create("last",[this],"last")}arrayAgg(){return at._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return at._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return at._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new k("maximum",[this,...r.map(M)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new k("minimum",[this,...r.map(M)],"minimum")}vectorLength(){return new k("vector_length",[this],"vectorLength")}cosineDistance(e){return new k("cosine_distance",[this,So(e)],"cosineDistance")}dotProduct(e){return new k("dot_product",[this,So(e)],"dotProduct")}euclideanDistance(e){return new k("euclidean_distance",[this,So(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new k("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new k("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new k("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new k("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new k("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new k("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new k("timestamp_add",[this,M(e),M(t)],"timestampAdd")}timestampSubtract(e,t){return new k("timestamp_subtract",[this,M(e),M(t)],"timestampSubtract")}timestampDiff(e,t){return new k("timestamp_diff",[this,Ca(e),M(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,M(e)];return t&&r.push(M(t)),new k("timestamp_extract",r,"timestampExtract")}documentId(){return new k("document_id",[this],"documentId")}parent(){return new k("parent",[this],"parent")}substring(e,t){const r=M(e);return new k("substring",t===void 0?[this,r]:[this,r,M(t)],"substring")}arrayGet(e){return new k("array_get",[this,M(e)],"arrayGet")}isError(){return new k("is_error",[this],"isError").asBoolean()}ifError(e){const t=new k("if_error",[this,M(e)],"ifError");return e instanceof gn?t.asBoolean():t}isAbsent(){return new k("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new k("map_remove",[this,M(e)],"mapRemove")}mapMerge(e,...t){const r=M(e),s=t.map(M);return new k("map_merge",[this,r,...s],"mapMerge")}pow(e){return new k("pow",[this,M(e)])}trunc(e){return e===void 0?new k("trunc",[this]):new k("trunc",[this,M(e)],"trunc")}round(e){return e===void 0?new k("round",[this]):new k("round",[this,M(e)],"round")}collectionId(){return new k("collection_id",[this])}length(){return new k("length",[this])}ln(){return new k("ln",[this])}sqrt(){return new k("sqrt",[this])}stringReverse(){return new k("string_reverse",[this])}ifAbsent(e){return new k("if_absent",[this,M(e)],"ifAbsent")}ifNull(e){return new k("if_null",[this,M(e)],"ifNull")}coalesce(e,...t){return new k("coalesce",[this,M(e),...t.map(M)],"coalesce")}join(e){return new k("join",[this,M(e)],"join")}log10(){return new k("log10",[this])}arraySum(){return new k("sum",[this])}split(e){return new k("split",[this,M(e)])}timestampTruncate(e,t){const r=[this,M(e)];return t&&r.push(M(t)),new k("timestamp_trunc",r)}ascending(){return op(this)}descending(){return ap(this)}as(e){return new ep(this,e,"as")}}class at{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const s=new at(e,t);return s._methodName=r,s}as(e){return new Z6(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class Z6{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class ep{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Lr extends Fn{constructor(e,t){super(),this.Rr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.Rr.map(t=>t._toProto(e))}}}_readUserData(e){this.Rr.forEach(t=>t._readUserData(e))}}class ms extends Fn{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new k("geo_distance",[this,M(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function tp(n){return np(n,"field")}function np(n,e){return new ms(typeof n=="string"?tr===n?P6()._internalPath:Ia("field",n):n._internalPath,e)}class cr extends Fn{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new cr(e,void 0);return t._protoValue=e,t}_toProto(e){return Y(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,X6(this._protoValue)||(this._protoValue=ss(this.value,e))}}function is(n,e){return th(n,"constant")}function th(n,e){const t=new cr(n,e);return typeof n=="boolean"?new rh(t):t}class k extends Fn{constructor(e,t,r,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new We({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(r=>r._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class gn extends Fn{get _methodName(){return this._expr._methodName}countIf(){return at._create("count_if",[this],"countIf")}not(){return new k("not",[this],"not").asBoolean()}conditional(e,t){return new k("conditional",[this,e,t],"conditional")}ifError(e){const t=M(e),r=new k("if_error",[this,t],"ifError");return t instanceof gn?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class nh extends gn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class rh extends gn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class rp extends gn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function sp(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];t.push(is(r)),t.push(M(s))}return new k("map",t,"map")}function ip(n){return function(t,r){return new k("array",t.map(s=>M(s)),r)}(n,"array")}function op(n){return new sh(Ca(n),"ascending","ascending")}function ap(n){return new sh(Ca(n),"descending","descending")}class sh{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:Q1(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class pt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class ih extends pt{get _name(){return"add_fields"}get _optionsUtil(){return new We({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[rs(e,this.fields)]}}_readUserData(e){super._readUserData(e),wn(this.fields,e)}}class oh extends pt{get _name(){return"aggregate"}get _optionsUtil(){return new We({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[rs(e,this.accumulators),rs(e,this.groups)]}}_readUserData(e){super._readUserData(e),wn(this.groups,e),wn(this.accumulators,e)}}class ah extends pt{get _name(){return"distinct"}get _optionsUtil(){return new We({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[rs(e,this.groups)]}}_readUserData(e){super._readUserData(e),wn(this.groups,e)}}class Fi extends pt{get _name(){return"collection"}get _optionsUtil(){return new We({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Vr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Vr}]}}_readUserData(e){super._readUserData(e)}}class Ui extends pt{get _name(){return"collection_group"}get _optionsUtil(){return new We({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class xa extends pt{get _name(){return"database"}get _optionsUtil(){return new We({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class Ra extends pt{get _name(){return"documents"}get _optionsUtil(){return new We({})}constructor(e,t){if(super(t),!e||e.length===0)throw new W($.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(r);if(s.size!==r.length)throw new W($.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.dr=r,this.mr=s}_toProto(e){return{...super._toProto(e),args:this.dr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class Sa extends pt{get _name(){return"where"}get _optionsUtil(){return new We({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),wn(this.condition,e)}}class _i extends pt{get _name(){return"limit"}get _optionsUtil(){return new We({})}constructor(e,t){Y(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[ga(e,this.limit)]}}}class gu extends pt{get _name(){return"offset"}get _optionsUtil(){return new We({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[ga(e,this.offset)]}}}class lp extends pt{get _name(){return"select"}get _optionsUtil(){return new We({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[rs(e,this.selections)]}}_readUserData(e){super._readUserData(e),wn(this.selections,e)}}class Pa extends pt{get _name(){return"sort"}get _optionsUtil(){return new We({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),wn(this.orderings,e)}}class ka extends pt{get _name(){return"replace_with"}get _optionsUtil(){return new We({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),Q1(ka.pr)]}}_readUserData(e){super._readUserData(e),wn(this.map,e)}}ka.pr="full_replace";function wn(n,e){return Q6(n)?n._readUserData(e):Array.isArray(n)?n.forEach(t=>t._readUserData(e)):n instanceof Map?n.forEach(t=>t._readUserData(e)):Object.values(n).forEach(t=>t._readUserData(e)),n}// Copyright 2024 Google LLC* @license
class tt{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return $i(this)}getPipelineCollectionGroup(){return Na(this)}getPipelineCollectionId(){return cp(this)}getPipelineDocuments(){return ea(this)}getPipelineFlavor(){return function(t){let r="exact";return t.stages.forEach((s,i)=>{s._name!==ah.name&&s._name!==oh.name||(r="keyless"),s._name===lp.name&&r==="exact"&&(r="augmented"),s._name===ih.name&&i<t.stages.length-1&&r==="exact"&&(r="augmented")}),r}(this)}getPipelineSourceType(){return cn(this)}}function cn(n){const e=n.stages[0];return e instanceof Fi||e instanceof Ui||e instanceof xa||e instanceof Ra?e._name:"unknown"}function $i(n){if(cn(n)==="collection")return n.stages[0].Vr}function Na(n){if(cn(n)==="collection_group")return n.stages[0].collectionId}function cp(n){switch(cn(n)){case"collection":return Ce.fromString($i(n)).lastSegment();case"collection_group":return Na(n);default:return}}function ea(n){if(cn(n)==="documents")return n.stages[0].dr}// Copyright 2024 Google LLC* @license
class b{constructor(e,t){this.type=e,this.value=t}static vr(){return new b("ERROR",void 0)}static Sr(){return new b("UNSET",void 0)}static Dr(){return new b("NULL",nr)}static newValue(e){return Tt(e)?new b("NULL",nr):function(r){return!!r&&"booleanValue"in r}(e)?new b("BOOLEAN",e):Vt(e)?new b("INT",e):xn(e)?new b("DOUBLE",e):function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue}(e)?new b("TIMESTAMP",e):function(r){return!!r&&"stringValue"in r}(e)?new b("STRING",e):function(r){return!!r&&"bytesValue"in r}(e)?new b("BYTES",e):e.referenceValue?new b("REFERENCE",e):e.geoPointValue?new b("GEO_POINT",e):sr(e)?new b("ARRAY",e):hi(e)?new b("VECTOR",e):Qn(e)?new b("MAP",e):new b("ERROR",void 0)}Cr(){return this.type==="ERROR"||this.type==="UNSET"}Fr(){return this.type==="NULL"}}function Wr(n){if(!n.Cr())return n.value}function lh(n){return n instanceof gn?n._expr:n}function z(n){if((n=lh(n))instanceof ms)return new up(n);if(n instanceof cr)return new hp(n);if(n instanceof Lr)return new dp(n);if(n instanceof k){if(n.name==="add")return new mp(n);if(n.name==="subtract")return new gp(n);if(n.name==="multiply")return new wp(n);if(n.name==="divide")return new _p(n);if(n.name==="mod")return new yp(n);if(n.name==="and")return new Ep(n);if(n.name==="equal")return new Np(n);if(n.name==="not_equal")return new Op(n);if(n.name==="less_than")return new Vp(n);if(n.name==="less_than_or_equal")return new Dp(n);if(n.name==="greater_than")return new Lp(n);if(n.name==="greater_than_or_equal")return new Mp(n);if(n.name==="array_concat")return new Bp(n);if(n.name==="array_reverse")return new Fp(n);if(n.name==="array_contains")return new Up(n);if(n.name==="array_contains_all")return new $p(n);if(n.name==="array_contains_any")return new Hp(n);if(n.name==="array_length")return new qp(n);if(n.name==="array_element")return new jp(n);if(n.name==="equal_any")return new ch(n);if(n.name==="not_equal_any")return new vp(n);if(n.name==="is_nan")return new Ap(n);if(n.name==="is_not_nan")return new Tp(n);if(n.name==="is_null")return new Ip(n);if(n.name==="is_not_null")return new Cp(n);if(n.name==="is_error")return new xp(n);if(n.name==="exists")return new Rp(n);if(n.name==="not")return new Hi(n);if(n.name==="or")return new bp(n);if(n.name==="xor")return new Oa(n);if(n.name==="conditional")return new Sp(n);if(n.name==="maximum")return new Pp(n);if(n.name==="minimum")return new kp(n);if(n.name==="reverse")return new zp(n);if(n.name==="replace_first")return new Gp(n);if(n.name==="replace_all")return new Wp(n);if(n.name==="char_length")return new Kp(n);if(n.name==="byte_length")return new Yp(n);if(n.name==="like")return new Qp(n);if(n.name==="regex_contains")return new Xp(n);if(n.name==="regex_match")return new Jp(n);if(n.name==="string_contains")return new Zp(n);if(n.name==="starts_with")return new em(n);if(n.name==="ends_with")return new tm(n);if(n.name==="to_lower")return new nm(n);if(n.name==="to_upper")return new rm(n);if(n.name==="trim")return new sm(n);if(n.name==="string_concat")return new im(n);if(n.name==="map_get")return new om(n);if(n.name==="cosine_distance")return new am(n);if(n.name==="dot_product")return new lm(n);if(n.name==="euclidean_distance")return new cm(n);if(n.name==="vector_length")return new um(n);if(n.name==="unix_micros_to_timestamp")return new mm(n);if(n.name==="timestamp_to_unix_micros")return new _m(n);if(n.name==="unix_millis_to_timestamp")return new gm(n);if(n.name==="timestamp_to_unix_millis")return new ym(n);if(n.name==="unix_seconds_to_timestamp")return new wm(n);if(n.name==="timestamp_to_unix_seconds")return new Em(n);if(n.name==="timestamp_add")return new bm(n);if(n.name==="timestamp_subtract")return new vm(n)}throw new Error(`Unknown Expr : ${n}`)}class up{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===tr)return b.newValue({referenceValue:I6(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return b.newValue({timestampValue:xo(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return b.newValue({timestampValue:xo(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?Vi(r)?b.newValue(function(i,a){if(i.serverTimestampBehavior==="estimate")return{timestampValue:xo(i.serializer,Ee.fromTimestamp(ts(a)))};if(i.serverTimestampBehavior==="previous"){const l=pa(a);if(l)return l}return{nullValue:"NULL_VALUE"}}(e,r)):b.newValue(r):b.Sr()}}class hp{constructor(e){this.expr=e}evaluate(e,t){return b.newValue(this.expr._getValue())}}class dp{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.Rr.map(s=>z(s).evaluate(e,t));return r.some(s=>s.Cr())?b.vr():b.newValue({arrayValue:{values:r.map(s=>s.value)}})}}function $e(n){return xn(n)?Number(n.doubleValue):Number(n.integerValue)}function Lt(n){return BigInt(n.integerValue)}const fp=BigInt("0x7fffffffffffffff"),pp=-BigInt("0x8000000000000000");class gs{constructor(e){this.expr=e}evaluate(e,t){Y(this.expr.params.length>=2,24778);const r=z(this.expr.params[0]).evaluate(e,t),s=z(this.expr.params[1]).evaluate(e,t);let i=this.Or(r,s);for(const a of this.expr.params.slice(2)){const l=z(a).evaluate(e,t);i=this.Or(i,l)}return i}Or(e,t){if(e.Cr()||t.Cr())return b.vr();if(e.Fr()||t.Fr())return b.Dr();const r=e.value,s=t.value;if(!xn(r)&&!Vt(r)||!xn(s)&&!Vt(s))return b.vr();if(xn(r)||xn(s)){const i=this.Mr(r,s);return i?b.newValue(i):b.vr()}if(Vt(r)&&Vt(s)){const i=this.Nr(r,s);return i===void 0?b.vr():typeof i=="number"?b.newValue({doubleValue:i}):i<pp||i>fp?b.vr():b.newValue({integerValue:`${i}`})}return b.vr()}}function jt(n,e){return Le(n)!==Le(e)?"TYPE_MISMATCH":yt(n)||yt(e)?"NOT_EQ":Tt(n)&&Tt(e)?"EQ":Tt(n)||Tt(e)?"NULL":sr(n)&&sr(e)?function(r,s){var a,l,u;if(((a=r.values)==null?void 0:a.length)!==((l=s.values)==null?void 0:l.length))return"NOT_EQ";let i=!1;for(let f=0;f<(((u=r.values)==null?void 0:u.length)??0);f++){const m=r.values[f],_=s.values[f];switch(jt(m,_)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:te(44609,{Lr:m,Br:_})}}return i?"NULL":"EQ"}(n.arrayValue,e.arrayValue):hi(n)&&hi(e)||Qn(n)&&Qn(e)?function(r,s){const i=r.fields||{},a=s.fields||{};if(li(i)!==li(a))return"NOT_EQ";let l=!1;for(const u in i)if(i.hasOwnProperty(u)){if(a[u]===void 0)return"NOT_EQ";switch(jt(i[u],a[u])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":l=!0}}return l?"NULL":"EQ"}(n.mapValue,e.mapValue):function(r,s){return _t(r,s,{Te:!1,Ee:!0,he:!0})}(n,e)?"EQ":"NOT_EQ"}class mp extends gs{Nr(e,t){return Lt(e)+Lt(t)}Mr(e,t){return{doubleValue:$e(e)+$e(t)}}}class gp extends gs{constructor(e){super(e),this.expr=e}Nr(e,t){return Lt(e)-Lt(t)}Mr(e,t){return{doubleValue:$e(e)-$e(t)}}}class wp extends gs{constructor(e){super(e),this.expr=e}Nr(e,t){return Lt(e)*Lt(t)}Mr(e,t){return{doubleValue:$e(e)*$e(t)}}}class _p extends gs{constructor(e){super(e),this.expr=e}Nr(e,t){const r=Lt(t);if(r!==BigInt(0))return Lt(e)/r}Mr(e,t){const r=$e(t);return r===0?{doubleValue:Zr(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:$e(e)/r}}}class yp extends gs{constructor(e){super(e),this.expr=e}Nr(e,t){const r=Lt(t);if(r!==BigInt(0))return Lt(e)%r}Mr(e,t){const r=$e(t);if(r!==0)return{doubleValue:$e(e)%r}}}class Ep{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const a of this.expr.params){const l=z(a).evaluate(e,t);switch(l.type){case"BOOLEAN":if(!((i=l.value)!=null&&i.booleanValue))return b.newValue(De);break;case"NULL":s=!0;break;default:r=!0}}return r?b.vr():s?b.Dr():b.newValue(st)}}class Hi{constructor(e){this.expr=e}evaluate(e,t){var s;Y(this.expr.params.length===1,9634);const r=z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return b.newValue({booleanValue:!((s=r.value)!=null&&s.booleanValue)});case"NULL":return b.Dr();default:return b.vr()}}}class bp{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const a of this.expr.params){const l=z(a).evaluate(e,t);switch(l.type){case"BOOLEAN":if((i=l.value)!=null&&i.booleanValue)return b.newValue(st);break;case"NULL":s=!0;break;default:r=!0}}return r?b.vr():s?b.Dr():b.newValue(De)}}class Oa{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const a of this.expr.params){const l=z(a).evaluate(e,t);switch(l.type){case"BOOLEAN":r=Oa.xor(r,!!((i=l.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return b.vr()}}return s?b.Dr():b.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class ch{constructor(e){this.expr=e}evaluate(e,t){var a,l;Y(this.expr.params.length===2,55094);let r=!1;const s=z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return b.vr()}const i=z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return b.vr()}if(r)return b.Dr();for(const u of((l=(a=i.value)==null?void 0:a.arrayValue)==null?void 0:l.values)??[])switch(Tt(s.value)&&Tt(u)?"EQ":jt(s.value,u)){case"EQ":return b.newValue(st);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:te(44608,{value:s.value,candidate:u})}return r?b.Dr():b.newValue(De)}}class vp{constructor(e){this.expr=e}evaluate(e,t){return new Hi(new k("not",[new k("equal_any",this.expr.params)])).evaluate(e,t)}}class Ap{constructor(e){this.expr=e}evaluate(e,t){Y(this.expr.params.length===1,23322);const r=z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return b.newValue(De);case"DOUBLE":return b.newValue({booleanValue:isNaN($e(r.value))});case"NULL":return b.Dr();default:return b.vr()}}}class Tp{constructor(e){this.expr=e}evaluate(e,t){return Y(this.expr.params.length===1,50406),new Hi(new k("not",[new k("is_nan",this.expr.params)])).evaluate(e,t)}}class Ip{constructor(e){this.expr=e}evaluate(e,t){switch(Y(this.expr.params.length===1,23123),z(this.expr.params[0]).evaluate(e,t).type){case"NULL":return b.newValue(st);case"UNSET":case"ERROR":return b.vr();default:return b.newValue(De)}}}class Cp{constructor(e){this.expr=e}evaluate(e,t){return Y(this.expr.params.length===1,23167),new Hi(new k("not",[new k("is_null",this.expr.params)])).evaluate(e,t)}}class xp{constructor(e){this.expr=e}evaluate(e,t){return Y(this.expr.params.length===1,5228),z(this.expr.params[0]).evaluate(e,t).type==="ERROR"?b.newValue(st):b.newValue(De)}}class Rp{constructor(e){this.expr=e}evaluate(e,t){switch(Y(this.expr.params.length===1,6877),z(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return b.vr();case"UNSET":return b.newValue(De);default:return b.newValue(st)}}}class Sp{constructor(e){this.expr=e}evaluate(e,t){var s;Y(this.expr.params.length===3,11706);const r=z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return(s=r.value)!=null&&s.booleanValue?z(this.expr.params[1]).evaluate(e,t):z(this.expr.params[2]).evaluate(e,t);case"NULL":return z(this.expr.params[2]).evaluate(e,t);default:return b.vr()}}}class Pp{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>z(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||it(i.value,s.value)>0?i:s}return s===void 0?b.Dr():s}}class kp{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>z(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||it(i.value,s.value)<0?i:s}return s===void 0?b.Dr():s}}class ur{constructor(e){this.expr=e}evaluate(e,t){Y(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return b.vr()}const s=z(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return b.vr()}return this.Ur(r,s)}}class Np extends ur{constructor(e){super(e),this.expr=e}Ur(e,t){if(e.Fr()&&t.Fr())return b.newValue(st);if(e.Fr()||t.Fr()||yt(e.value)||yt(t.value)||Le(e.value)!==Le(t.value))return b.newValue(De);switch(jt(e.value,t.value)){case"EQ":return b.newValue(st);case"NOT_EQ":return b.newValue(De);case"NULL":return b.Dr();default:te(44615,{left:e,right:t})}}}class Op extends ur{constructor(e){super(e),this.expr=e}Ur(e,t){switch(jt(e.value,t.value)){case"EQ":return b.newValue(De);case"NOT_EQ":case"TYPE_MISMATCH":return b.newValue(st);case"NULL":return b.Dr();default:te(44614,{left:e,right:t})}}}class Vp extends ur{constructor(e){super(e),this.expr=e}Ur(e,t){return Le(e.value)!==Le(t.value)||yt(e.value)||yt(t.value)?b.newValue(De):b.newValue({booleanValue:it(e.value,t.value)<0})}}class Dp extends ur{constructor(e){super(e),this.expr=e}Ur(e,t){return Le(e.value)!==Le(t.value)||yt(e.value)||yt(t.value)?b.newValue(De):jt(e.value,t.value)==="EQ"?b.newValue(st):b.newValue({booleanValue:it(e.value,t.value)<0})}}class Lp extends ur{constructor(e){super(e),this.expr=e}Ur(e,t){return Le(e.value)!==Le(t.value)||yt(e.value)||yt(t.value)?b.newValue(De):b.newValue({booleanValue:it(e.value,t.value)>0})}}class Mp extends ur{constructor(e){super(e),this.expr=e}Ur(e,t){return Le(e.value)!==Le(t.value)||yt(e.value)||yt(t.value)?b.newValue(De):jt(e.value,t.value)==="EQ"?b.newValue(st):b.newValue({booleanValue:it(e.value,t.value)>0})}}class Bp{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Fp{constructor(e){this.expr=e}evaluate(e,t){var s;Y(this.expr.params.length===1,216);const r=z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return b.Dr();case"ARRAY":{const i=((s=r.value.arrayValue)==null?void 0:s.values)??[];return b.newValue({arrayValue:{values:[...i].reverse()}})}default:return b.vr()}}}class Up{constructor(e){this.expr=e}evaluate(e,t){return Y(this.expr.params.length===2,52884),new ch(new k("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class $p{constructor(e){this.expr=e}evaluate(e,t){var u,f,m,_;Y(this.expr.params.length===2,1392);let r=!1;const s=z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return b.vr()}const i=z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return b.vr()}if(r)return b.Dr();const a=((f=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:f.values)??[],l=((_=(m=s.value)==null?void 0:m.arrayValue)==null?void 0:_.values)??[];for(const S of a){let O=!1;r=!1;for(const D of l){switch(Tt(S)&&Tt(D)?"EQ":jt(S,D)){case"EQ":O=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:te(44613,{value:D,search:S})}if(O)break}if(!O)return b.newValue(De)}return b.newValue(st)}}class Hp{constructor(e){this.expr=e}evaluate(e,t){var u,f,m,_;Y(this.expr.params.length===2,2680);let r=!1;const s=z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return b.vr()}const i=z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return b.vr()}if(r)return b.Dr();const a=((f=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:f.values)??[],l=((_=(m=s.value)==null?void 0:m.arrayValue)==null?void 0:_.values)??[];for(const S of l)for(const O of a)switch(Tt(S)&&Tt(O)?"EQ":jt(S,O)){case"EQ":return b.newValue(st);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:te(44608,{value:S,search:O})}return r?b.Dr():b.newValue(De)}}class qp{constructor(e){this.expr=e}evaluate(e,t){var s,i,a;Y(this.expr.params.length===1,38605);const r=z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return b.Dr();case"ARRAY":return b.newValue({integerValue:`${((a=(i=(s=r.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:a.length)??0}`});default:return b.vr()}}}class jp{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class zp{constructor(e){this.expr=e}evaluate(e,t){var s,i;Y(this.expr.params.length===1,1508);const r=z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return b.Dr();case"BYTES":{const a=(s=r.value)==null?void 0:s.bytesValue;if(typeof a=="string"){const l=dt.fromBase64String(a).toUint8Array();return l.reverse(),b.newValue({bytesValue:dt.fromUint8Array(l).toBase64()})}return b.newValue({bytesValue:new Uint8Array(a).reverse()})}case"STRING":{const a=(i=r.value)==null?void 0:i.stringValue,l=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(a),u=Array.from(l,f=>f.segment).reverse();return b.newValue({stringValue:u.join("")})}default:return b.vr()}}}class Gp{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Wp{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Kp{constructor(e){this.expr=e}evaluate(e,t){Y(this.expr.params.length===1,19400);const r=z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return b.Dr();case"STRING":{const s=function(a){let l=0;for(let u=0;u<a.length;u++){const f=a.codePointAt(u);if(f===void 0)return;if(f<=65535)if(f>=55296&&f<=57343)if(f<=56319){const m=a.codePointAt(u+1);m!==void 0&&m>=56320&&m<=57343?(l+=1,u++):l+=1}else l+=1;else l+=1;else{if(!(f<=1114111))return;l+=1,u++}}return l}(r.value.stringValue);return s===void 0?b.vr():b.newValue({integerValue:s})}default:return b.vr()}}}class Yp{constructor(e){this.expr=e}evaluate(e,t){var s,i;Y(this.expr.params.length===1,8486);const r=z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const a=(s=r.value)==null?void 0:s.bytesValue;return typeof a=="string"?b.newValue({integerValue:dt.fromBase64String(a).toUint8Array().length}):b.newValue({integerValue:new Uint8Array(a).length})}case"STRING":{const a=function(u){let f=0;for(let m=0;m<u.length;m++){const _=u.codePointAt(m);if(_===void 0)return;if(_>=55296&&_<=57343){if(!(_<=56319))return;{const S=u.codePointAt(m+1);if(S===void 0||!(S>=56320&&S<=57343))return;f+=4,m++}}else if(_<=127)f+=1;else if(_<=2047)f+=2;else if(_<=65535)f+=3;else{if(!(_<=1114111))return;f+=4,m++}}return f}((i=r.value)==null?void 0:i.stringValue);return a===void 0?b.vr():b.newValue({integerValue:a})}case"NULL":return b.Dr();default:return b.vr()}}}class hr{constructor(e){this.expr=e}evaluate(e,t){var a,l;Y(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return b.vr()}const i=z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return b.vr()}return r?b.Dr():this.kr((a=s.value)==null?void 0:a.stringValue,(l=i.value)==null?void 0:l.stringValue)}}class Qp extends hr{kr(e,t){try{const r=function(a){let l="";for(let u=0;u<a.length;u++){const f=a.charAt(u);switch(f){case"_":l+=".";break;case"%":l+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":l+="\\"+f;break;default:l+=f}}return"^"+l+"$"}(t),s=Xr.compile(r);return b.newValue({booleanValue:s.matches(e)})}catch(r){return Ln(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),b.vr()}}}class Xp extends hr{kr(e,t){try{const r=Xr.compile(t);return b.newValue({booleanValue:r.matcher(e).find()})}catch{return Ln(`Invalid regex pattern found in regex_contains: ${t}, returning error`),b.vr()}}}class Jp extends hr{kr(e,t){try{return b.newValue({booleanValue:Xr.compile(t).matches(e)})}catch{return Ln(`Invalid regex pattern found in regex_match: ${t}, returning error`),b.vr()}}}class Zp extends hr{kr(e,t){return b.newValue({booleanValue:e.includes(t)})}}class em extends hr{kr(e,t){return b.newValue({booleanValue:e.startsWith(t)})}}class tm extends hr{kr(e,t){return b.newValue({booleanValue:e.endsWith(t)})}}class nm{constructor(e){this.expr=e}evaluate(e,t){var s,i;Y(this.expr.params.length===1,29079);const r=z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return b.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return b.Dr();default:return b.vr()}}}class rm{constructor(e){this.expr=e}evaluate(e,t){var s,i;Y(this.expr.params.length===1,60487);const r=z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return b.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return b.Dr();default:return b.vr()}}}class sm{constructor(e){this.expr=e}evaluate(e,t){var s,i;Y(this.expr.params.length===1,28544);const r=z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return b.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return b.Dr();default:return b.vr()}}}class im{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(a=>z(a).evaluate(e,t));let s="",i=!1;for(const a of r)switch(a.type){case"STRING":s+=a.value.stringValue;break;case"NULL":i=!0;break;default:return b.vr()}return i?b.Dr():b.newValue({stringValue:s})}}class om{constructor(e){this.expr=e}evaluate(e,t){var a,l,u,f;Y(this.expr.params.length===2,4483);const r=z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return b.Sr();case"MAP":break;default:return b.vr()}const s=z(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return b.vr();const i=(f=(l=(a=r.value)==null?void 0:a.mapValue)==null?void 0:l.fields)==null?void 0:f[(u=s.value)==null?void 0:u.stringValue];return i===void 0?b.Sr():b.newValue(i)}}class Va{constructor(e){this.expr=e}evaluate(e,t){var f,m;Y(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return b.vr()}const i=z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return b.vr()}if(r)return b.Dr();const a=jo(s.value),l=jo(i.value);if(a===void 0||l===void 0||((f=a.values)==null?void 0:f.length)!==((m=l.values)==null?void 0:m.length))return b.vr();const u=this.qr(a,l);return u===void 0||isNaN(u)?b.vr():b.newValue({doubleValue:u})}}class am extends Va{qr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return;let i=0,a=0,l=0;for(let f=0;f<r.length;f++){if(!pn(r[f])||!pn(s[f]))return;const m=$e(r[f]),_=$e(s[f]);i+=m*_,a+=m*m,l+=_*_}const u=Math.sqrt(a)*Math.sqrt(l);if(u!==0)return 1-Math.max(-1,Math.min(1,i/u))}}class lm extends Va{qr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!pn(r[a])||!pn(s[a]))return;i+=$e(r[a])*$e(s[a])}return i}}class cm extends Va{qr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!pn(r[a])||!pn(s[a]))return;const l=$e(r[a]),u=$e(s[a]);i+=Math.pow(l-u,2)}return Math.sqrt(i)}}class um{constructor(e){this.expr=e}evaluate(e,t){var s;Y(this.expr.params.length===1,39044);const r=z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const i=jo(r.value);return b.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return b.Dr();default:return b.vr()}}}const os=BigInt(-62135596800),as=BigInt(253402300799),yi=BigInt(1e3),un=BigInt(1e6),hm=os*yi,dm=as*yi+BigInt(999),fm=os*un,pm=as*un+BigInt(999999);function Da(n){return n>=fm&&n<=pm}function uh(n){return n>=os&&n<=as}function ls(n,e){const t=BigInt(n);return!(t<os||t>as)&&!(e<0||e>=1e9)&&(t!==os||e===0)&&!(t===as&&e>999999999)}function hh(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function La(n){return BigInt(n.seconds)*un+BigInt(Math.trunc(n.nanoseconds/1e3))}class Ma{constructor(e){this.expr=e}evaluate(e,t){Y(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return b.Dr();default:return b.vr()}}}class mm extends Ma{toTimestamp(e){if(!Da(e))return b.vr();let t=Number(e/un),r=Number(e%un*BigInt(1e3));const s=hh(t,r);return t=s.seconds,r=s.nanos,ls(t,r)?b.newValue({timestampValue:{seconds:t,nanos:r}}):b.vr()}}class gm extends Ma{toTimestamp(e){if(!function(a){return a>=hm&&a<=dm}(e))return b.vr();let t=Number(e/yi),r=Number(e%yi*BigInt(1e6));const s=hh(t,r);return t=s.seconds,r=s.nanos,ls(t,r)?b.newValue({timestampValue:{seconds:t,nanos:r}}):b.vr()}}class wm extends Ma{toTimestamp(e){if(!uh(e))return b.vr();const t=Number(e);return b.newValue({timestampValue:{seconds:t,nanos:0}})}}class Ba{constructor(e){this.expr=e}evaluate(e,t){Y(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return b.Dr();default:return b.vr()}const s=ba(r.value.timestampValue);return ls(s.seconds,s.nanoseconds)?this.$r(s):b.vr()}}class _m extends Ba{$r(e){const t=La(e);return Da(t)?b.newValue({integerValue:`${t.toString()}`}):b.vr()}}class ym extends Ba{$r(e){const t=La(e),r=t/BigInt(1e3),s=t%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?b.newValue({integerValue:r.toString()}):b.newValue({integerValue:(r-BigInt(1)).toString()})}}class Em extends Ba{$r(e){const t=BigInt(e.seconds);return uh(t)?b.newValue({integerValue:t.toString()}):b.vr()}}class dh{constructor(e){this.expr=e}evaluate(e,t){Y(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return b.vr()}const i=z(this.expr.params[1]).evaluate(e,t);let a;switch(i.type){case"STRING":if(a=function(re){switch(re){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),a===void 0)return b.vr();break;case"NULL":r=!0;break;default:return b.vr()}const l=z(this.expr.params[2]).evaluate(e,t);switch(l.type){case"INT":break;case"NULL":r=!0;break;default:return b.vr()}if(r)return b.Dr();const u=BigInt(l.value.integerValue);let f;try{switch(a){case"microsecond":f=u;break;case"millisecond":f=u*BigInt(1e3);break;case"second":f=u*BigInt(1e6);break;case"minute":f=u*BigInt(6e7);break;case"hour":f=u*BigInt(36e8);break;case"day":f=u*BigInt(864e8);break;default:return b.vr()}if(a!=="microsecond"&&u!==BigInt(0)&&f/u!==BigInt(this.Kr(a)))return b.vr()}catch(H){return Ln(`Error during timestamp arithmetic: ${H}`),b.vr()}const m=ba(s.value.timestampValue);if(!ls(m.seconds,m.nanoseconds))return b.vr();const _=La(m),S=this.Wr(_,f);if(!Da(S))return b.vr();const O=Number(S/un),D=S%un,U=Number((D<0?D+un:D)*BigInt(1e3)),L=D<0?O-1:O;return ls(L,U)?b.newValue({timestampValue:{seconds:L,nanos:U}}):b.vr()}Kr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class bm extends dh{Wr(e,t){return e+t}}class vm extends dh{Wr(e,t){return e-t}}function cs(n){if((n=lh(n))instanceof ms)return`fld(${n.fieldName})`;if(n instanceof cr)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof ct?`ref(${t.path})`:t instanceof ut?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(n.value)})`;if(n instanceof k)return`fn(${n.name},[${n.params.map(cs).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.Rr.map(cs).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function Am(n){if(n instanceof ih)return`${n._name}(${js(n.fields)})`;if(n instanceof oh){let e=`${n._name}(${js(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${js(n.groups)})`),e}if(n instanceof ah)return`${n._name}(${js(n.groups)})`;if(n instanceof Fi)return`${n._name}(${n.Vr})`;if(n instanceof Ui)return`${n._name}(${n.collectionId})`;if(n instanceof xa)return`${n._name}()`;if(n instanceof Ra)return`${n._name}(${n.dr.sort()})`;if(n instanceof Sa)return`${n._name}(${cs(n.condition)})`;if(n instanceof _i)return`${n._name}(${n.limit})`;if(n instanceof Pa)return`${n._name}(${function(t){return t.map(r=>`${cs(r.expr)}${r.direction}`).join(",")}(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function js(n){return`${Array.from(n.entries()).sort().map(([e,t])=>`${e}=${cs(t)}`).join(",")}`}function hn(n){return n.stages.map(e=>Am(e)).join("|")}function fh(n,e){return hn(n)===hn(e)}function Nt(n){return n instanceof tt}function wu(n){return Nt(n)?hn(n):Zs(n)}function ph(n){return Nt(n)?hn(n):function(t){return`${H1(Sn(t))}|lt:${t.limitType}`}(n)}function mh(n,e){return n instanceof tt&&e instanceof tt?fh(n,e):!(n instanceof tt&&!(e instanceof tt)||!(n instanceof tt)&&e instanceof tt)&&p6(n,e)}function gh(n){return l6(n)?hn(n):H1(n)}function wh(n,e){return n instanceof tt&&e instanceof tt?fh(n,e):!(n instanceof tt&&!(e instanceof tt)||!(n instanceof tt)&&e instanceof tt)&&q1(n,e)}/**
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
 */class Tm{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Qf(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=jr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=jr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=G1();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=V1(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(Ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),et())}isEqual(e){return this.batchId===e.batchId&&er(this.mutations,e.mutations,(t,r)=>ru(t,r))&&er(this.baseMutations,e.baseMutations,(t,r)=>ru(t,r))}}/**
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
 */class Im{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Cm{constructor(e){this.zr=e}}function xm(n){const e=R6({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Yo(e,e.limit,"L"):e}/**
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
 */class Rm{constructor(){this.Hi=new Sm}addToCollectionParentIndex(e,t){return this.Hi.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Hi.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(fn.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(fn.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class Sm{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ue(Ce.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ue(Ce.comparator)).toArray()}}/**
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
 */class _n{constructor(e){this.Ds=e}next(){return this.Ds+=2,this.Ds}static xs(){return new _n(0)}static Cs(){return new _n(-1)}}// Copyright 2024 Google LLC* @license
function Pm(n,e){var r;let t=e;for(const s of n.stages)t=km({serializer:n.serializer,serverTimestampBehavior:(r=n.listenOptions)==null?void 0:r.serverTimestampBehavior},s,t);return t}function Fa(n,e){return Pm(n,[e]).length>0}function km(n,e,t){if(e instanceof Fi)return function(s,i,a){return a.filter(l=>l.isFoundDocument()&&`/${l.key.getCollectionPath().canonicalString()}`===i.Vr)}(0,e,t);if(e instanceof Sa)return function(s,i,a){return a.filter(l=>{const u=Wr(z(i.condition).evaluate(s,l));return u!==void 0&&_t(u,st)})}(n,e,t);if(e instanceof Ui)return function(s,i,a){return a.filter(l=>l.isFoundDocument()&&l.key.getCollectionPath().lastSegment()===i.collectionId)}(0,e,t);if(e instanceof xa)return function(s,i,a){return a.filter(l=>l.isFoundDocument())}(0,0,t);if(e instanceof Ra)return function(s,i,a){return a.filter(l=>l.isFoundDocument()&&i.mr.has(l.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof _i)return function(s,i,a){return a.slice(0,i.limit)}(0,e,t);if(e instanceof Pa)return function(s,i,a){const l=i.orderings.map(u=>({ks:z(u.expr),direction:u.direction}));return[...a].sort((u,f)=>{for(const{ks:m,direction:_}of l){const S=Wr(m.evaluate(s,u)),O=Wr(m.evaluate(s,f)),D=it(S??nr,O??nr);if(D!==0)return _==="ascending"?D:-D}return 0})}(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function Nm(n){const e=function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof Pa)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(n);return(t,r)=>{for(const s of e){const i=Wr(z(s.expr).evaluate({serializer:n.serializer},t)),a=Wr(z(s.expr).evaluate({serializer:n.serializer},r)),l=it(i||nr,a||nr);if(l!==0)return s.direction==="ascending"?l:-l}return 0}}/**
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
 */class Om{constructor(){this.changes=new lr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Vm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Dm{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&jr(r.mutation,s,rn.empty(),be.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,et()).next(()=>r))}getLocalViewOfDocuments(e,t,r=et()){const s=nn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Or();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=nn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,et()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=ei();const a=Gr(),l=function(){return Gr()}();return t.forEach((u,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof Mi)?i=i.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),jr(m.mutation,f,m.mutation.getFieldMask(),be.now())):a.set(f.key,rn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((f,m)=>a.set(f,m)),t.forEach((f,m)=>l.set(f,new Vm(m,a.get(f)??null))),l))}recalculateAndSaveOverlays(e,t){const r=Gr();let s=new ht((a,l)=>a-l),i=et();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const f=t.get(u);if(f===null)return;let m=r.get(u)||rn.empty();m=l.applyToLocalView(f,m),r.set(u,m);const _=(s.get(l.batchId)||et()).add(u);s=s.insert(l.batchId,_)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),f=u.key,m=u.value,_=G1();m.forEach(S=>{if(!i.has(S)){const O=V1(t.get(S),r.get(S));O!==null&&_.set(S,O),i=i.add(S)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,_))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return Nt(t)?this.getDocumentsMatchingPipeline(e,t,r,s):h6(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):d6(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):V.resolve(nn());let l=Jr,u=i;return a.next(f=>V.forEach(f,(m,_)=>(l<_.largestBatchId&&(l=_.largestBatchId),i.get(m)?V.resolve():this.remoteDocumentCache.getEntry(e,m).next(S=>{u=u.insert(m,S)}))).next(()=>this.populateOverlays(e,f,i)).next(()=>this.computeViews(e,u,f,et())).next(m=>({batchId:l,changes:_6(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ee(t)).next(r=>{let s=Or();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Or();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,u=>{const f=function(_,S){return new Bi(S,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next(m=>{m.forEach((_,S)=>{a=a.insert(_,S)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>this.retrieveMatchingLocalDocuments(i,a,l=>Ea(t,l)))}getDocumentsMatchingPipeline(e,t,r,s){if(cn(t)==="collection_group"){const i=Na(t);let a=Or();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,u=>{const f=function(_,S){const O=_.stages.map(D=>D instanceof Ui?new Fi(S.canonicalString(),{}):D);return new tt(_.serializer,O)}(t,u.child(i));return this.getDocumentsMatchingPipeline(e,f,r,s).next(m=>{m.forEach((_,S)=>{a=a.insert(_,S)})})}).next(()=>a))}{let i;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next(a=>{switch(i=a,cn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s);case"documents":let l=et();for(const u of ea(t))l=l.add(ee.fromPath(u));return this.remoteDocumentCache.getEntries(e,l);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new W("invalid-argument",`Invalid pipeline source to execute offline: ${hn(t)}`)}}).next(a=>this.retrieveMatchingLocalDocuments(i,a,l=>Fa(t,l)))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach((i,a)=>{const l=a.getKey();t.get(l)===null&&(t=t.insert(l,vt.newInvalidDocument(l)))});let s=Or();return t.forEach((i,a)=>{const l=e.get(i);l!==void 0&&jr(l.mutation,a,rn.empty(),be.now()),r(a)&&(s=s.insert(i,a))}),s}getOverlaysForPipeline(e,t,r){switch(cn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,Ce.fromString($i(t)),r);case"collection_group":throw new W("invalid-argument",`Unexpected collection group pipeline: ${hn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,ea(t).map(s=>ee.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new W("invalid-argument",`Failed to get overlays for pipeline: ${hn(t)}`)}}}/**
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
 */class Lm{constructor(e){this.serializer=e,this.Hs=new Map,this.Js=new Map}getBundleMetadata(e,t){return V.resolve(this.Hs.get(t))}saveBundleMetadata(e,t){return this.Hs.set(t.id,function(s){return{id:s.id,version:s.version,createTime:uu(s.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Js.get(t))}saveNamedQuery(e,t){return this.Js.set(t.name,function(s){return{name:s.name,query:xm(s.bundledQuery),readTime:uu(s.readTime)}}(t)),V.resolve()}}/**
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
 */class Mm{constructor(){this.overlays=new ht(ee.comparator),this.Ys=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=nn();return V.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}getAllOverlays(e,t){const r=nn();return this.overlays.forEach((s,i)=>{i.largestBatchId>t&&r.set(s,i)}),V.resolve(r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Hr(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ys.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ys.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=nn(),i=t.length+1,a=new ee(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,f=u.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ht((f,m)=>f-m);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let m=i.get(f.largestBatchId);m===null&&(m=nn(),i=i.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const l=nn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((f,m)=>l.set(f,m)),!(l.size()>=s)););return V.resolve(l)}Hr(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ys.get(s.largestBatchId).delete(r.key);this.Ys.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Im(t,r));let i=this.Ys.get(t);i===void 0&&(i=et(),this.Ys.set(t,i)),this.Ys.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Bm{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
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
 */class Ua{constructor(){this.Zs=new Ue(Oe.Xs),this.e_=new Ue(Oe.t_)}isEmpty(){return this.Zs.isEmpty()}addReference(e,t){const r=new Oe(e,t);this.Zs=this.Zs.add(r),this.e_=this.e_.add(r)}n_(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.r_(new Oe(e,t))}i_(e,t){e.forEach(r=>this.removeReference(r,t))}s_(e){const t=new ee(new Ce([])),r=new Oe(t,e),s=new Oe(t,e+1),i=[];return this.e_.forEachInRange([r,s],a=>{this.r_(a),i.push(a.key)}),i}__(){this.Zs.forEach(e=>this.r_(e))}r_(e){this.Zs=this.Zs.delete(e),this.e_=this.e_.delete(e)}o_(e){const t=new ee(new Ce([])),r=new Oe(t,e),s=new Oe(t,e+1);let i=et();return this.e_.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Oe(e,0),r=this.Zs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,t){this.key=e,this.a_=t}static Xs(e,t){return ee.comparator(e.key,t.key)||ge(e.a_,t.a_)}static t_(e,t){return ge(e.a_,t.a_)||ee.comparator(e.key,t.key)}}/**
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
 */class Fm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gs=1,this.u_=new Ue(Oe.Xs)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.gs;this.gs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Tm(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.u_=this.u_.add(new Oe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.c_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.l_(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Mf:this.gs-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Oe(t,0),s=new Oe(t,Number.POSITIVE_INFINITY),i=[];return this.u_.forEachInRange([r,s],a=>{const l=this.c_(a.a_);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ue(ge);return t.forEach(s=>{const i=new Oe(s,0),a=new Oe(s,Number.POSITIVE_INFINITY);this.u_.forEachInRange([i,a],l=>{r=r.add(l.a_)})}),V.resolve(this.E_(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;ee.isDocumentKey(i)||(i=i.child(""));const a=new Oe(new ee(i),0);let l=new Ue(ge);return this.u_.forEachWhile(u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(u.a_)),!0)},a),V.resolve(this.E_(l))}E_(e){const t=[];return e.forEach(r=>{const s=this.c_(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Y(this.h_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.u_;return V.forEach(t.mutations,s=>{const i=new Oe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.u_=r})}bs(e){}containsKey(e,t){const r=new Oe(t,0),s=this.u_.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}h_(e,t){return this.l_(e)}l_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}c_(e){const t=this.l_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Um{constructor(e){this.T_=e,this.docs=function(){return new ht(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.T_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(t))}getEntries(e,t){let r=ei();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))}),V.resolve(r)}getAllEntries(e){let t=ei();return this.docs.forEach((r,s)=>{t=t.insert(r,s.document)}),V.resolve(t)}getDocumentsMatchingQuery(e,t,r,s){let i,a;Nt(t)?(i=Ce.fromString($i(t)),a=m=>Fa(t,m)):(i=t.path,a=m=>Ea(t,m));let l=ei();const u=new ee(i.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(u);for(;f.hasNext();){const{key:m,value:{document:_}}=f.getNext();if(!i.isPrefixOf(m.path))break;m.path.length>i.length+1||Vf(Of(_),r)<=0||(s.has(_.key)||a(_))&&(l=l.insert(_.key,_.mutableCopy()))}return V.resolve(l)}getAllFromCollectionGroup(e,t,r,s){te(9500)}P_(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new $m(this)}getSize(e){return V.resolve(this.size)}}class $m extends Om{constructor(e){super(),this.zs=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.zs.addEntry(e,s)):this.zs.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.zs.getEntry(e,t)}getAllFromCache(e,t){return this.zs.getEntries(e,t)}}/**
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
 */class Hm{constructor(e){this.persistence=e,this.R_=new lr(t=>gh(t),wh),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.I_=0,this.A_=new Ua,this.targetCount=0,this.V_=_n.xs()}forEachTarget(e,t){return this.R_.forEach((r,s)=>t(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.I_)}allocateTargetId(e){return this.highestTargetId=this.V_.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.I_&&(this.I_=t),V.resolve()}Ms(e){this.R_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.V_=new _n(t),this.highestTargetId=t),e.sequenceNumber>this.I_&&(this.I_=e.sequenceNumber)}addTargetData(e,t){return this.Ms(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Ms(t),V.resolve()}removeTargetData(e,t){return this.R_.delete(t.target),this.A_.s_(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.R_.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.R_.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.R_.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.A_.n_(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.A_.i_(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.A_.s_(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.A_.o_(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.A_.containsKey(t))}}/**
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
 */class qm{constructor(e,t){this.d_={},this.overlays={},this.f_=new A1(0),this.m_=!1,this.m_=!0,this.p_=new Bm,this.referenceDelegate=e(this),this.g_=new Hm(this),this.indexManager=new Rm,this.remoteDocumentCache=function(s){return new Um(s)}(r=>this.referenceDelegate.y_(r)),this.serializer=new Cm(t),this.w_=new Lm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.m_=!1,Promise.resolve()}get started(){return this.m_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Mm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.d_[e.toKey()];return r||(r=new Fm(t,this.referenceDelegate),this.d_[e.toKey()]=r),r}getGlobalsCache(){return this.p_}getTargetCache(){return this.g_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.w_}runTransaction(e,t,r){J("MemoryPersistence","Starting transaction:",e);const s=new jm(this.f_.next());return this.referenceDelegate.b_(),r(s).next(i=>this.referenceDelegate.v_(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}S_(e,t){return V.or(Object.values(this.d_).map(r=>()=>r.containsKey(e,t)))}}class jm extends Df{constructor(e){super(),this.currentSequenceNumber=e}}class $a{constructor(e){this.persistence=e,this.D_=new Ua,this.x_=null}static C_(e){return new $a(e)}get F_(){if(this.x_)return this.x_;throw te(60996)}addReference(e,t,r){return this.D_.addReference(r,t),this.F_.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.D_.removeReference(r,t),this.F_.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.F_.add(t.toString()),V.resolve()}removeTarget(e,t){this.D_.s_(t.targetId).forEach(s=>this.F_.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.F_.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}b_(){this.x_=new Set}v_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.F_,r=>{const s=ee.fromPath(r);return this.O_(e,s).next(i=>{i||t.removeEntry(s,Ee.min())})}).next(()=>(this.x_=null,t.apply(e)))}updateLimboDocument(e,t){return this.O_(e,t).next(r=>{r?this.F_.delete(t.toString()):this.F_.add(t.toString())})}y_(e){return 0}O_(e,t){return V.or([()=>V.resolve(this.D_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.S_(e,t)])}}/**
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
 */class Ha{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.wo=r,this.bo=s}static vo(e,t){let r=et(),s=et();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ha(e,t.fromCache,r,s)}}/**
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
 */function zm(n,e){return ee.comparator(n.key,e.key)}/**
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
 */class Gm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Wm{constructor(){this.So=!1,this.Do=!1,this.xo=100,this.Co=function(){return dd()?8:Lf(Ct())>0?6:4}()}initialize(e,t){this.Fo=e,this.indexManager=t,this.So=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Oo(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Mo(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Gm;return this.No(e,t,a).next(l=>{if(i.result=l,this.Do)return this.Lo(e,t,a,l.size)})}).next(()=>i.result)}Lo(e,t,r,s){return Nt(t)?V.resolve():r.documentReadCount<this.xo?(Nr()<=se.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Zs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.xo,"documents"),V.resolve()):(Nr()<=se.DEBUG&&J("QueryEngine","Query:",Zs(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Co*s?(Nr()<=se.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Zs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Sn(t))):V.resolve())}Oo(e,t){if(Nt(t))return V.resolve(null);let r=t;if(cu(r))return V.resolve(null);let s=Sn(r);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(r.limit!==null&&i===1&&(r=Yo(r,null,"F"),s=Sn(r)),this.indexManager.getDocumentsMatchingTarget(e,s).next(a=>{const l=et(...a);return this.Fo.getDocuments(e,l).next(u=>this.indexManager.getMinOffset(e,s).next(f=>{const m=this.Bo(r,u);return this.Uo(r,m,l,f.readTime)?this.Oo(e,Yo(r,null,"F")):this.ko(e,m,r,f)}))})))}Mo(e,t,r,s){return(Nt(t)?function(a){for(const l of a.stages){if(l instanceof _i||l instanceof gu)return!1;if(l instanceof Sa){if(l.condition instanceof nh&&l.condition._expr.name==="exists"&&l.condition._expr.params[0]instanceof ms&&l.condition._expr.params[0].fieldName===tr)continue;return!1}}return!0}(t):cu(t))||s.isEqual(Ee.min())?V.resolve(null):this.Fo.getDocuments(e,r).next(i=>{const a=this.Bo(t,i);return this.Uo(t,a,r,s)?V.resolve(null):(Nr()<=se.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),wu(t)),this.ko(e,a,t,Nf(s,Jr)).next(l=>l))})}Bo(e,t){let r,s;return Nt(e)?(r=new Ue(zm),s=i=>Fa(e,i)):(r=new Ue(j1(e)),s=i=>Ea(e,i)),t.forEach((i,a)=>{s(a)&&(r=r.add(a))}),r}Uo(e,t,r,s){if(Nt(e))return function(l){return l.stages.some(u=>u instanceof _i||u instanceof gu)}(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}No(e,t,r){return Nr()<=se.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",wu(t)),this.Fo.getDocumentsMatchingQuery(e,t,fn.min(),r)}ko(e,t,r,s){return this.Fo.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Km="LocalStore";class Ym{constructor(e,t,r,s){this.persistence=e,this.qo=t,this.serializer=s,this.$o=new ht(ge),this.Ko=new lr(i=>gh(i),wh),this.Wo=new Map,this.Qo=e.getRemoteDocumentCache(),this.g_=e.getTargetCache(),this.w_=e.getBundleCache(),this.Go(r)}Go(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Dm(this.Qo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Qo.setIndexManager(this.indexManager),this.qo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.$o))}}function Qm(n,e,t,r){return new Ym(n,e,t,r)}async function Xm(n,e){const t=rt(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Go(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=et();for(const f of s){a.push(f.batchId);for(const m of f.mutations)u=u.add(m.key)}for(const f of i){l.push(f.batchId);for(const m of f.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next(f=>({zo:f,removedBatchIds:a,addedBatchIds:l}))})})}class _u{constructor(){this.activeTargetIds=b6()}na(e){this.activeTargetIds=this.activeTargetIds.add(e)}ra(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ta(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jm{constructor(){this.Ua=new _u,this.ka={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Ua.na(e),this.ka[e]||"not-current"}updateQueryState(e,t,r){this.ka[e]=t}removeLocalQueryTarget(e){this.Ua.ra(e)}isLocalQueryTarget(e){return this.Ua.activeTargetIds.has(e)}clearQueryState(e){delete this.ka[e]}getAllActiveQueryTargets(){return this.Ua.activeTargetIds}isActiveQueryTarget(e){return this.Ua.activeTargetIds.has(e)}start(){return this.Ua=new _u,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function Po(){return typeof document<"u"?document:null}/**
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
 */class Zm{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.qa=0,this.$a=null,this.Ka=!0}Wa(){this.qa===0&&(this.Qa("Unknown"),this.$a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.$a=null,this.Ga("Backend didn't respond within 10 seconds."),this.Qa("Offline"),Promise.resolve())))}za(e){this.state==="Online"?this.Qa("Unknown"):(this.qa++,this.qa>=1&&(this.ja(),this.Ga(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Qa("Offline")))}set(e){this.ja(),this.qa=0,e==="Online"&&(this.Ka=!1),this.Qa(e)}Qa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ga(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Ka?(Ni(t),this.Ka=!1):J("OnlineStateTracker",t)}ja(){this.$a!==null&&(this.$a.cancel(),this.$a=null)}}/**
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
 */const _h="RemoteStore";class e7{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ha=[],this.Ja=new Map,this.Ya=new Map,this.Za=new Map,this.Xa=new _n(1e3),this.eu=new _n(1001),this.tu=new Set,this.nu=[],this.ru=i,this.ru.bt(a=>{r.enqueueAndForget(async()=>{Eh(this)&&(J(_h,"Restarting streams for network reachability change."),await async function(u){const f=rt(u);f.tu.add(4),await qa(f),f.iu.set("Unknown"),f.tu.delete(4),await yh(f)}(this))})}),this.iu=new Zm(r,s)}}async function yh(n){if(Eh(n))for(const e of n.nu)await e(!0)}async function qa(n){for(const e of n.nu)await e(!1)}function Eh(n){return rt(n).tu.size===0}async function t7(n,e){const t=rt(n);e?(t.tu.delete(2),await yh(t)):e||(t.tu.add(2),await qa(t),t.iu.set("Unknown"))}/**
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
 */class ja{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new ja(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
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
 */class n7{constructor(){this.queries=yu(),this.onlineState="Unknown",this.Pu=new Set}terminate(){(function(t,r){const s=rt(t),i=s.queries;s.queries=yu(),i.forEach((a,l)=>{for(const u of l.Eu)u.onError(r)})})(this,new W($.ABORTED,"Firestore shutting down"))}}function yu(){return new lr(n=>ph(n),mh)}function r7(n){n.Pu.forEach(e=>{e.next()})}var Eu;(function(n){n.Default="default",n.Cache="cache"})(Eu||(Eu={}));/**
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
 */const s7="SyncEngine";class i7{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Xu={},this.ec=new lr(l=>ph(l),mh),this.tc=new Map,this.nc=new Set,this.rc=new ht(ee.comparator),this.sc=new Map,this._c=new Ua,this.oc={},this.ac=new Map,this.uc=_n.Cs(),this.onlineState="Unknown",this.cc=void 0}get isPrimaryClient(){return this.cc===!0}}function bu(n,e,t){const r=rt(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ec.forEach((i,a)=>{const l=a.view.Ru(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=rt(a);u.onlineState=l;let f=!1;u.queries.forEach((m,_)=>{for(const S of _.Eu)S.Ru(l)&&(f=!0)}),f&&r7(u)}(r.eventManager,e),s.length&&r.Xu.zn(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function o7(n,e,t){const r=rt(n),s=[],i=[],a=[];r.ec.isEmpty()||(r.ec.forEach((l,u)=>{a.push(r.lc(u,e,t).then(f=>{var m;if((f||t)&&r.isPrimaryClient){const _=f?!f.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,_?"current":"not-current")}if(f){s.push(f);const _=Ha.vo(u.targetId,f);i.push(_)}}))}),await Promise.all(a),r.Xu.zn(s),await async function(u,f){const m=rt(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>V.forEach(f,S=>V.forEach(S.wo,O=>m.persistence.referenceDelegate.addReference(_,S.targetId,O)).next(()=>V.forEach(S.bo,O=>m.persistence.referenceDelegate.removeReference(_,S.targetId,O)))))}catch(_){if(!v1(_))throw _;J(Km,"Failed to update sequence numbers: "+_)}for(const _ of f){const S=_.targetId;if(!_.fromCache){const O=m.$o.get(S),D=O.snapshotVersion,U=O.withLastLimboFreeSnapshotVersion(D);m.$o=m.$o.insert(S,U)}}}(r.localStore,i))}async function a7(n,e){const t=rt(n);if(!t.currentUser.isEqual(e)){J(s7,"User change. New user:",e.toKey());const r=await Xm(t.localStore,e);t.currentUser=e,function(i,a){i.ac.forEach(l=>{l.forEach(u=>{u.reject(new W($.CANCELLED,a))})}),i.ac.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await o7(t,r.zo)}}class vu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=X1(e.databaseInfo.databaseId),this.sharedClientState=this.Rc(e),this.persistence=this.Ic(e),await this.persistence.start(),this.localStore=this.Ac(e),this.gcScheduler=this.Vc(e,this.localStore),this.indexBackfillerScheduler=this.dc(e,this.localStore)}Vc(e,t){return null}dc(e,t){return null}Ac(e){return Qm(this.persistence,new Wm,e.initialUser,this.serializer)}Ic(e){return new qm($a.C_,this.serializer)}Rc(e){return new Jm}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vu.provider={build:()=>new vu};class Au{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=a7.bind(null,this.syncEngine),await t7(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new n7}()}createDatastore(e){const t=X1(e.databaseInfo.databaseId),r=L6(e.databaseInfo);return U6(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new e7(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>bu(this.syncEngine,t,0),function(){return du.C()?new du:new N6}())}createSyncEngine(e,t){return function(s,i,a,l,u,f,m){const _=new i7(s,i,a,l,u,f);return m&&(_.cc=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=rt(s);J(_h,"RemoteStore shutting down."),i.tu.add(5),await qa(i),i.ru.shutdown(),i.iu.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Au.provider={build:()=>new Au};/**
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
 *//**
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
 */const Tu="AsyncQueue";class Iu{constructor(e=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Wc=null,this.Qc=!1,this.Gc=!1,this.zc=[],this.xn=new M6(this,"async_queue_retry"),this.jc=()=>{const r=Po();r&&J(Tu,"Visibility state changed to "+r.visibilityState),this.xn.gn()},this.Hc=e;const t=Po();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.$c){this.$c=!0,this.Gc=e||!1;const t=Po();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Jc(),this.$c)return new Promise(()=>{});const t=new Hr;return this.Yc(()=>this.$c&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.qc.push(e),this.Zc()))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.xn.reset()}catch(e){if(!v1(e))throw e;J(Tu,"Operation failed with retryable error: "+e)}this.qc.length>0&&this.xn.mn(()=>this.Zc())}}Yc(e){const t=this.Hc.then(()=>(this.Qc=!0,e().catch(r=>{throw this.Wc=r,this.Qc=!1,Ni("INTERNAL UNHANDLED ERROR: ",Cu(r)),r}).then(r=>(this.Qc=!1,r))));return this.Hc=t,t}enqueueAfterDelay(e,t,r){this.Jc(),this.zc.indexOf(e)>-1&&(t=0);const s=ja.createAndSchedule(this,e,t,r,i=>this.Xc(i));return this.Kc.push(s),s}Jc(){this.Wc&&te(47125,{el:Cu(this.Wc)})}verifyOperationInProgress(){}async tl(){let e;do e=this.Hc,await e;while(e!==this.Hc)}nl(e){for(const t of this.Kc)if(t.timerId===e)return!0;return!1}rl(e){return this.tl().then(()=>{this.Kc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Kc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tl()})}il(e){this.zc.push(e)}Xc(e){const t=this.Kc.indexOf(e);this.Kc.splice(t,1)}}function Cu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class l7 extends j6{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Iu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Iu(e),this._firestoreClient=void 0,await e}}}/**
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
 * Copyright 2024 Google LLC
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
 */const xu="@firebase/firestore",Ru="4.16.0";/**
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
 */class bh{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new c7(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Ia("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class c7 extends bh{data(){return super.data()}}/**
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
 */class zs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jn extends bh{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ti(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ia("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Jn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Jn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Jn._jsonSchema={type:Se("string",Jn._jsonSchemaVersion),bundleSource:Se("string","DocumentSnapshot"),bundleName:Se("string"),bundle:Se("string")};class ti extends Jn{data(e={}){return super.data(e)}}class Kr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new zs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ti(this._firestore,this._userDataWriter,r.key,r,new zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new W($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{Nt(s._snapshot.query)?Nm(s._snapshot.query):j1(s.query._query);const u=new ti(s._firestore,s._userDataWriter,l.doc.key,l.doc,new zs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new ti(s._firestore,s._userDataWriter,l.doc.key,l.doc,new zs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:u7(l.type),doc:u,oldIndex:f,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Kr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function u7(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te(61501,{type:n})}}/**
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
 */Kr._jsonSchemaVersion="firestore/querySnapshot/1.0",Kr._jsonSchema={type:Se("string",Kr._jsonSchemaVersion),bundleSource:Se("string","QuerySnapshot"),bundleName:Se("string"),bundle:Se("string")};/**
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
 */(function(e,t=!0){yf(hs),Vn(new On("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new l7(new vf(r.getProvider("auth-internal")),new If(a,r.getProvider("app-check-internal")),qf(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Dt(xu,Ru,e),Dt(xu,Ru,"esm2020")})();var h7="firebase",d7="12.15.0";/**
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
 */Dt(h7,d7,"app");/**
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
 */const vh="firebasestorage.googleapis.com",f7="storageBucket",p7=2*60*1e3,m7=10*60*1e3;/**
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
 */class Ft extends zt{constructor(e,t,r=0){super(ko(e),`Firebase Storage: ${t} (${ko(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ft.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ko(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Mt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Mt||(Mt={}));function ko(n){return"storage/"+n}function g7(){const n="An unknown error occurred, please check the error payload for server response.";return new Ft(Mt.UNKNOWN,n)}function w7(){return new Ft(Mt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _7(){return new Ft(Mt.CANCELED,"User canceled the upload/download.")}function y7(n){return new Ft(Mt.INVALID_URL,"Invalid URL '"+n+"'.")}function E7(n){return new Ft(Mt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Su(n){return new Ft(Mt.INVALID_ARGUMENT,n)}function Ah(){return new Ft(Mt.APP_DELETED,"The Firebase app was deleted.")}function b7(n){return new Ft(Mt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class It{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=It.makeFromUrl(e,t)}catch{return new It(e,"")}if(r.path==="")return r;throw E7(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(ne){ne.path.charAt(ne.path.length-1)==="/"&&(ne.path_=ne.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function f(ne){ne.path_=decodeURIComponent(ne.path)}const m="v[A-Za-z0-9_]+",_=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",O=new RegExp(`^https?://${_}/${m}/b/${s}/o${S}`,"i"),D={bucket:1,path:3},U=t===vh?"(?:storage.googleapis.com|storage.cloud.google.com)":t,L="([^?#]*)",H=new RegExp(`^https?://${U}/${s}/${L}`,"i"),de=[{regex:l,indices:u,postModify:i},{regex:O,indices:D,postModify:f},{regex:H,indices:{bucket:1,path:2},postModify:f}];for(let ne=0;ne<de.length;ne++){const he=de[ne],we=he.regex.exec(e);if(we){const A=we[he.indices.bucket];let w=we[he.indices.path];w||(w=""),r=new It(A,w),he.postModify(r);break}}if(r==null)throw y7(e);return r}}class v7{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function A7(n,e,t){let r=1,s=null,i=null,a=!1,l=0;function u(){return l===2}let f=!1;function m(...L){f||(f=!0,e.apply(null,L))}function _(L){s=setTimeout(()=>{s=null,n(O,u())},L)}function S(){i&&clearTimeout(i)}function O(L,...H){if(f){S();return}if(L){S(),m.call(null,L,...H);return}if(u()||a){S(),m.call(null,L,...H);return}r<64&&(r*=2);let de;l===1?(l=2,de=0):de=(r+Math.random())*1e3,_(de)}let D=!1;function U(L){D||(D=!0,S(),!f&&(s!==null?(L||(l=2),clearTimeout(s),_(0)):L||(l=1)))}return _(0),i=setTimeout(()=>{a=!0,U(!0)},t),U}function T7(n){n(!1)}/**
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
 */function I7(n){return n!==void 0}function Pu(n,e,t,r){if(r<e)throw Su(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Su(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function C7(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Ei;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ei||(Ei={}));/**
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
 */function x7(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class R7{constructor(e,t,r,s,i,a,l,u,f,m,_,S=!0,O=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=u,this.timeout_=f,this.progressCallback_=m,this.connectionFactory_=_,this.retry=S,this.isUsingEmulator=O,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,U)=>{this.resolve_=D,this.reject_=U,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Gs(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=l=>{const u=l.loaded,f=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,f)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const l=i.getErrorCode()===Ei.NO_ERROR,u=i.getStatus();if(!l||x7(u,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===Ei.ABORT;r(!1,new Gs(!1,null,m));return}const f=this.successCodes_.indexOf(u)!==-1;r(!0,new Gs(f,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());I7(u)?i(u):i()}catch(u){a(u)}else if(l!==null){const u=g7();u.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,u)):a(u)}else if(s.canceled){const u=this.appDelete_?Ah():_7();a(u)}else{const u=w7();a(u)}};this.canceled_?t(!1,new Gs(!1,null,!0)):this.backoffId_=A7(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&T7(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Gs{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function S7(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function P7(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function k7(n,e){e&&(n["X-Firebase-GMPID"]=e)}function N7(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function O7(n,e,t,r,s,i,a=!0,l=!1){const u=C7(n.urlParams),f=n.url+u,m=Object.assign({},n.headers);return k7(m,e),S7(m,t),P7(m,i),N7(m,r),new R7(f,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,l)}/**
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
 */function V7(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function D7(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class bi{constructor(e,t){this._service=e,t instanceof It?this._location=t:this._location=It.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new bi(e,t)}get root(){const e=new It(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return D7(this._location.path)}get storage(){return this._service}get parent(){const e=V7(this._location.path);if(e===null)return null;const t=new It(this._location.bucket,e);return new bi(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw b7(e)}}/**
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
 */function ku(n,e){const t=e==null?void 0:e[f7];return t==null?null:It.makeFromBucketSpec(t,n)}class L7{constructor(e,t,r,s,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=vh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=p7,this._maxUploadRetryTime=m7,this._requests=new Set,s!=null?this._bucket=It.makeFromBucketSpec(s,this._host):this._bucket=ku(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=It.makeFromBucketSpec(this._url,e):this._bucket=ku(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Pu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Pu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(en(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new bi(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new v7(Ah());{const a=O7(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Nu="@firebase/storage",Ou="0.14.3";/**
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
 */const M7="storage";function B7(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new L7(t,r,s,e,hs)}function F7(){Vn(new On(M7,B7,"PUBLIC").setMultipleInstances(!0)),Dt(Nu,Ou,""),Dt(Nu,Ou,"esm2020")}F7();let Pn=!1;console.warn("Firebase não está configurado. Por favor, copie o arquivo '.env.example' para '.env' e preencha as suas credenciais.");async function U7(n,e){{if(n==="admin@lames.org"&&e==="admin123")return{user:{email:n},role:"admin"};if(n==="colab@lames.org"&&e==="colab123")return{user:{email:n},role:"colaborador"};throw new Error("Firebase não configurado. Use as credenciais de demonstração (admin@lames.org/admin123 ou colab@lames.org/colab123).")}}async function $7(n,e){throw new Error("O cadastro de novos usuários necessita do Firebase configurado.")}function H7(n){{const e=localStorage.getItem("demo_user"),t=localStorage.getItem("demo_role");return e&&t?n({email:e},t):n(null,null),()=>{}}}let Ws=null,Mr=null,ta=null,ni=null;const Th={};function za(n,e){Th[n]=e}function Gn(n){window.location.hash=n}async function Vu(){if(!Mr)return;let n=window.location.hash.slice(1)||"login";if(ta){if(n==="login"){Gn(ni==="admin"?"admin":"formulario");return}if(n==="admin"&&ni!=="admin"){Gn("formulario");return}}else if(n!=="login"){Gn("login");return}const e=Th[n];e?(Mr.innerHTML="",Ws&&typeof Ws.destroy=="function"&&Ws.destroy(),Ws=await e(Mr,ta,ni)):Mr.innerHTML='<div class="text-center p-20"><h1 class="text-2xl font-bold">Página não encontrada (404)</h1><a href="#login" class="text-blue-500 underline mt-4 inline-block">Voltar ao início</a></div>'}function q7(n){Mr=n,window.addEventListener("hashchange",Vu),H7((e,t)=>{ta=e,ni=t,Vu()})}/*!
* sweetalert2 v11.26.25
* Released under the MIT License.
*/function Ih(n,e,t){if(typeof n=="function"?n===e:n.has(e))return arguments.length<3?e:t;throw new TypeError("Private element is not present on this object")}function j7(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Du(n,e){return n.get(Ih(n,e))}function z7(n,e,t){j7(n,e),e.set(n,t)}function G7(n,e,t){return n.set(Ih(n,e),t),t}const W7=100,j={},K7=()=>{j.previousActiveElement instanceof HTMLElement?(j.previousActiveElement.focus(),j.previousActiveElement=null):document.body&&document.body.focus()},Y7=n=>new Promise(e=>{if(!n)return e();const t=window.scrollX,r=window.scrollY;j.restoreFocusTimeout=setTimeout(()=>{K7(),e()},W7),window.scrollTo(t,r)}),Ch="swal2-",Q7=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],P=Q7.reduce((n,e)=>(n[e]=Ch+e,n),{}),X7=["success","warning","info","question","error"],vi=X7.reduce((n,e)=>(n[e]=Ch+e,n),{}),xh="SweetAlert2:",Ga=n=>n.charAt(0).toUpperCase()+n.slice(1),Xe=n=>{console.warn(`${xh} ${typeof n=="object"?n.join(" "):n}`)},Un=n=>{console.error(`${xh} ${n}`)},Lu=[],J7=n=>{Lu.includes(n)||(Lu.push(n),Xe(n))},Rh=(n,e=null)=>{J7(`"${n}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},qi=n=>typeof n=="function"?n():n,Wa=n=>n&&typeof n.toPromise=="function",ws=n=>Wa(n)?n.toPromise():Promise.resolve(n),Ka=n=>n&&Promise.resolve(n)===n,Z7=()=>navigator.userAgent.includes("Firefox"),Je=()=>document.body.querySelector(`.${P.container}`),_s=n=>{const e=Je();return e?e.querySelector(n):null},mt=n=>_s(`.${n}`),ue=()=>mt(P.popup),dr=()=>mt(P.icon),e4=()=>mt(P["icon-content"]),Sh=()=>mt(P.title),Ya=()=>mt(P["html-container"]),Ph=()=>mt(P.image),Qa=()=>mt(P["progress-steps"]),ji=()=>mt(P["validation-message"]),Bt=()=>_s(`.${P.actions} .${P.confirm}`),fr=()=>_s(`.${P.actions} .${P.cancel}`),$n=()=>_s(`.${P.actions} .${P.deny}`),t4=()=>mt(P["input-label"]),pr=()=>_s(`.${P.loader}`),ys=()=>mt(P.actions),kh=()=>mt(P.footer),zi=()=>mt(P["timer-progress-bar"]),Xa=()=>mt(P.close),n4=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Ja=()=>{const n=ue();if(!n)return[];const e=n.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),t=Array.from(e).sort((i,a)=>{const l=parseInt(i.getAttribute("tabindex")||"0"),u=parseInt(a.getAttribute("tabindex")||"0");return l>u?1:l<u?-1:0}),r=n.querySelectorAll(n4),s=Array.from(r).filter(i=>i.getAttribute("tabindex")!=="-1");return[...new Set(t.concat(s))].filter(i=>nt(i))},Za=()=>Ht(document.body,P.shown)&&!Ht(document.body,P["toast-shown"])&&!Ht(document.body,P["no-backdrop"]),Gi=()=>{const n=ue();return n?Ht(n,P.toast):!1},r4=()=>{const n=ue();return n?n.hasAttribute("data-loading"):!1},gt=(n,e)=>{if(n.textContent="",e){const r=new DOMParser().parseFromString(e,"text/html"),s=r.querySelector("head");s&&Array.from(s.childNodes).forEach(a=>{n.appendChild(a)});const i=r.querySelector("body");i&&Array.from(i.childNodes).forEach(a=>{a instanceof HTMLVideoElement||a instanceof HTMLAudioElement?n.appendChild(a.cloneNode(!0)):n.appendChild(a)})}},Ht=(n,e)=>e?e.split(/\s+/).every(t=>n.classList.contains(t)):!1,s4=(n,e)=>{Array.from(n.classList).forEach(t=>{!Object.values(P).includes(t)&&!Object.values(vi).includes(t)&&!Object.values(e.showClass||{}).includes(t)&&n.classList.remove(t)})},ft=(n,e,t)=>{if(s4(n,e),!e.customClass)return;const r=e.customClass[t];if(r){if(typeof r!="string"&&!r.forEach){Xe(`Invalid type of customClass.${t}! Expected string or iterable object, got "${typeof r}"`);return}ce(n,r)}},Wi=(n,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return n.querySelector(`.${P.popup} > .${P[e]}`);case"checkbox":return n.querySelector(`.${P.popup} > .${P.checkbox} input`);case"radio":return n.querySelector(`.${P.popup} > .${P.radio} input:checked`)||n.querySelector(`.${P.popup} > .${P.radio} input:first-child`);case"range":return n.querySelector(`.${P.popup} > .${P.range} input`);default:return n.querySelector(`.${P.popup} > .${P.input}`)}},Nh=n=>{if(n.focus(),n.type!=="file"){const e=n.value;n.value="",n.value=e}},Oh=(n,e,t)=>{if(!n||!e)return;const r=typeof e=="string"?e.split(/\s+/).filter(Boolean):e;(Array.isArray(n)?n:[n]).forEach(i=>{r.forEach(a=>{t?i.classList.add(a):i.classList.remove(a)})})},ce=(n,e)=>{Oh(n,e,!0)},Et=(n,e)=>{Oh(n,e,!1)},sn=(n,e)=>Array.from(n.children).find(t=>t instanceof HTMLElement&&Ht(t,e)),kn=(n,e,t)=>{t===`${parseInt(`${t}`)}`&&(t=parseInt(t)),t||t===0?n.style.setProperty(e,typeof t=="number"?`${t}px`:t):n.style.removeProperty(e)},Me=(n,e="flex")=>{n&&(n.style.display=e)},Ge=n=>{n&&(n.style.display="none")},el=(n,e="block")=>{n&&new MutationObserver(()=>{Es(n,n.innerHTML,e)}).observe(n,{childList:!0,subtree:!0})},Mu=(n,e,t,r)=>{const s=n.querySelector(e);s&&s.style.setProperty(t,r)},Es=(n,e,t="flex")=>{e?Me(n,t):Ge(n)},nt=n=>!!(n&&(n.offsetWidth||n.offsetHeight||n.getClientRects().length)),i4=()=>!nt(Bt())&&!nt($n())&&!nt(fr()),na=n=>n.scrollHeight>n.clientHeight,o4=(n,e)=>{let t=n;for(;t&&t!==e;){if(na(t))return!0;t=t.parentElement}return!1},Vh=n=>{const e=window.getComputedStyle(n),t=parseFloat(e.getPropertyValue("animation-duration")||"0"),r=parseFloat(e.getPropertyValue("transition-duration")||"0");return t>0||r>0},tl=(n,e=!1)=>{const t=zi();t&&nt(t)&&(e&&(t.style.transition="none",t.style.width="100%"),setTimeout(()=>{t.style.transition=`width ${n/1e3}s linear`,t.style.width="0%"},10))},a4=()=>{const n=zi();if(!n)return;const e=parseInt(window.getComputedStyle(n).width);n.style.removeProperty("transition"),n.style.width="100%";const t=parseInt(window.getComputedStyle(n).width),r=e/t*100;n.style.width=`${r}%`},l4=()=>typeof window>"u"||typeof document>"u",c4=`
 <div aria-labelledby="${P.title}" aria-describedby="${P["html-container"]}" class="${P.popup}" tabindex="-1">
   <button type="button" class="${P.close}"></button>
   <ul class="${P["progress-steps"]}"></ul>
   <div class="${P.icon}"></div>
   <img class="${P.image}" />
   <h2 class="${P.title}" id="${P.title}"></h2>
   <div class="${P["html-container"]}" id="${P["html-container"]}"></div>
   <input class="${P.input}" id="${P.input}" />
   <input type="file" class="${P.file}" />
   <div class="${P.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${P.select}" id="${P.select}"></select>
   <div class="${P.radio}"></div>
   <label class="${P.checkbox}">
     <input type="checkbox" id="${P.checkbox}" />
     <span class="${P.label}"></span>
   </label>
   <textarea class="${P.textarea}" id="${P.textarea}"></textarea>
   <div class="${P["validation-message"]}" id="${P["validation-message"]}"></div>
   <div class="${P.actions}">
     <div class="${P.loader}"></div>
     <button type="button" class="${P.confirm}"></button>
     <button type="button" class="${P.deny}"></button>
     <button type="button" class="${P.cancel}"></button>
   </div>
   <div class="${P.footer}"></div>
   <div class="${P["timer-progress-bar-container"]}">
     <div class="${P["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),u4=()=>{const n=Je();return n?(n.remove(),Et([document.documentElement,document.body],[P["no-backdrop"],P["toast-shown"],P["has-column"]]),!0):!1},In=()=>{j.currentInstance&&j.currentInstance.resetValidationMessage()},h4=()=>{const n=ue();if(!n)return;const e=sn(n,P.input),t=sn(n,P.file),r=n.querySelector(`.${P.range} input`),s=n.querySelector(`.${P.range} output`),i=sn(n,P.select),a=n.querySelector(`.${P.checkbox} input`),l=sn(n,P.textarea);e&&(e.oninput=In),t&&(t.onchange=In),i&&(i.onchange=In),a&&(a.onchange=In),l&&(l.oninput=In),r&&s&&(r.oninput=()=>{In(),s.value=r.value},r.onchange=()=>{In(),s.value=r.value})},d4=n=>{if(typeof n=="string"){const e=document.querySelector(n);if(!e)throw new Error(`Target element "${n}" not found`);return e}return n},f4=n=>{const e=ue();e&&(e.setAttribute("role",n.toast?"alert":"dialog"),e.setAttribute("aria-live",n.toast?"polite":"assertive"),n.toast||e.setAttribute("aria-modal","true"))},p4=n=>{window.getComputedStyle(n).direction==="rtl"&&(ce(Je(),P.rtl),j.isRTL=!0)},m4=n=>{const e=u4();if(l4()){Un("SweetAlert2 requires document to initialize");return}const t=document.createElement("div");t.className=P.container,e&&ce(t,P["no-transition"]),gt(t,c4),t.dataset.swal2Theme=n.theme;const r=d4(n.target||"body");r.appendChild(t),n.topLayer&&(t.setAttribute("popover",""),t.showPopover()),f4(n),p4(r),h4()},nl=(n,e)=>{n instanceof HTMLElement?e.appendChild(n):typeof n=="object"?g4(n,e):n&&gt(e,n)},g4=(n,e)=>{"jquery"in n?w4(e,n):gt(e,n.toString())},w4=(n,e)=>{if(n.textContent="",0 in e)for(let t=0;t in e;t++)n.appendChild(e[t].cloneNode(!0));else n.appendChild(e.cloneNode(!0))},_4=(n,e)=>{const t=ys(),r=pr();!t||!r||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?Ge(t):Me(t),ft(t,e,"actions"),y4(t,r,e),gt(r,e.loaderHtml||""),ft(r,e,"loader"))};function y4(n,e,t){const r=Bt(),s=$n(),i=fr();!r||!s||!i||(No(r,"confirm",t),No(s,"deny",t),No(i,"cancel",t),E4(r,s,i,t),t.reverseButtons&&(t.toast?(n.insertBefore(i,r),n.insertBefore(s,r)):(n.insertBefore(i,e),n.insertBefore(s,e),n.insertBefore(r,e))))}function E4(n,e,t,r){if(!r.buttonsStyling){Et([n,e,t],P.styled);return}ce([n,e,t],P.styled),[[n,"confirm",r.confirmButtonColor],[e,"deny",r.denyButtonColor],[t,"cancel",r.cancelButtonColor]].forEach(([i,a,l])=>{l&&i.style.setProperty(`--swal2-${a}-button-background-color`,l),b4(i)})}function b4(n){const e=window.getComputedStyle(n);if(e.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const t=e.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");n.style.setProperty("--swal2-action-button-focus-box-shadow",e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${t}`))}function No(n,e,t){const r=Ga(e);Es(n,t[`show${r}Button`],"inline-block"),gt(n,t[`${e}ButtonText`]||""),n.setAttribute("aria-label",t[`${e}ButtonAriaLabel`]||""),n.className=P[e],ft(n,t,`${e}Button`)}const v4=(n,e)=>{const t=Xa();t&&(gt(t,e.closeButtonHtml||""),ft(t,e,"closeButton"),Es(t,e.showCloseButton),t.setAttribute("aria-label",e.closeButtonAriaLabel||""))},A4=(n,e)=>{const t=Je();t&&(T4(t,e.backdrop),I4(t,e.position),C4(t,e.grow),ft(t,e,"container"))};function T4(n,e){typeof e=="string"?n.style.background=e:e||ce([document.documentElement,document.body],P["no-backdrop"])}function I4(n,e){e&&(e in P?ce(n,P[e]):(Xe('The "position" parameter is not valid, defaulting to "center"'),ce(n,P.center)))}function C4(n,e){e&&ce(n,P[`grow-${e}`])}var fe={innerParams:new WeakMap,domCache:new WeakMap,focusedElement:new WeakMap};const x4=["input","file","range","select","radio","checkbox","textarea"],R4=(n,e)=>{const t=ue();if(!t)return;const r=fe.innerParams.get(n),s=!r||e.input!==r.input;x4.forEach(i=>{const a=sn(t,P[i]);a&&(k4(i,e.inputAttributes),a.className=P[i],s&&Ge(a))}),e.input&&(s&&S4(e),N4(e))},S4=n=>{if(!n.input)return;if(!Ie[n.input]){Un(`Unexpected type of input! Expected ${Object.keys(Ie).join(" | ")}, got "${n.input}"`);return}const e=Dh(n.input);if(!e)return;const t=Ie[n.input](e,n);Me(e),n.inputAutoFocus&&setTimeout(()=>{Nh(t)})},P4=n=>{for(const{name:e}of Array.from(n.attributes))["id","type","value","style"].includes(e)||n.removeAttribute(e)},k4=(n,e)=>{const t=ue();if(!t)return;const r=Wi(t,n);if(r){P4(r);for(const s in e)r.setAttribute(s,e[s])}},N4=n=>{if(!n.input)return;const e=Dh(n.input);e&&ft(e,n,"input")},rl=(n,e)=>{!n.placeholder&&e.inputPlaceholder&&(n.placeholder=e.inputPlaceholder)},bs=(n,e,t)=>{if(t.inputLabel){const r=document.createElement("label"),s=P["input-label"];r.setAttribute("for",n.id),r.className=s,typeof t.customClass=="object"&&ce(r,t.customClass.inputLabel),r.innerText=t.inputLabel,e.insertAdjacentElement("beforebegin",r)}},Dh=n=>{const e=ue();if(e)return sn(e,P[n]||P.input)},Ai=(n,e)=>{["string","number"].includes(typeof e)?n.value=`${e}`:Ka(e)||Xe(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},Ie={};Ie.text=Ie.email=Ie.password=Ie.number=Ie.tel=Ie.url=Ie.search=Ie.date=Ie["datetime-local"]=Ie.time=Ie.week=Ie.month=(n,e)=>{const t=n;return Ai(t,e.inputValue),bs(t,t,e),rl(t,e),t.type=e.input,t};Ie.file=(n,e)=>{const t=n;return bs(t,t,e),rl(t,e),t};Ie.range=(n,e)=>{const t=n,r=t.querySelector("input"),s=t.querySelector("output");return r&&(Ai(r,e.inputValue),r.type=e.input,bs(r,n,e)),s&&Ai(s,e.inputValue),n};Ie.select=(n,e)=>{const t=n;if(t.textContent="",e.inputPlaceholder){const r=document.createElement("option");gt(r,e.inputPlaceholder),r.value="",r.disabled=!0,r.selected=!0,t.appendChild(r)}return bs(t,t,e),t};Ie.radio=n=>{const e=n;return e.textContent="",n};Ie.checkbox=(n,e)=>{const t=ue();if(!t)throw new Error("Popup not found");const r=Wi(t,"checkbox");if(!r)throw new Error("Checkbox input not found");r.value="1",r.checked=!!e.inputValue;const i=n.querySelector("span");if(i){const a=e.inputPlaceholder||e.inputLabel;a&&gt(i,a)}return r};Ie.textarea=(n,e)=>{const t=n;Ai(t,e.inputValue),rl(t,e),bs(t,t,e);const r=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=ue();if(!s)return;const i=parseInt(window.getComputedStyle(s).width),a=()=>{if(!document.body.contains(t))return;const l=t.offsetWidth+r(t),u=ue();u&&(l>i?u.style.width=`${l}px`:kn(u,"width",e.width))};new MutationObserver(a).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const O4=(n,e)=>{const t=Ya();t&&(el(t),ft(t,e,"htmlContainer"),e.html?(nl(e.html,t),Me(t,"block")):e.text?(t.textContent=e.text,Me(t,"block")):Ge(t),R4(n,e))},V4=(n,e)=>{const t=kh();t&&(el(t),Es(t,!!e.footer,"block"),e.footer&&nl(e.footer,t),ft(t,e,"footer"))},D4=(n,e)=>{const t=fe.innerParams.get(n),r=dr();if(!r)return;if(t&&e.icon===t.icon){Fu(r,e),Bu(r,e);return}if(!e.icon&&!e.iconHtml){Ge(r);return}if(e.icon&&Object.keys(vi).indexOf(e.icon)===-1){Un(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),Ge(r);return}Me(r),Fu(r,e),Bu(r,e),ce(r,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",Lh)},Bu=(n,e)=>{for(const[t,r]of Object.entries(vi))e.icon!==t&&Et(n,r);ce(n,e.icon&&vi[e.icon]),B4(n,e),Lh(),ft(n,e,"icon")},Lh=()=>{const n=ue();if(!n)return;const e=window.getComputedStyle(n).getPropertyValue("background-color");n.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix").forEach(r=>{r.style.backgroundColor=e})},L4=n=>`
  ${n.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${n.animation?'<div class="swal2-success-fix"></div>':""}
  ${n.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,M4=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Fu=(n,e)=>{if(!e.icon&&!e.iconHtml)return;let t=n.innerHTML,r="";e.iconHtml?r=Uu(e.iconHtml):e.icon==="success"?(r=L4(e),t=t.replace(/ style=".*?"/g,"")):e.icon==="error"?r=M4:e.icon&&(r=Uu({question:"?",warning:"!",info:"i"}[e.icon])),t.trim()!==r.trim()&&gt(n,r)},B4=(n,e)=>{if(e.iconColor){n.style.color=e.iconColor,n.style.borderColor=e.iconColor;for(const t of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Mu(n,t,"background-color",e.iconColor);Mu(n,".swal2-success-ring","border-color",e.iconColor)}},Uu=n=>`<div class="${P["icon-content"]}">${n}</div>`,F4=(n,e)=>{const t=Ph();if(t){if(!e.imageUrl){Ge(t);return}Me(t,""),t.setAttribute("src",e.imageUrl),t.setAttribute("alt",e.imageAlt||""),kn(t,"width",e.imageWidth),kn(t,"height",e.imageHeight),t.className=P.image,ft(t,e,"image")}};let sl=!1,Mh=0,Bh=0,Fh=0,Uh=0;const U4=n=>{n.addEventListener("mousedown",Ti),document.body.addEventListener("mousemove",Ii),n.addEventListener("mouseup",Ci),n.addEventListener("touchstart",Ti),document.body.addEventListener("touchmove",Ii),n.addEventListener("touchend",Ci)},$4=n=>{n.removeEventListener("mousedown",Ti),document.body.removeEventListener("mousemove",Ii),n.removeEventListener("mouseup",Ci),n.removeEventListener("touchstart",Ti),document.body.removeEventListener("touchmove",Ii),n.removeEventListener("touchend",Ci)},Ti=n=>{const e=ue();if(!e)return;const t=dr();if(n.target===e||t&&t.contains(n.target)){sl=!0;const r=$h(n);Mh=r.clientX,Bh=r.clientY,Fh=parseInt(e.style.insetInlineStart)||0,Uh=parseInt(e.style.insetBlockStart)||0,ce(e,"swal2-dragging")}},Ii=n=>{const e=ue();if(e&&sl){let{clientX:t,clientY:r}=$h(n);const s=t-Mh;e.style.insetInlineStart=`${Fh+(j.isRTL?-s:s)}px`,e.style.insetBlockStart=`${Uh+(r-Bh)}px`}},Ci=()=>{const n=ue();sl=!1,Et(n,"swal2-dragging")},$h=n=>{const e=n.type.startsWith("touch")?n.touches[0]:n;return{clientX:e.clientX,clientY:e.clientY}},H4=(n,e)=>{const t=Je(),r=ue();if(!(!t||!r)){if(e.toast){kn(t,"width",e.width),r.style.width="100%";const s=pr();s&&r.insertBefore(s,dr())}else kn(r,"width",e.width);kn(r,"padding",e.padding),e.color&&(r.style.color=e.color),e.background&&(r.style.background=e.background),Ge(ji()),q4(r,e),e.draggable&&!e.toast?(ce(r,P.draggable),U4(r)):(Et(r,P.draggable),$4(r))}},q4=(n,e)=>{const t=e.showClass||{};n.className=`${P.popup} ${nt(n)?t.popup:""}`,e.toast?(ce([document.documentElement,document.body],P["toast-shown"]),ce(n,P.toast)):ce(n,P.modal),ft(n,e,"popup"),typeof e.customClass=="string"&&ce(n,e.customClass),e.icon&&ce(n,P[`icon-${e.icon}`])},j4=(n,e)=>{const t=Qa();if(!t)return;const{progressSteps:r,currentProgressStep:s}=e;if(!r||r.length===0||s===void 0){Ge(t);return}Me(t),t.textContent="",s>=r.length&&Xe("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),r.forEach((i,a)=>{const l=z4(i);if(t.appendChild(l),a===s&&ce(l,P["active-progress-step"]),a!==r.length-1){const u=G4(e);t.appendChild(u)}})},z4=n=>{const e=document.createElement("li");return ce(e,P["progress-step"]),gt(e,n),e},G4=n=>{const e=document.createElement("li");return ce(e,P["progress-step-line"]),n.progressStepsDistance&&kn(e,"width",n.progressStepsDistance),e},W4=(n,e)=>{const t=Sh();t&&(el(t),Es(t,!!(e.title||e.titleText),"block"),e.title&&nl(e.title,t),e.titleText&&(t.innerText=e.titleText),ft(t,e,"title"))},Hh=(n,e)=>{var t;H4(n,e),A4(n,e),j4(n,e),D4(n,e),F4(n,e),W4(n,e),v4(n,e),O4(n,e),_4(n,e),V4(n,e);const r=ue();typeof e.didRender=="function"&&r&&e.didRender(r),(t=j.eventEmitter)===null||t===void 0||t.emit("didRender",r)},K4=()=>nt(ue()),qh=()=>{var n;return(n=Bt())===null||n===void 0?void 0:n.click()},Y4=()=>{var n;return(n=$n())===null||n===void 0?void 0:n.click()},Q4=()=>{var n;return(n=fr())===null||n===void 0?void 0:n.click()},mr=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),jh=n=>{if(n.keydownTarget&&n.keydownHandlerAdded&&n.keydownHandler){const e=n.keydownHandler;n.keydownTarget.removeEventListener("keydown",e,{capture:n.keydownListenerCapture}),n.keydownHandlerAdded=!1}},X4=(n,e,t)=>{if(jh(n),!e.toast){const r=i=>Z4(e,i,t);n.keydownHandler=r;const s=e.keydownListenerCapture?window:ue();if(s){n.keydownTarget=s,n.keydownListenerCapture=e.keydownListenerCapture;const i=r;n.keydownTarget.addEventListener("keydown",i,{capture:n.keydownListenerCapture}),n.keydownHandlerAdded=!0}}},ra=(n,e)=>{var t;const r=Ja();return r.length?(n=n+e,n===-2&&(n=r.length-1),n===r.length?n=0:n===-1&&(n=r.length-1),r[n].focus(),!(Z7()&&r[n]instanceof HTMLIFrameElement)):((t=ue())===null||t===void 0||t.focus(),!0)},zh=["ArrowRight","ArrowDown"],J4=["ArrowLeft","ArrowUp"],Z4=(n,e,t)=>{n&&(e.isComposing||e.keyCode===229||(n.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?eg(e,n):e.key==="Tab"?tg(e):[...zh,...J4].includes(e.key)?ng(e.key):e.key==="Escape"&&rg(e,n,t)))},eg=(n,e)=>{if(!qi(e.allowEnterKey))return;const t=ue();if(!t||!e.input)return;const r=Wi(t,e.input);if(n.target&&r&&n.target instanceof HTMLElement&&n.target.outerHTML===r.outerHTML){if(["textarea","file"].includes(e.input))return;qh(),n.preventDefault()}},tg=n=>{const e=n.target,r=Ja().findIndex(i=>i===e);let s=!0;n.shiftKey?s=ra(r,-1):s=ra(r,1),n.stopPropagation(),s&&n.preventDefault()},ng=n=>{const e=ys(),t=Bt(),r=$n(),s=fr();if(!e||!t||!r||!s)return;const i=[t,r,s];if(document.activeElement instanceof HTMLElement&&!i.includes(document.activeElement))return;const a=zh.includes(n)?"nextElementSibling":"previousElementSibling";let l=document.activeElement;if(l){for(let u=0;u<e.children.length;u++){if(l=l[a],!l)return;if(l instanceof HTMLButtonElement&&nt(l))break}l instanceof HTMLButtonElement&&l.focus()}},rg=(n,e,t)=>{n.preventDefault(),qi(e.allowEscapeKey)&&t(mr.esc)};var ir={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const sg=()=>{const n=Je();Array.from(document.body.children).forEach(t=>{t.contains(n)||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")||""),t.setAttribute("aria-hidden","true"))})},Gh=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},il=typeof window<"u"&&!!window.GestureEvent,ig=il&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,og=()=>{if(il&&!Ht(document.body,P.iosfix)){const n=document.body.scrollTop;document.body.style.top=`${n*-1}px`,ce(document.body,P.iosfix),ag()}},ag=()=>{const n=Je();if(!n)return;let e;n.ontouchstart=t=>{e=lg(t)},n.ontouchmove=t=>{e&&(t.preventDefault(),t.stopPropagation())}},lg=n=>{const e=n.target,t=Je(),r=Ya();return!t||!r||cg(n)||ug(n)?!1:e===t||!na(t)&&e instanceof HTMLElement&&!o4(e,r)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(na(r)&&r.contains(e))},cg=n=>!!(n.touches&&n.touches.length&&n.touches[0].touchType==="stylus"),ug=n=>n.touches&&n.touches.length>1,hg=()=>{if(Ht(document.body,P.iosfix)){const n=parseInt(document.body.style.top,10);Et(document.body,P.iosfix),document.body.style.top="",document.body.scrollTop=n*-1}},dg=()=>{const n=document.createElement("div");n.className=P["scrollbar-measure"],document.body.appendChild(n);const e=n.getBoundingClientRect().width-n.clientWidth;return document.body.removeChild(n),e};let Zn=null;const fg=n=>{Zn===null&&(document.body.scrollHeight>window.innerHeight||n==="scroll")&&(Zn=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Zn+dg()}px`)},pg=()=>{Zn!==null&&(document.body.style.paddingRight=`${Zn}px`,Zn=null)};function Wh(n,e,t,r){Gi()?$u(n,r):(Y7(t).then(()=>$u(n,r)),jh(j)),il?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Za()&&(pg(),hg(),Gh()),mg()}function mg(){Et([document.documentElement,document.body],[P.shown,P["height-auto"],P["no-backdrop"],P["toast-shown"]])}function on(n){n=wg(n);const e=ir.swalPromiseResolve.get(this),t=gg(this);this.isAwaitingPromise?n.isDismissed||(vs(this),e(n)):t&&e(n)}const gg=n=>{const e=ue();if(!e)return!1;const t=fe.innerParams.get(n);if(!t||Ht(e,t.hideClass.popup))return!1;Et(e,t.showClass.popup),ce(e,t.hideClass.popup);const r=Je();return Et(r,t.showClass.backdrop),ce(r,t.hideClass.backdrop),_g(n,e,t),!0};function Kh(n){const e=ir.swalPromiseReject.get(this);vs(this),e&&e(n)}const vs=n=>{n.isAwaitingPromise&&(delete n.isAwaitingPromise,fe.innerParams.get(n)||n._destroy())},wg=n=>typeof n>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},n),_g=(n,e,t)=>{var r;const s=Je(),i=Vh(e);typeof t.willClose=="function"&&t.willClose(e),(r=j.eventEmitter)===null||r===void 0||r.emit("willClose",e),i&&s?yg(n,e,s,!!t.returnFocus,t.didClose):s&&Wh(n,s,!!t.returnFocus,t.didClose)},yg=(n,e,t,r,s)=>{j.swalCloseEventFinishedCallback=Wh.bind(null,n,t,r,s);const i=function(a){if(a.target===e){var l;(l=j.swalCloseEventFinishedCallback)===null||l===void 0||l.call(j),delete j.swalCloseEventFinishedCallback,e.removeEventListener("animationend",i),e.removeEventListener("transitionend",i)}};e.addEventListener("animationend",i),e.addEventListener("transitionend",i)},$u=(n,e)=>{setTimeout(()=>{var t;typeof e=="function"&&e.bind(n.params)(),(t=j.eventEmitter)===null||t===void 0||t.emit("didClose"),n._destroy&&n._destroy()})},or=n=>{let e=ue();if(e||new ae,e=ue(),!e)return;const t=pr();Gi()?Ge(dr()):Eg(e,n),Me(t),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},Eg=(n,e)=>{const t=ys(),r=pr();!t||!r||(!e&&nt(Bt())&&(e=Bt()),Me(t),e&&(Ge(e),r.setAttribute("data-button-to-replace",e.className),t.insertBefore(r,e)),ce([n,t],P.loading))},bg=(n,e)=>{e.input==="select"||e.input==="radio"?Cg(n,e):["text","email","number","tel","textarea"].some(t=>t===e.input)&&(Wa(e.inputValue)||Ka(e.inputValue))&&(or(Bt()),xg(n,e))},vg=(n,e)=>{const t=n.getInput();if(!t)return null;switch(e.input){case"checkbox":return Ag(t);case"radio":return Tg(t);case"file":return Ig(t);default:return e.inputAutoTrim?t.value.trim():t.value}},Ag=n=>n.checked?1:0,Tg=n=>n.checked?n.value:null,Ig=n=>n.files&&n.files.length?n.getAttribute("multiple")!==null?n.files:n.files[0]:null,Cg=(n,e)=>{const t=ue();if(!t)return;const r=s=>{e.input==="select"?Rg(t,sa(s),e):e.input==="radio"&&Sg(t,sa(s),e)};Wa(e.inputOptions)||Ka(e.inputOptions)?(or(Bt()),ws(e.inputOptions).then(s=>{n.hideLoading(),r(s)})):typeof e.inputOptions=="object"?r(e.inputOptions):Un(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},xg=(n,e)=>{const t=n.getInput();t&&(Ge(t),ws(e.inputValue).then(r=>{t.value=e.input==="number"?`${parseFloat(r)||0}`:`${r}`,Me(t),t.focus(),n.hideLoading()}).catch(r=>{Un(`Error in inputValue promise: ${r}`),t.value="",Me(t),t.focus(),n.hideLoading()}))};function Rg(n,e,t){const r=sn(n,P.select);if(!r)return;const s=(i,a,l)=>{const u=document.createElement("option");u.value=l,gt(u,a),u.selected=Yh(l,t.inputValue),i.appendChild(u)};e.forEach(i=>{const a=i[0],l=i[1];if(Array.isArray(l)){const u=document.createElement("optgroup");u.label=a,u.disabled=!1,r.appendChild(u),l.forEach(f=>s(u,f[1],f[0]))}else s(r,l,a)}),r.focus()}function Sg(n,e,t){const r=sn(n,P.radio);if(!r)return;e.forEach(i=>{const a=i[0],l=i[1],u=document.createElement("input"),f=document.createElement("label");u.type="radio",u.name=P.radio,u.value=a,Yh(a,t.inputValue)&&(u.checked=!0);const m=document.createElement("span");gt(m,l),m.className=P.label,f.appendChild(u),f.appendChild(m),r.appendChild(f)});const s=r.querySelectorAll("input");s.length&&s[0].focus()}const sa=n=>(n instanceof Map?Array.from(n):Object.entries(n)).map(([t,r])=>[t,typeof r=="object"?sa(r):r]),Yh=(n,e)=>!!e&&e!=null&&e.toString()===n.toString(),Pg=n=>{const e=fe.innerParams.get(n);n.disableButtons(),e.input?Qh(n,"confirm"):al(n,!0)},kg=n=>{const e=fe.innerParams.get(n);n.disableButtons(),e.returnInputValueOnDeny?Qh(n,"deny"):ol(n,!1)},Ng=(n,e)=>{n.disableButtons(),e(mr.cancel)},Qh=(n,e)=>{const t=fe.innerParams.get(n);if(!t.input){Un(`The "input" parameter is needed to be set when using returnInputValueOn${Ga(e)}`);return}const r=n.getInput(),s=vg(n,t);t.inputValidator?Og(n,s,e):r&&!r.checkValidity()?(n.enableButtons(),n.showValidationMessage(t.validationMessage||r.validationMessage)):e==="deny"?ol(n,s):al(n,s)},Og=(n,e,t)=>{const r=fe.innerParams.get(n);n.disableInput(),Promise.resolve().then(()=>ws(r.inputValidator(e,r.validationMessage))).then(i=>{n.enableButtons(),n.enableInput(),i?n.showValidationMessage(i):t==="deny"?ol(n,e):al(n,e)})},ol=(n,e)=>{const t=fe.innerParams.get(n);t.showLoaderOnDeny&&or($n()),t.preDeny?(n.isAwaitingPromise=!0,Promise.resolve().then(()=>ws(t.preDeny(e,t.validationMessage))).then(s=>{s===!1?(n.hideLoading(),vs(n)):n.close({isDenied:!0,value:typeof s>"u"?e:s})}).catch(s=>Xh(n,s))):n.close({isDenied:!0,value:e})},Hu=(n,e)=>{n.close({isConfirmed:!0,value:e})},Xh=(n,e)=>{n.rejectPromise(e)},al=(n,e)=>{const t=fe.innerParams.get(n);t.showLoaderOnConfirm&&or(),t.preConfirm?(n.resetValidationMessage(),n.isAwaitingPromise=!0,Promise.resolve().then(()=>ws(t.preConfirm(e,t.validationMessage))).then(s=>{nt(ji())||s===!1?(n.hideLoading(),vs(n)):Hu(n,typeof s>"u"?e:s)}).catch(s=>Xh(n,s))):Hu(n,e)};function xi(){const n=fe.innerParams.get(this);if(!n)return;const e=fe.domCache.get(this);Ge(e.loader),Gi()?n.icon&&Me(dr()):Vg(e),Et([e.popup,e.actions],P.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),this.enableButtons()}const Vg=n=>{const e=n.loader.getAttribute("data-button-to-replace"),t=e?n.popup.getElementsByClassName(e):[];t.length?Me(t[0],"inline-block"):i4()&&Ge(n.actions)};function Jh(){const n=fe.innerParams.get(this),e=fe.domCache.get(this);return e?Wi(e.popup,n.input):null}function Zh(n,e,t){const r=fe.domCache.get(n);e.forEach(s=>{r[s].disabled=t})}function e2(n,e){const t=ue();!t||!n||(n.type==="radio"?t.querySelectorAll(`[name="${P.radio}"]`).forEach(s=>{s.disabled=e}):n.disabled=e)}function t2(){Zh(this,["confirmButton","denyButton","cancelButton"],!1);const n=fe.focusedElement.get(this);n instanceof HTMLElement&&document.activeElement===document.body&&n.focus(),fe.focusedElement.delete(this)}function n2(){fe.focusedElement.set(this,document.activeElement),Zh(this,["confirmButton","denyButton","cancelButton"],!0)}function r2(){e2(this.getInput(),!1)}function s2(){e2(this.getInput(),!0)}function i2(n){const e=fe.domCache.get(this),t=fe.innerParams.get(this);gt(e.validationMessage,n),e.validationMessage.className=P["validation-message"],t.customClass&&t.customClass.validationMessage&&ce(e.validationMessage,t.customClass.validationMessage),Me(e.validationMessage);const r=this.getInput();r&&(r.setAttribute("aria-invalid","true"),r.setAttribute("aria-describedby",P["validation-message"]),Nh(r),ce(r,P.inputerror))}function o2(){const n=fe.domCache.get(this);n.validationMessage&&Ge(n.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),Et(e,P.inputerror))}const an={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},Dg=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],Lg={allowEnterKey:void 0},Mg=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],a2=n=>Object.prototype.hasOwnProperty.call(an,n),l2=n=>Dg.indexOf(n)!==-1,c2=n=>Lg[n],Bg=n=>{a2(n)||Xe(`Unknown parameter "${n}"`)},Fg=n=>{Mg.includes(n)&&Xe(`The parameter "${n}" is incompatible with toasts`)},Ug=n=>{const e=c2(n);e&&Rh(n,e)},u2=n=>{n.backdrop===!1&&n.allowOutsideClick&&Xe('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),n.theme&&!["light","dark","auto","minimal","borderless","bootstrap-4","bootstrap-4-light","bootstrap-4-dark","bootstrap-5","bootstrap-5-light","bootstrap-5-dark","material-ui","material-ui-light","material-ui-dark","embed-iframe","bulma","bulma-light","bulma-dark"].includes(n.theme)&&Xe(`Invalid theme "${n.theme}"`);for(const e in n)Bg(e),n.toast&&Fg(e),Ug(e)};function h2(n){const e=Je(),t=ue(),r=fe.innerParams.get(this);if(!t||Ht(t,r.hideClass.popup)){Xe("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const s=$g(n),i=Object.assign({},r,s);u2(i),e&&(e.dataset.swal2Theme=i.theme),Hh(this,i),fe.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,n),writable:!1,enumerable:!0}})}const $g=n=>{const e={};return Object.keys(n).forEach(t=>{if(l2(t)){const r=n;e[t]=r[t]}else Xe(`Invalid parameter to update: ${t}`)}),e};function d2(){var n;const e=fe.domCache.get(this),t=fe.innerParams.get(this);if(!t){f2(this);return}e.popup&&j.swalCloseEventFinishedCallback&&(j.swalCloseEventFinishedCallback(),delete j.swalCloseEventFinishedCallback),typeof t.didDestroy=="function"&&t.didDestroy(),(n=j.eventEmitter)===null||n===void 0||n.emit("didDestroy"),Hg(this)}const Hg=n=>{f2(n),delete n.params,delete j.keydownHandler,delete j.keydownTarget,delete j.currentInstance},f2=n=>{n.isAwaitingPromise?(Oo(fe,n),n.isAwaitingPromise=!0):(Oo(ir,n),Oo(fe,n),delete n.isAwaitingPromise,delete n.disableButtons,delete n.enableButtons,delete n.getInput,delete n.disableInput,delete n.enableInput,delete n.hideLoading,delete n.disableLoading,delete n.showValidationMessage,delete n.resetValidationMessage,delete n.close,delete n.closePopup,delete n.closeModal,delete n.closeToast,delete n.rejectPromise,delete n.update,delete n._destroy)},Oo=(n,e)=>{for(const t in n)n[t].delete(e)};var qg=Object.freeze({__proto__:null,_destroy:d2,close:on,closeModal:on,closePopup:on,closeToast:on,disableButtons:n2,disableInput:s2,disableLoading:xi,enableButtons:t2,enableInput:r2,getInput:Jh,handleAwaitingPromise:vs,hideLoading:xi,rejectPromise:Kh,resetValidationMessage:o2,showValidationMessage:i2,update:h2});const jg=(n,e,t)=>{n.toast?zg(n,e,t):(Wg(e),Kg(e),Yg(n,e,t))},zg=(n,e,t)=>{e.popup.onclick=()=>{n&&(Gg(n)||n.timer||n.input)||t(mr.close)}},Gg=n=>!!(n.showConfirmButton||n.showDenyButton||n.showCancelButton||n.showCloseButton);let Ri=!1;const Wg=n=>{n.popup.onmousedown=()=>{n.container.onmouseup=function(e){n.container.onmouseup=()=>{},e.target===n.container&&(Ri=!0)}}},Kg=n=>{n.container.onmousedown=e=>{e.target===n.container&&e.preventDefault(),n.popup.onmouseup=function(t){n.popup.onmouseup=()=>{},(t.target===n.popup||t.target instanceof HTMLElement&&n.popup.contains(t.target))&&(Ri=!0)}}},Yg=(n,e,t)=>{e.container.onclick=r=>{if(Ri){Ri=!1;return}r.target===e.container&&qi(n.allowOutsideClick)&&t(mr.backdrop)}},Qg=n=>typeof n=="object"&&n!==null&&"jquery"in n,qu=n=>n instanceof Element||Qg(n),Xg=n=>{const e={};return typeof n[0]=="object"&&!qu(n[0])?Object.assign(e,n[0]):["title","html","icon"].forEach((t,r)=>{const s=n[r];typeof s=="string"||qu(s)?e[t]=s:s!==void 0&&Un(`Unexpected type of ${t}! Expected "string" or "Element", got ${typeof s}`)}),e};function Jg(...n){return new this(...n)}function Zg(n){class e extends this{_main(r,s){return super._main(r,Object.assign({},n,s))}}return e}const e3=()=>j.timeout&&j.timeout.getTimerLeft(),p2=()=>{if(j.timeout)return a4(),j.timeout.stop()},m2=()=>{if(j.timeout){const n=j.timeout.start();return tl(n),n}},t3=()=>{const n=j.timeout;return n&&(n.running?p2():m2())},n3=n=>{if(j.timeout){const e=j.timeout.increase(n);return tl(e,!0),e}},r3=()=>!!(j.timeout&&j.timeout.isRunning());let ju=!1;const ia={};function s3(n="data-swal-template"){ia[n]=this,ju||(document.body.addEventListener("click",i3),ju=!0)}const i3=n=>{for(let e=n.target;e&&e!==document;e=e.parentNode)for(const t in ia){const r=e.getAttribute&&e.getAttribute(t);if(r){ia[t].fire({template:r});return}}};class o3{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,t){const r=this._getHandlersByEventName(e);r.includes(t)||r.push(t)}once(e,t){const r=(...s)=>{this.removeListener(e,r),t.apply(this,s)};this.on(e,r)}emit(e,...t){this._getHandlersByEventName(e).forEach(r=>{try{r.apply(this,t)}catch(s){console.error(s)}})}removeListener(e,t){const r=this._getHandlersByEventName(e),s=r.indexOf(t);s>-1&&r.splice(s,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}j.eventEmitter=new o3;const a3=(n,e)=>{j.eventEmitter&&j.eventEmitter.on(n,e)},l3=(n,e)=>{j.eventEmitter&&j.eventEmitter.once(n,e)},c3=(n,e)=>{if(j.eventEmitter){if(!n){j.eventEmitter.reset();return}e?j.eventEmitter.removeListener(n,e):j.eventEmitter.removeAllListeners(n)}};var u3=Object.freeze({__proto__:null,argsToParams:Xg,bindClickHandler:s3,clickCancel:Q4,clickConfirm:qh,clickDeny:Y4,enableLoading:or,fire:Jg,getActions:ys,getCancelButton:fr,getCloseButton:Xa,getConfirmButton:Bt,getContainer:Je,getDenyButton:$n,getFocusableElements:Ja,getFooter:kh,getHtmlContainer:Ya,getIcon:dr,getIconContent:e4,getImage:Ph,getInputLabel:t4,getLoader:pr,getPopup:ue,getProgressSteps:Qa,getTimerLeft:e3,getTimerProgressBar:zi,getTitle:Sh,getValidationMessage:ji,increaseTimer:n3,isDeprecatedParameter:c2,isLoading:r4,isTimerRunning:r3,isUpdatableParameter:l2,isValidParameter:a2,isVisible:K4,mixin:Zg,off:c3,on:a3,once:l3,resumeTimer:m2,showLoading:or,stopTimer:p2,toggleTimer:t3});class h3{constructor(e,t){this.callback=e,this.remaining=t,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const t=this.running;return t&&this.stop(),this.remaining+=e,t&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const g2=["swal-title","swal-html","swal-footer"],d3=n=>{const e=typeof n.template=="string"?document.querySelector(n.template):n.template;if(!e)return{};const t=e.content;return E3(t),Object.assign(f3(t),p3(t),m3(t),g3(t),w3(t),_3(t),y3(t,g2))},f3=n=>{const e={};return Array.from(n.querySelectorAll("swal-param")).forEach(r=>{Bn(r,["name","value"]);const s=r.getAttribute("name"),i=r.getAttribute("value");!s||!i||(s in an&&typeof an[s]=="boolean"?e[s]=i!=="false":s in an&&typeof an[s]=="object"?e[s]=JSON.parse(i):e[s]=i)}),e},p3=n=>{const e={};return Array.from(n.querySelectorAll("swal-function-param")).forEach(r=>{const s=r.getAttribute("name"),i=r.getAttribute("value");!s||!i||(e[s]=new Function(`return ${i}`)())}),e},m3=n=>{const e={};return Array.from(n.querySelectorAll("swal-button")).forEach(r=>{Bn(r,["type","color","aria-label"]);const s=r.getAttribute("type");if(!s||!["confirm","cancel","deny"].includes(s))return;e[`${s}ButtonText`]=r.innerHTML,e[`show${Ga(s)}Button`]=!0;const i=r.getAttribute("color");i!==null&&(e[`${s}ButtonColor`]=i);const a=r.getAttribute("aria-label");a!==null&&(e[`${s}ButtonAriaLabel`]=a)}),e},g3=n=>{const e={},t=n.querySelector("swal-image");if(t){Bn(t,["src","width","height","alt"]);const r=t.getAttribute("src");r!==null&&(e.imageUrl=r||void 0);const s=t.getAttribute("width");s!==null&&(e.imageWidth=s||void 0);const i=t.getAttribute("height");i!==null&&(e.imageHeight=i||void 0);const a=t.getAttribute("alt");a!==null&&(e.imageAlt=a||void 0)}return e},w3=n=>{const e={},t=n.querySelector("swal-icon");return t&&(Bn(t,["type","color"]),t.hasAttribute("type")&&(e.icon=t.getAttribute("type")),t.hasAttribute("color")&&(e.iconColor=t.getAttribute("color")),e.iconHtml=t.innerHTML),e},_3=n=>{const e={},t=n.querySelector("swal-input");t&&(Bn(t,["type","label","placeholder","value"]),e.input=t.getAttribute("type")||"text",t.hasAttribute("label")&&(e.inputLabel=t.getAttribute("label")),t.hasAttribute("placeholder")&&(e.inputPlaceholder=t.getAttribute("placeholder")),t.hasAttribute("value")&&(e.inputValue=t.getAttribute("value")));const r=Array.from(n.querySelectorAll("swal-input-option"));return r.length&&(e.inputOptions={},r.forEach(s=>{Bn(s,["value"]);const i=s.getAttribute("value");if(!i)return;const a=s.innerHTML;e.inputOptions[i]=a})),e},y3=(n,e)=>{const t={};for(const r in e){const s=e[r],i=n.querySelector(s);i&&(Bn(i,[]),t[s.replace(/^swal-/,"")]=i.innerHTML.trim())}return t},E3=n=>{const e=g2.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(n.children).forEach(t=>{const r=t.tagName.toLowerCase();e.includes(r)||Xe(`Unrecognized element <${r}>`)})},Bn=(n,e)=>{Array.from(n.attributes).forEach(t=>{e.indexOf(t.name)===-1&&Xe([`Unrecognized attribute "${t.name}" on <${n.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},w2=10,b3=n=>{var e,t;const r=Je(),s=ue();if(!r||!s)return;typeof n.willOpen=="function"&&n.willOpen(s),(e=j.eventEmitter)===null||e===void 0||e.emit("willOpen",s);const a=window.getComputedStyle(document.body).overflowY;if(T3(r,s,n),setTimeout(()=>{v3(r,s)},w2),Za()&&(A3(r,n.scrollbarPadding!==void 0?n.scrollbarPadding:!1,a),sg()),ig&&n.backdrop===!1&&s.scrollHeight>r.clientHeight&&(r.style.pointerEvents="auto"),!Gi()&&!j.previousActiveElement&&(j.previousActiveElement=document.activeElement),typeof n.didOpen=="function"){const l=n.didOpen;setTimeout(()=>l(s))}(t=j.eventEmitter)===null||t===void 0||t.emit("didOpen",s)},Si=n=>{const e=ue();if(!e||n.target!==e)return;const t=Je();t&&(e.removeEventListener("animationend",Si),e.removeEventListener("transitionend",Si),t.style.overflowY="auto",Et(t,P["no-transition"]))},v3=(n,e)=>{Vh(e)?(n.style.overflowY="hidden",e.addEventListener("animationend",Si),e.addEventListener("transitionend",Si)):n.style.overflowY="auto"},A3=(n,e,t)=>{og(),e&&t!=="hidden"&&fg(t),setTimeout(()=>{n.scrollTop=0})},T3=(n,e,t)=>{var r;(r=t.showClass)!==null&&r!==void 0&&r.backdrop&&ce(n,t.showClass.backdrop),t.animation?(e.style.setProperty("opacity","0","important"),Me(e,"grid"),setTimeout(()=>{var s;(s=t.showClass)!==null&&s!==void 0&&s.popup&&ce(e,t.showClass.popup),e.style.removeProperty("opacity")},w2)):Me(e,"grid"),ce([document.documentElement,document.body],P.shown),t.heightAuto&&t.backdrop&&!t.toast&&ce([document.documentElement,document.body],P["height-auto"])};var zu={email:(n,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(n)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(n,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(n)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function I3(n){n.inputValidator||(n.input==="email"&&(n.inputValidator=zu.email),n.input==="url"&&(n.inputValidator=zu.url))}function C3(n){(!n.target||typeof n.target=="string"&&!document.querySelector(n.target)||typeof n.target!="string"&&!n.target.appendChild)&&(Xe('Target parameter is not valid, defaulting to "body"'),n.target="body")}function x3(n){I3(n),n.showLoaderOnConfirm&&!n.preConfirm&&Xe(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),C3(n),typeof n.title=="string"&&(n.title=n.title.split(`
`).join("<br />")),m4(n)}let Pt;var Ks=new WeakMap;class xe{constructor(...e){if(z7(this,Ks,Promise.resolve({isConfirmed:!1,isDenied:!1,isDismissed:!0})),typeof window>"u")return;Pt=this;const t=Object.freeze(this.constructor.argsToParams(e));this.params=t,this.isAwaitingPromise=!1,G7(Ks,this,this._main(Pt.params))}_main(e,t={}){if(u2(Object.assign({},t,e)),j.currentInstance){const i=ir.swalPromiseResolve.get(j.currentInstance),{isAwaitingPromise:a}=j.currentInstance;j.currentInstance._destroy(),a||i({isDismissed:!0}),Za()&&Gh()}j.currentInstance=Pt;const r=S3(e,t);x3(r),Object.freeze(r),j.timeout&&(j.timeout.stop(),delete j.timeout),clearTimeout(j.restoreFocusTimeout);const s=P3(Pt);return Hh(Pt,r),fe.innerParams.set(Pt,r),R3(Pt,s,r)}then(e){return Du(Ks,this).then(e)}finally(e){return Du(Ks,this).finally(e)}}const R3=(n,e,t)=>new Promise((r,s)=>{const i=a=>{n.close({isDismissed:!0,dismiss:a,isConfirmed:!1,isDenied:!1})};ir.swalPromiseResolve.set(n,r),ir.swalPromiseReject.set(n,s),e.confirmButton.onclick=()=>{Pg(n)},e.denyButton.onclick=()=>{kg(n)},e.cancelButton.onclick=()=>{Ng(n,i)},e.closeButton.onclick=()=>{i(mr.close)},jg(t,e,i),X4(j,t,i),bg(n,t),b3(t),k3(j,t,i),N3(e,t),setTimeout(()=>{e.container.scrollTop=0})}),S3=(n,e)=>{const t=d3(n),r=Object.assign({},an,e,t,n);return r.showClass=Object.assign({},an.showClass,r.showClass),r.hideClass=Object.assign({},an.hideClass,r.hideClass),r.animation===!1&&(r.showClass={backdrop:"swal2-noanimation"},r.hideClass={}),r},P3=n=>{const e={popup:ue(),container:Je(),actions:ys(),confirmButton:Bt(),denyButton:$n(),cancelButton:fr(),loader:pr(),closeButton:Xa(),validationMessage:ji(),progressSteps:Qa()};return fe.domCache.set(n,e),e},k3=(n,e,t)=>{const r=zi();Ge(r),e.timer&&(n.timeout=new h3(()=>{t("timer"),delete n.timeout},e.timer),e.timerProgressBar&&r&&(Me(r),ft(r,e,"timerProgressBar"),setTimeout(()=>{n.timeout&&n.timeout.running&&tl(e.timer)})))},N3=(n,e)=>{if(!e.toast){if(!qi(e.allowEnterKey)){Rh("allowEnterKey","preConfirm: () => false"),n.popup.focus();return}O3(n)||V3(n,e)||ra(-1,1)}},O3=n=>{const e=Array.from(n.popup.querySelectorAll("[autofocus]"));for(const t of e)if(t instanceof HTMLElement&&nt(t))return t.focus(),!0;return!1},V3=(n,e)=>e.focusDeny&&nt(n.denyButton)?(n.denyButton.focus(),!0):e.focusCancel&&nt(n.cancelButton)?(n.cancelButton.focus(),!0):e.focusConfirm&&nt(n.confirmButton)?(n.confirmButton.focus(),!0):!1;xe.prototype.disableButtons=n2;xe.prototype.enableButtons=t2;xe.prototype.getInput=Jh;xe.prototype.disableInput=s2;xe.prototype.enableInput=r2;xe.prototype.hideLoading=xi;xe.prototype.disableLoading=xi;xe.prototype.showValidationMessage=i2;xe.prototype.resetValidationMessage=o2;xe.prototype.close=on;xe.prototype.closePopup=on;xe.prototype.closeModal=on;xe.prototype.closeToast=on;xe.prototype.rejectPromise=Kh;xe.prototype.update=h2;xe.prototype._destroy=d2;Object.assign(xe,u3);Object.keys(qg).forEach(n=>{xe[n]=function(...e){if(Pt&&Pt[n])return Pt[n](...e)}});xe.DismissReason=mr;xe.version="11.26.25";const ae=xe;ae.default=ae;typeof document<"u"&&function(n,e){var t=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(t),t.styleSheet)t.styleSheet.disabled||(t.styleSheet.cssText=e);else try{t.innerHTML=e}catch{t.innerText=e}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:auto}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:auto}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');function D3(n){let e=!1;const t=()=>{n.innerHTML=`
      <div class="min-h-[80vh] flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 p-8 md:p-10 transition-all duration-300 transform">
          
          <!-- Logo & Header -->
          <div class="text-center mb-8">
            <div class="inline-flex p-3.5 bg-blue-600 text-white rounded-2xl mb-4 shadow-lg shadow-blue-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.727 2.182a10.001 10.001 0 01-11.314-11.314l2.182-.727a2 2 0 001.414-1.96l-.477-2.387a2 2 0 00-.547-1.022L7.902 4.86a2 2 0 00-3.073.364l-1.572 2.358a1 1 0 00-.126.915 13.993 13.993 0 0013.993 13.993 1 1 0 00.915-.126l2.358-1.572a2 2 0 00.364-3.073l-1.572-1.572z" />
              </svg>
            </div>
            <h1 class="text-2xl font-extrabold text-slate-900 tracking-tight" id="loginTitle">
              ${e?"Criar Conta LAMES":"Acesso ao RH LAMES"}
            </h1>
            <p class="text-slate-500 mt-2 text-sm" id="loginSub">
              ${e?"Preencha os dados abaixo para se cadastrar":"Insira suas credenciais para acessar o formulário de coleta"}
            </p>
          </div>

          <!-- Alert de Modo Demo se Firebase não estiver configurado -->
          
            <div class="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-800 space-y-1">
              <span class="font-bold flex items-center gap-1.5 text-amber-900">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                Modo de Demonstração Ativo
              </span>
              <p>Firebase não configurado localmente. Credenciais válidas para teste:</p>
              <div class="font-mono mt-1 space-y-0.5 bg-amber-100/50 p-2 rounded-lg">
                <div>• Admin: <b>admin@lames.org</b> / admin123</div>
                <div>• Colaborador: <b>colab@lames.org</b> / colab123</div>
              </div>
            </div>
          

          <!-- Form -->
          <form id="authForm" class="space-y-5">
            <div>
              <label for="email" class="block text-sm font-semibold text-slate-700 mb-1.5">E-mail Corporativo</label>
              <input type="email" id="email" required placeholder="exemplo@lames.org" 
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-sm">
            </div>

            <div>
              <label for="password" class="block text-sm font-semibold text-slate-700 mb-1.5">Senha</label>
              <input type="password" id="password" required placeholder="Sua senha" minlength="6"
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-sm">
            </div>

            ${e?`
              <div>
                <label for="confirmPassword" class="block text-sm font-semibold text-slate-700 mb-1.5">Confirmar Senha</label>
                <input type="password" id="confirmPassword" required placeholder="Repita sua senha" minlength="6"
                  class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-sm">
              </div>
            `:""}

            <button type="submit" 
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl transition duration-150 shadow-lg shadow-blue-200 mt-2 transform hover:-translate-y-0.5">
              ${e?"Registrar Conta":"Entrar no Sistema"}
            </button>
          </form>

          <!-- Toggle Mode Link -->
          <div class="mt-6 text-center">
            <button id="toggleAuthMode" class="text-sm text-blue-600 hover:text-blue-700 font-semibold focus:outline-none">
              ${e?"Já possui uma conta? Entrar":"Novo colaborador? Crie seu acesso aqui"}
            </button>
          </div>

        </div>
      </div>
    `,document.getElementById("authForm").addEventListener("submit",r),document.getElementById("toggleAuthMode").addEventListener("click",a=>{a.preventDefault(),e=!e,t()})},r=async s=>{s.preventDefault();const i=document.getElementById("email").value.trim(),a=document.getElementById("password").value;ae.fire({title:e?"Criando conta...":"Autenticando...",allowOutsideClick:!1,didOpen:()=>{ae.showLoading()}});try{if(e){const l=document.getElementById("confirmPassword").value;if(a!==l)throw new Error("As senhas não coincidem.");await $7(i,a),ae.fire({icon:"success",title:"Cadastro Realizado!",text:"Sua conta foi criada e autorizada com sucesso. Você já pode fazer login.",confirmButtonColor:"#2563eb"}).then(()=>{e=!1,t()})}else{const{role:l}=await U7(i,a);Pn||(localStorage.setItem("demo_user",i),localStorage.setItem("demo_role",l),window.location.reload()),ae.close()}}catch(l){ae.fire({icon:"error",title:"Ops! Ocorreu um erro",text:l.message||"Verifique seus dados e tente novamente.",confirmButtonColor:"#ef4444"})}};return t(),{destroy:()=>{}}}async function L3(n,e,t){let r=!1,s=null;try{if(!Pn){const m=localStorage.getItem(`demo_coleta_${e.email}`);m&&(s=JSON.parse(m))}}catch(m){console.error("Erro ao carregar dados do usuário:",m)}n.innerHTML=`
    <!-- Top Nav Bar -->
    <div class="max-w-5xl mx-auto mb-6 flex justify-between items-center bg-white p-4 px-6 rounded-2xl shadow-sm border border-slate-100">
      <div class="flex items-center gap-3">
        <span class="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
        <span class="text-sm font-medium text-slate-600">Sessão ativa: <strong class="text-slate-800 font-bold">${e.email}</strong></span>
        <span class="text-xs bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full font-semibold capitalize">${t}</span>
      </div>
      <div class="flex items-center gap-3">
        ${t==="admin"?`
          <button id="btnIrAdmin" class="bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-sm px-4 py-2 rounded-xl transition duration-150 flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            Painel Admin
          </button>
        `:""}
        <button id="btnLogout" class="bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-700 font-bold text-sm px-4 py-2 rounded-xl transition duration-150 flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sair
        </button>
      </div>
    </div>

    <!-- Main Container -->
    <div class="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100">
      <header class="mb-12 pb-6 border-b border-slate-100 flex items-center gap-4">
        <div class="p-3 bg-blue-600 text-white rounded-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div>
          <h1 class="text-3xl font-extrabold text-slate-900 tracking-tight">Cadastro RH LAMES</h1>
          <p class="text-slate-600 mt-1">Por favor, preencha todos os campos com atenção para o registro no sistema Coleta.</p>
        </div>
      </header>

      <form id="coletaForm" class="space-y-12">
        <!-- 1. Identificação -->
        <section class="space-y-6">
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>
            <h2 class="text-2xl font-bold text-slate-900 tracking-tight">1. Identificação</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            <div>
              <label for="tipo_integrante" class="block text-sm font-semibold text-slate-700 mb-1.5">Tipo de Integrante</label>
              <select id="tipo_integrante" name="tipo_integrante" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base">
                <option value="" disabled selected>Selecione uma opção</option>
                <option value="servidor">Servidor</option>
                <option value="aluno_interno">Aluno Interno</option>
                <option value="aluno_externo">Aluno Externo</option>
                <option value="bolsista">Bolsista</option>
                <option value="terceirizado">Terceirizado</option>
              </select>
            </div>
          </div>
        </section>

        <!-- 2. Dados Pessoais -->
        <section class="space-y-6">
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <h2 class="text-2xl font-bold text-slate-900 tracking-tight">2. Dados Pessoais</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            <div class="md:col-span-2">
              <label for="nome_completo" class="block text-sm font-semibold text-slate-700 mb-1.5">Nome Completo</label>
              <input type="text" id="nome_completo" name="nome_completo" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
                placeholder="Ex: Antônio da Silva">
            </div>
            <div>
              <label for="cpf" class="block text-sm font-semibold text-slate-700 mb-1.5">CPF</label>
              <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00"
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base">
            </div>
            <div>
              <label for="rg" class="block text-sm font-semibold text-slate-700 mb-1.5">RG / Identidade</label>
              <input type="text" id="rg" name="rg" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
                placeholder="Ex: MG-12.345.678">
            </div>
            <div class="md:col-span-2">
              <label for="endereco" class="block text-sm font-semibold text-slate-700 mb-1.5">Endereço Residencial</label>
              <input type="text" id="endereco" name="endereco" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
                placeholder="Rua, Número, Bairro, Cidade - Estado">
            </div>
            <div>
              <label for="email" class="block text-sm font-semibold text-slate-700 mb-1.5">E-mail Corporativo</label>
              <input type="email" id="email" name="email" value="${e.email}" readonly disabled
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-100 placeholder-slate-400 focus:outline-none transition duration-150 ease-in-out text-base text-slate-500 cursor-not-allowed">
            </div>
            <div>
              <label for="telefone" class="block text-sm font-semibold text-slate-700 mb-1.5">Telefone de Contato</label>
              <input type="text" id="telefone" name="telefone" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
                placeholder="(00) 00000-0000">
            </div>
          </div>
        </section>

        <!-- 3. Saúde e Emergência -->
        <section class="space-y-6">
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h2 class="text-2xl font-bold text-slate-900 tracking-tight">3. Saúde e Emergência</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">
            <div>
              <label for="grupo_sanguineo" class="block text-sm font-semibold text-slate-700 mb-1.5">Grupo Sanguíneo</label>
              <select id="grupo_sanguineo" name="grupo_sanguineo" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base">
                <option value="" disabled selected>Selecione</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div class="md:col-span-2">
              <label for="alergias" class="block text-sm font-semibold text-slate-700 mb-1.5">Alergias</label>
              <input type="text" id="alergias" name="alergias" placeholder="Caso possua, especifique, caso contrário digite Nenhuma" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base">
            </div>
            <div class="md:col-span-3">
              <label for="contato_emergencia" class="block text-sm font-semibold text-slate-700 mb-1.5">Contato de Emergência (Nome e Tel)</label>
              <input type="text" id="contato_emergencia" name="contato_emergencia" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
                placeholder="Ex: Maria (Mãe) - (00) 99999-9999">
            </div>
          </div>
        </section>

        <!-- 4. Formação Acadêmica -->
        <section class="space-y-6">
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.825-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            <h2 class="text-2xl font-bold text-slate-900 tracking-tight">4. Formação Acadêmica</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            <div>
              <label for="titulacao" class="block text-sm font-semibold text-slate-700 mb-1.5">Titulação Máxima</label>
              <input type="text" id="titulacao" name="titulacao" required placeholder="Ex: Mestre, Doutor"
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base">
            </div>
            <div>
              <label for="local_formacao" class="block text-sm font-semibold text-slate-700 mb-1.5">Local de Formação</label>
              <input type="text" id="local_formacao" name="local_formacao" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
                placeholder="Nome da Instituição">
            </div>
            <div>
              <label for="ano_conclusao" class="block text-sm font-semibold text-slate-700 mb-1.5">Ano de Conclusão</label>
              <input type="number" id="ano_conclusao" name="ano_conclusao" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
                placeholder="Ex: 2023">
            </div>
            <div>
              <label for="diploma" class="block text-sm font-semibold text-slate-700 mb-1.5">Anexar Diploma (PDF/JPG) ${s!=null&&s.diplomaUrl?'<span class="text-green-600 font-normal text-xs">(Já enviado)</span>':""}</label>
              <div class="w-full rounded-xl border border-slate-200 p-1.5 bg-slate-50 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition duration-150 ease-in-out">
                <input type="file" id="diploma" name="diploma" accept=".pdf,.jpg,.jpeg"
                  class="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer">
              </div>
              ${s!=null&&s.diplomaUrl?`
                <a href="${s.diplomaUrl}" target="_blank" class="text-xs text-blue-600 hover:underline mt-1.5 inline-block font-semibold">Visualizar arquivo atual</a>
              `:""}
            </div>
          </div>
        </section>

        <!-- 5. Informações do Coleta -->
        <section class="bg-blue-50 p-8 rounded-2xl border border-blue-100 space-y-6">
          <div class="flex items-center gap-3 border-b border-blue-100 pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h2 class="text-2xl font-bold text-blue-900 tracking-tight">5. Informações do Coleta (Anual)</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            <div>
              <label for="vinculo" class="block text-sm font-semibold text-blue-900 mb-1.5">Vínculo</label>
              <input type="text" id="vinculo" name="vinculo" required
                class="w-full rounded-xl border border-blue-200 p-3 bg-white placeholder-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition duration-150 ease-in-out text-base">
            </div>
            <div>
              <label for="prazo_vinculo" class="block text-sm font-semibold text-blue-900 mb-1.5">Prazo do Vínculo</label>
              <input type="text" id="prazo_vinculo" name="prazo_vinculo" required
                class="w-full rounded-xl border border-blue-200 p-3 bg-white placeholder-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition duration-150 ease-in-out text-base">
            </div>
            <div>
              <label for="origem_vinculo" class="block text-sm font-semibold text-blue-900 mb-1.5">Origem do Vínculo</label>
              <input type="text" id="origem_vinculo" name="origem_vinculo" required
                class="w-full rounded-xl border border-blue-200 p-3 bg-white placeholder-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition duration-150 ease-in-out text-base">
            </div>
            <div>
              <label for="cargo_nivel" class="block text-sm font-semibold text-blue-900 mb-1.5">Cargo / Nível</label>
              <input type="text" id="cargo_nivel" name="cargo_nivel" required
                class="w-full rounded-xl border border-blue-200 p-3 bg-white placeholder-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition duration-150 ease-in-out text-base">
            </div>
            <div>
              <label for="situacao_atual" class="block text-sm font-semibold text-blue-900 mb-1.5">Situação Atual</label>
              <input type="text" id="situacao_atual" name="situacao_atual" required
                class="w-full rounded-xl border border-blue-200 p-3 bg-white placeholder-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition duration-150 ease-in-out text-base">
            </div>
            <div class="flex items-center gap-3 h-full pt-6">
              <input type="checkbox" id="e_docente" name="e_docente"
                class="w-5 h-5 rounded border-blue-300 text-blue-700 shadow-sm focus:ring-blue-500 focus:ring-offset-blue-50">
              <label for="e_docente" class="text-base font-semibold text-blue-950">É Docente?</label>
            </div>
            <div class="md:col-span-2">
              <label for="orientador" class="block text-sm font-semibold text-blue-900 mb-1.5">Orientador (se aplicável)</label>
              <input type="text" id="orientador" name="orientador" placeholder="Nome do Orientador se aplicável"
                class="w-full rounded-xl border border-blue-200 p-3 bg-white placeholder-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition duration-150 ease-in-out text-base">
            </div>
          </div>
        </section>

        <!-- Footer Buttons -->
        <footer class="flex justify-end gap-4 pt-10 border-t border-slate-100 mt-12">
          <button type="button" id="btnCancelar"
            class="bg-slate-100 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition duration-150 shadow-sm">
            Cancelar
          </button>
          <button type="submit" id="btnSalvar"
            class="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition duration-150 shadow-lg shadow-blue-200 transform hover:-translate-y-0.5">
            Salvar Cadastro
          </button>
        </footer>

      </form>
    </div>
  `;const i=document.getElementById("coletaForm");s&&Object.keys(s).forEach(m=>{const _=i.elements[m];_&&(_.type==="checkbox"?_.checked=!!s[m]:_.type!=="file"&&(_.value=s[m]))}),document.getElementById("btnLogout").addEventListener("click",async()=>{(await ae.fire({title:"Deseja sair?",text:"Você será desconectado do sistema.",icon:"question",showCancelButton:!0,confirmButtonText:"Sair",cancelButtonText:"Permanecer",confirmButtonColor:"#ef4444",cancelButtonColor:"#94a3b8"})).isConfirmed&&(localStorage.removeItem("demo_user"),localStorage.removeItem("demo_role"),window.location.reload())});const l=document.getElementById("btnIrAdmin");l&&l.addEventListener("click",()=>Gn("admin"));const u=document.getElementById("diploma");return u.addEventListener("change",function(){const m=this.files[0];if(m){if(!["application/pdf","image/jpeg","image/jpg"].includes(m.type)){ae.fire({icon:"error",title:"Formato não permitido",text:"Por favor, selecione apenas arquivos PDF ou imagens JPG/JPEG.",confirmButtonColor:"#ef4444"}),this.value="";return}m.size>5242880&&(ae.fire({icon:"error",title:"Arquivo muito pesado",text:"O tamanho máximo permitido é de 5MB. O seu arquivo possui "+(m.size/(1024*1024)).toFixed(2)+"MB.",confirmButtonColor:"#ef4444"}),this.value="")}}),document.getElementById("btnCancelar").addEventListener("click",()=>{ae.fire({title:"Deseja cancelar?",text:"As informações não salvas serão perdidas.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Sim, cancelar",cancelButtonText:"Continuar preenchendo"}).then(m=>{m.isConfirmed&&(i.reset(),s&&Object.keys(s).forEach(_=>{const S=i.elements[_];S&&(S.type==="checkbox"?S.checked=!!s[_]:S.type!=="file"&&(S.value=s[_]))}),window.scrollTo({top:0,behavior:"smooth"}))})}),i.addEventListener("submit",async m=>{if(m.preventDefault(),!r){r=!0,ae.fire({title:"Enviando dados...",text:"Aguarde enquanto registramos as informações no sistema.",allowOutsideClick:!1,didOpen:()=>{ae.showLoading()}});try{const _={},S=new FormData(i);for(const[U,L]of S.entries())U!=="diploma"&&(_[U]=L);_.e_docente=i.elements.e_docente.checked,_.email=e.email.toLowerCase().trim(),_.lastUpdated=new Date().toISOString();const O=u.files[0];let D=(s==null?void 0:s.diplomaUrl)||"";if(O&&(Pn||(D="https://example.com/mock-diploma.pdf")),_.diplomaUrl=D,!Pn){localStorage.setItem(`demo_coleta_${e.email}`,JSON.stringify(_));const U=JSON.parse(localStorage.getItem("all_demo_coletas")||"{}");U[e.email]=_,localStorage.setItem("all_demo_coletas",JSON.stringify(U))}s=_,await ae.fire({icon:"success",title:"Cadastro Realizado!",text:"Os dados do colaborador foram salvos com sucesso no banco do LAMES.",confirmButtonColor:"#2563eb",confirmButtonText:"Ótimo!"})}catch(_){console.error(_),ae.fire({icon:"error",title:"Ops! Algo deu errado",text:_.message||"Não foi possível conectar ao servidor. Tente novamente em instantes.",confirmButtonColor:"#ef4444"})}finally{r=!1}}}),{destroy:()=>{}}}async function M3(n,e,t){let r="registros",s="",i="",a=[],l=[];localStorage.getItem("demo_whitelist")||localStorage.setItem("demo_whitelist",JSON.stringify({"admin@lames.org":{email:"admin@lames.org",role:"admin"},"colab@lames.org":{email:"colab@lames.org",role:"colaborador"}})),localStorage.getItem("all_demo_coletas")||localStorage.setItem("all_demo_coletas",JSON.stringify({"colab@lames.org":{nome_completo:"Antônio da Silva",tipo_integrante:"bolsista",cpf:"111.222.333-44",rg:"MG-12.345.678",endereco:"Rua das Flores, 123, Rio de Janeiro - RJ",email:"colab@lames.org",telefone:"(21) 98888-7777",grupo_sanguineo:"O+",alergias:"Nenhuma",contato_emergencia:"Maria (Mãe) - (21) 99999-8888",titulacao:"Mestre",local_formacao:"FIOCRUZ",ano_conclusao:"2023",diplomaUrl:"https://example.com/mock-diploma.pdf",vinculo:"Bolsista de Mestrado",prazo_vinculo:"24 meses",origem_vinculo:"CNPq",cargo_nivel:"Nível I",situacao_atual:"Ativo",e_docente:!1,orientador:"Dr. João Medeiros",lastUpdated:new Date().toISOString()}}));const u=async()=>{try{if(!Pn){const L=JSON.parse(localStorage.getItem("demo_whitelist")||"{}");l=Object.values(L);const H=JSON.parse(localStorage.getItem("all_demo_coletas")||"{}");a=Object.values(H)}}catch(L){console.error("Erro ao buscar dados do banco:",L),ae.fire({icon:"error",title:"Erro ao carregar dados",text:"Não foi possível ler as informações do Firebase. Verifique suas regras e conexão.",confirmButtonColor:"#ef4444"})}},f=()=>{n.innerHTML=`
      <!-- Top Nav Bar -->
      <div class="max-w-6xl mx-auto mb-6 flex justify-between items-center bg-white p-4 px-6 rounded-2xl shadow-sm border border-slate-100">
        <div class="flex items-center gap-3">
          <span class="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
          <span class="text-sm font-medium text-slate-600">Administrador: <strong class="text-slate-800 font-bold">${e.email}</strong></span>
          <span class="text-xs bg-red-50 text-red-700 px-2.5 py-0.5 rounded-full font-semibold capitalize">${t}</span>
        </div>
        <div class="flex items-center gap-3">
          <button id="btnPreencherForm" class="bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-sm px-4 py-2 rounded-xl transition duration-150 flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Preencher Formulário
          </button>
          <button id="btnLogout" class="bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-700 font-bold text-sm px-4 py-2 rounded-xl transition duration-150 flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sair
          </button>
        </div>
      </div>

      <!-- Main Panel Container -->
      <div class="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        
        <!-- Header & Tabs -->
        <div class="bg-slate-50 border-b border-slate-100 p-6 pb-0">
          <div class="mb-4">
            <h1 class="text-2xl font-extrabold text-slate-900 tracking-tight">Painel de Administração LAMES</h1>
            <p class="text-slate-500 text-sm mt-0.5">Gerencie os acessos ao sistema e visualize as respostas do formulário de coleta.</p>
          </div>
          
          <div class="flex gap-2">
            <button id="tabRegistros" class="px-5 py-3 font-bold text-sm border-b-2 transition duration-150 ${r==="registros"?"border-blue-600 text-blue-600":"border-transparent text-slate-500 hover:text-slate-700"}">
              Registros Coleta (${a.length})
            </button>
            <button id="tabWhitelist" class="px-5 py-3 font-bold text-sm border-b-2 transition duration-150 ${r==="whitelist"?"border-blue-600 text-blue-600":"border-transparent text-slate-500 hover:text-slate-700"}">
              Gerenciar Acessos (${l.length})
            </button>
          </div>
        </div>

        <div class="p-8">
          ${r==="registros"?m():_()}
        </div>
      </div>
    `,document.getElementById("btnPreencherForm").addEventListener("click",()=>Gn("formulario")),document.getElementById("btnLogout").addEventListener("click",async()=>{(await ae.fire({title:"Deseja sair?",icon:"question",showCancelButton:!0,confirmButtonText:"Sair",cancelButtonText:"Permanecer",confirmButtonColor:"#ef4444",cancelButtonColor:"#94a3b8"})).isConfirmed&&(localStorage.removeItem("demo_user"),localStorage.removeItem("demo_role"),window.location.reload())}),document.getElementById("tabRegistros").addEventListener("click",()=>{r="registros",f()}),document.getElementById("tabWhitelist").addEventListener("click",()=>{r="whitelist",f()}),S()},m=()=>{const L=a.filter(H=>{const re=(H.nome_completo||"").toLowerCase(),de=(H.email||"").toLowerCase(),ne=re.includes(s.toLowerCase())||de.includes(s.toLowerCase()),he=i===""||H.tipo_integrante===i;return ne&&he});return`
      <!-- Filters bar -->
      <div class="flex flex-col md:flex-row gap-4 mb-6">
        <div class="flex-1">
          <input type="text" id="searchBar" value="${s}" placeholder="Buscar por nome ou e-mail..."
            class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 text-sm">
        </div>
        <div class="w-full md:w-64">
          <select id="filterTypeSelect"
            class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 text-sm">
            <option value="">Todos os Integrantes</option>
            <option value="servidor" ${i==="servidor"?"selected":""}>Servidor</option>
            <option value="aluno_interno" ${i==="aluno_interno"?"selected":""}>Aluno Interno</option>
            <option value="aluno_externo" ${i==="aluno_externo"?"selected":""}>Aluno Externo</option>
            <option value="bolsista" ${i==="bolsista"?"selected":""}>Bolsista</option>
            <option value="terceirizado" ${i==="terceirizado"?"selected":""}>Terceirizado</option>
          </select>
        </div>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto border border-slate-100 rounded-2xl shadow-sm">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="bg-slate-50 border-b border-slate-100 text-slate-600 font-semibold">
              <th class="p-4 px-6">Nome Completo</th>
              <th class="p-4 px-6">E-mail</th>
              <th class="p-4 px-6">Integrante</th>
              <th class="p-4 px-6">Telefone</th>
              <th class="p-4 px-6">Atualizado em</th>
              <th class="p-4 px-6 text-right">Ações</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            ${L.length===0?`
              <tr>
                <td colspan="6" class="text-center p-12 text-slate-400">Nenhum registro encontrado.</td>
              </tr>
            `:L.map(H=>`
              <tr class="hover:bg-slate-50/50 transition">
                <td class="p-4 px-6 font-bold text-slate-900">${H.nome_completo||"Não informado"}</td>
                <td class="p-4 px-6 font-mono text-xs">${H.email}</td>
                <td class="p-4 px-6"><span class="bg-slate-100 text-slate-700 text-xs px-2.5 py-0.5 rounded-full capitalize">${H.tipo_integrante||"-"}</span></td>
                <td class="p-4 px-6">${H.telefone||"-"}</td>
                <td class="p-4 px-6 text-slate-500 text-xs">${H.lastUpdated?new Date(H.lastUpdated).toLocaleString("pt-BR"):"-"}</td>
                <td class="p-4 px-6 text-right">
                  <button data-email="${H.email}" class="btnVerDetalhes bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-3.5 py-2 rounded-lg transition duration-150">
                    Ver Ficha
                  </button>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `},_=()=>`
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Left: Form to add to whitelist -->
        <div class="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
          <h3 class="font-bold text-slate-800 text-base mb-4 flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            Autorizar Novo Usuário
          </h3>
          <form id="addWhitelistForm" class="space-y-4">
            <div>
              <label for="wlEmail" class="block text-xs font-semibold text-slate-600 mb-1">E-mail do Colaborador</label>
              <input type="email" id="wlEmail" required placeholder="colaborador@lames.org"
                class="w-full rounded-xl border border-slate-200 p-3 bg-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 text-sm">
            </div>
            <div>
              <label for="wlRole" class="block text-xs font-semibold text-slate-600 mb-1">Perfil de Acesso</label>
              <select id="wlRole" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 text-sm">
                <option value="colaborador">Colaborador (Apenas envia form)</option>
                <option value="admin">Administrador (Acesso total)</option>
              </select>
            </div>
            <button type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition duration-150 shadow-md shadow-blue-100 mt-2">
              Adicionar E-mail
            </button>
          </form>
        </div>

        <!-- Right: Whitelist Table -->
        <div class="lg:col-span-2">
          <h3 class="font-bold text-slate-800 text-base mb-4 flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            E-mails Habilitados no Sistema
          </h3>
          <div class="overflow-x-auto border border-slate-100 rounded-2xl shadow-sm">
            <table class="w-full text-left border-collapse text-sm">
              <thead>
                <tr class="bg-slate-50 border-b border-slate-100 text-slate-600 font-semibold">
                  <th class="p-4 px-6">E-mail Autorizado</th>
                  <th class="p-4 px-6">Perfil</th>
                  <th class="p-4 px-6 text-right">Ações</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-700">
                ${l.length===0?`
                  <tr>
                    <td colspan="3" class="text-center p-8 text-slate-400">Nenhum e-mail autorizado cadastrado.</td>
                  </tr>
                `:l.map(L=>`
                  <tr class="hover:bg-slate-50/50 transition">
                    <td class="p-4 px-6 font-mono text-xs text-slate-900 font-bold">${L.email}</td>
                    <td class="p-4 px-6">
                      <span class="text-xs px-2.5 py-0.5 rounded-full font-semibold ${L.role==="admin"?"bg-red-50 text-red-700 border border-red-100":"bg-blue-50 text-blue-700 border border-blue-100"}">
                        ${L.role==="admin"?"Administrador":"Colaborador"}
                      </span>
                    </td>
                    <td class="p-4 px-6 text-right">
                      <button data-email="${L.email}" class="btnRemoverWL text-red-600 hover:text-red-700 font-bold text-xs hover:underline focus:outline-none transition duration-150">
                        Remover
                      </button>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    `,S=()=>{r==="registros"?(document.getElementById("searchBar").addEventListener("input",re=>{s=re.target.value,n.querySelector("tbody").outerHTML=O(),D()}),document.getElementById("filterTypeSelect").addEventListener("change",re=>{i=re.target.value,n.querySelector("tbody").outerHTML=O(),D()}),D()):r==="whitelist"&&(document.getElementById("addWhitelistForm").addEventListener("submit",async re=>{re.preventDefault();const de=document.getElementById("wlEmail"),ne=document.getElementById("wlRole"),he=de.value.toLowerCase().trim(),we=ne.value;ae.fire({title:"Adicionando e-mail...",allowOutsideClick:!1,didOpen:()=>ae.showLoading()});try{if(!Pn){const A=JSON.parse(localStorage.getItem("demo_whitelist")||"{}");A[he]={email:he,role:we},localStorage.setItem("demo_whitelist",JSON.stringify(A))}await u(),ae.fire({icon:"success",title:"Autorizado!",text:`O e-mail ${he} foi autorizado como ${we}.`,confirmButtonColor:"#2563eb"}),f()}catch(A){ae.fire({icon:"error",title:"Ops! Ocorreu um erro",text:A.message||"Erro ao gravar informações.",confirmButtonColor:"#ef4444"})}}),n.querySelectorAll(".btnRemoverWL").forEach(re=>{re.addEventListener("click",async de=>{const ne=de.target.getAttribute("data-email");if(ne===e.email.toLowerCase()){ae.fire({icon:"warning",title:"Ação Bloqueada",text:"Você não pode remover o seu próprio e-mail da whitelist.",confirmButtonColor:"#ef4444"});return}if((await ae.fire({title:"Deseja revogar o acesso?",text:`O e-mail ${ne} não poderá mais fazer login no sistema.`,icon:"warning",showCancelButton:!0,confirmButtonText:"Revogar Acesso",cancelButtonText:"Manter",confirmButtonColor:"#ef4444",cancelButtonColor:"#94a3b8"})).isConfirmed){ae.fire({title:"Removendo...",allowOutsideClick:!1,didOpen:()=>ae.showLoading()});try{if(!Pn){const we=JSON.parse(localStorage.getItem("demo_whitelist")||"{}");delete we[ne],localStorage.setItem("demo_whitelist",JSON.stringify(we))}await u(),ae.fire({icon:"success",title:"Acesso Revogado!",text:`O e-mail ${ne} foi removido da whitelist.`,confirmButtonColor:"#2563eb"}),f()}catch(we){ae.fire({icon:"error",title:"Ops! Ocorreu um erro",text:we.message||"Erro ao remover acesso.",confirmButtonColor:"#ef4444"})}}})}))},O=()=>{const L=a.filter(H=>{const re=(H.nome_completo||"").toLowerCase(),de=(H.email||"").toLowerCase(),ne=re.includes(s.toLowerCase())||de.includes(s.toLowerCase()),he=i===""||H.tipo_integrante===i;return ne&&he});return`
      <tbody class="divide-y divide-slate-100 text-slate-700">
        ${L.length===0?`
          <tr>
            <td colspan="6" class="text-center p-12 text-slate-400">Nenhum registro encontrado.</td>
          </tr>
        `:L.map(H=>`
          <tr class="hover:bg-slate-50/50 transition">
            <td class="p-4 px-6 font-bold text-slate-900">${H.nome_completo||"Não informado"}</td>
            <td class="p-4 px-6 font-mono text-xs">${H.email}</td>
            <td class="p-4 px-6"><span class="bg-slate-100 text-slate-700 text-xs px-2.5 py-0.5 rounded-full capitalize">${H.tipo_integrante||"-"}</span></td>
            <td class="p-4 px-6">${H.telefone||"-"}</td>
            <td class="p-4 px-6 text-slate-500 text-xs">${H.lastUpdated?new Date(H.lastUpdated).toLocaleString("pt-BR"):"-"}</td>
            <td class="p-4 px-6 text-right">
              <button data-email="${H.email}" class="btnVerDetalhes bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-3.5 py-2 rounded-lg transition duration-150">
                Ver Ficha
              </button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    `},D=()=>{n.querySelectorAll(".btnVerDetalhes").forEach(H=>{H.addEventListener("click",re=>{const de=re.target.getAttribute("data-email"),ne=a.find(he=>he.email===de);ne&&U(ne)})})},U=L=>{ae.fire({title:`<span class="text-lg font-extrabold text-slate-900">Ficha Cadastral: ${L.nome_completo||"Colaborador"}</span>`,html:`
        <div class="text-left text-sm max-h-[70vh] overflow-y-auto pr-2 space-y-6 pt-4 font-sans leading-relaxed">
          
          <!-- Secção 1 -->
          <div>
            <h4 class="font-bold text-blue-700 text-xs uppercase tracking-wider mb-2 border-b pb-1">1. Identificação e Contato</h4>
            <div class="grid grid-cols-2 gap-y-2 text-xs">
              <div><b class="text-slate-500">Nome:</b> <span class="text-slate-800 font-bold">${L.nome_completo||"-"}</span></div>
              <div><b class="text-slate-500">Tipo de Integrante:</b> <span class="text-slate-800 capitalize font-bold">${L.tipo_integrante||"-"}</span></div>
              <div><b class="text-slate-500">CPF:</b> <span class="text-slate-800">${L.cpf||"-"}</span></div>
              <div><b class="text-slate-500">RG:</b> <span class="text-slate-800">${L.rg||"-"}</span></div>
              <div class="col-span-2"><b class="text-slate-500">Endereço:</b> <span class="text-slate-800">${L.endereco||"-"}</span></div>
              <div><b class="text-slate-500">E-mail:</b> <span class="text-slate-800 font-mono">${L.email}</span></div>
              <div><b class="text-slate-500">Telefone:</b> <span class="text-slate-800">${L.telefone||"-"}</span></div>
            </div>
          </div>

          <!-- Secção 2 -->
          <div>
            <h4 class="font-bold text-blue-700 text-xs uppercase tracking-wider mb-2 border-b pb-1">2. Saúde e Emergência</h4>
            <div class="grid grid-cols-2 gap-y-2 text-xs">
              <div><b class="text-slate-500">Grupo Sanguíneo:</b> <span class="text-slate-800 font-bold">${L.grupo_sanguineo||"-"}</span></div>
              <div><b class="text-slate-500">Alergias:</b> <span class="text-slate-800">${L.alergias||"-"}</span></div>
              <div class="col-span-2"><b class="text-slate-500">Contato de Emergência:</b> <span class="text-slate-800 font-semibold">${L.contato_emergencia||"-"}</span></div>
            </div>
          </div>

          <!-- Secção 3 -->
          <div>
            <h4 class="font-bold text-blue-700 text-xs uppercase tracking-wider mb-2 border-b pb-1">3. Formação Acadêmica</h4>
            <div class="grid grid-cols-2 gap-y-2 text-xs">
              <div><b class="text-slate-500">Titulação Máxima:</b> <span class="text-slate-800">${L.titulacao||"-"}</span></div>
              <div><b class="text-slate-500">Local de Formação:</b> <span class="text-slate-800">${L.local_formacao||"-"}</span></div>
              <div><b class="text-slate-500">Ano de Conclusão:</b> <span class="text-slate-800">${L.ano_conclusao||"-"}</span></div>
              <div>
                <b class="text-slate-500">Diploma:</b> 
                ${L.diplomaUrl?`
                  <a href="${L.diplomaUrl}" target="_blank" class="text-blue-600 font-semibold hover:underline inline-flex items-center gap-0.5">Visualizar Anexo</a>
                `:'<span class="text-slate-400">Não anexado</span>'}
              </div>
            </div>
          </div>

          <!-- Secção 4 -->
          <div>
            <h4 class="font-bold text-blue-700 text-xs uppercase tracking-wider mb-2 border-b pb-1">4. Informações do Coleta (Anual)</h4>
            <div class="grid grid-cols-2 gap-y-2 text-xs font-sans">
              <div><b class="text-slate-500">Vínculo:</b> <span class="text-slate-800">${L.vinculo||"-"}</span></div>
              <div><b class="text-slate-500">Prazo do Vínculo:</b> <span class="text-slate-800">${L.prazo_vinculo||"-"}</span></div>
              <div><b class="text-slate-500">Origem:</b> <span class="text-slate-800">${L.origem_vinculo||"-"}</span></div>
              <div><b class="text-slate-500">Cargo/Nível:</b> <span class="text-slate-800">${L.cargo_nivel||"-"}</span></div>
              <div><b class="text-slate-500">Situação:</b> <span class="text-slate-800">${L.situacao_atual||"-"}</span></div>
              <div><b class="text-slate-500">Docente?</b> <span class="text-slate-800">${L.e_docente?"Sim":"Não"}</span></div>
              <div class="col-span-2"><b class="text-slate-500">Orientador:</b> <span class="text-slate-800">${L.orientador||"-"}</span></div>
            </div>
          </div>

        </div>
      `,width:"600px",confirmButtonColor:"#2563eb",confirmButtonText:"Fechar Ficha"})};return ae.fire({title:"Carregando painel...",allowOutsideClick:!1,didOpen:()=>ae.showLoading()}),await u(),ae.close(),f(),{destroy:()=>{}}}za("login",D3);za("formulario",L3);za("admin",M3);document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("app");n?q7(n):console.error("Elemento container #app não encontrado no index.html.")});
