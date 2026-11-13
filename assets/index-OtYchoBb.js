(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function yT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zy={exports:{}},Tu={},ev={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=Symbol.for("react.element"),vT=Symbol.for("react.portal"),_T=Symbol.for("react.fragment"),wT=Symbol.for("react.strict_mode"),ET=Symbol.for("react.profiler"),TT=Symbol.for("react.provider"),IT=Symbol.for("react.context"),xT=Symbol.for("react.forward_ref"),AT=Symbol.for("react.suspense"),ST=Symbol.for("react.memo"),CT=Symbol.for("react.lazy"),lm=Symbol.iterator;function kT(t){return t===null||typeof t!="object"?null:(t=lm&&t[lm]||t["@@iterator"],typeof t=="function"?t:null)}var tv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nv=Object.assign,rv={};function Ts(t,e,n){this.props=t,this.context=e,this.refs=rv,this.updater=n||tv}Ts.prototype.isReactComponent={};Ts.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ts.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function iv(){}iv.prototype=Ts.prototype;function Ph(t,e,n){this.props=t,this.context=e,this.refs=rv,this.updater=n||tv}var bh=Ph.prototype=new iv;bh.constructor=Ph;nv(bh,Ts.prototype);bh.isPureReactComponent=!0;var um=Array.isArray,sv=Object.prototype.hasOwnProperty,Nh={current:null},ov={key:!0,ref:!0,__self:!0,__source:!0};function av(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)sv.call(e,r)&&!ov.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:aa,type:t,key:s,ref:o,props:i,_owner:Nh.current}}function RT(t,e){return{$$typeof:aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dh(t){return typeof t=="object"&&t!==null&&t.$$typeof===aa}function PT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cm=/\/+/g;function Ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?PT(""+t.key):e.toString(36)}function fl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case aa:case vT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ec(o,0):r,um(i)?(n="",t!=null&&(n=t.replace(cm,"$&/")+"/"),fl(i,e,n,"",function(d){return d})):i!=null&&(Dh(i)&&(i=RT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",um(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ec(s,l);o+=fl(s,e,n,u,i)}else if(u=kT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ec(s,l++),o+=fl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function qa(t,e,n){if(t==null)return t;var r=[],i=0;return fl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function bT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wt={current:null},pl={transition:null},NT={ReactCurrentDispatcher:wt,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Nh};function lv(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:qa,forEach:function(t,e,n){qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qa(t,function(){e++}),e},toArray:function(t){return qa(t,function(e){return e})||[]},only:function(t){if(!Dh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=Ts;se.Fragment=_T;se.Profiler=ET;se.PureComponent=Ph;se.StrictMode=wT;se.Suspense=AT;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NT;se.act=lv;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=nv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Nh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)sv.call(e,u)&&!ov.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:aa,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:IT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:TT,_context:t},t.Consumer=t};se.createElement=av;se.createFactory=function(t){var e=av.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:xT,render:t}};se.isValidElement=Dh;se.lazy=function(t){return{$$typeof:CT,_payload:{_status:-1,_result:t},_init:bT}};se.memo=function(t,e){return{$$typeof:ST,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=pl.transition;pl.transition={};try{t()}finally{pl.transition=e}};se.unstable_act=lv;se.useCallback=function(t,e){return wt.current.useCallback(t,e)};se.useContext=function(t){return wt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return wt.current.useDeferredValue(t)};se.useEffect=function(t,e){return wt.current.useEffect(t,e)};se.useId=function(){return wt.current.useId()};se.useImperativeHandle=function(t,e,n){return wt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return wt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return wt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return wt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return wt.current.useReducer(t,e,n)};se.useRef=function(t){return wt.current.useRef(t)};se.useState=function(t){return wt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return wt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return wt.current.useTransition()};se.version="18.3.1";ev.exports=se;var K=ev.exports;const DT=yT(K);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VT=K,LT=Symbol.for("react.element"),OT=Symbol.for("react.fragment"),MT=Object.prototype.hasOwnProperty,jT=VT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,FT={key:!0,ref:!0,__self:!0,__source:!0};function uv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)MT.call(e,r)&&!FT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:LT,type:t,key:s,ref:o,props:i,_owner:jT.current}}Tu.Fragment=OT;Tu.jsx=uv;Tu.jsxs=uv;Zy.exports=Tu;var m=Zy.exports,hd={},cv={exports:{}},Ft={},dv={exports:{}},hv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Y){var ne=$.length;$.push(Y);e:for(;0<ne;){var fe=ne-1>>>1,ce=$[fe];if(0<i(ce,Y))$[fe]=Y,$[ne]=ce,ne=fe;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Y=$[0],ne=$.pop();if(ne!==Y){$[0]=ne;e:for(var fe=0,ce=$.length,ve=ce>>>1;fe<ve;){var zt=2*(fe+1)-1,Jt=$[zt],$t=zt+1,Wt=$[$t];if(0>i(Jt,ne))$t<ce&&0>i(Wt,Jt)?($[fe]=Wt,$[$t]=ne,fe=$t):($[fe]=Jt,$[zt]=ne,fe=zt);else if($t<ce&&0>i(Wt,ne))$[fe]=Wt,$[$t]=ne,fe=$t;else break e}}return Y}function i($,Y){var ne=$.sortIndex-Y.sortIndex;return ne!==0?ne:$.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],f=1,y=null,_=3,A=!1,N=!1,V=!1,M=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x($){for(var Y=n(d);Y!==null;){if(Y.callback===null)r(d);else if(Y.startTime<=$)r(d),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(d)}}function S($){if(V=!1,x($),!N)if(n(u)!==null)N=!0,Fr(O);else{var Y=n(d);Y!==null&&Bt(S,Y.startTime-$)}}function O($,Y){N=!1,V&&(V=!1,C(v),v=-1),A=!0;var ne=_;try{for(x(Y),y=n(u);y!==null&&(!(y.expirationTime>Y)||$&&!k());){var fe=y.callback;if(typeof fe=="function"){y.callback=null,_=y.priorityLevel;var ce=fe(y.expirationTime<=Y);Y=t.unstable_now(),typeof ce=="function"?y.callback=ce:y===n(u)&&r(u),x(Y)}else r(u);y=n(u)}if(y!==null)var ve=!0;else{var zt=n(d);zt!==null&&Bt(S,zt.startTime-Y),ve=!1}return ve}finally{y=null,_=ne,A=!1}}var F=!1,p=null,v=-1,w=5,T=-1;function k(){return!(t.unstable_now()-T<w)}function P(){if(p!==null){var $=t.unstable_now();T=$;var Y=!0;try{Y=p(!0,$)}finally{Y?I():(F=!1,p=null)}}else F=!1}var I;if(typeof E=="function")I=function(){E(P)};else if(typeof MessageChannel<"u"){var Tt=new MessageChannel,fn=Tt.port2;Tt.port1.onmessage=P,I=function(){fn.postMessage(null)}}else I=function(){M(P,0)};function Fr($){p=$,F||(F=!0,I())}function Bt($,Y){v=M(function(){$(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){N||A||(N=!0,Fr(O))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(_){case 1:case 2:case 3:var Y=3;break;default:Y=_}var ne=_;_=Y;try{return $()}finally{_=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Y){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ne=_;_=$;try{return Y()}finally{_=ne}},t.unstable_scheduleCallback=function($,Y,ne){var fe=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?fe+ne:fe):ne=fe,$){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=ne+ce,$={id:f++,callback:Y,priorityLevel:$,startTime:ne,expirationTime:ce,sortIndex:-1},ne>fe?($.sortIndex=ne,e(d,$),n(u)===null&&$===n(d)&&(V?(C(v),v=-1):V=!0,Bt(S,ne-fe))):($.sortIndex=ce,e(u,$),N||A||(N=!0,Fr(O))),$},t.unstable_shouldYield=k,t.unstable_wrapCallback=function($){var Y=_;return function(){var ne=_;_=Y;try{return $.apply(this,arguments)}finally{_=ne}}}})(hv);dv.exports=hv;var UT=dv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BT=K,jt=UT;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fv=new Set,No={};function wi(t,e){ls(t,e),ls(t+"Capture",e)}function ls(t,e){for(No[t]=e,t=0;t<e.length;t++)fv.add(e[t])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fd=Object.prototype.hasOwnProperty,zT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dm={},hm={};function $T(t){return fd.call(hm,t)?!0:fd.call(dm,t)?!1:zT.test(t)?hm[t]=!0:(dm[t]=!0,!1)}function WT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qT(t,e,n,r){if(e===null||typeof e>"u"||WT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Et(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new Et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new Et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new Et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new Et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new Et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new Et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new Et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new Et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new Et(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vh=/[\-:]([a-z])/g;function Lh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vh,Lh);nt[e]=new Et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vh,Lh);nt[e]=new Et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vh,Lh);nt[e]=new Et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new Et(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new Et(t,1,!1,t.toLowerCase(),null,!0,!0)});function Oh(t,e,n,r){var i=nt.hasOwnProperty(e)?nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qT(e,n,i,r)&&(n=null),r||i===null?$T(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Jn=BT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ha=Symbol.for("react.element"),Fi=Symbol.for("react.portal"),Ui=Symbol.for("react.fragment"),Mh=Symbol.for("react.strict_mode"),pd=Symbol.for("react.profiler"),pv=Symbol.for("react.provider"),mv=Symbol.for("react.context"),jh=Symbol.for("react.forward_ref"),md=Symbol.for("react.suspense"),gd=Symbol.for("react.suspense_list"),Fh=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),gv=Symbol.for("react.offscreen"),fm=Symbol.iterator;function Xs(t){return t===null||typeof t!="object"?null:(t=fm&&t[fm]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,Tc;function oo(t){if(Tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tc=e&&e[1]||""}return`
`+Tc+t}var Ic=!1;function xc(t,e){if(!t||Ic)return"";Ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oo(t):""}function HT(t){switch(t.tag){case 5:return oo(t.type);case 16:return oo("Lazy");case 13:return oo("Suspense");case 19:return oo("SuspenseList");case 0:case 2:case 15:return t=xc(t.type,!1),t;case 11:return t=xc(t.type.render,!1),t;case 1:return t=xc(t.type,!0),t;default:return""}}function yd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ui:return"Fragment";case Fi:return"Portal";case pd:return"Profiler";case Mh:return"StrictMode";case md:return"Suspense";case gd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case mv:return(t.displayName||"Context")+".Consumer";case pv:return(t._context.displayName||"Context")+".Provider";case jh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fh:return e=t.displayName||null,e!==null?e:yd(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return yd(t(e))}catch{}}return null}function GT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yd(e);case 8:return e===Mh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function KT(t){var e=yv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ga(t){t._valueTracker||(t._valueTracker=KT(t))}function vv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=yv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vd(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _v(t,e){e=e.checked,e!=null&&Oh(t,"checked",e,!1)}function _d(t,e){_v(t,e);var n=kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wd(t,e.type,n):e.hasOwnProperty("defaultValue")&&wd(t,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wd(t,e,n){(e!=="number"||Vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ao=Array.isArray;function Ji(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ed(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(ao(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kr(n)}}function wv(t,e){var n=kr(e.value),r=kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ym(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ev(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Td(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ev(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ka,Tv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ka=Ka||document.createElement("div"),Ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ka.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Do(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},QT=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(t){QT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),yo[e]=yo[t]})});function Iv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||yo.hasOwnProperty(t)&&yo[t]?(""+e).trim():e+"px"}function xv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Iv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var YT=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Id(t,e){if(e){if(YT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function xd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ad=null;function Uh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sd=null,Zi=null,es=null;function vm(t){if(t=ca(t)){if(typeof Sd!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Cu(e),Sd(t.stateNode,t.type,e))}}function Av(t){Zi?es?es.push(t):es=[t]:Zi=t}function Sv(){if(Zi){var t=Zi,e=es;if(es=Zi=null,vm(t),e)for(t=0;t<e.length;t++)vm(e[t])}}function Cv(t,e){return t(e)}function kv(){}var Ac=!1;function Rv(t,e,n){if(Ac)return t(e,n);Ac=!0;try{return Cv(t,e,n)}finally{Ac=!1,(Zi!==null||es!==null)&&(kv(),Sv())}}function Vo(t,e){var n=t.stateNode;if(n===null)return null;var r=Cu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Cd=!1;if($n)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Cd=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Cd=!1}function XT(t,e,n,r,i,s,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var vo=!1,Ll=null,Ol=!1,kd=null,JT={onError:function(t){vo=!0,Ll=t}};function ZT(t,e,n,r,i,s,o,l,u){vo=!1,Ll=null,XT.apply(JT,arguments)}function eI(t,e,n,r,i,s,o,l,u){if(ZT.apply(this,arguments),vo){if(vo){var d=Ll;vo=!1,Ll=null}else throw Error(U(198));Ol||(Ol=!0,kd=d)}}function Ei(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Pv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _m(t){if(Ei(t)!==t)throw Error(U(188))}function tI(t){var e=t.alternate;if(!e){if(e=Ei(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _m(i),t;if(s===r)return _m(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function bv(t){return t=tI(t),t!==null?Nv(t):null}function Nv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Nv(t);if(e!==null)return e;t=t.sibling}return null}var Dv=jt.unstable_scheduleCallback,wm=jt.unstable_cancelCallback,nI=jt.unstable_shouldYield,rI=jt.unstable_requestPaint,Ve=jt.unstable_now,iI=jt.unstable_getCurrentPriorityLevel,Bh=jt.unstable_ImmediatePriority,Vv=jt.unstable_UserBlockingPriority,Ml=jt.unstable_NormalPriority,sI=jt.unstable_LowPriority,Lv=jt.unstable_IdlePriority,Iu=null,wn=null;function oI(t){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(Iu,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:uI,aI=Math.log,lI=Math.LN2;function uI(t){return t>>>=0,t===0?32:31-(aI(t)/lI|0)|0}var Qa=64,Ya=4194304;function lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=lo(l):(s&=o,s!==0&&(r=lo(s)))}else o=n&~i,o!==0?r=lo(o):s!==0&&(r=lo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),i=1<<n,r|=t[n],e&=~i;return r}function cI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-on(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=cI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Rd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ov(){var t=Qa;return Qa<<=1,!(Qa&4194240)&&(Qa=64),t}function Sc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function la(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function hI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-on(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function Mv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var jv,$h,Fv,Uv,Bv,Pd=!1,Xa=[],yr=null,vr=null,_r=null,Lo=new Map,Oo=new Map,lr=[],fI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Em(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":Lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(e.pointerId)}}function Zs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ca(e),e!==null&&$h(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function pI(t,e,n,r,i){switch(e){case"focusin":return yr=Zs(yr,t,e,n,r,i),!0;case"dragenter":return vr=Zs(vr,t,e,n,r,i),!0;case"mouseover":return _r=Zs(_r,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Lo.set(s,Zs(Lo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Oo.set(s,Zs(Oo.get(s)||null,t,e,n,r,i)),!0}return!1}function zv(t){var e=ei(t.target);if(e!==null){var n=Ei(e);if(n!==null){if(e=n.tag,e===13){if(e=Pv(n),e!==null){t.blockedOn=e,Bv(t.priority,function(){Fv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ad=r,n.target.dispatchEvent(r),Ad=null}else return e=ca(n),e!==null&&$h(e),t.blockedOn=n,!1;e.shift()}return!0}function Tm(t,e,n){ml(t)&&n.delete(e)}function mI(){Pd=!1,yr!==null&&ml(yr)&&(yr=null),vr!==null&&ml(vr)&&(vr=null),_r!==null&&ml(_r)&&(_r=null),Lo.forEach(Tm),Oo.forEach(Tm)}function eo(t,e){t.blockedOn===e&&(t.blockedOn=null,Pd||(Pd=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,mI)))}function Mo(t){function e(i){return eo(i,t)}if(0<Xa.length){eo(Xa[0],t);for(var n=1;n<Xa.length;n++){var r=Xa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yr!==null&&eo(yr,t),vr!==null&&eo(vr,t),_r!==null&&eo(_r,t),Lo.forEach(e),Oo.forEach(e),n=0;n<lr.length;n++)r=lr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)zv(n),n.blockedOn===null&&lr.shift()}var ts=Jn.ReactCurrentBatchConfig,Fl=!0;function gI(t,e,n,r){var i=pe,s=ts.transition;ts.transition=null;try{pe=1,Wh(t,e,n,r)}finally{pe=i,ts.transition=s}}function yI(t,e,n,r){var i=pe,s=ts.transition;ts.transition=null;try{pe=4,Wh(t,e,n,r)}finally{pe=i,ts.transition=s}}function Wh(t,e,n,r){if(Fl){var i=bd(t,e,n,r);if(i===null)Oc(t,e,r,Ul,n),Em(t,r);else if(pI(i,t,e,n,r))r.stopPropagation();else if(Em(t,r),e&4&&-1<fI.indexOf(t)){for(;i!==null;){var s=ca(i);if(s!==null&&jv(s),s=bd(t,e,n,r),s===null&&Oc(t,e,r,Ul,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Oc(t,e,r,null,n)}}var Ul=null;function bd(t,e,n,r){if(Ul=null,t=Uh(r),t=ei(t),t!==null)if(e=Ei(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Pv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ul=t,null}function $v(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iI()){case Bh:return 1;case Vv:return 4;case Ml:case sI:return 16;case Lv:return 536870912;default:return 16}default:return 16}}var pr=null,qh=null,gl=null;function Wv(){if(gl)return gl;var t,e=qh,n=e.length,r,i="value"in pr?pr.value:pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return gl=i.slice(t,1<r?1-r:void 0)}function yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ja(){return!0}function Im(){return!1}function Ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ja:Im,this.isPropagationStopped=Im,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),e}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hh=Ut(Is),ua=Ce({},Is,{view:0,detail:0}),vI=Ut(ua),Cc,kc,to,xu=Ce({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Cc=t.screenX-to.screenX,kc=t.screenY-to.screenY):kc=Cc=0,to=t),Cc)},movementY:function(t){return"movementY"in t?t.movementY:kc}}),xm=Ut(xu),_I=Ce({},xu,{dataTransfer:0}),wI=Ut(_I),EI=Ce({},ua,{relatedTarget:0}),Rc=Ut(EI),TI=Ce({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),II=Ut(TI),xI=Ce({},Is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),AI=Ut(xI),SI=Ce({},Is,{data:0}),Am=Ut(SI),CI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=RI[t])?!!e[t]:!1}function Gh(){return PI}var bI=Ce({},ua,{key:function(t){if(t.key){var e=CI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gh,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),NI=Ut(bI),DI=Ce({},xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sm=Ut(DI),VI=Ce({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gh}),LI=Ut(VI),OI=Ce({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),MI=Ut(OI),jI=Ce({},xu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),FI=Ut(jI),UI=[9,13,27,32],Kh=$n&&"CompositionEvent"in window,_o=null;$n&&"documentMode"in document&&(_o=document.documentMode);var BI=$n&&"TextEvent"in window&&!_o,qv=$n&&(!Kh||_o&&8<_o&&11>=_o),Cm=" ",km=!1;function Hv(t,e){switch(t){case"keyup":return UI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bi=!1;function zI(t,e){switch(t){case"compositionend":return Gv(e);case"keypress":return e.which!==32?null:(km=!0,Cm);case"textInput":return t=e.data,t===Cm&&km?null:t;default:return null}}function $I(t,e){if(Bi)return t==="compositionend"||!Kh&&Hv(t,e)?(t=Wv(),gl=qh=pr=null,Bi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qv&&e.locale!=="ko"?null:e.data;default:return null}}var WI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!WI[t.type]:e==="textarea"}function Kv(t,e,n,r){Av(r),e=Bl(e,"onChange"),0<e.length&&(n=new Hh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wo=null,jo=null;function qI(t){s_(t,0)}function Au(t){var e=Wi(t);if(vv(e))return t}function HI(t,e){if(t==="change")return e}var Qv=!1;if($n){var Pc;if($n){var bc="oninput"in document;if(!bc){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),bc=typeof Pm.oninput=="function"}Pc=bc}else Pc=!1;Qv=Pc&&(!document.documentMode||9<document.documentMode)}function bm(){wo&&(wo.detachEvent("onpropertychange",Yv),jo=wo=null)}function Yv(t){if(t.propertyName==="value"&&Au(jo)){var e=[];Kv(e,jo,t,Uh(t)),Rv(qI,e)}}function GI(t,e,n){t==="focusin"?(bm(),wo=e,jo=n,wo.attachEvent("onpropertychange",Yv)):t==="focusout"&&bm()}function KI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Au(jo)}function QI(t,e){if(t==="click")return Au(e)}function YI(t,e){if(t==="input"||t==="change")return Au(e)}function XI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:XI;function Fo(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fd.call(e,i)||!ln(t[i],e[i]))return!1}return!0}function Nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dm(t,e){var n=Nm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nm(n)}}function Xv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Xv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Jv(){for(var t=window,e=Vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vl(t.document)}return e}function Qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function JI(t){var e=Jv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Xv(n.ownerDocument.documentElement,n)){if(r!==null&&Qh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Dm(n,s);var o=Dm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ZI=$n&&"documentMode"in document&&11>=document.documentMode,zi=null,Nd=null,Eo=null,Dd=!1;function Vm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dd||zi==null||zi!==Vl(r)||(r=zi,"selectionStart"in r&&Qh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Eo&&Fo(Eo,r)||(Eo=r,r=Bl(Nd,"onSelect"),0<r.length&&(e=new Hh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zi)))}function Za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $i={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},Nc={},Zv={};$n&&(Zv=document.createElement("div").style,"AnimationEvent"in window||(delete $i.animationend.animation,delete $i.animationiteration.animation,delete $i.animationstart.animation),"TransitionEvent"in window||delete $i.transitionend.transition);function Su(t){if(Nc[t])return Nc[t];if(!$i[t])return t;var e=$i[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Zv)return Nc[t]=e[n];return t}var e_=Su("animationend"),t_=Su("animationiteration"),n_=Su("animationstart"),r_=Su("transitionend"),i_=new Map,Lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,e){i_.set(t,e),wi(e,[t])}for(var Dc=0;Dc<Lm.length;Dc++){var Vc=Lm[Dc],ex=Vc.toLowerCase(),tx=Vc[0].toUpperCase()+Vc.slice(1);Dr(ex,"on"+tx)}Dr(e_,"onAnimationEnd");Dr(t_,"onAnimationIteration");Dr(n_,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(r_,"onTransitionEnd");ls("onMouseEnter",["mouseout","mouseover"]);ls("onMouseLeave",["mouseout","mouseover"]);ls("onPointerEnter",["pointerout","pointerover"]);ls("onPointerLeave",["pointerout","pointerover"]);wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wi("onBeforeInput",["compositionend","keypress","textInput","paste"]);wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nx=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function Om(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,eI(r,e,void 0,t),t.currentTarget=null}function s_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Om(i,l,d),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Om(i,l,d),s=u}}}if(Ol)throw t=kd,Ol=!1,kd=null,t}function we(t,e){var n=e[jd];n===void 0&&(n=e[jd]=new Set);var r=t+"__bubble";n.has(r)||(o_(e,t,2,!1),n.add(r))}function Lc(t,e,n){var r=0;e&&(r|=4),o_(n,t,r,e)}var el="_reactListening"+Math.random().toString(36).slice(2);function Uo(t){if(!t[el]){t[el]=!0,fv.forEach(function(n){n!=="selectionchange"&&(nx.has(n)||Lc(n,!1,t),Lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[el]||(e[el]=!0,Lc("selectionchange",!1,e))}}function o_(t,e,n,r){switch($v(e)){case 1:var i=gI;break;case 4:i=yI;break;default:i=Wh}n=i.bind(null,e,n,t),i=void 0,!Cd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Oc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ei(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Rv(function(){var d=s,f=Uh(n),y=[];e:{var _=i_.get(t);if(_!==void 0){var A=Hh,N=t;switch(t){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":A=NI;break;case"focusin":N="focus",A=Rc;break;case"focusout":N="blur",A=Rc;break;case"beforeblur":case"afterblur":A=Rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=wI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=LI;break;case e_:case t_:case n_:A=II;break;case r_:A=MI;break;case"scroll":A=vI;break;case"wheel":A=FI;break;case"copy":case"cut":case"paste":A=AI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Sm}var V=(e&4)!==0,M=!V&&t==="scroll",C=V?_!==null?_+"Capture":null:_;V=[];for(var E=d,x;E!==null;){x=E;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,C!==null&&(S=Vo(E,C),S!=null&&V.push(Bo(E,S,x)))),M)break;E=E.return}0<V.length&&(_=new A(_,N,null,n,f),y.push({event:_,listeners:V}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",_&&n!==Ad&&(N=n.relatedTarget||n.fromElement)&&(ei(N)||N[Wn]))break e;if((A||_)&&(_=f.window===f?f:(_=f.ownerDocument)?_.defaultView||_.parentWindow:window,A?(N=n.relatedTarget||n.toElement,A=d,N=N?ei(N):null,N!==null&&(M=Ei(N),N!==M||N.tag!==5&&N.tag!==6)&&(N=null)):(A=null,N=d),A!==N)){if(V=xm,S="onMouseLeave",C="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(V=Sm,S="onPointerLeave",C="onPointerEnter",E="pointer"),M=A==null?_:Wi(A),x=N==null?_:Wi(N),_=new V(S,E+"leave",A,n,f),_.target=M,_.relatedTarget=x,S=null,ei(f)===d&&(V=new V(C,E+"enter",N,n,f),V.target=x,V.relatedTarget=M,S=V),M=S,A&&N)t:{for(V=A,C=N,E=0,x=V;x;x=Li(x))E++;for(x=0,S=C;S;S=Li(S))x++;for(;0<E-x;)V=Li(V),E--;for(;0<x-E;)C=Li(C),x--;for(;E--;){if(V===C||C!==null&&V===C.alternate)break t;V=Li(V),C=Li(C)}V=null}else V=null;A!==null&&Mm(y,_,A,V,!1),N!==null&&M!==null&&Mm(y,M,N,V,!0)}}e:{if(_=d?Wi(d):window,A=_.nodeName&&_.nodeName.toLowerCase(),A==="select"||A==="input"&&_.type==="file")var O=HI;else if(Rm(_))if(Qv)O=YI;else{O=KI;var F=GI}else(A=_.nodeName)&&A.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(O=QI);if(O&&(O=O(t,d))){Kv(y,O,n,f);break e}F&&F(t,_,d),t==="focusout"&&(F=_._wrapperState)&&F.controlled&&_.type==="number"&&wd(_,"number",_.value)}switch(F=d?Wi(d):window,t){case"focusin":(Rm(F)||F.contentEditable==="true")&&(zi=F,Nd=d,Eo=null);break;case"focusout":Eo=Nd=zi=null;break;case"mousedown":Dd=!0;break;case"contextmenu":case"mouseup":case"dragend":Dd=!1,Vm(y,n,f);break;case"selectionchange":if(ZI)break;case"keydown":case"keyup":Vm(y,n,f)}var p;if(Kh)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Bi?Hv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(qv&&n.locale!=="ko"&&(Bi||v!=="onCompositionStart"?v==="onCompositionEnd"&&Bi&&(p=Wv()):(pr=f,qh="value"in pr?pr.value:pr.textContent,Bi=!0)),F=Bl(d,v),0<F.length&&(v=new Am(v,t,null,n,f),y.push({event:v,listeners:F}),p?v.data=p:(p=Gv(n),p!==null&&(v.data=p)))),(p=BI?zI(t,n):$I(t,n))&&(d=Bl(d,"onBeforeInput"),0<d.length&&(f=new Am("onBeforeInput","beforeinput",null,n,f),y.push({event:f,listeners:d}),f.data=p))}s_(y,e)})}function Bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Vo(t,n),s!=null&&r.unshift(Bo(t,s,i)),s=Vo(t,e),s!=null&&r.push(Bo(t,s,i))),t=t.return}return r}function Li(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=Vo(n,s),u!=null&&o.unshift(Bo(n,u,l))):i||(u=Vo(n,s),u!=null&&o.push(Bo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var rx=/\r\n?/g,ix=/\u0000|\uFFFD/g;function jm(t){return(typeof t=="string"?t:""+t).replace(rx,`
`).replace(ix,"")}function tl(t,e,n){if(e=jm(e),jm(t)!==e&&n)throw Error(U(425))}function zl(){}var Vd=null,Ld=null;function Od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Md=typeof setTimeout=="function"?setTimeout:void 0,sx=typeof clearTimeout=="function"?clearTimeout:void 0,Fm=typeof Promise=="function"?Promise:void 0,ox=typeof queueMicrotask=="function"?queueMicrotask:typeof Fm<"u"?function(t){return Fm.resolve(null).then(t).catch(ax)}:Md;function ax(t){setTimeout(function(){throw t})}function Mc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Mo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mo(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Um(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xs=Math.random().toString(36).slice(2),vn="__reactFiber$"+xs,zo="__reactProps$"+xs,Wn="__reactContainer$"+xs,jd="__reactEvents$"+xs,lx="__reactListeners$"+xs,ux="__reactHandles$"+xs;function ei(t){var e=t[vn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wn]||n[vn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Um(t);t!==null;){if(n=t[vn])return n;t=Um(t)}return e}t=n,n=t.parentNode}return null}function ca(t){return t=t[vn]||t[Wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Cu(t){return t[zo]||null}var Fd=[],qi=-1;function Vr(t){return{current:t}}function Te(t){0>qi||(t.current=Fd[qi],Fd[qi]=null,qi--)}function ye(t,e){qi++,Fd[qi]=t.current,t.current=e}var Rr={},ft=Vr(Rr),Ct=Vr(!1),li=Rr;function us(t,e){var n=t.type.contextTypes;if(!n)return Rr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function $l(){Te(Ct),Te(ft)}function Bm(t,e,n){if(ft.current!==Rr)throw Error(U(168));ye(ft,e),ye(Ct,n)}function a_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,GT(t)||"Unknown",i));return Ce({},n,r)}function Wl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,li=ft.current,ye(ft,t),ye(Ct,Ct.current),!0}function zm(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=a_(t,e,li),r.__reactInternalMemoizedMergedChildContext=t,Te(Ct),Te(ft),ye(ft,t)):Te(Ct),ye(Ct,n)}var Vn=null,ku=!1,jc=!1;function l_(t){Vn===null?Vn=[t]:Vn.push(t)}function cx(t){ku=!0,l_(t)}function Lr(){if(!jc&&Vn!==null){jc=!0;var t=0,e=pe;try{var n=Vn;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Vn=null,ku=!1}catch(i){throw Vn!==null&&(Vn=Vn.slice(t+1)),Dv(Bh,Lr),i}finally{pe=e,jc=!1}}return null}var Hi=[],Gi=0,ql=null,Hl=0,qt=[],Ht=0,ui=null,Ln=1,On="";function Xr(t,e){Hi[Gi++]=Hl,Hi[Gi++]=ql,ql=t,Hl=e}function u_(t,e,n){qt[Ht++]=Ln,qt[Ht++]=On,qt[Ht++]=ui,ui=t;var r=Ln;t=On;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ln=1<<32-on(e)+i|n<<i|r,On=s+t}else Ln=1<<s|n<<i|r,On=t}function Yh(t){t.return!==null&&(Xr(t,1),u_(t,1,0))}function Xh(t){for(;t===ql;)ql=Hi[--Gi],Hi[Gi]=null,Hl=Hi[--Gi],Hi[Gi]=null;for(;t===ui;)ui=qt[--Ht],qt[Ht]=null,On=qt[--Ht],qt[Ht]=null,Ln=qt[--Ht],qt[Ht]=null}var Ot=null,Vt=null,xe=!1,sn=null;function c_(t,e){var n=Gt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $m(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ot=t,Vt=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ot=t,Vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ui!==null?{id:Ln,overflow:On}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ot=t,Vt=null,!0):!1;default:return!1}}function Ud(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bd(t){if(xe){var e=Vt;if(e){var n=e;if(!$m(t,e)){if(Ud(t))throw Error(U(418));e=wr(n.nextSibling);var r=Ot;e&&$m(t,e)?c_(r,n):(t.flags=t.flags&-4097|2,xe=!1,Ot=t)}}else{if(Ud(t))throw Error(U(418));t.flags=t.flags&-4097|2,xe=!1,Ot=t}}}function Wm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ot=t}function nl(t){if(t!==Ot)return!1;if(!xe)return Wm(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Od(t.type,t.memoizedProps)),e&&(e=Vt)){if(Ud(t))throw d_(),Error(U(418));for(;e;)c_(t,e),e=wr(e.nextSibling)}if(Wm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vt=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vt=null}}else Vt=Ot?wr(t.stateNode.nextSibling):null;return!0}function d_(){for(var t=Vt;t;)t=wr(t.nextSibling)}function cs(){Vt=Ot=null,xe=!1}function Jh(t){sn===null?sn=[t]:sn.push(t)}var dx=Jn.ReactCurrentBatchConfig;function no(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function rl(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qm(t){var e=t._init;return e(t._payload)}function h_(t){function e(C,E){if(t){var x=C.deletions;x===null?(C.deletions=[E],C.flags|=16):x.push(E)}}function n(C,E){if(!t)return null;for(;E!==null;)e(C,E),E=E.sibling;return null}function r(C,E){for(C=new Map;E!==null;)E.key!==null?C.set(E.key,E):C.set(E.index,E),E=E.sibling;return C}function i(C,E){return C=xr(C,E),C.index=0,C.sibling=null,C}function s(C,E,x){return C.index=x,t?(x=C.alternate,x!==null?(x=x.index,x<E?(C.flags|=2,E):x):(C.flags|=2,E)):(C.flags|=1048576,E)}function o(C){return t&&C.alternate===null&&(C.flags|=2),C}function l(C,E,x,S){return E===null||E.tag!==6?(E=qc(x,C.mode,S),E.return=C,E):(E=i(E,x),E.return=C,E)}function u(C,E,x,S){var O=x.type;return O===Ui?f(C,E,x.props.children,S,x.key):E!==null&&(E.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===or&&qm(O)===E.type)?(S=i(E,x.props),S.ref=no(C,E,x),S.return=C,S):(S=xl(x.type,x.key,x.props,null,C.mode,S),S.ref=no(C,E,x),S.return=C,S)}function d(C,E,x,S){return E===null||E.tag!==4||E.stateNode.containerInfo!==x.containerInfo||E.stateNode.implementation!==x.implementation?(E=Hc(x,C.mode,S),E.return=C,E):(E=i(E,x.children||[]),E.return=C,E)}function f(C,E,x,S,O){return E===null||E.tag!==7?(E=oi(x,C.mode,S,O),E.return=C,E):(E=i(E,x),E.return=C,E)}function y(C,E,x){if(typeof E=="string"&&E!==""||typeof E=="number")return E=qc(""+E,C.mode,x),E.return=C,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ha:return x=xl(E.type,E.key,E.props,null,C.mode,x),x.ref=no(C,null,E),x.return=C,x;case Fi:return E=Hc(E,C.mode,x),E.return=C,E;case or:var S=E._init;return y(C,S(E._payload),x)}if(ao(E)||Xs(E))return E=oi(E,C.mode,x,null),E.return=C,E;rl(C,E)}return null}function _(C,E,x,S){var O=E!==null?E.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return O!==null?null:l(C,E,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ha:return x.key===O?u(C,E,x,S):null;case Fi:return x.key===O?d(C,E,x,S):null;case or:return O=x._init,_(C,E,O(x._payload),S)}if(ao(x)||Xs(x))return O!==null?null:f(C,E,x,S,null);rl(C,x)}return null}function A(C,E,x,S,O){if(typeof S=="string"&&S!==""||typeof S=="number")return C=C.get(x)||null,l(E,C,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ha:return C=C.get(S.key===null?x:S.key)||null,u(E,C,S,O);case Fi:return C=C.get(S.key===null?x:S.key)||null,d(E,C,S,O);case or:var F=S._init;return A(C,E,x,F(S._payload),O)}if(ao(S)||Xs(S))return C=C.get(x)||null,f(E,C,S,O,null);rl(E,S)}return null}function N(C,E,x,S){for(var O=null,F=null,p=E,v=E=0,w=null;p!==null&&v<x.length;v++){p.index>v?(w=p,p=null):w=p.sibling;var T=_(C,p,x[v],S);if(T===null){p===null&&(p=w);break}t&&p&&T.alternate===null&&e(C,p),E=s(T,E,v),F===null?O=T:F.sibling=T,F=T,p=w}if(v===x.length)return n(C,p),xe&&Xr(C,v),O;if(p===null){for(;v<x.length;v++)p=y(C,x[v],S),p!==null&&(E=s(p,E,v),F===null?O=p:F.sibling=p,F=p);return xe&&Xr(C,v),O}for(p=r(C,p);v<x.length;v++)w=A(p,C,v,x[v],S),w!==null&&(t&&w.alternate!==null&&p.delete(w.key===null?v:w.key),E=s(w,E,v),F===null?O=w:F.sibling=w,F=w);return t&&p.forEach(function(k){return e(C,k)}),xe&&Xr(C,v),O}function V(C,E,x,S){var O=Xs(x);if(typeof O!="function")throw Error(U(150));if(x=O.call(x),x==null)throw Error(U(151));for(var F=O=null,p=E,v=E=0,w=null,T=x.next();p!==null&&!T.done;v++,T=x.next()){p.index>v?(w=p,p=null):w=p.sibling;var k=_(C,p,T.value,S);if(k===null){p===null&&(p=w);break}t&&p&&k.alternate===null&&e(C,p),E=s(k,E,v),F===null?O=k:F.sibling=k,F=k,p=w}if(T.done)return n(C,p),xe&&Xr(C,v),O;if(p===null){for(;!T.done;v++,T=x.next())T=y(C,T.value,S),T!==null&&(E=s(T,E,v),F===null?O=T:F.sibling=T,F=T);return xe&&Xr(C,v),O}for(p=r(C,p);!T.done;v++,T=x.next())T=A(p,C,v,T.value,S),T!==null&&(t&&T.alternate!==null&&p.delete(T.key===null?v:T.key),E=s(T,E,v),F===null?O=T:F.sibling=T,F=T);return t&&p.forEach(function(P){return e(C,P)}),xe&&Xr(C,v),O}function M(C,E,x,S){if(typeof x=="object"&&x!==null&&x.type===Ui&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ha:e:{for(var O=x.key,F=E;F!==null;){if(F.key===O){if(O=x.type,O===Ui){if(F.tag===7){n(C,F.sibling),E=i(F,x.props.children),E.return=C,C=E;break e}}else if(F.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===or&&qm(O)===F.type){n(C,F.sibling),E=i(F,x.props),E.ref=no(C,F,x),E.return=C,C=E;break e}n(C,F);break}else e(C,F);F=F.sibling}x.type===Ui?(E=oi(x.props.children,C.mode,S,x.key),E.return=C,C=E):(S=xl(x.type,x.key,x.props,null,C.mode,S),S.ref=no(C,E,x),S.return=C,C=S)}return o(C);case Fi:e:{for(F=x.key;E!==null;){if(E.key===F)if(E.tag===4&&E.stateNode.containerInfo===x.containerInfo&&E.stateNode.implementation===x.implementation){n(C,E.sibling),E=i(E,x.children||[]),E.return=C,C=E;break e}else{n(C,E);break}else e(C,E);E=E.sibling}E=Hc(x,C.mode,S),E.return=C,C=E}return o(C);case or:return F=x._init,M(C,E,F(x._payload),S)}if(ao(x))return N(C,E,x,S);if(Xs(x))return V(C,E,x,S);rl(C,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,E!==null&&E.tag===6?(n(C,E.sibling),E=i(E,x),E.return=C,C=E):(n(C,E),E=qc(x,C.mode,S),E.return=C,C=E),o(C)):n(C,E)}return M}var ds=h_(!0),f_=h_(!1),Gl=Vr(null),Kl=null,Ki=null,Zh=null;function ef(){Zh=Ki=Kl=null}function tf(t){var e=Gl.current;Te(Gl),t._currentValue=e}function zd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ns(t,e){Kl=t,Zh=Ki=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(St=!0),t.firstContext=null)}function Yt(t){var e=t._currentValue;if(Zh!==t)if(t={context:t,memoizedValue:e,next:null},Ki===null){if(Kl===null)throw Error(U(308));Ki=t,Kl.dependencies={lanes:0,firstContext:t}}else Ki=Ki.next=t;return e}var ti=null;function nf(t){ti===null?ti=[t]:ti.push(t)}function p_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,nf(e)):(n.next=i.next,i.next=n),e.interleaved=n,qn(t,r)}function qn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function m_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,qn(t,n)}return i=r.interleaved,i===null?(e.next=e,nf(r)):(e.next=i.next,i.next=e),r.interleaved=e,qn(t,n)}function vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zh(t,n)}}function Hm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ql(t,e,n,r){var i=t.updateQueue;ar=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=u))}if(s!==null){var y=i.baseState;o=0,f=d=u=null,l=s;do{var _=l.lane,A=l.eventTime;if((r&_)===_){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,V=l;switch(_=e,A=n,V.tag){case 1:if(N=V.payload,typeof N=="function"){y=N.call(A,y,_);break e}y=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=V.payload,_=typeof N=="function"?N.call(A,y,_):N,_==null)break e;y=Ce({},y,_);break e;case 2:ar=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,_=i.effects,_===null?i.effects=[l]:_.push(l))}else A={eventTime:A,lane:_,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=A,u=y):f=f.next=A,o|=_;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;_=l,l=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);if(f===null&&(u=y),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);di|=o,t.lanes=o,t.memoizedState=y}}function Gm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var da={},En=Vr(da),$o=Vr(da),Wo=Vr(da);function ni(t){if(t===da)throw Error(U(174));return t}function sf(t,e){switch(ye(Wo,e),ye($o,t),ye(En,da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Td(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Td(e,t)}Te(En),ye(En,e)}function hs(){Te(En),Te($o),Te(Wo)}function g_(t){ni(Wo.current);var e=ni(En.current),n=Td(e,t.type);e!==n&&(ye($o,t),ye(En,n))}function of(t){$o.current===t&&(Te(En),Te($o))}var Ae=Vr(0);function Yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fc=[];function af(){for(var t=0;t<Fc.length;t++)Fc[t]._workInProgressVersionPrimary=null;Fc.length=0}var _l=Jn.ReactCurrentDispatcher,Uc=Jn.ReactCurrentBatchConfig,ci=0,Se=null,Fe=null,Ge=null,Xl=!1,To=!1,qo=0,hx=0;function at(){throw Error(U(321))}function lf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function uf(t,e,n,r,i,s){if(ci=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_l.current=t===null||t.memoizedState===null?gx:yx,t=n(r,i),To){s=0;do{if(To=!1,qo=0,25<=s)throw Error(U(301));s+=1,Ge=Fe=null,e.updateQueue=null,_l.current=vx,t=n(r,i)}while(To)}if(_l.current=Jl,e=Fe!==null&&Fe.next!==null,ci=0,Ge=Fe=Se=null,Xl=!1,e)throw Error(U(300));return t}function cf(){var t=qo!==0;return qo=0,t}function yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Se.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function Xt(){if(Fe===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=Ge===null?Se.memoizedState:Ge.next;if(e!==null)Ge=e,Fe=t;else{if(t===null)throw Error(U(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Ge===null?Se.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function Ho(t,e){return typeof e=="function"?e(t):e}function Bc(t){var e=Xt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,d=s;do{var f=d.lane;if((ci&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var y={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=y,o=r):u=u.next=y,Se.lanes|=f,di|=f}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=l,ln(r,e.memoizedState)||(St=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,di|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zc(t){var e=Xt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ln(s,e.memoizedState)||(St=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function y_(){}function v_(t,e){var n=Se,r=Xt(),i=e(),s=!ln(r.memoizedState,i);if(s&&(r.memoizedState=i,St=!0),r=r.queue,df(E_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,Go(9,w_.bind(null,n,r,i,e),void 0,null),Ke===null)throw Error(U(349));ci&30||__(n,e,i)}return i}function __(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function w_(t,e,n,r){e.value=n,e.getSnapshot=r,T_(e)&&I_(t)}function E_(t,e,n){return n(function(){T_(e)&&I_(t)})}function T_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function I_(t){var e=qn(t,1);e!==null&&an(e,t,1,-1)}function Km(t){var e=yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:t},e.queue=t,t=t.dispatch=mx.bind(null,Se,t),[e.memoizedState,t]}function Go(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function x_(){return Xt().memoizedState}function wl(t,e,n,r){var i=yn();Se.flags|=t,i.memoizedState=Go(1|e,n,void 0,r===void 0?null:r)}function Ru(t,e,n,r){var i=Xt();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&lf(r,o.deps)){i.memoizedState=Go(e,n,s,r);return}}Se.flags|=t,i.memoizedState=Go(1|e,n,s,r)}function Qm(t,e){return wl(8390656,8,t,e)}function df(t,e){return Ru(2048,8,t,e)}function A_(t,e){return Ru(4,2,t,e)}function S_(t,e){return Ru(4,4,t,e)}function C_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function k_(t,e,n){return n=n!=null?n.concat([t]):null,Ru(4,4,C_.bind(null,e,t),n)}function hf(){}function R_(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function P_(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function b_(t,e,n){return ci&21?(ln(n,e)||(n=Ov(),Se.lanes|=n,di|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,St=!0),t.memoizedState=n)}function fx(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=Uc.transition;Uc.transition={};try{t(!1),e()}finally{pe=n,Uc.transition=r}}function N_(){return Xt().memoizedState}function px(t,e,n){var r=Ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},D_(t))V_(e,n);else if(n=p_(t,e,n,r),n!==null){var i=vt();an(n,t,r,i),L_(n,e,r)}}function mx(t,e,n){var r=Ir(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(D_(t))V_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ln(l,o)){var u=e.interleaved;u===null?(i.next=i,nf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=p_(t,e,i,r),n!==null&&(i=vt(),an(n,t,r,i),L_(n,e,r))}}function D_(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function V_(t,e){To=Xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function L_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zh(t,n)}}var Jl={readContext:Yt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},gx={readContext:Yt,useCallback:function(t,e){return yn().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:Qm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wl(4194308,4,C_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return wl(4,2,t,e)},useMemo:function(t,e){var n=yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=yn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=px.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=yn();return t={current:t},e.memoizedState=t},useState:Km,useDebugValue:hf,useDeferredValue:function(t){return yn().memoizedState=t},useTransition:function(){var t=Km(!1),e=t[0];return t=fx.bind(null,t[1]),yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=yn();if(xe){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Ke===null)throw Error(U(349));ci&30||__(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Qm(E_.bind(null,r,s,t),[t]),r.flags|=2048,Go(9,w_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=yn(),e=Ke.identifierPrefix;if(xe){var n=On,r=Ln;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yx={readContext:Yt,useCallback:R_,useContext:Yt,useEffect:df,useImperativeHandle:k_,useInsertionEffect:A_,useLayoutEffect:S_,useMemo:P_,useReducer:Bc,useRef:x_,useState:function(){return Bc(Ho)},useDebugValue:hf,useDeferredValue:function(t){var e=Xt();return b_(e,Fe.memoizedState,t)},useTransition:function(){var t=Bc(Ho)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:y_,useSyncExternalStore:v_,useId:N_,unstable_isNewReconciler:!1},vx={readContext:Yt,useCallback:R_,useContext:Yt,useEffect:df,useImperativeHandle:k_,useInsertionEffect:A_,useLayoutEffect:S_,useMemo:P_,useReducer:zc,useRef:x_,useState:function(){return zc(Ho)},useDebugValue:hf,useDeferredValue:function(t){var e=Xt();return Fe===null?e.memoizedState=t:b_(e,Fe.memoizedState,t)},useTransition:function(){var t=zc(Ho)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:y_,useSyncExternalStore:v_,useId:N_,unstable_isNewReconciler:!1};function nn(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $d(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pu={isMounted:function(t){return(t=t._reactInternals)?Ei(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=vt(),i=Ir(t),s=Un(r,i);s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(an(e,t,i,r),vl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=vt(),i=Ir(t),s=Un(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(an(e,t,i,r),vl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vt(),r=Ir(t),i=Un(n,r);i.tag=2,e!=null&&(i.callback=e),e=Er(t,i,r),e!==null&&(an(e,t,r,n),vl(e,t,r))}};function Ym(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fo(n,r)||!Fo(i,s):!0}function O_(t,e,n){var r=!1,i=Rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Yt(s):(i=kt(e)?li:ft.current,r=e.contextTypes,s=(r=r!=null)?us(t,i):Rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Xm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Pu.enqueueReplaceState(e,e.state,null)}function Wd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},rf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Yt(s):(s=kt(e)?li:ft.current,i.context=us(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($d(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Pu.enqueueReplaceState(i,i.state,null),Ql(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function fs(t,e){try{var n="",r=e;do n+=HT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function $c(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _x=typeof WeakMap=="function"?WeakMap:Map;function M_(t,e,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){eu||(eu=!0,th=r),qd(t,e)},n}function j_(t,e,n){n=Un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qd(t,e),typeof r!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _x;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Dx.bind(null,t,e,n),e.then(t,t))}function Zm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function eg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Un(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var wx=Jn.ReactCurrentOwner,St=!1;function yt(t,e,n,r){e.child=t===null?f_(e,null,n,r):ds(e,t.child,n,r)}function tg(t,e,n,r,i){n=n.render;var s=e.ref;return ns(e,i),r=uf(t,e,n,r,s,i),n=cf(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(xe&&n&&Yh(e),e.flags|=1,yt(t,e,r,i),e.child)}function ng(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!wf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,F_(t,e,s,r,i)):(t=xl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fo,n(o,r)&&t.ref===e.ref)return Hn(t,e,i)}return e.flags|=1,t=xr(s,r),t.ref=e.ref,t.return=e,e.child=t}function F_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Fo(s,r)&&t.ref===e.ref)if(St=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(St=!0);else return e.lanes=t.lanes,Hn(t,e,i)}return Hd(t,e,n,r,i)}function U_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Yi,Dt),Dt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(Yi,Dt),Dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(Yi,Dt),Dt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(Yi,Dt),Dt|=r;return yt(t,e,i,n),e.child}function B_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hd(t,e,n,r,i){var s=kt(n)?li:ft.current;return s=us(e,s),ns(e,i),n=uf(t,e,n,r,s,i),r=cf(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(xe&&r&&Yh(e),e.flags|=1,yt(t,e,n,i),e.child)}function rg(t,e,n,r,i){if(kt(n)){var s=!0;Wl(e)}else s=!1;if(ns(e,i),e.stateNode===null)El(t,e),O_(e,n,r),Wd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Yt(d):(d=kt(n)?li:ft.current,d=us(e,d));var f=n.getDerivedStateFromProps,y=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&Xm(e,o,r,d),ar=!1;var _=e.memoizedState;o.state=_,Ql(e,r,o,i),u=e.memoizedState,l!==r||_!==u||Ct.current||ar?(typeof f=="function"&&($d(e,n,f,r),u=e.memoizedState),(l=ar||Ym(e,n,l,r,_,u,d))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,m_(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:nn(e.type,l),o.props=d,y=e.pendingProps,_=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Yt(u):(u=kt(n)?li:ft.current,u=us(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==y||_!==u)&&Xm(e,o,r,u),ar=!1,_=e.memoizedState,o.state=_,Ql(e,r,o,i);var N=e.memoizedState;l!==y||_!==N||Ct.current||ar?(typeof A=="function"&&($d(e,n,A,r),N=e.memoizedState),(d=ar||Ym(e,n,d,r,_,N,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return Gd(t,e,n,r,s,i)}function Gd(t,e,n,r,i,s){B_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zm(e,n,!1),Hn(t,e,s);r=e.stateNode,wx.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ds(e,t.child,null,s),e.child=ds(e,null,l,s)):yt(t,e,l,s),e.memoizedState=r.state,i&&zm(e,n,!0),e.child}function z_(t){var e=t.stateNode;e.pendingContext?Bm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bm(t,e.context,!1),sf(t,e.containerInfo)}function ig(t,e,n,r,i){return cs(),Jh(i),e.flags|=256,yt(t,e,n,r),e.child}var Kd={dehydrated:null,treeContext:null,retryLane:0};function Qd(t){return{baseLanes:t,cachePool:null,transitions:null}}function $_(t,e,n){var r=e.pendingProps,i=Ae.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Ae,i&1),t===null)return Bd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Du(o,r,0,null),t=oi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qd(n),e.memoizedState=Kd,t):ff(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Ex(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=xr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=xr(l,s):(s=oi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Qd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Kd,r}return s=t.child,t=s.sibling,r=xr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ff(t,e){return e=Du({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function il(t,e,n,r){return r!==null&&Jh(r),ds(e,t.child,null,n),t=ff(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ex(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=$c(Error(U(422))),il(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Du({mode:"visible",children:r.children},i,0,null),s=oi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ds(e,t.child,null,o),e.child.memoizedState=Qd(o),e.memoizedState=Kd,s);if(!(e.mode&1))return il(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=$c(s,r,void 0),il(t,e,o,r)}if(l=(o&t.childLanes)!==0,St||l){if(r=Ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qn(t,i),an(r,t,i,-1))}return _f(),r=$c(Error(U(421))),il(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Vx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Vt=wr(i.nextSibling),Ot=e,xe=!0,sn=null,t!==null&&(qt[Ht++]=Ln,qt[Ht++]=On,qt[Ht++]=ui,Ln=t.id,On=t.overflow,ui=e),e=ff(e,r.children),e.flags|=4096,e)}function sg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),zd(t.return,e,n)}function Wc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function W_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(yt(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sg(t,n,e);else if(t.tag===19)sg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Yl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Yl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wc(e,!0,n,null,s);break;case"together":Wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function El(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),di|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Tx(t,e,n){switch(e.tag){case 3:z_(e),cs();break;case 5:g_(e);break;case 1:kt(e.type)&&Wl(e);break;case 4:sf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(Gl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?$_(t,e,n):(ye(Ae,Ae.current&1),t=Hn(t,e,n),t!==null?t.sibling:null);ye(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return W_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,U_(t,e,n)}return Hn(t,e,n)}var q_,Yd,H_,G_;q_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yd=function(){};H_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ni(En.current);var s=null;switch(n){case"input":i=vd(t,i),r=vd(t,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=Ed(t,i),r=Ed(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=zl)}Id(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(No.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(No.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&we("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};G_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ro(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ix(t,e,n){var r=e.pendingProps;switch(Xh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(e),null;case 1:return kt(e.type)&&$l(),lt(e),null;case 3:return r=e.stateNode,hs(),Te(Ct),Te(ft),af(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(nl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sn!==null&&(ih(sn),sn=null))),Yd(t,e),lt(e),null;case 5:of(e);var i=ni(Wo.current);if(n=e.type,t!==null&&e.stateNode!=null)H_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return lt(e),null}if(t=ni(En.current),nl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[vn]=e,r[zo]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<uo.length;i++)we(uo[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":pm(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":gm(r,s),we("invalid",r)}Id(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&tl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&tl(r.textContent,l,t),i=["children",""+l]):No.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":Ga(r),mm(r,s,!0);break;case"textarea":Ga(r),ym(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=zl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ev(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[vn]=e,t[zo]=r,q_(t,e,!1,!1),e.stateNode=t;e:{switch(o=xd(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<uo.length;i++)we(uo[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":pm(t,r),i=vd(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),we("invalid",t);break;case"textarea":gm(t,r),i=Ed(t,r),we("invalid",t);break;default:i=r}Id(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?xv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Tv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Do(t,u):typeof u=="number"&&Do(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(No.hasOwnProperty(s)?u!=null&&s==="onScroll"&&we("scroll",t):u!=null&&Oh(t,s,u,o))}switch(n){case"input":Ga(t),mm(t,r,!1);break;case"textarea":Ga(t),ym(t);break;case"option":r.value!=null&&t.setAttribute("value",""+kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ji(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ji(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=zl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return lt(e),null;case 6:if(t&&e.stateNode!=null)G_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=ni(Wo.current),ni(En.current),nl(e)){if(r=e.stateNode,n=e.memoizedProps,r[vn]=e,(s=r.nodeValue!==n)&&(t=Ot,t!==null))switch(t.tag){case 3:tl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&tl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vn]=e,e.stateNode=r}return lt(e),null;case 13:if(Te(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&Vt!==null&&e.mode&1&&!(e.flags&128))d_(),cs(),e.flags|=98560,s=!1;else if(s=nl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[vn]=e}else cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;lt(e),s=!1}else sn!==null&&(ih(sn),sn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?Ue===0&&(Ue=3):_f())),e.updateQueue!==null&&(e.flags|=4),lt(e),null);case 4:return hs(),Yd(t,e),t===null&&Uo(e.stateNode.containerInfo),lt(e),null;case 10:return tf(e.type._context),lt(e),null;case 17:return kt(e.type)&&$l(),lt(e),null;case 19:if(Te(Ae),s=e.memoizedState,s===null)return lt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ro(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yl(t),o!==null){for(e.flags|=128,ro(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Ae,Ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ve()>ps&&(e.flags|=128,r=!0,ro(s,!1),e.lanes=4194304)}else{if(!r)if(t=Yl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xe)return lt(e),null}else 2*Ve()-s.renderingStartTime>ps&&n!==1073741824&&(e.flags|=128,r=!0,ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ve(),e.sibling=null,n=Ae.current,ye(Ae,r?n&1|2:n&1),e):(lt(e),null);case 22:case 23:return vf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Dt&1073741824&&(lt(e),e.subtreeFlags&6&&(e.flags|=8192)):lt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function xx(t,e){switch(Xh(e),e.tag){case 1:return kt(e.type)&&$l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return hs(),Te(Ct),Te(ft),af(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return of(e),null;case 13:if(Te(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Ae),null;case 4:return hs(),null;case 10:return tf(e.type._context),null;case 22:case 23:return vf(),null;case 24:return null;default:return null}}var sl=!1,dt=!1,Ax=typeof WeakSet=="function"?WeakSet:Set,q=null;function Qi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function Xd(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var og=!1;function Sx(t,e){if(Vd=Fl,t=Jv(),Qh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,f=0,y=t,_=null;t:for(;;){for(var A;y!==n||i!==0&&y.nodeType!==3||(l=o+i),y!==s||r!==0&&y.nodeType!==3||(u=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(A=y.firstChild)!==null;)_=y,y=A;for(;;){if(y===t)break t;if(_===n&&++d===i&&(l=o),_===s&&++f===r&&(u=o),(A=y.nextSibling)!==null)break;y=_,_=y.parentNode}y=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ld={focusedElem:t,selectionRange:n},Fl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var V=N.memoizedProps,M=N.memoizedState,C=e.stateNode,E=C.getSnapshotBeforeUpdate(e.elementType===e.type?V:nn(e.type,V),M);C.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(S){Pe(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return N=og,og=!1,N}function Io(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Xd(e,n,s)}i=i.next}while(i!==r)}}function bu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Jd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function K_(t){var e=t.alternate;e!==null&&(t.alternate=null,K_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vn],delete e[zo],delete e[jd],delete e[lx],delete e[ux])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Q_(t){return t.tag===5||t.tag===3||t.tag===4}function ag(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Q_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zl));else if(r!==4&&(t=t.child,t!==null))for(Zd(t,e,n),t=t.sibling;t!==null;)Zd(t,e,n),t=t.sibling}function eh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(eh(t,e,n),t=t.sibling;t!==null;)eh(t,e,n),t=t.sibling}var Xe=null,rn=!1;function ir(t,e,n){for(n=n.child;n!==null;)Y_(t,e,n),n=n.sibling}function Y_(t,e,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(Iu,n)}catch{}switch(n.tag){case 5:dt||Qi(n,e);case 6:var r=Xe,i=rn;Xe=null,ir(t,e,n),Xe=r,rn=i,Xe!==null&&(rn?(t=Xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(rn?(t=Xe,n=n.stateNode,t.nodeType===8?Mc(t.parentNode,n):t.nodeType===1&&Mc(t,n),Mo(t)):Mc(Xe,n.stateNode));break;case 4:r=Xe,i=rn,Xe=n.stateNode.containerInfo,rn=!0,ir(t,e,n),Xe=r,rn=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xd(n,e,o),i=i.next}while(i!==r)}ir(t,e,n);break;case 1:if(!dt&&(Qi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,e,l)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,ir(t,e,n),dt=r):ir(t,e,n);break;default:ir(t,e,n)}}function lg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ax),e.forEach(function(r){var i=Lx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Xe=l.stateNode,rn=!1;break e;case 3:Xe=l.stateNode.containerInfo,rn=!0;break e;case 4:Xe=l.stateNode.containerInfo,rn=!0;break e}l=l.return}if(Xe===null)throw Error(U(160));Y_(s,o,i),Xe=null,rn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){Pe(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)X_(e,t),e=e.sibling}function X_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tn(e,t),gn(t),r&4){try{Io(3,t,t.return),bu(3,t)}catch(V){Pe(t,t.return,V)}try{Io(5,t,t.return)}catch(V){Pe(t,t.return,V)}}break;case 1:tn(e,t),gn(t),r&512&&n!==null&&Qi(n,n.return);break;case 5:if(tn(e,t),gn(t),r&512&&n!==null&&Qi(n,n.return),t.flags&32){var i=t.stateNode;try{Do(i,"")}catch(V){Pe(t,t.return,V)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&_v(i,s),xd(l,o);var d=xd(l,s);for(o=0;o<u.length;o+=2){var f=u[o],y=u[o+1];f==="style"?xv(i,y):f==="dangerouslySetInnerHTML"?Tv(i,y):f==="children"?Do(i,y):Oh(i,f,y,d)}switch(l){case"input":_d(i,s);break;case"textarea":wv(i,s);break;case"select":var _=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?Ji(i,!!s.multiple,A,!1):_!==!!s.multiple&&(s.defaultValue!=null?Ji(i,!!s.multiple,s.defaultValue,!0):Ji(i,!!s.multiple,s.multiple?[]:"",!1))}i[zo]=s}catch(V){Pe(t,t.return,V)}}break;case 6:if(tn(e,t),gn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(V){Pe(t,t.return,V)}}break;case 3:if(tn(e,t),gn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(e.containerInfo)}catch(V){Pe(t,t.return,V)}break;case 4:tn(e,t),gn(t);break;case 13:tn(e,t),gn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(gf=Ve())),r&4&&lg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(d=dt)||f,tn(e,t),dt=d):tn(e,t),gn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(y=q=f;q!==null;){switch(_=q,A=_.child,_.tag){case 0:case 11:case 14:case 15:Io(4,_,_.return);break;case 1:Qi(_,_.return);var N=_.stateNode;if(typeof N.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(V){Pe(r,n,V)}}break;case 5:Qi(_,_.return);break;case 22:if(_.memoizedState!==null){cg(y);continue}}A!==null?(A.return=_,q=A):cg(y)}f=f.sibling}e:for(f=null,y=t;;){if(y.tag===5){if(f===null){f=y;try{i=y.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=y.stateNode,u=y.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Iv("display",o))}catch(V){Pe(t,t.return,V)}}}else if(y.tag===6){if(f===null)try{y.stateNode.nodeValue=d?"":y.memoizedProps}catch(V){Pe(t,t.return,V)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;f===y&&(f=null),y=y.return}f===y&&(f=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:tn(e,t),gn(t),r&4&&lg(t);break;case 21:break;default:tn(e,t),gn(t)}}function gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Q_(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Do(i,""),r.flags&=-33);var s=ag(t);eh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ag(t);Zd(t,l,o);break;default:throw Error(U(161))}}catch(u){Pe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Cx(t,e,n){q=t,J_(t)}function J_(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||sl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||dt;l=sl;var d=dt;if(sl=o,(dt=u)&&!d)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?dg(i):u!==null?(u.return=o,q=u):dg(i);for(;s!==null;)q=s,J_(s),s=s.sibling;q=i,sl=l,dt=d}ug(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):ug(t)}}function ug(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dt||bu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var y=f.dehydrated;y!==null&&Mo(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}dt||e.flags&512&&Jd(e)}catch(_){Pe(e,e.return,_)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function cg(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function dg(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bu(4,e)}catch(u){Pe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Pe(e,i,u)}}var s=e.return;try{Jd(e)}catch(u){Pe(e,s,u)}break;case 5:var o=e.return;try{Jd(e)}catch(u){Pe(e,o,u)}}}catch(u){Pe(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var kx=Math.ceil,Zl=Jn.ReactCurrentDispatcher,pf=Jn.ReactCurrentOwner,Kt=Jn.ReactCurrentBatchConfig,ue=0,Ke=null,Me=null,et=0,Dt=0,Yi=Vr(0),Ue=0,Ko=null,di=0,Nu=0,mf=0,xo=null,xt=null,gf=0,ps=1/0,Dn=null,eu=!1,th=null,Tr=null,ol=!1,mr=null,tu=0,Ao=0,nh=null,Tl=-1,Il=0;function vt(){return ue&6?Ve():Tl!==-1?Tl:Tl=Ve()}function Ir(t){return t.mode&1?ue&2&&et!==0?et&-et:dx.transition!==null?(Il===0&&(Il=Ov()),Il):(t=pe,t!==0||(t=window.event,t=t===void 0?16:$v(t.type)),t):1}function an(t,e,n,r){if(50<Ao)throw Ao=0,nh=null,Error(U(185));la(t,n,r),(!(ue&2)||t!==Ke)&&(t===Ke&&(!(ue&2)&&(Nu|=n),Ue===4&&ur(t,et)),Rt(t,r),n===1&&ue===0&&!(e.mode&1)&&(ps=Ve()+500,ku&&Lr()))}function Rt(t,e){var n=t.callbackNode;dI(t,e);var r=jl(t,t===Ke?et:0);if(r===0)n!==null&&wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wm(n),e===1)t.tag===0?cx(hg.bind(null,t)):l_(hg.bind(null,t)),ox(function(){!(ue&6)&&Lr()}),n=null;else{switch(Mv(r)){case 1:n=Bh;break;case 4:n=Vv;break;case 16:n=Ml;break;case 536870912:n=Lv;break;default:n=Ml}n=o0(n,Z_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Z_(t,e){if(Tl=-1,Il=0,ue&6)throw Error(U(327));var n=t.callbackNode;if(rs()&&t.callbackNode!==n)return null;var r=jl(t,t===Ke?et:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nu(t,r);else{e=r;var i=ue;ue|=2;var s=t0();(Ke!==t||et!==e)&&(Dn=null,ps=Ve()+500,si(t,e));do try{bx();break}catch(l){e0(t,l)}while(!0);ef(),Zl.current=s,ue=i,Me!==null?e=0:(Ke=null,et=0,e=Ue)}if(e!==0){if(e===2&&(i=Rd(t),i!==0&&(r=i,e=rh(t,i))),e===1)throw n=Ko,si(t,0),ur(t,r),Rt(t,Ve()),n;if(e===6)ur(t,r);else{if(i=t.current.alternate,!(r&30)&&!Rx(i)&&(e=nu(t,r),e===2&&(s=Rd(t),s!==0&&(r=s,e=rh(t,s))),e===1))throw n=Ko,si(t,0),ur(t,r),Rt(t,Ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Jr(t,xt,Dn);break;case 3:if(ur(t,r),(r&130023424)===r&&(e=gf+500-Ve(),10<e)){if(jl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Md(Jr.bind(null,t,xt,Dn),e);break}Jr(t,xt,Dn);break;case 4:if(ur(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-on(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kx(r/1960))-r,10<r){t.timeoutHandle=Md(Jr.bind(null,t,xt,Dn),r);break}Jr(t,xt,Dn);break;case 5:Jr(t,xt,Dn);break;default:throw Error(U(329))}}}return Rt(t,Ve()),t.callbackNode===n?Z_.bind(null,t):null}function rh(t,e){var n=xo;return t.current.memoizedState.isDehydrated&&(si(t,e).flags|=256),t=nu(t,e),t!==2&&(e=xt,xt=n,e!==null&&ih(e)),t}function ih(t){xt===null?xt=t:xt.push.apply(xt,t)}function Rx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~mf,e&=~Nu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function hg(t){if(ue&6)throw Error(U(327));rs();var e=jl(t,0);if(!(e&1))return Rt(t,Ve()),null;var n=nu(t,e);if(t.tag!==0&&n===2){var r=Rd(t);r!==0&&(e=r,n=rh(t,r))}if(n===1)throw n=Ko,si(t,0),ur(t,e),Rt(t,Ve()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jr(t,xt,Dn),Rt(t,Ve()),null}function yf(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(ps=Ve()+500,ku&&Lr())}}function hi(t){mr!==null&&mr.tag===0&&!(ue&6)&&rs();var e=ue;ue|=1;var n=Kt.transition,r=pe;try{if(Kt.transition=null,pe=1,t)return t()}finally{pe=r,Kt.transition=n,ue=e,!(ue&6)&&Lr()}}function vf(){Dt=Yi.current,Te(Yi)}function si(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sx(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Xh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$l();break;case 3:hs(),Te(Ct),Te(ft),af();break;case 5:of(r);break;case 4:hs();break;case 13:Te(Ae);break;case 19:Te(Ae);break;case 10:tf(r.type._context);break;case 22:case 23:vf()}n=n.return}if(Ke=t,Me=t=xr(t.current,null),et=Dt=e,Ue=0,Ko=null,mf=Nu=di=0,xt=xo=null,ti!==null){for(e=0;e<ti.length;e++)if(n=ti[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ti=null}return t}function e0(t,e){do{var n=Me;try{if(ef(),_l.current=Jl,Xl){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xl=!1}if(ci=0,Ge=Fe=Se=null,To=!1,qo=0,pf.current=null,n===null||n.return===null){Ue=1,Ko=e,Me=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=et,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=l,y=f.tag;if(!(f.mode&1)&&(y===0||y===11||y===15)){var _=f.alternate;_?(f.updateQueue=_.updateQueue,f.memoizedState=_.memoizedState,f.lanes=_.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=Zm(o);if(A!==null){A.flags&=-257,eg(A,o,l,s,e),A.mode&1&&Jm(s,d,e),e=A,u=d;var N=e.updateQueue;if(N===null){var V=new Set;V.add(u),e.updateQueue=V}else N.add(u);break e}else{if(!(e&1)){Jm(s,d,e),_f();break e}u=Error(U(426))}}else if(xe&&l.mode&1){var M=Zm(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),eg(M,o,l,s,e),Jh(fs(u,l));break e}}s=u=fs(u,l),Ue!==4&&(Ue=2),xo===null?xo=[s]:xo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var C=M_(s,u,e);Hm(s,C);break e;case 1:l=u;var E=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Tr===null||!Tr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=j_(s,l,e);Hm(s,S);break e}}s=s.return}while(s!==null)}r0(n)}catch(O){e=O,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function t0(){var t=Zl.current;return Zl.current=Jl,t===null?Jl:t}function _f(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Ke===null||!(di&268435455)&&!(Nu&268435455)||ur(Ke,et)}function nu(t,e){var n=ue;ue|=2;var r=t0();(Ke!==t||et!==e)&&(Dn=null,si(t,e));do try{Px();break}catch(i){e0(t,i)}while(!0);if(ef(),ue=n,Zl.current=r,Me!==null)throw Error(U(261));return Ke=null,et=0,Ue}function Px(){for(;Me!==null;)n0(Me)}function bx(){for(;Me!==null&&!nI();)n0(Me)}function n0(t){var e=s0(t.alternate,t,Dt);t.memoizedProps=t.pendingProps,e===null?r0(t):Me=e,pf.current=null}function r0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xx(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Me=null;return}}else if(n=Ix(n,e,Dt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);Ue===0&&(Ue=5)}function Jr(t,e,n){var r=pe,i=Kt.transition;try{Kt.transition=null,pe=1,Nx(t,e,n,r)}finally{Kt.transition=i,pe=r}return null}function Nx(t,e,n,r){do rs();while(mr!==null);if(ue&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(hI(t,s),t===Ke&&(Me=Ke=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ol||(ol=!0,o0(Ml,function(){return rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Kt.transition,Kt.transition=null;var o=pe;pe=1;var l=ue;ue|=4,pf.current=null,Sx(t,n),X_(n,t),JI(Ld),Fl=!!Vd,Ld=Vd=null,t.current=n,Cx(n),rI(),ue=l,pe=o,Kt.transition=s}else t.current=n;if(ol&&(ol=!1,mr=t,tu=i),s=t.pendingLanes,s===0&&(Tr=null),oI(n.stateNode),Rt(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(eu)throw eu=!1,t=th,th=null,t;return tu&1&&t.tag!==0&&rs(),s=t.pendingLanes,s&1?t===nh?Ao++:(Ao=0,nh=t):Ao=0,Lr(),null}function rs(){if(mr!==null){var t=Mv(tu),e=Kt.transition,n=pe;try{if(Kt.transition=null,pe=16>t?16:t,mr===null)var r=!1;else{if(t=mr,mr=null,tu=0,ue&6)throw Error(U(331));var i=ue;for(ue|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(q=d;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:Io(8,f,s)}var y=f.child;if(y!==null)y.return=f,q=y;else for(;q!==null;){f=q;var _=f.sibling,A=f.return;if(K_(f),f===d){q=null;break}if(_!==null){_.return=A,q=_;break}q=A}}}var N=s.alternate;if(N!==null){var V=N.child;if(V!==null){N.child=null;do{var M=V.sibling;V.sibling=null,V=M}while(V!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Io(9,s,s.return)}var C=s.sibling;if(C!==null){C.return=s.return,q=C;break e}q=s.return}}var E=t.current;for(q=E;q!==null;){o=q;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,q=x;else e:for(o=E;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:bu(9,l)}}catch(O){Pe(l,l.return,O)}if(l===o){q=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,q=S;break e}q=l.return}}if(ue=i,Lr(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(Iu,t)}catch{}r=!0}return r}finally{pe=n,Kt.transition=e}}return!1}function fg(t,e,n){e=fs(n,e),e=M_(t,e,1),t=Er(t,e,1),e=vt(),t!==null&&(la(t,1,e),Rt(t,e))}function Pe(t,e,n){if(t.tag===3)fg(t,t,n);else for(;e!==null;){if(e.tag===3){fg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tr===null||!Tr.has(r))){t=fs(n,t),t=j_(e,t,1),e=Er(e,t,1),t=vt(),e!==null&&(la(e,1,t),Rt(e,t));break}}e=e.return}}function Dx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=vt(),t.pingedLanes|=t.suspendedLanes&n,Ke===t&&(et&n)===n&&(Ue===4||Ue===3&&(et&130023424)===et&&500>Ve()-gf?si(t,0):mf|=n),Rt(t,e)}function i0(t,e){e===0&&(t.mode&1?(e=Ya,Ya<<=1,!(Ya&130023424)&&(Ya=4194304)):e=1);var n=vt();t=qn(t,e),t!==null&&(la(t,e,n),Rt(t,n))}function Vx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),i0(t,n)}function Lx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),i0(t,n)}var s0;s0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ct.current)St=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return St=!1,Tx(t,e,n);St=!!(t.flags&131072)}else St=!1,xe&&e.flags&1048576&&u_(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;El(t,e),t=e.pendingProps;var i=us(e,ft.current);ns(e,n),i=uf(null,e,r,t,i,n);var s=cf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(s=!0,Wl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rf(e),i.updater=Pu,e.stateNode=i,i._reactInternals=e,Wd(e,r,t,n),e=Gd(null,e,r,!0,s,n)):(e.tag=0,xe&&s&&Yh(e),yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(El(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Mx(r),t=nn(r,t),i){case 0:e=Hd(null,e,r,t,n);break e;case 1:e=rg(null,e,r,t,n);break e;case 11:e=tg(null,e,r,t,n);break e;case 14:e=ng(null,e,r,nn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Hd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),rg(t,e,r,i,n);case 3:e:{if(z_(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,m_(t,e),Ql(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=fs(Error(U(423)),e),e=ig(t,e,r,n,i);break e}else if(r!==i){i=fs(Error(U(424)),e),e=ig(t,e,r,n,i);break e}else for(Vt=wr(e.stateNode.containerInfo.firstChild),Ot=e,xe=!0,sn=null,n=f_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cs(),r===i){e=Hn(t,e,n);break e}yt(t,e,r,n)}e=e.child}return e;case 5:return g_(e),t===null&&Bd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Od(r,i)?o=null:s!==null&&Od(r,s)&&(e.flags|=32),B_(t,e),yt(t,e,o,n),e.child;case 6:return t===null&&Bd(e),null;case 13:return $_(t,e,n);case 4:return sf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ds(e,null,r,n):yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),tg(t,e,r,i,n);case 7:return yt(t,e,e.pendingProps,n),e.child;case 8:return yt(t,e,e.pendingProps.children,n),e.child;case 12:return yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(Gl,r._currentValue),r._currentValue=o,s!==null)if(ln(s.value,o)){if(s.children===i.children&&!Ct.current){e=Hn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Un(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),zd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),zd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ns(e,n),i=Yt(i),r=r(i),e.flags|=1,yt(t,e,r,n),e.child;case 14:return r=e.type,i=nn(r,e.pendingProps),i=nn(r.type,i),ng(t,e,r,i,n);case 15:return F_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),El(t,e),e.tag=1,kt(r)?(t=!0,Wl(e)):t=!1,ns(e,n),O_(e,r,i),Wd(e,r,i,n),Gd(null,e,r,!0,t,n);case 19:return W_(t,e,n);case 22:return U_(t,e,n)}throw Error(U(156,e.tag))};function o0(t,e){return Dv(t,e)}function Ox(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(t,e,n,r){return new Ox(t,e,n,r)}function wf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Mx(t){if(typeof t=="function")return wf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jh)return 11;if(t===Fh)return 14}return 2}function xr(t,e){var n=t.alternate;return n===null?(n=Gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")wf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ui:return oi(n.children,i,s,e);case Mh:o=8,i|=8;break;case pd:return t=Gt(12,n,e,i|2),t.elementType=pd,t.lanes=s,t;case md:return t=Gt(13,n,e,i),t.elementType=md,t.lanes=s,t;case gd:return t=Gt(19,n,e,i),t.elementType=gd,t.lanes=s,t;case gv:return Du(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case pv:o=10;break e;case mv:o=9;break e;case jh:o=11;break e;case Fh:o=14;break e;case or:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Gt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function oi(t,e,n,r){return t=Gt(7,t,r,e),t.lanes=n,t}function Du(t,e,n,r){return t=Gt(22,t,r,e),t.elementType=gv,t.lanes=n,t.stateNode={isHidden:!1},t}function qc(t,e,n){return t=Gt(6,t,null,e),t.lanes=n,t}function Hc(t,e,n){return e=Gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sc(0),this.expirationTimes=Sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ef(t,e,n,r,i,s,o,l,u){return t=new jx(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rf(s),t}function Fx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function a0(t){if(!t)return Rr;t=t._reactInternals;e:{if(Ei(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(kt(n))return a_(t,n,e)}return e}function l0(t,e,n,r,i,s,o,l,u){return t=Ef(n,r,!0,t,i,s,o,l,u),t.context=a0(null),n=t.current,r=vt(),i=Ir(n),s=Un(r,i),s.callback=e??null,Er(n,s,i),t.current.lanes=i,la(t,i,r),Rt(t,r),t}function Vu(t,e,n,r){var i=e.current,s=vt(),o=Ir(i);return n=a0(n),e.context===null?e.context=n:e.pendingContext=n,e=Un(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Er(i,e,o),t!==null&&(an(t,i,o,s),vl(t,i,o)),o}function ru(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tf(t,e){pg(t,e),(t=t.alternate)&&pg(t,e)}function Ux(){return null}var u0=typeof reportError=="function"?reportError:function(t){console.error(t)};function If(t){this._internalRoot=t}Lu.prototype.render=If.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Vu(t,e,null,null)};Lu.prototype.unmount=If.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hi(function(){Vu(null,t,null,null)}),e[Wn]=null}};function Lu(t){this._internalRoot=t}Lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Uv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&zv(t)}};function xf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mg(){}function Bx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=ru(o);s.call(d)}}var o=l0(e,r,t,0,null,!1,!1,"",mg);return t._reactRootContainer=o,t[Wn]=o.current,Uo(t.nodeType===8?t.parentNode:t),hi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=ru(u);l.call(d)}}var u=Ef(t,0,!1,null,null,!1,!1,"",mg);return t._reactRootContainer=u,t[Wn]=u.current,Uo(t.nodeType===8?t.parentNode:t),hi(function(){Vu(e,u,n,r)}),u}function Mu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ru(o);l.call(u)}}Vu(e,o,t,i)}else o=Bx(n,e,t,i,r);return ru(o)}jv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=lo(e.pendingLanes);n!==0&&(zh(e,n|1),Rt(e,Ve()),!(ue&6)&&(ps=Ve()+500,Lr()))}break;case 13:hi(function(){var r=qn(t,1);if(r!==null){var i=vt();an(r,t,1,i)}}),Tf(t,1)}};$h=function(t){if(t.tag===13){var e=qn(t,134217728);if(e!==null){var n=vt();an(e,t,134217728,n)}Tf(t,134217728)}};Fv=function(t){if(t.tag===13){var e=Ir(t),n=qn(t,e);if(n!==null){var r=vt();an(n,t,e,r)}Tf(t,e)}};Uv=function(){return pe};Bv=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Sd=function(t,e,n){switch(e){case"input":if(_d(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Cu(r);if(!i)throw Error(U(90));vv(r),_d(r,i)}}}break;case"textarea":wv(t,n);break;case"select":e=n.value,e!=null&&Ji(t,!!n.multiple,e,!1)}};Cv=yf;kv=hi;var zx={usingClientEntryPoint:!1,Events:[ca,Wi,Cu,Av,Sv,yf]},io={findFiberByHostInstance:ei,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$x={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bv(t),t===null?null:t.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||Ux,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{Iu=al.inject($x),wn=al}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zx;Ft.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xf(e))throw Error(U(200));return Fx(t,e,null,n)};Ft.createRoot=function(t,e){if(!xf(t))throw Error(U(299));var n=!1,r="",i=u0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ef(t,1,!1,null,null,n,!1,r,i),t[Wn]=e.current,Uo(t.nodeType===8?t.parentNode:t),new If(e)};Ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=bv(e),t=t===null?null:t.stateNode,t};Ft.flushSync=function(t){return hi(t)};Ft.hydrate=function(t,e,n){if(!Ou(e))throw Error(U(200));return Mu(null,t,e,!0,n)};Ft.hydrateRoot=function(t,e,n){if(!xf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=u0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=l0(e,null,t,1,n??null,i,!1,s,o),t[Wn]=e.current,Uo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Lu(e)};Ft.render=function(t,e,n){if(!Ou(e))throw Error(U(200));return Mu(null,t,e,!1,n)};Ft.unmountComponentAtNode=function(t){if(!Ou(t))throw Error(U(40));return t._reactRootContainer?(hi(function(){Mu(null,null,t,!1,function(){t._reactRootContainer=null,t[Wn]=null})}),!0):!1};Ft.unstable_batchedUpdates=yf;Ft.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ou(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Mu(t,e,n,!1,r)};Ft.version="18.3.1-next-f1338f8080-20240426";function c0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c0)}catch(t){console.error(t)}}c0(),cv.exports=Ft;var Wx=cv.exports,gg=Wx;hd.createRoot=gg.createRoot,hd.hydrateRoot=gg.hydrateRoot;var qx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Hx=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gx=(t,e)=>{const n=K.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:l,...u},d)=>K.createElement("svg",{ref:d,...qx,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${Hx(t)}`,...u},[...e.map(([f,y])=>K.createElement(f,y)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${t}`,n};var it=Gx;const Kx=it("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]),yg=it("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),Qx=it("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),Yx=it("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),Xx=it("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Jx=it("Gift",[["polyline",{points:"20 12 20 22 4 22 4 12",key:"nda8fc"}],["rect",{width:"20",height:"5",x:"2",y:"7",key:"wkgdzj"}],["line",{x1:"12",x2:"12",y1:"22",y2:"7",key:"1n8zgp"}],["path",{d:"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z",key:"zighg4"}],["path",{d:"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z",key:"1pa5tk"}]]),Zx=it("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),vg=it("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),_g=it("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]),wg=it("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),e1=it("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]),t1=it("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Eg=it("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),Gc=it("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]),n1=it("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]),r1=it("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Kc=it("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var Tg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},i1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},h0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,f=s>>2,y=(s&3)<<4|l>>4;let _=(l&15)<<2|d>>6,A=d&63;u||(A=64,o||(_=64)),r.push(n[f],n[y],n[_],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(d0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const y=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||y==null)throw new s1;const _=s<<2|l>>4;if(r.push(_),d!==64){const A=l<<4&240|d>>2;if(r.push(A),y!==64){const N=d<<6&192|y;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class s1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const o1=function(t){const e=d0(t);return h0.encodeByteArray(e,!0)},iu=function(t){return o1(t).replace(/\./g,"")},f0=function(t){try{return h0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function a1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const l1=()=>a1().__FIREBASE_DEFAULTS__,u1=()=>{if(typeof process>"u"||typeof Tg>"u")return;const t=Tg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},c1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&f0(t[1]);return e&&JSON.parse(e)},ju=()=>{try{return l1()||u1()||c1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},p0=t=>{var e,n;return(n=(e=ju())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},d1=t=>{const e=p0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},m0=()=>{var t;return(t=ju())===null||t===void 0?void 0:t.config},g0=t=>{var e;return(e=ju())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function f1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[iu(JSON.stringify(n)),iu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function p1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function m1(){var t;const e=(t=ju())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function g1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function y0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function y1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function v1(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _1(){return!m1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function v0(){try{return typeof indexedDB=="object"}catch{return!1}}function _0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function w1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1="FirebaseError";class hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=E1,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?T1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new hn(i,l,r)}}function T1(t,e){return t.replace(I1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const I1=/\{\$([^}]+)}/g;function x1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ig(s)&&Ig(o)){if(!Qo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ig(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function co(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ho(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function A1(t,e){const n=new S1(t,e);return n.subscribe.bind(n)}class S1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");C1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qc),i.error===void 0&&(i.error=Qc),i.complete===void 0&&(i.complete=Qc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function C1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qc(){}/**
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
 */const k1=1e3,R1=2,P1=4*60*60*1e3,b1=.5;function xg(t,e=k1,n=R1){const r=e*Math.pow(n,t),i=Math.round(b1*r*(Math.random()-.5)*2);return Math.min(P1,r+i)}/**
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
 */function Le(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zr="[DEFAULT]";/**
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
 */class N1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new h1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(V1(e))try{this.getOrInitializeService({instanceIdentifier:Zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zr){return this.instances.has(e)}getOptions(e=Zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:D1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zr){return this.component?this.component.multipleInstances?e:Zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function D1(t){return t===Zr?void 0:t}function V1(t){return t.instantiationMode==="EAGER"}/**
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
 */class L1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new N1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const O1={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},M1=ae.INFO,j1={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},F1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=j1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fu{constructor(e){this.name=e,this._logLevel=M1,this._logHandler=F1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?O1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const U1=(t,e)=>e.some(n=>t instanceof n);let Ag,Sg;function B1(){return Ag||(Ag=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function z1(){return Sg||(Sg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const w0=new WeakMap,sh=new WeakMap,E0=new WeakMap,Yc=new WeakMap,Af=new WeakMap;function $1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ar(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&w0.set(n,t)}).catch(()=>{}),Af.set(e,t),e}function W1(t){if(sh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sh.set(t,e)}let oh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||E0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function q1(t){oh=t(oh)}function H1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xc(this),e,...n);return E0.set(r,e.sort?e.sort():[e]),Ar(r)}:z1().includes(t)?function(...e){return t.apply(Xc(this),e),Ar(w0.get(this))}:function(...e){return Ar(t.apply(Xc(this),e))}}function G1(t){return typeof t=="function"?H1(t):(t instanceof IDBTransaction&&W1(t),U1(t,B1())?new Proxy(t,oh):t)}function Ar(t){if(t instanceof IDBRequest)return $1(t);if(Yc.has(t))return Yc.get(t);const e=G1(t);return e!==t&&(Yc.set(t,e),Af.set(e,t)),e}const Xc=t=>Af.get(t);function T0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Ar(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ar(o.result),u.oldVersion,u.newVersion,Ar(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const K1=["get","getKey","getAll","getAllKeys","count"],Q1=["put","add","delete","clear"],Jc=new Map;function Cg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jc.get(e))return Jc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Q1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||K1.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return Jc.set(e,s),s}q1(t=>({...t,get:(e,n,r)=>Cg(e,n)||t.get(e,n,r),has:(e,n)=>!!Cg(e,n)||t.has(e,n)}));/**
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
 */class Y1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(X1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function X1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ah="@firebase/app",kg="0.10.13";/**
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
 */const Gn=new Fu("@firebase/app"),J1="@firebase/app-compat",Z1="@firebase/analytics-compat",eA="@firebase/analytics",tA="@firebase/app-check-compat",nA="@firebase/app-check",rA="@firebase/auth",iA="@firebase/auth-compat",sA="@firebase/database",oA="@firebase/data-connect",aA="@firebase/database-compat",lA="@firebase/functions",uA="@firebase/functions-compat",cA="@firebase/installations",dA="@firebase/installations-compat",hA="@firebase/messaging",fA="@firebase/messaging-compat",pA="@firebase/performance",mA="@firebase/performance-compat",gA="@firebase/remote-config",yA="@firebase/remote-config-compat",vA="@firebase/storage",_A="@firebase/storage-compat",wA="@firebase/firestore",EA="@firebase/vertexai-preview",TA="@firebase/firestore-compat",IA="firebase",xA="10.14.1";/**
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
 */const lh="[DEFAULT]",AA={[ah]:"fire-core",[J1]:"fire-core-compat",[eA]:"fire-analytics",[Z1]:"fire-analytics-compat",[nA]:"fire-app-check",[tA]:"fire-app-check-compat",[rA]:"fire-auth",[iA]:"fire-auth-compat",[sA]:"fire-rtdb",[oA]:"fire-data-connect",[aA]:"fire-rtdb-compat",[lA]:"fire-fn",[uA]:"fire-fn-compat",[cA]:"fire-iid",[dA]:"fire-iid-compat",[hA]:"fire-fcm",[fA]:"fire-fcm-compat",[pA]:"fire-perf",[mA]:"fire-perf-compat",[gA]:"fire-rc",[yA]:"fire-rc-compat",[vA]:"fire-gcs",[_A]:"fire-gcs-compat",[wA]:"fire-fst",[TA]:"fire-fst-compat",[EA]:"fire-vertex","fire-js":"fire-js",[IA]:"fire-js-all"};/**
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
 */const su=new Map,SA=new Map,uh=new Map;function Rg(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cn(t){const e=t.name;if(uh.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;uh.set(e,t);for(const n of su.values())Rg(n,t);for(const n of SA.values())Rg(n,t);return!0}function Ii(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _n(t){return t.settings!==void 0}/**
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
 */const CA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sr=new Ti("app","Firebase",CA);/**
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
 */class kA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
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
 */const As=xA;function I0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Sr.create("bad-app-name",{appName:String(i)});if(n||(n=m0()),!n)throw Sr.create("no-options");const s=su.get(i);if(s){if(Qo(n,s.options)&&Qo(r,s.config))return s;throw Sr.create("duplicate-app",{appName:i})}const o=new L1(i);for(const u of uh.values())o.addComponent(u);const l=new kA(n,r,o);return su.set(i,l),l}function Sf(t=lh){const e=su.get(t);if(!e&&t===lh&&m0())return I0();if(!e)throw Sr.create("no-app",{appName:t});return e}function Qt(t,e,n){var r;let i=(r=AA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(l.join(" "));return}Cn(new un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const RA="firebase-heartbeat-database",PA=1,Yo="firebase-heartbeat-store";let Zc=null;function x0(){return Zc||(Zc=T0(RA,PA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Yo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),Zc}async function bA(t){try{const n=(await x0()).transaction(Yo),r=await n.objectStore(Yo).get(A0(t));return await n.done,r}catch(e){if(e instanceof hn)Gn.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function Pg(t,e){try{const r=(await x0()).transaction(Yo,"readwrite");await r.objectStore(Yo).put(e,A0(t)),await r.done}catch(n){if(n instanceof hn)Gn.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function A0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const NA=1024,DA=30*24*60*60*1e3;class VA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=DA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bg(),{heartbeatsToSend:r,unsentEntries:i}=LA(this._heartbeatsCache.heartbeats),s=iu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Gn.warn(n),""}}}function bg(){return new Date().toISOString().substring(0,10)}function LA(t,e=NA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ng(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ng(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class OA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return v0()?_0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ng(t){return iu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function MA(t){Cn(new un("platform-logger",e=>new Y1(e),"PRIVATE")),Cn(new un("heartbeat",e=>new VA(e),"PRIVATE")),Qt(ah,kg,t),Qt(ah,kg,"esm2017"),Qt("fire-js","")}MA("");var jA="firebase",FA="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt(jA,FA,"app");const S0="@firebase/installations",Cf="0.6.9";/**
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
 */const C0=1e4,k0=`w:${Cf}`,R0="FIS_v2",UA="https://firebaseinstallations.googleapis.com/v1",BA=60*60*1e3,zA="installations",$A="Installations";/**
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
 */const WA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fi=new Ti(zA,$A,WA);function P0(t){return t instanceof hn&&t.code.includes("request-failed")}/**
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
 */function b0({projectId:t}){return`${UA}/projects/${t}/installations`}function N0(t){return{token:t.token,requestStatus:2,expiresIn:HA(t.expiresIn),creationTime:Date.now()}}async function D0(t,e){const r=(await e.json()).error;return fi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function V0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function qA(t,{refreshToken:e}){const n=V0(t);return n.append("Authorization",GA(e)),n}async function L0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function HA(t){return Number(t.replace("s","000"))}function GA(t){return`${R0} ${t}`}/**
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
 */async function KA({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=b0(t),i=V0(t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={fid:n,authVersion:R0,appId:t.appId,sdkVersion:k0},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await L0(()=>fetch(r,l));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:N0(d.authToken)}}else throw await D0("Create Installation",u)}/**
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
 */function O0(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function QA(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const YA=/^[cdef][\w-]{21}$/,ch="";function XA(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=JA(t);return YA.test(n)?n:ch}catch{return ch}}function JA(t){return QA(t).substr(0,22)}/**
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
 */const M0=new Map;function j0(t,e){const n=Uu(t);F0(n,e),ZA(n,e)}function F0(t,e){const n=M0.get(t);if(n)for(const r of n)r(e)}function ZA(t,e){const n=eS();n&&n.postMessage({key:t,fid:e}),tS()}let ri=null;function eS(){return!ri&&"BroadcastChannel"in self&&(ri=new BroadcastChannel("[Firebase] FID Change"),ri.onmessage=t=>{F0(t.data.key,t.data.fid)}),ri}function tS(){M0.size===0&&ri&&(ri.close(),ri=null)}/**
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
 */const nS="firebase-installations-database",rS=1,pi="firebase-installations-store";let ed=null;function kf(){return ed||(ed=T0(nS,rS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pi)}}})),ed}async function ou(t,e){const n=Uu(t),i=(await kf()).transaction(pi,"readwrite"),s=i.objectStore(pi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&j0(t,e.fid),e}async function U0(t){const e=Uu(t),r=(await kf()).transaction(pi,"readwrite");await r.objectStore(pi).delete(e),await r.done}async function Bu(t,e){const n=Uu(t),i=(await kf()).transaction(pi,"readwrite"),s=i.objectStore(pi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&j0(t,l.fid),l}/**
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
 */async function Rf(t){let e;const n=await Bu(t.appConfig,r=>{const i=iS(r),s=sS(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===ch?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function iS(t){const e=t||{fid:XA(),registrationStatus:0};return B0(e)}function sS(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(fi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=oS(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:aS(t)}:{installationEntry:e}}async function oS(t,e){try{const n=await KA(t,e);return ou(t.appConfig,n)}catch(n){throw P0(n)&&n.customData.serverCode===409?await U0(t.appConfig):await ou(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function aS(t){let e=await Dg(t.appConfig);for(;e.registrationStatus===1;)await O0(100),e=await Dg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Rf(t);return r||n}return e}function Dg(t){return Bu(t,e=>{if(!e)throw fi.create("installation-not-found");return B0(e)})}function B0(t){return lS(t)?{fid:t.fid,registrationStatus:0}:t}function lS(t){return t.registrationStatus===1&&t.registrationTime+C0<Date.now()}/**
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
 */async function uS({appConfig:t,heartbeatServiceProvider:e},n){const r=cS(t,n),i=qA(t,n),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={installation:{sdkVersion:k0,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await L0(()=>fetch(r,l));if(u.ok){const d=await u.json();return N0(d)}else throw await D0("Generate Auth Token",u)}function cS(t,{fid:e}){return`${b0(t)}/${e}/authTokens:generate`}/**
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
 */async function Pf(t,e=!1){let n;const r=await Bu(t.appConfig,s=>{if(!z0(s))throw fi.create("not-registered");const o=s.authToken;if(!e&&fS(o))return s;if(o.requestStatus===1)return n=dS(t,e),s;{if(!navigator.onLine)throw fi.create("app-offline");const l=mS(s);return n=hS(t,l),l}});return n?await n:r.authToken}async function dS(t,e){let n=await Vg(t.appConfig);for(;n.authToken.requestStatus===1;)await O0(100),n=await Vg(t.appConfig);const r=n.authToken;return r.requestStatus===0?Pf(t,e):r}function Vg(t){return Bu(t,e=>{if(!z0(e))throw fi.create("not-registered");const n=e.authToken;return gS(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function hS(t,e){try{const n=await uS(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ou(t.appConfig,r),n}catch(n){if(P0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await U0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ou(t.appConfig,r)}throw n}}function z0(t){return t!==void 0&&t.registrationStatus===2}function fS(t){return t.requestStatus===2&&!pS(t)}function pS(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+BA}function mS(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function gS(t){return t.requestStatus===1&&t.requestTime+C0<Date.now()}/**
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
 */async function yS(t){const e=t,{installationEntry:n,registrationPromise:r}=await Rf(e);return r?r.catch(console.error):Pf(e).catch(console.error),n.fid}/**
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
 */async function vS(t,e=!1){const n=t;return await _S(n),(await Pf(n,e)).token}async function _S(t){const{registrationPromise:e}=await Rf(t);e&&await e}/**
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
 */function wS(t){if(!t||!t.options)throw td("App Configuration");if(!t.name)throw td("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw td(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function td(t){return fi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="installations",ES="installations-internal",TS=t=>{const e=t.getProvider("app").getImmediate(),n=wS(e),r=Ii(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},IS=t=>{const e=t.getProvider("app").getImmediate(),n=Ii(e,$0).getImmediate();return{getId:()=>yS(n),getToken:i=>vS(n,i)}};function xS(){Cn(new un($0,TS,"PUBLIC")),Cn(new un(ES,IS,"PRIVATE"))}xS();Qt(S0,Cf);Qt(S0,Cf,"esm2017");/**
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
 */const au="analytics",AS="firebase_id",SS="origin",CS=60*1e3,kS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",bf="https://www.googletagmanager.com/gtag/js";/**
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
 */const Pt=new Fu("@firebase/analytics");/**
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
 */const RS={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Mt=new Ti("analytics","Analytics",RS);/**
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
 */function PS(t){if(!t.startsWith(bf)){const e=Mt.create("invalid-gtag-resource",{gtagURL:t});return Pt.warn(e.message),""}return t}function W0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function bS(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function NS(t,e){const n=bS("firebase-js-sdk-policy",{createScriptURL:PS}),r=document.createElement("script"),i=`${bf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function DS(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function VS(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await W0(n)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(l){Pt.error(l)}t("config",i,s)}async function LS(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await W0(n);for(const u of o){const d=l.find(y=>y.measurementId===u),f=d&&e[d.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Pt.error(s)}}function OS(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await LS(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await VS(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,d]=o;t("get",l,u,d)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Pt.error(l)}}return i}function MS(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=OS(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function jS(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(bf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=30,US=1e3;class BS{constructor(e={},n=US){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const q0=new BS;function zS(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function $S(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:zS(r)},s=kS.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Mt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function WS(t,e=q0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Mt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Mt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new GS;return setTimeout(async()=>{l.abort()},CS),H0({appId:r,apiKey:i,measurementId:s},o,l,e)}async function H0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=q0){var s;const{appId:o,measurementId:l}=t;try{await qS(r,e)}catch(u){if(l)return Pt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await $S(t);return i.deleteThrottleMetadata(o),u}catch(u){const d=u;if(!HS(d)){if(i.deleteThrottleMetadata(o),l)return Pt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:l};throw u}const f=Number((s=d==null?void 0:d.customData)===null||s===void 0?void 0:s.httpStatus)===503?xg(n,i.intervalMillis,FS):xg(n,i.intervalMillis),y={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,y),Pt.debug(`Calling attemptFetch again in ${f} millis`),H0(t,y,r,i)}}function qS(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Mt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function HS(t){if(!(t instanceof hn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class GS{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function KS(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QS(){if(v0())try{await _0()}catch(t){return Pt.warn(Mt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Pt.warn(Mt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function YS(t,e,n,r,i,s,o){var l;const u=WS(t);u.then(A=>{n[A.measurementId]=A.appId,t.options.measurementId&&A.measurementId!==t.options.measurementId&&Pt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>Pt.error(A)),e.push(u);const d=QS().then(A=>{if(A)return r.getId()}),[f,y]=await Promise.all([u,d]);jS(s)||NS(s,f.measurementId),i("js",new Date);const _=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return _[SS]="firebase",_.update=!0,y!=null&&(_[AS]=y),i("config",f.measurementId,_),f.measurementId}/**
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
 */class XS{constructor(e){this.app=e}_delete(){return delete So[this.app.options.appId],Promise.resolve()}}let So={},Lg=[];const Og={};let nd="dataLayer",JS="gtag",Mg,G0,jg=!1;function ZS(){const t=[];if(y0()&&t.push("This is a browser extension environment."),w1()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Mt.create("invalid-analytics-context",{errorInfo:e});Pt.warn(n.message)}}function eC(t,e,n){ZS();const r=t.options.appId;if(!r)throw Mt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Pt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Mt.create("no-api-key");if(So[r]!=null)throw Mt.create("already-exists",{id:r});if(!jg){DS(nd);const{wrappedGtag:s,gtagCore:o}=MS(So,Lg,Og,nd,JS);G0=s,Mg=o,jg=!0}return So[r]=YS(t,Lg,Og,e,Mg,nd,n),new XS(t)}function tC(t=Sf()){t=Le(t);const e=Ii(t,au);return e.isInitialized()?e.getImmediate():nC(t)}function nC(t,e={}){const n=Ii(t,au);if(n.isInitialized()){const i=n.getImmediate();if(Qo(e,n.getOptions()))return i;throw Mt.create("already-initialized")}return n.initialize({options:e})}function rC(t,e,n,r){t=Le(t),KS(G0,So[t.app.options.appId],e,n,r).catch(i=>Pt.error(i))}const Fg="@firebase/analytics",Ug="0.10.8";function iC(){Cn(new un(au,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return eC(r,i,n)},"PUBLIC")),Cn(new un("analytics-internal",t,"PRIVATE")),Qt(Fg,Ug),Qt(Fg,Ug,"esm2017");function t(e){try{const n=e.getProvider(au).getImmediate();return{logEvent:(r,i,s)=>rC(n,r,i,s)}}catch(n){throw Mt.create("interop-component-reg-failed",{reason:n})}}}iC();function Nf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function K0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sC=K0,Q0=new Ti("auth","Firebase",K0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=new Fu("@firebase/auth");function oC(t,...e){lu.logLevel<=ae.WARN&&lu.warn(`Auth (${As}): ${t}`,...e)}function Al(t,...e){lu.logLevel<=ae.ERROR&&lu.error(`Auth (${As}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,...e){throw Df(t,...e)}function Tn(t,...e){return Df(t,...e)}function Y0(t,e,n){const r=Object.assign(Object.assign({},sC()),{[e]:n});return new Ti("auth","Firebase",r).create(e,{appName:t.name})}function Bn(t){return Y0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Df(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Q0.create(t,...e)}function X(t,e,...n){if(!t)throw Df(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Al(e),new Error(e)}function Kn(t,e){t||Mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function aC(){return Bg()==="http:"||Bg()==="https:"}function Bg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aC()||y0()||"connection"in navigator)?navigator.onLine:!0}function uC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=p1()||y1()}get(){return lC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=new fa(3e4,6e4);function Zn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function er(t,e,n,r,i={}){return J0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ha(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return g1()||(d.referrerPolicy="no-referrer"),X0.fetch()(Z0(t,t.config.apiHost,n,l),d)})}async function J0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},cC),e);try{const i=new fC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ll(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ll(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ll(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ll(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Y0(t,f,d);cn(t,f)}}catch(i){if(i instanceof hn)throw i;cn(t,"network-request-failed",{message:String(i)})}}async function pa(t,e,n,r,i={}){const s=await er(t,e,n,r,i);return"mfaPendingCredential"in s&&cn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Z0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Vf(t.config,i):`${t.config.apiScheme}://${i}`}function hC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tn(this.auth,"network-request-failed")),dC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ll(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tn(t,e,r);return i.customData._tokenResponse=n,i}function zg(t){return t!==void 0&&t.enterprise!==void 0}class pC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return hC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function mC(t,e){return er(t,"GET","/v2/recaptchaConfig",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gC(t,e){return er(t,"POST","/v1/accounts:delete",e)}async function ew(t,e){return er(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yC(t,e=!1){const n=Le(t),r=await n.getIdToken(e),i=Lf(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Co(rd(i.auth_time)),issuedAtTime:Co(rd(i.iat)),expirationTime:Co(rd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rd(t){return Number(t)*1e3}function Lf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Al("JWT malformed, contained fewer than 3 sections"),null;try{const i=f0(n);return i?JSON.parse(i):(Al("Failed to decode base64 JWT payload"),null)}catch(i){return Al("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $g(t){const e=Lf(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hn&&vC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Co(this.lastLoginAt),this.creationTime=Co(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Xo(t,ew(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?tw(s.providerUserInfo):[],l=EC(t.providerData,o),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new hh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,y)}async function wC(t){const e=Le(t);await uu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function EC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function tw(t){return t.map(e=>{var{providerId:n}=e,r=Nf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC(t,e){const n=await J0(t,{},async()=>{const r=ha({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Z0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",X0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function IC(t,e){return er(t,"POST","/v2/accounts:revokeToken",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$g(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=$g(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await TC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new is;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Nf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _C(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Xo(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yC(this,e)}reload(){return wC(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(Bn(this.auth));const e=await this.getIdToken();return await Xo(this,gC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,d,f;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,N=(o=n.photoURL)!==null&&o!==void 0?o:void 0,V=(l=n.tenantId)!==null&&l!==void 0?l:void 0,M=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,C=(d=n.createdAt)!==null&&d!==void 0?d:void 0,E=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:S,isAnonymous:O,providerData:F,stsTokenManager:p}=n;X(x&&p,e,"internal-error");const v=is.fromJSON(this.name,p);X(typeof x=="string",e,"internal-error"),sr(y,e.name),sr(_,e.name),X(typeof S=="boolean",e,"internal-error"),X(typeof O=="boolean",e,"internal-error"),sr(A,e.name),sr(N,e.name),sr(V,e.name),sr(M,e.name),sr(C,e.name),sr(E,e.name);const w=new jn({uid:x,auth:e,email:_,emailVerified:S,displayName:y,isAnonymous:O,photoURL:N,phoneNumber:A,tenantId:V,stsTokenManager:v,createdAt:C,lastLoginAt:E});return F&&Array.isArray(F)&&(w.providerData=F.map(T=>Object.assign({},T))),M&&(w._redirectEventId=M),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new is;i.updateFromServerResponse(n);const s=new jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?tw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new is;l.updateFromIdToken(r);const u=new jn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new hh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=new Map;function Fn(t){Kn(t instanceof Function,"Expected a class definition");let e=Wg.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wg.set(t,e),e)}/**
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
 */class nw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nw.type="NONE";const qg=nw;/**
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
 */function Sl(t,e,n){return`firebase:${t}:${e}:${n}`}class ss{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Sl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Sl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ss(Fn(qg),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||Fn(qg);const o=Sl(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const f=await d._get(o);if(f){const y=jn._fromJSON(e,f);d!==s&&(l=y),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ss(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new ss(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ow(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lw(e))return"Blackberry";if(uw(e))return"Webos";if(iw(e))return"Safari";if((e.includes("chrome/")||sw(e))&&!e.includes("edge/"))return"Chrome";if(aw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rw(t=pt()){return/firefox\//i.test(t)}function iw(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sw(t=pt()){return/crios\//i.test(t)}function ow(t=pt()){return/iemobile/i.test(t)}function aw(t=pt()){return/android/i.test(t)}function lw(t=pt()){return/blackberry/i.test(t)}function uw(t=pt()){return/webos/i.test(t)}function Of(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xC(t=pt()){var e;return Of(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function AC(){return v1()&&document.documentMode===10}function cw(t=pt()){return Of(t)||aw(t)||uw(t)||lw(t)||/windows phone/i.test(t)||ow(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(t,e=[]){let n;switch(t){case"Browser":n=Hg(pt());break;case"Worker":n=`${Hg(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${As}/${r}`}/**
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
 */class SC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function CC(t,e={}){return er(t,"GET","/v2/passwordPolicy",Zn(t,e))}/**
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
 */const kC=6;class RC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:kC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gg(this),this.idTokenSubscription=new Gg(this),this.beforeStateQueue=new SC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Q0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ss.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ew(this,{idToken:e}),r=await jn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(_n(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject(Bn(this));const n=e?Le(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(Bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject(Bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await CC(this),n=new RC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await IC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await ss.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&oC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Or(t){return Le(t)}class Gg{constructor(e){this.auth=e,this.observer=null,this.addObserver=A1(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bC(t){zu=t}function hw(t){return zu.loadJS(t)}function NC(){return zu.recaptchaEnterpriseScript}function DC(){return zu.gapiScript}function VC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const LC="recaptcha-enterprise",OC="NO_RECAPTCHA";class MC{constructor(e){this.type=LC,this.auth=Or(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{mC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new pC(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;zg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(OC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&zg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=NC();u.length!==0&&(u+=l),hw(u).then(()=>{i(l,s,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Kg(t,e,n,r=!1){const i=new MC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function cu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Kg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Kg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t,e){const n=Ii(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Qo(s,e??{}))return i;cn(i,"already-initialized")}return n.initialize({options:e})}function FC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function UC(t,e,n){const r=Or(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=fw(e),{host:o,port:l}=BC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),zC()}function fw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BC(t){const e=fw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Qg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Qg(o)}}}function Qg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}async function $C(t,e){return er(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(t,e){return pa(t,"POST","/v1/accounts:signInWithPassword",Zn(t,e))}async function qC(t,e){return er(t,"POST","/v1/accounts:sendOobCode",Zn(t,e))}async function HC(t,e){return qC(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GC(t,e){return pa(t,"POST","/v1/accounts:signInWithEmailLink",Zn(t,e))}async function KC(t,e){return pa(t,"POST","/v1/accounts:signInWithEmailLink",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends Mf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Jo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Jo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cu(e,n,"signInWithPassword",WC);case"emailLink":return GC(e,{email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cu(e,r,"signUpPassword",$C);case"emailLink":return KC(e,{idToken:n,email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(t,e){return pa(t,"POST","/v1/accounts:signInWithIdp",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC="http://localhost";class mi extends Mf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Nf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new mi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return os(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,os(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,os(e,n)}buildRequest(){const e={requestUri:QC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ha(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XC(t){const e=co(ho(t)).link,n=e?co(ho(e)).deep_link_id:null,r=co(ho(t)).deep_link_id;return(r?co(ho(r)).link:null)||r||n||e||t}class jf{constructor(e){var n,r,i,s,o,l;const u=co(ho(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,y=YC((i=u.mode)!==null&&i!==void 0?i:null);X(d&&f&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=XC(e);try{return new jf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.providerId=Ss.PROVIDER_ID}static credential(e,n){return Jo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=jf.parseLink(n);return X(r,"argument-error"),Jo._fromEmailAndCode(e,r.code,r.tenantId)}}Ss.PROVIDER_ID="password";Ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ma extends pw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends ma{constructor(){super("facebook.com")}static credential(e){return mi._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends ma{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mi._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.GOOGLE_SIGN_IN_METHOD="google.com";dr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends ma{constructor(){super("github.com")}static credential(e){return mi._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends ma{constructor(){super("twitter.com")}static credential(e,n){return mi._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JC(t,e){return pa(t,"POST","/v1/accounts:signUp",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jn._fromIdTokenResponse(e,r,i),o=Yg(r);return new gi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Yg(r);return new gi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Yg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du extends hn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,du.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new du(e,n,r,i)}}function mw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?du._fromErrorAndOperation(t,s,e,r):s})}async function ZC(t,e,n=!1){const r=await Xo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gi._forOperation(t,"link",r)}/**
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
 */async function ek(t,e,n=!1){const{auth:r}=t;if(_n(r.app))return Promise.reject(Bn(r));const i="reauthenticate";try{const s=await Xo(t,mw(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=Lf(s.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),gi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&cn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gw(t,e,n=!1){if(_n(t.app))return Promise.reject(Bn(t));const r="signIn",i=await mw(t,r,e),s=await gi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function tk(t,e){return gw(Or(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(t){const e=Or(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nk(t,e,n){const r=Or(t);await cu(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",HC)}async function rk(t,e,n){if(_n(t.app))return Promise.reject(Bn(t));const r=Or(t),o=await cu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",JC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&yw(t),u}),l=await gi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function ik(t,e,n){return _n(t.app)?Promise.reject(Bn(t)):tk(Le(t),Ss.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&yw(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(t,e){return Le(t).setPersistence(e)}function sk(t,e,n,r){return Le(t).onIdTokenChanged(e,n,r)}function ok(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function ak(t,e,n,r){return Le(t).onAuthStateChanged(e,n,r)}function lk(t){return Le(t).signOut()}const hu="__sak";/**
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
 */class vw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hu,"1"),this.storage.removeItem(hu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=1e3,ck=10;class _w extends vw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);AC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ck):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_w.type="LOCAL";const fh=_w;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww extends vw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ww.type="SESSION";const Ew=ww;/**
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
 */function dk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $u{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $u(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(n.origin,s)),u=await dk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$u.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const d=Ff("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(y){const _=y;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(_.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(){return window}function fk(t){In().location.href=t}/**
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
 */function Tw(){return typeof In().WorkerGlobalScope<"u"&&typeof In().importScripts=="function"}async function pk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gk(){return Tw()?self:null}/**
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
 */const Iw="firebaseLocalStorageDb",yk=1,fu="firebaseLocalStorage",xw="fbase_key";class ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wu(t,e){return t.transaction([fu],e?"readwrite":"readonly").objectStore(fu)}function vk(){const t=indexedDB.deleteDatabase(Iw);return new ga(t).toPromise()}function ph(){const t=indexedDB.open(Iw,yk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fu,{keyPath:xw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fu)?e(r):(r.close(),await vk(),e(await ph()))})})}async function Jg(t,e,n){const r=Wu(t,!0).put({[xw]:e,value:n});return new ga(r).toPromise()}async function _k(t,e){const n=Wu(t,!1).get(e),r=await new ga(n).toPromise();return r===void 0?null:r.value}function Zg(t,e){const n=Wu(t,!0).delete(e);return new ga(n).toPromise()}const wk=800,Ek=3;class Aw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ph(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ek)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$u._getInstance(gk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pk(),!this.activeServiceWorker)return;this.sender=new hk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ph();return await Jg(e,hu,"1"),await Zg(e,hu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_k(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wu(i,!1).getAll();return new ga(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Aw.type="LOCAL";const Tk=Aw;new fa(3e4,6e4);/**
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
 */function Ik(t,e){return e?Fn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Uf extends Mf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xk(t){return gw(t.auth,new Uf(t),t.bypassAuthState)}function Ak(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),ek(n,new Uf(t),t.bypassAuthState)}async function Sk(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),ZC(n,new Uf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xk;case"linkViaPopup":case"linkViaRedirect":return Sk;case"reauthViaPopup":case"reauthViaRedirect":return Ak;default:cn(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=new fa(2e3,1e4);class Xi extends Sw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Xi.currentPopupAction&&Xi.currentPopupAction.cancel(),Xi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=Ff();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ck.get())};e()}}Xi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk="pendingRedirect",Cl=new Map;class Rk extends Sw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Cl.get(this.auth._key());if(!e){try{const r=await Pk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Cl.set(this.auth._key(),e)}return this.bypassAuthState||Cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Pk(t,e){const n=Dk(e),r=Nk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function bk(t,e){Cl.set(t._key(),e)}function Nk(t){return Fn(t._redirectPersistence)}function Dk(t){return Sl(kk,t.config.apiKey,t.name)}async function Vk(t,e,n=!1){if(_n(t.app))return Promise.reject(Bn(t));const r=Or(t),i=Ik(r,e),o=await new Rk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=10*60*1e3;class Ok{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Cw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lk&&this.cachedEventUids.clear(),this.cachedEventUids.has(ey(e))}saveEventToCache(e){this.cachedEventUids.add(ey(e)),this.lastProcessedEventTime=Date.now()}}function ey(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Cw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Mk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(t,e={}){return er(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Uk=/^https?/;async function Bk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jk(t);for(const n of e)try{if(zk(n))return}catch{}cn(t,"unauthorized-domain")}function zk(t){const e=dh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Uk.test(n))return!1;if(Fk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $k=new fa(3e4,6e4);function ty(){const t=In().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Wk(t){return new Promise((e,n)=>{var r,i,s;function o(){ty(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ty(),n(Tn(t,"network-request-failed"))},timeout:$k.get()})}if(!((i=(r=In().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=In().gapi)===null||s===void 0)&&s.load)o();else{const l=VC("iframefcb");return In()[l]=()=>{gapi.load?o():n(Tn(t,"network-request-failed"))},hw(`${DC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw kl=null,e})}let kl=null;function qk(t){return kl=kl||Wk(t),kl}/**
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
 */const Hk=new fa(5e3,15e3),Gk="__/auth/iframe",Kk="emulator/auth/iframe",Qk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xk(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vf(e,Kk):`https://${t.config.authDomain}/${Gk}`,r={apiKey:e.apiKey,appName:t.name,v:As},i=Yk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ha(r).slice(1)}`}async function Jk(t){const e=await qk(t),n=In().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:Xk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Tn(t,"network-request-failed"),l=In().setTimeout(()=>{s(o)},Hk.get());function u(){In().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const Zk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eR=500,tR=600,nR="_blank",rR="http://localhost";class ny{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iR(t,e,n,r=eR,i=tR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Zk),{width:r.toString(),height:i.toString(),top:s,left:o}),d=pt().toLowerCase();n&&(l=sw(d)?nR:n),rw(d)&&(e=e||rR,u.scrollbars="yes");const f=Object.entries(u).reduce((_,[A,N])=>`${_}${A}=${N},`,"");if(xC(d)&&l!=="_self")return sR(e||"",l),new ny(null);const y=window.open(e||"",l,f);X(y,t,"popup-blocked");try{y.focus()}catch{}return new ny(y)}function sR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const oR="__/auth/handler",aR="emulator/auth/handler",lR=encodeURIComponent("fac");async function ry(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:As,eventId:i};if(e instanceof pw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",x1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,y]of Object.entries({}))o[f]=y}if(e instanceof ma){const f=e.getScopes().filter(y=>y!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),d=u?`#${lR}=${encodeURIComponent(u)}`:"";return`${uR(t)}?${ha(l).slice(1)}${d}`}function uR({config:t}){return t.emulator?Vf(t,aR):`https://${t.authDomain}/${oR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="webStorageSupport";class cR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ew,this._completeRedirectFn=Vk,this._overrideRedirectResult=bk}async _openPopup(e,n,r,i){var s;Kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ry(e,n,r,dh(),i);return iR(e,o,Ff())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ry(e,n,r,dh(),i);return fk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Jk(e),r=new Ok(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(id,{type:id},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[id];o!==void 0&&n(!!o),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Bk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cw()||iw()||Of()}}const dR=cR;var iy="@firebase/auth",sy="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pR(t){Cn(new un("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dw(t)},d=new PC(r,i,s,u);return FC(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Cn(new un("auth-internal",e=>{const n=Or(e.getProvider("auth").getImmediate());return(r=>new hR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(iy,sy,fR(t)),Qt(iy,sy,"esm2017")}/**
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
 */const mR=5*60,gR=g0("authIdTokenMaxAge")||mR;let oy=null;const yR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gR)return;const i=n==null?void 0:n.token;oy!==i&&(oy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vR(t=Sf()){const e=Ii(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jC(t,{popupRedirectResolver:dR,persistence:[Tk,fh,Ew]}),r=g0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=yR(s.toString());ok(n,o,()=>o(n.currentUser)),sk(n,l=>o(l))}}const i=p0("auth");return i&&UC(n,`http://${i}`),n}function _R(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}bC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Tn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",_R().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pR("Browser");var ay=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ai,kw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(p,v){function w(){}w.prototype=v.prototype,p.D=v.prototype,p.prototype=new w,p.prototype.constructor=p,p.C=function(T,k,P){for(var I=Array(arguments.length-2),Tt=2;Tt<arguments.length;Tt++)I[Tt-2]=arguments[Tt];return v.prototype[k].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(p,v,w){w||(w=0);var T=Array(16);if(typeof v=="string")for(var k=0;16>k;++k)T[k]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(k=0;16>k;++k)T[k]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=p.g[0],w=p.g[1],k=p.g[2];var P=p.g[3],I=v+(P^w&(k^P))+T[0]+3614090360&4294967295;v=w+(I<<7&4294967295|I>>>25),I=P+(k^v&(w^k))+T[1]+3905402710&4294967295,P=v+(I<<12&4294967295|I>>>20),I=k+(w^P&(v^w))+T[2]+606105819&4294967295,k=P+(I<<17&4294967295|I>>>15),I=w+(v^k&(P^v))+T[3]+3250441966&4294967295,w=k+(I<<22&4294967295|I>>>10),I=v+(P^w&(k^P))+T[4]+4118548399&4294967295,v=w+(I<<7&4294967295|I>>>25),I=P+(k^v&(w^k))+T[5]+1200080426&4294967295,P=v+(I<<12&4294967295|I>>>20),I=k+(w^P&(v^w))+T[6]+2821735955&4294967295,k=P+(I<<17&4294967295|I>>>15),I=w+(v^k&(P^v))+T[7]+4249261313&4294967295,w=k+(I<<22&4294967295|I>>>10),I=v+(P^w&(k^P))+T[8]+1770035416&4294967295,v=w+(I<<7&4294967295|I>>>25),I=P+(k^v&(w^k))+T[9]+2336552879&4294967295,P=v+(I<<12&4294967295|I>>>20),I=k+(w^P&(v^w))+T[10]+4294925233&4294967295,k=P+(I<<17&4294967295|I>>>15),I=w+(v^k&(P^v))+T[11]+2304563134&4294967295,w=k+(I<<22&4294967295|I>>>10),I=v+(P^w&(k^P))+T[12]+1804603682&4294967295,v=w+(I<<7&4294967295|I>>>25),I=P+(k^v&(w^k))+T[13]+4254626195&4294967295,P=v+(I<<12&4294967295|I>>>20),I=k+(w^P&(v^w))+T[14]+2792965006&4294967295,k=P+(I<<17&4294967295|I>>>15),I=w+(v^k&(P^v))+T[15]+1236535329&4294967295,w=k+(I<<22&4294967295|I>>>10),I=v+(k^P&(w^k))+T[1]+4129170786&4294967295,v=w+(I<<5&4294967295|I>>>27),I=P+(w^k&(v^w))+T[6]+3225465664&4294967295,P=v+(I<<9&4294967295|I>>>23),I=k+(v^w&(P^v))+T[11]+643717713&4294967295,k=P+(I<<14&4294967295|I>>>18),I=w+(P^v&(k^P))+T[0]+3921069994&4294967295,w=k+(I<<20&4294967295|I>>>12),I=v+(k^P&(w^k))+T[5]+3593408605&4294967295,v=w+(I<<5&4294967295|I>>>27),I=P+(w^k&(v^w))+T[10]+38016083&4294967295,P=v+(I<<9&4294967295|I>>>23),I=k+(v^w&(P^v))+T[15]+3634488961&4294967295,k=P+(I<<14&4294967295|I>>>18),I=w+(P^v&(k^P))+T[4]+3889429448&4294967295,w=k+(I<<20&4294967295|I>>>12),I=v+(k^P&(w^k))+T[9]+568446438&4294967295,v=w+(I<<5&4294967295|I>>>27),I=P+(w^k&(v^w))+T[14]+3275163606&4294967295,P=v+(I<<9&4294967295|I>>>23),I=k+(v^w&(P^v))+T[3]+4107603335&4294967295,k=P+(I<<14&4294967295|I>>>18),I=w+(P^v&(k^P))+T[8]+1163531501&4294967295,w=k+(I<<20&4294967295|I>>>12),I=v+(k^P&(w^k))+T[13]+2850285829&4294967295,v=w+(I<<5&4294967295|I>>>27),I=P+(w^k&(v^w))+T[2]+4243563512&4294967295,P=v+(I<<9&4294967295|I>>>23),I=k+(v^w&(P^v))+T[7]+1735328473&4294967295,k=P+(I<<14&4294967295|I>>>18),I=w+(P^v&(k^P))+T[12]+2368359562&4294967295,w=k+(I<<20&4294967295|I>>>12),I=v+(w^k^P)+T[5]+4294588738&4294967295,v=w+(I<<4&4294967295|I>>>28),I=P+(v^w^k)+T[8]+2272392833&4294967295,P=v+(I<<11&4294967295|I>>>21),I=k+(P^v^w)+T[11]+1839030562&4294967295,k=P+(I<<16&4294967295|I>>>16),I=w+(k^P^v)+T[14]+4259657740&4294967295,w=k+(I<<23&4294967295|I>>>9),I=v+(w^k^P)+T[1]+2763975236&4294967295,v=w+(I<<4&4294967295|I>>>28),I=P+(v^w^k)+T[4]+1272893353&4294967295,P=v+(I<<11&4294967295|I>>>21),I=k+(P^v^w)+T[7]+4139469664&4294967295,k=P+(I<<16&4294967295|I>>>16),I=w+(k^P^v)+T[10]+3200236656&4294967295,w=k+(I<<23&4294967295|I>>>9),I=v+(w^k^P)+T[13]+681279174&4294967295,v=w+(I<<4&4294967295|I>>>28),I=P+(v^w^k)+T[0]+3936430074&4294967295,P=v+(I<<11&4294967295|I>>>21),I=k+(P^v^w)+T[3]+3572445317&4294967295,k=P+(I<<16&4294967295|I>>>16),I=w+(k^P^v)+T[6]+76029189&4294967295,w=k+(I<<23&4294967295|I>>>9),I=v+(w^k^P)+T[9]+3654602809&4294967295,v=w+(I<<4&4294967295|I>>>28),I=P+(v^w^k)+T[12]+3873151461&4294967295,P=v+(I<<11&4294967295|I>>>21),I=k+(P^v^w)+T[15]+530742520&4294967295,k=P+(I<<16&4294967295|I>>>16),I=w+(k^P^v)+T[2]+3299628645&4294967295,w=k+(I<<23&4294967295|I>>>9),I=v+(k^(w|~P))+T[0]+4096336452&4294967295,v=w+(I<<6&4294967295|I>>>26),I=P+(w^(v|~k))+T[7]+1126891415&4294967295,P=v+(I<<10&4294967295|I>>>22),I=k+(v^(P|~w))+T[14]+2878612391&4294967295,k=P+(I<<15&4294967295|I>>>17),I=w+(P^(k|~v))+T[5]+4237533241&4294967295,w=k+(I<<21&4294967295|I>>>11),I=v+(k^(w|~P))+T[12]+1700485571&4294967295,v=w+(I<<6&4294967295|I>>>26),I=P+(w^(v|~k))+T[3]+2399980690&4294967295,P=v+(I<<10&4294967295|I>>>22),I=k+(v^(P|~w))+T[10]+4293915773&4294967295,k=P+(I<<15&4294967295|I>>>17),I=w+(P^(k|~v))+T[1]+2240044497&4294967295,w=k+(I<<21&4294967295|I>>>11),I=v+(k^(w|~P))+T[8]+1873313359&4294967295,v=w+(I<<6&4294967295|I>>>26),I=P+(w^(v|~k))+T[15]+4264355552&4294967295,P=v+(I<<10&4294967295|I>>>22),I=k+(v^(P|~w))+T[6]+2734768916&4294967295,k=P+(I<<15&4294967295|I>>>17),I=w+(P^(k|~v))+T[13]+1309151649&4294967295,w=k+(I<<21&4294967295|I>>>11),I=v+(k^(w|~P))+T[4]+4149444226&4294967295,v=w+(I<<6&4294967295|I>>>26),I=P+(w^(v|~k))+T[11]+3174756917&4294967295,P=v+(I<<10&4294967295|I>>>22),I=k+(v^(P|~w))+T[2]+718787259&4294967295,k=P+(I<<15&4294967295|I>>>17),I=w+(P^(k|~v))+T[9]+3951481745&4294967295,p.g[0]=p.g[0]+v&4294967295,p.g[1]=p.g[1]+(k+(I<<21&4294967295|I>>>11))&4294967295,p.g[2]=p.g[2]+k&4294967295,p.g[3]=p.g[3]+P&4294967295}r.prototype.u=function(p,v){v===void 0&&(v=p.length);for(var w=v-this.blockSize,T=this.B,k=this.h,P=0;P<v;){if(k==0)for(;P<=w;)i(this,p,P),P+=this.blockSize;if(typeof p=="string"){for(;P<v;)if(T[k++]=p.charCodeAt(P++),k==this.blockSize){i(this,T),k=0;break}}else for(;P<v;)if(T[k++]=p[P++],k==this.blockSize){i(this,T),k=0;break}}this.h=k,this.o+=v},r.prototype.v=function(){var p=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);p[0]=128;for(var v=1;v<p.length-8;++v)p[v]=0;var w=8*this.o;for(v=p.length-8;v<p.length;++v)p[v]=w&255,w/=256;for(this.u(p),p=Array(16),v=w=0;4>v;++v)for(var T=0;32>T;T+=8)p[w++]=this.g[v]>>>T&255;return p};function s(p,v){var w=l;return Object.prototype.hasOwnProperty.call(w,p)?w[p]:w[p]=v(p)}function o(p,v){this.h=v;for(var w=[],T=!0,k=p.length-1;0<=k;k--){var P=p[k]|0;T&&P==v||(w[k]=P,T=!1)}this.g=w}var l={};function u(p){return-128<=p&&128>p?s(p,function(v){return new o([v|0],0>v?-1:0)}):new o([p|0],0>p?-1:0)}function d(p){if(isNaN(p)||!isFinite(p))return y;if(0>p)return M(d(-p));for(var v=[],w=1,T=0;p>=w;T++)v[T]=p/w|0,w*=4294967296;return new o(v,0)}function f(p,v){if(p.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(p.charAt(0)=="-")return M(f(p.substring(1),v));if(0<=p.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=d(Math.pow(v,8)),T=y,k=0;k<p.length;k+=8){var P=Math.min(8,p.length-k),I=parseInt(p.substring(k,k+P),v);8>P?(P=d(Math.pow(v,P)),T=T.j(P).add(d(I))):(T=T.j(w),T=T.add(d(I)))}return T}var y=u(0),_=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(V(this))return-M(this).m();for(var p=0,v=1,w=0;w<this.g.length;w++){var T=this.i(w);p+=(0<=T?T:4294967296+T)*v,v*=4294967296}return p},t.toString=function(p){if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(N(this))return"0";if(V(this))return"-"+M(this).toString(p);for(var v=d(Math.pow(p,6)),w=this,T="";;){var k=S(w,v).g;w=C(w,k.j(v));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(p);if(w=k,N(w))return P+T;for(;6>P.length;)P="0"+P;T=P+T}},t.i=function(p){return 0>p?0:p<this.g.length?this.g[p]:this.h};function N(p){if(p.h!=0)return!1;for(var v=0;v<p.g.length;v++)if(p.g[v]!=0)return!1;return!0}function V(p){return p.h==-1}t.l=function(p){return p=C(this,p),V(p)?-1:N(p)?0:1};function M(p){for(var v=p.g.length,w=[],T=0;T<v;T++)w[T]=~p.g[T];return new o(w,~p.h).add(_)}t.abs=function(){return V(this)?M(this):this},t.add=function(p){for(var v=Math.max(this.g.length,p.g.length),w=[],T=0,k=0;k<=v;k++){var P=T+(this.i(k)&65535)+(p.i(k)&65535),I=(P>>>16)+(this.i(k)>>>16)+(p.i(k)>>>16);T=I>>>16,P&=65535,I&=65535,w[k]=I<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function C(p,v){return p.add(M(v))}t.j=function(p){if(N(this)||N(p))return y;if(V(this))return V(p)?M(this).j(M(p)):M(M(this).j(p));if(V(p))return M(this.j(M(p)));if(0>this.l(A)&&0>p.l(A))return d(this.m()*p.m());for(var v=this.g.length+p.g.length,w=[],T=0;T<2*v;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(var k=0;k<p.g.length;k++){var P=this.i(T)>>>16,I=this.i(T)&65535,Tt=p.i(k)>>>16,fn=p.i(k)&65535;w[2*T+2*k]+=I*fn,E(w,2*T+2*k),w[2*T+2*k+1]+=P*fn,E(w,2*T+2*k+1),w[2*T+2*k+1]+=I*Tt,E(w,2*T+2*k+1),w[2*T+2*k+2]+=P*Tt,E(w,2*T+2*k+2)}for(T=0;T<v;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=v;T<2*v;T++)w[T]=0;return new o(w,0)};function E(p,v){for(;(p[v]&65535)!=p[v];)p[v+1]+=p[v]>>>16,p[v]&=65535,v++}function x(p,v){this.g=p,this.h=v}function S(p,v){if(N(v))throw Error("division by zero");if(N(p))return new x(y,y);if(V(p))return v=S(M(p),v),new x(M(v.g),M(v.h));if(V(v))return v=S(p,M(v)),new x(M(v.g),v.h);if(30<p.g.length){if(V(p)||V(v))throw Error("slowDivide_ only works with positive integers.");for(var w=_,T=v;0>=T.l(p);)w=O(w),T=O(T);var k=F(w,1),P=F(T,1);for(T=F(T,2),w=F(w,2);!N(T);){var I=P.add(T);0>=I.l(p)&&(k=k.add(w),P=I),T=F(T,1),w=F(w,1)}return v=C(p,k.j(v)),new x(k,v)}for(k=y;0<=p.l(v);){for(w=Math.max(1,Math.floor(p.m()/v.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),P=d(w),I=P.j(v);V(I)||0<I.l(p);)w-=T,P=d(w),I=P.j(v);N(P)&&(P=_),k=k.add(P),p=C(p,I)}return new x(k,p)}t.A=function(p){return S(this,p).h},t.and=function(p){for(var v=Math.max(this.g.length,p.g.length),w=[],T=0;T<v;T++)w[T]=this.i(T)&p.i(T);return new o(w,this.h&p.h)},t.or=function(p){for(var v=Math.max(this.g.length,p.g.length),w=[],T=0;T<v;T++)w[T]=this.i(T)|p.i(T);return new o(w,this.h|p.h)},t.xor=function(p){for(var v=Math.max(this.g.length,p.g.length),w=[],T=0;T<v;T++)w[T]=this.i(T)^p.i(T);return new o(w,this.h^p.h)};function O(p){for(var v=p.g.length+1,w=[],T=0;T<v;T++)w[T]=p.i(T)<<1|p.i(T-1)>>>31;return new o(w,p.h)}function F(p,v){var w=v>>5;v%=32;for(var T=p.g.length-w,k=[],P=0;P<T;P++)k[P]=0<v?p.i(P+w)>>>v|p.i(P+w+1)<<32-v:p.i(P+w);return new o(k,p.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,kw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,ai=o}).apply(typeof ay<"u"?ay:typeof self<"u"?self:typeof window<"u"?window:{});var ul=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rw,fo,Pw,Rl,mh,bw,Nw,Dw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,h){return a==Array.prototype||a==Object.prototype||(a[c]=h.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ul=="object"&&ul];for(var c=0;c<a.length;++c){var h=a[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var h=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var b=a[g];if(!(b in h))break e;h=h[b]}a=a[a.length-1],g=h[a],c=c(g),c!=g&&c!=null&&e(h,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var h=0,g=!1,b={next:function(){if(!g&&h<a.length){var D=h++;return{value:c(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function d(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,h){return a.call.apply(a.bind,arguments)}function y(a,c,h){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,g),a.apply(c,b)}}return function(){return a.apply(c,arguments)}}function _(a,c,h){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:y,_.apply(null,arguments)}function A(a,c){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function N(a,c){function h(){}h.prototype=c.prototype,a.aa=c.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(g,b,D){for(var B=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)B[ge-2]=arguments[ge];return c.prototype[b].apply(g,B)}}function V(a){const c=a.length;if(0<c){const h=Array(c);for(let g=0;g<c;g++)h[g]=a[g];return h}return[]}function M(a,c){for(let h=1;h<arguments.length;h++){const g=arguments[h];if(u(g)){const b=a.length||0,D=g.length||0;a.length=b+D;for(let B=0;B<D;B++)a[b+B]=g[B]}else a.push(g)}}class C{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function E(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function S(a){return S[" "](a),a}S[" "]=function(){};var O=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function F(a,c,h){for(const g in a)c.call(h,a[g],g,a)}function p(a,c){for(const h in a)c.call(void 0,a[h],h,a)}function v(a){const c={};for(const h in a)c[h]=a[h];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let h,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(h in g)a[h]=g[h];for(let D=0;D<w.length;D++)h=w[D],Object.prototype.hasOwnProperty.call(g,h)&&(a[h]=g[h])}}function k(a){var c=1;a=a.split(":");const h=[];for(;0<c&&a.length;)h.push(a.shift()),c--;return a.length&&h.push(a.join(":")),h}function P(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Y;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Tt{constructor(){this.h=this.g=null}add(c,h){const g=fn.get();g.set(c,h),this.h?this.h.next=g:this.g=g,this.h=g}}var fn=new C(()=>new Fr,a=>a.reset());class Fr{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Bt,$=!1,Y=new Tt,ne=()=>{const a=l.Promise.resolve(void 0);Bt=()=>{a.then(fe)}};var fe=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(h){P(h)}var c=fn;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}$=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var zt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return a}();function Jt(a,c){if(ve.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(O){e:{try{S(c.nodeName);var b=!0;break e}catch{}b=!1}b||(c=null)}}else h=="mouseover"?c=a.fromElement:h=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:$t[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Jt.aa.h.call(this)}}N(Jt,ve);var $t={2:"touch",3:"pen",4:"mouse"};Jt.prototype.h=function(){Jt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Wt="closure_listenable_"+(1e6*Math.random()|0),sc=0;function Aa(a,c,h,g,b){this.listener=a,this.proxy=null,this.src=c,this.type=h,this.capture=!!g,this.ha=b,this.key=++sc,this.da=this.fa=!1}function Si(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ur(a){this.src=a,this.g={},this.h=0}Ur.prototype.add=function(a,c,h,g,b){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var B=Ci(a,c,g,b);return-1<B?(c=a[B],h||(c.fa=!1)):(c=new Aa(c,this.src,D,!!g,b),c.fa=h,a.push(c)),c};function bs(a,c){var h=c.type;if(h in a.g){var g=a.g[h],b=Array.prototype.indexOf.call(g,c,void 0),D;(D=0<=b)&&Array.prototype.splice.call(g,b,1),D&&(Si(c),a.g[h].length==0&&(delete a.g[h],a.h--))}}function Ci(a,c,h,g){for(var b=0;b<a.length;++b){var D=a[b];if(!D.da&&D.listener==c&&D.capture==!!h&&D.ha==g)return b}return-1}var ki="closure_lm_"+(1e6*Math.random()|0),Ri={};function Sa(a,c,h,g,b){if(Array.isArray(c)){for(var D=0;D<c.length;D++)Sa(a,c[D],h,g,b);return null}return h=Ls(h),a&&a[Wt]?a.K(c,h,d(g)?!!g.capture:!1,b):Ns(a,c,h,!1,g,b)}function Ns(a,c,h,g,b,D){if(!c)throw Error("Invalid event type");var B=d(b)?!!b.capture:!!b,ge=Vs(a);if(ge||(a[ki]=ge=new Ur(a)),h=ge.add(c,h,g,B,D),h.proxy)return h;if(g=pn(),h.proxy=g,g.src=a,g.listener=h,a.addEventListener)zt||(b=B),b===void 0&&(b=!1),a.addEventListener(c.toString(),g,b);else if(a.attachEvent)a.attachEvent(Br(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function pn(){function a(h){return c.call(a.src,a.listener,h)}const c=oc;return a}function Ds(a,c,h,g,b){if(Array.isArray(c))for(var D=0;D<c.length;D++)Ds(a,c[D],h,g,b);else g=d(g)?!!g.capture:!!g,h=Ls(h),a&&a[Wt]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],h=Ci(D,h,g,b),-1<h&&(Si(D[h]),Array.prototype.splice.call(D,h,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=Vs(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Ci(c,h,g,b)),(h=-1<a?c[a]:null)&&It(h))}function It(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Wt])bs(c.i,a);else{var h=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(h,g,a.capture):c.detachEvent?c.detachEvent(Br(h),g):c.addListener&&c.removeListener&&c.removeListener(g),(h=Vs(c))?(bs(h,a),h.h==0&&(h.src=null,c[ki]=null)):Si(a)}}}function Br(a){return a in Ri?Ri[a]:Ri[a]="on"+a}function oc(a,c){if(a.da)a=!0;else{c=new Jt(c,this);var h=a.listener,g=a.ha||a.src;a.fa&&It(a),a=h.call(g,c)}return a}function Vs(a){return a=a[ki],a instanceof Ur?a:null}var mn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ls(a){return typeof a=="function"?a:(a[mn]||(a[mn]=function(c){return a.handleEvent(c)}),a[mn])}function be(){ce.call(this),this.i=new Ur(this),this.M=this,this.F=null}N(be,ce),be.prototype[Wt]=!0,be.prototype.removeEventListener=function(a,c,h,g){Ds(this,a,c,h,g)};function ze(a,c){var h,g=a.F;if(g)for(h=[];g;g=g.F)h.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new ve(c,a);else if(c instanceof ve)c.target=c.target||a;else{var b=c;c=new ve(g,a),T(c,b)}if(b=!0,h)for(var D=h.length-1;0<=D;D--){var B=c.g=h[D];b=Os(B,g,!0,c)&&b}if(B=c.g=a,b=Os(B,g,!0,c)&&b,b=Os(B,g,!1,c)&&b,h)for(D=0;D<h.length;D++)B=c.g=h[D],b=Os(B,g,!1,c)&&b}be.prototype.N=function(){if(be.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var h=a.g[c],g=0;g<h.length;g++)Si(h[g]);delete a.g[c],a.h--}}this.F=null},be.prototype.K=function(a,c,h,g){return this.i.add(String(a),c,!1,h,g)},be.prototype.L=function(a,c,h,g){return this.i.add(String(a),c,!0,h,g)};function Os(a,c,h,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var b=!0,D=0;D<c.length;++D){var B=c[D];if(B&&!B.da&&B.capture==h){var ge=B.listener,Ye=B.ha||B.src;B.fa&&bs(a.i,B),b=ge.call(Ye,g)!==!1&&b}}return b&&!g.defaultPrevented}function Ms(a,c,h){if(typeof a=="function")h&&(a=_(a,h));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function ac(a){a.g=Ms(()=>{a.g=null,a.i&&(a.i=!1,ac(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Ca extends ce{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ac(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rn(a){ce.call(this),this.h=a,this.g={}}N(Rn,ce);var js=[];function ka(a){F(a.g,function(c,h){this.g.hasOwnProperty(h)&&It(c)},a),a.g={}}Rn.prototype.N=function(){Rn.aa.N.call(this),ka(this)},Rn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mt=l.JSON.stringify,lc=l.JSON.parse,uc=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Fs(){}Fs.prototype.h=null;function Us(a){return a.h||(a.h=a.i())}function Bs(){}var zr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zs(){ve.call(this,"d")}N(zs,ve);function Pi(){ve.call(this,"c")}N(Pi,ve);var Pn={},Ra=null;function bi(){return Ra=Ra||new be}Pn.La="serverreachability";function Pa(a){ve.call(this,Pn.La,a)}N(Pa,ve);function $r(a){const c=bi();ze(c,new Pa(c))}Pn.STAT_EVENT="statevent";function Wr(a,c){ve.call(this,Pn.STAT_EVENT,a),this.stat=c}N(Wr,ve);function $e(a){const c=bi();ze(c,new Wr(c,a))}Pn.Ma="timingevent";function ba(a,c){ve.call(this,Pn.Ma,a),this.size=c}N(ba,ve);function qr(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Hr(){this.g=!0}Hr.prototype.xa=function(){this.g=!1};function Na(a,c,h,g,b,D){a.info(function(){if(a.g)if(D)for(var B="",ge=D.split("&"),Ye=0;Ye<ge.length;Ye++){var de=ge[Ye].split("=");if(1<de.length){var st=de[0];de=de[1];var ot=st.split("_");B=2<=ot.length&&ot[1]=="type"?B+(st+"="+de+"&"):B+(st+"=redacted&")}}else B=null;else B=D;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+c+`
`+h+`
`+B})}function cc(a,c,h,g,b,D,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+c+`
`+h+`
`+D+" "+B})}function tr(a,c,h,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+R(a,h)+(g?" "+g:"")})}function dc(a,c){a.info(function(){return"TIMEOUT: "+c})}Hr.prototype.info=function(){};function R(a,c){if(!a.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var g=h[a];if(!(2>g.length)){var b=g[1];if(Array.isArray(b)&&!(1>b.length)){var D=b[0];if(D!="noop"&&D!="stop"&&D!="close")for(var B=1;B<b.length;B++)b[B]=""}}}}return mt(h)}catch{return c}}var z={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},re={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ie;function Q(){}N(Q,Fs),Q.prototype.g=function(){return new XMLHttpRequest},Q.prototype.i=function(){return{}},ie=new Q;function Z(a,c,h,g){this.j=a,this.i=c,this.l=h,this.R=g||1,this.U=new Rn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new We}function We(){this.i=null,this.g="",this.h=!1}var Ie={},Qe={};function Zt(a,c,h){a.L=1,a.v=Oa(bn(c)),a.m=h,a.P=!0,Sp(a,null)}function Sp(a,c){a.F=Date.now(),Da(a),a.A=bn(a.v);var h=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Up(h.i,"t",g),a.C=0,h=a.j.J,a.h=new We,a.g=im(a.j,h?c:null,!a.m),0<a.O&&(a.M=new Ca(_(a.Y,a,a.g),a.O)),c=a.U,h=a.g,g=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(js[0]=b.toString()),b=js);for(var D=0;D<b.length;D++){var B=Sa(h,b[D],g||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),$r(),Na(a.i,a.u,a.A,a.l,a.R,a.m)}Z.prototype.ca=function(a){a=a.target;const c=this.M;c&&Nn(a)==3?c.j():this.Y(a)},Z.prototype.Y=function(a){try{if(a==this.g)e:{const ot=Nn(this.g);var c=this.g.Ba();const Vi=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||Gp(this.g)))){this.J||ot!=4||c==7||(c==8||0>=Vi?$r(3):$r(2)),hc(this);var h=this.g.Z();this.X=h;t:if(Cp(this)){var g=Gp(this.g);a="";var b=g.length,D=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gr(this),$s(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<b;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(D&&c==b-1)});g.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=h==200,cc(this.i,this.u,this.A,this.l,this.R,ot,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ge,Ye=this.g;if((ge=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(ge)){var de=ge;break t}}de=null}if(h=de)tr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fc(this,h);else{this.o=!1,this.s=3,$e(12),Gr(this),$s(this);break e}}if(this.P){h=!0;let en;for(;!this.J&&this.C<B.length;)if(en=JE(this,B),en==Qe){ot==4&&(this.s=4,$e(14),h=!1),tr(this.i,this.l,null,"[Incomplete Response]");break}else if(en==Ie){this.s=4,$e(15),tr(this.i,this.l,B,"[Invalid Chunk]"),h=!1;break}else tr(this.i,this.l,en,null),fc(this,en);if(Cp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||B.length!=0||this.h.h||(this.s=1,$e(16),h=!1),this.o=this.o&&h,!h)tr(this.i,this.l,B,"[Invalid Chunked Response]"),Gr(this),$s(this);else if(0<B.length&&!this.W){this.W=!0;var st=this.j;st.g==this&&st.ba&&!st.M&&(st.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),_c(st),st.M=!0,$e(11))}}else tr(this.i,this.l,B,null),fc(this,B);ot==4&&Gr(this),this.o&&!this.J&&(ot==4?em(this.j,this):(this.o=!1,Da(this)))}else mT(this.g),h==400&&0<B.indexOf("Unknown SID")?(this.s=3,$e(12)):(this.s=0,$e(13)),Gr(this),$s(this)}}}catch{}finally{}};function Cp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function JE(a,c){var h=a.C,g=c.indexOf(`
`,h);return g==-1?Qe:(h=Number(c.substring(h,g)),isNaN(h)?Ie:(g+=1,g+h>c.length?Qe:(c=c.slice(g,g+h),a.C=g+h,c)))}Z.prototype.cancel=function(){this.J=!0,Gr(this)};function Da(a){a.S=Date.now()+a.I,kp(a,a.I)}function kp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=qr(_(a.ba,a),c)}function hc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Z.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(dc(this.i,this.A),this.L!=2&&($r(),$e(17)),Gr(this),this.s=2,$s(this)):kp(this,this.S-a)};function $s(a){a.j.G==0||a.J||em(a.j,a)}function Gr(a){hc(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,ka(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function fc(a,c){try{var h=a.j;if(h.G!=0&&(h.g==a||pc(h.h,a))){if(!a.K&&pc(h.h,a)&&h.G==3){try{var g=h.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)za(h),Ua(h);else break e;vc(h),$e(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=qr(_(h.Za,h),6e3));if(1>=bp(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Qr(h,11)}else if((a.K||h.g==a)&&za(h),!E(c))for(b=h.Da.g.parse(c),c=0;c<b.length;c++){let de=b[c];if(h.T=de[0],de=de[1],h.G==2)if(de[0]=="c"){h.K=de[1],h.ia=de[2];const st=de[3];st!=null&&(h.la=st,h.j.info("VER="+h.la));const ot=de[4];ot!=null&&(h.Aa=ot,h.j.info("SVER="+h.Aa));const Vi=de[5];Vi!=null&&typeof Vi=="number"&&0<Vi&&(g=1.5*Vi,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const en=a.g;if(en){const Wa=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wa){var D=g.h;D.g||Wa.indexOf("spdy")==-1&&Wa.indexOf("quic")==-1&&Wa.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(mc(D,D.h),D.h=null))}if(g.D){const wc=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;wc&&(g.ya=wc,_e(g.I,g.D,wc))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var B=a;if(g.qa=rm(g,g.J?g.ia:null,g.W),B.K){Np(g.h,B);var ge=B,Ye=g.L;Ye&&(ge.I=Ye),ge.B&&(hc(ge),Da(ge)),g.g=B}else Jp(g);0<h.i.length&&Ba(h)}else de[0]!="stop"&&de[0]!="close"||Qr(h,7);else h.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Qr(h,7):yc(h):de[0]!="noop"&&h.l&&h.l.ta(de),h.v=0)}}$r(4)}catch{}}var ZE=class{constructor(a,c){this.g=a,this.map=c}};function Rp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function bp(a){return a.h?1:a.g?a.g.size:0}function pc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function mc(a,c){a.g?a.g.add(c):a.h=c}function Np(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Rp.prototype.cancel=function(){if(this.i=Dp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Dp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const h of a.g.values())c=c.concat(h.D);return c}return V(a.i)}function eT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],h=a.length,g=0;g<h;g++)c.push(a[g]);return c}c=[],h=0;for(g in a)c[h++]=a[g];return c}function tT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var h=0;h<a;h++)c.push(h);return c}c=[],h=0;for(const g in a)c[h++]=g;return c}}}function Vp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var h=tT(a),g=eT(a),b=g.length,D=0;D<b;D++)c.call(void 0,g[D],h&&h[D],a)}var Lp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nT(a,c){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var g=a[h].indexOf("="),b=null;if(0<=g){var D=a[h].substring(0,g);b=a[h].substring(g+1)}else D=a[h];c(D,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Kr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Kr){this.h=a.h,Va(this,a.j),this.o=a.o,this.g=a.g,La(this,a.s),this.l=a.l;var c=a.i,h=new Hs;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Op(this,h),this.m=a.m}else a&&(c=String(a).match(Lp))?(this.h=!1,Va(this,c[1]||"",!0),this.o=Ws(c[2]||""),this.g=Ws(c[3]||"",!0),La(this,c[4]),this.l=Ws(c[5]||"",!0),Op(this,c[6]||"",!0),this.m=Ws(c[7]||"")):(this.h=!1,this.i=new Hs(null,this.h))}Kr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(qs(c,Mp,!0),":");var h=this.g;return(h||c=="file")&&(a.push("//"),(c=this.o)&&a.push(qs(c,Mp,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(qs(h,h.charAt(0)=="/"?sT:iT,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",qs(h,aT)),a.join("")};function bn(a){return new Kr(a)}function Va(a,c,h){a.j=h?Ws(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function La(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Op(a,c,h){c instanceof Hs?(a.i=c,lT(a.i,a.h)):(h||(c=qs(c,oT)),a.i=new Hs(c,a.h))}function _e(a,c,h){a.i.set(c,h)}function Oa(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ws(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function qs(a,c,h){return typeof a=="string"?(a=encodeURI(a).replace(c,rT),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function rT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Mp=/[#\/\?@]/g,iT=/[#\?:]/g,sT=/[#\?]/g,oT=/[#\?@]/g,aT=/#/g;function Hs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function nr(a){a.g||(a.g=new Map,a.h=0,a.i&&nT(a.i,function(c,h){a.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=Hs.prototype,t.add=function(a,c){nr(this),this.i=null,a=Ni(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(c),this.h+=1,this};function jp(a,c){nr(a),c=Ni(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Fp(a,c){return nr(a),c=Ni(a,c),a.g.has(c)}t.forEach=function(a,c){nr(this),this.g.forEach(function(h,g){h.forEach(function(b){a.call(c,b,g,this)},this)},this)},t.na=function(){nr(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let g=0;g<c.length;g++){const b=a[g];for(let D=0;D<b.length;D++)h.push(c[g])}return h},t.V=function(a){nr(this);let c=[];if(typeof a=="string")Fp(this,a)&&(c=c.concat(this.g.get(Ni(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)c=c.concat(a[h])}return c},t.set=function(a,c){return nr(this),this.i=null,a=Ni(this,a),Fp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Up(a,c,h){jp(a,c),0<h.length&&(a.i=null,a.g.set(Ni(a,c),V(h)),a.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var g=c[h];const D=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var b=D;B[g]!==""&&(b+="="+encodeURIComponent(String(B[g]))),a.push(b)}}return this.i=a.join("&")};function Ni(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function lT(a,c){c&&!a.j&&(nr(a),a.i=null,a.g.forEach(function(h,g){var b=g.toLowerCase();g!=b&&(jp(this,g),Up(this,b,h))},a)),a.j=c}function uT(a,c){const h=new Hr;if(l.Image){const g=new Image;g.onload=A(rr,h,"TestLoadImage: loaded",!0,c,g),g.onerror=A(rr,h,"TestLoadImage: error",!1,c,g),g.onabort=A(rr,h,"TestLoadImage: abort",!1,c,g),g.ontimeout=A(rr,h,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function cT(a,c){const h=new Hr,g=new AbortController,b=setTimeout(()=>{g.abort(),rr(h,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(b),D.ok?rr(h,"TestPingServer: ok",!0,c):rr(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),rr(h,"TestPingServer: error",!1,c)})}function rr(a,c,h,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(h)}catch{}}function dT(){this.g=new uc}function hT(a,c,h){const g=h||"";try{Vp(a,function(b,D){let B=b;d(b)&&(B=mt(b)),c.push(g+D+"="+encodeURIComponent(B))})}catch(b){throw c.push(g+"type="+encodeURIComponent("_badmap")),b}}function Ma(a){this.l=a.Ub||null,this.j=a.eb||!1}N(Ma,Fs),Ma.prototype.g=function(){return new ja(this.l,this.j)},Ma.prototype.i=function(a){return function(){return a}}({});function ja(a,c){be.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(ja,be),t=ja.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Ks(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ks(this)),this.g&&(this.readyState=3,Ks(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Gs(this):Ks(this),this.readyState==3&&Bp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Gs(this))},t.Qa=function(a){this.g&&(this.response=a,Gs(this))},t.ga=function(){this.g&&Gs(this)};function Gs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ks(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=c.next();return a.join(`\r
`)};function Ks(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ja.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function zp(a){let c="";return F(a,function(h,g){c+=g,c+=":",c+=h,c+=`\r
`}),c}function gc(a,c,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=zp(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):_e(a,c,h))}function Re(a){be.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Re,be);var fT=/^https?$/i,pT=["POST","PUT"];t=Re.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ie.g(),this.v=this.o?Us(this.o):Us(ie),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){$p(this,D);return}if(a=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)h.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())h.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(D=>D.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(pT,c,void 0))||g||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of h)this.g.setRequestHeader(D,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hp(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){$p(this,D)}};function $p(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Wp(a),Fa(a)}function Wp(a){a.A||(a.A=!0,ze(a,"complete"),ze(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ze(this,"complete"),ze(this,"abort"),Fa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fa(this,!0)),Re.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?qp(this):this.bb())},t.bb=function(){qp(this)};function qp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Nn(a)!=4||a.Z()!=2)){if(a.u&&Nn(a)==4)Ms(a.Ea,0,a);else if(ze(a,"readystatechange"),Nn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var g;if(g=B===0){var b=String(a.D).match(Lp)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),g=!fT.test(b?b.toLowerCase():"")}h=g}if(h)ze(a,"complete"),ze(a,"success");else{a.m=6;try{var D=2<Nn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Wp(a)}}finally{Fa(a)}}}}function Fa(a,c){if(a.g){Hp(a);const h=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||ze(a,"ready");try{h.onreadystatechange=g}catch{}}}function Hp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Nn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),lc(c)}};function Gp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function mT(a){const c={};a=(a.g&&2<=Nn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(E(a[g]))continue;var h=k(a[g]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const D=c[b]||[];c[b]=D,D.push(h)}p(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qs(a,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||c}function Kp(a){this.Aa=0,this.i=[],this.j=new Hr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qs("baseRetryDelayMs",5e3,a),this.cb=Qs("retryDelaySeedMs",1e4,a),this.Wa=Qs("forwardChannelMaxRetries",2,a),this.wa=Qs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Rp(a&&a.concurrentRequestLimit),this.Da=new dT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Kp.prototype,t.la=8,t.G=1,t.connect=function(a,c,h,g){$e(0),this.W=a,this.H=c||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=rm(this,null,this.W),Ba(this)};function yc(a){if(Qp(a),a.G==3){var c=a.U++,h=bn(a.I);if(_e(h,"SID",a.K),_e(h,"RID",c),_e(h,"TYPE","terminate"),Ys(a,h),c=new Z(a,a.j,c),c.L=2,c.v=Oa(bn(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=im(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Da(c)}nm(a)}function Ua(a){a.g&&(_c(a),a.g.cancel(),a.g=null)}function Qp(a){Ua(a),a.u&&(l.clearTimeout(a.u),a.u=null),za(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ba(a){if(!Pp(a.h)&&!a.s){a.s=!0;var c=a.Ga;Bt||ne(),$||(Bt(),$=!0),Y.add(c,a),a.B=0}}function gT(a,c){return bp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=qr(_(a.Ga,a,c),tm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Z(this,this.j,a);let D=this.o;if(this.S&&(D?(D=v(D),T(D,this.S)):D=this.S),this.m!==null||this.O||(b.H=D,D=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Xp(this,b,c),h=bn(this.I),_e(h,"RID",a),_e(h,"CVER",22),this.D&&_e(h,"X-HTTP-Session-Id",this.D),Ys(this,h),D&&(this.O?c="headers="+encodeURIComponent(String(zp(D)))+"&"+c:this.m&&gc(h,this.m,D)),mc(this.h,b),this.Ua&&_e(h,"TYPE","init"),this.P?(_e(h,"$req",c),_e(h,"SID","null"),b.T=!0,Zt(b,h,null)):Zt(b,h,c),this.G=2}}else this.G==3&&(a?Yp(this,a):this.i.length==0||Pp(this.h)||Yp(this))};function Yp(a,c){var h;c?h=c.l:h=a.U++;const g=bn(a.I);_e(g,"SID",a.K),_e(g,"RID",h),_e(g,"AID",a.T),Ys(a,g),a.m&&a.o&&gc(g,a.m,a.o),h=new Z(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Xp(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),mc(a.h,h),Zt(h,g,c)}function Ys(a,c){a.H&&F(a.H,function(h,g){_e(c,g,h)}),a.l&&Vp({},function(h,g){_e(c,g,h)})}function Xp(a,c,h){h=Math.min(a.i.length,h);var g=a.l?_(a.l.Na,a.l,a):null;e:{var b=a.i;let D=-1;for(;;){const B=["count="+h];D==-1?0<h?(D=b[0].g,B.push("ofs="+D)):D=0:B.push("ofs="+D);let ge=!0;for(let Ye=0;Ye<h;Ye++){let de=b[Ye].g;const st=b[Ye].map;if(de-=D,0>de)D=Math.max(0,b[Ye].g-100),ge=!1;else try{hT(st,B,"req"+de+"_")}catch{g&&g(st)}}if(ge){g=B.join("&");break e}}}return a=a.i.splice(0,h),c.D=a,g}function Jp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Bt||ne(),$||(Bt(),$=!0),Y.add(c,a),a.v=0}}function vc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=qr(_(a.Fa,a),tm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Zp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=qr(_(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$e(10),Ua(this),Zp(this))};function _c(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Zp(a){a.g=new Z(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=bn(a.qa);_e(c,"RID","rpc"),_e(c,"SID",a.K),_e(c,"AID",a.T),_e(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(c,"TO",a.ja),_e(c,"TYPE","xmlhttp"),Ys(a,c),a.m&&a.o&&gc(c,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=Oa(bn(c)),h.m=null,h.P=!0,Sp(h,a)}t.Za=function(){this.C!=null&&(this.C=null,Ua(this),vc(this),$e(19))};function za(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function em(a,c){var h=null;if(a.g==c){za(a),_c(a),a.g=null;var g=2}else if(pc(a.h,c))h=c.D,Np(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var b=a.B;g=bi(),ze(g,new ba(g,h)),Ba(a)}else Jp(a);else if(b=c.s,b==3||b==0&&0<c.X||!(g==1&&gT(a,c)||g==2&&vc(a)))switch(h&&0<h.length&&(c=a.h,c.i=c.i.concat(h)),b){case 1:Qr(a,5);break;case 4:Qr(a,10);break;case 3:Qr(a,6);break;default:Qr(a,2)}}}function tm(a,c){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*c}function Qr(a,c){if(a.j.info("Error code "+c),c==2){var h=_(a.fb,a),g=a.Xa;const b=!g;g=new Kr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Va(g,"https"),Oa(g),b?uT(g.toString(),h):cT(g.toString(),h)}else $e(2);a.G=0,a.l&&a.l.sa(c),nm(a),Qp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function nm(a){if(a.G=0,a.ka=[],a.l){const c=Dp(a.h);(c.length!=0||a.i.length!=0)&&(M(a.ka,c),M(a.ka,a.i),a.h.i.length=0,V(a.i),a.i.length=0),a.l.ra()}}function rm(a,c,h){var g=h instanceof Kr?bn(h):new Kr(h);if(g.g!="")c&&(g.g=c+"."+g.g),La(g,g.s);else{var b=l.location;g=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;var D=new Kr(null);g&&Va(D,g),c&&(D.g=c),b&&La(D,b),h&&(D.l=h),g=D}return h=a.D,c=a.ya,h&&c&&_e(g,h,c),_e(g,"VER",a.la),Ys(a,g),g}function im(a,c,h){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Re(new Ma({eb:h})):new Re(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function sm(){}t=sm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function $a(){}$a.prototype.g=function(a,c){return new bt(a,c)};function bt(a,c){be.call(this),this.g=new Kp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!E(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Di(this)}N(bt,be),bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){yc(this.g)},bt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=mt(a),a=h);c.i.push(new ZE(c.Ya++,a)),c.G==3&&Ba(c)},bt.prototype.N=function(){this.g.l=null,delete this.j,yc(this.g),delete this.g,bt.aa.N.call(this)};function om(a){zs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const h in c){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}N(om,zs);function am(){Pi.call(this),this.status=1}N(am,Pi);function Di(a){this.g=a}N(Di,sm),Di.prototype.ua=function(){ze(this.g,"a")},Di.prototype.ta=function(a){ze(this.g,new om(a))},Di.prototype.sa=function(a){ze(this.g,new am)},Di.prototype.ra=function(){ze(this.g,"b")},$a.prototype.createWebChannel=$a.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,Dw=function(){return new $a},Nw=function(){return bi()},bw=Pn,mh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},z.NO_ERROR=0,z.TIMEOUT=8,z.HTTP_ERROR=6,Rl=z,re.COMPLETE="complete",Pw=re,Bs.EventType=zr,zr.OPEN="a",zr.CLOSE="b",zr.ERROR="c",zr.MESSAGE="d",be.prototype.listen=be.prototype.K,fo=Bs,Re.prototype.listenOnce=Re.prototype.L,Re.prototype.getLastError=Re.prototype.Ka,Re.prototype.getLastErrorCode=Re.prototype.Ba,Re.prototype.getStatus=Re.prototype.Z,Re.prototype.getResponseJson=Re.prototype.Oa,Re.prototype.getResponseText=Re.prototype.oa,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Ha,Rw=Re}).apply(typeof ul<"u"?ul:typeof self<"u"?self:typeof window<"u"?window:{});const ly="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new Fu("@firebase/firestore");function so(){return yi.logLevel}function H(t,...e){if(yi.logLevel<=ae.DEBUG){const n=e.map(Bf);yi.debug(`Firestore (${Cs}): ${t}`,...n)}}function Qn(t,...e){if(yi.logLevel<=ae.ERROR){const n=e.map(Bf);yi.error(`Firestore (${Cs}): ${t}`,...n)}}function ms(t,...e){if(yi.logLevel<=ae.WARN){const n=e.map(Bf);yi.warn(`Firestore (${Cs}): ${t}`,...n)}}function Bf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${Cs}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function me(t,e){t||J()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class ER{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class TR{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new Vw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new ct(e)}}class IR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new IR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){me(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new AR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=CR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function gs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Be(0,0))}static max(){return new ee(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Zo{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const kR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends Zo{construct(e,n,r){return new Ze(e,n,r)}static isValidIdentifier(e){return kR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Ee.fromString(e))}static fromName(e){return new G(Ee.fromString(e).popFirst(5))}static empty(){return new G(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Ee(e.slice()))}}function RR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new Pr(i,G.empty(),e)}function PR(t){return new Pr(t.readTime,t.key,-1)}class Pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pr(ee.min(),G.empty(),-1)}static max(){return new Pr(ee.max(),G.empty(),-1)}}function bR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ya(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==NR)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(f=>{o[d]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function VR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function va(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class zf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}zf.oe=-1;function qu(t){return t==null}function pu(t){return t===0&&1/t==-1/0}function LR(t){return typeof t=="number"&&Number.isInteger(t)&&!pu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ow(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cl(this.root,e,this.comparator,!1)}getReverseIterator(){return new cl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cl(this.root,e,this.comparator,!0)}}class cl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Je.RED,this.left=i??Je.EMPTY,this.right=s??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cy(this.data.getIterator())}getIteratorFrom(e){return new cy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class cy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new tt(Ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Mw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Mw("Invalid base64 string: "+s):s}}(e);return new rt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const OR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function br(t){if(me(!!t),typeof t=="string"){let e=0;const n=OR.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vi(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wf(t){const e=t.mapValue.fields.__previous_value__;return $f(e)?Wf(e):e}function ea(t){const e=br(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n,r,i,s,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class ta{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ta("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ta&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl={mapValue:{}};function _i(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$f(t)?4:FR(t)?9007199254740991:jR(t)?10:11:J()}function kn(t,e){if(t===e)return!0;const n=_i(t);if(n!==_i(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ea(t).isEqual(ea(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=br(i.timestampValue),l=br(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return vi(i.bytesValue).isEqual(vi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return De(i.geoPointValue.latitude)===De(s.geoPointValue.latitude)&&De(i.geoPointValue.longitude)===De(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return De(i.integerValue)===De(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=De(i.doubleValue),l=De(s.doubleValue);return o===l?pu(o)===pu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return gs(t.arrayValue.values||[],e.arrayValue.values||[],kn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(uy(o)!==uy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!kn(o[u],l[u])))return!1;return!0}(t,e);default:return J()}}function na(t,e){return(t.values||[]).find(n=>kn(n,e))!==void 0}function ys(t,e){if(t===e)return 0;const n=_i(t),r=_i(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=De(s.integerValue||s.doubleValue),u=De(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return dy(t.timestampValue,e.timestampValue);case 4:return dy(ea(t),ea(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(s,o){const l=vi(s),u=vi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=he(l[d],u[d]);if(f!==0)return f}return he(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=he(De(s.latitude),De(o.latitude));return l!==0?l:he(De(s.longitude),De(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return hy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,d,f;const y=s.fields||{},_=o.fields||{},A=(l=y.value)===null||l===void 0?void 0:l.arrayValue,N=(u=_.value)===null||u===void 0?void 0:u.arrayValue,V=he(((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0,((f=N==null?void 0:N.values)===null||f===void 0?void 0:f.length)||0);return V!==0?V:hy(A,N)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===dl.mapValue&&o===dl.mapValue)return 0;if(s===dl.mapValue)return 1;if(o===dl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=o.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let y=0;y<u.length&&y<f.length;++y){const _=he(u[y],f[y]);if(_!==0)return _;const A=ys(l[u[y]],d[f[y]]);if(A!==0)return A}return he(u.length,f.length)}(t.mapValue,e.mapValue);default:throw J()}}function dy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=br(t),r=br(e),i=he(n.seconds,r.seconds);return i!==0?i:he(n.nanos,r.nanos)}function hy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ys(n[i],r[i]);if(s)return s}return he(n.length,r.length)}function vs(t){return gh(t)}function gh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=gh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${gh(n.fields[o])}`;return i+"}"}(t.mapValue):J()}function fy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function yh(t){return!!t&&"integerValue"in t}function qf(t){return!!t&&"arrayValue"in t}function py(t){return!!t&&"nullValue"in t}function my(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pl(t){return!!t&&"mapValue"in t}function jR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ko(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ko(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ko(t.arrayValue.values[n]);return e}return Object.assign({},t)}function FR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ko(n)}setAll(e){let n=Ze.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ko(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Pl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Pl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new At(ko(this.value))}}function jw(t){const e=[];return xi(t.fields,(n,r)=>{const i=new Ze([n]);if(Pl(r)){const s=jw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ht(e,0,ee.min(),ee.min(),ee.min(),At.empty(),0)}static newFoundDocument(e,n,r,i){return new ht(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new ht(e,2,n,ee.min(),ee.min(),At.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,ee.min(),ee.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mu{constructor(e,n){this.position=e,this.inclusive=n}}function gy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=ys(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function yy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ra{constructor(e,n="asc"){this.field=e,this.dir=n}}function UR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Fw{}class je extends Fw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new zR(e,n,r):n==="array-contains"?new qR(e,r):n==="in"?new HR(e,r):n==="not-in"?new GR(e,r):n==="array-contains-any"?new KR(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $R(e,r):new WR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ys(n,this.value)):n!==null&&_i(this.value)===_i(n)&&this.matchesComparison(ys(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends Fw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new dn(e,n)}matches(e){return Uw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Uw(t){return t.op==="and"}function Bw(t){return BR(t)&&Uw(t)}function BR(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function vh(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+vs(t.value);if(Bw(t))return t.filters.map(e=>vh(e)).join(",");{const e=t.filters.map(n=>vh(n)).join(",");return`${t.op}(${e})`}}function zw(t,e){return t instanceof je?function(r,i){return i instanceof je&&r.op===i.op&&r.field.isEqual(i.field)&&kn(r.value,i.value)}(t,e):t instanceof dn?function(r,i){return i instanceof dn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&zw(o,i.filters[l]),!0):!1}(t,e):void J()}function $w(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${vs(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map($w).join(" ,")+"}"}(t):"Filter"}class zR extends je{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class $R extends je{constructor(e,n){super(e,"in",n),this.keys=Ww("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class WR extends je{constructor(e,n){super(e,"not-in",n),this.keys=Ww("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ww(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class qR extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qf(n)&&na(n.arrayValue,this.value)}}class HR extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&na(this.value.arrayValue,n)}}class GR extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(na(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!na(this.value.arrayValue,n)}}class KR extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>na(this.value.arrayValue,r))}}/**
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
 */class QR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function vy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new QR(t,e,n,r,i,s,o)}function Hf(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),qu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vs(r)).join(",")),e.ue=n}return e.ue}function Gf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!UR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!yy(t.startAt,e.startAt)&&yy(t.endAt,e.endAt)}function _h(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function YR(t,e,n,r,i,s,o,l){return new ks(t,e,n,r,i,s,o,l)}function Kf(t){return new ks(t)}function _y(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qw(t){return t.collectionGroup!==null}function Ro(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new tt(Ze.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ra(s,r))}),n.has(Ze.keyField().canonicalString())||e.ce.push(new ra(Ze.keyField(),r))}return e.ce}function xn(t){const e=te(t);return e.le||(e.le=XR(e,Ro(t))),e.le}function XR(t,e){if(t.limitType==="F")return vy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ra(i.field,s)});const n=t.endAt?new mu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new mu(t.startAt.position,t.startAt.inclusive):null;return vy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function wh(t,e){const n=t.filters.concat([e]);return new ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function gu(t,e,n){return new ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hu(t,e){return Gf(xn(t),xn(e))&&t.limitType===e.limitType}function Hw(t){return`${Hf(xn(t))}|lt:${t.limitType}`}function Oi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>$w(i)).join(", ")}]`),qu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>vs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>vs(i)).join(",")),`Target(${r})`}(xn(t))}; limitType=${t.limitType})`}function Gu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ro(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const d=gy(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,Ro(r),i)||r.endAt&&!function(o,l,u){const d=gy(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,Ro(r),i))}(t,e)}function JR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Gw(t){return(e,n)=>{let r=!1;for(const i of Ro(t)){const s=ZR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ZR(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),d=l.data.field(s);return u!==null&&d!==null?ys(u,d):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Ow(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=new ke(G.comparator);function Yn(){return eP}const Kw=new ke(G.comparator);function po(...t){let e=Kw;for(const n of t)e=e.insert(n.key,n);return e}function Qw(t){let e=Kw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ii(){return Po()}function Yw(){return Po()}function Po(){return new Rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const tP=new ke(G.comparator),nP=new tt(G.comparator);function oe(...t){let e=nP;for(const n of t)e=e.add(n);return e}const rP=new tt(he);function iP(){return rP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pu(e)?"-0":e}}function Xw(t){return{integerValue:""+t}}function Jw(t,e){return LR(e)?Xw(e):Qf(t,e)}/**
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
 */class Ku{constructor(){this._=void 0}}function sP(t,e,n){return t instanceof yu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&$f(s)&&(s=Wf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ia?eE(t,e):t instanceof sa?tE(t,e):function(i,s){const o=Zw(i,s),l=wy(o)+wy(i.Pe);return yh(o)&&yh(i.Pe)?Xw(l):Qf(i.serializer,l)}(t,e)}function oP(t,e,n){return t instanceof ia?eE(t,e):t instanceof sa?tE(t,e):n}function Zw(t,e){return t instanceof oa?function(r){return yh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class yu extends Ku{}class ia extends Ku{constructor(e){super(),this.elements=e}}function eE(t,e){const n=nE(e);for(const r of t.elements)n.some(i=>kn(i,r))||n.push(r);return{arrayValue:{values:n}}}class sa extends Ku{constructor(e){super(),this.elements=e}}function tE(t,e){let n=nE(e);for(const r of t.elements)n=n.filter(i=>!kn(i,r));return{arrayValue:{values:n}}}class oa extends Ku{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function wy(t){return De(t.integerValue||t.doubleValue)}function nE(t){return qf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,n){this.field=e,this.transform=n}}function lP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ia&&i instanceof ia||r instanceof sa&&i instanceof sa?gs(r.elements,i.elements,kn):r instanceof oa&&i instanceof oa?kn(r.Pe,i.Pe):r instanceof yu&&i instanceof yu}(t.transform,e.transform)}class uP{constructor(e,n){this.version=e,this.transformResults=n}}class An{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new An}static exists(e){return new An(void 0,e)}static updateTime(e){return new An(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qu{}function rE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new sE(t.key,An.none()):new _a(t.key,t.data,An.none());{const n=t.data,r=At.empty();let i=new tt(Ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Mr(t.key,r,new Lt(i.toArray()),An.none())}}function cP(t,e,n){t instanceof _a?function(i,s,o){const l=i.value.clone(),u=Ty(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Mr?function(i,s,o){if(!bl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Ty(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(iE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function bo(t,e,n,r){return t instanceof _a?function(s,o,l,u){if(!bl(s.precondition,o))return l;const d=s.value.clone(),f=Iy(s.fieldTransforms,u,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mr?function(s,o,l,u){if(!bl(s.precondition,o))return l;const d=Iy(s.fieldTransforms,u,o),f=o.data;return f.setAll(iE(s)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(s,o,l){return bl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function dP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Zw(r.transform,i||null);s!=null&&(n===null&&(n=At.empty()),n.set(r.field,s))}return n||null}function Ey(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&gs(r,i,(s,o)=>lP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _a extends Qu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Mr extends Qu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function iE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ty(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,oP(o,l,n[i]))}return r}function Iy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,sP(s,o,e))}return r}class sE extends Qu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hP extends Qu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&cP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Yw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=rE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&gs(this.mutations,e.mutations,(n,r)=>Ey(n,r))&&gs(this.baseMutations,e.baseMutations,(n,r)=>Ey(n,r))}}class Yf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=function(){return tP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Yf(e,n,r,i)}}/**
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
 */class pP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class mP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,le;function gP(t){switch(t){default:return J();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function oE(t){if(t===void 0)return Qn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Oe.OK:return L.OK;case Oe.CANCELLED:return L.CANCELLED;case Oe.UNKNOWN:return L.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return L.INTERNAL;case Oe.UNAVAILABLE:return L.UNAVAILABLE;case Oe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Oe.NOT_FOUND:return L.NOT_FOUND;case Oe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Oe.ABORTED:return L.ABORTED;case Oe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Oe.DATA_LOSS:return L.DATA_LOSS;default:return J()}}(le=Oe||(Oe={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function yP(){return new TextEncoder}/**
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
 */const vP=new ai([4294967295,4294967295],0);function xy(t){const e=yP().encode(t),n=new kw;return n.update(e),new Uint8Array(n.digest())}function Ay(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ai([n,r],0),new ai([i,s],0)]}class Xf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new mo(`Invalid padding: ${n}`);if(r<0)throw new mo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new mo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new mo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ai.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ai.fromNumber(r)));return i.compare(vP)===1&&(i=new ai([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=xy(e),[r,i]=Ay(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Xf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=xy(e),[r,i]=Ay(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class mo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,wa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Yu(ee.min(),i,new ke(he),Yn(),oe())}}class wa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new wa(r,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class aE{constructor(e,n){this.targetId=e,this.me=n}}class lE{constructor(e,n,r=rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Sy{constructor(){this.fe=0,this.ge=ky(),this.pe=rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J()}}),new wa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=ky()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class _P{constructor(e){this.Le=e,this.Be=new Map,this.ke=Yn(),this.qe=Cy(),this.Qe=new ke(he)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(_h(s))if(r===0){const o=new G(s.path);this.Ue(n,o,ht.newNoDocument(o,ee.min()))}else me(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=vi(r).toUint8Array()}catch(u){if(u instanceof Mw)return ms("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Xf(o,i,s)}catch(u){return ms(u instanceof mo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&_h(l.target)){const u=new G(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ht.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=oe();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Yu(e,n,this.Qe,this.ke,r);return this.ke=Yn(),this.qe=Cy(),this.Qe=new ke(he),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Sy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new tt(he),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Sy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Cy(){return new ke(G.comparator)}function ky(){return new ke(G.comparator)}const wP={asc:"ASCENDING",desc:"DESCENDING"},EP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TP={and:"AND",or:"OR"};class IP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Eh(t,e){return t.useProto3Json||qu(e)?e:{value:e}}function vu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xP(t,e){return vu(t,e.toTimestamp())}function Sn(t){return me(!!t),ee.fromTimestamp(function(n){const r=br(n);return new Be(r.seconds,r.nanos)}(t))}function Jf(t,e){return Th(t,e).canonicalString()}function Th(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function cE(t){const e=Ee.fromString(t);return me(mE(e)),e}function Ih(t,e){return Jf(t.databaseId,e.path)}function sd(t,e){const n=cE(e);if(n.get(1)!==t.databaseId.projectId)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(hE(n))}function dE(t,e){return Jf(t.databaseId,e)}function AP(t){const e=cE(t);return e.length===4?Ee.emptyPath():hE(e)}function xh(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hE(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ry(t,e,n){return{name:Ih(t,e),fields:n.value.mapValue.fields}}function SP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(me(f===void 0||typeof f=="string"),rt.fromBase64String(f||"")):(me(f===void 0||f instanceof Buffer||f instanceof Uint8Array),rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const f=d.code===void 0?L.UNKNOWN:oE(d.code);return new W(f,d.message||"")}(o);n=new lE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=sd(t,r.document.name),s=Sn(r.document.updateTime),o=r.document.createTime?Sn(r.document.createTime):ee.min(),l=new At({mapValue:{fields:r.document.fields}}),u=ht.newFoundDocument(i,s,o,l),d=r.targetIds||[],f=r.removedTargetIds||[];n=new Nl(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=sd(t,r.document),s=r.readTime?Sn(r.readTime):ee.min(),o=ht.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Nl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=sd(t,r.document),s=r.removedTargetIds||[];n=new Nl([],s,i,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new mP(i,s),l=r.targetId;n=new aE(l,o)}}return n}function CP(t,e){let n;if(e instanceof _a)n={update:Ry(t,e.key,e.value)};else if(e instanceof sE)n={delete:Ih(t,e.key)};else if(e instanceof Mr)n={update:Ry(t,e.key,e.data),updateMask:OP(e.fieldMask)};else{if(!(e instanceof hP))return J();n={verify:Ih(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof yu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ia)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof sa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof oa)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:xP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function kP(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Sn(i.updateTime):Sn(s);return o.isEqual(ee.min())&&(o=Sn(s)),new uP(o,i.transformResults||[])}(n,e))):[]}function RP(t,e){return{documents:[dE(t,e.path)]}}function PP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=dE(t,i);const s=function(d){if(d.length!==0)return pE(dn.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(f=>function(_){return{field:Mi(_.field),direction:DP(_.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Eh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function bP(t){let e=AP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(y){const _=fE(y);return _ instanceof dn&&Bw(_)?_.getFilters():[_]}(n.where));let o=[];n.orderBy&&(o=function(y){return y.map(_=>function(N){return new ra(ji(N.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(y){let _;return _=typeof y=="object"?y.value:y,qu(_)?null:_}(n.limit));let u=null;n.startAt&&(u=function(y){const _=!!y.before,A=y.values||[];return new mu(A,_)}(n.startAt));let d=null;return n.endAt&&(d=function(y){const _=!y.before,A=y.values||[];return new mu(A,_)}(n.endAt)),YR(e,i,o,s,l,"F",u,d)}function NP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function fE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ji(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ji(n.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ji(n.unaryFilter.field);return je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ji(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return je.create(ji(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>fE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function DP(t){return wP[t]}function VP(t){return EP[t]}function LP(t){return TP[t]}function Mi(t){return{fieldPath:t.canonicalString()}}function ji(t){return Ze.fromServerFormat(t.fieldPath)}function pE(t){return t instanceof je?function(n){if(n.op==="=="){if(my(n.value))return{unaryFilter:{field:Mi(n.field),op:"IS_NAN"}};if(py(n.value))return{unaryFilter:{field:Mi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(my(n.value))return{unaryFilter:{field:Mi(n.field),op:"IS_NOT_NAN"}};if(py(n.value))return{unaryFilter:{field:Mi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mi(n.field),op:VP(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(i=>pE(i));return r.length===1?r[0]:{compositeFilter:{op:LP(n.op),filters:r}}}(t):J()}function OP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),l=rt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e){this.ct=e}}function jP(t){const e=bP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gu(e,e.limit,"L"):e}/**
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
 */class FP{constructor(){this.un=new UP}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Pr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Pr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class UP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new tt(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new tt(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new _s(0)}static kn(){return new _s(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(){this.changes=new Rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&bo(r.mutation,i,Lt.empty(),Be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=ii();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=po();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ii();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Yn();const o=Po(),l=function(){return Po()}();return n.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Mr)?s=s.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),bo(f.mutation,d,f.mutation.getFieldMask(),Be.now())):o.set(d.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>o.set(d,f)),n.forEach((d,f)=>{var y;return l.set(d,new zP(f,(y=o.get(d))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Po();let i=new ke((o,l)=>o-l),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||Lt.empty();f=l.applyToLocalView(d,f),r.set(u,f);const y=(i.get(l.batchId)||oe()).add(u);i=i.insert(l.batchId,y)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,y=Yw();f.forEach(_=>{if(!s.has(_)){const A=rE(n.get(_),r.get(_));A!==null&&y.set(_,A),s=s.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,y))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(ii());let l=-1,u=s;return o.next(d=>j.forEach(d,(f,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),s.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,oe())).next(f=>({batchId:l,changes:Qw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=po();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=po();return this.indexManager.getCollectionParents(e,s).next(l=>j.forEach(l,u=>{const d=function(y,_){return new ks(_,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((y,_)=>{o=o.insert(y,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,ht.newInvalidDocument(f)))});let l=po();return o.forEach((u,d)=>{const f=s.get(u);f!==void 0&&bo(f.mutation,d,Lt.empty(),Be.now()),Gu(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Sn(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:jP(i.bundledQuery),readTime:Sn(i.readTime)}}(n)),j.resolve()}}/**
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
 */class qP{constructor(){this.overlays=new ke(G.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ii();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=ii(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ke((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=ii(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=ii(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return j.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new pP(n,r));let s=this.Ir.get(n);s===void 0&&(s=oe(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class HP{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this.Tr=new tt(He.Er),this.dr=new tt(He.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new He(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new He(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new Ee([])),r=new He(n,e),i=new He(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new Ee([])),r=new He(n,e),i=new He(n,e+1);let s=oe();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new He(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||he(e.wr,n.wr)}static Ar(e,n){return he(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new tt(He.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new He(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),i=new He(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(he);return n.forEach(i=>{const s=new He(i,0),o=new He(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new He(new G(s),0);let l=new tt(he);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},o),j.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,i=>{const s=new He(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new He(n,0),i=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e){this.Mr=e,this.docs=function(){return new ke(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=Yn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ht.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Yn();const o=n.path,l=new G(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||bR(PR(f),r)<=0||(i.has(f.key)||Gu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QP(this)}getSize(e){return j.resolve(this.size)}}class QP extends BP{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e){this.persistence=e,this.Nr=new Rs(n=>Hf(n),Gf),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Zf,this.targetCount=0,this.kr=_s.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new _s(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(e,n){this.qr={},this.overlays={},this.Qr=new zf(0),this.Kr=!1,this.Kr=!0,this.$r=new HP,this.referenceDelegate=e(this),this.Ur=new YP(this),this.indexManager=new FP,this.remoteDocumentCache=function(i){return new KP(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new MP(n),this.Gr=new WP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new GP(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new JP(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class JP extends DR{constructor(e){super(),this.currentSequenceNumber=e}}class ep{constructor(e){this.persistence=e,this.Jr=new Zf,this.Yr=null}static Zr(e){return new ep(e)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new tp(e,n.fromCache,r,i)}}/**
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
 */class ZP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class eb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return _1()?8:VR(pt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new ZP;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(so()<=ae.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Oi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(so()<=ae.DEBUG&&H("QueryEngine","Query:",Oi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(so()<=ae.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Oi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xn(n))):j.resolve())}Yi(e,n){if(_y(n))return j.resolve(null);let r=xn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=gu(n,null,"F"),r=xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,o,u.readTime)?this.Yi(e,gu(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return _y(n)||i.isEqual(ee.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?j.resolve(null):(so()<=ae.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Oi(n)),this.rs(e,o,n,RR(i,-1)).next(l=>l))})}ts(e,n){let r=new tt(Gw(e));return n.forEach((i,s)=>{Gu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return so()<=ae.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Oi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Pr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new ke(he),this._s=new Rs(s=>Hf(s),Gf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $P(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function nb(t,e,n,r){return new tb(t,e,n,r)}async function gE(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=oe();for(const d of i){o.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function rb(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const y=d.batch,_=y.keys();let A=j.resolve();return _.forEach(N=>{A=A.next(()=>f.getEntry(u,N)).next(V=>{const M=d.docVersions.get(N);me(M!==null),V.version.compareTo(M)<0&&(y.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),f.addEntry(V)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=oe();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function yE(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function ib(t,e){const n=te(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,y)=>{const _=i.get(y);if(!_)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,y).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,y)));let A=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(y)!==null?A=A.withResumeToken(rt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(y,A),function(V,M,C){return V.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(_,A,f)&&l.push(n.Ur.updateTargetData(s,A))});let u=Yn(),d=oe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(sb(s,o,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(ee.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(y=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return j.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.os=i,s))}function sb(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Yn();return n.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function ob(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ab(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Ah(t,e,n){const r=te(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!va(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Py(t,e,n){const r=te(t);let i=ee.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,f){const y=te(u),_=y._s.get(f);return _!==void 0?j.resolve(y.os.get(_)):y.Ur.getTargetData(d,f)}(r,o,xn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:oe())).next(l=>(lb(r,JR(e),l),{documents:l,Ts:s})))}function lb(t,e,n){let r=t.us.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class by{constructor(){this.activeTargetIds=iP()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ub{constructor(){this.so=new by,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new by,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cb{_o(e){}shutdown(){}}/**
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
 */class Ny{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hl=null;function od(){return hl===null?hl=function(){return 268435456+Math.round(2147483648*Math.random())}():hl++,"0x"+hl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class fb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=od(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,o),this.No(n,u,d,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw ms("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Cs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=db[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=od();return new Promise((o,l)=>{const u=new Rw;u.setWithCredentials(!0),u.listenOnce(Pw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Rl.NO_ERROR:const f=u.getResponseJson();H(ut,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Rl.TIMEOUT:H(ut,`RPC '${e}' ${s} timed out`),l(new W(L.DEADLINE_EXCEEDED,"Request time out"));break;case Rl.HTTP_ERROR:const y=u.getStatus();if(H(ut,`RPC '${e}' ${s} failed with status:`,y,"response text:",u.getResponseText()),y>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const A=_==null?void 0:_.error;if(A&&A.status&&A.message){const N=function(M){const C=M.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(C)>=0?C:L.UNKNOWN}(A.status);l(new W(N,A.message))}else l(new W(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(L.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{H(ut,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);H(ut,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=od(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Dw(),l=Nw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(ut,`Creating RPC '${e}' stream ${i}: ${f}`,u);const y=o.createWebChannel(f,u);let _=!1,A=!1;const N=new hb({Io:M=>{A?H(ut,`Not sending because RPC '${e}' stream ${i} is closed:`,M):(_||(H(ut,`Opening RPC '${e}' stream ${i} transport.`),y.open(),_=!0),H(ut,`RPC '${e}' stream ${i} sending:`,M),y.send(M))},To:()=>y.close()}),V=(M,C,E)=>{M.listen(C,x=>{try{E(x)}catch(S){setTimeout(()=>{throw S},0)}})};return V(y,fo.EventType.OPEN,()=>{A||(H(ut,`RPC '${e}' stream ${i} transport opened.`),N.yo())}),V(y,fo.EventType.CLOSE,()=>{A||(A=!0,H(ut,`RPC '${e}' stream ${i} transport closed`),N.So())}),V(y,fo.EventType.ERROR,M=>{A||(A=!0,ms(ut,`RPC '${e}' stream ${i} transport errored:`,M),N.So(new W(L.UNAVAILABLE,"The operation could not be completed")))}),V(y,fo.EventType.MESSAGE,M=>{var C;if(!A){const E=M.data[0];me(!!E);const x=E,S=x.error||((C=x[0])===null||C===void 0?void 0:C.error);if(S){H(ut,`RPC '${e}' stream ${i} received error:`,S);const O=S.status;let F=function(w){const T=Oe[w];if(T!==void 0)return oE(T)}(O),p=S.message;F===void 0&&(F=L.INTERNAL,p="Unknown error status: "+O+" with message "+S.message),A=!0,N.So(new W(F,p)),y.close()}else H(ut,`RPC '${e}' stream ${i} received:`,E),N.bo(E)}}),V(l,bw.STAT_EVENT,M=>{M.stat===mh.PROXY?H(ut,`RPC '${e}' stream ${i} detected buffering proxy`):M.stat===mh.NOPROXY&&H(ut,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function ad(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t){return new IP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new vE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pb extends _E{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=SP(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Sn(o.readTime):ee.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=xh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=_h(u)?{documents:RP(s,u)}:{query:PP(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=uE(s,o.resumeToken);const d=Eh(s,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=vu(s,o.snapshotVersion.toTimestamp());const d=Eh(s,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=NP(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=xh(this.serializer),n.removeTarget=e,this.a_(n)}}class mb extends _E{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return me(!!e.streamToken),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=kP(e.writeResults,e.commitTime),r=Sn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=xh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>CP(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Th(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Th(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class yb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Qn(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ai(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=te(u);d.L_.add(4),await Ea(d),d.q_.set("Unknown"),d.L_.delete(4),await Ju(d)}(this))})}),this.q_=new yb(r,i)}}async function Ju(t){if(Ai(t))for(const e of t.B_)await e(!0)}async function Ea(t){for(const e of t.B_)await e(!1)}function wE(t,e){const n=te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),sp(n)?ip(n):Ps(n).r_()&&rp(n,e))}function np(t,e){const n=te(t),r=Ps(n);n.N_.delete(e),r.r_()&&EE(n,e),n.N_.size===0&&(r.r_()?r.o_():Ai(n)&&n.q_.set("Unknown"))}function rp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ps(t).A_(e)}function EE(t,e){t.Q_.xe(e),Ps(t).R_(e)}function ip(t){t.Q_=new _P({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ps(t).start(),t.q_.v_()}function sp(t){return Ai(t)&&!Ps(t).n_()&&t.N_.size>0}function Ai(t){return te(t).L_.size===0}function TE(t){t.Q_=void 0}async function _b(t){t.q_.set("Online")}async function wb(t){t.N_.forEach((e,n)=>{rp(t,e)})}async function Eb(t,e){TE(t),sp(t)?(t.q_.M_(e),ip(t)):t.q_.set("Unknown")}async function Tb(t,e,n){if(t.q_.set("Online"),e instanceof lE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _u(t,r)}else if(e instanceof Nl?t.Q_.Ke(e):e instanceof aE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ee.min()))try{const r=await yE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(d);f&&s.N_.set(d,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(rt.EMPTY_BYTE_STRING,f.snapshotVersion)),EE(s,u);const y=new gr(f.target,u,d,f.sequenceNumber);rp(s,y)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await _u(t,r)}}async function _u(t,e,n){if(!va(e))throw e;t.L_.add(1),await Ea(t),t.q_.set("Offline"),n||(n=()=>yE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ju(t)})}function IE(t,e){return e().catch(n=>_u(t,n,e))}async function Zu(t){const e=te(t),n=Nr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Ib(e);)try{const i=await ob(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,xb(e,i)}catch(i){await _u(e,i)}xE(e)&&AE(e)}function Ib(t){return Ai(t)&&t.O_.length<10}function xb(t,e){t.O_.push(e);const n=Nr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function xE(t){return Ai(t)&&!Nr(t).n_()&&t.O_.length>0}function AE(t){Nr(t).start()}async function Ab(t){Nr(t).p_()}async function Sb(t){const e=Nr(t);for(const n of t.O_)e.m_(n.mutations)}async function Cb(t,e,n){const r=t.O_.shift(),i=Yf.from(r,e,n);await IE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Zu(t)}async function kb(t,e){e&&Nr(t).V_&&await async function(r,i){if(function(o){return gP(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();Nr(r).s_(),await IE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Zu(r)}}(t,e),xE(t)&&AE(t)}async function Dy(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Ai(n);n.L_.add(3),await Ea(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ju(n)}async function Rb(t,e){const n=te(t);e?(n.L_.delete(2),await Ju(n)):e||(n.L_.add(2),await Ea(n),n.q_.set("Unknown"))}function Ps(t){return t.K_||(t.K_=function(n,r,i){const s=te(n);return s.w_(),new pb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:_b.bind(null,t),Ro:wb.bind(null,t),mo:Eb.bind(null,t),d_:Tb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),sp(t)?ip(t):t.q_.set("Unknown")):(await t.K_.stop(),TE(t))})),t.K_}function Nr(t){return t.U_||(t.U_=function(n,r,i){const s=te(n);return s.w_(),new mb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Ab.bind(null,t),mo:kb.bind(null,t),f_:Sb.bind(null,t),g_:Cb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Zu(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new op(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ap(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),va(t))return new W(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=po(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new as(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof as)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new as;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(){this.W_=new ke(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):J():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ws{constructor(e,n,r,i,s,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ws(e,n,as.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class bb{constructor(){this.queries=Ly(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=Ly(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(L.ABORTED,"Firestore shutting down"))}}function Ly(){return new Rs(t=>Hw(t),Hu)}async function SE(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Pb,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=ap(o,`Initialization of query '${Oi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&lp(n)}async function CE(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Nb(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&lp(n)}function Db(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function lp(t){t.Y_.forEach(e=>{e.next()})}var Sh,Oy;(Oy=Sh||(Sh={})).ea="default",Oy.Cache="cache";class kE{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ws(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ws.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Sh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e){this.key=e}}class PE{constructor(e){this.key=e}}class Vb{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=oe(),this.mutatedKeys=oe(),this.Aa=Gw(e),this.Ra=new as(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Vy,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,y)=>{const _=i.get(f),A=Gu(this.query,y)?y:null,N=!!_&&this.mutatedKeys.has(_.key),V=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let M=!1;_&&A?_.data.isEqual(A.data)?N!==V&&(r.track({type:3,doc:A}),M=!0):this.ga(_,A)||(r.track({type:2,doc:A}),M=!0,(u&&this.Aa(A,u)>0||d&&this.Aa(A,d)<0)&&(l=!0)):!_&&A?(r.track({type:0,doc:A}),M=!0):_&&!A&&(r.track({type:1,doc:_}),M=!0,(u||d)&&(l=!0)),M&&(A?(o=o.add(A),s=V?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,y)=>function(A,N){const V=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return V(A)-V(N)}(f.type,y.type)||this.Aa(f.doc,y.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new ws(this.query,e.Ra,s,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Vy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=oe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new PE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new RE(r))}),n}ba(e){this.Ta=e.Ts,this.da=oe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ws.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Lb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ob{constructor(e){this.key=e,this.va=!1}}class Mb{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Rs(l=>Hw(l),Hu),this.Ma=new Map,this.xa=new Set,this.Oa=new ke(G.comparator),this.Na=new Map,this.La=new Zf,this.Ba={},this.ka=new Map,this.qa=_s.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function jb(t,e,n=!0){const r=OE(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await bE(r,e,n,!0),i}async function Fb(t,e){const n=OE(t);await bE(n,e,!0,!1)}async function bE(t,e,n,r){const i=await ab(t.localStore,xn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Ub(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&wE(t.remoteStore,i),l}async function Ub(t,e,n,r,i){t.Ka=(y,_,A)=>async function(V,M,C,E){let x=M.view.ma(C);x.ns&&(x=await Py(V.localStore,M.query,!1).then(({documents:p})=>M.view.ma(p,x)));const S=E&&E.targetChanges.get(M.targetId),O=E&&E.targetMismatches.get(M.targetId)!=null,F=M.view.applyChanges(x,V.isPrimaryClient,S,O);return jy(V,M.targetId,F.wa),F.snapshot}(t,y,_,A);const s=await Py(t.localStore,e,!0),o=new Vb(e,s.Ts),l=o.ma(s.documents),u=wa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(l,t.isPrimaryClient,u);jy(t,n,d.wa);const f=new Lb(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function Bb(t,e,n){const r=te(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Hu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ah(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&np(r.remoteStore,i.targetId),Ch(r,i.targetId)}).catch(ya)):(Ch(r,i.targetId),await Ah(r.localStore,i.targetId,!0))}async function zb(t,e){const n=te(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),np(n.remoteStore,r.targetId))}async function $b(t,e,n){const r=Yb(t);try{const i=await function(o,l){const u=te(o),d=Be.now(),f=l.reduce((A,N)=>A.add(N.key),oe());let y,_;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let N=Yn(),V=oe();return u.cs.getEntries(A,f).next(M=>{N=M,N.forEach((C,E)=>{E.isValidDocument()||(V=V.add(C))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,N)).next(M=>{y=M;const C=[];for(const E of l){const x=dP(E,y.get(E.key).overlayedDocument);x!=null&&C.push(new Mr(E.key,x,jw(x.value.mapValue),An.exists(!0)))}return u.mutationQueue.addMutationBatch(A,d,C,l)}).next(M=>{_=M;const C=M.applyToLocalDocumentSet(y,V);return u.documentOverlayCache.saveOverlays(A,M.batchId,C)})}).then(()=>({batchId:_.batchId,changes:Qw(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new ke(he)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(r,i.batchId,n),await Ta(r,i.changes),await Zu(r.remoteStore)}catch(i){const s=ap(i,"Failed to persist write");n.reject(s)}}async function NE(t,e){const n=te(t);try{const r=await ib(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?me(o.va):i.removedDocuments.size>0&&(me(o.va),o.va=!1))}),await Ta(n,r,e)}catch(r){await ya(r)}}function My(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=te(o);u.onlineState=l;let d=!1;u.queries.forEach((f,y)=>{for(const _ of y.j_)_.Z_(l)&&(d=!0)}),d&&lp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Wb(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new ke(G.comparator);o=o.insert(s,ht.newNoDocument(s,ee.min()));const l=oe().add(s),u=new Yu(ee.min(),new Map,new ke(he),o,l);await NE(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),up(r)}else await Ah(r.localStore,e,!1).then(()=>Ch(r,e,n)).catch(ya)}async function qb(t,e){const n=te(t),r=e.batch.batchId;try{const i=await rb(n.localStore,e);VE(n,r,null),DE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ta(n,i)}catch(i){await ya(i)}}async function Hb(t,e,n){const r=te(t);try{const i=await function(o,l){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(y=>(me(y!==null),f=y.keys(),u.mutationQueue.removeMutationBatch(d,y))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);VE(r,e,n),DE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ta(r,i)}catch(i){await ya(i)}}function DE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function VE(t,e,n){const r=te(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Ch(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||LE(t,r)})}function LE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(np(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),up(t))}function jy(t,e,n){for(const r of n)r instanceof RE?(t.La.addReference(r.key,e),Gb(t,r)):r instanceof PE?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||LE(t,r.key)):J()}function Gb(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),up(t))}function up(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(Ee.fromString(e)),r=t.qa.next();t.Na.set(r,new Ob(n)),t.Oa=t.Oa.insert(n,r),wE(t.remoteStore,new gr(xn(Kf(n.path)),r,"TargetPurposeLimboResolution",zf.oe))}}async function Ta(t,e,n){const r=te(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const y=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){i.push(d);const y=tp.Wi(u.targetId,d);s.push(y)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,d){const f=te(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>j.forEach(d,_=>j.forEach(_.$i,A=>f.persistence.referenceDelegate.addReference(y,_.targetId,A)).next(()=>j.forEach(_.Ui,A=>f.persistence.referenceDelegate.removeReference(y,_.targetId,A)))))}catch(y){if(!va(y))throw y;H("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const _=y.targetId;if(!y.fromCache){const A=f.os.get(_),N=A.snapshotVersion,V=A.withLastLimboFreeSnapshotVersion(N);f.os=f.os.insert(_,V)}}}(r.localStore,s))}async function Kb(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await gE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ta(n,r.hs)}}function Qb(t,e){const n=te(t),r=n.Na.get(e);if(r&&r.va)return oe().add(r.key);{let i=oe();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function OE(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=NE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Wb.bind(null,e),e.Ca.d_=Nb.bind(null,e.eventManager),e.Ca.$a=Db.bind(null,e.eventManager),e}function Yb(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Hb.bind(null,e),e}class wu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return nb(this.persistence,new eb,e.initialUser,this.serializer)}Ga(e){return new XP(ep.Zr,this.serializer)}Wa(e){return new ub}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wu.provider={build:()=>new wu};class kh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>My(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kb.bind(null,this.syncEngine),await Rb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bb}()}createDatastore(e){const n=Xu(e.databaseInfo.databaseId),r=function(s){return new fb(s)}(e.databaseInfo);return function(s,o,l,u){return new gb(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new vb(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>My(this.syncEngine,n,0),function(){return Ny.D()?new Ny:new cb}())}createSyncEngine(e,n){return function(i,s,o,l,u,d,f){const y=new Mb(i,s,o,l,u,d);return f&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ea(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}kh.provider={build:()=>new kh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ME{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=Lw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ap(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ld(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await gE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Fy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Jb(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Dy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Dy(e.remoteStore,i)),t._onlineComponents=e}async function Jb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await ld(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ms("Error using user provided cache. Falling back to memory cache: "+n),await ld(t,new wu)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await ld(t,new wu);return t._offlineComponents}async function jE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Fy(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Fy(t,new kh))),t._onlineComponents}function Zb(t){return jE(t).then(e=>e.syncEngine)}async function FE(t){const e=await jE(t),n=e.eventManager;return n.onListen=jb.bind(null,e.syncEngine),n.onUnlisten=Bb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Fb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=zb.bind(null,e.syncEngine),n}function e2(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const f=new ME({next:_=>{f.Za(),o.enqueueAndForget(()=>CE(s,y));const A=_.docs.has(l);!A&&_.fromCache?d.reject(new W(L.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&_.fromCache&&u&&u.source==="server"?d.reject(new W(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(_)},error:_=>d.reject(_)}),y=new kE(Kf(l.path),f,{includeMetadataChanges:!0,_a:!0});return SE(s,y)}(await FE(t),t.asyncQueue,e,n,r)),r.promise}function t2(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const f=new ME({next:_=>{f.Za(),o.enqueueAndForget(()=>CE(s,y)),_.fromCache&&u.source==="server"?d.reject(new W(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),y=new kE(l,f,{includeMetadataChanges:!0,_a:!0});return SE(s,y)}(await FE(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function UE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(t,e,n){if(!n)throw new W(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function n2(t,e,n,r){if(e===!0&&r===!0)throw new W(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function By(t){if(!G.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function zy(t){if(G.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ec(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function Xn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ec(t);throw new W(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}n2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=UE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class tc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $y({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $y(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wR;switch(r.type){case"firstParty":return new xR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Uy.get(n);r&&(H("ComponentProvider","Removing Datastore"),Uy.delete(n),r.terminate())}(this),Promise.resolve()}}function r2(t,e,n,r={}){var i;const s=(t=Xn(t,tc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ms("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ct.MOCK_USER;else{l=f1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new W(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ct(d)}t._authCredentials=new ER(new Vw(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jr(this.firestore,e,this._query)}}class _t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class Cr extends jr{constructor(e,n,r){super(e,n,Kf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new G(e))}withConverter(e){return new Cr(this.firestore,e,this._path)}}function ud(t,e,...n){if(t=Le(t),BE("collection","path",e),t instanceof tc){const r=Ee.fromString(e,...n);return zy(r),new Cr(t,null,r)}{if(!(t instanceof _t||t instanceof Cr))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return zy(r),new Cr(t.firestore,null,r)}}function gt(t,e,...n){if(t=Le(t),arguments.length===1&&(e=Lw.newId()),BE("doc","path",e),t instanceof tc){const r=Ee.fromString(e,...n);return By(r),new _t(t,null,new G(r))}{if(!(t instanceof _t||t instanceof Cr))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return By(r),new _t(t.firestore,t instanceof Cr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new vE(this,"async_queue_retry"),this.Vu=()=>{const r=ad();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=ad();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=ad();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new zn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!va(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=op.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&J()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Ia extends tc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Wy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wy(e),this._firestoreClient=void 0,await e}}}function i2(t,e){const n=typeof t=="object"?t:Sf(),r=typeof t=="string"?t:"(default)",i=Ii(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=d1("firestore");s&&r2(i,...s)}return i}function cp(t){if(t._terminated)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||s2(t),t._firestoreClient}function s2(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,f){return new MR(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,UE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Xb(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Es(rt.fromBase64String(e))}catch(n){throw new W(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Es(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class dp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
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
 */class hp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=/^__.*__$/;class a2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new _a(e,this.data,n,this.fieldTransforms)}}class zE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $E(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class fp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new fp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Eu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if($E(this.Cu)&&o2.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class l2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Xu(e)}Qu(e,n,r,i=!1){return new fp({Cu:e,methodName:n,qu:r,path:Ze.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pp(t){const e=t._freezeSettings(),n=Xu(t._databaseId);return new l2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function u2(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);gp("Data must be an object, but it was:",o,r);const l=WE(r,o);let u,d;if(s.merge)u=new Lt(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const y of s.mergeFields){const _=Rh(e,y,n);if(!o.contains(_))throw new W(L.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);HE(f,_)||f.push(_)}u=new Lt(f),d=o.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,d=o.fieldTransforms;return new a2(new At(l),u,d)}class ic extends rc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ic}}class mp extends rc{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new oa(e.serializer,Jw(e.serializer,this.$u));return new aP(e.path,n)}isEqual(e){return e instanceof mp&&this.$u===e.$u}}function c2(t,e,n,r){const i=t.Qu(1,e,n);gp("Data must be an object, but it was:",i,r);const s=[],o=At.empty();xi(r,(u,d)=>{const f=yp(e,u,n);d=Le(d);const y=i.Nu(f);if(d instanceof ic)s.push(f);else{const _=xa(d,y);_!=null&&(s.push(f),o.set(f,_))}});const l=new Lt(s);return new zE(o,l,i.fieldTransforms)}function d2(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Rh(e,r,n)],u=[i];if(s.length%2!=0)throw new W(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<s.length;_+=2)l.push(Rh(e,s[_])),u.push(s[_+1]);const d=[],f=At.empty();for(let _=l.length-1;_>=0;--_)if(!HE(d,l[_])){const A=l[_];let N=u[_];N=Le(N);const V=o.Nu(A);if(N instanceof ic)d.push(A);else{const M=xa(N,V);M!=null&&(d.push(A),f.set(A,M))}}const y=new Lt(d);return new zE(f,y,o.fieldTransforms)}function h2(t,e,n,r=!1){return xa(n,t.Qu(r?4:3,e))}function xa(t,e){if(qE(t=Le(t)))return gp("Unsupported field value:",e,t),WE(t,e);if(t instanceof rc)return function(r,i){if(!$E(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=xa(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Jw(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Be.fromDate(r);return{timestampValue:vu(i.serializer,s)}}if(r instanceof Be){const s=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vu(i.serializer,s)}}if(r instanceof dp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Es)return{bytesValue:uE(i.serializer,r._byteString)};if(r instanceof _t){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Jf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof hp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Qf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ec(r)}`)}(t,e)}function WE(t,e){const n={};return Ow(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xi(t,(r,i)=>{const s=xa(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function qE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof dp||t instanceof Es||t instanceof _t||t instanceof rc||t instanceof hp)}function gp(t,e,n){if(!qE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ec(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Rh(t,e,n){if((e=Le(e))instanceof nc)return e._internalPath;if(typeof e=="string")return yp(t,e);throw Eu("Field path arguments must be of type string or ",t,!1,void 0,n)}const f2=new RegExp("[~\\*/\\[\\]]");function yp(t,e,n){if(e.search(f2)>=0)throw Eu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nc(...e.split("."))._internalPath}catch{throw Eu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Eu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(L.INVALID_ARGUMENT,l+t+u)}function HE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new p2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class p2 extends GE{data(){return super.data()}}function vp(t,e){return typeof e=="string"?yp(t,e):e instanceof nc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _p{}class wp extends _p{}function g2(t,e,...n){let r=[];e instanceof _p&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Tp).length,l=s.filter(u=>u instanceof Ep).length;if(o>1||o>0&&l>0)throw new W(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ep extends wp{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ep(e,n,r)}_apply(e){const n=this._parse(e);return KE(e._query,n),new jr(e.firestore,e.converter,wh(e._query,n))}_parse(e){const n=pp(e.firestore);return function(s,o,l,u,d,f,y){let _;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Hy(y,f);const A=[];for(const N of y)A.push(qy(u,s,N));_={arrayValue:{values:A}}}else _=qy(u,s,y)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Hy(y,f),_=h2(l,o,y,f==="in"||f==="not-in");return je.create(d,f,_)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Tp extends _p{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Tp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)KE(o,u),o=wh(o,u)}(e._query,n),new jr(e.firestore,e.converter,wh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ip extends wp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ip(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ra(s,o)}(e._query,this._field,this._direction);return new jr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ks(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function y2(t,e="asc"){const n=e,r=vp("orderBy",t);return Ip._create(r,n)}class xp extends wp{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new xp(e,n,r)}_apply(e){return new jr(e.firestore,e.converter,gu(e._query,this._limit,this._limitType))}}function v2(t){return xp._create("limit",t,"F")}function qy(t,e,n){if(typeof(n=Le(n))=="string"){if(n==="")throw new W(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qw(e)&&n.indexOf("/")!==-1)throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!G.isDocumentKey(r))throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fy(t,new G(r))}if(n instanceof _t)return fy(t,n._key);throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ec(n)}.`)}function Hy(t,e){if(!Array.isArray(t)||t.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function KE(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class _2{convertValue(e,n="none"){switch(_i(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>De(o.doubleValue));return new hp(s)}convertGeoPoint(e){return new dp(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Wf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ea(e));default:return null}}convertTimestamp(e){const n=br(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);me(mE(r));const i=new ta(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||Qn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w2(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class QE extends GE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Dl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Dl extends QE{data(e={}){return super.data(e)}}class E2{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new go(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Dl(this._firestore,this._userDataWriter,r.key,r,new go(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Dl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new go(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Dl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new go(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:T2(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function T2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I2(t){t=Xn(t,_t);const e=Xn(t.firestore,Ia);return e2(cp(e),t._key).then(n=>A2(e,t,n))}class YE extends _2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Es(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function cd(t){t=Xn(t,jr);const e=Xn(t.firestore,Ia),n=cp(e),r=new YE(e);return m2(t._query),t2(n,t._query).then(i=>new E2(e,r,t,i))}function x2(t,e,n){t=Xn(t,_t);const r=Xn(t.firestore,Ia),i=w2(t.converter,e);return XE(r,[u2(pp(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,An.none())])}function Nt(t,e,n,...r){t=Xn(t,_t);const i=Xn(t.firestore,Ia),s=pp(i);let o;return o=typeof(e=Le(e))=="string"||e instanceof nc?d2(s,"updateDoc",t._key,e,n,r):c2(s,"updateDoc",t._key,e),XE(i,[o.toMutation(t._key,An.exists(!0))])}function XE(t,e){return function(r,i){const s=new zn;return r.asyncQueue.enqueueAndForget(async()=>$b(await Zb(r),i,s)),s.promise}(cp(t),e)}function A2(t,e,n){const r=n.docs.get(e._key),i=new YE(t);return new QE(t,i,e._key,r,new go(n.hasPendingWrites,n.fromCache),e.converter)}function Ne(t){return new mp("increment",t)}(function(e,n=!0){(function(i){Cs=i})(As),Cn(new un("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Ia(new TR(r.getProvider("auth-internal")),new SR(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new W(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ta(d.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Qt(ly,"4.7.3",e),Qt(ly,"4.7.3","esm2017")})();const S2={BASE_URL:"/danat-quiz-app/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyA8e7z-aAEuuhQiWapxX7yLNZar_ngsqtk"};var Gy={};const C2=()=>{if(Gy.VITE_FIREBASE_API_KEY)return Gy.VITE_FIREBASE_API_KEY;try{if(typeof import.meta<"u"&&S2)return"AIzaSyA8e7z-aAEuuhQiWapxX7yLNZar_ngsqtk"}catch{}},k2={apiKey:C2(),authDomain:"danat-quiz-app.firebaseapp.com",projectId:"danat-quiz-app",storageBucket:"danat-quiz-app.firebasestorage.app",messagingSenderId:"436991893081",appId:"1:436991893081:web:5aaf9cbb3275c7f6139b48",measurementId:"G-QWT2287WC4"},Ap=I0(k2);typeof window<"u"&&tC(Ap);const Yr=vR(Ap),qe=i2(Ap),Ky="danat_quiz_current_index",dd="danat_quiz_questions_cache_v1",R2=24*60*60*1e3,Qy="danat_quiz_leaderboard_cache_v1",P2=5*60*1e3,b2=[{id:"q1",question:{en:"What is the capital of Saudi Arabia?",ar:"ما هي عاصمة المملكة العربية السعودية؟",fr:"Quelle est la capitale de l'Arabie Saoudite ?"},options:{en:["Jeddah","Riyadh","Dammam","Mecca"],ar:["جدة","الرياض","الدمام","مكة المكرمة"],fr:["Djeddah","Riyad","Dammam","La Mecque"]},correctAnswer:{en:"Riyadh",ar:"الرياض",fr:"Riyad"},points:10,category:{en:"Geography",ar:"جغرافيا",fr:"Géographie"}},{id:"q2",question:{en:"What is the main token of Danat network?",ar:"ما هي العملة الأساسية لشَبكة Danat Coin؟",fr:"Quel est le jeton principal du réseau Danat ?"},options:{en:["ETH","USDT","DNC","BTC"],ar:["ETH","USDT","DNC","BTC"],fr:["ETH","USDT","DNC","BTC"]},correctAnswer:{en:"DNC",ar:"DNC",fr:"DNC"},points:10,category:{en:"Crypto",ar:"كريبتو",fr:"Crypto"}},{id:"q3",question:{en:"How many pillars of Islam are there?",ar:"كم عدد أركان الإسلام؟",fr:"Combien y a-t-il de piliers de l'Islam ?"},options:{en:["4","5","6","7"],ar:["4","5","6","7"],fr:["4","5","6","7"]},correctAnswer:{en:"5",ar:"5",fr:"5"},points:10,category:{en:"General Culture",ar:"ثقافة عامة",fr:"Culture Générale"}}],Yy={العربية:{appName:"دانات كويز",subtitle:"اختبر معلوماتك .. واربح المكافآت",startPlay:"إبدأ اللعب",rewards:"المكافآت",leaderboard:"لوحة المتصدرين",profile:"ملفي الشخصي",statistics:"إحصائيات",dncBalance:"رصيد DNC",points:"النقاط الحالية",lives:"الأرواح",settings:"الإعدادات",logout:"خروج",adminPanel:"لوحة الإدارة",close:"إغلاق",nextQuestion:"السؤال التالي ➡️",confirmAnswer:"تأكيد الإجابة",connectWallet:"ربط المحفظة (WalletConnect)",walletConnected:"المحفظة متصلة",gamesPlayed:"عدد الألعاب",pointsEarned:"النقاط المكتسبة",levelLabel:"المستوى",emptyLeaderboard:"لا يوجد لاعبون بعد",watchForLife:"📺 شاهد فيديو لحياة إضافية (+1 ❤️)",watchForPoints:"📺 شاهد فيديو لـ 10 نقاط (+10 🪙)",outOfLivesTitle:"انتهت الأرواح! 💔",outOfLivesDesc:"شاهد فيديو إعلاني للحصول على حياة إضافية ومتابعة اللعب.",adsWatched:"الإعلانات المشاهدة",timedBonusTitle:"مكافأة كل 3 ساعات ⏳",timedBonusDesc:"احصل على 5 أرواح مجانية كل 3 ساعات (حد أقصى 10 أرواح في 24 ساعة).",claimBonus:"استلام المكافأة",appLanguage:"لغة التطبيق",changeProfilePic:"تغيير الصورة الشخصية",emailLabel:"البريد الإلكتروني:",appLanguageLabel:"لغة التطبيق:",conversionRate:"معادلة التحويل:",watchAdVideoTitle:"شاهد فيديو إعلاني",watchAdVideoDesc:"واحصل على 10 نقاط إضافية",watchBtn:"مشاهدة",topPlayers:"أفضل اللاعبين",rank:"المركز",player:"اللاعب",pts:"النقاط",loading:"جاري التحميل...",redeemReq:"طلب استبدال",connectBtn:"ربط",downloadCsvReport:"تحميل تقرير اللاعبين الكامل (CSV)",adminRedeemNotice:"مراجعة طلبات استبدال دانات كوين قبل إرسال التوكنز للمحفظة:",approved:"تم الاعتماد",pending:"قيد الانتظار",walletLabel:"المحفظة:",approveAndSend:"اعتماد وإرسال التوكنز",milestoneAdTitle:"إعلان مكافأة كل 10 أسئلة",milestoneAdDesc:"لقد أجبت على 10 أسئلة! شاهد هذا الفيديو القصير للحصول على 10 نقاط (+10 🪙):",pleaseWait:"يرجى الانتظار...",seconds:"ثوانٍ",autoRewardNotice:"ستحصل على المكافأة تلقائياً عند انتهاء الإعلان.",forcedAdTitle:"إعلان جوجل الإجباري",forcedAdDesc:"لقد أنهيت 4 مستويات بنجاح! يلزم الاتصال بالإنترنت ومشاهدة هذا الإعلان القصير للمتابعة:",forcedAdRewardNotice:"ستحصل على 50 نقطة إضافية تلقائياً عند انتهاء الفيديو.",connectWeb3Title:"ربط محفظة Web3",connectWeb3Desc:"أدخل عنوان محفظة إيثريوم (MetaMask / Trust Wallet) لاستلام توكن دانات كوين (DNC):",confirmConnectBtn:"تأكيد وتوصيل المحفظة",selectAvatarTitle:"اختر صورتك الشخصية",backToHome:"العودة للرئيسية",questionNav:"السؤال",ofNav:"من",loginTitle:"دانات كويز | Danat Quiz",loginSubtitle:"سجل دخولك أو أنشئ حساباً لحفظ بياناتك في السحابة",forgotPasswordLabel:"البريد الإلكتروني لاستعادة كلمة المرور",sendResetLink:"إرسال رابط الاستعادة",backToLogin:"العودة لتسجيل الدخول",fullName:"الاسم الكامل",enterName:"أدخل اسمك",email:"البريد الإلكتروني",password:"كلمة المرور",forgotPasswordQuestion:"هل نسيت كلمة المرور؟",loginBtn:"تسجيل الدخول",signupBtn:"إنشاء حساب جديد",noAccountPrompt:"ليس لديك حساب؟ أنشئ حساباً الآن",hasAccountPrompt:"لديك حساب بالفعل؟ سجل الدخول"},English:{appName:"Danat Quiz",subtitle:"Test your knowledge & win rewards",startPlay:"Start Quiz",rewards:"Rewards",leaderboard:"Leaderboard",profile:"My Profile",statistics:"Statistics",dncBalance:"DNC Balance",points:"Current Points",lives:"Lives",settings:"Settings",logout:"Logout",adminPanel:"Admin Panel",close:"Close",nextQuestion:"Next Question ➡️",confirmAnswer:"Confirm Answer",connectWallet:"Connect Wallet (WalletConnect)",walletConnected:"Wallet Connected",gamesPlayed:"Games Played",pointsEarned:"Points Earned",levelLabel:"Level",emptyLeaderboard:"Empty",watchForLife:"📺 Watch Ad for +1 Life (+1 ❤️)",watchForPoints:"📺 Watch Ad for +10 Points (+10 🪙)",outOfLivesTitle:"Out of Lives! 💔",outOfLivesDesc:"Watch a video ad to get an extra life and continue playing.",adsWatched:"Ads Watched",timedBonusTitle:"3-Hour Life Bonus ⏳",timedBonusDesc:"Claim 5 free lives every 3 hours (Max cap 10 lives per 24 hours).",claimBonus:"Claim Bonus",appLanguage:"App Language",changeProfilePic:"Change Profile Picture",emailLabel:"Email:",appLanguageLabel:"App Language:",conversionRate:"Conversion Rate:",watchAdVideoTitle:"Watch Ad Video",watchAdVideoDesc:"And get 10 bonus points",watchBtn:"Watch",topPlayers:"Top Players",rank:"Rank",player:"Player",pts:"Points",loading:"Loading...",redeemReq:"Redeem Request",connectBtn:"Connect",downloadCsvReport:"Download Full Players Report (CSV)",adminRedeemNotice:"Review Danat Coin redemption requests before sending tokens:",approved:"Approved",pending:"Pending",walletLabel:"Wallet:",approveAndSend:"Approve & Send Tokens",milestoneAdTitle:"10-Questions Milestone Ad",milestoneAdDesc:"You answered 10 questions! Watch this short video to earn 10 points (+10 🪙):",pleaseWait:"Please wait...",seconds:"seconds",autoRewardNotice:"You will automatically receive your reward when the ad finishes.",forcedAdTitle:"Forced Google Ad",forcedAdDesc:"You successfully finished 4 levels! Internet connection and watching this short ad are required to continue:",forcedAdRewardNotice:"You will automatically receive 50 bonus points when the video ends.",connectWeb3Title:"Connect Web3 Wallet",connectWeb3Desc:"Enter Ethereum wallet address (MetaMask / Trust Wallet) to receive Danat Coin (DNC):",confirmConnectBtn:"Confirm & Connect Wallet",selectAvatarTitle:"Select Your Avatar",backToHome:"Back to Home",questionNav:"Question",ofNav:"of",loginTitle:"Danat Quiz",loginSubtitle:"Log in or create an account to save your data in the cloud",forgotPasswordLabel:"Email to reset password",sendResetLink:"Send Reset Link",backToLogin:"Back to Login",fullName:"Full Name",enterName:"Enter your name",email:"Email",password:"Password",forgotPasswordQuestion:"Forgot password?",loginBtn:"Login",signupBtn:"Create New Account",noAccountPrompt:"Don't have an account? Create one now",hasAccountPrompt:"Already have an account? Login"},Français:{appName:"Danat Quiz",subtitle:"Testez vos connaissances et gagnez des récompenses",startPlay:"Commencer le quiz",rewards:"Récompenses",leaderboard:"Classement",profile:"Mon Profil",statistics:"Statistiques",dncBalance:"Solde DNC",points:"Points Actuels",lives:"Vies",settings:"Paramètres",logout:"Déconnexion",adminPanel:"Panneau d'administration",close:"Fermer",nextQuestion:"Question Suivante ➡️",confirmAnswer:"Confirmer la réponse",connectWallet:"Connecter le portefeuille (WalletConnect)",walletConnected:"Portefeuille connecté",gamesPlayed:"Parties jouées",pointsEarned:"Points gagnés",levelLabel:"Niveau",emptyLeaderboard:"Aucun joueur pour le moment",watchForLife:"📺 Regarder une pub pour +1 Vie (+1 ❤️)",watchForPoints:"📺 Regarder une pub pour +10 Points (+10 🪙)",outOfLivesTitle:"Plus de vies ! 💔",outOfLivesDesc:"Regardez une vidéo publicitaire pour obtenir une vie supplémentaire et continuer à jouer.",adsWatched:"Publicités regardées",timedBonusTitle:"Bonus de vie toutes les 3 heures ⏳",timedBonusDesc:"Réclamez 5 vies gratuites toutes les 3 heures (Limite max 10 vies par 24h).",claimBonus:"Réclamer le bonus",appLanguage:"Langue de l'application",changeProfilePic:"Changer la photo de profil",emailLabel:"E-mail :",appLanguageLabel:"Langue de l'application :",conversionRate:"Taux de conversion :",watchAdVideoTitle:"Regarder une vidéo publicitaire",watchAdVideoDesc:"Et obtenez 10 points bonus",watchBtn:"Regarder",topPlayers:"Meilleurs Joueurs",rank:"Rang",player:"Joueur",pts:"Points",loading:"Chargement...",redeemReq:"Demande d'échange",connectBtn:"Connecter",downloadCsvReport:"Télécharger le rapport complet des joueurs (CSV)",adminRedeemNotice:"Examinez les demandes d'échange de Danat Coin avant d'envoyer des jetons :",approved:"Approuvé",pending:"En attente",walletLabel:"Portefeuille :",approveAndSend:"Approuver et envoyer les jetons",milestoneAdTitle:"Publicité d'étape tous les 10 questions",milestoneAdDesc:"Vous avez répondu à 10 questions ! Regardez cette courte vidéo pour gagner 10 points (+10 🪙) :",pleaseWait:"Veuillez patienter...",seconds:"secondes",autoRewardNotice:"Vous recevrez automatiquement votre récompense à la fin de la publicité.",forcedAdTitle:"Publicité Google obligatoire",forcedAdDesc:"Vous avez terminé 4 niveaux avec succès ! Une connexion Internet et le visionnage de cette courte publicité sont requis pour continuer :",forcedAdRewardNotice:"Vous recevrez automatiquement 50 points bonus à la fin de la vidéo.",connectWeb3Title:"Connecter le portefeuille Web3",connectWeb3Desc:"Entrez l'adresse de votre portefeuille Ethereum (MetaMask / Trust Wallet) pour recevoir Danat Coin (DNC) :",confirmConnectBtn:"Confirmer et connecter le portefeuille",selectAvatarTitle:"Choisissez votre avatar",backToHome:"Retour à l'accueil",questionNav:"Question",ofNav:"sur",loginTitle:"Danat Quiz",loginSubtitle:"Connectez-vous ou créez un compte pour enregistrer vos données dans le cloud",forgotPasswordLabel:"E-mail pour réinitialiser le mot de passe",sendResetLink:"Envoyer le lien de réinitialisation",backToLogin:"Retour à la connexion",fullName:"Nom complet",enterName:"Entrez votre nom",email:"E-mail",password:"Mot de passe",forgotPasswordQuestion:"Mot de passe oublié ?",loginBtn:"Se connecter",signupBtn:"Créer un nouveau compte",noAccountPrompt:"Vous n'avez pas de compte ? Créez-en un maintenant",hasAccountPrompt:"Vous avez déjà un compte ? Connectez-vous"}},Xy=()=>{const t=Array(16).fill(0),e=n=>{const r=n.map((s,o)=>s===0?o:-1).filter(s=>s>=0);if(!r.length)return n;const i=[...n];return i[r[Math.floor(Math.random()*r.length)]]=Math.random()<.9?2:4,i};return e(e(t))},Jy=(t,e)=>{const n=[...t],r=[];for(let s=0;s<4;s++){const o=e==="left"?[0,1,2,3].map(l=>s*4+l):e==="right"?[3,2,1,0].map(l=>s*4+l):e==="up"?[0,1,2,3].map(l=>l*4+s):[3,2,1,0].map(l=>l*4+s);r.push(o)}let i=0;return r.forEach(s=>{const o=s.map(u=>t[u]).filter(Boolean),l=[];for(let u=0;u<o.length;u++)o[u]===o[u+1]?(l.push(o[u]*2),i+=o[u]*2,u++):l.push(o[u]);s.forEach((u,d)=>{n[u]=l[d]||0})}),{board:n,gained:i,changed:n.some((s,o)=>s!==t[o])}};function N2({onBack:t}){const[e,n]=K.useState(Xy),[r,i]=K.useState(0),[s,o]=K.useState(()=>Number(localStorage.getItem("danat_2048_best")||0)),[l,u]=K.useState(null),[d,f]=K.useState(!1),[y,_]=K.useState(!1),A=K.useRef(null),N=x=>{const S=x.touches[0];S&&(A.current={x:S.clientX,y:S.clientY})},V=x=>{if(!A.current||!x.changedTouches[0])return;const S=x.changedTouches[0],O=S.clientX-A.current.x,F=S.clientY-A.current.y;A.current=null,!(Math.max(Math.abs(O),Math.abs(F))<24)&&(Math.abs(O)>Math.abs(F)?M(O>0?"right":"left"):M(F>0?"down":"up"))},M=x=>{if(y)return;const S=Jy(e,x);if(!S.changed)return;const O=[...S.board],F=O.map((w,T)=>w===0?T:-1).filter(w=>w>=0);F.length&&(O[F[Math.floor(Math.random()*F.length)]]=Math.random()<.9?2:4),u({board:e,score:r}),n(O);const p=r+S.gained;i(p),p>s&&(o(p),localStorage.setItem("danat_2048_best",String(p))),!d&&O.includes(2048)&&f(!0);const v=O.some(w=>w===0)||["left","right","up","down"].some(w=>Jy(O,w).changed);_(!v)};K.useEffect(()=>{const x=S=>{const O={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down"};O[S.key]&&(S.preventDefault(),M(O[S.key]))};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)});const C=()=>{n(Xy()),i(0),u(null),f(!1),_(!1)},E=x=>({0:"bg-[#211a38] border border-white/5 text-transparent",2:"bg-[#eee7dc] text-[#443b52]",4:"bg-[#ead7b6] text-[#443b52]",8:"bg-[#f3b46b] text-[#fffaf2]",16:"bg-[#f29a55] text-white",32:"bg-[#ed784f] text-white",64:"bg-[#e85c42] text-white",128:"bg-[#e8c85d] text-white",256:"bg-[#e5bd43] text-white",512:"bg-[#dcae2e] text-white",1024:"bg-[#c99520] text-white",2048:"bg-gradient-to-br from-yellow-200 via-amber-400 to-yellow-600 text-[#39250b] shadow-[0_0_22px_rgba(251,191,36,.65)]"})[x]||"bg-[#8f6ac4] text-white";return m.jsxs("div",{className:"mx-auto flex w-full max-w-[520px] flex-col gap-4 pb-5",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("button",{onClick:t,className:"rounded-xl border border-amber-300/40 bg-[#211735] px-4 py-2 text-sm font-bold text-amber-200",children:"← Back"}),m.jsxs("div",{className:"text-right",children:[m.jsx("div",{className:"text-xs font-bold uppercase tracking-[.28em] text-amber-300",children:"Danat Arcade"}),m.jsx("h2",{className:"text-3xl font-black tracking-tight text-white",children:"2048"})]})]}),m.jsxs("div",{className:"rounded-[28px] border border-amber-300/35 bg-gradient-to-br from-[#2b1b49] via-[#1b1630] to-[#11182f] p-4 shadow-[0_18px_45px_rgba(0,0,0,.4)] sm:p-6",children:[m.jsxs("div",{className:"mb-5 flex items-center justify-between gap-3",children:[m.jsxs("div",{children:[m.jsx("div",{className:"text-xs font-semibold text-purple-200",children:"Join the tiles. Reach"}),m.jsxs("div",{className:"text-2xl font-black text-amber-300",children:["2048 ",m.jsx("span",{className:"text-white",children:"✦"})]})]}),m.jsxs("div",{className:"flex gap-2 text-center",children:[m.jsxs("div",{className:"min-w-[72px] rounded-xl border border-white/10 bg-black/25 px-3 py-2",children:[m.jsx("div",{className:"text-[10px] font-bold uppercase tracking-wider text-purple-200",children:"Score"}),m.jsx("div",{className:"text-xl font-black text-white",children:r})]}),m.jsxs("div",{className:"min-w-[72px] rounded-xl border border-amber-300/30 bg-amber-400/10 px-3 py-2",children:[m.jsx("div",{className:"text-[10px] font-bold uppercase tracking-wider text-amber-200",children:"Best"}),m.jsx("div",{className:"text-xl font-black text-amber-300",children:s})]})]})]}),m.jsx("div",{className:"rounded-2xl border border-white/10 bg-[#100d20] p-2.5 shadow-inner sm:p-3 touch-none select-none",onTouchStart:N,onTouchEnd:V,onTouchCancel:()=>{A.current=null},"aria-label":"2048 game board. Swipe in any direction to move the tiles.",children:m.jsx("div",{className:"grid grid-cols-4 gap-2 sm:gap-3",children:e.map((x,S)=>m.jsx("div",{className:`flex aspect-square items-center justify-center rounded-xl text-2xl font-black shadow-sm transition-all duration-100 sm:rounded-2xl sm:text-3xl ${E(x)} `,children:x||""},S))})}),d&&m.jsx("div",{className:"mt-4 rounded-xl border border-amber-300/50 bg-amber-300/10 p-3 text-center font-black text-amber-200",children:"✨ You reached 2048! Keep playing or start a new game."}),y&&m.jsx("div",{className:"mt-4 rounded-xl border border-rose-300/40 bg-rose-500/10 p-3 text-center font-black text-rose-200",children:"No more moves — game over."}),m.jsxs("div",{className:"mt-4 flex gap-2",children:[m.jsx("button",{onClick:C,className:"flex-1 rounded-xl bg-gradient-to-b from-yellow-200 to-amber-500 py-3 font-black text-[#211735] shadow-lg",children:"↻ New Game"}),m.jsx("button",{onClick:()=>{l&&(n(l.board),i(l.score),u(null),_(!1))},disabled:!l,className:"flex-1 rounded-xl border border-amber-300/40 bg-white/5 py-3 font-bold text-amber-100 disabled:opacity-35",children:"↶ Undo"})]})]}),m.jsx("p",{className:"text-center text-xs text-purple-200",children:"Swipe the board up, down, left, or right to move the tiles. On desktop, use your keyboard arrow keys. Combine matching numbers to reach 2048."})]})}function D2(){const[t,e]=K.useState(null),[n,r]=K.useState("login"),[i,s]=K.useState(""),[o,l]=K.useState(""),[u,d]=K.useState(""),[f,y]=K.useState(""),[_,A]=K.useState(""),[N,V]=K.useState(!1),[M,C]=K.useState(!1),[E,x]=K.useState("home"),[S,O]=K.useState({name:"Guest",email:"",language:"English",level:1,points:0,dncBalance:0,totalGames:0,totalEarnedPoints:0,totalQuestionsAnswered:0,lastSpiritClaimTime:0,dailyClaimedLives:0,lastDailyResetTime:0,walletConnected:!1,walletAddress:"",avatar:"avatar-man-ghutra.png"}),F=S.language==="العربية"?"ar":S.language==="Français"?"fr":"en",p=Yy[S.language]||Yy.English,[v,w]=K.useState(3),[T,k]=K.useState(()=>parseInt(localStorage.getItem("videosWatched")||"0",10)),[P,I]=K.useState(0),[Tt,fn]=K.useState(!1),[Fr,Bt]=K.useState(5),[$,Y]=K.useState(!1),[ne,fe]=K.useState(!1),[ce,ve]=K.useState(!1),[zt,Jt]=K.useState(""),[$t,Wt]=K.useState(!1),[sc,Aa]=K.useState(5),[Si,Ur]=K.useState(!1),[bs,Ci]=K.useState(5),[ki,Ri]=K.useState([]),[Sa,Ns]=K.useState(!1),[pn,Ds]=K.useState(()=>{try{const R=localStorage.getItem(dd);if(R){const z=JSON.parse(R);if(Array.isArray(z.questions)&&z.questions.length>0)return z.questions}}catch(R){console.warn("Question cache could not be read:",R)}return b2}),[It,Br]=K.useState(()=>{const R=localStorage.getItem(Ky),z=R!==null?parseInt(R,10):0;return!isNaN(z)&&z>=0?z:0}),[oc,Vs]=K.useState(0),[mn,Ls]=K.useState(null),[be,ze]=K.useState(!1),[Os,Ms]=K.useState(0),[ac,Ca]=K.useState(!0);K.useEffect(()=>{localStorage.setItem(Ky,It.toString())},[It]),K.useEffect(()=>{if(E==="leaderboard"){async function R(){Ns(!0);try{const z=localStorage.getItem(Qy);if(z){const Z=JSON.parse(z);if(Date.now()-Z.timestamp<P2&&Array.isArray(Z.users)){Ri(Z.users),Ns(!1);return}}const re=g2(ud(qe,"users"),y2("points","desc"),v2(20)),Q=(await cd(re)).docs.map(Z=>({id:Z.id,name:Z.data().name||"لاعب",avatar:Z.data().avatar||"avatar-man-ghutra.png",points:Z.data().points??Z.data().spirits??0}));Ri(Q),localStorage.setItem(Qy,JSON.stringify({timestamp:Date.now(),users:Q}))}catch(z){console.error("Failed to fetch leaderboard:",z)}finally{Ns(!1)}}R()}},[E]);const[Rn,js]=K.useState([{id:"1",user:"أحمد",points:1e3,dnc:1,wallet:"0x71C...39A",status:"PENDING",date:"2026-11-02"},{id:"2",user:"محمد علي",points:5e3,dnc:5,wallet:"0x38B...12F",status:"APPROVED",date:"2026-11-01"}]),ka=[{id:"avatar-man-ghutra.png"},{id:"avatar-woman-afro.png"},{id:"avatar-woman-hijab.png"},{id:"avatar_kuwaiti.png"},{id:"avatar_boy.png"},{id:"avatar_brunette.png"},{id:"avatar_blonde.png"}],mt=R=>`/danat-quiz-app/assets/${R}`;K.useEffect(()=>{async function R(){try{const z=localStorage.getItem(dd);if(z){const Q=JSON.parse(z);if(Date.now()-Q.timestamp<R2&&Array.isArray(Q.questions)&&Q.questions.length>0){Ds(Q.questions),Br(We=>We<Q.questions.length?We:0),Ca(!1);return}}const ie=(await cd(ud(qe,"questions"))).docs.map(Q=>({id:Q.id,...Q.data()}));ie.length>0&&(Ds(ie),Br(Q=>Q<ie.length?Q:0),localStorage.setItem(dd,JSON.stringify({timestamp:Date.now(),questions:ie})))}catch(z){console.error("Firestore questions fetch failed, cached/fallback questions used:",z)}finally{Ca(!1)}}R()},[]),K.useEffect(()=>{const R=ak(Yr,async z=>{if(z){e(z);const re=gt(qe,"users",z.uid),ie=await I2(re);if(ie.exists()){const Q=ie.data(),Z=Q.totalQuestionsAnswered||0,We=Math.floor(Z/50)+1;O(Ie=>({...Ie,name:Q.name||z.email.split("@")[0],email:z.email,points:Q.points??Q.spirits??Ie.points,dncBalance:Q.dncBalance??Ie.dncBalance,level:Q.level??We,totalGames:Q.totalGames??Ie.totalGames,totalEarnedPoints:Q.totalEarnedPoints??Q.totalEarnedSpirits??Ie.totalEarnedPoints,totalQuestionsAnswered:Z,lastSpiritClaimTime:Q.lastSpiritClaimTime||0,dailyClaimedLives:Q.dailyClaimedLives||0,lastDailyResetTime:Q.lastDailyResetTime||0,walletConnected:Q.walletConnected??Ie.walletConnected,walletAddress:Q.walletAddress??Ie.walletAddress,avatar:Q.avatar??Ie.avatar,language:Q.language??Ie.language}))}}else e(null),O(re=>({...re,name:"Guest",email:"",points:0,dncBalance:0,level:1,totalGames:0,totalEarnedPoints:0,totalQuestionsAnswered:0,walletConnected:!1,walletAddress:"",avatar:"avatar-man-ghutra.png"}))});return()=>R()},[]);const lc=async R=>{R.preventDefault(),y(""),A("");try{await Xg(Yr,fh);const re=(await rk(Yr,i,o)).user.uid,ie={name:u||"لاعب دانات",email:i,points:0,dncBalance:0,level:1,totalGames:0,totalEarnedPoints:0,totalQuestionsAnswered:0,lastSpiritClaimTime:0,dailyClaimedLives:0,lastDailyResetTime:0,walletConnected:!1,walletAddress:"",avatar:"avatar-man-ghutra.png",language:"English",createdAt:new Date().toISOString()};await x2(gt(qe,"users",re),ie),O(Q=>({...Q,...ie})),s(""),l(""),d(""),V(!1)}catch(z){y("فشل إنشاء الحساب: "+z.message)}},uc=async R=>{R.preventDefault(),y(""),A("");try{await Xg(Yr,fh),await ik(Yr,i,o),s(""),l(""),V(!1)}catch(z){y("فشل تسجيل الدخول: "+z.message)}},Fs=async R=>{if(R.preventDefault(),y(""),A(""),!i){y("يرجى إدخال بريدك الإلكتروني أولاً.");return}try{await nk(Yr,i),A("تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.")}catch(z){y("فشل الإرسال: "+z.message)}},Us=async()=>{try{await lk(Yr),x("home")}catch(R){y("Sign out failed: "+R.message)}},Bs=async R=>{O(z=>({...z,language:R})),t&&await Nt(gt(qe,"users",t.uid),{language:R})},zr=async()=>{try{const R=await cd(ud(qe,"users"));let z="data:text/csv;charset=utf-8,";z+=`Name,Email,Points,DNC Balance,Total Games,Wallet Address
`,R.forEach(Q=>{const Z=Q.data(),We=['"'+(Z.name||"")+'"','"'+(Z.email||"")+'"',Z.points||Z.spirits||0,Z.dncBalance||0,Z.totalGames||0,'"'+(Z.walletAddress||"Not Connected")+'"'].join(",");z+=We+`
`});const re=encodeURI(z),ie=document.createElement("a");ie.setAttribute("href",re),ie.setAttribute("download",`danat_quiz_players_${new Date().toISOString().split("T")[0]}.csv`),document.body.appendChild(ie),ie.click(),document.body.removeChild(ie)}catch(R){alert("خطأ أثناء تصدير البيانات: "+R.message)}},zs=R=>R?typeof R.question=="object"&&R.question!==null?R.question[F]||R.question.en||R.question.ar||R.question.fr||"":R.question||"":"",Pi=R=>R?typeof R.options=="object"&&!Array.isArray(R.options)&&R.options!==null?R.options[F]||R.options.en||R.options.ar||R.options.fr||[]:Array.isArray(R.options)?R.options:[]:[],Pn=R=>!R||!R.category?S.language==="العربية"?"عام":S.language==="Français"?"Général":"General":typeof R.category=="object"?R.category[F]||R.category.en||R.category.ar||R.category.fr||"":R.category,Ra=()=>{Ur(!0);let R=5;Ci(R);const z=setInterval(async()=>{R-=1,Ci(R),R<=0&&(clearInterval(z),Ur(!1),Wr(),O(re=>({...re,points:re.points+10,totalEarnedPoints:re.totalEarnedPoints+10})),t&&await Nt(gt(qe,"users",t.uid),{points:Ne(10),totalEarnedPoints:Ne(10),rewardedAdsWatched:Ne(1)}),alert(S.language==="العربية"?"🎉 أتممت 10 أسئلة! شاهدت إعلان المكافأة وحصلت على 10 نقاط (+10 🪙)!":S.language==="Français"?"🎉 10 questions terminées ! Vous avez regardé la publicité et gagné 10 points (+10 🪙) !":"🎉 Completed 10 questions! Watched rewarded ad and earned 10 points (+10 🪙)!"))},1e3)},bi=async()=>{if(mn===null||v<=0)return;const R=pn[It],re=Pi(R)[mn];let ie=!1;if(typeof R.correctAnswer=="object"&&R.correctAnswer!==null){const Ie=R.correctAnswer[F]||R.correctAnswer.en;ie=re===Ie||mn===R.correctAnswer}else typeof R.correctAnswer=="number"?ie=mn===R.correctAnswer:ie=re===R.correctAnswer;const Q=S.totalQuestionsAnswered+1,Z=Math.floor(Q/50)+1,We=oc+1;if(Vs(We),ie){const Ie=R.points||10;Ms(Qe=>Qe+Ie),O(Qe=>({...Qe,points:Qe.points+Ie,totalEarnedPoints:Qe.totalEarnedPoints+Ie,totalQuestionsAnswered:Q,level:Z})),t&&await Nt(gt(qe,"users",t.uid),{points:Ne(Ie),totalEarnedPoints:Ne(Ie),totalQuestionsAnswered:Ne(1),level:Z})}else w(Qe=>Math.max(0,Qe-1)),O(Qe=>({...Qe,points:Math.max(0,Qe.points-5),totalQuestionsAnswered:Q,level:Z})),t&&await Nt(gt(qe,"users",t.uid),{points:Ne(-5),totalQuestionsAnswered:Ne(1),level:Z});ze(!0),We%10===0&&Ra()},Pa=async()=>{if(Ls(null),ze(!1),It+1<pn.length)Br(R=>R+1);else{const R=P+1;I(R);const z=S.totalGames+1;O(re=>({...re,totalGames:z})),t&&await Nt(gt(qe,"users",t.uid),{totalGames:Ne(1)}),Br(0),R>=4?(I(0),$r()):x("home")}},$r=()=>{fn(!0);let R=5;Bt(R);const z=setInterval(async()=>{R-=1,Bt(R),R<=0&&(clearInterval(z),fn(!1),O(re=>({...re,points:re.points+50,totalEarnedPoints:re.totalEarnedPoints+50})),t&&await Nt(gt(qe,"users",t.uid),{points:Ne(50),totalEarnedPoints:Ne(50),forcedAdsWatched:Ne(1)}),alert(S.language==="العربية"?"🌐 تم الاتصال بالإنترنت: شاهدت إعلان جوجل الإجباري وحصلت على 50 نقطة!":S.language==="Français"?"🌐 Connecté : Vous avez regardé la publicité Google et gagné 50 points !":"🌐 Connected: Watched forced ad and earned 50 points!"),x("home"))},1e3)},Wr=()=>{const R=T+1;k(R),localStorage.setItem("videosWatched",R.toString())},$e=async()=>{Wr(),w(R=>R+1),t&&await Nt(gt(qe,"users",t.uid),{rewardedAdsWatched:Ne(1)}),alert(S.language==="العربية"?"حصلت على حياة إضافية! ❤️":S.language==="Français"?"Vous avez gagné 1 vie supplémentaire ! ❤️":"You earned 1 Extra Life! ❤️")},ba=async()=>{Wr(),Ms(R=>R+10),O(R=>({...R,points:R.points+10,totalEarnedPoints:R.totalEarnedPoints+10})),t&&await Nt(gt(qe,"users",t.uid),{points:Ne(10),totalEarnedPoints:Ne(10),rewardedAdsWatched:Ne(1)}),alert(S.language==="العربية"?"حصلت على 10 نقاط إضافية! 🪙":S.language==="Français"?"Vous avez gagné 10 points bonus ! 🪙":"You earned 10 Bonus Points! 🪙")},qr=async()=>{const R=Date.now(),z=S.lastSpiritClaimTime||0,re=(R-z)/(1e3*60*60);if(re<3){const Zt=(3-re).toFixed(1);alert(S.language==="العربية"?`يرجى الانتظار ${Zt} ساعة لقطف الأرواح المجانية القادمة!`:S.language==="Français"?`Veuillez patienter ${Zt} heures pour réclamer vos prochaines vies gratuites !`:`Please wait ${Zt} hours to claim your next free lives!`);return}const ie=S.lastDailyResetTime||0,Q=(R-ie)/(1e3*60*60);let Z=S.dailyClaimedLives||0,We=ie;if(Q>=24&&(Z=0,We=R),Z>=10){alert(S.language==="العربية"?"⚠️ وصلت إلى الحد الأقصى للأرواح المجانية (10 أرواح في 24 ساعة).":S.language==="Français"?"⚠️ Vous avez atteint la limite maximale de vies gratuites (10 vies par 24 heures).":"⚠️ You reached the max limit for free lives (10 lives per 24 hours).");return}const Ie=5,Qe=Z+Ie;w(Zt=>Zt+Ie),O(Zt=>({...Zt,lastSpiritClaimTime:R,dailyClaimedLives:Qe,lastDailyResetTime:We})),t&&await Nt(gt(qe,"users",t.uid),{lastSpiritClaimTime:R,dailyClaimedLives:Qe,lastDailyResetTime:We}),alert(S.language==="العربية"?"🎉 تهانينا! حصلت على 5 أرواح مجانية (+5 ❤️).":S.language==="Français"?"🎉 Félicitations ! Vous avez réclamé 5 vies gratuites (+5 ❤️).":"🎉 Congrats! You claimed 5 free lives (+5 ❤️).")},Hr=async R=>{const z=R||"0x71C7656EC7ab88b098defB751B7401B5f6d8939A";O(re=>({...re,walletConnected:!0,walletAddress:z})),Y(!1),t&&await Nt(gt(qe,"users",t.uid),{walletConnected:!0,walletAddress:z})},Na=async()=>{Wt(!0);let R=5;Aa(R);const z=setInterval(async()=>{R-=1,Aa(R),R<=0&&(clearInterval(z),Wt(!1),Wr(),O(re=>({...re,points:re.points+10,totalEarnedPoints:re.totalEarnedPoints+10})),t&&await Nt(gt(qe,"users",t.uid),{points:Ne(10),totalEarnedPoints:Ne(10),rewardedAdsWatched:Ne(1)}),alert(S.language==="العربية"?"🎉 تهانينا! حصلت على 10 نقاط إضافية.":S.language==="Français"?"🎉 Félicitations ! Vous avez gagné 10 points bonus.":"🎉 Congrats! Earned 10 bonus points."))},1e3)},cc=async R=>{O(z=>({...z,avatar:R})),fe(!1),t&&await Nt(gt(qe,"users",t.uid),{avatar:R})},tr=async()=>{if(!S.walletConnected){alert(S.language==="العربية"?"يرجى ربط محفظتك أولاً من صفحة الملف الشخصي!":S.language==="Français"?"Veuillez d'abord connecter votre portefeuille dans le profil !":"Please connect your wallet first from the profile page!"),x("profile");return}if(S.points<1e3){alert(S.language==="العربية"?"رصيدك غير كافٍ. الحد الأدنى للتحويل هو 1,000 نقطة.":S.language==="Français"?"Solde insuffisant. Le transfert minimum est de 1 000 points.":"Insufficient balance. Minimum transfer is 1,000 points.");return}const R=S.points-1e3,z=S.dncBalance+1;O(ie=>({...ie,points:R,dncBalance:z})),t&&await Nt(gt(qe,"users",t.uid),{points:Ne(-1e3),dncBalance:Ne(1)});const re={id:Date.now().toString(),user:S.name,points:1e3,dnc:1,wallet:S.walletAddress,status:"PENDING",date:new Date().toISOString().split("T")[0]};js([re,...Rn]),alert(S.language==="العربية"?"تم تقديم طلب الاستبدال بنجاح! بانتظار موافقة المسؤول.":S.language==="Français"?"Demande d'échange soumise avec succès ! En attente d'approbation.":"Redemption request submitted successfully! Awaiting admin approval.")},dc=R=>{js(Rn.map(z=>z.id===R?{...z,status:"APPROVED"}:z))};return N?m.jsx("div",{className:"min-h-screen bg-[#1a0833] text-white flex items-center justify-center p-4",dir:S.language==="العربية"?"rtl":"ltr",children:m.jsxs("div",{className:"w-full max-w-sm bg-[#240a47]/90 border border-purple-500/40 rounded-3xl p-6 shadow-2xl space-y-4",children:[m.jsxs("div",{className:"text-center space-y-1",children:[m.jsx("h1",{className:"text-xl font-black text-yellow-400",children:p.loginTitle}),m.jsx("p",{className:"text-xs text-slate-300",children:p.loginSubtitle})]}),f&&m.jsx("div",{className:"bg-red-500/20 border border-red-500/50 text-red-300 p-3 rounded-xl text-xs text-center font-bold",children:f}),_&&m.jsx("div",{className:"bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 p-3 rounded-xl text-xs text-center font-bold",children:_}),n==="forgot"?m.jsxs("form",{onSubmit:Fs,className:"space-y-4",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:p.forgotPasswordLabel}),m.jsx("input",{type:"email",value:i,onChange:R=>s(R.target.value),placeholder:"name@example.com",required:!0,className:"w-full bg-[#0d031f] border border-purple-400/40 rounded-xl px-4 py-3 text-xs text-white focus:border-yellow-400 outline-none"})]}),m.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black py-3.5 rounded-xl shadow-lg transition text-sm",children:p.sendResetLink}),m.jsx("div",{className:"text-center pt-2",children:m.jsx("button",{type:"button",onClick:()=>{r("login"),y(""),A("")},className:"text-xs text-yellow-400 font-bold hover:underline",children:p.backToLogin})})]}):m.jsxs("form",{onSubmit:n==="login"?uc:lc,className:"space-y-4",children:[n==="signup"&&m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:p.fullName}),m.jsx("input",{type:"text",value:u,onChange:R=>d(R.target.value),placeholder:p.enterName,required:!0,className:"w-full bg-[#0d031f] border border-purple-400/40 rounded-xl px-4 py-3 text-xs text-white focus:border-yellow-400 outline-none"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:p.email}),m.jsx("input",{type:"email",value:i,onChange:R=>s(R.target.value),placeholder:"name@example.com",required:!0,className:"w-full bg-[#0d031f] border border-purple-400/40 rounded-xl px-4 py-3 text-xs text-white focus:border-yellow-400 outline-none"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:p.password}),m.jsx("input",{type:M?"text":"password",value:o,onChange:R=>l(R.target.value),placeholder:"••••••••",required:!0,className:"w-full bg-[#0d031f] border border-purple-400/40 rounded-xl px-4 py-3 pr-12 text-xs text-white focus:border-yellow-400 outline-none"}),m.jsx("button",{type:"button",onClick:()=>C(R=>!R),className:"mt-[-38px] mr-3 relative float-right text-slate-300 hover:text-yellow-300","aria-label":M?"Hide password":"Show password",children:M?m.jsx(Yx,{className:"w-4 h-4"}):m.jsx(Xx,{className:"w-4 h-4"})})]}),n==="login"&&m.jsx("div",{className:"text-left",children:m.jsx("button",{type:"button",onClick:()=>{r("forgot"),y(""),A("")},className:"text-[11px] text-purple-300 hover:text-yellow-400 underline",children:p.forgotPasswordQuestion})}),m.jsxs("button",{type:"submit",className:"w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm",children:[n==="login"?m.jsx(_g,{className:"w-4 h-4"}):m.jsx(n1,{className:"w-4 h-4"}),n==="login"?p.loginBtn:p.signupBtn]})]}),m.jsx("button",{type:"button",onClick:()=>{V(!1),y(""),A("")},className:"w-full mt-3 py-2.5 rounded-xl border border-purple-300/40 text-slate-200 text-xs font-bold hover:bg-purple-500/10",children:"Continue as Guest"}),n!=="forgot"&&m.jsx("div",{className:"text-center pt-2",children:m.jsx("button",{onClick:()=>{r(n==="login"?"signup":"login"),y(""),A("")},className:"text-xs text-yellow-400 font-bold hover:underline",children:n==="login"?p.noAccountPrompt:p.hasAccountPrompt})})]})}):m.jsx("div",{className:"min-h-screen bg-[#071329] text-white font-sans flex justify-center items-center p-0 md:p-4",dir:S.language==="العربية"?"rtl":"ltr",children:m.jsxs("div",{style:{backgroundImage:`linear-gradient(rgba(3, 10, 27, 0.28), rgba(3, 10, 27, 0.52)), url(${mt("main_background.jpg")})`,backgroundSize:"cover",backgroundPosition:"center"},className:"w-full max-w-md bg-[#08142d] border-0 md:border-4 md:border-amber-400/50 rounded-none md:rounded-[40px] shadow-[0_0_50px_rgba(147,51,234,0.3)] overflow-hidden min-h-screen md:min-h-[844px] flex flex-col justify-between relative",children:[m.jsxs("div",{className:"bg-[#120524]/90 px-6 py-2.5 flex justify-between items-center text-xs text-slate-200 border-b border-purple-500/30 z-10",children:[m.jsx("span",{className:"font-bold text-white",children:"9:41"}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsxs("button",{onClick:()=>x("admin"),className:"text-[10px] bg-yellow-500/20 text-yellow-400 px-2.5 py-1 rounded-lg border border-yellow-500/40 font-bold flex items-center gap-1 shadow",children:[m.jsx(Eg,{className:"w-3.5 h-3.5"})," ",p.adminPanel]}),m.jsx("span",{className:"text-purple-400/50",children:"|"}),t&&m.jsxs("button",{onClick:Us,className:"text-[10px] bg-red-500/20 text-red-300 px-2 py-1 rounded-lg border border-red-500/40 font-bold flex items-center gap-1 shadow",title:p.logout,children:[m.jsx(wg,{className:"w-3 h-3"})," ",p.logout]}),m.jsx("span",{children:"📶 🔋"})]})]}),m.jsxs("div",{className:"flex-1 overflow-y-auto pb-36 px-4 pt-4 relative z-10",children:[E!=="home"&&m.jsxs("div",{className:"w-full bg-[#101a36]/95 rounded-2xl p-3 border border-amber-400/40 flex justify-between items-center shadow-lg mb-4",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsxs("div",{className:"bg-rose-950/80 border border-rose-500/50 px-2.5 py-1 rounded-xl flex items-center gap-1 text-xs font-bold text-rose-300",children:["❤️ ",m.jsx("span",{children:v})]}),m.jsxs("div",{className:"bg-slate-950/80 border border-amber-400/40 px-2.5 py-1 rounded-xl flex items-center gap-1 text-xs font-bold text-amber-200",children:["🪙 ",m.jsx("span",{children:S.points.toLocaleString()})]})]}),m.jsxs("div",{className:"bg-slate-950/90 px-3 py-1 rounded-xl border border-amber-500/40 text-xs font-black text-yellow-400 flex items-center gap-1",children:[m.jsx("span",{children:S.dncBalance})," ",m.jsx("span",{className:"text-[10px] text-slate-300",children:"DNC"})]})]}),E==="home"&&m.jsxs("div",{className:"flex flex-col gap-4 pb-2",children:[m.jsxs("div",{className:"w-full flex items-center justify-between gap-2 rounded-2xl border border-amber-300/35 bg-transparent px-2 py-2 shadow-[0_4px_18px_rgba(0,0,0,0.12)]",children:[m.jsxs("button",{onClick:()=>fe(!0),className:"flex min-w-0 items-center gap-2 text-left",children:[m.jsx("img",{src:mt(S.avatar),alt:"Player portrait",className:"h-11 w-11 shrink-0 rounded-full border-2 border-amber-300 object-cover shadow-[0_0_14px_rgba(251,191,36,0.4)]"}),m.jsxs("span",{className:"min-w-0",children:[m.jsx("span",{className:"block truncate text-sm font-extrabold text-white drop-shadow",children:S.name}),m.jsxs("span",{className:"block text-[10px] font-bold text-amber-200 drop-shadow",children:["★ ",p.levelLabel," ",S.level]})]})]}),m.jsxs("button",{onClick:()=>x("rewards"),className:"flex shrink-0 flex-col items-end rounded-xl border border-amber-300/35 bg-transparent px-3 py-1.5 text-right shadow-sm",children:[m.jsxs("span",{className:"text-xs font-black text-yellow-200",children:["🏆 ",S.points.toLocaleString()," ",p.pts]}),m.jsxs("span",{className:"text-xs font-black text-amber-300",children:["🪙 ",S.dncBalance.toLocaleString()," DNC"]})]})]}),m.jsx("section",{"aria-label":"Danat Coin and Danat Quiz artwork",className:"w-full h-[390px] sm:h-[460px] rounded-2xl overflow-hidden border border-amber-400/40 shadow-[0_12px_34px_rgba(0,0,0,0.45)]",style:{backgroundImage:`url(${mt("main_background.jpg")})`,backgroundSize:"cover",backgroundPosition:"center"}}),m.jsxs("button",{onClick:()=>x("quiz"),className:"w-full rounded-full border-b-[5px] border-amber-700 bg-gradient-to-b from-yellow-200 via-amber-400 to-yellow-500 py-4 text-xl font-black text-[#171326] shadow-[0_8px_25px_rgba(245,158,11,0.32)] transition active:translate-y-1 flex items-center justify-center gap-3",children:[m.jsx(e1,{className:"h-7 w-7 fill-current"})," ",p.startPlay]}),m.jsx("div",{className:"grid grid-cols-2 gap-3",children:m.jsx("button",{type:"button",onClick:()=>x("game2048"),"aria-label":"Play 2048",className:"relative aspect-square w-full overflow-hidden rounded-2xl border-2 border-amber-300/70 bg-[#211a38] shadow-[0_8px_24px_rgba(0,0,0,0.38)] transition active:scale-[0.97] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300/60",children:m.jsx("img",{src:mt("2048.jpg"),alt:"2048",className:"absolute inset-0 h-full w-full object-cover"})})}),m.jsxs("div",{className:"rounded-2xl border border-amber-400/30 bg-[#111a33]/85 p-3 text-center",children:[m.jsxs("div",{className:"mb-2 text-xs font-bold text-amber-200",children:["📺 ",p.watchForLife.split("(")[0]]}),m.jsxs("div",{className:"flex gap-2",children:[m.jsx("button",{onClick:$e,className:"flex-1 rounded-xl border border-rose-400/40 bg-rose-700/80 py-2 text-xs font-bold text-white",children:"+1 ❤️"}),m.jsx("button",{onClick:ba,className:"flex-1 rounded-xl border border-sky-400/40 bg-sky-700/80 py-2 text-xs font-bold text-white",children:"+10 🪙"})]})]})]}),E==="game2048"&&m.jsx(N2,{onBack:()=>x("home")}),E==="statistics"&&m.jsxs("div",{className:"flex flex-col gap-4",children:[m.jsxs("div",{className:"text-center my-2",children:[m.jsx("span",{className:"text-4xl",children:"📊"}),m.jsx("h2",{className:"text-2xl font-black text-yellow-400 mt-2",children:p.statistics})]}),m.jsxs("div",{className:"w-full grid grid-cols-2 gap-3",children:[m.jsxs("div",{className:"bg-[#240a47] p-4 rounded-2xl border border-purple-400/40 text-center shadow",children:[m.jsx("div",{className:"text-xs text-slate-300 mb-1",children:p.gamesPlayed}),m.jsx("div",{className:"text-2xl font-black text-white",children:S.totalGames})]}),m.jsxs("div",{className:"bg-[#240a47] p-4 rounded-2xl border border-purple-400/40 text-center shadow",children:[m.jsx("div",{className:"text-xs text-slate-300 mb-1",children:p.levelLabel}),m.jsxs("div",{className:"text-2xl font-black text-yellow-400",children:["★ ",S.level]})]}),m.jsxs("div",{className:"bg-[#240a47] p-4 rounded-2xl border border-purple-400/40 text-center shadow",children:[m.jsx("div",{className:"text-xs text-slate-300 mb-1",children:p.pointsEarned}),m.jsx("div",{className:"text-xl font-black text-purple-300",children:S.totalEarnedPoints.toLocaleString()})]}),m.jsxs("div",{className:"bg-[#240a47] p-4 rounded-2xl border border-purple-400/40 text-center shadow",children:[m.jsx("div",{className:"text-xs text-slate-300 mb-1",children:p.adsWatched}),m.jsx("div",{className:"text-xl font-black text-yellow-400",children:T})]})]}),m.jsx("button",{onClick:()=>x("home"),className:"w-full mt-4 py-3 bg-[#240a47] hover:bg-[#320d63] border border-purple-400/40 text-white font-bold rounded-xl transition text-xs",children:p.backToHome})]}),E==="quiz"&&m.jsxs("div",{className:"flex flex-col gap-4",children:[m.jsxs("div",{className:"w-full flex items-center justify-between gap-3",children:[m.jsx("button",{onClick:()=>x("home"),className:"p-2.5 bg-[#240a47] rounded-xl text-slate-200 font-bold text-xs border border-purple-400/40",children:"⏸"}),m.jsx("div",{className:"flex-1 bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-purple-400/40",children:m.jsx("div",{className:"bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-300",style:{width:`${(It+1)/pn.length*100}%`}})}),m.jsxs("div",{className:"flex items-center gap-1 bg-[#240a47] px-3 py-1.5 rounded-xl text-yellow-400 text-xs font-bold border border-purple-400/40",children:["❤️ ",v]})]}),v===0?m.jsxs("div",{className:"w-full bg-rose-950/80 border-2 border-rose-500 rounded-2xl p-6 text-center space-y-4 shadow-xl my-4",children:[m.jsx("h3",{className:"text-xl font-black text-rose-300",children:p.outOfLivesTitle}),m.jsx("p",{className:"text-xs text-slate-200 leading-relaxed",children:p.outOfLivesDesc}),m.jsx("button",{onClick:$e,className:"w-full py-3.5 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white font-black text-sm rounded-xl shadow-lg transition",children:p.watchForLife})]}):m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"flex justify-center",children:m.jsxs("div",{className:"bg-purple-600/40 border border-purple-400 text-purple-200 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow",children:[Pn(pn[It])," (",p.questionNav," ",It+1," ",p.ofNav," ",pn.length,")"]})}),m.jsx("div",{className:"w-full bg-[#17152f]/95 border-2 border-amber-400/70 rounded-2xl px-5 py-5 text-center shadow-[0_8px_28px_rgba(0,0,0,0.55)] my-2",children:m.jsx("h3",{className:"text-lg sm:text-xl font-extrabold text-white leading-relaxed drop-shadow-md",children:zs(pn[It])})}),m.jsx("div",{className:"w-full space-y-3",children:Pi(pn[It]).map((R,z)=>{const re=mn===z,ie=pn[It];let Q=z===ie.correctAnswer;if(typeof ie.correctAnswer=="object"&&ie.correctAnswer!==null){const We=ie.correctAnswer[F]||ie.correctAnswer.en;Q=R===We}else typeof ie.correctAnswer=="string"&&(Q=R===ie.correctAnswer);let Z="bg-[#240a47]/80 border-purple-400/30 text-slate-100 hover:bg-[#320d63]";return be?Q?Z="bg-emerald-600/40 border-emerald-400 text-emerald-200":re&&(Z="bg-red-600/40 border-red-400 text-red-200"):re&&(Z="bg-yellow-600/40 border-yellow-400 text-yellow-200"),m.jsxs("button",{disabled:be,onClick:()=>Ls(z),className:`w-full py-3.5 px-5 rounded-2xl font-bold text-sm flex items-center justify-between transition border shadow ${Z}`,children:[m.jsx("span",{children:R}),be&&Q&&m.jsx(yg,{className:"w-5 h-5 text-emerald-400"})]},z)})}),be?m.jsx("button",{onClick:Pa,className:"w-full mt-4 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-sm rounded-2xl shadow-xl transition",children:p.nextQuestion}):m.jsx("button",{onClick:bi,disabled:mn===null,className:"w-full mt-4 py-3.5 bg-gradient-to-r from-yellow-400 to-amber-500 disabled:opacity-50 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black text-sm rounded-2xl shadow-xl transition",children:p.confirmAnswer})]})]}),E==="rewards"&&m.jsxs("div",{className:"flex flex-col gap-5",children:[m.jsx("div",{className:"text-center my-2 flex flex-col items-center",children:m.jsx("h2",{className:"text-2xl font-black text-yellow-400 bg-amber-500/20 px-6 py-1.5 rounded-full border border-amber-400/40 shadow",children:p.rewards})}),m.jsxs("div",{className:"w-full bg-gradient-to-br from-amber-900/40 to-[#240a47] rounded-2xl p-4 border border-amber-500/40 flex items-center justify-between gap-3 shadow-lg",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:"w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 text-lg font-bold",children:"⏳"}),m.jsxs("div",{children:[m.jsx("div",{className:"text-xs font-bold text-white",children:p.timedBonusTitle}),m.jsx("div",{className:"text-[10px] text-amber-300",children:p.timedBonusDesc})]})]}),m.jsx("button",{onClick:qr,className:"bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs transition shadow",children:p.claimBonus})]}),m.jsxs("div",{className:"w-full bg-[#240a47]/90 rounded-2xl p-5 border border-purple-400/40 flex justify-between items-center shadow-lg",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:"w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center",children:m.jsx("img",{src:mt("dnc_coin.png"),alt:"Coin",className:"w-8 h-8 object-contain"})}),m.jsxs("div",{children:[m.jsx("div",{className:"text-xs text-slate-300",children:p.points}),m.jsx("div",{className:"text-2xl font-black text-purple-300",children:S.points.toLocaleString()})]})]}),m.jsx("button",{onClick:Na,className:"bg-purple-600 hover:bg-purple-500 text-white w-9 h-9 rounded-full font-bold text-xl flex items-center justify-center shadow",children:"+"})]}),m.jsxs("div",{className:"w-full bg-[#240a47]/90 rounded-2xl p-5 border border-yellow-500/40 flex justify-between items-center shadow-lg",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("img",{src:mt("dnc_coin.png"),alt:"Logo",className:"w-10 h-10 object-contain"}),m.jsxs("div",{children:[m.jsx("div",{className:"text-xs text-slate-300",children:p.dncBalance}),m.jsx("div",{className:"text-2xl font-black text-yellow-400",children:S.dncBalance.toLocaleString()})]})]}),m.jsx("button",{onClick:tr,className:"bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition shadow",children:p.redeemReq})]}),m.jsxs("div",{className:"w-full bg-[#0d031f]/80 rounded-xl p-3.5 border border-purple-400/30 text-center text-xs text-slate-200 shadow",children:[m.jsx("span",{className:"font-bold text-yellow-400",children:p.conversionRate})," 1,000 ",p.points," = 1 DNC"]}),m.jsxs("div",{className:"w-full bg-gradient-to-br from-purple-900/50 to-[#240a47] rounded-2xl p-4 border border-purple-500/40 flex items-center justify-between gap-3 shadow-lg",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:"w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300",children:m.jsx(Gc,{className:"w-5 h-5"})}),m.jsxs("div",{children:[m.jsx("div",{className:"text-xs font-bold text-white",children:p.watchAdVideoTitle}),m.jsx("div",{className:"text-[10px] text-purple-300",children:p.watchAdVideoDesc})]})]}),m.jsx("button",{onClick:Na,disabled:$t,className:"bg-purple-600 hover:bg-purple-500 disabled:bg-purple-950 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition flex items-center gap-1.5 shadow",children:$t?`${sc}s...`:p.watchBtn})]})]}),E==="leaderboard"&&m.jsxs("div",{className:"flex flex-col gap-4",children:[m.jsxs("div",{className:"text-center my-2",children:[m.jsx("img",{src:mt("trophy_large.png"),alt:"Trophy",className:"w-14 h-14 mx-auto mb-1 object-contain"}),m.jsx("h2",{className:"text-2xl font-black text-yellow-400",children:p.leaderboard})]}),m.jsx("div",{className:"w-full bg-[#240a47] p-1 rounded-xl flex gap-1 border border-purple-400/40 text-xs font-bold shadow",children:m.jsx("button",{className:"flex-1 py-2.5 bg-yellow-500 text-slate-950 rounded-lg shadow",children:p.topPlayers})}),m.jsxs("div",{className:"w-full bg-[#0d031f] px-4 py-2.5 rounded-lg flex text-[11px] text-slate-300 font-bold border border-purple-400/30 shadow",children:[m.jsx("span",{className:"w-12",children:p.rank}),m.jsx("span",{className:"flex-1 text-right",children:p.player}),m.jsx("span",{className:"w-20 text-left",children:p.pts})]}),m.jsx("div",{className:"w-full space-y-2.5",children:Sa?m.jsx("div",{className:"w-full bg-[#240a47]/80 p-6 rounded-xl border border-purple-400/30 text-center text-xs text-slate-300 shadow",children:p.loading}):ki.length===0?m.jsx("div",{className:"w-full bg-[#240a47]/80 p-6 rounded-xl border border-purple-400/30 text-center text-xs text-slate-300 shadow",children:p.emptyLeaderboard}):ki.map((R,z)=>m.jsxs("div",{className:"w-full bg-[#240a47]/90 px-4 py-3 rounded-xl border border-purple-400/40 flex items-center justify-between text-xs shadow",children:[m.jsx("div",{className:"w-12 font-black text-yellow-400 flex items-center gap-1",children:z===0?"👑 1":z===1?"🥈 2":z===2?"🥉 3":`#${z+1}`}),m.jsxs("div",{className:"flex-1 flex items-center gap-2.5 text-right",children:[m.jsx("img",{src:mt(R.avatar||"avatar-man-ghutra.png"),alt:"Avatar",className:"w-8 h-8 rounded-full border border-yellow-400 object-cover"}),m.jsx("span",{className:"font-bold text-white truncate max-w-[120px]",children:R.name||"لاعب"})]}),m.jsxs("div",{className:"w-20 text-left font-black text-purple-300",children:[(R.points||R.spirits||0).toLocaleString()," 🪙"]})]},R.id))})]}),E==="profile"&&m.jsxs("div",{className:"flex flex-col gap-5",children:[m.jsx("div",{className:"text-center my-2",children:m.jsx("h2",{className:"text-2xl font-black text-white",children:p.profile})}),m.jsxs("div",{className:"flex flex-col items-center gap-3",children:[m.jsx("div",{className:"relative cursor-pointer group",onClick:()=>fe(!0),children:m.jsx("img",{src:mt(S.avatar),alt:"Current Portrait",className:"w-24 h-24 rounded-full border-4 border-yellow-400 object-cover shadow-2xl group-hover:scale-105 transition"})}),m.jsxs("button",{onClick:()=>fe(!0),className:"text-xs text-yellow-400 font-bold bg-yellow-500/10 px-3 py-1.5 rounded-lg border border-yellow-500/40 shadow hover:bg-yellow-500/20",children:["✏️ ",p.changeProfilePic]}),m.jsxs("div",{className:"flex items-center gap-2 mt-1 bg-[#240a47] px-4 py-2 rounded-xl border border-purple-400/30",children:[m.jsx("h3",{className:"text-base font-bold text-white",children:S.name}),m.jsx(vg,{className:"w-3.5 h-3.5 text-slate-400"})]}),m.jsxs("span",{className:"text-xs text-yellow-400 font-bold",children:[p.levelLabel," ",S.level]})]}),m.jsxs("div",{className:"w-full bg-[#240a47]/90 rounded-2xl p-4 border border-purple-400/40 space-y-3 text-xs shadow",children:[m.jsxs("div",{className:"flex justify-between items-center border-b border-purple-500/30 pb-2.5",children:[m.jsx("span",{className:"text-slate-300",children:p.emailLabel}),m.jsxs("span",{className:"font-mono text-yellow-400 flex items-center gap-1",children:[(t==null?void 0:t.email)||"Guest"," ",t&&m.jsx(vg,{className:"w-3 h-3 text-slate-400"})]})]}),m.jsxs("div",{className:"flex justify-between items-center",children:[m.jsx("span",{className:"text-slate-300",children:p.appLanguageLabel}),m.jsxs("select",{value:S.language,onChange:R=>Bs(R.target.value),className:"bg-[#0d031f] text-yellow-400 font-bold px-3 py-1.5 rounded-lg border border-purple-400/40 outline-none text-xs cursor-pointer",children:[m.jsx("option",{value:"العربية",children:"العربية"}),m.jsx("option",{value:"English",children:"English"}),m.jsx("option",{value:"Français",children:"Français"})]})]})]}),m.jsx("div",{className:"w-full space-y-2",children:t?m.jsxs("button",{onClick:Us,className:"w-full py-3 rounded-xl border border-red-400/50 bg-red-500/15 text-red-200 font-bold text-sm flex items-center justify-center gap-2",children:[m.jsx(wg,{className:"w-4 h-4"})," ",p.logout]}):m.jsxs("button",{onClick:()=>{r("login"),V(!0),y(""),A("")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg",children:[m.jsx(_g,{className:"w-4 h-4"})," Login"]})}),m.jsxs("div",{className:"w-full grid grid-cols-3 gap-2",children:[m.jsxs("div",{className:"bg-[#240a47] p-3 rounded-2xl border border-purple-400/40 text-center shadow",children:[m.jsx("div",{className:"text-[10px] text-slate-300 mb-1",children:p.gamesPlayed}),m.jsx("div",{className:"text-base font-black text-white",children:S.totalGames})]}),m.jsxs("div",{className:"bg-[#240a47] p-3 rounded-2xl border border-purple-400/40 text-center shadow",children:[m.jsx("div",{className:"text-[10px] text-slate-300 mb-1",children:p.pointsEarned}),m.jsx("div",{className:"text-base font-black text-purple-300",children:S.totalEarnedPoints.toLocaleString()})]}),m.jsxs("div",{className:"bg-[#240a47] p-3 rounded-2xl border border-purple-400/40 text-center shadow",children:[m.jsx("div",{className:"text-[10px] text-slate-300 mb-1",children:"DNC"}),m.jsx("div",{className:"text-base font-black text-yellow-400",children:S.dncBalance})]})]}),m.jsx("div",{className:"w-full space-y-3 mt-1",children:m.jsxs("button",{onClick:()=>Y(!0),className:`w-full py-4 px-4 rounded-2xl border font-bold text-sm flex items-center justify-between transition shadow ${S.walletConnected?"bg-emerald-950/50 border-emerald-500/60 text-emerald-300":"bg-[#240a47] border-purple-400/40 text-purple-200 hover:bg-[#320d63]"}`,children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("img",{src:mt("dnc_coin.png"),alt:"Wallet",className:"w-6 h-6 object-contain"}),m.jsx("span",{children:S.walletConnected?p.walletConnected:p.connectWallet})]}),m.jsx("span",{className:"text-xs bg-purple-500/20 px-3 py-1 rounded-lg",children:S.walletConnected?`${S.walletAddress.substring(0,6)}...`:p.connectBtn})]})})]}),E==="admin"&&m.jsxs("div",{className:"flex flex-col gap-4",children:[m.jsxs("div",{className:"flex justify-between items-center border-b border-purple-400/40 pb-3",children:[m.jsxs("h2",{className:"text-base font-bold text-yellow-400 flex items-center gap-2",children:[m.jsx(Eg,{className:"w-5 h-5"})," ",p.adminPanel]}),m.jsx("button",{onClick:()=>x("home"),className:"text-xs bg-[#240a47] px-3 py-1 rounded-lg text-slate-200 border border-purple-400/40",children:p.close})]}),m.jsxs("button",{onClick:zr,className:"w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg transition text-xs",children:[m.jsx(Qx,{className:"w-4 h-4"})," ",p.downloadCsvReport]}),m.jsx("p",{className:"text-xs text-slate-300 mt-2",children:p.adminRedeemNotice}),m.jsx("div",{className:"space-y-3",children:Rn.map(R=>m.jsxs("div",{className:"bg-[#240a47]/90 p-4 rounded-xl border border-purple-400/40 text-xs space-y-2.5 shadow",children:[m.jsxs("div",{className:"flex justify-between font-bold",children:[m.jsx("span",{className:"text-white",children:R.user}),m.jsx("span",{className:R.status==="APPROVED"?"text-emerald-400":"text-amber-400",children:R.status==="APPROVED"?p.approved:p.pending})]}),m.jsxs("div",{className:"text-slate-300 flex justify-between",children:[m.jsxs("span",{children:[p.pts,": ",R.points]}),m.jsxs("span",{className:"text-yellow-400 font-bold",children:[R.dnc," DNC"]})]}),m.jsxs("div",{className:"text-[10px] text-slate-300 font-mono break-all bg-[#0d031f] p-2 rounded border border-purple-400/30",children:[p.walletLabel," ",R.wallet]}),R.status==="PENDING"&&m.jsx("button",{onClick:()=>dc(R.id),className:"w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold mt-1 transition shadow",children:p.approveAndSend})]},R.id))})]})]}),Si&&m.jsx("div",{className:"absolute inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-6",children:m.jsxs("div",{className:"w-full bg-[#240a47] border-2 border-yellow-500 rounded-3xl p-6 text-center space-y-4 shadow-[0_0_50px_rgba(234,179,8,0.5)]",children:[m.jsx("div",{className:"w-14 h-14 bg-yellow-500/20 border border-yellow-400 rounded-full flex items-center justify-center mx-auto text-yellow-400",children:m.jsx(Gc,{className:"w-7 h-7 animate-pulse"})}),m.jsx("h3",{className:"text-lg font-black text-yellow-400",children:p.milestoneAdTitle}),m.jsx("p",{className:"text-xs text-slate-200 leading-relaxed",children:p.milestoneAdDesc}),m.jsxs("div",{className:"bg-[#0d031f] py-4 rounded-2xl border border-purple-400/40 text-sm font-black text-yellow-300",children:["⏳ ",p.pleaseWait," ",bs," ",p.seconds]}),m.jsx("div",{className:"text-[10px] text-purple-300",children:p.autoRewardNotice})]})}),Tt&&m.jsx("div",{className:"absolute inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-6",children:m.jsxs("div",{className:"w-full bg-[#240a47] border-2 border-yellow-500 rounded-3xl p-6 text-center space-y-4 shadow-[0_0_50px_rgba(234,179,8,0.5)]",children:[m.jsx("div",{className:"w-14 h-14 bg-yellow-500/20 border border-yellow-400 rounded-full flex items-center justify-center mx-auto text-yellow-400",children:m.jsx(Gc,{className:"w-7 h-7 animate-pulse"})}),m.jsx("h3",{className:"text-lg font-black text-yellow-400",children:p.forcedAdTitle}),m.jsx("p",{className:"text-xs text-slate-200 leading-relaxed",children:p.forcedAdDesc}),m.jsxs("div",{className:"bg-[#0d031f] py-4 rounded-2xl border border-purple-400/40 text-sm font-black text-yellow-300",children:["⏳ ",p.pleaseWait," ",Fr," ",p.seconds]}),m.jsx("div",{className:"text-[10px] text-purple-300",children:p.forcedAdRewardNotice})]})}),ce&&m.jsx("div",{className:"absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:m.jsxs("div",{className:"w-full bg-[#240a47] border border-yellow-500/50 rounded-3xl p-5 text-right space-y-4 shadow-2xl",dir:S.language==="العربية"?"rtl":"ltr",children:[m.jsxs("div",{className:"flex justify-between items-center",children:[m.jsx("h3",{className:"font-bold text-white text-base",children:p.settings}),m.jsx("button",{onClick:()=>ve(!1),className:"text-slate-300 p-1",children:m.jsx(Kc,{className:"w-5 h-5"})})]}),m.jsx("div",{className:"space-y-3 text-xs",children:m.jsxs("div",{className:"flex justify-between items-center bg-[#0d031f] p-3 rounded-xl border border-purple-400/30",children:[m.jsxs("span",{className:"text-slate-300",children:[p.appLanguage," (Language)"]}),m.jsxs("select",{value:S.language,onChange:R=>Bs(R.target.value),className:"bg-[#240a47] text-yellow-400 font-bold px-3 py-1.5 rounded-lg border border-purple-400/40 outline-none text-xs cursor-pointer",children:[m.jsx("option",{value:"العربية",children:"العربية"}),m.jsx("option",{value:"English",children:"English"}),m.jsx("option",{value:"Français",children:"Français"})]})]})}),m.jsx("button",{onClick:()=>ve(!1),className:"w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black text-xs rounded-xl shadow-lg",children:p.close})]})}),m.jsx("div",{className:"absolute bottom-0 left-0 right-0 w-full bg-gradient-to-r from-[#101a36]/[0.99] via-[#0b142c]/[0.99] to-[#101a36]/[0.99] border-t-2 border-amber-400 px-1.5 sm:px-3 py-2.5 flex justify-around items-center backdrop-blur-xl z-30 shadow-2xl",children:[{id:"home",label:S.language==="العربية"?"الرئيسية":S.language==="Français"?"Accueil":"Home",icon:Zx},{id:"statistics",label:p.statistics,icon:Kx},{id:"rewards",label:p.rewards,icon:Jx},{id:"profile",label:p.profile,icon:r1},{id:"settings",label:p.settings,icon:t1}].map(R=>{const z=E===R.id,re=R.icon;return m.jsxs("button",{onClick:()=>R.id==="settings"?ve(!0):x(R.id),className:`flex flex-1 min-w-0 max-w-[110px] flex-col items-center justify-center gap-1 rounded-xl px-1 py-1.5 transition ${z||R.id==="settings"&&ce?"opacity-100":"opacity-75 hover:opacity-100"}`,children:[m.jsx(re,{className:`h-6 w-6 shrink-0 ${z||R.id==="settings"&&ce?"text-amber-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]":"text-slate-300"}`}),m.jsx("span",{className:`text-[9px] sm:text-[10px] font-bold leading-tight text-center whitespace-nowrap ${z||R.id==="settings"&&ce?"text-yellow-300":"text-slate-300"}`,children:R.label})]},R.id)})}),$&&m.jsx("div",{className:"absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:m.jsxs("div",{className:"w-full bg-[#240a47] border border-yellow-500/50 rounded-3xl p-5 text-right space-y-4 shadow-2xl",dir:S.language==="العربية"?"rtl":"ltr",children:[m.jsxs("div",{className:"flex justify-between items-center",children:[m.jsx("h3",{className:"font-bold text-white text-base",children:p.connectWeb3Title}),m.jsx("button",{onClick:()=>Y(!1),className:"text-slate-300 p-1",children:m.jsx(Kc,{className:"w-5 h-5"})})]}),m.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:p.connectWeb3Desc}),m.jsx("input",{type:"text",placeholder:"0x71C7656EC7ab88b098defB751B7401B5f6d8939A",value:zt,onChange:R=>Jt(R.target.value),className:"w-full bg-[#0d031f] border border-purple-400/40 rounded-xl p-3 text-xs text-white font-mono dir-ltr focus:border-yellow-500 outline-none shadow-inner"}),m.jsx("button",{onClick:()=>Hr(zt),className:"w-full py-3.5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black text-xs rounded-xl shadow-lg",children:p.confirmConnectBtn})]})}),ne&&m.jsx("div",{className:"absolute inset-0 bg-slate-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:m.jsxs("div",{className:"w-full bg-[#240a47] border-2 border-yellow-500/50 rounded-3xl p-6 text-right space-y-5 shadow-[0_0_60px_rgba(234,179,8,0.3)]",dir:S.language==="العربية"?"rtl":"ltr",children:[m.jsxs("div",{className:"flex justify-between items-center",children:[m.jsx("h3",{className:"font-bold text-white text-lg",children:p.selectAvatarTitle}),m.jsx("button",{onClick:()=>fe(!1),className:"text-slate-300 p-1 hover:text-white",children:m.jsx(Kc,{className:"w-6 h-6"})})]}),m.jsx("div",{className:"grid grid-cols-2 gap-4 my-2 max-h-80 overflow-y-auto",children:ka.map(R=>{const z=S.avatar===R.id;return m.jsxs("div",{onClick:()=>cc(R.id),className:`relative w-full h-28 rounded-2xl border-2 cursor-pointer overflow-hidden transition duration-200 group ${z?"border-yellow-400 shadow-[0_0_25px_rgba(234,179,8,0.4)] scale-105":"border-purple-400/40 hover:border-purple-300"}`,children:[m.jsx("img",{src:mt(R.id),alt:"Avatar Option",className:"w-full h-full object-cover group-hover:scale-110 transition duration-300"}),z&&m.jsx("div",{className:"absolute top-2 right-2 bg-emerald-500 p-1.5 rounded-full border-2 border-slate-900 shadow z-10",children:m.jsx(yg,{className:"w-3.5 h-3.5 text-white"})})]},R.id)})}),m.jsx("div",{className:"flex gap-3",children:m.jsx("button",{onClick:()=>fe(!1),className:"w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl shadow-lg",children:p.close})})]})})]})})}hd.createRoot(document.getElementById("root")).render(m.jsx(DT.StrictMode,{children:m.jsx(D2,{})}));
