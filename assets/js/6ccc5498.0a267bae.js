"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3658],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return h}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),l=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(a.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(t),h=o,d=f["".concat(a,".").concat(h)]||f[h]||p[h]||s;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=f;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<s;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9478:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var n=t(7462),o=t(3366),s=(t(7294),t(3905)),i=["components"],c={},a=void 0,l={unversionedId:"cliref/rhoas_cluster",id:"cliref/rhoas_cluster",isDocsHomePage:!1,title:"rhoas_cluster",description:"rhoas cluster",source:"@site/docs/cliref/rhoas_cluster.md",sourceDirName:"cliref",slug:"/cliref/rhoas_cluster",permalink:"/app-services-website/cliref/rhoas_cluster",editUrl:"https://github.com/redhat-developer/app-services-website/docs/cliref/rhoas_cluster.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rhoas",permalink:"/app-services-website/cliref/rhoas"},next:{title:"rhoas_cluster_bind",permalink:"/app-services-website/cliref/rhoas_cluster_bind"}},u=[{value:"rhoas cluster",id:"rhoas-cluster",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],p={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"rhoas-cluster"},"rhoas cluster"),(0,s.kt)("p",null,"View and perform operations on your Kubernetes or OpenShift cluster"),(0,s.kt)("h3",{id:"synopsis"},"Synopsis"),(0,s.kt)("p",null,"Use these commands to connect and bind your services to Kubernetes or OpenShift applications. You can also check if the Kubernetes or OpenShift cluster has the required Operators to perform this operation."),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"# check status of the connection to your cluster\n$ rhoas cluster status \n\n# connect with cluster without including currently selected services\n$ rhoas cluster connect --ignore-context\n\n# connect with cluster using specified token\n$ rhoas cluster connect --token=value\n\n# connect with cluster and save script to create service binding\n$ rhoas cluster connect --yes > create_service_binding.sh\n\n# connect managed service with your application\n$ rhoas cluster bind \n\n")),(0,s.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n")),(0,s.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas"},"rhoas"),"\t - RHOAS CLI"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_cluster_bind"},"rhoas cluster bind"),"\t - Connect your RHOAS services to Kubernetes or OpenShift applications"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_cluster_connect"},"rhoas cluster connect"),"\t - Connect your services to Kubernetes or OpenShift"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_cluster_status"},"rhoas cluster status"),"\t - View status of the current Kubernetes or OpenShift cluster")))}f.isMDXComponent=!0}}]);