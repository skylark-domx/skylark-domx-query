/**
 * skylark-domx-query - The skylark query library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","skylark-domx-noder","skylark-domx-finder"],function(t,n,e,r){var i,c=Array.prototype.some,a=Array.prototype.push,s=(Array.prototype.every,Array.prototype.concat,Array.prototype.slice),o=(Array.prototype.map,Array.prototype.filter),u=Array.prototype.forEach,l=Array.prototype.indexOf,f=Array.prototype.sort,h=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,p=n.funcArg,d=n.isArrayLike,y=n.isString,v=n.uniq,m=n.isFunction,b=n.type,g=(n.isArray,n.isWindow,n.isDocument,n.isObject);n.isPlainObject,n.compact,n.flatten,n.camelCase,n.dasherize,r.children;function w(t,e){return function(){var r=s.call(arguments),i=n.map(this,function(n,i){return t.apply(e,[n].concat(r))});return S(v(i))}}function A(t,n,e){return function(r){s.call(arguments);var i=this.map(function(i,c){return t.apply(n,e?[c]:[c,r])});return e&&r?i.filter(r):i}}function k(t,n,e){return function(r,i){s.call(arguments);var c=this.map(function(c,a){return t.apply(n,e?[a,r]:[a,i,r])});return e&&i?c.filter(i):c}}function x(t,n){return function(){var e=s.call(arguments);return this.each(function(r,i){t.apply(n,[this].concat(e))}),this}}var _,O=n.klass({klassName:"SkNodeList",init:function(t,i){var c,s,o,u;if(t&&(this.context=i=i||e.doc(),y(t)?(this.selector=t,(c="<"===t.charAt(0)&&">"===t.charAt(t.length-1)&&t.length>=3?[null,t,null]:h.exec(t))?c[1]?(s=e.createFragment(t),n.isPlainObject(i)&&(u=i)):(o=r.byId(c[2],e.ownerDoc(i)))&&(s=[o]):(n.isString(i)&&(i=r.find(i)),s=r.descendants(i,t))):s=t!==window&&d(t)?t:[t]),s&&(a.apply(this,s),u))for(var l in u)n.isFunction(this[l])?this[l](u[l]):this.attr(l,u[l]);return this}}),S=function(){i=function(t){return t instanceof O},init=function(t,n){return new O(t,n)};var t=function(n,e){if(!m(n))return i(n)?n:e&&i(e)&&y(n)?e.find(n):init(n,e);t.ready(function(){n(t)})};t.fn=O.prototype,n.mixin(t.fn,{length:0,map:function(e){return t(v(n.map(this,function(t,n){return e.call(t,n,t)})))},slice:function(){return t(s.apply(this,arguments))},forEach:function(){return u.apply(this,arguments)},get:function(t){return void 0===t?s.call(this):this[t>=0?t:t+this.length]},indexOf:function(){return l.apply(this,arguments)},sort:function(){return f.apply(this,arguments)},toArray:function(){return s.call(this)},size:function(){return this.length},remove:function(t){return t?this.find(t).remove():(this.each(function(t,n){e.remove(n)}),this)},each:function(t){return n.each(this,t),this},filter:function(n){return m(n)?this.not(this.not(n)):t(o.call(this,function(t){return r.matches(t,n)}))},add:function(n,e){return t(v(this.toArray().concat(t(n,e).toArray())))},is:function(t){if(this.length>0){if(n.isString(t))return c.call(this,function(n){return r.matches(n,t)});if(n.isArrayLike(t))return c.call(this,function(e){return n.inArray(e,t)>-1});if(n.isHtmlNode(t))return c.call(this,function(n){return n==t})}return!1},not:function(n){var e=[];if(m(n)&&void 0!==n.call)this.each(function(t,r){n.call(this,t,r)||e.push(this)});else{var r="string"==typeof n?this.filter(n):d(n)&&m(n.item)?s.call(n):t(n);this.forEach(function(t){r.indexOf(t)<0&&e.push(t)})}return t(e)},has:function(n){return this.filter(function(){return g(n)?e.contains(this,n):t(this).find(n).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:A(r.descendants,r),closest:A(r.closest,r),parents:A(r.ancestors,r),parentsUntil:k(r.ancestors,r),parent:A(r.parent,r),children:A(r.children,r),contents:w(e.contents,e),empty:x(e.empty,e),pluck:function(t){return n.map(this,function(n){return n[t]})},pushStack:function(n){var e=t(n);return e.prevObject=this,e},replaceWith:function(t){return this.before(t).remove()},wrap:function(n){var e=m(n);if(this[0]&&!e)var r=t(n).get(0),i=r.parentNode||this.length>1;return this.each(function(c,a){t(this).wrapAll(e?n.call(this,c,a):i?r.cloneNode(!0):r)})},wrapAll:function(n){if(this[0]){var e;for(t(this[0]).before(n=t(n));(e=n.children()).length;)n=e.first();t(n).append(this)}return this},wrapInner:function(n){var e=m(n);return this.each(function(r,i){var c=t(this),a=c.contents(),s=e?n.call(this,r,i):n;a.length?a.wrapAll(s):c.append(s)})},unwrap:function(n){return 0===this.parent().children().length?this.parent(n).not("body").each(function(){t(this).replaceWith(document.createTextNode(this.childNodes[0].textContent))}):this.parent().each(function(){t(this).replaceWith(t(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},toggle:function(n){return this.each(function(){var e=t(this);(void 0===n?"none"==e.css("display"):n)?e.show():e.hide()})},prev:function(n){return t(this.pluck("previousElementSibling")).filter(n||"*")},prevAll:A(r.previousSiblings,r),next:function(n){return t(this.pluck("nextElementSibling")).filter(n||"*")},nextAll:A(r.nextSiblings,r),siblings:A(r.siblings,r),index:function(n){return n?this.indexOf(t(n)[0]):this.parent().children().indexOf(this[0])}}),t.fn.detach=t.fn.remove,t.fn.hover=function(t,n){return this.mouseenter(t).mouseleave(n||t)};e.traverse;function h(t,r,i){return function(i){var c,a=n.map(arguments,function(t){return"function"==(c=b(t))||"object"==c||"array"==c||null==t?t:e.createFragment(t)});return a.length<1?this:(this.each(function(n){t.apply(r,[this,a,n>0])}),this)}}return t.fn.after=h(e.after,e),t.fn.prepend=h(e.prepend,e),t.fn.before=h(e.before,e),t.fn.append=h(e.append,e),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(n,e){t.fn[n]=function(n){for(var r,i=[],c=t(n),s=c.length-1,o=0;o<=s;o++)r=o===s?this:this.clone(!0),t(c[o])[e](r),a.apply(i,r.get());return this.pushStack(i)}}),t}();return(_=S).fn.scrollParent=function(t){var n=this.css("position"),e="absolute"===n,r=t?/(auto|scroll|hidden)/:/(auto|scroll)/,i=this.parents().filter(function(){var t=_(this);return(!e||"static"!==t.css("position"))&&r.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==n&&i.length?i:_(this[0].ownerDocument||document)},function(t){t.fn.end=function(){return this.prevObject||t()},t.fn.andSelf=function(){return this.add(this.prevObject||t())},t.fn.addBack=function(t){return this.prevObject?t?this.add(this.prevObject.filter(t)):this.add(this.prevObject):this},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings,prev,prevAll,next,nextAll".split(",").forEach(function(n){var e=t.fn[n];t.fn[n]=function(){var t=e.apply(this,arguments);return t.prevObject=this,t}})}(S),function(t){var c;t.fn.query=t.fn.find,t.fn.place=function(t,c){return n.isString(t)?t=r.descendant(t):i(t)&&(t=t[0]),this.each(function(n,r){switch(c){case"before":e.before(t,r);break;case"after":e.after(t,r);break;case"replace":e.replace(t,r);break;case"only":e.empty(t),e.append(t,r);break;case"first":e.prepend(t,r);break;default:e.append(t,r)}})},t.fn.addContent=function(t,e){return t.template&&(t=n.substitute(t.template,t)),this.append(t)},t.fn.disableSelection=(c="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(c+".ui-disableSelection",function(t){t.preventDefault()})}),t.fn.enableSelection=function(){return this.off(".ui-disableSelection")},t.fn.reflow=function(){return e.flow(this[0])},t.fn.isBlockNode=function(){return e.isBlockNode(this[0])}}(S),S.fn.plugin=function(t,n){var e=s.call(arguments,1),r=this,i=this;return this.each(function(){i=plugins.instantiate.apply(r,[this,t].concat(e))}),i},S.wraps={wrapper_node_operation:wrapper_node_operation,wrapper_map:w,wrapper_value:function(t,e,r){return function(i){return n.isDefined(i)?(u.call(this,function(n,c){var a;a=r?p(n,i,c,r(n)):i,t.apply(e,[n,a])}),this):this[0]?t.apply(e,[this[0]]):void 0}},wrapper_selector:A,wrapper_some_chk:function(t,n){return function(){var e=s.call(arguments);return c.call(this,function(r){return t.apply(n,[r].concat(e))})}},wrapper_selector_until:k,wrapper_every_act_firstArgFunc:function(t,n,e){return function(r){var i=s.call(arguments);return u.call(this,function(c,a){p(c,r,a,e(c)),t.apply(n,[c,r].concat(i.slice(1)))}),this}},wrapper_every_act:x,wrapper_name_value:function(t,e,r){return function(i,c){var a=s.call(arguments);return n.isPlainObject(i)||n.isDefined(c)?(u.call(this,function(n,s){r&&p(n,c,s,r(n,i)),t.apply(e,[n].concat(a))}),this):this[0]?t.apply(e,[this[0],i]):void 0}}},t.attach("domx.query",S)});
//# sourceMappingURL=sourcemaps/query.js.map
