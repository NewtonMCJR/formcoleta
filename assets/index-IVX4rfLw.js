var km=Object.defineProperty;var Om=(n,e,t)=>e in n?km(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var _=(n,e,t)=>Om(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Nm=()=>{};var q1={};/**
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
 */const Jd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Dm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Zd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,l=o?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,p=i>>2,g=(i&3)<<4|l>>4;let x=(l&15)<<2|h>>6,S=h&63;c||(S=64,o||(x=64)),r.push(t[p],t[g],t[x],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Jd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Dm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new Lm;const x=i<<2|l>>4;if(r.push(x),h!==64){const S=l<<4&240|h>>2;if(r.push(S),g!==64){const R=h<<6&192|g;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Lm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vm=function(n){const e=Jd(n);return Zd.encodeByteArray(e,!0)},Go=function(n){return Vm(n).replace(/\./g,"")},e2=function(n){try{return Zd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Mm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bm=()=>Mm().__FIREBASE_DEFAULTS__,Fm=()=>{if(typeof process>"u"||typeof q1>"u")return;const n=q1.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Um=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&e2(n[1]);return e&&JSON.parse(e)},Ia=()=>{try{return Nm()||Bm()||Fm()||Um()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},t2=n=>{var e,t;return(t=(e=Ia())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},n2=n=>{const e=t2(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},r2=()=>{var n;return(n=Ia())==null?void 0:n.config},s2=n=>{var e;return(e=Ia())==null?void 0:e[`_${n}`]};/**
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
 */class i2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function o2(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Go(JSON.stringify(t)),Go(JSON.stringify(o)),""].join(".")}/**
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
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $m(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function Hm(){var e;const n=(e=Ia())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function zm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gm(){const n=ct();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Wm(){return!Hm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Km(){try{return typeof indexedDB=="object"}catch{return!1}}function Ym(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Qm="FirebaseError";class hn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Qm,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fi.prototype.create)}}class Fi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Xm(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new hn(s,l,r)}}function Xm(n,e){return n.replace(Jm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Jm=/\{\$([^}]+)}/g;function Zm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Or(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(z1(i)&&z1(o)){if(!Or(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function z1(n){return n!==null&&typeof n=="object"}/**
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
 */function Ui(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ei(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ti(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function e6(n,e){const t=new t6(n,e);return t.subscribe.bind(t)}class t6{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");n6(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Il),s.error===void 0&&(s.error=Il),s.complete===void 0&&(s.complete=Il);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function n6(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Il(){}/**
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
 */function Ye(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Ur(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Tc(n){return(await fetch(n,{credentials:"include"})).ok}class er{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Tr="[DEFAULT]";/**
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
 */class r6{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new i2;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(i6(e))try{this.getOrInitializeService({instanceIdentifier:Tr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tr){return this.instances.has(e)}getOptions(e=Tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:s6(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tr){return this.component?this.component.multipleInstances?e:Tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function s6(n){return n===Tr?void 0:n}function i6(n){return n.instantiationMode==="EAGER"}/**
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
 */class o6{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new r6(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(pe||(pe={}));const a6={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},l6=pe.INFO,c6={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},u6=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=c6[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xc{constructor(e){this.name=e,this._logLevel=l6,this._logHandler=u6,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?a6[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const h6=(n,e)=>e.some(t=>n instanceof t);let G1,W1;function d6(){return G1||(G1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f6(){return W1||(W1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const a2=new WeakMap,Gl=new WeakMap,l2=new WeakMap,Cl=new WeakMap,Ic=new WeakMap;function p6(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Wn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&a2.set(t,n)}).catch(()=>{}),Ic.set(e,n),e}function m6(n){if(Gl.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Gl.set(n,e)}let Wl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Gl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||l2.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Wn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function g6(n){Wl=n(Wl)}function w6(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Sl(this),e,...t);return l2.set(r,e.sort?e.sort():[e]),Wn(r)}:f6().includes(n)?function(...e){return n.apply(Sl(this),e),Wn(a2.get(this))}:function(...e){return Wn(n.apply(Sl(this),e))}}function _6(n){return typeof n=="function"?w6(n):(n instanceof IDBTransaction&&m6(n),h6(n,d6())?new Proxy(n,Wl):n)}function Wn(n){if(n instanceof IDBRequest)return p6(n);if(Cl.has(n))return Cl.get(n);const e=_6(n);return e!==n&&(Cl.set(n,e),Ic.set(e,n)),e}const Sl=n=>Ic.get(n);function b6(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),l=Wn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Wn(o.result),c.oldVersion,c.newVersion,Wn(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const y6=["get","getKey","getAll","getAllKeys","count"],v6=["put","add","delete","clear"],Rl=new Map;function K1(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Rl.get(e))return Rl.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=v6.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||y6.includes(t)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return Rl.set(e,i),i}g6(n=>({...n,get:(e,t,r)=>K1(e,t)||n.get(e,t,r),has:(e,t)=>!!K1(e,t)||n.has(e,t)}));/**
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
 */class E6{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(A6(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function A6(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kl="@firebase/app",Y1="0.15.0";/**
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
 */const En=new xc("@firebase/app"),T6="@firebase/app-compat",x6="@firebase/analytics-compat",I6="@firebase/analytics",C6="@firebase/app-check-compat",S6="@firebase/app-check",R6="@firebase/auth",P6="@firebase/auth-compat",k6="@firebase/database",O6="@firebase/data-connect",N6="@firebase/database-compat",D6="@firebase/functions",L6="@firebase/functions-compat",V6="@firebase/installations",M6="@firebase/installations-compat",B6="@firebase/messaging",F6="@firebase/messaging-compat",U6="@firebase/performance",$6="@firebase/performance-compat",H6="@firebase/remote-config",j6="@firebase/remote-config-compat",q6="@firebase/storage",z6="@firebase/storage-compat",G6="@firebase/firestore",W6="@firebase/ai",K6="@firebase/firestore-compat",Y6="firebase",Q6="12.15.0";/**
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
 */const Yl="[DEFAULT]",X6={[Kl]:"fire-core",[T6]:"fire-core-compat",[I6]:"fire-analytics",[x6]:"fire-analytics-compat",[S6]:"fire-app-check",[C6]:"fire-app-check-compat",[R6]:"fire-auth",[P6]:"fire-auth-compat",[k6]:"fire-rtdb",[O6]:"fire-data-connect",[N6]:"fire-rtdb-compat",[D6]:"fire-fn",[L6]:"fire-fn-compat",[V6]:"fire-iid",[M6]:"fire-iid-compat",[B6]:"fire-fcm",[F6]:"fire-fcm-compat",[U6]:"fire-perf",[$6]:"fire-perf-compat",[H6]:"fire-rc",[j6]:"fire-rc-compat",[q6]:"fire-gcs",[z6]:"fire-gcs-compat",[G6]:"fire-fst",[K6]:"fire-fst-compat",[W6]:"fire-vertex","fire-js":"fire-js",[Y6]:"fire-js-all"};/**
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
 */const Wo=new Map,J6=new Map,Ql=new Map;function Q1(n,e){try{n.container.addComponent(e)}catch(t){En.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Nr(n){const e=n.name;if(Ql.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;Ql.set(e,n);for(const t of Wo.values())Q1(t,n);for(const t of J6.values())Q1(t,n);return!0}function Ca(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Pt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Z6={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new Fi("app","Firebase",Z6);/**
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
 */class eg{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
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
 */const $r=Q6;function c2(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Yl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Kn.create("bad-app-name",{appName:String(s)});if(t||(t=r2()),!t)throw Kn.create("no-options");const i=Wo.get(s);if(i){if(Or(t,i.options)&&Or(r,i.config))return i;throw Kn.create("duplicate-app",{appName:s})}const o=new o6(s);for(const c of Ql.values())o.addComponent(c);const l=new eg(t,r,o);return Wo.set(s,l),l}function Cc(n=Yl){const e=Wo.get(n);if(!e&&n===Yl&&r2())return c2();if(!e)throw Kn.create("no-app",{appName:n});return e}function Zt(n,e,t){let r=X6[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(o.join(" "));return}Nr(new er(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const tg="firebase-heartbeat-database",ng=1,bi="firebase-heartbeat-store";let Pl=null;function u2(){return Pl||(Pl=b6(tg,ng,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(bi)}catch(t){console.warn(t)}}}}).catch(n=>{throw Kn.create("idb-open",{originalErrorMessage:n.message})})),Pl}async function rg(n){try{const t=(await u2()).transaction(bi),r=await t.objectStore(bi).get(h2(n));return await t.done,r}catch(e){if(e instanceof hn)En.warn(e.message);else{const t=Kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(t.message)}}}async function X1(n,e){try{const r=(await u2()).transaction(bi,"readwrite");await r.objectStore(bi).put(e,h2(n)),await r.done}catch(t){if(t instanceof hn)En.warn(t.message);else{const r=Kn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});En.warn(r.message)}}}function h2(n){return`${n.name}!${n.options.appId}`}/**
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
 */const sg=1024,ig=30;class og{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=J1();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ig){const o=cg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){En.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=J1(),{heartbeatsToSend:r,unsentEntries:s}=ag(this._heartbeatsCache.heartbeats),i=Go(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return En.warn(t),""}}}function J1(){return new Date().toISOString().substring(0,10)}function ag(n,e=sg){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Z1(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Z1(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class lg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Km()?Ym().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await rg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return X1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return X1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Z1(n){return Go(JSON.stringify({version:2,heartbeats:n})).length}function cg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function ug(n){Nr(new er("platform-logger",e=>new E6(e),"PRIVATE")),Nr(new er("heartbeat",e=>new og(e),"PRIVATE")),Zt(Kl,Y1,n),Zt(Kl,Y1,"esm2020"),Zt("fire-js","")}ug("");function d2(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hg=d2,f2=new Fi("auth","Firebase",d2());/**
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
 */const Ko=new xc("@firebase/auth");function dg(n,...e){Ko.logLevel<=pe.WARN&&Ko.warn(`Auth (${$r}): ${n}`,...e)}function Do(n,...e){Ko.logLevel<=pe.ERROR&&Ko.error(`Auth (${$r}): ${n}`,...e)}/**
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
 */function qt(n,...e){throw Sc(n,...e)}function en(n,...e){return Sc(n,...e)}function p2(n,e,t){const r={...hg(),[e]:t};return new Fi("auth","Firebase",r).create(e,{appName:n.name})}function wn(n){return p2(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return f2.create(n,...e)}function te(n,e,...t){if(!n)throw Sc(e,...t)}function fn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Do(e),new Error(e)}function An(n,e){n||fn(e)}/**
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
 */function Xl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function fg(){return eh()==="http:"||eh()==="https:"}function eh(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function pg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fg()||qm()||"connection"in navigator)?navigator.onLine:!0}function mg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class $i{constructor(e,t){this.shortDelay=e,this.longDelay=t,An(t>e,"Short delay should be less than long delay!"),this.isMobile=$m()||zm()}get(){return pg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rc(n,e){An(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class m2{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const wg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_g=new $i(3e4,6e4);function dr(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function fr(n,e,t,r,s={}){return g2(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ui({...o,key:n.config.apiKey}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:c,...i};return jm()||(h.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&Ur(n.emulatorConfig.host)&&(h.credentials="include"),m2.fetch()(await w2(n,n.config.apiHost,t,l),h)})}async function g2(n,e,t){n._canInitEmulator=!1;const r={...gg,...e};try{const s=new yg(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw vo(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw vo(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw vo(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw vo(n,"user-disabled",o);const p=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw p2(n,p,h);qt(n,p)}}catch(s){if(s instanceof hn)throw s;qt(n,"network-request-failed",{message:String(s)})}}async function Hi(n,e,t,r,s={}){const i=await fr(n,e,t,r,s);return"mfaPendingCredential"in i&&qt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function w2(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Rc(n.config,s):`${n.config.apiScheme}://${s}`;return wg.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function bg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),_g.get())})}}function vo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=en(n,e,r);return s.customData._tokenResponse=t,s}function th(n){return n!==void 0&&n.enterprise!==void 0}class vg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return bg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Eg(n,e){return fr(n,"GET","/v2/recaptchaConfig",dr(n,e))}/**
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
 */async function Ag(n,e){return fr(n,"POST","/v1/accounts:delete",e)}async function Yo(n,e){return fr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ai(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Tg(n,e=!1){const t=Ye(n),r=await t.getIdToken(e),s=Pc(r);te(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ai(kl(s.auth_time)),issuedAtTime:ai(kl(s.iat)),expirationTime:ai(kl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function kl(n){return Number(n)*1e3}function Pc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Do("JWT malformed, contained fewer than 3 sections"),null;try{const s=e2(t);return s?JSON.parse(s):(Do("Failed to decode base64 JWT payload"),null)}catch(s){return Do("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function nh(n){const e=Pc(n);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function yi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof hn&&xg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function xg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Ig{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Jl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ai(this.lastLoginAt),this.creationTime=ai(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qo(n){var g;const e=n.auth,t=await n.getIdToken(),r=await yi(n,Yo(e,{idToken:t}));te(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(g=s.providerUserInfo)!=null&&g.length?_2(s.providerUserInfo):[],o=Sg(n.providerData,i),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Jl(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function Cg(n){const e=Ye(n);await Qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sg(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function _2(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Rg(n,e){const t=await g2(n,{},async()=>{const r=Ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await w2(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return n.emulatorConfig&&Ur(n.emulatorConfig.host)&&(c.credentials="include"),m2.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Pg(n,e){return fr(n,"POST","/v2/accounts:revokeToken",dr(n,e))}/**
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
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=nh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Rg(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new os;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
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
 */function Dn(n,e){te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ht{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Ig(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Jl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await yi(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Tg(this,e)}reload(){return Cg(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ht({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pt(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await yi(this,Ag(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,h=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:g,emailVerified:x,isAnonymous:S,providerData:R,stsTokenManager:B}=t;te(g&&B,e,"internal-error");const U=os.fromJSON(this.name,B);te(typeof g=="string",e,"internal-error"),Dn(r,e.name),Dn(s,e.name),te(typeof x=="boolean",e,"internal-error"),te(typeof S=="boolean",e,"internal-error"),Dn(i,e.name),Dn(o,e.name),Dn(l,e.name),Dn(c,e.name),Dn(h,e.name),Dn(p,e.name);const Q=new Ht({uid:g,auth:e,email:s,emailVerified:x,displayName:r,isAnonymous:S,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:U,createdAt:h,lastLoginAt:p});return R&&Array.isArray(R)&&(Q.providerData=R.map(re=>({...re}))),c&&(Q._redirectEventId=c),Q}static async _fromIdTokenResponse(e,t,r=!1){const s=new os;s.updateFromServerResponse(t);const i=new Ht({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Qo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?_2(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new os;l.updateFromIdToken(r);const c=new Ht({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Jl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const rh=new Map;function pn(n){An(n instanceof Function,"Expected a class definition");let e=rh.get(n);return e?(An(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,rh.set(n,e),e)}/**
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
 */class b2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}b2.type="NONE";const sh=b2;/**
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
 */function Lo(n,e,t){return`firebase:${n}:${e}:${t}`}class as{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Lo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Lo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Yo(this.auth,{idToken:e}).catch(()=>{});return t?Ht._fromGetAccountInfoResponse(this.auth,t,e):null}return Ht._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new as(pn(sh),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||pn(sh);const o=Lo(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const p=await h._get(o);if(p){let g;if(typeof p=="string"){const x=await Yo(e,{idToken:p}).catch(()=>{});if(!x)break;g=await Ht._fromGetAccountInfoResponse(e,x,p)}else g=Ht._fromJSON(e,p);h!==i&&(l=g),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new as(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new as(i,e,r))}}/**
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
 */function ih(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(A2(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(y2(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(x2(e))return"Blackberry";if(I2(e))return"Webos";if(v2(e))return"Safari";if((e.includes("chrome/")||E2(e))&&!e.includes("edge/"))return"Chrome";if(T2(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function y2(n=ct()){return/firefox\//i.test(n)}function v2(n=ct()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function E2(n=ct()){return/crios\//i.test(n)}function A2(n=ct()){return/iemobile/i.test(n)}function T2(n=ct()){return/android/i.test(n)}function x2(n=ct()){return/blackberry/i.test(n)}function I2(n=ct()){return/webos/i.test(n)}function kc(n=ct()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function kg(n=ct()){var e;return kc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Og(){return Gm()&&document.documentMode===10}function C2(n=ct()){return kc(n)||T2(n)||I2(n)||x2(n)||/windows phone/i.test(n)||A2(n)}/**
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
 */function S2(n,e=[]){let t;switch(n){case"Browser":t=ih(ct());break;case"Worker":t=`${ih(ct())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${$r}/${r}`}/**
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
 */class Ng{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Dg(n,e={}){return fr(n,"GET","/v2/passwordPolicy",dr(n,e))}/**
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
 */const Lg=6;class Vg{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Lg,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Mg{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oh(this),this.idTokenSubscription=new oh(this),this.beforeStateQueue=new Ng(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=f2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await as.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Yo(this,{idToken:e}),r=await Ht._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Pt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pt(this.app))return Promise.reject(wn(this));const t=e?Ye(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pt(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pt(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Dg(this),t=new Vg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Fi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Pg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pn(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[pn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=S2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Pt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&dg(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Hr(n){return Ye(n)}class oh{constructor(e){this.auth=e,this.observer=null,this.addObserver=e6(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Sa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Bg(n){Sa=n}function R2(n){return Sa.loadJS(n)}function Fg(){return Sa.recaptchaEnterpriseScript}function Ug(){return Sa.gapiScript}function $g(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Hg{constructor(){this.enterprise=new jg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class jg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const qg="recaptcha-enterprise",P2="NO_RECAPTCHA",ah="onFirebaseAuthREInstanceReady";class Vn{constructor(e){this.type=qg,this.auth=Hr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Eg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new vg(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;th(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(P2)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Hg().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(async l=>{if(!t&&th(window.grecaptcha)&&Vn.scriptInjectionDeferred)await Vn.scriptInjectionDeferred.promise,s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Fg();c.length!==0&&(c+=l+`&onload=${ah}`),Vn.scriptInjectionDeferred=new i2,window[ah]=()=>{var h;(h=Vn.scriptInjectionDeferred)==null||h.resolve()},R2(c).then(()=>{var h;return(h=Vn.scriptInjectionDeferred)==null?void 0:h.promise}).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}Vn.scriptInjectionDeferred=null;async function lh(n,e,t,r=!1,s=!1){const i=new Vn(n);let o;if(s)o=P2;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Zl(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await lh(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await lh(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(o)})}/**
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
 */function zg(n,e){const t=Ca(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Or(i,e??{}))return s;qt(s,"already-initialized")}return t.initialize({options:e})}function Gg(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(pn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Wg(n,e,t){const r=Hr(n);te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=k2(e),{host:o,port:l}=Kg(e),c=l===null?"":`:${l}`,h={url:`${i}//${o}${c}/`},p=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(Or(h,r.config.emulator)&&Or(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Ur(o)?Tc(`${i}//${o}${c}`):Yg()}function k2(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Kg(n){const e=k2(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ch(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ch(o)}}}function ch(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Yg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Oc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,t){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}async function Qg(n,e){return fr(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Xg(n,e){return Hi(n,"POST","/v1/accounts:signInWithPassword",dr(n,e))}/**
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
 */async function Jg(n,e){return Hi(n,"POST","/v1/accounts:signInWithEmailLink",dr(n,e))}async function Zg(n,e){return Hi(n,"POST","/v1/accounts:signInWithEmailLink",dr(n,e))}/**
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
 */class vi extends Oc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new vi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new vi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zl(e,t,"signInWithPassword",Xg);case"emailLink":return Jg(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zl(e,r,"signUpPassword",Qg);case"emailLink":return Zg(e,{idToken:t,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ls(n,e){return Hi(n,"POST","/v1/accounts:signInWithIdp",dr(n,e))}/**
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
 */const e4="http://localhost";class Dr extends Oc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new Dr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ls(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ls(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ls(e,t)}buildRequest(){const e={requestUri:e4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ui(t)}return e}}/**
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
 */function t4(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function n4(n){const e=ei(ti(n)).link,t=e?ei(ti(e)).deep_link_id:null,r=ei(ti(n)).deep_link_id;return(r?ei(ti(r)).link:null)||r||t||e||n}class Nc{constructor(e){const t=ei(ti(e)),r=t.apiKey??null,s=t.oobCode??null,i=t4(t.mode??null);te(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=n4(e);try{return new Nc(t)}catch{return null}}}/**
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
 */class vs{constructor(){this.providerId=vs.PROVIDER_ID}static credential(e,t){return vi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Nc.parseLink(t);return te(r,"argument-error"),vi._fromEmailAndCode(e,r.code,r.tenantId)}}vs.PROVIDER_ID="password";vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class O2{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ji extends O2{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Mn extends ji{constructor(){super("facebook.com")}static credential(e){return Dr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mn.PROVIDER_ID="facebook.com";/**
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
 */class Bn extends ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Dr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Bn.credential(t,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
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
 */class Fn extends ji{constructor(){super("github.com")}static credential(e){return Dr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
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
 */class Un extends ji{constructor(){super("twitter.com")}static credential(e,t){return Dr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Un.credential(t,r)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
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
 */async function r4(n,e){return Hi(n,"POST","/v1/accounts:signUp",dr(n,e))}/**
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
 */class Lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ht._fromIdTokenResponse(e,r,s),o=uh(r);return new Lr({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=uh(r);return new Lr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function uh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Xo extends hn{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Xo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Xo(e,t,r,s)}}function N2(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xo._fromErrorAndOperation(n,i,e,r):i})}async function s4(n,e,t=!1){const r=await yi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Lr._forOperation(n,"link",r)}/**
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
 */async function i4(n,e,t=!1){const{auth:r}=n;if(Pt(r.app))return Promise.reject(wn(r));const s="reauthenticate";try{const i=await yi(n,N2(r,s,e,n),t);te(i.idToken,r,"internal-error");const o=Pc(i.idToken);te(o,r,"internal-error");const{sub:l}=o;return te(n.uid===l,r,"user-mismatch"),Lr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),i}}/**
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
 */async function D2(n,e,t=!1){if(Pt(n.app))return Promise.reject(wn(n));const r="signIn",s=await N2(n,r,e),i=await Lr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function o4(n,e){return D2(Hr(n),e)}/**
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
 */async function L2(n){const e=Hr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function a4(n,e,t){if(Pt(n.app))return Promise.reject(wn(n));const r=Hr(n),o=await Zl(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",r4).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&L2(n),c}),l=await Lr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function l4(n,e,t){return Pt(n.app)?Promise.reject(wn(n)):o4(Ye(n),vs.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&L2(n),r})}function c4(n,e,t,r){return Ye(n).onIdTokenChanged(e,t,r)}function u4(n,e,t){return Ye(n).beforeAuthStateChanged(e,t)}function h4(n,e,t,r){return Ye(n).onAuthStateChanged(e,t,r)}function Jo(n){return Ye(n).signOut()}async function hh(n){return Ye(n).delete()}const Zo="__sak";/**
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
 */class V2{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zo,"1"),this.storage.removeItem(Zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const d4=1e3,f4=10;class M2 extends V2{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=C2(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Og()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,f4):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},d4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}M2.type="LOCAL";const p4=M2;/**
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
 */class B2 extends V2{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}B2.type="SESSION";const F2=B2;/**
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
 */function m4(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ra{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ra(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(t.origin,i)),c=await m4(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ra.receivers=[];/**
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
 */function Dc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class g4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=Dc("",20);s.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(g){const x=g;if(x.data.eventId===h)switch(x.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(x.data.response);break;default:clearTimeout(p),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tn(){return window}function w4(n){tn().location.href=n}/**
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
 */function U2(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function _4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function b4(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function y4(){return U2()?self:null}/**
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
 */const $2="firebaseLocalStorageDb",v4=1,ea="firebaseLocalStorage",H2="fbase_key";class qi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Pa(n,e){return n.transaction([ea],e?"readwrite":"readonly").objectStore(ea)}function E4(){const n=indexedDB.deleteDatabase($2);return new qi(n).toPromise()}function j2(){const n=indexedDB.open($2,v4);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ea,{keyPath:H2})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ea)?e(r):(r.close(),await E4(),e(await j2()))})})}async function dh(n,e,t){const r=Pa(n,!0).put({[H2]:e,value:t});return new qi(r).toPromise()}async function A4(n,e){const t=Pa(n,!1).get(e),r=await new qi(t).toPromise();return r===void 0?null:r.value}function fh(n,e){const t=Pa(n,!0).delete(e);return new qi(t).toPromise()}const T4=800,x4=3;class q2{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=j2(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>x4)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return U2()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ra._getInstance(y4()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await _4(),!this.activeServiceWorker)return;this.sender=new g4(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||b4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await dh(e,Zo,"1"),await fh(e,Zo)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>dh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>A4(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>fh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Pa(s,!1).getAll();return new qi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),T4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}q2.type="LOCAL";const I4=q2;new $i(3e4,6e4);/**
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
 */function C4(n,e){return e?pn(e):(te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Lc extends Oc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ls(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ls(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function S4(n){return D2(n.auth,new Lc(n),n.bypassAuthState)}function R4(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),i4(t,new Lc(n),n.bypassAuthState)}async function P4(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),s4(t,new Lc(n),n.bypassAuthState)}/**
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
 */class z2{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return S4;case"linkViaPopup":case"linkViaRedirect":return P4;case"reauthViaPopup":case"reauthViaRedirect":return R4;default:qt(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const k4=new $i(2e3,1e4);class is extends z2{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=Dc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,k4.get())};e()}}is.currentPopupAction=null;/**
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
 */const O4="pendingRedirect",Vo=new Map;class N4 extends z2{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Vo.get(this.auth._key());if(!e){try{const r=await D4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Vo.set(this.auth._key(),e)}return this.bypassAuthState||Vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function D4(n,e){const t=M4(e),r=V4(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function L4(n,e){Vo.set(n._key(),e)}function V4(n){return pn(n._redirectPersistence)}function M4(n){return Lo(O4,n.config.apiKey,n.name)}async function B4(n,e,t=!1){if(Pt(n.app))return Promise.reject(wn(n));const r=Hr(n),s=C4(r,e),o=await new N4(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const F4=10*60*1e3;class U4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$4(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!G2(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(en(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=F4&&this.cachedEventUids.clear(),this.cachedEventUids.has(ph(e))}saveEventToCache(e){this.cachedEventUids.add(ph(e)),this.lastProcessedEventTime=Date.now()}}function ph(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function G2({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $4(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return G2(n);default:return!1}}/**
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
 */async function H4(n,e={}){return fr(n,"GET","/v1/projects",e)}/**
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
 */const j4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,q4=/^https?/;async function z4(n){if(n.config.emulator)return;const{authorizedDomains:e}=await H4(n);for(const t of e)try{if(G4(t))return}catch{}qt(n,"unauthorized-domain")}function G4(n){const e=Xl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!q4.test(t))return!1;if(j4.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const W4=new $i(3e4,6e4);function mh(){const n=tn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function K4(n){return new Promise((e,t)=>{var s,i,o;function r(){mh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mh(),t(en(n,"network-request-failed"))},timeout:W4.get()})}if((i=(s=tn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=tn().gapi)!=null&&o.load)r();else{const l=$g("iframefcb");return tn()[l]=()=>{gapi.load?r():t(en(n,"network-request-failed"))},R2(`${Ug()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Mo=null,e})}let Mo=null;function Y4(n){return Mo=Mo||K4(n),Mo}/**
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
 */const Q4=new $i(5e3,15e3),X4="__/auth/iframe",J4="emulator/auth/iframe",Z4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},e7=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function t7(n){const e=n.config;te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Rc(e,J4):`https://${n.config.authDomain}/${X4}`,r={apiKey:e.apiKey,appName:n.name,v:$r},s=e7.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ui(r).slice(1)}`}async function n7(n){const e=await Y4(n),t=tn().gapi;return te(t,n,"internal-error"),e.open({where:document.body,url:t7(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Z4,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=en(n,"network-request-failed"),l=tn().setTimeout(()=>{i(o)},Q4.get());function c(){tn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const r7={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},s7=500,i7=600,o7="_blank",a7="http://localhost";class gh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function l7(n,e,t,r=s7,s=i7){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...r7,width:r.toString(),height:s.toString(),top:i,left:o},h=ct().toLowerCase();t&&(l=E2(h)?o7:t),y2(h)&&(e=e||a7,c.scrollbars="yes");const p=Object.entries(c).reduce((x,[S,R])=>`${x}${S}=${R},`,"");if(kg(h)&&l!=="_self")return c7(e||"",l),new gh(null);const g=window.open(e||"",l,p);te(g,n,"popup-blocked");try{g.focus()}catch{}return new gh(g)}function c7(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const u7="__/auth/handler",h7="emulator/auth/handler",d7=encodeURIComponent("fac");async function wh(n,e,t,r,s,i){te(n.config.authDomain,n,"auth-domain-config-required"),te(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:$r,eventId:s};if(e instanceof O2){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Zm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))o[p]=g}if(e instanceof ji){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(o.scopes=p.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const c=await n._getAppCheckToken(),h=c?`#${d7}=${encodeURIComponent(c)}`:"";return`${f7(n)}?${Ui(l).slice(1)}${h}`}function f7({config:n}){return n.emulator?Rc(n,h7):`https://${n.authDomain}/${u7}`}/**
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
 */const Ol="webStorageSupport";class p7{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=F2,this._completeRedirectFn=B4,this._overrideRedirectResult=L4}async _openPopup(e,t,r,s){var o;An((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await wh(e,t,r,Xl(),s);return l7(e,i,Dc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await wh(e,t,r,Xl(),s);return w4(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(An(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await n7(e),r=new U4(e);return t.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ol,{type:Ol},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Ol];i!==void 0&&t(!!i),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=z4(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return C2()||v2()||kc()}}const m7=p7;var _h="@firebase/auth",bh="1.13.3";/**
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
 */class g7{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function w7(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _7(n){Nr(new er("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:S2(n)},h=new Mg(r,s,i,c);return Gg(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Nr(new er("auth-internal",e=>{const t=Hr(e.getProvider("auth").getImmediate());return(r=>new g7(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(_h,bh,w7(n)),Zt(_h,bh,"esm2020")}/**
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
 */const b7=5*60,y7=s2("authIdTokenMaxAge")||b7;let yh=null;const v7=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>y7)return;const s=t==null?void 0:t.token;yh!==s&&(yh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function E7(n=Cc()){const e=Ca(n,"auth");if(e.isInitialized())return e.getImmediate();const t=zg(n,{popupRedirectResolver:m7,persistence:[I4,p4,F2]}),r=s2("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=v7(i.toString());u4(t,o,()=>o(t.currentUser)),c4(t,l=>o(l))}}const s=t2("auth");return s&&Wg(t,`http://${s}`),t}function A7(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Bg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=en("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",A7().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_7("Browser");var vh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yn,W2;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function m(){}m.prototype=y.prototype,A.F=y.prototype,A.prototype=new m,A.prototype.constructor=A,A.D=function(v,E,T){for(var b=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)b[Y-2]=arguments[Y];return y.prototype[E].apply(v,b)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,m){m||(m=0);const v=Array(16);if(typeof y=="string")for(var E=0;E<16;++E)v[E]=y.charCodeAt(m++)|y.charCodeAt(m++)<<8|y.charCodeAt(m++)<<16|y.charCodeAt(m++)<<24;else for(E=0;E<16;++E)v[E]=y[m++]|y[m++]<<8|y[m++]<<16|y[m++]<<24;y=A.g[0],m=A.g[1],E=A.g[2];let T=A.g[3],b;b=y+(T^m&(E^T))+v[0]+3614090360&4294967295,y=m+(b<<7&4294967295|b>>>25),b=T+(E^y&(m^E))+v[1]+3905402710&4294967295,T=y+(b<<12&4294967295|b>>>20),b=E+(m^T&(y^m))+v[2]+606105819&4294967295,E=T+(b<<17&4294967295|b>>>15),b=m+(y^E&(T^y))+v[3]+3250441966&4294967295,m=E+(b<<22&4294967295|b>>>10),b=y+(T^m&(E^T))+v[4]+4118548399&4294967295,y=m+(b<<7&4294967295|b>>>25),b=T+(E^y&(m^E))+v[5]+1200080426&4294967295,T=y+(b<<12&4294967295|b>>>20),b=E+(m^T&(y^m))+v[6]+2821735955&4294967295,E=T+(b<<17&4294967295|b>>>15),b=m+(y^E&(T^y))+v[7]+4249261313&4294967295,m=E+(b<<22&4294967295|b>>>10),b=y+(T^m&(E^T))+v[8]+1770035416&4294967295,y=m+(b<<7&4294967295|b>>>25),b=T+(E^y&(m^E))+v[9]+2336552879&4294967295,T=y+(b<<12&4294967295|b>>>20),b=E+(m^T&(y^m))+v[10]+4294925233&4294967295,E=T+(b<<17&4294967295|b>>>15),b=m+(y^E&(T^y))+v[11]+2304563134&4294967295,m=E+(b<<22&4294967295|b>>>10),b=y+(T^m&(E^T))+v[12]+1804603682&4294967295,y=m+(b<<7&4294967295|b>>>25),b=T+(E^y&(m^E))+v[13]+4254626195&4294967295,T=y+(b<<12&4294967295|b>>>20),b=E+(m^T&(y^m))+v[14]+2792965006&4294967295,E=T+(b<<17&4294967295|b>>>15),b=m+(y^E&(T^y))+v[15]+1236535329&4294967295,m=E+(b<<22&4294967295|b>>>10),b=y+(E^T&(m^E))+v[1]+4129170786&4294967295,y=m+(b<<5&4294967295|b>>>27),b=T+(m^E&(y^m))+v[6]+3225465664&4294967295,T=y+(b<<9&4294967295|b>>>23),b=E+(y^m&(T^y))+v[11]+643717713&4294967295,E=T+(b<<14&4294967295|b>>>18),b=m+(T^y&(E^T))+v[0]+3921069994&4294967295,m=E+(b<<20&4294967295|b>>>12),b=y+(E^T&(m^E))+v[5]+3593408605&4294967295,y=m+(b<<5&4294967295|b>>>27),b=T+(m^E&(y^m))+v[10]+38016083&4294967295,T=y+(b<<9&4294967295|b>>>23),b=E+(y^m&(T^y))+v[15]+3634488961&4294967295,E=T+(b<<14&4294967295|b>>>18),b=m+(T^y&(E^T))+v[4]+3889429448&4294967295,m=E+(b<<20&4294967295|b>>>12),b=y+(E^T&(m^E))+v[9]+568446438&4294967295,y=m+(b<<5&4294967295|b>>>27),b=T+(m^E&(y^m))+v[14]+3275163606&4294967295,T=y+(b<<9&4294967295|b>>>23),b=E+(y^m&(T^y))+v[3]+4107603335&4294967295,E=T+(b<<14&4294967295|b>>>18),b=m+(T^y&(E^T))+v[8]+1163531501&4294967295,m=E+(b<<20&4294967295|b>>>12),b=y+(E^T&(m^E))+v[13]+2850285829&4294967295,y=m+(b<<5&4294967295|b>>>27),b=T+(m^E&(y^m))+v[2]+4243563512&4294967295,T=y+(b<<9&4294967295|b>>>23),b=E+(y^m&(T^y))+v[7]+1735328473&4294967295,E=T+(b<<14&4294967295|b>>>18),b=m+(T^y&(E^T))+v[12]+2368359562&4294967295,m=E+(b<<20&4294967295|b>>>12),b=y+(m^E^T)+v[5]+4294588738&4294967295,y=m+(b<<4&4294967295|b>>>28),b=T+(y^m^E)+v[8]+2272392833&4294967295,T=y+(b<<11&4294967295|b>>>21),b=E+(T^y^m)+v[11]+1839030562&4294967295,E=T+(b<<16&4294967295|b>>>16),b=m+(E^T^y)+v[14]+4259657740&4294967295,m=E+(b<<23&4294967295|b>>>9),b=y+(m^E^T)+v[1]+2763975236&4294967295,y=m+(b<<4&4294967295|b>>>28),b=T+(y^m^E)+v[4]+1272893353&4294967295,T=y+(b<<11&4294967295|b>>>21),b=E+(T^y^m)+v[7]+4139469664&4294967295,E=T+(b<<16&4294967295|b>>>16),b=m+(E^T^y)+v[10]+3200236656&4294967295,m=E+(b<<23&4294967295|b>>>9),b=y+(m^E^T)+v[13]+681279174&4294967295,y=m+(b<<4&4294967295|b>>>28),b=T+(y^m^E)+v[0]+3936430074&4294967295,T=y+(b<<11&4294967295|b>>>21),b=E+(T^y^m)+v[3]+3572445317&4294967295,E=T+(b<<16&4294967295|b>>>16),b=m+(E^T^y)+v[6]+76029189&4294967295,m=E+(b<<23&4294967295|b>>>9),b=y+(m^E^T)+v[9]+3654602809&4294967295,y=m+(b<<4&4294967295|b>>>28),b=T+(y^m^E)+v[12]+3873151461&4294967295,T=y+(b<<11&4294967295|b>>>21),b=E+(T^y^m)+v[15]+530742520&4294967295,E=T+(b<<16&4294967295|b>>>16),b=m+(E^T^y)+v[2]+3299628645&4294967295,m=E+(b<<23&4294967295|b>>>9),b=y+(E^(m|~T))+v[0]+4096336452&4294967295,y=m+(b<<6&4294967295|b>>>26),b=T+(m^(y|~E))+v[7]+1126891415&4294967295,T=y+(b<<10&4294967295|b>>>22),b=E+(y^(T|~m))+v[14]+2878612391&4294967295,E=T+(b<<15&4294967295|b>>>17),b=m+(T^(E|~y))+v[5]+4237533241&4294967295,m=E+(b<<21&4294967295|b>>>11),b=y+(E^(m|~T))+v[12]+1700485571&4294967295,y=m+(b<<6&4294967295|b>>>26),b=T+(m^(y|~E))+v[3]+2399980690&4294967295,T=y+(b<<10&4294967295|b>>>22),b=E+(y^(T|~m))+v[10]+4293915773&4294967295,E=T+(b<<15&4294967295|b>>>17),b=m+(T^(E|~y))+v[1]+2240044497&4294967295,m=E+(b<<21&4294967295|b>>>11),b=y+(E^(m|~T))+v[8]+1873313359&4294967295,y=m+(b<<6&4294967295|b>>>26),b=T+(m^(y|~E))+v[15]+4264355552&4294967295,T=y+(b<<10&4294967295|b>>>22),b=E+(y^(T|~m))+v[6]+2734768916&4294967295,E=T+(b<<15&4294967295|b>>>17),b=m+(T^(E|~y))+v[13]+1309151649&4294967295,m=E+(b<<21&4294967295|b>>>11),b=y+(E^(m|~T))+v[4]+4149444226&4294967295,y=m+(b<<6&4294967295|b>>>26),b=T+(m^(y|~E))+v[11]+3174756917&4294967295,T=y+(b<<10&4294967295|b>>>22),b=E+(y^(T|~m))+v[2]+718787259&4294967295,E=T+(b<<15&4294967295|b>>>17),b=m+(T^(E|~y))+v[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(E+(b<<21&4294967295|b>>>11))&4294967295,A.g[2]=A.g[2]+E&4294967295,A.g[3]=A.g[3]+T&4294967295}r.prototype.v=function(A,y){y===void 0&&(y=A.length);const m=y-this.blockSize,v=this.C;let E=this.h,T=0;for(;T<y;){if(E==0)for(;T<=m;)s(this,A,T),T+=this.blockSize;if(typeof A=="string"){for(;T<y;)if(v[E++]=A.charCodeAt(T++),E==this.blockSize){s(this,v),E=0;break}}else for(;T<y;)if(v[E++]=A[T++],E==this.blockSize){s(this,v),E=0;break}}this.h=E,this.o+=y},r.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;y=this.o*8;for(var m=A.length-8;m<A.length;++m)A[m]=y&255,y/=256;for(this.v(A),A=Array(16),y=0,m=0;m<4;++m)for(let v=0;v<32;v+=8)A[y++]=this.g[m]>>>v&255;return A};function i(A,y){var m=l;return Object.prototype.hasOwnProperty.call(m,A)?m[A]:m[A]=y(A)}function o(A,y){this.h=y;const m=[];let v=!0;for(let E=A.length-1;E>=0;E--){const T=A[E]|0;v&&T==y||(m[E]=T,v=!1)}this.g=m}var l={};function c(A){return-128<=A&&A<128?i(A,function(y){return new o([y|0],y<0?-1:0)}):new o([A|0],A<0?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return g;if(A<0)return U(h(-A));const y=[];let m=1;for(let v=0;A>=m;v++)y[v]=A/m|0,m*=4294967296;return new o(y,0)}function p(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return U(p(A.substring(1),y));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const m=h(Math.pow(y,8));let v=g;for(let T=0;T<A.length;T+=8){var E=Math.min(8,A.length-T);const b=parseInt(A.substring(T,T+E),y);E<8?(E=h(Math.pow(y,E)),v=v.j(E).add(h(b))):(v=v.j(m),v=v.add(h(b)))}return v}var g=c(0),x=c(1),S=c(16777216);n=o.prototype,n.m=function(){if(B(this))return-U(this).m();let A=0,y=1;for(let m=0;m<this.g.length;m++){const v=this.i(m);A+=(v>=0?v:4294967296+v)*y,y*=4294967296}return A},n.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(R(this))return"0";if(B(this))return"-"+U(this).toString(A);const y=h(Math.pow(A,6));var m=this;let v="";for(;;){const E=me(m,y).g;m=Q(m,E.j(y));let T=((m.g.length>0?m.g[0]:m.h)>>>0).toString(A);if(m=E,R(m))return T+v;for(;T.length<6;)T="0"+T;v=T+v}},n.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function R(A){if(A.h!=0)return!1;for(let y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function B(A){return A.h==-1}n.l=function(A){return A=Q(this,A),B(A)?-1:R(A)?0:1};function U(A){const y=A.g.length,m=[];for(let v=0;v<y;v++)m[v]=~A.g[v];return new o(m,~A.h).add(x)}n.abs=function(){return B(this)?U(this):this},n.add=function(A){const y=Math.max(this.g.length,A.g.length),m=[];let v=0;for(let E=0;E<=y;E++){let T=v+(this.i(E)&65535)+(A.i(E)&65535),b=(T>>>16)+(this.i(E)>>>16)+(A.i(E)>>>16);v=b>>>16,T&=65535,b&=65535,m[E]=b<<16|T}return new o(m,m[m.length-1]&-2147483648?-1:0)};function Q(A,y){return A.add(U(y))}n.j=function(A){if(R(this)||R(A))return g;if(B(this))return B(A)?U(this).j(U(A)):U(U(this).j(A));if(B(A))return U(this.j(U(A)));if(this.l(S)<0&&A.l(S)<0)return h(this.m()*A.m());const y=this.g.length+A.g.length,m=[];for(var v=0;v<2*y;v++)m[v]=0;for(v=0;v<this.g.length;v++)for(let E=0;E<A.g.length;E++){const T=this.i(v)>>>16,b=this.i(v)&65535,Y=A.i(E)>>>16,de=A.i(E)&65535;m[2*v+2*E]+=b*de,re(m,2*v+2*E),m[2*v+2*E+1]+=T*de,re(m,2*v+2*E+1),m[2*v+2*E+1]+=b*Y,re(m,2*v+2*E+1),m[2*v+2*E+2]+=T*Y,re(m,2*v+2*E+2)}for(A=0;A<y;A++)m[A]=m[2*A+1]<<16|m[2*A];for(A=y;A<2*y;A++)m[A]=0;return new o(m,0)};function re(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function ue(A,y){this.g=A,this.h=y}function me(A,y){if(R(y))throw Error("division by zero");if(R(A))return new ue(g,g);if(B(A))return y=me(U(A),y),new ue(U(y.g),U(y.h));if(B(y))return y=me(A,U(y)),new ue(U(y.g),y.h);if(A.g.length>30){if(B(A)||B(y))throw Error("slowDivide_ only works with positive integers.");for(var m=x,v=y;v.l(A)<=0;)m=F(m),v=F(v);var E=M(m,1),T=M(v,1);for(v=M(v,2),m=M(m,2);!R(v);){var b=T.add(v);b.l(A)<=0&&(E=E.add(m),T=b),v=M(v,1),m=M(m,1)}return y=Q(A,E.j(y)),new ue(E,y)}for(E=g;A.l(y)>=0;){for(m=Math.max(1,Math.floor(A.m()/y.m())),v=Math.ceil(Math.log(m)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),T=h(m),b=T.j(y);B(b)||b.l(A)>0;)m-=v,T=h(m),b=T.j(y);R(T)&&(T=x),E=E.add(T),A=Q(A,b)}return new ue(E,A)}n.B=function(A){return me(this,A).h},n.and=function(A){const y=Math.max(this.g.length,A.g.length),m=[];for(let v=0;v<y;v++)m[v]=this.i(v)&A.i(v);return new o(m,this.h&A.h)},n.or=function(A){const y=Math.max(this.g.length,A.g.length),m=[];for(let v=0;v<y;v++)m[v]=this.i(v)|A.i(v);return new o(m,this.h|A.h)},n.xor=function(A){const y=Math.max(this.g.length,A.g.length),m=[];for(let v=0;v<y;v++)m[v]=this.i(v)^A.i(v);return new o(m,this.h^A.h)};function F(A){const y=A.g.length+1,m=[];for(let v=0;v<y;v++)m[v]=A.i(v)<<1|A.i(v-1)>>>31;return new o(m,A.h)}function M(A,y){const m=y>>5;y%=32;const v=A.g.length-m,E=[];for(let T=0;T<v;T++)E[T]=y>0?A.i(T+m)>>>y|A.i(T+m+1)<<32-y:A.i(T+m);return new o(E,A.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,W2=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,Yn=o}).apply(typeof vh<"u"?vh:typeof self<"u"?self:typeof window<"u"?window:{});var Eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var K2,ni,Y2,Bo,ec,Q2,X2,J2;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Eo=="object"&&Eo];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var w=0;w<a.length-1;w++){var C=a[w];if(!(C in d))break e;d=d[C]}a=a[a.length-1],w=d[a],u=u(w),u!=w&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var d=[],w;for(w in u)Object.prototype.hasOwnProperty.call(u,w)&&d.push([w,u[w]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function c(a,u,d){return a.call.apply(a.bind,arguments)}function h(a,u,d){return h=c,h.apply(null,arguments)}function p(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var w=d.slice();return w.push.apply(w,arguments),a.apply(this,w)}}function g(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(w,C,k){for(var H=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)H[ce-2]=arguments[ce];return u.prototype[C].apply(w,H)}}var x=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function S(a){const u=a.length;if(u>0){const d=Array(u);for(let w=0;w<u;w++)d[w]=a[w];return d}return[]}function R(a,u){for(let w=1;w<arguments.length;w++){const C=arguments[w];var d=typeof C;if(d=d!="object"?d:C?Array.isArray(C)?"array":d:"null",d=="array"||d=="object"&&typeof C.length=="number"){d=a.length||0;const k=C.length||0;a.length=d+k;for(let H=0;H<k;H++)a[d+H]=C[H]}else a.push(C)}}class B{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(a){o.setTimeout(()=>{throw a},0)}function Q(){var a=A;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class re{constructor(){this.h=this.g=null}add(u,d){const w=ue.get();w.set(u,d),this.h?this.h.next=w:this.g=w,this.h=w}}var ue=new B(()=>new me,a=>a.reset());class me{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let F,M=!1,A=new re,y=()=>{const a=Promise.resolve(void 0);F=()=>{a.then(m)}};function m(){for(var a;a=Q();){try{a.h.call(a.g)}catch(d){U(d)}var u=ue;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}M=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a}();function b(a){return/^[\s\xa0]*$/.test(a)}function Y(a,u){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}g(Y,E),Y.prototype.init=function(a,u){const d=this.type=a.type,w=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Y.Z.h.call(this)},Y.prototype.h=function(){Y.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var de="closure_listenable_"+(Math.random()*1e6|0),et=0;function ye(a,u,d,w,C){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!w,this.ha=C,this.key=++et,this.da=this.fa=!1}function Me(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Qr(a,u,d){for(const w in a)u.call(d,a[w],w,a)}function il(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function ao(a){const u={};for(const d in a)u[d]=a[d];return u}const Ds="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xr(a,u){let d,w;for(let C=1;C<arguments.length;C++){w=arguments[C];for(d in w)a[d]=w[d];for(let k=0;k<Ds.length;k++)d=Ds[k],Object.prototype.hasOwnProperty.call(w,d)&&(a[d]=w[d])}}function In(a){this.src=a,this.g={},this.h=0}In.prototype.add=function(a,u,d,w,C){const k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);const H=mr(a,u,w,C);return H>-1?(u=a[H],d||(u.fa=!1)):(u=new ye(u,this.src,k,!!w,C),u.fa=d,a.push(u)),u};function pr(a,u){const d=u.type;if(d in a.g){var w=a.g[d],C=Array.prototype.indexOf.call(w,u,void 0),k;(k=C>=0)&&Array.prototype.splice.call(w,C,1),k&&(Me(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function mr(a,u,d,w){for(let C=0;C<a.length;++C){const k=a[C];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==w)return C}return-1}var gr="closure_lm_"+(Math.random()*1e6|0),wr={};function Cn(a,u,d,w,C){if(Array.isArray(u)){for(let k=0;k<u.length;k++)Cn(a,u[k],d,w,C);return null}return d=Yu(d),a&&a[de]?a.J(u,d,l(w)?!!w.capture:!1,C):nm(a,u,d,!1,w,C)}function nm(a,u,d,w,C,k){if(!u)throw Error("Invalid event type");const H=l(C)?!!C.capture:!!C;let ce=al(a);if(ce||(a[gr]=ce=new In(a)),d=ce.add(u,d,w,H,k),d.proxy)return d;if(w=rm(),d.proxy=w,w.src=a,w.listener=d,a.addEventListener)T||(C=H),C===void 0&&(C=!1),a.addEventListener(u.toString(),w,C);else if(a.attachEvent)a.attachEvent(Ku(u.toString()),w);else if(a.addListener&&a.removeListener)a.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return d}function rm(){function a(d){return u.call(a.src,a.listener,d)}const u=sm;return a}function Wu(a,u,d,w,C){if(Array.isArray(u))for(var k=0;k<u.length;k++)Wu(a,u[k],d,w,C);else w=l(w)?!!w.capture:!!w,d=Yu(d),a&&a[de]?(a=a.i,k=String(u).toString(),k in a.g&&(u=a.g[k],d=mr(u,d,w,C),d>-1&&(Me(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[k],a.h--)))):a&&(a=al(a))&&(u=a.g[u.toString()],a=-1,u&&(a=mr(u,d,w,C)),(d=a>-1?u[a]:null)&&ol(d))}function ol(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[de])pr(u.i,a);else{var d=a.type,w=a.proxy;u.removeEventListener?u.removeEventListener(d,w,a.capture):u.detachEvent?u.detachEvent(Ku(d),w):u.addListener&&u.removeListener&&u.removeListener(w),(d=al(u))?(pr(d,a),d.h==0&&(d.src=null,u[gr]=null)):Me(a)}}}function Ku(a){return a in wr?wr[a]:wr[a]="on"+a}function sm(a,u){if(a.da)a=!0;else{u=new Y(u,this);const d=a.listener,w=a.ha||a.src;a.fa&&ol(a),a=d.call(w,u)}return a}function al(a){return a=a[gr],a instanceof In?a:null}var ll="__closure_events_fn_"+(Math.random()*1e9>>>0);function Yu(a){return typeof a=="function"?a:(a[ll]||(a[ll]=function(u){return a.handleEvent(u)}),a[ll])}function rt(){v.call(this),this.i=new In(this),this.M=this,this.G=null}g(rt,v),rt.prototype[de]=!0,rt.prototype.removeEventListener=function(a,u,d,w){Wu(this,a,u,d,w)};function dt(a,u){var d,w=a.G;if(w)for(d=[];w;w=w.G)d.push(w);if(a=a.M,w=u.type||u,typeof u=="string")u=new E(u,a);else if(u instanceof E)u.target=u.target||a;else{var C=u;u=new E(w,a),Xr(u,C)}C=!0;let k,H;if(d)for(H=d.length-1;H>=0;H--)k=u.g=d[H],C=lo(k,w,!0,u)&&C;if(k=u.g=a,C=lo(k,w,!0,u)&&C,C=lo(k,w,!1,u)&&C,d)for(H=0;H<d.length;H++)k=u.g=d[H],C=lo(k,w,!1,u)&&C}rt.prototype.N=function(){if(rt.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let w=0;w<d.length;w++)Me(d[w]);delete a.g[u],a.h--}}this.G=null},rt.prototype.J=function(a,u,d,w){return this.i.add(String(a),u,!1,d,w)},rt.prototype.K=function(a,u,d,w){return this.i.add(String(a),u,!0,d,w)};function lo(a,u,d,w){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let C=!0;for(let k=0;k<u.length;++k){const H=u[k];if(H&&!H.da&&H.capture==d){const ce=H.listener,ze=H.ha||H.src;H.fa&&pr(a.i,H),C=ce.call(ze,w)!==!1&&C}}return C&&!w.defaultPrevented}function im(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function Qu(a){a.g=im(()=>{a.g=null,a.i&&(a.i=!1,Qu(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class om extends v{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Qu(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ls(a){v.call(this),this.h=a,this.g={}}g(Ls,v);var Xu=[];function Ju(a){Qr(a.g,function(u,d){this.g.hasOwnProperty(d)&&ol(u)},a),a.g={}}Ls.prototype.N=function(){Ls.Z.N.call(this),Ju(this)},Ls.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cl=o.JSON.stringify,am=o.JSON.parse,lm=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Zu(){}function e1(){}var Vs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ul(){E.call(this,"d")}g(ul,E);function hl(){E.call(this,"c")}g(hl,E);var _r={},t1=null;function co(){return t1=t1||new rt}_r.Ia="serverreachability";function n1(a){E.call(this,_r.Ia,a)}g(n1,E);function Ms(a){const u=co();dt(u,new n1(u))}_r.STAT_EVENT="statevent";function r1(a,u){E.call(this,_r.STAT_EVENT,a),this.stat=u}g(r1,E);function ft(a){const u=co();dt(u,new r1(u,a))}_r.Ja="timingevent";function s1(a,u){E.call(this,_r.Ja,a),this.size=u}g(s1,E);function Bs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Fs(){this.g=!0}Fs.prototype.ua=function(){this.g=!1};function cm(a,u,d,w,C,k){a.info(function(){if(a.g)if(k){var H="",ce=k.split("&");for(let Te=0;Te<ce.length;Te++){var ze=ce[Te].split("=");if(ze.length>1){const Qe=ze[0];ze=ze[1];const Wt=Qe.split("_");H=Wt.length>=2&&Wt[1]=="type"?H+(Qe+"="+ze+"&"):H+(Qe+"=redacted&")}}}else H=null;else H=k;return"XMLHTTP REQ ("+w+") [attempt "+C+"]: "+u+`
`+d+`
`+H})}function um(a,u,d,w,C,k,H){a.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+C+"]: "+u+`
`+d+`
`+k+" "+H})}function Jr(a,u,d,w){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+dm(a,d)+(w?" "+w:"")})}function hm(a,u){a.info(function(){return"TIMEOUT: "+u})}Fs.prototype.info=function(){};function dm(a,u){if(!a.g)return u;if(!u)return null;try{const k=JSON.parse(u);if(k){for(a=0;a<k.length;a++)if(Array.isArray(k[a])){var d=k[a];if(!(d.length<2)){var w=d[1];if(Array.isArray(w)&&!(w.length<1)){var C=w[0];if(C!="noop"&&C!="stop"&&C!="close")for(let H=1;H<w.length;H++)w[H]=""}}}}return cl(k)}catch{return u}}var uo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},i1={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},o1;function dl(){}g(dl,Zu),dl.prototype.g=function(){return new XMLHttpRequest},o1=new dl;function Us(a){return encodeURIComponent(String(a))}function fm(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function Sn(a,u,d,w){this.j=a,this.i=u,this.l=d,this.S=w||1,this.V=new Ls(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new a1}function a1(){this.i=null,this.g="",this.h=!1}var l1={},fl={};function pl(a,u,d){a.M=1,a.A=fo(Gt(u)),a.u=d,a.R=!0,c1(a,null)}function c1(a,u){a.F=Date.now(),ho(a),a.B=Gt(a.A);var d=a.B,w=a.S;Array.isArray(w)||(w=[String(w)]),E1(d.i,"t",w),a.C=0,d=a.j.L,a.h=new a1,a.g=U1(a.j,d?u:null,!a.u),a.P>0&&(a.O=new om(h(a.Y,a,a.g),a.P)),u=a.V,d=a.g,w=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(Xu[0]=C.toString()),C=Xu);for(let k=0;k<C.length;k++){const H=Cn(d,C[k],w||u.handleEvent,!1,u.h||u);if(!H)break;u.g[H.key]=H}u=a.J?ao(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),Ms(),cm(a.i,a.v,a.B,a.l,a.S,a.u)}Sn.prototype.ba=function(a){a=a.target;const u=this.O;u&&kn(a)==3?u.j():this.Y(a)},Sn.prototype.Y=function(a){try{if(a==this.g)e:{const ce=kn(this.g),ze=this.g.ya(),Te=this.g.ca();if(!(ce<3)&&(ce!=3||this.g&&(this.h.h||this.g.la()||R1(this.g)))){this.K||ce!=4||ze==7||(ze==8||Te<=0?Ms(3):Ms(2)),ml(this);var u=this.g.ca();this.X=u;var d=pm(this);if(this.o=u==200,um(this.i,this.v,this.B,this.l,this.S,ce,u),this.o){if(this.U&&!this.L){t:{if(this.g){var w,C=this.g;if((w=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(w)){var k=w;break t}}k=null}if(a=k)Jr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,gl(this,a);else{this.o=!1,this.m=3,ft(12),br(this),$s(this);break e}}if(this.R){a=!0;let Qe;for(;!this.K&&this.C<d.length;)if(Qe=mm(this,d),Qe==fl){ce==4&&(this.m=4,ft(14),a=!1),Jr(this.i,this.l,null,"[Incomplete Response]");break}else if(Qe==l1){this.m=4,ft(15),Jr(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Jr(this.i,this.l,Qe,null),gl(this,Qe);if(u1(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ce!=4||d.length!=0||this.h.h||(this.m=1,ft(16),a=!1),this.o=this.o&&a,!a)Jr(this.i,this.l,d,"[Invalid Chunked Response]"),br(this),$s(this);else if(d.length>0&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.aa&&!H.P&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Tl(H),H.P=!0,ft(11))}}else Jr(this.i,this.l,d,null),gl(this,d);ce==4&&br(this),this.o&&!this.K&&(ce==4?V1(this.j,this):(this.o=!1,ho(this)))}else Rm(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,ft(12)):(this.m=0,ft(13)),br(this),$s(this)}}}catch{}finally{}};function pm(a){if(!u1(a))return a.g.la();const u=R1(a.g);if(u==="")return"";let d="";const w=u.length,C=kn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return br(a),$s(a),"";a.h.i=new o.TextDecoder}for(let k=0;k<w;k++)a.h.h=!0,d+=a.h.i.decode(u[k],{stream:!(C&&k==w-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function u1(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function mm(a,u){var d=a.C,w=u.indexOf(`
`,d);return w==-1?fl:(d=Number(u.substring(d,w)),isNaN(d)?l1:(w+=1,w+d>u.length?fl:(u=u.slice(w,w+d),a.C=w+d,u)))}Sn.prototype.cancel=function(){this.K=!0,br(this)};function ho(a){a.T=Date.now()+a.H,h1(a,a.H)}function h1(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Bs(h(a.aa,a),u)}function ml(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Sn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(hm(this.i,this.B),this.M!=2&&(Ms(),ft(17)),br(this),this.m=2,$s(this)):h1(this,this.T-a)};function $s(a){a.j.I==0||a.K||V1(a.j,a)}function br(a){ml(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Ju(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function gl(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||wl(d.h,a))){if(!a.L&&wl(d.h,a)&&d.I==3){try{var w=d.Ba.g.parse(u)}catch{w=null}if(Array.isArray(w)&&w.length==3){var C=w;if(C[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)_o(d),go(d);else break e;Al(d),ft(18)}}else d.xa=C[1],0<d.xa-d.K&&C[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Bs(h(d.Va,d),6e3));p1(d.h)<=1&&d.ta&&(d.ta=void 0)}else vr(d,11)}else if((a.L||d.g==a)&&_o(d),!b(u))for(C=d.Ba.g.parse(u),u=0;u<C.length;u++){let Te=C[u];const Qe=Te[0];if(!(Qe<=d.K))if(d.K=Qe,Te=Te[1],d.I==2)if(Te[0]=="c"){d.M=Te[1],d.ba=Te[2];const Wt=Te[3];Wt!=null&&(d.ka=Wt,d.j.info("VER="+d.ka));const Er=Te[4];Er!=null&&(d.za=Er,d.j.info("SVER="+d.za));const On=Te[5];On!=null&&typeof On=="number"&&On>0&&(w=1.5*On,d.O=w,d.j.info("backChannelRequestTimeoutMs_="+w)),w=d;const Nn=a.g;if(Nn){const yo=Nn.g?Nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yo){var k=w.h;k.g||yo.indexOf("spdy")==-1&&yo.indexOf("quic")==-1&&yo.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(_l(k,k.h),k.h=null))}if(w.G){const xl=Nn.g?Nn.g.getResponseHeader("X-HTTP-Session-Id"):null;xl&&(w.wa=xl,xe(w.J,w.G,xl))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),w=d;var H=a;if(w.na=F1(w,w.L?w.ba:null,w.W),H.L){m1(w.h,H);var ce=H,ze=w.O;ze&&(ce.H=ze),ce.D&&(ml(ce),ho(ce)),w.g=H}else D1(w);d.i.length>0&&wo(d)}else Te[0]!="stop"&&Te[0]!="close"||vr(d,7);else d.I==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?vr(d,7):El(d):Te[0]!="noop"&&d.l&&d.l.qa(Te),d.A=0)}}Ms(4)}catch{}}var gm=class{constructor(a,u){this.g=a,this.map=u}};function d1(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function f1(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function p1(a){return a.h?1:a.g?a.g.size:0}function wl(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function _l(a,u){a.g?a.g.add(u):a.h=u}function m1(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}d1.prototype.cancel=function(){if(this.i=g1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function g1(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return S(a.i)}var w1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wm(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const w=a[d].indexOf("=");let C,k=null;w>=0?(C=a[d].substring(0,w),k=a[d].substring(w+1)):C=a[d],u(C,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Rn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Rn?(this.l=a.l,Hs(this,a.j),this.o=a.o,this.g=a.g,js(this,a.u),this.h=a.h,bl(this,A1(a.i)),this.m=a.m):a&&(u=String(a).match(w1))?(this.l=!1,Hs(this,u[1]||"",!0),this.o=qs(u[2]||""),this.g=qs(u[3]||"",!0),js(this,u[4]),this.h=qs(u[5]||"",!0),bl(this,u[6]||"",!0),this.m=qs(u[7]||"")):(this.l=!1,this.i=new Gs(null,this.l))}Rn.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(zs(u,_1,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(zs(u,_1,!0),"@"),a.push(Us(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(zs(d,d.charAt(0)=="/"?ym:bm,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",zs(d,Em)),a.join("")},Rn.prototype.resolve=function(a){const u=Gt(this);let d=!!a.j;d?Hs(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var w=a.h;if(d)js(u,a.u);else if(d=!!a.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var C=u.h.lastIndexOf("/");C!=-1&&(w=u.h.slice(0,C+1)+w)}if(C=w,C==".."||C==".")w="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){w=C.lastIndexOf("/",0)==0,C=C.split("/");const k=[];for(let H=0;H<C.length;){const ce=C[H++];ce=="."?w&&H==C.length&&k.push(""):ce==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),w&&H==C.length&&k.push("")):(k.push(ce),w=!0)}w=k.join("/")}else w=C}return d?u.h=w:d=a.i.toString()!=="",d?bl(u,A1(a.i)):d=!!a.m,d&&(u.m=a.m),u};function Gt(a){return new Rn(a)}function Hs(a,u,d){a.j=d?qs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function js(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function bl(a,u,d){u instanceof Gs?(a.i=u,Am(a.i,a.l)):(d||(u=zs(u,vm)),a.i=new Gs(u,a.l))}function xe(a,u,d){a.i.set(u,d)}function fo(a){return xe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function qs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zs(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,_m),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function _m(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var _1=/[#\/\?@]/g,bm=/[#\?:]/g,ym=/[#\?]/g,vm=/[#\?@]/g,Em=/#/g;function Gs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function yr(a){a.g||(a.g=new Map,a.h=0,a.i&&wm(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Gs.prototype,n.add=function(a,u){yr(this),this.i=null,a=Zr(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function b1(a,u){yr(a),u=Zr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function y1(a,u){return yr(a),u=Zr(a,u),a.g.has(u)}n.forEach=function(a,u){yr(this),this.g.forEach(function(d,w){d.forEach(function(C){a.call(u,C,w,this)},this)},this)};function v1(a,u){yr(a);let d=[];if(typeof u=="string")y1(a,u)&&(d=d.concat(a.g.get(Zr(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}n.set=function(a,u){return yr(this),this.i=null,a=Zr(this,a),y1(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=v1(this,a),a.length>0?String(a[0]):u):u};function E1(a,u,d){b1(a,u),d.length>0&&(a.i=null,a.g.set(Zr(a,u),S(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let w=0;w<u.length;w++){var d=u[w];const C=Us(d);d=v1(this,d);for(let k=0;k<d.length;k++){let H=C;d[k]!==""&&(H+="="+Us(d[k])),a.push(H)}}return this.i=a.join("&")};function A1(a){const u=new Gs;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function Zr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Am(a,u){u&&!a.j&&(yr(a),a.i=null,a.g.forEach(function(d,w){const C=w.toLowerCase();w!=C&&(b1(this,w),E1(this,C,d))},a)),a.j=u}function Tm(a,u){const d=new Fs;if(o.Image){const w=new Image;w.onload=p(Pn,d,"TestLoadImage: loaded",!0,u,w),w.onerror=p(Pn,d,"TestLoadImage: error",!1,u,w),w.onabort=p(Pn,d,"TestLoadImage: abort",!1,u,w),w.ontimeout=p(Pn,d,"TestLoadImage: timeout",!1,u,w),o.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=a}else u(!1)}function xm(a,u){const d=new Fs,w=new AbortController,C=setTimeout(()=>{w.abort(),Pn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:w.signal}).then(k=>{clearTimeout(C),k.ok?Pn(d,"TestPingServer: ok",!0,u):Pn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Pn(d,"TestPingServer: error",!1,u)})}function Pn(a,u,d,w,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),w(d)}catch{}}function Im(){this.g=new lm}function yl(a){this.i=a.Sb||null,this.h=a.ab||!1}g(yl,Zu),yl.prototype.g=function(){return new po(this.i,this.h)};function po(a,u){rt.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(po,rt),n=po.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Ks(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ws(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ks(this)),this.g&&(this.readyState=3,Ks(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;T1(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function T1(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ws(this):Ks(this),this.readyState==3&&T1(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Ws(this))},n.Na=function(a){this.g&&(this.response=a,Ws(this))},n.ga=function(){this.g&&Ws(this)};function Ws(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ks(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Ks(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(po.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function x1(a){let u="";return Qr(a,function(d,w){u+=w,u+=":",u+=d,u+=`\r
`}),u}function vl(a,u,d){e:{for(w in d){var w=!1;break e}w=!0}w||(d=x1(d),typeof a=="string"?d!=null&&Us(d):xe(a,u,d))}function Pe(a){rt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(Pe,rt);var Cm=/^https?$/i,Sm=["POST","PUT"];n=Pe.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,d,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():o1.g(),this.g.onreadystatechange=x(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){I1(this,k);return}if(a=d||"",d=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var C in w)d.set(C,w[C]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const k of w.keys())d.set(k,w.get(k));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Sm,u,void 0)>=0)||w||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,H]of d)this.g.setRequestHeader(k,H);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(k){I1(this,k)}};function I1(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,C1(a),mo(a)}function C1(a){a.A||(a.A=!0,dt(a,"complete"),dt(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,dt(this,"complete"),dt(this,"abort"),mo(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mo(this,!0)),Pe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?S1(this):this.Xa())},n.Xa=function(){S1(this)};function S1(a){if(a.h&&typeof i<"u"){if(a.v&&kn(a)==4)setTimeout(a.Ca.bind(a),0);else if(dt(a,"readystatechange"),kn(a)==4){a.h=!1;try{const k=a.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var w;if(w=k===0){let H=String(a.D).match(w1)[1]||null;!H&&o.self&&o.self.location&&(H=o.self.location.protocol.slice(0,-1)),w=!Cm.test(H?H.toLowerCase():"")}d=w}if(d)dt(a,"complete"),dt(a,"success");else{a.o=6;try{var C=kn(a)>2?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.ca()+"]",C1(a)}}finally{mo(a)}}}}function mo(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||dt(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function kn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return kn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),am(u)}};function R1(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Rm(a){const u={};a=(a.g&&kn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<a.length;w++){if(b(a[w]))continue;var d=fm(a[w]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[C]||[];u[C]=k,k.push(d)}il(u,function(w){return w.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ys(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function P1(a){this.za=0,this.i=[],this.j=new Fs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ys("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ys("baseRetryDelayMs",5e3,a),this.Za=Ys("retryDelaySeedMs",1e4,a),this.Ta=Ys("forwardChannelMaxRetries",2,a),this.va=Ys("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new d1(a&&a.concurrentRequestLimit),this.Ba=new Im,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=P1.prototype,n.ka=8,n.I=1,n.connect=function(a,u,d,w){ft(0),this.W=a,this.H=u||{},d&&w!==void 0&&(this.H.OSID=d,this.H.OAID=w),this.F=this.X,this.J=F1(this,null,this.W),wo(this)};function El(a){if(k1(a),a.I==3){var u=a.V++,d=Gt(a.J);if(xe(d,"SID",a.M),xe(d,"RID",u),xe(d,"TYPE","terminate"),Qs(a,d),u=new Sn(a,a.j,u),u.M=2,u.A=fo(Gt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=U1(u.j,null),u.g.ea(u.A)),u.F=Date.now(),ho(u)}B1(a)}function go(a){a.g&&(Tl(a),a.g.cancel(),a.g=null)}function k1(a){go(a),a.v&&(o.clearTimeout(a.v),a.v=null),_o(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function wo(a){if(!f1(a.h)&&!a.m){a.m=!0;var u=a.Ea;F||y(),M||(F(),M=!0),A.add(u,a),a.D=0}}function Pm(a,u){return p1(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Bs(h(a.Ea,a,u),M1(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new Sn(this,this.j,a);let k=this.o;if(this.U&&(k?(k=ao(k),Xr(k,this.U)):k=this.U),this.u!==null||this.R||(C.J=k,k=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var w=this.i[d];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(u+=w,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=N1(this,C,u),d=Gt(this.J),xe(d,"RID",a),xe(d,"CVER",22),this.G&&xe(d,"X-HTTP-Session-Id",this.G),Qs(this,d),k&&(this.R?u="headers="+Us(x1(k))+"&"+u:this.u&&vl(d,this.u,k)),_l(this.h,C),this.Ra&&xe(d,"TYPE","init"),this.S?(xe(d,"$req",u),xe(d,"SID","null"),C.U=!0,pl(C,d,null)):pl(C,d,u),this.I=2}}else this.I==3&&(a?O1(this,a):this.i.length==0||f1(this.h)||O1(this))};function O1(a,u){var d;u?d=u.l:d=a.V++;const w=Gt(a.J);xe(w,"SID",a.M),xe(w,"RID",d),xe(w,"AID",a.K),Qs(a,w),a.u&&a.o&&vl(w,a.u,a.o),d=new Sn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=N1(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),_l(a.h,d),pl(d,w,u)}function Qs(a,u){a.H&&Qr(a.H,function(d,w){xe(u,w,d)}),a.l&&Qr({},function(d,w){xe(u,w,d)})}function N1(a,u,d){d=Math.min(a.i.length,d);const w=a.l?h(a.l.Ka,a.l,a):null;e:{var C=a.i;let ce=-1;for(;;){const ze=["count="+d];ce==-1?d>0?(ce=C[0].g,ze.push("ofs="+ce)):ce=0:ze.push("ofs="+ce);let Te=!0;for(let Qe=0;Qe<d;Qe++){var k=C[Qe].g;const Wt=C[Qe].map;if(k-=ce,k<0)ce=Math.max(0,C[Qe].g-100),Te=!1;else try{k="req"+k+"_"||"";try{var H=Wt instanceof Map?Wt:Object.entries(Wt);for(const[Er,On]of H){let Nn=On;l(On)&&(Nn=cl(On)),ze.push(k+Er+"="+encodeURIComponent(Nn))}}catch(Er){throw ze.push(k+"type="+encodeURIComponent("_badmap")),Er}}catch{w&&w(Wt)}}if(Te){H=ze.join("&");break e}}H=void 0}return a=a.i.splice(0,d),u.G=a,H}function D1(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;F||y(),M||(F(),M=!0),A.add(u,a),a.A=0}}function Al(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Bs(h(a.Da,a),M1(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,L1(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Bs(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ft(10),go(this),L1(this))};function Tl(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function L1(a){a.g=new Sn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=Gt(a.na);xe(u,"RID","rpc"),xe(u,"SID",a.M),xe(u,"AID",a.K),xe(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&xe(u,"TO",a.ia),xe(u,"TYPE","xmlhttp"),Qs(a,u),a.u&&a.o&&vl(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=fo(Gt(u)),d.u=null,d.R=!0,c1(d,a)}n.Va=function(){this.C!=null&&(this.C=null,go(this),Al(this),ft(19))};function _o(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function V1(a,u){var d=null;if(a.g==u){_o(a),Tl(a),a.g=null;var w=2}else if(wl(a.h,u))d=u.G,m1(a.h,u),w=1;else return;if(a.I!=0){if(u.o)if(w==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var C=a.D;w=co(),dt(w,new s1(w,d)),wo(a)}else D1(a);else if(C=u.m,C==3||C==0&&u.X>0||!(w==1&&Pm(a,u)||w==2&&Al(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),C){case 1:vr(a,5);break;case 4:vr(a,10);break;case 3:vr(a,6);break;default:vr(a,2)}}}function M1(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function vr(a,u){if(a.j.info("Error code "+u),u==2){var d=h(a.bb,a),w=a.Ua;const C=!w;w=new Rn(w||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Hs(w,"https"),fo(w),C?Tm(w.toString(),d):xm(w.toString(),d)}else ft(2);a.I=0,a.l&&a.l.pa(u),B1(a),k1(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function B1(a){if(a.I=0,a.ja=[],a.l){const u=g1(a.h);(u.length!=0||a.i.length!=0)&&(R(a.ja,u),R(a.ja,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.oa()}}function F1(a,u,d){var w=d instanceof Rn?Gt(d):new Rn(d);if(w.g!="")u&&(w.g=u+"."+w.g),js(w,w.u);else{var C=o.location;w=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;const k=new Rn(null);w&&Hs(k,w),u&&(k.g=u),C&&js(k,C),d&&(k.h=d),w=k}return d=a.G,u=a.wa,d&&u&&xe(w,d,u),xe(w,"VER",a.ka),Qs(a,w),w}function U1(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new Pe(new yl({ab:d})):new Pe(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $1(){}n=$1.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function bo(){}bo.prototype.g=function(a,u){return new Ct(a,u)};function Ct(a,u){rt.call(this),this.g=new P1(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!b(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!b(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new es(this)}g(Ct,rt),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){El(this.g)},Ct.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=cl(a),a=d);u.i.push(new gm(u.Ya++,a)),u.I==3&&wo(u)},Ct.prototype.N=function(){this.g.l=null,delete this.j,El(this.g),delete this.g,Ct.Z.N.call(this)};function H1(a){ul.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}g(H1,ul);function j1(){hl.call(this),this.status=1}g(j1,hl);function es(a){this.g=a}g(es,$1),es.prototype.ra=function(){dt(this.g,"a")},es.prototype.qa=function(a){dt(this.g,new H1(a))},es.prototype.pa=function(a){dt(this.g,new j1)},es.prototype.oa=function(){dt(this.g,"b")},bo.prototype.createWebChannel=bo.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,J2=function(){return new bo},X2=function(){return co()},Q2=_r,ec={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},uo.NO_ERROR=0,uo.TIMEOUT=8,uo.HTTP_ERROR=6,Bo=uo,i1.COMPLETE="complete",Y2=i1,e1.EventType=Vs,Vs.OPEN="a",Vs.CLOSE="b",Vs.ERROR="c",Vs.MESSAGE="d",rt.prototype.listen=rt.prototype.J,ni=e1,Pe.prototype.listenOnce=Pe.prototype.K,Pe.prototype.getLastError=Pe.prototype.Ha,Pe.prototype.getLastErrorCode=Pe.prototype.ya,Pe.prototype.getStatus=Pe.prototype.ca,Pe.prototype.getResponseJson=Pe.prototype.La,Pe.prototype.getResponseText=Pe.prototype.la,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Fa,K2=Pe}).apply(typeof Eo<"u"?Eo:typeof self<"u"?self:typeof window<"u"?window:{});/*!
 * re2js
 * RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
 *
 * @version v0.4.3
 * @author Alexey Vasiliev
 * @homepage https://github.com/le0pard/re2js#readme
 * @repository github:le0pard/re2js
 * @license MIT
 */const Se=class Se{};_(Se,"FOLD_CASE",1),_(Se,"LITERAL",2),_(Se,"CLASS_NL",4),_(Se,"DOT_NL",8),_(Se,"ONE_LINE",16),_(Se,"NON_GREEDY",32),_(Se,"PERL_X",64),_(Se,"UNICODE_GROUPS",128),_(Se,"WAS_DOLLAR",256),_(Se,"MATCH_NL",Se.CLASS_NL|Se.DOT_NL),_(Se,"PERL",Se.CLASS_NL|Se.ONE_LINE|Se.PERL_X|Se.UNICODE_GROUPS),_(Se,"POSIX",0),_(Se,"UNANCHORED",0),_(Se,"ANCHOR_START",1),_(Se,"ANCHOR_BOTH",2);let q=Se;class P{static toUpperCase(e){const t=String.fromCodePoint(e).toUpperCase();if(t.length>1)return e;const r=String.fromCodePoint(t.codePointAt(0)).toLowerCase();return r.length>1||r.codePointAt(0)!==e?e:t.codePointAt(0)}static toLowerCase(e){const t=String.fromCodePoint(e).toLowerCase();if(t.length>1)return e;const r=String.fromCodePoint(t.codePointAt(0)).toUpperCase();return r.length>1||r.codePointAt(0)!==e?e:t.codePointAt(0)}}_(P,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]]));const f=class f{};_(f,"CASE_ORBIT",new Map([[75,107],[107,8490],[8490,75],[83,115],[115,383],[383,83],[181,924],[924,956],[956,181],[197,229],[229,8491],[8491,197],[452,453],[453,454],[454,452],[455,456],[456,457],[457,455],[458,459],[459,460],[460,458],[497,498],[498,499],[499,497],[837,921],[921,953],[953,8126],[8126,837],[914,946],[946,976],[976,914],[917,949],[949,1013],[1013,917],[920,952],[952,977],[977,1012],[1012,920],[922,954],[954,1008],[1008,922],[928,960],[960,982],[982,928],[929,961],[961,1009],[1009,929],[931,962],[962,963],[963,931],[934,966],[966,981],[981,934],[937,969],[969,8486],[8486,937],[1042,1074],[1074,7296],[7296,1042],[1044,1076],[1076,7297],[7297,1044],[1054,1086],[1086,7298],[7298,1054],[1057,1089],[1089,7299],[7299,1057],[1058,1090],[1090,7300],[7300,7301],[7301,1058],[1066,1098],[1098,7302],[7302,1066],[1122,1123],[1123,7303],[7303,1122],[7304,42570],[42570,42571],[42571,7304],[7776,7777],[7777,7835],[7835,7776],[223,7838],[7838,223],[8064,8072],[8072,8064],[8065,8073],[8073,8065],[8066,8074],[8074,8066],[8067,8075],[8075,8067],[8068,8076],[8076,8068],[8069,8077],[8077,8069],[8070,8078],[8078,8070],[8071,8079],[8079,8071],[8080,8088],[8088,8080],[8081,8089],[8089,8081],[8082,8090],[8090,8082],[8083,8091],[8091,8083],[8084,8092],[8092,8084],[8085,8093],[8093,8085],[8086,8094],[8094,8086],[8087,8095],[8095,8087],[8096,8104],[8104,8096],[8097,8105],[8105,8097],[8098,8106],[8106,8098],[8099,8107],[8107,8099],[8100,8108],[8108,8100],[8101,8109],[8109,8101],[8102,8110],[8110,8102],[8103,8111],[8111,8103],[8115,8124],[8124,8115],[8131,8140],[8140,8131],[912,8147],[8147,912],[944,8163],[8163,944],[8179,8188],[8188,8179],[64261,64262],[64262,64261],[66560,66600],[66600,66560],[66561,66601],[66601,66561],[66562,66602],[66602,66562],[66563,66603],[66603,66563],[66564,66604],[66604,66564],[66565,66605],[66605,66565],[66566,66606],[66606,66566],[66567,66607],[66607,66567],[66568,66608],[66608,66568],[66569,66609],[66609,66569],[66570,66610],[66610,66570],[66571,66611],[66611,66571],[66572,66612],[66612,66572],[66573,66613],[66613,66573],[66574,66614],[66614,66574],[66575,66615],[66615,66575],[66576,66616],[66616,66576],[66577,66617],[66617,66577],[66578,66618],[66618,66578],[66579,66619],[66619,66579],[66580,66620],[66620,66580],[66581,66621],[66621,66581],[66582,66622],[66622,66582],[66583,66623],[66623,66583],[66584,66624],[66624,66584],[66585,66625],[66625,66585],[66586,66626],[66626,66586],[66587,66627],[66627,66587],[66588,66628],[66628,66588],[66589,66629],[66629,66589],[66590,66630],[66630,66590],[66591,66631],[66631,66591],[66592,66632],[66632,66592],[66593,66633],[66633,66593],[66594,66634],[66634,66594],[66595,66635],[66635,66595],[66596,66636],[66636,66596],[66597,66637],[66637,66597],[66598,66638],[66638,66598],[66599,66639],[66639,66599],[66736,66776],[66776,66736],[66737,66777],[66777,66737],[66738,66778],[66778,66738],[66739,66779],[66779,66739],[66740,66780],[66780,66740],[66741,66781],[66781,66741],[66742,66782],[66782,66742],[66743,66783],[66783,66743],[66744,66784],[66784,66744],[66745,66785],[66785,66745],[66746,66786],[66786,66746],[66747,66787],[66787,66747],[66748,66788],[66788,66748],[66749,66789],[66789,66749],[66750,66790],[66790,66750],[66751,66791],[66791,66751],[66752,66792],[66792,66752],[66753,66793],[66793,66753],[66754,66794],[66794,66754],[66755,66795],[66795,66755],[66756,66796],[66796,66756],[66757,66797],[66797,66757],[66758,66798],[66798,66758],[66759,66799],[66799,66759],[66760,66800],[66800,66760],[66761,66801],[66801,66761],[66762,66802],[66802,66762],[66763,66803],[66803,66763],[66764,66804],[66804,66764],[66765,66805],[66805,66765],[66766,66806],[66806,66766],[66767,66807],[66807,66767],[66768,66808],[66808,66768],[66769,66809],[66809,66769],[66770,66810],[66810,66770],[66771,66811],[66811,66771],[66928,66967],[66967,66928],[66929,66968],[66968,66929],[66930,66969],[66969,66930],[66931,66970],[66970,66931],[66932,66971],[66971,66932],[66933,66972],[66972,66933],[66934,66973],[66973,66934],[66935,66974],[66974,66935],[66936,66975],[66975,66936],[66937,66976],[66976,66937],[66938,66977],[66977,66938],[66940,66979],[66979,66940],[66941,66980],[66980,66941],[66942,66981],[66981,66942],[66943,66982],[66982,66943],[66944,66983],[66983,66944],[66945,66984],[66984,66945],[66946,66985],[66985,66946],[66947,66986],[66986,66947],[66948,66987],[66987,66948],[66949,66988],[66988,66949],[66950,66989],[66989,66950],[66951,66990],[66990,66951],[66952,66991],[66991,66952],[66953,66992],[66992,66953],[66954,66993],[66993,66954],[66956,66995],[66995,66956],[66957,66996],[66996,66957],[66958,66997],[66997,66958],[66959,66998],[66998,66959],[66960,66999],[66999,66960],[66961,67e3],[67e3,66961],[66962,67001],[67001,66962],[66964,67003],[67003,66964],[66965,67004],[67004,66965],[68736,68800],[68800,68736],[68737,68801],[68801,68737],[68738,68802],[68802,68738],[68739,68803],[68803,68739],[68740,68804],[68804,68740],[68741,68805],[68805,68741],[68742,68806],[68806,68742],[68743,68807],[68807,68743],[68744,68808],[68808,68744],[68745,68809],[68809,68745],[68746,68810],[68810,68746],[68747,68811],[68811,68747],[68748,68812],[68812,68748],[68749,68813],[68813,68749],[68750,68814],[68814,68750],[68751,68815],[68815,68751],[68752,68816],[68816,68752],[68753,68817],[68817,68753],[68754,68818],[68818,68754],[68755,68819],[68819,68755],[68756,68820],[68820,68756],[68757,68821],[68821,68757],[68758,68822],[68822,68758],[68759,68823],[68823,68759],[68760,68824],[68824,68760],[68761,68825],[68825,68761],[68762,68826],[68826,68762],[68763,68827],[68827,68763],[68764,68828],[68828,68764],[68765,68829],[68829,68765],[68766,68830],[68830,68766],[68767,68831],[68831,68767],[68768,68832],[68832,68768],[68769,68833],[68833,68769],[68770,68834],[68834,68770],[68771,68835],[68835,68771],[68772,68836],[68836,68772],[68773,68837],[68837,68773],[68774,68838],[68838,68774],[68775,68839],[68839,68775],[68776,68840],[68840,68776],[68777,68841],[68841,68777],[68778,68842],[68842,68778],[68779,68843],[68843,68779],[68780,68844],[68844,68780],[68781,68845],[68845,68781],[68782,68846],[68846,68782],[68783,68847],[68847,68783],[68784,68848],[68848,68784],[68785,68849],[68849,68785],[68786,68850],[68850,68786],[71840,71872],[71872,71840],[71841,71873],[71873,71841],[71842,71874],[71874,71842],[71843,71875],[71875,71843],[71844,71876],[71876,71844],[71845,71877],[71877,71845],[71846,71878],[71878,71846],[71847,71879],[71879,71847],[71848,71880],[71880,71848],[71849,71881],[71881,71849],[71850,71882],[71882,71850],[71851,71883],[71883,71851],[71852,71884],[71884,71852],[71853,71885],[71885,71853],[71854,71886],[71886,71854],[71855,71887],[71887,71855],[71856,71888],[71888,71856],[71857,71889],[71889,71857],[71858,71890],[71890,71858],[71859,71891],[71891,71859],[71860,71892],[71892,71860],[71861,71893],[71893,71861],[71862,71894],[71894,71862],[71863,71895],[71895,71863],[71864,71896],[71896,71864],[71865,71897],[71897,71865],[71866,71898],[71898,71866],[71867,71899],[71899,71867],[71868,71900],[71900,71868],[71869,71901],[71901,71869],[71870,71902],[71902,71870],[71871,71903],[71903,71871],[93760,93792],[93792,93760],[93761,93793],[93793,93761],[93762,93794],[93794,93762],[93763,93795],[93795,93763],[93764,93796],[93796,93764],[93765,93797],[93797,93765],[93766,93798],[93798,93766],[93767,93799],[93799,93767],[93768,93800],[93800,93768],[93769,93801],[93801,93769],[93770,93802],[93802,93770],[93771,93803],[93803,93771],[93772,93804],[93804,93772],[93773,93805],[93805,93773],[93774,93806],[93806,93774],[93775,93807],[93807,93775],[93776,93808],[93808,93776],[93777,93809],[93809,93777],[93778,93810],[93810,93778],[93779,93811],[93811,93779],[93780,93812],[93812,93780],[93781,93813],[93813,93781],[93782,93814],[93814,93782],[93783,93815],[93815,93783],[93784,93816],[93816,93784],[93785,93817],[93817,93785],[93786,93818],[93818,93786],[93787,93819],[93819,93787],[93788,93820],[93820,93788],[93789,93821],[93821,93789],[93790,93822],[93822,93790],[93791,93823],[93823,93791],[125184,125218],[125218,125184],[125185,125219],[125219,125185],[125186,125220],[125220,125186],[125187,125221],[125221,125187],[125188,125222],[125222,125188],[125189,125223],[125223,125189],[125190,125224],[125224,125190],[125191,125225],[125225,125191],[125192,125226],[125226,125192],[125193,125227],[125227,125193],[125194,125228],[125228,125194],[125195,125229],[125229,125195],[125196,125230],[125230,125196],[125197,125231],[125231,125197],[125198,125232],[125232,125198],[125199,125233],[125233,125199],[125200,125234],[125234,125200],[125201,125235],[125235,125201],[125202,125236],[125236,125202],[125203,125237],[125237,125203],[125204,125238],[125238,125204],[125205,125239],[125239,125205],[125206,125240],[125240,125206],[125207,125241],[125241,125207],[125208,125242],[125242,125208],[125209,125243],[125243,125209],[125210,125244],[125244,125210],[125211,125245],[125245,125211],[125212,125246],[125246,125212],[125213,125247],[125247,125213],[125214,125248],[125248,125214],[125215,125249],[125249,125215],[125216,125250],[125250,125216],[125217,125251],[125251,125217]])),_(f,"C",[[0,31,1],[127,159,1],[173,888,715],[889,896,7],[897,899,1],[907,909,2],[930,1328,398],[1367,1368,1],[1419,1420,1],[1424,1480,56],[1481,1487,1],[1515,1518,1],[1525,1541,1],[1564,1757,193],[1806,1807,1],[1867,1868,1],[1970,1983,1],[2043,2044,1],[2094,2095,1],[2111,2140,29],[2141,2143,2],[2155,2159,1],[2191,2199,1],[2274,2436,162],[2445,2446,1],[2449,2450,1],[2473,2481,8],[2483,2485,1],[2490,2491,1],[2501,2502,1],[2505,2506,1],[2511,2518,1],[2520,2523,1],[2526,2532,6],[2533,2559,26],[2560,2564,4],[2571,2574,1],[2577,2578,1],[2601,2609,8],[2612,2618,3],[2619,2621,2],[2627,2630,1],[2633,2634,1],[2638,2640,1],[2642,2648,1],[2653,2655,2],[2656,2661,1],[2679,2688,1],[2692,2702,10],[2706,2729,23],[2737,2740,3],[2746,2747,1],[2758,2766,4],[2767,2769,2],[2770,2783,1],[2788,2789,1],[2802,2808,1],[2816,2820,4],[2829,2830,1],[2833,2834,1],[2857,2865,8],[2868,2874,6],[2875,2885,10],[2886,2889,3],[2890,2894,4],[2895,2900,1],[2904,2907,1],[2910,2916,6],[2917,2936,19],[2937,2945,1],[2948,2955,7],[2956,2957,1],[2961,2966,5],[2967,2968,1],[2971,2973,2],[2976,2978,1],[2981,2983,1],[2987,2989,1],[3002,3005,1],[3011,3013,1],[3017,3022,5],[3023,3025,2],[3026,3030,1],[3032,3045,1],[3067,3071,1],[3085,3089,4],[3113,3130,17],[3131,3141,10],[3145,3150,5],[3151,3156,1],[3159,3163,4],[3164,3166,2],[3167,3172,5],[3173,3184,11],[3185,3190,1],[3213,3217,4],[3241,3252,11],[3258,3259,1],[3269,3273,4],[3278,3284,1],[3287,3292,1],[3295,3300,5],[3301,3312,11],[3316,3327,1],[3341,3345,4],[3397,3401,4],[3408,3411,1],[3428,3429,1],[3456,3460,4],[3479,3481,1],[3506,3516,10],[3518,3519,1],[3527,3529,1],[3531,3534,1],[3541,3543,2],[3552,3557,1],[3568,3569,1],[3573,3584,1],[3643,3646,1],[3676,3712,1],[3715,3717,2],[3723,3748,25],[3750,3774,24],[3775,3781,6],[3783,3791,8],[3802,3803,1],[3808,3839,1],[3912,3949,37],[3950,3952,1],[3992,4029,37],[4045,4059,14],[4060,4095,1],[4294,4296,2],[4297,4300,1],[4302,4303,1],[4681,4686,5],[4687,4695,8],[4697,4702,5],[4703,4745,42],[4750,4751,1],[4785,4790,5],[4791,4799,8],[4801,4806,5],[4807,4823,16],[4881,4886,5],[4887,4955,68],[4956,4989,33],[4990,4991,1],[5018,5023,1],[5110,5111,1],[5118,5119,1],[5789,5791,1],[5881,5887,1],[5910,5918,1],[5943,5951,1],[5972,5983,1],[5997,6001,4],[6004,6015,1],[6110,6111,1],[6122,6127,1],[6138,6143,1],[6158,6170,12],[6171,6175,1],[6265,6271,1],[6315,6319,1],[6390,6399,1],[6431,6444,13],[6445,6447,1],[6460,6463,1],[6465,6467,1],[6510,6511,1],[6517,6527,1],[6572,6575,1],[6602,6607,1],[6619,6621,1],[6684,6685,1],[6751,6781,30],[6782,6794,12],[6795,6799,1],[6810,6815,1],[6830,6831,1],[6863,6911,1],[6989,6991,1],[7039,7156,117],[7157,7163,1],[7224,7226,1],[7242,7244,1],[7305,7311,1],[7355,7356,1],[7368,7375,1],[7419,7423,1],[7958,7959,1],[7966,7967,1],[8006,8007,1],[8014,8015,1],[8024,8030,2],[8062,8063,1],[8117,8133,16],[8148,8149,1],[8156,8176,20],[8177,8181,4],[8191,8203,12],[8204,8207,1],[8234,8238,1],[8288,8303,1],[8306,8307,1],[8335,8349,14],[8350,8351,1],[8385,8399,1],[8433,8447,1],[8588,8591,1],[9255,9279,1],[9291,9311,1],[11124,11125,1],[11158,11508,350],[11509,11512,1],[11558,11560,2],[11561,11564,1],[11566,11567,1],[11624,11630,1],[11633,11646,1],[11671,11679,1],[11687,11743,8],[11870,11903,1],[11930,12020,90],[12021,12031,1],[12246,12271,1],[12352,12439,87],[12440,12544,104],[12545,12548,1],[12592,12687,95],[12772,12782,1],[12831,42125,29294],[42126,42127,1],[42183,42191,1],[42540,42559,1],[42744,42751,1],[42955,42959,1],[42962,42964,2],[42970,42993,1],[43053,43055,1],[43066,43071,1],[43128,43135,1],[43206,43213,1],[43226,43231,1],[43348,43358,1],[43389,43391,1],[43470,43482,12],[43483,43485,1],[43519,43575,56],[43576,43583,1],[43598,43599,1],[43610,43611,1],[43715,43738,1],[43767,43776,1],[43783,43784,1],[43791,43792,1],[43799,43807,1],[43815,43823,8],[43884,43887,1],[44014,44015,1],[44026,44031,1],[55204,55215,1],[55239,55242,1],[55292,63743,1],[64110,64111,1],[64218,64255,1],[64263,64274,1],[64280,64284,1],[64311,64317,6],[64319,64325,3],[64451,64466,1],[64912,64913,1],[64968,64974,1],[64976,65007,1],[65050,65055,1],[65107,65127,20],[65132,65135,1],[65141,65277,136],[65278,65280,1],[65471,65473,1],[65480,65481,1],[65488,65489,1],[65496,65497,1],[65501,65503,1],[65511,65519,8],[65520,65531,1],[65534,65535,1],[65548,65575,27],[65595,65598,3],[65614,65615,1],[65630,65663,1],[65787,65791,1],[65795,65798,1],[65844,65846,1],[65935,65949,14],[65950,65951,1],[65953,65999,1],[66046,66175,1],[66205,66207,1],[66257,66271,1],[66300,66303,1],[66340,66348,1],[66379,66383,1],[66427,66431,1],[66462,66500,38],[66501,66503,1],[66518,66559,1],[66718,66719,1],[66730,66735,1],[66772,66775,1],[66812,66815,1],[66856,66863,1],[66916,66926,1],[66939,66955,16],[66963,66966,3],[66978,66994,16],[67002,67005,3],[67006,67071,1],[67383,67391,1],[67414,67423,1],[67432,67455,1],[67462,67505,43],[67515,67583,1],[67590,67591,1],[67593,67638,45],[67641,67643,1],[67645,67646,1],[67670,67743,73],[67744,67750,1],[67760,67807,1],[67827,67830,3],[67831,67834,1],[67868,67870,1],[67898,67902,1],[67904,67967,1],[68024,68027,1],[68048,68049,1],[68100,68103,3],[68104,68107,1],[68116,68120,4],[68150,68151,1],[68155,68158,1],[68169,68175,1],[68185,68191,1],[68256,68287,1],[68327,68330,1],[68343,68351,1],[68406,68408,1],[68438,68439,1],[68467,68471,1],[68498,68504,1],[68509,68520,1],[68528,68607,1],[68681,68735,1],[68787,68799,1],[68851,68857,1],[68904,68911,1],[68922,69215,1],[69247,69290,43],[69294,69295,1],[69298,69372,1],[69416,69423,1],[69466,69487,1],[69514,69551,1],[69580,69599,1],[69623,69631,1],[69710,69713,1],[69750,69758,1],[69821,69827,6],[69828,69839,1],[69865,69871,1],[69882,69887,1],[69941,69960,19],[69961,69967,1],[70007,70015,1],[70112,70133,21],[70134,70143,1],[70162,70210,48],[70211,70271,1],[70279,70281,2],[70286,70302,16],[70314,70319,1],[70379,70383,1],[70394,70399,1],[70404,70413,9],[70414,70417,3],[70418,70441,23],[70449,70452,3],[70458,70469,11],[70470,70473,3],[70474,70478,4],[70479,70481,2],[70482,70486,1],[70488,70492,1],[70500,70501,1],[70509,70511,1],[70517,70655,1],[70748,70754,6],[70755,70783,1],[70856,70863,1],[70874,71039,1],[71094,71095,1],[71134,71167,1],[71237,71247,1],[71258,71263,1],[71277,71295,1],[71354,71359,1],[71370,71423,1],[71451,71452,1],[71468,71471,1],[71495,71679,1],[71740,71839,1],[71923,71934,1],[71943,71944,1],[71946,71947,1],[71956,71959,3],[71990,71993,3],[71994,72007,13],[72008,72015,1],[72026,72095,1],[72104,72105,1],[72152,72153,1],[72165,72191,1],[72264,72271,1],[72355,72367,1],[72441,72447,1],[72458,72703,1],[72713,72759,46],[72774,72783,1],[72813,72815,1],[72848,72849,1],[72872,72887,15],[72888,72959,1],[72967,72970,3],[73015,73017,1],[73019,73022,3],[73032,73039,1],[73050,73055,1],[73062,73065,3],[73103,73106,3],[73113,73119,1],[73130,73439,1],[73465,73471,1],[73489,73531,42],[73532,73533,1],[73562,73647,1],[73649,73663,1],[73714,73726,1],[74650,74751,1],[74863,74869,6],[74870,74879,1],[75076,77711,1],[77811,77823,1],[78896,78911,1],[78934,82943,1],[83527,92159,1],[92729,92735,1],[92767,92778,11],[92779,92781,1],[92863,92874,11],[92875,92879,1],[92910,92911,1],[92918,92927,1],[92998,93007,1],[93018,93026,8],[93048,93052,1],[93072,93759,1],[93851,93951,1],[94027,94030,1],[94088,94094,1],[94112,94175,1],[94181,94191,1],[94194,94207,1],[100344,100351,1],[101590,101631,1],[101641,110575,1],[110580,110588,8],[110591,110883,292],[110884,110897,1],[110899,110927,1],[110931,110932,1],[110934,110947,1],[110952,110959,1],[111356,113663,1],[113771,113775,1],[113789,113791,1],[113801,113807,1],[113818,113819,1],[113824,118527,1],[118574,118575,1],[118599,118607,1],[118724,118783,1],[119030,119039,1],[119079,119080,1],[119155,119162,1],[119275,119295,1],[119366,119487,1],[119508,119519,1],[119540,119551,1],[119639,119647,1],[119673,119807,1],[119893,119965,72],[119968,119969,1],[119971,119972,1],[119975,119976,1],[119981,119994,13],[119996,120004,8],[120070,120075,5],[120076,120085,9],[120093,120122,29],[120127,120133,6],[120135,120137,1],[120145,120486,341],[120487,120780,293],[120781,121484,703],[121485,121498,1],[121504,121520,16],[121521,122623,1],[122655,122660,1],[122667,122879,1],[122887,122905,18],[122906,122914,8],[122917,122923,6],[122924,122927,1],[122990,123022,1],[123024,123135,1],[123181,123183,1],[123198,123199,1],[123210,123213,1],[123216,123535,1],[123567,123583,1],[123642,123646,1],[123648,124111,1],[124154,124895,1],[124903,124908,5],[124911,124927,16],[125125,125126,1],[125143,125183,1],[125260,125263,1],[125274,125277,1],[125280,126064,1],[126133,126208,1],[126270,126463,1],[126468,126496,28],[126499,126501,2],[126502,126504,2],[126515,126520,5],[126522,126524,2],[126525,126529,1],[126531,126534,1],[126536,126540,2],[126544,126547,3],[126549,126550,1],[126552,126560,2],[126563,126565,2],[126566,126571,5],[126579,126589,5],[126591,126602,11],[126620,126624,1],[126628,126634,6],[126652,126703,1],[126706,126975,1],[127020,127023,1],[127124,127135,1],[127151,127152,1],[127168,127184,16],[127222,127231,1],[127406,127461,1],[127491,127503,1],[127548,127551,1],[127561,127567,1],[127570,127583,1],[127590,127743,1],[128728,128731,1],[128749,128751,1],[128765,128767,1],[128887,128890,1],[128986,128991,1],[129004,129007,1],[129009,129023,1],[129036,129039,1],[129096,129103,1],[129114,129119,1],[129160,129167,1],[129198,129199,1],[129202,129279,1],[129620,129631,1],[129646,129647,1],[129661,129663,1],[129673,129679,1],[129726,129734,8],[129735,129741,1],[129756,129759,1],[129769,129775,1],[129785,129791,1],[129939,129995,56],[129996,130031,1],[130042,131071,1],[173792,173823,1],[177978,177983,1],[178206,178207,1],[183970,183983,1],[191457,191471,1],[192094,194559,1],[195102,196607,1],[201547,201551,1],[205744,917759,1],[918e3,1114111,1]]),_(f,"Cc",[[0,31,1],[127,159,1]]),_(f,"Cf",[[173,1536,1363],[1537,1541,1],[1564,1757,193],[1807,2192,385],[2193,2274,81],[6158,8203,2045],[8204,8207,1],[8234,8238,1],[8288,8292,1],[8294,8303,1],[65279,65529,250],[65530,65531,1],[69821,69837,16],[78896,78911,1],[113824,113827,1],[119155,119162,1],[917505,917536,31],[917537,917631,1]]),_(f,"Co",[[57344,63743,1],[983040,1048573,1],[1048576,1114109,1]]),_(f,"Cs",[[55296,57343,1]]),_(f,"L",[[65,90,1],[97,122,1],[170,181,11],[186,192,6],[193,214,1],[216,246,1],[248,705,1],[710,721,1],[736,740,1],[748,750,2],[880,884,1],[886,887,1],[890,893,1],[895,902,7],[904,906,1],[908,910,2],[911,929,1],[931,1013,1],[1015,1153,1],[1162,1327,1],[1329,1366,1],[1369,1376,7],[1377,1416,1],[1488,1514,1],[1519,1522,1],[1568,1610,1],[1646,1647,1],[1649,1747,1],[1749,1765,16],[1766,1774,8],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2036,2037,1],[2042,2048,6],[2049,2069,1],[2074,2084,10],[2088,2112,24],[2113,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2249,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2417,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3654,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3782,3804,22],[3805,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4256,18],[4257,4293,1],[4295,4301,6],[4304,4346,1],[4348,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5024,5109,1],[5112,5117,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6103,6108,5],[6176,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6823,6917,94],[6918,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7293,1],[7296,7304,1],[7312,7354,1],[7357,7359,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,7424,6],[7425,7615,1],[7680,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8124,1],[8126,8130,4],[8131,8132,1],[8134,8140,1],[8144,8147,1],[8150,8155,1],[8160,8172,1],[8178,8180,1],[8182,8188,1],[8305,8319,14],[8336,8348,1],[8450,8455,5],[8458,8467,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8495,8505,1],[8508,8511,1],[8517,8521,1],[8526,8579,53],[8580,11264,2684],[11265,11492,1],[11499,11502,1],[11506,11507,1],[11520,11557,1],[11559,11565,6],[11568,11623,1],[11631,11648,17],[11649,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[11823,12293,470],[12294,12337,43],[12338,12341,1],[12347,12348,1],[12353,12438,1],[12445,12447,1],[12449,12538,1],[12540,12543,1],[12549,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,42124,1],[42192,42237,1],[42240,42508,1],[42512,42527,1],[42538,42539,1],[42560,42606,1],[42623,42653,1],[42656,42725,1],[42775,42783,1],[42786,42888,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43471,43488,17],[43489,43492,1],[43494,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43741,1],[43744,43754,1],[43762,43764,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43824,43866,1],[43868,43881,1],[43888,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64256,64262,1],[64275,64279,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65313,65338,1],[65345,65370,1],[65382,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66560,66717,1],[66736,66771,1],[66776,66811,1],[66816,66855,1],[66864,66915,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68736,68786,1],[68800,68850,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71840,71903,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[92992,92995,1],[93027,93047,1],[93053,93071,1],[93760,93823,1],[93952,94026,1],[94032,94099,67],[94100,94111,1],[94176,94177,1],[94179,94208,29],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120512,1],[120514,120538,1],[120540,120570,1],[120572,120596,1],[120598,120628,1],[120630,120654,1],[120656,120686,1],[120688,120712,1],[120714,120744,1],[120746,120770,1],[120772,120779,1],[122624,122654,1],[122661,122666,1],[122928,122989,1],[123136,123180,1],[123191,123197,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124139,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[125184,125251,1],[125259,126464,1205],[126465,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),_(f,"foldL",[[837,837,1]]),_(f,"Ll",[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,311,2],[312,328,2],[329,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[397,402,5],[405,409,4],[410,411,1],[414,417,3],[419,421,2],[424,426,2],[427,429,2],[432,436,4],[438,441,3],[442,445,3],[446,447,1],[454,460,3],[462,476,2],[477,495,2],[496,499,3],[501,505,4],[507,563,2],[564,569,1],[572,575,3],[576,578,2],[583,591,2],[592,659,1],[661,687,1],[881,883,2],[887,891,4],[892,893,1],[912,940,28],[941,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1020,1072,52],[1073,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1376,1416,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7424,7467,1],[7531,7543,1],[7545,7578,1],[7681,7829,2],[7830,7837,1],[7839,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8016,8023,1],[8032,8039,1],[8048,8061,1],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8112,8116,1],[8118,8119,1],[8126,8130,4],[8131,8132,1],[8134,8135,1],[8144,8147,1],[8150,8151,1],[8160,8167,1],[8178,8180,1],[8182,8183,1],[8458,8462,4],[8463,8467,4],[8495,8505,5],[8508,8509,1],[8518,8521,1],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11377,11379,2],[11380,11382,2],[11383,11387,1],[11393,11491,2],[11492,11500,8],[11502,11507,5],[11520,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42800,42801,1],[42803,42865,2],[42866,42872,1],[42874,42876,2],[42879,42887,2],[42892,42894,2],[42897,42899,2],[42900,42901,1],[42903,42921,2],[42927,42933,6],[42935,42947,2],[42952,42954,2],[42961,42969,2],[42998,43002,4],[43824,43866,1],[43872,43880,1],[43888,43967,1],[64256,64262,1],[64275,64279,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[119834,119859,1],[119886,119892,1],[119894,119911,1],[119938,119963,1],[119990,119993,1],[119995,119997,2],[119998,120003,1],[120005,120015,1],[120042,120067,1],[120094,120119,1],[120146,120171,1],[120198,120223,1],[120250,120275,1],[120302,120327,1],[120354,120379,1],[120406,120431,1],[120458,120485,1],[120514,120538,1],[120540,120545,1],[120572,120596,1],[120598,120603,1],[120630,120654,1],[120656,120661,1],[120688,120712,1],[120714,120719,1],[120746,120770,1],[120772,120777,1],[120779,122624,1845],[122625,122633,1],[122635,122654,1],[122661,122666,1],[125218,125251,1]]),_(f,"foldLl",[[65,90,1],[192,214,1],[216,222,1],[256,302,2],[306,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,453,1],[455,456,1],[458,459,1],[461,475,2],[478,494,2],[497,498,1],[500,502,2],[503,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[837,880,43],[882,886,4],[895,902,7],[904,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,984,9],[986,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8072,8079,1],[8088,8095,1],[8104,8111,1],[8120,8124,1],[8136,8140,1],[8152,8155,1],[8168,8172,1],[8184,8188,1],[8486,8490,4],[8491,8498,7],[8579,11264,2685],[11265,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[125184,125217,1]]),_(f,"Lm",[[688,705,1],[710,721,1],[736,740,1],[748,750,2],[884,890,6],[1369,1600,231],[1765,1766,1],[2036,2037,1],[2042,2074,32],[2084,2088,4],[2249,2417,168],[3654,3782,128],[4348,6103,1755],[6211,6823,612],[7288,7293,1],[7468,7530,1],[7544,7579,35],[7580,7615,1],[8305,8319,14],[8336,8348,1],[11388,11389,1],[11631,11823,192],[12293,12337,44],[12338,12341,1],[12347,12445,98],[12446,12540,94],[12541,12542,1],[40981,42232,1251],[42233,42237,1],[42508,42623,115],[42652,42653,1],[42775,42783,1],[42864,42888,24],[42994,42996,1],[43e3,43001,1],[43471,43494,23],[43632,43741,109],[43763,43764,1],[43868,43871,1],[43881,65392,21511],[65438,65439,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[92992,92995,1],[94099,94111,1],[94176,94177,1],[94179,110576,16397],[110577,110579,1],[110581,110587,1],[110589,110590,1],[122928,122989,1],[123191,123197,1],[124139,125259,1120]]),_(f,"Lo",[[170,186,16],[443,448,5],[449,451,1],[660,1488,828],[1489,1514,1],[1519,1522,1],[1568,1599,1],[1601,1610,1],[1646,1647,1],[1649,1747,1],[1749,1774,25],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2048,2069,1],[2112,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2248,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2418,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3653,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3804,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4352,114],[4353,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6108,6176,68],[6177,6210,1],[6212,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6917,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7287,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,8501,1083],[8502,8504,1],[11568,11623,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[12294,12348,54],[12353,12438,1],[12447,12449,2],[12450,12538,1],[12543,12549,6],[12550,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,40980,1],[40982,42124,1],[42192,42231,1],[42240,42507,1],[42512,42527,1],[42538,42539,1],[42606,42656,50],[42657,42725,1],[42895,42999,104],[43003,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43488,43492,1],[43495,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43631,1],[43633,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43740,1],[43744,43754,1],[43762,43777,15],[43778,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43968,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65382,65391,1],[65393,65437,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66640,66717,1],[66816,66855,1],[66864,66915,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[93027,93047,1],[93053,93071,1],[93952,94026,1],[94032,94208,176],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[122634,123136,502],[123137,123180,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124138,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),_(f,"Lt",[[453,459,3],[498,8072,7574],[8073,8079,1],[8088,8095,1],[8104,8111,1],[8124,8140,16],[8188,8188,1]]),_(f,"foldLt",[[452,454,2],[455,457,2],[458,460,2],[497,499,2],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8115,8131,16],[8179,8179,1]]),_(f,"Lu",[[65,90,1],[192,214,1],[216,222,1],[256,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,461,3],[463,475,2],[478,494,2],[497,500,3],[502,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[880,882,2],[886,895,9],[902,904,2],[905,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,978,3],[979,980,1],[984,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8120,8123,1],[8136,8139,1],[8152,8155,1],[8168,8172,1],[8184,8187,1],[8450,8455,5],[8459,8461,1],[8464,8466,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8496,8499,1],[8510,8511,1],[8517,8579,62],[11264,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[119808,119833,1],[119860,119885,1],[119912,119937,1],[119964,119966,2],[119967,119973,3],[119974,119977,3],[119978,119980,1],[119982,119989,1],[120016,120041,1],[120068,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120120,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120172,120197,1],[120224,120249,1],[120276,120301,1],[120328,120353,1],[120380,120405,1],[120432,120457,1],[120488,120512,1],[120546,120570,1],[120604,120628,1],[120662,120686,1],[120720,120744,1],[120778,125184,4406],[125185,125217,1]]),_(f,"Upper",f.Lu),_(f,"foldLu",[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,303,2],[307,311,2],[314,328,2],[331,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[402,405,3],[409,410,1],[414,417,3],[419,421,2],[424,429,5],[432,436,4],[438,441,3],[445,447,2],[453,454,1],[456,457,1],[459,460,1],[462,476,2],[477,495,2],[498,499,1],[501,505,4],[507,543,2],[547,563,2],[572,575,3],[576,578,2],[583,591,2],[592,596,1],[598,599,1],[601,603,2],[604,608,4],[609,613,2],[614,616,2],[617,620,1],[623,625,2],[626,629,3],[637,640,3],[642,643,1],[647,652,1],[658,669,11],[670,837,167],[881,883,2],[887,891,4],[892,893,1],[940,943,1],[945,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1072,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1377,1414,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7545,7549,4],[7566,7681,115],[7683,7829,2],[7835,7841,6],[7843,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8017,8023,2],[8032,8039,1],[8048,8061,1],[8112,8113,1],[8126,8144,18],[8145,8160,15],[8161,8165,4],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11379,11382,3],[11393,11491,2],[11500,11502,2],[11507,11520,13],[11521,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42803,42863,2],[42874,42876,2],[42879,42887,2],[42892,42897,5],[42899,42900,1],[42903,42921,2],[42933,42947,2],[42952,42954,2],[42961,42967,6],[42969,42998,29],[43859,43888,29],[43889,43967,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[125218,125251,1]]),_(f,"M",[[768,879,1],[1155,1161,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2307,1],[2362,2364,1],[2366,2383,1],[2385,2391,1],[2402,2403,1],[2433,2435,1],[2492,2494,2],[2495,2500,1],[2503,2504,1],[2507,2509,1],[2519,2530,11],[2531,2558,27],[2561,2563,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2672,31],[2673,2677,4],[2689,2691,1],[2748,2750,2],[2751,2757,1],[2759,2761,1],[2763,2765,1],[2786,2787,1],[2810,2815,1],[2817,2819,1],[2876,2878,2],[2879,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2914,2915,1],[2946,3006,60],[3007,3010,1],[3014,3016,1],[3018,3021,1],[3031,3072,41],[3073,3076,1],[3132,3134,2],[3135,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3203,1],[3260,3262,2],[3263,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3298,3299,1],[3315,3328,13],[3329,3331,1],[3387,3388,1],[3390,3396,1],[3398,3400,1],[3402,3405,1],[3415,3426,11],[3427,3457,30],[3458,3459,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3570,3571,1],[3633,3636,3],[3637,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3902,3903,1],[3953,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4139,101],[4140,4158,1],[4182,4185,1],[4190,4192,1],[4194,4196,1],[4199,4205,1],[4209,4212,1],[4226,4237,1],[4239,4250,11],[4251,4253,1],[4957,4959,1],[5906,5909,1],[5938,5940,1],[5970,5971,1],[6002,6003,1],[6068,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6443,1],[6448,6459,1],[6679,6683,1],[6741,6750,1],[6752,6780,1],[6783,6832,49],[6833,6862,1],[6912,6916,1],[6964,6980,1],[7019,7027,1],[7040,7042,1],[7073,7085,1],[7142,7155,1],[7204,7223,1],[7376,7378,1],[7380,7400,1],[7405,7412,7],[7415,7417,1],[7616,7679,1],[8400,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12335,1],[12441,12442,1],[42607,42610,1],[42612,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43043,24],[43044,43047,1],[43052,43136,84],[43137,43188,51],[43189,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43347,1],[43392,43395,1],[43443,43456,1],[43493,43561,68],[43562,43574,1],[43587,43596,9],[43597,43643,46],[43644,43645,1],[43696,43698,2],[43699,43700,1],[43703,43704,1],[43710,43711,1],[43713,43755,42],[43756,43759,1],[43765,43766,1],[44003,44010,1],[44012,44013,1],[64286,65024,738],[65025,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69632,69634,1],[69688,69702,1],[69744,69747,3],[69748,69759,11],[69760,69762,1],[69808,69818,1],[69826,69888,62],[69889,69890,1],[69927,69940,1],[69957,69958,1],[70003,70016,13],[70017,70018,1],[70067,70080,1],[70089,70092,1],[70094,70095,1],[70188,70199,1],[70206,70209,3],[70367,70378,1],[70400,70403,1],[70459,70460,1],[70462,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70502,3],[70503,70508,1],[70512,70516,1],[70709,70726,1],[70750,70832,82],[70833,70851,1],[71087,71093,1],[71096,71104,1],[71132,71133,1],[71216,71232,1],[71339,71351,1],[71453,71467,1],[71724,71738,1],[71984,71989,1],[71991,71992,1],[71995,71998,1],[72e3,72002,2],[72003,72145,142],[72146,72151,1],[72154,72160,1],[72164,72193,29],[72194,72202,1],[72243,72249,1],[72251,72254,1],[72263,72273,10],[72274,72283,1],[72330,72345,1],[72751,72758,1],[72760,72767,1],[72850,72871,1],[72873,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73098,67],[73099,73102,1],[73104,73105,1],[73107,73111,1],[73459,73462,1],[73472,73473,1],[73475,73524,49],[73525,73530,1],[73534,73538,1],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94033,2],[94034,94087,1],[94095,94098,1],[94180,94192,12],[94193,113821,19628],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119141,119145,1],[119149,119154,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]]),_(f,"foldM",[[921,953,32],[8126,8126,1]]),_(f,"Mc",[[2307,2363,56],[2366,2368,1],[2377,2380,1],[2382,2383,1],[2434,2435,1],[2494,2496,1],[2503,2504,1],[2507,2508,1],[2519,2563,44],[2622,2624,1],[2691,2750,59],[2751,2752,1],[2761,2763,2],[2764,2818,54],[2819,2878,59],[2880,2887,7],[2888,2891,3],[2892,2903,11],[3006,3007,1],[3009,3010,1],[3014,3016,1],[3018,3020,1],[3031,3073,42],[3074,3075,1],[3137,3140,1],[3202,3203,1],[3262,3264,2],[3265,3268,1],[3271,3272,1],[3274,3275,1],[3285,3286,1],[3315,3330,15],[3331,3390,59],[3391,3392,1],[3398,3400,1],[3402,3404,1],[3415,3458,43],[3459,3535,76],[3536,3537,1],[3544,3551,1],[3570,3571,1],[3902,3903,1],[3967,4139,172],[4140,4145,5],[4152,4155,3],[4156,4182,26],[4183,4194,11],[4195,4196,1],[4199,4205,1],[4227,4228,1],[4231,4236,1],[4239,4250,11],[4251,4252,1],[5909,5940,31],[6070,6078,8],[6079,6085,1],[6087,6088,1],[6435,6438,1],[6441,6443,1],[6448,6449,1],[6451,6456,1],[6681,6682,1],[6741,6743,2],[6753,6755,2],[6756,6765,9],[6766,6770,1],[6916,6965,49],[6971,6973,2],[6974,6977,1],[6979,6980,1],[7042,7073,31],[7078,7079,1],[7082,7143,61],[7146,7148,1],[7150,7154,4],[7155,7204,49],[7205,7211,1],[7220,7221,1],[7393,7415,22],[12334,12335,1],[43043,43044,1],[43047,43136,89],[43137,43188,51],[43189,43203,1],[43346,43347,1],[43395,43444,49],[43445,43450,5],[43451,43454,3],[43455,43456,1],[43567,43568,1],[43571,43572,1],[43597,43643,46],[43645,43755,110],[43758,43759,1],[43765,44003,238],[44004,44006,2],[44007,44009,2],[44010,44012,2],[69632,69634,2],[69762,69808,46],[69809,69810,1],[69815,69816,1],[69932,69957,25],[69958,70018,60],[70067,70069,1],[70079,70080,1],[70094,70188,94],[70189,70190,1],[70194,70195,1],[70197,70368,171],[70369,70370,1],[70402,70403,1],[70462,70463,1],[70465,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70709,210],[70710,70711,1],[70720,70721,1],[70725,70832,107],[70833,70834,1],[70841,70843,2],[70844,70846,1],[70849,71087,238],[71088,71089,1],[71096,71099,1],[71102,71216,114],[71217,71218,1],[71227,71228,1],[71230,71340,110],[71342,71343,1],[71350,71456,106],[71457,71462,5],[71724,71726,1],[71736,71984,248],[71985,71989,1],[71991,71992,1],[71997,72e3,3],[72002,72145,143],[72146,72147,1],[72156,72159,1],[72164,72249,85],[72279,72280,1],[72343,72751,408],[72766,72873,107],[72881,72884,3],[73098,73102,1],[73107,73108,1],[73110,73461,351],[73462,73475,13],[73524,73525,1],[73534,73535,1],[73537,94033,20496],[94034,94087,1],[94192,94193,1],[119141,119142,1],[119149,119154,1]]),_(f,"Me",[[1160,1161,1],[6846,8413,1567],[8414,8416,1],[8418,8420,1],[42608,42610,1]]),_(f,"Mn",[[768,879,1],[1155,1159,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2306,1],[2362,2364,2],[2369,2376,1],[2381,2385,4],[2386,2391,1],[2402,2403,1],[2433,2492,59],[2497,2500,1],[2509,2530,21],[2531,2558,27],[2561,2562,1],[2620,2625,5],[2626,2631,5],[2632,2635,3],[2636,2637,1],[2641,2672,31],[2673,2677,4],[2689,2690,1],[2748,2753,5],[2754,2757,1],[2759,2760,1],[2765,2786,21],[2787,2810,23],[2811,2815,1],[2817,2876,59],[2879,2881,2],[2882,2884,1],[2893,2901,8],[2902,2914,12],[2915,2946,31],[3008,3021,13],[3072,3076,4],[3132,3134,2],[3135,3136,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3260,59],[3263,3270,7],[3276,3277,1],[3298,3299,1],[3328,3329,1],[3387,3388,1],[3393,3396,1],[3405,3426,21],[3427,3457,30],[3530,3538,8],[3539,3540,1],[3542,3633,91],[3636,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3953,3966,1],[3968,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4141,103],[4142,4144,1],[4146,4151,1],[4153,4154,1],[4157,4158,1],[4184,4185,1],[4190,4192,1],[4209,4212,1],[4226,4229,3],[4230,4237,7],[4253,4957,704],[4958,4959,1],[5906,5908,1],[5938,5939,1],[5970,5971,1],[6002,6003,1],[6068,6069,1],[6071,6077,1],[6086,6089,3],[6090,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6434,1],[6439,6440,1],[6450,6457,7],[6458,6459,1],[6679,6680,1],[6683,6742,59],[6744,6750,1],[6752,6754,2],[6757,6764,1],[6771,6780,1],[6783,6832,49],[6833,6845,1],[6847,6862,1],[6912,6915,1],[6964,6966,2],[6967,6970,1],[6972,6978,6],[7019,7027,1],[7040,7041,1],[7074,7077,1],[7080,7081,1],[7083,7085,1],[7142,7144,2],[7145,7149,4],[7151,7153,1],[7212,7219,1],[7222,7223,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8400,8412,1],[8417,8421,4],[8422,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12333,1],[12441,12442,1],[42607,42612,5],[42613,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43045,26],[43046,43052,6],[43204,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43345,1],[43392,43394,1],[43443,43446,3],[43447,43449,1],[43452,43453,1],[43493,43561,68],[43562,43566,1],[43569,43570,1],[43573,43574,1],[43587,43596,9],[43644,43696,52],[43698,43700,1],[43703,43704,1],[43710,43711,1],[43713,43756,43],[43757,43766,9],[44005,44008,3],[44013,64286,20273],[65024,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69633,69688,55],[69689,69702,1],[69744,69747,3],[69748,69759,11],[69760,69761,1],[69811,69814,1],[69817,69818,1],[69826,69888,62],[69889,69890,1],[69927,69931,1],[69933,69940,1],[70003,70016,13],[70017,70070,53],[70071,70078,1],[70089,70092,1],[70095,70191,96],[70192,70193,1],[70196,70198,2],[70199,70206,7],[70209,70367,158],[70371,70378,1],[70400,70401,1],[70459,70460,1],[70464,70502,38],[70503,70508,1],[70512,70516,1],[70712,70719,1],[70722,70724,1],[70726,70750,24],[70835,70840,1],[70842,70847,5],[70848,70850,2],[70851,71090,239],[71091,71093,1],[71100,71101,1],[71103,71104,1],[71132,71133,1],[71219,71226,1],[71229,71231,2],[71232,71339,107],[71341,71344,3],[71345,71349,1],[71351,71453,102],[71454,71455,1],[71458,71461,1],[71463,71467,1],[71727,71735,1],[71737,71738,1],[71995,71996,1],[71998,72003,5],[72148,72151,1],[72154,72155,1],[72160,72193,33],[72194,72202,1],[72243,72248,1],[72251,72254,1],[72263,72273,10],[72274,72278,1],[72281,72283,1],[72330,72342,1],[72344,72345,1],[72752,72758,1],[72760,72765,1],[72767,72850,83],[72851,72871,1],[72874,72880,1],[72882,72883,1],[72885,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73104,73],[73105,73109,4],[73111,73459,348],[73460,73472,12],[73473,73526,53],[73527,73530,1],[73536,73538,2],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94095,64],[94096,94098,1],[94180,113821,19641],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]]),_(f,"foldMn",[[921,953,32],[8126,8126,1]]),_(f,"N",[[48,57,1],[178,179,1],[185,188,3],[189,190,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2548,2553,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[2930,2935,1],[3046,3058,1],[3174,3183,1],[3192,3198,1],[3302,3311,1],[3416,3422,1],[3430,3448,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3891,1],[4160,4169,1],[4240,4249,1],[4969,4988,1],[5870,5872,1],[6112,6121,1],[6128,6137,1],[6160,6169,1],[6470,6479,1],[6608,6618,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[8304,8308,4],[8309,8313,1],[8320,8329,1],[8528,8578,1],[8581,8585,1],[9312,9371,1],[9450,9471,1],[10102,10131,1],[11517,12295,778],[12321,12329,1],[12344,12346,1],[12690,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[42528,42537,1],[42726,42735,1],[43056,43061,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[65799,65843,1],[65856,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[66369,66378,9],[66513,66517,1],[66720,66729,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[68912,68921,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70113,70132,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71483,1],[71904,71922,1],[72016,72025,1],[72784,72812,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[73664,73684,1],[74752,74862,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125127,125135,1],[125264,125273,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1],[130032,130041,1]]),_(f,"Nd",[[48,57,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[3046,3055,1],[3174,3183,1],[3302,3311,1],[3430,3439,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3881,1],[4160,4169,1],[4240,4249,1],[6112,6121,1],[6160,6169,1],[6470,6479,1],[6608,6617,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[42528,42537,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[66720,66729,1],[68912,68921,1],[69734,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71481,1],[71904,71913,1],[72016,72025,1],[72784,72793,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125264,125273,1],[130032,130041,1]]),_(f,"Nl",[[5870,5872,1],[8544,8578,1],[8581,8584,1],[12295,12321,26],[12322,12329,1],[12344,12346,1],[42726,42735,1],[65856,65908,1],[66369,66378,9],[66513,66517,1],[74752,74862,1]]),_(f,"No",[[178,179,1],[185,188,3],[189,190,1],[2548,2553,1],[2930,2935,1],[3056,3058,1],[3192,3198,1],[3416,3422,1],[3440,3448,1],[3882,3891,1],[4969,4988,1],[6128,6137,1],[6618,8304,1686],[8308,8313,1],[8320,8329,1],[8528,8543,1],[8585,9312,727],[9313,9371,1],[9450,9471,1],[10102,10131,1],[11517,12690,1173],[12691,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[43056,43061,1],[65799,65843,1],[65909,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69733,1],[70113,70132,1],[71482,71483,1],[71914,71922,1],[72794,72812,1],[73664,73684,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[125127,125135,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1]]),_(f,"P",[[33,35,1],[37,42,1],[44,47,1],[58,59,1],[63,64,1],[91,93,1],[95,123,28],[125,161,36],[167,171,4],[182,183,1],[187,191,4],[894,903,9],[1370,1375,1],[1417,1418,1],[1470,1472,2],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3898,38],[3899,3901,1],[3973,4048,75],[4049,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5120,5742,622],[5787,5788,1],[5867,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8208,829],[8209,8231,1],[8240,8259,1],[8261,8273,1],[8275,8286,1],[8317,8318,1],[8333,8334,1],[8968,8971,1],[9001,9002,1],[10088,10101,1],[10181,10182,1],[10214,10223,1],[10627,10648,1],[10712,10715,1],[10748,10749,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11822,1],[11824,11855,1],[11858,11869,1],[12289,12291,1],[12296,12305,1],[12308,12319,1],[12336,12349,13],[12448,12539,91],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,64830,20819],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65121,1],[65123,65128,5],[65130,65131,1],[65281,65283,1],[65285,65290,1],[65292,65295,1],[65306,65307,1],[65311,65312,1],[65339,65341,1],[65343,65371,28],[65373,65375,2],[65376,65381,1],[65792,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69293,69461,168],[69462,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]]),_(f,"Pc",[[95,8255,8160],[8256,8276,20],[65075,65076,1],[65101,65103,1],[65343,65343,1]]),_(f,"Pd",[[45,1418,1373],[1470,5120,3650],[6150,8208,2058],[8209,8213,1],[11799,11802,3],[11834,11835,1],[11840,11869,29],[12316,12336,20],[12448,65073,52625],[65074,65112,38],[65123,65293,170],[69293,69293,1]]),_(f,"Pe",[[41,93,52],[125,3899,3774],[3901,5788,1887],[8262,8318,56],[8334,8969,635],[8971,9002,31],[10089,10101,2],[10182,10215,33],[10217,10223,2],[10628,10648,2],[10713,10715,2],[10749,11811,1062],[11813,11817,2],[11862,11868,2],[12297,12305,2],[12309,12315,2],[12318,12319,1],[64830,65048,218],[65078,65092,2],[65096,65114,18],[65116,65118,2],[65289,65341,52],[65373,65379,3]]),_(f,"Pf",[[187,8217,8030],[8221,8250,29],[11779,11781,2],[11786,11789,3],[11805,11809,4]]),_(f,"Pi",[[171,8216,8045],[8219,8220,1],[8223,8249,26],[11778,11780,2],[11785,11788,3],[11804,11808,4]]),_(f,"Po",[[33,35,1],[37,39,1],[42,46,2],[47,58,11],[59,63,4],[64,92,28],[161,167,6],[182,183,1],[191,894,703],[903,1370,467],[1371,1375,1],[1417,1472,55],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3973,113],[4048,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5742,5867,125],[5868,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6149,1],[6151,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8214,835],[8215,8224,9],[8225,8231,1],[8240,8248,1],[8251,8254,1],[8257,8259,1],[8263,8273,1],[8275,8277,2],[8278,8286,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11782,5],[11783,11784,1],[11787,11790,3],[11791,11798,1],[11800,11801,1],[11803,11806,3],[11807,11818,11],[11819,11822,1],[11824,11833,1],[11836,11839,1],[11841,11843,2],[11844,11855,1],[11858,11860,1],[12289,12291,1],[12349,12539,190],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,65040,21029],[65041,65046,1],[65049,65072,23],[65093,65094,1],[65097,65100,1],[65104,65106,1],[65108,65111,1],[65119,65121,1],[65128,65130,2],[65131,65281,150],[65282,65283,1],[65285,65287,1],[65290,65294,2],[65295,65306,11],[65307,65311,4],[65312,65340,28],[65377,65380,3],[65381,65792,411],[65793,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69461,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]]),_(f,"Ps",[[40,91,51],[123,3898,3775],[3900,5787,1887],[8218,8222,4],[8261,8317,56],[8333,8968,635],[8970,9001,31],[10088,10100,2],[10181,10214,33],[10216,10222,2],[10627,10647,2],[10712,10714,2],[10748,11810,1062],[11812,11816,2],[11842,11861,19],[11863,11867,2],[12296,12304,2],[12308,12314,2],[12317,64831,52514],[65047,65077,30],[65079,65091,2],[65095,65113,18],[65115,65117,2],[65288,65339,51],[65371,65375,4],[65378,65378,1]]),_(f,"S",[[36,43,7],[60,62,1],[94,96,2],[124,126,2],[162,166,1],[168,169,1],[172,174,2],[175,177,1],[180,184,4],[215,247,32],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,1014,113],[1154,1421,267],[1422,1423,1],[1542,1544,1],[1547,1550,3],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2046,2047,1],[2184,2546,362],[2547,2554,7],[2555,2801,246],[2928,3059,131],[3060,3066,1],[3199,3407,208],[3449,3647,198],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6107,366],[6464,6622,158],[6623,6655,1],[7009,7018,1],[7028,7036,1],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8352,8384,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8472,1],[8478,8483,1],[8485,8489,2],[8494,8506,12],[8507,8512,5],[8513,8516,1],[8522,8525,1],[8527,8586,59],[8587,8592,5],[8593,8967,1],[8972,9e3,1],[9003,9254,1],[9280,9290,1],[9372,9449,1],[9472,10087,1],[10132,10180,1],[10183,10213,1],[10224,10626,1],[10649,10711,1],[10716,10747,1],[10750,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12443,12444,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43048,43051,1],[43062,43065,1],[43639,43641,1],[43867,43882,15],[43883,64297,20414],[64434,64450,1],[64832,64847,1],[64975,65020,45],[65021,65023,1],[65122,65124,2],[65125,65126,1],[65129,65284,155],[65291,65308,17],[65309,65310,1],[65342,65344,2],[65372,65374,2],[65504,65510,1],[65512,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,123647,432],[126124,126128,4],[126254,126704,450],[126705,126976,271],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]]),_(f,"Sc",[[36,162,126],[163,165,1],[1423,1547,124],[2046,2047,1],[2546,2547,1],[2555,2801,246],[3065,3647,582],[6107,8352,2245],[8353,8384,1],[43064,65020,21956],[65129,65284,155],[65504,65505,1],[65509,65510,1],[73693,73696,1],[123647,126128,2481]]),_(f,"Sk",[[94,96,2],[168,175,7],[180,184,4],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,2184,1283],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[12443,12444,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43867,43882,15],[43883,64434,20551],[64435,64450,1],[65342,65344,2],[65507,127995,62488],[127996,127999,1]]),_(f,"Sm",[[43,60,17],[61,62,1],[124,126,2],[172,177,5],[215,247,32],[1014,1542,528],[1543,1544,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8472,8512,40],[8513,8516,1],[8523,8592,69],[8593,8596,1],[8602,8603,1],[8608,8614,3],[8622,8654,32],[8655,8658,3],[8660,8692,32],[8693,8959,1],[8992,8993,1],[9084,9115,31],[9116,9139,1],[9180,9185,1],[9655,9665,10],[9720,9727,1],[9839,10176,337],[10177,10180,1],[10183,10213,1],[10224,10239,1],[10496,10626,1],[10649,10711,1],[10716,10747,1],[10750,11007,1],[11056,11076,1],[11079,11084,1],[64297,65122,825],[65124,65126,1],[65291,65308,17],[65309,65310,1],[65372,65374,2],[65506,65513,7],[65514,65516,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[126704,126705,1]]),_(f,"So",[[166,169,3],[174,176,2],[1154,1421,267],[1422,1550,128],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2554,2928,374],[3059,3064,1],[3066,3199,133],[3407,3449,42],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6464,723],[6622,6655,1],[7009,7018,1],[7028,7036,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8478,7],[8479,8483,1],[8485,8489,2],[8494,8506,12],[8507,8522,15],[8524,8525,1],[8527,8586,59],[8587,8597,10],[8598,8601,1],[8604,8607,1],[8609,8610,1],[8612,8613,1],[8615,8621,1],[8623,8653,1],[8656,8657,1],[8659,8661,2],[8662,8691,1],[8960,8967,1],[8972,8991,1],[8994,9e3,1],[9003,9083,1],[9085,9114,1],[9140,9179,1],[9186,9254,1],[9280,9290,1],[9372,9449,1],[9472,9654,1],[9656,9664,1],[9666,9719,1],[9728,9838,1],[9840,10087,1],[10132,10175,1],[10240,10495,1],[11008,11055,1],[11077,11078,1],[11085,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[43048,43051,1],[43062,43063,1],[43065,43639,574],[43640,43641,1],[64832,64847,1],[64975,65021,46],[65022,65023,1],[65508,65512,4],[65517,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73692,1],[73697,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,126124,2909],[126254,126976,722],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,127994,1],[128e3,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]]),_(f,"Z",[[32,160,128],[5760,8192,2432],[8193,8202,1],[8232,8233,1],[8239,8287,48],[12288,12288,1]]),_(f,"Zl",[[8232,8232,1]]),_(f,"Zp",[[8233,8233,1]]),_(f,"Zs",[[32,160,128],[5760,8192,2432],[8193,8202,1],[8239,8287,48],[12288,12288,1]]),_(f,"Adlam",[[125184,125259,1],[125264,125273,1],[125278,125279,1]]),_(f,"Ahom",[[71424,71450,1],[71453,71467,1],[71472,71494,1]]),_(f,"Anatolian_Hieroglyphs",[[82944,83526,1]]),_(f,"Arabic",[[1536,1540,1],[1542,1547,1],[1549,1562,1],[1564,1566,1],[1568,1599,1],[1601,1610,1],[1622,1647,1],[1649,1756,1],[1758,1791,1],[1872,1919,1],[2160,2190,1],[2192,2193,1],[2200,2273,1],[2275,2303,1],[64336,64450,1],[64467,64829,1],[64832,64911,1],[64914,64967,1],[64975,65008,33],[65009,65023,1],[65136,65140,1],[65142,65276,1],[69216,69246,1],[69373,69375,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[126704,126705,1]]),_(f,"Armenian",[[1329,1366,1],[1369,1418,1],[1421,1423,1],[64275,64279,1]]),_(f,"Avestan",[[68352,68405,1],[68409,68415,1]]),_(f,"Balinese",[[6912,6988,1],[6992,7038,1]]),_(f,"Bamum",[[42656,42743,1],[92160,92728,1]]),_(f,"Bassa_Vah",[[92880,92909,1],[92912,92917,1]]),_(f,"Batak",[[7104,7155,1],[7164,7167,1]]),_(f,"Bengali",[[2432,2435,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2492,2500,1],[2503,2504,1],[2507,2510,1],[2519,2524,5],[2525,2527,2],[2528,2531,1],[2534,2558,1]]),_(f,"Bhaiksuki",[[72704,72712,1],[72714,72758,1],[72760,72773,1],[72784,72812,1]]),_(f,"Bopomofo",[[746,747,1],[12549,12591,1],[12704,12735,1]]),_(f,"Brahmi",[[69632,69709,1],[69714,69749,1],[69759,69759,1]]),_(f,"Braille",[[10240,10495,1]]),_(f,"Buginese",[[6656,6683,1],[6686,6687,1]]),_(f,"Buhid",[[5952,5971,1]]),_(f,"Canadian_Aboriginal",[[5120,5759,1],[6320,6389,1],[72368,72383,1]]),_(f,"Carian",[[66208,66256,1]]),_(f,"Caucasian_Albanian",[[66864,66915,1],[66927,66927,1]]),_(f,"Chakma",[[69888,69940,1],[69942,69959,1]]),_(f,"Cham",[[43520,43574,1],[43584,43597,1],[43600,43609,1],[43612,43615,1]]),_(f,"Cherokee",[[5024,5109,1],[5112,5117,1],[43888,43967,1]]),_(f,"Chorasmian",[[69552,69579,1]]),_(f,"Common",[[0,64,1],[91,96,1],[123,169,1],[171,185,1],[187,191,1],[215,247,32],[697,735,1],[741,745,1],[748,767,1],[884,894,10],[901,903,2],[1541,1548,7],[1563,1567,4],[1600,1757,157],[2274,2404,130],[2405,3647,1242],[4053,4056,1],[4347,5867,1520],[5868,5869,1],[5941,5942,1],[6146,6147,1],[6149,7379,1230],[7393,7401,8],[7402,7404,1],[7406,7411,1],[7413,7415,1],[7418,8192,774],[8193,8203,1],[8206,8292,1],[8294,8304,1],[8308,8318,1],[8320,8334,1],[8352,8384,1],[8448,8485,1],[8487,8489,1],[8492,8497,1],[8499,8525,1],[8527,8543,1],[8585,8587,1],[8592,9254,1],[9280,9290,1],[9312,10239,1],[10496,11123,1],[11126,11157,1],[11159,11263,1],[11776,11869,1],[12272,12292,1],[12294,12296,2],[12297,12320,1],[12336,12343,1],[12348,12351,1],[12443,12444,1],[12448,12539,91],[12540,12688,148],[12689,12703,1],[12736,12771,1],[12783,12832,49],[12833,12895,1],[12927,13007,1],[13055,13144,89],[13145,13311,1],[19904,19967,1],[42752,42785,1],[42888,42890,1],[43056,43065,1],[43310,43471,161],[43867,43882,15],[43883,64830,20947],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65126,1],[65128,65131,1],[65279,65281,2],[65282,65312,1],[65339,65344,1],[65371,65381,1],[65392,65438,46],[65439,65504,65],[65505,65510,1],[65512,65518,1],[65529,65533,1],[65792,65794,1],[65799,65843,1],[65847,65855,1],[65936,65948,1],[66e3,66044,1],[66273,66299,1],[113824,113827,1],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119142,1],[119146,119162,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119488,119507,1],[119520,119539,1],[119552,119638,1],[119648,119672,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120779,1],[120782,120831,1],[126065,126132,1],[126209,126269,1],[126976,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127232,127405,1],[127462,127487,1],[127489,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1],[130032,130041,1],[917505,917536,31],[917537,917631,1]]),_(f,"foldCommon",[[924,956,32]]),_(f,"Coptic",[[994,1007,1],[11392,11507,1],[11513,11519,1]]),_(f,"Cuneiform",[[73728,74649,1],[74752,74862,1],[74864,74868,1],[74880,75075,1]]),_(f,"Cypriot",[[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3]]),_(f,"Cypro_Minoan",[[77712,77810,1]]),_(f,"Cyrillic",[[1024,1156,1],[1159,1327,1],[7296,7304,1],[7467,7544,77],[11744,11775,1],[42560,42655,1],[65070,65071,1],[122928,122989,1],[123023,123023,1]]),_(f,"Deseret",[[66560,66639,1]]),_(f,"Devanagari",[[2304,2384,1],[2389,2403,1],[2406,2431,1],[43232,43263,1],[72448,72457,1]]),_(f,"Dives_Akuru",[[71936,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71989,1],[71991,71992,1],[71995,72006,1],[72016,72025,1]]),_(f,"Dogra",[[71680,71739,1]]),_(f,"Duployan",[[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[113820,113823,1]]),_(f,"Egyptian_Hieroglyphs",[[77824,78933,1]]),_(f,"Elbasan",[[66816,66855,1]]),_(f,"Elymaic",[[69600,69622,1]]),_(f,"Ethiopic",[[4608,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4957,4988,1],[4992,5017,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1]]),_(f,"Georgian",[[4256,4293,1],[4295,4301,6],[4304,4346,1],[4348,4351,1],[7312,7354,1],[7357,7359,1],[11520,11557,1],[11559,11565,6]]),_(f,"Glagolitic",[[11264,11359,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1]]),_(f,"Gothic",[[66352,66378,1]]),_(f,"Grantha",[[70400,70403,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70460,70468,1],[70471,70472,1],[70475,70477,1],[70480,70487,7],[70493,70499,1],[70502,70508,1],[70512,70516,1]]),_(f,"Greek",[[880,883,1],[885,887,1],[890,893,1],[895,900,5],[902,904,2],[905,906,1],[908,910,2],[911,929,1],[931,993,1],[1008,1023,1],[7462,7466,1],[7517,7521,1],[7526,7530,1],[7615,7936,321],[7937,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8132,1],[8134,8147,1],[8150,8155,1],[8157,8175,1],[8178,8180,1],[8182,8190,1],[8486,43877,35391],[65856,65934,1],[65952,119296,53344],[119297,119365,1]]),_(f,"foldGreek",[[181,837,656]]),_(f,"Gujarati",[[2689,2691,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2748,2757,1],[2759,2761,1],[2763,2765,1],[2768,2784,16],[2785,2787,1],[2790,2801,1],[2809,2815,1]]),_(f,"Gunjala_Gondi",[[73056,73061,1],[73063,73064,1],[73066,73102,1],[73104,73105,1],[73107,73112,1],[73120,73129,1]]),_(f,"Gurmukhi",[[2561,2563,1],[2565,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2649,8],[2650,2652,1],[2654,2662,8],[2663,2678,1]]),_(f,"Han",[[11904,11929,1],[11931,12019,1],[12032,12245,1],[12293,12295,2],[12321,12329,1],[12344,12347,1],[13312,19903,1],[19968,40959,1],[63744,64109,1],[64112,64217,1],[94178,94179,1],[94192,94193,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),_(f,"Hangul",[[4352,4607,1],[12334,12335,1],[12593,12686,1],[12800,12830,1],[12896,12926,1],[43360,43388,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1]]),_(f,"Hanifi_Rohingya",[[68864,68903,1],[68912,68921,1]]),_(f,"Hanunoo",[[5920,5940,1]]),_(f,"Hatran",[[67808,67826,1],[67828,67829,1],[67835,67839,1]]),_(f,"Hebrew",[[1425,1479,1],[1488,1514,1],[1519,1524,1],[64285,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64335,1]]),_(f,"Hiragana",[[12353,12438,1],[12445,12447,1],[110593,110879,1],[110898,110928,30],[110929,110930,1],[127488,127488,1]]),_(f,"Imperial_Aramaic",[[67648,67669,1],[67671,67679,1]]),_(f,"Inherited",[[768,879,1],[1157,1158,1],[1611,1621,1],[1648,2385,737],[2386,2388,1],[6832,6862,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8204,8205,1],[8400,8432,1],[12330,12333,1],[12441,12442,1],[65024,65039,1],[65056,65069,1],[66045,66272,227],[70459,118528,48069],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[917760,917999,1]]),_(f,"foldInherited",[[921,953,32],[8126,8126,1]]),_(f,"Inscriptional_Pahlavi",[[68448,68466,1],[68472,68479,1]]),_(f,"Inscriptional_Parthian",[[68416,68437,1],[68440,68447,1]]),_(f,"Javanese",[[43392,43469,1],[43472,43481,1],[43486,43487,1]]),_(f,"Kaithi",[[69760,69826,1],[69837,69837,1]]),_(f,"Kannada",[[3200,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3260,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3293,3294,1],[3296,3299,1],[3302,3311,1],[3313,3315,1]]),_(f,"Katakana",[[12449,12538,1],[12541,12543,1],[12784,12799,1],[13008,13054,1],[13056,13143,1],[65382,65391,1],[65393,65437,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110880,288],[110881,110882,1],[110933,110948,15],[110949,110951,1]]),_(f,"Kawi",[[73472,73488,1],[73490,73530,1],[73534,73561,1]]),_(f,"Kayah_Li",[[43264,43309,1],[43311,43311,1]]),_(f,"Kharoshthi",[[68096,68099,1],[68101,68102,1],[68108,68115,1],[68117,68119,1],[68121,68149,1],[68152,68154,1],[68159,68168,1],[68176,68184,1]]),_(f,"Khitan_Small_Script",[[94180,101120,6940],[101121,101589,1]]),_(f,"Khmer",[[6016,6109,1],[6112,6121,1],[6128,6137,1],[6624,6655,1]]),_(f,"Khojki",[[70144,70161,1],[70163,70209,1]]),_(f,"Khudawadi",[[70320,70378,1],[70384,70393,1]]),_(f,"Lao",[[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3773,1],[3776,3780,1],[3782,3784,2],[3785,3790,1],[3792,3801,1],[3804,3807,1]]),_(f,"Latin",[[65,90,1],[97,122,1],[170,186,16],[192,214,1],[216,246,1],[248,696,1],[736,740,1],[7424,7461,1],[7468,7516,1],[7522,7525,1],[7531,7543,1],[7545,7614,1],[7680,7935,1],[8305,8319,14],[8336,8348,1],[8490,8491,1],[8498,8526,28],[8544,8584,1],[11360,11391,1],[42786,42887,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43007,1],[43824,43866,1],[43868,43876,1],[43878,43881,1],[64256,64262,1],[65313,65338,1],[65345,65370,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[122624,122654,1],[122661,122666,1]]),_(f,"Lepcha",[[7168,7223,1],[7227,7241,1],[7245,7247,1]]),_(f,"Limbu",[[6400,6430,1],[6432,6443,1],[6448,6459,1],[6464,6468,4],[6469,6479,1]]),_(f,"Linear_A",[[67072,67382,1],[67392,67413,1],[67424,67431,1]]),_(f,"Linear_B",[[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1]]),_(f,"Lisu",[[42192,42239,1],[73648,73648,1]]),_(f,"Lycian",[[66176,66204,1]]),_(f,"Lydian",[[67872,67897,1],[67903,67903,1]]),_(f,"Mahajani",[[69968,70006,1]]),_(f,"Makasar",[[73440,73464,1]]),_(f,"Malayalam",[[3328,3340,1],[3342,3344,1],[3346,3396,1],[3398,3400,1],[3402,3407,1],[3412,3427,1],[3430,3455,1]]),_(f,"Mandaic",[[2112,2139,1],[2142,2142,1]]),_(f,"Manichaean",[[68288,68326,1],[68331,68342,1]]),_(f,"Marchen",[[72816,72847,1],[72850,72871,1],[72873,72886,1]]),_(f,"Masaram_Gondi",[[72960,72966,1],[72968,72969,1],[72971,73014,1],[73018,73020,2],[73021,73023,2],[73024,73031,1],[73040,73049,1]]),_(f,"Medefaidrin",[[93760,93850,1]]),_(f,"Meetei_Mayek",[[43744,43766,1],[43968,44013,1],[44016,44025,1]]),_(f,"Mende_Kikakui",[[124928,125124,1],[125127,125142,1]]),_(f,"Meroitic_Cursive",[[68e3,68023,1],[68028,68047,1],[68050,68095,1]]),_(f,"Meroitic_Hieroglyphs",[[67968,67999,1]]),_(f,"Miao",[[93952,94026,1],[94031,94087,1],[94095,94111,1]]),_(f,"Modi",[[71168,71236,1],[71248,71257,1]]),_(f,"Mongolian",[[6144,6145,1],[6148,6150,2],[6151,6169,1],[6176,6264,1],[6272,6314,1],[71264,71276,1]]),_(f,"Mro",[[92736,92766,1],[92768,92777,1],[92782,92783,1]]),_(f,"Multani",[[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70313,1]]),_(f,"Myanmar",[[4096,4255,1],[43488,43518,1],[43616,43647,1]]),_(f,"Nabataean",[[67712,67742,1],[67751,67759,1]]),_(f,"Nag_Mundari",[[124112,124153,1]]),_(f,"Nandinagari",[[72096,72103,1],[72106,72151,1],[72154,72164,1]]),_(f,"New_Tai_Lue",[[6528,6571,1],[6576,6601,1],[6608,6618,1],[6622,6623,1]]),_(f,"Newa",[[70656,70747,1],[70749,70753,1]]),_(f,"Nko",[[1984,2042,1],[2045,2047,1]]),_(f,"Nushu",[[94177,110960,16783],[110961,111355,1]]),_(f,"Nyiakeng_Puachue_Hmong",[[123136,123180,1],[123184,123197,1],[123200,123209,1],[123214,123215,1]]),_(f,"Ogham",[[5760,5788,1]]),_(f,"Ol_Chiki",[[7248,7295,1]]),_(f,"Old_Hungarian",[[68736,68786,1],[68800,68850,1],[68858,68863,1]]),_(f,"Old_Italic",[[66304,66339,1],[66349,66351,1]]),_(f,"Old_North_Arabian",[[68224,68255,1]]),_(f,"Old_Permic",[[66384,66426,1]]),_(f,"Old_Persian",[[66464,66499,1],[66504,66517,1]]),_(f,"Old_Sogdian",[[69376,69415,1]]),_(f,"Old_South_Arabian",[[68192,68223,1]]),_(f,"Old_Turkic",[[68608,68680,1]]),_(f,"Old_Uyghur",[[69488,69513,1]]),_(f,"Oriya",[[2817,2819,1],[2821,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2876,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2908,2909,1],[2911,2915,1],[2918,2935,1]]),_(f,"Osage",[[66736,66771,1],[66776,66811,1]]),_(f,"Osmanya",[[66688,66717,1],[66720,66729,1]]),_(f,"Pahawh_Hmong",[[92928,92997,1],[93008,93017,1],[93019,93025,1],[93027,93047,1],[93053,93071,1]]),_(f,"Palmyrene",[[67680,67711,1]]),_(f,"Pau_Cin_Hau",[[72384,72440,1]]),_(f,"Phags_Pa",[[43072,43127,1]]),_(f,"Phoenician",[[67840,67867,1],[67871,67871,1]]),_(f,"Psalter_Pahlavi",[[68480,68497,1],[68505,68508,1],[68521,68527,1]]),_(f,"Rejang",[[43312,43347,1],[43359,43359,1]]),_(f,"Runic",[[5792,5866,1],[5870,5880,1]]),_(f,"Samaritan",[[2048,2093,1],[2096,2110,1]]),_(f,"Saurashtra",[[43136,43205,1],[43214,43225,1]]),_(f,"Sharada",[[70016,70111,1]]),_(f,"Shavian",[[66640,66687,1]]),_(f,"Siddham",[[71040,71093,1],[71096,71133,1]]),_(f,"SignWriting",[[120832,121483,1],[121499,121503,1],[121505,121519,1]]),_(f,"Sinhala",[[3457,3459,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3558,3567,1],[3570,3572,1],[70113,70132,1]]),_(f,"Sogdian",[[69424,69465,1]]),_(f,"Sora_Sompeng",[[69840,69864,1],[69872,69881,1]]),_(f,"Soyombo",[[72272,72354,1]]),_(f,"Sundanese",[[7040,7103,1],[7360,7367,1]]),_(f,"Syloti_Nagri",[[43008,43052,1]]),_(f,"Syriac",[[1792,1805,1],[1807,1866,1],[1869,1871,1],[2144,2154,1]]),_(f,"Tagalog",[[5888,5909,1],[5919,5919,1]]),_(f,"Tagbanwa",[[5984,5996,1],[5998,6e3,1],[6002,6003,1]]),_(f,"Tai_Le",[[6480,6509,1],[6512,6516,1]]),_(f,"Tai_Tham",[[6688,6750,1],[6752,6780,1],[6783,6793,1],[6800,6809,1],[6816,6829,1]]),_(f,"Tai_Viet",[[43648,43714,1],[43739,43743,1]]),_(f,"Takri",[[71296,71353,1],[71360,71369,1]]),_(f,"Tamil",[[2946,2947,1],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3006,3010,1],[3014,3016,1],[3018,3021,1],[3024,3031,7],[3046,3066,1],[73664,73713,1],[73727,73727,1]]),_(f,"Tangsa",[[92784,92862,1],[92864,92873,1]]),_(f,"Tangut",[[94176,94208,32],[94209,100343,1],[100352,101119,1],[101632,101640,1]]),_(f,"Telugu",[[3072,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3132,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3160,3162,1],[3165,3168,3],[3169,3171,1],[3174,3183,1],[3191,3199,1]]),_(f,"Thaana",[[1920,1969,1]]),_(f,"Thai",[[3585,3642,1],[3648,3675,1]]),_(f,"Tibetan",[[3840,3911,1],[3913,3948,1],[3953,3991,1],[3993,4028,1],[4030,4044,1],[4046,4052,1],[4057,4058,1]]),_(f,"Tifinagh",[[11568,11623,1],[11631,11632,1],[11647,11647,1]]),_(f,"Tirhuta",[[70784,70855,1],[70864,70873,1]]),_(f,"Toto",[[123536,123566,1]]),_(f,"Ugaritic",[[66432,66461,1],[66463,66463,1]]),_(f,"Vai",[[42240,42539,1]]),_(f,"Vithkuqi",[[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1]]),_(f,"Wancho",[[123584,123641,1],[123647,123647,1]]),_(f,"Warang_Citi",[[71840,71922,1],[71935,71935,1]]),_(f,"Yezidi",[[69248,69289,1],[69291,69293,1],[69296,69297,1]]),_(f,"Yi",[[40960,42124,1],[42128,42182,1]]),_(f,"Zanabazar_Square",[[72192,72263,1]]),_(f,"CATEGORIES",new Map([["C",f.C],["Cc",f.Cc],["Cf",f.Cf],["Co",f.Co],["Cs",f.Cs],["L",f.L],["Ll",f.Ll],["Lm",f.Lm],["Lo",f.Lo],["Lt",f.Lt],["Lu",f.Lu],["M",f.M],["Mc",f.Mc],["Me",f.Me],["Mn",f.Mn],["N",f.N],["Nd",f.Nd],["Nl",f.Nl],["No",f.No],["P",f.P],["Pc",f.Pc],["Pd",f.Pd],["Pe",f.Pe],["Pf",f.Pf],["Pi",f.Pi],["Po",f.Po],["Ps",f.Ps],["S",f.S],["Sc",f.Sc],["Sk",f.Sk],["Sm",f.Sm],["So",f.So],["Z",f.Z],["Zl",f.Zl],["Zp",f.Zp],["Zs",f.Zs]])),_(f,"SCRIPTS",new Map([["Adlam",f.Adlam],["Ahom",f.Ahom],["Anatolian_Hieroglyphs",f.Anatolian_Hieroglyphs],["Arabic",f.Arabic],["Armenian",f.Armenian],["Avestan",f.Avestan],["Balinese",f.Balinese],["Bamum",f.Bamum],["Bassa_Vah",f.Bassa_Vah],["Batak",f.Batak],["Bengali",f.Bengali],["Bhaiksuki",f.Bhaiksuki],["Bopomofo",f.Bopomofo],["Brahmi",f.Brahmi],["Braille",f.Braille],["Buginese",f.Buginese],["Buhid",f.Buhid],["Canadian_Aboriginal",f.Canadian_Aboriginal],["Carian",f.Carian],["Caucasian_Albanian",f.Caucasian_Albanian],["Chakma",f.Chakma],["Cham",f.Cham],["Cherokee",f.Cherokee],["Chorasmian",f.Chorasmian],["Common",f.Common],["Coptic",f.Coptic],["Cuneiform",f.Cuneiform],["Cypriot",f.Cypriot],["Cypro_Minoan",f.Cypro_Minoan],["Cyrillic",f.Cyrillic],["Deseret",f.Deseret],["Devanagari",f.Devanagari],["Dives_Akuru",f.Dives_Akuru],["Dogra",f.Dogra],["Duployan",f.Duployan],["Egyptian_Hieroglyphs",f.Egyptian_Hieroglyphs],["Elbasan",f.Elbasan],["Elymaic",f.Elymaic],["Ethiopic",f.Ethiopic],["Georgian",f.Georgian],["Glagolitic",f.Glagolitic],["Gothic",f.Gothic],["Grantha",f.Grantha],["Greek",f.Greek],["Gujarati",f.Gujarati],["Gunjala_Gondi",f.Gunjala_Gondi],["Gurmukhi",f.Gurmukhi],["Han",f.Han],["Hangul",f.Hangul],["Hanifi_Rohingya",f.Hanifi_Rohingya],["Hanunoo",f.Hanunoo],["Hatran",f.Hatran],["Hebrew",f.Hebrew],["Hiragana",f.Hiragana],["Imperial_Aramaic",f.Imperial_Aramaic],["Inherited",f.Inherited],["Inscriptional_Pahlavi",f.Inscriptional_Pahlavi],["Inscriptional_Parthian",f.Inscriptional_Parthian],["Javanese",f.Javanese],["Kaithi",f.Kaithi],["Kannada",f.Kannada],["Katakana",f.Katakana],["Kawi",f.Kawi],["Kayah_Li",f.Kayah_Li],["Kharoshthi",f.Kharoshthi],["Khitan_Small_Script",f.Khitan_Small_Script],["Khmer",f.Khmer],["Khojki",f.Khojki],["Khudawadi",f.Khudawadi],["Lao",f.Lao],["Latin",f.Latin],["Lepcha",f.Lepcha],["Limbu",f.Limbu],["Linear_A",f.Linear_A],["Linear_B",f.Linear_B],["Lisu",f.Lisu],["Lycian",f.Lycian],["Lydian",f.Lydian],["Mahajani",f.Mahajani],["Makasar",f.Makasar],["Malayalam",f.Malayalam],["Mandaic",f.Mandaic],["Manichaean",f.Manichaean],["Marchen",f.Marchen],["Masaram_Gondi",f.Masaram_Gondi],["Medefaidrin",f.Medefaidrin],["Meetei_Mayek",f.Meetei_Mayek],["Mende_Kikakui",f.Mende_Kikakui],["Meroitic_Cursive",f.Meroitic_Cursive],["Meroitic_Hieroglyphs",f.Meroitic_Hieroglyphs],["Miao",f.Miao],["Modi",f.Modi],["Mongolian",f.Mongolian],["Mro",f.Mro],["Multani",f.Multani],["Myanmar",f.Myanmar],["Nabataean",f.Nabataean],["Nag_Mundari",f.Nag_Mundari],["Nandinagari",f.Nandinagari],["New_Tai_Lue",f.New_Tai_Lue],["Newa",f.Newa],["Nko",f.Nko],["Nushu",f.Nushu],["Nyiakeng_Puachue_Hmong",f.Nyiakeng_Puachue_Hmong],["Ogham",f.Ogham],["Ol_Chiki",f.Ol_Chiki],["Old_Hungarian",f.Old_Hungarian],["Old_Italic",f.Old_Italic],["Old_North_Arabian",f.Old_North_Arabian],["Old_Permic",f.Old_Permic],["Old_Persian",f.Old_Persian],["Old_Sogdian",f.Old_Sogdian],["Old_South_Arabian",f.Old_South_Arabian],["Old_Turkic",f.Old_Turkic],["Old_Uyghur",f.Old_Uyghur],["Oriya",f.Oriya],["Osage",f.Osage],["Osmanya",f.Osmanya],["Pahawh_Hmong",f.Pahawh_Hmong],["Palmyrene",f.Palmyrene],["Pau_Cin_Hau",f.Pau_Cin_Hau],["Phags_Pa",f.Phags_Pa],["Phoenician",f.Phoenician],["Psalter_Pahlavi",f.Psalter_Pahlavi],["Rejang",f.Rejang],["Runic",f.Runic],["Samaritan",f.Samaritan],["Saurashtra",f.Saurashtra],["Sharada",f.Sharada],["Shavian",f.Shavian],["Siddham",f.Siddham],["SignWriting",f.SignWriting],["Sinhala",f.Sinhala],["Sogdian",f.Sogdian],["Sora_Sompeng",f.Sora_Sompeng],["Soyombo",f.Soyombo],["Sundanese",f.Sundanese],["Syloti_Nagri",f.Syloti_Nagri],["Syriac",f.Syriac],["Tagalog",f.Tagalog],["Tagbanwa",f.Tagbanwa],["Tai_Le",f.Tai_Le],["Tai_Tham",f.Tai_Tham],["Tai_Viet",f.Tai_Viet],["Takri",f.Takri],["Tamil",f.Tamil],["Tangsa",f.Tangsa],["Tangut",f.Tangut],["Telugu",f.Telugu],["Thaana",f.Thaana],["Thai",f.Thai],["Tibetan",f.Tibetan],["Tifinagh",f.Tifinagh],["Tirhuta",f.Tirhuta],["Toto",f.Toto],["Ugaritic",f.Ugaritic],["Vai",f.Vai],["Vithkuqi",f.Vithkuqi],["Wancho",f.Wancho],["Warang_Citi",f.Warang_Citi],["Yezidi",f.Yezidi],["Yi",f.Yi],["Zanabazar_Square",f.Zanabazar_Square]])),_(f,"FOLD_CATEGORIES",new Map([["L",f.foldL],["Ll",f.foldLl],["Lt",f.foldLt],["Lu",f.foldLu],["M",f.foldM],["Mn",f.foldMn]])),_(f,"FOLD_SCRIPT",new Map([["Common",f.foldCommon],["Greek",f.foldGreek],["Inherited",f.foldInherited]]));let it=f;class ne{static is32(e,t){let r=0,s=e.length;for(;r<s;){let i=r+Math.floor((s-r)/2),o=e[i];if(o[0]<=t&&t<=o[1])return(t-o[0])%o[2]===0;t<o[0]?s=i:r=i+1}return!1}static is(e,t){if(t<=this.MAX_LATIN1){for(let r of e)if(!(t>r[1]))return t<r[0]?!1:(t-r[0])%r[2]===0;return!1}return e.length>0&&t>=e[0][0]&&this.is32(e,t)}static isUpper(e){if(e<=this.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return this.is(it.Upper,e)}static isPrint(e){return e<=this.MAX_LATIN1?e>=32&&e<127||e>=161&&e!==173:this.is(it.L,e)||this.is(it.M,e)||this.is(it.N,e)||this.is(it.P,e)||this.is(it.S,e)}static simpleFold(e){if(it.CASE_ORBIT.has(e))return it.CASE_ORBIT.get(e);const t=P.toLowerCase(e);return t!==e?t:P.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e<0||t<0||e===t)return!0;if(e<=this.MAX_ASCII&&t<=this.MAX_ASCII)return P.CODES.get("A")<=e&&e<=P.CODES.get("Z")&&(e|=32),P.CODES.get("A")<=t&&t<=P.CODES.get("Z")&&(t|=32),e===t;for(let r=this.simpleFold(e);r!==e;r=this.simpleFold(r))if(r===t)return!0;return!1}}_(ne,"MAX_RUNE",1114111),_(ne,"MAX_ASCII",127),_(ne,"MAX_LATIN1",255),_(ne,"MAX_BMP",65535),_(ne,"MIN_FOLD",65),_(ne,"MAX_FOLD",125251);class ae{static emptyInts(){return[]}static isalnum(e){return P.CODES.get("0")<=e&&e<=P.CODES.get("9")||P.CODES.get("a")<=e&&e<=P.CODES.get("z")||P.CODES.get("A")<=e&&e<=P.CODES.get("Z")}static unhex(e){return P.CODES.get("0")<=e&&e<=P.CODES.get("9")?e-P.CODES.get("0"):P.CODES.get("a")<=e&&e<=P.CODES.get("f")?e-P.CODES.get("a")+10:P.CODES.get("A")<=e&&e<=P.CODES.get("F")?e-P.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(ne.isPrint(e))this.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case P.CODES.get('"'):t+='\\"';break;case P.CODES.get("\\"):t+="\\\\";break;case P.CODES.get("	"):t+="\\t";break;case P.CODES.get(`
`):t+="\\n";break;case P.CODES.get("\r"):t+="\\r";break;case P.CODES.get("\b"):t+="\\b";break;case P.CODES.get("\f"):t+="\\f";break;default:{let r=e.toString(16);e<256?(t+="\\x",r.length===1&&(t+="0"),t+=r):t+=`\\x{${r}}`;break}}return t}static stringToRunes(e){return String(e).split("").map(t=>t.codePointAt(0))}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return P.CODES.get("a")<=e&&e<=P.CODES.get("z")||P.CODES.get("A")<=e&&e<=P.CODES.get("Z")||P.CODES.get("0")<=e&&e<=P.CODES.get("9")||e===P.CODES.get("_")}static emptyOpContext(e,t){let r=0;return e<0&&(r|=this.EMPTY_BEGIN_TEXT|this.EMPTY_BEGIN_LINE),e===P.CODES.get(`
`)&&(r|=this.EMPTY_BEGIN_LINE),t<0&&(r|=this.EMPTY_END_TEXT|this.EMPTY_END_LINE),t===P.CODES.get(`
`)&&(r|=this.EMPTY_END_LINE),this.isWordRune(e)!==this.isWordRune(t)?r|=this.EMPTY_WORD_BOUNDARY:r|=this.EMPTY_NO_WORD_BOUNDARY,r}static quoteMeta(e){return e.split("").map(t=>this.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>ne.MAX_BMP?2:1}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Array.from(new TextEncoder().encode(e));{let t=[],r=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=i&63|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder)return new TextDecoder("utf-8").decode(new Uint8Array(e));{let t=[],r=0,s=0;for(;r<e.length;){let i=e[r++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[r++];t[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[r++],l=e[r++],c=e[r++],h=((i&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;t[s++]=String.fromCharCode(55296+(h>>10)),t[s++]=String.fromCharCode(56320+(h&1023))}else{let o=e[r++],l=e[r++];t[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")}}}_(ae,"METACHARACTERS","\\.+*?()|[]{}^$"),_(ae,"EMPTY_BEGIN_LINE",1),_(ae,"EMPTY_END_LINE",2),_(ae,"EMPTY_BEGIN_TEXT",4),_(ae,"EMPTY_END_TEXT",8),_(ae,"EMPTY_WORD_BOUNDARY",16),_(ae,"EMPTY_NO_WORD_BOUNDARY",32),_(ae,"EMPTY_ALL",-1);const Z2=(n=[],e=0)=>{const t={};for(let r=0;r<n.length;r++){const s=n[r],i=e+r;t[s]=i,t[i]=s}return Object.freeze(t)},_i=class _i{getEncoding(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===_i.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===_i.Encoding.UTF_16}};_(_i,"Encoding",Z2(["UTF_16","UTF_8"]));let tr=_i;class Eh extends tr{constructor(e=null){super(),this.bytes=e}getEncoding(){return tr.Encoding.UTF_8}asCharSequence(){return ae.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}}class T7 extends tr{constructor(e=null){super(),this.charSequence=e}getEncoding(){return tr.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return this.charSequence.toString().split("").map(e=>e.codePointAt(0))}length(){return this.charSequence.length}}class ta{static utf16(e){return new T7(e)}static utf8(e){return Array.isArray(e)?new Eh(e):new Eh(ae.stringToUtf8ByteArray(e))}}class ka extends Error{constructor(e){super(e),this.name="RE2JSException"}}class Ne extends ka{constructor(e,t=null){let r=`error parsing regexp: ${e}`;t&&(r+=`: \`${t}\``),super(r),this.name="RE2JSSyntaxException",this.message=r,this.error=e,this.input=t}getDescription(){return this.error}getPattern(){return this.input}}class x7 extends ka{constructor(e){super(e),this.name="RE2JSCompileException"}}class dn extends ka{constructor(e){super(e),this.name="RE2JSGroupException"}}class I7 extends ka{constructor(e){super(e),this.name="RE2JSFlagsException"}}class C7{static quoteReplacement(e){return e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(t=>{const r=t.codePointAt(0);return r===P.CODES["\\"]||r===P.CODES.$?`\\${t}`:t}).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const r=this.patternInput.re2();this.patternGroupCount=r.numberOfCapturingGroups(),this.groups=[],this.namedGroups=r.namedGroups,t instanceof tr?this.resetMatcherInput(t):Array.isArray(t)?this.resetMatcherInput(ta.utf8(t)):this.resetMatcherInput(ta.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new dn(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new dn(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}group(e=0){if(typeof e=="string"){const s=this.namedGroups[e];if(!Number.isFinite(s))throw new dn(`group '${e}' not found`);e=s}const t=this.start(e),r=this.end(e);return t<0&&r<0?null:this.substring(t,r)}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new dn(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new dn("perhaps no match attempted");if(e===0||this.hasGroups)return;let t=this.groups[1]+1;t>this.matcherInputLength&&(t=this.matcherInputLength);const r=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!r[0])throw new dn("inconsistency in matching group data");this.groups=r[1],this.hasGroups=!0}matches(){return this.genMatch(0,q.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,q.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new dn(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}return e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1]&&e++),this.genMatch(e,q.UNANCHORED)}genMatch(e,t){const r=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return r[0]?(this.groups=r[1],this.hasMatch=!0,this.hasGroups=!1,this.anchorFlag=t,!0):!1}substring(e,t){return this.matcherInput.isUTF8Encoding()?ae.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let r="";const s=this.start(),i=this.end();return this.appendPos<s&&(r+=this.substring(this.appendPos,s)),this.appendPos=i,r+=t?this.appendReplacementInternalPerl(e):this.appendReplacementInternal(e),r}appendReplacementInternal(e){let t="",r=0;const s=e.length;for(let i=0;i<s-1;i++){if(e.codePointAt(i)===P.CODES.get("\\")){r<i&&(t+=e.substring(r,i)),i++,r=i;continue}if(e.codePointAt(i)===P.CODES.get("$")){let o=e.codePointAt(i+1);if(P.CODES.get("0")<=o&&o<=P.CODES.get("9")){let l=o-P.CODES.get("0");for(r<i&&(t+=e.substring(r,i)),i+=2;i<s&&(o=e.codePointAt(i),!(o<P.CODES.get("0")||o>P.CODES.get("9")||l*10+o-P.CODES.get("0")>this.patternGroupCount));i++)l=l*10+o-P.CODES.get("0");if(l>this.patternGroupCount)throw new dn(`n > number of groups: ${l}`);const c=this.group(l);c!==null&&(t+=c),r=i,i--;continue}else if(o===P.CODES.get("{")){r<i&&(t+=e.substring(r,i)),i++;let l=i+1;for(;l<e.length&&e.codePointAt(l)!==P.CODES.get("}")&&e.codePointAt(l)!==P.CODES.get(" ");)l++;if(l===e.length||e.codePointAt(l)!==P.CODES.get("}"))throw new dn("named capture group is missing trailing '}'");const c=e.substring(i+1,l);t+=this.group(c),r=l+1}}}return r<s&&(t+=e.substring(r,s)),t}appendReplacementInternalPerl(e){let t="",r=0;const s=e.length;for(let i=0;i<s-1;i++)if(e.codePointAt(i)===P.CODES.get("$")){let o=e.codePointAt(i+1);if(P.CODES.get("$")===o){r<i&&(t+=e.substring(r,i)),t+="$",i++,r=i+1;continue}else if(P.CODES.get("&")===o){r<i&&(t+=e.substring(r,i));const l=this.group(0);l!==null?t+=l:t+="$&",i++,r=i+1;continue}else if(P.CODES.get("1")<=o&&o<=P.CODES.get("9")){let l=o-P.CODES.get("0");for(r<i&&(t+=e.substring(r,i)),i+=2;i<s&&(o=e.codePointAt(i),!(o<P.CODES.get("0")||o>P.CODES.get("9")||l*10+o-P.CODES.get("0")>this.patternGroupCount));i++)l=l*10+o-P.CODES.get("0");if(l>this.patternGroupCount){t+=`$${l}`,r=i,i--;continue}const c=this.group(l);c!==null&&(t+=c),r=i,i--;continue}else if(o===P.CODES.get("<")){r<i&&(t+=e.substring(r,i)),i++;let l=i+1;for(;l<e.length&&e.codePointAt(l)!==P.CODES.get(">")&&e.codePointAt(l)!==P.CODES.get(" ");)l++;if(l===e.length||e.codePointAt(l)!==P.CODES.get(">")){t+=e.substring(i-1,l+1),r=l+1;continue}const c=e.substring(i+1,l);Object.prototype.hasOwnProperty.call(this.namedGroups,c)?t+=this.group(c):t+=`$<${c}>`,r=l+1}}return r<s&&(t+=e.substring(r,s)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,r=!1){let s="";for(this.reset();this.find()&&(s+=this.appendReplacement(e,r),!!t););return s+=this.appendTail(),s}}class $n{static EOF(){return-8}canCheckPrefix(){return!0}endPos(){return this.end}}class S7 extends $n{constructor(e,t=0,r=e.length){super(),this.bytes=e,this.start=t,this.end=r}step(e){if(e+=this.start,e>=this.end)return $n.EOF();let t=this.bytes[e++]&255;return t&128?(t&224)===192?(t=t&31,e>=this.end?$n.EOF():(t=t<<6|this.bytes[e++]&63,t<<3|2)):(t&240)===224?(t=t&15,e+1>=this.end?$n.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|3)):(t=t&7,e+2>=this.end?$n.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|4)):t<<3|1}index(e,t){t+=this.start;const r=this.indexOf(this.bytes,e.prefixUTF8,t);return r<0?r:r-t}context(e){e+=this.start;let t=-1;if(e>this.start&&e<=this.end){let s=e-1;if(t=this.bytes[s--],t>=128){let i=e-4;for(i<this.start&&(i=this.start);s>=i&&(this.bytes[s]&192)===128;)s--;s<this.start&&(s=this.start),t=this.step(s)>>3}}const r=e<this.end?this.step(e)>>3:-1;return ae.emptyOpContext(t,r)}indexOf(e,t,r=0){let s=t.length;if(s===0)return-1;let i=e.length;for(let o=r;o<=i-s;o++)for(let l=0;l<s&&e[o+l]===t[l];l++)if(l===s-1)return o;return-1}}class R7 extends $n{constructor(e,t=0,r=e.length){super(),this.charSequence=e,this.start=t,this.end=r}step(e){if(e+=this.start,e<this.end){const t=this.charSequence.codePointAt(e);return t<<3|ae.charCount(t)}else return $n.EOF()}index(e,t){t+=this.start;const r=this.charSequence.indexOf(e.prefix,t);return r<0?r:r-t}context(e){e+=this.start;const t=e>0&&e<=this.charSequence.length?this.charSequence.codePointAt(e-1):-1,r=e<this.charSequence.length?this.charSequence.codePointAt(e):-1;return ae.emptyOpContext(t,r)}}class De{static fromUTF8(e,t=0,r=e.length){return new S7(e,t,r)}static fromUTF16(e,t=0,r=e.length){return new R7(e,t,r)}}const ee=class ee{static isPseudoOp(e){return e>=ee.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===P.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new ee(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t}constructor(e){this.op=e,this.flags=0,this.subs=ee.emptySubs(),this.runes=null,this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups={}}reinit(){this.flags=0,this.subs=ee.emptySubs(),this.runes=null,this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups={}}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case ee.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case ee.Op.EMPTY_MATCH:e+="(?:)";break;case ee.Op.STAR:case ee.Op.PLUS:case ee.Op.QUEST:case ee.Op.REPEAT:{const t=this.subs[0];switch(t.op>ee.Op.CAPTURE||t.op===ee.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case ee.Op.STAR:e+="*";break;case ee.Op.PLUS:e+="+";break;case ee.Op.QUEST:e+="?";break;case ee.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}this.flags&q.NON_GREEDY&&(e+="?");break}case ee.Op.CONCAT:{for(let t of this.subs)t.op===ee.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break}case ee.Op.ALTERNATE:{let t="";for(let r of this.subs)e+=t,t="|",e+=r.appendTo();break}case ee.Op.LITERAL:this.flags&q.FOLD_CASE&&(e+="(?i:");for(let t of this.runes)e+=ae.escapeRune(t);this.flags&q.FOLD_CASE&&(e+=")");break;case ee.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case ee.Op.ANY_CHAR:e+="(?s:.)";break;case ee.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==ee.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case ee.Op.BEGIN_TEXT:e+="\\A";break;case ee.Op.END_TEXT:this.flags&q.WAS_DOLLAR?e+="(?-m:$)":e+="\\z";break;case ee.Op.BEGIN_LINE:e+="^";break;case ee.Op.END_LINE:e+="$";break;case ee.Op.WORD_BOUNDARY:e+="\\b";break;case ee.Op.NO_WORD_BOUNDARY:e+="\\B";break;case ee.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===ne.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const r=this.runes[t]+1,s=this.runes[t+1]-1;e+=ee.quoteIfHyphen(r),e+=ae.escapeRune(r),r!==s&&(e+="-",e+=ee.quoteIfHyphen(s),e+=ae.escapeRune(s))}}else for(let t=0;t<this.runes.length;t+=2){const r=this.runes[t],s=this.runes[t+1];e+=ee.quoteIfHyphen(r),e+=ae.escapeRune(r),r!==s&&(e+="-",e+=ee.quoteIfHyphen(s),e+=ae.escapeRune(s))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===ee.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const r=t.maxCap();e<r&&(e=r)}return e}equals(e){if(!(e!==null&&e instanceof ee)||this.op!==e.op)return!1;switch(this.op){case ee.Op.END_TEXT:{if((this.flags&q.WAS_DOLLAR)!==(e.flags&q.WAS_DOLLAR))return!1;break}case ee.Op.LITERAL:case ee.Op.CHAR_CLASS:{if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break}case ee.Op.ALTERNATE:case ee.Op.CONCAT:{if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break}case ee.Op.STAR:case ee.Op.PLUS:case ee.Op.QUEST:{if((this.flags&q.NON_GREEDY)!==(e.flags&q.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break}case ee.Op.REPEAT:{if((this.flags&q.NON_GREEDY)!==(e.flags&q.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break}case ee.Op.CAPTURE:{if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break}}return!0}};_(ee,"Op",Z2(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","LEFT_PAREN","VERTICAL_BAR"]));let D=ee;const Ae=class Ae{static isRuneOp(e){return Ae.RUNE<=e&&e<=Ae.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let r of e)t+=ae.escapeRune(r);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=null}matchRune(e){if(this.runes.length===1){const s=this.runes[0];return this.arg&q.FOLD_CASE?ne.equalsIgnoreCase(s,e):e===s}for(let s=0;s<this.runes.length&&s<=8;s+=2){if(e<this.runes[s])return!1;if(e<=this.runes[s+1])return!0}let t=0,r=this.runes.length/2|0;for(;t<r;){const s=t+((r-t)/2|0);if(this.runes[2*s]<=e){if(e<=this.runes[2*s+1])return!0;t=s+1}else r=s}return!1}toString(){switch(this.op){case Ae.ALT:return`alt -> ${this.out}, ${this.arg}`;case Ae.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case Ae.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case Ae.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case Ae.MATCH:return"match";case Ae.FAIL:return"fail";case Ae.NOP:return`nop -> ${this.out}`;case Ae.RUNE:return this.runes===null?"rune <null>":["rune ",Ae.escapeRunes(this.runes),this.arg&q.FOLD_CASE?"/i":""," -> ",this.out].join("");case Ae.RUNE1:return`rune1 ${Ae.escapeRunes(this.runes)} -> ${this.out}`;case Ae.RUNE_ANY:return`any -> ${this.out}`;case Ae.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}};_(Ae,"ALT",1),_(Ae,"ALT_MATCH",2),_(Ae,"CAPTURE",3),_(Ae,"EMPTY_WIDTH",4),_(Ae,"FAIL",5),_(Ae,"MATCH",6),_(Ae,"NOP",7),_(Ae,"RUNE",8),_(Ae,"RUNE1",9),_(Ae,"RUNE_ANY",10),_(Ae,"RUNE_ANY_NOT_NL",11);let le=Ae;class P7{constructor(){this.inst=[],this.start=0,this.numCap=2}getInst(e){return this.inst[e]}numInst(){return this.inst.length}addInst(e){this.inst.push(new le(e))}skipNop(e){let t=this.inst[e];for(;t.op===le.NOP||t.op===le.CAPTURE;)t=this.inst[e],e=t.out;return t}prefix(){let e="",t=this.skipNop(this.start);if(!le.isRuneOp(t.op)||t.runes.length!==1)return[t.op===le.MATCH,e];for(;le.isRuneOp(t.op)&&t.runes.length===1&&!(t.arg&q.FOLD_CASE);)e+=String.fromCodePoint(t.runes[0]),t=this.skipNop(t.out);return[t.op===le.MATCH,e]}startCond(){let e=0,t=this.start;e:for(;;){const r=this.inst[t];switch(r.op){case le.EMPTY_WIDTH:e|=r.arg;break;case le.FAIL:return-1;case le.CAPTURE:case le.NOP:break;default:break e}t=r.out}return e}next(e){const t=this.inst[e>>1];return e&1?t.arg:t.out}patch(e,t){for(;e!==0;){const r=this.inst[e>>1];e&1?(e=r.arg,r.arg=t):(e=r.out,r.out=t)}}append(e,t){if(e===0)return t;if(t===0)return e;let r=e;for(;;){const i=this.next(r);if(i===0)break;r=i}const s=this.inst[r>>1];return r&1?s.arg=t:s.out=t,e}toString(){let e="";for(let t=0;t<this.inst.length;t++){const r=e.length;e+=t,t===this.start&&(e+="*"),e+="        ".substring(e.length-r),e+=this.inst[t],e+=`
`}return e}}class Ao{constructor(e=0,t=0,r=!1){this.i=e,this.out=t,this.nullable=r}}class li{static ANY_RUNE_NOT_NL(){return[0,P.CODES.get(`
`)-1,P.CODES.get(`
`)+1,ne.MAX_RUNE]}static ANY_RUNE(){return[0,ne.MAX_RUNE]}static compileRegexp(e){const t=new li,r=t.compile(e);return t.prog.patch(r.out,t.newInst(le.MATCH).i),t.prog.start=r.i,t.prog}constructor(){this.prog=new P7,this.newInst(le.FAIL)}newInst(e){return this.prog.addInst(e),new Ao(this.prog.numInst()-1,0,!0)}nop(){const e=this.newInst(le.NOP);return e.out=e.i<<1,e}fail(){return new Ao}cap(e){const t=this.newInst(le.CAPTURE);return t.out=t.i<<1,this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new Ao(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const r=this.newInst(le.ALT),s=this.prog.getInst(r.i);return s.out=e.i,s.arg=t.i,r.out=this.prog.append(e.out,t.out),r.nullable=e.nullable||t.nullable,r}loop(e,t){const r=this.newInst(le.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=r.i<<1):(s.out=e.i,r.out=r.i<<1|1),this.prog.patch(e.out,r.i),r}quest(e,t){const r=this.newInst(le.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=r.i<<1):(s.out=e.i,r.out=r.i<<1|1),r.out=this.prog.append(r.out,e.out),r}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new Ao(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(le.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=t.i<<1,t}rune(e,t){const r=this.newInst(le.RUNE);r.nullable=!1;const s=this.prog.getInst(r.i);return s.runes=e,t&=q.FOLD_CASE,(e.length!==1||ne.simpleFold(e[0])===e[0])&&(t&=-2),s.arg=t,r.out=r.i<<1,!(t&q.FOLD_CASE)&&e.length===1||e.length===2&&e[0]===e[1]?s.op=le.RUNE1:e.length===2&&e[0]===0&&e[1]===ne.MAX_RUNE?s.op=le.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===P.CODES.get(`
`)-1&&e[2]===P.CODES.get(`
`)+1&&e[3]===ne.MAX_RUNE&&(s.op=le.RUNE_ANY_NOT_NL),r}compile(e){switch(e.op){case D.Op.NO_MATCH:return this.fail();case D.Op.EMPTY_MATCH:return this.nop();case D.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let r of e.runes){const s=this.rune([r],e.flags);t=t===null?s:this.cat(t,s)}return t}case D.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case D.Op.ANY_CHAR_NOT_NL:return this.rune(li.ANY_RUNE_NOT_NL(),0);case D.Op.ANY_CHAR:return this.rune(li.ANY_RUNE(),0);case D.Op.BEGIN_LINE:return this.empty(ae.EMPTY_BEGIN_LINE);case D.Op.END_LINE:return this.empty(ae.EMPTY_END_LINE);case D.Op.BEGIN_TEXT:return this.empty(ae.EMPTY_BEGIN_TEXT);case D.Op.END_TEXT:return this.empty(ae.EMPTY_END_TEXT);case D.Op.WORD_BOUNDARY:return this.empty(ae.EMPTY_WORD_BOUNDARY);case D.Op.NO_WORD_BOUNDARY:return this.empty(ae.EMPTY_NO_WORD_BOUNDARY);case D.Op.CAPTURE:{const t=this.cap(e.cap<<1),r=this.compile(e.subs[0]),s=this.cap(e.cap<<1|1);return this.cat(this.cat(t,r),s)}case D.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&q.NON_GREEDY)!==0);case D.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&q.NON_GREEDY)!==0);case D.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&q.NON_GREEDY)!==0);case D.Op.CONCAT:{if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.cat(t,s)}return t}}case D.Op.ALTERNATE:{if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.alt(t,s)}return t}}default:throw new x7("regexp: unhandled case in compile")}}}class $t{static simplify(e){if(e===null)return null;switch(e.op){case D.Op.CAPTURE:case D.Op.CONCAT:case D.Op.ALTERNATE:{let t=e;for(let r=0;r<e.subs.length;r++){const s=e.subs[r],i=$t.simplify(s);t===e&&i!==s&&(t=D.fromRegexp(e),t.runes=null,t.subs=e.subs.slice(0,e.subs.length)),t!==e&&(t.subs[r]=i)}return t}case D.Op.STAR:case D.Op.PLUS:case D.Op.QUEST:{const t=$t.simplify(e.subs[0]);return $t.simplify1(e.op,e.flags,t,e)}case D.Op.REPEAT:{if(e.min===0&&e.max===0)return new D(D.Op.EMPTY_MATCH);const t=$t.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return $t.simplify1(D.Op.STAR,e.flags,t,null);if(e.min===1)return $t.simplify1(D.Op.PLUS,e.flags,t,null);const s=new D(D.Op.CONCAT),i=[];for(let o=0;o<e.min-1;o++)i.push(t);return i.push($t.simplify1(D.Op.PLUS,e.flags,t,null)),s.subs=i.slice(0),s}if(e.min===1&&e.max===1)return t;let r=null;if(e.min>0){r=[];for(let s=0;s<e.min;s++)r.push(t)}if(e.max>e.min){let s=$t.simplify1(D.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const o=new D(D.Op.CONCAT);o.subs=[t,s],s=$t.simplify1(D.Op.QUEST,e.flags,o,null)}if(r===null)return s;r.push(s)}if(r!==null){const s=new D(D.Op.CONCAT);return s.subs=r.slice(0),s}return new D(D.Op.NO_MATCH)}}return e}static simplify1(e,t,r,s){return r.op===D.Op.EMPTY_MATCH||e===r.op&&(t&q.NON_GREEDY)===(r.flags&q.NON_GREEDY)?r:(s!==null&&s.op===e&&(s.flags&q.NON_GREEDY)===(t&q.NON_GREEDY)&&r===s.subs[0]||(s=new D(e),s.flags=t,s.subs=[r]),s)}}class we{constructor(e,t){this.sign=e,this.cls=t}}const Ah=[48,57],Th=[9,10,12,13,32,32],xh=[48,57,65,90,95,95,97,122],Ih=new Map([["\\d",new we(1,Ah)],["\\D",new we(-1,Ah)],["\\s",new we(1,Th)],["\\S",new we(-1,Th)],["\\w",new we(1,xh)],["\\W",new we(-1,xh)]]),Ch=[48,57,65,90,97,122],Sh=[65,90,97,122],Rh=[0,127],Ph=[9,9,32,32],kh=[0,31,127,127],Oh=[48,57],Nh=[33,126],Dh=[97,122],Lh=[32,126],Vh=[33,47,58,64,91,96,123,126],Mh=[9,13,32,32],Bh=[65,90],Fh=[48,57,65,90,95,95,97,122],Uh=[48,57,65,70,97,102],$h=new Map([["[:alnum:]",new we(1,Ch)],["[:^alnum:]",new we(-1,Ch)],["[:alpha:]",new we(1,Sh)],["[:^alpha:]",new we(-1,Sh)],["[:ascii:]",new we(1,Rh)],["[:^ascii:]",new we(-1,Rh)],["[:blank:]",new we(1,Ph)],["[:^blank:]",new we(-1,Ph)],["[:cntrl:]",new we(1,kh)],["[:^cntrl:]",new we(-1,kh)],["[:digit:]",new we(1,Oh)],["[:^digit:]",new we(-1,Oh)],["[:graph:]",new we(1,Nh)],["[:^graph:]",new we(-1,Nh)],["[:lower:]",new we(1,Dh)],["[:^lower:]",new we(-1,Dh)],["[:print:]",new we(1,Lh)],["[:^print:]",new we(-1,Lh)],["[:punct:]",new we(1,Vh)],["[:^punct:]",new we(-1,Vh)],["[:space:]",new we(1,Mh)],["[:^space:]",new we(-1,Mh)],["[:upper:]",new we(1,Bh)],["[:^upper:]",new we(-1,Bh)],["[:word:]",new we(1,Fh)],["[:^word:]",new we(-1,Fh)],["[:xdigit:]",new we(1,Uh)],["[:^xdigit:]",new we(-1,Uh)]]);class ot{static charClassToString(e,t){let r="[";for(let s=0;s<t;s+=2){s>0&&(r+=" ");const i=e[s],o=e[s+1];i===o?r+=`0x${i.toString(16)}`:r+=`0x${i.toString(16)}-0x${o.toString(16)}`}return r+="]",r}static cmp(e,t,r,s){const i=e[t]-r;return i!==0?i:s-e[t+1]}static qsortIntPair(e,t,r){const s=((t+r)/2|0)&-2,i=e[s],o=e[s+1];let l=t,c=r;for(;l<=c;){for(;l<r&&ot.cmp(e,l,i,o)<0;)l+=2;for(;c>t&&ot.cmp(e,c,i,o)>0;)c-=2;if(l<=c){if(l!==c){let h=e[l];e[l]=e[c],e[c]=h,h=e[l+1],e[l+1]=e[c+1],e[c+1]=h}l+=2,c-=2}}t<c&&ot.qsortIntPair(e,t,c),l<r&&ot.qsortIntPair(e,l,r)}constructor(e=ae.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;ot.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const r=this.r[t],s=this.r[t+1];if(r<=this.r[e-1]+1){s>this.r[e-1]&&(this.r[e-1]=s);continue}this.r[e]=r,this.r[e+1]=s,e+=2}return this.len=e,this}appendLiteral(e,t){return t&q.FOLD_CASE?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let r=2;r<=4;r+=2)if(this.len>=r){const s=this.r[this.len-r],i=this.r[this.len-r+1];if(e<=i+1&&s<=t+1)return e<s&&(this.r[this.len-r]=e),t>i&&(this.r[this.len-r+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=ne.MIN_FOLD&&t>=ne.MAX_FOLD)return this.appendRange(e,t);if(t<ne.MIN_FOLD||e>ne.MAX_FOLD)return this.appendRange(e,t);e<ne.MIN_FOLD&&(this.appendRange(e,ne.MIN_FOLD-1),e=ne.MIN_FOLD),t>ne.MAX_FOLD&&(this.appendRange(ne.MAX_FOLD+1,t),t=ne.MAX_FOLD);for(let r=e;r<=t;r++){this.appendRange(r,r);for(let s=ne.simpleFold(r);s!==r;s=ne.simpleFold(s))this.appendRange(s,s)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let r=0;r<e.length;r+=2){const s=e[r],i=e[r+1];t<=s-1&&this.appendRange(t,s-1),t=i+1}return t<=ne.MAX_RUNE&&this.appendRange(t,ne.MAX_RUNE),this}appendTable(e){for(let t of e){const r=t[0],s=t[1],i=t[2];if(i===1){this.appendRange(r,s);continue}for(let o=r;o<=s;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let r of e){const s=r[0],i=r[1],o=r[2];if(o===1){t<=s-1&&this.appendRange(t,s-1),t=i+1;continue}for(let l=s;l<=i;l+=o)t<=l-1&&this.appendRange(t,l-1),t=l+1}return t<=ne.MAX_RUNE&&this.appendRange(t,ne.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let r=0;r<this.len;r+=2){const s=this.r[r],i=this.r[r+1];e<=s-1&&(this.r[t]=e,this.r[t+1]=s-1,t+=2),e=i+1}return this.len=t,e<=ne.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=ne.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let r=e.cls;return t&&(r=new ot().appendFoldedClass(r).cleanClass().toArray()),this.appendClassWithSign(r,e.sign)}toString(){return ot.charClassToString(this.r,this.len)}}class ci{static of(e,t){return new ci(e,t)}constructor(e,t){this.first=e,this.second=t}}class k7{constructor(e){this.str=e,this.position=0}pos(){return this.position}rewindTo(e){this.position=e}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(e){this.position+=e}skipString(e){this.position+=e.length}pop(){const e=this.str.codePointAt(this.position);return this.position+=ae.charCount(e),e}lookingAt(e){return this.rest().startsWith(e)}rest(){return this.str.substring(this.position)}from(e){return this.str.substring(e,this.position)}toString(){return this.rest()}}const W=class W{static ANY_TABLE(){return[[0,ne.MAX_RUNE,1]]}static unicodeTable(e){return e==="Any"?ci.of(W.ANY_TABLE(),W.ANY_TABLE()):it.CATEGORIES.has(e)?ci.of(it.CATEGORIES.get(e),it.FOLD_CATEGORIES.get(e)):it.SCRIPTS.has(e)?ci.of(it.SCRIPTS.get(e),it.FOLD_SCRIPT.get(e)):null}static minFoldRune(e){if(e<ne.MIN_FOLD||e>ne.MAX_FOLD)return e;let t=e;const r=e;for(e=ne.simpleFold(e);e!==r;e=ne.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===D.Op.EMPTY_MATCH)return null;if(e.op===D.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===D.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const r=new D(D.Op.LITERAL);return r.flags=t,r.runes=ae.stringToRunes(e),r}static parse(e,t){return new W(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const r=W.parseInt(e);if(r===-1||!e.more())return-1;let s;if(!e.lookingAt(","))s=r;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))s=-1;else if((s=W.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),r<0||r>1e3||s===-2||s>1e3||s>=0&&r>s)throw new Ne(W.ERR_INVALID_REPEAT_SIZE,e.from(t));return r<<16|s&ne.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const r=e.codePointAt(t);if(r!==P.CODES.get("_")&&!ae.isalnum(r))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=P.CODES.get("0")&&e.peek()<=P.CODES.get("9");)e.skip(1);const r=e.from(t);return r.length===0||r.length>1&&r.codePointAt(0)===P.CODES.get("0")?-1:r.length>8?-2:parseFloat(r,10)}static isCharClass(e){return e.op===D.Op.LITERAL&&e.runes.length===1||e.op===D.Op.CHAR_CLASS||e.op===D.Op.ANY_CHAR_NOT_NL||e.op===D.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case D.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case D.Op.CHAR_CLASS:for(let r=0;r<e.runes.length;r+=2)if(e.runes[r]<=t&&t<=e.runes[r+1])return!0;return!1;case D.Op.ANY_CHAR_NOT_NL:return t!==P.CODES.get(`
`);case D.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case D.Op.ANY_CHAR:break;case D.Op.ANY_CHAR_NOT_NL:W.matchRune(t,P.CODES.get(`
`))&&(e.op=D.Op.ANY_CHAR);break;case D.Op.CHAR_CLASS:t.op===D.Op.LITERAL?e.runes=new ot(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new ot(e.runes).appendClass(t.runes).toArray();break;case D.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=D.Op.CHAR_CLASS,e.runes=new ot().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new Ne(W.ERR_TRAILING_BACKSLASH);let r=e.pop();e:switch(r){case P.CODES.get("1"):case P.CODES.get("2"):case P.CODES.get("3"):case P.CODES.get("4"):case P.CODES.get("5"):case P.CODES.get("6"):case P.CODES.get("7"):if(!e.more()||e.peek()<P.CODES.get("0")||e.peek()>P.CODES.get("7"))break;case P.CODES.get("0"):{let s=r-P.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<P.CODES.get("0")||e.peek()>P.CODES.get("7"));i++)s=s*8+e.peek()-P.CODES.get("0"),e.skip(1);return s}case P.CODES.get("x"):{if(!e.more())break;if(r=e.pop(),r===P.CODES.get("{")){let o=0,l=0;for(;;){if(!e.more())break e;if(r=e.pop(),r===P.CODES.get("}"))break;const c=ae.unhex(r);if(c<0||(l=l*16+c,l>ne.MAX_RUNE))break e;o++}if(o===0)break e;return l}const s=ae.unhex(r);if(!e.more())break;r=e.pop();const i=ae.unhex(r);if(s<0||i<0)break;return s*16+i}case P.CODES.get("a"):return P.CODES.get("\x07");case P.CODES.get("f"):return P.CODES.get("\f");case P.CODES.get("n"):return P.CODES.get(`
`);case P.CODES.get("r"):return P.CODES.get("\r");case P.CODES.get("t"):return P.CODES.get("	");case P.CODES.get("v"):return P.CODES.get("\v");default:if(!ae.isalnum(r))return r;break}throw new Ne(W.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new Ne(W.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?W.parseEscape(e):e.pop()}static concatRunes(e,t){return[...e,...t]}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups={},this.stack=[],this.free=null}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):t=new D(e),t}reuse(e){e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!D.isPseudoOp(this.stack[t-1].op);)t--;const r=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),r}push(e){if(e.op===D.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=D.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===D.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&ne.simpleFold(e.runes[0])===e.runes[2]&&ne.simpleFold(e.runes[2])===e.runes[0]||e.op===D.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&ne.simpleFold(e.runes[0])===e.runes[1]&&ne.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|q.FOLD_CASE))return null;e.op=D.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|q.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),e}maybeConcat(e,t){const r=this.stack.length;if(r<2)return!1;const s=this.stack[r-1],i=this.stack[r-2];return s.op!==D.Op.LITERAL||i.op!==D.Op.LITERAL||(s.flags&q.FOLD_CASE)!==(i.flags&q.FOLD_CASE)?!1:(i.runes=W.concatRunes(i.runes,s.runes),e>=0?(s.runes=[e],s.flags=t,!0):(this.pop(),this.reuse(s),!1))}newLiteral(e,t){const r=this.newRegexp(D.Op.LITERAL);return r.flags=t,t&q.FOLD_CASE&&(e=W.minFoldRune(e)),r.runes=[e],r}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,r,s,i,o){let l=this.flags;if(l&q.PERL_X&&(i.more()&&i.lookingAt("?")&&(i.skip(1),l^=q.NON_GREEDY),o!==-1))throw new Ne(W.ERR_INVALID_REPEAT_OP,i.from(o));const c=this.stack.length;if(c===0)throw new Ne(W.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const h=this.stack[c-1];if(D.isPseudoOp(h.op))throw new Ne(W.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const p=this.newRegexp(e);p.min=t,p.max=r,p.flags=l,p.subs=[h],this.stack[c-1]=p}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(D.Op.EMPTY_MATCH)):this.push(this.collapse(e,D.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(D.Op.NO_MATCH)):this.push(this.collapse(e,D.Op.ALTERNATE))}cleanAlt(e){e.op===D.Op.CHAR_CLASS&&(e.runes=new ot(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===ne.MAX_RUNE?(e.runes=null,e.op=D.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===P.CODES.get(`
`)-1&&e.runes[2]===P.CODES.get(`
`)+1&&e.runes[3]===ne.MAX_RUNE&&(e.runes=null,e.op=D.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let r=0;for(let l of e)r+=l.op===t?l.subs.length:1;let s=new Array(r).fill(null),i=0;for(let l of e)l.op===t?(s.splice(i,l.subs.length,...l.subs),i+=l.subs.length,this.reuse(l)):s[i++]=l;let o=this.newRegexp(t);if(o.subs=s,t===D.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const l=o;o=o.subs[0],this.reuse(l)}return o}factor(e){if(e.length<2)return e;let t=0,r=e.length,s=0,i=null,o=0,l=0,c=0;for(let p=0;p<=r;p++){let g=null,x=0,S=0;if(p<r){let R=e[t+p];if(R.op===D.Op.CONCAT&&R.subs.length>0&&(R=R.subs[0]),R.op===D.Op.LITERAL&&(g=R.runes,x=R.runes.length,S=R.flags&q.FOLD_CASE),S===l){let B=0;for(;B<o&&B<x&&i[B]===g[B];)B++;if(B>0){o=B;continue}}}if(p!==c)if(p===c+1)e[s++]=e[t+c];else{const R=this.newRegexp(D.Op.LITERAL);R.flags=l,R.runes=i.slice(0,o);for(let Q=c;Q<p;Q++)e[t+Q]=this.removeLeadingString(e[t+Q],o);const B=this.collapse(e.slice(t+c,t+p),D.Op.ALTERNATE),U=this.newRegexp(D.Op.CONCAT);U.subs=[R,B],e[s++]=U}c=p,i=g,o=x,l=S}r=s,t=0,c=0,s=0;let h=null;for(let p=0;p<=r;p++){let g=null;if(!(p<r&&(g=W.leadingRegexp(e[t+p]),h!==null&&h.equals(g)&&(W.isCharClass(h)||h.op===D.Op.REPEAT&&h.min===h.max&&W.isCharClass(h.subs[0]))))){if(p!==c)if(p===c+1)e[s++]=e[t+c];else{const x=h;for(let B=c;B<p;B++){const U=B!==c;e[t+B]=this.removeLeadingRegexp(e[t+B],U)}const S=this.collapse(e.slice(t+c,t+p),D.Op.ALTERNATE),R=this.newRegexp(D.Op.CONCAT);R.subs=[x,S],e[s++]=R}c=p,h=g}}r=s,t=0,c=0,s=0;for(let p=0;p<=r;p++)if(!(p<r&&W.isCharClass(e[t+p]))){if(p!==c)if(p===c+1)e[s++]=e[t+c];else{let g=c;for(let S=c+1;S<p;S++){const R=e[t+g],B=e[t+S];(R.op<B.op||R.op===B.op&&(R.runes!==null?R.runes.length:0)<(B.runes!==null?B.runes.length:0))&&(g=S)}const x=e[t+c];e[t+c]=e[t+g],e[t+g]=x;for(let S=c+1;S<p;S++)W.mergeCharClass(e[t+c],e[t+S]),this.reuse(e[t+S]);this.cleanAlt(e[t+c]),e[s++]=e[t+c]}p<r&&(e[s++]=e[t+p]),c=p+1}r=s,t=0,c=0,s=0;for(let p=0;p<r;++p)p+1<r&&e[t+p].op===D.Op.EMPTY_MATCH&&e[t+p+1].op===D.Op.EMPTY_MATCH||(e[s++]=e[t+p]);return r=s,t=0,e.slice(t,r)}removeLeadingString(e,t){if(e.op===D.Op.CONCAT&&e.subs.length>0){const r=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=r,r.op===D.Op.EMPTY_MATCH)switch(this.reuse(r),e.subs.length){case 0:case 1:e.op=D.Op.EMPTY_MATCH,e.subs=null;break;case 2:{const s=e;e=e.subs[1],this.reuse(s);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===D.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=D.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===D.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:{e.op=D.Op.EMPTY_MATCH,e.subs=D.emptySubs();break}case 1:{const r=e;e=e.subs[0],this.reuse(r);break}}return e}return t&&this.reuse(e),this.newRegexp(D.Op.EMPTY_MATCH)}parseInternal(){if(this.flags&q.LITERAL)return W.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,r=-1;const s=new k7(this.wholeRegexp);for(;s.more();){let o=-1;e:switch(s.peek()){case P.CODES.get("("):if(this.flags&q.PERL_X&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(D.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case P.CODES.get("|"):this.parseVerticalBar(),s.skip(1);break;case P.CODES.get(")"):this.parseRightParen(),s.skip(1);break;case P.CODES.get("^"):this.flags&q.ONE_LINE?this.op(D.Op.BEGIN_TEXT):this.op(D.Op.BEGIN_LINE),s.skip(1);break;case P.CODES.get("$"):this.flags&q.ONE_LINE?this.op(D.Op.END_TEXT).flags|=q.WAS_DOLLAR:this.op(D.Op.END_LINE),s.skip(1);break;case P.CODES.get("."):this.flags&q.DOT_NL?this.op(D.Op.ANY_CHAR):this.op(D.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case P.CODES.get("["):this.parseClass(s);break;case P.CODES.get("*"):case P.CODES.get("+"):case P.CODES.get("?"):{o=s.pos();let l=null;switch(s.pop()){case P.CODES.get("*"):l=D.Op.STAR;break;case P.CODES.get("+"):l=D.Op.PLUS;break;case P.CODES.get("?"):l=D.Op.QUEST;break}this.repeat(l,t,r,o,s,e);break}case P.CODES.get("{"):{o=s.pos();const l=W.parseRepeat(s);if(l<0){s.rewindTo(o),this.literal(s.pop());break}t=l>>16,r=(l&ne.MAX_BMP)<<16>>16,this.repeat(D.Op.REPEAT,t,r,o,s,e);break}case P.CODES.get("\\"):{const l=s.pos();if(s.skip(1),this.flags&q.PERL_X&&s.more())switch(s.pop()){case P.CODES.get("A"):this.op(D.Op.BEGIN_TEXT);break e;case P.CODES.get("b"):this.op(D.Op.WORD_BOUNDARY);break e;case P.CODES.get("B"):this.op(D.Op.NO_WORD_BOUNDARY);break e;case P.CODES.get("C"):throw new Ne(W.ERR_INVALID_ESCAPE,"\\C");case P.CODES.get("Q"):{let g=s.rest();const x=g.indexOf("\\E");x>=0&&(g=g.substring(0,x)),s.skipString(g),s.skipString("\\E");let S=0;for(;S<g.length;){const R=g.codePointAt(S);this.literal(R),S+=ae.charCount(R)}break e}case P.CODES.get("z"):this.op(D.Op.END_TEXT);break e;default:s.rewindTo(l);break}const c=this.newRegexp(D.Op.CHAR_CLASS);if(c.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const p=new ot;if(this.parseUnicodeClass(s,p)){c.runes=p.toArray(),this.push(c);break e}}const h=new ot;if(this.parsePerlClassEscape(s,h)){c.runes=h.toArray(),this.push(c);break e}s.rewindTo(l),this.reuse(c),this.literal(W.parseEscape(s));break}default:this.literal(s.pop());break}e=o}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new Ne(W.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),r=e.rest();if(r.startsWith("(?P<")||r.startsWith("(?<")){const l=r.charAt(2)==="P"?4:3,c=r.indexOf(">");if(c<0)throw new Ne(W.ERR_INVALID_NAMED_CAPTURE,r);const h=r.substring(l,c);if(e.skipString(h),e.skip(l+1),!W.isValidCaptureName(h))throw new Ne(W.ERR_INVALID_NAMED_CAPTURE,r.substring(0,c+1));const p=this.op(D.Op.LEFT_PAREN);if(p.cap=++this.numCap,this.namedGroups[h])throw new Ne(W.ERR_DUPLICATE_NAMED_CAPTURE,h);this.namedGroups[h]=this.numCap,p.name=h;return}e.skip(2);let s=this.flags,i=1,o=!1;e:for(;e.more();){const l=e.pop();switch(l){case P.CODES.get("i"):s|=q.FOLD_CASE,o=!0;break;case P.CODES.get("m"):s&=-17,o=!0;break;case P.CODES.get("s"):s|=q.DOT_NL,o=!0;break;case P.CODES.get("U"):s|=q.NON_GREEDY,o=!0;break;case P.CODES.get("-"):if(i<0)break e;i=-1,s=~s,o=!1;break;case P.CODES.get(":"):case P.CODES.get(")"):if(i<0){if(!o)break e;s=~s}l===P.CODES.get(":")&&this.op(D.Op.LEFT_PAREN),this.flags=s;return;default:break e}}throw new Ne(W.ERR_INVALID_PERL_OP,e.from(t))}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(D.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===D.Op.VERTICAL_BAR&&W.isCharClass(this.stack[e-1])&&W.isCharClass(this.stack[e-3])){let t=this.stack[e-1],r=this.stack[e-3];if(t.op>r.op){const s=r;r=t,t=s,this.stack[e-3]=r}return W.mergeCharClass(r,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],r=this.stack[e-2];if(r.op===D.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=r,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new Ne(W.ERR_INTERNAL_ERROR,"stack underflow");const t=this.pop(),r=this.pop();if(r.op!==D.Op.LEFT_PAREN)throw new Ne(W.ERR_MISSING_PAREN,this.wholeRegexp);this.flags=r.flags,r.cap===0?this.push(t):(r.op=D.Op.CAPTURE,r.subs=[t],this.push(r))}parsePerlClassEscape(e,t){const r=e.pos();if(!(this.flags&q.PERL_X)||!e.more()||e.pop()!==P.CODES.get("\\")||!e.more())return!1;e.pop();const s=e.from(r),i=Ih.has(s)?Ih.get(s):null;return i===null?!1:(t.appendGroup(i,(this.flags&q.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const r=e.rest(),s=r.indexOf(":]");if(s<0)return!1;const i=r.substring(0,s+2);e.skipString(i);const o=$h.has(i)?$h.get(i):null;if(o===null)throw new Ne(W.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&q.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const r=e.pos();if(!(this.flags&q.UNICODE_GROUPS)||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let s=1,i=e.pop();if(i===P.CODES.get("P")&&(s=-1),!e.more())throw e.rewindTo(r),new Ne(W.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==P.CODES.get("{"))o=ae.runeToString(i);else{const p=e.rest(),g=p.indexOf("}");if(g<0)throw e.rewindTo(r),new Ne(W.ERR_INVALID_CHAR_RANGE,e.rest());o=p.substring(0,g),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===P.CODES.get("^")&&(s=0-s,o=o.substring(1));const l=W.unicodeTable(o);if(l===null)throw new Ne(W.ERR_INVALID_CHAR_RANGE,e.from(r));const c=l.first,h=l.second;if(!(this.flags&q.FOLD_CASE)||h===null)t.appendTableWithSign(c,s);else{const p=new ot().appendTable(c).appendTable(h).cleanClass().toArray();t.appendClassWithSign(p,s)}return!0}parseClass(e){const t=e.pos();e.skip(1);const r=this.newRegexp(D.Op.CHAR_CLASS);r.flags=this.flags;const s=new ot;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),this.flags&q.CLASS_NL||s.appendRange(P.CODES.get(`
`),P.CODES.get(`
`)));let o=!0;for(;!e.more()||e.peek()!==P.CODES.get("]")||o;){if(e.more()&&e.lookingAt("-")&&!(this.flags&q.PERL_X)&&!o){const p=e.rest();if(p==="-"||!p.startsWith("-]"))throw e.rewindTo(t),new Ne(W.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const l=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,s))continue;e.rewindTo(l)}if(this.parseUnicodeClass(e,s)||this.parsePerlClassEscape(e,s))continue;e.rewindTo(l);const c=W.parseClassChar(e,t);let h=c;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(h=W.parseClassChar(e,t),h<c)throw new Ne(W.ERR_INVALID_CHAR_RANGE,e.from(l))}this.flags&q.FOLD_CASE?s.appendFoldedRange(c,h):s.appendRange(c,h)}e.skip(1),s.cleanClass(),i<0&&s.negateClass(),r.runes=s.toArray(),this.push(r)}};_(W,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),_(W,"ERR_INVALID_CHAR_RANGE","invalid character class range"),_(W,"ERR_INVALID_ESCAPE","invalid escape sequence"),_(W,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),_(W,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),_(W,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),_(W,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),_(W,"ERR_MISSING_BRACKET","missing closing ]"),_(W,"ERR_MISSING_PAREN","missing closing )"),_(W,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),_(W,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),_(W,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name");let tc=W;class O7{constructor(){this.inst=null,this.cap=[]}}class Hh{constructor(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}contains(e){const t=this.sparse[e];return t<this.size&&this.densePcs[t]===e}isEmpty(){return this.size===0}add(e){const t=this.size++;return this.sparse[e]=t,this.denseThreads[t]=null,this.densePcs[t]=e,t}clear(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}toString(){let e="{";for(let t=0;t<this.size;t++)t!==0&&(e+=", "),e+=this.densePcs[t];return e+="}",e}}class cs{static fromRE2(e){const t=new cs;return t.prog=e.prog,t.re2=e,t.q0=new Hh(t.prog.numInst()),t.q1=new Hh(t.prog.numInst()),t.pool=[],t.poolSize=0,t.matched=!1,t.matchcap=Array(t.prog.numCap<2?2:t.prog.numCap).fill(0),t.ncap=0,t}static fromMachine(e){const t=new cs;return t.re2=e.re2,t.prog=e.prog,t.q0=e.q0,t.q1=e.q1,t.pool=e.pool,t.poolSize=e.poolSize,t.matched=e.matched,t.matchcap=e.matchcap,t.ncap=e.ncap,t}init(e){this.ncap=e,e>this.matchcap.length?this.initNewCap(e):this.resetCap(e)}resetCap(e){for(let t=0;t<this.poolSize;t++){const r=this.pool[t];r.cap=Array(e).fill(0)}}initNewCap(e){for(let t=0;t<this.poolSize;t++){const r=this.pool[t];r.cap=Array(e).fill(0)}this.matchcap=Array(e).fill(0)}submatches(){return this.ncap===0?ae.emptyInts():this.matchcap.slice(0,this.ncap)}alloc(e){let t;return this.poolSize>0?(this.poolSize--,t=this.pool[this.poolSize]):t=new O7,t.inst=e,t}freeQueue(e,t=0){const r=e.size-t,s=this.poolSize+r;this.pool.length<s&&(this.pool=this.pool.slice(0,Math.max(this.pool.length*2,s)));for(let i=t;i<e.size;i++){const o=e.denseThreads[i];o!==null&&(this.pool[this.poolSize]=o,this.poolSize++)}e.clear()}freeThread(e){this.pool.length<=this.poolSize&&(this.pool=this.pool.slice(0,this.pool.length*2)),this.pool[this.poolSize]=e,this.poolSize++}match(e,t,r){const s=this.re2.cond;if(s===ae.EMPTY_ALL||(r===q.ANCHOR_START||r===q.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap=Array(this.prog.numCap).fill(-1);let i=this.q0,o=this.q1,l=e.step(t),c=l>>3,h=l&7,p=-1,g=0;l!==$n.EOF()&&(l=e.step(t+h),p=l>>3,g=l&7);let x;for(t===0?x=ae.emptyOpContext(-1,c):x=e.context(t);;){if(i.isEmpty()){if(s&ae.EMPTY_BEGIN_TEXT&&t!==0||this.matched)break;if(this.re2.prefix.length!==0&&p!==this.re2.prefixRune&&e.canCheckPrefix()){const B=e.index(this.re2,t);if(B<0)break;t+=B,l=e.step(t),c=l>>3,h=l&7,l=e.step(t+h),p=l>>3,g=l&7}}!this.matched&&(t===0||r===q.UNANCHORED)&&(this.ncap>0&&(this.matchcap[0]=t),this.add(i,this.prog.start,t,this.matchcap,x,null));const S=t+h;if(x=e.context(S),this.step(i,o,t,S,c,x,r,t===e.endPos()),h===0||this.ncap===0&&this.matched)break;t+=h,c=p,h=g,c!==-1&&(l=e.step(t+h),p=l>>3,g=l&7);const R=i;i=o,o=R}return this.freeQueue(o),this.matched}step(e,t,r,s,i,o,l,c){const h=this.re2.longest;for(let p=0;p<e.size;p++){let g=e.denseThreads[p];if(g===null)continue;if(h&&this.matched&&this.ncap>0&&this.matchcap[0]<g.cap[0]){this.freeThread(g);continue}const x=g.inst;let S=!1;switch(x.op){case le.MATCH:if(l===q.ANCHOR_BOTH&&!c)break;this.ncap>0&&(!h||!this.matched||this.matchcap[1]<r)&&(g.cap[1]=r,this.matchcap=g.cap.slice(0,this.ncap)),h||this.freeQueue(e,p+1),this.matched=!0;break;case le.RUNE:S=x.matchRune(i);break;case le.RUNE1:S=i===x.runes[0];break;case le.RUNE_ANY:S=!0;break;case le.RUNE_ANY_NOT_NL:S=i!==P.CODES.get(`
`);break;default:throw new Error("bad inst")}S&&(g=this.add(t,x.out,s,g.cap,o,g)),g!==null&&(this.freeThread(g),e.denseThreads[p]=null)}e.clear()}add(e,t,r,s,i,o){if(t===0||e.contains(t))return o;const l=e.add(t),c=this.prog.inst[t];switch(c.op){case le.FAIL:break;case le.ALT:case le.ALT_MATCH:o=this.add(e,c.out,r,s,i,o),o=this.add(e,c.arg,r,s,i,o);break;case le.EMPTY_WIDTH:c.arg&~i||(o=this.add(e,c.out,r,s,i,o));break;case le.NOP:o=this.add(e,c.out,r,s,i,o);break;case le.CAPTURE:if(c.arg<this.ncap){const h=s[c.arg];s[c.arg]=r,this.add(e,c.out,r,s,i,null),s[c.arg]=h}else o=this.add(e,c.out,r,s,i,o);break;case le.MATCH:case le.RUNE:case le.RUNE1:case le.RUNE_ANY:case le.RUNE_ANY_NOT_NL:o===null?o=this.alloc(c):o.inst=c,this.ncap>0&&o.cap!==s&&(o.cap=s.slice(0,this.ncap)),e.denseThreads[l]=o,o=null;break;default:throw new Error("unhandled")}return o}}class N7{constructor(e){this.value=e}get(){return this.value}set(e){this.value=e}compareAndSet(e,t){return this.value===e?(this.value=t,!0):!1}}class Ln{static initTest(e){const t=Ln.compile(e),r=new Ln(t.expr,t.prog,t.numSubexp,t.longest);return r.cond=t.cond,r.prefix=t.prefix,r.prefixUTF8=t.prefixUTF8,r.prefixComplete=t.prefixComplete,r.prefixRune=t.prefixRune,r}static compile(e){return Ln.compileImpl(e,q.PERL,!1)}static compilePOSIX(e){return Ln.compileImpl(e,q.POSIX,!0)}static compileImpl(e,t,r){let s=tc.parse(e,t);const i=s.maxCap();s=$t.simplify(s);const o=li.compileRegexp(s),l=new Ln(e,o,i,r),[c,h]=o.prefix();return l.prefixComplete=c,l.prefix=h,l.prefixUTF8=ae.stringToUtf8ByteArray(l.prefix),l.prefix.length>0&&(l.prefixRune=l.prefix.codePointAt(0)),l.namedGroups=s.namedGroups,l}static match(e,t){return Ln.compile(e).match(t)}constructor(e,t,r=0,s=0){this.expr=e,this.prog=t,this.numSubexp=r,this.longest=s,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.pooled=new N7}numberOfCapturingGroups(){return this.numSubexp}get(){let e;do e=this.pooled.get();while(e&&!this.pooled.compareAndSet(e,e.next));return e}reset(){this.pooled.set(null)}put(e,t){let r=this.pooled.get();do r=this.pooled.get(),!t&&r&&(e=cs.fromMachine(e),t=!0),e.next!==r&&(e.next=r);while(!this.pooled.compareAndSet(r,e))}toString(){return this.expr}doExecute(e,t,r,s){let i=this.get(),o=!1;i?i.next!==null&&(i=cs.fromMachine(i),o=!0):(i=cs.fromRE2(this),o=!0),i.init(s);const l=i.match(e,t,r)?i.submatches():null;return this.put(i,o),l}match(e){return this.doExecute(De.fromUTF16(e),0,q.UNANCHORED,0)!==null}matchWithGroup(e,t,r,s,i){return e instanceof tr||(e=ta.utf16(e)),this.matchMachineInput(e,t,r,s,i)}matchMachineInput(e,t,r,s,i){if(t>r)return[!1,null];const o=e.isUTF16Encoding()?De.fromUTF16(e.asCharSequence(),0,r):De.fromUTF8(e.asBytes(),0,r),l=this.doExecute(o,t,s,2*i);return l===null?[!1,null]:[!0,l]}matchUTF8(e){return this.doExecute(De.fromUTF8(e),0,q.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,r){let s=0,i=0,o="";const l=De.fromUTF16(e);let c=0;for(;i<=e.length;){const h=this.doExecute(l,i,q.UNANCHORED,2);if(h===null||h.length===0)break;o+=e.substring(s,h[0]),(h[1]>s||h[0]===0)&&(o+=t(e.substring(h[0],h[1])),c++),s=h[1];const p=l.step(i)&7;if(i+p>h[1]?i+=p:i+1>h[1]?i++:i=h[1],c>=r)break}return o+=e.substring(s),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let r=new Array(t).fill(-1);for(let s=0;s<e.length;s++)r[s]=e[s];e=r}return e}allMatches(e,t,r=s=>s){let s=[];const i=e.endPos();t<0&&(t=i+1);let o=0,l=0,c=-1;for(;l<t&&o<=i;){const h=this.doExecute(e,o,q.UNANCHORED,this.prog.numCap);if(h===null||h.length===0)break;let p=!0;if(h[1]===o){h[0]===c&&(p=!1);const g=e.step(o);g<0?o=i+1:o+=g&7}else o=h[1];c=h[1],p&&(s.push(r(this.pad(h))),l++)}return s}findUTF8(e){const t=this.doExecute(De.fromUTF8(e),0,q.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.doExecute(De.fromUTF8(e),0,q.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.doExecute(De.fromUTF16(e),0,q.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.doExecute(De.fromUTF16(e),0,q.UNANCHORED,2)}findUTF8Submatch(e){const t=this.doExecute(De.fromUTF8(e),0,q.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.slice(t[2*s],t[2*s+1]));return r}findUTF8SubmatchIndex(e){return this.pad(this.doExecute(De.fromUTF8(e),0,q.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.doExecute(De.fromUTF16(e),0,q.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.substring(t[2*s],t[2*s+1]));return r}findSubmatchIndex(e){return this.pad(this.doExecute(De.fromUTF16(e),0,q.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const r=this.allMatches(De.fromUTF8(e),t,s=>e.slice(s[0],s[1]));return r.length===0?null:r}findAllUTF8Index(e,t){const r=this.allMatches(De.fromUTF8(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAll(e,t){const r=this.allMatches(De.fromUTF16(e),t,s=>e.substring(s[0],s[1]));return r.length===0?null:r}findAllIndex(e,t){const r=this.allMatches(De.fromUTF16(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAllUTF8Submatch(e,t){const r=this.allMatches(De.fromUTF8(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.slice(s[2*o],s[2*o+1]));return i});return r.length===0?null:r}findAllUTF8SubmatchIndex(e,t){const r=this.allMatches(De.fromUTF8(e),t);return r.length===0?null:r}findAllSubmatch(e,t){const r=this.allMatches(De.fromUTF16(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.substring(s[2*o],s[2*o+1]));return i});return r.length===0?null:r}findAllSubmatchIndex(e,t){const r=this.allMatches(De.fromUTF16(e),t);return r.length===0?null:r}}const mt=class mt{static quote(e){return ae.quoteMeta(e)}static compile(e,t=0){let r=e;if(t&mt.CASE_INSENSITIVE&&(r=`(?i)${r}`),t&mt.DOTALL&&(r=`(?s)${r}`),t&mt.MULTILINE&&(r=`(?m)${r}`),t&-32)throw new I7("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH");let s=q.PERL;t&mt.DISABLE_UNICODE_GROUPS&&(s&=-129);const i=new mt(e,t);return i.re2Input=Ln.compileImpl(r,s,(t&mt.LONGEST_MATCH)!==0),i}static matches(e,t){return mt.compile(e).matcher(t).matches()}static initTest(e,t,r){if(e==null)throw new Error("pattern is null");if(r==null)throw new Error("re2 is null");const s=new mt(e,t);return s.re2Input=r,s}constructor(e,t){this.patternInput=e,this.flagsInput=t}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.matcher(e).matches()}matcher(e){return Array.isArray(e)&&(e=ta.utf8(e)),new C7(this,e)}split(e,t=0){const r=this.matcher(e),s=[];let i=0,o=0;for(;r.find();){if(o===0&&r.end()===0){o=r.end();continue}if(t>0&&s.length===t-1)break;if(o===r.start()){if(t===0){i+=1,o=r.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(r.substring(o,r.start())),o=r.end()}if(t===0&&o!==r.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(r.substring(o,r.inputLength()))}return(t!==0||s.length===0)&&s.push(r.substring(o,r.inputLength())),s}toString(){return this.patternInput}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}};_(mt,"CASE_INSENSITIVE",1),_(mt,"DOTALL",2),_(mt,"MULTILINE",4),_(mt,"DISABLE_UNICODE_GROUPS",8),_(mt,"LONGEST_MATCH",16);let Ei=mt;/**
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
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
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
 */let Es="12.15.0";function D7(n){Es=n}/**
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
 */const Vr=new xc("@firebase/firestore");function ts(){return Vr.logLevel}function j(n,...e){if(Vr.logLevel<=pe.DEBUG){const t=e.map(Vc);Vr.debug(`Firestore (${Es}): ${n}`,...t)}}function Tn(n,...e){if(Vr.logLevel<=pe.ERROR){const t=e.map(Vc);Vr.error(`Firestore (${Es}): ${n}`,...t)}}function zt(n,...e){if(Vr.logLevel<=pe.WARN){const t=e.map(Vc);Vr.warn(`Firestore (${Es}): ${n}`,...t)}}function Vc(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function J(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,ef(n,r,t)}function ef(n,e,t){let r=`FIRESTORE (${Es}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Tn(r),new Error(r)}function G(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||ef(e,s,r)}function oe(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends hn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _n{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class tf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class L7{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(at.UNAUTHENTICATED))}shutdown(){}}class V7{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class M7{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new _n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _n,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _n)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string",31837,{l:r}),new tf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string",2055,{h:e}),new at(e)}}class B7{constructor(e,t,r){this.T=e,this.P=t,this.R=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}A(){return this.R?this.R():null}get headers(){this.I.set("X-Goog-AuthUser",this.T);const e=this.A();return e&&this.I.set("Authorization",e),this.P&&this.I.set("X-Goog-Iam-Authorization-Token",this.P),this.I}}class F7{constructor(e,t,r){this.T=e,this.P=t,this.R=r}getToken(){return Promise.resolve(new B7(this.T,this.P,this.R))}start(e,t){e.enqueueRetryable(()=>t(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class U7{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){G(this.o===void 0,3512);const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new jh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new jh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function $7(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Mc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=$7(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function fe(n,e){return n<e?-1:n>e?1:0}function nc(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Nl(s)===Nl(i)?fe(s,i):Nl(s)?1:-1}return fe(n.length,e.length)}const H7=55296,j7=57343;function Nl(n){const e=n.charCodeAt(0);return e>=H7&&e<=j7}function fs(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Qt="__name__";class Kt{constructor(e,t,r){t===void 0?t=0:t>e.length&&J(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&J(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Kt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Kt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Kt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return fe(e.length,t.length)}static compareSegments(e,t){const r=Kt.isNumericId(e),s=Kt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Kt.extractNumericId(e).compare(Kt.extractNumericId(t)):nc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yn.fromString(e.substring(4,e.length-2))}}class ve extends Kt{construct(e,t,r){return new ve(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ve(t)}static emptyPath(){return new ve([])}}const q7=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends Kt{construct(e,t,r){return new Ge(e,t,r)}static isValidIdentifier(e){return q7.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qt}static keyField(){return new Ge([Qt])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new z(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new z(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(t)}static emptyPath(){return new Ge([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(ve.fromString(e))}static fromName(e){return new X(ve.fromString(e).popFirst(5))}static empty(){return new X(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ve.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new ve(e.slice()))}}/**
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
 */function nf(n,e,t){if(!t)throw new z(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function z7(n,e,t,r){if(e===!0&&r===!0)throw new z(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function qh(n){if(!X.isDocumentKey(n))throw new z(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function zh(n){if(X.isDocumentKey(n))throw new z(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function zi(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Bc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":J(12329,{type:typeof n})}function nr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new z(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Bc(n);throw new z(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ue(n,e){const t={typeString:n};return e&&(t.value=e),t}function Gi(n,e){if(!zi(n))throw new z(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new z(V.INVALID_ARGUMENT,t);return!0}/**
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
 */const Gh=-62135596800,Wh=1e6;class Ie{static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Wh);return new Ie(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Gh)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Wh}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Gi(e,Ie._jsonSchema))return new Ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Gh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ie._jsonSchemaVersion="firestore/timestamp/1.0",Ie._jsonSchema={type:Ue("string",Ie._jsonSchemaVersion),seconds:Ue("number"),nanoseconds:Ue("number")};/**
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
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Ie(0,0))}static max(){return new se(new Ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ai=-1;function G7(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Ie(t+1,0):new Ie(t,r));return new rr(s,X.empty(),e)}function W7(n){return new rr(n.readTime,n.key,Ai)}class rr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new rr(se.min(),X.empty(),Ai)}static max(){return new rr(se.max(),X.empty(),Ai)}}function K7(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:fe(n.largestBatchId,e.largestBatchId))}/**
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
 */const Y7="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Q7{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function As(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==Y7)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):L.reject(t)}static resolve(e){return new L((t,r)=>{t(e)})}static reject(e){return new L((t,r)=>{r(e)})}static waitFor(e){return new L((t,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=L.resolve(!1);for(const r of e)t=t.next(s=>s?L.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new L((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(p=>{o[h]=p,++l,l===i&&r(o)},p=>s(p))}})}static doWhile(e,t){return new L((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function X7(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ts(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Oa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Oa.ce=-1;/**
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
 */const Fc=-1;function Na(n){return n==null}function Ti(n){return n===0&&1/n==-1/0}function J7(n){return typeof n=="number"&&Number.isInteger(n)&&!Ti(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function Z7(n){return typeof n=="string"}/**
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
 */const rf="";function e3(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Kh(e)),e=t3(n.get(t),e);return Kh(e)}function t3(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case rf:t+="";break;default:t+=i}}return t}function Kh(n){return n+rf+""}/**
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
 */class Ce{constructor(e,t){this.comparator=e,this.root=t||tt.EMPTY}insert(e,t){return new Ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new To(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new To(this.root,e,this.comparator,!1)}getReverseIterator(){return new To(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new To(this.root,e,this.comparator,!0)}}class To{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??tt.RED,this.left=s??tt.EMPTY,this.right=i??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new tt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return tt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new tt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Yh(this.data.getIterator())}getIteratorFrom(e){return new Yh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new He(this.comparator);return t.data=e,t}}class Yh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class jt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new jt([])}unionWith(e){let t=new He(Ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new jt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fs(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */function na(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function jr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function n3(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function sf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class of extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class je{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new of("Invalid base64 string: "+i):i}}(e);return new je(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new je(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}je.EMPTY_BYTE_STRING=new je("");const r3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sr(n){if(G(!!n,39018),typeof n=="string"){let e=0;const t=r3.exec(n);if(G(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(n.seconds),nanos:Re(n.nanos)}}function Re(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ir(n){return typeof n=="string"?je.fromBase64String(n):je.fromUint8Array(n)}/**
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
 */const af="server_timestamp",lf="__type__",cf="__previous_value__",uf="__local_write_time__";function Da(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[lf])==null?void 0:r.stringValue)===af}function Wi(n){const e=n.mapValue.fields[cf];return Da(e)?Wi(e):e}function ps(n){const e=sr(n.mapValue.fields[uf].timestampValue);return new Ie(e.seconds,e.nanos)}/**
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
 */class s3{constructor(e,t,r,s,i,o,l,c,h,p,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=p,this.apiKey=g}}const ra="(default)";class xi{constructor(e,t){this.projectId=e,this.database=t||ra}static empty(){return new xi("","")}get isDefaultDatabase(){return this.database===ra}isEqual(e){return e instanceof xi&&e.projectId===this.projectId&&e.database===this.database}}function i3(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new z(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xi(n.options.projectId,e)}/**
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
 */const hf="__type__",o3="__max__",xo={mapValue:{}},df="__vector__",Ii="value",ms={nullValue:"NULL_VALUE"},Tt={booleanValue:!0},Je={booleanValue:!1};function qe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Da(n)?4:a3(n)?9007199254740991:sa(n)?10:11:J(28295,{value:n})}function Ft(n,e,t){if(n===e)return!0;const r=qe(n);if(r!==qe(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ps(n).isEqual(ps(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=sr(i.timestampValue),c=sr(o.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return ir(i.bytesValue).isEqual(ir(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return Re(i.geoPointValue.latitude)===Re(o.geoPointValue.latitude)&&Re(i.geoPointValue.longitude)===Re(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o,l){if("integerValue"in i&&"integerValue"in o)return Re(i.integerValue)===Re(o.integerValue);let c,h;if("doubleValue"in i&&"doubleValue"in o)c=Re(i.doubleValue),h=Re(o.doubleValue);else{if(!(l!=null&&l.Ee))return!1;c=Re(i.integerValue??i.doubleValue),h=Re(o.integerValue??o.doubleValue)}return c===h?!!(l!=null&&l.he)||Ti(c)===Ti(h):!!(l===void 0||l.Te)&&isNaN(c)&&isNaN(h)}(n,e,t);case 9:return fs(n.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>Ft(s,i,t));case 10:case 11:return function(i,o,l){const c=i.mapValue.fields||{},h=o.mapValue.fields||{};if(na(c)!==na(h))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(h[p]===void 0||!Ft(c[p],h[p],l)))return!1;return!0}(n,e,t);default:return J(52216,{left:n})}}function Ci(n,e){return(n.values||[]).find(t=>Ft(t,e))!==void 0}function xt(n,e){if(n===e)return 0;const t=qe(n),r=qe(e);if(t!==r)return fe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return fe(n.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Re(i.integerValue||i.doubleValue),c=Re(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Qh(n.timestampValue,e.timestampValue);case 4:return Qh(ps(n),ps(e));case 5:return nc(n.stringValue,e.stringValue);case 6:return function(i,o){const l=ir(i),c=ir(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const p=fe(l[h],c[h]);if(p!==0)return p}return fe(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const l=fe(Re(i.latitude),Re(o.latitude));return l!==0?l:fe(Re(i.longitude),Re(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Xh(n.arrayValue,e.arrayValue);case 10:return function(i,o){var x,S,R,B;const l=i.fields||{},c=o.fields||{},h=(x=l[Ii])==null?void 0:x.arrayValue,p=(S=c[Ii])==null?void 0:S.arrayValue,g=fe(((R=h==null?void 0:h.values)==null?void 0:R.length)||0,((B=p==null?void 0:p.values)==null?void 0:B.length)||0);return g!==0?g:Xh(h,p)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===xo.mapValue&&o===xo.mapValue)return 0;if(i===xo.mapValue)return 1;if(o===xo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},p=Object.keys(h);c.sort(),p.sort();for(let g=0;g<c.length&&g<p.length;++g){const x=nc(c[g],p[g]);if(x!==0)return x;const S=xt(l[c[g]],h[p[g]]);if(S!==0)return S}return fe(c.length,p.length)}(n.mapValue,e.mapValue);default:throw J(23264,{Pe:t})}}function Qh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return fe(n,e);const t=sr(n),r=sr(e),s=fe(t.seconds,r.seconds);return s!==0?s:fe(t.nanos,r.nanos)}function Xh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=xt(t[s],r[s]);if(i!==void 0&&i!==0)return i}return fe(t.length,r.length)}function gs(n){return rc(n)}function rc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=sr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ir(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return X.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=rc(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${rc(t.fields[o])}`;return s+"}"}(n.mapValue):J(61005,{value:n})}function Fo(n){switch(qe(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Wi(n);return e?16+Fo(e):16;case 5:return 2*n.stringValue.length;case 6:return ir(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Fo(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return jr(r.fields,(i,o)=>{s+=i.length+Fo(o)}),s}(n.mapValue);default:throw J(13486,{value:n})}}function Xt(n){return!!n&&"integerValue"in n}function Ir(n){return!!n&&"doubleValue"in n}function or(n){return Xt(n)||Ir(n)}function ws(n){return!!n&&"arrayValue"in n}function Ot(n){return!!n&&"nullValue"in n}function It(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Cr(n){return!!n&&"mapValue"in n}function sa(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[hf])==null?void 0:r.stringValue)===df}function sc(n){var e,t;return(t=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Ii])==null?void 0:t.arrayValue}function ui(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return jr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ui(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ui(n.arrayValue.values[t]);return e}return{...n}}function a3(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===o3}/**
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
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Cr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ui(t)}setAll(e){let t=Ge.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}o?r[l.lastSegment()]=ui(o):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Cr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ft(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Cr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){jr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(ui(this.value))}}function ff(n){const e=[];return jr(n.fields,(t,r)=>{const s=new Ge([t]);if(Cr(r)){const i=ff(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new jt(e)}/**
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
 */function La(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ti(e)?"-0":e}}function Uc(n){return{integerValue:""+n}}function $c(n,e,t){return Number.isInteger(e)&&(t!=null&&t.preferIntegers)||J7(e)?Uc(e):La(n,e)}/**
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
 */class Va{constructor(){this._=void 0}}function l3(n,e,t){return n instanceof ia?function(s,i){const o={fields:{[lf]:{stringValue:af},[uf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Da(i)&&(i=Wi(i)),i&&(o.fields[cf]=i),{mapValue:o}}(t,e):n instanceof Si?mf(n,e):n instanceof Ri?gf(n,e):n instanceof Pi?function(s,i){const o=pf(s,i),l=la(o)+la(s.Re);return Xt(o)&&Xt(s.Re)?Uc(l):La(s.serializer,l)}(n,e):n instanceof oa?function(s,i){return Jh(s,i,Math.min)}(n,e):n instanceof aa?function(s,i){return Jh(s,i,Math.max)}(n,e):void 0}function c3(n,e,t){return n instanceof Si?mf(n,e):n instanceof Ri?gf(n,e):t}function pf(n,e){return n instanceof Pi?or(e)?e:{integerValue:0}:null}class ia extends Va{}class Si extends Va{constructor(e){super(),this.elements=e}}function mf(n,e){const t=wf(e);for(const r of n.elements)t.some(s=>Ft(s,r))||t.push(r);return{arrayValue:{values:t}}}class Ri extends Va{constructor(e){super(),this.elements=e}}function gf(n,e){let t=wf(e);for(const r of n.elements)t=t.filter(s=>!Ft(s,r));return{arrayValue:{values:t}}}class Hc extends Va{constructor(e,t){super(),this.serializer=e,this.Re=t}}class Pi extends Hc{}class oa extends Hc{}class aa extends Hc{}function Jh(n,e,t){if(!or(e))return n.Re;const r=t(la(e),la(n.Re));return Xt(e)&&Xt(n.Re)?Uc(r):La(n.serializer,r)}function la(n){return Re(n.integerValue||n.doubleValue)}function wf(n){return ws(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function u3(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Si&&s instanceof Si||r instanceof Ri&&s instanceof Ri?fs(r.elements,s.elements,Ft):r instanceof Pi&&s instanceof Pi||r instanceof oa&&s instanceof oa||r instanceof aa&&s instanceof aa?Ft(r.Re,s.Re):r instanceof ia&&s instanceof ia}(n.transform,e.transform)}class h3{constructor(e,t){this.version=e,this.transformResults=t}}class nn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ma{}function _f(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new jc(n.key,nn.none()):new Ki(n.key,n.data,nn.none());{const t=n.data,r=kt.empty();let s=new He(Ge.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new qr(n.key,r,new jt(s.toArray()),nn.none())}}function d3(n,e,t){n instanceof Ki?function(s,i,o){const l=s.value.clone(),c=ed(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof qr?function(s,i,o){if(!Uo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=ed(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(bf(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function hi(n,e,t,r){return n instanceof Ki?function(i,o,l,c){if(!Uo(i.precondition,o))return l;const h=i.value.clone(),p=td(i.fieldTransforms,c,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof qr?function(i,o,l,c){if(!Uo(i.precondition,o))return l;const h=td(i.fieldTransforms,c,o),p=o.data;return p.setAll(bf(i)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,o,l){return Uo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function f3(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=pf(r.transform,s||null);i!=null&&(t===null&&(t=kt.empty()),t.set(r.field,i))}return t||null}function Zh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&fs(r,s,(i,o)=>u3(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ki extends Ma{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qr extends Ma{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function bf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ed(n,e,t){const r=new Map;G(n.length===t.length,32656,{Ie:t.length,Ae:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,c3(o,l,t[s]))}return r}function td(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,l3(i,o,e))}return r}class jc extends Ma{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class p3 extends Ma{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ca{constructor(e,t){this.position=e,this.inclusive=t}}function nd(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),t.key):r=xt(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function rd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ft(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class yf{}class We extends yf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new g3(e,t,r):t==="array-contains"?new b3(e,r):t==="in"?new y3(e,r):t==="not-in"?new v3(e,r):t==="array-contains-any"?new E3(e,r):new We(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new w3(e,r):new _3(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(xt(t,this.value)):t!==null&&qe(this.value)===qe(t)&&this.matchesComparison(xt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class an extends yf{constructor(e,t){super(),this.filters=e,this.op=t,this.Ve=null}static create(e,t){return new an(e,t)}matches(e){return vf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Ve!==null||(this.Ve=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Ve}getFilters(){return Object.assign([],this.filters)}}function vf(n){return n.op==="and"}function Ef(n){return m3(n)&&vf(n)}function m3(n){for(const e of n.filters)if(e instanceof an)return!1;return!0}function ic(n){if(n instanceof We)return n.field.canonicalString()+n.op.toString()+gs(n.value);if(Ef(n))return n.filters.map(e=>ic(e)).join(",");{const e=n.filters.map(t=>ic(t)).join(",");return`${n.op}(${e})`}}function Af(n,e){return n instanceof We?function(r,s){return s instanceof We&&r.op===s.op&&r.field.isEqual(s.field)&&Ft(r.value,s.value)}(n,e):n instanceof an?function(r,s){return s instanceof an&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Af(o,s.filters[l]),!0):!1}(n,e):void J(19439)}function Tf(n){return n instanceof We?function(t){return`${t.field.canonicalString()} ${t.op} ${gs(t.value)}`}(n):n instanceof an?function(t){return t.op.toString()+" {"+t.getFilters().map(Tf).join(" ,")+"}"}(n):"Filter"}class g3 extends We{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class w3 extends We{constructor(e,t){super(e,"in",t),this.keys=xf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class _3 extends We{constructor(e,t){super(e,"not-in",t),this.keys=xf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function xf(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>X.fromName(r.referenceValue))}class b3 extends We{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ws(t)&&Ci(t.arrayValue,this.value)}}class y3 extends We{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ci(this.value.arrayValue,t)}}class v3 extends We{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ci(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ci(this.value.arrayValue,t)}}class E3 extends We{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ws(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ci(this.value.arrayValue,r))}}/**
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
 */class ua{constructor(e,t="asc"){this.field=e,this.dir=t}}function A3(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class lt{constructor(e,t,r,s,i,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new lt(e,0,se.min(),se.min(),se.min(),kt.empty(),0)}static newFoundDocument(e,t,r,s){return new lt(e,1,t,se.min(),r,s,0)}static newNoDocument(e,t){return new lt(e,2,t,se.min(),se.min(),kt.empty(),0)}static newUnknownDocument(e,t){return new lt(e,3,t,se.min(),se.min(),kt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class T3{constructor(e,t=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.de=null}}function sd(n,e=null,t=[],r=[],s=null,i=null,o=null){return new T3(n,e,t,r,s,i,o)}function If(n){const e=oe(n);if(e.de===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ic(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Na(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>gs(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>gs(r)).join(",")),e.de=t}return e.de}function Cf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!A3(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Af(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!rd(n.startAt,e.startAt)&&rd(n.endAt,e.endAt)}function xr(n){return!!n.isCorePipeline}function Sf(n){return!!n.path&&X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ba{constructor(e,t=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.fe=null,this.me=null,this.pe=null,this.startAt,this.endAt}}function x3(n,e,t,r,s,i,o,l){return new Ba(n,e,t,r,s,i,o,l)}function qc(n){return new Ba(n)}function id(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function I3(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function C3(n){return n.collectionGroup!==null}function di(n){const e=oe(n);if(e.fe===null){e.fe=[];const t=new Set;for(const i of e.explicitOrderBy)e.fe.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new He(Ge.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.fe.push(new ua(i,r))}),t.has(Ge.keyField().canonicalString())||e.fe.push(new ua(Ge.keyField(),r))}return e.fe}function rn(n){const e=oe(n);return e.me||(e.me=S3(e,di(n))),e.me}function S3(n,e){if(n.limitType==="F")return sd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ua(s.field,i)});const t=n.endAt?new ca(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ca(n.startAt.position,n.startAt.inclusive):null;return sd(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function oc(n,e,t){return new Ba(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function R3(n,e){return Cf(rn(n),rn(e))&&n.limitType===e.limitType}function fi(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Tf(s)).join(", ")}]`),Na(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>gs(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>gs(s)).join(",")),`Target(${r})`}(rn(n))}; limitType=${n.limitType})`}function Fa(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of di(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=nd(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,di(r),s)||r.endAt&&!function(o,l,c){const h=nd(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,di(r),s))}(n,e)}function zc(n){return(e,t)=>{let r=!1;for(const s of di(n)){const i=P3(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function P3(n,e,t){const r=n.field.isKeyField()?X.comparator(e.key,t.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?xt(c,h):J(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return J(19790,{direction:n.dir})}}/**
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
 */class k3{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Be,ge;function O3(n){switch(n){case V.OK:return J(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return J(15467,{code:n})}}function Rf(n){if(n===void 0)return Tn("GRPC error has no .code"),V.UNKNOWN;switch(n){case Be.OK:return V.OK;case Be.CANCELLED:return V.CANCELLED;case Be.UNKNOWN:return V.UNKNOWN;case Be.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Be.INTERNAL:return V.INTERNAL;case Be.UNAVAILABLE:return V.UNAVAILABLE;case Be.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Be.NOT_FOUND:return V.NOT_FOUND;case Be.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Be.ABORTED:return V.ABORTED;case Be.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Be.DATA_LOSS:return V.DATA_LOSS;default:return J(39323,{code:n})}}(ge=Be||(Be={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class zr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){jr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return sf(this.inner)}size(){return this.innerSize}}/**
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
 */const N3=new Ce(X.comparator);function vt(){return N3}const Pf=new Ce(X.comparator);function ns(...n){let e=Pf;for(const t of n)e=e.insert(t.key,t);return e}function kf(n){let e=Pf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Hn(){return pi()}function Of(){return pi()}function pi(){return new zr(n=>n.toString(),(n,e)=>n.isEqual(e))}const D3=new Ce(X.comparator),L3=new He(X.comparator);function he(...n){let e=L3;for(const t of n)e=e.add(t);return e}const V3=new He(fe);function M3(){return V3}/**
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
 */function B3(){return new TextEncoder}/**
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
 */const F3=new Yn([4294967295,4294967295],0);function od(n){const e=B3().encode(n),t=new W2;return t.update(e),new Uint8Array(t.digest())}function ad(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Yn([t,r],0),new Yn([s,i],0)]}class Gc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ri(`Invalid padding: ${t}`);if(r<0)throw new ri(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ri(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ri(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.ye=Yn.fromNumber(this.ge)}we(e,t,r){let s=e.add(t.multiply(Yn.fromNumber(r)));return s.compare(F3)===1&&(s=new Yn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=od(e),[r,s]=ad(t);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Gc(i,s,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const t=od(e),[r,s]=ad(t);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.ve(o)}}ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ri extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Yi{constructor(e,t,r,s,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Qi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Yi(se.min(),s,new Ce(fe),vt(),vt(),he())}}class Qi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Qi(r,t,he(),he(),he())}}/**
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
 */class $o{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Nf{constructor(e,t){this.targetId=e,this.xe=t}}class Df{constructor(e,t,r=je.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class ld{constructor(e){this.targetId=e,this.Ce=0,this.Fe=cd(),this.Oe=je.EMPTY_BYTE_STRING,this.Me=!1,this.Ne=!0}get current(){return this.Me}get resumeToken(){return this.Oe}get Le(){return this.Ce!==0}get Be(){return this.Ne}Ue(e){e.approximateByteSize()>0&&(this.Ne=!0,this.Oe=e)}ke(){let e=he(),t=he(),r=he();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:J(38017,{changeType:i})}}),new Qi(this.Oe,this.Me,e,t,r)}qe(){this.Ne=!1,this.Fe=cd()}$e(e,t){this.Ne=!0,this.Fe=this.Fe.insert(e,t)}Ke(e){this.Ne=!0,this.Fe=this.Fe.remove(e)}We(){this.Ce+=1}Qe(){this.Ce-=1,G(this.Ce>=0,3241,{Ce:this.Ce,targetId:this.targetId})}Ge(){this.Ne=!0,this.Me=!0}}const Xs="WatchChangeAggregator";class U3{constructor(e){this.ze=e,this.je=new Map,this.He=vt(),this.Je=Io(),this.Ye=vt(),this.Ze=Io(),this.Xe=new Ce(fe)}et(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.tt(t,e.De):this.nt(t,e.key,e.De);for(const t of e.removedTargetIds)this.nt(t,e.key,e.De)}rt(e){this.forEachTarget(e,t=>{const r=this.je.get(t);if(r)switch(e.state){case 0:this.it(t)&&r.Ue(e.resumeToken);break;case 1:r.Qe(),r.Le||r.qe(),r.Ue(e.resumeToken);break;case 2:r.Qe(),r.Le||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.Ue(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.Ue(e.resumeToken));break;default:J(56790,{state:e.state})}else j(Xs,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,s)=>{this.it(s)&&t(s)})}_t(e){var t;return xr(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:Sf(e)}ot(e){const t=e.targetId,r=e.xe.count,s=this.ut(t);if(s){const i=s.target;if(this._t(i))if(r===0){const o=new X(xr(i)?ve.fromString(i.getPipelineDocuments()[0]):i.path);this.nt(t,o,lt.newNoDocument(o,se.min()))}else G(r===1,20013,"Single document existence filter with count: "+r);else{const o=this.ct(t);if(o!==r){const l=this.lt(e),c=l?this.Et(l,e,o):1;if(c!==0){this.st(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Xe=this.Xe.insert(t,h)}}}}}lt(e){const t=e.xe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,l;try{o=ir(r).toUint8Array()}catch(c){if(c instanceof of)return zt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Gc(o,s,i)}catch(c){return zt(c instanceof ri?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}Et(e,t,r){return t.xe.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.ze.Tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.nt(t,i,null),s++)}),s}Rt(e){const t=new Map;this.je.forEach((i,o)=>{const l=this.ut(o);if(l){if(i.current&&this._t(l.target)){const c=xr(l.target)?ve.fromString(l.target.getPipelineDocuments()[0]):l.target.path,h=new X(c);this.It(h).has(o)||this.At(o,h)||this.nt(o,h,lt.newNoDocument(h,e))}i.Be&&(t.set(o,i.ke()),i.qe())}});let r=he();this.Ze.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.ut(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e)),this.Ye.forEach((i,o)=>o.setReadTime(e));const s=new Yi(e,t,this.Xe,this.He,this.Ye,r);return this.He=vt(),this.Je=Io(),this.Ye=vt(),this.Ze=Io(),this.Xe=new Ce(fe),s}tt(e,t){const r=this.je.get(e);if(!r||!this.it(e))return void j(Xs,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.At(e,t.key)?2:0;r.$e(t.key,s),xr(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t.key,t):this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.Ze=this.Ze.insert(t.key,this.Vt(t.key).add(e))}nt(e,t,r){const s=this.je.get(e);s&&this.it(e)?(this.At(e,t)?s.$e(t,1):s.Ke(t),this.Ze=this.Ze.insert(t,this.Vt(t).delete(e)),this.Ze=this.Ze.insert(t,this.Vt(t).add(e)),r&&(xr(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t,r):this.He=this.He.insert(t,r))):j(Xs,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.je.delete(e)}ct(e){const t=this.je.get(e);if(!t)return 0;const r=t.ke();return this.ze.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}We(e){let t=this.je.get(e);t||(j(Xs,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new ld(e),this.je.set(e,t)),t.We()}Vt(e){let t=this.Ze.get(e);return t||(t=new He(fe),this.Ze=this.Ze.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new He(fe),this.Je=this.Je.insert(e,t)),t}it(e){const t=this.ut(e)!==null;return t||j(Xs,"Detected inactive target",e),t}ut(e){const t=this.je.get(e);return t===void 0||t.Le?null:this.ze.dt(e)}st(e){this.je.set(e,new ld(e)),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.nt(e,t,null)})}At(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Io(){return new Ce(X.comparator)}function cd(){return new Ce(X.comparator)}const $3={asc:"ASCENDING",desc:"DESCENDING"},H3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},j3={and:"AND",or:"OR"};class q3{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ac(n,e){return n.useProto3Json||Na(e)?e:{value:e}}function ha(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wc(n){const e=sr(n);return new Ie(e.seconds,e.nanos)}function Lf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ho(n,e){return ha(n,e.toTimestamp())}function sn(n){return G(!!n,49232),se.fromTimestamp(Wc(n))}function Kc(n,e){return lc(n,e).canonicalString()}function lc(n,e){const t=function(s){return new ve(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Vf(n){const e=ve.fromString(n);return G($f(e),10190,{key:e.toString()}),e}function da(n,e){return Kc(n.databaseId,e.path)}function Dl(n,e){const t=Vf(e);if(t.get(1)!==n.databaseId.projectId)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new X(Bf(t))}function Mf(n,e){return Kc(n.databaseId,e)}function z3(n){const e=Vf(n);return e.length===4?ve.emptyPath():Bf(e)}function cc(n){return new ve(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Bf(n){return G(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ud(n,e,t){return{name:da(n,e),fields:t.value.mapValue.fields}}function G3(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:J(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,p){return h.useProto3Json?(G(p===void 0||typeof p=="string",58123),je.fromBase64String(p||"")):(G(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),je.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const p=h.code===void 0?V.UNKNOWN:Rf(h.code);return new z(p,h.message||"")}(o);t=new Df(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Dl(n,r.document.name),i=sn(r.document.updateTime),o=r.document.createTime?sn(r.document.createTime):se.min(),l=new kt({mapValue:{fields:r.document.fields}}),c=lt.newFoundDocument(s,i,o,l),h=r.targetIds||[],p=r.removedTargetIds||[];t=new $o(h,p,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Dl(n,r.document),i=r.readTime?sn(r.readTime):se.min(),o=lt.newNoDocument(s,i),l=r.removedTargetIds||[];t=new $o([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Dl(n,r.document),i=r.removedTargetIds||[];t=new $o([],i,s,null)}else{if(!("filter"in e))return J(11601,{ft:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new k3(s,i),l=r.targetId;t=new Nf(l,o)}}return t}function W3(n,e){let t;if(e instanceof Ki)t={update:ud(n,e.key,e.value)};else if(e instanceof jc)t={delete:da(n,e.key)};else if(e instanceof qr)t={update:ud(n,e.key,e.data),updateMask:r8(e.fieldMask)};else{if(!(e instanceof p3))return J(16599,{gt:e.type});t={verify:da(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ia)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Si)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ri)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Pi)return{fieldPath:o.field.canonicalString(),increment:l.Re};if(l instanceof oa)return{fieldPath:o.field.canonicalString(),minimum:l.Re};if(l instanceof aa)return{fieldPath:o.field.canonicalString(),maximum:l.Re};throw J(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Ho(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J(27497)}(n,e.precondition)),t}function K3(n,e){return n&&n.length>0?(G(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?sn(s.updateTime):sn(i);return o.isEqual(se.min())&&(o=sn(i)),new h3(o,s.transformResults||[])}(t,e))):[]}function Y3(n,e){return{documents:[Mf(n,e.path)]}}function Q3(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Mf(n,s);const i=function(h){if(h.length!==0)return Uf(an.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(p=>function(x){return{field:rs(x.field),direction:e8(x.dir)}}(p))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=ac(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{yt:t,parent:s}}function X3(n){let e=z3(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){G(r===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(g){const x=Ff(g);return x instanceof an&&Ef(x)?x.getFilters():[x]}(t.where));let o=[];t.orderBy&&(o=function(g){return g.map(x=>function(R){return new ua(ss(R.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(x))}(t.orderBy));let l=null;t.limit&&(l=function(g){let x;return x=typeof g=="object"?g.value:g,Na(x)?null:x}(t.limit));let c=null;t.startAt&&(c=function(g){const x=!!g.before,S=g.values||[];return new ca(S,x)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const x=!g.before,S=g.values||[];return new ca(S,x)}(t.endAt)),x3(e,s,o,i,l,"F",c,h)}function J3(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Z3(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(n))}}}}function Ff(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ss(t.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ss(t.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ss(t.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ss(t.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}}(n):n.fieldFilter!==void 0?function(t){return We.create(ss(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return an.create(t.compositeFilter.filters.map(r=>Ff(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J(1026)}}(t.compositeFilter.op))}(n):J(30097,{filter:n})}function e8(n){return $3[n]}function t8(n){return H3[n]}function n8(n){return j3[n]}function rs(n){return{fieldPath:n.canonicalString()}}function ss(n){return Ge.fromServerFormat(n.fieldPath)}function Uf(n){return n instanceof We?function(t){if(t.op==="=="){if(It(t.value))return{unaryFilter:{field:rs(t.field),op:"IS_NAN"}};if(Ot(t.value))return{unaryFilter:{field:rs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(It(t.value))return{unaryFilter:{field:rs(t.field),op:"IS_NOT_NAN"}};if(Ot(t.value))return{unaryFilter:{field:rs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rs(t.field),op:t8(t.op),value:t.value}}}(n):n instanceof an?function(t){const r=t.getFilters().map(s=>Uf(s));return r.length===1?r[0]:{compositeFilter:{op:n8(t.op),filters:r}}}(n):J(54877,{filter:n})}function r8(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function $f(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Hf(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function ki(n,e){const t={fields:{}};return e.forEach((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=r._toProto(n)}),{mapValue:t}}function jf(n){return{stringValue:n}}/**
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
 */function Ua(n){return new q3(n,!0)}/**
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
 */class Bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bt(je.fromBase64String(e))}catch(t){throw new z(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Bt(je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Gi(e,Bt._jsonSchema))return Bt.fromBase64String(e.bytes)}}Bt._jsonSchemaVersion="firestore/bytes/1.0",Bt._jsonSchema={type:Ue("string",Bt._jsonSchemaVersion),bytes:Ue("string")};/**
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
 */class Yc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function s8(){return new Yc(Qt)}/**
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
 */class qf{constructor(e){this._methodName=e}}/**
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
 */class on{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:on._jsonSchemaVersion}}static fromJSON(e){if(Gi(e,on._jsonSchema))return new on(e.latitude,e.longitude)}}function zf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */on._jsonSchemaVersion="firestore/geoPoint/1.0",on._jsonSchema={type:Ue("string",on._jsonSchemaVersion),latitude:Ue("number"),longitude:Ue("number")};class i8{bt(e){}shutdown(){}}/**
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
 */const hd="ConnectivityMonitor";class dd{constructor(){this.vt=()=>this.St(),this.Dt=()=>this.xt(),this.Ct=[],this.Ft()}bt(e){this.Ct.push(e)}shutdown(){window.removeEventListener("online",this.vt),window.removeEventListener("offline",this.Dt)}Ft(){window.addEventListener("online",this.vt),window.addEventListener("offline",this.Dt)}St(){j(hd,"Network connectivity changed: AVAILABLE");for(const e of this.Ct)e(0)}xt(){j(hd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Ct)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Co=null;function uc(){return Co===null?Co=function(){return 268435456+Math.round(2147483648*Math.random())}():Co++,"0x"+Co.toString(16)}/**
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
 */const Ll="RestConnection",o8={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class a8{get Ot(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Mt=t+"://"+e.host,this.Nt=`projects/${r}/databases/${s}`,this.Lt=this.databaseId.database===ra?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Bt(e,t,r,s,i){const o=uc(),l=this.Ut(e,t.toUriEncodedString());j(Ll,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Nt,"x-goog-request-params":this.Lt};this.kt(c,s,i);const{host:h}=new URL(l),p=Ur(h);return this.qt(e,l,c,r,p).then(g=>(j(Ll,`Received RPC '${e}' ${o}: `,g),g),g=>{throw zt(Ll,`RPC '${e}' ${o} failed with error: `,g,"url: ",l,"request:",r),g})}$t(e,t,r,s,i,o){return this.Bt(e,t,r,s,i)}kt(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Es}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Ut(e,t){const r=o8[e];let s=`${this.Mt}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class l8{constructor(e){this.Kt=e.Kt,this.Wt=e.Wt}Qt(e){this.Gt=e}zt(e){this.jt=e}Ht(e){this.Jt=e}onMessage(e){this.Yt=e}close(){this.Wt()}send(e){this.Kt(e)}Zt(){this.Gt()}Xt(){this.jt()}en(e){this.Jt(e)}tn(e){this.Yt(e)}}/**
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
 */const st="WebChannelConnection",Js=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class us extends a8{constructor(e){super(e),this.nn=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static rn(){if(!us.sn){const e=X2();Js(e,Q2.STAT_EVENT,t=>{t.stat===ec.PROXY?j(st,"STAT_EVENT: detected buffering proxy"):t.stat===ec.NOPROXY&&j(st,"STAT_EVENT: detected no buffering proxy")}),us.sn=!0}}qt(e,t,r,s,i){const o=uc();return new Promise((l,c)=>{const h=new K2;h.setWithCredentials(!0),h.listenOnce(Y2.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Bo.NO_ERROR:const g=h.getResponseJson();j(st,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),l(g);break;case Bo.TIMEOUT:j(st,`RPC '${e}' ${o} timed out`),c(new z(V.DEADLINE_EXCEEDED,"Request time out"));break;case Bo.HTTP_ERROR:const x=h.getStatus();if(j(st,`RPC '${e}' ${o} failed with status:`,x,"response text:",h.getResponseText()),x>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const R=S==null?void 0:S.error;if(R&&R.status&&R.message){const B=function(Q){const re=Q.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(re)>=0?re:V.UNKNOWN}(R.status);c(new z(B,R.message))}else c(new z(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new z(V.UNAVAILABLE,"Connection failed."));break;default:J(9055,{_n:e,streamId:o,an:h.getLastErrorCode(),un:h.getLastError()})}}finally{j(st,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(s);j(st,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",p,r,15)})}cn(e,t,r){const s=uc(),i=[this.Mt,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.kt(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const h=i.join("");j(st,`Creating RPC '${e}' stream ${s}: ${h}`,l);const p=o.createWebChannel(h,l);this.En(p);let g=!1,x=!1;const S=new l8({Kt:R=>{x?j(st,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(g||(j(st,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),j(st,`RPC '${e}' stream ${s} sending:`,R),p.send(R))},Wt:()=>p.close()});return Js(p,ni.EventType.OPEN,()=>{x||(j(st,`RPC '${e}' stream ${s} transport opened.`),S.Zt())}),Js(p,ni.EventType.CLOSE,()=>{x||(x=!0,j(st,`RPC '${e}' stream ${s} transport closed`),S.en(),this.hn(p))}),Js(p,ni.EventType.ERROR,R=>{x||(x=!0,zt(st,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),S.en(new z(V.UNAVAILABLE,"The operation could not be completed")))}),Js(p,ni.EventType.MESSAGE,R=>{var B;if(!x){const U=R.data[0];G(!!U,16349);const Q=U,re=(Q==null?void 0:Q.error)||((B=Q[0])==null?void 0:B.error);if(re){j(st,`RPC '${e}' stream ${s} received error:`,re);const ue=re.status;let me=function(A){const y=Be[A];if(y!==void 0)return Rf(y)}(ue),F=re.message;ue==="NOT_FOUND"&&F.includes("database")&&F.includes("does not exist")&&F.includes(this.databaseId.database)&&zt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),me===void 0&&(me=V.INTERNAL,F="Unknown error status: "+ue+" with message "+re.message),x=!0,S.en(new z(me,F)),p.close()}else j(st,`RPC '${e}' stream ${s} received:`,U),S.tn(U)}}),us.rn(),setTimeout(()=>{S.Xt()},0),S}terminate(){this.nn.forEach(e=>e.close()),this.nn=[]}En(e){this.nn.push(e)}hn(e){this.nn=this.nn.filter(t=>t===e)}kt(e,t,r){super.kt(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return J2()}}/**
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
 */function c8(n){return new us(n)}us.sn=!1;class Gf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Tn=e,this.timerId=t,this.Pn=r,this.Rn=s,this.In=i,this.An=0,this.Vn=null,this.dn=Date.now(),this.reset()}reset(){this.An=0}fn(){this.An=this.In}mn(e){this.cancel();const t=Math.floor(this.An+this.pn()),r=Math.max(0,Date.now()-this.dn),s=Math.max(0,t-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.An} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Vn=this.Tn.enqueueAfterDelay(this.timerId,s,()=>(this.dn=Date.now(),e())),this.An*=this.Rn,this.An<this.Pn&&(this.An=this.Pn),this.An>this.In&&(this.An=this.In)}gn(){this.Vn!==null&&(this.Vn.skipDelay(),this.Vn=null)}cancel(){this.Vn!==null&&(this.Vn.cancel(),this.Vn=null)}pn(){return(Math.random()-.5)*this.An}}/**
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
 */const fd="PersistentStream";class Wf{constructor(e,t,r,s,i,o,l,c){this.Tn=e,this.yn=r,this.wn=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.bn=0,this.vn=null,this.Sn=null,this.stream=null,this.Dn=0,this.xn=new Gf(e,t)}Cn(){return this.state===1||this.state===5||this.Fn()}Fn(){return this.state===2||this.state===3}start(){this.Dn=0,this.state!==4?this.auth():this.On()}async stop(){this.Cn()&&await this.close(0)}Mn(){this.state=0,this.xn.reset()}Nn(){this.Fn()&&this.vn===null&&(this.vn=this.Tn.enqueueAfterDelay(this.yn,6e4,()=>this.Ln()))}Bn(e){this.Un(),this.stream.send(e)}async Ln(){if(this.Fn())return this.close(0)}Un(){this.vn&&(this.vn.cancel(),this.vn=null)}kn(){this.Sn&&(this.Sn.cancel(),this.Sn=null)}async close(e,t){this.Un(),this.kn(),this.xn.cancel(),this.bn++,e!==4?this.xn.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Tn(t.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.xn.fn()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ht(t)}qn(){}auth(){this.state=1;const e=this.$n(this.bn),t=this.bn;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.bn===t&&this.Kn(r,s)},r=>{e(()=>{const s=new z(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Wn(s)})})}Kn(e,t){const r=this.$n(this.bn);this.stream=this.Qn(e,t),this.stream.Qt(()=>{r(()=>this.listener.Qt())}),this.stream.zt(()=>{r(()=>(this.state=2,this.Sn=this.Tn.enqueueAfterDelay(this.wn,1e4,()=>(this.Fn()&&(this.state=3),Promise.resolve())),this.listener.zt()))}),this.stream.Ht(s=>{r(()=>this.Wn(s))}),this.stream.onMessage(s=>{r(()=>++this.Dn==1?this.Gn(s):this.onNext(s))})}On(){this.state=5,this.xn.mn(async()=>{this.state=0,this.start()})}Wn(e){return j(fd,`close with error: ${e}`),this.stream=null,this.close(4,e)}$n(e){return t=>{this.Tn.enqueueAndForget(()=>this.bn===e?t():(j(fd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class u8 extends Wf{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}Qn(e,t){return this.connection.cn("Listen",e,t)}Gn(e){return this.onNext(e)}onNext(e){this.xn.reset();const t=G3(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?sn(o.readTime):se.min()}(e);return this.listener.zn(t,r)}jn(e){const t={};t.database=cc(this.serializer),t.addTarget=function(i,o){let l;const c=o.target;if(l=xr(c)?{pipelineQuery:Z3(i,c)}:Sf(c)?{documents:Y3(i,c)}:{query:Q3(i,c).yt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Lf(i,o.resumeToken);const h=ac(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=ha(i,o.snapshotVersion.toTimestamp());const h=ac(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=J3(this.serializer,e);r&&(t.labels=r),this.Bn(t)}Hn(e){const t={};t.database=cc(this.serializer),t.removeTarget=e,this.Bn(t)}}class h8 extends Wf{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Jn(){return this.Dn>0}start(){this.lastStreamToken=void 0,super.start()}qn(){this.Jn&&this.Yn([])}Qn(e,t){return this.connection.cn("Write",e,t)}Gn(e){return G(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0,55816),this.listener.Zn()}onNext(e){G(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.xn.reset();const t=K3(e.writeResults,e.commitTime),r=sn(e.commitTime);return this.listener.Xn(r,t)}er(){const e={};e.database=cc(this.serializer),this.Bn(e)}Yn(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>W3(this.serializer,r))};this.Bn(t)}}/**
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
 */class d8{}class f8 extends d8{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.tr=!1}nr(){if(this.tr)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.")}Bt(e,t,r,s){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Bt(e,lc(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(V.UNKNOWN,i.toString())})}$t(e,t,r,s,i){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.$t(e,lc(t,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(V.UNKNOWN,o.toString())})}terminate(){this.tr=!0,this.connection.terminate()}}function p8(n,e,t,r){return new f8(n,e,t,r)}/**
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
 */const m8="ComponentProvider",pd=new Map;function g8(n,e,t,r,s){return new s3(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,zf(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const md={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Kf=41943040;class bt{static withCacheSize(e){return new bt(e,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(Kf,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
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
 */const gd="LruGarbageCollector",w8=1048576;function wd([n,e],[t,r]){const s=fe(n,t);return s===0?fe(e,r):s}class _8{constructor(e){this.rr=e,this.buffer=new He(wd),this.ir=0}sr(){return++this.ir}_r(e){const t=[e,this.sr()];if(this.buffer.size<this.rr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();wd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class b8{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.ur(6e4)}stop(){this.ar&&(this.ar.cancel(),this.ar=null)}get started(){return this.ar!==null}ur(e){j(gd,`Garbage collection scheduled in ${e}ms`),this.ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ts(t)?j(gd,"Ignoring IndexedDB error during garbage collection: ",t):await As(t)}await this.ur(3e5)})}}class y8{constructor(e,t){this.cr=e,this.params=t}calculateTargetCount(e,t){return this.cr.lr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return L.resolve(Oa.ce);const r=new _8(t);return this.cr.forEachTarget(e,s=>r._r(s.sequenceNumber)).next(()=>this.cr.Er(e,s=>r._r(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.cr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.cr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(md)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),md):this.hr(e,t))}getCacheSize(e){return this.cr.getCacheSize(e)}hr(e,t){let r,s,i,o,l,c,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,t))).next(g=>(i=g,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),ts()<=pe.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${g} documents in `+(h-c)+`ms
Total Duration: ${h-p}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function v8(n,e){return new y8(n,e)}/**
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
 */const Yf="firestore.googleapis.com",_d=!0;class bd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Yf,this.ssl=_d}else this.host=e.host,this.ssl=e.ssl??_d;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Kf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<w8)throw new z(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}z7("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zf(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $a{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new L7;switch(r.type){case"firstParty":return new F7(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=pd.get(t);r&&(j(m8,"Removing Datastore"),pd.delete(t),r.terminate())}(this),Promise.resolve()}}function E8(n,e,t,r={}){var h;n=nr(n,$a);const s=Ur(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&Tc(`https://${l}`),i.host!==Yf&&i.host!==l&&zt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!Or(c,o)&&(n._setSettings(c),r.mockUserToken)){let p,g;if(typeof r.mockUserToken=="string")p=r.mockUserToken,g=at.MOCK_USER;else{p=o2(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const x=r.mockUserToken.sub||r.mockUserToken.user_id;if(!x)throw new z(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new at(x)}n._authCredentials=new V7(new tf(p,g))}}/**
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
 */class Ha{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ha(this.firestore,e,this._query)}}class $e{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}toJSON(){return{type:$e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Gi(t,$e._jsonSchema))return new $e(e,r||null,new X(ve.fromString(t.referencePath)))}}$e._jsonSchemaVersion="firestore/documentReference/1.0",$e._jsonSchema={type:Ue("string",$e._jsonSchemaVersion),referencePath:Ue("string")};class Qn extends Ha{constructor(e,t,r){super(e,t,qc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new X(e))}withConverter(e){return new Qn(this.firestore,e,this._path)}}function Vl(n,e,...t){if(n=Ye(n),nf("collection","path",e),n instanceof $a){const r=ve.fromString(e,...t);return zh(r),new Qn(n,null,r)}{if(!(n instanceof $e||n instanceof Qn))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ve.fromString(e,...t));return zh(r),new Qn(n.firestore,null,r)}}function bn(n,e,...t){if(n=Ye(n),arguments.length===1&&(e=Mc.newId()),nf("doc","path",e),n instanceof $a){const r=ve.fromString(e,...t);return qh(r),new $e(n,null,new X(r))}{if(!(n instanceof $e||n instanceof Qn))throw new z(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ve.fromString(e,...t));return qh(r),new $e(n.firestore,n instanceof Qn?n.converter:null,new X(r))}}/**
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
 */class Et{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Et._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Gi(e,Et._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Et(e.vectorValues);throw new z(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Et._jsonSchemaVersion="firestore/vectorValue/1.0",Et._jsonSchema={type:Ue("string",Et._jsonSchemaVersion),vectorValues:Ue("object")};/**
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
 */const A8=/^__.*__$/;class T8{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new qr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ki(e,this.data,t,this.fieldTransforms)}}function Qf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J(40011,{dataSource:n})}}class Qc{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Qc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return fa(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Qf(this.dataSource)&&A8.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class x8{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ua(e)}createContext(e,t,r,s=!1){return new Qc({dataSource:e,methodName:t,targetDoc:r,path:Ge.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function I8(n){const e=n._freezeSettings(),t=Ua(n._databaseId);return new x8(n._databaseId,!!e.ignoreUndefinedProperties,t)}function C8(n,e,t,r,s,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);Zf("Data must be an object, but it was:",o,r);const l=Xf(r,o);let c,h;if(i.merge)c=new jt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const g of i.mergeFields){const x=ja(e,g,t);if(!o.contains(x))throw new z(V.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);P8(p,x)||p.push(x)}c=new jt(p),h=o.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,h=o.fieldTransforms;return new T8(new kt(l),c,h)}function Oi(n,e,t){if(Jf(n=Ye(n)))return Zf("Unsupported field value:",e,n),Xf(n,e);if(n instanceof qf)return function(s,i){if(!Qf(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){const o=[];let l=0;for(const c of s){let h=Oi(c,i.childContextForArray(l));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),l++}return{arrayValue:{values:o}}}(n,e)}return function(s,i,o){if((s=Ye(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return $c(i.serializer,s,o);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Ie.fromDate(s);return{timestampValue:ha(i.serializer,l)}}if(s instanceof Ie){const l=new Ie(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ha(i.serializer,l)}}if(s instanceof on)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Bt)return{bytesValue:Lf(i.serializer,s._byteString)};if(s instanceof $e){const l=i.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw i.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Kc(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Et)return function(c,h){const p=c instanceof Et?c.toArray():c;return{mapValue:{fields:{[hf]:{stringValue:df},[Ii]:{arrayValue:{values:p.map(x=>{if(typeof x!="number")throw h.createError("VectorValues must only contain numeric values.");return La(h.serializer,x)})}}}}}}(s,i);if(Hf(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Bc(s)}`)}(n,e,t)}function Xf(n,e){const t={};return sf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jr(n,(r,s)=>{const i=Oi(s,e.childContextForField(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Jf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ie||n instanceof on||n instanceof Bt||n instanceof $e||n instanceof qf||n instanceof Et||Hf(n))}function Zf(n,e,t){if(!Jf(t)||!zi(t)){const r=Bc(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function ja(n,e,t){if((e=Ye(e))instanceof Yc)return e._internalPath;if(typeof e=="string")return R8(n,e);throw fa("Field path arguments must be of type string or ",n,!1,void 0,t)}const S8=new RegExp("[~\\*/\\[\\]]");function R8(n,e,t){if(e.search(S8)>=0)throw fa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Yc(...e.split("."))._internalPath}catch{throw fa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function fa(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new z(V.INVALID_ARGUMENT,l+n+c)}function P8(n,e){return n.some(t=>t.isEqual(e))}function e0(n){return typeof n._readUserData=="function"}/**
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
 */class ht{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=kt.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const o=e[s];let l;i.nestedOptions&&zi(o)?l={mapValue:{fields:new ht(i.nestedOptions).getOptionsProto(t,o)}}:o&&(l=Oi(o,t)??void 0),l&&r.set(Ge.fromServerFormat(i.serverName),l)}}return r}getOptionsProto(e,t,r){const s=this._getKnownOptions(t,e);if(r){const i=new Map(n3(r,(o,l)=>[Ge.fromServerFormat(l),o!==void 0?Oi(o,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
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
 */function k8(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!zi(t.fields))}(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(n.pipelineValue)))}function O8(n){return new Et(n)}/**
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
 */function $(n){let e;return n instanceof Gr?n:(e=zi(n)?M8(n):n instanceof Array?B8(n):t0(n,void 0),e)}function Ml(n){if(n instanceof Gr)return n;if(n instanceof Et)return Ni(n);if(Array.isArray(n))return Ni(O8(n));throw new Error("Unsupported value: "+typeof n)}function Xc(n){return Z7(n)?jo(n):$(n)}class Gr{constructor(){this._protoValueType="ProtoValue"}add(e){return new N("add",[this,$(e)],"add")}asBoolean(){if(this instanceof ar)return this;if(this instanceof Is)return new r0(this);if(this instanceof xs)return new V8(this);if(this instanceof N)return new n0(this);throw new z("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new N("subtract",[this,$(e)],"subtract")}multiply(e){return new N("multiply",[this,$(e)],"multiply")}divide(e){return new N("divide",[this,$(e)],"divide")}mod(e){return new N("mod",[this,$(e)],"mod")}equal(e){return new N("equal",[this,$(e)],"equal").asBoolean()}notEqual(e){return new N("not_equal",[this,$(e)],"notEqual").asBoolean()}lessThan(e){return new N("less_than",[this,$(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new N("less_than_or_equal",[this,$(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new N("greater_than",[this,$(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new N("greater_than_or_equal",[this,$(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map(s=>$(s));return new N("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new N("array_contains",[this,$(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new si(e.map($),"arrayContainsAll"):e;return new N("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new si(e.map($),"arrayContainsAny"):e;return new N("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new N("array_reverse",[this])}arrayLength(){return new N("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new si(e.map($),"equalAny"):e;return new N("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new si(e.map($),"notEqualAny"):e;return new N("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new N("exists",[this],"exists").asBoolean()}charLength(){return new N("char_length",[this],"charLength")}like(e){return new N("like",[this,$(e)],"like").asBoolean()}regexContains(e){return new N("regex_contains",[this,$(e)],"regexContains").asBoolean()}regexFind(e){return new N("regex_find",[this,$(e)],"regexFind")}regexFindAll(e){return new N("regex_find_all",[this,$(e)],"regexFindAll")}regexMatch(e){return new N("regex_match",[this,$(e)],"regexMatch").asBoolean()}stringContains(e){return new N("string_contains",[this,$(e)],"stringContains").asBoolean()}startsWith(e){return new N("starts_with",[this,$(e)],"startsWith").asBoolean()}endsWith(e){return new N("ends_with",[this,$(e)],"endsWith").asBoolean()}toLower(){return new N("to_lower",[this],"toLower")}toUpper(){return new N("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push($(e)),new N("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push($(e)),new N("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push($(e)),new N("rtrim",t,"rtrim")}type(){return new N("type",[this])}isType(e){return new N("is_type",[this,Ni(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map($);return new N("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new N("string_index_of",[this,$(e)],"stringIndexOf")}stringRepeat(e){return new N("string_repeat",[this,$(e)],"stringRepeat")}stringReplaceAll(e,t){return new N("string_replace_all",[this,$(e),$(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new N("string_replace_one",[this,$(e),$(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map($);return new N("concat",[this,...r],"concat")}reverse(){return new N("reverse",[this],"reverse")}arrayFilter(e,t){return new N("array_filter",[this,$(e),t],"arrayFilter")}arrayTransform(e,t){return new N("array_transform",[this,$(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new N("array_transform",[this,$(e),$(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,$(e)];return t!==void 0&&r.push($(t)),new N("array_slice",r,"arraySlice")}arrayFirst(){return new N("array_first",[this],"arrayFirst")}arrayFirstN(e){return new N("array_first_n",[this,$(e)],"arrayFirstN")}arrayLast(){return new N("array_last",[this],"arrayLast")}arrayLastN(e){return new N("array_last_n",[this,$(e)],"arrayLastN")}arrayMaximum(){return new N("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new N("maximum_n",[this,$(e)],"arrayMaximumN")}arrayMinimum(){return new N("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new N("minimum_n",[this,$(e)],"arrayMinimumN")}arrayIndexOf(e){return new N("array_index_of",[this,$(e),$("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new N("array_index_of",[this,$(e),$("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new N("array_index_of_all",[this,$(e)],"arrayIndexOfAll")}byteLength(){return new N("byte_length",[this],"byteLength")}ceil(){return new N("ceil",[this])}floor(){return new N("floor",[this])}abs(){return new N("abs",[this])}exp(){return new N("exp",[this])}mapGet(e){return new N("map_get",[this,Ni(e)],"mapGet")}mapSet(e,t,...r){const s=[this,$(e),$(t),...r.map($)];return new N("map_set",s,"mapSet")}mapKeys(){return new N("map_keys",[this],"mapKeys")}mapValues(){return new N("map_values",[this],"mapValues")}mapEntries(){return new N("map_entries",[this],"mapEntries")}getField(e){return new N("get_field",[this,$(e)],"get_field")}count(){return St._create("count",[this],"count")}sum(){return St._create("sum",[this],"sum")}average(){return St._create("average",[this],"average")}minimum(){return St._create("minimum",[this],"minimum")}maximum(){return St._create("maximum",[this],"maximum")}first(){return St._create("first",[this],"first")}last(){return St._create("last",[this],"last")}arrayAgg(){return St._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return St._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return St._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new N("maximum",[this,...r.map($)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new N("minimum",[this,...r.map($)],"minimum")}vectorLength(){return new N("vector_length",[this],"vectorLength")}cosineDistance(e){return new N("cosine_distance",[this,Ml(e)],"cosineDistance")}dotProduct(e){return new N("dot_product",[this,Ml(e)],"dotProduct")}euclideanDistance(e){return new N("euclidean_distance",[this,Ml(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new N("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new N("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new N("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new N("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new N("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new N("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new N("timestamp_add",[this,$(e),$(t)],"timestampAdd")}timestampSubtract(e,t){return new N("timestamp_subtract",[this,$(e),$(t)],"timestampSubtract")}timestampDiff(e,t){return new N("timestamp_diff",[this,Xc(e),$(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,$(e)];return t&&r.push($(t)),new N("timestamp_extract",r,"timestampExtract")}documentId(){return new N("document_id",[this],"documentId")}parent(){return new N("parent",[this],"parent")}substring(e,t){const r=$(e);return new N("substring",t===void 0?[this,r]:[this,r,$(t)],"substring")}arrayGet(e){return new N("array_get",[this,$(e)],"arrayGet")}isError(){return new N("is_error",[this],"isError").asBoolean()}ifError(e){const t=new N("if_error",[this,$(e)],"ifError");return e instanceof ar?t.asBoolean():t}isAbsent(){return new N("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new N("map_remove",[this,$(e)],"mapRemove")}mapMerge(e,...t){const r=$(e),s=t.map($);return new N("map_merge",[this,r,...s],"mapMerge")}pow(e){return new N("pow",[this,$(e)])}trunc(e){return e===void 0?new N("trunc",[this]):new N("trunc",[this,$(e)],"trunc")}round(e){return e===void 0?new N("round",[this]):new N("round",[this,$(e)],"round")}collectionId(){return new N("collection_id",[this])}length(){return new N("length",[this])}ln(){return new N("ln",[this])}sqrt(){return new N("sqrt",[this])}stringReverse(){return new N("string_reverse",[this])}ifAbsent(e){return new N("if_absent",[this,$(e)],"ifAbsent")}ifNull(e){return new N("if_null",[this,$(e)],"ifNull")}coalesce(e,...t){return new N("coalesce",[this,$(e),...t.map($)],"coalesce")}join(e){return new N("join",[this,$(e)],"join")}log10(){return new N("log10",[this])}arraySum(){return new N("sum",[this])}split(e){return new N("split",[this,$(e)])}timestampTruncate(e,t){const r=[this,$(e)];return t&&r.push($(t)),new N("timestamp_trunc",r)}ascending(){return F8(this)}descending(){return U8(this)}as(e){return new D8(this,e,"as")}}class St{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const s=new St(e,t);return s._methodName=r,s}as(e){return new N8(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class N8{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class D8{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class si extends Gr{constructor(e,t){super(),this.Rr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.Rr.map(t=>t._toProto(e))}}}_readUserData(e){this.Rr.forEach(t=>t._readUserData(e))}}class xs extends Gr{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new N("geo_distance",[this,$(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function jo(n){return L8(n,"field")}function L8(n,e){return new xs(typeof n=="string"?Qt===n?s8()._internalPath:ja("field",n):n._internalPath,e)}class Is extends Gr{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Is(e,void 0);return t._protoValue=e,t}_toProto(e){return G(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,k8(this._protoValue)||(this._protoValue=Oi(this.value,e))}}function Ni(n,e){return t0(n,"constant")}function t0(n,e){const t=new Is(n,e);return typeof n=="boolean"?new r0(t):t}class N extends Gr{constructor(e,t,r,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new ht({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(r=>r._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class ar extends Gr{get _methodName(){return this._expr._methodName}countIf(){return St._create("count_if",[this],"countIf")}not(){return new N("not",[this],"not").asBoolean()}conditional(e,t){return new N("conditional",[this,e,t],"conditional")}ifError(e){const t=$(e),r=new N("if_error",[this,t],"ifError");return t instanceof ar?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class n0 extends ar{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class r0 extends ar{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class V8 extends ar{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function M8(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];t.push(Ni(r)),t.push($(s))}return new N("map",t,"map")}function B8(n){return function(t,r){return new N("array",t.map(s=>$(s)),r)}(n,"array")}function F8(n){return new s0(Xc(n),"ascending","ascending")}function U8(n){return new s0(Xc(n),"descending","descending")}class s0{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:jf(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
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
 */class Lt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class i0 extends Lt{get _name(){return"add_fields"}get _optionsUtil(){return new ht({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[ki(e,this.fields)]}}_readUserData(e){super._readUserData(e),lr(this.fields,e)}}class o0 extends Lt{get _name(){return"aggregate"}get _optionsUtil(){return new ht({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[ki(e,this.accumulators),ki(e,this.groups)]}}_readUserData(e){super._readUserData(e),lr(this.groups,e),lr(this.accumulators,e)}}class a0 extends Lt{get _name(){return"distinct"}get _optionsUtil(){return new ht({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[ki(e,this.groups)]}}_readUserData(e){super._readUserData(e),lr(this.groups,e)}}class qa extends Lt{get _name(){return"collection"}get _optionsUtil(){return new ht({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Vr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Vr}]}}_readUserData(e){super._readUserData(e)}}class za extends Lt{get _name(){return"collection_group"}get _optionsUtil(){return new ht({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class Jc extends Lt{get _name(){return"database"}get _optionsUtil(){return new ht({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class Zc extends Lt{get _name(){return"documents"}get _optionsUtil(){return new ht({})}constructor(e,t){if(super(t),!e||e.length===0)throw new z(V.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(r);if(s.size!==r.length)throw new z(V.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.dr=r,this.mr=s}_toProto(e){return{...super._toProto(e),args:this.dr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class Ga extends Lt{get _name(){return"where"}get _optionsUtil(){return new ht({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),lr(this.condition,e)}}class Mr extends Lt{get _name(){return"limit"}get _optionsUtil(){return new ht({})}constructor(e,t){G(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[$c(e,this.limit)]}}}class yd extends Lt{get _name(){return"offset"}get _optionsUtil(){return new ht({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[$c(e,this.offset)]}}}class $8 extends Lt{get _name(){return"select"}get _optionsUtil(){return new ht({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[ki(e,this.selections)]}}_readUserData(e){super._readUserData(e),lr(this.selections,e)}}class mn extends Lt{get _name(){return"sort"}get _optionsUtil(){return new ht({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),lr(this.orderings,e)}}class eu extends Lt{get _name(){return"replace_with"}get _optionsUtil(){return new ht({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),jf(eu.pr)]}}_readUserData(e){super._readUserData(e),lr(this.map,e)}}eu.pr="full_replace";function lr(n,e){return e0(n)?n._readUserData(e):Array.isArray(n)?n.forEach(t=>t._readUserData(e)):n instanceof Map?n.forEach(t=>t._readUserData(e)):Object.values(n).forEach(t=>t._readUserData(e)),n}// Copyright 2024 Google LLC* @license
class gt{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return Wa(this)}getPipelineCollectionGroup(){return tu(this)}getPipelineCollectionId(){return H8(this)}getPipelineDocuments(){return hc(this)}getPipelineFlavor(){return function(t){let r="exact";return t.stages.forEach((s,i)=>{s._name!==a0.name&&s._name!==o0.name||(r="keyless"),s._name===$8.name&&r==="exact"&&(r="augmented"),s._name===i0.name&&i<t.stages.length-1&&r==="exact"&&(r="augmented")}),r}(this)}getPipelineSourceType(){return Xn(this)}}function Xn(n){const e=n.stages[0];return e instanceof qa||e instanceof za||e instanceof Jc||e instanceof Zc?e._name:"unknown"}function Wa(n){if(Xn(n)==="collection")return n.stages[0].Vr}function tu(n){if(Xn(n)==="collection_group")return n.stages[0].collectionId}function H8(n){switch(Xn(n)){case"collection":return ve.fromString(Wa(n)).lastSegment();case"collection_group":return tu(n);default:return}}function hc(n){if(Xn(n)==="documents")return n.stages[0].dr}class mi{constructor(e,t,r,s){this._db=e,this.userDataReader=t,this._userDataWriter=r,this.stages=s}wr(e,t){const r=this.userDataReader.createContext(3,e);return e0(t)?t._readUserData(r):Array.isArray(t)?t.forEach(s=>s._readUserData(r)):t.forEach(s=>s._readUserData(r)),t}where(e){const t=this.stages.map(r=>r);return this.wr("where",e),t.push(new Ga(e,{})),new mi(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map(r=>r);return t.push(new Mr(e,{})),new mi(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const r=this.stages.map(s=>s);return"orderings"in e?r.push(new mn(this.wr("sort",e.orderings),{})):r.push(new mn(this.wr("sort",[e,...t]),{})),new mi(this._db,this.userDataReader,this._userDataWriter,r)}br(e){return{pipeline:{stages:this.stages.map(t=>t._toProto(e))}}}}// Copyright 2024 Google LLC* @license
class I{constructor(e,t){this.type=e,this.value=t}static vr(){return new I("ERROR",void 0)}static Sr(){return new I("UNSET",void 0)}static Dr(){return new I("NULL",ms)}static newValue(e){return Ot(e)?new I("NULL",ms):function(r){return!!r&&"booleanValue"in r}(e)?new I("BOOLEAN",e):Xt(e)?new I("INT",e):Ir(e)?new I("DOUBLE",e):function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue}(e)?new I("TIMESTAMP",e):function(r){return!!r&&"stringValue"in r}(e)?new I("STRING",e):function(r){return!!r&&"bytesValue"in r}(e)?new I("BYTES",e):e.referenceValue?new I("REFERENCE",e):e.geoPointValue?new I("GEO_POINT",e):ws(e)?new I("ARRAY",e):sa(e)?new I("VECTOR",e):Cr(e)?new I("MAP",e):new I("ERROR",void 0)}Cr(){return this.type==="ERROR"||this.type==="UNSET"}Fr(){return this.type==="NULL"}}function gi(n){if(!n.Cr())return n.value}function l0(n){return n instanceof ar?n._expr:n}function Z(n){if((n=l0(n))instanceof xs)return new j8(n);if(n instanceof Is)return new q8(n);if(n instanceof si)return new z8(n);if(n instanceof N){if(n.name==="add")return new K8(n);if(n.name==="subtract")return new Y8(n);if(n.name==="multiply")return new Q8(n);if(n.name==="divide")return new X8(n);if(n.name==="mod")return new J8(n);if(n.name==="and")return new Z8(n);if(n.name==="equal")return new h9(n);if(n.name==="not_equal")return new d9(n);if(n.name==="less_than")return new f9(n);if(n.name==="less_than_or_equal")return new p9(n);if(n.name==="greater_than")return new m9(n);if(n.name==="greater_than_or_equal")return new g9(n);if(n.name==="array_concat")return new w9(n);if(n.name==="array_reverse")return new _9(n);if(n.name==="array_contains")return new b9(n);if(n.name==="array_contains_all")return new y9(n);if(n.name==="array_contains_any")return new v9(n);if(n.name==="array_length")return new E9(n);if(n.name==="array_element")return new A9(n);if(n.name==="equal_any")return new c0(n);if(n.name==="not_equal_any")return new t9(n);if(n.name==="is_nan")return new n9(n);if(n.name==="is_not_nan")return new r9(n);if(n.name==="is_null")return new s9(n);if(n.name==="is_not_null")return new i9(n);if(n.name==="is_error")return new o9(n);if(n.name==="exists")return new a9(n);if(n.name==="not")return new Ka(n);if(n.name==="or")return new e9(n);if(n.name==="xor")return new nu(n);if(n.name==="conditional")return new l9(n);if(n.name==="maximum")return new c9(n);if(n.name==="minimum")return new u9(n);if(n.name==="reverse")return new T9(n);if(n.name==="replace_first")return new x9(n);if(n.name==="replace_all")return new I9(n);if(n.name==="char_length")return new C9(n);if(n.name==="byte_length")return new S9(n);if(n.name==="like")return new R9(n);if(n.name==="regex_contains")return new P9(n);if(n.name==="regex_match")return new k9(n);if(n.name==="string_contains")return new O9(n);if(n.name==="starts_with")return new N9(n);if(n.name==="ends_with")return new D9(n);if(n.name==="to_lower")return new L9(n);if(n.name==="to_upper")return new V9(n);if(n.name==="trim")return new M9(n);if(n.name==="string_concat")return new B9(n);if(n.name==="map_get")return new F9(n);if(n.name==="cosine_distance")return new U9(n);if(n.name==="dot_product")return new $9(n);if(n.name==="euclidean_distance")return new H9(n);if(n.name==="vector_length")return new j9(n);if(n.name==="unix_micros_to_timestamp")return new K9(n);if(n.name==="timestamp_to_unix_micros")return new X9(n);if(n.name==="unix_millis_to_timestamp")return new Y9(n);if(n.name==="timestamp_to_unix_millis")return new J9(n);if(n.name==="unix_seconds_to_timestamp")return new Q9(n);if(n.name==="timestamp_to_unix_seconds")return new Z9(n);if(n.name==="timestamp_add")return new e5(n);if(n.name==="timestamp_subtract")return new t5(n)}throw new Error(`Unknown Expr : ${n}`)}class j8{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Qt)return I.newValue({referenceValue:da(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return I.newValue({timestampValue:Ho(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return I.newValue({timestampValue:Ho(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?Da(r)?I.newValue(function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:Ho(i.serializer,se.fromTimestamp(ps(o)))};if(i.serverTimestampBehavior==="previous"){const l=Wi(o);if(l)return l}return{nullValue:"NULL_VALUE"}}(e,r)):I.newValue(r):I.Sr()}}class q8{constructor(e){this.expr=e}evaluate(e,t){return I.newValue(this.expr._getValue())}}class z8{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.Rr.map(s=>Z(s).evaluate(e,t));return r.some(s=>s.Cr())?I.vr():I.newValue({arrayValue:{values:r.map(s=>s.value)}})}}function nt(n){return Ir(n)?Number(n.doubleValue):Number(n.integerValue)}function ln(n){return BigInt(n.integerValue)}const G8=BigInt("0x7fffffffffffffff"),W8=-BigInt("0x8000000000000000");class Xi{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length>=2,24778);const r=Z(this.expr.params[0]).evaluate(e,t),s=Z(this.expr.params[1]).evaluate(e,t);let i=this.Or(r,s);for(const o of this.expr.params.slice(2)){const l=Z(o).evaluate(e,t);i=this.Or(i,l)}return i}Or(e,t){if(e.Cr()||t.Cr())return I.vr();if(e.Fr()||t.Fr())return I.Dr();const r=e.value,s=t.value;if(!Ir(r)&&!Xt(r)||!Ir(s)&&!Xt(s))return I.vr();if(Ir(r)||Ir(s)){const i=this.Mr(r,s);return i?I.newValue(i):I.vr()}if(Xt(r)&&Xt(s)){const i=this.Nr(r,s);return i===void 0?I.vr():typeof i=="number"?I.newValue({doubleValue:i}):i<W8||i>G8?I.vr():I.newValue({integerValue:`${i}`})}return I.vr()}}function xn(n,e){return qe(n)!==qe(e)?"TYPE_MISMATCH":It(n)||It(e)?"NOT_EQ":Ot(n)&&Ot(e)?"EQ":Ot(n)||Ot(e)?"NULL":ws(n)&&ws(e)?function(r,s){var o,l,c;if(((o=r.values)==null?void 0:o.length)!==((l=s.values)==null?void 0:l.length))return"NOT_EQ";let i=!1;for(let h=0;h<(((c=r.values)==null?void 0:c.length)??0);h++){const p=r.values[h],g=s.values[h];switch(xn(p,g)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:J(44609,{Lr:p,Br:g})}}return i?"NULL":"EQ"}(n.arrayValue,e.arrayValue):sa(n)&&sa(e)||Cr(n)&&Cr(e)?function(r,s){const i=r.fields||{},o=s.fields||{};if(na(i)!==na(o))return"NOT_EQ";let l=!1;for(const c in i)if(i.hasOwnProperty(c)){if(o[c]===void 0)return"NOT_EQ";switch(xn(i[c],o[c])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":l=!0}}return l?"NULL":"EQ"}(n.mapValue,e.mapValue):function(r,s){return Ft(r,s,{Te:!1,Ee:!0,he:!0})}(n,e)?"EQ":"NOT_EQ"}class K8 extends Xi{Nr(e,t){return ln(e)+ln(t)}Mr(e,t){return{doubleValue:nt(e)+nt(t)}}}class Y8 extends Xi{constructor(e){super(e),this.expr=e}Nr(e,t){return ln(e)-ln(t)}Mr(e,t){return{doubleValue:nt(e)-nt(t)}}}class Q8 extends Xi{constructor(e){super(e),this.expr=e}Nr(e,t){return ln(e)*ln(t)}Mr(e,t){return{doubleValue:nt(e)*nt(t)}}}class X8 extends Xi{constructor(e){super(e),this.expr=e}Nr(e,t){const r=ln(t);if(r!==BigInt(0))return ln(e)/r}Mr(e,t){const r=nt(t);return r===0?{doubleValue:Ti(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:nt(e)/r}}}class J8 extends Xi{constructor(e){super(e),this.expr=e}Nr(e,t){const r=ln(t);if(r!==BigInt(0))return ln(e)%r}Mr(e,t){const r=nt(t);if(r!==0)return{doubleValue:nt(e)%r}}}class Z8{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const l=Z(o).evaluate(e,t);switch(l.type){case"BOOLEAN":if(!((i=l.value)!=null&&i.booleanValue))return I.newValue(Je);break;case"NULL":s=!0;break;default:r=!0}}return r?I.vr():s?I.Dr():I.newValue(Tt)}}class Ka{constructor(e){this.expr=e}evaluate(e,t){var s;G(this.expr.params.length===1,9634);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return I.newValue({booleanValue:!((s=r.value)!=null&&s.booleanValue)});case"NULL":return I.Dr();default:return I.vr()}}}class e9{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const l=Z(o).evaluate(e,t);switch(l.type){case"BOOLEAN":if((i=l.value)!=null&&i.booleanValue)return I.newValue(Tt);break;case"NULL":s=!0;break;default:r=!0}}return r?I.vr():s?I.Dr():I.newValue(Je)}}class nu{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const l=Z(o).evaluate(e,t);switch(l.type){case"BOOLEAN":r=nu.xor(r,!!((i=l.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return I.vr()}}return s?I.Dr():I.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class c0{constructor(e){this.expr=e}evaluate(e,t){var o,l;G(this.expr.params.length===2,55094);let r=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return I.vr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return I.vr()}if(r)return I.Dr();for(const c of((l=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:l.values)??[])switch(Ot(s.value)&&Ot(c)?"EQ":xn(s.value,c)){case"EQ":return I.newValue(Tt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:J(44608,{value:s.value,candidate:c})}return r?I.Dr():I.newValue(Je)}}class t9{constructor(e){this.expr=e}evaluate(e,t){return new Ka(new N("not",[new N("equal_any",this.expr.params)])).evaluate(e,t)}}class n9{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===1,23322);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return I.newValue(Je);case"DOUBLE":return I.newValue({booleanValue:isNaN(nt(r.value))});case"NULL":return I.Dr();default:return I.vr()}}}class r9{constructor(e){this.expr=e}evaluate(e,t){return G(this.expr.params.length===1,50406),new Ka(new N("not",[new N("is_nan",this.expr.params)])).evaluate(e,t)}}class s9{constructor(e){this.expr=e}evaluate(e,t){switch(G(this.expr.params.length===1,23123),Z(this.expr.params[0]).evaluate(e,t).type){case"NULL":return I.newValue(Tt);case"UNSET":case"ERROR":return I.vr();default:return I.newValue(Je)}}}class i9{constructor(e){this.expr=e}evaluate(e,t){return G(this.expr.params.length===1,23167),new Ka(new N("not",[new N("is_null",this.expr.params)])).evaluate(e,t)}}class o9{constructor(e){this.expr=e}evaluate(e,t){return G(this.expr.params.length===1,5228),Z(this.expr.params[0]).evaluate(e,t).type==="ERROR"?I.newValue(Tt):I.newValue(Je)}}class a9{constructor(e){this.expr=e}evaluate(e,t){switch(G(this.expr.params.length===1,6877),Z(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return I.vr();case"UNSET":return I.newValue(Je);default:return I.newValue(Tt)}}}class l9{constructor(e){this.expr=e}evaluate(e,t){var s;G(this.expr.params.length===3,11706);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return(s=r.value)!=null&&s.booleanValue?Z(this.expr.params[1]).evaluate(e,t):Z(this.expr.params[2]).evaluate(e,t);case"NULL":return Z(this.expr.params[2]).evaluate(e,t);default:return I.vr()}}}class c9{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>Z(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||xt(i.value,s.value)>0?i:s}return s===void 0?I.Dr():s}}class u9{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>Z(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||xt(i.value,s.value)<0?i:s}return s===void 0?I.Dr():s}}class Cs{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return I.vr()}const s=Z(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return I.vr()}return this.Ur(r,s)}}class h9 extends Cs{constructor(e){super(e),this.expr=e}Ur(e,t){if(e.Fr()&&t.Fr())return I.newValue(Tt);if(e.Fr()||t.Fr()||It(e.value)||It(t.value)||qe(e.value)!==qe(t.value))return I.newValue(Je);switch(xn(e.value,t.value)){case"EQ":return I.newValue(Tt);case"NOT_EQ":return I.newValue(Je);case"NULL":return I.Dr();default:J(44615,{left:e,right:t})}}}class d9 extends Cs{constructor(e){super(e),this.expr=e}Ur(e,t){switch(xn(e.value,t.value)){case"EQ":return I.newValue(Je);case"NOT_EQ":case"TYPE_MISMATCH":return I.newValue(Tt);case"NULL":return I.Dr();default:J(44614,{left:e,right:t})}}}class f9 extends Cs{constructor(e){super(e),this.expr=e}Ur(e,t){return qe(e.value)!==qe(t.value)||It(e.value)||It(t.value)?I.newValue(Je):I.newValue({booleanValue:xt(e.value,t.value)<0})}}class p9 extends Cs{constructor(e){super(e),this.expr=e}Ur(e,t){return qe(e.value)!==qe(t.value)||It(e.value)||It(t.value)?I.newValue(Je):xn(e.value,t.value)==="EQ"?I.newValue(Tt):I.newValue({booleanValue:xt(e.value,t.value)<0})}}class m9 extends Cs{constructor(e){super(e),this.expr=e}Ur(e,t){return qe(e.value)!==qe(t.value)||It(e.value)||It(t.value)?I.newValue(Je):I.newValue({booleanValue:xt(e.value,t.value)>0})}}class g9 extends Cs{constructor(e){super(e),this.expr=e}Ur(e,t){return qe(e.value)!==qe(t.value)||It(e.value)||It(t.value)?I.newValue(Je):xn(e.value,t.value)==="EQ"?I.newValue(Tt):I.newValue({booleanValue:xt(e.value,t.value)>0})}}class w9{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class _9{constructor(e){this.expr=e}evaluate(e,t){var s;G(this.expr.params.length===1,216);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return I.Dr();case"ARRAY":{const i=((s=r.value.arrayValue)==null?void 0:s.values)??[];return I.newValue({arrayValue:{values:[...i].reverse()}})}default:return I.vr()}}}class b9{constructor(e){this.expr=e}evaluate(e,t){return G(this.expr.params.length===2,52884),new c0(new N("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class y9{constructor(e){this.expr=e}evaluate(e,t){var c,h,p,g;G(this.expr.params.length===2,1392);let r=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return I.vr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return I.vr()}if(r)return I.Dr();const o=((h=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:h.values)??[],l=((g=(p=s.value)==null?void 0:p.arrayValue)==null?void 0:g.values)??[];for(const x of o){let S=!1;r=!1;for(const R of l){switch(Ot(x)&&Ot(R)?"EQ":xn(x,R)){case"EQ":S=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:J(44613,{value:R,search:x})}if(S)break}if(!S)return I.newValue(Je)}return I.newValue(Tt)}}class v9{constructor(e){this.expr=e}evaluate(e,t){var c,h,p,g;G(this.expr.params.length===2,2680);let r=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return I.vr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return I.vr()}if(r)return I.Dr();const o=((h=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:h.values)??[],l=((g=(p=s.value)==null?void 0:p.arrayValue)==null?void 0:g.values)??[];for(const x of l)for(const S of o)switch(Ot(x)&&Ot(S)?"EQ":xn(x,S)){case"EQ":return I.newValue(Tt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:J(44608,{value:x,search:S})}return r?I.Dr():I.newValue(Je)}}class E9{constructor(e){this.expr=e}evaluate(e,t){var s,i,o;G(this.expr.params.length===1,38605);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return I.Dr();case"ARRAY":return I.newValue({integerValue:`${((o=(i=(s=r.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return I.vr()}}}class A9{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class T9{constructor(e){this.expr=e}evaluate(e,t){var s,i;G(this.expr.params.length===1,1508);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return I.Dr();case"BYTES":{const o=(s=r.value)==null?void 0:s.bytesValue;if(typeof o=="string"){const l=je.fromBase64String(o).toUint8Array();return l.reverse(),I.newValue({bytesValue:je.fromUint8Array(l).toBase64()})}return I.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=r.value)==null?void 0:i.stringValue,l=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),c=Array.from(l,h=>h.segment).reverse();return I.newValue({stringValue:c.join("")})}default:return I.vr()}}}class x9{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class I9{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class C9{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===1,19400);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return I.Dr();case"STRING":{const s=function(o){let l=0;for(let c=0;c<o.length;c++){const h=o.codePointAt(c);if(h===void 0)return;if(h<=65535)if(h>=55296&&h<=57343)if(h<=56319){const p=o.codePointAt(c+1);p!==void 0&&p>=56320&&p<=57343?(l+=1,c++):l+=1}else l+=1;else l+=1;else{if(!(h<=1114111))return;l+=1,c++}}return l}(r.value.stringValue);return s===void 0?I.vr():I.newValue({integerValue:s})}default:return I.vr()}}}class S9{constructor(e){this.expr=e}evaluate(e,t){var s,i;G(this.expr.params.length===1,8486);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const o=(s=r.value)==null?void 0:s.bytesValue;return typeof o=="string"?I.newValue({integerValue:je.fromBase64String(o).toUint8Array().length}):I.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=function(c){let h=0;for(let p=0;p<c.length;p++){const g=c.codePointAt(p);if(g===void 0)return;if(g>=55296&&g<=57343){if(!(g<=56319))return;{const x=c.codePointAt(p+1);if(x===void 0||!(x>=56320&&x<=57343))return;h+=4,p++}}else if(g<=127)h+=1;else if(g<=2047)h+=2;else if(g<=65535)h+=3;else{if(!(g<=1114111))return;h+=4,p++}}return h}((i=r.value)==null?void 0:i.stringValue);return o===void 0?I.vr():I.newValue({integerValue:o})}case"NULL":return I.Dr();default:return I.vr()}}}class Ss{constructor(e){this.expr=e}evaluate(e,t){var o,l;G(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return I.vr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return I.vr()}return r?I.Dr():this.kr((o=s.value)==null?void 0:o.stringValue,(l=i.value)==null?void 0:l.stringValue)}}class R9 extends Ss{kr(e,t){try{const r=function(o){let l="";for(let c=0;c<o.length;c++){const h=o.charAt(c);switch(h){case"_":l+=".";break;case"%":l+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":l+="\\"+h;break;default:l+=h}}return"^"+l+"$"}(t),s=Ei.compile(r);return I.newValue({booleanValue:s.matches(e)})}catch(r){return zt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),I.vr()}}}class P9 extends Ss{kr(e,t){try{const r=Ei.compile(t);return I.newValue({booleanValue:r.matcher(e).find()})}catch{return zt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),I.vr()}}}class k9 extends Ss{kr(e,t){try{return I.newValue({booleanValue:Ei.compile(t).matches(e)})}catch{return zt(`Invalid regex pattern found in regex_match: ${t}, returning error`),I.vr()}}}class O9 extends Ss{kr(e,t){return I.newValue({booleanValue:e.includes(t)})}}class N9 extends Ss{kr(e,t){return I.newValue({booleanValue:e.startsWith(t)})}}class D9 extends Ss{kr(e,t){return I.newValue({booleanValue:e.endsWith(t)})}}class L9{constructor(e){this.expr=e}evaluate(e,t){var s,i;G(this.expr.params.length===1,29079);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return I.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return I.Dr();default:return I.vr()}}}class V9{constructor(e){this.expr=e}evaluate(e,t){var s,i;G(this.expr.params.length===1,60487);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return I.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return I.Dr();default:return I.vr()}}}class M9{constructor(e){this.expr=e}evaluate(e,t){var s,i;G(this.expr.params.length===1,28544);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return I.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return I.Dr();default:return I.vr()}}}class B9{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(o=>Z(o).evaluate(e,t));let s="",i=!1;for(const o of r)switch(o.type){case"STRING":s+=o.value.stringValue;break;case"NULL":i=!0;break;default:return I.vr()}return i?I.Dr():I.newValue({stringValue:s})}}class F9{constructor(e){this.expr=e}evaluate(e,t){var o,l,c,h;G(this.expr.params.length===2,4483);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return I.Sr();case"MAP":break;default:return I.vr()}const s=Z(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return I.vr();const i=(h=(l=(o=r.value)==null?void 0:o.mapValue)==null?void 0:l.fields)==null?void 0:h[(c=s.value)==null?void 0:c.stringValue];return i===void 0?I.Sr():I.newValue(i)}}class ru{constructor(e){this.expr=e}evaluate(e,t){var h,p;G(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return I.vr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return I.vr()}if(r)return I.Dr();const o=sc(s.value),l=sc(i.value);if(o===void 0||l===void 0||((h=o.values)==null?void 0:h.length)!==((p=l.values)==null?void 0:p.length))return I.vr();const c=this.qr(o,l);return c===void 0||isNaN(c)?I.vr():I.newValue({doubleValue:c})}}class U9 extends ru{qr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return;let i=0,o=0,l=0;for(let h=0;h<r.length;h++){if(!or(r[h])||!or(s[h]))return;const p=nt(r[h]),g=nt(s[h]);i+=p*g,o+=p*p,l+=g*g}const c=Math.sqrt(o)*Math.sqrt(l);if(c!==0)return 1-Math.max(-1,Math.min(1,i/c))}}class $9 extends ru{qr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!or(r[o])||!or(s[o]))return;i+=nt(r[o])*nt(s[o])}return i}}class H9 extends ru{qr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!or(r[o])||!or(s[o]))return;const l=nt(r[o]),c=nt(s[o]);i+=Math.pow(l-c,2)}return Math.sqrt(i)}}class j9{constructor(e){this.expr=e}evaluate(e,t){var s;G(this.expr.params.length===1,39044);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const i=sc(r.value);return I.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return I.Dr();default:return I.vr()}}}const Di=BigInt(-62135596800),Li=BigInt(253402300799),pa=BigInt(1e3),Jn=BigInt(1e6),q9=Di*pa,z9=Li*pa+BigInt(999),G9=Di*Jn,W9=Li*Jn+BigInt(999999);function su(n){return n>=G9&&n<=W9}function u0(n){return n>=Di&&n<=Li}function Vi(n,e){const t=BigInt(n);return!(t<Di||t>Li)&&!(e<0||e>=1e9)&&(t!==Di||e===0)&&!(t===Li&&e>999999999)}function h0(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function iu(n){return BigInt(n.seconds)*Jn+BigInt(Math.trunc(n.nanoseconds/1e3))}class ou{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return I.Dr();default:return I.vr()}}}class K9 extends ou{toTimestamp(e){if(!su(e))return I.vr();let t=Number(e/Jn),r=Number(e%Jn*BigInt(1e3));const s=h0(t,r);return t=s.seconds,r=s.nanos,Vi(t,r)?I.newValue({timestampValue:{seconds:t,nanos:r}}):I.vr()}}class Y9 extends ou{toTimestamp(e){if(!function(o){return o>=q9&&o<=z9}(e))return I.vr();let t=Number(e/pa),r=Number(e%pa*BigInt(1e6));const s=h0(t,r);return t=s.seconds,r=s.nanos,Vi(t,r)?I.newValue({timestampValue:{seconds:t,nanos:r}}):I.vr()}}class Q9 extends ou{toTimestamp(e){if(!u0(e))return I.vr();const t=Number(e);return I.newValue({timestampValue:{seconds:t,nanos:0}})}}class au{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return I.Dr();default:return I.vr()}const s=Wc(r.value.timestampValue);return Vi(s.seconds,s.nanoseconds)?this.$r(s):I.vr()}}class X9 extends au{$r(e){const t=iu(e);return su(t)?I.newValue({integerValue:`${t.toString()}`}):I.vr()}}class J9 extends au{$r(e){const t=iu(e),r=t/BigInt(1e3),s=t%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?I.newValue({integerValue:r.toString()}):I.newValue({integerValue:(r-BigInt(1)).toString()})}}class Z9 extends au{$r(e){const t=BigInt(e.seconds);return u0(t)?I.newValue({integerValue:t.toString()}):I.vr()}}class d0{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return I.vr()}const i=Z(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=function(re){switch(re){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),o===void 0)return I.vr();break;case"NULL":r=!0;break;default:return I.vr()}const l=Z(this.expr.params[2]).evaluate(e,t);switch(l.type){case"INT":break;case"NULL":r=!0;break;default:return I.vr()}if(r)return I.Dr();const c=BigInt(l.value.integerValue);let h;try{switch(o){case"microsecond":h=c;break;case"millisecond":h=c*BigInt(1e3);break;case"second":h=c*BigInt(1e6);break;case"minute":h=c*BigInt(6e7);break;case"hour":h=c*BigInt(36e8);break;case"day":h=c*BigInt(864e8);break;default:return I.vr()}if(o!=="microsecond"&&c!==BigInt(0)&&h/c!==BigInt(this.Kr(o)))return I.vr()}catch(Q){return zt(`Error during timestamp arithmetic: ${Q}`),I.vr()}const p=Wc(s.value.timestampValue);if(!Vi(p.seconds,p.nanoseconds))return I.vr();const g=iu(p),x=this.Wr(g,h);if(!su(x))return I.vr();const S=Number(x/Jn),R=x%Jn,B=Number((R<0?R+Jn:R)*BigInt(1e3)),U=R<0?S-1:S;return Vi(U,B)?I.newValue({timestampValue:{seconds:U,nanos:B}}):I.vr()}Kr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class e5 extends d0{Wr(e,t){return e+t}}class t5 extends d0{Wr(e,t){return e-t}}function Mi(n){if((n=l0(n))instanceof xs)return`fld(${n.fieldName})`;if(n instanceof Is)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof $e?`ref(${t.path})`:t instanceof Et?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(n.value)})`;if(n instanceof N)return`fn(${n.name},[${n.params.map(Mi).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.Rr.map(Mi).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function n5(n){if(n instanceof i0)return`${n._name}(${So(n.fields)})`;if(n instanceof o0){let e=`${n._name}(${So(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${So(n.groups)})`),e}if(n instanceof a0)return`${n._name}(${So(n.groups)})`;if(n instanceof qa)return`${n._name}(${n.Vr})`;if(n instanceof za)return`${n._name}(${n.collectionId})`;if(n instanceof Jc)return`${n._name}()`;if(n instanceof Zc)return`${n._name}(${n.dr.sort()})`;if(n instanceof Ga)return`${n._name}(${Mi(n.condition)})`;if(n instanceof Mr)return`${n._name}(${n.limit})`;if(n instanceof mn)return`${n._name}(${function(t){return t.map(r=>`${Mi(r.expr)}${r.direction}`).join(",")}(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function So(n){return`${Array.from(n.entries()).sort().map(([e,t])=>`${e}=${Mi(t)}`).join(",")}`}function yn(n){return n.stages.map(e=>n5(e)).join("|")}function f0(n,e){return yn(n)===yn(e)}function Ke(n){return n instanceof gt}function vd(n){return Ke(n)?yn(n):fi(n)}function p0(n){return Ke(n)?yn(n):function(t){return`${If(rn(t))}|lt:${t.limitType}`}(n)}function Ya(n,e){return n instanceof gt&&e instanceof gt?f0(n,e):!(n instanceof gt&&!(e instanceof gt)||!(n instanceof gt)&&e instanceof gt)&&R3(n,e)}function m0(n){return xr(n)?yn(n):If(n)}function g0(n,e){return n instanceof gt&&e instanceof gt?f0(n,e):!(n instanceof gt&&!(e instanceof gt)||!(n instanceof gt)&&e instanceof gt)&&Cf(n,e)}function r5(n,e){const t=function(s){let i=!1;const o=[];for(const l of s)if(l instanceof mn)if(i=!0,l.orderings.some(c=>c.expr instanceof xs&&c.expr.fieldName===Qt))o.push(l);else{const c=l.orderings.map(h=>h);c.push(jo(Qt).ascending()),o.push(new mn(c,{}))}else l instanceof Mr&&(i||(o.push(new mn([jo(Qt).ascending()],{})),i=!0)),o.push(l);return i||o.push(new mn([jo(Qt).ascending()],{})),o}(n.stages);if(n.userDataReader){const r=n.userDataReader.createContext(3,"toCorePipeline");t.forEach(s=>s._readUserData(r))}return new gt(n.userDataReader.serializer,t,e)}/**
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
 */class s5{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&d3(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=hi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=hi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Of();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(s.key)?null:l;const c=_f(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),he())}isEqual(e){return this.batchId===e.batchId&&fs(this.mutations,e.mutations,(t,r)=>Zh(t,r))&&fs(this.baseMutations,e.baseMutations,(t,r)=>Zh(t,r))}}class lu{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){G(e.mutations.length===r.length,58842,{Qr:e.mutations.length,Gr:r.length});let s=function(){return D3}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new lu(e,t,r,s)}}/**
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
 */class i5{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gn{constructor(e,t,r,s,i=se.min(),o=se.min(),l=je.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class o5{constructor(e){this.zr=e}}function a5(n){const e=X3({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?oc(e,e.limit,"L"):e}/**
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
 */class l5{constructor(){this.Hi=new c5}addToCollectionParentIndex(e,t){return this.Hi.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Hi.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(rr.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(rr.min())}updateCollectionGroup(e,t,r){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class c5{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new He(ve.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new He(ve.comparator)).toArray()}}/**
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
 */class cr{constructor(e){this.Ds=e}next(){return this.Ds+=2,this.Ds}static xs(){return new cr(0)}static Cs(){return new cr(-1)}}// Copyright 2024 Google LLC* @license
function w0(n,e){var r;let t=e;for(const s of n.stages)t=h5({serializer:n.serializer,serverTimestampBehavior:(r=n.listenOptions)==null?void 0:r.serverTimestampBehavior},s,t);return t}function Qa(n,e){return w0(n,[e]).length>0}function u5(n,e){return Ke(n)?Qa(n,e):Fa(n,e)}function h5(n,e,t){if(e instanceof qa)return function(s,i,o){return o.filter(l=>l.isFoundDocument()&&`/${l.key.getCollectionPath().canonicalString()}`===i.Vr)}(0,e,t);if(e instanceof Ga)return function(s,i,o){return o.filter(l=>{const c=gi(Z(i.condition).evaluate(s,l));return c!==void 0&&Ft(c,Tt)})}(n,e,t);if(e instanceof za)return function(s,i,o){return o.filter(l=>l.isFoundDocument()&&l.key.getCollectionPath().lastSegment()===i.collectionId)}(0,e,t);if(e instanceof Jc)return function(s,i,o){return o.filter(l=>l.isFoundDocument())}(0,0,t);if(e instanceof Zc)return function(s,i,o){return o.filter(l=>l.isFoundDocument()&&i.mr.has(l.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof Mr)return function(s,i,o){return o.slice(0,i.limit)}(0,e,t);if(e instanceof mn)return function(s,i,o){const l=i.orderings.map(c=>({ks:Z(c.expr),direction:c.direction}));return[...o].sort((c,h)=>{for(const{ks:p,direction:g}of l){const x=gi(p.evaluate(s,c)),S=gi(p.evaluate(s,h)),R=xt(x??ms,S??ms);if(R!==0)return g==="ascending"?R:-R}return 0})}(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function dc(n){const e=function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof mn)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(n);return(t,r)=>{for(const s of e){const i=gi(Z(s.expr).evaluate({serializer:n.serializer},t)),o=gi(Z(s.expr).evaluate({serializer:n.serializer},r)),l=xt(i||ms,o||ms);if(l!==0)return s.direction==="ascending"?l:-l}return 0}}function Bl(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof Mr)return{limit:t.limit}}}/**
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
 */class d5{constructor(){this.changes=new zr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?L.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class f5{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class p5{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&hi(r.mutation,s,jt.empty(),Ie.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,t,r=he()){const s=Hn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=ns();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Hn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,he()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,s){let i=vt();const o=pi(),l=function(){return pi()}();return t.forEach((c,h)=>{const p=r.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof qr)?i=i.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),hi(p.mutation,h,p.mutation.getFieldMask(),Ie.now())):o.set(h.key,jt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,p)=>o.set(h,p)),t.forEach((h,p)=>l.set(h,new f5(p,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,t){const r=pi();let s=new Ce((o,l)=>o-l),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let p=r.get(c)||jt.empty();p=l.applyToLocalView(h,p),r.set(c,p);const g=(s.get(l.batchId)||he()).add(c);s=s.insert(l.batchId,g)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,p=c.value,g=Of();p.forEach(x=>{if(!i.has(x)){const S=_f(t.get(x),r.get(x));S!==null&&g.set(x,S),i=i.add(x)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return Ke(t)?this.getDocumentsMatchingPipeline(e,t,r,s):I3(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):C3(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):L.resolve(Hn());let l=Ai,c=i;return o.next(h=>L.forEach(h,(p,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(p)?L.resolve():this.remoteDocumentCache.getEntry(e,p).next(x=>{c=c.insert(p,x)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,he())).next(p=>({batchId:l,changes:kf(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next(r=>{let s=ns();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=ns();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,c=>{const h=function(g,x){return new Ba(x,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(p=>{p.forEach((g,x)=>{o=o.insert(g,x)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>this.retrieveMatchingLocalDocuments(i,o,l=>Fa(t,l)))}getDocumentsMatchingPipeline(e,t,r,s){if(Xn(t)==="collection_group"){const i=tu(t);let o=ns();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,c=>{const h=function(g,x){const S=g.stages.map(R=>R instanceof za?new qa(x.canonicalString(),{}):R);return new gt(g.serializer,S)}(t,c.child(i));return this.getDocumentsMatchingPipeline(e,h,r,s).next(p=>{p.forEach((g,x)=>{o=o.insert(g,x)})})}).next(()=>o))}{let i;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next(o=>{switch(i=o,Xn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s);case"documents":let l=he();for(const c of hc(t))l=l.add(X.fromPath(c));return this.remoteDocumentCache.getEntries(e,l);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new z("invalid-argument",`Invalid pipeline source to execute offline: ${yn(t)}`)}}).next(o=>this.retrieveMatchingLocalDocuments(i,o,l=>Qa(t,l)))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach((i,o)=>{const l=o.getKey();t.get(l)===null&&(t=t.insert(l,lt.newInvalidDocument(l)))});let s=ns();return t.forEach((i,o)=>{const l=e.get(i);l!==void 0&&hi(l.mutation,o,jt.empty(),Ie.now()),r(o)&&(s=s.insert(i,o))}),s}getOverlaysForPipeline(e,t,r){switch(Xn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,ve.fromString(Wa(t)),r);case"collection_group":throw new z("invalid-argument",`Unexpected collection group pipeline: ${yn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,hc(t).map(s=>X.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new z("invalid-argument",`Failed to get overlays for pipeline: ${yn(t)}`)}}}/**
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
 */class m5{constructor(e){this.serializer=e,this.Hs=new Map,this.Js=new Map}getBundleMetadata(e,t){return L.resolve(this.Hs.get(t))}saveBundleMetadata(e,t){return this.Hs.set(t.id,function(s){return{id:s.id,version:s.version,createTime:sn(s.createTime)}}(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.Js.get(t))}saveNamedQuery(e,t){return this.Js.set(t.name,function(s){return{name:s.name,query:a5(s.bundledQuery),readTime:sn(s.readTime)}}(t)),L.resolve()}}/**
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
 */class g5{constructor(){this.overlays=new Ce(X.comparator),this.Ys=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Hn();return L.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}getAllOverlays(e,t){const r=Hn();return this.overlays.forEach((s,i)=>{i.largestBatchId>t&&r.set(s,i)}),L.resolve(r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Hr(e,t,i)}),L.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ys.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ys.delete(r)),L.resolve()}getOverlaysForCollection(e,t,r){const s=Hn(),i=t.length+1,o=new X(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return L.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ce((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let p=i.get(h.largestBatchId);p===null&&(p=Hn(),i=i.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=Hn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=s)););return L.resolve(l)}Hr(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ys.get(s.largestBatchId).delete(r.key);this.Ys.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new i5(t,r));let i=this.Ys.get(t);i===void 0&&(i=he(),this.Ys.set(t,i)),this.Ys.set(t,i.add(r.key))}}/**
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
 */class w5{constructor(){this.sessionToken=je.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
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
 */class cu{constructor(){this.Zs=new He(Xe.Xs),this.e_=new He(Xe.t_)}isEmpty(){return this.Zs.isEmpty()}addReference(e,t){const r=new Xe(e,t);this.Zs=this.Zs.add(r),this.e_=this.e_.add(r)}n_(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.r_(new Xe(e,t))}i_(e,t){e.forEach(r=>this.removeReference(r,t))}s_(e){const t=new X(new ve([])),r=new Xe(t,e),s=new Xe(t,e+1),i=[];return this.e_.forEachInRange([r,s],o=>{this.r_(o),i.push(o.key)}),i}__(){this.Zs.forEach(e=>this.r_(e))}r_(e){this.Zs=this.Zs.delete(e),this.e_=this.e_.delete(e)}o_(e){const t=new X(new ve([])),r=new Xe(t,e),s=new Xe(t,e+1);let i=he();return this.e_.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Xe(e,0),r=this.Zs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,t){this.key=e,this.a_=t}static Xs(e,t){return X.comparator(e.key,t.key)||fe(e.a_,t.a_)}static t_(e,t){return fe(e.a_,t.a_)||X.comparator(e.key,t.key)}}/**
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
 */class _5{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gs=1,this.u_=new He(Xe.Xs)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.gs;this.gs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new s5(i,t,r,s);this.mutationQueue.push(o);for(const l of s)this.u_=this.u_.add(new Xe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,t){return L.resolve(this.c_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.l_(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Fc:this.gs-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Xe(t,0),s=new Xe(t,Number.POSITIVE_INFINITY),i=[];return this.u_.forEachInRange([r,s],o=>{const l=this.c_(o.a_);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new He(fe);return t.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.u_.forEachInRange([i,o],l=>{r=r.add(l.a_)})}),L.resolve(this.E_(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new X(i),0);let l=new He(fe);return this.u_.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.a_)),!0)},o),L.resolve(this.E_(l))}E_(e){const t=[];return e.forEach(r=>{const s=this.c_(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){G(this.h_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.u_;return L.forEach(t.mutations,s=>{const i=new Xe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.u_=r})}bs(e){}containsKey(e,t){const r=new Xe(t,0),s=this.u_.firstAfterOrEqual(r);return L.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}h_(e,t){return this.l_(e)}l_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}c_(e){const t=this.l_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class b5{constructor(e){this.T_=e,this.docs=function(){return new Ce(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.T_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return L.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(t))}getEntries(e,t){let r=vt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():lt.newInvalidDocument(s))}),L.resolve(r)}getAllEntries(e){let t=vt();return this.docs.forEach((r,s)=>{t=t.insert(r,s.document)}),L.resolve(t)}getDocumentsMatchingQuery(e,t,r,s){let i,o;Ke(t)?(i=ve.fromString(Wa(t)),o=p=>Qa(t,p)):(i=t.path,o=p=>Fa(t,p));let l=vt();const c=new X(i.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:p,value:{document:g}}=h.getNext();if(!i.isPrefixOf(p.path))break;p.path.length>i.length+1||K7(W7(g),r)<=0||(s.has(g.key)||o(g))&&(l=l.insert(g.key,g.mutableCopy()))}return L.resolve(l)}getAllFromCollectionGroup(e,t,r,s){J(9500)}P_(e,t){return L.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new y5(this)}getSize(e){return L.resolve(this.size)}}class y5 extends d5{constructor(e){super(),this.zs=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.zs.addEntry(e,s)):this.zs.removeEntry(r)}),L.waitFor(t)}getFromCache(e,t){return this.zs.getEntry(e,t)}getAllFromCache(e,t){return this.zs.getEntries(e,t)}}/**
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
 */class v5{constructor(e){this.persistence=e,this.R_=new zr(t=>m0(t),g0),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.I_=0,this.A_=new cu,this.targetCount=0,this.V_=cr.xs()}forEachTarget(e,t){return this.R_.forEach((r,s)=>t(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.I_)}allocateTargetId(e){return this.highestTargetId=this.V_.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.I_&&(this.I_=t),L.resolve()}Ms(e){this.R_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.V_=new cr(t),this.highestTargetId=t),e.sequenceNumber>this.I_&&(this.I_=e.sequenceNumber)}addTargetData(e,t){return this.Ms(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.Ms(t),L.resolve()}removeTargetData(e,t){return this.R_.delete(t.target),this.A_.s_(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.R_.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.R_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const r=this.R_.get(t)||null;return L.resolve(r)}addMatchingKeys(e,t,r){return this.A_.n_(t,r),L.resolve()}removeMatchingKeys(e,t,r){this.A_.i_(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.A_.s_(t),L.resolve()}getMatchingKeysForTargetId(e,t){const r=this.A_.o_(t);return L.resolve(r)}containsKey(e,t){return L.resolve(this.A_.containsKey(t))}}/**
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
 */class _0{constructor(e,t){this.d_={},this.overlays={},this.f_=new Oa(0),this.m_=!1,this.m_=!0,this.p_=new w5,this.referenceDelegate=e(this),this.g_=new v5(this),this.indexManager=new l5,this.remoteDocumentCache=function(s){return new b5(s)}(r=>this.referenceDelegate.y_(r)),this.serializer=new o5(t),this.w_=new m5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.m_=!1,Promise.resolve()}get started(){return this.m_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new g5,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.d_[e.toKey()];return r||(r=new _5(t,this.referenceDelegate),this.d_[e.toKey()]=r),r}getGlobalsCache(){return this.p_}getTargetCache(){return this.g_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.w_}runTransaction(e,t,r){j("MemoryPersistence","Starting transaction:",e);const s=new E5(this.f_.next());return this.referenceDelegate.b_(),r(s).next(i=>this.referenceDelegate.v_(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}S_(e,t){return L.or(Object.values(this.d_).map(r=>()=>r.containsKey(e,t)))}}class E5 extends Q7{constructor(e){super(),this.currentSequenceNumber=e}}class uu{constructor(e){this.persistence=e,this.D_=new cu,this.x_=null}static C_(e){return new uu(e)}get F_(){if(this.x_)return this.x_;throw J(60996)}addReference(e,t,r){return this.D_.addReference(r,t),this.F_.delete(r.toString()),L.resolve()}removeReference(e,t,r){return this.D_.removeReference(r,t),this.F_.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.F_.add(t.toString()),L.resolve()}removeTarget(e,t){this.D_.s_(t.targetId).forEach(s=>this.F_.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.F_.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}b_(){this.x_=new Set}v_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.F_,r=>{const s=X.fromPath(r);return this.O_(e,s).next(i=>{i||t.removeEntry(s,se.min())})}).next(()=>(this.x_=null,t.apply(e)))}updateLimboDocument(e,t){return this.O_(e,t).next(r=>{r?this.F_.delete(t.toString()):this.F_.add(t.toString())})}y_(e){return 0}O_(e,t){return L.or([()=>L.resolve(this.D_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.S_(e,t)])}}class ma{constructor(e,t){this.persistence=e,this.M_=new zr(r=>e3(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=v8(this,t)}static C_(e,t){return new ma(e,t)}b_(){}v_(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}lr(e){const t=this.Ls(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Ls(e){let t=0;return this.Er(e,r=>{t++}).next(()=>t)}Er(e,t){return L.forEach(this.M_,(r,s)=>this.Us(e,r,s).next(i=>i?L.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.P_(e,o=>this.Us(e,o,t).next(l=>{l||(r++,i.removeEntry(o,se.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.M_.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.M_.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,t,r){return this.M_.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.M_.set(t,e.currentSequenceNumber),L.resolve()}y_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fo(e.data.value)),t}Us(e,t,r){return L.or([()=>this.persistence.S_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.M_.get(t);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class hu{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.wo=r,this.bo=s}static vo(e,t){let r=he(),s=he();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new hu(e,t.fromCache,r,s)}}/**
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
 */function A5(n,e){return X.comparator(n.key,e.key)}/**
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
 */class T5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class x5{constructor(){this.So=!1,this.Do=!1,this.xo=100,this.Co=function(){return Wm()?8:X7(ct())>0?6:4}()}initialize(e,t){this.Fo=e,this.indexManager=t,this.So=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Oo(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Mo(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new T5;return this.No(e,t,o).next(l=>{if(i.result=l,this.Do)return this.Lo(e,t,o,l.size)})}).next(()=>i.result)}Lo(e,t,r,s){return Ke(t)?L.resolve():r.documentReadCount<this.xo?(ts()<=pe.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",fi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.xo,"documents"),L.resolve()):(ts()<=pe.DEBUG&&j("QueryEngine","Query:",fi(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Co*s?(ts()<=pe.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",fi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rn(t))):L.resolve())}Oo(e,t){if(Ke(t))return L.resolve(null);let r=t;if(id(r))return L.resolve(null);let s=rn(r);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(r.limit!==null&&i===1&&(r=oc(r,null,"F"),s=rn(r)),this.indexManager.getDocumentsMatchingTarget(e,s).next(o=>{const l=he(...o);return this.Fo.getDocuments(e,l).next(c=>this.indexManager.getMinOffset(e,s).next(h=>{const p=this.Bo(r,c);return this.Uo(r,p,l,h.readTime)?this.Oo(e,oc(r,null,"F")):this.ko(e,p,r,h)}))})))}Mo(e,t,r,s){return(Ke(t)?function(o){for(const l of o.stages){if(l instanceof Mr||l instanceof yd)return!1;if(l instanceof Ga){if(l.condition instanceof n0&&l.condition._expr.name==="exists"&&l.condition._expr.params[0]instanceof xs&&l.condition._expr.params[0].fieldName===Qt)continue;return!1}}return!0}(t):id(t))||s.isEqual(se.min())?L.resolve(null):this.Fo.getDocuments(e,r).next(i=>{const o=this.Bo(t,i);return this.Uo(t,o,r,s)?L.resolve(null):(ts()<=pe.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),vd(t)),this.ko(e,o,t,G7(s,Ai)).next(l=>l))})}Bo(e,t){let r,s;return Ke(e)?(r=new He(A5),s=i=>Qa(e,i)):(r=new He(zc(e)),s=i=>Fa(e,i)),t.forEach((i,o)=>{s(o)&&(r=r.add(o))}),r}Uo(e,t,r,s){if(Ke(e))return function(l){return l.stages.some(c=>c instanceof Mr||c instanceof yd)}(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}No(e,t,r){return ts()<=pe.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",vd(t)),this.Fo.getDocumentsMatchingQuery(e,t,rr.min(),r)}ko(e,t,r,s){return this.Fo.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const du="LocalStore",I5=3e8;class C5{constructor(e,t,r,s){this.persistence=e,this.qo=t,this.serializer=s,this.$o=new Ce(fe),this.Ko=new zr(i=>m0(i),g0),this.Wo=new Map,this.Qo=e.getRemoteDocumentCache(),this.g_=e.getTargetCache(),this.w_=e.getBundleCache(),this.Go(r)}Go(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new p5(this.Qo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Qo.setIndexManager(this.indexManager),this.qo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.$o))}}function S5(n,e,t,r){return new C5(n,e,t,r)}async function b0(n,e){const t=oe(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Go(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=he();for(const h of s){o.push(h.batchId);for(const p of h.mutations)c=c.add(p.key)}for(const h of i){l.push(h.batchId);for(const p of h.mutations)c=c.add(p.key)}return t.localDocuments.getDocuments(r,c).next(h=>({zo:h,removedBatchIds:o,addedBatchIds:l}))})})}function R5(n,e){const t=oe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Qo.newChangeBuffer({trackRemovals:!0});return function(l,c,h,p){const g=h.batch,x=g.keys();let S=L.resolve();return x.forEach(R=>{S=S.next(()=>p.getEntry(c,R)).next(B=>{const U=h.docVersions.get(R);G(U!==null,48541),B.version.compareTo(U)<0&&(g.applyToRemoteDocument(B,h),B.isValidDocument()&&(B.setReadTime(h.commitVersion),p.addEntry(B)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=he();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function y0(n){const e=oe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.g_.getLastRemoteSnapshotVersion(t))}function P5(n,e){const t=oe(n),r=e.snapshotVersion;let s=t.$o;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Qo.newChangeBuffer({trackRemovals:!0});s=t.$o;const l=[];e.targetChanges.forEach((p,g)=>{const x=s.get(g);if(!x)return;l.push(t.g_.removeMatchingKeys(i,p.removedDocuments,g).next(()=>t.g_.addMatchingKeys(i,p.addedDocuments,g)));let S=x.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(je.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),s=s.insert(g,S),function(B,U,Q){return B.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=I5?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0}(x,S,p)&&l.push(t.g_.updateTargetData(i,S))});let c=vt(),h=he();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(k5(i,o,e.documentUpdates).next(p=>{c=p.jo,h=p.Ho})),!r.isEqual(se.min())){const p=t.g_.getLastRemoteSnapshotVersion(i).next(g=>t.g_.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return L.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.$o=s,i))}function k5(n,e,t){let r=he(),s=he();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=vt();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(se.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):j(du,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{jo:o,Ho:s}})}function O5(n,e){const t=oe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Fc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function N5(n,e){const t=oe(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.g_.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):t.g_.allocateTargetId(r).next(o=>(s=new gn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.g_.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.$o.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.$o=t.$o.insert(r.targetId,r),t.Ko.set(e,r.targetId)),r})}async function fc(n,e,t){const r=oe(n),s=r.$o.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ts(o))throw o;j(du,`Failed to update sequence numbers for target ${e}: ${o}`)}r.$o=r.$o.remove(e),r.Ko.delete(s.target)}function Ed(n,e,t){const r=oe(n);let s=se.min(),i=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,p){const g=oe(c),x=g.Ko.get(p);return x!==void 0?L.resolve(g.$o.get(x)):g.g_.getTargetData(h,p)}(r,o,Ke(e)?e:rn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.g_.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.qo.getDocumentsMatchingQuery(o,e,t?s:se.min(),t?i:he())).next(l=>(D5(r,l),{documents:l,Jo:i})))}function D5(n,e){e.forEach((t,r)=>{const s=r.key.getCollectionGroup(),i=n.Wo.get(s)||se.min();r.readTime.compareTo(i)>0&&n.Wo.set(s,r.readTime)})}class Ad{constructor(){this.activeTargetIds=M3()}na(e){this.activeTargetIds=this.activeTargetIds.add(e)}ra(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ta(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class L5{constructor(){this.Ua=new Ad,this.ka={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Ua.na(e),this.ka[e]||"not-current"}updateQueryState(e,t,r){this.ka[e]=t}removeLocalQueryTarget(e){this.Ua.ra(e)}isLocalQueryTarget(e){return this.Ua.activeTargetIds.has(e)}clearQueryState(e){delete this.ka[e]}getAllActiveQueryTargets(){return this.Ua.activeTargetIds}isActiveQueryTarget(e){return this.Ua.activeTargetIds.has(e)}start(){return this.Ua=new Ad,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function Fl(){return typeof document<"u"?document:null}/**
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
 */class V5{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.qa=0,this.$a=null,this.Ka=!0}Wa(){this.qa===0&&(this.Qa("Unknown"),this.$a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.$a=null,this.Ga("Backend didn't respond within 10 seconds."),this.Qa("Offline"),Promise.resolve())))}za(e){this.state==="Online"?this.Qa("Unknown"):(this.qa++,this.qa>=1&&(this.ja(),this.Ga(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Qa("Offline")))}set(e){this.ja(),this.qa=0,e==="Online"&&(this.Ka=!1),this.Qa(e)}Qa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ga(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Ka?(Tn(t),this.Ka=!1):j("OnlineStateTracker",t)}ja(){this.$a!==null&&(this.$a.cancel(),this.$a=null)}}/**
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
 */const cn="RemoteStore";class M5{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ha=[],this.Ja=new Map,this.Ya=new Map,this.Za=new Map,this.Xa=new cr(1e3),this.eu=new cr(1001),this.tu=new Set,this.nu=[],this.ru=i,this.ru.bt(o=>{r.enqueueAndForget(async()=>{Wr(this)&&(j(cn,"Restarting streams for network reachability change."),await async function(c){const h=oe(c);h.tu.add(4),await Ji(h),h.iu.set("Unknown"),h.tu.delete(4),await Xa(h)}(this))})}),this.iu=new V5(r,s)}}async function Xa(n){if(Wr(n))for(const e of n.nu)await e(!0)}async function Ji(n){for(const e of n.nu)await e(!1)}function pc(n,e){return n.Ya.get(e)||void 0}function v0(n,e){const t=oe(n),r=pc(t,e.targetId);if(r!==void 0&&t.Ja.has(r))return;const s=function(l,c){const h=pc(l,c);h!==void 0&&l.Za.delete(h);const p=function(x,S){return S%2!=0?x.eu.next():x.Xa.next()}(l,c);return l.Ya.set(c,p),l.Za.set(p,c),p}(t,e.targetId);j(cn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new gn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ja.set(s,i),gu(t)?mu(t):Rs(t).Fn()&&pu(t,i)}function fu(n,e){const t=oe(n),r=Rs(t),s=pc(t,e);j(cn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ja.delete(s),t.Ya.delete(e),t.Za.delete(s),r.Fn()&&E0(t,s),t.Ja.size===0&&(r.Fn()?r.Nn():Wr(t)&&t.iu.set("Unknown"))}function pu(n,e){if(n.su.We(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.Za.get(e.targetId);if(t===void 0)return void j(cn,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}Rs(n).jn(e)}function E0(n,e){n.su.We(e),Rs(n).Hn(e)}function mu(n){n.su=new U3({getRemoteKeysForTarget:e=>{const t=n.Za.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):he()},dt:e=>n.Ja.get(e)||null,Tt:()=>n.datastore.serializer.databaseId}),Rs(n).start(),n.iu.Wa()}function gu(n){return Wr(n)&&!Rs(n).Cn()&&n.Ja.size>0}function Wr(n){return oe(n).tu.size===0}function A0(n){n.su=void 0}async function B5(n){n.iu.set("Online")}async function F5(n){n.Ja.forEach((e,t)=>{pu(n,e)})}async function U5(n,e){A0(n),gu(n)?(n.iu.za(e),mu(n)):n.iu.set("Unknown")}async function $5(n,e,t){if(n.iu.set("Online"),e instanceof Df&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds){if(s.Ja.has(l)){const c=s.Za.get(l);c!==void 0&&(await s.remoteSyncer.rejectListen(c,o),s.Ya.delete(c),s.Za.delete(l)),s.Ja.delete(l)}s.su.removeTarget(l)}}(n,e)}catch(r){j(cn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ga(n,r)}else if(e instanceof $o?n.su.et(e):e instanceof Nf?n.su.ot(e):n.su.rt(e),!t.isEqual(se.min()))try{const r=await y0(n.localStore);t.compareTo(r)>=0&&await function(i,o){const l=i.su.Rt(o);l.targetChanges.forEach((h,p)=>{if(h.resumeToken.approximateByteSize()>0){const g=i.Ja.get(p);g&&i.Ja.set(p,g.withResumeToken(h.resumeToken,o))}}),l.targetMismatches.forEach((h,p)=>{const g=i.Ja.get(h);if(!g)return;i.Ja.set(h,g.withResumeToken(je.EMPTY_BYTE_STRING,g.snapshotVersion)),E0(i,h);const x=new gn(g.target,h,p,g.sequenceNumber);pu(i,x)});const c=function(p,g){const x=new Map;g.targetChanges.forEach((R,B)=>{const U=p.Za.get(B);U!==void 0&&x.set(U,R)});let S=new Ce(fe);return g.targetMismatches.forEach((R,B)=>{const U=p.Za.get(R);U!==void 0&&(S=S.insert(U,B))}),new Yi(g.snapshotVersion,x,S,g.documentUpdates,g.augmentedDocumentUpdates,g.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){j(cn,"Failed to raise snapshot:",r),await ga(n,r)}}async function ga(n,e,t){if(!Ts(e))throw e;n.tu.add(1),await Ji(n),n.iu.set("Offline"),t||(t=()=>y0(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{j(cn,"Retrying IndexedDB access"),await t(),n.tu.delete(1),await Xa(n)})}function T0(n,e){return e().catch(t=>ga(n,t,e))}async function Ja(n){const e=oe(n),t=ur(e);let r=e.Ha.length>0?e.Ha[e.Ha.length-1].batchId:Fc;for(;H5(e);)try{const s=await O5(e.localStore,r);if(s===null){e.Ha.length===0&&t.Nn();break}r=s.batchId,j5(e,s)}catch(s){await ga(e,s)}x0(e)&&I0(e)}function H5(n){return Wr(n)&&n.Ha.length<10}function j5(n,e){n.Ha.push(e);const t=ur(n);t.Fn()&&t.Jn&&t.Yn(e.mutations)}function x0(n){return Wr(n)&&!ur(n).Cn()&&n.Ha.length>0}function I0(n){ur(n).start()}async function q5(n){ur(n).er()}async function z5(n){const e=ur(n);for(const t of n.Ha)e.Yn(t.mutations)}async function G5(n,e,t){const r=n.Ha.shift(),s=lu.from(r,e,t);await T0(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ja(n)}async function W5(n,e){e&&ur(n).Jn&&await async function(r,s){if(function(o){return O3(o)&&o!==V.ABORTED}(s.code)){const i=r.Ha.shift();ur(r).Mn(),await T0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ja(r)}}(n,e),x0(n)&&I0(n)}async function Td(n,e){const t=oe(n);t.asyncQueue.verifyOperationInProgress(),j(cn,"RemoteStore received new credentials");const r=Wr(t);t.tu.add(3),await Ji(t),r&&t.iu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.tu.delete(3),await Xa(t)}async function K5(n,e){const t=oe(n);e?(t.tu.delete(2),await Xa(t)):e||(t.tu.add(2),await Ji(t),t.iu.set("Unknown"))}function Rs(n){return n._u||(n._u=function(t,r,s){const i=oe(t);return i.nr(),new u8(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Qt:B5.bind(null,n),zt:F5.bind(null,n),Ht:U5.bind(null,n),zn:$5.bind(null,n)}),n.nu.push(async e=>{e?(n._u.Mn(),gu(n)?mu(n):n.iu.set("Unknown")):(await n._u.stop(),A0(n))})),n._u}function ur(n){return n.ou||(n.ou=function(t,r,s){const i=oe(t);return i.nr(),new h8(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Qt:()=>Promise.resolve(),zt:q5.bind(null,n),Ht:W5.bind(null,n),Zn:z5.bind(null,n),Xn:G5.bind(null,n)}),n.nu.push(async e=>{e?(n.ou.Mn(),await Ja(n)):(await n.ou.stop(),n.Ha.length>0&&(j(cn,`Stopping write stream with ${n.Ha.length} pending writes`),n.Ha=[]))})),n.ou}/**
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
 */class wu{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new _n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,l=new wu(e,t,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _u(n,e){if(Tn("AsyncQueue",`${e}: ${n}`),Ts(n))return new z(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Sr{static emptySet(e){return new Sr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(t,r)=>X.comparator(t.key,r.key),this.keyedMap=ns(),this.sortedSet=new Ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Sr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Sr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class xd{constructor(){this.au=new Ce(X.comparator)}track(e){const t=e.doc.key,r=this.au.get(t);r?e.type!==0&&r.type===3?this.au=this.au.insert(t,e):e.type===3&&r.type!==1?this.au=this.au.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.au=this.au.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.au=this.au.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.au=this.au.remove(t):e.type===1&&r.type===2?this.au=this.au.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.au=this.au.insert(t,{type:2,doc:e.doc}):J(63341,{ft:e,uu:r}):this.au=this.au.insert(t,e)}cu(){const e=[];return this.au.inorderTraversal((t,r)=>{e.push(r)}),e}}class _s{constructor(e,t,r,s,i,o,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new _s(e,t,Sr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ya(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Y5{constructor(){this.lu=void 0,this.Eu=[]}hu(){return this.Eu.some(e=>e.Tu())}}class Q5{constructor(){this.queries=Id(),this.onlineState="Unknown",this.Pu=new Set}terminate(){(function(t,r){const s=oe(t),i=s.queries;s.queries=Id(),i.forEach((o,l)=>{for(const c of l.Eu)c.onError(r)})})(this,new z(V.ABORTED,"Firestore shutting down"))}}function Id(){return new zr(n=>p0(n),Ya)}async function C0(n,e){const t=oe(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.hu()&&e.Tu()&&(r=2):(i=new Y5,r=e.Tu()?0:1);try{switch(r){case 0:i.lu=await t.onListen(s,!0);break;case 1:i.lu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=_u(o,`Initialization of query '${Ke(e.query)?yn(e.query):fi(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Eu.push(e),e.Ru(t.onlineState),i.lu&&e.Iu(i.lu)&&bu(t)}async function S0(n,e){const t=oe(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.Eu.indexOf(e);o>=0&&(i.Eu.splice(o,1),i.Eu.length===0?s=e.Tu()?0:1:!i.hu()&&e.Tu()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function X5(n,e){const t=oe(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const l of o.Eu)l.Iu(s)&&(r=!0);o.lu=s}}r&&bu(t)}function J5(n,e,t){const r=oe(n),s=r.queries.get(e);if(s)for(const i of s.Eu)i.onError(t);r.queries.delete(e)}function bu(n){n.Pu.forEach(e=>{e.next()})}var mc;(function(n){n.Default="default",n.Cache="cache"})(mc||(mc={}));class R0{constructor(e,t,r){this.query=e,this.Au=t,this.Vu=!1,this.du=null,this.onlineState="Unknown",this.options=r||{}}Iu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new _s(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.fu(e)&&(this.Au.next(e),t=!0):this.mu(e,this.onlineState)&&(this.pu(e),t=!0),this.du=e,t}onError(e){this.Au.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.du&&!this.Vu&&this.mu(this.du,e)&&(this.pu(this.du),t=!0),t}mu(e,t){if(!e.fromCache||!this.Tu())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}fu(e){if(e.docChanges.length>0)return!0;const t=this.du&&this.du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}pu(e){e=_s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.Au.next(e)}Tu(){return this.options.source!==mc.Cache}}/**
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
 */class P0{constructor(e){this.key=e}}class k0{constructor(e){this.key=e}}class Z5{constructor(e,t){this.query=e,this.Ou=t,this.Mu=null,this.hasCachedResults=!1,this.current=!1,this.Nu=he(),this.mutatedKeys=he(),this.Lu=Ke(e)?dc(e):zc(e),this.Bu=new Sr(this.Lu)}get Uu(){return this.Ou}ku(e,t){const r=t?t.qu:new xd,s=t?t.Bu:this.Bu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const[c,h]=this.$u(this.query,s);e.inorderTraversal((g,x)=>{const S=s.get(g),R=u5(this.query,x)?x:null,B=!!S&&this.mutatedKeys.has(S.key),U=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let Q=!1;S&&R?S.data.isEqual(R.data)?B!==U&&(r.track({type:3,doc:R}),Q=!0):this.Ku(S,R)||(r.track({type:2,doc:R}),Q=!0,(c&&this.Lu(R,c)>0||h&&this.Lu(R,h)<0)&&(l=!0)):!S&&R?(r.track({type:0,doc:R}),Q=!0):S&&!R&&(r.track({type:1,doc:S}),Q=!0,(c||h)&&(l=!0)),Q&&(R?(o=o.add(R),i=U?i.add(g):i.delete(g)):(o=o.delete(g),i=i.delete(g)))});const p=this.Wu(this.query);if(p)if(Ke(this.query)){const g=[];o.forEach(R=>g.push(R));const x=w0(this.query,g);let S=new Sr(dc(this.query));for(const R of x)S=S.add(R);o.forEach(R=>{S.has(R.key)||(i=i.delete(R.key),r.track({type:1,doc:R}))}),o=S}else{const g=this.Qu(this.query);for(;o.size>p;){const x=g==="F"?o.last():o.first();o=o.delete(x.key),i=i.delete(x.key),r.track({type:1,doc:x})}}return{Bu:o,qu:r,Uo:l,mutatedKeys:i}}Wu(e){var t;return Ke(e)?(t=Bl(e))==null?void 0:t.limit:e.limit||void 0}Qu(e){if(Ke(e)){const t=Bl(e);return t&&t.limit<0?"L":"F"}return e.limitType}$u(e,t){var r;if(Ke(e)){const s=(r=Bl(e))==null?void 0:r.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.Wu(this.query)?t.last():null,e.limitType==="L"&&t.size===this.Wu(this.query)?t.first():null]}Ku(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Bu;this.Bu=e.Bu,this.mutatedKeys=e.mutatedKeys;const o=e.qu.cu();o.sort((p,g)=>function(S,R){const B=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{ft:U})}};return B(S)-B(R)}(p.type,g.type)||this.Lu(p.doc,g.doc)),this.Gu(r),s=s??!1;const l=t&&!s?this.zu():[],c=this.Nu.size===0&&this.current&&!s?1:0,h=c!==this.Mu;return this.Mu=c,o.length!==0||h?{snapshot:new _s(this.query,e.Bu,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ju:l}:{ju:l}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Bu:this.Bu,qu:new xd,mutatedKeys:this.mutatedKeys,Uo:!1},!1)):{ju:[]}}Hu(e){return!this.Ou.has(e)&&!!this.Bu.has(e)&&!this.Bu.get(e).hasLocalMutations}Gu(e){e&&(e.addedDocuments.forEach(t=>this.Ou=this.Ou.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ou=this.Ou.delete(t)),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Nu;this.Nu=he(),this.Bu.forEach(r=>{this.Hu(r.key)&&(this.Nu=this.Nu.add(r.key))});const t=[];return e.forEach(r=>{this.Nu.has(r)||t.push(new k0(r))}),this.Nu.forEach(r=>{e.has(r)||t.push(new P0(r))}),t}Ju(e){this.Ou=e.Jo,this.Nu=he();const t=this.ku(e.documents);return this.applyChanges(t,!0)}Yu(){return _s.fromInitialDocuments(this.query,this.Bu,this.mutatedKeys,this.Mu===0,this.hasCachedResults)}}const yu="SyncEngine";class ew{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class tw{constructor(e){this.key=e,this.Zu=!1}}class nw{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Xu={},this.ec=new zr(l=>p0(l),Ya),this.tc=new Map,this.nc=new Set,this.rc=new Ce(X.comparator),this.sc=new Map,this._c=new cu,this.oc={},this.ac=new Map,this.uc=cr.Cs(),this.onlineState="Unknown",this.cc=void 0}get isPrimaryClient(){return this.cc===!0}}async function rw(n,e,t=!0){const r=M0(n);let s;const i=r.ec.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Yu()):s=await O0(r,e,t,!0),s}async function sw(n,e){const t=M0(n);await O0(t,e,!0,!1)}async function O0(n,e,t,r){const s=await N5(n.localStore,Ke(e)?e:rn(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await iw(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&v0(n.remoteStore,s),l}async function iw(n,e,t,r,s){n.lc=(g,x,S)=>async function(B,U,Q,re){let ue=U.view.ku(Q);ue.Uo&&(ue=await Ed(B.localStore,U.query,!1).then(({documents:A})=>U.view.ku(A,ue)));const me=re&&re.targetChanges.get(U.targetId),F=re&&re.targetMismatches.get(U.targetId)!=null,M=U.view.applyChanges(ue,B.isPrimaryClient,me,F);return Sd(B,U.targetId,M.ju),M.snapshot}(n,g,x,S);const i=await Ed(n.localStore,e,!0),o=new Z5(e,i.Jo),l=o.ku(i.documents),c=Qi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=o.applyChanges(l,n.isPrimaryClient,c);Sd(n,t,h.ju);const p=new ew(e,t,o);return n.ec.set(e,p),n.tc.has(t)?n.tc.get(t).push(e):n.tc.set(t,[e]),h.snapshot}async function ow(n,e,t){const r=oe(n),s=r.ec.get(e),i=r.tc.get(s.targetId);if(i.length>1)return r.tc.set(s.targetId,i.filter(o=>!Ya(o,e))),void r.ec.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await fc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&fu(r.remoteStore,s.targetId),gc(r,s.targetId)}).catch(As)):(gc(r,s.targetId),await fc(r.localStore,s.targetId,!0))}async function aw(n,e){const t=oe(n),r=t.ec.get(e),s=t.tc.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),fu(t.remoteStore,r.targetId))}async function lw(n,e,t){const r=mw(n);try{const s=await function(o,l){const c=oe(o),h=Ie.now(),p=l.reduce((S,R)=>S.add(R.key),he());let g,x;return c.persistence.runTransaction("Locally write mutations","readwrite",S=>{let R=vt(),B=he();return c.Qo.getEntries(S,p).next(U=>{R=U,R.forEach((Q,re)=>{re.isValidDocument()||(B=B.add(Q))})}).next(()=>c.localDocuments.getOverlayedDocuments(S,R)).next(U=>{g=U;const Q=[];for(const re of l){const ue=f3(re,g.get(re.key).overlayedDocument);ue!=null&&Q.push(new qr(re.key,ue,ff(ue.value.mapValue),nn.exists(!0)))}return c.mutationQueue.addMutationBatch(S,h,Q,l)}).next(U=>{x=U;const Q=U.applyToLocalDocumentSet(g,B);return c.documentOverlayCache.saveOverlays(S,U.batchId,Q)})}).then(()=>({batchId:x.batchId,changes:kf(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.oc[o.currentUser.toKey()];h||(h=new Ce(fe)),h=h.insert(l,c),o.oc[o.currentUser.toKey()]=h}(r,s.batchId,t),await Zi(r,s.changes),await Ja(r.remoteStore)}catch(s){const i=_u(s,"Failed to persist write");t.reject(i)}}async function N0(n,e){const t=oe(n);try{const r=await P5(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.sc.get(i);o&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Zu=!0:s.modifiedDocuments.size>0?G(o.Zu,14607):s.removedDocuments.size>0&&(G(o.Zu,42227),o.Zu=!1))}),await Zi(t,r,e)}catch(r){await As(r)}}function Cd(n,e,t){const r=oe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ec.forEach((i,o)=>{const l=o.view.Ru(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=oe(o);c.onlineState=l;let h=!1;c.queries.forEach((p,g)=>{for(const x of g.Eu)x.Ru(l)&&(h=!0)}),h&&bu(c)}(r.eventManager,e),s.length&&r.Xu.zn(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cw(n,e,t){const r=oe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.sc.get(e),i=s&&s.key;if(i){let o=new Ce(X.comparator);o=o.insert(i,lt.newNoDocument(i,se.min()));const l=he().add(i),c=new Yi(se.min(),new Map,new Ce(fe),o,vt(),l);await N0(r,c),r.rc=r.rc.remove(i),r.sc.delete(e),vu(r)}else await fc(r.localStore,e,!1).then(()=>gc(r,e,t)).catch(As)}async function uw(n,e){const t=oe(n),r=e.batch.batchId;try{const s=await R5(t.localStore,e);L0(t,r,null),D0(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Zi(t,s)}catch(s){await As(s)}}async function hw(n,e,t){const r=oe(n);try{const s=await function(o,l){const c=oe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return c.mutationQueue.lookupMutationBatch(h,l).next(g=>(G(g!==null,37113),p=g.keys(),c.mutationQueue.removeMutationBatch(h,g))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>c.localDocuments.getDocuments(h,p))})}(r.localStore,e);L0(r,e,t),D0(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Zi(r,s)}catch(s){await As(s)}}function D0(n,e){(n.ac.get(e)||[]).forEach(t=>{t.resolve()}),n.ac.delete(e)}function L0(n,e,t){const r=oe(n);let s=r.oc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.oc[r.currentUser.toKey()]=s}}function gc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.tc.get(e))n.ec.delete(r),t&&n.Xu.Ec(r,t);n.tc.delete(e),n.isPrimaryClient&&n._c.s_(e).forEach(r=>{n._c.containsKey(r)||V0(n,r)})}function V0(n,e){n.nc.delete(e.path.canonicalString());const t=n.rc.get(e);t!==null&&(fu(n.remoteStore,t),n.rc=n.rc.remove(e),n.sc.delete(t),vu(n))}function Sd(n,e,t){for(const r of t)r instanceof P0?(n._c.addReference(r.key,e),dw(n,r)):r instanceof k0?(j(yu,"Document no longer in limbo: "+r.key),n._c.removeReference(r.key,e),n._c.containsKey(r.key)||V0(n,r.key)):J(19791,{hc:r})}function dw(n,e){const t=e.key,r=t.path.canonicalString();n.rc.get(t)||n.nc.has(r)||(j(yu,"New document in limbo: "+t),n.nc.add(r),vu(n))}function vu(n){for(;n.nc.size>0&&n.rc.size<n.maxConcurrentLimboResolutions;){const e=n.nc.values().next().value;n.nc.delete(e);const t=new X(ve.fromString(e)),r=n.uc.next();n.sc.set(r,new tw(t)),n.rc=n.rc.insert(t,r),v0(n.remoteStore,new gn(rn(qc(t.path)),r,"TargetPurposeLimboResolution",Oa.ce))}}async function Zi(n,e,t){const r=oe(n),s=[],i=[],o=[];r.ec.isEmpty()||(r.ec.forEach((l,c)=>{o.push(r.lc(c,e,t).then(h=>{var p;if((h||t)&&r.isPrimaryClient){const g=h?!h.fromCache:(p=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(h){s.push(h);const g=hu.vo(c.targetId,h);i.push(g)}}))}),await Promise.all(o),r.Xu.zn(s),await async function(c,h){const p=oe(c);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>L.forEach(h,x=>L.forEach(x.wo,S=>p.persistence.referenceDelegate.addReference(g,x.targetId,S)).next(()=>L.forEach(x.bo,S=>p.persistence.referenceDelegate.removeReference(g,x.targetId,S)))))}catch(g){if(!Ts(g))throw g;j(du,"Failed to update sequence numbers: "+g)}for(const g of h){const x=g.targetId;if(!g.fromCache){const S=p.$o.get(x),R=S.snapshotVersion,B=S.withLastLimboFreeSnapshotVersion(R);p.$o=p.$o.insert(x,B)}}}(r.localStore,i))}async function fw(n,e){const t=oe(n);if(!t.currentUser.isEqual(e)){j(yu,"User change. New user:",e.toKey());const r=await b0(t.localStore,e);t.currentUser=e,function(i,o){i.ac.forEach(l=>{l.forEach(c=>{c.reject(new z(V.CANCELLED,o))})}),i.ac.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zi(t,r.zo)}}function pw(n,e){const t=oe(n),r=t.sc.get(e);if(r&&r.Zu)return he().add(r.key);{let s=he();const i=t.tc.get(e);if(!i)return s;for(const o of i??[]){const l=t.ec.get(o);s=s.unionWith(l.view.Uu)}return s}}function M0(n){const e=oe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=N0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cw.bind(null,e),e.Xu.zn=X5.bind(null,e.eventManager),e.Xu.Ec=J5.bind(null,e.eventManager),e}function mw(n){const e=oe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hw.bind(null,e),e}class wa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ua(e.databaseInfo.databaseId),this.sharedClientState=this.Rc(e),this.persistence=this.Ic(e),await this.persistence.start(),this.localStore=this.Ac(e),this.gcScheduler=this.Vc(e,this.localStore),this.indexBackfillerScheduler=this.dc(e,this.localStore)}Vc(e,t){return null}dc(e,t){return null}Ac(e){return S5(this.persistence,new x5,e.initialUser,this.serializer)}Ic(e){return new _0(uu.C_,this.serializer)}Rc(e){return new L5}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wa.provider={build:()=>new wa};class gw extends wa{constructor(e){super(),this.cacheSizeBytes=e}Vc(e,t){G(this.persistence.referenceDelegate instanceof ma,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new b8(r,e.asyncQueue,t)}Ic(e){const t=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new _0(r=>ma.C_(r,t),this.serializer)}}class wc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Cd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fw.bind(null,this.syncEngine),await K5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Q5}()}createDatastore(e){const t=Ua(e.databaseInfo.databaseId),r=c8(e.databaseInfo);return p8(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,l){return new M5(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Cd(this.syncEngine,t,0),function(){return dd.C()?new dd:new i8}())}createSyncEngine(e,t){return function(s,i,o,l,c,h,p){const g=new nw(s,i,o,l,c,h);return p&&(g.cc=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=oe(s);j(cn,"RemoteStore shutting down."),i.tu.add(5),await Ji(i),i.ru.shutdown(),i.iu.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}wc.provider={build:()=>new wc};/**
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
 */class B0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.mc(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.mc(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString()))}gc(){this.muted=!0}mc(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const hr="FirestoreClient";class ww{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=at.UNAUTHENTICATED,this.clientId=Mc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{j(hr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(j(hr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=_u(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ul(n,e){n.asyncQueue.verifyOperationInProgress(),j(hr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await b0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Rd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await _w(n);j(hr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Td(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Td(e.remoteStore,s)),n._onlineComponents=e}async function _w(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j(hr,"Using user provided OfflineComponentProvider");try{await Ul(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;zt("Error using user provided cache. Falling back to memory cache: "+t),await Ul(n,new wa)}}else j(hr,"Using default OfflineComponentProvider"),await Ul(n,new gw(void 0));return n._offlineComponents}async function F0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j(hr,"Using user provided OnlineComponentProvider"),await Rd(n,n._uninitializedComponentsProvider._online)):(j(hr,"Using default OnlineComponentProvider"),await Rd(n,new wc))),n._onlineComponents}function bw(n){return F0(n).then(e=>e.syncEngine)}async function U0(n){const e=await F0(n),t=e.eventManager;return t.onListen=rw.bind(null,e.syncEngine),t.onUnlisten=ow.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=aw.bind(null,e.syncEngine),t}function yw(n,e,t={}){const r=new _n;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const p=new B0({next:x=>{p.gc(),o.enqueueAndForget(()=>S0(i,g));const S=x.docs.has(l);!S&&x.fromCache?h.reject(new z(V.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&x.fromCache&&c&&c.source==="server"?h.reject(new z(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(x)},error:x=>h.reject(x)}),g=new R0(qc(l.path),p,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return C0(i,g)}(await U0(n),n.asyncQueue,e,t,r)),r.promise}function vw(n,e,t={}){const r=new _n;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const p=new B0({next:x=>{p.gc(),o.enqueueAndForget(()=>S0(i,g)),x.fromCache&&c.source==="server"?h.reject(new z(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(x)},error:x=>h.reject(x)}),g=new R0(l instanceof mi?r5(l):l,p,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return C0(i,g)}(await U0(n),n.asyncQueue,e,t,r)),r.promise}function Ew(n,e){const t=new _n;return n.asyncQueue.enqueueAndForget(async()=>lw(await bw(n),e,t)),t.promise}/**
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
 */const Pd="AsyncQueue";class kd{constructor(e=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Wc=null,this.Qc=!1,this.Gc=!1,this.zc=[],this.xn=new Gf(this,"async_queue_retry"),this.jc=()=>{const r=Fl();r&&j(Pd,"Visibility state changed to "+r.visibilityState),this.xn.gn()},this.Hc=e;const t=Fl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.$c){this.$c=!0,this.Gc=e||!1;const t=Fl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Jc(),this.$c)return new Promise(()=>{});const t=new _n;return this.Yc(()=>this.$c&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.qc.push(e),this.Zc()))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.xn.reset()}catch(e){if(!Ts(e))throw e;j(Pd,"Operation failed with retryable error: "+e)}this.qc.length>0&&this.xn.mn(()=>this.Zc())}}Yc(e){const t=this.Hc.then(()=>(this.Qc=!0,e().catch(r=>{throw this.Wc=r,this.Qc=!1,Tn("INTERNAL UNHANDLED ERROR: ",Od(r)),r}).then(r=>(this.Qc=!1,r))));return this.Hc=t,t}enqueueAfterDelay(e,t,r){this.Jc(),this.zc.indexOf(e)>-1&&(t=0);const s=wu.createAndSchedule(this,e,t,r,i=>this.Xc(i));return this.Kc.push(s),s}Jc(){this.Wc&&J(47125,{el:Od(this.Wc)})}verifyOperationInProgress(){}async tl(){let e;do e=this.Hc,await e;while(e!==this.Hc)}nl(e){for(const t of this.Kc)if(t.timerId===e)return!0;return!1}rl(e){return this.tl().then(()=>{this.Kc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Kc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tl()})}il(e){this.zc.push(e)}Xc(e){const t=this.Kc.indexOf(e);this.Kc.splice(t,1)}}function Od(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class eo extends $a{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new kd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new kd(e),this._firestoreClient=void 0,await e}}}function Aw(n,e){const t=typeof n=="object"?n:Cc(),r=typeof n=="string"?n:ra,s=Ca(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=n2("firestore");i&&E8(s,...i)}return s}function Eu(n){if(n._terminated)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Tw(n),n._firestoreClient}function Tw(n){var r,s,i,o;const e=n._freezeSettings(),t=g8(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new ww(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class xw{convertValue(e,t="none"){switch(qe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return jr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Ii].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Re(o.doubleValue));return new Et(t)}convertGeoPoint(e){return new on(Re(e.latitude),Re(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Wi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ps(e));default:return null}}convertTimestamp(e){const t=sr(e);return new Ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ve.fromString(e);G($f(r),9688,{name:e});const s=new xi(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(t)||Tn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class $0 extends xw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,t)}}const Nd="@firebase/firestore",Dd="4.16.0";/**
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
 */class H0{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Iw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(ja("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Iw extends H0{data(){return super.data()}}/**
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
 */function Cw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new z(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function Sw(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class ii{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rr extends H0{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ja("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Rr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Rr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Rr._jsonSchema={type:Ue("string",Rr._jsonSchemaVersion),bundleSource:Ue("string","DocumentSnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class qo extends Rr{data(e={}){return super.data(e)}}class hs{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ii(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new qo(this._firestore,this._userDataWriter,r.key,r,new ii(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new z(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{Ke(s._snapshot.query)?dc(s._snapshot.query):zc(s.query._query);const c=new qo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ii(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new qo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ii(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,p=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:Rw(l.type),doc:c,oldIndex:h,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=hs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Mc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Rw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:n})}}/**
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
 */hs._jsonSchemaVersion="firestore/querySnapshot/1.0",hs._jsonSchema={type:Ue("string",hs._jsonSchemaVersion),bundleSource:Ue("string","QuerySnapshot"),bundleName:Ue("string"),bundle:Ue("string")};/**
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
 */function Au(n){n=nr(n,$e);const e=nr(n.firestore,eo),t=Eu(e);return yw(t,n._key).then(r=>kw(e,n,r))}function $l(n){n=nr(n,Ha);const e=nr(n.firestore,eo),t=Eu(e),r=new $0(e);return Cw(n._query),vw(t,n._query).then(s=>new hs(e,r,n,s))}function Bi(n,e,t){n=nr(n,$e);const r=nr(n.firestore,eo),s=Sw(n.converter,e,t),i=I8(r);return j0(r,[C8(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,nn.none())])}function Pw(n){return j0(nr(n.firestore,eo),[new jc(n._key,nn.none())])}function j0(n,e){const t=Eu(n);return Ew(t,e)}function kw(n,e,t){const r=t.docs.get(e._key),s=new $0(n);return new Rr(n,s,e._key,r,new ii(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){D7($r),Nr(new er("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new eo(new M7(r.getProvider("auth-internal")),new U7(o,r.getProvider("app-check-internal")),i3(o,s),o);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Zt(Nd,Dd,e),Zt(Nd,Dd,"esm2020")})();var Ow="firebase",Nw="12.15.0";/**
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
 */Zt(Ow,Nw,"app");/**
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
 */const q0="firebasestorage.googleapis.com",z0="storageBucket",Dw=2*60*1e3,Lw=10*60*1e3;/**
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
 */class Oe extends hn{constructor(e,t,r=0){super(Hl(e),`Firebase Storage: ${t} (${Hl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Oe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Hl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ke;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ke||(ke={}));function Hl(n){return"storage/"+n}function Tu(){const n="An unknown error occurred, please check the error payload for server response.";return new Oe(ke.UNKNOWN,n)}function Vw(n){return new Oe(ke.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Mw(n){return new Oe(ke.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Bw(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Oe(ke.UNAUTHENTICATED,n)}function Fw(){return new Oe(ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Uw(n){return new Oe(ke.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function $w(){return new Oe(ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Hw(){return new Oe(ke.CANCELED,"User canceled the upload/download.")}function jw(n){return new Oe(ke.INVALID_URL,"Invalid URL '"+n+"'.")}function qw(n){return new Oe(ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function zw(){return new Oe(ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+z0+"' property when initializing the app?")}function Gw(){return new Oe(ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ww(){return new Oe(ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Kw(n){return new Oe(ke.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function _c(n){return new Oe(ke.INVALID_ARGUMENT,n)}function G0(){return new Oe(ke.APP_DELETED,"The Firebase app was deleted.")}function Yw(n){return new Oe(ke.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wi(n,e){return new Oe(ke.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Zs(n){throw new Oe(ke.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Nt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Nt.makeFromUrl(e,t)}catch{return new Nt(e,"")}if(r.path==="")return r;throw qw(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(me){me.path.charAt(me.path.length-1)==="/"&&(me.path_=me.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function h(me){me.path_=decodeURIComponent(me.path)}const p="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),x="(/([^?#]*).*)?$",S=new RegExp(`^https?://${g}/${p}/b/${s}/o${x}`,"i"),R={bucket:1,path:3},B=t===q0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,U="([^?#]*)",Q=new RegExp(`^https?://${B}/${s}/${U}`,"i"),ue=[{regex:l,indices:c,postModify:i},{regex:S,indices:R,postModify:h},{regex:Q,indices:{bucket:1,path:2},postModify:h}];for(let me=0;me<ue.length;me++){const F=ue[me],M=F.regex.exec(e);if(M){const A=M[F.indices.bucket];let y=M[F.indices.path];y||(y=""),r=new Nt(A,y),F.postModify(r);break}}if(r==null)throw jw(e);return r}}class Qw{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Xw(n,e,t){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let h=!1;function p(...U){h||(h=!0,e.apply(null,U))}function g(U){s=setTimeout(()=>{s=null,n(S,c())},U)}function x(){i&&clearTimeout(i)}function S(U,...Q){if(h){x();return}if(U){x(),p.call(null,U,...Q);return}if(c()||o){x(),p.call(null,U,...Q);return}r<64&&(r*=2);let ue;l===1?(l=2,ue=0):ue=(r+Math.random())*1e3,g(ue)}let R=!1;function B(U){R||(R=!0,x(),!h&&(s!==null?(U||(l=2),clearTimeout(s),g(0)):U||(l=1)))}return g(0),i=setTimeout(()=>{o=!0,B(!0)},t),B}function Jw(n){n(!1)}/**
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
 */function Zw(n){return n!==void 0}function e_(n){return typeof n=="object"&&!Array.isArray(n)}function xu(n){return typeof n=="string"||n instanceof String}function Ld(n){return Iu()&&n instanceof Blob}function Iu(){return typeof Blob<"u"}function Vd(n,e,t,r){if(r<e)throw _c(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw _c(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Cu(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function W0(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Pr;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Pr||(Pr={}));/**
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
 */function t_(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class n_{constructor(e,t,r,s,i,o,l,c,h,p,g,x=!0,S=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=h,this.progressCallback_=p,this.connectionFactory_=g,this.retry=x,this.isUsingEmulator=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,B)=>{this.resolve_=R,this.reject_=B,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ro(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Pr.NO_ERROR,c=i.getStatus();if(!l||t_(c,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===Pr.ABORT;r(!1,new Ro(!1,null,p));return}const h=this.successCodes_.indexOf(c)!==-1;r(!0,new Ro(h,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());Zw(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=Tu();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?G0():Hw();o(c)}else{const c=$w();o(c)}};this.canceled_?t(!1,new Ro(!1,null,!0)):this.backoffId_=Xw(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Jw(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ro{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function r_(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function s_(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function i_(n,e){e&&(n["X-Firebase-GMPID"]=e)}function o_(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function a_(n,e,t,r,s,i,o=!0,l=!1){const c=W0(n.urlParams),h=n.url+c,p=Object.assign({},n.headers);return i_(p,e),r_(p,t),s_(p,i),o_(p,r),new n_(h,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,l)}/**
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
 */function l_(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function c_(...n){const e=l_();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Iu())return new Blob(n);throw new Oe(ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function u_(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function h_(n){if(typeof atob>"u")throw Kw("base-64");return atob(n)}/**
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
 */const Jt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class jl{constructor(e,t){this.data=e,this.contentType=t||null}}function d_(n,e){switch(n){case Jt.RAW:return new jl(K0(e));case Jt.BASE64:case Jt.BASE64URL:return new jl(Y0(n,e));case Jt.DATA_URL:return new jl(p_(e),m_(e))}throw Tu()}function K0(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function f_(n){let e;try{e=decodeURIComponent(n)}catch{throw wi(Jt.DATA_URL,"Malformed data URL.")}return K0(e)}function Y0(n,e){switch(n){case Jt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw wi(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Jt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw wi(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=h_(e)}catch(s){throw s.message.includes("polyfill")?s:wi(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class Q0{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw wi(Jt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=g_(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function p_(n){const e=new Q0(n);return e.base64?Y0(Jt.BASE64,e.rest):f_(e.rest)}function m_(n){return new Q0(n).contentType}function g_(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class jn{constructor(e,t){let r=0,s="";Ld(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ld(this.data_)){const r=this.data_,s=u_(r,e,t);return s===null?null:new jn(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new jn(r,!0)}}static getBlob(...e){if(Iu()){const t=e.map(r=>r instanceof jn?r.data_:r);return new jn(c_.apply(null,t))}else{const t=e.map(o=>xu(o)?d_(Jt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new jn(s,!0)}}uploadData(){return this.data_}}/**
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
 */function X0(n){let e;try{e=JSON.parse(n)}catch{return null}return e_(e)?e:null}/**
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
 */function w_(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function __(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function J0(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function b_(n,e){return e}class pt{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||b_}}let Po=null;function y_(n){return!xu(n)||n.length<2?n:J0(n)}function Z0(){if(Po)return Po;const n=[];n.push(new pt("bucket")),n.push(new pt("generation")),n.push(new pt("metageneration")),n.push(new pt("name","fullPath",!0));function e(i,o){return y_(o)}const t=new pt("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new pt("size");return s.xform=r,n.push(s),n.push(new pt("timeCreated")),n.push(new pt("updated")),n.push(new pt("md5Hash",null,!0)),n.push(new pt("cacheControl",null,!0)),n.push(new pt("contentDisposition",null,!0)),n.push(new pt("contentEncoding",null,!0)),n.push(new pt("contentLanguage",null,!0)),n.push(new pt("contentType",null,!0)),n.push(new pt("metadata","customMetadata",!0)),Po=n,Po}function v_(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Nt(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function E_(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return v_(r,n),r}function ep(n,e,t){const r=X0(e);return r===null?null:E_(n,r,t)}function A_(n,e,t,r){const s=X0(e);if(s===null||!xu(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const p=n.bucket,g=n.fullPath,x="/b/"+o(p)+"/o/"+o(g),S=Cu(x,t,r),R=W0({alt:"media",token:h});return S+R})[0]}function T_(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class tp{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function np(n){if(!n)throw Tu()}function x_(n,e){function t(r,s){const i=ep(n,s,e);return np(i!==null),i}return t}function I_(n,e){function t(r,s){const i=ep(n,s,e);return np(i!==null),A_(i,s,n.host,n._protocol)}return t}function rp(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Fw():s=Bw():t.getStatus()===402?s=Mw(n.bucket):t.getStatus()===403?s=Uw(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function C_(n){const e=rp(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Vw(n.path)),i.serverResponse=s.serverResponse,i}return t}function S_(n,e,t){const r=e.fullServerUrl(),s=Cu(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,l=new tp(s,i,I_(n,t),o);return l.errorHandler=C_(e),l}function R_(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function P_(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=R_(null,e)),r}function k_(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let ue="";for(let me=0;me<2;me++)ue=ue+Math.random().toString().slice(2);return ue}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const h=P_(e,r,s),p=T_(h,t),g="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+c+`\r
Content-Type: `+h.contentType+`\r
\r
`,x=`\r
--`+c+"--",S=jn.getBlob(g,r,x);if(S===null)throw Gw();const R={name:h.fullPath},B=Cu(i,n.host,n._protocol),U="POST",Q=n.maxUploadRetryTime,re=new tp(B,U,x_(n,t),Q);return re.urlParams=R,re.headers=o,re.body=S.uploadData(),re.errorHandler=rp(e),re}class O_{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Pr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Pr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Pr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw Zs("cannot .send() more than once");if(Ur(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Zs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Zs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Zs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Zs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class N_ extends O_{initXhr(){this.xhr_.responseType="text"}}function sp(){return new N_}/**
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
 */class Br{constructor(e,t){this._service=e,t instanceof Nt?this._location=t:this._location=Nt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Br(e,t)}get root(){const e=new Nt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return J0(this._location.path)}get storage(){return this._service}get parent(){const e=w_(this._location.path);if(e===null)return null;const t=new Nt(this._location.bucket,e);return new Br(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Yw(e)}}function D_(n,e,t){n._throwIfRoot("uploadBytes");const r=k_(n.storage,n._location,Z0(),new jn(e,!0),t);return n.storage.makeRequestWithTokens(r,sp).then(s=>({metadata:s,ref:n}))}function L_(n){n._throwIfRoot("getDownloadURL");const e=S_(n.storage,n._location,Z0());return n.storage.makeRequestWithTokens(e,sp).then(t=>{if(t===null)throw Ww();return t})}function V_(n,e){const t=__(n._location.path,e),r=new Nt(n._location.bucket,t);return new Br(n.storage,r)}/**
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
 */function M_(n){return/^[A-Za-z]+:\/\//.test(n)}function B_(n,e){return new Br(n,e)}function ip(n,e){if(n instanceof Su){const t=n;if(t._bucket==null)throw zw();const r=new Br(t,t._bucket);return e!=null?ip(r,e):r}else return e!==void 0?V_(n,e):n}function F_(n,e){if(e&&M_(e)){if(n instanceof Su)return B_(n,e);throw _c("To use ref(service, url), the first argument must be a Storage instance.")}else return ip(n,e)}function Md(n,e){const t=e==null?void 0:e[z0];return t==null?null:Nt.makeFromBucketSpec(t,n)}function U_(n,e,t,r={}){n.host=`${e}:${t}`;const s=Ur(e);s&&Tc(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:o2(i,n.app.options.projectId))}class Su{constructor(e,t,r,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=q0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Dw,this._maxUploadRetryTime=Lw,this._requests=new Set,s!=null?this._bucket=Nt.makeFromBucketSpec(s,this._host):this._bucket=Md(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Nt.makeFromBucketSpec(this._url,e):this._bucket=Md(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Pt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Br(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new Qw(G0());{const o=a_(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Bd="@firebase/storage",Fd="0.14.3";/**
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
 */const op="storage";function $_(n,e,t){return n=Ye(n),D_(n,e,t)}function H_(n){return n=Ye(n),L_(n)}function j_(n,e){return n=Ye(n),F_(n,e)}function q_(n=Cc(),e){n=Ye(n);const r=Ca(n,op).getImmediate({identifier:e}),s=n2("storage");return s&&z_(r,...s),r}function z_(n,e,t,r={}){U_(n,e,t,r)}function G_(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Su(t,r,s,e,$r)}function W_(){Nr(new er(op,G_,"PUBLIC").setMultipleInstances(!0)),Zt(Bd,Fd,""),Zt(Bd,Fd,"esm2020")}W_();const K_={apiKey:"AIzaSyBqp05sQ2AGH1h2IA6KN05xuvPBUp1QM6Q",authDomain:"lames-4f738.firebaseapp.com",projectId:"lames-4f738",storageBucket:"lames-4f738.firebasestorage.app",messagingSenderId:"264169063078",appId:"1:264169063078:web:ccbb1e504f50b87281ea67"};let ko,Zn,Rt,ap,Fe=!1;try{ko=c2(K_),Zn=E7(ko),Rt=Aw(ko),ap=q_(ko),Fe=!0}catch(n){console.error("Erro ao inicializar o Firebase:",n)}async function Ru(n){if(!Fe)return null;const e=bn(Rt,"whitelist",n.toLowerCase().trim()),t=await Au(e);if(t.exists()){const r=t.data();let s="colaborador";const o=Object.keys(r).find(l=>l.toLowerCase()==="role"||l.toLowerCase()==="perfil");return o&&r[o]&&(s=String(r[o]).toLowerCase().trim()),{...r,role:s}}return null}async function Y_(n,e){if(!Fe){if(n==="admin@lames.org"&&e==="admin123")return{user:{email:n},role:"admin"};if(n==="colab@lames.org"&&e==="colab123")return{user:{email:n},role:"colaborador"};throw new Error("Firebase não configurado. Use as credenciais de demonstração (admin@lames.org/admin123 ou colab@lames.org/colab123).")}const r=(await l4(Zn,n,e)).user;try{const s=await Ru(r.email);if(!s)throw await Jo(Zn),new Error("Este e-mail não está autorizado a acessar o sistema.");return{user:r,role:s.role}}catch(s){throw await Jo(Zn),s}}async function Q_(n,e){if(!Fe)throw new Error("O cadastro de novos usuários necessita do Firebase configurado.");const r=(await a4(Zn,n,e)).user;try{const s=await Ru(r.email);if(!s)throw await hh(r),new Error("Seu e-mail não está cadastrado na whitelist do laboratório. Solicite acesso ao administrador.");return{user:r,role:s.role}}catch(s){try{await hh(r)}catch{}throw s}}async function Pu(){Fe&&await Jo(Zn)}function X_(n){if(!Fe){const e=localStorage.getItem("demo_user"),t=localStorage.getItem("demo_role");if(e&&t){const r=JSON.parse(localStorage.getItem("all_demo_usuarios")||"{}");r[e.toLowerCase().trim()]={email:e.toLowerCase().trim(),role:t,lastAccess:new Date().toISOString()},localStorage.setItem("all_demo_usuarios",JSON.stringify(r)),n({email:e},t)}else n(null,null);return()=>{}}return h4(Zn,async e=>{if(e){const t=await Ru(e.email);if(t){try{const r=bn(Rt,"usuarios",e.email.toLowerCase().trim());await Bi(r,{email:e.email.toLowerCase().trim(),role:t.role,lastAccess:new Date().toISOString()},{merge:!0})}catch(r){console.error("Erro ao registrar acesso do usuário no Firestore:",r)}n(e,t.role)}else await Jo(Zn),n(null,null)}else n(null,null)})}let Oo=null,oi=null,bc=null,zo=null;const lp={};function Za(n,e){lp[n]=e}function yt(n){window.location.hash=n}async function Ud(){if(!oi)return;let n=window.location.hash.slice(1)||"login";if(bc){if(n==="login"){yt(zo==="admin"?"admin":"inicio");return}if(n==="admin"&&zo!=="admin"){yt("inicio");return}}else if(n!=="login"){yt("login");return}const e=lp[n];e?(oi.innerHTML="",Oo&&typeof Oo.destroy=="function"&&Oo.destroy(),Oo=await e(oi,bc,zo)):oi.innerHTML='<div class="text-center p-20"><h1 class="text-2xl font-bold">Página não encontrada (404)</h1><a href="#login" class="text-blue-500 underline mt-4 inline-block">Voltar ao início</a></div>'}function J_(n){oi=n,window.addEventListener("hashchange",Ud),X_((e,t)=>{bc=e,zo=t,Ud()})}/*!
* sweetalert2 v11.26.25
* Released under the MIT License.
*/function cp(n,e,t){if(typeof n=="function"?n===e:n.has(e))return arguments.length<3?e:t;throw new TypeError("Private element is not present on this object")}function Z_(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}function $d(n,e){return n.get(cp(n,e))}function eb(n,e,t){Z_(n,e),e.set(n,t)}function tb(n,e,t){return n.set(cp(n,e),t),t}const nb=100,K={},rb=()=>{K.previousActiveElement instanceof HTMLElement?(K.previousActiveElement.focus(),K.previousActiveElement=null):document.body&&document.body.focus()},sb=n=>new Promise(e=>{if(!n)return e();const t=window.scrollX,r=window.scrollY;K.restoreFocusTimeout=setTimeout(()=>{rb(),e()},nb),window.scrollTo(t,r)}),up="swal2-",ib=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],O=ib.reduce((n,e)=>(n[e]=up+e,n),{}),ob=["success","warning","info","question","error"],_a=ob.reduce((n,e)=>(n[e]=up+e,n),{}),hp="SweetAlert2:",ku=n=>n.charAt(0).toUpperCase()+n.slice(1),wt=n=>{console.warn(`${hp} ${typeof n=="object"?n.join(" "):n}`)},Kr=n=>{console.error(`${hp} ${n}`)},Hd=[],ab=n=>{Hd.includes(n)||(Hd.push(n),wt(n))},dp=(n,e=null)=>{ab(`"${n}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},el=n=>typeof n=="function"?n():n,Ou=n=>n&&typeof n.toPromise=="function",to=n=>Ou(n)?n.toPromise():Promise.resolve(n),Nu=n=>n&&Promise.resolve(n)===n,lb=()=>navigator.userAgent.includes("Firefox"),_t=()=>document.body.querySelector(`.${O.container}`),no=n=>{const e=_t();return e?e.querySelector(n):null},Vt=n=>no(`.${n}`),be=()=>Vt(O.popup),Ps=()=>Vt(O.icon),cb=()=>Vt(O["icon-content"]),fp=()=>Vt(O.title),Du=()=>Vt(O["html-container"]),pp=()=>Vt(O.image),Lu=()=>Vt(O["progress-steps"]),tl=()=>Vt(O["validation-message"]),un=()=>no(`.${O.actions} .${O.confirm}`),ks=()=>no(`.${O.actions} .${O.cancel}`),Yr=()=>no(`.${O.actions} .${O.deny}`),ub=()=>Vt(O["input-label"]),Os=()=>no(`.${O.loader}`),ro=()=>Vt(O.actions),mp=()=>Vt(O.footer),nl=()=>Vt(O["timer-progress-bar"]),Vu=()=>Vt(O.close),hb=`
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
`,Mu=()=>{const n=be();if(!n)return[];const e=n.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),t=Array.from(e).sort((i,o)=>{const l=parseInt(i.getAttribute("tabindex")||"0"),c=parseInt(o.getAttribute("tabindex")||"0");return l>c?1:l<c?-1:0}),r=n.querySelectorAll(hb),s=Array.from(r).filter(i=>i.getAttribute("tabindex")!=="-1");return[...new Set(t.concat(s))].filter(i=>At(i))},Bu=()=>vn(document.body,O.shown)&&!vn(document.body,O["toast-shown"])&&!vn(document.body,O["no-backdrop"]),rl=()=>{const n=be();return n?vn(n,O.toast):!1},db=()=>{const n=be();return n?n.hasAttribute("data-loading"):!1},Mt=(n,e)=>{if(n.textContent="",e){const r=new DOMParser().parseFromString(e,"text/html"),s=r.querySelector("head");s&&Array.from(s.childNodes).forEach(o=>{n.appendChild(o)});const i=r.querySelector("body");i&&Array.from(i.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?n.appendChild(o.cloneNode(!0)):n.appendChild(o)})}},vn=(n,e)=>e?e.split(/\s+/).every(t=>n.classList.contains(t)):!1,fb=(n,e)=>{Array.from(n.classList).forEach(t=>{!Object.values(O).includes(t)&&!Object.values(_a).includes(t)&&!Object.values(e.showClass||{}).includes(t)&&n.classList.remove(t)})},Dt=(n,e,t)=>{if(fb(n,e),!e.customClass)return;const r=e.customClass[t];if(r){if(typeof r!="string"&&!r.forEach){wt(`Invalid type of customClass.${t}! Expected string or iterable object, got "${typeof r}"`);return}_e(n,r)}},sl=(n,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return n.querySelector(`.${O.popup} > .${O[e]}`);case"checkbox":return n.querySelector(`.${O.popup} > .${O.checkbox} input`);case"radio":return n.querySelector(`.${O.popup} > .${O.radio} input:checked`)||n.querySelector(`.${O.popup} > .${O.radio} input:first-child`);case"range":return n.querySelector(`.${O.popup} > .${O.range} input`);default:return n.querySelector(`.${O.popup} > .${O.input}`)}},gp=n=>{if(n.focus(),n.type!=="file"){const e=n.value;n.value="",n.value=e}},wp=(n,e,t)=>{if(!n||!e)return;const r=typeof e=="string"?e.split(/\s+/).filter(Boolean):e;(Array.isArray(n)?n:[n]).forEach(i=>{r.forEach(o=>{t?i.classList.add(o):i.classList.remove(o)})})},_e=(n,e)=>{wp(n,e,!0)},Ut=(n,e)=>{wp(n,e,!1)},qn=(n,e)=>Array.from(n.children).find(t=>t instanceof HTMLElement&&vn(t,e)),kr=(n,e,t)=>{t===`${parseInt(`${t}`)}`&&(t=parseInt(t)),t||t===0?n.style.setProperty(e,typeof t=="number"?`${t}px`:t):n.style.removeProperty(e)},Ze=(n,e="flex")=>{n&&(n.style.display=e)},ut=n=>{n&&(n.style.display="none")},Fu=(n,e="block")=>{n&&new MutationObserver(()=>{so(n,n.innerHTML,e)}).observe(n,{childList:!0,subtree:!0})},jd=(n,e,t,r)=>{const s=n.querySelector(e);s&&s.style.setProperty(t,r)},so=(n,e,t="flex")=>{e?Ze(n,t):ut(n)},At=n=>!!(n&&(n.offsetWidth||n.offsetHeight||n.getClientRects().length)),pb=()=>!At(un())&&!At(Yr())&&!At(ks()),yc=n=>n.scrollHeight>n.clientHeight,mb=(n,e)=>{let t=n;for(;t&&t!==e;){if(yc(t))return!0;t=t.parentElement}return!1},_p=n=>{const e=window.getComputedStyle(n),t=parseFloat(e.getPropertyValue("animation-duration")||"0"),r=parseFloat(e.getPropertyValue("transition-duration")||"0");return t>0||r>0},Uu=(n,e=!1)=>{const t=nl();t&&At(t)&&(e&&(t.style.transition="none",t.style.width="100%"),setTimeout(()=>{t.style.transition=`width ${n/1e3}s linear`,t.style.width="0%"},10))},gb=()=>{const n=nl();if(!n)return;const e=parseInt(window.getComputedStyle(n).width);n.style.removeProperty("transition"),n.style.width="100%";const t=parseInt(window.getComputedStyle(n).width),r=e/t*100;n.style.width=`${r}%`},wb=()=>typeof window>"u"||typeof document>"u",_b=`
 <div aria-labelledby="${O.title}" aria-describedby="${O["html-container"]}" class="${O.popup}" tabindex="-1">
   <button type="button" class="${O.close}"></button>
   <ul class="${O["progress-steps"]}"></ul>
   <div class="${O.icon}"></div>
   <img class="${O.image}" />
   <h2 class="${O.title}" id="${O.title}"></h2>
   <div class="${O["html-container"]}" id="${O["html-container"]}"></div>
   <input class="${O.input}" id="${O.input}" />
   <input type="file" class="${O.file}" />
   <div class="${O.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${O.select}" id="${O.select}"></select>
   <div class="${O.radio}"></div>
   <label class="${O.checkbox}">
     <input type="checkbox" id="${O.checkbox}" />
     <span class="${O.label}"></span>
   </label>
   <textarea class="${O.textarea}" id="${O.textarea}"></textarea>
   <div class="${O["validation-message"]}" id="${O["validation-message"]}"></div>
   <div class="${O.actions}">
     <div class="${O.loader}"></div>
     <button type="button" class="${O.confirm}"></button>
     <button type="button" class="${O.deny}"></button>
     <button type="button" class="${O.cancel}"></button>
   </div>
   <div class="${O.footer}"></div>
   <div class="${O["timer-progress-bar-container"]}">
     <div class="${O["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),bb=()=>{const n=_t();return n?(n.remove(),Ut([document.documentElement,document.body],[O["no-backdrop"],O["toast-shown"],O["has-column"]]),!0):!1},Ar=()=>{K.currentInstance&&K.currentInstance.resetValidationMessage()},yb=()=>{const n=be();if(!n)return;const e=qn(n,O.input),t=qn(n,O.file),r=n.querySelector(`.${O.range} input`),s=n.querySelector(`.${O.range} output`),i=qn(n,O.select),o=n.querySelector(`.${O.checkbox} input`),l=qn(n,O.textarea);e&&(e.oninput=Ar),t&&(t.onchange=Ar),i&&(i.onchange=Ar),o&&(o.onchange=Ar),l&&(l.oninput=Ar),r&&s&&(r.oninput=()=>{Ar(),s.value=r.value},r.onchange=()=>{Ar(),s.value=r.value})},vb=n=>{if(typeof n=="string"){const e=document.querySelector(n);if(!e)throw new Error(`Target element "${n}" not found`);return e}return n},Eb=n=>{const e=be();e&&(e.setAttribute("role",n.toast?"alert":"dialog"),e.setAttribute("aria-live",n.toast?"polite":"assertive"),n.toast||e.setAttribute("aria-modal","true"))},Ab=n=>{window.getComputedStyle(n).direction==="rtl"&&(_e(_t(),O.rtl),K.isRTL=!0)},Tb=n=>{const e=bb();if(wb()){Kr("SweetAlert2 requires document to initialize");return}const t=document.createElement("div");t.className=O.container,e&&_e(t,O["no-transition"]),Mt(t,_b),t.dataset.swal2Theme=n.theme;const r=vb(n.target||"body");r.appendChild(t),n.topLayer&&(t.setAttribute("popover",""),t.showPopover()),Eb(n),Ab(r),yb()},$u=(n,e)=>{n instanceof HTMLElement?e.appendChild(n):typeof n=="object"?xb(n,e):n&&Mt(e,n)},xb=(n,e)=>{"jquery"in n?Ib(e,n):Mt(e,n.toString())},Ib=(n,e)=>{if(n.textContent="",0 in e)for(let t=0;t in e;t++)n.appendChild(e[t].cloneNode(!0));else n.appendChild(e.cloneNode(!0))},Cb=(n,e)=>{const t=ro(),r=Os();!t||!r||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?ut(t):Ze(t),Dt(t,e,"actions"),Sb(t,r,e),Mt(r,e.loaderHtml||""),Dt(r,e,"loader"))};function Sb(n,e,t){const r=un(),s=Yr(),i=ks();!r||!s||!i||(ql(r,"confirm",t),ql(s,"deny",t),ql(i,"cancel",t),Rb(r,s,i,t),t.reverseButtons&&(t.toast?(n.insertBefore(i,r),n.insertBefore(s,r)):(n.insertBefore(i,e),n.insertBefore(s,e),n.insertBefore(r,e))))}function Rb(n,e,t,r){if(!r.buttonsStyling){Ut([n,e,t],O.styled);return}_e([n,e,t],O.styled),[[n,"confirm",r.confirmButtonColor],[e,"deny",r.denyButtonColor],[t,"cancel",r.cancelButtonColor]].forEach(([i,o,l])=>{l&&i.style.setProperty(`--swal2-${o}-button-background-color`,l),Pb(i)})}function Pb(n){const e=window.getComputedStyle(n);if(e.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const t=e.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");n.style.setProperty("--swal2-action-button-focus-box-shadow",e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${t}`))}function ql(n,e,t){const r=ku(e);so(n,t[`show${r}Button`],"inline-block"),Mt(n,t[`${e}ButtonText`]||""),n.setAttribute("aria-label",t[`${e}ButtonAriaLabel`]||""),n.className=O[e],Dt(n,t,`${e}Button`)}const kb=(n,e)=>{const t=Vu();t&&(Mt(t,e.closeButtonHtml||""),Dt(t,e,"closeButton"),so(t,e.showCloseButton),t.setAttribute("aria-label",e.closeButtonAriaLabel||""))},Ob=(n,e)=>{const t=_t();t&&(Nb(t,e.backdrop),Db(t,e.position),Lb(t,e.grow),Dt(t,e,"container"))};function Nb(n,e){typeof e=="string"?n.style.background=e:e||_e([document.documentElement,document.body],O["no-backdrop"])}function Db(n,e){e&&(e in O?_e(n,O[e]):(wt('The "position" parameter is not valid, defaulting to "center"'),_e(n,O.center)))}function Lb(n,e){e&&_e(n,O[`grow-${e}`])}var Ee={innerParams:new WeakMap,domCache:new WeakMap,focusedElement:new WeakMap};const Vb=["input","file","range","select","radio","checkbox","textarea"],Mb=(n,e)=>{const t=be();if(!t)return;const r=Ee.innerParams.get(n),s=!r||e.input!==r.input;Vb.forEach(i=>{const o=qn(t,O[i]);o&&(Ub(i,e.inputAttributes),o.className=O[i],s&&ut(o))}),e.input&&(s&&Bb(e),$b(e))},Bb=n=>{if(!n.input)return;if(!Le[n.input]){Kr(`Unexpected type of input! Expected ${Object.keys(Le).join(" | ")}, got "${n.input}"`);return}const e=bp(n.input);if(!e)return;const t=Le[n.input](e,n);Ze(e),n.inputAutoFocus&&setTimeout(()=>{gp(t)})},Fb=n=>{for(const{name:e}of Array.from(n.attributes))["id","type","value","style"].includes(e)||n.removeAttribute(e)},Ub=(n,e)=>{const t=be();if(!t)return;const r=sl(t,n);if(r){Fb(r);for(const s in e)r.setAttribute(s,e[s])}},$b=n=>{if(!n.input)return;const e=bp(n.input);e&&Dt(e,n,"input")},Hu=(n,e)=>{!n.placeholder&&e.inputPlaceholder&&(n.placeholder=e.inputPlaceholder)},io=(n,e,t)=>{if(t.inputLabel){const r=document.createElement("label"),s=O["input-label"];r.setAttribute("for",n.id),r.className=s,typeof t.customClass=="object"&&_e(r,t.customClass.inputLabel),r.innerText=t.inputLabel,e.insertAdjacentElement("beforebegin",r)}},bp=n=>{const e=be();if(e)return qn(e,O[n]||O.input)},ba=(n,e)=>{["string","number"].includes(typeof e)?n.value=`${e}`:Nu(e)||wt(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},Le={};Le.text=Le.email=Le.password=Le.number=Le.tel=Le.url=Le.search=Le.date=Le["datetime-local"]=Le.time=Le.week=Le.month=(n,e)=>{const t=n;return ba(t,e.inputValue),io(t,t,e),Hu(t,e),t.type=e.input,t};Le.file=(n,e)=>{const t=n;return io(t,t,e),Hu(t,e),t};Le.range=(n,e)=>{const t=n,r=t.querySelector("input"),s=t.querySelector("output");return r&&(ba(r,e.inputValue),r.type=e.input,io(r,n,e)),s&&ba(s,e.inputValue),n};Le.select=(n,e)=>{const t=n;if(t.textContent="",e.inputPlaceholder){const r=document.createElement("option");Mt(r,e.inputPlaceholder),r.value="",r.disabled=!0,r.selected=!0,t.appendChild(r)}return io(t,t,e),t};Le.radio=n=>{const e=n;return e.textContent="",n};Le.checkbox=(n,e)=>{const t=be();if(!t)throw new Error("Popup not found");const r=sl(t,"checkbox");if(!r)throw new Error("Checkbox input not found");r.value="1",r.checked=!!e.inputValue;const i=n.querySelector("span");if(i){const o=e.inputPlaceholder||e.inputLabel;o&&Mt(i,o)}return r};Le.textarea=(n,e)=>{const t=n;ba(t,e.inputValue),Hu(t,e),io(t,t,e);const r=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=be();if(!s)return;const i=parseInt(window.getComputedStyle(s).width),o=()=>{if(!document.body.contains(t))return;const l=t.offsetWidth+r(t),c=be();c&&(l>i?c.style.width=`${l}px`:kr(c,"width",e.width))};new MutationObserver(o).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const Hb=(n,e)=>{const t=Du();t&&(Fu(t),Dt(t,e,"htmlContainer"),e.html?($u(e.html,t),Ze(t,"block")):e.text?(t.textContent=e.text,Ze(t,"block")):ut(t),Mb(n,e))},jb=(n,e)=>{const t=mp();t&&(Fu(t),so(t,!!e.footer,"block"),e.footer&&$u(e.footer,t),Dt(t,e,"footer"))},qb=(n,e)=>{const t=Ee.innerParams.get(n),r=Ps();if(!r)return;if(t&&e.icon===t.icon){zd(r,e),qd(r,e);return}if(!e.icon&&!e.iconHtml){ut(r);return}if(e.icon&&Object.keys(_a).indexOf(e.icon)===-1){Kr(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),ut(r);return}Ze(r),zd(r,e),qd(r,e),_e(r,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",yp)},qd=(n,e)=>{for(const[t,r]of Object.entries(_a))e.icon!==t&&Ut(n,r);_e(n,e.icon&&_a[e.icon]),Wb(n,e),yp(),Dt(n,e,"icon")},yp=()=>{const n=be();if(!n)return;const e=window.getComputedStyle(n).getPropertyValue("background-color");n.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix").forEach(r=>{r.style.backgroundColor=e})},zb=n=>`
  ${n.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${n.animation?'<div class="swal2-success-fix"></div>':""}
  ${n.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,Gb=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,zd=(n,e)=>{if(!e.icon&&!e.iconHtml)return;let t=n.innerHTML,r="";e.iconHtml?r=Gd(e.iconHtml):e.icon==="success"?(r=zb(e),t=t.replace(/ style=".*?"/g,"")):e.icon==="error"?r=Gb:e.icon&&(r=Gd({question:"?",warning:"!",info:"i"}[e.icon])),t.trim()!==r.trim()&&Mt(n,r)},Wb=(n,e)=>{if(e.iconColor){n.style.color=e.iconColor,n.style.borderColor=e.iconColor;for(const t of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])jd(n,t,"background-color",e.iconColor);jd(n,".swal2-success-ring","border-color",e.iconColor)}},Gd=n=>`<div class="${O["icon-content"]}">${n}</div>`,Kb=(n,e)=>{const t=pp();if(t){if(!e.imageUrl){ut(t);return}Ze(t,""),t.setAttribute("src",e.imageUrl),t.setAttribute("alt",e.imageAlt||""),kr(t,"width",e.imageWidth),kr(t,"height",e.imageHeight),t.className=O.image,Dt(t,e,"image")}};let ju=!1,vp=0,Ep=0,Ap=0,Tp=0;const Yb=n=>{n.addEventListener("mousedown",ya),document.body.addEventListener("mousemove",va),n.addEventListener("mouseup",Ea),n.addEventListener("touchstart",ya),document.body.addEventListener("touchmove",va),n.addEventListener("touchend",Ea)},Qb=n=>{n.removeEventListener("mousedown",ya),document.body.removeEventListener("mousemove",va),n.removeEventListener("mouseup",Ea),n.removeEventListener("touchstart",ya),document.body.removeEventListener("touchmove",va),n.removeEventListener("touchend",Ea)},ya=n=>{const e=be();if(!e)return;const t=Ps();if(n.target===e||t&&t.contains(n.target)){ju=!0;const r=xp(n);vp=r.clientX,Ep=r.clientY,Ap=parseInt(e.style.insetInlineStart)||0,Tp=parseInt(e.style.insetBlockStart)||0,_e(e,"swal2-dragging")}},va=n=>{const e=be();if(e&&ju){let{clientX:t,clientY:r}=xp(n);const s=t-vp;e.style.insetInlineStart=`${Ap+(K.isRTL?-s:s)}px`,e.style.insetBlockStart=`${Tp+(r-Ep)}px`}},Ea=()=>{const n=be();ju=!1,Ut(n,"swal2-dragging")},xp=n=>{const e=n.type.startsWith("touch")?n.touches[0]:n;return{clientX:e.clientX,clientY:e.clientY}},Xb=(n,e)=>{const t=_t(),r=be();if(!(!t||!r)){if(e.toast){kr(t,"width",e.width),r.style.width="100%";const s=Os();s&&r.insertBefore(s,Ps())}else kr(r,"width",e.width);kr(r,"padding",e.padding),e.color&&(r.style.color=e.color),e.background&&(r.style.background=e.background),ut(tl()),Jb(r,e),e.draggable&&!e.toast?(_e(r,O.draggable),Yb(r)):(Ut(r,O.draggable),Qb(r))}},Jb=(n,e)=>{const t=e.showClass||{};n.className=`${O.popup} ${At(n)?t.popup:""}`,e.toast?(_e([document.documentElement,document.body],O["toast-shown"]),_e(n,O.toast)):_e(n,O.modal),Dt(n,e,"popup"),typeof e.customClass=="string"&&_e(n,e.customClass),e.icon&&_e(n,O[`icon-${e.icon}`])},Zb=(n,e)=>{const t=Lu();if(!t)return;const{progressSteps:r,currentProgressStep:s}=e;if(!r||r.length===0||s===void 0){ut(t);return}Ze(t),t.textContent="",s>=r.length&&wt("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),r.forEach((i,o)=>{const l=ey(i);if(t.appendChild(l),o===s&&_e(l,O["active-progress-step"]),o!==r.length-1){const c=ty(e);t.appendChild(c)}})},ey=n=>{const e=document.createElement("li");return _e(e,O["progress-step"]),Mt(e,n),e},ty=n=>{const e=document.createElement("li");return _e(e,O["progress-step-line"]),n.progressStepsDistance&&kr(e,"width",n.progressStepsDistance),e},ny=(n,e)=>{const t=fp();t&&(Fu(t),so(t,!!(e.title||e.titleText),"block"),e.title&&$u(e.title,t),e.titleText&&(t.innerText=e.titleText),Dt(t,e,"title"))},Ip=(n,e)=>{var t;Xb(n,e),Ob(n,e),Zb(n,e),qb(n,e),Kb(n,e),ny(n,e),kb(n,e),Hb(n,e),Cb(n,e),jb(n,e);const r=be();typeof e.didRender=="function"&&r&&e.didRender(r),(t=K.eventEmitter)===null||t===void 0||t.emit("didRender",r)},ry=()=>At(be()),Cp=()=>{var n;return(n=un())===null||n===void 0?void 0:n.click()},sy=()=>{var n;return(n=Yr())===null||n===void 0?void 0:n.click()},iy=()=>{var n;return(n=ks())===null||n===void 0?void 0:n.click()},Ns=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Sp=n=>{if(n.keydownTarget&&n.keydownHandlerAdded&&n.keydownHandler){const e=n.keydownHandler;n.keydownTarget.removeEventListener("keydown",e,{capture:n.keydownListenerCapture}),n.keydownHandlerAdded=!1}},oy=(n,e,t)=>{if(Sp(n),!e.toast){const r=i=>ly(e,i,t);n.keydownHandler=r;const s=e.keydownListenerCapture?window:be();if(s){n.keydownTarget=s,n.keydownListenerCapture=e.keydownListenerCapture;const i=r;n.keydownTarget.addEventListener("keydown",i,{capture:n.keydownListenerCapture}),n.keydownHandlerAdded=!0}}},vc=(n,e)=>{var t;const r=Mu();return r.length?(n=n+e,n===-2&&(n=r.length-1),n===r.length?n=0:n===-1&&(n=r.length-1),r[n].focus(),!(lb()&&r[n]instanceof HTMLIFrameElement)):((t=be())===null||t===void 0||t.focus(),!0)},Rp=["ArrowRight","ArrowDown"],ay=["ArrowLeft","ArrowUp"],ly=(n,e,t)=>{n&&(e.isComposing||e.keyCode===229||(n.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?cy(e,n):e.key==="Tab"?uy(e):[...Rp,...ay].includes(e.key)?hy(e.key):e.key==="Escape"&&dy(e,n,t)))},cy=(n,e)=>{if(!el(e.allowEnterKey))return;const t=be();if(!t||!e.input)return;const r=sl(t,e.input);if(n.target&&r&&n.target instanceof HTMLElement&&n.target.outerHTML===r.outerHTML){if(["textarea","file"].includes(e.input))return;Cp(),n.preventDefault()}},uy=n=>{const e=n.target,r=Mu().findIndex(i=>i===e);let s=!0;n.shiftKey?s=vc(r,-1):s=vc(r,1),n.stopPropagation(),s&&n.preventDefault()},hy=n=>{const e=ro(),t=un(),r=Yr(),s=ks();if(!e||!t||!r||!s)return;const i=[t,r,s];if(document.activeElement instanceof HTMLElement&&!i.includes(document.activeElement))return;const o=Rp.includes(n)?"nextElementSibling":"previousElementSibling";let l=document.activeElement;if(l){for(let c=0;c<e.children.length;c++){if(l=l[o],!l)return;if(l instanceof HTMLButtonElement&&At(l))break}l instanceof HTMLButtonElement&&l.focus()}},dy=(n,e,t)=>{n.preventDefault(),el(e.allowEscapeKey)&&t(Ns.esc)};var bs={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const fy=()=>{const n=_t();Array.from(document.body.children).forEach(t=>{t.contains(n)||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")||""),t.setAttribute("aria-hidden","true"))})},Pp=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},qu=typeof window<"u"&&!!window.GestureEvent,py=qu&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,my=()=>{if(qu&&!vn(document.body,O.iosfix)){const n=document.body.scrollTop;document.body.style.top=`${n*-1}px`,_e(document.body,O.iosfix),gy()}},gy=()=>{const n=_t();if(!n)return;let e;n.ontouchstart=t=>{e=wy(t)},n.ontouchmove=t=>{e&&(t.preventDefault(),t.stopPropagation())}},wy=n=>{const e=n.target,t=_t(),r=Du();return!t||!r||_y(n)||by(n)?!1:e===t||!yc(t)&&e instanceof HTMLElement&&!mb(e,r)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(yc(r)&&r.contains(e))},_y=n=>!!(n.touches&&n.touches.length&&n.touches[0].touchType==="stylus"),by=n=>n.touches&&n.touches.length>1,yy=()=>{if(vn(document.body,O.iosfix)){const n=parseInt(document.body.style.top,10);Ut(document.body,O.iosfix),document.body.style.top="",document.body.scrollTop=n*-1}},vy=()=>{const n=document.createElement("div");n.className=O["scrollbar-measure"],document.body.appendChild(n);const e=n.getBoundingClientRect().width-n.clientWidth;return document.body.removeChild(n),e};let ds=null;const Ey=n=>{ds===null&&(document.body.scrollHeight>window.innerHeight||n==="scroll")&&(ds=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${ds+vy()}px`)},Ay=()=>{ds!==null&&(document.body.style.paddingRight=`${ds}px`,ds=null)};function kp(n,e,t,r){rl()?Wd(n,r):(sb(t).then(()=>Wd(n,r)),Sp(K)),qu?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Bu()&&(Ay(),yy(),Pp()),Ty()}function Ty(){Ut([document.documentElement,document.body],[O.shown,O["height-auto"],O["no-backdrop"],O["toast-shown"]])}function zn(n){n=Iy(n);const e=bs.swalPromiseResolve.get(this),t=xy(this);this.isAwaitingPromise?n.isDismissed||(oo(this),e(n)):t&&e(n)}const xy=n=>{const e=be();if(!e)return!1;const t=Ee.innerParams.get(n);if(!t||vn(e,t.hideClass.popup))return!1;Ut(e,t.showClass.popup),_e(e,t.hideClass.popup);const r=_t();return Ut(r,t.showClass.backdrop),_e(r,t.hideClass.backdrop),Cy(n,e,t),!0};function Op(n){const e=bs.swalPromiseReject.get(this);oo(this),e&&e(n)}const oo=n=>{n.isAwaitingPromise&&(delete n.isAwaitingPromise,Ee.innerParams.get(n)||n._destroy())},Iy=n=>typeof n>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},n),Cy=(n,e,t)=>{var r;const s=_t(),i=_p(e);typeof t.willClose=="function"&&t.willClose(e),(r=K.eventEmitter)===null||r===void 0||r.emit("willClose",e),i&&s?Sy(n,e,s,!!t.returnFocus,t.didClose):s&&kp(n,s,!!t.returnFocus,t.didClose)},Sy=(n,e,t,r,s)=>{K.swalCloseEventFinishedCallback=kp.bind(null,n,t,r,s);const i=function(o){if(o.target===e){var l;(l=K.swalCloseEventFinishedCallback)===null||l===void 0||l.call(K),delete K.swalCloseEventFinishedCallback,e.removeEventListener("animationend",i),e.removeEventListener("transitionend",i)}};e.addEventListener("animationend",i),e.addEventListener("transitionend",i)},Wd=(n,e)=>{setTimeout(()=>{var t;typeof e=="function"&&e.bind(n.params)(),(t=K.eventEmitter)===null||t===void 0||t.emit("didClose"),n._destroy&&n._destroy()})},ys=n=>{let e=be();if(e||new ie,e=be(),!e)return;const t=Os();rl()?ut(Ps()):Ry(e,n),Ze(t),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},Ry=(n,e)=>{const t=ro(),r=Os();!t||!r||(!e&&At(un())&&(e=un()),Ze(t),e&&(ut(e),r.setAttribute("data-button-to-replace",e.className),t.insertBefore(r,e)),_e([n,t],O.loading))},Py=(n,e)=>{e.input==="select"||e.input==="radio"?Ly(n,e):["text","email","number","tel","textarea"].some(t=>t===e.input)&&(Ou(e.inputValue)||Nu(e.inputValue))&&(ys(un()),Vy(n,e))},ky=(n,e)=>{const t=n.getInput();if(!t)return null;switch(e.input){case"checkbox":return Oy(t);case"radio":return Ny(t);case"file":return Dy(t);default:return e.inputAutoTrim?t.value.trim():t.value}},Oy=n=>n.checked?1:0,Ny=n=>n.checked?n.value:null,Dy=n=>n.files&&n.files.length?n.getAttribute("multiple")!==null?n.files:n.files[0]:null,Ly=(n,e)=>{const t=be();if(!t)return;const r=s=>{e.input==="select"?My(t,Ec(s),e):e.input==="radio"&&By(t,Ec(s),e)};Ou(e.inputOptions)||Nu(e.inputOptions)?(ys(un()),to(e.inputOptions).then(s=>{n.hideLoading(),r(s)})):typeof e.inputOptions=="object"?r(e.inputOptions):Kr(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},Vy=(n,e)=>{const t=n.getInput();t&&(ut(t),to(e.inputValue).then(r=>{t.value=e.input==="number"?`${parseFloat(r)||0}`:`${r}`,Ze(t),t.focus(),n.hideLoading()}).catch(r=>{Kr(`Error in inputValue promise: ${r}`),t.value="",Ze(t),t.focus(),n.hideLoading()}))};function My(n,e,t){const r=qn(n,O.select);if(!r)return;const s=(i,o,l)=>{const c=document.createElement("option");c.value=l,Mt(c,o),c.selected=Np(l,t.inputValue),i.appendChild(c)};e.forEach(i=>{const o=i[0],l=i[1];if(Array.isArray(l)){const c=document.createElement("optgroup");c.label=o,c.disabled=!1,r.appendChild(c),l.forEach(h=>s(c,h[1],h[0]))}else s(r,l,o)}),r.focus()}function By(n,e,t){const r=qn(n,O.radio);if(!r)return;e.forEach(i=>{const o=i[0],l=i[1],c=document.createElement("input"),h=document.createElement("label");c.type="radio",c.name=O.radio,c.value=o,Np(o,t.inputValue)&&(c.checked=!0);const p=document.createElement("span");Mt(p,l),p.className=O.label,h.appendChild(c),h.appendChild(p),r.appendChild(h)});const s=r.querySelectorAll("input");s.length&&s[0].focus()}const Ec=n=>(n instanceof Map?Array.from(n):Object.entries(n)).map(([t,r])=>[t,typeof r=="object"?Ec(r):r]),Np=(n,e)=>!!e&&e!=null&&e.toString()===n.toString(),Fy=n=>{const e=Ee.innerParams.get(n);n.disableButtons(),e.input?Dp(n,"confirm"):Gu(n,!0)},Uy=n=>{const e=Ee.innerParams.get(n);n.disableButtons(),e.returnInputValueOnDeny?Dp(n,"deny"):zu(n,!1)},$y=(n,e)=>{n.disableButtons(),e(Ns.cancel)},Dp=(n,e)=>{const t=Ee.innerParams.get(n);if(!t.input){Kr(`The "input" parameter is needed to be set when using returnInputValueOn${ku(e)}`);return}const r=n.getInput(),s=ky(n,t);t.inputValidator?Hy(n,s,e):r&&!r.checkValidity()?(n.enableButtons(),n.showValidationMessage(t.validationMessage||r.validationMessage)):e==="deny"?zu(n,s):Gu(n,s)},Hy=(n,e,t)=>{const r=Ee.innerParams.get(n);n.disableInput(),Promise.resolve().then(()=>to(r.inputValidator(e,r.validationMessage))).then(i=>{n.enableButtons(),n.enableInput(),i?n.showValidationMessage(i):t==="deny"?zu(n,e):Gu(n,e)})},zu=(n,e)=>{const t=Ee.innerParams.get(n);t.showLoaderOnDeny&&ys(Yr()),t.preDeny?(n.isAwaitingPromise=!0,Promise.resolve().then(()=>to(t.preDeny(e,t.validationMessage))).then(s=>{s===!1?(n.hideLoading(),oo(n)):n.close({isDenied:!0,value:typeof s>"u"?e:s})}).catch(s=>Lp(n,s))):n.close({isDenied:!0,value:e})},Kd=(n,e)=>{n.close({isConfirmed:!0,value:e})},Lp=(n,e)=>{n.rejectPromise(e)},Gu=(n,e)=>{const t=Ee.innerParams.get(n);t.showLoaderOnConfirm&&ys(),t.preConfirm?(n.resetValidationMessage(),n.isAwaitingPromise=!0,Promise.resolve().then(()=>to(t.preConfirm(e,t.validationMessage))).then(s=>{At(tl())||s===!1?(n.hideLoading(),oo(n)):Kd(n,typeof s>"u"?e:s)}).catch(s=>Lp(n,s))):Kd(n,e)};function Aa(){const n=Ee.innerParams.get(this);if(!n)return;const e=Ee.domCache.get(this);ut(e.loader),rl()?n.icon&&Ze(Ps()):jy(e),Ut([e.popup,e.actions],O.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),this.enableButtons()}const jy=n=>{const e=n.loader.getAttribute("data-button-to-replace"),t=e?n.popup.getElementsByClassName(e):[];t.length?Ze(t[0],"inline-block"):pb()&&ut(n.actions)};function Vp(){const n=Ee.innerParams.get(this),e=Ee.domCache.get(this);return e?sl(e.popup,n.input):null}function Mp(n,e,t){const r=Ee.domCache.get(n);e.forEach(s=>{r[s].disabled=t})}function Bp(n,e){const t=be();!t||!n||(n.type==="radio"?t.querySelectorAll(`[name="${O.radio}"]`).forEach(s=>{s.disabled=e}):n.disabled=e)}function Fp(){Mp(this,["confirmButton","denyButton","cancelButton"],!1);const n=Ee.focusedElement.get(this);n instanceof HTMLElement&&document.activeElement===document.body&&n.focus(),Ee.focusedElement.delete(this)}function Up(){Ee.focusedElement.set(this,document.activeElement),Mp(this,["confirmButton","denyButton","cancelButton"],!0)}function $p(){Bp(this.getInput(),!1)}function Hp(){Bp(this.getInput(),!0)}function jp(n){const e=Ee.domCache.get(this),t=Ee.innerParams.get(this);Mt(e.validationMessage,n),e.validationMessage.className=O["validation-message"],t.customClass&&t.customClass.validationMessage&&_e(e.validationMessage,t.customClass.validationMessage),Ze(e.validationMessage);const r=this.getInput();r&&(r.setAttribute("aria-invalid","true"),r.setAttribute("aria-describedby",O["validation-message"]),gp(r),_e(r,O.inputerror))}function qp(){const n=Ee.domCache.get(this);n.validationMessage&&ut(n.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),Ut(e,O.inputerror))}const Gn={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},qy=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],zy={allowEnterKey:void 0},Gy=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],zp=n=>Object.prototype.hasOwnProperty.call(Gn,n),Gp=n=>qy.indexOf(n)!==-1,Wp=n=>zy[n],Wy=n=>{zp(n)||wt(`Unknown parameter "${n}"`)},Ky=n=>{Gy.includes(n)&&wt(`The parameter "${n}" is incompatible with toasts`)},Yy=n=>{const e=Wp(n);e&&dp(n,e)},Kp=n=>{n.backdrop===!1&&n.allowOutsideClick&&wt('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),n.theme&&!["light","dark","auto","minimal","borderless","bootstrap-4","bootstrap-4-light","bootstrap-4-dark","bootstrap-5","bootstrap-5-light","bootstrap-5-dark","material-ui","material-ui-light","material-ui-dark","embed-iframe","bulma","bulma-light","bulma-dark"].includes(n.theme)&&wt(`Invalid theme "${n.theme}"`);for(const e in n)Wy(e),n.toast&&Ky(e),Yy(e)};function Yp(n){const e=_t(),t=be(),r=Ee.innerParams.get(this);if(!t||vn(t,r.hideClass.popup)){wt("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const s=Qy(n),i=Object.assign({},r,s);Kp(i),e&&(e.dataset.swal2Theme=i.theme),Ip(this,i),Ee.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,n),writable:!1,enumerable:!0}})}const Qy=n=>{const e={};return Object.keys(n).forEach(t=>{if(Gp(t)){const r=n;e[t]=r[t]}else wt(`Invalid parameter to update: ${t}`)}),e};function Qp(){var n;const e=Ee.domCache.get(this),t=Ee.innerParams.get(this);if(!t){Xp(this);return}e.popup&&K.swalCloseEventFinishedCallback&&(K.swalCloseEventFinishedCallback(),delete K.swalCloseEventFinishedCallback),typeof t.didDestroy=="function"&&t.didDestroy(),(n=K.eventEmitter)===null||n===void 0||n.emit("didDestroy"),Xy(this)}const Xy=n=>{Xp(n),delete n.params,delete K.keydownHandler,delete K.keydownTarget,delete K.currentInstance},Xp=n=>{n.isAwaitingPromise?(zl(Ee,n),n.isAwaitingPromise=!0):(zl(bs,n),zl(Ee,n),delete n.isAwaitingPromise,delete n.disableButtons,delete n.enableButtons,delete n.getInput,delete n.disableInput,delete n.enableInput,delete n.hideLoading,delete n.disableLoading,delete n.showValidationMessage,delete n.resetValidationMessage,delete n.close,delete n.closePopup,delete n.closeModal,delete n.closeToast,delete n.rejectPromise,delete n.update,delete n._destroy)},zl=(n,e)=>{for(const t in n)n[t].delete(e)};var Jy=Object.freeze({__proto__:null,_destroy:Qp,close:zn,closeModal:zn,closePopup:zn,closeToast:zn,disableButtons:Up,disableInput:Hp,disableLoading:Aa,enableButtons:Fp,enableInput:$p,getInput:Vp,handleAwaitingPromise:oo,hideLoading:Aa,rejectPromise:Op,resetValidationMessage:qp,showValidationMessage:jp,update:Yp});const Zy=(n,e,t)=>{n.toast?ev(n,e,t):(nv(e),rv(e),sv(n,e,t))},ev=(n,e,t)=>{e.popup.onclick=()=>{n&&(tv(n)||n.timer||n.input)||t(Ns.close)}},tv=n=>!!(n.showConfirmButton||n.showDenyButton||n.showCancelButton||n.showCloseButton);let Ta=!1;const nv=n=>{n.popup.onmousedown=()=>{n.container.onmouseup=function(e){n.container.onmouseup=()=>{},e.target===n.container&&(Ta=!0)}}},rv=n=>{n.container.onmousedown=e=>{e.target===n.container&&e.preventDefault(),n.popup.onmouseup=function(t){n.popup.onmouseup=()=>{},(t.target===n.popup||t.target instanceof HTMLElement&&n.popup.contains(t.target))&&(Ta=!0)}}},sv=(n,e,t)=>{e.container.onclick=r=>{if(Ta){Ta=!1;return}r.target===e.container&&el(n.allowOutsideClick)&&t(Ns.backdrop)}},iv=n=>typeof n=="object"&&n!==null&&"jquery"in n,Yd=n=>n instanceof Element||iv(n),ov=n=>{const e={};return typeof n[0]=="object"&&!Yd(n[0])?Object.assign(e,n[0]):["title","html","icon"].forEach((t,r)=>{const s=n[r];typeof s=="string"||Yd(s)?e[t]=s:s!==void 0&&Kr(`Unexpected type of ${t}! Expected "string" or "Element", got ${typeof s}`)}),e};function av(...n){return new this(...n)}function lv(n){class e extends this{_main(r,s){return super._main(r,Object.assign({},n,s))}}return e}const cv=()=>K.timeout&&K.timeout.getTimerLeft(),Jp=()=>{if(K.timeout)return gb(),K.timeout.stop()},Zp=()=>{if(K.timeout){const n=K.timeout.start();return Uu(n),n}},uv=()=>{const n=K.timeout;return n&&(n.running?Jp():Zp())},hv=n=>{if(K.timeout){const e=K.timeout.increase(n);return Uu(e,!0),e}},dv=()=>!!(K.timeout&&K.timeout.isRunning());let Qd=!1;const Ac={};function fv(n="data-swal-template"){Ac[n]=this,Qd||(document.body.addEventListener("click",pv),Qd=!0)}const pv=n=>{for(let e=n.target;e&&e!==document;e=e.parentNode)for(const t in Ac){const r=e.getAttribute&&e.getAttribute(t);if(r){Ac[t].fire({template:r});return}}};class mv{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,t){const r=this._getHandlersByEventName(e);r.includes(t)||r.push(t)}once(e,t){const r=(...s)=>{this.removeListener(e,r),t.apply(this,s)};this.on(e,r)}emit(e,...t){this._getHandlersByEventName(e).forEach(r=>{try{r.apply(this,t)}catch(s){console.error(s)}})}removeListener(e,t){const r=this._getHandlersByEventName(e),s=r.indexOf(t);s>-1&&r.splice(s,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}K.eventEmitter=new mv;const gv=(n,e)=>{K.eventEmitter&&K.eventEmitter.on(n,e)},wv=(n,e)=>{K.eventEmitter&&K.eventEmitter.once(n,e)},_v=(n,e)=>{if(K.eventEmitter){if(!n){K.eventEmitter.reset();return}e?K.eventEmitter.removeListener(n,e):K.eventEmitter.removeAllListeners(n)}};var bv=Object.freeze({__proto__:null,argsToParams:ov,bindClickHandler:fv,clickCancel:iy,clickConfirm:Cp,clickDeny:sy,enableLoading:ys,fire:av,getActions:ro,getCancelButton:ks,getCloseButton:Vu,getConfirmButton:un,getContainer:_t,getDenyButton:Yr,getFocusableElements:Mu,getFooter:mp,getHtmlContainer:Du,getIcon:Ps,getIconContent:cb,getImage:pp,getInputLabel:ub,getLoader:Os,getPopup:be,getProgressSteps:Lu,getTimerLeft:cv,getTimerProgressBar:nl,getTitle:fp,getValidationMessage:tl,increaseTimer:hv,isDeprecatedParameter:Wp,isLoading:db,isTimerRunning:dv,isUpdatableParameter:Gp,isValidParameter:zp,isVisible:ry,mixin:lv,off:_v,on:gv,once:wv,resumeTimer:Zp,showLoading:ys,stopTimer:Jp,toggleTimer:uv});class yv{constructor(e,t){this.callback=e,this.remaining=t,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const t=this.running;return t&&this.stop(),this.remaining+=e,t&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const em=["swal-title","swal-html","swal-footer"],vv=n=>{const e=typeof n.template=="string"?document.querySelector(n.template):n.template;if(!e)return{};const t=e.content;return Rv(t),Object.assign(Ev(t),Av(t),Tv(t),xv(t),Iv(t),Cv(t),Sv(t,em))},Ev=n=>{const e={};return Array.from(n.querySelectorAll("swal-param")).forEach(r=>{Fr(r,["name","value"]);const s=r.getAttribute("name"),i=r.getAttribute("value");!s||!i||(s in Gn&&typeof Gn[s]=="boolean"?e[s]=i!=="false":s in Gn&&typeof Gn[s]=="object"?e[s]=JSON.parse(i):e[s]=i)}),e},Av=n=>{const e={};return Array.from(n.querySelectorAll("swal-function-param")).forEach(r=>{const s=r.getAttribute("name"),i=r.getAttribute("value");!s||!i||(e[s]=new Function(`return ${i}`)())}),e},Tv=n=>{const e={};return Array.from(n.querySelectorAll("swal-button")).forEach(r=>{Fr(r,["type","color","aria-label"]);const s=r.getAttribute("type");if(!s||!["confirm","cancel","deny"].includes(s))return;e[`${s}ButtonText`]=r.innerHTML,e[`show${ku(s)}Button`]=!0;const i=r.getAttribute("color");i!==null&&(e[`${s}ButtonColor`]=i);const o=r.getAttribute("aria-label");o!==null&&(e[`${s}ButtonAriaLabel`]=o)}),e},xv=n=>{const e={},t=n.querySelector("swal-image");if(t){Fr(t,["src","width","height","alt"]);const r=t.getAttribute("src");r!==null&&(e.imageUrl=r||void 0);const s=t.getAttribute("width");s!==null&&(e.imageWidth=s||void 0);const i=t.getAttribute("height");i!==null&&(e.imageHeight=i||void 0);const o=t.getAttribute("alt");o!==null&&(e.imageAlt=o||void 0)}return e},Iv=n=>{const e={},t=n.querySelector("swal-icon");return t&&(Fr(t,["type","color"]),t.hasAttribute("type")&&(e.icon=t.getAttribute("type")),t.hasAttribute("color")&&(e.iconColor=t.getAttribute("color")),e.iconHtml=t.innerHTML),e},Cv=n=>{const e={},t=n.querySelector("swal-input");t&&(Fr(t,["type","label","placeholder","value"]),e.input=t.getAttribute("type")||"text",t.hasAttribute("label")&&(e.inputLabel=t.getAttribute("label")),t.hasAttribute("placeholder")&&(e.inputPlaceholder=t.getAttribute("placeholder")),t.hasAttribute("value")&&(e.inputValue=t.getAttribute("value")));const r=Array.from(n.querySelectorAll("swal-input-option"));return r.length&&(e.inputOptions={},r.forEach(s=>{Fr(s,["value"]);const i=s.getAttribute("value");if(!i)return;const o=s.innerHTML;e.inputOptions[i]=o})),e},Sv=(n,e)=>{const t={};for(const r in e){const s=e[r],i=n.querySelector(s);i&&(Fr(i,[]),t[s.replace(/^swal-/,"")]=i.innerHTML.trim())}return t},Rv=n=>{const e=em.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(n.children).forEach(t=>{const r=t.tagName.toLowerCase();e.includes(r)||wt(`Unrecognized element <${r}>`)})},Fr=(n,e)=>{Array.from(n.attributes).forEach(t=>{e.indexOf(t.name)===-1&&wt([`Unrecognized attribute "${t.name}" on <${n.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},tm=10,Pv=n=>{var e,t;const r=_t(),s=be();if(!r||!s)return;typeof n.willOpen=="function"&&n.willOpen(s),(e=K.eventEmitter)===null||e===void 0||e.emit("willOpen",s);const o=window.getComputedStyle(document.body).overflowY;if(Nv(r,s,n),setTimeout(()=>{kv(r,s)},tm),Bu()&&(Ov(r,n.scrollbarPadding!==void 0?n.scrollbarPadding:!1,o),fy()),py&&n.backdrop===!1&&s.scrollHeight>r.clientHeight&&(r.style.pointerEvents="auto"),!rl()&&!K.previousActiveElement&&(K.previousActiveElement=document.activeElement),typeof n.didOpen=="function"){const l=n.didOpen;setTimeout(()=>l(s))}(t=K.eventEmitter)===null||t===void 0||t.emit("didOpen",s)},xa=n=>{const e=be();if(!e||n.target!==e)return;const t=_t();t&&(e.removeEventListener("animationend",xa),e.removeEventListener("transitionend",xa),t.style.overflowY="auto",Ut(t,O["no-transition"]))},kv=(n,e)=>{_p(e)?(n.style.overflowY="hidden",e.addEventListener("animationend",xa),e.addEventListener("transitionend",xa)):n.style.overflowY="auto"},Ov=(n,e,t)=>{my(),e&&t!=="hidden"&&Ey(t),setTimeout(()=>{n.scrollTop=0})},Nv=(n,e,t)=>{var r;(r=t.showClass)!==null&&r!==void 0&&r.backdrop&&_e(n,t.showClass.backdrop),t.animation?(e.style.setProperty("opacity","0","important"),Ze(e,"grid"),setTimeout(()=>{var s;(s=t.showClass)!==null&&s!==void 0&&s.popup&&_e(e,t.showClass.popup),e.style.removeProperty("opacity")},tm)):Ze(e,"grid"),_e([document.documentElement,document.body],O.shown),t.heightAuto&&t.backdrop&&!t.toast&&_e([document.documentElement,document.body],O["height-auto"])};var Xd={email:(n,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(n)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(n,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(n)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Dv(n){n.inputValidator||(n.input==="email"&&(n.inputValidator=Xd.email),n.input==="url"&&(n.inputValidator=Xd.url))}function Lv(n){(!n.target||typeof n.target=="string"&&!document.querySelector(n.target)||typeof n.target!="string"&&!n.target.appendChild)&&(wt('Target parameter is not valid, defaulting to "body"'),n.target="body")}function Vv(n){Dv(n),n.showLoaderOnConfirm&&!n.preConfirm&&wt(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Lv(n),typeof n.title=="string"&&(n.title=n.title.split(`
`).join("<br />")),Tb(n)}let Yt;var No=new WeakMap;class Ve{constructor(...e){if(eb(this,No,Promise.resolve({isConfirmed:!1,isDenied:!1,isDismissed:!0})),typeof window>"u")return;Yt=this;const t=Object.freeze(this.constructor.argsToParams(e));this.params=t,this.isAwaitingPromise=!1,tb(No,this,this._main(Yt.params))}_main(e,t={}){if(Kp(Object.assign({},t,e)),K.currentInstance){const i=bs.swalPromiseResolve.get(K.currentInstance),{isAwaitingPromise:o}=K.currentInstance;K.currentInstance._destroy(),o||i({isDismissed:!0}),Bu()&&Pp()}K.currentInstance=Yt;const r=Bv(e,t);Vv(r),Object.freeze(r),K.timeout&&(K.timeout.stop(),delete K.timeout),clearTimeout(K.restoreFocusTimeout);const s=Fv(Yt);return Ip(Yt,r),Ee.innerParams.set(Yt,r),Mv(Yt,s,r)}then(e){return $d(No,this).then(e)}finally(e){return $d(No,this).finally(e)}}const Mv=(n,e,t)=>new Promise((r,s)=>{const i=o=>{n.close({isDismissed:!0,dismiss:o,isConfirmed:!1,isDenied:!1})};bs.swalPromiseResolve.set(n,r),bs.swalPromiseReject.set(n,s),e.confirmButton.onclick=()=>{Fy(n)},e.denyButton.onclick=()=>{Uy(n)},e.cancelButton.onclick=()=>{$y(n,i)},e.closeButton.onclick=()=>{i(Ns.close)},Zy(t,e,i),oy(K,t,i),Py(n,t),Pv(t),Uv(K,t,i),$v(e,t),setTimeout(()=>{e.container.scrollTop=0})}),Bv=(n,e)=>{const t=vv(n),r=Object.assign({},Gn,e,t,n);return r.showClass=Object.assign({},Gn.showClass,r.showClass),r.hideClass=Object.assign({},Gn.hideClass,r.hideClass),r.animation===!1&&(r.showClass={backdrop:"swal2-noanimation"},r.hideClass={}),r},Fv=n=>{const e={popup:be(),container:_t(),actions:ro(),confirmButton:un(),denyButton:Yr(),cancelButton:ks(),loader:Os(),closeButton:Vu(),validationMessage:tl(),progressSteps:Lu()};return Ee.domCache.set(n,e),e},Uv=(n,e,t)=>{const r=nl();ut(r),e.timer&&(n.timeout=new yv(()=>{t("timer"),delete n.timeout},e.timer),e.timerProgressBar&&r&&(Ze(r),Dt(r,e,"timerProgressBar"),setTimeout(()=>{n.timeout&&n.timeout.running&&Uu(e.timer)})))},$v=(n,e)=>{if(!e.toast){if(!el(e.allowEnterKey)){dp("allowEnterKey","preConfirm: () => false"),n.popup.focus();return}Hv(n)||jv(n,e)||vc(-1,1)}},Hv=n=>{const e=Array.from(n.popup.querySelectorAll("[autofocus]"));for(const t of e)if(t instanceof HTMLElement&&At(t))return t.focus(),!0;return!1},jv=(n,e)=>e.focusDeny&&At(n.denyButton)?(n.denyButton.focus(),!0):e.focusCancel&&At(n.cancelButton)?(n.cancelButton.focus(),!0):e.focusConfirm&&At(n.confirmButton)?(n.confirmButton.focus(),!0):!1;Ve.prototype.disableButtons=Up;Ve.prototype.enableButtons=Fp;Ve.prototype.getInput=Vp;Ve.prototype.disableInput=Hp;Ve.prototype.enableInput=$p;Ve.prototype.hideLoading=Aa;Ve.prototype.disableLoading=Aa;Ve.prototype.showValidationMessage=jp;Ve.prototype.resetValidationMessage=qp;Ve.prototype.close=zn;Ve.prototype.closePopup=zn;Ve.prototype.closeModal=zn;Ve.prototype.closeToast=zn;Ve.prototype.rejectPromise=Op;Ve.prototype.update=Yp;Ve.prototype._destroy=Qp;Object.assign(Ve,bv);Object.keys(Jy).forEach(n=>{Ve[n]=function(...e){if(Yt&&Yt[n])return Yt[n](...e)}});Ve.DismissReason=Ns;Ve.version="11.26.25";const ie=Ve;ie.default=ie;typeof document<"u"&&function(n,e){var t=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(t),t.styleSheet)t.styleSheet.disabled||(t.styleSheet.cssText=e);else try{t.innerHTML=e}catch{t.innerText=e}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:auto}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:auto}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');function qv(n){let e=!1;const t=()=>{n.innerHTML=`
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
          ${Fe?"":`
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
          `}

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
    `,document.getElementById("authForm").addEventListener("submit",r),document.getElementById("toggleAuthMode").addEventListener("click",o=>{o.preventDefault(),e=!e,t()})},r=async s=>{s.preventDefault();const i=document.getElementById("email").value.trim(),o=document.getElementById("password").value;ie.fire({title:e?"Criando conta...":"Autenticando...",allowOutsideClick:!1,didOpen:()=>{ie.showLoading()}});try{if(e){const l=document.getElementById("confirmPassword").value;if(o!==l)throw new Error("As senhas não coincidem.");await Q_(i,o),await ie.fire({icon:"success",title:"Cadastro Realizado!",text:"Sua conta foi criada e autorizada com sucesso. Você já está logado no sistema.",confirmButtonColor:"#2563eb"})}else{const{role:l}=await Y_(i,o);Fe||(localStorage.setItem("demo_user",i),localStorage.setItem("demo_role",l),window.location.reload()),ie.close()}}catch(l){ie.fire({icon:"error",title:"Ops! Ocorreu um erro",text:l.message||"Verifique seus dados e tente novamente.",confirmButtonColor:"#ef4444"})}};return t(),{destroy:()=>{}}}async function zv(n,e,t){let r=!1,s=null,i="nao_iniciado",o="",l=0;try{if(Fe){const F=bn(Rt,"coletas",e.email.toLowerCase().trim()),M=await Au(F);M.exists()&&(s=M.data(),i=s.status||"editando",o=s.pendencias||"")}else{const F=localStorage.getItem(`demo_coleta_${e.email}`);F&&(s=JSON.parse(F),i=s.status||"editando",o=s.pendencias||"")}}catch(F){console.error("Erro ao carregar dados do usuário:",F)}const c=i==="em_analise"||i==="deferido";let h="";i==="indeferido"?h=`
      <div class="mb-8 p-6 bg-red-50 border border-red-200 rounded-3xl text-sm text-red-800 space-y-2 animate-pulse">
        <span class="font-extrabold flex items-center gap-2 text-lg text-red-950">
          <svg class="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
          Atenção: Necessita de Correções
        </span>
        <p class="whitespace-pre-line font-medium leading-relaxed bg-white p-4 rounded-xl border border-red-100 text-red-900">${o||"Por favor revise os campos apontados pelo administrador."}</p>
      </div>
    `:i==="em_analise"?h=`
      <div class="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-3xl text-sm text-blue-800">
        <span class="font-extrabold flex items-center gap-2 text-lg text-blue-950">
          <svg class="w-6 h-6 text-blue-600 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
          </svg>
          Cadastro em Análise
        </span>
        <p class="mt-2 font-medium">Este formulário está em fase de análise pela administração e não pode ser editado no momento.</p>
      </div>
    `:i==="deferido"&&(h=`
      <div class="mb-8 p-6 bg-green-50 border border-green-200 rounded-3xl text-sm text-green-800">
        <span class="font-extrabold flex items-center gap-2 text-lg text-green-950">
          <svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
          Cadastro Homologado (Deferido)
        </span>
        <p class="mt-2 font-medium">Seu cadastro foi revisado e aprovado. As informações estão salvas de forma definitiva.</p>
      </div>
    `);const p=(F,M=null)=>{const A=(M==null?void 0:M.e_graduacao)||!1;return`
      <div class="formacao-card bg-slate-50/50 p-6 rounded-2xl border border-slate-100 relative space-y-6" data-index="${F}">
        <!-- Botão Remover no canto superior direito -->
        ${!c&&F>0?`
          <button type="button" class="btn-remover-formacao absolute top-4 right-4 text-red-500 hover:text-red-700 font-bold text-xs flex items-center gap-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Remover
          </button>
        `:""}
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 pt-2">
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1.5">Titulação / Nível</label>
            <input type="text" name="titulacao_${F}" required value="${(M==null?void 0:M.titulacao)||""}"
              class="w-full rounded-xl border border-slate-200 p-3 bg-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
              placeholder="Ex: Mestrado, Especialização, Graduação">
          </div>
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1.5">Local de Formação</label>
            <input type="text" name="local_formacao_${F}" required value="${(M==null?void 0:M.local_formacao)||""}"
              class="w-full rounded-xl border border-slate-200 p-3 bg-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
              placeholder="Nome da Instituição">
          </div>
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1.5">Ano de Conclusão / Previsão</label>
            <input type="number" name="ano_conclusao_${F}" required value="${(M==null?void 0:M.ano_conclusao)||""}"
              class="w-full rounded-xl border border-slate-200 p-3 bg-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
              placeholder="Ex: 2024">
          </div>
          
          <div class="flex items-center gap-3 pt-6">
            <input type="checkbox" id="e_graduacao_${F}" name="e_graduacao_${F}" class="chk-e-graduacao w-5 h-5 rounded border-slate-300 text-blue-700 focus:ring-blue-500" ${A?"checked":""}>
            <label for="e_graduacao_${F}" class="text-base font-semibold text-slate-800">Graduação em Andamento?</label>
          </div>

          <!-- Inputs ocultos para carregar URLs de documentos salvos anteriormente -->
          <input type="hidden" name="diplomaUrl_${F}" value="${(M==null?void 0:M.diplomaUrl)||""}">
          <input type="hidden" name="historicoUrl_${F}" value="${(M==null?void 0:M.historicoUrl)||""}">
          <input type="hidden" name="matriculaUrl_${F}" value="${(M==null?void 0:M.matriculaUrl)||""}">

          <!-- Bloco de Diploma (exibido se não for graduação em andamento) -->
          <div class="block-diploma md:col-span-2 space-y-2 ${A?"hidden":""}">
            <label class="block text-sm font-semibold text-slate-700">Anexar Diploma (PDF/JPG) ${M!=null&&M.diplomaUrl?'<span class="text-green-600 font-normal text-xs">(Já enviado)</span>':""}</label>
            <div class="w-full rounded-xl border border-slate-200 p-1.5 bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition duration-150 ease-in-out">
              <input type="file" name="diploma_${F}" accept=".pdf,.jpg,.jpeg"
                class="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer">
            </div>
            ${M!=null&&M.diplomaUrl?`
              <a href="${M.diplomaUrl}" target="_blank" class="text-xs text-blue-600 hover:underline inline-block font-semibold">Visualizar arquivo atual</a>
            `:""}
          </div>

          <!-- Bloco de Graduação em Andamento (exibido se for graduação em andamento) -->
          <div class="block-graduacao md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 ${A?"":"hidden"}">
            <!-- Histórico Escolar -->
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-slate-700">Anexar Histórico Escolar (PDF/JPG) ${M!=null&&M.historicoUrl?'<span class="text-green-600 font-normal text-xs">(Já enviado)</span>':""}</label>
              <div class="w-full rounded-xl border border-slate-200 p-1.5 bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition duration-150 ease-in-out">
                <input type="file" name="historico_${F}" accept=".pdf,.jpg,.jpeg"
                  class="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer">
              </div>
              ${M!=null&&M.historicoUrl?`
                <a href="${M.historicoUrl}" target="_blank" class="text-xs text-blue-600 hover:underline inline-block font-semibold">Visualizar arquivo atual</a>
              `:""}
            </div>

            <!-- Comprovante de Matrícula -->
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-slate-700">Comprovante de Matrícula (PDF/JPG) ${M!=null&&M.matriculaUrl?'<span class="text-green-600 font-normal text-xs">(Já enviado)</span>':""}</label>
              <div class="w-full rounded-xl border border-slate-200 p-1.5 bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition duration-150 ease-in-out">
                <input type="file" name="matricula_${F}" accept=".pdf,.jpg,.jpeg"
                  class="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer">
              </div>
              ${M!=null&&M.matriculaUrl?`
                <a href="${M.matriculaUrl}" target="_blank" class="text-xs text-blue-600 hover:underline inline-block font-semibold">Visualizar arquivo atual</a>
              `:""}
            </div>
          </div>

        </div>
      </div>
    `};n.innerHTML=`
    <!-- Top Nav Bar -->
    <div class="max-w-5xl mx-auto mb-6 flex justify-between items-center bg-white p-4 px-6 rounded-2xl shadow-sm border border-slate-100">
      <div class="flex items-center gap-3">
        <span class="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
        <span class="text-sm font-medium text-slate-600">Sessão activa: <strong class="text-slate-800 font-bold">${e.email}</strong></span>
        <span class="text-xs bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full font-semibold capitalize">${t}</span>
      </div>
      <div class="flex items-center gap-3">
        <button id="btnVoltarInicio" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm px-4 py-2 rounded-xl transition duration-150 flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Início
        </button>
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
      
      <!-- Banner Informativo superior se aplicável -->
      ${h}

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
            
            <!-- CAMPO FOTO DE PERFIL -->
            <div class="md:col-span-2">
              <label for="foto" class="block text-sm font-semibold text-slate-700 mb-1.5">Foto de Perfil (PNG/JPG)</label>
              <div class="flex items-center gap-4">
                <div id="fotoPreviewContainer" class="w-20 h-20 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center flex-shrink-0 shadow-inner">
                  ${s!=null&&s.fotoUrl?`<img src="${s.fotoUrl}" class="w-full h-full object-cover">`:`
                    <svg class="w-10 h-10 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                  `}
                </div>
                <div class="flex-1 rounded-xl border border-slate-200 p-1.5 bg-slate-50 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition duration-150 ease-in-out">
                  <input type="file" id="foto" name="foto" accept=".png,.jpg,.jpeg"
                    class="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer">
                </div>
              </div>
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

        <!-- 4. Formação Acadêmica (Dinamizada) -->
        <section class="space-y-6">
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.825-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            <h2 class="text-2xl font-bold text-slate-900 tracking-tight">4. Formação Acadêmica</h2>
          </div>
          
          <div id="formacoesContainer" class="space-y-6">
            <!-- Formações inseridas dinamicamente pelo JS -->
          </div>

          <button type="button" id="btnAdicionarFormacao" class="bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-sm px-5 py-3 rounded-xl transition duration-150 flex items-center gap-1.5 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            Adicionar Outra Formação
          </button>
        </section>

        <!-- 5. Cursos de Capacitação (Nova seção) -->
        <section class="space-y-6">
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-3 9a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
            <h2 class="text-2xl font-bold text-slate-900 tracking-tight">5. Cursos de Capacitação</h2>
          </div>

          <p class="text-sm text-slate-500">Selecione os cursos de capacitação que você possui concluídos ou em andamento:</p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-6 p-6 bg-slate-50/50 rounded-2xl border border-slate-100">
            <label class="flex items-center gap-3 cursor-pointer text-sm font-semibold text-slate-700">
              <input type="checkbox" name="capacitacao_biosseguranca" value="Biossegurança" class="chk-capacitacao w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500">
              Biossegurança
            </label>
            <label class="flex items-center gap-3 cursor-pointer text-sm font-semibold text-slate-700">
              <input type="checkbox" name="capacitacao_bioprotecao" value="Bioproteção" class="chk-capacitacao w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500">
              Bioproteção
            </label>
            <label class="flex items-center gap-3 cursor-pointer text-sm font-semibold text-slate-700">
              <input type="checkbox" name="capacitacao_brigadista" value="Brigadista" class="chk-capacitacao w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500">
              Brigadista
            </label>
            <label class="flex items-center gap-3 cursor-pointer text-sm font-semibold text-slate-700">
              <input type="checkbox" name="capacitacao_microscopia" value="Microscopia" class="chk-capacitacao w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500">
              Microscopia
            </label>
            <label class="flex items-center gap-3 cursor-pointer text-sm font-semibold text-slate-700">
              <input type="checkbox" name="capacitacao_solucoes" value="Preparo de soluções químicas" class="chk-capacitacao w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500">
              Preparo de soluções químicas
            </label>
            <label class="flex items-center gap-3 cursor-pointer text-sm font-semibold text-slate-700">
              <input type="checkbox" name="capacitacao_processamento" value="Processamento histológico" class="chk-capacitacao w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500">
              Processamento histológico
            </label>
            <label class="flex items-center gap-3 cursor-pointer text-sm font-semibold text-slate-700">
              <input type="checkbox" name="capacitacao_inclusao" value="Inclusão de tecidos em parafina" class="chk-capacitacao w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500">
              Inclusão de tecidos em parafina
            </label>
            <label class="flex items-center gap-3 cursor-pointer text-sm font-semibold text-slate-700">
              <input type="checkbox" name="capacitacao_microtomia" value="Microtomia" class="chk-capacitacao w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500">
              Microtomia
            </label>
            <label class="flex items-center gap-3 cursor-pointer text-sm font-semibold text-slate-700">
              <input type="checkbox" name="capacitacao_coloracoes" value="Colorações histológicas" class="chk-capacitacao w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500">
              Colorações histológicas
            </label>
          </div>

          <div class="space-y-2">
            <label for="outras_capacitacoes" class="block text-sm font-semibold text-slate-700">Outros Cursos / Informações Complementares</label>
            <textarea id="outras_capacitacoes" name="outras_capacitacoes" rows="3"
              class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
              placeholder="Digite aqui outros cursos concluídos ou em andamento..."></textarea>
          </div>
        </section>

        <!-- 6. Informações do Coleta (antiga seção 5) -->
        <section class="space-y-6 bg-blue-50 p-8 rounded-2xl border border-blue-100">
          <div class="flex items-center gap-3 border-b border-blue-100 pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h2 class="text-2xl font-bold text-blue-900 tracking-tight">6. Informações do Coleta (Anual)</h2>
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
          ${c?`
            <button type="button" id="btnVoltarInicioFooter"
              class="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition duration-150 shadow-lg shadow-blue-200 transform hover:-translate-y-0.5">
              Voltar ao Início
            </button>
          `:`
            <button type="button" id="btnCancelar"
              class="bg-slate-100 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition duration-150 shadow-sm">
              Cancelar
            </button>
            <button type="button" id="btnSalvarRascunho"
              class="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold transition duration-150 shadow-lg shadow-amber-100 transform hover:-translate-y-0.5">
              Salvar Rascunho
            </button>
            <button type="submit" id="btnEnviar"
              class="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition duration-150 shadow-lg shadow-blue-200 transform hover:-translate-y-0.5">
              Enviar para Análise
            </button>
          `}
        </footer>

      </form>
    </div>
  `;const g=document.getElementById("coletaForm"),x=document.getElementById("formacoesContainer"),S=(s==null?void 0:s.formacoes)||[];if(S.length>0?S.forEach((F,M)=>{x.insertAdjacentHTML("beforeend",p(M,F)),l=M+1}):(x.insertAdjacentHTML("beforeend",p(0)),l=1),s){Object.keys(s).forEach(A=>{if(A!=="formacoes"&&A!=="foto"&&A!=="capacitacoes"&&A!=="outras_capacitacoes"){const y=g.elements[A];y&&(y.type==="checkbox"?y.checked=!!s[A]:y.value=s[A])}}),(s.capacitacoes||[]).forEach(A=>{const y=g.querySelector(`.chk-capacitacao[value="${A}"]`);y&&(y.checked=!0)});const M=g.querySelector('[name="outras_capacitacoes"]');M&&s.outras_capacitacoes&&(M.value=s.outras_capacitacoes)}if(c){g.querySelectorAll("input, select, textarea").forEach(m=>{m.disabled=!0,m.tagName==="INPUT"&&m.type!=="checkbox"&&m.classList.add("bg-slate-50","text-slate-500","cursor-not-allowed")}),g.querySelectorAll('input[type="file"]').forEach(m=>{const v=m.closest(".w-full.rounded-xl.border")||m.closest(".flex-1.rounded-xl");v&&(v.style.display="none")});const A=document.getElementById("btnAdicionarFormacao");A&&(A.style.display="none"),g.querySelectorAll(".btn-remover-formacao").forEach(m=>m.style.display="none")}const R=document.getElementById("btnAdicionarFormacao");R&&R.addEventListener("click",()=>{x.insertAdjacentHTML("beforeend",p(l)),l++}),x.addEventListener("click",F=>{const M=F.target.closest(".btn-remover-formacao");M&&M.closest(".formacao-card").remove()}),x.addEventListener("change",F=>{if(F.target.classList.contains("chk-e-graduacao")){const M=F.target.closest(".formacao-card"),A=M.querySelector(".block-diploma"),y=M.querySelector(".block-graduacao");F.target.checked?(A.classList.add("hidden"),y.classList.remove("hidden")):(A.classList.remove("hidden"),y.classList.add("hidden"))}}),g.addEventListener("change",F=>{if(F.target.type==="file"){const M=F.target.files[0];if(M){let y=[];if(F.target.id==="foto"?y=["image/png","image/jpeg","image/jpg"]:y=["application/pdf","image/png","image/jpeg","image/jpg"],!y.includes(M.type)){ie.fire({icon:"error",title:"Formato não permitido",text:F.target.id==="foto"?"Por favor, selecione apenas arquivos de imagem PNG ou JPG/JPEG para a foto.":"Por favor, selecione apenas arquivos PDF ou imagens JPG/PNG/JPEG.",confirmButtonColor:"#ef4444"}),F.target.value="";return}M.size>5242880&&(ie.fire({icon:"error",title:"Arquivo muito pesado",text:"O tamanho máximo permitido é de 5MB. O seu arquivo possui "+(M.size/(1024*1024)).toFixed(2)+"MB.",confirmButtonColor:"#ef4444"}),F.target.value="")}}}),document.getElementById("btnVoltarInicio").addEventListener("click",()=>yt("inicio")),c&&document.getElementById("btnVoltarInicioFooter").addEventListener("click",()=>yt("inicio")),document.getElementById("btnLogout").addEventListener("click",async()=>{(await ie.fire({title:"Deseja sair?",text:"Você será desconectado do sistema.",icon:"question",showCancelButton:!0,confirmButtonText:"Sair",cancelButtonText:"Permanecer",confirmButtonColor:"#ef4444",cancelButtonColor:"#94a3b8"})).isConfirmed&&(Fe?await Pu():(localStorage.removeItem("demo_user"),localStorage.removeItem("demo_role"),window.location.reload()))});const U=document.getElementById("btnIrAdmin");U&&U.addEventListener("click",()=>yt("admin"));const Q=document.getElementById("btnCancelar");Q&&Q.addEventListener("click",()=>{ie.fire({title:"Deseja cancelar?",text:"As informações não salvas serão perdidas.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Sim, cancelar",cancelButtonText:"Continuar preenchendo"}).then(F=>{F.isConfirmed&&yt("inicio")})});const re=async(F,M)=>{if(Fe){const A=j_(ap,M);return await $_(A,F),await H_(A)}return"https://example.com/mock-file-upload.pdf"},ue=async()=>{var Y,de,et;const F={},M=new FormData(g),A=["foto","outras_capacitacoes","e_docente"];for(const[ye,Me]of M.entries())!ye.startsWith("titulacao_")&&!ye.startsWith("local_formacao_")&&!ye.startsWith("ano_conclusao_")&&!ye.startsWith("e_graduacao_")&&!ye.startsWith("diploma_")&&!ye.startsWith("historico_")&&!ye.startsWith("matricula_")&&!ye.startsWith("capacitacao_")&&!A.includes(ye)&&(F[ye]=Me);F.e_docente=g.elements.e_docente.checked,F.email=e.email.toLowerCase().trim(),F.lastUpdated=new Date().toISOString();const y=document.getElementById("foto");let m=(s==null?void 0:s.fotoUrl)||"";if(y&&y.files[0]){const ye=y.files[0].name.split(".").pop();m=await re(y.files[0],`fotos/${e.email.replace(/[@.]/g,"_")}_foto_${Date.now()}.${ye}`)}F.fotoUrl=m;const v=[];g.querySelectorAll(".chk-capacitacao:checked").forEach(ye=>v.push(ye.value)),F.capacitacoes=v,F.outras_capacitacoes=g.querySelector('[name="outras_capacitacoes"]').value.trim();const T=[],b=x.querySelectorAll(".formacao-card");for(let ye of b){const Me=ye.getAttribute("data-index"),Qr=ye.querySelector(`[name="titulacao_${Me}"]`).value.trim(),il=ye.querySelector(`[name="local_formacao_${Me}"]`).value.trim(),ao=ye.querySelector(`[name="ano_conclusao_${Me}"]`).value.trim(),Ds=ye.querySelector(`[name="e_graduacao_${Me}"]`).checked;let Xr=ye.querySelector(`[name="diplomaUrl_${Me}"]`).value||"",In=ye.querySelector(`[name="historicoUrl_${Me}"]`).value||"",pr=ye.querySelector(`[name="matriculaUrl_${Me}"]`).value||"";const mr=(Y=ye.querySelector(`[name="diploma_${Me}"]`))==null?void 0:Y.files[0],gr=(de=ye.querySelector(`[name="historico_${Me}"]`))==null?void 0:de.files[0],wr=(et=ye.querySelector(`[name="matricula_${Me}"]`))==null?void 0:et.files[0];if(Ds){if(gr){const Cn=gr.name.split(".").pop();In=await re(gr,`historicos/${e.email.replace(/[@.]/g,"_")}_historico_${Me}_${Date.now()}.${Cn}`)}if(wr){const Cn=wr.name.split(".").pop();pr=await re(wr,`matriculas/${e.email.replace(/[@.]/g,"_")}_matricula_${Me}_${Date.now()}.${Cn}`)}Xr=""}else{if(mr){const Cn=mr.name.split(".").pop();Xr=await re(mr,`diplomas/${e.email.replace(/[@.]/g,"_")}_diploma_${Me}_${Date.now()}.${Cn}`)}In="",pr=""}T.push({titulacao:Qr,local_formacao:il,ano_conclusao:ao,e_graduacao:Ds,diplomaUrl:Xr,historicoUrl:In,matriculaUrl:pr})}return F.formacoes=T,F},me=document.getElementById("btnSalvarRascunho");return me&&me.addEventListener("click",async()=>{if(!r){r=!0,ie.fire({title:"Salvando Rascunho...",text:"Gravando informações e arquivos.",allowOutsideClick:!1,didOpen:()=>ie.showLoading()});try{const F=await ue();if(F.status="editando",F.pendencias=o,Fe)await Bi(bn(Rt,"coletas",e.email.toLowerCase().trim()),F);else{localStorage.setItem(`demo_coleta_${e.email}`,JSON.stringify(F));const M=JSON.parse(localStorage.getItem("all_demo_coletas")||"{}");M[e.email]=F,localStorage.setItem("all_demo_coletas",JSON.stringify(M))}await ie.fire({icon:"success",title:"Rascunho Salvo!",text:"Seus dados foram guardados como rascunho com sucesso.",confirmButtonColor:"#f59e0b"}),yt("inicio")}catch(F){console.error(F),ie.fire({icon:"error",title:"Erro ao Salvar",text:F.message||"Houve um erro no salvamento do rascunho.",confirmButtonColor:"#ef4444"})}finally{r=!1}}}),g&&g.addEventListener("submit",async F=>{var m,v,E;if(F.preventDefault(),r)return;const M=x.querySelectorAll(".formacao-card");let A=!1;for(let T of M){const b=T.getAttribute("data-index"),Y=T.querySelector(`[name="e_graduacao_${b}"]`).checked,de=T.querySelector(`[name="diplomaUrl_${b}"]`).value||((m=T.querySelector(`[name="diploma_${b}"]`))==null?void 0:m.files[0]),et=T.querySelector(`[name="historicoUrl_${b}"]`).value||((v=T.querySelector(`[name="historico_${b}"]`))==null?void 0:v.files[0]),ye=T.querySelector(`[name="matriculaUrl_${b}"]`).value||((E=T.querySelector(`[name="matricula_${b}"]`))==null?void 0:E.files[0]);if(Y){if(!et||!ye){A=!0;break}}else if(!de){A=!0;break}}if(A){ie.fire({icon:"error",title:"Documentos Pendentes",text:"Você precisa anexar os documentos exigidos para todas as suas formações acadêmicas (Diploma para concluídos, ou Histórico + Comprovante de Matrícula para graduações em andamento) antes de enviar para análise.",confirmButtonColor:"#ef4444"});return}if((await ie.fire({title:"Deseja enviar?",text:"O formulário será bloqueado para edição até que a administração conclua a revisão.",icon:"question",showCancelButton:!0,confirmButtonText:"Sim, enviar",cancelButtonText:"Revisar",confirmButtonColor:"#2563eb",cancelButtonColor:"#94a3b8"})).isConfirmed){r=!0,ie.fire({title:"Enviando Cadastro...",text:"Submetendo dados e arquivos para homologação.",allowOutsideClick:!1,didOpen:()=>ie.showLoading()});try{const T=await ue();if(T.status="em_analise",T.pendencias="",Fe)await Bi(bn(Rt,"coletas",e.email.toLowerCase().trim()),T);else{localStorage.setItem(`demo_coleta_${e.email}`,JSON.stringify(T));const b=JSON.parse(localStorage.getItem("all_demo_coletas")||"{}");b[e.email]=T,localStorage.setItem("all_demo_coletas",JSON.stringify(b))}await ie.fire({icon:"success",title:"Enviado com sucesso!",text:"Seu formulário está em fase de análise pela equipe do LAMES.",confirmButtonColor:"#2563eb"}),yt("inicio")}catch(T){console.error(T),ie.fire({icon:"error",title:"Erro ao Enviar",text:T.message||"Houve um erro ao submeter seu formulário.",confirmButtonColor:"#ef4444"})}finally{r=!1}}}),{destroy:()=>{}}}async function Gv(n,e,t){let r="registros",s="",i="",o="",l="",c="",h=[],p=[],g=[];localStorage.getItem("demo_whitelist")||localStorage.setItem("demo_whitelist",JSON.stringify({"admin@lames.org":{email:"admin@lames.org",role:"admin"},"colab@lames.org":{email:"colab@lames.org",role:"colaborador"}})),localStorage.getItem("all_demo_coletas")||localStorage.setItem("all_demo_coletas",JSON.stringify({"colab@lames.org":{nome_completo:"Antônio da Silva",tipo_integrante:"bolsista",cpf:"111.222.333-44",rg:"MG-12.345.678",endereco:"Rua das Flores, 123, Rio de Janeiro - RJ",email:"colab@lames.org",telefone:"(21) 98888-7777",grupo_sanguineo:"O+",alergias:"Nenhuma",contato_emergencia:"Maria (Mãe) - (21) 99999-8888",titulacao:"Mestre",local_formacao:"FIOCRUZ",ano_conclusao:"2023",diplomaUrl:"https://example.com/mock-diploma.pdf",vinculo:"Bolsista de Mestrado",prazo_vinculo:"24 meses",origem_vinculo:"CNPq",cargo_nivel:"Nível I",situacao_atual:"Ativo",e_docente:!1,orientador:"Dr. João Medeiros",status:"em_analise",pendencias:"",lastUpdated:new Date().toISOString()}})),localStorage.getItem("all_demo_usuarios")||localStorage.setItem("all_demo_usuarios",JSON.stringify({"admin@lames.org":{email:"admin@lames.org",role:"admin",lastAccess:new Date().toISOString()},"colab@lames.org":{email:"colab@lames.org",role:"colaborador",lastAccess:new Date().toISOString()}}));const x=async()=>{if(Fe){try{h=(await $l(Vl(Rt,"coletas"))).docs.map(v=>v.data())}catch(m){console.error("Erro ao buscar coletas:",m)}try{p=(await $l(Vl(Rt,"whitelist"))).docs.map(v=>v.data())}catch(m){console.error("Erro ao buscar whitelist:",m)}try{g=(await $l(Vl(Rt,"usuarios"))).docs.map(v=>v.data())}catch(m){console.error("Erro ao buscar usuários registrados:",m)}}else{const m=JSON.parse(localStorage.getItem("demo_whitelist")||"{}");p=Object.values(m);const v=JSON.parse(localStorage.getItem("all_demo_coletas")||"{}");h=Object.values(v);const E=JSON.parse(localStorage.getItem("all_demo_usuarios")||"{}");g=Object.values(E)}},S=m=>{switch(m){case"deferido":return'<span class="bg-green-50 text-green-700 border border-green-100 text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Deferido</span>';case"indeferido":return'<span class="bg-red-50 text-red-700 border border-red-100 text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Indeferido</span>';case"em_analise":return'<span class="bg-blue-50 text-blue-700 border border-blue-100 text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider animate-pulse">Em Análise</span>';case"editando":default:return'<span class="bg-amber-50 text-amber-700 border border-amber-100 text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Rascunho</span>'}},R=()=>{n.innerHTML=`
      <!-- Top Nav Bar -->
      <div class="max-w-6xl mx-auto mb-6 flex justify-between items-center bg-white p-4 px-6 rounded-2xl shadow-sm border border-slate-100">
        <div class="flex items-center gap-3">
          <span class="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
          <span class="text-sm font-medium text-slate-600">Administrador: <strong class="text-slate-800 font-bold">${e.email}</strong></span>
          <span class="text-xs bg-red-50 text-red-700 px-2.5 py-0.5 rounded-full font-semibold capitalize">${t}</span>
        </div>
        <div class="flex items-center gap-3">
          <button id="btnVoltarInicio" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm px-4 py-2 rounded-xl transition duration-150 flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Início
          </button>
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
              Registros Coleta (${h.length})
            </button>
            <button id="tabWhitelist" class="px-5 py-3 font-bold text-sm border-b-2 transition duration-150 ${r==="whitelist"?"border-blue-600 text-blue-600":"border-transparent text-slate-500 hover:text-slate-700"}">
              Gerenciar Acessos (${p.length})
            </button>
            <button id="tabUsuarios" class="px-5 py-3 font-bold text-sm border-b-2 transition duration-150 ${r==="usuarios"?"border-blue-600 text-blue-600":"border-transparent text-slate-500 hover:text-slate-700"}">
              Usuários Registrados (${g.length})
            </button>
          </div>
        </div>

        <div class="p-8">
          ${r==="registros"?B():""}
          ${r==="whitelist"?U():""}
          ${r==="usuarios"?Q():""}
        </div>
      </div>
    `,document.getElementById("btnVoltarInicio").addEventListener("click",()=>yt("inicio")),document.getElementById("btnPreencherForm").addEventListener("click",()=>yt("formulario")),document.getElementById("btnLogout").addEventListener("click",async()=>{(await ie.fire({title:"Deseja sair?",icon:"question",showCancelButton:!0,confirmButtonText:"Sair",cancelButtonText:"Permanecer",confirmButtonColor:"#ef4444",cancelButtonColor:"#94a3b8"})).isConfirmed&&(Fe?await Pu():(localStorage.removeItem("demo_user"),localStorage.removeItem("demo_role"),window.location.reload()))}),document.getElementById("tabRegistros").addEventListener("click",()=>{r="registros",R()}),document.getElementById("tabWhitelist").addEventListener("click",()=>{r="whitelist",R()}),document.getElementById("tabUsuarios").addEventListener("click",()=>{r="usuarios",R()}),re()},B=()=>{const m=h.filter(v=>{const E=(v.nome_completo||"").toLowerCase(),T=(v.email||"").toLowerCase(),b=E.includes(s.toLowerCase())||T.includes(s.toLowerCase()),Y=i===""||v.tipo_integrante===i,de=v.status||"editando";return b&&Y&&(o===""||de===o)});return`
      <!-- Filters bar -->
      <div class="flex flex-col md:flex-row gap-4 mb-6">
        <div class="flex-1">
          <input type="text" id="searchBar" value="${s}" placeholder="Buscar por nome ou e-mail..."
            class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 text-sm">
        </div>
        <div class="w-full md:w-56">
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
        <div class="w-full md:w-52">
          <select id="filterStatusSelect"
            class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 text-sm">
            <option value="">Todos os Status</option>
            <option value="editando" ${o==="editando"?"selected":""}>Rascunho</option>
            <option value="em_analise" ${o==="em_analise"?"selected":""}>Em Análise</option>
            <option value="deferido" ${o==="deferido"?"selected":""}>Deferido</option>
            <option value="indeferido" ${o==="indeferido"?"selected":""}>Indeferido</option>
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
              <th class="p-4 px-6 text-center">Status</th>
              <th class="p-4 px-6">Atualizado em</th>
              <th class="p-4 px-6 text-right">Ações</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            ${m.length===0?`
              <tr>
                <td colspan="6" class="text-center p-12 text-slate-400">Nenhum registro encontrado.</td>
              </tr>
            `:m.map(v=>`
              <tr class="hover:bg-slate-50/50 transition">
                <td class="p-4 px-6 font-bold text-slate-900">${v.nome_completo||"Não informado"}</td>
                <td class="p-4 px-6 font-mono text-xs">${v.email}</td>
                <td class="p-4 px-6"><span class="bg-slate-100 text-slate-700 text-xs px-2.5 py-0.5 rounded-full capitalize">${v.tipo_integrante||"-"}</span></td>
                <td class="p-4 px-6 text-center">${S(v.status)}</td>
                <td class="p-4 px-6 text-slate-500 text-xs">${v.lastUpdated?new Date(v.lastUpdated).toLocaleString("pt-BR"):"-"}</td>
                <td class="p-4 px-6 text-right">
                  <button data-email="${v.email}" class="btnVerDetalhes bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-3.5 py-2 rounded-lg transition duration-150">
                    Ver Ficha
                  </button>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `},U=()=>`
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
                ${p.length===0?`
                  <tr>
                    <td colspan="3" class="text-center p-8 text-slate-400">Nenhum e-mail autorizado cadastrado.</td>
                  </tr>
                `:p.map(m=>`
                  <tr class="hover:bg-slate-50/50 transition">
                    <td class="p-4 px-6 font-mono text-xs text-slate-900 font-bold">${m.email}</td>
                    <td class="p-4 px-6">
                      <span class="text-xs px-2.5 py-0.5 rounded-full font-semibold ${m.role==="admin"?"bg-red-50 text-red-700 border border-red-100":"bg-blue-50 text-blue-700 border border-blue-100"}">
                        ${m.role==="admin"?"Administrador":"Colaborador"}
                      </span>
                    </td>
                    <td class="p-4 px-6 text-right">
                      <button data-email="${m.email}" class="btnRemoverWL text-red-600 hover:text-red-700 font-bold text-xs hover:underline focus:outline-none transition duration-150">
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
    `,Q=()=>{const m=g.filter(v=>{const T=(v.email||"").toLowerCase().includes(l.toLowerCase()),b=c===""||v.role===c;return T&&b});return`
      <!-- Filters bar -->
      <div class="flex flex-col md:flex-row gap-4 mb-6">
        <div class="flex-1">
          <input type="text" id="searchUserEmail" value="${l}" placeholder="Buscar e-mail..."
            class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 text-sm">
        </div>
        <div class="w-full md:w-64">
          <select id="filterUserRoleSelect"
            class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 text-sm">
            <option value="">Todos os Perfis</option>
            <option value="colaborador" ${c==="colaborador"?"selected":""}>Colaborador</option>
            <option value="admin" ${c==="admin"?"selected":""}>Administrador</option>
          </select>
        </div>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto border border-slate-100 rounded-2xl shadow-sm">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="bg-slate-50 border-b border-slate-100 text-slate-600 font-semibold">
              <th class="p-4 px-6">E-mail Cadastrado</th>
              <th class="p-4 px-6">Perfil</th>
              <th class="p-4 px-6">Último Acesso no Sistema</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            ${m.length===0?`
              <tr>
                <td colspan="3" class="text-center p-12 text-slate-400">Nenhum usuário cadastrado fez login ainda.</td>
              </tr>
            `:m.map(v=>`
              <tr class="hover:bg-slate-50/50 transition">
                <td class="p-4 px-6 font-mono text-xs text-slate-900 font-bold">${v.email}</td>
                <td class="p-4 px-6">
                  <span class="text-xs px-2.5 py-0.5 rounded-full font-semibold ${v.role==="admin"?"bg-red-50 text-red-700 border border-red-100":"bg-blue-50 text-blue-700 border border-blue-100"}">
                    ${v.role==="admin"?"Administrador":"Colaborador"}
                  </span>
                </td>
                <td class="p-4 px-6 text-slate-500 font-medium">
                  ${v.lastAccess?new Date(v.lastAccess).toLocaleString("pt-BR"):"-"}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `},re=()=>{r==="registros"?(document.getElementById("searchBar").addEventListener("input",T=>{s=T.target.value,n.querySelector("tbody").outerHTML=me(),F()}),document.getElementById("filterTypeSelect").addEventListener("change",T=>{i=T.target.value,n.querySelector("tbody").outerHTML=me(),F()}),document.getElementById("filterStatusSelect").addEventListener("change",T=>{o=T.target.value,n.querySelector("tbody").outerHTML=me(),F()}),F()):r==="whitelist"?(document.getElementById("addWhitelistForm").addEventListener("submit",async E=>{E.preventDefault();const T=document.getElementById("wlEmail"),b=document.getElementById("wlRole"),Y=T.value.toLowerCase().trim(),de=b.value;ie.fire({title:"Adicionando e-mail...",allowOutsideClick:!1,didOpen:()=>ie.showLoading()});try{if(Fe)await Bi(bn(Rt,"whitelist",Y),{email:Y,role:de});else{const et=JSON.parse(localStorage.getItem("demo_whitelist")||"{}");et[Y]={email:Y,role:de},localStorage.setItem("demo_whitelist",JSON.stringify(et))}await x(),ie.fire({icon:"success",title:"Autorizado!",text:`O e-mail ${Y} foi autorizado como ${de}.`,confirmButtonColor:"#2563eb"}),R()}catch(et){ie.fire({icon:"error",title:"Ops! Ocorreu um erro",text:et.message||"Erro ao gravar informações.",confirmButtonColor:"#ef4444"})}}),n.querySelectorAll(".btnRemoverWL").forEach(E=>{E.addEventListener("click",async T=>{const b=T.target.getAttribute("data-email");if(b===e.email.toLowerCase()){ie.fire({icon:"warning",title:"Ação Bloqueada",text:"Você não pode remover o seu próprio e-mail da whitelist.",confirmButtonColor:"#ef4444"});return}if((await ie.fire({title:"Deseja revogar o acesso?",text:`O e-mail ${b} não poderá mais fazer login no sistema.`,icon:"warning",showCancelButton:!0,confirmButtonText:"Revogar Acesso",cancelButtonText:"Manter",confirmButtonColor:"#ef4444",cancelButtonColor:"#94a3b8"})).isConfirmed){ie.fire({title:"Removendo...",allowOutsideClick:!1,didOpen:()=>ie.showLoading()});try{if(Fe)await Pw(bn(Rt,"whitelist",b));else{const de=JSON.parse(localStorage.getItem("demo_whitelist")||"{}");delete de[b],localStorage.setItem("demo_whitelist",JSON.stringify(de))}await x(),ie.fire({icon:"success",title:"Acesso Revogado!",text:`O e-mail ${b} foi removido da whitelist.`,confirmButtonColor:"#2563eb"}),R()}catch(de){ie.fire({icon:"error",title:"Ops! Ocorreu um erro",text:de.message||"Erro ao remover acesso.",confirmButtonColor:"#ef4444"})}}})})):r==="usuarios"&&(document.getElementById("searchUserEmail").addEventListener("input",E=>{l=E.target.value,n.querySelector("tbody").outerHTML=ue()}),document.getElementById("filterUserRoleSelect").addEventListener("change",E=>{c=E.target.value,n.querySelector("tbody").outerHTML=ue()}))},ue=()=>{const m=g.filter(v=>{const T=(v.email||"").toLowerCase().includes(l.toLowerCase()),b=c===""||v.role===c;return T&&b});return`
      <tbody class="divide-y divide-slate-100 text-slate-700">
        ${m.length===0?`
          <tr>
            <td colspan="3" class="text-center p-12 text-slate-400">Nenhum usuário cadastrado encontrado.</td>
          </tr>
        `:m.map(v=>`
          <tr class="hover:bg-slate-50/50 transition">
            <td class="p-4 px-6 font-mono text-xs text-slate-900 font-bold">${v.email}</td>
            <td class="p-4 px-6">
              <span class="text-xs px-2.5 py-0.5 rounded-full font-semibold ${v.role==="admin"?"bg-red-50 text-red-700 border border-red-100":"bg-blue-50 text-blue-700 border border-blue-100"}">
                ${v.role==="admin"?"Administrador":"Colaborador"}
              </span>
            </td>
            <td class="p-4 px-6 text-slate-500 font-medium">
              ${v.lastAccess?new Date(v.lastAccess).toLocaleString("pt-BR"):"-"}
            </td>
          </tr>
        `).join("")}
      </tbody>
    `},me=()=>{const m=h.filter(v=>{const E=(v.nome_completo||"").toLowerCase(),T=(v.email||"").toLowerCase(),b=E.includes(s.toLowerCase())||T.includes(s.toLowerCase()),Y=i===""||v.tipo_integrante===i,de=v.status||"editando";return b&&Y&&(o===""||de===o)});return`
      <tbody class="divide-y divide-slate-100 text-slate-700">
        ${m.length===0?`
          <tr>
            <td colspan="6" class="text-center p-12 text-slate-400">Nenhum registro encontrado.</td>
          </tr>
        `:m.map(v=>`
          <tr class="hover:bg-slate-50/50 transition">
            <td class="p-4 px-6 font-bold text-slate-900">${v.nome_completo||"Não informado"}</td>
            <td class="p-4 px-6 font-mono text-xs">${v.email}</td>
            <td class="p-4 px-6"><span class="bg-slate-100 text-slate-700 text-xs px-2.5 py-0.5 rounded-full capitalize">${v.tipo_integrante||"-"}</span></td>
            <td class="p-4 px-6 text-center">${S(v.status)}</td>
            <td class="p-4 px-6 text-slate-500 text-xs">${v.lastUpdated?new Date(v.lastUpdated).toLocaleString("pt-BR"):"-"}</td>
            <td class="p-4 px-6 text-right">
              <button data-email="${v.email}" class="btnVerDetalhes bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-3.5 py-2 rounded-lg transition duration-150">
                Ver Ficha
              </button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    `},F=()=>{n.querySelectorAll(".btnVerDetalhes").forEach(v=>{v.addEventListener("click",E=>{const T=E.target.getAttribute("data-email"),b=h.find(Y=>Y.email===T);b&&y(b)})})},M=async(m,v,E,T="")=>{ie.fire({title:"Atualizando cadastro...",allowOutsideClick:!1,didOpen:()=>ie.showLoading()});try{const b={...E,status:v,pendencias:T,lastUpdated:new Date().toISOString()};if(Fe)await Bi(bn(Rt,"coletas",m),b);else{const Y=JSON.parse(localStorage.getItem("all_demo_coletas")||"{}");Y[m]=b,localStorage.setItem("all_demo_coletas",JSON.stringify(Y)),localStorage.setItem(`demo_coleta_${m}`,JSON.stringify(b))}await x(),await ie.fire({icon:"success",title:"Status Atualizado!",text:`O cadastro de ${b.nome_completo||m} foi definido como ${v.toUpperCase()}.`,confirmButtonColor:"#2563eb"}),R()}catch(b){console.error(b),ie.fire({icon:"error",title:"Ops! Ocorreu um erro",text:b.message||"Erro ao alterar status.",confirmButtonColor:"#ef4444"})}},A=async m=>{if(!window.html2pdf)throw new Error("Biblioteca html2pdf.js não encontrada. Recarregue a página.");let v="";m.formacoes&&Array.isArray(m.formacoes)&&m.formacoes.length>0?v=m.formacoes.map((de,et)=>`
        <div style="padding: 10px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 8px; font-size: 11px; page-break-inside: avoid;">
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 6px;">
            <b style="color: #0f172a; font-family: sans-serif;"># ${et+1} - ${de.titulacao||"-"}</b>
            <span style="font-weight: bold; font-family: sans-serif; font-size: 10px; color: ${de.e_graduacao?"#b45309":"#15803d"};">
              ${de.e_graduacao?"Graduação em Andamento":"Concluído"}
            </span>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; font-family: sans-serif;">
            <div><b style="color: #64748b;">Local:</b> <span style="color: #334155;">${de.local_formacao||"-"}</span></div>
            <div><b style="color: #64748b;">Conclusão/Previsão:</b> <span style="color: #334155;">${de.ano_conclusao||"-"}</span></div>
          </div>
        </div>
      `).join(""):v=`
        <div style="padding: 10px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 11px; font-family: sans-serif;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px;">
            <div><b style="color: #64748b;">Titulação Máxima:</b> <span style="color: #334155;">${m.titulacao||"-"}</span></div>
            <div><b style="color: #64748b;">Local:</b> <span style="color: #334155;">${m.local_formacao||"-"}</span></div>
            <div><b style="color: #64748b;">Ano de Conclusão:</b> <span style="color: #334155;">${m.ano_conclusao||"-"}</span></div>
          </div>
        </div>
      `;const E=(m.capacitacoes||[]).map(de=>`
      <span style="display: inline-block; background-color: #eff6ff; color: #1d4ed8; border: 1px solid #dbeafe; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: bold; margin-right: 4px; margin-bottom: 4px; font-family: sans-serif;">
        ${de}
      </span>
    `).join("")||'<span style="color: #94a3b8; font-size: 11px; font-family: sans-serif;">Nenhum curso selecionado</span>',T=document.createElement("div");T.style.height="0",T.style.overflow="hidden",T.style.position="absolute",T.style.left="0",T.style.top="0";const b=document.createElement("div");b.style.width="175mm",b.style.boxSizing="border-box",b.style.backgroundColor="#ffffff",b.style.color="#1e293b",b.innerHTML=`
      <div style="padding: 15px; color: #1e293b; font-family: sans-serif; line-height: 1.5;">
        
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #2563eb; padding-bottom: 10px; margin-bottom: 20px;">
          <div>
            <h1 style="margin: 0; font-size: 16px; font-weight: 800; color: #0f172a; text-transform: uppercase;">Laboratório de Medicina Experimental e Saúde</h1>
            <p style="margin: 2px 0 0 0; font-size: 11px; color: #64748b; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">LAMES - Ficha Cadastral</p>
          </div>
          <div style="text-align: right; font-size: 10px; color: #64748b;">
            <p style="margin: 0;"><b>Gerado em:</b> ${new Date().toLocaleDateString("pt-BR")}</p>
            <p style="margin: 2px 0 0 0;">Sistema de Coleta LAMES</p>
          </div>
        </div>

        <!-- Foto de Perfil e Título Principal -->
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 20px;">
          <div>
            <h2 style="margin: 0; font-size: 14px; font-weight: 800; color: #0f172a;">FICHA CADASTRAL DE COLABORADOR</h2>
            <p style="margin: 4px 0 0 0; font-size: 10px; color: #64748b; font-family: monospace;">E-mail: ${m.email}</p>
            <p style="margin: 2px 0 0 0; font-size: 10px; color: #64748b;">Status: <b style="text-transform: uppercase; color: #2563eb;">${(m.status||"rascunho").replace("_"," ")}</b></p>
          </div>
          <div style="width: 70px; height: 70px; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; background-color: #f8fafc; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
            ${m.fotoUrl?`<img src="${m.fotoUrl}" style="width: 100%; height: 100%; object-fit: cover;" crossorigin="anonymous">`:`
              <svg style="width: 35px; height: 35px; color: #cbd5e1;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            `}
          </div>
        </div>

        <!-- 1. Identificação -->
        <div style="margin-bottom: 18px;">
          <h3 style="margin: 0 0 6px 0; font-size: 11px; font-weight: 800; color: #1d4ed8; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; padding-bottom: 2px;">1. Identificação e Contato</h3>
          <table style="width: 100%; font-size: 10px; border-collapse: collapse;">
            <tbody>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold; width: 35%;">Nome Completo:</td>
                <td style="padding: 4px 0; color: #0f172a; font-weight: bold;">${m.nome_completo||"-"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">Tipo de Integrante:</td>
                <td style="padding: 4px 0; color: #0f172a; text-transform: capitalize;">${m.tipo_integrante||"-"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">CPF:</td>
                <td style="padding: 4px 0; color: #0f172a; font-family: monospace;">${m.cpf||"-"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">RG:</td>
                <td style="padding: 4px 0; color: #0f172a;">${m.rg||"-"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">Endereço Residencial:</td>
                <td style="padding: 4px 0; color: #0f172a;">${m.endereco||"-"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">Telefone de Contato:</td>
                <td style="padding: 4px 0; color: #0f172a;">${m.telefone||"-"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 2. Saúde e Emergência -->
        <div style="margin-bottom: 18px;">
          <h3 style="margin: 0 0 6px 0; font-size: 11px; font-weight: 800; color: #1d4ed8; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; padding-bottom: 2px;">2. Saúde e Emergência</h3>
          <table style="width: 100%; font-size: 10px; border-collapse: collapse;">
            <tbody>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold; width: 35%;">Grupo Sanguíneo:</td>
                <td style="padding: 4px 0; color: #0f172a; font-weight: bold;">${m.grupo_sanguineo||"-"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">Alergias:</td>
                <td style="padding: 4px 0; color: #0f172a;">${m.alergias||"-"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">Contato de Emergência:</td>
                <td style="padding: 4px 0; color: #0f172a; font-weight: bold;">${m.contato_emergencia||"-"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 3. Formação Acadêmica -->
        <div style="margin-bottom: 18px; page-break-inside: avoid;">
          <h3 style="margin: 0 0 6px 0; font-size: 11px; font-weight: 800; color: #1d4ed8; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; padding-bottom: 2px;">3. Formação Acadêmica</h3>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            ${v}
          </div>
        </div>

        <!-- 4. Cursos de Capacitação -->
        <div style="margin-bottom: 18px; page-break-inside: avoid;">
          <h3 style="margin: 0 0 6px 0; font-size: 11px; font-weight: 800; color: #1d4ed8; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; padding-bottom: 2px;">4. Cursos de Capacitação</h3>
          <div style="padding: 10px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 10px;">
            <div style="margin-bottom: 6px;">
              ${E}
            </div>
            ${m.outras_capacitacoes?`
              <div style="border-top: 1px solid #e2e8f0; padding-top: 6px; margin-top: 6px;">
                <b style="color: #64748b; display: block; margin-bottom: 2px;">Outros cursos e informações:</b>
                <p style="margin: 0; color: #334155; white-space: pre-line;">${m.outras_capacitacoes}</p>
              </div>
            `:""}
          </div>
        </div>

        <!-- 5. Informações do Coleta (Anual) -->
        <div style="margin-bottom: 18px; page-break-inside: avoid;">
          <h3 style="margin: 0 0 6px 0; font-size: 11px; font-weight: 800; color: #1d4ed8; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; padding-bottom: 2px;">5. Informações do Coleta (Anual)</h3>
          <table style="width: 100%; font-size: 10px; border-collapse: collapse;">
            <tbody>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold; width: 35%;">Vínculo:</td>
                <td style="padding: 4px 0; color: #0f172a;">${m.vinculo||"-"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">Prazo do Vínculo:</td>
                <td style="padding: 4px 0; color: #0f172a;">${m.prazo_vinculo||"-"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">Origem do Vínculo:</td>
                <td style="padding: 4px 0; color: #0f172a;">${m.origem_vinculo||"-"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">Cargo / Nível:</td>
                <td style="padding: 4px 0; color: #0f172a;">${m.cargo_nivel||"-"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">Situação Atual:</td>
                <td style="padding: 4px 0; color: #0f172a;">${m.situacao_atual||"-"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">É Docente?</td>
                <td style="padding: 4px 0; color: #0f172a;">${m.e_docente?"Sim":"Não"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">Orientador:</td>
                <td style="padding: 4px 0; color: #0f172a;">${m.orientador||"-"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Footer -->
        <div style="border-top: 1px solid #e2e8f0; padding-top: 12px; margin-top: 30px; text-align: center; font-size: 8px; color: #94a3b8;">
          <p>Este documento é uma representação digital gerada em tempo real pelo sistema de Cadastro LAMES - Laboratório de Medicina Experimental e Saúde.</p>
        </div>

      </div>
    `,T.appendChild(b),document.body.appendChild(T);const Y={margin:[10,10,10,10],filename:`ficha_cadastral_${(m.nome_completo||"colaborador").replace(/\s+/g,"_").toLowerCase()}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:2,useCORS:!0},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"}};try{await window.html2pdf().set(Y).from(b).save()}finally{document.body.removeChild(T)}},y=m=>{const v=m.status==="em_analise",E=m.status==="indeferido";let T="";m.formacoes&&Array.isArray(m.formacoes)?T=m.formacoes.map((Y,de)=>`
        <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-2 text-xs">
          <div class="flex justify-between items-center border-b border-slate-200/50 pb-1.5 mb-1.5">
            <span class="font-bold text-slate-900"># ${de+1} - ${Y.titulacao||"-"}</span>
            <span>${Y.e_graduacao?'<span class="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Graduação em Andamento</span>':'<span class="bg-green-100 text-green-800 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Concluído</span>'}</span>
          </div>
          <div class="grid grid-cols-2 gap-y-1.5 gap-x-4">
            <div><b class="text-slate-500">Local:</b> <span class="text-slate-800 font-medium">${Y.local_formacao||"-"}</span></div>
            <div><b class="text-slate-500">Conclusão/Previsão:</b> <span class="text-slate-800 font-medium">${Y.ano_conclusao||"-"}</span></div>
            
            <div class="col-span-2 pt-1.5 border-t border-slate-200/40 mt-1 flex flex-col gap-1">
              <b class="text-slate-500">Documento(s):</b>
              <div class="flex flex-wrap gap-3 font-semibold mt-0.5">
                ${Y.e_graduacao?`
                  ${Y.historicoUrl?`<a href="${Y.historicoUrl}" target="_blank" class="text-blue-600 hover:underline">Histórico Escolar</a>`:'<span class="text-red-500">Histórico não enviado</span>'}
                  ${Y.matriculaUrl?`<a href="${Y.matriculaUrl}" target="_blank" class="text-blue-600 hover:underline">Comprovante Matrícula</a>`:'<span class="text-red-500">Comprovante não enviado</span>'}
                `:`
                  ${Y.diplomaUrl?`<a href="${Y.diplomaUrl}" target="_blank" class="text-blue-600 hover:underline">Diploma</a>`:'<span class="text-red-500">Diploma não enviado</span>'}
                `}
              </div>
            </div>
          </div>
        </div>
      `).join('<div class="h-2"></div>'):T=`
        <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
          <div class="grid grid-cols-2 gap-y-2">
            <div><b class="text-slate-500">Titulação Máxima:</b> <span class="text-slate-800">${m.titulacao||"-"}</span></div>
            <div><b class="text-slate-500">Local de Formação:</b> <span class="text-slate-800">${m.local_formacao||"-"}</span></div>
            <div><b class="text-slate-500">Ano de Conclusão:</b> <span class="text-slate-800">${m.ano_conclusao||"-"}</span></div>
            <div>
              <b class="text-slate-500">Diploma:</b> 
              ${m.diplomaUrl?`
                <a href="${m.diplomaUrl}" target="_blank" class="text-blue-600 font-semibold hover:underline inline-flex items-center gap-0.5">Visualizar Anexo</a>
              `:'<span class="text-slate-400">Não anexado</span>'}
            </div>
          </div>
        </div>
      `;const b=(m.capacitacoes||[]).map(Y=>`
      <span class="bg-blue-50 text-blue-700 border border-blue-100 text-[10px] px-2.5 py-1 rounded-full font-bold">${Y}</span>
    `).join(" ")||'<span class="text-slate-400">Nenhum curso selecionado</span>';ie.fire({title:`<span class="text-lg font-extrabold text-slate-900">Ficha Cadastral: ${m.nome_completo||"Colaborador"}</span>`,html:`
        <div class="text-left text-sm max-h-[60vh] overflow-y-auto pr-2 space-y-6 pt-4 font-sans leading-relaxed">
          
          <!-- Foto e Status Banner -->
          <div class="flex gap-4 items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div class="w-16 h-16 rounded-full overflow-hidden border border-slate-200 shadow-sm bg-slate-100 flex-shrink-0 flex items-center justify-center">
              ${m.fotoUrl?`<img src="${m.fotoUrl}" class="w-full h-full object-cover">`:`
                <svg class="w-8 h-8 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
              `}
            </div>
            <div class="flex-1 flex flex-col justify-center">
              <span class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Status do Cadastro</span>
              <div>${S(m.status)}</div>
            </div>
          </div>

          <!-- Pendências atuais (se houver) -->
          ${E&&m.pendencias?`
            <div class="p-4 bg-red-50 border border-red-100 text-red-900 rounded-xl text-xs">
              <span class="font-bold block text-red-950 mb-1">Pendências Apontadas Anteriormente:</span>
              <p class="whitespace-pre-line">${m.pendencias}</p>
            </div>
          `:""}

          <!-- Secção 1 -->
          <div>
            <h4 class="font-bold text-blue-700 text-xs uppercase tracking-wider mb-2 border-b pb-1">1. Identificação e Contato</h4>
            <div class="grid grid-cols-2 gap-y-2 text-xs">
              <div><b class="text-slate-500">Nome:</b> <span class="text-slate-800 font-bold">${m.nome_completo||"-"}</span></div>
              <div><b class="text-slate-500">Tipo de Integrante:</b> <span class="text-slate-800 capitalize font-bold">${m.tipo_integrante||"-"}</span></div>
              <div><b class="text-slate-500">CPF:</b> <span class="text-slate-800">${m.cpf||"-"}</span></div>
              <div><b class="text-slate-500">RG:</b> <span class="text-slate-800">${m.rg||"-"}</span></div>
              <div class="col-span-2"><b class="text-slate-500">Endereço:</b> <span class="text-slate-800">${m.endereco||"-"}</span></div>
              <div><b class="text-slate-500">E-mail:</b> <span class="text-slate-800 font-mono">${m.email}</span></div>
              <div><b class="text-slate-500">Telefone:</b> <span class="text-slate-800">${m.telefone||"-"}</span></div>
            </div>
          </div>

          <!-- Secção 2 -->
          <div>
            <h4 class="font-bold text-blue-700 text-xs uppercase tracking-wider mb-2 border-b pb-1">2. Saúde e Emergência</h4>
            <div class="grid grid-cols-2 gap-y-2 text-xs">
              <div><b class="text-slate-500">Grupo Sanguíneo:</b> <span class="text-slate-800 font-bold">${m.grupo_sanguineo||"-"}</span></div>
              <div><b class="text-slate-500">Alergias:</b> <span class="text-slate-800">${m.alergias||"-"}</span></div>
              <div class="col-span-2"><b class="text-slate-500">Contato de Emergência:</b> <span class="text-slate-800 font-semibold">${m.contato_emergencia||"-"}</span></div>
            </div>
          </div>

          <!-- Secção 3 -->
          <div>
            <h4 class="font-bold text-blue-700 text-xs uppercase tracking-wider mb-2 border-b pb-1">3. Formação Acadêmica</h4>
            <div class="space-y-3">
              ${T}
            </div>
          </div>

          <!-- Secção 4 (Nova) -->
          <div>
            <h4 class="font-bold text-blue-700 text-xs uppercase tracking-wider mb-2 border-b pb-1">4. Cursos de Capacitação</h4>
            <div class="space-y-3">
              <div class="flex flex-wrap gap-2">
                ${b}
              </div>
              ${m.outras_capacitacoes?`
                <div class="p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs">
                  <b class="text-slate-600 block mb-1">Outros cursos/Livre:</b>
                  <p class="text-slate-800 whitespace-pre-line">${m.outras_capacitacoes}</p>
                </div>
              `:""}
            </div>
          </div>

          <!-- Secção 5 -->
          <div>
            <h4 class="font-bold text-blue-700 text-xs uppercase tracking-wider mb-2 border-b pb-1">5. Informações do Coleta (Anual)</h4>
            <div class="grid grid-cols-2 gap-y-2 text-xs font-sans">
              <div><b class="text-slate-500">Vínculo:</b> <span class="text-slate-800">${m.vinculo||"-"}</span></div>
              <div><b class="text-slate-500">Prazo do Vínculo:</b> <span class="text-slate-800">${m.prazo_vinculo||"-"}</span></div>
              <div><b class="text-slate-500">Origem:</b> <span class="text-slate-800">${m.origem_vinculo||"-"}</span></div>
              <div><b class="text-slate-500">Cargo/Nível:</b> <span class="text-slate-800">${m.cargo_nivel||"-"}</span></div>
              <div><b class="text-slate-500">Situação:</b> <span class="text-slate-800">${m.situacao_atual||"-"}</span></div>
              <div><b class="text-slate-500">Docente?</b> <span class="text-slate-800">${m.e_docente?"Sim":"Não"}</span></div>
              <div class="col-span-2"><b class="text-slate-500">Orientador:</b> <span class="text-slate-800">${m.orientador||"-"}</span></div>
            </div>
          </div>

          <!-- Botões de Homologação caso esteja em Análise -->
          ${v?`
            <div class="flex gap-3 justify-end pt-4 border-t border-slate-100">
              <button id="btnModalIndeferir" class="bg-red-500 hover:bg-red-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition duration-150 shadow-md shadow-red-100">
                Indeferir (Solicitar Correção)
              </button>
              <button id="btnModalDeferir" class="bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition duration-150 shadow-md shadow-green-100">
                Deferir (Aprovar Cadastro)
              </button>
            </div>
          `:""}

        </div>
      `,width:"600px",showConfirmButton:!0,confirmButtonText:"Baixar Ficha",confirmButtonColor:"#2563eb",showCancelButton:!0,cancelButtonText:"Fechar Ficha",cancelButtonColor:"#64748b",showLoaderOnConfirm:!0,preConfirm:async()=>{try{return await A(m),!1}catch(Y){ie.showValidationMessage(`Erro ao gerar PDF: ${Y.message}`)}},didOpen:()=>{v&&(document.getElementById("btnModalDeferir").addEventListener("click",async()=>{(await ie.fire({title:"Deferir Cadastro?",text:"Isso aprovará e homologará em definitivo as informações do colaborador.",icon:"question",showCancelButton:!0,confirmButtonText:"Sim, deferir",cancelButtonText:"Cancelar",confirmButtonColor:"#16a34a",cancelButtonColor:"#94a3b8"})).isConfirmed&&await M(m.email,"deferido",m)}),document.getElementById("btnModalIndeferir").addEventListener("click",async()=>{const{value:Y,isConfirmed:de}=await ie.fire({title:"Apontar Pendências",input:"textarea",inputLabel:"Descreva detalhadamente o que o colaborador precisa corrigir no cadastro:",inputPlaceholder:"Ex: O anexo do diploma está ilegível. Favor preencher o campo RG corretamente.",inputAttributes:{"aria-label":"Descreva detalhadamente o que o colaborador precisa corrigir no cadastro"},showCancelButton:!0,confirmButtonText:"Solicitar Correção",cancelButtonText:"Voltar",confirmButtonColor:"#ef4444",cancelButtonColor:"#94a3b8",inputValidator:et=>{if(!et)return"Você precisa digitar o motivo da pendência!"}});de&&Y&&await M(m.email,"indeferido",m,Y)}))}})};return ie.fire({title:"Carregando painel...",allowOutsideClick:!1,didOpen:()=>ie.showLoading()}),await x(),ie.close(),R(),{destroy:()=>{}}}async function Wv(n,e,t){let r="nao_iniciado",s="",i=null;try{if(Fe){const h=bn(Rt,"coletas",e.email.toLowerCase().trim()),p=await Au(h);p.exists()&&(i=p.data(),r=i.status||"editando",s=i.pendencias||"")}else{const h=localStorage.getItem(`demo_coleta_${e.email}`);h&&(i=JSON.parse(h),r=i.status||"editando",s=i.pendencias||"")}}catch(h){console.error("Erro ao buscar status do cadastro:",h)}const o=()=>{switch(r){case"editando":return`
          <div class="flex flex-col items-center text-center p-6 md:p-8 bg-amber-50/50 border border-amber-100 rounded-2xl">
            <div class="p-4 bg-amber-500 text-white rounded-full shadow-lg shadow-amber-100 mb-4 animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <span class="text-xs bg-amber-100 text-amber-800 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">Rascunho</span>
            <h3 class="text-lg font-bold text-slate-800">Cadastro em Edição</h3>
            <p class="text-slate-500 text-sm max-w-md mt-2">Você iniciou o preenchimento mas ainda não o enviou para homologação. Os dados salvos estão guardados com segurança.</p>
            <button id="btnAcaoForm" class="mt-6 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3.5 rounded-xl transition duration-150 shadow-md shadow-amber-200 transform hover:-translate-y-0.5">
              Continuar Preenchendo
            </button>
          </div>
        `;case"em_analise":return`
          <div class="flex flex-col items-center text-center p-6 md:p-8 bg-blue-50/50 border border-blue-100 rounded-2xl">
            <div class="p-4 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span class="text-xs bg-blue-100 text-blue-800 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">Em Análise</span>
            <h3 class="text-lg font-bold text-slate-800">Cadastro Enviado para Análise</h3>
            <p class="text-slate-500 text-sm max-w-md mt-2">Seus dados foram enviados com sucesso e estão em fase de homologação pela equipe do LAMES. O formulário ficará bloqueado até a conclusão.</p>
            <button id="btnAcaoForm" class="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition duration-150 shadow-md shadow-blue-200 transform hover:-translate-y-0.5">
              Visualizar Formulário Enviado
            </button>
          </div>
        `;case"deferido":return`
          <div class="flex flex-col items-center text-center p-6 md:p-8 bg-green-50/50 border border-green-100 rounded-2xl">
            <div class="p-4 bg-green-600 text-white rounded-full shadow-lg shadow-green-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span class="text-xs bg-green-100 text-green-800 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">Deferido (Aprovado)</span>
            <h3 class="text-lg font-bold text-slate-800">Homologação Concluída</h3>
            <p class="text-slate-500 text-sm max-w-md mt-2">Seu cadastro foi revisado e aprovado no sistema de recursos humanos. Parabéns! Nenhuma ação adicional é solicitada no momento.</p>
            <button id="btnAcaoForm" class="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3.5 rounded-xl transition duration-150 shadow-md shadow-green-200 transform hover:-translate-y-0.5">
              Visualizar Dados Homologados
            </button>
          </div>
        `;case"indeferido":return`
          <div class="flex flex-col items-center text-center p-6 md:p-8 bg-red-50/50 border border-red-100 rounded-2xl">
            <div class="p-4 bg-red-500 text-white rounded-full shadow-lg shadow-red-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <span class="text-xs bg-red-100 text-red-800 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">Pendente (Indeferido)</span>
            <h3 class="text-lg font-bold text-slate-800">Necessita de Correções</h3>
            <p class="text-slate-500 text-sm max-w-md mt-2">Identificamos pendências no preenchimento das suas informações. Veja a descrição abaixo para realizar as alterações necessárias:</p>
            
            <!-- Caixa de feedback de pendências -->
            <div class="w-full max-w-lg mt-4 p-4 bg-red-100/60 border border-red-200 text-left rounded-xl text-sm text-red-800 font-sans">
              <div class="font-bold flex items-center gap-1.5 text-red-950 mb-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                Instruções do Administrador:
              </div>
              <p class="whitespace-pre-line leading-relaxed">${s||"Nenhuma descrição detalhada fornecida. Por favor revise seus dados."}</p>
            </div>

            <button id="btnAcaoForm" class="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3.5 rounded-xl transition duration-150 shadow-md shadow-red-200 transform hover:-translate-y-0.5">
              Corrigir Formulário
            </button>
          </div>
        `;case"nao_iniciado":default:return`
          <div class="flex flex-col items-center text-center p-6 md:p-8 bg-slate-50 border border-slate-200 rounded-2xl">
            <div class="p-4 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-100 mb-4 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span class="text-xs bg-slate-200 text-slate-700 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">Não Iniciado</span>
            <h3 class="text-lg font-bold text-slate-800">Preencher Formulário de Cadastro</h3>
            <p class="text-slate-500 text-sm max-w-md mt-2">Identificamos que você ainda não iniciou o preenchimento do formulário. Clique abaixo para iniciar o registro dos seus dados.</p>
            <button id="btnAcaoForm" class="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition duration-150 shadow-md shadow-blue-200 transform hover:-translate-y-0.5">
              Começar Preenchimento
            </button>
          </div>
        `}};n.innerHTML=`
    <!-- Top Nav Bar -->
    <div class="max-w-4xl mx-auto mb-6 flex justify-between items-center bg-white p-4 px-6 rounded-2xl shadow-sm border border-slate-100">
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
    <div class="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
      
      <!-- Welcome Header -->
      <div class="mb-10 pb-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 class="text-3xl font-extrabold text-slate-900 tracking-tight">Área do Colaborador LAMES</h1>
          <p class="text-slate-600 mt-1">Bem-vindo(a) ao sistema de coleta e atualização cadastral do laboratório.</p>
        </div>
        <div class="flex items-center gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-100 max-w-xs self-start md:self-auto">
          <div class="p-2 bg-blue-600 text-white rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div class="overflow-hidden">
            <h4 class="text-xs font-bold text-slate-800 truncate">${e.email}</h4>
            <p class="text-[10px] text-slate-500">Último acesso: Hoje</p>
          </div>
        </div>
      </div>

      <!-- Card de Status do Formulário -->
      <div class="space-y-6">
        <h2 class="text-lg font-bold text-slate-800 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          Status de seu Cadastro
        </h2>
        
        ${o()}
      </div>

    </div>
  `,document.getElementById("btnAcaoForm").addEventListener("click",()=>{yt("formulario")}),document.getElementById("btnLogout").addEventListener("click",async()=>{(await ie.fire({title:"Deseja sair?",text:"Você será desconectado do sistema.",icon:"question",showCancelButton:!0,confirmButtonText:"Sair",cancelButtonText:"Permanecer",confirmButtonColor:"#ef4444",cancelButtonColor:"#94a3b8"})).isConfirmed&&(Fe?await Pu():(localStorage.removeItem("demo_user"),localStorage.removeItem("demo_role"),window.location.reload()))});const c=document.getElementById("btnIrAdmin");return c&&c.addEventListener("click",()=>yt("admin")),{destroy:()=>{}}}Za("login",qv);Za("inicio",Wv);Za("formulario",zv);Za("admin",Gv);document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("app");n?J_(n):console.error("Elemento container #app não encontrado no index.html.")});
