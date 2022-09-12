"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[77534],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(u,".").concat(d)]||p[d]||h[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43205:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Users and Groups",weight:1},u=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/manage-users-and-groups",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/manage-users-and-groups",title:"Users and Groups",description:"Rancher relies on users and groups to determine who is allowed to log in to Rancher and which resources they can access. When you configure an external authentication provider, users from that provider will be able to log in to your Rancher server. When a user logs in, the authentication provider will supply your Rancher server with a list of groups to which the user belongs.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/manage-users-and-groups.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/manage-users-and-groups",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/manage-users-and-groups",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/manage-users-and-groups.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663020129,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Users and Groups",weight:1},sidebar:"tutorialSidebar",previous:{title:"Authentication Config",permalink:"/v2.0-v2.4/pages-for-subheaders/authentication-config"},next:{title:"Local Authentication",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/create-local-users"}},c={},h=[{value:"Managing Members",id:"managing-members",level:2},{value:"User Information",id:"user-information",level:2},{value:"Automatically Refreshing User Information",id:"automatically-refreshing-user-information",level:3},{value:"Manually Refreshing User Information",id:"manually-refreshing-user-information",level:3},{value:"Session Length",id:"session-length",level:2}],p={toc:h};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rancher relies on users and groups to determine who is allowed to log in to Rancher and which resources they can access. When you configure an external authentication provider, users from that provider will be able to log in to your Rancher server. When a user logs in, the authentication provider will supply your Rancher server with a list of groups to which the user belongs."),(0,o.kt)("p",null,"Access to clusters, projects, multi-cluster apps, and global DNS providers and entries can be controlled by adding either individual users or groups to these resources. When you add a group to a resource, all users who are members of that group in the authentication provider, will be able to access the resource with the permissions that you've specified for the group. For more information on roles and permissions, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/manage-role-based-access-control-rbac"},"Role Based Access Control"),"."),(0,o.kt)("h2",{id:"managing-members"},"Managing Members"),(0,o.kt)("p",null,"When adding a user or group to a resource, you can search for users or groups by beginning to type their name. The Rancher server will query the authentication provider to find users and groups that match what you've entered. Searching is limited to the authentication provider that you are currently logged in with. For example, if you've enabled GitHub authentication but are logged in using a ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/create-local-users"},"local")," user account, you will not be able to search for GitHub users or groups."),(0,o.kt)("p",null,"All users, whether they are local users or from an authentication provider, can be viewed and managed. From the ",(0,o.kt)("strong",{parentName:"p"},"Global")," view, click on ",(0,o.kt)("strong",{parentName:"p"},"Users"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"SAML Provider Caveats:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"SAML Protocol does not support search or lookup for users or groups. Therefore, there is no validation on users or groups when adding them to Rancher."),(0,o.kt)("li",{parentName:"ul"},"When adding users, the exact user IDs (i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"UID Field"),") must be entered correctly. As you type the user ID, there will be no search for other  user IDs that may match."),(0,o.kt)("li",{parentName:"ul"},"When adding groups, you must select the group from the drop-down that is next to the text box. Rancher assumes that any input from the text box is a user."),(0,o.kt)("li",{parentName:"ul"},"The group drop-down shows only the groups that you are a member of. You will not be able to add groups that you are not a member of.")))),(0,o.kt)("h2",{id:"user-information"},"User Information"),(0,o.kt)("p",null,"Rancher maintains information about each user that logs in through an authentication provider. This information includes whether the user is allowed to access your Rancher server and the list of groups that the user belongs to. Rancher keeps this user information so that the CLI, API, and kubectl can accurately reflect the access that the user has based on their group membership in the authentication provider."),(0,o.kt)("p",null,"Whenever a user logs in to the UI using an authentication provider, Rancher automatically updates this user information."),(0,o.kt)("h3",{id:"automatically-refreshing-user-information"},"Automatically Refreshing User Information"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,o.kt)("p",null,"Rancher will periodically refresh the user information even before a user logs in through the UI. You can control how often Rancher performs this refresh.  From the ",(0,o.kt)("strong",{parentName:"p"},"Global")," view, click on ",(0,o.kt)("strong",{parentName:"p"},"Settings"),". Two settings control this behavior:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"auth-user-info-max-age-seconds"))),(0,o.kt)("p",{parentName:"li"},"  This setting controls how old a user's information can be before Rancher refreshes it. If a user makes an API call (either directly or by using the Rancher CLI or kubectl) and the time since the user's last refresh is greater than this setting, then Rancher will trigger a refresh. This setting defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"3600")," seconds, i.e. 1 hour.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"auth-user-info-resync-cron"))),(0,o.kt)("p",{parentName:"li"},"  This setting controls a recurring schedule for resyncing authentication provider information for all users. Regardless of whether a user has logged in or used the API recently, this will cause the user to be refreshed at the specified interval. This setting defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"0 0 * * *"),", i.e. once a day at midnight. See the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cron"},"Cron documentation")," for more information on valid values for this setting."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Since SAML does not support user lookup, SAML-based authentication providers do not support periodically refreshing user information. User information will only be refreshed when the user logs into the Rancher UI.")),(0,o.kt)("h3",{id:"manually-refreshing-user-information"},"Manually Refreshing User Information"),(0,o.kt)("p",null,"If you are not sure the last time Rancher performed an automatic refresh of user information, you can perform a manual refresh of all users."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Global")," view, click on ",(0,o.kt)("strong",{parentName:"p"},"Users")," in the navigation bar.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Refresh Group Memberships"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Results:")," Rancher refreshes the user information for all users. Requesting this refresh will update which users can access Rancher as well as all the groups that each user belongs to."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Since SAML does not support user lookup, SAML-based authentication providers do not support the ability to manually refresh user information. User information will only be refreshed when the user logs into the Rancher UI.")),(0,o.kt)("h2",{id:"session-length"},"Session Length"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v2.3.0")),(0,o.kt)("p",null,"The default length (TTL) of each user session is adjustable. The default session length is 16 hours."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Global")," view, click on ",(0,o.kt)("strong",{parentName:"li"},"Settings"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Settings")," page, find ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"auth-user-session-ttl-minutes"))," and click ",(0,o.kt)("strong",{parentName:"li"},"Edit.")),(0,o.kt)("li",{parentName:"ol"},"Enter the amount of time in minutes a session length should last and click ",(0,o.kt)("strong",{parentName:"li"},"Save."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Users are automatically logged out of Rancher after the set number of minutes."))}d.isMDXComponent=!0}}]);