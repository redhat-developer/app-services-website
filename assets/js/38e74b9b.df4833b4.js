"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5095],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(t),f=i,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||s;return t?n.createElement(d,a(a({ref:r},p),{},{components:t})):n.createElement(d,a({ref:r},p))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=m;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8934:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=t(7462),i=t(3366),s=(t(7294),t(3905)),a=["components"],o={},c=void 0,l={unversionedId:"cliref/rhoas_service-registry_use",id:"cliref/rhoas_service-registry_use",isDocsHomePage:!1,title:"rhoas_service-registry_use",description:"rhoas service-registry use",source:"@site/docs/cliref/rhoas_service-registry_use.md",sourceDirName:"cliref",slug:"/cliref/rhoas_service-registry_use",permalink:"/app-services-website/cliref/rhoas_service-registry_use",editUrl:"https://github.com/redhat-developer/app-services-website/docs/cliref/rhoas_service-registry_use.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rhoas_service-registry_role_revoke",permalink:"/app-services-website/cliref/rhoas_service-registry_role_revoke"},next:{title:"rhoas_status",permalink:"/app-services-website/cliref/rhoas_status"}},p=[{value:"rhoas service-registry use",id:"rhoas-service-registry-use",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],u={toc:p};function m(e){var r=e.components,t=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"rhoas-service-registry-use"},"rhoas service-registry use"),(0,s.kt)("p",null,"[beta]"," Use a Service Registry instance"),(0,s.kt)("h3",{id:"synopsis"},"Synopsis"),(0,s.kt)("p",null,"Select a Service Registry instance to use with all instance-specific commands.\nYou can specify a Service Registry instance by --name or --id."),(0,s.kt)("p",null,"When you set the Service Registry instance to be used, it is set as the current instance for all rhoas service-registry artifact commands."),(0,s.kt)("p",null,"This command is available as part of the Development Preview release."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"rhoas service-registry use [flags]\n")),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"# Use a Service Registry instance by name\nrhoas service-registry use --name <name>\n\n# Use a Service Registry instance by ID\nrhoas service-registry use --id <id>\n\n")),(0,s.kt)("h3",{id:"options"},"Options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"      --id string     Unique ID of the Service Registry instance you want to set as the current instance\n      --name string   Name the Service Registry instance you want to set as the current instance\n")),(0,s.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n")),(0,s.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_service-registry"},"rhoas service-registry"),"\t - ","[beta]"," Service Registry commands")))}m.isMDXComponent=!0}}]);