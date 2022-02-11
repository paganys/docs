"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[2081],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2595:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=["components"],s={sidebar_label:"LSP0 - ERC725 Account",sidebar_position:2},c="LSP0 - ERC725Account",l={unversionedId:"standards/universal-profile/lsp0-erc725account",id:"standards/universal-profile/lsp0-erc725account",title:"LSP0 - ERC725Account",description:"LSP0 - ERC725Account",source:"@site/docs/standards/universal-profile/01-lsp0-erc725account.md",sourceDirName:"standards/universal-profile",slug:"/standards/universal-profile/lsp0-erc725account",permalink:"/standards/universal-profile/lsp0-erc725account",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/universal-profile/01-lsp0-erc725account.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"LSP0 - ERC725 Account",sidebar_position:2},sidebar:"standardsSidebar",previous:{title:"Introduction",permalink:"/standards/universal-profile/introduction"},next:{title:"LSP1 - Universal Receiver Delegate",permalink:"/standards/universal-profile/lsp1-universal-receiver-delegate"}},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"What does this standard represent ?",id:"what-does-this-standard-represent-",children:[{value:"ERC725X - Generic Executor",id:"erc725x---generic-executor",children:[],level:3},{value:"ERC725Y - Generic Key-Value Store",id:"erc725y---generic-key-value-store",children:[],level:3},{value:"LSP1 - UniversalReceiver",id:"lsp1---universalreceiver",children:[],level:3},{value:"ERC1271",id:"erc1271",children:[],level:3}],level:2},{value:"Extension",id:"extension",children:[{value:"Ownership",id:"ownership",children:[],level:3},{value:"Interactivity",id:"interactivity",children:[],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lsp0---erc725account"},"LSP0 - ERC725Account"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Standard Document")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-0-ERC725Account.md"},"LSP0 - ERC725Account")))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Once deployed on a network, smart contracts cannot be changed, ",(0,i.kt)("strong",{parentName:"p"},"they are set in stone"),". If a smart contract is deployed with a specific amount of state variables, a specific behavior and functionalities then it is there forever and cannot be altered."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/ERC725Alliance/erc725/blob/main/docs/ERC-725.md"},"ERC725 Standard"))," proposed in 2017 descibes a generic key value store and generic execution function that could be the basis to an account. Combining the interactivity and signature verification mechanism represented by ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/standards/generic-standards/lsp1-universal-receiver"},"LSP1-UniversalReceiver"))," and ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-1271"},"ERC1271"))," standards, a blockchain based account can be created."),(0,i.kt)("h2",{id:"what-does-this-standard-represent-"},"What does this standard represent ?"),(0,i.kt)("p",null,"An ",(0,i.kt)("strong",{parentName:"p"},"ERC725Account")," defines a blockchain account system that could be used by humans, machines, or other smart contracts. It is composed of multiple standards, as shown in the figure below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/ERC725Alliance/erc725/blob/main/docs/ERC-725.md#erc725x"},"ERC725X")),": a generic executor that enables to call external contracts, deploy new contracts or transfer value to any address (EOA or smart contracts)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/ERC725Alliance/erc725/blob/main/docs/ERC-725.md#erc725y"},"ERC725Y")),": a generic key-value store that enables it to attach any information to the smart contract."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/standards/generic-standards/lsp1-universal-receiver"},"LSP1-UniversalReceiver")),": enables to be notified of incoming transactions, and add custom handling and behaviour, based on these incoming transactions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-1271"},"ERC1271")),": enables to verify that a signed message has a valid signature."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-165"},"ERC165")),": enables to register + detect the standard interfaces the contract implements.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ERC725Account contract architecture",src:a(1348).Z})),(0,i.kt)("p",null,"This standard also uses the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-173"},"ERC173"))," standard to provide ownership functions for owning and controlling the implementation contract."),(0,i.kt)("h3",{id:"erc725x---generic-executor"},"ERC725X - Generic Executor"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Documentation")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"See the section ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://docs.soliditylang.org/en/v0.8.11/units-and-global-variables.html?highlight=staticcall#members-of-address-types"},'"Members of address types"'))," in the Solidity documentation for more information about the different types of calls available."))),(0,i.kt)("p",null,"This substandard enables the account to execute a call on any other smart contracts, transfers the blockchains native token, or deploys a new smart contract. Only the owner can execute these operations below."),(0,i.kt)("p",null,"The operation types available are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CALL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CREATE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-1014"},(0,i.kt)("inlineCode",{parentName:"a"},"CREATE2"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-7"},(0,i.kt)("inlineCode",{parentName:"a"},"DELEGATECALL"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-214"},(0,i.kt)("inlineCode",{parentName:"a"},"STATICCALL")))),(0,i.kt)("h3",{id:"erc725y---generic-key-value-store"},"ERC725Y - Generic Key-Value Store"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"See the section ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://docs.soliditylang.org/en/v0.8.11/internals/layout_in_storage.html"},'"Layout of State Variables in Storage"'))," in the Solidity documentation for more information about the structure of a smart contract storage."))),(0,i.kt)("p",null,"This substandard enables the account to hold arbitrary data through a generic key-value store. It gives flexibility to the contract storage. With ERC725Y, data stored in the contract can be accessed via keys, instead of referencing to the storage slot where the data resides."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"keys")," are represented as ",(0,i.kt)("inlineCode",{parentName:"li"},"bytes32")," values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"values")," under these keys are stored as ",(0,i.kt)("inlineCode",{parentName:"li"},"bytes"),".")),(0,i.kt)("p",null,"As a result, this substandard enables to attach any type of information to the contract and update or remove it easily."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ERC725Y key-value store vs standard contract storage",src:a(5777).Z})),(0,i.kt)("p",null,"Thanks to ERC725Y, contracts become more interoperable between each other, as their storage is represented in the same way. Contracts and interfaces can then read and write data from/to the storage in the same manner, via the functions ",(0,i.kt)("a",{parentName:"p",href:"../smart-contracts/lsp0-erc725-account#getdata"},(0,i.kt)("inlineCode",{parentName:"a"},"getData(...)"))," and ",(0,i.kt)("a",{parentName:"p",href:"../smart-contracts/lsp0-erc725-account#setdata"},(0,i.kt)("inlineCode",{parentName:"a"},"setData(...)")),"."),(0,i.kt)("h3",{id:"lsp1---universalreceiver"},"LSP1 - UniversalReceiver"),(0,i.kt)("p",null,"This standard enables the account to be notified of any incoming transactions either it's a token transfer, vault transfer, information transfer, etc ..\nThis is very useful for accounts where anyone could customize the way his account react to certain tokens by rejecting them or operate a specific call on each token receive."),(0,i.kt)("p",null,"Check ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/standards/generic-standards/lsp1-universal-receiver"},"LSP1-UniversalReceiver"))," standard for more information."),(0,i.kt)("h3",{id:"erc1271"},"ERC1271"),(0,i.kt)("p",null,"Externally Owned Accounts (EOAs) can sign messages with their associated private keys, but contracts cannot. This standard defines a way for contracts to verify if a provided signature is valid when the account is a smart contract.",(0,i.kt)("br",{parentName:"p"}),"\n","There are and will be many contracts that want to utilize signed messages for validation of rights-to-move assets or other purposes."),(0,i.kt)("p",null,"Check ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-1271"},"ERC1271"))," standard for more information."),(0,i.kt)("h2",{id:"extension"},"Extension"),(0,i.kt)("h3",{id:"ownership"},"Ownership"),(0,i.kt)("p",null,"The ownership of the account can be extended by setting a smart contract as an owner with different permissions granted to users in the smart contract. This allows multiple interaction through your account based on the permissions set for the calling address."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp6-key-manager"},"LSP6-KeyManager"))," is a standard that defines a controller smart contract for this account."),(0,i.kt)("h3",{id:"interactivity"},"Interactivity"),(0,i.kt)("p",null,"The account can be notified of incoming assets, information, etc via the ",(0,i.kt)("strong",{parentName:"p"},"universalReceiver")," function. An extension could be added to increase the autonomy of the contract by handling and reacting to transactions that the account receives."),(0,i.kt)("p",null,"This can happen by setting a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp1-universal-receiver-delegate"},"LSP1-UniversalReceiverDelegate"))," to your account."))}u.isMDXComponent=!0},5777:function(e,t,a){t.Z=a.p+"assets/images/erc725y-vs-standard-contract-storage-ea1e9d72e8e9500a62717674e70f9cbc.jpeg"},1348:function(e,t,a){t.Z=a.p+"assets/images/lsp0-erc725account-architecture-8d476003bc0c6a22d0091084f16ef35f.jpeg"}}]);