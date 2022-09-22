"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[187],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),f=r,k=m["".concat(s,".").concat(f)]||m[f]||c[f]||i;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7029:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(3117),r=(a(7294),a(3905));const i={sidebar_position:1,title:"UniversalProfile"},l="UniversalProfile",o={unversionedId:"tools/lsp-factoryjs/classes/universal-profile",id:"tools/lsp-factoryjs/classes/universal-profile",title:"UniversalProfile",description:"deploy",source:"@site/docs/tools/lsp-factoryjs/classes/universal-profile.md",sourceDirName:"tools/lsp-factoryjs/classes",slug:"/tools/lsp-factoryjs/classes/universal-profile",permalink:"/tools/lsp-factoryjs/classes/universal-profile",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/lsp-factoryjs/classes/universal-profile.md",tags:[],version:"current",lastUpdatedAt:1658794893,formattedLastUpdatedAt:"Jul 26, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"UniversalProfile"},sidebar:"toolsSidebar",previous:{title:"Options",permalink:"/tools/lsp-factoryjs/deployment/options"},next:{title:"LSP4DigitalAssetMetadata",permalink:"/tools/lsp-factoryjs/classes/lsp4-digital-asset-metadata"}},s={},p=[{value:"deploy",id:"deploy",level:2},{value:"Parameters",id:"parameters",level:3},{value:"1. <code>profileProperties</code> - Object",id:"1-profileproperties---object",level:4},{value:"2. <code>options</code> - Object (optional)",id:"2-options---object-optional",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Reactive Universal Profile Deployment Example",id:"reactive-universal-profile-deployment-example",level:4},{value:"uploadProfileData",id:"uploadprofiledata",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"1. <code>profileData</code> - Object",id:"1-profiledata---object",level:4},{value:"2. <code>options</code> - Object (optional)",id:"2-options---object-optional-1",level:4},{value:"Returns",id:"returns-1",level:3},{value:"Examples",id:"examples",level:3}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"universalprofile"},"UniversalProfile"),(0,r.kt)("h2",{id:"deploy"},"deploy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"lspFactory.UniversalProfile.deploy(profileProperties [, options]);\n")),(0,r.kt)("p",null,"Deploys and ",(0,r.kt)("strong",{parentName:"p"},"configures")," a ",(0,r.kt)("a",{parentName:"p",href:"../../../standards/universal-profile/introduction"},"Universal Profile")," to the blockchain. It will deploy the following contracts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../standards/universal-profile/lsp0-erc725account"},"LSP0 ERC725 Account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../standards/universal-profile/lsp6-key-manager"},"LSP6 Key Manager"))),(0,r.kt)("p",null,"After, it will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"upload metadata to IPFS and set the ",(0,r.kt)("a",{parentName:"li",href:"../../../standards/universal-profile/lsp3-universal-profile-metadata"},"LSP3 Universal Profile")," metadata,"),(0,r.kt)("li",{parentName:"ul"},"attach the Universal Receiver Delegate to the ERC725 Account contract,"),(0,r.kt)("li",{parentName:"ul"},"set the Key Manager as the owner of the LSP0 ERC725 Account, and"),(0,r.kt)("li",{parentName:"ul"},"set all ",(0,r.kt)("a",{parentName:"li",href:"../../../standards/universal-profile/lsp6-key-manager#-types-of-permissions"},"LSP6 Permissions")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"controllerAddresses")," except ",(0,r.kt)("inlineCode",{parentName:"li"},"DELEGATECALL"),".")),(0,r.kt)("p",null,"By default the ",(0,r.kt)("a",{parentName:"p",href:"../../../standards/universal-profile/lsp1-universal-receiver-delegate"},"LSP1 Universal Receiver Delegate")," contract that is specified in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-lsp-factory/blob/main/src/versions.json"},"versions file")," will be attached to the Universal Profile. A custom Universal Receiver Delegate can be optionally deployed, by passing custom bytecode to the ",(0,r.kt)("a",{parentName:"p",href:"../deployment/universal-profile#deployment-configuration"},(0,r.kt)("inlineCode",{parentName:"a"},"options"))," object."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The deployment key passed to LSPFactory will be given ",(0,r.kt)("inlineCode",{parentName:"p"},"CHANGEOWNER")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CHANGEPERMISSIONS")," ",(0,r.kt)("a",{parentName:"p",href:"../../../standards/universal-profile/lsp6-key-manager#-types-of-permissions"},"LSP6 permissions")," in order to carry out the Universal Profile deployment."),(0,r.kt)("p",{parentName:"admonition"},"These permisisons are revoked as the final step of deployment. It is important this step is completed correctly to avoid security risks.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Read more about configuring Universal Profile smart contracts deployment ",(0,r.kt)("a",{parentName:"p",href:"../deployment/universal-profile#deployment-configuration"},"here"),".")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("h4",{id:"1-profileproperties---object"},"1. ",(0,r.kt)("inlineCode",{parentName:"h4"},"profileProperties")," - Object"),(0,r.kt)("p",null,"Object containing profile properties set during Universal Profile deployment."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../deployment/universal-profile#controller-addresses"},(0,r.kt)("inlineCode",{parentName:"a"},"controllerAddresses"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A list of public addresses which will have all ",(0,r.kt)("a",{parentName:"td",href:"/standards/smart-contracts/lsp6-key-manager"},"LSP6 permissions")," except ",(0,r.kt)("inlineCode",{parentName:"td"},"DELEGATECALL")," set on the Universal Profile contract during deployment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../deployment/universal-profile#adding-lsp3-metadata"},(0,r.kt)("inlineCode",{parentName:"a"},"lsp3Profile"))," (optional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String ","|"," Object"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-3-UniversalProfile-Metadata.md"},"LSP3 Profile metadata")," which will be uploaded and set during deployment.")))),(0,r.kt)("h4",{id:"2-options---object-optional"},"2. ",(0,r.kt)("inlineCode",{parentName:"h4"},"options")," - Object (optional)"),(0,r.kt)("p",null,"Object which specifies how the ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp0-erc725account"},"UniversalProfile"),", ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp6-key-manager"},"KeyManager")," and ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp1-universal-receiver-delegate"},"UniversalReceiverDelegate")," smart contracts will be deployed."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/tools/lsp-factoryjs/deployment/options"},(0,r.kt)("inlineCode",{parentName:"a"},"LSP0ERC725Account"))," (optional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Generic contract configuration object. Takes ",(0,r.kt)("a",{parentName:"td",href:"/tools/lsp-factoryjs/deployment/options#version"},(0,r.kt)("inlineCode",{parentName:"a"},"version"))," and ",(0,r.kt)("a",{parentName:"td",href:"/tools/lsp-factoryjs/deployment/options#deploy-proxy"},(0,r.kt)("inlineCode",{parentName:"a"},"deployProxy"))," parameters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/tools/lsp-factoryjs/deployment/options"},(0,r.kt)("inlineCode",{parentName:"a"},"ERC725Account"))," (optional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Generic contract configuration object. Can be used instead of ",(0,r.kt)("inlineCode",{parentName:"td"},"LSP0ERC725Account"),". Takes ",(0,r.kt)("a",{parentName:"td",href:"/tools/lsp-factoryjs/deployment/options#version"},(0,r.kt)("inlineCode",{parentName:"a"},"version"))," and ",(0,r.kt)("a",{parentName:"td",href:"/tools/lsp-factoryjs/deployment/options#deploy-proxy"},(0,r.kt)("inlineCode",{parentName:"a"},"deployProxy"))," parameters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/tools/lsp-factoryjs/deployment/options"},(0,r.kt)("inlineCode",{parentName:"a"},"LSP6Keymanager"))," (optional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Generic contract configuration object. Takes ",(0,r.kt)("a",{parentName:"td",href:"/tools/lsp-factoryjs/deployment/options#version"},(0,r.kt)("inlineCode",{parentName:"a"},"version"))," and ",(0,r.kt)("a",{parentName:"td",href:"/tools/lsp-factoryjs/deployment/options#deploy-proxy"},(0,r.kt)("inlineCode",{parentName:"a"},"deployProxy"))," parameters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/tools/lsp-factoryjs/deployment/options"},(0,r.kt)("inlineCode",{parentName:"a"},"LSP1UniversalReceiverDelegate"))," (optional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Generic contract configuration object. Takes ",(0,r.kt)("a",{parentName:"td",href:"/tools/lsp-factoryjs/deployment/options#version"},(0,r.kt)("inlineCode",{parentName:"a"},"version"))," and ",(0,r.kt)("a",{parentName:"td",href:"/tools/lsp-factoryjs/deployment/options#deploy-proxy"},(0,r.kt)("inlineCode",{parentName:"a"},"deployProxy"))," parameters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../deployment/universal-profile#contract-versions"},(0,r.kt)("inlineCode",{parentName:"a"},"version"))," (optional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sets the global contract version. All contracts will be deployed with this version if set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../deployment/universal-profile#reactive-deployment"},(0,r.kt)("inlineCode",{parentName:"a"},"onDeployEvents"))," (optional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Pass ",(0,r.kt)("inlineCode",{parentName:"td"},"next"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"complete")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"error")," callback handlers to be executed as deployment events are fired. See ",(0,r.kt)("a",{parentName:"td",href:"../deployment/universal-profile#reactive-deployment"},(0,r.kt)("inlineCode",{parentName:"a"},"Reactive Deployment")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../deployment/universal-profile#ipfs-upload-options"},(0,r.kt)("inlineCode",{parentName:"a"},"ipfsGateway"))," (optional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String ","|"," Object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"IPFS gateway url or an object containing IPFS gateway options.")))),(0,r.kt)("admonition",{title:"Contract Deployment Details",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("a",{parentName:"p",href:"../deployment/universal-profile#deployment-configuration"},"configuration specification")," for more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," property.")),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Promise")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Resolves to an object containing deployed contract details.")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Deploying a Universal Profile"',title:'"Deploying',a:!0,Universal:!0,'Profile"':!0},"await lspFactory.UniversalProfile.deploy({\n  controllerAddresses: ['0xb74a88C43BCf691bd7A851f6603cb1868f6fc147'],\n  lsp3Profile: {\n    name: 'My Universal Profile',\n    description: 'My cool Universal Profile',\n    tags: ['Fashion', 'Design'],\n    links: [{ title: 'My Website', url: 'https://www.my-website.com' }],\n  },\n});\n\n/**\n{\n  LSP0ERC725Account: {\n    address: '0xaEc61B848954e4d69B1283810df8A7fB9bA23BF2',\n    receipt: {\n      to: null,\n      from: '0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db',\n      contractAddress: '0xaEc61B848954e4d69B1283810df8A7fB9bA23BF2',\n      transactionIndex: 0,\n      gasUsed: [BigNumber],\n      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n      blockHash: '0x48950fa6dfae12c7c6f172820bb0a7976da1c97ea541d2966bd2a9f39f3eb952',\n      transactionHash: '0xfb5d45fda891c47efa1a14748939d51bed58a9406c6ff685e0fdc8655a880d6e',\n      logs: [],\n      blockNumber: 12028255,\n      confirmations: 1,\n      cumulativeGasUsed: [BigNumber],\n      status: 1,\n      type: 0,\n      byzantium: true,\n      events: []\n    }\n  },\n  LSP1UniversalReceiverDelegate: {\n    address: '0xd92C7cA9c493aFC0DF51cE480ec7bB7DC8394549',\n    receipt: {\n      to: null,\n      from: '0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db',\n      contractAddress: '0xd92C7cA9c493aFC0DF51cE480ec7bB7DC8394549',\n      transactionIndex: 0,\n      gasUsed: [BigNumber],\n      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n      blockHash: '0x8b793e53ffe5ad6853cc06f0ca8879f8b0f0c32f69791e96d657d7fde8313d35',\n      transactionHash: '0x12e38b93709116da42e0c69af65f6096fa7b380ccb02ced4e3e431297c05e704',\n      logs: [],\n      blockNumber: 12028257,\n      confirmations: 1,\n      cumulativeGasUsed: [BigNumber],\n      status: 1,\n      type: 0,\n      byzantium: true,\n      events: []\n    }\n  },\n  LSP6KeyManager: {\n    address: '0xdbD3297B9bD80cA20cA75a644b1Fa903B05A2Fc3',\n    receipt: {\n      to: null,\n      from: '0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db',\n      contractAddress: '0xdbD3297B9bD80cA20cA75a644b1Fa903B05A2Fc3',\n      transactionIndex: 1,\n      gasUsed: [BigNumber],\n      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n      blockHash: '0x8b793e53ffe5ad6853cc06f0ca8879f8b0f0c32f69791e96d657d7fde8313d35',\n      transactionHash: '0x1183a1c9a64b88bb8e7da67805125d5b8e63c7dc8fab11dce350ee0c0995060b',\n      logs: [],\n      blockNumber: 12028257,\n      confirmations: 1,\n      cumulativeGasUsed: [BigNumber],\n      status: 1,\n      type: 0,\n      byzantium: true,\n      events: []\n    }\n  }\n}\n*/\n")),(0,r.kt)("h4",{id:"reactive-universal-profile-deployment-example"},"Reactive Universal Profile Deployment Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Reactive Universal Profile Deployment"',title:'"Reactive',Universal:!0,Profile:!0,'Deployment"':!0},"await lspFactory.UniversalProfile.deploy(\n  {\n    controllerAddresses: ['0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db'],\n  },\n  {\n    onDeployEvents: {\n      next: (deploymentEvent) => {\n        console.log(deploymentEvent);\n      },\n      error: (error) => {\n        console.error(error);\n      },\n      complete: (contracts) => {\n        console.log('Deployment Complete');\n        console.log(contracts);\n      },\n    },\n  }\n);\n\n/**\n{\n  type: 'PROXY_DEPLOYMENT',\n  contractName: 'LSP0ERC725Account',\n  status: 'PENDING',\n  transaction: {\n    ...\n  }\n},\n{\n  type: 'PROXY_DEPLOYMENT',\n  contractName: 'LSP0ERC725Account',\n  status: 'COMPLETE',\n  contractAddress: '0x805761959e7B94090fedD51776C63AB474a76A95',\n  receipt: {\n   ...\n  }\n},\n{\n  type: 'TRANSACTION',\n  contractName: 'LSP0ERC725Account',\n  functionName: 'initialize(address)',\n  status: 'PENDING',\n  transaction: {\n   ...\n  }\n},\n{\n  type: 'TRANSACTION',\n  contractName: 'LSP0ERC725Account',\n  functionName: 'initialize(address)',\n  status: 'COMPLETE',\n  receipt: {\n   ...\n  }\n}\n{\n  type: 'PROXY_DEPLOYMENT',\n  contractName: 'LSP6KeyManager',\n  status: 'PENDING',\n  transaction: {\n    ...\n  }\n},\n{\n  type: 'PROXY_DEPLOYMENT',\n  contractName: 'LSP6KeyManager',\n  status: 'COMPLETE',\n  contractAddress: '0x04952ED68B5386Ff0a9891A10E2B1F204f98e209',\n  receipt: {\n    ...\n  }\n},\n{\n  type: 'TRANSACTION',\n  contractName: 'LSP6KeyManager',\n  functionName: 'initialize(address)',\n  status: 'PENDING',\n  transaction: {\n    ...\n  }\n},\n{\n  type: 'TRANSACTION',\n  contractName: 'LSP6KeyManager',\n  functionName: 'initialize(address)',\n  status: 'COMPLETE',\n  receipt: {\n    ...\n  }\n},\n{\n  type: 'TRANSACTION',\n  contractName: 'LSP0ERC725Account',\n  functionName: 'setData(bytes32[],bytes[])',\n  status: 'PENDING',\n  transaction: {\n   ...\n  }\n},\n{\n  type: 'TRANSACTION',\n  contractName: 'LSP0ERC725Account',\n  functionName: 'setData(bytes32[],bytes[])',\n  status: 'COMPLETE',\n  receipt: {\n   ...\n  }\n},\n{\n  type: 'TRANSACTION',\n  status: 'PENDING',\n  contractName: 'LSP0ERC725Account',\n  functionName: 'transferOwnership(address)',\n  transaction: {\n    ...\n  }\n},\n{\n  type: 'TRANSACTION',\n  contractName: 'LSP0ERC725Account',\n  functionName: 'transferOwnership(address)',\n  status: 'COMPLETE',\n  receipt: {\n    ...\n  }\n},\nDeployment Complete\n{\n  LSP0ERC725Account: {\n    address: '0x805761959e7B94090fedD51776C63AB474a76A95',\n    receipt: {\n     ...\n    },\n  },\n  LSP6KeyManager: {\n    address: '0x04952ED68B5386Ff0a9891A10E2B1F204f98e209',\n    receipt: {\n      ...\n    },\n  }\n}\n*/\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"uploadprofiledata"},"uploadProfileData"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"lspFactory.UniversalProfile.uploadProfileData(profileData [, options]);\n")),(0,r.kt)("p",null,"Processes and uploads the ",(0,r.kt)("a",{parentName:"p",href:"../../../standards/universal-profile/lsp3-universal-profile-metadata"},"LSP3Profile Metadata")," to IPFS. The IPFS gateway can be set inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," object."),(0,r.kt)("p",null,"Will resize and upload passed images."),(0,r.kt)("p",null,"Available as a static or non-static method callable on the LSPFactory library instance."),(0,r.kt)("h3",{id:"parameters-1"},"Parameters"),(0,r.kt)("h4",{id:"1-profiledata---object"},"1. ",(0,r.kt)("inlineCode",{parentName:"h4"},"profileData")," - Object"),(0,r.kt)("p",null,"Object containing the ",(0,r.kt)("a",{parentName:"p",href:"../../../standards/universal-profile/lsp3-universal-profile-metadata"},"LSP3 Metadata")," fields which will be processed and uploaded to IPFS."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"../deployment/universal-profile#uploading-lsp3-metadata-to-ipfs"},"Read more about how LSP3 Metadata is processed here"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the Universal Profile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The description of the Universal Profile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"profileImage")),(0,r.kt)("td",{parentName:"tr",align:"left"},"File ","|"," Array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Javascript File object or an array of image metadata for different sizes of the same image")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"backgroundImage")),(0,r.kt)("td",{parentName:"tr",align:"left"},"File ","|"," Array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Javascript File object or an Array of image metadata for different sizes of the same image")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"links")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An Array of Objects containing ",(0,r.kt)("inlineCode",{parentName:"td"},"title")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"url")," parameters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tags")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An object containing the profile data to upload.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"avatar")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Array of different file formats of the same avatar asset passed as Javascript File object or an asset metadata object.")))),(0,r.kt)("p",null,"OR"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"LSP3Profile")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object containing ",(0,r.kt)("inlineCode",{parentName:"td"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"description"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"profileImage"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"backgroundImage"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"links"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"tags"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"avatar")," as described above")))),(0,r.kt)("h4",{id:"2-options---object-optional-1"},"2. ",(0,r.kt)("inlineCode",{parentName:"h4"},"options")," - Object (optional)"),(0,r.kt)("p",null,"Object containing configuration details of how the metadata should be uploaded."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../deployment/universal-profile#ipfs-upload-options"},(0,r.kt)("inlineCode",{parentName:"a"},"ipfsGateway"))," (optional)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String ","|"," Object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ipfsGateway URL string or IPFS Client Options as defined by the ","[ipfs-http-client library]"," used internally.")))),(0,r.kt)("h3",{id:"returns-1"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Promise"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Resolves to an object containing the processed ",(0,r.kt)("a",{parentName:"td",href:"../../../standards/universal-profile/lsp3-universal-profile-metadata"},"LSP3")," data and upload URL.")))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Uploading profile data"',title:'"Uploading',profile:!0,'data"':!0},'\nconst myLocalImage = new File();\nconst myLocalAvatar = new File();\n\n<script>\n  await UniversalProfile.uploadProfileData({\n    name: \'My Universal Profile\',\n    description: \'My cool Universal Profile\',\n    tags: [\'Fashion\', \'Design\'],\n    links: [{ title: \'My Website\', url: \'https://www.my-website.com\' }],\n    profileImage: myLocalImage,\n    backgroundImage: myLocalImage,\n    avatar: [myLocalAvatar],\n  });\n<script/>\n\n/**\n{\n  json: {\n    LSP3Profile: {\n      name: \'My Universal Profile\',\n      description: \'My cool Universal Profile\',\n      tags: [\'Fashion\', \'Design\'],\n      links: [{ title: \'My Website\', url: \'https://www.my-website.com\' }],\n      profileImage: [\n        {\n          "width": 1800,\n          "height": 1800,\n          "hashFunction": "keccak256(bytes)",\n          "hash": "0x5c6125b5a553337b5ad55610c47114bf58d33c7a21aef14b0ed4c214203c9ca7",\n          "url": "ipfs://QmPCQwamReJshNiqSSzf4zMVffNiDx44ykTf1zY95vG6rv"\n        },\n        {\n          "width": 1024,\n          "height": 1024,\n          "hashFunction": "keccak256(bytes)",\n          "hash": "0xc4d1d37a8545012be38a8f33f9a53daceab955a17310bcfffe00f34811506938",\n          "url": "ipfs://Qme8tedX78TaxVwtvacJyS7bcSwe69F4aNnknUzL3gYdFY"\n        },\n        {\n          "width": 640,\n          "height": 640,\n          "hashFunction": "keccak256(bytes)",\n          "hash": "0xa63ebb82e8c428c9a02f1c0a040199748844dccf62e75fcd85454bce4acd4afd",\n          "url": "ipfs://QmdQRdeeGGmWCPs1iCtxiNzHMZemFpvcsdvweCdnufHdqr"\n        },\n        {\n          "width": 320,\n          "height": 320,\n          "hashFunction": "keccak256(bytes)",\n          "hash": "0x2ab638bb61f4cb686c3ca5ca09285e4507ad2328c0b5f6e10378425ed7c75cd9",\n          "url": "ipfs://QmfYYafv6ucuKSm3EbcJxho9Cr2g5Pa3yhv7TaANbP8jbg"\n        },\n        {\n          "width": 180,\n          "height": 180,\n          "hashFunction": "keccak256(bytes)",\n          "hash": "0xefb0b36b3bba2338c18b2b55a0cbc52f04eda03e9b58ca8d04a92fc9b1387853",\n          "url": "ipfs://QmU5XJfL1V5tBLfm7xYMGYEi7VLiwDCfsCc8KswRgXNQSr"\n        }\n      ],\n      backgroundImage: [\n        {\n          "width": 1800,\n          "height": 1800,\n          "hashFunction": "keccak256(bytes)",\n          "hash": "0x5c6125b5a553337b5ad55610c47114bf58d33c7a21aef14b0ed4c214203c9ca7",\n          "url": "ipfs://QmPCQwamReJshNiqSSzf4zMVffNiDx44ykTf1zY95vG6rv"\n        },\n        {\n          "width": 1024,\n          "height": 1024,\n          "hashFunction": "keccak256(bytes)",\n          "hash": "0xc4d1d37a8545012be38a8f33f9a53daceab955a17310bcfffe00f34811506938",\n          "url": "ipfs://Qme8tedX78TaxVwtvacJyS7bcSwe69F4aNnknUzL3gYdFY"\n        },\n        {\n          "width": 640,\n          "height": 640,\n          "hashFunction": "keccak256(bytes)",\n          "hash": "0xa63ebb82e8c428c9a02f1c0a040199748844dccf62e75fcd85454bce4acd4afd",\n          "url": "ipfs://QmdQRdeeGGmWCPs1iCtxiNzHMZemFpvcsdvweCdnufHdqr"\n        },\n        {\n          "width": 320,\n          "height": 320,\n          "hashFunction": "keccak256(bytes)",\n          "hash": "0x2ab638bb61f4cb686c3ca5ca09285e4507ad2328c0b5f6e10378425ed7c75cd9",\n          "url": "ipfs://QmfYYafv6ucuKSm3EbcJxho9Cr2g5Pa3yhv7TaANbP8jbg"\n        },\n        {\n          "width": 180,\n          "height": 180,\n          "hashFunction": "keccak256(bytes)",\n          "hash": "0xefb0b36b3bba2338c18b2b55a0cbc52f04eda03e9b58ca8d04a92fc9b1387853",\n          "url": "ipfs://QmU5XJfL1V5tBLfm7xYMGYEi7VLiwDCfsCc8KswRgXNQSr"\n        }\n      ],\n      avatar: [\n        {\n          "hashFunction": "keccak256(bytes)",\n          "hash": "0x5f3dbd89cde4dde36241c501203b67a93b89908063f5516535136bc25f712e11",\n          "url": "ipfs://QmWkAki4mLq2cshpbKs4HFCaZdpUX1jLKKfb5y8YMATkwk",\n          "fileType": "image/jpeg"\n        }\n      ]\n    }\n  },\n  url: \'ipfs://QmS7NCnoXub7ju13HZuDzJpWqWq15Nev4CC18821qBNbkx\'\n}\n*/\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Uploading profile data"',title:'"Uploading',profile:!0,'data"':!0},"await UniversalProfile.uploadProfileData({\n  LSP3Profile: {\n    name: 'My Universal Profile',\n    description: 'My cool Universal Profile',\n    tags: ['Fashion', 'Design'],\n    links: [{ title: 'My Website', url: 'https://www.my-website.com' }],\n  },\n});\n\n/**\n{\n  json: {\n    LSP3Profile: {\n      name: 'My Universal Profile',\n      description: 'My cool Universal Profile',\n      tags: ['Fashion', 'Design'],\n      links: [{ title: 'My Website', url: 'https://www.my-website.com' }],\n    }\n  },\n  url: 'ipfs://QmS7NCnoXub7ju13HZuDzJpWqWq15Nev4CC18821qBNbkx'\n}\n*/\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Uploading profile data using a custom IPFS gateway"',title:'"Uploading',profile:!0,data:!0,using:!0,a:!0,custom:!0,IPFS:!0,'gateway"':!0},"await UniversalProfile.uploadProfileData(\n  {\n    name: 'My Universal Profile',\n    description: 'My cool Universal Profile',\n    tags: ['Fashion', 'Design'],\n    links: [{ title: 'My Website', url: 'https://www.my-website.com' }],\n  },\n  {\n    ipfsGateway: 'https://ipfs.infura.io',\n  }\n);\n\n/**\n{\n  json: {\n    LSP3Profile: {\n      name: 'My Universal Profile',\n      description: 'My cool Universal Profile',\n      tags: ['Fashion', 'Design'],\n      links: [{ title: 'My Website', url: 'https://www.my-website.com' }],\n    }\n  },\n  url: 'ipfs://QmS7NCnoXub7ju13HZuDzJpWqWq15Nev4CC18821qBNbkx'\n}\n*/\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Uploading profile data using a custom IPFS options"',title:'"Uploading',profile:!0,data:!0,using:!0,a:!0,custom:!0,IPFS:!0,'options"':!0},"await UniversalProfile.uploadProfileData(\n  {\n    name: 'My Universal Profile',\n    description: 'My cool Universal Profile',\n    tags: ['Fashion', 'Design'],\n    links: [{ title: 'My Website', url: 'https://www.my-website.com' }],\n  },\n  {\n    ipfsGateway: {\n      host: 'ipfs.infura.io',\n      port: 5001,\n      protocol: 'https',\n    },\n  }\n);\n\n/**\n{\n  json: {\n    LSP3Profile: {\n      name: 'My Universal Profile',\n      description: 'My cool Universal Profile',\n      tags: ['Fashion', 'Design'],\n      links: [{ title: 'My Website', url: 'https://www.my-website.com' }],,\n    }\n  },\n  url: 'ipfs://QmS7NCnoXub7ju13HZuDzJpWqWq15Nev4CC18821qBNbkx'\n}\n*/\n")))}c.isMDXComponent=!0}}]);