(function(){const R=document.createElement("link").relList;if(R&&R.supports&&R.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))d(C);new MutationObserver(C=>{for(const L of C)if(L.type==="childList")for(const q of L.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&d(q)}).observe(document,{childList:!0,subtree:!0});function T(C){const L={};return C.integrity&&(L.integrity=C.integrity),C.referrerPolicy&&(L.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?L.credentials="include":C.crossOrigin==="anonymous"?L.credentials="omit":L.credentials="same-origin",L}function d(C){if(C.ep)return;C.ep=!0;const L=T(C);fetch(C.href,L)}})();function hg(m){return m&&m.__esModule&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m}var ds={exports:{}},G={};var Mf;function pg(){if(Mf)return G;Mf=1;var m=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),q=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),X=Symbol.iterator;function mt(u){return u===null||typeof u!="object"?null:(u=X&&u[X]||u["@@iterator"],typeof u=="function"?u:null)}var Ht={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mt=Object.assign,ye={};function jt(u,S,M){this.props=u,this.context=S,this.refs=ye,this.updater=M||Ht}jt.prototype.isReactComponent={},jt.prototype.setState=function(u,S){if(typeof u!="object"&&typeof u!="function"&&u!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,u,S,"setState")},jt.prototype.forceUpdate=function(u){this.updater.enqueueForceUpdate(this,u,"forceUpdate")};function xe(){}xe.prototype=jt.prototype;function ct(u,S,M){this.props=u,this.context=S,this.refs=ye,this.updater=M||Ht}var ut=ct.prototype=new xe;ut.constructor=ct,Mt(ut,jt.prototype),ut.isPureReactComponent=!0;var se=Array.isArray;function Ot(){}var V={H:null,A:null,T:null,S:null},Dt=Object.prototype.hasOwnProperty;function Wt(u,S,M){var D=M.ref;return{$$typeof:m,type:u,key:S,ref:D!==void 0?D:null,props:M}}function qn(u,S){return Wt(u.type,S,u.props)}function Re(u){return typeof u=="object"&&u!==null&&u.$$typeof===m}function Xt(u){var S={"=":"=0",":":"=2"};return"$"+u.replace(/[=:]/g,function(M){return S[M]})}var En=/\/+/g;function Ce(u,S){return typeof u=="object"&&u!==null&&u.key!=null?Xt(""+u.key):S.toString(36)}function we(u){switch(u.status){case"fulfilled":return u.value;case"rejected":throw u.reason;default:switch(typeof u.status=="string"?u.then(Ot,Ot):(u.status="pending",u.then(function(S){u.status==="pending"&&(u.status="fulfilled",u.value=S)},function(S){u.status==="pending"&&(u.status="rejected",u.reason=S)})),u.status){case"fulfilled":return u.value;case"rejected":throw u.reason}}throw u}function y(u,S,M,D,j){var Z=typeof u;(Z==="undefined"||Z==="boolean")&&(u=null);var nt=!1;if(u===null)nt=!0;else switch(Z){case"bigint":case"string":case"number":nt=!0;break;case"object":switch(u.$$typeof){case m:case R:nt=!0;break;case O:return nt=u._init,y(nt(u._payload),S,M,D,j)}}if(nt)return j=j(u),nt=D===""?"."+Ce(u,0):D,se(j)?(M="",nt!=null&&(M=nt.replace(En,"$&/")+"/"),y(j,S,M,"",function(Ma){return Ma})):j!=null&&(Re(j)&&(j=qn(j,M+(j.key==null||u&&u.key===j.key?"":(""+j.key).replace(En,"$&/")+"/")+nt)),S.push(j)),1;nt=0;var qt=D===""?".":D+":";if(se(u))for(var xt=0;xt<u.length;xt++)D=u[xt],Z=qt+Ce(D,xt),nt+=y(D,S,M,Z,j);else if(xt=mt(u),typeof xt=="function")for(u=xt.call(u),xt=0;!(D=u.next()).done;)D=D.value,Z=qt+Ce(D,xt++),nt+=y(D,S,M,Z,j);else if(Z==="object"){if(typeof u.then=="function")return y(we(u),S,M,D,j);throw S=String(u),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}return nt}function A(u,S,M){if(u==null)return u;var D=[],j=0;return y(u,D,"","",function(Z){return S.call(M,Z,j++)}),D}function U(u){if(u._status===-1){var S=u._result;S=S(),S.then(function(M){(u._status===0||u._status===-1)&&(u._status=1,u._result=M)},function(M){(u._status===0||u._status===-1)&&(u._status=2,u._result=M)}),u._status===-1&&(u._status=0,u._result=S)}if(u._status===1)return u._result.default;throw u._result}var it=typeof reportError=="function"?reportError:function(u){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var S=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof u=="object"&&u!==null&&typeof u.message=="string"?String(u.message):String(u),error:u});if(!window.dispatchEvent(S))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",u);return}console.error(u)},dt={map:A,forEach:function(u,S,M){A(u,function(){S.apply(this,arguments)},M)},count:function(u){var S=0;return A(u,function(){S++}),S},toArray:function(u){return A(u,function(S){return S})||[]},only:function(u){if(!Re(u))throw Error("React.Children.only expected to receive a single React element child.");return u}};return G.Activity=H,G.Children=dt,G.Component=jt,G.Fragment=T,G.Profiler=C,G.PureComponent=ct,G.StrictMode=d,G.Suspense=z,G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,G.__COMPILER_RUNTIME={__proto__:null,c:function(u){return V.H.useMemoCache(u)}},G.cache=function(u){return function(){return u.apply(null,arguments)}},G.cacheSignal=function(){return null},G.cloneElement=function(u,S,M){if(u==null)throw Error("The argument must be a React element, but you passed "+u+".");var D=Mt({},u.props),j=u.key;if(S!=null)for(Z in S.key!==void 0&&(j=""+S.key),S)!Dt.call(S,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&S.ref===void 0||(D[Z]=S[Z]);var Z=arguments.length-2;if(Z===1)D.children=M;else if(1<Z){for(var nt=Array(Z),qt=0;qt<Z;qt++)nt[qt]=arguments[qt+2];D.children=nt}return Wt(u.type,j,D)},G.createContext=function(u){return u={$$typeof:q,_currentValue:u,_currentValue2:u,_threadCount:0,Provider:null,Consumer:null},u.Provider=u,u.Consumer={$$typeof:L,_context:u},u},G.createElement=function(u,S,M){var D,j={},Z=null;if(S!=null)for(D in S.key!==void 0&&(Z=""+S.key),S)Dt.call(S,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(j[D]=S[D]);var nt=arguments.length-2;if(nt===1)j.children=M;else if(1<nt){for(var qt=Array(nt),xt=0;xt<nt;xt++)qt[xt]=arguments[xt+2];j.children=qt}if(u&&u.defaultProps)for(D in nt=u.defaultProps,nt)j[D]===void 0&&(j[D]=nt[D]);return Wt(u,Z,j)},G.createRef=function(){return{current:null}},G.forwardRef=function(u){return{$$typeof:Q,render:u}},G.isValidElement=Re,G.lazy=function(u){return{$$typeof:O,_payload:{_status:-1,_result:u},_init:U}},G.memo=function(u,S){return{$$typeof:w,type:u,compare:S===void 0?null:S}},G.startTransition=function(u){var S=V.T,M={};V.T=M;try{var D=u(),j=V.S;j!==null&&j(M,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(Ot,it)}catch(Z){it(Z)}finally{S!==null&&M.types!==null&&(S.types=M.types),V.T=S}},G.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},G.use=function(u){return V.H.use(u)},G.useActionState=function(u,S,M){return V.H.useActionState(u,S,M)},G.useCallback=function(u,S){return V.H.useCallback(u,S)},G.useContext=function(u){return V.H.useContext(u)},G.useDebugValue=function(){},G.useDeferredValue=function(u,S){return V.H.useDeferredValue(u,S)},G.useEffect=function(u,S){return V.H.useEffect(u,S)},G.useEffectEvent=function(u){return V.H.useEffectEvent(u)},G.useId=function(){return V.H.useId()},G.useImperativeHandle=function(u,S,M){return V.H.useImperativeHandle(u,S,M)},G.useInsertionEffect=function(u,S){return V.H.useInsertionEffect(u,S)},G.useLayoutEffect=function(u,S){return V.H.useLayoutEffect(u,S)},G.useMemo=function(u,S){return V.H.useMemo(u,S)},G.useOptimistic=function(u,S){return V.H.useOptimistic(u,S)},G.useReducer=function(u,S,M){return V.H.useReducer(u,S,M)},G.useRef=function(u){return V.H.useRef(u)},G.useState=function(u){return V.H.useState(u)},G.useSyncExternalStore=function(u,S,M){return V.H.useSyncExternalStore(u,S,M)},G.useTransition=function(){return V.H.useTransition()},G.version="19.2.0",G}var zf;function Ts(){return zf||(zf=1,ds.exports=pg()),ds.exports}var Sl=Ts();const ws=hg(Sl);var fs={exports:{}},xl={},hs={exports:{}},ps={};var Hf;function gg(){return Hf||(Hf=1,(function(m){function R(y,A){var U=y.length;y.push(A);t:for(;0<U;){var it=U-1>>>1,dt=y[it];if(0<C(dt,A))y[it]=A,y[U]=dt,U=it;else break t}}function T(y){return y.length===0?null:y[0]}function d(y){if(y.length===0)return null;var A=y[0],U=y.pop();if(U!==A){y[0]=U;t:for(var it=0,dt=y.length,u=dt>>>1;it<u;){var S=2*(it+1)-1,M=y[S],D=S+1,j=y[D];if(0>C(M,U))D<dt&&0>C(j,M)?(y[it]=j,y[D]=U,it=D):(y[it]=M,y[S]=U,it=S);else if(D<dt&&0>C(j,U))y[it]=j,y[D]=U,it=D;else break t}}return A}function C(y,A){var U=y.sortIndex-A.sortIndex;return U!==0?U:y.id-A.id}if(m.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var L=performance;m.unstable_now=function(){return L.now()}}else{var q=Date,Q=q.now();m.unstable_now=function(){return q.now()-Q}}var z=[],w=[],O=1,H=null,X=3,mt=!1,Ht=!1,Mt=!1,ye=!1,jt=typeof setTimeout=="function"?setTimeout:null,xe=typeof clearTimeout=="function"?clearTimeout:null,ct=typeof setImmediate<"u"?setImmediate:null;function ut(y){for(var A=T(w);A!==null;){if(A.callback===null)d(w);else if(A.startTime<=y)d(w),A.sortIndex=A.expirationTime,R(z,A);else break;A=T(w)}}function se(y){if(Mt=!1,ut(y),!Ht)if(T(z)!==null)Ht=!0,Ot||(Ot=!0,Xt());else{var A=T(w);A!==null&&we(se,A.startTime-y)}}var Ot=!1,V=-1,Dt=5,Wt=-1;function qn(){return ye?!0:!(m.unstable_now()-Wt<Dt)}function Re(){if(ye=!1,Ot){var y=m.unstable_now();Wt=y;var A=!0;try{t:{Ht=!1,Mt&&(Mt=!1,xe(V),V=-1),mt=!0;var U=X;try{e:{for(ut(y),H=T(z);H!==null&&!(H.expirationTime>y&&qn());){var it=H.callback;if(typeof it=="function"){H.callback=null,X=H.priorityLevel;var dt=it(H.expirationTime<=y);if(y=m.unstable_now(),typeof dt=="function"){H.callback=dt,ut(y),A=!0;break e}H===T(z)&&d(z),ut(y)}else d(z);H=T(z)}if(H!==null)A=!0;else{var u=T(w);u!==null&&we(se,u.startTime-y),A=!1}}break t}finally{H=null,X=U,mt=!1}A=void 0}}finally{A?Xt():Ot=!1}}}var Xt;if(typeof ct=="function")Xt=function(){ct(Re)};else if(typeof MessageChannel<"u"){var En=new MessageChannel,Ce=En.port2;En.port1.onmessage=Re,Xt=function(){Ce.postMessage(null)}}else Xt=function(){jt(Re,0)};function we(y,A){V=jt(function(){y(m.unstable_now())},A)}m.unstable_IdlePriority=5,m.unstable_ImmediatePriority=1,m.unstable_LowPriority=4,m.unstable_NormalPriority=3,m.unstable_Profiling=null,m.unstable_UserBlockingPriority=2,m.unstable_cancelCallback=function(y){y.callback=null},m.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Dt=0<y?Math.floor(1e3/y):5},m.unstable_getCurrentPriorityLevel=function(){return X},m.unstable_next=function(y){switch(X){case 1:case 2:case 3:var A=3;break;default:A=X}var U=X;X=A;try{return y()}finally{X=U}},m.unstable_requestPaint=function(){ye=!0},m.unstable_runWithPriority=function(y,A){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var U=X;X=y;try{return A()}finally{X=U}},m.unstable_scheduleCallback=function(y,A,U){var it=m.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?it+U:it):U=it,y){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=U+dt,y={id:O++,callback:A,priorityLevel:y,startTime:U,expirationTime:dt,sortIndex:-1},U>it?(y.sortIndex=U,R(w,y),T(z)===null&&y===T(w)&&(Mt?(xe(V),V=-1):Mt=!0,we(se,U-it))):(y.sortIndex=dt,R(z,y),Ht||mt||(Ht=!0,Ot||(Ot=!0,Xt()))),y},m.unstable_shouldYield=qn,m.unstable_wrapCallback=function(y){var A=X;return function(){var U=X;X=A;try{return y.apply(this,arguments)}finally{X=U}}}})(ps)),ps}var Cf;function mg(){return Cf||(Cf=1,hs.exports=gg()),hs.exports}var gs={exports:{}},Gt={};var kf;function bg(){if(kf)return Gt;kf=1;var m=Ts();function R(z){var w="https://react.dev/errors/"+z;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)w+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+z+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function T(){}var d={d:{f:T,r:function(){throw Error(R(522))},D:T,C:T,L:T,m:T,X:T,S:T,M:T},p:0,findDOMNode:null},C=Symbol.for("react.portal");function L(z,w,O){var H=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:H==null?null:""+H,children:z,containerInfo:w,implementation:O}}var q=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Q(z,w){if(z==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return Gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Gt.createPortal=function(z,w){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(R(299));return L(z,w,null,O)},Gt.flushSync=function(z){var w=q.T,O=d.p;try{if(q.T=null,d.p=2,z)return z()}finally{q.T=w,d.p=O,d.d.f()}},Gt.preconnect=function(z,w){typeof z=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,d.d.C(z,w))},Gt.prefetchDNS=function(z){typeof z=="string"&&d.d.D(z)},Gt.preinit=function(z,w){if(typeof z=="string"&&w&&typeof w.as=="string"){var O=w.as,H=Q(O,w.crossOrigin),X=typeof w.integrity=="string"?w.integrity:void 0,mt=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;O==="style"?d.d.S(z,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:H,integrity:X,fetchPriority:mt}):O==="script"&&d.d.X(z,{crossOrigin:H,integrity:X,fetchPriority:mt,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},Gt.preinitModule=function(z,w){if(typeof z=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var O=Q(w.as,w.crossOrigin);d.d.M(z,{crossOrigin:O,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&d.d.M(z)},Gt.preload=function(z,w){if(typeof z=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var O=w.as,H=Q(O,w.crossOrigin);d.d.L(z,O,{crossOrigin:H,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},Gt.preloadModule=function(z,w){if(typeof z=="string")if(w){var O=Q(w.as,w.crossOrigin);d.d.m(z,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:O,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else d.d.m(z)},Gt.requestFormReset=function(z){d.d.r(z)},Gt.unstable_batchedUpdates=function(z,w){return z(w)},Gt.useFormState=function(z,w,O){return q.H.useFormState(z,w,O)},Gt.useFormStatus=function(){return q.H.useHostTransitionStatus()},Gt.version="19.2.0",Gt}var Of;function vg(){if(Of)return gs.exports;Of=1;function m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m)}catch(R){console.error(R)}}return m(),gs.exports=bg(),gs.exports}var Df;function yg(){if(Df)return xl;Df=1;var m=mg(),R=Ts(),T=vg();function d(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function L(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function q(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Q(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function z(t){if(L(t)!==t)throw Error(d(188))}function w(t){var e=t.alternate;if(!e){if(e=L(t),e===null)throw Error(d(188));return e!==t?null:t}for(var n=t,a=e;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return z(l),t;if(i===a)return z(l),e;i=i.sibling}throw Error(d(188))}if(n.return!==a.return)n=l,a=i;else{for(var o=!1,r=l.child;r;){if(r===n){o=!0,n=l,a=i;break}if(r===a){o=!0,a=l,n=i;break}r=r.sibling}if(!o){for(r=i.child;r;){if(r===n){o=!0,n=i,a=l;break}if(r===a){o=!0,a=i,n=l;break}r=r.sibling}if(!o)throw Error(d(189))}}if(n.alternate!==a)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?t:e}function O(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=O(t),e!==null)return e;t=t.sibling}return null}var H=Object.assign,X=Symbol.for("react.element"),mt=Symbol.for("react.transitional.element"),Ht=Symbol.for("react.portal"),Mt=Symbol.for("react.fragment"),ye=Symbol.for("react.strict_mode"),jt=Symbol.for("react.profiler"),xe=Symbol.for("react.consumer"),ct=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),Ot=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),Wt=Symbol.for("react.activity"),qn=Symbol.for("react.memo_cache_sentinel"),Re=Symbol.iterator;function Xt(t){return t===null||typeof t!="object"?null:(t=Re&&t[Re]||t["@@iterator"],typeof t=="function"?t:null)}var En=Symbol.for("react.client.reference");function Ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===En?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Mt:return"Fragment";case jt:return"Profiler";case ye:return"StrictMode";case se:return"Suspense";case Ot:return"SuspenseList";case Wt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Ht:return"Portal";case ct:return t.displayName||"Context";case xe:return(t._context.displayName||"Context")+".Consumer";case ut:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case V:return e=t.displayName||null,e!==null?e:Ce(t.type)||"Memo";case Dt:e=t._payload,t=t._init;try{return Ce(t(e))}catch{}}return null}var we=Array.isArray,y=R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=T.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},it=[],dt=-1;function u(t){return{current:t}}function S(t){0>dt||(t.current=it[dt],it[dt]=null,dt--)}function M(t,e){dt++,it[dt]=t.current,t.current=e}var D=u(null),j=u(null),Z=u(null),nt=u(null);function qt(t,e){switch(M(Z,e),M(j,t),M(D,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Kd(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Kd(e),t=Jd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}S(D),M(D,t)}function xt(){S(D),S(j),S(Z)}function Ma(t){t.memoizedState!==null&&M(nt,t);var e=D.current,n=Jd(e,t.type);e!==n&&(M(j,t),M(D,n))}function Tl(t){j.current===t&&(S(D),S(j)),nt.current===t&&(S(nt),ml._currentValue=U)}var Qi,Rs;function Sn(t){if(Qi===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qi=e&&e[1]||"",Rs=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qi+t+Rs}var Zi=!1;function Fi(t,e){if(!t||Zi)return"";Zi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(b){var g=b}Reflect.construct(t,[],E)}else{try{E.call()}catch(b){g=b}t.call(E.prototype)}}else{try{throw Error()}catch(b){g=b}(E=t())&&typeof E.catch=="function"&&E.catch(function(){})}}catch(b){if(b&&g&&typeof b.stack=="string")return[b.stack,g.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],r=i[1];if(o&&r){var s=o.split(`
`),p=r.split(`
`);for(l=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;if(a===s.length||l===p.length)for(a=s.length-1,l=p.length-1;1<=a&&0<=l&&s[a]!==p[l];)l--;for(;1<=a&&0<=l;a--,l--)if(s[a]!==p[l]){if(a!==1||l!==1)do if(a--,l--,0>l||s[a]!==p[l]){var v=`
`+s[a].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=a&&0<=l);break}}}finally{Zi=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Sn(n):""}function Xf(t,e){switch(t.tag){case 26:case 27:case 5:return Sn(t.type);case 16:return Sn("Lazy");case 13:return t.child!==e&&e!==null?Sn("Suspense Fallback"):Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 15:return Fi(t.type,!1);case 11:return Fi(t.type.render,!1);case 1:return Fi(t.type,!0);case 31:return Sn("Activity");default:return""}}function As(t){try{var e="",n=null;do e+=Xf(t,n),n=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ki=Object.prototype.hasOwnProperty,Ji=m.unstable_scheduleCallback,$i=m.unstable_cancelCallback,Vf=m.unstable_shouldYield,Qf=m.unstable_requestPaint,Pt=m.unstable_now,Zf=m.unstable_getCurrentPriorityLevel,Ms=m.unstable_ImmediatePriority,zs=m.unstable_UserBlockingPriority,Rl=m.unstable_NormalPriority,Ff=m.unstable_LowPriority,Hs=m.unstable_IdlePriority,Kf=m.log,Jf=m.unstable_setDisableYieldValue,za=null,It=null;function Je(t){if(typeof Kf=="function"&&Jf(t),It&&typeof It.setStrictMode=="function")try{It.setStrictMode(za,t)}catch{}}var te=Math.clz32?Math.clz32:If,$f=Math.log,Pf=Math.LN2;function If(t){return t>>>=0,t===0?32:31-($f(t)/Pf|0)|0}var Al=256,Ml=262144,zl=4194304;function Tn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Hl(t,e,n){var a=t.pendingLanes;if(a===0)return 0;var l=0,i=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var r=a&134217727;return r!==0?(a=r&~i,a!==0?l=Tn(a):(o&=r,o!==0?l=Tn(o):n||(n=r&~t,n!==0&&(l=Tn(n))))):(r=a&~i,r!==0?l=Tn(r):o!==0?l=Tn(o):n||(n=a&~t,n!==0&&(l=Tn(n)))),l===0?0:e!==0&&e!==l&&(e&i)===0&&(i=l&-l,n=e&-e,i>=n||i===32&&(n&4194048)!==0)?e:l}function Ha(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function th(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cs(){var t=zl;return zl<<=1,(zl&62914560)===0&&(zl=4194304),t}function Pi(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ca(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function eh(t,e,n,a,l,i){var o=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var r=t.entanglements,s=t.expirationTimes,p=t.hiddenUpdates;for(n=o&~n;0<n;){var v=31-te(n),E=1<<v;r[v]=0,s[v]=-1;var g=p[v];if(g!==null)for(p[v]=null,v=0;v<g.length;v++){var b=g[v];b!==null&&(b.lane&=-536870913)}n&=~E}a!==0&&ks(t,a,0),i!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=i&~(o&~e))}function ks(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-te(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|n&261930}function Os(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-te(n),l=1<<a;l&e|t[a]&e&&(t[a]|=e),n&=~l}}function Ds(t,e){var n=e&-e;return n=(n&42)!==0?1:Ii(n),(n&(t.suspendedLanes|e))!==0?0:n}function Ii(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function to(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function _s(){var t=A.p;return t!==0?t:(t=window.event,t===void 0?32:xf(t.type))}function Ls(t,e){var n=A.p;try{return A.p=t,e()}finally{A.p=n}}var $e=Math.random().toString(36).slice(2),_t="__reactFiber$"+$e,Vt="__reactProps$"+$e,Yn="__reactContainer$"+$e,eo="__reactEvents$"+$e,nh="__reactListeners$"+$e,ah="__reactHandles$"+$e,Ns="__reactResources$"+$e,ka="__reactMarker$"+$e;function no(t){delete t[_t],delete t[Vt],delete t[eo],delete t[nh],delete t[ah]}function Xn(t){var e=t[_t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yn]||n[_t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=af(t);t!==null;){if(n=t[_t])return n;t=af(t)}return e}t=n,n=t.parentNode}return null}function Vn(t){if(t=t[_t]||t[Yn]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Oa(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(d(33))}function Qn(t){var e=t[Ns];return e||(e=t[Ns]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ct(t){t[ka]=!0}var Bs=new Set,Us={};function Rn(t,e){Zn(t,e),Zn(t+"Capture",e)}function Zn(t,e){for(Us[t]=e,t=0;t<e.length;t++)Bs.add(e[t])}var lh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gs={},js={};function ih(t){return Ki.call(js,t)?!0:Ki.call(Gs,t)?!1:lh.test(t)?js[t]=!0:(Gs[t]=!0,!1)}function Cl(t,e,n){if(ih(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function kl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function ke(t,e,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+a)}}function ce(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ws(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function oh(t,e,n){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(o){n=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ao(t){if(!t._valueTracker){var e=Ws(t)?"checked":"value";t._valueTracker=oh(t,e,""+t[e])}}function qs(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=Ws(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}function Ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var rh=/[\n"\\]/g;function ue(t){return t.replace(rh,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function lo(t,e,n,a,l,i,o,r){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),e!=null?o==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ce(e)):t.value!==""+ce(e)&&(t.value=""+ce(e)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),e!=null?io(t,o,ce(e)):n!=null?io(t,o,ce(n)):a!=null&&t.removeAttribute("value"),l==null&&i!=null&&(t.defaultChecked=!!i),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.name=""+ce(r):t.removeAttribute("name")}function Ys(t,e,n,a,l,i,o,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){ao(t);return}n=n!=null?""+ce(n):"",e=e!=null?""+ce(e):n,r||e===t.value||(t.value=e),t.defaultValue=e}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=r?t.checked:!!a,t.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),ao(t)}function io(t,e,n){e==="number"&&Ol(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Fn(t,e,n,a){if(t=t.options,e){e={};for(var l=0;l<n.length;l++)e["$"+n[l]]=!0;for(n=0;n<t.length;n++)l=e.hasOwnProperty("$"+t[n].value),t[n].selected!==l&&(t[n].selected=l),l&&a&&(t[n].defaultSelected=!0)}else{for(n=""+ce(n),e=null,l=0;l<t.length;l++){if(t[l].value===n){t[l].selected=!0,a&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function Xs(t,e,n){if(e!=null&&(e=""+ce(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+ce(n):""}function Vs(t,e,n,a){if(e==null){if(a!=null){if(n!=null)throw Error(d(92));if(we(a)){if(1<a.length)throw Error(d(93));a=a[0]}n=a}n==null&&(n=""),e=n}n=ce(e),t.defaultValue=n,a=t.textContent,a===n&&a!==""&&a!==null&&(t.value=a),ao(t)}function Kn(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var sh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qs(t,e,n){var a=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,n):typeof n!="number"||n===0||sh.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Zs(t,e,n){if(e!=null&&typeof e!="object")throw Error(d(62));if(t=t.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var l in e)a=e[l],e.hasOwnProperty(l)&&n[l]!==a&&Qs(t,l,a)}else for(var i in e)e.hasOwnProperty(i)&&Qs(t,i,e[i])}function oo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ch=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),uh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dl(t){return uh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Oe(){}var ro=null;function so(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jn=null,$n=null;function Fs(t){var e=Vn(t);if(e&&(t=e.stateNode)){var n=t[Vt]||null;t:switch(t=e.stateNode,e.type){case"input":if(lo(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ue(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var l=a[Vt]||null;if(!l)throw Error(d(90));lo(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<n.length;e++)a=n[e],a.form===t.form&&qs(a)}break t;case"textarea":Xs(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Fn(t,!!n.multiple,e,!1)}}}var co=!1;function Ks(t,e,n){if(co)return t(e,n);co=!0;try{var a=t(e);return a}finally{if(co=!1,(Jn!==null||$n!==null)&&(xi(),Jn&&(e=Jn,t=$n,$n=Jn=null,Fs(e),t)))for(e=0;e<t.length;e++)Fs(t[e])}}function Da(t,e){var n=t.stateNode;if(n===null)return null;var a=n[Vt]||null;if(a===null)return null;n=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(d(231,e,typeof n));return n}var De=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uo=!1;if(De)try{var _a={};Object.defineProperty(_a,"passive",{get:function(){uo=!0}}),window.addEventListener("test",_a,_a),window.removeEventListener("test",_a,_a)}catch{uo=!1}var Pe=null,fo=null,_l=null;function Js(){if(_l)return _l;var t,e=fo,n=e.length,a,l="value"in Pe?Pe.value:Pe.textContent,i=l.length;for(t=0;t<n&&e[t]===l[t];t++);var o=n-t;for(a=1;a<=o&&e[n-a]===l[i-a];a++);return _l=l.slice(t,1<a?1-a:void 0)}function Ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Nl(){return!0}function $s(){return!1}function Qt(t){function e(n,a,l,i,o){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var r in t)t.hasOwnProperty(r)&&(n=t[r],this[r]=n?n(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Nl:$s,this.isPropagationStopped=$s,this}return H(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),e}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=Qt(An),La=H({},An,{view:0,detail:0}),dh=Qt(La),ho,po,Na,Ul=H({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Na&&(Na&&t.type==="mousemove"?(ho=t.screenX-Na.screenX,po=t.screenY-Na.screenY):po=ho=0,Na=t),ho)},movementY:function(t){return"movementY"in t?t.movementY:po}}),Ps=Qt(Ul),fh=H({},Ul,{dataTransfer:0}),hh=Qt(fh),ph=H({},La,{relatedTarget:0}),go=Qt(ph),gh=H({},An,{animationName:0,elapsedTime:0,pseudoElement:0}),mh=Qt(gh),bh=H({},An,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vh=Qt(bh),yh=H({},An,{data:0}),Is=Qt(yh),xh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sh(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Eh[t])?!!e[t]:!1}function mo(){return Sh}var Th=H({},La,{key:function(t){if(t.key){var e=xh[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mo,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Rh=Qt(Th),Ah=H({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tc=Qt(Ah),Mh=H({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mo}),zh=Qt(Mh),Hh=H({},An,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ch=Qt(Hh),kh=H({},Ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Oh=Qt(kh),Dh=H({},An,{newState:0,oldState:0}),_h=Qt(Dh),Lh=[9,13,27,32],bo=De&&"CompositionEvent"in window,Ba=null;De&&"documentMode"in document&&(Ba=document.documentMode);var Nh=De&&"TextEvent"in window&&!Ba,ec=De&&(!bo||Ba&&8<Ba&&11>=Ba),nc=" ",ac=!1;function lc(t,e){switch(t){case"keyup":return Lh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ic(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pn=!1;function Bh(t,e){switch(t){case"compositionend":return ic(e);case"keypress":return e.which!==32?null:(ac=!0,nc);case"textInput":return t=e.data,t===nc&&ac?null:t;default:return null}}function Uh(t,e){if(Pn)return t==="compositionend"||!bo&&lc(t,e)?(t=Js(),_l=fo=Pe=null,Pn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ec&&e.locale!=="ko"?null:e.data;default:return null}}var Gh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Gh[t.type]:e==="textarea"}function rc(t,e,n,a){Jn?$n?$n.push(a):$n=[a]:Jn=a,e=Mi(e,"onChange"),0<e.length&&(n=new Bl("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var Ua=null,Ga=null;function jh(t){Yd(t,0)}function Gl(t){var e=Oa(t);if(qs(e))return t}function sc(t,e){if(t==="change")return e}var cc=!1;if(De){var vo;if(De){var yo="oninput"in document;if(!yo){var uc=document.createElement("div");uc.setAttribute("oninput","return;"),yo=typeof uc.oninput=="function"}vo=yo}else vo=!1;cc=vo&&(!document.documentMode||9<document.documentMode)}function dc(){Ua&&(Ua.detachEvent("onpropertychange",fc),Ga=Ua=null)}function fc(t){if(t.propertyName==="value"&&Gl(Ga)){var e=[];rc(e,Ga,t,so(t)),Ks(jh,e)}}function Wh(t,e,n){t==="focusin"?(dc(),Ua=e,Ga=n,Ua.attachEvent("onpropertychange",fc)):t==="focusout"&&dc()}function qh(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gl(Ga)}function Yh(t,e){if(t==="click")return Gl(e)}function Xh(t,e){if(t==="input"||t==="change")return Gl(e)}function Vh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ee=typeof Object.is=="function"?Object.is:Vh;function ja(t,e){if(ee(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!Ki.call(e,l)||!ee(t[l],e[l]))return!1}return!0}function hc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pc(t,e){var n=hc(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=hc(n)}}function gc(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gc(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mc(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ol(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ol(t.document)}return e}function xo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Qh=De&&"documentMode"in document&&11>=document.documentMode,In=null,wo=null,Wa=null,Eo=!1;function bc(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eo||In==null||In!==Ol(a)||(a=In,"selectionStart"in a&&xo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Wa&&ja(Wa,a)||(Wa=a,a=Mi(wo,"onSelect"),0<a.length&&(e=new Bl("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=In)))}function Mn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ta={animationend:Mn("Animation","AnimationEnd"),animationiteration:Mn("Animation","AnimationIteration"),animationstart:Mn("Animation","AnimationStart"),transitionrun:Mn("Transition","TransitionRun"),transitionstart:Mn("Transition","TransitionStart"),transitioncancel:Mn("Transition","TransitionCancel"),transitionend:Mn("Transition","TransitionEnd")},So={},vc={};De&&(vc=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function zn(t){if(So[t])return So[t];if(!ta[t])return t;var e=ta[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vc)return So[t]=e[n];return t}var yc=zn("animationend"),xc=zn("animationiteration"),wc=zn("animationstart"),Zh=zn("transitionrun"),Fh=zn("transitionstart"),Kh=zn("transitioncancel"),Ec=zn("transitionend"),Sc=new Map,To="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");To.push("scrollEnd");function Ee(t,e){Sc.set(t,e),Rn(e,[t])}var jl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},de=[],ea=0,Ro=0;function Wl(){for(var t=ea,e=Ro=ea=0;e<t;){var n=de[e];de[e++]=null;var a=de[e];de[e++]=null;var l=de[e];de[e++]=null;var i=de[e];if(de[e++]=null,a!==null&&l!==null){var o=a.pending;o===null?l.next=l:(l.next=o.next,o.next=l),a.pending=l}i!==0&&Tc(n,l,i)}}function ql(t,e,n,a){de[ea++]=t,de[ea++]=e,de[ea++]=n,de[ea++]=a,Ro|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Ao(t,e,n,a){return ql(t,e,n,a),Yl(t)}function Hn(t,e){return ql(t,null,null,e),Yl(t)}function Tc(t,e,n){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=t.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(l=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,l&&e!==null&&(l=31-te(n),t=i.hiddenUpdates,a=t[l],a===null?t[l]=[e]:a.push(e),e.lane=n|536870912),i):null}function Yl(t){if(50<cl)throw cl=0,Lr=null,Error(d(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var na={};function Jh(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ne(t,e,n,a){return new Jh(t,e,n,a)}function Mo(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _e(t,e){var n=t.alternate;return n===null?(n=ne(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Rc(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Xl(t,e,n,a,l,i){var o=0;if(a=t,typeof t=="function")Mo(t)&&(o=1);else if(typeof t=="string")o=eg(t,n,D.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Wt:return t=ne(31,n,e,l),t.elementType=Wt,t.lanes=i,t;case Mt:return Cn(n.children,l,i,e);case ye:o=8,l|=24;break;case jt:return t=ne(12,n,e,l|2),t.elementType=jt,t.lanes=i,t;case se:return t=ne(13,n,e,l),t.elementType=se,t.lanes=i,t;case Ot:return t=ne(19,n,e,l),t.elementType=Ot,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ct:o=10;break t;case xe:o=9;break t;case ut:o=11;break t;case V:o=14;break t;case Dt:o=16,a=null;break t}o=29,n=Error(d(130,t===null?"null":typeof t,"")),a=null}return e=ne(o,n,e,l),e.elementType=t,e.type=a,e.lanes=i,e}function Cn(t,e,n,a){return t=ne(7,t,a,e),t.lanes=n,t}function zo(t,e,n){return t=ne(6,t,null,e),t.lanes=n,t}function Ac(t){var e=ne(18,null,null,0);return e.stateNode=t,e}function Ho(t,e,n){return e=ne(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Mc=new WeakMap;function fe(t,e){if(typeof t=="object"&&t!==null){var n=Mc.get(t);return n!==void 0?n:(e={value:t,source:e,stack:As(e)},Mc.set(t,e),e)}return{value:t,source:e,stack:As(e)}}var aa=[],la=0,Vl=null,qa=0,he=[],pe=0,Ie=null,Ae=1,Me="";function Le(t,e){aa[la++]=qa,aa[la++]=Vl,Vl=t,qa=e}function zc(t,e,n){he[pe++]=Ae,he[pe++]=Me,he[pe++]=Ie,Ie=t;var a=Ae;t=Me;var l=32-te(a)-1;a&=~(1<<l),n+=1;var i=32-te(e)+l;if(30<i){var o=l-l%5;i=(a&(1<<o)-1).toString(32),a>>=o,l-=o,Ae=1<<32-te(e)+l|n<<l|a,Me=i+t}else Ae=1<<i|n<<l|a,Me=t}function Co(t){t.return!==null&&(Le(t,1),zc(t,1,0))}function ko(t){for(;t===Vl;)Vl=aa[--la],aa[la]=null,qa=aa[--la],aa[la]=null;for(;t===Ie;)Ie=he[--pe],he[pe]=null,Me=he[--pe],he[pe]=null,Ae=he[--pe],he[pe]=null}function Hc(t,e){he[pe++]=Ae,he[pe++]=Me,he[pe++]=Ie,Ae=e.id,Me=e.overflow,Ie=t}var Lt=null,ht=null,P=!1,tn=null,ge=!1,Oo=Error(d(519));function en(t){var e=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ya(fe(e,t)),Oo}function Cc(t){var e=t.stateNode,n=t.type,a=t.memoizedProps;switch(e[_t]=t,e[Vt]=a,n){case"dialog":K("cancel",e),K("close",e);break;case"iframe":case"object":case"embed":K("load",e);break;case"video":case"audio":for(n=0;n<dl.length;n++)K(dl[n],e);break;case"source":K("error",e);break;case"img":case"image":case"link":K("error",e),K("load",e);break;case"details":K("toggle",e);break;case"input":K("invalid",e),Ys(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":K("invalid",e);break;case"textarea":K("invalid",e),Vs(e,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||a.suppressHydrationWarning===!0||Zd(e.textContent,n)?(a.popover!=null&&(K("beforetoggle",e),K("toggle",e)),a.onScroll!=null&&K("scroll",e),a.onScrollEnd!=null&&K("scrollend",e),a.onClick!=null&&(e.onclick=Oe),e=!0):e=!1,e||en(t,!0)}function kc(t){for(Lt=t.return;Lt;)switch(Lt.tag){case 5:case 31:case 13:ge=!1;return;case 27:case 3:ge=!0;return;default:Lt=Lt.return}}function ia(t){if(t!==Lt)return!1;if(!P)return kc(t),P=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Jr(t.type,t.memoizedProps)),n=!n),n&&ht&&en(t),kc(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));ht=nf(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));ht=nf(t)}else e===27?(e=ht,mn(t.type)?(t=es,es=null,ht=t):ht=e):ht=Lt?be(t.stateNode.nextSibling):null;return!0}function kn(){ht=Lt=null,P=!1}function Do(){var t=tn;return t!==null&&(Jt===null?Jt=t:Jt.push.apply(Jt,t),tn=null),t}function Ya(t){tn===null?tn=[t]:tn.push(t)}var _o=u(null),On=null,Ne=null;function nn(t,e,n){M(_o,e._currentValue),e._currentValue=n}function Be(t){t._currentValue=_o.current,S(_o)}function Lo(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function No(t,e,n,a){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){var o=l.child;i=i.firstContext;t:for(;i!==null;){var r=i;i=l;for(var s=0;s<e.length;s++)if(r.context===e[s]){i.lanes|=n,r=i.alternate,r!==null&&(r.lanes|=n),Lo(i.return,n,t),a||(o=null);break t}i=r.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(d(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),Lo(o,n,t),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function oa(t,e,n,a){t=null;for(var l=e,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(d(387));if(o=o.memoizedProps,o!==null){var r=l.type;ee(l.pendingProps.value,o.value)||(t!==null?t.push(r):t=[r])}}else if(l===nt.current){if(o=l.alternate,o===null)throw Error(d(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(ml):t=[ml])}l=l.return}t!==null&&No(e,t,n,a),e.flags|=262144}function Ql(t){for(t=t.firstContext;t!==null;){if(!ee(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Dn(t){On=t,Ne=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nt(t){return Oc(On,t)}function Zl(t,e){return On===null&&Dn(t),Oc(t,e)}function Oc(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Ne===null){if(t===null)throw Error(d(308));Ne=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ne=Ne.next=e;return n}var $h=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Ph=m.unstable_scheduleCallback,Ih=m.unstable_NormalPriority,St={$$typeof:ct,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bo(){return{controller:new $h,data:new Map,refCount:0}}function Xa(t){t.refCount--,t.refCount===0&&Ph(Ih,function(){t.controller.abort()})}var Va=null,Uo=0,ra=0,sa=null;function tp(t,e){if(Va===null){var n=Va=[];Uo=0,ra=Wr(),sa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Uo++,e.then(Dc,Dc),e}function Dc(){if(--Uo===0&&Va!==null){sa!==null&&(sa.status="fulfilled");var t=Va;Va=null,ra=0,sa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function ep(t,e){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var l=0;l<n.length;l++)(0,n[l])(e)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var _c=y.S;y.S=function(t,e){bd=Pt(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&tp(t,e),_c!==null&&_c(t,e)};var _n=u(null);function Go(){var t=_n.current;return t!==null?t:ft.pooledCache}function Fl(t,e){e===null?M(_n,_n.current):M(_n,e.pool)}function Lc(){var t=Go();return t===null?null:{parent:St._currentValue,pool:t}}var ca=Error(d(460)),jo=Error(d(474)),Kl=Error(d(542)),Jl={then:function(){}};function Nc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Bc(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Oe,Oe),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Gc(t),t;default:if(typeof e.status=="string")e.then(Oe,Oe);else{if(t=ft,t!==null&&100<t.shellSuspendCounter)throw Error(d(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=a}},function(a){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Gc(t),t}throw Nn=e,ca}}function Ln(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Nn=n,ca):n}}var Nn=null;function Uc(){if(Nn===null)throw Error(d(459));var t=Nn;return Nn=null,t}function Gc(t){if(t===ca||t===Kl)throw Error(d(483))}var ua=null,Qa=0;function $l(t){var e=Qa;return Qa+=1,ua===null&&(ua=[]),Bc(ua,t,e)}function Za(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Pl(t,e){throw e.$$typeof===X?Error(d(525)):(t=Object.prototype.toString.call(e),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function jc(t){function e(f,c){if(t){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function n(f,c){if(!t)return null;for(;c!==null;)e(f,c),c=c.sibling;return null}function a(f){for(var c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function l(f,c){return f=_e(f,c),f.index=0,f.sibling=null,f}function i(f,c,h){return f.index=h,t?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=67108866,c):h):(f.flags|=67108866,c)):(f.flags|=1048576,c)}function o(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function r(f,c,h,x){return c===null||c.tag!==6?(c=zo(h,f.mode,x),c.return=f,c):(c=l(c,h),c.return=f,c)}function s(f,c,h,x){var N=h.type;return N===Mt?v(f,c,h.props.children,x,h.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Dt&&Ln(N)===c.type)?(c=l(c,h.props),Za(c,h),c.return=f,c):(c=Xl(h.type,h.key,h.props,null,f.mode,x),Za(c,h),c.return=f,c)}function p(f,c,h,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=Ho(h,f.mode,x),c.return=f,c):(c=l(c,h.children||[]),c.return=f,c)}function v(f,c,h,x,N){return c===null||c.tag!==7?(c=Cn(h,f.mode,x,N),c.return=f,c):(c=l(c,h),c.return=f,c)}function E(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=zo(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case mt:return h=Xl(c.type,c.key,c.props,null,f.mode,h),Za(h,c),h.return=f,h;case Ht:return c=Ho(c,f.mode,h),c.return=f,c;case Dt:return c=Ln(c),E(f,c,h)}if(we(c)||Xt(c))return c=Cn(c,f.mode,h,null),c.return=f,c;if(typeof c.then=="function")return E(f,$l(c),h);if(c.$$typeof===ct)return E(f,Zl(f,c),h);Pl(f,c)}return null}function g(f,c,h,x){var N=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return N!==null?null:r(f,c,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case mt:return h.key===N?s(f,c,h,x):null;case Ht:return h.key===N?p(f,c,h,x):null;case Dt:return h=Ln(h),g(f,c,h,x)}if(we(h)||Xt(h))return N!==null?null:v(f,c,h,x,null);if(typeof h.then=="function")return g(f,c,$l(h),x);if(h.$$typeof===ct)return g(f,c,Zl(f,h),x);Pl(f,h)}return null}function b(f,c,h,x,N){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return f=f.get(h)||null,r(c,f,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case mt:return f=f.get(x.key===null?h:x.key)||null,s(c,f,x,N);case Ht:return f=f.get(x.key===null?h:x.key)||null,p(c,f,x,N);case Dt:return x=Ln(x),b(f,c,h,x,N)}if(we(x)||Xt(x))return f=f.get(h)||null,v(c,f,x,N,null);if(typeof x.then=="function")return b(f,c,h,$l(x),N);if(x.$$typeof===ct)return b(f,c,h,Zl(c,x),N);Pl(c,x)}return null}function k(f,c,h,x){for(var N=null,I=null,_=c,Y=c=0,$=null;_!==null&&Y<h.length;Y++){_.index>Y?($=_,_=null):$=_.sibling;var tt=g(f,_,h[Y],x);if(tt===null){_===null&&(_=$);break}t&&_&&tt.alternate===null&&e(f,_),c=i(tt,c,Y),I===null?N=tt:I.sibling=tt,I=tt,_=$}if(Y===h.length)return n(f,_),P&&Le(f,Y),N;if(_===null){for(;Y<h.length;Y++)_=E(f,h[Y],x),_!==null&&(c=i(_,c,Y),I===null?N=_:I.sibling=_,I=_);return P&&Le(f,Y),N}for(_=a(_);Y<h.length;Y++)$=b(_,f,Y,h[Y],x),$!==null&&(t&&$.alternate!==null&&_.delete($.key===null?Y:$.key),c=i($,c,Y),I===null?N=$:I.sibling=$,I=$);return t&&_.forEach(function(wn){return e(f,wn)}),P&&Le(f,Y),N}function B(f,c,h,x){if(h==null)throw Error(d(151));for(var N=null,I=null,_=c,Y=c=0,$=null,tt=h.next();_!==null&&!tt.done;Y++,tt=h.next()){_.index>Y?($=_,_=null):$=_.sibling;var wn=g(f,_,tt.value,x);if(wn===null){_===null&&(_=$);break}t&&_&&wn.alternate===null&&e(f,_),c=i(wn,c,Y),I===null?N=wn:I.sibling=wn,I=wn,_=$}if(tt.done)return n(f,_),P&&Le(f,Y),N;if(_===null){for(;!tt.done;Y++,tt=h.next())tt=E(f,tt.value,x),tt!==null&&(c=i(tt,c,Y),I===null?N=tt:I.sibling=tt,I=tt);return P&&Le(f,Y),N}for(_=a(_);!tt.done;Y++,tt=h.next())tt=b(_,f,Y,tt.value,x),tt!==null&&(t&&tt.alternate!==null&&_.delete(tt.key===null?Y:tt.key),c=i(tt,c,Y),I===null?N=tt:I.sibling=tt,I=tt);return t&&_.forEach(function(fg){return e(f,fg)}),P&&Le(f,Y),N}function st(f,c,h,x){if(typeof h=="object"&&h!==null&&h.type===Mt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case mt:t:{for(var N=h.key;c!==null;){if(c.key===N){if(N=h.type,N===Mt){if(c.tag===7){n(f,c.sibling),x=l(c,h.props.children),x.return=f,f=x;break t}}else if(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Dt&&Ln(N)===c.type){n(f,c.sibling),x=l(c,h.props),Za(x,h),x.return=f,f=x;break t}n(f,c);break}else e(f,c);c=c.sibling}h.type===Mt?(x=Cn(h.props.children,f.mode,x,h.key),x.return=f,f=x):(x=Xl(h.type,h.key,h.props,null,f.mode,x),Za(x,h),x.return=f,f=x)}return o(f);case Ht:t:{for(N=h.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(f,c.sibling),x=l(c,h.children||[]),x.return=f,f=x;break t}else{n(f,c);break}else e(f,c);c=c.sibling}x=Ho(h,f.mode,x),x.return=f,f=x}return o(f);case Dt:return h=Ln(h),st(f,c,h,x)}if(we(h))return k(f,c,h,x);if(Xt(h)){if(N=Xt(h),typeof N!="function")throw Error(d(150));return h=N.call(h),B(f,c,h,x)}if(typeof h.then=="function")return st(f,c,$l(h),x);if(h.$$typeof===ct)return st(f,c,Zl(f,h),x);Pl(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,c!==null&&c.tag===6?(n(f,c.sibling),x=l(c,h),x.return=f,f=x):(n(f,c),x=zo(h,f.mode,x),x.return=f,f=x),o(f)):n(f,c)}return function(f,c,h,x){try{Qa=0;var N=st(f,c,h,x);return ua=null,N}catch(_){if(_===ca||_===Kl)throw _;var I=ne(29,_,null,f.mode);return I.lanes=x,I.return=f,I}}}var Bn=jc(!0),Wc=jc(!1),an=!1;function Wo(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qo(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ln(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function on(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(et&2)!==0){var l=a.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),a.pending=e,e=Yl(t),Tc(t,null,n),e}return ql(t,a,e,n),Yl(t)}function Fa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Os(t,n)}}function Yo(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=e:i=i.next=e}else l=i=e;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Xo=!1;function Ka(){if(Xo){var t=sa;if(t!==null)throw t}}function Ja(t,e,n,a){Xo=!1;var l=t.updateQueue;an=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,r=l.shared.pending;if(r!==null){l.shared.pending=null;var s=r,p=s.next;s.next=null,o===null?i=p:o.next=p,o=s;var v=t.alternate;v!==null&&(v=v.updateQueue,r=v.lastBaseUpdate,r!==o&&(r===null?v.firstBaseUpdate=p:r.next=p,v.lastBaseUpdate=s))}if(i!==null){var E=l.baseState;o=0,v=p=s=null,r=i;do{var g=r.lane&-536870913,b=g!==r.lane;if(b?(J&g)===g:(a&g)===g){g!==0&&g===ra&&(Xo=!0),v!==null&&(v=v.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});t:{var k=t,B=r;g=e;var st=n;switch(B.tag){case 1:if(k=B.payload,typeof k=="function"){E=k.call(st,E,g);break t}E=k;break t;case 3:k.flags=k.flags&-65537|128;case 0:if(k=B.payload,g=typeof k=="function"?k.call(st,E,g):k,g==null)break t;E=H({},E,g);break t;case 2:an=!0}}g=r.callback,g!==null&&(t.flags|=64,b&&(t.flags|=8192),b=l.callbacks,b===null?l.callbacks=[g]:b.push(g))}else b={lane:g,tag:r.tag,payload:r.payload,callback:r.callback,next:null},v===null?(p=v=b,s=E):v=v.next=b,o|=g;if(r=r.next,r===null){if(r=l.shared.pending,r===null)break;b=r,r=b.next,b.next=null,l.lastBaseUpdate=b,l.shared.pending=null}}while(!0);v===null&&(s=E),l.baseState=s,l.firstBaseUpdate=p,l.lastBaseUpdate=v,i===null&&(l.shared.lanes=0),dn|=o,t.lanes=o,t.memoizedState=E}}function qc(t,e){if(typeof t!="function")throw Error(d(191,t));t.call(e)}function Yc(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)qc(n[t],e)}var da=u(null),Il=u(0);function Xc(t,e){t=Qe,M(Il,t),M(da,e),Qe=t|e.baseLanes}function Vo(){M(Il,Qe),M(da,da.current)}function Qo(){Qe=Il.current,S(da),S(Il)}var ae=u(null),me=null;function rn(t){var e=t.alternate;M(wt,wt.current&1),M(ae,t),me===null&&(e===null||da.current!==null||e.memoizedState!==null)&&(me=t)}function Zo(t){M(wt,wt.current),M(ae,t),me===null&&(me=t)}function Vc(t){t.tag===22?(M(wt,wt.current),M(ae,t),me===null&&(me=t)):sn()}function sn(){M(wt,wt.current),M(ae,ae.current)}function le(t){S(ae),me===t&&(me=null),S(wt)}var wt=u(0);function ti(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ir(n)||ts(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ue=0,W=null,ot=null,Tt=null,ei=!1,fa=!1,Un=!1,ni=0,$a=0,ha=null,np=0;function vt(){throw Error(d(321))}function Fo(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ee(t[n],e[n]))return!1;return!0}function Ko(t,e,n,a,l,i){return Ue=i,W=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,y.H=t===null||t.memoizedState===null?zu:ur,Un=!1,i=n(a,l),Un=!1,fa&&(i=Zc(e,n,a,l)),Qc(t),i}function Qc(t){y.H=tl;var e=ot!==null&&ot.next!==null;if(Ue=0,Tt=ot=W=null,ei=!1,$a=0,ha=null,e)throw Error(d(300));t===null||Rt||(t=t.dependencies,t!==null&&Ql(t)&&(Rt=!0))}function Zc(t,e,n,a){W=t;var l=0;do{if(fa&&(ha=null),$a=0,fa=!1,25<=l)throw Error(d(301));if(l+=1,Tt=ot=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}y.H=Hu,i=e(n,a)}while(fa);return i}function ap(){var t=y.H,e=t.useState()[0];return e=typeof e.then=="function"?Pa(e):e,t=t.useState()[0],(ot!==null?ot.memoizedState:null)!==t&&(W.flags|=1024),e}function Jo(){var t=ni!==0;return ni=0,t}function $o(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Po(t){if(ei){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ei=!1}Ue=0,Tt=ot=W=null,fa=!1,$a=ni=0,ha=null}function Yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?W.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function Et(){if(ot===null){var t=W.alternate;t=t!==null?t.memoizedState:null}else t=ot.next;var e=Tt===null?W.memoizedState:Tt.next;if(e!==null)Tt=e,ot=t;else{if(t===null)throw W.alternate===null?Error(d(467)):Error(d(310));ot=t,t={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},Tt===null?W.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function ai(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pa(t){var e=$a;return $a+=1,ha===null&&(ha=[]),t=Bc(ha,t,e),e=W,(Tt===null?e.memoizedState:Tt.next)===null&&(e=e.alternate,y.H=e===null||e.memoizedState===null?zu:ur),t}function li(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Pa(t);if(t.$$typeof===ct)return Nt(t)}throw Error(d(438,String(t)))}function Io(t){var e=null,n=W.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var a=W.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=ai(),W.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),a=0;a<t;a++)n[a]=qn;return e.index++,n}function Ge(t,e){return typeof e=="function"?e(t):e}function ii(t){var e=Et();return tr(e,ot,t)}function tr(t,e,n){var a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=n;var l=t.baseQueue,i=a.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}e.baseQueue=l=i,a.pending=null}if(i=t.baseState,l===null)t.memoizedState=i;else{e=l.next;var r=o=null,s=null,p=e,v=!1;do{var E=p.lane&-536870913;if(E!==p.lane?(J&E)===E:(Ue&E)===E){var g=p.revertLane;if(g===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),E===ra&&(v=!0);else if((Ue&g)===g){p=p.next,g===ra&&(v=!0);continue}else E={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},s===null?(r=s=E,o=i):s=s.next=E,W.lanes|=g,dn|=g;E=p.action,Un&&n(i,E),i=p.hasEagerState?p.eagerState:n(i,E)}else g={lane:E,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},s===null?(r=s=g,o=i):s=s.next=g,W.lanes|=E,dn|=E;p=p.next}while(p!==null&&p!==e);if(s===null?o=i:s.next=r,!ee(i,t.memoizedState)&&(Rt=!0,v&&(n=sa,n!==null)))throw n;t.memoizedState=i,t.baseState=o,t.baseQueue=s,a.lastRenderedState=i}return l===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function er(t){var e=Et(),n=e.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=t;var a=n.dispatch,l=n.pending,i=e.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=t(i,o.action),o=o.next;while(o!==l);ee(i,e.memoizedState)||(Rt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,a]}function Fc(t,e,n){var a=W,l=Et(),i=P;if(i){if(n===void 0)throw Error(d(407));n=n()}else n=e();var o=!ee((ot||l).memoizedState,n);if(o&&(l.memoizedState=n,Rt=!0),l=l.queue,lr($c.bind(null,a,l,t),[t]),l.getSnapshot!==e||o||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,pa(9,{destroy:void 0},Jc.bind(null,a,l,n,e),null),ft===null)throw Error(d(349));i||(Ue&127)!==0||Kc(a,e,n)}return n}function Kc(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=W.updateQueue,e===null?(e=ai(),W.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Jc(t,e,n,a){e.value=n,e.getSnapshot=a,Pc(e)&&Ic(t)}function $c(t,e,n){return n(function(){Pc(e)&&Ic(t)})}function Pc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ee(t,n)}catch{return!0}}function Ic(t){var e=Hn(t,2);e!==null&&$t(e,t,2)}function nr(t){var e=Yt();if(typeof t=="function"){var n=t;if(t=n(),Un){Je(!0);try{n()}finally{Je(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ge,lastRenderedState:t},e}function tu(t,e,n,a){return t.baseState=n,tr(t,ot,typeof a=="function"?a:Ge)}function lp(t,e,n,a,l){if(si(t))throw Error(d(485));if(t=e.action,t!==null){var i={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};y.T!==null?n(!0):i.isTransition=!1,a(i),n=e.pending,n===null?(i.next=e.pending=i,eu(e,i)):(i.next=n.next,e.pending=n.next=i)}}function eu(t,e){var n=e.action,a=e.payload,l=t.state;if(e.isTransition){var i=y.T,o={};y.T=o;try{var r=n(l,a),s=y.S;s!==null&&s(o,r),nu(t,e,r)}catch(p){ar(t,e,p)}finally{i!==null&&o.types!==null&&(i.types=o.types),y.T=i}}else try{i=n(l,a),nu(t,e,i)}catch(p){ar(t,e,p)}}function nu(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){au(t,e,a)},function(a){return ar(t,e,a)}):au(t,e,n)}function au(t,e,n){e.status="fulfilled",e.value=n,lu(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,eu(t,n)))}function ar(t,e,n){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=n,lu(e),e=e.next;while(e!==a)}t.action=null}function lu(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function iu(t,e){return e}function ou(t,e){if(P){var n=ft.formState;if(n!==null){t:{var a=W;if(P){if(ht){e:{for(var l=ht,i=ge;l.nodeType!==8;){if(!i){l=null;break e}if(l=be(l.nextSibling),l===null){l=null;break e}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){ht=be(l.nextSibling),a=l.data==="F!";break t}}en(a)}a=!1}a&&(e=n[0])}}return n=Yt(),n.memoizedState=n.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:iu,lastRenderedState:e},n.queue=a,n=Ru.bind(null,W,a),a.dispatch=n,a=nr(!1),i=cr.bind(null,W,!1,a.queue),a=Yt(),l={state:e,dispatch:null,action:t,pending:null},a.queue=l,n=lp.bind(null,W,l,i,n),l.dispatch=n,a.memoizedState=t,[e,n,!1]}function ru(t){var e=Et();return su(e,ot,t)}function su(t,e,n){if(e=tr(t,e,iu)[0],t=ii(Ge)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Pa(e)}catch(o){throw o===ca?Kl:o}else a=e;e=Et();var l=e.queue,i=l.dispatch;return n!==e.memoizedState&&(W.flags|=2048,pa(9,{destroy:void 0},ip.bind(null,l,n),null)),[a,i,t]}function ip(t,e){t.action=e}function cu(t){var e=Et(),n=ot;if(n!==null)return su(e,n,t);Et(),e=e.memoizedState,n=Et();var a=n.queue.dispatch;return n.memoizedState=t,[e,a,!1]}function pa(t,e,n,a){return t={tag:t,create:n,deps:a,inst:e,next:null},e=W.updateQueue,e===null&&(e=ai(),W.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t),t}function uu(){return Et().memoizedState}function oi(t,e,n,a){var l=Yt();W.flags|=t,l.memoizedState=pa(1|e,{destroy:void 0},n,a===void 0?null:a)}function ri(t,e,n,a){var l=Et();a=a===void 0?null:a;var i=l.memoizedState.inst;ot!==null&&a!==null&&Fo(a,ot.memoizedState.deps)?l.memoizedState=pa(e,i,n,a):(W.flags|=t,l.memoizedState=pa(1|e,i,n,a))}function du(t,e){oi(8390656,8,t,e)}function lr(t,e){ri(2048,8,t,e)}function op(t){W.flags|=4;var e=W.updateQueue;if(e===null)e=ai(),W.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function fu(t){var e=Et().memoizedState;return op({ref:e,nextImpl:t}),function(){if((et&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}function hu(t,e){return ri(4,2,t,e)}function pu(t,e){return ri(4,4,t,e)}function gu(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mu(t,e,n){n=n!=null?n.concat([t]):null,ri(4,4,gu.bind(null,e,t),n)}function ir(){}function bu(t,e){var n=Et();e=e===void 0?null:e;var a=n.memoizedState;return e!==null&&Fo(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function vu(t,e){var n=Et();e=e===void 0?null:e;var a=n.memoizedState;if(e!==null&&Fo(e,a[1]))return a[0];if(a=t(),Un){Je(!0);try{t()}finally{Je(!1)}}return n.memoizedState=[a,e],a}function or(t,e,n){return n===void 0||(Ue&1073741824)!==0&&(J&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=yd(),W.lanes|=t,dn|=t,n)}function yu(t,e,n,a){return ee(n,e)?n:da.current!==null?(t=or(t,n,a),ee(t,e)||(Rt=!0),t):(Ue&42)===0||(Ue&1073741824)!==0&&(J&261930)===0?(Rt=!0,t.memoizedState=n):(t=yd(),W.lanes|=t,dn|=t,e)}function xu(t,e,n,a,l){var i=A.p;A.p=i!==0&&8>i?i:8;var o=y.T,r={};y.T=r,cr(t,!1,e,n);try{var s=l(),p=y.S;if(p!==null&&p(r,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var v=ep(s,a);Ia(t,e,v,re(t))}else Ia(t,e,a,re(t))}catch(E){Ia(t,e,{then:function(){},status:"rejected",reason:E},re())}finally{A.p=i,o!==null&&r.types!==null&&(o.types=r.types),y.T=o}}function rp(){}function rr(t,e,n,a){if(t.tag!==5)throw Error(d(476));var l=wu(t).queue;xu(t,l,e,U,n===null?rp:function(){return Eu(t),n(a)})}function wu(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ge,lastRenderedState:U},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ge,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Eu(t){var e=wu(t);e.next===null&&(e=t.alternate.memoizedState),Ia(t,e.next.queue,{},re())}function sr(){return Nt(ml)}function Su(){return Et().memoizedState}function Tu(){return Et().memoizedState}function sp(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=re();t=ln(n);var a=on(e,t,n);a!==null&&($t(a,e,n),Fa(a,e,n)),e={cache:Bo()},t.payload=e;return}e=e.return}}function cp(t,e,n){var a=re();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},si(t)?Au(e,n):(n=Ao(t,e,n,a),n!==null&&($t(n,t,a),Mu(n,e,a)))}function Ru(t,e,n){var a=re();Ia(t,e,n,a)}function Ia(t,e,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(si(t))Au(e,l);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,r=i(o,n);if(l.hasEagerState=!0,l.eagerState=r,ee(r,o))return ql(t,e,l,0),ft===null&&Wl(),!1}catch{}if(n=Ao(t,e,l,a),n!==null)return $t(n,t,a),Mu(n,e,a),!0}return!1}function cr(t,e,n,a){if(a={lane:2,revertLane:Wr(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},si(t)){if(e)throw Error(d(479))}else e=Ao(t,n,a,2),e!==null&&$t(e,t,2)}function si(t){var e=t.alternate;return t===W||e!==null&&e===W}function Au(t,e){fa=ei=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Mu(t,e,n){if((n&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Os(t,n)}}var tl={readContext:Nt,use:li,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useLayoutEffect:vt,useInsertionEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useSyncExternalStore:vt,useId:vt,useHostTransitionStatus:vt,useFormState:vt,useActionState:vt,useOptimistic:vt,useMemoCache:vt,useCacheRefresh:vt};tl.useEffectEvent=vt;var zu={readContext:Nt,use:li,useCallback:function(t,e){return Yt().memoizedState=[t,e===void 0?null:e],t},useContext:Nt,useEffect:du,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,oi(4194308,4,gu.bind(null,e,t),n)},useLayoutEffect:function(t,e){return oi(4194308,4,t,e)},useInsertionEffect:function(t,e){oi(4,2,t,e)},useMemo:function(t,e){var n=Yt();e=e===void 0?null:e;var a=t();if(Un){Je(!0);try{t()}finally{Je(!1)}}return n.memoizedState=[a,e],a},useReducer:function(t,e,n){var a=Yt();if(n!==void 0){var l=n(e);if(Un){Je(!0);try{n(e)}finally{Je(!1)}}}else l=e;return a.memoizedState=a.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},a.queue=t,t=t.dispatch=cp.bind(null,W,t),[a.memoizedState,t]},useRef:function(t){var e=Yt();return t={current:t},e.memoizedState=t},useState:function(t){t=nr(t);var e=t.queue,n=Ru.bind(null,W,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:ir,useDeferredValue:function(t,e){var n=Yt();return or(n,t,e)},useTransition:function(){var t=nr(!1);return t=xu.bind(null,W,t.queue,!0,!1),Yt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var a=W,l=Yt();if(P){if(n===void 0)throw Error(d(407));n=n()}else{if(n=e(),ft===null)throw Error(d(349));(J&127)!==0||Kc(a,e,n)}l.memoizedState=n;var i={value:n,getSnapshot:e};return l.queue=i,du($c.bind(null,a,i,t),[t]),a.flags|=2048,pa(9,{destroy:void 0},Jc.bind(null,a,i,n,e),null),n},useId:function(){var t=Yt(),e=ft.identifierPrefix;if(P){var n=Me,a=Ae;n=(a&~(1<<32-te(a)-1)).toString(32)+n,e="_"+e+"R_"+n,n=ni++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=np++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:sr,useFormState:ou,useActionState:ou,useOptimistic:function(t){var e=Yt();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=cr.bind(null,W,!0,n),n.dispatch=e,[t,e]},useMemoCache:Io,useCacheRefresh:function(){return Yt().memoizedState=sp.bind(null,W)},useEffectEvent:function(t){var e=Yt(),n={impl:t};return e.memoizedState=n,function(){if((et&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}},ur={readContext:Nt,use:li,useCallback:bu,useContext:Nt,useEffect:lr,useImperativeHandle:mu,useInsertionEffect:hu,useLayoutEffect:pu,useMemo:vu,useReducer:ii,useRef:uu,useState:function(){return ii(Ge)},useDebugValue:ir,useDeferredValue:function(t,e){var n=Et();return yu(n,ot.memoizedState,t,e)},useTransition:function(){var t=ii(Ge)[0],e=Et().memoizedState;return[typeof t=="boolean"?t:Pa(t),e]},useSyncExternalStore:Fc,useId:Su,useHostTransitionStatus:sr,useFormState:ru,useActionState:ru,useOptimistic:function(t,e){var n=Et();return tu(n,ot,t,e)},useMemoCache:Io,useCacheRefresh:Tu};ur.useEffectEvent=fu;var Hu={readContext:Nt,use:li,useCallback:bu,useContext:Nt,useEffect:lr,useImperativeHandle:mu,useInsertionEffect:hu,useLayoutEffect:pu,useMemo:vu,useReducer:er,useRef:uu,useState:function(){return er(Ge)},useDebugValue:ir,useDeferredValue:function(t,e){var n=Et();return ot===null?or(n,t,e):yu(n,ot.memoizedState,t,e)},useTransition:function(){var t=er(Ge)[0],e=Et().memoizedState;return[typeof t=="boolean"?t:Pa(t),e]},useSyncExternalStore:Fc,useId:Su,useHostTransitionStatus:sr,useFormState:cu,useActionState:cu,useOptimistic:function(t,e){var n=Et();return ot!==null?tu(n,ot,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Io,useCacheRefresh:Tu};Hu.useEffectEvent=fu;function dr(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:H({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fr={enqueueSetState:function(t,e,n){t=t._reactInternals;var a=re(),l=ln(a);l.payload=e,n!=null&&(l.callback=n),e=on(t,l,a),e!==null&&($t(e,t,a),Fa(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=re(),l=ln(a);l.tag=1,l.payload=e,n!=null&&(l.callback=n),e=on(t,l,a),e!==null&&($t(e,t,a),Fa(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=re(),a=ln(n);a.tag=2,e!=null&&(a.callback=e),e=on(t,a,n),e!==null&&($t(e,t,n),Fa(e,t,n))}};function Cu(t,e,n,a,l,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,o):e.prototype&&e.prototype.isPureReactComponent?!ja(n,a)||!ja(l,i):!0}function ku(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&fr.enqueueReplaceState(e,e.state,null)}function Gn(t,e){var n=e;if("ref"in e){n={};for(var a in e)a!=="ref"&&(n[a]=e[a])}if(t=t.defaultProps){n===e&&(n=H({},n));for(var l in t)n[l]===void 0&&(n[l]=t[l])}return n}function Ou(t){jl(t)}function Du(t){console.error(t)}function _u(t){jl(t)}function ci(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Lu(t,e,n){try{var a=t.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function hr(t,e,n){return n=ln(n),n.tag=3,n.payload={element:null},n.callback=function(){ci(t,e)},n}function Nu(t){return t=ln(t),t.tag=3,t}function Bu(t,e,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;t.payload=function(){return l(i)},t.callback=function(){Lu(e,n,a)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Lu(e,n,a),typeof l!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var r=a.stack;this.componentDidCatch(a.value,{componentStack:r!==null?r:""})})}function up(t,e,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=n.alternate,e!==null&&oa(e,n,l,!0),n=ae.current,n!==null){switch(n.tag){case 31:case 13:return me===null?wi():n.alternate===null&&yt===0&&(yt=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Jl?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([a]):e.add(a),Ur(t,a,l)),!1;case 22:return n.flags|=65536,a===Jl?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([a]):n.add(a)),Ur(t,a,l)),!1}throw Error(d(435,n.tag))}return Ur(t,a,l),wi(),!1}if(P)return e=ae.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,a!==Oo&&(t=Error(d(422),{cause:a}),Ya(fe(t,n)))):(a!==Oo&&(e=Error(d(423),{cause:a}),Ya(fe(e,n))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,a=fe(a,n),l=hr(t.stateNode,a,l),Yo(t,l),yt!==4&&(yt=2)),!1;var i=Error(d(520),{cause:a});if(i=fe(i,n),sl===null?sl=[i]:sl.push(i),yt!==4&&(yt=2),e===null)return!0;a=fe(a,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=l&-l,n.lanes|=t,t=hr(n.stateNode,a,t),Yo(n,t),!1;case 1:if(e=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(fn===null||!fn.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Nu(l),Bu(l,t,n,a),Yo(n,l),!1}n=n.return}while(n!==null);return!1}var pr=Error(d(461)),Rt=!1;function Bt(t,e,n,a){e.child=t===null?Wc(e,null,n,a):Bn(e,t.child,n,a)}function Uu(t,e,n,a,l){n=n.render;var i=e.ref;if("ref"in a){var o={};for(var r in a)r!=="ref"&&(o[r]=a[r])}else o=a;return Dn(e),a=Ko(t,e,n,o,i,l),r=Jo(),t!==null&&!Rt?($o(t,e,l),je(t,e,l)):(P&&r&&Co(e),e.flags|=1,Bt(t,e,a,l),e.child)}function Gu(t,e,n,a,l){if(t===null){var i=n.type;return typeof i=="function"&&!Mo(i)&&i.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=i,ju(t,e,i,a,l)):(t=Xl(n.type,null,a,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Er(t,l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ja,n(o,a)&&t.ref===e.ref)return je(t,e,l)}return e.flags|=1,t=_e(i,a),t.ref=e.ref,t.return=e,e.child=t}function ju(t,e,n,a,l){if(t!==null){var i=t.memoizedProps;if(ja(i,a)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=a=i,Er(t,l))(t.flags&131072)!==0&&(Rt=!0);else return e.lanes=t.lanes,je(t,e,l)}return gr(t,e,n,a,l)}function Wu(t,e,n,a){var l=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,t!==null){for(a=e.child=t.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,e.child=null;return qu(t,e,i,n,a)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Fl(e,i!==null?i.cachePool:null),i!==null?Xc(e,i):Vo(),Vc(e);else return a=e.lanes=536870912,qu(t,e,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(Fl(e,i.cachePool),Xc(e,i),sn(),e.memoizedState=null):(t!==null&&Fl(e,null),Vo(),sn());return Bt(t,e,l,n),e.child}function el(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function qu(t,e,n,a,l){var i=Go();return i=i===null?null:{parent:St._currentValue,pool:i},e.memoizedState={baseLanes:n,cachePool:i},t!==null&&Fl(e,null),Vo(),Vc(e),t!==null&&oa(t,e,a,!0),e.childLanes=l,null}function ui(t,e){return e=fi({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Yu(t,e,n){return Bn(e,t.child,null,n),t=ui(e,e.pendingProps),t.flags|=2,le(e),e.memoizedState=null,t}function dp(t,e,n){var a=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(P){if(a.mode==="hidden")return t=ui(e,a),e.lanes=536870912,el(null,t);if(Zo(e),(t=ht)?(t=ef(t,ge),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ie!==null?{id:Ae,overflow:Me}:null,retryLane:536870912,hydrationErrors:null},n=Ac(t),n.return=e,e.child=n,Lt=e,ht=null)):t=null,t===null)throw en(e);return e.lanes=536870912,null}return ui(e,a)}var i=t.memoizedState;if(i!==null){var o=i.dehydrated;if(Zo(e),l)if(e.flags&256)e.flags&=-257,e=Yu(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(d(558));else if(Rt||oa(t,e,n,!1),l=(n&t.childLanes)!==0,Rt||l){if(a=ft,a!==null&&(o=Ds(a,n),o!==0&&o!==i.retryLane))throw i.retryLane=o,Hn(t,o),$t(a,t,o),pr;wi(),e=Yu(t,e,n)}else t=i.treeContext,ht=be(o.nextSibling),Lt=e,P=!0,tn=null,ge=!1,t!==null&&Hc(e,t),e=ui(e,a),e.flags|=4096;return e}return t=_e(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function di(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(d(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function gr(t,e,n,a,l){return Dn(e),n=Ko(t,e,n,a,void 0,l),a=Jo(),t!==null&&!Rt?($o(t,e,l),je(t,e,l)):(P&&a&&Co(e),e.flags|=1,Bt(t,e,n,l),e.child)}function Xu(t,e,n,a,l,i){return Dn(e),e.updateQueue=null,n=Zc(e,a,n,l),Qc(t),a=Jo(),t!==null&&!Rt?($o(t,e,i),je(t,e,i)):(P&&a&&Co(e),e.flags|=1,Bt(t,e,n,i),e.child)}function Vu(t,e,n,a,l){if(Dn(e),e.stateNode===null){var i=na,o=n.contextType;typeof o=="object"&&o!==null&&(i=Nt(o)),i=new n(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=fr,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},Wo(e),o=n.contextType,i.context=typeof o=="object"&&o!==null?Nt(o):na,i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(dr(e,n,o,a),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&fr.enqueueReplaceState(i,i.state,null),Ja(e,a,i,l),Ka(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var r=e.memoizedProps,s=Gn(n,r);i.props=s;var p=i.context,v=n.contextType;o=na,typeof v=="object"&&v!==null&&(o=Nt(v));var E=n.getDerivedStateFromProps;v=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=e.pendingProps!==r,v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||p!==o)&&ku(e,i,a,o),an=!1;var g=e.memoizedState;i.state=g,Ja(e,a,i,l),Ka(),p=e.memoizedState,r||g!==p||an?(typeof E=="function"&&(dr(e,n,E,a),p=e.memoizedState),(s=an||Cu(e,n,s,a,g,p,o))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=p),i.props=a,i.state=p,i.context=o,a=s):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,qo(t,e),o=e.memoizedProps,v=Gn(n,o),i.props=v,E=e.pendingProps,g=i.context,p=n.contextType,s=na,typeof p=="object"&&p!==null&&(s=Nt(p)),r=n.getDerivedStateFromProps,(p=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==E||g!==s)&&ku(e,i,a,s),an=!1,g=e.memoizedState,i.state=g,Ja(e,a,i,l),Ka();var b=e.memoizedState;o!==E||g!==b||an||t!==null&&t.dependencies!==null&&Ql(t.dependencies)?(typeof r=="function"&&(dr(e,n,r,a),b=e.memoizedState),(v=an||Cu(e,n,v,a,g,b,s)||t!==null&&t.dependencies!==null&&Ql(t.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,b,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,b,s)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=b),i.props=a,i.state=b,i.context=s,a=v):(typeof i.componentDidUpdate!="function"||o===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,di(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=Bn(e,t.child,null,l),e.child=Bn(e,null,n,l)):Bt(t,e,n,l),e.memoizedState=i.state,t=e.child):t=je(t,e,l),t}function Qu(t,e,n,a){return kn(),e.flags|=256,Bt(t,e,n,a),e.child}var mr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function br(t){return{baseLanes:t,cachePool:Lc()}}function vr(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=oe),t}function Zu(t,e,n){var a=e.pendingProps,l=!1,i=(e.flags&128)!==0,o;if((o=i)||(o=t!==null&&t.memoizedState===null?!1:(wt.current&2)!==0),o&&(l=!0,e.flags&=-129),o=(e.flags&32)!==0,e.flags&=-33,t===null){if(P){if(l?rn(e):sn(),(t=ht)?(t=ef(t,ge),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ie!==null?{id:Ae,overflow:Me}:null,retryLane:536870912,hydrationErrors:null},n=Ac(t),n.return=e,e.child=n,Lt=e,ht=null)):t=null,t===null)throw en(e);return ts(t)?e.lanes=32:e.lanes=536870912,null}var r=a.children;return a=a.fallback,l?(sn(),l=e.mode,r=fi({mode:"hidden",children:r},l),a=Cn(a,l,n,null),r.return=e,a.return=e,r.sibling=a,e.child=r,a=e.child,a.memoizedState=br(n),a.childLanes=vr(t,o,n),e.memoizedState=mr,el(null,a)):(rn(e),yr(e,r))}var s=t.memoizedState;if(s!==null&&(r=s.dehydrated,r!==null)){if(i)e.flags&256?(rn(e),e.flags&=-257,e=xr(t,e,n)):e.memoizedState!==null?(sn(),e.child=t.child,e.flags|=128,e=null):(sn(),r=a.fallback,l=e.mode,a=fi({mode:"visible",children:a.children},l),r=Cn(r,l,n,null),r.flags|=2,a.return=e,r.return=e,a.sibling=r,e.child=a,Bn(e,t.child,null,n),a=e.child,a.memoizedState=br(n),a.childLanes=vr(t,o,n),e.memoizedState=mr,e=el(null,a));else if(rn(e),ts(r)){if(o=r.nextSibling&&r.nextSibling.dataset,o)var p=o.dgst;o=p,a=Error(d(419)),a.stack="",a.digest=o,Ya({value:a,source:null,stack:null}),e=xr(t,e,n)}else if(Rt||oa(t,e,n,!1),o=(n&t.childLanes)!==0,Rt||o){if(o=ft,o!==null&&(a=Ds(o,n),a!==0&&a!==s.retryLane))throw s.retryLane=a,Hn(t,a),$t(o,t,a),pr;Ir(r)||wi(),e=xr(t,e,n)}else Ir(r)?(e.flags|=192,e.child=t.child,e=null):(t=s.treeContext,ht=be(r.nextSibling),Lt=e,P=!0,tn=null,ge=!1,t!==null&&Hc(e,t),e=yr(e,a.children),e.flags|=4096);return e}return l?(sn(),r=a.fallback,l=e.mode,s=t.child,p=s.sibling,a=_e(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&65011712,p!==null?r=_e(p,r):(r=Cn(r,l,n,null),r.flags|=2),r.return=e,a.return=e,a.sibling=r,e.child=a,el(null,a),a=e.child,r=t.child.memoizedState,r===null?r=br(n):(l=r.cachePool,l!==null?(s=St._currentValue,l=l.parent!==s?{parent:s,pool:s}:l):l=Lc(),r={baseLanes:r.baseLanes|n,cachePool:l}),a.memoizedState=r,a.childLanes=vr(t,o,n),e.memoizedState=mr,el(t.child,a)):(rn(e),n=t.child,t=n.sibling,n=_e(n,{mode:"visible",children:a.children}),n.return=e,n.sibling=null,t!==null&&(o=e.deletions,o===null?(e.deletions=[t],e.flags|=16):o.push(t)),e.child=n,e.memoizedState=null,n)}function yr(t,e){return e=fi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function fi(t,e){return t=ne(22,t,null,e),t.lanes=0,t}function xr(t,e,n){return Bn(e,t.child,null,n),t=yr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Fu(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Lo(t.return,e,n)}function wr(t,e,n,a,l,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=l,o.treeForkCount=i)}function Ku(t,e,n){var a=e.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var o=wt.current,r=(o&2)!==0;if(r?(o=o&1|2,e.flags|=128):o&=1,M(wt,o),Bt(t,e,a,n),a=P?qa:0,!r&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fu(t,n,e);else if(t.tag===19)Fu(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"forwards":for(n=e.child,l=null;n!==null;)t=n.alternate,t!==null&&ti(t)===null&&(l=n),n=n.sibling;n=l,n===null?(l=e.child,e.child=null):(l=n.sibling,n.sibling=null),wr(e,!1,l,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&ti(t)===null){e.child=l;break}t=l.sibling,l.sibling=n,n=l,l=t}wr(e,!0,n,null,i,a);break;case"together":wr(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function je(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),dn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(oa(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(d(153));if(e.child!==null){for(t=e.child,n=_e(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_e(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Er(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Ql(t)))}function fp(t,e,n){switch(e.tag){case 3:qt(e,e.stateNode.containerInfo),nn(e,St,t.memoizedState.cache),kn();break;case 27:case 5:Ma(e);break;case 4:qt(e,e.stateNode.containerInfo);break;case 10:nn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Zo(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(rn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Zu(t,e,n):(rn(e),t=je(t,e,n),t!==null?t.sibling:null);rn(e);break;case 19:var l=(t.flags&128)!==0;if(a=(n&e.childLanes)!==0,a||(oa(t,e,n,!1),a=(n&e.childLanes)!==0),l){if(a)return Ku(t,e,n);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),M(wt,wt.current),a)break;return null;case 22:return e.lanes=0,Wu(t,e,n,e.pendingProps);case 24:nn(e,St,t.memoizedState.cache)}return je(t,e,n)}function Ju(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Rt=!0;else{if(!Er(t,n)&&(e.flags&128)===0)return Rt=!1,fp(t,e,n);Rt=(t.flags&131072)!==0}else Rt=!1,P&&(e.flags&1048576)!==0&&zc(e,qa,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=Ln(e.elementType),e.type=t,typeof t=="function")Mo(t)?(a=Gn(t,a),e.tag=1,e=Vu(null,e,t,a,n)):(e.tag=0,e=gr(null,e,t,a,n));else{if(t!=null){var l=t.$$typeof;if(l===ut){e.tag=11,e=Uu(null,e,t,a,n);break t}else if(l===V){e.tag=14,e=Gu(null,e,t,a,n);break t}}throw e=Ce(t)||t,Error(d(306,e,""))}}return e;case 0:return gr(t,e,e.type,e.pendingProps,n);case 1:return a=e.type,l=Gn(a,e.pendingProps),Vu(t,e,a,l,n);case 3:t:{if(qt(e,e.stateNode.containerInfo),t===null)throw Error(d(387));a=e.pendingProps;var i=e.memoizedState;l=i.element,qo(t,e),Ja(e,a,null,n);var o=e.memoizedState;if(a=o.cache,nn(e,St,a),a!==i.cache&&No(e,[St],n,!0),Ka(),a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Qu(t,e,a,n);break t}else if(a!==l){l=fe(Error(d(424)),e),Ya(l),e=Qu(t,e,a,n);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,ht=be(t.firstChild),Lt=e,P=!0,tn=null,ge=!0,n=Wc(e,null,a,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kn(),a===l){e=je(t,e,n);break t}Bt(t,e,a,n)}e=e.child}return e;case 26:return di(t,e),t===null?(n=sf(e.type,null,e.pendingProps,null))?e.memoizedState=n:P||(n=e.type,t=e.pendingProps,a=zi(Z.current).createElement(n),a[_t]=e,a[Vt]=t,Ut(a,n,t),Ct(a),e.stateNode=a):e.memoizedState=sf(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ma(e),t===null&&P&&(a=e.stateNode=lf(e.type,e.pendingProps,Z.current),Lt=e,ge=!0,l=ht,mn(e.type)?(es=l,ht=be(a.firstChild)):ht=l),Bt(t,e,e.pendingProps.children,n),di(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&P&&((l=a=ht)&&(a=qp(a,e.type,e.pendingProps,ge),a!==null?(e.stateNode=a,Lt=e,ht=be(a.firstChild),ge=!1,l=!0):l=!1),l||en(e)),Ma(e),l=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,a=i.children,Jr(l,i)?a=null:o!==null&&Jr(l,o)&&(e.flags|=32),e.memoizedState!==null&&(l=Ko(t,e,ap,null,null,n),ml._currentValue=l),di(t,e),Bt(t,e,a,n),e.child;case 6:return t===null&&P&&((t=n=ht)&&(n=Yp(n,e.pendingProps,ge),n!==null?(e.stateNode=n,Lt=e,ht=null,t=!0):t=!1),t||en(e)),null;case 13:return Zu(t,e,n);case 4:return qt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Bn(e,null,a,n):Bt(t,e,a,n),e.child;case 11:return Uu(t,e,e.type,e.pendingProps,n);case 7:return Bt(t,e,e.pendingProps,n),e.child;case 8:return Bt(t,e,e.pendingProps.children,n),e.child;case 12:return Bt(t,e,e.pendingProps.children,n),e.child;case 10:return a=e.pendingProps,nn(e,e.type,a.value),Bt(t,e,a.children,n),e.child;case 9:return l=e.type._context,a=e.pendingProps.children,Dn(e),l=Nt(l),a=a(l),e.flags|=1,Bt(t,e,a,n),e.child;case 14:return Gu(t,e,e.type,e.pendingProps,n);case 15:return ju(t,e,e.type,e.pendingProps,n);case 19:return Ku(t,e,n);case 31:return dp(t,e,n);case 22:return Wu(t,e,n,e.pendingProps);case 24:return Dn(e),a=Nt(St),t===null?(l=Go(),l===null&&(l=ft,i=Bo(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),e.memoizedState={parent:a,cache:l},Wo(e),nn(e,St,l)):((t.lanes&n)!==0&&(qo(t,e),Ja(e,null,null,n),Ka()),l=t.memoizedState,i=e.memoizedState,l.parent!==a?(l={parent:a,cache:a},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),nn(e,St,a)):(a=i.cache,nn(e,St,a),a!==l.cache&&No(e,[St],n,!0))),Bt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(d(156,e.tag))}function We(t){t.flags|=4}function Sr(t,e,n,a,l){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(Sd())t.flags|=8192;else throw Nn=Jl,jo}else t.flags&=-16777217}function $u(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!hf(e))if(Sd())t.flags|=8192;else throw Nn=Jl,jo}function hi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Cs():536870912,t.lanes|=e,va|=e)}function nl(t,e){if(!P)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var l=t.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function hp(t,e,n){var a=e.pendingProps;switch(ko(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(e),null;case 1:return pt(e),null;case 3:return n=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Be(St),xt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(ia(e)?We(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Do())),pt(e),null;case 26:var l=e.type,i=e.memoizedState;return t===null?(We(e),i!==null?(pt(e),$u(e,i)):(pt(e),Sr(e,l,null,a,n))):i?i!==t.memoizedState?(We(e),pt(e),$u(e,i)):(pt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&We(e),pt(e),Sr(e,l,t,a,n)),null;case 27:if(Tl(e),n=Z.current,l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&We(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return pt(e),null}t=D.current,ia(e)?Cc(e):(t=lf(l,a,n),e.stateNode=t,We(e))}return pt(e),null;case 5:if(Tl(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&We(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return pt(e),null}if(i=D.current,ia(e))Cc(e);else{var o=zi(Z.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?o.createElement(l,{is:a.is}):o.createElement(l)}}i[_t]=e,i[Vt]=a;t:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break t;for(;o.sibling===null;){if(o.return===null||o.return===e)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=i;t:switch(Ut(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&We(e)}}return pt(e),Sr(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&We(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(d(166));if(t=Z.current,ia(e)){if(t=e.stateNode,n=e.memoizedProps,a=null,l=Lt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}t[_t]=e,t=!!(t.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Zd(t.nodeValue,n)),t||en(e,!0)}else t=zi(t).createTextNode(a),t[_t]=e,e.stateNode=t}return pt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(a=ia(e),n!==null){if(t===null){if(!a)throw Error(d(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(557));t[_t]=e}else kn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;pt(e),t=!1}else n=Do(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(le(e),e):(le(e),null);if((e.flags&128)!==0)throw Error(d(558))}return pt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=ia(e),a!==null&&a.dehydrated!==null){if(t===null){if(!l)throw Error(d(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(d(317));l[_t]=e}else kn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;pt(e),l=!1}else l=Do(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(le(e),e):(le(e),null)}return le(e),(e.flags&128)!==0?(e.lanes=n,e):(n=a!==null,t=t!==null&&t.memoizedState!==null,n&&(a=e.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),hi(e,e.updateQueue),pt(e),null);case 4:return xt(),t===null&&Vr(e.stateNode.containerInfo),pt(e),null;case 10:return Be(e.type),pt(e),null;case 19:if(S(wt),a=e.memoizedState,a===null)return pt(e),null;if(l=(e.flags&128)!==0,i=a.rendering,i===null)if(l)nl(a,!1);else{if(yt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=ti(t),i!==null){for(e.flags|=128,nl(a,!1),t=i.updateQueue,e.updateQueue=t,hi(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Rc(n,t),n=n.sibling;return M(wt,wt.current&1|2),P&&Le(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&Pt()>vi&&(e.flags|=128,l=!0,nl(a,!1),e.lanes=4194304)}else{if(!l)if(t=ti(i),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,hi(e,t),nl(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!P)return pt(e),null}else 2*Pt()-a.renderingStartTime>vi&&n!==536870912&&(e.flags|=128,l=!0,nl(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Pt(),t.sibling=null,n=wt.current,M(wt,l?n&1|2:n&1),P&&Le(e,a.treeForkCount),t):(pt(e),null);case 22:case 23:return le(e),Qo(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(n&536870912)!==0&&(e.flags&128)===0&&(pt(e),e.subtreeFlags&6&&(e.flags|=8192)):pt(e),n=e.updateQueue,n!==null&&hi(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048),t!==null&&S(_n),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Be(St),pt(e),null;case 25:return null;case 30:return null}throw Error(d(156,e.tag))}function pp(t,e){switch(ko(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Be(St),xt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Tl(e),null;case 31:if(e.memoizedState!==null){if(le(e),e.alternate===null)throw Error(d(340));kn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(le(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(d(340));kn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return S(wt),null;case 4:return xt(),null;case 10:return Be(e.type),null;case 22:case 23:return le(e),Qo(),t!==null&&S(_n),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Be(St),null;case 25:return null;default:return null}}function Pu(t,e){switch(ko(e),e.tag){case 3:Be(St),xt();break;case 26:case 27:case 5:Tl(e);break;case 4:xt();break;case 31:e.memoizedState!==null&&le(e);break;case 13:le(e);break;case 19:S(wt);break;case 10:Be(e.type);break;case 22:case 23:le(e),Qo(),t!==null&&S(_n);break;case 24:Be(St)}}function al(t,e){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&t)===t){a=void 0;var i=n.create,o=n.inst;a=i(),o.destroy=a}n=n.next}while(n!==l)}}catch(r){lt(e,e.return,r)}}function cn(t,e,n){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&t)===t){var o=a.inst,r=o.destroy;if(r!==void 0){o.destroy=void 0,l=e;var s=n,p=r;try{p()}catch(v){lt(l,s,v)}}}a=a.next}while(a!==i)}}catch(v){lt(e,e.return,v)}}function Iu(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Yc(e,n)}catch(a){lt(t,t.return,a)}}}function td(t,e,n){n.props=Gn(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(a){lt(t,e,a)}}function ll(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof n=="function"?t.refCleanup=n(a):n.current=a}}catch(l){lt(t,e,l)}}function ze(t,e){var n=t.ref,a=t.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){lt(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){lt(t,e,l)}else n.current=null}function ed(t){var e=t.type,n=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break t;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){lt(t,t.return,l)}}function Tr(t,e,n){try{var a=t.stateNode;Np(a,t.type,n,e),a[Vt]=e}catch(l){lt(t,t.return,l)}}function nd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&mn(t.type)||t.tag===4}function Rr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||nd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&mn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ar(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Oe));else if(a!==4&&(a===27&&mn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Ar(t,e,n),t=t.sibling;t!==null;)Ar(t,e,n),t=t.sibling}function pi(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(a!==4&&(a===27&&mn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(pi(t,e,n),t=t.sibling;t!==null;)pi(t,e,n),t=t.sibling}function ad(t){var e=t.stateNode,n=t.memoizedProps;try{for(var a=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Ut(e,a,n),e[_t]=t,e[Vt]=n}catch(i){lt(t,t.return,i)}}var qe=!1,At=!1,Mr=!1,ld=typeof WeakSet=="function"?WeakSet:Set,kt=null;function gp(t,e){if(t=t.containerInfo,Fr=Li,t=mc(t),xo(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break t}var o=0,r=-1,s=-1,p=0,v=0,E=t,g=null;e:for(;;){for(var b;E!==n||l!==0&&E.nodeType!==3||(r=o+l),E!==i||a!==0&&E.nodeType!==3||(s=o+a),E.nodeType===3&&(o+=E.nodeValue.length),(b=E.firstChild)!==null;)g=E,E=b;for(;;){if(E===t)break e;if(g===n&&++p===l&&(r=o),g===i&&++v===a&&(s=o),(b=E.nextSibling)!==null)break;E=g,g=E.parentNode}E=b}n=r===-1||s===-1?null:{start:r,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kr={focusedElem:t,selectionRange:n},Li=!1,kt=e;kt!==null;)if(e=kt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,kt=t;else for(;kt!==null;){switch(e=kt,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)l=t[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,n=e,l=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var k=Gn(n.type,l);t=a.getSnapshotBeforeUpdate(k,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(B){lt(n,n.return,B)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Pr(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Pr(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(d(163))}if(t=e.sibling,t!==null){t.return=e.return,kt=t;break}kt=e.return}}function id(t,e,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Xe(t,n),a&4&&al(5,n);break;case 1:if(Xe(t,n),a&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(o){lt(n,n.return,o)}else{var l=Gn(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(o){lt(n,n.return,o)}}a&64&&Iu(n),a&512&&ll(n,n.return);break;case 3:if(Xe(t,n),a&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Yc(t,e)}catch(o){lt(n,n.return,o)}}break;case 27:e===null&&a&4&&ad(n);case 26:case 5:Xe(t,n),e===null&&a&4&&ed(n),a&512&&ll(n,n.return);break;case 12:Xe(t,n);break;case 31:Xe(t,n),a&4&&sd(t,n);break;case 13:Xe(t,n),a&4&&cd(t,n),a&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Tp.bind(null,n),Xp(t,n))));break;case 22:if(a=n.memoizedState!==null||qe,!a){e=e!==null&&e.memoizedState!==null||At,l=qe;var i=At;qe=a,(At=e)&&!i?Ve(t,n,(n.subtreeFlags&8772)!==0):Xe(t,n),qe=l,At=i}break;case 30:break;default:Xe(t,n)}}function od(t){var e=t.alternate;e!==null&&(t.alternate=null,od(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&no(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gt=null,Zt=!1;function Ye(t,e,n){for(n=n.child;n!==null;)rd(t,e,n),n=n.sibling}function rd(t,e,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(za,n)}catch{}switch(n.tag){case 26:At||ze(n,e),Ye(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:At||ze(n,e);var a=gt,l=Zt;mn(n.type)&&(gt=n.stateNode,Zt=!1),Ye(t,e,n),hl(n.stateNode),gt=a,Zt=l;break;case 5:At||ze(n,e);case 6:if(a=gt,l=Zt,gt=null,Ye(t,e,n),gt=a,Zt=l,gt!==null)if(Zt)try{(gt.nodeType===9?gt.body:gt.nodeName==="HTML"?gt.ownerDocument.body:gt).removeChild(n.stateNode)}catch(i){lt(n,e,i)}else try{gt.removeChild(n.stateNode)}catch(i){lt(n,e,i)}break;case 18:gt!==null&&(Zt?(t=gt,Id(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Aa(t)):Id(gt,n.stateNode));break;case 4:a=gt,l=Zt,gt=n.stateNode.containerInfo,Zt=!0,Ye(t,e,n),gt=a,Zt=l;break;case 0:case 11:case 14:case 15:cn(2,n,e),At||cn(4,n,e),Ye(t,e,n);break;case 1:At||(ze(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"&&td(n,e,a)),Ye(t,e,n);break;case 21:Ye(t,e,n);break;case 22:At=(a=At)||n.memoizedState!==null,Ye(t,e,n),At=a;break;default:Ye(t,e,n)}}function sd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Aa(t)}catch(n){lt(e,e.return,n)}}}function cd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Aa(t)}catch(n){lt(e,e.return,n)}}function mp(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new ld),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new ld),e;default:throw Error(d(435,t.tag))}}function gi(t,e){var n=mp(t);e.forEach(function(a){if(!n.has(a)){n.add(a);var l=Rp.bind(null,t,a);a.then(l,l)}})}function Ft(t,e){var n=e.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],i=t,o=e,r=o;t:for(;r!==null;){switch(r.tag){case 27:if(mn(r.type)){gt=r.stateNode,Zt=!1;break t}break;case 5:gt=r.stateNode,Zt=!1;break t;case 3:case 4:gt=r.stateNode.containerInfo,Zt=!0;break t}r=r.return}if(gt===null)throw Error(d(160));rd(i,o,l),gt=null,Zt=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)ud(e,t),e=e.sibling}var Se=null;function ud(t,e){var n=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ft(e,t),Kt(t),a&4&&(cn(3,t,t.return),al(3,t),cn(5,t,t.return));break;case 1:Ft(e,t),Kt(t),a&512&&(At||n===null||ze(n,n.return)),a&64&&qe&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Se;if(Ft(e,t),Kt(t),a&512&&(At||n===null||ze(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=t.memoizedState,n===null)if(a===null)if(t.stateNode===null){t:{a=t.type,n=t.memoizedProps,l=l.ownerDocument||l;e:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[ka]||i[_t]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),Ut(i,a,n),i[_t]=t,Ct(i),a=i;break t;case"link":var o=df("link","href",l).get(a+(n.href||""));if(o){for(var r=0;r<o.length;r++)if(i=o[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(r,1);break e}}i=l.createElement(a),Ut(i,a,n),l.head.appendChild(i);break;case"meta":if(o=df("meta","content",l).get(a+(n.content||""))){for(r=0;r<o.length;r++)if(i=o[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(r,1);break e}}i=l.createElement(a),Ut(i,a,n),l.head.appendChild(i);break;default:throw Error(d(468,a))}i[_t]=t,Ct(i),a=i}t.stateNode=a}else ff(l,t.type,t.stateNode);else t.stateNode=uf(l,a,t.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?ff(l,t.type,t.stateNode):uf(l,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Tr(t,t.memoizedProps,n.memoizedProps)}break;case 27:Ft(e,t),Kt(t),a&512&&(At||n===null||ze(n,n.return)),n!==null&&a&4&&Tr(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Ft(e,t),Kt(t),a&512&&(At||n===null||ze(n,n.return)),t.flags&32){l=t.stateNode;try{Kn(l,"")}catch(k){lt(t,t.return,k)}}a&4&&t.stateNode!=null&&(l=t.memoizedProps,Tr(t,l,n!==null?n.memoizedProps:l)),a&1024&&(Mr=!0);break;case 6:if(Ft(e,t),Kt(t),a&4){if(t.stateNode===null)throw Error(d(162));a=t.memoizedProps,n=t.stateNode;try{n.nodeValue=a}catch(k){lt(t,t.return,k)}}break;case 3:if(ki=null,l=Se,Se=Hi(e.containerInfo),Ft(e,t),Se=l,Kt(t),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Aa(e.containerInfo)}catch(k){lt(t,t.return,k)}Mr&&(Mr=!1,dd(t));break;case 4:a=Se,Se=Hi(t.stateNode.containerInfo),Ft(e,t),Kt(t),Se=a;break;case 12:Ft(e,t),Kt(t);break;case 31:Ft(e,t),Kt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,gi(t,a)));break;case 13:Ft(e,t),Kt(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(bi=Pt()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,gi(t,a)));break;case 22:l=t.memoizedState!==null;var s=n!==null&&n.memoizedState!==null,p=qe,v=At;if(qe=p||l,At=v||s,Ft(e,t),At=v,qe=p,Kt(t),a&8192)t:for(e=t.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(n===null||s||qe||At||jn(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){s=n=e;try{if(i=s.stateNode,l)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{r=s.stateNode;var E=s.memoizedProps.style,g=E!=null&&E.hasOwnProperty("display")?E.display:null;r.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(k){lt(s,s.return,k)}}}else if(e.tag===6){if(n===null){s=e;try{s.stateNode.nodeValue=l?"":s.memoizedProps}catch(k){lt(s,s.return,k)}}}else if(e.tag===18){if(n===null){s=e;try{var b=s.stateNode;l?tf(b,!0):tf(s.stateNode,!1)}catch(k){lt(s,s.return,k)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,gi(t,n))));break;case 19:Ft(e,t),Kt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,gi(t,a)));break;case 30:break;case 21:break;default:Ft(e,t),Kt(t)}}function Kt(t){var e=t.flags;if(e&2){try{for(var n,a=t.return;a!==null;){if(nd(a)){n=a;break}a=a.return}if(n==null)throw Error(d(160));switch(n.tag){case 27:var l=n.stateNode,i=Rr(t);pi(t,i,l);break;case 5:var o=n.stateNode;n.flags&32&&(Kn(o,""),n.flags&=-33);var r=Rr(t);pi(t,r,o);break;case 3:case 4:var s=n.stateNode.containerInfo,p=Rr(t);Ar(t,p,s);break;default:throw Error(d(161))}}catch(v){lt(t,t.return,v)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;dd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Xe(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)id(t,e.alternate,e),e=e.sibling}function jn(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:cn(4,e,e.return),jn(e);break;case 1:ze(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&td(e,e.return,n),jn(e);break;case 27:hl(e.stateNode);case 26:case 5:ze(e,e.return),jn(e);break;case 22:e.memoizedState===null&&jn(e);break;case 30:jn(e);break;default:jn(e)}t=t.sibling}}function Ve(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,l=t,i=e,o=i.flags;switch(i.tag){case 0:case 11:case 15:Ve(l,i,n),al(4,i);break;case 1:if(Ve(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(p){lt(a,a.return,p)}if(a=i,l=a.updateQueue,l!==null){var r=a.stateNode;try{var s=l.shared.hiddenCallbacks;if(s!==null)for(l.shared.hiddenCallbacks=null,l=0;l<s.length;l++)qc(s[l],r)}catch(p){lt(a,a.return,p)}}n&&o&64&&Iu(i),ll(i,i.return);break;case 27:ad(i);case 26:case 5:Ve(l,i,n),n&&a===null&&o&4&&ed(i),ll(i,i.return);break;case 12:Ve(l,i,n);break;case 31:Ve(l,i,n),n&&o&4&&sd(l,i);break;case 13:Ve(l,i,n),n&&o&4&&cd(l,i);break;case 22:i.memoizedState===null&&Ve(l,i,n),ll(i,i.return);break;case 30:break;default:Ve(l,i,n)}e=e.sibling}}function zr(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Xa(n))}function Hr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Xa(t))}function Te(t,e,n,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fd(t,e,n,a),e=e.sibling}function fd(t,e,n,a){var l=e.flags;switch(e.tag){case 0:case 11:case 15:Te(t,e,n,a),l&2048&&al(9,e);break;case 1:Te(t,e,n,a);break;case 3:Te(t,e,n,a),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Xa(t)));break;case 12:if(l&2048){Te(t,e,n,a),t=e.stateNode;try{var i=e.memoizedProps,o=i.id,r=i.onPostCommit;typeof r=="function"&&r(o,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(s){lt(e,e.return,s)}}else Te(t,e,n,a);break;case 31:Te(t,e,n,a);break;case 13:Te(t,e,n,a);break;case 23:break;case 22:i=e.stateNode,o=e.alternate,e.memoizedState!==null?i._visibility&2?Te(t,e,n,a):il(t,e):i._visibility&2?Te(t,e,n,a):(i._visibility|=2,ga(t,e,n,a,(e.subtreeFlags&10256)!==0||!1)),l&2048&&zr(o,e);break;case 24:Te(t,e,n,a),l&2048&&Hr(e.alternate,e);break;default:Te(t,e,n,a)}}function ga(t,e,n,a,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,o=e,r=n,s=a,p=o.flags;switch(o.tag){case 0:case 11:case 15:ga(i,o,r,s,l),al(8,o);break;case 23:break;case 22:var v=o.stateNode;o.memoizedState!==null?v._visibility&2?ga(i,o,r,s,l):il(i,o):(v._visibility|=2,ga(i,o,r,s,l)),l&&p&2048&&zr(o.alternate,o);break;case 24:ga(i,o,r,s,l),l&&p&2048&&Hr(o.alternate,o);break;default:ga(i,o,r,s,l)}e=e.sibling}}function il(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,a=e,l=a.flags;switch(a.tag){case 22:il(n,a),l&2048&&zr(a.alternate,a);break;case 24:il(n,a),l&2048&&Hr(a.alternate,a);break;default:il(n,a)}e=e.sibling}}var ol=8192;function ma(t,e,n){if(t.subtreeFlags&ol)for(t=t.child;t!==null;)hd(t,e,n),t=t.sibling}function hd(t,e,n){switch(t.tag){case 26:ma(t,e,n),t.flags&ol&&t.memoizedState!==null&&ng(n,Se,t.memoizedState,t.memoizedProps);break;case 5:ma(t,e,n);break;case 3:case 4:var a=Se;Se=Hi(t.stateNode.containerInfo),ma(t,e,n),Se=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=ol,ol=16777216,ma(t,e,n),ol=a):ma(t,e,n));break;default:ma(t,e,n)}}function pd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function rl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];kt=a,md(a,t)}pd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)gd(t),t=t.sibling}function gd(t){switch(t.tag){case 0:case 11:case 15:rl(t),t.flags&2048&&cn(9,t,t.return);break;case 3:rl(t);break;case 12:rl(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,mi(t)):rl(t);break;default:rl(t)}}function mi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];kt=a,md(a,t)}pd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:cn(8,e,e.return),mi(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,mi(e));break;default:mi(e)}t=t.sibling}}function md(t,e){for(;kt!==null;){var n=kt;switch(n.tag){case 0:case 11:case 15:cn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Xa(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,kt=a;else t:for(n=t;kt!==null;){a=kt;var l=a.sibling,i=a.return;if(od(a),a===n){kt=null;break t}if(l!==null){l.return=i,kt=l;break t}kt=i}}}var bp={getCacheForType:function(t){var e=Nt(St),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return Nt(St).controller.signal}},vp=typeof WeakMap=="function"?WeakMap:Map,et=0,ft=null,F=null,J=0,at=0,ie=null,un=!1,ba=!1,Cr=!1,Qe=0,yt=0,dn=0,Wn=0,kr=0,oe=0,va=0,sl=null,Jt=null,Or=!1,bi=0,bd=0,vi=1/0,yi=null,fn=null,zt=0,hn=null,ya=null,Ze=0,Dr=0,_r=null,vd=null,cl=0,Lr=null;function re(){return(et&2)!==0&&J!==0?J&-J:y.T!==null?Wr():_s()}function yd(){if(oe===0)if((J&536870912)===0||P){var t=Ml;Ml<<=1,(Ml&3932160)===0&&(Ml=262144),oe=t}else oe=536870912;return t=ae.current,t!==null&&(t.flags|=32),oe}function $t(t,e,n){(t===ft&&(at===2||at===9)||t.cancelPendingCommit!==null)&&(xa(t,0),pn(t,J,oe,!1)),Ca(t,n),((et&2)===0||t!==ft)&&(t===ft&&((et&2)===0&&(Wn|=n),yt===4&&pn(t,J,oe,!1)),He(t))}function xd(t,e,n){if((et&6)!==0)throw Error(d(327));var a=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Ha(t,e),l=a?wp(t,e):Br(t,e,!0),i=a;do{if(l===0){ba&&!a&&pn(t,e,0,!1);break}else{if(n=t.current.alternate,i&&!yp(n)){l=Br(t,e,!1),i=!1;continue}if(l===2){if(i=e,t.errorRecoveryDisabledLanes&i)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){e=o;t:{var r=t;l=sl;var s=r.current.memoizedState.isDehydrated;if(s&&(xa(r,o).flags|=256),o=Br(r,o,!1),o!==2){if(Cr&&!s){r.errorRecoveryDisabledLanes|=i,Wn|=i,l=4;break t}i=Jt,Jt=l,i!==null&&(Jt===null?Jt=i:Jt.push.apply(Jt,i))}l=o}if(i=!1,l!==2)continue}}if(l===1){xa(t,0),pn(t,e,0,!0);break}t:{switch(a=t,i=l,i){case 0:case 1:throw Error(d(345));case 4:if((e&4194048)!==e)break;case 6:pn(a,e,oe,!un);break t;case 2:Jt=null;break;case 3:case 5:break;default:throw Error(d(329))}if((e&62914560)===e&&(l=bi+300-Pt(),10<l)){if(pn(a,e,oe,!un),Hl(a,0,!0)!==0)break t;Ze=e,a.timeoutHandle=$d(wd.bind(null,a,n,Jt,yi,Or,e,oe,Wn,va,un,i,"Throttled",-0,0),l);break t}wd(a,n,Jt,yi,Or,e,oe,Wn,va,un,i,null,-0,0)}}break}while(!0);He(t)}function wd(t,e,n,a,l,i,o,r,s,p,v,E,g,b){if(t.timeoutHandle=-1,E=e.subtreeFlags,E&8192||(E&16785408)===16785408){E={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oe},hd(e,i,E);var k=(i&62914560)===i?bi-Pt():(i&4194048)===i?bd-Pt():0;if(k=ag(E,k),k!==null){Ze=i,t.cancelPendingCommit=k(Hd.bind(null,t,e,i,n,a,l,o,r,s,v,E,null,g,b)),pn(t,i,o,!p);return}}Hd(t,e,i,n,a,l,o,r,s)}function yp(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!ee(i(),l))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pn(t,e,n,a){e&=~kr,e&=~Wn,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var l=e;0<l;){var i=31-te(l),o=1<<i;a[i]=-1,l&=~o}n!==0&&ks(t,n,e)}function xi(){return(et&6)===0?(ul(0),!1):!0}function Nr(){if(F!==null){if(at===0)var t=F.return;else t=F,Ne=On=null,Po(t),ua=null,Qa=0,t=F;for(;t!==null;)Pu(t.alternate,t),t=t.return;F=null}}function xa(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,Gp(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Ze=0,Nr(),ft=t,F=n=_e(t.current,null),J=e,at=0,ie=null,un=!1,ba=Ha(t,e),Cr=!1,va=oe=kr=Wn=dn=yt=0,Jt=sl=null,Or=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var l=31-te(a),i=1<<l;e|=t[l],a&=~i}return Qe=e,Wl(),n}function Ed(t,e){W=null,y.H=tl,e===ca||e===Kl?(e=Uc(),at=3):e===jo?(e=Uc(),at=4):at=e===pr?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ie=e,F===null&&(yt=1,ci(t,fe(e,t.current)))}function Sd(){var t=ae.current;return t===null?!0:(J&4194048)===J?me===null:(J&62914560)===J||(J&536870912)!==0?t===me:!1}function Td(){var t=y.H;return y.H=tl,t===null?tl:t}function Rd(){var t=y.A;return y.A=bp,t}function wi(){yt=4,un||(J&4194048)!==J&&ae.current!==null||(ba=!0),(dn&134217727)===0&&(Wn&134217727)===0||ft===null||pn(ft,J,oe,!1)}function Br(t,e,n){var a=et;et|=2;var l=Td(),i=Rd();(ft!==t||J!==e)&&(yi=null,xa(t,e)),e=!1;var o=yt;t:do try{if(at!==0&&F!==null){var r=F,s=ie;switch(at){case 8:Nr(),o=6;break t;case 3:case 2:case 9:case 6:ae.current===null&&(e=!0);var p=at;if(at=0,ie=null,wa(t,r,s,p),n&&ba){o=0;break t}break;default:p=at,at=0,ie=null,wa(t,r,s,p)}}xp(),o=yt;break}catch(v){Ed(t,v)}while(!0);return e&&t.shellSuspendCounter++,Ne=On=null,et=a,y.H=l,y.A=i,F===null&&(ft=null,J=0,Wl()),o}function xp(){for(;F!==null;)Ad(F)}function wp(t,e){var n=et;et|=2;var a=Td(),l=Rd();ft!==t||J!==e?(yi=null,vi=Pt()+500,xa(t,e)):ba=Ha(t,e);t:do try{if(at!==0&&F!==null){e=F;var i=ie;e:switch(at){case 1:at=0,ie=null,wa(t,e,i,1);break;case 2:case 9:if(Nc(i)){at=0,ie=null,Md(e);break}e=function(){at!==2&&at!==9||ft!==t||(at=7),He(t)},i.then(e,e);break t;case 3:at=7;break t;case 4:at=5;break t;case 7:Nc(i)?(at=0,ie=null,Md(e)):(at=0,ie=null,wa(t,e,i,7));break;case 5:var o=null;switch(F.tag){case 26:o=F.memoizedState;case 5:case 27:var r=F;if(o?hf(o):r.stateNode.complete){at=0,ie=null;var s=r.sibling;if(s!==null)F=s;else{var p=r.return;p!==null?(F=p,Ei(p)):F=null}break e}}at=0,ie=null,wa(t,e,i,5);break;case 6:at=0,ie=null,wa(t,e,i,6);break;case 8:Nr(),yt=6;break t;default:throw Error(d(462))}}Ep();break}catch(v){Ed(t,v)}while(!0);return Ne=On=null,y.H=a,y.A=l,et=n,F!==null?0:(ft=null,J=0,Wl(),yt)}function Ep(){for(;F!==null&&!Vf();)Ad(F)}function Ad(t){var e=Ju(t.alternate,t,Qe);t.memoizedProps=t.pendingProps,e===null?Ei(t):F=e}function Md(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Xu(n,e,e.pendingProps,e.type,void 0,J);break;case 11:e=Xu(n,e,e.pendingProps,e.type.render,e.ref,J);break;case 5:Po(e);default:Pu(n,e),e=F=Rc(e,Qe),e=Ju(n,e,Qe)}t.memoizedProps=t.pendingProps,e===null?Ei(t):F=e}function wa(t,e,n,a){Ne=On=null,Po(e),ua=null,Qa=0;var l=e.return;try{if(up(t,l,e,n,J)){yt=1,ci(t,fe(n,t.current)),F=null;return}}catch(i){if(l!==null)throw F=l,i;yt=1,ci(t,fe(n,t.current)),F=null;return}e.flags&32768?(P||a===1?t=!0:ba||(J&536870912)!==0?t=!1:(un=t=!0,(a===2||a===9||a===3||a===6)&&(a=ae.current,a!==null&&a.tag===13&&(a.flags|=16384))),zd(e,t)):Ei(e)}function Ei(t){var e=t;do{if((e.flags&32768)!==0){zd(e,un);return}t=e.return;var n=hp(e.alternate,e,Qe);if(n!==null){F=n;return}if(e=e.sibling,e!==null){F=e;return}F=e=t}while(e!==null);yt===0&&(yt=5)}function zd(t,e){do{var n=pp(t.alternate,t);if(n!==null){n.flags&=32767,F=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){F=t;return}F=t=n}while(t!==null);yt=6,F=null}function Hd(t,e,n,a,l,i,o,r,s){t.cancelPendingCommit=null;do Si();while(zt!==0);if((et&6)!==0)throw Error(d(327));if(e!==null){if(e===t.current)throw Error(d(177));if(i=e.lanes|e.childLanes,i|=Ro,eh(t,n,i,o,r,s),t===ft&&(F=ft=null,J=0),ya=e,hn=t,Ze=n,Dr=i,_r=l,vd=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ap(Rl,function(){return _d(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=y.T,y.T=null,l=A.p,A.p=2,o=et,et|=4;try{gp(t,e,n)}finally{et=o,A.p=l,y.T=a}}zt=1,Cd(),kd(),Od()}}function Cd(){if(zt===1){zt=0;var t=hn,e=ya,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=y.T,y.T=null;var a=A.p;A.p=2;var l=et;et|=4;try{ud(e,t);var i=Kr,o=mc(t.containerInfo),r=i.focusedElem,s=i.selectionRange;if(o!==r&&r&&r.ownerDocument&&gc(r.ownerDocument.documentElement,r)){if(s!==null&&xo(r)){var p=s.start,v=s.end;if(v===void 0&&(v=p),"selectionStart"in r)r.selectionStart=p,r.selectionEnd=Math.min(v,r.value.length);else{var E=r.ownerDocument||document,g=E&&E.defaultView||window;if(g.getSelection){var b=g.getSelection(),k=r.textContent.length,B=Math.min(s.start,k),st=s.end===void 0?B:Math.min(s.end,k);!b.extend&&B>st&&(o=st,st=B,B=o);var f=pc(r,B),c=pc(r,st);if(f&&c&&(b.rangeCount!==1||b.anchorNode!==f.node||b.anchorOffset!==f.offset||b.focusNode!==c.node||b.focusOffset!==c.offset)){var h=E.createRange();h.setStart(f.node,f.offset),b.removeAllRanges(),B>st?(b.addRange(h),b.extend(c.node,c.offset)):(h.setEnd(c.node,c.offset),b.addRange(h))}}}}for(E=[],b=r;b=b.parentNode;)b.nodeType===1&&E.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<E.length;r++){var x=E[r];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Li=!!Fr,Kr=Fr=null}finally{et=l,A.p=a,y.T=n}}t.current=e,zt=2}}function kd(){if(zt===2){zt=0;var t=hn,e=ya,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=y.T,y.T=null;var a=A.p;A.p=2;var l=et;et|=4;try{id(t,e.alternate,e)}finally{et=l,A.p=a,y.T=n}}zt=3}}function Od(){if(zt===4||zt===3){zt=0,Qf();var t=hn,e=ya,n=Ze,a=vd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?zt=5:(zt=0,ya=hn=null,Dd(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(fn=null),to(n),e=e.stateNode,It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(za,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=y.T,l=A.p,A.p=2,y.T=null;try{for(var i=t.onRecoverableError,o=0;o<a.length;o++){var r=a[o];i(r.value,{componentStack:r.stack})}}finally{y.T=e,A.p=l}}(Ze&3)!==0&&Si(),He(t),l=t.pendingLanes,(n&261930)!==0&&(l&42)!==0?t===Lr?cl++:(cl=0,Lr=t):cl=0,ul(0)}}function Dd(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Xa(e)))}function Si(){return Cd(),kd(),Od(),_d()}function _d(){if(zt!==5)return!1;var t=hn,e=Dr;Dr=0;var n=to(Ze),a=y.T,l=A.p;try{A.p=32>n?32:n,y.T=null,n=_r,_r=null;var i=hn,o=Ze;if(zt=0,ya=hn=null,Ze=0,(et&6)!==0)throw Error(d(331));var r=et;if(et|=4,gd(i.current),fd(i,i.current,o,n),et=r,ul(0,!1),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(za,i)}catch{}return!0}finally{A.p=l,y.T=a,Dd(t,e)}}function Ld(t,e,n){e=fe(n,e),e=hr(t.stateNode,e,2),t=on(t,e,2),t!==null&&(Ca(t,2),He(t))}function lt(t,e,n){if(t.tag===3)Ld(t,t,n);else for(;e!==null;){if(e.tag===3){Ld(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(fn===null||!fn.has(a))){t=fe(n,t),n=Nu(2),a=on(e,n,2),a!==null&&(Bu(n,a,e,t),Ca(a,2),He(a));break}}e=e.return}}function Ur(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new vp;var l=new Set;a.set(e,l)}else l=a.get(e),l===void 0&&(l=new Set,a.set(e,l));l.has(n)||(Cr=!0,l.add(n),t=Sp.bind(null,t,e,n),e.then(t,t))}function Sp(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,ft===t&&(J&n)===n&&(yt===4||yt===3&&(J&62914560)===J&&300>Pt()-bi?(et&2)===0&&xa(t,0):kr|=n,va===J&&(va=0)),He(t)}function Nd(t,e){e===0&&(e=Cs()),t=Hn(t,e),t!==null&&(Ca(t,e),He(t))}function Tp(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Nd(t,n)}function Rp(t,e){var n=0;switch(t.tag){case 31:case 13:var a=t.stateNode,l=t.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(d(314))}a!==null&&a.delete(e),Nd(t,n)}function Ap(t,e){return Ji(t,e)}var Ti=null,Ea=null,Gr=!1,Ri=!1,jr=!1,gn=0;function He(t){t!==Ea&&t.next===null&&(Ea===null?Ti=Ea=t:Ea=Ea.next=t),Ri=!0,Gr||(Gr=!0,zp())}function ul(t,e){if(!jr&&Ri){jr=!0;do for(var n=!1,a=Ti;a!==null;){if(t!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var o=a.suspendedLanes,r=a.pingedLanes;i=(1<<31-te(42|t)+1)-1,i&=l&~(o&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,jd(a,i))}else i=J,i=Hl(a,a===ft?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ha(a,i)||(n=!0,jd(a,i));a=a.next}while(n);jr=!1}}function Mp(){Bd()}function Bd(){Ri=Gr=!1;var t=0;gn!==0&&Up()&&(t=gn);for(var e=Pt(),n=null,a=Ti;a!==null;){var l=a.next,i=Ud(a,e);i===0?(a.next=null,n===null?Ti=l:n.next=l,l===null&&(Ea=n)):(n=a,(t!==0||(i&3)!==0)&&(Ri=!0)),a=l}zt!==0&&zt!==5||ul(t),gn!==0&&(gn=0)}function Ud(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,l=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var o=31-te(i),r=1<<o,s=l[o];s===-1?((r&n)===0||(r&a)!==0)&&(l[o]=th(r,e)):s<=e&&(t.expiredLanes|=r),i&=~r}if(e=ft,n=J,n=Hl(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,n===0||t===e&&(at===2||at===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&$i(a),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Ha(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(a!==null&&$i(a),to(n)){case 2:case 8:n=zs;break;case 32:n=Rl;break;case 268435456:n=Hs;break;default:n=Rl}return a=Gd.bind(null,t),n=Ji(n,a),t.callbackPriority=e,t.callbackNode=n,e}return a!==null&&a!==null&&$i(a),t.callbackPriority=2,t.callbackNode=null,2}function Gd(t,e){if(zt!==0&&zt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Si()&&t.callbackNode!==n)return null;var a=J;return a=Hl(t,t===ft?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(xd(t,a,e),Ud(t,Pt()),t.callbackNode!=null&&t.callbackNode===n?Gd.bind(null,t):null)}function jd(t,e){if(Si())return null;xd(t,e,!0)}function zp(){jp(function(){(et&6)!==0?Ji(Ms,Mp):Bd()})}function Wr(){if(gn===0){var t=ra;t===0&&(t=Al,Al<<=1,(Al&261888)===0&&(Al=256)),gn=t}return gn}function Wd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Dl(""+t)}function qd(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function Hp(t,e,n,a,l){if(e==="submit"&&n&&n.stateNode===l){var i=Wd((l[Vt]||null).action),o=a.submitter;o&&(e=(e=o[Vt]||null)?Wd(e.formAction):o.getAttribute("formAction"),e!==null&&(i=e,o=null));var r=new Bl("action","action",null,a,l);t.push({event:r,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(gn!==0){var s=o?qd(l,o):new FormData(l);rr(n,{pending:!0,data:s,method:l.method,action:i},null,s)}}else typeof i=="function"&&(r.preventDefault(),s=o?qd(l,o):new FormData(l),rr(n,{pending:!0,data:s,method:l.method,action:i},i,s))},currentTarget:l}]})}}for(var qr=0;qr<To.length;qr++){var Yr=To[qr],Cp=Yr.toLowerCase(),kp=Yr[0].toUpperCase()+Yr.slice(1);Ee(Cp,"on"+kp)}Ee(yc,"onAnimationEnd"),Ee(xc,"onAnimationIteration"),Ee(wc,"onAnimationStart"),Ee("dblclick","onDoubleClick"),Ee("focusin","onFocus"),Ee("focusout","onBlur"),Ee(Zh,"onTransitionRun"),Ee(Fh,"onTransitionStart"),Ee(Kh,"onTransitionCancel"),Ee(Ec,"onTransitionEnd"),Zn("onMouseEnter",["mouseout","mouseover"]),Zn("onMouseLeave",["mouseout","mouseover"]),Zn("onPointerEnter",["pointerout","pointerover"]),Zn("onPointerLeave",["pointerout","pointerover"]),Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Op=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dl));function Yd(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],l=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var o=a.length-1;0<=o;o--){var r=a[o],s=r.instance,p=r.currentTarget;if(r=r.listener,s!==i&&l.isPropagationStopped())break t;i=r,l.currentTarget=p;try{i(l)}catch(v){jl(v)}l.currentTarget=null,i=s}else for(o=0;o<a.length;o++){if(r=a[o],s=r.instance,p=r.currentTarget,r=r.listener,s!==i&&l.isPropagationStopped())break t;i=r,l.currentTarget=p;try{i(l)}catch(v){jl(v)}l.currentTarget=null,i=s}}}}function K(t,e){var n=e[eo];n===void 0&&(n=e[eo]=new Set);var a=t+"__bubble";n.has(a)||(Xd(e,t,2,!1),n.add(a))}function Xr(t,e,n){var a=0;e&&(a|=4),Xd(n,t,a,e)}var Ai="_reactListening"+Math.random().toString(36).slice(2);function Vr(t){if(!t[Ai]){t[Ai]=!0,Bs.forEach(function(n){n!=="selectionchange"&&(Op.has(n)||Xr(n,!1,t),Xr(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ai]||(e[Ai]=!0,Xr("selectionchange",!1,e))}}function Xd(t,e,n,a){switch(xf(e)){case 2:var l=og;break;case 8:l=rg;break;default:l=os}n=l.bind(null,e,n,t),l=void 0,!uo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),a?l!==void 0?t.addEventListener(e,n,{capture:!0,passive:l}):t.addEventListener(e,n,!0):l!==void 0?t.addEventListener(e,n,{passive:l}):t.addEventListener(e,n,!1)}function Qr(t,e,n,a,l){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var r=a.stateNode.containerInfo;if(r===l)break;if(o===4)for(o=a.return;o!==null;){var s=o.tag;if((s===3||s===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;r!==null;){if(o=Xn(r),o===null)return;if(s=o.tag,s===5||s===6||s===26||s===27){a=i=o;continue t}r=r.parentNode}}a=a.return}Ks(function(){var p=i,v=so(n),E=[];t:{var g=Sc.get(t);if(g!==void 0){var b=Bl,k=t;switch(t){case"keypress":if(Ll(n)===0)break t;case"keydown":case"keyup":b=Rh;break;case"focusin":k="focus",b=go;break;case"focusout":k="blur",b=go;break;case"beforeblur":case"afterblur":b=go;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=hh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=zh;break;case yc:case xc:case wc:b=mh;break;case Ec:b=Ch;break;case"scroll":case"scrollend":b=dh;break;case"wheel":b=Oh;break;case"copy":case"cut":case"paste":b=vh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=tc;break;case"toggle":case"beforetoggle":b=_h}var B=(e&4)!==0,st=!B&&(t==="scroll"||t==="scrollend"),f=B?g!==null?g+"Capture":null:g;B=[];for(var c=p,h;c!==null;){var x=c;if(h=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||h===null||f===null||(x=Da(c,f),x!=null&&B.push(fl(c,x,h))),st)break;c=c.return}0<B.length&&(g=new b(g,k,null,n,v),E.push({event:g,listeners:B}))}}if((e&7)===0){t:{if(g=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",g&&n!==ro&&(k=n.relatedTarget||n.fromElement)&&(Xn(k)||k[Yn]))break t;if((b||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,b?(k=n.relatedTarget||n.toElement,b=p,k=k?Xn(k):null,k!==null&&(st=L(k),B=k.tag,k!==st||B!==5&&B!==27&&B!==6)&&(k=null)):(b=null,k=p),b!==k)){if(B=Ps,x="onMouseLeave",f="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(B=tc,x="onPointerLeave",f="onPointerEnter",c="pointer"),st=b==null?g:Oa(b),h=k==null?g:Oa(k),g=new B(x,c+"leave",b,n,v),g.target=st,g.relatedTarget=h,x=null,Xn(v)===p&&(B=new B(f,c+"enter",k,n,v),B.target=h,B.relatedTarget=st,x=B),st=x,b&&k)e:{for(B=Dp,f=b,c=k,h=0,x=f;x;x=B(x))h++;x=0;for(var N=c;N;N=B(N))x++;for(;0<h-x;)f=B(f),h--;for(;0<x-h;)c=B(c),x--;for(;h--;){if(f===c||c!==null&&f===c.alternate){B=f;break e}f=B(f),c=B(c)}B=null}else B=null;b!==null&&Vd(E,g,b,B,!1),k!==null&&st!==null&&Vd(E,st,k,B,!0)}}t:{if(g=p?Oa(p):window,b=g.nodeName&&g.nodeName.toLowerCase(),b==="select"||b==="input"&&g.type==="file")var I=sc;else if(oc(g))if(cc)I=Xh;else{I=qh;var _=Wh}else b=g.nodeName,!b||b.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?p&&oo(p.elementType)&&(I=sc):I=Yh;if(I&&(I=I(t,p))){rc(E,I,n,v);break t}_&&_(t,g,p),t==="focusout"&&p&&g.type==="number"&&p.memoizedProps.value!=null&&io(g,"number",g.value)}switch(_=p?Oa(p):window,t){case"focusin":(oc(_)||_.contentEditable==="true")&&(In=_,wo=p,Wa=null);break;case"focusout":Wa=wo=In=null;break;case"mousedown":Eo=!0;break;case"contextmenu":case"mouseup":case"dragend":Eo=!1,bc(E,n,v);break;case"selectionchange":if(Qh)break;case"keydown":case"keyup":bc(E,n,v)}var Y;if(bo)t:{switch(t){case"compositionstart":var $="onCompositionStart";break t;case"compositionend":$="onCompositionEnd";break t;case"compositionupdate":$="onCompositionUpdate";break t}$=void 0}else Pn?lc(t,n)&&($="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(ec&&n.locale!=="ko"&&(Pn||$!=="onCompositionStart"?$==="onCompositionEnd"&&Pn&&(Y=Js()):(Pe=v,fo="value"in Pe?Pe.value:Pe.textContent,Pn=!0)),_=Mi(p,$),0<_.length&&($=new Is($,t,null,n,v),E.push({event:$,listeners:_}),Y?$.data=Y:(Y=ic(n),Y!==null&&($.data=Y)))),(Y=Nh?Bh(t,n):Uh(t,n))&&($=Mi(p,"onBeforeInput"),0<$.length&&(_=new Is("onBeforeInput","beforeinput",null,n,v),E.push({event:_,listeners:$}),_.data=Y)),Hp(E,t,p,n,v)}Yd(E,e)})}function fl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Mi(t,e){for(var n=e+"Capture",a=[];t!==null;){var l=t,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Da(t,n),l!=null&&a.unshift(fl(t,l,i)),l=Da(t,e),l!=null&&a.push(fl(t,l,i))),t.tag===3)return a;t=t.return}return[]}function Dp(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Vd(t,e,n,a,l){for(var i=e._reactName,o=[];n!==null&&n!==a;){var r=n,s=r.alternate,p=r.stateNode;if(r=r.tag,s!==null&&s===a)break;r!==5&&r!==26&&r!==27||p===null||(s=p,l?(p=Da(n,i),p!=null&&o.unshift(fl(n,p,s))):l||(p=Da(n,i),p!=null&&o.push(fl(n,p,s)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var _p=/\r\n?/g,Lp=/\u0000|\uFFFD/g;function Qd(t){return(typeof t=="string"?t:""+t).replace(_p,`
`).replace(Lp,"")}function Zd(t,e){return e=Qd(e),Qd(t)===e}function rt(t,e,n,a,l,i){switch(n){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Kn(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Kn(t,""+a);break;case"className":kl(t,"class",a);break;case"tabIndex":kl(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":kl(t,n,a);break;case"style":Zs(t,a,i);break;case"data":if(e!=="object"){kl(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=Dl(""+a),t.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(e!=="input"&&rt(t,e,"name",l.name,l,null),rt(t,e,"formEncType",l.formEncType,l,null),rt(t,e,"formMethod",l.formMethod,l,null),rt(t,e,"formTarget",l.formTarget,l,null)):(rt(t,e,"encType",l.encType,l,null),rt(t,e,"method",l.method,l,null),rt(t,e,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=Dl(""+a),t.setAttribute(n,a);break;case"onClick":a!=null&&(t.onclick=Oe);break;case"onScroll":a!=null&&K("scroll",t);break;case"onScrollEnd":a!=null&&K("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(d(60));t.innerHTML=n}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}n=Dl(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""+a):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":a===!0?t.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(n,a):t.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(n):t.setAttribute(n,a);break;case"popover":K("beforetoggle",t),K("toggle",t),Cl(t,"popover",a);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Cl(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ch.get(n)||n,Cl(t,n,a))}}function Zr(t,e,n,a,l,i){switch(n){case"style":Zs(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(d(60));t.innerHTML=n}}break;case"children":typeof a=="string"?Kn(t,a):(typeof a=="number"||typeof a=="bigint")&&Kn(t,""+a);break;case"onScroll":a!=null&&K("scroll",t);break;case"onScrollEnd":a!=null&&K("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Oe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Us.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),e=n.slice(2,l?n.length-7:void 0),i=t[Vt]||null,i=i!=null?i[n]:null,typeof i=="function"&&t.removeEventListener(e,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,a,l);break t}n in t?t[n]=a:a===!0?t.setAttribute(n,""):Cl(t,n,a)}}}function Ut(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":K("error",t),K("load",t);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var o=n[i];if(o!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:rt(t,e,i,o,n,null)}}l&&rt(t,e,"srcSet",n.srcSet,n,null),a&&rt(t,e,"src",n.src,n,null);return;case"input":K("invalid",t);var r=i=o=l=null,s=null,p=null;for(a in n)if(n.hasOwnProperty(a)){var v=n[a];if(v!=null)switch(a){case"name":l=v;break;case"type":o=v;break;case"checked":s=v;break;case"defaultChecked":p=v;break;case"value":i=v;break;case"defaultValue":r=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(d(137,e));break;default:rt(t,e,a,v,n,null)}}Ys(t,i,r,s,p,o,l,!1);return;case"select":K("invalid",t),a=o=i=null;for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case"value":i=r;break;case"defaultValue":o=r;break;case"multiple":a=r;default:rt(t,e,l,r,n,null)}e=i,n=o,t.multiple=!!a,e!=null?Fn(t,!!a,e,!1):n!=null&&Fn(t,!!a,n,!0);return;case"textarea":K("invalid",t),i=l=a=null;for(o in n)if(n.hasOwnProperty(o)&&(r=n[o],r!=null))switch(o){case"value":a=r;break;case"defaultValue":l=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:rt(t,e,o,r,n,null)}Vs(t,a,l,i);return;case"option":for(s in n)n.hasOwnProperty(s)&&(a=n[s],a!=null)&&(s==="selected"?t.selected=a&&typeof a!="function"&&typeof a!="symbol":rt(t,e,s,a,n,null));return;case"dialog":K("beforetoggle",t),K("toggle",t),K("cancel",t),K("close",t);break;case"iframe":case"object":K("load",t);break;case"video":case"audio":for(a=0;a<dl.length;a++)K(dl[a],t);break;case"image":K("error",t),K("load",t);break;case"details":K("toggle",t);break;case"embed":case"source":case"link":K("error",t),K("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in n)if(n.hasOwnProperty(p)&&(a=n[p],a!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:rt(t,e,p,a,n,null)}return;default:if(oo(e)){for(v in n)n.hasOwnProperty(v)&&(a=n[v],a!==void 0&&Zr(t,e,v,a,n,void 0));return}}for(r in n)n.hasOwnProperty(r)&&(a=n[r],a!=null&&rt(t,e,r,a,n,null))}function Np(t,e,n,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,o=null,r=null,s=null,p=null,v=null;for(b in n){var E=n[b];if(n.hasOwnProperty(b)&&E!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":s=E;default:a.hasOwnProperty(b)||rt(t,e,b,null,a,E)}}for(var g in a){var b=a[g];if(E=n[g],a.hasOwnProperty(g)&&(b!=null||E!=null))switch(g){case"type":i=b;break;case"name":l=b;break;case"checked":p=b;break;case"defaultChecked":v=b;break;case"value":o=b;break;case"defaultValue":r=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(137,e));break;default:b!==E&&rt(t,e,g,b,a,E)}}lo(t,o,r,s,p,v,i,l);return;case"select":b=o=r=g=null;for(i in n)if(s=n[i],n.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":b=s;default:a.hasOwnProperty(i)||rt(t,e,i,null,a,s)}for(l in a)if(i=a[l],s=n[l],a.hasOwnProperty(l)&&(i!=null||s!=null))switch(l){case"value":g=i;break;case"defaultValue":r=i;break;case"multiple":o=i;default:i!==s&&rt(t,e,l,i,a,s)}e=r,n=o,a=b,g!=null?Fn(t,!!n,g,!1):!!a!=!!n&&(e!=null?Fn(t,!!n,e,!0):Fn(t,!!n,n?[]:"",!1));return;case"textarea":b=g=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null&&!a.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:rt(t,e,r,null,a,l)}for(o in a)if(l=a[o],i=n[o],a.hasOwnProperty(o)&&(l!=null||i!=null))switch(o){case"value":g=l;break;case"defaultValue":b=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(d(91));break;default:l!==i&&rt(t,e,o,l,a,i)}Xs(t,g,b);return;case"option":for(var k in n)g=n[k],n.hasOwnProperty(k)&&g!=null&&!a.hasOwnProperty(k)&&(k==="selected"?t.selected=!1:rt(t,e,k,null,a,g));for(s in a)g=a[s],b=n[s],a.hasOwnProperty(s)&&g!==b&&(g!=null||b!=null)&&(s==="selected"?t.selected=g&&typeof g!="function"&&typeof g!="symbol":rt(t,e,s,g,a,b));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var B in n)g=n[B],n.hasOwnProperty(B)&&g!=null&&!a.hasOwnProperty(B)&&rt(t,e,B,null,a,g);for(p in a)if(g=a[p],b=n[p],a.hasOwnProperty(p)&&g!==b&&(g!=null||b!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(137,e));break;default:rt(t,e,p,g,a,b)}return;default:if(oo(e)){for(var st in n)g=n[st],n.hasOwnProperty(st)&&g!==void 0&&!a.hasOwnProperty(st)&&Zr(t,e,st,void 0,a,g);for(v in a)g=a[v],b=n[v],!a.hasOwnProperty(v)||g===b||g===void 0&&b===void 0||Zr(t,e,v,g,a,b);return}}for(var f in n)g=n[f],n.hasOwnProperty(f)&&g!=null&&!a.hasOwnProperty(f)&&rt(t,e,f,null,a,g);for(E in a)g=a[E],b=n[E],!a.hasOwnProperty(E)||g===b||g==null&&b==null||rt(t,e,E,g,a,b)}function Fd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Bp(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,o=l.initiatorType,r=l.duration;if(i&&r&&Fd(o)){for(o=0,r=l.responseEnd,a+=1;a<n.length;a++){var s=n[a],p=s.startTime;if(p>r)break;var v=s.transferSize,E=s.initiatorType;v&&Fd(E)&&(s=s.responseEnd,o+=v*(s<r?1:(r-p)/(s-p)))}if(--a,e+=8*(i+o)/(l.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Fr=null,Kr=null;function zi(t){return t.nodeType===9?t:t.ownerDocument}function Kd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Jr(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $r=null;function Up(){var t=window.event;return t&&t.type==="popstate"?t===$r?!1:($r=t,!0):($r=null,!1)}var $d=typeof setTimeout=="function"?setTimeout:void 0,Gp=typeof clearTimeout=="function"?clearTimeout:void 0,Pd=typeof Promise=="function"?Promise:void 0,jp=typeof queueMicrotask=="function"?queueMicrotask:typeof Pd<"u"?function(t){return Pd.resolve(null).then(t).catch(Wp)}:$d;function Wp(t){setTimeout(function(){throw t})}function mn(t){return t==="head"}function Id(t,e){var n=e,a=0;do{var l=n.nextSibling;if(t.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){t.removeChild(l),Aa(e);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")hl(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,hl(n);for(var i=n.firstChild;i;){var o=i.nextSibling,r=i.nodeName;i[ka]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=o}}else n==="body"&&hl(t.ownerDocument.body);n=l}while(n);Aa(e)}function tf(t,e){var n=t;t=0;do{var a=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=a}while(n)}function Pr(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Pr(n),no(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function qp(t,e,n,a){for(;t.nodeType===1;){var l=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[ka])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=be(t.nextSibling),t===null)break}return null}function Yp(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=be(t.nextSibling),t===null))return null;return t}function ef(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=be(t.nextSibling),t===null))return null;return t}function Ir(t){return t.data==="$?"||t.data==="$~"}function ts(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Xp(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var a=function(){e(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function be(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var es=null;function nf(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return be(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function af(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function lf(t,e,n){switch(e=zi(n),t){case"html":if(t=e.documentElement,!t)throw Error(d(452));return t;case"head":if(t=e.head,!t)throw Error(d(453));return t;case"body":if(t=e.body,!t)throw Error(d(454));return t;default:throw Error(d(451))}}function hl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);no(t)}var ve=new Map,of=new Set;function Hi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Fe=A.d;A.d={f:Vp,r:Qp,D:Zp,C:Fp,L:Kp,m:Jp,X:Pp,S:$p,M:Ip};function Vp(){var t=Fe.f(),e=xi();return t||e}function Qp(t){var e=Vn(t);e!==null&&e.tag===5&&e.type==="form"?Eu(e):Fe.r(t)}var Sa=typeof document>"u"?null:document;function rf(t,e,n){var a=Sa;if(a&&typeof e=="string"&&e){var l=ue(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),of.has(l)||(of.add(l),t={rel:t,crossOrigin:n,href:e},a.querySelector(l)===null&&(e=a.createElement("link"),Ut(e,"link",t),Ct(e),a.head.appendChild(e)))}}function Zp(t){Fe.D(t),rf("dns-prefetch",t,null)}function Fp(t,e){Fe.C(t,e),rf("preconnect",t,e)}function Kp(t,e,n){Fe.L(t,e,n);var a=Sa;if(a&&t&&e){var l='link[rel="preload"][as="'+ue(e)+'"]';e==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+ue(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+ue(n.imageSizes)+'"]')):l+='[href="'+ue(t)+'"]';var i=l;switch(e){case"style":i=Ta(t);break;case"script":i=Ra(t)}ve.has(i)||(t=H({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),ve.set(i,t),a.querySelector(l)!==null||e==="style"&&a.querySelector(pl(i))||e==="script"&&a.querySelector(gl(i))||(e=a.createElement("link"),Ut(e,"link",t),Ct(e),a.head.appendChild(e)))}}function Jp(t,e){Fe.m(t,e);var n=Sa;if(n&&t){var a=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+ue(a)+'"][href="'+ue(t)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ra(t)}if(!ve.has(i)&&(t=H({rel:"modulepreload",href:t},e),ve.set(i,t),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(gl(i)))return}a=n.createElement("link"),Ut(a,"link",t),Ct(a),n.head.appendChild(a)}}}function $p(t,e,n){Fe.S(t,e,n);var a=Sa;if(a&&t){var l=Qn(a).hoistableStyles,i=Ta(t);e=e||"default";var o=l.get(i);if(!o){var r={loading:0,preload:null};if(o=a.querySelector(pl(i)))r.loading=5;else{t=H({rel:"stylesheet",href:t,"data-precedence":e},n),(n=ve.get(i))&&ns(t,n);var s=o=a.createElement("link");Ct(s),Ut(s,"link",t),s._p=new Promise(function(p,v){s.onload=p,s.onerror=v}),s.addEventListener("load",function(){r.loading|=1}),s.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Ci(o,e,a)}o={type:"stylesheet",instance:o,count:1,state:r},l.set(i,o)}}}function Pp(t,e){Fe.X(t,e);var n=Sa;if(n&&t){var a=Qn(n).hoistableScripts,l=Ra(t),i=a.get(l);i||(i=n.querySelector(gl(l)),i||(t=H({src:t,async:!0},e),(e=ve.get(l))&&as(t,e),i=n.createElement("script"),Ct(i),Ut(i,"link",t),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Ip(t,e){Fe.M(t,e);var n=Sa;if(n&&t){var a=Qn(n).hoistableScripts,l=Ra(t),i=a.get(l);i||(i=n.querySelector(gl(l)),i||(t=H({src:t,async:!0,type:"module"},e),(e=ve.get(l))&&as(t,e),i=n.createElement("script"),Ct(i),Ut(i,"link",t),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function sf(t,e,n,a){var l=(l=Z.current)?Hi(l):null;if(!l)throw Error(d(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Ta(n.href),n=Qn(l).hoistableStyles,a=n.get(e),a||(a={type:"style",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Ta(n.href);var i=Qn(l).hoistableStyles,o=i.get(t);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,o),(i=l.querySelector(pl(t)))&&!i._p&&(o.instance=i,o.state.loading=5),ve.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ve.set(t,n),i||tg(l,t,n,o.state))),e&&a===null)throw Error(d(528,""));return o}if(e&&a!==null)throw Error(d(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ra(n),n=Qn(l).hoistableScripts,a=n.get(e),a||(a={type:"script",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,t))}}function Ta(t){return'href="'+ue(t)+'"'}function pl(t){return'link[rel="stylesheet"]['+t+"]"}function cf(t){return H({},t,{"data-precedence":t.precedence,precedence:null})}function tg(t,e,n,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Ut(e,"link",n),Ct(e),t.head.appendChild(e))}function Ra(t){return'[src="'+ue(t)+'"]'}function gl(t){return"script[async]"+t}function uf(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+ue(n.href)+'"]');if(a)return e.instance=a,Ct(a),a;var l=H({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Ct(a),Ut(a,"style",l),Ci(a,n.precedence,t),e.instance=a;case"stylesheet":l=Ta(n.href);var i=t.querySelector(pl(l));if(i)return e.state.loading|=4,e.instance=i,Ct(i),i;a=cf(n),(l=ve.get(l))&&ns(a,l),i=(t.ownerDocument||t).createElement("link"),Ct(i);var o=i;return o._p=new Promise(function(r,s){o.onload=r,o.onerror=s}),Ut(i,"link",a),e.state.loading|=4,Ci(i,n.precedence,t),e.instance=i;case"script":return i=Ra(n.src),(l=t.querySelector(gl(i)))?(e.instance=l,Ct(l),l):(a=n,(l=ve.get(i))&&(a=H({},n),as(a,l)),t=t.ownerDocument||t,l=t.createElement("script"),Ct(l),Ut(l,"link",a),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(d(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Ci(a,n.precedence,t));return e.instance}function Ci(t,e,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,o=0;o<a.length;o++){var r=a[o];if(r.dataset.precedence===e)i=r;else if(i!==l)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function ns(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function as(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var ki=null;function df(t,e,n){if(ki===null){var a=new Map,l=ki=new Map;l.set(n,a)}else l=ki,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(t))return a;for(a.set(t,null),n=n.getElementsByTagName(t),l=0;l<n.length;l++){var i=n[l];if(!(i[ka]||i[_t]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(e)||"";o=t+o;var r=a.get(o);r?r.push(i):a.set(o,[i])}}return a}function ff(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function eg(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function hf(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function ng(t,e,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Ta(a.href),i=e.querySelector(pl(l));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Oi.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=i,Ct(i);return}i=e.ownerDocument||e,a=cf(a),(l=ve.get(l))&&ns(a,l),i=i.createElement("link"),Ct(i);var o=i;o._p=new Promise(function(r,s){o.onload=r,o.onerror=s}),Ut(i,"link",a),n.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Oi.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var ls=0;function ag(t,e){return t.stylesheets&&t.count===0&&_i(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var a=setTimeout(function(){if(t.stylesheets&&_i(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&ls===0&&(ls=62500*Bp());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&_i(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>ls?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function Oi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_i(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Di=null;function _i(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Di=new Map,e.forEach(lg,t),Di=null,Oi.call(t))}function lg(t,e){if(!(e.state.loading&4)){var n=Di.get(t);if(n)var a=n.get(null);else{n=new Map,Di.set(t,n);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var o=l[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),a=o)}a&&n.set(null,a)}l=e.instance,o=l.getAttribute("data-precedence"),i=n.get(o)||a,i===a&&n.set(null,l),n.set(o,l),this.count++,a=Oi.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var ml={$$typeof:ct,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function ig(t,e,n,a,l,i,o,r,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.hiddenUpdates=Pi(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function pf(t,e,n,a,l,i,o,r,s,p,v,E){return t=new ig(t,e,n,o,s,p,v,E,r),e=1,i===!0&&(e|=24),i=ne(3,null,null,e),t.current=i,i.stateNode=t,e=Bo(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:e},Wo(i),t}function gf(t){return t?(t=na,t):na}function mf(t,e,n,a,l,i){l=gf(l),a.context===null?a.context=l:a.pendingContext=l,a=ln(e),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=on(t,a,e),n!==null&&($t(n,t,e),Fa(n,t,e))}function bf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function is(t,e){bf(t,e),(t=t.alternate)&&bf(t,e)}function vf(t){if(t.tag===13||t.tag===31){var e=Hn(t,67108864);e!==null&&$t(e,t,67108864),is(t,67108864)}}function yf(t){if(t.tag===13||t.tag===31){var e=re();e=Ii(e);var n=Hn(t,e);n!==null&&$t(n,t,e),is(t,e)}}var Li=!0;function og(t,e,n,a){var l=y.T;y.T=null;var i=A.p;try{A.p=2,os(t,e,n,a)}finally{A.p=i,y.T=l}}function rg(t,e,n,a){var l=y.T;y.T=null;var i=A.p;try{A.p=8,os(t,e,n,a)}finally{A.p=i,y.T=l}}function os(t,e,n,a){if(Li){var l=rs(a);if(l===null)Qr(t,e,a,Ni,n),wf(t,a);else if(cg(l,t,e,n,a))a.stopPropagation();else if(wf(t,a),e&4&&-1<sg.indexOf(t)){for(;l!==null;){var i=Vn(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Tn(i.pendingLanes);if(o!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;o;){var s=1<<31-te(o);r.entanglements[1]|=s,o&=~s}He(i),(et&6)===0&&(vi=Pt()+500,ul(0))}}break;case 31:case 13:r=Hn(i,2),r!==null&&$t(r,i,2),xi(),is(i,2)}if(i=rs(a),i===null&&Qr(t,e,a,Ni,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else Qr(t,e,a,null,n)}}function rs(t){return t=so(t),ss(t)}var Ni=null;function ss(t){if(Ni=null,t=Xn(t),t!==null){var e=L(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=q(e),t!==null)return t;t=null}else if(n===31){if(t=Q(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ni=t,null}function xf(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zf()){case Ms:return 2;case zs:return 8;case Rl:case Ff:return 32;case Hs:return 268435456;default:return 32}default:return 32}}var cs=!1,bn=null,vn=null,yn=null,bl=new Map,vl=new Map,xn=[],sg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wf(t,e){switch(t){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":bl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(e.pointerId)}}function yl(t,e,n,a,l,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},e!==null&&(e=Vn(e),e!==null&&vf(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function cg(t,e,n,a,l){switch(e){case"focusin":return bn=yl(bn,t,e,n,a,l),!0;case"dragenter":return vn=yl(vn,t,e,n,a,l),!0;case"mouseover":return yn=yl(yn,t,e,n,a,l),!0;case"pointerover":var i=l.pointerId;return bl.set(i,yl(bl.get(i)||null,t,e,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,vl.set(i,yl(vl.get(i)||null,t,e,n,a,l)),!0}return!1}function Ef(t){var e=Xn(t.target);if(e!==null){var n=L(e);if(n!==null){if(e=n.tag,e===13){if(e=q(n),e!==null){t.blockedOn=e,Ls(t.priority,function(){yf(n)});return}}else if(e===31){if(e=Q(n),e!==null){t.blockedOn=e,Ls(t.priority,function(){yf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rs(t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);ro=a,n.target.dispatchEvent(a),ro=null}else return e=Vn(n),e!==null&&vf(e),t.blockedOn=n,!1;e.shift()}return!0}function Sf(t,e,n){Bi(t)&&n.delete(e)}function ug(){cs=!1,bn!==null&&Bi(bn)&&(bn=null),vn!==null&&Bi(vn)&&(vn=null),yn!==null&&Bi(yn)&&(yn=null),bl.forEach(Sf),vl.forEach(Sf)}function Ui(t,e){t.blockedOn===e&&(t.blockedOn=null,cs||(cs=!0,m.unstable_scheduleCallback(m.unstable_NormalPriority,ug)))}var Gi=null;function Tf(t){Gi!==t&&(Gi=t,m.unstable_scheduleCallback(m.unstable_NormalPriority,function(){Gi===t&&(Gi=null);for(var e=0;e<t.length;e+=3){var n=t[e],a=t[e+1],l=t[e+2];if(typeof a!="function"){if(ss(a||n)===null)continue;break}var i=Vn(n);i!==null&&(t.splice(e,3),e-=3,rr(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function Aa(t){function e(s){return Ui(s,t)}bn!==null&&Ui(bn,t),vn!==null&&Ui(vn,t),yn!==null&&Ui(yn,t),bl.forEach(e),vl.forEach(e);for(var n=0;n<xn.length;n++){var a=xn[n];a.blockedOn===t&&(a.blockedOn=null)}for(;0<xn.length&&(n=xn[0],n.blockedOn===null);)Ef(n),n.blockedOn===null&&xn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],o=l[Vt]||null;if(typeof i=="function")o||Tf(n);else if(o){var r=null;if(i&&i.hasAttribute("formAction")){if(l=i,o=i[Vt]||null)r=o.formAction;else if(ss(l)!==null)continue}else r=o.action;typeof r=="function"?n[a+1]=r:(n.splice(a,3),a-=3),Tf(n)}}}function Rf(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return l=o})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function us(t){this._internalRoot=t}ji.prototype.render=us.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(d(409));var n=e.current,a=re();mf(n,a,t,e,null,null)},ji.prototype.unmount=us.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mf(t.current,2,null,t,null,null),xi(),e[Yn]=null}};function ji(t){this._internalRoot=t}ji.prototype.unstable_scheduleHydration=function(t){if(t){var e=_s();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xn.length&&e!==0&&e<xn[n].priority;n++);xn.splice(n,0,t),n===0&&Ef(t)}};var Af=R.version;if(Af!=="19.2.0")throw Error(d(527,Af,"19.2.0"));A.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=w(e),t=t!==null?O(t):null,t=t===null?null:t.stateNode,t};var dg={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{za=Wi.inject(dg),It=Wi}catch{}}return xl.createRoot=function(t,e){if(!C(t))throw Error(d(299));var n=!1,a="",l=Ou,i=Du,o=_u;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=pf(t,1,!1,null,null,n,a,null,l,i,o,Rf),t[Yn]=e.current,Vr(t),new us(e)},xl.hydrateRoot=function(t,e,n){if(!C(t))throw Error(d(299));var a=!1,l="",i=Ou,o=Du,r=_u,s=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(r=n.onRecoverableError),n.formState!==void 0&&(s=n.formState)),e=pf(t,1,!0,e,n??null,a,l,s,i,o,r,Rf),e.context=gf(null),n=e.current,a=re(),a=Ii(a),l=ln(a),l.callback=null,on(n,l,a),n=a,e.current.lanes=n,Ca(e,n),He(e),t[Yn]=e.current,Vr(t),new ji(e)},xl.version="19.2.0",xl}var _f;function xg(){if(_f)return fs.exports;_f=1;function m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m)}catch(R){console.error(R)}}return m(),fs.exports=yg(),fs.exports}var wg=xg(),ms={exports:{}},wl={};var Lf;function Eg(){if(Lf)return wl;Lf=1;var m=Symbol.for("react.transitional.element"),R=Symbol.for("react.fragment");function T(d,C,L){var q=null;if(L!==void 0&&(q=""+L),C.key!==void 0&&(q=""+C.key),"key"in C){L={};for(var Q in C)Q!=="key"&&(L[Q]=C[Q])}else L=C;return C=L.ref,{$$typeof:m,type:d,key:q,ref:C!==void 0?C:null,props:L}}return wl.Fragment=R,wl.jsx=T,wl.jsxs=T,wl}var Nf;function Sg(){return Nf||(Nf=1,ms.exports=Eg()),ms.exports}var Vi=Sg();const Es=m=>Math.min(1,Math.max(0,m));function Bf(m,R){if(typeof m!="string")return R;const T=m.trim().match(/^#([\da-f]{3}|[\da-f]{6})$/i);if(!T)return R;const d=T[1].toLowerCase();return`#${d.length===3?d.replace(/./g,C=>C+C):d}`}function Ss(m){const[R,T,d]=[1,3,5].map(w=>Number.parseInt(m.slice(w,w+2),16)/255),C=Math.max(R,T,d),L=Math.min(R,T,d),q=(C+L)/2,Q=C-L;if(Q===0)return{h:0,s:0,l:q};const z=Q/(1-Math.abs(2*q-1));return{h:((C===R?(T-d)/Q%6:C===T?(d-R)/Q+2:(R-T)/Q+4)*60+360)%360,s:z,l:q}}function Tg({h:m,s:R,l:T}){const d=(1-Math.abs(2*T-1))*R,C=d*(1-Math.abs(m/60%2-1)),L=T-d/2,[q,Q,z]=m<60?[d,C,0]:m<120?[C,d,0]:m<180?[0,d,C]:m<240?[0,C,d]:m<300?[C,0,d]:[d,0,C];return[q+L,Q+L,z+L].map(w=>Math.round(Es(w)*255))}function Rg(m){return`#${Tg(m).map(R=>R.toString(16).padStart(2,"0")).join("")}`}function Uf(m,R){const T=Ss(m),d=Ss(R);return{hue:d.h-T.h,saturation:T.s>.01?Math.min(3,d.s/T.s):1,lightness:T.l>.01?Math.min(3,d.l/T.l):1}}function Gf(m,R){return R.find(T=>T.value===m)??R[0]}function jf(m,R,T){return R.includes(m)?m:T}function bs(m,[R,T,d]){return Number.isFinite(m)?Math.min(d,Math.max(R,m)):T}function Ag(m){const R=[...new Set(m.map(T=>T.google).filter(T=>!!T))];if(R.length)return`https://fonts.googleapis.com/css2?${R.map(T=>`family=${T}`).join("&")}&display=swap`}function Mg(m){const{headingFont:R,bodyFont:T,headingWeight:d,bodyWeight:C,primaryColor:L,headingSize:q,bodySize:Q,headingLetterSpacing:z,...w}=m;return[{headingFont:R,bodyFont:T,headingWeight:d,bodyWeight:C,primaryColor:L,headingSize:q,bodySize:Q,headingLetterSpacing:z},w]}function zg(m,R){const{headingFont:T,bodyFont:d,headingWeight:C,bodyWeight:L,primaryColor:q,headingSize:Q,bodySize:z,headingLetterSpacing:w}=R;return Sl.useMemo(()=>{const O=Gf(T,m.headingFonts),H=Gf(d,m.bodyFonts),X=Bf(q,m.primaryColor),mt=X===m.primaryColor,Ht=Uf(m.primaryColor,X),Mt=ct=>{if(mt)return ct;const ut=Ss(Bf(ct,ct));return Rg({h:(ut.h+Ht.hue+360)%360,s:Es(ut.s*Ht.saturation),l:Es(ut.l*Ht.lightness)})},ye=ct=>{if(mt)return ct;const ut=ct.match(/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[,/]\s*([\d.]+%?)\s*)?\)$/i);if(!ut)return ct;const se=`#${[ut[1],ut[2],ut[3]].map(Wt=>Math.round(Number(Wt)).toString(16).padStart(2,"0")).join("")}`,[Ot,V,Dt]=[1,3,5].map(Wt=>Number.parseInt(Mt(se).slice(Wt,Wt+2),16));return ut[4]===void 0?`rgb(${Ot}, ${V}, ${Dt})`:`rgba(${Ot}, ${V}, ${Dt}, ${ut[4]})`},jt=(ct=m.primaryColor)=>{if(mt)return"none";const ut=Uf(ct,Mt(ct));return[`hue-rotate(${ut.hue.toFixed(2)}deg)`,`saturate(${Math.max(0,ut.saturation).toFixed(3)})`,`brightness(${Math.min(2,Math.max(.2,ut.lightness)).toFixed(3)})`].join(" ")},xe={heading:O.stack,body:H.stack,headingWeight:jf(C,m.headingWeights,m.headingWeight),bodyWeight:jf(L,m.bodyWeights,m.bodyWeight),primary:X,headingSize:bs(Q,m.headingSize),bodySize:bs(z,m.bodySize),headingLetterSpacing:bs(w,m.headingLetterSpacing),retone:Mt,retoneRgba:ye,filter:jt};return{css:m.css(xe),fontHref:Ag([O,H]),inlineStyles:m.inlineStyles?.(xe)}},[m,T,d,C,L,q,Q,z,w])}const vs="threeui-page-typography",Wf="threeui-page-typography-fonts";function qf(m,R){const T=m?.contentDocument;if(!T?.head)return;const d=T.getElementById(Wf);if(R?.fontHref){const L=d??T.createElement("link");L.id=Wf,L.rel="stylesheet",L.getAttribute("href")!==R.fontHref&&(L.href=R.fontHref),d||T.head.append(L)}else d?.remove();if(!R?.css){T.getElementById(vs)?.remove();return}const C=T.getElementById(vs)??T.createElement("style");C.id=vs,C.textContent!==R.css&&(C.textContent=R.css),T.head.append(C);for(const L of R.inlineStyles??[])for(const q of T.querySelectorAll(L.selector))for(const[Q,z]of Object.entries(L.styles))q.style.setProperty(Q,z)}const Hg=m=>Number(m.toFixed(3)),qi=m=>`${Hg(m)}px`,Cg={headingFonts:[{value:"onest",label:"Onest",stack:"'Onest', system-ui, -apple-system, 'Helvetica Neue', sans-serif"},{value:"instrument-serif",label:"Instrument Serif",stack:'"Instrument Serif", Georgia, serif',google:"Instrument+Serif"},{value:"newsreader",label:"Newsreader",stack:'"Newsreader", Georgia, serif',google:"Newsreader:wght@200..700"},{value:"geist",label:"Geist",stack:'"Geist", system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',google:"Geist:wght@100..900"}],bodyFonts:[{value:"onest",label:"Onest",stack:"'Onest', system-ui, -apple-system, 'Helvetica Neue', sans-serif"},{value:"geist",label:"Geist",stack:'"Geist", system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',google:"Geist:wght@100..900"},{value:"newsreader",label:"Newsreader",stack:'"Newsreader", Georgia, serif',google:"Newsreader:wght@200..700"},{value:"instrument-serif",label:"Instrument Serif",stack:'"Instrument Serif", Georgia, serif',google:"Instrument+Serif"}],headingWeights:["400","500","600","700"],headingWeight:"400",bodyWeights:["300","400","500","600"],bodyWeight:"300",primaryColor:"#e0231c",headingSize:[30,46,72],bodySize:[13,17,24],headingLetterSpacing:[-.06,-.012,.12],css:m=>`
:root {
  --vermilion: ${m.primary};
  --ember: ${m.retone("#ff5a3c")};
}
body { font-family: ${m.body}; }
body, .body, .body-lg, .num { font-weight: ${m.bodyWeight}; }
h1:not(.jp), h2:not(.jp), h3:not(.jp), .display:not(.jp) {
  font-family: ${m.heading};
  font-weight: ${m.headingWeight};
}
.display { letter-spacing: ${m.headingLetterSpacing}em; }
.h-hero { font-size: clamp(26px, 3.05vw, ${qi(m.headingSize)}); }
.h-sec { font-size: clamp(30px, 4vw, ${qi(m.headingSize*60/46)}); }
.body-lg { font-size: clamp(14px, 1.02vw, ${qi(m.bodySize)}); }
.body { font-size: ${qi(Math.max(11,m.bodySize-3))}; }
`},kg="allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts";function Og({className:m="",customization:R,sourceUrl:T,srcDoc:d,style:C,title:L}){const[q,Q]=Sl.useState(!1),z=Sl.useRef(null);return Sl.useEffect(()=>{qf(z.current,R)},[R]),Vi.jsx("div",{className:`threeui-background landing-page-frame${m?` ${m}`:""}`,"data-state":q?"ready":"loading",style:{position:"relative",overflow:"hidden",background:"#080808",pointerEvents:"auto",...C},children:Vi.jsx("iframe",{ref:z,title:L,...d?{srcDoc:d}:{src:T},sandbox:kg,loading:"eager",onLoad:w=>{qf(w.currentTarget,R),Q(!0)},style:{position:"absolute",inset:0,display:"block",width:"100%",height:"100%",border:0,background:"#080808"}})})}function Dg({recipe:m,title:R,sourceUrl:T,...d}){const[C,L]=Mg(d),q=zg(m,C);return Vi.jsx(Og,{...L,customization:q,title:R,sourceUrl:T})}function _g(m){return Vi.jsx(Dg,{...m,recipe:Cg,title:"Kage — Where stillness reveals the unseen",sourceUrl:"/landing-pages/kage.html"})}const Lg=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Kage — Where stillness reveals the unseen</title>
<meta name="description" content="A five-chapter night walk through a Kyoto mountain temple. Charred cypress, lantern light and a vermilion moon, rendered live in WebGL.">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%2305070a'/%3E%3Ccircle cx='16' cy='17' r='8' fill='%23e0231c'/%3E%3Crect x='4' y='8' width='24' height='2.6' fill='%23dfe7e0'/%3E%3Crect x='7' y='13' width='18' height='2' fill='%23dfe7e0'/%3E%3C/svg%3E">
<link rel="stylesheet" href="secret-pathways-assets/fonts.css">
<style>
/* ============================================================= tokens */
:root{
  --ink:#05070a;          /* page black */
  --ink-2:#0a0e12;        /* raised black */
  --bone:#dfe7e0;         /* the pale sage white of the wordmark */
  --bone-dim:#aab4ad;
  --muted:#78837c;
  --line:rgba(223,231,224,.13);
  --line-soft:rgba(223,231,224,.07);
  --vermilion:#e0231c;
  --ember:#ff5a3c;
  --gold:#c9a24a;
  --pad:clamp(20px, 3.4vw, 56px);
  --nav-h:84px;
  --ease:cubic-bezier(.22,.61,.36,1);
  --ease-out:cubic-bezier(.16,1,.3,1);
  --ease-io:cubic-bezier(.65,0,.35,1);
}
*,*::before,*::after{box-sizing:border-box}
html{ -webkit-text-size-adjust:100%; scroll-behavior:auto; }
body{
  margin:0; background:var(--ink); color:var(--bone);
  font-family:'Onest',system-ui,-apple-system,'Helvetica Neue',sans-serif;
  font-weight:300; font-size:16px; line-height:1.6;
  -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;
  overflow-x:hidden;
}
body.is-locked{ overflow:hidden; height:100vh; }
::selection{ background:var(--vermilion); color:#fff; }
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
button{font:inherit;color:inherit;background:none;border:0;cursor:pointer}

/* ============================================================= layers */
#gl{
  position:fixed; inset:0; width:100%; height:100%;
  display:block; z-index:0; background:#05070a;
}
#grain{
  position:fixed; inset:-1px; z-index:60; pointer-events:none;
  opacity:.055; mix-blend-mode:overlay;
  background-repeat:repeat; background-size:180px 180px;
}
#vignette{
  position:fixed; inset:0; z-index:55; pointer-events:none;
  background:radial-gradient(125% 95% at 50% 42%, transparent 40%, rgba(2,4,6,.55) 100%);
}
.page{ position:relative; z-index:10; }

/* ============================================================= type */
.eyebrow{
  font-size:10px; font-weight:500; letter-spacing:.22em; text-transform:uppercase;
  color:var(--bone-dim); text-shadow:0 1px 16px rgba(3,6,8,.9);
}
.jp{ font-family:'NotoJP','Onest',sans-serif; font-weight:400; }
h1,h2,h3{ font-weight:400; margin:0; letter-spacing:-.005em; }
.display{
  text-transform:uppercase; line-height:1.055; letter-spacing:-.012em;
  font-weight:400; text-shadow:0 2px 34px rgba(3,6,8,.72);
}
.h-hero{ font-size:clamp(26px,3.05vw,46px); }
.h-sec{ font-size:clamp(30px,4.0vw,60px); }
.body-lg{ font-size:clamp(14px,1.02vw,17px); line-height:1.72; color:#b4bfb7; font-weight:300; text-shadow:0 1px 20px rgba(3,6,8,.88); }
.body{ font-size:14px; line-height:1.68; color:#9aa5a0; font-weight:300; text-shadow:0 1px 18px rgba(3,6,8,.85); }
.num{ font-size:clamp(26px,2.5vw,36px); font-weight:300; letter-spacing:-.02em; color:var(--bone); font-variant-numeric:tabular-nums; }

/* ============================================================= reveal */
[data-rv]{ opacity:0; }
[data-rv="up"]{ transform:translate3d(0,26px,0); }
[data-rv="fade"]{ transform:none; }
[data-rv].rv-in{ opacity:1; transform:none;
  transition:opacity .9s var(--ease-out), transform 1.05s var(--ease-out); }
.mask-line{ display:block; overflow:hidden; }
.mask-line:not(.word-reveal) > span{ display:block; transform:translate3d(0,110%,0); }
.rv-in .mask-line:not(.word-reveal) > span, .mask-line:not(.word-reveal).rv-in > span{ transform:none; }
.mask-line:not(.word-reveal) > span{ transition:transform 1.05s var(--ease-out); }
.word-mask{ display:inline-block; overflow:hidden; vertical-align:top; }
.word{
  display:inline-block; opacity:0; transform:translate3d(0,112%,0); will-change:transform,opacity;
  transition:transform .82s var(--ease-out), opacity .5s var(--ease-out);
  transition-delay:var(--word-delay,0ms);
}
.word-reveal.rv-in .word{ opacity:1; transform:none; }

/* ============================================================= preloader */
#pre{
  position:fixed; inset:0; z-index:100; background:#05070a;
  display:flex; align-items:center; justify-content:center;
  transition:opacity .8s var(--ease), visibility .8s;
}
#pre.done{ opacity:0; visibility:hidden; pointer-events:none; }
.pre-in{ width:min(420px,74vw); text-align:center; }
.pre-mark{ margin:0 auto 26px; width:44px; height:44px; opacity:.9; }
.pre-mark svg{ width:100%; height:100%; display:block; }
.pre-jp{ font-size:12px; letter-spacing:.5em; color:var(--bone-dim); margin-bottom:20px; }
.pre-bar{ position:relative; height:1px; background:rgba(223,231,224,.14); overflow:hidden; }
.pre-bar i{ position:absolute; inset:0 100% 0 0; background:var(--bone); transition:right .35s linear; }
.pre-meta{ display:flex; justify-content:space-between; margin-top:12px;
  font-size:10px; letter-spacing:.2em; text-transform:uppercase; color:var(--muted); }
.pre-meta b{ font-weight:500; color:var(--bone-dim); font-variant-numeric:tabular-nums; }

/* ============================================================= nav */
.nav{
  /* Width comes from --vw, not from right:0. A fixed element resolves its
     inset against the initial containing block, and the page's own horizontal
     overflow makes that block wider than the screen — 437 against a 390 phone,
     860 against a 768 tablet — which carried the burger off the right edge.
     --vw is the layout viewport, written on every resize. */
  position:fixed; top:0; left:0; width:var(--vw, 100%); height:var(--nav-h); z-index:50;
  display:flex; align-items:center; gap:24px; padding:0 var(--pad);
  transition:transform .55s var(--ease);
}
/* The sticky wash sits on its own layer rather than on the bar. A
   backdrop-filter promotes its element to the containing block for any
   position:fixed descendant, and the bar holds the mobile menu sheet — put the
   blur here and the sheet was measured against an 84px bar instead of the
   frame, for as long as the blur took to fade. */
.nav::before{
  content:''; position:absolute; inset:0; z-index:-1; pointer-events:none;
  background:rgba(5,7,10,.62);
  backdrop-filter:blur(14px) saturate(1.1); -webkit-backdrop-filter:blur(14px) saturate(1.1);
  opacity:0; transition:opacity .5s linear;
}
.nav.stuck::before{ opacity:1; }
.nav::after{
  content:''; position:absolute; left:var(--pad); right:var(--pad); bottom:0; height:1px;
  background:var(--line-soft); opacity:0; transition:opacity .5s;
}
.nav.stuck::after{ opacity:1; }
.nav.hide{ transform:translate3d(0,-101%,0); }
.brand{ display:flex; align-items:center; gap:11px; flex:0 0 auto; }
.brand svg{ width:34px; height:34px; display:block; }
.brand-tx{ display:flex; flex-direction:column; line-height:1; gap:3px; }
.brand-tx b{ font-size:12px; font-weight:500; letter-spacing:.26em; }
.brand-tx i{ font-style:normal; font-size:8px; letter-spacing:.34em; color:var(--muted); }
.nav-links{ display:flex; gap:clamp(18px,2.6vw,46px); margin-left:auto; }
.nav-link{
  position:relative; font-size:11px; font-weight:500; letter-spacing:.2em; text-transform:uppercase;
  color:var(--bone-dim); display:block; height:15px; line-height:15px; overflow:hidden;
}
.nav-link span{ display:block; height:15px; line-height:15px; transition:transform .55s var(--ease-out), color .3s; }
.nav-link .alt{ position:absolute; inset:0; transform:translate3d(0,100%,0); color:var(--bone); letter-spacing:.32em; }
.nav-link:hover span{ transform:translate3d(0,-100%,0); }
.nav-link:hover .alt{ transform:none; }
.nav-link.on{ color:var(--bone); }
.nav-link.on::after{ content:''; position:absolute; left:0; bottom:0; width:100%; height:1px; background:var(--vermilion); }
.nav-burger{ margin-left:clamp(18px,2.6vw,42px); width:26px; height:16px; position:relative; flex:0 0 auto; }
.nav-burger i{ position:absolute; right:0; height:1.5px; background:var(--bone); transition:width .45s var(--ease-out), transform .45s var(--ease-out); }
.nav-burger i:nth-child(1){ top:4px; width:26px; }
.nav-burger i:nth-child(2){ top:11px; width:17px; }
.nav-burger:hover i:nth-child(2){ width:26px; }
.nav-burger:hover i:nth-child(1){ width:17px; }

/* ============================================================= hero */
.hero{ position:relative; min-height:100svh; padding:0 var(--pad); display:flex; flex-direction:column; }
.hero::before{ content:''; position:absolute; left:0; right:0; top:0; height:46%; pointer-events:none;
  background:linear-gradient(rgba(3,6,9,.72), rgba(3,6,9,.34) 46%, transparent); }
.hero-top{ padding-top:calc(var(--nav-h) + clamp(12px,2.6vh,34px)); max-width:min(560px,46vw); position:relative; z-index:2; }
.hero-top .eyebrow{ display:flex; align-items:center; gap:10px; margin-bottom:20px; }
.hero-top .eyebrow .dot{ width:5px; height:5px; border-radius:50%; background:var(--vermilion); box-shadow:0 0 10px var(--vermilion); }
.hero h1{ margin-bottom:18px; }
.hero-sub{ max-width:322px; text-shadow:0 1px 26px rgba(3,6,8,.95); }
.hero-spacer{ flex:1 1 auto; min-height:clamp(140px,26vh,300px); }
.hero-foot{ padding-bottom:clamp(22px,4.2vh,42px); position:relative; z-index:2; }
.hero-cue{ display:flex; align-items:center; justify-content:flex-end; gap:12px; margin-bottom:14px;
  font-size:9px; letter-spacing:.3em; text-transform:uppercase; color:var(--muted); }
.hero-cue .track{ width:54px; height:1px; background:var(--line); position:relative; overflow:hidden; }
.hero-cue .track i{ position:absolute; inset:0; background:var(--bone); transform-origin:left;
  animation:cue 2.8s var(--ease-io) infinite; }
.chapters{
  display:grid; grid-template-columns:repeat(4,1fr); gap:clamp(14px,2.4vw,40px);
  border-top:1px solid var(--line-soft); padding-top:18px;
}
.chip{ display:flex; gap:14px; align-items:flex-start; cursor:pointer; }
.chip .num{ line-height:1; flex:0 0 auto; transition:color .4s, transform .5s var(--ease-out); }
.chip .tx{ min-width:0; padding-top:3px; }
.chip b{ display:block; font-size:10px; font-weight:500; letter-spacing:.2em; text-transform:uppercase;
  color:var(--bone-dim); margin-bottom:6px; transition:color .4s;
  text-shadow:0 1px 16px rgba(3,6,8,.9); }
.chip p{ margin:0; font-size:11px; line-height:1.5; color:#7d8781; max-width:22ch;
  transition:color .4s; }
.chip:hover .num{ color:var(--ember); transform:translate3d(0,-2px,0); }
.chip:hover b{ color:var(--bone); }
.chip:hover p{ color:var(--bone-dim); }
.chip.on .num{ color:var(--ember); }
.chip.on b{ color:var(--bone); }
/* the floating window: a generated Sanmon still carried over the hero */
.peek{
  position:absolute; z-index:2; right:clamp(78px,11vw,190px); top:clamp(132px,25vh,238px);
  width:clamp(150px,16vw,262px); display:block;
  transition:transform .8s var(--ease-out);
}
.peek-fr{ display:block; aspect-ratio:16/10;
  background:linear-gradient(180deg, rgba(3,6,9,.04) 24%, rgba(3,6,9,.48) 100%),
    url('secret-pathways-assets/generated/kage-sanmon-preview.webp') center / cover no-repeat;
  outline:1px solid rgba(223,231,224,.16); outline-offset:-1px;
  box-shadow:0 34px 70px -30px rgba(0,0,0,.9); transition:outline-color .5s; }
.peek:hover{ transform:translate3d(0,-5px,0); }
.peek:hover .peek-fr{ outline-color:rgba(223,231,224,.42); }
.peek-play{ position:absolute; top:0; right:0; left:0; bottom:auto; aspect-ratio:16/10;
  display:grid; place-items:center; pointer-events:none; }
.peek-play svg{ width:clamp(30px,3.2vw,46px); height:auto; filter:drop-shadow(0 2px 12px rgba(0,0,0,.7));
  transition:transform .55s var(--ease-out); }
.peek:hover .peek-play svg{ transform:scale(1.14); }
.peek-cap{ display:flex; align-items:baseline; gap:9px; margin-top:9px; }
.peek-cap b{ font-size:11px; font-weight:400; letter-spacing:.24em; color:var(--bone-dim); }
.peek-cap i{ font-style:normal; font-size:9px; letter-spacing:.2em; text-transform:uppercase; color:var(--muted); }
@media (max-width:820px){ .peek{ display:none; } }

.hero-side{
  position:absolute; z-index:2; right:var(--pad); top:50%; transform:translateY(-50%);
  display:flex; flex-direction:column; align-items:center; gap:14px; pointer-events:none;
}
.hero-side .v{ writing-mode:vertical-rl; font-size:13px; letter-spacing:.62em; color:rgba(223,231,224,.5); }
@keyframes cue{ 0%{transform:scaleX(0)} 42%{transform:scaleX(1)} 100%{transform:scaleX(1) translateX(100%)} }

/* ============================================================= sections */
.sec{ position:relative; padding:clamp(88px,15vh,190px) var(--pad); }
.sec::before{
  content:''; position:absolute; inset:-22% -4%; z-index:-1; pointer-events:none;
  background:radial-gradient(110% 62% at 30% 50%, rgba(4,7,10,.88), rgba(4,7,10,.62) 42%, rgba(4,7,10,.18) 74%, rgba(4,7,10,0));
  /* A chapter's scrim is there to hold its own copy off the sanctuary, and it
     is inset -22% so its edges never land as a seam. That overshoot, plus the
     section's top padding, means it was washing most of a screen of scene
     above the chapter — the frame stayed masked long after the hero had let
     go of it. The mask takes the top of it back off: nothing at the very top,
     full strength by the time the chapter's own first line arrives. */
  -webkit-mask-image:linear-gradient(transparent, #000 44%);
          mask-image:linear-gradient(transparent, #000 44%);
}
#pathways::before{ background:radial-gradient(108% 64% at 50% 50%, rgba(4,7,10,.70), rgba(4,7,10,.44) 50%, rgba(4,7,10,0)); }
#eternity::before{ background:radial-gradient(82% 58% at 50% 46%, rgba(4,7,10,.26), rgba(4,7,10,.66) 56%, rgba(4,7,10,.90) 82%, rgba(4,7,10,0)); }
.foot::before{
  content:''; position:absolute; inset:0; z-index:-1; pointer-events:none;
  background:linear-gradient(rgba(4,7,10,.55), rgba(4,7,10,.94) 40%, rgba(4,7,10,.98));
}
.sec-head{ display:flex; align-items:baseline; gap:16px; margin-bottom:clamp(30px,5vh,66px); }
.sec-head .k{ font-size:10px; font-weight:500; letter-spacing:.24em; text-transform:uppercase; color:var(--muted); }
.sec-head .k b{ color:var(--vermilion); font-weight:500; }
.rule{ flex:1 1 auto; height:1px; background:var(--line-soft); }

/* — chapter I: the gate */
.gate-grid{ display:grid; grid-template-columns:minmax(0,1.02fr) minmax(0,1fr); gap:clamp(28px,5vw,90px); align-items:start; }
.gate-grid h2{ max-width:11ch; }
.gate-copy{ padding-top:6px; }
.gate-copy .lead{ font-size:clamp(15px,1.16vw,19px); line-height:1.66; color:#c2cdc5; text-shadow:0 1px 20px rgba(3,6,8,.9); }
.gate-copy .lead + p{ margin-top:20px; }
.arrowlink{ display:inline-flex; align-items:center; gap:12px; margin-top:34px;
  font-size:11px; font-weight:500; letter-spacing:.2em; text-transform:uppercase; color:var(--bone); }
.arrowlink .ar{ width:34px; height:34px; border:1px solid var(--line); border-radius:50%;
  display:grid; place-items:center; transition:background .45s var(--ease), border-color .45s, transform .5s var(--ease-out); }
.arrowlink .ar svg{ width:13px; height:13px; transition:transform .5s var(--ease-out); }
.arrowlink:hover .ar{ background:var(--bone); border-color:var(--bone); }
.arrowlink:hover .ar svg{ transform:translate3d(2px,-2px,0); }
.arrowlink:hover .ar svg path{ stroke:#05070a; }
.gate-stats{ display:flex; gap:clamp(24px,4vw,62px); margin-top:clamp(46px,8vh,96px); border-top:1px solid var(--line-soft); padding-top:24px; }
.gate-stats div b{ display:block; font-size:clamp(22px,2.1vw,32px); font-weight:300; letter-spacing:-.02em; }
.gate-stats div span{ font-size:10px; letter-spacing:.2em; text-transform:uppercase; color:var(--muted); }

/* — chapter II: pathways cards */
.cards{ display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(10px,1.4vw,22px); align-items:start; }
.card{ position:relative; cursor:pointer; }
.card:nth-child(1){ transform:translateY(0); }
.card:nth-child(2){ transform:translateY(clamp(26px,5vw,74px)); }
.card:nth-child(3){ transform:translateY(clamp(52px,10vw,148px)); }
/* the frame is a hole punched in the page — the scene is rendered straight
   into this rectangle with a scissored viewport, so each card is a live
   window onto a different corner of the sanctuary */
.card-fr{
  position:relative; aspect-ratio:4/5; background:transparent;
  outline:1px solid var(--line-soft); outline-offset:-1px;
  transition:outline-color .5s var(--ease);
}
.card:hover .card-fr{ outline-color:rgba(223,231,224,.30); }
.card:nth-child(1) .card-fr{
  background:
    linear-gradient(180deg,rgba(3,6,9,.04) 36%,rgba(3,6,9,.72) 100%),
    url('secret-pathways-assets/generated/kage-approach.webp') center / cover no-repeat;
}
.card:nth-child(2) .card-fr{
  background:
    linear-gradient(180deg,rgba(3,6,9,.06) 36%,rgba(3,6,9,.74) 100%),
    url('secret-pathways-assets/generated/kage-lantern-court.webp') center / cover no-repeat;
}
.card:nth-child(3) .card-fr{
  background:
    linear-gradient(180deg,rgba(3,6,9,.05) 36%,rgba(3,6,9,.74) 100%),
    url('secret-pathways-assets/generated/kage-moonwater.webp') center / cover no-repeat;
}
.card-fr::after{ content:''; position:absolute; inset:0;
  background:linear-gradient(transparent 46%, rgba(4,6,9,.80)); pointer-events:none; }
/* The fabric overdraws its card by CL_BLEED on every side so the billow and
   the contact shadow have somewhere to go, so the frame cannot clip it. The
   card's outline is not here at all: it is drawn in the cloth shader, where it
   can follow the folds instead of tracing the flat box behind them. */
.cloth-out{ position:absolute; pointer-events:none; z-index:1; }
.on-cloth{ background:none !important; outline:0 !important; overflow:visible; }
.on-cloth::after{ display:none; }

/* ------------------------------------------------- the lights in the stills
   The three plates each have one source in them — two blood moons and a lit
   stone lantern — and they are the only warm thing in an otherwise cold set of
   images. A glow laid over each one, screened so it adds light rather than
   painting over it, is enough to make a flat still look like it is burning.

   Two tracks per light, at durations that do not divide into each other: the
   wrapper swells, the gradient inside it pulses. One track on its own reads as
   a loop within a couple of seconds; two beating against each other do not
   come back around inside the time anyone looks at a card.

   The moon and the lantern are not the same event. A flame gutters — short,
   irregular, deep — so the lantern's track is written unevenly by hand. A moon
   only breathes through moving air, so the moons get a slow, shallow swell and
   nothing more. Giving them both a flicker is what makes this kind of thing
   look like a novelty; the difference is the whole effect. */
.card-fr{ isolation:isolate; }        /* keep the screen blend inside the card */
.glow{
  position:absolute; z-index:1; pointer-events:none;
  left:var(--gx); top:var(--gy); width:calc(var(--gr) * 2); aspect-ratio:1;
  translate:-50% -50%;                /* leaves transform free for the swell */
  mix-blend-mode:screen;
  animation:glow-swell var(--gt2) var(--ease-io) infinite alternate;
}
.glow::before{
  content:''; position:absolute; inset:0; border-radius:50%;
  background:radial-gradient(closest-side, var(--gc1), var(--gc2) 40%, transparent 72%);
  animation:glow-pulse var(--gt) var(--ease-io) infinite;
}
@keyframes glow-swell{ from{ transform:scale(.93); } to{ transform:scale(1.07); } }
@keyframes glow-pulse{ from{ opacity:.78; } 50%{ opacity:1; } to{ opacity:.78; } }
/* a flame does not breathe, it gutters */
@keyframes glow-flame{
  0%{ opacity:.74 }   6%{ opacity:.97 }  12%{ opacity:.63 }  19%{ opacity:.90 }
  27%{ opacity:.55 }  34%{ opacity:.94 } 42%{ opacity:.71 }  51%{ opacity:1 }
  58%{ opacity:.60 }  66%{ opacity:.88 } 74%{ opacity:.67 }  83%{ opacity:.96 }
  91%{ opacity:.72 } 100%{ opacity:.74 }
}
.glow--flame::before{ animation-name:glow-flame; }
.glow--flame{ animation-duration:var(--gt2); }
@media (prefers-reduced-motion:reduce){
  .glow, .glow::before{ animation:none; }
}
.no-webgl .card-fr{ background:linear-gradient(150deg,#101a1d,#0a0d10 62%,#1a0c0b); }
/* If WebGL will not start, the page stays a page: the scene simply becomes a
   still, and the wordmark moves from the 3-D layer into the document. */
.word-fb{ display:none; }
.no-webgl #gl, .no-webgl .peek-play{ display:none; }
/* fixed, or the gradient is measured against a 6000-pixel body box and the
   moon ends up somewhere around the curriculum table */
.no-webgl body{ background:
  radial-gradient(11vw 11vw at 73% 17%, rgba(232,52,28,.95), rgba(158,20,16,.62) 44%, rgba(96,12,12,.20) 64%, transparent 72%),
  radial-gradient(38vw 32vw at 50% 46%, rgba(228,104,24,.40), rgba(122,42,10,.18) 54%, transparent 74%),
  radial-gradient(120% 80% at 50% 0%, rgba(120,150,158,.16), transparent 60%), #05070a;
  background-attachment:fixed; }
.no-webgl .peek-fr{ background:linear-gradient(160deg,#162326,#0b1013 55%,#241010); }
.no-webgl .word-fb{
  display:block; position:absolute; left:0; right:0; bottom:16%; z-index:1;
  font-family:'Wordmark','Onest',sans-serif; font-weight:600; font-size:21.4vw; line-height:.78;
  letter-spacing:.052em; text-align:center; pointer-events:none;
  background:linear-gradient(#e2ece5, #97a89c); -webkit-background-clip:text; background-clip:text;
  color:transparent;
}
/* The live hero has no foot scrim, but the fallback still needs one: there it
   stands on a bright CSS sky rather than a night scene, and the chips and the
   wordmark have nothing else holding them off it. So this carries the whole
   declaration now rather than re-colouring one it used to inherit. */
.no-webgl .hero::after{ content:''; position:absolute; left:0; right:0; bottom:0; height:34%;
  pointer-events:none; background:linear-gradient(transparent, rgba(3,5,8,.72) 52%, rgba(3,5,8,.96)); }
.no-webgl .sec::before, .no-webgl #pathways::before, .no-webgl #eternity::before{ background:none; }
.card-lab{ position:absolute; left:16px; right:16px; bottom:14px; z-index:2;
  display:flex; align-items:flex-end; justify-content:space-between; gap:10px; }
.card-lab b{ font-size:clamp(13px,1.15vw,17px); font-weight:400; letter-spacing:.02em; text-transform:uppercase; }
.card-lab .jp{ font-size:11px; letter-spacing:.3em; color:rgba(223,231,224,.62); }
.card-ar{ position:absolute; top:14px; right:14px; z-index:2; width:26px; height:26px;
  opacity:0; transform:translate3d(-4px,4px,0); transition:.5s var(--ease-out); }
.card:hover .card-ar{ opacity:1; transform:none; }
.card-meta{ display:flex; justify-content:space-between; margin-top:12px;
  font-size:10px; letter-spacing:.16em; text-transform:uppercase; color:var(--muted); }

/* — chapter III: curriculum */
.cur-head{ display:grid; grid-template-columns:minmax(0,1fr) minmax(0,.72fr); gap:clamp(28px,5vw,90px); align-items:end; margin-bottom:clamp(34px,6vh,72px); }
.cur-head h2{ max-width:13ch; }
.cur{ border-top:1px solid var(--line-soft); }
.les{
  position:relative; display:grid; align-items:center;
  grid-template-columns:64px minmax(0,1.05fr) minmax(0,1.25fr) 86px;
  gap:clamp(14px,2.4vw,40px);
  padding:clamp(20px,2.4vw,30px) 0; border-bottom:1px solid var(--line-soft);
  cursor:pointer; transition:padding .5s var(--ease-out);
}
.les::before{ content:''; position:absolute; left:calc(var(--pad) * -1); right:0; top:0; bottom:0;
  background:linear-gradient(90deg, rgba(224,35,28,.09), transparent 46%);
  opacity:0; transition:opacity .55s var(--ease); pointer-events:none; }
.les:hover::before{ opacity:1; }
.les:hover{ padding-left:clamp(8px,1.2vw,18px); }
.les .k{ font-size:11px; letter-spacing:.16em; color:var(--muted); font-variant-numeric:tabular-nums; transition:color .4s; }
.les:hover .k{ color:var(--vermilion); }
.les h3{ font-size:clamp(16px,1.5vw,23px); font-weight:400; letter-spacing:-.005em; }
.les h3 em{ font-style:normal; font-family:'NotoJP',sans-serif; font-size:.72em; color:var(--muted); margin-left:12px; letter-spacing:.24em; }
.les p{ margin:0; font-size:13px; line-height:1.6; color:#909b95; text-shadow:0 1px 16px rgba(3,6,8,.92); }
.les .t{ text-align:right; font-size:11px; letter-spacing:.14em; color:#8b958f; font-variant-numeric:tabular-nums; text-shadow:0 1px 16px rgba(3,6,8,.92); }
.les .bar{ position:absolute; left:0; bottom:-1px; height:1px; width:100%; background:var(--vermilion);
  transform:scaleX(0); transform-origin:left; transition:transform .7s var(--ease-out); }
.les:hover .bar{ transform:scaleX(1); }

/* — chapter IV: eternity */
.fin{ min-height:100svh; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; }
.fin .eyebrow{ margin-bottom:26px; }
.fin h2{ font-size:clamp(38px,7.4vw,124px); line-height:.94; letter-spacing:-.03em; text-transform:uppercase; }
.fin p{ max-width:44ch; margin:26px auto 0; }
.cta{
  position:relative; display:inline-flex; align-items:center; gap:14px; margin-top:44px;
  padding:17px 30px; border:1px solid var(--line); border-radius:100px; overflow:hidden;
  font-size:11px; font-weight:500; letter-spacing:.22em; text-transform:uppercase;
  transition:color .45s var(--ease), border-color .45s;
}
.cta i{ position:absolute; inset:0; background:var(--bone); transform:translate3d(0,101%,0);
  transition:transform .62s var(--ease-out); z-index:-1; }
.cta span,.cta svg{ position:relative; z-index:1; }
.cta:hover{ color:#05070a; border-color:var(--bone); }
.cta:hover i{ transform:none; }
.cta:hover svg path{ stroke:#05070a; }

/* — footer */
.foot{ position:relative; padding:clamp(50px,8vh,96px) var(--pad) clamp(26px,4vh,40px);
  border-top:1px solid var(--line-soft); }
.foot-grid,.foot-base{ position:relative; }
.foot-grid{ display:grid; grid-template-columns:minmax(0,1.4fr) repeat(3,minmax(0,.6fr)); gap:clamp(22px,4vw,60px); }
.foot h4{ margin:0 0 16px; font-size:10px; font-weight:500; letter-spacing:.22em; text-transform:uppercase; color:var(--muted); }
.foot ul{ list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:9px; }
.foot li a{ font-size:13px; color:#8f9a93; transition:color .35s; }
.foot li a:hover{ color:var(--bone); }
.foot-brand p{ margin:16px 0 0; max-width:34ch; font-size:13px; color:#79847e; }
.foot-base{ display:flex; justify-content:space-between; align-items:center; gap:20px; flex-wrap:wrap;
  margin-top:clamp(38px,6vh,74px); padding-top:20px; border-top:1px solid var(--line-soft);
  font-size:10px; letter-spacing:.16em; text-transform:uppercase; color:var(--muted); }

/* ============================================================= progress rail */
.rail{ position:fixed; right:calc(var(--pad) - 4px); top:50%; transform:translateY(-50%); z-index:45;
  display:flex; flex-direction:column; gap:12px; align-items:center; }
.rail button{ width:22px; height:10px; display:grid; place-items:center; }
.rail i{ display:block; width:14px; height:1px; background:rgba(223,231,224,.26); transition:.5s var(--ease-out); }
.rail button.on i{ width:22px; background:var(--bone); }
.rail button:hover i{ width:22px; background:var(--bone-dim); }

/* ============================================================= cursor */
.cur-dot{ position:fixed; z-index:80; top:0; left:0; width:26px; height:26px; margin:-13px 0 0 -13px;
  border:1px solid rgba(223,231,224,.42); border-radius:50%; pointer-events:none;
  transition:width .35s var(--ease-out), height .35s var(--ease-out), margin .35s var(--ease-out),
             background .35s, border-color .35s, opacity .3s; opacity:0; }
.cur-dot.act{ width:52px; height:52px; margin:-26px 0 0 -26px; background:rgba(223,231,224,.07); border-color:rgba(223,231,224,.6); }
@media (hover:hover) and (pointer:fine){ .cur-dot{ opacity:1 } }

/* ============================================================= responsive */
@media (max-width:1080px){
  .hero-top{ max-width:none; }
  .gate-grid{ grid-template-columns:1fr; gap:26px; }
  .cur-head{ grid-template-columns:1fr; gap:18px; }
  .les{ grid-template-columns:44px minmax(0,1fr) 74px; }
  .les p{ display:none; }
  .foot-grid{ grid-template-columns:1fr 1fr; }
}
@media (max-width:820px){
  .nav-links{
    display:flex; position:fixed; top:0; right:0; bottom:0; width:min(84vw,360px);
    padding:calc(var(--nav-h) + 28px) var(--pad) 34px; flex-direction:column; align-items:flex-start; gap:0;
    background:rgba(3,6,9,.98); border-left:1px solid var(--line-soft);
    transform:translate3d(100%,0,0); opacity:0; visibility:hidden; pointer-events:none;
    transition:transform .65s var(--ease-out), opacity .4s, visibility 0s linear .65s;
  }
  .nav.menu-open .nav-links{
    transform:none; opacity:1; visibility:visible; pointer-events:auto; transition-delay:0s;
  }
  .nav-links .nav-link{
    width:100%; height:auto; padding:17px 0; overflow:visible; border-bottom:1px solid var(--line-soft);
    font-size:17px; line-height:1.2;
  }
  .nav-links .nav-link span{ height:auto; line-height:1.2; transform:none !important; }
  .nav-links .nav-link .alt{ position:static; margin-top:6px; font-size:10px; color:var(--muted); }
  /* The links panel leaves the flow to become the slide-in sheet, taking its
     margin-left:auto with it, so without this the burger sits tucked against
     the wordmark instead of out at the edge where a thumb reaches. */
  /* A transform *or* a backdrop-filter makes an element the containing block
     for its position:fixed descendants. This panel is a child of the bar, so
     once the bar went sticky and started hiding on scroll the open panel was
     measured against the bar instead of the viewport: 146px tall, dragged off
     the top, with the page showing through beside it. Neither may apply while
     the sheet is open — it covers the frame, so there is nothing left to blur. */
  /* A hide transform still promotes the bar, so drop it the instant the sheet
     opens. Without transition:none it eases out over .55s and the sheet spends
     that whole time measured against the bar. */
  .nav.menu-open{ transform:none; transition:none; }
  .nav-burger{ margin-left:auto; }
  .nav-burger.active i:nth-child(1){ top:7px; width:26px; transform:rotate(45deg); }
  .nav-burger.active i:nth-child(2){ top:7px; width:26px; transform:rotate(-45deg); }
  html.nav-open,html.nav-open body{ overflow:hidden; }
  .rail{ display:none; }
  .hero-side{ display:none; }
  .chapters{ grid-template-columns:repeat(2,1fr); gap:18px 14px; }
  .chip p{ font-size:10px; }
  .cards{ grid-template-columns:1fr; gap:14px; }
  .card:nth-child(2),.card:nth-child(3){ transform:none; }
  .gate-stats{ flex-wrap:wrap; gap:20px 34px; }
  .foot-grid{ grid-template-columns:1fr; }
  .hero-cue{ display:none; }
}
/* ================================================== section layouts (B set)
   The six sections ship their B compositions — hero split, story spread,
   gardens mosaic, chapter atlas, gallery closing, manifesto footer. They are
   keyed off stable body data attributes so the rules above keep reading as
   the plain grammar of the page and every B override stays in one block.   */

/* — hero B · split: an editorial reading column holds the left, a compact
     numbered index sits under it, and the live scene window becomes a low,
     right-hand counterweight. The scene itself remains untouched.

     The column carried a 90° scrim over the left three-quarters of the frame.
     It has gone: the sanctuary is already near-black behind the reading, and
     measured against it the copy loses almost nothing without it — the
     headline 15.98:1 to 15.47:1, the standfirst 7.94:1 to 7.75:1, the index
     16.11:1 to 16.08:1, all far past what either needs. It was darkening the
     approach, the gate and the lower steps to buy half a point of contrast
     nobody was short of. */
body[data-layout-hero="b"] .hero-top{ margin-left:0; max-width:min(590px,46vw); }
body[data-layout-hero="b"] .hero-foot{ width:min(480px,40vw); margin-left:0; }
body[data-layout-hero="b"] .hero-cue{ justify-content:flex-start; }
body[data-layout-hero="b"] .chapters{ grid-template-columns:repeat(4,minmax(0,1fr)); gap:12px; }
body[data-layout-hero="b"] .chip{ position:relative; flex-direction:column; gap:0; }
body[data-layout-hero="b"] .chip .num{ font-size:clamp(29px,3.1vw,48px); }
body[data-layout-hero="b"] .chip .tx{
  position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(0 0 0 0);
  clip-path:inset(50%); white-space:nowrap;
}
/* the live window drops into the open right corner, away from the reading
   column and the oversized 3-D wordmark */
body[data-layout-hero="b"] .peek{
  left:auto; right:var(--pad); top:auto; bottom:clamp(38px,7vh,96px);
}
body[data-layout-hero="b"] .peek-cap b.jp{ font-size:clamp(20px,2.2vw,34px); letter-spacing:.18em; }
/* The Japanese title reads down the right edge, hung under the navigation —
   the one mark on that side of the frame now that the romanization has gone. */
body[data-layout-hero="b"] .hero-side{
  left:auto; right:var(--pad); top:calc(var(--nav-h) + clamp(14px,3vh,42px));
  bottom:auto; transform:none; display:block;
}
body[data-layout-hero="b"] .hero-side .v{
  position:static; transform:none;
  font-size:clamp(30px,3.2vw,54px); letter-spacing:.12em; color:rgba(223,231,224,.62);
}

/* — story B · spread: the title crosses two columns, the reading column is
     held to the right, and the figures become a ruled band. */
body[data-layout-story="b"] .gate-grid{
  grid-template-columns:minmax(120px,.38fr) minmax(0,1.08fr) minmax(280px,.88fr);
  gap:clamp(20px,3vw,54px);
}
body[data-layout-story="b"] .gate-grid h2{ grid-column:1 / 3; max-width:13ch; }
body[data-layout-story="b"] .gate-copy{ grid-column:3; }
body[data-layout-story="b"] .gate-stats{ display:grid; grid-template-columns:repeat(4,1fr); gap:0; }
body[data-layout-story="b"] .gate-stats div{ min-height:108px; padding:18px; border-left:1px solid var(--line-soft); }
body[data-layout-story="b"] .gate-stats div:last-child{ border-right:1px solid var(--line-soft); }

/* — gardens B · mosaic: one immersive live window beside two stacked ones.
     The cards stretch to their rows and the frames flex, so the two small
     viewports meet the tall one exactly instead of drifting apart. */
body[data-layout-gallery="b"] .cards{
  grid-template-columns:minmax(0,1.55fr) minmax(260px,.75fr);
  grid-template-rows:repeat(2,minmax(0,1fr));
  gap:14px; align-items:stretch;
}
body[data-layout-gallery="b"] .card{ transform:none; display:flex; flex-direction:column; min-height:0; }
body[data-layout-gallery="b"] .card-fr{ aspect-ratio:auto; flex:1 1 auto; min-height:0; }
body[data-layout-gallery="b"] .card:first-child{ grid-row:1 / 3; }
body[data-layout-gallery="b"] .card:first-child .card-fr{ flex:0 0 auto; height:min(72vh,760px); }
body[data-layout-gallery="b"] .card:not(:first-child) .card-fr{ min-height:200px; }

/* — chapters B · atlas: a two-then-three plate grid instead of a syllabus.
     Number and title sit at the top of each plate, the running time drops to
     the foot of it. */
body[data-layout-curriculum="b"] .cur-head{ grid-template-columns:minmax(0,.72fr) minmax(0,1.2fr); align-items:start; }
body[data-layout-curriculum="b"] .cur{
  display:grid; grid-template-columns:repeat(6,1fr); gap:1px;
  background:var(--line-soft); border:1px solid var(--line-soft);
}
body[data-layout-curriculum="b"] .les{
  display:flex; flex-direction:column; align-items:flex-start; min-height:250px;
  padding:24px; gap:14px; border:0; background:rgba(5,7,10,.84); overflow:hidden;
}
body[data-layout-curriculum="b"] .les:nth-child(-n+2){ grid-column:span 3; }
body[data-layout-curriculum="b"] .les:nth-child(n+3){ grid-column:span 2; }
body[data-layout-curriculum="b"] .les::before{ left:0; background:linear-gradient(145deg,rgba(224,35,28,.13),transparent 58%); }
body[data-layout-curriculum="b"] .les:hover{ padding-left:32px; }
body[data-layout-curriculum="b"] .les h3{ font-size:clamp(20px,2vw,30px); }
body[data-layout-curriculum="b"] .les p{ display:block; max-width:34ch; }
body[data-layout-curriculum="b"] .les .t{ text-align:left; margin-top:auto; }

/* — closing B · gallery: the title hangs vertically on the right while the
     chapter mark, the last line and the call to action run down the left. */
body[data-layout-closing="b"] .fin{
  display:grid; grid-template-columns:minmax(260px,.7fr) minmax(0,1.3fr); grid-template-rows:auto auto auto;
  align-content:center; align-items:end; text-align:left;
  column-gap:clamp(40px,7vw,120px); row-gap:clamp(16px,2.6vh,30px);
}
body[data-layout-closing="b"] .fin .eyebrow{ grid-column:1; grid-row:1; margin:0; }
body[data-layout-closing="b"] .fin h2{
  grid-column:2; grid-row:1 / 4; align-self:center; justify-self:end;
  font-size:clamp(52px,6vw,82px); writing-mode:vertical-rl;
}
body[data-layout-closing="b"] .fin p{ grid-column:1; grid-row:2; margin:0; }
body[data-layout-closing="b"] .fin .cta{ grid-column:1; grid-row:3; justify-self:start; margin-top:4px; }

/* — footer B · manifesto: the statement leads, the navigation becomes a
     compact ruled index beneath it. */
body[data-layout-footer="b"] .foot-grid{ grid-template-columns:repeat(3,1fr); }
body[data-layout-footer="b"] .foot-brand{
  grid-column:1 / -1; display:grid; grid-template-columns:70px minmax(0,1fr); align-items:center;
  padding-bottom:34px; margin-bottom:8px; border-bottom:1px solid var(--line-soft);
}
body[data-layout-footer="b"] .foot-brand svg{ width:54px; height:54px; }
body[data-layout-footer="b"] .foot-brand p{
  margin:0; max-width:48ch; font-size:clamp(18px,2vw,30px); line-height:1.35; color:var(--bone-dim);
}
body[data-layout-footer="b"] .foot-grid > div:nth-child(n+3){
  padding-left:clamp(18px,2.2vw,34px); border-left:1px solid var(--line-soft);
}
body[data-layout-footer="b"] .foot-base{ display:grid; grid-template-columns:1fr auto 1fr; }
body[data-layout-footer="b"] .foot-base span:last-child{ text-align:right; }

/* ================================================= foreground layers (KAGE)
   The transparent PNG library in secret-pathways-assets/foreground/png is
   introduced as a near plane. Each section carries one .fg box holding a few
   cut-outs that stand between the live sanctuary and the reading: the scene
   itself is untouched, this is only the garden that grows in front of it.

   The cut-outs are the nearest plane on the page, so they sit in front of the
   reading rather than behind it. Inside .page — itself z-index:10, above the
   #gl canvas at 0:
     -1   .sec::before / .foot::before   the section scrims
      2   headings, copy, links, cards, stats, CTA
      3   .fg                            the cut-outs: aria-hidden, inert
   .page caps everything it holds at tier 10, which is under the fixed
   furniture (rail 45, nav 50), so the chapter's live near plane is moved out
   to #fg-sky at 52 — over the layout and the navigation both, and still under
   the passes that treat the frame as one image: vignette 55, grain 60,
   cursor 80.

   A stage is only ever shown while its own chapter holds the viewport, and
   only in the fixed bottom-anchored form. Parked back in its section it is
   inert and invisible: a near plane that scrolls with the page reads as
   wallpaper printed on the document rather than as something standing between
   the camera and the scene, so there is no second, section-owned appearance.
   Every piece is therefore placed from the bottom edge of that fixed plane —
   left/right and bottom, never top.

   The entrance is driven by the chapter, not by the scroll observer: each
   [data-fg-in] piece rises from the edge it is anchored to when its stage goes
   live, one every 90ms in DOM order, and the reduced-motion block at the foot
   of this sheet flattens it. The wrapper owns the entrance and animates
   opacity and transform only; the artwork itself remains at full opacity, with
   the reading protected by the layer order rather than a translucent
   foreground treatment. */
.fg{
  position:absolute; inset:0; z-index:3;
  overflow:visible; pointer-events:none;
}
/* Nothing inside a section may widen the document. The foreground cut-outs and
   the cloth canvases are placed to hang past the frame edges on purpose, and as
   ordinary in-flow descendants they dragged the page box out with them — 194px
   past a 1440 frame. Clip the horizontal axis at the section, which is exactly
   viewport-wide, so each overhang is cut precisely where it leaves the screen.
   \`clip\` pairs with \`visible\` without coercing it, so no scroll container is
   created and every bit of vertical bleed survives. */
.sec, .foot{ overflow-x:clip; overflow-y:visible; }
/* the host for whichever chapter currently owns the near plane — no box of
   its own, since every stage it holds is position:fixed to the viewport */
#fg-sky{
  position:fixed; left:0; top:0; width:0; height:0;
  z-index:52; pointer-events:none;
}
.sec > *:not(.fg), .foot > *:not(.fg){ position:relative; z-index:2; }
.fg-el{ position:absolute; display:block; opacity:0; }
.fg-el > img{
  width:100%; height:auto;   /* the width/height attrs hold the box before the lazy image lands */
  opacity:1;
  filter:saturate(.88) brightness(.86);
}
.fg-el--flip > img{ transform:scaleX(-1); }
/* each piece waits off the edge it is anchored to until its chapter is called */
[data-fg-in="up"]   { transform:translate3d(0,13%,0); }
[data-fg-in="left"] { transform:translate3d(-11%,6%,0); }
[data-fg-in="right"]{ transform:translate3d(11%,6%,0); }
/* one slow breath, on the two lightest layers only */
@keyframes fg-sway{
  from{ transform:rotate(-.45deg) translate3d(0,2px,0); }
  to  { transform:rotate(.45deg)  translate3d(0,-6px,0); }
}
.fg-el--sway > img{ animation:fg-sway 21s var(--ease-io) infinite alternate; transform-origin:0% 45%; }

/* The active chapter owns a bottom-anchored near plane. Its former stage is
   retained only long enough to dissolve into the next chapter's scene. */
.fg.fg-active,.fg.fg-retiring{
  position:fixed; left:0; right:0; top:auto; bottom:0; height:min(56svh,680px);
  z-index:1; overflow:visible; pointer-events:none;
}
.fg.fg-active .fg-el{
  opacity:1; transform:none;
  transition:opacity 1.2s var(--ease-out), transform 1.5s var(--ease-out);
  transition-delay:var(--fg-delay,0ms);
}
.fg .fg-el:nth-child(2){ --fg-delay:90ms; }
.fg .fg-el:nth-child(3){ --fg-delay:180ms; }
.fg .fg-el:nth-child(4){ --fg-delay:270ms; }
.fg.fg-retiring .fg-el{
  opacity:0; transform:translate3d(0,8vh,0) scale(.98); filter:blur(18px);
  transition:opacity .68s var(--ease-out),transform .78s var(--ease-out),filter .78s var(--ease-out);
}

/* Placement is keyed off [data-fg] rather than the section id, because the
   stage of the live chapter is re-parented into #fg-sky and stops being a
   descendant of its own section for as long as it holds the near plane.

   Every piece is anchored from the bottom of that plane, which is the bottom
   of the viewport. The cut-outs in png/ are trimmed flush to their own lowest
   opaque row, so a negative bottom here is a real amount of artwork buried off
   the foot of the frame, not slack in the file — the ground-sitting pieces
   carry enough of it that their base line never lifts off the edge. */

/* — I · the gate: the wall runs along the lower-left frame, a pine holds the
     far edge, and one bank of grass closes the foot of the chapter */
/* Wall against the left edge, pine against the right: the chapter is framed
   by the two of them with the court open between.

   left:0, not a negative offset — the plate is trimmed to its own artwork, so
   pulling it off-frame cuts the gate itself rather than trimming empty margin.
   Its left edge sits on the viewport's. */
[data-fg="gate"] .fg-wall  { left:0; bottom:-30px; width:clamp(430px,47vw,780px); }
[data-fg="gate"] .fg-pine  { right:-4%; bottom:-46px; width:clamp(190px,21vw,370px); }
[data-fg="gate"] .fg-grass { left:3%;   bottom:-150px; width:clamp(420px,60vw,1050px); }

/* — II · still gardens: sakura and maple sweep in from the two lower corners
     and carry their whole length, a lit lantern and a low bush hold the edges */
[data-fg="pathways"] .fg-sakura { left:-6%;  bottom:-86px;  width:clamp(430px,50vw,880px); }
[data-fg="pathways"] .fg-leaves { right:-6%; bottom:-62px;  width:clamp(330px,38vw,670px); }
[data-fg="pathways"] .fg-lantern{ left:-1%;  bottom:-96px;  width:clamp(120px,13vw,215px); }
[data-fg="pathways"] .fg-bush   { right:-4%; bottom:-38px;  width:clamp(250px,30vw,530px); }
/* the lantern is the one lit object in the library — it keeps its ember */
[data-fg="pathways"] .fg-lantern > img{ filter:saturate(.96) brightness(1); }
[data-fg="pathways"] .fg-leaves > img{ transform-origin:100% 40%; }

/* — III · sacred craft: basalt and a low wall fragment bracket the atlas and
     a stand of grass ties them together, all three below the plate grid */
[data-fg="lessons"] .fg-wall   { right:-8%; bottom:-78px; width:clamp(390px,50vw,870px); }
[data-fg="lessons"] .fg-stones { left:-4%;  bottom:-48px; width:clamp(250px,30vw,530px); }
[data-fg="lessons"] .fg-grass  { left:24%;  bottom:-84px; width:clamp(280px,33vw,580px); }

/* — IV · afterlight: a far hill closes the horizon, the shrine ruins stand at
     the left of it, grass banks the right, one branch hangs into the corner */
[data-fg="eternity"] .fg-hill   { left:-8%; width:min(150vh,116%); bottom:calc(-1 * min(20vh,15.5vw)); }
[data-fg="eternity"] .fg-ruins  { left:-5%;  bottom:-32px; width:clamp(240px,28vw,500px); }
[data-fg="eternity"] .fg-grass  { right:-7%; bottom:-60px; width:clamp(300px,37vw,670px); }
[data-fg="eternity"] .fg-sakura { left:-15%; bottom:-70px; width:clamp(280px,33vw,580px); }

/* — colophon: one restrained planting along the lower edge, nothing above it */
[data-fg="foot"] .fg-bush   { left:-6%;  bottom:-110px; width:clamp(230px,28vw,480px); }
[data-fg="foot"] .fg-grass  { right:-5%; bottom:-98px;  width:clamp(255px,30vw,530px); }
[data-fg="foot"] .fg-stones { left:36%;  bottom:-104px; width:clamp(190px,22vw,370px); }

@media (max-width:1080px){
  /* the columns have collapsed and the copy has taken the width back, so the
     framing layers step down rather than crowd it */
  [data-fg="gate"] .fg-wall      { width:clamp(390px,42vw,600px); }
  [data-fg="pathways"] .fg-sakura{ width:clamp(400px,46vw,660px); }
  [data-fg="pathways"] .fg-leaves{ width:clamp(310px,35vw,500px); }
  [data-fg="lessons"] .fg-wall   { width:clamp(360px,45vw,640px); }
  [data-fg="eternity"] .fg-sakura{ width:clamp(260px,30vw,430px); }
}
@media (max-width:820px){
  /* one or two anchors per section: the stacked cards, the atlas plates and
     the call to action own the whole width here, so every duplicated piece
     of ornament goes and what stays is smaller */
  [data-fg="gate"] .fg-pine, [data-fg="pathways"] .fg-sakura,
  [data-fg="pathways"] .fg-leaves, [data-fg="lessons"] .fg-wall,
  [data-fg="eternity"] .fg-sakura, [data-fg="foot"] .fg-stones{ display:none; }
  [data-fg="gate"] .fg-wall     { left:-14%; bottom:-22px; width:min(82vw,440px); }
  [data-fg="gate"] .fg-grass    { left:auto; right:-10%; bottom:-76px; width:min(94vw,530px); }
  [data-fg="pathways"] .fg-lantern{ left:-4%;   bottom:-58px; width:clamp(80px,20vw,128px); }
  [data-fg="pathways"] .fg-bush   { right:-10%; bottom:-38px; width:min(72vw,400px); }
  [data-fg="lessons"] .fg-stones  { left:-8%; bottom:-34px; width:min(66vw,360px); }
  [data-fg="lessons"] .fg-grass   { left:auto; right:-8%; bottom:-44px; width:min(70vw,380px); }
  [data-fg="eternity"] .fg-ruins  { left:-8%;   bottom:-25px; width:min(54vw,300px); }
  [data-fg="eternity"] .fg-grass  { right:-12%; bottom:-34px; width:min(80vw,440px); }
  [data-fg="foot"] .fg-bush  { left:-12%;  bottom:-26px; width:min(68vw,340px); }
  [data-fg="foot"] .fg-grass { right:-12%; bottom:-30px; width:min(74vw,380px); }
}
@media (prefers-reduced-motion:reduce){
  .fg-el--sway > img{ animation:none; }
  .fg.fg-retiring .fg-el{ transition:none !important; filter:none !important; }
}

@media (max-width:1080px){
  body[data-layout-hero="b"] .chapters{ gap:16px 20px; }
  body[data-layout-story="b"] .gate-grid{ grid-template-columns:1fr; }
  body[data-layout-story="b"] .gate-grid h2,
  body[data-layout-story="b"] .gate-copy{ grid-column:auto; }
  body[data-layout-story="b"] .gate-grid h2{ max-width:16ch; }
  body[data-layout-curriculum="b"] .les:nth-child(n){ grid-column:span 3; }
  body[data-layout-curriculum="b"] .les:last-child{ grid-column:span 6; }
}
@media (max-width:820px){
  /* the split collapses and the copy takes the page back */
  body[data-layout-hero="b"] .hero-top{ margin-left:0; max-width:none; }
  body[data-layout-hero="b"] .hero-foot{ width:100%; }
  /* The four-column strip is set on a selector specific enough to survive the
     plain .chapters override below 820, so it has to be unset here by name or
     the chips stay four across on a phone and wrap a word to a line. */
  body[data-layout-hero="b"] .chapters{ grid-template-columns:repeat(2,minmax(0,1fr)); gap:18px 14px; }
  body[data-layout-hero="b"] .chip{ flex-direction:row; gap:14px; }
  /* Same shape of bug: the layout selector outranks the plain single-column
     rule, so the heading kept a 37% column while its words are set at 30px —
     "CHAPTERS." alone is wider than that, and it spilled over the paragraph. */
  body[data-layout-curriculum="b"] .cur-head{ grid-template-columns:1fr; gap:18px; align-items:start; }
  body[data-layout-hero="b"] .chip .num{ font-size:clamp(26px,8vw,36px); }
  body[data-layout-hero="b"] .chip .tx{
    position:static; width:auto; height:auto; overflow:visible; clip:auto;
    clip-path:none; white-space:normal;
  }

  body[data-layout-story="b"] .gate-stats{ grid-template-columns:repeat(2,1fr); border-right:1px solid var(--line-soft); }
  body[data-layout-story="b"] .gate-stats div{ min-height:86px; padding:14px; }
  body[data-layout-story="b"] .gate-stats div:nth-child(-n+2){ border-bottom:1px solid var(--line-soft); }
  body[data-layout-story="b"] .gate-stats div:last-child{ border-right:0; }

  /* the mosaic unstacks, but the rhythm survives: the lead window stays the
     tall one and the two field notes stay letterbox */
  body[data-layout-gallery="b"] .cards{ grid-template-columns:1fr; grid-template-rows:auto; }
  body[data-layout-gallery="b"] .card:first-child{ grid-row:auto; }
  body[data-layout-gallery="b"] .card-fr{ flex:0 0 auto; height:auto; }
  body[data-layout-gallery="b"] .card:first-child .card-fr{ height:auto; aspect-ratio:4 / 5; }
  body[data-layout-gallery="b"] .card:not(:first-child) .card-fr{ aspect-ratio:16 / 10; min-height:0; }

  body[data-layout-curriculum="b"] .cur{ grid-template-columns:1fr; }
  body[data-layout-curriculum="b"] .les:nth-child(n){ grid-column:auto; min-height:0; padding:20px; }
  body[data-layout-curriculum="b"] .les:hover{ padding-left:20px; }

  body[data-layout-closing="b"] .fin{ display:flex; align-items:center; text-align:center; gap:0; }
  body[data-layout-closing="b"] .fin .eyebrow{ margin:0 0 26px; }
  body[data-layout-closing="b"] .fin h2{ writing-mode:horizontal-tb; font-size:clamp(38px,7.4vw,124px); }
  body[data-layout-closing="b"] .fin p{ margin:26px auto 0; }
  body[data-layout-closing="b"] .fin .cta{ margin-top:40px; }

  body[data-layout-footer="b"] .foot-grid{ grid-template-columns:1fr; }
  body[data-layout-footer="b"] .foot-brand{ grid-column:auto; grid-template-columns:minmax(0,1fr); row-gap:16px; }
  body[data-layout-footer="b"] .foot-grid > div:nth-child(n+3){ padding-left:0; border-left:0; }
  body[data-layout-footer="b"] .foot-base{ display:flex; }
  body[data-layout-footer="b"] .foot-base span:last-child{ text-align:left; }
}

/* On a phone two columns leave the chip's copy about 110px once the numeral
   and its gutter are taken out, which is narrow enough to wrap a single word
   to a line. Standing the numeral above the label gives the copy the whole
   column back. */
@media (max-width:560px){
  body[data-layout-hero="b"] .chip{ flex-direction:column; gap:4px; }
  body[data-layout-hero="b"] .chip .num{ font-size:clamp(22px,7.4vw,30px); }
  body[data-layout-hero="b"] .chip .tx{ padding-top:0; }
  body[data-layout-hero="b"] .chip p{ max-width:none; }
}

@media (prefers-reduced-motion:reduce){
  *{ animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important; }
  [data-rv]{ opacity:1 !important; transform:none !important; }
  .mask-line > span,.word{ opacity:1 !important; transform:none !important; }
}
</style>
</head>
<body data-layout-hero="b" data-layout-story="b" data-layout-gallery="b"
      data-layout-curriculum="b" data-layout-closing="b" data-layout-footer="b">

<canvas id="gl" aria-hidden="true"></canvas>
<div id="vignette"></div>
<div id="grain"></div>
<div class="cur-dot" id="cursor"></div>

<!-- ============================================================ preloader -->
<div id="pre">
  <div class="pre-in">
    <div class="pre-mark">
      <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <circle cx="22" cy="24" r="9.5" stroke="#e0231c" stroke-width="1.2"/>
        <path d="M6 12h32M9.5 17h25M22 8v28" stroke="#dfe7e0" stroke-width="1.2"/>
      </svg>
    </div>
    <div class="pre-jp jp">影の道</div>
    <div class="pre-bar"><i id="pre-fill"></i></div>
    <div class="pre-meta">
      <span>Raising the mountain temple</span><b><span id="pre-pct">0</span>%</b>
    </div>
  </div>
</div>

<!-- ============================================================ nav -->
<header class="nav" id="nav">
  <a class="brand" href="#top" data-cursor>
    <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <circle cx="22" cy="25" r="8.6" fill="#e0231c" fill-opacity=".9"/>
      <path d="M5 13h34M9 18.4h26M22 8.5v27" stroke="#dfe7e0" stroke-width="1.5"/>
      <path d="M14 35.5h16" stroke="#dfe7e0" stroke-width="1.2" stroke-opacity=".6"/>
    </svg>
    <span class="brand-tx"><b>KAGE</b><i>HIDDEN REALMS OF KYOTO</i></span>
  </a>
  <nav class="nav-links" id="navlinks">
    <a class="nav-link" href="#gate" data-cursor><span>Temples</span><span class="alt">伽藍</span></a>
    <a class="nav-link" href="#pathways" data-cursor><span>Gardens</span><span class="alt">庭園</span></a>
    <a class="nav-link" href="#lessons" data-cursor><span>Rituals</span><span class="alt">神事</span></a>
    <a class="nav-link" href="#eternity" data-cursor><span>Afterlight</span><span class="alt">残光</span></a>
  </nav>
  <button class="nav-burger" aria-label="Menu" data-cursor><i></i><i></i></button>
</header>

<div class="page" id="top">

<!-- ============================================================ hero -->
<section class="hero" id="hero" data-cam="0">
  <div class="hero-top">
    <div class="eyebrow" data-rv="fade"><span class="dot"></span> Chapter 00 — The Hidden Gate</div>
    <h1 class="display h-hero">
      <span class="mask-line"><span>Where stillness</span></span>
      <span class="mask-line"><span>reveals the</span></span>
      <span class="mask-line"><span>unseen.</span></span>
    </h1>
    <p class="hero-sub body" data-rv="up">Enter Kyoto through its quiet thresholds, where ritual,
      craft, and memory shape the path.</p>
  </div>

  <div class="hero-spacer"></div>

  <div class="hero-foot">
    <div class="hero-cue" data-rv="fade"><span>Scroll to enter</span><span class="track"><i></i></span></div>
    <div class="chapters" id="chips">
      <div class="chip" data-chip="0" data-rv="up" data-cursor><span class="num">01</span>
        <span class="tx"><b>Thresholds</b><p>Discover the hidden gates that open on to deeper paths.</p></span></div>
      <div class="chip" data-chip="1" data-rv="up" data-cursor><span class="num">02</span>
        <span class="tx"><b>Still Gardens</b><p>Witness the courts where silence gently unfolds.</p></span></div>
      <div class="chip" data-chip="2" data-rv="up" data-cursor><span class="num">03</span>
        <span class="tx"><b>Sacred Craft</b><p>Embrace the hands and heritage that shape devotion.</p></span></div>
      <div class="chip" data-chip="3" data-rv="up" data-cursor><span class="num">04</span>
        <span class="tx"><b>Night Rituals</b><p>Explore the rites that awaken when the day is done.</p></span></div>
    </div>
  </div>

  <a class="peek" href="#pathways" data-view="3" data-rv="fade" data-cursor aria-label="Preview: Sanmon, before the bell">
    <!-- data-frame, or the live view is blitted over the whole anchor and
         runs on down behind the caption instead of stopping at the frame -->
    <span class="peek-fr" data-frame></span>
    <span class="peek-play"><svg viewBox="0 0 22 22" fill="none"><path d="M8 5.6 16.4 11 8 16.4z" fill="#dfe7e0"/></svg></span>
    <span class="peek-cap"><b class="jp">山門</b><i>Sanmon — before the bell</i></span>
  </a>

  <div class="word-fb" aria-hidden="true">KAGE</div>

  <div class="hero-side" data-rv="up">
    <span class="v jp">影の道</span>
  </div>
</section>

<!-- ============================================================ chapter I -->
<section class="sec" id="gate" data-cam="1">
  <!-- foreground: the wall arrives first, the pine at the edge, the grass last -->
  <div class="fg" data-fg="gate" aria-hidden="true">
    <span class="fg-el fg-wall" data-fg-in="left">
      <img src="secret-pathways-assets/foreground/png/temple-wall.webp" alt="" width="1536" height="884" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-pine" data-fg-in="right">
      <img src="secret-pathways-assets/foreground/png/pine-tree.webp" alt="" width="1024" height="1438" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-grass" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async">
    </span>
  </div>
  <div class="sec-head" data-rv="fade">
    <span class="k"><b>01</b> — The Sanmon</span><span class="rule"></span><span class="k jp">山門</span>
  </div>
  <div class="gate-grid">
    <h2 class="display h-sec" data-rv="up">Charred cypress, worn stone, one gate left open.</h2>
    <div class="gate-copy">
      <p class="lead" data-rv="up">Kage begins where the city stops: a mountain gate of cedar burned black,
        standing in its own weather. The soot is not decoration. It is how a board is taught to survive a
        hundred rainy seasons, and the first thing this place asks you to understand.</p>
      <p class="body" data-rv="up">Climb the worn steps and the worship hall lifts out of the mist, its paper
        screens lit from inside like a lantern the size of a house. Above the eaves a vermilion moon holds
        its place, patient, half hidden. Nothing here is in a hurry. Neither, for the next ninety minutes,
        are you.</p>
      <a class="arrowlink" href="#pathways" data-rv="fade" data-cursor>
        <span>Cross the threshold</span>
        <span class="ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
      </a>
    </div>
  </div>
  <div class="gate-stats" data-rv="up">
    <div><b>05</b><span>Chapters</span></div>
    <div><b>92</b><span>Minutes</span></div>
    <div><b>1611</b><span>Hall raised</span></div>
    <div><b>∞</b><span>Stillness</span></div>
  </div>
</section>

<!-- ============================================================ chapter II -->
<section class="sec" id="pathways" data-cam="2">
  <!-- foreground: the garden frames the mosaic from the sides and the two lower corners -->
  <div class="fg" data-fg="pathways" aria-hidden="true">
    <span class="fg-el fg-sakura fg-el--sway" data-fg-in="left">
      <img src="secret-pathways-assets/foreground/png/sakura-branch.webp" alt="" width="1536" height="1024" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-leaves fg-el--sway" data-fg-in="right">
      <img src="secret-pathways-assets/foreground/png/maple-leaves.webp" alt="" width="1536" height="1024" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-lantern" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/stone-lantern.webp" alt="" width="1024" height="1499" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-bush" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/garden-bush.webp" alt="" width="1717" height="876" loading="lazy" decoding="async">
    </span>
  </div>
  <div class="sec-head" data-rv="fade">
    <span class="k"><b>02</b> — Still Gardens</span><span class="rule"></span><span class="k jp">庭園</span>
  </div>
  <div class="cards" id="cards">
    <article class="card" data-rv="up" data-view="0" data-cursor>
      <div class="card-fr" data-frame>
                <span class="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
        <i class="glow" style="--gx:80.2%; --gy:23.9%; --gr:22%; --gt:6.1s; --gt2:9.7s; --gc1:rgba(255,142,108,.50); --gc2:rgba(212,56,38,.24)"></i>
        <div class="card-lab"><b>Approach</b><span class="jp">参道</span></div>
      </div>
      <div class="card-meta"><span>The long climb</span><span>01 / 03</span></div>
    </article>
    <article class="card" data-rv="up" data-view="1" data-cursor>
      <div class="card-fr" data-frame>
                <span class="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
        <i class="glow glow--flame" style="--gx:70.5%; --gy:47.2%; --gr:14%; --gt:3.7s; --gt2:5.3s; --gc1:rgba(255,198,124,.62); --gc2:rgba(226,118,40,.30)"></i>
        <div class="card-lab"><b>Lanterns</b><span class="jp">灯籠</span></div>
      </div>
      <div class="card-meta"><span>Lantern court</span><span>02 / 03</span></div>
    </article>
    <article class="card" data-rv="up" data-view="2" data-cursor>
      <div class="card-fr" data-frame>
                <span class="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
        <i class="glow" style="--gx:48.0%; --gy:16.8%; --gr:20%; --gt:7.3s; --gt2:11.2s; --gc1:rgba(255,138,104,.52); --gc2:rgba(208,54,36,.24)"></i>
        <div class="card-lab"><b>Moonwater</b><span class="jp">月影</span></div>
      </div>
      <div class="card-meta"><span>The wet court</span><span>03 / 03</span></div>
    </article>
  </div>
</section>

<!-- ============================================================ chapter III -->
<section class="sec" id="lessons" data-cam="3">
  <!-- foreground: a low periphery for the atlas — wall fragment, basalt, one stand of grass -->
  <div class="fg" data-fg="lessons" aria-hidden="true">
    <span class="fg-el fg-wall fg-el--flip" data-fg-in="right">
      <img src="secret-pathways-assets/foreground/png/temple-wall.webp" alt="" width="1536" height="884" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-stones" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/basalt-stones.webp" alt="" width="1536" height="996" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-grass" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async">
    </span>
  </div>
  <div class="sec-head" data-rv="fade">
    <span class="k"><b>03</b> — Sacred Craft</span><span class="rule"></span><span class="k jp">手業</span>
  </div>
  <div class="cur-head">
    <h2 class="display h-sec" data-rv="up">Five chapters. Ninety minutes. One quiet mind.</h2>
    <p class="body-lg" data-rv="up">Each chapter is a walk, not a lecture. You arrive at the gate, climb the
      steps, sit with the lantern, and leave with one thing worth keeping.</p>
  </div>
  <div class="cur" id="cur">
    <div class="les" data-les="0" data-cursor>
      <span class="k">01</span>
      <h3>The Hidden Gate<em class="jp">山門</em></h3>
      <p>Why a gate is a sentence, and what you agree to when you walk under one.</p>
      <span class="t">14 min</span><i class="bar"></i>
    </div>
    <div class="les" data-les="1" data-cursor>
      <span class="k">02</span>
      <h3>Borrowed Scenery<em class="jp">借景</em></h3>
      <p>Shakkei: composing with a mountain you will never own.</p>
      <span class="t">18 min</span><i class="bar"></i>
    </div>
    <div class="les" data-les="2" data-cursor>
      <span class="k">03</span>
      <h3>Charred Cypress<em class="jp">焼杉</em></h3>
      <p>Yakisugi: burning a board black so the weather will let it live.</p>
      <span class="t">21 min</span><i class="bar"></i>
    </div>
    <div class="les" data-les="3" data-cursor>
      <span class="k">04</span>
      <h3>Lantern Light<em class="jp">灯籠</em></h3>
      <p>How a single ember decides the scale of everything around it.</p>
      <span class="t">17 min</span><i class="bar"></i>
    </div>
    <div class="les" data-les="4" data-cursor>
      <span class="k">05</span>
      <h3>The Vermilion Moon<em class="jp">朱月</em></h3>
      <p>Why the moon burns red over the valley, and what the garden does with it.</p>
      <span class="t">22 min</span><i class="bar"></i>
    </div>
  </div>
</section>

<!-- ============================================================ chapter IV -->
<section class="sec fin" id="eternity" data-cam="4">
  <!-- foreground: the closing horizon: hill, ruins, grass, and the last branch -->
  <div class="fg" data-fg="eternity" aria-hidden="true">
    <span class="fg-el fg-hill" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/hill.webp" alt="" width="1774" height="887" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-ruins" data-fg-in="left">
      <img src="secret-pathways-assets/foreground/png/shrine-ruins.webp" alt="" width="1536" height="1001" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-grass" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-sakura" data-fg-in="left">
      <img src="secret-pathways-assets/foreground/png/sakura-branch.webp" alt="" width="1536" height="1024" loading="lazy" decoding="async">
    </span>
  </div>
  <div class="eyebrow" data-rv="fade">Chapter 04 — Afterlight</div>
  <h2 class="display" data-rv="up">Afterlight</h2>
  <p class="body-lg" data-rv="up">The gate does not close behind you. Take the walk whenever the noise
    gets loud — it is always the same path, and never the same light.</p>
  <a class="cta" href="#top" data-rv="fade" data-cursor>
    <i></i><span>Begin the walk</span>
    <svg viewBox="0 0 14 14" fill="none" width="13" height="13"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg>
  </a>
</section>

<!-- ============================================================ footer -->
<footer class="foot" data-cam="5">
  <!-- foreground: one planting along the lower edge of the colophon -->
  <div class="fg" data-fg="foot" aria-hidden="true">
    <span class="fg-el fg-bush" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/garden-bush.webp" alt="" width="1717" height="876" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-grass" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-stones" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/basalt-stones.webp" alt="" width="1536" height="996" loading="lazy" decoding="async">
    </span>
  </div>
  <div class="foot-grid">
    <div class="foot-brand">
      <svg viewBox="0 0 44 44" fill="none" width="34" height="34" aria-hidden="true">
        <circle cx="22" cy="25" r="8.6" fill="#e0231c" fill-opacity=".9"/>
        <path d="M5 13h34M9 18.4h26M22 8.5v27" stroke="#dfe7e0" stroke-width="1.5"/>
      </svg>
      <p>A five-chapter night walk through a Kyoto mountain temple. Three illustrated garden field notes
        sit inside a live Three.js sanctuary.</p>
    </div>
    <div><h4>Chapters</h4><ul>
      <li><a href="#gate" data-cursor>The Sanmon</a></li>
      <li><a href="#pathways" data-cursor>Still Gardens</a></li>
      <li><a href="#lessons" data-cursor>Sacred Craft</a></li>
      <li><a href="#eternity" data-cursor>Afterlight</a></li>
    </ul></div>
    <div><h4>Practice</h4><ul>
      <li><a href="#lessons" data-cursor>Borrowed scenery</a></li>
      <li><a href="#lessons" data-cursor>Lantern light</a></li>
      <li><a href="#lessons" data-cursor>Charred cypress</a></li>
      <li><a href="#lessons" data-cursor>Raked gravel</a></li>
    </ul></div>
    <div><h4>Elsewhere</h4><ul>
      <li><a href="#top" data-cursor>Journal</a></li>
      <li><a href="#top" data-cursor>Field notes</a></li>
      <li><a href="#top" data-cursor>Colophon</a></li>
    </ul></div>
  </div>
  <div class="foot-base">
    <span>© 2026 Kage — Kage no Michi</span>
    <span class="jp">静けさは一つの技である</span>
    <span>WebGL · Onest · Kyoto</span>
  </div>
</footer>

</div><!-- /.page -->

<!-- The near plane of the active chapter is parked here rather than inside its
     section: .page is a stacking context at z-index 10, so nothing living in it
     can rise past the nav. #fg-sky sits above the whole layout instead. -->
<div id="fg-sky" aria-hidden="true"></div>

<div class="rail" id="rail"></div>

<script src="secret-pathways-assets/three.min.js"><\/script>
<script>
/* =====================================================================
   KAGE — a live Kyoto mountain temple, after dark.
   Everything on this page is generated at runtime: no photographs,
   no video, no external assets beyond three.js and two subset fonts.
   ===================================================================== */
(function () {
'use strict';

/* ------------------------------------------------------------ 0 · basics */
const Q      = new URLSearchParams(location.search);
const qs     = (k, d) => { const v = Q.get(k); return v === null ? d : v; };
const qn     = (k, d) => { const v = Q.get(k); return v === null ? d : parseFloat(v); };
const REDUCE = matchMedia('(prefers-reduced-motion: reduce)').matches;
const COARSE = matchMedia('(hover: none)').matches;

const clamp  = (v, a, b) => v < a ? a : (v > b ? b : v);
const sat    = v => clamp(v, 0, 1);
const lerp   = (a, b, t) => a + (b - a) * t;
const smooth = (e0, e1, x) => { const t = sat((x - e0) / (e1 - e0)); return t * t * (3 - 2 * t); };
const easeOut= t => 1 - Math.pow(1 - t, 3);
const easeIO = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const TAU    = Math.PI * 2;
/* frame-rate independent damping */
const damp   = (cur, to, rate, dt) => lerp(cur, to, 1 - Math.exp(-rate * dt));

function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
/* classic 2-D gradient noise */
function noise2D(seed) {
  const rnd = mulberry32(seed), p = new Uint8Array(256), perm = new Uint8Array(512);
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) { const j = (rnd() * (i + 1)) | 0, t = p[i]; p[i] = p[j]; p[j] = t; }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
  const G = [[1, 1], [-1, 1], [1, -1], [-1, -1], [1, 0], [-1, 0], [0, 1], [0, -1]];
  const fade = t => t * t * t * (t * (t * 6 - 15) + 10);
  return function (x, y) {
    const xi = Math.floor(x), yi = Math.floor(y);
    const X = xi & 255, Y = yi & 255, xf = x - xi, yf = y - yi;
    const u = fade(xf), v = fade(yf);
    const g = (h, dx, dy) => { const q = G[h & 7]; return q[0] * dx + q[1] * dy; };
    const aa = perm[perm[X] + Y], ab = perm[perm[X] + Y + 1];
    const ba = perm[perm[X + 1] + Y], bb = perm[perm[X + 1] + Y + 1];
    return lerp(lerp(g(aa, xf, yf), g(ba, xf - 1, yf), u),
                lerp(g(ab, xf, yf - 1), g(bb, xf - 1, yf - 1), u), v);
  };
}
function fbm(n, x, y, oct, lac, gain) {
  let a = .5, f = 1, s = 0, m = 0;
  for (let i = 0; i < (oct || 4); i++) { s += a * n(x * f, y * f); m += a; a *= (gain || .5); f *= (lac || 2); }
  return s / m;                                    /* −1 … 1 */
}

/* ------------------------------------------------------------ 1 · canvas */
function cvs(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
const hex = (r, g, b) => 'rgb(' + (r | 0) + ',' + (g | 0) + ',' + (b | 0) + ')';

/* stacked, up-scaled value noise — 30× faster than a per-pixel fbm and
   indistinguishable once it is multiplied under a dark base colour */
function fbmCanvas(W, H, seed, octaves, baseCells, contrast) {
  const out = cvs(W, H), o = out.getContext('2d');
  o.fillStyle = '#808080'; o.fillRect(0, 0, W, H);
  let cells = baseCells || 3, alpha = 1;
  for (let i = 0; i < (octaves || 5); i++) {
    const n = cvs(cells, cells), nx = n.getContext('2d');
    const im = nx.createImageData(cells, cells), d = im.data, r = mulberry32(seed + i * 977);
    for (let k = 0; k < cells * cells; k++) {
      const v = 128 + (r() - .5) * 255 * (contrast || 1);
      d[k * 4] = d[k * 4 + 1] = d[k * 4 + 2] = clamp(v, 0, 255); d[k * 4 + 3] = 255;
    }
    nx.putImageData(im, 0, 0);
    o.globalAlpha = alpha;
    o.globalCompositeOperation = i === 0 ? 'source-over' : 'overlay';
    o.imageSmoothingEnabled = true; o.imageSmoothingQuality = 'high';
    o.drawImage(n, 0, 0, W, H);
    cells *= 2; alpha *= .62;
  }
  o.globalAlpha = 1; o.globalCompositeOperation = 'source-over';
  return out;
}

/* height → tangent-space normal map (blur first, then Sobel) */
function normalFromHeight(hc, strength) {
  const W = hc.width, H = hc.height;
  const b = cvs(W, H), bx = b.getContext('2d');
  bx.filter = 'blur(1.1px)'; bx.drawImage(hc, 0, 0); bx.filter = 'none';
  const src = bx.getImageData(0, 0, W, H).data;
  const out = cvs(W, H), ox = out.getContext('2d');
  const im = ox.createImageData(W, H), d = im.data;
  const at = (x, y) => src[(((y + H) % H) * W + ((x + W) % W)) * 4] / 255;
  const s = strength || 2.4;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const gx = (at(x + 1, y) - at(x - 1, y)) * s;
    const gy = (at(x, y + 1) - at(x, y - 1)) * s;
    let nx = -gx, ny = gy, nz = 1;
    const il = 1 / Math.hypot(nx, ny, nz);
    const i = (y * W + x) * 4;
    d[i]     = (nx * il * .5 + .5) * 255;
    d[i + 1] = (ny * il * .5 + .5) * 255;
    d[i + 2] = (nz * il * .5 + .5) * 255;
    d[i + 3] = 255;
  }
  ox.putImageData(im, 0, 0);
  return out;
}

/* ------------------------------------------------------- 2 · surfaces */
/* long, wet, board-formed concrete — the sanctuary walls */
function texWall() {
  const W = 1024, H = 1024;
  const c = cvs(W, H), x = c.getContext('2d');
  x.fillStyle = '#10161a'; x.fillRect(0, 0, W, H);

  /* mottling */
  x.globalCompositeOperation = 'overlay'; x.globalAlpha = .82;
  x.drawImage(fbmCanvas(W, H, 41, 6, 3, 1), 0, 0);
  x.globalAlpha = 1; x.globalCompositeOperation = 'source-over';

  /* board-form seams every sixth */
  const rnd = mulberry32(7);
  for (let i = 1; i < 6; i++) {
    const y = (H / 6) * i;
    x.fillStyle = 'rgba(0,0,0,.45)'; x.fillRect(0, y - 1.5, W, 3);
    x.fillStyle = 'rgba(190,205,205,.05)'; x.fillRect(0, y + 2, W, 2);
  }
  /* form-tie dimples */
  for (let i = 0; i < 6; i++) for (let j = 0; j < 4; j++) {
    const cx2 = (W / 4) * (j + .5) + (rnd() - .5) * 14, cy = (H / 6) * (i + .5);
    const g = x.createRadialGradient(cx2, cy, 1, cx2, cy, 11);
    g.addColorStop(0, 'rgba(0,0,0,.5)'); g.addColorStop(.7, 'rgba(0,0,0,.18)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g; x.beginPath(); x.arc(cx2, cy, 11, 0, TAU); x.fill();
  }
  /* rain streaks running the full height */
  for (let i = 0; i < 190; i++) {
    const sx = rnd() * W, w = .6 + rnd() * 3.4, top = rnd() * H * .5, len = H * (.4 + rnd() * .7);
    const g = x.createLinearGradient(0, top, 0, top + len);
    const dark = rnd() > .45;
    g.addColorStop(0, 'rgba(0,0,0,0)');
    g.addColorStop(.25, dark ? 'rgba(0,0,0,.20)' : 'rgba(170,195,200,.045)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g; x.fillRect(sx, top, w, len);
  }
  /* fine tooth */
  x.globalAlpha = .16; x.globalCompositeOperation = 'overlay';
  x.drawImage(fbmCanvas(512, 512, 91, 3, 128, 1.4), 0, 0, W, H);
  x.globalAlpha = 1; x.globalCompositeOperation = 'source-over';

  /* height for the normal map: seams + streaks only */
  const h = cvs(W, H), hx = h.getContext('2d');
  hx.fillStyle = '#808080'; hx.fillRect(0, 0, W, H);
  hx.globalAlpha = .5; hx.drawImage(fbmCanvas(W, H, 41, 5, 6, 1), 0, 0); hx.globalAlpha = 1;
  for (let i = 1; i < 6; i++) { hx.fillStyle = '#2a2a2a'; hx.fillRect(0, (H / 6) * i - 2, W, 4); }
  return { map: c, normal: normalFromHeight(h, 2.0) };
}

/* wet slate paving — big slabs, tight joints, standing water */
function texFloor() {
  const W = 1024, H = 1024;
  const c = cvs(W, H), x = c.getContext('2d');
  const rnd = mulberry32(23);
  x.fillStyle = '#0a0f12'; x.fillRect(0, 0, W, H);
  const N = 4, S = W / N;
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const t = .82 + rnd() * .36;
    x.fillStyle = hex(12 * t, 17 * t, 20 * t);
    x.fillRect(i * S + 1.5, j * S + 1.5, S - 3, S - 3);
  }
  x.globalCompositeOperation = 'overlay'; x.globalAlpha = .55;
  x.drawImage(fbmCanvas(W, H, 63, 6, 4, 1), 0, 0);
  x.globalAlpha = 1; x.globalCompositeOperation = 'source-over';
  /* joints */
  x.strokeStyle = 'rgba(0,0,0,.72)'; x.lineWidth = 3;
  for (let i = 0; i <= N; i++) {
    x.beginPath(); x.moveTo(i * S, 0); x.lineTo(i * S, H); x.stroke();
    x.beginPath(); x.moveTo(0, i * S); x.lineTo(W, i * S); x.stroke();
  }
  /* height map: joints recessed, grain */
  const h = cvs(W, H), hx = h.getContext('2d');
  hx.fillStyle = '#8c8c8c'; hx.fillRect(0, 0, W, H);
  hx.globalAlpha = .35; hx.drawImage(fbmCanvas(W, H, 63, 5, 8, 1), 0, 0); hx.globalAlpha = 1;
  hx.strokeStyle = '#303030'; hx.lineWidth = 5;
  for (let i = 0; i <= N; i++) {
    hx.beginPath(); hx.moveTo(i * S, 0); hx.lineTo(i * S, H); hx.stroke();
    hx.beginPath(); hx.moveTo(0, i * S); hx.lineTo(W, i * S); hx.stroke();
  }
  /* roughness: mostly glass, drier patches where the rain missed */
  const r = cvs(512, 512), rx = r.getContext('2d');
  rx.fillStyle = '#1c1c1c'; rx.fillRect(0, 0, 512, 512);
  rx.globalAlpha = .95; rx.globalCompositeOperation = 'lighten';
  rx.drawImage(fbmCanvas(512, 512, 77, 4, 3, 1.5), 0, 0);
  rx.globalAlpha = 1; rx.globalCompositeOperation = 'source-over';
  return { map: c, normal: normalFromHeight(h, 1.5), rough: r };
}

/* --------------------------------------------------- temple timber · cedar
   Boards, not a noise field. Three things make sawn wood read as wood and
   none of them is fbm:

     1 · ring geometry. A plank is a flat cut through a round log, so the
         rings meet the face as two branches either side of the pith, and
         wherever the cut runs shallow across a ring the branches close into
         the cathedral arch everyone recognises. Solving the circle for it —
         x = pith ± √(r² − d(y)²), with the cut depth d wandering down the
         board — hands over the arches for free. Drawn strokes only ever give
         stripes, which is what the first pass here did, and stripes on a
         column read as brushed metal.
     2 · the boards themselves. Joints, and a different tone on either side of
         one. A wall with no joint in it is a wall of plastic.
     3 · pores, so the face has tooth rather than a painted finish.

   Broad fbm overlays used to do the work here and they are exactly why the
   hall looked like it was standing under a cloud: at this camera distance a
   noise blotch is dirt, and dirt is not grain. Everything below is structure.

   boards:0 gives a single timber for the columns, sills and rails, which are
   each one stick of wood and must not carry a joint. */
function texWood(seed, opt) {
  const o = opt || {}, W = 512, H = 512;
  const c = cvs(W, H), x = c.getContext('2d');
  const h = cvs(W, H), hx = h.getContext('2d');
  const r = cvs(W, H), rx = r.getContext('2d');
  const rnd = mulberry32(seed || 3);
  const base = o.base || [30, 23, 19];
  x.fillStyle = hex(base[0], base[1], base[2]); x.fillRect(0, 0, W, H);
  hx.fillStyle = '#808080'; hx.fillRect(0, 0, W, H);
  rx.fillStyle = o.rough || '#d6d6d6'; rx.fillRect(0, 0, W, H);

  /* board layout — widths jittered, then normalised so the run closes on the
     tile edge and the map still wraps */
  const nb = o.boards === undefined ? 7 : o.boards;
  const cuts = [0];
  if (nb > 0) {
    const ws = []; let sum = 0;
    for (let i = 0; i < nb; i++) { const v = .70 + rnd() * .60; ws.push(v); sum += v; }
    let acc = 0;
    ws.forEach(v => { acc += v / sum * W; cuts.push(acc); });
  } else cuts.push(W);

  const stroke = (pts, ctx, style, w) => {
    if (pts.length < 2) return;
    ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
    ctx.strokeStyle = style; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.stroke();
  };

  for (let b = 0; b < cuts.length - 1; b++) {
    const x0 = cuts[b], x1 = cuts[b + 1], bw = x1 - x0;
    /* every board came off a different part of the log */
    const tone = .80 + rnd() * .44;
    const pith = x0 + bw * (rnd() * 2.8 - .9);        /* usually outside it */
    const d0 = bw * (.12 + rnd() * 1.7);              /* how deep the cut ran */
    const amp = bw * (.10 + rnd() * .40);
    const per = 1 + ((rnd() * 2) | 0), ph = rnd() * TAU;
    const dAt = y => d0 + Math.sin(y / H * TAU * per + ph) * amp;
    const gap = 2.4 + rnd() * 5.0;                    /* ring spacing */

    [x, hx, rx].forEach(d => { d.save(); d.beginPath(); d.rect(x0, 0, bw, H); d.clip(); });
    x.fillStyle = hex(base[0] * tone, base[1] * tone, base[2] * tone);
    x.fillRect(x0, 0, bw, H);

    for (let k = 1; k * gap < bw * 3.4 + d0 + amp; k++) {
      const rr = k * gap * (.88 + rnd() * .24);
      const dark = .42 + rnd() * .38, wide = .8 + rnd() * 1.9;
      for (const side of [-1, 1]) {
        let pts = [];
        const flush = () => {
          /* latewood: a narrow dark band, with the pale earlywood just inside */
          stroke(pts, x, 'rgba(0,0,0,' + dark.toFixed(2) + ')', wide);
          stroke(pts, hx, 'rgba(0,0,0,' + (dark * .8).toFixed(2) + ')', wide);
          stroke(pts.map(q => [q[0] + side * (wide + .6), q[1]]), x,
                 'rgba(150,120,96,' + (dark * .30).toFixed(2) + ')', wide * .7);
          pts = [];
        };
        for (let y = -3; y <= H + 3; y += 3) {
          const d = dAt(y), q = rr * rr - d * d;
          if (q <= 0) { flush(); continue; }
          pts.push([pith + side * Math.sqrt(q), y]);
        }
        flush();
      }
    }
    /* pores — the open tooth of cedar, elongated along the grain */
    for (let i = 0; i < 220; i++) {
      const px2 = x0 + rnd() * bw, py = rnd() * H, ln = 1.5 + rnd() * 6;
      x.fillStyle = 'rgba(0,0,0,' + (.10 + rnd() * .22) + ')';
      x.fillRect(px2, py, .7 + rnd() * .7, ln);
      hx.fillStyle = 'rgba(0,0,0,.22)'; hx.fillRect(px2, py, .8, ln);
    }
    /* the odd knot, where a branch left the trunk */
    if (rnd() > .55) {
      const kx = x0 + bw * (.2 + rnd() * .6), ky = rnd() * H, kr = 2.5 + rnd() * 5;
      for (let i = 5; i >= 1; i--) {
        const t = i / 5;
        x.strokeStyle = 'rgba(0,0,0,' + (.5 - t * .25).toFixed(2) + ')'; x.lineWidth = 1.1;
        x.beginPath(); x.ellipse(kx, ky, kr * t * 1.5, kr * t * 2.4, 0, 0, TAU); x.stroke();
        hx.strokeStyle = 'rgba(0,0,0,.30)'; hx.lineWidth = 1.1;
        hx.beginPath(); hx.ellipse(kx, ky, kr * t * 1.5, kr * t * 2.4, 0, 0, TAU); hx.stroke();
      }
    }
    /* checking: the splits a dried board opens, always along the grain */
    for (let i = 0; i < 5; i++) {
      const sx = x0 + rnd() * bw, sy = rnd() * H, ln = 20 + rnd() * 120;
      const pts = [];
      for (let y = sy; y < sy + ln; y += 6) pts.push([sx + Math.sin(y * .07) * 1.4, y]);
      stroke(pts, x, 'rgba(0,0,0,.62)', .7 + rnd() * 1.2);
      stroke(pts, hx, 'rgba(0,0,0,.55)', .7 + rnd() * 1.2);
    }
    [x, hx, rx].forEach(d => d.restore());

    /* the joint, and the board edge that catches light beside it */
    if (nb > 0) {
      x.fillStyle = 'rgba(0,0,0,.80)'; x.fillRect(x1 - 1.1, 0, 2.2, H);
      x.fillStyle = 'rgba(158,130,106,.14)'; x.fillRect(x1 + 1.1, 0, 1.1, H);
      hx.fillStyle = 'rgba(0,0,0,.85)'; hx.fillRect(x1 - 1.3, 0, 2.6, H);
      hx.fillStyle = 'rgba(255,255,255,.35)'; hx.fillRect(x1 + 1.3, 0, 1.6, H);
      rx.fillStyle = 'rgba(255,255,255,.5)'; rx.fillRect(x1 - 1.6, 0, 3.2, H);
    }
  }

  /* soot, running down the boards rather than pooling in clouds — this is the
     one weathering pass, and it follows the grain because water does */
  for (let i = 0; i < 90; i++) {
    const sx = rnd() * W, top = rnd() * H, ln = H * (.15 + rnd() * .5);
    const g = x.createLinearGradient(0, top, 0, top + ln);
    g.addColorStop(0, 'rgba(0,0,0,0)');
    g.addColorStop(.3, 'rgba(0,0,0,' + (.10 + rnd() * .16) + ')');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g; x.fillRect(sx, top, .8 + rnd() * 3.4, ln);
  }
  return { map: c, normal: normalFromHeight(h, o.relief || 2.4), rough: r };
}

/* ------------------------------------------------------------ cut granite
   The lanterns are carved out of one block, so this is a monolith face and
   not coursed masonry: no joints, no bond pattern. What sells it instead is
   grain and wear —

     1 · the speckle. Three mineral populations at three tones: pale feldspar,
         mid quartz, black mica. A granite without visible crystal is grey
         plastic, and it is the one thing a colour ramp cannot fake.
     2 · the chisel. Parallel bruising left by a point on a dressed face, each
         mark a dark gouge with a lit shoulder below it.
     3 · pitting and fracture, and moss keyed to *those* — moss grows where
         water sits, which is the low ground, so it is read out of the height
         field rather than dropped on as its own cloud. That cloud is what
         made this look like weather rather than stone. */
function texStone(seed, opt) {
  const o = opt || {}, W = 512, H = 512;
  const c = cvs(W, H), x = c.getContext('2d');
  const h = cvs(W, H), hx = h.getContext('2d');
  const r = cvs(W, H), rx = r.getContext('2d');
  const rnd = mulberry32(seed || 17);
  const base = o.base || [46, 51, 53];
  x.fillStyle = hex(base[0], base[1], base[2]); x.fillRect(0, 0, W, H);
  hx.fillStyle = '#808080'; hx.fillRect(0, 0, W, H);
  rx.fillStyle = '#e8e8e8'; rx.fillRect(0, 0, W, H);

  /* 1 · crystal */
  const speck = (n, fill, smin, smax, hgt) => {
    for (let i = 0; i < n; i++) {
      const s = smin + rnd() * (smax - smin), px = rnd() * W, py = rnd() * H;
      x.fillStyle = fill(rnd);
      x.beginPath(); x.ellipse(px, py, s, s * (.55 + rnd() * .85), rnd() * TAU, 0, TAU); x.fill();
      if (hgt) {
        hx.fillStyle = hgt;
        hx.beginPath(); hx.ellipse(px, py, s, s * .8, 0, 0, TAU); hx.fill();
      }
    }
  };
  speck(3400, q => 'rgba(206,210,204,' + (.06 + q() * .20) + ')', .6, 2.8, 'rgba(255,255,255,.13)');
  speck(2000, q => 'rgba(126,136,134,' + (.07 + q() * .20) + ')', .8, 3.4, null);
  speck(1300, q => 'rgba(8,10,12,'     + (.14 + q() * .38) + ')', .5, 2.4, 'rgba(0,0,0,.16)');

  /* 2 · the chisel */
  for (let i = 0; i < 220; i++) {
    const py = rnd() * H, px = rnd() * W, len = 5 + rnd() * 24, ang = -.26 + rnd() * .52;
    [[x, 'rgba(0,0,0,.22)', 'rgba(210,216,212,.08)'], [hx, 'rgba(0,0,0,.34)', 'rgba(255,255,255,.26)']]
      .forEach(([d, dk, lt]) => {
        d.save(); d.translate(px, py); d.rotate(ang);
        d.fillStyle = dk; d.fillRect(0, 0, len, 1.5);
        d.fillStyle = lt; d.fillRect(0, 1.5, len, 1.0);
        d.restore();
      });
  }
  /* 3 · pitting and fracture */
  for (let i = 0; i < 260; i++) {
    const px = rnd() * W, py = rnd() * H, rr = .8 + rnd() * rnd() * 5;
    const g = x.createRadialGradient(px - rr * .3, py - rr * .3, rr * .1, px, py, rr);
    g.addColorStop(0, 'rgba(0,0,0,.42)'); g.addColorStop(.7, 'rgba(0,0,0,.16)');
    g.addColorStop(1, 'rgba(198,204,198,.10)');
    x.fillStyle = g; x.beginPath(); x.arc(px, py, rr, 0, TAU); x.fill();
    hx.fillStyle = 'rgba(0,0,0,.40)'; hx.beginPath(); hx.arc(px, py, rr * .8, 0, TAU); hx.fill();
  }
  for (let i = 0; i < 16; i++) {
    let px = rnd() * W, py = rnd() * H, a = rnd() * TAU;
    const pts = [[px, py]];
    for (let k = 0; k < 24; k++) {
      a += (rnd() - .5) * .9; px += Math.cos(a) * 9; py += Math.sin(a) * 9;
      pts.push([px, py]);
    }
    [[x, 'rgba(0,0,0,.46)'], [hx, 'rgba(0,0,0,.55)']].forEach(([d, st]) => {
      d.beginPath(); d.moveTo(pts[0][0], pts[0][1]);
      pts.forEach(q => d.lineTo(q[0], q[1]));
      d.strokeStyle = st; d.lineWidth = .7 + rnd() * .9; d.stroke();
    });
  }

  /* moss, read out of the low ground of the height field */
  const hd = hx.getImageData(0, 0, W, H).data;
  const im = x.getImageData(0, 0, W, H), rm = rx.getImageData(0, 0, W, H);
  const amt = o.moss === undefined ? 1 : o.moss;
  for (let i = 0; i < W * H; i++) {
    const t = clamp((.5 - hd[i * 4] / 255) * 4.2, 0, 1) * amt;
    if (t <= 0) continue;
    const j = i * 4;
    im.data[j]     = lerp(im.data[j],     30, t * .75);
    im.data[j + 1] = lerp(im.data[j + 1], 44, t * .95);
    im.data[j + 2] = lerp(im.data[j + 2], 28, t * .85);
    /* moss is matte — through the same buffer, because a fillRect per pixel
       is a quarter of a million canvas calls and costs more than the rest of
       this generator put together */
    rm.data[j] = rm.data[j + 1] = rm.data[j + 2] = lerp(rm.data[j], 255, t * .5);
  }
  x.putImageData(im, 0, 0); rx.putImageData(rm, 0, 0);
  return { map: c, normal: normalFromHeight(h, o.relief || 3.2), rough: r };
}

/* ------------------------------------------- weathered vermilion · the gate
   Not a red cylinder. The gate is a painted timber that has stood out in the
   weather: the lacquer has crazed into a fine net, flaked off the edges back to
   the black wood underneath, and run in streaks where the rain came down it.
   So the wood is drawn first and the paint is laid over it at less than full
   coverage — the grain has to read *through* the red, which is what stops it
   looking like plastic. */
function texLacquer() {
  const W = 512, H = 512;
  const wood = texWood(131, { base: [34, 22, 17], boards: 0 });
  const c = cvs(W, H), x = c.getContext('2d');
  const h = cvs(W, H), hx = h.getContext('2d');
  const r = cvs(W, H), rx = r.getContext('2d');
  const rnd = mulberry32(5);
  x.drawImage(wood.map, 0, 0);
  hx.fillStyle = '#808080'; hx.fillRect(0, 0, W, H);
  rx.fillStyle = '#8c8c8c'; rx.fillRect(0, 0, W, H);   /* lacquer half-holds a sheen */

  /* the coat */
  x.globalAlpha = .80; x.fillStyle = '#7c1610'; x.fillRect(0, 0, W, H);
  x.globalAlpha = 1;
  /* pull the grain back through it */
  x.globalCompositeOperation = 'multiply'; x.globalAlpha = .42;
  x.drawImage(wood.map, 0, 0);
  x.globalAlpha = 1; x.globalCompositeOperation = 'source-over';
  /* uneven pigment: the brush left it thicker in places */
  x.globalCompositeOperation = 'overlay'; x.globalAlpha = .5;
  x.drawImage(fbmCanvas(W, H, 313, 5, 3, 1), 0, 0);
  x.globalAlpha = 1; x.globalCompositeOperation = 'source-over';

  /* craquelure — a wandering net of hairline cracks in the paint film */
  for (let i = 0; i < 190; i++) {
    let px = rnd() * W, py = rnd() * H, a = rnd() * TAU;
    x.strokeStyle = 'rgba(24,8,6,' + (.28 + rnd() * .4) + ')';
    hx.strokeStyle = 'rgba(0,0,0,.42)';
    x.lineWidth = hx.lineWidth = .5 + rnd() * .7;
    x.beginPath(); hx.beginPath(); x.moveTo(px, py); hx.moveTo(px, py);
    for (let k = 0; k < 5 + rnd() * 9; k++) {
      a += (rnd() - .5) * 1.5; px += Math.cos(a) * (5 + rnd() * 9); py += Math.sin(a) * (5 + rnd() * 9);
      x.lineTo(px, py); hx.lineTo(px, py);
    }
    x.stroke(); hx.stroke();
  }

  /* flaking: islands where the coat has lifted, showing the burnt wood, each
     with the pale shoulder of paint still standing at its edge */
  for (let i = 0; i < 40; i++) {
    const px = rnd() * W, py = rnd() * H, rad = 2 + rnd() * rnd() * 17;
    const pts = [];
    for (let k = 0; k < 9; k++) {
      const a = k / 9 * TAU, rr = rad * (.55 + rnd() * .75);
      pts.push([px + Math.cos(a) * rr, py + Math.sin(a) * rr]);
    }
    const path = d => {
      d.beginPath(); d.moveTo(pts[0][0], pts[0][1]);
      for (let k = 1; k < pts.length; k++) {
        const p = pts[k], q = pts[(k + 1) % pts.length];
        d.quadraticCurveTo(p[0], p[1], (p[0] + q[0]) / 2, (p[1] + q[1]) / 2);
      }
      d.closePath();
    };
    x.save(); path(x); x.clip(); x.drawImage(wood.map, 0, 0);
    x.fillStyle = 'rgba(0,0,0,.22)'; x.fillRect(0, 0, W, H); x.restore();
    path(x); x.strokeStyle = 'rgba(196,110,76,.30)'; x.lineWidth = 1.2; x.stroke();
    path(hx); hx.fillStyle = 'rgba(0,0,0,.34)'; hx.fill();
    hx.strokeStyle = 'rgba(255,255,255,.30)'; hx.lineWidth = 1.6; hx.stroke();
    path(rx); rx.fillStyle = 'rgba(240,240,240,.75)'; rx.fill();   /* bare wood, matte */
  }

  /* rain running down the column */
  for (let i = 0; i < 120; i++) {
    const sx = rnd() * W, w = .6 + rnd() * 2.6, top = rnd() * H, len = H * (.2 + rnd() * .6);
    const g = x.createLinearGradient(0, top, 0, top + len);
    g.addColorStop(0, 'rgba(0,0,0,0)');
    g.addColorStop(.3, rnd() > .5 ? 'rgba(12,4,4,.24)' : 'rgba(210,150,120,.05)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g; x.fillRect(sx, top, w, len);
  }
  rx.globalAlpha = .6; rx.globalCompositeOperation = 'multiply';
  rx.drawImage(fbmCanvas(W, H, 401, 4, 6, 1.2), 0, 0);
  rx.globalAlpha = 1; rx.globalCompositeOperation = 'source-over';
  return { map: c, normal: normalFromHeight(h, 2.2), rough: r };
}

/* the shoji screen the sun burns through */
function texShoji() {
  const W = 1024, H = 768, c = cvs(W, H), x = c.getContext('2d');
  x.clearRect(0, 0, W, H);
  x.fillStyle = 'rgba(228,222,206,.055)'; x.fillRect(0, 0, W, H);
  x.strokeStyle = 'rgba(10,8,7,.88)';
  const cols = 12, rows = 9;
  x.lineWidth = 5;
  for (let i = 1; i < cols; i++) { x.beginPath(); x.moveTo(W / cols * i, 0); x.lineTo(W / cols * i, H); x.stroke(); }
  for (let j = 1; j < rows; j++) { x.beginPath(); x.moveTo(0, H / rows * j); x.lineTo(W, H / rows * j); x.stroke(); }
  x.lineWidth = 13; x.strokeStyle = 'rgba(8,6,5,.95)';
  x.strokeRect(0, 0, W, H);
  x.beginPath(); x.moveTo(W / 2, 0); x.lineTo(W / 2, H); x.stroke();
  return c;
}

/* one maple leaf, white on transparent — tinted per instance */
function texLeaf() {
  const S = 128, c = cvs(S, S), x = c.getContext('2d');
  x.translate(S / 2, S * .92); x.scale(S / 2.2, -S / 2.2);
  x.beginPath();
  const lobes = 5, spread = 1.9;
  for (let i = 0; i < lobes; i++) {
    const a = -spread / 2 + spread * (i / (lobes - 1)) + Math.PI / 2;
    const len = i === 2 ? .96 : (i === 1 || i === 3 ? .82 : .60);
    const wob = .17;
    x.moveTo(0, .02);
    x.lineTo(Math.cos(a - wob) * len * .55, Math.sin(a - wob) * len * .55);
    x.lineTo(Math.cos(a) * len, Math.sin(a) * len);
    x.lineTo(Math.cos(a + wob) * len * .55, Math.sin(a + wob) * len * .55);
    x.closePath();
  }
  x.fillStyle = '#fff'; x.fill();
  x.lineWidth = .05; x.strokeStyle = '#fff'; x.stroke();
  x.setTransform(1, 0, 0, 1, 0, 0);
  x.globalCompositeOperation = 'destination-out';
  const rnd = mulberry32(3);
  for (let i = 0; i < 40; i++) { x.beginPath(); x.arc(rnd() * S, rnd() * S, rnd() * 3, 0, TAU); x.fill(); }
  return c;
}

/* the night sky itself: black at altitude, going to the fog colour at the
   horizon so the backdrop and the depth cue meet without a seam */
function texSky() {
  const W = 512, H = 512, c = cvs(W, H), x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, 'rgb(6,10,15)');    g.addColorStop(.34, 'rgb(13,22,31)');
  g.addColorStop(.66, 'rgb(17,26,34)'); g.addColorStop(.88, 'rgb(24,35,42)');
  g.addColorStop(1, 'rgb(14,22,28)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  /* cloud, and a low warm bloom off the valley behind the ridge */
  x.globalAlpha = .34; x.globalCompositeOperation = 'overlay';
  x.drawImage(fbmCanvas(W, H, 313, 5, 3, .9), 0, 0);
  x.globalAlpha = 1; x.globalCompositeOperation = 'source-over';
  const wg = x.createRadialGradient(W * .68, H * .95, 4, W * .68, H * .95, W * .44);
  wg.addColorStop(0, 'rgba(150,66,26,.30)'); wg.addColorStop(.5, 'rgba(96,44,22,.12)');
  wg.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = wg; x.fillRect(0, 0, W, H);
  /* a scatter of stars, faint enough to survive the bloom */
  const rnd = mulberry32(881);
  for (let i = 0; i < 420; i++) {
    const sx = rnd() * W, sy = rnd() * H * .78, r = .5 + rnd() * rnd() * 1.7;
    x.fillStyle = 'rgba(214,232,240,' + (.12 + rnd() * .42) * (1 - sy / H) + ')';
    x.beginPath(); x.arc(sx, sy, r, 0, TAU); x.fill();
  }
  return c;
}

/* the wooded ridge the valley closes with — black, ragged, mostly fog */
function texRidge() {
  const W = 2048, H = 512, c = cvs(W, H), x = c.getContext('2d');
  const n = noise2D(1207), rnd = mulberry32(1207);
  x.beginPath(); x.moveTo(0, H);
  for (let i = 0; i <= W; i += 4) {
    const t = i / W;
    const ridge = .46 + .30 * (fbm(n, t * 2.4, .5, 4, 2.1, .55) * .5 + .5)
                      + .16 * (fbm(n, t * 7.5, 3.1, 3, 2.2, .5) * .5 + .5);
    x.lineTo(i, H - ridge * H * .84);
  }
  x.lineTo(W, H); x.closePath();
  x.fillStyle = '#050809'; x.fill();
  /* conifer spikes along the crest so the silhouette reads as forest */
  x.fillStyle = '#050809';
  for (let i = 0; i < 460; i++) {
    const px = rnd() * W, t = px / W;
    const ridge = .46 + .30 * (fbm(n, t * 2.4, .5, 4, 2.1, .55) * .5 + .5)
                      + .16 * (fbm(n, t * 7.5, 3.1, 3, 2.2, .5) * .5 + .5);
    const by = H - ridge * H * .84, hh = 8 + rnd() * 30, ww = 3 + rnd() * 6;
    x.beginPath(); x.moveTo(px, by - hh); x.lineTo(px + ww, by + 4); x.lineTo(px - ww, by + 4);
    x.closePath(); x.fill();
  }
  return c;
}

/* glazed roof tile — half-round caps running down the slope, weathered */
function texRoof() {
  const W = 512, H = 512, c = cvs(W, H), x = c.getContext('2d');
  const h = cvs(W, H), hx = h.getContext('2d');
  x.fillStyle = '#151c20'; x.fillRect(0, 0, W, H);
  hx.fillStyle = '#606060'; hx.fillRect(0, 0, W, H);
  const ribs = 14, s = W / ribs;
  for (let i = 0; i < ribs; i++) {
    const g = x.createLinearGradient(i * s, 0, (i + 1) * s, 0);
    g.addColorStop(0, 'rgba(0,0,0,.62)');  g.addColorStop(.30, 'rgba(148,178,192,.13)');
    g.addColorStop(.66, 'rgba(84,110,124,.05)'); g.addColorStop(1, 'rgba(0,0,0,.62)');
    x.fillStyle = g; x.fillRect(i * s, 0, s, H);
    x.fillStyle = 'rgba(0,0,0,.50)'; x.fillRect(i * s - 3, 0, 6, H);
    x.fillStyle = 'rgba(168,196,208,.09)'; x.fillRect(i * s - 1.2, 0, 1.6, H);
    /* the half-round cap itself, as height: the valley between two tiles is
       the only reason a tiled roof reads as tiled at this distance */
    const hg = hx.createLinearGradient(i * s, 0, (i + 1) * s, 0);
    hg.addColorStop(0, '#2c2c2c'); hg.addColorStop(.5, '#eaeaea'); hg.addColorStop(1, '#2c2c2c');
    hx.fillStyle = hg; hx.fillRect(i * s, 0, s, H);
  }
  /* the courses running down the slope — each tile overlaps the one below */
  const rnd = mulberry32(211);
  for (let y = 0; y < H; y += H / 9) {
    x.fillStyle = 'rgba(0,0,0,.34)'; x.fillRect(0, y, W, 3.5);
    hx.fillStyle = 'rgba(0,0,0,.55)'; hx.fillRect(0, y, W, 3.5);
    hx.fillStyle = 'rgba(255,255,255,.28)'; hx.fillRect(0, y + 3.5, W, 2);
    for (let i = 0; i < 26; i++) {                     /* chipped, mossed edges */
      x.fillStyle = rnd() > .5 ? 'rgba(0,0,0,.30)' : 'rgba(96,116,92,.10)';
      x.fillRect(rnd() * W, y + 1, 2 + rnd() * 9, 2 + rnd() * 3);
    }
  }
  x.globalCompositeOperation = 'overlay'; x.globalAlpha = .46;
  x.drawImage(fbmCanvas(256, 256, 211, 5, 3, 1), 0, 0, W, H);
  x.globalAlpha = 1; x.globalCompositeOperation = 'source-over';
  hx.globalAlpha = .3; hx.drawImage(fbmCanvas(256, 256, 213, 4, 16, 1.2), 0, 0, W, H);
  hx.globalAlpha = 1;
  return { map: c, normal: normalFromHeight(h, 2.2) };
}

/* -------------------------------------------------------- the blood moon
   A real lunar disc, not a glow sprite and not a noise field. Three things do
   the work, in this order of importance:

     1 · the maria. The dark seas are the Moon's signature and they are not
         fbm — they are a handful of large, lobed, soft-edged basins in a
         layout everyone has known since childhood. Drawn at their real
         near-side positions and blurred, they are what makes the disc read as
         the Moon at a glance instead of as a planet.
     2 · the ray systems. Fine bright streaks thrown out of Tycho and
         Copernicus, straight across the maria. Nothing else on the surface
         looks like this, so nothing else identifies it as fast.
     3 · the craters, thickest in the bright highlands, each with a rim lit
         from the same side as the rest of the frame.

   The tint is measured off the reference plate, not invented: a blood moon
   sits at G/R ≈ B/R ≈ .48 — a rose red with green and blue level. Grading it
   as an orange (blue well under green) is what makes a CG moon read as a
   fireball, and that is what this was doing. The disc is authored here in
   near-neutral albedo and the colour is applied once, on the material. */
function texMoon() {
  const S = 512, c = cvs(S, S), x = c.getContext('2d');
  const R = S / 2 - 1, rnd = mulberry32(91);
  const px = (u, v) => [S / 2 + u * R, S / 2 + v * R];        /* disc coords */

  x.beginPath(); x.arc(S / 2, S / 2, R, 0, TAU); x.closePath();
  x.save(); x.clip();

  /* highland base. The reference disc is very slightly brighter at the limb,
     not darker — during totality the rim keeps its forward scatter — so this
     ramp opens outward instead of falling off. */
  const g = x.createRadialGradient(S * .46, S * .44, S * .05, S / 2, S / 2, R);
  g.addColorStop(0, 'rgb(150,150,150)'); g.addColorStop(.55, 'rgb(158,158,158)');
  g.addColorStop(.86, 'rgb(178,178,178)'); g.addColorStop(1, 'rgb(196,196,196)');
  x.fillStyle = g; x.fillRect(0, 0, S, S);

  /* fine highland mottle */
  x.globalCompositeOperation = 'overlay'; x.globalAlpha = .5;
  x.drawImage(fbmCanvas(256, 256, 517, 6, 4, 1.1), 0, 0, S, S);
  x.globalAlpha = 1; x.globalCompositeOperation = 'source-over';

  /* --- 1 · the maria, at their near-side places (u right, v down) --------- */
  const seas = [
    [-.52, -.06, .46, .80],   /* Oceanus Procellarum */
    [-.26, -.38, .31, .92],   /* Imbrium             */
    [ .13, -.31, .20, .88],   /* Serenitatis         */
    [ .30, -.08, .23, .84],   /* Tranquillitatis     */
    [ .45,  .12, .15, .78],   /* Fecunditatis        */
    [ .27,  .27, .12, .74],   /* Nectaris            */
    [ .57, -.30, .12, .95],   /* Crisium, the one that stands on its own */
    [-.27,  .30, .19, .70],   /* Nubium              */
    [-.47,  .25, .13, .72],   /* Humorum             */
  ];
  const sea = cvs(S, S), sx = sea.getContext('2d');
  seas.forEach(([u, v, rad, dk]) => {
    /* a basin is a cluster of lobes, never a circle */
    for (let i = 0; i < 22; i++) {
      const a = rnd() * TAU, off = rnd() * rad * .66;
      const [bx, by] = px(u + Math.cos(a) * off, v + Math.sin(a) * off * .8);
      const rr = rad * R * (.30 + rnd() * .46);
      const bg = sx.createRadialGradient(bx, by, rr * .2, bx, by, rr);
      bg.addColorStop(0, 'rgba(0,0,0,' + (dk * .14).toFixed(3) + ')');
      bg.addColorStop(1, 'rgba(0,0,0,0)');
      sx.fillStyle = bg; sx.beginPath(); sx.arc(bx, by, rr, 0, TAU); sx.fill();
    }
  });
  /* a sea is dark, not black: the real mare/highland contrast is about 4:3,
     and anything heavier turns the disc into a skull */
  x.save(); x.filter = 'blur(9px)'; x.globalAlpha = .90;
  x.drawImage(sea, 0, 0); x.restore();
  /* mottle riding on top of the basins so their floors are not flat washes */
  x.globalCompositeOperation = 'overlay'; x.globalAlpha = .18;
  x.drawImage(fbmCanvas(256, 256, 811, 4, 11, 1.2), 0, 0, S, S);
  x.globalAlpha = 1; x.globalCompositeOperation = 'source-over';

  /* --- 2 · ray systems, thrown clear across the disc ---------------------- */
  const ray = cvs(S, S), rx2 = ray.getContext('2d');
  [[-.10, .54, 150, 1], [-.28, -.07, 80, .6], [-.46, -.04, 60, .45]].forEach(([u, v, n, str]) => {
    const [ox, oy] = px(u, v);
    for (let i = 0; i < n; i++) {
      const a = rnd() * TAU, len = R * (.30 + rnd() * rnd() * 1.3);
      /* start clear of the crater — rays converging on a point read as a
         lens flare, and the real ones begin outside the ejecta blanket */
      const t0 = R * (.08 + rnd() * .06);
      const p0 = [ox + Math.cos(a) * t0, oy + Math.sin(a) * t0];
      const p1 = [ox + Math.cos(a) * len, oy + Math.sin(a) * len];
      const rg = rx2.createLinearGradient(p0[0], p0[1], p1[0], p1[1]);
      rg.addColorStop(0, 'rgba(255,255,255,' + (.085 * str).toFixed(3) + ')');
      rg.addColorStop(.4, 'rgba(255,255,255,' + (.055 * str).toFixed(3) + ')');
      rg.addColorStop(1, 'rgba(255,255,255,0)');
      rx2.strokeStyle = rg; rx2.lineWidth = .8 + rnd() * 2.4; rx2.lineCap = 'round';
      rx2.beginPath(); rx2.moveTo(p0[0], p0[1]);
      rx2.quadraticCurveTo(ox + Math.cos(a + .06) * len * .55, oy + Math.sin(a + .06) * len * .55,
                           p1[0], p1[1]);
      rx2.stroke();
    }
  });
  x.save(); x.filter = 'blur(2.4px)'; x.globalCompositeOperation = 'lighter';
  x.globalAlpha = .62; x.drawImage(ray, 0, 0); x.restore();

  /* --- 3 · the crater field ----------------------------------------------
     A crater is not a ring. Stroked with a gradient running across it, the
     same circle gives a rim lit on the sun side and thrown into shadow on the
     other — which is the read — where a radial ring gives a bubble. */
  const inSea = (u, v) => seas.some(([su, sv, rad]) =>
    Math.hypot(u - su, (v - sv) * 1.15) < rad * .82);
  for (let i = 0; i < 620; i++) {
    const a = rnd() * TAU, rr = Math.sqrt(rnd()) * .97;
    const u = Math.cos(a) * rr, v = Math.sin(a) * rr;
    /* the seas are young and nearly unmarked — that contrast is the point */
    if (inSea(u, v) && rnd() > .12) continue;
    const [cx2, cy] = px(u, v);
    const big = rnd() > .975;
    const r = (1 + rnd() * rnd() * rnd() * (big ? 34 : 11)) * (S / 512);
    const fade = .55 + .45 * Math.sqrt(Math.max(0, 1 - rr * rr));   /* limb falloff */
    /* foreshortened toward the limb, like anything on a sphere */
    const sq = Math.sqrt(Math.max(0, 1 - rr * rr)) * .72 + .28;
    x.save(); x.translate(cx2, cy); x.rotate(Math.atan2(v, u)); x.scale(sq, 1);
    x.rotate(-Math.atan2(v, u));                       /* keep the sun direction */
    const rimW = Math.max(.8, r * .26);
    const lg = x.createLinearGradient(-r, -r, r, r);   /* sun sits up-left */
    lg.addColorStop(0, 'rgba(255,255,255,' + (.34 * fade).toFixed(3) + ')');
    lg.addColorStop(.5, 'rgba(255,255,255,0)');
    lg.addColorStop(1, 'rgba(0,0,0,' + (.38 * fade).toFixed(3) + ')');
    x.strokeStyle = lg; x.lineWidth = rimW;
    x.beginPath(); x.arc(0, 0, Math.max(.6, r - rimW * .5), 0, TAU); x.stroke();
    if (r > 3) {                                        /* the floor it encloses */
      const fg = x.createLinearGradient(-r, -r, r, r);
      fg.addColorStop(0, 'rgba(0,0,0,' + (.21 * fade).toFixed(3) + ')');
      fg.addColorStop(1, 'rgba(255,255,255,' + (.07 * fade).toFixed(3) + ')');
      x.fillStyle = fg; x.beginPath(); x.arc(0, 0, r - rimW, 0, TAU); x.fill();
    }
    if (r > 13) {                                       /* central peak */
      x.fillStyle = 'rgba(255,255,255,' + (.14 * fade).toFixed(3) + ')';
      x.beginPath(); x.arc(-r * .04, -r * .04, r * .11, 0, TAU); x.fill();
    }
    x.restore();
  }

  /* surface tooth: genuinely fine, or it just adds another layer of cloud
     and the basins disappear under it */
  x.globalCompositeOperation = 'overlay'; x.globalAlpha = .13;
  x.drawImage(fbmCanvas(S, S, 977, 2, 210, 1.3), 0, 0, S, S);
  x.globalAlpha = 1; x.globalCompositeOperation = 'source-over';

  /* the terminator side: the disc is not lit dead-on */
  const sh = x.createRadialGradient(S * .40, S * .38, S * .18, S * .52, S * .56, S * .72);
  sh.addColorStop(0, 'rgba(0,0,0,0)'); sh.addColorStop(1, 'rgba(0,0,0,.30)');
  x.fillStyle = sh; x.fillRect(0, 0, S, S);
  x.restore();

  /* a one-pixel feather on the limb so it is a moon in air, not a cut disc */
  const fe = x.createRadialGradient(S / 2, S / 2, R - 2.5, S / 2, S / 2, R);
  fe.addColorStop(0, 'rgba(0,0,0,1)'); fe.addColorStop(1, 'rgba(0,0,0,0)');
  x.globalCompositeOperation = 'destination-in';
  x.fillStyle = fe; x.fillRect(0, 0, S, S);
  x.globalCompositeOperation = 'source-over';
  return c;
}

/* soft round falloff — haze, embers, glows */
function texGlow(inner, mid) {
  const S = 256, c = cvs(S, S), x = c.getContext('2d');
  const g = x.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  g.addColorStop(0, inner || 'rgba(255,255,255,1)');
  g.addColorStop(.28, mid || 'rgba(255,255,255,.36)');
  g.addColorStop(.62, 'rgba(255,255,255,.07)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, S, S);
  return c;
}

/* one wisp — a round mote, not a streak. The whole read is a hard bright
   point sitting in a soft halo, so the falloff is deliberately uneven: almost
   all of the light is spent inside the first eighth of the radius and the rest
   is a wide, very faint bloom. A smooth gradient across the full radius gives
   an evenly lit blob with no centre to it. */
function texWisp() {
  const S = 128, c = cvs(S, S), x = c.getContext('2d');
  const g = x.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  g.addColorStop(0,   'rgba(255,255,255,1)');      /* the point itself */
  g.addColorStop(.07, 'rgba(236,250,250,.92)');
  g.addColorStop(.16, 'rgba(190,230,238,.40)');
  g.addColorStop(.34, 'rgba(132,192,212,.13)');
  g.addColorStop(.62, 'rgba(88,146,172,.035)');
  g.addColorStop(1,   'rgba(70,120,142,0)');
  x.fillStyle = g; x.fillRect(0, 0, S, S);
  return c;
}

/* ---------------------------------------------- 3 · the foreground cut-outs
   These are the "transparent PNG" layers: painted at high resolution with
   a ragged alpha edge, then hung in front of the type as real geometry so
   they parallax and sway.                                                */
function texGrassCutout(seed, opt) {
  opt = opt || {};
  const W = opt.w || 2048, H = opt.h || 1024;
  const c = cvs(W, H), x = c.getContext('2d');
  const rnd = mulberry32(seed), n = noise2D(seed * 13 + 5);

  /* --- silhouette ------------------------------------------------- */
  const crest = opt.crest !== undefined ? opt.crest : .46;
  const peak  = opt.peak  !== undefined ? opt.peak  : .60;
  const wide  = opt.wide  !== undefined ? opt.wide  : .40;
  const prof = new Float32Array(W);
  for (let i = 0; i < W; i++) {
    const t = i / W;
    let m = Math.exp(-Math.pow((t - crest) / wide, 2) * 2.1);
    m += .46 * Math.exp(-Math.pow((t - crest - (opt.crest2 || .40)) / (wide * .62), 2) * 3.1);
    m += .30 * Math.exp(-Math.pow((t - crest + (opt.crest3 || .46)) / (wide * .70), 2) * 3.4);
    const g = fbm(n, t * 4.2, .5, 4, 2.05, .52) * .5 + .5;
    prof[i] = m * (.80 + .38 * g);
  }
  let pk = 0; for (let i = 0; i < W; i++) pk = Math.max(pk, prof[i]);
  for (let i = 0; i < W; i++) prof[i] *= H * peak / pk;
  const surf = i => H - prof[clamp(i | 0, 0, W - 1)];

  /* --- body ------------------------------------------------------- */
  x.beginPath(); x.moveTo(0, H);
  for (let i = 0; i < W; i += 3) x.lineTo(i, surf(i));
  x.lineTo(W, surf(W - 1)); x.lineTo(W, H); x.closePath();
  const bg = x.createLinearGradient(0, H - H * peak, 0, H);
  bg.addColorStop(0, '#1a2416'); bg.addColorStop(.38, '#0e150c'); bg.addColorStop(1, '#040604');
  x.fillStyle = bg; x.fill();
  x.save(); x.clip();
  x.globalCompositeOperation = 'overlay'; x.globalAlpha = .5;
  x.drawImage(fbmCanvas(1024, 512, seed + 3, 5, 3, 1), 0, 0, W, H);
  x.restore();
  x.globalAlpha = 1; x.globalCompositeOperation = 'source-over';

  /* --- blades ----------------------------------------------------- */
  const LIGHT = opt.light || [-.42, -.91];            /* light comes from up-left */
  const N = opt.blades || 15000;
  const blades = [];
  for (let k = 0; k < N; k++) {
    const i = (rnd() * W) | 0;
    const s = surf(i);
    /* bias the population toward the silhouette so the edge stays ragged */
    const depth = Math.pow(rnd(), 2.3);
    const by = s + depth * (H - s) + (rnd() - .5) * 6;
    if (by > H + 20) continue;
    blades.push({ i: i, by: by, depth: depth, r: rnd(), r2: rnd(), r3: rnd() });
  }
  blades.sort((a, b) => a.by - b.by);                 /* far (high) first */

  const LEN = (opt.len || 46) * (W / 2048);
  for (let k = 0; k < blades.length; k++) {
    const b = blades[k];
    const bx = b.i + (b.r - .5) * 5;
    const grow = 1 - .52 * b.depth;
    const len = LEN * (.36 + 1.05 * b.r2 * b.r2) * grow;
    let lean = (b.r3 - .5) * 1.5 + (opt.wind || .16);
    /* blades on the sunward flank lean into frame */
    const tipx = bx + lean * len * .95, tipy = b.by - len;
    const cx2 = bx + lean * len * .30, cy2 = b.by - len * .62;
    const w = (.9 + 1.9 * b.r) * grow * (W / 2048);

    /* shade: facing the key light, plus exposure to the sky at the crest */
    const dx = tipx - bx, dy = tipy - b.by, il = 1 / Math.hypot(dx, dy);
    const ndl = sat((-(dx * il) * LIGHT[0] - (dy * il) * LIGHT[1]) * .5 + .5);
    const open = Math.pow(1 - b.depth, 1.35);
    let l = .10 + .46 * open + .34 * ndl * open;
    const warm = sat(open * 1.25 - .42) * (opt.warm !== undefined ? opt.warm : 1);
    const r = (10 + 78 * l + 44 * warm) * (opt.tintR || 1);
    const g = (16 + 106 * l + 24 * warm) * (opt.tintG || 1);
    const bl = (12 + 80 * l + 16 * warm) * (opt.tintB || 1);
    x.fillStyle = hex(r, g, bl);
    x.beginPath();
    x.moveTo(bx - w, b.by);
    x.quadraticCurveTo(cx2 - w * .35, cy2, tipx, tipy);
    x.quadraticCurveTo(cx2 + w * .35, cy2, bx + w, b.by);
    x.closePath(); x.fill();
  }

  /* --- grade: red bounce from the sun, cold sky on the crest ------- */
  x.globalCompositeOperation = 'source-atop';
  const rb = x.createLinearGradient(opt.bounceFrom || W, 0, opt.bounceTo || 0, 0);
  rb.addColorStop(0, 'rgba(180,40,16,.24)'); rb.addColorStop(.55, 'rgba(140,32,14,.07)'); rb.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = rb; x.fillRect(0, 0, W, H);
  const sk = x.createLinearGradient(0, H - H * peak * 1.05, 0, H);
  sk.addColorStop(0, 'rgba(146,182,180,.13)'); sk.addColorStop(.5, 'rgba(0,0,0,0)'); sk.addColorStop(1, 'rgba(0,0,0,.70)');
  x.fillStyle = sk; x.fillRect(0, 0, W, H);
  x.globalCompositeOperation = 'source-over';
  return c;
}

/* wet foreground boulders */
function texRockCutout(seed, opt) {
  opt = opt || {};
  const W = opt.w || 1536, H = opt.h || 1024;
  const c = cvs(W, H), x = c.getContext('2d');
  const rnd = mulberry32(seed), n = noise2D(seed * 7 + 11);
  const blobs = opt.blobs || [[.30, .70, .40, .34], [.66, .82, .38, .28], [.46, .96, .52, .34]];

  blobs.forEach((b, bi) => {
    const cx2 = b[0] * W, cy = b[1] * H, rx = b[2] * W * .5, ry = b[3] * H * .8;
    x.beginPath();
    for (let a = 0; a <= 128; a++) {
      const t = a / 128 * TAU;
      const k = 1 + .17 * fbm(n, Math.cos(t) * 1.7 + bi * 9, Math.sin(t) * 1.7, 4, 2.1, .55);
      const px = cx2 + Math.cos(t) * rx * k, py = cy + Math.sin(t) * ry * k;
      a === 0 ? x.moveTo(px, py) : x.lineTo(px, py);
    }
    x.closePath();
    const g = x.createLinearGradient(cx2 - rx, cy - ry, cx2 + rx * .4, cy + ry);
    const s = 1 - bi * .16;
    g.addColorStop(0, hex(30 * s, 39 * s, 40 * s));
    g.addColorStop(.42, hex(14 * s, 19 * s, 20 * s));
    g.addColorStop(1, hex(6, 9, 9));
    x.fillStyle = g; x.fill();
    x.save(); x.clip();
    x.globalCompositeOperation = 'overlay'; x.globalAlpha = .62;
    x.drawImage(fbmCanvas(768, 512, seed + bi * 31, 6, 4, 1.1), 0, 0, W, H);
    x.globalAlpha = 1; x.globalCompositeOperation = 'source-over';
    /* facets */
    for (let f = 0; f < 26; f++) {
      x.beginPath();
      const fx = cx2 + (rnd() - .5) * rx * 2, fy = cy + (rnd() - .5) * ry * 1.6;
      x.moveTo(fx, fy);
      for (let v = 0; v < 3; v++) x.lineTo(fx + (rnd() - .5) * rx * .8, fy + (rnd() - .5) * ry * .6);
      x.closePath();
      x.fillStyle = rnd() > .5 ? 'rgba(255,255,255,.030)' : 'rgba(0,0,0,.14)';
      x.fill();
    }
    /* wet highlight along the upper rim */
    x.lineWidth = 3 + rnd() * 4; x.strokeStyle = 'rgba(178,206,206,.20)';
    x.beginPath();
    for (let a = 0; a <= 60; a++) {
      const t = Math.PI + a / 60 * Math.PI * .78;
      const k = 1 + .17 * fbm(n, Math.cos(t) * 1.7 + bi * 9, Math.sin(t) * 1.7, 4, 2.1, .55);
      const px = cx2 + Math.cos(t) * rx * k * .97, py = cy + Math.sin(t) * ry * k * .97;
      a === 0 ? x.moveTo(px, py) : x.lineTo(px, py);
    }
    x.stroke();
    x.restore();
  });

  /* a little moss where they meet the ground */
  x.globalCompositeOperation = 'source-atop';
  for (let i = 0; i < 2600; i++) {
    const px = rnd() * W, py = H - Math.pow(rnd(), 1.7) * H * .5;
    x.fillStyle = 'rgba(' + (40 + rnd() * 40 | 0) + ',' + (60 + rnd() * 46 | 0) + ',34,' + (.05 + rnd() * .22) + ')';
    x.fillRect(px, py, 1.6 + rnd() * 2.4, 3 + rnd() * 9);
  }
  const rb = x.createLinearGradient(W, 0, 0, 0);
  rb.addColorStop(0, 'rgba(190,48,22,.16)'); rb.addColorStop(.7, 'rgba(0,0,0,0)');
  x.fillStyle = rb; x.fillRect(0, 0, W, H);
  x.globalCompositeOperation = 'source-over';
  return c;
}

/* a maple bough leaning into the top of frame */
function texBranchCutout(seed) {
  const W = 1536, H = 1024;
  const c = cvs(W, H), x = c.getContext('2d');
  const rnd = mulberry32(seed);
  const leaves = [];

  function bough(px, py, ang, len, wid, depth) {
    const steps = 7;
    let cx2 = px, cy = py, a = ang;
    x.beginPath(); x.moveTo(cx2, cy);
    for (let s = 0; s < steps; s++) {
      a += (rnd() - .5) * .30;
      cx2 += Math.cos(a) * len / steps; cy += Math.sin(a) * len / steps;
      x.lineTo(cx2, cy);
    }
    x.lineCap = 'round'; x.lineWidth = wid;
    x.strokeStyle = 'rgba(' + (26 + depth * 5 | 0) + ',' + (22 + depth * 4 | 0) + ',' + (22 + depth * 4 | 0) + ',1)';
    x.stroke();
    if (depth < 4 && len > 34) {
      const k = depth === 0 ? 3 : 2;
      for (let i = 0; i < k; i++) bough(cx2, cy, a + (rnd() - .5) * 1.25, len * (.58 + rnd() * .18), wid * .58, depth + 1);
    } else {
      for (let i = 0; i < 9; i++)
        leaves.push([cx2 + (rnd() - .5) * 78, cy + (rnd() - .5) * 78, rnd() * TAU, 12 + rnd() * 20, rnd()]);
    }
  }
  bough(W * 1.02, H * .06, Math.PI * .78, 420, 26, 0);
  bough(W * .86, -H * .02, Math.PI * .62, 330, 18, 1);

  const leafImg = texLeaf();
  const tint = cvs(128, 128), tx = tint.getContext('2d');
  leaves.forEach(l => {
    tx.clearRect(0, 0, 128, 128);
    tx.drawImage(leafImg, 0, 0);
    tx.globalCompositeOperation = 'source-in';
    const v = l[4];
    tx.fillStyle = hex(96 + v * 96, 14 + v * 22, 16 + v * 18);
    tx.fillRect(0, 0, 128, 128);
    tx.globalCompositeOperation = 'source-over';
    x.save(); x.translate(l[0], l[1]); x.rotate(l[2]);
    x.globalAlpha = .78 + v * .22;
    x.drawImage(tint, -l[3], -l[3], l[3] * 2, l[3] * 2);
    x.restore();
  });
  x.globalAlpha = 1;
  return c;
}
/* ================================================================= 4 · gl */
const canvas = document.getElementById('gl');
/* The layout viewport, not the window. On mobile \`innerWidth\` follows the
   initial containing block, which can run wider than the visual viewport —
   measured at 437 against a 390 screen — while \`clientWidth\` tracks what CSS
   actually lays out against. Sizing the canvas from \`innerWidth\` therefore
   renders a frame wider than the phone shows and drops the right edge of the
   scene off-screen, which is how the wordmark lost its last letter. Every
   size, aspect and pointer mapping below goes through these. */
const vpW = () => document.documentElement.clientWidth  || innerWidth;
const vpH = () => document.documentElement.clientHeight || innerHeight;
let renderer, scene, camera, maxAniso = 1;
const HI = qs('q', COARSE ? 'low' : 'high');
const LOW = HI === 'low';
const WANT_POST    = qs('post', '1') !== '0';
const WANT_SHADOW  = qs('shadow', LOW ? '0' : '1') !== '0';
const DPR_CAP      = qn('dpr', LOW ? 1.4 : 1.8);
/* the renderer trades resolution for frame rate on its own — the scene is
   fill-bound (five big alpha-blended veils plus a bloom chain), so pixels
   are the only knob worth turning on unknown hardware */
const PERF = { scale: 1, acc: 0, n: 0, locked: qs('adapt', '1') === '0' };

function initGL() {
  if (qs('nogl', '0') !== '0' || !window.THREE) throw new Error('webgl disabled');
  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: !WANT_POST, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, DPR_CAP));
  /* updateStyle stays on: the stylesheet sizes the canvas at 100% of the
     initial containing block, which is the very box that runs wide on a
     phone. Writing the CSS size in pixels pins the element to the layout
     viewport the buffer was built for. */
  renderer.setSize(vpW(), vpH(), true);
  renderer.outputEncoding = WANT_POST ? THREE.LinearEncoding : THREE.sRGBEncoding;
  renderer.toneMapping = WANT_POST ? THREE.NoToneMapping : THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.setClearColor(0x05070a, 1);
  if (WANT_SHADOW) { renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap; }
  maxAniso = renderer.capabilities.getMaxAnisotropy();
  scene = new THREE.Scene();
    /* Density puts the hall back in the air; the colour is what decides how
     dark it is back there. At this depth most of the building's pixel is
     fog rather than its own material — darkening the timber and the tiles
     moved the hall by 0.18 of a luminance unit, the fog colour moves it
     properly. And it reaches by distance, so the foreground does not
     follow it down. */
  scene.fog = new THREE.FogExp2(0x050a0e, 0.0168);
  scene.background = new THREE.Color(0x060a0d);
  camera = new THREE.PerspectiveCamera(36, vpW() / vpH(), .35, 220);
  scene.add(camera);
}

function tx(canvasEl, o) {
  o = o || {};
  const t = new THREE.CanvasTexture(canvasEl);
  t.wrapS = t.wrapT = o.wrap || THREE.ClampToEdgeWrapping;
  if (o.repeat) t.repeat.set(o.repeat[0], o.repeat[1]);
  t.anisotropy = Math.min(o.aniso || 8, maxAniso);
  if (o.srgb !== false) t.encoding = THREE.sRGBEncoding;
  t.needsUpdate = true;
  return t;
}
/* HDR-bright emitters: values above 1 survive because the scene is rendered
   into a half-float buffer, and they are what the bloom feeds on */
const hdr = (r, g, b) => new THREE.Color().setRGB(r, g, b);

/* A {map, normal, rough} set hung on a standard material at one tiling. The
   colour is a multiplier on an already-dark albedo, so it is how a shared
   board or block library is re-tinted per use rather than regenerated.
   roughness stays at 1: the map carries the variation, and anything less
   scales the whole surface toward a polish it should not have. */
function surface(t, rep, o) {
  o = o || {};
  const wrap = THREE.RepeatWrapping, aniso = o.aniso || 8;
  const m = new THREE.MeshStandardMaterial({
    map: tx(t.map, { wrap: wrap, repeat: rep, aniso: aniso }),
    normalMap: tx(t.normal, { wrap: wrap, repeat: rep, srgb: false, aniso: aniso }),
    normalScale: new THREE.Vector2(o.normal === undefined ? .8 : o.normal,
                                   o.normal === undefined ? .8 : o.normal),
    color: o.color === undefined ? 0xffffff : o.color,
    roughness: o.roughness === undefined ? 1 : o.roughness,
    metalness: o.metalness === undefined ? .02 : o.metalness
  });
  if (t.rough) m.roughnessMap = tx(t.rough, { wrap: wrap, repeat: rep, srgb: false });
  return m;
}
/* The board and block libraries are generated once and shared. buildLantern
   alone is called six times, and a granite per lantern is six pointless
   canvases and six normal-map passes at load. */
const LIB = {};
const lib = (k, f) => (LIB[k] || (LIB[k] = f()));
/* the walls are boarded; a column, a sill and a rail are each one stick of
   wood and must not carry a joint down the middle of them */
const wallWood = () => lib('wallWood', () => texWood(3, { boards: 7 }));
const postWood = () => lib('postWood', () => texWood(29, { boards: 0 }));

/* sweep a polygonal cross-section along a path — kasagi, shimaki, beams */
function sweepPoly(points, profile) {
  const segs = points.length, np = profile.length;
  const pos = [], nor = [], uv = [], idx = [];
  const T = new THREE.Vector3(), N = new THREE.Vector3(), B = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  for (let i = 0; i < segs; i++) {
    const p = points[i], a = points[Math.max(0, i - 1)], b = points[Math.min(segs - 1, i + 1)];
    T.subVectors(b, a).normalize();
    B.crossVectors(T, up).normalize();
    N.crossVectors(B, T).normalize();
    for (let j = 0; j < np; j++) {
      const u = profile[j][0], v = profile[j][1], l = Math.hypot(u, v) || 1;
      pos.push(p.x + B.x * u + N.x * v, p.y + B.y * u + N.y * v, p.z + B.z * u + N.z * v);
      nor.push(B.x * u / l + N.x * v / l, B.y * u / l + N.y * v / l, B.z * u / l + N.z * v / l);
      uv.push(j / np, i / (segs - 1));
    }
  }
  for (let i = 0; i < segs - 1; i++) for (let j = 0; j < np; j++) {
    const j2 = (j + 1) % np, a = i * np + j, b = i * np + j2, c = (i + 1) * np + j2, d = (i + 1) * np + j;
    idx.push(a, b, c, a, c, d);
  }
  /* caps */
  [0, segs - 1].forEach((ring, k) => {
    const base = pos.length / 3, p = points[ring];
    pos.push(p.x, p.y, p.z); nor.push(0, 0, k ? 1 : -1); uv.push(.5, .5);
    for (let j = 0; j < np; j++) {
      const a = ring * np + j, b = ring * np + (j + 1) % np;
      k ? idx.push(base, a, b) : idx.push(base, b, a);
    }
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  return g;
}
/* A temple roof. The height is a concave function of the Chebyshev distance
   from the ridge out to the eave, and the last fifth of that run flares back
   upward — that lift at the corners is the whole silhouette. Emitted solid:
   a top shell, an underside shell, and a fascia stitching the two rims. */
function roofGeo(A, B, R, Hr, thick, flare) {
  const NX = 52, NZ = 34, FL = flare === undefined ? .30 : flare, e = 1e-3;
  /* The lift has to be weighted toward the corners. Applied evenly along the
     eave it produces a raised rim the whole way round and the roof reads as a
     saucer; concentrated where the two runs meet, it reads as a temple. */
  const hAt = (x, z) => {
    const cx = Math.min(1, Math.abs(x) / A), cz = Math.min(1, Math.abs(z) / B);
    const tx = Math.max(0, (Math.abs(x) - R) / Math.max(A - R, 1e-4));
    const t = Math.min(1, Math.max(tx, cz));
    return Hr * Math.pow(1 - t, 1.45)
         + FL * Hr * smooth(.72, 1, t) * (.52 + .68 * Math.min(cx, cz));
  };
  const pos = [], nor = [], uv = [], idx = [];
  const N = new THREE.Vector3();
  const VPS = (NX + 1) * (NZ + 1);
  for (let k = 0; k < 2; k++) {
    for (let j = 0; j <= NZ; j++) for (let i = 0; i <= NX; i++) {
      const x = -A + 2 * A * i / NX, z = -B + 2 * B * j / NZ;
      N.set(-(hAt(x + e, z) - hAt(x - e, z)) / (2 * e), 1,
            -(hAt(x, z + e) - hAt(x, z - e)) / (2 * e)).normalize();
      if (k) N.negate();
      pos.push(x, hAt(x, z) - (k ? thick : 0), z);
      nor.push(N.x, N.y, N.z);
      /* one tile every seven metres: at half a metre the ribs land inside a
         pixel at this range and the mip chain averages them to flat grey */
      uv.push(x * .14, z * .14);
    }
    for (let j = 0; j < NZ; j++) for (let i = 0; i < NX; i++) {
      const a = k * VPS + j * (NX + 1) + i, b = a + 1, c = a + NX + 2, d = a + NX + 1;
      k ? idx.push(a, c, b, a, d, c) : idx.push(a, b, c, a, c, d);
    }
  }
  /* fascia: its own ring of vertices so the eave edge keeps a sideways normal */
  const per = [];
  for (let i = 0; i <= NX; i++) per.push([i, 0]);
  for (let j = 1; j <= NZ; j++) per.push([NX, j]);
  for (let i = NX - 1; i >= 0; i--) per.push([i, NZ]);
  for (let j = NZ - 1; j >= 1; j--) per.push([0, j]);
  const base = pos.length / 3;
  per.forEach(p => {
    const x = -A + 2 * A * p[0] / NX, z = -B + 2 * B * p[1] / NZ;
    const nx = p[0] === 0 ? -1 : (p[0] === NX ? 1 : 0);
    const nz = p[1] === 0 ? -1 : (p[1] === NZ ? 1 : 0);
    const l = Math.hypot(nx, nz) || 1;
    const y = hAt(x, z);
    pos.push(x, y, z, x, y - thick, z);
    nor.push(nx / l, 0, nz / l, nx / l, 0, nz / l);
    uv.push(0, 0, 0, 1);
  });
  for (let i = 0; i < per.length; i++) {
    const a = base + i * 2, b = a + 1;
    const c = base + ((i + 1) % per.length) * 2, d = c + 1;
    idx.push(a, b, d, a, d, c);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  return g;
}

function mergeGeos(list) {
  let vN = 0, iN = 0;
  list.forEach(g => { vN += g.attributes.position.count; iN += g.index.count; });
  const pos = new Float32Array(vN * 3), nor = new Float32Array(vN * 3), uv = new Float32Array(vN * 2);
  const idx = vN > 65535 ? new Uint32Array(iN) : new Uint16Array(iN);
  let vo = 0, io = 0;
  list.forEach(g => {
    pos.set(g.attributes.position.array, vo * 3);
    nor.set(g.attributes.normal.array, vo * 3);
    uv.set(g.attributes.uv.array, vo * 2);
    const gi = g.index.array;
    for (let i = 0; i < gi.length; i++) idx[io + i] = gi[i] + vo;
    io += gi.length; vo += g.attributes.position.count;
    g.dispose();
  });
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  out.setIndex(new THREE.BufferAttribute(idx, 1));
  return out;
}

/* ========================================================== 5 · the world */
const WORLD = {};                 /* named handles the page can animate */
const swayers = [];               /* things the wind touches */

/* ---- the site plan, in metres ----------------------------------------
   Everything downstream — camera waypoints, lantern rows, the moon — is
   pinned to these, so the approach can be re-proportioned in one place. */
const PODIUM    = 7.0;            /* how far the hall stands above the court */
const STEPS     = 40;
const STAIR_Z0  = -11.0;          /* the bottom riser                        */
const STAIR_RUN = .55;            /* → the flight tops out at z = −33        */
const STAIR_W   = 8.4;
const TEMPLE_Z  = -44;            /* the hall's centre line                   */

function buildShell() {
  const wallT = texWall();
  const wallMap = tx(wallT.map, { wrap: THREE.RepeatWrapping, repeat: [4, 1.4] });
  const wallNrm = tx(wallT.normal, { wrap: THREE.RepeatWrapping, repeat: [4, 1.4], srgb: false });
  const wallMat = new THREE.MeshStandardMaterial({
    map: wallMap, normalMap: wallNrm, normalScale: new THREE.Vector2(.85, .85),
    roughness: .78, metalness: .05, color: 0x525c60
  });
  /* The court used to be a roofless box. It is now an open mountain approach:
     nothing encloses the frame but the night, the ridge and the fog. */

  /* the sky, hung far enough back that the whole frustum sits inside it */
  const sky = new THREE.Mesh(new THREE.PlaneGeometry(360, 190),
    new THREE.MeshBasicMaterial({ color: hdr(.60, .70, .80), map: tx(texSky()),
      depthWrite: false, fog: false, toneMapped: false }));
  sky.position.set(0, 62, -108); sky.renderOrder = 0; scene.add(sky);
  WORLD.sky = sky;

  /* the wooded ridge that closes the valley — three-quarters eaten by fog,
     which is the only reason the ground plane can just stop out there */
  /* z, centre y, width, height, x — kept low: a crest that climbs past the
     hall's eaves stops reading as distance and starts reading as a cut-out */
  const ridgeMap = tx(texRidge(), { wrap: THREE.RepeatWrapping, repeat: [1.7, 1] });
  [[-90, 13, 300, 26, 0], [-63, 9.5, 210, 19, 16]].forEach((r, i) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(r[2], r[3]),
      /* fog off: at a hundred metres it would lift a black silhouette to 80%
         of the fog colour, and the treeline came back as a *pale* band */
      new THREE.MeshBasicMaterial({ map: i ? tx(texRidge()) : ridgeMap, transparent: true,
        color: i ? 0x0a1015 : 0x06090d, depthWrite: false, fog: false }));
    m.position.set(r[4], r[1], r[0]); m.renderOrder = 1; scene.add(m);
  });

  /* floor + podium */
  const fT = texFloor();
  const floorMat = new THREE.MeshStandardMaterial({
    map: tx(fT.map, { wrap: THREE.RepeatWrapping, repeat: [7, 7], aniso: 16 }),
    normalMap: tx(fT.normal, { wrap: THREE.RepeatWrapping, repeat: [7, 7], srgb: false, aniso: 16 }),
    roughnessMap: tx(fT.rough, { wrap: THREE.RepeatWrapping, repeat: [3.4, 3.4], srgb: false }),
    normalScale: new THREE.Vector2(.30, .30),
    /* The court used to carry a planar mirror and this was tuned to feed it —
       near-polished, and metal enough to hold a reflection. With the mirror
       gone those numbers only made the paving read as sheet metal, so it goes
       back to being wet stone: rough, barely metallic, and lit rather than
       reflecting. */
    roughness: .74, metalness: .06, color: 0x69757a
  });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(150, 150), floorMat);
  floor.rotation.x = -Math.PI / 2; floor.position.set(0, 0, -18); floor.receiveShadow = true;
  scene.add(floor);
  WORLD.floor = floor; WORLD.floorMat = floorMat;

  /* The podium and the flight use their own material: the mirror shader below
     is only ever attached to the water-level floor, and sharing it would make
     the reflection buffer sample itself. It is also deliberately matte — with
     the floor's metalness the forty risers strobed as the camera drifted. */
  const platMat = new THREE.MeshStandardMaterial({
    map: tx(fT.map, { wrap: THREE.RepeatWrapping, repeat: [3, 1.2], aniso: 16 }),
    normalMap: tx(fT.normal, { wrap: THREE.RepeatWrapping, repeat: [3, 1.2], srgb: false, aniso: 16 }),
    normalScale: new THREE.Vector2(.18, .18), roughness: .93, metalness: .02, color: 0x58636a
  });
  /* the podium the hall stands on */
  const plat = new THREE.Mesh(new THREE.BoxGeometry(42, PODIUM, 24), platMat);
  plat.position.set(0, PODIUM / 2, -45); plat.receiveShadow = true; plat.castShadow = true;
  scene.add(plat);
  const cope = new THREE.Mesh(new THREE.BoxGeometry(43, .34, 25), wallMat);
  cope.position.set(0, PODIUM - .17, -45); cope.receiveShadow = true; scene.add(cope);

  /* The flight. Twenty-six risers merged into one buffer — as separate meshes
     it is twenty-six draw calls for a shape nobody ever gets close to. */
  const treads = [], cheeks = [];
  for (let i = 0; i < STEPS; i++) {
    const y = (i + 1) * (PODIUM / STEPS), z = STAIR_Z0 - (i + .5) * STAIR_RUN;
    const w = STAIR_W + (STEPS - i) * .052;               /* splayed at the foot */
    treads.push(new THREE.BoxGeometry(w, PODIUM / STEPS + .04, STAIR_RUN + .04)
      .translate(0, y - (PODIUM / STEPS) / 2, z));
    [-1, 1].forEach(s => cheeks.push(new THREE.BoxGeometry(.9, 1.5, STAIR_RUN + .06)
      .translate(s * (w / 2 + .45), y - .3, z)));
  }
  const stair = new THREE.Mesh(mergeGeos(treads), platMat);
  stair.receiveShadow = true; stair.castShadow = true; scene.add(stair);
  const rail = new THREE.Mesh(mergeGeos(cheeks), wallMat);
  rail.receiveShadow = true; rail.castShadow = true; scene.add(rail);
}

/* ------------------------------------------------------- the worship hall
   A two-storey Sanmon on the podium at the head of the flight: charred
   timber, two flaring tiled roofs, a bracket band under each eave, and a
   ground floor lit from inside so the lattice reads as the only warm thing
   for two hundred metres.                                                 */
function buildTemple() {
  const g = new THREE.Group();
  /* One board library, sampled at two scales: the hall's flanks want the grain
     long and lying down, the columns want it running their own length. */
  const timber = surface(wallWood(), [4, 1.6], { color: 0x565150, normal: 1.5 });
  const post   = surface(postWood(), [1.1, 1.0], { color: 0x8a746d, normal: 1.05, metalness: .03 });
  const gold   = new THREE.MeshStandardMaterial({ color: 0x8f6f2e, roughness: .38, metalness: .78 });
  const rf = lib('roof', () => texRoof());
  /* Nearly a silhouette: the roof carries almost no colour of its own, and
     what reads on it is relief rather than tone — so the normal goes up as
     the albedo comes down. */
  const tileMat = surface(rf, [1, 1], { color: 0x2b343a, roughness: .74, metalness: .10, normal: 1.4 });
  /* the paper the lamps burn through — the only thing in the hall that is
     allowed to be bright, and even then only just above white */
  const paper = new THREE.MeshBasicMaterial({ color: hdr(1.06, .48, .18), fog: true, toneMapped: false });
  const grid  = new THREE.MeshBasicMaterial({ map: tx(texShoji()), transparent: true,
    depthWrite: false, fog: true });
  WORLD.paper = paper;

  /* one lit bay: a glowing sheet with a lattice hung just in front of it */
  function bay(w, h, x, y, z) {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), paper);
    p.position.set(x, y, z); g.add(p);
    const s = new THREE.Mesh(new THREE.PlaneGeometry(w, h), grid);
    s.position.set(x, y, z + .06); s.renderOrder = 3; g.add(s);
  }
  /* The block-and-arm band that carries every eave. The pieces are merged, so
     they carry absolute coordinates — TEMPLE_Z has to go in here, not on the
     mesh, or the whole band ends up hanging in the air by the camera. */
  function brackets(halfW, halfD, y, step) {
    const parts = [];
    for (let x = -halfW; x <= halfW + 1e-3; x += step) {
      [-halfD, halfD].forEach(dz => {
        parts.push(new THREE.BoxGeometry(.34, .46, .34).translate(x, y, TEMPLE_Z + dz));
        parts.push(new THREE.BoxGeometry(.92, .17, .24).translate(x, y + .30, TEMPLE_Z + dz));
      });
    }
    for (let dz = -halfD + step; dz < halfD - 1e-3; dz += step) {
      [-halfW, halfW].forEach(x => {
        parts.push(new THREE.BoxGeometry(.34, .46, .34).translate(x, y, TEMPLE_Z + dz));
        parts.push(new THREE.BoxGeometry(.24, .17, .92).translate(x, y + .30, TEMPLE_Z + dz));
      });
    }
    const m = new THREE.Mesh(mergeGeos(parts), post);
    m.castShadow = false; g.add(m);
  }

  const F = PODIUM;                                   /* the hall's floor level */

  /* ---- ground storey: six bays of lit lattice between charred columns --- */
  const core = new THREE.Mesh(new THREE.BoxGeometry(13.6, 5.0, 8.2), timber);
  core.position.set(0, F + 2.5, TEMPLE_Z); core.castShadow = true; g.add(core);
  for (let i = 0; i < 5; i++) {
    const x = -5.6 + i * 2.8;
    bay(1.55, 2.5, x, F + 2.6, TEMPLE_Z + 4.16);
  }
  for (let i = 0; i < 6; i++) {
    const c = new THREE.Mesh(new THREE.CylinderGeometry(.30, .34, 5.0, 14), post);
    c.position.set(-7.0 + i * 2.8, F + 2.5, TEMPLE_Z + 4.24); c.castShadow = true; g.add(c);
  }
  const sill = new THREE.Mesh(new THREE.BoxGeometry(14.6, .40, 8.9), post);
  sill.position.set(0, F + .20, TEMPLE_Z); g.add(sill);
  brackets(7.0, 4.4, F + 5.15, 1.40);

  /* ---- the pent roof over the ground storey ---------------------------- */
  const lower = new THREE.Mesh(roofGeo(9.6, 6.4, 3.2, 2.9, .40, .26), tileMat);
  lower.position.set(0, F + 5.6, TEMPLE_Z); lower.castShadow = true; g.add(lower);

  /* ---- upper storey: railed gallery, dark boards, the temple's name ----- */
  const up = new THREE.Mesh(new THREE.BoxGeometry(10.0, 3.4, 6.0), timber);
  up.position.set(0, F + 9.4, TEMPLE_Z); up.castShadow = true; g.add(up);
  const deck = new THREE.Mesh(new THREE.BoxGeometry(12.4, .26, 8.4), post);
  deck.position.set(0, F + 7.72, TEMPLE_Z); g.add(deck);
  [.10, .94].forEach(dy => [4.2, -4.2].forEach(dz => {
    const r = new THREE.Mesh(new THREE.BoxGeometry(12.4, .17, .17), post);
    r.position.set(0, F + 7.85 + dy, TEMPLE_Z + dz); g.add(r);
  }));
  for (let i = 0; i <= 16; i++) {
    const b = new THREE.Mesh(new THREE.BoxGeometry(.10, 1.05, .10), post);
    b.position.set(-6.2 + i * .775, F + 8.42, TEMPLE_Z + 4.2); g.add(b);
  }
  for (let i = 0; i < 4; i++)
    bay(1.0, 1.35, -4.5 + i * 3.0, F + 9.5, TEMPLE_Z + 3.06);
  /* the plaque */
  const plq = new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.30, .16), gold);
  plq.position.set(0, F + 9.7, TEMPLE_Z + 3.12); g.add(plq);
  const plqIn = new THREE.Mesh(new THREE.BoxGeometry(1.52, .98, .18), timber);
  plqIn.position.set(0, F + 9.7, TEMPLE_Z + 3.16); g.add(plqIn);
  brackets(5.2, 3.3, F + 11.2, 1.30);

  /* ---- the main roof: the silhouette the whole page hangs on ----------- */
  const upper = new THREE.Mesh(roofGeo(10.8, 7.2, 3.6, 5.2, .48, .26), tileMat);
  upper.position.set(0, F + 11.7, TEMPLE_Z); upper.castShadow = true; g.add(upper);
  const ridge = new THREE.Mesh(new THREE.BoxGeometry(7.6, .60, 1.05), tileMat);
  ridge.position.set(0, F + 17.10, TEMPLE_Z); g.add(ridge);
  [-1, 1].forEach(s => {
    const oni = new THREE.Mesh(new THREE.ConeGeometry(.46, 1.15, 4), tileMat);
    oni.position.set(s * 3.9, F + 17.6, TEMPLE_Z); oni.rotation.y = Math.PI / 4; g.add(oni);
  });
  WORLD.templeTop = F + 18.2;

  /* ---- the two flanking wings, lit the same way ------------------------ */
  [-1, 1].forEach(s => {
    const w = new THREE.Mesh(new THREE.BoxGeometry(7.6, 3.4, 5.2), timber);
    w.position.set(s * 10.6, F + 1.7, TEMPLE_Z + 1.4); w.castShadow = true; g.add(w);
    for (let i = 0; i < 3; i++)
      bay(1.3, 1.6, s * 10.6 + (i - 1) * 2.4, F + 1.8, TEMPLE_Z + 4.06);
    const r = new THREE.Mesh(roofGeo(5.0, 4.0, 1.4, 1.9, .32, .26), tileMat);
    r.position.set(s * 10.6, F + 3.4, TEMPLE_Z + 1.4); r.castShadow = true; g.add(r);
  });

  scene.add(g); WORLD.temple = g;

  /* the glow the hall pushes out over its own steps */
  const spill = new THREE.Mesh(new THREE.PlaneGeometry(30, 16),
    new THREE.MeshBasicMaterial({ map: tx(texGlow('rgba(255,150,66,.80)', 'rgba(240,96,26,.24)')),
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false, opacity: .30 }));
  spill.position.set(0, F + 3.0, TEMPLE_Z + 5.6); spill.renderOrder = 2;
  scene.add(spill); WORLD.hallHalo = spill;

  /* the band of mist that separates the hall from the trees behind it — the
     one thing that stops the whole background reading as a single flat cut-out */
  const mist = new THREE.Mesh(new THREE.PlaneGeometry(64, 20),
    new THREE.MeshBasicMaterial({ map: tx(texGlow('rgba(150,178,190,.62)', 'rgba(104,138,154,.20)')),
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false, opacity: .17 }));
  mist.position.set(0, F - 1.4, TEMPLE_Z + 10); mist.renderOrder = 2; scene.add(mist);
}

/* --------------------------------------------------- the vermilion moon
   Hung well behind the hall so the roof crosses its lower left — near
   enough to the ridge to sit in the mist, far enough that it never moves
   against the buildings when the rig drifts.                             */
const MOON = { x: 17.9, y: 31.9, z: -72, r: 8.6 };
function buildMoon() {
  const disc = new THREE.Mesh(new THREE.PlaneGeometry(MOON.r * 2, MOON.r * 2),
    /* The whole blood-moon grade lives here, on a near-neutral albedo. The
       plate measures G/R ≈ B/R ≈ .48, but that is a *display* ratio: the map
       is decoded out of sRGB before this multiplies it, so the tint has to be
       written in linear, where the same look is ≈ .21. Reading the ratio
       straight off the reference is what left the moon a pale pink. */
    new THREE.MeshBasicMaterial({ map: tx(texMoon()), color: hdr(3.6, .64, .61),
      transparent: true, depthWrite: false, fog: false, toneMapped: false }));
  disc.position.set(MOON.x, MOON.y, MOON.z); disc.renderOrder = 1;
  scene.add(disc); WORLD.moon = disc;

  /* the air around it — a wide, weak corona that the bloom picks up */
  const halo = new THREE.Mesh(new THREE.PlaneGeometry(MOON.r * 6.4, MOON.r * 6.4),
    new THREE.MeshBasicMaterial({ map: tx(texGlow('rgba(255,124,112,.90)', 'rgba(206,52,48,.26)')),
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false, opacity: .44 }));
  halo.position.set(MOON.x, MOON.y, MOON.z - .3); halo.renderOrder = 0;
  scene.add(halo); WORLD.moonHalo = halo;
}
/* On a tall frame the rig steps back and its horizontal reach narrows, which
   would slide the moon off the right edge — draw it in by the same amount. */
function placeMoon() {
  if (!WORLD.moon) return;
  const x = MOON.x * (1 - .40 * aspectFix());
  WORLD.moon.position.x = x;
  WORLD.moonHalo.position.x = x;
}

function buildTorii() {
  /* the weathering costs the gate a lot of its chroma, so the tint puts it
     back: red lifted well past green and blue rather than a flat brightening,
     or the vermilion comes out of the grade as brick */
  const lac = surface(lib('lacquer', () => texLacquer()), [2, 2],
    { color: hdr(1.72, 1.02, .94), roughness: .92, metalness: .05, normal: .75 });
  const gold = new THREE.MeshStandardMaterial({ color: 0x7a5d2a, roughness: .50, metalness: .60 });
  const g = new THREE.Group();
  const BASE = .78, H = 8.2, SPAN = 3.55;

  [-1, 1].forEach(s => {
    const col = new THREE.Mesh(new THREE.CylinderGeometry(.30, .38, H, 26), lac);
    col.position.set(s * SPAN, BASE + H / 2, 0); col.castShadow = true; g.add(col);
    const foot = new THREE.Mesh(new THREE.CylinderGeometry(.46, .50, .52, 26), gold);
    foot.position.set(s * SPAN, BASE + .26, 0); foot.castShadow = true; g.add(foot);
    const collar = new THREE.Mesh(new THREE.CylinderGeometry(.345, .345, .26, 26), gold);
    collar.position.set(s * SPAN, BASE + H - 1.42, 0); g.add(collar);
    /* the ornate bracket where the beams cross the column */
    const br = new THREE.Mesh(new THREE.BoxGeometry(.86, .30, .86), gold);
    br.position.set(s * SPAN, BASE + H - .72, 0); g.add(br);
    const br2 = new THREE.Mesh(new THREE.BoxGeometry(.60, .52, .60), gold);
    br2.position.set(s * SPAN, BASE + H - .34, 0); g.add(br2);
    [-1, 1].forEach(d => {
      const wing = new THREE.Mesh(new THREE.BoxGeometry(.24, .70, .18), gold);
      wing.position.set(s * SPAN + d * .40, BASE + H - .62, .30); g.add(wing);
      const wing2 = wing.clone(); wing2.position.z = -.30; g.add(wing2);
    });
  });

  /* nuki — the straight beam that pierces the columns */
  const nuki = new THREE.Mesh(new THREE.BoxGeometry(9.4, .52, .46), lac);
  nuki.position.set(0, BASE + H - 2.15, 0); nuki.castShadow = true; g.add(nuki);

  /* gakuzuka — the little strut at the centre */
  const gak = new THREE.Mesh(new THREE.BoxGeometry(.46, 1.22, .40), lac);
  gak.position.set(0, BASE + H + .10, 0); g.add(gak);
  const gakG = new THREE.Mesh(new THREE.BoxGeometry(.60, .18, .50), gold);
  gakG.position.set(0, BASE + H + .68, 0); g.add(gakG);

  /* shimaki + kasagi — the two crowning beams, swept upward at the ends */
  function beamPath(half, rise, power) {
    const p = [];
    for (let i = 0; i <= 26; i++) {
      const u = i / 26 * 2 - 1;
      p.push(new THREE.Vector3(u * half, Math.pow(Math.abs(u), power) * rise, 0));
    }
    return p;
  }
  const shimaki = new THREE.Mesh(sweepPoly(beamPath(5.05, .40, 2.6),
    [[-.30, -.19], [.30, -.19], [.32, .06], [.28, .21], [-.28, .21], [-.32, .06]]), lac);
  shimaki.position.set(0, BASE + H - .52, 0); shimaki.castShadow = true; g.add(shimaki);

  const kasagi = new THREE.Mesh(sweepPoly(beamPath(5.85, .62, 2.4),
    [[-.42, -.24], [.42, -.24], [.46, .04], [.30, .28], [-.30, .28], [-.46, .04]]), lac);
  kasagi.position.set(0, BASE + H + .96, 0); kasagi.castShadow = true; g.add(kasagi);
  /* a black lacquer cap along the top of the kasagi */
  const cap = new THREE.Mesh(sweepPoly(beamPath(5.95, .62, 2.4),
    [[-.48, .22], [.48, .22], [.48, .34], [-.48, .34]]),
    new THREE.MeshStandardMaterial({ color: 0x120c0c, roughness: .42, metalness: .14 }));
  cap.position.set(0, BASE + H + .96, 0); g.add(cap);

  /* the gate stands at the foot of the flight, not over the court — small
     enough that the hall keeps the top of the frame to itself */
  /* The lowest thing on the gate is the foot of each column, and it starts
     at BASE — so anchoring the group at y=0 left the whole torii hanging
     BASE*scale above the court. Drop it by exactly that and the feet land. */
  const GS = .72;
  g.position.set(0, -BASE * GS, -8.6); g.scale.setScalar(GS);
  scene.add(g); WORLD.torii = g;
}

function buildLantern(x, z, s, y) {
  const stone = lib('lanternStone', () => surface(lib('granite', () => texStone(17)), [1.5, 1.5],
    { color: 0x9aa5a5, metalness: 0, normal: 1.45 }));
  const dark  = lib('lanternDark', () => surface(postWood(), [.9, .9],
    { color: 0xd8c2b6, metalness: .1, normal: .7 }));
  const g = new THREE.Group();
  const base = new THREE.Mesh(new THREE.CylinderGeometry(.44, .52, .26, 20), stone);
  base.position.y = .13; base.castShadow = true; g.add(base);
  const post = new THREE.Mesh(new THREE.CylinderGeometry(.15, .18, 1.02, 16), stone);
  post.position.y = .77; post.castShadow = true; g.add(post);
  const shelf = new THREE.Mesh(new THREE.CylinderGeometry(.42, .34, .13, 20), stone);
  shelf.position.y = 1.34; shelf.castShadow = true; g.add(shelf);

  const box = new THREE.Mesh(new THREE.BoxGeometry(.50, .50, .50), dark);
  box.position.y = 1.66; box.castShadow = true; g.add(box);
  const paneMat = new THREE.MeshBasicMaterial({ color: hdr(2.3, .30, .085), fog: false, toneMapped: false });
  [[0, 0, .256, 0], [0, 0, -.256, Math.PI], [.256, 0, 0, Math.PI / 2], [-.256, 0, 0, -Math.PI / 2]].forEach(p => {
    const pane = new THREE.Mesh(new THREE.PlaneGeometry(.34, .34), paneMat);
    pane.position.set(p[0], 1.66, p[2]); pane.rotation.y = p[3]; g.add(pane);
  });
  WORLD.lanternPane = WORLD.lanternPane || paneMat;

  const roof = new THREE.Mesh(new THREE.CylinderGeometry(.10, .62, .34, 4, 1), stone);
  roof.position.y = 2.06; roof.rotation.y = Math.PI / 4; roof.castShadow = true; g.add(roof);
  const brim = new THREE.Mesh(new THREE.CylinderGeometry(.66, .70, .07, 4, 1), stone);
  brim.position.y = 1.93; brim.rotation.y = Math.PI / 4; g.add(brim);
  const knob = new THREE.Mesh(new THREE.SphereGeometry(.09, 12, 10), stone);
  knob.position.y = 2.28; g.add(knob);
  const tip = new THREE.Mesh(new THREE.ConeGeometry(.055, .16, 10), stone);
  tip.position.y = 2.4; g.add(tip);

  const glow = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 3.4),
    new THREE.MeshBasicMaterial({ map: tx(texGlow('rgba(255,120,60,.9)', 'rgba(255,60,24,.28)')),
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false, opacity: .5 }));
  glow.position.y = 1.66; glow.renderOrder = 2; g.add(glow);
  glow.userData.billboard = true;

  const lt = new THREE.PointLight(0xff5a24, 2.6, 9, 2);
  lt.position.set(0, 1.66, 0); g.add(lt);
  WORLD.lanternLights = WORLD.lanternLights || [];
  WORLD.lanternLights.push(lt); WORLD.lanternGlows = WORLD.lanternGlows || []; WORLD.lanternGlows.push(glow);

  g.position.set(x, y || 0, z); g.scale.setScalar(s || 1);
  scene.add(g);
  return g;
}

function buildMaple(seed, x, z, scale) {
  const rnd = mulberry32(seed);
  const parts = [], tips = [];
  const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), UP = new THREE.Vector3(0, 1, 0);
  const dir = new THREE.Vector3(), pos = new THREE.Vector3();

  function seg(from, to, r0, r1) {
    dir.subVectors(to, from);
    const len = dir.length(); dir.normalize();
    const geo = new THREE.CylinderGeometry(r1, r0, len, 6, 1, true);
    Q.setFromUnitVectors(UP, dir);
    pos.addVectors(from, to).multiplyScalar(.5);
    M.compose(pos, Q, new THREE.Vector3(1, 1, 1));
    geo.applyMatrix4(M);
    parts.push(geo);
  }
  function branch(from, dirV, len, rad, depth) {
    const to = from.clone().addScaledVector(dirV, len);
    to.y += len * .10;
    seg(from, to, rad, rad * .68);
    if (depth >= 4 || len < .34) { tips.push(to.clone()); return; }
    const n = depth < 2 ? 3 : 2;
    for (let i = 0; i < n; i++) {
      const d = dirV.clone();
      d.x += (rnd() - .5) * 1.25; d.z += (rnd() - .5) * 1.25; d.y += .30 + rnd() * .5;
      d.normalize();
      branch(to, d, len * (.62 + rnd() * .16), rad * .66, depth + 1);
    }
  }
  const root = new THREE.Vector3(0, 0, 0);
  seg(root, new THREE.Vector3(0, 1.5, 0), .22, .16);
  for (let i = 0; i < 4; i++) {
    const a = i / 4 * TAU + rnd();
    branch(new THREE.Vector3(0, 1.5, 0), new THREE.Vector3(Math.cos(a) * .8, .8, Math.sin(a) * .8).normalize(), 1.45, .155, 0);
  }
  const trunk = new THREE.Mesh(mergeGeos(parts),
    new THREE.MeshStandardMaterial({ color: 0x171413, roughness: .94, metalness: .0, side: THREE.DoubleSide }));
  trunk.castShadow = true;

  const leafGeo = new THREE.PlaneGeometry(.36, .36);
  const leafMat = new THREE.MeshStandardMaterial({
    map: tx(texLeaf()), color: 0x2b0406, alphaTest: .42, side: THREE.DoubleSide,
    roughness: .86, metalness: 0, emissive: 0x080000, emissiveIntensity: .12
  });
  const per = LOW ? 5 : 9;
  const inst = new THREE.InstancedMesh(leafGeo, leafMat, tips.length * per);
  const m4 = new THREE.Matrix4(), e = new THREE.Euler(), q2 = new THREE.Quaternion(), sc = new THREE.Vector3();
  let k = 0;
  tips.forEach(t => {
    for (let i = 0; i < per; i++) {
      const p = new THREE.Vector3(t.x + (rnd() - .5) * .95, t.y + (rnd() - .5) * .8, t.z + (rnd() - .5) * .95);
      e.set(rnd() * TAU, rnd() * TAU, rnd() * TAU);
      q2.setFromEuler(e);
      const s = .7 + rnd() * .75; sc.set(s, s, s);
      m4.compose(p, q2, sc);
      inst.setMatrixAt(k++, m4);
    }
  });
  inst.instanceMatrix.needsUpdate = true;
  inst.castShadow = false; inst.frustumCulled = false;

  const g = new THREE.Group();
  g.add(trunk); g.add(inst);
  g.position.set(x, 0, z); g.scale.setScalar(scale || 1);
  g.rotation.y = rnd() * TAU;
  scene.add(g);
  /* leaves breathe in the wind */
  leafMat.onBeforeCompile = sh => {
    sh.uniforms.uT = WORLD.uT;
    sh.vertexShader = 'uniform float uT;\\n' + sh.vertexShader.replace('#include <begin_vertex>',
      '#include <begin_vertex>\\n' +
      'vec3 wp = (instanceMatrix * vec4(0.0,0.0,0.0,1.0)).xyz;\\n' +
      'float ph = wp.x*1.7 + wp.z*1.3 + wp.y*.7;\\n' +
      'transformed.x += sin(uT*1.35 + ph)*0.055;\\n' +
      'transformed.z += cos(uT*1.05 + ph*1.3)*0.045;\\n');
  };
  return g;
}

function buildRocks() {
  const mat = new THREE.MeshStandardMaterial({ color: 0x141a1c, roughness: .46, metalness: .10 });
  const rnd = mulberry32(404), n = noise2D(88);
  const spots = [[-6.2, -5.4, .95], [-7.4, -2.1, .7], [6.6, -7.2, .8], [8.0, -4.0, 1.05],
                 [-9.0, -8.4, 1.15], [9.6, -9.2, .9], [3.4, -7.8, .55], [-3.2, -8.6, .6]];
  spots.forEach((s, i) => {
    const geo = new THREE.IcosahedronGeometry(s[2], 2);
    const p = geo.attributes.position;
    for (let v = 0; v < p.count; v++) {
      const vx = p.getX(v), vy = p.getY(v), vz = p.getZ(v);
      const d = 1 + .34 * fbm(n, vx * 1.6 + i * 7, vz * 1.6 + vy, 3, 2.2, .5);
      p.setXYZ(v, vx * d, vy * d * .68, vz * d);
    }
    geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, mat);
    m.position.set(s[0], s[2] * .30, s[1]);
    m.rotation.set(rnd(), rnd() * TAU, rnd() * .4);
    m.castShadow = true; m.receiveShadow = true;
    scene.add(m);
  });
}

/* ------------------------------- the transparent-PNG foreground layers */
function cutoutMaterial(canvasEl, sway) {
  const mat = new THREE.MeshBasicMaterial({
    map: tx(canvasEl, { aniso: 16 }), transparent: true, depthWrite: true,
    alphaTest: .012, side: THREE.DoubleSide, fog: true, color: 0xffffff
  });
  mat.onBeforeCompile = sh => {
    sh.uniforms.uT = WORLD.uT;
    sh.uniforms.uSway = { value: sway || .07 };
    sh.vertexShader = 'uniform float uT;\\nuniform float uSway;\\n' + sh.vertexShader.replace(
      '#include <begin_vertex>',
      '#include <begin_vertex>\\n' +
      'float h = uv.y;\\n' +
      'float ph = position.x*0.30 + float(gl_InstanceID)*0.0;\\n' +
      'transformed.x += sin(uT*0.85 + ph)*uSway*h*h;\\n' +
      'transformed.y += cos(uT*0.62 + ph*1.7)*uSway*0.35*h*h;\\n');
    /* These plates are drawn to the edge of their own canvas — the grass runs
       straight off the left and the bottom — so every sheet ends on a hard
       straight line wherever its plane stops. Feathering the alpha at the
       edges lets each one dissolve into the scene instead of being cut out of
       it. Sides get the widest margin because that is where a bank of grass
       is read as ending; the crest needs none, the blades already taper. */
    sh.fragmentShader = sh.fragmentShader.replace('#include <alphatest_fragment>',
      'float feX = smoothstep(0.0, 0.11, vUv.x) * (1.0 - smoothstep(0.89, 1.0, vUv.x));\\n' +
      'float feY = smoothstep(0.0, 0.07, vUv.y);\\n' +
      'diffuseColor.a *= feX * feY;\\n' +
      '#include <alphatest_fragment>');
  };
  return mat;
}

function buildForeground() {
  /* the plane widths are sized against the frustum at their own depth: a
     26-unit sheet two metres from the lens only shows its middle tenth */
  const layers = [
    /* name        canvas                                                                     x     y     z     w     h   sway */
    ['grassFar',  texGrassCutout(101, { crest: .30, peak: .46, wide: .42, blades: 11000, len: 34, warm: .70, crest2: .46, crest3: .40 }),
                  -3.4,  2.85, -0.4, 24, 12, .040],
    ['rockLeft',  texRockCutout(404, { blobs: [[.24, .78, .48, .38], [.58, .94, .46, .30], [.84, 1.06, .42, .28]] }),
                  -7.2,  2.55,  1.8, 17, 11.3, .010],
    ['grassMid',  texGrassCutout(202, { crest: .60, peak: .55, wide: .40, blades: 13000, len: 40, warm: .95, crest2: -.44, crest3: .34 }),
                   3.9,  2.86,  3.6, 15,  7.5, .062],
    ['grassNear', texGrassCutout(303, { crest: .42, peak: .62, wide: .48, blades: 16000, len: 50, warm: .85, crest2: .42, crest3: .44 }),
                  -1.9,  2.92,  5.6, 12,  6, .092],
    ['bough',     texBranchCutout(505), 4.6, 2.95, 6.4, 13, 8.7, .045],
    ['rockNear',  texRockCutout(606, { blobs: [[.18, .86, .54, .44], [.54, 1.02, .50, .36], [.86, .92, .40, .32]] }),
                  -6.6,  1.70,  6.0, 9, 6, .008]
  ];
  WORLD.fg = [];
  layers.forEach(L => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(L[5], L[6], 12, 12), cutoutMaterial(L[1], L[7]));
    m.position.set(L[2], L[3], L[4]);
    m.renderOrder = 20 + WORLD.fg.length;
    m.name = L[0];
    m.frustumCulled = false;
    scene.add(m);
    WORLD.fg.push(m);
  });
}

/* --------------------------------------------------- the giant wordmark */
const WORD_Z = 3.0;
function buildWordmark() {
  /* The word is set to the frame width, so a short word is a *taller* word.
     Four letters at the old tracking put a 400-pixel cap height across the
     scene; the letters are spaced out instead, which keeps the type edge to
     edge while the caps come back down to the height of the headline block. */
  const SZ = 320, TRACK = .40, PAD = 26;
  const m = cvs(4, 4).getContext('2d');
  m.font = '600 ' + SZ + 'px Wordmark, sans-serif';
  m.textBaseline = 'alphabetic'; m.textAlign = 'left';
  const word = 'KAGE', gl = [];
  let pen = 0, ascMax = 0, descMax = 0, xMin = 1e9, xMax = -1e9;
  for (const ch of word) {
    const t = m.measureText(ch);
    const g = { ch: ch, adv: t.width, asc: t.actualBoundingBoxAscent, desc: t.actualBoundingBoxDescent,
                l: t.actualBoundingBoxLeft, r: t.actualBoundingBoxRight, pen: pen };
    gl.push(g);
    ascMax = Math.max(ascMax, g.asc); descMax = Math.max(descMax, g.desc);
    xMin = Math.min(xMin, pen - g.l); xMax = Math.max(xMax, pen + g.r);
    pen += t.width + TRACK * SZ;
  }
  const group = new THREE.Group();
  WORD.glyphs = [];
  gl.forEach((g, i) => {
    const cw = Math.ceil(g.l + g.r) + PAD * 2, chh = Math.ceil(g.asc + g.desc) + PAD * 2;
    const c = cvs(cw, chh), x = c.getContext('2d');
    x.font = '600 ' + SZ + 'px Wordmark, sans-serif';
    x.textBaseline = 'alphabetic'; x.textAlign = 'left';
    /* the vertical wash is baked per glyph so the whole word shares one ramp */
    const gy0 = PAD + g.asc - ascMax, gy1 = PAD + g.asc + descMax * .4;
    const grad = x.createLinearGradient(0, gy0, 0, gy1);
    grad.addColorStop(0, 'rgb(226,236,229)');
    grad.addColorStop(.52, 'rgb(198,214,203)');
    grad.addColorStop(1, 'rgb(150,170,157)');
    x.fillStyle = grad;
    x.fillText(g.ch, PAD + g.l, PAD + g.asc);

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(cw, chh),
      new THREE.MeshBasicMaterial({ map: tx(c, { aniso: 16 }), transparent: true,
        depthWrite: false, side: THREE.DoubleSide, fog: true, opacity: 1 }));
    mesh.position.set(g.pen + (g.r - g.l) / 2, (g.asc - g.desc) / 2 + (PAD - PAD) , 0);
    mesh.position.y = (g.asc - g.desc) / 2;
    mesh.renderOrder = 12;
    mesh.frustumCulled = false;
    mesh.userData.baseY = mesh.position.y;
    group.add(mesh);
    WORD.glyphs.push(mesh);
  });
  group.position.z = WORD_Z;
  scene.add(group);
  WORD.group = group;
  WORD.ink = { xMin: xMin, xMax: xMax, cx: (xMin + xMax) / 2, w: xMax - xMin, asc: ascMax };
}
const WORD = { glyphs: [], group: null, ink: null, reveal: 0 };

/* --------------------------------------------------------- atmospherics */
function buildAtmosphere() {
  /* drifting haze slabs */
  const hazeTex = tx(texGlow('rgba(160,205,210,.55)', 'rgba(110,165,175,.18)'));
  WORLD.haze = [];
  const rnd = mulberry32(66);
  for (let i = 0; i < (LOW ? 4 : 6); i++) {
    const s = 12 + rnd() * 15;
    const h = new THREE.Mesh(new THREE.PlaneGeometry(s, s * .55),
      new THREE.MeshBasicMaterial({ map: hazeTex, transparent: true, blending: THREE.AdditiveBlending,
        depthWrite: false, fog: false, opacity: .05 + rnd() * .07 }));
    h.position.set((rnd() - .5) * 44, 1.5 + rnd() * 10, -38 + rnd() * 40);
    h.renderOrder = 4;
    h.userData = { sp: .06 + rnd() * .12, ph: rnd() * TAU, x0: h.position.x };
    scene.add(h); WORLD.haze.push(h);
  }

  /* embers around the lantern and the disc */
  const N = LOW ? 220 : 460;
  const pos = new Float32Array(N * 3), seed = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    pos[i * 3] = (rnd() - .5) * 30; pos[i * 3 + 1] = rnd() * 11; pos[i * 3 + 2] = -26 + rnd() * 36;
    seed[i] = rnd();
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  const emb = new THREE.Points(g, new THREE.ShaderMaterial({
    uniforms: { uT: WORLD.uT, uTex: { value: tx(texGlow('rgba(255,190,140,1)', 'rgba(255,120,60,.35)')) },
      uSize: { value: vpH() * .5 } },
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    vertexShader:
      'attribute float aSeed; uniform float uT; uniform float uSize; varying float vA;\\n' +
      'void main(){ vec3 p=position;\\n' +
      ' p.y = mod(p.y + uT*(0.14+aSeed*0.28), 11.5);\\n' +
      ' p.x += sin(uT*0.36 + aSeed*22.0)*0.85;\\n' +
      ' p.z += cos(uT*0.29 + aSeed*17.0)*0.7;\\n' +
      ' vec4 mv = modelViewMatrix * vec4(p,1.0);\\n' +
      ' vA = (0.25+aSeed*0.75) * smoothstep(11.5,7.0,p.y) * smoothstep(0.0,1.4,p.y);\\n' +
      ' gl_PointSize = uSize*(0.010+aSeed*0.020)/max(-mv.z,0.6);\\n' +
      ' gl_Position = projectionMatrix * mv; }',
    fragmentShader:
      'uniform sampler2D uTex; varying float vA;\\n' +
      'void main(){ vec4 t=texture2D(uTex, gl_PointCoord);\\n' +
      ' gl_FragColor = vec4(t.rgb*vec3(1.6,0.78,0.42), t.a*vA*0.75); }'
  }));
  emb.frustumCulled = false; emb.renderOrder = 5;
  scene.add(emb); WORLD.embers = emb;

  /* rain in the slot of open sky */
  if (!LOW) {
    const D = 900, rp = new Float32Array(D * 2 * 3), rt = new Float32Array(D * 2), rs = new Float32Array(D * 2), rl = new Float32Array(D * 2);
    for (let i = 0; i < D; i++) {
      const x = (rnd() - .5) * 40, z = -30 + rnd() * 34, y = rnd() * 17, sp = 7 + rnd() * 9, ln = .30 + rnd() * .55;
      for (let k = 0; k < 2; k++) {
        const o = (i * 2 + k) * 3;
        rp[o] = x; rp[o + 1] = y; rp[o + 2] = z;
        rt[i * 2 + k] = k; rs[i * 2 + k] = sp; rl[i * 2 + k] = ln;
      }
    }
    const rg = new THREE.BufferGeometry();
    rg.setAttribute('position', new THREE.BufferAttribute(rp, 3));
    rg.setAttribute('aTop', new THREE.BufferAttribute(rt, 1));
    rg.setAttribute('aSpeed', new THREE.BufferAttribute(rs, 1));
    rg.setAttribute('aLen', new THREE.BufferAttribute(rl, 1));
    const rain = new THREE.LineSegments(rg, new THREE.ShaderMaterial({
      uniforms: { uT: WORLD.uT },
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
      vertexShader:
        'attribute float aTop; attribute float aSpeed; attribute float aLen; uniform float uT; varying float vA;\\n' +
        'void main(){ vec3 p=position;\\n' +
        ' float y = mod(p.y - uT*aSpeed, 17.0);\\n' +
        ' p.y = y + aTop*aLen;\\n' +
        ' vA = smoothstep(0.0,3.0,y)*smoothstep(17.0,11.0,y);\\n' +
        ' gl_Position = projectionMatrix * modelViewMatrix * vec4(p,1.0); }',
      fragmentShader: 'varying float vA;\\nvoid main(){ gl_FragColor = vec4(0.55,0.74,0.82, vA*0.024); }'
    }));
    rain.frustumCulled = false; rain.renderOrder = 6;
    scene.add(rain); WORLD.rain = rain;
  }

  /* ripples on the standing water */
  const ringC = cvs(256, 256), rx2 = ringC.getContext('2d');
  const rg2 = rx2.createRadialGradient(128, 128, 84, 128, 128, 128);
  rg2.addColorStop(0, 'rgba(255,255,255,0)'); rg2.addColorStop(.62, 'rgba(255,255,255,.55)');
  rg2.addColorStop(.86, 'rgba(255,255,255,.22)'); rg2.addColorStop(1, 'rgba(255,255,255,0)');
  rx2.fillStyle = rg2; rx2.fillRect(0, 0, 256, 256);
  const ringTex = tx(ringC);
  WORLD.ripples = [];
  for (let i = 0; i < (LOW ? 6 : 13); i++) {
    const r = new THREE.Mesh(new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({ map: ringTex, transparent: true, blending: THREE.AdditiveBlending,
        depthWrite: false, fog: true, opacity: 0 }));
    r.rotation.x = -Math.PI / 2; r.renderOrder = 7;
    r.userData = { t: rnd() * 4, x: (rnd() - .5) * 22, z: -8 + rnd() * 22, sp: .5 + rnd() * .5 };
    scene.add(r); WORLD.ripples.push(r);
  }
}

/* ====================================================== 6b · the leaf fall
   The maples shed all the way through the chapter. The fall is anchored to
   the rig rather than to the court: every leaf keeps a real world position so
   its drift is honest, but any leaf that ends up further than LEAF_R from the
   camera in x or z is wrapped back across it. That way the count is what one
   screenful needs — a hundred and seventy — instead of what filling the whole
   valley would cost, and the frame is never empty however far the walk goes.

   A falling leaf is read by its tumble, not by its path. Each one turns on
   two axes at its own rate, so it presents its face, thins to an edge and
   comes back — which is the whole reason these are instanced quads and not
   points, since a point sprite cannot turn away from the camera. */
/* LEAF_AHEAD/LEAF_SPREAD is the disc leaves are recycled into, hung down the
   camera's own sight line; LEAF_R is only the far backstop for a rig that has
   walked out from under its weather. */
const LEAF_AHEAD = 11, LEAF_SPREAD = 12, LEAF_R = 30;
function buildLeafFall() {
  const N = LOW ? 110 : 260;
  const mat = new THREE.MeshStandardMaterial({
    map: tx(texLeaf()), alphaTest: .42, side: THREE.DoubleSide,
    color: 0x40080a, roughness: .84, metalness: 0,
    /* green and blue driven to nothing: the composite tone-maps at the end,
       and an emissive red with any green in it comes back out of that pink */
    emissive: 0x780200, emissiveIntensity: .72
  });
  const inst = new THREE.InstancedMesh(new THREE.PlaneGeometry(.40, .40), mat, N);
  inst.frustumCulled = false; inst.renderOrder = 5;
  inst.castShadow = inst.receiveShadow = false;
  const rnd = mulberry32(404), list = [];
  for (let i = 0; i < N; i++) list.push({
    x: (rnd() - .5) * 2 * LEAF_R, z: (rnd() - .5) * 2 * LEAF_R, y: rnd() * 26,
    fall: .5 + rnd() * .9,
    sway: .45 + rnd() * 1.5, swayPh: rnd() * TAU, swayAmp: .30 + rnd() * .95,
    spin: (rnd() - .5) * 2.6, roll: rnd() * TAU, rollSp: .5 + rnd() * 2.0,
    tilt: rnd() * TAU, s: .55 + rnd() * .9
  });
  scene.add(inst);
  WORLD.leaves = { mesh: inst, list: list };
}
const LEAF_M = new THREE.Matrix4(), LEAF_Q = new THREE.Quaternion();
const LEAF_E = new THREE.Euler(), LEAF_P = new THREE.Vector3(), LEAF_S = new THREE.Vector3();
const LEAF_F = new THREE.Vector3();
function updateLeaves(dt) {
  const LV = WORLD.leaves; if (!LV) return;
  const cy = camera.position.y, L = LV.list;
  /* Respawn ahead of the rig, not around it. A band centred on the camera
     spends nearly all of itself behind and beside the frustum — of a couple of
     hundred leaves only a dozen were ever on screen. Recycling them into the
     cone the camera is actually looking down puts the same count in frame
     several times over, and costs nothing. */
  camera.getWorldDirection(LEAF_F);
  LEAF_F.y = 0;
  if (LEAF_F.lengthSq() < 1e-6) LEAF_F.set(0, 0, -1); else LEAF_F.normalize();
  const fx = camera.position.x + LEAF_F.x * LEAF_AHEAD;
  const fz = camera.position.z + LEAF_F.z * LEAF_AHEAD;
  const seed = !LV.seeded; LV.seeded = true;
  for (let i = 0; i < L.length; i++) {
    const l = L[i];
    l.y -= l.fall * dt;
    l.roll += l.rollSp * dt;
    l.tilt += l.spin * dt;
    if (seed || l.y < cy - 10) {                /* back to the top of the band */
      l.y = seed ? cy - 10 + Math.random() * 26 : cy + 16;
      const a = Math.random() * TAU, r = Math.sqrt(Math.random()) * LEAF_SPREAD;
      l.x = fx + Math.cos(a) * r;
      l.z = fz + Math.sin(a) * r;
    }
    /* the far wrap is a backstop for a rig that has walked away from its own
       leaves — it sits well outside the fog, so nothing is seen to jump */
    const cx = camera.position.x, cz = camera.position.z;
    if (l.x - cx > LEAF_R) l.x -= 2 * LEAF_R; else if (l.x - cx < -LEAF_R) l.x += 2 * LEAF_R;
    if (l.z - cz > LEAF_R) l.z -= 2 * LEAF_R; else if (l.z - cz < -LEAF_R) l.z += 2 * LEAF_R;
    /* the side-slip of a leaf shedding air off one edge, then the other */
    const sw = Math.sin(clock * l.sway + l.swayPh);
    LEAF_P.set(l.x + sw * l.swayAmp, l.y,
               l.z + Math.cos(clock * l.sway * .7 + l.swayPh) * l.swayAmp * .6);
    LEAF_E.set(l.roll, l.tilt, sw * .55);
    LEAF_Q.setFromEuler(LEAF_E);
    LEAF_S.setScalar(l.s);
    LEAF_M.compose(LEAF_P, LEAF_Q, LEAF_S);
    LV.mesh.setMatrixAt(i, LEAF_M);
  }
  LV.mesh.instanceMatrix.needsUpdate = true;
}

/* ==================================================== 6c · the cursor wisps
   A drift of cold motes that follows the pointer.

   It hangs as a child of the camera, so the pointer maps straight into camera
   space through the frustum's own half-height. Unprojecting onto a world
   plane each frame would instead pin the trail to the court, and the rig is
   always drifting — the wisps would swim across the screen whenever the
   camera moved rather than staying under the hand.

   Emission is by distance travelled, not elapsed time. A slow hand then lays
   a continuous drift and a fast one throws the motes apart, which is how a
   moving source actually sheds them; emitting on a timer gives an evenly
   spaced string of beads at every speed. */
const WISP_D = 3.4;
const WISP = { list: [], i: 0, acc: 0, ex: 0, ey: 0, lx: 0, ly: 0, idle: 0, seen: false };
function buildWisps() {
  if (COARSE) return;
  /* The motes are round, so nothing here is oriented: no per-particle angle,
     no rotated lookup. They are also small — a few pixels of core inside a
     faint halo — which is what lets the count go up without the additive fill
     that a screenful of big sprites costs. */
  const N = LOW ? 90 : 190;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
  g.setAttribute('aA', new THREE.BufferAttribute(new Float32Array(N), 1));
  g.setAttribute('aS', new THREE.BufferAttribute(new Float32Array(N), 1));
  const pts = new THREE.Points(g, new THREE.ShaderMaterial({
    uniforms: { uTex: { value: tx(texWisp()) }, uPx: { value: vpH() } },
    transparent: true, blending: THREE.AdditiveBlending,
    depthWrite: false, depthTest: false, fog: false,
    vertexShader:
      'attribute float aA; attribute float aS;\\n' +
      'uniform float uPx; varying float vA;\\n' +
      'void main(){ vA = aA;\\n' +
      ' vec4 mv = modelViewMatrix * vec4(position,1.0);\\n' +
      ' gl_PointSize = uPx * aS / max(-mv.z, 0.4);\\n' +
      ' gl_Position = projectionMatrix * mv; }',
    fragmentShader:
      'uniform sampler2D uTex; varying float vA;\\n' +
      'void main(){ if (vA <= 0.0) discard;\\n' +
      ' vec4 t = texture2D(uTex, gl_PointCoord);\\n' +
      ' gl_FragColor = vec4(t.rgb, t.a * vA); }'
  }));
  pts.frustumCulled = false; pts.renderOrder = 9;
  pts.layers.set(1);                    /* near the lens: never in the mirror */
  camera.add(pts);
  WISP.mesh = pts;
  for (let i = 0; i < N; i++) WISP.list.push({ life: 0, max: 1, vx: 0, vy: 0, sz: 0, ph: 0 });
}
/* the pointer, in camera space, on the plane the trail hangs on */
function wispPoint(nx, ny) {
  const hh = Math.tan(camera.fov * Math.PI / 360) * WISP_D;
  return [nx * hh * camera.aspect, ny * hh];
}
function updateWisps(dt) {
  if (!WISP.mesh) return;
  const g = WISP.mesh.geometry;
  const P = g.attributes.position.array, A = g.attributes.aA.array;
  const S = g.attributes.aS.array;
  const L = WISP.list, N = L.length;

  const pt = wispPoint(RIG.tmx, RIG.tmy);
  if (!WISP.seen) { WISP.ex = WISP.lx = pt[0]; WISP.ey = WISP.ly = pt[1]; WISP.seen = true; }
  /* the emitter trails the pointer slightly, which is what gives the drift
     its lag on a fast flick instead of snapping rigidly to the cursor */
  WISP.ex = damp(WISP.ex, pt[0], 16, dt);
  WISP.ey = damp(WISP.ey, pt[1], 16, dt);

  const dx = WISP.ex - WISP.lx, dy = WISP.ey - WISP.ly;
  const moved = Math.hypot(dx, dy);
  const ang = moved > 1e-5 ? Math.atan2(dy, dx) : 0;
  const spawn = (x, y, a, weak) => {
    const i = WISP.i; WISP.i = (i + 1) % N;      /* slot and state must pair:
       advancing first would put the position in the next slot and the life in
       this one, and every mote appears where the one before it started */
    const w = L[i], k = i * 3;
    /* The plane the trail hangs on is only about 2.2 units tall, so the
       scatter has to be read against that: a few hundredths of a unit is a
       thread stitched to the cursor, not a drift of motes. */
    P[k] = x + (Math.random() + Math.random() - 1) * .30;
    P[k + 1] = y + (Math.random() + Math.random() - 1) * .30;
    P[k + 2] = -WISP_D + (Math.random() - .5) * .9;
    w.life = 0; w.max = (weak ? 2.1 : 1.45) + Math.random() * 1.3;
    w.vx = -Math.cos(a) * .09 + (Math.random() - .5) * .38;
    w.vy = -Math.sin(a) * .09 + (Math.random() - .5) * .32 + .02;
    w.sz = (weak ? .018 : .024) + Math.random() * .026;
    w.ph = Math.random() * TAU;
  };

  WISP.acc += moved;
  const STEP = .030;
  let guard = 0;
  while (WISP.acc >= STEP && guard++ < 14) {
    WISP.acc -= STEP;
    /* lay each one at the distance along the segment it is actually owed, so a
       flick draws a spaced-out line instead of a clump at one end of it */
    const t = moved > 1e-6 ? Math.min(1, guard * STEP / moved) : 0;
    spawn(WISP.lx + dx * t, WISP.ly + dy * t, ang, false);
  }
  /* the faintest breath when the hand is still, so the cursor keeps an aura.
     Rarely, and barely buoyant: emit often here and a stationary pointer
     grows a permanent column of smoke up the middle of the frame. */
  WISP.idle += dt;
  if (WISP.idle > .42) { WISP.idle = 0; spawn(WISP.ex, WISP.ey, Math.random() * TAU, true); }
  WISP.lx = WISP.ex; WISP.ly = WISP.ey;

  for (let i = 0; i < N; i++) {
    const w = L[i], k = i * 3;
    if (w.life >= w.max) { A[i] = 0; continue; }
    w.life += dt;
    const u = w.life / w.max;
    /* curl, so the drift frays rather than blowing along one straight line */
    P[k]     += (w.vx + Math.sin(clock * 1.3 + w.ph) * .17) * dt;
    P[k + 1] += (w.vy + Math.cos(clock * 1.1 + w.ph * 1.7) * .14) * dt;
    /* light damping: they have to coast to carry the scatter outward, where
       the old rate stopped every mote within a tenth of a unit of its spawn */
    w.vx *= 1 - .5 * dt; w.vy = w.vy * (1 - .5 * dt) + .022 * dt;    /* it rises */
    A[i] = smooth(0, .12, u) * (1 - smooth(.22, 1, u)) * .9;
    S[i] = w.sz * (1 + u * .55);       /* a mote softens, it does not swell */
  }
  g.attributes.position.needsUpdate = true;
  g.attributes.aA.needsUpdate = true;
  g.attributes.aS.needsUpdate = true;
}

/* ====================================================== cloth · the plates
   Canvas UI's Cloth, ported off React and off the experimental html-in-canvas
   path it ships with. That path exists so the effect can hang arbitrary live
   HTML on the fabric — it captures the subtree with drawElementImage(), which
   is Chrome-behind-a-flag only, and the component falls back to a flat render
   everywhere else.

   Here the fabric only ever carries a still, so the capture is not needed at
   all: the plate is drawn cover-cropped into a 2-D canvas with the card's own
   two scrims baked on, and that canvas is uploaded straight to the texture.
   The simulation, both shader passes and the option set are the component's,
   unchanged. The result is that the effect runs in every WebGL2 browser
   rather than one flag.

   The grid is the component's 96 squared. Three of these on one page is a
   third of a million cell updates a second, so each one hard-stops when its
   card leaves the viewport and again once the wind dies and the fabric has
   settled — both already in the component, and both load-bearing here. */
const CLOTH_VERT = \`#version 300 es
precision highp float;
layout(location = 0) in vec2 aGrid;
layout(location = 1) in vec4 aData;
layout(location = 2) in vec2 aOffset;
uniform vec2 uRes; uniform vec2 uOut; uniform float uBleed; uniform float uFocal;
out vec2 vUv; out vec3 vNormal; out float vFold; out vec2 vLocal;
void main () {
  vUv = aGrid;
  float z = aData.x;
  vec2 nxy = aData.yz;
  vNormal = vec3(nxy, sqrt(max(1.0 - dot(nxy, nxy), 0.04)));
  vFold = aData.w;
  vLocal = aGrid * uRes;
  vec2 px = vLocal + aOffset + vec2(uBleed);
  vec2 ndc = (px / uOut) * 2.0 - 1.0;
  ndc.y = -ndc.y;
  float w = (uFocal - z) / uFocal;
  gl_Position = vec4(ndc, -z / uFocal, w);
}\`;
const CLOTH_SDF = \`
float fabricDist (vec2 p, vec2 size, float radius) {
  vec2 half_ = size * 0.5;
  float r = min(radius, min(half_.x, half_.y));
  vec2 q = abs(p - half_) - (half_ - vec2(r));
  return length(max(q, vec2(0.0))) + min(max(q.x, q.y), 0.0) - r;
}\`;
const CLOTH_FRAG = \`#version 300 es
precision highp float;
in vec2 vUv; in vec3 vNormal; in float vFold; in vec2 vLocal;
out vec4 outColor;
uniform sampler2D uContent; uniform float uMaxX; uniform float uLight;
uniform float uSheen; uniform vec3 uBacking; uniform vec2 uRes;
uniform float uRadius; uniform float uDark; uniform float uEdge;
\${CLOTH_SDF}
void main () {
  vec2 uv = clamp(vUv, vec2(0.001), vec2(uMaxX - 0.001, 0.999));
  vec4 tex = texture(uContent, uv);
  vec3 fabric = mix(uBacking, tex.rgb, tex.a);
  vec3 n = normalize(vNormal);
  vec3 lightDir = normalize(vec3(-0.3, 0.42, 0.86));
  float diffFlat = 0.58 + 0.42 * lightDir.z;
  float diff = 0.58 + 0.42 * dot(n, lightDir);
  float shade = mix(1.0, (diff / diffFlat) * vFold, uLight);
  vec3 lit = fabric * shade;
  vec3 halfway = normalize(lightDir + vec3(0.0, 0.0, 1.0));
  float specFlat = pow(halfway.z, 34.0);
  float spec = max(pow(max(dot(n, halfway), 0.0), 34.0) - specFlat, 0.0) / (1.0 - specFlat);
  lit += uSheen * spec * mix(vec3(1.0), fabric, 0.35);
  float broadFlat = pow(halfway.z, 6.0);
  float broad = max(pow(max(dot(n, halfway), 0.0), 6.0) - broadFlat, 0.0) / (1.0 - broadFlat);
  lit += uDark * uLight * 0.3 * broad * vec3(1.0);
  float d = fabricDist(vLocal, uRes, uRadius);
  float hemT = smoothstep(0.0, 6.0, -d);
  lit *= mix(1.0, mix(0.93, 1.0, hemT), uLight * (1.0 - uDark));
  lit += vec3(uDark * uLight * 0.08 * (1.0 - hemT));
  /* The card's outline, drawn here rather than as a rule on the box: off the
     same distance field that cuts the fabric out, so it rides every fold,
     takes the perspective with it and rounds itself on the corners. A CSS
     outline can only ever trace the flat rectangle the cloth has left. */
  /* A hairline: the band is under a pixel wide and pulled tight against the
     cut, so it reads as an edge on the fabric rather than a drawn stroke. */
  float rim = smoothstep(1.05, 0.2, abs(d + 0.7));
  lit += rim * uEdge * vec3(0.874, 0.906, 0.878);

  float alpha = clamp(0.5 - d, 0.0, 1.0);
  outColor = vec4(clamp(lit, 0.0, 1.0), 1.0) * alpha;
}\`;
const CLOTH_SHADOW_VERT = \`#version 300 es
precision highp float;
layout(location = 0) in vec2 aGrid;
layout(location = 1) in vec4 aData;
layout(location = 2) in vec2 aOffset;
uniform vec2 uRes; uniform vec2 uOut; uniform float uBleed;
out vec2 vLocal; out float vLift;
void main () {
  float z = aData.x;
  vLift = z;
  vLocal = aGrid * uRes;
  vec2 px = vLocal + aOffset + vec2(uBleed) + vec2(10.0, 14.0) + vec2(0.3, 0.42) * z;
  vec2 ndc = (px / uOut) * 2.0 - 1.0;
  ndc.y = -ndc.y;
  gl_Position = vec4(ndc, 0.0, 1.0);
}\`;
const CLOTH_SHADOW_FRAG = \`#version 300 es
precision highp float;
in vec2 vLocal; in float vLift;
out vec4 outColor;
uniform float uShadow; uniform vec2 uRes; uniform float uRadius; uniform float uDark;
\${CLOTH_SDF}
void main () {
  float d = fabricDist(vLocal, uRes, uRadius);
  float a = uShadow * smoothstep(0.0, 30.0, -d);
  a *= mix(1.0, 0.55, clamp(vLift / 50.0, 0.0, 1.0));
  a *= mix(1.0, 0.55, uDark);
  outColor = vec4(vec3(uDark) * a, a);
}\`;

const CL_SEG = 96, CL_NODES = CL_SEG + 1, CL_DT = 1 / 120;
const CL_WAVE = 30, CL_STIFF = 0.55, CL_GAIN = 5.0, CL_BLEED = 48;
const CLOTH_DEFAULTS = {
  pin: 'top', wind: 3, speed: .5, amplitude: 30, drape: 40, brush: 2.05,
  brushSize: 150, damping: 1, light: .5, sheen: .1, shadow: .25,
  cornerRadius: 20, backing: 'auto', perspective: 1200
};

function createCloth(output, plate, options) {
  const config = Object.assign({}, CLOTH_DEFAULTS, options || {});
  const wrapper = output.parentElement || output;
  output.style.top = output.style.left = -CL_BLEED + 'px';
  output.style.width = 'calc(100% + ' + CL_BLEED * 2 + 'px)';
  output.style.height = 'calc(100% + ' + CL_BLEED * 2 + 'px)';

  const gl = output.getContext('webgl2', { alpha: true, depth: false, stencil: false,
    antialias: true, premultipliedAlpha: true });
  if (!gl || gl.isContextLost()) return null;

  const compile = (type, text) => {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, text); gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) console.error('Cloth:', gl.getShaderInfoLog(sh));
    return sh;
  };
  const link = (v, f) => {
    const prog = gl.createProgram();
    const vs = compile(gl.VERTEX_SHADER, v), fs = compile(gl.FRAGMENT_SHADER, f);
    gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
    const u = {}, n = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; i++) { const info = gl.getActiveUniform(prog, i);
      u[info.name] = gl.getUniformLocation(prog, info.name); }
    return { program: prog, vert: vs, frag: fs, uniforms: u };
  };
  const cloth = link(CLOTH_VERT, CLOTH_FRAG);
  const shadow = link(CLOTH_SHADOW_VERT, CLOTH_SHADOW_FRAG);

  const gridVerts = new Float32Array(CL_NODES * CL_NODES * 2);
  for (let y = 0; y < CL_NODES; y++) for (let x = 0; x < CL_NODES; x++) {
    const i = (y * CL_NODES + x) * 2;
    gridVerts[i] = x / CL_SEG; gridVerts[i + 1] = y / CL_SEG;
  }
  const idx = new Uint32Array(CL_SEG * CL_SEG * 6);
  let o = 0;
  for (let y = 0; y < CL_SEG; y++) for (let x = 0; x < CL_SEG; x++) {
    const a = y * CL_NODES + x, b = a + 1, c = a + CL_NODES, d = c + 1;
    idx[o++] = a; idx[o++] = c; idx[o++] = b; idx[o++] = b; idx[o++] = c; idx[o++] = d;
  }
  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  const gridBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, gridBuf);
  gl.bufferData(gl.ARRAY_BUFFER, gridVerts, gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  const dataBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, dataBuf);
  gl.bufferData(gl.ARRAY_BUFFER, CL_NODES * CL_NODES * 16, gl.DYNAMIC_DRAW);
  gl.enableVertexAttribArray(1); gl.vertexAttribPointer(1, 4, gl.FLOAT, false, 0, 0);
  const offBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, offBuf);
  gl.bufferData(gl.ARRAY_BUFFER, CL_NODES * CL_NODES * 8, gl.DYNAMIC_DRAW);
  gl.enableVertexAttribArray(2); gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 0, 0);
  const idxBuf = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, idxBuf);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idx, gl.STATIC_DRAW);
  gl.bindVertexArray(null);

  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
    new Uint8Array([0, 0, 0, 0]));

  /* the one place this differs from the component: the plate goes straight in */
  function upload() {
    const c = plate();
    if (!c || !c.width) return;
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, c);
  }

  function syncSize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const w = Math.max(1, Math.round(output.clientWidth * dpr));
    const h = Math.max(1, Math.round(output.clientHeight * dpr));
    if (output.width !== w || output.height !== h) { output.width = w; output.height = h; }
  }

  let hCur = new Float32Array(CL_NODES * CL_NODES);
  let hPrev = new Float32Array(CL_NODES * CL_NODES);
  let hNext = new Float32Array(CL_NODES * CL_NODES);
  const vData = new Float32Array(CL_NODES * CL_NODES * 4);
  const oData = new Float32Array(CL_NODES * CL_NODES * 2);
  const zF = new Float32Array(CL_NODES * CL_NODES);
  const rowF = new Float32Array(CL_NODES), colF = new Float32Array(CL_NODES);
  const hang = new Float32Array(CL_NODES);
  for (let a = 0; a < CL_NODES; a++) hang[a] = Math.pow(a / CL_SEG, 1.3);

  let simTime = Math.random() * 60, gust = .5, energy = 1;
  let edge = .048, edgeTo = .048;   /* barely there at rest, found on hover */
  const ptr = { x: -1e5, y: -1e5, inside: false };
  const touch = { x: -1e5, y: -1e5, vx: 0, vy: 0, s: 0 };
  const axisA = (x, y) => config.pin === 'top' ? y : config.pin === 'bottom' ? CL_SEG - y
    : config.pin === 'left' ? x : CL_SEG - x;
  const axisB = (x, y) => (config.pin === 'top' || config.pin === 'bottom') ? x : y;

  function stepSim(dt) {
    simTime += dt * Math.max(config.speed, 0);
    const t = simTime, windAmp = CL_GAIN * Math.max(config.wind, 0) * gust;
    const kb1 = (Math.PI * 2) / (CL_SEG / 1.5), kb2 = (Math.PI * 2) / (CL_SEG / 3.8);
    const ka = (Math.PI * 2) / (CL_SEG / 2.2);
    const w1 = CL_WAVE * kb1, w2 = CL_WAVE * kb2, drift = 1.8 * Math.sin(.23 * t);
    for (let b = 0; b < CL_NODES; b++)
      rowF[b] = Math.sin(kb1 * b - w1 * t + drift) + .45 * Math.sin(kb2 * b + w2 * t * .8 + 3);
    for (let a = 0; a < CL_NODES; a++)
      colF[a] = (.7 + .3 * Math.sin(ka * a - 1.7 * t)) * hang[a];
    const c2 = CL_WAVE * CL_WAVE, dt2 = dt * dt;
    const decay = Math.exp(-Math.min(Math.max(config.damping, .05), 8) * dt);
    for (let y = 0; y < CL_NODES; y++) {
      const up = Math.max(y - 1, 0) * CL_NODES, down = Math.min(y + 1, CL_SEG) * CL_NODES;
      const row = y * CL_NODES;
      for (let x = 0; x < CL_NODES; x++) {
        const i = row + x;
        const h = hCur[i];
        const lap = hCur[row + Math.max(x - 1, 0)] + hCur[row + Math.min(x + 1, CL_SEG)]
          + hCur[up + x] + hCur[down + x] - 4 * h;
        const force = windAmp * rowF[axisB(x, y)] * colF[axisA(x, y)];
        const next = 2 * h - hPrev[i] + dt2 * (c2 * lap - CL_STIFF * h + force);
        let v = h + (next - h) * decay;
        if (v > 3.5) v = 3.5; else if (v < -3.5) v = -3.5;
        hNext[i] = v;
      }
    }
    for (let b = 0; b < CL_NODES; b++) {
      let x = b, y = 0;
      if (config.pin === 'bottom') y = CL_SEG;
      else if (config.pin === 'left') { x = 0; y = b; }
      else if (config.pin === 'right') { x = CL_SEG; y = b; }
      hNext[y * CL_NODES + x] = 0;
    }
    const spent = hPrev; hPrev = hCur; hCur = hNext; hNext = spent;
  }

  function imprint(delta, width, height) {
    if (config.brush <= 0 || touch.s < .01) return;
    const cw = width / CL_SEG, ch = height / CL_SEG;
    const rx = Math.max(config.brushSize, 12) / cw, ry = Math.max(config.brushSize, 12) / ch;
    const gx = touch.x / cw, gy = touch.y / ch;
    const x0 = Math.max(Math.ceil(gx - 2.5 * rx), 0), x1 = Math.min(Math.floor(gx + 2.5 * rx), CL_SEG);
    const y0 = Math.max(Math.ceil(gy - 2.5 * ry), 0), y1 = Math.min(Math.floor(gy + 2.5 * ry), CL_SEG);
    const lift = 1.1 * Math.min(config.brush, 3) * touch.s, rate = Math.min(delta * 4, 1);
    for (let y = y0; y <= y1; y++) {
      const oy = (y - gy) / ry, row = y * CL_NODES;
      for (let x = x0; x <= x1; x++) {
        const ox = (x - gx) / rx, g = Math.exp(-(ox * ox + oy * oy));
        if (g < .02) continue;
        const i = row + x, pull = rate * g, goal = lift * g;
        hCur[i] += (goal - hCur[i]) * pull;
        hPrev[i] += (goal - hPrev[i]) * pull;
      }
    }
  }

  function foreshorten(stride, lineStride, ds, anchor, comp) {
    const ds2 = ds * ds;
    for (let l = 0; l < CL_NODES; l++) {
      const base = l * lineStride;
      oData[(base + anchor * stride) * 2 + comp] = 0;
      let cum = 0;
      for (let k = anchor + 1; k < CL_NODES; k++) {
        const i = base + k * stride, dz = zF[i] - zF[i - stride];
        cum += ds - Math.sqrt(Math.max(ds2 - dz * dz, 0));
        oData[i * 2 + comp] = -cum;
      }
      cum = 0;
      for (let k = anchor - 1; k >= 0; k--) {
        const i = base + k * stride, dz = zF[i] - zF[i + stride];
        cum += ds - Math.sqrt(Math.max(ds2 - dz * dz, 0));
        oData[i * 2 + comp] = cum;
      }
    }
  }

  function compose(width, height) {
    const amp = Math.max(config.amplitude, 0);
    const drape = config.drape * (.3 + .7 * gust);
    const cw = width / CL_SEG, ch = height / CL_SEG;
    let e = 0;
    for (let y = 0; y < CL_NODES; y++) {
      const row = y * CL_NODES;
      for (let x = 0; x < CL_NODES; x++) {
        const i = row + x, h = hCur[i];
        if (Math.abs(h) > e) e = Math.abs(h);
        zF[i] = amp * Math.tanh(h) + drape * hang[axisA(x, y)];
      }
    }
    energy = e;
    for (let y = 0; y < CL_NODES; y++) {
      const up = Math.max(y - 1, 0) * CL_NODES, down = Math.min(y + 1, CL_SEG) * CL_NODES;
      const row = y * CL_NODES;
      for (let x = 0; x < CL_NODES; x++) {
        const i = row + x;
        const l = row + Math.max(x - 1, 0), r = row + Math.min(x + 1, CL_SEG);
        const dzdx = (zF[r] - zF[l]) / (2 * cw), dzdy = (zF[down + x] - zF[up + x]) / (2 * ch);
        const inv = 1 / Math.hypot(dzdx, dzdy, 1);
        const curve = zF[l] + zF[r] + zF[up + x] + zF[down + x] - 4 * zF[i];
        let fold = 1 - curve * .01;
        if (fold < .86) fold = .86; else if (fold > 1.06) fold = 1.06;
        const q = i * 4;
        vData[q] = zF[i]; vData[q + 1] = -dzdx * inv; vData[q + 2] = -dzdy * inv; vData[q + 3] = fold;
      }
    }
    const mid = CL_SEG >> 1;
    if (config.pin === 'top' || config.pin === 'bottom') {
      foreshorten(CL_NODES, 1, ch, config.pin === 'top' ? 0 : CL_SEG, 1);
      foreshorten(1, CL_NODES, cw, mid, 0);
    } else {
      foreshorten(1, CL_NODES, cw, config.pin === 'left' ? 0 : CL_SEG, 0);
      foreshorten(CL_NODES, 1, ch, mid, 1);
    }
  }

  const backing = config.backing === 'auto' ? [.02, .026, .035] : config.backing;

  function draw() {
    const resW = Math.max(wrapper.clientWidth, 1), resH = Math.max(wrapper.clientHeight, 1);
    const outW = Math.max(output.clientWidth, 1), outH = Math.max(output.clientHeight, 1);
    const light = Math.min(Math.max(config.light, 0), 1);
    const radius = Math.max(config.cornerRadius, 0);
    const lum = .299 * backing[0] + .587 * backing[1] + .114 * backing[2];
    const dark = Math.min(Math.max((.5 - lum) / .35, 0), 1);

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, output.width, output.height);
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, dataBuf); gl.bufferSubData(gl.ARRAY_BUFFER, 0, vData);
    gl.bindBuffer(gl.ARRAY_BUFFER, offBuf); gl.bufferSubData(gl.ARRAY_BUFFER, 0, oData);

    gl.useProgram(shadow.program);
    gl.uniform2f(shadow.uniforms.uRes, resW, resH);
    gl.uniform2f(shadow.uniforms.uOut, outW, outH);
    gl.uniform1f(shadow.uniforms.uBleed, CL_BLEED);
    gl.uniform1f(shadow.uniforms.uShadow, Math.min(Math.max(config.shadow, 0), 1));
    gl.uniform1f(shadow.uniforms.uRadius, radius);
    gl.uniform1f(shadow.uniforms.uDark, dark);
    gl.drawElements(gl.TRIANGLES, idx.length, gl.UNSIGNED_INT, 0);

    gl.useProgram(cloth.program);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.uniform1i(cloth.uniforms.uContent, 0);
    gl.uniform2f(cloth.uniforms.uRes, resW, resH);
    gl.uniform2f(cloth.uniforms.uOut, outW, outH);
    gl.uniform1f(cloth.uniforms.uBleed, CL_BLEED);
    gl.uniform1f(cloth.uniforms.uFocal, Math.max(config.perspective, 200));
    gl.uniform1f(cloth.uniforms.uMaxX, 1);
    gl.uniform1f(cloth.uniforms.uLight, light);
    gl.uniform1f(cloth.uniforms.uSheen, Math.max(config.sheen, 0));
    gl.uniform1f(cloth.uniforms.uRadius, radius);
    gl.uniform1f(cloth.uniforms.uDark, dark);
    gl.uniform1f(cloth.uniforms.uEdge, edge);
    gl.uniform3f(cloth.uniforms.uBacking, backing[0], backing[1], backing[2]);
    gl.drawElements(gl.TRIANGLES, idx.length, gl.UNSIGNED_INT, 0);
    gl.bindVertexArray(null);
  }

  let raf = 0, last = performance.now(), debt = 0, running = false, visible = false, dead = false;
  function frame(now) {
    if (dead) return;
    if (!visible) { running = false; return; }
    const delta = Math.min((now - last) / 1000, 1 / 20);
    last = now;
    const width = Math.max(wrapper.clientWidth, 1), height = Math.max(wrapper.clientHeight, 1);
    if (!REDUCE) {
      const t = simTime;
      const target = Math.max(.55 + .35 * Math.sin(t * .31 + 1.3)
        + .25 * Math.sin(t * .83) * (.5 + .5 * Math.sin(t * .17)), .15);
      gust += (target - gust) * Math.min(delta * 2, 1);
      const sT = ptr.inside && config.brush > 0 ? 1 : 0;
      touch.s += (sT - touch.s) * Math.min(delta * (ptr.inside ? 8 : 2.5), 1);
      const om = 14;
      touch.vx += ((ptr.x - touch.x) * om * om - 2 * om * touch.vx) * delta;
      touch.vy += ((ptr.y - touch.y) * om * om - 2 * om * touch.vy) * delta;
      touch.x += touch.vx * delta; touch.y += touch.vy * delta;
      imprint(delta, width, height);
      edge += (edgeTo - edge) * Math.min(delta * 5, 1);
      debt = Math.min(debt + delta, CL_DT * 5);
      while (debt >= CL_DT) { stepSim(CL_DT); debt -= CL_DT; }
    }
    compose(width, height);
    draw();
    if (REDUCE || (config.wind <= .001 && energy < .004 && touch.s < .01)) { running = false; return; }
    raf = requestAnimationFrame(frame);
  }
  function start() {
    if (dead || running || !visible) return;
    running = true; last = performance.now(); raf = requestAnimationFrame(frame);
  }

  const ro = new ResizeObserver(() => { syncSize(); upload(); start(); });
  ro.observe(output);
  const io = new IntersectionObserver(es => {
    visible = es[es.length - 1] ? es[es.length - 1].isIntersecting : false;
    if (visible) start();
  });
  io.observe(output);
  const onMove = e => {
    const r = wrapper.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    if (touch.s < .01) { touch.x = x; touch.y = y; touch.vx = touch.vy = 0; }
    ptr.x = x; ptr.y = y; ptr.inside = true; start();
  };
  const onLeave = () => { ptr.inside = false; };
  wrapper.addEventListener('pointermove', onMove, { passive: true });
  wrapper.addEventListener('pointerleave', onLeave, { passive: true });
  const onHidden = () => { if (document.hidden) { running = false; cancelAnimationFrame(raf); } else start(); };
  document.addEventListener('visibilitychange', onHidden);

  syncSize(); upload(); compose(Math.max(wrapper.clientWidth, 1), Math.max(wrapper.clientHeight, 1));
  return { refresh(){ syncSize(); upload(); start(); }, wake: start,
           setEdge(v){ edgeTo = v; start(); } };
}

/* the plate: the card's own still, cover-cropped, carrying the two scrims the
   CSS used to lay over it — baked in so they ripple with the cloth instead of
   sitting flat on top of it */
function clothPlate(img, w, h) {
  const c = cvs(Math.max(1, w | 0), Math.max(1, h | 0)), x = c.getContext('2d');
  const s = Math.max(c.width / img.width, c.height / img.height);
  const dw = img.width * s, dh = img.height * s;
  x.drawImage(img, (c.width - dw) / 2, (c.height - dh) / 2, dw, dh);
  let g = x.createLinearGradient(0, 0, 0, c.height);
  g.addColorStop(.36, 'rgba(3,6,9,.05)'); g.addColorStop(1, 'rgba(3,6,9,.73)');
  x.fillStyle = g; x.fillRect(0, 0, c.width, c.height);
  g = x.createLinearGradient(0, 0, 0, c.height);
  g.addColorStop(.46, 'rgba(4,6,9,0)'); g.addColorStop(1, 'rgba(4,6,9,.80)');
  x.fillStyle = g; x.fillRect(0, 0, c.width, c.height);
  return c;
}

function buildCardCloth() {
  if (COARSE) return;                     /* no pointer to brush it with */
  $$('.cards .card-fr').forEach(fr => {
    const url = (getComputedStyle(fr).backgroundImage.match(/url\\(["']?([^"')]+)/) || [])[1];
    if (!url) return;
    const img = new Image();
    img.onload = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      let plate = null, pw = 0, ph = 0;
      const get = () => {
        const w = Math.round(fr.clientWidth * dpr), h = Math.round(fr.clientHeight * dpr);
        if (!plate || w !== pw || h !== ph) { plate = clothPlate(img, w, h); pw = w; ph = h; }
        return plate;
      };
      const out = document.createElement('canvas');
      out.className = 'cloth-out'; out.setAttribute('aria-hidden', 'true');
      fr.appendChild(out);
      const inst = createCloth(out, get, { wind: 3, speed: .5, amplitude: 30, drape: 40,
        brush: 2.05, brushSize: 150, damping: 1, light: .5, sheen: .1, shadow: .25,
        cornerRadius: 20, perspective: 1200, pin: 'top' });
      /* only hide the card's own painting once the fabric is really carrying it */
      if (!inst) { out.remove(); return; }
      fr.classList.add('on-cloth');
      const card = fr.closest('.card') || fr;
      card.addEventListener('pointerenter', () => inst.setEdge(.185), { passive: true });
      card.addEventListener('pointerleave', () => inst.setEdge(.048), { passive: true });
    };
    img.onerror = () => {};
    img.src = url;
  });
}

function buildLights() {
  scene.add(new THREE.HemisphereLight(0x53838f, 0x060a08, .13));

  const key = new THREE.DirectionalLight(0xb6dbe4, 1.22);
  key.position.set(2.6, 21, 2.5);
  key.target.position.set(0, 2.2, -12.5); scene.add(key.target);
  if (WANT_SHADOW) {
    key.castShadow = true;
    const S = LOW ? 1024 : 2048;
    key.shadow.mapSize.set(S, S);
    const c = key.shadow.camera;
    c.left = -26; c.right = 26; c.top = 34; c.bottom = -16; c.near = 3; c.far = 78;
    key.shadow.bias = -0.0012; key.shadow.normalBias = .035; key.shadow.radius = 2.2;
  }
  scene.add(key); WORLD.key = key;

  /* moonlight: no shadow, no fill, purely a rim down the right-hand slope of
     every roof — without it the hall is a flat black cut-out against the sky */
  const moonKey = new THREE.DirectionalLight(0xff6a42, .52);
  moonKey.position.set(26, 30, -60);
  moonKey.target.position.set(0, 8, -40); scene.add(moonKey.target);
  scene.add(moonKey);

  /* The hall's own lamps. They light the podium and the top of the flight and
     nothing else — a range that reaches the roof turns the whole building into
     a paper lantern and the silhouette disappears. */
  const hallL = new THREE.PointLight(0xff8a26, 2.3, 15, 2);
  hallL.position.set(0, PODIUM + 1.2, TEMPLE_Z + 8.6); scene.add(hallL); WORLD.hallLight = hallL;
  [-1, 1].forEach(s => {
    const w = new THREE.PointLight(0xff8420, 2.2, 11, 2);
    w.position.set(s * 11.4, PODIUM + 1.2, TEMPLE_Z + 5.6); scene.add(w);
  });

  /* the moon throws almost nothing, but a trace of red high on the right
     keeps it attached to the scene instead of floating on top of it */
  const moonL = new THREE.PointLight(0xff3a1c, 3.0, 46, 2);
  moonL.position.set(11.0, 17.0, -24.0); scene.add(moonL); WORLD.moonLight = moonL;

  const fill = new THREE.PointLight(0x86c6d2, 0.95, 30, 2);
  fill.position.set(-1, 13.5, -16.0); scene.add(fill);

  /* the flight is the spine of the composition — without a lamp of its own it
     falls into the same black as the ground and the eye has nothing to climb */
  const stairL = new THREE.PointLight(0xffa049, 4.2, 17, 2);
  stairL.position.set(0, 7.6, -26.0); scene.add(stairL);
}
/* ====================================================== 6 · planar mirror */
/* ================================================== 7 · post-processing */
const POST = { levels: [] };
const QUAD_VS = 'varying vec2 vUv;\\nvoid main(){ vUv = uv; gl_Position = vec4( position.xy, 0.0, 1.0 ); }';

function initPost() {
  POST.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  POST.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), null);
  POST.quad.frustumCulled = false;
  POST.qScene = new THREE.Scene(); POST.qScene.add(POST.quad);
  POST.up = new THREE.ShaderMaterial({
    uniforms: { tS: { value: null }, uAmt: { value: 1 } }, vertexShader: QUAD_VS,
    fragmentShader: 'uniform sampler2D tS; uniform float uAmt; varying vec2 vUv;\\nvoid main(){ gl_FragColor = vec4(texture2D(tS,vUv).rgb*uAmt, 1.0); }',
    blending: THREE.AdditiveBlending, transparent: true, depthTest: false, depthWrite: false
  });
  if (!WANT_POST) return;
  const w = renderer.domElement.width, h = renderer.domElement.height;
  const O = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, type: THREE.HalfFloatType, depthBuffer: false, stencilBuffer: false };
  POST.scene = new THREE.WebGLRenderTarget(w, h, Object.assign({}, O, { depthBuffer: true, samples: LOW ? 0 : 2 }));
  let lw = Math.max(2, w >> 1), lh = Math.max(2, h >> 1);
  const N = 4;
  for (let i = 0; i < N; i++) {
    POST.levels.push({ a: new THREE.WebGLRenderTarget(lw, lh, O), b: new THREE.WebGLRenderTarget(lw, lh, O), w: lw, h: lh });
    lw = Math.max(2, lw >> 1); lh = Math.max(2, lh >> 1);
  }
  POST.bright = new THREE.ShaderMaterial({
    uniforms: { tS: { value: null }, uThr: { value: .86 }, uKnee: { value: .50 } },
    vertexShader: QUAD_VS,
    fragmentShader:
      'uniform sampler2D tS; uniform float uThr; uniform float uKnee; varying vec2 vUv;\\n' +
      'void main(){ vec3 c = texture2D(tS, vUv).rgb;\\n' +
      ' float l = dot(c, vec3(0.2126,0.7152,0.0722));\\n' +
      ' float k = smoothstep(uThr, uThr+uKnee, l);\\n' +
      ' gl_FragColor = vec4(c*k, 1.0); }'
  });
  POST.blur = new THREE.ShaderMaterial({
    uniforms: { tS: { value: null }, uDir: { value: new THREE.Vector2(1, 0) } },
    vertexShader: QUAD_VS,
    fragmentShader:
      'uniform sampler2D tS; uniform vec2 uDir; varying vec2 vUv;\\n' +
      'void main(){ vec3 c = texture2D(tS, vUv).rgb * 0.2270270270;\\n' +
      ' c += texture2D(tS, vUv + uDir*1.3846153846).rgb * 0.3162162162;\\n' +
      ' c += texture2D(tS, vUv - uDir*1.3846153846).rgb * 0.3162162162;\\n' +
      ' c += texture2D(tS, vUv + uDir*3.2307692308).rgb * 0.0702702703;\\n' +
      ' c += texture2D(tS, vUv - uDir*3.2307692308).rgb * 0.0702702703;\\n' +
      ' gl_FragColor = vec4(c, 1.0); }'
  });
  POST.comp = new THREE.ShaderMaterial({
    uniforms: {
      tS: { value: null }, tB: { value: null }, uRes: { value: new THREE.Vector2(w, h) },
      uT: { value: 0 }, uBloom: { value: .34 }, uCA: { value: 1 }, uGrain: { value: .020 },
      uVig: { value: 1 }, uExp: { value: .62 }, uFade: { value: 1 }, uSat: { value: 1.05 }
    },
    vertexShader: QUAD_VS,
    fragmentShader:
      'uniform sampler2D tS; uniform sampler2D tB; uniform vec2 uRes;\\n' +
      'uniform float uT, uBloom, uCA, uGrain, uVig, uExp, uFade, uSat;\\n' +
      'varying vec2 vUv;\\n' +
      'vec3 aces(vec3 x){ return clamp((x*(2.51*x+0.03))/(x*(2.43*x+0.59)+0.14), 0.0, 1.0); }\\n' +
      'void main(){\\n' +
      ' vec2 d = vUv - 0.5; float r2 = dot(d,d);\\n' +
      ' float ca = uCA * (0.30 + r2*2.6) * 0.0013;\\n' +
      ' vec3 c;\\n' +
      ' c.r = texture2D(tS, vUv + d*ca).r;\\n' +
      ' c.g = texture2D(tS, vUv).g;\\n' +
      ' c.b = texture2D(tS, vUv - d*ca).b;\\n' +
      ' c += texture2D(tB, vUv).rgb * uBloom;\\n' +
      ' c *= uExp;\\n' +
      ' c = aces(c);\\n' +
      ' float l = dot(c, vec3(0.2126,0.7152,0.0722));\\n' +
      ' c = mix(vec3(l), c, uSat);\\n' +
      ' c = mix(c, c*vec3(0.74,1.03,1.11), smoothstep(0.55,0.0,l)*0.80);\\n' +    /* teal shadows */
      ' c = mix(c, c*vec3(1.035,0.995,0.968), smoothstep(0.50,1.0,l)*0.26);\\n' + /* warm highs   */
      ' float v = smoothstep(1.22, 0.26, length(d*vec2(1.0,0.94))*1.42);\\n' +
      ' c *= mix(1.0, v, uVig);\\n' +
      ' float g = fract(sin(dot(vUv*uRes + uT*137.0, vec2(12.9898,78.233)))*43758.5453);\\n' +
      ' c += (g-0.5)*uGrain;\\n' +
      ' c *= uFade;\\n' +
      ' vec3 e = pow(max(c,0.0), vec3(1.0/2.2));\\n' +
      /* A touch of contrast, applied after the encode rather than before it:
         in linear the same curve mostly crushes the shadows, and this frame is
         nearly all shadow. Pivoted low, at 0.30, so it deepens the night
         without pulling the lit paper of the hall down with it. */
      ' e = clamp((e - 0.30) * 1.00 + 0.30, 0.0, 1.0);\\n' +
      ' gl_FragColor = vec4( e, 1.0 );\\n' +
      '}'
  });
}
function pass(mat, target, additive) {
  POST.quad.material = mat;
  renderer.setRenderTarget(target || null);
  if (!additive) renderer.clear(true, false, false);
  renderer.render(POST.qScene, POST.cam);
}
function renderPost() {
  const L = POST.levels;
  POST.bright.uniforms.tS.value = POST.scene.texture;
  pass(POST.bright, L[0].a);
  for (let i = 0; i < L.length; i++) {
    if (i > 0) { POST.up.blending = THREE.NoBlending; POST.up.uniforms.uAmt.value = 1; POST.up.uniforms.tS.value = L[i - 1].a; pass(POST.up, L[i].a); }
    POST.blur.uniforms.tS.value = L[i].a; POST.blur.uniforms.uDir.value.set(1 / L[i].w, 0); pass(POST.blur, L[i].b);
    POST.blur.uniforms.tS.value = L[i].b; POST.blur.uniforms.uDir.value.set(0, 1 / L[i].h); pass(POST.blur, L[i].a);
  }
  POST.up.blending = THREE.AdditiveBlending; POST.up.uniforms.uAmt.value = .52;
  for (let i = L.length - 1; i > 0; i--) { POST.up.uniforms.tS.value = L[i].a; pass(POST.up, L[i - 1].a, true); }
  POST.comp.uniforms.tS.value = POST.scene.texture;
  POST.comp.uniforms.tB.value = L[0].a;
  pass(POST.comp, null);
}

/* ================================================= 8 · the camera rig */
const CAM = [
  { p: [  0.0, 4.05, 13.6 ], t: [  0.0, 6.60, -18.0 ], fov: 36 },  /* 0 hero        */
  { p: [ -5.6, 2.35, 11.6 ], t: [  1.2, 5.60, -14.0 ], fov: 48 },  /* 1 the sanmon  */
  { p: [  1.2, 3.60,  2.2 ], t: [ -0.6, 7.50, -22.0 ], fov: 40 },  /* 2 gardens     */
  { p: [  5.2, 2.10, -3.4 ], t: [ -2.6, 7.00, -20.0 ], fov: 46 },  /* 3 craft       */
  { p: [  0.0, 7.60, -16.0 ], t: [  0.0, 13.0, -40.0 ], fov: 42 }, /* 4 afterlight  */
  { p: [  0.0, 10.5, -20.0 ], t: [  0.0, 3.00, -34.0 ], fov: 46 }  /* 5 footer      */
];
const RIG = { prog: 0, smooth: 0, mx: 0, my: 0, tmx: 0, tmy: 0, intro: 0, focus: -1, focusAmt: 0 };
let curveP, curveT, tmpCam;

function buildRig() {
  curveP = new THREE.CatmullRomCurve3(CAM.map(c => new THREE.Vector3(c.p[0], c.p[1], c.p[2])), false, 'catmullrom', .42);
  curveT = new THREE.CatmullRomCurve3(CAM.map(c => new THREE.Vector3(c.t[0], c.t[1], c.t[2])), false, 'catmullrom', .42);
  tmpCam = new THREE.PerspectiveCamera(CAM[0].fov, vpW() / vpH(), .35, 220);
  camera.layers.enable(1); camera.layers.enable(2);
}
const _p = new THREE.Vector3(), _t = new THREE.Vector3(), _d = new THREE.Vector3();
/* Every waypoint is composed for a wide frame. On a tall one the same
   numbers crop the gate in half, so the rig steps back along its own view
   axis and opens up a little instead of letting the sides fall away. */
function aspectFix() { return clamp((1.62 - vpW() / vpH()) / 1.05, 0, 1); }
function fitAspect(p, t, fov) {
  const nf = aspectFix();
  if (nf <= 0) return fov;
  _d.subVectors(p, t).normalize();
  p.addScaledVector(_d, nf * 8.2);
  p.y += nf * 1.1;
  return fov * (1 + nf * .40);
}
function applyCamera() {
  const N = CAM.length - 1;
  const u = clamp(RIG.smooth / N, 0, 1);
  curveP.getPoint(u, _p); curveT.getPoint(u, _t);
  const i = clamp(Math.floor(RIG.smooth), 0, N - 1), f = clamp(RIG.smooth - i, 0, 1);
  let fov = lerp(CAM[i].fov, CAM[i + 1].fov, f);

  fov = fitAspect(_p, _t, fov);

  /* the opening dolly: a long lens easing in from further back */
  const io = 1 - RIG.intro;
  _p.z += io * 5.6; _p.y += io * 0.65; fov += io * 8;

  /* parallax — a hand-held drift, never enough to break the frame */
  const par = 1 - smooth(0, 1.6, RIG.smooth) * .55;
  _p.x += RIG.mx * 0.62 * par; _p.y += RIG.my * 0.34 * par;
  _t.x -= RIG.mx * 0.20 * par; _t.y -= RIG.my * 0.12 * par;

  camera.position.copy(_p);
  camera.lookAt(_t);
  if (Math.abs(camera.fov - fov) > 1e-4) { camera.fov = fov; camera.updateProjectionMatrix(); }
}

/* ============================================== 9 · scroll ↔ chapters */
const SECS = [].slice.call(document.querySelectorAll('[data-cam]'));
let anchors = [], maxScroll = 1, activeSec = 0;
function measure() {
  maxScroll = Math.max(1, document.documentElement.scrollHeight - vpH());
  anchors = SECS.map((el, i) => {
    if (i === 0) return 0;
    if (i === SECS.length - 1) return maxScroll;
    return clamp(el.offsetTop + el.offsetHeight * .5 - vpH() * .5, 0, maxScroll);
  });
  for (let i = 1; i < anchors.length; i++) anchors[i] = Math.max(anchors[i], anchors[i - 1] + 1);
}
function progressFor(y) {
  if (y <= anchors[0]) return 0;
  for (let i = 0; i < anchors.length - 1; i++)
    if (y <= anchors[i + 1]) return i + (y - anchors[i]) / (anchors[i + 1] - anchors[i]);
  return anchors.length - 1;
}

/* ============================================ 10 · the wordmark layout */
function layoutWord() {
  if (!WORD.group) return;
  const c = CAM[0];
  const hp = new THREE.Vector3(c.p[0], c.p[1], c.p[2]);
  const ht = new THREE.Vector3(c.t[0], c.t[1], c.t[2]);
  tmpCam.fov = fitAspect(hp, ht, c.fov);
  tmpCam.aspect = vpW() / vpH();
  tmpCam.position.copy(hp);
  tmpCam.lookAt(ht);
  tmpCam.updateProjectionMatrix(); tmpCam.updateMatrixWorld(true);
  const hit = (nx, ny) => {
    const v = new THREE.Vector3(nx, ny, .5).unproject(tmpCam).sub(tmpCam.position).normalize();
    return tmpCam.position.clone().addScaledVector(v, (WORD_Z - tmpCam.position.z) / v.z);
  };
  const L = hit(-1, 0), R = hit(1, 0);
  /* Judge the frame by its shape, not its width. What forces the word up and
     in is a *tall* frame, and a 768-wide tablet held upright is as tall as a
     phone — on a width test it took the desktop baseline and sat below the
     fold with only the top of the G showing. */
  const narrow = vpW() / vpH() < 1.05;
  /* Four wide-tracked letters reach the frame edge exactly; pushing past it,
     as the six-letter word could afford to, decapitates the K and the E. The
     narrow branch is held a little inside the edge because a phone frame has
     no gutter to lose the tracking that trails the final letter into. */
  const fill = narrow ? .96 : 1.00;
  const s = (R.x - L.x) * fill / WORD.ink.w;
  /* on a tall frame the mounds sit near mid-height, so the baseline has to
     ride above them or the whole word disappears into the grass */
  const base = hit(0, narrow ? -.16 : -.585);
  WORD.group.scale.setScalar(s);
  WORD.group.position.set(-WORD.ink.cx * s, base.y, WORD_Z);
  WORD.rise = WORD.ink.asc * s * 1.25;
}

/* =================================================== 11 · page wiring */
const $  = s => document.querySelector(s);
const $$ = s => [].slice.call(document.querySelectorAll(s));
const nav = $('#nav'), preEl = $('#pre'), preFill = $('#pre-fill'), prePct = $('#pre-pct');

function wireReveals() {
  splitHeadingWords();
  const groups = new Map();
  const items = $$('[data-rv], .mask-line');
  items.forEach(el => {
    const key = el.parentElement;
    const arr = groups.get(key) || []; arr.push(el); groups.set(key, arr);
  });
  groups.forEach(arr => arr.forEach((el, i) => el.dataset.rvd = i * 85));
  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const d = parseFloat(e.target.dataset.rvd || 0);
      setTimeout(() => e.target.classList.add('rv-in'), REDUCE ? 0 : d);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: .04 });
  items.forEach(el => { if (!el.closest('#hero')) io.observe(el); });
}

/* Word-level masks let every display heading arrive at a human reading pace.
   The original text remains the accessible label, while the visual words are
   explicitly presentational. The existing section observer still controls
   when each heading starts. */
function splitHeadingWords() {
  if (REDUCE) return;
  $$('h1.display, h2.display').forEach(heading => {
    const lines = heading.querySelectorAll('.mask-line');
    const targets = lines.length ? [].slice.call(lines) : [heading];
    targets.forEach(target => {
      if (target.dataset.wordReady === 'true') return;
      const phrase = target.textContent.replace(/\\s+/g, ' ').trim();
      if (!phrase) return;
      target.dataset.wordReady = 'true';
      target.classList.add('word-reveal');
      target.setAttribute('aria-label', phrase);
      target.textContent = '';
      phrase.split(' ').forEach((word, i) => {
        if (i) target.appendChild(document.createTextNode(' '));
        const mask = document.createElement('span');
        const inner = document.createElement('span');
        mask.className = 'word-mask'; mask.setAttribute('aria-hidden', 'true');
        inner.className = 'word'; inner.textContent = word;
        inner.style.setProperty('--word-delay', (i * 72) + 'ms');
        mask.appendChild(inner); target.appendChild(mask);
      });
    });
  });
}

/* Foreground PNGs are section-owned until their chapter is called. At that
   point the active stage becomes a fixed lower viewport plane; its predecessor
   remains there just long enough to blur and fade out before returning home.

   While it holds that plane the stage is re-parented into #fg-sky, which lives
   outside .page and so is not capped by its stacking context — that is the
   only way a cut-out can pass in front of the nav and the chapter rail. The
   move costs nothing in layout: the stage is position:fixed either way, and
   its placement rules key off [data-fg], not off the section it came from. */
function wireForegroundStages() {
  const pairs = $$('.sec .fg, .foot .fg').map(stage => ({
    section:stage.closest('.sec, .foot'), stage
  })).filter(pair => pair.section);
  if (!pairs.length) return;

  const sky = $('#fg-sky');
  const ratios = new Map(pairs.map(pair => [pair.section, 0]));
  const homes = new WeakMap(pairs.map(pair => [pair.stage, pair.section]));
  const timers = new WeakMap();
  let activeStage = null;

  const lift = stage => {
    if (!sky || stage.parentNode === sky) return;
    sky.appendChild(stage);
    /* A re-inserted element has no previous computed style, so the entrance
       would land already finished. Resolve the parked state in its new parent
       first and the pieces have something to rise from. */
    void stage.offsetWidth;
  };
  const park = stage => {
    const home = homes.get(stage);
    if (home && stage.parentNode !== home) home.insertBefore(stage, home.firstChild);
  };

  const retire = stage => {
    if (!stage || stage === activeStage) return;
    const pending = timers.get(stage);
    if (pending) clearTimeout(pending);
    stage.classList.remove('fg-active');
    if (REDUCE) { park(stage); return; }
    stage.classList.add('fg-retiring');
    timers.set(stage, setTimeout(() => {
      stage.classList.remove('fg-retiring');
      timers.delete(stage);
      park(stage);
    }, 820));
  };

  const activate = stage => {
    if (!stage || stage === activeStage) return;
    const pending = timers.get(stage);
    if (pending) clearTimeout(pending);
    stage.classList.remove('fg-retiring');
    lift(stage);
    stage.classList.add('fg-active');
    const prior = activeStage;
    activeStage = stage;
    retire(prior);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => ratios.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0));
    const next = pairs.reduce((best, pair) =>
      (ratios.get(pair.section) || 0) > (ratios.get(best.section) || 0) ? pair : best
    );
    const nextRatio = ratios.get(next.section) || 0;
    if (nextRatio > 0) activate(next.stage);
    else if (activeStage) {
      const prior = activeStage;
      activeStage = null;
      retire(prior);
    }
  }, { rootMargin:'-12% 0px -12% 0px', threshold:[0, .12, .32, .55] });

  pairs.forEach(pair => observer.observe(pair.section));
}

/* ------------------------------------------------------ leaving the hero
   Everything along the foot of the hero is spent the moment the walk starts:
   the cue has been read, the four chapters have been offered, the preview has
   been seen, and the scrim under them is only there to hold the type off the
   sanctuary. Letting the block slide away together reads as the page moving;
   giving each piece its own window empties the foot one element at a time
   instead, which reads as the hero standing down.

   The preview window is not staggered with the rest. It is the largest,
   flattest thing in the frame and a slow fade just dims it in place, so it
   goes early, goes quickly, and dissolves rather than fades: the blur is what
   makes the frame look like it is letting go of it rather than turning it
   down.

   Nothing is written until the scroll actually leaves zero, and everything is
   handed back the moment it returns: these elements carry the page's own
   entrance reveal, and an inline opacity set at rest would pre-empt it. */
function wireHeroExit() {
  const hero = $('#hero'); if (!hero) return;
  /* at = where in the exit it starts, span = how long it takes to go */
  const seq = [
    { el: $('.peek'),      at: .00, span: .26, blur: 10 },
    { el: $('.hero-cue'),  at: .10, span: .30, shift: true },
    ...$$('.chip').map((el, i) => ({ el: el, at: .20 + i * .10, span: .30, shift: true })),
    { el: $('.chapters'),  at: .60, span: .30 },  /* shifting it carries the chips twice */
    { el: $('.hero-side'), at: .70, span: .30 }   /* its transform is the centring -50% */
  ].filter(o => o.el);
  let on = false;
  const apply = () => {
    const t = clamp(scrollY / Math.max(1, vpH() * .58), 0, 1);
    if (t <= 0) {
      if (!on) return;
      seq.forEach(o => {
        o.el.style.opacity = ''; o.el.style.transform = ''; o.el.style.filter = '';
        o.el.style.pointerEvents = ''; o.el.style.transition = '';
      });
      on = false; return;
    }
    on = true;
    seq.forEach(o => {
      /* these carry the reveal's own .9s opacity transition, which would
         animate every value written here — the fade would then trail the
         scroll by most of a second and stop reading as scroll-driven */
      o.el.style.transition = 'none';
      const a = 1 - smooth(o.at, o.at + o.span, t);
      o.el.style.opacity = a.toFixed(3);
      if (o.shift) o.el.style.transform = 'translate3d(0,' + ((1 - a) * 15).toFixed(1) + 'px,0)';
      if (o.blur) o.el.style.filter = a > .999 ? '' : 'blur(' + ((1 - a) * o.blur).toFixed(1) + 'px)';
      o.el.style.pointerEvents = a < .05 ? 'none' : '';
    });
  };
  addEventListener('scroll', apply, { passive: true });
  addEventListener('resize', apply, { passive: true });
  apply();
}

function wireNav() {
  let last = 0;
  const rail = $('#rail');
  const names = ['The Hidden Gate', 'The Sanmon', 'Still Gardens', 'Sacred Craft', 'Afterlight', 'Colophon'];
  SECS.forEach((s, i) => {
    const b = document.createElement('button');
    b.innerHTML = '<i></i>'; b.title = names[i] || '';
    b.setAttribute('aria-label', names[i] || 'section');
    b.addEventListener('click', () => scrollTo({ top: anchors[i], behavior: REDUCE ? 'auto' : 'smooth' }));
    rail.appendChild(b);
  });
  const dots = $$('#rail button');
  const links = $$('.nav-link');
  const burger = $('.nav-burger');
  const closeMenu = () => {
    nav.classList.remove('menu-open');
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    document.documentElement.classList.remove('nav-open');
  };
  const setMenu = open => {
    /* clear the scroll-hide before the sheet opens: leaving it set would ease
       the bar back down on close, promoting it again under the outgoing sheet */
    if (open) nav.classList.remove('hide');
    nav.classList.toggle('menu-open', open);
    burger.classList.toggle('active', open);
    burger.setAttribute('aria-expanded', String(open));
    document.documentElement.classList.toggle('nav-open', open);
  };
  burger.setAttribute('aria-controls', 'navlinks');
  burger.setAttribute('aria-expanded', 'false');
  burger.addEventListener('click', () => {
    if (vpW() > 820) return;
    setMenu(!nav.classList.contains('menu-open'));
  });
  links.forEach(link => link.addEventListener('click', closeMenu));
  addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  addEventListener('resize', () => { if (vpW() > 820) closeMenu(); }, { passive:true });
  /* Which chapter each link actually points at, read off its href. The old
     rule was positional — link i lit for section i+1 — which silently assumed
     one link per section in matching order. With five links over four chapters
     every entry past the third lit for its neighbour: standing in Afterlight
     highlighted Stories. Reading the destination cannot drift. */
  const linkSec = links.map(l => SECS.indexOf(document.querySelector(l.getAttribute('href'))));
  window.addEventListener('scroll', () => {
    const y = scrollY;
    nav.classList.toggle('stuck', y > 40);
    /* and don't even mark it hidden while the menu is open, or the class lands
       the moment the sheet closes and the bar blinks away under the thumb */
    nav.classList.toggle('hide',
      !nav.classList.contains('menu-open') && y > last + 4 && y > vpH() * .8);
    last = y;
    const a = Math.round(progressFor(y));
    if (a !== activeSec) {
      activeSec = a;
      dots.forEach((d, i) => d.classList.toggle('on', i === a));
      links.forEach((l, i) => l.classList.toggle('on', linkSec[i] === a));
    }
  }, { passive: true });
  $$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (!t) return;
    e.preventDefault();
    scrollTo({ top: a.getAttribute('href') === '#top' ? 0 : t.offsetTop - 40, behavior: REDUCE ? 'auto' : 'smooth' });
  }));
}

function wireFocus() {
  const set = i => { RIG.focus = i; };
  $$('[data-chip]').forEach(el => {
    el.addEventListener('mouseenter', () => { set(+el.dataset.chip); $$('[data-chip]').forEach(o => o.classList.toggle('on', o === el)); });
    el.addEventListener('mouseleave', () => { set(-1); el.classList.remove('on'); });
  });
  $$('[data-les]').forEach(el => {
    el.addEventListener('mouseenter', () => set(+el.dataset.les % 4));
    el.addEventListener('mouseleave', () => set(-1));
  });
}

function wireCursor() {
  const dot = $('#cursor');
  if (COARSE) { dot.style.display = 'none'; return; }
  let x = vpW() / 2, y = vpH() / 2, tx2 = x, ty = y;
  addEventListener('pointermove', e => {
    tx2 = e.clientX; ty = e.clientY;
    RIG.tmx = (e.clientX / vpW()) * 2 - 1;
    RIG.tmy = -((e.clientY / vpH()) * 2 - 1);
  }, { passive: true });
  $$('[data-cursor]').forEach(el => {
    el.addEventListener('mouseenter', () => dot.classList.add('act'));
    el.addEventListener('mouseleave', () => dot.classList.remove('act'));
  });
  (function tick() {
    x = lerp(x, tx2, .18); y = lerp(y, ty, .18);
    dot.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0)';
    requestAnimationFrame(tick);
  })();
}

function makeGrain() {
  const S = 180, c = cvs(S, S), x = c.getContext('2d');
  const im = x.createImageData(S, S), d = im.data, r = mulberry32(9);
  for (let i = 0; i < S * S; i++) {
    const v = 110 + r() * 90;
    d[i * 4] = d[i * 4 + 1] = d[i * 4 + 2] = v; d[i * 4 + 3] = 255;
  }
  x.putImageData(im, 0, 0);
  $('#grain').style.backgroundImage = 'url(' + c.toDataURL('image/png') + ')';
}

/* ============================================ 12 · the card viewports */
const CARDS = [];
function buildCards() {
  const defs = [
    { p: [-2.0, 1.60, -2.0], t: [0, 10.0, -34.0], fov: 40 },    /* the long climb */
    { p: [4.2, 2.90, -9.5], t: [6.4, 2.90, -14.4], fov: 40 },   /* lantern court  */
    { p: [3.4, 2.40, 2.0], t: [-1.0, -.60, -6.0], fov: 40 },    /* the wet court  */
    { p: [0.6, 3.40, -12.0], t: [0, 12.0, -40.0], fov: 26 }     /* hero window    */
  ];
  $$('[data-view]').forEach(el => {
    const d = defs[+el.dataset.view]; if (!d) return;
    const c = new THREE.PerspectiveCamera(d.fov, 4 / 5, .3, 200);
    c.position.set(d.p[0], d.p[1], d.p[2]);
    c.lookAt(d.t[0], d.t[1], d.t[2]);
    c.layers.set(0);
    c.userData = { home: c.position.clone(), look: new THREE.Vector3(d.t[0], d.t[1], d.t[2]), push: 0, want: 0 };
    CARDS.push({ cam: c, el: el.querySelector('[data-frame]') || el, rect: null });
    el.addEventListener('mouseenter', () => c.userData.want = 1);
    el.addEventListener('mouseleave', () => c.userData.want = 0);
  });
}
/* A render target keeps its own viewport/scissor — renderer.setScissor()
   only ever reaches the default framebuffer, so the region has to be set on
   whichever surface we are actually drawing into, and re-bound to take. */
const _push = new THREE.Vector3();
function setRegion(rt, x, y, w, h) {
  if (rt) {
    const pr = renderer.getPixelRatio();
    rt.viewport.set(x * pr, y * pr, w * pr, h * pr);
    rt.scissor.set(x * pr, y * pr, w * pr, h * pr);
    rt.scissorTest = true;
    renderer.setRenderTarget(rt);
  } else {
    renderer.setViewport(x, y, w, h);
    renderer.setScissor(x, y, w, h);
    renderer.setScissorTest(true);
  }
}
function clearRegion(rt) {
  if (rt) {
    rt.viewport.set(0, 0, rt.width, rt.height);
    rt.scissor.set(0, 0, rt.width, rt.height);
    rt.scissorTest = false;
    renderer.setRenderTarget(rt);
  } else {
    renderer.setScissorTest(false);
    renderer.setViewport(0, 0, vpW(), vpH());
    renderer.setScissor(0, 0, vpW(), vpH());
  }
}
function cardBuffer(C, w, h) {
  const pr = Math.min(renderer.getPixelRatio(), 2);
  const W = Math.max(8, Math.round(w * pr)), H = Math.max(8, Math.round(h * pr));
  if (C.rt && C.rt.width === W && C.rt.height === H) return C.rt;
  if (C.rt) C.rt.dispose();
  C.rt = new THREE.WebGLRenderTarget(W, H, {
    minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
    type: THREE.HalfFloatType, depthBuffer: true, stencilBuffer: false
  });
  C.dirty = true;
  return C.rt;
}
function aimCard(C, aspect) {
  const c = C.cam, u = c.userData;
  c.aspect = aspect; c.updateProjectionMatrix();
  _push.subVectors(u.look, u.home).normalize();
  c.position.copy(u.home).addScaledVector(_push, u.push * .55);
  c.lookAt(u.look);
}
/* Each viewport keeps its own buffer and only re-renders when it is moving
   or when its slot in the refresh rota comes round — the views are static,
   so paying for four scene traversals every frame buys nothing. */
/* The blit lands in the composite at the element's screen rect, and the canvas
   knows nothing about the DOM stacked over it — so a card the page has faded
   goes on painting a live view into the frame with no card around it, which is
   what put a second lit hall in the corner once the hero exit started dimming
   the preview. Cull on the element's effective opacity, not just its rect.

   Below full opacity is the right place to stop: the card's own still is
   opaque, so the view behind it only ever shows through by (1 − alpha). At
   alpha just under one that is nothing, and the cut is invisible. */
function cardAlpha(el) {
  let a = 1;
  for (let n = el; n && n !== document.body; n = n.parentElement) {
    const s = getComputedStyle(n);
    if (s.display === 'none' || s.visibility === 'hidden') return 0;
    a *= +s.opacity;
    if (a < .001) return 0;
  }
  return a;
}
function renderCards(rt) {
  if (!CARDS.length) return;
  let drew = false;
  for (let i = 0; i < CARDS.length; i++) {
    const C = CARDS[i], r = C.el.getBoundingClientRect();
    if (r.bottom < -40 || r.top > vpH() + 40 || r.width < 4) continue;
    if (cardAlpha(C.el) < .995) continue;
    /* a card carrying cloth has no background left of its own, so the blit
       would show through the fabric's rounded corners and past its edges */
    if (C.el.classList.contains('on-cloth')) continue;
    if (!WANT_POST) {                              /* debug path: straight in */
      setRegion(rt, r.left, vpH() - r.bottom, r.width, r.height);
      renderer.clear(true, true, false);
      aimCard(C, r.width / r.height);
      renderer.render(scene, C.cam);
      drew = true; continue;
    }
    const buf = cardBuffer(C, r.width, r.height);
    const u = C.cam.userData;
    if (C.dirty || Math.abs(u.push - u.want) > .002 || (FRAME + i * 7) % 24 === 0) {
      aimCard(C, r.width / r.height);
      renderer.setRenderTarget(buf);
      renderer.clear(true, true, false);
      renderer.render(scene, C.cam);
      C.dirty = false;
    }
    setRegion(rt, r.left, vpH() - r.bottom, r.width, r.height);
    POST.up.blending = THREE.NoBlending;
    POST.up.uniforms.uAmt.value = 1;
    POST.up.uniforms.tS.value = buf.texture;
    pass(POST.up, rt);
    drew = true;
  }
  if (drew) clearRegion(rt);
}

/* ==================================================== 13 · the machine */
let running = false, tPrev = 0, clock = 0, fadeIn = 0;
const INTRO = { t0: 0 };

function resize() {
  const w = vpW(), h = vpH();
  document.documentElement.style.setProperty('--vw', w + 'px');
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, DPR_CAP) * PERF.scale);
  renderer.setSize(w, h, true);
  camera.aspect = w / h; camera.updateProjectionMatrix();
  const pw = renderer.domElement.width, ph = renderer.domElement.height;
  if (WANT_POST && POST.scene) {
    POST.scene.setSize(pw, ph);
    POST.comp.uniforms.uRes.value.set(pw, ph);
    let lw = Math.max(2, pw >> 1), lh = Math.max(2, ph >> 1);
    POST.levels.forEach(L => { L.a.setSize(lw, lh); L.b.setSize(lw, lh); L.w = lw; L.h = lh; lw = Math.max(2, lw >> 1); lh = Math.max(2, lh >> 1); });
  }
  /* multisampling is the first thing to go when the budget tightens */
  if (POST.scene) {
    const want = (!LOW && PERF.scale > .78) ? 2 : 0;
    if (POST.scene.samples !== want) { POST.scene.samples = want; POST.scene.dispose(); }
  }
  CARDS.forEach(C => { C.dirty = true; });
  if (WANT_SHADOW && WORLD.key) WORLD.key.shadow.needsUpdate = true;
  if (WORLD.embers) WORLD.embers.material.uniforms.uSize.value = h * renderer.getPixelRatio() * .5;
  if (WISP.mesh) WISP.mesh.material.uniforms.uPx.value = h * renderer.getPixelRatio();
  placeMoon();
  layoutWord();
  measure();
}

function updateWorld(dt) {
  WORLD.uT.value = clock;

  /* the focused chapter warms the lanterns and swells the disc */
  RIG.focusAmt = damp(RIG.focusAmt, RIG.focus >= 0 ? 1 : 0, 5, dt);
  const pulse = Math.sin(clock * 1.9) * .5 + .5;
  const f = RIG.focusAmt;
  if (WORLD.hallHalo) WORLD.hallHalo.material.opacity = .30 + f * .14 + Math.sin(clock * .6) * .035;
  if (WORLD.hallLight) WORLD.hallLight.intensity = 3.4 * (1 + f * .30) * (1 + Math.sin(clock * .43) * .045);
  /* the moon only breathes — the haze in front of it is what actually moves */
  if (WORLD.moonHalo) WORLD.moonHalo.material.opacity = .44 + f * .10 + Math.sin(clock * .34) * .05;
  if (WORLD.lanternLights) WORLD.lanternLights.forEach((l, i) => {
    l.intensity = 2.6 * (1 + f * .55) * (.86 + .22 * Math.sin(clock * (2.3 + i * .7) + i * 2.1) + .1 * pulse);
  });
  if (WORLD.lanternGlows) WORLD.lanternGlows.forEach(g => { g.quaternion.copy(camera.quaternion); });

  /* haze slides across the courtyard */
  if (WORLD.haze) WORLD.haze.forEach(h => {
    h.position.x = h.userData.x0 + Math.sin(clock * h.userData.sp + h.userData.ph) * 5.5;
    h.quaternion.copy(camera.quaternion);
  });

  /* ripples on the standing water */
  if (WORLD.ripples) WORLD.ripples.forEach(r => {
    const u = r.userData;
    u.t += dt * u.sp;
    if (u.t > 4) { u.t = 0; u.x = (Math.random() - .5) * 22; u.z = -8 + Math.random() * 22; }
    const k = u.t / 4;
    const s = .3 + k * 4.2;
    r.scale.set(s, s, 1);
    r.position.set(u.x, .02, u.z);
    r.material.opacity = Math.sin(k * Math.PI) * .16;
  });

  /* the type rises from behind the grass, then dissolves as you close on it */
  if (WORD.group) {
    const near = smooth(0.02, 0.92, RIG.smooth);
    WORD.glyphs.forEach((g, i) => {
      const st = clamp((WORD.reveal - i * .075) / .62, 0, 1);
      const e = easeOut(st);
      g.position.y = g.userData.baseY - (1 - e) * (WORD.ink.asc * 1.15);
      g.material.opacity = e * (1 - near * .96);
      g.visible = g.material.opacity > .004;
    });
  }
  /* the cut-out layers dissolve as the camera reaches them, so the path can
     walk straight through the garden instead of steering around the veil */
  if (WORLD.fg) WORLD.fg.forEach(m => {
    const a = smooth(.9, 4.6, camera.position.z - m.position.z);
    m.material.opacity = a;
    m.visible = a > .006;
  });
  updateLeaves(dt);
  updateWisps(dt);
  if (CARDS.length) CARDS.forEach(C => { const u = C.cam.userData; u.push = damp(u.push, u.want, 3.4, dt); });
}

let FRAME = 0;
function render() {
  FRAME++;
  renderer.setRenderTarget(WANT_POST ? POST.scene : null);
  renderer.clear(true, true, false);
  renderer.render(scene, camera);
  renderCards(WANT_POST ? POST.scene : null);
  renderer.setRenderTarget(null);
  if (WANT_POST) {
    POST.comp.uniforms.uT.value = clock;
    POST.comp.uniforms.uFade.value = fadeIn;
    renderPost();
  }
}

function frame(now) {
  if (!running) return;
  const raw = (now - tPrev) / 1000 || 0;
  const dt = Math.min(raw, .05);              /* animation never jumps … */
  tPrev = now; clock += dt;
  fadeIn = INTRO.t0 ? sat((now - INTRO.t0) / 700) : 1;

  if (!PERF.locked && clock > 2.2) {
    PERF.acc += raw; PERF.n++;      /* … but the governor reads the truth */
    if (PERF.n >= 40 || PERF.acc > .9) {
      const avg = PERF.acc / PERF.n; PERF.acc = 0; PERF.n = 0;
      if (avg > .0230 && PERF.scale > .55) { PERF.scale = Math.max(.55, PERF.scale * (avg > .05 ? .64 : .85)); resize(); }
      else if (avg < .0138 && PERF.scale < 1) { PERF.scale = Math.min(1, PERF.scale + .08); resize(); }
    }
  }
  RIG.prog = progressFor(scrollY);
  RIG.smooth = REDUCE ? RIG.prog : damp(RIG.smooth, RIG.prog, 5.2, dt);
  RIG.mx = damp(RIG.mx, RIG.tmx, 2.6, dt);
  RIG.my = damp(RIG.my, RIG.tmy, 2.6, dt);
  if (INTRO.t0) {
    const el = (now - INTRO.t0) / 1000;
    RIG.intro = sat(el / 2.4);
    WORD.reveal = Math.min(1.2, el / 1.5);
  }

  applyCamera();
  updateWorld(dt);
  render();
  queue();
}
const TIMER = qs('driver', 'raf') === 'timer';
function queue() { TIMER ? setTimeout(() => frame(performance.now()), 16) : requestAnimationFrame(frame); }

/* ======================================================== 14 · booting */
const JOBS = [
  ['Reading the type', () => document.fonts && document.fonts.load('600 320px Wordmark')],
  ['Pouring the ground', () => { initGL(); WORLD.uT = { value: 0 }; buildRig(); buildLights(); }],
  ['Cutting the approach', () => buildShell()],
  ['Raising the hall', () => buildTemple()],
  ['Hanging the moon', () => buildMoon()],
  ['Setting the gate', () => buildTorii()],
  ['Placing the stones', () => {
    buildRocks();
    buildLantern(7.4, -7.0, 1.15); buildLantern(-7.6, -5.2, 1.0);
    /* The pairs flanking the flight were given flat heights — 2 and PODIUM —
       and the flight does not reach either at those depths, so both pairs hung
       in the air. Solve the step under each one from the same constants the
       treads and cheeks are built from, and they stand on the rail instead of
       beside it. */
    const stepAt   = z => Math.max(0, (STAIR_Z0 - z) / STAIR_RUN - .5);
    const cheekTop = z => (stepAt(z) + 1) * (PODIUM / STEPS) + .45;
    const cheekX   = z => (STAIR_W + (STEPS - stepAt(z)) * .052) / 2 + .45;
    [-14.4, -23.5].forEach((z, i) => {
      const sc = i ? .95 : .90;
      buildLantern( cheekX(z), z, sc, cheekTop(z));
      buildLantern(-cheekX(z), z, sc, cheekTop(z));
    });
  }],
  ['Growing the maples', () => {
    buildMaple(71, 12.6, -13.0, 1.05); buildMaple(72, -11.8, -9.4, .95);
    buildMaple(73, 9.2, -19.0, .82);   buildMaple(74, -14.5, -17.5, 1.0);
    buildMaple(75, 16.5, -6.0, .88);
  }],
  ['Painting the near grass', () => buildForeground()],
  ['Cutting the word', () => buildWordmark()],
  ['Raising the mist', () => { buildAtmosphere(); buildLeafFall(); buildWisps(); }],
  ['Polishing the water', () => {
    initPost(); buildCards(); buildCardCloth();
    WORLD.fg.forEach(m => m.layers.set(1));
    WORD.glyphs.forEach(m => m.layers.set(2));
    if (WORLD.rain) WORLD.rain.layers.set(1);
    /* the fall is all around the rig, including behind it — mirroring it
       would drop leaves into the water that are nowhere near the water */
    if (WORLD.leaves) WORLD.leaves.mesh.layers.set(1);
    WORLD.ripples.forEach(r => r.layers.set(1));
    layoutWord(); measure();
    /* nothing that casts a shadow ever moves, so bake it once */
    if (WANT_SHADOW && WORLD.key) { WORLD.key.shadow.autoUpdate = false; WORLD.key.shadow.needsUpdate = true; }
  }]
];

function boot() {
  makeGrain();
  wireReveals(); wireForegroundStages(); wireNav(); wireHeroExit(); wireFocus(); wireCursor();
  document.body.classList.add('is-locked');
  let i = 0;
  const step = () => {
    const j = JOBS[i];
    const done = () => {
      i++;
      const p = i / JOBS.length;
      preFill.style.right = ((1 - p) * 100).toFixed(1) + '%';
      prePct.textContent = Math.round(p * 100);
      if (i < JOBS.length) setTimeout(step, 16); else setTimeout(start, 220);
    };
    let r;
    try { r = j[1](); }
    catch (err) {
      console.error('[kage] job "' + j[0] + '" failed', err);
      if (i <= 1) return fallback(err);          /* no renderer, no scene */
    }
    (r && r.then) ? r.then(done, done) : done();
  };
  setTimeout(step, 60);
}

function fallback(err) {
  document.documentElement.classList.add('no-webgl');
  document.body.classList.add('no-webgl');
  document.body.classList.remove('is-locked');
  preEl.classList.add('done');
  $$('[data-rv], .mask-line').forEach(e => e.classList.add('rv-in'));
  window.__kage = window.__secret = { fallback: true, error: String(err && err.message || err) };
}

function start() {
  addEventListener('resize', () => { resize(); }, { passive: true });
  addEventListener('orientationchange', () => setTimeout(resize, 250));
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { running = false; }
    else if (!running) { running = true; tPrev = performance.now(); queue(); }
  });
  resize();

  const shot = Q.get('shot');
  if (shot !== null) {                       /* deterministic states for review */
    RIG.intro = 1; WORD.reveal = 1.2; fadeIn = 1; INTRO.t0 = 0;
    const n = clamp(parseInt(shot, 10) || 0, 0, SECS.length - 1);
    scrollTo(0, anchors[n]);
    RIG.smooth = RIG.prog = progressFor(anchors[n]);
    $$('[data-rv], .mask-line').forEach(e => e.classList.add('rv-in'));
    document.body.classList.remove('is-locked');
    preEl.classList.add('done');
  } else {
    preEl.classList.add('done');
    setTimeout(() => {
      document.body.classList.remove('is-locked');
      $('#hero').querySelectorAll('[data-rv], .mask-line').forEach((e, i) =>
        setTimeout(() => e.classList.add('rv-in'), REDUCE ? 0 : 120 + i * 95));
    }, REDUCE ? 0 : 340);
  }
  running = true; tPrev = performance.now();
  INTRO.t0 = shot !== null ? 0 : (REDUCE ? performance.now() - 4000 : performance.now());
  queue();
  window.__kage = window.__secret = { RIG: RIG, WORLD: WORLD, WORD: WORD, CAM: CAM, POST: POST, renderer: renderer, scene: scene, camera: camera, anchors: () => anchors };
}

if (document.readyState === 'complete' || document.readyState === 'interactive') setTimeout(boot, 0);
else addEventListener('DOMContentLoaded', boot);
})();
<\/script>
</body>
</html>
`,Ng=`@font-face {
  font-family: 'Noto Naskh Arabic';
  src: url('/fonts/noto-naskh-arabic.ttf') format('truetype');
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

/* Arabic is shaped as connected words: no tracking or vertical glyph layout. */
[lang="ar"], .jp[lang="ar"], .les h3 em[lang="ar"] {
  font-family: 'Noto Naskh Arabic', 'Geeza Pro', Tahoma, serif;
  font-weight: 400;
  letter-spacing: 0 !important;
  text-transform: none;
  font-style: normal;
  direction: rtl;
  unicode-bidi: isolate;
  writing-mode: horizontal-tb;
  line-height: 1.6;
}
.pre-jp[lang="ar"] { font-size: 24px; }
.hero-side .v[lang="ar"] {
  writing-mode: horizontal-tb;
  transform: rotate(-90deg);
  white-space: nowrap;
  font-size: 20px;
  transform-origin: center;
}
.hero-side { right: 0; }
body[data-layout-hero="b"] .hero-side .v[lang="ar"] {
  font-size: clamp(24px, 3.2vw, 46px);
  transform: none;
}
.sec-head .k[lang="ar"], .card-lab .jp[lang="ar"] { font-size: 17px; }
.peek-cap b[lang="ar"] { font-size: 16px; white-space: nowrap; }
.peek-cap { flex-wrap: wrap; row-gap: 0; }
.les h3 em[lang="ar"] { display: inline-block; font-size: 17px; }
.foot-base [lang="ar"] { font-size: 19px; }
.nav-link, .nav-link span { height: 24px; line-height: 24px; }
.nav-link .alt[lang="ar"] { font-size: 17px; line-height: 24px; }
@media (max-width: 820px) {
  .nav-links .nav-link { height: auto; }
  .nav-links .nav-link .alt[lang="ar"] { font-size: 18px; line-height: 1.6; text-align: left; }
  .hero-side .v[lang="ar"] { font-size: 18px; }
  body[data-layout-hero="b"] .hero-side { top: 76px; right: var(--pad); }
  body[data-layout-hero="b"] .hero-side .v[lang="ar"] { font-size: 18px; }
}
`,Bg=`/* Portfolio layer over the original Kage world and scroll choreography. */
.portfolio-site{--muted:#a2aaa6;--bone-dim:#c4cdc7}
.portfolio-site .body{font-size:16px!important;line-height:1.75}
.portfolio-site .body-lg{font-size:17px!important;line-height:1.75}
.portfolio-site .eyebrow{font-size:12px;letter-spacing:.14em}
.portfolio-site .brand-tx b{font-size:14px;letter-spacing:.14em;text-transform:uppercase}
.portfolio-site .brand-tx i{font-size:9px;letter-spacing:.16em}
.portfolio-site .nav-link{font-size:12px}
.portfolio-site .nav-burger{display:none}
.portfolio-site .hero-top{max-width:min(680px,52vw)!important;padding-top:calc(var(--nav-h) + 35px)}
.portfolio-site .hero-sub{max-width:460px}
.hero-actions{display:flex;gap:28px;align-items:center;margin-top:25px}
.portfolio-button{display:inline-flex;justify-content:center;align-items:center;min-height:46px;padding:11px 22px;border:1px solid rgba(223,231,224,.38);background:rgba(5,7,10,.5);font-size:14px;font-weight:400;line-height:1.5;transition:background .25s,border-color .25s;color:var(--bone);cursor:pointer}
.portfolio-button:hover{background:#e0231c;border-color:#e0231c;color:white}
.portfolio-button:disabled{opacity:.55;cursor:wait}
.text-link{font-size:14px;border-bottom:1px solid #7c8680;padding-bottom:4px}
.portfolio-site .hero-side .jp{font-size:clamp(28px,3vw,46px);color:var(--bone-dim)}
.portfolio-site .hero-foot{width:min(760px,65vw)!important}
.portfolio-site .chapters{gap:24px!important}
.portfolio-site .chip{flex-direction:row!important;gap:12px!important;align-items:center}
.portfolio-site .chip .num{font-size:26px!important}
.portfolio-site .chip .tx{position:static!important;width:auto!important;height:auto!important;overflow:visible!important;clip:auto!important;clip-path:none!important;white-space:normal!important}
.portfolio-site .chip b{font-size:12px;letter-spacing:.1em;margin:0}
.portfolio-site .chip p{display:none}
.portfolio-site .peek{width:clamp(120px,11vw,170px);bottom:38px!important}
.portrait-frame{display:block;aspect-ratio:1;overflow:hidden;border:1px solid var(--line);background:#15191b}
.portrait-frame img{width:100%;height:100%;object-fit:cover;filter:grayscale(1);transition:filter .4s}
.peek:hover .portrait-frame img{filter:grayscale(0)}
.portfolio-site .peek-cap{display:block}
.portfolio-site .peek-cap b{font-size:12px}
.portfolio-site .peek-cap i{display:block;font-size:10px;letter-spacing:.06em}
.portfolio-site .sec{padding-top:110px;padding-bottom:110px}
.portfolio-site .sec::before{background:linear-gradient(180deg,rgba(5,7,10,.82),rgba(5,7,10,.92) 50%,rgba(5,7,10,.8));inset:0}
.portfolio-site .sec-head .k{font-size:12px;letter-spacing:.14em}
.portfolio-site .sec-head .k[lang=ar]{font-size:20px;white-space:nowrap}
.portfolio-site .gate-grid{grid-template-columns:1.1fr 1fr!important;gap:7vw!important}
.portfolio-site .gate-grid h2,.portfolio-site .gate-copy{grid-column:auto!important;max-width:none!important}
.portfolio-site .h-sec{font-size:clamp(30px,4vw,58px)!important;line-height:1.12}
.portfolio-site .gate-stats{grid-template-columns:repeat(4,1fr)!important;margin-top:58px}
.portfolio-site .gate-stats div{padding:24px 16px!important;min-height:110px!important}
.portfolio-site .gate-stats b{font-size:clamp(21px,2.3vw,34px)}
.portfolio-site .gate-stats span{font-size:12px;letter-spacing:.02em}
.principles{display:grid;grid-template-columns:repeat(4,1fr);gap:32px;margin-top:58px}
.small-index{font-size:12px;color:#df6155}
.principles h3{font-size:18px;margin:10px 0}
.principles p{font-size:15px;line-height:1.7;color:#aeb8b1;margin:0}
.client-strip{margin-top:70px;padding-top:25px;border-top:1px solid var(--line)}
.client-logos{display:flex;align-items:center;flex-wrap:wrap;gap:28px;margin-top:24px}
.client-logos img{width:120px;height:54px;object-fit:contain;filter:grayscale(1);background:#e8e9e7;padding:9px;opacity:.8}
.work-heading{display:flex;align-items:end;justify-content:space-between;gap:40px;margin-bottom:36px}
.work-heading p{max-width:350px;margin:0}
.project-toolbar{display:flex;justify-content:space-between;align-items:center;gap:16px;border-top:1px solid var(--line);padding:22px 0 30px}
.project-filters{display:flex;gap:8px;flex-wrap:wrap}
.project-filters button{padding:9px 15px;border:1px solid transparent;font-size:14px;color:#aeb8b1;transition:.2s}
.project-filters button[aria-pressed=true]{border-color:#ad302b;color:#f3f4f0;background:rgba(224,35,28,.12)}
.project-filters button:hover{color:white;background:rgba(255,255,255,.06)}
#project-count{font-size:12px;color:#aeb8b1;white-space:nowrap}
.projects-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:35px 25px;position:relative;z-index:2}
.project-card[hidden]{display:none}
.project-preview{width:100%;padding:0;text-align:left;display:block}
.project-image{position:relative;display:block;aspect-ratio:1.6;overflow:hidden;background:#121819;border:1px solid var(--line)}
.project-image img{width:100%;height:100%;object-fit:cover;object-position:top;opacity:.85;transition:transform .65s,opacity .4s}
.project-preview:hover img,.project-preview:focus-visible img{transform:scale(1.045);opacity:1}
.preview-label{position:absolute;bottom:12px;right:12px;background:#080d0de8;border:1px solid #6b7570;padding:5px 10px;font-size:12px;opacity:0;transform:translateY(5px);transition:.25s}
.project-preview:hover .preview-label,.project-preview:focus-visible .preview-label{opacity:1;transform:none}
.project-info{display:block;position:relative;padding:19px 30px 0 0}
.project-category{display:block;font-size:12px;color:#aeb8b1;margin-bottom:7px}
.project-title{display:block;font-size:20px;line-height:1.35;font-weight:400}
.project-index{position:absolute;right:0;top:20px;font-size:12px;color:#9a5c54}
#project-dialog{width:min(940px,92vw);max-height:90dvh;padding:0;background:#0b1013;border:1px solid #46504b;color:var(--bone);overflow:auto}
#project-dialog::backdrop{background:rgba(0,0,0,.85);backdrop-filter:blur(8px)}
.dialog-close{position:sticky;top:12px;float:right;z-index:2;margin:12px;background:#070c0e;padding:8px 14px;border:1px solid #5f6862;font-size:14px}
#project-dialog-image{width:100%;max-height:58vh;object-fit:contain;background:#12191b;clear:both}
.dialog-copy{padding:26px 32px 34px}.dialog-copy h2{font-size:30px}.dialog-copy>p:not(.eyebrow){font-size:16px;color:#bac3bd;line-height:1.7}
.portfolio-site .cur-head{grid-template-columns:1.2fr 1fr!important;margin-bottom:44px}
.experience-row{display:grid;grid-template-columns:240px 1fr;gap:40px;border-top:1px solid var(--line);padding:32px 0}
.experience-date{font-size:14px;color:#c9746a;margin:4px 0}
.experience-row h3{font-size:23px}
.experience-row div p{font-size:16px;line-height:1.8;color:#b1bbb4;max-width:800px;margin:14px 0 0}
.education-row{padding:30px;border:1px solid var(--line);margin-top:24px;background:#090f12a8}
.education-row h3{font-size:24px;margin:13px 0 9px}.education-row p{font-size:16px;color:#b1bbb4;margin:0}
.toolkit{margin-top:65px}.toolkit-title{font-size:26px;display:flex;gap:24px;align-items:center}.toolkit-title .jp{font-size:24px;color:#b1bbb4}
.toolkit-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0 40px;margin-top:24px}
.toolkit-grid>div{border-top:1px solid var(--line);padding:22px 0}.toolkit-grid h4{font-size:15px;font-weight:500;margin:0 0 12px}.toolkit-grid p{font-size:16px;color:#aeb8b1;line-height:1.8;margin:0}
.portfolio-site #eternity{display:block;text-align:left;min-height:0}
.contact-layout{display:grid;grid-template-columns:1.1fr 1fr;gap:8vw;align-items:start}
.portfolio-site #eternity h2{writing-mode:horizontal-tb;font-size:clamp(36px,4.2vw,68px);line-height:1.1;max-width:none}
.portfolio-site #eternity p{max-width:none;margin:24px 0 30px}
.contact-email{display:inline-block;font-size:clamp(16px,1.8vw,26px);border-bottom:1px solid #a54b43;padding-bottom:8px;overflow-wrap:anywhere}
.contact-details{display:flex;flex-direction:column;gap:12px;margin-top:24px;font-size:16px;color:#aeb8b1}
.social-links{display:flex;gap:28px;font-size:14px;margin-top:30px}.social-links a{border-bottom:1px solid #59645d;padding-bottom:4px}
.contact-form{display:flex;flex-direction:column;padding:30px;border:1px solid var(--line);background:#080d10dc}
.contact-form label{font-size:14px;margin-bottom:10px}
.contact-form input:not([type=hidden]),.contact-form textarea{width:100%;font:inherit;font-size:16px;line-height:1.5;color:var(--bone);background:#101619;border:1px solid #39403d;padding:13px 15px;border-radius:0;margin-bottom:24px}
.contact-form textarea{resize:vertical;min-height:130px}
.contact-form input::placeholder,.contact-form textarea::placeholder{color:#87948c}
.contact-form .honeypot{display:none!important}
.portfolio-site #contact-status{font-size:14px;line-height:1.65;min-height:1.65em;margin:16px 0 0}
.portfolio-site .foot{background:rgba(5,7,10,.94);padding-top:40px;padding-bottom:30px}
.portfolio-footer{display:flex;align-items:center;justify-content:space-between;gap:25px;font-size:14px}
.footer-name{font-size:20px;display:flex;gap:20px;align-items:center}.footer-name .jp{font-size:22px;color:#aeb8b1}
.portfolio-footer p{color:#aeb8b1;margin:0}.portfolio-site .foot-base{display:flex!important;margin-top:30px;font-size:12px;letter-spacing:.04em}
.portfolio-site .rail{right:9px}.portfolio-site .rail button{width:14px}.portfolio-site .rail i{width:7px}.portfolio-site .rail button.on i{width:14px}
a:focus-visible,button:focus-visible,input:focus-visible,textarea:focus-visible{outline:2px solid #e2685d;outline-offset:5px}
@media(max-width:1080px){
 .portfolio-site .hero-top{max-width:72vw!important}.portfolio-site .gate-grid{grid-template-columns:1fr!important;gap:26px!important}
 .principles{grid-template-columns:1fr 1fr}.projects-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
 .contact-layout{gap:40px}.experience-row{grid-template-columns:180px 1fr;gap:28px}
 .portfolio-site .hero-side .jp{font-size:28px}
}
@media(max-width:820px){
 .portfolio-site .nav-burger{display:block}.portfolio-site .nav-link{font-size:17px}
 .portfolio-site .hero-top{max-width:none!important;padding-top:calc(var(--nav-h) + 38px)}
 .portfolio-site .hero-top .eyebrow{font-size:11px;letter-spacing:.08em;max-width:100%}
 .portfolio-site .hero-side{top:77px!important}.portfolio-site .hero-side .jp{font-size:21px}
 .portfolio-site .hero-foot{width:100%!important}.portfolio-site .hero-spacer{min-height:190px}
 .portfolio-site .chip .num{font-size:23px!important}.portfolio-site .chapters{gap:22px 14px!important}
 .portfolio-site .sec{padding-top:75px;padding-bottom:75px}
 .portfolio-site .gate-stats{grid-template-columns:1fr 1fr!important}
 .portfolio-site .gate-stats div{border-bottom:1px solid var(--line)}
 .work-heading{display:block}.work-heading p{margin-top:22px}
 .project-toolbar{align-items:start;flex-direction:column}.project-filters button{padding:8px 10px;font-size:13px}
 .portfolio-site .cur-head{grid-template-columns:1fr!important;gap:20px}
 .contact-layout{grid-template-columns:1fr}.portfolio-site #eternity h2{font-size:44px}
 .portfolio-footer{flex-wrap:wrap}.portfolio-footer p{width:100%;order:3}
 .toolkit-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:560px){
 .portfolio-site .brand-tx b{font-size:12px}.portfolio-site .brand-tx i{font-size:8px}
 .portfolio-site .h-hero{font-size:32px!important;line-height:1.1}
 .hero-actions{gap:22px}.portfolio-button{padding:10px 16px;font-size:13px}
 .portfolio-site .body,.portfolio-site .body-lg{font-size:16px!important}
 .portfolio-site .hero-sub{max-width:100%}.portfolio-site .hero-foot{padding-bottom:30px}
 .portfolio-site .chip b{font-size:11px;letter-spacing:.04em}
 .portfolio-site .hero-spacer{min-height:180px}.portfolio-site .hero-cue{font-size:10px;letter-spacing:.16em}
 .portfolio-site .sec-head .k{font-size:10px;letter-spacing:.09em}.portfolio-site .sec-head .k[lang=ar]{font-size:18px}
 .portfolio-site .gate-stats div{padding:18px 12px!important}.portfolio-site .gate-stats b{font-size:21px}.portfolio-site .gate-stats span{font-size:12px}
 .principles{grid-template-columns:1fr;gap:26px}.principles p{font-size:16px}
 .client-logos{gap:16px}.client-logos img{width:calc((100% - 32px)/3);height:45px}
 .projects-grid{grid-template-columns:1fr;gap:30px}.project-title{font-size:21px}.preview-label{opacity:1;transform:none}
 .experience-row{grid-template-columns:1fr;gap:14px;padding:28px 0}.experience-row h3{font-size:21px}
 .education-row{padding:23px}.toolkit-grid{grid-template-columns:1fr}.contact-form{padding:22px}
 .footer-name{font-size:17px;gap:15px}.dialog-copy{padding:22px}.dialog-copy h2{font-size:25px}
 .portfolio-site .no-webgl .word-fb{font-size:16vw}
}
/* Data portfolio: retain the animated world and make the case studies easier to scan. */
.project-card:nth-child(-n+2) .project-image{border-color:#b9584b;box-shadow:0 12px 36px #0004}
.project-card:nth-child(-n+2) .project-category{color:#e6a196}
#project-demo{margin:8px 20px 18px 0;background:#9e3029;border-color:#be6257}
#project-demo[hidden]{display:none}
.portfolio-site .project-filters{max-width:90%}
.portfolio-site .hero-sub{max-width:520px}
.portfolio-site .project-image img[src$=".svg"]{object-fit:cover;opacity:1}
`,Ug=`(() => {
  const projects=JSON.parse(document.getElementById('portfolio-project-data').textContent);
  const cards=[...document.querySelectorAll('.project-card')];
  const filters=[...document.querySelectorAll('[data-filter]')];
  filters.forEach(button=>button.addEventListener('click',()=>{
    const selected=button.dataset.filter;
    filters.forEach(filter=>filter.setAttribute('aria-pressed',String(filter===button)));
    let count=0;
    cards.forEach(card=>{card.hidden=selected!=='All'&&card.dataset.category!==selected;if(!card.hidden)count++;});
    document.getElementById('project-count').textContent=\`\${count} \${count===1?'project':'projects'}\`;
    window.dispatchEvent(new Event('resize'));
  }));
  const dialog=document.getElementById('project-dialog');
  document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
    const project=projects[Number(button.dataset.project)];
    document.getElementById('project-dialog-title').textContent=project.name;
    document.getElementById('project-dialog-category').textContent=project.category;
    document.getElementById('project-dialog-description').textContent=project.description;
    const img=document.getElementById('project-dialog-image');img.src=(document.documentElement.dataset.assetBase||'/')+'portfolio/'+encodeURIComponent(project.image);img.alt=project.name+' screenshot';
    document.getElementById('project-enquiry').href='mailto:sahilsheakh86@gmail.com?subject='+encodeURIComponent('Enquiry about '+project.name);
    const demo=document.getElementById('project-demo');
    demo.hidden=!project.demo;
    if(project.demo)demo.href=document.documentElement.dataset.assetBase+project.demo;
    else demo.removeAttribute('href');
    dialog.showModal();
  }));
  dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{const b=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<b.left||event.clientX>b.right||event.clientY<b.top||event.clientY>b.bottom))dialog.close();});
  const form=document.getElementById('contact-form'),status=document.getElementById('contact-status');
  form.addEventListener('submit',async event=>{
    event.preventDefault();if(!form.reportValidity())return;
    const button=form.querySelector('button[type="submit"]');button.disabled=true;button.textContent='Sending…';status.textContent='';
    try {
      const response=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'},signal:AbortSignal.timeout(20000)});
      const result=await response.json();if(!response.ok||!result.success)throw new Error('Message not accepted');
      status.textContent='Thank you. Your message has been sent.';form.reset();
    }catch{status.textContent='Your message could not be sent. Please try again or email sahilsheakh86@gmail.com.';}
    finally{button.disabled=false;button.textContent='Send message';}
  });
})();
`,bt={name:"Saheel Sheakh",arabicName:"سهيل شيخ",role:"Data Engineer",location:"Riyadh, Saudi Arabia",email:"sahilsheakh86@gmail.com",phone:"+966 54 715 5216",phoneHref:"tel:+966547155216",github:"https://github.com/saheelshaikh",linkedin:"https://www.linkedin.com/in/mohammedsahee186/"},ys=[{name:"Sales Performance Analytics",category:"Data Analysis",image:"sales-demo.svg",demo:"data-lab/index.html#sales",description:"Interactive portfolio demo using 180 synthetic sales records. Filter by region and category, explore revenue and gross margin, and download the CSV and reproducible SQL queries. Built as a sample project, not client work."},{name:"Order Data Quality Audit",category:"Data Quality",image:"quality-demo.svg",demo:"data-lab/index.html#quality",description:"Interactive portfolio demo using deliberately corrupted synthetic order data. Run field validation and duplicate detection, inspect rejected records, and export a clean CSV. This demonstrates validation logic in the browser, not a production ETL deployment."},{name:"Receipt OCR & Quality Validation",category:"Data Quality",image:"crm.png",description:"Automated receipt OCR and quality validation using Python."},{name:"Gemini AI Chatbot",category:"AI & Automation",image:"chart.png",description:"A conversational AI chatbot built with Gemini."},{name:"Limamar",category:"Business Systems",image:"limamar.png",description:"A business systems project for Limamar."},{name:"Tagfelson",category:"Web Applications",image:"tagfelson.png",description:"A web application project for Tagfelson."},{name:"Codezaa",category:"Web Applications",image:"codezaa-site.png",description:"A web application project for Codezaa."},{name:"Wisdom World",category:"Web Applications",image:"wisdom-site.png",description:"A web application project for Wisdom World."},{name:"Driving School",category:"Web Applications",image:"driving school.png",description:"A driving school web application."},{name:"Short Video Factory",category:"AI & Automation",image:"Editing.png",description:"An AI video editing application for short-form video processing."},{name:"Lansview",category:"Web Applications",image:"lansview.png",description:"A web application project for Lansview."}],Gg=[{title:"Software Engineer — CRM & Automation",date:"Jan 2025 — Present",body:"Build CRM and workflow automation systems, operational dashboards, and reporting tools. Integrate third-party APIs and own deployment, troubleshooting, optimization, and ongoing production improvements."},{title:"Junior Full-Stack Developer",date:"Jun 2024 — Dec 2024",body:"Delivered 15+ client projects using MERN and Laravel. Built CRM, ERP, and business automation solutions, integrated OpenAI and Gemini, and developed REST APIs and database-driven applications."},{title:"WordPress Developer",date:"2024 · Freelance",body:"Built and maintained client websites and customized web applications. Improved performance, SEO, and user experience, managing projects from requirements through deployment."}],jg=[["Data & databases","SQL · PostgreSQL · MySQL · MongoDB"],["Programming","Python · JavaScript · REST APIs"],["Reporting background","Operational dashboards · CRM reporting · Business workflows"],["Automation","n8n · API integrations · OpenAI · Gemini"],["Engineering foundation","Git · Docker · AWS · Full-stack development"]],Ke=m=>String(m).replace(/[&<>"']/g,R=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[R]),Yi=m=>`<span class="jp" lang="ar" dir="rtl">${m}</span>`,El=new URL("/portfolio/",window.location.href).href,xs=m=>`${El}portfolio/${encodeURIComponent(m)}`,Xi=(m,R,T)=>`<div class="sec-head" data-rv="fade"><span class="k"><b>${m}</b> — ${R}</span><span class="rule"></span><span class="k jp" lang="ar" dir="rtl">${T}</span></div>`,Yf=(m,R)=>`<a href="${m}" target="_blank" rel="noopener noreferrer" data-cursor>${R}</a>`;function Wg(){const m=Lg.replace("const word = 'KAGE', gl = [];","const word = 'SAHEEL', gl = [];").replace("const names = ['The Hidden Gate', 'The Sanmon', 'Still Gardens', 'Sacred Craft', 'Afterlight', 'Colophon'];","const names = ['Introduction', 'About', 'Selected work', 'Experience', 'Contact', 'Footer'];"),R=new DOMParser().parseFromString(m,"text/html"),T=O=>R.querySelector(O),d=(O,H)=>{T(O).innerHTML=H},C=(O,H)=>{const X=T(O),mt=X.querySelector(".fg");X.replaceChildren(),mt&&X.appendChild(mt),X.insertAdjacentHTML("beforeend",H)};R.title=`${bt.name} · ${bt.role}`,T('meta[name="description"]').content="Saheel Sheakh — Data Engineer in Riyadh with a software engineering background. Explore data analysis, SQL, reporting, automation, and data quality demonstrations.",T('link[rel="icon"]').href=El+"favicon.svg",R.documentElement.dataset.assetBase=El;const L=R.createElement("base");L.href=El+"landing-pages/",R.head.prepend(L);const q=R.createElement("style");q.textContent=Ng.replaceAll("/fonts/",El+"fonts/")+`
`+Bg,R.head.appendChild(q),R.body.classList.add("portfolio-site"),d(".pre-jp",Yi(bt.arabicName)),T(".pre-meta > span").textContent="Building what comes next",d(".brand-tx",`<b>${bt.name}</b><i>DATA ENGINEERING · SQL · PYTHON</i>`),T(".brand").setAttribute("aria-label",`${bt.name} — back to top`),d("#navlinks",[["gate","About","نبذة"],["pathways","Work","أعمالي"],["lessons","Experience","الخبرة"],["eternity","Contact","تواصل"]].map(([O,H,X])=>`<a class="nav-link" href="#${O}" data-cursor><span>${H}</span><span class="alt" lang="ar" dir="rtl">${X}</span></a>`).join("")),d(".hero-top",`<div class="eyebrow" data-rv="fade">${bt.role} · RIYADH</div><h1 class="display h-hero"><span class="mask-line"><span>Better data.</span></span><span class="mask-line"><span>Reliable systems.</span></span></h1><p class="hero-sub body" data-rv="up">Focused on reliable data workflows, quality checks, and automation.<br>SQL, Python, and a software engineering foundation.</p><div class="hero-actions" data-rv="up"><a class="portfolio-button" href="#pathways" data-cursor>Explore my work</a><a class="text-link" href="#eternity" data-cursor>Let’s talk</a></div>`),d(".hero-side",Yi(bt.arabicName)),T(".word-fb").textContent="SAHEEL",T(".hero-cue > span").textContent="Explore the portfolio",d("#chips",[["gate","About me","An engineering foundation. A focus on data."],["pathways","Selected work","Analysis, data quality, and automation."],["lessons","Experience","Reporting and software delivery."],["eternity","Let’s connect","Based in Riyadh. Built for real work."]].map(([O,H,X],mt)=>`<a class="chip" href="#${O}" data-chip="${mt}" data-rv="up" data-cursor><span class="num">0${mt+1}</span><span class="tx"><b>${H}</b><p>${X}</p></span></a>`).join(""));const Q=T(".peek");Q.removeAttribute("data-view"),Q.href="#gate",Q.setAttribute("aria-label",`Meet ${bt.name}`),Q.innerHTML=`<span class="portrait-frame"><img src="${xs("saheel.png")}" alt="${bt.name}" width="320" height="320"></span><span class="peek-cap"><b>SAHEEL</b><i>${bt.location}</i></span>`,C("#gate",`${Xi("01","Behind the work","نبذة عنّي")}
    <div class="gate-grid"><h2 class="display h-sec" data-rv="up">Engineering roots.<br> A focus on data.</h2><div class="gate-copy"><p class="lead" data-rv="up">I’m ${bt.name}, a software engineer now focusing on data engineering opportunities in Riyadh.</p><p class="body" data-rv="up">My background includes CRM systems, operational dashboards, reporting tools, databases, and automation. I’m bringing that experience into work focused on preparing reliable data, connecting systems, and making reporting repeatable.</p><p class="body" data-rv="up">Data engineering · SQL · Databases · Data quality · Automation</p></div></div>
    <div class="gate-stats" data-rv="up"><div><b>15+</b><span>Client projects delivered</span></div><div><b>SQL + Python</b><span>Data-focused toolkit</span></div><div><b>2 data demos</b><span>Explore the sample projects</span></div><div><b>Riyadh</b><span>Saudi Arabia</span></div></div>
    <div class="principles">${[["01","Start with the question","Define the business question, the metric, and the decision the analysis should support."],["02","Check the data","Look for missing values, repeated records, invalid amounts, and inconsistent definitions before drawing conclusions."],["03","Explain the finding","Use clear comparisons and practical context to explain what changed and why it matters."],["04","Make it repeatable","Keep the source data, calculations, and assumptions accessible so the result can be checked and repeated."]].map(([O,H,X])=>`<article data-rv="up"><span class="small-index">${O}</span><h3>${H}</h3><p>${X}</p></article>`).join("")}</div>
    <div class="client-strip" data-rv="fade"><p class="eyebrow">Previous software work for businesses</p><div class="client-logos">${[["Limamar-Logo.png","Limamar"],["TAGF LOGO.jpg","Tagfelson"],["wisdom.png","Wisdom"],["codezaa.png","Codezaa"],["7h.png","7H"]].map(([O,H])=>`<img src="${xs(O)}" alt="${H}" loading="lazy">`).join("")}</div></div>`),C("#pathways",`${Xi("02","Selected work","أعمالي")}
    <div class="work-heading"><h2 class="display h-sec" data-rv="up">Explore the evidence.</h2><p class="body-lg" data-rv="up">Interactive data demos, existing automation work, and earlier web projects. Sample datasets are clearly labeled.</p></div>
    <div class="project-toolbar"><div class="project-filters" role="group" aria-label="Filter projects">${["All","Data Analysis","Data Quality","AI & Automation","Business Systems","Web Applications"].map((O,H)=>`<button type="button" data-filter="${Ke(O)}" aria-pressed="${H===0}" data-cursor>${Ke(O)}</button>`).join("")}</div><span id="project-count" role="status">${ys.length} projects</span></div>
    <div class="projects-grid" id="cards">${ys.map((O,H)=>`<article class="project-card" data-category="${Ke(O.category)}"><button type="button" class="project-preview" data-project="${H}" data-cursor aria-label="Preview ${Ke(O.name)}"><span class="project-image"><img src="${xs(O.image)}" alt="${Ke(O.name)} screenshot" loading="lazy" width="720" height="450"><span class="preview-label">View project</span></span><span class="project-info"><span class="project-category">${Ke(O.category)}${O.demo?" · SAMPLE DEMO":""}</span><span class="project-title">${Ke(O.name)}</span><span class="project-index">${String(H+1).padStart(2,"0")}</span></span></button></article>`).join("")}</div>
    <dialog id="project-dialog" aria-labelledby="project-dialog-title"><button type="button" class="dialog-close" aria-label="Close project preview">Close ×</button><img id="project-dialog-image" alt=""><div class="dialog-copy"><p id="project-dialog-category" class="eyebrow"></p><h2 id="project-dialog-title"></h2><p id="project-dialog-description"></p><a class="portfolio-button" id="project-demo" hidden target="_blank" rel="noopener">Open interactive demo</a><a class="text-link" id="project-enquiry" href="mailto:${bt.email}">Ask me about this project</a></div></dialog>`),C("#lessons",`${Xi("03","Experience & toolkit","الخبرة")}
    <div class="cur-head"><h2 class="display h-sec" data-rv="up">A foundation in<br> software and reporting.</h2><p class="body-lg" data-rv="up">Previous roles in software development, CRM reporting, and automation support my move toward data engineering.</p></div>
    <div class="experience-list" id="cur">${Gg.map((O,H)=>`<article class="experience-row" data-les="${H}" data-rv="up"><p class="experience-date">${O.date}</p><div><h3>${Ke(O.title)}</h3><p>${Ke(O.body)}</p></div></article>`).join("")}</div>
    <div class="education-row" data-rv="up"><span class="eyebrow">Education · 2020–2024</span><h3>B.Tech in Computer Science</h3><p>Srinivas University, Mangalore · GPA 8.3/10</p></div>
    <div class="toolkit"><h3 class="toolkit-title" data-rv="up">Technical toolkit ${Yi("أدواتي")}</h3><div class="toolkit-grid">${jg.map(([O,H])=>`<div data-rv="up"><h4>${O}</h4><p>${H}</p></div>`).join("")}</div></div>`),C("#eternity",`${Xi("04","Start a conversation","لنتواصل")}
    <div class="contact-layout"><div class="contact-copy"><h2 class="display" data-rv="up">Let’s make<br> data useful.</h2><p class="body-lg" data-rv="up">Open to data engineering opportunities and conversations about reporting, data quality, and automation.</p><a class="contact-email" href="mailto:${bt.email}" data-cursor>${bt.email}</a><div class="contact-details"><a href="${bt.phoneHref}">${bt.phone}</a><span>${bt.location}</span></div><div class="social-links">${Yf(bt.github,"GitHub")}${Yf(bt.linkedin,"LinkedIn")}</div></div>
    <form id="contact-form" class="contact-form" action="https://api.web3forms.com/submit" method="POST"><input type="hidden" name="access_key" value="fa8e6c04-d9a0-428c-b1f4-86f27463ed36"><input type="hidden" name="subject" value="New portfolio enquiry"><input type="checkbox" name="botcheck" tabindex="-1" autocomplete="off" class="honeypot"><label for="contact-name">Your name</label><input id="contact-name" name="fullname" autocomplete="name" placeholder="How should I address you?" required maxlength="120"><label for="contact-email">Email address</label><input id="contact-email" name="email" type="email" autocomplete="email" placeholder="you@company.com" required maxlength="254"><label for="contact-message">How can we connect?</label><textarea id="contact-message" name="message" rows="4" placeholder="Tell me about the role or data challenge." required maxlength="6000"></textarea><button class="portfolio-button" type="submit" data-cursor>Send message</button><p id="contact-status" role="status" aria-live="polite"></p></form></div>`),d(".foot",`<div class="portfolio-footer"><a href="#top" class="footer-name" data-cursor>${bt.name} ${Yi(bt.arabicName)}</a><p>Data engineering · SQL · Automation</p><a href="#top" data-cursor>Back to top</a></div><div class="foot-base"><span>© ${new Date().getFullYear()} ${bt.name}</span><span>${bt.location}</span><span class="jp" lang="ar" dir="rtl">من الفكرة إلى الواقع</span></div>`);const z=R.createElement("script");z.id="portfolio-project-data",z.type="application/json",z.textContent=JSON.stringify(ys).replaceAll("<","\\u003c"),R.body.appendChild(z);const w=R.createElement("script");return w.textContent=Ug,R.body.appendChild(w),`<!doctype html>
`+R.documentElement.outerHTML}const qg=Wg();function Yg(){return ws.createElement("div",{className:"shader-frame"},ws.createElement(_g,{headingFont:"onest",bodyFont:"onest",headingWeight:"400",bodyWeight:"300",primaryColor:"#e0231c",headingSize:46,bodySize:17,headingLetterSpacing:-.012,srcDoc:qg}))}wg.createRoot(document.getElementById("root")).render(ws.createElement(Yg,null));
