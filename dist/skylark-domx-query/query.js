/**
 * skylark-domx-query - The skylark query library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","skylark-domx-noder","skylark-domx-finder"],function(t,n,e,r){var i,c=Array.prototype.some,s=Array.prototype.push,o=(Array.prototype.every,Array.prototype.concat,Array.prototype.slice),a=(Array.prototype.map,Array.prototype.filter),u=Array.prototype.forEach,l=Array.prototype.indexOf,f=Array.prototype.sort,h=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,p=n.funcArg,d=n.isArrayLike,y=n.isString,v=n.uniq,m=n.isFunction,b=n.type,g=(n.isArray,n.isWindow,n.isDocument,n.isObject);n.isPlainObject,n.compact,n.flatten,n.camelCase,n.dasherize,r.children;function w(t,r,i){return function(i){var c,s=n.map(arguments,function(t){return"function"==(c=b(t))||"object"==c||"array"==c||null==t?t:e.createFragment(t)});return s.length<1?this:(this.each(function(n){t.apply(r,[this,s,n>0])}),this)}}function A(t,e){return function(){var r=o.call(arguments),i=n.map(this,function(n,i){return t.apply(e,[n].concat(r))});return q(v(i))}}function k(t,n,e){return function(r){o.call(arguments);var i=this.map(function(i,c){return t.apply(n,e?[c]:[c,r])});return e&&r?i.filter(r):i}}function x(t,n,e){return function(r,i){o.call(arguments);var c=this.map(function(c,s){return t.apply(n,e?[s,r]:[s,i,r])});return e&&i?c.filter(i):c}}function O(t,n){return function(){var e=o.call(arguments);return this.each(function(r,i){t.apply(n,[this].concat(e))}),this}}function S(t,e,r){return function(i){return n.isDefined(i)?(u.call(this,function(n,c){var s;s=r?p(n,i,c,r(n)):i,t.apply(e,[n,s])}),this):this[0]?t.apply(e,[this[0]]):void 0}}var _,j=n.klass({klassName:"SkNodeList",init:function(t,i){var c,o,a,u;if(t&&(this.context=i=i||e.doc(),y(t)?(this.selector=t,(c="<"===t.charAt(0)&&">"===t.charAt(t.length-1)&&t.length>=3?[null,t,null]:h.exec(t))?c[1]?(o=e.createFragment(t),n.isPlainObject(i)&&(u=i)):(a=r.byId(c[2],e.ownerDoc(i)))&&(o=[a]):(n.isString(i)&&(i=r.find(i)),o=r.descendants(i,t))):o=t!==window&&d(t)?t:[t]),o&&(s.apply(this,o),u))for(var l in u)n.isFunction(this[l])?this[l](u[l]):this.attr(l,u[l]);return this}}),q=function(){i=function(t){return t instanceof j},init=function(t,n){return new j(t,n)};var t=function(n,e){if(!m(n))return i(n)?n:e&&i(e)&&y(n)?e.find(n):init(n,e);t.ready(function(){n(t)})};t.fn=j.prototype,n.mixin(t.fn,{length:0,map:function(e){return t(v(n.map(this,function(t,n){return e.call(t,n,t)})))},slice:function(){return t(o.apply(this,arguments))},forEach:function(){return u.apply(this,arguments)},get:function(t){return void 0===t?o.call(this):this[t>=0?t:t+this.length]},indexOf:function(){return l.apply(this,arguments)},sort:function(){return f.apply(this,arguments)},toArray:function(){return o.call(this)},size:function(){return this.length},remove:function(t){return t?this.find(t).remove():(this.each(function(t,n){e.remove(n)}),this)},each:function(t){return n.each(this,t),this},filter:function(n){return m(n)?this.not(this.not(n)):t(a.call(this,function(t){return r.matches(t,n)}))},add:function(n,e){return t(v(this.toArray().concat(t(n,e).toArray())))},is:function(t){if(this.length>0){if(n.isString(t))return c.call(this,function(n){return r.matches(n,t)});if(n.isArrayLike(t))return c.call(this,function(e){return n.inArray(e,t)>-1});if(n.isHtmlNode(t))return c.call(this,function(n){return n==t})}return!1},not:function(n){var e=[];if(m(n)&&void 0!==n.call)this.each(function(t,r){n.call(this,t,r)||e.push(this)});else{var r="string"==typeof n?this.filter(n):d(n)&&m(n.item)?o.call(n):t(n);this.forEach(function(t){r.indexOf(t)<0&&e.push(t)})}return t(e)},has:function(n){return this.filter(function(){return g(n)?e.contains(this,n):t(this).find(n).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:k(r.descendants,r),closest:k(r.closest,r),parents:k(r.ancestors,r),parentsUntil:x(r.ancestors,r),parent:k(r.parent,r),children:k(r.children,r),contents:A(e.contents,e),empty:O(e.empty,e),html:S(e.html,e),pluck:function(t){return n.map(this,function(n){return n[t]})},pushStack:function(n){var e=t(n);return e.prevObject=this,e},replaceWith:function(t){return this.before(t).remove()},wrap:function(n){var e="function"==typeof n;return this.each(function(r){t(this).wrapAll(e?n.call(this,r):n)})},wrapAll:function(n){var e;return this[0]&&("function"==typeof n&&(n=n.call(this[0])),e=t(n,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(n){return"function"==typeof n?this.each(function(e){t(this).wrapInner(n.call(this,e))}):this.each(function(){var e=t(this),r=e.contents();r.length?r.wrapAll(n):e.append(n)})},unwrap:function(n){return this.parent(n).not("body").each(function(){t(this).replaceWith(this.childNodes)}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},toggle:function(n){return this.each(function(){var e=t(this);(void 0===n?"none"==e.css("display"):n)?e.show():e.hide()})},prev:function(n){return t(this.pluck("previousElementSibling")).filter(n||"*")},prevAll:k(r.previousSiblings,r),next:function(n){return t(this.pluck("nextElementSibling")).filter(n||"*")},nextAll:k(r.nextSiblings,r),siblings:k(r.siblings,r),index:function(n){return n?this.indexOf(t(n)[0]):this.parent().children().indexOf(this[0])}}),t.fn.detach=t.fn.remove,t.fn.hover=function(t,n){return this.mouseenter(t).mouseleave(n||t)};e.traverse;return t.fn.after=w(e.after,e),t.fn.prepend=w(e.prepend,e),t.fn.before=w(e.before,e),t.fn.append=w(e.append,e),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(n,e){t.fn[n]=function(n){for(var r,i=[],c=t(n),o=c.length-1,a=0;a<=o;a++)r=a===o?this:this.clone(!0),t(c[a])[e](r),s.apply(i,r.get());return this.pushStack(i)}}),t}();return(_=q).fn.scrollParent=function(t){var n=this.css("position"),e="absolute"===n,r=t?/(auto|scroll|hidden)/:/(auto|scroll)/,i=this.parents().filter(function(){var t=_(this);return(!e||"static"!==t.css("position"))&&r.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==n&&i.length?i:_(this[0].ownerDocument||document)},function(t){t.fn.end=function(){return this.prevObject||t()},t.fn.andSelf=function(){return this.add(this.prevObject||t())},t.fn.addBack=function(t){return this.prevObject?t?this.add(this.prevObject.filter(t)):this.add(this.prevObject):this},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings,prev,prevAll,next,nextAll".split(",").forEach(function(n){var e=t.fn[n];t.fn[n]=function(){var t=e.apply(this,arguments);return t.prevObject=this,t}})}(q),function(t){var c;t.fn.query=t.fn.find,t.fn.place=function(t,c){return n.isString(t)?t=r.descendant(t):i(t)&&(t=t[0]),this.each(function(n,r){switch(c){case"before":e.before(t,r);break;case"after":e.after(t,r);break;case"replace":e.replace(t,r);break;case"only":e.empty(t),e.append(t,r);break;case"first":e.prepend(t,r);break;default:e.append(t,r)}})},t.fn.addContent=function(t,e){return t.template&&(t=n.substitute(t.template,t)),this.append(t)},t.fn.disableSelection=(c="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(c+".ui-disableSelection",function(t){t.preventDefault()})}),t.fn.enableSelection=function(){return this.off(".ui-disableSelection")},t.fn.reflow=function(){return e.flow(this[0])},t.fn.isBlockNode=function(){return e.isBlockNode(this[0])}}(q),q.fn.plugin=function(t,n){var e=o.call(arguments,1),r=this,i=this;return this.each(function(){i=plugins.instantiate.apply(r,[this,t].concat(e))}),i},q.wraps={wrapper_node_operation:w,wrapper_map:A,wrapper_value:S,wrapper_selector:k,wrapper_some_chk:function(t,n){return function(){var e=o.call(arguments);return c.call(this,function(r){return t.apply(n,[r].concat(e))})}},wrapper_selector_until:x,wrapper_every_act_firstArgFunc:function(t,n,e){return function(r){var i=o.call(arguments);return u.call(this,function(c,s){p(c,r,s,e(c)),t.apply(n,[c,r].concat(i.slice(1)))}),this}},wrapper_every_act:O,wrapper_name_value:function(t,e,r){return function(i,c){return n.isPlainObject(i)||n.isDefined(c)?(u.call(this,function(n,s){var o;o=r?p(n,c,s,r(n,i)):c,t.apply(e,[n,i,o])}),this):this[0]?t.apply(e,[this[0],i]):void 0}}},t.attach("domx.query",q)});
//# sourceMappingURL=sourcemaps/query.js.map
