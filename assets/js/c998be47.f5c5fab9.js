"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[570],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(7294);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,c=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(t),f=c,v=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return t?n.createElement(v,o(o({ref:r},l),{},{components:t})):n.createElement(v,o({ref:r},l))}));function f(e,r){var t=arguments,c=r&&r.mdxType;if("string"==typeof e||c){var i=t.length,o=new Array(i);o[0]=d;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:c,o[1]=a;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2767:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=t(7462),c=t(3366),i=(t(7294),t(3905)),o=["components"],a={},s=void 0,u={unversionedId:"cliref/rhoas_service-account_describe",id:"cliref/rhoas_service-account_describe",isDocsHomePage:!1,title:"rhoas_service-account_describe",description:"rhoas service-account describe",source:"@site/docs/cliref/rhoas_service-account_describe.md",sourceDirName:"cliref",slug:"/cliref/rhoas_service-account_describe",permalink:"/app-services-website/cliref/rhoas_service-account_describe",editUrl:"https://github.com/redhat-developer/app-services-website/docs/cliref/rhoas_service-account_describe.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rhoas_service-account_delete",permalink:"/app-services-website/cliref/rhoas_service-account_delete"},next:{title:"rhoas_service-account_list",permalink:"/app-services-website/cliref/rhoas_service-account_list"}},l=[{value:"rhoas service-account describe",id:"rhoas-service-account-describe",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],p={toc:l};function d(e){var r=e.components,t=(0,c.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"rhoas-service-account-describe"},"rhoas service-account describe"),(0,i.kt)("p",null,"View configuration details of a service account"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"View configuration fields and their values for a service account."),(0,i.kt)("p",null,'Pass the "--id" flag to specify which service account you would like to view.'),(0,i.kt)("p",null,"You can view the output as either as JSON or YAML."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rhoas service-account describe [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# view a specific service account\n$ rhoas service-account describe --id=8a06e685-f827-44bc-b0a7-250bc8abe52e --output yml\n\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --id string       The unique ID of the service account to view\n  -o, --output string   Format in which to display the service account (choose from: "json", "yml", "yaml") (default "json")\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_service-account"},"rhoas service-account"),"\t - Create, list, describe, delete and update service accounts")))}d.isMDXComponent=!0}}]);