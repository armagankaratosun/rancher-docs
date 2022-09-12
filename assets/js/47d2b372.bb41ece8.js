"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[99871],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96540:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={title:"OPA Gatekeeper",weight:16},l=void 0,c={unversionedId:"explanations/integrations-in-rancher/opa-gatekeeper",id:"explanations/integrations-in-rancher/opa-gatekeeper",title:"OPA Gatekeeper",description:"To ensure consistency and compliance, every organization needs the ability to define and enforce policies in its environment in an automated way. OPA (Open Policy Agent) is a policy engine that facilitates policy-based control for cloud native environments. Rancher provides the ability to enable OPA Gatekeeper in Kubernetes clusters, and also installs a couple of built-in policy definitions, which are also called constraint templates.",source:"@site/docs/explanations/integrations-in-rancher/opa-gatekeeper.md",sourceDirName:"explanations/integrations-in-rancher",slug:"/explanations/integrations-in-rancher/opa-gatekeeper",permalink:"/explanations/integrations-in-rancher/opa-gatekeeper",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/opa-gatekeeper.md",tags:[],version:"current",lastUpdatedAt:1663020129,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"OPA Gatekeeper",weight:16},sidebar:"tutorialSidebar",previous:{title:"NeuVector Integration",permalink:"/explanations/integrations-in-rancher/neuvector"},next:{title:"FAQ",permalink:"/faq"}},p={},d=[{value:"How the OPA Gatekeeper Integration Works",id:"how-the-opa-gatekeeper-integration-works",level:2},{value:"Enabling OPA Gatekeeper in a Cluster",id:"enabling-opa-gatekeeper-in-a-cluster",level:2},{value:"Enabling OPA Gatekeeper",id:"enabling-opa-gatekeeper",level:3},{value:"Constraint Templates",id:"constraint-templates",level:2},{value:"Creating and Configuring Constraints",id:"creating-and-configuring-constraints",level:2},{value:"Exempting Rancher&#39;s System Namespaces from Constraints",id:"exempting-ranchers-system-namespaces-from-constraints",level:3},{value:"Enforcing Constraints in your Cluster",id:"enforcing-constraints-in-your-cluster",level:2},{value:"Audit and Violations in your Cluster",id:"audit-and-violations-in-your-cluster",level:2},{value:"Disabling Gatekeeper",id:"disabling-gatekeeper",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To ensure consistency and compliance, every organization needs the ability to define and enforce policies in its environment in an automated way. ",(0,r.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/"},"OPA (Open Policy Agent)")," is a policy engine that facilitates policy-based control for cloud native environments. Rancher provides the ability to enable OPA Gatekeeper in Kubernetes clusters, and also installs a couple of built-in policy definitions, which are also called constraint templates. "),(0,r.kt)("p",null,"OPA provides a high-level declarative language that lets you specify policy as code and ability to extend simple APIs to offload policy decision-making."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper"},"OPA Gatekeeper")," is a project that provides integration between OPA and Kubernetes. OPA Gatekeeper provides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An extensible, parameterized policy library."),(0,r.kt)("li",{parentName:"ul"},'Native Kubernetes CRDs for instantiating the policy library, also called \u201cconstraints."'),(0,r.kt)("li",{parentName:"ul"},'Native Kubernetes CRDs for extending the policy library, also called "constraint templates."'),(0,r.kt)("li",{parentName:"ul"},"Audit functionality.")),(0,r.kt)("p",null,"To read more about OPA, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/"},"official documentation.")),(0,r.kt)("h2",{id:"how-the-opa-gatekeeper-integration-works"},"How the OPA Gatekeeper Integration Works"),(0,r.kt)("p",null,"Kubernetes provides the ability to extend API server functionality via admission controller webhooks, which are invoked whenever a resource is created, updated or deleted. Gatekeeper is installed as a validating webhook and enforces policies defined by Kubernetes custom resource definitions. In addition to the admission control usage, Gatekeeper provides the capability to audit existing resources in Kubernetes clusters and mark current violations of enabled policies."),(0,r.kt)("p",null,"OPA Gatekeeper is made available via Rancher's Helm system chart, and it is installed in a namespace named ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper-system.")),(0,r.kt)("h2",{id:"enabling-opa-gatekeeper-in-a-cluster"},"Enabling OPA Gatekeeper in a Cluster"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In Rancher v2.5, the OPA Gatekeeper application was improved. The Rancher v2.4 feature can't be upgraded to the new version in Rancher v2.5. If you installed OPA Gatekeeper in Rancher v2.4, you will need to uninstall OPA Gatekeeper and its CRDs from the old UI, then reinstall it in Rancher v2.5. To uninstall the CRDs run the following command in the kubectl console ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl delete crd configs.config.gatekeeper.sh constrainttemplates.templates.gatekeeper.sh"),"."))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisite:")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Only administrators and cluster owners can enable OPA Gatekeeper."))),(0,r.kt)("p",null,"The OPA Gatekeeper Helm chart can be installed from ",(0,r.kt)("strong",{parentName:"p"},"Apps & Marketplace"),"."),(0,r.kt)("h3",{id:"enabling-opa-gatekeeper"},"Enabling OPA Gatekeeper"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to enable OPA Gatekeeper and click ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"li"},"Apps & Marketplace"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Charts")," and click ",(0,r.kt)("strong",{parentName:"li"},"OPA Gatekeeper"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Install"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," OPA Gatekeeper is deployed in your Kubernetes cluster."),(0,r.kt)("h2",{id:"constraint-templates"},"Constraint Templates"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper#constraint-templates"},"Constraint templates")," are Kubernetes custom resources that define the schema and Rego logic of the OPA policy to be applied by Gatekeeper. For more information on the Rego policy language, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/policy-language/"},"official documentation.")),(0,r.kt)("p",null,"When OPA Gatekeeper is enabled, Rancher installs some templates by default."),(0,r.kt)("p",null,"To list the constraint templates installed in the cluster, go to the left side menu under OPA Gatekeeper and click on ",(0,r.kt)("strong",{parentName:"p"},"Templates"),"."),(0,r.kt)("p",null,"Rancher also provides the ability to create your own constraint templates by importing YAML definitions."),(0,r.kt)("h2",{id:"creating-and-configuring-constraints"},"Creating and Configuring Constraints"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper#constraints"},"Constraints")," are Kubernetes custom resources that define the scope of objects to which a specific constraint template applies to. The complete policy is defined by constraint templates and constraints together."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisite:")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"OPA Gatekeeper must be enabled in the cluster."))),(0,r.kt)("p",null,"To list the constraints installed, go to the left side menu under OPA Gatekeeper, and click on ",(0,r.kt)("strong",{parentName:"p"},"Constraints"),"."),(0,r.kt)("p",null,"New constraints can be created from a constraint template."),(0,r.kt)("p",null,"Rancher provides the ability to create a constraint by using a convenient form that lets you input the various constraint fields."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Edit as yaml")," option is also available to configure the the constraint's yaml definition."),(0,r.kt)("h3",{id:"exempting-ranchers-system-namespaces-from-constraints"},"Exempting Rancher's System Namespaces from Constraints"),(0,r.kt)("p",null,"When a constraint is created, ensure that it does not apply to any Rancher or Kubernetes system namespaces. If the system namespaces are not excluded, then it is possible to see many resources under them marked as violations of the constraint."),(0,r.kt)("p",null,"To limit the scope of the constraint only to user namespaces, always specify these namespaces under the ",(0,r.kt)("strong",{parentName:"p"},"Match")," field of the constraint."),(0,r.kt)("p",null,"Also, the constraint may interfere with other Rancher functionality and deny system workloads from being deployed. To avoid this, exclude all Rancher-specific namespaces from your constraints."),(0,r.kt)("h2",{id:"enforcing-constraints-in-your-cluster"},"Enforcing Constraints in your Cluster"),(0,r.kt)("p",null,"When the ",(0,r.kt)("strong",{parentName:"p"},"Enforcement Action")," is ",(0,r.kt)("strong",{parentName:"p"},"Deny,")," the constraint is immediately enabled and will deny any requests that violate the policy defined. By default, the enforcement value is ",(0,r.kt)("strong",{parentName:"p"},"Deny"),"."),(0,r.kt)("p",null,"When the ",(0,r.kt)("strong",{parentName:"p"},"Enforcement Action")," is ",(0,r.kt)("strong",{parentName:"p"},"Dryrun,")," then any resources that violate the policy are only recorded under the constraint's status field."),(0,r.kt)("p",null,"To enforce constraints, create a constraint using the form. In the ",(0,r.kt)("strong",{parentName:"p"},"Enforcement Action")," field, choose ",(0,r.kt)("strong",{parentName:"p"},"Deny"),". "),(0,r.kt)("h2",{id:"audit-and-violations-in-your-cluster"},"Audit and Violations in your Cluster"),(0,r.kt)("p",null,"OPA Gatekeeper runs a periodic audit to check if any existing resource violates any enforced constraint. The audit-interval (default 300s) can be configured while installing Gatekeeper."),(0,r.kt)("p",null,"On the Gatekeeper page, any violations of the defined constraints are listed."),(0,r.kt)("p",null,"Also under ",(0,r.kt)("strong",{parentName:"p"},"Constraints,")," the number of violations of the constraint can be found."),(0,r.kt)("p",null,"The detail view of each constraint lists information about the resource that violated the constraint."),(0,r.kt)("h2",{id:"disabling-gatekeeper"},"Disabling Gatekeeper"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the cluster's Dashboard view"),(0,r.kt)("li",{parentName:"ol"},"On the left side menu, expand the cluster menu and click on ",(0,r.kt)("strong",{parentName:"li"},"OPA Gatekeeper"),"."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Disable"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," Upon disabling OPA Gatekeeper, all constraint templates and constraints will also be deleted."))}m.isMDXComponent=!0}}]);