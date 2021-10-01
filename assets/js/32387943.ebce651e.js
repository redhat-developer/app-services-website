"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2542],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),u=i,m=d["".concat(c,".").concat(u)]||d[u]||f[u]||n;return r?a.createElement(m,s(s({ref:t},p),{},{components:r})):a.createElement(m,s({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9422:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=r(7462),i=r(3366),n=(r(7294),r(3905)),s=["components"],o={},c=void 0,l={unversionedId:"cliref/rhoas_service-registry_artifact_metadata-set",id:"cliref/rhoas_service-registry_artifact_metadata-set",isDocsHomePage:!1,title:"rhoas_service-registry_artifact_metadata-set",description:"rhoas service-registry artifact metadata-set",source:"@site/docs/cliref/rhoas_service-registry_artifact_metadata-set.md",sourceDirName:"cliref",slug:"/cliref/rhoas_service-registry_artifact_metadata-set",permalink:"/app-services-website/cliref/rhoas_service-registry_artifact_metadata-set",editUrl:"https://github.com/redhat-developer/app-services-website/docs/cliref/rhoas_service-registry_artifact_metadata-set.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rhoas_service-registry_artifact_metadata-get",permalink:"/app-services-website/cliref/rhoas_service-registry_artifact_metadata-get"},next:{title:"rhoas_service-registry_artifact_state-set",permalink:"/app-services-website/cliref/rhoas_service-registry_artifact_state-set"}},p=[{value:"rhoas service-registry artifact metadata-set",id:"rhoas-service-registry-artifact-metadata-set",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],f={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,s);return(0,n.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"rhoas-service-registry-artifact-metadata-set"},"rhoas service-registry artifact metadata-set"),(0,n.kt)("p",null,"[beta]"," Update artifact metadata"),(0,n.kt)("h3",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Updates the metadata for an artifact in a Service Registry instance\nEditable metadata includes fields like name and description"),(0,n.kt)("p",null,"This command is available as part of the Development Preview release."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"rhoas service-registry artifact metadata-set [flags]\n")),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'## Update the metadata for an artifact\nrhoas service-registry artifact metadata-set --artifact-id=my-artifact --group=my-group --name=my-name --description=my-description\n\n## Update the metadata for an artifact using your default editor ($EDITOR)\nrhoas service-registry artifact metadata-set --artifact-id=my-artifact\n\n##  Update the metadata for an artifact using Visual Studio Code\nEDITOR="code -w" rhoas service-registry artifact metadata-set --artifact-id=my-artifact\n\n')),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --artifact-id string   ID of the artifact\n      --description string   Custom description of the artifact\n  -g, --group string         Artifact group (default "default")\n      --instance-id string   ID of the Service Registry instance to be used. By default, uses the currently selected instance\n      --name string          Custom name of the artifact\n  -o, --output string        Output format (json, yaml, yml)\n')),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n")),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_service-registry_artifact"},"rhoas service-registry artifact"),"\t - ","[beta]"," Manage Service Registry artifacts")))}d.isMDXComponent=!0}}]);