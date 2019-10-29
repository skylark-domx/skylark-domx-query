/**
 * skylark-domx-query - The skylark query library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,e){var o=e.define,n=e.require,t="function"==typeof o&&o.amd,i=!t&&"undefined"!=typeof exports;if(!t&&!o){var s={};o=e.define=function(r,e,o){"function"==typeof o?(s[r]={factory:o,deps:e.map(function(e){return function(r,e){if("."!==r[0])return r;var o=e.split("/"),n=r.split("/");o.pop();for(var t=0;t<n.length;t++)"."!=n[t]&&(".."==n[t]?o.pop():o.push(n[t]));return o.join("/")}(e,r)}),resolved:!1,exports:null},n(r)):s[r]={factory:null,resolved:!0,exports:o}},n=e.require=function(r){if(!s.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var o=s[r];if(!o.resolved){var t=[];o.deps.forEach(function(r){t.push(n(r))}),o.exports=o.factory.apply(e,t)||null,o.resolved=!0}return o.exports}}if(!o)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(!t){var f=n("skylark-langx/skylark");i?module.exports=f:e.skylarkjs=f}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-query.js.map
