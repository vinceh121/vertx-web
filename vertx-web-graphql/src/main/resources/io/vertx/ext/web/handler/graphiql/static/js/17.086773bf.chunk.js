"use strict";(self.webpackChunkvertx_web_graphiql=self.webpackChunkvertx_web_graphiql||[]).push([[17],{7017:function(e,t,n){n.r(t),n.d(t,{s:function(){return c}});var r=n(1777),i=n(972);function o(e,t){for(var n=function(){var n=t[r];if("string"!=typeof n&&!Array.isArray(n)){var i=function(t){if("default"!==t&&!(t in e)){var r=Object.getOwnPropertyDescriptor(n,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:function(){return n[t]}})}};for(var o in n)i(o)}},r=0;r<t.length;r++)n();return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(0,Object.defineProperty)(o,"name",{value:"_mergeNamespaces",configurable:!0});var l=(0,i.r)(),c=o({__proto__:null,default:(0,r.g)(l)},[l])},972:function(e,t,n){n.d(t,{r:function(){return h}});var r,i=n(1777),o=Object.defineProperty,l=function(e,t){return o(e,"name",{value:t,configurable:!0})},c={exports:{}};function h(){return r||(r=1,function(e){var t,n,r=e.Pos;function i(e){var t=e.flags;return null!==t&&void 0!==t?t:(e.ignoreCase?"i":"")+(e.global?"g":"")+(e.multiline?"m":"")}function o(e,t){for(var n=i(e),r=n,o=0;o<t.length;o++)-1==r.indexOf(t.charAt(o))&&(r+=t.charAt(o));return n==r?e:new RegExp(e.source,r)}function c(e){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source)}function h(e,t,n){t=o(t,"g");for(var i=n.line,l=n.ch,c=e.lastLine();i<=c;i++,l=0){t.lastIndex=l;var h=e.getLine(i),a=t.exec(h);if(a)return{from:r(i,a.index),to:r(i,a.index+a[0].length),match:a}}}function a(e,t,n){if(!c(t))return h(e,t,n);t=o(t,"gm");for(var i,l=1,a=n.line,s=e.lastLine();a<=s;){for(var f=0;f<l&&!(a>s);f++){var u=e.getLine(a++);i=null==i?u:i+"\n"+u}l*=2,t.lastIndex=n.ch;var g=t.exec(i);if(g){var p=i.slice(0,g.index).split("\n"),d=g[0].split("\n"),v=n.line+p.length-1,m=p[p.length-1].length;return{from:r(v,m),to:r(v+d.length-1,1==d.length?m+d[0].length:d[d.length-1].length),match:g}}}}function s(e,t,n){for(var r,i=0;i<=e.length;){t.lastIndex=i;var o=t.exec(e);if(!o)break;var l=o.index+o[0].length;if(l>e.length-n)break;(!r||l>r.index+r[0].length)&&(r=o),i=o.index+1}return r}function f(e,t,n){t=o(t,"g");for(var i=n.line,l=n.ch,c=e.firstLine();i>=c;i--,l=-1){var h=e.getLine(i),a=s(h,t,l<0?0:h.length-l);if(a)return{from:r(i,a.index),to:r(i,a.index+a[0].length),match:a}}}function u(e,t,n){if(!c(t))return f(e,t,n);t=o(t,"gm");for(var i,l=1,h=e.getLine(n.line).length-n.ch,a=n.line,u=e.firstLine();a>=u;){for(var g=0;g<l&&a>=u;g++){var p=e.getLine(a--);i=null==i?p:p+"\n"+i}l*=2;var d=s(i,t,h);if(d){var v=i.slice(0,d.index).split("\n"),m=d[0].split("\n"),x=a+v.length,L=v[v.length-1].length;return{from:r(x,L),to:r(x+m.length-1,1==m.length?L+m[0].length:m[m.length-1].length),match:d}}}}function g(e,t,n,r){if(e.length==t.length)return n;for(var i=0,o=n+Math.max(0,e.length-t.length);;){if(i==o)return i;var l=i+o>>1,c=r(e.slice(0,l)).length;if(c==n)return l;c>n?o=l:i=l+1}}function p(e,i,o,l){if(!i.length)return null;var c=l?t:n,h=c(i).split(/\r|\n\r?/);e:for(var a=o.line,s=o.ch,f=e.lastLine()+1-h.length;a<=f;a++,s=0){var u=e.getLine(a).slice(s),p=c(u);if(1==h.length){var d=p.indexOf(h[0]);if(-1==d)continue e;return o=g(u,p,d,c)+s,{from:r(a,g(u,p,d,c)+s),to:r(a,g(u,p,d+h[0].length,c)+s)}}var v=p.length-h[0].length;if(p.slice(v)==h[0]){for(var m=1;m<h.length-1;m++)if(c(e.getLine(a+m))!=h[m])continue e;var x=e.getLine(a+h.length-1),L=c(x),b=h[h.length-1];if(L.slice(0,b.length)==b)return{from:r(a,g(u,p,v,c)+s),to:r(a+h.length-1,g(x,L,b.length,c))}}}}function d(e,i,o,l){if(!i.length)return null;var c=l?t:n,h=c(i).split(/\r|\n\r?/);e:for(var a=o.line,s=o.ch,f=e.firstLine()-1+h.length;a>=f;a--,s=-1){var u=e.getLine(a);s>-1&&(u=u.slice(0,s));var p=c(u);if(1==h.length){var d=p.lastIndexOf(h[0]);if(-1==d)continue e;return{from:r(a,g(u,p,d,c)),to:r(a,g(u,p,d+h[0].length,c))}}var v=h[h.length-1];if(p.slice(0,v.length)==v){var m=1;for(o=a-h.length+1;m<h.length-1;m++)if(c(e.getLine(o+m))!=h[m])continue e;var x=e.getLine(a+1-h.length),L=c(x);if(L.slice(L.length-h[0].length)==h[0])return{from:r(a+1-h.length,g(x,L,x.length-h[0].length,c)),to:r(a,g(u,p,v.length,c))}}}}function v(e,t,n,i){var l;this.atOccurrence=!1,this.afterEmptyMatch=!1,this.doc=e,n=n?e.clipPos(n):r(0,0),this.pos={from:n,to:n},"object"==typeof i?l=i.caseFold:(l=i,i=null),"string"==typeof t?(null==l&&(l=!1),this.matches=function(n,r){return(n?d:p)(e,t,r,l)}):(t=o(t,"gm"),i&&!1===i.multiline?this.matches=function(n,r){return(n?f:h)(e,t,r)}:this.matches=function(n,r){return(n?u:a)(e,t,r)})}l(i,"regexpFlags"),l(o,"ensureFlags"),l(c,"maybeMultiline"),l(h,"searchRegexpForward"),l(a,"searchRegexpForwardMultiline"),l(s,"lastMatchIn"),l(f,"searchRegexpBackward"),l(u,"searchRegexpBackwardMultiline"),String.prototype.normalize?(t=l((function(e){return e.normalize("NFD").toLowerCase()}),"doFold"),n=l((function(e){return e.normalize("NFD")}),"noFold")):(t=l((function(e){return e.toLowerCase()}),"doFold"),n=l((function(e){return e}),"noFold")),l(g,"adjustPos"),l(p,"searchStringForward"),l(d,"searchStringBackward"),l(v,"SearchCursor"),v.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(t){var n=this.doc.clipPos(t?this.pos.from:this.pos.to);if(this.afterEmptyMatch&&this.atOccurrence&&(n=r(n.line,n.ch),t?(n.ch--,n.ch<0&&(n.line--,n.ch=(this.doc.getLine(n.line)||"").length)):(n.ch++,n.ch>(this.doc.getLine(n.line)||"").length&&(n.ch=0,n.line++)),0!=e.cmpPos(n,this.doc.clipPos(n))))return this.atOccurrence=!1;var i=this.matches(t,n);if(this.afterEmptyMatch=i&&0==e.cmpPos(i.from,i.to),i)return this.pos=i,this.atOccurrence=!0,this.pos.match||!0;var o=r(t?this.doc.firstLine():this.doc.lastLine()+1,0);return this.pos={from:o,to:o},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(t,n){if(this.atOccurrence){var i=e.splitLines(t);this.doc.replaceRange(i,this.pos.from,this.pos.to,n),this.pos.to=r(this.pos.from.line+i.length-1,i[i.length-1].length+(1==i.length?this.pos.from.ch:0))}}},e.defineExtension("getSearchCursor",(function(e,t,n){return new v(this.doc,e,t,n)})),e.defineDocExtension("getSearchCursor",(function(e,t,n){return new v(this,e,t,n)})),e.defineExtension("selectMatches",(function(t,n){for(var r=[],i=this.getSearchCursor(t,this.getCursor("from"),n);i.findNext()&&!(e.cmpPos(i.to(),this.getCursor("to"))>0);)r.push({anchor:i.from(),head:i.to()});r.length&&this.setSelections(r,0)}))}((0,i.r)())),c.exports}l(h,"requireSearchcursor")}}]);