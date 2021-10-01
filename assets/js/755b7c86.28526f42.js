"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8258],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return h}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(t),h=a,m=f["".concat(c,".").concat(h)]||f[h]||u[h]||i;return t?n.createElement(m,o(o({ref:r},p),{},{components:t})):n.createElement(m,o({ref:r},p))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7941:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],s={},c=void 0,l={unversionedId:"cliref/rhoas",id:"cliref/rhoas",isDocsHomePage:!1,title:"rhoas",description:"rhoas",source:"@site/docs/cliref/rhoas.md",sourceDirName:"cliref",slug:"/cliref/rhoas",permalink:"/app-services-website/cliref/rhoas",editUrl:"https://github.com/redhat-developer/app-services-website/docs/cliref/rhoas.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API guidelines",permalink:"/app-services-website/guideapi/intro"},next:{title:"rhoas_cluster",permalink:"/app-services-website/cliref/rhoas_cluster"}},p=[{value:"rhoas",id:"rhoas",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],u={toc:p};function f(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"rhoas"},"rhoas"),(0,i.kt)("p",null,"RHOAS CLI"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Manage your application services directly from the command line."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# authenticate securely through your web browser\n$ rhoas login\n\n# create a Kafka instance\n$ rhoas kafka create --name my-kafka-instance\n\n# create a service account and save credentials to a JSON file\n$ rhoas service-account create -o json\n\n# connect your Kubernetes/OpenShift cluster to a service\n$ rhoas cluster connect\n\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n      --version   Show rhoas version\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_cluster"},"rhoas cluster"),"\t - View and perform operations on your Kubernetes or OpenShift cluster"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_completion"},"rhoas completion"),"\t - Outputs command completion for the given shell (bash, zsh, or fish)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_kafka"},"rhoas kafka"),"\t - Create, view, use, and manage your Kafka instances"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_login"},"rhoas login"),"\t - Log in to RHOAS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_logout"},"rhoas logout"),"\t - Log out from RHOAS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_service-account"},"rhoas service-account"),"\t - Create, list, describe, delete and update service accounts"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_service-registry"},"rhoas service-registry"),"\t - ","[beta]"," Service Registry commands"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_status"},"rhoas status"),"\t - View the status of all currently used services"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_whoami"},"rhoas whoami"),"\t - Print current username")))}f.isMDXComponent=!0}}]);