var k6=Object.defineProperty;var O6=(n,e,t)=>e in n?k6(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var w=(n,e,t)=>O6(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const N6=()=>{};var F1={};/**
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
 */const Yd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},D6=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Qd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,l=o?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,p=i>>2,m=(i&3)<<4|l>>4;let E=(l&15)<<2|h>>6,C=h&63;c||(C=64,o||(E=64)),r.push(t[p],t[m],t[E],t[C])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Yd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):D6(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new V6;const E=i<<2|l>>4;if(r.push(E),h!==64){const C=l<<4&240|h>>2;if(r.push(C),m!==64){const P=h<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class V6 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const L6=function(n){const e=Yd(n);return Qd.encodeByteArray(e,!0)},Vo=function(n){return L6(n).replace(/\./g,"")},Xd=function(n){try{return Qd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function M6(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const B6=()=>M6().__FIREBASE_DEFAULTS__,F6=()=>{if(typeof process>"u"||typeof F1>"u")return;const n=F1.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},U6=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Xd(n[1]);return e&&JSON.parse(e)},ga=()=>{try{return N6()||B6()||F6()||U6()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jd=n=>{var e,t;return(t=(e=ga())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Zd=n=>{const e=Jd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},e2=()=>{var n;return(n=ga())==null?void 0:n.config},t2=n=>{var e;return(e=ga())==null?void 0:e[`_${n}`]};/**
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
 */class n2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function r2(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Vo(JSON.stringify(t)),Vo(JSON.stringify(o)),""].join(".")}/**
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
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $6(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function H6(){var e;const n=(e=ga())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function j6(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function q6(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function z6(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function G6(){const n=st();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function W6(){return!H6()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function K6(){try{return typeof indexedDB=="object"}catch{return!1}}function Y6(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Q6="FirebaseError";class an extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Q6,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xi.prototype.create)}}class xi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?X6(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new an(s,l,r)}}function X6(n,e){return n.replace(J6,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const J6=/\{\$([^}]+)}/g;function Z6(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Tr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(U1(i)&&U1(o)){if(!Tr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function U1(n){return n!==null&&typeof n=="object"}/**
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
 */function Ci(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Hs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function js(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function em(n,e){const t=new tm(n,e);return t.subscribe.bind(t)}class tm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");nm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=yl),s.error===void 0&&(s.error=yl),s.complete===void 0&&(s.complete=yl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function yl(){}/**
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
 */function ze(n){return n&&n._delegate?n._delegate:n}/**
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
 */function kr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mc(n){return(await fetch(n,{credentials:"include"})).ok}class Kn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mr="[DEFAULT]";/**
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
 */class rm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new n2;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(im(e))try{this.getOrInitializeService({instanceIdentifier:mr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mr){return this.instances.has(e)}getOptions(e=mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mr){return this.component?this.component.multipleInstances?e:mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sm(n){return n===mr?void 0:n}function im(n){return n.instantiationMode==="EAGER"}/**
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
 */class om{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new rm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(fe||(fe={}));const am={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},lm=fe.INFO,cm={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},um=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=cm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gc{constructor(e){this.name=e,this._logLevel=lm,this._logHandler=um,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?am[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const hm=(n,e)=>e.some(t=>n instanceof t);let $1,H1;function dm(){return $1||($1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fm(){return H1||(H1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const s2=new WeakMap,Ml=new WeakMap,i2=new WeakMap,bl=new WeakMap,wc=new WeakMap;function pm(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Un(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&s2.set(t,n)}).catch(()=>{}),wc.set(e,n),e}function mm(n){if(Ml.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Ml.set(n,e)}let Bl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ml.get(n);if(e==="objectStoreNames")return n.objectStoreNames||i2.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Un(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function gm(n){Bl=n(Bl)}function wm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(vl(this),e,...t);return i2.set(r,e.sort?e.sort():[e]),Un(r)}:fm().includes(n)?function(...e){return n.apply(vl(this),e),Un(s2.get(this))}:function(...e){return Un(n.apply(vl(this),e))}}function _m(n){return typeof n=="function"?wm(n):(n instanceof IDBTransaction&&mm(n),hm(n,dm())?new Proxy(n,Bl):n)}function Un(n){if(n instanceof IDBRequest)return pm(n);if(bl.has(n))return bl.get(n);const e=_m(n);return e!==n&&(bl.set(n,e),wc.set(e,n)),e}const vl=n=>wc.get(n);function ym(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),l=Un(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Un(o.result),c.oldVersion,c.newVersion,Un(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const bm=["get","getKey","getAll","getAllKeys","count"],vm=["put","add","delete","clear"],El=new Map;function j1(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(El.get(e))return El.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=vm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bm.includes(t)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return El.set(e,i),i}gm(n=>({...n,get:(e,t,r)=>j1(e,t)||n.get(e,t,r),has:(e,t)=>!!j1(e,t)||n.has(e,t)}));/**
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
 */class Em{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Tm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Tm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fl="@firebase/app",q1="0.15.0";/**
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
 */const wn=new gc("@firebase/app"),Am="@firebase/app-compat",Im="@firebase/analytics-compat",xm="@firebase/analytics",Cm="@firebase/app-check-compat",Rm="@firebase/app-check",Sm="@firebase/auth",Pm="@firebase/auth-compat",km="@firebase/database",Om="@firebase/data-connect",Nm="@firebase/database-compat",Dm="@firebase/functions",Vm="@firebase/functions-compat",Lm="@firebase/installations",Mm="@firebase/installations-compat",Bm="@firebase/messaging",Fm="@firebase/messaging-compat",Um="@firebase/performance",$m="@firebase/performance-compat",Hm="@firebase/remote-config",jm="@firebase/remote-config-compat",qm="@firebase/storage",zm="@firebase/storage-compat",Gm="@firebase/firestore",Wm="@firebase/ai",Km="@firebase/firestore-compat",Ym="firebase",Qm="12.15.0";/**
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
 */const Ul="[DEFAULT]",Xm={[Fl]:"fire-core",[Am]:"fire-core-compat",[xm]:"fire-analytics",[Im]:"fire-analytics-compat",[Rm]:"fire-app-check",[Cm]:"fire-app-check-compat",[Sm]:"fire-auth",[Pm]:"fire-auth-compat",[km]:"fire-rtdb",[Om]:"fire-data-connect",[Nm]:"fire-rtdb-compat",[Dm]:"fire-fn",[Vm]:"fire-fn-compat",[Lm]:"fire-iid",[Mm]:"fire-iid-compat",[Bm]:"fire-fcm",[Fm]:"fire-fcm-compat",[Um]:"fire-perf",[$m]:"fire-perf-compat",[Hm]:"fire-rc",[jm]:"fire-rc-compat",[qm]:"fire-gcs",[zm]:"fire-gcs-compat",[Gm]:"fire-fst",[Km]:"fire-fst-compat",[Wm]:"fire-vertex","fire-js":"fire-js",[Ym]:"fire-js-all"};/**
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
 */const Lo=new Map,Jm=new Map,$l=new Map;function z1(n,e){try{n.container.addComponent(e)}catch(t){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ar(n){const e=n.name;if($l.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;$l.set(e,n);for(const t of Lo.values())z1(t,n);for(const t of Jm.values())z1(t,n);return!0}function wa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function It(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Zm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$n=new xi("app","Firebase",Zm);/**
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
 */class eg{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
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
 */const Or=Qm;function o2(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ul,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw $n.create("bad-app-name",{appName:String(s)});if(t||(t=e2()),!t)throw $n.create("no-options");const i=Lo.get(s);if(i){if(Tr(t,i.options)&&Tr(r,i.config))return i;throw $n.create("duplicate-app",{appName:s})}const o=new om(s);for(const c of $l.values())o.addComponent(c);const l=new eg(t,r,o);return Lo.set(s,l),l}function _c(n=Ul){const e=Lo.get(n);if(!e&&n===Ul&&e2())return o2();if(!e)throw $n.create("no-app",{appName:n});return e}function Yt(n,e,t){let r=Xm[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(o.join(" "));return}Ar(new Kn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const tg="firebase-heartbeat-database",ng=1,ai="firebase-heartbeat-store";let Tl=null;function a2(){return Tl||(Tl=ym(tg,ng,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ai)}catch(t){console.warn(t)}}}}).catch(n=>{throw $n.create("idb-open",{originalErrorMessage:n.message})})),Tl}async function rg(n){try{const t=(await a2()).transaction(ai),r=await t.objectStore(ai).get(l2(n));return await t.done,r}catch(e){if(e instanceof an)wn.warn(e.message);else{const t=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(t.message)}}}async function G1(n,e){try{const r=(await a2()).transaction(ai,"readwrite");await r.objectStore(ai).put(e,l2(n)),await r.done}catch(t){if(t instanceof an)wn.warn(t.message);else{const r=$n.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});wn.warn(r.message)}}}function l2(n){return`${n.name}!${n.options.appId}`}/**
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
 */const sg=1024,ig=30;class og{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=W1();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ig){const o=cg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=W1(),{heartbeatsToSend:r,unsentEntries:s}=ag(this._heartbeatsCache.heartbeats),i=Vo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return wn.warn(t),""}}}function W1(){return new Date().toISOString().substring(0,10)}function ag(n,e=sg){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),K1(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),K1(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class lg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return K6()?Y6().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await rg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return G1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return G1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function K1(n){return Vo(JSON.stringify({version:2,heartbeats:n})).length}function cg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function ug(n){Ar(new Kn("platform-logger",e=>new Em(e),"PRIVATE")),Ar(new Kn("heartbeat",e=>new og(e),"PRIVATE")),Yt(Fl,q1,n),Yt(Fl,q1,"esm2020"),Yt("fire-js","")}ug("");function c2(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hg=c2,u2=new xi("auth","Firebase",c2());/**
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
 */const Mo=new gc("@firebase/auth");function dg(n,...e){Mo.logLevel<=fe.WARN&&Mo.warn(`Auth (${Or}): ${n}`,...e)}function To(n,...e){Mo.logLevel<=fe.ERROR&&Mo.error(`Auth (${Or}): ${n}`,...e)}/**
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
 */function Ut(n,...e){throw yc(n,...e)}function Qt(n,...e){return yc(n,...e)}function h2(n,e,t){const r={...hg(),[e]:t};return new xi("auth","Firebase",r).create(e,{appName:n.name})}function fn(n){return h2(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return u2.create(n,...e)}function te(n,e,...t){if(!n)throw yc(e,...t)}function cn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw To(e),new Error(e)}function _n(n,e){n||cn(e)}/**
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
 */function Hl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function fg(){return Y1()==="http:"||Y1()==="https:"}function Y1(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function pg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fg()||q6()||"connection"in navigator)?navigator.onLine:!0}function mg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ri{constructor(e,t){this.shortDelay=e,this.longDelay=t,_n(t>e,"Short delay should be less than long delay!"),this.isMobile=$6()||z6()}get(){return pg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bc(n,e){_n(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class d2{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_g=new Ri(3e4,6e4);function or(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function ar(n,e,t,r,s={}){return f2(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ci({...o,key:n.config.apiKey}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:c,...i};return j6()||(h.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&kr(n.emulatorConfig.host)&&(h.credentials="include"),d2.fetch()(await p2(n,n.config.apiHost,t,l),h)})}async function f2(n,e,t){n._canInitEmulator=!1;const r={...gg,...e};try{const s=new bg(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw co(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw co(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw co(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw co(n,"user-disabled",o);const p=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw h2(n,p,h);Ut(n,p)}}catch(s){if(s instanceof an)throw s;Ut(n,"network-request-failed",{message:String(s)})}}async function Si(n,e,t,r,s={}){const i=await ar(n,e,t,r,s);return"mfaPendingCredential"in i&&Ut(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function p2(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?bc(n.config,s):`${n.config.apiScheme}://${s}`;return wg.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function yg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),_g.get())})}}function co(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Qt(n,e,r);return s.customData._tokenResponse=t,s}function Q1(n){return n!==void 0&&n.enterprise!==void 0}class vg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return yg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Eg(n,e){return ar(n,"GET","/v2/recaptchaConfig",or(n,e))}/**
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
 */async function Tg(n,e){return ar(n,"POST","/v1/accounts:delete",e)}async function Bo(n,e){return ar(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ys(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ag(n,e=!1){const t=ze(n),r=await t.getIdToken(e),s=vc(r);te(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ys(Al(s.auth_time)),issuedAtTime:Ys(Al(s.iat)),expirationTime:Ys(Al(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Al(n){return Number(n)*1e3}function vc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return To("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xd(t);return s?JSON.parse(s):(To("Failed to decode base64 JWT payload"),null)}catch(s){return To("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function X1(n){const e=vc(n);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function li(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof an&&Ig(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ig({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class xg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ys(this.lastLoginAt),this.creationTime=Ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fo(n){var m;const e=n.auth,t=await n.getIdToken(),r=await li(n,Bo(e,{idToken:t}));te(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?m2(s.providerUserInfo):[],o=Rg(n.providerData,i),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new jl(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function Cg(n){const e=ze(n);await Fo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rg(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function m2(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Sg(n,e){const t=await f2(n,{},async()=>{const r=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await p2(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return n.emulatorConfig&&kr(n.emulatorConfig.host)&&(c.credentials="include"),d2.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Pg(n,e){return ar(n,"POST","/v2/accounts:revokeToken",or(n,e))}/**
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
 */class Yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):X1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=X1(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Sg(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Yr;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yr,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
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
 */function Cn(n,e){te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Bt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new xg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await li(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ag(this,e)}reload(){return Cg(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Bt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Fo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(It(this.auth.app))return Promise.reject(fn(this.auth));const e=await this.getIdToken();return await li(this,Tg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,h=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:m,emailVerified:E,isAnonymous:C,providerData:P,stsTokenManager:F}=t;te(m&&F,e,"internal-error");const N=Yr.fromJSON(this.name,F);te(typeof m=="string",e,"internal-error"),Cn(r,e.name),Cn(s,e.name),te(typeof E=="boolean",e,"internal-error"),te(typeof C=="boolean",e,"internal-error"),Cn(i,e.name),Cn(o,e.name),Cn(l,e.name),Cn(c,e.name),Cn(h,e.name),Cn(p,e.name);const q=new Bt({uid:m,auth:e,email:s,emailVerified:E,displayName:r,isAnonymous:C,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:N,createdAt:h,lastLoginAt:p});return P&&Array.isArray(P)&&(q.providerData=P.map(J=>({...J}))),c&&(q._redirectEventId=c),q}static async _fromIdTokenResponse(e,t,r=!1){const s=new Yr;s.updateFromServerResponse(t);const i=new Bt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?m2(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Yr;l.updateFromIdToken(r);const c=new Bt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new jl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const J1=new Map;function un(n){_n(n instanceof Function,"Expected a class definition");let e=J1.get(n);return e?(_n(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,J1.set(n,e),e)}/**
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
 */class g2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}g2.type="NONE";const Z1=g2;/**
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
 */function Ao(n,e,t){return`firebase:${n}:${e}:${t}`}class Qr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ao(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ao("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Bo(this.auth,{idToken:e}).catch(()=>{});return t?Bt._fromGetAccountInfoResponse(this.auth,t,e):null}return Bt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Qr(un(Z1),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||un(Z1);const o=Ao(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const p=await h._get(o);if(p){let m;if(typeof p=="string"){const E=await Bo(e,{idToken:p}).catch(()=>{});if(!E)break;m=await Bt._fromGetAccountInfoResponse(e,E,p)}else m=Bt._fromJSON(e,p);h!==i&&(l=m),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Qr(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Qr(i,e,r))}}/**
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
 */function eh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(b2(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(w2(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(E2(e))return"Blackberry";if(T2(e))return"Webos";if(_2(e))return"Safari";if((e.includes("chrome/")||y2(e))&&!e.includes("edge/"))return"Chrome";if(v2(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function w2(n=st()){return/firefox\//i.test(n)}function _2(n=st()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function y2(n=st()){return/crios\//i.test(n)}function b2(n=st()){return/iemobile/i.test(n)}function v2(n=st()){return/android/i.test(n)}function E2(n=st()){return/blackberry/i.test(n)}function T2(n=st()){return/webos/i.test(n)}function Ec(n=st()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function kg(n=st()){var e;return Ec(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Og(){return G6()&&document.documentMode===10}function A2(n=st()){return Ec(n)||v2(n)||T2(n)||E2(n)||/windows phone/i.test(n)||b2(n)}/**
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
 */function I2(n,e=[]){let t;switch(n){case"Browser":t=eh(st());break;case"Worker":t=`${eh(st())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Or}/${r}`}/**
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
 */async function Dg(n,e={}){return ar(n,"GET","/v2/passwordPolicy",or(n,e))}/**
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
 */const Vg=6;class Lg{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Vg,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Mg{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new th(this),this.idTokenSubscription=new th(this),this.beforeStateQueue=new Ng(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=un(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Qr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Bo(this,{idToken:e}),r=await Bt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(It(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(It(this.app))return Promise.reject(fn(this));const t=e?ze(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return It(this.app)?Promise.reject(fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return It(this.app)?Promise.reject(fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Dg(this),t=new Lg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Pg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&un(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await Qr.create(this,[un(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=I2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(It(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&dg(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Nr(n){return ze(n)}class th{constructor(e){this.auth=e,this.observer=null,this.addObserver=em(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let _a={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Bg(n){_a=n}function x2(n){return _a.loadJS(n)}function Fg(){return _a.recaptchaEnterpriseScript}function Ug(){return _a.gapiScript}function $g(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Hg{constructor(){this.enterprise=new jg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class jg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const qg="recaptcha-enterprise",C2="NO_RECAPTCHA",nh="onFirebaseAuthREInstanceReady";class Sn{constructor(e){this.type=qg,this.auth=Nr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Eg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new vg(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Q1(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(C2)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Hg().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(async l=>{if(!t&&Q1(window.grecaptcha)&&Sn.scriptInjectionDeferred)await Sn.scriptInjectionDeferred.promise,s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Fg();c.length!==0&&(c+=l+`&onload=${nh}`),Sn.scriptInjectionDeferred=new n2,window[nh]=()=>{var h;(h=Sn.scriptInjectionDeferred)==null||h.resolve()},x2(c).then(()=>{var h;return(h=Sn.scriptInjectionDeferred)==null?void 0:h.promise}).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}Sn.scriptInjectionDeferred=null;async function rh(n,e,t,r=!1,s=!1){const i=new Sn(n);let o;if(s)o=C2;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ql(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await rh(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await rh(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(o)})}/**
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
 */function zg(n,e){const t=wa(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Tr(i,e??{}))return s;Ut(s,"already-initialized")}return t.initialize({options:e})}function Gg(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(un);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Wg(n,e,t){const r=Nr(n);te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=R2(e),{host:o,port:l}=Kg(e),c=l===null?"":`:${l}`,h={url:`${i}//${o}${c}/`},p=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(Tr(h,r.config.emulator)&&Tr(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,kr(o)?mc(`${i}//${o}${c}`):Yg()}function R2(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Kg(n){const e=R2(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:sh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:sh(o)}}}function sh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Yg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Tc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,t){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}async function Qg(n,e){return ar(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Xg(n,e){return Si(n,"POST","/v1/accounts:signInWithPassword",or(n,e))}/**
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
 */async function Jg(n,e){return Si(n,"POST","/v1/accounts:signInWithEmailLink",or(n,e))}async function Zg(n,e){return Si(n,"POST","/v1/accounts:signInWithEmailLink",or(n,e))}/**
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
 */class ci extends Tc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ci(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ci(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ql(e,t,"signInWithPassword",Xg);case"emailLink":return Jg(e,{email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ql(e,r,"signUpPassword",Qg);case"emailLink":return Zg(e,{idToken:t,email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Xr(n,e){return Si(n,"POST","/v1/accounts:signInWithIdp",or(n,e))}/**
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
 */const e4="http://localhost";class Ir extends Tc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ut("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new Ir(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Xr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Xr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xr(e,t)}buildRequest(){const e={requestUri:e4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ci(t)}return e}}/**
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
 */function t4(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function n4(n){const e=Hs(js(n)).link,t=e?Hs(js(e)).deep_link_id:null,r=Hs(js(n)).deep_link_id;return(r?Hs(js(r)).link:null)||r||t||e||n}class Ac{constructor(e){const t=Hs(js(e)),r=t.apiKey??null,s=t.oobCode??null,i=t4(t.mode??null);te(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=n4(e);try{return new Ac(t)}catch{return null}}}/**
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
 */class us{constructor(){this.providerId=us.PROVIDER_ID}static credential(e,t){return ci._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ac.parseLink(t);return te(r,"argument-error"),ci._fromEmailAndCode(e,r.code,r.tenantId)}}us.PROVIDER_ID="password";us.EMAIL_PASSWORD_SIGN_IN_METHOD="password";us.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class S2{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pi extends S2{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pn extends Pi{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
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
 */class kn extends Pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ir._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return kn.credential(t,r)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
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
 */class On extends Pi{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
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
 */class Nn extends Pi{constructor(){super("twitter.com")}static credential(e,t){return Ir._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Nn.credential(t,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
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
 */async function r4(n,e){return Si(n,"POST","/v1/accounts:signUp",or(n,e))}/**
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
 */class xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Bt._fromIdTokenResponse(e,r,s),o=ih(r);return new xr({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=ih(r);return new xr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function ih(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Uo extends an{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Uo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Uo(e,t,r,s)}}function P2(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Uo._fromErrorAndOperation(n,i,e,r):i})}async function s4(n,e,t=!1){const r=await li(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return xr._forOperation(n,"link",r)}/**
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
 */async function i4(n,e,t=!1){const{auth:r}=n;if(It(r.app))return Promise.reject(fn(r));const s="reauthenticate";try{const i=await li(n,P2(r,s,e,n),t);te(i.idToken,r,"internal-error");const o=vc(i.idToken);te(o,r,"internal-error");const{sub:l}=o;return te(n.uid===l,r,"user-mismatch"),xr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ut(r,"user-mismatch"),i}}/**
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
 */async function k2(n,e,t=!1){if(It(n.app))return Promise.reject(fn(n));const r="signIn",s=await P2(n,r,e),i=await xr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function o4(n,e){return k2(Nr(n),e)}/**
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
 */async function O2(n){const e=Nr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function a4(n,e,t){if(It(n.app))return Promise.reject(fn(n));const r=Nr(n),o=await ql(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",r4).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&O2(n),c}),l=await xr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function l4(n,e,t){return It(n.app)?Promise.reject(fn(n)):o4(ze(n),us.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&O2(n),r})}function c4(n,e,t,r){return ze(n).onIdTokenChanged(e,t,r)}function u4(n,e,t){return ze(n).beforeAuthStateChanged(e,t)}function h4(n,e,t,r){return ze(n).onAuthStateChanged(e,t,r)}function $o(n){return ze(n).signOut()}async function oh(n){return ze(n).delete()}const Ho="__sak";/**
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
 */class N2{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ho,"1"),this.storage.removeItem(Ho),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const d4=1e3,f4=10;class D2 extends N2{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=A2(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Og()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,f4):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},d4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}D2.type="LOCAL";const p4=D2;/**
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
 */class V2 extends N2{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}V2.type="SESSION";const L2=V2;/**
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
 */class ya{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ya(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(t.origin,i)),c=await m4(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ya.receivers=[];/**
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
 */function Ic(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class g4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=Ic("",20);s.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const E=m;if(E.data.eventId===h)switch(E.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(E.data.response);break;default:clearTimeout(p),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Xt(){return window}function w4(n){Xt().location.href=n}/**
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
 */function M2(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function _4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function y4(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function b4(){return M2()?self:null}/**
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
 */const B2="firebaseLocalStorageDb",v4=1,jo="firebaseLocalStorage",F2="fbase_key";class ki{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ba(n,e){return n.transaction([jo],e?"readwrite":"readonly").objectStore(jo)}function E4(){const n=indexedDB.deleteDatabase(B2);return new ki(n).toPromise()}function U2(){const n=indexedDB.open(B2,v4);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(jo,{keyPath:F2})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(jo)?e(r):(r.close(),await E4(),e(await U2()))})})}async function ah(n,e,t){const r=ba(n,!0).put({[F2]:e,value:t});return new ki(r).toPromise()}async function T4(n,e){const t=ba(n,!1).get(e),r=await new ki(t).toPromise();return r===void 0?null:r.value}function lh(n,e){const t=ba(n,!0).delete(e);return new ki(t).toPromise()}const A4=800,I4=3;class $2{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=U2(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>I4)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return M2()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ya._getInstance(b4()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await _4(),!this.activeServiceWorker)return;this.sender=new g4(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||y4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await ah(e,Ho,"1"),await lh(e,Ho)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ah(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>T4(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>lh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ba(s,!1).getAll();return new ki(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),A4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$2.type="LOCAL";const x4=$2;new Ri(3e4,6e4);/**
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
 */function C4(n,e){return e?un(e):(te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class xc extends Tc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function R4(n){return k2(n.auth,new xc(n),n.bypassAuthState)}function S4(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),i4(t,new xc(n),n.bypassAuthState)}async function P4(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),s4(t,new xc(n),n.bypassAuthState)}/**
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
 */class H2{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return R4;case"linkViaPopup":case"linkViaRedirect":return P4;case"reauthViaPopup":case"reauthViaRedirect":return S4;default:Ut(this.auth,"internal-error")}}resolve(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const k4=new Ri(2e3,1e4);class Kr extends H2{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Kr.currentPopupAction&&Kr.currentPopupAction.cancel(),Kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){_n(this.filter.length===1,"Popup operations only handle one event");const e=Ic();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,k4.get())};e()}}Kr.currentPopupAction=null;/**
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
 */const O4="pendingRedirect",Io=new Map;class N4 extends H2{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Io.get(this.auth._key());if(!e){try{const r=await D4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Io.set(this.auth._key(),e)}return this.bypassAuthState||Io.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function D4(n,e){const t=M4(e),r=L4(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function V4(n,e){Io.set(n._key(),e)}function L4(n){return un(n._redirectPersistence)}function M4(n){return Ao(O4,n.config.apiKey,n.name)}async function B4(n,e,t=!1){if(It(n.app))return Promise.reject(fn(n));const r=Nr(n),s=C4(r,e),o=await new N4(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const F4=10*60*1e3;class U4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$4(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!j2(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Qt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=F4&&this.cachedEventUids.clear(),this.cachedEventUids.has(ch(e))}saveEventToCache(e){this.cachedEventUids.add(ch(e)),this.lastProcessedEventTime=Date.now()}}function ch(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function j2({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $4(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return j2(n);default:return!1}}/**
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
 */async function H4(n,e={}){return ar(n,"GET","/v1/projects",e)}/**
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
 */const j4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,q4=/^https?/;async function z4(n){if(n.config.emulator)return;const{authorizedDomains:e}=await H4(n);for(const t of e)try{if(G4(t))return}catch{}Ut(n,"unauthorized-domain")}function G4(n){const e=Hl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!q4.test(t))return!1;if(j4.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const W4=new Ri(3e4,6e4);function uh(){const n=Xt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function K4(n){return new Promise((e,t)=>{var s,i,o;function r(){uh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uh(),t(Qt(n,"network-request-failed"))},timeout:W4.get()})}if((i=(s=Xt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Xt().gapi)!=null&&o.load)r();else{const l=$g("iframefcb");return Xt()[l]=()=>{gapi.load?r():t(Qt(n,"network-request-failed"))},x2(`${Ug()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw xo=null,e})}let xo=null;function Y4(n){return xo=xo||K4(n),xo}/**
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
 */const Q4=new Ri(5e3,15e3),X4="__/auth/iframe",J4="emulator/auth/iframe",Z4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},e7=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function t7(n){const e=n.config;te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?bc(e,J4):`https://${n.config.authDomain}/${X4}`,r={apiKey:e.apiKey,appName:n.name,v:Or},s=e7.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ci(r).slice(1)}`}async function n7(n){const e=await Y4(n),t=Xt().gapi;return te(t,n,"internal-error"),e.open({where:document.body,url:t7(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Z4,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Qt(n,"network-request-failed"),l=Xt().setTimeout(()=>{i(o)},Q4.get());function c(){Xt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const r7={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},s7=500,i7=600,o7="_blank",a7="http://localhost";class hh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function l7(n,e,t,r=s7,s=i7){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...r7,width:r.toString(),height:s.toString(),top:i,left:o},h=st().toLowerCase();t&&(l=y2(h)?o7:t),w2(h)&&(e=e||a7,c.scrollbars="yes");const p=Object.entries(c).reduce((E,[C,P])=>`${E}${C}=${P},`,"");if(kg(h)&&l!=="_self")return c7(e||"",l),new hh(null);const m=window.open(e||"",l,p);te(m,n,"popup-blocked");try{m.focus()}catch{}return new hh(m)}function c7(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const u7="__/auth/handler",h7="emulator/auth/handler",d7=encodeURIComponent("fac");async function dh(n,e,t,r,s,i){te(n.config.authDomain,n,"auth-domain-config-required"),te(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Or,eventId:s};if(e instanceof S2){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Z6(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof Pi){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const c=await n._getAppCheckToken(),h=c?`#${d7}=${encodeURIComponent(c)}`:"";return`${f7(n)}?${Ci(l).slice(1)}${h}`}function f7({config:n}){return n.emulator?bc(n,h7):`https://${n.authDomain}/${u7}`}/**
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
 */const Il="webStorageSupport";class p7{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=L2,this._completeRedirectFn=B4,this._overrideRedirectResult=V4}async _openPopup(e,t,r,s){var o;_n((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await dh(e,t,r,Hl(),s);return l7(e,i,Ic())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await dh(e,t,r,Hl(),s);return w4(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(_n(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await n7(e),r=new U4(e);return t.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Il,{type:Il},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Il];i!==void 0&&t(!!i),Ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=z4(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return A2()||_2()||Ec()}}const m7=p7;var fh="@firebase/auth",ph="1.13.3";/**
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
 */function w7(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _7(n){Ar(new Kn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:I2(n)},h=new Mg(r,s,i,c);return Gg(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ar(new Kn("auth-internal",e=>{const t=Nr(e.getProvider("auth").getImmediate());return(r=>new g7(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(fh,ph,w7(n)),Yt(fh,ph,"esm2020")}/**
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
 */const y7=5*60,b7=t2("authIdTokenMaxAge")||y7;let mh=null;const v7=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>b7)return;const s=t==null?void 0:t.token;mh!==s&&(mh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function E7(n=_c()){const e=wa(n,"auth");if(e.isInitialized())return e.getImmediate();const t=zg(n,{popupRedirectResolver:m7,persistence:[x4,p4,L2]}),r=t2("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=v7(i.toString());u4(t,o,()=>o(t.currentUser)),c4(t,l=>o(l))}}const s=Jd("auth");return s&&Wg(t,`http://${s}`),t}function T7(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Bg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Qt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",T7().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_7("Browser");var gh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hn,q2;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function y(){}y.prototype=_.prototype,v.F=_.prototype,v.prototype=new y,v.prototype.constructor=v,v.D=function(I,A,R){for(var b=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)b[pt-2]=arguments[pt];return _.prototype[A].apply(I,b)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,_,y){y||(y=0);const I=Array(16);if(typeof _=="string")for(var A=0;A<16;++A)I[A]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(A=0;A<16;++A)I[A]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=v.g[0],y=v.g[1],A=v.g[2];let R=v.g[3],b;b=_+(R^y&(A^R))+I[0]+3614090360&4294967295,_=y+(b<<7&4294967295|b>>>25),b=R+(A^_&(y^A))+I[1]+3905402710&4294967295,R=_+(b<<12&4294967295|b>>>20),b=A+(y^R&(_^y))+I[2]+606105819&4294967295,A=R+(b<<17&4294967295|b>>>15),b=y+(_^A&(R^_))+I[3]+3250441966&4294967295,y=A+(b<<22&4294967295|b>>>10),b=_+(R^y&(A^R))+I[4]+4118548399&4294967295,_=y+(b<<7&4294967295|b>>>25),b=R+(A^_&(y^A))+I[5]+1200080426&4294967295,R=_+(b<<12&4294967295|b>>>20),b=A+(y^R&(_^y))+I[6]+2821735955&4294967295,A=R+(b<<17&4294967295|b>>>15),b=y+(_^A&(R^_))+I[7]+4249261313&4294967295,y=A+(b<<22&4294967295|b>>>10),b=_+(R^y&(A^R))+I[8]+1770035416&4294967295,_=y+(b<<7&4294967295|b>>>25),b=R+(A^_&(y^A))+I[9]+2336552879&4294967295,R=_+(b<<12&4294967295|b>>>20),b=A+(y^R&(_^y))+I[10]+4294925233&4294967295,A=R+(b<<17&4294967295|b>>>15),b=y+(_^A&(R^_))+I[11]+2304563134&4294967295,y=A+(b<<22&4294967295|b>>>10),b=_+(R^y&(A^R))+I[12]+1804603682&4294967295,_=y+(b<<7&4294967295|b>>>25),b=R+(A^_&(y^A))+I[13]+4254626195&4294967295,R=_+(b<<12&4294967295|b>>>20),b=A+(y^R&(_^y))+I[14]+2792965006&4294967295,A=R+(b<<17&4294967295|b>>>15),b=y+(_^A&(R^_))+I[15]+1236535329&4294967295,y=A+(b<<22&4294967295|b>>>10),b=_+(A^R&(y^A))+I[1]+4129170786&4294967295,_=y+(b<<5&4294967295|b>>>27),b=R+(y^A&(_^y))+I[6]+3225465664&4294967295,R=_+(b<<9&4294967295|b>>>23),b=A+(_^y&(R^_))+I[11]+643717713&4294967295,A=R+(b<<14&4294967295|b>>>18),b=y+(R^_&(A^R))+I[0]+3921069994&4294967295,y=A+(b<<20&4294967295|b>>>12),b=_+(A^R&(y^A))+I[5]+3593408605&4294967295,_=y+(b<<5&4294967295|b>>>27),b=R+(y^A&(_^y))+I[10]+38016083&4294967295,R=_+(b<<9&4294967295|b>>>23),b=A+(_^y&(R^_))+I[15]+3634488961&4294967295,A=R+(b<<14&4294967295|b>>>18),b=y+(R^_&(A^R))+I[4]+3889429448&4294967295,y=A+(b<<20&4294967295|b>>>12),b=_+(A^R&(y^A))+I[9]+568446438&4294967295,_=y+(b<<5&4294967295|b>>>27),b=R+(y^A&(_^y))+I[14]+3275163606&4294967295,R=_+(b<<9&4294967295|b>>>23),b=A+(_^y&(R^_))+I[3]+4107603335&4294967295,A=R+(b<<14&4294967295|b>>>18),b=y+(R^_&(A^R))+I[8]+1163531501&4294967295,y=A+(b<<20&4294967295|b>>>12),b=_+(A^R&(y^A))+I[13]+2850285829&4294967295,_=y+(b<<5&4294967295|b>>>27),b=R+(y^A&(_^y))+I[2]+4243563512&4294967295,R=_+(b<<9&4294967295|b>>>23),b=A+(_^y&(R^_))+I[7]+1735328473&4294967295,A=R+(b<<14&4294967295|b>>>18),b=y+(R^_&(A^R))+I[12]+2368359562&4294967295,y=A+(b<<20&4294967295|b>>>12),b=_+(y^A^R)+I[5]+4294588738&4294967295,_=y+(b<<4&4294967295|b>>>28),b=R+(_^y^A)+I[8]+2272392833&4294967295,R=_+(b<<11&4294967295|b>>>21),b=A+(R^_^y)+I[11]+1839030562&4294967295,A=R+(b<<16&4294967295|b>>>16),b=y+(A^R^_)+I[14]+4259657740&4294967295,y=A+(b<<23&4294967295|b>>>9),b=_+(y^A^R)+I[1]+2763975236&4294967295,_=y+(b<<4&4294967295|b>>>28),b=R+(_^y^A)+I[4]+1272893353&4294967295,R=_+(b<<11&4294967295|b>>>21),b=A+(R^_^y)+I[7]+4139469664&4294967295,A=R+(b<<16&4294967295|b>>>16),b=y+(A^R^_)+I[10]+3200236656&4294967295,y=A+(b<<23&4294967295|b>>>9),b=_+(y^A^R)+I[13]+681279174&4294967295,_=y+(b<<4&4294967295|b>>>28),b=R+(_^y^A)+I[0]+3936430074&4294967295,R=_+(b<<11&4294967295|b>>>21),b=A+(R^_^y)+I[3]+3572445317&4294967295,A=R+(b<<16&4294967295|b>>>16),b=y+(A^R^_)+I[6]+76029189&4294967295,y=A+(b<<23&4294967295|b>>>9),b=_+(y^A^R)+I[9]+3654602809&4294967295,_=y+(b<<4&4294967295|b>>>28),b=R+(_^y^A)+I[12]+3873151461&4294967295,R=_+(b<<11&4294967295|b>>>21),b=A+(R^_^y)+I[15]+530742520&4294967295,A=R+(b<<16&4294967295|b>>>16),b=y+(A^R^_)+I[2]+3299628645&4294967295,y=A+(b<<23&4294967295|b>>>9),b=_+(A^(y|~R))+I[0]+4096336452&4294967295,_=y+(b<<6&4294967295|b>>>26),b=R+(y^(_|~A))+I[7]+1126891415&4294967295,R=_+(b<<10&4294967295|b>>>22),b=A+(_^(R|~y))+I[14]+2878612391&4294967295,A=R+(b<<15&4294967295|b>>>17),b=y+(R^(A|~_))+I[5]+4237533241&4294967295,y=A+(b<<21&4294967295|b>>>11),b=_+(A^(y|~R))+I[12]+1700485571&4294967295,_=y+(b<<6&4294967295|b>>>26),b=R+(y^(_|~A))+I[3]+2399980690&4294967295,R=_+(b<<10&4294967295|b>>>22),b=A+(_^(R|~y))+I[10]+4293915773&4294967295,A=R+(b<<15&4294967295|b>>>17),b=y+(R^(A|~_))+I[1]+2240044497&4294967295,y=A+(b<<21&4294967295|b>>>11),b=_+(A^(y|~R))+I[8]+1873313359&4294967295,_=y+(b<<6&4294967295|b>>>26),b=R+(y^(_|~A))+I[15]+4264355552&4294967295,R=_+(b<<10&4294967295|b>>>22),b=A+(_^(R|~y))+I[6]+2734768916&4294967295,A=R+(b<<15&4294967295|b>>>17),b=y+(R^(A|~_))+I[13]+1309151649&4294967295,y=A+(b<<21&4294967295|b>>>11),b=_+(A^(y|~R))+I[4]+4149444226&4294967295,_=y+(b<<6&4294967295|b>>>26),b=R+(y^(_|~A))+I[11]+3174756917&4294967295,R=_+(b<<10&4294967295|b>>>22),b=A+(_^(R|~y))+I[2]+718787259&4294967295,A=R+(b<<15&4294967295|b>>>17),b=y+(R^(A|~_))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(A+(b<<21&4294967295|b>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+R&4294967295}r.prototype.v=function(v,_){_===void 0&&(_=v.length);const y=_-this.blockSize,I=this.C;let A=this.h,R=0;for(;R<_;){if(A==0)for(;R<=y;)s(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<_;)if(I[A++]=v.charCodeAt(R++),A==this.blockSize){s(this,I),A=0;break}}else for(;R<_;)if(I[A++]=v[R++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=_},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;_=this.o*8;for(var y=v.length-8;y<v.length;++y)v[y]=_&255,_/=256;for(this.v(v),v=Array(16),_=0,y=0;y<4;++y)for(let I=0;I<32;I+=8)v[_++]=this.g[y]>>>I&255;return v};function i(v,_){var y=l;return Object.prototype.hasOwnProperty.call(y,v)?y[v]:y[v]=_(v)}function o(v,_){this.h=_;const y=[];let I=!0;for(let A=v.length-1;A>=0;A--){const R=v[A]|0;I&&R==_||(y[A]=R,I=!1)}this.g=y}var l={};function c(v){return-128<=v&&v<128?i(v,function(_){return new o([_|0],_<0?-1:0)}):new o([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return m;if(v<0)return N(h(-v));const _=[];let y=1;for(let I=0;v>=y;I++)_[I]=v/y|0,y*=4294967296;return new o(_,0)}function p(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return N(p(v.substring(1),_));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=h(Math.pow(_,8));let I=m;for(let R=0;R<v.length;R+=8){var A=Math.min(8,v.length-R);const b=parseInt(v.substring(R,R+A),_);A<8?(A=h(Math.pow(_,A)),I=I.j(A).add(h(b))):(I=I.j(y),I=I.add(h(b)))}return I}var m=c(0),E=c(1),C=c(16777216);n=o.prototype,n.m=function(){if(F(this))return-N(this).m();let v=0,_=1;for(let y=0;y<this.g.length;y++){const I=this.i(y);v+=(I>=0?I:4294967296+I)*_,_*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(P(this))return"0";if(F(this))return"-"+N(this).toString(v);const _=h(Math.pow(v,6));var y=this;let I="";for(;;){const A=H(y,_).g;y=q(y,A.j(_));let R=((y.g.length>0?y.g[0]:y.h)>>>0).toString(v);if(y=A,P(y))return R+I;for(;R.length<6;)R="0"+R;I=R+I}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function P(v){if(v.h!=0)return!1;for(let _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function F(v){return v.h==-1}n.l=function(v){return v=q(this,v),F(v)?-1:P(v)?0:1};function N(v){const _=v.g.length,y=[];for(let I=0;I<_;I++)y[I]=~v.g[I];return new o(y,~v.h).add(E)}n.abs=function(){return F(this)?N(this):this},n.add=function(v){const _=Math.max(this.g.length,v.g.length),y=[];let I=0;for(let A=0;A<=_;A++){let R=I+(this.i(A)&65535)+(v.i(A)&65535),b=(R>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);I=b>>>16,R&=65535,b&=65535,y[A]=b<<16|R}return new o(y,y[y.length-1]&-2147483648?-1:0)};function q(v,_){return v.add(N(_))}n.j=function(v){if(P(this)||P(v))return m;if(F(this))return F(v)?N(this).j(N(v)):N(N(this).j(v));if(F(v))return N(this.j(N(v)));if(this.l(C)<0&&v.l(C)<0)return h(this.m()*v.m());const _=this.g.length+v.g.length,y=[];for(var I=0;I<2*_;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(let A=0;A<v.g.length;A++){const R=this.i(I)>>>16,b=this.i(I)&65535,pt=v.i(A)>>>16,lr=v.i(A)&65535;y[2*I+2*A]+=b*lr,J(y,2*I+2*A),y[2*I+2*A+1]+=R*lr,J(y,2*I+2*A+1),y[2*I+2*A+1]+=b*pt,J(y,2*I+2*A+1),y[2*I+2*A+2]+=R*pt,J(y,2*I+2*A+2)}for(v=0;v<_;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=_;v<2*_;v++)y[v]=0;return new o(y,0)};function J(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function B(v,_){this.g=v,this.h=_}function H(v,_){if(P(_))throw Error("division by zero");if(P(v))return new B(m,m);if(F(v))return _=H(N(v),_),new B(N(_.g),N(_.h));if(F(_))return _=H(v,N(_)),new B(N(_.g),_.h);if(v.g.length>30){if(F(v)||F(_))throw Error("slowDivide_ only works with positive integers.");for(var y=E,I=_;I.l(v)<=0;)y=oe(y),I=oe(I);var A=ae(y,1),R=ae(I,1);for(I=ae(I,2),y=ae(y,2);!P(I);){var b=R.add(I);b.l(v)<=0&&(A=A.add(y),R=b),I=ae(I,1),y=ae(y,1)}return _=q(v,A.j(_)),new B(A,_)}for(A=m;v.l(_)>=0;){for(y=Math.max(1,Math.floor(v.m()/_.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),R=h(y),b=R.j(_);F(b)||b.l(v)>0;)y-=I,R=h(y),b=R.j(_);P(R)&&(R=E),A=A.add(R),v=q(v,b)}return new B(A,v)}n.B=function(v){return H(this,v).h},n.and=function(v){const _=Math.max(this.g.length,v.g.length),y=[];for(let I=0;I<_;I++)y[I]=this.i(I)&v.i(I);return new o(y,this.h&v.h)},n.or=function(v){const _=Math.max(this.g.length,v.g.length),y=[];for(let I=0;I<_;I++)y[I]=this.i(I)|v.i(I);return new o(y,this.h|v.h)},n.xor=function(v){const _=Math.max(this.g.length,v.g.length),y=[];for(let I=0;I<_;I++)y[I]=this.i(I)^v.i(I);return new o(y,this.h^v.h)};function oe(v){const _=v.g.length+1,y=[];for(let I=0;I<_;I++)y[I]=v.i(I)<<1|v.i(I-1)>>>31;return new o(y,v.h)}function ae(v,_){const y=_>>5;_%=32;const I=v.g.length-y,A=[];for(let R=0;R<I;R++)A[R]=_>0?v.i(R+y)>>>_|v.i(R+y+1)<<32-_:v.i(R+y);return new o(A,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,q2=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,Hn=o}).apply(typeof gh<"u"?gh:typeof self<"u"?self:typeof window<"u"?window:{});var uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var z2,qs,G2,Co,zl,W2,K2,Y2;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof uo=="object"&&uo];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var x=a[g];if(!(x in d))break e;d=d[x]}a=a[a.length-1],g=d[a],u=u(g),u!=g&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var d=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&d.push([g,u[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function c(a,u,d){return a.call.apply(a.bind,arguments)}function h(a,u,d){return h=c,h.apply(null,arguments)}function p(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function m(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,x,k){for(var $=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)$[ue-2]=arguments[ue];return u.prototype[x].apply(g,$)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function C(a){const u=a.length;if(u>0){const d=Array(u);for(let g=0;g<u;g++)d[g]=a[g];return d}return[]}function P(a,u){for(let g=1;g<arguments.length;g++){const x=arguments[g];var d=typeof x;if(d=d!="object"?d:x?Array.isArray(x)?"array":d:"null",d=="array"||d=="object"&&typeof x.length=="number"){d=a.length||0;const k=x.length||0;a.length=d+k;for(let $=0;$<k;$++)a[d+$]=x[$]}else a.push(x)}}class F{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function N(a){o.setTimeout(()=>{throw a},0)}function q(){var a=v;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class J{constructor(){this.h=this.g=null}add(u,d){const g=B.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var B=new F(()=>new H,a=>a.reset());class H{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,ae=!1,v=new J,_=()=>{const a=Promise.resolve(void 0);oe=()=>{a.then(y)}};function y(){for(var a;a=q();){try{a.h.call(a.g)}catch(d){N(d)}var u=B;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}ae=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a}();function b(a){return/^[\s\xa0]*$/.test(a)}function pt(a,u){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}m(pt,A),pt.prototype.init=function(a,u){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&pt.Z.h.call(this)},pt.prototype.h=function(){pt.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var lr="closure_listenable_"+(Math.random()*1e6|0),Zp=0;function e6(a,u,d,g,x){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=x,this.key=++Zp,this.da=this.fa=!1}function Ki(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Yi(a,u,d){for(const g in a)u.call(d,a[g],g,a)}function t6(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function Bu(a){const u={};for(const d in a)u[d]=a[d];return u}const Fu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Uu(a,u){let d,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(d in g)a[d]=g[d];for(let k=0;k<Fu.length;k++)d=Fu[k],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Qi(a){this.src=a,this.g={},this.h=0}Qi.prototype.add=function(a,u,d,g,x){const k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);const $=Qa(a,u,g,x);return $>-1?(u=a[$],d||(u.fa=!1)):(u=new e6(u,this.src,k,!!g,x),u.fa=d,a.push(u)),u};function Ya(a,u){const d=u.type;if(d in a.g){var g=a.g[d],x=Array.prototype.indexOf.call(g,u,void 0),k;(k=x>=0)&&Array.prototype.splice.call(g,x,1),k&&(Ki(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Qa(a,u,d,g){for(let x=0;x<a.length;++x){const k=a[x];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==g)return x}return-1}var Xa="closure_lm_"+(Math.random()*1e6|0),Ja={};function $u(a,u,d,g,x){if(Array.isArray(u)){for(let k=0;k<u.length;k++)$u(a,u[k],d,g,x);return null}return d=qu(d),a&&a[lr]?a.J(u,d,l(g)?!!g.capture:!1,x):n6(a,u,d,!1,g,x)}function n6(a,u,d,g,x,k){if(!u)throw Error("Invalid event type");const $=l(x)?!!x.capture:!!x;let ue=el(a);if(ue||(a[Xa]=ue=new Qi(a)),d=ue.add(u,d,g,$,k),d.proxy)return d;if(g=r6(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)R||(x=$),x===void 0&&(x=!1),a.addEventListener(u.toString(),g,x);else if(a.attachEvent)a.attachEvent(ju(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function r6(){function a(d){return u.call(a.src,a.listener,d)}const u=s6;return a}function Hu(a,u,d,g,x){if(Array.isArray(u))for(var k=0;k<u.length;k++)Hu(a,u[k],d,g,x);else g=l(g)?!!g.capture:!!g,d=qu(d),a&&a[lr]?(a=a.i,k=String(u).toString(),k in a.g&&(u=a.g[k],d=Qa(u,d,g,x),d>-1&&(Ki(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[k],a.h--)))):a&&(a=el(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Qa(u,d,g,x)),(d=a>-1?u[a]:null)&&Za(d))}function Za(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[lr])Ya(u.i,a);else{var d=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(d,g,a.capture):u.detachEvent?u.detachEvent(ju(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=el(u))?(Ya(d,a),d.h==0&&(d.src=null,u[Xa]=null)):Ki(a)}}}function ju(a){return a in Ja?Ja[a]:Ja[a]="on"+a}function s6(a,u){if(a.da)a=!0;else{u=new pt(u,this);const d=a.listener,g=a.ha||a.src;a.fa&&Za(a),a=d.call(g,u)}return a}function el(a){return a=a[Xa],a instanceof Qi?a:null}var tl="__closure_events_fn_"+(Math.random()*1e9>>>0);function qu(a){return typeof a=="function"?a:(a[tl]||(a[tl]=function(u){return a.handleEvent(u)}),a[tl])}function Je(){I.call(this),this.i=new Qi(this),this.M=this,this.G=null}m(Je,I),Je.prototype[lr]=!0,Je.prototype.removeEventListener=function(a,u,d,g){Hu(this,a,u,d,g)};function at(a,u){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new A(u,a);else if(u instanceof A)u.target=u.target||a;else{var x=u;u=new A(g,a),Uu(u,x)}x=!0;let k,$;if(d)for($=d.length-1;$>=0;$--)k=u.g=d[$],x=Xi(k,g,!0,u)&&x;if(k=u.g=a,x=Xi(k,g,!0,u)&&x,x=Xi(k,g,!1,u)&&x,d)for($=0;$<d.length;$++)k=u.g=d[$],x=Xi(k,g,!1,u)&&x}Je.prototype.N=function(){if(Je.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let g=0;g<d.length;g++)Ki(d[g]);delete a.g[u],a.h--}}this.G=null},Je.prototype.J=function(a,u,d,g){return this.i.add(String(a),u,!1,d,g)},Je.prototype.K=function(a,u,d,g){return this.i.add(String(a),u,!0,d,g)};function Xi(a,u,d,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let x=!0;for(let k=0;k<u.length;++k){const $=u[k];if($&&!$.da&&$.capture==d){const ue=$.listener,$e=$.ha||$.src;$.fa&&Ya(a.i,$),x=ue.call($e,g)!==!1&&x}}return x&&!g.defaultPrevented}function i6(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function zu(a){a.g=i6(()=>{a.g=null,a.i&&(a.i=!1,zu(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class o6 extends I{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:zu(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ts(a){I.call(this),this.h=a,this.g={}}m(Ts,I);var Gu=[];function Wu(a){Yi(a.g,function(u,d){this.g.hasOwnProperty(d)&&Za(u)},a),a.g={}}Ts.prototype.N=function(){Ts.Z.N.call(this),Wu(this)},Ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nl=o.JSON.stringify,a6=o.JSON.parse,l6=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ku(){}function Yu(){}var As={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function rl(){A.call(this,"d")}m(rl,A);function sl(){A.call(this,"c")}m(sl,A);var cr={},Qu=null;function Ji(){return Qu=Qu||new Je}cr.Ia="serverreachability";function Xu(a){A.call(this,cr.Ia,a)}m(Xu,A);function Is(a){const u=Ji();at(u,new Xu(u))}cr.STAT_EVENT="statevent";function Ju(a,u){A.call(this,cr.STAT_EVENT,a),this.stat=u}m(Ju,A);function lt(a){const u=Ji();at(u,new Ju(u,a))}cr.Ja="timingevent";function Zu(a,u){A.call(this,cr.Ja,a),this.size=u}m(Zu,A);function xs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Cs(){this.g=!0}Cs.prototype.ua=function(){this.g=!1};function c6(a,u,d,g,x,k){a.info(function(){if(a.g)if(k){var $="",ue=k.split("&");for(let ve=0;ve<ue.length;ve++){var $e=ue[ve].split("=");if($e.length>1){const Ge=$e[0];$e=$e[1];const jt=Ge.split("_");$=jt.length>=2&&jt[1]=="type"?$+(Ge+"="+$e+"&"):$+(Ge+"=redacted&")}}}else $=null;else $=k;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+u+`
`+d+`
`+$})}function u6(a,u,d,g,x,k,$){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+u+`
`+d+`
`+k+" "+$})}function $r(a,u,d,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+d6(a,d)+(g?" "+g:"")})}function h6(a,u){a.info(function(){return"TIMEOUT: "+u})}Cs.prototype.info=function(){};function d6(a,u){if(!a.g)return u;if(!u)return null;try{const k=JSON.parse(u);if(k){for(a=0;a<k.length;a++)if(Array.isArray(k[a])){var d=k[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var x=g[0];if(x!="noop"&&x!="stop"&&x!="close")for(let $=1;$<g.length;$++)g[$]=""}}}}return nl(k)}catch{return u}}var Zi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},e1={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},t1;function il(){}m(il,Ku),il.prototype.g=function(){return new XMLHttpRequest},t1=new il;function Rs(a){return encodeURIComponent(String(a))}function f6(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function vn(a,u,d,g){this.j=a,this.i=u,this.l=d,this.S=g||1,this.V=new Ts(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new n1}function n1(){this.i=null,this.g="",this.h=!1}var r1={},ol={};function al(a,u,d){a.M=1,a.A=to(Ht(u)),a.u=d,a.R=!0,s1(a,null)}function s1(a,u){a.F=Date.now(),eo(a),a.B=Ht(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),w1(d.i,"t",g),a.C=0,d=a.j.L,a.h=new n1,a.g=V1(a.j,d?u:null,!a.u),a.P>0&&(a.O=new o6(h(a.Y,a,a.g),a.P)),u=a.V,d=a.g,g=a.ba;var x="readystatechange";Array.isArray(x)||(x&&(Gu[0]=x.toString()),x=Gu);for(let k=0;k<x.length;k++){const $=$u(d,x[k],g||u.handleEvent,!1,u.h||u);if(!$)break;u.g[$.key]=$}u=a.J?Bu(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),Is(),c6(a.i,a.v,a.B,a.l,a.S,a.u)}vn.prototype.ba=function(a){a=a.target;const u=this.O;u&&An(a)==3?u.j():this.Y(a)},vn.prototype.Y=function(a){try{if(a==this.g)e:{const ue=An(this.g),$e=this.g.ya(),ve=this.g.ca();if(!(ue<3)&&(ue!=3||this.g&&(this.h.h||this.g.la()||A1(this.g)))){this.K||ue!=4||$e==7||($e==8||ve<=0?Is(3):Is(2)),ll(this);var u=this.g.ca();this.X=u;var d=p6(this);if(this.o=u==200,u6(this.i,this.v,this.B,this.l,this.S,ue,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,x=this.g;if((g=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(g)){var k=g;break t}}k=null}if(a=k)$r(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,cl(this,a);else{this.o=!1,this.m=3,lt(12),ur(this),Ss(this);break e}}if(this.R){a=!0;let Ge;for(;!this.K&&this.C<d.length;)if(Ge=m6(this,d),Ge==ol){ue==4&&(this.m=4,lt(14),a=!1),$r(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==r1){this.m=4,lt(15),$r(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else $r(this.i,this.l,Ge,null),cl(this,Ge);if(i1(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ue!=4||d.length!=0||this.h.h||(this.m=1,lt(16),a=!1),this.o=this.o&&a,!a)$r(this.i,this.l,d,"[Invalid Chunked Response]"),ur(this),Ss(this);else if(d.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),wl($),$.P=!0,lt(11))}}else $r(this.i,this.l,d,null),cl(this,d);ue==4&&ur(this),this.o&&!this.K&&(ue==4?k1(this.j,this):(this.o=!1,eo(this)))}else S6(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,lt(12)):(this.m=0,lt(13)),ur(this),Ss(this)}}}catch{}finally{}};function p6(a){if(!i1(a))return a.g.la();const u=A1(a.g);if(u==="")return"";let d="";const g=u.length,x=An(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return ur(a),Ss(a),"";a.h.i=new o.TextDecoder}for(let k=0;k<g;k++)a.h.h=!0,d+=a.h.i.decode(u[k],{stream:!(x&&k==g-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function i1(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function m6(a,u){var d=a.C,g=u.indexOf(`
`,d);return g==-1?ol:(d=Number(u.substring(d,g)),isNaN(d)?r1:(g+=1,g+d>u.length?ol:(u=u.slice(g,g+d),a.C=g+d,u)))}vn.prototype.cancel=function(){this.K=!0,ur(this)};function eo(a){a.T=Date.now()+a.H,o1(a,a.H)}function o1(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=xs(h(a.aa,a),u)}function ll(a){a.D&&(o.clearTimeout(a.D),a.D=null)}vn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(h6(this.i,this.B),this.M!=2&&(Is(),lt(17)),ur(this),this.m=2,Ss(this)):o1(this,this.T-a)};function Ss(a){a.j.I==0||a.K||k1(a.j,a)}function ur(a){ll(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Wu(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function cl(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||ul(d.h,a))){if(!a.L&&ul(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)oo(d),so(d);else break e;gl(d),lt(18)}}else d.xa=x[1],0<d.xa-d.K&&x[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=xs(h(d.Va,d),6e3));c1(d.h)<=1&&d.ta&&(d.ta=void 0)}else dr(d,11)}else if((a.L||d.g==a)&&oo(d),!b(u))for(x=d.Ba.g.parse(u),u=0;u<x.length;u++){let ve=x[u];const Ge=ve[0];if(!(Ge<=d.K))if(d.K=Ge,ve=ve[1],d.I==2)if(ve[0]=="c"){d.M=ve[1],d.ba=ve[2];const jt=ve[3];jt!=null&&(d.ka=jt,d.j.info("VER="+d.ka));const fr=ve[4];fr!=null&&(d.za=fr,d.j.info("SVER="+d.za));const In=ve[5];In!=null&&typeof In=="number"&&In>0&&(g=1.5*In,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const xn=a.g;if(xn){const lo=xn.g?xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(lo){var k=g.h;k.g||lo.indexOf("spdy")==-1&&lo.indexOf("quic")==-1&&lo.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(hl(k,k.h),k.h=null))}if(g.G){const _l=xn.g?xn.g.getResponseHeader("X-HTTP-Session-Id"):null;_l&&(g.wa=_l,Ee(g.J,g.G,_l))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var $=a;if(g.na=D1(g,g.L?g.ba:null,g.W),$.L){u1(g.h,$);var ue=$,$e=g.O;$e&&(ue.H=$e),ue.D&&(ll(ue),eo(ue)),g.g=$}else S1(g);d.i.length>0&&io(d)}else ve[0]!="stop"&&ve[0]!="close"||dr(d,7);else d.I==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?dr(d,7):ml(d):ve[0]!="noop"&&d.l&&d.l.qa(ve),d.A=0)}}Is(4)}catch{}}var g6=class{constructor(a,u){this.g=a,this.map=u}};function a1(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function l1(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function c1(a){return a.h?1:a.g?a.g.size:0}function ul(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function hl(a,u){a.g?a.g.add(u):a.h=u}function u1(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}a1.prototype.cancel=function(){if(this.i=h1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function h1(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return C(a.i)}var d1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function w6(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let x,k=null;g>=0?(x=a[d].substring(0,g),k=a[d].substring(g+1)):x=a[d],u(x,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function En(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof En?(this.l=a.l,Ps(this,a.j),this.o=a.o,this.g=a.g,ks(this,a.u),this.h=a.h,dl(this,_1(a.i)),this.m=a.m):a&&(u=String(a).match(d1))?(this.l=!1,Ps(this,u[1]||"",!0),this.o=Os(u[2]||""),this.g=Os(u[3]||"",!0),ks(this,u[4]),this.h=Os(u[5]||"",!0),dl(this,u[6]||"",!0),this.m=Os(u[7]||"")):(this.l=!1,this.i=new Ds(null,this.l))}En.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Ns(u,f1,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ns(u,f1,!0),"@"),a.push(Rs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ns(d,d.charAt(0)=="/"?b6:y6,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ns(d,E6)),a.join("")},En.prototype.resolve=function(a){const u=Ht(this);let d=!!a.j;d?Ps(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var g=a.h;if(d)ks(u,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var x=u.h.lastIndexOf("/");x!=-1&&(g=u.h.slice(0,x+1)+g)}if(x=g,x==".."||x==".")g="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){g=x.lastIndexOf("/",0)==0,x=x.split("/");const k=[];for(let $=0;$<x.length;){const ue=x[$++];ue=="."?g&&$==x.length&&k.push(""):ue==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),g&&$==x.length&&k.push("")):(k.push(ue),g=!0)}g=k.join("/")}else g=x}return d?u.h=g:d=a.i.toString()!=="",d?dl(u,_1(a.i)):d=!!a.m,d&&(u.m=a.m),u};function Ht(a){return new En(a)}function Ps(a,u,d){a.j=d?Os(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function ks(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function dl(a,u,d){u instanceof Ds?(a.i=u,T6(a.i,a.l)):(d||(u=Ns(u,v6)),a.i=new Ds(u,a.l))}function Ee(a,u,d){a.i.set(u,d)}function to(a){return Ee(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Os(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ns(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,_6),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function _6(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var f1=/[#\/\?@]/g,y6=/[#\?:]/g,b6=/[#\?]/g,v6=/[#\?@]/g,E6=/#/g;function Ds(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function hr(a){a.g||(a.g=new Map,a.h=0,a.i&&w6(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Ds.prototype,n.add=function(a,u){hr(this),this.i=null,a=Hr(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function p1(a,u){hr(a),u=Hr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function m1(a,u){return hr(a),u=Hr(a,u),a.g.has(u)}n.forEach=function(a,u){hr(this),this.g.forEach(function(d,g){d.forEach(function(x){a.call(u,x,g,this)},this)},this)};function g1(a,u){hr(a);let d=[];if(typeof u=="string")m1(a,u)&&(d=d.concat(a.g.get(Hr(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}n.set=function(a,u){return hr(this),this.i=null,a=Hr(this,a),m1(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=g1(this,a),a.length>0?String(a[0]):u):u};function w1(a,u,d){p1(a,u),d.length>0&&(a.i=null,a.g.set(Hr(a,u),C(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var d=u[g];const x=Rs(d);d=g1(this,d);for(let k=0;k<d.length;k++){let $=x;d[k]!==""&&($+="="+Rs(d[k])),a.push($)}}return this.i=a.join("&")};function _1(a){const u=new Ds;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function Hr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function T6(a,u){u&&!a.j&&(hr(a),a.i=null,a.g.forEach(function(d,g){const x=g.toLowerCase();g!=x&&(p1(this,g),w1(this,x,d))},a)),a.j=u}function A6(a,u){const d=new Cs;if(o.Image){const g=new Image;g.onload=p(Tn,d,"TestLoadImage: loaded",!0,u,g),g.onerror=p(Tn,d,"TestLoadImage: error",!1,u,g),g.onabort=p(Tn,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=p(Tn,d,"TestLoadImage: timeout",!1,u,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function I6(a,u){const d=new Cs,g=new AbortController,x=setTimeout(()=>{g.abort(),Tn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(x),k.ok?Tn(d,"TestPingServer: ok",!0,u):Tn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(x),Tn(d,"TestPingServer: error",!1,u)})}function Tn(a,u,d,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(d)}catch{}}function x6(){this.g=new l6}function fl(a){this.i=a.Sb||null,this.h=a.ab||!1}m(fl,Ku),fl.prototype.g=function(){return new no(this.i,this.h)};function no(a,u){Je.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(no,Je),n=no.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Ls(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Vs(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;y1(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function y1(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Vs(this):Ls(this),this.readyState==3&&y1(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Vs(this))},n.Na=function(a){this.g&&(this.response=a,Vs(this))},n.ga=function(){this.g&&Vs(this)};function Vs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ls(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Ls(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(no.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function b1(a){let u="";return Yi(a,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function pl(a,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=b1(d),typeof a=="string"?d!=null&&Rs(d):Ee(a,u,d))}function Ce(a){Je.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Ce,Je);var C6=/^https?$/i,R6=["POST","PUT"];n=Ce.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():t1.g(),this.g.onreadystatechange=E(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){v1(this,k);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)d.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())d.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),x=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(R6,u,void 0)>=0)||g||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,$]of d)this.g.setRequestHeader(k,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(k){v1(this,k)}};function v1(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,E1(a),ro(a)}function E1(a){a.A||(a.A=!0,at(a,"complete"),at(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,at(this,"complete"),at(this,"abort"),ro(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ro(this,!0)),Ce.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?T1(this):this.Xa())},n.Xa=function(){T1(this)};function T1(a){if(a.h&&typeof i<"u"){if(a.v&&An(a)==4)setTimeout(a.Ca.bind(a),0);else if(at(a,"readystatechange"),An(a)==4){a.h=!1;try{const k=a.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=k===0){let $=String(a.D).match(d1)[1]||null;!$&&o.self&&o.self.location&&($=o.self.location.protocol.slice(0,-1)),g=!C6.test($?$.toLowerCase():"")}d=g}if(d)at(a,"complete"),at(a,"success");else{a.o=6;try{var x=An(a)>2?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.ca()+"]",E1(a)}}finally{ro(a)}}}}function ro(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||at(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function An(a){return a.g?a.g.readyState:0}n.ca=function(){try{return An(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),a6(u)}};function A1(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function S6(a){const u={};a=(a.g&&An(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(b(a[g]))continue;var d=f6(a[g]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[x]||[];u[x]=k,k.push(d)}t6(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ms(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function I1(a){this.za=0,this.i=[],this.j=new Cs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ms("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ms("baseRetryDelayMs",5e3,a),this.Za=Ms("retryDelaySeedMs",1e4,a),this.Ta=Ms("forwardChannelMaxRetries",2,a),this.va=Ms("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new a1(a&&a.concurrentRequestLimit),this.Ba=new x6,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=I1.prototype,n.ka=8,n.I=1,n.connect=function(a,u,d,g){lt(0),this.W=a,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=D1(this,null,this.W),io(this)};function ml(a){if(x1(a),a.I==3){var u=a.V++,d=Ht(a.J);if(Ee(d,"SID",a.M),Ee(d,"RID",u),Ee(d,"TYPE","terminate"),Bs(a,d),u=new vn(a,a.j,u),u.M=2,u.A=to(Ht(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=V1(u.j,null),u.g.ea(u.A)),u.F=Date.now(),eo(u)}N1(a)}function so(a){a.g&&(wl(a),a.g.cancel(),a.g=null)}function x1(a){so(a),a.v&&(o.clearTimeout(a.v),a.v=null),oo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function io(a){if(!l1(a.h)&&!a.m){a.m=!0;var u=a.Ea;oe||_(),ae||(oe(),ae=!0),v.add(u,a),a.D=0}}function P6(a,u){return c1(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=xs(h(a.Ea,a,u),O1(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const x=new vn(this,this.j,a);let k=this.o;if(this.U&&(k?(k=Bu(k),Uu(k,this.U)):k=this.U),this.u!==null||this.R||(x.J=k,k=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=R1(this,x,u),d=Ht(this.J),Ee(d,"RID",a),Ee(d,"CVER",22),this.G&&Ee(d,"X-HTTP-Session-Id",this.G),Bs(this,d),k&&(this.R?u="headers="+Rs(b1(k))+"&"+u:this.u&&pl(d,this.u,k)),hl(this.h,x),this.Ra&&Ee(d,"TYPE","init"),this.S?(Ee(d,"$req",u),Ee(d,"SID","null"),x.U=!0,al(x,d,null)):al(x,d,u),this.I=2}}else this.I==3&&(a?C1(this,a):this.i.length==0||l1(this.h)||C1(this))};function C1(a,u){var d;u?d=u.l:d=a.V++;const g=Ht(a.J);Ee(g,"SID",a.M),Ee(g,"RID",d),Ee(g,"AID",a.K),Bs(a,g),a.u&&a.o&&pl(g,a.u,a.o),d=new vn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=R1(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),hl(a.h,d),al(d,g,u)}function Bs(a,u){a.H&&Yi(a.H,function(d,g){Ee(u,g,d)}),a.l&&Yi({},function(d,g){Ee(u,g,d)})}function R1(a,u,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var x=a.i;let ue=-1;for(;;){const $e=["count="+d];ue==-1?d>0?(ue=x[0].g,$e.push("ofs="+ue)):ue=0:$e.push("ofs="+ue);let ve=!0;for(let Ge=0;Ge<d;Ge++){var k=x[Ge].g;const jt=x[Ge].map;if(k-=ue,k<0)ue=Math.max(0,x[Ge].g-100),ve=!1;else try{k="req"+k+"_"||"";try{var $=jt instanceof Map?jt:Object.entries(jt);for(const[fr,In]of $){let xn=In;l(In)&&(xn=nl(In)),$e.push(k+fr+"="+encodeURIComponent(xn))}}catch(fr){throw $e.push(k+"type="+encodeURIComponent("_badmap")),fr}}catch{g&&g(jt)}}if(ve){$=$e.join("&");break e}}$=void 0}return a=a.i.splice(0,d),u.G=a,$}function S1(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;oe||_(),ae||(oe(),ae=!0),v.add(u,a),a.A=0}}function gl(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=xs(h(a.Da,a),O1(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,P1(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=xs(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,lt(10),so(this),P1(this))};function wl(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function P1(a){a.g=new vn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=Ht(a.na);Ee(u,"RID","rpc"),Ee(u,"SID",a.M),Ee(u,"AID",a.K),Ee(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ee(u,"TO",a.ia),Ee(u,"TYPE","xmlhttp"),Bs(a,u),a.u&&a.o&&pl(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=to(Ht(u)),d.u=null,d.R=!0,s1(d,a)}n.Va=function(){this.C!=null&&(this.C=null,so(this),gl(this),lt(19))};function oo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function k1(a,u){var d=null;if(a.g==u){oo(a),wl(a),a.g=null;var g=2}else if(ul(a.h,u))d=u.G,u1(a.h,u),g=1;else return;if(a.I!=0){if(u.o)if(g==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var x=a.D;g=Ji(),at(g,new Zu(g,d)),io(a)}else S1(a);else if(x=u.m,x==3||x==0&&u.X>0||!(g==1&&P6(a,u)||g==2&&gl(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),x){case 1:dr(a,5);break;case 4:dr(a,10);break;case 3:dr(a,6);break;default:dr(a,2)}}}function O1(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function dr(a,u){if(a.j.info("Error code "+u),u==2){var d=h(a.bb,a),g=a.Ua;const x=!g;g=new En(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ps(g,"https"),to(g),x?A6(g.toString(),d):I6(g.toString(),d)}else lt(2);a.I=0,a.l&&a.l.pa(u),N1(a),x1(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function N1(a){if(a.I=0,a.ja=[],a.l){const u=h1(a.h);(u.length!=0||a.i.length!=0)&&(P(a.ja,u),P(a.ja,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.oa()}}function D1(a,u,d){var g=d instanceof En?Ht(d):new En(d);if(g.g!="")u&&(g.g=u+"."+g.g),ks(g,g.u);else{var x=o.location;g=x.protocol,u=u?u+"."+x.hostname:x.hostname,x=+x.port;const k=new En(null);g&&Ps(k,g),u&&(k.g=u),x&&ks(k,x),d&&(k.h=d),g=k}return d=a.G,u=a.wa,d&&u&&Ee(g,d,u),Ee(g,"VER",a.ka),Bs(a,g),g}function V1(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new Ce(new fl({ab:d})):new Ce(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function L1(){}n=L1.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ao(){}ao.prototype.g=function(a,u){return new Et(a,u)};function Et(a,u){Je.call(this),this.g=new I1(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!b(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!b(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new jr(this)}m(Et,Je),Et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){ml(this.g)},Et.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=nl(a),a=d);u.i.push(new g6(u.Ya++,a)),u.I==3&&io(u)},Et.prototype.N=function(){this.g.l=null,delete this.j,ml(this.g),delete this.g,Et.Z.N.call(this)};function M1(a){rl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}m(M1,rl);function B1(){sl.call(this),this.status=1}m(B1,sl);function jr(a){this.g=a}m(jr,L1),jr.prototype.ra=function(){at(this.g,"a")},jr.prototype.qa=function(a){at(this.g,new M1(a))},jr.prototype.pa=function(a){at(this.g,new B1)},jr.prototype.oa=function(){at(this.g,"b")},ao.prototype.createWebChannel=ao.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,Y2=function(){return new ao},K2=function(){return Ji()},W2=cr,zl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Zi.NO_ERROR=0,Zi.TIMEOUT=8,Zi.HTTP_ERROR=6,Co=Zi,e1.COMPLETE="complete",G2=e1,Yu.EventType=As,As.OPEN="a",As.CLOSE="b",As.ERROR="c",As.MESSAGE="d",Je.prototype.listen=Je.prototype.J,qs=Yu,Ce.prototype.listenOnce=Ce.prototype.K,Ce.prototype.getLastError=Ce.prototype.Ha,Ce.prototype.getLastErrorCode=Ce.prototype.ya,Ce.prototype.getStatus=Ce.prototype.ca,Ce.prototype.getResponseJson=Ce.prototype.La,Ce.prototype.getResponseText=Ce.prototype.la,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Fa,z2=Ce}).apply(typeof uo<"u"?uo:typeof self<"u"?self:typeof window<"u"?window:{});/*!
 * re2js
 * RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
 *
 * @version v0.4.3
 * @author Alexey Vasiliev
 * @homepage https://github.com/le0pard/re2js#readme
 * @repository github:le0pard/re2js
 * @license MIT
 */const Ie=class Ie{};w(Ie,"FOLD_CASE",1),w(Ie,"LITERAL",2),w(Ie,"CLASS_NL",4),w(Ie,"DOT_NL",8),w(Ie,"ONE_LINE",16),w(Ie,"NON_GREEDY",32),w(Ie,"PERL_X",64),w(Ie,"UNICODE_GROUPS",128),w(Ie,"WAS_DOLLAR",256),w(Ie,"MATCH_NL",Ie.CLASS_NL|Ie.DOT_NL),w(Ie,"PERL",Ie.CLASS_NL|Ie.ONE_LINE|Ie.PERL_X|Ie.UNICODE_GROUPS),w(Ie,"POSIX",0),w(Ie,"UNANCHORED",0),w(Ie,"ANCHOR_START",1),w(Ie,"ANCHOR_BOTH",2);let z=Ie;class S{static toUpperCase(e){const t=String.fromCodePoint(e).toUpperCase();if(t.length>1)return e;const r=String.fromCodePoint(t.codePointAt(0)).toLowerCase();return r.length>1||r.codePointAt(0)!==e?e:t.codePointAt(0)}static toLowerCase(e){const t=String.fromCodePoint(e).toLowerCase();if(t.length>1)return e;const r=String.fromCodePoint(t.codePointAt(0)).toUpperCase();return r.length>1||r.codePointAt(0)!==e?e:t.codePointAt(0)}}w(S,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]]));const f=class f{};w(f,"CASE_ORBIT",new Map([[75,107],[107,8490],[8490,75],[83,115],[115,383],[383,83],[181,924],[924,956],[956,181],[197,229],[229,8491],[8491,197],[452,453],[453,454],[454,452],[455,456],[456,457],[457,455],[458,459],[459,460],[460,458],[497,498],[498,499],[499,497],[837,921],[921,953],[953,8126],[8126,837],[914,946],[946,976],[976,914],[917,949],[949,1013],[1013,917],[920,952],[952,977],[977,1012],[1012,920],[922,954],[954,1008],[1008,922],[928,960],[960,982],[982,928],[929,961],[961,1009],[1009,929],[931,962],[962,963],[963,931],[934,966],[966,981],[981,934],[937,969],[969,8486],[8486,937],[1042,1074],[1074,7296],[7296,1042],[1044,1076],[1076,7297],[7297,1044],[1054,1086],[1086,7298],[7298,1054],[1057,1089],[1089,7299],[7299,1057],[1058,1090],[1090,7300],[7300,7301],[7301,1058],[1066,1098],[1098,7302],[7302,1066],[1122,1123],[1123,7303],[7303,1122],[7304,42570],[42570,42571],[42571,7304],[7776,7777],[7777,7835],[7835,7776],[223,7838],[7838,223],[8064,8072],[8072,8064],[8065,8073],[8073,8065],[8066,8074],[8074,8066],[8067,8075],[8075,8067],[8068,8076],[8076,8068],[8069,8077],[8077,8069],[8070,8078],[8078,8070],[8071,8079],[8079,8071],[8080,8088],[8088,8080],[8081,8089],[8089,8081],[8082,8090],[8090,8082],[8083,8091],[8091,8083],[8084,8092],[8092,8084],[8085,8093],[8093,8085],[8086,8094],[8094,8086],[8087,8095],[8095,8087],[8096,8104],[8104,8096],[8097,8105],[8105,8097],[8098,8106],[8106,8098],[8099,8107],[8107,8099],[8100,8108],[8108,8100],[8101,8109],[8109,8101],[8102,8110],[8110,8102],[8103,8111],[8111,8103],[8115,8124],[8124,8115],[8131,8140],[8140,8131],[912,8147],[8147,912],[944,8163],[8163,944],[8179,8188],[8188,8179],[64261,64262],[64262,64261],[66560,66600],[66600,66560],[66561,66601],[66601,66561],[66562,66602],[66602,66562],[66563,66603],[66603,66563],[66564,66604],[66604,66564],[66565,66605],[66605,66565],[66566,66606],[66606,66566],[66567,66607],[66607,66567],[66568,66608],[66608,66568],[66569,66609],[66609,66569],[66570,66610],[66610,66570],[66571,66611],[66611,66571],[66572,66612],[66612,66572],[66573,66613],[66613,66573],[66574,66614],[66614,66574],[66575,66615],[66615,66575],[66576,66616],[66616,66576],[66577,66617],[66617,66577],[66578,66618],[66618,66578],[66579,66619],[66619,66579],[66580,66620],[66620,66580],[66581,66621],[66621,66581],[66582,66622],[66622,66582],[66583,66623],[66623,66583],[66584,66624],[66624,66584],[66585,66625],[66625,66585],[66586,66626],[66626,66586],[66587,66627],[66627,66587],[66588,66628],[66628,66588],[66589,66629],[66629,66589],[66590,66630],[66630,66590],[66591,66631],[66631,66591],[66592,66632],[66632,66592],[66593,66633],[66633,66593],[66594,66634],[66634,66594],[66595,66635],[66635,66595],[66596,66636],[66636,66596],[66597,66637],[66637,66597],[66598,66638],[66638,66598],[66599,66639],[66639,66599],[66736,66776],[66776,66736],[66737,66777],[66777,66737],[66738,66778],[66778,66738],[66739,66779],[66779,66739],[66740,66780],[66780,66740],[66741,66781],[66781,66741],[66742,66782],[66782,66742],[66743,66783],[66783,66743],[66744,66784],[66784,66744],[66745,66785],[66785,66745],[66746,66786],[66786,66746],[66747,66787],[66787,66747],[66748,66788],[66788,66748],[66749,66789],[66789,66749],[66750,66790],[66790,66750],[66751,66791],[66791,66751],[66752,66792],[66792,66752],[66753,66793],[66793,66753],[66754,66794],[66794,66754],[66755,66795],[66795,66755],[66756,66796],[66796,66756],[66757,66797],[66797,66757],[66758,66798],[66798,66758],[66759,66799],[66799,66759],[66760,66800],[66800,66760],[66761,66801],[66801,66761],[66762,66802],[66802,66762],[66763,66803],[66803,66763],[66764,66804],[66804,66764],[66765,66805],[66805,66765],[66766,66806],[66806,66766],[66767,66807],[66807,66767],[66768,66808],[66808,66768],[66769,66809],[66809,66769],[66770,66810],[66810,66770],[66771,66811],[66811,66771],[66928,66967],[66967,66928],[66929,66968],[66968,66929],[66930,66969],[66969,66930],[66931,66970],[66970,66931],[66932,66971],[66971,66932],[66933,66972],[66972,66933],[66934,66973],[66973,66934],[66935,66974],[66974,66935],[66936,66975],[66975,66936],[66937,66976],[66976,66937],[66938,66977],[66977,66938],[66940,66979],[66979,66940],[66941,66980],[66980,66941],[66942,66981],[66981,66942],[66943,66982],[66982,66943],[66944,66983],[66983,66944],[66945,66984],[66984,66945],[66946,66985],[66985,66946],[66947,66986],[66986,66947],[66948,66987],[66987,66948],[66949,66988],[66988,66949],[66950,66989],[66989,66950],[66951,66990],[66990,66951],[66952,66991],[66991,66952],[66953,66992],[66992,66953],[66954,66993],[66993,66954],[66956,66995],[66995,66956],[66957,66996],[66996,66957],[66958,66997],[66997,66958],[66959,66998],[66998,66959],[66960,66999],[66999,66960],[66961,67e3],[67e3,66961],[66962,67001],[67001,66962],[66964,67003],[67003,66964],[66965,67004],[67004,66965],[68736,68800],[68800,68736],[68737,68801],[68801,68737],[68738,68802],[68802,68738],[68739,68803],[68803,68739],[68740,68804],[68804,68740],[68741,68805],[68805,68741],[68742,68806],[68806,68742],[68743,68807],[68807,68743],[68744,68808],[68808,68744],[68745,68809],[68809,68745],[68746,68810],[68810,68746],[68747,68811],[68811,68747],[68748,68812],[68812,68748],[68749,68813],[68813,68749],[68750,68814],[68814,68750],[68751,68815],[68815,68751],[68752,68816],[68816,68752],[68753,68817],[68817,68753],[68754,68818],[68818,68754],[68755,68819],[68819,68755],[68756,68820],[68820,68756],[68757,68821],[68821,68757],[68758,68822],[68822,68758],[68759,68823],[68823,68759],[68760,68824],[68824,68760],[68761,68825],[68825,68761],[68762,68826],[68826,68762],[68763,68827],[68827,68763],[68764,68828],[68828,68764],[68765,68829],[68829,68765],[68766,68830],[68830,68766],[68767,68831],[68831,68767],[68768,68832],[68832,68768],[68769,68833],[68833,68769],[68770,68834],[68834,68770],[68771,68835],[68835,68771],[68772,68836],[68836,68772],[68773,68837],[68837,68773],[68774,68838],[68838,68774],[68775,68839],[68839,68775],[68776,68840],[68840,68776],[68777,68841],[68841,68777],[68778,68842],[68842,68778],[68779,68843],[68843,68779],[68780,68844],[68844,68780],[68781,68845],[68845,68781],[68782,68846],[68846,68782],[68783,68847],[68847,68783],[68784,68848],[68848,68784],[68785,68849],[68849,68785],[68786,68850],[68850,68786],[71840,71872],[71872,71840],[71841,71873],[71873,71841],[71842,71874],[71874,71842],[71843,71875],[71875,71843],[71844,71876],[71876,71844],[71845,71877],[71877,71845],[71846,71878],[71878,71846],[71847,71879],[71879,71847],[71848,71880],[71880,71848],[71849,71881],[71881,71849],[71850,71882],[71882,71850],[71851,71883],[71883,71851],[71852,71884],[71884,71852],[71853,71885],[71885,71853],[71854,71886],[71886,71854],[71855,71887],[71887,71855],[71856,71888],[71888,71856],[71857,71889],[71889,71857],[71858,71890],[71890,71858],[71859,71891],[71891,71859],[71860,71892],[71892,71860],[71861,71893],[71893,71861],[71862,71894],[71894,71862],[71863,71895],[71895,71863],[71864,71896],[71896,71864],[71865,71897],[71897,71865],[71866,71898],[71898,71866],[71867,71899],[71899,71867],[71868,71900],[71900,71868],[71869,71901],[71901,71869],[71870,71902],[71902,71870],[71871,71903],[71903,71871],[93760,93792],[93792,93760],[93761,93793],[93793,93761],[93762,93794],[93794,93762],[93763,93795],[93795,93763],[93764,93796],[93796,93764],[93765,93797],[93797,93765],[93766,93798],[93798,93766],[93767,93799],[93799,93767],[93768,93800],[93800,93768],[93769,93801],[93801,93769],[93770,93802],[93802,93770],[93771,93803],[93803,93771],[93772,93804],[93804,93772],[93773,93805],[93805,93773],[93774,93806],[93806,93774],[93775,93807],[93807,93775],[93776,93808],[93808,93776],[93777,93809],[93809,93777],[93778,93810],[93810,93778],[93779,93811],[93811,93779],[93780,93812],[93812,93780],[93781,93813],[93813,93781],[93782,93814],[93814,93782],[93783,93815],[93815,93783],[93784,93816],[93816,93784],[93785,93817],[93817,93785],[93786,93818],[93818,93786],[93787,93819],[93819,93787],[93788,93820],[93820,93788],[93789,93821],[93821,93789],[93790,93822],[93822,93790],[93791,93823],[93823,93791],[125184,125218],[125218,125184],[125185,125219],[125219,125185],[125186,125220],[125220,125186],[125187,125221],[125221,125187],[125188,125222],[125222,125188],[125189,125223],[125223,125189],[125190,125224],[125224,125190],[125191,125225],[125225,125191],[125192,125226],[125226,125192],[125193,125227],[125227,125193],[125194,125228],[125228,125194],[125195,125229],[125229,125195],[125196,125230],[125230,125196],[125197,125231],[125231,125197],[125198,125232],[125232,125198],[125199,125233],[125233,125199],[125200,125234],[125234,125200],[125201,125235],[125235,125201],[125202,125236],[125236,125202],[125203,125237],[125237,125203],[125204,125238],[125238,125204],[125205,125239],[125239,125205],[125206,125240],[125240,125206],[125207,125241],[125241,125207],[125208,125242],[125242,125208],[125209,125243],[125243,125209],[125210,125244],[125244,125210],[125211,125245],[125245,125211],[125212,125246],[125246,125212],[125213,125247],[125247,125213],[125214,125248],[125248,125214],[125215,125249],[125249,125215],[125216,125250],[125250,125216],[125217,125251],[125251,125217]])),w(f,"C",[[0,31,1],[127,159,1],[173,888,715],[889,896,7],[897,899,1],[907,909,2],[930,1328,398],[1367,1368,1],[1419,1420,1],[1424,1480,56],[1481,1487,1],[1515,1518,1],[1525,1541,1],[1564,1757,193],[1806,1807,1],[1867,1868,1],[1970,1983,1],[2043,2044,1],[2094,2095,1],[2111,2140,29],[2141,2143,2],[2155,2159,1],[2191,2199,1],[2274,2436,162],[2445,2446,1],[2449,2450,1],[2473,2481,8],[2483,2485,1],[2490,2491,1],[2501,2502,1],[2505,2506,1],[2511,2518,1],[2520,2523,1],[2526,2532,6],[2533,2559,26],[2560,2564,4],[2571,2574,1],[2577,2578,1],[2601,2609,8],[2612,2618,3],[2619,2621,2],[2627,2630,1],[2633,2634,1],[2638,2640,1],[2642,2648,1],[2653,2655,2],[2656,2661,1],[2679,2688,1],[2692,2702,10],[2706,2729,23],[2737,2740,3],[2746,2747,1],[2758,2766,4],[2767,2769,2],[2770,2783,1],[2788,2789,1],[2802,2808,1],[2816,2820,4],[2829,2830,1],[2833,2834,1],[2857,2865,8],[2868,2874,6],[2875,2885,10],[2886,2889,3],[2890,2894,4],[2895,2900,1],[2904,2907,1],[2910,2916,6],[2917,2936,19],[2937,2945,1],[2948,2955,7],[2956,2957,1],[2961,2966,5],[2967,2968,1],[2971,2973,2],[2976,2978,1],[2981,2983,1],[2987,2989,1],[3002,3005,1],[3011,3013,1],[3017,3022,5],[3023,3025,2],[3026,3030,1],[3032,3045,1],[3067,3071,1],[3085,3089,4],[3113,3130,17],[3131,3141,10],[3145,3150,5],[3151,3156,1],[3159,3163,4],[3164,3166,2],[3167,3172,5],[3173,3184,11],[3185,3190,1],[3213,3217,4],[3241,3252,11],[3258,3259,1],[3269,3273,4],[3278,3284,1],[3287,3292,1],[3295,3300,5],[3301,3312,11],[3316,3327,1],[3341,3345,4],[3397,3401,4],[3408,3411,1],[3428,3429,1],[3456,3460,4],[3479,3481,1],[3506,3516,10],[3518,3519,1],[3527,3529,1],[3531,3534,1],[3541,3543,2],[3552,3557,1],[3568,3569,1],[3573,3584,1],[3643,3646,1],[3676,3712,1],[3715,3717,2],[3723,3748,25],[3750,3774,24],[3775,3781,6],[3783,3791,8],[3802,3803,1],[3808,3839,1],[3912,3949,37],[3950,3952,1],[3992,4029,37],[4045,4059,14],[4060,4095,1],[4294,4296,2],[4297,4300,1],[4302,4303,1],[4681,4686,5],[4687,4695,8],[4697,4702,5],[4703,4745,42],[4750,4751,1],[4785,4790,5],[4791,4799,8],[4801,4806,5],[4807,4823,16],[4881,4886,5],[4887,4955,68],[4956,4989,33],[4990,4991,1],[5018,5023,1],[5110,5111,1],[5118,5119,1],[5789,5791,1],[5881,5887,1],[5910,5918,1],[5943,5951,1],[5972,5983,1],[5997,6001,4],[6004,6015,1],[6110,6111,1],[6122,6127,1],[6138,6143,1],[6158,6170,12],[6171,6175,1],[6265,6271,1],[6315,6319,1],[6390,6399,1],[6431,6444,13],[6445,6447,1],[6460,6463,1],[6465,6467,1],[6510,6511,1],[6517,6527,1],[6572,6575,1],[6602,6607,1],[6619,6621,1],[6684,6685,1],[6751,6781,30],[6782,6794,12],[6795,6799,1],[6810,6815,1],[6830,6831,1],[6863,6911,1],[6989,6991,1],[7039,7156,117],[7157,7163,1],[7224,7226,1],[7242,7244,1],[7305,7311,1],[7355,7356,1],[7368,7375,1],[7419,7423,1],[7958,7959,1],[7966,7967,1],[8006,8007,1],[8014,8015,1],[8024,8030,2],[8062,8063,1],[8117,8133,16],[8148,8149,1],[8156,8176,20],[8177,8181,4],[8191,8203,12],[8204,8207,1],[8234,8238,1],[8288,8303,1],[8306,8307,1],[8335,8349,14],[8350,8351,1],[8385,8399,1],[8433,8447,1],[8588,8591,1],[9255,9279,1],[9291,9311,1],[11124,11125,1],[11158,11508,350],[11509,11512,1],[11558,11560,2],[11561,11564,1],[11566,11567,1],[11624,11630,1],[11633,11646,1],[11671,11679,1],[11687,11743,8],[11870,11903,1],[11930,12020,90],[12021,12031,1],[12246,12271,1],[12352,12439,87],[12440,12544,104],[12545,12548,1],[12592,12687,95],[12772,12782,1],[12831,42125,29294],[42126,42127,1],[42183,42191,1],[42540,42559,1],[42744,42751,1],[42955,42959,1],[42962,42964,2],[42970,42993,1],[43053,43055,1],[43066,43071,1],[43128,43135,1],[43206,43213,1],[43226,43231,1],[43348,43358,1],[43389,43391,1],[43470,43482,12],[43483,43485,1],[43519,43575,56],[43576,43583,1],[43598,43599,1],[43610,43611,1],[43715,43738,1],[43767,43776,1],[43783,43784,1],[43791,43792,1],[43799,43807,1],[43815,43823,8],[43884,43887,1],[44014,44015,1],[44026,44031,1],[55204,55215,1],[55239,55242,1],[55292,63743,1],[64110,64111,1],[64218,64255,1],[64263,64274,1],[64280,64284,1],[64311,64317,6],[64319,64325,3],[64451,64466,1],[64912,64913,1],[64968,64974,1],[64976,65007,1],[65050,65055,1],[65107,65127,20],[65132,65135,1],[65141,65277,136],[65278,65280,1],[65471,65473,1],[65480,65481,1],[65488,65489,1],[65496,65497,1],[65501,65503,1],[65511,65519,8],[65520,65531,1],[65534,65535,1],[65548,65575,27],[65595,65598,3],[65614,65615,1],[65630,65663,1],[65787,65791,1],[65795,65798,1],[65844,65846,1],[65935,65949,14],[65950,65951,1],[65953,65999,1],[66046,66175,1],[66205,66207,1],[66257,66271,1],[66300,66303,1],[66340,66348,1],[66379,66383,1],[66427,66431,1],[66462,66500,38],[66501,66503,1],[66518,66559,1],[66718,66719,1],[66730,66735,1],[66772,66775,1],[66812,66815,1],[66856,66863,1],[66916,66926,1],[66939,66955,16],[66963,66966,3],[66978,66994,16],[67002,67005,3],[67006,67071,1],[67383,67391,1],[67414,67423,1],[67432,67455,1],[67462,67505,43],[67515,67583,1],[67590,67591,1],[67593,67638,45],[67641,67643,1],[67645,67646,1],[67670,67743,73],[67744,67750,1],[67760,67807,1],[67827,67830,3],[67831,67834,1],[67868,67870,1],[67898,67902,1],[67904,67967,1],[68024,68027,1],[68048,68049,1],[68100,68103,3],[68104,68107,1],[68116,68120,4],[68150,68151,1],[68155,68158,1],[68169,68175,1],[68185,68191,1],[68256,68287,1],[68327,68330,1],[68343,68351,1],[68406,68408,1],[68438,68439,1],[68467,68471,1],[68498,68504,1],[68509,68520,1],[68528,68607,1],[68681,68735,1],[68787,68799,1],[68851,68857,1],[68904,68911,1],[68922,69215,1],[69247,69290,43],[69294,69295,1],[69298,69372,1],[69416,69423,1],[69466,69487,1],[69514,69551,1],[69580,69599,1],[69623,69631,1],[69710,69713,1],[69750,69758,1],[69821,69827,6],[69828,69839,1],[69865,69871,1],[69882,69887,1],[69941,69960,19],[69961,69967,1],[70007,70015,1],[70112,70133,21],[70134,70143,1],[70162,70210,48],[70211,70271,1],[70279,70281,2],[70286,70302,16],[70314,70319,1],[70379,70383,1],[70394,70399,1],[70404,70413,9],[70414,70417,3],[70418,70441,23],[70449,70452,3],[70458,70469,11],[70470,70473,3],[70474,70478,4],[70479,70481,2],[70482,70486,1],[70488,70492,1],[70500,70501,1],[70509,70511,1],[70517,70655,1],[70748,70754,6],[70755,70783,1],[70856,70863,1],[70874,71039,1],[71094,71095,1],[71134,71167,1],[71237,71247,1],[71258,71263,1],[71277,71295,1],[71354,71359,1],[71370,71423,1],[71451,71452,1],[71468,71471,1],[71495,71679,1],[71740,71839,1],[71923,71934,1],[71943,71944,1],[71946,71947,1],[71956,71959,3],[71990,71993,3],[71994,72007,13],[72008,72015,1],[72026,72095,1],[72104,72105,1],[72152,72153,1],[72165,72191,1],[72264,72271,1],[72355,72367,1],[72441,72447,1],[72458,72703,1],[72713,72759,46],[72774,72783,1],[72813,72815,1],[72848,72849,1],[72872,72887,15],[72888,72959,1],[72967,72970,3],[73015,73017,1],[73019,73022,3],[73032,73039,1],[73050,73055,1],[73062,73065,3],[73103,73106,3],[73113,73119,1],[73130,73439,1],[73465,73471,1],[73489,73531,42],[73532,73533,1],[73562,73647,1],[73649,73663,1],[73714,73726,1],[74650,74751,1],[74863,74869,6],[74870,74879,1],[75076,77711,1],[77811,77823,1],[78896,78911,1],[78934,82943,1],[83527,92159,1],[92729,92735,1],[92767,92778,11],[92779,92781,1],[92863,92874,11],[92875,92879,1],[92910,92911,1],[92918,92927,1],[92998,93007,1],[93018,93026,8],[93048,93052,1],[93072,93759,1],[93851,93951,1],[94027,94030,1],[94088,94094,1],[94112,94175,1],[94181,94191,1],[94194,94207,1],[100344,100351,1],[101590,101631,1],[101641,110575,1],[110580,110588,8],[110591,110883,292],[110884,110897,1],[110899,110927,1],[110931,110932,1],[110934,110947,1],[110952,110959,1],[111356,113663,1],[113771,113775,1],[113789,113791,1],[113801,113807,1],[113818,113819,1],[113824,118527,1],[118574,118575,1],[118599,118607,1],[118724,118783,1],[119030,119039,1],[119079,119080,1],[119155,119162,1],[119275,119295,1],[119366,119487,1],[119508,119519,1],[119540,119551,1],[119639,119647,1],[119673,119807,1],[119893,119965,72],[119968,119969,1],[119971,119972,1],[119975,119976,1],[119981,119994,13],[119996,120004,8],[120070,120075,5],[120076,120085,9],[120093,120122,29],[120127,120133,6],[120135,120137,1],[120145,120486,341],[120487,120780,293],[120781,121484,703],[121485,121498,1],[121504,121520,16],[121521,122623,1],[122655,122660,1],[122667,122879,1],[122887,122905,18],[122906,122914,8],[122917,122923,6],[122924,122927,1],[122990,123022,1],[123024,123135,1],[123181,123183,1],[123198,123199,1],[123210,123213,1],[123216,123535,1],[123567,123583,1],[123642,123646,1],[123648,124111,1],[124154,124895,1],[124903,124908,5],[124911,124927,16],[125125,125126,1],[125143,125183,1],[125260,125263,1],[125274,125277,1],[125280,126064,1],[126133,126208,1],[126270,126463,1],[126468,126496,28],[126499,126501,2],[126502,126504,2],[126515,126520,5],[126522,126524,2],[126525,126529,1],[126531,126534,1],[126536,126540,2],[126544,126547,3],[126549,126550,1],[126552,126560,2],[126563,126565,2],[126566,126571,5],[126579,126589,5],[126591,126602,11],[126620,126624,1],[126628,126634,6],[126652,126703,1],[126706,126975,1],[127020,127023,1],[127124,127135,1],[127151,127152,1],[127168,127184,16],[127222,127231,1],[127406,127461,1],[127491,127503,1],[127548,127551,1],[127561,127567,1],[127570,127583,1],[127590,127743,1],[128728,128731,1],[128749,128751,1],[128765,128767,1],[128887,128890,1],[128986,128991,1],[129004,129007,1],[129009,129023,1],[129036,129039,1],[129096,129103,1],[129114,129119,1],[129160,129167,1],[129198,129199,1],[129202,129279,1],[129620,129631,1],[129646,129647,1],[129661,129663,1],[129673,129679,1],[129726,129734,8],[129735,129741,1],[129756,129759,1],[129769,129775,1],[129785,129791,1],[129939,129995,56],[129996,130031,1],[130042,131071,1],[173792,173823,1],[177978,177983,1],[178206,178207,1],[183970,183983,1],[191457,191471,1],[192094,194559,1],[195102,196607,1],[201547,201551,1],[205744,917759,1],[918e3,1114111,1]]),w(f,"Cc",[[0,31,1],[127,159,1]]),w(f,"Cf",[[173,1536,1363],[1537,1541,1],[1564,1757,193],[1807,2192,385],[2193,2274,81],[6158,8203,2045],[8204,8207,1],[8234,8238,1],[8288,8292,1],[8294,8303,1],[65279,65529,250],[65530,65531,1],[69821,69837,16],[78896,78911,1],[113824,113827,1],[119155,119162,1],[917505,917536,31],[917537,917631,1]]),w(f,"Co",[[57344,63743,1],[983040,1048573,1],[1048576,1114109,1]]),w(f,"Cs",[[55296,57343,1]]),w(f,"L",[[65,90,1],[97,122,1],[170,181,11],[186,192,6],[193,214,1],[216,246,1],[248,705,1],[710,721,1],[736,740,1],[748,750,2],[880,884,1],[886,887,1],[890,893,1],[895,902,7],[904,906,1],[908,910,2],[911,929,1],[931,1013,1],[1015,1153,1],[1162,1327,1],[1329,1366,1],[1369,1376,7],[1377,1416,1],[1488,1514,1],[1519,1522,1],[1568,1610,1],[1646,1647,1],[1649,1747,1],[1749,1765,16],[1766,1774,8],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2036,2037,1],[2042,2048,6],[2049,2069,1],[2074,2084,10],[2088,2112,24],[2113,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2249,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2417,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3654,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3782,3804,22],[3805,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4256,18],[4257,4293,1],[4295,4301,6],[4304,4346,1],[4348,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5024,5109,1],[5112,5117,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6103,6108,5],[6176,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6823,6917,94],[6918,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7293,1],[7296,7304,1],[7312,7354,1],[7357,7359,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,7424,6],[7425,7615,1],[7680,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8124,1],[8126,8130,4],[8131,8132,1],[8134,8140,1],[8144,8147,1],[8150,8155,1],[8160,8172,1],[8178,8180,1],[8182,8188,1],[8305,8319,14],[8336,8348,1],[8450,8455,5],[8458,8467,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8495,8505,1],[8508,8511,1],[8517,8521,1],[8526,8579,53],[8580,11264,2684],[11265,11492,1],[11499,11502,1],[11506,11507,1],[11520,11557,1],[11559,11565,6],[11568,11623,1],[11631,11648,17],[11649,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[11823,12293,470],[12294,12337,43],[12338,12341,1],[12347,12348,1],[12353,12438,1],[12445,12447,1],[12449,12538,1],[12540,12543,1],[12549,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,42124,1],[42192,42237,1],[42240,42508,1],[42512,42527,1],[42538,42539,1],[42560,42606,1],[42623,42653,1],[42656,42725,1],[42775,42783,1],[42786,42888,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43471,43488,17],[43489,43492,1],[43494,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43741,1],[43744,43754,1],[43762,43764,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43824,43866,1],[43868,43881,1],[43888,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64256,64262,1],[64275,64279,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65313,65338,1],[65345,65370,1],[65382,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66560,66717,1],[66736,66771,1],[66776,66811,1],[66816,66855,1],[66864,66915,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68736,68786,1],[68800,68850,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71840,71903,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[92992,92995,1],[93027,93047,1],[93053,93071,1],[93760,93823,1],[93952,94026,1],[94032,94099,67],[94100,94111,1],[94176,94177,1],[94179,94208,29],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120512,1],[120514,120538,1],[120540,120570,1],[120572,120596,1],[120598,120628,1],[120630,120654,1],[120656,120686,1],[120688,120712,1],[120714,120744,1],[120746,120770,1],[120772,120779,1],[122624,122654,1],[122661,122666,1],[122928,122989,1],[123136,123180,1],[123191,123197,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124139,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[125184,125251,1],[125259,126464,1205],[126465,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),w(f,"foldL",[[837,837,1]]),w(f,"Ll",[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,311,2],[312,328,2],[329,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[397,402,5],[405,409,4],[410,411,1],[414,417,3],[419,421,2],[424,426,2],[427,429,2],[432,436,4],[438,441,3],[442,445,3],[446,447,1],[454,460,3],[462,476,2],[477,495,2],[496,499,3],[501,505,4],[507,563,2],[564,569,1],[572,575,3],[576,578,2],[583,591,2],[592,659,1],[661,687,1],[881,883,2],[887,891,4],[892,893,1],[912,940,28],[941,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1020,1072,52],[1073,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1376,1416,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7424,7467,1],[7531,7543,1],[7545,7578,1],[7681,7829,2],[7830,7837,1],[7839,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8016,8023,1],[8032,8039,1],[8048,8061,1],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8112,8116,1],[8118,8119,1],[8126,8130,4],[8131,8132,1],[8134,8135,1],[8144,8147,1],[8150,8151,1],[8160,8167,1],[8178,8180,1],[8182,8183,1],[8458,8462,4],[8463,8467,4],[8495,8505,5],[8508,8509,1],[8518,8521,1],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11377,11379,2],[11380,11382,2],[11383,11387,1],[11393,11491,2],[11492,11500,8],[11502,11507,5],[11520,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42800,42801,1],[42803,42865,2],[42866,42872,1],[42874,42876,2],[42879,42887,2],[42892,42894,2],[42897,42899,2],[42900,42901,1],[42903,42921,2],[42927,42933,6],[42935,42947,2],[42952,42954,2],[42961,42969,2],[42998,43002,4],[43824,43866,1],[43872,43880,1],[43888,43967,1],[64256,64262,1],[64275,64279,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[119834,119859,1],[119886,119892,1],[119894,119911,1],[119938,119963,1],[119990,119993,1],[119995,119997,2],[119998,120003,1],[120005,120015,1],[120042,120067,1],[120094,120119,1],[120146,120171,1],[120198,120223,1],[120250,120275,1],[120302,120327,1],[120354,120379,1],[120406,120431,1],[120458,120485,1],[120514,120538,1],[120540,120545,1],[120572,120596,1],[120598,120603,1],[120630,120654,1],[120656,120661,1],[120688,120712,1],[120714,120719,1],[120746,120770,1],[120772,120777,1],[120779,122624,1845],[122625,122633,1],[122635,122654,1],[122661,122666,1],[125218,125251,1]]),w(f,"foldLl",[[65,90,1],[192,214,1],[216,222,1],[256,302,2],[306,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,453,1],[455,456,1],[458,459,1],[461,475,2],[478,494,2],[497,498,1],[500,502,2],[503,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[837,880,43],[882,886,4],[895,902,7],[904,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,984,9],[986,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8072,8079,1],[8088,8095,1],[8104,8111,1],[8120,8124,1],[8136,8140,1],[8152,8155,1],[8168,8172,1],[8184,8188,1],[8486,8490,4],[8491,8498,7],[8579,11264,2685],[11265,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[125184,125217,1]]),w(f,"Lm",[[688,705,1],[710,721,1],[736,740,1],[748,750,2],[884,890,6],[1369,1600,231],[1765,1766,1],[2036,2037,1],[2042,2074,32],[2084,2088,4],[2249,2417,168],[3654,3782,128],[4348,6103,1755],[6211,6823,612],[7288,7293,1],[7468,7530,1],[7544,7579,35],[7580,7615,1],[8305,8319,14],[8336,8348,1],[11388,11389,1],[11631,11823,192],[12293,12337,44],[12338,12341,1],[12347,12445,98],[12446,12540,94],[12541,12542,1],[40981,42232,1251],[42233,42237,1],[42508,42623,115],[42652,42653,1],[42775,42783,1],[42864,42888,24],[42994,42996,1],[43e3,43001,1],[43471,43494,23],[43632,43741,109],[43763,43764,1],[43868,43871,1],[43881,65392,21511],[65438,65439,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[92992,92995,1],[94099,94111,1],[94176,94177,1],[94179,110576,16397],[110577,110579,1],[110581,110587,1],[110589,110590,1],[122928,122989,1],[123191,123197,1],[124139,125259,1120]]),w(f,"Lo",[[170,186,16],[443,448,5],[449,451,1],[660,1488,828],[1489,1514,1],[1519,1522,1],[1568,1599,1],[1601,1610,1],[1646,1647,1],[1649,1747,1],[1749,1774,25],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2048,2069,1],[2112,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2248,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2418,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3653,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3804,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4352,114],[4353,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6108,6176,68],[6177,6210,1],[6212,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6917,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7287,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,8501,1083],[8502,8504,1],[11568,11623,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[12294,12348,54],[12353,12438,1],[12447,12449,2],[12450,12538,1],[12543,12549,6],[12550,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,40980,1],[40982,42124,1],[42192,42231,1],[42240,42507,1],[42512,42527,1],[42538,42539,1],[42606,42656,50],[42657,42725,1],[42895,42999,104],[43003,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43488,43492,1],[43495,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43631,1],[43633,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43740,1],[43744,43754,1],[43762,43777,15],[43778,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43968,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65382,65391,1],[65393,65437,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66640,66717,1],[66816,66855,1],[66864,66915,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[93027,93047,1],[93053,93071,1],[93952,94026,1],[94032,94208,176],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[122634,123136,502],[123137,123180,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124138,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),w(f,"Lt",[[453,459,3],[498,8072,7574],[8073,8079,1],[8088,8095,1],[8104,8111,1],[8124,8140,16],[8188,8188,1]]),w(f,"foldLt",[[452,454,2],[455,457,2],[458,460,2],[497,499,2],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8115,8131,16],[8179,8179,1]]),w(f,"Lu",[[65,90,1],[192,214,1],[216,222,1],[256,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,461,3],[463,475,2],[478,494,2],[497,500,3],[502,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[880,882,2],[886,895,9],[902,904,2],[905,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,978,3],[979,980,1],[984,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8120,8123,1],[8136,8139,1],[8152,8155,1],[8168,8172,1],[8184,8187,1],[8450,8455,5],[8459,8461,1],[8464,8466,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8496,8499,1],[8510,8511,1],[8517,8579,62],[11264,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[119808,119833,1],[119860,119885,1],[119912,119937,1],[119964,119966,2],[119967,119973,3],[119974,119977,3],[119978,119980,1],[119982,119989,1],[120016,120041,1],[120068,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120120,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120172,120197,1],[120224,120249,1],[120276,120301,1],[120328,120353,1],[120380,120405,1],[120432,120457,1],[120488,120512,1],[120546,120570,1],[120604,120628,1],[120662,120686,1],[120720,120744,1],[120778,125184,4406],[125185,125217,1]]),w(f,"Upper",f.Lu),w(f,"foldLu",[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,303,2],[307,311,2],[314,328,2],[331,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[402,405,3],[409,410,1],[414,417,3],[419,421,2],[424,429,5],[432,436,4],[438,441,3],[445,447,2],[453,454,1],[456,457,1],[459,460,1],[462,476,2],[477,495,2],[498,499,1],[501,505,4],[507,543,2],[547,563,2],[572,575,3],[576,578,2],[583,591,2],[592,596,1],[598,599,1],[601,603,2],[604,608,4],[609,613,2],[614,616,2],[617,620,1],[623,625,2],[626,629,3],[637,640,3],[642,643,1],[647,652,1],[658,669,11],[670,837,167],[881,883,2],[887,891,4],[892,893,1],[940,943,1],[945,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1072,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1377,1414,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7545,7549,4],[7566,7681,115],[7683,7829,2],[7835,7841,6],[7843,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8017,8023,2],[8032,8039,1],[8048,8061,1],[8112,8113,1],[8126,8144,18],[8145,8160,15],[8161,8165,4],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11379,11382,3],[11393,11491,2],[11500,11502,2],[11507,11520,13],[11521,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42803,42863,2],[42874,42876,2],[42879,42887,2],[42892,42897,5],[42899,42900,1],[42903,42921,2],[42933,42947,2],[42952,42954,2],[42961,42967,6],[42969,42998,29],[43859,43888,29],[43889,43967,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[125218,125251,1]]),w(f,"M",[[768,879,1],[1155,1161,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2307,1],[2362,2364,1],[2366,2383,1],[2385,2391,1],[2402,2403,1],[2433,2435,1],[2492,2494,2],[2495,2500,1],[2503,2504,1],[2507,2509,1],[2519,2530,11],[2531,2558,27],[2561,2563,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2672,31],[2673,2677,4],[2689,2691,1],[2748,2750,2],[2751,2757,1],[2759,2761,1],[2763,2765,1],[2786,2787,1],[2810,2815,1],[2817,2819,1],[2876,2878,2],[2879,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2914,2915,1],[2946,3006,60],[3007,3010,1],[3014,3016,1],[3018,3021,1],[3031,3072,41],[3073,3076,1],[3132,3134,2],[3135,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3203,1],[3260,3262,2],[3263,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3298,3299,1],[3315,3328,13],[3329,3331,1],[3387,3388,1],[3390,3396,1],[3398,3400,1],[3402,3405,1],[3415,3426,11],[3427,3457,30],[3458,3459,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3570,3571,1],[3633,3636,3],[3637,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3902,3903,1],[3953,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4139,101],[4140,4158,1],[4182,4185,1],[4190,4192,1],[4194,4196,1],[4199,4205,1],[4209,4212,1],[4226,4237,1],[4239,4250,11],[4251,4253,1],[4957,4959,1],[5906,5909,1],[5938,5940,1],[5970,5971,1],[6002,6003,1],[6068,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6443,1],[6448,6459,1],[6679,6683,1],[6741,6750,1],[6752,6780,1],[6783,6832,49],[6833,6862,1],[6912,6916,1],[6964,6980,1],[7019,7027,1],[7040,7042,1],[7073,7085,1],[7142,7155,1],[7204,7223,1],[7376,7378,1],[7380,7400,1],[7405,7412,7],[7415,7417,1],[7616,7679,1],[8400,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12335,1],[12441,12442,1],[42607,42610,1],[42612,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43043,24],[43044,43047,1],[43052,43136,84],[43137,43188,51],[43189,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43347,1],[43392,43395,1],[43443,43456,1],[43493,43561,68],[43562,43574,1],[43587,43596,9],[43597,43643,46],[43644,43645,1],[43696,43698,2],[43699,43700,1],[43703,43704,1],[43710,43711,1],[43713,43755,42],[43756,43759,1],[43765,43766,1],[44003,44010,1],[44012,44013,1],[64286,65024,738],[65025,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69632,69634,1],[69688,69702,1],[69744,69747,3],[69748,69759,11],[69760,69762,1],[69808,69818,1],[69826,69888,62],[69889,69890,1],[69927,69940,1],[69957,69958,1],[70003,70016,13],[70017,70018,1],[70067,70080,1],[70089,70092,1],[70094,70095,1],[70188,70199,1],[70206,70209,3],[70367,70378,1],[70400,70403,1],[70459,70460,1],[70462,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70502,3],[70503,70508,1],[70512,70516,1],[70709,70726,1],[70750,70832,82],[70833,70851,1],[71087,71093,1],[71096,71104,1],[71132,71133,1],[71216,71232,1],[71339,71351,1],[71453,71467,1],[71724,71738,1],[71984,71989,1],[71991,71992,1],[71995,71998,1],[72e3,72002,2],[72003,72145,142],[72146,72151,1],[72154,72160,1],[72164,72193,29],[72194,72202,1],[72243,72249,1],[72251,72254,1],[72263,72273,10],[72274,72283,1],[72330,72345,1],[72751,72758,1],[72760,72767,1],[72850,72871,1],[72873,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73098,67],[73099,73102,1],[73104,73105,1],[73107,73111,1],[73459,73462,1],[73472,73473,1],[73475,73524,49],[73525,73530,1],[73534,73538,1],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94033,2],[94034,94087,1],[94095,94098,1],[94180,94192,12],[94193,113821,19628],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119141,119145,1],[119149,119154,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]]),w(f,"foldM",[[921,953,32],[8126,8126,1]]),w(f,"Mc",[[2307,2363,56],[2366,2368,1],[2377,2380,1],[2382,2383,1],[2434,2435,1],[2494,2496,1],[2503,2504,1],[2507,2508,1],[2519,2563,44],[2622,2624,1],[2691,2750,59],[2751,2752,1],[2761,2763,2],[2764,2818,54],[2819,2878,59],[2880,2887,7],[2888,2891,3],[2892,2903,11],[3006,3007,1],[3009,3010,1],[3014,3016,1],[3018,3020,1],[3031,3073,42],[3074,3075,1],[3137,3140,1],[3202,3203,1],[3262,3264,2],[3265,3268,1],[3271,3272,1],[3274,3275,1],[3285,3286,1],[3315,3330,15],[3331,3390,59],[3391,3392,1],[3398,3400,1],[3402,3404,1],[3415,3458,43],[3459,3535,76],[3536,3537,1],[3544,3551,1],[3570,3571,1],[3902,3903,1],[3967,4139,172],[4140,4145,5],[4152,4155,3],[4156,4182,26],[4183,4194,11],[4195,4196,1],[4199,4205,1],[4227,4228,1],[4231,4236,1],[4239,4250,11],[4251,4252,1],[5909,5940,31],[6070,6078,8],[6079,6085,1],[6087,6088,1],[6435,6438,1],[6441,6443,1],[6448,6449,1],[6451,6456,1],[6681,6682,1],[6741,6743,2],[6753,6755,2],[6756,6765,9],[6766,6770,1],[6916,6965,49],[6971,6973,2],[6974,6977,1],[6979,6980,1],[7042,7073,31],[7078,7079,1],[7082,7143,61],[7146,7148,1],[7150,7154,4],[7155,7204,49],[7205,7211,1],[7220,7221,1],[7393,7415,22],[12334,12335,1],[43043,43044,1],[43047,43136,89],[43137,43188,51],[43189,43203,1],[43346,43347,1],[43395,43444,49],[43445,43450,5],[43451,43454,3],[43455,43456,1],[43567,43568,1],[43571,43572,1],[43597,43643,46],[43645,43755,110],[43758,43759,1],[43765,44003,238],[44004,44006,2],[44007,44009,2],[44010,44012,2],[69632,69634,2],[69762,69808,46],[69809,69810,1],[69815,69816,1],[69932,69957,25],[69958,70018,60],[70067,70069,1],[70079,70080,1],[70094,70188,94],[70189,70190,1],[70194,70195,1],[70197,70368,171],[70369,70370,1],[70402,70403,1],[70462,70463,1],[70465,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70709,210],[70710,70711,1],[70720,70721,1],[70725,70832,107],[70833,70834,1],[70841,70843,2],[70844,70846,1],[70849,71087,238],[71088,71089,1],[71096,71099,1],[71102,71216,114],[71217,71218,1],[71227,71228,1],[71230,71340,110],[71342,71343,1],[71350,71456,106],[71457,71462,5],[71724,71726,1],[71736,71984,248],[71985,71989,1],[71991,71992,1],[71997,72e3,3],[72002,72145,143],[72146,72147,1],[72156,72159,1],[72164,72249,85],[72279,72280,1],[72343,72751,408],[72766,72873,107],[72881,72884,3],[73098,73102,1],[73107,73108,1],[73110,73461,351],[73462,73475,13],[73524,73525,1],[73534,73535,1],[73537,94033,20496],[94034,94087,1],[94192,94193,1],[119141,119142,1],[119149,119154,1]]),w(f,"Me",[[1160,1161,1],[6846,8413,1567],[8414,8416,1],[8418,8420,1],[42608,42610,1]]),w(f,"Mn",[[768,879,1],[1155,1159,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2306,1],[2362,2364,2],[2369,2376,1],[2381,2385,4],[2386,2391,1],[2402,2403,1],[2433,2492,59],[2497,2500,1],[2509,2530,21],[2531,2558,27],[2561,2562,1],[2620,2625,5],[2626,2631,5],[2632,2635,3],[2636,2637,1],[2641,2672,31],[2673,2677,4],[2689,2690,1],[2748,2753,5],[2754,2757,1],[2759,2760,1],[2765,2786,21],[2787,2810,23],[2811,2815,1],[2817,2876,59],[2879,2881,2],[2882,2884,1],[2893,2901,8],[2902,2914,12],[2915,2946,31],[3008,3021,13],[3072,3076,4],[3132,3134,2],[3135,3136,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3260,59],[3263,3270,7],[3276,3277,1],[3298,3299,1],[3328,3329,1],[3387,3388,1],[3393,3396,1],[3405,3426,21],[3427,3457,30],[3530,3538,8],[3539,3540,1],[3542,3633,91],[3636,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3953,3966,1],[3968,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4141,103],[4142,4144,1],[4146,4151,1],[4153,4154,1],[4157,4158,1],[4184,4185,1],[4190,4192,1],[4209,4212,1],[4226,4229,3],[4230,4237,7],[4253,4957,704],[4958,4959,1],[5906,5908,1],[5938,5939,1],[5970,5971,1],[6002,6003,1],[6068,6069,1],[6071,6077,1],[6086,6089,3],[6090,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6434,1],[6439,6440,1],[6450,6457,7],[6458,6459,1],[6679,6680,1],[6683,6742,59],[6744,6750,1],[6752,6754,2],[6757,6764,1],[6771,6780,1],[6783,6832,49],[6833,6845,1],[6847,6862,1],[6912,6915,1],[6964,6966,2],[6967,6970,1],[6972,6978,6],[7019,7027,1],[7040,7041,1],[7074,7077,1],[7080,7081,1],[7083,7085,1],[7142,7144,2],[7145,7149,4],[7151,7153,1],[7212,7219,1],[7222,7223,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8400,8412,1],[8417,8421,4],[8422,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12333,1],[12441,12442,1],[42607,42612,5],[42613,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43045,26],[43046,43052,6],[43204,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43345,1],[43392,43394,1],[43443,43446,3],[43447,43449,1],[43452,43453,1],[43493,43561,68],[43562,43566,1],[43569,43570,1],[43573,43574,1],[43587,43596,9],[43644,43696,52],[43698,43700,1],[43703,43704,1],[43710,43711,1],[43713,43756,43],[43757,43766,9],[44005,44008,3],[44013,64286,20273],[65024,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69633,69688,55],[69689,69702,1],[69744,69747,3],[69748,69759,11],[69760,69761,1],[69811,69814,1],[69817,69818,1],[69826,69888,62],[69889,69890,1],[69927,69931,1],[69933,69940,1],[70003,70016,13],[70017,70070,53],[70071,70078,1],[70089,70092,1],[70095,70191,96],[70192,70193,1],[70196,70198,2],[70199,70206,7],[70209,70367,158],[70371,70378,1],[70400,70401,1],[70459,70460,1],[70464,70502,38],[70503,70508,1],[70512,70516,1],[70712,70719,1],[70722,70724,1],[70726,70750,24],[70835,70840,1],[70842,70847,5],[70848,70850,2],[70851,71090,239],[71091,71093,1],[71100,71101,1],[71103,71104,1],[71132,71133,1],[71219,71226,1],[71229,71231,2],[71232,71339,107],[71341,71344,3],[71345,71349,1],[71351,71453,102],[71454,71455,1],[71458,71461,1],[71463,71467,1],[71727,71735,1],[71737,71738,1],[71995,71996,1],[71998,72003,5],[72148,72151,1],[72154,72155,1],[72160,72193,33],[72194,72202,1],[72243,72248,1],[72251,72254,1],[72263,72273,10],[72274,72278,1],[72281,72283,1],[72330,72342,1],[72344,72345,1],[72752,72758,1],[72760,72765,1],[72767,72850,83],[72851,72871,1],[72874,72880,1],[72882,72883,1],[72885,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73104,73],[73105,73109,4],[73111,73459,348],[73460,73472,12],[73473,73526,53],[73527,73530,1],[73536,73538,2],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94095,64],[94096,94098,1],[94180,113821,19641],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]]),w(f,"foldMn",[[921,953,32],[8126,8126,1]]),w(f,"N",[[48,57,1],[178,179,1],[185,188,3],[189,190,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2548,2553,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[2930,2935,1],[3046,3058,1],[3174,3183,1],[3192,3198,1],[3302,3311,1],[3416,3422,1],[3430,3448,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3891,1],[4160,4169,1],[4240,4249,1],[4969,4988,1],[5870,5872,1],[6112,6121,1],[6128,6137,1],[6160,6169,1],[6470,6479,1],[6608,6618,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[8304,8308,4],[8309,8313,1],[8320,8329,1],[8528,8578,1],[8581,8585,1],[9312,9371,1],[9450,9471,1],[10102,10131,1],[11517,12295,778],[12321,12329,1],[12344,12346,1],[12690,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[42528,42537,1],[42726,42735,1],[43056,43061,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[65799,65843,1],[65856,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[66369,66378,9],[66513,66517,1],[66720,66729,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[68912,68921,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70113,70132,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71483,1],[71904,71922,1],[72016,72025,1],[72784,72812,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[73664,73684,1],[74752,74862,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125127,125135,1],[125264,125273,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1],[130032,130041,1]]),w(f,"Nd",[[48,57,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[3046,3055,1],[3174,3183,1],[3302,3311,1],[3430,3439,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3881,1],[4160,4169,1],[4240,4249,1],[6112,6121,1],[6160,6169,1],[6470,6479,1],[6608,6617,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[42528,42537,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[66720,66729,1],[68912,68921,1],[69734,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71481,1],[71904,71913,1],[72016,72025,1],[72784,72793,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125264,125273,1],[130032,130041,1]]),w(f,"Nl",[[5870,5872,1],[8544,8578,1],[8581,8584,1],[12295,12321,26],[12322,12329,1],[12344,12346,1],[42726,42735,1],[65856,65908,1],[66369,66378,9],[66513,66517,1],[74752,74862,1]]),w(f,"No",[[178,179,1],[185,188,3],[189,190,1],[2548,2553,1],[2930,2935,1],[3056,3058,1],[3192,3198,1],[3416,3422,1],[3440,3448,1],[3882,3891,1],[4969,4988,1],[6128,6137,1],[6618,8304,1686],[8308,8313,1],[8320,8329,1],[8528,8543,1],[8585,9312,727],[9313,9371,1],[9450,9471,1],[10102,10131,1],[11517,12690,1173],[12691,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[43056,43061,1],[65799,65843,1],[65909,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69733,1],[70113,70132,1],[71482,71483,1],[71914,71922,1],[72794,72812,1],[73664,73684,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[125127,125135,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1]]),w(f,"P",[[33,35,1],[37,42,1],[44,47,1],[58,59,1],[63,64,1],[91,93,1],[95,123,28],[125,161,36],[167,171,4],[182,183,1],[187,191,4],[894,903,9],[1370,1375,1],[1417,1418,1],[1470,1472,2],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3898,38],[3899,3901,1],[3973,4048,75],[4049,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5120,5742,622],[5787,5788,1],[5867,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8208,829],[8209,8231,1],[8240,8259,1],[8261,8273,1],[8275,8286,1],[8317,8318,1],[8333,8334,1],[8968,8971,1],[9001,9002,1],[10088,10101,1],[10181,10182,1],[10214,10223,1],[10627,10648,1],[10712,10715,1],[10748,10749,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11822,1],[11824,11855,1],[11858,11869,1],[12289,12291,1],[12296,12305,1],[12308,12319,1],[12336,12349,13],[12448,12539,91],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,64830,20819],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65121,1],[65123,65128,5],[65130,65131,1],[65281,65283,1],[65285,65290,1],[65292,65295,1],[65306,65307,1],[65311,65312,1],[65339,65341,1],[65343,65371,28],[65373,65375,2],[65376,65381,1],[65792,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69293,69461,168],[69462,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]]),w(f,"Pc",[[95,8255,8160],[8256,8276,20],[65075,65076,1],[65101,65103,1],[65343,65343,1]]),w(f,"Pd",[[45,1418,1373],[1470,5120,3650],[6150,8208,2058],[8209,8213,1],[11799,11802,3],[11834,11835,1],[11840,11869,29],[12316,12336,20],[12448,65073,52625],[65074,65112,38],[65123,65293,170],[69293,69293,1]]),w(f,"Pe",[[41,93,52],[125,3899,3774],[3901,5788,1887],[8262,8318,56],[8334,8969,635],[8971,9002,31],[10089,10101,2],[10182,10215,33],[10217,10223,2],[10628,10648,2],[10713,10715,2],[10749,11811,1062],[11813,11817,2],[11862,11868,2],[12297,12305,2],[12309,12315,2],[12318,12319,1],[64830,65048,218],[65078,65092,2],[65096,65114,18],[65116,65118,2],[65289,65341,52],[65373,65379,3]]),w(f,"Pf",[[187,8217,8030],[8221,8250,29],[11779,11781,2],[11786,11789,3],[11805,11809,4]]),w(f,"Pi",[[171,8216,8045],[8219,8220,1],[8223,8249,26],[11778,11780,2],[11785,11788,3],[11804,11808,4]]),w(f,"Po",[[33,35,1],[37,39,1],[42,46,2],[47,58,11],[59,63,4],[64,92,28],[161,167,6],[182,183,1],[191,894,703],[903,1370,467],[1371,1375,1],[1417,1472,55],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3973,113],[4048,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5742,5867,125],[5868,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6149,1],[6151,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8214,835],[8215,8224,9],[8225,8231,1],[8240,8248,1],[8251,8254,1],[8257,8259,1],[8263,8273,1],[8275,8277,2],[8278,8286,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11782,5],[11783,11784,1],[11787,11790,3],[11791,11798,1],[11800,11801,1],[11803,11806,3],[11807,11818,11],[11819,11822,1],[11824,11833,1],[11836,11839,1],[11841,11843,2],[11844,11855,1],[11858,11860,1],[12289,12291,1],[12349,12539,190],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,65040,21029],[65041,65046,1],[65049,65072,23],[65093,65094,1],[65097,65100,1],[65104,65106,1],[65108,65111,1],[65119,65121,1],[65128,65130,2],[65131,65281,150],[65282,65283,1],[65285,65287,1],[65290,65294,2],[65295,65306,11],[65307,65311,4],[65312,65340,28],[65377,65380,3],[65381,65792,411],[65793,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69461,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]]),w(f,"Ps",[[40,91,51],[123,3898,3775],[3900,5787,1887],[8218,8222,4],[8261,8317,56],[8333,8968,635],[8970,9001,31],[10088,10100,2],[10181,10214,33],[10216,10222,2],[10627,10647,2],[10712,10714,2],[10748,11810,1062],[11812,11816,2],[11842,11861,19],[11863,11867,2],[12296,12304,2],[12308,12314,2],[12317,64831,52514],[65047,65077,30],[65079,65091,2],[65095,65113,18],[65115,65117,2],[65288,65339,51],[65371,65375,4],[65378,65378,1]]),w(f,"S",[[36,43,7],[60,62,1],[94,96,2],[124,126,2],[162,166,1],[168,169,1],[172,174,2],[175,177,1],[180,184,4],[215,247,32],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,1014,113],[1154,1421,267],[1422,1423,1],[1542,1544,1],[1547,1550,3],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2046,2047,1],[2184,2546,362],[2547,2554,7],[2555,2801,246],[2928,3059,131],[3060,3066,1],[3199,3407,208],[3449,3647,198],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6107,366],[6464,6622,158],[6623,6655,1],[7009,7018,1],[7028,7036,1],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8352,8384,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8472,1],[8478,8483,1],[8485,8489,2],[8494,8506,12],[8507,8512,5],[8513,8516,1],[8522,8525,1],[8527,8586,59],[8587,8592,5],[8593,8967,1],[8972,9e3,1],[9003,9254,1],[9280,9290,1],[9372,9449,1],[9472,10087,1],[10132,10180,1],[10183,10213,1],[10224,10626,1],[10649,10711,1],[10716,10747,1],[10750,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12443,12444,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43048,43051,1],[43062,43065,1],[43639,43641,1],[43867,43882,15],[43883,64297,20414],[64434,64450,1],[64832,64847,1],[64975,65020,45],[65021,65023,1],[65122,65124,2],[65125,65126,1],[65129,65284,155],[65291,65308,17],[65309,65310,1],[65342,65344,2],[65372,65374,2],[65504,65510,1],[65512,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,123647,432],[126124,126128,4],[126254,126704,450],[126705,126976,271],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]]),w(f,"Sc",[[36,162,126],[163,165,1],[1423,1547,124],[2046,2047,1],[2546,2547,1],[2555,2801,246],[3065,3647,582],[6107,8352,2245],[8353,8384,1],[43064,65020,21956],[65129,65284,155],[65504,65505,1],[65509,65510,1],[73693,73696,1],[123647,126128,2481]]),w(f,"Sk",[[94,96,2],[168,175,7],[180,184,4],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,2184,1283],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[12443,12444,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43867,43882,15],[43883,64434,20551],[64435,64450,1],[65342,65344,2],[65507,127995,62488],[127996,127999,1]]),w(f,"Sm",[[43,60,17],[61,62,1],[124,126,2],[172,177,5],[215,247,32],[1014,1542,528],[1543,1544,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8472,8512,40],[8513,8516,1],[8523,8592,69],[8593,8596,1],[8602,8603,1],[8608,8614,3],[8622,8654,32],[8655,8658,3],[8660,8692,32],[8693,8959,1],[8992,8993,1],[9084,9115,31],[9116,9139,1],[9180,9185,1],[9655,9665,10],[9720,9727,1],[9839,10176,337],[10177,10180,1],[10183,10213,1],[10224,10239,1],[10496,10626,1],[10649,10711,1],[10716,10747,1],[10750,11007,1],[11056,11076,1],[11079,11084,1],[64297,65122,825],[65124,65126,1],[65291,65308,17],[65309,65310,1],[65372,65374,2],[65506,65513,7],[65514,65516,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[126704,126705,1]]),w(f,"So",[[166,169,3],[174,176,2],[1154,1421,267],[1422,1550,128],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2554,2928,374],[3059,3064,1],[3066,3199,133],[3407,3449,42],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6464,723],[6622,6655,1],[7009,7018,1],[7028,7036,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8478,7],[8479,8483,1],[8485,8489,2],[8494,8506,12],[8507,8522,15],[8524,8525,1],[8527,8586,59],[8587,8597,10],[8598,8601,1],[8604,8607,1],[8609,8610,1],[8612,8613,1],[8615,8621,1],[8623,8653,1],[8656,8657,1],[8659,8661,2],[8662,8691,1],[8960,8967,1],[8972,8991,1],[8994,9e3,1],[9003,9083,1],[9085,9114,1],[9140,9179,1],[9186,9254,1],[9280,9290,1],[9372,9449,1],[9472,9654,1],[9656,9664,1],[9666,9719,1],[9728,9838,1],[9840,10087,1],[10132,10175,1],[10240,10495,1],[11008,11055,1],[11077,11078,1],[11085,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[43048,43051,1],[43062,43063,1],[43065,43639,574],[43640,43641,1],[64832,64847,1],[64975,65021,46],[65022,65023,1],[65508,65512,4],[65517,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73692,1],[73697,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,126124,2909],[126254,126976,722],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,127994,1],[128e3,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]]),w(f,"Z",[[32,160,128],[5760,8192,2432],[8193,8202,1],[8232,8233,1],[8239,8287,48],[12288,12288,1]]),w(f,"Zl",[[8232,8232,1]]),w(f,"Zp",[[8233,8233,1]]),w(f,"Zs",[[32,160,128],[5760,8192,2432],[8193,8202,1],[8239,8287,48],[12288,12288,1]]),w(f,"Adlam",[[125184,125259,1],[125264,125273,1],[125278,125279,1]]),w(f,"Ahom",[[71424,71450,1],[71453,71467,1],[71472,71494,1]]),w(f,"Anatolian_Hieroglyphs",[[82944,83526,1]]),w(f,"Arabic",[[1536,1540,1],[1542,1547,1],[1549,1562,1],[1564,1566,1],[1568,1599,1],[1601,1610,1],[1622,1647,1],[1649,1756,1],[1758,1791,1],[1872,1919,1],[2160,2190,1],[2192,2193,1],[2200,2273,1],[2275,2303,1],[64336,64450,1],[64467,64829,1],[64832,64911,1],[64914,64967,1],[64975,65008,33],[65009,65023,1],[65136,65140,1],[65142,65276,1],[69216,69246,1],[69373,69375,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[126704,126705,1]]),w(f,"Armenian",[[1329,1366,1],[1369,1418,1],[1421,1423,1],[64275,64279,1]]),w(f,"Avestan",[[68352,68405,1],[68409,68415,1]]),w(f,"Balinese",[[6912,6988,1],[6992,7038,1]]),w(f,"Bamum",[[42656,42743,1],[92160,92728,1]]),w(f,"Bassa_Vah",[[92880,92909,1],[92912,92917,1]]),w(f,"Batak",[[7104,7155,1],[7164,7167,1]]),w(f,"Bengali",[[2432,2435,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2492,2500,1],[2503,2504,1],[2507,2510,1],[2519,2524,5],[2525,2527,2],[2528,2531,1],[2534,2558,1]]),w(f,"Bhaiksuki",[[72704,72712,1],[72714,72758,1],[72760,72773,1],[72784,72812,1]]),w(f,"Bopomofo",[[746,747,1],[12549,12591,1],[12704,12735,1]]),w(f,"Brahmi",[[69632,69709,1],[69714,69749,1],[69759,69759,1]]),w(f,"Braille",[[10240,10495,1]]),w(f,"Buginese",[[6656,6683,1],[6686,6687,1]]),w(f,"Buhid",[[5952,5971,1]]),w(f,"Canadian_Aboriginal",[[5120,5759,1],[6320,6389,1],[72368,72383,1]]),w(f,"Carian",[[66208,66256,1]]),w(f,"Caucasian_Albanian",[[66864,66915,1],[66927,66927,1]]),w(f,"Chakma",[[69888,69940,1],[69942,69959,1]]),w(f,"Cham",[[43520,43574,1],[43584,43597,1],[43600,43609,1],[43612,43615,1]]),w(f,"Cherokee",[[5024,5109,1],[5112,5117,1],[43888,43967,1]]),w(f,"Chorasmian",[[69552,69579,1]]),w(f,"Common",[[0,64,1],[91,96,1],[123,169,1],[171,185,1],[187,191,1],[215,247,32],[697,735,1],[741,745,1],[748,767,1],[884,894,10],[901,903,2],[1541,1548,7],[1563,1567,4],[1600,1757,157],[2274,2404,130],[2405,3647,1242],[4053,4056,1],[4347,5867,1520],[5868,5869,1],[5941,5942,1],[6146,6147,1],[6149,7379,1230],[7393,7401,8],[7402,7404,1],[7406,7411,1],[7413,7415,1],[7418,8192,774],[8193,8203,1],[8206,8292,1],[8294,8304,1],[8308,8318,1],[8320,8334,1],[8352,8384,1],[8448,8485,1],[8487,8489,1],[8492,8497,1],[8499,8525,1],[8527,8543,1],[8585,8587,1],[8592,9254,1],[9280,9290,1],[9312,10239,1],[10496,11123,1],[11126,11157,1],[11159,11263,1],[11776,11869,1],[12272,12292,1],[12294,12296,2],[12297,12320,1],[12336,12343,1],[12348,12351,1],[12443,12444,1],[12448,12539,91],[12540,12688,148],[12689,12703,1],[12736,12771,1],[12783,12832,49],[12833,12895,1],[12927,13007,1],[13055,13144,89],[13145,13311,1],[19904,19967,1],[42752,42785,1],[42888,42890,1],[43056,43065,1],[43310,43471,161],[43867,43882,15],[43883,64830,20947],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65126,1],[65128,65131,1],[65279,65281,2],[65282,65312,1],[65339,65344,1],[65371,65381,1],[65392,65438,46],[65439,65504,65],[65505,65510,1],[65512,65518,1],[65529,65533,1],[65792,65794,1],[65799,65843,1],[65847,65855,1],[65936,65948,1],[66e3,66044,1],[66273,66299,1],[113824,113827,1],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119142,1],[119146,119162,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119488,119507,1],[119520,119539,1],[119552,119638,1],[119648,119672,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120779,1],[120782,120831,1],[126065,126132,1],[126209,126269,1],[126976,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127232,127405,1],[127462,127487,1],[127489,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1],[130032,130041,1],[917505,917536,31],[917537,917631,1]]),w(f,"foldCommon",[[924,956,32]]),w(f,"Coptic",[[994,1007,1],[11392,11507,1],[11513,11519,1]]),w(f,"Cuneiform",[[73728,74649,1],[74752,74862,1],[74864,74868,1],[74880,75075,1]]),w(f,"Cypriot",[[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3]]),w(f,"Cypro_Minoan",[[77712,77810,1]]),w(f,"Cyrillic",[[1024,1156,1],[1159,1327,1],[7296,7304,1],[7467,7544,77],[11744,11775,1],[42560,42655,1],[65070,65071,1],[122928,122989,1],[123023,123023,1]]),w(f,"Deseret",[[66560,66639,1]]),w(f,"Devanagari",[[2304,2384,1],[2389,2403,1],[2406,2431,1],[43232,43263,1],[72448,72457,1]]),w(f,"Dives_Akuru",[[71936,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71989,1],[71991,71992,1],[71995,72006,1],[72016,72025,1]]),w(f,"Dogra",[[71680,71739,1]]),w(f,"Duployan",[[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[113820,113823,1]]),w(f,"Egyptian_Hieroglyphs",[[77824,78933,1]]),w(f,"Elbasan",[[66816,66855,1]]),w(f,"Elymaic",[[69600,69622,1]]),w(f,"Ethiopic",[[4608,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4957,4988,1],[4992,5017,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1]]),w(f,"Georgian",[[4256,4293,1],[4295,4301,6],[4304,4346,1],[4348,4351,1],[7312,7354,1],[7357,7359,1],[11520,11557,1],[11559,11565,6]]),w(f,"Glagolitic",[[11264,11359,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1]]),w(f,"Gothic",[[66352,66378,1]]),w(f,"Grantha",[[70400,70403,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70460,70468,1],[70471,70472,1],[70475,70477,1],[70480,70487,7],[70493,70499,1],[70502,70508,1],[70512,70516,1]]),w(f,"Greek",[[880,883,1],[885,887,1],[890,893,1],[895,900,5],[902,904,2],[905,906,1],[908,910,2],[911,929,1],[931,993,1],[1008,1023,1],[7462,7466,1],[7517,7521,1],[7526,7530,1],[7615,7936,321],[7937,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8132,1],[8134,8147,1],[8150,8155,1],[8157,8175,1],[8178,8180,1],[8182,8190,1],[8486,43877,35391],[65856,65934,1],[65952,119296,53344],[119297,119365,1]]),w(f,"foldGreek",[[181,837,656]]),w(f,"Gujarati",[[2689,2691,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2748,2757,1],[2759,2761,1],[2763,2765,1],[2768,2784,16],[2785,2787,1],[2790,2801,1],[2809,2815,1]]),w(f,"Gunjala_Gondi",[[73056,73061,1],[73063,73064,1],[73066,73102,1],[73104,73105,1],[73107,73112,1],[73120,73129,1]]),w(f,"Gurmukhi",[[2561,2563,1],[2565,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2649,8],[2650,2652,1],[2654,2662,8],[2663,2678,1]]),w(f,"Han",[[11904,11929,1],[11931,12019,1],[12032,12245,1],[12293,12295,2],[12321,12329,1],[12344,12347,1],[13312,19903,1],[19968,40959,1],[63744,64109,1],[64112,64217,1],[94178,94179,1],[94192,94193,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),w(f,"Hangul",[[4352,4607,1],[12334,12335,1],[12593,12686,1],[12800,12830,1],[12896,12926,1],[43360,43388,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1]]),w(f,"Hanifi_Rohingya",[[68864,68903,1],[68912,68921,1]]),w(f,"Hanunoo",[[5920,5940,1]]),w(f,"Hatran",[[67808,67826,1],[67828,67829,1],[67835,67839,1]]),w(f,"Hebrew",[[1425,1479,1],[1488,1514,1],[1519,1524,1],[64285,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64335,1]]),w(f,"Hiragana",[[12353,12438,1],[12445,12447,1],[110593,110879,1],[110898,110928,30],[110929,110930,1],[127488,127488,1]]),w(f,"Imperial_Aramaic",[[67648,67669,1],[67671,67679,1]]),w(f,"Inherited",[[768,879,1],[1157,1158,1],[1611,1621,1],[1648,2385,737],[2386,2388,1],[6832,6862,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8204,8205,1],[8400,8432,1],[12330,12333,1],[12441,12442,1],[65024,65039,1],[65056,65069,1],[66045,66272,227],[70459,118528,48069],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[917760,917999,1]]),w(f,"foldInherited",[[921,953,32],[8126,8126,1]]),w(f,"Inscriptional_Pahlavi",[[68448,68466,1],[68472,68479,1]]),w(f,"Inscriptional_Parthian",[[68416,68437,1],[68440,68447,1]]),w(f,"Javanese",[[43392,43469,1],[43472,43481,1],[43486,43487,1]]),w(f,"Kaithi",[[69760,69826,1],[69837,69837,1]]),w(f,"Kannada",[[3200,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3260,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3293,3294,1],[3296,3299,1],[3302,3311,1],[3313,3315,1]]),w(f,"Katakana",[[12449,12538,1],[12541,12543,1],[12784,12799,1],[13008,13054,1],[13056,13143,1],[65382,65391,1],[65393,65437,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110880,288],[110881,110882,1],[110933,110948,15],[110949,110951,1]]),w(f,"Kawi",[[73472,73488,1],[73490,73530,1],[73534,73561,1]]),w(f,"Kayah_Li",[[43264,43309,1],[43311,43311,1]]),w(f,"Kharoshthi",[[68096,68099,1],[68101,68102,1],[68108,68115,1],[68117,68119,1],[68121,68149,1],[68152,68154,1],[68159,68168,1],[68176,68184,1]]),w(f,"Khitan_Small_Script",[[94180,101120,6940],[101121,101589,1]]),w(f,"Khmer",[[6016,6109,1],[6112,6121,1],[6128,6137,1],[6624,6655,1]]),w(f,"Khojki",[[70144,70161,1],[70163,70209,1]]),w(f,"Khudawadi",[[70320,70378,1],[70384,70393,1]]),w(f,"Lao",[[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3773,1],[3776,3780,1],[3782,3784,2],[3785,3790,1],[3792,3801,1],[3804,3807,1]]),w(f,"Latin",[[65,90,1],[97,122,1],[170,186,16],[192,214,1],[216,246,1],[248,696,1],[736,740,1],[7424,7461,1],[7468,7516,1],[7522,7525,1],[7531,7543,1],[7545,7614,1],[7680,7935,1],[8305,8319,14],[8336,8348,1],[8490,8491,1],[8498,8526,28],[8544,8584,1],[11360,11391,1],[42786,42887,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43007,1],[43824,43866,1],[43868,43876,1],[43878,43881,1],[64256,64262,1],[65313,65338,1],[65345,65370,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[122624,122654,1],[122661,122666,1]]),w(f,"Lepcha",[[7168,7223,1],[7227,7241,1],[7245,7247,1]]),w(f,"Limbu",[[6400,6430,1],[6432,6443,1],[6448,6459,1],[6464,6468,4],[6469,6479,1]]),w(f,"Linear_A",[[67072,67382,1],[67392,67413,1],[67424,67431,1]]),w(f,"Linear_B",[[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1]]),w(f,"Lisu",[[42192,42239,1],[73648,73648,1]]),w(f,"Lycian",[[66176,66204,1]]),w(f,"Lydian",[[67872,67897,1],[67903,67903,1]]),w(f,"Mahajani",[[69968,70006,1]]),w(f,"Makasar",[[73440,73464,1]]),w(f,"Malayalam",[[3328,3340,1],[3342,3344,1],[3346,3396,1],[3398,3400,1],[3402,3407,1],[3412,3427,1],[3430,3455,1]]),w(f,"Mandaic",[[2112,2139,1],[2142,2142,1]]),w(f,"Manichaean",[[68288,68326,1],[68331,68342,1]]),w(f,"Marchen",[[72816,72847,1],[72850,72871,1],[72873,72886,1]]),w(f,"Masaram_Gondi",[[72960,72966,1],[72968,72969,1],[72971,73014,1],[73018,73020,2],[73021,73023,2],[73024,73031,1],[73040,73049,1]]),w(f,"Medefaidrin",[[93760,93850,1]]),w(f,"Meetei_Mayek",[[43744,43766,1],[43968,44013,1],[44016,44025,1]]),w(f,"Mende_Kikakui",[[124928,125124,1],[125127,125142,1]]),w(f,"Meroitic_Cursive",[[68e3,68023,1],[68028,68047,1],[68050,68095,1]]),w(f,"Meroitic_Hieroglyphs",[[67968,67999,1]]),w(f,"Miao",[[93952,94026,1],[94031,94087,1],[94095,94111,1]]),w(f,"Modi",[[71168,71236,1],[71248,71257,1]]),w(f,"Mongolian",[[6144,6145,1],[6148,6150,2],[6151,6169,1],[6176,6264,1],[6272,6314,1],[71264,71276,1]]),w(f,"Mro",[[92736,92766,1],[92768,92777,1],[92782,92783,1]]),w(f,"Multani",[[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70313,1]]),w(f,"Myanmar",[[4096,4255,1],[43488,43518,1],[43616,43647,1]]),w(f,"Nabataean",[[67712,67742,1],[67751,67759,1]]),w(f,"Nag_Mundari",[[124112,124153,1]]),w(f,"Nandinagari",[[72096,72103,1],[72106,72151,1],[72154,72164,1]]),w(f,"New_Tai_Lue",[[6528,6571,1],[6576,6601,1],[6608,6618,1],[6622,6623,1]]),w(f,"Newa",[[70656,70747,1],[70749,70753,1]]),w(f,"Nko",[[1984,2042,1],[2045,2047,1]]),w(f,"Nushu",[[94177,110960,16783],[110961,111355,1]]),w(f,"Nyiakeng_Puachue_Hmong",[[123136,123180,1],[123184,123197,1],[123200,123209,1],[123214,123215,1]]),w(f,"Ogham",[[5760,5788,1]]),w(f,"Ol_Chiki",[[7248,7295,1]]),w(f,"Old_Hungarian",[[68736,68786,1],[68800,68850,1],[68858,68863,1]]),w(f,"Old_Italic",[[66304,66339,1],[66349,66351,1]]),w(f,"Old_North_Arabian",[[68224,68255,1]]),w(f,"Old_Permic",[[66384,66426,1]]),w(f,"Old_Persian",[[66464,66499,1],[66504,66517,1]]),w(f,"Old_Sogdian",[[69376,69415,1]]),w(f,"Old_South_Arabian",[[68192,68223,1]]),w(f,"Old_Turkic",[[68608,68680,1]]),w(f,"Old_Uyghur",[[69488,69513,1]]),w(f,"Oriya",[[2817,2819,1],[2821,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2876,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2908,2909,1],[2911,2915,1],[2918,2935,1]]),w(f,"Osage",[[66736,66771,1],[66776,66811,1]]),w(f,"Osmanya",[[66688,66717,1],[66720,66729,1]]),w(f,"Pahawh_Hmong",[[92928,92997,1],[93008,93017,1],[93019,93025,1],[93027,93047,1],[93053,93071,1]]),w(f,"Palmyrene",[[67680,67711,1]]),w(f,"Pau_Cin_Hau",[[72384,72440,1]]),w(f,"Phags_Pa",[[43072,43127,1]]),w(f,"Phoenician",[[67840,67867,1],[67871,67871,1]]),w(f,"Psalter_Pahlavi",[[68480,68497,1],[68505,68508,1],[68521,68527,1]]),w(f,"Rejang",[[43312,43347,1],[43359,43359,1]]),w(f,"Runic",[[5792,5866,1],[5870,5880,1]]),w(f,"Samaritan",[[2048,2093,1],[2096,2110,1]]),w(f,"Saurashtra",[[43136,43205,1],[43214,43225,1]]),w(f,"Sharada",[[70016,70111,1]]),w(f,"Shavian",[[66640,66687,1]]),w(f,"Siddham",[[71040,71093,1],[71096,71133,1]]),w(f,"SignWriting",[[120832,121483,1],[121499,121503,1],[121505,121519,1]]),w(f,"Sinhala",[[3457,3459,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3558,3567,1],[3570,3572,1],[70113,70132,1]]),w(f,"Sogdian",[[69424,69465,1]]),w(f,"Sora_Sompeng",[[69840,69864,1],[69872,69881,1]]),w(f,"Soyombo",[[72272,72354,1]]),w(f,"Sundanese",[[7040,7103,1],[7360,7367,1]]),w(f,"Syloti_Nagri",[[43008,43052,1]]),w(f,"Syriac",[[1792,1805,1],[1807,1866,1],[1869,1871,1],[2144,2154,1]]),w(f,"Tagalog",[[5888,5909,1],[5919,5919,1]]),w(f,"Tagbanwa",[[5984,5996,1],[5998,6e3,1],[6002,6003,1]]),w(f,"Tai_Le",[[6480,6509,1],[6512,6516,1]]),w(f,"Tai_Tham",[[6688,6750,1],[6752,6780,1],[6783,6793,1],[6800,6809,1],[6816,6829,1]]),w(f,"Tai_Viet",[[43648,43714,1],[43739,43743,1]]),w(f,"Takri",[[71296,71353,1],[71360,71369,1]]),w(f,"Tamil",[[2946,2947,1],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3006,3010,1],[3014,3016,1],[3018,3021,1],[3024,3031,7],[3046,3066,1],[73664,73713,1],[73727,73727,1]]),w(f,"Tangsa",[[92784,92862,1],[92864,92873,1]]),w(f,"Tangut",[[94176,94208,32],[94209,100343,1],[100352,101119,1],[101632,101640,1]]),w(f,"Telugu",[[3072,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3132,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3160,3162,1],[3165,3168,3],[3169,3171,1],[3174,3183,1],[3191,3199,1]]),w(f,"Thaana",[[1920,1969,1]]),w(f,"Thai",[[3585,3642,1],[3648,3675,1]]),w(f,"Tibetan",[[3840,3911,1],[3913,3948,1],[3953,3991,1],[3993,4028,1],[4030,4044,1],[4046,4052,1],[4057,4058,1]]),w(f,"Tifinagh",[[11568,11623,1],[11631,11632,1],[11647,11647,1]]),w(f,"Tirhuta",[[70784,70855,1],[70864,70873,1]]),w(f,"Toto",[[123536,123566,1]]),w(f,"Ugaritic",[[66432,66461,1],[66463,66463,1]]),w(f,"Vai",[[42240,42539,1]]),w(f,"Vithkuqi",[[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1]]),w(f,"Wancho",[[123584,123641,1],[123647,123647,1]]),w(f,"Warang_Citi",[[71840,71922,1],[71935,71935,1]]),w(f,"Yezidi",[[69248,69289,1],[69291,69293,1],[69296,69297,1]]),w(f,"Yi",[[40960,42124,1],[42128,42182,1]]),w(f,"Zanabazar_Square",[[72192,72263,1]]),w(f,"CATEGORIES",new Map([["C",f.C],["Cc",f.Cc],["Cf",f.Cf],["Co",f.Co],["Cs",f.Cs],["L",f.L],["Ll",f.Ll],["Lm",f.Lm],["Lo",f.Lo],["Lt",f.Lt],["Lu",f.Lu],["M",f.M],["Mc",f.Mc],["Me",f.Me],["Mn",f.Mn],["N",f.N],["Nd",f.Nd],["Nl",f.Nl],["No",f.No],["P",f.P],["Pc",f.Pc],["Pd",f.Pd],["Pe",f.Pe],["Pf",f.Pf],["Pi",f.Pi],["Po",f.Po],["Ps",f.Ps],["S",f.S],["Sc",f.Sc],["Sk",f.Sk],["Sm",f.Sm],["So",f.So],["Z",f.Z],["Zl",f.Zl],["Zp",f.Zp],["Zs",f.Zs]])),w(f,"SCRIPTS",new Map([["Adlam",f.Adlam],["Ahom",f.Ahom],["Anatolian_Hieroglyphs",f.Anatolian_Hieroglyphs],["Arabic",f.Arabic],["Armenian",f.Armenian],["Avestan",f.Avestan],["Balinese",f.Balinese],["Bamum",f.Bamum],["Bassa_Vah",f.Bassa_Vah],["Batak",f.Batak],["Bengali",f.Bengali],["Bhaiksuki",f.Bhaiksuki],["Bopomofo",f.Bopomofo],["Brahmi",f.Brahmi],["Braille",f.Braille],["Buginese",f.Buginese],["Buhid",f.Buhid],["Canadian_Aboriginal",f.Canadian_Aboriginal],["Carian",f.Carian],["Caucasian_Albanian",f.Caucasian_Albanian],["Chakma",f.Chakma],["Cham",f.Cham],["Cherokee",f.Cherokee],["Chorasmian",f.Chorasmian],["Common",f.Common],["Coptic",f.Coptic],["Cuneiform",f.Cuneiform],["Cypriot",f.Cypriot],["Cypro_Minoan",f.Cypro_Minoan],["Cyrillic",f.Cyrillic],["Deseret",f.Deseret],["Devanagari",f.Devanagari],["Dives_Akuru",f.Dives_Akuru],["Dogra",f.Dogra],["Duployan",f.Duployan],["Egyptian_Hieroglyphs",f.Egyptian_Hieroglyphs],["Elbasan",f.Elbasan],["Elymaic",f.Elymaic],["Ethiopic",f.Ethiopic],["Georgian",f.Georgian],["Glagolitic",f.Glagolitic],["Gothic",f.Gothic],["Grantha",f.Grantha],["Greek",f.Greek],["Gujarati",f.Gujarati],["Gunjala_Gondi",f.Gunjala_Gondi],["Gurmukhi",f.Gurmukhi],["Han",f.Han],["Hangul",f.Hangul],["Hanifi_Rohingya",f.Hanifi_Rohingya],["Hanunoo",f.Hanunoo],["Hatran",f.Hatran],["Hebrew",f.Hebrew],["Hiragana",f.Hiragana],["Imperial_Aramaic",f.Imperial_Aramaic],["Inherited",f.Inherited],["Inscriptional_Pahlavi",f.Inscriptional_Pahlavi],["Inscriptional_Parthian",f.Inscriptional_Parthian],["Javanese",f.Javanese],["Kaithi",f.Kaithi],["Kannada",f.Kannada],["Katakana",f.Katakana],["Kawi",f.Kawi],["Kayah_Li",f.Kayah_Li],["Kharoshthi",f.Kharoshthi],["Khitan_Small_Script",f.Khitan_Small_Script],["Khmer",f.Khmer],["Khojki",f.Khojki],["Khudawadi",f.Khudawadi],["Lao",f.Lao],["Latin",f.Latin],["Lepcha",f.Lepcha],["Limbu",f.Limbu],["Linear_A",f.Linear_A],["Linear_B",f.Linear_B],["Lisu",f.Lisu],["Lycian",f.Lycian],["Lydian",f.Lydian],["Mahajani",f.Mahajani],["Makasar",f.Makasar],["Malayalam",f.Malayalam],["Mandaic",f.Mandaic],["Manichaean",f.Manichaean],["Marchen",f.Marchen],["Masaram_Gondi",f.Masaram_Gondi],["Medefaidrin",f.Medefaidrin],["Meetei_Mayek",f.Meetei_Mayek],["Mende_Kikakui",f.Mende_Kikakui],["Meroitic_Cursive",f.Meroitic_Cursive],["Meroitic_Hieroglyphs",f.Meroitic_Hieroglyphs],["Miao",f.Miao],["Modi",f.Modi],["Mongolian",f.Mongolian],["Mro",f.Mro],["Multani",f.Multani],["Myanmar",f.Myanmar],["Nabataean",f.Nabataean],["Nag_Mundari",f.Nag_Mundari],["Nandinagari",f.Nandinagari],["New_Tai_Lue",f.New_Tai_Lue],["Newa",f.Newa],["Nko",f.Nko],["Nushu",f.Nushu],["Nyiakeng_Puachue_Hmong",f.Nyiakeng_Puachue_Hmong],["Ogham",f.Ogham],["Ol_Chiki",f.Ol_Chiki],["Old_Hungarian",f.Old_Hungarian],["Old_Italic",f.Old_Italic],["Old_North_Arabian",f.Old_North_Arabian],["Old_Permic",f.Old_Permic],["Old_Persian",f.Old_Persian],["Old_Sogdian",f.Old_Sogdian],["Old_South_Arabian",f.Old_South_Arabian],["Old_Turkic",f.Old_Turkic],["Old_Uyghur",f.Old_Uyghur],["Oriya",f.Oriya],["Osage",f.Osage],["Osmanya",f.Osmanya],["Pahawh_Hmong",f.Pahawh_Hmong],["Palmyrene",f.Palmyrene],["Pau_Cin_Hau",f.Pau_Cin_Hau],["Phags_Pa",f.Phags_Pa],["Phoenician",f.Phoenician],["Psalter_Pahlavi",f.Psalter_Pahlavi],["Rejang",f.Rejang],["Runic",f.Runic],["Samaritan",f.Samaritan],["Saurashtra",f.Saurashtra],["Sharada",f.Sharada],["Shavian",f.Shavian],["Siddham",f.Siddham],["SignWriting",f.SignWriting],["Sinhala",f.Sinhala],["Sogdian",f.Sogdian],["Sora_Sompeng",f.Sora_Sompeng],["Soyombo",f.Soyombo],["Sundanese",f.Sundanese],["Syloti_Nagri",f.Syloti_Nagri],["Syriac",f.Syriac],["Tagalog",f.Tagalog],["Tagbanwa",f.Tagbanwa],["Tai_Le",f.Tai_Le],["Tai_Tham",f.Tai_Tham],["Tai_Viet",f.Tai_Viet],["Takri",f.Takri],["Tamil",f.Tamil],["Tangsa",f.Tangsa],["Tangut",f.Tangut],["Telugu",f.Telugu],["Thaana",f.Thaana],["Thai",f.Thai],["Tibetan",f.Tibetan],["Tifinagh",f.Tifinagh],["Tirhuta",f.Tirhuta],["Toto",f.Toto],["Ugaritic",f.Ugaritic],["Vai",f.Vai],["Vithkuqi",f.Vithkuqi],["Wancho",f.Wancho],["Warang_Citi",f.Warang_Citi],["Yezidi",f.Yezidi],["Yi",f.Yi],["Zanabazar_Square",f.Zanabazar_Square]])),w(f,"FOLD_CATEGORIES",new Map([["L",f.foldL],["Ll",f.foldLl],["Lt",f.foldLt],["Lu",f.foldLu],["M",f.foldM],["Mn",f.foldMn]])),w(f,"FOLD_SCRIPT",new Map([["Common",f.foldCommon],["Greek",f.foldGreek],["Inherited",f.foldInherited]]));let et=f;class ne{static is32(e,t){let r=0,s=e.length;for(;r<s;){let i=r+Math.floor((s-r)/2),o=e[i];if(o[0]<=t&&t<=o[1])return(t-o[0])%o[2]===0;t<o[0]?s=i:r=i+1}return!1}static is(e,t){if(t<=this.MAX_LATIN1){for(let r of e)if(!(t>r[1]))return t<r[0]?!1:(t-r[0])%r[2]===0;return!1}return e.length>0&&t>=e[0][0]&&this.is32(e,t)}static isUpper(e){if(e<=this.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return this.is(et.Upper,e)}static isPrint(e){return e<=this.MAX_LATIN1?e>=32&&e<127||e>=161&&e!==173:this.is(et.L,e)||this.is(et.M,e)||this.is(et.N,e)||this.is(et.P,e)||this.is(et.S,e)}static simpleFold(e){if(et.CASE_ORBIT.has(e))return et.CASE_ORBIT.get(e);const t=S.toLowerCase(e);return t!==e?t:S.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e<0||t<0||e===t)return!0;if(e<=this.MAX_ASCII&&t<=this.MAX_ASCII)return S.CODES.get("A")<=e&&e<=S.CODES.get("Z")&&(e|=32),S.CODES.get("A")<=t&&t<=S.CODES.get("Z")&&(t|=32),e===t;for(let r=this.simpleFold(e);r!==e;r=this.simpleFold(r))if(r===t)return!0;return!1}}w(ne,"MAX_RUNE",1114111),w(ne,"MAX_ASCII",127),w(ne,"MAX_LATIN1",255),w(ne,"MAX_BMP",65535),w(ne,"MIN_FOLD",65),w(ne,"MAX_FOLD",125251);class le{static emptyInts(){return[]}static isalnum(e){return S.CODES.get("0")<=e&&e<=S.CODES.get("9")||S.CODES.get("a")<=e&&e<=S.CODES.get("z")||S.CODES.get("A")<=e&&e<=S.CODES.get("Z")}static unhex(e){return S.CODES.get("0")<=e&&e<=S.CODES.get("9")?e-S.CODES.get("0"):S.CODES.get("a")<=e&&e<=S.CODES.get("f")?e-S.CODES.get("a")+10:S.CODES.get("A")<=e&&e<=S.CODES.get("F")?e-S.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(ne.isPrint(e))this.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case S.CODES.get('"'):t+='\\"';break;case S.CODES.get("\\"):t+="\\\\";break;case S.CODES.get("	"):t+="\\t";break;case S.CODES.get(`
`):t+="\\n";break;case S.CODES.get("\r"):t+="\\r";break;case S.CODES.get("\b"):t+="\\b";break;case S.CODES.get("\f"):t+="\\f";break;default:{let r=e.toString(16);e<256?(t+="\\x",r.length===1&&(t+="0"),t+=r):t+=`\\x{${r}}`;break}}return t}static stringToRunes(e){return String(e).split("").map(t=>t.codePointAt(0))}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return S.CODES.get("a")<=e&&e<=S.CODES.get("z")||S.CODES.get("A")<=e&&e<=S.CODES.get("Z")||S.CODES.get("0")<=e&&e<=S.CODES.get("9")||e===S.CODES.get("_")}static emptyOpContext(e,t){let r=0;return e<0&&(r|=this.EMPTY_BEGIN_TEXT|this.EMPTY_BEGIN_LINE),e===S.CODES.get(`
`)&&(r|=this.EMPTY_BEGIN_LINE),t<0&&(r|=this.EMPTY_END_TEXT|this.EMPTY_END_LINE),t===S.CODES.get(`
`)&&(r|=this.EMPTY_END_LINE),this.isWordRune(e)!==this.isWordRune(t)?r|=this.EMPTY_WORD_BOUNDARY:r|=this.EMPTY_NO_WORD_BOUNDARY,r}static quoteMeta(e){return e.split("").map(t=>this.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>ne.MAX_BMP?2:1}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Array.from(new TextEncoder().encode(e));{let t=[],r=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=i&63|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder)return new TextDecoder("utf-8").decode(new Uint8Array(e));{let t=[],r=0,s=0;for(;r<e.length;){let i=e[r++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[r++];t[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[r++],l=e[r++],c=e[r++],h=((i&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;t[s++]=String.fromCharCode(55296+(h>>10)),t[s++]=String.fromCharCode(56320+(h&1023))}else{let o=e[r++],l=e[r++];t[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")}}}w(le,"METACHARACTERS","\\.+*?()|[]{}^$"),w(le,"EMPTY_BEGIN_LINE",1),w(le,"EMPTY_END_LINE",2),w(le,"EMPTY_BEGIN_TEXT",4),w(le,"EMPTY_END_TEXT",8),w(le,"EMPTY_WORD_BOUNDARY",16),w(le,"EMPTY_NO_WORD_BOUNDARY",32),w(le,"EMPTY_ALL",-1);const Q2=(n=[],e=0)=>{const t={};for(let r=0;r<n.length;r++){const s=n[r],i=e+r;t[s]=i,t[i]=s}return Object.freeze(t)},oi=class oi{getEncoding(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===oi.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===oi.Encoding.UTF_16}};w(oi,"Encoding",Q2(["UTF_16","UTF_8"]));let Yn=oi;class wh extends Yn{constructor(e=null){super(),this.bytes=e}getEncoding(){return Yn.Encoding.UTF_8}asCharSequence(){return le.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}}class A7 extends Yn{constructor(e=null){super(),this.charSequence=e}getEncoding(){return Yn.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return this.charSequence.toString().split("").map(e=>e.codePointAt(0))}length(){return this.charSequence.length}}class qo{static utf16(e){return new A7(e)}static utf8(e){return Array.isArray(e)?new wh(e):new wh(le.stringToUtf8ByteArray(e))}}class va extends Error{constructor(e){super(e),this.name="RE2JSException"}}class Pe extends va{constructor(e,t=null){let r=`error parsing regexp: ${e}`;t&&(r+=`: \`${t}\``),super(r),this.name="RE2JSSyntaxException",this.message=r,this.error=e,this.input=t}getDescription(){return this.error}getPattern(){return this.input}}class I7 extends va{constructor(e){super(e),this.name="RE2JSCompileException"}}class ln extends va{constructor(e){super(e),this.name="RE2JSGroupException"}}class x7 extends va{constructor(e){super(e),this.name="RE2JSFlagsException"}}class C7{static quoteReplacement(e){return e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(t=>{const r=t.codePointAt(0);return r===S.CODES["\\"]||r===S.CODES.$?`\\${t}`:t}).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const r=this.patternInput.re2();this.patternGroupCount=r.numberOfCapturingGroups(),this.groups=[],this.namedGroups=r.namedGroups,t instanceof Yn?this.resetMatcherInput(t):Array.isArray(t)?this.resetMatcherInput(qo.utf8(t)):this.resetMatcherInput(qo.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new ln(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new ln(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}group(e=0){if(typeof e=="string"){const s=this.namedGroups[e];if(!Number.isFinite(s))throw new ln(`group '${e}' not found`);e=s}const t=this.start(e),r=this.end(e);return t<0&&r<0?null:this.substring(t,r)}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new ln(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new ln("perhaps no match attempted");if(e===0||this.hasGroups)return;let t=this.groups[1]+1;t>this.matcherInputLength&&(t=this.matcherInputLength);const r=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!r[0])throw new ln("inconsistency in matching group data");this.groups=r[1],this.hasGroups=!0}matches(){return this.genMatch(0,z.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,z.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new ln(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}return e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1]&&e++),this.genMatch(e,z.UNANCHORED)}genMatch(e,t){const r=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return r[0]?(this.groups=r[1],this.hasMatch=!0,this.hasGroups=!1,this.anchorFlag=t,!0):!1}substring(e,t){return this.matcherInput.isUTF8Encoding()?le.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let r="";const s=this.start(),i=this.end();return this.appendPos<s&&(r+=this.substring(this.appendPos,s)),this.appendPos=i,r+=t?this.appendReplacementInternalPerl(e):this.appendReplacementInternal(e),r}appendReplacementInternal(e){let t="",r=0;const s=e.length;for(let i=0;i<s-1;i++){if(e.codePointAt(i)===S.CODES.get("\\")){r<i&&(t+=e.substring(r,i)),i++,r=i;continue}if(e.codePointAt(i)===S.CODES.get("$")){let o=e.codePointAt(i+1);if(S.CODES.get("0")<=o&&o<=S.CODES.get("9")){let l=o-S.CODES.get("0");for(r<i&&(t+=e.substring(r,i)),i+=2;i<s&&(o=e.codePointAt(i),!(o<S.CODES.get("0")||o>S.CODES.get("9")||l*10+o-S.CODES.get("0")>this.patternGroupCount));i++)l=l*10+o-S.CODES.get("0");if(l>this.patternGroupCount)throw new ln(`n > number of groups: ${l}`);const c=this.group(l);c!==null&&(t+=c),r=i,i--;continue}else if(o===S.CODES.get("{")){r<i&&(t+=e.substring(r,i)),i++;let l=i+1;for(;l<e.length&&e.codePointAt(l)!==S.CODES.get("}")&&e.codePointAt(l)!==S.CODES.get(" ");)l++;if(l===e.length||e.codePointAt(l)!==S.CODES.get("}"))throw new ln("named capture group is missing trailing '}'");const c=e.substring(i+1,l);t+=this.group(c),r=l+1}}}return r<s&&(t+=e.substring(r,s)),t}appendReplacementInternalPerl(e){let t="",r=0;const s=e.length;for(let i=0;i<s-1;i++)if(e.codePointAt(i)===S.CODES.get("$")){let o=e.codePointAt(i+1);if(S.CODES.get("$")===o){r<i&&(t+=e.substring(r,i)),t+="$",i++,r=i+1;continue}else if(S.CODES.get("&")===o){r<i&&(t+=e.substring(r,i));const l=this.group(0);l!==null?t+=l:t+="$&",i++,r=i+1;continue}else if(S.CODES.get("1")<=o&&o<=S.CODES.get("9")){let l=o-S.CODES.get("0");for(r<i&&(t+=e.substring(r,i)),i+=2;i<s&&(o=e.codePointAt(i),!(o<S.CODES.get("0")||o>S.CODES.get("9")||l*10+o-S.CODES.get("0")>this.patternGroupCount));i++)l=l*10+o-S.CODES.get("0");if(l>this.patternGroupCount){t+=`$${l}`,r=i,i--;continue}const c=this.group(l);c!==null&&(t+=c),r=i,i--;continue}else if(o===S.CODES.get("<")){r<i&&(t+=e.substring(r,i)),i++;let l=i+1;for(;l<e.length&&e.codePointAt(l)!==S.CODES.get(">")&&e.codePointAt(l)!==S.CODES.get(" ");)l++;if(l===e.length||e.codePointAt(l)!==S.CODES.get(">")){t+=e.substring(i-1,l+1),r=l+1;continue}const c=e.substring(i+1,l);Object.prototype.hasOwnProperty.call(this.namedGroups,c)?t+=this.group(c):t+=`$<${c}>`,r=l+1}}return r<s&&(t+=e.substring(r,s)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,r=!1){let s="";for(this.reset();this.find()&&(s+=this.appendReplacement(e,r),!!t););return s+=this.appendTail(),s}}class Dn{static EOF(){return-8}canCheckPrefix(){return!0}endPos(){return this.end}}class R7 extends Dn{constructor(e,t=0,r=e.length){super(),this.bytes=e,this.start=t,this.end=r}step(e){if(e+=this.start,e>=this.end)return Dn.EOF();let t=this.bytes[e++]&255;return t&128?(t&224)===192?(t=t&31,e>=this.end?Dn.EOF():(t=t<<6|this.bytes[e++]&63,t<<3|2)):(t&240)===224?(t=t&15,e+1>=this.end?Dn.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|3)):(t=t&7,e+2>=this.end?Dn.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|4)):t<<3|1}index(e,t){t+=this.start;const r=this.indexOf(this.bytes,e.prefixUTF8,t);return r<0?r:r-t}context(e){e+=this.start;let t=-1;if(e>this.start&&e<=this.end){let s=e-1;if(t=this.bytes[s--],t>=128){let i=e-4;for(i<this.start&&(i=this.start);s>=i&&(this.bytes[s]&192)===128;)s--;s<this.start&&(s=this.start),t=this.step(s)>>3}}const r=e<this.end?this.step(e)>>3:-1;return le.emptyOpContext(t,r)}indexOf(e,t,r=0){let s=t.length;if(s===0)return-1;let i=e.length;for(let o=r;o<=i-s;o++)for(let l=0;l<s&&e[o+l]===t[l];l++)if(l===s-1)return o;return-1}}class S7 extends Dn{constructor(e,t=0,r=e.length){super(),this.charSequence=e,this.start=t,this.end=r}step(e){if(e+=this.start,e<this.end){const t=this.charSequence.codePointAt(e);return t<<3|le.charCount(t)}else return Dn.EOF()}index(e,t){t+=this.start;const r=this.charSequence.indexOf(e.prefix,t);return r<0?r:r-t}context(e){e+=this.start;const t=e>0&&e<=this.charSequence.length?this.charSequence.codePointAt(e-1):-1,r=e<this.charSequence.length?this.charSequence.codePointAt(e):-1;return le.emptyOpContext(t,r)}}class ke{static fromUTF8(e,t=0,r=e.length){return new R7(e,t,r)}static fromUTF16(e,t=0,r=e.length){return new S7(e,t,r)}}const ee=class ee{static isPseudoOp(e){return e>=ee.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===S.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new ee(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t}constructor(e){this.op=e,this.flags=0,this.subs=ee.emptySubs(),this.runes=null,this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups={}}reinit(){this.flags=0,this.subs=ee.emptySubs(),this.runes=null,this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups={}}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case ee.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case ee.Op.EMPTY_MATCH:e+="(?:)";break;case ee.Op.STAR:case ee.Op.PLUS:case ee.Op.QUEST:case ee.Op.REPEAT:{const t=this.subs[0];switch(t.op>ee.Op.CAPTURE||t.op===ee.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case ee.Op.STAR:e+="*";break;case ee.Op.PLUS:e+="+";break;case ee.Op.QUEST:e+="?";break;case ee.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}this.flags&z.NON_GREEDY&&(e+="?");break}case ee.Op.CONCAT:{for(let t of this.subs)t.op===ee.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break}case ee.Op.ALTERNATE:{let t="";for(let r of this.subs)e+=t,t="|",e+=r.appendTo();break}case ee.Op.LITERAL:this.flags&z.FOLD_CASE&&(e+="(?i:");for(let t of this.runes)e+=le.escapeRune(t);this.flags&z.FOLD_CASE&&(e+=")");break;case ee.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case ee.Op.ANY_CHAR:e+="(?s:.)";break;case ee.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==ee.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case ee.Op.BEGIN_TEXT:e+="\\A";break;case ee.Op.END_TEXT:this.flags&z.WAS_DOLLAR?e+="(?-m:$)":e+="\\z";break;case ee.Op.BEGIN_LINE:e+="^";break;case ee.Op.END_LINE:e+="$";break;case ee.Op.WORD_BOUNDARY:e+="\\b";break;case ee.Op.NO_WORD_BOUNDARY:e+="\\B";break;case ee.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===ne.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const r=this.runes[t]+1,s=this.runes[t+1]-1;e+=ee.quoteIfHyphen(r),e+=le.escapeRune(r),r!==s&&(e+="-",e+=ee.quoteIfHyphen(s),e+=le.escapeRune(s))}}else for(let t=0;t<this.runes.length;t+=2){const r=this.runes[t],s=this.runes[t+1];e+=ee.quoteIfHyphen(r),e+=le.escapeRune(r),r!==s&&(e+="-",e+=ee.quoteIfHyphen(s),e+=le.escapeRune(s))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===ee.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const r=t.maxCap();e<r&&(e=r)}return e}equals(e){if(!(e!==null&&e instanceof ee)||this.op!==e.op)return!1;switch(this.op){case ee.Op.END_TEXT:{if((this.flags&z.WAS_DOLLAR)!==(e.flags&z.WAS_DOLLAR))return!1;break}case ee.Op.LITERAL:case ee.Op.CHAR_CLASS:{if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break}case ee.Op.ALTERNATE:case ee.Op.CONCAT:{if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break}case ee.Op.STAR:case ee.Op.PLUS:case ee.Op.QUEST:{if((this.flags&z.NON_GREEDY)!==(e.flags&z.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break}case ee.Op.REPEAT:{if((this.flags&z.NON_GREEDY)!==(e.flags&z.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break}case ee.Op.CAPTURE:{if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break}}return!0}};w(ee,"Op",Q2(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","LEFT_PAREN","VERTICAL_BAR"]));let V=ee;const be=class be{static isRuneOp(e){return be.RUNE<=e&&e<=be.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let r of e)t+=le.escapeRune(r);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=null}matchRune(e){if(this.runes.length===1){const s=this.runes[0];return this.arg&z.FOLD_CASE?ne.equalsIgnoreCase(s,e):e===s}for(let s=0;s<this.runes.length&&s<=8;s+=2){if(e<this.runes[s])return!1;if(e<=this.runes[s+1])return!0}let t=0,r=this.runes.length/2|0;for(;t<r;){const s=t+((r-t)/2|0);if(this.runes[2*s]<=e){if(e<=this.runes[2*s+1])return!0;t=s+1}else r=s}return!1}toString(){switch(this.op){case be.ALT:return`alt -> ${this.out}, ${this.arg}`;case be.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case be.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case be.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case be.MATCH:return"match";case be.FAIL:return"fail";case be.NOP:return`nop -> ${this.out}`;case be.RUNE:return this.runes===null?"rune <null>":["rune ",be.escapeRunes(this.runes),this.arg&z.FOLD_CASE?"/i":""," -> ",this.out].join("");case be.RUNE1:return`rune1 ${be.escapeRunes(this.runes)} -> ${this.out}`;case be.RUNE_ANY:return`any -> ${this.out}`;case be.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}};w(be,"ALT",1),w(be,"ALT_MATCH",2),w(be,"CAPTURE",3),w(be,"EMPTY_WIDTH",4),w(be,"FAIL",5),w(be,"MATCH",6),w(be,"NOP",7),w(be,"RUNE",8),w(be,"RUNE1",9),w(be,"RUNE_ANY",10),w(be,"RUNE_ANY_NOT_NL",11);let ce=be;class P7{constructor(){this.inst=[],this.start=0,this.numCap=2}getInst(e){return this.inst[e]}numInst(){return this.inst.length}addInst(e){this.inst.push(new ce(e))}skipNop(e){let t=this.inst[e];for(;t.op===ce.NOP||t.op===ce.CAPTURE;)t=this.inst[e],e=t.out;return t}prefix(){let e="",t=this.skipNop(this.start);if(!ce.isRuneOp(t.op)||t.runes.length!==1)return[t.op===ce.MATCH,e];for(;ce.isRuneOp(t.op)&&t.runes.length===1&&!(t.arg&z.FOLD_CASE);)e+=String.fromCodePoint(t.runes[0]),t=this.skipNop(t.out);return[t.op===ce.MATCH,e]}startCond(){let e=0,t=this.start;e:for(;;){const r=this.inst[t];switch(r.op){case ce.EMPTY_WIDTH:e|=r.arg;break;case ce.FAIL:return-1;case ce.CAPTURE:case ce.NOP:break;default:break e}t=r.out}return e}next(e){const t=this.inst[e>>1];return e&1?t.arg:t.out}patch(e,t){for(;e!==0;){const r=this.inst[e>>1];e&1?(e=r.arg,r.arg=t):(e=r.out,r.out=t)}}append(e,t){if(e===0)return t;if(t===0)return e;let r=e;for(;;){const i=this.next(r);if(i===0)break;r=i}const s=this.inst[r>>1];return r&1?s.arg=t:s.out=t,e}toString(){let e="";for(let t=0;t<this.inst.length;t++){const r=e.length;e+=t,t===this.start&&(e+="*"),e+="        ".substring(e.length-r),e+=this.inst[t],e+=`
`}return e}}class ho{constructor(e=0,t=0,r=!1){this.i=e,this.out=t,this.nullable=r}}class Qs{static ANY_RUNE_NOT_NL(){return[0,S.CODES.get(`
`)-1,S.CODES.get(`
`)+1,ne.MAX_RUNE]}static ANY_RUNE(){return[0,ne.MAX_RUNE]}static compileRegexp(e){const t=new Qs,r=t.compile(e);return t.prog.patch(r.out,t.newInst(ce.MATCH).i),t.prog.start=r.i,t.prog}constructor(){this.prog=new P7,this.newInst(ce.FAIL)}newInst(e){return this.prog.addInst(e),new ho(this.prog.numInst()-1,0,!0)}nop(){const e=this.newInst(ce.NOP);return e.out=e.i<<1,e}fail(){return new ho}cap(e){const t=this.newInst(ce.CAPTURE);return t.out=t.i<<1,this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new ho(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const r=this.newInst(ce.ALT),s=this.prog.getInst(r.i);return s.out=e.i,s.arg=t.i,r.out=this.prog.append(e.out,t.out),r.nullable=e.nullable||t.nullable,r}loop(e,t){const r=this.newInst(ce.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=r.i<<1):(s.out=e.i,r.out=r.i<<1|1),this.prog.patch(e.out,r.i),r}quest(e,t){const r=this.newInst(ce.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=r.i<<1):(s.out=e.i,r.out=r.i<<1|1),r.out=this.prog.append(r.out,e.out),r}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new ho(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(ce.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=t.i<<1,t}rune(e,t){const r=this.newInst(ce.RUNE);r.nullable=!1;const s=this.prog.getInst(r.i);return s.runes=e,t&=z.FOLD_CASE,(e.length!==1||ne.simpleFold(e[0])===e[0])&&(t&=-2),s.arg=t,r.out=r.i<<1,!(t&z.FOLD_CASE)&&e.length===1||e.length===2&&e[0]===e[1]?s.op=ce.RUNE1:e.length===2&&e[0]===0&&e[1]===ne.MAX_RUNE?s.op=ce.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===S.CODES.get(`
`)-1&&e[2]===S.CODES.get(`
`)+1&&e[3]===ne.MAX_RUNE&&(s.op=ce.RUNE_ANY_NOT_NL),r}compile(e){switch(e.op){case V.Op.NO_MATCH:return this.fail();case V.Op.EMPTY_MATCH:return this.nop();case V.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let r of e.runes){const s=this.rune([r],e.flags);t=t===null?s:this.cat(t,s)}return t}case V.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case V.Op.ANY_CHAR_NOT_NL:return this.rune(Qs.ANY_RUNE_NOT_NL(),0);case V.Op.ANY_CHAR:return this.rune(Qs.ANY_RUNE(),0);case V.Op.BEGIN_LINE:return this.empty(le.EMPTY_BEGIN_LINE);case V.Op.END_LINE:return this.empty(le.EMPTY_END_LINE);case V.Op.BEGIN_TEXT:return this.empty(le.EMPTY_BEGIN_TEXT);case V.Op.END_TEXT:return this.empty(le.EMPTY_END_TEXT);case V.Op.WORD_BOUNDARY:return this.empty(le.EMPTY_WORD_BOUNDARY);case V.Op.NO_WORD_BOUNDARY:return this.empty(le.EMPTY_NO_WORD_BOUNDARY);case V.Op.CAPTURE:{const t=this.cap(e.cap<<1),r=this.compile(e.subs[0]),s=this.cap(e.cap<<1|1);return this.cat(this.cat(t,r),s)}case V.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&z.NON_GREEDY)!==0);case V.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&z.NON_GREEDY)!==0);case V.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&z.NON_GREEDY)!==0);case V.Op.CONCAT:{if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.cat(t,s)}return t}}case V.Op.ALTERNATE:{if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.alt(t,s)}return t}}default:throw new I7("regexp: unhandled case in compile")}}}class Lt{static simplify(e){if(e===null)return null;switch(e.op){case V.Op.CAPTURE:case V.Op.CONCAT:case V.Op.ALTERNATE:{let t=e;for(let r=0;r<e.subs.length;r++){const s=e.subs[r],i=Lt.simplify(s);t===e&&i!==s&&(t=V.fromRegexp(e),t.runes=null,t.subs=e.subs.slice(0,e.subs.length)),t!==e&&(t.subs[r]=i)}return t}case V.Op.STAR:case V.Op.PLUS:case V.Op.QUEST:{const t=Lt.simplify(e.subs[0]);return Lt.simplify1(e.op,e.flags,t,e)}case V.Op.REPEAT:{if(e.min===0&&e.max===0)return new V(V.Op.EMPTY_MATCH);const t=Lt.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return Lt.simplify1(V.Op.STAR,e.flags,t,null);if(e.min===1)return Lt.simplify1(V.Op.PLUS,e.flags,t,null);const s=new V(V.Op.CONCAT),i=[];for(let o=0;o<e.min-1;o++)i.push(t);return i.push(Lt.simplify1(V.Op.PLUS,e.flags,t,null)),s.subs=i.slice(0),s}if(e.min===1&&e.max===1)return t;let r=null;if(e.min>0){r=[];for(let s=0;s<e.min;s++)r.push(t)}if(e.max>e.min){let s=Lt.simplify1(V.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const o=new V(V.Op.CONCAT);o.subs=[t,s],s=Lt.simplify1(V.Op.QUEST,e.flags,o,null)}if(r===null)return s;r.push(s)}if(r!==null){const s=new V(V.Op.CONCAT);return s.subs=r.slice(0),s}return new V(V.Op.NO_MATCH)}}return e}static simplify1(e,t,r,s){return r.op===V.Op.EMPTY_MATCH||e===r.op&&(t&z.NON_GREEDY)===(r.flags&z.NON_GREEDY)?r:(s!==null&&s.op===e&&(s.flags&z.NON_GREEDY)===(t&z.NON_GREEDY)&&r===s.subs[0]||(s=new V(e),s.flags=t,s.subs=[r]),s)}}class me{constructor(e,t){this.sign=e,this.cls=t}}const _h=[48,57],yh=[9,10,12,13,32,32],bh=[48,57,65,90,95,95,97,122],vh=new Map([["\\d",new me(1,_h)],["\\D",new me(-1,_h)],["\\s",new me(1,yh)],["\\S",new me(-1,yh)],["\\w",new me(1,bh)],["\\W",new me(-1,bh)]]),Eh=[48,57,65,90,97,122],Th=[65,90,97,122],Ah=[0,127],Ih=[9,9,32,32],xh=[0,31,127,127],Ch=[48,57],Rh=[33,126],Sh=[97,122],Ph=[32,126],kh=[33,47,58,64,91,96,123,126],Oh=[9,13,32,32],Nh=[65,90],Dh=[48,57,65,90,95,95,97,122],Vh=[48,57,65,70,97,102],Lh=new Map([["[:alnum:]",new me(1,Eh)],["[:^alnum:]",new me(-1,Eh)],["[:alpha:]",new me(1,Th)],["[:^alpha:]",new me(-1,Th)],["[:ascii:]",new me(1,Ah)],["[:^ascii:]",new me(-1,Ah)],["[:blank:]",new me(1,Ih)],["[:^blank:]",new me(-1,Ih)],["[:cntrl:]",new me(1,xh)],["[:^cntrl:]",new me(-1,xh)],["[:digit:]",new me(1,Ch)],["[:^digit:]",new me(-1,Ch)],["[:graph:]",new me(1,Rh)],["[:^graph:]",new me(-1,Rh)],["[:lower:]",new me(1,Sh)],["[:^lower:]",new me(-1,Sh)],["[:print:]",new me(1,Ph)],["[:^print:]",new me(-1,Ph)],["[:punct:]",new me(1,kh)],["[:^punct:]",new me(-1,kh)],["[:space:]",new me(1,Oh)],["[:^space:]",new me(-1,Oh)],["[:upper:]",new me(1,Nh)],["[:^upper:]",new me(-1,Nh)],["[:word:]",new me(1,Dh)],["[:^word:]",new me(-1,Dh)],["[:xdigit:]",new me(1,Vh)],["[:^xdigit:]",new me(-1,Vh)]]);class tt{static charClassToString(e,t){let r="[";for(let s=0;s<t;s+=2){s>0&&(r+=" ");const i=e[s],o=e[s+1];i===o?r+=`0x${i.toString(16)}`:r+=`0x${i.toString(16)}-0x${o.toString(16)}`}return r+="]",r}static cmp(e,t,r,s){const i=e[t]-r;return i!==0?i:s-e[t+1]}static qsortIntPair(e,t,r){const s=((t+r)/2|0)&-2,i=e[s],o=e[s+1];let l=t,c=r;for(;l<=c;){for(;l<r&&tt.cmp(e,l,i,o)<0;)l+=2;for(;c>t&&tt.cmp(e,c,i,o)>0;)c-=2;if(l<=c){if(l!==c){let h=e[l];e[l]=e[c],e[c]=h,h=e[l+1],e[l+1]=e[c+1],e[c+1]=h}l+=2,c-=2}}t<c&&tt.qsortIntPair(e,t,c),l<r&&tt.qsortIntPair(e,l,r)}constructor(e=le.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;tt.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const r=this.r[t],s=this.r[t+1];if(r<=this.r[e-1]+1){s>this.r[e-1]&&(this.r[e-1]=s);continue}this.r[e]=r,this.r[e+1]=s,e+=2}return this.len=e,this}appendLiteral(e,t){return t&z.FOLD_CASE?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let r=2;r<=4;r+=2)if(this.len>=r){const s=this.r[this.len-r],i=this.r[this.len-r+1];if(e<=i+1&&s<=t+1)return e<s&&(this.r[this.len-r]=e),t>i&&(this.r[this.len-r+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=ne.MIN_FOLD&&t>=ne.MAX_FOLD)return this.appendRange(e,t);if(t<ne.MIN_FOLD||e>ne.MAX_FOLD)return this.appendRange(e,t);e<ne.MIN_FOLD&&(this.appendRange(e,ne.MIN_FOLD-1),e=ne.MIN_FOLD),t>ne.MAX_FOLD&&(this.appendRange(ne.MAX_FOLD+1,t),t=ne.MAX_FOLD);for(let r=e;r<=t;r++){this.appendRange(r,r);for(let s=ne.simpleFold(r);s!==r;s=ne.simpleFold(s))this.appendRange(s,s)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let r=0;r<e.length;r+=2){const s=e[r],i=e[r+1];t<=s-1&&this.appendRange(t,s-1),t=i+1}return t<=ne.MAX_RUNE&&this.appendRange(t,ne.MAX_RUNE),this}appendTable(e){for(let t of e){const r=t[0],s=t[1],i=t[2];if(i===1){this.appendRange(r,s);continue}for(let o=r;o<=s;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let r of e){const s=r[0],i=r[1],o=r[2];if(o===1){t<=s-1&&this.appendRange(t,s-1),t=i+1;continue}for(let l=s;l<=i;l+=o)t<=l-1&&this.appendRange(t,l-1),t=l+1}return t<=ne.MAX_RUNE&&this.appendRange(t,ne.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let r=0;r<this.len;r+=2){const s=this.r[r],i=this.r[r+1];e<=s-1&&(this.r[t]=e,this.r[t+1]=s-1,t+=2),e=i+1}return this.len=t,e<=ne.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=ne.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let r=e.cls;return t&&(r=new tt().appendFoldedClass(r).cleanClass().toArray()),this.appendClassWithSign(r,e.sign)}toString(){return tt.charClassToString(this.r,this.len)}}class Xs{static of(e,t){return new Xs(e,t)}constructor(e,t){this.first=e,this.second=t}}class k7{constructor(e){this.str=e,this.position=0}pos(){return this.position}rewindTo(e){this.position=e}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(e){this.position+=e}skipString(e){this.position+=e.length}pop(){const e=this.str.codePointAt(this.position);return this.position+=le.charCount(e),e}lookingAt(e){return this.rest().startsWith(e)}rest(){return this.str.substring(this.position)}from(e){return this.str.substring(e,this.position)}toString(){return this.rest()}}const K=class K{static ANY_TABLE(){return[[0,ne.MAX_RUNE,1]]}static unicodeTable(e){return e==="Any"?Xs.of(K.ANY_TABLE(),K.ANY_TABLE()):et.CATEGORIES.has(e)?Xs.of(et.CATEGORIES.get(e),et.FOLD_CATEGORIES.get(e)):et.SCRIPTS.has(e)?Xs.of(et.SCRIPTS.get(e),et.FOLD_SCRIPT.get(e)):null}static minFoldRune(e){if(e<ne.MIN_FOLD||e>ne.MAX_FOLD)return e;let t=e;const r=e;for(e=ne.simpleFold(e);e!==r;e=ne.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===V.Op.EMPTY_MATCH)return null;if(e.op===V.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===V.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const r=new V(V.Op.LITERAL);return r.flags=t,r.runes=le.stringToRunes(e),r}static parse(e,t){return new K(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const r=K.parseInt(e);if(r===-1||!e.more())return-1;let s;if(!e.lookingAt(","))s=r;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))s=-1;else if((s=K.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),r<0||r>1e3||s===-2||s>1e3||s>=0&&r>s)throw new Pe(K.ERR_INVALID_REPEAT_SIZE,e.from(t));return r<<16|s&ne.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const r=e.codePointAt(t);if(r!==S.CODES.get("_")&&!le.isalnum(r))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=S.CODES.get("0")&&e.peek()<=S.CODES.get("9");)e.skip(1);const r=e.from(t);return r.length===0||r.length>1&&r.codePointAt(0)===S.CODES.get("0")?-1:r.length>8?-2:parseFloat(r,10)}static isCharClass(e){return e.op===V.Op.LITERAL&&e.runes.length===1||e.op===V.Op.CHAR_CLASS||e.op===V.Op.ANY_CHAR_NOT_NL||e.op===V.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case V.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case V.Op.CHAR_CLASS:for(let r=0;r<e.runes.length;r+=2)if(e.runes[r]<=t&&t<=e.runes[r+1])return!0;return!1;case V.Op.ANY_CHAR_NOT_NL:return t!==S.CODES.get(`
`);case V.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case V.Op.ANY_CHAR:break;case V.Op.ANY_CHAR_NOT_NL:K.matchRune(t,S.CODES.get(`
`))&&(e.op=V.Op.ANY_CHAR);break;case V.Op.CHAR_CLASS:t.op===V.Op.LITERAL?e.runes=new tt(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new tt(e.runes).appendClass(t.runes).toArray();break;case V.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=V.Op.CHAR_CLASS,e.runes=new tt().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new Pe(K.ERR_TRAILING_BACKSLASH);let r=e.pop();e:switch(r){case S.CODES.get("1"):case S.CODES.get("2"):case S.CODES.get("3"):case S.CODES.get("4"):case S.CODES.get("5"):case S.CODES.get("6"):case S.CODES.get("7"):if(!e.more()||e.peek()<S.CODES.get("0")||e.peek()>S.CODES.get("7"))break;case S.CODES.get("0"):{let s=r-S.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<S.CODES.get("0")||e.peek()>S.CODES.get("7"));i++)s=s*8+e.peek()-S.CODES.get("0"),e.skip(1);return s}case S.CODES.get("x"):{if(!e.more())break;if(r=e.pop(),r===S.CODES.get("{")){let o=0,l=0;for(;;){if(!e.more())break e;if(r=e.pop(),r===S.CODES.get("}"))break;const c=le.unhex(r);if(c<0||(l=l*16+c,l>ne.MAX_RUNE))break e;o++}if(o===0)break e;return l}const s=le.unhex(r);if(!e.more())break;r=e.pop();const i=le.unhex(r);if(s<0||i<0)break;return s*16+i}case S.CODES.get("a"):return S.CODES.get("\x07");case S.CODES.get("f"):return S.CODES.get("\f");case S.CODES.get("n"):return S.CODES.get(`
`);case S.CODES.get("r"):return S.CODES.get("\r");case S.CODES.get("t"):return S.CODES.get("	");case S.CODES.get("v"):return S.CODES.get("\v");default:if(!le.isalnum(r))return r;break}throw new Pe(K.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new Pe(K.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?K.parseEscape(e):e.pop()}static concatRunes(e,t){return[...e,...t]}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups={},this.stack=[],this.free=null}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):t=new V(e),t}reuse(e){e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!V.isPseudoOp(this.stack[t-1].op);)t--;const r=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),r}push(e){if(e.op===V.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=V.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===V.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&ne.simpleFold(e.runes[0])===e.runes[2]&&ne.simpleFold(e.runes[2])===e.runes[0]||e.op===V.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&ne.simpleFold(e.runes[0])===e.runes[1]&&ne.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|z.FOLD_CASE))return null;e.op=V.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|z.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),e}maybeConcat(e,t){const r=this.stack.length;if(r<2)return!1;const s=this.stack[r-1],i=this.stack[r-2];return s.op!==V.Op.LITERAL||i.op!==V.Op.LITERAL||(s.flags&z.FOLD_CASE)!==(i.flags&z.FOLD_CASE)?!1:(i.runes=K.concatRunes(i.runes,s.runes),e>=0?(s.runes=[e],s.flags=t,!0):(this.pop(),this.reuse(s),!1))}newLiteral(e,t){const r=this.newRegexp(V.Op.LITERAL);return r.flags=t,t&z.FOLD_CASE&&(e=K.minFoldRune(e)),r.runes=[e],r}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,r,s,i,o){let l=this.flags;if(l&z.PERL_X&&(i.more()&&i.lookingAt("?")&&(i.skip(1),l^=z.NON_GREEDY),o!==-1))throw new Pe(K.ERR_INVALID_REPEAT_OP,i.from(o));const c=this.stack.length;if(c===0)throw new Pe(K.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const h=this.stack[c-1];if(V.isPseudoOp(h.op))throw new Pe(K.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const p=this.newRegexp(e);p.min=t,p.max=r,p.flags=l,p.subs=[h],this.stack[c-1]=p}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(V.Op.EMPTY_MATCH)):this.push(this.collapse(e,V.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(V.Op.NO_MATCH)):this.push(this.collapse(e,V.Op.ALTERNATE))}cleanAlt(e){e.op===V.Op.CHAR_CLASS&&(e.runes=new tt(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===ne.MAX_RUNE?(e.runes=null,e.op=V.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===S.CODES.get(`
`)-1&&e.runes[2]===S.CODES.get(`
`)+1&&e.runes[3]===ne.MAX_RUNE&&(e.runes=null,e.op=V.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let r=0;for(let l of e)r+=l.op===t?l.subs.length:1;let s=new Array(r).fill(null),i=0;for(let l of e)l.op===t?(s.splice(i,l.subs.length,...l.subs),i+=l.subs.length,this.reuse(l)):s[i++]=l;let o=this.newRegexp(t);if(o.subs=s,t===V.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const l=o;o=o.subs[0],this.reuse(l)}return o}factor(e){if(e.length<2)return e;let t=0,r=e.length,s=0,i=null,o=0,l=0,c=0;for(let p=0;p<=r;p++){let m=null,E=0,C=0;if(p<r){let P=e[t+p];if(P.op===V.Op.CONCAT&&P.subs.length>0&&(P=P.subs[0]),P.op===V.Op.LITERAL&&(m=P.runes,E=P.runes.length,C=P.flags&z.FOLD_CASE),C===l){let F=0;for(;F<o&&F<E&&i[F]===m[F];)F++;if(F>0){o=F;continue}}}if(p!==c)if(p===c+1)e[s++]=e[t+c];else{const P=this.newRegexp(V.Op.LITERAL);P.flags=l,P.runes=i.slice(0,o);for(let q=c;q<p;q++)e[t+q]=this.removeLeadingString(e[t+q],o);const F=this.collapse(e.slice(t+c,t+p),V.Op.ALTERNATE),N=this.newRegexp(V.Op.CONCAT);N.subs=[P,F],e[s++]=N}c=p,i=m,o=E,l=C}r=s,t=0,c=0,s=0;let h=null;for(let p=0;p<=r;p++){let m=null;if(!(p<r&&(m=K.leadingRegexp(e[t+p]),h!==null&&h.equals(m)&&(K.isCharClass(h)||h.op===V.Op.REPEAT&&h.min===h.max&&K.isCharClass(h.subs[0]))))){if(p!==c)if(p===c+1)e[s++]=e[t+c];else{const E=h;for(let F=c;F<p;F++){const N=F!==c;e[t+F]=this.removeLeadingRegexp(e[t+F],N)}const C=this.collapse(e.slice(t+c,t+p),V.Op.ALTERNATE),P=this.newRegexp(V.Op.CONCAT);P.subs=[E,C],e[s++]=P}c=p,h=m}}r=s,t=0,c=0,s=0;for(let p=0;p<=r;p++)if(!(p<r&&K.isCharClass(e[t+p]))){if(p!==c)if(p===c+1)e[s++]=e[t+c];else{let m=c;for(let C=c+1;C<p;C++){const P=e[t+m],F=e[t+C];(P.op<F.op||P.op===F.op&&(P.runes!==null?P.runes.length:0)<(F.runes!==null?F.runes.length:0))&&(m=C)}const E=e[t+c];e[t+c]=e[t+m],e[t+m]=E;for(let C=c+1;C<p;C++)K.mergeCharClass(e[t+c],e[t+C]),this.reuse(e[t+C]);this.cleanAlt(e[t+c]),e[s++]=e[t+c]}p<r&&(e[s++]=e[t+p]),c=p+1}r=s,t=0,c=0,s=0;for(let p=0;p<r;++p)p+1<r&&e[t+p].op===V.Op.EMPTY_MATCH&&e[t+p+1].op===V.Op.EMPTY_MATCH||(e[s++]=e[t+p]);return r=s,t=0,e.slice(t,r)}removeLeadingString(e,t){if(e.op===V.Op.CONCAT&&e.subs.length>0){const r=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=r,r.op===V.Op.EMPTY_MATCH)switch(this.reuse(r),e.subs.length){case 0:case 1:e.op=V.Op.EMPTY_MATCH,e.subs=null;break;case 2:{const s=e;e=e.subs[1],this.reuse(s);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===V.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=V.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===V.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:{e.op=V.Op.EMPTY_MATCH,e.subs=V.emptySubs();break}case 1:{const r=e;e=e.subs[0],this.reuse(r);break}}return e}return t&&this.reuse(e),this.newRegexp(V.Op.EMPTY_MATCH)}parseInternal(){if(this.flags&z.LITERAL)return K.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,r=-1;const s=new k7(this.wholeRegexp);for(;s.more();){let o=-1;e:switch(s.peek()){case S.CODES.get("("):if(this.flags&z.PERL_X&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(V.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case S.CODES.get("|"):this.parseVerticalBar(),s.skip(1);break;case S.CODES.get(")"):this.parseRightParen(),s.skip(1);break;case S.CODES.get("^"):this.flags&z.ONE_LINE?this.op(V.Op.BEGIN_TEXT):this.op(V.Op.BEGIN_LINE),s.skip(1);break;case S.CODES.get("$"):this.flags&z.ONE_LINE?this.op(V.Op.END_TEXT).flags|=z.WAS_DOLLAR:this.op(V.Op.END_LINE),s.skip(1);break;case S.CODES.get("."):this.flags&z.DOT_NL?this.op(V.Op.ANY_CHAR):this.op(V.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case S.CODES.get("["):this.parseClass(s);break;case S.CODES.get("*"):case S.CODES.get("+"):case S.CODES.get("?"):{o=s.pos();let l=null;switch(s.pop()){case S.CODES.get("*"):l=V.Op.STAR;break;case S.CODES.get("+"):l=V.Op.PLUS;break;case S.CODES.get("?"):l=V.Op.QUEST;break}this.repeat(l,t,r,o,s,e);break}case S.CODES.get("{"):{o=s.pos();const l=K.parseRepeat(s);if(l<0){s.rewindTo(o),this.literal(s.pop());break}t=l>>16,r=(l&ne.MAX_BMP)<<16>>16,this.repeat(V.Op.REPEAT,t,r,o,s,e);break}case S.CODES.get("\\"):{const l=s.pos();if(s.skip(1),this.flags&z.PERL_X&&s.more())switch(s.pop()){case S.CODES.get("A"):this.op(V.Op.BEGIN_TEXT);break e;case S.CODES.get("b"):this.op(V.Op.WORD_BOUNDARY);break e;case S.CODES.get("B"):this.op(V.Op.NO_WORD_BOUNDARY);break e;case S.CODES.get("C"):throw new Pe(K.ERR_INVALID_ESCAPE,"\\C");case S.CODES.get("Q"):{let m=s.rest();const E=m.indexOf("\\E");E>=0&&(m=m.substring(0,E)),s.skipString(m),s.skipString("\\E");let C=0;for(;C<m.length;){const P=m.codePointAt(C);this.literal(P),C+=le.charCount(P)}break e}case S.CODES.get("z"):this.op(V.Op.END_TEXT);break e;default:s.rewindTo(l);break}const c=this.newRegexp(V.Op.CHAR_CLASS);if(c.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const p=new tt;if(this.parseUnicodeClass(s,p)){c.runes=p.toArray(),this.push(c);break e}}const h=new tt;if(this.parsePerlClassEscape(s,h)){c.runes=h.toArray(),this.push(c);break e}s.rewindTo(l),this.reuse(c),this.literal(K.parseEscape(s));break}default:this.literal(s.pop());break}e=o}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new Pe(K.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),r=e.rest();if(r.startsWith("(?P<")||r.startsWith("(?<")){const l=r.charAt(2)==="P"?4:3,c=r.indexOf(">");if(c<0)throw new Pe(K.ERR_INVALID_NAMED_CAPTURE,r);const h=r.substring(l,c);if(e.skipString(h),e.skip(l+1),!K.isValidCaptureName(h))throw new Pe(K.ERR_INVALID_NAMED_CAPTURE,r.substring(0,c+1));const p=this.op(V.Op.LEFT_PAREN);if(p.cap=++this.numCap,this.namedGroups[h])throw new Pe(K.ERR_DUPLICATE_NAMED_CAPTURE,h);this.namedGroups[h]=this.numCap,p.name=h;return}e.skip(2);let s=this.flags,i=1,o=!1;e:for(;e.more();){const l=e.pop();switch(l){case S.CODES.get("i"):s|=z.FOLD_CASE,o=!0;break;case S.CODES.get("m"):s&=-17,o=!0;break;case S.CODES.get("s"):s|=z.DOT_NL,o=!0;break;case S.CODES.get("U"):s|=z.NON_GREEDY,o=!0;break;case S.CODES.get("-"):if(i<0)break e;i=-1,s=~s,o=!1;break;case S.CODES.get(":"):case S.CODES.get(")"):if(i<0){if(!o)break e;s=~s}l===S.CODES.get(":")&&this.op(V.Op.LEFT_PAREN),this.flags=s;return;default:break e}}throw new Pe(K.ERR_INVALID_PERL_OP,e.from(t))}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(V.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===V.Op.VERTICAL_BAR&&K.isCharClass(this.stack[e-1])&&K.isCharClass(this.stack[e-3])){let t=this.stack[e-1],r=this.stack[e-3];if(t.op>r.op){const s=r;r=t,t=s,this.stack[e-3]=r}return K.mergeCharClass(r,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],r=this.stack[e-2];if(r.op===V.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=r,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new Pe(K.ERR_INTERNAL_ERROR,"stack underflow");const t=this.pop(),r=this.pop();if(r.op!==V.Op.LEFT_PAREN)throw new Pe(K.ERR_MISSING_PAREN,this.wholeRegexp);this.flags=r.flags,r.cap===0?this.push(t):(r.op=V.Op.CAPTURE,r.subs=[t],this.push(r))}parsePerlClassEscape(e,t){const r=e.pos();if(!(this.flags&z.PERL_X)||!e.more()||e.pop()!==S.CODES.get("\\")||!e.more())return!1;e.pop();const s=e.from(r),i=vh.has(s)?vh.get(s):null;return i===null?!1:(t.appendGroup(i,(this.flags&z.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const r=e.rest(),s=r.indexOf(":]");if(s<0)return!1;const i=r.substring(0,s+2);e.skipString(i);const o=Lh.has(i)?Lh.get(i):null;if(o===null)throw new Pe(K.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&z.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const r=e.pos();if(!(this.flags&z.UNICODE_GROUPS)||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let s=1,i=e.pop();if(i===S.CODES.get("P")&&(s=-1),!e.more())throw e.rewindTo(r),new Pe(K.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==S.CODES.get("{"))o=le.runeToString(i);else{const p=e.rest(),m=p.indexOf("}");if(m<0)throw e.rewindTo(r),new Pe(K.ERR_INVALID_CHAR_RANGE,e.rest());o=p.substring(0,m),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===S.CODES.get("^")&&(s=0-s,o=o.substring(1));const l=K.unicodeTable(o);if(l===null)throw new Pe(K.ERR_INVALID_CHAR_RANGE,e.from(r));const c=l.first,h=l.second;if(!(this.flags&z.FOLD_CASE)||h===null)t.appendTableWithSign(c,s);else{const p=new tt().appendTable(c).appendTable(h).cleanClass().toArray();t.appendClassWithSign(p,s)}return!0}parseClass(e){const t=e.pos();e.skip(1);const r=this.newRegexp(V.Op.CHAR_CLASS);r.flags=this.flags;const s=new tt;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),this.flags&z.CLASS_NL||s.appendRange(S.CODES.get(`
`),S.CODES.get(`
`)));let o=!0;for(;!e.more()||e.peek()!==S.CODES.get("]")||o;){if(e.more()&&e.lookingAt("-")&&!(this.flags&z.PERL_X)&&!o){const p=e.rest();if(p==="-"||!p.startsWith("-]"))throw e.rewindTo(t),new Pe(K.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const l=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,s))continue;e.rewindTo(l)}if(this.parseUnicodeClass(e,s)||this.parsePerlClassEscape(e,s))continue;e.rewindTo(l);const c=K.parseClassChar(e,t);let h=c;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(h=K.parseClassChar(e,t),h<c)throw new Pe(K.ERR_INVALID_CHAR_RANGE,e.from(l))}this.flags&z.FOLD_CASE?s.appendFoldedRange(c,h):s.appendRange(c,h)}e.skip(1),s.cleanClass(),i<0&&s.negateClass(),r.runes=s.toArray(),this.push(r)}};w(K,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),w(K,"ERR_INVALID_CHAR_RANGE","invalid character class range"),w(K,"ERR_INVALID_ESCAPE","invalid escape sequence"),w(K,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),w(K,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),w(K,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),w(K,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),w(K,"ERR_MISSING_BRACKET","missing closing ]"),w(K,"ERR_MISSING_PAREN","missing closing )"),w(K,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),w(K,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),w(K,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name");let Gl=K;class O7{constructor(){this.inst=null,this.cap=[]}}class Mh{constructor(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}contains(e){const t=this.sparse[e];return t<this.size&&this.densePcs[t]===e}isEmpty(){return this.size===0}add(e){const t=this.size++;return this.sparse[e]=t,this.denseThreads[t]=null,this.densePcs[t]=e,t}clear(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}toString(){let e="{";for(let t=0;t<this.size;t++)t!==0&&(e+=", "),e+=this.densePcs[t];return e+="}",e}}class Jr{static fromRE2(e){const t=new Jr;return t.prog=e.prog,t.re2=e,t.q0=new Mh(t.prog.numInst()),t.q1=new Mh(t.prog.numInst()),t.pool=[],t.poolSize=0,t.matched=!1,t.matchcap=Array(t.prog.numCap<2?2:t.prog.numCap).fill(0),t.ncap=0,t}static fromMachine(e){const t=new Jr;return t.re2=e.re2,t.prog=e.prog,t.q0=e.q0,t.q1=e.q1,t.pool=e.pool,t.poolSize=e.poolSize,t.matched=e.matched,t.matchcap=e.matchcap,t.ncap=e.ncap,t}init(e){this.ncap=e,e>this.matchcap.length?this.initNewCap(e):this.resetCap(e)}resetCap(e){for(let t=0;t<this.poolSize;t++){const r=this.pool[t];r.cap=Array(e).fill(0)}}initNewCap(e){for(let t=0;t<this.poolSize;t++){const r=this.pool[t];r.cap=Array(e).fill(0)}this.matchcap=Array(e).fill(0)}submatches(){return this.ncap===0?le.emptyInts():this.matchcap.slice(0,this.ncap)}alloc(e){let t;return this.poolSize>0?(this.poolSize--,t=this.pool[this.poolSize]):t=new O7,t.inst=e,t}freeQueue(e,t=0){const r=e.size-t,s=this.poolSize+r;this.pool.length<s&&(this.pool=this.pool.slice(0,Math.max(this.pool.length*2,s)));for(let i=t;i<e.size;i++){const o=e.denseThreads[i];o!==null&&(this.pool[this.poolSize]=o,this.poolSize++)}e.clear()}freeThread(e){this.pool.length<=this.poolSize&&(this.pool=this.pool.slice(0,this.pool.length*2)),this.pool[this.poolSize]=e,this.poolSize++}match(e,t,r){const s=this.re2.cond;if(s===le.EMPTY_ALL||(r===z.ANCHOR_START||r===z.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap=Array(this.prog.numCap).fill(-1);let i=this.q0,o=this.q1,l=e.step(t),c=l>>3,h=l&7,p=-1,m=0;l!==Dn.EOF()&&(l=e.step(t+h),p=l>>3,m=l&7);let E;for(t===0?E=le.emptyOpContext(-1,c):E=e.context(t);;){if(i.isEmpty()){if(s&le.EMPTY_BEGIN_TEXT&&t!==0||this.matched)break;if(this.re2.prefix.length!==0&&p!==this.re2.prefixRune&&e.canCheckPrefix()){const F=e.index(this.re2,t);if(F<0)break;t+=F,l=e.step(t),c=l>>3,h=l&7,l=e.step(t+h),p=l>>3,m=l&7}}!this.matched&&(t===0||r===z.UNANCHORED)&&(this.ncap>0&&(this.matchcap[0]=t),this.add(i,this.prog.start,t,this.matchcap,E,null));const C=t+h;if(E=e.context(C),this.step(i,o,t,C,c,E,r,t===e.endPos()),h===0||this.ncap===0&&this.matched)break;t+=h,c=p,h=m,c!==-1&&(l=e.step(t+h),p=l>>3,m=l&7);const P=i;i=o,o=P}return this.freeQueue(o),this.matched}step(e,t,r,s,i,o,l,c){const h=this.re2.longest;for(let p=0;p<e.size;p++){let m=e.denseThreads[p];if(m===null)continue;if(h&&this.matched&&this.ncap>0&&this.matchcap[0]<m.cap[0]){this.freeThread(m);continue}const E=m.inst;let C=!1;switch(E.op){case ce.MATCH:if(l===z.ANCHOR_BOTH&&!c)break;this.ncap>0&&(!h||!this.matched||this.matchcap[1]<r)&&(m.cap[1]=r,this.matchcap=m.cap.slice(0,this.ncap)),h||this.freeQueue(e,p+1),this.matched=!0;break;case ce.RUNE:C=E.matchRune(i);break;case ce.RUNE1:C=i===E.runes[0];break;case ce.RUNE_ANY:C=!0;break;case ce.RUNE_ANY_NOT_NL:C=i!==S.CODES.get(`
`);break;default:throw new Error("bad inst")}C&&(m=this.add(t,E.out,s,m.cap,o,m)),m!==null&&(this.freeThread(m),e.denseThreads[p]=null)}e.clear()}add(e,t,r,s,i,o){if(t===0||e.contains(t))return o;const l=e.add(t),c=this.prog.inst[t];switch(c.op){case ce.FAIL:break;case ce.ALT:case ce.ALT_MATCH:o=this.add(e,c.out,r,s,i,o),o=this.add(e,c.arg,r,s,i,o);break;case ce.EMPTY_WIDTH:c.arg&~i||(o=this.add(e,c.out,r,s,i,o));break;case ce.NOP:o=this.add(e,c.out,r,s,i,o);break;case ce.CAPTURE:if(c.arg<this.ncap){const h=s[c.arg];s[c.arg]=r,this.add(e,c.out,r,s,i,null),s[c.arg]=h}else o=this.add(e,c.out,r,s,i,o);break;case ce.MATCH:case ce.RUNE:case ce.RUNE1:case ce.RUNE_ANY:case ce.RUNE_ANY_NOT_NL:o===null?o=this.alloc(c):o.inst=c,this.ncap>0&&o.cap!==s&&(o.cap=s.slice(0,this.ncap)),e.denseThreads[l]=o,o=null;break;default:throw new Error("unhandled")}return o}}class N7{constructor(e){this.value=e}get(){return this.value}set(e){this.value=e}compareAndSet(e,t){return this.value===e?(this.value=t,!0):!1}}class Rn{static initTest(e){const t=Rn.compile(e),r=new Rn(t.expr,t.prog,t.numSubexp,t.longest);return r.cond=t.cond,r.prefix=t.prefix,r.prefixUTF8=t.prefixUTF8,r.prefixComplete=t.prefixComplete,r.prefixRune=t.prefixRune,r}static compile(e){return Rn.compileImpl(e,z.PERL,!1)}static compilePOSIX(e){return Rn.compileImpl(e,z.POSIX,!0)}static compileImpl(e,t,r){let s=Gl.parse(e,t);const i=s.maxCap();s=Lt.simplify(s);const o=Qs.compileRegexp(s),l=new Rn(e,o,i,r),[c,h]=o.prefix();return l.prefixComplete=c,l.prefix=h,l.prefixUTF8=le.stringToUtf8ByteArray(l.prefix),l.prefix.length>0&&(l.prefixRune=l.prefix.codePointAt(0)),l.namedGroups=s.namedGroups,l}static match(e,t){return Rn.compile(e).match(t)}constructor(e,t,r=0,s=0){this.expr=e,this.prog=t,this.numSubexp=r,this.longest=s,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.pooled=new N7}numberOfCapturingGroups(){return this.numSubexp}get(){let e;do e=this.pooled.get();while(e&&!this.pooled.compareAndSet(e,e.next));return e}reset(){this.pooled.set(null)}put(e,t){let r=this.pooled.get();do r=this.pooled.get(),!t&&r&&(e=Jr.fromMachine(e),t=!0),e.next!==r&&(e.next=r);while(!this.pooled.compareAndSet(r,e))}toString(){return this.expr}doExecute(e,t,r,s){let i=this.get(),o=!1;i?i.next!==null&&(i=Jr.fromMachine(i),o=!0):(i=Jr.fromRE2(this),o=!0),i.init(s);const l=i.match(e,t,r)?i.submatches():null;return this.put(i,o),l}match(e){return this.doExecute(ke.fromUTF16(e),0,z.UNANCHORED,0)!==null}matchWithGroup(e,t,r,s,i){return e instanceof Yn||(e=qo.utf16(e)),this.matchMachineInput(e,t,r,s,i)}matchMachineInput(e,t,r,s,i){if(t>r)return[!1,null];const o=e.isUTF16Encoding()?ke.fromUTF16(e.asCharSequence(),0,r):ke.fromUTF8(e.asBytes(),0,r),l=this.doExecute(o,t,s,2*i);return l===null?[!1,null]:[!0,l]}matchUTF8(e){return this.doExecute(ke.fromUTF8(e),0,z.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,r){let s=0,i=0,o="";const l=ke.fromUTF16(e);let c=0;for(;i<=e.length;){const h=this.doExecute(l,i,z.UNANCHORED,2);if(h===null||h.length===0)break;o+=e.substring(s,h[0]),(h[1]>s||h[0]===0)&&(o+=t(e.substring(h[0],h[1])),c++),s=h[1];const p=l.step(i)&7;if(i+p>h[1]?i+=p:i+1>h[1]?i++:i=h[1],c>=r)break}return o+=e.substring(s),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let r=new Array(t).fill(-1);for(let s=0;s<e.length;s++)r[s]=e[s];e=r}return e}allMatches(e,t,r=s=>s){let s=[];const i=e.endPos();t<0&&(t=i+1);let o=0,l=0,c=-1;for(;l<t&&o<=i;){const h=this.doExecute(e,o,z.UNANCHORED,this.prog.numCap);if(h===null||h.length===0)break;let p=!0;if(h[1]===o){h[0]===c&&(p=!1);const m=e.step(o);m<0?o=i+1:o+=m&7}else o=h[1];c=h[1],p&&(s.push(r(this.pad(h))),l++)}return s}findUTF8(e){const t=this.doExecute(ke.fromUTF8(e),0,z.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.doExecute(ke.fromUTF8(e),0,z.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.doExecute(ke.fromUTF16(e),0,z.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.doExecute(ke.fromUTF16(e),0,z.UNANCHORED,2)}findUTF8Submatch(e){const t=this.doExecute(ke.fromUTF8(e),0,z.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.slice(t[2*s],t[2*s+1]));return r}findUTF8SubmatchIndex(e){return this.pad(this.doExecute(ke.fromUTF8(e),0,z.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.doExecute(ke.fromUTF16(e),0,z.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.substring(t[2*s],t[2*s+1]));return r}findSubmatchIndex(e){return this.pad(this.doExecute(ke.fromUTF16(e),0,z.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const r=this.allMatches(ke.fromUTF8(e),t,s=>e.slice(s[0],s[1]));return r.length===0?null:r}findAllUTF8Index(e,t){const r=this.allMatches(ke.fromUTF8(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAll(e,t){const r=this.allMatches(ke.fromUTF16(e),t,s=>e.substring(s[0],s[1]));return r.length===0?null:r}findAllIndex(e,t){const r=this.allMatches(ke.fromUTF16(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAllUTF8Submatch(e,t){const r=this.allMatches(ke.fromUTF8(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.slice(s[2*o],s[2*o+1]));return i});return r.length===0?null:r}findAllUTF8SubmatchIndex(e,t){const r=this.allMatches(ke.fromUTF8(e),t);return r.length===0?null:r}findAllSubmatch(e,t){const r=this.allMatches(ke.fromUTF16(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.substring(s[2*o],s[2*o+1]));return i});return r.length===0?null:r}findAllSubmatchIndex(e,t){const r=this.allMatches(ke.fromUTF16(e),t);return r.length===0?null:r}}const ut=class ut{static quote(e){return le.quoteMeta(e)}static compile(e,t=0){let r=e;if(t&ut.CASE_INSENSITIVE&&(r=`(?i)${r}`),t&ut.DOTALL&&(r=`(?s)${r}`),t&ut.MULTILINE&&(r=`(?m)${r}`),t&-32)throw new x7("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH");let s=z.PERL;t&ut.DISABLE_UNICODE_GROUPS&&(s&=-129);const i=new ut(e,t);return i.re2Input=Rn.compileImpl(r,s,(t&ut.LONGEST_MATCH)!==0),i}static matches(e,t){return ut.compile(e).matcher(t).matches()}static initTest(e,t,r){if(e==null)throw new Error("pattern is null");if(r==null)throw new Error("re2 is null");const s=new ut(e,t);return s.re2Input=r,s}constructor(e,t){this.patternInput=e,this.flagsInput=t}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.matcher(e).matches()}matcher(e){return Array.isArray(e)&&(e=qo.utf8(e)),new C7(this,e)}split(e,t=0){const r=this.matcher(e),s=[];let i=0,o=0;for(;r.find();){if(o===0&&r.end()===0){o=r.end();continue}if(t>0&&s.length===t-1)break;if(o===r.start()){if(t===0){i+=1,o=r.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(r.substring(o,r.start())),o=r.end()}if(t===0&&o!==r.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(r.substring(o,r.inputLength()))}return(t!==0||s.length===0)&&s.push(r.substring(o,r.inputLength())),s}toString(){return this.patternInput}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}};w(ut,"CASE_INSENSITIVE",1),w(ut,"DOTALL",2),w(ut,"MULTILINE",4),w(ut,"DISABLE_UNICODE_GROUPS",8),w(ut,"LONGEST_MATCH",16);let ui=ut;/**
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
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
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
 */let hs="12.15.0";function D7(n){hs=n}/**
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
 */const Cr=new gc("@firebase/firestore");function qr(){return Cr.logLevel}function j(n,...e){if(Cr.logLevel<=fe.DEBUG){const t=e.map(Cc);Cr.debug(`Firestore (${hs}): ${n}`,...t)}}function yn(n,...e){if(Cr.logLevel<=fe.ERROR){const t=e.map(Cc);Cr.error(`Firestore (${hs}): ${n}`,...t)}}function $t(n,...e){if(Cr.logLevel<=fe.WARN){const t=e.map(Cc);Cr.warn(`Firestore (${hs}): ${n}`,...t)}}function Cc(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function X(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,X2(n,r,t)}function X2(n,e,t){let r=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw yn(r),new Error(r)}function W(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||X2(e,s,r)}function ie(n,e){return n}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends an{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class J2{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class V7{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(nt.UNAUTHENTICATED))}shutdown(){}}class L7{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class M7{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new pn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new pn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new pn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string",31837,{l:r}),new J2(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string",2055,{h:e}),new nt(e)}}class B7{constructor(e,t,r){this.T=e,this.P=t,this.R=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}A(){return this.R?this.R():null}get headers(){this.I.set("X-Goog-AuthUser",this.T);const e=this.A();return e&&this.I.set("Authorization",e),this.P&&this.I.set("X-Goog-Iam-Authorization-Token",this.P),this.I}}class F7{constructor(e,t,r){this.T=e,this.P=t,this.R=r}getToken(){return Promise.resolve(new B7(this.T,this.P,this.R))}start(e,t){e.enqueueRetryable(()=>t(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class U7{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,It(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){W(this.o===void 0,3512);const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Bh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(W(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Bh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class Rc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=$7(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function de(n,e){return n<e?-1:n>e?1:0}function Wl(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return xl(s)===xl(i)?de(s,i):xl(s)?1:-1}return de(n.length,e.length)}const H7=55296,j7=57343;function xl(n){const e=n.charCodeAt(0);return e>=H7&&e<=j7}function ns(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Gt="__name__";class qt{constructor(e,t,r){t===void 0?t=0:t>e.length&&X(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&X(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return qt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=qt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return de(e.length,t.length)}static compareSegments(e,t){const r=qt.isNumericId(e),s=qt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?qt.extractNumericId(e).compare(qt.extractNumericId(t)):Wl(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hn.fromString(e.substring(4,e.length-2))}}class _e extends qt{construct(e,t,r){return new _e(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new _e(t)}static emptyPath(){return new _e([])}}const q7=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends qt{construct(e,t,r){return new He(e,t,r)}static isValidIdentifier(e){return q7.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gt}static keyField(){return new He([Gt])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new G(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new G(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(t)}static emptyPath(){return new He([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(_e.fromString(e))}static fromName(e){return new Q(_e.fromString(e).popFirst(5))}static empty(){return new Q(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return _e.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new _e(e.slice()))}}/**
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
 */function Z2(n,e,t){if(!t)throw new G(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function z7(n,e,t,r){if(e===!0&&r===!0)throw new G(M.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Fh(n){if(!Q.isDocumentKey(n))throw new G(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Uh(n){if(Q.isDocumentKey(n))throw new G(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Oi(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Sc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":X(12329,{type:typeof n})}function Qn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new G(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Sc(n);throw new G(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Le(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ni(n,e){if(!Oi(n))throw new G(M.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new G(M.INVALID_ARGUMENT,t);return!0}/**
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
 */const $h=-62135596800,Hh=1e6;class Te{static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Hh);return new Te(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<$h)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hh}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ni(e,Te._jsonSchema))return new Te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-$h;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Te._jsonSchemaVersion="firestore/timestamp/1.0",Te._jsonSchema={type:Le("string",Te._jsonSchemaVersion),seconds:Le("number"),nanoseconds:Le("number")};/**
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
 */class re{static fromTimestamp(e){return new re(e)}static min(){return new re(new Te(0,0))}static max(){return new re(new Te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const hi=-1;function G7(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new Te(t+1,0):new Te(t,r));return new Xn(s,Q.empty(),e)}function W7(n){return new Xn(n.readTime,n.key,hi)}class Xn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Xn(re.min(),Q.empty(),hi)}static max(){return new Xn(re.max(),Q.empty(),hi)}}function K7(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Q.comparator(n.documentKey,e.documentKey),t!==0?t:de(n.largestBatchId,e.largestBatchId))}/**
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
 */async function ds(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==Y7)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):L.reject(t)}static resolve(e){return new L((t,r)=>{t(e)})}static reject(e){return new L((t,r)=>{r(e)})}static waitFor(e){return new L((t,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=L.resolve(!1);for(const r of e)t=t.next(s=>s?L.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new L((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(p=>{o[h]=p,++l,l===i&&r(o)},p=>s(p))}})}static doWhile(e,t){return new L((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function X7(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function fs(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ea{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ea.ce=-1;/**
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
 */const Pc=-1;function Ta(n){return n==null}function di(n){return n===0&&1/n==-1/0}function J7(n){return typeof n=="number"&&Number.isInteger(n)&&!di(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function Z7(n){return typeof n=="string"}/**
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
 */const ef="";function e3(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=jh(e)),e=t3(n.get(t),e);return jh(e)}function t3(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case ef:t+="";break;default:t+=i}}return t}function jh(n){return n+ef+""}/**
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
 */class Ae{constructor(e,t){this.comparator=e,this.root=t||Qe.EMPTY}insert(e,t){return new Ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fo(this.root,e,this.comparator,!1)}getReverseIterator(){return new fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fo(this.root,e,this.comparator,!0)}}class fo{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Qe.RED,this.left=s??Qe.EMPTY,this.right=i??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Qe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Qe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Be{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new qh(this.data.getIterator())}getIteratorFrom(e){return new qh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Be(this.comparator);return t.data=e,t}}class qh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ft{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new Ft([])}unionWith(e){let t=new Be(He.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ft(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ns(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */function zo(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Dr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function n3(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function tf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class nf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new nf("Invalid base64 string: "+i):i}}(e);return new Fe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Fe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const r3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(n){if(W(!!n,39018),typeof n=="string"){let e=0;const t=r3.exec(n);if(W(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(n.seconds),nanos:xe(n.nanos)}}function xe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zn(n){return typeof n=="string"?Fe.fromBase64String(n):Fe.fromUint8Array(n)}/**
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
 */const rf="server_timestamp",sf="__type__",of="__previous_value__",af="__local_write_time__";function Aa(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[sf])==null?void 0:r.stringValue)===rf}function Di(n){const e=n.mapValue.fields[of];return Aa(e)?Di(e):e}function rs(n){const e=Jn(n.mapValue.fields[af].timestampValue);return new Te(e.seconds,e.nanos)}/**
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
 */class s3{constructor(e,t,r,s,i,o,l,c,h,p,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=p,this.apiKey=m}}const Go="(default)";class fi{constructor(e,t){this.projectId=e,this.database=t||Go}static empty(){return new fi("","")}get isDefaultDatabase(){return this.database===Go}isEqual(e){return e instanceof fi&&e.projectId===this.projectId&&e.database===this.database}}function i3(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new G(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fi(n.options.projectId,e)}/**
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
 */const lf="__type__",o3="__max__",po={mapValue:{}},cf="__vector__",pi="value",ss={nullValue:"NULL_VALUE"},yt={booleanValue:!0},Ke={booleanValue:!1};function Ue(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Aa(n)?4:a3(n)?9007199254740991:Wo(n)?10:11:X(28295,{value:n})}function Dt(n,e,t){if(n===e)return!0;const r=Ue(n);if(r!==Ue(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return rs(n).isEqual(rs(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=Jn(i.timestampValue),c=Jn(o.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return Zn(i.bytesValue).isEqual(Zn(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return xe(i.geoPointValue.latitude)===xe(o.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o,l){if("integerValue"in i&&"integerValue"in o)return xe(i.integerValue)===xe(o.integerValue);let c,h;if("doubleValue"in i&&"doubleValue"in o)c=xe(i.doubleValue),h=xe(o.doubleValue);else{if(!(l!=null&&l.Ee))return!1;c=xe(i.integerValue??i.doubleValue),h=xe(o.integerValue??o.doubleValue)}return c===h?!!(l!=null&&l.he)||di(c)===di(h):!!(l===void 0||l.Te)&&isNaN(c)&&isNaN(h)}(n,e,t);case 9:return ns(n.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>Dt(s,i,t));case 10:case 11:return function(i,o,l){const c=i.mapValue.fields||{},h=o.mapValue.fields||{};if(zo(c)!==zo(h))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(h[p]===void 0||!Dt(c[p],h[p],l)))return!1;return!0}(n,e,t);default:return X(52216,{left:n})}}function mi(n,e){return(n.values||[]).find(t=>Dt(t,e))!==void 0}function bt(n,e){if(n===e)return 0;const t=Ue(n),r=Ue(e);if(t!==r)return de(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return de(n.booleanValue,e.booleanValue);case 2:return function(i,o){const l=xe(i.integerValue||i.doubleValue),c=xe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return zh(n.timestampValue,e.timestampValue);case 4:return zh(rs(n),rs(e));case 5:return Wl(n.stringValue,e.stringValue);case 6:return function(i,o){const l=Zn(i),c=Zn(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const p=de(l[h],c[h]);if(p!==0)return p}return de(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const l=de(xe(i.latitude),xe(o.latitude));return l!==0?l:de(xe(i.longitude),xe(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Gh(n.arrayValue,e.arrayValue);case 10:return function(i,o){var E,C,P,F;const l=i.fields||{},c=o.fields||{},h=(E=l[pi])==null?void 0:E.arrayValue,p=(C=c[pi])==null?void 0:C.arrayValue,m=de(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((F=p==null?void 0:p.values)==null?void 0:F.length)||0);return m!==0?m:Gh(h,p)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===po.mapValue&&o===po.mapValue)return 0;if(i===po.mapValue)return 1;if(o===po.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},p=Object.keys(h);c.sort(),p.sort();for(let m=0;m<c.length&&m<p.length;++m){const E=Wl(c[m],p[m]);if(E!==0)return E;const C=bt(l[c[m]],h[p[m]]);if(C!==0)return C}return de(c.length,p.length)}(n.mapValue,e.mapValue);default:throw X(23264,{Pe:t})}}function zh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return de(n,e);const t=Jn(n),r=Jn(e),s=de(t.seconds,r.seconds);return s!==0?s:de(t.nanos,r.nanos)}function Gh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=bt(t[s],r[s]);if(i!==void 0&&i!==0)return i}return de(t.length,r.length)}function is(n){return Kl(n)}function Kl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Jn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Zn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Kl(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Kl(t.fields[o])}`;return s+"}"}(n.mapValue):X(61005,{value:n})}function Ro(n){switch(Ue(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Di(n);return e?16+Ro(e):16;case 5:return 2*n.stringValue.length;case 6:return Zn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ro(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Dr(r.fields,(i,o)=>{s+=i.length+Ro(o)}),s}(n.mapValue);default:throw X(13486,{value:n})}}function Wt(n){return!!n&&"integerValue"in n}function wr(n){return!!n&&"doubleValue"in n}function er(n){return Wt(n)||wr(n)}function os(n){return!!n&&"arrayValue"in n}function Ct(n){return!!n&&"nullValue"in n}function vt(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function _r(n){return!!n&&"mapValue"in n}function Wo(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[lf])==null?void 0:r.stringValue)===cf}function Yl(n){var e,t;return(t=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[pi])==null?void 0:t.arrayValue}function Js(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Dr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Js(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Js(n.arrayValue.values[t]);return e}return{...n}}function a3(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===o3}/**
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
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!_r(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Js(t)}setAll(e){let t=He.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}o?r[l.lastSegment()]=Js(o):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());_r(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Dt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];_r(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Dr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new xt(Js(this.value))}}function uf(n){const e=[];return Dr(n.fields,(t,r)=>{const s=new He([t]);if(_r(r)){const i=uf(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ft(e)}/**
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
 */function Ia(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:di(e)?"-0":e}}function kc(n){return{integerValue:""+n}}function Oc(n,e,t){return Number.isInteger(e)&&(t!=null&&t.preferIntegers)||J7(e)?kc(e):Ia(n,e)}/**
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
 */class xa{constructor(){this._=void 0}}function l3(n,e,t){return n instanceof Ko?function(s,i){const o={fields:{[sf]:{stringValue:rf},[af]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Aa(i)&&(i=Di(i)),i&&(o.fields[of]=i),{mapValue:o}}(t,e):n instanceof gi?df(n,e):n instanceof wi?ff(n,e):n instanceof _i?function(s,i){const o=hf(s,i),l=Xo(o)+Xo(s.Re);return Wt(o)&&Wt(s.Re)?kc(l):Ia(s.serializer,l)}(n,e):n instanceof Yo?function(s,i){return Wh(s,i,Math.min)}(n,e):n instanceof Qo?function(s,i){return Wh(s,i,Math.max)}(n,e):void 0}function c3(n,e,t){return n instanceof gi?df(n,e):n instanceof wi?ff(n,e):t}function hf(n,e){return n instanceof _i?er(e)?e:{integerValue:0}:null}class Ko extends xa{}class gi extends xa{constructor(e){super(),this.elements=e}}function df(n,e){const t=pf(e);for(const r of n.elements)t.some(s=>Dt(s,r))||t.push(r);return{arrayValue:{values:t}}}class wi extends xa{constructor(e){super(),this.elements=e}}function ff(n,e){let t=pf(e);for(const r of n.elements)t=t.filter(s=>!Dt(s,r));return{arrayValue:{values:t}}}class Nc extends xa{constructor(e,t){super(),this.serializer=e,this.Re=t}}class _i extends Nc{}class Yo extends Nc{}class Qo extends Nc{}function Wh(n,e,t){if(!er(e))return n.Re;const r=t(Xo(e),Xo(n.Re));return Wt(e)&&Wt(n.Re)?kc(r):Ia(n.serializer,r)}function Xo(n){return xe(n.integerValue||n.doubleValue)}function pf(n){return os(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function u3(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof gi&&s instanceof gi||r instanceof wi&&s instanceof wi?ns(r.elements,s.elements,Dt):r instanceof _i&&s instanceof _i||r instanceof Yo&&s instanceof Yo||r instanceof Qo&&s instanceof Qo?Dt(r.Re,s.Re):r instanceof Ko&&s instanceof Ko}(n.transform,e.transform)}class h3{constructor(e,t){this.version=e,this.transformResults=t}}class Jt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function So(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ca{}function mf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Dc(n.key,Jt.none()):new Vi(n.key,n.data,Jt.none());{const t=n.data,r=xt.empty();let s=new Be(He.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Vr(n.key,r,new Ft(s.toArray()),Jt.none())}}function d3(n,e,t){n instanceof Vi?function(s,i,o){const l=s.value.clone(),c=Yh(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Vr?function(s,i,o){if(!So(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Yh(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(gf(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Zs(n,e,t,r){return n instanceof Vi?function(i,o,l,c){if(!So(i.precondition,o))return l;const h=i.value.clone(),p=Qh(i.fieldTransforms,c,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Vr?function(i,o,l,c){if(!So(i.precondition,o))return l;const h=Qh(i.fieldTransforms,c,o),p=o.data;return p.setAll(gf(i)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,o,l){return So(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function f3(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=hf(r.transform,s||null);i!=null&&(t===null&&(t=xt.empty()),t.set(r.field,i))}return t||null}function Kh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ns(r,s,(i,o)=>u3(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Vi extends Ca{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vr extends Ca{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Yh(n,e,t){const r=new Map;W(n.length===t.length,32656,{Ie:t.length,Ae:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,c3(o,l,t[s]))}return r}function Qh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,l3(i,o,e))}return r}class Dc extends Ca{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class p3 extends Ca{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Jo{constructor(e,t){this.position=e,this.inclusive=t}}function Xh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),t.key):r=bt(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Dt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class wf{}class je extends wf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new g3(e,t,r):t==="array-contains"?new y3(e,r):t==="in"?new b3(e,r):t==="not-in"?new v3(e,r):t==="array-contains-any"?new E3(e,r):new je(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new w3(e,r):new _3(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(bt(t,this.value)):t!==null&&Ue(this.value)===Ue(t)&&this.matchesComparison(bt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nn extends wf{constructor(e,t){super(),this.filters=e,this.op=t,this.Ve=null}static create(e,t){return new nn(e,t)}matches(e){return _f(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Ve!==null||(this.Ve=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Ve}getFilters(){return Object.assign([],this.filters)}}function _f(n){return n.op==="and"}function yf(n){return m3(n)&&_f(n)}function m3(n){for(const e of n.filters)if(e instanceof nn)return!1;return!0}function Ql(n){if(n instanceof je)return n.field.canonicalString()+n.op.toString()+is(n.value);if(yf(n))return n.filters.map(e=>Ql(e)).join(",");{const e=n.filters.map(t=>Ql(t)).join(",");return`${n.op}(${e})`}}function bf(n,e){return n instanceof je?function(r,s){return s instanceof je&&r.op===s.op&&r.field.isEqual(s.field)&&Dt(r.value,s.value)}(n,e):n instanceof nn?function(r,s){return s instanceof nn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&bf(o,s.filters[l]),!0):!1}(n,e):void X(19439)}function vf(n){return n instanceof je?function(t){return`${t.field.canonicalString()} ${t.op} ${is(t.value)}`}(n):n instanceof nn?function(t){return t.op.toString()+" {"+t.getFilters().map(vf).join(" ,")+"}"}(n):"Filter"}class g3 extends je{constructor(e,t,r){super(e,t,r),this.key=Q.fromName(r.referenceValue)}matches(e){const t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}}class w3 extends je{constructor(e,t){super(e,"in",t),this.keys=Ef("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class _3 extends je{constructor(e,t){super(e,"not-in",t),this.keys=Ef("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ef(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>Q.fromName(r.referenceValue))}class y3 extends je{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return os(t)&&mi(t.arrayValue,this.value)}}class b3 extends je{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&mi(this.value.arrayValue,t)}}class v3 extends je{constructor(e,t){super(e,"not-in",t)}matches(e){if(mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!mi(this.value.arrayValue,t)}}class E3 extends je{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!os(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>mi(this.value.arrayValue,r))}}/**
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
 */class Zo{constructor(e,t="asc"){this.field=e,this.dir=t}}function T3(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class rt{constructor(e,t,r,s,i,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new rt(e,0,re.min(),re.min(),re.min(),xt.empty(),0)}static newFoundDocument(e,t,r,s){return new rt(e,1,t,re.min(),r,s,0)}static newNoDocument(e,t){return new rt(e,2,t,re.min(),re.min(),xt.empty(),0)}static newUnknownDocument(e,t){return new rt(e,3,t,re.min(),re.min(),xt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class A3{constructor(e,t=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.de=null}}function Zh(n,e=null,t=[],r=[],s=null,i=null,o=null){return new A3(n,e,t,r,s,i,o)}function Tf(n){const e=ie(n);if(e.de===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ql(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ta(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>is(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>is(r)).join(",")),e.de=t}return e.de}function Af(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!T3(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!bf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Jh(n.startAt,e.startAt)&&Jh(n.endAt,e.endAt)}function gr(n){return!!n.isCorePipeline}function If(n){return!!n.path&&Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ra{constructor(e,t=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.fe=null,this.me=null,this.pe=null,this.startAt,this.endAt}}function I3(n,e,t,r,s,i,o,l){return new Ra(n,e,t,r,s,i,o,l)}function Vc(n){return new Ra(n)}function ed(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function x3(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function C3(n){return n.collectionGroup!==null}function ei(n){const e=ie(n);if(e.fe===null){e.fe=[];const t=new Set;for(const i of e.explicitOrderBy)e.fe.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Be(He.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.fe.push(new Zo(i,r))}),t.has(He.keyField().canonicalString())||e.fe.push(new Zo(He.keyField(),r))}return e.fe}function Zt(n){const e=ie(n);return e.me||(e.me=R3(e,ei(n))),e.me}function R3(n,e){if(n.limitType==="F")return Zh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Zo(s.field,i)});const t=n.endAt?new Jo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Jo(n.startAt.position,n.startAt.inclusive):null;return Zh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Xl(n,e,t){return new Ra(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function S3(n,e){return Af(Zt(n),Zt(e))&&n.limitType===e.limitType}function ti(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>vf(s)).join(", ")}]`),Ta(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>is(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>is(s)).join(",")),`Target(${r})`}(Zt(n))}; limitType=${n.limitType})`}function Sa(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of ei(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=Xh(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,ei(r),s)||r.endAt&&!function(o,l,c){const h=Xh(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,ei(r),s))}(n,e)}function Lc(n){return(e,t)=>{let r=!1;for(const s of ei(n)){const i=P3(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function P3(n,e,t){const r=n.field.isKeyField()?Q.comparator(e.key,t.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?bt(c,h):X(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return X(19790,{direction:n.dir})}}/**
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
 */var De,pe;function O3(n){switch(n){case M.OK:return X(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return X(15467,{code:n})}}function xf(n){if(n===void 0)return yn("GRPC error has no .code"),M.UNKNOWN;switch(n){case De.OK:return M.OK;case De.CANCELLED:return M.CANCELLED;case De.UNKNOWN:return M.UNKNOWN;case De.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case De.INTERNAL:return M.INTERNAL;case De.UNAVAILABLE:return M.UNAVAILABLE;case De.UNAUTHENTICATED:return M.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case De.NOT_FOUND:return M.NOT_FOUND;case De.ALREADY_EXISTS:return M.ALREADY_EXISTS;case De.PERMISSION_DENIED:return M.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case De.ABORTED:return M.ABORTED;case De.OUT_OF_RANGE:return M.OUT_OF_RANGE;case De.UNIMPLEMENTED:return M.UNIMPLEMENTED;case De.DATA_LOSS:return M.DATA_LOSS;default:return X(39323,{code:n})}}(pe=De||(De={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Lr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Dr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return tf(this.inner)}size(){return this.innerSize}}/**
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
 */const N3=new Ae(Q.comparator);function gt(){return N3}const Cf=new Ae(Q.comparator);function zr(...n){let e=Cf;for(const t of n)e=e.insert(t.key,t);return e}function Rf(n){let e=Cf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Vn(){return ni()}function Sf(){return ni()}function ni(){return new Lr(n=>n.toString(),(n,e)=>n.isEqual(e))}const D3=new Ae(Q.comparator),V3=new Be(Q.comparator);function he(...n){let e=V3;for(const t of n)e=e.add(t);return e}const L3=new Be(de);function M3(){return L3}/**
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
 */const F3=new Hn([4294967295,4294967295],0);function td(n){const e=B3().encode(n),t=new q2;return t.update(e),new Uint8Array(t.digest())}function nd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Hn([t,r],0),new Hn([s,i],0)]}class Mc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new zs(`Invalid padding: ${t}`);if(r<0)throw new zs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new zs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new zs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.ye=Hn.fromNumber(this.ge)}we(e,t,r){let s=e.add(t.multiply(Hn.fromNumber(r)));return s.compare(F3)===1&&(s=new Hn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=td(e),[r,s]=nd(t);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Mc(i,s,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const t=td(e),[r,s]=nd(t);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.ve(o)}}ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class zs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Li{constructor(e,t,r,s,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Mi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Li(re.min(),s,new Ae(de),gt(),gt(),he())}}class Mi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Mi(r,t,he(),he(),he())}}/**
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
 */class Po{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Pf{constructor(e,t){this.targetId=e,this.xe=t}}class kf{constructor(e,t,r=Fe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class rd{constructor(e){this.targetId=e,this.Ce=0,this.Fe=sd(),this.Oe=Fe.EMPTY_BYTE_STRING,this.Me=!1,this.Ne=!0}get current(){return this.Me}get resumeToken(){return this.Oe}get Le(){return this.Ce!==0}get Be(){return this.Ne}Ue(e){e.approximateByteSize()>0&&(this.Ne=!0,this.Oe=e)}ke(){let e=he(),t=he(),r=he();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:X(38017,{changeType:i})}}),new Mi(this.Oe,this.Me,e,t,r)}qe(){this.Ne=!1,this.Fe=sd()}$e(e,t){this.Ne=!0,this.Fe=this.Fe.insert(e,t)}Ke(e){this.Ne=!0,this.Fe=this.Fe.remove(e)}We(){this.Ce+=1}Qe(){this.Ce-=1,W(this.Ce>=0,3241,{Ce:this.Ce,targetId:this.targetId})}Ge(){this.Ne=!0,this.Me=!0}}const Fs="WatchChangeAggregator";class U3{constructor(e){this.ze=e,this.je=new Map,this.He=gt(),this.Je=mo(),this.Ye=gt(),this.Ze=mo(),this.Xe=new Ae(de)}et(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.tt(t,e.De):this.nt(t,e.key,e.De);for(const t of e.removedTargetIds)this.nt(t,e.key,e.De)}rt(e){this.forEachTarget(e,t=>{const r=this.je.get(t);if(r)switch(e.state){case 0:this.it(t)&&r.Ue(e.resumeToken);break;case 1:r.Qe(),r.Le||r.qe(),r.Ue(e.resumeToken);break;case 2:r.Qe(),r.Le||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.Ue(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.Ue(e.resumeToken));break;default:X(56790,{state:e.state})}else j(Fs,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,s)=>{this.it(s)&&t(s)})}_t(e){var t;return gr(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:If(e)}ot(e){const t=e.targetId,r=e.xe.count,s=this.ut(t);if(s){const i=s.target;if(this._t(i))if(r===0){const o=new Q(gr(i)?_e.fromString(i.getPipelineDocuments()[0]):i.path);this.nt(t,o,rt.newNoDocument(o,re.min()))}else W(r===1,20013,"Single document existence filter with count: "+r);else{const o=this.ct(t);if(o!==r){const l=this.lt(e),c=l?this.Et(l,e,o):1;if(c!==0){this.st(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Xe=this.Xe.insert(t,h)}}}}}lt(e){const t=e.xe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,l;try{o=Zn(r).toUint8Array()}catch(c){if(c instanceof nf)return $t("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Mc(o,s,i)}catch(c){return $t(c instanceof zs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}Et(e,t,r){return t.xe.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.ze.Tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.nt(t,i,null),s++)}),s}Rt(e){const t=new Map;this.je.forEach((i,o)=>{const l=this.ut(o);if(l){if(i.current&&this._t(l.target)){const c=gr(l.target)?_e.fromString(l.target.getPipelineDocuments()[0]):l.target.path,h=new Q(c);this.It(h).has(o)||this.At(o,h)||this.nt(o,h,rt.newNoDocument(h,e))}i.Be&&(t.set(o,i.ke()),i.qe())}});let r=he();this.Ze.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.ut(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e)),this.Ye.forEach((i,o)=>o.setReadTime(e));const s=new Li(e,t,this.Xe,this.He,this.Ye,r);return this.He=gt(),this.Je=mo(),this.Ye=gt(),this.Ze=mo(),this.Xe=new Ae(de),s}tt(e,t){const r=this.je.get(e);if(!r||!this.it(e))return void j(Fs,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.At(e,t.key)?2:0;r.$e(t.key,s),gr(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t.key,t):this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.Ze=this.Ze.insert(t.key,this.Vt(t.key).add(e))}nt(e,t,r){const s=this.je.get(e);s&&this.it(e)?(this.At(e,t)?s.$e(t,1):s.Ke(t),this.Ze=this.Ze.insert(t,this.Vt(t).delete(e)),this.Ze=this.Ze.insert(t,this.Vt(t).add(e)),r&&(gr(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t,r):this.He=this.He.insert(t,r))):j(Fs,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.je.delete(e)}ct(e){const t=this.je.get(e);if(!t)return 0;const r=t.ke();return this.ze.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}We(e){let t=this.je.get(e);t||(j(Fs,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new rd(e),this.je.set(e,t)),t.We()}Vt(e){let t=this.Ze.get(e);return t||(t=new Be(de),this.Ze=this.Ze.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Be(de),this.Je=this.Je.insert(e,t)),t}it(e){const t=this.ut(e)!==null;return t||j(Fs,"Detected inactive target",e),t}ut(e){const t=this.je.get(e);return t===void 0||t.Le?null:this.ze.dt(e)}st(e){this.je.set(e,new rd(e)),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.nt(e,t,null)})}At(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function mo(){return new Ae(Q.comparator)}function sd(){return new Ae(Q.comparator)}const $3={asc:"ASCENDING",desc:"DESCENDING"},H3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},j3={and:"AND",or:"OR"};class q3{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Jl(n,e){return n.useProto3Json||Ta(e)?e:{value:e}}function ea(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bc(n){const e=Jn(n);return new Te(e.seconds,e.nanos)}function Of(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ko(n,e){return ea(n,e.toTimestamp())}function en(n){return W(!!n,49232),re.fromTimestamp(Bc(n))}function Fc(n,e){return Zl(n,e).canonicalString()}function Zl(n,e){const t=function(s){return new _e(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Nf(n){const e=_e.fromString(n);return W(Bf(e),10190,{key:e.toString()}),e}function ta(n,e){return Fc(n.databaseId,e.path)}function Cl(n,e){const t=Nf(e);if(t.get(1)!==n.databaseId.projectId)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Q(Vf(t))}function Df(n,e){return Fc(n.databaseId,e)}function z3(n){const e=Nf(n);return e.length===4?_e.emptyPath():Vf(e)}function ec(n){return new _e(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Vf(n){return W(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function id(n,e,t){return{name:ta(n,e),fields:t.value.mapValue.fields}}function G3(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:X(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,p){return h.useProto3Json?(W(p===void 0||typeof p=="string",58123),Fe.fromBase64String(p||"")):(W(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Fe.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const p=h.code===void 0?M.UNKNOWN:xf(h.code);return new G(p,h.message||"")}(o);t=new kf(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Cl(n,r.document.name),i=en(r.document.updateTime),o=r.document.createTime?en(r.document.createTime):re.min(),l=new xt({mapValue:{fields:r.document.fields}}),c=rt.newFoundDocument(s,i,o,l),h=r.targetIds||[],p=r.removedTargetIds||[];t=new Po(h,p,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Cl(n,r.document),i=r.readTime?en(r.readTime):re.min(),o=rt.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Po([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Cl(n,r.document),i=r.removedTargetIds||[];t=new Po([],i,s,null)}else{if(!("filter"in e))return X(11601,{ft:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new k3(s,i),l=r.targetId;t=new Pf(l,o)}}return t}function W3(n,e){let t;if(e instanceof Vi)t={update:id(n,e.key,e.value)};else if(e instanceof Dc)t={delete:ta(n,e.key)};else if(e instanceof Vr)t={update:id(n,e.key,e.data),updateMask:r9(e.fieldMask)};else{if(!(e instanceof p3))return X(16599,{gt:e.type});t={verify:ta(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Ko)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof gi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof wi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof _i)return{fieldPath:o.field.canonicalString(),increment:l.Re};if(l instanceof Yo)return{fieldPath:o.field.canonicalString(),minimum:l.Re};if(l instanceof Qo)return{fieldPath:o.field.canonicalString(),maximum:l.Re};throw X(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ko(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X(27497)}(n,e.precondition)),t}function K3(n,e){return n&&n.length>0?(W(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?en(s.updateTime):en(i);return o.isEqual(re.min())&&(o=en(i)),new h3(o,s.transformResults||[])}(t,e))):[]}function Y3(n,e){return{documents:[Df(n,e.path)]}}function Q3(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Df(n,s);const i=function(h){if(h.length!==0)return Mf(nn.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(p=>function(E){return{field:Gr(E.field),direction:e9(E.dir)}}(p))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Jl(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{yt:t,parent:s}}function X3(n){let e=z3(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){W(r===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(m){const E=Lf(m);return E instanceof nn&&yf(E)?E.getFilters():[E]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(E=>function(P){return new Zo(Wr(P.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(E))}(t.orderBy));let l=null;t.limit&&(l=function(m){let E;return E=typeof m=="object"?m.value:m,Ta(E)?null:E}(t.limit));let c=null;t.startAt&&(c=function(m){const E=!!m.before,C=m.values||[];return new Jo(C,E)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const E=!m.before,C=m.values||[];return new Jo(C,E)}(t.endAt)),I3(e,s,o,i,l,"F",c,h)}function J3(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Z3(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(n))}}}}function Lf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Wr(t.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Wr(t.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Wr(t.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Wr(t.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}}(n):n.fieldFilter!==void 0?function(t){return je.create(Wr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return nn.create(t.compositeFilter.filters.map(r=>Lf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X(1026)}}(t.compositeFilter.op))}(n):X(30097,{filter:n})}function e9(n){return $3[n]}function t9(n){return H3[n]}function n9(n){return j3[n]}function Gr(n){return{fieldPath:n.canonicalString()}}function Wr(n){return He.fromServerFormat(n.fieldPath)}function Mf(n){return n instanceof je?function(t){if(t.op==="=="){if(vt(t.value))return{unaryFilter:{field:Gr(t.field),op:"IS_NAN"}};if(Ct(t.value))return{unaryFilter:{field:Gr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vt(t.value))return{unaryFilter:{field:Gr(t.field),op:"IS_NOT_NAN"}};if(Ct(t.value))return{unaryFilter:{field:Gr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gr(t.field),op:t9(t.op),value:t.value}}}(n):n instanceof nn?function(t){const r=t.getFilters().map(s=>Mf(s));return r.length===1?r[0]:{compositeFilter:{op:n9(t.op),filters:r}}}(n):X(54877,{filter:n})}function r9(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Bf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Ff(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function yi(n,e){const t={fields:{}};return e.forEach((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=r._toProto(n)}),{mapValue:t}}function Uf(n){return{stringValue:n}}/**
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
 */function Pa(n){return new q3(n,!0)}/**
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
 */class Nt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nt(Fe.fromBase64String(e))}catch(t){throw new G(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Nt(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Nt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ni(e,Nt._jsonSchema))return Nt.fromBase64String(e.bytes)}}Nt._jsonSchemaVersion="firestore/bytes/1.0",Nt._jsonSchema={type:Le("string",Nt._jsonSchemaVersion),bytes:Le("string")};/**
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
 */class Uc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new G(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function s9(){return new Uc(Gt)}/**
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
 */class $f{constructor(e){this._methodName=e}}/**
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
 */class tn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new G(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new G(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:tn._jsonSchemaVersion}}static fromJSON(e){if(Ni(e,tn._jsonSchema))return new tn(e.latitude,e.longitude)}}function Hf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */tn._jsonSchemaVersion="firestore/geoPoint/1.0",tn._jsonSchema={type:Le("string",tn._jsonSchemaVersion),latitude:Le("number"),longitude:Le("number")};class i9{bt(e){}shutdown(){}}/**
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
 */const od="ConnectivityMonitor";class ad{constructor(){this.vt=()=>this.St(),this.Dt=()=>this.xt(),this.Ct=[],this.Ft()}bt(e){this.Ct.push(e)}shutdown(){window.removeEventListener("online",this.vt),window.removeEventListener("offline",this.Dt)}Ft(){window.addEventListener("online",this.vt),window.addEventListener("offline",this.Dt)}St(){j(od,"Network connectivity changed: AVAILABLE");for(const e of this.Ct)e(0)}xt(){j(od,"Network connectivity changed: UNAVAILABLE");for(const e of this.Ct)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let go=null;function tc(){return go===null?go=function(){return 268435456+Math.round(2147483648*Math.random())}():go++,"0x"+go.toString(16)}/**
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
 */const Rl="RestConnection",o9={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class a9{get Ot(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Mt=t+"://"+e.host,this.Nt=`projects/${r}/databases/${s}`,this.Lt=this.databaseId.database===Go?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Bt(e,t,r,s,i){const o=tc(),l=this.Ut(e,t.toUriEncodedString());j(Rl,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Nt,"x-goog-request-params":this.Lt};this.kt(c,s,i);const{host:h}=new URL(l),p=kr(h);return this.qt(e,l,c,r,p).then(m=>(j(Rl,`Received RPC '${e}' ${o}: `,m),m),m=>{throw $t(Rl,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}$t(e,t,r,s,i,o){return this.Bt(e,t,r,s,i)}kt(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Ut(e,t){const r=o9[e];let s=`${this.Mt}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class l9{constructor(e){this.Kt=e.Kt,this.Wt=e.Wt}Qt(e){this.Gt=e}zt(e){this.jt=e}Ht(e){this.Jt=e}onMessage(e){this.Yt=e}close(){this.Wt()}send(e){this.Kt(e)}Zt(){this.Gt()}Xt(){this.jt()}en(e){this.Jt(e)}tn(e){this.Yt(e)}}/**
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
 */const Ze="WebChannelConnection",Us=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Zr extends a9{constructor(e){super(e),this.nn=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static rn(){if(!Zr.sn){const e=K2();Us(e,W2.STAT_EVENT,t=>{t.stat===zl.PROXY?j(Ze,"STAT_EVENT: detected buffering proxy"):t.stat===zl.NOPROXY&&j(Ze,"STAT_EVENT: detected no buffering proxy")}),Zr.sn=!0}}qt(e,t,r,s,i){const o=tc();return new Promise((l,c)=>{const h=new z2;h.setWithCredentials(!0),h.listenOnce(G2.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Co.NO_ERROR:const m=h.getResponseJson();j(Ze,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Co.TIMEOUT:j(Ze,`RPC '${e}' ${o} timed out`),c(new G(M.DEADLINE_EXCEEDED,"Request time out"));break;case Co.HTTP_ERROR:const E=h.getStatus();if(j(Ze,`RPC '${e}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let C=h.getResponseJson();Array.isArray(C)&&(C=C[0]);const P=C==null?void 0:C.error;if(P&&P.status&&P.message){const F=function(q){const J=q.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(J)>=0?J:M.UNKNOWN}(P.status);c(new G(F,P.message))}else c(new G(M.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new G(M.UNAVAILABLE,"Connection failed."));break;default:X(9055,{_n:e,streamId:o,an:h.getLastErrorCode(),un:h.getLastError()})}}finally{j(Ze,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(s);j(Ze,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",p,r,15)})}cn(e,t,r){const s=tc(),i=[this.Mt,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.kt(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const h=i.join("");j(Ze,`Creating RPC '${e}' stream ${s}: ${h}`,l);const p=o.createWebChannel(h,l);this.En(p);let m=!1,E=!1;const C=new l9({Kt:P=>{E?j(Ze,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(m||(j(Ze,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),j(Ze,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},Wt:()=>p.close()});return Us(p,qs.EventType.OPEN,()=>{E||(j(Ze,`RPC '${e}' stream ${s} transport opened.`),C.Zt())}),Us(p,qs.EventType.CLOSE,()=>{E||(E=!0,j(Ze,`RPC '${e}' stream ${s} transport closed`),C.en(),this.hn(p))}),Us(p,qs.EventType.ERROR,P=>{E||(E=!0,$t(Ze,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),C.en(new G(M.UNAVAILABLE,"The operation could not be completed")))}),Us(p,qs.EventType.MESSAGE,P=>{var F;if(!E){const N=P.data[0];W(!!N,16349);const q=N,J=(q==null?void 0:q.error)||((F=q[0])==null?void 0:F.error);if(J){j(Ze,`RPC '${e}' stream ${s} received error:`,J);const B=J.status;let H=function(v){const _=De[v];if(_!==void 0)return xf(_)}(B),oe=J.message;B==="NOT_FOUND"&&oe.includes("database")&&oe.includes("does not exist")&&oe.includes(this.databaseId.database)&&$t(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),H===void 0&&(H=M.INTERNAL,oe="Unknown error status: "+B+" with message "+J.message),E=!0,C.en(new G(H,oe)),p.close()}else j(Ze,`RPC '${e}' stream ${s} received:`,N),C.tn(N)}}),Zr.rn(),setTimeout(()=>{C.Xt()},0),C}terminate(){this.nn.forEach(e=>e.close()),this.nn=[]}En(e){this.nn.push(e)}hn(e){this.nn=this.nn.filter(t=>t===e)}kt(e,t,r){super.kt(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Y2()}}/**
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
 */function c9(n){return new Zr(n)}Zr.sn=!1;class jf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Tn=e,this.timerId=t,this.Pn=r,this.Rn=s,this.In=i,this.An=0,this.Vn=null,this.dn=Date.now(),this.reset()}reset(){this.An=0}fn(){this.An=this.In}mn(e){this.cancel();const t=Math.floor(this.An+this.pn()),r=Math.max(0,Date.now()-this.dn),s=Math.max(0,t-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.An} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Vn=this.Tn.enqueueAfterDelay(this.timerId,s,()=>(this.dn=Date.now(),e())),this.An*=this.Rn,this.An<this.Pn&&(this.An=this.Pn),this.An>this.In&&(this.An=this.In)}gn(){this.Vn!==null&&(this.Vn.skipDelay(),this.Vn=null)}cancel(){this.Vn!==null&&(this.Vn.cancel(),this.Vn=null)}pn(){return(Math.random()-.5)*this.An}}/**
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
 */const ld="PersistentStream";class qf{constructor(e,t,r,s,i,o,l,c){this.Tn=e,this.yn=r,this.wn=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.bn=0,this.vn=null,this.Sn=null,this.stream=null,this.Dn=0,this.xn=new jf(e,t)}Cn(){return this.state===1||this.state===5||this.Fn()}Fn(){return this.state===2||this.state===3}start(){this.Dn=0,this.state!==4?this.auth():this.On()}async stop(){this.Cn()&&await this.close(0)}Mn(){this.state=0,this.xn.reset()}Nn(){this.Fn()&&this.vn===null&&(this.vn=this.Tn.enqueueAfterDelay(this.yn,6e4,()=>this.Ln()))}Bn(e){this.Un(),this.stream.send(e)}async Ln(){if(this.Fn())return this.close(0)}Un(){this.vn&&(this.vn.cancel(),this.vn=null)}kn(){this.Sn&&(this.Sn.cancel(),this.Sn=null)}async close(e,t){this.Un(),this.kn(),this.xn.cancel(),this.bn++,e!==4?this.xn.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(yn(t.toString()),yn("Using maximum backoff delay to prevent overloading the backend."),this.xn.fn()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ht(t)}qn(){}auth(){this.state=1;const e=this.$n(this.bn),t=this.bn;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.bn===t&&this.Kn(r,s)},r=>{e(()=>{const s=new G(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Wn(s)})})}Kn(e,t){const r=this.$n(this.bn);this.stream=this.Qn(e,t),this.stream.Qt(()=>{r(()=>this.listener.Qt())}),this.stream.zt(()=>{r(()=>(this.state=2,this.Sn=this.Tn.enqueueAfterDelay(this.wn,1e4,()=>(this.Fn()&&(this.state=3),Promise.resolve())),this.listener.zt()))}),this.stream.Ht(s=>{r(()=>this.Wn(s))}),this.stream.onMessage(s=>{r(()=>++this.Dn==1?this.Gn(s):this.onNext(s))})}On(){this.state=5,this.xn.mn(async()=>{this.state=0,this.start()})}Wn(e){return j(ld,`close with error: ${e}`),this.stream=null,this.close(4,e)}$n(e){return t=>{this.Tn.enqueueAndForget(()=>this.bn===e?t():(j(ld,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class u9 extends qf{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}Qn(e,t){return this.connection.cn("Listen",e,t)}Gn(e){return this.onNext(e)}onNext(e){this.xn.reset();const t=G3(this.serializer,e),r=function(i){if(!("targetChange"in i))return re.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?en(o.readTime):re.min()}(e);return this.listener.zn(t,r)}jn(e){const t={};t.database=ec(this.serializer),t.addTarget=function(i,o){let l;const c=o.target;if(l=gr(c)?{pipelineQuery:Z3(i,c)}:If(c)?{documents:Y3(i,c)}:{query:Q3(i,c).yt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Of(i,o.resumeToken);const h=Jl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(re.min())>0){l.readTime=ea(i,o.snapshotVersion.toTimestamp());const h=Jl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=J3(this.serializer,e);r&&(t.labels=r),this.Bn(t)}Hn(e){const t={};t.database=ec(this.serializer),t.removeTarget=e,this.Bn(t)}}class h9 extends qf{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Jn(){return this.Dn>0}start(){this.lastStreamToken=void 0,super.start()}qn(){this.Jn&&this.Yn([])}Qn(e,t){return this.connection.cn("Write",e,t)}Gn(e){return W(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0,55816),this.listener.Zn()}onNext(e){W(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.xn.reset();const t=K3(e.writeResults,e.commitTime),r=en(e.commitTime);return this.listener.Xn(r,t)}er(){const e={};e.database=ec(this.serializer),this.Bn(e)}Yn(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>W3(this.serializer,r))};this.Bn(t)}}/**
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
 */class d9{}class f9 extends d9{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.tr=!1}nr(){if(this.tr)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.")}Bt(e,t,r,s){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Bt(e,Zl(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(M.UNKNOWN,i.toString())})}$t(e,t,r,s,i){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.$t(e,Zl(t,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(M.UNKNOWN,o.toString())})}terminate(){this.tr=!0,this.connection.terminate()}}function p9(n,e,t,r){return new f9(n,e,t,r)}/**
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
 */const m9="ComponentProvider",cd=new Map;function g9(n,e,t,r,s){return new s3(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Hf(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const ud={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},zf=41943040;class mt{static withCacheSize(e){return new mt(e,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}mt.DEFAULT_COLLECTION_PERCENTILE=10,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mt.DEFAULT=new mt(zf,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mt.DISABLED=new mt(-1,0,0);/**
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
 */const hd="LruGarbageCollector",w9=1048576;function dd([n,e],[t,r]){const s=de(n,t);return s===0?de(e,r):s}class _9{constructor(e){this.rr=e,this.buffer=new Be(dd),this.ir=0}sr(){return++this.ir}_r(e){const t=[e,this.sr()];if(this.buffer.size<this.rr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();dd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class y9{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.ur(6e4)}stop(){this.ar&&(this.ar.cancel(),this.ar=null)}get started(){return this.ar!==null}ur(e){j(hd,`Garbage collection scheduled in ${e}ms`),this.ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){fs(t)?j(hd,"Ignoring IndexedDB error during garbage collection: ",t):await ds(t)}await this.ur(3e5)})}}class b9{constructor(e,t){this.cr=e,this.params=t}calculateTargetCount(e,t){return this.cr.lr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return L.resolve(Ea.ce);const r=new _9(t);return this.cr.forEachTarget(e,s=>r._r(s.sequenceNumber)).next(()=>this.cr.Er(e,s=>r._r(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.cr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.cr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(ud)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ud):this.hr(e,t))}getCacheSize(e){return this.cr.getCacheSize(e)}hr(e,t){let r,s,i,o,l,c,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),qr()<=fe.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(h-c)+`ms
Total Duration: ${h-p}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function v9(n,e){return new b9(n,e)}/**
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
 */const Gf="firestore.googleapis.com",fd=!0;class pd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new G(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Gf,this.ssl=fd}else this.host=e.host,this.ssl=e.ssl??fd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=zf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<w9)throw new G(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}z7("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hf(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ka{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new V7;switch(r.type){case"firstParty":return new F7(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=cd.get(t);r&&(j(m9,"Removing Datastore"),cd.delete(t),r.terminate())}(this),Promise.resolve()}}function E9(n,e,t,r={}){var h;n=Qn(n,ka);const s=kr(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&mc(`https://${l}`),i.host!==Gf&&i.host!==l&&$t("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!Tr(c,o)&&(n._setSettings(c),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=nt.MOCK_USER;else{p=r2(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new G(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new nt(E)}n._authCredentials=new L7(new J2(p,m))}}/**
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
 */class Oa{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Oa(this.firestore,e,this._query)}}class Me{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}toJSON(){return{type:Me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ni(t,Me._jsonSchema))return new Me(e,r||null,new Q(_e.fromString(t.referencePath)))}}Me._jsonSchemaVersion="firestore/documentReference/1.0",Me._jsonSchema={type:Le("string",Me._jsonSchemaVersion),referencePath:Le("string")};class jn extends Oa{constructor(e,t,r){super(e,t,Vc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new Q(e))}withConverter(e){return new jn(this.firestore,e,this._path)}}function md(n,e,...t){if(n=ze(n),Z2("collection","path",e),n instanceof ka){const r=_e.fromString(e,...t);return Uh(r),new jn(n,null,r)}{if(!(n instanceof Me||n instanceof jn))throw new G(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(_e.fromString(e,...t));return Uh(r),new jn(n.firestore,null,r)}}function qn(n,e,...t){if(n=ze(n),arguments.length===1&&(e=Rc.newId()),Z2("doc","path",e),n instanceof ka){const r=_e.fromString(e,...t);return Fh(r),new Me(n,null,new Q(r))}{if(!(n instanceof Me||n instanceof jn))throw new G(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(_e.fromString(e,...t));return Fh(r),new Me(n.firestore,n instanceof jn?n.converter:null,new Q(r))}}/**
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
 */class wt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:wt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ni(e,wt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new wt(e.vectorValues);throw new G(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}wt._jsonSchemaVersion="firestore/vectorValue/1.0",wt._jsonSchema={type:Le("string",wt._jsonSchemaVersion),vectorValues:Le("object")};/**
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
 */const T9=/^__.*__$/;class A9{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Vr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Vi(e,this.data,t,this.fieldTransforms)}}function Wf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{dataSource:n})}}class $c{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new $c({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return na(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Wf(this.dataSource)&&T9.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class I9{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Pa(e)}createContext(e,t,r,s=!1){return new $c({dataSource:e,methodName:t,targetDoc:r,path:He.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function x9(n){const e=n._freezeSettings(),t=Pa(n._databaseId);return new I9(n._databaseId,!!e.ignoreUndefinedProperties,t)}function C9(n,e,t,r,s,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);Qf("Data must be an object, but it was:",o,r);const l=Kf(r,o);let c,h;if(i.merge)c=new Ft(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const E=Na(e,m,t);if(!o.contains(E))throw new G(M.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);P9(p,E)||p.push(E)}c=new Ft(p),h=o.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,h=o.fieldTransforms;return new A9(new xt(l),c,h)}function bi(n,e,t){if(Yf(n=ze(n)))return Qf("Unsupported field value:",e,n),Kf(n,e);if(n instanceof $f)return function(s,i){if(!Wf(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){const o=[];let l=0;for(const c of s){let h=bi(c,i.childContextForArray(l));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),l++}return{arrayValue:{values:o}}}(n,e)}return function(s,i,o){if((s=ze(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Oc(i.serializer,s,o);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Te.fromDate(s);return{timestampValue:ea(i.serializer,l)}}if(s instanceof Te){const l=new Te(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ea(i.serializer,l)}}if(s instanceof tn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Nt)return{bytesValue:Of(i.serializer,s._byteString)};if(s instanceof Me){const l=i.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw i.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Fc(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof wt)return function(c,h){const p=c instanceof wt?c.toArray():c;return{mapValue:{fields:{[lf]:{stringValue:cf},[pi]:{arrayValue:{values:p.map(E=>{if(typeof E!="number")throw h.createError("VectorValues must only contain numeric values.");return Ia(h.serializer,E)})}}}}}}(s,i);if(Ff(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Sc(s)}`)}(n,e,t)}function Kf(n,e){const t={};return tf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Dr(n,(r,s)=>{const i=bi(s,e.childContextForField(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Yf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Te||n instanceof tn||n instanceof Nt||n instanceof Me||n instanceof $f||n instanceof wt||Ff(n))}function Qf(n,e,t){if(!Yf(t)||!Oi(t)){const r=Sc(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function Na(n,e,t){if((e=ze(e))instanceof Uc)return e._internalPath;if(typeof e=="string")return S9(n,e);throw na("Field path arguments must be of type string or ",n,!1,void 0,t)}const R9=new RegExp("[~\\*/\\[\\]]");function S9(n,e,t){if(e.search(R9)>=0)throw na(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Uc(...e.split("."))._internalPath}catch{throw na(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function na(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new G(M.INVALID_ARGUMENT,l+n+c)}function P9(n,e){return n.some(t=>t.isEqual(e))}function Xf(n){return typeof n._readUserData=="function"}/**
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
 */class ot{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=xt.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const o=e[s];let l;i.nestedOptions&&Oi(o)?l={mapValue:{fields:new ot(i.nestedOptions).getOptionsProto(t,o)}}:o&&(l=bi(o,t)??void 0),l&&r.set(He.fromServerFormat(i.serverName),l)}}return r}getOptionsProto(e,t,r){const s=this._getKnownOptions(t,e);if(r){const i=new Map(n3(r,(o,l)=>[He.fromServerFormat(l),o!==void 0?bi(o,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
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
 */function k9(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!Oi(t.fields))}(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(n.pipelineValue)))}function O9(n){return new wt(n)}/**
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
 */function U(n){let e;return n instanceof Mr?n:(e=Oi(n)?M9(n):n instanceof Array?B9(n):Jf(n,void 0),e)}function Sl(n){if(n instanceof Mr)return n;if(n instanceof wt)return vi(n);if(Array.isArray(n))return vi(O9(n));throw new Error("Unsupported value: "+typeof n)}function Hc(n){return Z7(n)?Oo(n):U(n)}class Mr{constructor(){this._protoValueType="ProtoValue"}add(e){return new D("add",[this,U(e)],"add")}asBoolean(){if(this instanceof tr)return this;if(this instanceof ms)return new e0(this);if(this instanceof ps)return new L9(this);if(this instanceof D)return new Zf(this);throw new G("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new D("subtract",[this,U(e)],"subtract")}multiply(e){return new D("multiply",[this,U(e)],"multiply")}divide(e){return new D("divide",[this,U(e)],"divide")}mod(e){return new D("mod",[this,U(e)],"mod")}equal(e){return new D("equal",[this,U(e)],"equal").asBoolean()}notEqual(e){return new D("not_equal",[this,U(e)],"notEqual").asBoolean()}lessThan(e){return new D("less_than",[this,U(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new D("less_than_or_equal",[this,U(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new D("greater_than",[this,U(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new D("greater_than_or_equal",[this,U(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map(s=>U(s));return new D("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new D("array_contains",[this,U(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Gs(e.map(U),"arrayContainsAll"):e;return new D("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Gs(e.map(U),"arrayContainsAny"):e;return new D("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new D("array_reverse",[this])}arrayLength(){return new D("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Gs(e.map(U),"equalAny"):e;return new D("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Gs(e.map(U),"notEqualAny"):e;return new D("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new D("exists",[this],"exists").asBoolean()}charLength(){return new D("char_length",[this],"charLength")}like(e){return new D("like",[this,U(e)],"like").asBoolean()}regexContains(e){return new D("regex_contains",[this,U(e)],"regexContains").asBoolean()}regexFind(e){return new D("regex_find",[this,U(e)],"regexFind")}regexFindAll(e){return new D("regex_find_all",[this,U(e)],"regexFindAll")}regexMatch(e){return new D("regex_match",[this,U(e)],"regexMatch").asBoolean()}stringContains(e){return new D("string_contains",[this,U(e)],"stringContains").asBoolean()}startsWith(e){return new D("starts_with",[this,U(e)],"startsWith").asBoolean()}endsWith(e){return new D("ends_with",[this,U(e)],"endsWith").asBoolean()}toLower(){return new D("to_lower",[this],"toLower")}toUpper(){return new D("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(U(e)),new D("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(U(e)),new D("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(U(e)),new D("rtrim",t,"rtrim")}type(){return new D("type",[this])}isType(e){return new D("is_type",[this,vi(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(U);return new D("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new D("string_index_of",[this,U(e)],"stringIndexOf")}stringRepeat(e){return new D("string_repeat",[this,U(e)],"stringRepeat")}stringReplaceAll(e,t){return new D("string_replace_all",[this,U(e),U(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new D("string_replace_one",[this,U(e),U(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(U);return new D("concat",[this,...r],"concat")}reverse(){return new D("reverse",[this],"reverse")}arrayFilter(e,t){return new D("array_filter",[this,U(e),t],"arrayFilter")}arrayTransform(e,t){return new D("array_transform",[this,U(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new D("array_transform",[this,U(e),U(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,U(e)];return t!==void 0&&r.push(U(t)),new D("array_slice",r,"arraySlice")}arrayFirst(){return new D("array_first",[this],"arrayFirst")}arrayFirstN(e){return new D("array_first_n",[this,U(e)],"arrayFirstN")}arrayLast(){return new D("array_last",[this],"arrayLast")}arrayLastN(e){return new D("array_last_n",[this,U(e)],"arrayLastN")}arrayMaximum(){return new D("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new D("maximum_n",[this,U(e)],"arrayMaximumN")}arrayMinimum(){return new D("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new D("minimum_n",[this,U(e)],"arrayMinimumN")}arrayIndexOf(e){return new D("array_index_of",[this,U(e),U("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new D("array_index_of",[this,U(e),U("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new D("array_index_of_all",[this,U(e)],"arrayIndexOfAll")}byteLength(){return new D("byte_length",[this],"byteLength")}ceil(){return new D("ceil",[this])}floor(){return new D("floor",[this])}abs(){return new D("abs",[this])}exp(){return new D("exp",[this])}mapGet(e){return new D("map_get",[this,vi(e)],"mapGet")}mapSet(e,t,...r){const s=[this,U(e),U(t),...r.map(U)];return new D("map_set",s,"mapSet")}mapKeys(){return new D("map_keys",[this],"mapKeys")}mapValues(){return new D("map_values",[this],"mapValues")}mapEntries(){return new D("map_entries",[this],"mapEntries")}getField(e){return new D("get_field",[this,U(e)],"get_field")}count(){return Tt._create("count",[this],"count")}sum(){return Tt._create("sum",[this],"sum")}average(){return Tt._create("average",[this],"average")}minimum(){return Tt._create("minimum",[this],"minimum")}maximum(){return Tt._create("maximum",[this],"maximum")}first(){return Tt._create("first",[this],"first")}last(){return Tt._create("last",[this],"last")}arrayAgg(){return Tt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return Tt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return Tt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new D("maximum",[this,...r.map(U)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new D("minimum",[this,...r.map(U)],"minimum")}vectorLength(){return new D("vector_length",[this],"vectorLength")}cosineDistance(e){return new D("cosine_distance",[this,Sl(e)],"cosineDistance")}dotProduct(e){return new D("dot_product",[this,Sl(e)],"dotProduct")}euclideanDistance(e){return new D("euclidean_distance",[this,Sl(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new D("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new D("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new D("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new D("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new D("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new D("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new D("timestamp_add",[this,U(e),U(t)],"timestampAdd")}timestampSubtract(e,t){return new D("timestamp_subtract",[this,U(e),U(t)],"timestampSubtract")}timestampDiff(e,t){return new D("timestamp_diff",[this,Hc(e),U(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,U(e)];return t&&r.push(U(t)),new D("timestamp_extract",r,"timestampExtract")}documentId(){return new D("document_id",[this],"documentId")}parent(){return new D("parent",[this],"parent")}substring(e,t){const r=U(e);return new D("substring",t===void 0?[this,r]:[this,r,U(t)],"substring")}arrayGet(e){return new D("array_get",[this,U(e)],"arrayGet")}isError(){return new D("is_error",[this],"isError").asBoolean()}ifError(e){const t=new D("if_error",[this,U(e)],"ifError");return e instanceof tr?t.asBoolean():t}isAbsent(){return new D("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new D("map_remove",[this,U(e)],"mapRemove")}mapMerge(e,...t){const r=U(e),s=t.map(U);return new D("map_merge",[this,r,...s],"mapMerge")}pow(e){return new D("pow",[this,U(e)])}trunc(e){return e===void 0?new D("trunc",[this]):new D("trunc",[this,U(e)],"trunc")}round(e){return e===void 0?new D("round",[this]):new D("round",[this,U(e)],"round")}collectionId(){return new D("collection_id",[this])}length(){return new D("length",[this])}ln(){return new D("ln",[this])}sqrt(){return new D("sqrt",[this])}stringReverse(){return new D("string_reverse",[this])}ifAbsent(e){return new D("if_absent",[this,U(e)],"ifAbsent")}ifNull(e){return new D("if_null",[this,U(e)],"ifNull")}coalesce(e,...t){return new D("coalesce",[this,U(e),...t.map(U)],"coalesce")}join(e){return new D("join",[this,U(e)],"join")}log10(){return new D("log10",[this])}arraySum(){return new D("sum",[this])}split(e){return new D("split",[this,U(e)])}timestampTruncate(e,t){const r=[this,U(e)];return t&&r.push(U(t)),new D("timestamp_trunc",r)}ascending(){return F9(this)}descending(){return U9(this)}as(e){return new D9(this,e,"as")}}class Tt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const s=new Tt(e,t);return s._methodName=r,s}as(e){return new N9(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class N9{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class D9{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Gs extends Mr{constructor(e,t){super(),this.Rr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.Rr.map(t=>t._toProto(e))}}}_readUserData(e){this.Rr.forEach(t=>t._readUserData(e))}}class ps extends Mr{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new D("geo_distance",[this,U(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Oo(n){return V9(n,"field")}function V9(n,e){return new ps(typeof n=="string"?Gt===n?s9()._internalPath:Na("field",n):n._internalPath,e)}class ms extends Mr{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new ms(e,void 0);return t._protoValue=e,t}_toProto(e){return W(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,k9(this._protoValue)||(this._protoValue=bi(this.value,e))}}function vi(n,e){return Jf(n,"constant")}function Jf(n,e){const t=new ms(n,e);return typeof n=="boolean"?new e0(t):t}class D extends Mr{constructor(e,t,r,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new ot({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(r=>r._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class tr extends Mr{get _methodName(){return this._expr._methodName}countIf(){return Tt._create("count_if",[this],"countIf")}not(){return new D("not",[this],"not").asBoolean()}conditional(e,t){return new D("conditional",[this,e,t],"conditional")}ifError(e){const t=U(e),r=new D("if_error",[this,t],"ifError");return t instanceof tr?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class Zf extends tr{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class e0 extends tr{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class L9 extends tr{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function M9(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];t.push(vi(r)),t.push(U(s))}return new D("map",t,"map")}function B9(n){return function(t,r){return new D("array",t.map(s=>U(s)),r)}(n,"array")}function F9(n){return new t0(Hc(n),"ascending","ascending")}function U9(n){return new t0(Hc(n),"descending","descending")}class t0{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:Uf(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
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
 */class Pt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class n0 extends Pt{get _name(){return"add_fields"}get _optionsUtil(){return new ot({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[yi(e,this.fields)]}}_readUserData(e){super._readUserData(e),nr(this.fields,e)}}class r0 extends Pt{get _name(){return"aggregate"}get _optionsUtil(){return new ot({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[yi(e,this.accumulators),yi(e,this.groups)]}}_readUserData(e){super._readUserData(e),nr(this.groups,e),nr(this.accumulators,e)}}class s0 extends Pt{get _name(){return"distinct"}get _optionsUtil(){return new ot({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[yi(e,this.groups)]}}_readUserData(e){super._readUserData(e),nr(this.groups,e)}}class Da extends Pt{get _name(){return"collection"}get _optionsUtil(){return new ot({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Vr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Vr}]}}_readUserData(e){super._readUserData(e)}}class Va extends Pt{get _name(){return"collection_group"}get _optionsUtil(){return new ot({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class jc extends Pt{get _name(){return"database"}get _optionsUtil(){return new ot({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class qc extends Pt{get _name(){return"documents"}get _optionsUtil(){return new ot({})}constructor(e,t){if(super(t),!e||e.length===0)throw new G(M.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(r);if(s.size!==r.length)throw new G(M.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.dr=r,this.mr=s}_toProto(e){return{...super._toProto(e),args:this.dr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class La extends Pt{get _name(){return"where"}get _optionsUtil(){return new ot({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),nr(this.condition,e)}}class Rr extends Pt{get _name(){return"limit"}get _optionsUtil(){return new ot({})}constructor(e,t){W(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[Oc(e,this.limit)]}}}class gd extends Pt{get _name(){return"offset"}get _optionsUtil(){return new ot({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[Oc(e,this.offset)]}}}class $9 extends Pt{get _name(){return"select"}get _optionsUtil(){return new ot({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[yi(e,this.selections)]}}_readUserData(e){super._readUserData(e),nr(this.selections,e)}}class hn extends Pt{get _name(){return"sort"}get _optionsUtil(){return new ot({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),nr(this.orderings,e)}}class zc extends Pt{get _name(){return"replace_with"}get _optionsUtil(){return new ot({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),Uf(zc.pr)]}}_readUserData(e){super._readUserData(e),nr(this.map,e)}}zc.pr="full_replace";function nr(n,e){return Xf(n)?n._readUserData(e):Array.isArray(n)?n.forEach(t=>t._readUserData(e)):n instanceof Map?n.forEach(t=>t._readUserData(e)):Object.values(n).forEach(t=>t._readUserData(e)),n}// Copyright 2024 Google LLC* @license
class ht{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return Ma(this)}getPipelineCollectionGroup(){return Gc(this)}getPipelineCollectionId(){return H9(this)}getPipelineDocuments(){return nc(this)}getPipelineFlavor(){return function(t){let r="exact";return t.stages.forEach((s,i)=>{s._name!==s0.name&&s._name!==r0.name||(r="keyless"),s._name===$9.name&&r==="exact"&&(r="augmented"),s._name===n0.name&&i<t.stages.length-1&&r==="exact"&&(r="augmented")}),r}(this)}getPipelineSourceType(){return zn(this)}}function zn(n){const e=n.stages[0];return e instanceof Da||e instanceof Va||e instanceof jc||e instanceof qc?e._name:"unknown"}function Ma(n){if(zn(n)==="collection")return n.stages[0].Vr}function Gc(n){if(zn(n)==="collection_group")return n.stages[0].collectionId}function H9(n){switch(zn(n)){case"collection":return _e.fromString(Ma(n)).lastSegment();case"collection_group":return Gc(n);default:return}}function nc(n){if(zn(n)==="documents")return n.stages[0].dr}class ri{constructor(e,t,r,s){this._db=e,this.userDataReader=t,this._userDataWriter=r,this.stages=s}wr(e,t){const r=this.userDataReader.createContext(3,e);return Xf(t)?t._readUserData(r):Array.isArray(t)?t.forEach(s=>s._readUserData(r)):t.forEach(s=>s._readUserData(r)),t}where(e){const t=this.stages.map(r=>r);return this.wr("where",e),t.push(new La(e,{})),new ri(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map(r=>r);return t.push(new Rr(e,{})),new ri(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const r=this.stages.map(s=>s);return"orderings"in e?r.push(new hn(this.wr("sort",e.orderings),{})):r.push(new hn(this.wr("sort",[e,...t]),{})),new ri(this._db,this.userDataReader,this._userDataWriter,r)}br(e){return{pipeline:{stages:this.stages.map(t=>t._toProto(e))}}}}// Copyright 2024 Google LLC* @license
class T{constructor(e,t){this.type=e,this.value=t}static vr(){return new T("ERROR",void 0)}static Sr(){return new T("UNSET",void 0)}static Dr(){return new T("NULL",ss)}static newValue(e){return Ct(e)?new T("NULL",ss):function(r){return!!r&&"booleanValue"in r}(e)?new T("BOOLEAN",e):Wt(e)?new T("INT",e):wr(e)?new T("DOUBLE",e):function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue}(e)?new T("TIMESTAMP",e):function(r){return!!r&&"stringValue"in r}(e)?new T("STRING",e):function(r){return!!r&&"bytesValue"in r}(e)?new T("BYTES",e):e.referenceValue?new T("REFERENCE",e):e.geoPointValue?new T("GEO_POINT",e):os(e)?new T("ARRAY",e):Wo(e)?new T("VECTOR",e):_r(e)?new T("MAP",e):new T("ERROR",void 0)}Cr(){return this.type==="ERROR"||this.type==="UNSET"}Fr(){return this.type==="NULL"}}function si(n){if(!n.Cr())return n.value}function i0(n){return n instanceof tr?n._expr:n}function Z(n){if((n=i0(n))instanceof ps)return new j9(n);if(n instanceof ms)return new q9(n);if(n instanceof Gs)return new z9(n);if(n instanceof D){if(n.name==="add")return new K9(n);if(n.name==="subtract")return new Y9(n);if(n.name==="multiply")return new Q9(n);if(n.name==="divide")return new X9(n);if(n.name==="mod")return new J9(n);if(n.name==="and")return new Z9(n);if(n.name==="equal")return new h8(n);if(n.name==="not_equal")return new d8(n);if(n.name==="less_than")return new f8(n);if(n.name==="less_than_or_equal")return new p8(n);if(n.name==="greater_than")return new m8(n);if(n.name==="greater_than_or_equal")return new g8(n);if(n.name==="array_concat")return new w8(n);if(n.name==="array_reverse")return new _8(n);if(n.name==="array_contains")return new y8(n);if(n.name==="array_contains_all")return new b8(n);if(n.name==="array_contains_any")return new v8(n);if(n.name==="array_length")return new E8(n);if(n.name==="array_element")return new T8(n);if(n.name==="equal_any")return new o0(n);if(n.name==="not_equal_any")return new t8(n);if(n.name==="is_nan")return new n8(n);if(n.name==="is_not_nan")return new r8(n);if(n.name==="is_null")return new s8(n);if(n.name==="is_not_null")return new i8(n);if(n.name==="is_error")return new o8(n);if(n.name==="exists")return new a8(n);if(n.name==="not")return new Ba(n);if(n.name==="or")return new e8(n);if(n.name==="xor")return new Wc(n);if(n.name==="conditional")return new l8(n);if(n.name==="maximum")return new c8(n);if(n.name==="minimum")return new u8(n);if(n.name==="reverse")return new A8(n);if(n.name==="replace_first")return new I8(n);if(n.name==="replace_all")return new x8(n);if(n.name==="char_length")return new C8(n);if(n.name==="byte_length")return new R8(n);if(n.name==="like")return new S8(n);if(n.name==="regex_contains")return new P8(n);if(n.name==="regex_match")return new k8(n);if(n.name==="string_contains")return new O8(n);if(n.name==="starts_with")return new N8(n);if(n.name==="ends_with")return new D8(n);if(n.name==="to_lower")return new V8(n);if(n.name==="to_upper")return new L8(n);if(n.name==="trim")return new M8(n);if(n.name==="string_concat")return new B8(n);if(n.name==="map_get")return new F8(n);if(n.name==="cosine_distance")return new U8(n);if(n.name==="dot_product")return new $8(n);if(n.name==="euclidean_distance")return new H8(n);if(n.name==="vector_length")return new j8(n);if(n.name==="unix_micros_to_timestamp")return new K8(n);if(n.name==="timestamp_to_unix_micros")return new X8(n);if(n.name==="unix_millis_to_timestamp")return new Y8(n);if(n.name==="timestamp_to_unix_millis")return new J8(n);if(n.name==="unix_seconds_to_timestamp")return new Q8(n);if(n.name==="timestamp_to_unix_seconds")return new Z8(n);if(n.name==="timestamp_add")return new e5(n);if(n.name==="timestamp_subtract")return new t5(n)}throw new Error(`Unknown Expr : ${n}`)}class j9{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Gt)return T.newValue({referenceValue:ta(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return T.newValue({timestampValue:ko(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return T.newValue({timestampValue:ko(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?Aa(r)?T.newValue(function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:ko(i.serializer,re.fromTimestamp(rs(o)))};if(i.serverTimestampBehavior==="previous"){const l=Di(o);if(l)return l}return{nullValue:"NULL_VALUE"}}(e,r)):T.newValue(r):T.Sr()}}class q9{constructor(e){this.expr=e}evaluate(e,t){return T.newValue(this.expr._getValue())}}class z9{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.Rr.map(s=>Z(s).evaluate(e,t));return r.some(s=>s.Cr())?T.vr():T.newValue({arrayValue:{values:r.map(s=>s.value)}})}}function Xe(n){return wr(n)?Number(n.doubleValue):Number(n.integerValue)}function rn(n){return BigInt(n.integerValue)}const G9=BigInt("0x7fffffffffffffff"),W9=-BigInt("0x8000000000000000");class Bi{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length>=2,24778);const r=Z(this.expr.params[0]).evaluate(e,t),s=Z(this.expr.params[1]).evaluate(e,t);let i=this.Or(r,s);for(const o of this.expr.params.slice(2)){const l=Z(o).evaluate(e,t);i=this.Or(i,l)}return i}Or(e,t){if(e.Cr()||t.Cr())return T.vr();if(e.Fr()||t.Fr())return T.Dr();const r=e.value,s=t.value;if(!wr(r)&&!Wt(r)||!wr(s)&&!Wt(s))return T.vr();if(wr(r)||wr(s)){const i=this.Mr(r,s);return i?T.newValue(i):T.vr()}if(Wt(r)&&Wt(s)){const i=this.Nr(r,s);return i===void 0?T.vr():typeof i=="number"?T.newValue({doubleValue:i}):i<W9||i>G9?T.vr():T.newValue({integerValue:`${i}`})}return T.vr()}}function bn(n,e){return Ue(n)!==Ue(e)?"TYPE_MISMATCH":vt(n)||vt(e)?"NOT_EQ":Ct(n)&&Ct(e)?"EQ":Ct(n)||Ct(e)?"NULL":os(n)&&os(e)?function(r,s){var o,l,c;if(((o=r.values)==null?void 0:o.length)!==((l=s.values)==null?void 0:l.length))return"NOT_EQ";let i=!1;for(let h=0;h<(((c=r.values)==null?void 0:c.length)??0);h++){const p=r.values[h],m=s.values[h];switch(bn(p,m)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:X(44609,{Lr:p,Br:m})}}return i?"NULL":"EQ"}(n.arrayValue,e.arrayValue):Wo(n)&&Wo(e)||_r(n)&&_r(e)?function(r,s){const i=r.fields||{},o=s.fields||{};if(zo(i)!==zo(o))return"NOT_EQ";let l=!1;for(const c in i)if(i.hasOwnProperty(c)){if(o[c]===void 0)return"NOT_EQ";switch(bn(i[c],o[c])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":l=!0}}return l?"NULL":"EQ"}(n.mapValue,e.mapValue):function(r,s){return Dt(r,s,{Te:!1,Ee:!0,he:!0})}(n,e)?"EQ":"NOT_EQ"}class K9 extends Bi{Nr(e,t){return rn(e)+rn(t)}Mr(e,t){return{doubleValue:Xe(e)+Xe(t)}}}class Y9 extends Bi{constructor(e){super(e),this.expr=e}Nr(e,t){return rn(e)-rn(t)}Mr(e,t){return{doubleValue:Xe(e)-Xe(t)}}}class Q9 extends Bi{constructor(e){super(e),this.expr=e}Nr(e,t){return rn(e)*rn(t)}Mr(e,t){return{doubleValue:Xe(e)*Xe(t)}}}class X9 extends Bi{constructor(e){super(e),this.expr=e}Nr(e,t){const r=rn(t);if(r!==BigInt(0))return rn(e)/r}Mr(e,t){const r=Xe(t);return r===0?{doubleValue:di(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Xe(e)/r}}}class J9 extends Bi{constructor(e){super(e),this.expr=e}Nr(e,t){const r=rn(t);if(r!==BigInt(0))return rn(e)%r}Mr(e,t){const r=Xe(t);if(r!==0)return{doubleValue:Xe(e)%r}}}class Z9{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const l=Z(o).evaluate(e,t);switch(l.type){case"BOOLEAN":if(!((i=l.value)!=null&&i.booleanValue))return T.newValue(Ke);break;case"NULL":s=!0;break;default:r=!0}}return r?T.vr():s?T.Dr():T.newValue(yt)}}class Ba{constructor(e){this.expr=e}evaluate(e,t){var s;W(this.expr.params.length===1,9634);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return T.newValue({booleanValue:!((s=r.value)!=null&&s.booleanValue)});case"NULL":return T.Dr();default:return T.vr()}}}class e8{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const l=Z(o).evaluate(e,t);switch(l.type){case"BOOLEAN":if((i=l.value)!=null&&i.booleanValue)return T.newValue(yt);break;case"NULL":s=!0;break;default:r=!0}}return r?T.vr():s?T.Dr():T.newValue(Ke)}}class Wc{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const l=Z(o).evaluate(e,t);switch(l.type){case"BOOLEAN":r=Wc.xor(r,!!((i=l.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return T.vr()}}return s?T.Dr():T.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class o0{constructor(e){this.expr=e}evaluate(e,t){var o,l;W(this.expr.params.length===2,55094);let r=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return T.vr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return T.vr()}if(r)return T.Dr();for(const c of((l=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:l.values)??[])switch(Ct(s.value)&&Ct(c)?"EQ":bn(s.value,c)){case"EQ":return T.newValue(yt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:X(44608,{value:s.value,candidate:c})}return r?T.Dr():T.newValue(Ke)}}class t8{constructor(e){this.expr=e}evaluate(e,t){return new Ba(new D("not",[new D("equal_any",this.expr.params)])).evaluate(e,t)}}class n8{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,23322);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return T.newValue(Ke);case"DOUBLE":return T.newValue({booleanValue:isNaN(Xe(r.value))});case"NULL":return T.Dr();default:return T.vr()}}}class r8{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===1,50406),new Ba(new D("not",[new D("is_nan",this.expr.params)])).evaluate(e,t)}}class s8{constructor(e){this.expr=e}evaluate(e,t){switch(W(this.expr.params.length===1,23123),Z(this.expr.params[0]).evaluate(e,t).type){case"NULL":return T.newValue(yt);case"UNSET":case"ERROR":return T.vr();default:return T.newValue(Ke)}}}class i8{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===1,23167),new Ba(new D("not",[new D("is_null",this.expr.params)])).evaluate(e,t)}}class o8{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===1,5228),Z(this.expr.params[0]).evaluate(e,t).type==="ERROR"?T.newValue(yt):T.newValue(Ke)}}class a8{constructor(e){this.expr=e}evaluate(e,t){switch(W(this.expr.params.length===1,6877),Z(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return T.vr();case"UNSET":return T.newValue(Ke);default:return T.newValue(yt)}}}class l8{constructor(e){this.expr=e}evaluate(e,t){var s;W(this.expr.params.length===3,11706);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return(s=r.value)!=null&&s.booleanValue?Z(this.expr.params[1]).evaluate(e,t):Z(this.expr.params[2]).evaluate(e,t);case"NULL":return Z(this.expr.params[2]).evaluate(e,t);default:return T.vr()}}}class c8{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>Z(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||bt(i.value,s.value)>0?i:s}return s===void 0?T.Dr():s}}class u8{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>Z(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||bt(i.value,s.value)<0?i:s}return s===void 0?T.Dr():s}}class gs{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return T.vr()}const s=Z(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return T.vr()}return this.Ur(r,s)}}class h8 extends gs{constructor(e){super(e),this.expr=e}Ur(e,t){if(e.Fr()&&t.Fr())return T.newValue(yt);if(e.Fr()||t.Fr()||vt(e.value)||vt(t.value)||Ue(e.value)!==Ue(t.value))return T.newValue(Ke);switch(bn(e.value,t.value)){case"EQ":return T.newValue(yt);case"NOT_EQ":return T.newValue(Ke);case"NULL":return T.Dr();default:X(44615,{left:e,right:t})}}}class d8 extends gs{constructor(e){super(e),this.expr=e}Ur(e,t){switch(bn(e.value,t.value)){case"EQ":return T.newValue(Ke);case"NOT_EQ":case"TYPE_MISMATCH":return T.newValue(yt);case"NULL":return T.Dr();default:X(44614,{left:e,right:t})}}}class f8 extends gs{constructor(e){super(e),this.expr=e}Ur(e,t){return Ue(e.value)!==Ue(t.value)||vt(e.value)||vt(t.value)?T.newValue(Ke):T.newValue({booleanValue:bt(e.value,t.value)<0})}}class p8 extends gs{constructor(e){super(e),this.expr=e}Ur(e,t){return Ue(e.value)!==Ue(t.value)||vt(e.value)||vt(t.value)?T.newValue(Ke):bn(e.value,t.value)==="EQ"?T.newValue(yt):T.newValue({booleanValue:bt(e.value,t.value)<0})}}class m8 extends gs{constructor(e){super(e),this.expr=e}Ur(e,t){return Ue(e.value)!==Ue(t.value)||vt(e.value)||vt(t.value)?T.newValue(Ke):T.newValue({booleanValue:bt(e.value,t.value)>0})}}class g8 extends gs{constructor(e){super(e),this.expr=e}Ur(e,t){return Ue(e.value)!==Ue(t.value)||vt(e.value)||vt(t.value)?T.newValue(Ke):bn(e.value,t.value)==="EQ"?T.newValue(yt):T.newValue({booleanValue:bt(e.value,t.value)>0})}}class w8{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class _8{constructor(e){this.expr=e}evaluate(e,t){var s;W(this.expr.params.length===1,216);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return T.Dr();case"ARRAY":{const i=((s=r.value.arrayValue)==null?void 0:s.values)??[];return T.newValue({arrayValue:{values:[...i].reverse()}})}default:return T.vr()}}}class y8{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===2,52884),new o0(new D("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class b8{constructor(e){this.expr=e}evaluate(e,t){var c,h,p,m;W(this.expr.params.length===2,1392);let r=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return T.vr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return T.vr()}if(r)return T.Dr();const o=((h=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:h.values)??[],l=((m=(p=s.value)==null?void 0:p.arrayValue)==null?void 0:m.values)??[];for(const E of o){let C=!1;r=!1;for(const P of l){switch(Ct(E)&&Ct(P)?"EQ":bn(E,P)){case"EQ":C=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:X(44613,{value:P,search:E})}if(C)break}if(!C)return T.newValue(Ke)}return T.newValue(yt)}}class v8{constructor(e){this.expr=e}evaluate(e,t){var c,h,p,m;W(this.expr.params.length===2,2680);let r=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return T.vr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return T.vr()}if(r)return T.Dr();const o=((h=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:h.values)??[],l=((m=(p=s.value)==null?void 0:p.arrayValue)==null?void 0:m.values)??[];for(const E of l)for(const C of o)switch(Ct(E)&&Ct(C)?"EQ":bn(E,C)){case"EQ":return T.newValue(yt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:X(44608,{value:E,search:C})}return r?T.Dr():T.newValue(Ke)}}class E8{constructor(e){this.expr=e}evaluate(e,t){var s,i,o;W(this.expr.params.length===1,38605);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return T.Dr();case"ARRAY":return T.newValue({integerValue:`${((o=(i=(s=r.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return T.vr()}}}class T8{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class A8{constructor(e){this.expr=e}evaluate(e,t){var s,i;W(this.expr.params.length===1,1508);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return T.Dr();case"BYTES":{const o=(s=r.value)==null?void 0:s.bytesValue;if(typeof o=="string"){const l=Fe.fromBase64String(o).toUint8Array();return l.reverse(),T.newValue({bytesValue:Fe.fromUint8Array(l).toBase64()})}return T.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=r.value)==null?void 0:i.stringValue,l=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),c=Array.from(l,h=>h.segment).reverse();return T.newValue({stringValue:c.join("")})}default:return T.vr()}}}class I8{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class x8{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class C8{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,19400);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return T.Dr();case"STRING":{const s=function(o){let l=0;for(let c=0;c<o.length;c++){const h=o.codePointAt(c);if(h===void 0)return;if(h<=65535)if(h>=55296&&h<=57343)if(h<=56319){const p=o.codePointAt(c+1);p!==void 0&&p>=56320&&p<=57343?(l+=1,c++):l+=1}else l+=1;else l+=1;else{if(!(h<=1114111))return;l+=1,c++}}return l}(r.value.stringValue);return s===void 0?T.vr():T.newValue({integerValue:s})}default:return T.vr()}}}class R8{constructor(e){this.expr=e}evaluate(e,t){var s,i;W(this.expr.params.length===1,8486);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const o=(s=r.value)==null?void 0:s.bytesValue;return typeof o=="string"?T.newValue({integerValue:Fe.fromBase64String(o).toUint8Array().length}):T.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=function(c){let h=0;for(let p=0;p<c.length;p++){const m=c.codePointAt(p);if(m===void 0)return;if(m>=55296&&m<=57343){if(!(m<=56319))return;{const E=c.codePointAt(p+1);if(E===void 0||!(E>=56320&&E<=57343))return;h+=4,p++}}else if(m<=127)h+=1;else if(m<=2047)h+=2;else if(m<=65535)h+=3;else{if(!(m<=1114111))return;h+=4,p++}}return h}((i=r.value)==null?void 0:i.stringValue);return o===void 0?T.vr():T.newValue({integerValue:o})}case"NULL":return T.Dr();default:return T.vr()}}}class ws{constructor(e){this.expr=e}evaluate(e,t){var o,l;W(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return T.vr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return T.vr()}return r?T.Dr():this.kr((o=s.value)==null?void 0:o.stringValue,(l=i.value)==null?void 0:l.stringValue)}}class S8 extends ws{kr(e,t){try{const r=function(o){let l="";for(let c=0;c<o.length;c++){const h=o.charAt(c);switch(h){case"_":l+=".";break;case"%":l+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":l+="\\"+h;break;default:l+=h}}return"^"+l+"$"}(t),s=ui.compile(r);return T.newValue({booleanValue:s.matches(e)})}catch(r){return $t(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),T.vr()}}}class P8 extends ws{kr(e,t){try{const r=ui.compile(t);return T.newValue({booleanValue:r.matcher(e).find()})}catch{return $t(`Invalid regex pattern found in regex_contains: ${t}, returning error`),T.vr()}}}class k8 extends ws{kr(e,t){try{return T.newValue({booleanValue:ui.compile(t).matches(e)})}catch{return $t(`Invalid regex pattern found in regex_match: ${t}, returning error`),T.vr()}}}class O8 extends ws{kr(e,t){return T.newValue({booleanValue:e.includes(t)})}}class N8 extends ws{kr(e,t){return T.newValue({booleanValue:e.startsWith(t)})}}class D8 extends ws{kr(e,t){return T.newValue({booleanValue:e.endsWith(t)})}}class V8{constructor(e){this.expr=e}evaluate(e,t){var s,i;W(this.expr.params.length===1,29079);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return T.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return T.Dr();default:return T.vr()}}}class L8{constructor(e){this.expr=e}evaluate(e,t){var s,i;W(this.expr.params.length===1,60487);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return T.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return T.Dr();default:return T.vr()}}}class M8{constructor(e){this.expr=e}evaluate(e,t){var s,i;W(this.expr.params.length===1,28544);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return T.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return T.Dr();default:return T.vr()}}}class B8{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(o=>Z(o).evaluate(e,t));let s="",i=!1;for(const o of r)switch(o.type){case"STRING":s+=o.value.stringValue;break;case"NULL":i=!0;break;default:return T.vr()}return i?T.Dr():T.newValue({stringValue:s})}}class F8{constructor(e){this.expr=e}evaluate(e,t){var o,l,c,h;W(this.expr.params.length===2,4483);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return T.Sr();case"MAP":break;default:return T.vr()}const s=Z(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return T.vr();const i=(h=(l=(o=r.value)==null?void 0:o.mapValue)==null?void 0:l.fields)==null?void 0:h[(c=s.value)==null?void 0:c.stringValue];return i===void 0?T.Sr():T.newValue(i)}}class Kc{constructor(e){this.expr=e}evaluate(e,t){var h,p;W(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return T.vr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return T.vr()}if(r)return T.Dr();const o=Yl(s.value),l=Yl(i.value);if(o===void 0||l===void 0||((h=o.values)==null?void 0:h.length)!==((p=l.values)==null?void 0:p.length))return T.vr();const c=this.qr(o,l);return c===void 0||isNaN(c)?T.vr():T.newValue({doubleValue:c})}}class U8 extends Kc{qr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return;let i=0,o=0,l=0;for(let h=0;h<r.length;h++){if(!er(r[h])||!er(s[h]))return;const p=Xe(r[h]),m=Xe(s[h]);i+=p*m,o+=p*p,l+=m*m}const c=Math.sqrt(o)*Math.sqrt(l);if(c!==0)return 1-Math.max(-1,Math.min(1,i/c))}}class $8 extends Kc{qr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!er(r[o])||!er(s[o]))return;i+=Xe(r[o])*Xe(s[o])}return i}}class H8 extends Kc{qr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!er(r[o])||!er(s[o]))return;const l=Xe(r[o]),c=Xe(s[o]);i+=Math.pow(l-c,2)}return Math.sqrt(i)}}class j8{constructor(e){this.expr=e}evaluate(e,t){var s;W(this.expr.params.length===1,39044);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const i=Yl(r.value);return T.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return T.Dr();default:return T.vr()}}}const Ei=BigInt(-62135596800),Ti=BigInt(253402300799),ra=BigInt(1e3),Gn=BigInt(1e6),q8=Ei*ra,z8=Ti*ra+BigInt(999),G8=Ei*Gn,W8=Ti*Gn+BigInt(999999);function Yc(n){return n>=G8&&n<=W8}function a0(n){return n>=Ei&&n<=Ti}function Ai(n,e){const t=BigInt(n);return!(t<Ei||t>Ti)&&!(e<0||e>=1e9)&&(t!==Ei||e===0)&&!(t===Ti&&e>999999999)}function l0(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function Qc(n){return BigInt(n.seconds)*Gn+BigInt(Math.trunc(n.nanoseconds/1e3))}class Xc{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return T.Dr();default:return T.vr()}}}class K8 extends Xc{toTimestamp(e){if(!Yc(e))return T.vr();let t=Number(e/Gn),r=Number(e%Gn*BigInt(1e3));const s=l0(t,r);return t=s.seconds,r=s.nanos,Ai(t,r)?T.newValue({timestampValue:{seconds:t,nanos:r}}):T.vr()}}class Y8 extends Xc{toTimestamp(e){if(!function(o){return o>=q8&&o<=z8}(e))return T.vr();let t=Number(e/ra),r=Number(e%ra*BigInt(1e6));const s=l0(t,r);return t=s.seconds,r=s.nanos,Ai(t,r)?T.newValue({timestampValue:{seconds:t,nanos:r}}):T.vr()}}class Q8 extends Xc{toTimestamp(e){if(!a0(e))return T.vr();const t=Number(e);return T.newValue({timestampValue:{seconds:t,nanos:0}})}}class Jc{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return T.Dr();default:return T.vr()}const s=Bc(r.value.timestampValue);return Ai(s.seconds,s.nanoseconds)?this.$r(s):T.vr()}}class X8 extends Jc{$r(e){const t=Qc(e);return Yc(t)?T.newValue({integerValue:`${t.toString()}`}):T.vr()}}class J8 extends Jc{$r(e){const t=Qc(e),r=t/BigInt(1e3),s=t%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?T.newValue({integerValue:r.toString()}):T.newValue({integerValue:(r-BigInt(1)).toString()})}}class Z8 extends Jc{$r(e){const t=BigInt(e.seconds);return a0(t)?T.newValue({integerValue:t.toString()}):T.vr()}}class c0{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return T.vr()}const i=Z(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=function(J){switch(J){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),o===void 0)return T.vr();break;case"NULL":r=!0;break;default:return T.vr()}const l=Z(this.expr.params[2]).evaluate(e,t);switch(l.type){case"INT":break;case"NULL":r=!0;break;default:return T.vr()}if(r)return T.Dr();const c=BigInt(l.value.integerValue);let h;try{switch(o){case"microsecond":h=c;break;case"millisecond":h=c*BigInt(1e3);break;case"second":h=c*BigInt(1e6);break;case"minute":h=c*BigInt(6e7);break;case"hour":h=c*BigInt(36e8);break;case"day":h=c*BigInt(864e8);break;default:return T.vr()}if(o!=="microsecond"&&c!==BigInt(0)&&h/c!==BigInt(this.Kr(o)))return T.vr()}catch(q){return $t(`Error during timestamp arithmetic: ${q}`),T.vr()}const p=Bc(s.value.timestampValue);if(!Ai(p.seconds,p.nanoseconds))return T.vr();const m=Qc(p),E=this.Wr(m,h);if(!Yc(E))return T.vr();const C=Number(E/Gn),P=E%Gn,F=Number((P<0?P+Gn:P)*BigInt(1e3)),N=P<0?C-1:C;return Ai(N,F)?T.newValue({timestampValue:{seconds:N,nanos:F}}):T.vr()}Kr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class e5 extends c0{Wr(e,t){return e+t}}class t5 extends c0{Wr(e,t){return e-t}}function Ii(n){if((n=i0(n))instanceof ps)return`fld(${n.fieldName})`;if(n instanceof ms)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Me?`ref(${t.path})`:t instanceof wt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(n.value)})`;if(n instanceof D)return`fn(${n.name},[${n.params.map(Ii).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.Rr.map(Ii).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function n5(n){if(n instanceof n0)return`${n._name}(${wo(n.fields)})`;if(n instanceof r0){let e=`${n._name}(${wo(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${wo(n.groups)})`),e}if(n instanceof s0)return`${n._name}(${wo(n.groups)})`;if(n instanceof Da)return`${n._name}(${n.Vr})`;if(n instanceof Va)return`${n._name}(${n.collectionId})`;if(n instanceof jc)return`${n._name}()`;if(n instanceof qc)return`${n._name}(${n.dr.sort()})`;if(n instanceof La)return`${n._name}(${Ii(n.condition)})`;if(n instanceof Rr)return`${n._name}(${n.limit})`;if(n instanceof hn)return`${n._name}(${function(t){return t.map(r=>`${Ii(r.expr)}${r.direction}`).join(",")}(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function wo(n){return`${Array.from(n.entries()).sort().map(([e,t])=>`${e}=${Ii(t)}`).join(",")}`}function mn(n){return n.stages.map(e=>n5(e)).join("|")}function u0(n,e){return mn(n)===mn(e)}function qe(n){return n instanceof ht}function wd(n){return qe(n)?mn(n):ti(n)}function h0(n){return qe(n)?mn(n):function(t){return`${Tf(Zt(t))}|lt:${t.limitType}`}(n)}function Fa(n,e){return n instanceof ht&&e instanceof ht?u0(n,e):!(n instanceof ht&&!(e instanceof ht)||!(n instanceof ht)&&e instanceof ht)&&S3(n,e)}function d0(n){return gr(n)?mn(n):Tf(n)}function f0(n,e){return n instanceof ht&&e instanceof ht?u0(n,e):!(n instanceof ht&&!(e instanceof ht)||!(n instanceof ht)&&e instanceof ht)&&Af(n,e)}function r5(n,e){const t=function(s){let i=!1;const o=[];for(const l of s)if(l instanceof hn)if(i=!0,l.orderings.some(c=>c.expr instanceof ps&&c.expr.fieldName===Gt))o.push(l);else{const c=l.orderings.map(h=>h);c.push(Oo(Gt).ascending()),o.push(new hn(c,{}))}else l instanceof Rr&&(i||(o.push(new hn([Oo(Gt).ascending()],{})),i=!0)),o.push(l);return i||o.push(new hn([Oo(Gt).ascending()],{})),o}(n.stages);if(n.userDataReader){const r=n.userDataReader.createContext(3,"toCorePipeline");t.forEach(s=>s._readUserData(r))}return new ht(n.userDataReader.serializer,t,e)}/**
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
 */class s5{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&d3(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Zs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Zs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Sf();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(s.key)?null:l;const c=mf(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),he())}isEqual(e){return this.batchId===e.batchId&&ns(this.mutations,e.mutations,(t,r)=>Kh(t,r))&&ns(this.baseMutations,e.baseMutations,(t,r)=>Kh(t,r))}}class Zc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){W(e.mutations.length===r.length,58842,{Qr:e.mutations.length,Gr:r.length});let s=function(){return D3}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Zc(e,t,r,s)}}/**
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
 */class dn{constructor(e,t,r,s,i=re.min(),o=re.min(),l=Fe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new dn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class o5{constructor(e){this.zr=e}}function a5(n){const e=X3({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xl(e,e.limit,"L"):e}/**
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
 */class l5{constructor(){this.Hi=new c5}addToCollectionParentIndex(e,t){return this.Hi.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Hi.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(Xn.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(Xn.min())}updateCollectionGroup(e,t,r){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class c5{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Be(_e.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Be(_e.comparator)).toArray()}}/**
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
 */class rr{constructor(e){this.Ds=e}next(){return this.Ds+=2,this.Ds}static xs(){return new rr(0)}static Cs(){return new rr(-1)}}// Copyright 2024 Google LLC* @license
function p0(n,e){var r;let t=e;for(const s of n.stages)t=h5({serializer:n.serializer,serverTimestampBehavior:(r=n.listenOptions)==null?void 0:r.serverTimestampBehavior},s,t);return t}function Ua(n,e){return p0(n,[e]).length>0}function u5(n,e){return qe(n)?Ua(n,e):Sa(n,e)}function h5(n,e,t){if(e instanceof Da)return function(s,i,o){return o.filter(l=>l.isFoundDocument()&&`/${l.key.getCollectionPath().canonicalString()}`===i.Vr)}(0,e,t);if(e instanceof La)return function(s,i,o){return o.filter(l=>{const c=si(Z(i.condition).evaluate(s,l));return c!==void 0&&Dt(c,yt)})}(n,e,t);if(e instanceof Va)return function(s,i,o){return o.filter(l=>l.isFoundDocument()&&l.key.getCollectionPath().lastSegment()===i.collectionId)}(0,e,t);if(e instanceof jc)return function(s,i,o){return o.filter(l=>l.isFoundDocument())}(0,0,t);if(e instanceof qc)return function(s,i,o){return o.filter(l=>l.isFoundDocument()&&i.mr.has(l.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof Rr)return function(s,i,o){return o.slice(0,i.limit)}(0,e,t);if(e instanceof hn)return function(s,i,o){const l=i.orderings.map(c=>({ks:Z(c.expr),direction:c.direction}));return[...o].sort((c,h)=>{for(const{ks:p,direction:m}of l){const E=si(p.evaluate(s,c)),C=si(p.evaluate(s,h)),P=bt(E??ss,C??ss);if(P!==0)return m==="ascending"?P:-P}return 0})}(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function rc(n){const e=function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof hn)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(n);return(t,r)=>{for(const s of e){const i=si(Z(s.expr).evaluate({serializer:n.serializer},t)),o=si(Z(s.expr).evaluate({serializer:n.serializer},r)),l=bt(i||ss,o||ss);if(l!==0)return s.direction==="ascending"?l:-l}return 0}}function Pl(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof Rr)return{limit:t.limit}}}/**
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
 */class d5{constructor(){this.changes=new Lr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?L.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class p5{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Zs(r.mutation,s,Ft.empty(),Te.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,t,r=he()){const s=Vn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=zr();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Vn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,he()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,s){let i=gt();const o=ni(),l=function(){return ni()}();return t.forEach((c,h)=>{const p=r.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof Vr)?i=i.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),Zs(p.mutation,h,p.mutation.getFieldMask(),Te.now())):o.set(h.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,p)=>o.set(h,p)),t.forEach((h,p)=>l.set(h,new f5(p,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,t){const r=ni();let s=new Ae((o,l)=>o-l),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let p=r.get(c)||Ft.empty();p=l.applyToLocalView(h,p),r.set(c,p);const m=(s.get(l.batchId)||he()).add(c);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,p=c.value,m=Sf();p.forEach(E=>{if(!i.has(E)){const C=mf(t.get(E),r.get(E));C!==null&&m.set(E,C),i=i.add(E)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return qe(t)?this.getDocumentsMatchingPipeline(e,t,r,s):x3(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):C3(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):L.resolve(Vn());let l=hi,c=i;return o.next(h=>L.forEach(h,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(p)?L.resolve():this.remoteDocumentCache.getEntry(e,p).next(E=>{c=c.insert(p,E)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,he())).next(p=>({batchId:l,changes:Rf(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next(r=>{let s=zr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=zr();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,c=>{const h=function(m,E){return new Ra(E,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(p=>{p.forEach((m,E)=>{o=o.insert(m,E)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>this.retrieveMatchingLocalDocuments(i,o,l=>Sa(t,l)))}getDocumentsMatchingPipeline(e,t,r,s){if(zn(t)==="collection_group"){const i=Gc(t);let o=zr();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,c=>{const h=function(m,E){const C=m.stages.map(P=>P instanceof Va?new Da(E.canonicalString(),{}):P);return new ht(m.serializer,C)}(t,c.child(i));return this.getDocumentsMatchingPipeline(e,h,r,s).next(p=>{p.forEach((m,E)=>{o=o.insert(m,E)})})}).next(()=>o))}{let i;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next(o=>{switch(i=o,zn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s);case"documents":let l=he();for(const c of nc(t))l=l.add(Q.fromPath(c));return this.remoteDocumentCache.getEntries(e,l);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new G("invalid-argument",`Invalid pipeline source to execute offline: ${mn(t)}`)}}).next(o=>this.retrieveMatchingLocalDocuments(i,o,l=>Ua(t,l)))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach((i,o)=>{const l=o.getKey();t.get(l)===null&&(t=t.insert(l,rt.newInvalidDocument(l)))});let s=zr();return t.forEach((i,o)=>{const l=e.get(i);l!==void 0&&Zs(l.mutation,o,Ft.empty(),Te.now()),r(o)&&(s=s.insert(i,o))}),s}getOverlaysForPipeline(e,t,r){switch(zn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,_e.fromString(Ma(t)),r);case"collection_group":throw new G("invalid-argument",`Unexpected collection group pipeline: ${mn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,nc(t).map(s=>Q.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new G("invalid-argument",`Failed to get overlays for pipeline: ${mn(t)}`)}}}/**
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
 */class m5{constructor(e){this.serializer=e,this.Hs=new Map,this.Js=new Map}getBundleMetadata(e,t){return L.resolve(this.Hs.get(t))}saveBundleMetadata(e,t){return this.Hs.set(t.id,function(s){return{id:s.id,version:s.version,createTime:en(s.createTime)}}(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.Js.get(t))}saveNamedQuery(e,t){return this.Js.set(t.name,function(s){return{name:s.name,query:a5(s.bundledQuery),readTime:en(s.readTime)}}(t)),L.resolve()}}/**
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
 */class g5{constructor(){this.overlays=new Ae(Q.comparator),this.Ys=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Vn();return L.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}getAllOverlays(e,t){const r=Vn();return this.overlays.forEach((s,i)=>{i.largestBatchId>t&&r.set(s,i)}),L.resolve(r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Hr(e,t,i)}),L.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ys.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ys.delete(r)),L.resolve()}getOverlaysForCollection(e,t,r){const s=Vn(),i=t.length+1,o=new Q(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return L.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ae((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let p=i.get(h.largestBatchId);p===null&&(p=Vn(),i=i.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=Vn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=s)););return L.resolve(l)}Hr(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ys.get(s.largestBatchId).delete(r.key);this.Ys.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new i5(t,r));let i=this.Ys.get(t);i===void 0&&(i=he(),this.Ys.set(t,i)),this.Ys.set(t,i.add(r.key))}}/**
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
 */class w5{constructor(){this.sessionToken=Fe.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
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
 */class eu{constructor(){this.Zs=new Be(We.Xs),this.e_=new Be(We.t_)}isEmpty(){return this.Zs.isEmpty()}addReference(e,t){const r=new We(e,t);this.Zs=this.Zs.add(r),this.e_=this.e_.add(r)}n_(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.r_(new We(e,t))}i_(e,t){e.forEach(r=>this.removeReference(r,t))}s_(e){const t=new Q(new _e([])),r=new We(t,e),s=new We(t,e+1),i=[];return this.e_.forEachInRange([r,s],o=>{this.r_(o),i.push(o.key)}),i}__(){this.Zs.forEach(e=>this.r_(e))}r_(e){this.Zs=this.Zs.delete(e),this.e_=this.e_.delete(e)}o_(e){const t=new Q(new _e([])),r=new We(t,e),s=new We(t,e+1);let i=he();return this.e_.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new We(e,0),r=this.Zs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,t){this.key=e,this.a_=t}static Xs(e,t){return Q.comparator(e.key,t.key)||de(e.a_,t.a_)}static t_(e,t){return de(e.a_,t.a_)||Q.comparator(e.key,t.key)}}/**
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
 */class _5{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gs=1,this.u_=new Be(We.Xs)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.gs;this.gs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new s5(i,t,r,s);this.mutationQueue.push(o);for(const l of s)this.u_=this.u_.add(new We(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,t){return L.resolve(this.c_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.l_(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Pc:this.gs-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new We(t,0),s=new We(t,Number.POSITIVE_INFINITY),i=[];return this.u_.forEachInRange([r,s],o=>{const l=this.c_(o.a_);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Be(de);return t.forEach(s=>{const i=new We(s,0),o=new We(s,Number.POSITIVE_INFINITY);this.u_.forEachInRange([i,o],l=>{r=r.add(l.a_)})}),L.resolve(this.E_(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new We(new Q(i),0);let l=new Be(de);return this.u_.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.a_)),!0)},o),L.resolve(this.E_(l))}E_(e){const t=[];return e.forEach(r=>{const s=this.c_(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){W(this.h_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.u_;return L.forEach(t.mutations,s=>{const i=new We(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.u_=r})}bs(e){}containsKey(e,t){const r=new We(t,0),s=this.u_.firstAfterOrEqual(r);return L.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}h_(e,t){return this.l_(e)}l_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}c_(e){const t=this.l_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class y5{constructor(e){this.T_=e,this.docs=function(){return new Ae(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.T_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return L.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(t))}getEntries(e,t){let r=gt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():rt.newInvalidDocument(s))}),L.resolve(r)}getAllEntries(e){let t=gt();return this.docs.forEach((r,s)=>{t=t.insert(r,s.document)}),L.resolve(t)}getDocumentsMatchingQuery(e,t,r,s){let i,o;qe(t)?(i=_e.fromString(Ma(t)),o=p=>Ua(t,p)):(i=t.path,o=p=>Sa(t,p));let l=gt();const c=new Q(i.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:p,value:{document:m}}=h.getNext();if(!i.isPrefixOf(p.path))break;p.path.length>i.length+1||K7(W7(m),r)<=0||(s.has(m.key)||o(m))&&(l=l.insert(m.key,m.mutableCopy()))}return L.resolve(l)}getAllFromCollectionGroup(e,t,r,s){X(9500)}P_(e,t){return L.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new b5(this)}getSize(e){return L.resolve(this.size)}}class b5 extends d5{constructor(e){super(),this.zs=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.zs.addEntry(e,s)):this.zs.removeEntry(r)}),L.waitFor(t)}getFromCache(e,t){return this.zs.getEntry(e,t)}getAllFromCache(e,t){return this.zs.getEntries(e,t)}}/**
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
 */class v5{constructor(e){this.persistence=e,this.R_=new Lr(t=>d0(t),f0),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.I_=0,this.A_=new eu,this.targetCount=0,this.V_=rr.xs()}forEachTarget(e,t){return this.R_.forEach((r,s)=>t(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.I_)}allocateTargetId(e){return this.highestTargetId=this.V_.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.I_&&(this.I_=t),L.resolve()}Ms(e){this.R_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.V_=new rr(t),this.highestTargetId=t),e.sequenceNumber>this.I_&&(this.I_=e.sequenceNumber)}addTargetData(e,t){return this.Ms(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.Ms(t),L.resolve()}removeTargetData(e,t){return this.R_.delete(t.target),this.A_.s_(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.R_.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.R_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const r=this.R_.get(t)||null;return L.resolve(r)}addMatchingKeys(e,t,r){return this.A_.n_(t,r),L.resolve()}removeMatchingKeys(e,t,r){this.A_.i_(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.A_.s_(t),L.resolve()}getMatchingKeysForTargetId(e,t){const r=this.A_.o_(t);return L.resolve(r)}containsKey(e,t){return L.resolve(this.A_.containsKey(t))}}/**
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
 */class m0{constructor(e,t){this.d_={},this.overlays={},this.f_=new Ea(0),this.m_=!1,this.m_=!0,this.p_=new w5,this.referenceDelegate=e(this),this.g_=new v5(this),this.indexManager=new l5,this.remoteDocumentCache=function(s){return new y5(s)}(r=>this.referenceDelegate.y_(r)),this.serializer=new o5(t),this.w_=new m5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.m_=!1,Promise.resolve()}get started(){return this.m_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new g5,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.d_[e.toKey()];return r||(r=new _5(t,this.referenceDelegate),this.d_[e.toKey()]=r),r}getGlobalsCache(){return this.p_}getTargetCache(){return this.g_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.w_}runTransaction(e,t,r){j("MemoryPersistence","Starting transaction:",e);const s=new E5(this.f_.next());return this.referenceDelegate.b_(),r(s).next(i=>this.referenceDelegate.v_(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}S_(e,t){return L.or(Object.values(this.d_).map(r=>()=>r.containsKey(e,t)))}}class E5 extends Q7{constructor(e){super(),this.currentSequenceNumber=e}}class tu{constructor(e){this.persistence=e,this.D_=new eu,this.x_=null}static C_(e){return new tu(e)}get F_(){if(this.x_)return this.x_;throw X(60996)}addReference(e,t,r){return this.D_.addReference(r,t),this.F_.delete(r.toString()),L.resolve()}removeReference(e,t,r){return this.D_.removeReference(r,t),this.F_.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.F_.add(t.toString()),L.resolve()}removeTarget(e,t){this.D_.s_(t.targetId).forEach(s=>this.F_.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.F_.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}b_(){this.x_=new Set}v_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.F_,r=>{const s=Q.fromPath(r);return this.O_(e,s).next(i=>{i||t.removeEntry(s,re.min())})}).next(()=>(this.x_=null,t.apply(e)))}updateLimboDocument(e,t){return this.O_(e,t).next(r=>{r?this.F_.delete(t.toString()):this.F_.add(t.toString())})}y_(e){return 0}O_(e,t){return L.or([()=>L.resolve(this.D_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.S_(e,t)])}}class sa{constructor(e,t){this.persistence=e,this.M_=new Lr(r=>e3(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=v9(this,t)}static C_(e,t){return new sa(e,t)}b_(){}v_(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}lr(e){const t=this.Ls(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Ls(e){let t=0;return this.Er(e,r=>{t++}).next(()=>t)}Er(e,t){return L.forEach(this.M_,(r,s)=>this.Us(e,r,s).next(i=>i?L.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.P_(e,o=>this.Us(e,o,t).next(l=>{l||(r++,i.removeEntry(o,re.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.M_.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.M_.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,t,r){return this.M_.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.M_.set(t,e.currentSequenceNumber),L.resolve()}y_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ro(e.data.value)),t}Us(e,t,r){return L.or([()=>this.persistence.S_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.M_.get(t);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class nu{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.wo=r,this.bo=s}static vo(e,t){let r=he(),s=he();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new nu(e,t.fromCache,r,s)}}/**
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
 */function T5(n,e){return Q.comparator(n.key,e.key)}/**
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
 */class A5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class I5{constructor(){this.So=!1,this.Do=!1,this.xo=100,this.Co=function(){return W6()?8:X7(st())>0?6:4}()}initialize(e,t){this.Fo=e,this.indexManager=t,this.So=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Oo(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Mo(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new A5;return this.No(e,t,o).next(l=>{if(i.result=l,this.Do)return this.Lo(e,t,o,l.size)})}).next(()=>i.result)}Lo(e,t,r,s){return qe(t)?L.resolve():r.documentReadCount<this.xo?(qr()<=fe.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",ti(t),"since it only creates cache indexes for collection contains","more than or equal to",this.xo,"documents"),L.resolve()):(qr()<=fe.DEBUG&&j("QueryEngine","Query:",ti(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Co*s?(qr()<=fe.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",ti(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zt(t))):L.resolve())}Oo(e,t){if(qe(t))return L.resolve(null);let r=t;if(ed(r))return L.resolve(null);let s=Zt(r);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(r.limit!==null&&i===1&&(r=Xl(r,null,"F"),s=Zt(r)),this.indexManager.getDocumentsMatchingTarget(e,s).next(o=>{const l=he(...o);return this.Fo.getDocuments(e,l).next(c=>this.indexManager.getMinOffset(e,s).next(h=>{const p=this.Bo(r,c);return this.Uo(r,p,l,h.readTime)?this.Oo(e,Xl(r,null,"F")):this.ko(e,p,r,h)}))})))}Mo(e,t,r,s){return(qe(t)?function(o){for(const l of o.stages){if(l instanceof Rr||l instanceof gd)return!1;if(l instanceof La){if(l.condition instanceof Zf&&l.condition._expr.name==="exists"&&l.condition._expr.params[0]instanceof ps&&l.condition._expr.params[0].fieldName===Gt)continue;return!1}}return!0}(t):ed(t))||s.isEqual(re.min())?L.resolve(null):this.Fo.getDocuments(e,r).next(i=>{const o=this.Bo(t,i);return this.Uo(t,o,r,s)?L.resolve(null):(qr()<=fe.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),wd(t)),this.ko(e,o,t,G7(s,hi)).next(l=>l))})}Bo(e,t){let r,s;return qe(e)?(r=new Be(T5),s=i=>Ua(e,i)):(r=new Be(Lc(e)),s=i=>Sa(e,i)),t.forEach((i,o)=>{s(o)&&(r=r.add(o))}),r}Uo(e,t,r,s){if(qe(e))return function(l){return l.stages.some(c=>c instanceof Rr||c instanceof gd)}(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}No(e,t,r){return qr()<=fe.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",wd(t)),this.Fo.getDocumentsMatchingQuery(e,t,Xn.min(),r)}ko(e,t,r,s){return this.Fo.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const ru="LocalStore",x5=3e8;class C5{constructor(e,t,r,s){this.persistence=e,this.qo=t,this.serializer=s,this.$o=new Ae(de),this.Ko=new Lr(i=>d0(i),f0),this.Wo=new Map,this.Qo=e.getRemoteDocumentCache(),this.g_=e.getTargetCache(),this.w_=e.getBundleCache(),this.Go(r)}Go(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new p5(this.Qo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Qo.setIndexManager(this.indexManager),this.qo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.$o))}}function R5(n,e,t,r){return new C5(n,e,t,r)}async function g0(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Go(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=he();for(const h of s){o.push(h.batchId);for(const p of h.mutations)c=c.add(p.key)}for(const h of i){l.push(h.batchId);for(const p of h.mutations)c=c.add(p.key)}return t.localDocuments.getDocuments(r,c).next(h=>({zo:h,removedBatchIds:o,addedBatchIds:l}))})})}function S5(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Qo.newChangeBuffer({trackRemovals:!0});return function(l,c,h,p){const m=h.batch,E=m.keys();let C=L.resolve();return E.forEach(P=>{C=C.next(()=>p.getEntry(c,P)).next(F=>{const N=h.docVersions.get(P);W(N!==null,48541),F.version.compareTo(N)<0&&(m.applyToRemoteDocument(F,h),F.isValidDocument()&&(F.setReadTime(h.commitVersion),p.addEntry(F)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=he();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function w0(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.g_.getLastRemoteSnapshotVersion(t))}function P5(n,e){const t=ie(n),r=e.snapshotVersion;let s=t.$o;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Qo.newChangeBuffer({trackRemovals:!0});s=t.$o;const l=[];e.targetChanges.forEach((p,m)=>{const E=s.get(m);if(!E)return;l.push(t.g_.removeMatchingKeys(i,p.removedDocuments,m).next(()=>t.g_.addMatchingKeys(i,p.addedDocuments,m)));let C=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?C=C.withResumeToken(Fe.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):p.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(p.resumeToken,r)),s=s.insert(m,C),function(F,N,q){return F.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=x5?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(E,C,p)&&l.push(t.g_.updateTargetData(i,C))});let c=gt(),h=he();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(k5(i,o,e.documentUpdates).next(p=>{c=p.jo,h=p.Ho})),!r.isEqual(re.min())){const p=t.g_.getLastRemoteSnapshotVersion(i).next(m=>t.g_.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return L.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.$o=s,i))}function k5(n,e,t){let r=he(),s=he();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=gt();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):j(ru,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{jo:o,Ho:s}})}function O5(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Pc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function N5(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.g_.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):t.g_.allocateTargetId(r).next(o=>(s=new dn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.g_.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.$o.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.$o=t.$o.insert(r.targetId,r),t.Ko.set(e,r.targetId)),r})}async function sc(n,e,t){const r=ie(n),s=r.$o.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!fs(o))throw o;j(ru,`Failed to update sequence numbers for target ${e}: ${o}`)}r.$o=r.$o.remove(e),r.Ko.delete(s.target)}function _d(n,e,t){const r=ie(n);let s=re.min(),i=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,p){const m=ie(c),E=m.Ko.get(p);return E!==void 0?L.resolve(m.$o.get(E)):m.g_.getTargetData(h,p)}(r,o,qe(e)?e:Zt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.g_.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.qo.getDocumentsMatchingQuery(o,e,t?s:re.min(),t?i:he())).next(l=>(D5(r,l),{documents:l,Jo:i})))}function D5(n,e){e.forEach((t,r)=>{const s=r.key.getCollectionGroup(),i=n.Wo.get(s)||re.min();r.readTime.compareTo(i)>0&&n.Wo.set(s,r.readTime)})}class yd{constructor(){this.activeTargetIds=M3()}na(e){this.activeTargetIds=this.activeTargetIds.add(e)}ra(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ta(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class V5{constructor(){this.Ua=new yd,this.ka={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Ua.na(e),this.ka[e]||"not-current"}updateQueryState(e,t,r){this.ka[e]=t}removeLocalQueryTarget(e){this.Ua.ra(e)}isLocalQueryTarget(e){return this.Ua.activeTargetIds.has(e)}clearQueryState(e){delete this.ka[e]}getAllActiveQueryTargets(){return this.Ua.activeTargetIds}isActiveQueryTarget(e){return this.Ua.activeTargetIds.has(e)}start(){return this.Ua=new yd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function kl(){return typeof document<"u"?document:null}/**
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
 */class L5{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.qa=0,this.$a=null,this.Ka=!0}Wa(){this.qa===0&&(this.Qa("Unknown"),this.$a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.$a=null,this.Ga("Backend didn't respond within 10 seconds."),this.Qa("Offline"),Promise.resolve())))}za(e){this.state==="Online"?this.Qa("Unknown"):(this.qa++,this.qa>=1&&(this.ja(),this.Ga(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Qa("Offline")))}set(e){this.ja(),this.qa=0,e==="Online"&&(this.Ka=!1),this.Qa(e)}Qa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ga(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Ka?(yn(t),this.Ka=!1):j("OnlineStateTracker",t)}ja(){this.$a!==null&&(this.$a.cancel(),this.$a=null)}}/**
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
 */const sn="RemoteStore";class M5{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ha=[],this.Ja=new Map,this.Ya=new Map,this.Za=new Map,this.Xa=new rr(1e3),this.eu=new rr(1001),this.tu=new Set,this.nu=[],this.ru=i,this.ru.bt(o=>{r.enqueueAndForget(async()=>{Br(this)&&(j(sn,"Restarting streams for network reachability change."),await async function(c){const h=ie(c);h.tu.add(4),await Fi(h),h.iu.set("Unknown"),h.tu.delete(4),await $a(h)}(this))})}),this.iu=new L5(r,s)}}async function $a(n){if(Br(n))for(const e of n.nu)await e(!0)}async function Fi(n){for(const e of n.nu)await e(!1)}function ic(n,e){return n.Ya.get(e)||void 0}function _0(n,e){const t=ie(n),r=ic(t,e.targetId);if(r!==void 0&&t.Ja.has(r))return;const s=function(l,c){const h=ic(l,c);h!==void 0&&l.Za.delete(h);const p=function(E,C){return C%2!=0?E.eu.next():E.Xa.next()}(l,c);return l.Ya.set(c,p),l.Za.set(p,c),p}(t,e.targetId);j(sn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new dn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ja.set(s,i),au(t)?ou(t):_s(t).Fn()&&iu(t,i)}function su(n,e){const t=ie(n),r=_s(t),s=ic(t,e);j(sn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ja.delete(s),t.Ya.delete(e),t.Za.delete(s),r.Fn()&&y0(t,s),t.Ja.size===0&&(r.Fn()?r.Nn():Br(t)&&t.iu.set("Unknown"))}function iu(n,e){if(n.su.We(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const t=n.Za.get(e.targetId);if(t===void 0)return void j(sn,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}_s(n).jn(e)}function y0(n,e){n.su.We(e),_s(n).Hn(e)}function ou(n){n.su=new U3({getRemoteKeysForTarget:e=>{const t=n.Za.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):he()},dt:e=>n.Ja.get(e)||null,Tt:()=>n.datastore.serializer.databaseId}),_s(n).start(),n.iu.Wa()}function au(n){return Br(n)&&!_s(n).Cn()&&n.Ja.size>0}function Br(n){return ie(n).tu.size===0}function b0(n){n.su=void 0}async function B5(n){n.iu.set("Online")}async function F5(n){n.Ja.forEach((e,t)=>{iu(n,e)})}async function U5(n,e){b0(n),au(n)?(n.iu.za(e),ou(n)):n.iu.set("Unknown")}async function $5(n,e,t){if(n.iu.set("Online"),e instanceof kf&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds){if(s.Ja.has(l)){const c=s.Za.get(l);c!==void 0&&(await s.remoteSyncer.rejectListen(c,o),s.Ya.delete(c),s.Za.delete(l)),s.Ja.delete(l)}s.su.removeTarget(l)}}(n,e)}catch(r){j(sn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ia(n,r)}else if(e instanceof Po?n.su.et(e):e instanceof Pf?n.su.ot(e):n.su.rt(e),!t.isEqual(re.min()))try{const r=await w0(n.localStore);t.compareTo(r)>=0&&await function(i,o){const l=i.su.Rt(o);l.targetChanges.forEach((h,p)=>{if(h.resumeToken.approximateByteSize()>0){const m=i.Ja.get(p);m&&i.Ja.set(p,m.withResumeToken(h.resumeToken,o))}}),l.targetMismatches.forEach((h,p)=>{const m=i.Ja.get(h);if(!m)return;i.Ja.set(h,m.withResumeToken(Fe.EMPTY_BYTE_STRING,m.snapshotVersion)),y0(i,h);const E=new dn(m.target,h,p,m.sequenceNumber);iu(i,E)});const c=function(p,m){const E=new Map;m.targetChanges.forEach((P,F)=>{const N=p.Za.get(F);N!==void 0&&E.set(N,P)});let C=new Ae(de);return m.targetMismatches.forEach((P,F)=>{const N=p.Za.get(P);N!==void 0&&(C=C.insert(N,F))}),new Li(m.snapshotVersion,E,C,m.documentUpdates,m.augmentedDocumentUpdates,m.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){j(sn,"Failed to raise snapshot:",r),await ia(n,r)}}async function ia(n,e,t){if(!fs(e))throw e;n.tu.add(1),await Fi(n),n.iu.set("Offline"),t||(t=()=>w0(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{j(sn,"Retrying IndexedDB access"),await t(),n.tu.delete(1),await $a(n)})}function v0(n,e){return e().catch(t=>ia(n,t,e))}async function Ha(n){const e=ie(n),t=sr(e);let r=e.Ha.length>0?e.Ha[e.Ha.length-1].batchId:Pc;for(;H5(e);)try{const s=await O5(e.localStore,r);if(s===null){e.Ha.length===0&&t.Nn();break}r=s.batchId,j5(e,s)}catch(s){await ia(e,s)}E0(e)&&T0(e)}function H5(n){return Br(n)&&n.Ha.length<10}function j5(n,e){n.Ha.push(e);const t=sr(n);t.Fn()&&t.Jn&&t.Yn(e.mutations)}function E0(n){return Br(n)&&!sr(n).Cn()&&n.Ha.length>0}function T0(n){sr(n).start()}async function q5(n){sr(n).er()}async function z5(n){const e=sr(n);for(const t of n.Ha)e.Yn(t.mutations)}async function G5(n,e,t){const r=n.Ha.shift(),s=Zc.from(r,e,t);await v0(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ha(n)}async function W5(n,e){e&&sr(n).Jn&&await async function(r,s){if(function(o){return O3(o)&&o!==M.ABORTED}(s.code)){const i=r.Ha.shift();sr(r).Mn(),await v0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ha(r)}}(n,e),E0(n)&&T0(n)}async function bd(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),j(sn,"RemoteStore received new credentials");const r=Br(t);t.tu.add(3),await Fi(t),r&&t.iu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.tu.delete(3),await $a(t)}async function K5(n,e){const t=ie(n);e?(t.tu.delete(2),await $a(t)):e||(t.tu.add(2),await Fi(t),t.iu.set("Unknown"))}function _s(n){return n._u||(n._u=function(t,r,s){const i=ie(t);return i.nr(),new u9(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Qt:B5.bind(null,n),zt:F5.bind(null,n),Ht:U5.bind(null,n),zn:$5.bind(null,n)}),n.nu.push(async e=>{e?(n._u.Mn(),au(n)?ou(n):n.iu.set("Unknown")):(await n._u.stop(),b0(n))})),n._u}function sr(n){return n.ou||(n.ou=function(t,r,s){const i=ie(t);return i.nr(),new h9(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Qt:()=>Promise.resolve(),zt:q5.bind(null,n),Ht:W5.bind(null,n),Zn:z5.bind(null,n),Xn:G5.bind(null,n)}),n.nu.push(async e=>{e?(n.ou.Mn(),await Ha(n)):(await n.ou.stop(),n.Ha.length>0&&(j(sn,`Stopping write stream with ${n.Ha.length} pending writes`),n.Ha=[]))})),n.ou}/**
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
 */class lu{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,l=new lu(e,t,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cu(n,e){if(yn("AsyncQueue",`${e}: ${n}`),fs(n))return new G(M.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class yr{static emptySet(e){return new yr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Q.comparator(t.key,r.key):(t,r)=>Q.comparator(t.key,r.key),this.keyedMap=zr(),this.sortedSet=new Ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new yr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class vd{constructor(){this.au=new Ae(Q.comparator)}track(e){const t=e.doc.key,r=this.au.get(t);r?e.type!==0&&r.type===3?this.au=this.au.insert(t,e):e.type===3&&r.type!==1?this.au=this.au.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.au=this.au.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.au=this.au.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.au=this.au.remove(t):e.type===1&&r.type===2?this.au=this.au.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.au=this.au.insert(t,{type:2,doc:e.doc}):X(63341,{ft:e,uu:r}):this.au=this.au.insert(t,e)}cu(){const e=[];return this.au.inorderTraversal((t,r)=>{e.push(r)}),e}}class as{constructor(e,t,r,s,i,o,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new as(e,t,yr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Y5{constructor(){this.lu=void 0,this.Eu=[]}hu(){return this.Eu.some(e=>e.Tu())}}class Q5{constructor(){this.queries=Ed(),this.onlineState="Unknown",this.Pu=new Set}terminate(){(function(t,r){const s=ie(t),i=s.queries;s.queries=Ed(),i.forEach((o,l)=>{for(const c of l.Eu)c.onError(r)})})(this,new G(M.ABORTED,"Firestore shutting down"))}}function Ed(){return new Lr(n=>h0(n),Fa)}async function A0(n,e){const t=ie(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.hu()&&e.Tu()&&(r=2):(i=new Y5,r=e.Tu()?0:1);try{switch(r){case 0:i.lu=await t.onListen(s,!0);break;case 1:i.lu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=cu(o,`Initialization of query '${qe(e.query)?mn(e.query):ti(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Eu.push(e),e.Ru(t.onlineState),i.lu&&e.Iu(i.lu)&&uu(t)}async function I0(n,e){const t=ie(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.Eu.indexOf(e);o>=0&&(i.Eu.splice(o,1),i.Eu.length===0?s=e.Tu()?0:1:!i.hu()&&e.Tu()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function X5(n,e){const t=ie(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const l of o.Eu)l.Iu(s)&&(r=!0);o.lu=s}}r&&uu(t)}function J5(n,e,t){const r=ie(n),s=r.queries.get(e);if(s)for(const i of s.Eu)i.onError(t);r.queries.delete(e)}function uu(n){n.Pu.forEach(e=>{e.next()})}var oc;(function(n){n.Default="default",n.Cache="cache"})(oc||(oc={}));class x0{constructor(e,t,r){this.query=e,this.Au=t,this.Vu=!1,this.du=null,this.onlineState="Unknown",this.options=r||{}}Iu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new as(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.fu(e)&&(this.Au.next(e),t=!0):this.mu(e,this.onlineState)&&(this.pu(e),t=!0),this.du=e,t}onError(e){this.Au.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.du&&!this.Vu&&this.mu(this.du,e)&&(this.pu(this.du),t=!0),t}mu(e,t){if(!e.fromCache||!this.Tu())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}fu(e){if(e.docChanges.length>0)return!0;const t=this.du&&this.du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}pu(e){e=as.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.Au.next(e)}Tu(){return this.options.source!==oc.Cache}}/**
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
 */class C0{constructor(e){this.key=e}}class R0{constructor(e){this.key=e}}class Z5{constructor(e,t){this.query=e,this.Ou=t,this.Mu=null,this.hasCachedResults=!1,this.current=!1,this.Nu=he(),this.mutatedKeys=he(),this.Lu=qe(e)?rc(e):Lc(e),this.Bu=new yr(this.Lu)}get Uu(){return this.Ou}ku(e,t){const r=t?t.qu:new vd,s=t?t.Bu:this.Bu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const[c,h]=this.$u(this.query,s);e.inorderTraversal((m,E)=>{const C=s.get(m),P=u5(this.query,E)?E:null,F=!!C&&this.mutatedKeys.has(C.key),N=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let q=!1;C&&P?C.data.isEqual(P.data)?F!==N&&(r.track({type:3,doc:P}),q=!0):this.Ku(C,P)||(r.track({type:2,doc:P}),q=!0,(c&&this.Lu(P,c)>0||h&&this.Lu(P,h)<0)&&(l=!0)):!C&&P?(r.track({type:0,doc:P}),q=!0):C&&!P&&(r.track({type:1,doc:C}),q=!0,(c||h)&&(l=!0)),q&&(P?(o=o.add(P),i=N?i.add(m):i.delete(m)):(o=o.delete(m),i=i.delete(m)))});const p=this.Wu(this.query);if(p)if(qe(this.query)){const m=[];o.forEach(P=>m.push(P));const E=p0(this.query,m);let C=new yr(rc(this.query));for(const P of E)C=C.add(P);o.forEach(P=>{C.has(P.key)||(i=i.delete(P.key),r.track({type:1,doc:P}))}),o=C}else{const m=this.Qu(this.query);for(;o.size>p;){const E=m==="F"?o.last():o.first();o=o.delete(E.key),i=i.delete(E.key),r.track({type:1,doc:E})}}return{Bu:o,qu:r,Uo:l,mutatedKeys:i}}Wu(e){var t;return qe(e)?(t=Pl(e))==null?void 0:t.limit:e.limit||void 0}Qu(e){if(qe(e)){const t=Pl(e);return t&&t.limit<0?"L":"F"}return e.limitType}$u(e,t){var r;if(qe(e)){const s=(r=Pl(e))==null?void 0:r.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.Wu(this.query)?t.last():null,e.limitType==="L"&&t.size===this.Wu(this.query)?t.first():null]}Ku(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Bu;this.Bu=e.Bu,this.mutatedKeys=e.mutatedKeys;const o=e.qu.cu();o.sort((p,m)=>function(C,P){const F=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{ft:N})}};return F(C)-F(P)}(p.type,m.type)||this.Lu(p.doc,m.doc)),this.Gu(r),s=s??!1;const l=t&&!s?this.zu():[],c=this.Nu.size===0&&this.current&&!s?1:0,h=c!==this.Mu;return this.Mu=c,o.length!==0||h?{snapshot:new as(this.query,e.Bu,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ju:l}:{ju:l}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Bu:this.Bu,qu:new vd,mutatedKeys:this.mutatedKeys,Uo:!1},!1)):{ju:[]}}Hu(e){return!this.Ou.has(e)&&!!this.Bu.has(e)&&!this.Bu.get(e).hasLocalMutations}Gu(e){e&&(e.addedDocuments.forEach(t=>this.Ou=this.Ou.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ou=this.Ou.delete(t)),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Nu;this.Nu=he(),this.Bu.forEach(r=>{this.Hu(r.key)&&(this.Nu=this.Nu.add(r.key))});const t=[];return e.forEach(r=>{this.Nu.has(r)||t.push(new R0(r))}),this.Nu.forEach(r=>{e.has(r)||t.push(new C0(r))}),t}Ju(e){this.Ou=e.Jo,this.Nu=he();const t=this.ku(e.documents);return this.applyChanges(t,!0)}Yu(){return as.fromInitialDocuments(this.query,this.Bu,this.mutatedKeys,this.Mu===0,this.hasCachedResults)}}const hu="SyncEngine";class ew{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class tw{constructor(e){this.key=e,this.Zu=!1}}class nw{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Xu={},this.ec=new Lr(l=>h0(l),Fa),this.tc=new Map,this.nc=new Set,this.rc=new Ae(Q.comparator),this.sc=new Map,this._c=new eu,this.oc={},this.ac=new Map,this.uc=rr.Cs(),this.onlineState="Unknown",this.cc=void 0}get isPrimaryClient(){return this.cc===!0}}async function rw(n,e,t=!0){const r=D0(n);let s;const i=r.ec.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Yu()):s=await S0(r,e,t,!0),s}async function sw(n,e){const t=D0(n);await S0(t,e,!0,!1)}async function S0(n,e,t,r){const s=await N5(n.localStore,qe(e)?e:Zt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await iw(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&_0(n.remoteStore,s),l}async function iw(n,e,t,r,s){n.lc=(m,E,C)=>async function(F,N,q,J){let B=N.view.ku(q);B.Uo&&(B=await _d(F.localStore,N.query,!1).then(({documents:v})=>N.view.ku(v,B)));const H=J&&J.targetChanges.get(N.targetId),oe=J&&J.targetMismatches.get(N.targetId)!=null,ae=N.view.applyChanges(B,F.isPrimaryClient,H,oe);return Ad(F,N.targetId,ae.ju),ae.snapshot}(n,m,E,C);const i=await _d(n.localStore,e,!0),o=new Z5(e,i.Jo),l=o.ku(i.documents),c=Mi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=o.applyChanges(l,n.isPrimaryClient,c);Ad(n,t,h.ju);const p=new ew(e,t,o);return n.ec.set(e,p),n.tc.has(t)?n.tc.get(t).push(e):n.tc.set(t,[e]),h.snapshot}async function ow(n,e,t){const r=ie(n),s=r.ec.get(e),i=r.tc.get(s.targetId);if(i.length>1)return r.tc.set(s.targetId,i.filter(o=>!Fa(o,e))),void r.ec.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await sc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&su(r.remoteStore,s.targetId),ac(r,s.targetId)}).catch(ds)):(ac(r,s.targetId),await sc(r.localStore,s.targetId,!0))}async function aw(n,e){const t=ie(n),r=t.ec.get(e),s=t.tc.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),su(t.remoteStore,r.targetId))}async function lw(n,e,t){const r=mw(n);try{const s=await function(o,l){const c=ie(o),h=Te.now(),p=l.reduce((C,P)=>C.add(P.key),he());let m,E;return c.persistence.runTransaction("Locally write mutations","readwrite",C=>{let P=gt(),F=he();return c.Qo.getEntries(C,p).next(N=>{P=N,P.forEach((q,J)=>{J.isValidDocument()||(F=F.add(q))})}).next(()=>c.localDocuments.getOverlayedDocuments(C,P)).next(N=>{m=N;const q=[];for(const J of l){const B=f3(J,m.get(J.key).overlayedDocument);B!=null&&q.push(new Vr(J.key,B,uf(B.value.mapValue),Jt.exists(!0)))}return c.mutationQueue.addMutationBatch(C,h,q,l)}).next(N=>{E=N;const q=N.applyToLocalDocumentSet(m,F);return c.documentOverlayCache.saveOverlays(C,N.batchId,q)})}).then(()=>({batchId:E.batchId,changes:Rf(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.oc[o.currentUser.toKey()];h||(h=new Ae(de)),h=h.insert(l,c),o.oc[o.currentUser.toKey()]=h}(r,s.batchId,t),await Ui(r,s.changes),await Ha(r.remoteStore)}catch(s){const i=cu(s,"Failed to persist write");t.reject(i)}}async function P0(n,e){const t=ie(n);try{const r=await P5(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.sc.get(i);o&&(W(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Zu=!0:s.modifiedDocuments.size>0?W(o.Zu,14607):s.removedDocuments.size>0&&(W(o.Zu,42227),o.Zu=!1))}),await Ui(t,r,e)}catch(r){await ds(r)}}function Td(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ec.forEach((i,o)=>{const l=o.view.Ru(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ie(o);c.onlineState=l;let h=!1;c.queries.forEach((p,m)=>{for(const E of m.Eu)E.Ru(l)&&(h=!0)}),h&&uu(c)}(r.eventManager,e),s.length&&r.Xu.zn(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cw(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.sc.get(e),i=s&&s.key;if(i){let o=new Ae(Q.comparator);o=o.insert(i,rt.newNoDocument(i,re.min()));const l=he().add(i),c=new Li(re.min(),new Map,new Ae(de),o,gt(),l);await P0(r,c),r.rc=r.rc.remove(i),r.sc.delete(e),du(r)}else await sc(r.localStore,e,!1).then(()=>ac(r,e,t)).catch(ds)}async function uw(n,e){const t=ie(n),r=e.batch.batchId;try{const s=await S5(t.localStore,e);O0(t,r,null),k0(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ui(t,s)}catch(s){await ds(s)}}async function hw(n,e,t){const r=ie(n);try{const s=await function(o,l){const c=ie(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return c.mutationQueue.lookupMutationBatch(h,l).next(m=>(W(m!==null,37113),p=m.keys(),c.mutationQueue.removeMutationBatch(h,m))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>c.localDocuments.getDocuments(h,p))})}(r.localStore,e);O0(r,e,t),k0(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ui(r,s)}catch(s){await ds(s)}}function k0(n,e){(n.ac.get(e)||[]).forEach(t=>{t.resolve()}),n.ac.delete(e)}function O0(n,e,t){const r=ie(n);let s=r.oc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.oc[r.currentUser.toKey()]=s}}function ac(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.tc.get(e))n.ec.delete(r),t&&n.Xu.Ec(r,t);n.tc.delete(e),n.isPrimaryClient&&n._c.s_(e).forEach(r=>{n._c.containsKey(r)||N0(n,r)})}function N0(n,e){n.nc.delete(e.path.canonicalString());const t=n.rc.get(e);t!==null&&(su(n.remoteStore,t),n.rc=n.rc.remove(e),n.sc.delete(t),du(n))}function Ad(n,e,t){for(const r of t)r instanceof C0?(n._c.addReference(r.key,e),dw(n,r)):r instanceof R0?(j(hu,"Document no longer in limbo: "+r.key),n._c.removeReference(r.key,e),n._c.containsKey(r.key)||N0(n,r.key)):X(19791,{hc:r})}function dw(n,e){const t=e.key,r=t.path.canonicalString();n.rc.get(t)||n.nc.has(r)||(j(hu,"New document in limbo: "+t),n.nc.add(r),du(n))}function du(n){for(;n.nc.size>0&&n.rc.size<n.maxConcurrentLimboResolutions;){const e=n.nc.values().next().value;n.nc.delete(e);const t=new Q(_e.fromString(e)),r=n.uc.next();n.sc.set(r,new tw(t)),n.rc=n.rc.insert(t,r),_0(n.remoteStore,new dn(Zt(Vc(t.path)),r,"TargetPurposeLimboResolution",Ea.ce))}}async function Ui(n,e,t){const r=ie(n),s=[],i=[],o=[];r.ec.isEmpty()||(r.ec.forEach((l,c)=>{o.push(r.lc(c,e,t).then(h=>{var p;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(p=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(h){s.push(h);const m=nu.vo(c.targetId,h);i.push(m)}}))}),await Promise.all(o),r.Xu.zn(s),await async function(c,h){const p=ie(c);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(h,E=>L.forEach(E.wo,C=>p.persistence.referenceDelegate.addReference(m,E.targetId,C)).next(()=>L.forEach(E.bo,C=>p.persistence.referenceDelegate.removeReference(m,E.targetId,C)))))}catch(m){if(!fs(m))throw m;j(ru,"Failed to update sequence numbers: "+m)}for(const m of h){const E=m.targetId;if(!m.fromCache){const C=p.$o.get(E),P=C.snapshotVersion,F=C.withLastLimboFreeSnapshotVersion(P);p.$o=p.$o.insert(E,F)}}}(r.localStore,i))}async function fw(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){j(hu,"User change. New user:",e.toKey());const r=await g0(t.localStore,e);t.currentUser=e,function(i,o){i.ac.forEach(l=>{l.forEach(c=>{c.reject(new G(M.CANCELLED,o))})}),i.ac.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ui(t,r.zo)}}function pw(n,e){const t=ie(n),r=t.sc.get(e);if(r&&r.Zu)return he().add(r.key);{let s=he();const i=t.tc.get(e);if(!i)return s;for(const o of i??[]){const l=t.ec.get(o);s=s.unionWith(l.view.Uu)}return s}}function D0(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=P0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cw.bind(null,e),e.Xu.zn=X5.bind(null,e.eventManager),e.Xu.Ec=J5.bind(null,e.eventManager),e}function mw(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hw.bind(null,e),e}class oa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pa(e.databaseInfo.databaseId),this.sharedClientState=this.Rc(e),this.persistence=this.Ic(e),await this.persistence.start(),this.localStore=this.Ac(e),this.gcScheduler=this.Vc(e,this.localStore),this.indexBackfillerScheduler=this.dc(e,this.localStore)}Vc(e,t){return null}dc(e,t){return null}Ac(e){return R5(this.persistence,new I5,e.initialUser,this.serializer)}Ic(e){return new m0(tu.C_,this.serializer)}Rc(e){return new V5}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oa.provider={build:()=>new oa};class gw extends oa{constructor(e){super(),this.cacheSizeBytes=e}Vc(e,t){W(this.persistence.referenceDelegate instanceof sa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new y9(r,e.asyncQueue,t)}Ic(e){const t=this.cacheSizeBytes!==void 0?mt.withCacheSize(this.cacheSizeBytes):mt.DEFAULT;return new m0(r=>sa.C_(r,t),this.serializer)}}class lc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Td(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fw.bind(null,this.syncEngine),await K5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Q5}()}createDatastore(e){const t=Pa(e.databaseInfo.databaseId),r=c9(e.databaseInfo);return p9(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,l){return new M5(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Td(this.syncEngine,t,0),function(){return ad.C()?new ad:new i9}())}createSyncEngine(e,t){return function(s,i,o,l,c,h,p){const m=new nw(s,i,o,l,c,h);return p&&(m.cc=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=ie(s);j(sn,"RemoteStore shutting down."),i.tu.add(5),await Fi(i),i.ru.shutdown(),i.iu.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}lc.provider={build:()=>new lc};/**
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
 */class V0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.mc(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.mc(this.observer.error,e):yn("Uncaught Error in snapshot listener:",e.toString()))}gc(){this.muted=!0}mc(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const ir="FirestoreClient";class ww{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=nt.UNAUTHENTICATED,this.clientId=Rc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{j(ir,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(j(ir,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=cu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ol(n,e){n.asyncQueue.verifyOperationInProgress(),j(ir,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await g0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Id(n,e){n.asyncQueue.verifyOperationInProgress();const t=await _w(n);j(ir,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>bd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>bd(e.remoteStore,s)),n._onlineComponents=e}async function _w(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j(ir,"Using user provided OfflineComponentProvider");try{await Ol(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;$t("Error using user provided cache. Falling back to memory cache: "+t),await Ol(n,new oa)}}else j(ir,"Using default OfflineComponentProvider"),await Ol(n,new gw(void 0));return n._offlineComponents}async function L0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j(ir,"Using user provided OnlineComponentProvider"),await Id(n,n._uninitializedComponentsProvider._online)):(j(ir,"Using default OnlineComponentProvider"),await Id(n,new lc))),n._onlineComponents}function yw(n){return L0(n).then(e=>e.syncEngine)}async function M0(n){const e=await L0(n),t=e.eventManager;return t.onListen=rw.bind(null,e.syncEngine),t.onUnlisten=ow.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=aw.bind(null,e.syncEngine),t}function bw(n,e,t={}){const r=new pn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const p=new V0({next:E=>{p.gc(),o.enqueueAndForget(()=>I0(i,m));const C=E.docs.has(l);!C&&E.fromCache?h.reject(new G(M.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&E.fromCache&&c&&c.source==="server"?h.reject(new G(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(E)},error:E=>h.reject(E)}),m=new x0(Vc(l.path),p,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return A0(i,m)}(await M0(n),n.asyncQueue,e,t,r)),r.promise}function vw(n,e,t={}){const r=new pn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const p=new V0({next:E=>{p.gc(),o.enqueueAndForget(()=>I0(i,m)),E.fromCache&&c.source==="server"?h.reject(new G(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(E)},error:E=>h.reject(E)}),m=new x0(l instanceof ri?r5(l):l,p,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return A0(i,m)}(await M0(n),n.asyncQueue,e,t,r)),r.promise}function Ew(n,e){const t=new pn;return n.asyncQueue.enqueueAndForget(async()=>lw(await yw(n),e,t)),t.promise}/**
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
 */const xd="AsyncQueue";class Cd{constructor(e=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Wc=null,this.Qc=!1,this.Gc=!1,this.zc=[],this.xn=new jf(this,"async_queue_retry"),this.jc=()=>{const r=kl();r&&j(xd,"Visibility state changed to "+r.visibilityState),this.xn.gn()},this.Hc=e;const t=kl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.$c){this.$c=!0,this.Gc=e||!1;const t=kl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Jc(),this.$c)return new Promise(()=>{});const t=new pn;return this.Yc(()=>this.$c&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.qc.push(e),this.Zc()))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.xn.reset()}catch(e){if(!fs(e))throw e;j(xd,"Operation failed with retryable error: "+e)}this.qc.length>0&&this.xn.mn(()=>this.Zc())}}Yc(e){const t=this.Hc.then(()=>(this.Qc=!0,e().catch(r=>{throw this.Wc=r,this.Qc=!1,yn("INTERNAL UNHANDLED ERROR: ",Rd(r)),r}).then(r=>(this.Qc=!1,r))));return this.Hc=t,t}enqueueAfterDelay(e,t,r){this.Jc(),this.zc.indexOf(e)>-1&&(t=0);const s=lu.createAndSchedule(this,e,t,r,i=>this.Xc(i));return this.Kc.push(s),s}Jc(){this.Wc&&X(47125,{el:Rd(this.Wc)})}verifyOperationInProgress(){}async tl(){let e;do e=this.Hc,await e;while(e!==this.Hc)}nl(e){for(const t of this.Kc)if(t.timerId===e)return!0;return!1}rl(e){return this.tl().then(()=>{this.Kc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Kc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tl()})}il(e){this.zc.push(e)}Xc(e){const t=this.Kc.indexOf(e);this.Kc.splice(t,1)}}function Rd(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class $i extends ka{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Cd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cd(e),this._firestoreClient=void 0,await e}}}function Tw(n,e){const t=typeof n=="object"?n:_c(),r=typeof n=="string"?n:Go,s=wa(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Zd("firestore");i&&E9(s,...i)}return s}function fu(n){if(n._terminated)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Aw(n),n._firestoreClient}function Aw(n){var r,s,i,o;const e=n._freezeSettings(),t=g9(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new ww(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class Iw{convertValue(e,t="none"){switch(Ue(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Dr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[pi].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>xe(o.doubleValue));return new wt(t)}convertGeoPoint(e){return new tn(xe(e.latitude),xe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Di(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(rs(e));default:return null}}convertTimestamp(e){const t=Jn(e);return new Te(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=_e.fromString(e);W(Bf(r),9688,{name:e});const s=new fi(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(t)||yn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class B0 extends Iw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,t)}}const Sd="@firebase/firestore",Pd="4.16.0";/**
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
 */class F0{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Na("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class xw extends F0{data(){return super.data()}}/**
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
 */function Cw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new G(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function Rw(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Ws{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class br extends F0{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new No(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Na("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=br._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}br._jsonSchemaVersion="firestore/documentSnapshot/1.0",br._jsonSchema={type:Le("string",br._jsonSchemaVersion),bundleSource:Le("string","DocumentSnapshot"),bundleName:Le("string"),bundle:Le("string")};class No extends br{data(e={}){return super.data(e)}}class es{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ws(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new No(this._firestore,this._userDataWriter,r.key,r,new Ws(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new G(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{qe(s._snapshot.query)?rc(s._snapshot.query):Lc(s.query._query);const c=new No(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ws(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new No(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ws(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,p=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:Sw(l.type),doc:c,oldIndex:h,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=es._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Rc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Sw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:n})}}/**
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
 */es._jsonSchemaVersion="firestore/querySnapshot/1.0",es._jsonSchema={type:Le("string",es._jsonSchemaVersion),bundleSource:Le("string","QuerySnapshot"),bundleName:Le("string"),bundle:Le("string")};/**
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
 */function pu(n){n=Qn(n,Me);const e=Qn(n.firestore,$i),t=fu(e);return bw(t,n._key).then(r=>kw(e,n,r))}function kd(n){n=Qn(n,Oa);const e=Qn(n.firestore,$i),t=fu(e),r=new B0(e);return Cw(n._query),vw(t,n._query).then(s=>new es(e,r,n,s))}function aa(n,e,t){n=Qn(n,Me);const r=Qn(n.firestore,$i),s=Rw(n.converter,e),i=x9(r);return U0(r,[C9(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Jt.none())])}function Pw(n){return U0(Qn(n.firestore,$i),[new Dc(n._key,Jt.none())])}function U0(n,e){const t=fu(n);return Ew(t,e)}function kw(n,e,t){const r=t.docs.get(e._key),s=new B0(n);return new br(n,s,e._key,r,new Ws(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){D7(Or),Ar(new Kn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new $i(new M7(r.getProvider("auth-internal")),new U7(o,r.getProvider("app-check-internal")),i3(o,s),o);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Yt(Sd,Pd,e),Yt(Sd,Pd,"esm2020")})();var Ow="firebase",Nw="12.15.0";/**
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
 */Yt(Ow,Nw,"app");/**
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
 */const $0="firebasestorage.googleapis.com",H0="storageBucket",Dw=2*60*1e3,Vw=10*60*1e3;/**
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
 */class Se extends an{constructor(e,t,r=0){super(Nl(e),`Firebase Storage: ${t} (${Nl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Se.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Nl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Re;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Re||(Re={}));function Nl(n){return"storage/"+n}function mu(){const n="An unknown error occurred, please check the error payload for server response.";return new Se(Re.UNKNOWN,n)}function Lw(n){return new Se(Re.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Mw(n){return new Se(Re.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Bw(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Se(Re.UNAUTHENTICATED,n)}function Fw(){return new Se(Re.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Uw(n){return new Se(Re.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function $w(){return new Se(Re.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Hw(){return new Se(Re.CANCELED,"User canceled the upload/download.")}function jw(n){return new Se(Re.INVALID_URL,"Invalid URL '"+n+"'.")}function qw(n){return new Se(Re.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function zw(){return new Se(Re.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+H0+"' property when initializing the app?")}function Gw(){return new Se(Re.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ww(){return new Se(Re.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Kw(n){return new Se(Re.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function cc(n){return new Se(Re.INVALID_ARGUMENT,n)}function j0(){return new Se(Re.APP_DELETED,"The Firebase app was deleted.")}function Yw(n){return new Se(Re.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ii(n,e){return new Se(Re.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function $s(n){throw new Se(Re.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Rt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Rt.makeFromUrl(e,t)}catch{return new Rt(e,"")}if(r.path==="")return r;throw qw(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function h(H){H.path_=decodeURIComponent(H.path)}const p="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",C=new RegExp(`^https?://${m}/${p}/b/${s}/o${E}`,"i"),P={bucket:1,path:3},F=t===$0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,N="([^?#]*)",q=new RegExp(`^https?://${F}/${s}/${N}`,"i"),B=[{regex:l,indices:c,postModify:i},{regex:C,indices:P,postModify:h},{regex:q,indices:{bucket:1,path:2},postModify:h}];for(let H=0;H<B.length;H++){const oe=B[H],ae=oe.regex.exec(e);if(ae){const v=ae[oe.indices.bucket];let _=ae[oe.indices.path];_||(_=""),r=new Rt(v,_),oe.postModify(r);break}}if(r==null)throw jw(e);return r}}class Qw{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Xw(n,e,t){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let h=!1;function p(...N){h||(h=!0,e.apply(null,N))}function m(N){s=setTimeout(()=>{s=null,n(C,c())},N)}function E(){i&&clearTimeout(i)}function C(N,...q){if(h){E();return}if(N){E(),p.call(null,N,...q);return}if(c()||o){E(),p.call(null,N,...q);return}r<64&&(r*=2);let B;l===1?(l=2,B=0):B=(r+Math.random())*1e3,m(B)}let P=!1;function F(N){P||(P=!0,E(),!h&&(s!==null?(N||(l=2),clearTimeout(s),m(0)):N||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,F(!0)},t),F}function Jw(n){n(!1)}/**
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
 */function Zw(n){return n!==void 0}function e_(n){return typeof n=="object"&&!Array.isArray(n)}function gu(n){return typeof n=="string"||n instanceof String}function Od(n){return wu()&&n instanceof Blob}function wu(){return typeof Blob<"u"}function Nd(n,e,t,r){if(r<e)throw cc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw cc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function _u(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function q0(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var vr;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(vr||(vr={}));/**
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
 */class n_{constructor(e,t,r,s,i,o,l,c,h,p,m,E=!0,C=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=h,this.progressCallback_=p,this.connectionFactory_=m,this.retry=E,this.isUsingEmulator=C,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,F)=>{this.resolve_=P,this.reject_=F,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new _o(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===vr.NO_ERROR,c=i.getStatus();if(!l||t_(c,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===vr.ABORT;r(!1,new _o(!1,null,p));return}const h=this.successCodes_.indexOf(c)!==-1;r(!0,new _o(h,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());Zw(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=mu();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?j0():Hw();o(c)}else{const c=$w();o(c)}};this.canceled_?t(!1,new _o(!1,null,!0)):this.backoffId_=Xw(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Jw(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _o{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function r_(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function s_(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function i_(n,e){e&&(n["X-Firebase-GMPID"]=e)}function o_(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function a_(n,e,t,r,s,i,o=!0,l=!1){const c=q0(n.urlParams),h=n.url+c,p=Object.assign({},n.headers);return i_(p,e),r_(p,t),s_(p,i),o_(p,r),new n_(h,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,l)}/**
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
 */function l_(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function c_(...n){const e=l_();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(wu())return new Blob(n);throw new Se(Re.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function u_(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */const Kt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Dl{constructor(e,t){this.data=e,this.contentType=t||null}}function d_(n,e){switch(n){case Kt.RAW:return new Dl(z0(e));case Kt.BASE64:case Kt.BASE64URL:return new Dl(G0(n,e));case Kt.DATA_URL:return new Dl(p_(e),m_(e))}throw mu()}function z0(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function f_(n){let e;try{e=decodeURIComponent(n)}catch{throw ii(Kt.DATA_URL,"Malformed data URL.")}return z0(e)}function G0(n,e){switch(n){case Kt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ii(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Kt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ii(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=h_(e)}catch(s){throw s.message.includes("polyfill")?s:ii(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class W0{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ii(Kt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=g_(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function p_(n){const e=new W0(n);return e.base64?G0(Kt.BASE64,e.rest):f_(e.rest)}function m_(n){return new W0(n).contentType}function g_(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Ln{constructor(e,t){let r=0,s="";Od(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Od(this.data_)){const r=this.data_,s=u_(r,e,t);return s===null?null:new Ln(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Ln(r,!0)}}static getBlob(...e){if(wu()){const t=e.map(r=>r instanceof Ln?r.data_:r);return new Ln(c_.apply(null,t))}else{const t=e.map(o=>gu(o)?d_(Kt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new Ln(s,!0)}}uploadData(){return this.data_}}/**
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
 */function K0(n){let e;try{e=JSON.parse(n)}catch{return null}return e_(e)?e:null}/**
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
 */function w_(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function __(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Y0(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function y_(n,e){return e}class ct{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||y_}}let yo=null;function b_(n){return!gu(n)||n.length<2?n:Y0(n)}function Q0(){if(yo)return yo;const n=[];n.push(new ct("bucket")),n.push(new ct("generation")),n.push(new ct("metageneration")),n.push(new ct("name","fullPath",!0));function e(i,o){return b_(o)}const t=new ct("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new ct("size");return s.xform=r,n.push(s),n.push(new ct("timeCreated")),n.push(new ct("updated")),n.push(new ct("md5Hash",null,!0)),n.push(new ct("cacheControl",null,!0)),n.push(new ct("contentDisposition",null,!0)),n.push(new ct("contentEncoding",null,!0)),n.push(new ct("contentLanguage",null,!0)),n.push(new ct("contentType",null,!0)),n.push(new ct("metadata","customMetadata",!0)),yo=n,yo}function v_(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Rt(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function E_(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return v_(r,n),r}function X0(n,e,t){const r=K0(e);return r===null?null:E_(n,r,t)}function T_(n,e,t,r){const s=K0(e);if(s===null||!gu(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const p=n.bucket,m=n.fullPath,E="/b/"+o(p)+"/o/"+o(m),C=_u(E,t,r),P=q0({alt:"media",token:h});return C+P})[0]}function A_(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class J0{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Z0(n){if(!n)throw mu()}function I_(n,e){function t(r,s){const i=X0(n,s,e);return Z0(i!==null),i}return t}function x_(n,e){function t(r,s){const i=X0(n,s,e);return Z0(i!==null),T_(i,s,n.host,n._protocol)}return t}function ep(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Fw():s=Bw():t.getStatus()===402?s=Mw(n.bucket):t.getStatus()===403?s=Uw(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function C_(n){const e=ep(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Lw(n.path)),i.serverResponse=s.serverResponse,i}return t}function R_(n,e,t){const r=e.fullServerUrl(),s=_u(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,l=new J0(s,i,x_(n,t),o);return l.errorHandler=C_(e),l}function S_(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function P_(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=S_(null,e)),r}function k_(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let B="";for(let H=0;H<2;H++)B=B+Math.random().toString().slice(2);return B}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const h=P_(e,r,s),p=A_(h,t),m="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+c+`\r
Content-Type: `+h.contentType+`\r
\r
`,E=`\r
--`+c+"--",C=Ln.getBlob(m,r,E);if(C===null)throw Gw();const P={name:h.fullPath},F=_u(i,n.host,n._protocol),N="POST",q=n.maxUploadRetryTime,J=new J0(F,N,I_(n,t),q);return J.urlParams=P,J.headers=o,J.body=C.uploadData(),J.errorHandler=ep(e),J}class O_{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=vr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=vr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=vr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw $s("cannot .send() more than once");if(kr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw $s("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw $s("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw $s("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw $s("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class N_ extends O_{initXhr(){this.xhr_.responseType="text"}}function tp(){return new N_}/**
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
 */class Sr{constructor(e,t){this._service=e,t instanceof Rt?this._location=t:this._location=Rt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Sr(e,t)}get root(){const e=new Rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Y0(this._location.path)}get storage(){return this._service}get parent(){const e=w_(this._location.path);if(e===null)return null;const t=new Rt(this._location.bucket,e);return new Sr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Yw(e)}}function D_(n,e,t){n._throwIfRoot("uploadBytes");const r=k_(n.storage,n._location,Q0(),new Ln(e,!0),t);return n.storage.makeRequestWithTokens(r,tp).then(s=>({metadata:s,ref:n}))}function V_(n){n._throwIfRoot("getDownloadURL");const e=R_(n.storage,n._location,Q0());return n.storage.makeRequestWithTokens(e,tp).then(t=>{if(t===null)throw Ww();return t})}function L_(n,e){const t=__(n._location.path,e),r=new Rt(n._location.bucket,t);return new Sr(n.storage,r)}/**
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
 */function M_(n){return/^[A-Za-z]+:\/\//.test(n)}function B_(n,e){return new Sr(n,e)}function np(n,e){if(n instanceof yu){const t=n;if(t._bucket==null)throw zw();const r=new Sr(t,t._bucket);return e!=null?np(r,e):r}else return e!==void 0?L_(n,e):n}function F_(n,e){if(e&&M_(e)){if(n instanceof yu)return B_(n,e);throw cc("To use ref(service, url), the first argument must be a Storage instance.")}else return np(n,e)}function Dd(n,e){const t=e==null?void 0:e[H0];return t==null?null:Rt.makeFromBucketSpec(t,n)}function U_(n,e,t,r={}){n.host=`${e}:${t}`;const s=kr(e);s&&mc(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:r2(i,n.app.options.projectId))}class yu{constructor(e,t,r,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=$0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Dw,this._maxUploadRetryTime=Vw,this._requests=new Set,s!=null?this._bucket=Rt.makeFromBucketSpec(s,this._host):this._bucket=Dd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Rt.makeFromBucketSpec(this._url,e):this._bucket=Dd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Nd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Nd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(It(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Sr(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new Qw(j0());{const o=a_(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Vd="@firebase/storage",Ld="0.14.3";/**
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
 */const rp="storage";function $_(n,e,t){return n=ze(n),D_(n,e,t)}function H_(n){return n=ze(n),V_(n)}function j_(n,e){return n=ze(n),F_(n,e)}function q_(n=_c(),e){n=ze(n);const r=wa(n,rp).getImmediate({identifier:e}),s=Zd("storage");return s&&z_(r,...s),r}function z_(n,e,t,r={}){U_(n,e,t,r)}function G_(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new yu(t,r,s,e,Or)}function W_(){Ar(new Kn(rp,G_,"PUBLIC").setMultipleInstances(!0)),Yt(Vd,Ld,""),Yt(Vd,Ld,"esm2020")}W_();const K_={apiKey:"AIzaSyBqp05sQ2AGH1h2IA6KN05xuvPBUp1QM6Q",authDomain:"lames-4f738.firebaseapp.com",projectId:"lames-4f738",storageBucket:"lames-4f738.firebasestorage.app",messagingSenderId:"264169063078",appId:"1:264169063078:web:ccbb1e504f50b87281ea67"};let bo,Wn,Mt,sp,Ve=!1;try{bo=o2(K_),Wn=E7(bo),Mt=Tw(bo),sp=q_(bo),Ve=!0}catch(n){console.error("Erro ao inicializar o Firebase:",n)}async function bu(n){if(!Ve)return null;const e=qn(Mt,"whitelist",n.toLowerCase().trim()),t=await pu(e);if(t.exists()){const r=t.data();let s="colaborador";const o=Object.keys(r).find(l=>l.toLowerCase()==="role"||l.toLowerCase()==="perfil");return o&&r[o]&&(s=String(r[o]).toLowerCase().trim()),{...r,role:s}}return null}async function Y_(n,e){if(!Ve){if(n==="admin@lames.org"&&e==="admin123")return{user:{email:n},role:"admin"};if(n==="colab@lames.org"&&e==="colab123")return{user:{email:n},role:"colaborador"};throw new Error("Firebase não configurado. Use as credenciais de demonstração (admin@lames.org/admin123 ou colab@lames.org/colab123).")}const r=(await l4(Wn,n,e)).user;try{const s=await bu(r.email);if(!s)throw await $o(Wn),new Error("Este e-mail não está autorizado a acessar o sistema.");return{user:r,role:s.role}}catch(s){throw await $o(Wn),s}}async function Q_(n,e){if(!Ve)throw new Error("O cadastro de novos usuários necessita do Firebase configurado.");const r=(await a4(Wn,n,e)).user;try{const s=await bu(r.email);if(!s)throw await oh(r),new Error("Seu e-mail não está cadastrado na whitelist do laboratório. Solicite acesso ao administrador.");return{user:r,role:s.role}}catch(s){try{await oh(r)}catch{}throw s}}async function vu(){Ve&&await $o(Wn)}function X_(n){if(!Ve){const e=localStorage.getItem("demo_user"),t=localStorage.getItem("demo_role");return e&&t?n({email:e},t):n(null,null),()=>{}}return h4(Wn,async e=>{if(e){const t=await bu(e.email);t?n(e,t.role):(await $o(Wn),n(null,null))}else n(null,null)})}let vo=null,Ks=null,uc=null,Do=null;const ip={};function ja(n,e){ip[n]=e}function At(n){window.location.hash=n}async function Md(){if(!Ks)return;let n=window.location.hash.slice(1)||"login";if(uc){if(n==="login"){At(Do==="admin"?"admin":"inicio");return}if(n==="admin"&&Do!=="admin"){At("inicio");return}}else if(n!=="login"){At("login");return}const e=ip[n];e?(Ks.innerHTML="",vo&&typeof vo.destroy=="function"&&vo.destroy(),vo=await e(Ks,uc,Do)):Ks.innerHTML='<div class="text-center p-20"><h1 class="text-2xl font-bold">Página não encontrada (404)</h1><a href="#login" class="text-blue-500 underline mt-4 inline-block">Voltar ao início</a></div>'}function J_(n){Ks=n,window.addEventListener("hashchange",Md),X_((e,t)=>{uc=e,Do=t,Md()})}/*!
* sweetalert2 v11.26.25
* Released under the MIT License.
*/function op(n,e,t){if(typeof n=="function"?n===e:n.has(e))return arguments.length<3?e:t;throw new TypeError("Private element is not present on this object")}function Z_(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Bd(n,e){return n.get(op(n,e))}function ey(n,e,t){Z_(n,e),e.set(n,t)}function ty(n,e,t){return n.set(op(n,e),t),t}const ny=100,Y={},ry=()=>{Y.previousActiveElement instanceof HTMLElement?(Y.previousActiveElement.focus(),Y.previousActiveElement=null):document.body&&document.body.focus()},sy=n=>new Promise(e=>{if(!n)return e();const t=window.scrollX,r=window.scrollY;Y.restoreFocusTimeout=setTimeout(()=>{ry(),e()},ny),window.scrollTo(t,r)}),ap="swal2-",iy=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],O=iy.reduce((n,e)=>(n[e]=ap+e,n),{}),oy=["success","warning","info","question","error"],la=oy.reduce((n,e)=>(n[e]=ap+e,n),{}),lp="SweetAlert2:",Eu=n=>n.charAt(0).toUpperCase()+n.slice(1),dt=n=>{console.warn(`${lp} ${typeof n=="object"?n.join(" "):n}`)},Fr=n=>{console.error(`${lp} ${n}`)},Fd=[],ay=n=>{Fd.includes(n)||(Fd.push(n),dt(n))},cp=(n,e=null)=>{ay(`"${n}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},qa=n=>typeof n=="function"?n():n,Tu=n=>n&&typeof n.toPromise=="function",Hi=n=>Tu(n)?n.toPromise():Promise.resolve(n),Au=n=>n&&Promise.resolve(n)===n,ly=()=>navigator.userAgent.includes("Firefox"),ft=()=>document.body.querySelector(`.${O.container}`),ji=n=>{const e=ft();return e?e.querySelector(n):null},kt=n=>ji(`.${n}`),we=()=>kt(O.popup),ys=()=>kt(O.icon),cy=()=>kt(O["icon-content"]),up=()=>kt(O.title),Iu=()=>kt(O["html-container"]),hp=()=>kt(O.image),xu=()=>kt(O["progress-steps"]),za=()=>kt(O["validation-message"]),on=()=>ji(`.${O.actions} .${O.confirm}`),bs=()=>ji(`.${O.actions} .${O.cancel}`),Ur=()=>ji(`.${O.actions} .${O.deny}`),uy=()=>kt(O["input-label"]),vs=()=>ji(`.${O.loader}`),qi=()=>kt(O.actions),dp=()=>kt(O.footer),Ga=()=>kt(O["timer-progress-bar"]),Cu=()=>kt(O.close),hy=`
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
`,Ru=()=>{const n=we();if(!n)return[];const e=n.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),t=Array.from(e).sort((i,o)=>{const l=parseInt(i.getAttribute("tabindex")||"0"),c=parseInt(o.getAttribute("tabindex")||"0");return l>c?1:l<c?-1:0}),r=n.querySelectorAll(hy),s=Array.from(r).filter(i=>i.getAttribute("tabindex")!=="-1");return[...new Set(t.concat(s))].filter(i=>_t(i))},Su=()=>gn(document.body,O.shown)&&!gn(document.body,O["toast-shown"])&&!gn(document.body,O["no-backdrop"]),Wa=()=>{const n=we();return n?gn(n,O.toast):!1},dy=()=>{const n=we();return n?n.hasAttribute("data-loading"):!1},Ot=(n,e)=>{if(n.textContent="",e){const r=new DOMParser().parseFromString(e,"text/html"),s=r.querySelector("head");s&&Array.from(s.childNodes).forEach(o=>{n.appendChild(o)});const i=r.querySelector("body");i&&Array.from(i.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?n.appendChild(o.cloneNode(!0)):n.appendChild(o)})}},gn=(n,e)=>e?e.split(/\s+/).every(t=>n.classList.contains(t)):!1,fy=(n,e)=>{Array.from(n.classList).forEach(t=>{!Object.values(O).includes(t)&&!Object.values(la).includes(t)&&!Object.values(e.showClass||{}).includes(t)&&n.classList.remove(t)})},St=(n,e,t)=>{if(fy(n,e),!e.customClass)return;const r=e.customClass[t];if(r){if(typeof r!="string"&&!r.forEach){dt(`Invalid type of customClass.${t}! Expected string or iterable object, got "${typeof r}"`);return}ge(n,r)}},Ka=(n,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return n.querySelector(`.${O.popup} > .${O[e]}`);case"checkbox":return n.querySelector(`.${O.popup} > .${O.checkbox} input`);case"radio":return n.querySelector(`.${O.popup} > .${O.radio} input:checked`)||n.querySelector(`.${O.popup} > .${O.radio} input:first-child`);case"range":return n.querySelector(`.${O.popup} > .${O.range} input`);default:return n.querySelector(`.${O.popup} > .${O.input}`)}},fp=n=>{if(n.focus(),n.type!=="file"){const e=n.value;n.value="",n.value=e}},pp=(n,e,t)=>{if(!n||!e)return;const r=typeof e=="string"?e.split(/\s+/).filter(Boolean):e;(Array.isArray(n)?n:[n]).forEach(i=>{r.forEach(o=>{t?i.classList.add(o):i.classList.remove(o)})})},ge=(n,e)=>{pp(n,e,!0)},Vt=(n,e)=>{pp(n,e,!1)},Mn=(n,e)=>Array.from(n.children).find(t=>t instanceof HTMLElement&&gn(t,e)),Er=(n,e,t)=>{t===`${parseInt(`${t}`)}`&&(t=parseInt(t)),t||t===0?n.style.setProperty(e,typeof t=="number"?`${t}px`:t):n.style.removeProperty(e)},Ye=(n,e="flex")=>{n&&(n.style.display=e)},it=n=>{n&&(n.style.display="none")},Pu=(n,e="block")=>{n&&new MutationObserver(()=>{zi(n,n.innerHTML,e)}).observe(n,{childList:!0,subtree:!0})},Ud=(n,e,t,r)=>{const s=n.querySelector(e);s&&s.style.setProperty(t,r)},zi=(n,e,t="flex")=>{e?Ye(n,t):it(n)},_t=n=>!!(n&&(n.offsetWidth||n.offsetHeight||n.getClientRects().length)),py=()=>!_t(on())&&!_t(Ur())&&!_t(bs()),hc=n=>n.scrollHeight>n.clientHeight,my=(n,e)=>{let t=n;for(;t&&t!==e;){if(hc(t))return!0;t=t.parentElement}return!1},mp=n=>{const e=window.getComputedStyle(n),t=parseFloat(e.getPropertyValue("animation-duration")||"0"),r=parseFloat(e.getPropertyValue("transition-duration")||"0");return t>0||r>0},ku=(n,e=!1)=>{const t=Ga();t&&_t(t)&&(e&&(t.style.transition="none",t.style.width="100%"),setTimeout(()=>{t.style.transition=`width ${n/1e3}s linear`,t.style.width="0%"},10))},gy=()=>{const n=Ga();if(!n)return;const e=parseInt(window.getComputedStyle(n).width);n.style.removeProperty("transition"),n.style.width="100%";const t=parseInt(window.getComputedStyle(n).width),r=e/t*100;n.style.width=`${r}%`},wy=()=>typeof window>"u"||typeof document>"u",_y=`
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
`.replace(/(^|\n)\s*/g,""),yy=()=>{const n=ft();return n?(n.remove(),Vt([document.documentElement,document.body],[O["no-backdrop"],O["toast-shown"],O["has-column"]]),!0):!1},pr=()=>{Y.currentInstance&&Y.currentInstance.resetValidationMessage()},by=()=>{const n=we();if(!n)return;const e=Mn(n,O.input),t=Mn(n,O.file),r=n.querySelector(`.${O.range} input`),s=n.querySelector(`.${O.range} output`),i=Mn(n,O.select),o=n.querySelector(`.${O.checkbox} input`),l=Mn(n,O.textarea);e&&(e.oninput=pr),t&&(t.onchange=pr),i&&(i.onchange=pr),o&&(o.onchange=pr),l&&(l.oninput=pr),r&&s&&(r.oninput=()=>{pr(),s.value=r.value},r.onchange=()=>{pr(),s.value=r.value})},vy=n=>{if(typeof n=="string"){const e=document.querySelector(n);if(!e)throw new Error(`Target element "${n}" not found`);return e}return n},Ey=n=>{const e=we();e&&(e.setAttribute("role",n.toast?"alert":"dialog"),e.setAttribute("aria-live",n.toast?"polite":"assertive"),n.toast||e.setAttribute("aria-modal","true"))},Ty=n=>{window.getComputedStyle(n).direction==="rtl"&&(ge(ft(),O.rtl),Y.isRTL=!0)},Ay=n=>{const e=yy();if(wy()){Fr("SweetAlert2 requires document to initialize");return}const t=document.createElement("div");t.className=O.container,e&&ge(t,O["no-transition"]),Ot(t,_y),t.dataset.swal2Theme=n.theme;const r=vy(n.target||"body");r.appendChild(t),n.topLayer&&(t.setAttribute("popover",""),t.showPopover()),Ey(n),Ty(r),by()},Ou=(n,e)=>{n instanceof HTMLElement?e.appendChild(n):typeof n=="object"?Iy(n,e):n&&Ot(e,n)},Iy=(n,e)=>{"jquery"in n?xy(e,n):Ot(e,n.toString())},xy=(n,e)=>{if(n.textContent="",0 in e)for(let t=0;t in e;t++)n.appendChild(e[t].cloneNode(!0));else n.appendChild(e.cloneNode(!0))},Cy=(n,e)=>{const t=qi(),r=vs();!t||!r||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?it(t):Ye(t),St(t,e,"actions"),Ry(t,r,e),Ot(r,e.loaderHtml||""),St(r,e,"loader"))};function Ry(n,e,t){const r=on(),s=Ur(),i=bs();!r||!s||!i||(Vl(r,"confirm",t),Vl(s,"deny",t),Vl(i,"cancel",t),Sy(r,s,i,t),t.reverseButtons&&(t.toast?(n.insertBefore(i,r),n.insertBefore(s,r)):(n.insertBefore(i,e),n.insertBefore(s,e),n.insertBefore(r,e))))}function Sy(n,e,t,r){if(!r.buttonsStyling){Vt([n,e,t],O.styled);return}ge([n,e,t],O.styled),[[n,"confirm",r.confirmButtonColor],[e,"deny",r.denyButtonColor],[t,"cancel",r.cancelButtonColor]].forEach(([i,o,l])=>{l&&i.style.setProperty(`--swal2-${o}-button-background-color`,l),Py(i)})}function Py(n){const e=window.getComputedStyle(n);if(e.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const t=e.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");n.style.setProperty("--swal2-action-button-focus-box-shadow",e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${t}`))}function Vl(n,e,t){const r=Eu(e);zi(n,t[`show${r}Button`],"inline-block"),Ot(n,t[`${e}ButtonText`]||""),n.setAttribute("aria-label",t[`${e}ButtonAriaLabel`]||""),n.className=O[e],St(n,t,`${e}Button`)}const ky=(n,e)=>{const t=Cu();t&&(Ot(t,e.closeButtonHtml||""),St(t,e,"closeButton"),zi(t,e.showCloseButton),t.setAttribute("aria-label",e.closeButtonAriaLabel||""))},Oy=(n,e)=>{const t=ft();t&&(Ny(t,e.backdrop),Dy(t,e.position),Vy(t,e.grow),St(t,e,"container"))};function Ny(n,e){typeof e=="string"?n.style.background=e:e||ge([document.documentElement,document.body],O["no-backdrop"])}function Dy(n,e){e&&(e in O?ge(n,O[e]):(dt('The "position" parameter is not valid, defaulting to "center"'),ge(n,O.center)))}function Vy(n,e){e&&ge(n,O[`grow-${e}`])}var ye={innerParams:new WeakMap,domCache:new WeakMap,focusedElement:new WeakMap};const Ly=["input","file","range","select","radio","checkbox","textarea"],My=(n,e)=>{const t=we();if(!t)return;const r=ye.innerParams.get(n),s=!r||e.input!==r.input;Ly.forEach(i=>{const o=Mn(t,O[i]);o&&(Uy(i,e.inputAttributes),o.className=O[i],s&&it(o))}),e.input&&(s&&By(e),$y(e))},By=n=>{if(!n.input)return;if(!Oe[n.input]){Fr(`Unexpected type of input! Expected ${Object.keys(Oe).join(" | ")}, got "${n.input}"`);return}const e=gp(n.input);if(!e)return;const t=Oe[n.input](e,n);Ye(e),n.inputAutoFocus&&setTimeout(()=>{fp(t)})},Fy=n=>{for(const{name:e}of Array.from(n.attributes))["id","type","value","style"].includes(e)||n.removeAttribute(e)},Uy=(n,e)=>{const t=we();if(!t)return;const r=Ka(t,n);if(r){Fy(r);for(const s in e)r.setAttribute(s,e[s])}},$y=n=>{if(!n.input)return;const e=gp(n.input);e&&St(e,n,"input")},Nu=(n,e)=>{!n.placeholder&&e.inputPlaceholder&&(n.placeholder=e.inputPlaceholder)},Gi=(n,e,t)=>{if(t.inputLabel){const r=document.createElement("label"),s=O["input-label"];r.setAttribute("for",n.id),r.className=s,typeof t.customClass=="object"&&ge(r,t.customClass.inputLabel),r.innerText=t.inputLabel,e.insertAdjacentElement("beforebegin",r)}},gp=n=>{const e=we();if(e)return Mn(e,O[n]||O.input)},ca=(n,e)=>{["string","number"].includes(typeof e)?n.value=`${e}`:Au(e)||dt(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},Oe={};Oe.text=Oe.email=Oe.password=Oe.number=Oe.tel=Oe.url=Oe.search=Oe.date=Oe["datetime-local"]=Oe.time=Oe.week=Oe.month=(n,e)=>{const t=n;return ca(t,e.inputValue),Gi(t,t,e),Nu(t,e),t.type=e.input,t};Oe.file=(n,e)=>{const t=n;return Gi(t,t,e),Nu(t,e),t};Oe.range=(n,e)=>{const t=n,r=t.querySelector("input"),s=t.querySelector("output");return r&&(ca(r,e.inputValue),r.type=e.input,Gi(r,n,e)),s&&ca(s,e.inputValue),n};Oe.select=(n,e)=>{const t=n;if(t.textContent="",e.inputPlaceholder){const r=document.createElement("option");Ot(r,e.inputPlaceholder),r.value="",r.disabled=!0,r.selected=!0,t.appendChild(r)}return Gi(t,t,e),t};Oe.radio=n=>{const e=n;return e.textContent="",n};Oe.checkbox=(n,e)=>{const t=we();if(!t)throw new Error("Popup not found");const r=Ka(t,"checkbox");if(!r)throw new Error("Checkbox input not found");r.value="1",r.checked=!!e.inputValue;const i=n.querySelector("span");if(i){const o=e.inputPlaceholder||e.inputLabel;o&&Ot(i,o)}return r};Oe.textarea=(n,e)=>{const t=n;ca(t,e.inputValue),Nu(t,e),Gi(t,t,e);const r=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=we();if(!s)return;const i=parseInt(window.getComputedStyle(s).width),o=()=>{if(!document.body.contains(t))return;const l=t.offsetWidth+r(t),c=we();c&&(l>i?c.style.width=`${l}px`:Er(c,"width",e.width))};new MutationObserver(o).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const Hy=(n,e)=>{const t=Iu();t&&(Pu(t),St(t,e,"htmlContainer"),e.html?(Ou(e.html,t),Ye(t,"block")):e.text?(t.textContent=e.text,Ye(t,"block")):it(t),My(n,e))},jy=(n,e)=>{const t=dp();t&&(Pu(t),zi(t,!!e.footer,"block"),e.footer&&Ou(e.footer,t),St(t,e,"footer"))},qy=(n,e)=>{const t=ye.innerParams.get(n),r=ys();if(!r)return;if(t&&e.icon===t.icon){Hd(r,e),$d(r,e);return}if(!e.icon&&!e.iconHtml){it(r);return}if(e.icon&&Object.keys(la).indexOf(e.icon)===-1){Fr(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),it(r);return}Ye(r),Hd(r,e),$d(r,e),ge(r,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",wp)},$d=(n,e)=>{for(const[t,r]of Object.entries(la))e.icon!==t&&Vt(n,r);ge(n,e.icon&&la[e.icon]),Wy(n,e),wp(),St(n,e,"icon")},wp=()=>{const n=we();if(!n)return;const e=window.getComputedStyle(n).getPropertyValue("background-color");n.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix").forEach(r=>{r.style.backgroundColor=e})},zy=n=>`
  ${n.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${n.animation?'<div class="swal2-success-fix"></div>':""}
  ${n.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,Gy=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Hd=(n,e)=>{if(!e.icon&&!e.iconHtml)return;let t=n.innerHTML,r="";e.iconHtml?r=jd(e.iconHtml):e.icon==="success"?(r=zy(e),t=t.replace(/ style=".*?"/g,"")):e.icon==="error"?r=Gy:e.icon&&(r=jd({question:"?",warning:"!",info:"i"}[e.icon])),t.trim()!==r.trim()&&Ot(n,r)},Wy=(n,e)=>{if(e.iconColor){n.style.color=e.iconColor,n.style.borderColor=e.iconColor;for(const t of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Ud(n,t,"background-color",e.iconColor);Ud(n,".swal2-success-ring","border-color",e.iconColor)}},jd=n=>`<div class="${O["icon-content"]}">${n}</div>`,Ky=(n,e)=>{const t=hp();if(t){if(!e.imageUrl){it(t);return}Ye(t,""),t.setAttribute("src",e.imageUrl),t.setAttribute("alt",e.imageAlt||""),Er(t,"width",e.imageWidth),Er(t,"height",e.imageHeight),t.className=O.image,St(t,e,"image")}};let Du=!1,_p=0,yp=0,bp=0,vp=0;const Yy=n=>{n.addEventListener("mousedown",ua),document.body.addEventListener("mousemove",ha),n.addEventListener("mouseup",da),n.addEventListener("touchstart",ua),document.body.addEventListener("touchmove",ha),n.addEventListener("touchend",da)},Qy=n=>{n.removeEventListener("mousedown",ua),document.body.removeEventListener("mousemove",ha),n.removeEventListener("mouseup",da),n.removeEventListener("touchstart",ua),document.body.removeEventListener("touchmove",ha),n.removeEventListener("touchend",da)},ua=n=>{const e=we();if(!e)return;const t=ys();if(n.target===e||t&&t.contains(n.target)){Du=!0;const r=Ep(n);_p=r.clientX,yp=r.clientY,bp=parseInt(e.style.insetInlineStart)||0,vp=parseInt(e.style.insetBlockStart)||0,ge(e,"swal2-dragging")}},ha=n=>{const e=we();if(e&&Du){let{clientX:t,clientY:r}=Ep(n);const s=t-_p;e.style.insetInlineStart=`${bp+(Y.isRTL?-s:s)}px`,e.style.insetBlockStart=`${vp+(r-yp)}px`}},da=()=>{const n=we();Du=!1,Vt(n,"swal2-dragging")},Ep=n=>{const e=n.type.startsWith("touch")?n.touches[0]:n;return{clientX:e.clientX,clientY:e.clientY}},Xy=(n,e)=>{const t=ft(),r=we();if(!(!t||!r)){if(e.toast){Er(t,"width",e.width),r.style.width="100%";const s=vs();s&&r.insertBefore(s,ys())}else Er(r,"width",e.width);Er(r,"padding",e.padding),e.color&&(r.style.color=e.color),e.background&&(r.style.background=e.background),it(za()),Jy(r,e),e.draggable&&!e.toast?(ge(r,O.draggable),Yy(r)):(Vt(r,O.draggable),Qy(r))}},Jy=(n,e)=>{const t=e.showClass||{};n.className=`${O.popup} ${_t(n)?t.popup:""}`,e.toast?(ge([document.documentElement,document.body],O["toast-shown"]),ge(n,O.toast)):ge(n,O.modal),St(n,e,"popup"),typeof e.customClass=="string"&&ge(n,e.customClass),e.icon&&ge(n,O[`icon-${e.icon}`])},Zy=(n,e)=>{const t=xu();if(!t)return;const{progressSteps:r,currentProgressStep:s}=e;if(!r||r.length===0||s===void 0){it(t);return}Ye(t),t.textContent="",s>=r.length&&dt("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),r.forEach((i,o)=>{const l=eb(i);if(t.appendChild(l),o===s&&ge(l,O["active-progress-step"]),o!==r.length-1){const c=tb(e);t.appendChild(c)}})},eb=n=>{const e=document.createElement("li");return ge(e,O["progress-step"]),Ot(e,n),e},tb=n=>{const e=document.createElement("li");return ge(e,O["progress-step-line"]),n.progressStepsDistance&&Er(e,"width",n.progressStepsDistance),e},nb=(n,e)=>{const t=up();t&&(Pu(t),zi(t,!!(e.title||e.titleText),"block"),e.title&&Ou(e.title,t),e.titleText&&(t.innerText=e.titleText),St(t,e,"title"))},Tp=(n,e)=>{var t;Xy(n,e),Oy(n,e),Zy(n,e),qy(n,e),Ky(n,e),nb(n,e),ky(n,e),Hy(n,e),Cy(n,e),jy(n,e);const r=we();typeof e.didRender=="function"&&r&&e.didRender(r),(t=Y.eventEmitter)===null||t===void 0||t.emit("didRender",r)},rb=()=>_t(we()),Ap=()=>{var n;return(n=on())===null||n===void 0?void 0:n.click()},sb=()=>{var n;return(n=Ur())===null||n===void 0?void 0:n.click()},ib=()=>{var n;return(n=bs())===null||n===void 0?void 0:n.click()},Es=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Ip=n=>{if(n.keydownTarget&&n.keydownHandlerAdded&&n.keydownHandler){const e=n.keydownHandler;n.keydownTarget.removeEventListener("keydown",e,{capture:n.keydownListenerCapture}),n.keydownHandlerAdded=!1}},ob=(n,e,t)=>{if(Ip(n),!e.toast){const r=i=>lb(e,i,t);n.keydownHandler=r;const s=e.keydownListenerCapture?window:we();if(s){n.keydownTarget=s,n.keydownListenerCapture=e.keydownListenerCapture;const i=r;n.keydownTarget.addEventListener("keydown",i,{capture:n.keydownListenerCapture}),n.keydownHandlerAdded=!0}}},dc=(n,e)=>{var t;const r=Ru();return r.length?(n=n+e,n===-2&&(n=r.length-1),n===r.length?n=0:n===-1&&(n=r.length-1),r[n].focus(),!(ly()&&r[n]instanceof HTMLIFrameElement)):((t=we())===null||t===void 0||t.focus(),!0)},xp=["ArrowRight","ArrowDown"],ab=["ArrowLeft","ArrowUp"],lb=(n,e,t)=>{n&&(e.isComposing||e.keyCode===229||(n.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?cb(e,n):e.key==="Tab"?ub(e):[...xp,...ab].includes(e.key)?hb(e.key):e.key==="Escape"&&db(e,n,t)))},cb=(n,e)=>{if(!qa(e.allowEnterKey))return;const t=we();if(!t||!e.input)return;const r=Ka(t,e.input);if(n.target&&r&&n.target instanceof HTMLElement&&n.target.outerHTML===r.outerHTML){if(["textarea","file"].includes(e.input))return;Ap(),n.preventDefault()}},ub=n=>{const e=n.target,r=Ru().findIndex(i=>i===e);let s=!0;n.shiftKey?s=dc(r,-1):s=dc(r,1),n.stopPropagation(),s&&n.preventDefault()},hb=n=>{const e=qi(),t=on(),r=Ur(),s=bs();if(!e||!t||!r||!s)return;const i=[t,r,s];if(document.activeElement instanceof HTMLElement&&!i.includes(document.activeElement))return;const o=xp.includes(n)?"nextElementSibling":"previousElementSibling";let l=document.activeElement;if(l){for(let c=0;c<e.children.length;c++){if(l=l[o],!l)return;if(l instanceof HTMLButtonElement&&_t(l))break}l instanceof HTMLButtonElement&&l.focus()}},db=(n,e,t)=>{n.preventDefault(),qa(e.allowEscapeKey)&&t(Es.esc)};var ls={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const fb=()=>{const n=ft();Array.from(document.body.children).forEach(t=>{t.contains(n)||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")||""),t.setAttribute("aria-hidden","true"))})},Cp=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Vu=typeof window<"u"&&!!window.GestureEvent,pb=Vu&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,mb=()=>{if(Vu&&!gn(document.body,O.iosfix)){const n=document.body.scrollTop;document.body.style.top=`${n*-1}px`,ge(document.body,O.iosfix),gb()}},gb=()=>{const n=ft();if(!n)return;let e;n.ontouchstart=t=>{e=wb(t)},n.ontouchmove=t=>{e&&(t.preventDefault(),t.stopPropagation())}},wb=n=>{const e=n.target,t=ft(),r=Iu();return!t||!r||_b(n)||yb(n)?!1:e===t||!hc(t)&&e instanceof HTMLElement&&!my(e,r)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(hc(r)&&r.contains(e))},_b=n=>!!(n.touches&&n.touches.length&&n.touches[0].touchType==="stylus"),yb=n=>n.touches&&n.touches.length>1,bb=()=>{if(gn(document.body,O.iosfix)){const n=parseInt(document.body.style.top,10);Vt(document.body,O.iosfix),document.body.style.top="",document.body.scrollTop=n*-1}},vb=()=>{const n=document.createElement("div");n.className=O["scrollbar-measure"],document.body.appendChild(n);const e=n.getBoundingClientRect().width-n.clientWidth;return document.body.removeChild(n),e};let ts=null;const Eb=n=>{ts===null&&(document.body.scrollHeight>window.innerHeight||n==="scroll")&&(ts=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${ts+vb()}px`)},Tb=()=>{ts!==null&&(document.body.style.paddingRight=`${ts}px`,ts=null)};function Rp(n,e,t,r){Wa()?qd(n,r):(sy(t).then(()=>qd(n,r)),Ip(Y)),Vu?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Su()&&(Tb(),bb(),Cp()),Ab()}function Ab(){Vt([document.documentElement,document.body],[O.shown,O["height-auto"],O["no-backdrop"],O["toast-shown"]])}function Bn(n){n=xb(n);const e=ls.swalPromiseResolve.get(this),t=Ib(this);this.isAwaitingPromise?n.isDismissed||(Wi(this),e(n)):t&&e(n)}const Ib=n=>{const e=we();if(!e)return!1;const t=ye.innerParams.get(n);if(!t||gn(e,t.hideClass.popup))return!1;Vt(e,t.showClass.popup),ge(e,t.hideClass.popup);const r=ft();return Vt(r,t.showClass.backdrop),ge(r,t.hideClass.backdrop),Cb(n,e,t),!0};function Sp(n){const e=ls.swalPromiseReject.get(this);Wi(this),e&&e(n)}const Wi=n=>{n.isAwaitingPromise&&(delete n.isAwaitingPromise,ye.innerParams.get(n)||n._destroy())},xb=n=>typeof n>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},n),Cb=(n,e,t)=>{var r;const s=ft(),i=mp(e);typeof t.willClose=="function"&&t.willClose(e),(r=Y.eventEmitter)===null||r===void 0||r.emit("willClose",e),i&&s?Rb(n,e,s,!!t.returnFocus,t.didClose):s&&Rp(n,s,!!t.returnFocus,t.didClose)},Rb=(n,e,t,r,s)=>{Y.swalCloseEventFinishedCallback=Rp.bind(null,n,t,r,s);const i=function(o){if(o.target===e){var l;(l=Y.swalCloseEventFinishedCallback)===null||l===void 0||l.call(Y),delete Y.swalCloseEventFinishedCallback,e.removeEventListener("animationend",i),e.removeEventListener("transitionend",i)}};e.addEventListener("animationend",i),e.addEventListener("transitionend",i)},qd=(n,e)=>{setTimeout(()=>{var t;typeof e=="function"&&e.bind(n.params)(),(t=Y.eventEmitter)===null||t===void 0||t.emit("didClose"),n._destroy&&n._destroy()})},cs=n=>{let e=we();if(e||new se,e=we(),!e)return;const t=vs();Wa()?it(ys()):Sb(e,n),Ye(t),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},Sb=(n,e)=>{const t=qi(),r=vs();!t||!r||(!e&&_t(on())&&(e=on()),Ye(t),e&&(it(e),r.setAttribute("data-button-to-replace",e.className),t.insertBefore(r,e)),ge([n,t],O.loading))},Pb=(n,e)=>{e.input==="select"||e.input==="radio"?Vb(n,e):["text","email","number","tel","textarea"].some(t=>t===e.input)&&(Tu(e.inputValue)||Au(e.inputValue))&&(cs(on()),Lb(n,e))},kb=(n,e)=>{const t=n.getInput();if(!t)return null;switch(e.input){case"checkbox":return Ob(t);case"radio":return Nb(t);case"file":return Db(t);default:return e.inputAutoTrim?t.value.trim():t.value}},Ob=n=>n.checked?1:0,Nb=n=>n.checked?n.value:null,Db=n=>n.files&&n.files.length?n.getAttribute("multiple")!==null?n.files:n.files[0]:null,Vb=(n,e)=>{const t=we();if(!t)return;const r=s=>{e.input==="select"?Mb(t,fc(s),e):e.input==="radio"&&Bb(t,fc(s),e)};Tu(e.inputOptions)||Au(e.inputOptions)?(cs(on()),Hi(e.inputOptions).then(s=>{n.hideLoading(),r(s)})):typeof e.inputOptions=="object"?r(e.inputOptions):Fr(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},Lb=(n,e)=>{const t=n.getInput();t&&(it(t),Hi(e.inputValue).then(r=>{t.value=e.input==="number"?`${parseFloat(r)||0}`:`${r}`,Ye(t),t.focus(),n.hideLoading()}).catch(r=>{Fr(`Error in inputValue promise: ${r}`),t.value="",Ye(t),t.focus(),n.hideLoading()}))};function Mb(n,e,t){const r=Mn(n,O.select);if(!r)return;const s=(i,o,l)=>{const c=document.createElement("option");c.value=l,Ot(c,o),c.selected=Pp(l,t.inputValue),i.appendChild(c)};e.forEach(i=>{const o=i[0],l=i[1];if(Array.isArray(l)){const c=document.createElement("optgroup");c.label=o,c.disabled=!1,r.appendChild(c),l.forEach(h=>s(c,h[1],h[0]))}else s(r,l,o)}),r.focus()}function Bb(n,e,t){const r=Mn(n,O.radio);if(!r)return;e.forEach(i=>{const o=i[0],l=i[1],c=document.createElement("input"),h=document.createElement("label");c.type="radio",c.name=O.radio,c.value=o,Pp(o,t.inputValue)&&(c.checked=!0);const p=document.createElement("span");Ot(p,l),p.className=O.label,h.appendChild(c),h.appendChild(p),r.appendChild(h)});const s=r.querySelectorAll("input");s.length&&s[0].focus()}const fc=n=>(n instanceof Map?Array.from(n):Object.entries(n)).map(([t,r])=>[t,typeof r=="object"?fc(r):r]),Pp=(n,e)=>!!e&&e!=null&&e.toString()===n.toString(),Fb=n=>{const e=ye.innerParams.get(n);n.disableButtons(),e.input?kp(n,"confirm"):Mu(n,!0)},Ub=n=>{const e=ye.innerParams.get(n);n.disableButtons(),e.returnInputValueOnDeny?kp(n,"deny"):Lu(n,!1)},$b=(n,e)=>{n.disableButtons(),e(Es.cancel)},kp=(n,e)=>{const t=ye.innerParams.get(n);if(!t.input){Fr(`The "input" parameter is needed to be set when using returnInputValueOn${Eu(e)}`);return}const r=n.getInput(),s=kb(n,t);t.inputValidator?Hb(n,s,e):r&&!r.checkValidity()?(n.enableButtons(),n.showValidationMessage(t.validationMessage||r.validationMessage)):e==="deny"?Lu(n,s):Mu(n,s)},Hb=(n,e,t)=>{const r=ye.innerParams.get(n);n.disableInput(),Promise.resolve().then(()=>Hi(r.inputValidator(e,r.validationMessage))).then(i=>{n.enableButtons(),n.enableInput(),i?n.showValidationMessage(i):t==="deny"?Lu(n,e):Mu(n,e)})},Lu=(n,e)=>{const t=ye.innerParams.get(n);t.showLoaderOnDeny&&cs(Ur()),t.preDeny?(n.isAwaitingPromise=!0,Promise.resolve().then(()=>Hi(t.preDeny(e,t.validationMessage))).then(s=>{s===!1?(n.hideLoading(),Wi(n)):n.close({isDenied:!0,value:typeof s>"u"?e:s})}).catch(s=>Op(n,s))):n.close({isDenied:!0,value:e})},zd=(n,e)=>{n.close({isConfirmed:!0,value:e})},Op=(n,e)=>{n.rejectPromise(e)},Mu=(n,e)=>{const t=ye.innerParams.get(n);t.showLoaderOnConfirm&&cs(),t.preConfirm?(n.resetValidationMessage(),n.isAwaitingPromise=!0,Promise.resolve().then(()=>Hi(t.preConfirm(e,t.validationMessage))).then(s=>{_t(za())||s===!1?(n.hideLoading(),Wi(n)):zd(n,typeof s>"u"?e:s)}).catch(s=>Op(n,s))):zd(n,e)};function fa(){const n=ye.innerParams.get(this);if(!n)return;const e=ye.domCache.get(this);it(e.loader),Wa()?n.icon&&Ye(ys()):jb(e),Vt([e.popup,e.actions],O.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),this.enableButtons()}const jb=n=>{const e=n.loader.getAttribute("data-button-to-replace"),t=e?n.popup.getElementsByClassName(e):[];t.length?Ye(t[0],"inline-block"):py()&&it(n.actions)};function Np(){const n=ye.innerParams.get(this),e=ye.domCache.get(this);return e?Ka(e.popup,n.input):null}function Dp(n,e,t){const r=ye.domCache.get(n);e.forEach(s=>{r[s].disabled=t})}function Vp(n,e){const t=we();!t||!n||(n.type==="radio"?t.querySelectorAll(`[name="${O.radio}"]`).forEach(s=>{s.disabled=e}):n.disabled=e)}function Lp(){Dp(this,["confirmButton","denyButton","cancelButton"],!1);const n=ye.focusedElement.get(this);n instanceof HTMLElement&&document.activeElement===document.body&&n.focus(),ye.focusedElement.delete(this)}function Mp(){ye.focusedElement.set(this,document.activeElement),Dp(this,["confirmButton","denyButton","cancelButton"],!0)}function Bp(){Vp(this.getInput(),!1)}function Fp(){Vp(this.getInput(),!0)}function Up(n){const e=ye.domCache.get(this),t=ye.innerParams.get(this);Ot(e.validationMessage,n),e.validationMessage.className=O["validation-message"],t.customClass&&t.customClass.validationMessage&&ge(e.validationMessage,t.customClass.validationMessage),Ye(e.validationMessage);const r=this.getInput();r&&(r.setAttribute("aria-invalid","true"),r.setAttribute("aria-describedby",O["validation-message"]),fp(r),ge(r,O.inputerror))}function $p(){const n=ye.domCache.get(this);n.validationMessage&&it(n.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),Vt(e,O.inputerror))}const Fn={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},qb=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],zb={allowEnterKey:void 0},Gb=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Hp=n=>Object.prototype.hasOwnProperty.call(Fn,n),jp=n=>qb.indexOf(n)!==-1,qp=n=>zb[n],Wb=n=>{Hp(n)||dt(`Unknown parameter "${n}"`)},Kb=n=>{Gb.includes(n)&&dt(`The parameter "${n}" is incompatible with toasts`)},Yb=n=>{const e=qp(n);e&&cp(n,e)},zp=n=>{n.backdrop===!1&&n.allowOutsideClick&&dt('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),n.theme&&!["light","dark","auto","minimal","borderless","bootstrap-4","bootstrap-4-light","bootstrap-4-dark","bootstrap-5","bootstrap-5-light","bootstrap-5-dark","material-ui","material-ui-light","material-ui-dark","embed-iframe","bulma","bulma-light","bulma-dark"].includes(n.theme)&&dt(`Invalid theme "${n.theme}"`);for(const e in n)Wb(e),n.toast&&Kb(e),Yb(e)};function Gp(n){const e=ft(),t=we(),r=ye.innerParams.get(this);if(!t||gn(t,r.hideClass.popup)){dt("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const s=Qb(n),i=Object.assign({},r,s);zp(i),e&&(e.dataset.swal2Theme=i.theme),Tp(this,i),ye.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,n),writable:!1,enumerable:!0}})}const Qb=n=>{const e={};return Object.keys(n).forEach(t=>{if(jp(t)){const r=n;e[t]=r[t]}else dt(`Invalid parameter to update: ${t}`)}),e};function Wp(){var n;const e=ye.domCache.get(this),t=ye.innerParams.get(this);if(!t){Kp(this);return}e.popup&&Y.swalCloseEventFinishedCallback&&(Y.swalCloseEventFinishedCallback(),delete Y.swalCloseEventFinishedCallback),typeof t.didDestroy=="function"&&t.didDestroy(),(n=Y.eventEmitter)===null||n===void 0||n.emit("didDestroy"),Xb(this)}const Xb=n=>{Kp(n),delete n.params,delete Y.keydownHandler,delete Y.keydownTarget,delete Y.currentInstance},Kp=n=>{n.isAwaitingPromise?(Ll(ye,n),n.isAwaitingPromise=!0):(Ll(ls,n),Ll(ye,n),delete n.isAwaitingPromise,delete n.disableButtons,delete n.enableButtons,delete n.getInput,delete n.disableInput,delete n.enableInput,delete n.hideLoading,delete n.disableLoading,delete n.showValidationMessage,delete n.resetValidationMessage,delete n.close,delete n.closePopup,delete n.closeModal,delete n.closeToast,delete n.rejectPromise,delete n.update,delete n._destroy)},Ll=(n,e)=>{for(const t in n)n[t].delete(e)};var Jb=Object.freeze({__proto__:null,_destroy:Wp,close:Bn,closeModal:Bn,closePopup:Bn,closeToast:Bn,disableButtons:Mp,disableInput:Fp,disableLoading:fa,enableButtons:Lp,enableInput:Bp,getInput:Np,handleAwaitingPromise:Wi,hideLoading:fa,rejectPromise:Sp,resetValidationMessage:$p,showValidationMessage:Up,update:Gp});const Zb=(n,e,t)=>{n.toast?ev(n,e,t):(nv(e),rv(e),sv(n,e,t))},ev=(n,e,t)=>{e.popup.onclick=()=>{n&&(tv(n)||n.timer||n.input)||t(Es.close)}},tv=n=>!!(n.showConfirmButton||n.showDenyButton||n.showCancelButton||n.showCloseButton);let pa=!1;const nv=n=>{n.popup.onmousedown=()=>{n.container.onmouseup=function(e){n.container.onmouseup=()=>{},e.target===n.container&&(pa=!0)}}},rv=n=>{n.container.onmousedown=e=>{e.target===n.container&&e.preventDefault(),n.popup.onmouseup=function(t){n.popup.onmouseup=()=>{},(t.target===n.popup||t.target instanceof HTMLElement&&n.popup.contains(t.target))&&(pa=!0)}}},sv=(n,e,t)=>{e.container.onclick=r=>{if(pa){pa=!1;return}r.target===e.container&&qa(n.allowOutsideClick)&&t(Es.backdrop)}},iv=n=>typeof n=="object"&&n!==null&&"jquery"in n,Gd=n=>n instanceof Element||iv(n),ov=n=>{const e={};return typeof n[0]=="object"&&!Gd(n[0])?Object.assign(e,n[0]):["title","html","icon"].forEach((t,r)=>{const s=n[r];typeof s=="string"||Gd(s)?e[t]=s:s!==void 0&&Fr(`Unexpected type of ${t}! Expected "string" or "Element", got ${typeof s}`)}),e};function av(...n){return new this(...n)}function lv(n){class e extends this{_main(r,s){return super._main(r,Object.assign({},n,s))}}return e}const cv=()=>Y.timeout&&Y.timeout.getTimerLeft(),Yp=()=>{if(Y.timeout)return gy(),Y.timeout.stop()},Qp=()=>{if(Y.timeout){const n=Y.timeout.start();return ku(n),n}},uv=()=>{const n=Y.timeout;return n&&(n.running?Yp():Qp())},hv=n=>{if(Y.timeout){const e=Y.timeout.increase(n);return ku(e,!0),e}},dv=()=>!!(Y.timeout&&Y.timeout.isRunning());let Wd=!1;const pc={};function fv(n="data-swal-template"){pc[n]=this,Wd||(document.body.addEventListener("click",pv),Wd=!0)}const pv=n=>{for(let e=n.target;e&&e!==document;e=e.parentNode)for(const t in pc){const r=e.getAttribute&&e.getAttribute(t);if(r){pc[t].fire({template:r});return}}};class mv{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,t){const r=this._getHandlersByEventName(e);r.includes(t)||r.push(t)}once(e,t){const r=(...s)=>{this.removeListener(e,r),t.apply(this,s)};this.on(e,r)}emit(e,...t){this._getHandlersByEventName(e).forEach(r=>{try{r.apply(this,t)}catch(s){console.error(s)}})}removeListener(e,t){const r=this._getHandlersByEventName(e),s=r.indexOf(t);s>-1&&r.splice(s,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}Y.eventEmitter=new mv;const gv=(n,e)=>{Y.eventEmitter&&Y.eventEmitter.on(n,e)},wv=(n,e)=>{Y.eventEmitter&&Y.eventEmitter.once(n,e)},_v=(n,e)=>{if(Y.eventEmitter){if(!n){Y.eventEmitter.reset();return}e?Y.eventEmitter.removeListener(n,e):Y.eventEmitter.removeAllListeners(n)}};var yv=Object.freeze({__proto__:null,argsToParams:ov,bindClickHandler:fv,clickCancel:ib,clickConfirm:Ap,clickDeny:sb,enableLoading:cs,fire:av,getActions:qi,getCancelButton:bs,getCloseButton:Cu,getConfirmButton:on,getContainer:ft,getDenyButton:Ur,getFocusableElements:Ru,getFooter:dp,getHtmlContainer:Iu,getIcon:ys,getIconContent:cy,getImage:hp,getInputLabel:uy,getLoader:vs,getPopup:we,getProgressSteps:xu,getTimerLeft:cv,getTimerProgressBar:Ga,getTitle:up,getValidationMessage:za,increaseTimer:hv,isDeprecatedParameter:qp,isLoading:dy,isTimerRunning:dv,isUpdatableParameter:jp,isValidParameter:Hp,isVisible:rb,mixin:lv,off:_v,on:gv,once:wv,resumeTimer:Qp,showLoading:cs,stopTimer:Yp,toggleTimer:uv});class bv{constructor(e,t){this.callback=e,this.remaining=t,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const t=this.running;return t&&this.stop(),this.remaining+=e,t&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Xp=["swal-title","swal-html","swal-footer"],vv=n=>{const e=typeof n.template=="string"?document.querySelector(n.template):n.template;if(!e)return{};const t=e.content;return Sv(t),Object.assign(Ev(t),Tv(t),Av(t),Iv(t),xv(t),Cv(t),Rv(t,Xp))},Ev=n=>{const e={};return Array.from(n.querySelectorAll("swal-param")).forEach(r=>{Pr(r,["name","value"]);const s=r.getAttribute("name"),i=r.getAttribute("value");!s||!i||(s in Fn&&typeof Fn[s]=="boolean"?e[s]=i!=="false":s in Fn&&typeof Fn[s]=="object"?e[s]=JSON.parse(i):e[s]=i)}),e},Tv=n=>{const e={};return Array.from(n.querySelectorAll("swal-function-param")).forEach(r=>{const s=r.getAttribute("name"),i=r.getAttribute("value");!s||!i||(e[s]=new Function(`return ${i}`)())}),e},Av=n=>{const e={};return Array.from(n.querySelectorAll("swal-button")).forEach(r=>{Pr(r,["type","color","aria-label"]);const s=r.getAttribute("type");if(!s||!["confirm","cancel","deny"].includes(s))return;e[`${s}ButtonText`]=r.innerHTML,e[`show${Eu(s)}Button`]=!0;const i=r.getAttribute("color");i!==null&&(e[`${s}ButtonColor`]=i);const o=r.getAttribute("aria-label");o!==null&&(e[`${s}ButtonAriaLabel`]=o)}),e},Iv=n=>{const e={},t=n.querySelector("swal-image");if(t){Pr(t,["src","width","height","alt"]);const r=t.getAttribute("src");r!==null&&(e.imageUrl=r||void 0);const s=t.getAttribute("width");s!==null&&(e.imageWidth=s||void 0);const i=t.getAttribute("height");i!==null&&(e.imageHeight=i||void 0);const o=t.getAttribute("alt");o!==null&&(e.imageAlt=o||void 0)}return e},xv=n=>{const e={},t=n.querySelector("swal-icon");return t&&(Pr(t,["type","color"]),t.hasAttribute("type")&&(e.icon=t.getAttribute("type")),t.hasAttribute("color")&&(e.iconColor=t.getAttribute("color")),e.iconHtml=t.innerHTML),e},Cv=n=>{const e={},t=n.querySelector("swal-input");t&&(Pr(t,["type","label","placeholder","value"]),e.input=t.getAttribute("type")||"text",t.hasAttribute("label")&&(e.inputLabel=t.getAttribute("label")),t.hasAttribute("placeholder")&&(e.inputPlaceholder=t.getAttribute("placeholder")),t.hasAttribute("value")&&(e.inputValue=t.getAttribute("value")));const r=Array.from(n.querySelectorAll("swal-input-option"));return r.length&&(e.inputOptions={},r.forEach(s=>{Pr(s,["value"]);const i=s.getAttribute("value");if(!i)return;const o=s.innerHTML;e.inputOptions[i]=o})),e},Rv=(n,e)=>{const t={};for(const r in e){const s=e[r],i=n.querySelector(s);i&&(Pr(i,[]),t[s.replace(/^swal-/,"")]=i.innerHTML.trim())}return t},Sv=n=>{const e=Xp.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(n.children).forEach(t=>{const r=t.tagName.toLowerCase();e.includes(r)||dt(`Unrecognized element <${r}>`)})},Pr=(n,e)=>{Array.from(n.attributes).forEach(t=>{e.indexOf(t.name)===-1&&dt([`Unrecognized attribute "${t.name}" on <${n.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},Jp=10,Pv=n=>{var e,t;const r=ft(),s=we();if(!r||!s)return;typeof n.willOpen=="function"&&n.willOpen(s),(e=Y.eventEmitter)===null||e===void 0||e.emit("willOpen",s);const o=window.getComputedStyle(document.body).overflowY;if(Nv(r,s,n),setTimeout(()=>{kv(r,s)},Jp),Su()&&(Ov(r,n.scrollbarPadding!==void 0?n.scrollbarPadding:!1,o),fb()),pb&&n.backdrop===!1&&s.scrollHeight>r.clientHeight&&(r.style.pointerEvents="auto"),!Wa()&&!Y.previousActiveElement&&(Y.previousActiveElement=document.activeElement),typeof n.didOpen=="function"){const l=n.didOpen;setTimeout(()=>l(s))}(t=Y.eventEmitter)===null||t===void 0||t.emit("didOpen",s)},ma=n=>{const e=we();if(!e||n.target!==e)return;const t=ft();t&&(e.removeEventListener("animationend",ma),e.removeEventListener("transitionend",ma),t.style.overflowY="auto",Vt(t,O["no-transition"]))},kv=(n,e)=>{mp(e)?(n.style.overflowY="hidden",e.addEventListener("animationend",ma),e.addEventListener("transitionend",ma)):n.style.overflowY="auto"},Ov=(n,e,t)=>{mb(),e&&t!=="hidden"&&Eb(t),setTimeout(()=>{n.scrollTop=0})},Nv=(n,e,t)=>{var r;(r=t.showClass)!==null&&r!==void 0&&r.backdrop&&ge(n,t.showClass.backdrop),t.animation?(e.style.setProperty("opacity","0","important"),Ye(e,"grid"),setTimeout(()=>{var s;(s=t.showClass)!==null&&s!==void 0&&s.popup&&ge(e,t.showClass.popup),e.style.removeProperty("opacity")},Jp)):Ye(e,"grid"),ge([document.documentElement,document.body],O.shown),t.heightAuto&&t.backdrop&&!t.toast&&ge([document.documentElement,document.body],O["height-auto"])};var Kd={email:(n,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(n)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(n,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(n)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Dv(n){n.inputValidator||(n.input==="email"&&(n.inputValidator=Kd.email),n.input==="url"&&(n.inputValidator=Kd.url))}function Vv(n){(!n.target||typeof n.target=="string"&&!document.querySelector(n.target)||typeof n.target!="string"&&!n.target.appendChild)&&(dt('Target parameter is not valid, defaulting to "body"'),n.target="body")}function Lv(n){Dv(n),n.showLoaderOnConfirm&&!n.preConfirm&&dt(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Vv(n),typeof n.title=="string"&&(n.title=n.title.split(`
`).join("<br />")),Ay(n)}let zt;var Eo=new WeakMap;class Ne{constructor(...e){if(ey(this,Eo,Promise.resolve({isConfirmed:!1,isDenied:!1,isDismissed:!0})),typeof window>"u")return;zt=this;const t=Object.freeze(this.constructor.argsToParams(e));this.params=t,this.isAwaitingPromise=!1,ty(Eo,this,this._main(zt.params))}_main(e,t={}){if(zp(Object.assign({},t,e)),Y.currentInstance){const i=ls.swalPromiseResolve.get(Y.currentInstance),{isAwaitingPromise:o}=Y.currentInstance;Y.currentInstance._destroy(),o||i({isDismissed:!0}),Su()&&Cp()}Y.currentInstance=zt;const r=Bv(e,t);Lv(r),Object.freeze(r),Y.timeout&&(Y.timeout.stop(),delete Y.timeout),clearTimeout(Y.restoreFocusTimeout);const s=Fv(zt);return Tp(zt,r),ye.innerParams.set(zt,r),Mv(zt,s,r)}then(e){return Bd(Eo,this).then(e)}finally(e){return Bd(Eo,this).finally(e)}}const Mv=(n,e,t)=>new Promise((r,s)=>{const i=o=>{n.close({isDismissed:!0,dismiss:o,isConfirmed:!1,isDenied:!1})};ls.swalPromiseResolve.set(n,r),ls.swalPromiseReject.set(n,s),e.confirmButton.onclick=()=>{Fb(n)},e.denyButton.onclick=()=>{Ub(n)},e.cancelButton.onclick=()=>{$b(n,i)},e.closeButton.onclick=()=>{i(Es.close)},Zb(t,e,i),ob(Y,t,i),Pb(n,t),Pv(t),Uv(Y,t,i),$v(e,t),setTimeout(()=>{e.container.scrollTop=0})}),Bv=(n,e)=>{const t=vv(n),r=Object.assign({},Fn,e,t,n);return r.showClass=Object.assign({},Fn.showClass,r.showClass),r.hideClass=Object.assign({},Fn.hideClass,r.hideClass),r.animation===!1&&(r.showClass={backdrop:"swal2-noanimation"},r.hideClass={}),r},Fv=n=>{const e={popup:we(),container:ft(),actions:qi(),confirmButton:on(),denyButton:Ur(),cancelButton:bs(),loader:vs(),closeButton:Cu(),validationMessage:za(),progressSteps:xu()};return ye.domCache.set(n,e),e},Uv=(n,e,t)=>{const r=Ga();it(r),e.timer&&(n.timeout=new bv(()=>{t("timer"),delete n.timeout},e.timer),e.timerProgressBar&&r&&(Ye(r),St(r,e,"timerProgressBar"),setTimeout(()=>{n.timeout&&n.timeout.running&&ku(e.timer)})))},$v=(n,e)=>{if(!e.toast){if(!qa(e.allowEnterKey)){cp("allowEnterKey","preConfirm: () => false"),n.popup.focus();return}Hv(n)||jv(n,e)||dc(-1,1)}},Hv=n=>{const e=Array.from(n.popup.querySelectorAll("[autofocus]"));for(const t of e)if(t instanceof HTMLElement&&_t(t))return t.focus(),!0;return!1},jv=(n,e)=>e.focusDeny&&_t(n.denyButton)?(n.denyButton.focus(),!0):e.focusCancel&&_t(n.cancelButton)?(n.cancelButton.focus(),!0):e.focusConfirm&&_t(n.confirmButton)?(n.confirmButton.focus(),!0):!1;Ne.prototype.disableButtons=Mp;Ne.prototype.enableButtons=Lp;Ne.prototype.getInput=Np;Ne.prototype.disableInput=Fp;Ne.prototype.enableInput=Bp;Ne.prototype.hideLoading=fa;Ne.prototype.disableLoading=fa;Ne.prototype.showValidationMessage=Up;Ne.prototype.resetValidationMessage=$p;Ne.prototype.close=Bn;Ne.prototype.closePopup=Bn;Ne.prototype.closeModal=Bn;Ne.prototype.closeToast=Bn;Ne.prototype.rejectPromise=Sp;Ne.prototype.update=Gp;Ne.prototype._destroy=Wp;Object.assign(Ne,yv);Object.keys(Jb).forEach(n=>{Ne[n]=function(...e){if(zt&&zt[n])return zt[n](...e)}});Ne.DismissReason=Es;Ne.version="11.26.25";const se=Ne;se.default=se;typeof document<"u"&&function(n,e){var t=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(t),t.styleSheet)t.styleSheet.disabled||(t.styleSheet.cssText=e);else try{t.innerHTML=e}catch{t.innerText=e}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:auto}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:auto}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');function qv(n){let e=!1;const t=()=>{n.innerHTML=`
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
          ${Ve?"":`
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
    `,document.getElementById("authForm").addEventListener("submit",r),document.getElementById("toggleAuthMode").addEventListener("click",o=>{o.preventDefault(),e=!e,t()})},r=async s=>{s.preventDefault();const i=document.getElementById("email").value.trim(),o=document.getElementById("password").value;se.fire({title:e?"Criando conta...":"Autenticando...",allowOutsideClick:!1,didOpen:()=>{se.showLoading()}});try{if(e){const l=document.getElementById("confirmPassword").value;if(o!==l)throw new Error("As senhas não coincidem.");await Q_(i,o),se.fire({icon:"success",title:"Cadastro Realizado!",text:"Sua conta foi criada e autorizada com sucesso. Você já pode fazer login.",confirmButtonColor:"#2563eb"}).then(()=>{e=!1,t()})}else{const{role:l}=await Y_(i,o);Ve||(localStorage.setItem("demo_user",i),localStorage.setItem("demo_role",l),window.location.reload()),se.close()}}catch(l){se.fire({icon:"error",title:"Ops! Ocorreu um erro",text:l.message||"Verifique seus dados e tente novamente.",confirmButtonColor:"#ef4444"})}};return t(),{destroy:()=>{}}}async function zv(n,e,t){let r=!1,s=null,i="nao_iniciado",o="";try{if(Ve){const N=qn(Mt,"coletas",e.email.toLowerCase().trim()),q=await pu(N);q.exists()&&(s=q.data(),i=s.status||"editando",o=s.pendencias||"")}else{const N=localStorage.getItem(`demo_coleta_${e.email}`);N&&(s=JSON.parse(N),i=s.status||"editando",o=s.pendencias||"")}}catch(N){console.error("Erro ao carregar dados do usuário:",N)}const l=i==="em_analise"||i==="deferido";let c="";i==="indeferido"?c=`
      <div class="mb-8 p-6 bg-red-50 border border-red-200 rounded-3xl text-sm text-red-800 space-y-2">
        <span class="font-extrabold flex items-center gap-2 text-lg text-red-950">
          <svg class="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
          Atenção: Necessita de Correções
        </span>
        <p class="whitespace-pre-line font-medium leading-relaxed bg-white p-4 rounded-xl border border-red-100 text-red-900">${o||"Por favor revise os campos apontados pelo administrador."}</p>
      </div>
    `:i==="em_analise"?c=`
      <div class="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-3xl text-sm text-blue-800">
        <span class="font-extrabold flex items-center gap-2 text-lg text-blue-950">
          <svg class="w-6 h-6 text-blue-600 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
          </svg>
          Cadastro em Análise
        </span>
        <p class="mt-2 font-medium">Este formulário está em fase de análise pela administração e não pode ser editado no momento.</p>
      </div>
    `:i==="deferido"&&(c=`
      <div class="mb-8 p-6 bg-green-50 border border-green-200 rounded-3xl text-sm text-green-800">
        <span class="font-extrabold flex items-center gap-2 text-lg text-green-950">
          <svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
          Cadastro Homologado (Deferido)
        </span>
        <p class="mt-2 font-medium">Seu cadastro foi revisado e aprovado. As informações estão salvas de forma definitiva.</p>
      </div>
    `),n.innerHTML=`
    <!-- Top Nav Bar -->
    <div class="max-w-5xl mx-auto mb-6 flex justify-between items-center bg-white p-4 px-6 rounded-2xl shadow-sm border border-slate-100">
      <div class="flex items-center gap-3">
        <span class="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
        <span class="text-sm font-medium text-slate-600">Sessão ativa: <strong class="text-slate-800 font-bold">${e.email}</strong></span>
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
      ${c}

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
        <section class="space-y-6 bg-blue-50 p-8 rounded-2xl border border-blue-100">
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
          ${l?`
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
  `;const h=document.getElementById("coletaForm");if(s&&Object.keys(s).forEach(N=>{const q=h.elements[N];q&&(q.type==="checkbox"?q.checked=!!s[N]:q.type!=="file"&&(q.value=s[N]))}),l){h.querySelectorAll("input, select, textarea").forEach(J=>{J.disabled=!0,J.tagName==="INPUT"&&J.type!=="checkbox"&&J.classList.add("bg-slate-50","text-slate-500","cursor-not-allowed")});const q=h.querySelector('input[type="file"]').closest(".w-full.rounded-xl.border");q&&(q.style.display="none")}document.getElementById("btnVoltarInicio").addEventListener("click",()=>At("inicio")),l&&document.getElementById("btnVoltarInicioFooter").addEventListener("click",()=>At("inicio")),document.getElementById("btnLogout").addEventListener("click",async()=>{(await se.fire({title:"Deseja sair?",text:"Você será desconectado do sistema.",icon:"question",showCancelButton:!0,confirmButtonText:"Sair",cancelButtonText:"Permanecer",confirmButtonColor:"#ef4444",cancelButtonColor:"#94a3b8"})).isConfirmed&&(Ve?await vu():(localStorage.removeItem("demo_user"),localStorage.removeItem("demo_role"),window.location.reload()))});const m=document.getElementById("btnIrAdmin");m&&m.addEventListener("click",()=>At("admin"));const E=document.getElementById("diploma");E&&E.addEventListener("change",function(){const N=this.files[0];if(N){if(!["application/pdf","image/jpeg","image/jpg"].includes(N.type)){se.fire({icon:"error",title:"Formato não permitido",text:"Por favor, selecione apenas arquivos PDF ou imagens JPG/JPEG.",confirmButtonColor:"#ef4444"}),this.value="";return}N.size>5242880&&(se.fire({icon:"error",title:"Arquivo muito pesado",text:"O tamanho máximo permitido é de 5MB. O seu arquivo possui "+(N.size/(1024*1024)).toFixed(2)+"MB.",confirmButtonColor:"#ef4444"}),this.value="")}});const C=document.getElementById("btnCancelar");C&&C.addEventListener("click",()=>{se.fire({title:"Deseja cancelar?",text:"As informações não salvas serão perdidas.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Sim, cancelar",cancelButtonText:"Continuar preenchendo"}).then(N=>{N.isConfirmed&&At("inicio")})});const P=async()=>{const N={},q=new FormData(h);for(const[H,oe]of q.entries())H!=="diploma"&&(N[H]=oe);N.e_docente=h.elements.e_docente.checked,N.email=e.email.toLowerCase().trim(),N.lastUpdated=new Date().toISOString();const J=E?E.files[0]:null;let B=(s==null?void 0:s.diplomaUrl)||"";if(J)if(Ve){const H=j_(sp,`diplomas/${e.email.replace(/[@.]/g,"_")}_${Date.now()}_${J.name}`);await $_(H,J),B=await H_(H)}else B="https://example.com/mock-diploma.pdf";return N.diplomaUrl=B,N},F=document.getElementById("btnSalvarRascunho");return F&&F.addEventListener("click",async()=>{if(!r){r=!0,se.fire({title:"Salvando Rascunho...",allowOutsideClick:!1,didOpen:()=>se.showLoading()});try{const N=await P();if(N.status="editando",N.pendencias=o,Ve)await aa(qn(Mt,"coletas",e.email.toLowerCase().trim()),N);else{localStorage.setItem(`demo_coleta_${e.email}`,JSON.stringify(N));const q=JSON.parse(localStorage.getItem("all_demo_coletas")||"{}");q[e.email]=N,localStorage.setItem("all_demo_coletas",JSON.stringify(q))}await se.fire({icon:"success",title:"Rascunho Salvo!",text:"Seus dados foram guardados como rascunho. Você poderá continuar quando quiser.",confirmButtonColor:"#f59e0b"}),At("inicio")}catch(N){console.error(N),se.fire({icon:"error",title:"Ops! Ocorreu um erro",text:N.message||"Erro ao salvar rascunho.",confirmButtonColor:"#ef4444"})}finally{r=!1}}}),h&&h.addEventListener("submit",async N=>{if(N.preventDefault(),r)return;if(!((s==null?void 0:s.diplomaUrl)||E&&E.files[0])){se.fire({icon:"error",title:"Diploma Ausente",text:"Você precisa anexar o seu diploma para enviar o cadastro para análise.",confirmButtonColor:"#ef4444"});return}if((await se.fire({title:"Deseja enviar?",text:"Ao enviar para análise, o formulário será bloqueado e não poderá ser editado até a aprovação da administração.",icon:"question",showCancelButton:!0,confirmButtonText:"Sim, enviar",cancelButtonText:"Revisar dados",confirmButtonColor:"#2563eb",cancelButtonColor:"#94a3b8"})).isConfirmed){r=!0,se.fire({title:"Enviando Cadastro...",text:"Submetendo dados e arquivos para homologação.",allowOutsideClick:!1,didOpen:()=>se.showLoading()});try{const B=await P();if(B.status="em_analise",B.pendencias="",Ve)await aa(qn(Mt,"coletas",e.email.toLowerCase().trim()),B);else{localStorage.setItem(`demo_coleta_${e.email}`,JSON.stringify(B));const H=JSON.parse(localStorage.getItem("all_demo_coletas")||"{}");H[e.email]=B,localStorage.setItem("all_demo_coletas",JSON.stringify(H))}await se.fire({icon:"success",title:"Enviado para Análise!",text:"Seus dados foram submetidos com sucesso. O LAMES analisará seu cadastro em breve.",confirmButtonColor:"#2563eb"}),At("inicio")}catch(B){console.error(B),se.fire({icon:"error",title:"Ops! Ocorreu um erro",text:B.message||"Erro ao enviar cadastro.",confirmButtonColor:"#ef4444"})}finally{r=!1}}}),{destroy:()=>{}}}async function Gv(n,e,t){let r="registros",s="",i="",o="",l=[],c=[];localStorage.getItem("demo_whitelist")||localStorage.setItem("demo_whitelist",JSON.stringify({"admin@lames.org":{email:"admin@lames.org",role:"admin"},"colab@lames.org":{email:"colab@lames.org",role:"colaborador"}})),localStorage.getItem("all_demo_coletas")||localStorage.setItem("all_demo_coletas",JSON.stringify({"colab@lames.org":{nome_completo:"Antônio da Silva",tipo_integrante:"bolsista",cpf:"111.222.333-44",rg:"MG-12.345.678",endereco:"Rua das Flores, 123, Rio de Janeiro - RJ",email:"colab@lames.org",telefone:"(21) 98888-7777",grupo_sanguineo:"O+",alergias:"Nenhuma",contato_emergencia:"Maria (Mãe) - (21) 99999-8888",titulacao:"Mestre",local_formacao:"FIOCRUZ",ano_conclusao:"2023",diplomaUrl:"https://example.com/mock-diploma.pdf",vinculo:"Bolsista de Mestrado",prazo_vinculo:"24 meses",origem_vinculo:"CNPq",cargo_nivel:"Nível I",situacao_atual:"Ativo",e_docente:!1,orientador:"Dr. João Medeiros",status:"em_analise",pendencias:"",lastUpdated:new Date().toISOString()}}));const h=async()=>{try{if(Ve)l=(await kd(md(Mt,"coletas"))).docs.map(oe=>oe.data()),c=(await kd(md(Mt,"whitelist"))).docs.map(oe=>oe.data());else{const B=JSON.parse(localStorage.getItem("demo_whitelist")||"{}");c=Object.values(B);const H=JSON.parse(localStorage.getItem("all_demo_coletas")||"{}");l=Object.values(H)}}catch(B){console.error("Erro ao buscar dados do banco:",B),se.fire({icon:"error",title:"Erro ao carregar dados",text:"Não foi possível ler as informações do Firebase. Verifique suas regras e conexão.",confirmButtonColor:"#ef4444"})}},p=B=>{switch(B){case"deferido":return'<span class="bg-green-50 text-green-700 border border-green-100 text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Deferido</span>';case"indeferido":return'<span class="bg-red-50 text-red-700 border border-red-100 text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Indeferido</span>';case"em_analise":return'<span class="bg-blue-50 text-blue-700 border border-blue-100 text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider animate-pulse">Em Análise</span>';case"editando":default:return'<span class="bg-amber-50 text-amber-700 border border-amber-100 text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Rascunho</span>'}},m=()=>{n.innerHTML=`
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
              Registros Coleta (${l.length})
            </button>
            <button id="tabWhitelist" class="px-5 py-3 font-bold text-sm border-b-2 transition duration-150 ${r==="whitelist"?"border-blue-600 text-blue-600":"border-transparent text-slate-500 hover:text-slate-700"}">
              Gerenciar Acessos (${c.length})
            </button>
          </div>
        </div>

        <div class="p-8">
          ${r==="registros"?E():C()}
        </div>
      </div>
    `,document.getElementById("btnPreencherForm").addEventListener("click",()=>At("formulario")),document.getElementById("btnLogout").addEventListener("click",async()=>{(await se.fire({title:"Deseja sair?",icon:"question",showCancelButton:!0,confirmButtonText:"Sair",cancelButtonText:"Permanecer",confirmButtonColor:"#ef4444",cancelButtonColor:"#94a3b8"})).isConfirmed&&(Ve?await vu():(localStorage.removeItem("demo_user"),localStorage.removeItem("demo_role"),window.location.reload()))}),document.getElementById("tabRegistros").addEventListener("click",()=>{r="registros",m()}),document.getElementById("tabWhitelist").addEventListener("click",()=>{r="whitelist",m()}),P()},E=()=>{const B=l.filter(H=>{const oe=(H.nome_completo||"").toLowerCase(),ae=(H.email||"").toLowerCase(),v=oe.includes(s.toLowerCase())||ae.includes(s.toLowerCase()),_=i===""||H.tipo_integrante===i,y=H.status||"editando";return v&&_&&(o===""||y===o)});return`
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
            ${B.length===0?`
              <tr>
                <td colspan="6" class="text-center p-12 text-slate-400">Nenhum registro encontrado.</td>
              </tr>
            `:B.map(H=>`
              <tr class="hover:bg-slate-50/50 transition">
                <td class="p-4 px-6 font-bold text-slate-900">${H.nome_completo||"Não informado"}</td>
                <td class="p-4 px-6 font-mono text-xs">${H.email}</td>
                <td class="p-4 px-6"><span class="bg-slate-100 text-slate-700 text-xs px-2.5 py-0.5 rounded-full capitalize">${H.tipo_integrante||"-"}</span></td>
                <td class="p-4 px-6 text-center">${p(H.status)}</td>
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
    `},C=()=>`
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
                ${c.length===0?`
                  <tr>
                    <td colspan="3" class="text-center p-8 text-slate-400">Nenhum e-mail autorizado cadastrado.</td>
                  </tr>
                `:c.map(B=>`
                  <tr class="hover:bg-slate-50/50 transition">
                    <td class="p-4 px-6 font-mono text-xs text-slate-900 font-bold">${B.email}</td>
                    <td class="p-4 px-6">
                      <span class="text-xs px-2.5 py-0.5 rounded-full font-semibold ${B.role==="admin"?"bg-red-50 text-red-700 border border-red-100":"bg-blue-50 text-blue-700 border border-blue-100"}">
                        ${B.role==="admin"?"Administrador":"Colaborador"}
                      </span>
                    </td>
                    <td class="p-4 px-6 text-right">
                      <button data-email="${B.email}" class="btnRemoverWL text-red-600 hover:text-red-700 font-bold text-xs hover:underline focus:outline-none transition duration-150">
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
    `,P=()=>{r==="registros"?(document.getElementById("searchBar").addEventListener("input",ae=>{s=ae.target.value,n.querySelector("tbody").outerHTML=F(),N()}),document.getElementById("filterTypeSelect").addEventListener("change",ae=>{i=ae.target.value,n.querySelector("tbody").outerHTML=F(),N()}),document.getElementById("filterStatusSelect").addEventListener("change",ae=>{o=ae.target.value,n.querySelector("tbody").outerHTML=F(),N()}),N()):r==="whitelist"&&(document.getElementById("addWhitelistForm").addEventListener("submit",async oe=>{oe.preventDefault();const ae=document.getElementById("wlEmail"),v=document.getElementById("wlRole"),_=ae.value.toLowerCase().trim(),y=v.value;se.fire({title:"Adicionando e-mail...",allowOutsideClick:!1,didOpen:()=>se.showLoading()});try{if(Ve)await aa(qn(Mt,"whitelist",_),{email:_,role:y});else{const I=JSON.parse(localStorage.getItem("demo_whitelist")||"{}");I[_]={email:_,role:y},localStorage.setItem("demo_whitelist",JSON.stringify(I))}await h(),se.fire({icon:"success",title:"Autorizado!",text:`O e-mail ${_} foi autorizado como ${y}.`,confirmButtonColor:"#2563eb"}),m()}catch(I){se.fire({icon:"error",title:"Ops! Ocorreu um erro",text:I.message||"Erro ao gravar informações.",confirmButtonColor:"#ef4444"})}}),n.querySelectorAll(".btnRemoverWL").forEach(oe=>{oe.addEventListener("click",async ae=>{const v=ae.target.getAttribute("data-email");if(v===e.email.toLowerCase()){se.fire({icon:"warning",title:"Ação Bloqueada",text:"Você não pode remover o seu próprio e-mail da whitelist.",confirmButtonColor:"#ef4444"});return}if((await se.fire({title:"Deseja revogar o acesso?",text:`O e-mail ${v} não poderá mais fazer login no sistema.`,icon:"warning",showCancelButton:!0,confirmButtonText:"Revogar Acesso",cancelButtonText:"Manter",confirmButtonColor:"#ef4444",cancelButtonColor:"#94a3b8"})).isConfirmed){se.fire({title:"Removendo...",allowOutsideClick:!1,didOpen:()=>se.showLoading()});try{if(Ve)await Pw(qn(Mt,"whitelist",v));else{const y=JSON.parse(localStorage.getItem("demo_whitelist")||"{}");delete y[v],localStorage.setItem("demo_whitelist",JSON.stringify(y))}await h(),se.fire({icon:"success",title:"Acesso Revogado!",text:`O e-mail ${v} foi removido da whitelist.`,confirmButtonColor:"#2563eb"}),m()}catch(y){se.fire({icon:"error",title:"Ops! Ocorreu um erro",text:y.message||"Erro ao remover acesso.",confirmButtonColor:"#ef4444"})}}})}))},F=()=>{const B=l.filter(H=>{const oe=(H.nome_completo||"").toLowerCase(),ae=(H.email||"").toLowerCase(),v=oe.includes(s.toLowerCase())||ae.includes(s.toLowerCase()),_=i===""||H.tipo_integrante===i,y=H.status||"editando";return v&&_&&(o===""||y===o)});return`
      <tbody class="divide-y divide-slate-100 text-slate-700">
        ${B.length===0?`
          <tr>
            <td colspan="6" class="text-center p-12 text-slate-400">Nenhum registro encontrado.</td>
          </tr>
        `:B.map(H=>`
          <tr class="hover:bg-slate-50/50 transition">
            <td class="p-4 px-6 font-bold text-slate-900">${H.nome_completo||"Não informado"}</td>
            <td class="p-4 px-6 font-mono text-xs">${H.email}</td>
            <td class="p-4 px-6"><span class="bg-slate-100 text-slate-700 text-xs px-2.5 py-0.5 rounded-full capitalize">${H.tipo_integrante||"-"}</span></td>
            <td class="p-4 px-6 text-center">${p(H.status)}</td>
            <td class="p-4 px-6 text-slate-500 text-xs">${H.lastUpdated?new Date(H.lastUpdated).toLocaleString("pt-BR"):"-"}</td>
            <td class="p-4 px-6 text-right">
              <button data-email="${H.email}" class="btnVerDetalhes bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-3.5 py-2 rounded-lg transition duration-150">
                Ver Ficha
              </button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    `},N=()=>{n.querySelectorAll(".btnVerDetalhes").forEach(H=>{H.addEventListener("click",oe=>{const ae=oe.target.getAttribute("data-email"),v=l.find(_=>_.email===ae);v&&J(v)})})},q=async(B,H,oe,ae="")=>{se.fire({title:"Atualizando cadastro...",allowOutsideClick:!1,didOpen:()=>se.showLoading()});try{const v={...oe,status:H,pendencias:ae,lastUpdated:new Date().toISOString()};if(Ve)await aa(qn(Mt,"coletas",B),v);else{const _=JSON.parse(localStorage.getItem("all_demo_coletas")||"{}");_[B]=v,localStorage.setItem("all_demo_coletas",JSON.stringify(_)),localStorage.setItem(`demo_coleta_${B}`,JSON.stringify(v))}await h(),await se.fire({icon:"success",title:"Status Atualizado!",text:`O cadastro de ${v.nome_completo||B} foi definido como ${H.toUpperCase()}.`,confirmButtonColor:"#2563eb"}),m()}catch(v){console.error(v),se.fire({icon:"error",title:"Ops! Ocorreu um erro",text:v.message||"Erro ao alterar status.",confirmButtonColor:"#ef4444"})}},J=B=>{const H=B.status==="em_analise",oe=B.status==="indeferido";se.fire({title:`<span class="text-lg font-extrabold text-slate-900">Ficha Cadastral: ${B.nome_completo||"Colaborador"}</span>`,html:`
        <div class="text-left text-sm max-h-[60vh] overflow-y-auto pr-2 space-y-6 pt-4 font-sans leading-relaxed">
          
          <!-- Status Banner -->
          <div class="flex justify-between items-center p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
            <span class="font-bold text-slate-500">Status do Cadastro:</span>
            <span>${p(B.status)}</span>
          </div>

          <!-- Pendências atuais (se houver) -->
          ${oe&&B.pendencias?`
            <div class="p-4 bg-red-50 border border-red-100 text-red-900 rounded-xl text-xs">
              <span class="font-bold block text-red-950 mb-1">Pendências Apontadas Anteriormente:</span>
              <p class="whitespace-pre-line">${B.pendencias}</p>
            </div>
          `:""}

          <!-- Secção 1 -->
          <div>
            <h4 class="font-bold text-blue-700 text-xs uppercase tracking-wider mb-2 border-b pb-1">1. Identificação e Contato</h4>
            <div class="grid grid-cols-2 gap-y-2 text-xs">
              <div><b class="text-slate-500">Nome:</b> <span class="text-slate-800 font-bold">${B.nome_completo||"-"}</span></div>
              <div><b class="text-slate-500">Tipo de Integrante:</b> <span class="text-slate-800 capitalize font-bold">${B.tipo_integrante||"-"}</span></div>
              <div><b class="text-slate-500">CPF:</b> <span class="text-slate-800">${B.cpf||"-"}</span></div>
              <div><b class="text-slate-500">RG:</b> <span class="text-slate-800">${B.rg||"-"}</span></div>
              <div class="col-span-2"><b class="text-slate-500">Endereço:</b> <span class="text-slate-800">${B.endereco||"-"}</span></div>
              <div><b class="text-slate-500">E-mail:</b> <span class="text-slate-800 font-mono">${B.email}</span></div>
              <div><b class="text-slate-500">Telefone:</b> <span class="text-slate-800">${B.telefone||"-"}</span></div>
            </div>
          </div>

          <!-- Secção 2 -->
          <div>
            <h4 class="font-bold text-blue-700 text-xs uppercase tracking-wider mb-2 border-b pb-1">2. Saúde e Emergência</h4>
            <div class="grid grid-cols-2 gap-y-2 text-xs">
              <div><b class="text-slate-500">Grupo Sanguíneo:</b> <span class="text-slate-800 font-bold">${B.grupo_sanguineo||"-"}</span></div>
              <div><b class="text-slate-500">Alergias:</b> <span class="text-slate-800">${B.alergias||"-"}</span></div>
              <div class="col-span-2"><b class="text-slate-500">Contato de Emergência:</b> <span class="text-slate-800 font-semibold">${B.contato_emergencia||"-"}</span></div>
            </div>
          </div>

          <!-- Secção 3 -->
          <div>
            <h4 class="font-bold text-blue-700 text-xs uppercase tracking-wider mb-2 border-b pb-1">3. Formação Acadêmica</h4>
            <div class="grid grid-cols-2 gap-y-2 text-xs">
              <div><b class="text-slate-500">Titulação Máxima:</b> <span class="text-slate-800">${B.titulacao||"-"}</span></div>
              <div><b class="text-slate-500">Local de Formação:</b> <span class="text-slate-800">${B.local_formacao||"-"}</span></div>
              <div><b class="text-slate-500">Ano de Conclusão:</b> <span class="text-slate-800">${B.ano_conclusao||"-"}</span></div>
              <div>
                <b class="text-slate-500">Diploma:</b> 
                ${B.diplomaUrl?`
                  <a href="${B.diplomaUrl}" target="_blank" class="text-blue-600 font-semibold hover:underline inline-flex items-center gap-0.5">Visualizar Anexo</a>
                `:'<span class="text-slate-400">Não anexado</span>'}
              </div>
            </div>
          </div>

          <!-- Secção 4 -->
          <div>
            <h4 class="font-bold text-blue-700 text-xs uppercase tracking-wider mb-2 border-b pb-1">4. Informações do Coleta (Anual)</h4>
            <div class="grid grid-cols-2 gap-y-2 text-xs font-sans">
              <div><b class="text-slate-500">Vínculo:</b> <span class="text-slate-800">${B.vinculo||"-"}</span></div>
              <div><b class="text-slate-500">Prazo do Vínculo:</b> <span class="text-slate-800">${B.prazo_vinculo||"-"}</span></div>
              <div><b class="text-slate-500">Origem:</b> <span class="text-slate-800">${B.origem_vinculo||"-"}</span></div>
              <div><b class="text-slate-500">Cargo/Nível:</b> <span class="text-slate-800">${B.cargo_nivel||"-"}</span></div>
              <div><b class="text-slate-500">Situação:</b> <span class="text-slate-800">${B.situacao_atual||"-"}</span></div>
              <div><b class="text-slate-500">Docente?</b> <span class="text-slate-800">${B.e_docente?"Sim":"Não"}</span></div>
              <div class="col-span-2"><b class="text-slate-500">Orientador:</b> <span class="text-slate-800">${B.orientador||"-"}</span></div>
            </div>
          </div>

          <!-- Botões de Homologação caso esteja em Análise -->
          ${H?`
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
      `,width:"600px",showConfirmButton:!H,confirmButtonColor:"#2563eb",confirmButtonText:"Fechar Ficha",didOpen:()=>{H&&(document.getElementById("btnModalDeferir").addEventListener("click",async()=>{(await se.fire({title:"Deferir Cadastro?",text:"Isso aprovará e homologará em definitivo as informações do colaborador.",icon:"question",showCancelButton:!0,confirmButtonText:"Sim, deferir",cancelButtonText:"Cancelar",confirmButtonColor:"#16a34a",cancelButtonColor:"#94a3b8"})).isConfirmed&&await q(B.email,"deferido",B)}),document.getElementById("btnModalIndeferir").addEventListener("click",async()=>{const{value:ae,isConfirmed:v}=await se.fire({title:"Apontar Pendências",input:"textarea",inputLabel:"Descreva detalhadamente o que o colaborador precisa corrigir no cadastro:",inputPlaceholder:"Ex: O anexo do diploma está ilegível. Favor preencher o campo RG corretamente.",inputAttributes:{"aria-label":"Descreva detalhadamente o que o colaborador precisa corrigir no cadastro"},showCancelButton:!0,confirmButtonText:"Solicitar Correção",cancelButtonText:"Voltar",confirmButtonColor:"#ef4444",cancelButtonColor:"#94a3b8",inputValidator:_=>{if(!_)return"Você precisa digitar o motivo da pendência!"}});v&&ae&&await q(B.email,"indeferido",B,ae)}))}})};return se.fire({title:"Carregando painel...",allowOutsideClick:!1,didOpen:()=>se.showLoading()}),await h(),se.close(),m(),{destroy:()=>{}}}async function Wv(n,e,t){let r="nao_iniciado",s="",i=null;try{if(Ve){const h=qn(Mt,"coletas",e.email.toLowerCase().trim()),p=await pu(h);p.exists()&&(i=p.data(),r=i.status||"editando",s=i.pendencias||"")}else{const h=localStorage.getItem(`demo_coleta_${e.email}`);h&&(i=JSON.parse(h),r=i.status||"editando",s=i.pendencias||"")}}catch(h){console.error("Erro ao buscar status do cadastro:",h)}const o=()=>{switch(r){case"editando":return`
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
  `,document.getElementById("btnAcaoForm").addEventListener("click",()=>{At("formulario")}),document.getElementById("btnLogout").addEventListener("click",async()=>{(await se.fire({title:"Deseja sair?",text:"Você será desconectado do sistema.",icon:"question",showCancelButton:!0,confirmButtonText:"Sair",cancelButtonText:"Permanecer",confirmButtonColor:"#ef4444",cancelButtonColor:"#94a3b8"})).isConfirmed&&(Ve?await vu():(localStorage.removeItem("demo_user"),localStorage.removeItem("demo_role"),window.location.reload()))});const c=document.getElementById("btnIrAdmin");return c&&c.addEventListener("click",()=>At("admin")),{destroy:()=>{}}}ja("login",qv);ja("inicio",Wv);ja("formulario",zv);ja("admin",Gv);document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("app");n?J_(n):console.error("Elemento container #app não encontrado no index.html.")});
