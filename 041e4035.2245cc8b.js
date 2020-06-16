(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{137:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),o=(r(0),r(238)),i={title:"Starvation",description:"Detect various kinds of situations when no progress is being made because of concurrency errors."},c={id:"checker-starvation",title:"Starvation",description:"Detect various kinds of situations when no progress is being made because of concurrency errors.",source:"@site/docs/checker-starvation.md",permalink:"/docs/next/checker-starvation",version:"next",sidebar:"docs",previous:{title:"Self in Block",permalink:"/docs/next/checker-self-in-block"},next:{title:"TOPL",permalink:"/docs/next/checker-topl"}},l=[{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Detect various kinds of situations when no progress is being made because of concurrency errors."),Object(o.b)("p",null,"Activate with ",Object(o.b)("inlineCode",{parentName:"p"},"--starvation"),"."),Object(o.b)("p",null,"Supported languages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"C/C++/ObjC: Yes"),Object(o.b)("li",{parentName:"ul"},"Java: Yes")),Object(o.b)("p",null,'Detect several kinds of "starvation" problems:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"deadlocks"),Object(o.b)("li",{parentName:"ul"},"violations of ",Object(o.b)("inlineCode",{parentName:"li"},"@Lockless")," annotations"),Object(o.b)("li",{parentName:"ul"},"violations of ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.android.com/reference/android/os/StrictMode"}),'Android\'s "strict mode"')),Object(o.b)("li",{parentName:"ul"},"doing expensive operations on the Android UI thread")),Object(o.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(o.b)("p",null,"The following issue types are reported by this checker:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"all-issue-types#deadlock"}),"DEADLOCK")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"all-issue-types#lockless_violation"}),"LOCKLESS_VIOLATION")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"all-issue-types#starvation"}),"STARVATION")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"all-issue-types#strict_mode_violation"}),"STRICT_MODE_VIOLATION"))))}u.isMDXComponent=!0},238:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,O=p["".concat(i,".").concat(f)]||p[f]||b[f]||o;return r?a.a.createElement(O,c({ref:t},s,{components:r})):a.a.createElement(O,c({ref:t},s))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);