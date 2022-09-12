"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[82724],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89310:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],l={title:"Disabling Istio",weight:4},s=void 0,c={unversionedId:"explanations/integrations-in-rancher/istio/disable-istio",id:"explanations/integrations-in-rancher/istio/disable-istio",title:"Disabling Istio",description:"This section describes how to uninstall Istio in a cluster or disable a namespace, or workload.",source:"@site/docs/explanations/integrations-in-rancher/istio/disable-istio.md",sourceDirName:"explanations/integrations-in-rancher/istio",slug:"/explanations/integrations-in-rancher/istio/disable-istio",permalink:"/explanations/integrations-in-rancher/istio/disable-istio",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/istio/disable-istio.md",tags:[],version:"current",lastUpdatedAt:1663020129,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Disabling Istio",weight:4},sidebar:"tutorialSidebar",previous:{title:"Role-based Access Control",permalink:"/explanations/integrations-in-rancher/istio/rbac-for-istio"},next:{title:"Configuration Options",permalink:"/pages-for-subheaders/configuration-options"}},p={},d=[{value:"Uninstall Istio in a Cluster",id:"uninstall-istio-in-a-cluster",level:2},{value:"Disable Istio in a Namespace",id:"disable-istio-in-a-namespace",level:2},{value:"Remove the Istio Sidecar from a Workload",id:"remove-the-istio-sidecar-from-a-workload",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section describes how to uninstall Istio in a cluster or disable a namespace, or workload."),(0,r.kt)("h2",{id:"uninstall-istio-in-a-cluster"},"Uninstall Istio in a Cluster"),(0,r.kt)("p",null,"To uninstall Istio,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"li"},"Apps & Marketplace > Installed Apps"),"."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"istio-system")," namespace, go to ",(0,r.kt)("inlineCode",{parentName:"li"},"rancher-istio")," and click ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Delete"),"."),(0,r.kt)("li",{parentName:"ol"},"After ",(0,r.kt)("inlineCode",{parentName:"li"},"rancher-istio")," is deleted, you can then select all the remaining apps in the ",(0,r.kt)("inlineCode",{parentName:"li"},"istio-system")," namespace and click ",(0,r.kt)("strong",{parentName:"li"},"Delete"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-istio")," app in the cluster gets removed. The Istio sidecar cannot be deployed on any workloads in the cluster. "),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can no longer disable and re-enable your Istio installation. If you would like to save your settings for a future install, view and save individual YAMLs to refer back to / reuse for future installations."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Troubleshooting Uninstall:")," If you didn't follow the uninstall steps, you may encounter a warning during uninstall:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'Error: uninstallation completed with 1 error(s): unable to build kubernetes objects for delete: unable to recognize "": no matches for kind "MonitoringDashboard" in version "monitoring.kiali.io/v1alpha1"')),(0,r.kt)("p",null,"This could mean a few things. You either selected all the apps in the ",(0,r.kt)("inlineCode",{parentName:"p"},"istio-system")," namespace and deleted them at the same time, or you deleted ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-istio")," chart dependencies prior to deleting the ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-istio")," chart. Since the uninstall did not complete properly, you will have resources remaining in the ",(0,r.kt)("inlineCode",{parentName:"p"},"istio-system")," namespace that you will need to manually clean up. Another option to avoid manual clean up is to install ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-istio")," again, then uninstall it in the correct order."),(0,r.kt)("h2",{id:"disable-istio-in-a-namespace"},"Disable Istio in a Namespace"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Cluster > Projects/Namespaces"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to the namespace where you want to enable Istio and click ",(0,r.kt)("strong",{parentName:"li"},"\u22ee  > Enable Istio Auto Injection"),". Alternately, click the namespace, and then on the namespace detail page, click ",(0,r.kt)("strong",{parentName:"li"},"\u22ee  > Enable Istio Auto Injection"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," When workloads are deployed in this namespace, they will not have the Istio sidecar."),(0,r.kt)("h2",{id:"remove-the-istio-sidecar-from-a-workload"},"Remove the Istio Sidecar from a Workload"),(0,r.kt)("p",null,"Disable Istio in the namespace, then redeploy the workloads with in it. They will be deployed without the Istio sidecar."))}m.isMDXComponent=!0}}]);