/**
 * skylark-domx-query - The skylark query library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(t,n){var e=n.define,require=n.require,r="function"==typeof e&&e.amd,i=!r&&"undefined"!=typeof exports;if(!r&&!e){var s={};e=n.define=function(t,n,e){"function"==typeof e?(s[t]={factory:e,deps:n.map(function(n){return function(t,n){if("."!==t[0])return t;var e=n.split("/"),r=t.split("/");e.pop();for(var i=0;i<r.length;i++)"."!=r[i]&&(".."==r[i]?e.pop():e.push(r[i]));return e.join("/")}(n,t)}),resolved:!1,exports:null},require(t)):s[t]={factory:null,resolved:!0,exports:e}},require=n.require=function(t){if(!s.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var module=s[t];if(!module.resolved){var e=[];module.deps.forEach(function(t){e.push(require(t))}),module.exports=module.factory.apply(n,e)||null,module.resolved=!0}return module.exports}}if(!e)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(t,require){t("skylark-domx-query/query",["skylark-langx/skylark","skylark-langx/langx","skylark-domx-noder","skylark-domx-finder"],function(t,n,e,r){var i,s=Array.prototype.some,a=Array.prototype.push,o=(Array.prototype.every,Array.prototype.concat,Array.prototype.slice),c=(Array.prototype.map,Array.prototype.filter),u=Array.prototype.forEach,l=Array.prototype.indexOf,f=Array.prototype.sort,p=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,h=n.funcArg,d=n.isArrayLike,y=n.isString,v=n.uniq,m=n.isFunction,w=n.type,k=(n.isArray,n.isWindow,n.isDocument,n.isObject);n.isPlainObject,n.compact,n.flatten,n.camelCase,n.dasherize,r.children;function g(t,r,i){return function(i){var s,a=n.map(arguments,function(t){return"function"==(s=w(t))||"object"==s||"array"==s||null==t?t:e.createFragment(t)});return a.length<1?this:(this.each(function(n){t.apply(r,[this,a,n>0])}),this)}}function b(t,e){return function(){var r=o.call(arguments),i=n.map(this,function(n,i){return t.apply(e,[n].concat(r))});return S(v(i))}}function x(t,n,e){return function(r){o.call(arguments);var i=this.map(function(i,s){return s.querySelector?t.apply(n,e?[s]:[s,r]):[]});return e&&r?i.filter(r):i}}function A(t,n,e){return function(r,i){o.call(arguments);var s=this.map(function(s,a){return t.apply(n,e?[a,r]:[a,i,r])});return e&&i?s.filter(i):s}}function _(t,n){return function(){var e=o.call(arguments);return this.each(function(r,i){t.apply(n,[this].concat(e))}),this}}function q(t,e,r){return function(i){return n.isDefined(i)?(u.call(this,function(n,s){var a;a=r?h(n,i,s,r(n)):i,t.apply(e,[n,a])}),this):this[0]?t.apply(e,[this[0]]):void 0}}var C,O=n.klass({klassName:"SkNodeList",init:function(t,i){var s,o,c,u;if(t&&(this.context=i=i||e.doc(),y(t)?(this.selector=t,(s="<"===t.charAt(0)&&">"===t.charAt(t.length-1)&&t.length>=3?[null,t,null]:p.exec(t))?s[1]?(o=e.createFragment(t),n.isPlainObject(i)&&(u=i)):(c=r.byId(s[2],e.ownerDoc(i)))&&(o=[c]):(n.isString(i)&&(i=r.find(i)),o=r.descendants(i,t))):o=!e.isWindow(t)&&d(t)?t:[t]),o&&(a.apply(this,o),u))for(var l in u)n.isFunction(this[l])?this[l](u[l]):this.attr(l,u[l]);return this}}),S=function(){i=function(t){return t instanceof O},init=function(t,n){return new O(t,n)};var t=function(n,e){return m(n)?(t.ready(function(){n(t)}),p):i(n)?n:e&&i(e)&&y(n)?e.find(n):init(n,e)},p=t(document);t.fn=O.prototype,n.mixin(t.fn,{length:0,map:function(e){return t(v(n.map(this,function(t,n){return e.call(t,n,t)})))},slice:function(){return t(o.apply(this,arguments))},forEach:function(){return u.apply(this,arguments)},get:function(t){return void 0===t?o.call(this):this[t>=0?t:t+this.length]},indexOf:function(){return l.apply(this,arguments)},sort:function(){return f.apply(this,arguments)},toArray:function(){return o.call(this)},size:function(){return this.length},remove:function(t){return t?this.find(t).remove():(this.each(function(t,n){e.remove(n)}),this)},each:function(t){return n.each(this,t),this},filter:function(n){return m(n)?this.not(this.not(n)):t(c.call(this,function(t){return r.matches(t,n)}))},add:function(n,e){return t(v(this.toArray().concat(t(n,e).toArray())))},is:function(t){if(this.length>0){if(n.isString(t))return s.call(this,function(n){return r.matches(n,t)});if(n.isArrayLike(t))return s.call(this,function(e){return n.inArray(e,t)>-1});if(n.isHtmlNode(t))return s.call(this,function(n){return n==t})}return!1},not:function(n){var e=[];if(m(n)&&void 0!==n.call)this.each(function(t,r){n.call(this,t,r)||e.push(this)});else{var r="string"==typeof n?this.filter(n):d(n)&&m(n.item)?o.call(n):t(n);this.forEach(function(t){r.indexOf(t)<0&&e.push(t)})}return t(e)},has:function(n){return this.filter(function(){return k(n)?e.contains(this,n):t(this).find(n).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:x(r.descendants,r),closest:x(r.closest,r),parents:x(r.ancestors,r),parentsUntil:A(r.ancestors,r),parent:x(r.parent,r),children:x(r.children,r),contents:b(e.contents,e),empty:_(e.empty,e),html:q(e.html,e),pluck:function(t){return n.map(this,function(n){return n[t]})},pushStack:function(n){var e=t(n);return e.prevObject=this,e},replaceWith:function(t){return this.before(t).remove()},wrap:function(n){var e="function"==typeof n;return this.each(function(r){t(this).wrapAll(e?n.call(this,r):n)})},wrapAll:function(n){var e;return this[0]&&("function"==typeof n&&(n=n.call(this[0])),e=t(n,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(n){return"function"==typeof n?this.each(function(e){t(this).wrapInner(n.call(this,e))}):this.each(function(){var e=t(this),r=e.contents();r.length?r.wrapAll(n):e.append(n)})},unwrap:function(n){return this.parent(n).not("body").each(function(){t(this).replaceWith(this.childNodes)}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},toggle:function(n){return this.each(function(){var e=t(this);(void 0===n?"none"==e.css("display"):n)?e.show():e.hide()})},prev:function(n){return t(this.pluck("previousElementSibling")).filter(n||"*")},prevAll:x(r.previousSiblings,r),next:function(n){return t(this.pluck("nextElementSibling")).filter(n||"*")},nextAll:x(r.nextSiblings,r),siblings:x(r.siblings,r),index:function(n){return n?this.indexOf(t(n)[0]):this.parent().children().indexOf(this[0])}}),t.fn.detach=t.fn.remove,t.fn.hover=function(t,n){return this.mouseenter(t).mouseleave(n||t)};e.traverse;return t.fn.after=g(e.after,e),t.fn.prepend=g(e.prepend,e),t.fn.before=g(e.before,e),t.fn.append=g(e.append,e),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(n,e){t.fn[n]=function(n){for(var r,i=[],s=t(n),o=s.length-1,c=0;c<=o;c++)r=c===o?this:this.clone(!0),t(s[c])[e](r),a.apply(i,r.get());return this.pushStack(i)}}),t}();return(C=S).fn.scrollParent=function(t){var n=this.css("position"),e="absolute"===n,r=t?/(auto|scroll|hidden)/:/(auto|scroll)/,i=this.parents().filter(function(){var t=C(this);return(!e||"static"!==t.css("position"))&&r.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==n&&i.length?i:C(this[0].ownerDocument||document)},function(t){t.fn.end=function(){return this.prevObject||t()},t.fn.andSelf=function(){return this.add(this.prevObject||t())},t.fn.addBack=function(t){return this.prevObject?t?this.add(this.prevObject.filter(t)):this.add(this.prevObject):this},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings,prev,prevAll,next,nextAll".split(",").forEach(function(n){var e=t.fn[n];t.fn[n]=function(){var t=e.apply(this,arguments);return t.prevObject=this,t}})}(S),function(t){var s;t.fn.query=t.fn.find,t.fn.place=function(t,s){return n.isString(t)?t=r.descendant(t):i(t)&&(t=t[0]),this.each(function(n,r){switch(s){case"before":e.before(t,r);break;case"after":e.after(t,r);break;case"replace":e.replace(t,r);break;case"only":e.empty(t),e.append(t,r);break;case"first":e.prepend(t,r);break;default:e.append(t,r)}})},t.fn.addContent=function(t,e){return t.template&&(t=n.substitute(t.template,t)),this.append(t)},t.fn.disableSelection=(s="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(s+".ui-disableSelection",function(t){t.preventDefault()})}),t.fn.enableSelection=function(){return this.off(".ui-disableSelection")},t.fn.reflow=function(){return e.reflow(this[0])},t.fn.isBlockNode=function(){return e.isBlockNode(this[0])}}(S),S.fn.plugin=function(t,n){var e=o.call(arguments,1),r=this,i=this;return this.each(function(){i=plugins.instantiate.apply(r,[this,t].concat(e))}),i},S.wraps={wrapper_node_operation:g,wrapper_map:b,wrapper_value:q,wrapper_selector:x,wrapper_some_chk:function(t,n){return function(){var e=o.call(arguments);return s.call(this,function(r){return t.apply(n,[r].concat(e))})}},wrapper_selector_until:A,wrapper_every_act_firstArgFunc:function(t,n,e){return function(r){var i=o.call(arguments);return u.call(this,function(s,a){var o=h(s,r,a,e(s));t.apply(n,[s,o].concat(i.slice(1)))}),this}},wrapper_every_act:_,wrapper_name_value:function(t,e,r){return function(i,s){return n.isPlainObject(i)||n.isDefined(s)?(u.call(this,function(n,a){var o;o=r?h(n,s,a,r(n,i)):s,t.apply(e,[n,i,o])}),this):this[0]?t.apply(e,[this[0],i]):void 0}}},t.attach("domx.query",S)}),t("skylark-domx-query/main",["./query","skylark-domx-styler"],function(t,n){return t.fn.style=t.wraps.wrapper_name_value(n.css,n),t.fn.css=t.wraps.wrapper_name_value(n.css,n),t.fn.hasClass=t.wraps.wrapper_some_chk(n.hasClass,n),t.fn.addClass=t.wraps.wrapper_every_act_firstArgFunc(n.addClass,n,n.className),t.fn.removeClass=t.wraps.wrapper_every_act_firstArgFunc(n.removeClass,n,n.className),t.fn.toggleClass=t.wraps.wrapper_every_act_firstArgFunc(n.toggleClass,n,n.className),t.fn.replaceClass=function(t,n){return this.removeClass(n),this.addClass(t),this},t.fn.replaceClass=function(t,n){return this.removeClass(n),this.addClass(t),this},t}),t("skylark-domx-query",["skylark-domx-query/main"],function(t){return t})}(e),!r){var a=require("skylark-langx-ns");i?module.exports=a:n.skylarkjs=a}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-query.js.map
