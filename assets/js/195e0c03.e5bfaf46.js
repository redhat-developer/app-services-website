"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9104],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),f=o,d=h["".concat(l,".").concat(f)]||h[f]||u[f]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1587:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={},l=void 0,c={unversionedId:"cliref/rhoas_login",id:"cliref/rhoas_login",isDocsHomePage:!1,title:"rhoas_login",description:"rhoas login",source:"@site/docs/cliref/rhoas_login.md",sourceDirName:"cliref",slug:"/cliref/rhoas_login",permalink:"/app-services-website/cliref/rhoas_login",editUrl:"https://github.com/redhat-developer/app-services-website/docs/cliref/rhoas_login.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rhoas_kafka_use",permalink:"/app-services-website/cliref/rhoas_kafka_use"},next:{title:"rhoas_logout",permalink:"/app-services-website/cliref/rhoas_logout"}},p=[{value:"rhoas login",id:"rhoas-login",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],u={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"rhoas-login"},"rhoas login"),(0,i.kt)("p",null,"Log in to RHOAS"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Log in securely to RHOAS through a web browser."),(0,i.kt)("p",null,"This command opens your web browser, where you can enter your credentials."),(0,i.kt)("p",null,'When using the rhoas CLI in an environment without a web browser,\nyou can log in using an offline-token by passing the "--token" flag, which can be obtained at ',(0,i.kt)("a",{parentName:"p",href:"https://console.redhat.com/openshift/token"},"https://console.redhat.com/openshift/token"),'.\nNote: token-based login is not supported by the Kafka "topic" and "consumer-group" subcommands.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rhoas login [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# securely log in to RHOAS by using a web browser\n$ rhoas login\n\n# print the authentication URL instead of automatically opening the browser\n$ rhoas login --print-sso-url\n\n# log in using an offline token\n$ rhoas login --token <your-token>\n\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --api-gateway string    URL of the API gateway (default "https://api.openshift.com")\n      --auth-url string       The URL of the SSO Authentication server (default "https://sso.redhat.com/auth/realms/redhat-external")\n      --client-id string      OpenID client identifier (default "rhoas-cli-prod")\n      --insecure              Enables insecure communication with the server by disabling TLS certificate and host name verification\n      --mas-auth-url string   The URL of the identity.api.openshift.com Authentication server (default "https://identity.api.openshift.com/auth/realms/rhoas")\n      --print-sso-url         Prints the console login URL, which you can use to log in to RHOAS from a different web browser (this is useful if you need to log in with different credentials than the credentials you used in your default web browser)\n      --scope stringArray     Override the default OpenID scope (to specify multiple scopes, use a separate --scope for each scope) (default [openid])\n  -t, --token string          Log in using an offline token, which can be obtained at https://console.redhat.com/openshift/token\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas"},"rhoas"),"\t - RHOAS CLI")))}h.isMDXComponent=!0}}]);