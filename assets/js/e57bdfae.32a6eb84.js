"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[8769],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47519:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Role-based Access Control",weight:3,aliases:["/rancher/v2.5/en/istio/rbac","/rancher/v2.5/en/istio/v2.5/rbac","/rancher/v2.x/en/istio/v2.5/rbac/"]},s=void 0,d={unversionedId:"explanations/integrations-in-rancher/istio/rbac-for-istio",id:"version-2.5/explanations/integrations-in-rancher/istio/rbac-for-istio",title:"Role-based Access Control",description:"This section describes the permissions required to access Istio features.",source:"@site/versioned_docs/version-2.5/explanations/integrations-in-rancher/istio/rbac-for-istio.md",sourceDirName:"explanations/integrations-in-rancher/istio",slug:"/explanations/integrations-in-rancher/istio/rbac-for-istio",permalink:"/v2.5/explanations/integrations-in-rancher/istio/rbac-for-istio",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/explanations/integrations-in-rancher/istio/rbac-for-istio.md",tags:[],version:"2.5",lastUpdatedAt:1663020129,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Role-based Access Control",weight:3,aliases:["/rancher/v2.5/en/istio/rbac","/rancher/v2.5/en/istio/v2.5/rbac","/rancher/v2.x/en/istio/v2.5/rbac/"]},sidebar:"tutorialSidebar",previous:{title:"CPU and Memory Allocations",permalink:"/v2.5/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations"},next:{title:"Disabling Istio",permalink:"/v2.5/explanations/integrations-in-rancher/istio/disable-istio"}},u={},c=[{value:"Cluster-Admin Access",id:"cluster-admin-access",level:2},{value:"Admin and Edit access",id:"admin-and-edit-access",level:2},{value:"Summary of Default Permissions for Kubernetes Default roles",id:"summary-of-default-permissions-for-kubernetes-default-roles",level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section describes the permissions required to access Istio features."),(0,i.kt)("p",null,"The rancher istio chart installs three ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRoles")),(0,i.kt)("h2",{id:"cluster-admin-access"},"Cluster-Admin Access"),(0,i.kt)("p",null,"By default, only those with the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-admin")," ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRole")," can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install istio app in a cluster"),(0,i.kt)("li",{parentName:"ul"},"Configure resource allocations for Istio")),(0,i.kt)("h2",{id:"admin-and-edit-access"},"Admin and Edit access"),(0,i.kt)("p",null,"By default, only Admin and Edit roles can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable and disable Istio sidecar auto-injection for namespaces"),(0,i.kt)("li",{parentName:"ul"},"Add the Istio sidecar to workloads"),(0,i.kt)("li",{parentName:"ul"},"View the traffic metrics and traffic graph for the cluster"),(0,i.kt)("li",{parentName:"ul"},"Configure Istio's resources (such as the gateway, destination rules, or virtual services)")),(0,i.kt)("h2",{id:"summary-of-default-permissions-for-kubernetes-default-roles"},"Summary of Default Permissions for Kubernetes Default roles"),(0,i.kt)("p",null,"Istio creates three ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRoles")," and adds Istio CRD access to the following default K8s ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRole"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"ClusterRole create by chart"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Default K8s ClusterRole"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Rancher Role"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"istio-admin")),(0,i.kt)("td",{parentName:"tr",align:"right"},"admin"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Project Owner")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"istio-edit")),(0,i.kt)("td",{parentName:"tr",align:"right"},"edit"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Project Member")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"istio-view")),(0,i.kt)("td",{parentName:"tr",align:"right"},"view"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Read-only")))),(0,i.kt)("p",null,"Rancher will continue to use cluster-owner, cluster-member, project-owner, project-member, etc as role names, but will utilize default roles to determine access. For each default K8s ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRole")," there are different Istio CRD permissions and K8s actions (Create ( C ), Get ( G ), List ( L ), Watch ( W ), Update ( U ), Patch ( P ), Delete( D ), All ( * )) that can be performed."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"CRDs"),(0,i.kt)("th",{parentName:"tr",align:null},"Admin"),(0,i.kt)("th",{parentName:"tr",align:null},"Edit"),(0,i.kt)("th",{parentName:"tr",align:null},"View"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"config.istio.io")),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"adapters")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"attributemanifests")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"handlers")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"httpapispecbindings")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"httpapispecs")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"instances")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"quotaspecbindings")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"quotaspecs")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"rules")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"templates"))))),(0,i.kt)("td",{parentName:"tr",align:null},"GLW"),(0,i.kt)("td",{parentName:"tr",align:null},"GLW"),(0,i.kt)("td",{parentName:"tr",align:null},"GLW")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"networking.istio.io")),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"destinationrules")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"envoyfilters")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"gateways")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"serviceentries")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"sidecars")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"virtualservices")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"workloadentries"))))),(0,i.kt)("td",{parentName:"tr",align:null},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"GLW")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"security.istio.io")),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"authorizationpolicies")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"peerauthentications")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"requestauthentications"))))),(0,i.kt)("td",{parentName:"tr",align:null},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"GLW")))))}m.isMDXComponent=!0}}]);