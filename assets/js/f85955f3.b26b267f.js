"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[14418],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32542:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"Installing Docker",weight:1},s=void 0,c={unversionedId:"getting-started/installation-and-upgrade/installation-requirements/install-docker",id:"version-2.5/getting-started/installation-and-upgrade/installation-requirements/install-docker",title:"Installing Docker",description:"Docker is required to be installed on nodes where the Rancher server will be installed with Helm or Docker.",source:"@site/versioned_docs/version-2.5/getting-started/installation-and-upgrade/installation-requirements/install-docker.md",sourceDirName:"getting-started/installation-and-upgrade/installation-requirements",slug:"/getting-started/installation-and-upgrade/installation-requirements/install-docker",permalink:"/v2.5/getting-started/installation-and-upgrade/installation-requirements/install-docker",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/installation-and-upgrade/installation-requirements/install-docker.md",tags:[],version:"2.5",lastUpdatedAt:1663020129,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Installing Docker",weight:1},sidebar:"tutorialSidebar",previous:{title:"Installation Requirements",permalink:"/v2.5/pages-for-subheaders/installation-requirements"},next:{title:"Port Requirements",permalink:"/v2.5/getting-started/installation-and-upgrade/installation-requirements/port-requirements"}},u={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Docker is required to be installed on nodes where the Rancher server will be installed with Helm or Docker."),(0,i.kt)("p",null,"There are a couple of options for installing Docker. One option is to refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"official Docker documentation")," about how to install Docker on Linux. The steps will vary based on the Linux distribution."),(0,i.kt)("p",null,"Another option is to use one of Rancher's Docker installation scripts, which are available for most recent versions of Docker."),(0,i.kt)("p",null,"For example, this command could be used to install Docker 20.10 on Ubuntu:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl https://releases.rancher.com/install-docker/20.10.sh | sh\n")),(0,i.kt)("p",null,"Rancher has installation scripts for every version of upstream Docker that Kubernetes supports. To find out whether a script is available for installing a certain Docker version, refer to this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/install-docker"},"GitHub repository,")," which contains all of Rancher's Docker installation scripts."))}f.isMDXComponent=!0}}]);