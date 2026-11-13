(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function dT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ky={exports:{}},Tu={},Gy={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ia=Symbol.for("react.element"),hT=Symbol.for("react.portal"),fT=Symbol.for("react.fragment"),pT=Symbol.for("react.strict_mode"),mT=Symbol.for("react.profiler"),gT=Symbol.for("react.provider"),yT=Symbol.for("react.context"),vT=Symbol.for("react.forward_ref"),_T=Symbol.for("react.suspense"),wT=Symbol.for("react.memo"),ET=Symbol.for("react.lazy"),am=Symbol.iterator;function TT(t){return t===null||typeof t!="object"?null:(t=am&&t[am]||t["@@iterator"],typeof t=="function"?t:null)}var Qy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yy=Object.assign,Xy={};function Es(t,e,n){this.props=t,this.context=e,this.refs=Xy,this.updater=n||Qy}Es.prototype.isReactComponent={};Es.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Es.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jy(){}Jy.prototype=Es.prototype;function Ch(t,e,n){this.props=t,this.context=e,this.refs=Xy,this.updater=n||Qy}var Rh=Ch.prototype=new Jy;Rh.constructor=Ch;Yy(Rh,Es.prototype);Rh.isPureReactComponent=!0;var lm=Array.isArray,Zy=Object.prototype.hasOwnProperty,Ph={current:null},ev={key:!0,ref:!0,__self:!0,__source:!0};function tv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Zy.call(e,r)&&!ev.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ia,type:t,key:s,ref:o,props:i,_owner:Ph.current}}function IT(t,e){return{$$typeof:ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function kh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ia}function AT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var um=/\/+/g;function _c(t,e){return typeof t=="object"&&t!==null&&t.key!=null?AT(""+t.key):e.toString(36)}function fl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ia:case hT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+_c(o,0):r,lm(i)?(n="",t!=null&&(n=t.replace(um,"$&/")+"/"),fl(i,e,n,"",function(d){return d})):i!=null&&(kh(i)&&(i=IT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(um,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",lm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+_c(s,l);o+=fl(s,e,n,u,i)}else if(u=TT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+_c(s,l++),o+=fl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function qa(t,e,n){if(t==null)return t;var r=[],i=0;return fl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ST(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Et={current:null},pl={transition:null},xT={ReactCurrentDispatcher:Et,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Ph};function nv(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:qa,forEach:function(t,e,n){qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qa(t,function(){e++}),e},toArray:function(t){return qa(t,function(e){return e})||[]},only:function(t){if(!kh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Es;ie.Fragment=fT;ie.Profiler=mT;ie.PureComponent=Ch;ie.StrictMode=pT;ie.Suspense=_T;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xT;ie.act=nv;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Yy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ph.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Zy.call(e,u)&&!ev.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:ia,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:yT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gT,_context:t},t.Consumer=t};ie.createElement=tv;ie.createFactory=function(t){var e=tv.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:vT,render:t}};ie.isValidElement=kh;ie.lazy=function(t){return{$$typeof:ET,_payload:{_status:-1,_result:t},_init:ST}};ie.memo=function(t,e){return{$$typeof:wT,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=pl.transition;pl.transition={};try{t()}finally{pl.transition=e}};ie.unstable_act=nv;ie.useCallback=function(t,e){return Et.current.useCallback(t,e)};ie.useContext=function(t){return Et.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Et.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Et.current.useEffect(t,e)};ie.useId=function(){return Et.current.useId()};ie.useImperativeHandle=function(t,e,n){return Et.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Et.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Et.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Et.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Et.current.useReducer(t,e,n)};ie.useRef=function(t){return Et.current.useRef(t)};ie.useState=function(t){return Et.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Et.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Et.current.useTransition()};ie.version="18.3.1";Gy.exports=ie;var ne=Gy.exports;const CT=dT(ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RT=ne,PT=Symbol.for("react.element"),kT=Symbol.for("react.fragment"),NT=Object.prototype.hasOwnProperty,bT=RT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DT={key:!0,ref:!0,__self:!0,__source:!0};function rv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)NT.call(e,r)&&!DT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:PT,type:t,key:s,ref:o,props:i,_owner:bT.current}}Tu.Fragment=kT;Tu.jsx=rv;Tu.jsxs=rv;Ky.exports=Tu;var y=Ky.exports,cd={},iv={exports:{}},Ut={},sv={exports:{}},ov={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,G){var J=$.length;$.push(G);e:for(;0<J;){var ye=J-1>>>1,he=$[ye];if(0<i(he,G))$[ye]=G,$[J]=he,J=ye;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var G=$[0],J=$.pop();if(J!==G){$[0]=J;e:for(var ye=0,he=$.length,Ie=he>>>1;ye<Ie;){var Zt=2*(ye+1)-1,zt=$[Zt],en=Zt+1,$t=$[en];if(0>i(zt,J))en<he&&0>i($t,zt)?($[ye]=$t,$[en]=J,ye=en):($[ye]=zt,$[Zt]=J,ye=Zt);else if(en<he&&0>i($t,J))$[ye]=$t,$[en]=J,ye=en;else break e}}return G}function i($,G){var J=$.sortIndex-G.sortIndex;return J!==0?J:$.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],f=1,m=null,_=3,x=!1,b=!1,D=!1,R=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g($){for(var G=n(d);G!==null;){if(G.callback===null)r(d);else if(G.startTime<=$)r(d),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(d)}}function L($){if(D=!1,g($),!b)if(n(u)!==null)b=!0,jr(U);else{var G=n(d);G!==null&&it(L,G.startTime-$)}}function U($,G){b=!1,D&&(D=!1,S(v),v=-1),x=!0;var J=_;try{for(g(G),m=n(u);m!==null&&(!(m.expirationTime>G)||$&&!C());){var ye=m.callback;if(typeof ye=="function"){m.callback=null,_=m.priorityLevel;var he=ye(m.expirationTime<=G);G=t.unstable_now(),typeof he=="function"?m.callback=he:m===n(u)&&r(u),g(G)}else r(u);m=n(u)}if(m!==null)var Ie=!0;else{var Zt=n(d);Zt!==null&&it(L,Zt.startTime-G),Ie=!1}return Ie}finally{m=null,_=J,x=!1}}var F=!1,T=null,v=-1,w=5,A=-1;function C(){return!(t.unstable_now()-A<w)}function P(){if(T!==null){var $=t.unstable_now();A=$;var G=!0;try{G=T(!0,$)}finally{G?I():(F=!1,T=null)}}else F=!1}var I;if(typeof E=="function")I=function(){E(P)};else if(typeof MessageChannel<"u"){var It=new MessageChannel,Jt=It.port2;It.port1.onmessage=P,I=function(){Jt.postMessage(null)}}else I=function(){R(P,0)};function jr($){T=$,F||(F=!0,I())}function it($,G){v=R(function(){$(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){b||x||(b=!0,jr(U))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(_){case 1:case 2:case 3:var G=3;break;default:G=_}var J=_;_=G;try{return $()}finally{_=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,G){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var J=_;_=$;try{return G()}finally{_=J}},t.unstable_scheduleCallback=function($,G,J){var ye=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ye+J:ye):J=ye,$){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=J+he,$={id:f++,callback:G,priorityLevel:$,startTime:J,expirationTime:he,sortIndex:-1},J>ye?($.sortIndex=J,e(d,$),n(u)===null&&$===n(d)&&(D?(S(v),v=-1):D=!0,it(L,J-ye))):($.sortIndex=he,e(u,$),b||x||(b=!0,jr(U))),$},t.unstable_shouldYield=C,t.unstable_wrapCallback=function($){var G=_;return function(){var J=_;_=G;try{return $.apply(this,arguments)}finally{_=J}}}})(ov);sv.exports=ov;var VT=sv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LT=ne,Ft=VT;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var av=new Set,Po={};function Ei(t,e){as(t,e),as(t+"Capture",e)}function as(t,e){for(Po[t]=e,t=0;t<e.length;t++)av.add(e[t])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dd=Object.prototype.hasOwnProperty,OT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cm={},dm={};function MT(t){return dd.call(dm,t)?!0:dd.call(cm,t)?!1:OT.test(t)?dm[t]=!0:(cm[t]=!0,!1)}function jT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function FT(t,e,n,r){if(e===null||typeof e>"u"||jT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new Tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new Tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new Tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new Tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new Tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new Tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new Tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new Tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new Tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nh=/[\-:]([a-z])/g;function bh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nh,bh);nt[e]=new Tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nh,bh);nt[e]=new Tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nh,bh);nt[e]=new Tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new Tt(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new Tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dh(t,e,n,r){var i=nt.hasOwnProperty(e)?nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(FT(e,n,i,r)&&(n=null),r||i===null?MT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xn=LT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ha=Symbol.for("react.element"),ji=Symbol.for("react.portal"),Fi=Symbol.for("react.fragment"),Vh=Symbol.for("react.strict_mode"),hd=Symbol.for("react.profiler"),lv=Symbol.for("react.provider"),uv=Symbol.for("react.context"),Lh=Symbol.for("react.forward_ref"),fd=Symbol.for("react.suspense"),pd=Symbol.for("react.suspense_list"),Oh=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),cv=Symbol.for("react.offscreen"),hm=Symbol.iterator;function Ks(t){return t===null||typeof t!="object"?null:(t=hm&&t[hm]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,wc;function ro(t){if(wc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wc=e&&e[1]||""}return`
`+wc+t}var Ec=!1;function Tc(t,e){if(!t||Ec)return"";Ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ec=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ro(t):""}function UT(t){switch(t.tag){case 5:return ro(t.type);case 16:return ro("Lazy");case 13:return ro("Suspense");case 19:return ro("SuspenseList");case 0:case 2:case 15:return t=Tc(t.type,!1),t;case 11:return t=Tc(t.type.render,!1),t;case 1:return t=Tc(t.type,!0),t;default:return""}}function md(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fi:return"Fragment";case ji:return"Portal";case hd:return"Profiler";case Vh:return"StrictMode";case fd:return"Suspense";case pd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case uv:return(t.displayName||"Context")+".Consumer";case lv:return(t._context.displayName||"Context")+".Provider";case Lh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Oh:return e=t.displayName||null,e!==null?e:md(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return md(t(e))}catch{}}return null}function BT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return md(e);case 8:return e===Vh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zT(t){var e=dv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ka(t){t._valueTracker||(t._valueTracker=zT(t))}function hv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=dv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gd(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fv(t,e){e=e.checked,e!=null&&Dh(t,"checked",e,!1)}function yd(t,e){fv(t,e);var n=Cr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vd(t,e.type,n):e.hasOwnProperty("defaultValue")&&vd(t,e.type,Cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vd(t,e,n){(e!=="number"||Vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var io=Array.isArray;function Xi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Cr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _d(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(io(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cr(n)}}function pv(t,e){var n=Cr(e.value),r=Cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function gm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ga,gv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ga=Ga||document.createElement("div"),Ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ko(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$T=["Webkit","ms","Moz","O"];Object.keys(po).forEach(function(t){$T.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),po[e]=po[t]})});function yv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||po.hasOwnProperty(t)&&po[t]?(""+e).trim():e+"px"}function vv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var WT=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ed(t,e){if(e){if(WT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Td(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Id=null;function Mh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ad=null,Ji=null,Zi=null;function ym(t){if(t=aa(t)){if(typeof Ad!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Cu(e),Ad(t.stateNode,t.type,e))}}function _v(t){Ji?Zi?Zi.push(t):Zi=[t]:Ji=t}function wv(){if(Ji){var t=Ji,e=Zi;if(Zi=Ji=null,ym(t),e)for(t=0;t<e.length;t++)ym(e[t])}}function Ev(t,e){return t(e)}function Tv(){}var Ic=!1;function Iv(t,e,n){if(Ic)return t(e,n);Ic=!0;try{return Ev(t,e,n)}finally{Ic=!1,(Ji!==null||Zi!==null)&&(Tv(),wv())}}function No(t,e){var n=t.stateNode;if(n===null)return null;var r=Cu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Sd=!1;if(zn)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Sd=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Sd=!1}function qT(t,e,n,r,i,s,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var mo=!1,Ll=null,Ol=!1,xd=null,HT={onError:function(t){mo=!0,Ll=t}};function KT(t,e,n,r,i,s,o,l,u){mo=!1,Ll=null,qT.apply(HT,arguments)}function GT(t,e,n,r,i,s,o,l,u){if(KT.apply(this,arguments),mo){if(mo){var d=Ll;mo=!1,Ll=null}else throw Error(j(198));Ol||(Ol=!0,xd=d)}}function Ti(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Av(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vm(t){if(Ti(t)!==t)throw Error(j(188))}function QT(t){var e=t.alternate;if(!e){if(e=Ti(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vm(i),t;if(s===r)return vm(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function Sv(t){return t=QT(t),t!==null?xv(t):null}function xv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xv(t);if(e!==null)return e;t=t.sibling}return null}var Cv=Ft.unstable_scheduleCallback,_m=Ft.unstable_cancelCallback,YT=Ft.unstable_shouldYield,XT=Ft.unstable_requestPaint,De=Ft.unstable_now,JT=Ft.unstable_getCurrentPriorityLevel,jh=Ft.unstable_ImmediatePriority,Rv=Ft.unstable_UserBlockingPriority,Ml=Ft.unstable_NormalPriority,ZT=Ft.unstable_LowPriority,Pv=Ft.unstable_IdlePriority,Iu=null,_n=null;function eI(t){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(Iu,t,void 0,(t.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:rI,tI=Math.log,nI=Math.LN2;function rI(t){return t>>>=0,t===0?32:31-(tI(t)/nI|0)|0}var Qa=64,Ya=4194304;function so(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=so(l):(s&=o,s!==0&&(r=so(s)))}else o=n&~i,o!==0?r=so(o):s!==0&&(r=so(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-an(e),i=1<<n,r|=t[n],e&=~i;return r}function iI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-an(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=iI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Cd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kv(){var t=Qa;return Qa<<=1,!(Qa&4194240)&&(Qa=64),t}function Ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function sa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-an(e),t[e]=n}function oI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-an(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Fh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-an(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function Nv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var bv,Uh,Dv,Vv,Lv,Rd=!1,Xa=[],gr=null,yr=null,vr=null,bo=new Map,Do=new Map,ar=[],aI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wm(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(e.pointerId)}}function Qs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=aa(e),e!==null&&Uh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function lI(t,e,n,r,i){switch(e){case"focusin":return gr=Qs(gr,t,e,n,r,i),!0;case"dragenter":return yr=Qs(yr,t,e,n,r,i),!0;case"mouseover":return vr=Qs(vr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return bo.set(s,Qs(bo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Do.set(s,Qs(Do.get(s)||null,t,e,n,r,i)),!0}return!1}function Ov(t){var e=ti(t.target);if(e!==null){var n=Ti(e);if(n!==null){if(e=n.tag,e===13){if(e=Av(n),e!==null){t.blockedOn=e,Lv(t.priority,function(){Dv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Id=r,n.target.dispatchEvent(r),Id=null}else return e=aa(n),e!==null&&Uh(e),t.blockedOn=n,!1;e.shift()}return!0}function Em(t,e,n){ml(t)&&n.delete(e)}function uI(){Rd=!1,gr!==null&&ml(gr)&&(gr=null),yr!==null&&ml(yr)&&(yr=null),vr!==null&&ml(vr)&&(vr=null),bo.forEach(Em),Do.forEach(Em)}function Ys(t,e){t.blockedOn===e&&(t.blockedOn=null,Rd||(Rd=!0,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,uI)))}function Vo(t){function e(i){return Ys(i,t)}if(0<Xa.length){Ys(Xa[0],t);for(var n=1;n<Xa.length;n++){var r=Xa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gr!==null&&Ys(gr,t),yr!==null&&Ys(yr,t),vr!==null&&Ys(vr,t),bo.forEach(e),Do.forEach(e),n=0;n<ar.length;n++)r=ar[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)Ov(n),n.blockedOn===null&&ar.shift()}var es=Xn.ReactCurrentBatchConfig,Fl=!0;function cI(t,e,n,r){var i=fe,s=es.transition;es.transition=null;try{fe=1,Bh(t,e,n,r)}finally{fe=i,es.transition=s}}function dI(t,e,n,r){var i=fe,s=es.transition;es.transition=null;try{fe=4,Bh(t,e,n,r)}finally{fe=i,es.transition=s}}function Bh(t,e,n,r){if(Fl){var i=Pd(t,e,n,r);if(i===null)Vc(t,e,r,Ul,n),wm(t,r);else if(lI(i,t,e,n,r))r.stopPropagation();else if(wm(t,r),e&4&&-1<aI.indexOf(t)){for(;i!==null;){var s=aa(i);if(s!==null&&bv(s),s=Pd(t,e,n,r),s===null&&Vc(t,e,r,Ul,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Vc(t,e,r,null,n)}}var Ul=null;function Pd(t,e,n,r){if(Ul=null,t=Mh(r),t=ti(t),t!==null)if(e=Ti(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Av(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ul=t,null}function Mv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(JT()){case jh:return 1;case Rv:return 4;case Ml:case ZT:return 16;case Pv:return 536870912;default:return 16}default:return 16}}var fr=null,zh=null,gl=null;function jv(){if(gl)return gl;var t,e=zh,n=e.length,r,i="value"in fr?fr.value:fr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return gl=i.slice(t,1<r?1-r:void 0)}function yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ja(){return!0}function Tm(){return!1}function Bt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ja:Tm,this.isPropagationStopped=Tm,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),e}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$h=Bt(Ts),oa=Ce({},Ts,{view:0,detail:0}),hI=Bt(oa),Sc,xc,Xs,Au=Ce({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(Sc=t.screenX-Xs.screenX,xc=t.screenY-Xs.screenY):xc=Sc=0,Xs=t),Sc)},movementY:function(t){return"movementY"in t?t.movementY:xc}}),Im=Bt(Au),fI=Ce({},Au,{dataTransfer:0}),pI=Bt(fI),mI=Ce({},oa,{relatedTarget:0}),Cc=Bt(mI),gI=Ce({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),yI=Bt(gI),vI=Ce({},Ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_I=Bt(vI),wI=Ce({},Ts,{data:0}),Am=Bt(wI),EI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},TI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},II={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=II[t])?!!e[t]:!1}function Wh(){return AI}var SI=Ce({},oa,{key:function(t){if(t.key){var e=EI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?TI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wh,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xI=Bt(SI),CI=Ce({},Au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sm=Bt(CI),RI=Ce({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wh}),PI=Bt(RI),kI=Ce({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),NI=Bt(kI),bI=Ce({},Au,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),DI=Bt(bI),VI=[9,13,27,32],qh=zn&&"CompositionEvent"in window,go=null;zn&&"documentMode"in document&&(go=document.documentMode);var LI=zn&&"TextEvent"in window&&!go,Fv=zn&&(!qh||go&&8<go&&11>=go),xm=" ",Cm=!1;function Uv(t,e){switch(t){case"keyup":return VI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ui=!1;function OI(t,e){switch(t){case"compositionend":return Bv(e);case"keypress":return e.which!==32?null:(Cm=!0,xm);case"textInput":return t=e.data,t===xm&&Cm?null:t;default:return null}}function MI(t,e){if(Ui)return t==="compositionend"||!qh&&Uv(t,e)?(t=jv(),gl=zh=fr=null,Ui=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fv&&e.locale!=="ko"?null:e.data;default:return null}}var jI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jI[t.type]:e==="textarea"}function zv(t,e,n,r){_v(r),e=Bl(e,"onChange"),0<e.length&&(n=new $h("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var yo=null,Lo=null;function FI(t){Zv(t,0)}function Su(t){var e=$i(t);if(hv(e))return t}function UI(t,e){if(t==="change")return e}var $v=!1;if(zn){var Rc;if(zn){var Pc="oninput"in document;if(!Pc){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),Pc=typeof Pm.oninput=="function"}Rc=Pc}else Rc=!1;$v=Rc&&(!document.documentMode||9<document.documentMode)}function km(){yo&&(yo.detachEvent("onpropertychange",Wv),Lo=yo=null)}function Wv(t){if(t.propertyName==="value"&&Su(Lo)){var e=[];zv(e,Lo,t,Mh(t)),Iv(FI,e)}}function BI(t,e,n){t==="focusin"?(km(),yo=e,Lo=n,yo.attachEvent("onpropertychange",Wv)):t==="focusout"&&km()}function zI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Su(Lo)}function $I(t,e){if(t==="click")return Su(e)}function WI(t,e){if(t==="input"||t==="change")return Su(e)}function qI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:qI;function Oo(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!dd.call(e,i)||!un(t[i],e[i]))return!1}return!0}function Nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bm(t,e){var n=Nm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nm(n)}}function qv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hv(){for(var t=window,e=Vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vl(t.document)}return e}function Hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function HI(t){var e=Hv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qv(n.ownerDocument.documentElement,n)){if(r!==null&&Hh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=bm(n,s);var o=bm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var KI=zn&&"documentMode"in document&&11>=document.documentMode,Bi=null,kd=null,vo=null,Nd=!1;function Dm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nd||Bi==null||Bi!==Vl(r)||(r=Bi,"selectionStart"in r&&Hh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vo&&Oo(vo,r)||(vo=r,r=Bl(kd,"onSelect"),0<r.length&&(e=new $h("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Bi)))}function Za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zi={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},kc={},Kv={};zn&&(Kv=document.createElement("div").style,"AnimationEvent"in window||(delete zi.animationend.animation,delete zi.animationiteration.animation,delete zi.animationstart.animation),"TransitionEvent"in window||delete zi.transitionend.transition);function xu(t){if(kc[t])return kc[t];if(!zi[t])return t;var e=zi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Kv)return kc[t]=e[n];return t}var Gv=xu("animationend"),Qv=xu("animationiteration"),Yv=xu("animationstart"),Xv=xu("transitionend"),Jv=new Map,Vm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,e){Jv.set(t,e),Ei(e,[t])}for(var Nc=0;Nc<Vm.length;Nc++){var bc=Vm[Nc],GI=bc.toLowerCase(),QI=bc[0].toUpperCase()+bc.slice(1);br(GI,"on"+QI)}br(Gv,"onAnimationEnd");br(Qv,"onAnimationIteration");br(Yv,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(Xv,"onTransitionEnd");as("onMouseEnter",["mouseout","mouseover"]);as("onMouseLeave",["mouseout","mouseover"]);as("onPointerEnter",["pointerout","pointerover"]);as("onPointerLeave",["pointerout","pointerover"]);Ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YI=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function Lm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,GT(r,e,void 0,t),t.currentTarget=null}function Zv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Lm(i,l,d),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Lm(i,l,d),s=u}}}if(Ol)throw t=xd,Ol=!1,xd=null,t}function we(t,e){var n=e[Od];n===void 0&&(n=e[Od]=new Set);var r=t+"__bubble";n.has(r)||(e_(e,t,2,!1),n.add(r))}function Dc(t,e,n){var r=0;e&&(r|=4),e_(n,t,r,e)}var el="_reactListening"+Math.random().toString(36).slice(2);function Mo(t){if(!t[el]){t[el]=!0,av.forEach(function(n){n!=="selectionchange"&&(YI.has(n)||Dc(n,!1,t),Dc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[el]||(e[el]=!0,Dc("selectionchange",!1,e))}}function e_(t,e,n,r){switch(Mv(e)){case 1:var i=cI;break;case 4:i=dI;break;default:i=Bh}n=i.bind(null,e,n,t),i=void 0,!Sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Vc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ti(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Iv(function(){var d=s,f=Mh(n),m=[];e:{var _=Jv.get(t);if(_!==void 0){var x=$h,b=t;switch(t){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":x=xI;break;case"focusin":b="focus",x=Cc;break;case"focusout":b="blur",x=Cc;break;case"beforeblur":case"afterblur":x=Cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=pI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=PI;break;case Gv:case Qv:case Yv:x=yI;break;case Xv:x=NI;break;case"scroll":x=hI;break;case"wheel":x=DI;break;case"copy":case"cut":case"paste":x=_I;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Sm}var D=(e&4)!==0,R=!D&&t==="scroll",S=D?_!==null?_+"Capture":null:_;D=[];for(var E=d,g;E!==null;){g=E;var L=g.stateNode;if(g.tag===5&&L!==null&&(g=L,S!==null&&(L=No(E,S),L!=null&&D.push(jo(E,L,g)))),R)break;E=E.return}0<D.length&&(_=new x(_,b,null,n,f),m.push({event:_,listeners:D}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",_&&n!==Id&&(b=n.relatedTarget||n.fromElement)&&(ti(b)||b[$n]))break e;if((x||_)&&(_=f.window===f?f:(_=f.ownerDocument)?_.defaultView||_.parentWindow:window,x?(b=n.relatedTarget||n.toElement,x=d,b=b?ti(b):null,b!==null&&(R=Ti(b),b!==R||b.tag!==5&&b.tag!==6)&&(b=null)):(x=null,b=d),x!==b)){if(D=Im,L="onMouseLeave",S="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(D=Sm,L="onPointerLeave",S="onPointerEnter",E="pointer"),R=x==null?_:$i(x),g=b==null?_:$i(b),_=new D(L,E+"leave",x,n,f),_.target=R,_.relatedTarget=g,L=null,ti(f)===d&&(D=new D(S,E+"enter",b,n,f),D.target=g,D.relatedTarget=R,L=D),R=L,x&&b)t:{for(D=x,S=b,E=0,g=D;g;g=Vi(g))E++;for(g=0,L=S;L;L=Vi(L))g++;for(;0<E-g;)D=Vi(D),E--;for(;0<g-E;)S=Vi(S),g--;for(;E--;){if(D===S||S!==null&&D===S.alternate)break t;D=Vi(D),S=Vi(S)}D=null}else D=null;x!==null&&Om(m,_,x,D,!1),b!==null&&R!==null&&Om(m,R,b,D,!0)}}e:{if(_=d?$i(d):window,x=_.nodeName&&_.nodeName.toLowerCase(),x==="select"||x==="input"&&_.type==="file")var U=UI;else if(Rm(_))if($v)U=WI;else{U=zI;var F=BI}else(x=_.nodeName)&&x.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(U=$I);if(U&&(U=U(t,d))){zv(m,U,n,f);break e}F&&F(t,_,d),t==="focusout"&&(F=_._wrapperState)&&F.controlled&&_.type==="number"&&vd(_,"number",_.value)}switch(F=d?$i(d):window,t){case"focusin":(Rm(F)||F.contentEditable==="true")&&(Bi=F,kd=d,vo=null);break;case"focusout":vo=kd=Bi=null;break;case"mousedown":Nd=!0;break;case"contextmenu":case"mouseup":case"dragend":Nd=!1,Dm(m,n,f);break;case"selectionchange":if(KI)break;case"keydown":case"keyup":Dm(m,n,f)}var T;if(qh)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ui?Uv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Fv&&n.locale!=="ko"&&(Ui||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ui&&(T=jv()):(fr=f,zh="value"in fr?fr.value:fr.textContent,Ui=!0)),F=Bl(d,v),0<F.length&&(v=new Am(v,t,null,n,f),m.push({event:v,listeners:F}),T?v.data=T:(T=Bv(n),T!==null&&(v.data=T)))),(T=LI?OI(t,n):MI(t,n))&&(d=Bl(d,"onBeforeInput"),0<d.length&&(f=new Am("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=T))}Zv(m,e)})}function jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=No(t,n),s!=null&&r.unshift(jo(t,s,i)),s=No(t,e),s!=null&&r.push(jo(t,s,i))),t=t.return}return r}function Vi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Om(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=No(n,s),u!=null&&o.unshift(jo(n,u,l))):i||(u=No(n,s),u!=null&&o.push(jo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var XI=/\r\n?/g,JI=/\u0000|\uFFFD/g;function Mm(t){return(typeof t=="string"?t:""+t).replace(XI,`
`).replace(JI,"")}function tl(t,e,n){if(e=Mm(e),Mm(t)!==e&&n)throw Error(j(425))}function zl(){}var bd=null,Dd=null;function Vd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ld=typeof setTimeout=="function"?setTimeout:void 0,ZI=typeof clearTimeout=="function"?clearTimeout:void 0,jm=typeof Promise=="function"?Promise:void 0,eA=typeof queueMicrotask=="function"?queueMicrotask:typeof jm<"u"?function(t){return jm.resolve(null).then(t).catch(tA)}:Ld;function tA(t){setTimeout(function(){throw t})}function Lc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Vo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vo(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Is=Math.random().toString(36).slice(2),yn="__reactFiber$"+Is,Fo="__reactProps$"+Is,$n="__reactContainer$"+Is,Od="__reactEvents$"+Is,nA="__reactListeners$"+Is,rA="__reactHandles$"+Is;function ti(t){var e=t[yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$n]||n[yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fm(t);t!==null;){if(n=t[yn])return n;t=Fm(t)}return e}t=n,n=t.parentNode}return null}function aa(t){return t=t[yn]||t[$n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $i(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Cu(t){return t[Fo]||null}var Md=[],Wi=-1;function Dr(t){return{current:t}}function Te(t){0>Wi||(t.current=Md[Wi],Md[Wi]=null,Wi--)}function ge(t,e){Wi++,Md[Wi]=t.current,t.current=e}var Rr={},pt=Dr(Rr),Ct=Dr(!1),ui=Rr;function ls(t,e){var n=t.type.contextTypes;if(!n)return Rr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Rt(t){return t=t.childContextTypes,t!=null}function $l(){Te(Ct),Te(pt)}function Um(t,e,n){if(pt.current!==Rr)throw Error(j(168));ge(pt,e),ge(Ct,n)}function t_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,BT(t)||"Unknown",i));return Ce({},n,r)}function Wl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,ui=pt.current,ge(pt,t),ge(Ct,Ct.current),!0}function Bm(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=t_(t,e,ui),r.__reactInternalMemoizedMergedChildContext=t,Te(Ct),Te(pt),ge(pt,t)):Te(Ct),ge(Ct,n)}var Dn=null,Ru=!1,Oc=!1;function n_(t){Dn===null?Dn=[t]:Dn.push(t)}function iA(t){Ru=!0,n_(t)}function Vr(){if(!Oc&&Dn!==null){Oc=!0;var t=0,e=fe;try{var n=Dn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Dn=null,Ru=!1}catch(i){throw Dn!==null&&(Dn=Dn.slice(t+1)),Cv(jh,Vr),i}finally{fe=e,Oc=!1}}return null}var qi=[],Hi=0,ql=null,Hl=0,qt=[],Ht=0,ci=null,Vn=1,Ln="";function Jr(t,e){qi[Hi++]=Hl,qi[Hi++]=ql,ql=t,Hl=e}function r_(t,e,n){qt[Ht++]=Vn,qt[Ht++]=Ln,qt[Ht++]=ci,ci=t;var r=Vn;t=Ln;var i=32-an(r)-1;r&=~(1<<i),n+=1;var s=32-an(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Vn=1<<32-an(e)+i|n<<i|r,Ln=s+t}else Vn=1<<s|n<<i|r,Ln=t}function Kh(t){t.return!==null&&(Jr(t,1),r_(t,1,0))}function Gh(t){for(;t===ql;)ql=qi[--Hi],qi[Hi]=null,Hl=qi[--Hi],qi[Hi]=null;for(;t===ci;)ci=qt[--Ht],qt[Ht]=null,Ln=qt[--Ht],qt[Ht]=null,Vn=qt[--Ht],qt[Ht]=null}var Mt=null,Lt=null,Ae=!1,on=null;function i_(t,e){var n=Kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mt=t,Lt=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mt=t,Lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ci!==null?{id:Vn,overflow:Ln}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mt=t,Lt=null,!0):!1;default:return!1}}function jd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fd(t){if(Ae){var e=Lt;if(e){var n=e;if(!zm(t,e)){if(jd(t))throw Error(j(418));e=_r(n.nextSibling);var r=Mt;e&&zm(t,e)?i_(r,n):(t.flags=t.flags&-4097|2,Ae=!1,Mt=t)}}else{if(jd(t))throw Error(j(418));t.flags=t.flags&-4097|2,Ae=!1,Mt=t}}}function $m(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mt=t}function nl(t){if(t!==Mt)return!1;if(!Ae)return $m(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vd(t.type,t.memoizedProps)),e&&(e=Lt)){if(jd(t))throw s_(),Error(j(418));for(;e;)i_(t,e),e=_r(e.nextSibling)}if($m(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Lt=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Lt=null}}else Lt=Mt?_r(t.stateNode.nextSibling):null;return!0}function s_(){for(var t=Lt;t;)t=_r(t.nextSibling)}function us(){Lt=Mt=null,Ae=!1}function Qh(t){on===null?on=[t]:on.push(t)}var sA=Xn.ReactCurrentBatchConfig;function Js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function rl(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wm(t){var e=t._init;return e(t._payload)}function o_(t){function e(S,E){if(t){var g=S.deletions;g===null?(S.deletions=[E],S.flags|=16):g.push(E)}}function n(S,E){if(!t)return null;for(;E!==null;)e(S,E),E=E.sibling;return null}function r(S,E){for(S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function i(S,E){return S=Ir(S,E),S.index=0,S.sibling=null,S}function s(S,E,g){return S.index=g,t?(g=S.alternate,g!==null?(g=g.index,g<E?(S.flags|=2,E):g):(S.flags|=2,E)):(S.flags|=1048576,E)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,E,g,L){return E===null||E.tag!==6?(E=$c(g,S.mode,L),E.return=S,E):(E=i(E,g),E.return=S,E)}function u(S,E,g,L){var U=g.type;return U===Fi?f(S,E,g.props.children,L,g.key):E!==null&&(E.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===sr&&Wm(U)===E.type)?(L=i(E,g.props),L.ref=Js(S,E,g),L.return=S,L):(L=Al(g.type,g.key,g.props,null,S.mode,L),L.ref=Js(S,E,g),L.return=S,L)}function d(S,E,g,L){return E===null||E.tag!==4||E.stateNode.containerInfo!==g.containerInfo||E.stateNode.implementation!==g.implementation?(E=Wc(g,S.mode,L),E.return=S,E):(E=i(E,g.children||[]),E.return=S,E)}function f(S,E,g,L,U){return E===null||E.tag!==7?(E=ai(g,S.mode,L,U),E.return=S,E):(E=i(E,g),E.return=S,E)}function m(S,E,g){if(typeof E=="string"&&E!==""||typeof E=="number")return E=$c(""+E,S.mode,g),E.return=S,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ha:return g=Al(E.type,E.key,E.props,null,S.mode,g),g.ref=Js(S,null,E),g.return=S,g;case ji:return E=Wc(E,S.mode,g),E.return=S,E;case sr:var L=E._init;return m(S,L(E._payload),g)}if(io(E)||Ks(E))return E=ai(E,S.mode,g,null),E.return=S,E;rl(S,E)}return null}function _(S,E,g,L){var U=E!==null?E.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return U!==null?null:l(S,E,""+g,L);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ha:return g.key===U?u(S,E,g,L):null;case ji:return g.key===U?d(S,E,g,L):null;case sr:return U=g._init,_(S,E,U(g._payload),L)}if(io(g)||Ks(g))return U!==null?null:f(S,E,g,L,null);rl(S,g)}return null}function x(S,E,g,L,U){if(typeof L=="string"&&L!==""||typeof L=="number")return S=S.get(g)||null,l(E,S,""+L,U);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Ha:return S=S.get(L.key===null?g:L.key)||null,u(E,S,L,U);case ji:return S=S.get(L.key===null?g:L.key)||null,d(E,S,L,U);case sr:var F=L._init;return x(S,E,g,F(L._payload),U)}if(io(L)||Ks(L))return S=S.get(g)||null,f(E,S,L,U,null);rl(E,L)}return null}function b(S,E,g,L){for(var U=null,F=null,T=E,v=E=0,w=null;T!==null&&v<g.length;v++){T.index>v?(w=T,T=null):w=T.sibling;var A=_(S,T,g[v],L);if(A===null){T===null&&(T=w);break}t&&T&&A.alternate===null&&e(S,T),E=s(A,E,v),F===null?U=A:F.sibling=A,F=A,T=w}if(v===g.length)return n(S,T),Ae&&Jr(S,v),U;if(T===null){for(;v<g.length;v++)T=m(S,g[v],L),T!==null&&(E=s(T,E,v),F===null?U=T:F.sibling=T,F=T);return Ae&&Jr(S,v),U}for(T=r(S,T);v<g.length;v++)w=x(T,S,v,g[v],L),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?v:w.key),E=s(w,E,v),F===null?U=w:F.sibling=w,F=w);return t&&T.forEach(function(C){return e(S,C)}),Ae&&Jr(S,v),U}function D(S,E,g,L){var U=Ks(g);if(typeof U!="function")throw Error(j(150));if(g=U.call(g),g==null)throw Error(j(151));for(var F=U=null,T=E,v=E=0,w=null,A=g.next();T!==null&&!A.done;v++,A=g.next()){T.index>v?(w=T,T=null):w=T.sibling;var C=_(S,T,A.value,L);if(C===null){T===null&&(T=w);break}t&&T&&C.alternate===null&&e(S,T),E=s(C,E,v),F===null?U=C:F.sibling=C,F=C,T=w}if(A.done)return n(S,T),Ae&&Jr(S,v),U;if(T===null){for(;!A.done;v++,A=g.next())A=m(S,A.value,L),A!==null&&(E=s(A,E,v),F===null?U=A:F.sibling=A,F=A);return Ae&&Jr(S,v),U}for(T=r(S,T);!A.done;v++,A=g.next())A=x(T,S,v,A.value,L),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?v:A.key),E=s(A,E,v),F===null?U=A:F.sibling=A,F=A);return t&&T.forEach(function(P){return e(S,P)}),Ae&&Jr(S,v),U}function R(S,E,g,L){if(typeof g=="object"&&g!==null&&g.type===Fi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ha:e:{for(var U=g.key,F=E;F!==null;){if(F.key===U){if(U=g.type,U===Fi){if(F.tag===7){n(S,F.sibling),E=i(F,g.props.children),E.return=S,S=E;break e}}else if(F.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===sr&&Wm(U)===F.type){n(S,F.sibling),E=i(F,g.props),E.ref=Js(S,F,g),E.return=S,S=E;break e}n(S,F);break}else e(S,F);F=F.sibling}g.type===Fi?(E=ai(g.props.children,S.mode,L,g.key),E.return=S,S=E):(L=Al(g.type,g.key,g.props,null,S.mode,L),L.ref=Js(S,E,g),L.return=S,S=L)}return o(S);case ji:e:{for(F=g.key;E!==null;){if(E.key===F)if(E.tag===4&&E.stateNode.containerInfo===g.containerInfo&&E.stateNode.implementation===g.implementation){n(S,E.sibling),E=i(E,g.children||[]),E.return=S,S=E;break e}else{n(S,E);break}else e(S,E);E=E.sibling}E=Wc(g,S.mode,L),E.return=S,S=E}return o(S);case sr:return F=g._init,R(S,E,F(g._payload),L)}if(io(g))return b(S,E,g,L);if(Ks(g))return D(S,E,g,L);rl(S,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,E!==null&&E.tag===6?(n(S,E.sibling),E=i(E,g),E.return=S,S=E):(n(S,E),E=$c(g,S.mode,L),E.return=S,S=E),o(S)):n(S,E)}return R}var cs=o_(!0),a_=o_(!1),Kl=Dr(null),Gl=null,Ki=null,Yh=null;function Xh(){Yh=Ki=Gl=null}function Jh(t){var e=Kl.current;Te(Kl),t._currentValue=e}function Ud(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ts(t,e){Gl=t,Yh=Ki=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xt=!0),t.firstContext=null)}function Yt(t){var e=t._currentValue;if(Yh!==t)if(t={context:t,memoizedValue:e,next:null},Ki===null){if(Gl===null)throw Error(j(308));Ki=t,Gl.dependencies={lanes:0,firstContext:t}}else Ki=Ki.next=t;return e}var ni=null;function Zh(t){ni===null?ni=[t]:ni.push(t)}function l_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Wn(t,r)}function Wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Wn(t,n)}return i=r.interleaved,i===null?(e.next=e,Zh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Wn(t,n)}function vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fh(t,n)}}function qm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ql(t,e,n,r){var i=t.updateQueue;or=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=d=u=null,l=s;do{var _=l.lane,x=l.eventTime;if((r&_)===_){f!==null&&(f=f.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=t,D=l;switch(_=e,x=n,D.tag){case 1:if(b=D.payload,typeof b=="function"){m=b.call(x,m,_);break e}m=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=D.payload,_=typeof b=="function"?b.call(x,m,_):b,_==null)break e;m=Ce({},m,_);break e;case 2:or=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,_=i.effects,_===null?i.effects=[l]:_.push(l))}else x={eventTime:x,lane:_,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=x,u=m):f=f.next=x,o|=_;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;_=l,l=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);hi|=o,t.lanes=o,t.memoizedState=m}}function Hm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var la={},wn=Dr(la),Uo=Dr(la),Bo=Dr(la);function ri(t){if(t===la)throw Error(j(174));return t}function tf(t,e){switch(ge(Bo,e),ge(Uo,t),ge(wn,la),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wd(e,t)}Te(wn),ge(wn,e)}function ds(){Te(wn),Te(Uo),Te(Bo)}function c_(t){ri(Bo.current);var e=ri(wn.current),n=wd(e,t.type);e!==n&&(ge(Uo,t),ge(wn,n))}function nf(t){Uo.current===t&&(Te(wn),Te(Uo))}var Se=Dr(0);function Yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mc=[];function rf(){for(var t=0;t<Mc.length;t++)Mc[t]._workInProgressVersionPrimary=null;Mc.length=0}var _l=Xn.ReactCurrentDispatcher,jc=Xn.ReactCurrentBatchConfig,di=0,xe=null,je=null,Ke=null,Xl=!1,_o=!1,zo=0,oA=0;function lt(){throw Error(j(321))}function sf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function of(t,e,n,r,i,s){if(di=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_l.current=t===null||t.memoizedState===null?cA:dA,t=n(r,i),_o){s=0;do{if(_o=!1,zo=0,25<=s)throw Error(j(301));s+=1,Ke=je=null,e.updateQueue=null,_l.current=hA,t=n(r,i)}while(_o)}if(_l.current=Jl,e=je!==null&&je.next!==null,di=0,Ke=je=xe=null,Xl=!1,e)throw Error(j(300));return t}function af(){var t=zo!==0;return zo=0,t}function gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?xe.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function Xt(){if(je===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=Ke===null?xe.memoizedState:Ke.next;if(e!==null)Ke=e,je=t;else{if(t===null)throw Error(j(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ke===null?xe.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function $o(t,e){return typeof e=="function"?e(t):e}function Fc(t){var e=Xt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,d=s;do{var f=d.lane;if((di&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,xe.lanes|=f,hi|=f}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=l,un(r,e.memoizedState)||(xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,hi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uc(t){var e=Xt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);un(s,e.memoizedState)||(xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function d_(){}function h_(t,e){var n=xe,r=Xt(),i=e(),s=!un(r.memoizedState,i);if(s&&(r.memoizedState=i,xt=!0),r=r.queue,lf(m_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,Wo(9,p_.bind(null,n,r,i,e),void 0,null),Ge===null)throw Error(j(349));di&30||f_(n,e,i)}return i}function f_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function p_(t,e,n,r){e.value=n,e.getSnapshot=r,g_(e)&&y_(t)}function m_(t,e,n){return n(function(){g_(e)&&y_(t)})}function g_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function y_(t){var e=Wn(t,1);e!==null&&ln(e,t,1,-1)}function Km(t){var e=gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},e.queue=t,t=t.dispatch=uA.bind(null,xe,t),[e.memoizedState,t]}function Wo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function v_(){return Xt().memoizedState}function wl(t,e,n,r){var i=gn();xe.flags|=t,i.memoizedState=Wo(1|e,n,void 0,r===void 0?null:r)}function Pu(t,e,n,r){var i=Xt();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&sf(r,o.deps)){i.memoizedState=Wo(e,n,s,r);return}}xe.flags|=t,i.memoizedState=Wo(1|e,n,s,r)}function Gm(t,e){return wl(8390656,8,t,e)}function lf(t,e){return Pu(2048,8,t,e)}function __(t,e){return Pu(4,2,t,e)}function w_(t,e){return Pu(4,4,t,e)}function E_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function T_(t,e,n){return n=n!=null?n.concat([t]):null,Pu(4,4,E_.bind(null,e,t),n)}function uf(){}function I_(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function A_(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function S_(t,e,n){return di&21?(un(n,e)||(n=kv(),xe.lanes|=n,hi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xt=!0),t.memoizedState=n)}function aA(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=jc.transition;jc.transition={};try{t(!1),e()}finally{fe=n,jc.transition=r}}function x_(){return Xt().memoizedState}function lA(t,e,n){var r=Tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},C_(t))R_(e,n);else if(n=l_(t,e,n,r),n!==null){var i=_t();ln(n,t,r,i),P_(n,e,r)}}function uA(t,e,n){var r=Tr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(C_(t))R_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,un(l,o)){var u=e.interleaved;u===null?(i.next=i,Zh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=l_(t,e,i,r),n!==null&&(i=_t(),ln(n,t,r,i),P_(n,e,r))}}function C_(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function R_(t,e){_o=Xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function P_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fh(t,n)}}var Jl={readContext:Yt,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},cA={readContext:Yt,useCallback:function(t,e){return gn().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:Gm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wl(4194308,4,E_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return wl(4,2,t,e)},useMemo:function(t,e){var n=gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=lA.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=gn();return t={current:t},e.memoizedState=t},useState:Km,useDebugValue:uf,useDeferredValue:function(t){return gn().memoizedState=t},useTransition:function(){var t=Km(!1),e=t[0];return t=aA.bind(null,t[1]),gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=gn();if(Ae){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Ge===null)throw Error(j(349));di&30||f_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Gm(m_.bind(null,r,s,t),[t]),r.flags|=2048,Wo(9,p_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=gn(),e=Ge.identifierPrefix;if(Ae){var n=Ln,r=Vn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=oA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dA={readContext:Yt,useCallback:I_,useContext:Yt,useEffect:lf,useImperativeHandle:T_,useInsertionEffect:__,useLayoutEffect:w_,useMemo:A_,useReducer:Fc,useRef:v_,useState:function(){return Fc($o)},useDebugValue:uf,useDeferredValue:function(t){var e=Xt();return S_(e,je.memoizedState,t)},useTransition:function(){var t=Fc($o)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:d_,useSyncExternalStore:h_,useId:x_,unstable_isNewReconciler:!1},hA={readContext:Yt,useCallback:I_,useContext:Yt,useEffect:lf,useImperativeHandle:T_,useInsertionEffect:__,useLayoutEffect:w_,useMemo:A_,useReducer:Uc,useRef:v_,useState:function(){return Uc($o)},useDebugValue:uf,useDeferredValue:function(t){var e=Xt();return je===null?e.memoizedState=t:S_(e,je.memoizedState,t)},useTransition:function(){var t=Uc($o)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:d_,useSyncExternalStore:h_,useId:x_,unstable_isNewReconciler:!1};function rn(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Bd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ku={isMounted:function(t){return(t=t._reactInternals)?Ti(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=_t(),i=Tr(t),s=Fn(r,i);s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,i),e!==null&&(ln(e,t,i,r),vl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=_t(),i=Tr(t),s=Fn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,i),e!==null&&(ln(e,t,i,r),vl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_t(),r=Tr(t),i=Fn(n,r);i.tag=2,e!=null&&(i.callback=e),e=wr(t,i,r),e!==null&&(ln(e,t,r,n),vl(e,t,r))}};function Qm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oo(n,r)||!Oo(i,s):!0}function k_(t,e,n){var r=!1,i=Rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Yt(s):(i=Rt(e)?ui:pt.current,r=e.contextTypes,s=(r=r!=null)?ls(t,i):Rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ku,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ym(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ku.enqueueReplaceState(e,e.state,null)}function zd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ef(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Yt(s):(s=Rt(e)?ui:pt.current,i.context=ls(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ku.enqueueReplaceState(i,i.state,null),Ql(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function hs(t,e){try{var n="",r=e;do n+=UT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $d(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fA=typeof WeakMap=="function"?WeakMap:Map;function N_(t,e,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){eu||(eu=!0,Zd=r),$d(t,e)},n}function b_(t,e,n){n=Fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){$d(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$d(t,e),typeof r!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new fA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=CA.bind(null,t,e,n),e.then(t,t))}function Jm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fn(-1,1),e.tag=2,wr(n,e,1))),n.lanes|=1),t)}var pA=Xn.ReactCurrentOwner,xt=!1;function vt(t,e,n,r){e.child=t===null?a_(e,null,n,r):cs(e,t.child,n,r)}function eg(t,e,n,r,i){n=n.render;var s=e.ref;return ts(e,i),r=of(t,e,n,r,s,i),n=af(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(Ae&&n&&Kh(e),e.flags|=1,vt(t,e,r,i),e.child)}function tg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!yf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,D_(t,e,s,r,i)):(t=Al(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oo,n(o,r)&&t.ref===e.ref)return qn(t,e,i)}return e.flags|=1,t=Ir(s,r),t.ref=e.ref,t.return=e,e.child=t}function D_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Oo(s,r)&&t.ref===e.ref)if(xt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(xt=!0);else return e.lanes=t.lanes,qn(t,e,i)}return Wd(t,e,n,r,i)}function V_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Qi,Vt),Vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Qi,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(Qi,Vt),Vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(Qi,Vt),Vt|=r;return vt(t,e,i,n),e.child}function L_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wd(t,e,n,r,i){var s=Rt(n)?ui:pt.current;return s=ls(e,s),ts(e,i),n=of(t,e,n,r,s,i),r=af(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(Ae&&r&&Kh(e),e.flags|=1,vt(t,e,n,i),e.child)}function ng(t,e,n,r,i){if(Rt(n)){var s=!0;Wl(e)}else s=!1;if(ts(e,i),e.stateNode===null)El(t,e),k_(e,n,r),zd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Yt(d):(d=Rt(n)?ui:pt.current,d=ls(e,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&Ym(e,o,r,d),or=!1;var _=e.memoizedState;o.state=_,Ql(e,r,o,i),u=e.memoizedState,l!==r||_!==u||Ct.current||or?(typeof f=="function"&&(Bd(e,n,f,r),u=e.memoizedState),(l=or||Qm(e,n,l,r,_,u,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,u_(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:rn(e.type,l),o.props=d,m=e.pendingProps,_=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Yt(u):(u=Rt(n)?ui:pt.current,u=ls(e,u));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||_!==u)&&Ym(e,o,r,u),or=!1,_=e.memoizedState,o.state=_,Ql(e,r,o,i);var b=e.memoizedState;l!==m||_!==b||Ct.current||or?(typeof x=="function"&&(Bd(e,n,x,r),b=e.memoizedState),(d=or||Qm(e,n,d,r,_,b,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=b),o.props=r,o.state=b,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return qd(t,e,n,r,s,i)}function qd(t,e,n,r,i,s){L_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Bm(e,n,!1),qn(t,e,s);r=e.stateNode,pA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=cs(e,t.child,null,s),e.child=cs(e,null,l,s)):vt(t,e,l,s),e.memoizedState=r.state,i&&Bm(e,n,!0),e.child}function O_(t){var e=t.stateNode;e.pendingContext?Um(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Um(t,e.context,!1),tf(t,e.containerInfo)}function rg(t,e,n,r,i){return us(),Qh(i),e.flags|=256,vt(t,e,n,r),e.child}var Hd={dehydrated:null,treeContext:null,retryLane:0};function Kd(t){return{baseLanes:t,cachePool:null,transitions:null}}function M_(t,e,n){var r=e.pendingProps,i=Se.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Se,i&1),t===null)return Fd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Du(o,r,0,null),t=ai(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Kd(n),e.memoizedState=Hd,t):cf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return mA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ir(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Ir(l,s):(s=ai(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Kd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Hd,r}return s=t.child,t=s.sibling,r=Ir(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function cf(t,e){return e=Du({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function il(t,e,n,r){return r!==null&&Qh(r),cs(e,t.child,null,n),t=cf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Bc(Error(j(422))),il(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Du({mode:"visible",children:r.children},i,0,null),s=ai(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&cs(e,t.child,null,o),e.child.memoizedState=Kd(o),e.memoizedState=Hd,s);if(!(e.mode&1))return il(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=Bc(s,r,void 0),il(t,e,o,r)}if(l=(o&t.childLanes)!==0,xt||l){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wn(t,i),ln(r,t,i,-1))}return gf(),r=Bc(Error(j(421))),il(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=RA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Lt=_r(i.nextSibling),Mt=e,Ae=!0,on=null,t!==null&&(qt[Ht++]=Vn,qt[Ht++]=Ln,qt[Ht++]=ci,Vn=t.id,Ln=t.overflow,ci=e),e=cf(e,r.children),e.flags|=4096,e)}function ig(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ud(t.return,e,n)}function zc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function j_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(vt(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ig(t,n,e);else if(t.tag===19)ig(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Yl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),zc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Yl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}zc(e,!0,n,null,s);break;case"together":zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function El(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gA(t,e,n){switch(e.tag){case 3:O_(e),us();break;case 5:c_(e);break;case 1:Rt(e.type)&&Wl(e);break;case 4:tf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(Kl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?M_(t,e,n):(ge(Se,Se.current&1),t=qn(t,e,n),t!==null?t.sibling:null);ge(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return j_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,V_(t,e,n)}return qn(t,e,n)}var F_,Gd,U_,B_;F_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gd=function(){};U_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ri(wn.current);var s=null;switch(n){case"input":i=gd(t,i),r=gd(t,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=_d(t,i),r=_d(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=zl)}Ed(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Po.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Po.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&we("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};B_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zs(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function yA(t,e,n){var r=e.pendingProps;switch(Gh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(e),null;case 1:return Rt(e.type)&&$l(),ut(e),null;case 3:return r=e.stateNode,ds(),Te(Ct),Te(pt),rf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(nl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,on!==null&&(nh(on),on=null))),Gd(t,e),ut(e),null;case 5:nf(e);var i=ri(Bo.current);if(n=e.type,t!==null&&e.stateNode!=null)U_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return ut(e),null}if(t=ri(wn.current),nl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[yn]=e,r[Fo]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<oo.length;i++)we(oo[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":fm(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":mm(r,s),we("invalid",r)}Ed(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&tl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&tl(r.textContent,l,t),i=["children",""+l]):Po.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":Ka(r),pm(r,s,!0);break;case"textarea":Ka(r),gm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=zl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[yn]=e,t[Fo]=r,F_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Td(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<oo.length;i++)we(oo[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":fm(t,r),i=gd(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),we("invalid",t);break;case"textarea":mm(t,r),i=_d(t,r),we("invalid",t);break;default:i=r}Ed(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?vv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&gv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ko(t,u):typeof u=="number"&&ko(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Po.hasOwnProperty(s)?u!=null&&s==="onScroll"&&we("scroll",t):u!=null&&Dh(t,s,u,o))}switch(n){case"input":Ka(t),pm(t,r,!1);break;case"textarea":Ka(t),gm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Cr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Xi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Xi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=zl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ut(e),null;case 6:if(t&&e.stateNode!=null)B_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=ri(Bo.current),ri(wn.current),nl(e)){if(r=e.stateNode,n=e.memoizedProps,r[yn]=e,(s=r.nodeValue!==n)&&(t=Mt,t!==null))switch(t.tag){case 3:tl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&tl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=e,e.stateNode=r}return ut(e),null;case 13:if(Te(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&Lt!==null&&e.mode&1&&!(e.flags&128))s_(),us(),e.flags|=98560,s=!1;else if(s=nl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[yn]=e}else us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ut(e),s=!1}else on!==null&&(nh(on),on=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?Fe===0&&(Fe=3):gf())),e.updateQueue!==null&&(e.flags|=4),ut(e),null);case 4:return ds(),Gd(t,e),t===null&&Mo(e.stateNode.containerInfo),ut(e),null;case 10:return Jh(e.type._context),ut(e),null;case 17:return Rt(e.type)&&$l(),ut(e),null;case 19:if(Te(Se),s=e.memoizedState,s===null)return ut(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Zs(s,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yl(t),o!==null){for(e.flags|=128,Zs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Se,Se.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>fs&&(e.flags|=128,r=!0,Zs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Yl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ae)return ut(e),null}else 2*De()-s.renderingStartTime>fs&&n!==1073741824&&(e.flags|=128,r=!0,Zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Se.current,ge(Se,r?n&1|2:n&1),e):(ut(e),null);case 22:case 23:return mf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(ut(e),e.subtreeFlags&6&&(e.flags|=8192)):ut(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function vA(t,e){switch(Gh(e),e.tag){case 1:return Rt(e.type)&&$l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ds(),Te(Ct),Te(pt),rf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nf(e),null;case 13:if(Te(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Se),null;case 4:return ds(),null;case 10:return Jh(e.type._context),null;case 22:case 23:return mf(),null;case 24:return null;default:return null}}var sl=!1,ht=!1,_A=typeof WeakSet=="function"?WeakSet:Set,q=null;function Gi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function Qd(t,e,n){try{n()}catch(r){ke(t,e,r)}}var sg=!1;function wA(t,e){if(bd=Fl,t=Hv(),Hh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,f=0,m=t,_=null;t:for(;;){for(var x;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(x=m.firstChild)!==null;)_=m,m=x;for(;;){if(m===t)break t;if(_===n&&++d===i&&(l=o),_===s&&++f===r&&(u=o),(x=m.nextSibling)!==null)break;m=_,_=m.parentNode}m=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dd={focusedElem:t,selectionRange:n},Fl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var b=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var D=b.memoizedProps,R=b.memoizedState,S=e.stateNode,E=S.getSnapshotBeforeUpdate(e.elementType===e.type?D:rn(e.type,D),R);S.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(L){ke(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return b=sg,sg=!1,b}function wo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qd(e,n,s)}i=i.next}while(i!==r)}}function Nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Yd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function z_(t){var e=t.alternate;e!==null&&(t.alternate=null,z_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yn],delete e[Fo],delete e[Od],delete e[nA],delete e[rA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $_(t){return t.tag===5||t.tag===3||t.tag===4}function og(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zl));else if(r!==4&&(t=t.child,t!==null))for(Xd(t,e,n),t=t.sibling;t!==null;)Xd(t,e,n),t=t.sibling}function Jd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Jd(t,e,n),t=t.sibling;t!==null;)Jd(t,e,n),t=t.sibling}var Xe=null,sn=!1;function rr(t,e,n){for(n=n.child;n!==null;)W_(t,e,n),n=n.sibling}function W_(t,e,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(Iu,n)}catch{}switch(n.tag){case 5:ht||Gi(n,e);case 6:var r=Xe,i=sn;Xe=null,rr(t,e,n),Xe=r,sn=i,Xe!==null&&(sn?(t=Xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(sn?(t=Xe,n=n.stateNode,t.nodeType===8?Lc(t.parentNode,n):t.nodeType===1&&Lc(t,n),Vo(t)):Lc(Xe,n.stateNode));break;case 4:r=Xe,i=sn,Xe=n.stateNode.containerInfo,sn=!0,rr(t,e,n),Xe=r,sn=i;break;case 0:case 11:case 14:case 15:if(!ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qd(n,e,o),i=i.next}while(i!==r)}rr(t,e,n);break;case 1:if(!ht&&(Gi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ke(n,e,l)}rr(t,e,n);break;case 21:rr(t,e,n);break;case 22:n.mode&1?(ht=(r=ht)||n.memoizedState!==null,rr(t,e,n),ht=r):rr(t,e,n);break;default:rr(t,e,n)}}function ag(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _A),e.forEach(function(r){var i=PA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Xe=l.stateNode,sn=!1;break e;case 3:Xe=l.stateNode.containerInfo,sn=!0;break e;case 4:Xe=l.stateNode.containerInfo,sn=!0;break e}l=l.return}if(Xe===null)throw Error(j(160));W_(s,o,i),Xe=null,sn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){ke(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)q_(e,t),e=e.sibling}function q_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nn(e,t),mn(t),r&4){try{wo(3,t,t.return),Nu(3,t)}catch(D){ke(t,t.return,D)}try{wo(5,t,t.return)}catch(D){ke(t,t.return,D)}}break;case 1:nn(e,t),mn(t),r&512&&n!==null&&Gi(n,n.return);break;case 5:if(nn(e,t),mn(t),r&512&&n!==null&&Gi(n,n.return),t.flags&32){var i=t.stateNode;try{ko(i,"")}catch(D){ke(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&fv(i,s),Td(l,o);var d=Td(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?vv(i,m):f==="dangerouslySetInnerHTML"?gv(i,m):f==="children"?ko(i,m):Dh(i,f,m,d)}switch(l){case"input":yd(i,s);break;case"textarea":pv(i,s);break;case"select":var _=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?Xi(i,!!s.multiple,x,!1):_!==!!s.multiple&&(s.defaultValue!=null?Xi(i,!!s.multiple,s.defaultValue,!0):Xi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Fo]=s}catch(D){ke(t,t.return,D)}}break;case 6:if(nn(e,t),mn(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){ke(t,t.return,D)}}break;case 3:if(nn(e,t),mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(e.containerInfo)}catch(D){ke(t,t.return,D)}break;case 4:nn(e,t),mn(t);break;case 13:nn(e,t),mn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ff=De())),r&4&&ag(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ht=(d=ht)||f,nn(e,t),ht=d):nn(e,t),mn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(m=q=f;q!==null;){switch(_=q,x=_.child,_.tag){case 0:case 11:case 14:case 15:wo(4,_,_.return);break;case 1:Gi(_,_.return);var b=_.stateNode;if(typeof b.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,b.props=e.memoizedProps,b.state=e.memoizedState,b.componentWillUnmount()}catch(D){ke(r,n,D)}}break;case 5:Gi(_,_.return);break;case 22:if(_.memoizedState!==null){ug(m);continue}}x!==null?(x.return=_,q=x):ug(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=yv("display",o))}catch(D){ke(t,t.return,D)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(D){ke(t,t.return,D)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:nn(e,t),mn(t),r&4&&ag(t);break;case 21:break;default:nn(e,t),mn(t)}}function mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($_(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ko(i,""),r.flags&=-33);var s=og(t);Jd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=og(t);Xd(t,l,o);break;default:throw Error(j(161))}}catch(u){ke(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function EA(t,e,n){q=t,H_(t)}function H_(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||sl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ht;l=sl;var d=ht;if(sl=o,(ht=u)&&!d)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?cg(i):u!==null?(u.return=o,q=u):cg(i);for(;s!==null;)q=s,H_(s),s=s.sibling;q=i,sl=l,ht=d}lg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):lg(t)}}function lg(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ht||Nu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ht)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Vo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ht||e.flags&512&&Yd(e)}catch(_){ke(e,e.return,_)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function ug(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function cg(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nu(4,e)}catch(u){ke(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ke(e,i,u)}}var s=e.return;try{Yd(e)}catch(u){ke(e,s,u)}break;case 5:var o=e.return;try{Yd(e)}catch(u){ke(e,o,u)}}}catch(u){ke(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var TA=Math.ceil,Zl=Xn.ReactCurrentDispatcher,df=Xn.ReactCurrentOwner,Gt=Xn.ReactCurrentBatchConfig,ue=0,Ge=null,Le=null,et=0,Vt=0,Qi=Dr(0),Fe=0,qo=null,hi=0,bu=0,hf=0,Eo=null,At=null,ff=0,fs=1/0,bn=null,eu=!1,Zd=null,Er=null,ol=!1,pr=null,tu=0,To=0,eh=null,Tl=-1,Il=0;function _t(){return ue&6?De():Tl!==-1?Tl:Tl=De()}function Tr(t){return t.mode&1?ue&2&&et!==0?et&-et:sA.transition!==null?(Il===0&&(Il=kv()),Il):(t=fe,t!==0||(t=window.event,t=t===void 0?16:Mv(t.type)),t):1}function ln(t,e,n,r){if(50<To)throw To=0,eh=null,Error(j(185));sa(t,n,r),(!(ue&2)||t!==Ge)&&(t===Ge&&(!(ue&2)&&(bu|=n),Fe===4&&lr(t,et)),Pt(t,r),n===1&&ue===0&&!(e.mode&1)&&(fs=De()+500,Ru&&Vr()))}function Pt(t,e){var n=t.callbackNode;sI(t,e);var r=jl(t,t===Ge?et:0);if(r===0)n!==null&&_m(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&_m(n),e===1)t.tag===0?iA(dg.bind(null,t)):n_(dg.bind(null,t)),eA(function(){!(ue&6)&&Vr()}),n=null;else{switch(Nv(r)){case 1:n=jh;break;case 4:n=Rv;break;case 16:n=Ml;break;case 536870912:n=Pv;break;default:n=Ml}n=e0(n,K_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function K_(t,e){if(Tl=-1,Il=0,ue&6)throw Error(j(327));var n=t.callbackNode;if(ns()&&t.callbackNode!==n)return null;var r=jl(t,t===Ge?et:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nu(t,r);else{e=r;var i=ue;ue|=2;var s=Q_();(Ge!==t||et!==e)&&(bn=null,fs=De()+500,oi(t,e));do try{SA();break}catch(l){G_(t,l)}while(!0);Xh(),Zl.current=s,ue=i,Le!==null?e=0:(Ge=null,et=0,e=Fe)}if(e!==0){if(e===2&&(i=Cd(t),i!==0&&(r=i,e=th(t,i))),e===1)throw n=qo,oi(t,0),lr(t,r),Pt(t,De()),n;if(e===6)lr(t,r);else{if(i=t.current.alternate,!(r&30)&&!IA(i)&&(e=nu(t,r),e===2&&(s=Cd(t),s!==0&&(r=s,e=th(t,s))),e===1))throw n=qo,oi(t,0),lr(t,r),Pt(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Zr(t,At,bn);break;case 3:if(lr(t,r),(r&130023424)===r&&(e=ff+500-De(),10<e)){if(jl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){_t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ld(Zr.bind(null,t,At,bn),e);break}Zr(t,At,bn);break;case 4:if(lr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-an(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*TA(r/1960))-r,10<r){t.timeoutHandle=Ld(Zr.bind(null,t,At,bn),r);break}Zr(t,At,bn);break;case 5:Zr(t,At,bn);break;default:throw Error(j(329))}}}return Pt(t,De()),t.callbackNode===n?K_.bind(null,t):null}function th(t,e){var n=Eo;return t.current.memoizedState.isDehydrated&&(oi(t,e).flags|=256),t=nu(t,e),t!==2&&(e=At,At=n,e!==null&&nh(e)),t}function nh(t){At===null?At=t:At.push.apply(At,t)}function IA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~hf,e&=~bu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-an(e),r=1<<n;t[n]=-1,e&=~r}}function dg(t){if(ue&6)throw Error(j(327));ns();var e=jl(t,0);if(!(e&1))return Pt(t,De()),null;var n=nu(t,e);if(t.tag!==0&&n===2){var r=Cd(t);r!==0&&(e=r,n=th(t,r))}if(n===1)throw n=qo,oi(t,0),lr(t,e),Pt(t,De()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zr(t,At,bn),Pt(t,De()),null}function pf(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(fs=De()+500,Ru&&Vr())}}function fi(t){pr!==null&&pr.tag===0&&!(ue&6)&&ns();var e=ue;ue|=1;var n=Gt.transition,r=fe;try{if(Gt.transition=null,fe=1,t)return t()}finally{fe=r,Gt.transition=n,ue=e,!(ue&6)&&Vr()}}function mf(){Vt=Qi.current,Te(Qi)}function oi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ZI(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(Gh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$l();break;case 3:ds(),Te(Ct),Te(pt),rf();break;case 5:nf(r);break;case 4:ds();break;case 13:Te(Se);break;case 19:Te(Se);break;case 10:Jh(r.type._context);break;case 22:case 23:mf()}n=n.return}if(Ge=t,Le=t=Ir(t.current,null),et=Vt=e,Fe=0,qo=null,hf=bu=hi=0,At=Eo=null,ni!==null){for(e=0;e<ni.length;e++)if(n=ni[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ni=null}return t}function G_(t,e){do{var n=Le;try{if(Xh(),_l.current=Jl,Xl){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xl=!1}if(di=0,Ke=je=xe=null,_o=!1,zo=0,df.current=null,n===null||n.return===null){Fe=1,qo=e,Le=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=et,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var _=f.alternate;_?(f.updateQueue=_.updateQueue,f.memoizedState=_.memoizedState,f.lanes=_.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=Jm(o);if(x!==null){x.flags&=-257,Zm(x,o,l,s,e),x.mode&1&&Xm(s,d,e),e=x,u=d;var b=e.updateQueue;if(b===null){var D=new Set;D.add(u),e.updateQueue=D}else b.add(u);break e}else{if(!(e&1)){Xm(s,d,e),gf();break e}u=Error(j(426))}}else if(Ae&&l.mode&1){var R=Jm(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Zm(R,o,l,s,e),Qh(hs(u,l));break e}}s=u=hs(u,l),Fe!==4&&(Fe=2),Eo===null?Eo=[s]:Eo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=N_(s,u,e);qm(s,S);break e;case 1:l=u;var E=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Er===null||!Er.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=b_(s,l,e);qm(s,L);break e}}s=s.return}while(s!==null)}X_(n)}catch(U){e=U,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function Q_(){var t=Zl.current;return Zl.current=Jl,t===null?Jl:t}function gf(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Ge===null||!(hi&268435455)&&!(bu&268435455)||lr(Ge,et)}function nu(t,e){var n=ue;ue|=2;var r=Q_();(Ge!==t||et!==e)&&(bn=null,oi(t,e));do try{AA();break}catch(i){G_(t,i)}while(!0);if(Xh(),ue=n,Zl.current=r,Le!==null)throw Error(j(261));return Ge=null,et=0,Fe}function AA(){for(;Le!==null;)Y_(Le)}function SA(){for(;Le!==null&&!YT();)Y_(Le)}function Y_(t){var e=Z_(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?X_(t):Le=e,df.current=null}function X_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vA(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,Le=null;return}}else if(n=yA(n,e,Vt),n!==null){Le=n;return}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);Fe===0&&(Fe=5)}function Zr(t,e,n){var r=fe,i=Gt.transition;try{Gt.transition=null,fe=1,xA(t,e,n,r)}finally{Gt.transition=i,fe=r}return null}function xA(t,e,n,r){do ns();while(pr!==null);if(ue&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(oI(t,s),t===Ge&&(Le=Ge=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ol||(ol=!0,e0(Ml,function(){return ns(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gt.transition,Gt.transition=null;var o=fe;fe=1;var l=ue;ue|=4,df.current=null,wA(t,n),q_(n,t),HI(Dd),Fl=!!bd,Dd=bd=null,t.current=n,EA(n),XT(),ue=l,fe=o,Gt.transition=s}else t.current=n;if(ol&&(ol=!1,pr=t,tu=i),s=t.pendingLanes,s===0&&(Er=null),eI(n.stateNode),Pt(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(eu)throw eu=!1,t=Zd,Zd=null,t;return tu&1&&t.tag!==0&&ns(),s=t.pendingLanes,s&1?t===eh?To++:(To=0,eh=t):To=0,Vr(),null}function ns(){if(pr!==null){var t=Nv(tu),e=Gt.transition,n=fe;try{if(Gt.transition=null,fe=16>t?16:t,pr===null)var r=!1;else{if(t=pr,pr=null,tu=0,ue&6)throw Error(j(331));var i=ue;for(ue|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(q=d;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:wo(8,f,s)}var m=f.child;if(m!==null)m.return=f,q=m;else for(;q!==null;){f=q;var _=f.sibling,x=f.return;if(z_(f),f===d){q=null;break}if(_!==null){_.return=x,q=_;break}q=x}}}var b=s.alternate;if(b!==null){var D=b.child;if(D!==null){b.child=null;do{var R=D.sibling;D.sibling=null,D=R}while(D!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wo(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,q=S;break e}q=s.return}}var E=t.current;for(q=E;q!==null;){o=q;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,q=g;else e:for(o=E;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Nu(9,l)}}catch(U){ke(l,l.return,U)}if(l===o){q=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,q=L;break e}q=l.return}}if(ue=i,Vr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(Iu,t)}catch{}r=!0}return r}finally{fe=n,Gt.transition=e}}return!1}function hg(t,e,n){e=hs(n,e),e=N_(t,e,1),t=wr(t,e,1),e=_t(),t!==null&&(sa(t,1,e),Pt(t,e))}function ke(t,e,n){if(t.tag===3)hg(t,t,n);else for(;e!==null;){if(e.tag===3){hg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Er===null||!Er.has(r))){t=hs(n,t),t=b_(e,t,1),e=wr(e,t,1),t=_t(),e!==null&&(sa(e,1,t),Pt(e,t));break}}e=e.return}}function CA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=_t(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(et&n)===n&&(Fe===4||Fe===3&&(et&130023424)===et&&500>De()-ff?oi(t,0):hf|=n),Pt(t,e)}function J_(t,e){e===0&&(t.mode&1?(e=Ya,Ya<<=1,!(Ya&130023424)&&(Ya=4194304)):e=1);var n=_t();t=Wn(t,e),t!==null&&(sa(t,e,n),Pt(t,n))}function RA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),J_(t,n)}function PA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),J_(t,n)}var Z_;Z_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ct.current)xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xt=!1,gA(t,e,n);xt=!!(t.flags&131072)}else xt=!1,Ae&&e.flags&1048576&&r_(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;El(t,e),t=e.pendingProps;var i=ls(e,pt.current);ts(e,n),i=of(null,e,r,t,i,n);var s=af();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rt(r)?(s=!0,Wl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ef(e),i.updater=ku,e.stateNode=i,i._reactInternals=e,zd(e,r,t,n),e=qd(null,e,r,!0,s,n)):(e.tag=0,Ae&&s&&Kh(e),vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(El(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=NA(r),t=rn(r,t),i){case 0:e=Wd(null,e,r,t,n);break e;case 1:e=ng(null,e,r,t,n);break e;case 11:e=eg(null,e,r,t,n);break e;case 14:e=tg(null,e,r,rn(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Wd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),ng(t,e,r,i,n);case 3:e:{if(O_(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,u_(t,e),Ql(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=hs(Error(j(423)),e),e=rg(t,e,r,n,i);break e}else if(r!==i){i=hs(Error(j(424)),e),e=rg(t,e,r,n,i);break e}else for(Lt=_r(e.stateNode.containerInfo.firstChild),Mt=e,Ae=!0,on=null,n=a_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(us(),r===i){e=qn(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return c_(e),t===null&&Fd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vd(r,i)?o=null:s!==null&&Vd(r,s)&&(e.flags|=32),L_(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&Fd(e),null;case 13:return M_(t,e,n);case 4:return tf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=cs(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),eg(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(Kl,r._currentValue),r._currentValue=o,s!==null)if(un(s.value,o)){if(s.children===i.children&&!Ct.current){e=qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Fn(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ud(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ud(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ts(e,n),i=Yt(i),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,i=rn(r,e.pendingProps),i=rn(r.type,i),tg(t,e,r,i,n);case 15:return D_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),El(t,e),e.tag=1,Rt(r)?(t=!0,Wl(e)):t=!1,ts(e,n),k_(e,r,i),zd(e,r,i,n),qd(null,e,r,!0,t,n);case 19:return j_(t,e,n);case 22:return V_(t,e,n)}throw Error(j(156,e.tag))};function e0(t,e){return Cv(t,e)}function kA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(t,e,n,r){return new kA(t,e,n,r)}function yf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function NA(t){if(typeof t=="function")return yf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lh)return 11;if(t===Oh)return 14}return 2}function Ir(t,e){var n=t.alternate;return n===null?(n=Kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Al(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")yf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fi:return ai(n.children,i,s,e);case Vh:o=8,i|=8;break;case hd:return t=Kt(12,n,e,i|2),t.elementType=hd,t.lanes=s,t;case fd:return t=Kt(13,n,e,i),t.elementType=fd,t.lanes=s,t;case pd:return t=Kt(19,n,e,i),t.elementType=pd,t.lanes=s,t;case cv:return Du(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lv:o=10;break e;case uv:o=9;break e;case Lh:o=11;break e;case Oh:o=14;break e;case sr:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ai(t,e,n,r){return t=Kt(7,t,r,e),t.lanes=n,t}function Du(t,e,n,r){return t=Kt(22,t,r,e),t.elementType=cv,t.lanes=n,t.stateNode={isHidden:!1},t}function $c(t,e,n){return t=Kt(6,t,null,e),t.lanes=n,t}function Wc(t,e,n){return e=Kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ac(0),this.expirationTimes=Ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vf(t,e,n,r,i,s,o,l,u){return t=new bA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ef(s),t}function DA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ji,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function t0(t){if(!t)return Rr;t=t._reactInternals;e:{if(Ti(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Rt(n))return t_(t,n,e)}return e}function n0(t,e,n,r,i,s,o,l,u){return t=vf(n,r,!0,t,i,s,o,l,u),t.context=t0(null),n=t.current,r=_t(),i=Tr(n),s=Fn(r,i),s.callback=e??null,wr(n,s,i),t.current.lanes=i,sa(t,i,r),Pt(t,r),t}function Vu(t,e,n,r){var i=e.current,s=_t(),o=Tr(i);return n=t0(n),e.context===null?e.context=n:e.pendingContext=n,e=Fn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=wr(i,e,o),t!==null&&(ln(t,i,o,s),vl(t,i,o)),o}function ru(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _f(t,e){fg(t,e),(t=t.alternate)&&fg(t,e)}function VA(){return null}var r0=typeof reportError=="function"?reportError:function(t){console.error(t)};function wf(t){this._internalRoot=t}Lu.prototype.render=wf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Vu(t,e,null,null)};Lu.prototype.unmount=wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fi(function(){Vu(null,t,null,null)}),e[$n]=null}};function Lu(t){this._internalRoot=t}Lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&Ov(t)}};function Ef(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pg(){}function LA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=ru(o);s.call(d)}}var o=n0(e,r,t,0,null,!1,!1,"",pg);return t._reactRootContainer=o,t[$n]=o.current,Mo(t.nodeType===8?t.parentNode:t),fi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=ru(u);l.call(d)}}var u=vf(t,0,!1,null,null,!1,!1,"",pg);return t._reactRootContainer=u,t[$n]=u.current,Mo(t.nodeType===8?t.parentNode:t),fi(function(){Vu(e,u,n,r)}),u}function Mu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ru(o);l.call(u)}}Vu(e,o,t,i)}else o=LA(n,e,t,i,r);return ru(o)}bv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=so(e.pendingLanes);n!==0&&(Fh(e,n|1),Pt(e,De()),!(ue&6)&&(fs=De()+500,Vr()))}break;case 13:fi(function(){var r=Wn(t,1);if(r!==null){var i=_t();ln(r,t,1,i)}}),_f(t,1)}};Uh=function(t){if(t.tag===13){var e=Wn(t,134217728);if(e!==null){var n=_t();ln(e,t,134217728,n)}_f(t,134217728)}};Dv=function(t){if(t.tag===13){var e=Tr(t),n=Wn(t,e);if(n!==null){var r=_t();ln(n,t,e,r)}_f(t,e)}};Vv=function(){return fe};Lv=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Ad=function(t,e,n){switch(e){case"input":if(yd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Cu(r);if(!i)throw Error(j(90));hv(r),yd(r,i)}}}break;case"textarea":pv(t,n);break;case"select":e=n.value,e!=null&&Xi(t,!!n.multiple,e,!1)}};Ev=pf;Tv=fi;var OA={usingClientEntryPoint:!1,Events:[aa,$i,Cu,_v,wv,pf]},eo={findFiberByHostInstance:ti,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},MA={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sv(t),t===null?null:t.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||VA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{Iu=al.inject(MA),_n=al}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OA;Ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ef(e))throw Error(j(200));return DA(t,e,null,n)};Ut.createRoot=function(t,e){if(!Ef(t))throw Error(j(299));var n=!1,r="",i=r0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vf(t,1,!1,null,null,n,!1,r,i),t[$n]=e.current,Mo(t.nodeType===8?t.parentNode:t),new wf(e)};Ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=Sv(e),t=t===null?null:t.stateNode,t};Ut.flushSync=function(t){return fi(t)};Ut.hydrate=function(t,e,n){if(!Ou(e))throw Error(j(200));return Mu(null,t,e,!0,n)};Ut.hydrateRoot=function(t,e,n){if(!Ef(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=r0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=n0(e,null,t,1,n??null,i,!1,s,o),t[$n]=e.current,Mo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Lu(e)};Ut.render=function(t,e,n){if(!Ou(e))throw Error(j(200));return Mu(null,t,e,!1,n)};Ut.unmountComponentAtNode=function(t){if(!Ou(t))throw Error(j(40));return t._reactRootContainer?(fi(function(){Mu(null,null,t,!1,function(){t._reactRootContainer=null,t[$n]=null})}),!0):!1};Ut.unstable_batchedUpdates=pf;Ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ou(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Mu(t,e,n,!1,r)};Ut.version="18.3.1-next-f1338f8080-20240426";function i0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i0)}catch(t){console.error(t)}}i0(),iv.exports=Ut;var jA=iv.exports,mg=jA;cd.createRoot=mg.createRoot,cd.hydrateRoot=mg.hydrateRoot;var FA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const UA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),BA=(t,e)=>{const n=ne.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:l,...u},d)=>ne.createElement("svg",{ref:d,...FA,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${UA(t)}`,...u},[...e.map(([f,m])=>ne.createElement(f,m)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${t}`,n};var Rn=BA;const gg=Rn("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),zA=Rn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),yg=Rn("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),$A=Rn("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]),WA=Rn("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),qA=Rn("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),vg=Rn("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),qc=Rn("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]),HA=Rn("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]),Hc=Rn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var _g={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},KA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},o0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let _=(l&15)<<2|d>>6,x=d&63;u||(x=64,o||(_=64)),r.push(n[f],n[m],n[_],n[x])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):KA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||m==null)throw new GA;const _=s<<2|l>>4;if(r.push(_),d!==64){const x=l<<4&240|d>>2;if(r.push(x),m!==64){const b=d<<6&192|m;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class GA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const QA=function(t){const e=s0(t);return o0.encodeByteArray(e,!0)},iu=function(t){return QA(t).replace(/\./g,"")},a0=function(t){try{return o0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function YA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const XA=()=>YA().__FIREBASE_DEFAULTS__,JA=()=>{if(typeof process>"u"||typeof _g>"u")return;const t=_g.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ZA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&a0(t[1]);return e&&JSON.parse(e)},ju=()=>{try{return XA()||JA()||ZA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},l0=t=>{var e,n;return(n=(e=ju())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},eS=t=>{const e=l0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},u0=()=>{var t;return(t=ju())===null||t===void 0?void 0:t.config},c0=t=>{var e;return(e=ju())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function nS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[iu(JSON.stringify(n)),iu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function iS(){var t;const e=(t=ju())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function d0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function oS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aS(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lS(){return!iS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function h0(){try{return typeof indexedDB=="object"}catch{return!1}}function f0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function uS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS="FirebaseError";class fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cS,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ii.prototype.create)}}class Ii{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?dS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new fn(i,l,r)}}function dS(t,e){return t.replace(hS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const hS=/\{\$([^}]+)}/g;function fS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ho(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(wg(s)&&wg(o)){if(!Ho(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function wg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ao(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function lo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function pS(t,e){const n=new mS(t,e);return n.subscribe.bind(n)}class mS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Kc),i.error===void 0&&(i.error=Kc),i.complete===void 0&&(i.complete=Kc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kc(){}/**
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
 */const yS=1e3,vS=2,_S=4*60*60*1e3,wS=.5;function Eg(t,e=yS,n=vS){const r=e*Math.pow(n,t),i=Math.round(wS*r*(Math.random()-.5)*2);return Math.min(_S,r+i)}/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ei="[DEFAULT]";/**
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
 */class ES{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IS(e))try{this.getOrInitializeService({instanceIdentifier:ei})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ei){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ei){return this.instances.has(e)}getOptions(e=ei){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:TS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ei){return this.component?this.component.multipleInstances?e:ei:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TS(t){return t===ei?void 0:t}function IS(t){return t.instantiationMode==="EAGER"}/**
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
 */class AS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ES(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const SS={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},xS=ae.INFO,CS={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},RS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=CS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fu{constructor(e){this.name=e,this._logLevel=xS,this._logHandler=RS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const PS=(t,e)=>e.some(n=>t instanceof n);let Tg,Ig;function kS(){return Tg||(Tg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NS(){return Ig||(Ig=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const p0=new WeakMap,rh=new WeakMap,m0=new WeakMap,Gc=new WeakMap,Tf=new WeakMap;function bS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ar(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&p0.set(n,t)}).catch(()=>{}),Tf.set(e,t),e}function DS(t){if(rh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});rh.set(t,e)}let ih={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||m0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function VS(t){ih=t(ih)}function LS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qc(this),e,...n);return m0.set(r,e.sort?e.sort():[e]),Ar(r)}:NS().includes(t)?function(...e){return t.apply(Qc(this),e),Ar(p0.get(this))}:function(...e){return Ar(t.apply(Qc(this),e))}}function OS(t){return typeof t=="function"?LS(t):(t instanceof IDBTransaction&&DS(t),PS(t,kS())?new Proxy(t,ih):t)}function Ar(t){if(t instanceof IDBRequest)return bS(t);if(Gc.has(t))return Gc.get(t);const e=OS(t);return e!==t&&(Gc.set(t,e),Tf.set(e,t)),e}const Qc=t=>Tf.get(t);function g0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Ar(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ar(o.result),u.oldVersion,u.newVersion,Ar(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const MS=["get","getKey","getAll","getAllKeys","count"],jS=["put","add","delete","clear"],Yc=new Map;function Ag(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yc.get(e))return Yc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||MS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return Yc.set(e,s),s}VS(t=>({...t,get:(e,n,r)=>Ag(e,n)||t.get(e,n,r),has:(e,n)=>!!Ag(e,n)||t.has(e,n)}));/**
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
 */class FS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(US(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function US(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sh="@firebase/app",Sg="0.10.13";/**
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
 */const Hn=new Fu("@firebase/app"),BS="@firebase/app-compat",zS="@firebase/analytics-compat",$S="@firebase/analytics",WS="@firebase/app-check-compat",qS="@firebase/app-check",HS="@firebase/auth",KS="@firebase/auth-compat",GS="@firebase/database",QS="@firebase/data-connect",YS="@firebase/database-compat",XS="@firebase/functions",JS="@firebase/functions-compat",ZS="@firebase/installations",ex="@firebase/installations-compat",tx="@firebase/messaging",nx="@firebase/messaging-compat",rx="@firebase/performance",ix="@firebase/performance-compat",sx="@firebase/remote-config",ox="@firebase/remote-config-compat",ax="@firebase/storage",lx="@firebase/storage-compat",ux="@firebase/firestore",cx="@firebase/vertexai-preview",dx="@firebase/firestore-compat",hx="firebase",fx="10.14.1";/**
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
 */const oh="[DEFAULT]",px={[sh]:"fire-core",[BS]:"fire-core-compat",[$S]:"fire-analytics",[zS]:"fire-analytics-compat",[qS]:"fire-app-check",[WS]:"fire-app-check-compat",[HS]:"fire-auth",[KS]:"fire-auth-compat",[GS]:"fire-rtdb",[QS]:"fire-data-connect",[YS]:"fire-rtdb-compat",[XS]:"fire-fn",[JS]:"fire-fn-compat",[ZS]:"fire-iid",[ex]:"fire-iid-compat",[tx]:"fire-fcm",[nx]:"fire-fcm-compat",[rx]:"fire-perf",[ix]:"fire-perf-compat",[sx]:"fire-rc",[ox]:"fire-rc-compat",[ax]:"fire-gcs",[lx]:"fire-gcs-compat",[ux]:"fire-fst",[dx]:"fire-fst-compat",[cx]:"fire-vertex","fire-js":"fire-js",[hx]:"fire-js-all"};/**
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
 */const su=new Map,mx=new Map,ah=new Map;function xg(t,e){try{t.container.addComponent(e)}catch(n){Hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xn(t){const e=t.name;if(ah.has(e))return Hn.debug(`There were multiple attempts to register component ${e}.`),!1;ah.set(e,t);for(const n of su.values())xg(n,t);for(const n of mx.values())xg(n,t);return!0}function Ai(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function vn(t){return t.settings!==void 0}/**
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
 */const gx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sr=new Ii("app","Firebase",gx);/**
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
 */class yx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
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
 */const As=fx;function y0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:oh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Sr.create("bad-app-name",{appName:String(i)});if(n||(n=u0()),!n)throw Sr.create("no-options");const s=su.get(i);if(s){if(Ho(n,s.options)&&Ho(r,s.config))return s;throw Sr.create("duplicate-app",{appName:i})}const o=new AS(i);for(const u of ah.values())o.addComponent(u);const l=new yx(n,r,o);return su.set(i,l),l}function If(t=oh){const e=su.get(t);if(!e&&t===oh&&u0())return y0();if(!e)throw Sr.create("no-app",{appName:t});return e}function Qt(t,e,n){var r;let i=(r=px[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hn.warn(l.join(" "));return}xn(new cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const vx="firebase-heartbeat-database",_x=1,Ko="firebase-heartbeat-store";let Xc=null;function v0(){return Xc||(Xc=g0(vx,_x,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ko)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),Xc}async function wx(t){try{const n=(await v0()).transaction(Ko),r=await n.objectStore(Ko).get(_0(t));return await n.done,r}catch(e){if(e instanceof fn)Hn.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hn.warn(n.message)}}}async function Cg(t,e){try{const r=(await v0()).transaction(Ko,"readwrite");await r.objectStore(Ko).put(e,_0(t)),await r.done}catch(n){if(n instanceof fn)Hn.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hn.warn(r.message)}}}function _0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ex=1024,Tx=30*24*60*60*1e3;class Ix{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Rg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Tx}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Hn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rg(),{heartbeatsToSend:r,unsentEntries:i}=Ax(this._heartbeatsCache.heartbeats),s=iu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Hn.warn(n),""}}}function Rg(){return new Date().toISOString().substring(0,10)}function Ax(t,e=Ex){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Pg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return h0()?f0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Pg(t){return iu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function xx(t){xn(new cn("platform-logger",e=>new FS(e),"PRIVATE")),xn(new cn("heartbeat",e=>new Ix(e),"PRIVATE")),Qt(sh,Sg,t),Qt(sh,Sg,"esm2017"),Qt("fire-js","")}xx("");var Cx="firebase",Rx="10.14.1";/**
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
 */Qt(Cx,Rx,"app");const w0="@firebase/installations",Af="0.6.9";/**
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
 */const E0=1e4,T0=`w:${Af}`,I0="FIS_v2",Px="https://firebaseinstallations.googleapis.com/v1",kx=60*60*1e3,Nx="installations",bx="Installations";/**
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
 */const Dx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},pi=new Ii(Nx,bx,Dx);function A0(t){return t instanceof fn&&t.code.includes("request-failed")}/**
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
 */function S0({projectId:t}){return`${Px}/projects/${t}/installations`}function x0(t){return{token:t.token,requestStatus:2,expiresIn:Lx(t.expiresIn),creationTime:Date.now()}}async function C0(t,e){const r=(await e.json()).error;return pi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function R0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Vx(t,{refreshToken:e}){const n=R0(t);return n.append("Authorization",Ox(e)),n}async function P0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Lx(t){return Number(t.replace("s","000"))}function Ox(t){return`${I0} ${t}`}/**
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
 */async function Mx({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=S0(t),i=R0(t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={fid:n,authVersion:I0,appId:t.appId,sdkVersion:T0},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await P0(()=>fetch(r,l));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:x0(d.authToken)}}else throw await C0("Create Installation",u)}/**
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
 */function k0(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function jx(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Fx=/^[cdef][\w-]{21}$/,lh="";function Ux(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Bx(t);return Fx.test(n)?n:lh}catch{return lh}}function Bx(t){return jx(t).substr(0,22)}/**
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
 */function Uu(t){return`${t.appName}!${t.appId}`}/**
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
 */const N0=new Map;function b0(t,e){const n=Uu(t);D0(n,e),zx(n,e)}function D0(t,e){const n=N0.get(t);if(n)for(const r of n)r(e)}function zx(t,e){const n=$x();n&&n.postMessage({key:t,fid:e}),Wx()}let ii=null;function $x(){return!ii&&"BroadcastChannel"in self&&(ii=new BroadcastChannel("[Firebase] FID Change"),ii.onmessage=t=>{D0(t.data.key,t.data.fid)}),ii}function Wx(){N0.size===0&&ii&&(ii.close(),ii=null)}/**
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
 */const qx="firebase-installations-database",Hx=1,mi="firebase-installations-store";let Jc=null;function Sf(){return Jc||(Jc=g0(qx,Hx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(mi)}}})),Jc}async function ou(t,e){const n=Uu(t),i=(await Sf()).transaction(mi,"readwrite"),s=i.objectStore(mi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&b0(t,e.fid),e}async function V0(t){const e=Uu(t),r=(await Sf()).transaction(mi,"readwrite");await r.objectStore(mi).delete(e),await r.done}async function Bu(t,e){const n=Uu(t),i=(await Sf()).transaction(mi,"readwrite"),s=i.objectStore(mi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&b0(t,l.fid),l}/**
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
 */async function xf(t){let e;const n=await Bu(t.appConfig,r=>{const i=Kx(r),s=Gx(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===lh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Kx(t){const e=t||{fid:Ux(),registrationStatus:0};return L0(e)}function Gx(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(pi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Qx(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Yx(t)}:{installationEntry:e}}async function Qx(t,e){try{const n=await Mx(t,e);return ou(t.appConfig,n)}catch(n){throw A0(n)&&n.customData.serverCode===409?await V0(t.appConfig):await ou(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Yx(t){let e=await kg(t.appConfig);for(;e.registrationStatus===1;)await k0(100),e=await kg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await xf(t);return r||n}return e}function kg(t){return Bu(t,e=>{if(!e)throw pi.create("installation-not-found");return L0(e)})}function L0(t){return Xx(t)?{fid:t.fid,registrationStatus:0}:t}function Xx(t){return t.registrationStatus===1&&t.registrationTime+E0<Date.now()}/**
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
 */async function Jx({appConfig:t,heartbeatServiceProvider:e},n){const r=Zx(t,n),i=Vx(t,n),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={installation:{sdkVersion:T0,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await P0(()=>fetch(r,l));if(u.ok){const d=await u.json();return x0(d)}else throw await C0("Generate Auth Token",u)}function Zx(t,{fid:e}){return`${S0(t)}/${e}/authTokens:generate`}/**
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
 */async function Cf(t,e=!1){let n;const r=await Bu(t.appConfig,s=>{if(!O0(s))throw pi.create("not-registered");const o=s.authToken;if(!e&&n1(o))return s;if(o.requestStatus===1)return n=e1(t,e),s;{if(!navigator.onLine)throw pi.create("app-offline");const l=i1(s);return n=t1(t,l),l}});return n?await n:r.authToken}async function e1(t,e){let n=await Ng(t.appConfig);for(;n.authToken.requestStatus===1;)await k0(100),n=await Ng(t.appConfig);const r=n.authToken;return r.requestStatus===0?Cf(t,e):r}function Ng(t){return Bu(t,e=>{if(!O0(e))throw pi.create("not-registered");const n=e.authToken;return s1(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function t1(t,e){try{const n=await Jx(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ou(t.appConfig,r),n}catch(n){if(A0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await V0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ou(t.appConfig,r)}throw n}}function O0(t){return t!==void 0&&t.registrationStatus===2}function n1(t){return t.requestStatus===2&&!r1(t)}function r1(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+kx}function i1(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function s1(t){return t.requestStatus===1&&t.requestTime+E0<Date.now()}/**
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
 */async function o1(t){const e=t,{installationEntry:n,registrationPromise:r}=await xf(e);return r?r.catch(console.error):Cf(e).catch(console.error),n.fid}/**
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
 */async function a1(t,e=!1){const n=t;return await l1(n),(await Cf(n,e)).token}async function l1(t){const{registrationPromise:e}=await xf(t);e&&await e}/**
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
 */function u1(t){if(!t||!t.options)throw Zc("App Configuration");if(!t.name)throw Zc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Zc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Zc(t){return pi.create("missing-app-config-values",{valueName:t})}/**
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
 */const M0="installations",c1="installations-internal",d1=t=>{const e=t.getProvider("app").getImmediate(),n=u1(e),r=Ai(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},h1=t=>{const e=t.getProvider("app").getImmediate(),n=Ai(e,M0).getImmediate();return{getId:()=>o1(n),getToken:i=>a1(n,i)}};function f1(){xn(new cn(M0,d1,"PUBLIC")),xn(new cn(c1,h1,"PRIVATE"))}f1();Qt(w0,Af);Qt(w0,Af,"esm2017");/**
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
 */const au="analytics",p1="firebase_id",m1="origin",g1=60*1e3,y1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Rf="https://www.googletagmanager.com/gtag/js";/**
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
 */const kt=new Fu("@firebase/analytics");/**
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
 */const v1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},jt=new Ii("analytics","Analytics",v1);/**
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
 */function _1(t){if(!t.startsWith(Rf)){const e=jt.create("invalid-gtag-resource",{gtagURL:t});return kt.warn(e.message),""}return t}function j0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function w1(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function E1(t,e){const n=w1("firebase-js-sdk-policy",{createScriptURL:_1}),r=document.createElement("script"),i=`${Rf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function T1(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function I1(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await j0(n)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(l){kt.error(l)}t("config",i,s)}async function A1(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await j0(n);for(const u of o){const d=l.find(m=>m.measurementId===u),f=d&&e[d.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){kt.error(s)}}function S1(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await A1(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await I1(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,d]=o;t("get",l,u,d)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){kt.error(l)}}return i}function x1(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=S1(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function C1(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Rf)&&n.src.includes(t))return n;return null}/**
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
 */const R1=30,P1=1e3;class k1{constructor(e={},n=P1){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const F0=new k1;function N1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function b1(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:N1(r)},s=y1.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw jt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function D1(t,e=F0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw jt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw jt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new O1;return setTimeout(async()=>{l.abort()},g1),U0({appId:r,apiKey:i,measurementId:s},o,l,e)}async function U0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=F0){var s;const{appId:o,measurementId:l}=t;try{await V1(r,e)}catch(u){if(l)return kt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await b1(t);return i.deleteThrottleMetadata(o),u}catch(u){const d=u;if(!L1(d)){if(i.deleteThrottleMetadata(o),l)return kt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:l};throw u}const f=Number((s=d==null?void 0:d.customData)===null||s===void 0?void 0:s.httpStatus)===503?Eg(n,i.intervalMillis,R1):Eg(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,m),kt.debug(`Calling attemptFetch again in ${f} millis`),U0(t,m,r,i)}}function V1(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(jt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function L1(t){if(!(t instanceof fn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class O1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function M1(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function j1(){if(h0())try{await f0()}catch(t){return kt.warn(jt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return kt.warn(jt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function F1(t,e,n,r,i,s,o){var l;const u=D1(t);u.then(x=>{n[x.measurementId]=x.appId,t.options.measurementId&&x.measurementId!==t.options.measurementId&&kt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${x.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(x=>kt.error(x)),e.push(u);const d=j1().then(x=>{if(x)return r.getId()}),[f,m]=await Promise.all([u,d]);C1(s)||E1(s,f.measurementId),i("js",new Date);const _=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return _[m1]="firebase",_.update=!0,m!=null&&(_[p1]=m),i("config",f.measurementId,_),f.measurementId}/**
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
 */class U1{constructor(e){this.app=e}_delete(){return delete Io[this.app.options.appId],Promise.resolve()}}let Io={},bg=[];const Dg={};let ed="dataLayer",B1="gtag",Vg,B0,Lg=!1;function z1(){const t=[];if(d0()&&t.push("This is a browser extension environment."),uS()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=jt.create("invalid-analytics-context",{errorInfo:e});kt.warn(n.message)}}function $1(t,e,n){z1();const r=t.options.appId;if(!r)throw jt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)kt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw jt.create("no-api-key");if(Io[r]!=null)throw jt.create("already-exists",{id:r});if(!Lg){T1(ed);const{wrappedGtag:s,gtagCore:o}=x1(Io,bg,Dg,ed,B1);B0=s,Vg=o,Lg=!0}return Io[r]=F1(t,bg,Dg,e,Vg,ed,n),new U1(t)}function W1(t=If()){t=Me(t);const e=Ai(t,au);return e.isInitialized()?e.getImmediate():q1(t)}function q1(t,e={}){const n=Ai(t,au);if(n.isInitialized()){const i=n.getImmediate();if(Ho(e,n.getOptions()))return i;throw jt.create("already-initialized")}return n.initialize({options:e})}function H1(t,e,n,r){t=Me(t),M1(B0,Io[t.app.options.appId],e,n,r).catch(i=>kt.error(i))}const Og="@firebase/analytics",Mg="0.10.8";function K1(){xn(new cn(au,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return $1(r,i,n)},"PUBLIC")),xn(new cn("analytics-internal",t,"PRIVATE")),Qt(Og,Mg),Qt(Og,Mg,"esm2017");function t(e){try{const n=e.getProvider(au).getImmediate();return{logEvent:(r,i,s)=>H1(n,r,i,s)}}catch(n){throw jt.create("interop-component-reg-failed",{reason:n})}}}K1();function Pf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function z0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const G1=z0,$0=new Ii("auth","Firebase",z0());/**
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
 */const lu=new Fu("@firebase/auth");function Q1(t,...e){lu.logLevel<=ae.WARN&&lu.warn(`Auth (${As}): ${t}`,...e)}function Sl(t,...e){lu.logLevel<=ae.ERROR&&lu.error(`Auth (${As}): ${t}`,...e)}/**
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
 */function dn(t,...e){throw kf(t,...e)}function En(t,...e){return kf(t,...e)}function W0(t,e,n){const r=Object.assign(Object.assign({},G1()),{[e]:n});return new Ii("auth","Firebase",r).create(e,{appName:t.name})}function Un(t){return W0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $0.create(t,...e)}function Q(t,e,...n){if(!t)throw kf(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Sl(e),new Error(e)}function Kn(t,e){t||On(e)}/**
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
 */function uh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Y1(){return jg()==="http:"||jg()==="https:"}function jg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function X1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Y1()||d0()||"connection"in navigator)?navigator.onLine:!0}function J1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ca{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=rS()||oS()}get(){return X1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nf(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class q0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Z1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const eC=new ca(3e4,6e4);function Jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zn(t,e,n,r,i={}){return H0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ua(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return sS()||(d.referrerPolicy="no-referrer"),q0.fetch()(K0(t,t.config.apiHost,n,l),d)})}async function H0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Z1),e);try{const i=new nC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ll(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ll(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ll(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ll(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw W0(t,f,d);dn(t,f)}}catch(i){if(i instanceof fn)throw i;dn(t,"network-request-failed",{message:String(i)})}}async function da(t,e,n,r,i={}){const s=await Zn(t,e,n,r,i);return"mfaPendingCredential"in s&&dn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function K0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Nf(t.config,i):`${t.config.apiScheme}://${i}`}function tC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(En(this.auth,"network-request-failed")),eC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ll(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=En(t,e,r);return i.customData._tokenResponse=n,i}function Fg(t){return t!==void 0&&t.enterprise!==void 0}class rC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return tC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function iC(t,e){return Zn(t,"GET","/v2/recaptchaConfig",Jn(t,e))}/**
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
 */async function sC(t,e){return Zn(t,"POST","/v1/accounts:delete",e)}async function G0(t,e){return Zn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ao(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oC(t,e=!1){const n=Me(t),r=await n.getIdToken(e),i=bf(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ao(td(i.auth_time)),issuedAtTime:Ao(td(i.iat)),expirationTime:Ao(td(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function td(t){return Number(t)*1e3}function bf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Sl("JWT malformed, contained fewer than 3 sections"),null;try{const i=a0(n);return i?JSON.parse(i):(Sl("Failed to decode base64 JWT payload"),null)}catch(i){return Sl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ug(t){const e=bf(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Go(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof fn&&aC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function aC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class lC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ch{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ao(this.lastLoginAt),this.creationTime=Ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Go(t,G0(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Q0(s.providerUserInfo):[],l=cC(t.providerData,o),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ch(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function uC(t){const e=Me(t);await uu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Q0(t){return t.map(e=>{var{providerId:n}=e,r=Pf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function dC(t,e){const n=await H0(t,{},async()=>{const r=ua({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=K0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",q0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hC(t,e){return Zn(t,"POST","/v2/accounts:revokeToken",Jn(t,e))}/**
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
 */class rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ug(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Ug(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await dC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new rs;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rs,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
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
 */function ir(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Pf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ch(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Go(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return oC(this,e)}reload(){return uC(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vn(this.auth.app))return Promise.reject(Un(this.auth));const e=await this.getIdToken();return await Go(this,sC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,d,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(i=n.email)!==null&&i!==void 0?i:void 0,x=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,R=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(d=n.createdAt)!==null&&d!==void 0?d:void 0,E=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:g,emailVerified:L,isAnonymous:U,providerData:F,stsTokenManager:T}=n;Q(g&&T,e,"internal-error");const v=rs.fromJSON(this.name,T);Q(typeof g=="string",e,"internal-error"),ir(m,e.name),ir(_,e.name),Q(typeof L=="boolean",e,"internal-error"),Q(typeof U=="boolean",e,"internal-error"),ir(x,e.name),ir(b,e.name),ir(D,e.name),ir(R,e.name),ir(S,e.name),ir(E,e.name);const w=new Mn({uid:g,auth:e,email:_,emailVerified:L,displayName:m,isAnonymous:U,photoURL:b,phoneNumber:x,tenantId:D,stsTokenManager:v,createdAt:S,lastLoginAt:E});return F&&Array.isArray(F)&&(w.providerData=F.map(A=>Object.assign({},A))),R&&(w._redirectEventId=R),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new rs;i.updateFromServerResponse(n);const s=new Mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Q0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new rs;l.updateFromIdToken(r);const u=new Mn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ch(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
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
 */const Bg=new Map;function jn(t){Kn(t instanceof Function,"Expected a class definition");let e=Bg.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bg.set(t,e),e)}/**
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
 */class Y0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Y0.type="NONE";const zg=Y0;/**
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
 */function xl(t,e,n){return`firebase:${t}:${e}:${n}`}class is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xl(this.userKey,i.apiKey,s),this.fullPersistenceKey=xl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new is(jn(zg),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||jn(zg);const o=xl(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const f=await d._get(o);if(f){const m=Mn._fromJSON(e,f);d!==s&&(l=m),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new is(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new is(s,e,r))}}/**
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
 */function $g(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ew(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(X0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nw(e))return"Blackberry";if(rw(e))return"Webos";if(J0(e))return"Safari";if((e.includes("chrome/")||Z0(e))&&!e.includes("edge/"))return"Chrome";if(tw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function X0(t=mt()){return/firefox\//i.test(t)}function J0(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Z0(t=mt()){return/crios\//i.test(t)}function ew(t=mt()){return/iemobile/i.test(t)}function tw(t=mt()){return/android/i.test(t)}function nw(t=mt()){return/blackberry/i.test(t)}function rw(t=mt()){return/webos/i.test(t)}function Df(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fC(t=mt()){var e;return Df(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pC(){return aS()&&document.documentMode===10}function iw(t=mt()){return Df(t)||tw(t)||rw(t)||nw(t)||/windows phone/i.test(t)||ew(t)}/**
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
 */function sw(t,e=[]){let n;switch(t){case"Browser":n=$g(mt());break;case"Worker":n=`${$g(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${As}/${r}`}/**
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
 */class mC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function gC(t,e={}){return Zn(t,"GET","/v2/passwordPolicy",Jn(t,e))}/**
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
 */const yC=6;class vC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class _C{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wg(this),this.idTokenSubscription=new Wg(this),this.beforeStateQueue=new mC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await is.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await G0(this,{idToken:e}),r=await Mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(vn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=J1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vn(this.app))return Promise.reject(Un(this));const n=e?Me(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vn(this.app)?Promise.reject(Un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vn(this.app)?Promise.reject(Un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gC(this),n=new vC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ii("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await is.create(this,[jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Q1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lr(t){return Me(t)}class Wg{constructor(e){this.auth=e,this.observer=null,this.addObserver=pS(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wC(t){zu=t}function ow(t){return zu.loadJS(t)}function EC(){return zu.recaptchaEnterpriseScript}function TC(){return zu.gapiScript}function IC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const AC="recaptcha-enterprise",SC="NO_RECAPTCHA";class xC{constructor(e){this.type=AC,this.auth=Lr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{iC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new rC(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Fg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(SC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Fg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=EC();u.length!==0&&(u+=l),ow(u).then(()=>{i(l,s,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function qg(t,e,n,r=!1){const i=new xC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function cu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await qg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await qg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function CC(t,e){const n=Ai(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ho(s,e??{}))return i;dn(i,"already-initialized")}return n.initialize({options:e})}function RC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function PC(t,e,n){const r=Lr(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=aw(e),{host:o,port:l}=kC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),NC()}function aw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kC(t){const e=aw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Hg(o)}}}function Hg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Vf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function bC(t,e){return Zn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function DC(t,e){return da(t,"POST","/v1/accounts:signInWithPassword",Jn(t,e))}async function VC(t,e){return Zn(t,"POST","/v1/accounts:sendOobCode",Jn(t,e))}async function LC(t,e){return VC(t,e)}/**
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
 */async function OC(t,e){return da(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}async function MC(t,e){return da(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}/**
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
 */class Qo extends Vf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Qo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Qo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cu(e,n,"signInWithPassword",DC);case"emailLink":return OC(e,{email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cu(e,r,"signUpPassword",bC);case"emailLink":return MC(e,{idToken:n,email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ss(t,e){return da(t,"POST","/v1/accounts:signInWithIdp",Jn(t,e))}/**
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
 */const jC="http://localhost";class gi extends Vf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Pf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new gi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ss(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ss(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ss(e,n)}buildRequest(){const e={requestUri:jC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ua(n)}return e}}/**
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
 */function FC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UC(t){const e=ao(lo(t)).link,n=e?ao(lo(e)).deep_link_id:null,r=ao(lo(t)).deep_link_id;return(r?ao(lo(r)).link:null)||r||n||e||t}class Lf{constructor(e){var n,r,i,s,o,l;const u=ao(lo(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=FC((i=u.mode)!==null&&i!==void 0?i:null);Q(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=UC(e);try{return new Lf(n)}catch{return null}}}/**
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
 */class Ss{constructor(){this.providerId=Ss.PROVIDER_ID}static credential(e,n){return Qo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Lf.parseLink(n);return Q(r,"argument-error"),Qo._fromEmailAndCode(e,r.code,r.tenantId)}}Ss.PROVIDER_ID="password";Ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class lw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ha extends lw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ur extends ha{constructor(){super("facebook.com")}static credential(e){return gi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
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
 */class cr extends ha{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gi._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.GOOGLE_SIGN_IN_METHOD="google.com";cr.PROVIDER_ID="google.com";/**
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
 */class dr extends ha{constructor(){super("github.com")}static credential(e){return gi._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
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
 */class hr extends ha{constructor(){super("twitter.com")}static credential(e,n){return gi._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
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
 */async function BC(t,e){return da(t,"POST","/v1/accounts:signUp",Jn(t,e))}/**
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
 */class yi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Mn._fromIdTokenResponse(e,r,i),o=Kg(r);return new yi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Kg(r);return new yi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Kg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class du extends fn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,du.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new du(e,n,r,i)}}function uw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?du._fromErrorAndOperation(t,s,e,r):s})}async function zC(t,e,n=!1){const r=await Go(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yi._forOperation(t,"link",r)}/**
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
 */async function $C(t,e,n=!1){const{auth:r}=t;if(vn(r.app))return Promise.reject(Un(r));const i="reauthenticate";try{const s=await Go(t,uw(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=bf(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),yi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&dn(r,"user-mismatch"),s}}/**
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
 */async function cw(t,e,n=!1){if(vn(t.app))return Promise.reject(Un(t));const r="signIn",i=await uw(t,r,e),s=await yi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function WC(t,e){return cw(Lr(t),e)}/**
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
 */async function dw(t){const e=Lr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qC(t,e,n){const r=Lr(t);await cu(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",LC)}async function HC(t,e,n){if(vn(t.app))return Promise.reject(Un(t));const r=Lr(t),o=await cu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",BC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&dw(t),u}),l=await yi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function KC(t,e,n){return vn(t.app)?Promise.reject(Un(t)):WC(Me(t),Ss.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dw(t),r})}function GC(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function QC(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function YC(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function XC(t){return Me(t).signOut()}const hu="__sak";/**
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
 */class hw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hu,"1"),this.storage.removeItem(hu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const JC=1e3,ZC=10;class fw extends hw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);pC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ZC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},JC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fw.type="LOCAL";const eR=fw;/**
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
 */class pw extends hw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pw.type="SESSION";const mw=pw;/**
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
 */function tR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $u{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $u(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(n.origin,s)),u=await tR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$u.receivers=[];/**
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
 */function Of(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class nR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const d=Of("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const _=m;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(_.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Tn(){return window}function rR(t){Tn().location.href=t}/**
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
 */function gw(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function iR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oR(){return gw()?self:null}/**
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
 */const yw="firebaseLocalStorageDb",aR=1,fu="firebaseLocalStorage",vw="fbase_key";class fa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wu(t,e){return t.transaction([fu],e?"readwrite":"readonly").objectStore(fu)}function lR(){const t=indexedDB.deleteDatabase(yw);return new fa(t).toPromise()}function dh(){const t=indexedDB.open(yw,aR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fu,{keyPath:vw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fu)?e(r):(r.close(),await lR(),e(await dh()))})})}async function Gg(t,e,n){const r=Wu(t,!0).put({[vw]:e,value:n});return new fa(r).toPromise()}async function uR(t,e){const n=Wu(t,!1).get(e),r=await new fa(n).toPromise();return r===void 0?null:r.value}function Qg(t,e){const n=Wu(t,!0).delete(e);return new fa(n).toPromise()}const cR=800,dR=3;class _w{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$u._getInstance(oR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await iR(),!this.activeServiceWorker)return;this.sender=new nR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dh();return await Gg(e,hu,"1"),await Qg(e,hu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>uR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wu(i,!1).getAll();return new fa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_w.type="LOCAL";const hR=_w;new ca(3e4,6e4);/**
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
 */function fR(t,e){return e?jn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Mf extends Vf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ss(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ss(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pR(t){return cw(t.auth,new Mf(t),t.bypassAuthState)}function mR(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),$C(n,new Mf(t),t.bypassAuthState)}async function gR(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),zC(n,new Mf(t),t.bypassAuthState)}/**
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
 */class ww{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pR;case"linkViaPopup":case"linkViaRedirect":return gR;case"reauthViaPopup":case"reauthViaRedirect":return mR;default:dn(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const yR=new ca(2e3,1e4);class Yi extends ww{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Yi.currentPopupAction&&Yi.currentPopupAction.cancel(),Yi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=Of();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yR.get())};e()}}Yi.currentPopupAction=null;/**
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
 */const vR="pendingRedirect",Cl=new Map;class _R extends ww{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Cl.get(this.auth._key());if(!e){try{const r=await wR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Cl.set(this.auth._key(),e)}return this.bypassAuthState||Cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wR(t,e){const n=IR(e),r=TR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ER(t,e){Cl.set(t._key(),e)}function TR(t){return jn(t._redirectPersistence)}function IR(t){return xl(vR,t.config.apiKey,t.name)}async function AR(t,e,n=!1){if(vn(t.app))return Promise.reject(Un(t));const r=Lr(t),i=fR(r,e),o=await new _R(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const SR=10*60*1e3;class xR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ew(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(En(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yg(e))}saveEventToCache(e){this.cachedEventUids.add(Yg(e)),this.lastProcessedEventTime=Date.now()}}function Yg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ew({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ew(t);default:return!1}}/**
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
 */async function RR(t,e={}){return Zn(t,"GET","/v1/projects",e)}/**
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
 */const PR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kR=/^https?/;async function NR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RR(t);for(const n of e)try{if(bR(n))return}catch{}dn(t,"unauthorized-domain")}function bR(t){const e=uh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kR.test(n))return!1;if(PR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const DR=new ca(3e4,6e4);function Xg(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function VR(t){return new Promise((e,n)=>{var r,i,s;function o(){Xg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xg(),n(En(t,"network-request-failed"))},timeout:DR.get()})}if(!((i=(r=Tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Tn().gapi)===null||s===void 0)&&s.load)o();else{const l=IC("iframefcb");return Tn()[l]=()=>{gapi.load?o():n(En(t,"network-request-failed"))},ow(`${TC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Rl=null,e})}let Rl=null;function LR(t){return Rl=Rl||VR(t),Rl}/**
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
 */const OR=new ca(5e3,15e3),MR="__/auth/iframe",jR="emulator/auth/iframe",FR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BR(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nf(e,jR):`https://${t.config.authDomain}/${MR}`,r={apiKey:e.apiKey,appName:t.name,v:As},i=UR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ua(r).slice(1)}`}async function zR(t){const e=await LR(t),n=Tn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:BR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=En(t,"network-request-failed"),l=Tn().setTimeout(()=>{s(o)},OR.get());function u(){Tn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const $R={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WR=500,qR=600,HR="_blank",KR="http://localhost";class Jg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GR(t,e,n,r=WR,i=qR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},$R),{width:r.toString(),height:i.toString(),top:s,left:o}),d=mt().toLowerCase();n&&(l=Z0(d)?HR:n),X0(d)&&(e=e||KR,u.scrollbars="yes");const f=Object.entries(u).reduce((_,[x,b])=>`${_}${x}=${b},`,"");if(fC(d)&&l!=="_self")return QR(e||"",l),new Jg(null);const m=window.open(e||"",l,f);Q(m,t,"popup-blocked");try{m.focus()}catch{}return new Jg(m)}function QR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const YR="__/auth/handler",XR="emulator/auth/handler",JR=encodeURIComponent("fac");async function Zg(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:As,eventId:i};if(e instanceof lw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof ha){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),d=u?`#${JR}=${encodeURIComponent(u)}`:"";return`${ZR(t)}?${ua(l).slice(1)}${d}`}function ZR({config:t}){return t.emulator?Nf(t,XR):`https://${t.authDomain}/${YR}`}/**
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
 */const nd="webStorageSupport";class eP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mw,this._completeRedirectFn=AR,this._overrideRedirectResult=ER}async _openPopup(e,n,r,i){var s;Kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Zg(e,n,r,uh(),i);return GR(e,o,Of())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Zg(e,n,r,uh(),i);return rR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zR(e),r=new xR(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nd,{type:nd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[nd];o!==void 0&&n(!!o),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iw()||J0()||Df()}}const tP=eP;var ey="@firebase/auth",ty="1.7.9";/**
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
 */class nP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iP(t){xn(new cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sw(t)},d=new _C(r,i,s,u);return RC(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xn(new cn("auth-internal",e=>{const n=Lr(e.getProvider("auth").getImmediate());return(r=>new nP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(ey,ty,rP(t)),Qt(ey,ty,"esm2017")}/**
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
 */const sP=5*60,oP=c0("authIdTokenMaxAge")||sP;let ny=null;const aP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oP)return;const i=n==null?void 0:n.token;ny!==i&&(ny=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lP(t=If()){const e=Ai(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CC(t,{popupRedirectResolver:tP,persistence:[hR,eR,mw]}),r=c0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=aP(s.toString());QC(n,o,()=>o(n.currentUser)),GC(n,l=>o(l))}}const i=l0("auth");return i&&PC(n,`http://${i}`),n}function uP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}wC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=En("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",uP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iP("Browser");var ry=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var li,Tw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function w(){}w.prototype=v.prototype,T.D=v.prototype,T.prototype=new w,T.prototype.constructor=T,T.C=function(A,C,P){for(var I=Array(arguments.length-2),It=2;It<arguments.length;It++)I[It-2]=arguments[It];return v.prototype[C].apply(A,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,v,w){w||(w=0);var A=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)A[C]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(C=0;16>C;++C)A[C]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=T.g[0],w=T.g[1],C=T.g[2];var P=T.g[3],I=v+(P^w&(C^P))+A[0]+3614090360&4294967295;v=w+(I<<7&4294967295|I>>>25),I=P+(C^v&(w^C))+A[1]+3905402710&4294967295,P=v+(I<<12&4294967295|I>>>20),I=C+(w^P&(v^w))+A[2]+606105819&4294967295,C=P+(I<<17&4294967295|I>>>15),I=w+(v^C&(P^v))+A[3]+3250441966&4294967295,w=C+(I<<22&4294967295|I>>>10),I=v+(P^w&(C^P))+A[4]+4118548399&4294967295,v=w+(I<<7&4294967295|I>>>25),I=P+(C^v&(w^C))+A[5]+1200080426&4294967295,P=v+(I<<12&4294967295|I>>>20),I=C+(w^P&(v^w))+A[6]+2821735955&4294967295,C=P+(I<<17&4294967295|I>>>15),I=w+(v^C&(P^v))+A[7]+4249261313&4294967295,w=C+(I<<22&4294967295|I>>>10),I=v+(P^w&(C^P))+A[8]+1770035416&4294967295,v=w+(I<<7&4294967295|I>>>25),I=P+(C^v&(w^C))+A[9]+2336552879&4294967295,P=v+(I<<12&4294967295|I>>>20),I=C+(w^P&(v^w))+A[10]+4294925233&4294967295,C=P+(I<<17&4294967295|I>>>15),I=w+(v^C&(P^v))+A[11]+2304563134&4294967295,w=C+(I<<22&4294967295|I>>>10),I=v+(P^w&(C^P))+A[12]+1804603682&4294967295,v=w+(I<<7&4294967295|I>>>25),I=P+(C^v&(w^C))+A[13]+4254626195&4294967295,P=v+(I<<12&4294967295|I>>>20),I=C+(w^P&(v^w))+A[14]+2792965006&4294967295,C=P+(I<<17&4294967295|I>>>15),I=w+(v^C&(P^v))+A[15]+1236535329&4294967295,w=C+(I<<22&4294967295|I>>>10),I=v+(C^P&(w^C))+A[1]+4129170786&4294967295,v=w+(I<<5&4294967295|I>>>27),I=P+(w^C&(v^w))+A[6]+3225465664&4294967295,P=v+(I<<9&4294967295|I>>>23),I=C+(v^w&(P^v))+A[11]+643717713&4294967295,C=P+(I<<14&4294967295|I>>>18),I=w+(P^v&(C^P))+A[0]+3921069994&4294967295,w=C+(I<<20&4294967295|I>>>12),I=v+(C^P&(w^C))+A[5]+3593408605&4294967295,v=w+(I<<5&4294967295|I>>>27),I=P+(w^C&(v^w))+A[10]+38016083&4294967295,P=v+(I<<9&4294967295|I>>>23),I=C+(v^w&(P^v))+A[15]+3634488961&4294967295,C=P+(I<<14&4294967295|I>>>18),I=w+(P^v&(C^P))+A[4]+3889429448&4294967295,w=C+(I<<20&4294967295|I>>>12),I=v+(C^P&(w^C))+A[9]+568446438&4294967295,v=w+(I<<5&4294967295|I>>>27),I=P+(w^C&(v^w))+A[14]+3275163606&4294967295,P=v+(I<<9&4294967295|I>>>23),I=C+(v^w&(P^v))+A[3]+4107603335&4294967295,C=P+(I<<14&4294967295|I>>>18),I=w+(P^v&(C^P))+A[8]+1163531501&4294967295,w=C+(I<<20&4294967295|I>>>12),I=v+(C^P&(w^C))+A[13]+2850285829&4294967295,v=w+(I<<5&4294967295|I>>>27),I=P+(w^C&(v^w))+A[2]+4243563512&4294967295,P=v+(I<<9&4294967295|I>>>23),I=C+(v^w&(P^v))+A[7]+1735328473&4294967295,C=P+(I<<14&4294967295|I>>>18),I=w+(P^v&(C^P))+A[12]+2368359562&4294967295,w=C+(I<<20&4294967295|I>>>12),I=v+(w^C^P)+A[5]+4294588738&4294967295,v=w+(I<<4&4294967295|I>>>28),I=P+(v^w^C)+A[8]+2272392833&4294967295,P=v+(I<<11&4294967295|I>>>21),I=C+(P^v^w)+A[11]+1839030562&4294967295,C=P+(I<<16&4294967295|I>>>16),I=w+(C^P^v)+A[14]+4259657740&4294967295,w=C+(I<<23&4294967295|I>>>9),I=v+(w^C^P)+A[1]+2763975236&4294967295,v=w+(I<<4&4294967295|I>>>28),I=P+(v^w^C)+A[4]+1272893353&4294967295,P=v+(I<<11&4294967295|I>>>21),I=C+(P^v^w)+A[7]+4139469664&4294967295,C=P+(I<<16&4294967295|I>>>16),I=w+(C^P^v)+A[10]+3200236656&4294967295,w=C+(I<<23&4294967295|I>>>9),I=v+(w^C^P)+A[13]+681279174&4294967295,v=w+(I<<4&4294967295|I>>>28),I=P+(v^w^C)+A[0]+3936430074&4294967295,P=v+(I<<11&4294967295|I>>>21),I=C+(P^v^w)+A[3]+3572445317&4294967295,C=P+(I<<16&4294967295|I>>>16),I=w+(C^P^v)+A[6]+76029189&4294967295,w=C+(I<<23&4294967295|I>>>9),I=v+(w^C^P)+A[9]+3654602809&4294967295,v=w+(I<<4&4294967295|I>>>28),I=P+(v^w^C)+A[12]+3873151461&4294967295,P=v+(I<<11&4294967295|I>>>21),I=C+(P^v^w)+A[15]+530742520&4294967295,C=P+(I<<16&4294967295|I>>>16),I=w+(C^P^v)+A[2]+3299628645&4294967295,w=C+(I<<23&4294967295|I>>>9),I=v+(C^(w|~P))+A[0]+4096336452&4294967295,v=w+(I<<6&4294967295|I>>>26),I=P+(w^(v|~C))+A[7]+1126891415&4294967295,P=v+(I<<10&4294967295|I>>>22),I=C+(v^(P|~w))+A[14]+2878612391&4294967295,C=P+(I<<15&4294967295|I>>>17),I=w+(P^(C|~v))+A[5]+4237533241&4294967295,w=C+(I<<21&4294967295|I>>>11),I=v+(C^(w|~P))+A[12]+1700485571&4294967295,v=w+(I<<6&4294967295|I>>>26),I=P+(w^(v|~C))+A[3]+2399980690&4294967295,P=v+(I<<10&4294967295|I>>>22),I=C+(v^(P|~w))+A[10]+4293915773&4294967295,C=P+(I<<15&4294967295|I>>>17),I=w+(P^(C|~v))+A[1]+2240044497&4294967295,w=C+(I<<21&4294967295|I>>>11),I=v+(C^(w|~P))+A[8]+1873313359&4294967295,v=w+(I<<6&4294967295|I>>>26),I=P+(w^(v|~C))+A[15]+4264355552&4294967295,P=v+(I<<10&4294967295|I>>>22),I=C+(v^(P|~w))+A[6]+2734768916&4294967295,C=P+(I<<15&4294967295|I>>>17),I=w+(P^(C|~v))+A[13]+1309151649&4294967295,w=C+(I<<21&4294967295|I>>>11),I=v+(C^(w|~P))+A[4]+4149444226&4294967295,v=w+(I<<6&4294967295|I>>>26),I=P+(w^(v|~C))+A[11]+3174756917&4294967295,P=v+(I<<10&4294967295|I>>>22),I=C+(v^(P|~w))+A[2]+718787259&4294967295,C=P+(I<<15&4294967295|I>>>17),I=w+(P^(C|~v))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(C+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+C&4294967295,T.g[3]=T.g[3]+P&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var w=v-this.blockSize,A=this.B,C=this.h,P=0;P<v;){if(C==0)for(;P<=w;)i(this,T,P),P+=this.blockSize;if(typeof T=="string"){for(;P<v;)if(A[C++]=T.charCodeAt(P++),C==this.blockSize){i(this,A),C=0;break}}else for(;P<v;)if(A[C++]=T[P++],C==this.blockSize){i(this,A),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var w=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=w&255,w/=256;for(this.u(T),T=Array(16),v=w=0;4>v;++v)for(var A=0;32>A;A+=8)T[w++]=this.g[v]>>>A&255;return T};function s(T,v){var w=l;return Object.prototype.hasOwnProperty.call(w,T)?w[T]:w[T]=v(T)}function o(T,v){this.h=v;for(var w=[],A=!0,C=T.length-1;0<=C;C--){var P=T[C]|0;A&&P==v||(w[C]=P,A=!1)}this.g=w}var l={};function u(T){return-128<=T&&128>T?s(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return R(d(-T));for(var v=[],w=1,A=0;T>=w;A++)v[A]=T/w|0,w*=4294967296;return new o(v,0)}function f(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return R(f(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=d(Math.pow(v,8)),A=m,C=0;C<T.length;C+=8){var P=Math.min(8,T.length-C),I=parseInt(T.substring(C,C+P),v);8>P?(P=d(Math.pow(v,P)),A=A.j(P).add(d(I))):(A=A.j(w),A=A.add(d(I)))}return A}var m=u(0),_=u(1),x=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-R(this).m();for(var T=0,v=1,w=0;w<this.g.length;w++){var A=this.i(w);T+=(0<=A?A:4294967296+A)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(b(this))return"0";if(D(this))return"-"+R(this).toString(T);for(var v=d(Math.pow(T,6)),w=this,A="";;){var C=L(w,v).g;w=S(w,C.j(v));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(T);if(w=C,b(w))return P+A;for(;6>P.length;)P="0"+P;A=P+A}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function b(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function D(T){return T.h==-1}t.l=function(T){return T=S(this,T),D(T)?-1:b(T)?0:1};function R(T){for(var v=T.g.length,w=[],A=0;A<v;A++)w[A]=~T.g[A];return new o(w,~T.h).add(_)}t.abs=function(){return D(this)?R(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),w=[],A=0,C=0;C<=v;C++){var P=A+(this.i(C)&65535)+(T.i(C)&65535),I=(P>>>16)+(this.i(C)>>>16)+(T.i(C)>>>16);A=I>>>16,P&=65535,I&=65535,w[C]=I<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function S(T,v){return T.add(R(v))}t.j=function(T){if(b(this)||b(T))return m;if(D(this))return D(T)?R(this).j(R(T)):R(R(this).j(T));if(D(T))return R(this.j(R(T)));if(0>this.l(x)&&0>T.l(x))return d(this.m()*T.m());for(var v=this.g.length+T.g.length,w=[],A=0;A<2*v;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var C=0;C<T.g.length;C++){var P=this.i(A)>>>16,I=this.i(A)&65535,It=T.i(C)>>>16,Jt=T.i(C)&65535;w[2*A+2*C]+=I*Jt,E(w,2*A+2*C),w[2*A+2*C+1]+=P*Jt,E(w,2*A+2*C+1),w[2*A+2*C+1]+=I*It,E(w,2*A+2*C+1),w[2*A+2*C+2]+=P*It,E(w,2*A+2*C+2)}for(A=0;A<v;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=v;A<2*v;A++)w[A]=0;return new o(w,0)};function E(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function g(T,v){this.g=T,this.h=v}function L(T,v){if(b(v))throw Error("division by zero");if(b(T))return new g(m,m);if(D(T))return v=L(R(T),v),new g(R(v.g),R(v.h));if(D(v))return v=L(T,R(v)),new g(R(v.g),v.h);if(30<T.g.length){if(D(T)||D(v))throw Error("slowDivide_ only works with positive integers.");for(var w=_,A=v;0>=A.l(T);)w=U(w),A=U(A);var C=F(w,1),P=F(A,1);for(A=F(A,2),w=F(w,2);!b(A);){var I=P.add(A);0>=I.l(T)&&(C=C.add(w),P=I),A=F(A,1),w=F(w,1)}return v=S(T,C.j(v)),new g(C,v)}for(C=m;0<=T.l(v);){for(w=Math.max(1,Math.floor(T.m()/v.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),P=d(w),I=P.j(v);D(I)||0<I.l(T);)w-=A,P=d(w),I=P.j(v);b(P)&&(P=_),C=C.add(P),T=S(T,I)}return new g(C,T)}t.A=function(T){return L(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)&T.i(A);return new o(w,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)|T.i(A);return new o(w,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)^T.i(A);return new o(w,this.h^T.h)};function U(T){for(var v=T.g.length+1,w=[],A=0;A<v;A++)w[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(w,T.h)}function F(T,v){var w=v>>5;v%=32;for(var A=T.g.length-w,C=[],P=0;P<A;P++)C[P]=0<v?T.i(P+w)>>>v|T.i(P+w+1)<<32-v:T.i(P+w);return new o(C,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Tw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,li=o}).apply(typeof ry<"u"?ry:typeof self<"u"?self:typeof window<"u"?window:{});var ul=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Iw,uo,Aw,Pl,hh,Sw,xw,Cw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,h){return a==Array.prototype||a==Object.prototype||(a[c]=h.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ul=="object"&&ul];for(var c=0;c<a.length;++c){var h=a[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var h=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var N=a[p];if(!(N in h))break e;h=h[N]}a=a[a.length-1],p=h[a],c=c(p),c!=p&&c!=null&&e(h,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var h=0,p=!1,N={next:function(){if(!p&&h<a.length){var V=h++;return{value:c(V,a[V]),done:!1}}return p=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function d(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,h){return a.call.apply(a.bind,arguments)}function m(a,c,h){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,p),a.apply(c,N)}}return function(){return a.apply(c,arguments)}}function _(a,c,h){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function x(a,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function b(a,c){function h(){}h.prototype=c.prototype,a.aa=c.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(p,N,V){for(var B=Array(arguments.length-2),me=2;me<arguments.length;me++)B[me-2]=arguments[me];return c.prototype[N].apply(p,B)}}function D(a){const c=a.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=a[p];return h}return[]}function R(a,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const N=a.length||0,V=p.length||0;a.length=N+V;for(let B=0;B<V;B++)a[N+B]=p[B]}else a.push(p)}}class S{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function E(a){return/^[\s\xa0]*$/.test(a)}function g(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var U=g().indexOf("Gecko")!=-1&&!(g().toLowerCase().indexOf("webkit")!=-1&&g().indexOf("Edge")==-1)&&!(g().indexOf("Trident")!=-1||g().indexOf("MSIE")!=-1)&&g().indexOf("Edge")==-1;function F(a,c,h){for(const p in a)c.call(h,a[p],p,a)}function T(a,c){for(const h in a)c.call(void 0,a[h],h,a)}function v(a){const c={};for(const h in a)c[h]=a[h];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,c){let h,p;for(let N=1;N<arguments.length;N++){p=arguments[N];for(h in p)a[h]=p[h];for(let V=0;V<w.length;V++)h=w[V],Object.prototype.hasOwnProperty.call(p,h)&&(a[h]=p[h])}}function C(a){var c=1;a=a.split(":");const h=[];for(;0<c&&a.length;)h.push(a.shift()),c--;return a.length&&h.push(a.join(":")),h}function P(a){l.setTimeout(()=>{throw a},0)}function I(){var a=G;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class It{constructor(){this.h=this.g=null}add(c,h){const p=Jt.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Jt=new S(()=>new jr,a=>a.reset());class jr{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let it,$=!1,G=new It,J=()=>{const a=l.Promise.resolve(void 0);it=()=>{a.then(ye)}};var ye=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(h){P(h)}var c=Jt;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}$=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Zt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return a}();function zt(a,c){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(U){e:{try{L(c.nodeName);var N=!0;break e}catch{}N=!1}N||(c=null)}}else h=="mouseover"?c=a.fromElement:h=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:en[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&zt.aa.h.call(this)}}b(zt,Ie);var en={2:"touch",3:"pen",4:"mouse"};zt.prototype.h=function(){zt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $t="closure_listenable_"+(1e6*Math.random()|0),sc=0;function Ta(a,c,h,p,N){this.listener=a,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=N,this.key=++sc,this.da=this.fa=!1}function Fr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ur(a){this.src=a,this.g={},this.h=0}Ur.prototype.add=function(a,c,h,p,N){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var B=Br(a,c,p,N);return-1<B?(c=a[B],h||(c.fa=!1)):(c=new Ta(c,this.src,V,!!p,N),c.fa=h,a.push(c)),c};function ks(a,c){var h=c.type;if(h in a.g){var p=a.g[h],N=Array.prototype.indexOf.call(p,c,void 0),V;(V=0<=N)&&Array.prototype.splice.call(p,N,1),V&&(Fr(c),a.g[h].length==0&&(delete a.g[h],a.h--))}}function Br(a,c,h,p){for(var N=0;N<a.length;++N){var V=a[N];if(!V.da&&V.listener==c&&V.capture==!!h&&V.ha==p)return N}return-1}var Wt="closure_lm_"+(1e6*Math.random()|0),Ci={};function Nt(a,c,h,p,N){if(Array.isArray(c)){for(var V=0;V<c.length;V++)Nt(a,c[V],h,p,N);return null}return h=bs(h),a&&a[$t]?a.K(c,h,d(p)?!!p.capture:!1,N):Ri(a,c,h,!1,p,N)}function Ri(a,c,h,p,N,V){if(!c)throw Error("Invalid event type");var B=d(N)?!!N.capture:!!N,me=ki(a);if(me||(a[Wt]=me=new Ur(a)),h=me.add(c,h,p,B,V),h.proxy)return h;if(p=oc(),h.proxy=p,p.src=a,p.listener=h,a.addEventListener)Zt||(N=B),N===void 0&&(N=!1),a.addEventListener(c.toString(),p,N);else if(a.attachEvent)a.attachEvent(Ns(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function oc(){function a(h){return c.call(a.src,a.listener,h)}const c=Pi;return a}function Ia(a,c,h,p,N){if(Array.isArray(c))for(var V=0;V<c.length;V++)Ia(a,c[V],h,p,N);else p=d(p)?!!p.capture:!!p,h=bs(h),a&&a[$t]?(a=a.i,c=String(c).toString(),c in a.g&&(V=a.g[c],h=Br(V,h,p,N),-1<h&&(Fr(V[h]),Array.prototype.splice.call(V,h,1),V.length==0&&(delete a.g[c],a.h--)))):a&&(a=ki(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Br(c,h,p,N)),(h=-1<a?c[a]:null)&&pn(h))}function pn(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[$t])ks(c.i,a);else{var h=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(h,p,a.capture):c.detachEvent?c.detachEvent(Ns(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=ki(c))?(ks(h,a),h.h==0&&(h.src=null,c[Wt]=null)):Fr(a)}}}function Ns(a){return a in Ci?Ci[a]:Ci[a]="on"+a}function Pi(a,c){if(a.da)a=!0;else{c=new zt(c,this);var h=a.listener,p=a.ha||a.src;a.fa&&pn(a),a=h.call(p,c)}return a}function ki(a){return a=a[Wt],a instanceof Ur?a:null}var Aa="__closure_events_fn_"+(1e9*Math.random()>>>0);function bs(a){return typeof a=="function"?a:(a[Aa]||(a[Aa]=function(c){return a.handleEvent(c)}),a[Aa])}function Qe(){he.call(this),this.i=new Ur(this),this.M=this,this.F=null}b(Qe,he),Qe.prototype[$t]=!0,Qe.prototype.removeEventListener=function(a,c,h,p){Ia(this,a,c,h,p)};function Be(a,c){var h,p=a.F;if(p)for(h=[];p;p=p.F)h.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new Ie(c,a);else if(c instanceof Ie)c.target=c.target||a;else{var N=c;c=new Ie(p,a),A(c,N)}if(N=!0,h)for(var V=h.length-1;0<=V;V--){var B=c.g=h[V];N=er(B,p,!0,c)&&N}if(B=c.g=a,N=er(B,p,!0,c)&&N,N=er(B,p,!1,c)&&N,h)for(V=0;V<h.length;V++)B=c.g=h[V],N=er(B,p,!1,c)&&N}Qe.prototype.N=function(){if(Qe.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var h=a.g[c],p=0;p<h.length;p++)Fr(h[p]);delete a.g[c],a.h--}}this.F=null},Qe.prototype.K=function(a,c,h,p){return this.i.add(String(a),c,!1,h,p)},Qe.prototype.L=function(a,c,h,p){return this.i.add(String(a),c,!0,h,p)};function er(a,c,h,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var N=!0,V=0;V<c.length;++V){var B=c[V];if(B&&!B.da&&B.capture==h){var me=B.listener,Ye=B.ha||B.src;B.fa&&ks(a.i,B),N=me.call(Ye,p)!==!1&&N}}return N&&!p.defaultPrevented}function Ds(a,c,h){if(typeof a=="function")h&&(a=_(a,h));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Sa(a){a.g=Ds(()=>{a.g=null,a.i&&(a.i=!1,Sa(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class gt extends he{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Sa(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zr(a){he.call(this),this.h=a,this.g={}}b(zr,he);var xa=[];function Ca(a){F(a.g,function(c,h){this.g.hasOwnProperty(h)&&pn(c)},a),a.g={}}zr.prototype.N=function(){zr.aa.N.call(this),Ca(this)},zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vs=l.JSON.stringify,Ra=l.JSON.parse,ac=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ls(){}Ls.prototype.h=null;function Os(a){return a.h||(a.h=a.i())}function Pa(){}var $r={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ms(){Ie.call(this,"d")}b(Ms,Ie);function js(){Ie.call(this,"c")}b(js,Ie);var Pn={},Wr=null;function qr(){return Wr=Wr||new Qe}Pn.La="serverreachability";function ka(a){Ie.call(this,Pn.La,a)}b(ka,Ie);function Hr(a){const c=qr();Be(c,new ka(c))}Pn.STAT_EVENT="statevent";function Na(a,c){Ie.call(this,Pn.STAT_EVENT,a),this.stat=c}b(Na,Ie);function ze(a){const c=qr();Be(c,new Na(c,a))}Pn.Ma="timingevent";function ba(a,c){Ie.call(this,Pn.Ma,a),this.size=c}b(ba,Ie);function Kr(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Gr(){this.g=!0}Gr.prototype.xa=function(){this.g=!1};function k(a,c,h,p,N,V){a.info(function(){if(a.g)if(V)for(var B="",me=V.split("&"),Ye=0;Ye<me.length;Ye++){var ce=me[Ye].split("=");if(1<ce.length){var ot=ce[0];ce=ce[1];var at=ot.split("_");B=2<=at.length&&at[1]=="type"?B+(ot+"="+ce+"&"):B+(ot+"=redacted&")}}else B=null;else B=V;return"XMLHTTP REQ ("+p+") [attempt "+N+"]: "+c+`
`+h+`
`+B})}function z(a,c,h,p,N,V,B){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+N+"]: "+c+`
`+h+`
`+V+" "+B})}function Z(a,c,h,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Y(a,h)+(p?" "+p:"")})}function se(a,c){a.info(function(){return"TIMEOUT: "+c})}Gr.prototype.info=function(){};function Y(a,c){if(!a.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var p=h[a];if(!(2>p.length)){var N=p[1];if(Array.isArray(N)&&!(1>N.length)){var V=N[0];if(V!="noop"&&V!="stop"&&V!="close")for(var B=1;B<N.length;B++)N[B]=""}}}}return Vs(h)}catch{return c}}var re={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$e={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ve;function We(){}b(We,Ls),We.prototype.g=function(){return new XMLHttpRequest},We.prototype.i=function(){return{}},ve=new We;function st(a,c,h,p){this.j=a,this.i=c,this.l=h,this.R=p||1,this.U=new zr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ip}function Ip(){this.i=null,this.g="",this.h=!1}var Ap={},lc={};function uc(a,c,h){a.L=1,a.v=Oa(kn(c)),a.m=h,a.P=!0,Sp(a,null)}function Sp(a,c){a.F=Date.now(),Da(a),a.A=kn(a.v);var h=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),Fp(h.i,"t",p),a.C=0,h=a.j.J,a.h=new Ip,a.g=rm(a.j,h?c:null,!a.m),0<a.O&&(a.M=new gt(_(a.Y,a,a.g),a.O)),c=a.U,h=a.g,p=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(xa[0]=N.toString()),N=xa);for(var V=0;V<N.length;V++){var B=Nt(h,N[V],p||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Hr(),k(a.i,a.u,a.A,a.l,a.R,a.m)}st.prototype.ca=function(a){a=a.target;const c=this.M;c&&Nn(a)==3?c.j():this.Y(a)},st.prototype.Y=function(a){try{if(a==this.g)e:{const at=Nn(this.g);var c=this.g.Ba();const Di=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||Hp(this.g)))){this.J||at!=4||c==7||(c==8||0>=Di?Hr(3):Hr(2)),cc(this);var h=this.g.Z();this.X=h;t:if(xp(this)){var p=Hp(this.g);a="";var N=p.length,V=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qr(this),Fs(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<N;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(V&&c==N-1)});p.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=h==200,z(this.i,this.u,this.A,this.l,this.R,at,h),this.o){if(this.T&&!this.K){t:{if(this.g){var me,Ye=this.g;if((me=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(me)){var ce=me;break t}}ce=null}if(h=ce)Z(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dc(this,h);else{this.o=!1,this.s=3,ze(12),Qr(this),Fs(this);break e}}if(this.P){h=!0;let tn;for(;!this.J&&this.C<B.length;)if(tn=HE(this,B),tn==lc){at==4&&(this.s=4,ze(14),h=!1),Z(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==Ap){this.s=4,ze(15),Z(this.i,this.l,B,"[Invalid Chunk]"),h=!1;break}else Z(this.i,this.l,tn,null),dc(this,tn);if(xp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||B.length!=0||this.h.h||(this.s=1,ze(16),h=!1),this.o=this.o&&h,!h)Z(this.i,this.l,B,"[Invalid Chunked Response]"),Qr(this),Fs(this);else if(0<B.length&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.ba&&!ot.M&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),yc(ot),ot.M=!0,ze(11))}}else Z(this.i,this.l,B,null),dc(this,B);at==4&&Qr(this),this.o&&!this.J&&(at==4?Zp(this.j,this):(this.o=!1,Da(this)))}else uT(this.g),h==400&&0<B.indexOf("Unknown SID")?(this.s=3,ze(12)):(this.s=0,ze(13)),Qr(this),Fs(this)}}}catch{}finally{}};function xp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function HE(a,c){var h=a.C,p=c.indexOf(`
`,h);return p==-1?lc:(h=Number(c.substring(h,p)),isNaN(h)?Ap:(p+=1,p+h>c.length?lc:(c=c.slice(p,p+h),a.C=p+h,c)))}st.prototype.cancel=function(){this.J=!0,Qr(this)};function Da(a){a.S=Date.now()+a.I,Cp(a,a.I)}function Cp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Kr(_(a.ba,a),c)}function cc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}st.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(se(this.i,this.A),this.L!=2&&(Hr(),ze(17)),Qr(this),this.s=2,Fs(this)):Cp(this,this.S-a)};function Fs(a){a.j.G==0||a.J||Zp(a.j,a)}function Qr(a){cc(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Ca(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function dc(a,c){try{var h=a.j;if(h.G!=0&&(h.g==a||hc(h.h,a))){if(!a.K&&hc(h.h,a)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var N=p;if(N[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)za(h),Ua(h);else break e;gc(h),ze(18)}}else h.za=N[1],0<h.za-h.T&&37500>N[2]&&h.F&&h.v==0&&!h.C&&(h.C=Kr(_(h.Za,h),6e3));if(1>=kp(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Xr(h,11)}else if((a.K||h.g==a)&&za(h),!E(c))for(N=h.Da.g.parse(c),c=0;c<N.length;c++){let ce=N[c];if(h.T=ce[0],ce=ce[1],h.G==2)if(ce[0]=="c"){h.K=ce[1],h.ia=ce[2];const ot=ce[3];ot!=null&&(h.la=ot,h.j.info("VER="+h.la));const at=ce[4];at!=null&&(h.Aa=at,h.j.info("SVER="+h.Aa));const Di=ce[5];Di!=null&&typeof Di=="number"&&0<Di&&(p=1.5*Di,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const tn=a.g;if(tn){const Wa=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wa){var V=p.h;V.g||Wa.indexOf("spdy")==-1&&Wa.indexOf("quic")==-1&&Wa.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(fc(V,V.h),V.h=null))}if(p.D){const vc=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;vc&&(p.ya=vc,_e(p.I,p.D,vc))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var B=a;if(p.qa=nm(p,p.J?p.ia:null,p.W),B.K){Np(p.h,B);var me=B,Ye=p.L;Ye&&(me.I=Ye),me.B&&(cc(me),Da(me)),p.g=B}else Xp(p);0<h.i.length&&Ba(h)}else ce[0]!="stop"&&ce[0]!="close"||Xr(h,7);else h.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Xr(h,7):mc(h):ce[0]!="noop"&&h.l&&h.l.ta(ce),h.v=0)}}Hr(4)}catch{}}var KE=class{constructor(a,c){this.g=a,this.map=c}};function Rp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function kp(a){return a.h?1:a.g?a.g.size:0}function hc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function fc(a,c){a.g?a.g.add(c):a.h=c}function Np(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Rp.prototype.cancel=function(){if(this.i=bp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function bp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const h of a.g.values())c=c.concat(h.D);return c}return D(a.i)}function GE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],h=a.length,p=0;p<h;p++)c.push(a[p]);return c}c=[],h=0;for(p in a)c[h++]=a[p];return c}function QE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var h=0;h<a;h++)c.push(h);return c}c=[],h=0;for(const p in a)c[h++]=p;return c}}}function Dp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var h=QE(a),p=GE(a),N=p.length,V=0;V<N;V++)c.call(void 0,p[V],h&&h[V],a)}var Vp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YE(a,c){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var p=a[h].indexOf("="),N=null;if(0<=p){var V=a[h].substring(0,p);N=a[h].substring(p+1)}else V=a[h];c(V,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Yr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Yr){this.h=a.h,Va(this,a.j),this.o=a.o,this.g=a.g,La(this,a.s),this.l=a.l;var c=a.i,h=new zs;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Lp(this,h),this.m=a.m}else a&&(c=String(a).match(Vp))?(this.h=!1,Va(this,c[1]||"",!0),this.o=Us(c[2]||""),this.g=Us(c[3]||"",!0),La(this,c[4]),this.l=Us(c[5]||"",!0),Lp(this,c[6]||"",!0),this.m=Us(c[7]||"")):(this.h=!1,this.i=new zs(null,this.h))}Yr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Bs(c,Op,!0),":");var h=this.g;return(h||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Bs(c,Op,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(Bs(h,h.charAt(0)=="/"?ZE:JE,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",Bs(h,tT)),a.join("")};function kn(a){return new Yr(a)}function Va(a,c,h){a.j=h?Us(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function La(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Lp(a,c,h){c instanceof zs?(a.i=c,nT(a.i,a.h)):(h||(c=Bs(c,eT)),a.i=new zs(c,a.h))}function _e(a,c,h){a.i.set(c,h)}function Oa(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Us(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Bs(a,c,h){return typeof a=="string"?(a=encodeURI(a).replace(c,XE),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function XE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Op=/[#\/\?@]/g,JE=/[#\?:]/g,ZE=/[#\?]/g,eT=/[#\?@]/g,tT=/#/g;function zs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function tr(a){a.g||(a.g=new Map,a.h=0,a.i&&YE(a.i,function(c,h){a.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=zs.prototype,t.add=function(a,c){tr(this),this.i=null,a=Ni(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(c),this.h+=1,this};function Mp(a,c){tr(a),c=Ni(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function jp(a,c){return tr(a),c=Ni(a,c),a.g.has(c)}t.forEach=function(a,c){tr(this),this.g.forEach(function(h,p){h.forEach(function(N){a.call(c,N,p,this)},this)},this)},t.na=function(){tr(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const N=a[p];for(let V=0;V<N.length;V++)h.push(c[p])}return h},t.V=function(a){tr(this);let c=[];if(typeof a=="string")jp(this,a)&&(c=c.concat(this.g.get(Ni(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)c=c.concat(a[h])}return c},t.set=function(a,c){return tr(this),this.i=null,a=Ni(this,a),jp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Fp(a,c,h){Mp(a,c),0<h.length&&(a.i=null,a.g.set(Ni(a,c),D(h)),a.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const V=encodeURIComponent(String(p)),B=this.V(p);for(p=0;p<B.length;p++){var N=V;B[p]!==""&&(N+="="+encodeURIComponent(String(B[p]))),a.push(N)}}return this.i=a.join("&")};function Ni(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function nT(a,c){c&&!a.j&&(tr(a),a.i=null,a.g.forEach(function(h,p){var N=p.toLowerCase();p!=N&&(Mp(this,p),Fp(this,N,h))},a)),a.j=c}function rT(a,c){const h=new Gr;if(l.Image){const p=new Image;p.onload=x(nr,h,"TestLoadImage: loaded",!0,c,p),p.onerror=x(nr,h,"TestLoadImage: error",!1,c,p),p.onabort=x(nr,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=x(nr,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function iT(a,c){const h=new Gr,p=new AbortController,N=setTimeout(()=>{p.abort(),nr(h,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(V=>{clearTimeout(N),V.ok?nr(h,"TestPingServer: ok",!0,c):nr(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),nr(h,"TestPingServer: error",!1,c)})}function nr(a,c,h,p,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),p(h)}catch{}}function sT(){this.g=new ac}function oT(a,c,h){const p=h||"";try{Dp(a,function(N,V){let B=N;d(N)&&(B=Vs(N)),c.push(p+V+"="+encodeURIComponent(B))})}catch(N){throw c.push(p+"type="+encodeURIComponent("_badmap")),N}}function Ma(a){this.l=a.Ub||null,this.j=a.eb||!1}b(Ma,Ls),Ma.prototype.g=function(){return new ja(this.l,this.j)},Ma.prototype.i=function(a){return function(){return a}}({});function ja(a,c){Qe.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(ja,Qe),t=ja.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Ws(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$s(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ws(this)),this.g&&(this.readyState=3,Ws(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Up(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Up(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?$s(this):Ws(this),this.readyState==3&&Up(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,$s(this))},t.Qa=function(a){this.g&&(this.response=a,$s(this))},t.ga=function(){this.g&&$s(this)};function $s(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ws(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=c.next();return a.join(`\r
`)};function Ws(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ja.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Bp(a){let c="";return F(a,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function pc(a,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Bp(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):_e(a,c,h))}function Pe(a){Qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Pe,Qe);var aT=/^https?$/i,lT=["POST","PUT"];t=Pe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ve.g(),this.v=this.o?Os(this.o):Os(ve),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(V){zp(this,V);return}if(a=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var N in p)h.set(N,p[N]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const V of p.keys())h.set(V,p.get(V));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(V=>V.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(lT,c,void 0))||p||N||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,B]of h)this.g.setRequestHeader(V,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qp(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){zp(this,V)}};function zp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,$p(a),Fa(a)}function $p(a){a.A||(a.A=!0,Be(a,"complete"),Be(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Be(this,"complete"),Be(this,"abort"),Fa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fa(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Wp(this):this.bb())},t.bb=function(){Wp(this)};function Wp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Nn(a)!=4||a.Z()!=2)){if(a.u&&Nn(a)==4)Ds(a.Ea,0,a);else if(Be(a,"readystatechange"),Nn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=B===0){var N=String(a.D).match(Vp)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),p=!aT.test(N?N.toLowerCase():"")}h=p}if(h)Be(a,"complete"),Be(a,"success");else{a.m=6;try{var V=2<Nn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",$p(a)}}finally{Fa(a)}}}}function Fa(a,c){if(a.g){qp(a);const h=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||Be(a,"ready");try{h.onreadystatechange=p}catch{}}}function qp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Nn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Ra(c)}};function Hp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function uT(a){const c={};a=(a.g&&2<=Nn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(E(a[p]))continue;var h=C(a[p]);const N=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const V=c[N]||[];c[N]=V,V.push(h)}T(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qs(a,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||c}function Kp(a){this.Aa=0,this.i=[],this.j=new Gr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qs("baseRetryDelayMs",5e3,a),this.cb=qs("retryDelaySeedMs",1e4,a),this.Wa=qs("forwardChannelMaxRetries",2,a),this.wa=qs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Rp(a&&a.concurrentRequestLimit),this.Da=new sT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Kp.prototype,t.la=8,t.G=1,t.connect=function(a,c,h,p){ze(0),this.W=a,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=nm(this,null,this.W),Ba(this)};function mc(a){if(Gp(a),a.G==3){var c=a.U++,h=kn(a.I);if(_e(h,"SID",a.K),_e(h,"RID",c),_e(h,"TYPE","terminate"),Hs(a,h),c=new st(a,a.j,c),c.L=2,c.v=Oa(kn(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=rm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Da(c)}tm(a)}function Ua(a){a.g&&(yc(a),a.g.cancel(),a.g=null)}function Gp(a){Ua(a),a.u&&(l.clearTimeout(a.u),a.u=null),za(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ba(a){if(!Pp(a.h)&&!a.s){a.s=!0;var c=a.Ga;it||J(),$||(it(),$=!0),G.add(c,a),a.B=0}}function cT(a,c){return kp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Kr(_(a.Ga,a,c),em(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new st(this,this.j,a);let V=this.o;if(this.S&&(V?(V=v(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(N.H=V,V=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Yp(this,N,c),h=kn(this.I),_e(h,"RID",a),_e(h,"CVER",22),this.D&&_e(h,"X-HTTP-Session-Id",this.D),Hs(this,h),V&&(this.O?c="headers="+encodeURIComponent(String(Bp(V)))+"&"+c:this.m&&pc(h,this.m,V)),fc(this.h,N),this.Ua&&_e(h,"TYPE","init"),this.P?(_e(h,"$req",c),_e(h,"SID","null"),N.T=!0,uc(N,h,null)):uc(N,h,c),this.G=2}}else this.G==3&&(a?Qp(this,a):this.i.length==0||Pp(this.h)||Qp(this))};function Qp(a,c){var h;c?h=c.l:h=a.U++;const p=kn(a.I);_e(p,"SID",a.K),_e(p,"RID",h),_e(p,"AID",a.T),Hs(a,p),a.m&&a.o&&pc(p,a.m,a.o),h=new st(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Yp(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),fc(a.h,h),uc(h,p,c)}function Hs(a,c){a.H&&F(a.H,function(h,p){_e(c,p,h)}),a.l&&Dp({},function(h,p){_e(c,p,h)})}function Yp(a,c,h){h=Math.min(a.i.length,h);var p=a.l?_(a.l.Na,a.l,a):null;e:{var N=a.i;let V=-1;for(;;){const B=["count="+h];V==-1?0<h?(V=N[0].g,B.push("ofs="+V)):V=0:B.push("ofs="+V);let me=!0;for(let Ye=0;Ye<h;Ye++){let ce=N[Ye].g;const ot=N[Ye].map;if(ce-=V,0>ce)V=Math.max(0,N[Ye].g-100),me=!1;else try{oT(ot,B,"req"+ce+"_")}catch{p&&p(ot)}}if(me){p=B.join("&");break e}}}return a=a.i.splice(0,h),c.D=a,p}function Xp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;it||J(),$||(it(),$=!0),G.add(c,a),a.v=0}}function gc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Kr(_(a.Fa,a),em(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Jp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Kr(_(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ze(10),Ua(this),Jp(this))};function yc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Jp(a){a.g=new st(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=kn(a.qa);_e(c,"RID","rpc"),_e(c,"SID",a.K),_e(c,"AID",a.T),_e(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(c,"TO",a.ja),_e(c,"TYPE","xmlhttp"),Hs(a,c),a.m&&a.o&&pc(c,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=Oa(kn(c)),h.m=null,h.P=!0,Sp(h,a)}t.Za=function(){this.C!=null&&(this.C=null,Ua(this),gc(this),ze(19))};function za(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Zp(a,c){var h=null;if(a.g==c){za(a),yc(a),a.g=null;var p=2}else if(hc(a.h,c))h=c.D,Np(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var N=a.B;p=qr(),Be(p,new ba(p,h)),Ba(a)}else Xp(a);else if(N=c.s,N==3||N==0&&0<c.X||!(p==1&&cT(a,c)||p==2&&gc(a)))switch(h&&0<h.length&&(c=a.h,c.i=c.i.concat(h)),N){case 1:Xr(a,5);break;case 4:Xr(a,10);break;case 3:Xr(a,6);break;default:Xr(a,2)}}}function em(a,c){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*c}function Xr(a,c){if(a.j.info("Error code "+c),c==2){var h=_(a.fb,a),p=a.Xa;const N=!p;p=new Yr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Va(p,"https"),Oa(p),N?rT(p.toString(),h):iT(p.toString(),h)}else ze(2);a.G=0,a.l&&a.l.sa(c),tm(a),Gp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function tm(a){if(a.G=0,a.ka=[],a.l){const c=bp(a.h);(c.length!=0||a.i.length!=0)&&(R(a.ka,c),R(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function nm(a,c,h){var p=h instanceof Yr?kn(h):new Yr(h);if(p.g!="")c&&(p.g=c+"."+p.g),La(p,p.s);else{var N=l.location;p=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;var V=new Yr(null);p&&Va(V,p),c&&(V.g=c),N&&La(V,N),h&&(V.l=h),p=V}return h=a.D,c=a.ya,h&&c&&_e(p,h,c),_e(p,"VER",a.la),Hs(a,p),p}function rm(a,c,h){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Pe(new Ma({eb:h})):new Pe(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function im(){}t=im.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function $a(){}$a.prototype.g=function(a,c){return new bt(a,c)};function bt(a,c){Qe.call(this),this.g=new Kp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!E(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new bi(this)}b(bt,Qe),bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){mc(this.g)},bt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=Vs(a),a=h);c.i.push(new KE(c.Ya++,a)),c.G==3&&Ba(c)},bt.prototype.N=function(){this.g.l=null,delete this.j,mc(this.g),delete this.g,bt.aa.N.call(this)};function sm(a){Ms.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const h in c){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}b(sm,Ms);function om(){js.call(this),this.status=1}b(om,js);function bi(a){this.g=a}b(bi,im),bi.prototype.ua=function(){Be(this.g,"a")},bi.prototype.ta=function(a){Be(this.g,new sm(a))},bi.prototype.sa=function(a){Be(this.g,new om)},bi.prototype.ra=function(){Be(this.g,"b")},$a.prototype.createWebChannel=$a.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,Cw=function(){return new $a},xw=function(){return qr()},Sw=Pn,hh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},re.NO_ERROR=0,re.TIMEOUT=8,re.HTTP_ERROR=6,Pl=re,$e.COMPLETE="complete",Aw=$e,Pa.EventType=$r,$r.OPEN="a",$r.CLOSE="b",$r.ERROR="c",$r.MESSAGE="d",Qe.prototype.listen=Qe.prototype.K,uo=Pa,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,Iw=Pe}).apply(typeof ul<"u"?ul:typeof self<"u"?self:typeof window<"u"?window:{});const iy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new Fu("@firebase/firestore");function to(){return vi.logLevel}function H(t,...e){if(vi.logLevel<=ae.DEBUG){const n=e.map(jf);vi.debug(`Firestore (${xs}): ${t}`,...n)}}function Gn(t,...e){if(vi.logLevel<=ae.ERROR){const n=e.map(jf);vi.error(`Firestore (${xs}): ${t}`,...n)}}function ps(t,...e){if(vi.logLevel<=ae.WARN){const n=e.map(jf);vi.warn(`Firestore (${xs}): ${t}`,...n)}}function jf(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${xs}) INTERNAL ASSERTION FAILED: `+t;throw Gn(e),new Error(e)}function pe(t,e){t||X()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class dP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hP{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){pe(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Bn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pe(typeof r.accessToken=="string"),new Rw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string"),new dt(e)}}class fP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class pP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new fP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){pe(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string"),this.R=n.token,new mP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function yP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=yP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function ms(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ue(0,0))}static max(){return new ee(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Yo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Yo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Yo{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const vP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends Yo{construct(e,n,r){return new Ze(e,n,r)}static isValidIdentifier(e){return vP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ee.fromString(e))}static fromName(e){return new K(Ee.fromString(e).popFirst(5))}static empty(){return new K(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ee(e.slice()))}}function _P(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new Pr(i,K.empty(),e)}function wP(t){return new Pr(t.readTime,t.key,-1)}class Pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pr(ee.min(),K.empty(),-1)}static max(){return new Pr(ee.max(),K.empty(),-1)}}function EP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
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
 */const TP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pa(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==TP)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(f=>{o[d]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function AP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ma(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ff{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ff.oe=-1;function qu(t){return t==null}function pu(t){return t===0&&1/t==-1/0}function SP(t){return typeof t=="number"&&Number.isInteger(t)&&!pu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Si(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cl(this.root,e,this.comparator,!1)}getReverseIterator(){return new cl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cl(this.root,e,this.comparator,!0)}}class cl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Je.RED,this.left=i??Je.EMPTY,this.right=s??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new oy(this.data.getIterator())}getIteratorFrom(e){return new oy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class oy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ot{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new tt(Ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ms(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Nw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Nw("Invalid base64 string: "+s):s}}(e);return new rt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const xP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(pe(!!t),typeof t=="string"){let e=0;const n=xP.exec(t);if(pe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _i(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
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
 */function Uf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bf(t){const e=t.mapValue.fields.__previous_value__;return Uf(e)?Bf(e):e}function Xo(t){const e=kr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e,n,r,i,s,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Jo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Jo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Jo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const dl={mapValue:{}};function wi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Uf(t)?4:PP(t)?9007199254740991:RP(t)?10:11:X()}function Cn(t,e){if(t===e)return!0;const n=wi(t);if(n!==wi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xo(t).isEqual(Xo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=kr(i.timestampValue),l=kr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return _i(i.bytesValue).isEqual(_i(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=be(i.doubleValue),l=be(s.doubleValue);return o===l?pu(o)===pu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ms(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(sy(o)!==sy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Cn(o[u],l[u])))return!1;return!0}(t,e);default:return X()}}function Zo(t,e){return(t.values||[]).find(n=>Cn(n,e))!==void 0}function gs(t,e){if(t===e)return 0;const n=wi(t),r=wi(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=be(s.integerValue||s.doubleValue),u=be(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ay(t.timestampValue,e.timestampValue);case 4:return ay(Xo(t),Xo(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(s,o){const l=_i(s),u=_i(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=de(l[d],u[d]);if(f!==0)return f}return de(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=de(be(s.latitude),be(o.latitude));return l!==0?l:de(be(s.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ly(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,d,f;const m=s.fields||{},_=o.fields||{},x=(l=m.value)===null||l===void 0?void 0:l.arrayValue,b=(u=_.value)===null||u===void 0?void 0:u.arrayValue,D=de(((d=x==null?void 0:x.values)===null||d===void 0?void 0:d.length)||0,((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:ly(x,b)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===dl.mapValue&&o===dl.mapValue)return 0;if(s===dl.mapValue)return 1;if(o===dl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=o.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const _=de(u[m],f[m]);if(_!==0)return _;const x=gs(l[u[m]],d[f[m]]);if(x!==0)return x}return de(u.length,f.length)}(t.mapValue,e.mapValue);default:throw X()}}function ay(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=kr(t),r=kr(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function ly(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=gs(n[i],r[i]);if(s)return s}return de(n.length,r.length)}function ys(t){return fh(t)}function fh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _i(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=fh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${fh(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function uy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ph(t){return!!t&&"integerValue"in t}function zf(t){return!!t&&"arrayValue"in t}function cy(t){return!!t&&"nullValue"in t}function dy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function kl(t){return!!t&&"mapValue"in t}function RP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function So(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Si(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=So(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=So(t.arrayValue.values[n]);return e}return Object.assign({},t)}function PP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!kl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=So(n)}setAll(e){let n=Ze.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=So(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());kl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];kl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Si(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new St(So(this.value))}}function bw(t){const e=[];return Si(t.fields,(n,r)=>{const i=new Ze([n]);if(kl(r)){const s=bw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ft(e,0,ee.min(),ee.min(),ee.min(),St.empty(),0)}static newFoundDocument(e,n,r,i){return new ft(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new ft(e,2,n,ee.min(),ee.min(),St.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,ee.min(),ee.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mu{constructor(e,n){this.position=e,this.inclusive=n}}function hy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=gs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function fy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ea{constructor(e,n="asc"){this.field=e,this.dir=n}}function kP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Dw{}class Oe extends Dw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bP(e,n,r):n==="array-contains"?new LP(e,r):n==="in"?new OP(e,r):n==="not-in"?new MP(e,r):n==="array-contains-any"?new jP(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new DP(e,r):new VP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(gs(n,this.value)):n!==null&&wi(this.value)===wi(n)&&this.matchesComparison(gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends Dw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new hn(e,n)}matches(e){return Vw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Vw(t){return t.op==="and"}function Lw(t){return NP(t)&&Vw(t)}function NP(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function mh(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+ys(t.value);if(Lw(t))return t.filters.map(e=>mh(e)).join(",");{const e=t.filters.map(n=>mh(n)).join(",");return`${t.op}(${e})`}}function Ow(t,e){return t instanceof Oe?function(r,i){return i instanceof Oe&&r.op===i.op&&r.field.isEqual(i.field)&&Cn(r.value,i.value)}(t,e):t instanceof hn?function(r,i){return i instanceof hn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Ow(o,i.filters[l]),!0):!1}(t,e):void X()}function Mw(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${ys(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(Mw).join(" ,")+"}"}(t):"Filter"}class bP extends Oe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class DP extends Oe{constructor(e,n){super(e,"in",n),this.keys=jw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class VP extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=jw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function jw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class LP extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zf(n)&&Zo(n.arrayValue,this.value)}}class OP extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zo(this.value.arrayValue,n)}}class MP extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Zo(this.value.arrayValue,n)}}class jP extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Zo(this.value.arrayValue,r))}}/**
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
 */class FP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function py(t,e=null,n=[],r=[],i=null,s=null,o=null){return new FP(t,e,n,r,i,s,o)}function $f(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>mh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),qu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ys(r)).join(",")),e.ue=n}return e.ue}function Wf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!kP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ow(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!fy(t.startAt,e.startAt)&&fy(t.endAt,e.endAt)}function gh(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function UP(t,e,n,r,i,s,o,l){return new Cs(t,e,n,r,i,s,o,l)}function qf(t){return new Cs(t)}function my(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Fw(t){return t.collectionGroup!==null}function xo(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new tt(Ze.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ea(s,r))}),n.has(Ze.keyField().canonicalString())||e.ce.push(new ea(Ze.keyField(),r))}return e.ce}function In(t){const e=te(t);return e.le||(e.le=BP(e,xo(t))),e.le}function BP(t,e){if(t.limitType==="F")return py(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ea(i.field,s)});const n=t.endAt?new mu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new mu(t.startAt.position,t.startAt.inclusive):null;return py(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function yh(t,e){const n=t.filters.concat([e]);return new Cs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function gu(t,e,n){return new Cs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hu(t,e){return Wf(In(t),In(e))&&t.limitType===e.limitType}function Uw(t){return`${$f(In(t))}|lt:${t.limitType}`}function Li(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Mw(i)).join(", ")}]`),qu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ys(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ys(i)).join(",")),`Target(${r})`}(In(t))}; limitType=${t.limitType})`}function Ku(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of xo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const d=hy(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,xo(r),i)||r.endAt&&!function(o,l,u){const d=hy(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,xo(r),i))}(t,e)}function zP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Bw(t){return(e,n)=>{let r=!1;for(const i of xo(t)){const s=$P(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function $P(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),d=l.data.field(s);return u!==null&&d!==null?gs(u,d):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Si(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return kw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=new Re(K.comparator);function Qn(){return WP}const zw=new Re(K.comparator);function co(...t){let e=zw;for(const n of t)e=e.insert(n.key,n);return e}function $w(t){let e=zw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function si(){return Co()}function Ww(){return Co()}function Co(){return new Rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const qP=new Re(K.comparator),HP=new tt(K.comparator);function oe(...t){let e=HP;for(const n of t)e=e.add(n);return e}const KP=new tt(de);function GP(){return KP}/**
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
 */function Hf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pu(e)?"-0":e}}function qw(t){return{integerValue:""+t}}function Hw(t,e){return SP(e)?qw(e):Hf(t,e)}/**
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
 */class Gu{constructor(){this._=void 0}}function QP(t,e,n){return t instanceof yu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Uf(s)&&(s=Bf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ta?Gw(t,e):t instanceof na?Qw(t,e):function(i,s){const o=Kw(i,s),l=gy(o)+gy(i.Pe);return ph(o)&&ph(i.Pe)?qw(l):Hf(i.serializer,l)}(t,e)}function YP(t,e,n){return t instanceof ta?Gw(t,e):t instanceof na?Qw(t,e):n}function Kw(t,e){return t instanceof ra?function(r){return ph(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class yu extends Gu{}class ta extends Gu{constructor(e){super(),this.elements=e}}function Gw(t,e){const n=Yw(e);for(const r of t.elements)n.some(i=>Cn(i,r))||n.push(r);return{arrayValue:{values:n}}}class na extends Gu{constructor(e){super(),this.elements=e}}function Qw(t,e){let n=Yw(e);for(const r of t.elements)n=n.filter(i=>!Cn(i,r));return{arrayValue:{values:n}}}class ra extends Gu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function gy(t){return be(t.integerValue||t.doubleValue)}function Yw(t){return zf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(e,n){this.field=e,this.transform=n}}function JP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ta&&i instanceof ta||r instanceof na&&i instanceof na?ms(r.elements,i.elements,Cn):r instanceof ra&&i instanceof ra?Cn(r.Pe,i.Pe):r instanceof yu&&i instanceof yu}(t.transform,e.transform)}class ZP{constructor(e,n){this.version=e,this.transformResults=n}}class An{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new An}static exists(e){return new An(void 0,e)}static updateTime(e){return new An(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qu{}function Xw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Zw(t.key,An.none()):new ga(t.key,t.data,An.none());{const n=t.data,r=St.empty();let i=new tt(Ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Or(t.key,r,new Ot(i.toArray()),An.none())}}function ek(t,e,n){t instanceof ga?function(i,s,o){const l=i.value.clone(),u=vy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Or?function(i,s,o){if(!Nl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=vy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Jw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ro(t,e,n,r){return t instanceof ga?function(s,o,l,u){if(!Nl(s.precondition,o))return l;const d=s.value.clone(),f=_y(s.fieldTransforms,u,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Or?function(s,o,l,u){if(!Nl(s.precondition,o))return l;const d=_y(s.fieldTransforms,u,o),f=o.data;return f.setAll(Jw(s)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Nl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function tk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Kw(r.transform,i||null);s!=null&&(n===null&&(n=St.empty()),n.set(r.field,s))}return n||null}function yy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ms(r,i,(s,o)=>JP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ga extends Qu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Or extends Qu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Jw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vy(t,e,n){const r=new Map;pe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,YP(o,l,n[i]))}return r}function _y(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,QP(s,o,e))}return r}class Zw extends Qu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nk extends Qu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ek(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ro(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ro(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ww();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Xw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&ms(this.mutations,e.mutations,(n,r)=>yy(n,r))&&ms(this.baseMutations,e.baseMutations,(n,r)=>yy(n,r))}}class Kf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){pe(e.mutations.length===r.length);let i=function(){return qP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Kf(e,n,r,i)}}/**
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
 */class ik{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,le;function ok(t){switch(t){default:return X();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function eE(t){if(t===void 0)return Gn("GRPC error has no .code"),O.UNKNOWN;switch(t){case Ve.OK:return O.OK;case Ve.CANCELLED:return O.CANCELLED;case Ve.UNKNOWN:return O.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return O.INTERNAL;case Ve.UNAVAILABLE:return O.UNAVAILABLE;case Ve.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ve.NOT_FOUND:return O.NOT_FOUND;case Ve.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ve.ABORTED:return O.ABORTED;case Ve.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ve.DATA_LOSS:return O.DATA_LOSS;default:return X()}}(le=Ve||(Ve={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ak(){return new TextEncoder}/**
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
 */const lk=new li([4294967295,4294967295],0);function wy(t){const e=ak().encode(t),n=new Tw;return n.update(e),new Uint8Array(n.digest())}function Ey(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new li([n,r],0),new li([i,s],0)]}class Gf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ho(`Invalid padding: ${n}`);if(r<0)throw new ho(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ho(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ho(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=li.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(li.fromNumber(r)));return i.compare(lk)===1&&(i=new li([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=wy(e),[r,i]=Ey(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Gf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=wy(e),[r,i]=Ey(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ho extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ya.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Yu(ee.min(),i,new Re(de),Qn(),oe())}}class ya{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ya(r,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class tE{constructor(e,n){this.targetId=e,this.me=n}}class nE{constructor(e,n,r=rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ty{constructor(){this.fe=0,this.ge=Ay(),this.pe=rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new ya(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ay()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,pe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class uk{constructor(e){this.Le=e,this.Be=new Map,this.ke=Qn(),this.qe=Iy(),this.Qe=new Re(de)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(gh(s))if(r===0){const o=new K(s.path);this.Ue(n,o,ft.newNoDocument(o,ee.min()))}else pe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=_i(r).toUint8Array()}catch(u){if(u instanceof Nw)return ps("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Gf(o,i,s)}catch(u){return ps(u instanceof ho?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&gh(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ft.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=oe();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Yu(e,n,this.Qe,this.ke,r);return this.ke=Qn(),this.qe=Iy(),this.Qe=new Re(de),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ty,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new tt(de),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ty),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Iy(){return new Re(K.comparator)}function Ay(){return new Re(K.comparator)}const ck={asc:"ASCENDING",desc:"DESCENDING"},dk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hk={and:"AND",or:"OR"};class fk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function vh(t,e){return t.useProto3Json||qu(e)?e:{value:e}}function vu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function pk(t,e){return vu(t,e.toTimestamp())}function Sn(t){return pe(!!t),ee.fromTimestamp(function(n){const r=kr(n);return new Ue(r.seconds,r.nanos)}(t))}function Qf(t,e){return _h(t,e).canonicalString()}function _h(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function iE(t){const e=Ee.fromString(t);return pe(uE(e)),e}function wh(t,e){return Qf(t.databaseId,e.path)}function rd(t,e){const n=iE(e);if(n.get(1)!==t.databaseId.projectId)throw new W(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(oE(n))}function sE(t,e){return Qf(t.databaseId,e)}function mk(t){const e=iE(t);return e.length===4?Ee.emptyPath():oE(e)}function Eh(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oE(t){return pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sy(t,e,n){return{name:wh(t,e),fields:n.value.mapValue.fields}}function gk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(pe(f===void 0||typeof f=="string"),rt.fromBase64String(f||"")):(pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const f=d.code===void 0?O.UNKNOWN:eE(d.code);return new W(f,d.message||"")}(o);n=new nE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=rd(t,r.document.name),s=Sn(r.document.updateTime),o=r.document.createTime?Sn(r.document.createTime):ee.min(),l=new St({mapValue:{fields:r.document.fields}}),u=ft.newFoundDocument(i,s,o,l),d=r.targetIds||[],f=r.removedTargetIds||[];n=new bl(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=rd(t,r.document),s=r.readTime?Sn(r.readTime):ee.min(),o=ft.newNoDocument(i,s),l=r.removedTargetIds||[];n=new bl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=rd(t,r.document),s=r.removedTargetIds||[];n=new bl([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new sk(i,s),l=r.targetId;n=new tE(l,o)}}return n}function yk(t,e){let n;if(e instanceof ga)n={update:Sy(t,e.key,e.value)};else if(e instanceof Zw)n={delete:wh(t,e.key)};else if(e instanceof Or)n={update:Sy(t,e.key,e.data),updateMask:xk(e.fieldMask)};else{if(!(e instanceof nk))return X();n={verify:wh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof yu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ta)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof na)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ra)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:pk(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function vk(t,e){return t&&t.length>0?(pe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Sn(i.updateTime):Sn(s);return o.isEqual(ee.min())&&(o=Sn(s)),new ZP(o,i.transformResults||[])}(n,e))):[]}function _k(t,e){return{documents:[sE(t,e.path)]}}function wk(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=sE(t,i);const s=function(d){if(d.length!==0)return lE(hn.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(f=>function(_){return{field:Oi(_.field),direction:Ik(_.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=vh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function Ek(t){let e=mk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){pe(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const _=aE(m);return _ instanceof hn&&Lw(_)?_.getFilters():[_]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(_=>function(b){return new ea(Mi(b.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(m){let _;return _=typeof m=="object"?m.value:m,qu(_)?null:_}(n.limit));let u=null;n.startAt&&(u=function(m){const _=!!m.before,x=m.values||[];return new mu(x,_)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const _=!m.before,x=m.values||[];return new mu(x,_)}(n.endAt)),UP(e,i,o,s,l,"F",u,d)}function Tk(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function aE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Mi(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Mi(n.unaryFilter.field);return Oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Mi(n.unaryFilter.field);return Oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Mi(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(Mi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>aE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function Ik(t){return ck[t]}function Ak(t){return dk[t]}function Sk(t){return hk[t]}function Oi(t){return{fieldPath:t.canonicalString()}}function Mi(t){return Ze.fromServerFormat(t.fieldPath)}function lE(t){return t instanceof Oe?function(n){if(n.op==="=="){if(dy(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NAN"}};if(cy(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(dy(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NOT_NAN"}};if(cy(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oi(n.field),op:Ak(n.op),value:n.value}}}(t):t instanceof hn?function(n){const r=n.getFilters().map(i=>lE(i));return r.length===1?r[0]:{compositeFilter:{op:Sk(n.op),filters:r}}}(t):X()}function xk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),l=rt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.ct=e}}function Rk(t){const e=Ek({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gu(e,e.limit,"L"):e}/**
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
 */class Pk{constructor(){this.un=new kk}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Pr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Pr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class kk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new tt(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new tt(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new vs(0)}static kn(){return new vs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(){this.changes=new Rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ro(r.mutation,i,Ot.empty(),Ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=si();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=co();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=si();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Qn();const o=Co(),l=function(){return Co()}();return n.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Or)?s=s.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),Ro(f.mutation,d,f.mutation.getFieldMask(),Ue.now())):o.set(d.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>o.set(d,f)),n.forEach((d,f)=>{var m;return l.set(d,new bk(f,(m=o.get(d))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Co();let i=new Re((o,l)=>o-l),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||Ot.empty();f=l.applyToLocalView(d,f),r.set(u,f);const m=(i.get(l.batchId)||oe()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,m=Ww();f.forEach(_=>{if(!s.has(_)){const x=Xw(n.get(_),r.get(_));x!==null&&m.set(_,x),s=s.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Fw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(si());let l=-1,u=s;return o.next(d=>M.forEach(d,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,oe())).next(f=>({batchId:l,changes:$w(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=co();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=co();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const d=function(m,_){return new Cs(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((m,_)=>{o=o.insert(m,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,ft.newInvalidDocument(f)))});let l=co();return o.forEach((u,d)=>{const f=s.get(u);f!==void 0&&Ro(f.mutation,d,Ot.empty(),Ue.now()),Ku(n,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class Vk{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Sn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Rk(i.bundledQuery),readTime:Sn(i.readTime)}}(n)),M.resolve()}}/**
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
 */class Lk{constructor(){this.overlays=new Re(K.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=si();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=si(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Re((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=si(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=si(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ik(n,r));let s=this.Ir.get(n);s===void 0&&(s=oe(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class Ok{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(){this.Tr=new tt(He.Er),this.dr=new tt(He.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new He(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new He(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new Ee([])),r=new He(n,e),i=new He(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new Ee([])),r=new He(n,e),i=new He(n,e+1);let s=oe();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new He(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||de(e.wr,n.wr)}static Ar(e,n){return de(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new tt(He.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rk(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new He(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),i=new He(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(de);return n.forEach(i=>{const s=new He(i,0),o=new He(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new He(new K(s),0);let l=new tt(de);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){pe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new He(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new He(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e){this.Mr=e,this.docs=function(){return new Re(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let r=Qn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ft.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Qn();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||EP(wP(f),r)<=0||(i.has(f.key)||Ku(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Fk(this)}getSize(e){return M.resolve(this.size)}}class Fk extends Nk{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e){this.persistence=e,this.Nr=new Rs(n=>$f(n),Wf),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Yf,this.targetCount=0,this.kr=vs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new vs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Ff(0),this.Kr=!1,this.Kr=!0,this.$r=new Ok,this.referenceDelegate=e(this),this.Ur=new Uk(this),this.indexManager=new Pk,this.remoteDocumentCache=function(i){return new jk(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ck(n),this.Gr=new Vk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Lk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Mk(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new zk(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class zk extends IP{constructor(e){super(),this.currentSequenceNumber=e}}class Xf{constructor(e){this.persistence=e,this.Jr=new Yf,this.Yr=null}static Zr(e){return new Xf(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Jf(e,n.fromCache,r,i)}}/**
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
 */class $k{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Wk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return lS()?8:AP(mt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new $k;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(to()<=ae.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Li(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(to()<=ae.DEBUG&&H("QueryEngine","Query:",Li(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(to()<=ae.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Li(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,In(n))):M.resolve())}Yi(e,n){if(my(n))return M.resolve(null);let r=In(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=gu(n,null,"F"),r=In(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,o,u.readTime)?this.Yi(e,gu(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return my(n)||i.isEqual(ee.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?M.resolve(null):(to()<=ae.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Li(n)),this.rs(e,o,n,_P(i,-1)).next(l=>l))})}ts(e,n){let r=new tt(Bw(e));return n.forEach((i,s)=>{Ku(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return to()<=ae.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Li(n)),this.Ji.getDocumentsMatchingQuery(e,n,Pr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class qk{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Re(de),this._s=new Rs(s=>$f(s),Wf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Dk(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Hk(t,e,n,r){return new qk(t,e,n,r)}async function cE(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=oe();for(const d of i){o.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function Kk(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const m=d.batch,_=m.keys();let x=M.resolve();return _.forEach(b=>{x=x.next(()=>f.getEntry(u,b)).next(D=>{const R=d.docVersions.get(b);pe(R!==null),D.version.compareTo(R)<0&&(m.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=oe();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function dE(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Gk(t,e){const n=te(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const _=i.get(m);if(!_)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,m)));let x=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?x=x.withResumeToken(rt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):f.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(f.resumeToken,r)),i=i.insert(m,x),function(D,R,S){return D.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(_,x,f)&&l.push(n.Ur.updateTargetData(s,x))});let u=Qn(),d=oe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Qk(s,o,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(ee.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.os=i,s))}function Qk(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Qn();return n.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function Yk(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Xk(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Th(t,e,n){const r=te(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ma(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function xy(t,e,n){const r=te(t);let i=ee.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,f){const m=te(u),_=m._s.get(f);return _!==void 0?M.resolve(m.os.get(_)):m.Ur.getTargetData(d,f)}(r,o,In(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:oe())).next(l=>(Jk(r,zP(e),l),{documents:l,Ts:s})))}function Jk(t,e,n){let r=t.us.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Cy{constructor(){this.activeTargetIds=GP()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zk{constructor(){this.so=new Cy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Cy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class eN{_o(e){}shutdown(){}}/**
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
 */class Ry{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hl=null;function id(){return hl===null?hl=function(){return 268435456+Math.round(2147483648*Math.random())}():hl++,"0x"+hl.toString(16)}/**
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
 */const tN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="WebChannelConnection";class rN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=id(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,o),this.No(n,u,d,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw ps("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=tN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=id();return new Promise((o,l)=>{const u=new Iw;u.setWithCredentials(!0),u.listenOnce(Aw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Pl.NO_ERROR:const f=u.getResponseJson();H(ct,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Pl.TIMEOUT:H(ct,`RPC '${e}' ${s} timed out`),l(new W(O.DEADLINE_EXCEEDED,"Request time out"));break;case Pl.HTTP_ERROR:const m=u.getStatus();if(H(ct,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const x=_==null?void 0:_.error;if(x&&x.status&&x.message){const b=function(R){const S=R.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(S)>=0?S:O.UNKNOWN}(x.status);l(new W(b,x.message))}else l(new W(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(O.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{H(ct,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);H(ct,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=id(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Cw(),l=xw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(ct,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let _=!1,x=!1;const b=new nN({Io:R=>{x?H(ct,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(_||(H(ct,`Opening RPC '${e}' stream ${i} transport.`),m.open(),_=!0),H(ct,`RPC '${e}' stream ${i} sending:`,R),m.send(R))},To:()=>m.close()}),D=(R,S,E)=>{R.listen(S,g=>{try{E(g)}catch(L){setTimeout(()=>{throw L},0)}})};return D(m,uo.EventType.OPEN,()=>{x||(H(ct,`RPC '${e}' stream ${i} transport opened.`),b.yo())}),D(m,uo.EventType.CLOSE,()=>{x||(x=!0,H(ct,`RPC '${e}' stream ${i} transport closed`),b.So())}),D(m,uo.EventType.ERROR,R=>{x||(x=!0,ps(ct,`RPC '${e}' stream ${i} transport errored:`,R),b.So(new W(O.UNAVAILABLE,"The operation could not be completed")))}),D(m,uo.EventType.MESSAGE,R=>{var S;if(!x){const E=R.data[0];pe(!!E);const g=E,L=g.error||((S=g[0])===null||S===void 0?void 0:S.error);if(L){H(ct,`RPC '${e}' stream ${i} received error:`,L);const U=L.status;let F=function(w){const A=Ve[w];if(A!==void 0)return eE(A)}(U),T=L.message;F===void 0&&(F=O.INTERNAL,T="Unknown error status: "+U+" with message "+L.message),x=!0,b.So(new W(F,T)),m.close()}else H(ct,`RPC '${e}' stream ${i} received:`,E),b.bo(E)}}),D(l,Sw.STAT_EVENT,R=>{R.stat===hh.PROXY?H(ct,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===hh.NOPROXY&&H(ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{b.wo()},0),b}}function sd(){return typeof document<"u"?document:null}/**
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
 */function Xu(t){return new fk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new hE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Gn(n.toString()),Gn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iN extends fE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=gk(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Sn(o.readTime):ee.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Eh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=gh(u)?{documents:_k(s,u)}:{query:wk(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=rE(s,o.resumeToken);const d=vh(s,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=vu(s,o.snapshotVersion.toTimestamp());const d=vh(s,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=Tk(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Eh(this.serializer),n.removeTarget=e,this.a_(n)}}class sN extends fE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return pe(!!e.streamToken),this.lastStreamToken=e.streamToken,pe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=vk(e.writeResults,e.commitTime),r=Sn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Eh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yk(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,_h(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(O.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,_h(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(O.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class aN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Gn(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{xi(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=te(u);d.L_.add(4),await va(d),d.q_.set("Unknown"),d.L_.delete(4),await Ju(d)}(this))})}),this.q_=new aN(r,i)}}async function Ju(t){if(xi(t))for(const e of t.B_)await e(!0)}async function va(t){for(const e of t.B_)await e(!1)}function pE(t,e){const n=te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),np(n)?tp(n):Ps(n).r_()&&ep(n,e))}function Zf(t,e){const n=te(t),r=Ps(n);n.N_.delete(e),r.r_()&&mE(n,e),n.N_.size===0&&(r.r_()?r.o_():xi(n)&&n.q_.set("Unknown"))}function ep(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ps(t).A_(e)}function mE(t,e){t.Q_.xe(e),Ps(t).R_(e)}function tp(t){t.Q_=new uk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ps(t).start(),t.q_.v_()}function np(t){return xi(t)&&!Ps(t).n_()&&t.N_.size>0}function xi(t){return te(t).L_.size===0}function gE(t){t.Q_=void 0}async function uN(t){t.q_.set("Online")}async function cN(t){t.N_.forEach((e,n)=>{ep(t,e)})}async function dN(t,e){gE(t),np(t)?(t.q_.M_(e),tp(t)):t.q_.set("Unknown")}async function hN(t,e,n){if(t.q_.set("Online"),e instanceof nE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _u(t,r)}else if(e instanceof bl?t.Q_.Ke(e):e instanceof tE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ee.min()))try{const r=await dE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(d);f&&s.N_.set(d,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(rt.EMPTY_BYTE_STRING,f.snapshotVersion)),mE(s,u);const m=new mr(f.target,u,d,f.sequenceNumber);ep(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await _u(t,r)}}async function _u(t,e,n){if(!ma(e))throw e;t.L_.add(1),await va(t),t.q_.set("Offline"),n||(n=()=>dE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ju(t)})}function yE(t,e){return e().catch(n=>_u(t,n,e))}async function Zu(t){const e=te(t),n=Nr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;fN(e);)try{const i=await Yk(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,pN(e,i)}catch(i){await _u(e,i)}vE(e)&&_E(e)}function fN(t){return xi(t)&&t.O_.length<10}function pN(t,e){t.O_.push(e);const n=Nr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function vE(t){return xi(t)&&!Nr(t).n_()&&t.O_.length>0}function _E(t){Nr(t).start()}async function mN(t){Nr(t).p_()}async function gN(t){const e=Nr(t);for(const n of t.O_)e.m_(n.mutations)}async function yN(t,e,n){const r=t.O_.shift(),i=Kf.from(r,e,n);await yE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Zu(t)}async function vN(t,e){e&&Nr(t).V_&&await async function(r,i){if(function(o){return ok(o)&&o!==O.ABORTED}(i.code)){const s=r.O_.shift();Nr(r).s_(),await yE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Zu(r)}}(t,e),vE(t)&&_E(t)}async function Py(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=xi(n);n.L_.add(3),await va(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ju(n)}async function _N(t,e){const n=te(t);e?(n.L_.delete(2),await Ju(n)):e||(n.L_.add(2),await va(n),n.q_.set("Unknown"))}function Ps(t){return t.K_||(t.K_=function(n,r,i){const s=te(n);return s.w_(),new iN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:uN.bind(null,t),Ro:cN.bind(null,t),mo:dN.bind(null,t),d_:hN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),np(t)?tp(t):t.q_.set("Unknown")):(await t.K_.stop(),gE(t))})),t.K_}function Nr(t){return t.U_||(t.U_=function(n,r,i){const s=te(n);return s.w_(),new sN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:mN.bind(null,t),mo:vN.bind(null,t),f_:gN.bind(null,t),g_:yN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Zu(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new rp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ip(t,e){if(Gn("AsyncQueue",`${e}: ${t}`),ma(t))return new W(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=co(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new os(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(){this.W_=new Re(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class _s{constructor(e,n,r,i,s,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new _s(e,n,os.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class EN{constructor(){this.queries=Ny(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=Ny(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(O.ABORTED,"Firestore shutting down"))}}function Ny(){return new Rs(t=>Uw(t),Hu)}async function wE(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new wN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=ip(o,`Initialization of query '${Li(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&sp(n)}async function EE(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function TN(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&sp(n)}function IN(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function sp(t){t.Y_.forEach(e=>{e.next()})}var Ih,by;(by=Ih||(Ih={})).ea="default",by.Cache="cache";class TE{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new _s(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=_s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ih.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e){this.key=e}}class AE{constructor(e){this.key=e}}class AN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=oe(),this.mutatedKeys=oe(),this.Aa=Bw(e),this.Ra=new os(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new ky,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const _=i.get(f),x=Ku(this.query,m)?m:null,b=!!_&&this.mutatedKeys.has(_.key),D=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let R=!1;_&&x?_.data.isEqual(x.data)?b!==D&&(r.track({type:3,doc:x}),R=!0):this.ga(_,x)||(r.track({type:2,doc:x}),R=!0,(u&&this.Aa(x,u)>0||d&&this.Aa(x,d)<0)&&(l=!0)):!_&&x?(r.track({type:0,doc:x}),R=!0):_&&!x&&(r.track({type:1,doc:_}),R=!0,(u||d)&&(l=!0)),R&&(x?(o=o.add(x),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(x,b){const D=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return D(x)-D(b)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new _s(this.query,e.Ra,s,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ky,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=oe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new AE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new IE(r))}),n}ba(e){this.Ta=e.Ts,this.da=oe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return _s.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class SN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xN{constructor(e){this.key=e,this.va=!1}}class CN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Rs(l=>Uw(l),Hu),this.Ma=new Map,this.xa=new Set,this.Oa=new Re(K.comparator),this.Na=new Map,this.La=new Yf,this.Ba={},this.ka=new Map,this.qa=vs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function RN(t,e,n=!0){const r=kE(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await SE(r,e,n,!0),i}async function PN(t,e){const n=kE(t);await SE(n,e,!0,!1)}async function SE(t,e,n,r){const i=await Xk(t.localStore,In(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await kN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&pE(t.remoteStore,i),l}async function kN(t,e,n,r,i){t.Ka=(m,_,x)=>async function(D,R,S,E){let g=R.view.ma(S);g.ns&&(g=await xy(D.localStore,R.query,!1).then(({documents:T})=>R.view.ma(T,g)));const L=E&&E.targetChanges.get(R.targetId),U=E&&E.targetMismatches.get(R.targetId)!=null,F=R.view.applyChanges(g,D.isPrimaryClient,L,U);return Vy(D,R.targetId,F.wa),F.snapshot}(t,m,_,x);const s=await xy(t.localStore,e,!0),o=new AN(e,s.Ts),l=o.ma(s.documents),u=ya.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(l,t.isPrimaryClient,u);Vy(t,n,d.wa);const f=new SN(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function NN(t,e,n){const r=te(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Hu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Th(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Zf(r.remoteStore,i.targetId),Ah(r,i.targetId)}).catch(pa)):(Ah(r,i.targetId),await Th(r.localStore,i.targetId,!0))}async function bN(t,e){const n=te(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Zf(n.remoteStore,r.targetId))}async function DN(t,e,n){const r=UN(t);try{const i=await function(o,l){const u=te(o),d=Ue.now(),f=l.reduce((x,b)=>x.add(b.key),oe());let m,_;return u.persistence.runTransaction("Locally write mutations","readwrite",x=>{let b=Qn(),D=oe();return u.cs.getEntries(x,f).next(R=>{b=R,b.forEach((S,E)=>{E.isValidDocument()||(D=D.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(x,b)).next(R=>{m=R;const S=[];for(const E of l){const g=tk(E,m.get(E.key).overlayedDocument);g!=null&&S.push(new Or(E.key,g,bw(g.value.mapValue),An.exists(!0)))}return u.mutationQueue.addMutationBatch(x,d,S,l)}).next(R=>{_=R;const S=R.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(x,R.batchId,S)})}).then(()=>({batchId:_.batchId,changes:$w(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new Re(de)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(r,i.batchId,n),await _a(r,i.changes),await Zu(r.remoteStore)}catch(i){const s=ip(i,"Failed to persist write");n.reject(s)}}async function xE(t,e){const n=te(t);try{const r=await Gk(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?pe(o.va):i.removedDocuments.size>0&&(pe(o.va),o.va=!1))}),await _a(n,r,e)}catch(r){await pa(r)}}function Dy(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=te(o);u.onlineState=l;let d=!1;u.queries.forEach((f,m)=>{for(const _ of m.j_)_.Z_(l)&&(d=!0)}),d&&sp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function VN(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Re(K.comparator);o=o.insert(s,ft.newNoDocument(s,ee.min()));const l=oe().add(s),u=new Yu(ee.min(),new Map,new Re(de),o,l);await xE(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),op(r)}else await Th(r.localStore,e,!1).then(()=>Ah(r,e,n)).catch(pa)}async function LN(t,e){const n=te(t),r=e.batch.batchId;try{const i=await Kk(n.localStore,e);RE(n,r,null),CE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _a(n,i)}catch(i){await pa(i)}}async function ON(t,e,n){const r=te(t);try{const i=await function(o,l){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(m=>(pe(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);RE(r,e,n),CE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _a(r,i)}catch(i){await pa(i)}}function CE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function RE(t,e,n){const r=te(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Ah(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||PE(t,r)})}function PE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Zf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),op(t))}function Vy(t,e,n){for(const r of n)r instanceof IE?(t.La.addReference(r.key,e),MN(t,r)):r instanceof AE?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||PE(t,r.key)):X()}function MN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),op(t))}function op(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(Ee.fromString(e)),r=t.qa.next();t.Na.set(r,new xN(n)),t.Oa=t.Oa.insert(n,r),pE(t.remoteStore,new mr(In(qf(n.path)),r,"TargetPurposeLimboResolution",Ff.oe))}}async function _a(t,e,n){const r=te(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){i.push(d);const m=Jf.Wi(u.targetId,d);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,d){const f=te(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(d,_=>M.forEach(_.$i,x=>f.persistence.referenceDelegate.addReference(m,_.targetId,x)).next(()=>M.forEach(_.Ui,x=>f.persistence.referenceDelegate.removeReference(m,_.targetId,x)))))}catch(m){if(!ma(m))throw m;H("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const _=m.targetId;if(!m.fromCache){const x=f.os.get(_),b=x.snapshotVersion,D=x.withLastLimboFreeSnapshotVersion(b);f.os=f.os.insert(_,D)}}}(r.localStore,s))}async function jN(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await cE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(O.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _a(n,r.hs)}}function FN(t,e){const n=te(t),r=n.Na.get(e);if(r&&r.va)return oe().add(r.key);{let i=oe();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function kE(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VN.bind(null,e),e.Ca.d_=TN.bind(null,e.eventManager),e.Ca.$a=IN.bind(null,e.eventManager),e}function UN(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ON.bind(null,e),e}class wu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Hk(this.persistence,new Wk,e.initialUser,this.serializer)}Ga(e){return new Bk(Xf.Zr,this.serializer)}Wa(e){return new Zk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wu.provider={build:()=>new wu};class Sh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jN.bind(null,this.syncEngine),await _N(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new EN}()}createDatastore(e){const n=Xu(e.databaseInfo.databaseId),r=function(s){return new rN(s)}(e.databaseInfo);return function(s,o,l,u){return new oN(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new lN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Dy(this.syncEngine,n,0),function(){return Ry.D()?new Ry:new eN}())}createSyncEngine(e,n){return function(i,s,o,l,u,d,f){const m=new CN(i,s,o,l,u,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await va(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Sh.provider={build:()=>new Sh};/**
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
 */class NE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Gn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=Pw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ip(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function od(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ly(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zN(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Py(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Py(e.remoteStore,i)),t._onlineComponents=e}async function zN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await od(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ps("Error using user provided cache. Falling back to memory cache: "+n),await od(t,new wu)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await od(t,new wu);return t._offlineComponents}async function bE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Ly(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Ly(t,new Sh))),t._onlineComponents}function $N(t){return bE(t).then(e=>e.syncEngine)}async function DE(t){const e=await bE(t),n=e.eventManager;return n.onListen=RN.bind(null,e.syncEngine),n.onUnlisten=NN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=PN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=bN.bind(null,e.syncEngine),n}function WN(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const f=new NE({next:_=>{f.Za(),o.enqueueAndForget(()=>EE(s,m));const x=_.docs.has(l);!x&&_.fromCache?d.reject(new W(O.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&_.fromCache&&u&&u.source==="server"?d.reject(new W(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(_)},error:_=>d.reject(_)}),m=new TE(qf(l.path),f,{includeMetadataChanges:!0,_a:!0});return wE(s,m)}(await DE(t),t.asyncQueue,e,n,r)),r.promise}function qN(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const f=new NE({next:_=>{f.Za(),o.enqueueAndForget(()=>EE(s,m)),_.fromCache&&u.source==="server"?d.reject(new W(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),m=new TE(l,f,{includeMetadataChanges:!0,_a:!0});return wE(s,m)}(await DE(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function VE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Oy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t,e,n){if(!n)throw new W(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function HN(t,e,n,r){if(e===!0&&r===!0)throw new W(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function My(t){if(!K.isDocumentKey(t))throw new W(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jy(t){if(K.isDocumentKey(t))throw new W(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ec(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Yn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ec(t);throw new W(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Fy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=VE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class tc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cP;switch(r.type){case"firstParty":return new pP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Oy.get(n);r&&(H("ComponentProvider","Removing Datastore"),Oy.delete(n),r.terminate())}(this),Promise.resolve()}}function KN(t,e,n,r={}){var i;const s=(t=Yn(t,tc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ps("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=dt.MOCK_USER;else{l=nS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new W(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new dt(d)}t._authCredentials=new dP(new Rw(l,u))}}/**
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
 */class Mr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mr(this.firestore,e,this._query)}}class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class xr extends Mr{constructor(e,n,r){super(e,n,qf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new K(e))}withConverter(e){return new xr(this.firestore,e,this._path)}}function ad(t,e,...n){if(t=Me(t),LE("collection","path",e),t instanceof tc){const r=Ee.fromString(e,...n);return jy(r),new xr(t,null,r)}{if(!(t instanceof wt||t instanceof xr))throw new W(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return jy(r),new xr(t.firestore,null,r)}}function yt(t,e,...n){if(t=Me(t),arguments.length===1&&(e=Pw.newId()),LE("doc","path",e),t instanceof tc){const r=Ee.fromString(e,...n);return My(r),new wt(t,null,new K(r))}{if(!(t instanceof wt||t instanceof xr))throw new W(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return My(r),new wt(t.firestore,t instanceof xr?t.converter:null,new K(r))}}/**
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
 */class Uy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new hE(this,"async_queue_retry"),this.Vu=()=>{const r=sd();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=sd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=sd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Bn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ma(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Gn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=rp.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class wa extends tc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Uy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Uy(e),this._firestoreClient=void 0,await e}}}function GN(t,e){const n=typeof t=="object"?t:If(),r=typeof t=="string"?t:"(default)",i=Ai(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=eS("firestore");s&&KN(i,...s)}return i}function ap(t){if(t._terminated)throw new W(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||QN(t),t._firestoreClient}function QN(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,f){return new CP(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,VE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new BN(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class ws{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ws(rt.fromBase64String(e))}catch(n){throw new W(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ws(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class nc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class rc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
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
 */class up{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=/^__.*__$/;class XN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,n,this.fieldTransforms):new ga(e,this.data,n,this.fieldTransforms)}}class OE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Or(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ME(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class cp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new cp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Eu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ME(this.Cu)&&YN.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class JN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Xu(e)}Qu(e,n,r,i=!1){return new cp({Cu:e,methodName:n,qu:r,path:Ze.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dp(t){const e=t._freezeSettings(),n=Xu(t._databaseId);return new JN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ZN(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);fp("Data must be an object, but it was:",o,r);const l=jE(r,o);let u,d;if(s.merge)u=new Ot(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const _=xh(e,m,n);if(!o.contains(_))throw new W(O.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);UE(f,_)||f.push(_)}u=new Ot(f),d=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=o.fieldTransforms;return new XN(new St(l),u,d)}class ic extends rc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ic}}class hp extends rc{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new ra(e.serializer,Hw(e.serializer,this.$u));return new XP(e.path,n)}isEqual(e){return e instanceof hp&&this.$u===e.$u}}function eb(t,e,n,r){const i=t.Qu(1,e,n);fp("Data must be an object, but it was:",i,r);const s=[],o=St.empty();Si(r,(u,d)=>{const f=pp(e,u,n);d=Me(d);const m=i.Nu(f);if(d instanceof ic)s.push(f);else{const _=Ea(d,m);_!=null&&(s.push(f),o.set(f,_))}});const l=new Ot(s);return new OE(o,l,i.fieldTransforms)}function tb(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[xh(e,r,n)],u=[i];if(s.length%2!=0)throw new W(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<s.length;_+=2)l.push(xh(e,s[_])),u.push(s[_+1]);const d=[],f=St.empty();for(let _=l.length-1;_>=0;--_)if(!UE(d,l[_])){const x=l[_];let b=u[_];b=Me(b);const D=o.Nu(x);if(b instanceof ic)d.push(x);else{const R=Ea(b,D);R!=null&&(d.push(x),f.set(x,R))}}const m=new Ot(d);return new OE(f,m,o.fieldTransforms)}function nb(t,e,n,r=!1){return Ea(n,t.Qu(r?4:3,e))}function Ea(t,e){if(FE(t=Me(t)))return fp("Unsupported field value:",e,t),jE(t,e);if(t instanceof rc)return function(r,i){if(!ME(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Ea(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Hw(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ue.fromDate(r);return{timestampValue:vu(i.serializer,s)}}if(r instanceof Ue){const s=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vu(i.serializer,s)}}if(r instanceof lp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ws)return{bytesValue:rE(i.serializer,r._byteString)};if(r instanceof wt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Qf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof up)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Hf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ec(r)}`)}(t,e)}function jE(t,e){const n={};return kw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Si(t,(r,i)=>{const s=Ea(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function FE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof lp||t instanceof ws||t instanceof wt||t instanceof rc||t instanceof up)}function fp(t,e,n){if(!FE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ec(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function xh(t,e,n){if((e=Me(e))instanceof nc)return e._internalPath;if(typeof e=="string")return pp(t,e);throw Eu("Field path arguments must be of type string or ",t,!1,void 0,n)}const rb=new RegExp("[~\\*/\\[\\]]");function pp(t,e,n){if(e.search(rb)>=0)throw Eu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nc(...e.split("."))._internalPath}catch{throw Eu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Eu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(O.INVALID_ARGUMENT,l+t+u)}function UE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class BE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ib(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ib extends BE{data(){return super.data()}}function mp(t,e){return typeof e=="string"?pp(t,e):e instanceof nc?e._internalPath:e._delegate._internalPath}/**
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
 */function sb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gp{}class yp extends gp{}function ob(t,e,...n){let r=[];e instanceof gp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof _p).length,l=s.filter(u=>u instanceof vp).length;if(o>1||o>0&&l>0)throw new W(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class vp extends yp{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new vp(e,n,r)}_apply(e){const n=this._parse(e);return zE(e._query,n),new Mr(e.firestore,e.converter,yh(e._query,n))}_parse(e){const n=dp(e.firestore);return function(s,o,l,u,d,f,m){let _;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){zy(m,f);const x=[];for(const b of m)x.push(By(u,s,b));_={arrayValue:{values:x}}}else _=By(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||zy(m,f),_=nb(l,o,m,f==="in"||f==="not-in");return Oe.create(d,f,_)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class _p extends gp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new _p(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)zE(o,u),o=yh(o,u)}(e._query,n),new Mr(e.firestore,e.converter,yh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wp extends yp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new wp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ea(s,o)}(e._query,this._field,this._direction);return new Mr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Cs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function ab(t,e="asc"){const n=e,r=mp("orderBy",t);return wp._create(r,n)}class Ep extends yp{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Ep(e,n,r)}_apply(e){return new Mr(e.firestore,e.converter,gu(e._query,this._limit,this._limitType))}}function lb(t){return Ep._create("limit",t,"F")}function By(t,e,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new W(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fw(e)&&n.indexOf("/")!==-1)throw new W(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!K.isDocumentKey(r))throw new W(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return uy(t,new K(r))}if(n instanceof wt)return uy(t,n._key);throw new W(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ec(n)}.`)}function zy(t,e){if(!Array.isArray(t)||t.length===0)throw new W(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function zE(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class ub{convertValue(e,n="none"){switch(wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Si(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>be(o.doubleValue));return new up(s)}convertGeoPoint(e){return new lp(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Bf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xo(e));default:return null}}convertTimestamp(e){const n=kr(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);pe(uE(r));const i=new Jo(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Gn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function cb(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class fo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $E extends BE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Dl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Dl extends $E{data(e={}){return super.data(e)}}class db{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new fo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Dl(this._firestore,this._userDataWriter,r.key,r,new fo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Dl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new fo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Dl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new fo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:hb(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function hb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
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
 */function fb(t){t=Yn(t,wt);const e=Yn(t.firestore,wa);return WN(ap(e),t._key).then(n=>mb(e,t,n))}class WE extends ub{constructor(e){super(),this.firestore=e}convertBytes(e){return new ws(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function ld(t){t=Yn(t,Mr);const e=Yn(t.firestore,wa),n=ap(e),r=new WE(e);return sb(t._query),qN(n,t._query).then(i=>new db(e,r,t,i))}function pb(t,e,n){t=Yn(t,wt);const r=Yn(t.firestore,wa),i=cb(t.converter,e);return qE(r,[ZN(dp(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,An.none())])}function Dt(t,e,n,...r){t=Yn(t,wt);const i=Yn(t.firestore,wa),s=dp(i);let o;return o=typeof(e=Me(e))=="string"||e instanceof nc?tb(s,"updateDoc",t._key,e,n,r):eb(s,"updateDoc",t._key,e),qE(i,[o.toMutation(t._key,An.exists(!0))])}function qE(t,e){return function(r,i){const s=new Bn;return r.asyncQueue.enqueueAndForget(async()=>DN(await $N(r),i,s)),s.promise}(ap(t),e)}function mb(t,e,n){const r=n.docs.get(e._key),i=new WE(t);return new $E(t,i,e._key,r,new fo(n.hasPendingWrites,n.fromCache),e.converter)}function Ne(t){return new hp("increment",t)}(function(e,n=!0){(function(i){xs=i})(As),xn(new cn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new wa(new hP(r.getProvider("auth-internal")),new gP(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new W(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jo(d.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Qt(iy,"4.7.3",e),Qt(iy,"4.7.3","esm2017")})();const gb={BASE_URL:"/danat-quiz-app/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyA8e7z-aAEuuhQiWapxX7yLNZar_ngsqtk"};var $y={};const yb=()=>{if($y.VITE_FIREBASE_API_KEY)return $y.VITE_FIREBASE_API_KEY;try{if(typeof import.meta<"u"&&gb)return"AIzaSyA8e7z-aAEuuhQiWapxX7yLNZar_ngsqtk"}catch{}},vb={apiKey:yb(),authDomain:"danat-quiz-app.firebaseapp.com",projectId:"danat-quiz-app",storageBucket:"danat-quiz-app.firebasestorage.app",messagingSenderId:"436991893081",appId:"1:436991893081:web:5aaf9cbb3275c7f6139b48",measurementId:"G-QWT2287WC4"},Tp=y0(vb);typeof window<"u"&&W1(Tp);const no=lP(Tp),qe=GN(Tp),Wy="danat_quiz_current_index",ud="danat_quiz_questions_cache_v1",_b=24*60*60*1e3,qy="danat_quiz_leaderboard_cache_v1",wb=5*60*1e3,Eb=[{id:"q1",question:{en:"What is the capital of Saudi Arabia?",ar:"ما هي عاصمة المملكة العربية السعودية؟",fr:"Quelle est la capitale de l'Arabie Saoudite ?"},options:{en:["Jeddah","Riyadh","Dammam","Mecca"],ar:["جدة","الرياض","الدمام","مكة المكرمة"],fr:["Djeddah","Riyad","Dammam","La Mecque"]},correctAnswer:{en:"Riyadh",ar:"الرياض",fr:"Riyad"},points:10,category:{en:"Geography",ar:"جغرافيا",fr:"Géographie"}},{id:"q2",question:{en:"What is the main token of Danat network?",ar:"ما هي العملة الأساسية لشَبكة Danat Coin؟",fr:"Quel est le jeton principal du réseau Danat ?"},options:{en:["ETH","USDT","DNC","BTC"],ar:["ETH","USDT","DNC","BTC"],fr:["ETH","USDT","DNC","BTC"]},correctAnswer:{en:"DNC",ar:"DNC",fr:"DNC"},points:10,category:{en:"Crypto",ar:"كريبتو",fr:"Crypto"}},{id:"q3",question:{en:"How many pillars of Islam are there?",ar:"كم عدد أركان الإسلام؟",fr:"Combien y a-t-il de piliers de l'Islam ?"},options:{en:["4","5","6","7"],ar:["4","5","6","7"],fr:["4","5","6","7"]},correctAnswer:{en:"5",ar:"5",fr:"5"},points:10,category:{en:"General Culture",ar:"ثقافة عامة",fr:"Culture Générale"}}],Hy={العربية:{appName:"دانات كويز",subtitle:"اختبر معلوماتك .. واربح المكافآت",startPlay:"ابدأ الاختبار",rewards:"المكافآت",leaderboard:"لوحة المتصدرين",profile:"ملفي الشخصي",statistics:"إحصائيات",dncBalance:"رصيد DNC",points:"النقاط الحالية",lives:"الأرواح",settings:"الإعدادات",logout:"خروج",adminPanel:"لوحة الإدارة",close:"إغلاق",nextQuestion:"السؤال التالي ➡️",confirmAnswer:"تأكيد الإجابة",connectWallet:"ربط المحفظة (WalletConnect)",walletConnected:"المحفظة متصلة",gamesPlayed:"عدد الألعاب",pointsEarned:"النقاط المكتسبة",levelLabel:"المستوى",emptyLeaderboard:"لا يوجد لاعبون بعد",watchForLife:"📺 شاهد فيديو لحياة إضافية (+1 ❤️)",watchForPoints:"📺 شاهد فيديو لـ 10 نقاط (+10 🪙)",outOfLivesTitle:"انتهت الأرواح! 💔",outOfLivesDesc:"شاهد فيديو إعلاني للحصول على حياة إضافية ومتابعة اللعب.",adsWatched:"الإعلانات المشاهدة",timedBonusTitle:"مكافأة كل 3 ساعات ⏳",timedBonusDesc:"احصل على 5 أرواح مجانية كل 3 ساعات (حد أقصى 10 أرواح في 24 ساعة).",claimBonus:"استلام المكافأة",appLanguage:"لغة التطبيق",changeProfilePic:"تغيير الصورة الشخصية",emailLabel:"البريد الإلكتروني:",appLanguageLabel:"لغة التطبيق:",conversionRate:"معادلة التحويل:",watchAdVideoTitle:"شاهد فيديو إعلاني",watchAdVideoDesc:"واحصل على 10 نقاط إضافية",watchBtn:"مشاهدة",topPlayers:"أفضل اللاعبين",rank:"المركز",player:"اللاعب",pts:"النقاط",loading:"جاري التحميل...",redeemReq:"طلب استبدال",connectBtn:"ربط",downloadCsvReport:"تحميل تقرير اللاعبين الكامل (CSV)",adminRedeemNotice:"مراجعة طلبات استبدال دانات كوين قبل إرسال التوكنز للمحفظة:",approved:"تم الاعتماد",pending:"قيد الانتظار",walletLabel:"المحفظة:",approveAndSend:"اعتماد وإرسال التوكنز",milestoneAdTitle:"إعلان مكافأة كل 10 أسئلة",milestoneAdDesc:"لقد أجبت على 10 أسئلة! شاهد هذا الفيديو القصير للحصول على 10 نقاط (+10 🪙):",pleaseWait:"يرجى الانتظار...",seconds:"ثوانٍ",autoRewardNotice:"ستحصل على المكافأة تلقائياً عند انتهاء الإعلان.",forcedAdTitle:"إعلان جوجل الإجباري",forcedAdDesc:"لقد أنهيت 4 مستويات بنجاح! يلزم الاتصال بالإنترنت ومشاهدة هذا الإعلان القصير للمتابعة:",forcedAdRewardNotice:"ستحصل على 50 نقطة إضافية تلقائياً عند انتهاء الفيديو.",connectWeb3Title:"ربط محفظة Web3",connectWeb3Desc:"أدخل عنوان محفظة إيثريوم (MetaMask / Trust Wallet) لاستلام توكن دانات كوين (DNC):",confirmConnectBtn:"تأكيد وتوصيل المحفظة",selectAvatarTitle:"اختر صورتك الشخصية",backToHome:"العودة للرئيسية",questionNav:"السؤال",ofNav:"من",loginTitle:"دانات كويز | Danat Quiz",loginSubtitle:"سجل دخولك أو أنشئ حساباً لحفظ بياناتك في السحابة",forgotPasswordLabel:"البريد الإلكتروني لاستعادة كلمة المرور",sendResetLink:"إرسال رابط الاستعادة",backToLogin:"العودة لتسجيل الدخول",fullName:"الاسم الكامل",enterName:"أدخل اسمك",email:"البريد الإلكتروني",password:"كلمة المرور",forgotPasswordQuestion:"هل نسيت كلمة المرور؟",loginBtn:"تسجيل الدخول",signupBtn:"إنشاء حساب جديد",noAccountPrompt:"ليس لديك حساب؟ أنشئ حساباً الآن",hasAccountPrompt:"لديك حساب بالفعل؟ سجل الدخول"},English:{appName:"Danat Quiz",subtitle:"Test your knowledge & win rewards",startPlay:"Start Quiz",rewards:"Rewards",leaderboard:"Leaderboard",profile:"My Profile",statistics:"Statistics",dncBalance:"DNC Balance",points:"Current Points",lives:"Lives",settings:"Settings",logout:"Logout",adminPanel:"Admin Panel",close:"Close",nextQuestion:"Next Question ➡️",confirmAnswer:"Confirm Answer",connectWallet:"Connect Wallet (WalletConnect)",walletConnected:"Wallet Connected",gamesPlayed:"Games Played",pointsEarned:"Points Earned",levelLabel:"Level",emptyLeaderboard:"Empty",watchForLife:"📺 Watch Ad for +1 Life (+1 ❤️)",watchForPoints:"📺 Watch Ad for +10 Points (+10 🪙)",outOfLivesTitle:"Out of Lives! 💔",outOfLivesDesc:"Watch a video ad to get an extra life and continue playing.",adsWatched:"Ads Watched",timedBonusTitle:"3-Hour Life Bonus ⏳",timedBonusDesc:"Claim 5 free lives every 3 hours (Max cap 10 lives per 24 hours).",claimBonus:"Claim Bonus",appLanguage:"App Language",changeProfilePic:"Change Profile Picture",emailLabel:"Email:",appLanguageLabel:"App Language:",conversionRate:"Conversion Rate:",watchAdVideoTitle:"Watch Ad Video",watchAdVideoDesc:"And get 10 bonus points",watchBtn:"Watch",topPlayers:"Top Players",rank:"Rank",player:"Player",pts:"Points",loading:"Loading...",redeemReq:"Redeem Request",connectBtn:"Connect",downloadCsvReport:"Download Full Players Report (CSV)",adminRedeemNotice:"Review Danat Coin redemption requests before sending tokens:",approved:"Approved",pending:"Pending",walletLabel:"Wallet:",approveAndSend:"Approve & Send Tokens",milestoneAdTitle:"10-Questions Milestone Ad",milestoneAdDesc:"You answered 10 questions! Watch this short video to earn 10 points (+10 🪙):",pleaseWait:"Please wait...",seconds:"seconds",autoRewardNotice:"You will automatically receive your reward when the ad finishes.",forcedAdTitle:"Forced Google Ad",forcedAdDesc:"You successfully finished 4 levels! Internet connection and watching this short ad are required to continue:",forcedAdRewardNotice:"You will automatically receive 50 bonus points when the video ends.",connectWeb3Title:"Connect Web3 Wallet",connectWeb3Desc:"Enter Ethereum wallet address (MetaMask / Trust Wallet) to receive Danat Coin (DNC):",confirmConnectBtn:"Confirm & Connect Wallet",selectAvatarTitle:"Select Your Avatar",backToHome:"Back to Home",questionNav:"Question",ofNav:"of",loginTitle:"Danat Quiz",loginSubtitle:"Log in or create an account to save your data in the cloud",forgotPasswordLabel:"Email to reset password",sendResetLink:"Send Reset Link",backToLogin:"Back to Login",fullName:"Full Name",enterName:"Enter your name",email:"Email",password:"Password",forgotPasswordQuestion:"Forgot password?",loginBtn:"Login",signupBtn:"Create New Account",noAccountPrompt:"Don't have an account? Create one now",hasAccountPrompt:"Already have an account? Login"},Français:{appName:"Danat Quiz",subtitle:"Testez vos connaissances et gagnez des récompenses",startPlay:"Commencer le quiz",rewards:"Récompenses",leaderboard:"Classement",profile:"Mon Profil",statistics:"Statistiques",dncBalance:"Solde DNC",points:"Points Actuels",lives:"Vies",settings:"Paramètres",logout:"Déconnexion",adminPanel:"Panneau d'administration",close:"Fermer",nextQuestion:"Question Suivante ➡️",confirmAnswer:"Confirmer la réponse",connectWallet:"Connecter le portefeuille (WalletConnect)",walletConnected:"Portefeuille connecté",gamesPlayed:"Parties jouées",pointsEarned:"Points gagnés",levelLabel:"Niveau",emptyLeaderboard:"Aucun joueur pour le moment",watchForLife:"📺 Regarder une pub pour +1 Vie (+1 ❤️)",watchForPoints:"📺 Regarder une pub pour +10 Points (+10 🪙)",outOfLivesTitle:"Plus de vies ! 💔",outOfLivesDesc:"Regardez une vidéo publicitaire pour obtenir une vie supplémentaire et continuer à jouer.",adsWatched:"Publicités regardées",timedBonusTitle:"Bonus de vie toutes les 3 heures ⏳",timedBonusDesc:"Réclamez 5 vies gratuites toutes les 3 heures (Limite max 10 vies par 24h).",claimBonus:"Réclamer le bonus",appLanguage:"Langue de l'application",changeProfilePic:"Changer la photo de profil",emailLabel:"E-mail :",appLanguageLabel:"Langue de l'application :",conversionRate:"Taux de conversion :",watchAdVideoTitle:"Regarder une vidéo publicitaire",watchAdVideoDesc:"Et obtenez 10 points bonus",watchBtn:"Regarder",topPlayers:"Meilleurs Joueurs",rank:"Rang",player:"Joueur",pts:"Points",loading:"Chargement...",redeemReq:"Demande d'échange",connectBtn:"Connecter",downloadCsvReport:"Télécharger le rapport complet des joueurs (CSV)",adminRedeemNotice:"Examinez les demandes d'échange de Danat Coin avant d'envoyer des jetons :",approved:"Approuvé",pending:"En attente",walletLabel:"Portefeuille :",approveAndSend:"Approuver et envoyer les jetons",milestoneAdTitle:"Publicité d'étape tous les 10 questions",milestoneAdDesc:"Vous avez répondu à 10 questions ! Regardez cette courte vidéo pour gagner 10 points (+10 🪙) :",pleaseWait:"Veuillez patienter...",seconds:"secondes",autoRewardNotice:"Vous recevrez automatiquement votre récompense à la fin de la publicité.",forcedAdTitle:"Publicité Google obligatoire",forcedAdDesc:"Vous avez terminé 4 niveaux avec succès ! Une connexion Internet et le visionnage de cette courte publicité sont requis pour continuer :",forcedAdRewardNotice:"Vous recevrez automatiquement 50 points bonus à la fin de la vidéo.",connectWeb3Title:"Connecter le portefeuille Web3",connectWeb3Desc:"Entrez l'adresse de votre portefeuille Ethereum (MetaMask / Trust Wallet) pour recevoir Danat Coin (DNC) :",confirmConnectBtn:"Confirmer et connecter le portefeuille",selectAvatarTitle:"Choisissez votre avatar",backToHome:"Retour à l'accueil",questionNav:"Question",ofNav:"sur",loginTitle:"Danat Quiz",loginSubtitle:"Connectez-vous ou créez un compte pour enregistrer vos données dans le cloud",forgotPasswordLabel:"E-mail pour réinitialiser le mot de passe",sendResetLink:"Envoyer le lien de réinitialisation",backToLogin:"Retour à la connexion",fullName:"Nom complet",enterName:"Entrez votre nom",email:"E-mail",password:"Mot de passe",forgotPasswordQuestion:"Mot de passe oublié ?",loginBtn:"Se connecter",signupBtn:"Créer un nouveau compte",noAccountPrompt:"Vous n'avez pas de compte ? Créez-en un maintenant",hasAccountPrompt:"Vous avez déjà un compte ? Connectez-vous"}};function Tb(){const[t,e]=ne.useState(null),[n,r]=ne.useState("login"),[i,s]=ne.useState(""),[o,l]=ne.useState(""),[u,d]=ne.useState(""),[f,m]=ne.useState(""),[_,x]=ne.useState(""),[b,D]=ne.useState("home"),[R,S]=ne.useState({name:"أحمد",email:"ahmad.dnc@danatstores.com",language:"English",level:1,points:0,dncBalance:0,totalGames:0,totalEarnedPoints:0,totalQuestionsAnswered:0,lastSpiritClaimTime:0,dailyClaimedLives:0,lastDailyResetTime:0,walletConnected:!1,walletAddress:"",avatar:"avatar-man-ghutra.png"}),E=R.language==="العربية"?"ar":R.language==="Français"?"fr":"en",g=Hy[R.language]||Hy.English,[L,U]=ne.useState(3),[F,T]=ne.useState(()=>parseInt(localStorage.getItem("videosWatched")||"0",10)),[v,w]=ne.useState(0),[A,C]=ne.useState(!1),[P,I]=ne.useState(5),[It,Jt]=ne.useState(!1),[jr,it]=ne.useState(!1),[$,G]=ne.useState(!1),[J,ye]=ne.useState(""),[he,Ie]=ne.useState(!1),[Zt,zt]=ne.useState(5),[en,$t]=ne.useState(!1),[sc,Ta]=ne.useState(5),[Fr,Ur]=ne.useState([]),[ks,Br]=ne.useState(!1),[Wt,Ci]=ne.useState(()=>{try{const k=localStorage.getItem(ud);if(k){const z=JSON.parse(k);if(Array.isArray(z.questions)&&z.questions.length>0)return z.questions}}catch(k){console.warn("Question cache could not be read:",k)}return Eb}),[Nt,Ri]=ne.useState(()=>{const k=localStorage.getItem(Wy),z=k!==null?parseInt(k,10):0;return!isNaN(z)&&z>=0?z:0}),[oc,Ia]=ne.useState(0),[pn,Ns]=ne.useState(null),[Pi,ki]=ne.useState(!1),[Aa,bs]=ne.useState(0),[Qe,Be]=ne.useState(!0);ne.useEffect(()=>{localStorage.setItem(Wy,Nt.toString())},[Nt]),ne.useEffect(()=>{if(b==="leaderboard"){async function k(){Br(!0);try{const z=localStorage.getItem(qy);if(z){const re=JSON.parse(z);if(Date.now()-re.timestamp<wb&&Array.isArray(re.users)){Ur(re.users),Br(!1);return}}const Z=ob(ad(qe,"users"),ab("points","desc"),lb(20)),Y=(await ld(Z)).docs.map(re=>({id:re.id,name:re.data().name||"لاعب",avatar:re.data().avatar||"avatar-man-ghutra.png",points:re.data().points??re.data().spirits??0}));Ur(Y),localStorage.setItem(qy,JSON.stringify({timestamp:Date.now(),users:Y}))}catch(z){console.error("Failed to fetch leaderboard:",z)}finally{Br(!1)}}k()}},[b]);const[er,Ds]=ne.useState([{id:"1",user:"أحمد",points:1e3,dnc:1,wallet:"0x71C...39A",status:"PENDING",date:"2026-11-02"},{id:"2",user:"محمد علي",points:5e3,dnc:5,wallet:"0x38B...12F",status:"APPROVED",date:"2026-11-01"}]),Sa=[{id:"avatar-man-ghutra.png"},{id:"avatar-woman-afro.png"},{id:"avatar-woman-hijab.png"},{id:"avatar_kuwaiti.png"},{id:"avatar_boy.png"},{id:"avatar_brunette.png"},{id:"avatar_blonde.png"}],gt=k=>`/danat-quiz-app/assets/${k}`;ne.useEffect(()=>{async function k(){try{const z=localStorage.getItem(ud);if(z){const Y=JSON.parse(z);if(Date.now()-Y.timestamp<_b&&Array.isArray(Y.questions)&&Y.questions.length>0){Ci(Y.questions),Ri($e=>$e<Y.questions.length?$e:0),Be(!1);return}}const se=(await ld(ad(qe,"questions"))).docs.map(Y=>({id:Y.id,...Y.data()}));se.length>0&&(Ci(se),Ri(Y=>Y<se.length?Y:0),localStorage.setItem(ud,JSON.stringify({timestamp:Date.now(),questions:se})))}catch(z){console.error("Firestore questions fetch failed, cached/fallback questions used:",z)}finally{Be(!1)}}k()},[]),ne.useEffect(()=>{const k=YC(no,async z=>{if(z){e(z);const Z=yt(qe,"users",z.uid),se=await fb(Z);if(se.exists()){const Y=se.data(),re=Y.totalQuestionsAnswered||0,$e=Math.floor(re/50)+1;S(ve=>({...ve,name:Y.name||z.email.split("@")[0],email:z.email,points:Y.points??Y.spirits??ve.points,dncBalance:Y.dncBalance??ve.dncBalance,level:Y.level??$e,totalGames:Y.totalGames??ve.totalGames,totalEarnedPoints:Y.totalEarnedPoints??Y.totalEarnedSpirits??ve.totalEarnedPoints,totalQuestionsAnswered:re,lastSpiritClaimTime:Y.lastSpiritClaimTime||0,dailyClaimedLives:Y.dailyClaimedLives||0,lastDailyResetTime:Y.lastDailyResetTime||0,walletConnected:Y.walletConnected??ve.walletConnected,walletAddress:Y.walletAddress??ve.walletAddress,avatar:Y.avatar??ve.avatar,language:Y.language??ve.language}))}}else e(null)});return()=>k()},[]);const zr=async k=>{k.preventDefault(),m(""),x("");try{const Z=(await HC(no,i,o)).user.uid,se={name:u||"لاعب دانات",email:i,points:0,dncBalance:0,level:1,totalGames:0,totalEarnedPoints:0,totalQuestionsAnswered:0,lastSpiritClaimTime:0,dailyClaimedLives:0,lastDailyResetTime:0,walletConnected:!1,walletAddress:"",avatar:"avatar-man-ghutra.png",language:"English",createdAt:new Date().toISOString()};await pb(yt(qe,"users",Z),se),s(""),l(""),d("")}catch(z){m("فشل إنشاء الحساب: "+z.message)}},xa=async k=>{k.preventDefault(),m(""),x("");try{await KC(no,i,o),s(""),l("")}catch(z){m("فشل تسجيل الدخول: "+z.message)}},Ca=async k=>{if(k.preventDefault(),m(""),x(""),!i){m("يرجى إدخال بريدك الإلكتروني أولاً.");return}try{await qC(no,i),x("تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.")}catch(z){m("فشل الإرسال: "+z.message)}},Vs=()=>{XC(no)},Ra=async k=>{S(z=>({...z,language:k})),t&&await Dt(yt(qe,"users",t.uid),{language:k})},ac=async()=>{try{const k=await ld(ad(qe,"users"));let z="data:text/csv;charset=utf-8,";z+=`Name,Email,Points,DNC Balance,Total Games,Wallet Address
`,k.forEach(Y=>{const re=Y.data(),$e=['"'+(re.name||"")+'"','"'+(re.email||"")+'"',re.points||re.spirits||0,re.dncBalance||0,re.totalGames||0,'"'+(re.walletAddress||"Not Connected")+'"'].join(",");z+=$e+`
`});const Z=encodeURI(z),se=document.createElement("a");se.setAttribute("href",Z),se.setAttribute("download",`danat_quiz_players_${new Date().toISOString().split("T")[0]}.csv`),document.body.appendChild(se),se.click(),document.body.removeChild(se)}catch(k){alert("خطأ أثناء تصدير البيانات: "+k.message)}},Ls=k=>k?typeof k.question=="object"&&k.question!==null?k.question[E]||k.question.en||k.question.ar||k.question.fr||"":k.question||"":"",Os=k=>k?typeof k.options=="object"&&!Array.isArray(k.options)&&k.options!==null?k.options[E]||k.options.en||k.options.ar||k.options.fr||[]:Array.isArray(k.options)?k.options:[]:[],Pa=k=>!k||!k.category?R.language==="العربية"?"عام":R.language==="Français"?"Général":"General":typeof k.category=="object"?k.category[E]||k.category.en||k.category.ar||k.category.fr||"":k.category,$r=()=>{$t(!0);let k=5;Ta(k);const z=setInterval(async()=>{k-=1,Ta(k),k<=0&&(clearInterval(z),$t(!1),Wr(),S(Z=>({...Z,points:Z.points+10,totalEarnedPoints:Z.totalEarnedPoints+10})),t&&await Dt(yt(qe,"users",t.uid),{points:Ne(10),totalEarnedPoints:Ne(10),rewardedAdsWatched:Ne(1)}),alert(R.language==="العربية"?"🎉 أتممت 10 أسئلة! شاهدت إعلان المكافأة وحصلت على 10 نقاط (+10 🪙)!":R.language==="Français"?"🎉 10 questions terminées ! Vous avez regardé la publicité et gagné 10 points (+10 🪙) !":"🎉 Completed 10 questions! Watched rewarded ad and earned 10 points (+10 🪙)!"))},1e3)},Ms=async()=>{if(pn===null||L<=0)return;const k=Wt[Nt],Z=Os(k)[pn];let se=!1;if(typeof k.correctAnswer=="object"&&k.correctAnswer!==null){const ve=k.correctAnswer[E]||k.correctAnswer.en;se=Z===ve||pn===k.correctAnswer}else typeof k.correctAnswer=="number"?se=pn===k.correctAnswer:se=Z===k.correctAnswer;const Y=R.totalQuestionsAnswered+1,re=Math.floor(Y/50)+1,$e=oc+1;if(Ia($e),se){const ve=k.points||10;bs(We=>We+ve),S(We=>({...We,points:We.points+ve,totalEarnedPoints:We.totalEarnedPoints+ve,totalQuestionsAnswered:Y,level:re})),t&&await Dt(yt(qe,"users",t.uid),{points:Ne(ve),totalEarnedPoints:Ne(ve),totalQuestionsAnswered:Ne(1),level:re})}else U(We=>Math.max(0,We-1)),S(We=>({...We,points:Math.max(0,We.points-5),totalQuestionsAnswered:Y,level:re})),t&&await Dt(yt(qe,"users",t.uid),{points:Ne(-5),totalQuestionsAnswered:Ne(1),level:re});ki(!0),$e%10===0&&$r()},js=async()=>{if(Ns(null),ki(!1),Nt+1<Wt.length)Ri(k=>k+1);else{const k=v+1;w(k);const z=R.totalGames+1;S(Z=>({...Z,totalGames:z})),t&&await Dt(yt(qe,"users",t.uid),{totalGames:Ne(1)}),Ri(0),k>=4?(w(0),Pn()):D("home")}},Pn=()=>{C(!0);let k=5;I(k);const z=setInterval(async()=>{k-=1,I(k),k<=0&&(clearInterval(z),C(!1),S(Z=>({...Z,points:Z.points+50,totalEarnedPoints:Z.totalEarnedPoints+50})),t&&await Dt(yt(qe,"users",t.uid),{points:Ne(50),totalEarnedPoints:Ne(50),forcedAdsWatched:Ne(1)}),alert(R.language==="العربية"?"🌐 تم الاتصال بالإنترنت: شاهدت إعلان جوجل الإجباري وحصلت على 50 نقطة!":R.language==="Français"?"🌐 Connecté : Vous avez regardé la publicité Google et gagné 50 points !":"🌐 Connected: Watched forced ad and earned 50 points!"),D("home"))},1e3)},Wr=()=>{const k=F+1;T(k),localStorage.setItem("videosWatched",k.toString())},qr=async()=>{Wr(),U(k=>k+1),t&&await Dt(yt(qe,"users",t.uid),{rewardedAdsWatched:Ne(1)}),alert(R.language==="العربية"?"حصلت على حياة إضافية! ❤️":R.language==="Français"?"Vous avez gagné 1 vie supplémentaire ! ❤️":"You earned 1 Extra Life! ❤️")},ka=async()=>{Wr(),bs(k=>k+10),S(k=>({...k,points:k.points+10,totalEarnedPoints:k.totalEarnedPoints+10})),t&&await Dt(yt(qe,"users",t.uid),{points:Ne(10),totalEarnedPoints:Ne(10),rewardedAdsWatched:Ne(1)}),alert(R.language==="العربية"?"حصلت على 10 نقاط إضافية! 🪙":R.language==="Français"?"Vous avez gagné 10 points bonus ! 🪙":"You earned 10 Bonus Points! 🪙")},Hr=async()=>{const k=Date.now(),z=R.lastSpiritClaimTime||0,Z=(k-z)/(1e3*60*60);if(Z<3){const st=(3-Z).toFixed(1);alert(R.language==="العربية"?`يرجى الانتظار ${st} ساعة لقطف الأرواح المجانية القادمة!`:R.language==="Français"?`Veuillez patienter ${st} heures pour réclamer vos prochaines vies gratuites !`:`Please wait ${st} hours to claim your next free lives!`);return}const se=R.lastDailyResetTime||0,Y=(k-se)/(1e3*60*60);let re=R.dailyClaimedLives||0,$e=se;if(Y>=24&&(re=0,$e=k),re>=10){alert(R.language==="العربية"?"⚠️ وصلت إلى الحد الأقصى للأرواح المجانية (10 أرواح في 24 ساعة).":R.language==="Français"?"⚠️ Vous avez atteint la limite maximale de vies gratuites (10 vies par 24 heures).":"⚠️ You reached the max limit for free lives (10 lives per 24 hours).");return}const ve=5,We=re+ve;U(st=>st+ve),S(st=>({...st,lastSpiritClaimTime:k,dailyClaimedLives:We,lastDailyResetTime:$e})),t&&await Dt(yt(qe,"users",t.uid),{lastSpiritClaimTime:k,dailyClaimedLives:We,lastDailyResetTime:$e}),alert(R.language==="العربية"?"🎉 تهانينا! حصلت على 5 أرواح مجانية (+5 ❤️).":R.language==="Français"?"🎉 Félicitations ! Vous avez réclamé 5 vies gratuites (+5 ❤️).":"🎉 Congrats! You claimed 5 free lives (+5 ❤️).")},Na=async k=>{const z=k||"0x71C7656EC7ab88b098defB751B7401B5f6d8939A";S(Z=>({...Z,walletConnected:!0,walletAddress:z})),Jt(!1),t&&await Dt(yt(qe,"users",t.uid),{walletConnected:!0,walletAddress:z})},ze=async()=>{Ie(!0);let k=5;zt(k);const z=setInterval(async()=>{k-=1,zt(k),k<=0&&(clearInterval(z),Ie(!1),Wr(),S(Z=>({...Z,points:Z.points+10,totalEarnedPoints:Z.totalEarnedPoints+10})),t&&await Dt(yt(qe,"users",t.uid),{points:Ne(10),totalEarnedPoints:Ne(10),rewardedAdsWatched:Ne(1)}),alert(R.language==="العربية"?"🎉 تهانينا! حصلت على 10 نقاط إضافية.":R.language==="Français"?"🎉 Félicitations ! Vous avez gagné 10 points bonus.":"🎉 Congrats! Earned 10 bonus points."))},1e3)},ba=async k=>{S(z=>({...z,avatar:k})),it(!1),t&&await Dt(yt(qe,"users",t.uid),{avatar:k})},Kr=async()=>{if(!R.walletConnected){alert(R.language==="العربية"?"يرجى ربط محفظتك أولاً من صفحة الملف الشخصي!":R.language==="Français"?"Veuillez d'abord connecter votre portefeuille dans le profil !":"Please connect your wallet first from the profile page!"),D("profile");return}if(R.points<1e3){alert(R.language==="العربية"?"رصيدك غير كافٍ. الحد الأدنى للتحويل هو 1,000 نقطة.":R.language==="Français"?"Solde insuffisant. Le transfert minimum est de 1 000 points.":"Insufficient balance. Minimum transfer is 1,000 points.");return}const k=R.points-1e3,z=R.dncBalance+1;S(se=>({...se,points:k,dncBalance:z})),t&&await Dt(yt(qe,"users",t.uid),{points:Ne(-1e3),dncBalance:Ne(1)});const Z={id:Date.now().toString(),user:R.name,points:1e3,dnc:1,wallet:R.walletAddress,status:"PENDING",date:new Date().toISOString().split("T")[0]};Ds([Z,...er]),alert(R.language==="العربية"?"تم تقديم طلب الاستبدال بنجاح! بانتظار موافقة المسؤول.":R.language==="Français"?"Demande d'échange soumise avec succès ! En attente d'approbation.":"Redemption request submitted successfully! Awaiting admin approval.")},Gr=k=>{Ds(er.map(z=>z.id===k?{...z,status:"APPROVED"}:z))};return t?y.jsx("div",{className:"min-h-screen bg-[#1a0833] text-white font-sans flex justify-center items-center p-0 md:p-4",dir:R.language==="العربية"?"rtl":"ltr",children:y.jsxs("div",{style:{backgroundImage:`url(${gt("main_background.jpg")})`,backgroundSize:"cover",backgroundPosition:"center"},className:"w-full max-w-md bg-[#1a0833] border-0 md:border-4 md:border-yellow-500/40 rounded-none md:rounded-[40px] shadow-[0_0_50px_rgba(147,51,234,0.3)] overflow-hidden min-h-screen md:min-h-[844px] flex flex-col justify-between relative",children:[y.jsxs("div",{className:"bg-[#120524]/90 px-6 py-2.5 flex justify-between items-center text-xs text-slate-200 border-b border-purple-500/30 z-10",children:[y.jsx("span",{className:"font-bold text-white",children:"9:41"}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsxs("button",{onClick:()=>D("admin"),className:"text-[10px] bg-yellow-500/20 text-yellow-400 px-2.5 py-1 rounded-lg border border-yellow-500/40 font-bold flex items-center gap-1 shadow",children:[y.jsx(vg,{className:"w-3.5 h-3.5"})," ",g.adminPanel]}),y.jsx("span",{className:"text-purple-400/50",children:"|"}),y.jsxs("button",{onClick:Vs,className:"text-[10px] bg-red-500/20 text-red-300 px-2 py-1 rounded-lg border border-red-500/40 font-bold flex items-center gap-1 shadow",title:g.logout,children:[y.jsx(WA,{className:"w-3 h-3"})," ",g.logout]}),y.jsx("span",{children:"📶 🔋"})]})]}),y.jsxs("div",{className:"flex-1 overflow-y-auto pb-36 px-4 pt-4 relative z-10",children:[y.jsxs("div",{className:"w-full bg-[#240a47]/95 rounded-2xl p-3 border border-yellow-500/40 flex justify-between items-center shadow-lg backdrop-blur-md mb-4",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsxs("div",{className:"bg-rose-950/80 border border-rose-500/50 px-2.5 py-1 rounded-xl flex items-center gap-1 text-xs font-bold text-rose-300",children:["❤️ ",y.jsx("span",{children:L})]}),y.jsxs("div",{className:"bg-purple-950/80 border border-purple-400/50 px-2.5 py-1 rounded-xl flex items-center gap-1 text-xs font-bold text-purple-200",children:["🪙 ",y.jsx("span",{children:R.points.toLocaleString()})]})]}),y.jsxs("div",{className:"bg-[#0f041d]/90 px-3 py-1 rounded-xl border border-yellow-500/40 text-xs font-black text-yellow-400 flex items-center gap-1",children:[y.jsx("span",{children:R.dncBalance})," ",y.jsx("span",{className:"text-[10px] text-slate-300",children:"DNC"})]})]}),b==="home"&&y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsxs("div",{className:"relative w-full h-60 rounded-3xl p-4 border-2 border-yellow-500/50 text-center shadow-[0_0_30px_rgba(234,179,8,0.25)] overflow-hidden flex flex-col justify-between",children:[y.jsx("img",{src:gt("dnc_coin.png"),alt:"Danat Coin Background",className:"absolute inset-0 w-full h-full object-fill z-0"}),y.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1a0833]/90 via-[#1a0833]/40 to-transparent z-0"}),y.jsx("div",{className:"w-full flex justify-start items-center relative z-10",children:y.jsx("button",{onClick:()=>G(!0),className:"p-2.5 bg-[#2a0c52]/90 hover:bg-[#3b1275] rounded-full text-yellow-400 border border-yellow-500/50 shadow-lg backdrop-blur-md",title:g.settings,children:y.jsx(qA,{className:"w-4 h-4"})})}),y.jsxs("div",{className:"relative z-10 flex flex-col items-center pb-1",children:[y.jsx("h1",{className:"text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]",children:g.appName}),y.jsx("p",{className:"text-xs text-yellow-100 mt-0.5 font-bold drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]",children:g.subtitle})]})]}),y.jsxs("div",{className:"w-full bg-[#240a47]/90 rounded-2xl p-4 border border-yellow-500/40 flex justify-between items-center shadow-lg backdrop-blur-md",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsxs("div",{className:"relative cursor-pointer group",onClick:()=>it(!0),children:[y.jsx("img",{src:gt(R.avatar),alt:"Player Portrait",className:"w-12 h-12 rounded-full border-2 border-yellow-400 object-cover shadow-xl group-hover:scale-105 transition"}),y.jsxs("span",{className:"absolute -bottom-1 -right-1 bg-yellow-500 text-slate-950 text-[10px] font-black px-1.5 py-0.2 rounded-full shadow",children:["★ ",R.level]})]}),y.jsxs("div",{children:[y.jsx("div",{className:"font-bold text-white text-base",children:R.name}),y.jsxs("div",{className:"text-xs text-yellow-400 font-bold",children:[g.levelLabel," ",R.level]})]})]}),y.jsxs("div",{className:"text-left bg-[#0f041d]/90 px-3.5 py-2 rounded-xl border border-yellow-500/40 shadow-inner",children:[y.jsx("div",{className:"text-[10px] text-slate-300",children:g.dncBalance}),y.jsxs("div",{className:"text-sm font-black text-yellow-400 flex items-center gap-1",children:[R.dncBalance.toLocaleString()," ",y.jsx("span",{className:"text-xs",children:"D"})]})]})]}),y.jsxs("div",{className:"w-full bg-[#240a47]/90 rounded-2xl p-3.5 border border-purple-400/40 text-center shadow-lg",children:[y.jsxs("div",{className:"text-xs font-bold text-yellow-300 mb-2",children:["📺 ",g.watchForLife.split("(")[0]]}),y.jsxs("div",{className:"flex gap-2 justify-center",children:[y.jsx("button",{onClick:qr,className:"flex-1 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl shadow border border-rose-400/40",children:"+1 ❤️"}),y.jsx("button",{onClick:ka,className:"flex-1 py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow border border-sky-400/40",children:"+10 🪙"})]})]}),y.jsx("button",{onClick:()=>D("quiz"),className:"w-full py-4 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black text-xl rounded-2xl shadow-xl shadow-yellow-500/30 border-b-4 border-amber-700 active:translate-y-1 transition flex items-center justify-center gap-3",children:g.startPlay})]}),b==="statistics"&&y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsxs("div",{className:"text-center my-2",children:[y.jsx("span",{className:"text-4xl",children:"📊"}),y.jsx("h2",{className:"text-2xl font-black text-yellow-400 mt-2",children:g.statistics})]}),y.jsxs("div",{className:"w-full grid grid-cols-2 gap-3",children:[y.jsxs("div",{className:"bg-[#240a47] p-4 rounded-2xl border border-purple-400/40 text-center shadow",children:[y.jsx("div",{className:"text-xs text-slate-300 mb-1",children:g.gamesPlayed}),y.jsx("div",{className:"text-2xl font-black text-white",children:R.totalGames})]}),y.jsxs("div",{className:"bg-[#240a47] p-4 rounded-2xl border border-purple-400/40 text-center shadow",children:[y.jsx("div",{className:"text-xs text-slate-300 mb-1",children:g.levelLabel}),y.jsxs("div",{className:"text-2xl font-black text-yellow-400",children:["★ ",R.level]})]}),y.jsxs("div",{className:"bg-[#240a47] p-4 rounded-2xl border border-purple-400/40 text-center shadow",children:[y.jsx("div",{className:"text-xs text-slate-300 mb-1",children:g.pointsEarned}),y.jsx("div",{className:"text-xl font-black text-purple-300",children:R.totalEarnedPoints.toLocaleString()})]}),y.jsxs("div",{className:"bg-[#240a47] p-4 rounded-2xl border border-purple-400/40 text-center shadow",children:[y.jsx("div",{className:"text-xs text-slate-300 mb-1",children:g.adsWatched}),y.jsx("div",{className:"text-xl font-black text-yellow-400",children:F})]})]}),y.jsx("button",{onClick:()=>D("home"),className:"w-full mt-4 py-3 bg-[#240a47] hover:bg-[#320d63] border border-purple-400/40 text-white font-bold rounded-xl transition text-xs",children:g.backToHome})]}),b==="quiz"&&y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsxs("div",{className:"w-full flex items-center justify-between gap-3",children:[y.jsx("button",{onClick:()=>D("home"),className:"p-2.5 bg-[#240a47] rounded-xl text-slate-200 font-bold text-xs border border-purple-400/40",children:"⏸"}),y.jsx("div",{className:"flex-1 bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-purple-400/40",children:y.jsx("div",{className:"bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-300",style:{width:`${(Nt+1)/Wt.length*100}%`}})}),y.jsxs("div",{className:"flex items-center gap-1 bg-[#240a47] px-3 py-1.5 rounded-xl text-yellow-400 text-xs font-bold border border-purple-400/40",children:["❤️ ",L]})]}),L===0?y.jsxs("div",{className:"w-full bg-rose-950/80 border-2 border-rose-500 rounded-2xl p-6 text-center space-y-4 shadow-xl my-4",children:[y.jsx("h3",{className:"text-xl font-black text-rose-300",children:g.outOfLivesTitle}),y.jsx("p",{className:"text-xs text-slate-200 leading-relaxed",children:g.outOfLivesDesc}),y.jsx("button",{onClick:qr,className:"w-full py-3.5 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white font-black text-sm rounded-xl shadow-lg transition",children:g.watchForLife})]}):y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"flex justify-center",children:y.jsxs("div",{className:"bg-purple-600/40 border border-purple-400 text-purple-200 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow",children:[Pa(Wt[Nt])," (",g.questionNav," ",Nt+1," ",g.ofNav," ",Wt.length,")"]})}),y.jsx("div",{className:"w-full bg-[#240a47]/90 rounded-2xl p-6 border border-purple-400/40 text-center shadow-xl my-2",children:y.jsx("h3",{className:"text-lg font-bold text-white leading-relaxed",children:Ls(Wt[Nt])})}),y.jsx("div",{className:"w-full space-y-3",children:Os(Wt[Nt]).map((k,z)=>{const Z=pn===z,se=Wt[Nt];let Y=z===se.correctAnswer;if(typeof se.correctAnswer=="object"&&se.correctAnswer!==null){const $e=se.correctAnswer[E]||se.correctAnswer.en;Y=k===$e}else typeof se.correctAnswer=="string"&&(Y=k===se.correctAnswer);let re="bg-[#240a47]/80 border-purple-400/30 text-slate-100 hover:bg-[#320d63]";return Pi?Y?re="bg-emerald-600/40 border-emerald-400 text-emerald-200":Z&&(re="bg-red-600/40 border-red-400 text-red-200"):Z&&(re="bg-yellow-600/40 border-yellow-400 text-yellow-200"),y.jsxs("button",{disabled:Pi,onClick:()=>Ns(z),className:`w-full py-3.5 px-5 rounded-2xl font-bold text-sm flex items-center justify-between transition border shadow ${re}`,children:[y.jsx("span",{children:k}),Pi&&Y&&y.jsx(gg,{className:"w-5 h-5 text-emerald-400"})]},z)})}),Pi?y.jsx("button",{onClick:js,className:"w-full mt-4 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-sm rounded-2xl shadow-xl transition",children:g.nextQuestion}):y.jsx("button",{onClick:Ms,disabled:pn===null,className:"w-full mt-4 py-3.5 bg-gradient-to-r from-yellow-400 to-amber-500 disabled:opacity-50 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black text-sm rounded-2xl shadow-xl transition",children:g.confirmAnswer})]})]}),b==="rewards"&&y.jsxs("div",{className:"flex flex-col gap-5",children:[y.jsxs("div",{className:"text-center my-2 flex flex-col items-center",children:[y.jsx("img",{src:gt("dnc_coin.png"),alt:"Logo",className:"w-24 h-24 object-contain mb-2 drop-shadow-lg"}),y.jsx("h2",{className:"text-2xl font-black text-yellow-400 bg-amber-500/20 px-6 py-1.5 rounded-full border border-amber-400/40 shadow",children:g.rewards})]}),y.jsxs("div",{className:"w-full bg-gradient-to-br from-amber-900/40 to-[#240a47] rounded-2xl p-4 border border-amber-500/40 flex items-center justify-between gap-3 shadow-lg",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("div",{className:"w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 text-lg font-bold",children:"⏳"}),y.jsxs("div",{children:[y.jsx("div",{className:"text-xs font-bold text-white",children:g.timedBonusTitle}),y.jsx("div",{className:"text-[10px] text-amber-300",children:g.timedBonusDesc})]})]}),y.jsx("button",{onClick:Hr,className:"bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs transition shadow",children:g.claimBonus})]}),y.jsxs("div",{className:"w-full bg-[#240a47]/90 rounded-2xl p-5 border border-purple-400/40 flex justify-between items-center shadow-lg",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("div",{className:"w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center",children:y.jsx("img",{src:gt("dnc_coin.png"),alt:"Coin",className:"w-8 h-8 object-contain"})}),y.jsxs("div",{children:[y.jsx("div",{className:"text-xs text-slate-300",children:g.points}),y.jsx("div",{className:"text-2xl font-black text-purple-300",children:R.points.toLocaleString()})]})]}),y.jsx("button",{onClick:ze,className:"bg-purple-600 hover:bg-purple-500 text-white w-9 h-9 rounded-full font-bold text-xl flex items-center justify-center shadow",children:"+"})]}),y.jsxs("div",{className:"w-full bg-[#240a47]/90 rounded-2xl p-5 border border-yellow-500/40 flex justify-between items-center shadow-lg",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("img",{src:gt("dnc_coin.png"),alt:"Logo",className:"w-10 h-10 object-contain"}),y.jsxs("div",{children:[y.jsx("div",{className:"text-xs text-slate-300",children:g.dncBalance}),y.jsx("div",{className:"text-2xl font-black text-yellow-400",children:R.dncBalance.toLocaleString()})]})]}),y.jsx("button",{onClick:Kr,className:"bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition shadow",children:g.redeemReq})]}),y.jsxs("div",{className:"w-full bg-[#0d031f]/80 rounded-xl p-3.5 border border-purple-400/30 text-center text-xs text-slate-200 shadow",children:[y.jsx("span",{className:"font-bold text-yellow-400",children:g.conversionRate})," 1,000 ",g.points," = 1 DNC"]}),y.jsxs("div",{className:"w-full bg-gradient-to-br from-purple-900/50 to-[#240a47] rounded-2xl p-4 border border-purple-500/40 flex items-center justify-between gap-3 shadow-lg",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("div",{className:"w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300",children:y.jsx(qc,{className:"w-5 h-5"})}),y.jsxs("div",{children:[y.jsx("div",{className:"text-xs font-bold text-white",children:g.watchAdVideoTitle}),y.jsx("div",{className:"text-[10px] text-purple-300",children:g.watchAdVideoDesc})]})]}),y.jsx("button",{onClick:ze,disabled:he,className:"bg-purple-600 hover:bg-purple-500 disabled:bg-purple-950 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition flex items-center gap-1.5 shadow",children:he?`${Zt}s...`:g.watchBtn})]})]}),b==="leaderboard"&&y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsxs("div",{className:"text-center my-2",children:[y.jsx("img",{src:gt("trophy_large.png"),alt:"Trophy",className:"w-14 h-14 mx-auto mb-1 object-contain"}),y.jsx("h2",{className:"text-2xl font-black text-yellow-400",children:g.leaderboard})]}),y.jsx("div",{className:"w-full bg-[#240a47] p-1 rounded-xl flex gap-1 border border-purple-400/40 text-xs font-bold shadow",children:y.jsx("button",{className:"flex-1 py-2.5 bg-yellow-500 text-slate-950 rounded-lg shadow",children:g.topPlayers})}),y.jsxs("div",{className:"w-full bg-[#0d031f] px-4 py-2.5 rounded-lg flex text-[11px] text-slate-300 font-bold border border-purple-400/30 shadow",children:[y.jsx("span",{className:"w-12",children:g.rank}),y.jsx("span",{className:"flex-1 text-right",children:g.player}),y.jsx("span",{className:"w-20 text-left",children:g.pts})]}),y.jsx("div",{className:"w-full space-y-2.5",children:ks?y.jsx("div",{className:"w-full bg-[#240a47]/80 p-6 rounded-xl border border-purple-400/30 text-center text-xs text-slate-300 shadow",children:g.loading}):Fr.length===0?y.jsx("div",{className:"w-full bg-[#240a47]/80 p-6 rounded-xl border border-purple-400/30 text-center text-xs text-slate-300 shadow",children:g.emptyLeaderboard}):Fr.map((k,z)=>y.jsxs("div",{className:"w-full bg-[#240a47]/90 px-4 py-3 rounded-xl border border-purple-400/40 flex items-center justify-between text-xs shadow",children:[y.jsx("div",{className:"w-12 font-black text-yellow-400 flex items-center gap-1",children:z===0?"👑 1":z===1?"🥈 2":z===2?"🥉 3":`#${z+1}`}),y.jsxs("div",{className:"flex-1 flex items-center gap-2.5 text-right",children:[y.jsx("img",{src:gt(k.avatar||"avatar-man-ghutra.png"),alt:"Avatar",className:"w-8 h-8 rounded-full border border-yellow-400 object-cover"}),y.jsx("span",{className:"font-bold text-white truncate max-w-[120px]",children:k.name||"لاعب"})]}),y.jsxs("div",{className:"w-20 text-left font-black text-purple-300",children:[(k.points||k.spirits||0).toLocaleString()," 🪙"]})]},k.id))})]}),b==="profile"&&y.jsxs("div",{className:"flex flex-col gap-5",children:[y.jsx("div",{className:"text-center my-2",children:y.jsx("h2",{className:"text-2xl font-black text-white",children:g.profile})}),y.jsxs("div",{className:"flex flex-col items-center gap-3",children:[y.jsx("div",{className:"relative cursor-pointer group",onClick:()=>it(!0),children:y.jsx("img",{src:gt(R.avatar),alt:"Current Portrait",className:"w-24 h-24 rounded-full border-4 border-yellow-400 object-cover shadow-2xl group-hover:scale-105 transition"})}),y.jsxs("button",{onClick:()=>it(!0),className:"text-xs text-yellow-400 font-bold bg-yellow-500/10 px-3 py-1.5 rounded-lg border border-yellow-500/40 shadow hover:bg-yellow-500/20",children:["✏️ ",g.changeProfilePic]}),y.jsxs("div",{className:"flex items-center gap-2 mt-1 bg-[#240a47] px-4 py-2 rounded-xl border border-purple-400/30",children:[y.jsx("h3",{className:"text-base font-bold text-white",children:R.name}),y.jsx(yg,{className:"w-3.5 h-3.5 text-slate-400"})]}),y.jsxs("span",{className:"text-xs text-yellow-400 font-bold",children:[g.levelLabel," ",R.level]})]}),y.jsxs("div",{className:"w-full bg-[#240a47]/90 rounded-2xl p-4 border border-purple-400/40 space-y-3 text-xs shadow",children:[y.jsxs("div",{className:"flex justify-between items-center border-b border-purple-500/30 pb-2.5",children:[y.jsx("span",{className:"text-slate-300",children:g.emailLabel}),y.jsxs("span",{className:"font-mono text-yellow-400 flex items-center gap-1",children:[t==null?void 0:t.email," ",y.jsx(yg,{className:"w-3 h-3 text-slate-400"})]})]}),y.jsxs("div",{className:"flex justify-between items-center",children:[y.jsx("span",{className:"text-slate-300",children:g.appLanguageLabel}),y.jsxs("select",{value:R.language,onChange:k=>Ra(k.target.value),className:"bg-[#0d031f] text-yellow-400 font-bold px-3 py-1.5 rounded-lg border border-purple-400/40 outline-none text-xs cursor-pointer",children:[y.jsx("option",{value:"العربية",children:"العربية"}),y.jsx("option",{value:"English",children:"English"}),y.jsx("option",{value:"Français",children:"Français"})]})]})]}),y.jsxs("div",{className:"w-full grid grid-cols-3 gap-2",children:[y.jsxs("div",{className:"bg-[#240a47] p-3 rounded-2xl border border-purple-400/40 text-center shadow",children:[y.jsx("div",{className:"text-[10px] text-slate-300 mb-1",children:g.gamesPlayed}),y.jsx("div",{className:"text-base font-black text-white",children:R.totalGames})]}),y.jsxs("div",{className:"bg-[#240a47] p-3 rounded-2xl border border-purple-400/40 text-center shadow",children:[y.jsx("div",{className:"text-[10px] text-slate-300 mb-1",children:g.pointsEarned}),y.jsx("div",{className:"text-base font-black text-purple-300",children:R.totalEarnedPoints.toLocaleString()})]}),y.jsxs("div",{className:"bg-[#240a47] p-3 rounded-2xl border border-purple-400/40 text-center shadow",children:[y.jsx("div",{className:"text-[10px] text-slate-300 mb-1",children:"DNC"}),y.jsx("div",{className:"text-base font-black text-yellow-400",children:R.dncBalance})]})]}),y.jsx("div",{className:"w-full space-y-3 mt-1",children:y.jsxs("button",{onClick:()=>Jt(!0),className:`w-full py-4 px-4 rounded-2xl border font-bold text-sm flex items-center justify-between transition shadow ${R.walletConnected?"bg-emerald-950/50 border-emerald-500/60 text-emerald-300":"bg-[#240a47] border-purple-400/40 text-purple-200 hover:bg-[#320d63]"}`,children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("img",{src:gt("dnc_coin.png"),alt:"Wallet",className:"w-6 h-6 object-contain"}),y.jsx("span",{children:R.walletConnected?g.walletConnected:g.connectWallet})]}),y.jsx("span",{className:"text-xs bg-purple-500/20 px-3 py-1 rounded-lg",children:R.walletConnected?`${R.walletAddress.substring(0,6)}...`:g.connectBtn})]})})]}),b==="admin"&&y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsxs("div",{className:"flex justify-between items-center border-b border-purple-400/40 pb-3",children:[y.jsxs("h2",{className:"text-base font-bold text-yellow-400 flex items-center gap-2",children:[y.jsx(vg,{className:"w-5 h-5"})," ",g.adminPanel]}),y.jsx("button",{onClick:()=>D("home"),className:"text-xs bg-[#240a47] px-3 py-1 rounded-lg text-slate-200 border border-purple-400/40",children:g.close})]}),y.jsxs("button",{onClick:ac,className:"w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg transition text-xs",children:[y.jsx(zA,{className:"w-4 h-4"})," ",g.downloadCsvReport]}),y.jsx("p",{className:"text-xs text-slate-300 mt-2",children:g.adminRedeemNotice}),y.jsx("div",{className:"space-y-3",children:er.map(k=>y.jsxs("div",{className:"bg-[#240a47]/90 p-4 rounded-xl border border-purple-400/40 text-xs space-y-2.5 shadow",children:[y.jsxs("div",{className:"flex justify-between font-bold",children:[y.jsx("span",{className:"text-white",children:k.user}),y.jsx("span",{className:k.status==="APPROVED"?"text-emerald-400":"text-amber-400",children:k.status==="APPROVED"?g.approved:g.pending})]}),y.jsxs("div",{className:"text-slate-300 flex justify-between",children:[y.jsxs("span",{children:[g.pts,": ",k.points]}),y.jsxs("span",{className:"text-yellow-400 font-bold",children:[k.dnc," DNC"]})]}),y.jsxs("div",{className:"text-[10px] text-slate-300 font-mono break-all bg-[#0d031f] p-2 rounded border border-purple-400/30",children:[g.walletLabel," ",k.wallet]}),k.status==="PENDING"&&y.jsx("button",{onClick:()=>Gr(k.id),className:"w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold mt-1 transition shadow",children:g.approveAndSend})]},k.id))})]})]}),en&&y.jsx("div",{className:"absolute inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-6",children:y.jsxs("div",{className:"w-full bg-[#240a47] border-2 border-yellow-500 rounded-3xl p-6 text-center space-y-4 shadow-[0_0_50px_rgba(234,179,8,0.5)]",children:[y.jsx("div",{className:"w-14 h-14 bg-yellow-500/20 border border-yellow-400 rounded-full flex items-center justify-center mx-auto text-yellow-400",children:y.jsx(qc,{className:"w-7 h-7 animate-pulse"})}),y.jsx("h3",{className:"text-lg font-black text-yellow-400",children:g.milestoneAdTitle}),y.jsx("p",{className:"text-xs text-slate-200 leading-relaxed",children:g.milestoneAdDesc}),y.jsxs("div",{className:"bg-[#0d031f] py-4 rounded-2xl border border-purple-400/40 text-sm font-black text-yellow-300",children:["⏳ ",g.pleaseWait," ",sc," ",g.seconds]}),y.jsx("div",{className:"text-[10px] text-purple-300",children:g.autoRewardNotice})]})}),A&&y.jsx("div",{className:"absolute inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-6",children:y.jsxs("div",{className:"w-full bg-[#240a47] border-2 border-yellow-500 rounded-3xl p-6 text-center space-y-4 shadow-[0_0_50px_rgba(234,179,8,0.5)]",children:[y.jsx("div",{className:"w-14 h-14 bg-yellow-500/20 border border-yellow-400 rounded-full flex items-center justify-center mx-auto text-yellow-400",children:y.jsx(qc,{className:"w-7 h-7 animate-pulse"})}),y.jsx("h3",{className:"text-lg font-black text-yellow-400",children:g.forcedAdTitle}),y.jsx("p",{className:"text-xs text-slate-200 leading-relaxed",children:g.forcedAdDesc}),y.jsxs("div",{className:"bg-[#0d031f] py-4 rounded-2xl border border-purple-400/40 text-sm font-black text-yellow-300",children:["⏳ ",g.pleaseWait," ",P," ",g.seconds]}),y.jsx("div",{className:"text-[10px] text-purple-300",children:g.forcedAdRewardNotice})]})}),$&&y.jsx("div",{className:"absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:y.jsxs("div",{className:"w-full bg-[#240a47] border border-yellow-500/50 rounded-3xl p-5 text-right space-y-4 shadow-2xl",dir:R.language==="العربية"?"rtl":"ltr",children:[y.jsxs("div",{className:"flex justify-between items-center",children:[y.jsx("h3",{className:"font-bold text-white text-base",children:g.settings}),y.jsx("button",{onClick:()=>G(!1),className:"text-slate-300 p-1",children:y.jsx(Hc,{className:"w-5 h-5"})})]}),y.jsx("div",{className:"space-y-3 text-xs",children:y.jsxs("div",{className:"flex justify-between items-center bg-[#0d031f] p-3 rounded-xl border border-purple-400/30",children:[y.jsxs("span",{className:"text-slate-300",children:[g.appLanguage," (Language)"]}),y.jsxs("select",{value:R.language,onChange:k=>Ra(k.target.value),className:"bg-[#240a47] text-yellow-400 font-bold px-3 py-1.5 rounded-lg border border-purple-400/40 outline-none text-xs cursor-pointer",children:[y.jsx("option",{value:"العربية",children:"العربية"}),y.jsx("option",{value:"English",children:"English"}),y.jsx("option",{value:"Français",children:"Français"})]})]})}),y.jsx("button",{onClick:()=>G(!1),className:"w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black text-xs rounded-xl shadow-lg",children:g.close})]})}),y.jsx("div",{className:"absolute bottom-0 left-0 right-0 bg-[#0d031f]/95 border-t border-purple-400/30 px-4 py-2 flex justify-between items-center backdrop-blur-md z-20 shadow-2xl",children:[{id:"home",label:g.appName,icon:"dnc_coin.png",type:"image"},{id:"quiz",label:g.startPlay,icon:"dnc_coin.png",type:"image"},{id:"rewards",label:g.rewards,icon:"nav_rewards.png",type:"image"},{id:"leaderboard",label:g.leaderboard,icon:"nav_leaderboard.png",type:"image"},{id:"profile",label:g.profile,icon:R.avatar,type:"dynamic_avatar"}].map(k=>{const z=b===k.id,Z=k.type==="dynamic_avatar";return y.jsxs("button",{onClick:()=>D(k.id),className:`flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition ${z?"scale-110 opacity-100":"opacity-60 hover:opacity-100"}`,children:[Z?y.jsx("img",{src:gt(k.icon),alt:"Profile",className:"w-7 h-7 rounded-full object-cover border border-purple-400"}):y.jsx("img",{src:gt(k.icon),alt:k.label,className:"w-7 h-7 object-contain"}),y.jsx("span",{className:`text-[10px] font-bold ${z?"text-yellow-400":"text-slate-300"}`,children:k.label})]},k.id)})}),It&&y.jsx("div",{className:"absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:y.jsxs("div",{className:"w-full bg-[#240a47] border border-yellow-500/50 rounded-3xl p-5 text-right space-y-4 shadow-2xl",dir:R.language==="العربية"?"rtl":"ltr",children:[y.jsxs("div",{className:"flex justify-between items-center",children:[y.jsx("h3",{className:"font-bold text-white text-base",children:g.connectWeb3Title}),y.jsx("button",{onClick:()=>Jt(!1),className:"text-slate-300 p-1",children:y.jsx(Hc,{className:"w-5 h-5"})})]}),y.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:g.connectWeb3Desc}),y.jsx("input",{type:"text",placeholder:"0x71C7656EC7ab88b098defB751B7401B5f6d8939A",value:J,onChange:k=>ye(k.target.value),className:"w-full bg-[#0d031f] border border-purple-400/40 rounded-xl p-3 text-xs text-white font-mono dir-ltr focus:border-yellow-500 outline-none shadow-inner"}),y.jsx("button",{onClick:()=>Na(J),className:"w-full py-3.5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black text-xs rounded-xl shadow-lg",children:g.confirmConnectBtn})]})}),jr&&y.jsx("div",{className:"absolute inset-0 bg-slate-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:y.jsxs("div",{className:"w-full bg-[#240a47] border-2 border-yellow-500/50 rounded-3xl p-6 text-right space-y-5 shadow-[0_0_60px_rgba(234,179,8,0.3)]",dir:R.language==="العربية"?"rtl":"ltr",children:[y.jsxs("div",{className:"flex justify-between items-center",children:[y.jsx("h3",{className:"font-bold text-white text-lg",children:g.selectAvatarTitle}),y.jsx("button",{onClick:()=>it(!1),className:"text-slate-300 p-1 hover:text-white",children:y.jsx(Hc,{className:"w-6 h-6"})})]}),y.jsx("div",{className:"grid grid-cols-2 gap-4 my-2 max-h-80 overflow-y-auto",children:Sa.map(k=>{const z=R.avatar===k.id;return y.jsxs("div",{onClick:()=>ba(k.id),className:`relative w-full h-28 rounded-2xl border-2 cursor-pointer overflow-hidden transition duration-200 group ${z?"border-yellow-400 shadow-[0_0_25px_rgba(234,179,8,0.4)] scale-105":"border-purple-400/40 hover:border-purple-300"}`,children:[y.jsx("img",{src:gt(k.id),alt:"Avatar Option",className:"w-full h-full object-cover group-hover:scale-110 transition duration-300"}),z&&y.jsx("div",{className:"absolute top-2 right-2 bg-emerald-500 p-1.5 rounded-full border-2 border-slate-900 shadow z-10",children:y.jsx(gg,{className:"w-3.5 h-3.5 text-white"})})]},k.id)})}),y.jsx("div",{className:"flex gap-3",children:y.jsx("button",{onClick:()=>it(!1),className:"w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl shadow-lg",children:g.close})})]})})]})}):y.jsx("div",{className:"min-h-screen bg-[#1a0833] text-white flex items-center justify-center p-4",dir:R.language==="العربية"?"rtl":"ltr",children:y.jsxs("div",{className:"w-full max-w-sm bg-[#240a47]/90 border border-purple-500/40 rounded-3xl p-6 shadow-2xl space-y-4",children:[y.jsxs("div",{className:"text-center space-y-1",children:[y.jsx("h1",{className:"text-xl font-black text-yellow-400",children:g.loginTitle}),y.jsx("p",{className:"text-xs text-slate-300",children:g.loginSubtitle})]}),f&&y.jsx("div",{className:"bg-red-500/20 border border-red-500/50 text-red-300 p-3 rounded-xl text-xs text-center font-bold",children:f}),_&&y.jsx("div",{className:"bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 p-3 rounded-xl text-xs text-center font-bold",children:_}),n==="forgot"?y.jsxs("form",{onSubmit:Ca,className:"space-y-4",children:[y.jsxs("div",{children:[y.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:g.forgotPasswordLabel}),y.jsx("input",{type:"email",value:i,onChange:k=>s(k.target.value),placeholder:"name@example.com",required:!0,className:"w-full bg-[#0d031f] border border-purple-400/40 rounded-xl px-4 py-3 text-xs text-white focus:border-yellow-400 outline-none"})]}),y.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black py-3.5 rounded-xl shadow-lg transition text-sm",children:g.sendResetLink}),y.jsx("div",{className:"text-center pt-2",children:y.jsx("button",{type:"button",onClick:()=>{r("login"),m(""),x("")},className:"text-xs text-yellow-400 font-bold hover:underline",children:g.backToLogin})})]}):y.jsxs("form",{onSubmit:n==="login"?xa:zr,className:"space-y-4",children:[n==="signup"&&y.jsxs("div",{children:[y.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:g.fullName}),y.jsx("input",{type:"text",value:u,onChange:k=>d(k.target.value),placeholder:g.enterName,required:!0,className:"w-full bg-[#0d031f] border border-purple-400/40 rounded-xl px-4 py-3 text-xs text-white focus:border-yellow-400 outline-none"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:g.email}),y.jsx("input",{type:"email",value:i,onChange:k=>s(k.target.value),placeholder:"name@example.com",required:!0,className:"w-full bg-[#0d031f] border border-purple-400/40 rounded-xl px-4 py-3 text-xs text-white focus:border-yellow-400 outline-none"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:g.password}),y.jsx("input",{type:"password",value:o,onChange:k=>l(k.target.value),placeholder:"••••••••",required:!0,className:"w-full bg-[#0d031f] border border-purple-400/40 rounded-xl px-4 py-3 text-xs text-white focus:border-yellow-400 outline-none"})]}),n==="login"&&y.jsx("div",{className:"text-left",children:y.jsx("button",{type:"button",onClick:()=>{r("forgot"),m(""),x("")},className:"text-[11px] text-purple-300 hover:text-yellow-400 underline",children:g.forgotPasswordQuestion})}),y.jsxs("button",{type:"submit",className:"w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm",children:[n==="login"?y.jsx($A,{className:"w-4 h-4"}):y.jsx(HA,{className:"w-4 h-4"}),n==="login"?g.loginBtn:g.signupBtn]})]}),n!=="forgot"&&y.jsx("div",{className:"text-center pt-2",children:y.jsx("button",{onClick:()=>{r(n==="login"?"signup":"login"),m(""),x("")},className:"text-xs text-yellow-400 font-bold hover:underline",children:n==="login"?g.noAccountPrompt:g.hasAccountPrompt})})]})})}cd.createRoot(document.getElementById("root")).render(y.jsx(CT.StrictMode,{children:y.jsx(Tb,{})}));
