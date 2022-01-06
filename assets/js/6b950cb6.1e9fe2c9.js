"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[9704],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,k=m["".concat(i,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3517:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return p},default:function(){return h}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),o=["components"],s={sidebar_label:"LSP6 - Key Manager",sidebar_position:5},i="Key Manager",d={unversionedId:"standards/universal-profile/lsp6-key-manager",id:"standards/universal-profile/lsp6-key-manager",title:"Key Manager",description:"Key Manager flow chart",source:"@site/docs/standards/universal-profile/04-lsp6-key-manager.md",sourceDirName:"standards/universal-profile",slug:"/standards/universal-profile/lsp6-key-manager",permalink:"/standards/universal-profile/lsp6-key-manager",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/universal-profile/04-lsp6-key-manager.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"LSP6 - Key Manager",sidebar_position:5},sidebar:"standardsSidebar",previous:{title:"LSP3 - Universal Profile",permalink:"/standards/universal-profile/lsp3-universal-profile"},next:{title:"Introduction",permalink:"/standards/nft-2.0/introduction"}},p=[{value:'<a name="types-of-permissions"></a> Types of permissions',id:"-types-of-permissions",children:[{value:'<a name="address-permissions"></a> Address Permissions',id:"-address-permissions",children:[],level:3},{value:'<a name="allowed-addresses"></a> Allowed addresses',id:"-allowed-addresses",children:[],level:3},{value:'<a name="allowed-functions"></a> Allowed functions',id:"-allowed-functions",children:[],level:3}],level:2},{value:'<a name="permissions-keys"></a> Permission Keys',id:"-permission-keys",children:[],level:2},{value:'<a name="permission-values"></a> Permission Values',id:"-permission-values",children:[],level:2},{value:"References",id:"references",children:[],level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)}},m=c("Tabs"),u=c("TabItem"),k={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"key-manager"},"Key Manager"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/31145285/129574099-9eba52d4-4f82-4f11-8ac5-8bfa18ce97d6.jpeg",alt:"Key Manager flow chart"})),(0,l.kt)("p",null,"An ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-0-ERC725Account.md"},"ERC725Account")," on its own comes with limited usability. Since it is an ",(0,l.kt)("strong",{parentName:"p"},"owned contract"),", only the Account's owner can write data into it, or use it to interact with other smart contracts."),(0,l.kt)("p",null,"Here comes the Key Manager. It is a smart contract that controls an ERC725Account, acting as its new owner. It then functions as a gateway for an ERC725Account."),(0,l.kt)("p",null,"The idea is to give ",(0,l.kt)("a",{parentName:"p",href:"#types-of-permissions"},"permissions")," to any ",(0,l.kt)("inlineCode",{parentName:"p"},"address"),", like Externally Owned Accounts (EOA) or smart contracts. These can then interact with an ",(0,l.kt)("strong",{parentName:"p"},"ERC725Account")," through the Key Manager. On each interaction, the Key Manager will allow or restrict access, based on the permissions set for the calling ",(0,l.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,l.kt)("p",null,"\u274c ","\xa0"," ",(0,l.kt)("strong",{parentName:"p"},"Without a Key Manager"),", only the ERC725Account's owner can use its Account."),(0,l.kt)("p",null,"\u2705 ","\xa0"," ",(0,l.kt)("strong",{parentName:"p"},"With a Key Manager")," attached to an ERC725Account, other addresses (EOAs or contracts) can use an Account on behalf of its owner."),(0,l.kt)("p",null,"Permissions for an ",(0,l.kt)("inlineCode",{parentName:"p"},"address")," are stored inside the key-value store of the ERC725Account contract, under specific keys listed in the ",(0,l.kt)("a",{parentName:"p",href:"#permissions-keys"},(0,l.kt)("strong",{parentName:"a"},"Permission Keys"))," section."),(0,l.kt)("br",null),"Since permissions are stored under the ERC725Account contract, they are not attached to the Key Manager itself. The Key Manager can then easily be upgraded without the need to set all the permissions again.",(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"-types-of-permissions"},(0,l.kt)("a",{name:"types-of-permissions"})," Types of permissions"),(0,l.kt)("p",null,"There are 3 main types of permissions that can be set for addresses interacting with a Universal Profile."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#address-permissions"},(0,l.kt)("strong",{parentName:"a"},"Address Permissions")),": defines a set of ",(0,l.kt)("a",{parentName:"p",href:"#permissions-value"},(0,l.kt)("strong",{parentName:"a"},"permission values"))," for an ",(0,l.kt)("inlineCode",{parentName:"p"},"address"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#allowed-addresses"},(0,l.kt)("strong",{parentName:"a"},"Allowed Addresses:"))," defines which EOA or contract addresses an ",(0,l.kt)("inlineCode",{parentName:"p"},"address")," is allowed to interact with.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#allowed-functions"},(0,l.kt)("strong",{parentName:"a"},"Allowed Functions:"))," defines which function selectors an ",(0,l.kt)("inlineCode",{parentName:"p"},"address")," is allowed to run on a specific contract."))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"-address-permissions"},(0,l.kt)("a",{name:"address-permissions"})," Address Permissions"),(0,l.kt)("p",null,"An address can hold one (or more) permissions, enabling it to perform multiple set of actions on an ERC725Account. Such actions include ",(0,l.kt)("strong",{parentName:"p"},"setting data"),", ",(0,l.kt)("strong",{parentName:"p"},"calling other contracts"),", ",(0,l.kt)("strong",{parentName:"p"},"transferring native tokens")," and more."),(0,l.kt)("p",null,"To grant permission(s) to an ",(0,l.kt)("inlineCode",{parentName:"p"},"<address>"),", set the following key-value pair below in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725y"},"ERC725Y")," contract storage."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"key:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"0x4b80742d0000000082ac0000<address>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"value:")," one of the available options below.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Permission Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CHANGEOWNER"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0x0000000000000000000000000000000000000000000000000000000000000001"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CHANGEPERMISSIONS"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0x0000000000000000000000000000000000000000000000000000000000000002"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ADDPERMISSIONS"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0x0000000000000000000000000000000000000000000000000000000000000004"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SETDATA"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0x0000000000000000000000000000000000000000000000000000000000000008"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CALL"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0x0000000000000000000000000000000000000000000000000000000000000010"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STATICCALL"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0x0000000000000000000000000000000000000000000000000000000000000020"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DELEGATECALL"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0x0000000000000000000000000000000000000000000000000000000000000040"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DEPLOY"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0x0000000000000000000000000000000000000000000000000000000000000080"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TRANSFERVALUE"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0x0000000000000000000000000000000000000000000000000000000000000100"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SIGN"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0x0000000000000000000000000000000000000000000000000000000000000200"))))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"See section ",(0,l.kt)("a",{parentName:"p",href:"#permission-values"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("em",{parentName:"strong"},"Permissions Values")))," for more infos about what each permission enables")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Each permission MUST be:"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"exactly 32 bytes long")),(0,l.kt)("li",{parentName:"ul"},"zero left-padded",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0x0000000000000000000000000000000000000000000000000000000000000008")," \u2705"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0x0800000000000000000000000000000000000000000000000000000000000000")," \u274c")))),(0,l.kt)("p",{parentName:"div"},"For instance, if you try to set the permission SETDATA for an address as ",(0,l.kt)("inlineCode",{parentName:"p"},"0x08"),", this will be stored internally as ",(0,l.kt)("inlineCode",{parentName:"p"},"0x0800000000000000000000000000000000000000000000000000000000000000"),", and will cause incorrect behaviour with odd revert messages."))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"-allowed-addresses"},(0,l.kt)("a",{name:"allowed-addresses"})," Allowed addresses"),(0,l.kt)("p",null,"You can restrict an address to interact only with specific contracts or EOAs."),(0,l.kt)("p",null,"To restrict an ",(0,l.kt)("inlineCode",{parentName:"p"},"<address>")," to only talk to a specific contract at address ",(0,l.kt)("inlineCode",{parentName:"p"},"<target-contract-address>"),", the key-value pair below can be set in the ERC725Y contract storage."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"key:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"0x4b80742d00000000c6dd0000<address>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"value:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"<target-contract-address>"))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Infos")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"If no addresses are set, interacting with any address is allowed (= all addresses are whitelisted).")))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"-allowed-functions"},(0,l.kt)("a",{name:"allowed-functions"})," Allowed functions"),(0,l.kt)("p",null,"You can also restrict which functions a specific address can run, by providing a list of ",(0,l.kt)("inlineCode",{parentName:"p"},"bytes4")," function selector."),(0,l.kt)("p",null,"To restrict an ",(0,l.kt)("inlineCode",{parentName:"p"},"<address>")," to only execute the function ",(0,l.kt)("inlineCode",{parentName:"p"},"transfer(address,uint256)")," (selector: ",(0,l.kt)("inlineCode",{parentName:"p"},"a9059cbb"),"), the following key-value pair can be set in the ERC725Y contract storage."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"key:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"0x4b80742d000000008efe0000<address>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"value:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"0xa9059cbb"))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Infos")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"If no bytes4 selectors are set, the caller address can execute any functions.")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"-permission-keys"},(0,l.kt)("a",{name:"permissions-keys"})," Permission Keys"),(0,l.kt)("p",null,"The following keys are available to set the different types of permissions."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Permission Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Key"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-6-KeyManager.md#addresspermissionspermissionsaddress"},"Address Permissions")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0x4b80742d0000000082ac0000<address>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-6-KeyManager.md#addresspermissionsallowedaddressesaddress"},"Allowed Addresses")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0x4b80742d00000000c6dd0000**<address>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-6-KeyManager.md#addresspermissionsallowedfunctionsaddress"},"Allowed Functions")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0x4b80742d000000008efe0000<address>"))))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-6-KeyManager.md#erc725y-keys"},"See LSP6 for more details"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"-permission-values"},(0,l.kt)("a",{name:"permission-values"})," Permission Values"),(0,l.kt)("p",null,"The following default permissions can be set for any address. They are listed below, according to their order of importance."),(0,l.kt)("p",null,"You can find ",(0,l.kt)("strong",{parentName:"p"},"more details about each permissions by clicking on the toggles below"),"."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"CHANGEOWNER")," - Allows changing the owner of the controlled contract"),(0,l.kt)("p",{style:{marginBottom:"3%",marginTop:"2%",textAlign:"center"}},(0,l.kt)("b",null,"value = "),(0,l.kt)("code",null,"0x0000000000000000000000000000000000000000000000000000000000000001")),(0,l.kt)("p",null,"Enables to change the owner of the linked ERC725Account."),(0,l.kt)("p",null,"Using this permission, you can easily upgrade the ",(0,l.kt)("code",null,"KeyManager")," attached to the Account by transferring ownership to a new ",(0,l.kt)("code",null,"KeyManagerV2"),".")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"CHANGEPERMISSIONS")," - Allows changing of permissions of addresses (adding + removing)"),(0,l.kt)("p",{style:{marginBottom:"3%",marginTop:"2%",textAlign:"center"}},(0,l.kt)("b",null,"value = "),(0,l.kt)("code",null,"0x0000000000000000000000000000000000000000000000000000000000000002")),(0,l.kt)("p",null,"This permission allows an address to ",(0,l.kt)("b",null,"grant + revoke")," permissions for any specific address (including itself).")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"ADDPERMISSIONS")," - Allows adding new permissions to addresses"),(0,l.kt)("p",{style:{marginBottom:"3%",marginTop:"2%",textAlign:"center"}},(0,l.kt)("b",null,"value = "),(0,l.kt)("code",null,"0x0000000000000000000000000000000000000000000000000000000000000004")),(0,l.kt)("p",null,"This permission allows an address to ",(0,l.kt)("b",null,"grant ",(0,l.kt)("span",{style:{color:"red"}},"(but not revoke)"))," permissions for any specific address (including itself).")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"SETDATA")," - Allows setting data on the controlled contract"),(0,l.kt)("p",{style:{marginBottom:"3%",marginTop:"2%",textAlign:"center"}},(0,l.kt)("b",null,"value = "),(0,l.kt)("code",null,"0x0000000000000000000000000000000000000000000000000000000000000008")),"Allows an address to write any form of data in the ",(0,l.kt)("a",{href:"https://**github**.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725y"},"ERC725Y")," key-value store of the linked `ERC725Account` (except permissions, that requires the permissions ",(0,l.kt)("code",null,"CHANGEPERMISSIONS")," described above)."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"CALL")," - Allows calling other contracts through the controlled contract"),(0,l.kt)("p",{style:{marginBottom:"3%",marginTop:"2%",textAlign:"center"}},(0,l.kt)("b",null,"value = "),(0,l.kt)("code",null,"0x0000000000000000000000000000000000000000000000000000000000000010"),(0,l.kt)("br",null)),(0,l.kt)("p",null,"This permission enables anyone to use the ERC725Account linked to Key Manager to make external calls (to contracts or Externally Owned Accounts). allowing state changes at the address being called.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"STATICCALL")," - Allows calling other contracts through the controlled contract"),(0,l.kt)("p",{style:{marginBottom:"3%",marginTop:"2%",textAlign:"center"}},(0,l.kt)("b",null,"value = "),(0,l.kt)("code",null,"0x0000000000000000000000000000000000000000000000000000000000000020"),(0,l.kt)("br",null)),(0,l.kt)("p",null,"This permission enables to use the ERC725Account linked to Key Manager to make external calls to contracts while disallowing state changes at the address being called."),(0,l.kt)("p",null,"It uses the ",(0,l.kt)("a",{href:"https://eips.ethereum.org/EIPS/eip-214"},(0,l.kt)("code",null,"STATICCALL"))," opcode when performing the external call."),(0,l.kt)("blockquote",null,"If any state is changed at a target contract through a ",(0,l.kt)("code",null,"STATICCALL"),", the call will revert.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"DELEGATECALL")," - Allows delegate calling other contracts through the controlled contract"),(0,l.kt)("p",{style:{marginBottom:"3%",marginTop:"2%",textAlign:"center"}},(0,l.kt)("b",null,"value = "),(0,l.kt)("code",null,"0x0000000000000000000000000000000000000000000000000000000000000040")),(0,l.kt)("p",null,"This permission to execute code and functions from other contracts in the context of the UP."),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"DELEGATECALL"))," is currently disallowed (even if set on the KeyManager) because of its dangerous nature, as some malicious code can be executed in the context of the linked Account contract.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"DEPLOY")," - Allows deploying other contracts through the controlled contract"),(0,l.kt)("p",{style:{marginBottom:"3%",marginTop:"2%",textAlign:"center"}},(0,l.kt)("b",null,"value = "),(0,l.kt)("code",null,"0x0000000000000000000000000000000000000000000000000000000000000080")),(0,l.kt)("p",null,"Enables the caller to deploy a smart contract, using the linked ERC725Account as a deployer. The bytecode of the contract to be deployed should be provided in the payload (abi-encoded) passed to the Key Manager."),(0,l.kt)("blockquote",null,"Both the ",(0,l.kt)("code",null,"CREATE")," or ",(0,l.kt)("a",{href:"https://eips.ethereum.org/EIPS/eip-1014"},(0,l.kt)("code",null,"CREATE2"))," opcode can be used to deploy the contract.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"TRANSFERVALUE")," - Allows transfering value to other contracts from the controlled contract"),(0,l.kt)("p",{style:{marginBottom:"3%",marginTop:"2%",textAlign:"center"}},(0,l.kt)("b",null,"value = "),(0,l.kt)("code",null,"0x0000000000000000000000000000000000000000000000000000000000000100")),"Enables to send native currency from the linked ERC725Account to any address.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("blockquote",null,"NB: for a simple native token transfer, no data (",(0,l.kt)("code",null,'""'),") should be passed to the fourth parameter of the ",(0,l.kt)("code",null,"execute")," function of the Account contract.",(0,l.kt)("br",null),"For instance: ",(0,l.kt)("code",null,'account.execute(operationCall, recipient, amount, "")'))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"SIGN"),": Allows signing on behalf of the controlled account, for example for login purposes"),(0,l.kt)("p",{style:{marginBottom:"3%",marginTop:"2%",textAlign:"center"}},(0,l.kt)("b",null,"value = "),(0,l.kt)("code",null,"0x0000000000000000000000000000000000000000000000000000000000000200")),"The ",(0,l.kt)("code",null,"SIGN")," permission can be used for keys to sign login messages. It is mostly for web2.0 apps to know which key SHOULD sign."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Permissions can be combined together"),", if an address needs to hold more than one permission."),(0,l.kt)("p",null,"Simply calculate the sum of their decimal value, and convert the result back into hexadecimal. For instance:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-6-KeyManager.md#permission-values-in-addresspermissionspermissionsaddress"},"See LSP6 Specs for more details"))),(0,l.kt)(m,{mdxType:"Tabs"},(0,l.kt)(u,{value:"example1",label:"Example 1",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"permissions: CALL + TRANSFERVALUE\n\n  0x0000000000000000000000000000000000000000000000000000000000000010 (16 in decimal)\n+ 0x0000000000000000000000000000000000000000000000000000000000000100 (256)\n---------------------------------------------------------------------\n= 0x0000000000000000000000000000000000000000000000000000000000000110 (= 272)\n"))),(0,l.kt)(u,{value:"example2",label:"Example 2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"permissions: CHANGEPERMISSIONS + SETDATA\n\n  0x0000000000000000000000000000000000000000000000000000000000000002 (2 in decimal)\n+ 0x0000000000000000000000000000000000000000000000000000000000000008 (8)\n---------------------------------------------------------------------\n= 0x000000000000000000000000000000000000000000000000000000000000000a (= 10)\n")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"When deployed with our ",(0,l.kt)("a",{parentName:"p",href:"https://docs.lukso.tech/tools/lsp-factoryjs/introduction/getting-started/"},(0,l.kt)("strong",{parentName:"a"},"lsp-factory")," tool"),", the Universal Profile owner will have all the permissions above set by default."))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-6-KeyManager.md"},"LUKSO Standards Proposals: LSP6 - Key Manager (Standard Specification, GitHub)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-universalprofile-smart-contracts/tree/develop/contracts/LSP6-KeyManager"},"LSP6 KeyManager: Solidity implementations (GitHub)"))))}h.isMDXComponent=!0}}]);