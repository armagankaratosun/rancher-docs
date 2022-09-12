"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[30394],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,h=m["".concat(o,".").concat(c)]||m[c]||d[c]||l;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94094:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],s={title:"Installation Requirements",description:"Learn the node requirements for each node running Rancher server when you\u2019re configuring  Rancher to run either in a Docker or Kubernetes setup",weight:1},o=void 0,u={unversionedId:"pages-for-subheaders/installation-requirements",id:"pages-for-subheaders/installation-requirements",title:"Installation Requirements",description:"Learn the node requirements for each node running Rancher server when you\u2019re configuring  Rancher to run either in a Docker or Kubernetes setup",source:"@site/docs/pages-for-subheaders/installation-requirements.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/installation-requirements",permalink:"/pages-for-subheaders/installation-requirements",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/installation-requirements.md",tags:[],version:"current",lastUpdatedAt:1663020129,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Installation Requirements",description:"Learn the node requirements for each node running Rancher server when you\u2019re configuring  Rancher to run either in a Docker or Kubernetes setup",weight:1},sidebar:"tutorialSidebar",previous:{title:"Installing/Upgrading Rancher",permalink:"/pages-for-subheaders/installation-and-upgrade"},next:{title:"Installing Docker",permalink:"/getting-started/installation-and-upgrade/installation-requirements/install-docker"}},p={},d=[{value:"RKE Specific Requirements",id:"rke-specific-requirements",level:3},{value:"K3s Specific Requirements",id:"k3s-specific-requirements",level:3},{value:"RKE2 Specific Requirements",id:"rke2-specific-requirements",level:3},{value:"Installing Docker",id:"installing-docker",level:3},{value:"RKE and Hosted Kubernetes",id:"rke-and-hosted-kubernetes",level:3},{value:"K3s Kubernetes",id:"k3s-kubernetes",level:3},{value:"RKE2 Kubernetes",id:"rke2-kubernetes",level:3},{value:"Docker",id:"docker",level:3},{value:"Node IP Addresses",id:"node-ip-addresses",level:3},{value:"Port Requirements",id:"port-requirements",level:3}],m={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page describes the software, hardware, and networking requirements for the nodes where the Rancher server will be installed. The Rancher server can be installed on a single node or a high-availability Kubernetes cluster."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important:")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you install Rancher on a Kubernetes cluster, requirements are different from the ",(0,l.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},"node requirements for downstream user clusters,")," which will run your apps and services."))),(0,l.kt)("p",null,"Make sure the node(s) for the Rancher server fulfill the following requirements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#operating-systems-and-container-runtime-requirements"},"Operating Systems and Container Runtime Requirements"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rke-specific-requirements"},"RKE Specific Requirements")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#k3s-specific-requirements"},"K3s Specific Requirements")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rke2-specific-requirements"},"RKE2 Specific Requirements")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#installing-docker"},"Installing Docker")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#hardware-requirements"},"Hardware Requirements")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cpu-and-memory"},"CPU and Memory"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rke-and-hosted-kubernetes"},"RKE and Hosted Kubernetes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#k3s-kubernetes"},"K3s Kubernetes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rke2-kubernetes"},"RKE2 Kubernetes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#docker"},"Docker")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#ingress"},"Ingress")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disks"},"Disks")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#networking-requirements"},"Networking Requirements"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#node-ip-addresses"},"Node IP Addresses")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#port-requirements"},"Port Requirements")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#dockershim-support"},"Dockershim Support"))),(0,l.kt)("p",null,"For a list of best practices that we recommend for running the Rancher server in production, refer to the ",(0,l.kt)("a",{parentName:"p",href:"/reference-guides/best-practices/rancher-server/tips-for-running-rancher"},"best practices section.")),(0,l.kt)("p",null,"The Rancher UI works best in Firefox or Chrome."),(0,l.kt)("h1",{id:"operating-systems-and-container-runtime-requirements"},"Operating Systems and Container Runtime Requirements"),(0,l.kt)("p",null,"Rancher should work with any modern Linux distribution."),(0,l.kt)("p",null,"Docker is required for nodes that will run RKE Kubernetes clusters. It is not required for Kubernetes installs."),(0,l.kt)("p",null,"Rancher needs to be installed on a supported Kubernetes version. To find out which versions of Kubernetes are supported for your Rancher version, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")),(0,l.kt)("p",null,"For details on which OS and Docker versions were tested with each Rancher version, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")),(0,l.kt)("p",null,"All supported operating systems are 64-bit x86."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ntp")," (Network Time Protocol) package should be installed. This prevents errors with certificate validation that can occur when the time is not synchronized between the client and server."),(0,l.kt)("p",null,"Some distributions of Linux may have default firewall rules that block communication with Helm. We recommend disabling firewalld. For Kubernetes v1.19, v1.20 and v1.21, firewalld must be turned off."),(0,l.kt)("p",null,"If you don't feel comfortable doing so you might check suggestions in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/28840"},"respective issue"),". Some users were successful ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/28840#issuecomment-787404822"},"creating a separate firewalld zone with a policy of ACCEPT for the Pod CIDR"),"."),(0,l.kt)("p",null,"If you plan to run Rancher on ARM64, see ",(0,l.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64"},"Running on ARM64 (Experimental).")),(0,l.kt)("h3",{id:"rke-specific-requirements"},"RKE Specific Requirements"),(0,l.kt)("p",null,"For the container runtime, RKE should work with any modern Docker version."),(0,l.kt)("p",null,"Note that the following sysctl setting must be applied:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"net.bridge.bridge-nf-call-iptables=1\n")),(0,l.kt)("h3",{id:"k3s-specific-requirements"},"K3s Specific Requirements"),(0,l.kt)("p",null,"For the container runtime, K3s should work with any modern version of Docker or containerd."),(0,l.kt)("p",null,"Rancher needs to be installed on a supported Kubernetes version. To find out which versions of Kubernetes are supported for your Rancher version, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")," To specify the K3s version, use the INSTALL_K3S_VERSION environment variable when running the K3s installation script."),(0,l.kt)("p",null,"If you are installing Rancher on a K3s cluster with ",(0,l.kt)("strong",{parentName:"p"},"Raspbian Buster"),", follow ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/advanced/#enabling-legacy-iptables-on-raspbian-buster"},"these steps")," to switch to legacy iptables."),(0,l.kt)("p",null,"If you are installing Rancher on a K3s cluster with Alpine Linux, follow ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/advanced/#additional-preparation-for-alpine-linux-setup"},"these steps")," for additional setup."),(0,l.kt)("h3",{id:"rke2-specific-requirements"},"RKE2 Specific Requirements"),(0,l.kt)("p",null,"For details on which OS versions were tested with RKE2, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")),(0,l.kt)("p",null,"Docker is not required for RKE2 installs."),(0,l.kt)("h3",{id:"installing-docker"},"Installing Docker"),(0,l.kt)("p",null,"Docker is required for Helm chart installs, and it can be installed by following the steps in the official ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/"},"Docker documentation.")," Rancher also provides ",(0,l.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/installation-requirements/install-docker"},"scripts")," to install Docker with one command."),(0,l.kt)("h1",{id:"hardware-requirements"},"Hardware Requirements"),(0,l.kt)("p",null,"The following sections describe the CPU, memory, and disk requirements for the nodes where the Rancher server is installed."),(0,l.kt)("h1",{id:"cpu-and-memory"},"CPU and Memory"),(0,l.kt)("p",null,"Hardware requirements scale based on the size of your Rancher deployment. Provision each individual node according to the requirements. The requirements are different depending on if you are installing Rancher in a single container with Docker, or if you are installing Rancher on a Kubernetes cluster."),(0,l.kt)("h3",{id:"rke-and-hosted-kubernetes"},"RKE and Hosted Kubernetes"),(0,l.kt)("p",null,"These CPU and memory requirements apply to each host in the Kubernetes cluster where the Rancher server is installed."),(0,l.kt)("p",null,"These requirements apply to RKE Kubernetes clusters, as well as to hosted Kubernetes clusters such as EKS."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Deployment Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Clusters"),(0,l.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,l.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,l.kt)("th",{parentName:"tr",align:null},"RAM"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Small"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 150"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 1500"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"8 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Medium"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 300"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 3000"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"16 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Large"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 500"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 5000"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"32 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-Large"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 1000"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 10,000"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"64 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"XX-Large"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 2000"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 20,000"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"128 GB")))),(0,l.kt)("p",null,"Every use case and environment is different. Please ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/contact/"},"contact Rancher")," to review yours."),(0,l.kt)("h3",{id:"k3s-kubernetes"},"K3s Kubernetes"),(0,l.kt)("p",null,"These CPU and memory requirements apply to each host in a ",(0,l.kt)("a",{parentName:"p",href:"/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"K3s Kubernetes cluster where the Rancher server is installed.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Deployment Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Clusters"),(0,l.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,l.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,l.kt)("th",{parentName:"tr",align:null},"RAM"),(0,l.kt)("th",{parentName:"tr",align:null},"Database Size"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Small"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 150"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 1500"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"8 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Medium"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 300"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 3000"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"16 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Large"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 500"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 5000"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"32 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-Large"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 1000"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 10,000"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"64 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"XX-Large"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 2000"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 20,000"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"128 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")))),(0,l.kt)("p",null,"Every use case and environment is different. Please ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/contact/"},"contact Rancher")," to review yours."),(0,l.kt)("h3",{id:"rke2-kubernetes"},"RKE2 Kubernetes"),(0,l.kt)("p",null,"These CPU and memory requirements apply to each instance with RKE2 installed. Minimum recommendations are outlined here."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Deployment Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Clusters"),(0,l.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,l.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,l.kt)("th",{parentName:"tr",align:null},"RAM"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Small"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 5"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 50"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"5 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Medium"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 15"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 200"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"9 GB")))),(0,l.kt)("h3",{id:"docker"},"Docker"),(0,l.kt)("p",null,"These CPU and memory requirements apply to a host with a ",(0,l.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"single-node")," installation of Rancher."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Deployment Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Clusters"),(0,l.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,l.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,l.kt)("th",{parentName:"tr",align:null},"RAM"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Small"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 5"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 50"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"4 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Medium"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 15"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 200"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"8 GB")))),(0,l.kt)("h1",{id:"ingress"},"Ingress"),(0,l.kt)("p",null,"Each node in the Kubernetes cluster that Rancher is installed on should run an Ingress."),(0,l.kt)("p",null,"The Ingress should be deployed as DaemonSet to ensure your load balancer can successfully route traffic to all nodes."),(0,l.kt)("p",null,"For RKE and K3s installations, you don't have to install the Ingress manually because it is installed by default."),(0,l.kt)("p",null,"For hosted Kubernetes clusters (EKS, GKE, AKS) and RKE2 Kubernetes installations, you will need to set up the ingress."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Amazon EKS:")," For details on how to install Rancher on Amazon EKS, including how to install an ingress so that the Rancher server can be accessed, refer to ",(0,l.kt)("a",{parentName:"li",href:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks"},"this page.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"AKS:")," For details on how to install Rancher with Azure Kubernetes Service, including how to install an ingress so that the Rancher server can be accessed, refer to ",(0,l.kt)("a",{parentName:"li",href:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks"},"this page.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"GKE:")," For details on how to install Rancher with Google Kubernetes Engine, including how to install an ingress so that the Rancher server can be accessed, refer to ",(0,l.kt)("a",{parentName:"li",href:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke"},"this page."))),(0,l.kt)("h1",{id:"disks"},"Disks"),(0,l.kt)("p",null,"Rancher performance depends on etcd in the cluster performance. To ensure optimal speed, we recommend always using SSD disks to back your Rancher management Kubernetes cluster. On cloud providers, you will also want to use the minimum size that allows the maximum IOPS. In larger clusters, consider using dedicated storage devices for etcd data and wal directories."),(0,l.kt)("h1",{id:"networking-requirements"},"Networking Requirements"),(0,l.kt)("p",null,"This section describes the networking requirements for the node(s) where the Rancher server is installed."),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If a server containing Rancher has the ",(0,l.kt)("inlineCode",{parentName:"p"},"X-Frame-Options=DENY")," header, some pages in the new Rancher UI will not be able to render after upgrading from the legacy UI. This is because some legacy pages are embedded as iFrames in the new UI."))),(0,l.kt)("h3",{id:"node-ip-addresses"},"Node IP Addresses"),(0,l.kt)("p",null,"Each node used should have a static IP configured, regardless of whether you are installing Rancher on a single node or on an HA cluster. In case of DHCP, each node should have a DHCP reservation to make sure the node gets the same IP allocated."),(0,l.kt)("h3",{id:"port-requirements"},"Port Requirements"),(0,l.kt)("p",null,"To operate properly, Rancher requires a number of ports to be open on Rancher nodes and on downstream Kubernetes cluster nodes. ",(0,l.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/installation-requirements/port-requirements"},"Port Requirements")," lists all the necessary ports for Rancher and Downstream Clusters for the different cluster types."),(0,l.kt)("h1",{id:"dockershim-support"},"Dockershim Support"),(0,l.kt)("p",null,"For more information on Dockershim support, refer to ",(0,l.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/installation-requirements/dockershim"},"this page"),"."))}c.isMDXComponent=!0}}]);