"use strict";(self.webpackChunkvertx_web_graphiql=self.webpackChunkvertx_web_graphiql||[]).push([[121,3],{1003:function(e,o,t){t.r(o),t.d(o,{C:function(){return u},c:function(){return a}});var n=t(1777);function r(e,o){for(var t=function(){var t=o[n];if("string"!=typeof t&&!Array.isArray(t)){var r=function(o){if("default"!==o&&!(o in e)){var n=Object.getOwnPropertyDescriptor(t,o);n&&Object.defineProperty(e,o,n.get?n:{enumerable:!0,get:function(){return t[o]}})}};for(var i in t)r(i)}},n=0;n<o.length;n++)t();return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(0,Object.defineProperty)(r,"name",{value:"_mergeNamespaces",configurable:!0});var i=(0,n.r)(),u=(0,n.g)(i),a=r({__proto__:null,default:u},[i])},2121:function(e,o,t){t.r(o);var n=t(1003),r=(t(1777),Object.defineProperty),i=function(e,o){return r(e,"name",{value:o,configurable:!0})};function u(e){return{options:e instanceof Function?{render:e}:!0===e?{}:e}}function a(e){var o=e.state.info.options;return(null==o?void 0:o.hoverTime)||500}function f(e,o){var t=e.state.info,r=o.target||o.srcElement;if(r instanceof HTMLElement&&"SPAN"===r.nodeName&&void 0===t.hoverTimeout){var u=r.getBoundingClientRect(),f=i((function(){clearTimeout(t.hoverTimeout),t.hoverTimeout=setTimeout(p,c)}),"onMouseMove"),s=i((function(){n.C.off(document,"mousemove",f),n.C.off(e.getWrapperElement(),"mouseout",s),clearTimeout(t.hoverTimeout),t.hoverTimeout=void 0}),"onMouseOut"),p=i((function(){n.C.off(document,"mousemove",f),n.C.off(e.getWrapperElement(),"mouseout",s),t.hoverTimeout=void 0,m(e,u)}),"onHover"),c=a(e);t.hoverTimeout=setTimeout(p,c),n.C.on(document,"mousemove",f),n.C.on(e.getWrapperElement(),"mouseout",s)}}function m(e,o){var t=e.coordsChar({left:(o.left+o.right)/2,top:(o.top+o.bottom)/2},"window"),n=e.state.info.options,r=n.render||e.getHelper(t,"info");if(r){var i=e.getTokenAt(t,!0);if(i){var u=r(i,n,e,t);u&&s(e,o,u)}}}function s(e,o,t){var r=document.createElement("div");r.className="CodeMirror-info",r.append(t),document.body.append(r);var u=r.getBoundingClientRect(),a=window.getComputedStyle(r),f=u.right-u.left+parseFloat(a.marginLeft)+parseFloat(a.marginRight),m=u.bottom-u.top+parseFloat(a.marginTop)+parseFloat(a.marginBottom),s=o.bottom;m>window.innerHeight-o.bottom-15&&o.top>window.innerHeight-o.bottom&&(s=o.top-m),s<0&&(s=o.bottom);var p,c=Math.max(0,window.innerWidth-f-15);c>o.left&&(c=o.left),r.style.opacity="1",r.style.top=s+"px",r.style.left=c+"px";var l=i((function(){clearTimeout(p)}),"onMouseOverPopup"),v=i((function(){clearTimeout(p),p=setTimeout(d,200)}),"onMouseOut"),d=i((function(){n.C.off(r,"mouseover",l),n.C.off(r,"mouseout",v),n.C.off(e.getWrapperElement(),"mouseout",v),r.style.opacity?(r.style.opacity="0",setTimeout((function(){r.parentNode&&r.remove()}),600)):r.parentNode&&r.remove()}),"hidePopup");n.C.on(r,"mouseover",l),n.C.on(r,"mouseout",v),n.C.on(e.getWrapperElement(),"mouseout",v)}n.C.defineOption("info",!1,(function(e,o,t){if(t&&t!==n.C.Init){var r=e.state.info.onMouseOver;n.C.off(e.getWrapperElement(),"mouseover",r),clearTimeout(e.state.info.hoverTimeout),delete e.state.info}if(o){var i=e.state.info=u(o);i.onMouseOver=f.bind(null,e),n.C.on(e.getWrapperElement(),"mouseover",i.onMouseOver)}})),i(u,"createState"),i(a,"getHoverTime"),i(f,"onMouseOver"),i(m,"onMouseHover"),i(s,"showPopup")}}]);