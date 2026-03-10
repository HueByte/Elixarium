(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function Qp(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Yh={exports:{}},rl={};var tv;function xb(){if(tv)return rl;tv=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,u){var c=null;if(u!==void 0&&(c=""+u),o.key!==void 0&&(c=""+o.key),"key"in o){u={};for(var h in o)h!=="key"&&(u[h]=o[h])}else u=o;return o=u.ref,{$$typeof:i,type:r,key:c,ref:o!==void 0?o:null,props:u}}return rl.Fragment=e,rl.jsx=n,rl.jsxs=n,rl}var nv;function yb(){return nv||(nv=1,Yh.exports=xb()),Yh.exports}var re=yb(),Zh={exports:{}},ct={};var iv;function Sb(){if(iv)return ct;iv=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function x(B){return B===null||typeof B!="object"?null:(B=_&&B[_]||B["@@iterator"],typeof B=="function"?B:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function y(B,Q,L){this.props=B,this.context=Q,this.refs=M,this.updater=L||b}y.prototype.isReactComponent={},y.prototype.setState=function(B,Q){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,Q,"setState")},y.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function D(){}D.prototype=y.prototype;function U(B,Q,L){this.props=B,this.context=Q,this.refs=M,this.updater=L||b}var P=U.prototype=new D;P.constructor=U,C(P,y.prototype),P.isPureReactComponent=!0;var G=Array.isArray;function A(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(B,Q,L){var Ae=L.ref;return{$$typeof:i,type:B,key:Q,ref:Ae!==void 0?Ae:null,props:L}}function ce(B,Q){return N(B.type,Q,B.props)}function k(B){return typeof B=="object"&&B!==null&&B.$$typeof===i}function q(B){var Q={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(L){return Q[L]})}var te=/\/+/g;function ee(B,Q){return typeof B=="object"&&B!==null&&B.key!=null?q(""+B.key):Q.toString(36)}function X(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(A,A):(B.status="pending",B.then(function(Q){B.status==="pending"&&(B.status="fulfilled",B.value=Q)},function(Q){B.status==="pending"&&(B.status="rejected",B.reason=Q)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function I(B,Q,L,Ae,Pe){var ae=typeof B;(ae==="undefined"||ae==="boolean")&&(B=null);var xe=!1;if(B===null)xe=!0;else switch(ae){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(B.$$typeof){case i:case e:xe=!0;break;case g:return xe=B._init,I(xe(B._payload),Q,L,Ae,Pe)}}if(xe)return Pe=Pe(B),xe=Ae===""?"."+ee(B,0):Ae,G(Pe)?(L="",xe!=null&&(L=xe.replace(te,"$&/")+"/"),I(Pe,Q,L,"",function(Ze){return Ze})):Pe!=null&&(k(Pe)&&(Pe=ce(Pe,L+(Pe.key==null||B&&B.key===Pe.key?"":(""+Pe.key).replace(te,"$&/")+"/")+xe)),Q.push(Pe)),1;xe=0;var Ee=Ae===""?".":Ae+":";if(G(B))for(var Be=0;Be<B.length;Be++)Ae=B[Be],ae=Ee+ee(Ae,Be),xe+=I(Ae,Q,L,ae,Pe);else if(Be=x(B),typeof Be=="function")for(B=Be.call(B),Be=0;!(Ae=B.next()).done;)Ae=Ae.value,ae=Ee+ee(Ae,Be++),xe+=I(Ae,Q,L,ae,Pe);else if(ae==="object"){if(typeof B.then=="function")return I(X(B),Q,L,Ae,Pe);throw Q=String(B),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return xe}function H(B,Q,L){if(B==null)return B;var Ae=[],Pe=0;return I(B,Ae,"","",function(ae){return Q.call(L,ae,Pe++)}),Ae}function le(B){if(B._status===-1){var Q=B._result;Q=Q(),Q.then(function(L){(B._status===0||B._status===-1)&&(B._status=1,B._result=L)},function(L){(B._status===0||B._status===-1)&&(B._status=2,B._result=L)}),B._status===-1&&(B._status=0,B._result=Q)}if(B._status===1)return B._result.default;throw B._result}var ge=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},O={map:H,forEach:function(B,Q,L){H(B,function(){Q.apply(this,arguments)},L)},count:function(B){var Q=0;return H(B,function(){Q++}),Q},toArray:function(B){return H(B,function(Q){return Q})||[]},only:function(B){if(!k(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return ct.Activity=v,ct.Children=O,ct.Component=y,ct.Fragment=n,ct.Profiler=o,ct.PureComponent=U,ct.StrictMode=r,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ct.__COMPILER_RUNTIME={__proto__:null,c:function(B){return z.H.useMemoCache(B)}},ct.cache=function(B){return function(){return B.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(B,Q,L){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Ae=C({},B.props),Pe=B.key;if(Q!=null)for(ae in Q.key!==void 0&&(Pe=""+Q.key),Q)!T.call(Q,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&Q.ref===void 0||(Ae[ae]=Q[ae]);var ae=arguments.length-2;if(ae===1)Ae.children=L;else if(1<ae){for(var xe=Array(ae),Ee=0;Ee<ae;Ee++)xe[Ee]=arguments[Ee+2];Ae.children=xe}return N(B.type,Pe,Ae)},ct.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:u,_context:B},B},ct.createElement=function(B,Q,L){var Ae,Pe={},ae=null;if(Q!=null)for(Ae in Q.key!==void 0&&(ae=""+Q.key),Q)T.call(Q,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Pe[Ae]=Q[Ae]);var xe=arguments.length-2;if(xe===1)Pe.children=L;else if(1<xe){for(var Ee=Array(xe),Be=0;Be<xe;Be++)Ee[Be]=arguments[Be+2];Pe.children=Ee}if(B&&B.defaultProps)for(Ae in xe=B.defaultProps,xe)Pe[Ae]===void 0&&(Pe[Ae]=xe[Ae]);return N(B,ae,Pe)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(B){return{$$typeof:h,render:B}},ct.isValidElement=k,ct.lazy=function(B){return{$$typeof:g,_payload:{_status:-1,_result:B},_init:le}},ct.memo=function(B,Q){return{$$typeof:d,type:B,compare:Q===void 0?null:Q}},ct.startTransition=function(B){var Q=z.T,L={};z.T=L;try{var Ae=B(),Pe=z.S;Pe!==null&&Pe(L,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(A,ge)}catch(ae){ge(ae)}finally{Q!==null&&L.types!==null&&(Q.types=L.types),z.T=Q}},ct.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ct.use=function(B){return z.H.use(B)},ct.useActionState=function(B,Q,L){return z.H.useActionState(B,Q,L)},ct.useCallback=function(B,Q){return z.H.useCallback(B,Q)},ct.useContext=function(B){return z.H.useContext(B)},ct.useDebugValue=function(){},ct.useDeferredValue=function(B,Q){return z.H.useDeferredValue(B,Q)},ct.useEffect=function(B,Q){return z.H.useEffect(B,Q)},ct.useEffectEvent=function(B){return z.H.useEffectEvent(B)},ct.useId=function(){return z.H.useId()},ct.useImperativeHandle=function(B,Q,L){return z.H.useImperativeHandle(B,Q,L)},ct.useInsertionEffect=function(B,Q){return z.H.useInsertionEffect(B,Q)},ct.useLayoutEffect=function(B,Q){return z.H.useLayoutEffect(B,Q)},ct.useMemo=function(B,Q){return z.H.useMemo(B,Q)},ct.useOptimistic=function(B,Q){return z.H.useOptimistic(B,Q)},ct.useReducer=function(B,Q,L){return z.H.useReducer(B,Q,L)},ct.useRef=function(B){return z.H.useRef(B)},ct.useState=function(B){return z.H.useState(B)},ct.useSyncExternalStore=function(B,Q,L){return z.H.useSyncExternalStore(B,Q,L)},ct.useTransition=function(){return z.H.useTransition()},ct.version="19.2.4",ct}var av;function Jp(){return av||(av=1,Zh.exports=Sb()),Zh.exports}var un=Jp();const $r=Qp(un);var Kh={exports:{}},sl={},Qh={exports:{}},Jh={};var rv;function Mb(){return rv||(rv=1,(function(i){function e(I,H){var le=I.length;I.push(H);e:for(;0<le;){var ge=le-1>>>1,O=I[ge];if(0<o(O,H))I[ge]=H,I[le]=O,le=ge;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var H=I[0],le=I.pop();if(le!==H){I[0]=le;e:for(var ge=0,O=I.length,B=O>>>1;ge<B;){var Q=2*(ge+1)-1,L=I[Q],Ae=Q+1,Pe=I[Ae];if(0>o(L,le))Ae<O&&0>o(Pe,L)?(I[ge]=Pe,I[Ae]=le,ge=Ae):(I[ge]=L,I[Q]=le,ge=Q);else if(Ae<O&&0>o(Pe,le))I[ge]=Pe,I[Ae]=le,ge=Ae;else break e}}return H}function o(I,H){var le=I.sortIndex-H.sortIndex;return le!==0?le:I.id-H.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var c=Date,h=c.now();i.unstable_now=function(){return c.now()-h}}var m=[],d=[],g=1,v=null,_=3,x=!1,b=!1,C=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function P(I){for(var H=n(d);H!==null;){if(H.callback===null)r(d);else if(H.startTime<=I)r(d),H.sortIndex=H.expirationTime,e(m,H);else break;H=n(d)}}function G(I){if(C=!1,P(I),!b)if(n(m)!==null)b=!0,A||(A=!0,q());else{var H=n(d);H!==null&&X(G,H.startTime-I)}}var A=!1,z=-1,T=5,N=-1;function ce(){return M?!0:!(i.unstable_now()-N<T)}function k(){if(M=!1,A){var I=i.unstable_now();N=I;var H=!0;try{e:{b=!1,C&&(C=!1,D(z),z=-1),x=!0;var le=_;try{t:{for(P(I),v=n(m);v!==null&&!(v.expirationTime>I&&ce());){var ge=v.callback;if(typeof ge=="function"){v.callback=null,_=v.priorityLevel;var O=ge(v.expirationTime<=I);if(I=i.unstable_now(),typeof O=="function"){v.callback=O,P(I),H=!0;break t}v===n(m)&&r(m),P(I)}else r(m);v=n(m)}if(v!==null)H=!0;else{var B=n(d);B!==null&&X(G,B.startTime-I),H=!1}}break e}finally{v=null,_=le,x=!1}H=void 0}}finally{H?q():A=!1}}}var q;if(typeof U=="function")q=function(){U(k)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ee=te.port2;te.port1.onmessage=k,q=function(){ee.postMessage(null)}}else q=function(){y(k,0)};function X(I,H){z=y(function(){I(i.unstable_now())},H)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(I){I.callback=null},i.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_next=function(I){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var le=_;_=H;try{return I()}finally{_=le}},i.unstable_requestPaint=function(){M=!0},i.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var le=_;_=I;try{return H()}finally{_=le}},i.unstable_scheduleCallback=function(I,H,le){var ge=i.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?ge+le:ge):le=ge,I){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=le+O,I={id:g++,callback:H,priorityLevel:I,startTime:le,expirationTime:O,sortIndex:-1},le>ge?(I.sortIndex=le,e(d,I),n(m)===null&&I===n(d)&&(C?(D(z),z=-1):C=!0,X(G,le-ge))):(I.sortIndex=O,e(m,I),b||x||(b=!0,A||(A=!0,q()))),I},i.unstable_shouldYield=ce,i.unstable_wrapCallback=function(I){var H=_;return function(){var le=_;_=H;try{return I.apply(this,arguments)}finally{_=le}}}})(Jh)),Jh}var sv;function bb(){return sv||(sv=1,Qh.exports=Mb()),Qh.exports}var $h={exports:{}},On={};var ov;function Eb(){if(ov)return On;ov=1;var i=Jp();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:d,implementation:g}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,On.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return u(m,d,null,g)},On.flushSync=function(m){var d=c.T,g=r.p;try{if(c.T=null,r.p=2,m)return m()}finally{c.T=d,r.p=g,r.d.f()}},On.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},On.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},On.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},On.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},On.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},On.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=h(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},On.requestFormReset=function(m){r.d.r(m)},On.unstable_batchedUpdates=function(m,d){return m(d)},On.useFormState=function(m,d,g){return c.H.useFormState(m,d,g)},On.useFormStatus=function(){return c.H.useHostTransitionStatus()},On.version="19.2.4",On}var lv;function Tb(){if(lv)return $h.exports;lv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),$h.exports=Eb(),$h.exports}var uv;function Ab(){if(uv)return sl;uv=1;var i=bb(),e=Jp(),n=Tb();function r(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var a=t,s=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(s=a.return),t=a.return;while(t)}return a.tag===3?s:null}function c(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function h(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function d(t){var a=t.alternate;if(!a){if(a=u(t),a===null)throw Error(r(188));return a!==t?null:t}for(var s=t,l=a;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return m(f),t;if(p===l)return m(f),a;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=p;else{for(var S=!1,w=f.child;w;){if(w===s){S=!0,s=f,l=p;break}if(w===l){S=!0,l=f,s=p;break}w=w.sibling}if(!S){for(w=p.child;w;){if(w===s){S=!0,s=p,l=f;break}if(w===l){S=!0,l=p,s=f;break}w=w.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:a}function g(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=g(t),a!==null)return a;t=t.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),U=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),ce=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var te=Symbol.for("react.client.reference");function ee(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===te?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case G:return"Suspense";case A:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case U:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case P:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return a=t.displayName||null,a!==null?a:ee(t.type)||"Memo";case T:a=t._payload,t=t._init;try{return ee(t(a))}catch{}}return null}var X=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ge=[],O=-1;function B(t){return{current:t}}function Q(t){0>O||(t.current=ge[O],ge[O]=null,O--)}function L(t,a){O++,ge[O]=t.current,t.current=a}var Ae=B(null),Pe=B(null),ae=B(null),xe=B(null);function Ee(t,a){switch(L(ae,a),L(Pe,t),L(Ae,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?E_(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=E_(a),t=T_(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(Ae),L(Ae,t)}function Be(){Q(Ae),Q(Pe),Q(ae)}function Ze(t){t.memoizedState!==null&&L(xe,t);var a=Ae.current,s=T_(a,t.type);a!==s&&(L(Pe,t),L(Ae,s))}function $e(t){Pe.current===t&&(Q(Ae),Q(Pe)),xe.current===t&&(Q(xe),tl._currentValue=le)}var en,vt;function _t(t){if(en===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);en=a&&a[1]||"",vt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+en+t+vt}var Ct=!1;function rt(t,a){if(!t||Ct)return"";Ct=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(me){var he=me}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(me){he=me}t.call(Se.prototype)}}else{try{throw Error()}catch(me){he=me}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(me){if(me&&he&&typeof me.stack=="string")return[me.stack,he.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),S=p[0],w=p[1];if(S&&w){var W=S.split(`
`),ue=w.split(`
`);for(f=l=0;l<W.length&&!W[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ue.length&&!ue[f].includes("DetermineComponentFrameRoot");)f++;if(l===W.length||f===ue.length)for(l=W.length-1,f=ue.length-1;1<=l&&0<=f&&W[l]!==ue[f];)f--;for(;1<=l&&0<=f;l--,f--)if(W[l]!==ue[f]){if(l!==1||f!==1)do if(l--,f--,0>f||W[l]!==ue[f]){var ve=`
`+W[l].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=l&&0<=f);break}}}finally{Ct=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?_t(s):""}function Zt(t,a){switch(t.tag){case 26:case 27:case 5:return _t(t.type);case 16:return _t("Lazy");case 13:return t.child!==a&&a!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return rt(t.type,!1);case 11:return rt(t.type.render,!1);case 1:return rt(t.type,!0);case 31:return _t("Activity");default:return""}}function j(t){try{var a="",s=null;do a+=Zt(t,s),s=t,t=t.return;while(t);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var jt=Object.prototype.hasOwnProperty,xt=i.unstable_scheduleCallback,Dt=i.unstable_cancelCallback,je=i.unstable_shouldYield,F=i.unstable_requestPaint,E=i.unstable_now,$=i.unstable_getCurrentPriorityLevel,V=i.unstable_ImmediatePriority,J=i.unstable_UserBlockingPriority,ie=i.unstable_NormalPriority,Ce=i.unstable_LowPriority,Me=i.unstable_IdlePriority,He=i.log,Je=i.unstable_setDisableYieldValue,be=null,Te=null;function Ie(t){if(typeof He=="function"&&Je(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(be,t)}catch{}}var Ue=Math.clz32?Math.clz32:K,Oe=Math.log,tt=Math.LN2;function K(t){return t>>>=0,t===0?32:31-(Oe(t)/tt|0)|0}var Le=256,De=262144,ke=4194304;function we(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,a,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,p=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var w=l&134217727;return w!==0?(l=w&~p,l!==0?f=we(l):(S&=w,S!==0?f=we(S):s||(s=w&~t,s!==0&&(f=we(s))))):(w=l&~p,w!==0?f=we(w):S!==0?f=we(S):s||(s=l&~t,s!==0&&(f=we(s)))),f===0?0:a!==0&&a!==f&&(a&p)===0&&(p=f&-f,s=a&-a,p>=s||p===32&&(s&4194048)!==0)?a:f}function Ve(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function st(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(){var t=ke;return ke<<=1,(ke&62914560)===0&&(ke=4194304),t}function wt(t){for(var a=[],s=0;31>s;s++)a.push(t);return a}function Bn(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ui(t,a,s,l,f,p){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var w=t.entanglements,W=t.expirationTimes,ue=t.hiddenUpdates;for(s=S&~s;0<s;){var ve=31-Ue(s),Se=1<<ve;w[ve]=0,W[ve]=-1;var he=ue[ve];if(he!==null)for(ue[ve]=null,ve=0;ve<he.length;ve++){var me=he[ve];me!==null&&(me.lane&=-536870913)}s&=~Se}l!==0&&go(t,l,0),p!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=p&~(S&~a))}function go(t,a,s){t.pendingLanes|=a,t.suspendedLanes&=~a;var l=31-Ue(a);t.entangledLanes|=a,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function ns(t,a){var s=t.entangledLanes|=a;for(t=t.entanglements;s;){var l=31-Ue(s),f=1<<l;f&a|t[l]&a&&(t[l]|=a),s&=~f}}function Nl(t,a){var s=a&-a;return s=(s&42)!==0?1:is(s),(s&(t.suspendedLanes|a))!==0?0:s}function is(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function as(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Wi(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:Y_(t.type))}function rs(t,a){var s=H.p;try{return H.p=t,a()}finally{H.p=s}}var Li=Math.random().toString(36).slice(2),hn="__reactFiber$"+Li,Sn="__reactProps$"+Li,oa="__reactContainer$"+Li,Ha="__reactEvents$"+Li,Ol="__reactListeners$"+Li,Pl="__reactHandles$"+Li,Il="__reactResources$"+Li,Er="__reactMarker$"+Li;function _o(t){delete t[hn],delete t[Sn],delete t[Ha],delete t[Ol],delete t[Pl]}function Ga(t){var a=t[hn];if(a)return a;for(var s=t.parentNode;s;){if(a=s[oa]||s[hn]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(t=L_(t);t!==null;){if(s=t[hn])return s;t=L_(t)}return a}t=s,s=t.parentNode}return null}function Va(t){if(t=t[hn]||t[oa]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function Tr(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(r(33))}function R(t){var a=t[Il];return a||(a=t[Il]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Z(t){t[Er]=!0}var pe=new Set,fe={};function se(t,a){Ne(t,a),Ne(t+"Capture",a)}function Ne(t,a){for(fe[t]=a,t=0;t<a.length;t++)pe.add(a[t])}var Ge=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ze={},Ye={};function Qe(t){return jt.call(Ye,t)?!0:jt.call(ze,t)?!1:Ge.test(t)?Ye[t]=!0:(ze[t]=!0,!1)}function it(t,a,s){if(Qe(a))if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+s)}}function ut(t,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+s)}}function Xe(t,a,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(a,s,""+l)}}function ht(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tn(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function nn(t,a,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,p.call(this,S)}}),Object.defineProperty(t,a,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function Ut(t){if(!t._valueTracker){var a=tn(t)?"checked":"value";t._valueTracker=nn(t,a,""+t[a])}}function Mn(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var s=a.getValue(),l="";return t&&(l=tn(t)?t.checked?"true":"false":t.value),t=l,t!==s?(a.setValue(t),!0):!1}function qe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var kn=/[\n"\\]/g;function ot(t){return t.replace(kn,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Hn(t,a,s,l,f,p,S,w){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),a!=null?S==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+ht(a)):t.value!==""+ht(a)&&(t.value=""+ht(a)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),a!=null?Ni(t,S,ht(a)):s!=null?Ni(t,S,ht(s)):l!=null&&t.removeAttribute("value"),f==null&&p!=null&&(t.defaultChecked=!!p),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+ht(w):t.removeAttribute("name")}function ai(t,a,s,l,f,p,S,w){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),a!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||a!=null)){Ut(t);return}s=s!=null?""+ht(s):"",a=a!=null?""+ht(a):s,w||a===t.value||(t.value=a),t.defaultValue=a}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=w?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Ut(t)}function Ni(t,a,s){a==="number"&&qe(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function ri(t,a,s,l){if(t=t.options,a){a={};for(var f=0;f<s.length;f++)a["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=a.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+ht(s),a=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}a!==null||t[f].disabled||(a=t[f])}a!==null&&(a.selected=!0)}}function zt(t,a,s){if(a!=null&&(a=""+ht(a),a!==t.value&&(t.value=a),s==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=s!=null?""+ht(s):""}function dn(t,a,s,l){if(a==null){if(l!=null){if(s!=null)throw Error(r(92));if(X(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),a=s}s=ht(a),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Ut(t)}function Gn(t,a){if(a){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=a;return}}t.textContent=a}var pn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Oi(t,a,s){var l=a.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":l?t.setProperty(a,s):typeof s!="number"||s===0||pn.has(a)?a==="float"?t.cssFloat=s:t[a]=(""+s).trim():t[a]=s+"px"}function la(t,a,s){if(a!=null&&typeof a!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in a)l=a[f],a.hasOwnProperty(f)&&s[f]!==l&&Oi(t,f,l)}else for(var p in a)a.hasOwnProperty(p)&&Oi(t,p,a[p])}function ss(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zl(t){return gS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ua(){}var Xc=null;function Wc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var os=null,ls=null;function bm(t){var a=Va(t);if(a&&(t=a.stateNode)){var s=t[Sn]||null;e:switch(t=a.stateNode,a.type){case"input":if(Hn(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),a=s.name,s.type==="radio"&&a!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ot(""+a)+'"][type="radio"]'),a=0;a<s.length;a++){var l=s[a];if(l!==t&&l.form===t.form){var f=l[Sn]||null;if(!f)throw Error(r(90));Hn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(a=0;a<s.length;a++)l=s[a],l.form===t.form&&Mn(l)}break e;case"textarea":zt(t,s.value,s.defaultValue);break e;case"select":a=s.value,a!=null&&ri(t,!!s.multiple,a,!1)}}}var qc=!1;function Em(t,a,s){if(qc)return t(a,s);qc=!0;try{var l=t(a);return l}finally{if(qc=!1,(os!==null||ls!==null)&&(Eu(),os&&(a=os,t=ls,ls=os=null,bm(a),t)))for(a=0;a<t.length;a++)bm(t[a])}}function vo(t,a){var s=t.stateNode;if(s===null)return null;var l=s[Sn]||null;if(l===null)return null;s=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,a,typeof s));return s}var ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jc=!1;if(ca)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){jc=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{jc=!1}var Xa=null,Yc=null,Fl=null;function Tm(){if(Fl)return Fl;var t,a=Yc,s=a.length,l,f="value"in Xa?Xa.value:Xa.textContent,p=f.length;for(t=0;t<s&&a[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&a[s-l]===f[p-l];l++);return Fl=f.slice(t,1<l?1-l:void 0)}function Bl(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function kl(){return!0}function Am(){return!1}function qn(t){function a(s,l,f,p,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(s=t[w],this[w]=s?s(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?kl:Am,this.isPropagationStopped=Am,this}return v(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=kl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=kl)},persist:function(){},isPersistent:kl}),a}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=qn(Ar),yo=v({},Ar,{view:0,detail:0}),_S=qn(yo),Zc,Kc,So,Gl=v({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(Zc=t.screenX-So.screenX,Kc=t.screenY-So.screenY):Kc=Zc=0,So=t),Zc)},movementY:function(t){return"movementY"in t?t.movementY:Kc}}),Cm=qn(Gl),vS=v({},Gl,{dataTransfer:0}),xS=qn(vS),yS=v({},yo,{relatedTarget:0}),Qc=qn(yS),SS=v({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),MS=qn(SS),bS=v({},Ar,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ES=qn(bS),TS=v({},Ar,{data:0}),wm=qn(TS),AS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},CS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RS(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=wS[t])?!!a[t]:!1}function Jc(){return RS}var DS=v({},yo,{key:function(t){if(t.key){var a=AS[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?CS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jc,charCode:function(t){return t.type==="keypress"?Bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),US=qn(DS),LS=v({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rm=qn(LS),NS=v({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jc}),OS=qn(NS),PS=v({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),IS=qn(PS),zS=v({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),FS=qn(zS),BS=v({},Ar,{newState:0,oldState:0}),kS=qn(BS),HS=[9,13,27,32],$c=ca&&"CompositionEvent"in window,Mo=null;ca&&"documentMode"in document&&(Mo=document.documentMode);var GS=ca&&"TextEvent"in window&&!Mo,Dm=ca&&(!$c||Mo&&8<Mo&&11>=Mo),Um=" ",Lm=!1;function Nm(t,a){switch(t){case"keyup":return HS.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Om(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function VS(t,a){switch(t){case"compositionend":return Om(a);case"keypress":return a.which!==32?null:(Lm=!0,Um);case"textInput":return t=a.data,t===Um&&Lm?null:t;default:return null}}function XS(t,a){if(us)return t==="compositionend"||!$c&&Nm(t,a)?(t=Tm(),Fl=Yc=Xa=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Dm&&a.locale!=="ko"?null:a.data;default:return null}}var WS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pm(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!WS[t.type]:a==="textarea"}function Im(t,a,s,l){os?ls?ls.push(l):ls=[l]:os=l,a=Uu(a,"onChange"),0<a.length&&(s=new Hl("onChange","change",null,s,l),t.push({event:s,listeners:a}))}var bo=null,Eo=null;function qS(t){v_(t,0)}function Vl(t){var a=Tr(t);if(Mn(a))return t}function zm(t,a){if(t==="change")return a}var Fm=!1;if(ca){var ef;if(ca){var tf="oninput"in document;if(!tf){var Bm=document.createElement("div");Bm.setAttribute("oninput","return;"),tf=typeof Bm.oninput=="function"}ef=tf}else ef=!1;Fm=ef&&(!document.documentMode||9<document.documentMode)}function km(){bo&&(bo.detachEvent("onpropertychange",Hm),Eo=bo=null)}function Hm(t){if(t.propertyName==="value"&&Vl(Eo)){var a=[];Im(a,Eo,t,Wc(t)),Em(qS,a)}}function jS(t,a,s){t==="focusin"?(km(),bo=a,Eo=s,bo.attachEvent("onpropertychange",Hm)):t==="focusout"&&km()}function YS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(Eo)}function ZS(t,a){if(t==="click")return Vl(a)}function KS(t,a){if(t==="input"||t==="change")return Vl(a)}function QS(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var si=typeof Object.is=="function"?Object.is:QS;function To(t,a){if(si(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var s=Object.keys(t),l=Object.keys(a);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!jt.call(a,f)||!si(t[f],a[f]))return!1}return!0}function Gm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vm(t,a){var s=Gm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=a&&l>=a)return{node:s,offset:a-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Gm(s)}}function Xm(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?Xm(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function Wm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=qe(t.document);a instanceof t.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)t=a.contentWindow;else break;a=qe(t.document)}return a}function nf(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var JS=ca&&"documentMode"in document&&11>=document.documentMode,cs=null,af=null,Ao=null,rf=!1;function qm(t,a,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;rf||cs==null||cs!==qe(l)||(l=cs,"selectionStart"in l&&nf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ao&&To(Ao,l)||(Ao=l,l=Uu(af,"onSelect"),0<l.length&&(a=new Hl("onSelect","select",null,a,s),t.push({event:a,listeners:l}),a.target=cs)))}function Cr(t,a){var s={};return s[t.toLowerCase()]=a.toLowerCase(),s["Webkit"+t]="webkit"+a,s["Moz"+t]="moz"+a,s}var fs={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionrun:Cr("Transition","TransitionRun"),transitionstart:Cr("Transition","TransitionStart"),transitioncancel:Cr("Transition","TransitionCancel"),transitionend:Cr("Transition","TransitionEnd")},sf={},jm={};ca&&(jm=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function wr(t){if(sf[t])return sf[t];if(!fs[t])return t;var a=fs[t],s;for(s in a)if(a.hasOwnProperty(s)&&s in jm)return sf[t]=a[s];return t}var Ym=wr("animationend"),Zm=wr("animationiteration"),Km=wr("animationstart"),$S=wr("transitionrun"),eM=wr("transitionstart"),tM=wr("transitioncancel"),Qm=wr("transitionend"),Jm=new Map,of="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");of.push("scrollEnd");function Pi(t,a){Jm.set(t,a),se(a,[t])}var Xl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},vi=[],hs=0,lf=0;function Wl(){for(var t=hs,a=lf=hs=0;a<t;){var s=vi[a];vi[a++]=null;var l=vi[a];vi[a++]=null;var f=vi[a];vi[a++]=null;var p=vi[a];if(vi[a++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}p!==0&&$m(s,f,p)}}function ql(t,a,s,l){vi[hs++]=t,vi[hs++]=a,vi[hs++]=s,vi[hs++]=l,lf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function uf(t,a,s,l){return ql(t,a,s,l),jl(t)}function Rr(t,a){return ql(t,null,null,a),jl(t)}function $m(t,a,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(f=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,f&&a!==null&&(f=31-Ue(s),t=p.hiddenUpdates,l=t[f],l===null?t[f]=[a]:l.push(a),a.lane=s|536870912),p):null}function jl(t){if(50<Yo)throw Yo=0,vh=null,Error(r(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var ds={};function nM(t,a,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(t,a,s,l){return new nM(t,a,s,l)}function cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fa(t,a){var s=t.alternate;return s===null?(s=oi(t.tag,a,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=a,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,a=t.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function eg(t,a){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,a=s.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function Yl(t,a,s,l,f,p){var S=0;if(l=t,typeof t=="function")cf(t)&&(S=1);else if(typeof t=="string")S=ob(t,s,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=oi(31,s,a,f),t.elementType=N,t.lanes=p,t;case C:return Dr(s.children,f,p,a);case M:S=8,f|=24;break;case y:return t=oi(12,s,a,f|2),t.elementType=y,t.lanes=p,t;case G:return t=oi(13,s,a,f),t.elementType=G,t.lanes=p,t;case A:return t=oi(19,s,a,f),t.elementType=A,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:S=10;break e;case D:S=9;break e;case P:S=11;break e;case z:S=14;break e;case T:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return a=oi(S,s,a,f),a.elementType=t,a.type=l,a.lanes=p,a}function Dr(t,a,s,l){return t=oi(7,t,l,a),t.lanes=s,t}function ff(t,a,s){return t=oi(6,t,null,a),t.lanes=s,t}function tg(t){var a=oi(18,null,null,0);return a.stateNode=t,a}function hf(t,a,s){return a=oi(4,t.children!==null?t.children:[],t.key,a),a.lanes=s,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var ng=new WeakMap;function xi(t,a){if(typeof t=="object"&&t!==null){var s=ng.get(t);return s!==void 0?s:(a={value:t,source:a,stack:j(a)},ng.set(t,a),a)}return{value:t,source:a,stack:j(a)}}var ps=[],ms=0,Zl=null,Co=0,yi=[],Si=0,Wa=null,qi=1,ji="";function ha(t,a){ps[ms++]=Co,ps[ms++]=Zl,Zl=t,Co=a}function ig(t,a,s){yi[Si++]=qi,yi[Si++]=ji,yi[Si++]=Wa,Wa=t;var l=qi;t=ji;var f=32-Ue(l)-1;l&=~(1<<f),s+=1;var p=32-Ue(a)+f;if(30<p){var S=f-f%5;p=(l&(1<<S)-1).toString(32),l>>=S,f-=S,qi=1<<32-Ue(a)+f|s<<f|l,ji=p+t}else qi=1<<p|s<<f|l,ji=t}function df(t){t.return!==null&&(ha(t,1),ig(t,1,0))}function pf(t){for(;t===Zl;)Zl=ps[--ms],ps[ms]=null,Co=ps[--ms],ps[ms]=null;for(;t===Wa;)Wa=yi[--Si],yi[Si]=null,ji=yi[--Si],yi[Si]=null,qi=yi[--Si],yi[Si]=null}function ag(t,a){yi[Si++]=qi,yi[Si++]=ji,yi[Si++]=Wa,qi=a.id,ji=a.overflow,Wa=t}var Rn=null,Jt=null,Tt=!1,qa=null,Mi=!1,mf=Error(r(519));function ja(t){var a=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wo(xi(a,t)),mf}function rg(t){var a=t.stateNode,s=t.type,l=t.memoizedProps;switch(a[hn]=t,a[Sn]=l,s){case"dialog":St("cancel",a),St("close",a);break;case"iframe":case"object":case"embed":St("load",a);break;case"video":case"audio":for(s=0;s<Ko.length;s++)St(Ko[s],a);break;case"source":St("error",a);break;case"img":case"image":case"link":St("error",a),St("load",a);break;case"details":St("toggle",a);break;case"input":St("invalid",a),ai(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":St("invalid",a);break;case"textarea":St("invalid",a),dn(a,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||a.textContent===""+s||l.suppressHydrationWarning===!0||M_(a.textContent,s)?(l.popover!=null&&(St("beforetoggle",a),St("toggle",a)),l.onScroll!=null&&St("scroll",a),l.onScrollEnd!=null&&St("scrollend",a),l.onClick!=null&&(a.onclick=ua),a=!0):a=!1,a||ja(t,!0)}function sg(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Rn=Rn.return}}function gs(t){if(t!==Rn)return!1;if(!Tt)return sg(t),Tt=!0,!1;var a=t.tag,s;if((s=a!==3&&a!==27)&&((s=a===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Nh(t.type,t.memoizedProps)),s=!s),s&&Jt&&ja(t),sg(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Jt=U_(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Jt=U_(t)}else a===27?(a=Jt,or(t.type)?(t=Fh,Fh=null,Jt=t):Jt=a):Jt=Rn?Ei(t.stateNode.nextSibling):null;return!0}function Ur(){Jt=Rn=null,Tt=!1}function gf(){var t=qa;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),qa=null),t}function wo(t){qa===null?qa=[t]:qa.push(t)}var _f=B(null),Lr=null,da=null;function Ya(t,a,s){L(_f,a._currentValue),a._currentValue=s}function pa(t){t._currentValue=_f.current,Q(_f)}function vf(t,a,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),t===s)break;t=t.return}}function xf(t,a,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var p=f.dependencies;if(p!==null){var S=f.child;p=p.firstContext;e:for(;p!==null;){var w=p;p=f;for(var W=0;W<a.length;W++)if(w.context===a[W]){p.lanes|=s,w=p.alternate,w!==null&&(w.lanes|=s),vf(p.return,s,t),l||(S=null);break e}p=w.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(r(341));S.lanes|=s,p=S.alternate,p!==null&&(p.lanes|=s),vf(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function _s(t,a,s,l){t=null;for(var f=a,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var w=f.type;si(f.pendingProps.value,S.value)||(t!==null?t.push(w):t=[w])}}else if(f===xe.current){if(S=f.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(tl):t=[tl])}f=f.return}t!==null&&xf(a,t,s,l),a.flags|=262144}function Kl(t){for(t=t.firstContext;t!==null;){if(!si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Nr(t){Lr=t,da=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Dn(t){return og(Lr,t)}function Ql(t,a){return Lr===null&&Nr(t),og(t,a)}function og(t,a){var s=a._currentValue;if(a={context:a,memoizedValue:s,next:null},da===null){if(t===null)throw Error(r(308));da=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else da=da.next=a;return s}var iM=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){a.aborted=!0,t.forEach(function(s){return s()})}},aM=i.unstable_scheduleCallback,rM=i.unstable_NormalPriority,mn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yf(){return{controller:new iM,data:new Map,refCount:0}}function Ro(t){t.refCount--,t.refCount===0&&aM(rM,function(){t.controller.abort()})}var Do=null,Sf=0,vs=0,xs=null;function sM(t,a){if(Do===null){var s=Do=[];Sf=0,vs=Eh(),xs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Sf++,a.then(lg,lg),a}function lg(){if(--Sf===0&&Do!==null){xs!==null&&(xs.status="fulfilled");var t=Do;Do=null,vs=0,xs=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function oM(t,a){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=a;for(var f=0;f<s.length;f++)(0,s[f])(a)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var ug=I.S;I.S=function(t,a){q0=E(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&sM(t,a),ug!==null&&ug(t,a)};var Or=B(null);function Mf(){var t=Or.current;return t!==null?t:Yt.pooledCache}function Jl(t,a){a===null?L(Or,Or.current):L(Or,a.pool)}function cg(){var t=Mf();return t===null?null:{parent:mn._currentValue,pool:t}}var ys=Error(r(460)),bf=Error(r(474)),$l=Error(r(542)),eu={then:function(){}};function fg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function hg(t,a,s){switch(s=t[s],s===void 0?t.push(a):s!==a&&(a.then(ua,ua),a=s),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,pg(t),t;default:if(typeof a.status=="string")a.then(ua,ua);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=a,t.status="pending",t.then(function(l){if(a.status==="pending"){var f=a;f.status="fulfilled",f.value=l}},function(l){if(a.status==="pending"){var f=a;f.status="rejected",f.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,pg(t),t}throw Ir=a,ys}}function Pr(t){try{var a=t._init;return a(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Ir=s,ys):s}}var Ir=null;function dg(){if(Ir===null)throw Error(r(459));var t=Ir;return Ir=null,t}function pg(t){if(t===ys||t===$l)throw Error(r(483))}var Ss=null,Uo=0;function tu(t){var a=Uo;return Uo+=1,Ss===null&&(Ss=[]),hg(Ss,t,a)}function Lo(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function nu(t,a){throw a.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(a),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function mg(t){function a(ne,Y){if(t){var oe=ne.deletions;oe===null?(ne.deletions=[Y],ne.flags|=16):oe.push(Y)}}function s(ne,Y){if(!t)return null;for(;Y!==null;)a(ne,Y),Y=Y.sibling;return null}function l(ne){for(var Y=new Map;ne!==null;)ne.key!==null?Y.set(ne.key,ne):Y.set(ne.index,ne),ne=ne.sibling;return Y}function f(ne,Y){return ne=fa(ne,Y),ne.index=0,ne.sibling=null,ne}function p(ne,Y,oe){return ne.index=oe,t?(oe=ne.alternate,oe!==null?(oe=oe.index,oe<Y?(ne.flags|=67108866,Y):oe):(ne.flags|=67108866,Y)):(ne.flags|=1048576,Y)}function S(ne){return t&&ne.alternate===null&&(ne.flags|=67108866),ne}function w(ne,Y,oe,ye){return Y===null||Y.tag!==6?(Y=ff(oe,ne.mode,ye),Y.return=ne,Y):(Y=f(Y,oe),Y.return=ne,Y)}function W(ne,Y,oe,ye){var et=oe.type;return et===C?ve(ne,Y,oe.props.children,ye,oe.key):Y!==null&&(Y.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===T&&Pr(et)===Y.type)?(Y=f(Y,oe.props),Lo(Y,oe),Y.return=ne,Y):(Y=Yl(oe.type,oe.key,oe.props,null,ne.mode,ye),Lo(Y,oe),Y.return=ne,Y)}function ue(ne,Y,oe,ye){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==oe.containerInfo||Y.stateNode.implementation!==oe.implementation?(Y=hf(oe,ne.mode,ye),Y.return=ne,Y):(Y=f(Y,oe.children||[]),Y.return=ne,Y)}function ve(ne,Y,oe,ye,et){return Y===null||Y.tag!==7?(Y=Dr(oe,ne.mode,ye,et),Y.return=ne,Y):(Y=f(Y,oe),Y.return=ne,Y)}function Se(ne,Y,oe){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=ff(""+Y,ne.mode,oe),Y.return=ne,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case x:return oe=Yl(Y.type,Y.key,Y.props,null,ne.mode,oe),Lo(oe,Y),oe.return=ne,oe;case b:return Y=hf(Y,ne.mode,oe),Y.return=ne,Y;case T:return Y=Pr(Y),Se(ne,Y,oe)}if(X(Y)||q(Y))return Y=Dr(Y,ne.mode,oe,null),Y.return=ne,Y;if(typeof Y.then=="function")return Se(ne,tu(Y),oe);if(Y.$$typeof===U)return Se(ne,Ql(ne,Y),oe);nu(ne,Y)}return null}function he(ne,Y,oe,ye){var et=Y!==null?Y.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return et!==null?null:w(ne,Y,""+oe,ye);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case x:return oe.key===et?W(ne,Y,oe,ye):null;case b:return oe.key===et?ue(ne,Y,oe,ye):null;case T:return oe=Pr(oe),he(ne,Y,oe,ye)}if(X(oe)||q(oe))return et!==null?null:ve(ne,Y,oe,ye,null);if(typeof oe.then=="function")return he(ne,Y,tu(oe),ye);if(oe.$$typeof===U)return he(ne,Y,Ql(ne,oe),ye);nu(ne,oe)}return null}function me(ne,Y,oe,ye,et){if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return ne=ne.get(oe)||null,w(Y,ne,""+ye,et);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case x:return ne=ne.get(ye.key===null?oe:ye.key)||null,W(Y,ne,ye,et);case b:return ne=ne.get(ye.key===null?oe:ye.key)||null,ue(Y,ne,ye,et);case T:return ye=Pr(ye),me(ne,Y,oe,ye,et)}if(X(ye)||q(ye))return ne=ne.get(oe)||null,ve(Y,ne,ye,et,null);if(typeof ye.then=="function")return me(ne,Y,oe,tu(ye),et);if(ye.$$typeof===U)return me(ne,Y,oe,Ql(Y,ye),et);nu(Y,ye)}return null}function We(ne,Y,oe,ye){for(var et=null,Lt=null,Ke=Y,dt=Y=0,Et=null;Ke!==null&&dt<oe.length;dt++){Ke.index>dt?(Et=Ke,Ke=null):Et=Ke.sibling;var Nt=he(ne,Ke,oe[dt],ye);if(Nt===null){Ke===null&&(Ke=Et);break}t&&Ke&&Nt.alternate===null&&a(ne,Ke),Y=p(Nt,Y,dt),Lt===null?et=Nt:Lt.sibling=Nt,Lt=Nt,Ke=Et}if(dt===oe.length)return s(ne,Ke),Tt&&ha(ne,dt),et;if(Ke===null){for(;dt<oe.length;dt++)Ke=Se(ne,oe[dt],ye),Ke!==null&&(Y=p(Ke,Y,dt),Lt===null?et=Ke:Lt.sibling=Ke,Lt=Ke);return Tt&&ha(ne,dt),et}for(Ke=l(Ke);dt<oe.length;dt++)Et=me(Ke,ne,dt,oe[dt],ye),Et!==null&&(t&&Et.alternate!==null&&Ke.delete(Et.key===null?dt:Et.key),Y=p(Et,Y,dt),Lt===null?et=Et:Lt.sibling=Et,Lt=Et);return t&&Ke.forEach(function(hr){return a(ne,hr)}),Tt&&ha(ne,dt),et}function nt(ne,Y,oe,ye){if(oe==null)throw Error(r(151));for(var et=null,Lt=null,Ke=Y,dt=Y=0,Et=null,Nt=oe.next();Ke!==null&&!Nt.done;dt++,Nt=oe.next()){Ke.index>dt?(Et=Ke,Ke=null):Et=Ke.sibling;var hr=he(ne,Ke,Nt.value,ye);if(hr===null){Ke===null&&(Ke=Et);break}t&&Ke&&hr.alternate===null&&a(ne,Ke),Y=p(hr,Y,dt),Lt===null?et=hr:Lt.sibling=hr,Lt=hr,Ke=Et}if(Nt.done)return s(ne,Ke),Tt&&ha(ne,dt),et;if(Ke===null){for(;!Nt.done;dt++,Nt=oe.next())Nt=Se(ne,Nt.value,ye),Nt!==null&&(Y=p(Nt,Y,dt),Lt===null?et=Nt:Lt.sibling=Nt,Lt=Nt);return Tt&&ha(ne,dt),et}for(Ke=l(Ke);!Nt.done;dt++,Nt=oe.next())Nt=me(Ke,ne,dt,Nt.value,ye),Nt!==null&&(t&&Nt.alternate!==null&&Ke.delete(Nt.key===null?dt:Nt.key),Y=p(Nt,Y,dt),Lt===null?et=Nt:Lt.sibling=Nt,Lt=Nt);return t&&Ke.forEach(function(vb){return a(ne,vb)}),Tt&&ha(ne,dt),et}function Wt(ne,Y,oe,ye){if(typeof oe=="object"&&oe!==null&&oe.type===C&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case x:e:{for(var et=oe.key;Y!==null;){if(Y.key===et){if(et=oe.type,et===C){if(Y.tag===7){s(ne,Y.sibling),ye=f(Y,oe.props.children),ye.return=ne,ne=ye;break e}}else if(Y.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===T&&Pr(et)===Y.type){s(ne,Y.sibling),ye=f(Y,oe.props),Lo(ye,oe),ye.return=ne,ne=ye;break e}s(ne,Y);break}else a(ne,Y);Y=Y.sibling}oe.type===C?(ye=Dr(oe.props.children,ne.mode,ye,oe.key),ye.return=ne,ne=ye):(ye=Yl(oe.type,oe.key,oe.props,null,ne.mode,ye),Lo(ye,oe),ye.return=ne,ne=ye)}return S(ne);case b:e:{for(et=oe.key;Y!==null;){if(Y.key===et)if(Y.tag===4&&Y.stateNode.containerInfo===oe.containerInfo&&Y.stateNode.implementation===oe.implementation){s(ne,Y.sibling),ye=f(Y,oe.children||[]),ye.return=ne,ne=ye;break e}else{s(ne,Y);break}else a(ne,Y);Y=Y.sibling}ye=hf(oe,ne.mode,ye),ye.return=ne,ne=ye}return S(ne);case T:return oe=Pr(oe),Wt(ne,Y,oe,ye)}if(X(oe))return We(ne,Y,oe,ye);if(q(oe)){if(et=q(oe),typeof et!="function")throw Error(r(150));return oe=et.call(oe),nt(ne,Y,oe,ye)}if(typeof oe.then=="function")return Wt(ne,Y,tu(oe),ye);if(oe.$$typeof===U)return Wt(ne,Y,Ql(ne,oe),ye);nu(ne,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,Y!==null&&Y.tag===6?(s(ne,Y.sibling),ye=f(Y,oe),ye.return=ne,ne=ye):(s(ne,Y),ye=ff(oe,ne.mode,ye),ye.return=ne,ne=ye),S(ne)):s(ne,Y)}return function(ne,Y,oe,ye){try{Uo=0;var et=Wt(ne,Y,oe,ye);return Ss=null,et}catch(Ke){if(Ke===ys||Ke===$l)throw Ke;var Lt=oi(29,Ke,null,ne.mode);return Lt.lanes=ye,Lt.return=ne,Lt}}}var zr=mg(!0),gg=mg(!1),Za=!1;function Ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tf(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(t,a,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Pt&2)!==0){var f=l.pending;return f===null?a.next=a:(a.next=f.next,f.next=a),l.pending=a,a=jl(t),$m(t,null,s),a}return ql(t,l,a,s),jl(t)}function No(t,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194048)!==0)){var l=a.lanes;l&=t.pendingLanes,s|=l,a.lanes=s,ns(t,s)}}function Af(t,a){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?f=p=S:p=p.next=S,s=s.next}while(s!==null);p===null?f=p=a:p=p.next=a}else f=p=a;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=a:t.next=a,s.lastBaseUpdate=a}var Cf=!1;function Oo(){if(Cf){var t=xs;if(t!==null)throw t}}function Po(t,a,s,l){Cf=!1;var f=t.updateQueue;Za=!1;var p=f.firstBaseUpdate,S=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var W=w,ue=W.next;W.next=null,S===null?p=ue:S.next=ue,S=W;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,w=ve.lastBaseUpdate,w!==S&&(w===null?ve.firstBaseUpdate=ue:w.next=ue,ve.lastBaseUpdate=W))}if(p!==null){var Se=f.baseState;S=0,ve=ue=W=null,w=p;do{var he=w.lane&-536870913,me=he!==w.lane;if(me?(bt&he)===he:(l&he)===he){he!==0&&he===vs&&(Cf=!0),ve!==null&&(ve=ve.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var We=t,nt=w;he=a;var Wt=s;switch(nt.tag){case 1:if(We=nt.payload,typeof We=="function"){Se=We.call(Wt,Se,he);break e}Se=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=nt.payload,he=typeof We=="function"?We.call(Wt,Se,he):We,he==null)break e;Se=v({},Se,he);break e;case 2:Za=!0}}he=w.callback,he!==null&&(t.flags|=64,me&&(t.flags|=8192),me=f.callbacks,me===null?f.callbacks=[he]:me.push(he))}else me={lane:he,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ve===null?(ue=ve=me,W=Se):ve=ve.next=me,S|=he;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;me=w,w=me.next,me.next=null,f.lastBaseUpdate=me,f.shared.pending=null}}while(!0);ve===null&&(W=Se),f.baseState=W,f.firstBaseUpdate=ue,f.lastBaseUpdate=ve,p===null&&(f.shared.lanes=0),nr|=S,t.lanes=S,t.memoizedState=Se}}function _g(t,a){if(typeof t!="function")throw Error(r(191,t));t.call(a)}function vg(t,a){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)_g(s[t],a)}var Ms=B(null),iu=B(0);function xg(t,a){t=ba,L(iu,t),L(Ms,a),ba=t|a.baseLanes}function wf(){L(iu,ba),L(Ms,Ms.current)}function Rf(){ba=iu.current,Q(Ms),Q(iu)}var li=B(null),bi=null;function Ja(t){var a=t.alternate;L(on,on.current&1),L(li,t),bi===null&&(a===null||Ms.current!==null||a.memoizedState!==null)&&(bi=t)}function Df(t){L(on,on.current),L(li,t),bi===null&&(bi=t)}function yg(t){t.tag===22?(L(on,on.current),L(li,t),bi===null&&(bi=t)):$a()}function $a(){L(on,on.current),L(li,li.current)}function ui(t){Q(li),bi===t&&(bi=null),Q(on)}var on=B(0);function au(t){for(var a=t;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Ih(s)||zh(s)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var ma=0,ft=null,Vt=null,gn=null,ru=!1,bs=!1,Fr=!1,su=0,Io=0,Es=null,lM=0;function rn(){throw Error(r(321))}function Uf(t,a){if(a===null)return!1;for(var s=0;s<a.length&&s<t.length;s++)if(!si(t[s],a[s]))return!1;return!0}function Lf(t,a,s,l,f,p){return ma=p,ft=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,I.H=t===null||t.memoizedState===null?i0:jf,Fr=!1,p=s(l,f),Fr=!1,bs&&(p=Mg(a,s,l,f)),Sg(t),p}function Sg(t){I.H=Bo;var a=Vt!==null&&Vt.next!==null;if(ma=0,gn=Vt=ft=null,ru=!1,Io=0,Es=null,a)throw Error(r(300));t===null||_n||(t=t.dependencies,t!==null&&Kl(t)&&(_n=!0))}function Mg(t,a,s,l){ft=t;var f=0;do{if(bs&&(Es=null),Io=0,bs=!1,25<=f)throw Error(r(301));if(f+=1,gn=Vt=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}I.H=a0,p=a(s,l)}while(bs);return p}function uM(){var t=I.H,a=t.useState()[0];return a=typeof a.then=="function"?zo(a):a,t=t.useState()[0],(Vt!==null?Vt.memoizedState:null)!==t&&(ft.flags|=1024),a}function Nf(){var t=su!==0;return su=0,t}function Of(t,a,s){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~s}function Pf(t){if(ru){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}ru=!1}ma=0,gn=Vt=ft=null,bs=!1,Io=su=0,Es=null}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?ft.memoizedState=gn=t:gn=gn.next=t,gn}function ln(){if(Vt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var a=gn===null?ft.memoizedState:gn.next;if(a!==null)gn=a,Vt=t;else{if(t===null)throw ft.alternate===null?Error(r(467)):Error(r(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},gn===null?ft.memoizedState=gn=t:gn=gn.next=t}return gn}function ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zo(t){var a=Io;return Io+=1,Es===null&&(Es=[]),t=hg(Es,t,a),a=ft,(gn===null?a.memoizedState:gn.next)===null&&(a=a.alternate,I.H=a===null||a.memoizedState===null?i0:jf),t}function lu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return zo(t);if(t.$$typeof===U)return Dn(t)}throw Error(r(438,String(t)))}function If(t){var a=null,s=ft.updateQueue;if(s!==null&&(a=s.memoCache),a==null){var l=ft.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(f){return f.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),s===null&&(s=ou(),ft.updateQueue=s),s.memoCache=a,s=a.data[a.index],s===void 0)for(s=a.data[a.index]=Array(t),l=0;l<t;l++)s[l]=ce;return a.index++,s}function ga(t,a){return typeof a=="function"?a(t):a}function uu(t){var a=ln();return zf(a,Vt,t)}function zf(t,a,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,p=l.pending;if(p!==null){if(f!==null){var S=f.next;f.next=p.next,p.next=S}a.baseQueue=f=p,l.pending=null}if(p=t.baseState,f===null)t.memoizedState=p;else{a=f.next;var w=S=null,W=null,ue=a,ve=!1;do{var Se=ue.lane&-536870913;if(Se!==ue.lane?(bt&Se)===Se:(ma&Se)===Se){var he=ue.revertLane;if(he===0)W!==null&&(W=W.next={lane:0,revertLane:0,gesture:null,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),Se===vs&&(ve=!0);else if((ma&he)===he){ue=ue.next,he===vs&&(ve=!0);continue}else Se={lane:0,revertLane:ue.revertLane,gesture:null,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null},W===null?(w=W=Se,S=p):W=W.next=Se,ft.lanes|=he,nr|=he;Se=ue.action,Fr&&s(p,Se),p=ue.hasEagerState?ue.eagerState:s(p,Se)}else he={lane:Se,revertLane:ue.revertLane,gesture:ue.gesture,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null},W===null?(w=W=he,S=p):W=W.next=he,ft.lanes|=Se,nr|=Se;ue=ue.next}while(ue!==null&&ue!==a);if(W===null?S=p:W.next=w,!si(p,t.memoizedState)&&(_n=!0,ve&&(s=xs,s!==null)))throw s;t.memoizedState=p,t.baseState=S,t.baseQueue=W,l.lastRenderedState=p}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Ff(t){var a=ln(),s=a.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,p=a.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do p=t(p,S.action),S=S.next;while(S!==f);si(p,a.memoizedState)||(_n=!0),a.memoizedState=p,a.baseQueue===null&&(a.baseState=p),s.lastRenderedState=p}return[p,l]}function bg(t,a,s){var l=ft,f=ln(),p=Tt;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=a();var S=!si((Vt||f).memoizedState,s);if(S&&(f.memoizedState=s,_n=!0),f=f.queue,Hf(Ag.bind(null,l,f,t),[t]),f.getSnapshot!==a||S||gn!==null&&gn.memoizedState.tag&1){if(l.flags|=2048,Ts(9,{destroy:void 0},Tg.bind(null,l,f,s,a),null),Yt===null)throw Error(r(349));p||(ma&127)!==0||Eg(l,a,s)}return s}function Eg(t,a,s){t.flags|=16384,t={getSnapshot:a,value:s},a=ft.updateQueue,a===null?(a=ou(),ft.updateQueue=a,a.stores=[t]):(s=a.stores,s===null?a.stores=[t]:s.push(t))}function Tg(t,a,s,l){a.value=s,a.getSnapshot=l,Cg(a)&&wg(t)}function Ag(t,a,s){return s(function(){Cg(a)&&wg(t)})}function Cg(t){var a=t.getSnapshot;t=t.value;try{var s=a();return!si(t,s)}catch{return!0}}function wg(t){var a=Rr(t,2);a!==null&&Qn(a,t,2)}function Bf(t){var a=Vn();if(typeof t=="function"){var s=t;if(t=s(),Fr){Ie(!0);try{s()}finally{Ie(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},a}function Rg(t,a,s,l){return t.baseState=s,zf(t,Vt,typeof l=="function"?l:ga)}function cM(t,a,s,l,f){if(hu(t))throw Error(r(485));if(t=a.action,t!==null){var p={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){p.listeners.push(S)}};I.T!==null?s(!0):p.isTransition=!1,l(p),s=a.pending,s===null?(p.next=a.pending=p,Dg(a,p)):(p.next=s.next,a.pending=s.next=p)}}function Dg(t,a){var s=a.action,l=a.payload,f=t.state;if(a.isTransition){var p=I.T,S={};I.T=S;try{var w=s(f,l),W=I.S;W!==null&&W(S,w),Ug(t,a,w)}catch(ue){kf(t,a,ue)}finally{p!==null&&S.types!==null&&(p.types=S.types),I.T=p}}else try{p=s(f,l),Ug(t,a,p)}catch(ue){kf(t,a,ue)}}function Ug(t,a,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Lg(t,a,l)},function(l){return kf(t,a,l)}):Lg(t,a,s)}function Lg(t,a,s){a.status="fulfilled",a.value=s,Ng(a),t.state=s,a=t.pending,a!==null&&(s=a.next,s===a?t.pending=null:(s=s.next,a.next=s,Dg(t,s)))}function kf(t,a,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=s,Ng(a),a=a.next;while(a!==l)}t.action=null}function Ng(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function Og(t,a){return a}function Pg(t,a){if(Tt){var s=Yt.formState;if(s!==null){e:{var l=ft;if(Tt){if(Jt){t:{for(var f=Jt,p=Mi;f.nodeType!==8;){if(!p){f=null;break t}if(f=Ei(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){Jt=Ei(f.nextSibling),l=f.data==="F!";break e}}ja(l)}l=!1}l&&(a=s[0])}}return s=Vn(),s.memoizedState=s.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Og,lastRenderedState:a},s.queue=l,s=e0.bind(null,ft,l),l.dispatch=s,l=Bf(!1),p=qf.bind(null,ft,!1,l.queue),l=Vn(),f={state:a,dispatch:null,action:t,pending:null},l.queue=f,s=cM.bind(null,ft,f,p,s),f.dispatch=s,l.memoizedState=t,[a,s,!1]}function Ig(t){var a=ln();return zg(a,Vt,t)}function zg(t,a,s){if(a=zf(t,a,Og)[0],t=uu(ga)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=zo(a)}catch(S){throw S===ys?$l:S}else l=a;a=ln();var f=a.queue,p=f.dispatch;return s!==a.memoizedState&&(ft.flags|=2048,Ts(9,{destroy:void 0},fM.bind(null,f,s),null)),[l,p,t]}function fM(t,a){t.action=a}function Fg(t){var a=ln(),s=Vt;if(s!==null)return zg(a,s,t);ln(),a=a.memoizedState,s=ln();var l=s.queue.dispatch;return s.memoizedState=t,[a,l,!1]}function Ts(t,a,s,l){return t={tag:t,create:s,deps:l,inst:a,next:null},a=ft.updateQueue,a===null&&(a=ou(),ft.updateQueue=a),s=a.lastEffect,s===null?a.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,a.lastEffect=t),t}function Bg(){return ln().memoizedState}function cu(t,a,s,l){var f=Vn();ft.flags|=t,f.memoizedState=Ts(1|a,{destroy:void 0},s,l===void 0?null:l)}function fu(t,a,s,l){var f=ln();l=l===void 0?null:l;var p=f.memoizedState.inst;Vt!==null&&l!==null&&Uf(l,Vt.memoizedState.deps)?f.memoizedState=Ts(a,p,s,l):(ft.flags|=t,f.memoizedState=Ts(1|a,p,s,l))}function kg(t,a){cu(8390656,8,t,a)}function Hf(t,a){fu(2048,8,t,a)}function hM(t){ft.flags|=4;var a=ft.updateQueue;if(a===null)a=ou(),ft.updateQueue=a,a.events=[t];else{var s=a.events;s===null?a.events=[t]:s.push(t)}}function Hg(t){var a=ln().memoizedState;return hM({ref:a,nextImpl:t}),function(){if((Pt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}function Gg(t,a){return fu(4,2,t,a)}function Vg(t,a){return fu(4,4,t,a)}function Xg(t,a){if(typeof a=="function"){t=t();var s=a(t);return function(){typeof s=="function"?s():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Wg(t,a,s){s=s!=null?s.concat([t]):null,fu(4,4,Xg.bind(null,a,t),s)}function Gf(){}function qg(t,a){var s=ln();a=a===void 0?null:a;var l=s.memoizedState;return a!==null&&Uf(a,l[1])?l[0]:(s.memoizedState=[t,a],t)}function jg(t,a){var s=ln();a=a===void 0?null:a;var l=s.memoizedState;if(a!==null&&Uf(a,l[1]))return l[0];if(l=t(),Fr){Ie(!0);try{t()}finally{Ie(!1)}}return s.memoizedState=[l,a],l}function Vf(t,a,s){return s===void 0||(ma&1073741824)!==0&&(bt&261930)===0?t.memoizedState=a:(t.memoizedState=s,t=Y0(),ft.lanes|=t,nr|=t,s)}function Yg(t,a,s,l){return si(s,a)?s:Ms.current!==null?(t=Vf(t,s,l),si(t,a)||(_n=!0),t):(ma&42)===0||(ma&1073741824)!==0&&(bt&261930)===0?(_n=!0,t.memoizedState=s):(t=Y0(),ft.lanes|=t,nr|=t,a)}function Zg(t,a,s,l,f){var p=H.p;H.p=p!==0&&8>p?p:8;var S=I.T,w={};I.T=w,qf(t,!1,a,s);try{var W=f(),ue=I.S;if(ue!==null&&ue(w,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var ve=oM(W,l);Fo(t,a,ve,hi(t))}else Fo(t,a,l,hi(t))}catch(Se){Fo(t,a,{then:function(){},status:"rejected",reason:Se},hi())}finally{H.p=p,S!==null&&w.types!==null&&(S.types=w.types),I.T=S}}function dM(){}function Xf(t,a,s,l){if(t.tag!==5)throw Error(r(476));var f=Kg(t).queue;Zg(t,f,a,le,s===null?dM:function(){return Qg(t),s(l)})}function Kg(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:le},next:null};var s={};return a.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:s},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function Qg(t){var a=Kg(t);a.next===null&&(a=t.alternate.memoizedState),Fo(t,a.next.queue,{},hi())}function Wf(){return Dn(tl)}function Jg(){return ln().memoizedState}function $g(){return ln().memoizedState}function pM(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var s=hi();t=Ka(s);var l=Qa(a,t,s);l!==null&&(Qn(l,a,s),No(l,a,s)),a={cache:yf()},t.payload=a;return}a=a.return}}function mM(t,a,s){var l=hi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},hu(t)?t0(a,s):(s=uf(t,a,s,l),s!==null&&(Qn(s,t,l),n0(s,a,l)))}function e0(t,a,s){var l=hi();Fo(t,a,s,l)}function Fo(t,a,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(hu(t))t0(a,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=a.lastRenderedReducer,p!==null))try{var S=a.lastRenderedState,w=p(S,s);if(f.hasEagerState=!0,f.eagerState=w,si(w,S))return ql(t,a,f,0),Yt===null&&Wl(),!1}catch{}if(s=uf(t,a,f,l),s!==null)return Qn(s,t,l),n0(s,a,l),!0}return!1}function qf(t,a,s,l){if(l={lane:2,revertLane:Eh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},hu(t)){if(a)throw Error(r(479))}else a=uf(t,s,l,2),a!==null&&Qn(a,t,2)}function hu(t){var a=t.alternate;return t===ft||a!==null&&a===ft}function t0(t,a){bs=ru=!0;var s=t.pending;s===null?a.next=a:(a.next=s.next,s.next=a),t.pending=a}function n0(t,a,s){if((s&4194048)!==0){var l=a.lanes;l&=t.pendingLanes,s|=l,a.lanes=s,ns(t,s)}}var Bo={readContext:Dn,use:lu,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};Bo.useEffectEvent=rn;var i0={readContext:Dn,use:lu,useCallback:function(t,a){return Vn().memoizedState=[t,a===void 0?null:a],t},useContext:Dn,useEffect:kg,useImperativeHandle:function(t,a,s){s=s!=null?s.concat([t]):null,cu(4194308,4,Xg.bind(null,a,t),s)},useLayoutEffect:function(t,a){return cu(4194308,4,t,a)},useInsertionEffect:function(t,a){cu(4,2,t,a)},useMemo:function(t,a){var s=Vn();a=a===void 0?null:a;var l=t();if(Fr){Ie(!0);try{t()}finally{Ie(!1)}}return s.memoizedState=[l,a],l},useReducer:function(t,a,s){var l=Vn();if(s!==void 0){var f=s(a);if(Fr){Ie(!0);try{s(a)}finally{Ie(!1)}}}else f=a;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=mM.bind(null,ft,t),[l.memoizedState,t]},useRef:function(t){var a=Vn();return t={current:t},a.memoizedState=t},useState:function(t){t=Bf(t);var a=t.queue,s=e0.bind(null,ft,a);return a.dispatch=s,[t.memoizedState,s]},useDebugValue:Gf,useDeferredValue:function(t,a){var s=Vn();return Vf(s,t,a)},useTransition:function(){var t=Bf(!1);return t=Zg.bind(null,ft,t.queue,!0,!1),Vn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,s){var l=ft,f=Vn();if(Tt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=a(),Yt===null)throw Error(r(349));(bt&127)!==0||Eg(l,a,s)}f.memoizedState=s;var p={value:s,getSnapshot:a};return f.queue=p,kg(Ag.bind(null,l,p,t),[t]),l.flags|=2048,Ts(9,{destroy:void 0},Tg.bind(null,l,p,s,a),null),s},useId:function(){var t=Vn(),a=Yt.identifierPrefix;if(Tt){var s=ji,l=qi;s=(l&~(1<<32-Ue(l)-1)).toString(32)+s,a="_"+a+"R_"+s,s=su++,0<s&&(a+="H"+s.toString(32)),a+="_"}else s=lM++,a="_"+a+"r_"+s.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:Wf,useFormState:Pg,useActionState:Pg,useOptimistic:function(t){var a=Vn();a.memoizedState=a.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=s,a=qf.bind(null,ft,!0,s),s.dispatch=a,[t,a]},useMemoCache:If,useCacheRefresh:function(){return Vn().memoizedState=pM.bind(null,ft)},useEffectEvent:function(t){var a=Vn(),s={impl:t};return a.memoizedState=s,function(){if((Pt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},jf={readContext:Dn,use:lu,useCallback:qg,useContext:Dn,useEffect:Hf,useImperativeHandle:Wg,useInsertionEffect:Gg,useLayoutEffect:Vg,useMemo:jg,useReducer:uu,useRef:Bg,useState:function(){return uu(ga)},useDebugValue:Gf,useDeferredValue:function(t,a){var s=ln();return Yg(s,Vt.memoizedState,t,a)},useTransition:function(){var t=uu(ga)[0],a=ln().memoizedState;return[typeof t=="boolean"?t:zo(t),a]},useSyncExternalStore:bg,useId:Jg,useHostTransitionStatus:Wf,useFormState:Ig,useActionState:Ig,useOptimistic:function(t,a){var s=ln();return Rg(s,Vt,t,a)},useMemoCache:If,useCacheRefresh:$g};jf.useEffectEvent=Hg;var a0={readContext:Dn,use:lu,useCallback:qg,useContext:Dn,useEffect:Hf,useImperativeHandle:Wg,useInsertionEffect:Gg,useLayoutEffect:Vg,useMemo:jg,useReducer:Ff,useRef:Bg,useState:function(){return Ff(ga)},useDebugValue:Gf,useDeferredValue:function(t,a){var s=ln();return Vt===null?Vf(s,t,a):Yg(s,Vt.memoizedState,t,a)},useTransition:function(){var t=Ff(ga)[0],a=ln().memoizedState;return[typeof t=="boolean"?t:zo(t),a]},useSyncExternalStore:bg,useId:Jg,useHostTransitionStatus:Wf,useFormState:Fg,useActionState:Fg,useOptimistic:function(t,a){var s=ln();return Vt!==null?Rg(s,Vt,t,a):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:If,useCacheRefresh:$g};a0.useEffectEvent=Hg;function Yf(t,a,s,l){a=t.memoizedState,s=s(l,a),s=s==null?a:v({},a,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Zf={enqueueSetState:function(t,a,s){t=t._reactInternals;var l=hi(),f=Ka(l);f.payload=a,s!=null&&(f.callback=s),a=Qa(t,f,l),a!==null&&(Qn(a,t,l),No(a,t,l))},enqueueReplaceState:function(t,a,s){t=t._reactInternals;var l=hi(),f=Ka(l);f.tag=1,f.payload=a,s!=null&&(f.callback=s),a=Qa(t,f,l),a!==null&&(Qn(a,t,l),No(a,t,l))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var s=hi(),l=Ka(s);l.tag=2,a!=null&&(l.callback=a),a=Qa(t,l,s),a!==null&&(Qn(a,t,s),No(a,t,s))}};function r0(t,a,s,l,f,p,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,S):a.prototype&&a.prototype.isPureReactComponent?!To(s,l)||!To(f,p):!0}function s0(t,a,s,l){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,l),a.state!==t&&Zf.enqueueReplaceState(a,a.state,null)}function Br(t,a){var s=a;if("ref"in a){s={};for(var l in a)l!=="ref"&&(s[l]=a[l])}if(t=t.defaultProps){s===a&&(s=v({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function o0(t){Xl(t)}function l0(t){console.error(t)}function u0(t){Xl(t)}function du(t,a){try{var s=t.onUncaughtError;s(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function c0(t,a,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Kf(t,a,s){return s=Ka(s),s.tag=3,s.payload={element:null},s.callback=function(){du(t,a)},s}function f0(t){return t=Ka(t),t.tag=3,t}function h0(t,a,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;t.payload=function(){return f(p)},t.callback=function(){c0(a,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){c0(a,s,l),typeof f!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function gM(t,a,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=s.alternate,a!==null&&_s(a,s,f,!0),s=li.current,s!==null){switch(s.tag){case 31:case 13:return bi===null?Tu():s.alternate===null&&sn===0&&(sn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===eu?s.flags|=16384:(a=s.updateQueue,a===null?s.updateQueue=new Set([l]):a.add(l),Sh(t,l,f)),!1;case 22:return s.flags|=65536,l===eu?s.flags|=16384:(a=s.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=a):(s=a.retryQueue,s===null?a.retryQueue=new Set([l]):s.add(l)),Sh(t,l,f)),!1}throw Error(r(435,s.tag))}return Sh(t,l,f),Tu(),!1}if(Tt)return a=li.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=f,l!==mf&&(t=Error(r(422),{cause:l}),wo(xi(t,s)))):(l!==mf&&(a=Error(r(423),{cause:l}),wo(xi(a,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=xi(l,s),f=Kf(t.stateNode,l,f),Af(t,f),sn!==4&&(sn=2)),!1;var p=Error(r(520),{cause:l});if(p=xi(p,s),jo===null?jo=[p]:jo.push(p),sn!==4&&(sn=2),a===null)return!0;l=xi(l,s),s=a;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Kf(s.stateNode,l,t),Af(s,t),!1;case 1:if(a=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ir===null||!ir.has(p))))return s.flags|=65536,f&=-f,s.lanes|=f,f=f0(f),h0(f,t,s,l),Af(s,f),!1}s=s.return}while(s!==null);return!1}var Qf=Error(r(461)),_n=!1;function Un(t,a,s,l){a.child=t===null?gg(a,null,s,l):zr(a,t.child,s,l)}function d0(t,a,s,l,f){s=s.render;var p=a.ref;if("ref"in l){var S={};for(var w in l)w!=="ref"&&(S[w]=l[w])}else S=l;return Nr(a),l=Lf(t,a,s,S,p,f),w=Nf(),t!==null&&!_n?(Of(t,a,f),_a(t,a,f)):(Tt&&w&&df(a),a.flags|=1,Un(t,a,l,f),a.child)}function p0(t,a,s,l,f){if(t===null){var p=s.type;return typeof p=="function"&&!cf(p)&&p.defaultProps===void 0&&s.compare===null?(a.tag=15,a.type=p,m0(t,a,p,l,f)):(t=Yl(s.type,null,l,a,a.mode,f),t.ref=a.ref,t.return=a,a.child=t)}if(p=t.child,!rh(t,f)){var S=p.memoizedProps;if(s=s.compare,s=s!==null?s:To,s(S,l)&&t.ref===a.ref)return _a(t,a,f)}return a.flags|=1,t=fa(p,l),t.ref=a.ref,t.return=a,a.child=t}function m0(t,a,s,l,f){if(t!==null){var p=t.memoizedProps;if(To(p,l)&&t.ref===a.ref)if(_n=!1,a.pendingProps=l=p,rh(t,f))(t.flags&131072)!==0&&(_n=!0);else return a.lanes=t.lanes,_a(t,a,f)}return Jf(t,a,s,l,f)}function g0(t,a,s,l){var f=l.children,p=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,t!==null){for(l=a.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,a.child=null;return _0(t,a,p,s,l)}if((s&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&Jl(a,p!==null?p.cachePool:null),p!==null?xg(a,p):wf(),yg(a);else return l=a.lanes=536870912,_0(t,a,p!==null?p.baseLanes|s:s,s,l)}else p!==null?(Jl(a,p.cachePool),xg(a,p),$a(),a.memoizedState=null):(t!==null&&Jl(a,null),wf(),$a());return Un(t,a,f,s),a.child}function ko(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function _0(t,a,s,l,f){var p=Mf();return p=p===null?null:{parent:mn._currentValue,pool:p},a.memoizedState={baseLanes:s,cachePool:p},t!==null&&Jl(a,null),wf(),yg(a),t!==null&&_s(t,a,l,!0),a.childLanes=f,null}function pu(t,a){return a=gu({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function v0(t,a,s){return zr(a,t.child,null,s),t=pu(a,a.pendingProps),t.flags|=2,ui(a),a.memoizedState=null,t}function _M(t,a,s){var l=a.pendingProps,f=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(Tt){if(l.mode==="hidden")return t=pu(a,l),a.lanes=536870912,ko(null,t);if(Df(a),(t=Jt)?(t=D_(t,Mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:qi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},s=tg(t),s.return=a,a.child=s,Rn=a,Jt=null)):t=null,t===null)throw ja(a);return a.lanes=536870912,null}return pu(a,l)}var p=t.memoizedState;if(p!==null){var S=p.dehydrated;if(Df(a),f)if(a.flags&256)a.flags&=-257,a=v0(t,a,s);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(r(558));else if(_n||_s(t,a,s,!1),f=(s&t.childLanes)!==0,_n||f){if(l=Yt,l!==null&&(S=Nl(l,s),S!==0&&S!==p.retryLane))throw p.retryLane=S,Rr(t,S),Qn(l,t,S),Qf;Tu(),a=v0(t,a,s)}else t=p.treeContext,Jt=Ei(S.nextSibling),Rn=a,Tt=!0,qa=null,Mi=!1,t!==null&&ag(a,t),a=pu(a,l),a.flags|=4096;return a}return t=fa(t.child,{mode:l.mode,children:l.children}),t.ref=a.ref,a.child=t,t.return=a,t}function mu(t,a){var s=a.ref;if(s===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(a.flags|=4194816)}}function Jf(t,a,s,l,f){return Nr(a),s=Lf(t,a,s,l,void 0,f),l=Nf(),t!==null&&!_n?(Of(t,a,f),_a(t,a,f)):(Tt&&l&&df(a),a.flags|=1,Un(t,a,s,f),a.child)}function x0(t,a,s,l,f,p){return Nr(a),a.updateQueue=null,s=Mg(a,l,s,f),Sg(t),l=Nf(),t!==null&&!_n?(Of(t,a,p),_a(t,a,p)):(Tt&&l&&df(a),a.flags|=1,Un(t,a,s,p),a.child)}function y0(t,a,s,l,f){if(Nr(a),a.stateNode===null){var p=ds,S=s.contextType;typeof S=="object"&&S!==null&&(p=Dn(S)),p=new s(l,p),a.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Zf,a.stateNode=p,p._reactInternals=a,p=a.stateNode,p.props=l,p.state=a.memoizedState,p.refs={},Ef(a),S=s.contextType,p.context=typeof S=="object"&&S!==null?Dn(S):ds,p.state=a.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Yf(a,s,S,l),p.state=a.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(S=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),S!==p.state&&Zf.enqueueReplaceState(p,p.state,null),Po(a,l,p,f),Oo(),p.state=a.memoizedState),typeof p.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(t===null){p=a.stateNode;var w=a.memoizedProps,W=Br(s,w);p.props=W;var ue=p.context,ve=s.contextType;S=ds,typeof ve=="object"&&ve!==null&&(S=Dn(ve));var Se=s.getDerivedStateFromProps;ve=typeof Se=="function"||typeof p.getSnapshotBeforeUpdate=="function",w=a.pendingProps!==w,ve||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w||ue!==S)&&s0(a,p,l,S),Za=!1;var he=a.memoizedState;p.state=he,Po(a,l,p,f),Oo(),ue=a.memoizedState,w||he!==ue||Za?(typeof Se=="function"&&(Yf(a,s,Se,l),ue=a.memoizedState),(W=Za||r0(a,s,W,l,he,ue,S))?(ve||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(a.flags|=4194308)):(typeof p.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=ue),p.props=l,p.state=ue,p.context=S,l=W):(typeof p.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{p=a.stateNode,Tf(t,a),S=a.memoizedProps,ve=Br(s,S),p.props=ve,Se=a.pendingProps,he=p.context,ue=s.contextType,W=ds,typeof ue=="object"&&ue!==null&&(W=Dn(ue)),w=s.getDerivedStateFromProps,(ue=typeof w=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==Se||he!==W)&&s0(a,p,l,W),Za=!1,he=a.memoizedState,p.state=he,Po(a,l,p,f),Oo();var me=a.memoizedState;S!==Se||he!==me||Za||t!==null&&t.dependencies!==null&&Kl(t.dependencies)?(typeof w=="function"&&(Yf(a,s,w,l),me=a.memoizedState),(ve=Za||r0(a,s,ve,l,he,me,W)||t!==null&&t.dependencies!==null&&Kl(t.dependencies))?(ue||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,me,W),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,me,W)),typeof p.componentDidUpdate=="function"&&(a.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&he===t.memoizedState||(a.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&he===t.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=me),p.props=l,p.state=me,p.context=W,l=ve):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&he===t.memoizedState||(a.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&he===t.memoizedState||(a.flags|=1024),l=!1)}return p=l,mu(t,a),l=(a.flags&128)!==0,p||l?(p=a.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),a.flags|=1,t!==null&&l?(a.child=zr(a,t.child,null,f),a.child=zr(a,null,s,f)):Un(t,a,s,f),a.memoizedState=p.state,t=a.child):t=_a(t,a,f),t}function S0(t,a,s,l){return Ur(),a.flags|=256,Un(t,a,s,l),a.child}var $f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function eh(t){return{baseLanes:t,cachePool:cg()}}function th(t,a,s){return t=t!==null?t.childLanes&~s:0,a&&(t|=fi),t}function M0(t,a,s){var l=a.pendingProps,f=!1,p=(a.flags&128)!==0,S;if((S=p)||(S=t!==null&&t.memoizedState===null?!1:(on.current&2)!==0),S&&(f=!0,a.flags&=-129),S=(a.flags&32)!==0,a.flags&=-33,t===null){if(Tt){if(f?Ja(a):$a(),(t=Jt)?(t=D_(t,Mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:qi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},s=tg(t),s.return=a,a.child=s,Rn=a,Jt=null)):t=null,t===null)throw ja(a);return zh(t)?a.lanes=32:a.lanes=536870912,null}var w=l.children;return l=l.fallback,f?($a(),f=a.mode,w=gu({mode:"hidden",children:w},f),l=Dr(l,f,s,null),w.return=a,l.return=a,w.sibling=l,a.child=w,l=a.child,l.memoizedState=eh(s),l.childLanes=th(t,S,s),a.memoizedState=$f,ko(null,l)):(Ja(a),nh(a,w))}var W=t.memoizedState;if(W!==null&&(w=W.dehydrated,w!==null)){if(p)a.flags&256?(Ja(a),a.flags&=-257,a=ih(t,a,s)):a.memoizedState!==null?($a(),a.child=t.child,a.flags|=128,a=null):($a(),w=l.fallback,f=a.mode,l=gu({mode:"visible",children:l.children},f),w=Dr(w,f,s,null),w.flags|=2,l.return=a,w.return=a,l.sibling=w,a.child=l,zr(a,t.child,null,s),l=a.child,l.memoizedState=eh(s),l.childLanes=th(t,S,s),a.memoizedState=$f,a=ko(null,l));else if(Ja(a),zh(w)){if(S=w.nextSibling&&w.nextSibling.dataset,S)var ue=S.dgst;S=ue,l=Error(r(419)),l.stack="",l.digest=S,wo({value:l,source:null,stack:null}),a=ih(t,a,s)}else if(_n||_s(t,a,s,!1),S=(s&t.childLanes)!==0,_n||S){if(S=Yt,S!==null&&(l=Nl(S,s),l!==0&&l!==W.retryLane))throw W.retryLane=l,Rr(t,l),Qn(S,t,l),Qf;Ih(w)||Tu(),a=ih(t,a,s)}else Ih(w)?(a.flags|=192,a.child=t.child,a=null):(t=W.treeContext,Jt=Ei(w.nextSibling),Rn=a,Tt=!0,qa=null,Mi=!1,t!==null&&ag(a,t),a=nh(a,l.children),a.flags|=4096);return a}return f?($a(),w=l.fallback,f=a.mode,W=t.child,ue=W.sibling,l=fa(W,{mode:"hidden",children:l.children}),l.subtreeFlags=W.subtreeFlags&65011712,ue!==null?w=fa(ue,w):(w=Dr(w,f,s,null),w.flags|=2),w.return=a,l.return=a,l.sibling=w,a.child=l,ko(null,l),l=a.child,w=t.child.memoizedState,w===null?w=eh(s):(f=w.cachePool,f!==null?(W=mn._currentValue,f=f.parent!==W?{parent:W,pool:W}:f):f=cg(),w={baseLanes:w.baseLanes|s,cachePool:f}),l.memoizedState=w,l.childLanes=th(t,S,s),a.memoizedState=$f,ko(t.child,l)):(Ja(a),s=t.child,t=s.sibling,s=fa(s,{mode:"visible",children:l.children}),s.return=a,s.sibling=null,t!==null&&(S=a.deletions,S===null?(a.deletions=[t],a.flags|=16):S.push(t)),a.child=s,a.memoizedState=null,s)}function nh(t,a){return a=gu({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function gu(t,a){return t=oi(22,t,null,a),t.lanes=0,t}function ih(t,a,s){return zr(a,t.child,null,s),t=nh(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function b0(t,a,s){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a),vf(t.return,a,s)}function ah(t,a,s,l,f,p){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:p}:(S.isBackwards=a,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=p)}function E0(t,a,s){var l=a.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var S=on.current,w=(S&2)!==0;if(w?(S=S&1|2,a.flags|=128):S&=1,L(on,S),Un(t,a,l,s),l=Tt?Co:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&b0(t,s,a);else if(t.tag===19)b0(t,s,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break e;for(;t.sibling===null;){if(t.return===null||t.return===a)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=a.child,f=null;s!==null;)t=s.alternate,t!==null&&au(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=a.child,a.child=null):(f=s.sibling,s.sibling=null),ah(a,!1,f,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=a.child,a.child=null;f!==null;){if(t=f.alternate,t!==null&&au(t)===null){a.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}ah(a,!0,s,null,p,l);break;case"together":ah(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function _a(t,a,s){if(t!==null&&(a.dependencies=t.dependencies),nr|=a.lanes,(s&a.childLanes)===0)if(t!==null){if(_s(t,a,s,!1),(s&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(r(153));if(a.child!==null){for(t=a.child,s=fa(t,t.pendingProps),a.child=s,s.return=a;t.sibling!==null;)t=t.sibling,s=s.sibling=fa(t,t.pendingProps),s.return=a;s.sibling=null}return a.child}function rh(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&Kl(t)))}function vM(t,a,s){switch(a.tag){case 3:Ee(a,a.stateNode.containerInfo),Ya(a,mn,t.memoizedState.cache),Ur();break;case 27:case 5:Ze(a);break;case 4:Ee(a,a.stateNode.containerInfo);break;case 10:Ya(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Df(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(Ja(a),a.flags|=128,null):(s&a.child.childLanes)!==0?M0(t,a,s):(Ja(a),t=_a(t,a,s),t!==null?t.sibling:null);Ja(a);break;case 19:var f=(t.flags&128)!==0;if(l=(s&a.childLanes)!==0,l||(_s(t,a,s,!1),l=(s&a.childLanes)!==0),f){if(l)return E0(t,a,s);a.flags|=128}if(f=a.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),L(on,on.current),l)break;return null;case 22:return a.lanes=0,g0(t,a,s,a.pendingProps);case 24:Ya(a,mn,t.memoizedState.cache)}return _a(t,a,s)}function T0(t,a,s){if(t!==null)if(t.memoizedProps!==a.pendingProps)_n=!0;else{if(!rh(t,s)&&(a.flags&128)===0)return _n=!1,vM(t,a,s);_n=(t.flags&131072)!==0}else _n=!1,Tt&&(a.flags&1048576)!==0&&ig(a,Co,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(t=Pr(a.elementType),a.type=t,typeof t=="function")cf(t)?(l=Br(t,l),a.tag=1,a=y0(null,a,t,l,s)):(a.tag=0,a=Jf(null,a,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===P){a.tag=11,a=d0(null,a,t,l,s);break e}else if(f===z){a.tag=14,a=p0(null,a,t,l,s);break e}}throw a=ee(t)||t,Error(r(306,a,""))}}return a;case 0:return Jf(t,a,a.type,a.pendingProps,s);case 1:return l=a.type,f=Br(l,a.pendingProps),y0(t,a,l,f,s);case 3:e:{if(Ee(a,a.stateNode.containerInfo),t===null)throw Error(r(387));l=a.pendingProps;var p=a.memoizedState;f=p.element,Tf(t,a),Po(a,l,null,s);var S=a.memoizedState;if(l=S.cache,Ya(a,mn,l),l!==p.cache&&xf(a,[mn],s,!0),Oo(),l=S.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:S.cache},a.updateQueue.baseState=p,a.memoizedState=p,a.flags&256){a=S0(t,a,l,s);break e}else if(l!==f){f=xi(Error(r(424)),a),wo(f),a=S0(t,a,l,s);break e}else for(t=a.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Jt=Ei(t.firstChild),Rn=a,Tt=!0,qa=null,Mi=!0,s=gg(a,null,l,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Ur(),l===f){a=_a(t,a,s);break e}Un(t,a,l,s)}a=a.child}return a;case 26:return mu(t,a),t===null?(s=I_(a.type,null,a.pendingProps,null))?a.memoizedState=s:Tt||(s=a.type,t=a.pendingProps,l=Lu(ae.current).createElement(s),l[hn]=a,l[Sn]=t,Ln(l,s,t),Z(l),a.stateNode=l):a.memoizedState=I_(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return Ze(a),t===null&&Tt&&(l=a.stateNode=N_(a.type,a.pendingProps,ae.current),Rn=a,Mi=!0,f=Jt,or(a.type)?(Fh=f,Jt=Ei(l.firstChild)):Jt=f),Un(t,a,a.pendingProps.children,s),mu(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&Tt&&((f=l=Jt)&&(l=YM(l,a.type,a.pendingProps,Mi),l!==null?(a.stateNode=l,Rn=a,Jt=Ei(l.firstChild),Mi=!1,f=!0):f=!1),f||ja(a)),Ze(a),f=a.type,p=a.pendingProps,S=t!==null?t.memoizedProps:null,l=p.children,Nh(f,p)?l=null:S!==null&&Nh(f,S)&&(a.flags|=32),a.memoizedState!==null&&(f=Lf(t,a,uM,null,null,s),tl._currentValue=f),mu(t,a),Un(t,a,l,s),a.child;case 6:return t===null&&Tt&&((t=s=Jt)&&(s=ZM(s,a.pendingProps,Mi),s!==null?(a.stateNode=s,Rn=a,Jt=null,t=!0):t=!1),t||ja(a)),null;case 13:return M0(t,a,s);case 4:return Ee(a,a.stateNode.containerInfo),l=a.pendingProps,t===null?a.child=zr(a,null,l,s):Un(t,a,l,s),a.child;case 11:return d0(t,a,a.type,a.pendingProps,s);case 7:return Un(t,a,a.pendingProps,s),a.child;case 8:return Un(t,a,a.pendingProps.children,s),a.child;case 12:return Un(t,a,a.pendingProps.children,s),a.child;case 10:return l=a.pendingProps,Ya(a,a.type,l.value),Un(t,a,l.children,s),a.child;case 9:return f=a.type._context,l=a.pendingProps.children,Nr(a),f=Dn(f),l=l(f),a.flags|=1,Un(t,a,l,s),a.child;case 14:return p0(t,a,a.type,a.pendingProps,s);case 15:return m0(t,a,a.type,a.pendingProps,s);case 19:return E0(t,a,s);case 31:return _M(t,a,s);case 22:return g0(t,a,s,a.pendingProps);case 24:return Nr(a),l=Dn(mn),t===null?(f=Mf(),f===null&&(f=Yt,p=yf(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=s),f=p),a.memoizedState={parent:l,cache:f},Ef(a),Ya(a,mn,f)):((t.lanes&s)!==0&&(Tf(t,a),Po(a,null,null,s),Oo()),f=t.memoizedState,p=a.memoizedState,f.parent!==l?(f={parent:l,cache:l},a.memoizedState=f,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=f),Ya(a,mn,l)):(l=p.cache,Ya(a,mn,l),l!==f.cache&&xf(a,[mn],s,!0))),Un(t,a,a.pendingProps.children,s),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function va(t){t.flags|=4}function sh(t,a,s,l,f){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(J0())t.flags|=8192;else throw Ir=eu,bf}else t.flags&=-16777217}function A0(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!H_(a))if(J0())t.flags|=8192;else throw Ir=eu,bf}function _u(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?Ft():536870912,t.lanes|=a,Rs|=a)}function Ho(t,a){if(!Tt)switch(t.tailMode){case"hidden":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function $t(t){var a=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(a)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,a}function xM(t,a,s){var l=a.pendingProps;switch(pf(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(a),null;case 1:return $t(a),null;case 3:return s=a.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),pa(mn),Be(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(gs(a)?va(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,gf())),$t(a),null;case 26:var f=a.type,p=a.memoizedState;return t===null?(va(a),p!==null?($t(a),A0(a,p)):($t(a),sh(a,f,null,l,s))):p?p!==t.memoizedState?(va(a),$t(a),A0(a,p)):($t(a),a.flags&=-16777217):(t=t.memoizedProps,t!==l&&va(a),$t(a),sh(a,f,t,l,s)),null;case 27:if($e(a),s=ae.current,f=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==l&&va(a);else{if(!l){if(a.stateNode===null)throw Error(r(166));return $t(a),null}t=Ae.current,gs(a)?rg(a):(t=N_(f,l,s),a.stateNode=t,va(a))}return $t(a),null;case 5:if($e(a),f=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==l&&va(a);else{if(!l){if(a.stateNode===null)throw Error(r(166));return $t(a),null}if(p=Ae.current,gs(a))rg(a);else{var S=Lu(ae.current);switch(p){case 1:p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=S.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}p[hn]=a,p[Sn]=l;e:for(S=a.child;S!==null;){if(S.tag===5||S.tag===6)p.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===a)break e;for(;S.sibling===null;){if(S.return===null||S.return===a)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}a.stateNode=p;e:switch(Ln(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&va(a)}}return $t(a),sh(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,s),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==l&&va(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(r(166));if(t=ae.current,gs(a)){if(t=a.stateNode,s=a.memoizedProps,l=null,f=Rn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[hn]=a,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||M_(t.nodeValue,s)),t||ja(a,!0)}else t=Lu(t).createTextNode(l),t[hn]=a,a.stateNode=t}return $t(a),null;case 31:if(s=a.memoizedState,t===null||t.memoizedState!==null){if(l=gs(a),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[hn]=a}else Ur(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;$t(a),t=!1}else s=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return a.flags&256?(ui(a),a):(ui(a),null);if((a.flags&128)!==0)throw Error(r(558))}return $t(a),null;case 13:if(l=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=gs(a),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=a.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[hn]=a}else Ur(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;$t(a),f=!1}else f=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return a.flags&256?(ui(a),a):(ui(a),null)}return ui(a),(a.flags&128)!==0?(a.lanes=s,a):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=a.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),s!==t&&s&&(a.child.flags|=8192),_u(a,a.updateQueue),$t(a),null);case 4:return Be(),t===null&&wh(a.stateNode.containerInfo),$t(a),null;case 10:return pa(a.type),$t(a),null;case 19:if(Q(on),l=a.memoizedState,l===null)return $t(a),null;if(f=(a.flags&128)!==0,p=l.rendering,p===null)if(f)Ho(l,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(p=au(t),p!==null){for(a.flags|=128,Ho(l,!1),t=p.updateQueue,a.updateQueue=t,_u(a,t),a.subtreeFlags=0,t=s,s=a.child;s!==null;)eg(s,t),s=s.sibling;return L(on,on.current&1|2),Tt&&ha(a,l.treeForkCount),a.child}t=t.sibling}l.tail!==null&&E()>Mu&&(a.flags|=128,f=!0,Ho(l,!1),a.lanes=4194304)}else{if(!f)if(t=au(p),t!==null){if(a.flags|=128,f=!0,t=t.updateQueue,a.updateQueue=t,_u(a,t),Ho(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Tt)return $t(a),null}else 2*E()-l.renderingStartTime>Mu&&s!==536870912&&(a.flags|=128,f=!0,Ho(l,!1),a.lanes=4194304);l.isBackwards?(p.sibling=a.child,a.child=p):(t=l.last,t!==null?t.sibling=p:a.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=E(),t.sibling=null,s=on.current,L(on,f?s&1|2:s&1),Tt&&ha(a,l.treeForkCount),t):($t(a),null);case 22:case 23:return ui(a),Rf(),l=a.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(s&536870912)!==0&&(a.flags&128)===0&&($t(a),a.subtreeFlags&6&&(a.flags|=8192)):$t(a),s=a.updateQueue,s!==null&&_u(a,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==s&&(a.flags|=2048),t!==null&&Q(Or),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),pa(mn),$t(a),null;case 25:return null;case 30:return null}throw Error(r(156,a.tag))}function yM(t,a){switch(pf(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return pa(mn),Be(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return $e(a),null;case 31:if(a.memoizedState!==null){if(ui(a),a.alternate===null)throw Error(r(340));Ur()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(ui(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(r(340));Ur()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return Q(on),null;case 4:return Be(),null;case 10:return pa(a.type),null;case 22:case 23:return ui(a),Rf(),t!==null&&Q(Or),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return pa(mn),null;case 25:return null;default:return null}}function C0(t,a){switch(pf(a),a.tag){case 3:pa(mn),Be();break;case 26:case 27:case 5:$e(a);break;case 4:Be();break;case 31:a.memoizedState!==null&&ui(a);break;case 13:ui(a);break;case 19:Q(on);break;case 10:pa(a.type);break;case 22:case 23:ui(a),Rf(),t!==null&&Q(Or);break;case 24:pa(mn)}}function Go(t,a){try{var s=a.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var p=s.create,S=s.inst;l=p(),S.destroy=l}s=s.next}while(s!==f)}}catch(w){kt(a,a.return,w)}}function er(t,a,s){try{var l=a.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&t)===t){var S=l.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,f=a;var W=s,ue=w;try{ue()}catch(ve){kt(f,W,ve)}}}l=l.next}while(l!==p)}}catch(ve){kt(a,a.return,ve)}}function w0(t){var a=t.updateQueue;if(a!==null){var s=t.stateNode;try{vg(a,s)}catch(l){kt(t,t.return,l)}}}function R0(t,a,s){s.props=Br(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){kt(t,a,l)}}function Vo(t,a){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){kt(t,a,f)}}function Yi(t,a){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){kt(t,a,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){kt(t,a,f)}else s.current=null}function D0(t){var a=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){kt(t,t.return,f)}}function oh(t,a,s){try{var l=t.stateNode;GM(l,t.type,s,a),l[Sn]=a}catch(f){kt(t,t.return,f)}}function U0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&or(t.type)||t.tag===4}function lh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||U0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&or(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uh(t,a,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,a?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,a):(a=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,a.appendChild(t),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=ua));else if(l!==4&&(l===27&&or(t.type)&&(s=t.stateNode,a=null),t=t.child,t!==null))for(uh(t,a,s),t=t.sibling;t!==null;)uh(t,a,s),t=t.sibling}function vu(t,a,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,a?s.insertBefore(t,a):s.appendChild(t);else if(l!==4&&(l===27&&or(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(vu(t,a,s),t=t.sibling;t!==null;)vu(t,a,s),t=t.sibling}function L0(t){var a=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);Ln(a,l,s),a[hn]=t,a[Sn]=s}catch(p){kt(t,t.return,p)}}var xa=!1,vn=!1,ch=!1,N0=typeof WeakSet=="function"?WeakSet:Set,Cn=null;function SM(t,a){if(t=t.containerInfo,Uh=Bu,t=Wm(t),nf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var S=0,w=-1,W=-1,ue=0,ve=0,Se=t,he=null;t:for(;;){for(var me;Se!==s||f!==0&&Se.nodeType!==3||(w=S+f),Se!==p||l!==0&&Se.nodeType!==3||(W=S+l),Se.nodeType===3&&(S+=Se.nodeValue.length),(me=Se.firstChild)!==null;)he=Se,Se=me;for(;;){if(Se===t)break t;if(he===s&&++ue===f&&(w=S),he===p&&++ve===l&&(W=S),(me=Se.nextSibling)!==null)break;Se=he,he=Se.parentNode}Se=me}s=w===-1||W===-1?null:{start:w,end:W}}else s=null}s=s||{start:0,end:0}}else s=null;for(Lh={focusedElem:t,selectionRange:s},Bu=!1,Cn=a;Cn!==null;)if(a=Cn,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,Cn=t;else for(;Cn!==null;){switch(a=Cn,p=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=a,f=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var We=Br(s.type,f);t=l.getSnapshotBeforeUpdate(We,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(nt){kt(s,s.return,nt)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,s=t.nodeType,s===9)Ph(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ph(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=a.sibling,t!==null){t.return=a.return,Cn=t;break}Cn=a.return}}function O0(t,a,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Sa(t,s),l&4&&Go(5,s);break;case 1:if(Sa(t,s),l&4)if(t=s.stateNode,a===null)try{t.componentDidMount()}catch(S){kt(s,s.return,S)}else{var f=Br(s.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(f,a,t.__reactInternalSnapshotBeforeUpdate)}catch(S){kt(s,s.return,S)}}l&64&&w0(s),l&512&&Vo(s,s.return);break;case 3:if(Sa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(a=null,s.child!==null)switch(s.child.tag){case 27:case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}try{vg(t,a)}catch(S){kt(s,s.return,S)}}break;case 27:a===null&&l&4&&L0(s);case 26:case 5:Sa(t,s),a===null&&l&4&&D0(s),l&512&&Vo(s,s.return);break;case 12:Sa(t,s);break;case 31:Sa(t,s),l&4&&z0(t,s);break;case 13:Sa(t,s),l&4&&F0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=DM.bind(null,s),KM(t,s))));break;case 22:if(l=s.memoizedState!==null||xa,!l){a=a!==null&&a.memoizedState!==null||vn,f=xa;var p=vn;xa=l,(vn=a)&&!p?Ma(t,s,(s.subtreeFlags&8772)!==0):Sa(t,s),xa=f,vn=p}break;case 30:break;default:Sa(t,s)}}function P0(t){var a=t.alternate;a!==null&&(t.alternate=null,P0(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&_o(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var an=null,jn=!1;function ya(t,a,s){for(s=s.child;s!==null;)I0(t,a,s),s=s.sibling}function I0(t,a,s){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(be,s)}catch{}switch(s.tag){case 26:vn||Yi(s,a),ya(t,a,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:vn||Yi(s,a);var l=an,f=jn;or(s.type)&&(an=s.stateNode,jn=!1),ya(t,a,s),Jo(s.stateNode),an=l,jn=f;break;case 5:vn||Yi(s,a);case 6:if(l=an,f=jn,an=null,ya(t,a,s),an=l,jn=f,an!==null)if(jn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(s.stateNode)}catch(p){kt(s,a,p)}else try{an.removeChild(s.stateNode)}catch(p){kt(s,a,p)}break;case 18:an!==null&&(jn?(t=an,w_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),zs(t)):w_(an,s.stateNode));break;case 4:l=an,f=jn,an=s.stateNode.containerInfo,jn=!0,ya(t,a,s),an=l,jn=f;break;case 0:case 11:case 14:case 15:er(2,s,a),vn||er(4,s,a),ya(t,a,s);break;case 1:vn||(Yi(s,a),l=s.stateNode,typeof l.componentWillUnmount=="function"&&R0(s,a,l)),ya(t,a,s);break;case 21:ya(t,a,s);break;case 22:vn=(l=vn)||s.memoizedState!==null,ya(t,a,s),vn=l;break;default:ya(t,a,s)}}function z0(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{zs(t)}catch(s){kt(a,a.return,s)}}}function F0(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{zs(t)}catch(s){kt(a,a.return,s)}}function MM(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new N0),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new N0),a;default:throw Error(r(435,t.tag))}}function xu(t,a){var s=MM(t);a.forEach(function(l){if(!s.has(l)){s.add(l);var f=UM.bind(null,t,l);l.then(f,f)}})}function Yn(t,a){var s=a.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],p=t,S=a,w=S;e:for(;w!==null;){switch(w.tag){case 27:if(or(w.type)){an=w.stateNode,jn=!1;break e}break;case 5:an=w.stateNode,jn=!1;break e;case 3:case 4:an=w.stateNode.containerInfo,jn=!0;break e}w=w.return}if(an===null)throw Error(r(160));I0(p,S,f),an=null,jn=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)B0(a,t),a=a.sibling}var Ii=null;function B0(t,a){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yn(a,t),Zn(t),l&4&&(er(3,t,t.return),Go(3,t),er(5,t,t.return));break;case 1:Yn(a,t),Zn(t),l&512&&(vn||s===null||Yi(s,s.return)),l&64&&xa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ii;if(Yn(a,t),Zn(t),l&512&&(vn||s===null||Yi(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[Er]||p[hn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),Ln(p,l,s),p[hn]=t,Z(p),l=p;break e;case"link":var S=B_("link","href",f).get(l+(s.href||""));if(S){for(var w=0;w<S.length;w++)if(p=S[w],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(w,1);break t}}p=f.createElement(l),Ln(p,l,s),f.head.appendChild(p);break;case"meta":if(S=B_("meta","content",f).get(l+(s.content||""))){for(w=0;w<S.length;w++)if(p=S[w],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(w,1);break t}}p=f.createElement(l),Ln(p,l,s),f.head.appendChild(p);break;default:throw Error(r(468,l))}p[hn]=t,Z(p),l=p}t.stateNode=l}else k_(f,t.type,t.stateNode);else t.stateNode=F_(f,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?k_(f,t.type,t.stateNode):F_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&oh(t,t.memoizedProps,s.memoizedProps)}break;case 27:Yn(a,t),Zn(t),l&512&&(vn||s===null||Yi(s,s.return)),s!==null&&l&4&&oh(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Yn(a,t),Zn(t),l&512&&(vn||s===null||Yi(s,s.return)),t.flags&32){f=t.stateNode;try{Gn(f,"")}catch(We){kt(t,t.return,We)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,oh(t,f,s!==null?s.memoizedProps:f)),l&1024&&(ch=!0);break;case 6:if(Yn(a,t),Zn(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(We){kt(t,t.return,We)}}break;case 3:if(Pu=null,f=Ii,Ii=Nu(a.containerInfo),Yn(a,t),Ii=f,Zn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{zs(a.containerInfo)}catch(We){kt(t,t.return,We)}ch&&(ch=!1,k0(t));break;case 4:l=Ii,Ii=Nu(t.stateNode.containerInfo),Yn(a,t),Zn(t),Ii=l;break;case 12:Yn(a,t),Zn(t);break;case 31:Yn(a,t),Zn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,xu(t,l)));break;case 13:Yn(a,t),Zn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Su=E()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,xu(t,l)));break;case 22:f=t.memoizedState!==null;var W=s!==null&&s.memoizedState!==null,ue=xa,ve=vn;if(xa=ue||f,vn=ve||W,Yn(a,t),vn=ve,xa=ue,Zn(t),l&8192)e:for(a=t.stateNode,a._visibility=f?a._visibility&-2:a._visibility|1,f&&(s===null||W||xa||vn||kr(t)),s=null,a=t;;){if(a.tag===5||a.tag===26){if(s===null){W=s=a;try{if(p=W.stateNode,f)S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{w=W.stateNode;var Se=W.memoizedProps.style,he=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;w.style.display=he==null||typeof he=="boolean"?"":(""+he).trim()}}catch(We){kt(W,W.return,We)}}}else if(a.tag===6){if(s===null){W=a;try{W.stateNode.nodeValue=f?"":W.memoizedProps}catch(We){kt(W,W.return,We)}}}else if(a.tag===18){if(s===null){W=a;try{var me=W.stateNode;f?R_(me,!0):R_(W.stateNode,!1)}catch(We){kt(W,W.return,We)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;s===a&&(s=null),a=a.return}s===a&&(s=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,xu(t,s))));break;case 19:Yn(a,t),Zn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,xu(t,l)));break;case 30:break;case 21:break;default:Yn(a,t),Zn(t)}}function Zn(t){var a=t.flags;if(a&2){try{for(var s,l=t.return;l!==null;){if(U0(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,p=lh(t);vu(t,p,f);break;case 5:var S=s.stateNode;s.flags&32&&(Gn(S,""),s.flags&=-33);var w=lh(t);vu(t,w,S);break;case 3:case 4:var W=s.stateNode.containerInfo,ue=lh(t);uh(t,ue,W);break;default:throw Error(r(161))}}catch(ve){kt(t,t.return,ve)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function k0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;k0(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function Sa(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)O0(t,a.alternate,a),a=a.sibling}function kr(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:er(4,a,a.return),kr(a);break;case 1:Yi(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&R0(a,a.return,s),kr(a);break;case 27:Jo(a.stateNode);case 26:case 5:Yi(a,a.return),kr(a);break;case 22:a.memoizedState===null&&kr(a);break;case 30:kr(a);break;default:kr(a)}t=t.sibling}}function Ma(t,a,s){for(s=s&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,f=t,p=a,S=p.flags;switch(p.tag){case 0:case 11:case 15:Ma(f,p,s),Go(4,p);break;case 1:if(Ma(f,p,s),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ue){kt(l,l.return,ue)}if(l=p,f=l.updateQueue,f!==null){var w=l.stateNode;try{var W=f.shared.hiddenCallbacks;if(W!==null)for(f.shared.hiddenCallbacks=null,f=0;f<W.length;f++)_g(W[f],w)}catch(ue){kt(l,l.return,ue)}}s&&S&64&&w0(p),Vo(p,p.return);break;case 27:L0(p);case 26:case 5:Ma(f,p,s),s&&l===null&&S&4&&D0(p),Vo(p,p.return);break;case 12:Ma(f,p,s);break;case 31:Ma(f,p,s),s&&S&4&&z0(f,p);break;case 13:Ma(f,p,s),s&&S&4&&F0(f,p);break;case 22:p.memoizedState===null&&Ma(f,p,s),Vo(p,p.return);break;case 30:break;default:Ma(f,p,s)}a=a.sibling}}function fh(t,a){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Ro(s))}function hh(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Ro(t))}function zi(t,a,s,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)H0(t,a,s,l),a=a.sibling}function H0(t,a,s,l){var f=a.flags;switch(a.tag){case 0:case 11:case 15:zi(t,a,s,l),f&2048&&Go(9,a);break;case 1:zi(t,a,s,l);break;case 3:zi(t,a,s,l),f&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Ro(t)));break;case 12:if(f&2048){zi(t,a,s,l),t=a.stateNode;try{var p=a.memoizedProps,S=p.id,w=p.onPostCommit;typeof w=="function"&&w(S,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(W){kt(a,a.return,W)}}else zi(t,a,s,l);break;case 31:zi(t,a,s,l);break;case 13:zi(t,a,s,l);break;case 23:break;case 22:p=a.stateNode,S=a.alternate,a.memoizedState!==null?p._visibility&2?zi(t,a,s,l):Xo(t,a):p._visibility&2?zi(t,a,s,l):(p._visibility|=2,As(t,a,s,l,(a.subtreeFlags&10256)!==0||!1)),f&2048&&fh(S,a);break;case 24:zi(t,a,s,l),f&2048&&hh(a.alternate,a);break;default:zi(t,a,s,l)}}function As(t,a,s,l,f){for(f=f&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var p=t,S=a,w=s,W=l,ue=S.flags;switch(S.tag){case 0:case 11:case 15:As(p,S,w,W,f),Go(8,S);break;case 23:break;case 22:var ve=S.stateNode;S.memoizedState!==null?ve._visibility&2?As(p,S,w,W,f):Xo(p,S):(ve._visibility|=2,As(p,S,w,W,f)),f&&ue&2048&&fh(S.alternate,S);break;case 24:As(p,S,w,W,f),f&&ue&2048&&hh(S.alternate,S);break;default:As(p,S,w,W,f)}a=a.sibling}}function Xo(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var s=t,l=a,f=l.flags;switch(l.tag){case 22:Xo(s,l),f&2048&&fh(l.alternate,l);break;case 24:Xo(s,l),f&2048&&hh(l.alternate,l);break;default:Xo(s,l)}a=a.sibling}}var Wo=8192;function Cs(t,a,s){if(t.subtreeFlags&Wo)for(t=t.child;t!==null;)G0(t,a,s),t=t.sibling}function G0(t,a,s){switch(t.tag){case 26:Cs(t,a,s),t.flags&Wo&&t.memoizedState!==null&&lb(s,Ii,t.memoizedState,t.memoizedProps);break;case 5:Cs(t,a,s);break;case 3:case 4:var l=Ii;Ii=Nu(t.stateNode.containerInfo),Cs(t,a,s),Ii=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Wo,Wo=16777216,Cs(t,a,s),Wo=l):Cs(t,a,s));break;default:Cs(t,a,s)}}function V0(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function qo(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];Cn=l,W0(l,t)}V0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)X0(t),t=t.sibling}function X0(t){switch(t.tag){case 0:case 11:case 15:qo(t),t.flags&2048&&er(9,t,t.return);break;case 3:qo(t);break;case 12:qo(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,yu(t)):qo(t);break;default:qo(t)}}function yu(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];Cn=l,W0(l,t)}V0(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:er(8,a,a.return),yu(a);break;case 22:s=a.stateNode,s._visibility&2&&(s._visibility&=-3,yu(a));break;default:yu(a)}t=t.sibling}}function W0(t,a){for(;Cn!==null;){var s=Cn;switch(s.tag){case 0:case 11:case 15:er(8,s,a);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ro(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Cn=l;else e:for(s=t;Cn!==null;){l=Cn;var f=l.sibling,p=l.return;if(P0(l),l===s){Cn=null;break e}if(f!==null){f.return=p,Cn=f;break e}Cn=p}}}var bM={getCacheForType:function(t){var a=Dn(mn),s=a.data.get(t);return s===void 0&&(s=t(),a.data.set(t,s)),s},cacheSignal:function(){return Dn(mn).controller.signal}},EM=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Yt=null,yt=null,bt=0,Bt=0,ci=null,tr=!1,ws=!1,dh=!1,ba=0,sn=0,nr=0,Hr=0,ph=0,fi=0,Rs=0,jo=null,Kn=null,mh=!1,Su=0,q0=0,Mu=1/0,bu=null,ir=null,bn=0,ar=null,Ds=null,Ea=0,gh=0,_h=null,j0=null,Yo=0,vh=null;function hi(){return(Pt&2)!==0&&bt!==0?bt&-bt:I.T!==null?Eh():Wi()}function Y0(){if(fi===0)if((bt&536870912)===0||Tt){var t=De;De<<=1,(De&3932160)===0&&(De=262144),fi=t}else fi=536870912;return t=li.current,t!==null&&(t.flags|=32),fi}function Qn(t,a,s){(t===Yt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(Us(t,0),rr(t,bt,fi,!1)),Bn(t,s),((Pt&2)===0||t!==Yt)&&(t===Yt&&((Pt&2)===0&&(Hr|=s),sn===4&&rr(t,bt,fi,!1)),Zi(t))}function Z0(t,a,s){if((Pt&6)!==0)throw Error(r(327));var l=!s&&(a&127)===0&&(a&t.expiredLanes)===0||Ve(t,a),f=l?CM(t,a):yh(t,a,!0),p=l;do{if(f===0){ws&&!l&&rr(t,a,0,!1);break}else{if(s=t.current.alternate,p&&!TM(s)){f=yh(t,a,!1),p=!1;continue}if(f===2){if(p=a,t.errorRecoveryDisabledLanes&p)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){a=S;e:{var w=t;f=jo;var W=w.current.memoizedState.isDehydrated;if(W&&(Us(w,S).flags|=256),S=yh(w,S,!1),S!==2){if(dh&&!W){w.errorRecoveryDisabledLanes|=p,Hr|=p,f=4;break e}p=Kn,Kn=f,p!==null&&(Kn===null?Kn=p:Kn.push.apply(Kn,p))}f=S}if(p=!1,f!==2)continue}}if(f===1){Us(t,0),rr(t,a,0,!0);break}e:{switch(l=t,p=f,p){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a)break;case 6:rr(l,a,fi,!tr);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(f=Su+300-E(),10<f)){if(rr(l,a,fi,!tr),_e(l,0,!0)!==0)break e;Ea=a,l.timeoutHandle=A_(K0.bind(null,l,s,Kn,bu,mh,a,fi,Hr,Rs,tr,p,"Throttled",-0,0),f);break e}K0(l,s,Kn,bu,mh,a,fi,Hr,Rs,tr,p,null,-0,0)}}break}while(!0);Zi(t)}function K0(t,a,s,l,f,p,S,w,W,ue,ve,Se,he,me){if(t.timeoutHandle=-1,Se=a.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ua},G0(a,p,Se);var We=(p&62914560)===p?Su-E():(p&4194048)===p?q0-E():0;if(We=ub(Se,We),We!==null){Ea=p,t.cancelPendingCommit=We(a_.bind(null,t,a,p,s,l,f,S,w,W,ve,Se,null,he,me)),rr(t,p,S,!ue);return}}a_(t,a,p,s,l,f,S,w,W)}function TM(t){for(var a=t;;){var s=a.tag;if((s===0||s===11||s===15)&&a.flags&16384&&(s=a.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],p=f.getSnapshot;f=f.value;try{if(!si(p(),f))return!1}catch{return!1}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function rr(t,a,s,l){a&=~ph,a&=~Hr,t.suspendedLanes|=a,t.pingedLanes&=~a,l&&(t.warmLanes|=a),l=t.expirationTimes;for(var f=a;0<f;){var p=31-Ue(f),S=1<<p;l[p]=-1,f&=~S}s!==0&&go(t,s,a)}function Eu(){return(Pt&6)===0?(Zo(0),!1):!0}function xh(){if(yt!==null){if(Bt===0)var t=yt.return;else t=yt,da=Lr=null,Pf(t),Ss=null,Uo=0,t=yt;for(;t!==null;)C0(t.alternate,t),t=t.return;yt=null}}function Us(t,a){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,WM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ea=0,xh(),Yt=t,yt=s=fa(t.current,null),bt=a,Bt=0,ci=null,tr=!1,ws=Ve(t,a),dh=!1,Rs=fi=ph=Hr=nr=sn=0,Kn=jo=null,mh=!1,(a&8)!==0&&(a|=a&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=a;0<l;){var f=31-Ue(l),p=1<<f;a|=t[f],l&=~p}return ba=a,Wl(),s}function Q0(t,a){ft=null,I.H=Bo,a===ys||a===$l?(a=dg(),Bt=3):a===bf?(a=dg(),Bt=4):Bt=a===Qf?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ci=a,yt===null&&(sn=1,du(t,xi(a,t.current)))}function J0(){var t=li.current;return t===null?!0:(bt&4194048)===bt?bi===null:(bt&62914560)===bt||(bt&536870912)!==0?t===bi:!1}function $0(){var t=I.H;return I.H=Bo,t===null?Bo:t}function e_(){var t=I.A;return I.A=bM,t}function Tu(){sn=4,tr||(bt&4194048)!==bt&&li.current!==null||(ws=!0),(nr&134217727)===0&&(Hr&134217727)===0||Yt===null||rr(Yt,bt,fi,!1)}function yh(t,a,s){var l=Pt;Pt|=2;var f=$0(),p=e_();(Yt!==t||bt!==a)&&(bu=null,Us(t,a)),a=!1;var S=sn;e:do try{if(Bt!==0&&yt!==null){var w=yt,W=ci;switch(Bt){case 8:xh(),S=6;break e;case 3:case 2:case 9:case 6:li.current===null&&(a=!0);var ue=Bt;if(Bt=0,ci=null,Ls(t,w,W,ue),s&&ws){S=0;break e}break;default:ue=Bt,Bt=0,ci=null,Ls(t,w,W,ue)}}AM(),S=sn;break}catch(ve){Q0(t,ve)}while(!0);return a&&t.shellSuspendCounter++,da=Lr=null,Pt=l,I.H=f,I.A=p,yt===null&&(Yt=null,bt=0,Wl()),S}function AM(){for(;yt!==null;)t_(yt)}function CM(t,a){var s=Pt;Pt|=2;var l=$0(),f=e_();Yt!==t||bt!==a?(bu=null,Mu=E()+500,Us(t,a)):ws=Ve(t,a);e:do try{if(Bt!==0&&yt!==null){a=yt;var p=ci;t:switch(Bt){case 1:Bt=0,ci=null,Ls(t,a,p,1);break;case 2:case 9:if(fg(p)){Bt=0,ci=null,n_(a);break}a=function(){Bt!==2&&Bt!==9||Yt!==t||(Bt=7),Zi(t)},p.then(a,a);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:fg(p)?(Bt=0,ci=null,n_(a)):(Bt=0,ci=null,Ls(t,a,p,7));break;case 5:var S=null;switch(yt.tag){case 26:S=yt.memoizedState;case 5:case 27:var w=yt;if(S?H_(S):w.stateNode.complete){Bt=0,ci=null;var W=w.sibling;if(W!==null)yt=W;else{var ue=w.return;ue!==null?(yt=ue,Au(ue)):yt=null}break t}}Bt=0,ci=null,Ls(t,a,p,5);break;case 6:Bt=0,ci=null,Ls(t,a,p,6);break;case 8:xh(),sn=6;break e;default:throw Error(r(462))}}wM();break}catch(ve){Q0(t,ve)}while(!0);return da=Lr=null,I.H=l,I.A=f,Pt=s,yt!==null?0:(Yt=null,bt=0,Wl(),sn)}function wM(){for(;yt!==null&&!je();)t_(yt)}function t_(t){var a=T0(t.alternate,t,ba);t.memoizedProps=t.pendingProps,a===null?Au(t):yt=a}function n_(t){var a=t,s=a.alternate;switch(a.tag){case 15:case 0:a=x0(s,a,a.pendingProps,a.type,void 0,bt);break;case 11:a=x0(s,a,a.pendingProps,a.type.render,a.ref,bt);break;case 5:Pf(a);default:C0(s,a),a=yt=eg(a,ba),a=T0(s,a,ba)}t.memoizedProps=t.pendingProps,a===null?Au(t):yt=a}function Ls(t,a,s,l){da=Lr=null,Pf(a),Ss=null,Uo=0;var f=a.return;try{if(gM(t,f,a,s,bt)){sn=1,du(t,xi(s,t.current)),yt=null;return}}catch(p){if(f!==null)throw yt=f,p;sn=1,du(t,xi(s,t.current)),yt=null;return}a.flags&32768?(Tt||l===1?t=!0:ws||(bt&536870912)!==0?t=!1:(tr=t=!0,(l===2||l===9||l===3||l===6)&&(l=li.current,l!==null&&l.tag===13&&(l.flags|=16384))),i_(a,t)):Au(a)}function Au(t){var a=t;do{if((a.flags&32768)!==0){i_(a,tr);return}t=a.return;var s=xM(a.alternate,a,ba);if(s!==null){yt=s;return}if(a=a.sibling,a!==null){yt=a;return}yt=a=t}while(a!==null);sn===0&&(sn=5)}function i_(t,a){do{var s=yM(t.alternate,t);if(s!==null){s.flags&=32767,yt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!a&&(t=t.sibling,t!==null)){yt=t;return}yt=t=s}while(t!==null);sn=6,yt=null}function a_(t,a,s,l,f,p,S,w,W){t.cancelPendingCommit=null;do Cu();while(bn!==0);if((Pt&6)!==0)throw Error(r(327));if(a!==null){if(a===t.current)throw Error(r(177));if(p=a.lanes|a.childLanes,p|=lf,Ui(t,s,p,S,w,W),t===Yt&&(yt=Yt=null,bt=0),Ds=a,ar=t,Ea=s,gh=p,_h=f,j0=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,LM(ie,function(){return u_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,f=H.p,H.p=2,S=Pt,Pt|=4;try{SM(t,a,s)}finally{Pt=S,H.p=f,I.T=l}}bn=1,r_(),s_(),o_()}}function r_(){if(bn===1){bn=0;var t=ar,a=Ds,s=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var l=H.p;H.p=2;var f=Pt;Pt|=4;try{B0(a,t);var p=Lh,S=Wm(t.containerInfo),w=p.focusedElem,W=p.selectionRange;if(S!==w&&w&&w.ownerDocument&&Xm(w.ownerDocument.documentElement,w)){if(W!==null&&nf(w)){var ue=W.start,ve=W.end;if(ve===void 0&&(ve=ue),"selectionStart"in w)w.selectionStart=ue,w.selectionEnd=Math.min(ve,w.value.length);else{var Se=w.ownerDocument||document,he=Se&&Se.defaultView||window;if(he.getSelection){var me=he.getSelection(),We=w.textContent.length,nt=Math.min(W.start,We),Wt=W.end===void 0?nt:Math.min(W.end,We);!me.extend&&nt>Wt&&(S=Wt,Wt=nt,nt=S);var ne=Vm(w,nt),Y=Vm(w,Wt);if(ne&&Y&&(me.rangeCount!==1||me.anchorNode!==ne.node||me.anchorOffset!==ne.offset||me.focusNode!==Y.node||me.focusOffset!==Y.offset)){var oe=Se.createRange();oe.setStart(ne.node,ne.offset),me.removeAllRanges(),nt>Wt?(me.addRange(oe),me.extend(Y.node,Y.offset)):(oe.setEnd(Y.node,Y.offset),me.addRange(oe))}}}}for(Se=[],me=w;me=me.parentNode;)me.nodeType===1&&Se.push({element:me,left:me.scrollLeft,top:me.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Se.length;w++){var ye=Se[w];ye.element.scrollLeft=ye.left,ye.element.scrollTop=ye.top}}Bu=!!Uh,Lh=Uh=null}finally{Pt=f,H.p=l,I.T=s}}t.current=a,bn=2}}function s_(){if(bn===2){bn=0;var t=ar,a=Ds,s=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var l=H.p;H.p=2;var f=Pt;Pt|=4;try{O0(t,a.alternate,a)}finally{Pt=f,H.p=l,I.T=s}}bn=3}}function o_(){if(bn===4||bn===3){bn=0,F();var t=ar,a=Ds,s=Ea,l=j0;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?bn=5:(bn=0,Ds=ar=null,l_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(ir=null),as(s),a=a.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(be,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=I.T,f=H.p,H.p=2,I.T=null;try{for(var p=t.onRecoverableError,S=0;S<l.length;S++){var w=l[S];p(w.value,{componentStack:w.stack})}}finally{I.T=a,H.p=f}}(Ea&3)!==0&&Cu(),Zi(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===vh?Yo++:(Yo=0,vh=t):Yo=0,Zo(0)}}function l_(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,Ro(a)))}function Cu(){return r_(),s_(),o_(),u_()}function u_(){if(bn!==5)return!1;var t=ar,a=gh;gh=0;var s=as(Ea),l=I.T,f=H.p;try{H.p=32>s?32:s,I.T=null,s=_h,_h=null;var p=ar,S=Ea;if(bn=0,Ds=ar=null,Ea=0,(Pt&6)!==0)throw Error(r(331));var w=Pt;if(Pt|=4,X0(p.current),H0(p,p.current,S,s),Pt=w,Zo(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(be,p)}catch{}return!0}finally{H.p=f,I.T=l,l_(t,a)}}function c_(t,a,s){a=xi(s,a),a=Kf(t.stateNode,a,2),t=Qa(t,a,2),t!==null&&(Bn(t,2),Zi(t))}function kt(t,a,s){if(t.tag===3)c_(t,t,s);else for(;a!==null;){if(a.tag===3){c_(a,t,s);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ir===null||!ir.has(l))){t=xi(s,t),s=f0(2),l=Qa(a,s,2),l!==null&&(h0(s,l,a,t),Bn(l,2),Zi(l));break}}a=a.return}}function Sh(t,a,s){var l=t.pingCache;if(l===null){l=t.pingCache=new EM;var f=new Set;l.set(a,f)}else f=l.get(a),f===void 0&&(f=new Set,l.set(a,f));f.has(s)||(dh=!0,f.add(s),t=RM.bind(null,t,a,s),a.then(t,t))}function RM(t,a,s){var l=t.pingCache;l!==null&&l.delete(a),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Yt===t&&(bt&s)===s&&(sn===4||sn===3&&(bt&62914560)===bt&&300>E()-Su?(Pt&2)===0&&Us(t,0):ph|=s,Rs===bt&&(Rs=0)),Zi(t)}function f_(t,a){a===0&&(a=Ft()),t=Rr(t,a),t!==null&&(Bn(t,a),Zi(t))}function DM(t){var a=t.memoizedState,s=0;a!==null&&(s=a.retryLane),f_(t,s)}function UM(t,a){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(a),f_(t,s)}function LM(t,a){return xt(t,a)}var wu=null,Ns=null,Mh=!1,Ru=!1,bh=!1,sr=0;function Zi(t){t!==Ns&&t.next===null&&(Ns===null?wu=Ns=t:Ns=Ns.next=t),Ru=!0,Mh||(Mh=!0,OM())}function Zo(t,a){if(!bh&&Ru){bh=!0;do for(var s=!1,l=wu;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var S=l.suspendedLanes,w=l.pingedLanes;p=(1<<31-Ue(42|t)+1)-1,p&=f&~(S&~w),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,m_(l,p))}else p=bt,p=_e(l,l===Yt?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Ve(l,p)||(s=!0,m_(l,p));l=l.next}while(s);bh=!1}}function NM(){h_()}function h_(){Ru=Mh=!1;var t=0;sr!==0&&XM()&&(t=sr);for(var a=E(),s=null,l=wu;l!==null;){var f=l.next,p=d_(l,a);p===0?(l.next=null,s===null?wu=f:s.next=f,f===null&&(Ns=s)):(s=l,(t!==0||(p&3)!==0)&&(Ru=!0)),l=f}bn!==0&&bn!==5||Zo(t),sr!==0&&(sr=0)}function d_(t,a){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var S=31-Ue(p),w=1<<S,W=f[S];W===-1?((w&s)===0||(w&l)!==0)&&(f[S]=st(w,a)):W<=a&&(t.expiredLanes|=w),p&=~w}if(a=Yt,s=bt,s=_e(t,t===a?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===a&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Dt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ve(t,s)){if(a=s&-s,a===t.callbackPriority)return a;switch(l!==null&&Dt(l),as(s)){case 2:case 8:s=J;break;case 32:s=ie;break;case 268435456:s=Me;break;default:s=ie}return l=p_.bind(null,t),s=xt(s,l),t.callbackPriority=a,t.callbackNode=s,a}return l!==null&&l!==null&&Dt(l),t.callbackPriority=2,t.callbackNode=null,2}function p_(t,a){if(bn!==0&&bn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Cu()&&t.callbackNode!==s)return null;var l=bt;return l=_e(t,t===Yt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Z0(t,l,a),d_(t,E()),t.callbackNode!=null&&t.callbackNode===s?p_.bind(null,t):null)}function m_(t,a){if(Cu())return null;Z0(t,a,!0)}function OM(){qM(function(){(Pt&6)!==0?xt(V,NM):h_()})}function Eh(){if(sr===0){var t=vs;t===0&&(t=Le,Le<<=1,(Le&261888)===0&&(Le=256)),sr=t}return sr}function g_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:zl(""+t)}function __(t,a){var s=a.ownerDocument.createElement("input");return s.name=a.name,s.value=a.value,t.id&&s.setAttribute("form",t.id),a.parentNode.insertBefore(s,a),t=new FormData(t),s.parentNode.removeChild(s),t}function PM(t,a,s,l,f){if(a==="submit"&&s&&s.stateNode===f){var p=g_((f[Sn]||null).action),S=l.submitter;S&&(a=(a=S[Sn]||null)?g_(a.formAction):S.getAttribute("formAction"),a!==null&&(p=a,S=null));var w=new Hl("action","action",null,l,f);t.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(sr!==0){var W=S?__(f,S):new FormData(f);Xf(s,{pending:!0,data:W,method:f.method,action:p},null,W)}}else typeof p=="function"&&(w.preventDefault(),W=S?__(f,S):new FormData(f),Xf(s,{pending:!0,data:W,method:f.method,action:p},p,W))},currentTarget:f}]})}}for(var Th=0;Th<of.length;Th++){var Ah=of[Th],IM=Ah.toLowerCase(),zM=Ah[0].toUpperCase()+Ah.slice(1);Pi(IM,"on"+zM)}Pi(Ym,"onAnimationEnd"),Pi(Zm,"onAnimationIteration"),Pi(Km,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi($S,"onTransitionRun"),Pi(eM,"onTransitionStart"),Pi(tM,"onTransitionCancel"),Pi(Qm,"onTransitionEnd"),Ne("onMouseEnter",["mouseout","mouseover"]),Ne("onMouseLeave",["mouseout","mouseover"]),Ne("onPointerEnter",["pointerout","pointerover"]),Ne("onPointerLeave",["pointerout","pointerover"]),se("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),se("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),se("onBeforeInput",["compositionend","keypress","textInput","paste"]),se("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ko));function v_(t,a){a=(a&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var p=void 0;if(a)for(var S=l.length-1;0<=S;S--){var w=l[S],W=w.instance,ue=w.currentTarget;if(w=w.listener,W!==p&&f.isPropagationStopped())break e;p=w,f.currentTarget=ue;try{p(f)}catch(ve){Xl(ve)}f.currentTarget=null,p=W}else for(S=0;S<l.length;S++){if(w=l[S],W=w.instance,ue=w.currentTarget,w=w.listener,W!==p&&f.isPropagationStopped())break e;p=w,f.currentTarget=ue;try{p(f)}catch(ve){Xl(ve)}f.currentTarget=null,p=W}}}}function St(t,a){var s=a[Ha];s===void 0&&(s=a[Ha]=new Set);var l=t+"__bubble";s.has(l)||(x_(a,t,2,!1),s.add(l))}function Ch(t,a,s){var l=0;a&&(l|=4),x_(s,t,l,a)}var Du="_reactListening"+Math.random().toString(36).slice(2);function wh(t){if(!t[Du]){t[Du]=!0,pe.forEach(function(s){s!=="selectionchange"&&(FM.has(s)||Ch(s,!1,t),Ch(s,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Du]||(a[Du]=!0,Ch("selectionchange",!1,a))}}function x_(t,a,s,l){switch(Y_(a)){case 2:var f=hb;break;case 8:f=db;break;default:f=Vh}s=f.bind(null,a,s,t),f=void 0,!jc||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(a,s,{capture:!0,passive:f}):t.addEventListener(a,s,!0):f!==void 0?t.addEventListener(a,s,{passive:f}):t.addEventListener(a,s,!1)}function Rh(t,a,s,l,f){var p=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var w=l.stateNode.containerInfo;if(w===f)break;if(S===4)for(S=l.return;S!==null;){var W=S.tag;if((W===3||W===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;w!==null;){if(S=Ga(w),S===null)return;if(W=S.tag,W===5||W===6||W===26||W===27){l=p=S;continue e}w=w.parentNode}}l=l.return}Em(function(){var ue=p,ve=Wc(s),Se=[];e:{var he=Jm.get(t);if(he!==void 0){var me=Hl,We=t;switch(t){case"keypress":if(Bl(s)===0)break e;case"keydown":case"keyup":me=US;break;case"focusin":We="focus",me=Qc;break;case"focusout":We="blur",me=Qc;break;case"beforeblur":case"afterblur":me=Qc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=xS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=OS;break;case Ym:case Zm:case Km:me=MS;break;case Qm:me=IS;break;case"scroll":case"scrollend":me=_S;break;case"wheel":me=FS;break;case"copy":case"cut":case"paste":me=ES;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=Rm;break;case"toggle":case"beforetoggle":me=kS}var nt=(a&4)!==0,Wt=!nt&&(t==="scroll"||t==="scrollend"),ne=nt?he!==null?he+"Capture":null:he;nt=[];for(var Y=ue,oe;Y!==null;){var ye=Y;if(oe=ye.stateNode,ye=ye.tag,ye!==5&&ye!==26&&ye!==27||oe===null||ne===null||(ye=vo(Y,ne),ye!=null&&nt.push(Qo(Y,ye,oe))),Wt)break;Y=Y.return}0<nt.length&&(he=new me(he,We,null,s,ve),Se.push({event:he,listeners:nt}))}}if((a&7)===0){e:{if(he=t==="mouseover"||t==="pointerover",me=t==="mouseout"||t==="pointerout",he&&s!==Xc&&(We=s.relatedTarget||s.fromElement)&&(Ga(We)||We[oa]))break e;if((me||he)&&(he=ve.window===ve?ve:(he=ve.ownerDocument)?he.defaultView||he.parentWindow:window,me?(We=s.relatedTarget||s.toElement,me=ue,We=We?Ga(We):null,We!==null&&(Wt=u(We),nt=We.tag,We!==Wt||nt!==5&&nt!==27&&nt!==6)&&(We=null)):(me=null,We=ue),me!==We)){if(nt=Cm,ye="onMouseLeave",ne="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(nt=Rm,ye="onPointerLeave",ne="onPointerEnter",Y="pointer"),Wt=me==null?he:Tr(me),oe=We==null?he:Tr(We),he=new nt(ye,Y+"leave",me,s,ve),he.target=Wt,he.relatedTarget=oe,ye=null,Ga(ve)===ue&&(nt=new nt(ne,Y+"enter",We,s,ve),nt.target=oe,nt.relatedTarget=Wt,ye=nt),Wt=ye,me&&We)t:{for(nt=BM,ne=me,Y=We,oe=0,ye=ne;ye;ye=nt(ye))oe++;ye=0;for(var et=Y;et;et=nt(et))ye++;for(;0<oe-ye;)ne=nt(ne),oe--;for(;0<ye-oe;)Y=nt(Y),ye--;for(;oe--;){if(ne===Y||Y!==null&&ne===Y.alternate){nt=ne;break t}ne=nt(ne),Y=nt(Y)}nt=null}else nt=null;me!==null&&y_(Se,he,me,nt,!1),We!==null&&Wt!==null&&y_(Se,Wt,We,nt,!0)}}e:{if(he=ue?Tr(ue):window,me=he.nodeName&&he.nodeName.toLowerCase(),me==="select"||me==="input"&&he.type==="file")var Lt=zm;else if(Pm(he))if(Fm)Lt=KS;else{Lt=YS;var Ke=jS}else me=he.nodeName,!me||me.toLowerCase()!=="input"||he.type!=="checkbox"&&he.type!=="radio"?ue&&ss(ue.elementType)&&(Lt=zm):Lt=ZS;if(Lt&&(Lt=Lt(t,ue))){Im(Se,Lt,s,ve);break e}Ke&&Ke(t,he,ue),t==="focusout"&&ue&&he.type==="number"&&ue.memoizedProps.value!=null&&Ni(he,"number",he.value)}switch(Ke=ue?Tr(ue):window,t){case"focusin":(Pm(Ke)||Ke.contentEditable==="true")&&(cs=Ke,af=ue,Ao=null);break;case"focusout":Ao=af=cs=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,qm(Se,s,ve);break;case"selectionchange":if(JS)break;case"keydown":case"keyup":qm(Se,s,ve)}var dt;if($c)e:{switch(t){case"compositionstart":var Et="onCompositionStart";break e;case"compositionend":Et="onCompositionEnd";break e;case"compositionupdate":Et="onCompositionUpdate";break e}Et=void 0}else us?Nm(t,s)&&(Et="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Et="onCompositionStart");Et&&(Dm&&s.locale!=="ko"&&(us||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&us&&(dt=Tm()):(Xa=ve,Yc="value"in Xa?Xa.value:Xa.textContent,us=!0)),Ke=Uu(ue,Et),0<Ke.length&&(Et=new wm(Et,t,null,s,ve),Se.push({event:Et,listeners:Ke}),dt?Et.data=dt:(dt=Om(s),dt!==null&&(Et.data=dt)))),(dt=GS?VS(t,s):XS(t,s))&&(Et=Uu(ue,"onBeforeInput"),0<Et.length&&(Ke=new wm("onBeforeInput","beforeinput",null,s,ve),Se.push({event:Ke,listeners:Et}),Ke.data=dt)),PM(Se,t,ue,s,ve)}v_(Se,a)})}function Qo(t,a,s){return{instance:t,listener:a,currentTarget:s}}function Uu(t,a){for(var s=a+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=vo(t,s),f!=null&&l.unshift(Qo(t,f,p)),f=vo(t,a),f!=null&&l.push(Qo(t,f,p))),t.tag===3)return l;t=t.return}return[]}function BM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function y_(t,a,s,l,f){for(var p=a._reactName,S=[];s!==null&&s!==l;){var w=s,W=w.alternate,ue=w.stateNode;if(w=w.tag,W!==null&&W===l)break;w!==5&&w!==26&&w!==27||ue===null||(W=ue,f?(ue=vo(s,p),ue!=null&&S.unshift(Qo(s,ue,W))):f||(ue=vo(s,p),ue!=null&&S.push(Qo(s,ue,W)))),s=s.return}S.length!==0&&t.push({event:a,listeners:S})}var kM=/\r\n?/g,HM=/\u0000|\uFFFD/g;function S_(t){return(typeof t=="string"?t:""+t).replace(kM,`
`).replace(HM,"")}function M_(t,a){return a=S_(a),S_(t)===a}function Xt(t,a,s,l,f,p){switch(s){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Gn(t,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Gn(t,""+l);break;case"className":ut(t,"class",l);break;case"tabIndex":ut(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ut(t,s,l);break;case"style":la(t,l,p);break;case"data":if(a!=="object"){ut(t,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=zl(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(a!=="input"&&Xt(t,a,"name",f.name,f,null),Xt(t,a,"formEncType",f.formEncType,f,null),Xt(t,a,"formMethod",f.formMethod,f,null),Xt(t,a,"formTarget",f.formTarget,f,null)):(Xt(t,a,"encType",f.encType,f,null),Xt(t,a,"method",f.method,f,null),Xt(t,a,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=zl(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=ua);break;case"onScroll":l!=null&&St("scroll",t);break;case"onScrollEnd":l!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=zl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":St("beforetoggle",t),St("toggle",t),it(t,"popover",l);break;case"xlinkActuate":Xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Xe(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Xe(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Xe(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Xe(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":it(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=mS.get(s)||s,it(t,s,l))}}function Dh(t,a,s,l,f,p){switch(s){case"style":la(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Gn(t,l):(typeof l=="number"||typeof l=="bigint")&&Gn(t,""+l);break;case"onScroll":l!=null&&St("scroll",t);break;case"onScrollEnd":l!=null&&St("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ua);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fe.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),a=s.slice(2,f?s.length-7:void 0),p=t[Sn]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(a,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(a,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):it(t,s,l)}}}function Ln(t,a,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var l=!1,f=!1,p;for(p in s)if(s.hasOwnProperty(p)){var S=s[p];if(S!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Xt(t,a,p,S,s,null)}}f&&Xt(t,a,"srcSet",s.srcSet,s,null),l&&Xt(t,a,"src",s.src,s,null);return;case"input":St("invalid",t);var w=p=S=f=null,W=null,ue=null;for(l in s)if(s.hasOwnProperty(l)){var ve=s[l];if(ve!=null)switch(l){case"name":f=ve;break;case"type":S=ve;break;case"checked":W=ve;break;case"defaultChecked":ue=ve;break;case"value":p=ve;break;case"defaultValue":w=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(r(137,a));break;default:Xt(t,a,l,ve,s,null)}}ai(t,p,w,W,ue,S,f,!1);return;case"select":St("invalid",t),l=S=p=null;for(f in s)if(s.hasOwnProperty(f)&&(w=s[f],w!=null))switch(f){case"value":p=w;break;case"defaultValue":S=w;break;case"multiple":l=w;default:Xt(t,a,f,w,s,null)}a=p,s=S,t.multiple=!!l,a!=null?ri(t,!!l,a,!1):s!=null&&ri(t,!!l,s,!0);return;case"textarea":St("invalid",t),p=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(w=s[S],w!=null))switch(S){case"value":l=w;break;case"defaultValue":f=w;break;case"children":p=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Xt(t,a,S,w,s,null)}dn(t,l,f,p);return;case"option":for(W in s)s.hasOwnProperty(W)&&(l=s[W],l!=null)&&(W==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":Xt(t,a,W,l,s,null));return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(l=0;l<Ko.length;l++)St(Ko[l],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ue in s)if(s.hasOwnProperty(ue)&&(l=s[ue],l!=null))switch(ue){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Xt(t,a,ue,l,s,null)}return;default:if(ss(a)){for(ve in s)s.hasOwnProperty(ve)&&(l=s[ve],l!==void 0&&Dh(t,a,ve,l,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(l=s[w],l!=null&&Xt(t,a,w,l,s,null))}function GM(t,a,s,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,S=null,w=null,W=null,ue=null,ve=null;for(me in s){var Se=s[me];if(s.hasOwnProperty(me)&&Se!=null)switch(me){case"checked":break;case"value":break;case"defaultValue":W=Se;default:l.hasOwnProperty(me)||Xt(t,a,me,null,l,Se)}}for(var he in l){var me=l[he];if(Se=s[he],l.hasOwnProperty(he)&&(me!=null||Se!=null))switch(he){case"type":p=me;break;case"name":f=me;break;case"checked":ue=me;break;case"defaultChecked":ve=me;break;case"value":S=me;break;case"defaultValue":w=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,a));break;default:me!==Se&&Xt(t,a,he,me,l,Se)}}Hn(t,S,w,W,ue,ve,p,f);return;case"select":me=S=w=he=null;for(p in s)if(W=s[p],s.hasOwnProperty(p)&&W!=null)switch(p){case"value":break;case"multiple":me=W;default:l.hasOwnProperty(p)||Xt(t,a,p,null,l,W)}for(f in l)if(p=l[f],W=s[f],l.hasOwnProperty(f)&&(p!=null||W!=null))switch(f){case"value":he=p;break;case"defaultValue":w=p;break;case"multiple":S=p;default:p!==W&&Xt(t,a,f,p,l,W)}a=w,s=S,l=me,he!=null?ri(t,!!s,he,!1):!!l!=!!s&&(a!=null?ri(t,!!s,a,!0):ri(t,!!s,s?[]:"",!1));return;case"textarea":me=he=null;for(w in s)if(f=s[w],s.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Xt(t,a,w,null,l,f)}for(S in l)if(f=l[S],p=s[S],l.hasOwnProperty(S)&&(f!=null||p!=null))switch(S){case"value":he=f;break;case"defaultValue":me=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==p&&Xt(t,a,S,f,l,p)}zt(t,he,me);return;case"option":for(var We in s)he=s[We],s.hasOwnProperty(We)&&he!=null&&!l.hasOwnProperty(We)&&(We==="selected"?t.selected=!1:Xt(t,a,We,null,l,he));for(W in l)he=l[W],me=s[W],l.hasOwnProperty(W)&&he!==me&&(he!=null||me!=null)&&(W==="selected"?t.selected=he&&typeof he!="function"&&typeof he!="symbol":Xt(t,a,W,he,l,me));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in s)he=s[nt],s.hasOwnProperty(nt)&&he!=null&&!l.hasOwnProperty(nt)&&Xt(t,a,nt,null,l,he);for(ue in l)if(he=l[ue],me=s[ue],l.hasOwnProperty(ue)&&he!==me&&(he!=null||me!=null))switch(ue){case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,a));break;default:Xt(t,a,ue,he,l,me)}return;default:if(ss(a)){for(var Wt in s)he=s[Wt],s.hasOwnProperty(Wt)&&he!==void 0&&!l.hasOwnProperty(Wt)&&Dh(t,a,Wt,void 0,l,he);for(ve in l)he=l[ve],me=s[ve],!l.hasOwnProperty(ve)||he===me||he===void 0&&me===void 0||Dh(t,a,ve,he,l,me);return}}for(var ne in s)he=s[ne],s.hasOwnProperty(ne)&&he!=null&&!l.hasOwnProperty(ne)&&Xt(t,a,ne,null,l,he);for(Se in l)he=l[Se],me=s[Se],!l.hasOwnProperty(Se)||he===me||he==null&&me==null||Xt(t,a,Se,he,l,me)}function b_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function VM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],p=f.transferSize,S=f.initiatorType,w=f.duration;if(p&&w&&b_(S)){for(S=0,w=f.responseEnd,l+=1;l<s.length;l++){var W=s[l],ue=W.startTime;if(ue>w)break;var ve=W.transferSize,Se=W.initiatorType;ve&&b_(Se)&&(W=W.responseEnd,S+=ve*(W<w?1:(w-ue)/(W-ue)))}if(--l,a+=8*(p+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Uh=null,Lh=null;function Lu(t){return t.nodeType===9?t:t.ownerDocument}function E_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function T_(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function Nh(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Oh=null;function XM(){var t=window.event;return t&&t.type==="popstate"?t===Oh?!1:(Oh=t,!0):(Oh=null,!1)}var A_=typeof setTimeout=="function"?setTimeout:void 0,WM=typeof clearTimeout=="function"?clearTimeout:void 0,C_=typeof Promise=="function"?Promise:void 0,qM=typeof queueMicrotask=="function"?queueMicrotask:typeof C_<"u"?function(t){return C_.resolve(null).then(t).catch(jM)}:A_;function jM(t){setTimeout(function(){throw t})}function or(t){return t==="head"}function w_(t,a){var s=a,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),zs(a);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Jo(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Jo(s);for(var p=s.firstChild;p;){var S=p.nextSibling,w=p.nodeName;p[Er]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=S}}else s==="body"&&Jo(t.ownerDocument.body);s=f}while(s);zs(a)}function R_(t,a){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?a?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(a?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Ph(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var s=a;switch(a=a.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Ph(s),_o(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function YM(t,a,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Er])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function ZM(t,a,s){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ei(t.nextSibling),t===null))return null;return t}function D_(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ei(t.nextSibling),t===null))return null;return t}function Ih(t){return t.data==="$?"||t.data==="$~"}function zh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function KM(t,a){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||s.readyState!=="loading")a();else{var l=function(){a(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ei(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var Fh=null;function U_(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(a===0)return Ei(t.nextSibling);a--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||a++}t=t.nextSibling}return null}function L_(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(a===0)return t;a--}else s!=="/$"&&s!=="/&"||a++}t=t.previousSibling}return null}function N_(t,a,s){switch(a=Lu(s),t){case"html":if(t=a.documentElement,!t)throw Error(r(452));return t;case"head":if(t=a.head,!t)throw Error(r(453));return t;case"body":if(t=a.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Jo(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);_o(t)}var Ti=new Map,O_=new Set;function Nu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ta=H.d;H.d={f:QM,r:JM,D:$M,C:eb,L:tb,m:nb,X:ab,S:ib,M:rb};function QM(){var t=Ta.f(),a=Eu();return t||a}function JM(t){var a=Va(t);a!==null&&a.tag===5&&a.type==="form"?Qg(a):Ta.r(t)}var Os=typeof document>"u"?null:document;function P_(t,a,s){var l=Os;if(l&&typeof a=="string"&&a){var f=ot(a);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),O_.has(f)||(O_.add(f),t={rel:t,crossOrigin:s,href:a},l.querySelector(f)===null&&(a=l.createElement("link"),Ln(a,"link",t),Z(a),l.head.appendChild(a)))}}function $M(t){Ta.D(t),P_("dns-prefetch",t,null)}function eb(t,a){Ta.C(t,a),P_("preconnect",t,a)}function tb(t,a,s){Ta.L(t,a,s);var l=Os;if(l&&t&&a){var f='link[rel="preload"][as="'+ot(a)+'"]';a==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+ot(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+ot(s.imageSizes)+'"]')):f+='[href="'+ot(t)+'"]';var p=f;switch(a){case"style":p=Ps(t);break;case"script":p=Is(t)}Ti.has(p)||(t=v({rel:"preload",href:a==="image"&&s&&s.imageSrcSet?void 0:t,as:a},s),Ti.set(p,t),l.querySelector(f)!==null||a==="style"&&l.querySelector($o(p))||a==="script"&&l.querySelector(el(p))||(a=l.createElement("link"),Ln(a,"link",t),Z(a),l.head.appendChild(a)))}}function nb(t,a){Ta.m(t,a);var s=Os;if(s&&t){var l=a&&typeof a.as=="string"?a.as:"script",f='link[rel="modulepreload"][as="'+ot(l)+'"][href="'+ot(t)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Is(t)}if(!Ti.has(p)&&(t=v({rel:"modulepreload",href:t},a),Ti.set(p,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(el(p)))return}l=s.createElement("link"),Ln(l,"link",t),Z(l),s.head.appendChild(l)}}}function ib(t,a,s){Ta.S(t,a,s);var l=Os;if(l&&t){var f=R(l).hoistableStyles,p=Ps(t);a=a||"default";var S=f.get(p);if(!S){var w={loading:0,preload:null};if(S=l.querySelector($o(p)))w.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":a},s),(s=Ti.get(p))&&Bh(t,s);var W=S=l.createElement("link");Z(W),Ln(W,"link",t),W._p=new Promise(function(ue,ve){W.onload=ue,W.onerror=ve}),W.addEventListener("load",function(){w.loading|=1}),W.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Ou(S,a,l)}S={type:"stylesheet",instance:S,count:1,state:w},f.set(p,S)}}}function ab(t,a){Ta.X(t,a);var s=Os;if(s&&t){var l=R(s).hoistableScripts,f=Is(t),p=l.get(f);p||(p=s.querySelector(el(f)),p||(t=v({src:t,async:!0},a),(a=Ti.get(f))&&kh(t,a),p=s.createElement("script"),Z(p),Ln(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function rb(t,a){Ta.M(t,a);var s=Os;if(s&&t){var l=R(s).hoistableScripts,f=Is(t),p=l.get(f);p||(p=s.querySelector(el(f)),p||(t=v({src:t,async:!0,type:"module"},a),(a=Ti.get(f))&&kh(t,a),p=s.createElement("script"),Z(p),Ln(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function I_(t,a,s,l){var f=(f=ae.current)?Nu(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(a=Ps(s.href),s=R(f).hoistableStyles,l=s.get(a),l||(l={type:"style",instance:null,count:0,state:null},s.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Ps(s.href);var p=R(f).hoistableStyles,S=p.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,S),(p=f.querySelector($o(t)))&&!p._p&&(S.instance=p,S.state.loading=5),Ti.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ti.set(t,s),p||sb(f,t,s,S.state))),a&&l===null)throw Error(r(528,""));return S}if(a&&l!==null)throw Error(r(529,""));return null;case"script":return a=s.async,s=s.src,typeof s=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Is(s),s=R(f).hoistableScripts,l=s.get(a),l||(l={type:"script",instance:null,count:0,state:null},s.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ps(t){return'href="'+ot(t)+'"'}function $o(t){return'link[rel="stylesheet"]['+t+"]"}function z_(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function sb(t,a,s,l){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=t.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Ln(a,"link",s),Z(a),t.head.appendChild(a))}function Is(t){return'[src="'+ot(t)+'"]'}function el(t){return"script[async]"+t}function F_(t,a,s){if(a.count++,a.instance===null)switch(a.type){case"style":var l=t.querySelector('style[data-href~="'+ot(s.href)+'"]');if(l)return a.instance=l,Z(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Z(l),Ln(l,"style",f),Ou(l,s.precedence,t),a.instance=l;case"stylesheet":f=Ps(s.href);var p=t.querySelector($o(f));if(p)return a.state.loading|=4,a.instance=p,Z(p),p;l=z_(s),(f=Ti.get(f))&&Bh(l,f),p=(t.ownerDocument||t).createElement("link"),Z(p);var S=p;return S._p=new Promise(function(w,W){S.onload=w,S.onerror=W}),Ln(p,"link",l),a.state.loading|=4,Ou(p,s.precedence,t),a.instance=p;case"script":return p=Is(s.src),(f=t.querySelector(el(p)))?(a.instance=f,Z(f),f):(l=s,(f=Ti.get(p))&&(l=v({},s),kh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),Z(f),Ln(f,"link",l),t.head.appendChild(f),a.instance=f);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Ou(l,s.precedence,t));return a.instance}function Ou(t,a,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,S=0;S<l.length;S++){var w=l[S];if(w.dataset.precedence===a)p=w;else if(p!==f)break}p?p.parentNode.insertBefore(t,p.nextSibling):(a=s.nodeType===9?s.head:s,a.insertBefore(t,a.firstChild))}function Bh(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function kh(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var Pu=null;function B_(t,a,s){if(Pu===null){var l=new Map,f=Pu=new Map;f.set(s,l)}else f=Pu,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var p=s[f];if(!(p[Er]||p[hn]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var S=p.getAttribute(a)||"";S=t+S;var w=l.get(S);w?w.push(p):l.set(S,[p])}}return l}function k_(t,a,s){t=t.ownerDocument||t,t.head.insertBefore(s,a==="title"?t.querySelector("head > title"):null)}function ob(t,a,s){if(s===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(t=a.disabled,typeof a.precedence=="string"&&t==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function H_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function lb(t,a,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Ps(l.href),p=a.querySelector($o(f));if(p){a=p._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=Iu.bind(t),a.then(t,t)),s.state.loading|=4,s.instance=p,Z(p);return}p=a.ownerDocument||a,l=z_(l),(f=Ti.get(f))&&Bh(l,f),p=p.createElement("link"),Z(p);var S=p;S._p=new Promise(function(w,W){S.onload=w,S.onerror=W}),Ln(p,"link",l),s.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,a),(a=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Iu.bind(t),a.addEventListener("load",s),a.addEventListener("error",s))}}var Hh=0;function ub(t,a){return t.stylesheets&&t.count===0&&Fu(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Fu(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+a);0<t.imgBytes&&Hh===0&&(Hh=62500*VM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Fu(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>Hh?50:800)+a);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Iu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zu=null;function Fu(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zu=new Map,a.forEach(cb,t),zu=null,Iu.call(t))}function cb(t,a){if(!(a.state.loading&4)){var s=zu.get(t);if(s)var l=s.get(null);else{s=new Map,zu.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var S=f[p];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=a.instance,S=f.getAttribute("data-precedence"),p=s.get(S)||l,p===l&&s.set(null,f),s.set(S,f),this.count++,l=Iu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),a.state.loading|=4}}var tl={$$typeof:U,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function fb(t,a,s,l,f,p,S,w,W){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=W,this.incompleteTransitions=new Map}function G_(t,a,s,l,f,p,S,w,W,ue,ve,Se){return t=new fb(t,a,s,S,W,ue,ve,Se,w),a=1,p===!0&&(a|=24),p=oi(3,null,null,a),t.current=p,p.stateNode=t,a=yf(),a.refCount++,t.pooledCache=a,a.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:a},Ef(p),t}function V_(t){return t?(t=ds,t):ds}function X_(t,a,s,l,f,p){f=V_(f),l.context===null?l.context=f:l.pendingContext=f,l=Ka(a),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=Qa(t,l,a),s!==null&&(Qn(s,t,a),No(s,t,a))}function W_(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<a?s:a}}function Gh(t,a){W_(t,a),(t=t.alternate)&&W_(t,a)}function q_(t){if(t.tag===13||t.tag===31){var a=Rr(t,67108864);a!==null&&Qn(a,t,67108864),Gh(t,67108864)}}function j_(t){if(t.tag===13||t.tag===31){var a=hi();a=is(a);var s=Rr(t,a);s!==null&&Qn(s,t,a),Gh(t,a)}}var Bu=!0;function hb(t,a,s,l){var f=I.T;I.T=null;var p=H.p;try{H.p=2,Vh(t,a,s,l)}finally{H.p=p,I.T=f}}function db(t,a,s,l){var f=I.T;I.T=null;var p=H.p;try{H.p=8,Vh(t,a,s,l)}finally{H.p=p,I.T=f}}function Vh(t,a,s,l){if(Bu){var f=Xh(l);if(f===null)Rh(t,a,l,ku,s),Z_(t,l);else if(mb(f,t,a,s,l))l.stopPropagation();else if(Z_(t,l),a&4&&-1<pb.indexOf(t)){for(;f!==null;){var p=Va(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var S=we(p.pendingLanes);if(S!==0){var w=p;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var W=1<<31-Ue(S);w.entanglements[1]|=W,S&=~W}Zi(p),(Pt&6)===0&&(Mu=E()+500,Zo(0))}}break;case 31:case 13:w=Rr(p,2),w!==null&&Qn(w,p,2),Eu(),Gh(p,2)}if(p=Xh(l),p===null&&Rh(t,a,l,ku,s),p===f)break;f=p}f!==null&&l.stopPropagation()}else Rh(t,a,l,null,s)}}function Xh(t){return t=Wc(t),Wh(t)}var ku=null;function Wh(t){if(ku=null,t=Ga(t),t!==null){var a=u(t);if(a===null)t=null;else{var s=a.tag;if(s===13){if(t=c(a),t!==null)return t;t=null}else if(s===31){if(t=h(a),t!==null)return t;t=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return ku=t,null}function Y_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case V:return 2;case J:return 8;case ie:case Ce:return 32;case Me:return 268435456;default:return 32}default:return 32}}var qh=!1,lr=null,ur=null,cr=null,nl=new Map,il=new Map,fr=[],pb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Z_(t,a){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":nl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":il.delete(a.pointerId)}}function al(t,a,s,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:a,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},a!==null&&(a=Va(a),a!==null&&q_(a)),t):(t.eventSystemFlags|=l,a=t.targetContainers,f!==null&&a.indexOf(f)===-1&&a.push(f),t)}function mb(t,a,s,l,f){switch(a){case"focusin":return lr=al(lr,t,a,s,l,f),!0;case"dragenter":return ur=al(ur,t,a,s,l,f),!0;case"mouseover":return cr=al(cr,t,a,s,l,f),!0;case"pointerover":var p=f.pointerId;return nl.set(p,al(nl.get(p)||null,t,a,s,l,f)),!0;case"gotpointercapture":return p=f.pointerId,il.set(p,al(il.get(p)||null,t,a,s,l,f)),!0}return!1}function K_(t){var a=Ga(t.target);if(a!==null){var s=u(a);if(s!==null){if(a=s.tag,a===13){if(a=c(s),a!==null){t.blockedOn=a,rs(t.priority,function(){j_(s)});return}}else if(a===31){if(a=h(s),a!==null){t.blockedOn=a,rs(t.priority,function(){j_(s)});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hu(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var s=Xh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Xc=l,s.target.dispatchEvent(l),Xc=null}else return a=Va(s),a!==null&&q_(a),t.blockedOn=s,!1;a.shift()}return!0}function Q_(t,a,s){Hu(t)&&s.delete(a)}function gb(){qh=!1,lr!==null&&Hu(lr)&&(lr=null),ur!==null&&Hu(ur)&&(ur=null),cr!==null&&Hu(cr)&&(cr=null),nl.forEach(Q_),il.forEach(Q_)}function Gu(t,a){t.blockedOn===a&&(t.blockedOn=null,qh||(qh=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,gb)))}var Vu=null;function J_(t){Vu!==t&&(Vu=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Vu===t&&(Vu=null);for(var a=0;a<t.length;a+=3){var s=t[a],l=t[a+1],f=t[a+2];if(typeof l!="function"){if(Wh(l||s)===null)continue;break}var p=Va(s);p!==null&&(t.splice(a,3),a-=3,Xf(p,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function zs(t){function a(W){return Gu(W,t)}lr!==null&&Gu(lr,t),ur!==null&&Gu(ur,t),cr!==null&&Gu(cr,t),nl.forEach(a),il.forEach(a);for(var s=0;s<fr.length;s++){var l=fr[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<fr.length&&(s=fr[0],s.blockedOn===null);)K_(s),s.blockedOn===null&&fr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],p=s[l+1],S=f[Sn]||null;if(typeof p=="function")S||J_(s);else if(S){var w=null;if(p&&p.hasAttribute("formAction")){if(f=p,S=p[Sn]||null)w=S.formAction;else if(Wh(f)!==null)continue}else w=S.action;typeof w=="function"?s[l+1]=w:(s.splice(l,3),l-=3),J_(s)}}}function $_(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function a(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),f!==null&&(f(),f=null)}}}function jh(t){this._internalRoot=t}Xu.prototype.render=jh.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(r(409));var s=a.current,l=hi();X_(s,l,t,a,null,null)},Xu.prototype.unmount=jh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;X_(t.current,2,null,t,null,null),Eu(),a[oa]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var a=Wi();t={blockedOn:null,target:t,priority:a};for(var s=0;s<fr.length&&a!==0&&a<fr[s].priority;s++);fr.splice(s,0,t),s===0&&K_(t)}};var ev=e.version;if(ev!=="19.2.4")throw Error(r(527,ev,"19.2.4"));H.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=d(a),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var _b={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wu.isDisabled&&Wu.supportsFiber)try{be=Wu.inject(_b),Te=Wu}catch{}}return sl.createRoot=function(t,a){if(!o(t))throw Error(r(299));var s=!1,l="",f=o0,p=l0,S=u0;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(S=a.onRecoverableError)),a=G_(t,1,!1,null,null,s,l,null,f,p,S,$_),t[oa]=a.current,wh(t),new jh(a)},sl.hydrateRoot=function(t,a,s){if(!o(t))throw Error(r(299));var l=!1,f="",p=o0,S=l0,w=u0,W=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(W=s.formState)),a=G_(t,1,!0,a,s??null,l,f,W,p,S,w,$_),a.context=V_(null),s=a.current,l=hi(),l=is(l),f=Ka(l),f.callback=null,Qa(s,f,l),s=l,a.current.lanes=s,Bn(a,s),Zi(a),t[oa]=a.current,wh(t),new Xu(a)},sl.version="19.2.4",sl}var cv;function Cb(){if(cv)return Kh.exports;cv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Kh.exports=Ab(),Kh.exports}var wb=Cb();const $p="183",Rb=0,fv=1,Db=2,Sc=1,Ub=2,vl=3,Mr=0,ei=1,La=2,Oa=0,to=1,jd=2,hv=3,dv=4,Lb=5,Zr=100,Nb=101,Ob=102,Pb=103,Ib=104,zb=200,Fb=201,Bb=202,kb=203,Yd=204,Zd=205,Hb=206,Gb=207,Vb=208,Xb=209,Wb=210,qb=211,jb=212,Yb=213,Zb=214,Kd=0,Qd=1,Jd=2,ro=3,$d=4,ep=5,tp=6,np=7,Yx=0,Kb=1,Qb=2,ia=0,Zx=1,Kx=2,Qx=3,Jx=4,$x=5,ey=6,ty=7,ny=300,es=301,so=302,ed=303,td=304,Ic=306,ip=1e3,Na=1001,ap=1002,Nn=1003,Jb=1004,qu=1005,zn=1006,nd=1007,Qr=1008,Di=1009,iy=1010,ay=1011,bl=1012,em=1013,ra=1014,ta=1015,za=1016,tm=1017,nm=1018,El=1020,ry=35902,sy=35899,oy=1021,ly=1022,Gi=1023,Fa=1026,Jr=1027,uy=1028,im=1029,oo=1030,am=1031,rm=1033,Mc=33776,bc=33777,Ec=33778,Tc=33779,rp=35840,sp=35841,op=35842,lp=35843,up=36196,cp=37492,fp=37496,hp=37488,dp=37489,pp=37490,mp=37491,gp=37808,_p=37809,vp=37810,xp=37811,yp=37812,Sp=37813,Mp=37814,bp=37815,Ep=37816,Tp=37817,Ap=37818,Cp=37819,wp=37820,Rp=37821,Dp=36492,Up=36494,Lp=36495,Np=36283,Op=36284,Pp=36285,Ip=36286,$b=3200,eE=0,tE=1,yr="",Ci="srgb",lo="srgb-linear",wc="linear",Ht="srgb",Fs=7680,pv=519,nE=512,iE=513,aE=514,sm=515,rE=516,sE=517,om=518,oE=519,mv=35044,gv="300 es",na=2e3,Rc=2001;function lE(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Dc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uE(){const i=Dc("canvas");return i.style.display="block",i}const _v={};function vv(...i){const e="THREE."+i.shift();console.log(e,...i)}function cy(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=i[1];n&&n.isStackTrace?i[0]+=" "+n.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function lt(...i){i=cy(i);const e="THREE."+i.shift();{const n=i[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...i)}}function Ot(...i){i=cy(i);const e="THREE."+i.shift();{const n=i[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...i)}}function Uc(...i){const e=i.join(" ");e in _v||(_v[e]=!0,lt(...i))}function cE(i,e,n){return new Promise(function(r,o){function u(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}const fE={[Kd]:Qd,[Jd]:tp,[$d]:np,[ro]:ep,[Qd]:Kd,[tp]:Jd,[np]:$d,[ep]:ro};class co{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],id=Math.PI/180,zp=180/Math.PI;function Cl(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function At(i,e,n){return Math.max(e,Math.min(n,i))}function hE(i,e){return(i%e+e)%e}function ad(i,e,n){return(1-n)*i+n*e}function ol(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class qt{constructor(e=0,n=0){qt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=At(this.x,e.x,n.x),this.y=At(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=At(this.x,e,n),this.y=At(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*o+e.x,this.y=u*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fo{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,u,c,h){let m=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3],_=u[c+0],x=u[c+1],b=u[c+2],C=u[c+3];if(v!==C||m!==_||d!==x||g!==b){let M=m*_+d*x+g*b+v*C;M<0&&(_=-_,x=-x,b=-b,C=-C,M=-M);let y=1-h;if(M<.9995){const D=Math.acos(M),U=Math.sin(D);y=Math.sin(y*D)/U,h=Math.sin(h*D)/U,m=m*y+_*h,d=d*y+x*h,g=g*y+b*h,v=v*y+C*h}else{m=m*y+_*h,d=d*y+x*h,g=g*y+b*h,v=v*y+C*h;const D=1/Math.sqrt(m*m+d*d+g*g+v*v);m*=D,d*=D,g*=D,v*=D}}e[n]=m,e[n+1]=d,e[n+2]=g,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,o,u,c){const h=r[o],m=r[o+1],d=r[o+2],g=r[o+3],v=u[c],_=u[c+1],x=u[c+2],b=u[c+3];return e[n]=h*b+g*v+m*x-d*_,e[n+1]=m*b+g*_+d*v-h*x,e[n+2]=d*b+g*x+h*_-m*v,e[n+3]=g*b-h*v-m*_-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,u=e._z,c=e._order,h=Math.cos,m=Math.sin,d=h(r/2),g=h(o/2),v=h(u/2),_=m(r/2),x=m(o/2),b=m(u/2);switch(c){case"XYZ":this._x=_*g*v+d*x*b,this._y=d*x*v-_*g*b,this._z=d*g*b+_*x*v,this._w=d*g*v-_*x*b;break;case"YXZ":this._x=_*g*v+d*x*b,this._y=d*x*v-_*g*b,this._z=d*g*b-_*x*v,this._w=d*g*v+_*x*b;break;case"ZXY":this._x=_*g*v-d*x*b,this._y=d*x*v+_*g*b,this._z=d*g*b+_*x*v,this._w=d*g*v-_*x*b;break;case"ZYX":this._x=_*g*v-d*x*b,this._y=d*x*v+_*g*b,this._z=d*g*b-_*x*v,this._w=d*g*v+_*x*b;break;case"YZX":this._x=_*g*v+d*x*b,this._y=d*x*v+_*g*b,this._z=d*g*b-_*x*v,this._w=d*g*v-_*x*b;break;case"XZY":this._x=_*g*v-d*x*b,this._y=d*x*v-_*g*b,this._z=d*g*b+_*x*v,this._w=d*g*v+_*x*b;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],u=n[8],c=n[1],h=n[5],m=n[9],d=n[2],g=n[6],v=n[10],_=r+h+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-m)*x,this._y=(u-d)*x,this._z=(c-o)*x}else if(r>h&&r>v){const x=2*Math.sqrt(1+r-h-v);this._w=(g-m)/x,this._x=.25*x,this._y=(o+c)/x,this._z=(u+d)/x}else if(h>v){const x=2*Math.sqrt(1+h-r-v);this._w=(u-d)/x,this._x=(o+c)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+v-r-h);this._w=(c-o)/x,this._x=(u+d)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,u=e._z,c=e._w,h=n._x,m=n._y,d=n._z,g=n._w;return this._x=r*g+c*h+o*d-u*m,this._y=o*g+c*m+u*h-r*d,this._z=u*g+c*d+r*m-o*h,this._w=c*g-r*h-o*m-u*d,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,u=e._z,c=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,u=-u,c=-c,h=-h);let m=1-n;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);m=Math.sin(m*d)/g,n=Math.sin(n*d)/g,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+u*n,this._w=this._w*m+c*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+u*n,this._w=this._w*m+c*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class de{constructor(e=0,n=0,r=0){de.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*o,this.y=u[1]*n+u[4]*r+u[7]*o,this.z=u[2]*n+u[5]*r+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=e.elements,c=1/(u[3]*n+u[7]*r+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*o+u[12])*c,this.y=(u[1]*n+u[5]*r+u[9]*o+u[13])*c,this.z=(u[2]*n+u[6]*r+u[10]*o+u[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,u=e.x,c=e.y,h=e.z,m=e.w,d=2*(c*o-h*r),g=2*(h*n-u*o),v=2*(u*r-c*n);return this.x=n+m*d+c*v-h*g,this.y=r+m*g+h*d-u*v,this.z=o+m*v+u*g-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o,this.y=u[1]*n+u[5]*r+u[9]*o,this.z=u[2]*n+u[6]*r+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=At(this.x,e.x,n.x),this.y=At(this.y,e.y,n.y),this.z=At(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=At(this.x,e,n),this.y=At(this.y,e,n),this.z=At(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,u=e.z,c=n.x,h=n.y,m=n.z;return this.x=o*m-u*h,this.y=u*c-r*m,this.z=r*h-o*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return rd.copy(this).projectOnVector(e),this.sub(rd)}reflect(e){return this.sub(rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rd=new de,xv=new fo;class mt{constructor(e,n,r,o,u,c,h,m,d){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,c,h,m,d)}set(e,n,r,o,u,c,h,m,d){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=n,g[4]=u,g[5]=m,g[6]=r,g[7]=c,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,c=r[0],h=r[3],m=r[6],d=r[1],g=r[4],v=r[7],_=r[2],x=r[5],b=r[8],C=o[0],M=o[3],y=o[6],D=o[1],U=o[4],P=o[7],G=o[2],A=o[5],z=o[8];return u[0]=c*C+h*D+m*G,u[3]=c*M+h*U+m*A,u[6]=c*y+h*P+m*z,u[1]=d*C+g*D+v*G,u[4]=d*M+g*U+v*A,u[7]=d*y+g*P+v*z,u[2]=_*C+x*D+b*G,u[5]=_*M+x*U+b*A,u[8]=_*y+x*P+b*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],h=e[5],m=e[6],d=e[7],g=e[8];return n*c*g-n*h*d-r*u*g+r*h*m+o*u*d-o*c*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],h=e[5],m=e[6],d=e[7],g=e[8],v=g*c-h*d,_=h*m-g*u,x=d*u-c*m,b=n*v+r*_+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=v*C,e[1]=(o*d-g*r)*C,e[2]=(h*r-o*c)*C,e[3]=_*C,e[4]=(g*n-o*m)*C,e[5]=(o*u-h*n)*C,e[6]=x*C,e[7]=(r*m-d*n)*C,e[8]=(c*n-r*u)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,u,c,h){const m=Math.cos(u),d=Math.sin(u);return this.set(r*m,r*d,-r*(m*c+d*h)+c+e,-o*d,o*m,-o*(-d*c+m*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(sd.makeScale(e,n)),this}rotate(e){return this.premultiply(sd.makeRotation(-e)),this}translate(e,n){return this.premultiply(sd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sd=new mt,yv=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sv=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dE(){const i={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(o,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Ht&&(o.r=Pa(o.r),o.g=Pa(o.g),o.b=Pa(o.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ht&&(o.r=no(o.r),o.g=no(o.g),o.b=no(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===yr?wc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,c){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return Uc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return Uc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[lo]:{primaries:e,whitePoint:r,transfer:wc,toXYZ:yv,fromXYZ:Sv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ci},outputColorSpaceConfig:{drawingBufferColorSpace:Ci}},[Ci]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:yv,fromXYZ:Sv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ci}}}),i}const Rt=dE();function Pa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function no(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bs;class pE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Bs===void 0&&(Bs=Dc("canvas")),Bs.width=e.width,Bs.height=e.height;const o=Bs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Bs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Dc("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=Pa(u[c]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Pa(n[r]/255)*255):n[r]=Pa(n[r]);return{data:n,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mE=0;class lm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Cl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,h=o.length;c<h;c++)o[c].isDataTexture?u.push(od(o[c].image)):u.push(od(o[c]))}else u=od(o);r.url=u}return n||(e.images[this.uuid]=r),r}}function od(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pE.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let gE=0;const ld=new de;class Wn extends co{constructor(e=Wn.DEFAULT_IMAGE,n=Wn.DEFAULT_MAPPING,r=Na,o=Na,u=zn,c=Qr,h=Gi,m=Di,d=Wn.DEFAULT_ANISOTROPY,g=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=Cl(),this.name="",this.source=new lm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=m,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ld).x}get height(){return this.source.getSize(ld).y}get depth(){return this.source.getSize(ld).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){lt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){lt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ny)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ip:e.x=e.x-Math.floor(e.x);break;case Na:e.x=e.x<0?0:1;break;case ap:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ip:e.y=e.y-Math.floor(e.y);break;case Na:e.y=e.y<0?0:1;break;case ap:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=ny;Wn.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,n=0,r=0,o=1){cn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o+c[12]*u,this.y=c[1]*n+c[5]*r+c[9]*o+c[13]*u,this.z=c[2]*n+c[6]*r+c[10]*o+c[14]*u,this.w=c[3]*n+c[7]*r+c[11]*o+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,u;const m=e.elements,d=m[0],g=m[4],v=m[8],_=m[1],x=m[5],b=m[9],C=m[2],M=m[6],y=m[10];if(Math.abs(g-_)<.01&&Math.abs(v-C)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+C)<.1&&Math.abs(b+M)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(d+1)/2,P=(x+1)/2,G=(y+1)/2,A=(g+_)/4,z=(v+C)/4,T=(b+M)/4;return U>P&&U>G?U<.01?(r=0,o=.707106781,u=.707106781):(r=Math.sqrt(U),o=A/r,u=z/r):P>G?P<.01?(r=.707106781,o=0,u=.707106781):(o=Math.sqrt(P),r=A/o,u=T/o):G<.01?(r=.707106781,o=.707106781,u=0):(u=Math.sqrt(G),r=z/u,o=T/u),this.set(r,o,u,n),this}let D=Math.sqrt((M-b)*(M-b)+(v-C)*(v-C)+(_-g)*(_-g));return Math.abs(D)<.001&&(D=1),this.x=(M-b)/D,this.y=(v-C)/D,this.z=(_-g)/D,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=At(this.x,e.x,n.x),this.y=At(this.y,e.y,n.y),this.z=At(this.z,e.z,n.z),this.w=At(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=At(this.x,e,n),this.y=At(this.y,e,n),this.z=At(this.z,e,n),this.w=At(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _E extends co{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new cn(0,0,e,n),this.scissorTest=!1,this.viewport=new cn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},u=new Wn(o),c=r.count;for(let h=0;h<c;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new lm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aa extends _E{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class fy extends Wn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vE extends Wn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fn{constructor(e,n,r,o,u,c,h,m,d,g,v,_,x,b,C,M){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,c,h,m,d,g,v,_,x,b,C,M)}set(e,n,r,o,u,c,h,m,d,g,v,_,x,b,C,M){const y=this.elements;return y[0]=e,y[4]=n,y[8]=r,y[12]=o,y[1]=u,y[5]=c,y[9]=h,y[13]=m,y[2]=d,y[6]=g,y[10]=v,y[14]=_,y[3]=x,y[7]=b,y[11]=C,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/ks.setFromMatrixColumn(e,0).length(),u=1/ks.setFromMatrixColumn(e,1).length(),c=1/ks.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,u=e.z,c=Math.cos(r),h=Math.sin(r),m=Math.cos(o),d=Math.sin(o),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const _=c*g,x=c*v,b=h*g,C=h*v;n[0]=m*g,n[4]=-m*v,n[8]=d,n[1]=x+b*d,n[5]=_-C*d,n[9]=-h*m,n[2]=C-_*d,n[6]=b+x*d,n[10]=c*m}else if(e.order==="YXZ"){const _=m*g,x=m*v,b=d*g,C=d*v;n[0]=_+C*h,n[4]=b*h-x,n[8]=c*d,n[1]=c*v,n[5]=c*g,n[9]=-h,n[2]=x*h-b,n[6]=C+_*h,n[10]=c*m}else if(e.order==="ZXY"){const _=m*g,x=m*v,b=d*g,C=d*v;n[0]=_-C*h,n[4]=-c*v,n[8]=b+x*h,n[1]=x+b*h,n[5]=c*g,n[9]=C-_*h,n[2]=-c*d,n[6]=h,n[10]=c*m}else if(e.order==="ZYX"){const _=c*g,x=c*v,b=h*g,C=h*v;n[0]=m*g,n[4]=b*d-x,n[8]=_*d+C,n[1]=m*v,n[5]=C*d+_,n[9]=x*d-b,n[2]=-d,n[6]=h*m,n[10]=c*m}else if(e.order==="YZX"){const _=c*m,x=c*d,b=h*m,C=h*d;n[0]=m*g,n[4]=C-_*v,n[8]=b*v+x,n[1]=v,n[5]=c*g,n[9]=-h*g,n[2]=-d*g,n[6]=x*v+b,n[10]=_-C*v}else if(e.order==="XZY"){const _=c*m,x=c*d,b=h*m,C=h*d;n[0]=m*g,n[4]=-v,n[8]=d*g,n[1]=_*v+C,n[5]=c*g,n[9]=x*v-b,n[2]=b*v-x,n[6]=h*g,n[10]=C*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xE,e,yE)}lookAt(e,n,r){const o=this.elements;return di.subVectors(e,n),di.lengthSq()===0&&(di.z=1),di.normalize(),dr.crossVectors(r,di),dr.lengthSq()===0&&(Math.abs(r.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),dr.crossVectors(r,di)),dr.normalize(),ju.crossVectors(di,dr),o[0]=dr.x,o[4]=ju.x,o[8]=di.x,o[1]=dr.y,o[5]=ju.y,o[9]=di.y,o[2]=dr.z,o[6]=ju.z,o[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,c=r[0],h=r[4],m=r[8],d=r[12],g=r[1],v=r[5],_=r[9],x=r[13],b=r[2],C=r[6],M=r[10],y=r[14],D=r[3],U=r[7],P=r[11],G=r[15],A=o[0],z=o[4],T=o[8],N=o[12],ce=o[1],k=o[5],q=o[9],te=o[13],ee=o[2],X=o[6],I=o[10],H=o[14],le=o[3],ge=o[7],O=o[11],B=o[15];return u[0]=c*A+h*ce+m*ee+d*le,u[4]=c*z+h*k+m*X+d*ge,u[8]=c*T+h*q+m*I+d*O,u[12]=c*N+h*te+m*H+d*B,u[1]=g*A+v*ce+_*ee+x*le,u[5]=g*z+v*k+_*X+x*ge,u[9]=g*T+v*q+_*I+x*O,u[13]=g*N+v*te+_*H+x*B,u[2]=b*A+C*ce+M*ee+y*le,u[6]=b*z+C*k+M*X+y*ge,u[10]=b*T+C*q+M*I+y*O,u[14]=b*N+C*te+M*H+y*B,u[3]=D*A+U*ce+P*ee+G*le,u[7]=D*z+U*k+P*X+G*ge,u[11]=D*T+U*q+P*I+G*O,u[15]=D*N+U*te+P*H+G*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],u=e[12],c=e[1],h=e[5],m=e[9],d=e[13],g=e[2],v=e[6],_=e[10],x=e[14],b=e[3],C=e[7],M=e[11],y=e[15],D=m*x-d*_,U=h*x-d*v,P=h*_-m*v,G=c*x-d*g,A=c*_-m*g,z=c*v-h*g;return n*(C*D-M*U+y*P)-r*(b*D-M*G+y*A)+o*(b*U-C*G+y*z)-u*(b*P-C*A+M*z)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],h=e[5],m=e[6],d=e[7],g=e[8],v=e[9],_=e[10],x=e[11],b=e[12],C=e[13],M=e[14],y=e[15],D=n*h-r*c,U=n*m-o*c,P=n*d-u*c,G=r*m-o*h,A=r*d-u*h,z=o*d-u*m,T=g*C-v*b,N=g*M-_*b,ce=g*y-x*b,k=v*M-_*C,q=v*y-x*C,te=_*y-x*M,ee=D*te-U*q+P*k+G*ce-A*N+z*T;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/ee;return e[0]=(h*te-m*q+d*k)*X,e[1]=(o*q-r*te-u*k)*X,e[2]=(C*z-M*A+y*G)*X,e[3]=(_*A-v*z-x*G)*X,e[4]=(m*ce-c*te-d*N)*X,e[5]=(n*te-o*ce+u*N)*X,e[6]=(M*P-b*z-y*U)*X,e[7]=(g*z-_*P+x*U)*X,e[8]=(c*q-h*ce+d*T)*X,e[9]=(r*ce-n*q-u*T)*X,e[10]=(b*A-C*P+y*D)*X,e[11]=(v*P-g*A-x*D)*X,e[12]=(h*N-c*k-m*T)*X,e[13]=(n*k-r*N+o*T)*X,e[14]=(C*U-b*G-M*D)*X,e[15]=(g*G-v*U+_*D)*X,this}scale(e){const n=this.elements,r=e.x,o=e.y,u=e.z;return n[0]*=r,n[4]*=o,n[8]*=u,n[1]*=r,n[5]*=o,n[9]*=u,n[2]*=r,n[6]*=o,n[10]*=u,n[3]*=r,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),u=1-r,c=e.x,h=e.y,m=e.z,d=u*c,g=u*h;return this.set(d*c+r,d*h-o*m,d*m+o*h,0,d*h+o*m,g*h+r,g*m-o*c,0,d*m-o*h,g*m+o*c,u*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,u,c){return this.set(1,r,u,0,e,1,c,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,u=n._x,c=n._y,h=n._z,m=n._w,d=u+u,g=c+c,v=h+h,_=u*d,x=u*g,b=u*v,C=c*g,M=c*v,y=h*v,D=m*d,U=m*g,P=m*v,G=r.x,A=r.y,z=r.z;return o[0]=(1-(C+y))*G,o[1]=(x+P)*G,o[2]=(b-U)*G,o[3]=0,o[4]=(x-P)*A,o[5]=(1-(_+y))*A,o[6]=(M+D)*A,o[7]=0,o[8]=(b+U)*z,o[9]=(M-D)*z,o[10]=(1-(_+C))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const u=this.determinant();if(u===0)return r.set(1,1,1),n.identity(),this;let c=ks.set(o[0],o[1],o[2]).length();const h=ks.set(o[4],o[5],o[6]).length(),m=ks.set(o[8],o[9],o[10]).length();u<0&&(c=-c),Fi.copy(this);const d=1/c,g=1/h,v=1/m;return Fi.elements[0]*=d,Fi.elements[1]*=d,Fi.elements[2]*=d,Fi.elements[4]*=g,Fi.elements[5]*=g,Fi.elements[6]*=g,Fi.elements[8]*=v,Fi.elements[9]*=v,Fi.elements[10]*=v,n.setFromRotationMatrix(Fi),r.x=c,r.y=h,r.z=m,this}makePerspective(e,n,r,o,u,c,h=na,m=!1){const d=this.elements,g=2*u/(n-e),v=2*u/(r-o),_=(n+e)/(n-e),x=(r+o)/(r-o);let b,C;if(m)b=u/(c-u),C=c*u/(c-u);else if(h===na)b=-(c+u)/(c-u),C=-2*c*u/(c-u);else if(h===Rc)b=-c/(c-u),C=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=v,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,r,o,u,c,h=na,m=!1){const d=this.elements,g=2/(n-e),v=2/(r-o),_=-(n+e)/(n-e),x=-(r+o)/(r-o);let b,C;if(m)b=1/(c-u),C=c/(c-u);else if(h===na)b=-2/(c-u),C=-(c+u)/(c-u);else if(h===Rc)b=-1/(c-u),C=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=v,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=b,d[14]=C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const ks=new de,Fi=new fn,xE=new de(0,0,0),yE=new de(1,1,1),dr=new de,ju=new de,di=new de,Mv=new fn,bv=new fo;class Ba{constructor(e=0,n=0,r=0,o=Ba.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,u=o[0],c=o[4],h=o[8],m=o[1],d=o[5],g=o[9],v=o[2],_=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-At(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(At(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-At(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,x),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Mv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mv,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return bv.setFromEuler(this),this.setFromQuaternion(bv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ba.DEFAULT_ORDER="XYZ";class hy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let SE=0;const Ev=new de,Hs=new fo,Aa=new fn,Yu=new de,ll=new de,ME=new de,bE=new fo,Tv=new de(1,0,0),Av=new de(0,1,0),Cv=new de(0,0,1),wv={type:"added"},EE={type:"removed"},Gs={type:"childadded",child:null},ud={type:"childremoved",child:null};class ti extends co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=Cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const e=new de,n=new Ba,r=new fo,o=new de(1,1,1);function u(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new fn},normalMatrix:{value:new mt}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hs.setFromAxisAngle(e,n),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,n){return Hs.setFromAxisAngle(e,n),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(Tv,e)}rotateY(e){return this.rotateOnAxis(Av,e)}rotateZ(e){return this.rotateOnAxis(Cv,e)}translateOnAxis(e,n){return Ev.copy(e).applyQuaternion(this.quaternion),this.position.add(Ev.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Tv,e)}translateY(e){return this.translateOnAxis(Av,e)}translateZ(e){return this.translateOnAxis(Cv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Yu.copy(e):Yu.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(ll,Yu,this.up):Aa.lookAt(Yu,ll,this.up),this.quaternion.setFromRotationMatrix(Aa),o&&(Aa.extractRotation(o.matrixWorld),Hs.setFromRotationMatrix(Aa),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wv),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(EE),ud.child=e,this.dispatchEvent(ud),ud.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wv),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,e,ME),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,bE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,u=this.matrix.elements;u[12]+=n-u[0]*n-u[4]*r-u[8]*o,u[13]+=r-u[1]*n-u[5]*r-u[9]*o,u[14]+=o-u[2]*n-u[6]*r-u[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const v=m[d];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,d=this.material.length;m<d;m++)h.push(u(e.materials,this.material[m]));o.material=h}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(u(e.animations,m))}}if(n){const h=c(e.geometries),m=c(e.materials),d=c(e.textures),g=c(e.images),v=c(e.shapes),_=c(e.skeletons),x=c(e.animations),b=c(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),x.length>0&&(r.animations=x),b.length>0&&(r.nodes=b)}return r.object=o,r;function c(h){const m=[];for(const d in h){const g=h[d];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}ti.DEFAULT_UP=new de(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zu extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TE={type:"move"};class cd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,u=null,c=null;const h=this._targetRay,m=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const C of e.hand.values()){const M=n.getJointPose(C,r),y=this._getHandJoint(d,C);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,b=.005;d.inputState.pinching&&_>x+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=x-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&u!==null&&(o=u),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(TE)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=u!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Zu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const dy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},Ku={h:0,s:0,l:0};function fd(i,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(e-i)*6*n:n<1/2?e:n<2/3?i+(e-i)*6*(2/3-n):i}class Gt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Rt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Rt.workingColorSpace){if(e=hE(e,1),n=At(n,0,1),r=At(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,c=2*r-u;this.r=fd(c,u,e+1/3),this.g=fd(c,u,e),this.b=fd(c,u,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,n=Ci){function r(u){u!==void 0&&parseFloat(u)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=o[1],h=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ci){const r=dy[e.toLowerCase()];return r!==void 0?this.setHex(r,n):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ci){return Rt.workingToColorSpace(In.copy(this),e),Math.round(At(In.r*255,0,255))*65536+Math.round(At(In.g*255,0,255))*256+Math.round(At(In.b*255,0,255))}getHexString(e=Ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.workingToColorSpace(In.copy(this),n);const r=In.r,o=In.g,u=In.b,c=Math.max(r,o,u),h=Math.min(r,o,u);let m,d;const g=(h+c)/2;if(h===c)m=0,d=0;else{const v=c-h;switch(d=g<=.5?v/(c+h):v/(2-c-h),c){case r:m=(o-u)/v+(o<u?6:0);break;case o:m=(u-r)/v+2;break;case u:m=(r-o)/v+4;break}m/=6}return e.h=m,e.s=d,e.l=g,e}getRGB(e,n=Rt.workingColorSpace){return Rt.workingToColorSpace(In.copy(this),n),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Ci){Rt.workingToColorSpace(In.copy(this),e);const n=In.r,r=In.g,o=In.b;return e!==Ci?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+n,pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(pr),e.getHSL(Ku);const r=ad(pr.h,Ku.h,n),o=ad(pr.s,Ku.s,n),u=ad(pr.l,Ku.l,n);return this.setHSL(r,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*o,this.g=u[1]*n+u[4]*r+u[7]*o,this.b=u[2]*n+u[5]*r+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Gt;Gt.NAMES=dy;class AE extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ba,this.environmentIntensity=1,this.environmentRotation=new Ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Bi=new de,Ca=new de,hd=new de,wa=new de,Vs=new de,Xs=new de,Rv=new de,dd=new de,pd=new de,md=new de,gd=new cn,_d=new cn,vd=new cn;class Hi{constructor(e=new de,n=new de,r=new de){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Bi.subVectors(e,n),o.cross(Bi);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,n,r,o,u){Bi.subVectors(o,n),Ca.subVectors(r,n),hd.subVectors(e,n);const c=Bi.dot(Bi),h=Bi.dot(Ca),m=Bi.dot(hd),d=Ca.dot(Ca),g=Ca.dot(hd),v=c*d-h*h;if(v===0)return u.set(0,0,0),null;const _=1/v,x=(d*m-h*g)*_,b=(c*g-h*m)*_;return u.set(1-x-b,b,x)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,wa)===null?!1:wa.x>=0&&wa.y>=0&&wa.x+wa.y<=1}static getInterpolation(e,n,r,o,u,c,h,m){return this.getBarycoord(e,n,r,o,wa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,wa.x),m.addScaledVector(c,wa.y),m.addScaledVector(h,wa.z),m)}static getInterpolatedAttribute(e,n,r,o,u,c){return gd.setScalar(0),_d.setScalar(0),vd.setScalar(0),gd.fromBufferAttribute(e,n),_d.fromBufferAttribute(e,r),vd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(gd,u.x),c.addScaledVector(_d,u.y),c.addScaledVector(vd,u.z),c}static isFrontFacing(e,n,r,o){return Bi.subVectors(r,n),Ca.subVectors(e,n),Bi.cross(Ca).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),Bi.cross(Ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,u){return Hi.getInterpolation(e,this.a,this.b,this.c,n,r,o,u)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,u=this.c;let c,h;Vs.subVectors(o,r),Xs.subVectors(u,r),dd.subVectors(e,r);const m=Vs.dot(dd),d=Xs.dot(dd);if(m<=0&&d<=0)return n.copy(r);pd.subVectors(e,o);const g=Vs.dot(pd),v=Xs.dot(pd);if(g>=0&&v<=g)return n.copy(o);const _=m*v-g*d;if(_<=0&&m>=0&&g<=0)return c=m/(m-g),n.copy(r).addScaledVector(Vs,c);md.subVectors(e,u);const x=Vs.dot(md),b=Xs.dot(md);if(b>=0&&x<=b)return n.copy(u);const C=x*d-m*b;if(C<=0&&d>=0&&b<=0)return h=d/(d-b),n.copy(r).addScaledVector(Xs,h);const M=g*b-x*v;if(M<=0&&v-g>=0&&x-b>=0)return Rv.subVectors(u,o),h=(v-g)/(v-g+(x-b)),n.copy(o).addScaledVector(Rv,h);const y=1/(M+C+_);return c=C*y,h=_*y,n.copy(r).addScaledVector(Vs,c).addScaledVector(Xs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class wl{constructor(e=new de(1/0,1/0,1/0),n=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ki.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ki.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ki.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,h=u.count;c<h;c++)e.isMesh===!0?e.getVertexPosition(c,ki):ki.fromBufferAttribute(u,c),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Qu.copy(r.boundingBox)),Qu.applyMatrix4(e.matrixWorld),this.union(Qu)}const o=e.children;for(let u=0,c=o.length;u<c;u++)this.expandByObject(o[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ul),Ju.subVectors(this.max,ul),Ws.subVectors(e.a,ul),qs.subVectors(e.b,ul),js.subVectors(e.c,ul),mr.subVectors(qs,Ws),gr.subVectors(js,qs),Gr.subVectors(Ws,js);let n=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Gr.z,Gr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Gr.z,0,-Gr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Gr.y,Gr.x,0];return!xd(n,Ws,qs,js,Ju)||(n=[1,0,0,0,1,0,0,0,1],!xd(n,Ws,qs,js,Ju))?!1:($u.crossVectors(mr,gr),n=[$u.x,$u.y,$u.z],xd(n,Ws,qs,js,Ju))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ra=[new de,new de,new de,new de,new de,new de,new de,new de],ki=new de,Qu=new wl,Ws=new de,qs=new de,js=new de,mr=new de,gr=new de,Gr=new de,ul=new de,Ju=new de,$u=new de,Vr=new de;function xd(i,e,n,r,o){for(let u=0,c=i.length-3;u<=c;u+=3){Vr.fromArray(i,u);const h=o.x*Math.abs(Vr.x)+o.y*Math.abs(Vr.y)+o.z*Math.abs(Vr.z),m=e.dot(Vr),d=n.dot(Vr),g=r.dot(Vr);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>h)return!1}return!0}const xn=new de,ec=new qt;let CE=0;class _i{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=mv,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ec.fromBufferAttribute(this,n),ec.applyMatrix3(e),this.setXY(n,ec.x,ec.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix3(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix4(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)xn.fromBufferAttribute(this,n),xn.applyNormalMatrix(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)xn.fromBufferAttribute(this,n),xn.transformDirection(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=ol(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Jn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ol(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ol(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ol(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ol(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Jn(n,this.array),r=Jn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Jn(n,this.array),r=Jn(r,this.array),o=Jn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,u){return e*=this.itemSize,this.normalized&&(n=Jn(n,this.array),r=Jn(r,this.array),o=Jn(o,this.array),u=Jn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mv&&(e.usage=this.usage),e}}class py extends _i{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class my extends _i{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Ia extends _i{constructor(e,n,r){super(new Float32Array(e),n,r)}}const wE=new wl,cl=new de,yd=new de;class zc{constructor(e=new de,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):wE.setFromPoints(e).getCenter(r);let o=0;for(let u=0,c=e.length;u<c;u++)o=Math.max(o,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cl.subVectors(e,this.center);const n=cl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(cl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cl.copy(e.center).add(yd)),this.expandByPoint(cl.copy(e.center).sub(yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let RE=0;const Ai=new fn,Sd=new ti,Ys=new de,pi=new wl,fl=new wl,wn=new de;class Xi extends co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lE(e)?my:py)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new mt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,n,r){return Ai.makeTranslation(e,n,r),this.applyMatrix4(Ai),this}scale(e,n,r){return Ai.makeScale(e,n,r),this.applyMatrix4(Ai),this}lookAt(e){return Sd.lookAt(e),Sd.updateMatrix(),this.applyMatrix4(Sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,u=e.length;o<u;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ia(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const u=e[o];n.setXYZ(o,u.x,u.y,u.z||0)}e.length>n.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const u=n[r];pi.setFromBufferAttribute(u),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(e){const r=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),n)for(let u=0,c=n.length;u<c;u++){const h=n[u];fl.setFromBufferAttribute(h),this.morphTargetsRelative?(wn.addVectors(pi.min,fl.min),pi.expandByPoint(wn),wn.addVectors(pi.max,fl.max),pi.expandByPoint(wn)):(pi.expandByPoint(fl.min),pi.expandByPoint(fl.max))}pi.getCenter(r);let o=0;for(let u=0,c=e.count;u<c;u++)wn.fromBufferAttribute(e,u),o=Math.max(o,r.distanceToSquared(wn));if(n)for(let u=0,c=n.length;u<c;u++){const h=n[u],m=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)wn.fromBufferAttribute(h,d),m&&(Ys.fromBufferAttribute(e,d),wn.add(Ys)),o=Math.max(o,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),h=[],m=[];for(let T=0;T<r.count;T++)h[T]=new de,m[T]=new de;const d=new de,g=new de,v=new de,_=new qt,x=new qt,b=new qt,C=new de,M=new de;function y(T,N,ce){d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,N),v.fromBufferAttribute(r,ce),_.fromBufferAttribute(u,T),x.fromBufferAttribute(u,N),b.fromBufferAttribute(u,ce),g.sub(d),v.sub(d),x.sub(_),b.sub(_);const k=1/(x.x*b.y-b.x*x.y);isFinite(k)&&(C.copy(g).multiplyScalar(b.y).addScaledVector(v,-x.y).multiplyScalar(k),M.copy(v).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(k),h[T].add(C),h[N].add(C),h[ce].add(C),m[T].add(M),m[N].add(M),m[ce].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let T=0,N=D.length;T<N;++T){const ce=D[T],k=ce.start,q=ce.count;for(let te=k,ee=k+q;te<ee;te+=3)y(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const U=new de,P=new de,G=new de,A=new de;function z(T){G.fromBufferAttribute(o,T),A.copy(G);const N=h[T];U.copy(N),U.sub(G.multiplyScalar(G.dot(N))).normalize(),P.crossVectors(A,N);const k=P.dot(m[T])<0?-1:1;c.setXYZW(T,U.x,U.y,U.z,k)}for(let T=0,N=D.length;T<N;++T){const ce=D[T],k=ce.start,q=ce.count;for(let te=k,ee=k+q;te<ee;te+=3)z(e.getX(te+0)),z(e.getX(te+1)),z(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _i(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,x=r.count;_<x;_++)r.setXYZ(_,0,0,0);const o=new de,u=new de,c=new de,h=new de,m=new de,d=new de,g=new de,v=new de;if(e)for(let _=0,x=e.count;_<x;_+=3){const b=e.getX(_+0),C=e.getX(_+1),M=e.getX(_+2);o.fromBufferAttribute(n,b),u.fromBufferAttribute(n,C),c.fromBufferAttribute(n,M),g.subVectors(c,u),v.subVectors(o,u),g.cross(v),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),d.fromBufferAttribute(r,M),h.add(g),m.add(g),d.add(g),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,d.x,d.y,d.z)}else for(let _=0,x=n.count;_<x;_+=3)o.fromBufferAttribute(n,_+0),u.fromBufferAttribute(n,_+1),c.fromBufferAttribute(n,_+2),g.subVectors(c,u),v.subVectors(o,u),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)wn.fromBufferAttribute(e,n),wn.normalize(),e.setXYZ(n,wn.x,wn.y,wn.z)}toNonIndexed(){function e(h,m){const d=h.array,g=h.itemSize,v=h.normalized,_=new d.constructor(m.length*g);let x=0,b=0;for(let C=0,M=m.length;C<M;C++){h.isInterleavedBufferAttribute?x=m[C]*h.data.stride+h.offset:x=m[C]*g;for(let y=0;y<g;y++)_[b++]=d[x++]}return new _i(_,g,v)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xi,r=this.index.array,o=this.attributes;for(const h in o){const m=o[h],d=e(m,r);n.setAttribute(h,d)}const u=this.morphAttributes;for(const h in u){const m=[],d=u[h];for(let g=0,v=d.length;g<v;g++){const _=d[g],x=e(_,r);m.push(x)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,m=c.length;h<m;h++){const d=c[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const d=r[m];e.data.attributes[m]=d.toJSON(e.data)}const o={};let u=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let v=0,_=d.length;v<_;v++){const x=d[v];g.push(x.toJSON(e.data))}g.length>0&&(o[m]=g,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const u=e.morphAttributes;for(const d in u){const g=[],v=u[d];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,g=c.length;d<g;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let DE=0;class Rl extends co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=Cl(),this.name="",this.type="Material",this.blending=to,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yd,this.blendDst=Zd,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){lt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){lt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(r.blending=this.blending),this.side!==Mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yd&&(r.blendSrc=this.blendSrc),this.blendDst!==Zd&&(r.blendDst=this.blendDst),this.blendEquation!==Zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(u){const c=[];for(const h in u){const m=u[h];delete m.metadata,c.push(m)}return c}if(n){const u=o(e.textures),c=o(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let u=0;u!==o;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Da=new de,Md=new de,tc=new de,_r=new de,bd=new de,nc=new de,Ed=new de;class gy{constructor(e=new de,n=new de(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Da.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,n),Da.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Md.copy(e).add(n).multiplyScalar(.5),tc.copy(n).sub(e).normalize(),_r.copy(this.origin).sub(Md);const u=e.distanceTo(n)*.5,c=-this.direction.dot(tc),h=_r.dot(this.direction),m=-_r.dot(tc),d=_r.lengthSq(),g=Math.abs(1-c*c);let v,_,x,b;if(g>0)if(v=c*m-h,_=c*h-m,b=u*g,v>=0)if(_>=-b)if(_<=b){const C=1/g;v*=C,_*=C,x=v*(v+c*_+2*h)+_*(c*v+_+2*m)+d}else _=u,v=Math.max(0,-(c*_+h)),x=-v*v+_*(_+2*m)+d;else _=-u,v=Math.max(0,-(c*_+h)),x=-v*v+_*(_+2*m)+d;else _<=-b?(v=Math.max(0,-(-c*u+h)),_=v>0?-u:Math.min(Math.max(-u,-m),u),x=-v*v+_*(_+2*m)+d):_<=b?(v=0,_=Math.min(Math.max(-u,-m),u),x=_*(_+2*m)+d):(v=Math.max(0,-(c*u+h)),_=v>0?u:Math.min(Math.max(-u,-m),u),x=-v*v+_*(_+2*m)+d);else _=c>0?-u:u,v=Math.max(0,-(c*_+h)),x=-v*v+_*(_+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Md).addScaledVector(tc,_),x}intersectSphere(e,n){Da.subVectors(e.center,this.origin);const r=Da.dot(this.direction),o=Da.dot(Da)-r*r,u=e.radius*e.radius;if(o>u)return null;const c=Math.sqrt(u-o),h=r-c,m=r+c;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,u,c,h,m;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(r=(e.min.x-_.x)*d,o=(e.max.x-_.x)*d):(r=(e.max.x-_.x)*d,o=(e.min.x-_.x)*d),g>=0?(u=(e.min.y-_.y)*g,c=(e.max.y-_.y)*g):(u=(e.max.y-_.y)*g,c=(e.min.y-_.y)*g),r>c||u>o||((u>r||isNaN(r))&&(r=u),(c<o||isNaN(o))&&(o=c),v>=0?(h=(e.min.z-_.z)*v,m=(e.max.z-_.z)*v):(h=(e.max.z-_.z)*v,m=(e.min.z-_.z)*v),r>m||h>o)||((h>r||r!==r)&&(r=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,n,r,o,u){bd.subVectors(n,e),nc.subVectors(r,e),Ed.crossVectors(bd,nc);let c=this.direction.dot(Ed),h;if(c>0){if(o)return null;h=1}else if(c<0)h=-1,c=-c;else return null;_r.subVectors(this.origin,e);const m=h*this.direction.dot(nc.crossVectors(_r,nc));if(m<0)return null;const d=h*this.direction.dot(bd.cross(_r));if(d<0||m+d>c)return null;const g=-h*_r.dot(Ed);return g<0?null:this.at(g/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _y extends Rl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ba,this.combine=Yx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dv=new fn,Xr=new gy,ic=new zc,Uv=new de,ac=new de,rc=new de,sc=new de,Td=new de,oc=new de,Lv=new de,lc=new de;class ka extends ti{constructor(e=new Xi,n=new _y){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(u&&h){oc.set(0,0,0);for(let m=0,d=u.length;m<d;m++){const g=h[m],v=u[m];g!==0&&(Td.fromBufferAttribute(v,e),c?oc.addScaledVector(Td,g):oc.addScaledVector(Td.sub(n),g))}n.add(oc)}return n}raycast(e,n){const r=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ic.copy(r.boundingSphere),ic.applyMatrix4(u),Xr.copy(e.ray).recast(e.near),!(ic.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(ic,Uv)===null||Xr.origin.distanceToSquared(Uv)>(e.far-e.near)**2))&&(Dv.copy(u).invert(),Xr.copy(e.ray).applyMatrix4(Dv),!(r.boundingBox!==null&&Xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Xr)))}_computeIntersections(e,n,r){let o;const u=this.geometry,c=this.material,h=u.index,m=u.attributes.position,d=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,_=u.groups,x=u.drawRange;if(h!==null)if(Array.isArray(c))for(let b=0,C=_.length;b<C;b++){const M=_[b],y=c[M.materialIndex],D=Math.max(M.start,x.start),U=Math.min(h.count,Math.min(M.start+M.count,x.start+x.count));for(let P=D,G=U;P<G;P+=3){const A=h.getX(P),z=h.getX(P+1),T=h.getX(P+2);o=uc(this,y,e,r,d,g,v,A,z,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),C=Math.min(h.count,x.start+x.count);for(let M=b,y=C;M<y;M+=3){const D=h.getX(M),U=h.getX(M+1),P=h.getX(M+2);o=uc(this,c,e,r,d,g,v,D,U,P),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(c))for(let b=0,C=_.length;b<C;b++){const M=_[b],y=c[M.materialIndex],D=Math.max(M.start,x.start),U=Math.min(m.count,Math.min(M.start+M.count,x.start+x.count));for(let P=D,G=U;P<G;P+=3){const A=P,z=P+1,T=P+2;o=uc(this,y,e,r,d,g,v,A,z,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),C=Math.min(m.count,x.start+x.count);for(let M=b,y=C;M<y;M+=3){const D=M,U=M+1,P=M+2;o=uc(this,c,e,r,d,g,v,D,U,P),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function UE(i,e,n,r,o,u,c,h){let m;if(e.side===ei?m=r.intersectTriangle(c,u,o,!0,h):m=r.intersectTriangle(o,u,c,e.side===Mr,h),m===null)return null;lc.copy(h),lc.applyMatrix4(i.matrixWorld);const d=n.ray.origin.distanceTo(lc);return d<n.near||d>n.far?null:{distance:d,point:lc.clone(),object:i}}function uc(i,e,n,r,o,u,c,h,m,d){i.getVertexPosition(h,ac),i.getVertexPosition(m,rc),i.getVertexPosition(d,sc);const g=UE(i,e,n,r,ac,rc,sc,Lv);if(g){const v=new de;Hi.getBarycoord(Lv,ac,rc,sc,v),o&&(g.uv=Hi.getInterpolatedAttribute(o,h,m,d,v,new qt)),u&&(g.uv1=Hi.getInterpolatedAttribute(u,h,m,d,v,new qt)),c&&(g.normal=Hi.getInterpolatedAttribute(c,h,m,d,v,new de),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:m,c:d,normal:new de,materialIndex:0};Hi.getNormal(ac,rc,sc,_.normal),g.face=_,g.barycoord=v}return g}class LE extends Wn{constructor(e=null,n=1,r=1,o,u,c,h,m,d=Nn,g=Nn,v,_){super(null,c,h,m,d,g,o,u,v,_),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ad=new de,NE=new de,OE=new mt;class Yr{constructor(e=new de(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Ad.subVectors(r,n).cross(NE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Ad),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||OE.getNormalMatrix(e),o=this.coplanarPoint(Ad).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new zc,PE=new qt(.5,.5),cc=new de;class vy{constructor(e=new Yr,n=new Yr,r=new Yr,o=new Yr,u=new Yr,c=new Yr){this.planes=[e,n,r,o,u,c]}set(e,n,r,o,u,c){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(r),h[3].copy(o),h[4].copy(u),h[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=na,r=!1){const o=this.planes,u=e.elements,c=u[0],h=u[1],m=u[2],d=u[3],g=u[4],v=u[5],_=u[6],x=u[7],b=u[8],C=u[9],M=u[10],y=u[11],D=u[12],U=u[13],P=u[14],G=u[15];if(o[0].setComponents(d-c,x-g,y-b,G-D).normalize(),o[1].setComponents(d+c,x+g,y+b,G+D).normalize(),o[2].setComponents(d+h,x+v,y+C,G+U).normalize(),o[3].setComponents(d-h,x-v,y-C,G-U).normalize(),r)o[4].setComponents(m,_,M,P).normalize(),o[5].setComponents(d-m,x-_,y-M,G-P).normalize();else if(o[4].setComponents(d-m,x-_,y-M,G-P).normalize(),n===na)o[5].setComponents(d+m,x+_,y+M,G+P).normalize();else if(n===Rc)o[5].setComponents(m,_,M,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){Wr.center.set(0,0,0);const n=PE.distanceTo(e.center);return Wr.radius=.7071067811865476+n,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(cc.x=o.normal.x>0?e.max.x:e.min.x,cc.y=o.normal.y>0?e.max.y:e.min.y,cc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class IE extends Rl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nv=new fn,Fp=new gy,fc=new zc,hc=new de;class zE extends ti{constructor(e=new Xi,n=new IE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,u=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fc.copy(r.boundingSphere),fc.applyMatrix4(o),fc.radius+=u,e.ray.intersectsSphere(fc)===!1)return;Nv.copy(o).invert(),Fp.copy(e.ray).applyMatrix4(Nv);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,d=r.index,v=r.attributes.position;if(d!==null){const _=Math.max(0,c.start),x=Math.min(d.count,c.start+c.count);for(let b=_,C=x;b<C;b++){const M=d.getX(b);hc.fromBufferAttribute(v,M),Ov(hc,M,m,o,e,n,this)}}else{const _=Math.max(0,c.start),x=Math.min(v.count,c.start+c.count);for(let b=_,C=x;b<C;b++)hc.fromBufferAttribute(v,b),Ov(hc,b,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Ov(i,e,n,r,o,u,c){const h=Fp.distanceSqToPoint(i);if(h<n){const m=new de;Fp.closestPointToPoint(i,m),m.applyMatrix4(r);const d=o.ray.origin.distanceTo(m);if(d<o.near||d>o.far)return;u.push({distance:d,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class xy extends Wn{constructor(e=[],n=es,r,o,u,c,h,m,d,g){super(e,n,r,o,u,c,h,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tl extends Wn{constructor(e,n,r=ra,o,u,c,h=Nn,m=Nn,d,g=Fa,v=1){if(g!==Fa&&g!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:v};super(_,o,u,c,h,m,g,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class FE extends Tl{constructor(e,n=ra,r=es,o,u,c=Nn,h=Nn,m,d=Fa){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,n,r,o,u,c,h,m,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class yy extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Dl extends Xi{constructor(e=1,n=1,r=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:u,depthSegments:c};const h=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);const m=[],d=[],g=[],v=[];let _=0,x=0;b("z","y","x",-1,-1,r,n,e,c,u,0),b("z","y","x",1,-1,r,n,-e,c,u,1),b("x","z","y",1,1,e,r,n,o,c,2),b("x","z","y",1,-1,e,r,-n,o,c,3),b("x","y","z",1,-1,e,n,r,o,u,4),b("x","y","z",-1,-1,e,n,-r,o,u,5),this.setIndex(m),this.setAttribute("position",new Ia(d,3)),this.setAttribute("normal",new Ia(g,3)),this.setAttribute("uv",new Ia(v,2));function b(C,M,y,D,U,P,G,A,z,T,N){const ce=P/z,k=G/T,q=P/2,te=G/2,ee=A/2,X=z+1,I=T+1;let H=0,le=0;const ge=new de;for(let O=0;O<I;O++){const B=O*k-te;for(let Q=0;Q<X;Q++){const L=Q*ce-q;ge[C]=L*D,ge[M]=B*U,ge[y]=ee,d.push(ge.x,ge.y,ge.z),ge[C]=0,ge[M]=0,ge[y]=A>0?1:-1,g.push(ge.x,ge.y,ge.z),v.push(Q/z),v.push(1-O/T),H+=1}}for(let O=0;O<T;O++)for(let B=0;B<z;B++){const Q=_+B+X*O,L=_+B+X*(O+1),Ae=_+(B+1)+X*(O+1),Pe=_+(B+1)+X*O;m.push(Q,L,Pe),m.push(L,Ae,Pe),le+=6}h.addGroup(x,le,N),x+=le,_+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Fc extends Xi{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const u=e/2,c=n/2,h=Math.floor(r),m=Math.floor(o),d=h+1,g=m+1,v=e/h,_=n/m,x=[],b=[],C=[],M=[];for(let y=0;y<g;y++){const D=y*_-c;for(let U=0;U<d;U++){const P=U*v-u;b.push(P,-D,0),C.push(0,0,1),M.push(U/h),M.push(1-y/m)}}for(let y=0;y<m;y++)for(let D=0;D<h;D++){const U=D+d*y,P=D+d*(y+1),G=D+1+d*(y+1),A=D+1+d*y;x.push(U,P,A),x.push(P,G,A)}this.setIndex(x),this.setAttribute("position",new Ia(b,3)),this.setAttribute("normal",new Ia(C,3)),this.setAttribute("uv",new Ia(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.width,e.height,e.widthSegments,e.heightSegments)}}function uo(i){const e={};for(const n in i){e[n]={};for(const r in i[n]){const o=i[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function Xn(i){const e={};for(let n=0;n<i.length;n++){const r=uo(i[n]);for(const o in r)e[o]=r[o]}return e}function BE(i){const e=[];for(let n=0;n<i.length;n++)e.push(i[n].clone());return e}function Sy(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const kE={clone:uo,merge:Xn};var HE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends Rl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HE,this.fragmentShader=GE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=BE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class VE extends Vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class XE extends Rl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$b,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WE extends Rl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dc=new de,pc=new fo,Ki=new de;class My extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=na,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dc,pc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dc,pc,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(dc,pc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dc,pc,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const vr=new de,Pv=new qt,Iv=new qt;class wi extends My{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(id*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zp*2*Math.atan(Math.tan(id*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,n){return this.getViewBounds(e,Pv,Iv),n.subVectors(Iv,Pv)}setViewOffset(e,n,r,o,u,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(id*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,u=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const m=c.fullWidth,d=c.fullHeight;u+=c.offsetX*o/m,n-=c.offsetY*r/d,o*=c.width/m,r*=c.height/d}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class by extends My{constructor(e=-1,n=1,r=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=r-e,c=r+e,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,c=u+d*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,c,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Zs=-90,Ks=1;class qE extends ti{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new wi(Zs,Ks,e,n);o.layers=this.layers,this.add(o);const u=new wi(Zs,Ks,e,n);u.layers=this.layers,this.add(u);const c=new wi(Zs,Ks,e,n);c.layers=this.layers,this.add(c);const h=new wi(Zs,Ks,e,n);h.layers=this.layers,this.add(h);const m=new wi(Zs,Ks,e,n);m.layers=this.layers,this.add(m);const d=new wi(Zs,Ks,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,u,c,h,m]=n;for(const d of n)this.remove(d);if(e===na)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Rc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,h,m,d,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,1,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,2,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,3,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(r,4,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,g),e.setRenderTarget(v,_,x),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class jE extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class YE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,lt("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function zv(i,e,n,r){const o=ZE(r);switch(n){case oy:return i*e;case uy:return i*e/o.components*o.byteLength;case im:return i*e/o.components*o.byteLength;case oo:return i*e*2/o.components*o.byteLength;case am:return i*e*2/o.components*o.byteLength;case ly:return i*e*3/o.components*o.byteLength;case Gi:return i*e*4/o.components*o.byteLength;case rm:return i*e*4/o.components*o.byteLength;case Mc:case bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ec:case Tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sp:case lp:return Math.max(i,16)*Math.max(e,8)/4;case rp:case op:return Math.max(i,8)*Math.max(e,8)/2;case up:case cp:case hp:case dp:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fp:case pp:case mp:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gp:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _p:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case vp:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xp:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yp:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bp:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ep:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Tp:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ap:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Cp:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wp:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Rp:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Dp:case Up:case Lp:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Np:case Op:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Pp:case Ip:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ZE(i){switch(i){case Di:case iy:return{byteLength:1,components:1};case bl:case ay:case za:return{byteLength:2,components:1};case tm:case nm:return{byteLength:2,components:4};case ra:case em:case ta:return{byteLength:4,components:1};case ry:case sy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$p}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$p);function Ey(){let i=null,e=!1,n=null,r=null;function o(u,c){n(u,c),r=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){i=u}}}function KE(i){const e=new WeakMap;function n(h,m){const d=h.array,g=h.usage,v=d.byteLength,_=i.createBuffer();i.bindBuffer(m,_),i.bufferData(m,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=i.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,d){const g=m.array,v=m.updateRanges;if(i.bindBuffer(d,h),v.length===0)i.bufferSubData(d,0,g);else{v.sort((x,b)=>x.start-b.start);let _=0;for(let x=1;x<v.length;x++){const b=v[_],C=v[x];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++_,v[_]=C)}v.length=_+1;for(let x=0,b=v.length;x<b;x++){const C=v[x];i.bufferSubData(d,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(i.deleteBuffer(m.buffer),e.delete(h))}function c(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,n(h,m));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,m),d.version=h.version}}return{get:o,remove:u,update:c}}var QE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$E=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,a1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,s1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,c1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,f1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,v1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,x1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,y1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,S1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,M1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C1="gl_FragColor = linearToOutputTexel( gl_FragColor );",w1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,D1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,U1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,B1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,V1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,X1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Z1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,K1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,J1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ST=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ET=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,AT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,NT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,FT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$T=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_A=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,SA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:QE,alphahash_pars_fragment:JE,alphamap_fragment:$E,alphamap_pars_fragment:e1,alphatest_fragment:t1,alphatest_pars_fragment:n1,aomap_fragment:i1,aomap_pars_fragment:a1,batching_pars_vertex:r1,batching_vertex:s1,begin_vertex:o1,beginnormal_vertex:l1,bsdfs:u1,iridescence_fragment:c1,bumpmap_pars_fragment:f1,clipping_planes_fragment:h1,clipping_planes_pars_fragment:d1,clipping_planes_pars_vertex:p1,clipping_planes_vertex:m1,color_fragment:g1,color_pars_fragment:_1,color_pars_vertex:v1,color_vertex:x1,common:y1,cube_uv_reflection_fragment:S1,defaultnormal_vertex:M1,displacementmap_pars_vertex:b1,displacementmap_vertex:E1,emissivemap_fragment:T1,emissivemap_pars_fragment:A1,colorspace_fragment:C1,colorspace_pars_fragment:w1,envmap_fragment:R1,envmap_common_pars_fragment:D1,envmap_pars_fragment:U1,envmap_pars_vertex:L1,envmap_physical_pars_fragment:V1,envmap_vertex:N1,fog_vertex:O1,fog_pars_vertex:P1,fog_fragment:I1,fog_pars_fragment:z1,gradientmap_pars_fragment:F1,lightmap_pars_fragment:B1,lights_lambert_fragment:k1,lights_lambert_pars_fragment:H1,lights_pars_begin:G1,lights_toon_fragment:X1,lights_toon_pars_fragment:W1,lights_phong_fragment:q1,lights_phong_pars_fragment:j1,lights_physical_fragment:Y1,lights_physical_pars_fragment:Z1,lights_fragment_begin:K1,lights_fragment_maps:Q1,lights_fragment_end:J1,logdepthbuf_fragment:$1,logdepthbuf_pars_fragment:eT,logdepthbuf_pars_vertex:tT,logdepthbuf_vertex:nT,map_fragment:iT,map_pars_fragment:aT,map_particle_fragment:rT,map_particle_pars_fragment:sT,metalnessmap_fragment:oT,metalnessmap_pars_fragment:lT,morphinstance_vertex:uT,morphcolor_vertex:cT,morphnormal_vertex:fT,morphtarget_pars_vertex:hT,morphtarget_vertex:dT,normal_fragment_begin:pT,normal_fragment_maps:mT,normal_pars_fragment:gT,normal_pars_vertex:_T,normal_vertex:vT,normalmap_pars_fragment:xT,clearcoat_normal_fragment_begin:yT,clearcoat_normal_fragment_maps:ST,clearcoat_pars_fragment:MT,iridescence_pars_fragment:bT,opaque_fragment:ET,packing:TT,premultiplied_alpha_fragment:AT,project_vertex:CT,dithering_fragment:wT,dithering_pars_fragment:RT,roughnessmap_fragment:DT,roughnessmap_pars_fragment:UT,shadowmap_pars_fragment:LT,shadowmap_pars_vertex:NT,shadowmap_vertex:OT,shadowmask_pars_fragment:PT,skinbase_vertex:IT,skinning_pars_vertex:zT,skinning_vertex:FT,skinnormal_vertex:BT,specularmap_fragment:kT,specularmap_pars_fragment:HT,tonemapping_fragment:GT,tonemapping_pars_fragment:VT,transmission_fragment:XT,transmission_pars_fragment:WT,uv_pars_fragment:qT,uv_pars_vertex:jT,uv_vertex:YT,worldpos_vertex:ZT,background_vert:KT,background_frag:QT,backgroundCube_vert:JT,backgroundCube_frag:$T,cube_vert:eA,cube_frag:tA,depth_vert:nA,depth_frag:iA,distance_vert:aA,distance_frag:rA,equirect_vert:sA,equirect_frag:oA,linedashed_vert:lA,linedashed_frag:uA,meshbasic_vert:cA,meshbasic_frag:fA,meshlambert_vert:hA,meshlambert_frag:dA,meshmatcap_vert:pA,meshmatcap_frag:mA,meshnormal_vert:gA,meshnormal_frag:_A,meshphong_vert:vA,meshphong_frag:xA,meshphysical_vert:yA,meshphysical_frag:SA,meshtoon_vert:MA,meshtoon_frag:bA,points_vert:EA,points_frag:TA,shadow_vert:AA,shadow_frag:CA,sprite_vert:wA,sprite_frag:RA},Fe={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},$i={basic:{uniforms:Xn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Xn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Xn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Xn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Xn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Gt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Xn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Xn([Fe.points,Fe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Xn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Xn([Fe.common,Fe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Xn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Xn([Fe.sprite,Fe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Xn([Fe.common,Fe.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Xn([Fe.lights,Fe.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};$i.physical={uniforms:Xn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const mc={r:0,b:0,g:0},qr=new Ba,DA=new fn;function UA(i,e,n,r,o,u){const c=new Gt(0);let h=o===!0?0:1,m,d,g=null,v=0,_=null;function x(D){let U=D.isScene===!0?D.background:null;if(U&&U.isTexture){const P=D.backgroundBlurriness>0;U=e.get(U,P)}return U}function b(D){let U=!1;const P=x(D);P===null?M(c,h):P&&P.isColor&&(M(P,1),U=!0);const G=i.xr.getEnvironmentBlendMode();G==="additive"?n.buffers.color.setClear(0,0,0,1,u):G==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(i.autoClear||U)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function C(D,U){const P=x(U);P&&(P.isCubeTexture||P.mapping===Ic)?(d===void 0&&(d=new ka(new Dl(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:uo($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(G,A,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),qr.copy(U.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),d.material.uniforms.envMap.value=P,d.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(DA.makeRotationFromEuler(qr)),d.material.toneMapped=Rt.getTransfer(P.colorSpace)!==Ht,(g!==P||v!==P.version||_!==i.toneMapping)&&(d.material.needsUpdate=!0,g=P,v=P.version,_=i.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new ka(new Fc(2,2),new Vi({name:"BackgroundMaterial",uniforms:uo($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(P.colorSpace)!==Ht,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||v!==P.version||_!==i.toneMapping)&&(m.material.needsUpdate=!0,g=P,v=P.version,_=i.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function M(D,U){D.getRGB(mc,Sy(i)),n.buffers.color.setClear(mc.r,mc.g,mc.b,U,u)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return c},setClearColor:function(D,U=1){c.set(D),h=U,M(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,M(c,h)},render:b,addToRenderList:C,dispose:y}}function LA(i,e){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},o=_(null);let u=o,c=!1;function h(k,q,te,ee,X){let I=!1;const H=v(k,ee,te,q);u!==H&&(u=H,d(u.object)),I=x(k,ee,te,X),I&&b(k,ee,te,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(I||c)&&(c=!1,P(k,q,te,ee),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function m(){return i.createVertexArray()}function d(k){return i.bindVertexArray(k)}function g(k){return i.deleteVertexArray(k)}function v(k,q,te,ee){const X=ee.wireframe===!0;let I=r[q.id];I===void 0&&(I={},r[q.id]=I);const H=k.isInstancedMesh===!0?k.id:0;let le=I[H];le===void 0&&(le={},I[H]=le);let ge=le[te.id];ge===void 0&&(ge={},le[te.id]=ge);let O=ge[X];return O===void 0&&(O=_(m()),ge[X]=O),O}function _(k){const q=[],te=[],ee=[];for(let X=0;X<n;X++)q[X]=0,te[X]=0,ee[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:te,attributeDivisors:ee,object:k,attributes:{},index:null}}function x(k,q,te,ee){const X=u.attributes,I=q.attributes;let H=0;const le=te.getAttributes();for(const ge in le)if(le[ge].location>=0){const B=X[ge];let Q=I[ge];if(Q===void 0&&(ge==="instanceMatrix"&&k.instanceMatrix&&(Q=k.instanceMatrix),ge==="instanceColor"&&k.instanceColor&&(Q=k.instanceColor)),B===void 0||B.attribute!==Q||Q&&B.data!==Q.data)return!0;H++}return u.attributesNum!==H||u.index!==ee}function b(k,q,te,ee){const X={},I=q.attributes;let H=0;const le=te.getAttributes();for(const ge in le)if(le[ge].location>=0){let B=I[ge];B===void 0&&(ge==="instanceMatrix"&&k.instanceMatrix&&(B=k.instanceMatrix),ge==="instanceColor"&&k.instanceColor&&(B=k.instanceColor));const Q={};Q.attribute=B,B&&B.data&&(Q.data=B.data),X[ge]=Q,H++}u.attributes=X,u.attributesNum=H,u.index=ee}function C(){const k=u.newAttributes;for(let q=0,te=k.length;q<te;q++)k[q]=0}function M(k){y(k,0)}function y(k,q){const te=u.newAttributes,ee=u.enabledAttributes,X=u.attributeDivisors;te[k]=1,ee[k]===0&&(i.enableVertexAttribArray(k),ee[k]=1),X[k]!==q&&(i.vertexAttribDivisor(k,q),X[k]=q)}function D(){const k=u.newAttributes,q=u.enabledAttributes;for(let te=0,ee=q.length;te<ee;te++)q[te]!==k[te]&&(i.disableVertexAttribArray(te),q[te]=0)}function U(k,q,te,ee,X,I,H){H===!0?i.vertexAttribIPointer(k,q,te,X,I):i.vertexAttribPointer(k,q,te,ee,X,I)}function P(k,q,te,ee){C();const X=ee.attributes,I=te.getAttributes(),H=q.defaultAttributeValues;for(const le in I){const ge=I[le];if(ge.location>=0){let O=X[le];if(O===void 0&&(le==="instanceMatrix"&&k.instanceMatrix&&(O=k.instanceMatrix),le==="instanceColor"&&k.instanceColor&&(O=k.instanceColor)),O!==void 0){const B=O.normalized,Q=O.itemSize,L=e.get(O);if(L===void 0)continue;const Ae=L.buffer,Pe=L.type,ae=L.bytesPerElement,xe=Pe===i.INT||Pe===i.UNSIGNED_INT||O.gpuType===em;if(O.isInterleavedBufferAttribute){const Ee=O.data,Be=Ee.stride,Ze=O.offset;if(Ee.isInstancedInterleavedBuffer){for(let $e=0;$e<ge.locationSize;$e++)y(ge.location+$e,Ee.meshPerAttribute);k.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let $e=0;$e<ge.locationSize;$e++)M(ge.location+$e);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let $e=0;$e<ge.locationSize;$e++)U(ge.location+$e,Q/ge.locationSize,Pe,B,Be*ae,(Ze+Q/ge.locationSize*$e)*ae,xe)}else{if(O.isInstancedBufferAttribute){for(let Ee=0;Ee<ge.locationSize;Ee++)y(ge.location+Ee,O.meshPerAttribute);k.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let Ee=0;Ee<ge.locationSize;Ee++)M(ge.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let Ee=0;Ee<ge.locationSize;Ee++)U(ge.location+Ee,Q/ge.locationSize,Pe,B,Q*ae,Q/ge.locationSize*Ee*ae,xe)}}else if(H!==void 0){const B=H[le];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(ge.location,B);break;case 3:i.vertexAttrib3fv(ge.location,B);break;case 4:i.vertexAttrib4fv(ge.location,B);break;default:i.vertexAttrib1fv(ge.location,B)}}}}D()}function G(){N();for(const k in r){const q=r[k];for(const te in q){const ee=q[te];for(const X in ee){const I=ee[X];for(const H in I)g(I[H].object),delete I[H];delete ee[X]}}delete r[k]}}function A(k){if(r[k.id]===void 0)return;const q=r[k.id];for(const te in q){const ee=q[te];for(const X in ee){const I=ee[X];for(const H in I)g(I[H].object),delete I[H];delete ee[X]}}delete r[k.id]}function z(k){for(const q in r){const te=r[q];for(const ee in te){const X=te[ee];if(X[k.id]===void 0)continue;const I=X[k.id];for(const H in I)g(I[H].object),delete I[H];delete X[k.id]}}}function T(k){for(const q in r){const te=r[q],ee=k.isInstancedMesh===!0?k.id:0,X=te[ee];if(X!==void 0){for(const I in X){const H=X[I];for(const le in H)g(H[le].object),delete H[le];delete X[I]}delete te[ee],Object.keys(te).length===0&&delete r[q]}}}function N(){ce(),c=!0,u!==o&&(u=o,d(u.object))}function ce(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:N,resetDefaultState:ce,dispose:G,releaseStatesOfGeometry:A,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:M,disableUnusedAttributes:D}}function NA(i,e,n){let r;function o(d){r=d}function u(d,g){i.drawArrays(r,d,g),n.update(g,r,1)}function c(d,g,v){v!==0&&(i.drawArraysInstanced(r,d,g,v),n.update(g,r,v))}function h(d,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,g,0,v);let x=0;for(let b=0;b<v;b++)x+=g[b];n.update(x,r,1)}function m(d,g,v,_){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let b=0;b<d.length;b++)c(d[b],g[b],_[b]);else{x.multiDrawArraysInstancedWEBGL(r,d,0,g,0,_,0,v);let b=0;for(let C=0;C<v;C++)b+=g[C]*_[C];n.update(b,r,1)}}this.setMode=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function OA(i,e,n,r){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(z){return!(z!==Gi&&r.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const T=z===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Di&&r.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ta&&!T)}function m(z){if(z==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=m(d);g!==d&&(lt("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),U=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),G=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:c,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:P,maxSamples:G,samples:A}}function PA(i){const e=this;let n=null,r=0,o=!1,u=!1;const c=new Yr,h=new mt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||r!==0||o;return o=_,r=v.length,x},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,x){const b=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,y=i.get(v);if(!o||b===null||b.length===0||u&&!M)u?g(null):d();else{const D=u?0:r,U=D*4;let P=y.clippingState||null;m.value=P,P=g(b,_,U,x);for(let G=0;G!==U;++G)P[G]=n[G];y.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function d(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,_,x,b){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=m.value,b!==!0||M===null){const y=x+C*4,D=_.matrixWorldInverse;h.getNormalMatrix(D),(M===null||M.length<y)&&(M=new Float32Array(y));for(let U=0,P=x;U!==C;++U,P+=4)c.copy(v[U]).applyMatrix4(D,h),c.normal.toArray(M,P),M[P+3]=c.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}const Sr=4,Fv=[.125,.215,.35,.446,.526,.582],Kr=20,IA=256,hl=new by,Bv=new Gt;let Cd=null,wd=0,Rd=0,Dd=!1;const zA=new de;class kv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,u={}){const{size:c=256,position:h=zA}=u;Cd=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cd,wd,Rd),this._renderer.xr.enabled=Dd,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===es||e.mapping===so?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cd=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:za,format:Gi,colorSpace:lo,depthBuffer:!1},o=Hv(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hv(e,n,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=FA(u)),this._blurMaterial=kA(u,e,n),this._ggxMaterial=BA(u,e,n)}return o}_compileMaterial(e){const n=new ka(new Xi,e);this._renderer.compile(n,hl)}_sceneToCubeUV(e,n,r,o,u){const m=new wi(90,1,n,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(Bv),v.toneMapping=ia,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ka(new Dl,new _y({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let y=!1;const D=e.background;D?D.isColor&&(M.color.copy(D),e.background=null,y=!0):(M.color.copy(Bv),y=!0);for(let U=0;U<6;U++){const P=U%3;P===0?(m.up.set(0,d[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[U],u.y,u.z)):P===1?(m.up.set(0,0,d[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[U],u.z)):(m.up.set(0,d[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[U]));const G=this._cubeSize;Qs(o,P*G,U>2?G:0,G,G),v.setRenderTarget(o),y&&v.render(C,m),v.render(e,m)}v.toneMapping=x,v.autoClear=_,e.background=D}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===es||e.mapping===so;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gv());const u=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=u;const h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;Qs(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(c,hl)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let u=1;u<o;u++)this._applyGGXFilter(e,u-1,u);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,u=this._pingPongRenderTarget,c=this._ggxMaterial,h=this._lodMeshes[r];h.material=c;const m=c.uniforms,d=r/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),v=Math.sqrt(d*d-g*g),_=0+d*1.25,x=v*_,{_lodMax:b}=this,C=this._sizeLods[r],M=3*C*(r>b-Sr?r-b+Sr:0),y=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=x,m.mipInt.value=b-n,Qs(u,M,y,3*C,2*C),o.setRenderTarget(u),o.render(h,hl),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-r,Qs(e,M,y,3*C,2*C),o.setRenderTarget(e),o.render(h,hl)}_blur(e,n,r,o,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,o,"latitudinal",u),this._halfBlur(c,e,r,r,o,"longitudinal",u)}_halfBlur(e,n,r,o,u,c,h){const m=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ot("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=d;const _=d.uniforms,x=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*x):2*Math.PI/(2*Kr-1),C=u/b,M=isFinite(u)?1+Math.floor(g*C):Kr;M>Kr&&lt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Kr}`);const y=[];let D=0;for(let z=0;z<Kr;++z){const T=z/C,N=Math.exp(-T*T/2);y.push(N),z===0?D+=N:z<M&&(D+=2*N)}for(let z=0;z<y.length;z++)y[z]=y[z]/D;_.envMap.value=e.texture,_.samples.value=M,_.weights.value=y,_.latitudinal.value=c==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:U}=this;_.dTheta.value=b,_.mipInt.value=U-r;const P=this._sizeLods[o],G=3*P*(o>U-Sr?o-U+Sr:0),A=4*(this._cubeSize-P);Qs(n,G,A,3*P,2*P),m.setRenderTarget(n),m.render(v,hl)}}function FA(i){const e=[],n=[],r=[];let o=i;const u=i-Sr+1+Fv.length;for(let c=0;c<u;c++){const h=Math.pow(2,o);e.push(h);let m=1/h;c>i-Sr?m=Fv[c-i+Sr-1]:c===0&&(m=0),n.push(m);const d=1/(h-2),g=-d,v=1+d,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,b=6,C=3,M=2,y=1,D=new Float32Array(C*b*x),U=new Float32Array(M*b*x),P=new Float32Array(y*b*x);for(let A=0;A<x;A++){const z=A%3*2/3-1,T=A>2?0:-1,N=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];D.set(N,C*b*A),U.set(_,M*b*A);const ce=[A,A,A,A,A,A];P.set(ce,y*b*A)}const G=new Xi;G.setAttribute("position",new _i(D,C)),G.setAttribute("uv",new _i(U,M)),G.setAttribute("faceIndex",new _i(P,y)),r.push(new ka(G,null)),o>Sr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Hv(i,e,n){const r=new aa(i,e,n);return r.texture.mapping=Ic,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Qs(i,e,n,r,o){i.viewport.set(e,n,r,o),i.scissor.set(e,n,r,o)}function BA(i,e,n){return new Vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:IA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function kA(i,e,n){const r=new Float32Array(Kr),o=new de(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Gv(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Vv(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Bc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ty extends aa{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new xy(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Dl(5,5,5),u=new Vi({name:"CubemapFromEquirect",uniforms:uo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ei,blending:Oa});u.uniforms.tEquirect.value=n;const c=new ka(o,u),h=n.minFilter;return n.minFilter===Qr&&(n.minFilter=zn),new qE(1,10,this).update(e,c),n.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,o);e.setRenderTarget(u)}}function HA(i){let e=new WeakMap,n=new WeakMap,r=null;function o(_,x=!1){return _==null?null:x?c(_):u(_)}function u(_){if(_&&_.isTexture){const x=_.mapping;if(x===ed||x===td)if(e.has(_)){const b=e.get(_).texture;return h(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const C=new Ty(b.height);return C.fromEquirectangularTexture(i,_),e.set(_,C),_.addEventListener("dispose",d),h(C.texture,_.mapping)}else return null}}return _}function c(_){if(_&&_.isTexture){const x=_.mapping,b=x===ed||x===td,C=x===es||x===so;if(b||C){let M=n.get(_);const y=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==y)return r===null&&(r=new kv(i)),M=b?r.fromEquirectangular(_,M):r.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,n.set(_,M),M.texture;if(M!==void 0)return M.texture;{const D=_.image;return b&&D&&D.height>0||C&&D&&m(D)?(r===null&&(r=new kv(i)),M=b?r.fromEquirectangular(_):r.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,n.set(_,M),_.addEventListener("dispose",g),M.texture):null}}}return _}function h(_,x){return x===ed?_.mapping=es:x===td&&(_.mapping=so),_}function m(_){let x=0;const b=6;for(let C=0;C<b;C++)_[C]!==void 0&&x++;return x===b}function d(_){const x=_.target;x.removeEventListener("dispose",d);const b=e.get(x);b!==void 0&&(e.delete(x),b.dispose())}function g(_){const x=_.target;x.removeEventListener("dispose",g);const b=n.get(x);b!==void 0&&(n.delete(x),b.dispose())}function v(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function GA(i){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=i.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Uc("WebGLRenderer: "+r+" extension not supported."),o}}}function VA(i,e,n,r){const o={},u=new WeakMap;function c(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const b in _.attributes)e.remove(_.attributes[b]);_.removeEventListener("dispose",c),delete o[_.id];const x=u.get(_);x&&(e.remove(x),u.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(v,_){return o[_.id]===!0||(_.addEventListener("dispose",c),o[_.id]=!0,n.memory.geometries++),_}function m(v){const _=v.attributes;for(const x in _)e.update(_[x],i.ARRAY_BUFFER)}function d(v){const _=[],x=v.index,b=v.attributes.position;let C=0;if(b===void 0)return;if(x!==null){const D=x.array;C=x.version;for(let U=0,P=D.length;U<P;U+=3){const G=D[U+0],A=D[U+1],z=D[U+2];_.push(G,A,A,z,z,G)}}else{const D=b.array;C=b.version;for(let U=0,P=D.length/3-1;U<P;U+=3){const G=U+0,A=U+1,z=U+2;_.push(G,A,A,z,z,G)}}const M=new(b.count>=65535?my:py)(_,1);M.version=C;const y=u.get(v);y&&e.remove(y),u.set(v,M)}function g(v){const _=u.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&d(v)}else d(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function XA(i,e,n){let r;function o(_){r=_}let u,c;function h(_){u=_.type,c=_.bytesPerElement}function m(_,x){i.drawElements(r,x,u,_*c),n.update(x,r,1)}function d(_,x,b){b!==0&&(i.drawElementsInstanced(r,x,u,_*c,b),n.update(x,r,b))}function g(_,x,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,u,_,0,b);let M=0;for(let y=0;y<b;y++)M+=x[y];n.update(M,r,1)}function v(_,x,b,C){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<_.length;y++)d(_[y]/c,x[y],C[y]);else{M.multiDrawElementsInstancedWEBGL(r,x,0,u,_,0,C,0,b);let y=0;for(let D=0;D<b;D++)y+=x[D]*C[D];n.update(y,r,1)}}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function WA(i){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,h){switch(n.calls++,c){case i.TRIANGLES:n.triangles+=h*(u/3);break;case i.LINES:n.lines+=h*(u/2);break;case i.LINE_STRIP:n.lines+=h*(u-1);break;case i.LINE_LOOP:n.lines+=h*u;break;case i.POINTS:n.points+=h*u;break;default:Ot("WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function qA(i,e,n){const r=new WeakMap,o=new cn;function u(c,h,m){const d=c.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(h);if(_===void 0||_.count!==v){let ce=function(){T.dispose(),r.delete(h),h.removeEventListener("dispose",ce)};var x=ce;_!==void 0&&_.texture.dispose();const b=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let P=0;b===!0&&(P=1),C===!0&&(P=2),M===!0&&(P=3);let G=h.attributes.position.count*P,A=1;G>e.maxTextureSize&&(A=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const z=new Float32Array(G*A*4*v),T=new fy(z,G,A,v);T.type=ta,T.needsUpdate=!0;const N=P*4;for(let k=0;k<v;k++){const q=y[k],te=D[k],ee=U[k],X=G*A*4*k;for(let I=0;I<q.count;I++){const H=I*N;b===!0&&(o.fromBufferAttribute(q,I),z[X+H+0]=o.x,z[X+H+1]=o.y,z[X+H+2]=o.z,z[X+H+3]=0),C===!0&&(o.fromBufferAttribute(te,I),z[X+H+4]=o.x,z[X+H+5]=o.y,z[X+H+6]=o.z,z[X+H+7]=0),M===!0&&(o.fromBufferAttribute(ee,I),z[X+H+8]=o.x,z[X+H+9]=o.y,z[X+H+10]=o.z,z[X+H+11]=ee.itemSize===4?o.w:1)}}_={count:v,texture:T,size:new qt(G,A)},r.set(h,_),h.addEventListener("dispose",ce)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)m.getUniforms().setValue(i,"morphTexture",c.morphTexture,n);else{let b=0;for(let M=0;M<d.length;M++)b+=d[M];const C=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(i,"morphTargetBaseInfluence",C),m.getUniforms().setValue(i,"morphTargetInfluences",d)}m.getUniforms().setValue(i,"morphTargetsTexture",_.texture,n),m.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:u}}function jA(i,e,n,r,o){let u=new WeakMap;function c(d){const g=o.render.frame,v=d.geometry,_=e.get(d,v);if(u.get(_)!==g&&(e.update(_),u.set(_,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),u.get(d)!==g&&(n.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,i.ARRAY_BUFFER),u.set(d,g))),d.isSkinnedMesh){const x=d.skeleton;u.get(x)!==g&&(x.update(),u.set(x,g))}return _}function h(){u=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:c,dispose:h}}const YA={[Zx]:"LINEAR_TONE_MAPPING",[Kx]:"REINHARD_TONE_MAPPING",[Qx]:"CINEON_TONE_MAPPING",[Jx]:"ACES_FILMIC_TONE_MAPPING",[ey]:"AGX_TONE_MAPPING",[ty]:"NEUTRAL_TONE_MAPPING",[$x]:"CUSTOM_TONE_MAPPING"};function ZA(i,e,n,r,o){const u=new aa(e,n,{type:i,depthBuffer:r,stencilBuffer:o}),c=new aa(e,n,{type:za,depthBuffer:!1,stencilBuffer:!1}),h=new Xi;h.setAttribute("position",new Ia([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ia([0,2,0,0,2,0],2));const m=new VE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ka(h,m),g=new by(-1,1,1,-1,0,1);let v=null,_=null,x=!1,b,C=null,M=[],y=!1;this.setSize=function(D,U){u.setSize(D,U),c.setSize(D,U);for(let P=0;P<M.length;P++){const G=M[P];G.setSize&&G.setSize(D,U)}},this.setEffects=function(D){M=D,y=M.length>0&&M[0].isRenderPass===!0;const U=u.width,P=u.height;for(let G=0;G<M.length;G++){const A=M[G];A.setSize&&A.setSize(U,P)}},this.begin=function(D,U){if(x||D.toneMapping===ia&&M.length===0)return!1;if(C=U,U!==null){const P=U.width,G=U.height;(u.width!==P||u.height!==G)&&this.setSize(P,G)}return y===!1&&D.setRenderTarget(u),b=D.toneMapping,D.toneMapping=ia,!0},this.hasRenderPass=function(){return y},this.end=function(D,U){D.toneMapping=b,x=!0;let P=u,G=c;for(let A=0;A<M.length;A++){const z=M[A];if(z.enabled!==!1&&(z.render(D,G,P,U),z.needsSwap!==!1)){const T=P;P=G,G=T}}if(v!==D.outputColorSpace||_!==D.toneMapping){v=D.outputColorSpace,_=D.toneMapping,m.defines={},Rt.getTransfer(v)===Ht&&(m.defines.SRGB_TRANSFER="");const A=YA[_];A&&(m.defines[A]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,D.setRenderTarget(C),D.render(d,g),C=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){u.dispose(),c.dispose(),h.dispose(),m.dispose()}}const Ay=new Wn,Bp=new Tl(1,1),Cy=new fy,wy=new vE,Ry=new xy,Xv=[],Wv=[],qv=new Float32Array(16),jv=new Float32Array(9),Yv=new Float32Array(4);function ho(i,e,n){const r=i[0];if(r<=0||r>0)return i;const o=e*n;let u=Xv[o];if(u===void 0&&(u=new Float32Array(o),Xv[o]=u),e!==0){r.toArray(u,0);for(let c=1,h=0;c!==e;++c)h+=n,i[c].toArray(u,h)}return u}function Tn(i,e){if(i.length!==e.length)return!1;for(let n=0,r=i.length;n<r;n++)if(i[n]!==e[n])return!1;return!0}function An(i,e){for(let n=0,r=e.length;n<r;n++)i[n]=e[n]}function kc(i,e){let n=Wv[e];n===void 0&&(n=new Int32Array(e),Wv[e]=n);for(let r=0;r!==e;++r)n[r]=i.allocateTextureUnit();return n}function KA(i,e){const n=this.cache;n[0]!==e&&(i.uniform1f(this.addr,e),n[0]=e)}function QA(i,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;i.uniform2fv(this.addr,e),An(n,e)}}function JA(i,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tn(n,e))return;i.uniform3fv(this.addr,e),An(n,e)}}function $A(i,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;i.uniform4fv(this.addr,e),An(n,e)}}function eC(i,e){const n=this.cache,r=e.elements;if(r===void 0){if(Tn(n,e))return;i.uniformMatrix2fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,r))return;Yv.set(r),i.uniformMatrix2fv(this.addr,!1,Yv),An(n,r)}}function tC(i,e){const n=this.cache,r=e.elements;if(r===void 0){if(Tn(n,e))return;i.uniformMatrix3fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,r))return;jv.set(r),i.uniformMatrix3fv(this.addr,!1,jv),An(n,r)}}function nC(i,e){const n=this.cache,r=e.elements;if(r===void 0){if(Tn(n,e))return;i.uniformMatrix4fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,r))return;qv.set(r),i.uniformMatrix4fv(this.addr,!1,qv),An(n,r)}}function iC(i,e){const n=this.cache;n[0]!==e&&(i.uniform1i(this.addr,e),n[0]=e)}function aC(i,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;i.uniform2iv(this.addr,e),An(n,e)}}function rC(i,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tn(n,e))return;i.uniform3iv(this.addr,e),An(n,e)}}function sC(i,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;i.uniform4iv(this.addr,e),An(n,e)}}function oC(i,e){const n=this.cache;n[0]!==e&&(i.uniform1ui(this.addr,e),n[0]=e)}function lC(i,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;i.uniform2uiv(this.addr,e),An(n,e)}}function uC(i,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tn(n,e))return;i.uniform3uiv(this.addr,e),An(n,e)}}function cC(i,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;i.uniform4uiv(this.addr,e),An(n,e)}}function fC(i,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o);let u;this.type===i.SAMPLER_2D_SHADOW?(Bp.compareFunction=n.isReversedDepthBuffer()?om:sm,u=Bp):u=Ay,n.setTexture2D(e||u,o)}function hC(i,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||wy,o)}function dC(i,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Ry,o)}function pC(i,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Cy,o)}function mC(i){switch(i){case 5126:return KA;case 35664:return QA;case 35665:return JA;case 35666:return $A;case 35674:return eC;case 35675:return tC;case 35676:return nC;case 5124:case 35670:return iC;case 35667:case 35671:return aC;case 35668:case 35672:return rC;case 35669:case 35673:return sC;case 5125:return oC;case 36294:return lC;case 36295:return uC;case 36296:return cC;case 35678:case 36198:case 36298:case 36306:case 35682:return fC;case 35679:case 36299:case 36307:return hC;case 35680:case 36300:case 36308:case 36293:return dC;case 36289:case 36303:case 36311:case 36292:return pC}}function gC(i,e){i.uniform1fv(this.addr,e)}function _C(i,e){const n=ho(e,this.size,2);i.uniform2fv(this.addr,n)}function vC(i,e){const n=ho(e,this.size,3);i.uniform3fv(this.addr,n)}function xC(i,e){const n=ho(e,this.size,4);i.uniform4fv(this.addr,n)}function yC(i,e){const n=ho(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,n)}function SC(i,e){const n=ho(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,n)}function MC(i,e){const n=ho(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,n)}function bC(i,e){i.uniform1iv(this.addr,e)}function EC(i,e){i.uniform2iv(this.addr,e)}function TC(i,e){i.uniform3iv(this.addr,e)}function AC(i,e){i.uniform4iv(this.addr,e)}function CC(i,e){i.uniform1uiv(this.addr,e)}function wC(i,e){i.uniform2uiv(this.addr,e)}function RC(i,e){i.uniform3uiv(this.addr,e)}function DC(i,e){i.uniform4uiv(this.addr,e)}function UC(i,e,n){const r=this.cache,o=e.length,u=kc(n,o);Tn(r,u)||(i.uniform1iv(this.addr,u),An(r,u));let c;this.type===i.SAMPLER_2D_SHADOW?c=Bp:c=Ay;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||c,u[h])}function LC(i,e,n){const r=this.cache,o=e.length,u=kc(n,o);Tn(r,u)||(i.uniform1iv(this.addr,u),An(r,u));for(let c=0;c!==o;++c)n.setTexture3D(e[c]||wy,u[c])}function NC(i,e,n){const r=this.cache,o=e.length,u=kc(n,o);Tn(r,u)||(i.uniform1iv(this.addr,u),An(r,u));for(let c=0;c!==o;++c)n.setTextureCube(e[c]||Ry,u[c])}function OC(i,e,n){const r=this.cache,o=e.length,u=kc(n,o);Tn(r,u)||(i.uniform1iv(this.addr,u),An(r,u));for(let c=0;c!==o;++c)n.setTexture2DArray(e[c]||Cy,u[c])}function PC(i){switch(i){case 5126:return gC;case 35664:return _C;case 35665:return vC;case 35666:return xC;case 35674:return yC;case 35675:return SC;case 35676:return MC;case 5124:case 35670:return bC;case 35667:case 35671:return EC;case 35668:case 35672:return TC;case 35669:case 35673:return AC;case 5125:return CC;case 36294:return wC;case 36295:return RC;case 36296:return DC;case 35678:case 36198:case 36298:case 36306:case 35682:return UC;case 35679:case 36299:case 36307:return LC;case 35680:case 36300:case 36308:case 36293:return NC;case 36289:case 36303:case 36311:case 36292:return OC}}class IC{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=mC(n.type)}}class zC{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=PC(n.type)}}class FC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let u=0,c=o.length;u!==c;++u){const h=o[u];h.setValue(e,n[h.id],r)}}}const Ud=/(\w+)(\])?(\[|\.)?/g;function Zv(i,e){i.seq.push(e),i.map[e.id]=e}function BC(i,e,n){const r=i.name,o=r.length;for(Ud.lastIndex=0;;){const u=Ud.exec(r),c=Ud.lastIndex;let h=u[1];const m=u[2]==="]",d=u[3];if(m&&(h=h|0),d===void 0||d==="["&&c+2===o){Zv(n,d===void 0?new IC(h,i,e):new zC(h,i,e));break}else{let v=n.map[h];v===void 0&&(v=new FC(h),Zv(n,v)),n=v}}}class Ac{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const h=e.getActiveUniform(n,c),m=e.getUniformLocation(n,h.name);BC(h,m,this)}const o=[],u=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):u.push(c);o.length>0&&(this.seq=o.concat(u))}setValue(e,n,r,o){const u=this.map[n];u!==void 0&&u.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let u=0,c=n.length;u!==c;++u){const h=n[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,u=e.length;o!==u;++o){const c=e[o];c.id in n&&r.push(c)}return r}}function Kv(i,e,n){const r=i.createShader(e);return i.shaderSource(r,n),i.compileShader(r),r}const kC=37297;let HC=0;function GC(i,e){const n=i.split(`
`),r=[],o=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let c=o;c<u;c++){const h=c+1;r.push(`${h===e?">":" "} ${h}: ${n[c]}`)}return r.join(`
`)}const Qv=new mt;function VC(i){Rt._getMatrix(Qv,Rt.workingColorSpace,i);const e=`mat3( ${Qv.elements.map(n=>n.toFixed(4))} )`;switch(Rt.getTransfer(i)){case wc:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jv(i,e,n){const r=i.getShaderParameter(e,i.COMPILE_STATUS),u=(i.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const h=parseInt(c[1]);return n.toUpperCase()+`

`+u+`

`+GC(i.getShaderSource(e),h)}else return u}function XC(i,e){const n=VC(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const WC={[Zx]:"Linear",[Kx]:"Reinhard",[Qx]:"Cineon",[Jx]:"ACESFilmic",[ey]:"AgX",[ty]:"Neutral",[$x]:"Custom"};function qC(i,e){const n=WC[e];return n===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const gc=new de;function jC(){Rt.getLuminanceCoefficients(gc);const i=gc.x.toFixed(4),e=gc.y.toFixed(4),n=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YC(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xl).join(`
`)}function ZC(i){const e=[];for(const n in i){const r=i[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function KC(i,e){const n={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const u=i.getActiveAttrib(e,o),c=u.name;let h=1;u.type===i.FLOAT_MAT2&&(h=2),u.type===i.FLOAT_MAT3&&(h=3),u.type===i.FLOAT_MAT4&&(h=4),n[c]={type:u.type,location:i.getAttribLocation(e,c),locationSize:h}}return n}function xl(i){return i!==""}function $v(i,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ex(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QC=/^[ \t]*#include +<([\w\d./]+)>/gm;function kp(i){return i.replace(QC,$C)}const JC=new Map;function $C(i,e){let n=gt[e];if(n===void 0){const r=JC.get(e);if(r!==void 0)n=gt[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return kp(n)}const ew=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tx(i){return i.replace(ew,tw)}function tw(i,e,n,r){let o="";for(let u=parseInt(e);u<parseInt(n);u++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function nx(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const nw={[Sc]:"SHADOWMAP_TYPE_PCF",[vl]:"SHADOWMAP_TYPE_VSM"};function iw(i){return nw[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aw={[es]:"ENVMAP_TYPE_CUBE",[so]:"ENVMAP_TYPE_CUBE",[Ic]:"ENVMAP_TYPE_CUBE_UV"};function rw(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":aw[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const sw={[so]:"ENVMAP_MODE_REFRACTION"};function ow(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":sw[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lw={[Yx]:"ENVMAP_BLENDING_MULTIPLY",[Kb]:"ENVMAP_BLENDING_MIX",[Qb]:"ENVMAP_BLENDING_ADD"};function uw(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":lw[i.combine]||"ENVMAP_BLENDING_NONE"}function cw(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function fw(i,e,n,r){const o=i.getContext(),u=n.defines;let c=n.vertexShader,h=n.fragmentShader;const m=iw(n),d=rw(n),g=ow(n),v=uw(n),_=cw(n),x=YC(n),b=ZC(u),C=o.createProgram();let M,y,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(xl).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(xl).join(`
`),y.length>0&&(y+=`
`)):(M=[nx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xl).join(`
`),y=[nx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ia?"#define TONE_MAPPING":"",n.toneMapping!==ia?gt.tonemapping_pars_fragment:"",n.toneMapping!==ia?qC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,XC("linearToOutputTexel",n.outputColorSpace),jC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xl).join(`
`)),c=kp(c),c=$v(c,n),c=ex(c,n),h=kp(h),h=$v(h,n),h=ex(h,n),c=tx(c),h=tx(h),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",n.glslVersion===gv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=D+M+c,P=D+y+h,G=Kv(o,o.VERTEX_SHADER,U),A=Kv(o,o.FRAGMENT_SHADER,P);o.attachShader(C,G),o.attachShader(C,A),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function z(k){if(i.debug.checkShaderErrors){const q=o.getProgramInfoLog(C)||"",te=o.getShaderInfoLog(G)||"",ee=o.getShaderInfoLog(A)||"",X=q.trim(),I=te.trim(),H=ee.trim();let le=!0,ge=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(le=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,C,G,A);else{const O=Jv(o,G,"vertex"),B=Jv(o,A,"fragment");Ot("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+X+`
`+O+`
`+B)}else X!==""?lt("WebGLProgram: Program Info Log:",X):(I===""||H==="")&&(ge=!1);ge&&(k.diagnostics={runnable:le,programLog:X,vertexShader:{log:I,prefix:M},fragmentShader:{log:H,prefix:y}})}o.deleteShader(G),o.deleteShader(A),T=new Ac(o,C),N=KC(o,C)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let N;this.getAttributes=function(){return N===void 0&&z(this),N};let ce=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ce===!1&&(ce=o.getProgramParameter(C,kC)),ce},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=HC++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=G,this.fragmentShader=A,this}let hw=0;class dw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new pw(e),n.set(e,r)),r}}class pw{constructor(e){this.id=hw++,this.code=e,this.usedTimes=0}}function mw(i,e,n,r,o,u){const c=new hy,h=new dw,m=new Set,d=[],g=new Map,v=r.logarithmicDepthBuffer;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,N,ce,k,q){const te=k.fog,ee=q.geometry,X=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,I=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,H=e.get(T.envMap||X,I),le=H&&H.mapping===Ic?H.image.height:null,ge=x[T.type];T.precision!==null&&(_=r.getMaxPrecision(T.precision),_!==T.precision&&lt("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const O=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,B=O!==void 0?O.length:0;let Q=0;ee.morphAttributes.position!==void 0&&(Q=1),ee.morphAttributes.normal!==void 0&&(Q=2),ee.morphAttributes.color!==void 0&&(Q=3);let L,Ae,Pe,ae;if(ge){const wt=$i[ge];L=wt.vertexShader,Ae=wt.fragmentShader}else L=T.vertexShader,Ae=T.fragmentShader,h.update(T),Pe=h.getVertexShaderID(T),ae=h.getFragmentShaderID(T);const xe=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),Be=q.isInstancedMesh===!0,Ze=q.isBatchedMesh===!0,$e=!!T.map,en=!!T.matcap,vt=!!H,_t=!!T.aoMap,Ct=!!T.lightMap,rt=!!T.bumpMap,Zt=!!T.normalMap,j=!!T.displacementMap,jt=!!T.emissiveMap,xt=!!T.metalnessMap,Dt=!!T.roughnessMap,je=T.anisotropy>0,F=T.clearcoat>0,E=T.dispersion>0,$=T.iridescence>0,V=T.sheen>0,J=T.transmission>0,ie=je&&!!T.anisotropyMap,Ce=F&&!!T.clearcoatMap,Me=F&&!!T.clearcoatNormalMap,He=F&&!!T.clearcoatRoughnessMap,Je=$&&!!T.iridescenceMap,be=$&&!!T.iridescenceThicknessMap,Te=V&&!!T.sheenColorMap,Ie=V&&!!T.sheenRoughnessMap,Ue=!!T.specularMap,Oe=!!T.specularColorMap,tt=!!T.specularIntensityMap,K=J&&!!T.transmissionMap,Le=J&&!!T.thicknessMap,De=!!T.gradientMap,ke=!!T.alphaMap,we=T.alphaTest>0,_e=!!T.alphaHash,Ve=!!T.extensions;let st=ia;T.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(st=i.toneMapping);const Ft={shaderID:ge,shaderType:T.type,shaderName:T.name,vertexShader:L,fragmentShader:Ae,defines:T.defines,customVertexShaderID:Pe,customFragmentShaderID:ae,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Ze,batchingColor:Ze&&q._colorsTexture!==null,instancing:Be,instancingColor:Be&&q.instanceColor!==null,instancingMorph:Be&&q.morphTexture!==null,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:lo,alphaToCoverage:!!T.alphaToCoverage,map:$e,matcap:en,envMap:vt,envMapMode:vt&&H.mapping,envMapCubeUVHeight:le,aoMap:_t,lightMap:Ct,bumpMap:rt,normalMap:Zt,displacementMap:j,emissiveMap:jt,normalMapObjectSpace:Zt&&T.normalMapType===tE,normalMapTangentSpace:Zt&&T.normalMapType===eE,metalnessMap:xt,roughnessMap:Dt,anisotropy:je,anisotropyMap:ie,clearcoat:F,clearcoatMap:Ce,clearcoatNormalMap:Me,clearcoatRoughnessMap:He,dispersion:E,iridescence:$,iridescenceMap:Je,iridescenceThicknessMap:be,sheen:V,sheenColorMap:Te,sheenRoughnessMap:Ie,specularMap:Ue,specularColorMap:Oe,specularIntensityMap:tt,transmission:J,transmissionMap:K,thicknessMap:Le,gradientMap:De,opaque:T.transparent===!1&&T.blending===to&&T.alphaToCoverage===!1,alphaMap:ke,alphaTest:we,alphaHash:_e,combine:T.combine,mapUv:$e&&b(T.map.channel),aoMapUv:_t&&b(T.aoMap.channel),lightMapUv:Ct&&b(T.lightMap.channel),bumpMapUv:rt&&b(T.bumpMap.channel),normalMapUv:Zt&&b(T.normalMap.channel),displacementMapUv:j&&b(T.displacementMap.channel),emissiveMapUv:jt&&b(T.emissiveMap.channel),metalnessMapUv:xt&&b(T.metalnessMap.channel),roughnessMapUv:Dt&&b(T.roughnessMap.channel),anisotropyMapUv:ie&&b(T.anisotropyMap.channel),clearcoatMapUv:Ce&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Me&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:be&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&b(T.sheenRoughnessMap.channel),specularMapUv:Ue&&b(T.specularMap.channel),specularColorMapUv:Oe&&b(T.specularColorMap.channel),specularIntensityMapUv:tt&&b(T.specularIntensityMap.channel),transmissionMapUv:K&&b(T.transmissionMap.channel),thicknessMapUv:Le&&b(T.thicknessMap.channel),alphaMapUv:ke&&b(T.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Zt||je),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ee.attributes.uv&&($e||ke),fog:!!te,useFog:T.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ee.attributes.normal===void 0&&Zt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ee,skinning:q.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:Q,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&ce.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:$e&&T.map.isVideoTexture===!0&&Rt.getTransfer(T.map.colorSpace)===Ht,decodeVideoTextureEmissive:jt&&T.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(T.emissiveMap.colorSpace)===Ht,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===La,flipSided:T.side===ei,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ve&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&T.extensions.multiDraw===!0||Ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ft.vertexUv1s=m.has(1),Ft.vertexUv2s=m.has(2),Ft.vertexUv3s=m.has(3),m.clear(),Ft}function M(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ce in T.defines)N.push(ce),N.push(T.defines[ce]);return T.isRawShaderMaterial===!1&&(y(N,T),D(N,T),N.push(i.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function y(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function D(T,N){c.disableAll(),N.instancing&&c.enable(0),N.instancingColor&&c.enable(1),N.instancingMorph&&c.enable(2),N.matcap&&c.enable(3),N.envMap&&c.enable(4),N.normalMapObjectSpace&&c.enable(5),N.normalMapTangentSpace&&c.enable(6),N.clearcoat&&c.enable(7),N.iridescence&&c.enable(8),N.alphaTest&&c.enable(9),N.vertexColors&&c.enable(10),N.vertexAlphas&&c.enable(11),N.vertexUv1s&&c.enable(12),N.vertexUv2s&&c.enable(13),N.vertexUv3s&&c.enable(14),N.vertexTangents&&c.enable(15),N.anisotropy&&c.enable(16),N.alphaHash&&c.enable(17),N.batching&&c.enable(18),N.dispersion&&c.enable(19),N.batchingColor&&c.enable(20),N.gradientMap&&c.enable(21),T.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.reversedDepthBuffer&&c.enable(4),N.skinning&&c.enable(5),N.morphTargets&&c.enable(6),N.morphNormals&&c.enable(7),N.morphColors&&c.enable(8),N.premultipliedAlpha&&c.enable(9),N.shadowMapEnabled&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),N.decodeVideoTextureEmissive&&c.enable(20),N.alphaToCoverage&&c.enable(21),T.push(c.mask)}function U(T){const N=x[T.type];let ce;if(N){const k=$i[N];ce=kE.clone(k.uniforms)}else ce=T.uniforms;return ce}function P(T,N){let ce=g.get(N);return ce!==void 0?++ce.usedTimes:(ce=new fw(i,N,T,o),d.push(ce),g.set(N,ce)),ce}function G(T){if(--T.usedTimes===0){const N=d.indexOf(T);d[N]=d[d.length-1],d.pop(),g.delete(T.cacheKey),T.destroy()}}function A(T){h.remove(T)}function z(){h.dispose()}return{getParameters:C,getProgramCacheKey:M,getUniforms:U,acquireProgram:P,releaseProgram:G,releaseShaderCache:A,programs:d,dispose:z}}function gw(){let i=new WeakMap;function e(c){return i.has(c)}function n(c){let h=i.get(c);return h===void 0&&(h={},i.set(c,h)),h}function r(c){i.delete(c)}function o(c,h,m){i.get(c)[h]=m}function u(){i=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:u}}function _w(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ix(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ax(){const i=[];let e=0;const n=[],r=[],o=[];function u(){e=0,n.length=0,r.length=0,o.length=0}function c(_){let x=0;return _.isInstancedMesh&&(x+=2),_.isSkinnedMesh&&(x+=1),x}function h(_,x,b,C,M,y){let D=i[e];return D===void 0?(D={id:_.id,object:_,geometry:x,material:b,materialVariant:c(_),groupOrder:C,renderOrder:_.renderOrder,z:M,group:y},i[e]=D):(D.id=_.id,D.object=_,D.geometry=x,D.material=b,D.materialVariant=c(_),D.groupOrder=C,D.renderOrder=_.renderOrder,D.z=M,D.group=y),e++,D}function m(_,x,b,C,M,y){const D=h(_,x,b,C,M,y);b.transmission>0?r.push(D):b.transparent===!0?o.push(D):n.push(D)}function d(_,x,b,C,M,y){const D=h(_,x,b,C,M,y);b.transmission>0?r.unshift(D):b.transparent===!0?o.unshift(D):n.unshift(D)}function g(_,x){n.length>1&&n.sort(_||_w),r.length>1&&r.sort(x||ix),o.length>1&&o.sort(x||ix)}function v(){for(let _=e,x=i.length;_<x;_++){const b=i[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:r,transparent:o,init:u,push:m,unshift:d,finish:v,sort:g}}function vw(){let i=new WeakMap;function e(r,o){const u=i.get(r);let c;return u===void 0?(c=new ax,i.set(r,[c])):o>=u.length?(c=new ax,u.push(c)):c=u[o],c}function n(){i=new WeakMap}return{get:e,dispose:n}}function xw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new de,color:new Gt};break;case"SpotLight":n={position:new de,direction:new de,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new de,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new de,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":n={color:new Gt,position:new de,halfWidth:new de,halfHeight:new de};break}return i[e.id]=n,n}}}function yw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=n,n}}}let Sw=0;function Mw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bw(i){const e=new xw,n=yw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new de);const o=new de,u=new fn,c=new fn;function h(d){let g=0,v=0,_=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let x=0,b=0,C=0,M=0,y=0,D=0,U=0,P=0,G=0,A=0,z=0;d.sort(Mw);for(let N=0,ce=d.length;N<ce;N++){const k=d[N],q=k.color,te=k.intensity,ee=k.distance;let X=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===oo?X=k.shadow.map.texture:X=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=q.r*te,v+=q.g*te,_+=q.b*te;else if(k.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(k.sh.coefficients[I],te);z++}else if(k.isDirectionalLight){const I=e.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,le=n.get(k);le.shadowIntensity=H.intensity,le.shadowBias=H.bias,le.shadowNormalBias=H.normalBias,le.shadowRadius=H.radius,le.shadowMapSize=H.mapSize,r.directionalShadow[x]=le,r.directionalShadowMap[x]=X,r.directionalShadowMatrix[x]=k.shadow.matrix,D++}r.directional[x]=I,x++}else if(k.isSpotLight){const I=e.get(k);I.position.setFromMatrixPosition(k.matrixWorld),I.color.copy(q).multiplyScalar(te),I.distance=ee,I.coneCos=Math.cos(k.angle),I.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),I.decay=k.decay,r.spot[C]=I;const H=k.shadow;if(k.map&&(r.spotLightMap[G]=k.map,G++,H.updateMatrices(k),k.castShadow&&A++),r.spotLightMatrix[C]=H.matrix,k.castShadow){const le=n.get(k);le.shadowIntensity=H.intensity,le.shadowBias=H.bias,le.shadowNormalBias=H.normalBias,le.shadowRadius=H.radius,le.shadowMapSize=H.mapSize,r.spotShadow[C]=le,r.spotShadowMap[C]=X,P++}C++}else if(k.isRectAreaLight){const I=e.get(k);I.color.copy(q).multiplyScalar(te),I.halfWidth.set(k.width*.5,0,0),I.halfHeight.set(0,k.height*.5,0),r.rectArea[M]=I,M++}else if(k.isPointLight){const I=e.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity),I.distance=k.distance,I.decay=k.decay,k.castShadow){const H=k.shadow,le=n.get(k);le.shadowIntensity=H.intensity,le.shadowBias=H.bias,le.shadowNormalBias=H.normalBias,le.shadowRadius=H.radius,le.shadowMapSize=H.mapSize,le.shadowCameraNear=H.camera.near,le.shadowCameraFar=H.camera.far,r.pointShadow[b]=le,r.pointShadowMap[b]=X,r.pointShadowMatrix[b]=k.shadow.matrix,U++}r.point[b]=I,b++}else if(k.isHemisphereLight){const I=e.get(k);I.skyColor.copy(k.color).multiplyScalar(te),I.groundColor.copy(k.groundColor).multiplyScalar(te),r.hemi[y]=I,y++}}M>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==x||T.pointLength!==b||T.spotLength!==C||T.rectAreaLength!==M||T.hemiLength!==y||T.numDirectionalShadows!==D||T.numPointShadows!==U||T.numSpotShadows!==P||T.numSpotMaps!==G||T.numLightProbes!==z)&&(r.directional.length=x,r.spot.length=C,r.rectArea.length=M,r.point.length=b,r.hemi.length=y,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=P+G-A,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=A,r.numLightProbes=z,T.directionalLength=x,T.pointLength=b,T.spotLength=C,T.rectAreaLength=M,T.hemiLength=y,T.numDirectionalShadows=D,T.numPointShadows=U,T.numSpotShadows=P,T.numSpotMaps=G,T.numLightProbes=z,r.version=Sw++)}function m(d,g){let v=0,_=0,x=0,b=0,C=0;const M=g.matrixWorldInverse;for(let y=0,D=d.length;y<D;y++){const U=d[y];if(U.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(M),v++}else if(U.isSpotLight){const P=r.spot[x];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(M),P.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(M),x++}else if(U.isRectAreaLight){const P=r.rectArea[b];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(M),c.identity(),u.copy(U.matrixWorld),u.premultiply(M),c.extractRotation(u),P.halfWidth.set(U.width*.5,0,0),P.halfHeight.set(0,U.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),b++}else if(U.isPointLight){const P=r.point[_];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(M),_++}else if(U.isHemisphereLight){const P=r.hemi[C];P.direction.setFromMatrixPosition(U.matrixWorld),P.direction.transformDirection(M),C++}}}return{setup:h,setupView:m,state:r}}function rx(i){const e=new bw(i),n=[],r=[];function o(g){d.camera=g,n.length=0,r.length=0}function u(g){n.push(g)}function c(g){r.push(g)}function h(){e.setup(n)}function m(g){e.setupView(n,g)}const d={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:c}}function Ew(i){let e=new WeakMap;function n(o,u=0){const c=e.get(o);let h;return c===void 0?(h=new rx(i),e.set(o,[h])):u>=c.length?(h=new rx(i),c.push(h)):h=c[u],h}function r(){e=new WeakMap}return{get:n,dispose:r}}const Tw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Aw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Cw=[new de(1,0,0),new de(-1,0,0),new de(0,1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1)],ww=[new de(0,-1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1),new de(0,-1,0),new de(0,-1,0)],sx=new fn,dl=new de,Ld=new de;function Rw(i,e,n){let r=new vy;const o=new qt,u=new qt,c=new cn,h=new XE,m=new WE,d={},g=n.maxTextureSize,v={[Mr]:ei,[ei]:Mr,[La]:La},_=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:Tw,fragmentShader:Aw}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const b=new Xi;b.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ka(b,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sc;let y=this.type;this.render=function(A,z,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||A.length===0)return;this.type===Ub&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Sc);const N=i.getRenderTarget(),ce=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Oa),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const te=y!==this.type;te&&z.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(X=>X.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,X=A.length;ee<X;ee++){const I=A[ee],H=I.shadow;if(H===void 0){lt("WebGLShadowMap:",I,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const le=H.getFrameExtents();o.multiply(le),u.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/le.x),o.x=u.x*le.x,H.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/le.y),o.y=u.y*le.y,H.mapSize.y=u.y));const ge=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ge,H.map===null||te===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===vl){if(I.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new aa(o.x,o.y,{format:oo,type:za,minFilter:zn,magFilter:zn,generateMipmaps:!1}),H.map.texture.name=I.name+".shadowMap",H.map.depthTexture=new Tl(o.x,o.y,ta),H.map.depthTexture.name=I.name+".shadowMapDepth",H.map.depthTexture.format=Fa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn}else I.isPointLight?(H.map=new Ty(o.x),H.map.depthTexture=new FE(o.x,ra)):(H.map=new aa(o.x,o.y),H.map.depthTexture=new Tl(o.x,o.y,ra)),H.map.depthTexture.name=I.name+".shadowMap",H.map.depthTexture.format=Fa,this.type===Sc?(H.map.depthTexture.compareFunction=ge?om:sm,H.map.depthTexture.minFilter=zn,H.map.depthTexture.magFilter=zn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn);H.camera.updateProjectionMatrix()}const O=H.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<O;B++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,B),i.clear();else{B===0&&(i.setRenderTarget(H.map),i.clear());const Q=H.getViewport(B);c.set(u.x*Q.x,u.y*Q.y,u.x*Q.z,u.y*Q.w),q.viewport(c)}if(I.isPointLight){const Q=H.camera,L=H.matrix,Ae=I.distance||Q.far;Ae!==Q.far&&(Q.far=Ae,Q.updateProjectionMatrix()),dl.setFromMatrixPosition(I.matrixWorld),Q.position.copy(dl),Ld.copy(Q.position),Ld.add(Cw[B]),Q.up.copy(ww[B]),Q.lookAt(Ld),Q.updateMatrixWorld(),L.makeTranslation(-dl.x,-dl.y,-dl.z),sx.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(sx,Q.coordinateSystem,Q.reversedDepth)}else H.updateMatrices(I);r=H.getFrustum(),P(z,T,H.camera,I,this.type)}H.isPointLightShadow!==!0&&this.type===vl&&D(H,T),H.needsUpdate=!1}y=this.type,M.needsUpdate=!1,i.setRenderTarget(N,ce,k)};function D(A,z){const T=e.update(C);_.defines.VSM_SAMPLES!==A.blurSamples&&(_.defines.VSM_SAMPLES=A.blurSamples,x.defines.VSM_SAMPLES=A.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new aa(o.x,o.y,{format:oo,type:za})),_.uniforms.shadow_pass.value=A.map.depthTexture,_.uniforms.resolution.value=A.mapSize,_.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(z,null,T,_,C,null),x.uniforms.shadow_pass.value=A.mapPass.texture,x.uniforms.resolution.value=A.mapSize,x.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(z,null,T,x,C,null)}function U(A,z,T,N){let ce=null;const k=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(k!==void 0)ce=k;else if(ce=T.isPointLight===!0?m:h,i.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const q=ce.uuid,te=z.uuid;let ee=d[q];ee===void 0&&(ee={},d[q]=ee);let X=ee[te];X===void 0&&(X=ce.clone(),ee[te]=X,z.addEventListener("dispose",G)),ce=X}if(ce.visible=z.visible,ce.wireframe=z.wireframe,N===vl?ce.side=z.shadowSide!==null?z.shadowSide:z.side:ce.side=z.shadowSide!==null?z.shadowSide:v[z.side],ce.alphaMap=z.alphaMap,ce.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,ce.map=z.map,ce.clipShadows=z.clipShadows,ce.clippingPlanes=z.clippingPlanes,ce.clipIntersection=z.clipIntersection,ce.displacementMap=z.displacementMap,ce.displacementScale=z.displacementScale,ce.displacementBias=z.displacementBias,ce.wireframeLinewidth=z.wireframeLinewidth,ce.linewidth=z.linewidth,T.isPointLight===!0&&ce.isMeshDistanceMaterial===!0){const q=i.properties.get(ce);q.light=T}return ce}function P(A,z,T,N,ce){if(A.visible===!1)return;if(A.layers.test(z.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&ce===vl)&&(!A.frustumCulled||r.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);const te=e.update(A),ee=A.material;if(Array.isArray(ee)){const X=te.groups;for(let I=0,H=X.length;I<H;I++){const le=X[I],ge=ee[le.materialIndex];if(ge&&ge.visible){const O=U(A,ge,N,ce);A.onBeforeShadow(i,A,z,T,te,O,le),i.renderBufferDirect(T,null,te,O,A,le),A.onAfterShadow(i,A,z,T,te,O,le)}}}else if(ee.visible){const X=U(A,ee,N,ce);A.onBeforeShadow(i,A,z,T,te,X,null),i.renderBufferDirect(T,null,te,X,A,null),A.onAfterShadow(i,A,z,T,te,X,null)}}const q=A.children;for(let te=0,ee=q.length;te<ee;te++)P(q[te],z,T,N,ce)}function G(A){A.target.removeEventListener("dispose",G);for(const T in d){const N=d[T],ce=A.target.uuid;ce in N&&(N[ce].dispose(),delete N[ce])}}}function Dw(i,e){function n(){let K=!1;const Le=new cn;let De=null;const ke=new cn(0,0,0,0);return{setMask:function(we){De!==we&&!K&&(i.colorMask(we,we,we,we),De=we)},setLocked:function(we){K=we},setClear:function(we,_e,Ve,st,Ft){Ft===!0&&(we*=st,_e*=st,Ve*=st),Le.set(we,_e,Ve,st),ke.equals(Le)===!1&&(i.clearColor(we,_e,Ve,st),ke.copy(Le))},reset:function(){K=!1,De=null,ke.set(-1,0,0,0)}}}function r(){let K=!1,Le=!1,De=null,ke=null,we=null;return{setReversed:function(_e){if(Le!==_e){const Ve=e.get("EXT_clip_control");_e?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Le=_e;const st=we;we=null,this.setClear(st)}},getReversed:function(){return Le},setTest:function(_e){_e?xe(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(_e){De!==_e&&!K&&(i.depthMask(_e),De=_e)},setFunc:function(_e){if(Le&&(_e=fE[_e]),ke!==_e){switch(_e){case Kd:i.depthFunc(i.NEVER);break;case Qd:i.depthFunc(i.ALWAYS);break;case Jd:i.depthFunc(i.LESS);break;case ro:i.depthFunc(i.LEQUAL);break;case $d:i.depthFunc(i.EQUAL);break;case ep:i.depthFunc(i.GEQUAL);break;case tp:i.depthFunc(i.GREATER);break;case np:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ke=_e}},setLocked:function(_e){K=_e},setClear:function(_e){we!==_e&&(we=_e,Le&&(_e=1-_e),i.clearDepth(_e))},reset:function(){K=!1,De=null,ke=null,we=null,Le=!1}}}function o(){let K=!1,Le=null,De=null,ke=null,we=null,_e=null,Ve=null,st=null,Ft=null;return{setTest:function(wt){K||(wt?xe(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(wt){Le!==wt&&!K&&(i.stencilMask(wt),Le=wt)},setFunc:function(wt,Bn,Ui){(De!==wt||ke!==Bn||we!==Ui)&&(i.stencilFunc(wt,Bn,Ui),De=wt,ke=Bn,we=Ui)},setOp:function(wt,Bn,Ui){(_e!==wt||Ve!==Bn||st!==Ui)&&(i.stencilOp(wt,Bn,Ui),_e=wt,Ve=Bn,st=Ui)},setLocked:function(wt){K=wt},setClear:function(wt){Ft!==wt&&(i.clearStencil(wt),Ft=wt)},reset:function(){K=!1,Le=null,De=null,ke=null,we=null,_e=null,Ve=null,st=null,Ft=null}}}const u=new n,c=new r,h=new o,m=new WeakMap,d=new WeakMap;let g={},v={},_=new WeakMap,x=[],b=null,C=!1,M=null,y=null,D=null,U=null,P=null,G=null,A=null,z=new Gt(0,0,0),T=0,N=!1,ce=null,k=null,q=null,te=null,ee=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,H=0;const le=i.getParameter(i.VERSION);le.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(le)[1]),I=H>=1):le.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),I=H>=2);let ge=null,O={};const B=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),L=new cn().fromArray(B),Ae=new cn().fromArray(Q);function Pe(K,Le,De,ke){const we=new Uint8Array(4),_e=i.createTexture();i.bindTexture(K,_e),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<De;Ve++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Le,0,i.RGBA,1,1,ke,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(Le+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return _e}const ae={};ae[i.TEXTURE_2D]=Pe(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=Pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=Pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=Pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),h.setClear(0),xe(i.DEPTH_TEST),c.setFunc(ro),rt(!1),Zt(fv),xe(i.CULL_FACE),_t(Oa);function xe(K){g[K]!==!0&&(i.enable(K),g[K]=!0)}function Ee(K){g[K]!==!1&&(i.disable(K),g[K]=!1)}function Be(K,Le){return v[K]!==Le?(i.bindFramebuffer(K,Le),v[K]=Le,K===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Le),K===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ze(K,Le){let De=x,ke=!1;if(K){De=_.get(Le),De===void 0&&(De=[],_.set(Le,De));const we=K.textures;if(De.length!==we.length||De[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Ve=we.length;_e<Ve;_e++)De[_e]=i.COLOR_ATTACHMENT0+_e;De.length=we.length,ke=!0}}else De[0]!==i.BACK&&(De[0]=i.BACK,ke=!0);ke&&i.drawBuffers(De)}function $e(K){return b!==K?(i.useProgram(K),b=K,!0):!1}const en={[Zr]:i.FUNC_ADD,[Nb]:i.FUNC_SUBTRACT,[Ob]:i.FUNC_REVERSE_SUBTRACT};en[Pb]=i.MIN,en[Ib]=i.MAX;const vt={[zb]:i.ZERO,[Fb]:i.ONE,[Bb]:i.SRC_COLOR,[Yd]:i.SRC_ALPHA,[Wb]:i.SRC_ALPHA_SATURATE,[Vb]:i.DST_COLOR,[Hb]:i.DST_ALPHA,[kb]:i.ONE_MINUS_SRC_COLOR,[Zd]:i.ONE_MINUS_SRC_ALPHA,[Xb]:i.ONE_MINUS_DST_COLOR,[Gb]:i.ONE_MINUS_DST_ALPHA,[qb]:i.CONSTANT_COLOR,[jb]:i.ONE_MINUS_CONSTANT_COLOR,[Yb]:i.CONSTANT_ALPHA,[Zb]:i.ONE_MINUS_CONSTANT_ALPHA};function _t(K,Le,De,ke,we,_e,Ve,st,Ft,wt){if(K===Oa){C===!0&&(Ee(i.BLEND),C=!1);return}if(C===!1&&(xe(i.BLEND),C=!0),K!==Lb){if(K!==M||wt!==N){if((y!==Zr||P!==Zr)&&(i.blendEquation(i.FUNC_ADD),y=Zr,P=Zr),wt)switch(K){case to:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jd:i.blendFunc(i.ONE,i.ONE);break;case hv:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dv:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ot("WebGLState: Invalid blending: ",K);break}else switch(K){case to:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hv:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dv:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",K);break}D=null,U=null,G=null,A=null,z.set(0,0,0),T=0,M=K,N=wt}return}we=we||Le,_e=_e||De,Ve=Ve||ke,(Le!==y||we!==P)&&(i.blendEquationSeparate(en[Le],en[we]),y=Le,P=we),(De!==D||ke!==U||_e!==G||Ve!==A)&&(i.blendFuncSeparate(vt[De],vt[ke],vt[_e],vt[Ve]),D=De,U=ke,G=_e,A=Ve),(st.equals(z)===!1||Ft!==T)&&(i.blendColor(st.r,st.g,st.b,Ft),z.copy(st),T=Ft),M=K,N=!1}function Ct(K,Le){K.side===La?Ee(i.CULL_FACE):xe(i.CULL_FACE);let De=K.side===ei;Le&&(De=!De),rt(De),K.blending===to&&K.transparent===!1?_t(Oa):_t(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),c.setFunc(K.depthFunc),c.setTest(K.depthTest),c.setMask(K.depthWrite),u.setMask(K.colorWrite);const ke=K.stencilWrite;h.setTest(ke),ke&&(h.setMask(K.stencilWriteMask),h.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),h.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),jt(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(K){ce!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),ce=K)}function Zt(K){K!==Rb?(xe(i.CULL_FACE),K!==k&&(K===fv?i.cullFace(i.BACK):K===Db?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),k=K}function j(K){K!==q&&(I&&i.lineWidth(K),q=K)}function jt(K,Le,De){K?(xe(i.POLYGON_OFFSET_FILL),(te!==Le||ee!==De)&&(te=Le,ee=De,c.getReversed()&&(Le=-Le),i.polygonOffset(Le,De))):Ee(i.POLYGON_OFFSET_FILL)}function xt(K){K?xe(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function Dt(K){K===void 0&&(K=i.TEXTURE0+X-1),ge!==K&&(i.activeTexture(K),ge=K)}function je(K,Le,De){De===void 0&&(ge===null?De=i.TEXTURE0+X-1:De=ge);let ke=O[De];ke===void 0&&(ke={type:void 0,texture:void 0},O[De]=ke),(ke.type!==K||ke.texture!==Le)&&(ge!==De&&(i.activeTexture(De),ge=De),i.bindTexture(K,Le||ae[K]),ke.type=K,ke.texture=Le)}function F(){const K=O[ge];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch(K){Ot("WebGLState:",K)}}function $(){try{i.compressedTexImage3D(...arguments)}catch(K){Ot("WebGLState:",K)}}function V(){try{i.texSubImage2D(...arguments)}catch(K){Ot("WebGLState:",K)}}function J(){try{i.texSubImage3D(...arguments)}catch(K){Ot("WebGLState:",K)}}function ie(){try{i.compressedTexSubImage2D(...arguments)}catch(K){Ot("WebGLState:",K)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(K){Ot("WebGLState:",K)}}function Me(){try{i.texStorage2D(...arguments)}catch(K){Ot("WebGLState:",K)}}function He(){try{i.texStorage3D(...arguments)}catch(K){Ot("WebGLState:",K)}}function Je(){try{i.texImage2D(...arguments)}catch(K){Ot("WebGLState:",K)}}function be(){try{i.texImage3D(...arguments)}catch(K){Ot("WebGLState:",K)}}function Te(K){L.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),L.copy(K))}function Ie(K){Ae.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),Ae.copy(K))}function Ue(K,Le){let De=d.get(Le);De===void 0&&(De=new WeakMap,d.set(Le,De));let ke=De.get(K);ke===void 0&&(ke=i.getUniformBlockIndex(Le,K.name),De.set(K,ke))}function Oe(K,Le){const ke=d.get(Le).get(K);m.get(Le)!==ke&&(i.uniformBlockBinding(Le,ke,K.__bindingPointIndex),m.set(Le,ke))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},ge=null,O={},v={},_=new WeakMap,x=[],b=null,C=!1,M=null,y=null,D=null,U=null,P=null,G=null,A=null,z=new Gt(0,0,0),T=0,N=!1,ce=null,k=null,q=null,te=null,ee=null,L.set(0,0,i.canvas.width,i.canvas.height),Ae.set(0,0,i.canvas.width,i.canvas.height),u.reset(),c.reset(),h.reset()}return{buffers:{color:u,depth:c,stencil:h},enable:xe,disable:Ee,bindFramebuffer:Be,drawBuffers:Ze,useProgram:$e,setBlending:_t,setMaterial:Ct,setFlipSided:rt,setCullFace:Zt,setLineWidth:j,setPolygonOffset:jt,setScissorTest:xt,activeTexture:Dt,bindTexture:je,unbindTexture:F,compressedTexImage2D:E,compressedTexImage3D:$,texImage2D:Je,texImage3D:be,updateUBOMapping:Ue,uniformBlockBinding:Oe,texStorage2D:Me,texStorage3D:He,texSubImage2D:V,texSubImage3D:J,compressedTexSubImage2D:ie,compressedTexSubImage3D:Ce,scissor:Te,viewport:Ie,reset:tt}}function Uw(i,e,n,r,o,u,c){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new qt,g=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(F,E){return x?new OffscreenCanvas(F,E):Dc("canvas")}function C(F,E,$){let V=1;const J=je(F);if((J.width>$||J.height>$)&&(V=$/Math.max(J.width,J.height)),V<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ie=Math.floor(V*J.width),Ce=Math.floor(V*J.height);v===void 0&&(v=b(ie,Ce));const Me=E?b(ie,Ce):v;return Me.width=ie,Me.height=Ce,Me.getContext("2d").drawImage(F,0,0,ie,Ce),lt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ie+"x"+Ce+")."),Me}else return"data"in F&&lt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),F;return F}function M(F){return F.generateMipmaps}function y(F){i.generateMipmap(F)}function D(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function U(F,E,$,V,J=!1){if(F!==null){if(i[F]!==void 0)return i[F];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ie=E;if(E===i.RED&&($===i.FLOAT&&(ie=i.R32F),$===i.HALF_FLOAT&&(ie=i.R16F),$===i.UNSIGNED_BYTE&&(ie=i.R8)),E===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(ie=i.R8UI),$===i.UNSIGNED_SHORT&&(ie=i.R16UI),$===i.UNSIGNED_INT&&(ie=i.R32UI),$===i.BYTE&&(ie=i.R8I),$===i.SHORT&&(ie=i.R16I),$===i.INT&&(ie=i.R32I)),E===i.RG&&($===i.FLOAT&&(ie=i.RG32F),$===i.HALF_FLOAT&&(ie=i.RG16F),$===i.UNSIGNED_BYTE&&(ie=i.RG8)),E===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(ie=i.RG8UI),$===i.UNSIGNED_SHORT&&(ie=i.RG16UI),$===i.UNSIGNED_INT&&(ie=i.RG32UI),$===i.BYTE&&(ie=i.RG8I),$===i.SHORT&&(ie=i.RG16I),$===i.INT&&(ie=i.RG32I)),E===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),$===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),$===i.UNSIGNED_INT&&(ie=i.RGB32UI),$===i.BYTE&&(ie=i.RGB8I),$===i.SHORT&&(ie=i.RGB16I),$===i.INT&&(ie=i.RGB32I)),E===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),$===i.UNSIGNED_INT&&(ie=i.RGBA32UI),$===i.BYTE&&(ie=i.RGBA8I),$===i.SHORT&&(ie=i.RGBA16I),$===i.INT&&(ie=i.RGBA32I)),E===i.RGB&&($===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),E===i.RGBA){const Ce=J?wc:Rt.getTransfer(V);$===i.FLOAT&&(ie=i.RGBA32F),$===i.HALF_FLOAT&&(ie=i.RGBA16F),$===i.UNSIGNED_BYTE&&(ie=Ce===Ht?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function P(F,E){let $;return F?E===null||E===ra||E===El?$=i.DEPTH24_STENCIL8:E===ta?$=i.DEPTH32F_STENCIL8:E===bl&&($=i.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ra||E===El?$=i.DEPTH_COMPONENT24:E===ta?$=i.DEPTH_COMPONENT32F:E===bl&&($=i.DEPTH_COMPONENT16),$}function G(F,E){return M(F)===!0||F.isFramebufferTexture&&F.minFilter!==Nn&&F.minFilter!==zn?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function A(F){const E=F.target;E.removeEventListener("dispose",A),T(E),E.isVideoTexture&&g.delete(E)}function z(F){const E=F.target;E.removeEventListener("dispose",z),ce(E)}function T(F){const E=r.get(F);if(E.__webglInit===void 0)return;const $=F.source,V=_.get($);if(V){const J=V[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&N(F),Object.keys(V).length===0&&_.delete($)}r.remove(F)}function N(F){const E=r.get(F);i.deleteTexture(E.__webglTexture);const $=F.source,V=_.get($);delete V[E.__cacheKey],c.memory.textures--}function ce(F){const E=r.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),r.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(E.__webglFramebuffer[V]))for(let J=0;J<E.__webglFramebuffer[V].length;J++)i.deleteFramebuffer(E.__webglFramebuffer[V][J]);else i.deleteFramebuffer(E.__webglFramebuffer[V]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[V])}else{if(Array.isArray(E.__webglFramebuffer))for(let V=0;V<E.__webglFramebuffer.length;V++)i.deleteFramebuffer(E.__webglFramebuffer[V]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let V=0;V<E.__webglColorRenderbuffer.length;V++)E.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[V]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=F.textures;for(let V=0,J=$.length;V<J;V++){const ie=r.get($[V]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),c.memory.textures--),r.remove($[V])}r.remove(F)}let k=0;function q(){k=0}function te(){const F=k;return F>=o.maxTextures&&lt("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),k+=1,F}function ee(F){const E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.wrapR||0),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.colorSpace),E.join()}function X(F,E){const $=r.get(F);if(F.isVideoTexture&&xt(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&$.__version!==F.version){const V=F.image;if(V===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{ae($,F,E);return}}else F.isExternalTexture&&($.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+E)}function I(F,E){const $=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&$.__version!==F.version){ae($,F,E);return}else F.isExternalTexture&&($.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+E)}function H(F,E){const $=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&$.__version!==F.version){ae($,F,E);return}n.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+E)}function le(F,E){const $=r.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&$.__version!==F.version){xe($,F,E);return}n.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+E)}const ge={[ip]:i.REPEAT,[Na]:i.CLAMP_TO_EDGE,[ap]:i.MIRRORED_REPEAT},O={[Nn]:i.NEAREST,[Jb]:i.NEAREST_MIPMAP_NEAREST,[qu]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[nd]:i.LINEAR_MIPMAP_NEAREST,[Qr]:i.LINEAR_MIPMAP_LINEAR},B={[nE]:i.NEVER,[oE]:i.ALWAYS,[iE]:i.LESS,[sm]:i.LEQUAL,[aE]:i.EQUAL,[om]:i.GEQUAL,[rE]:i.GREATER,[sE]:i.NOTEQUAL};function Q(F,E){if(E.type===ta&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===zn||E.magFilter===nd||E.magFilter===qu||E.magFilter===Qr||E.minFilter===zn||E.minFilter===nd||E.minFilter===qu||E.minFilter===Qr)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,ge[E.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,ge[E.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,ge[E.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,O[E.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,O[E.minFilter]),E.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Nn||E.minFilter!==qu&&E.minFilter!==Qr||E.type===ta&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function L(F,E){let $=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",A));const V=E.source;let J=_.get(V);J===void 0&&(J={},_.set(V,J));const ie=ee(E);if(ie!==F.__cacheKey){J[ie]===void 0&&(J[ie]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,$=!0),J[ie].usedTimes++;const Ce=J[F.__cacheKey];Ce!==void 0&&(J[F.__cacheKey].usedTimes--,Ce.usedTimes===0&&N(E)),F.__cacheKey=ie,F.__webglTexture=J[ie].texture}return $}function Ae(F,E,$){return Math.floor(Math.floor(F/$)/E)}function Pe(F,E,$,V){const ie=F.updateRanges;if(ie.length===0)n.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,$,V,E.data);else{ie.sort((be,Te)=>be.start-Te.start);let Ce=0;for(let be=1;be<ie.length;be++){const Te=ie[Ce],Ie=ie[be],Ue=Te.start+Te.count,Oe=Ae(Ie.start,E.width,4),tt=Ae(Te.start,E.width,4);Ie.start<=Ue+1&&Oe===tt&&Ae(Ie.start+Ie.count-1,E.width,4)===Oe?Te.count=Math.max(Te.count,Ie.start+Ie.count-Te.start):(++Ce,ie[Ce]=Ie)}ie.length=Ce+1;const Me=i.getParameter(i.UNPACK_ROW_LENGTH),He=i.getParameter(i.UNPACK_SKIP_PIXELS),Je=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let be=0,Te=ie.length;be<Te;be++){const Ie=ie[be],Ue=Math.floor(Ie.start/4),Oe=Math.ceil(Ie.count/4),tt=Ue%E.width,K=Math.floor(Ue/E.width),Le=Oe,De=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,K),n.texSubImage2D(i.TEXTURE_2D,0,tt,K,Le,De,$,V,E.data)}F.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Me),i.pixelStorei(i.UNPACK_SKIP_PIXELS,He),i.pixelStorei(i.UNPACK_SKIP_ROWS,Je)}}function ae(F,E,$){let V=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(V=i.TEXTURE_3D);const J=L(F,E),ie=E.source;n.bindTexture(V,F.__webglTexture,i.TEXTURE0+$);const Ce=r.get(ie);if(ie.version!==Ce.__version||J===!0){n.activeTexture(i.TEXTURE0+$);const Me=Rt.getPrimaries(Rt.workingColorSpace),He=E.colorSpace===yr?null:Rt.getPrimaries(E.colorSpace),Je=E.colorSpace===yr||Me===He?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let be=C(E.image,!1,o.maxTextureSize);be=Dt(E,be);const Te=u.convert(E.format,E.colorSpace),Ie=u.convert(E.type);let Ue=U(E.internalFormat,Te,Ie,E.colorSpace,E.isVideoTexture);Q(V,E);let Oe;const tt=E.mipmaps,K=E.isVideoTexture!==!0,Le=Ce.__version===void 0||J===!0,De=ie.dataReady,ke=G(E,be);if(E.isDepthTexture)Ue=P(E.format===Jr,E.type),Le&&(K?n.texStorage2D(i.TEXTURE_2D,1,Ue,be.width,be.height):n.texImage2D(i.TEXTURE_2D,0,Ue,be.width,be.height,0,Te,Ie,null));else if(E.isDataTexture)if(tt.length>0){K&&Le&&n.texStorage2D(i.TEXTURE_2D,ke,Ue,tt[0].width,tt[0].height);for(let we=0,_e=tt.length;we<_e;we++)Oe=tt[we],K?De&&n.texSubImage2D(i.TEXTURE_2D,we,0,0,Oe.width,Oe.height,Te,Ie,Oe.data):n.texImage2D(i.TEXTURE_2D,we,Ue,Oe.width,Oe.height,0,Te,Ie,Oe.data);E.generateMipmaps=!1}else K?(Le&&n.texStorage2D(i.TEXTURE_2D,ke,Ue,be.width,be.height),De&&Pe(E,be,Te,Ie)):n.texImage2D(i.TEXTURE_2D,0,Ue,be.width,be.height,0,Te,Ie,be.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){K&&Le&&n.texStorage3D(i.TEXTURE_2D_ARRAY,ke,Ue,tt[0].width,tt[0].height,be.depth);for(let we=0,_e=tt.length;we<_e;we++)if(Oe=tt[we],E.format!==Gi)if(Te!==null)if(K){if(De)if(E.layerUpdates.size>0){const Ve=zv(Oe.width,Oe.height,E.format,E.type);for(const st of E.layerUpdates){const Ft=Oe.data.subarray(st*Ve/Oe.data.BYTES_PER_ELEMENT,(st+1)*Ve/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,st,Oe.width,Oe.height,1,Te,Ft)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,Oe.width,Oe.height,be.depth,Te,Oe.data)}else n.compressedTexImage3D(i.TEXTURE_2D_ARRAY,we,Ue,Oe.width,Oe.height,be.depth,0,Oe.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?De&&n.texSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,Oe.width,Oe.height,be.depth,Te,Ie,Oe.data):n.texImage3D(i.TEXTURE_2D_ARRAY,we,Ue,Oe.width,Oe.height,be.depth,0,Te,Ie,Oe.data)}else{K&&Le&&n.texStorage2D(i.TEXTURE_2D,ke,Ue,tt[0].width,tt[0].height);for(let we=0,_e=tt.length;we<_e;we++)Oe=tt[we],E.format!==Gi?Te!==null?K?De&&n.compressedTexSubImage2D(i.TEXTURE_2D,we,0,0,Oe.width,Oe.height,Te,Oe.data):n.compressedTexImage2D(i.TEXTURE_2D,we,Ue,Oe.width,Oe.height,0,Oe.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?De&&n.texSubImage2D(i.TEXTURE_2D,we,0,0,Oe.width,Oe.height,Te,Ie,Oe.data):n.texImage2D(i.TEXTURE_2D,we,Ue,Oe.width,Oe.height,0,Te,Ie,Oe.data)}else if(E.isDataArrayTexture)if(K){if(Le&&n.texStorage3D(i.TEXTURE_2D_ARRAY,ke,Ue,be.width,be.height,be.depth),De)if(E.layerUpdates.size>0){const we=zv(be.width,be.height,E.format,E.type);for(const _e of E.layerUpdates){const Ve=be.data.subarray(_e*we/be.data.BYTES_PER_ELEMENT,(_e+1)*we/be.data.BYTES_PER_ELEMENT);n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,be.width,be.height,1,Te,Ie,Ve)}E.clearLayerUpdates()}else n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Te,Ie,be.data)}else n.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,be.width,be.height,be.depth,0,Te,Ie,be.data);else if(E.isData3DTexture)K?(Le&&n.texStorage3D(i.TEXTURE_3D,ke,Ue,be.width,be.height,be.depth),De&&n.texSubImage3D(i.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Te,Ie,be.data)):n.texImage3D(i.TEXTURE_3D,0,Ue,be.width,be.height,be.depth,0,Te,Ie,be.data);else if(E.isFramebufferTexture){if(Le)if(K)n.texStorage2D(i.TEXTURE_2D,ke,Ue,be.width,be.height);else{let we=be.width,_e=be.height;for(let Ve=0;Ve<ke;Ve++)n.texImage2D(i.TEXTURE_2D,Ve,Ue,we,_e,0,Te,Ie,null),we>>=1,_e>>=1}}else if(tt.length>0){if(K&&Le){const we=je(tt[0]);n.texStorage2D(i.TEXTURE_2D,ke,Ue,we.width,we.height)}for(let we=0,_e=tt.length;we<_e;we++)Oe=tt[we],K?De&&n.texSubImage2D(i.TEXTURE_2D,we,0,0,Te,Ie,Oe):n.texImage2D(i.TEXTURE_2D,we,Ue,Te,Ie,Oe);E.generateMipmaps=!1}else if(K){if(Le){const we=je(be);n.texStorage2D(i.TEXTURE_2D,ke,Ue,we.width,we.height)}De&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,Ie,be)}else n.texImage2D(i.TEXTURE_2D,0,Ue,Te,Ie,be);M(E)&&y(V),Ce.__version=ie.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function xe(F,E,$){if(E.image.length!==6)return;const V=L(F,E),J=E.source;n.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+$);const ie=r.get(J);if(J.version!==ie.__version||V===!0){n.activeTexture(i.TEXTURE0+$);const Ce=Rt.getPrimaries(Rt.workingColorSpace),Me=E.colorSpace===yr?null:Rt.getPrimaries(E.colorSpace),He=E.colorSpace===yr||Ce===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Je=E.isCompressedTexture||E.image[0].isCompressedTexture,be=E.image[0]&&E.image[0].isDataTexture,Te=[];for(let _e=0;_e<6;_e++)!Je&&!be?Te[_e]=C(E.image[_e],!0,o.maxCubemapSize):Te[_e]=be?E.image[_e].image:E.image[_e],Te[_e]=Dt(E,Te[_e]);const Ie=Te[0],Ue=u.convert(E.format,E.colorSpace),Oe=u.convert(E.type),tt=U(E.internalFormat,Ue,Oe,E.colorSpace),K=E.isVideoTexture!==!0,Le=ie.__version===void 0||V===!0,De=J.dataReady;let ke=G(E,Ie);Q(i.TEXTURE_CUBE_MAP,E);let we;if(Je){K&&Le&&n.texStorage2D(i.TEXTURE_CUBE_MAP,ke,tt,Ie.width,Ie.height);for(let _e=0;_e<6;_e++){we=Te[_e].mipmaps;for(let Ve=0;Ve<we.length;Ve++){const st=we[Ve];E.format!==Gi?Ue!==null?K?De&&n.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve,0,0,st.width,st.height,Ue,st.data):n.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve,tt,st.width,st.height,0,st.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?De&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve,0,0,st.width,st.height,Ue,Oe,st.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve,tt,st.width,st.height,0,Ue,Oe,st.data)}}}else{if(we=E.mipmaps,K&&Le){we.length>0&&ke++;const _e=je(Te[0]);n.texStorage2D(i.TEXTURE_CUBE_MAP,ke,tt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(be){K?De&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Te[_e].width,Te[_e].height,Ue,Oe,Te[_e].data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,tt,Te[_e].width,Te[_e].height,0,Ue,Oe,Te[_e].data);for(let Ve=0;Ve<we.length;Ve++){const Ft=we[Ve].image[_e].image;K?De&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve+1,0,0,Ft.width,Ft.height,Ue,Oe,Ft.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve+1,tt,Ft.width,Ft.height,0,Ue,Oe,Ft.data)}}else{K?De&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ue,Oe,Te[_e]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,tt,Ue,Oe,Te[_e]);for(let Ve=0;Ve<we.length;Ve++){const st=we[Ve];K?De&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve+1,0,0,Ue,Oe,st.image[_e]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve+1,tt,Ue,Oe,st.image[_e])}}}M(E)&&y(i.TEXTURE_CUBE_MAP),ie.__version=J.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function Ee(F,E,$,V,J,ie){const Ce=u.convert($.format,$.colorSpace),Me=u.convert($.type),He=U($.internalFormat,Ce,Me,$.colorSpace),Je=r.get(E),be=r.get($);if(be.__renderTarget=E,!Je.__hasExternalTextures){const Te=Math.max(1,E.width>>ie),Ie=Math.max(1,E.height>>ie);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?n.texImage3D(J,ie,He,Te,Ie,E.depth,0,Ce,Me,null):n.texImage2D(J,ie,He,Te,Ie,0,Ce,Me,null)}n.bindFramebuffer(i.FRAMEBUFFER,F),jt(E)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,J,be.__webglTexture,0,j(E)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,J,be.__webglTexture,ie),n.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(F,E,$){if(i.bindRenderbuffer(i.RENDERBUFFER,F),E.depthBuffer){const V=E.depthTexture,J=V&&V.isDepthTexture?V.type:null,ie=P(E.stencilBuffer,J),Ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;jt(E)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j(E),ie,E.width,E.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,j(E),ie,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ie,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,F)}else{const V=E.textures;for(let J=0;J<V.length;J++){const ie=V[J],Ce=u.convert(ie.format,ie.colorSpace),Me=u.convert(ie.type),He=U(ie.internalFormat,Ce,Me,ie.colorSpace);jt(E)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j(E),He,E.width,E.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,j(E),He,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,He,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ze(F,E,$){const V=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(i.FRAMEBUFFER,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=r.get(E.depthTexture);if(J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V){if(J.__webglInit===void 0&&(J.__webglInit=!0,E.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),n.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Q(i.TEXTURE_CUBE_MAP,E.depthTexture);const Je=u.convert(E.depthTexture.format),be=u.convert(E.depthTexture.type);let Te;E.depthTexture.format===Fa?Te=i.DEPTH_COMPONENT24:E.depthTexture.format===Jr&&(Te=i.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Te,E.width,E.height,0,Je,be,null)}}else X(E.depthTexture,0);const ie=J.__webglTexture,Ce=j(E),Me=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,He=E.depthTexture.format===Jr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Fa)jt(E)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,He,Me,ie,0,Ce):i.framebufferTexture2D(i.FRAMEBUFFER,He,Me,ie,0);else if(E.depthTexture.format===Jr)jt(E)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,He,Me,ie,0,Ce):i.framebufferTexture2D(i.FRAMEBUFFER,He,Me,ie,0);else throw new Error("Unknown depthTexture format")}function $e(F){const E=r.get(F),$=F.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==F.depthTexture){const V=F.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),V){const J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,V.removeEventListener("dispose",J)};V.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=V}if(F.depthTexture&&!E.__autoAllocateDepthBuffer)if($)for(let V=0;V<6;V++)Ze(E.__webglFramebuffer[V],F,V);else{const V=F.texture.mipmaps;V&&V.length>0?Ze(E.__webglFramebuffer[0],F,0):Ze(E.__webglFramebuffer,F,0)}else if($){E.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(n.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[V]),E.__webglDepthbuffer[V]===void 0)E.__webglDepthbuffer[V]=i.createRenderbuffer(),Be(E.__webglDepthbuffer[V],F,!1);else{const J=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ie)}}else{const V=F.texture.mipmaps;if(V&&V.length>0?n.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Be(E.__webglDepthbuffer,F,!1);else{const J=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ie)}}n.bindFramebuffer(i.FRAMEBUFFER,null)}function en(F,E,$){const V=r.get(F);E!==void 0&&Ee(V.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&$e(F)}function vt(F){const E=F.texture,$=r.get(F),V=r.get(E);F.addEventListener("dispose",z);const J=F.textures,ie=F.isWebGLCubeRenderTarget===!0,Ce=J.length>1;if(Ce||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=E.version,c.memory.textures++),ie){$.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[Me]=[];for(let He=0;He<E.mipmaps.length;He++)$.__webglFramebuffer[Me][He]=i.createFramebuffer()}else $.__webglFramebuffer[Me]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let Me=0;Me<E.mipmaps.length;Me++)$.__webglFramebuffer[Me]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let Me=0,He=J.length;Me<He;Me++){const Je=r.get(J[Me]);Je.__webglTexture===void 0&&(Je.__webglTexture=i.createTexture(),c.memory.textures++)}if(F.samples>0&&jt(F)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Me=0;Me<J.length;Me++){const He=J[Me];$.__webglColorRenderbuffer[Me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[Me]);const Je=u.convert(He.format,He.colorSpace),be=u.convert(He.type),Te=U(He.internalFormat,Je,be,He.colorSpace,F.isXRRenderTarget===!0),Ie=j(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Te,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,$.__webglColorRenderbuffer[Me])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),Be($.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){n.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Q(i.TEXTURE_CUBE_MAP,E);for(let Me=0;Me<6;Me++)if(E.mipmaps&&E.mipmaps.length>0)for(let He=0;He<E.mipmaps.length;He++)Ee($.__webglFramebuffer[Me][He],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,He);else Ee($.__webglFramebuffer[Me],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);M(E)&&y(i.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let Me=0,He=J.length;Me<He;Me++){const Je=J[Me],be=r.get(Je);let Te=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Te=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(Te,be.__webglTexture),Q(Te,Je),Ee($.__webglFramebuffer,F,Je,i.COLOR_ATTACHMENT0+Me,Te,0),M(Je)&&y(Te)}n.unbindTexture()}else{let Me=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Me=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(Me,V.__webglTexture),Q(Me,E),E.mipmaps&&E.mipmaps.length>0)for(let He=0;He<E.mipmaps.length;He++)Ee($.__webglFramebuffer[He],F,E,i.COLOR_ATTACHMENT0,Me,He);else Ee($.__webglFramebuffer,F,E,i.COLOR_ATTACHMENT0,Me,0);M(E)&&y(Me),n.unbindTexture()}F.depthBuffer&&$e(F)}function _t(F){const E=F.textures;for(let $=0,V=E.length;$<V;$++){const J=E[$];if(M(J)){const ie=D(F),Ce=r.get(J).__webglTexture;n.bindTexture(ie,Ce),y(ie),n.unbindTexture()}}}const Ct=[],rt=[];function Zt(F){if(F.samples>0){if(jt(F)===!1){const E=F.textures,$=F.width,V=F.height;let J=i.COLOR_BUFFER_BIT;const ie=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=r.get(F),Me=E.length>1;if(Me)for(let Je=0;Je<E.length;Je++)n.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Je,i.RENDERBUFFER,null),n.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Je,i.TEXTURE_2D,null,0);n.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const He=F.texture.mipmaps;He&&He.length>0?n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Je=0;Je<E.length;Je++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),Me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Je]);const be=r.get(E[Je]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,$,V,0,0,$,V,J,i.NEAREST),m===!0&&(Ct.length=0,rt.length=0,Ct.push(i.COLOR_ATTACHMENT0+Je),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Ct.push(ie),rt.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ct))}if(n.bindFramebuffer(i.READ_FRAMEBUFFER,null),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Me)for(let Je=0;Je<E.length;Je++){n.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Je,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Je]);const be=r.get(E[Je]).__webglTexture;n.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Je,i.TEXTURE_2D,be,0)}n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&m){const E=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function j(F){return Math.min(o.maxSamples,F.samples)}function jt(F){const E=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xt(F){const E=c.render.frame;g.get(F)!==E&&(g.set(F,E),F.update())}function Dt(F,E){const $=F.colorSpace,V=F.format,J=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||$!==lo&&$!==yr&&(Rt.getTransfer($)===Ht?(V!==Gi||J!==Di)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",$)),E}function je(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(d.width=F.naturalWidth||F.width,d.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(d.width=F.displayWidth,d.height=F.displayHeight):(d.width=F.width,d.height=F.height),d}this.allocateTextureUnit=te,this.resetTextureUnits=q,this.setTexture2D=X,this.setTexture2DArray=I,this.setTexture3D=H,this.setTextureCube=le,this.rebindTextures=en,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Lw(i,e){function n(r,o=yr){let u;const c=Rt.getTransfer(o);if(r===Di)return i.UNSIGNED_BYTE;if(r===tm)return i.UNSIGNED_SHORT_4_4_4_4;if(r===nm)return i.UNSIGNED_SHORT_5_5_5_1;if(r===ry)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===sy)return i.UNSIGNED_INT_10F_11F_11F_REV;if(r===iy)return i.BYTE;if(r===ay)return i.SHORT;if(r===bl)return i.UNSIGNED_SHORT;if(r===em)return i.INT;if(r===ra)return i.UNSIGNED_INT;if(r===ta)return i.FLOAT;if(r===za)return i.HALF_FLOAT;if(r===oy)return i.ALPHA;if(r===ly)return i.RGB;if(r===Gi)return i.RGBA;if(r===Fa)return i.DEPTH_COMPONENT;if(r===Jr)return i.DEPTH_STENCIL;if(r===uy)return i.RED;if(r===im)return i.RED_INTEGER;if(r===oo)return i.RG;if(r===am)return i.RG_INTEGER;if(r===rm)return i.RGBA_INTEGER;if(r===Mc||r===bc||r===Ec||r===Tc)if(c===Ht)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Mc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Mc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ec)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rp||r===sp||r===op||r===lp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===rp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===op)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===up||r===cp||r===fp||r===hp||r===dp||r===pp||r===mp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===up||r===cp)return c===Ht?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===fp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===hp)return u.COMPRESSED_R11_EAC;if(r===dp)return u.COMPRESSED_SIGNED_R11_EAC;if(r===pp)return u.COMPRESSED_RG11_EAC;if(r===mp)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===gp||r===_p||r===vp||r===xp||r===yp||r===Sp||r===Mp||r===bp||r===Ep||r===Tp||r===Ap||r===Cp||r===wp||r===Rp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===gp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_p)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ep)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Tp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ap)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dp||r===Up||r===Lp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Dp)return c===Ht?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Up)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Np||r===Op||r===Pp||r===Ip)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Np)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Op)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ip)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===El?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:n}}const Nw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ow=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Pw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new yy(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Vi({vertexShader:Nw,fragmentShader:Ow,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ka(new Fc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Iw extends co{constructor(e,n){super();const r=this;let o=null,u=1,c=null,h="local-floor",m=1,d=null,g=null,v=null,_=null,x=null,b=null;const C=typeof XRWebGLBinding<"u",M=new Pw,y={},D=n.getContextAttributes();let U=null,P=null;const G=[],A=[],z=new qt;let T=null;const N=new wi;N.viewport=new cn;const ce=new wi;ce.viewport=new cn;const k=[N,ce],q=new jE;let te=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let xe=G[ae];return xe===void 0&&(xe=new cd,G[ae]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ae){let xe=G[ae];return xe===void 0&&(xe=new cd,G[ae]=xe),xe.getGripSpace()},this.getHand=function(ae){let xe=G[ae];return xe===void 0&&(xe=new cd,G[ae]=xe),xe.getHandSpace()};function X(ae){const xe=A.indexOf(ae.inputSource);if(xe===-1)return;const Ee=G[xe];Ee!==void 0&&(Ee.update(ae.inputSource,ae.frame,d||c),Ee.dispatchEvent({type:ae.type,data:ae.inputSource}))}function I(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",I),o.removeEventListener("inputsourceschange",H);for(let ae=0;ae<G.length;ae++){const xe=A[ae];xe!==null&&(A[ae]=null,G[ae].disconnect(xe))}te=null,ee=null,M.reset();for(const ae in y)delete y[ae];e.setRenderTarget(U),x=null,_=null,v=null,o=null,P=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){u=ae,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){h=ae,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(ae){d=ae},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",I),o.addEventListener("inputsourceschange",H),D.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Be=null,Ze=null;D.depth&&(Ze=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ee=D.stencil?Jr:Fa,Be=D.stencil?El:ra);const $e={colorFormat:n.RGBA8,depthFormat:Ze,scaleFactor:u};v=this.getBinding(),_=v.createProjectionLayer($e),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),P=new aa(_.textureWidth,_.textureHeight,{format:Gi,type:Di,depthTexture:new Tl(_.textureWidth,_.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ee={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:u};x=new XRWebGLLayer(o,n,Ee),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),P=new aa(x.framebufferWidth,x.framebufferHeight,{format:Gi,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),d=null,c=await o.requestReferenceSpace(h),Pe.setContext(o),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(ae){for(let xe=0;xe<ae.removed.length;xe++){const Ee=ae.removed[xe],Be=A.indexOf(Ee);Be>=0&&(A[Be]=null,G[Be].disconnect(Ee))}for(let xe=0;xe<ae.added.length;xe++){const Ee=ae.added[xe];let Be=A.indexOf(Ee);if(Be===-1){for(let $e=0;$e<G.length;$e++)if($e>=A.length){A.push(Ee),Be=$e;break}else if(A[$e]===null){A[$e]=Ee,Be=$e;break}if(Be===-1)break}const Ze=G[Be];Ze&&Ze.connect(Ee)}}const le=new de,ge=new de;function O(ae,xe,Ee){le.setFromMatrixPosition(xe.matrixWorld),ge.setFromMatrixPosition(Ee.matrixWorld);const Be=le.distanceTo(ge),Ze=xe.projectionMatrix.elements,$e=Ee.projectionMatrix.elements,en=Ze[14]/(Ze[10]-1),vt=Ze[14]/(Ze[10]+1),_t=(Ze[9]+1)/Ze[5],Ct=(Ze[9]-1)/Ze[5],rt=(Ze[8]-1)/Ze[0],Zt=($e[8]+1)/$e[0],j=en*rt,jt=en*Zt,xt=Be/(-rt+Zt),Dt=xt*-rt;if(xe.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Dt),ae.translateZ(xt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Ze[10]===-1)ae.projectionMatrix.copy(xe.projectionMatrix),ae.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const je=en+xt,F=vt+xt,E=j-Dt,$=jt+(Be-Dt),V=_t*vt/F*je,J=Ct*vt/F*je;ae.projectionMatrix.makePerspective(E,$,V,J,je,F),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function B(ae,xe){xe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(xe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let xe=ae.near,Ee=ae.far;M.texture!==null&&(M.depthNear>0&&(xe=M.depthNear),M.depthFar>0&&(Ee=M.depthFar)),q.near=ce.near=N.near=xe,q.far=ce.far=N.far=Ee,(te!==q.near||ee!==q.far)&&(o.updateRenderState({depthNear:q.near,depthFar:q.far}),te=q.near,ee=q.far),q.layers.mask=ae.layers.mask|6,N.layers.mask=q.layers.mask&-5,ce.layers.mask=q.layers.mask&-3;const Be=ae.parent,Ze=q.cameras;B(q,Be);for(let $e=0;$e<Ze.length;$e++)B(Ze[$e],Be);Ze.length===2?O(q,N,ce):q.projectionMatrix.copy(N.projectionMatrix),Q(ae,q,Be)};function Q(ae,xe,Ee){Ee===null?ae.matrix.copy(xe.matrixWorld):(ae.matrix.copy(Ee.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(xe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(xe.projectionMatrix),ae.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=zp*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(_===null&&x===null))return m},this.setFoveation=function(ae){m=ae,_!==null&&(_.fixedFoveation=ae),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ae)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(ae){return y[ae]};let L=null;function Ae(ae,xe){if(g=xe.getViewerPose(d||c),b=xe,g!==null){const Ee=g.views;x!==null&&(e.setRenderTargetFramebuffer(P,x.framebuffer),e.setRenderTarget(P));let Be=!1;Ee.length!==q.cameras.length&&(q.cameras.length=0,Be=!0);for(let vt=0;vt<Ee.length;vt++){const _t=Ee[vt];let Ct=null;if(x!==null)Ct=x.getViewport(_t);else{const Zt=v.getViewSubImage(_,_t);Ct=Zt.viewport,vt===0&&(e.setRenderTargetTextures(P,Zt.colorTexture,Zt.depthStencilTexture),e.setRenderTarget(P))}let rt=k[vt];rt===void 0&&(rt=new wi,rt.layers.enable(vt),rt.viewport=new cn,k[vt]=rt),rt.matrix.fromArray(_t.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(_t.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),vt===0&&(q.matrix.copy(rt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Be===!0&&q.cameras.push(rt)}const Ze=o.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const vt=v.getDepthInformation(Ee[0]);vt&&vt.isValid&&vt.texture&&M.init(vt,o.renderState)}if(Ze&&Ze.includes("camera-access")&&C){e.state.unbindTexture(),v=r.getBinding();for(let vt=0;vt<Ee.length;vt++){const _t=Ee[vt].camera;if(_t){let Ct=y[_t];Ct||(Ct=new yy,y[_t]=Ct);const rt=v.getCameraImage(_t);Ct.sourceTexture=rt}}}}for(let Ee=0;Ee<G.length;Ee++){const Be=A[Ee],Ze=G[Ee];Be!==null&&Ze!==void 0&&Ze.update(Be,xe,d||c)}L&&L(ae,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),b=null}const Pe=new Ey;Pe.setAnimationLoop(Ae),this.setAnimationLoop=function(ae){L=ae},this.dispose=function(){}}}const jr=new Ba,zw=new fn;function Fw(i,e){function n(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function r(M,y){y.color.getRGB(M.fogColor.value,Sy(i)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function o(M,y,D,U,P){y.isMeshBasicMaterial?u(M,y):y.isMeshLambertMaterial?(u(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(u(M,y),v(M,y)):y.isMeshPhongMaterial?(u(M,y),g(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(u(M,y),_(M,y),y.isMeshPhysicalMaterial&&x(M,y,P)):y.isMeshMatcapMaterial?(u(M,y),b(M,y)):y.isMeshDepthMaterial?u(M,y):y.isMeshDistanceMaterial?(u(M,y),C(M,y)):y.isMeshNormalMaterial?u(M,y):y.isLineBasicMaterial?(c(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?m(M,y,D,U):y.isSpriteMaterial?d(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,n(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===ei&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,n(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===ei&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,n(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,n(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const D=e.get(y),U=D.envMap,P=D.envMapRotation;U&&(M.envMap.value=U,jr.copy(P),jr.x*=-1,jr.y*=-1,jr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),M.envMapRotation.value.setFromMatrix4(zw.makeRotationFromEuler(jr)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,M.aoMapTransform))}function c(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function m(M,y,D,U){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*D,M.scale.value=U*.5,y.map&&(M.map.value=y.map,n(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function d(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function _(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function x(M,y,D){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ei&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,y){y.matcap&&(M.matcap.value=y.matcap)}function C(M,y){const D=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Bw(i,e,n,r){let o={},u={},c=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,U){const P=U.program;r.uniformBlockBinding(D,P)}function d(D,U){let P=o[D.id];P===void 0&&(b(D),P=g(D),o[D.id]=P,D.addEventListener("dispose",M));const G=U.program;r.updateUBOMapping(D,G);const A=e.render.frame;u[D.id]!==A&&(_(D),u[D.id]=A)}function g(D){const U=v();D.__bindingPointIndex=U;const P=i.createBuffer(),G=D.__size,A=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,G,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,U,P),P}function v(){for(let D=0;D<h;D++)if(c.indexOf(D)===-1)return c.push(D),D;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const U=o[D.id],P=D.uniforms,G=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,U);for(let A=0,z=P.length;A<z;A++){const T=Array.isArray(P[A])?P[A]:[P[A]];for(let N=0,ce=T.length;N<ce;N++){const k=T[N];if(x(k,A,N,G)===!0){const q=k.__offset,te=Array.isArray(k.value)?k.value:[k.value];let ee=0;for(let X=0;X<te.length;X++){const I=te[X],H=C(I);typeof I=="number"||typeof I=="boolean"?(k.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,q+ee,k.__data)):I.isMatrix3?(k.__data[0]=I.elements[0],k.__data[1]=I.elements[1],k.__data[2]=I.elements[2],k.__data[3]=0,k.__data[4]=I.elements[3],k.__data[5]=I.elements[4],k.__data[6]=I.elements[5],k.__data[7]=0,k.__data[8]=I.elements[6],k.__data[9]=I.elements[7],k.__data[10]=I.elements[8],k.__data[11]=0):(I.toArray(k.__data,ee),ee+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(D,U,P,G){const A=D.value,z=U+"_"+P;if(G[z]===void 0)return typeof A=="number"||typeof A=="boolean"?G[z]=A:G[z]=A.clone(),!0;{const T=G[z];if(typeof A=="number"||typeof A=="boolean"){if(T!==A)return G[z]=A,!0}else if(T.equals(A)===!1)return T.copy(A),!0}return!1}function b(D){const U=D.uniforms;let P=0;const G=16;for(let z=0,T=U.length;z<T;z++){const N=Array.isArray(U[z])?U[z]:[U[z]];for(let ce=0,k=N.length;ce<k;ce++){const q=N[ce],te=Array.isArray(q.value)?q.value:[q.value];for(let ee=0,X=te.length;ee<X;ee++){const I=te[ee],H=C(I),le=P%G,ge=le%H.boundary,O=le+ge;P+=ge,O!==0&&G-O<H.storage&&(P+=G-O),q.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=P,P+=H.storage}}}const A=P%G;return A>0&&(P+=G-A),D.__size=P,D.__cache={},this}function C(D){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=48,U.storage=48):D.isMatrix4?(U.boundary=64,U.storage=64):D.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",D),U}function M(D){const U=D.target;U.removeEventListener("dispose",M);const P=c.indexOf(U.__bindingPointIndex);c.splice(P,1),i.deleteBuffer(o[U.id]),delete o[U.id],delete u[U.id]}function y(){for(const D in o)i.deleteBuffer(o[D]);c=[],o={},u={}}return{bind:m,update:d,dispose:y}}const kw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qi=null;function Hw(){return Qi===null&&(Qi=new LE(kw,16,16,oo,za),Qi.name="DFG_LUT",Qi.minFilter=zn,Qi.magFilter=zn,Qi.wrapS=Na,Qi.wrapT=Na,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}class Gw{constructor(e={}){const{canvas:n=uE(),context:r=null,depth:o=!0,stencil:u=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:x=Di}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=c;const C=x,M=new Set([rm,am,im]),y=new Set([Di,ra,bl,El,tm,nm]),D=new Uint32Array(4),U=new Int32Array(4);let P=null,G=null;const A=[],z=[];let T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ia,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let ce=!1;this._outputColorSpace=Ci;let k=0,q=0,te=null,ee=-1,X=null;const I=new cn,H=new cn;let le=null;const ge=new Gt(0);let O=0,B=n.width,Q=n.height,L=1,Ae=null,Pe=null;const ae=new cn(0,0,B,Q),xe=new cn(0,0,B,Q);let Ee=!1;const Be=new vy;let Ze=!1,$e=!1;const en=new fn,vt=new de,_t=new cn,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Zt(){return te===null?L:1}let j=r;function jt(R,Z){return n.getContext(R,Z)}try{const R={alpha:!0,depth:o,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$p}`),n.addEventListener("webglcontextlost",Ve,!1),n.addEventListener("webglcontextrestored",st,!1),n.addEventListener("webglcontextcreationerror",Ft,!1),j===null){const Z="webgl2";if(j=jt(Z,R),j===null)throw jt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ot("WebGLRenderer: "+R.message),R}let xt,Dt,je,F,E,$,V,J,ie,Ce,Me,He,Je,be,Te,Ie,Ue,Oe,tt,K,Le,De,ke;function we(){xt=new GA(j),xt.init(),Le=new Lw(j,xt),Dt=new OA(j,xt,e,Le),je=new Dw(j,xt),Dt.reversedDepthBuffer&&_&&je.buffers.depth.setReversed(!0),F=new WA(j),E=new gw,$=new Uw(j,xt,je,E,Dt,Le,F),V=new HA(N),J=new KE(j),De=new LA(j,J),ie=new VA(j,J,F,De),Ce=new jA(j,ie,J,De,F),Oe=new qA(j,Dt,$),Te=new PA(E),Me=new mw(N,V,xt,Dt,De,Te),He=new Fw(N,E),Je=new vw,be=new Ew(xt),Ue=new UA(N,V,je,Ce,b,m),Ie=new Rw(N,Ce,Dt),ke=new Bw(j,F,Dt,je),tt=new NA(j,xt,F),K=new XA(j,xt,F),F.programs=Me.programs,N.capabilities=Dt,N.extensions=xt,N.properties=E,N.renderLists=Je,N.shadowMap=Ie,N.state=je,N.info=F}we(),C!==Di&&(T=new ZA(C,n.width,n.height,o,u));const _e=new Iw(N,j);this.xr=_e,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const R=xt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=xt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(R){R!==void 0&&(L=R,this.setSize(B,Q,!1))},this.getSize=function(R){return R.set(B,Q)},this.setSize=function(R,Z,pe=!0){if(_e.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,Q=Z,n.width=Math.floor(R*L),n.height=Math.floor(Z*L),pe===!0&&(n.style.width=R+"px",n.style.height=Z+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(B*L,Q*L).floor()},this.setDrawingBufferSize=function(R,Z,pe){B=R,Q=Z,L=pe,n.width=Math.floor(R*pe),n.height=Math.floor(Z*pe),this.setViewport(0,0,R,Z)},this.setEffects=function(R){if(C===Di){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Z=0;Z<R.length;Z++)if(R[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(ae)},this.setViewport=function(R,Z,pe,fe){R.isVector4?ae.set(R.x,R.y,R.z,R.w):ae.set(R,Z,pe,fe),je.viewport(I.copy(ae).multiplyScalar(L).round())},this.getScissor=function(R){return R.copy(xe)},this.setScissor=function(R,Z,pe,fe){R.isVector4?xe.set(R.x,R.y,R.z,R.w):xe.set(R,Z,pe,fe),je.scissor(H.copy(xe).multiplyScalar(L).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(R){je.setScissorTest(Ee=R)},this.setOpaqueSort=function(R){Ae=R},this.setTransparentSort=function(R){Pe=R},this.getClearColor=function(R){return R.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,pe=!0){let fe=0;if(R){let se=!1;if(te!==null){const Ne=te.texture.format;se=M.has(Ne)}if(se){const Ne=te.texture.type,Ge=y.has(Ne),ze=Ue.getClearColor(),Ye=Ue.getClearAlpha(),Qe=ze.r,it=ze.g,ut=ze.b;Ge?(D[0]=Qe,D[1]=it,D[2]=ut,D[3]=Ye,j.clearBufferuiv(j.COLOR,0,D)):(U[0]=Qe,U[1]=it,U[2]=ut,U[3]=Ye,j.clearBufferiv(j.COLOR,0,U))}else fe|=j.COLOR_BUFFER_BIT}Z&&(fe|=j.DEPTH_BUFFER_BIT),pe&&(fe|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),fe!==0&&j.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ve,!1),n.removeEventListener("webglcontextrestored",st,!1),n.removeEventListener("webglcontextcreationerror",Ft,!1),Ue.dispose(),Je.dispose(),be.dispose(),E.dispose(),V.dispose(),Ce.dispose(),De.dispose(),ke.dispose(),Me.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",is),_e.removeEventListener("sessionend",as),Wi.stop()};function Ve(R){R.preventDefault(),vv("WebGLRenderer: Context Lost."),ce=!0}function st(){vv("WebGLRenderer: Context Restored."),ce=!1;const R=F.autoReset,Z=Ie.enabled,pe=Ie.autoUpdate,fe=Ie.needsUpdate,se=Ie.type;we(),F.autoReset=R,Ie.enabled=Z,Ie.autoUpdate=pe,Ie.needsUpdate=fe,Ie.type=se}function Ft(R){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function wt(R){const Z=R.target;Z.removeEventListener("dispose",wt),Bn(Z)}function Bn(R){Ui(R),E.remove(R)}function Ui(R){const Z=E.get(R).programs;Z!==void 0&&(Z.forEach(function(pe){Me.releaseProgram(pe)}),R.isShaderMaterial&&Me.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,pe,fe,se,Ne){Z===null&&(Z=Ct);const Ge=se.isMesh&&se.matrixWorld.determinant()<0,ze=Il(R,Z,pe,fe,se);je.setMaterial(fe,Ge);let Ye=pe.index,Qe=1;if(fe.wireframe===!0){if(Ye=ie.getWireframeAttribute(pe),Ye===void 0)return;Qe=2}const it=pe.drawRange,ut=pe.attributes.position;let Xe=it.start*Qe,ht=(it.start+it.count)*Qe;Ne!==null&&(Xe=Math.max(Xe,Ne.start*Qe),ht=Math.min(ht,(Ne.start+Ne.count)*Qe)),Ye!==null?(Xe=Math.max(Xe,0),ht=Math.min(ht,Ye.count)):ut!=null&&(Xe=Math.max(Xe,0),ht=Math.min(ht,ut.count));const tn=ht-Xe;if(tn<0||tn===1/0)return;De.setup(se,fe,ze,pe,Ye);let nn,Ut=tt;if(Ye!==null&&(nn=J.get(Ye),Ut=K,Ut.setIndex(nn)),se.isMesh)fe.wireframe===!0?(je.setLineWidth(fe.wireframeLinewidth*Zt()),Ut.setMode(j.LINES)):Ut.setMode(j.TRIANGLES);else if(se.isLine){let Mn=fe.linewidth;Mn===void 0&&(Mn=1),je.setLineWidth(Mn*Zt()),se.isLineSegments?Ut.setMode(j.LINES):se.isLineLoop?Ut.setMode(j.LINE_LOOP):Ut.setMode(j.LINE_STRIP)}else se.isPoints?Ut.setMode(j.POINTS):se.isSprite&&Ut.setMode(j.TRIANGLES);if(se.isBatchedMesh)if(se._multiDrawInstances!==null)Uc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount,se._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))Ut.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const Mn=se._multiDrawStarts,qe=se._multiDrawCounts,kn=se._multiDrawCount,ot=Ye?J.get(Ye).bytesPerElement:1,Hn=E.get(fe).currentProgram.getUniforms();for(let ai=0;ai<kn;ai++)Hn.setValue(j,"_gl_DrawID",ai),Ut.render(Mn[ai]/ot,qe[ai])}else if(se.isInstancedMesh)Ut.renderInstances(Xe,tn,se.count);else if(pe.isInstancedBufferGeometry){const Mn=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,qe=Math.min(pe.instanceCount,Mn);Ut.renderInstances(Xe,tn,qe)}else Ut.render(Xe,tn)};function go(R,Z,pe){R.transparent===!0&&R.side===La&&R.forceSinglePass===!1?(R.side=ei,R.needsUpdate=!0,Ha(R,Z,pe),R.side=Mr,R.needsUpdate=!0,Ha(R,Z,pe),R.side=La):Ha(R,Z,pe)}this.compile=function(R,Z,pe=null){pe===null&&(pe=R),G=be.get(pe),G.init(Z),z.push(G),pe.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(G.pushLight(se),se.castShadow&&G.pushShadow(se))}),R!==pe&&R.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(G.pushLight(se),se.castShadow&&G.pushShadow(se))}),G.setupLights();const fe=new Set;return R.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Ne=se.material;if(Ne)if(Array.isArray(Ne))for(let Ge=0;Ge<Ne.length;Ge++){const ze=Ne[Ge];go(ze,pe,se),fe.add(ze)}else go(Ne,pe,se),fe.add(Ne)}),G=z.pop(),fe},this.compileAsync=function(R,Z,pe=null){const fe=this.compile(R,Z,pe);return new Promise(se=>{function Ne(){if(fe.forEach(function(Ge){E.get(Ge).currentProgram.isReady()&&fe.delete(Ge)}),fe.size===0){se(R);return}setTimeout(Ne,10)}xt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let ns=null;function Nl(R){ns&&ns(R)}function is(){Wi.stop()}function as(){Wi.start()}const Wi=new Ey;Wi.setAnimationLoop(Nl),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(R){ns=R,_e.setAnimationLoop(R),R===null?Wi.stop():Wi.start()},_e.addEventListener("sessionstart",is),_e.addEventListener("sessionend",as),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ce===!0)return;const pe=_e.enabled===!0&&_e.isPresenting===!0,fe=T!==null&&(te===null||pe)&&T.begin(N,te);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(Z),Z=_e.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,Z,te),G=be.get(R,z.length),G.init(Z),z.push(G),en.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Be.setFromProjectionMatrix(en,na,Z.reversedDepth),$e=this.localClippingEnabled,Ze=Te.init(this.clippingPlanes,$e),P=Je.get(R,A.length),P.init(),A.push(P),_e.enabled===!0&&_e.isPresenting===!0){const Ge=N.xr.getDepthSensingMesh();Ge!==null&&rs(Ge,Z,-1/0,N.sortObjects)}rs(R,Z,0,N.sortObjects),P.finish(),N.sortObjects===!0&&P.sort(Ae,Pe),rt=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,rt&&Ue.addToRenderList(P,R),this.info.render.frame++,Ze===!0&&Te.beginShadows();const se=G.state.shadowsArray;if(Ie.render(se,R,Z),Ze===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(fe&&T.hasRenderPass())===!1){const Ge=P.opaque,ze=P.transmissive;if(G.setupLights(),Z.isArrayCamera){const Ye=Z.cameras;if(ze.length>0)for(let Qe=0,it=Ye.length;Qe<it;Qe++){const ut=Ye[Qe];hn(Ge,ze,R,ut)}rt&&Ue.render(R);for(let Qe=0,it=Ye.length;Qe<it;Qe++){const ut=Ye[Qe];Li(P,R,ut,ut.viewport)}}else ze.length>0&&hn(Ge,ze,R,Z),rt&&Ue.render(R),Li(P,R,Z)}te!==null&&q===0&&($.updateMultisampleRenderTarget(te),$.updateRenderTargetMipmap(te)),fe&&T.end(N),R.isScene===!0&&R.onAfterRender(N,R,Z),De.resetDefaultState(),ee=-1,X=null,z.pop(),z.length>0?(G=z[z.length-1],Ze===!0&&Te.setGlobalState(N.clippingPlanes,G.state.camera)):G=null,A.pop(),A.length>0?P=A[A.length-1]:P=null};function rs(R,Z,pe,fe){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)pe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)G.pushLight(R),R.castShadow&&G.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Be.intersectsSprite(R)){fe&&_t.setFromMatrixPosition(R.matrixWorld).applyMatrix4(en);const Ge=Ce.update(R),ze=R.material;ze.visible&&P.push(R,Ge,ze,pe,_t.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Be.intersectsObject(R))){const Ge=Ce.update(R),ze=R.material;if(fe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),_t.copy(R.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),_t.copy(Ge.boundingSphere.center)),_t.applyMatrix4(R.matrixWorld).applyMatrix4(en)),Array.isArray(ze)){const Ye=Ge.groups;for(let Qe=0,it=Ye.length;Qe<it;Qe++){const ut=Ye[Qe],Xe=ze[ut.materialIndex];Xe&&Xe.visible&&P.push(R,Ge,Xe,pe,_t.z,ut)}}else ze.visible&&P.push(R,Ge,ze,pe,_t.z,null)}}const Ne=R.children;for(let Ge=0,ze=Ne.length;Ge<ze;Ge++)rs(Ne[Ge],Z,pe,fe)}function Li(R,Z,pe,fe){const{opaque:se,transmissive:Ne,transparent:Ge}=R;G.setupLightsView(pe),Ze===!0&&Te.setGlobalState(N.clippingPlanes,pe),fe&&je.viewport(I.copy(fe)),se.length>0&&Sn(se,Z,pe),Ne.length>0&&Sn(Ne,Z,pe),Ge.length>0&&Sn(Ge,Z,pe),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function hn(R,Z,pe,fe){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(G.state.transmissionRenderTarget[fe.id]===void 0){const Xe=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");G.state.transmissionRenderTarget[fe.id]=new aa(1,1,{generateMipmaps:!0,type:Xe?za:Di,minFilter:Qr,samples:Math.max(4,Dt.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Ne=G.state.transmissionRenderTarget[fe.id],Ge=fe.viewport||I;Ne.setSize(Ge.z*N.transmissionResolutionScale,Ge.w*N.transmissionResolutionScale);const ze=N.getRenderTarget(),Ye=N.getActiveCubeFace(),Qe=N.getActiveMipmapLevel();N.setRenderTarget(Ne),N.getClearColor(ge),O=N.getClearAlpha(),O<1&&N.setClearColor(16777215,.5),N.clear(),rt&&Ue.render(pe);const it=N.toneMapping;N.toneMapping=ia;const ut=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),G.setupLightsView(fe),Ze===!0&&Te.setGlobalState(N.clippingPlanes,fe),Sn(R,pe,fe),$.updateMultisampleRenderTarget(Ne),$.updateRenderTargetMipmap(Ne),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let ht=0,tn=Z.length;ht<tn;ht++){const nn=Z[ht],{object:Ut,geometry:Mn,material:qe,group:kn}=nn;if(qe.side===La&&Ut.layers.test(fe.layers)){const ot=qe.side;qe.side=ei,qe.needsUpdate=!0,oa(Ut,pe,fe,Mn,qe,kn),qe.side=ot,qe.needsUpdate=!0,Xe=!0}}Xe===!0&&($.updateMultisampleRenderTarget(Ne),$.updateRenderTargetMipmap(Ne))}N.setRenderTarget(ze,Ye,Qe),N.setClearColor(ge,O),ut!==void 0&&(fe.viewport=ut),N.toneMapping=it}function Sn(R,Z,pe){const fe=Z.isScene===!0?Z.overrideMaterial:null;for(let se=0,Ne=R.length;se<Ne;se++){const Ge=R[se],{object:ze,geometry:Ye,group:Qe}=Ge;let it=Ge.material;it.allowOverride===!0&&fe!==null&&(it=fe),ze.layers.test(pe.layers)&&oa(ze,Z,pe,Ye,it,Qe)}}function oa(R,Z,pe,fe,se,Ne){R.onBeforeRender(N,Z,pe,fe,se,Ne),R.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),se.onBeforeRender(N,Z,pe,fe,R,Ne),se.transparent===!0&&se.side===La&&se.forceSinglePass===!1?(se.side=ei,se.needsUpdate=!0,N.renderBufferDirect(pe,Z,fe,se,R,Ne),se.side=Mr,se.needsUpdate=!0,N.renderBufferDirect(pe,Z,fe,se,R,Ne),se.side=La):N.renderBufferDirect(pe,Z,fe,se,R,Ne),R.onAfterRender(N,Z,pe,fe,se,Ne)}function Ha(R,Z,pe){Z.isScene!==!0&&(Z=Ct);const fe=E.get(R),se=G.state.lights,Ne=G.state.shadowsArray,Ge=se.state.version,ze=Me.getParameters(R,se.state,Ne,Z,pe),Ye=Me.getProgramCacheKey(ze);let Qe=fe.programs;fe.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Z.environment:null,fe.fog=Z.fog;const it=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;fe.envMap=V.get(R.envMap||fe.environment,it),fe.envMapRotation=fe.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,Qe===void 0&&(R.addEventListener("dispose",wt),Qe=new Map,fe.programs=Qe);let ut=Qe.get(Ye);if(ut!==void 0){if(fe.currentProgram===ut&&fe.lightsStateVersion===Ge)return Pl(R,ze),ut}else ze.uniforms=Me.getUniforms(R),R.onBeforeCompile(ze,N),ut=Me.acquireProgram(ze,Ye),Qe.set(Ye,ut),fe.uniforms=ze.uniforms;const Xe=fe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=Te.uniform),Pl(R,ze),fe.needsLights=_o(R),fe.lightsStateVersion=Ge,fe.needsLights&&(Xe.ambientLightColor.value=se.state.ambient,Xe.lightProbe.value=se.state.probe,Xe.directionalLights.value=se.state.directional,Xe.directionalLightShadows.value=se.state.directionalShadow,Xe.spotLights.value=se.state.spot,Xe.spotLightShadows.value=se.state.spotShadow,Xe.rectAreaLights.value=se.state.rectArea,Xe.ltc_1.value=se.state.rectAreaLTC1,Xe.ltc_2.value=se.state.rectAreaLTC2,Xe.pointLights.value=se.state.point,Xe.pointLightShadows.value=se.state.pointShadow,Xe.hemisphereLights.value=se.state.hemi,Xe.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Xe.spotLightMatrix.value=se.state.spotLightMatrix,Xe.spotLightMap.value=se.state.spotLightMap,Xe.pointShadowMatrix.value=se.state.pointShadowMatrix),fe.currentProgram=ut,fe.uniformsList=null,ut}function Ol(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Ac.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function Pl(R,Z){const pe=E.get(R);pe.outputColorSpace=Z.outputColorSpace,pe.batching=Z.batching,pe.batchingColor=Z.batchingColor,pe.instancing=Z.instancing,pe.instancingColor=Z.instancingColor,pe.instancingMorph=Z.instancingMorph,pe.skinning=Z.skinning,pe.morphTargets=Z.morphTargets,pe.morphNormals=Z.morphNormals,pe.morphColors=Z.morphColors,pe.morphTargetsCount=Z.morphTargetsCount,pe.numClippingPlanes=Z.numClippingPlanes,pe.numIntersection=Z.numClipIntersection,pe.vertexAlphas=Z.vertexAlphas,pe.vertexTangents=Z.vertexTangents,pe.toneMapping=Z.toneMapping}function Il(R,Z,pe,fe,se){Z.isScene!==!0&&(Z=Ct),$.resetTextureUnits();const Ne=Z.fog,Ge=fe.isMeshStandardMaterial||fe.isMeshLambertMaterial||fe.isMeshPhongMaterial?Z.environment:null,ze=te===null?N.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:lo,Ye=fe.isMeshStandardMaterial||fe.isMeshLambertMaterial&&!fe.envMap||fe.isMeshPhongMaterial&&!fe.envMap,Qe=V.get(fe.envMap||Ge,Ye),it=fe.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,ut=!!pe.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),Xe=!!pe.morphAttributes.position,ht=!!pe.morphAttributes.normal,tn=!!pe.morphAttributes.color;let nn=ia;fe.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(nn=N.toneMapping);const Ut=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,Mn=Ut!==void 0?Ut.length:0,qe=E.get(fe),kn=G.state.lights;if(Ze===!0&&($e===!0||R!==X)){const pn=R===X&&fe.id===ee;Te.setState(fe,R,pn)}let ot=!1;fe.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==kn.state.version||qe.outputColorSpace!==ze||se.isBatchedMesh&&qe.batching===!1||!se.isBatchedMesh&&qe.batching===!0||se.isBatchedMesh&&qe.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&qe.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&qe.instancing===!1||!se.isInstancedMesh&&qe.instancing===!0||se.isSkinnedMesh&&qe.skinning===!1||!se.isSkinnedMesh&&qe.skinning===!0||se.isInstancedMesh&&qe.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&qe.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&qe.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&qe.instancingMorph===!1&&se.morphTexture!==null||qe.envMap!==Qe||fe.fog===!0&&qe.fog!==Ne||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Te.numPlanes||qe.numIntersection!==Te.numIntersection)||qe.vertexAlphas!==it||qe.vertexTangents!==ut||qe.morphTargets!==Xe||qe.morphNormals!==ht||qe.morphColors!==tn||qe.toneMapping!==nn||qe.morphTargetsCount!==Mn)&&(ot=!0):(ot=!0,qe.__version=fe.version);let Hn=qe.currentProgram;ot===!0&&(Hn=Ha(fe,Z,se));let ai=!1,Ni=!1,ri=!1;const zt=Hn.getUniforms(),dn=qe.uniforms;if(je.useProgram(Hn.program)&&(ai=!0,Ni=!0,ri=!0),fe.id!==ee&&(ee=fe.id,Ni=!0),ai||X!==R){je.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),zt.setValue(j,"projectionMatrix",R.projectionMatrix),zt.setValue(j,"viewMatrix",R.matrixWorldInverse);const Oi=zt.map.cameraPosition;Oi!==void 0&&Oi.setValue(j,vt.setFromMatrixPosition(R.matrixWorld)),Dt.logarithmicDepthBuffer&&zt.setValue(j,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&zt.setValue(j,"isOrthographic",R.isOrthographicCamera===!0),X!==R&&(X=R,Ni=!0,ri=!0)}if(qe.needsLights&&(kn.state.directionalShadowMap.length>0&&zt.setValue(j,"directionalShadowMap",kn.state.directionalShadowMap,$),kn.state.spotShadowMap.length>0&&zt.setValue(j,"spotShadowMap",kn.state.spotShadowMap,$),kn.state.pointShadowMap.length>0&&zt.setValue(j,"pointShadowMap",kn.state.pointShadowMap,$)),se.isSkinnedMesh){zt.setOptional(j,se,"bindMatrix"),zt.setOptional(j,se,"bindMatrixInverse");const pn=se.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),zt.setValue(j,"boneTexture",pn.boneTexture,$))}se.isBatchedMesh&&(zt.setOptional(j,se,"batchingTexture"),zt.setValue(j,"batchingTexture",se._matricesTexture,$),zt.setOptional(j,se,"batchingIdTexture"),zt.setValue(j,"batchingIdTexture",se._indirectTexture,$),zt.setOptional(j,se,"batchingColorTexture"),se._colorsTexture!==null&&zt.setValue(j,"batchingColorTexture",se._colorsTexture,$));const Gn=pe.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&Oe.update(se,pe,Hn),(Ni||qe.receiveShadow!==se.receiveShadow)&&(qe.receiveShadow=se.receiveShadow,zt.setValue(j,"receiveShadow",se.receiveShadow)),(fe.isMeshStandardMaterial||fe.isMeshLambertMaterial||fe.isMeshPhongMaterial)&&fe.envMap===null&&Z.environment!==null&&(dn.envMapIntensity.value=Z.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=Hw()),Ni&&(zt.setValue(j,"toneMappingExposure",N.toneMappingExposure),qe.needsLights&&Er(dn,ri),Ne&&fe.fog===!0&&He.refreshFogUniforms(dn,Ne),He.refreshMaterialUniforms(dn,fe,L,Q,G.state.transmissionRenderTarget[R.id]),Ac.upload(j,Ol(qe),dn,$)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(Ac.upload(j,Ol(qe),dn,$),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&zt.setValue(j,"center",se.center),zt.setValue(j,"modelViewMatrix",se.modelViewMatrix),zt.setValue(j,"normalMatrix",se.normalMatrix),zt.setValue(j,"modelMatrix",se.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const pn=fe.uniformsGroups;for(let Oi=0,la=pn.length;Oi<la;Oi++){const ss=pn[Oi];ke.update(ss,Hn),ke.bind(ss,Hn)}}return Hn}function Er(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function _o(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(R,Z,pe){const fe=E.get(R);fe.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,fe.__autoAllocateDepthBuffer===!1&&(fe.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=Z,E.get(R.depthTexture).__webglTexture=fe.__autoAllocateDepthBuffer?void 0:pe,fe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const pe=E.get(R);pe.__webglFramebuffer=Z,pe.__useDefaultFramebuffer=Z===void 0};const Ga=j.createFramebuffer();this.setRenderTarget=function(R,Z=0,pe=0){te=R,k=Z,q=pe;let fe=null,se=!1,Ne=!1;if(R){const ze=E.get(R);if(ze.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(j.FRAMEBUFFER,ze.__webglFramebuffer),I.copy(R.viewport),H.copy(R.scissor),le=R.scissorTest,je.viewport(I),je.scissor(H),je.setScissorTest(le),ee=-1;return}else if(ze.__webglFramebuffer===void 0)$.setupRenderTarget(R);else if(ze.__hasExternalTextures)$.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const it=R.depthTexture;if(ze.__boundDepthTexture!==it){if(it!==null&&E.has(it)&&(R.width!==it.image.width||R.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(R)}}const Ye=R.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ne=!0);const Qe=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qe[Z])?fe=Qe[Z][pe]:fe=Qe[Z],se=!0):R.samples>0&&$.useMultisampledRTT(R)===!1?fe=E.get(R).__webglMultisampledFramebuffer:Array.isArray(Qe)?fe=Qe[pe]:fe=Qe,I.copy(R.viewport),H.copy(R.scissor),le=R.scissorTest}else I.copy(ae).multiplyScalar(L).floor(),H.copy(xe).multiplyScalar(L).floor(),le=Ee;if(pe!==0&&(fe=Ga),je.bindFramebuffer(j.FRAMEBUFFER,fe)&&je.drawBuffers(R,fe),je.viewport(I),je.scissor(H),je.setScissorTest(le),se){const ze=E.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ze.__webglTexture,pe)}else if(Ne){const ze=Z;for(let Ye=0;Ye<R.textures.length;Ye++){const Qe=E.get(R.textures[Ye]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Ye,Qe.__webglTexture,pe,ze)}}else if(R!==null&&pe!==0){const ze=E.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,ze.__webglTexture,pe)}ee=-1},this.readRenderTargetPixels=function(R,Z,pe,fe,se,Ne,Ge,ze=0){if(!(R&&R.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ye=Ye[Ge]),Ye){je.bindFramebuffer(j.FRAMEBUFFER,Ye);try{const Qe=R.textures[ze],it=Qe.format,ut=Qe.type;if(R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+ze),!Dt.textureFormatReadable(it)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(ut)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-fe&&pe>=0&&pe<=R.height-se&&j.readPixels(Z,pe,fe,se,Le.convert(it),Le.convert(ut),Ne)}finally{const Qe=te!==null?E.get(te).__webglFramebuffer:null;je.bindFramebuffer(j.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(R,Z,pe,fe,se,Ne,Ge,ze=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ye=Ye[Ge]),Ye)if(Z>=0&&Z<=R.width-fe&&pe>=0&&pe<=R.height-se){je.bindFramebuffer(j.FRAMEBUFFER,Ye);const Qe=R.textures[ze],it=Qe.format,ut=Qe.type;if(R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+ze),!Dt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Xe),j.bufferData(j.PIXEL_PACK_BUFFER,Ne.byteLength,j.STREAM_READ),j.readPixels(Z,pe,fe,se,Le.convert(it),Le.convert(ut),0);const ht=te!==null?E.get(te).__webglFramebuffer:null;je.bindFramebuffer(j.FRAMEBUFFER,ht);const tn=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await cE(j,tn,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Xe),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ne),j.deleteBuffer(Xe),j.deleteSync(tn),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,pe=0){const fe=Math.pow(2,-pe),se=Math.floor(R.image.width*fe),Ne=Math.floor(R.image.height*fe),Ge=Z!==null?Z.x:0,ze=Z!==null?Z.y:0;$.setTexture2D(R,0),j.copyTexSubImage2D(j.TEXTURE_2D,pe,0,0,Ge,ze,se,Ne),je.unbindTexture()};const Va=j.createFramebuffer(),Tr=j.createFramebuffer();this.copyTextureToTexture=function(R,Z,pe=null,fe=null,se=0,Ne=0){let Ge,ze,Ye,Qe,it,ut,Xe,ht,tn;const nn=R.isCompressedTexture?R.mipmaps[Ne]:R.image;if(pe!==null)Ge=pe.max.x-pe.min.x,ze=pe.max.y-pe.min.y,Ye=pe.isBox3?pe.max.z-pe.min.z:1,Qe=pe.min.x,it=pe.min.y,ut=pe.isBox3?pe.min.z:0;else{const dn=Math.pow(2,-se);Ge=Math.floor(nn.width*dn),ze=Math.floor(nn.height*dn),R.isDataArrayTexture?Ye=nn.depth:R.isData3DTexture?Ye=Math.floor(nn.depth*dn):Ye=1,Qe=0,it=0,ut=0}fe!==null?(Xe=fe.x,ht=fe.y,tn=fe.z):(Xe=0,ht=0,tn=0);const Ut=Le.convert(Z.format),Mn=Le.convert(Z.type);let qe;Z.isData3DTexture?($.setTexture3D(Z,0),qe=j.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?($.setTexture2DArray(Z,0),qe=j.TEXTURE_2D_ARRAY):($.setTexture2D(Z,0),qe=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Z.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,Z.unpackAlignment);const kn=j.getParameter(j.UNPACK_ROW_LENGTH),ot=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Hn=j.getParameter(j.UNPACK_SKIP_PIXELS),ai=j.getParameter(j.UNPACK_SKIP_ROWS),Ni=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,nn.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,nn.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Qe),j.pixelStorei(j.UNPACK_SKIP_ROWS,it),j.pixelStorei(j.UNPACK_SKIP_IMAGES,ut);const ri=R.isDataArrayTexture||R.isData3DTexture,zt=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const dn=E.get(R),Gn=E.get(Z),pn=E.get(dn.__renderTarget),Oi=E.get(Gn.__renderTarget);je.bindFramebuffer(j.READ_FRAMEBUFFER,pn.__webglFramebuffer),je.bindFramebuffer(j.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let la=0;la<Ye;la++)ri&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,E.get(R).__webglTexture,se,ut+la),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,E.get(Z).__webglTexture,Ne,tn+la)),j.blitFramebuffer(Qe,it,Ge,ze,Xe,ht,Ge,ze,j.DEPTH_BUFFER_BIT,j.NEAREST);je.bindFramebuffer(j.READ_FRAMEBUFFER,null),je.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(se!==0||R.isRenderTargetTexture||E.has(R)){const dn=E.get(R),Gn=E.get(Z);je.bindFramebuffer(j.READ_FRAMEBUFFER,Va),je.bindFramebuffer(j.DRAW_FRAMEBUFFER,Tr);for(let pn=0;pn<Ye;pn++)ri?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,dn.__webglTexture,se,ut+pn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,dn.__webglTexture,se),zt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Gn.__webglTexture,Ne,tn+pn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Gn.__webglTexture,Ne),se!==0?j.blitFramebuffer(Qe,it,Ge,ze,Xe,ht,Ge,ze,j.COLOR_BUFFER_BIT,j.NEAREST):zt?j.copyTexSubImage3D(qe,Ne,Xe,ht,tn+pn,Qe,it,Ge,ze):j.copyTexSubImage2D(qe,Ne,Xe,ht,Qe,it,Ge,ze);je.bindFramebuffer(j.READ_FRAMEBUFFER,null),je.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else zt?R.isDataTexture||R.isData3DTexture?j.texSubImage3D(qe,Ne,Xe,ht,tn,Ge,ze,Ye,Ut,Mn,nn.data):Z.isCompressedArrayTexture?j.compressedTexSubImage3D(qe,Ne,Xe,ht,tn,Ge,ze,Ye,Ut,nn.data):j.texSubImage3D(qe,Ne,Xe,ht,tn,Ge,ze,Ye,Ut,Mn,nn):R.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ne,Xe,ht,Ge,ze,Ut,Mn,nn.data):R.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ne,Xe,ht,nn.width,nn.height,Ut,nn.data):j.texSubImage2D(j.TEXTURE_2D,Ne,Xe,ht,Ge,ze,Ut,Mn,nn);j.pixelStorei(j.UNPACK_ROW_LENGTH,kn),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ot),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Hn),j.pixelStorei(j.UNPACK_SKIP_ROWS,ai),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Ni),Ne===0&&Z.generateMipmaps&&j.generateMipmap(qe),je.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&$.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?$.setTextureCube(R,0):R.isData3DTexture?$.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?$.setTexture2DArray(R,0):$.setTexture2D(R,0),je.unbindTexture()},this.resetState=function(){k=0,q=0,te=null,je.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Rt._getUnpackColorSpace()}}const Ua=200;function Vw(){const i=un.useRef(null);return un.useEffect(()=>{const e=i.current;if(!e)return;const n=new Gw({canvas:e,alpha:!0,antialias:!1});n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),n.setClearColor(0,0);const r=new AE,o=new wi(60,window.innerWidth/window.innerHeight,.1,1e3);o.position.z=1;const u=new Float32Array(Ua*3),c=new Float32Array(Ua),h=new Float32Array(Ua),m=new Float32Array(Ua*3),d=new Float32Array(Ua),g=new Float32Array(Ua),v=new Float32Array(Ua);for(let U=0;U<Ua;U++){u[U*3]=(Math.random()-.5)*4,u[U*3+1]=(Math.random()-.5)*3,u[U*3+2]=(Math.random()-.5)*2-1,c[U]=.3+Math.random()*.7,v[U]=.1+Math.random()*.6,h[U]=v[U];const P=Math.random()*Math.PI*2,G=5e-5+Math.random()*2e-4;m[U*3]=Math.cos(P)*G,m[U*3+1]=Math.sin(P)*G,m[U*3+2]=0,d[U]=Math.random()*Math.PI*2,g[U]=.3+Math.random()*.7}const _=new Xi;_.setAttribute("position",new _i(u,3)),_.setAttribute("aSize",new _i(c,1)),_.setAttribute("aOpacity",new _i(h,1));const x=new Vi({vertexShader:`
        attribute float aSize;
        attribute float aOpacity;
        varying float vOpacity;
        void main() {
          vOpacity = aOpacity;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (20.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        varying float vOpacity;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = smoothstep(0.5, 0.0, dist) * vOpacity;
          gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
        }
      `,transparent:!0,depthWrite:!1,blending:jd}),b=new zE(_,x);r.add(b);const C=new YE;let M;function y(){M=requestAnimationFrame(y);const U=C.getElapsedTime(),P=_.getAttribute("position"),G=_.getAttribute("aOpacity");for(let A=0;A<Ua;A++){let z=P.getX(A)+m[A*3],T=P.getY(A)+m[A*3+1];z>2.2&&(z=-2.2),z<-2.2&&(z=2.2),T>1.7&&(T=-1.7),T<-1.7&&(T=1.7),P.setX(A,z),P.setY(A,T);const N=Math.sin(U*g[A]+d[A]),ce=Math.sin(U*.15+d[A])>.97?1:0;G.setX(A,v[A]+N*.15+ce*.3)}P.needsUpdate=!0,G.needsUpdate=!0,n.render(r,o)}y();const D=()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",D),()=>{cancelAnimationFrame(M),window.removeEventListener("resize",D),n.dispose(),_.dispose(),x.dispose()}},[]),re.jsx("canvas",{ref:i,className:"starfield-canvas"})}var Dy={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ox=$r.createContext&&$r.createContext(Dy),Xw=["attr","size","title"];function Ww(i,e){if(i==null)return{};var n,r,o=qw(i,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(i,n)&&(o[n]=i[n])}return o}function qw(i,e){if(i==null)return{};var n={};for(var r in i)if({}.hasOwnProperty.call(i,r)){if(e.indexOf(r)!==-1)continue;n[r]=i[r]}return n}function Lc(){return Lc=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(i[r]=n[r])}return i},Lc.apply(null,arguments)}function lx(i,e){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),n.push.apply(n,r)}return n}function Nc(i){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?lx(Object(n),!0).forEach(function(r){jw(i,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):lx(Object(n)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(n,r))})}return i}function jw(i,e,n){return(e=Yw(e))in i?Object.defineProperty(i,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[e]=n,i}function Yw(i){var e=Zw(i,"string");return typeof e=="symbol"?e:e+""}function Zw(i,e){if(typeof i!="object"||!i)return i;var n=i[Symbol.toPrimitive];if(n!==void 0){var r=n.call(i,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Uy(i){return i&&i.map((e,n)=>$r.createElement(e.tag,Nc({key:n},e.attr),Uy(e.child)))}function Ly(i){return e=>$r.createElement(Kw,Lc({attr:Nc({},i.attr)},e),Uy(i.child))}function Kw(i){var e=n=>{var{attr:r,size:o,title:u}=i,c=Ww(i,Xw),h=o||n.size||"1em",m;return n.className&&(m=n.className),i.className&&(m=(m?m+" ":"")+i.className),$r.createElement("svg",Lc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,c,{className:m,style:Nc(Nc({color:i.color||n.color},n.style),i.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),u&&$r.createElement("title",null,u),i.children)};return ox!==void 0?$r.createElement(ox.Consumer,null,n=>e(n)):e(Dy)}function Qw(i){return Ly({attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",strokeWidth:"2",points:"9 6 15 12 9 18",transform:"matrix(-1 0 0 1 24 0)"},child:[]}]})(i)}function Jw(i){return Ly({attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",strokeWidth:"2",points:"9 6 15 12 9 18"},child:[]}]})(i)}const $w=`---
subtitle: Mulus Moscoviae
illustration: potion-angular
order: 1
mirror: copper conducts more than heat
---

# Moscow Mule

The classic copper-mug cocktail, distilled into a pocket-sized essence. Ginger fire tempered by lime — a *draught of Northern vigour* that's been keeping parties alive since 1941.

## Ingredients

- 30ml vodka
- 10ml fresh lime juice
- 10ml ginger syrup

## Preparation

1. Squeeze half a lime, measure 10ml
2. Pour vodka, lime juice, and ginger syrup into the bottle
3. Seal and shake to combine
4. Store in fridge — keeps up to 2 weeks

## Serving

Pour over ice in a tall glass or copper mug. Top with **150ml ginger beer**. Stir gently. Garnish with a lime wheel.

---

- **Potency:** Refreshing
- **Character:** Sharp, fiery, crisp
- **Best with:** Ginger beer
`,eR=`---
subtitle: Martinium Coffeum
illustration: potion-skull
order: 2
mirror: darkness is merely light unseen
---

# Espresso Martini

Dark as a moonless night, alert as its dawn. The drink that lets you be *simultaneously drunk and awake* — a paradox in a glass, invented for a supermodel who wanted something to wake her up and mess her up.

## Ingredients

- 25ml vodka
- 15ml coffee liqueur (Kahlua or similar)
- 10ml fresh espresso, cooled

## Preparation

1. Pull a shot of espresso or use strong cold brew — let it cool completely
2. Pour vodka and coffee liqueur into the bottle
3. Add the cooled espresso
4. Seal and shake to combine
5. Store in fridge — keeps about a week

## Serving

Shake very hard with ice for 15 seconds — you want a frothy top. Strain into a chilled glass. No mixer needed. Garnish with 3 coffee beans.

---

- **Potency:** Formidable (caffeine + alcohol)
- **Character:** Rich, bittersweet, bold
- **Best with:** Nothing — serve it straight
`,tR=`---
subtitle: Spiritus Caribaeus Purus
illustration: potion-mercury
order: 3
mirror: purity is complexity distilled
---

# Daiquiri

Three ingredients. No hiding. The Daiquiri is a *test of balance* — rum, lime, sugar, and nothing else. Hemingway drank doubles. You're making 50ml essences, which is arguably more refined.

## Ingredients

- 35ml white rum
- 10ml fresh lime juice
- 5ml simple syrup (1:1 sugar and water)

## Preparation

1. Squeeze half a lime, measure 10ml
2. Pour rum, lime juice, and simple syrup into the bottle
3. Seal and shake to combine
4. Store in fridge — best within 5 days

## Serving

Shake hard with ice until freezing cold. Strain into a chilled glass. For a longer drink, pour over ice and add **100ml sparkling water**. Garnish with a lime wheel.

---

- **Potency:** Clean and direct
- **Character:** Sharp, balanced, citric
- **Best with:** Ice alone or sparkling water
`,nR=`---
subtitle: Spiritus Menthae Cubensis
illustration: potion-wide
order: 4
mirror: the garden remembers what the gardener forgets
---

# Mojito

Havana's gift to the world — rum, mint, lime, and the sound of ice clinking. A *draught of green reverie* that makes any backyard feel like a Caribbean terrace. The mint syrup essence means no muddling at the party.

## Ingredients

- 30ml white rum
- 10ml fresh lime juice
- 10ml mint syrup

## Preparation

1. Make mint syrup: heat 100ml simple syrup, add a handful of fresh mint, steep 10 min off heat, strain and cool
2. Pour rum, lime juice, and mint syrup into the bottle
3. Seal and shake to combine
4. Store in fridge — keeps about a week

## Serving

Pour over crushed ice in a tall glass. Add **5–6 fresh mint leaves**. Top with **150ml soda water** and stir once. Garnish with a mint sprig and lime wheel.

---

- **Potency:** Lively
- **Character:** Cool, herbaceous, refreshing
- **Best with:** Soda water and fresh mint
`,iR=`---
subtitle: Velamen Ambrae Mellitum
illustration: potion-round
order: 5
mirror: sweetness follows sharpness as dawn follows night
---

# Amber Veil

An original essence — honey and rosemary intertwined with vodka and a bite of lemon. Warm, aromatic, golden. The kind of drink that makes people ask *what is this* and then quietly drink three more.

## Ingredients

- 25ml vodka
- 10ml rosemary honey syrup
- 10ml fresh lemon juice
- 5ml simple syrup

## Preparation

1. Make rosemary honey syrup: heat 50ml water with 50ml honey and 2 fresh rosemary sprigs, simmer 5 min, strain and cool
2. Squeeze half a lemon, measure 10ml
3. Pour vodka, rosemary honey syrup, lemon juice, and simple syrup into the bottle
4. Seal and shake to combine
5. Store in fridge — keeps about 10 days

## Serving

Shake hard with ice. Strain into a glass over fresh ice. Top with **100ml soda water** for a longer drink. Garnish with a small rosemary sprig.

---

- **Potency:** Smooth and warm
- **Character:** Floral, honeyed, herbal
- **Best with:** Soda water
`,aR=`---
subtitle: Sol Cupreum Tropicum
illustration: potion-tall
order: 6
mirror: fire within quenches fire without
---

# Copper Sun

An original tropical-heat essence — mango sweetness carried by white rum, sharpened with lime, and finished with a slow chili burn at the back of the throat. Looks innocent. Isn't.

## Ingredients

- 25ml white rum
- 15ml mango juice (or mango puree thinned with water)
- 5ml fresh lime juice
- Small pinch of chili flakes (or 2 drops hot sauce)

## Preparation

1. Pour rum and mango juice into the bottle
2. Add lime juice
3. Add chili flakes — start small, you can always add more. A tiny pinch goes a long way
4. Seal and shake hard to combine
5. Store in fridge — keeps about a week. Strain out chili flakes after 2-3 hours if you don't want it getting hotter

## Serving

Shake with ice. Pour into a glass over fresh ice. Top with **100ml pineapple juice** or **soda water**. Garnish with a lime wedge. Optional: chili salt rim.

---

- **Potency:** Sneaky heat
- **Character:** Tropical, sweet, spicy
- **Best with:** Pineapple juice or soda water
`,rR=`---
subtitle: Horti Noctis Autumnalis
illustration: potion-angular
order: 7
mirror: the apple falls when the tree decides
---

# Midnight Orchard

An original autumn essence — white rum meets apple and cinnamon, grounded with lime. Tastes like an orchard at dusk. Works absurdly well with ginger ale, which shouldn't surprise anyone.

## Ingredients

- 25ml white rum
- 15ml cloudy apple juice
- 5ml cinnamon syrup
- 5ml fresh lime juice

## Preparation

1. Make cinnamon syrup: simmer 100ml simple syrup with 2 cinnamon sticks for 10 min, strain and cool. Or use store-bought
2. Pour rum and apple juice into the bottle
3. Add cinnamon syrup and lime juice
4. Seal and shake to combine
5. Store in fridge — keeps about a week

## Serving

Pour over ice in a tall glass. Top with **120ml ginger ale** and stir gently. Garnish with a thin apple slice or a cinnamon stick.

---

- **Potency:** Mellow warmth
- **Character:** Fruity, spiced, autumnal
- **Best with:** Ginger ale
`,sR=`---
subtitle: Aculeus Holosericum Nigrum
illustration: potion-skull
order: 8
mirror: elegance is poison made beautiful
---

# Velvet Sting

An original berry-pepper essence — muddled blackberries with vodka, lime, and a crack of black pepper that lifts everything. Deep purple, slightly dangerous looking. The pepper is the secret — don't skip it.

## Ingredients

- 30ml vodka
- 4–5 fresh blackberries
- 8ml fresh lime juice
- 7ml simple syrup
- 2–3 cracks of black pepper

## Preparation

1. Muddle blackberries in a glass or jar — really crush them
2. Add vodka, lime juice, and simple syrup
3. Add freshly cracked black pepper
4. Stir well, then strain through a fine sieve into the bottle (press the pulp to get all the juice)
5. Seal and store in fridge — keeps about 5 days

## Serving

Shake hard with ice. Strain into a glass over fresh ice. Top with **80ml soda water** or **tonic water**. Garnish with a blackberry and another crack of pepper on top.

---

- **Potency:** Dark elegance
- **Character:** Berry, tart, peppery
- **Best with:** Soda water or tonic
`,oR=`---
subtitle: Aurum Submersum Tropicum
illustration: potion-round
order: 9
mirror: what sinks may yet rise
---

# Sunken Gold

An original tropical essence — passion fruit and white rum with lime and a whisper of vanilla. Deep golden colour, intensely aromatic. Tastes like a sunset you can drink.

## Ingredients

- 25ml white rum
- 15ml passion fruit juice (or scoop out 1 fresh passion fruit)
- 5ml fresh lime juice
- 5ml vanilla syrup (or simple syrup + 2 drops vanilla extract)

## Preparation

1. If using fresh passion fruit: scoop out the pulp, strain out seeds (or leave some in for texture)
2. Pour rum, passion fruit juice, lime juice, and vanilla syrup into the bottle
3. Seal and shake well to combine
4. Store in fridge — keeps about a week

## Serving

Shake hard with ice. Pour into a glass over ice. Top with **100ml soda water** or **sparkling wine** for something special. Garnish with half a passion fruit floated on top.

---

- **Potency:** Dangerously drinkable
- **Character:** Tropical, tart, aromatic
- **Best with:** Soda water or sparkling wine
`,lR=`---
subtitle: Porta Horti Viridis
illustration: potion-wide
order: 10
mirror: to rise one must first let go
---

# Garden Gate

An original green essence — cucumber and elderflower with vodka and lime. Light, crisp, absurdly refreshing. Tastes like walking through a garden on a summer morning. The kind of drink that disappears before you notice.

## Ingredients

- 25ml vodka
- 10ml elderflower cordial (St-Germain or store-bought)
- 10ml fresh lime juice
- 3–4 thin cucumber slices

## Preparation

1. Muddle cucumber slices in a glass or jar
2. Add vodka, elderflower cordial, and lime juice
3. Stir well, then strain into the bottle (press cucumber to get the juice)
4. Seal and store in fridge — keeps about a week

## Serving

Pour over ice in a tall glass. Top with **150ml tonic water** or **soda water**. Garnish with a cucumber ribbon and a sprig of fresh mint or dill.

---

- **Potency:** Gentle but persistent
- **Character:** Crisp, floral, green
- **Best with:** Tonic water
`,uR=`---
subtitle: Aestus Tenebrarum Dulcis
illustration: potion-tall
order: 11
mirror: the deep holds what the surface forgets
---

# Dark Tide

An original dessert essence — white rum meets coconut cream and espresso, finished with a dusting of cocoa. Rich, creamy, dark. Somewhere between a cocktail and a liquid dessert. Nobody will complain.

## Ingredients

- 20ml white rum
- 15ml coconut cream (thick, from a can)
- 10ml fresh espresso, cooled
- 5ml simple syrup
- Small pinch of cocoa powder

## Preparation

1. Pull a shot of espresso or use strong cold brew — let it cool
2. Stir coconut cream until smooth
3. Pour rum, cooled espresso, coconut cream, and simple syrup into the bottle
4. Add a small pinch of cocoa powder
5. Seal and shake very hard to combine — the coconut will try to separate
6. Store in fridge — shake before each use. Keeps about a week

## Serving

Shake the bottle hard. Shake with ice and strain into a chilled glass. No mixer needed. Dust a tiny bit of cocoa powder on top. Optional: drizzle of coconut cream floated on the surface.

---

- **Potency:** Decadent
- **Character:** Creamy, coffee, tropical
- **Best with:** Nothing — serve it straight
`,cR=`---
subtitle: Signum Fumi Mellitum
illustration: potion-mercury
order: 12
mirror: where there is smoke there is intention
---

# Smoke Signal

An original smoky-sweet essence — vodka with smoked paprika honey, ginger, and lime. Unusual, memorable, and guaranteed to start conversations. The paprika gives a subtle smokiness without being overpowering.

## Ingredients

- 30ml vodka
- 8ml smoked honey syrup
- 7ml fresh lime juice
- 5ml ginger syrup

## Preparation

1. Make smoked honey syrup: mix 50ml honey with 50ml warm water and 1/2 teaspoon smoked paprika, stir well, strain through a fine sieve and cool
2. Squeeze a lime, measure 7ml
3. Pour vodka, smoked honey syrup, lime juice, and ginger syrup into the bottle
4. Seal and shake to combine
5. Store in fridge — keeps about 10 days

## Serving

Shake hard with ice. Strain into a glass over fresh ice. Top with **100ml ginger beer** for a smoky mule twist, or **soda water** for a lighter drink. Garnish with a lime wheel.

---

- **Potency:** Intriguing
- **Character:** Smoky, sweet, warm
- **Best with:** Ginger beer or soda water
`;function fR(i){const e=i.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);if(!e)return{frontmatter:{},body:i};const n={};for(const r of e[1].split(`
`)){const o=r.indexOf(":");if(o===-1)continue;const u=r.slice(0,o).trim();let c=r.slice(o+1).trim();/^\d+$/.test(c)&&(c=parseInt(c,10)),n[u]=c}return{frontmatter:n,body:e[2].trim()}}function hR(){const i=Object.assign({"/content/potions/01-moscow-mule.md":$w,"/content/potions/02-espresso-martini.md":eR,"/content/potions/03-daiquiri.md":tR,"/content/potions/04-mojito.md":nR,"/content/potions/05-amber-veil.md":iR,"/content/potions/06-copper-sun.md":aR,"/content/potions/07-midnight-orchard.md":rR,"/content/potions/08-velvet-sting.md":sR,"/content/potions/09-sunken-gold.md":oR,"/content/potions/10-garden-gate.md":lR,"/content/potions/11-dark-tide.md":uR,"/content/potions/12-smoke-signal.md":cR}),e=[];for(const n of Object.values(i)){const{frontmatter:r,body:o}=fR(n),u=o.match(/^# (.+)$/m),c=u?u[1].trim():"Untitled",h=o.replace(/^# .+\n?/m,"").trim();e.push({meta:{name:c,subtitle:r.subtitle??"",illustration:r.illustration??"potion-round",order:r.order??99,mirror:r.mirror},markdown:h})}return e.sort((n,r)=>n.meta.order-r.meta.order),e}function dR(i,e){const n={};return(i[i.length-1]===""?[...i,""]:i).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const pR=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,mR=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,gR={};function ux(i,e){return(gR.jsx?mR:pR).test(i)}const _R=/[ \t\n\f\r]/g;function vR(i){return typeof i=="object"?i.type==="text"?cx(i.value):!1:cx(i)}function cx(i){return i.replace(_R,"")===""}class Ul{constructor(e,n,r){this.normal=n,this.property=e,r&&(this.space=r)}}Ul.prototype.normal={};Ul.prototype.property={};Ul.prototype.space=void 0;function Ny(i,e){const n={},r={};for(const o of i)Object.assign(n,o.property),Object.assign(r,o.normal);return new Ul(n,r,e)}function Hp(i){return i.toLowerCase()}class ii{constructor(e,n){this.attribute=n,this.property=e}}ii.prototype.attribute="";ii.prototype.booleanish=!1;ii.prototype.boolean=!1;ii.prototype.commaOrSpaceSeparated=!1;ii.prototype.commaSeparated=!1;ii.prototype.defined=!1;ii.prototype.mustUseProperty=!1;ii.prototype.number=!1;ii.prototype.overloadedBoolean=!1;ii.prototype.property="";ii.prototype.spaceSeparated=!1;ii.prototype.space=void 0;let xR=0;const pt=ts(),yn=ts(),Gp=ts(),Re=ts(),Kt=ts(),io=ts(),mi=ts();function ts(){return 2**++xR}const Vp=Object.freeze(Object.defineProperty({__proto__:null,boolean:pt,booleanish:yn,commaOrSpaceSeparated:mi,commaSeparated:io,number:Re,overloadedBoolean:Gp,spaceSeparated:Kt},Symbol.toStringTag,{value:"Module"})),Nd=Object.keys(Vp);class um extends ii{constructor(e,n,r,o){let u=-1;if(super(e,n),fx(this,"space",o),typeof r=="number")for(;++u<Nd.length;){const c=Nd[u];fx(this,Nd[u],(r&Vp[c])===Vp[c])}}}um.prototype.defined=!0;function fx(i,e,n){n&&(i[e]=n)}function po(i){const e={},n={};for(const[r,o]of Object.entries(i.properties)){const u=new um(r,i.transform(i.attributes||{},r),o,i.space);i.mustUseProperty&&i.mustUseProperty.includes(r)&&(u.mustUseProperty=!0),e[r]=u,n[Hp(r)]=r,n[Hp(u.attribute)]=r}return new Ul(e,n,i.space)}const Oy=po({properties:{ariaActiveDescendant:null,ariaAtomic:yn,ariaAutoComplete:null,ariaBusy:yn,ariaChecked:yn,ariaColCount:Re,ariaColIndex:Re,ariaColSpan:Re,ariaControls:Kt,ariaCurrent:null,ariaDescribedBy:Kt,ariaDetails:null,ariaDisabled:yn,ariaDropEffect:Kt,ariaErrorMessage:null,ariaExpanded:yn,ariaFlowTo:Kt,ariaGrabbed:yn,ariaHasPopup:null,ariaHidden:yn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Kt,ariaLevel:Re,ariaLive:null,ariaModal:yn,ariaMultiLine:yn,ariaMultiSelectable:yn,ariaOrientation:null,ariaOwns:Kt,ariaPlaceholder:null,ariaPosInSet:Re,ariaPressed:yn,ariaReadOnly:yn,ariaRelevant:null,ariaRequired:yn,ariaRoleDescription:Kt,ariaRowCount:Re,ariaRowIndex:Re,ariaRowSpan:Re,ariaSelected:yn,ariaSetSize:Re,ariaSort:null,ariaValueMax:Re,ariaValueMin:Re,ariaValueNow:Re,ariaValueText:null,role:null},transform(i,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()}});function Py(i,e){return e in i?i[e]:e}function Iy(i,e){return Py(i,e.toLowerCase())}const yR=po({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:io,acceptCharset:Kt,accessKey:Kt,action:null,allow:null,allowFullScreen:pt,allowPaymentRequest:pt,allowUserMedia:pt,alt:null,as:null,async:pt,autoCapitalize:null,autoComplete:Kt,autoFocus:pt,autoPlay:pt,blocking:Kt,capture:null,charSet:null,checked:pt,cite:null,className:Kt,cols:Re,colSpan:null,content:null,contentEditable:yn,controls:pt,controlsList:Kt,coords:Re|io,crossOrigin:null,data:null,dateTime:null,decoding:null,default:pt,defer:pt,dir:null,dirName:null,disabled:pt,download:Gp,draggable:yn,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:pt,formTarget:null,headers:Kt,height:Re,hidden:Gp,high:Re,href:null,hrefLang:null,htmlFor:Kt,httpEquiv:Kt,id:null,imageSizes:null,imageSrcSet:null,inert:pt,inputMode:null,integrity:null,is:null,isMap:pt,itemId:null,itemProp:Kt,itemRef:Kt,itemScope:pt,itemType:Kt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:pt,low:Re,manifest:null,max:null,maxLength:Re,media:null,method:null,min:null,minLength:Re,multiple:pt,muted:pt,name:null,nonce:null,noModule:pt,noValidate:pt,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:pt,optimum:Re,pattern:null,ping:Kt,placeholder:null,playsInline:pt,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:pt,referrerPolicy:null,rel:Kt,required:pt,reversed:pt,rows:Re,rowSpan:Re,sandbox:Kt,scope:null,scoped:pt,seamless:pt,selected:pt,shadowRootClonable:pt,shadowRootDelegatesFocus:pt,shadowRootMode:null,shape:null,size:Re,sizes:null,slot:null,span:Re,spellCheck:yn,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Re,step:null,style:null,tabIndex:Re,target:null,title:null,translate:null,type:null,typeMustMatch:pt,useMap:null,value:yn,width:Re,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Kt,axis:null,background:null,bgColor:null,border:Re,borderColor:null,bottomMargin:Re,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:pt,declare:pt,event:null,face:null,frame:null,frameBorder:null,hSpace:Re,leftMargin:Re,link:null,longDesc:null,lowSrc:null,marginHeight:Re,marginWidth:Re,noResize:pt,noHref:pt,noShade:pt,noWrap:pt,object:null,profile:null,prompt:null,rev:null,rightMargin:Re,rules:null,scheme:null,scrolling:yn,standby:null,summary:null,text:null,topMargin:Re,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Re,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:pt,disableRemotePlayback:pt,prefix:null,property:null,results:Re,security:null,unselectable:null},space:"html",transform:Iy}),SR=po({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:mi,accentHeight:Re,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Re,amplitude:Re,arabicForm:null,ascent:Re,attributeName:null,attributeType:null,azimuth:Re,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Re,by:null,calcMode:null,capHeight:Re,className:Kt,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Re,diffuseConstant:Re,direction:null,display:null,dur:null,divisor:Re,dominantBaseline:null,download:pt,dx:null,dy:null,edgeMode:null,editable:null,elevation:Re,enableBackground:null,end:null,event:null,exponent:Re,externalResourcesRequired:null,fill:null,fillOpacity:Re,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:io,g2:io,glyphName:io,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Re,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Re,horizOriginX:Re,horizOriginY:Re,id:null,ideographic:Re,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Re,k:Re,k1:Re,k2:Re,k3:Re,k4:Re,kernelMatrix:mi,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Re,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Re,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Re,overlineThickness:Re,paintOrder:null,panose1:null,path:null,pathLength:Re,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Kt,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Re,pointsAtY:Re,pointsAtZ:Re,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:mi,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:mi,rev:mi,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:mi,requiredFeatures:mi,requiredFonts:mi,requiredFormats:mi,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Re,specularExponent:Re,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Re,strikethroughThickness:Re,string:null,stroke:null,strokeDashArray:mi,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Re,strokeOpacity:Re,strokeWidth:null,style:null,surfaceScale:Re,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:mi,tabIndex:Re,tableValues:null,target:null,targetX:Re,targetY:Re,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:mi,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Re,underlineThickness:Re,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Re,values:null,vAlphabetic:Re,vMathematical:Re,vectorEffect:null,vHanging:Re,vIdeographic:Re,version:null,vertAdvY:Re,vertOriginX:Re,vertOriginY:Re,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Re,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Py}),zy=po({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(i,e){return"xlink:"+e.slice(5).toLowerCase()}}),Fy=po({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Iy}),By=po({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(i,e){return"xml:"+e.slice(3).toLowerCase()}}),MR={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},bR=/[A-Z]/g,hx=/-[a-z]/g,ER=/^data[-\w.:]+$/i;function TR(i,e){const n=Hp(e);let r=e,o=ii;if(n in i.normal)return i.property[i.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&ER.test(e)){if(e.charAt(4)==="-"){const u=e.slice(5).replace(hx,CR);r="data"+u.charAt(0).toUpperCase()+u.slice(1)}else{const u=e.slice(4);if(!hx.test(u)){let c=u.replace(bR,AR);c.charAt(0)!=="-"&&(c="-"+c),e="data"+c}}o=um}return new o(r,e)}function AR(i){return"-"+i.toLowerCase()}function CR(i){return i.charAt(1).toUpperCase()}const wR=Ny([Oy,yR,zy,Fy,By],"html"),cm=Ny([Oy,SR,zy,Fy,By],"svg");function RR(i){return i.join(" ").trim()}var Js={},Od,dx;function DR(){if(dx)return Od;dx=1;var i=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,e=/\n/g,n=/^\s*/,r=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,u=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,h=/^\s+|\s+$/g,m=`
`,d="/",g="*",v="",_="comment",x="declaration";function b(M,y){if(typeof M!="string")throw new TypeError("First argument must be a string");if(!M)return[];y=y||{};var D=1,U=1;function P(ee){var X=ee.match(e);X&&(D+=X.length);var I=ee.lastIndexOf(m);U=~I?ee.length-I:U+ee.length}function G(){var ee={line:D,column:U};return function(X){return X.position=new A(ee),N(),X}}function A(ee){this.start=ee,this.end={line:D,column:U},this.source=y.source}A.prototype.content=M;function z(ee){var X=new Error(y.source+":"+D+":"+U+": "+ee);if(X.reason=ee,X.filename=y.source,X.line=D,X.column=U,X.source=M,!y.silent)throw X}function T(ee){var X=ee.exec(M);if(X){var I=X[0];return P(I),M=M.slice(I.length),X}}function N(){T(n)}function ce(ee){var X;for(ee=ee||[];X=k();)X!==!1&&ee.push(X);return ee}function k(){var ee=G();if(!(d!=M.charAt(0)||g!=M.charAt(1))){for(var X=2;v!=M.charAt(X)&&(g!=M.charAt(X)||d!=M.charAt(X+1));)++X;if(X+=2,v===M.charAt(X-1))return z("End of comment missing");var I=M.slice(2,X-2);return U+=2,P(I),M=M.slice(X),U+=2,ee({type:_,comment:I})}}function q(){var ee=G(),X=T(r);if(X){if(k(),!T(o))return z("property missing ':'");var I=T(u),H=ee({type:x,property:C(X[0].replace(i,v)),value:I?C(I[0].replace(i,v)):v});return T(c),H}}function te(){var ee=[];ce(ee);for(var X;X=q();)X!==!1&&(ee.push(X),ce(ee));return ee}return N(),te()}function C(M){return M?M.replace(h,v):v}return Od=b,Od}var px;function UR(){if(px)return Js;px=1;var i=Js&&Js.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(Js,"__esModule",{value:!0}),Js.default=n;const e=i(DR());function n(r,o){let u=null;if(!r||typeof r!="string")return u;const c=(0,e.default)(r),h=typeof o=="function";return c.forEach(m=>{if(m.type!=="declaration")return;const{property:d,value:g}=m;h?o(d,g,m):g&&(u=u||{},u[d]=g)}),u}return Js}var pl={},mx;function LR(){if(mx)return pl;mx=1,Object.defineProperty(pl,"__esModule",{value:!0}),pl.camelCase=void 0;var i=/^--[a-zA-Z0-9_-]+$/,e=/-([a-z])/g,n=/^[^-]+$/,r=/^-(webkit|moz|ms|o|khtml)-/,o=/^-(ms)-/,u=function(d){return!d||n.test(d)||i.test(d)},c=function(d,g){return g.toUpperCase()},h=function(d,g){return"".concat(g,"-")},m=function(d,g){return g===void 0&&(g={}),u(d)?d:(d=d.toLowerCase(),g.reactCompat?d=d.replace(o,h):d=d.replace(r,h),d.replace(e,c))};return pl.camelCase=m,pl}var ml,gx;function NR(){if(gx)return ml;gx=1;var i=ml&&ml.__importDefault||function(o){return o&&o.__esModule?o:{default:o}},e=i(UR()),n=LR();function r(o,u){var c={};return!o||typeof o!="string"||(0,e.default)(o,function(h,m){h&&m&&(c[(0,n.camelCase)(h,u)]=m)}),c}return r.default=r,ml=r,ml}var OR=NR();const PR=Qp(OR),ky=Hy("end"),fm=Hy("start");function Hy(i){return e;function e(n){const r=n&&n.position&&n.position[i]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function IR(i){const e=fm(i),n=ky(i);if(e&&n)return{start:e,end:n}}function yl(i){return!i||typeof i!="object"?"":"position"in i||"type"in i?_x(i.position):"start"in i||"end"in i?_x(i):"line"in i||"column"in i?Xp(i):""}function Xp(i){return vx(i&&i.line)+":"+vx(i&&i.column)}function _x(i){return Xp(i&&i.start)+"-"+Xp(i&&i.end)}function vx(i){return i&&typeof i=="number"?i:1}class Fn extends Error{constructor(e,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let o="",u={},c=!1;if(n&&("line"in n&&"column"in n?u={place:n}:"start"in n&&"end"in n?u={place:n}:"type"in n?u={ancestors:[n],place:n.position}:u={...n}),typeof e=="string"?o=e:!u.cause&&e&&(c=!0,o=e.message,u.cause=e),!u.ruleId&&!u.source&&typeof r=="string"){const m=r.indexOf(":");m===-1?u.ruleId=r:(u.source=r.slice(0,m),u.ruleId=r.slice(m+1))}if(!u.place&&u.ancestors&&u.ancestors){const m=u.ancestors[u.ancestors.length-1];m&&(u.place=m.position)}const h=u.place&&"start"in u.place?u.place.start:u.place;this.ancestors=u.ancestors||void 0,this.cause=u.cause||void 0,this.column=h?h.column:void 0,this.fatal=void 0,this.file="",this.message=o,this.line=h?h.line:void 0,this.name=yl(u.place)||"1:1",this.place=u.place||void 0,this.reason=this.message,this.ruleId=u.ruleId||void 0,this.source=u.source||void 0,this.stack=c&&u.cause&&typeof u.cause.stack=="string"?u.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Fn.prototype.file="";Fn.prototype.name="";Fn.prototype.reason="";Fn.prototype.message="";Fn.prototype.stack="";Fn.prototype.column=void 0;Fn.prototype.line=void 0;Fn.prototype.ancestors=void 0;Fn.prototype.cause=void 0;Fn.prototype.fatal=void 0;Fn.prototype.place=void 0;Fn.prototype.ruleId=void 0;Fn.prototype.source=void 0;const hm={}.hasOwnProperty,zR=new Map,FR=/[A-Z]/g,BR=new Set(["table","tbody","thead","tfoot","tr"]),kR=new Set(["td","th"]),Gy="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function HR(i,e){if(!e||e.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=e.filePath||void 0;let r;if(e.development){if(typeof e.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=ZR(n,e.jsxDEV)}else{if(typeof e.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof e.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=YR(n,e.jsx,e.jsxs)}const o={Fragment:e.Fragment,ancestors:[],components:e.components||{},create:r,elementAttributeNameCase:e.elementAttributeNameCase||"react",evaluater:e.createEvaluater?e.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:e.ignoreInvalidStyle||!1,passKeys:e.passKeys!==!1,passNode:e.passNode||!1,schema:e.space==="svg"?cm:wR,stylePropertyNameCase:e.stylePropertyNameCase||"dom",tableCellAlignToStyle:e.tableCellAlignToStyle!==!1},u=Vy(o,i,void 0);return u&&typeof u!="string"?u:o.create(i,o.Fragment,{children:u||void 0},void 0)}function Vy(i,e,n){if(e.type==="element")return GR(i,e,n);if(e.type==="mdxFlowExpression"||e.type==="mdxTextExpression")return VR(i,e);if(e.type==="mdxJsxFlowElement"||e.type==="mdxJsxTextElement")return WR(i,e,n);if(e.type==="mdxjsEsm")return XR(i,e);if(e.type==="root")return qR(i,e,n);if(e.type==="text")return jR(i,e)}function GR(i,e,n){const r=i.schema;let o=r;e.tagName.toLowerCase()==="svg"&&r.space==="html"&&(o=cm,i.schema=o),i.ancestors.push(e);const u=Wy(i,e.tagName,!1),c=KR(i,e);let h=pm(i,e);return BR.has(e.tagName)&&(h=h.filter(function(m){return typeof m=="string"?!vR(m):!0})),Xy(i,c,u,e),dm(c,h),i.ancestors.pop(),i.schema=r,i.create(e,u,c,n)}function VR(i,e){if(e.data&&e.data.estree&&i.evaluater){const r=e.data.estree.body[0];return r.type,i.evaluater.evaluateExpression(r.expression)}Al(i,e.position)}function XR(i,e){if(e.data&&e.data.estree&&i.evaluater)return i.evaluater.evaluateProgram(e.data.estree);Al(i,e.position)}function WR(i,e,n){const r=i.schema;let o=r;e.name==="svg"&&r.space==="html"&&(o=cm,i.schema=o),i.ancestors.push(e);const u=e.name===null?i.Fragment:Wy(i,e.name,!0),c=QR(i,e),h=pm(i,e);return Xy(i,c,u,e),dm(c,h),i.ancestors.pop(),i.schema=r,i.create(e,u,c,n)}function qR(i,e,n){const r={};return dm(r,pm(i,e)),i.create(e,i.Fragment,r,n)}function jR(i,e){return e.value}function Xy(i,e,n,r){typeof n!="string"&&n!==i.Fragment&&i.passNode&&(e.node=r)}function dm(i,e){if(e.length>0){const n=e.length>1?e:e[0];n&&(i.children=n)}}function YR(i,e,n){return r;function r(o,u,c,h){const d=Array.isArray(c.children)?n:e;return h?d(u,c,h):d(u,c)}}function ZR(i,e){return n;function n(r,o,u,c){const h=Array.isArray(u.children),m=fm(r);return e(o,u,c,h,{columnNumber:m?m.column-1:void 0,fileName:i,lineNumber:m?m.line:void 0},void 0)}}function KR(i,e){const n={};let r,o;for(o in e.properties)if(o!=="children"&&hm.call(e.properties,o)){const u=JR(i,o,e.properties[o]);if(u){const[c,h]=u;i.tableCellAlignToStyle&&c==="align"&&typeof h=="string"&&kR.has(e.tagName)?r=h:n[c]=h}}if(r){const u=n.style||(n.style={});u[i.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function QR(i,e){const n={};for(const r of e.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&i.evaluater){const u=r.data.estree.body[0];u.type;const c=u.expression;c.type;const h=c.properties[0];h.type,Object.assign(n,i.evaluater.evaluateExpression(h.argument))}else Al(i,e.position);else{const o=r.name;let u;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&i.evaluater){const h=r.value.data.estree.body[0];h.type,u=i.evaluater.evaluateExpression(h.expression)}else Al(i,e.position);else u=r.value===null?!0:r.value;n[o]=u}return n}function pm(i,e){const n=[];let r=-1;const o=i.passKeys?new Map:zR;for(;++r<e.children.length;){const u=e.children[r];let c;if(i.passKeys){const m=u.type==="element"?u.tagName:u.type==="mdxJsxFlowElement"||u.type==="mdxJsxTextElement"?u.name:void 0;if(m){const d=o.get(m)||0;c=m+"-"+d,o.set(m,d+1)}}const h=Vy(i,u,c);h!==void 0&&n.push(h)}return n}function JR(i,e,n){const r=TR(i.schema,e);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?dR(n):RR(n)),r.property==="style"){let o=typeof n=="object"?n:$R(i,String(n));return i.stylePropertyNameCase==="css"&&(o=e2(o)),["style",o]}return[i.elementAttributeNameCase==="react"&&r.space?MR[r.property]||r.property:r.attribute,n]}}function $R(i,e){try{return PR(e,{reactCompat:!0})}catch(n){if(i.ignoreInvalidStyle)return{};const r=n,o=new Fn("Cannot parse `style` attribute",{ancestors:i.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw o.file=i.filePath||void 0,o.url=Gy+"#cannot-parse-style-attribute",o}}function Wy(i,e,n){let r;if(!n)r={type:"Literal",value:e};else if(e.includes(".")){const o=e.split(".");let u=-1,c;for(;++u<o.length;){const h=ux(o[u])?{type:"Identifier",name:o[u]}:{type:"Literal",value:o[u]};c=c?{type:"MemberExpression",object:c,property:h,computed:!!(u&&h.type==="Literal"),optional:!1}:h}r=c}else r=ux(e)&&!/^[a-z]/.test(e)?{type:"Identifier",name:e}:{type:"Literal",value:e};if(r.type==="Literal"){const o=r.value;return hm.call(i.components,o)?i.components[o]:o}if(i.evaluater)return i.evaluater.evaluateExpression(r);Al(i)}function Al(i,e){const n=new Fn("Cannot handle MDX estrees without `createEvaluater`",{ancestors:i.ancestors,place:e,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=i.filePath||void 0,n.url=Gy+"#cannot-handle-mdx-estrees-without-createevaluater",n}function e2(i){const e={};let n;for(n in i)hm.call(i,n)&&(e[t2(n)]=i[n]);return e}function t2(i){let e=i.replace(FR,n2);return e.slice(0,3)==="ms-"&&(e="-"+e),e}function n2(i){return"-"+i.toLowerCase()}const Pd={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},i2={};function a2(i,e){const n=i2,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,o=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return qy(i,r,o)}function qy(i,e,n){if(r2(i)){if("value"in i)return i.type==="html"&&!n?"":i.value;if(e&&"alt"in i&&i.alt)return i.alt;if("children"in i)return xx(i.children,e,n)}return Array.isArray(i)?xx(i,e,n):""}function xx(i,e,n){const r=[];let o=-1;for(;++o<i.length;)r[o]=qy(i[o],e,n);return r.join("")}function r2(i){return!!(i&&typeof i=="object")}const yx=document.createElement("i");function mm(i){const e="&"+i+";";yx.innerHTML=e;const n=yx.textContent;return n.charCodeAt(n.length-1)===59&&i!=="semi"||n===e?!1:n}function sa(i,e,n,r){const o=i.length;let u=0,c;if(e<0?e=-e>o?0:o+e:e=e>o?o:e,n=n>0?n:0,r.length<1e4)c=Array.from(r),c.unshift(e,n),i.splice(...c);else for(n&&i.splice(e,n);u<r.length;)c=r.slice(u,u+1e4),c.unshift(e,0),i.splice(...c),u+=1e4,e+=1e4}function Ri(i,e){return i.length>0?(sa(i,i.length,0,e),i):e}const Sx={}.hasOwnProperty;function s2(i){const e={};let n=-1;for(;++n<i.length;)o2(e,i[n]);return e}function o2(i,e){let n;for(n in e){const o=(Sx.call(i,n)?i[n]:void 0)||(i[n]={}),u=e[n];let c;if(u)for(c in u){Sx.call(o,c)||(o[c]=[]);const h=u[c];l2(o[c],Array.isArray(h)?h:h?[h]:[])}}}function l2(i,e){let n=-1;const r=[];for(;++n<e.length;)(e[n].add==="after"?i:r).push(e[n]);sa(i,0,0,r)}function jy(i,e){const n=Number.parseInt(i,e);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function ao(i){return i.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const ea=br(/[A-Za-z]/),gi=br(/[\dA-Za-z]/),u2=br(/[#-'*+\--9=?A-Z^-~]/);function Wp(i){return i!==null&&(i<32||i===127)}const qp=br(/\d/),c2=br(/[\dA-Fa-f]/),f2=br(/[!-/:-@[-`{-~]/);function at(i){return i!==null&&i<-2}function ni(i){return i!==null&&(i<0||i===32)}function It(i){return i===-2||i===-1||i===32}const h2=br(new RegExp("\\p{P}|\\p{S}","u")),d2=br(/\s/);function br(i){return e;function e(n){return n!==null&&n>-1&&i.test(String.fromCharCode(n))}}function mo(i){const e=[];let n=-1,r=0,o=0;for(;++n<i.length;){const u=i.charCodeAt(n);let c="";if(u===37&&gi(i.charCodeAt(n+1))&&gi(i.charCodeAt(n+2)))o=2;else if(u<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(u))||(c=String.fromCharCode(u));else if(u>55295&&u<57344){const h=i.charCodeAt(n+1);u<56320&&h>56319&&h<57344?(c=String.fromCharCode(u,h),o=1):c="�"}else c=String.fromCharCode(u);c&&(e.push(i.slice(r,n),encodeURIComponent(c)),r=n+o+1,c=""),o&&(n+=o,o=0)}return e.join("")+i.slice(r)}function Qt(i,e,n,r){const o=r?r-1:Number.POSITIVE_INFINITY;let u=0;return c;function c(m){return It(m)?(i.enter(n),h(m)):e(m)}function h(m){return It(m)&&u++<o?(i.consume(m),h):(i.exit(n),e(m))}}const p2={tokenize:m2};function m2(i){const e=i.attempt(this.parser.constructs.contentInitial,r,o);let n;return e;function r(h){if(h===null){i.consume(h);return}return i.enter("lineEnding"),i.consume(h),i.exit("lineEnding"),Qt(i,e,"linePrefix")}function o(h){return i.enter("paragraph"),u(h)}function u(h){const m=i.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=m),n=m,c(h)}function c(h){if(h===null){i.exit("chunkText"),i.exit("paragraph"),i.consume(h);return}return at(h)?(i.consume(h),i.exit("chunkText"),u):(i.consume(h),c)}}const g2={tokenize:_2},Mx={tokenize:v2};function _2(i){const e=this,n=[];let r=0,o,u,c;return h;function h(U){if(r<n.length){const P=n[r];return e.containerState=P[1],i.attempt(P[0].continuation,m,d)(U)}return d(U)}function m(U){if(r++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,o&&D();const P=e.events.length;let G=P,A;for(;G--;)if(e.events[G][0]==="exit"&&e.events[G][1].type==="chunkFlow"){A=e.events[G][1].end;break}y(r);let z=P;for(;z<e.events.length;)e.events[z][1].end={...A},z++;return sa(e.events,G+1,0,e.events.slice(P)),e.events.length=z,d(U)}return h(U)}function d(U){if(r===n.length){if(!o)return _(U);if(o.currentConstruct&&o.currentConstruct.concrete)return b(U);e.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return e.containerState={},i.check(Mx,g,v)(U)}function g(U){return o&&D(),y(r),_(U)}function v(U){return e.parser.lazy[e.now().line]=r!==n.length,c=e.now().offset,b(U)}function _(U){return e.containerState={},i.attempt(Mx,x,b)(U)}function x(U){return r++,n.push([e.currentConstruct,e.containerState]),_(U)}function b(U){if(U===null){o&&D(),y(0),i.consume(U);return}return o=o||e.parser.flow(e.now()),i.enter("chunkFlow",{_tokenizer:o,contentType:"flow",previous:u}),C(U)}function C(U){if(U===null){M(i.exit("chunkFlow"),!0),y(0),i.consume(U);return}return at(U)?(i.consume(U),M(i.exit("chunkFlow")),r=0,e.interrupt=void 0,h):(i.consume(U),C)}function M(U,P){const G=e.sliceStream(U);if(P&&G.push(null),U.previous=u,u&&(u.next=U),u=U,o.defineSkip(U.start),o.write(G),e.parser.lazy[U.start.line]){let A=o.events.length;for(;A--;)if(o.events[A][1].start.offset<c&&(!o.events[A][1].end||o.events[A][1].end.offset>c))return;const z=e.events.length;let T=z,N,ce;for(;T--;)if(e.events[T][0]==="exit"&&e.events[T][1].type==="chunkFlow"){if(N){ce=e.events[T][1].end;break}N=!0}for(y(r),A=z;A<e.events.length;)e.events[A][1].end={...ce},A++;sa(e.events,T+1,0,e.events.slice(z)),e.events.length=A}}function y(U){let P=n.length;for(;P-- >U;){const G=n[P];e.containerState=G[1],G[0].exit.call(e,i)}n.length=U}function D(){o.write([null]),u=void 0,o=void 0,e.containerState._closeFlow=void 0}}function v2(i,e,n){return Qt(i,i.attempt(this.parser.constructs.document,e,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function bx(i){if(i===null||ni(i)||d2(i))return 1;if(h2(i))return 2}function gm(i,e,n){const r=[];let o=-1;for(;++o<i.length;){const u=i[o].resolveAll;u&&!r.includes(u)&&(e=u(e,n),r.push(u))}return e}const jp={name:"attention",resolveAll:x2,tokenize:y2};function x2(i,e){let n=-1,r,o,u,c,h,m,d,g;for(;++n<i.length;)if(i[n][0]==="enter"&&i[n][1].type==="attentionSequence"&&i[n][1]._close){for(r=n;r--;)if(i[r][0]==="exit"&&i[r][1].type==="attentionSequence"&&i[r][1]._open&&e.sliceSerialize(i[r][1]).charCodeAt(0)===e.sliceSerialize(i[n][1]).charCodeAt(0)){if((i[r][1]._close||i[n][1]._open)&&(i[n][1].end.offset-i[n][1].start.offset)%3&&!((i[r][1].end.offset-i[r][1].start.offset+i[n][1].end.offset-i[n][1].start.offset)%3))continue;m=i[r][1].end.offset-i[r][1].start.offset>1&&i[n][1].end.offset-i[n][1].start.offset>1?2:1;const v={...i[r][1].end},_={...i[n][1].start};Ex(v,-m),Ex(_,m),c={type:m>1?"strongSequence":"emphasisSequence",start:v,end:{...i[r][1].end}},h={type:m>1?"strongSequence":"emphasisSequence",start:{...i[n][1].start},end:_},u={type:m>1?"strongText":"emphasisText",start:{...i[r][1].end},end:{...i[n][1].start}},o={type:m>1?"strong":"emphasis",start:{...c.start},end:{...h.end}},i[r][1].end={...c.start},i[n][1].start={...h.end},d=[],i[r][1].end.offset-i[r][1].start.offset&&(d=Ri(d,[["enter",i[r][1],e],["exit",i[r][1],e]])),d=Ri(d,[["enter",o,e],["enter",c,e],["exit",c,e],["enter",u,e]]),d=Ri(d,gm(e.parser.constructs.insideSpan.null,i.slice(r+1,n),e)),d=Ri(d,[["exit",u,e],["enter",h,e],["exit",h,e],["exit",o,e]]),i[n][1].end.offset-i[n][1].start.offset?(g=2,d=Ri(d,[["enter",i[n][1],e],["exit",i[n][1],e]])):g=0,sa(i,r-1,n-r+3,d),n=r+d.length-g-2;break}}for(n=-1;++n<i.length;)i[n][1].type==="attentionSequence"&&(i[n][1].type="data");return i}function y2(i,e){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,o=bx(r);let u;return c;function c(m){return u=m,i.enter("attentionSequence"),h(m)}function h(m){if(m===u)return i.consume(m),h;const d=i.exit("attentionSequence"),g=bx(m),v=!g||g===2&&o||n.includes(m),_=!o||o===2&&g||n.includes(r);return d._open=!!(u===42?v:v&&(o||!_)),d._close=!!(u===42?_:_&&(g||!v)),e(m)}}function Ex(i,e){i.column+=e,i.offset+=e,i._bufferIndex+=e}const S2={name:"autolink",tokenize:M2};function M2(i,e,n){let r=0;return o;function o(x){return i.enter("autolink"),i.enter("autolinkMarker"),i.consume(x),i.exit("autolinkMarker"),i.enter("autolinkProtocol"),u}function u(x){return ea(x)?(i.consume(x),c):x===64?n(x):d(x)}function c(x){return x===43||x===45||x===46||gi(x)?(r=1,h(x)):d(x)}function h(x){return x===58?(i.consume(x),r=0,m):(x===43||x===45||x===46||gi(x))&&r++<32?(i.consume(x),h):(r=0,d(x))}function m(x){return x===62?(i.exit("autolinkProtocol"),i.enter("autolinkMarker"),i.consume(x),i.exit("autolinkMarker"),i.exit("autolink"),e):x===null||x===32||x===60||Wp(x)?n(x):(i.consume(x),m)}function d(x){return x===64?(i.consume(x),g):u2(x)?(i.consume(x),d):n(x)}function g(x){return gi(x)?v(x):n(x)}function v(x){return x===46?(i.consume(x),r=0,g):x===62?(i.exit("autolinkProtocol").type="autolinkEmail",i.enter("autolinkMarker"),i.consume(x),i.exit("autolinkMarker"),i.exit("autolink"),e):_(x)}function _(x){if((x===45||gi(x))&&r++<63){const b=x===45?_:v;return i.consume(x),b}return n(x)}}const Hc={partial:!0,tokenize:b2};function b2(i,e,n){return r;function r(u){return It(u)?Qt(i,o,"linePrefix")(u):o(u)}function o(u){return u===null||at(u)?e(u):n(u)}}const Yy={continuation:{tokenize:T2},exit:A2,name:"blockQuote",tokenize:E2};function E2(i,e,n){const r=this;return o;function o(c){if(c===62){const h=r.containerState;return h.open||(i.enter("blockQuote",{_container:!0}),h.open=!0),i.enter("blockQuotePrefix"),i.enter("blockQuoteMarker"),i.consume(c),i.exit("blockQuoteMarker"),u}return n(c)}function u(c){return It(c)?(i.enter("blockQuotePrefixWhitespace"),i.consume(c),i.exit("blockQuotePrefixWhitespace"),i.exit("blockQuotePrefix"),e):(i.exit("blockQuotePrefix"),e(c))}}function T2(i,e,n){const r=this;return o;function o(c){return It(c)?Qt(i,u,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(c):u(c)}function u(c){return i.attempt(Yy,e,n)(c)}}function A2(i){i.exit("blockQuote")}const Zy={name:"characterEscape",tokenize:C2};function C2(i,e,n){return r;function r(u){return i.enter("characterEscape"),i.enter("escapeMarker"),i.consume(u),i.exit("escapeMarker"),o}function o(u){return f2(u)?(i.enter("characterEscapeValue"),i.consume(u),i.exit("characterEscapeValue"),i.exit("characterEscape"),e):n(u)}}const Ky={name:"characterReference",tokenize:w2};function w2(i,e,n){const r=this;let o=0,u,c;return h;function h(v){return i.enter("characterReference"),i.enter("characterReferenceMarker"),i.consume(v),i.exit("characterReferenceMarker"),m}function m(v){return v===35?(i.enter("characterReferenceMarkerNumeric"),i.consume(v),i.exit("characterReferenceMarkerNumeric"),d):(i.enter("characterReferenceValue"),u=31,c=gi,g(v))}function d(v){return v===88||v===120?(i.enter("characterReferenceMarkerHexadecimal"),i.consume(v),i.exit("characterReferenceMarkerHexadecimal"),i.enter("characterReferenceValue"),u=6,c=c2,g):(i.enter("characterReferenceValue"),u=7,c=qp,g(v))}function g(v){if(v===59&&o){const _=i.exit("characterReferenceValue");return c===gi&&!mm(r.sliceSerialize(_))?n(v):(i.enter("characterReferenceMarker"),i.consume(v),i.exit("characterReferenceMarker"),i.exit("characterReference"),e)}return c(v)&&o++<u?(i.consume(v),g):n(v)}}const Tx={partial:!0,tokenize:D2},Ax={concrete:!0,name:"codeFenced",tokenize:R2};function R2(i,e,n){const r=this,o={partial:!0,tokenize:G};let u=0,c=0,h;return m;function m(A){return d(A)}function d(A){const z=r.events[r.events.length-1];return u=z&&z[1].type==="linePrefix"?z[2].sliceSerialize(z[1],!0).length:0,h=A,i.enter("codeFenced"),i.enter("codeFencedFence"),i.enter("codeFencedFenceSequence"),g(A)}function g(A){return A===h?(c++,i.consume(A),g):c<3?n(A):(i.exit("codeFencedFenceSequence"),It(A)?Qt(i,v,"whitespace")(A):v(A))}function v(A){return A===null||at(A)?(i.exit("codeFencedFence"),r.interrupt?e(A):i.check(Tx,C,P)(A)):(i.enter("codeFencedFenceInfo"),i.enter("chunkString",{contentType:"string"}),_(A))}function _(A){return A===null||at(A)?(i.exit("chunkString"),i.exit("codeFencedFenceInfo"),v(A)):It(A)?(i.exit("chunkString"),i.exit("codeFencedFenceInfo"),Qt(i,x,"whitespace")(A)):A===96&&A===h?n(A):(i.consume(A),_)}function x(A){return A===null||at(A)?v(A):(i.enter("codeFencedFenceMeta"),i.enter("chunkString",{contentType:"string"}),b(A))}function b(A){return A===null||at(A)?(i.exit("chunkString"),i.exit("codeFencedFenceMeta"),v(A)):A===96&&A===h?n(A):(i.consume(A),b)}function C(A){return i.attempt(o,P,M)(A)}function M(A){return i.enter("lineEnding"),i.consume(A),i.exit("lineEnding"),y}function y(A){return u>0&&It(A)?Qt(i,D,"linePrefix",u+1)(A):D(A)}function D(A){return A===null||at(A)?i.check(Tx,C,P)(A):(i.enter("codeFlowValue"),U(A))}function U(A){return A===null||at(A)?(i.exit("codeFlowValue"),D(A)):(i.consume(A),U)}function P(A){return i.exit("codeFenced"),e(A)}function G(A,z,T){let N=0;return ce;function ce(X){return A.enter("lineEnding"),A.consume(X),A.exit("lineEnding"),k}function k(X){return A.enter("codeFencedFence"),It(X)?Qt(A,q,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(X):q(X)}function q(X){return X===h?(A.enter("codeFencedFenceSequence"),te(X)):T(X)}function te(X){return X===h?(N++,A.consume(X),te):N>=c?(A.exit("codeFencedFenceSequence"),It(X)?Qt(A,ee,"whitespace")(X):ee(X)):T(X)}function ee(X){return X===null||at(X)?(A.exit("codeFencedFence"),z(X)):T(X)}}}function D2(i,e,n){const r=this;return o;function o(c){return c===null?n(c):(i.enter("lineEnding"),i.consume(c),i.exit("lineEnding"),u)}function u(c){return r.parser.lazy[r.now().line]?n(c):e(c)}}const Id={name:"codeIndented",tokenize:L2},U2={partial:!0,tokenize:N2};function L2(i,e,n){const r=this;return o;function o(d){return i.enter("codeIndented"),Qt(i,u,"linePrefix",5)(d)}function u(d){const g=r.events[r.events.length-1];return g&&g[1].type==="linePrefix"&&g[2].sliceSerialize(g[1],!0).length>=4?c(d):n(d)}function c(d){return d===null?m(d):at(d)?i.attempt(U2,c,m)(d):(i.enter("codeFlowValue"),h(d))}function h(d){return d===null||at(d)?(i.exit("codeFlowValue"),c(d)):(i.consume(d),h)}function m(d){return i.exit("codeIndented"),e(d)}}function N2(i,e,n){const r=this;return o;function o(c){return r.parser.lazy[r.now().line]?n(c):at(c)?(i.enter("lineEnding"),i.consume(c),i.exit("lineEnding"),o):Qt(i,u,"linePrefix",5)(c)}function u(c){const h=r.events[r.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?e(c):at(c)?o(c):n(c)}}const O2={name:"codeText",previous:I2,resolve:P2,tokenize:z2};function P2(i){let e=i.length-4,n=3,r,o;if((i[n][1].type==="lineEnding"||i[n][1].type==="space")&&(i[e][1].type==="lineEnding"||i[e][1].type==="space")){for(r=n;++r<e;)if(i[r][1].type==="codeTextData"){i[n][1].type="codeTextPadding",i[e][1].type="codeTextPadding",n+=2,e-=2;break}}for(r=n-1,e++;++r<=e;)o===void 0?r!==e&&i[r][1].type!=="lineEnding"&&(o=r):(r===e||i[r][1].type==="lineEnding")&&(i[o][1].type="codeTextData",r!==o+2&&(i[o][1].end=i[r-1][1].end,i.splice(o+2,r-o-2),e-=r-o-2,r=o+2),o=void 0);return i}function I2(i){return i!==96||this.events[this.events.length-1][1].type==="characterEscape"}function z2(i,e,n){let r=0,o,u;return c;function c(v){return i.enter("codeText"),i.enter("codeTextSequence"),h(v)}function h(v){return v===96?(i.consume(v),r++,h):(i.exit("codeTextSequence"),m(v))}function m(v){return v===null?n(v):v===32?(i.enter("space"),i.consume(v),i.exit("space"),m):v===96?(u=i.enter("codeTextSequence"),o=0,g(v)):at(v)?(i.enter("lineEnding"),i.consume(v),i.exit("lineEnding"),m):(i.enter("codeTextData"),d(v))}function d(v){return v===null||v===32||v===96||at(v)?(i.exit("codeTextData"),m(v)):(i.consume(v),d)}function g(v){return v===96?(i.consume(v),o++,g):o===r?(i.exit("codeTextSequence"),i.exit("codeText"),e(v)):(u.type="codeTextData",d(v))}}class F2{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(e,r):e>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(e,n,r){const o=n||0;this.setCursor(Math.trunc(e));const u=this.right.splice(this.right.length-o,Number.POSITIVE_INFINITY);return r&&gl(this.left,r),u.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),gl(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),gl(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const n=this.left.splice(e,Number.POSITIVE_INFINITY);gl(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);gl(this.left,n.reverse())}}}function gl(i,e){let n=0;if(e.length<1e4)i.push(...e);else for(;n<e.length;)i.push(...e.slice(n,n+1e4)),n+=1e4}function Qy(i){const e={};let n=-1,r,o,u,c,h,m,d;const g=new F2(i);for(;++n<g.length;){for(;n in e;)n=e[n];if(r=g.get(n),n&&r[1].type==="chunkFlow"&&g.get(n-1)[1].type==="listItemPrefix"&&(m=r[1]._tokenizer.events,u=0,u<m.length&&m[u][1].type==="lineEndingBlank"&&(u+=2),u<m.length&&m[u][1].type==="content"))for(;++u<m.length&&m[u][1].type!=="content";)m[u][1].type==="chunkText"&&(m[u][1]._isInFirstContentOfListItem=!0,u++);if(r[0]==="enter")r[1].contentType&&(Object.assign(e,B2(g,n)),n=e[n],d=!0);else if(r[1]._container){for(u=n,o=void 0;u--;)if(c=g.get(u),c[1].type==="lineEnding"||c[1].type==="lineEndingBlank")c[0]==="enter"&&(o&&(g.get(o)[1].type="lineEndingBlank"),c[1].type="lineEnding",o=u);else if(!(c[1].type==="linePrefix"||c[1].type==="listItemIndent"))break;o&&(r[1].end={...g.get(o)[1].start},h=g.slice(o,n),h.unshift(r),g.splice(o,n-o+1,h))}}return sa(i,0,Number.POSITIVE_INFINITY,g.slice(0)),!d}function B2(i,e){const n=i.get(e)[1],r=i.get(e)[2];let o=e-1;const u=[];let c=n._tokenizer;c||(c=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(c._contentTypeTextTrailing=!0));const h=c.events,m=[],d={};let g,v,_=-1,x=n,b=0,C=0;const M=[C];for(;x;){for(;i.get(++o)[1]!==x;);u.push(o),x._tokenizer||(g=r.sliceStream(x),x.next||g.push(null),v&&c.defineSkip(x.start),x._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=!0),c.write(g),x._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=void 0)),v=x,x=x.next}for(x=n;++_<h.length;)h[_][0]==="exit"&&h[_-1][0]==="enter"&&h[_][1].type===h[_-1][1].type&&h[_][1].start.line!==h[_][1].end.line&&(C=_+1,M.push(C),x._tokenizer=void 0,x.previous=void 0,x=x.next);for(c.events=[],x?(x._tokenizer=void 0,x.previous=void 0):M.pop(),_=M.length;_--;){const y=h.slice(M[_],M[_+1]),D=u.pop();m.push([D,D+y.length-1]),i.splice(D,2,y)}for(m.reverse(),_=-1;++_<m.length;)d[b+m[_][0]]=b+m[_][1],b+=m[_][1]-m[_][0]-1;return d}const k2={resolve:G2,tokenize:V2},H2={partial:!0,tokenize:X2};function G2(i){return Qy(i),i}function V2(i,e){let n;return r;function r(h){return i.enter("content"),n=i.enter("chunkContent",{contentType:"content"}),o(h)}function o(h){return h===null?u(h):at(h)?i.check(H2,c,u)(h):(i.consume(h),o)}function u(h){return i.exit("chunkContent"),i.exit("content"),e(h)}function c(h){return i.consume(h),i.exit("chunkContent"),n.next=i.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,o}}function X2(i,e,n){const r=this;return o;function o(c){return i.exit("chunkContent"),i.enter("lineEnding"),i.consume(c),i.exit("lineEnding"),Qt(i,u,"linePrefix")}function u(c){if(c===null||at(c))return n(c);const h=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?e(c):i.interrupt(r.parser.constructs.flow,n,e)(c)}}function Jy(i,e,n,r,o,u,c,h,m){const d=m||Number.POSITIVE_INFINITY;let g=0;return v;function v(y){return y===60?(i.enter(r),i.enter(o),i.enter(u),i.consume(y),i.exit(u),_):y===null||y===32||y===41||Wp(y)?n(y):(i.enter(r),i.enter(c),i.enter(h),i.enter("chunkString",{contentType:"string"}),C(y))}function _(y){return y===62?(i.enter(u),i.consume(y),i.exit(u),i.exit(o),i.exit(r),e):(i.enter(h),i.enter("chunkString",{contentType:"string"}),x(y))}function x(y){return y===62?(i.exit("chunkString"),i.exit(h),_(y)):y===null||y===60||at(y)?n(y):(i.consume(y),y===92?b:x)}function b(y){return y===60||y===62||y===92?(i.consume(y),x):x(y)}function C(y){return!g&&(y===null||y===41||ni(y))?(i.exit("chunkString"),i.exit(h),i.exit(c),i.exit(r),e(y)):g<d&&y===40?(i.consume(y),g++,C):y===41?(i.consume(y),g--,C):y===null||y===32||y===40||Wp(y)?n(y):(i.consume(y),y===92?M:C)}function M(y){return y===40||y===41||y===92?(i.consume(y),C):C(y)}}function $y(i,e,n,r,o,u){const c=this;let h=0,m;return d;function d(x){return i.enter(r),i.enter(o),i.consume(x),i.exit(o),i.enter(u),g}function g(x){return h>999||x===null||x===91||x===93&&!m||x===94&&!h&&"_hiddenFootnoteSupport"in c.parser.constructs?n(x):x===93?(i.exit(u),i.enter(o),i.consume(x),i.exit(o),i.exit(r),e):at(x)?(i.enter("lineEnding"),i.consume(x),i.exit("lineEnding"),g):(i.enter("chunkString",{contentType:"string"}),v(x))}function v(x){return x===null||x===91||x===93||at(x)||h++>999?(i.exit("chunkString"),g(x)):(i.consume(x),m||(m=!It(x)),x===92?_:v)}function _(x){return x===91||x===92||x===93?(i.consume(x),h++,v):v(x)}}function eS(i,e,n,r,o,u){let c;return h;function h(_){return _===34||_===39||_===40?(i.enter(r),i.enter(o),i.consume(_),i.exit(o),c=_===40?41:_,m):n(_)}function m(_){return _===c?(i.enter(o),i.consume(_),i.exit(o),i.exit(r),e):(i.enter(u),d(_))}function d(_){return _===c?(i.exit(u),m(c)):_===null?n(_):at(_)?(i.enter("lineEnding"),i.consume(_),i.exit("lineEnding"),Qt(i,d,"linePrefix")):(i.enter("chunkString",{contentType:"string"}),g(_))}function g(_){return _===c||_===null||at(_)?(i.exit("chunkString"),d(_)):(i.consume(_),_===92?v:g)}function v(_){return _===c||_===92?(i.consume(_),g):g(_)}}function Sl(i,e){let n;return r;function r(o){return at(o)?(i.enter("lineEnding"),i.consume(o),i.exit("lineEnding"),n=!0,r):It(o)?Qt(i,r,n?"linePrefix":"lineSuffix")(o):e(o)}}const W2={name:"definition",tokenize:j2},q2={partial:!0,tokenize:Y2};function j2(i,e,n){const r=this;let o;return u;function u(x){return i.enter("definition"),c(x)}function c(x){return $y.call(r,i,h,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(x)}function h(x){return o=ao(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),x===58?(i.enter("definitionMarker"),i.consume(x),i.exit("definitionMarker"),m):n(x)}function m(x){return ni(x)?Sl(i,d)(x):d(x)}function d(x){return Jy(i,g,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(x)}function g(x){return i.attempt(q2,v,v)(x)}function v(x){return It(x)?Qt(i,_,"whitespace")(x):_(x)}function _(x){return x===null||at(x)?(i.exit("definition"),r.parser.defined.push(o),e(x)):n(x)}}function Y2(i,e,n){return r;function r(h){return ni(h)?Sl(i,o)(h):n(h)}function o(h){return eS(i,u,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(h)}function u(h){return It(h)?Qt(i,c,"whitespace")(h):c(h)}function c(h){return h===null||at(h)?e(h):n(h)}}const Z2={name:"hardBreakEscape",tokenize:K2};function K2(i,e,n){return r;function r(u){return i.enter("hardBreakEscape"),i.consume(u),o}function o(u){return at(u)?(i.exit("hardBreakEscape"),e(u)):n(u)}}const Q2={name:"headingAtx",resolve:J2,tokenize:$2};function J2(i,e){let n=i.length-2,r=3,o,u;return i[r][1].type==="whitespace"&&(r+=2),n-2>r&&i[n][1].type==="whitespace"&&(n-=2),i[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&i[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(o={type:"atxHeadingText",start:i[r][1].start,end:i[n][1].end},u={type:"chunkText",start:i[r][1].start,end:i[n][1].end,contentType:"text"},sa(i,r,n-r+1,[["enter",o,e],["enter",u,e],["exit",u,e],["exit",o,e]])),i}function $2(i,e,n){let r=0;return o;function o(g){return i.enter("atxHeading"),u(g)}function u(g){return i.enter("atxHeadingSequence"),c(g)}function c(g){return g===35&&r++<6?(i.consume(g),c):g===null||ni(g)?(i.exit("atxHeadingSequence"),h(g)):n(g)}function h(g){return g===35?(i.enter("atxHeadingSequence"),m(g)):g===null||at(g)?(i.exit("atxHeading"),e(g)):It(g)?Qt(i,h,"whitespace")(g):(i.enter("atxHeadingText"),d(g))}function m(g){return g===35?(i.consume(g),m):(i.exit("atxHeadingSequence"),h(g))}function d(g){return g===null||g===35||ni(g)?(i.exit("atxHeadingText"),h(g)):(i.consume(g),d)}}const e3=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Cx=["pre","script","style","textarea"],t3={concrete:!0,name:"htmlFlow",resolveTo:a3,tokenize:r3},n3={partial:!0,tokenize:o3},i3={partial:!0,tokenize:s3};function a3(i){let e=i.length;for(;e--&&!(i[e][0]==="enter"&&i[e][1].type==="htmlFlow"););return e>1&&i[e-2][1].type==="linePrefix"&&(i[e][1].start=i[e-2][1].start,i[e+1][1].start=i[e-2][1].start,i.splice(e-2,2)),i}function r3(i,e,n){const r=this;let o,u,c,h,m;return d;function d(L){return g(L)}function g(L){return i.enter("htmlFlow"),i.enter("htmlFlowData"),i.consume(L),v}function v(L){return L===33?(i.consume(L),_):L===47?(i.consume(L),u=!0,C):L===63?(i.consume(L),o=3,r.interrupt?e:O):ea(L)?(i.consume(L),c=String.fromCharCode(L),M):n(L)}function _(L){return L===45?(i.consume(L),o=2,x):L===91?(i.consume(L),o=5,h=0,b):ea(L)?(i.consume(L),o=4,r.interrupt?e:O):n(L)}function x(L){return L===45?(i.consume(L),r.interrupt?e:O):n(L)}function b(L){const Ae="CDATA[";return L===Ae.charCodeAt(h++)?(i.consume(L),h===Ae.length?r.interrupt?e:q:b):n(L)}function C(L){return ea(L)?(i.consume(L),c=String.fromCharCode(L),M):n(L)}function M(L){if(L===null||L===47||L===62||ni(L)){const Ae=L===47,Pe=c.toLowerCase();return!Ae&&!u&&Cx.includes(Pe)?(o=1,r.interrupt?e(L):q(L)):e3.includes(c.toLowerCase())?(o=6,Ae?(i.consume(L),y):r.interrupt?e(L):q(L)):(o=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(L):u?D(L):U(L))}return L===45||gi(L)?(i.consume(L),c+=String.fromCharCode(L),M):n(L)}function y(L){return L===62?(i.consume(L),r.interrupt?e:q):n(L)}function D(L){return It(L)?(i.consume(L),D):ce(L)}function U(L){return L===47?(i.consume(L),ce):L===58||L===95||ea(L)?(i.consume(L),P):It(L)?(i.consume(L),U):ce(L)}function P(L){return L===45||L===46||L===58||L===95||gi(L)?(i.consume(L),P):G(L)}function G(L){return L===61?(i.consume(L),A):It(L)?(i.consume(L),G):U(L)}function A(L){return L===null||L===60||L===61||L===62||L===96?n(L):L===34||L===39?(i.consume(L),m=L,z):It(L)?(i.consume(L),A):T(L)}function z(L){return L===m?(i.consume(L),m=null,N):L===null||at(L)?n(L):(i.consume(L),z)}function T(L){return L===null||L===34||L===39||L===47||L===60||L===61||L===62||L===96||ni(L)?G(L):(i.consume(L),T)}function N(L){return L===47||L===62||It(L)?U(L):n(L)}function ce(L){return L===62?(i.consume(L),k):n(L)}function k(L){return L===null||at(L)?q(L):It(L)?(i.consume(L),k):n(L)}function q(L){return L===45&&o===2?(i.consume(L),I):L===60&&o===1?(i.consume(L),H):L===62&&o===4?(i.consume(L),B):L===63&&o===3?(i.consume(L),O):L===93&&o===5?(i.consume(L),ge):at(L)&&(o===6||o===7)?(i.exit("htmlFlowData"),i.check(n3,Q,te)(L)):L===null||at(L)?(i.exit("htmlFlowData"),te(L)):(i.consume(L),q)}function te(L){return i.check(i3,ee,Q)(L)}function ee(L){return i.enter("lineEnding"),i.consume(L),i.exit("lineEnding"),X}function X(L){return L===null||at(L)?te(L):(i.enter("htmlFlowData"),q(L))}function I(L){return L===45?(i.consume(L),O):q(L)}function H(L){return L===47?(i.consume(L),c="",le):q(L)}function le(L){if(L===62){const Ae=c.toLowerCase();return Cx.includes(Ae)?(i.consume(L),B):q(L)}return ea(L)&&c.length<8?(i.consume(L),c+=String.fromCharCode(L),le):q(L)}function ge(L){return L===93?(i.consume(L),O):q(L)}function O(L){return L===62?(i.consume(L),B):L===45&&o===2?(i.consume(L),O):q(L)}function B(L){return L===null||at(L)?(i.exit("htmlFlowData"),Q(L)):(i.consume(L),B)}function Q(L){return i.exit("htmlFlow"),e(L)}}function s3(i,e,n){const r=this;return o;function o(c){return at(c)?(i.enter("lineEnding"),i.consume(c),i.exit("lineEnding"),u):n(c)}function u(c){return r.parser.lazy[r.now().line]?n(c):e(c)}}function o3(i,e,n){return r;function r(o){return i.enter("lineEnding"),i.consume(o),i.exit("lineEnding"),i.attempt(Hc,e,n)}}const l3={name:"htmlText",tokenize:u3};function u3(i,e,n){const r=this;let o,u,c;return h;function h(O){return i.enter("htmlText"),i.enter("htmlTextData"),i.consume(O),m}function m(O){return O===33?(i.consume(O),d):O===47?(i.consume(O),G):O===63?(i.consume(O),U):ea(O)?(i.consume(O),T):n(O)}function d(O){return O===45?(i.consume(O),g):O===91?(i.consume(O),u=0,b):ea(O)?(i.consume(O),D):n(O)}function g(O){return O===45?(i.consume(O),x):n(O)}function v(O){return O===null?n(O):O===45?(i.consume(O),_):at(O)?(c=v,H(O)):(i.consume(O),v)}function _(O){return O===45?(i.consume(O),x):v(O)}function x(O){return O===62?I(O):O===45?_(O):v(O)}function b(O){const B="CDATA[";return O===B.charCodeAt(u++)?(i.consume(O),u===B.length?C:b):n(O)}function C(O){return O===null?n(O):O===93?(i.consume(O),M):at(O)?(c=C,H(O)):(i.consume(O),C)}function M(O){return O===93?(i.consume(O),y):C(O)}function y(O){return O===62?I(O):O===93?(i.consume(O),y):C(O)}function D(O){return O===null||O===62?I(O):at(O)?(c=D,H(O)):(i.consume(O),D)}function U(O){return O===null?n(O):O===63?(i.consume(O),P):at(O)?(c=U,H(O)):(i.consume(O),U)}function P(O){return O===62?I(O):U(O)}function G(O){return ea(O)?(i.consume(O),A):n(O)}function A(O){return O===45||gi(O)?(i.consume(O),A):z(O)}function z(O){return at(O)?(c=z,H(O)):It(O)?(i.consume(O),z):I(O)}function T(O){return O===45||gi(O)?(i.consume(O),T):O===47||O===62||ni(O)?N(O):n(O)}function N(O){return O===47?(i.consume(O),I):O===58||O===95||ea(O)?(i.consume(O),ce):at(O)?(c=N,H(O)):It(O)?(i.consume(O),N):I(O)}function ce(O){return O===45||O===46||O===58||O===95||gi(O)?(i.consume(O),ce):k(O)}function k(O){return O===61?(i.consume(O),q):at(O)?(c=k,H(O)):It(O)?(i.consume(O),k):N(O)}function q(O){return O===null||O===60||O===61||O===62||O===96?n(O):O===34||O===39?(i.consume(O),o=O,te):at(O)?(c=q,H(O)):It(O)?(i.consume(O),q):(i.consume(O),ee)}function te(O){return O===o?(i.consume(O),o=void 0,X):O===null?n(O):at(O)?(c=te,H(O)):(i.consume(O),te)}function ee(O){return O===null||O===34||O===39||O===60||O===61||O===96?n(O):O===47||O===62||ni(O)?N(O):(i.consume(O),ee)}function X(O){return O===47||O===62||ni(O)?N(O):n(O)}function I(O){return O===62?(i.consume(O),i.exit("htmlTextData"),i.exit("htmlText"),e):n(O)}function H(O){return i.exit("htmlTextData"),i.enter("lineEnding"),i.consume(O),i.exit("lineEnding"),le}function le(O){return It(O)?Qt(i,ge,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(O):ge(O)}function ge(O){return i.enter("htmlTextData"),c(O)}}const _m={name:"labelEnd",resolveAll:d3,resolveTo:p3,tokenize:m3},c3={tokenize:g3},f3={tokenize:_3},h3={tokenize:v3};function d3(i){let e=-1;const n=[];for(;++e<i.length;){const r=i[e][1];if(n.push(i[e]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const o=r.type==="labelImage"?4:2;r.type="data",e+=o}}return i.length!==n.length&&sa(i,0,i.length,n),i}function p3(i,e){let n=i.length,r=0,o,u,c,h;for(;n--;)if(o=i[n][1],u){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;i[n][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(c){if(i[n][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(u=n,o.type!=="labelLink")){r=2;break}}else o.type==="labelEnd"&&(c=n);const m={type:i[u][1].type==="labelLink"?"link":"image",start:{...i[u][1].start},end:{...i[i.length-1][1].end}},d={type:"label",start:{...i[u][1].start},end:{...i[c][1].end}},g={type:"labelText",start:{...i[u+r+2][1].end},end:{...i[c-2][1].start}};return h=[["enter",m,e],["enter",d,e]],h=Ri(h,i.slice(u+1,u+r+3)),h=Ri(h,[["enter",g,e]]),h=Ri(h,gm(e.parser.constructs.insideSpan.null,i.slice(u+r+4,c-3),e)),h=Ri(h,[["exit",g,e],i[c-2],i[c-1],["exit",d,e]]),h=Ri(h,i.slice(c+1)),h=Ri(h,[["exit",m,e]]),sa(i,u,i.length,h),i}function m3(i,e,n){const r=this;let o=r.events.length,u,c;for(;o--;)if((r.events[o][1].type==="labelImage"||r.events[o][1].type==="labelLink")&&!r.events[o][1]._balanced){u=r.events[o][1];break}return h;function h(_){return u?u._inactive?v(_):(c=r.parser.defined.includes(ao(r.sliceSerialize({start:u.end,end:r.now()}))),i.enter("labelEnd"),i.enter("labelMarker"),i.consume(_),i.exit("labelMarker"),i.exit("labelEnd"),m):n(_)}function m(_){return _===40?i.attempt(c3,g,c?g:v)(_):_===91?i.attempt(f3,g,c?d:v)(_):c?g(_):v(_)}function d(_){return i.attempt(h3,g,v)(_)}function g(_){return e(_)}function v(_){return u._balanced=!0,n(_)}}function g3(i,e,n){return r;function r(v){return i.enter("resource"),i.enter("resourceMarker"),i.consume(v),i.exit("resourceMarker"),o}function o(v){return ni(v)?Sl(i,u)(v):u(v)}function u(v){return v===41?g(v):Jy(i,c,h,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(v)}function c(v){return ni(v)?Sl(i,m)(v):g(v)}function h(v){return n(v)}function m(v){return v===34||v===39||v===40?eS(i,d,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(v):g(v)}function d(v){return ni(v)?Sl(i,g)(v):g(v)}function g(v){return v===41?(i.enter("resourceMarker"),i.consume(v),i.exit("resourceMarker"),i.exit("resource"),e):n(v)}}function _3(i,e,n){const r=this;return o;function o(h){return $y.call(r,i,u,c,"reference","referenceMarker","referenceString")(h)}function u(h){return r.parser.defined.includes(ao(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?e(h):n(h)}function c(h){return n(h)}}function v3(i,e,n){return r;function r(u){return i.enter("reference"),i.enter("referenceMarker"),i.consume(u),i.exit("referenceMarker"),o}function o(u){return u===93?(i.enter("referenceMarker"),i.consume(u),i.exit("referenceMarker"),i.exit("reference"),e):n(u)}}const x3={name:"labelStartImage",resolveAll:_m.resolveAll,tokenize:y3};function y3(i,e,n){const r=this;return o;function o(h){return i.enter("labelImage"),i.enter("labelImageMarker"),i.consume(h),i.exit("labelImageMarker"),u}function u(h){return h===91?(i.enter("labelMarker"),i.consume(h),i.exit("labelMarker"),i.exit("labelImage"),c):n(h)}function c(h){return h===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(h):e(h)}}const S3={name:"labelStartLink",resolveAll:_m.resolveAll,tokenize:M3};function M3(i,e,n){const r=this;return o;function o(c){return i.enter("labelLink"),i.enter("labelMarker"),i.consume(c),i.exit("labelMarker"),i.exit("labelLink"),u}function u(c){return c===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(c):e(c)}}const zd={name:"lineEnding",tokenize:b3};function b3(i,e){return n;function n(r){return i.enter("lineEnding"),i.consume(r),i.exit("lineEnding"),Qt(i,e,"linePrefix")}}const Cc={name:"thematicBreak",tokenize:E3};function E3(i,e,n){let r=0,o;return u;function u(d){return i.enter("thematicBreak"),c(d)}function c(d){return o=d,h(d)}function h(d){return d===o?(i.enter("thematicBreakSequence"),m(d)):r>=3&&(d===null||at(d))?(i.exit("thematicBreak"),e(d)):n(d)}function m(d){return d===o?(i.consume(d),r++,m):(i.exit("thematicBreakSequence"),It(d)?Qt(i,h,"whitespace")(d):h(d))}}const $n={continuation:{tokenize:w3},exit:D3,name:"list",tokenize:C3},T3={partial:!0,tokenize:U3},A3={partial:!0,tokenize:R3};function C3(i,e,n){const r=this,o=r.events[r.events.length-1];let u=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,c=0;return h;function h(x){const b=r.containerState.type||(x===42||x===43||x===45?"listUnordered":"listOrdered");if(b==="listUnordered"?!r.containerState.marker||x===r.containerState.marker:qp(x)){if(r.containerState.type||(r.containerState.type=b,i.enter(b,{_container:!0})),b==="listUnordered")return i.enter("listItemPrefix"),x===42||x===45?i.check(Cc,n,d)(x):d(x);if(!r.interrupt||x===49)return i.enter("listItemPrefix"),i.enter("listItemValue"),m(x)}return n(x)}function m(x){return qp(x)&&++c<10?(i.consume(x),m):(!r.interrupt||c<2)&&(r.containerState.marker?x===r.containerState.marker:x===41||x===46)?(i.exit("listItemValue"),d(x)):n(x)}function d(x){return i.enter("listItemMarker"),i.consume(x),i.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||x,i.check(Hc,r.interrupt?n:g,i.attempt(T3,_,v))}function g(x){return r.containerState.initialBlankLine=!0,u++,_(x)}function v(x){return It(x)?(i.enter("listItemPrefixWhitespace"),i.consume(x),i.exit("listItemPrefixWhitespace"),_):n(x)}function _(x){return r.containerState.size=u+r.sliceSerialize(i.exit("listItemPrefix"),!0).length,e(x)}}function w3(i,e,n){const r=this;return r.containerState._closeFlow=void 0,i.check(Hc,o,u);function o(h){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Qt(i,e,"listItemIndent",r.containerState.size+1)(h)}function u(h){return r.containerState.furtherBlankLines||!It(h)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,c(h)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,i.attempt(A3,e,c)(h))}function c(h){return r.containerState._closeFlow=!0,r.interrupt=void 0,Qt(i,i.attempt($n,e,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h)}}function R3(i,e,n){const r=this;return Qt(i,o,"listItemIndent",r.containerState.size+1);function o(u){const c=r.events[r.events.length-1];return c&&c[1].type==="listItemIndent"&&c[2].sliceSerialize(c[1],!0).length===r.containerState.size?e(u):n(u)}}function D3(i){i.exit(this.containerState.type)}function U3(i,e,n){const r=this;return Qt(i,o,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function o(u){const c=r.events[r.events.length-1];return!It(u)&&c&&c[1].type==="listItemPrefixWhitespace"?e(u):n(u)}}const wx={name:"setextUnderline",resolveTo:L3,tokenize:N3};function L3(i,e){let n=i.length,r,o,u;for(;n--;)if(i[n][0]==="enter"){if(i[n][1].type==="content"){r=n;break}i[n][1].type==="paragraph"&&(o=n)}else i[n][1].type==="content"&&i.splice(n,1),!u&&i[n][1].type==="definition"&&(u=n);const c={type:"setextHeading",start:{...i[r][1].start},end:{...i[i.length-1][1].end}};return i[o][1].type="setextHeadingText",u?(i.splice(o,0,["enter",c,e]),i.splice(u+1,0,["exit",i[r][1],e]),i[r][1].end={...i[u][1].end}):i[r][1]=c,i.push(["exit",c,e]),i}function N3(i,e,n){const r=this;let o;return u;function u(d){let g=r.events.length,v;for(;g--;)if(r.events[g][1].type!=="lineEnding"&&r.events[g][1].type!=="linePrefix"&&r.events[g][1].type!=="content"){v=r.events[g][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||v)?(i.enter("setextHeadingLine"),o=d,c(d)):n(d)}function c(d){return i.enter("setextHeadingLineSequence"),h(d)}function h(d){return d===o?(i.consume(d),h):(i.exit("setextHeadingLineSequence"),It(d)?Qt(i,m,"lineSuffix")(d):m(d))}function m(d){return d===null||at(d)?(i.exit("setextHeadingLine"),e(d)):n(d)}}const O3={tokenize:P3};function P3(i){const e=this,n=i.attempt(Hc,r,i.attempt(this.parser.constructs.flowInitial,o,Qt(i,i.attempt(this.parser.constructs.flow,o,i.attempt(k2,o)),"linePrefix")));return n;function r(u){if(u===null){i.consume(u);return}return i.enter("lineEndingBlank"),i.consume(u),i.exit("lineEndingBlank"),e.currentConstruct=void 0,n}function o(u){if(u===null){i.consume(u);return}return i.enter("lineEnding"),i.consume(u),i.exit("lineEnding"),e.currentConstruct=void 0,n}}const I3={resolveAll:nS()},z3=tS("string"),F3=tS("text");function tS(i){return{resolveAll:nS(i==="text"?B3:void 0),tokenize:e};function e(n){const r=this,o=this.parser.constructs[i],u=n.attempt(o,c,h);return c;function c(g){return d(g)?u(g):h(g)}function h(g){if(g===null){n.consume(g);return}return n.enter("data"),n.consume(g),m}function m(g){return d(g)?(n.exit("data"),u(g)):(n.consume(g),m)}function d(g){if(g===null)return!0;const v=o[g];let _=-1;if(v)for(;++_<v.length;){const x=v[_];if(!x.previous||x.previous.call(r,r.previous))return!0}return!1}}}function nS(i){return e;function e(n,r){let o=-1,u;for(;++o<=n.length;)u===void 0?n[o]&&n[o][1].type==="data"&&(u=o,o++):(!n[o]||n[o][1].type!=="data")&&(o!==u+2&&(n[u][1].end=n[o-1][1].end,n.splice(u+2,o-u-2),o=u+2),u=void 0);return i?i(n,r):n}}function B3(i,e){let n=0;for(;++n<=i.length;)if((n===i.length||i[n][1].type==="lineEnding")&&i[n-1][1].type==="data"){const r=i[n-1][1],o=e.sliceStream(r);let u=o.length,c=-1,h=0,m;for(;u--;){const d=o[u];if(typeof d=="string"){for(c=d.length;d.charCodeAt(c-1)===32;)h++,c--;if(c)break;c=-1}else if(d===-2)m=!0,h++;else if(d!==-1){u++;break}}if(e._contentTypeTextTrailing&&n===i.length&&(h=0),h){const d={type:n===i.length||m||h<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:u?c:r.start._bufferIndex+c,_index:r.start._index+u,line:r.end.line,column:r.end.column-h,offset:r.end.offset-h},end:{...r.end}};r.end={...d.start},r.start.offset===r.end.offset?Object.assign(r,d):(i.splice(n,0,["enter",d,e],["exit",d,e]),n+=2)}n++}return i}const k3={42:$n,43:$n,45:$n,48:$n,49:$n,50:$n,51:$n,52:$n,53:$n,54:$n,55:$n,56:$n,57:$n,62:Yy},H3={91:W2},G3={[-2]:Id,[-1]:Id,32:Id},V3={35:Q2,42:Cc,45:[wx,Cc],60:t3,61:wx,95:Cc,96:Ax,126:Ax},X3={38:Ky,92:Zy},W3={[-5]:zd,[-4]:zd,[-3]:zd,33:x3,38:Ky,42:jp,60:[S2,l3],91:S3,92:[Z2,Zy],93:_m,95:jp,96:O2},q3={null:[jp,I3]},j3={null:[42,95]},Y3={null:[]},Z3=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:j3,contentInitial:H3,disable:Y3,document:k3,flow:V3,flowInitial:G3,insideSpan:q3,string:X3,text:W3},Symbol.toStringTag,{value:"Module"}));function K3(i,e,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const o={},u=[];let c=[],h=[];const m={attempt:z(G),check:z(A),consume:D,enter:U,exit:P,interrupt:z(A,{interrupt:!0})},d={code:null,containerState:{},defineSkip:C,events:[],now:b,parser:i,previous:null,sliceSerialize:_,sliceStream:x,write:v};let g=e.tokenize.call(d,m);return e.resolveAll&&u.push(e),d;function v(k){return c=Ri(c,k),M(),c[c.length-1]!==null?[]:(T(e,0),d.events=gm(u,d.events,d),d.events)}function _(k,q){return J3(x(k),q)}function x(k){return Q3(c,k)}function b(){const{_bufferIndex:k,_index:q,line:te,column:ee,offset:X}=r;return{_bufferIndex:k,_index:q,line:te,column:ee,offset:X}}function C(k){o[k.line]=k.column,ce()}function M(){let k;for(;r._index<c.length;){const q=c[r._index];if(typeof q=="string")for(k=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===k&&r._bufferIndex<q.length;)y(q.charCodeAt(r._bufferIndex));else y(q)}}function y(k){g=g(k)}function D(k){at(k)?(r.line++,r.column=1,r.offset+=k===-3?2:1,ce()):k!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===c[r._index].length&&(r._bufferIndex=-1,r._index++)),d.previous=k}function U(k,q){const te=q||{};return te.type=k,te.start=b(),d.events.push(["enter",te,d]),h.push(te),te}function P(k){const q=h.pop();return q.end=b(),d.events.push(["exit",q,d]),q}function G(k,q){T(k,q.from)}function A(k,q){q.restore()}function z(k,q){return te;function te(ee,X,I){let H,le,ge,O;return Array.isArray(ee)?Q(ee):"tokenize"in ee?Q([ee]):B(ee);function B(ae){return xe;function xe(Ee){const Be=Ee!==null&&ae[Ee],Ze=Ee!==null&&ae.null,$e=[...Array.isArray(Be)?Be:Be?[Be]:[],...Array.isArray(Ze)?Ze:Ze?[Ze]:[]];return Q($e)(Ee)}}function Q(ae){return H=ae,le=0,ae.length===0?I:L(ae[le])}function L(ae){return xe;function xe(Ee){return O=N(),ge=ae,ae.partial||(d.currentConstruct=ae),ae.name&&d.parser.constructs.disable.null.includes(ae.name)?Pe():ae.tokenize.call(q?Object.assign(Object.create(d),q):d,m,Ae,Pe)(Ee)}}function Ae(ae){return k(ge,O),X}function Pe(ae){return O.restore(),++le<H.length?L(H[le]):I}}}function T(k,q){k.resolveAll&&!u.includes(k)&&u.push(k),k.resolve&&sa(d.events,q,d.events.length-q,k.resolve(d.events.slice(q),d)),k.resolveTo&&(d.events=k.resolveTo(d.events,d))}function N(){const k=b(),q=d.previous,te=d.currentConstruct,ee=d.events.length,X=Array.from(h);return{from:ee,restore:I};function I(){r=k,d.previous=q,d.currentConstruct=te,d.events.length=ee,h=X,ce()}}function ce(){r.line in o&&r.column<2&&(r.column=o[r.line],r.offset+=o[r.line]-1)}}function Q3(i,e){const n=e.start._index,r=e.start._bufferIndex,o=e.end._index,u=e.end._bufferIndex;let c;if(n===o)c=[i[n].slice(r,u)];else{if(c=i.slice(n,o),r>-1){const h=c[0];typeof h=="string"?c[0]=h.slice(r):c.shift()}u>0&&c.push(i[o].slice(0,u))}return c}function J3(i,e){let n=-1;const r=[];let o;for(;++n<i.length;){const u=i[n];let c;if(typeof u=="string")c=u;else switch(u){case-5:{c="\r";break}case-4:{c=`
`;break}case-3:{c=`\r
`;break}case-2:{c=e?" ":"	";break}case-1:{if(!e&&o)continue;c=" ";break}default:c=String.fromCharCode(u)}o=u===-2,r.push(c)}return r.join("")}function $3(i){const r={constructs:s2([Z3,...(i||{}).extensions||[]]),content:o(p2),defined:[],document:o(g2),flow:o(O3),lazy:{},string:o(z3),text:o(F3)};return r;function o(u){return c;function c(h){return K3(r,u,h)}}}function eD(i){for(;!Qy(i););return i}const Rx=/[\0\t\n\r]/g;function tD(){let i=1,e="",n=!0,r;return o;function o(u,c,h){const m=[];let d,g,v,_,x;for(u=e+(typeof u=="string"?u.toString():new TextDecoder(c||void 0).decode(u)),v=0,e="",n&&(u.charCodeAt(0)===65279&&v++,n=void 0);v<u.length;){if(Rx.lastIndex=v,d=Rx.exec(u),_=d&&d.index!==void 0?d.index:u.length,x=u.charCodeAt(_),!d){e=u.slice(v);break}if(x===10&&v===_&&r)m.push(-3),r=void 0;else switch(r&&(m.push(-5),r=void 0),v<_&&(m.push(u.slice(v,_)),i+=_-v),x){case 0:{m.push(65533),i++;break}case 9:{for(g=Math.ceil(i/4)*4,m.push(-2);i++<g;)m.push(-1);break}case 10:{m.push(-4),i=1;break}default:r=!0,i=1}v=_+1}return h&&(r&&m.push(-5),e&&m.push(e),m.push(null)),m}}const nD=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function iD(i){return i.replace(nD,aD)}function aD(i,e,n){if(e)return e;if(n.charCodeAt(0)===35){const o=n.charCodeAt(1),u=o===120||o===88;return jy(n.slice(u?2:1),u?16:10)}return mm(n)||i}const iS={}.hasOwnProperty;function rD(i,e,n){return e&&typeof e=="object"&&(n=e,e=void 0),sD(n)(eD($3(n).document().write(tD()(i,e,!0))))}function sD(i){const e={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:u(jt),autolinkProtocol:N,autolinkEmail:N,atxHeading:u(Ct),blockQuote:u(Ze),characterEscape:N,characterReference:N,codeFenced:u($e),codeFencedFenceInfo:c,codeFencedFenceMeta:c,codeIndented:u($e,c),codeText:u(en,c),codeTextData:N,data:N,codeFlowValue:N,definition:u(vt),definitionDestinationString:c,definitionLabelString:c,definitionTitleString:c,emphasis:u(_t),hardBreakEscape:u(rt),hardBreakTrailing:u(rt),htmlFlow:u(Zt,c),htmlFlowData:N,htmlText:u(Zt,c),htmlTextData:N,image:u(j),label:c,link:u(jt),listItem:u(Dt),listItemValue:_,listOrdered:u(xt,v),listUnordered:u(xt),paragraph:u(je),reference:L,referenceString:c,resourceDestinationString:c,resourceTitleString:c,setextHeading:u(Ct),strong:u(F),thematicBreak:u($)},exit:{atxHeading:m(),atxHeadingSequence:G,autolink:m(),autolinkEmail:Be,autolinkProtocol:Ee,blockQuote:m(),characterEscapeValue:ce,characterReferenceMarkerHexadecimal:Pe,characterReferenceMarkerNumeric:Pe,characterReferenceValue:ae,characterReference:xe,codeFenced:m(M),codeFencedFence:C,codeFencedFenceInfo:x,codeFencedFenceMeta:b,codeFlowValue:ce,codeIndented:m(y),codeText:m(X),codeTextData:ce,data:ce,definition:m(),definitionDestinationString:P,definitionLabelString:D,definitionTitleString:U,emphasis:m(),hardBreakEscape:m(q),hardBreakTrailing:m(q),htmlFlow:m(te),htmlFlowData:ce,htmlText:m(ee),htmlTextData:ce,image:m(H),label:ge,labelText:le,lineEnding:k,link:m(I),listItem:m(),listOrdered:m(),listUnordered:m(),paragraph:m(),referenceString:Ae,resourceDestinationString:O,resourceTitleString:B,resource:Q,setextHeading:m(T),setextHeadingLineSequence:z,setextHeadingText:A,strong:m(),thematicBreak:m()}};aS(e,(i||{}).mdastExtensions||[]);const n={};return r;function r(V){let J={type:"root",children:[]};const ie={stack:[J],tokenStack:[],config:e,enter:h,exit:d,buffer:c,resume:g,data:n},Ce=[];let Me=-1;for(;++Me<V.length;)if(V[Me][1].type==="listOrdered"||V[Me][1].type==="listUnordered")if(V[Me][0]==="enter")Ce.push(Me);else{const He=Ce.pop();Me=o(V,He,Me)}for(Me=-1;++Me<V.length;){const He=e[V[Me][0]];iS.call(He,V[Me][1].type)&&He[V[Me][1].type].call(Object.assign({sliceSerialize:V[Me][2].sliceSerialize},ie),V[Me][1])}if(ie.tokenStack.length>0){const He=ie.tokenStack[ie.tokenStack.length-1];(He[1]||Dx).call(ie,void 0,He[0])}for(J.position={start:xr(V.length>0?V[0][1].start:{line:1,column:1,offset:0}),end:xr(V.length>0?V[V.length-2][1].end:{line:1,column:1,offset:0})},Me=-1;++Me<e.transforms.length;)J=e.transforms[Me](J)||J;return J}function o(V,J,ie){let Ce=J-1,Me=-1,He=!1,Je,be,Te,Ie;for(;++Ce<=ie;){const Ue=V[Ce];switch(Ue[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ue[0]==="enter"?Me++:Me--,Ie=void 0;break}case"lineEndingBlank":{Ue[0]==="enter"&&(Je&&!Ie&&!Me&&!Te&&(Te=Ce),Ie=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Ie=void 0}if(!Me&&Ue[0]==="enter"&&Ue[1].type==="listItemPrefix"||Me===-1&&Ue[0]==="exit"&&(Ue[1].type==="listUnordered"||Ue[1].type==="listOrdered")){if(Je){let Oe=Ce;for(be=void 0;Oe--;){const tt=V[Oe];if(tt[1].type==="lineEnding"||tt[1].type==="lineEndingBlank"){if(tt[0]==="exit")continue;be&&(V[be][1].type="lineEndingBlank",He=!0),tt[1].type="lineEnding",be=Oe}else if(!(tt[1].type==="linePrefix"||tt[1].type==="blockQuotePrefix"||tt[1].type==="blockQuotePrefixWhitespace"||tt[1].type==="blockQuoteMarker"||tt[1].type==="listItemIndent"))break}Te&&(!be||Te<be)&&(Je._spread=!0),Je.end=Object.assign({},be?V[be][1].start:Ue[1].end),V.splice(be||Ce,0,["exit",Je,Ue[2]]),Ce++,ie++}if(Ue[1].type==="listItemPrefix"){const Oe={type:"listItem",_spread:!1,start:Object.assign({},Ue[1].start),end:void 0};Je=Oe,V.splice(Ce,0,["enter",Oe,Ue[2]]),Ce++,ie++,Te=void 0,Ie=!0}}}return V[J][1]._spread=He,ie}function u(V,J){return ie;function ie(Ce){h.call(this,V(Ce),Ce),J&&J.call(this,Ce)}}function c(){this.stack.push({type:"fragment",children:[]})}function h(V,J,ie){this.stack[this.stack.length-1].children.push(V),this.stack.push(V),this.tokenStack.push([J,ie||void 0]),V.position={start:xr(J.start),end:void 0}}function m(V){return J;function J(ie){V&&V.call(this,ie),d.call(this,ie)}}function d(V,J){const ie=this.stack.pop(),Ce=this.tokenStack.pop();if(Ce)Ce[0].type!==V.type&&(J?J.call(this,V,Ce[0]):(Ce[1]||Dx).call(this,V,Ce[0]));else throw new Error("Cannot close `"+V.type+"` ("+yl({start:V.start,end:V.end})+"): it’s not open");ie.position.end=xr(V.end)}function g(){return a2(this.stack.pop())}function v(){this.data.expectingFirstListItemValue=!0}function _(V){if(this.data.expectingFirstListItemValue){const J=this.stack[this.stack.length-2];J.start=Number.parseInt(this.sliceSerialize(V),10),this.data.expectingFirstListItemValue=void 0}}function x(){const V=this.resume(),J=this.stack[this.stack.length-1];J.lang=V}function b(){const V=this.resume(),J=this.stack[this.stack.length-1];J.meta=V}function C(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function M(){const V=this.resume(),J=this.stack[this.stack.length-1];J.value=V.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){const V=this.resume(),J=this.stack[this.stack.length-1];J.value=V.replace(/(\r?\n|\r)$/g,"")}function D(V){const J=this.resume(),ie=this.stack[this.stack.length-1];ie.label=J,ie.identifier=ao(this.sliceSerialize(V)).toLowerCase()}function U(){const V=this.resume(),J=this.stack[this.stack.length-1];J.title=V}function P(){const V=this.resume(),J=this.stack[this.stack.length-1];J.url=V}function G(V){const J=this.stack[this.stack.length-1];if(!J.depth){const ie=this.sliceSerialize(V).length;J.depth=ie}}function A(){this.data.setextHeadingSlurpLineEnding=!0}function z(V){const J=this.stack[this.stack.length-1];J.depth=this.sliceSerialize(V).codePointAt(0)===61?1:2}function T(){this.data.setextHeadingSlurpLineEnding=void 0}function N(V){const ie=this.stack[this.stack.length-1].children;let Ce=ie[ie.length-1];(!Ce||Ce.type!=="text")&&(Ce=E(),Ce.position={start:xr(V.start),end:void 0},ie.push(Ce)),this.stack.push(Ce)}function ce(V){const J=this.stack.pop();J.value+=this.sliceSerialize(V),J.position.end=xr(V.end)}function k(V){const J=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ie=J.children[J.children.length-1];ie.position.end=xr(V.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(J.type)&&(N.call(this,V),ce.call(this,V))}function q(){this.data.atHardBreak=!0}function te(){const V=this.resume(),J=this.stack[this.stack.length-1];J.value=V}function ee(){const V=this.resume(),J=this.stack[this.stack.length-1];J.value=V}function X(){const V=this.resume(),J=this.stack[this.stack.length-1];J.value=V}function I(){const V=this.stack[this.stack.length-1];if(this.data.inReference){const J=this.data.referenceType||"shortcut";V.type+="Reference",V.referenceType=J,delete V.url,delete V.title}else delete V.identifier,delete V.label;this.data.referenceType=void 0}function H(){const V=this.stack[this.stack.length-1];if(this.data.inReference){const J=this.data.referenceType||"shortcut";V.type+="Reference",V.referenceType=J,delete V.url,delete V.title}else delete V.identifier,delete V.label;this.data.referenceType=void 0}function le(V){const J=this.sliceSerialize(V),ie=this.stack[this.stack.length-2];ie.label=iD(J),ie.identifier=ao(J).toLowerCase()}function ge(){const V=this.stack[this.stack.length-1],J=this.resume(),ie=this.stack[this.stack.length-1];if(this.data.inReference=!0,ie.type==="link"){const Ce=V.children;ie.children=Ce}else ie.alt=J}function O(){const V=this.resume(),J=this.stack[this.stack.length-1];J.url=V}function B(){const V=this.resume(),J=this.stack[this.stack.length-1];J.title=V}function Q(){this.data.inReference=void 0}function L(){this.data.referenceType="collapsed"}function Ae(V){const J=this.resume(),ie=this.stack[this.stack.length-1];ie.label=J,ie.identifier=ao(this.sliceSerialize(V)).toLowerCase(),this.data.referenceType="full"}function Pe(V){this.data.characterReferenceType=V.type}function ae(V){const J=this.sliceSerialize(V),ie=this.data.characterReferenceType;let Ce;ie?(Ce=jy(J,ie==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Ce=mm(J);const Me=this.stack[this.stack.length-1];Me.value+=Ce}function xe(V){const J=this.stack.pop();J.position.end=xr(V.end)}function Ee(V){ce.call(this,V);const J=this.stack[this.stack.length-1];J.url=this.sliceSerialize(V)}function Be(V){ce.call(this,V);const J=this.stack[this.stack.length-1];J.url="mailto:"+this.sliceSerialize(V)}function Ze(){return{type:"blockquote",children:[]}}function $e(){return{type:"code",lang:null,meta:null,value:""}}function en(){return{type:"inlineCode",value:""}}function vt(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function _t(){return{type:"emphasis",children:[]}}function Ct(){return{type:"heading",depth:0,children:[]}}function rt(){return{type:"break"}}function Zt(){return{type:"html",value:""}}function j(){return{type:"image",title:null,url:"",alt:null}}function jt(){return{type:"link",title:null,url:"",children:[]}}function xt(V){return{type:"list",ordered:V.type==="listOrdered",start:null,spread:V._spread,children:[]}}function Dt(V){return{type:"listItem",spread:V._spread,checked:null,children:[]}}function je(){return{type:"paragraph",children:[]}}function F(){return{type:"strong",children:[]}}function E(){return{type:"text",value:""}}function $(){return{type:"thematicBreak"}}}function xr(i){return{line:i.line,column:i.column,offset:i.offset}}function aS(i,e){let n=-1;for(;++n<e.length;){const r=e[n];Array.isArray(r)?aS(i,r):oD(i,r)}}function oD(i,e){let n;for(n in e)if(iS.call(e,n))switch(n){case"canContainEols":{const r=e[n];r&&i[n].push(...r);break}case"transforms":{const r=e[n];r&&i[n].push(...r);break}case"enter":case"exit":{const r=e[n];r&&Object.assign(i[n],r);break}}}function Dx(i,e){throw i?new Error("Cannot close `"+i.type+"` ("+yl({start:i.start,end:i.end})+"): a different token (`"+e.type+"`, "+yl({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+yl({start:e.start,end:e.end})+") is still open")}function lD(i){const e=this;e.parser=n;function n(r){return rD(r,{...e.data("settings"),...i,extensions:e.data("micromarkExtensions")||[],mdastExtensions:e.data("fromMarkdownExtensions")||[]})}}function uD(i,e){const n={type:"element",tagName:"blockquote",properties:{},children:i.wrap(i.all(e),!0)};return i.patch(e,n),i.applyData(e,n)}function cD(i,e){const n={type:"element",tagName:"br",properties:{},children:[]};return i.patch(e,n),[i.applyData(e,n),{type:"text",value:`
`}]}function fD(i,e){const n=e.value?e.value+`
`:"",r={},o=e.lang?e.lang.split(/\s+/):[];o.length>0&&(r.className=["language-"+o[0]]);let u={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return e.meta&&(u.data={meta:e.meta}),i.patch(e,u),u=i.applyData(e,u),u={type:"element",tagName:"pre",properties:{},children:[u]},i.patch(e,u),u}function hD(i,e){const n={type:"element",tagName:"del",properties:{},children:i.all(e)};return i.patch(e,n),i.applyData(e,n)}function dD(i,e){const n={type:"element",tagName:"em",properties:{},children:i.all(e)};return i.patch(e,n),i.applyData(e,n)}function pD(i,e){const n=typeof i.options.clobberPrefix=="string"?i.options.clobberPrefix:"user-content-",r=String(e.identifier).toUpperCase(),o=mo(r.toLowerCase()),u=i.footnoteOrder.indexOf(r);let c,h=i.footnoteCounts.get(r);h===void 0?(h=0,i.footnoteOrder.push(r),c=i.footnoteOrder.length):c=u+1,h+=1,i.footnoteCounts.set(r,h);const m={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+o,id:n+"fnref-"+o+(h>1?"-"+h:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(c)}]};i.patch(e,m);const d={type:"element",tagName:"sup",properties:{},children:[m]};return i.patch(e,d),i.applyData(e,d)}function mD(i,e){const n={type:"element",tagName:"h"+e.depth,properties:{},children:i.all(e)};return i.patch(e,n),i.applyData(e,n)}function gD(i,e){if(i.options.allowDangerousHtml){const n={type:"raw",value:e.value};return i.patch(e,n),i.applyData(e,n)}}function rS(i,e){const n=e.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return[{type:"text",value:"!["+e.alt+r}];const o=i.all(e),u=o[0];u&&u.type==="text"?u.value="["+u.value:o.unshift({type:"text",value:"["});const c=o[o.length-1];return c&&c.type==="text"?c.value+=r:o.push({type:"text",value:r}),o}function _D(i,e){const n=String(e.identifier).toUpperCase(),r=i.definitionById.get(n);if(!r)return rS(i,e);const o={src:mo(r.url||""),alt:e.alt};r.title!==null&&r.title!==void 0&&(o.title=r.title);const u={type:"element",tagName:"img",properties:o,children:[]};return i.patch(e,u),i.applyData(e,u)}function vD(i,e){const n={src:mo(e.url)};e.alt!==null&&e.alt!==void 0&&(n.alt=e.alt),e.title!==null&&e.title!==void 0&&(n.title=e.title);const r={type:"element",tagName:"img",properties:n,children:[]};return i.patch(e,r),i.applyData(e,r)}function xD(i,e){const n={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};i.patch(e,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return i.patch(e,r),i.applyData(e,r)}function yD(i,e){const n=String(e.identifier).toUpperCase(),r=i.definitionById.get(n);if(!r)return rS(i,e);const o={href:mo(r.url||"")};r.title!==null&&r.title!==void 0&&(o.title=r.title);const u={type:"element",tagName:"a",properties:o,children:i.all(e)};return i.patch(e,u),i.applyData(e,u)}function SD(i,e){const n={href:mo(e.url)};e.title!==null&&e.title!==void 0&&(n.title=e.title);const r={type:"element",tagName:"a",properties:n,children:i.all(e)};return i.patch(e,r),i.applyData(e,r)}function MD(i,e,n){const r=i.all(e),o=n?bD(n):sS(e),u={},c=[];if(typeof e.checked=="boolean"){const g=r[0];let v;g&&g.type==="element"&&g.tagName==="p"?v=g:(v={type:"element",tagName:"p",properties:{},children:[]},r.unshift(v)),v.children.length>0&&v.children.unshift({type:"text",value:" "}),v.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),u.className=["task-list-item"]}let h=-1;for(;++h<r.length;){const g=r[h];(o||h!==0||g.type!=="element"||g.tagName!=="p")&&c.push({type:"text",value:`
`}),g.type==="element"&&g.tagName==="p"&&!o?c.push(...g.children):c.push(g)}const m=r[r.length-1];m&&(o||m.type!=="element"||m.tagName!=="p")&&c.push({type:"text",value:`
`});const d={type:"element",tagName:"li",properties:u,children:c};return i.patch(e,d),i.applyData(e,d)}function bD(i){let e=!1;if(i.type==="list"){e=i.spread||!1;const n=i.children;let r=-1;for(;!e&&++r<n.length;)e=sS(n[r])}return e}function sS(i){const e=i.spread;return e??i.children.length>1}function ED(i,e){const n={},r=i.all(e);let o=-1;for(typeof e.start=="number"&&e.start!==1&&(n.start=e.start);++o<r.length;){const c=r[o];if(c.type==="element"&&c.tagName==="li"&&c.properties&&Array.isArray(c.properties.className)&&c.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const u={type:"element",tagName:e.ordered?"ol":"ul",properties:n,children:i.wrap(r,!0)};return i.patch(e,u),i.applyData(e,u)}function TD(i,e){const n={type:"element",tagName:"p",properties:{},children:i.all(e)};return i.patch(e,n),i.applyData(e,n)}function AD(i,e){const n={type:"root",children:i.wrap(i.all(e))};return i.patch(e,n),i.applyData(e,n)}function CD(i,e){const n={type:"element",tagName:"strong",properties:{},children:i.all(e)};return i.patch(e,n),i.applyData(e,n)}function wD(i,e){const n=i.all(e),r=n.shift(),o=[];if(r){const c={type:"element",tagName:"thead",properties:{},children:i.wrap([r],!0)};i.patch(e.children[0],c),o.push(c)}if(n.length>0){const c={type:"element",tagName:"tbody",properties:{},children:i.wrap(n,!0)},h=fm(e.children[1]),m=ky(e.children[e.children.length-1]);h&&m&&(c.position={start:h,end:m}),o.push(c)}const u={type:"element",tagName:"table",properties:{},children:i.wrap(o,!0)};return i.patch(e,u),i.applyData(e,u)}function RD(i,e,n){const r=n?n.children:void 0,u=(r?r.indexOf(e):1)===0?"th":"td",c=n&&n.type==="table"?n.align:void 0,h=c?c.length:e.children.length;let m=-1;const d=[];for(;++m<h;){const v=e.children[m],_={},x=c?c[m]:void 0;x&&(_.align=x);let b={type:"element",tagName:u,properties:_,children:[]};v&&(b.children=i.all(v),i.patch(v,b),b=i.applyData(v,b)),d.push(b)}const g={type:"element",tagName:"tr",properties:{},children:i.wrap(d,!0)};return i.patch(e,g),i.applyData(e,g)}function DD(i,e){const n={type:"element",tagName:"td",properties:{},children:i.all(e)};return i.patch(e,n),i.applyData(e,n)}const Ux=9,Lx=32;function UD(i){const e=String(i),n=/\r?\n|\r/g;let r=n.exec(e),o=0;const u=[];for(;r;)u.push(Nx(e.slice(o,r.index),o>0,!0),r[0]),o=r.index+r[0].length,r=n.exec(e);return u.push(Nx(e.slice(o),o>0,!1)),u.join("")}function Nx(i,e,n){let r=0,o=i.length;if(e){let u=i.codePointAt(r);for(;u===Ux||u===Lx;)r++,u=i.codePointAt(r)}if(n){let u=i.codePointAt(o-1);for(;u===Ux||u===Lx;)o--,u=i.codePointAt(o-1)}return o>r?i.slice(r,o):""}function LD(i,e){const n={type:"text",value:UD(String(e.value))};return i.patch(e,n),i.applyData(e,n)}function ND(i,e){const n={type:"element",tagName:"hr",properties:{},children:[]};return i.patch(e,n),i.applyData(e,n)}const OD={blockquote:uD,break:cD,code:fD,delete:hD,emphasis:dD,footnoteReference:pD,heading:mD,html:gD,imageReference:_D,image:vD,inlineCode:xD,linkReference:yD,link:SD,listItem:MD,list:ED,paragraph:TD,root:AD,strong:CD,table:wD,tableCell:DD,tableRow:RD,text:LD,thematicBreak:ND,toml:_c,yaml:_c,definition:_c,footnoteDefinition:_c};function _c(){}const oS=-1,Gc=0,Ml=1,Oc=2,vm=3,xm=4,ym=5,Sm=6,lS=7,uS=8,Ox=typeof self=="object"?self:globalThis,PD=(i,e)=>{const n=(o,u)=>(i.set(u,o),o),r=o=>{if(i.has(o))return i.get(o);const[u,c]=e[o];switch(u){case Gc:case oS:return n(c,o);case Ml:{const h=n([],o);for(const m of c)h.push(r(m));return h}case Oc:{const h=n({},o);for(const[m,d]of c)h[r(m)]=r(d);return h}case vm:return n(new Date(c),o);case xm:{const{source:h,flags:m}=c;return n(new RegExp(h,m),o)}case ym:{const h=n(new Map,o);for(const[m,d]of c)h.set(r(m),r(d));return h}case Sm:{const h=n(new Set,o);for(const m of c)h.add(r(m));return h}case lS:{const{name:h,message:m}=c;return n(new Ox[h](m),o)}case uS:return n(BigInt(c),o);case"BigInt":return n(Object(BigInt(c)),o);case"ArrayBuffer":return n(new Uint8Array(c).buffer,c);case"DataView":{const{buffer:h}=new Uint8Array(c);return n(new DataView(h),c)}}return n(new Ox[u](c),o)};return r},Px=i=>PD(new Map,i)(0),$s="",{toString:ID}={},{keys:zD}=Object,_l=i=>{const e=typeof i;if(e!=="object"||!i)return[Gc,e];const n=ID.call(i).slice(8,-1);switch(n){case"Array":return[Ml,$s];case"Object":return[Oc,$s];case"Date":return[vm,$s];case"RegExp":return[xm,$s];case"Map":return[ym,$s];case"Set":return[Sm,$s];case"DataView":return[Ml,n]}return n.includes("Array")?[Ml,n]:n.includes("Error")?[lS,n]:[Oc,n]},vc=([i,e])=>i===Gc&&(e==="function"||e==="symbol"),FD=(i,e,n,r)=>{const o=(c,h)=>{const m=r.push(c)-1;return n.set(h,m),m},u=c=>{if(n.has(c))return n.get(c);let[h,m]=_l(c);switch(h){case Gc:{let g=c;switch(m){case"bigint":h=uS,g=c.toString();break;case"function":case"symbol":if(i)throw new TypeError("unable to serialize "+m);g=null;break;case"undefined":return o([oS],c)}return o([h,g],c)}case Ml:{if(m){let _=c;return m==="DataView"?_=new Uint8Array(c.buffer):m==="ArrayBuffer"&&(_=new Uint8Array(c)),o([m,[..._]],c)}const g=[],v=o([h,g],c);for(const _ of c)g.push(u(_));return v}case Oc:{if(m)switch(m){case"BigInt":return o([m,c.toString()],c);case"Boolean":case"Number":case"String":return o([m,c.valueOf()],c)}if(e&&"toJSON"in c)return u(c.toJSON());const g=[],v=o([h,g],c);for(const _ of zD(c))(i||!vc(_l(c[_])))&&g.push([u(_),u(c[_])]);return v}case vm:return o([h,c.toISOString()],c);case xm:{const{source:g,flags:v}=c;return o([h,{source:g,flags:v}],c)}case ym:{const g=[],v=o([h,g],c);for(const[_,x]of c)(i||!(vc(_l(_))||vc(_l(x))))&&g.push([u(_),u(x)]);return v}case Sm:{const g=[],v=o([h,g],c);for(const _ of c)(i||!vc(_l(_)))&&g.push(u(_));return v}}const{message:d}=c;return o([h,{name:m,message:d}],c)};return u},Ix=(i,{json:e,lossy:n}={})=>{const r=[];return FD(!(e||n),!!e,new Map,r)(i),r},Pc=typeof structuredClone=="function"?(i,e)=>e&&("json"in e||"lossy"in e)?Px(Ix(i,e)):structuredClone(i):(i,e)=>Px(Ix(i,e));function BD(i,e){const n=[{type:"text",value:"↩"}];return e>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(e)}]}),n}function kD(i,e){return"Back to reference "+(i+1)+(e>1?"-"+e:"")}function HD(i){const e=typeof i.options.clobberPrefix=="string"?i.options.clobberPrefix:"user-content-",n=i.options.footnoteBackContent||BD,r=i.options.footnoteBackLabel||kD,o=i.options.footnoteLabel||"Footnotes",u=i.options.footnoteLabelTagName||"h2",c=i.options.footnoteLabelProperties||{className:["sr-only"]},h=[];let m=-1;for(;++m<i.footnoteOrder.length;){const d=i.footnoteById.get(i.footnoteOrder[m]);if(!d)continue;const g=i.all(d),v=String(d.identifier).toUpperCase(),_=mo(v.toLowerCase());let x=0;const b=[],C=i.footnoteCounts.get(v);for(;C!==void 0&&++x<=C;){b.length>0&&b.push({type:"text",value:" "});let D=typeof n=="string"?n:n(m,x);typeof D=="string"&&(D={type:"text",value:D}),b.push({type:"element",tagName:"a",properties:{href:"#"+e+"fnref-"+_+(x>1?"-"+x:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(m,x),className:["data-footnote-backref"]},children:Array.isArray(D)?D:[D]})}const M=g[g.length-1];if(M&&M.type==="element"&&M.tagName==="p"){const D=M.children[M.children.length-1];D&&D.type==="text"?D.value+=" ":M.children.push({type:"text",value:" "}),M.children.push(...b)}else g.push(...b);const y={type:"element",tagName:"li",properties:{id:e+"fn-"+_},children:i.wrap(g,!0)};i.patch(d,y),h.push(y)}if(h.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:u,properties:{...Pc(c),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:i.wrap(h,!0)},{type:"text",value:`
`}]}}const cS=(function(i){if(i==null)return WD;if(typeof i=="function")return Vc(i);if(typeof i=="object")return Array.isArray(i)?GD(i):VD(i);if(typeof i=="string")return XD(i);throw new Error("Expected function, string, or object as test")});function GD(i){const e=[];let n=-1;for(;++n<i.length;)e[n]=cS(i[n]);return Vc(r);function r(...o){let u=-1;for(;++u<e.length;)if(e[u].apply(this,o))return!0;return!1}}function VD(i){const e=i;return Vc(n);function n(r){const o=r;let u;for(u in i)if(o[u]!==e[u])return!1;return!0}}function XD(i){return Vc(e);function e(n){return n&&n.type===i}}function Vc(i){return e;function e(n,r,o){return!!(qD(n)&&i.call(this,n,typeof r=="number"?r:void 0,o||void 0))}}function WD(){return!0}function qD(i){return i!==null&&typeof i=="object"&&"type"in i}const fS=[],jD=!0,zx=!1,YD="skip";function ZD(i,e,n,r){let o;typeof e=="function"&&typeof n!="function"?(r=n,n=e):o=e;const u=cS(o),c=r?-1:1;h(i,void 0,[])();function h(m,d,g){const v=m&&typeof m=="object"?m:{};if(typeof v.type=="string"){const x=typeof v.tagName=="string"?v.tagName:typeof v.name=="string"?v.name:void 0;Object.defineProperty(_,"name",{value:"node ("+(m.type+(x?"<"+x+">":""))+")"})}return _;function _(){let x=fS,b,C,M;if((!e||u(m,d,g[g.length-1]||void 0))&&(x=KD(n(m,g)),x[0]===zx))return x;if("children"in m&&m.children){const y=m;if(y.children&&x[0]!==YD)for(C=(r?y.children.length:-1)+c,M=g.concat(y);C>-1&&C<y.children.length;){const D=y.children[C];if(b=h(D,C,M)(),b[0]===zx)return b;C=typeof b[1]=="number"?b[1]:C+c}}return x}}}function KD(i){return Array.isArray(i)?i:typeof i=="number"?[jD,i]:i==null?fS:[i]}function hS(i,e,n,r){let o,u,c;typeof e=="function"&&typeof n!="function"?(u=void 0,c=e,o=n):(u=e,c=n,o=r),ZD(i,u,h,o);function h(m,d){const g=d[d.length-1],v=g?g.children.indexOf(m):void 0;return c(m,v,g)}}const Yp={}.hasOwnProperty,QD={};function JD(i,e){const n=e||QD,r=new Map,o=new Map,u=new Map,c={...OD,...n.handlers},h={all:d,applyData:eU,definitionById:r,footnoteById:o,footnoteCounts:u,footnoteOrder:[],handlers:c,one:m,options:n,patch:$D,wrap:nU};return hS(i,function(g){if(g.type==="definition"||g.type==="footnoteDefinition"){const v=g.type==="definition"?r:o,_=String(g.identifier).toUpperCase();v.has(_)||v.set(_,g)}}),h;function m(g,v){const _=g.type,x=h.handlers[_];if(Yp.call(h.handlers,_)&&x)return x(h,g,v);if(h.options.passThrough&&h.options.passThrough.includes(_)){if("children"in g){const{children:C,...M}=g,y=Pc(M);return y.children=h.all(g),y}return Pc(g)}return(h.options.unknownHandler||tU)(h,g,v)}function d(g){const v=[];if("children"in g){const _=g.children;let x=-1;for(;++x<_.length;){const b=h.one(_[x],g);if(b){if(x&&_[x-1].type==="break"&&(!Array.isArray(b)&&b.type==="text"&&(b.value=Fx(b.value)),!Array.isArray(b)&&b.type==="element")){const C=b.children[0];C&&C.type==="text"&&(C.value=Fx(C.value))}Array.isArray(b)?v.push(...b):v.push(b)}}}return v}}function $D(i,e){i.position&&(e.position=IR(i))}function eU(i,e){let n=e;if(i&&i.data){const r=i.data.hName,o=i.data.hChildren,u=i.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const c="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:c}}n.type==="element"&&u&&Object.assign(n.properties,Pc(u)),"children"in n&&n.children&&o!==null&&o!==void 0&&(n.children=o)}return n}function tU(i,e){const n=e.data||{},r="value"in e&&!(Yp.call(n,"hProperties")||Yp.call(n,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:i.all(e)};return i.patch(e,r),i.applyData(e,r)}function nU(i,e){const n=[];let r=-1;for(e&&n.push({type:"text",value:`
`});++r<i.length;)r&&n.push({type:"text",value:`
`}),n.push(i[r]);return e&&i.length>0&&n.push({type:"text",value:`
`}),n}function Fx(i){let e=0,n=i.charCodeAt(e);for(;n===9||n===32;)e++,n=i.charCodeAt(e);return i.slice(e)}function Bx(i,e){const n=JD(i,e),r=n.one(i,void 0),o=HD(n),u=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return o&&u.children.push({type:"text",value:`
`},o),u}function iU(i,e){return i&&"run"in i?async function(n,r){const o=Bx(n,{file:r,...e});await i.run(o,r)}:function(n,r){return Bx(n,{file:r,...i||e})}}function kx(i){if(i)throw i}var Fd,Hx;function aU(){if(Hx)return Fd;Hx=1;var i=Object.prototype.hasOwnProperty,e=Object.prototype.toString,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,o=function(d){return typeof Array.isArray=="function"?Array.isArray(d):e.call(d)==="[object Array]"},u=function(d){if(!d||e.call(d)!=="[object Object]")return!1;var g=i.call(d,"constructor"),v=d.constructor&&d.constructor.prototype&&i.call(d.constructor.prototype,"isPrototypeOf");if(d.constructor&&!g&&!v)return!1;var _;for(_ in d);return typeof _>"u"||i.call(d,_)},c=function(d,g){n&&g.name==="__proto__"?n(d,g.name,{enumerable:!0,configurable:!0,value:g.newValue,writable:!0}):d[g.name]=g.newValue},h=function(d,g){if(g==="__proto__")if(i.call(d,g)){if(r)return r(d,g).value}else return;return d[g]};return Fd=function m(){var d,g,v,_,x,b,C=arguments[0],M=1,y=arguments.length,D=!1;for(typeof C=="boolean"&&(D=C,C=arguments[1]||{},M=2),(C==null||typeof C!="object"&&typeof C!="function")&&(C={});M<y;++M)if(d=arguments[M],d!=null)for(g in d)v=h(C,g),_=h(d,g),C!==_&&(D&&_&&(u(_)||(x=o(_)))?(x?(x=!1,b=v&&o(v)?v:[]):b=v&&u(v)?v:{},c(C,{name:g,newValue:m(D,b,_)})):typeof _<"u"&&c(C,{name:g,newValue:_}));return C},Fd}var rU=aU();const Bd=Qp(rU);function Zp(i){if(typeof i!="object"||i===null)return!1;const e=Object.getPrototypeOf(i);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)}function sU(){const i=[],e={run:n,use:r};return e;function n(...o){let u=-1;const c=o.pop();if(typeof c!="function")throw new TypeError("Expected function as last argument, not "+c);h(null,...o);function h(m,...d){const g=i[++u];let v=-1;if(m){c(m);return}for(;++v<o.length;)(d[v]===null||d[v]===void 0)&&(d[v]=o[v]);o=d,g?oU(g,h)(...d):c(null,...d)}}function r(o){if(typeof o!="function")throw new TypeError("Expected `middelware` to be a function, not "+o);return i.push(o),e}}function oU(i,e){let n;return r;function r(...c){const h=i.length>c.length;let m;h&&c.push(o);try{m=i.apply(this,c)}catch(d){const g=d;if(h&&n)throw g;return o(g)}h||(m&&m.then&&typeof m.then=="function"?m.then(u,o):m instanceof Error?o(m):u(m))}function o(c,...h){n||(n=!0,e(c,...h))}function u(c){o(null,c)}}const Ji={basename:lU,dirname:uU,extname:cU,join:fU,sep:"/"};function lU(i,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');Ll(i);let n=0,r=-1,o=i.length,u;if(e===void 0||e.length===0||e.length>i.length){for(;o--;)if(i.codePointAt(o)===47){if(u){n=o+1;break}}else r<0&&(u=!0,r=o+1);return r<0?"":i.slice(n,r)}if(e===i)return"";let c=-1,h=e.length-1;for(;o--;)if(i.codePointAt(o)===47){if(u){n=o+1;break}}else c<0&&(u=!0,c=o+1),h>-1&&(i.codePointAt(o)===e.codePointAt(h--)?h<0&&(r=o):(h=-1,r=c));return n===r?r=c:r<0&&(r=i.length),i.slice(n,r)}function uU(i){if(Ll(i),i.length===0)return".";let e=-1,n=i.length,r;for(;--n;)if(i.codePointAt(n)===47){if(r){e=n;break}}else r||(r=!0);return e<0?i.codePointAt(0)===47?"/":".":e===1&&i.codePointAt(0)===47?"//":i.slice(0,e)}function cU(i){Ll(i);let e=i.length,n=-1,r=0,o=-1,u=0,c;for(;e--;){const h=i.codePointAt(e);if(h===47){if(c){r=e+1;break}continue}n<0&&(c=!0,n=e+1),h===46?o<0?o=e:u!==1&&(u=1):o>-1&&(u=-1)}return o<0||n<0||u===0||u===1&&o===n-1&&o===r+1?"":i.slice(o,n)}function fU(...i){let e=-1,n;for(;++e<i.length;)Ll(i[e]),i[e]&&(n=n===void 0?i[e]:n+"/"+i[e]);return n===void 0?".":hU(n)}function hU(i){Ll(i);const e=i.codePointAt(0)===47;let n=dU(i,!e);return n.length===0&&!e&&(n="."),n.length>0&&i.codePointAt(i.length-1)===47&&(n+="/"),e?"/"+n:n}function dU(i,e){let n="",r=0,o=-1,u=0,c=-1,h,m;for(;++c<=i.length;){if(c<i.length)h=i.codePointAt(c);else{if(h===47)break;h=47}if(h===47){if(!(o===c-1||u===1))if(o!==c-1&&u===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(m=n.lastIndexOf("/"),m!==n.length-1){m<0?(n="",r=0):(n=n.slice(0,m),r=n.length-1-n.lastIndexOf("/")),o=c,u=0;continue}}else if(n.length>0){n="",r=0,o=c,u=0;continue}}e&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+i.slice(o+1,c):n=i.slice(o+1,c),r=c-o-1;o=c,u=0}else h===46&&u>-1?u++:u=-1}return n}function Ll(i){if(typeof i!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(i))}const pU={cwd:mU};function mU(){return"/"}function Kp(i){return!!(i!==null&&typeof i=="object"&&"href"in i&&i.href&&"protocol"in i&&i.protocol&&i.auth===void 0)}function gU(i){if(typeof i=="string")i=new URL(i);else if(!Kp(i)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+i+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(i.protocol!=="file:"){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return _U(i)}function _U(i){if(i.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const e=i.pathname;let n=-1;for(;++n<e.length;)if(e.codePointAt(n)===37&&e.codePointAt(n+1)===50){const r=e.codePointAt(n+2);if(r===70||r===102){const o=new TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(e)}const kd=["history","path","basename","stem","extname","dirname"];class dS{constructor(e){let n;e?Kp(e)?n={path:e}:typeof e=="string"||vU(e)?n={value:e}:n=e:n={},this.cwd="cwd"in n?"":pU.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<kd.length;){const u=kd[r];u in n&&n[u]!==void 0&&n[u]!==null&&(this[u]=u==="history"?[...n[u]]:n[u])}let o;for(o in n)kd.includes(o)||(this[o]=n[o])}get basename(){return typeof this.path=="string"?Ji.basename(this.path):void 0}set basename(e){Gd(e,"basename"),Hd(e,"basename"),this.path=Ji.join(this.dirname||"",e)}get dirname(){return typeof this.path=="string"?Ji.dirname(this.path):void 0}set dirname(e){Gx(this.basename,"dirname"),this.path=Ji.join(e||"",this.basename)}get extname(){return typeof this.path=="string"?Ji.extname(this.path):void 0}set extname(e){if(Hd(e,"extname"),Gx(this.dirname,"extname"),e){if(e.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ji.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){Kp(e)&&(e=gU(e)),Gd(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path=="string"?Ji.basename(this.path,this.extname):void 0}set stem(e){Gd(e,"stem"),Hd(e,"stem"),this.path=Ji.join(this.dirname||"",e+(this.extname||""))}fail(e,n,r){const o=this.message(e,n,r);throw o.fatal=!0,o}info(e,n,r){const o=this.message(e,n,r);return o.fatal=void 0,o}message(e,n,r){const o=new Fn(e,n,r);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(e){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(e||void 0).decode(this.value)}}function Hd(i,e){if(i&&i.includes(Ji.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+Ji.sep+"`")}function Gd(i,e){if(!i)throw new Error("`"+e+"` cannot be empty")}function Gx(i,e){if(!i)throw new Error("Setting `"+e+"` requires `path` to be set too")}function vU(i){return!!(i&&typeof i=="object"&&"byteLength"in i&&"byteOffset"in i)}const xU=(function(i){const r=this.constructor.prototype,o=r[i],u=function(){return o.apply(u,arguments)};return Object.setPrototypeOf(u,r),u}),yU={}.hasOwnProperty;class Mm extends xU{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=sU()}copy(){const e=new Mm;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];e.use(...r)}return e.data(Bd(!0,{},this.namespace)),e}data(e,n){return typeof e=="string"?arguments.length===2?(Wd("data",this.frozen),this.namespace[e]=n,this):yU.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Wd("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const o=n.call(e,...r);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const n=xc(e),r=this.parser||this.Parser;return Vd("parse",r),r(String(n),n)}process(e,n){const r=this;return this.freeze(),Vd("process",this.parser||this.Parser),Xd("process",this.compiler||this.Compiler),n?o(void 0,n):new Promise(o);function o(u,c){const h=xc(e),m=r.parse(h);r.run(m,h,function(g,v,_){if(g||!v||!_)return d(g);const x=v,b=r.stringify(x,_);bU(b)?_.value=b:_.result=b,d(g,_)});function d(g,v){g||!v?c(g):u?u(v):n(void 0,v)}}}processSync(e){let n=!1,r;return this.freeze(),Vd("processSync",this.parser||this.Parser),Xd("processSync",this.compiler||this.Compiler),this.process(e,o),Xx("processSync","process",n),r;function o(u,c){n=!0,kx(u),r=c}}run(e,n,r){Vx(e),this.freeze();const o=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?u(void 0,r):new Promise(u);function u(c,h){const m=xc(n);o.run(e,m,d);function d(g,v,_){const x=v||e;g?h(g):c?c(x):r(void 0,x,_)}}}runSync(e,n){let r=!1,o;return this.run(e,n,u),Xx("runSync","run",r),o;function u(c,h){kx(c),o=h,r=!0}}stringify(e,n){this.freeze();const r=xc(n),o=this.compiler||this.Compiler;return Xd("stringify",o),Vx(e),o(e,r)}use(e,...n){const r=this.attachers,o=this.namespace;if(Wd("use",this.frozen),e!=null)if(typeof e=="function")m(e,n);else if(typeof e=="object")Array.isArray(e)?h(e):c(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function u(d){if(typeof d=="function")m(d,[]);else if(typeof d=="object")if(Array.isArray(d)){const[g,...v]=d;m(g,v)}else c(d);else throw new TypeError("Expected usable value, not `"+d+"`")}function c(d){if(!("plugins"in d)&&!("settings"in d))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");h(d.plugins),d.settings&&(o.settings=Bd(!0,o.settings,d.settings))}function h(d){let g=-1;if(d!=null)if(Array.isArray(d))for(;++g<d.length;){const v=d[g];u(v)}else throw new TypeError("Expected a list of plugins, not `"+d+"`")}function m(d,g){let v=-1,_=-1;for(;++v<r.length;)if(r[v][0]===d){_=v;break}if(_===-1)r.push([d,...g]);else if(g.length>0){let[x,...b]=g;const C=r[_][1];Zp(C)&&Zp(x)&&(x=Bd(!0,C,x)),r[_]=[d,x,...b]}}}}const SU=new Mm().freeze();function Vd(i,e){if(typeof e!="function")throw new TypeError("Cannot `"+i+"` without `parser`")}function Xd(i,e){if(typeof e!="function")throw new TypeError("Cannot `"+i+"` without `compiler`")}function Wd(i,e){if(e)throw new Error("Cannot call `"+i+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Vx(i){if(!Zp(i)||typeof i.type!="string")throw new TypeError("Expected node, got `"+i+"`")}function Xx(i,e,n){if(!n)throw new Error("`"+i+"` finished async. Use `"+e+"` instead")}function xc(i){return MU(i)?i:new dS(i)}function MU(i){return!!(i&&typeof i=="object"&&"message"in i&&"messages"in i)}function bU(i){return typeof i=="string"||EU(i)}function EU(i){return!!(i&&typeof i=="object"&&"byteLength"in i&&"byteOffset"in i)}const TU="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Wx=[],qx={allowDangerousHtml:!0},AU=/^(https?|ircs?|mailto|xmpp)$/i,CU=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function wU(i){const e=RU(i),n=DU(i);return UU(e.runSync(e.parse(n),n),i)}function RU(i){const e=i.rehypePlugins||Wx,n=i.remarkPlugins||Wx,r=i.remarkRehypeOptions?{...i.remarkRehypeOptions,...qx}:qx;return SU().use(lD).use(n).use(iU,r).use(e)}function DU(i){const e=i.children||"",n=new dS;return typeof e=="string"&&(n.value=e),n}function UU(i,e){const n=e.allowedElements,r=e.allowElement,o=e.components,u=e.disallowedElements,c=e.skipHtml,h=e.unwrapDisallowed,m=e.urlTransform||LU;for(const g of CU)Object.hasOwn(e,g.from)&&(""+g.from+(g.to?"use `"+g.to+"` instead":"remove it")+TU+g.id,void 0);return hS(i,d),HR(i,{Fragment:re.Fragment,components:o,ignoreInvalidStyle:!0,jsx:re.jsx,jsxs:re.jsxs,passKeys:!0,passNode:!0});function d(g,v,_){if(g.type==="raw"&&_&&typeof v=="number")return c?_.children.splice(v,1):_.children[v]={type:"text",value:g.value},v;if(g.type==="element"){let x;for(x in Pd)if(Object.hasOwn(Pd,x)&&Object.hasOwn(g.properties,x)){const b=g.properties[x],C=Pd[x];(C===null||C.includes(g.tagName))&&(g.properties[x]=m(String(b||""),x,g))}}if(g.type==="element"){let x=n?!n.includes(g.tagName):u?u.includes(g.tagName):!1;if(!x&&r&&typeof v=="number"&&(x=!r(g,v,_)),x&&_&&typeof v=="number")return h&&g.children?_.children.splice(v,1,...g.children):_.children.splice(v,1),v}}}function LU(i){const e=i.indexOf(":"),n=i.indexOf("?"),r=i.indexOf("#"),o=i.indexOf("/");return e===-1||o!==-1&&e>o||n!==-1&&e>n||r!==-1&&e>r||AU.test(i.slice(0,e))?i:""}const Mt="#9a9aaa",En="#b0b0c0",eo="#707080",jx={"potion-round":re.jsxs("svg",{width:"120",height:"150",viewBox:"0 0 120 150",children:[re.jsx("defs",{children:re.jsxs("linearGradient",{id:"liq1",x1:"0",y1:"0",x2:"0",y2:"1",children:[re.jsx("stop",{offset:"0%",stopColor:En,stopOpacity:"0.3"}),re.jsx("stop",{offset:"100%",stopColor:eo,stopOpacity:"0.2"})]})}),re.jsx("ellipse",{cx:"60",cy:"100",rx:"38",ry:"35",fill:"none",stroke:Mt,strokeWidth:"1.5"}),re.jsx("ellipse",{cx:"60",cy:"100",rx:"30",ry:"28",fill:"url(#liq1)"}),re.jsx("line",{x1:"52",y1:"65",x2:"52",y2:"35",stroke:Mt,strokeWidth:"1.5"}),re.jsx("line",{x1:"68",y1:"65",x2:"68",y2:"35",stroke:Mt,strokeWidth:"1.5"}),re.jsx("line",{x1:"48",y1:"35",x2:"72",y2:"35",stroke:Mt,strokeWidth:"1.5"}),re.jsx("ellipse",{cx:"60",cy:"35",rx:"12",ry:"4",fill:"none",stroke:Mt,strokeWidth:"1"}),re.jsx("circle",{cx:"55",cy:"90",r:"3",fill:"none",stroke:En,strokeWidth:"0.5",opacity:"0.5"}),re.jsx("circle",{cx:"65",cy:"105",r:"2",fill:"none",stroke:En,strokeWidth:"0.5",opacity:"0.4"}),re.jsx("circle",{cx:"50",cy:"108",r:"1.5",fill:"none",stroke:En,strokeWidth:"0.5",opacity:"0.3"}),re.jsx("text",{x:"60",y:"145",textAnchor:"middle",fontFamily:"MedievalSharp",fontSize:"8",fill:Mt,opacity:"0.4",children:"fig. I"})]}),"potion-tall":re.jsxs("svg",{width:"100",height:"150",viewBox:"0 0 100 150",children:[re.jsx("defs",{children:re.jsxs("linearGradient",{id:"liq2",x1:"0",y1:"0",x2:"0",y2:"1",children:[re.jsx("stop",{offset:"0%",stopColor:En,stopOpacity:"0.25"}),re.jsx("stop",{offset:"100%",stopColor:eo,stopOpacity:"0.15"})]})}),re.jsx("path",{d:"M 40 130 Q 35 110 38 70 L 42 30 L 58 30 L 62 70 Q 65 110 60 130 Z",fill:"none",stroke:Mt,strokeWidth:"1.5"}),re.jsx("path",{d:"M 42 120 Q 40 100 42 70 L 44 45 L 56 45 L 58 70 Q 60 100 58 120 Z",fill:"url(#liq2)"}),re.jsx("line",{x1:"42",y1:"30",x2:"42",y2:"20",stroke:Mt,strokeWidth:"1"}),re.jsx("line",{x1:"58",y1:"30",x2:"58",y2:"20",stroke:Mt,strokeWidth:"1"}),re.jsx("ellipse",{cx:"50",cy:"20",rx:"10",ry:"4",fill:"none",stroke:Mt,strokeWidth:"1"}),re.jsx("path",{d:"M 35 130 L 65 130",stroke:Mt,strokeWidth:"1.5"}),re.jsx("ellipse",{cx:"50",cy:"130",rx:"15",ry:"5",fill:"none",stroke:Mt,strokeWidth:"1"}),re.jsx("text",{x:"50",y:"148",textAnchor:"middle",fontFamily:"MedievalSharp",fontSize:"8",fill:Mt,opacity:"0.4",children:"fig. II"})]}),"potion-wide":re.jsxs("svg",{width:"140",height:"140",viewBox:"0 0 140 140",children:[re.jsx("defs",{children:re.jsxs("linearGradient",{id:"liq3",x1:"0",y1:"0",x2:"0",y2:"1",children:[re.jsx("stop",{offset:"0%",stopColor:En,stopOpacity:"0.3"}),re.jsx("stop",{offset:"100%",stopColor:eo,stopOpacity:"0.2"})]})}),re.jsx("path",{d:"M 30 100 Q 25 80 35 60 L 55 30 L 85 30 L 105 60 Q 115 80 110 100 Z",fill:"none",stroke:Mt,strokeWidth:"1.5"}),re.jsx("path",{d:"M 38 95 Q 35 78 43 62 L 58 40 L 82 40 L 97 62 Q 105 78 102 95 Z",fill:"url(#liq3)"}),re.jsx("ellipse",{cx:"70",cy:"100",rx:"40",ry:"8",fill:"none",stroke:Mt,strokeWidth:"1.5"}),re.jsx("line",{x1:"55",y1:"30",x2:"58",y2:"15",stroke:Mt,strokeWidth:"1"}),re.jsx("line",{x1:"85",y1:"30",x2:"82",y2:"15",stroke:Mt,strokeWidth:"1"}),re.jsx("line",{x1:"58",y1:"15",x2:"82",y2:"15",stroke:Mt,strokeWidth:"1.5"}),re.jsx("path",{d:"M 50 75 Q 70 65 90 75",fill:"none",stroke:En,strokeWidth:"0.5",opacity:"0.4"}),re.jsx("circle",{cx:"60",cy:"82",r:"2",fill:"none",stroke:En,strokeWidth:"0.5",opacity:"0.4"}),re.jsx("circle",{cx:"80",cy:"88",r:"1.5",fill:"none",stroke:En,strokeWidth:"0.5",opacity:"0.3"}),re.jsx("text",{x:"70",y:"125",textAnchor:"middle",fontFamily:"MedievalSharp",fontSize:"8",fill:Mt,opacity:"0.4",children:"fig. III"})]}),"potion-angular":re.jsxs("svg",{width:"110",height:"150",viewBox:"0 0 110 150",children:[re.jsx("defs",{children:re.jsxs("linearGradient",{id:"liq4",x1:"0",y1:"0",x2:"0",y2:"1",children:[re.jsx("stop",{offset:"0%",stopColor:En,stopOpacity:"0.25"}),re.jsx("stop",{offset:"100%",stopColor:eo,stopOpacity:"0.2"})]})}),re.jsx("polygon",{points:"55,25 80,55 80,110 30,110 30,55",fill:"none",stroke:Mt,strokeWidth:"1.5"}),re.jsx("polygon",{points:"55,50 72,65 72,105 38,105 38,65",fill:"url(#liq4)"}),re.jsx("line",{x1:"48",y1:"25",x2:"48",y2:"10",stroke:Mt,strokeWidth:"1"}),re.jsx("line",{x1:"62",y1:"25",x2:"62",y2:"10",stroke:Mt,strokeWidth:"1"}),re.jsx("rect",{x:"46",y:"8",width:"18",height:"6",rx:"2",fill:"none",stroke:Mt,strokeWidth:"1"}),re.jsx("line",{x1:"40",y1:"80",x2:"70",y2:"80",stroke:En,strokeWidth:"0.3",opacity:"0.4"}),re.jsx("line",{x1:"40",y1:"90",x2:"70",y2:"90",stroke:En,strokeWidth:"0.3",opacity:"0.3"}),re.jsx("text",{x:"55",y:"130",textAnchor:"middle",fontFamily:"MedievalSharp",fontSize:"8",fill:Mt,opacity:"0.4",children:"fig. IV"})]}),"potion-skull":re.jsxs("svg",{width:"120",height:"150",viewBox:"0 0 120 150",children:[re.jsx("defs",{children:re.jsxs("linearGradient",{id:"liq5",x1:"0",y1:"0",x2:"0",y2:"1",children:[re.jsx("stop",{offset:"0%",stopColor:En,stopOpacity:"0.2"}),re.jsx("stop",{offset:"100%",stopColor:eo,stopOpacity:"0.3"})]})}),re.jsx("path",{d:"M 35 110 Q 30 80 40 55 Q 45 35 60 30 Q 75 35 80 55 Q 90 80 85 110 Z",fill:"none",stroke:Mt,strokeWidth:"1.5"}),re.jsx("path",{d:"M 42 105 Q 38 80 46 58 Q 50 42 60 38 Q 70 42 74 58 Q 82 80 78 105 Z",fill:"url(#liq5)"}),re.jsx("ellipse",{cx:"60",cy:"110",rx:"25",ry:"6",fill:"none",stroke:Mt,strokeWidth:"1.5"}),re.jsx("line",{x1:"55",y1:"30",x2:"53",y2:"15",stroke:Mt,strokeWidth:"1"}),re.jsx("line",{x1:"65",y1:"30",x2:"67",y2:"15",stroke:Mt,strokeWidth:"1"}),re.jsx("line",{x1:"53",y1:"15",x2:"67",y2:"15",stroke:Mt,strokeWidth:"1.5"}),re.jsx("circle",{cx:"53",cy:"12",r:"3",fill:"none",stroke:Mt,strokeWidth:"0.8"}),re.jsx("circle",{cx:"67",cy:"12",r:"3",fill:"none",stroke:Mt,strokeWidth:"0.8"}),re.jsx("path",{d:"M 55 75 L 58 80 L 62 80 L 65 75",fill:"none",stroke:En,strokeWidth:"0.5",opacity:"0.3"}),re.jsx("text",{x:"60",y:"135",textAnchor:"middle",fontFamily:"MedievalSharp",fontSize:"8",fill:Mt,opacity:"0.4",children:"fig. V"})]}),"potion-mercury":re.jsxs("svg",{width:"110",height:"150",viewBox:"0 0 110 150",children:[re.jsx("defs",{children:re.jsxs("linearGradient",{id:"liq6",x1:"0",y1:"0",x2:"1",y2:"1",children:[re.jsx("stop",{offset:"0%",stopColor:En,stopOpacity:"0.35"}),re.jsx("stop",{offset:"50%",stopColor:eo,stopOpacity:"0.2"}),re.jsx("stop",{offset:"100%",stopColor:En,stopOpacity:"0.3"})]})}),re.jsx("circle",{cx:"55",cy:"90",r:"30",fill:"none",stroke:Mt,strokeWidth:"1.5"}),re.jsx("circle",{cx:"55",cy:"90",r:"23",fill:"url(#liq6)"}),re.jsx("line",{x1:"50",y1:"60",x2:"48",y2:"35",stroke:Mt,strokeWidth:"1.5"}),re.jsx("line",{x1:"60",y1:"60",x2:"62",y2:"35",stroke:Mt,strokeWidth:"1.5"}),re.jsx("path",{d:"M 42 35 L 48 35 L 45 25 L 55 30 L 65 25 L 62 35 L 68 35",fill:"none",stroke:Mt,strokeWidth:"1"}),re.jsx("path",{d:"M 45 85 Q 55 78 65 85 Q 55 92 45 85",fill:"none",stroke:En,strokeWidth:"0.5",opacity:"0.4"}),re.jsx("circle",{cx:"48",cy:"95",r:"1.5",fill:"none",stroke:En,strokeWidth:"0.5",opacity:"0.3"}),re.jsx("circle",{cx:"62",cy:"98",r:"1",fill:"none",stroke:En,strokeWidth:"0.5",opacity:"0.3"}),re.jsx("text",{x:"55",y:"135",textAnchor:"middle",fontFamily:"MedievalSharp",fontSize:"8",fill:Mt,opacity:"0.4",children:"fig. VI"})]})};function NU({type:i}){return re.jsx("div",{className:"elixir-illustration",children:jx[i]??jx["potion-round"]})}function pS({potion:i}){return re.jsxs(re.Fragment,{children:[re.jsx("div",{className:"elixir-title",children:i.meta.name}),re.jsx("div",{className:"elixir-subtitle",children:i.meta.subtitle}),re.jsx(NU,{type:i.meta.illustration}),re.jsx("div",{className:"elixir-body",children:re.jsx(wU,{children:i.markdown})})]})}function OU({potion:i,offset:e,pageNumber:n}){return re.jsxs(re.Fragment,{children:[re.jsx("div",{className:"elixir-content-clip",children:re.jsx("div",{style:{marginTop:-e},children:re.jsx(pS,{potion:i})})}),i.meta.mirror&&e===0&&re.jsx("div",{className:"mirror-note",style:{bottom:40,right:15,transform:"scaleX(-1) rotate(-2deg)"},children:i.meta.mirror}),re.jsx("div",{className:"page-number",children:n})]})}function PU({title:i,ornament:e,desc:n,pageNumber:r}){return re.jsxs(re.Fragment,{children:[re.jsxs("div",{className:"cover-content",children:[re.jsx("div",{className:"cover-title",children:i}),re.jsx("div",{className:"cover-ornament",children:e}),re.jsx("div",{className:"cover-desc",children:n})]}),re.jsx("div",{className:"page-number",children:r})]})}function IU({entries:i,pageNumber:e,onJump:n}){return re.jsxs(re.Fragment,{children:[re.jsxs("div",{className:"toc-content",children:[re.jsx("div",{className:"toc-title",children:"Contents"}),re.jsx("div",{className:"toc-ornament",children:"✦ ✧ ✦"}),re.jsx("div",{className:"toc-entries",children:i.map((r,o)=>re.jsxs("div",{className:"toc-entry",onClick:()=>n?.(r.spreadIndex),children:[re.jsx("span",{className:"toc-entry-name",children:r.name}),re.jsx("span",{className:"toc-entry-dots"}),re.jsx("span",{className:"toc-entry-page",children:r.pageNumber})]},o))})]}),re.jsx("div",{className:"page-number",children:e})]})}const yc=760;function zU(i,e){const n=[];n.push({type:"cover",title:"The Elixir Codex",ornament:"✦ ✧ ✦",desc:"A compendium of rare and wondrous elixirs, transcribed by silver stylus upon aged vellum. Herein lie the secrets of the apothecary's art."}),n.push({type:"toc"});const r=[];for(const u of i){if(u.offset===0){const c=e[u.potionIndex];r.push({name:c.meta.name,subtitle:c.meta.subtitle,pageNumber:n.length+1,spreadIndex:Math.floor(n.length/2)})}n.push({type:"elixir",potionIndex:u.potionIndex,offset:u.offset})}n.push({type:"cover",title:"Finis Libri",ornament:"✦ ✧ ✦",desc:"Thus concludes this volume of the Codex. May the knowledge herein serve thee well, and may thy hand remain steady in the art of the apothecary."}),n.length%2!==0&&n.push({type:"blank"});const o=[];for(let u=0;u<n.length;u+=2)o.push({left:n[u],right:n[u+1]});return{spreads:o,tocEntries:r}}function qd({slot:i,potions:e,pageNumber:n,tocEntries:r,onJump:o}){return i.type==="cover"?re.jsx(PU,{title:i.title,ornament:i.ornament,desc:i.desc,pageNumber:n}):i.type==="toc"?re.jsx(IU,{entries:r??[],pageNumber:n,onJump:o}):i.type==="blank"?re.jsx("div",{className:"page-number",children:n}):re.jsx(OU,{potion:e[i.potionIndex],offset:i.offset,pageNumber:n})}function FU(){const i=un.useMemo(()=>hR(),[]),e=un.useRef(null),[n,r]=un.useState(null);un.useEffect(()=>{document.fonts.ready.then(()=>{if(!e.current)return;const G=e.current.children,A=[];i.forEach((z,T)=>{const N=G[T];if(!N)return;const ce=N.scrollHeight;if(ce<=yc){A.push({potionIndex:T,offset:0});return}const k=N.getBoundingClientRect(),q=[0],te=H=>{q.push(H.getBoundingClientRect().bottom-k.top)};for(const H of Array.from(N.children))te(H);const ee=N.querySelector(".elixir-body");if(ee){for(const H of Array.from(ee.children))if(te(H),H.tagName==="OL"||H.tagName==="UL")for(const le of Array.from(H.children))te(le)}const X=[...new Set(q)].sort((H,le)=>H-le);let I=0;for(;I<ce;){A.push({potionIndex:T,offset:I});const H=I+yc;let le=I+yc;for(let ge=X.length-1;ge>=0;ge--)if(X[ge]<=H&&X[ge]>I){le=X[ge];break}if(le<=I&&(le=I+yc),ce-le<60)break;I=le}}),r(A)})},[i]);const{spreads:o,tocEntries:u}=un.useMemo(()=>n?zU(n,i):{spreads:[],tocEntries:[]},[n,i]),c=o.length,[h,m]=un.useState(0),[d,g]=un.useState(new Set),[v,_]=un.useState(null),[x,b]=un.useState(null),[C,M]=un.useState(1),y=un.useRef(void 0);un.useEffect(()=>{o.length>0&&x===null&&b(o[0].left)},[o,x]);const D=un.useCallback(G=>{if(G<0||G>=c||G===h)return;clearTimeout(y.current);const A=new Set;for(let z=0;z<G;z++)A.add(z);g(A),m(G),b(o[G].left),M(G*2+1),_(null)},[h,c,o]),U=un.useCallback(()=>{if(c===0||h>=c-1)return;const G=h;_(G),g(z=>new Set(z).add(G));const A=h+1;m(A),clearTimeout(y.current),y.current=setTimeout(()=>{b(o[A].left),M(A*2+1),_(null)},600)},[h,c,o]),P=un.useCallback(()=>{if(h<=0)return;const G=h-1;_(G),g(A=>{const z=new Set(A);return z.delete(G),z}),m(G),b(o[G].left),M(G*2+1),clearTimeout(y.current),y.current=setTimeout(()=>{_(null)},1e3)},[h,o]);return un.useEffect(()=>{const G=A=>{(A.key==="ArrowRight"||A.key===" ")&&U(),A.key==="ArrowLeft"&&P(),A.key==="Home"&&D(0),A.key==="End"&&D(c-1)};return window.addEventListener("keydown",G),()=>window.removeEventListener("keydown",G)},[U,P,D,c]),un.useEffect(()=>()=>clearTimeout(y.current),[]),re.jsxs(re.Fragment,{children:[re.jsx("div",{ref:e,"aria-hidden":!0,style:{position:"absolute",left:-9999,top:0,width:535,visibility:"hidden",pointerEvents:"none"},children:i.map((G,A)=>re.jsx("div",{children:re.jsx(pS,{potion:G})},A))}),o.length>0&&x&&re.jsxs(re.Fragment,{children:[re.jsx("div",{className:"book-title-label",children:"The Elixir Codex"}),re.jsxs("div",{className:"book-container",children:[re.jsx("div",{className:"book-shadow"}),re.jsxs("div",{className:"book",children:[re.jsx("div",{className:"static-page",children:re.jsx(qd,{slot:x,potions:i,pageNumber:C,tocEntries:u,onJump:D})}),Array.from({length:c-1},(G,A)=>{const z=d.has(A),T=v===A,N=T?100:z?0:c-A;return re.jsxs("div",{className:`page${z?" flipped":""}${T?" active":""}`,style:{zIndex:N},children:[re.jsx("div",{className:"page-front",children:re.jsx(qd,{slot:o[A].right,potions:i,pageNumber:A*2+2,tocEntries:u,onJump:D})}),re.jsx("div",{className:"page-back",children:re.jsx(qd,{slot:o[A+1].left,potions:i,pageNumber:A*2+3,tocEntries:u,onJump:D})})]},A)})]})]}),re.jsx("button",{className:"nav-arrow nav-prev",onClick:P,disabled:h===0,children:re.jsx(Qw,{})}),re.jsx("button",{className:"nav-arrow nav-next",onClick:U,disabled:h===c-1,children:re.jsx(Jw,{})}),re.jsxs("div",{className:"page-controls",children:[re.jsx("button",{className:"page-jump-btn",onClick:()=>D(0),disabled:h===0,title:"First page",children:"❚‹"}),re.jsx("button",{className:"page-jump-btn",onClick:P,disabled:h===0,title:"Previous page",children:"‹"}),re.jsx("select",{className:"page-select",value:h,onChange:G=>D(Number(G.target.value)),children:o.map((G,A)=>re.jsxs("option",{value:A,children:[A*2+1," – ",A*2+2]},A))}),re.jsxs("span",{className:"page-of",children:["of ",c*2]}),re.jsx("button",{className:"page-jump-btn",onClick:U,disabled:h===c-1,title:"Next page",children:"›"}),re.jsx("button",{className:"page-jump-btn",onClick:()=>D(c-1),disabled:h===c-1,title:"Last page",children:"›❚"})]})]})]})}function BU(){return re.jsxs(re.Fragment,{children:[re.jsx(Vw,{}),re.jsxs("div",{className:"mobile-notice",children:[re.jsx("div",{className:"mobile-notice-title",children:"The Elixir Codex"}),re.jsx("div",{className:"mobile-notice-ornament",children:"✦ ✧ ✦"}),re.jsxs("div",{className:"mobile-notice-text",children:["This tome refuses to be read on a device this small.",re.jsx("br",{}),re.jsx("em",{children:"Seek a wider screen, traveller."})]})]}),re.jsx("div",{className:"book-wrapper",children:re.jsx(FU,{})})]})}wb.createRoot(document.getElementById("root")).render(re.jsx(un.StrictMode,{children:re.jsx(BU,{})}));
