"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[31060],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12720:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"Template Creator Permissions",weight:10},l=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions",title:"Template Creator Permissions",description:"Administrators have the permission to create RKE templates, and only administrators can give that permission to other users.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663020129,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Template Creator Permissions",weight:10},sidebar:"tutorialSidebar",previous:{title:"RKE Templates",permalink:"/v2.0-v2.4/pages-for-subheaders/about-rke1-templates"},next:{title:"Access and Sharing",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates"}},u={},c=[{value:"Allowing a User to Create Templates",id:"allowing-a-user-to-create-templates",level:3},{value:"Allowing New Users to Create Templates by Default",id:"allowing-new-users-to-create-templates-by-default",level:3},{value:"Revoking Permission to Create Templates",id:"revoking-permission-to-create-templates",level:3}],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Administrators have the permission to create RKE templates, and only administrators can give that permission to other users."),(0,o.kt)("p",null,"For more information on administrator permissions, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"documentation on global permissions"),"."),(0,o.kt)("h1",{id:"giving-users-permission-to-create-templates"},"Giving Users Permission to Create Templates"),(0,o.kt)("p",null,"Templates can only be created by users who have the global permission ",(0,o.kt)("strong",{parentName:"p"},"Create RKE Templates.")),(0,o.kt)("p",null,"Administrators have the global permission to create templates, and only administrators can give that permission to other users."),(0,o.kt)("p",null,"For information on allowing users to modify existing templates, refer to ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates"},"Sharing Templates.")),(0,o.kt)("p",null,"Administrators can give users permission to create RKE templates in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"By editing the permissions of an ",(0,o.kt)("a",{parentName:"li",href:"#allowing-a-user-to-create-templates"},"individual user")),(0,o.kt)("li",{parentName:"ul"},"By changing the ",(0,o.kt)("a",{parentName:"li",href:"#allowing-new-users-to-create-templates-by-default"},"default permissions of new users"))),(0,o.kt)("h3",{id:"allowing-a-user-to-create-templates"},"Allowing a User to Create Templates"),(0,o.kt)("p",null,"An administrator can individually grant the role ",(0,o.kt)("strong",{parentName:"p"},"Create RKE Templates")," to any existing user by following these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the global view, click the ",(0,o.kt)("strong",{parentName:"li"},"Users")," tab. Choose the user you want to edit and click the ",(0,o.kt)("strong",{parentName:"li"},"\u22ee"," > Edit.")),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Global Permissions")," section, choose ",(0,o.kt)("strong",{parentName:"li"},"Custom")," and select the ",(0,o.kt)("strong",{parentName:"li"},"Create RKE Templates")," role along with any other roles the user should have. Click ",(0,o.kt)("strong",{parentName:"li"},"Save."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The user has permission to create RKE templates."),(0,o.kt)("h3",{id:"allowing-new-users-to-create-templates-by-default"},"Allowing New Users to Create Templates by Default"),(0,o.kt)("p",null,"Alternatively, the administrator can give all new users the default permission to create RKE templates by following the following steps. This will not affect the permissions of existing users."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Global")," view, click ",(0,o.kt)("strong",{parentName:"li"},"Security > Roles.")),(0,o.kt)("li",{parentName:"ol"},"Under the ",(0,o.kt)("strong",{parentName:"li"},"Global")," roles tab, go to the role ",(0,o.kt)("strong",{parentName:"li"},"Create RKE Templates")," and click the ",(0,o.kt)("strong",{parentName:"li"},"\u22ee"," > Edit"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the option ",(0,o.kt)("strong",{parentName:"li"},"Yes: Default role for new users")," and click ",(0,o.kt)("strong",{parentName:"li"},"Save."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Any new user created in this Rancher installation will be able to create RKE templates. Existing users will not get this permission."),(0,o.kt)("h3",{id:"revoking-permission-to-create-templates"},"Revoking Permission to Create Templates"),(0,o.kt)("p",null,"Administrators can remove a user's permission to create templates with the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the global view, click the ",(0,o.kt)("strong",{parentName:"li"},"Users")," tab. Choose the user you want to edit and click the ",(0,o.kt)("strong",{parentName:"li"},"\u22ee"," > Edit.")),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Global Permissions")," section, un-check the box for ",(0,o.kt)("strong",{parentName:"li"},"Create RKE Templates"),". In this section, you can change the user back to a standard user, or give the user a different set of custom permissions."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The user cannot create RKE templates."))}d.isMDXComponent=!0}}]);