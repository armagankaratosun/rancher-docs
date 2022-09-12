"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[11532],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return h}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),c=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(a.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,u=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=o,f=d["".concat(a,".").concat(h)]||d[h]||l[h]||u;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var u=t.length,i=new Array(u);i[0]=d;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<u;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98153:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var n=t(87462),o=t(63366),u=(t(67294),t(3905)),i=["components"],s={title:"Setting up the vSphere Cloud Provider",weight:4},a=void 0,c={unversionedId:"pages-for-subheaders/vsphere-cloud-provider",id:"pages-for-subheaders/vsphere-cloud-provider",title:"Setting up the vSphere Cloud Provider",description:"In this section, you'll learn how to set up a vSphere cloud provider for a Rancher managed RKE Kubernetes cluster in vSphere.",source:"@site/docs/pages-for-subheaders/vsphere-cloud-provider.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/vsphere-cloud-provider",permalink:"/pages-for-subheaders/vsphere-cloud-provider",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/vsphere-cloud-provider.md",tags:[],version:"current",lastUpdatedAt:1663020129,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Setting up the vSphere Cloud Provider",weight:4},sidebar:"tutorialSidebar",previous:{title:"Setting up the Google Compute Engine Cloud Provider",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/google-compute-engine"},next:{title:"How to Configure In-tree vSphere Cloud Provider",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-in-tree-vsphere"}},p={},l=[],d={toc:l};function h(e){var r=e.components,t=(0,o.Z)(e,i);return(0,u.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"In this section, you'll learn how to set up a vSphere cloud provider for a Rancher managed RKE Kubernetes cluster in vSphere."),(0,u.kt)("h1",{id:"in-tree-cloud-provider"},"In-tree Cloud Provider"),(0,u.kt)("p",null,"To use the in-tree vSphere cloud provider, you will need to use an RKE configuration option. For details, refer to ",(0,u.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-in-tree-vsphere"},"this page.")),(0,u.kt)("h1",{id:"out-of-tree-cloud-provider"},"Out-of-tree Cloud Provider"),(0,u.kt)("p",null,"To set up the out-of-tree vSphere cloud provider, you will need to install Helm charts from the Rancher marketplace. For details, refer to ",(0,u.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-out-of-tree-vsphere"},"this page.")))}h.isMDXComponent=!0}}]);