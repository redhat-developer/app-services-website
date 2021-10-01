"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8058],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(t),m=a,k=f["".concat(c,".").concat(m)]||f[m]||l[m]||o;return t?n.createElement(k,s(s({ref:r},p),{},{components:t})):n.createElement(k,s({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6940:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],i={},c=void 0,u={unversionedId:"cliref/rhoas_kafka_consumer-group",id:"cliref/rhoas_kafka_consumer-group",isDocsHomePage:!1,title:"rhoas_kafka_consumer-group",description:"rhoas kafka consumer-group",source:"@site/docs/cliref/rhoas_kafka_consumer-group.md",sourceDirName:"cliref",slug:"/cliref/rhoas_kafka_consumer-group",permalink:"/app-services-website/cliref/rhoas_kafka_consumer-group",editUrl:"https://github.com/redhat-developer/app-services-website/docs/cliref/rhoas_kafka_consumer-group.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rhoas_kafka",permalink:"/app-services-website/cliref/rhoas_kafka"},next:{title:"rhoas_kafka_consumer-group_delete",permalink:"/app-services-website/cliref/rhoas_kafka_consumer-group_delete"}},p=[{value:"rhoas kafka consumer-group",id:"rhoas-kafka-consumer-group",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:p};function f(e){var r=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"rhoas-kafka-consumer-group"},"rhoas kafka consumer-group"),(0,o.kt)("p",null,"Describe, list, and delete consumer groups for the current Apache Kafka instance"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Use these commands to describe, list, and delete consumer groups for the current Kafka instance."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"## Delete a consumer group\nrhoas kafka consumer-group delete --id consumer_group_1\n\n## List all consumer groups\nrhoas kafka consumer-group list\n\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_kafka"},"rhoas kafka"),"\t - Create, view, use, and manage your Kafka instances"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_kafka_consumer-group_delete"},"rhoas kafka consumer-group delete"),"\t - Delete a consumer group"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_kafka_consumer-group_describe"},"rhoas kafka consumer-group describe"),"\t - Describe a consumer group"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_kafka_consumer-group_list"},"rhoas kafka consumer-group list"),"\t - List all consumer groups"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/app-services-website/cliref/rhoas_kafka_consumer-group_reset-offset"},"rhoas kafka consumer-group reset-offset"),"\t - Reset offset for a consumer group")))}f.isMDXComponent=!0}}]);