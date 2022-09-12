"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[46192],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89585:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"Creating an EKS Cluster",shortTitle:"Amazon EKS",weight:2110,aliases:["/rancher/v2.0-v2.4/en/tasks/clusters/creating-a-cluster/create-cluster-eks/"]},l=void 0,c={unversionedId:"reference-guides/installation-references/amazon-eks-permissions",id:"version-2.0-2.4/reference-guides/installation-references/amazon-eks-permissions",title:"Creating an EKS Cluster",description:"Amazon EKS provides a managed control plane for your Kubernetes cluster. Amazon EKS runs the Kubernetes control plane instances across multiple Availability Zones to ensure high availability. Rancher provides an intuitive user interface for managing and deploying the Kubernetes clusters you run in Amazon EKS. With this guide, you will use Rancher to quickly and easily launch an Amazon EKS Kubernetes cluster in your AWS account. For more information on Amazon EKS, see this documentation.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/installation-references/amazon-eks-permissions.md",sourceDirName:"reference-guides/installation-references",slug:"/reference-guides/installation-references/amazon-eks-permissions",permalink:"/v2.0-v2.4/reference-guides/installation-references/amazon-eks-permissions",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/installation-references/amazon-eks-permissions.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663020129,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Creating an EKS Cluster",shortTitle:"Amazon EKS",weight:2110,aliases:["/rancher/v2.0-v2.4/en/tasks/clusters/creating-a-cluster/create-cluster-eks/"]},sidebar:"tutorialSidebar",previous:{title:"Feature Flags",permalink:"/v2.0-v2.4/reference-guides/installation-references/feature-flags"},next:{title:"Configuring OpenLDAP",permalink:"/v2.0-v2.4/pages-for-subheaders/configure-openldap"}},u={},p=[{value:"Prerequisites in Amazon Web Services",id:"prerequisites-in-amazon-web-services",level:2},{value:"Amazon VPC",id:"amazon-vpc",level:3},{value:"IAM Policies",id:"iam-policies",level:3},{value:"Architecture",id:"architecture",level:2},{value:"Create the EKS Cluster",id:"create-the-eks-cluster",level:2},{value:"EKS Cluster Configuration Reference",id:"eks-cluster-configuration-reference",level:2},{value:"Account Access",id:"account-access",level:3},{value:"Service Role",id:"service-role",level:3},{value:"Public IP for Worker Nodes",id:"public-ip-for-worker-nodes",level:3},{value:"VPC &amp; Subnet",id:"vpc--subnet",level:3},{value:"Security Group",id:"security-group",level:3},{value:"Instance Options",id:"instance-options",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"AWS Service Events",id:"aws-service-events",level:2},{value:"Security and Compliance",id:"security-and-compliance",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"Minimum EKS Permissions",id:"minimum-eks-permissions",level:2},{value:"Service Role Permissions",id:"service-role-permissions",level:3},{value:"VPC Permissions",id:"vpc-permissions",level:3}],m={toc:p};function d(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Amazon EKS provides a managed control plane for your Kubernetes cluster. Amazon EKS runs the Kubernetes control plane instances across multiple Availability Zones to ensure high availability. Rancher provides an intuitive user interface for managing and deploying the Kubernetes clusters you run in Amazon EKS. With this guide, you will use Rancher to quickly and easily launch an Amazon EKS Kubernetes cluster in your AWS account. For more information on Amazon EKS, see this ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html"},"documentation"),"."),(0,o.kt)("h2",{id:"prerequisites-in-amazon-web-services"},"Prerequisites in Amazon Web Services"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),"\nDeploying to Amazon AWS will incur charges. For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/eks/pricing/"},"EKS pricing page"),".")),(0,o.kt)("p",null,"To set up a cluster on EKS, you will need to set up an Amazon VPC (Virtual Private Cloud). You will also need to make sure that the account you will be using to create the EKS cluster has the appropriate ",(0,o.kt)("a",{parentName:"p",href:"#minimum-eks-permissions"},"permissions.")," For details, refer to the official guide on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started-console.html#eks-prereqs"},"Amazon EKS Prerequisites"),"."),(0,o.kt)("h3",{id:"amazon-vpc"},"Amazon VPC"),(0,o.kt)("p",null,"You need to set up an Amazon VPC to launch the EKS cluster. The VPC enables you to launch AWS resources into a virtual network that you've defined. For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-public-private-vpc.html"},"Tutorial: Creating a VPC with Public and Private Subnets for Your Amazon EKS Cluster"),"."),(0,o.kt)("h3",{id:"iam-policies"},"IAM Policies"),(0,o.kt)("p",null,"Rancher needs access to your AWS account in order to provision and administer your Kubernetes clusters in Amazon EKS. You'll need to create a user for Rancher in your AWS account and define what that user can access."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a user with programmatic access by following the steps ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html"},"here"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next, create an IAM policy that defines what this user has access to in your AWS account. It's important to only grant this user minimal access within your account. The minimum permissions required for an EKS cluster are listed ",(0,o.kt)("a",{parentName:"p",href:"#minimum-eks-permissions"},"here.")," Follow the steps ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/EKS_IAM_user_policies.html"},"here")," to create an IAM policy and attach it to your user.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Finally, follow the steps ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey"},"here")," to create an access key and secret key for this user."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," It's important to regularly rotate your access and secret keys. See this ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#rotating_access_keys_console"},"documentation")," for more information.")),(0,o.kt)("p",null,"For more detailed information on IAM policies for EKS, refer to the official ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/IAM_policies.html"},"documentation on Amazon EKS IAM Policies, Roles, and Permissions"),"."),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"The figure below illustrates the high-level architecture of Rancher 2.x. The figure depicts a Rancher Server installation that manages two Kubernetes clusters: one created by RKE and another created by EKS."),(0,o.kt)("figcaption",null,"Managing Kubernetes Clusters through Rancher's Authentication Proxy"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Architecture",src:n(16904).Z,width:"766",height:"792"})),(0,o.kt)("h2",{id:"create-the-eks-cluster"},"Create the EKS Cluster"),(0,o.kt)("p",null,"Use Rancher to set up and configure your Kubernetes cluster."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Clusters")," page, click ",(0,o.kt)("strong",{parentName:"p"},"Add Cluster"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose ",(0,o.kt)("strong",{parentName:"p"},"Amazon EKS"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Cluster Name."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("strong",{parentName:"p"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,o.kt)("strong",{parentName:"p"},"Add Member")," to add users that can access the cluster. Use the ",(0,o.kt)("strong",{parentName:"p"},"Role")," drop-down to set permissions for each user.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill out the rest of the form. For help, refer to the ",(0,o.kt)("a",{parentName:"p",href:"#eks-cluster-configuration-reference"},"configuration reference."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")),(0,o.kt)("p",null,"Your cluster is created and assigned a state of ",(0,o.kt)("strong",{parentName:"p"},"Provisioning.")," Rancher is standing up your cluster."),(0,o.kt)("p",null,"You can access your cluster after its state is updated to ",(0,o.kt)("strong",{parentName:"p"},"Active.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,o.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,o.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")),(0,o.kt)("h2",{id:"eks-cluster-configuration-reference"},"EKS Cluster Configuration Reference"),(0,o.kt)("h3",{id:"account-access"},"Account Access"),(0,o.kt)("a",{id:"account-access-2-4"}),(0,o.kt)("p",null,"Complete each drop-down and field using the information obtained for your IAM policy."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Setting"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Region"),(0,o.kt)("td",{parentName:"tr",align:null},"From the drop-down choose the geographical region in which to build your cluster.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Access Key"),(0,o.kt)("td",{parentName:"tr",align:null},"Enter the access key that you created for your IAM policy.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Secret Key"),(0,o.kt)("td",{parentName:"tr",align:null},"Enter the secret key that you created for your IAM policy.")))),(0,o.kt)("h3",{id:"service-role"},"Service Role"),(0,o.kt)("a",{id:"service-role-2-4"}),(0,o.kt)("p",null,"Choose a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html"},"service role"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Service Role"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Standard: Rancher generated service role"),(0,o.kt)("td",{parentName:"tr",align:null},"If you choose this role, Rancher automatically adds a service role for use with the cluster.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Custom: Choose from your existing service roles"),(0,o.kt)("td",{parentName:"tr",align:null},"If you choose this role, Rancher lets you choose from service roles that you're already created within AWS. For more information on creating a custom service role in AWS, see the ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html#create-service-linked-role"},"Amazon documentation"),".")))),(0,o.kt)("h3",{id:"public-ip-for-worker-nodes"},"Public IP for Worker Nodes"),(0,o.kt)("a",{id:"public-ip-for-worker-nodes-2-4"}),(0,o.kt)("p",null,"Your selection for this option determines what options are available for ",(0,o.kt)("strong",{parentName:"p"},"VPC & Subnet"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"When your cluster nodes are provisioned, they're assigned a both a private and public IP address.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"No: Private IPs only"),(0,o.kt)("td",{parentName:"tr",align:null},"When your cluster nodes are provisioned, they're assigned only a private IP address.",(0,o.kt)("br",null),(0,o.kt)("br",null),"If you choose this option, you must also choose a ",(0,o.kt)("strong",{parentName:"td"},"VPC & Subnet")," that allow your instances to access the internet. This access is required so that your worker nodes can connect to the Kubernetes control plane.")))),(0,o.kt)("h3",{id:"vpc--subnet"},"VPC & Subnet"),(0,o.kt)("a",{id:"vpc-and-subnet-2-4"}),(0,o.kt)("p",null,"The available options depend on the ",(0,o.kt)("a",{parentName:"p",href:"#public-ip-for-worker-nodes"},"public IP for worker nodes.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Standard: Rancher generated VPC and Subnet"),(0,o.kt)("td",{parentName:"tr",align:null},"While provisioning your cluster, Rancher generates a new VPC and Subnet.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Custom: Choose from your existing VPC and Subnets"),(0,o.kt)("td",{parentName:"tr",align:null},"While provisioning your cluster, Rancher configures your nodes to use a VPC and Subnet that you've already ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/vpc/latest/userguide/getting-started-ipv4.html"},"created in AWS"),". If you choose this option, complete the remaining steps below.")))),(0,o.kt)("p",null," For more information, refer to the AWS documentation for ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html"},"Cluster VPC Considerations"),". Follow one of the sets of instructions below based on your selection from the previous step."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html"},"What Is Amazon VPC?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html"},"VPCs and Subnets"))),(0,o.kt)("p",null,"If you choose to assign a public IP address to your cluster's worker nodes, you have the option of choosing between a VPC that's automatically generated by Rancher (i.e., ",(0,o.kt)("strong",{parentName:"p"},"Standard: Rancher generated VPC and Subnet"),"), or a VPC that you've already created with AWS (i.e., ",(0,o.kt)("strong",{parentName:"p"},"Custom: Choose from your existing VPC and Subnets"),"). Choose the option that best fits your use case."),(0,o.kt)("details",{id:"yes"},(0,o.kt)("summary",null,"Click to expand"),(0,o.kt)("p",null,"If you're using ",(0,o.kt)("strong",{parentName:"p"},"Custom: Choose from your existing VPC and Subnets"),":"),(0,o.kt)("p",null,"(If you're using ",(0,o.kt)("strong",{parentName:"p"},"Standard"),", skip to the ",(0,o.kt)("a",{parentName:"p",href:"#select-instance-options-2-4"},"instance options.)")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure ",(0,o.kt)("strong",{parentName:"p"},"Custom: Choose from your existing VPC and Subnets")," is selected.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the drop-down that displays, choose a VPC.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Next: Select Subnets"),". Then choose one of the ",(0,o.kt)("strong",{parentName:"p"},"Subnets")," that displays.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Next: Select Security Group"),".")))),(0,o.kt)("p",null,"If your worker nodes have Private IPs only, you must also choose a ",(0,o.kt)("strong",{parentName:"p"},"VPC & Subnet")," that allow your instances to access the internet. This access is required so that your worker nodes can connect to the Kubernetes control plane."),(0,o.kt)("details",{id:"no"},(0,o.kt)("summary",null,"Click to expand"),(0,o.kt)("p",null,"Follow the steps below."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Tip:")," When using only private IP addresses, you can provide your nodes internet access by creating a VPC constructed with two subnets, a private set and a public set.  The private set should have its route tables configured to point toward a NAT in the public set.  For more information on routing traffic from private subnets, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_NAT_Instance.html"},"official AWS documentation"),".")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the drop-down that displays, choose a VPC.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Next: Select Subnets"),". Then choose one of the ",(0,o.kt)("strong",{parentName:"p"},"Subnets")," that displays.")))),(0,o.kt)("h3",{id:"security-group"},"Security Group"),(0,o.kt)("a",{id:"security-group-2-4"}),(0,o.kt)("p",null,"Amazon Documentation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html"},"Cluster Security Group Considerations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html"},"Security Groups for Your VPC")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/getting-started-ipv4.html#getting-started-create-security-group"},"Create a Security Group"))),(0,o.kt)("h3",{id:"instance-options"},"Instance Options"),(0,o.kt)("a",{id:"select-instance-options-2-4"}),(0,o.kt)("p",null,"Instance type and size of your worker nodes affects how many IP addresses each worker node will have available. See this ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI"},"documentation")," for more information."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Instance Type"),(0,o.kt)("td",{parentName:"tr",align:null},"Choose the ",(0,o.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/instance-types/"},"hardware specs")," for the instance you're provisioning.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Custom AMI Override"),(0,o.kt)("td",{parentName:"tr",align:null},"If you want to use a custom ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html#creating-an-ami"},"Amazon Machine Image")," (AMI), specify it here. By default, Rancher will use the ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html"},"EKS-optimized AMI")," for the EKS version that you chose.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Desired ASG Size"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of instances that your cluster will provision.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"User Data"),(0,o.kt)("td",{parentName:"tr",align:null},"Custom commands can to be passed to perform automated configuration tasks ",(0,o.kt)("strong",{parentName:"td"},"WARNING: Modifying this may cause your nodes to be unable to join the cluster.")," ",(0,o.kt)("em",{parentName:"td"},"Note: Available as of v2.2.0"))))),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If your changes were overwritten, it could be due to the way the cluster data is synced with EKS. Changes shouldn't be made to the cluster from another source, such as in the EKS console, and in Rancher within a five-minute span. For information on how this works and how to configure the refresh interval, refer to ",(0,o.kt)("a",{parentName:"p",href:"#syncing"},"Syncing.")),(0,o.kt)("p",null,"If an unauthorized error is returned while attempting to modify or import the cluster and the cluster was not created with the role or user that your credentials belong to, refer to ",(0,o.kt)("a",{parentName:"p",href:"#security-and-compliance"},"Security and Compliance.")),(0,o.kt)("p",null,"For any issues or troubleshooting details for your Amazon EKS Kubernetes cluster, please see this ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/troubleshooting.html"},"documentation"),"."),(0,o.kt)("h2",{id:"aws-service-events"},"AWS Service Events"),(0,o.kt)("p",null,"To find information on any AWS Service events, please see ",(0,o.kt)("a",{parentName:"p",href:"https://status.aws.amazon.com/"},"this page"),"."),(0,o.kt)("h2",{id:"security-and-compliance"},"Security and Compliance"),(0,o.kt)("p",null,"By default only the IAM user or role that created a cluster has access to it. Attempting to access the cluster with any other user or role without additional configuration will lead to an error. In Rancher, this means using a credential that maps to a user or role that was not used to create the cluster will cause an unauthorized error. For example, an EKSCtl cluster will not be imported in Rancher unless the credentials used to import the cluster match the role or user used by EKSCtl. Additional users and roles can be authorized to access a cluster by being added to the aws-auth configmap in the kube-system namespace. For a more in-depth explanation and detailed instructions, please see this ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/amazon-eks-cluster-access/"},"documentation"),"."),(0,o.kt)("p",null,"For more information on security and compliance with your Amazon EKS Kubernetes cluster, please see this ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/shared-responsibilty.html"},"documentation"),"."),(0,o.kt)("h2",{id:"tutorial"},"Tutorial"),(0,o.kt)("p",null,"This ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/opensource/managing-eks-clusters-rancher/"},"tutorial")," on the AWS Open Source Blog will walk you through how to set up an EKS cluster with Rancher, deploy a publicly accessible app to test the cluster, and deploy a sample project to track real-time geospatial data using a combination of other open-source software such as Grafana and InfluxDB."),(0,o.kt)("h2",{id:"minimum-eks-permissions"},"Minimum EKS Permissions"),(0,o.kt)("p",null,"Documented here is a minimum set of permissions necessary to use all functionality of the EKS driver in Rancher. Additional permissions are required for Rancher to provision the ",(0,o.kt)("inlineCode",{parentName:"p"},"Service Role")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"VPC")," resources. Optionally these resources can be created ",(0,o.kt)("strong",{parentName:"p"},"before")," the cluster creation and will be selectable when defining the cluster configuration."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Resource"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Service Role"),(0,o.kt)("td",{parentName:"tr",align:null},"The service role provides Kubernetes the permissions it requires to manage resources on your behalf. Rancher can create the service role with the following ",(0,o.kt)("a",{parentName:"td",href:"/v2.0-v2.4/reference-guides/installation-references/amazon-eks-permissions#service-role-permissions"},"Service Role Permissions"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"VPC"),(0,o.kt)("td",{parentName:"tr",align:null},"Provides isolated network resources utilised by EKS and worker nodes. Rancher can create the VPC resources with the following ",(0,o.kt)("a",{parentName:"td",href:"/v2.0-v2.4/reference-guides/installation-references/amazon-eks-permissions#vpc-permissions"},"VPC Permissions"),".")))),(0,o.kt)("p",null,"Resource targeting uses ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," as the ARN of many of the resources created cannot be known before creating the EKS cluster in Rancher."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "EC2Permisssions",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:RunInstances",\n                "ec2:RevokeSecurityGroupIngress",\n                "ec2:RevokeSecurityGroupEgress",\n                "ec2:DescribeVpcs",\n                "ec2:DescribeTags",\n                "ec2:DescribeSubnets",\n                "ec2:DescribeSecurityGroups",\n                "ec2:DescribeRouteTables",\n                "ec2:DescribeLaunchTemplateVersions",\n                "ec2:DescribeLaunchTemplates",\n                "ec2:DescribeKeyPairs",\n                "ec2:DescribeInternetGateways",\n                "ec2:DescribeImages",\n                "ec2:DescribeAvailabilityZones",\n                "ec2:DescribeAccountAttributes",\n                "ec2:DeleteTags",\n                "ec2:DeleteSecurityGroup",\n                "ec2:DeleteKeyPair",\n                "ec2:CreateTags",\n                "ec2:CreateSecurityGroup",\n                "ec2:CreateLaunchTemplateVersion",\n                "ec2:CreateLaunchTemplate",\n                "ec2:CreateKeyPair",\n                "ec2:AuthorizeSecurityGroupIngress",\n                "ec2:AuthorizeSecurityGroupEgress"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "CloudFormationPermisssions",\n            "Effect": "Allow",\n            "Action": [\n                "cloudformation:ListStacks",\n                "cloudformation:ListStackResources",\n                "cloudformation:DescribeStacks",\n                "cloudformation:DescribeStackResources",\n                "cloudformation:DescribeStackResource",\n                "cloudformation:DeleteStack",\n                "cloudformation:CreateStackSet",\n                "cloudformation:CreateStack"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "IAMPermissions",\n            "Effect": "Allow",\n            "Action": [\n                "iam:PassRole",\n                "iam:ListRoles",\n                "iam:ListRoleTags",\n                "iam:ListInstanceProfilesForRole",\n                "iam:ListInstanceProfiles",\n                "iam:ListAttachedRolePolicies",\n                "iam:GetRole",\n                "iam:GetInstanceProfile",\n                "iam:DetachRolePolicy",\n                "iam:DeleteRole",\n                "iam:CreateRole",\n                "iam:AttachRolePolicy"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "KMSPermisssions",\n            "Effect": "Allow",\n            "Action": "kms:ListKeys",\n            "Resource": "*"\n        },\n        {\n            "Sid": "EKSPermisssions",\n            "Effect": "Allow",\n            "Action": [\n                "eks:UpdateNodegroupVersion",\n                "eks:UpdateNodegroupConfig",\n                "eks:UpdateClusterVersion",\n                "eks:UpdateClusterConfig",\n                "eks:UntagResource",\n                "eks:TagResource",\n                "eks:ListUpdates",\n                "eks:ListTagsForResource",\n                "eks:ListNodegroups",\n                "eks:ListFargateProfiles",\n                "eks:ListClusters",\n                "eks:DescribeUpdate",\n                "eks:DescribeNodegroup",\n                "eks:DescribeFargateProfile",\n                "eks:DescribeCluster",\n                "eks:DeleteNodegroup",\n                "eks:DeleteFargateProfile",\n                "eks:DeleteCluster",\n                "eks:CreateNodegroup",\n                "eks:CreateFargateProfile",\n                "eks:CreateCluster"\n            ],\n            "Resource": "*"\n        }\n    ]\n}\n')),(0,o.kt)("h3",{id:"service-role-permissions"},"Service Role Permissions"),(0,o.kt)("p",null,"Rancher will create a service role with the following trust policy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Action": "sts:AssumeRole",\n      "Principal": {\n        "Service": "eks.amazonaws.com"\n      },\n      "Effect": "Allow",\n      "Sid": ""\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"This role will also have two role policy attachments with the following policies ARNs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"arn:aws:iam::aws:policy/AmazonEKSClusterPolicy\narn:aws:iam::aws:policy/AmazonEKSServicePolicy\n")),(0,o.kt)("p",null,"Permissions required for Rancher to create service role on users behalf during the EKS cluster creation process."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "IAMPermisssions",\n      "Effect": "Allow",\n      "Action": [\n        "iam:AddRoleToInstanceProfile",\n        "iam:AttachRolePolicy",\n        "iam:CreateInstanceProfile",\n        "iam:CreateRole",\n        "iam:CreateServiceLinkedRole",\n        "iam:DeleteInstanceProfile",\n        "iam:DeleteRole",\n        "iam:DetachRolePolicy",\n        "iam:GetInstanceProfile",\n        "iam:GetRole",\n        "iam:ListAttachedRolePolicies",\n        "iam:ListInstanceProfiles",\n        "iam:ListInstanceProfilesForRole",\n        "iam:ListRoles",\n        "iam:ListRoleTags",\n        "iam:PassRole",\n        "iam:RemoveRoleFromInstanceProfile"\n      ],\n      "Resource": "*"\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"vpc-permissions"},"VPC Permissions"),(0,o.kt)("p",null,"Permissions required for Rancher to create VPC and associated resources."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Sid": "VPCPermissions",\n  "Effect": "Allow",\n  "Action": [\n     "ec2:ReplaceRoute",\n     "ec2:ModifyVpcAttribute",\n     "ec2:ModifySubnetAttribute",\n     "ec2:DisassociateRouteTable",\n     "ec2:DetachInternetGateway",\n     "ec2:DescribeVpcs",\n     "ec2:DeleteVpc",\n     "ec2:DeleteTags",\n     "ec2:DeleteSubnet",\n     "ec2:DeleteRouteTable",\n     "ec2:DeleteRoute",\n     "ec2:DeleteInternetGateway",\n     "ec2:CreateVpc",\n     "ec2:CreateSubnet",\n     "ec2:CreateSecurityGroup",\n     "ec2:CreateRouteTable",\n     "ec2:CreateRoute",\n     "ec2:CreateInternetGateway",\n     "ec2:AttachInternetGateway",\n     "ec2:AssociateRouteTable"\n  ],\n  "Resource": "*"\n}\n')))}d.isMDXComponent=!0},16904:function(e,t,n){t.Z=n.p+"assets/images/rancher-architecture-rancher-api-server-2743dae746c64cd2ad66711908be4108.svg"}}]);