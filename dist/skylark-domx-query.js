/**
 * skylark-domx-query - The skylark query library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(t,n){var e=n.define,require=n.require,r="function"==typeof e&&e.amd,i=!r&&"undefined"!=typeof exports;if(!r&&!e){var o={};e=n.define=function(t,n,e){"function"==typeof e?(o[t]={factory:e,deps:n.map(function(n){return function(t,n){if("."!==t[0])return t;var e=n.split("/"),r=t.split("/");e.pop();for(var i=0;i<r.length;i++)"."!=r[i]&&(".."==r[i]?e.pop():e.push(r[i]));return e.join("/")}(n,t)}),resolved:!1,exports:null},require(t)):o[t]={factory:null,resolved:!0,exports:e}},require=n.require=function(t){if(!o.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var module=o[t];if(!module.resolved){var e=[];module.deps.forEach(function(t){e.push(require(t))}),module.exports=module.factory.apply(n,e)||null,module.resolved=!0}return module.exports}}if(!e)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(t,require){t("skylark-domx-query/query",["skylark-langx/skylark","skylark-langx/langx","skylark-domx-noder","skylark-domx-finder"],function(t,n,e,r){var i,o=Array.prototype.some,s=Array.prototype.push,a=(Array.prototype.every,Array.prototype.concat,Array.prototype.slice),c=(Array.prototype.map,Array.prototype.filter),u=Array.prototype.forEach,l=Array.prototype.indexOf,f=Array.prototype.sort,p=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,h=n.funcArg,d=n.isArrayLike,y=n.isString,v=n.uniq,m=n.isFunction,k=n.type,b=(n.isArray,n.isWindow,n.isDocument,n.isObject);n.isPlainObject,n.compact,n.flatten,n.camelCase,n.dasherize,r.children;function w(t,r,i){return function(i){var o,s=n.map(arguments,function(t){return"function"==(o=k(t))||"object"==o||"array"==o||null==t?t:e.createFragment(t)});return s.length<1?this:(this.each(function(n){t.apply(r,[this,s,n>0])}),this)}}function g(t,e){return function(){var r=a.call(arguments),i=n.map(this,function(n,i){return t.apply(e,[n].concat(r))});return j(v(i))}}function x(t,n,e){return function(r){a.call(arguments);var i=this.map(function(i,o){return t.apply(n,e?[o]:[o,r])});return e&&r?i.filter(r):i}}function A(t,n,e){return function(r,i){a.call(arguments);var o=this.map(function(o,s){return t.apply(n,e?[s,r]:[s,i,r])});return e&&i?o.filter(i):o}}function q(t,n){return function(){var e=a.call(arguments);return this.each(function(r,i){t.apply(n,[this].concat(e))}),this}}function O(t,e,r){return function(i){return n.isDefined(i)?(u.call(this,function(n,o){var s;s=r?h(n,i,o,r(n)):i,t.apply(e,[n,s])}),this):this[0]?t.apply(e,[this[0]]):void 0}}var S,_=n.klass({klassName:"SkNodeList",init:function(t,i){var o,a,c,u;if(t&&(this.context=i=i||e.doc(),y(t)?(this.selector=t,(o="<"===t.charAt(0)&&">"===t.charAt(t.length-1)&&t.length>=3?[null,t,null]:p.exec(t))?o[1]?(a=e.createFragment(t),n.isPlainObject(i)&&(u=i)):(c=r.byId(o[2],e.ownerDoc(i)))&&(a=[c]):(n.isString(i)&&(i=r.find(i)),a=r.descendants(i,t))):a=t!==window&&d(t)?t:[t]),a&&(s.apply(this,a),u))for(var l in u)n.isFunction(this[l])?this[l](u[l]):this.attr(l,u[l]);return this}}),j=function(){i=function(t){return t instanceof _},init=function(t,n){return new _(t,n)};var t=function(n,e){if(!m(n))return i(n)?n:e&&i(e)&&y(n)?e.find(n):init(n,e);t.ready(function(){n(t)})};t.fn=_.prototype,n.mixin(t.fn,{length:0,map:function(e){return t(v(n.map(this,function(t,n){return e.call(t,n,t)})))},slice:function(){return t(a.apply(this,arguments))},forEach:function(){return u.apply(this,arguments)},get:function(t){return void 0===t?a.call(this):this[t>=0?t:t+this.length]},indexOf:function(){return l.apply(this,arguments)},sort:function(){return f.apply(this,arguments)},toArray:function(){return a.call(this)},size:function(){return this.length},remove:function(t){return t?this.find(t).remove():(this.each(function(t,n){e.remove(n)}),this)},each:function(t){return n.each(this,t),this},filter:function(n){return m(n)?this.not(this.not(n)):t(c.call(this,function(t){return r.matches(t,n)}))},add:function(n,e){return t(v(this.toArray().concat(t(n,e).toArray())))},is:function(t){if(this.length>0){if(n.isString(t))return o.call(this,function(n){return r.matches(n,t)});if(n.isArrayLike(t))return o.call(this,function(e){return n.inArray(e,t)>-1});if(n.isHtmlNode(t))return o.call(this,function(n){return n==t})}return!1},not:function(n){var e=[];if(m(n)&&void 0!==n.call)this.each(function(t,r){n.call(this,t,r)||e.push(this)});else{var r="string"==typeof n?this.filter(n):d(n)&&m(n.item)?a.call(n):t(n);this.forEach(function(t){r.indexOf(t)<0&&e.push(t)})}return t(e)},has:function(n){return this.filter(function(){return b(n)?e.contains(this,n):t(this).find(n).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:x(r.descendants,r),closest:x(r.closest,r),parents:x(r.ancestors,r),parentsUntil:A(r.ancestors,r),parent:x(r.parent,r),children:x(r.children,r),contents:g(e.contents,e),empty:q(e.empty,e),html:O(e.html,e),pluck:function(t){return n.map(this,function(n){return n[t]})},pushStack:function(n){var e=t(n);return e.prevObject=this,e},replaceWith:function(t){return this.before(t).remove()},wrap:function(n){var e="function"==typeof n;return this.each(function(r){t(this).wrapAll(e?n.call(this,r):n)})},wrapAll:function(n){var e;return this[0]&&("function"==typeof n&&(n=n.call(this[0])),e=t(n,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(n){return"function"==typeof n?this.each(function(e){t(this).wrapInner(n.call(this,e))}):this.each(function(){var e=t(this),r=e.contents();r.length?r.wrapAll(n):e.append(n)})},unwrap:function(n){return this.parent(n).not("body").each(function(){t(this).replaceWith(this.childNodes)}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},toggle:function(n){return this.each(function(){var e=t(this);(void 0===n?"none"==e.css("display"):n)?e.show():e.hide()})},prev:function(n){return t(this.pluck("previousElementSibling")).filter(n||"*")},prevAll:x(r.previousSiblings,r),next:function(n){return t(this.pluck("nextElementSibling")).filter(n||"*")},nextAll:x(r.nextSiblings,r),siblings:x(r.siblings,r),index:function(n){return n?this.indexOf(t(n)[0]):this.parent().children().indexOf(this[0])}}),t.fn.detach=t.fn.remove,t.fn.hover=function(t,n){return this.mouseenter(t).mouseleave(n||t)};e.traverse;return t.fn.after=w(e.after,e),t.fn.prepend=w(e.prepend,e),t.fn.before=w(e.before,e),t.fn.append=w(e.append,e),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(n,e){t.fn[n]=function(n){for(var r,i=[],o=t(n),a=o.length-1,c=0;c<=a;c++)r=c===a?this:this.clone(!0),t(o[c])[e](r),s.apply(i,r.get());return this.pushStack(i)}}),t}();return(S=j).fn.scrollParent=function(t){var n=this.css("position"),e="absolute"===n,r=t?/(auto|scroll|hidden)/:/(auto|scroll)/,i=this.parents().filter(function(){var t=S(this);return(!e||"static"!==t.css("position"))&&r.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==n&&i.length?i:S(this[0].ownerDocument||document)},function(t){t.fn.end=function(){return this.prevObject||t()},t.fn.andSelf=function(){return this.add(this.prevObject||t())},t.fn.addBack=function(t){return this.prevObject?t?this.add(this.prevObject.filter(t)):this.add(this.prevObject):this},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings,prev,prevAll,next,nextAll".split(",").forEach(function(n){var e=t.fn[n];t.fn[n]=function(){var t=e.apply(this,arguments);return t.prevObject=this,t}})}(j),function(t){var o;t.fn.query=t.fn.find,t.fn.place=function(t,o){return n.isString(t)?t=r.descendant(t):i(t)&&(t=t[0]),this.each(function(n,r){switch(o){case"before":e.before(t,r);break;case"after":e.after(t,r);break;case"replace":e.replace(t,r);break;case"only":e.empty(t),e.append(t,r);break;case"first":e.prepend(t,r);break;default:e.append(t,r)}})},t.fn.addContent=function(t,e){return t.template&&(t=n.substitute(t.template,t)),this.append(t)},t.fn.disableSelection=(o="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(o+".ui-disableSelection",function(t){t.preventDefault()})}),t.fn.enableSelection=function(){return this.off(".ui-disableSelection")},t.fn.reflow=function(){return e.flow(this[0])},t.fn.isBlockNode=function(){return e.isBlockNode(this[0])}}(j),j.fn.plugin=function(t,n){var e=a.call(arguments,1),r=this,i=this;return this.each(function(){i=plugins.instantiate.apply(r,[this,t].concat(e))}),i},j.wraps={wrapper_node_operation:w,wrapper_map:g,wrapper_value:O,wrapper_selector:x,wrapper_some_chk:function(t,n){return function(){var e=a.call(arguments);return o.call(this,function(r){return t.apply(n,[r].concat(e))})}},wrapper_selector_until:A,wrapper_every_act_firstArgFunc:function(t,n,e){return function(r){var i=a.call(arguments);return u.call(this,function(o,s){h(o,r,s,e(o));t.apply(n,[o,r].concat(i.slice(1)))}),this}},wrapper_every_act:q,wrapper_name_value:function(t,e,r){return function(i,o){var s=a.call(arguments);return n.isPlainObject(i)||n.isDefined(o)?(u.call(this,function(n,a){r&&h(n,o,a,r(n,i)),t.apply(e,[n].concat(s))}),this):this[0]?t.apply(e,[this[0],i]):void 0}}},t.attach("domx.query",j)}),t("skylark-domx-query/main",["./query"],function(t){return t}),t("skylark-domx-query",["skylark-domx-query/main"],function(t){return t})}(e),!r){var s=require("skylark-langx/skylark");i?module.exports=s:n.skylarkjs=s}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-query.js.map
