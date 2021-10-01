"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8412],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,v=d["".concat(o,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(v,c(c({ref:t},u),{},{components:r})):n.createElement(v,c({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7230:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),c=["components"],s={},o=void 0,l={unversionedId:"cliref/rhoas_service-account_reset-credentials",id:"cliref/rhoas_service-account_reset-credentials",isDocsHomePage:!1,title:"rhoas_service-account_reset-credentials",description:"rhoas service-account reset-credentials",source:"@site/docs/cliref/rhoas_service-account_reset-credentials.md",sourceDirName:"cliref",slug:"/cliref/rhoas_service-account_reset-credentials",permalink:"/app-services-website/cliref/rhoas_service-account_reset-credentials",editUrl:"https://github.com/redhat-developer/app-services-website/docs/cliref/rhoas_service-account_reset-credentials.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rhoas_service-account_list",permalink:"/app-services-website/cliref/rhoas_service-account_list"},next:{title:"rhoas_service-registry",permalink:"/app-services-website/cliref/rhoas_service-registry"}},u=[{value:"rhoas service-account reset-credentials",id:"rhoas-service-account-reset-credentials",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],p={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"rhoas-service-account-reset-credentials"},"rhoas service-account reset-credentials"),(0,a.kt)("p",null,"Reset service account credentials"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Reset the credentials for a service account.\nThis command will generate a new password for a service account.\nAfter the credentials have been reset, any applications or tools that use the\ncredentials must be updated to use the new password."),(0,a.kt)("p",null,"You must specify an output format into which the credentials will be stored."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"env (default): Store credentials in an env file as environment variables"),(0,a.kt)("li",{parentName:"ul"},"json: Store credentials in a JSON file"),(0,a.kt)("li",{parentName:"ul"},"properties: Store credentials in a properties file, which is typically used in Java-related technologies.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rhoas service-account reset-credentials [flags]\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# start an interactive prompt to reset credentials\n$ rhoas service-account reset-credentials\n\n# reset credentials for the service account specified and save the credentials to a JSON file\n$ rhoas service-account reset-credentials --id 173c1ad9-932d-4007-ae0f-4da74f4d2ccd -o json\n\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --file-format string   Format in which to save the service account credentials (choose from: "env", "json", "properties")\n      --id string            The unique ID of the service account for which you want to reset the credentials\n      --output-file string   Sets a custom file location to save the credentials\n      --overwrite            Forcibly overwrite a credentials file if it already exists\n  -y, --yes                  Skip confirmation to forcibly reset service account credentials\n')),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_service-account"},"rhoas service-account"),"\t - Create, list, describe, delete and update service accounts")))}d.isMDXComponent=!0}}]);