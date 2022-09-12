"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[89067],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),s=n(7094),d=n(12466),u="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,n,o=e.lazy,c=e.block,m=e.defaultValue,k=e.values,h=e.groupId,N=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),w=y.tabGroupChoices,C=y.setTabGroupChoices,X=(0,r.useState)(v),R=X[0],T=X[1],E=[],I=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var O=w[h];null!=O&&O!==R&&g.some((function(e){return e.value===O}))&&T(O)}var A=function(e){var t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==R&&(I(t),T(a),null!=h&&C(h,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;n=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var l,o=E.indexOf(e.currentTarget)-1;n=null!=(l=E[o])?l:E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},N)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:A,onClick:A},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":R===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===R}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==R})}))))}function m(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},45148:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(65488),i=n(85162),s=["components"],d={title:"Removing Kubernetes Components from Nodes",description:"Learn about cluster cleanup when removing nodes from your Rancher-launched Kubernetes cluster. What is removed, how to do it manually",weight:2055},u=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes",title:"Removing Kubernetes Components from Nodes",description:"Learn about cluster cleanup when removing nodes from your Rancher-launched Kubernetes cluster. What is removed, how to do it manually",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663020129,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Removing Kubernetes Components from Nodes",description:"Learn about cluster cleanup when removing nodes from your Rancher-launched Kubernetes cluster. What is removed, how to do it manually",weight:2055},sidebar:"tutorialSidebar",previous:{title:"Nodes and Node Pools",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools"},next:{title:"Adding a Pod Security Policy",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy"}},c={},m=[{value:"What Gets Removed?",id:"what-gets-removed",level:2},{value:"Removing a Node from a Cluster by Rancher UI",id:"removing-a-node-from-a-cluster-by-rancher-ui",level:2},{value:"Removing Rancher Components from a Cluster Manually",id:"removing-rancher-components-from-a-cluster-manually",level:2},{value:"Removing Rancher Components from Imported Clusters",id:"removing-rancher-components-from-imported-clusters",level:3},{value:"Windows Nodes",id:"windows-nodes",level:3},{value:"Docker Containers, Images, and Volumes",id:"docker-containers-images-and-volumes",level:3},{value:"Mounts",id:"mounts",level:3},{value:"Directories and Files",id:"directories-and-files",level:3},{value:"Network Interfaces and Iptables",id:"network-interfaces-and-iptables",level:3},{value:"Network Interfaces",id:"network-interfaces",level:3},{value:"Iptables",id:"iptables",level:3}],k={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This section describes how to disconnect a node from a Rancher-launched Kubernetes cluster and remove all of the Kubernetes components from the node. This process allows you to use the node for other purposes."),(0,l.kt)("p",null,"When you use Rancher to install Kubernetes on new nodes in an infrastructure provider, resources (containers/virtual network interfaces) and configuration items (certificates/configuration files) are created."),(0,l.kt)("p",null,"When removing nodes from your Rancher launched Kubernetes cluster (provided that they are in ",(0,l.kt)("inlineCode",{parentName:"p"},"Active")," state), those resources are automatically cleaned, and the only action needed is to restart the node. When a node has become unreachable and the automatic cleanup process cannot be used, we describe the steps that need to be executed before the node can be added to a cluster again."),(0,l.kt)("h2",{id:"what-gets-removed"},"What Gets Removed?"),(0,l.kt)("p",null,"When cleaning nodes provisioned using Rancher, the following components are deleted based on the type of cluster node you're removing."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Removed Component"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"th",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"Nodes Hosted by Infrastructure Provider")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"th",href:"/v2.0-v2.4/pages-for-subheaders/use-existing-nodes"},"Custom Nodes")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"th",href:"/v2.0-v2.4/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"Hosted Cluster")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"th",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/import-existing-clusters"},"Imported Nodes")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"The Rancher deployment namespace (",(0,l.kt)("inlineCode",{parentName:"td"},"cattle-system")," by default)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"serviceAccount"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"clusterRoles"),", and ",(0,l.kt)("inlineCode",{parentName:"td"},"clusterRoleBindings")," labeled by Rancher"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Labels, Annotations, and Finalizers"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rancher Deployment"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Machines, clusters, projects, and user custom resource definitions (CRDs)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"All resources create under the ",(0,l.kt)("inlineCode",{parentName:"td"},"management.cattle.io")," API Group"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"All CRDs created by Rancher v2.x"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"removing-a-node-from-a-cluster-by-rancher-ui"},"Removing a Node from a Cluster by Rancher UI"),(0,l.kt)("p",null,"When the node is in ",(0,l.kt)("inlineCode",{parentName:"p"},"Active")," state, removing the node from a cluster will trigger a process to clean up the node. Please restart the node after the automatic cleanup process is done to make sure any non-persistent data is properly removed."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"To restart a node:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# using reboot\n$ sudo reboot\n\n# using shutdown\n$ sudo shutdown -r now\n")),(0,l.kt)("h2",{id:"removing-rancher-components-from-a-cluster-manually"},"Removing Rancher Components from a Cluster Manually"),(0,l.kt)("p",null,"When a node is unreachable and removed from the cluster, the automatic cleaning process can't be triggered because the node is unreachable. Please follow the steps below to manually remove the Rancher components."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Warning:")," The commands listed below will remove data from the node. Make sure you have created a backup of files you want to keep before executing any of the commands as data will be lost.")),(0,l.kt)("h3",{id:"removing-rancher-components-from-imported-clusters"},"Removing Rancher Components from Imported Clusters"),(0,l.kt)("p",null,"For imported clusters, the process for removing Rancher is a little different. You have the option of simply deleting the cluster in the Rancher UI, or your can run a script that removes Rancher components from the nodes. Both options make the same deletions."),(0,l.kt)("p",null,"After the imported cluster is detached from Rancher, the cluster's workloads will be unaffected and you can access the cluster using the same methods that you did before the cluster was imported into Rancher."),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"By UI / API",mdxType:"TabItem"},(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Warning:")," This process will remove data from your cluster. Make sure you have created a backup of files you want to keep before executing the command, as data will be lost.")),(0,l.kt)("p",null,"After you initiate the removal of an imported cluster using the Rancher UI (or API), the following events occur."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Rancher creates a ",(0,l.kt)("inlineCode",{parentName:"p"},"serviceAccount")," that it uses to remove the Rancher components from the cluster. This account is assigned the ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole"},"clusterRole")," and ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding"},"clusterRoleBinding")," permissions, which are required to remove the Rancher components.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Using the ",(0,l.kt)("inlineCode",{parentName:"p"},"serviceAccount"),", Rancher schedules and runs a ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/"},"job")," that cleans the Rancher components off of the cluster. This job also references the ",(0,l.kt)("inlineCode",{parentName:"p"},"serviceAccount")," and its roles as dependencies, so the job deletes them before its completion.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Rancher is removed from the cluster. However, the cluster persists, running the native version of Kubernetes."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," All components listed for imported clusters in ",(0,l.kt)("a",{parentName:"p",href:"#what-gets-removed"},"What Gets Removed?")," are deleted.")),(0,l.kt)(i.Z,{value:"By Script",mdxType:"TabItem"},(0,l.kt)("p",null,"Rather than cleaning imported cluster nodes using the Rancher UI, you can run a script instead. This functionality is available since ",(0,l.kt)("inlineCode",{parentName:"p"},"v2.1.0"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Prerequisite:")),(0,l.kt)("p",{parentName:"blockquote"},"Install ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl"),".")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open a web browser, navigate to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/blob/master/cleanup/user-cluster.sh"},"GitHub"),", and download ",(0,l.kt)("inlineCode",{parentName:"p"},"user-cluster.sh"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Make the script executable by running the following command from the same directory as ",(0,l.kt)("inlineCode",{parentName:"p"},"user-cluster.sh"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"chmod +x user-cluster.sh\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Air Gap Environments Only:")," Open ",(0,l.kt)("inlineCode",{parentName:"p"},"user-cluster.sh")," and replace ",(0,l.kt)("inlineCode",{parentName:"p"},"yaml_url")," with the URL in ",(0,l.kt)("inlineCode",{parentName:"p"},"user-cluster.yml"),"."),(0,l.kt)("p",{parentName:"li"},"If you don't have an air gap environment, skip this step.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the same directory, run the script and provide the ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher/rancher-agent")," image version which should be equal to the version of Rancher used to manage the cluster. (",(0,l.kt)("inlineCode",{parentName:"p"},"<RANCHER_VERSION>"),"):"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Tip:")),(0,l.kt)("p",{parentName:"blockquote"},"Add the ",(0,l.kt)("inlineCode",{parentName:"p"},"-dry-run")," flag to preview the script's outcome without making changes."),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre"},"./user-cluster.sh rancher/rancher-agent:<RANCHER_VERSION>\n"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The script runs. All components listed for imported clusters in ",(0,l.kt)("a",{parentName:"p",href:"#what-gets-removed"},"What Gets Removed?")," are deleted."))),(0,l.kt)("h3",{id:"windows-nodes"},"Windows Nodes"),(0,l.kt)("p",null,"To clean up a Windows node, you can run a cleanup script located in ",(0,l.kt)("inlineCode",{parentName:"p"},"c:\\etc\\rancher"),". The script deletes Kubernetes generated resources and the execution binary. It also drops the firewall rules and network settings."),(0,l.kt)("p",null,"To run the script, you can use this command in the PowerShell:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pushd c:\\etc\\rancher\n.\\cleanup.ps1\npopd\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The node is reset and can be re-added to a Kubernetes cluster."),(0,l.kt)("h3",{id:"docker-containers-images-and-volumes"},"Docker Containers, Images, and Volumes"),(0,l.kt)("p",null,"Based on what role you assigned to the node, there are Kubernetes components in containers, containers belonging to overlay networking, DNS, ingress controller and Rancher agent. (and pods you created that have been scheduled to this node)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"To clean all Docker containers, images and volumes:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker rm -f $(docker ps -qa)\ndocker rmi -f $(docker images -q)\ndocker volume rm $(docker volume ls -q)\n")),(0,l.kt)("h3",{id:"mounts"},"Mounts"),(0,l.kt)("p",null,"Kubernetes components and secrets leave behind mounts on the system that need to be unmounted."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Mounts"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/var/lib/kubelet/pods/XXX")," (miscellaneous mounts)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/var/lib/kubelet"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/var/lib/rancher"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"To unmount all mounts:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"for mount in $(mount | grep tmpfs | grep '/var/lib/kubelet' | awk '{ print $3 }') /var/lib/kubelet /var/lib/rancher; do umount $mount; done\n")),(0,l.kt)("h3",{id:"directories-and-files"},"Directories and Files"),(0,l.kt)("p",null,"The following directories are used when adding a node to a cluster, and should be removed. You can remove a directory using ",(0,l.kt)("inlineCode",{parentName:"p"},"rm -rf /directory_name"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," Depending on the role you assigned to the node, some of the directories will or won't be present on the node.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Directories"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/etc/ceph"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/etc/cni"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/etc/kubernetes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/opt/cni"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/opt/rke"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/run/secrets/kubernetes.io"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/run/calico"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/run/flannel"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/var/lib/calico"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/var/lib/etcd"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/var/lib/cni"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/var/lib/kubelet"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/var/lib/rancher/rke/log"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/var/log/containers"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/var/log/kube-audit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/var/log/pods"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/var/run/calico"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"To clean the directories:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rm -rf /etc/ceph \\\n       /etc/cni \\\n       /etc/kubernetes \\\n       /opt/cni \\\n       /opt/rke \\\n       /run/secrets/kubernetes.io \\\n       /run/calico \\\n       /run/flannel \\\n       /var/lib/calico \\\n       /var/lib/etcd \\\n       /var/lib/cni \\\n       /var/lib/kubelet \\\n       /var/lib/rancher/rke/log \\\n       /var/log/containers \\\n       /var/log/kube-audit \\\n       /var/log/pods \\\n       /var/run/calico\n")),(0,l.kt)("h3",{id:"network-interfaces-and-iptables"},"Network Interfaces and Iptables"),(0,l.kt)("p",null,"The remaining two components that are changed/configured are (virtual) network interfaces and iptables rules. Both are non-persistent to the node, meaning that they will be cleared after a restart of the node. To remove these components, a restart is recommended."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"To restart a node:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# using reboot\n$ sudo reboot\n\n# using shutdown\n$ sudo shutdown -r now\n")),(0,l.kt)("p",null,"If you want to know more on (virtual) network interfaces or iptables rules, please see the specific subjects below."),(0,l.kt)("h3",{id:"network-interfaces"},"Network Interfaces"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," Depending on the network provider configured for the cluster the node was part of, some of the interfaces will or won't be present on the node.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Interfaces"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flannel.1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cni0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tunl0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"caliXXXXXXXXXXX")," (random interface names)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"vethXXXXXXXX")," (random interface names)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"To list all interfaces:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# Using ip\nip address show\n\n# Using ifconfig\nifconfig -a\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"To remove an interface:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ip link delete interface_name\n")),(0,l.kt)("h3",{id:"iptables"},"Iptables"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," Depending on the network provider configured for the cluster the node was part of, some of the chains will or won't be present on the node.")),(0,l.kt)("p",null,"Iptables rules are used to route traffic from and to containers. The created rules are not persistent, so restarting the node will restore iptables to its original state."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Chains"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cali-failsafe-in"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cali-failsafe-out"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cali-fip-dnat"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cali-fip-snat"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cali-from-hep-forward"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cali-from-host-endpoint"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cali-from-wl-dispatch"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cali-fw-caliXXXXXXXXXXX")," (random chain names)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cali-nat-outgoing"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cali-pri-kns.NAMESPACE")," (chain per namespace)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cali-pro-kns.NAMESPACE")," (chain per namespace)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cali-to-hep-forward"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cali-to-host-endpoint"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cali-to-wl-dispatch"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cali-tw-caliXXXXXXXXXXX")," (random chain names)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cali-wl-to-host"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KUBE-EXTERNAL-SERVICES"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KUBE-FIREWALL"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KUBE-MARK-DROP"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KUBE-MARK-MASQ"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KUBE-NODEPORTS"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KUBE-SEP-XXXXXXXXXXXXXXXX")," (random chain names)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KUBE-SERVICES"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KUBE-SVC-XXXXXXXXXXXXXXXX")," (random chain names)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"To list all iptables rules:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"iptables -L -t nat\niptables -L -t mangle\niptables -L\n")))}h.isMDXComponent=!0}}]);