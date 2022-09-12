"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[91951],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||o;return n?r.createElement(m,i(i({ref:t},g),{},{components:n})):r.createElement(m,i({ref:t},g))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26534:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={shortTitle:"Role-based Access Control",title:"Role-based Access Control for Logging",weight:3},s=void 0,c={unversionedId:"explanations/integrations-in-rancher/logging/rbac-for-logging",id:"explanations/integrations-in-rancher/logging/rbac-for-logging",title:"Role-based Access Control for Logging",description:"Rancher logging has two roles, logging-admin and logging-view.",source:"@site/docs/explanations/integrations-in-rancher/logging/rbac-for-logging.md",sourceDirName:"explanations/integrations-in-rancher/logging",slug:"/explanations/integrations-in-rancher/logging/rbac-for-logging",permalink:"/explanations/integrations-in-rancher/logging/rbac-for-logging",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/logging/rbac-for-logging.md",tags:[],version:"current",lastUpdatedAt:1663020129,formattedLastUpdatedAt:"9/12/2022",frontMatter:{shortTitle:"Role-based Access Control",title:"Role-based Access Control for Logging",weight:3},sidebar:"tutorialSidebar",previous:{title:"Migrating to Rancher v2.5 Logging",permalink:"/explanations/integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging"},next:{title:"rancher-logging Helm Chart Options",permalink:"/explanations/integrations-in-rancher/logging/logging-helm-chart-options"}},g={},p=[],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rancher logging has two roles, ",(0,o.kt)("inlineCode",{parentName:"p"},"logging-admin")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"logging-view"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"logging-admin")," gives users full access to namespaced ",(0,o.kt)("inlineCode",{parentName:"li"},"Flows")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Outputs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"logging-view")," allows users to ",(0,o.kt)("em",{parentName:"li"},"view")," namespaced ",(0,o.kt)("inlineCode",{parentName:"li"},"Flows")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Outputs"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"ClusterFlows")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ClusterOutputs"))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Why choose one role over the other?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Edit access to ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterOutput")," resources is powerful. Any user with it has edit access for all logs in the cluster."))),(0,o.kt)("p",null,"In Rancher, the cluster administrator role is the only role with full access to all ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-logging")," resources. Cluster members are not able to edit or read any logging resources. Project owners and members have the following privileges:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Project Owners"),(0,o.kt)("th",{parentName:"tr",align:null},"Project Members"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"able to create namespaced ",(0,o.kt)("inlineCode",{parentName:"td"},"Flows")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"Outputs")," in their projects' namespaces"),(0,o.kt)("td",{parentName:"tr",align:null},"only able to view the ",(0,o.kt)("inlineCode",{parentName:"td"},"Flows")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"Outputs")," in projects' namespaces")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"can collect logs from anything in their projects' namespaces"),(0,o.kt)("td",{parentName:"tr",align:null},"cannot collect any logs in their projects' namespaces")))),(0,o.kt)("p",null,"Both project owners and project members require at least ",(0,o.kt)("em",{parentName:"p"},"one")," namespace in their project to use logging. If they do not, then they may not see the logging button in the top nav dropdown."))}u.isMDXComponent=!0}}]);