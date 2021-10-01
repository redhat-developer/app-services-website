"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3302],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var i=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=i.createContext({}),l=function(e){var r=i.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=l(e.components);return i.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},m=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(t),f=n,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||s;return t?i.createElement(d,o(o({ref:r},p),{},{components:t})):i.createElement(d,o({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=m;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var l=2;l<s;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},189:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var i=t(7462),n=t(3366),s=(t(7294),t(3905)),o=["components"],a={},c=void 0,l={unversionedId:"cliref/rhoas_service-registry_list",id:"cliref/rhoas_service-registry_list",isDocsHomePage:!1,title:"rhoas_service-registry_list",description:"rhoas service-registry list",source:"@site/docs/cliref/rhoas_service-registry_list.md",sourceDirName:"cliref",slug:"/cliref/rhoas_service-registry_list",permalink:"/app-services-website/cliref/rhoas_service-registry_list",editUrl:"https://github.com/redhat-developer/app-services-website/docs/cliref/rhoas_service-registry_list.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rhoas_service-registry_describe",permalink:"/app-services-website/cliref/rhoas_service-registry_describe"},next:{title:"rhoas_service-registry_role",permalink:"/app-services-website/cliref/rhoas_service-registry_role"}},p=[{value:"rhoas service-registry list",id:"rhoas-service-registry-list",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],u={toc:p};function m(e){var r=e.components,t=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"rhoas-service-registry-list"},"rhoas service-registry list"),(0,s.kt)("p",null,"[beta]"," List Service Registry instances"),(0,s.kt)("h3",{id:"synopsis"},"Synopsis"),(0,s.kt)("p",null,"List all Service Registry instances for your account and paginate over the results."),(0,s.kt)("p",null,"This command is available as part of the Development Preview release."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"rhoas service-registry list [flags]\n")),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"rhoas service-registry list\n\n")),(0,s.kt)("h3",{id:"options"},"Options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'      --limit int32     The maximum number of Service Registry instances to be returned (default 100)\n  -o, --output string   Format in which to display the Service Registry instance (choose from: "json", "yml", "yaml")\n      --page int32      Display the Service Registry instances from the specified page number (default 1)\n')),(0,s.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n")),(0,s.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_service-registry"},"rhoas service-registry"),"\t - ","[beta]"," Service Registry commands")))}m.isMDXComponent=!0}}]);