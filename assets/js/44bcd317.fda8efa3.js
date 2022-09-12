"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[99669],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),k=s(n),d=r,m=k["".concat(p,".").concat(d)]||k[d]||c[d]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},61525:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"API Tokens",weight:1,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/api/api-tokens/"]},p=void 0,s={unversionedId:"reference-guides/about-the-api/api-tokens",id:"version-2.0-2.4/reference-guides/about-the-api/api-tokens",title:"API Tokens",description:"By default, some cluster-level API tokens are generated with infinite time-to-live (ttl=0). In other words, API tokens with ttl=0 never expire unless you invalidate them. Tokens are not invalidated by changing a password.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/about-the-api/api-tokens.md",sourceDirName:"reference-guides/about-the-api",slug:"/reference-guides/about-the-api/api-tokens",permalink:"/v2.0-v2.4/reference-guides/about-the-api/api-tokens",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/about-the-api/api-tokens.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663020129,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"API Tokens",weight:1,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/api/api-tokens/"]},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/v2.0-v2.4/pages-for-subheaders/about-the-api"},next:{title:"Tools for Logging, Monitoring, and More",permalink:"/v2.0-v2.4/reference-guides/rancher-cluster-tools"}},u={},c=[{value:"Deleting tokens",id:"deleting-tokens",level:3},{value:"Setting TTL on Kubeconfig Tokens",id:"setting-ttl-on-kubeconfig-tokens",level:3}],k={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, some cluster-level API tokens are generated with infinite time-to-live (",(0,o.kt)("inlineCode",{parentName:"p"},"ttl=0"),"). In other words, API tokens with ",(0,o.kt)("inlineCode",{parentName:"p"},"ttl=0")," never expire unless you invalidate them. Tokens are not invalidated by changing a password."),(0,o.kt)("p",null,"You can deactivate API tokens by deleting them or by deactivating the user account."),(0,o.kt)("h3",{id:"deleting-tokens"},"Deleting tokens"),(0,o.kt)("p",null,"To delete a token,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the list of all tokens in the Rancher API view at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<Rancher-Server-IP>/v3/tokens"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access the token you want to delete by its ID. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<Rancher-Server-IP>/v3/tokens/kubectl-shell-user-vqkqt"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Delete.")))),(0,o.kt)("p",null,"Here is the complete list of tokens that are generated with ",(0,o.kt)("inlineCode",{parentName:"p"},"ttl=0"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Token"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"kubeconfig-*")),(0,o.kt)("td",{parentName:"tr",align:null},"Kubeconfig token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"kubectl-shell-*")),(0,o.kt)("td",{parentName:"tr",align:null},"Access to ",(0,o.kt)("inlineCode",{parentName:"td"},"kubectl")," shell in the browser")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"agent-*")),(0,o.kt)("td",{parentName:"tr",align:null},"Token for agent deployment")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"compose-token-*")),(0,o.kt)("td",{parentName:"tr",align:null},"Token for compose")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"helm-token-*")),(0,o.kt)("td",{parentName:"tr",align:null},"Token for Helm chart deployment")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"*-pipeline*")),(0,o.kt)("td",{parentName:"tr",align:null},"Pipeline token for project")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"telemetry-*")),(0,o.kt)("td",{parentName:"tr",align:null},"Telemetry token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"drain-node-*")),(0,o.kt)("td",{parentName:"tr",align:null},"Token for drain (we use ",(0,o.kt)("inlineCode",{parentName:"td"},"kubectl")," for drain because there is no native Kubernetes API)")))),(0,o.kt)("h3",{id:"setting-ttl-on-kubeconfig-tokens"},"Setting TTL on Kubeconfig Tokens"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Available as of v2.4.6"))),(0,o.kt)("p",null,"Starting Rancher v2.4.6, admins can set a global TTL on Kubeconfig tokens. Once the token expires the kubectl command will require the user to authenticate to Rancher."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Note:"))),(0,o.kt)("p",null,"Existing kubeconfig tokens won't be updated with the new TTL. Admins can ",(0,o.kt)("a",{parentName:"p",href:"#deleting-tokens"},"delete old kubeconfig tokens"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Disable the kubeconfig-generate-token setting in the Rancher API view at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<Rancher-Server-IP/v3/settings/kubeconfig-generate-token"),". This setting instructs Rancher to no longer automatically generate a token when a user clicks on download a kubeconfig file. The kubeconfig file will now provide a command to login to Rancher.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Edit the setting and set the value to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to setting kubeconfig-token-ttl-minutes in the Rancher API view at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<Rancher-Server-IP/v3/settings/kubeconfig-token-ttl-minutes"),". By default, kubeconfig-token-ttl-minutes is 960 (16 hours).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Edit the setting and set the value to desired duration in minutes.\n",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Note:"))," This value cannot exceed max-ttl of API tokens.(",(0,o.kt)("inlineCode",{parentName:"p"},"https://<Rancher-Server-IP/v3/settings/auth-token-max-ttl-minutes"),"). In Rancher v2.4.6, auth-token-max-ttl-minutes is set to 1440 (24 hours) by default. Starting Rancher v2.4.7, auth-token-max-ttl-minutes would default to 0 allowing tokens to never expire, similar to v2.4.5."))))}d.isMDXComponent=!0}}]);