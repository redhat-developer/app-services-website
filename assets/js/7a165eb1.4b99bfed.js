"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8866],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return r?i.createElement(m,s(s({ref:t},p),{},{components:r})):i.createElement(m,s({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<a;l++)s[l]=r[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4142:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var i=r(7462),n=r(3366),a=(r(7294),r(3905)),s=["components"],o={},c=void 0,l={unversionedId:"cliref/rhoas_service-registry_artifact_delete",id:"cliref/rhoas_service-registry_artifact_delete",isDocsHomePage:!1,title:"rhoas_service-registry_artifact_delete",description:"rhoas service-registry artifact delete",source:"@site/docs/cliref/rhoas_service-registry_artifact_delete.md",sourceDirName:"cliref",slug:"/cliref/rhoas_service-registry_artifact_delete",permalink:"/app-services-website/cliref/rhoas_service-registry_artifact_delete",editUrl:"https://github.com/redhat-developer/app-services-website/docs/cliref/rhoas_service-registry_artifact_delete.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rhoas_service-registry_artifact_create",permalink:"/app-services-website/cliref/rhoas_service-registry_artifact_create"},next:{title:"rhoas_service-registry_artifact_download",permalink:"/app-services-website/cliref/rhoas_service-registry_artifact_download"}},p=[{value:"rhoas service-registry artifact delete",id:"rhoas-service-registry-artifact-delete",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],f={toc:p};function u(e){var t=e.components,r=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"rhoas-service-registry-artifact-delete"},"rhoas service-registry artifact delete"),(0,a.kt)("p",null,"[beta]"," Deletes single or all artifacts in a given group"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Deletes single or all artifacts in a given group."),(0,a.kt)("p",null,'When called without arguments, deletes all artifacts in the group\nWhen --artifact-id is specified, deletes only a single artifact and its version\nWhen --group parameter is missing, the command uses the "default" group.'),(0,a.kt)("p",null,"This command is available as part of the Development Preview release."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rhoas service-registry artifact delete [flags]\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'## Delete all artifacts in the group "default"\nrhoas service-registry artifact delete\n\n## Delete artifact in the group "default" with name "my-artifact"\nrhoas service-registry artifact delete --artifact-id=my-artifact\n\n')),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --artifact-id string   ID of the artifact\n  -g, --group string         Artifact group (default "default")\n      --instance-id string   ID of the Service Registry instance to be used. By default, uses the currently selected instance\n  -y, --yes                  Delete artifact without prompt\n')),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_service-registry_artifact"},"rhoas service-registry artifact"),"\t - ","[beta]"," Manage Service Registry artifacts")))}u.isMDXComponent=!0}}]);