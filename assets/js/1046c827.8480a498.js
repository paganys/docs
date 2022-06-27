"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[3210],{3905:function(e,t,s){s.d(t,{Zo:function(){return c},kt:function(){return h}});var a=s(7294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,a,n=function(e,t){if(null==e)return{};var s,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var d=a.createContext({}),l=function(e){var t=a.useContext(d),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var s=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(s),h=n,f=p["".concat(d,".").concat(h)]||p[h]||u[h]||r;return s?a.createElement(f,i(i({ref:t},c),{},{components:s})):a.createElement(f,i({ref:t},c))}));function h(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=s.length,i=new Array(r);i[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<r;l++)i[l]=s[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,s)}p.displayName="MDXCreateElement"},7801:function(e,t,s){s.r(t),s.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var a=s(7462),n=s(3366),r=(s(7294),s(3905)),i=["components"],o={sidebar_label:"LSP12 - Issued Assets",sidebar_position:9},d="LSP12 - Issued Assets",l={unversionedId:"standards/universal-profile/lsp12-issued-assets",id:"standards/universal-profile/lsp12-issued-assets",title:"LSP12 - Issued Assets",description:"LSP12 - Issued Assets",source:"@site/docs/standards/universal-profile/lsp12-issued-assets.md",sourceDirName:"standards/universal-profile",slug:"/standards/universal-profile/lsp12-issued-assets",permalink:"/standards/universal-profile/lsp12-issued-assets",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/universal-profile/lsp12-issued-assets.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_label:"LSP12 - Issued Assets",sidebar_position:9},sidebar:"standardsSidebar",previous:{title:"LSP10 - Received Vaults",permalink:"/standards/universal-profile/lsp10-received-vaults"},next:{title:"Introduction",permalink:"/standards/nft-2.0/introduction"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"What does this standard represent ?",id:"what-does-this-standard-represent-",level:2},{value:"<code>LSP12IssuedAssets[]</code>",id:"lsp12issuedassets",level:3},{value:"<code>LSP12IssuedAssetsMap</code>",id:"lsp12issuedassetsmap",level:3},{value:"Asset Verification Flow",id:"asset-verification-flow",level:3}],p={toc:u};function h(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lsp12---issued-assets"},"LSP12 - Issued Assets"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Standard Document")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-12-IssuedAssets.md"},"LSP12 - Issued Assets")))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Keeping track of all the assets that addresses create is currently unfeasible where listing the issued assets is being done by centralized services. This inconvenience brings light to the following problem: the absence of a standard way to read the issued assets on/off-chain which allow users to create fake assets claiming that they are the original ones."),(0,r.kt)("p",null,"One way to solve this problem is to create generic metadata keys that would register in the smart contract storage how many different assets a smart contract has issued and their addresses. These keys will be a reference for users to check the authenticity of assets."),(0,r.kt)("h2",{id:"what-does-this-standard-represent-"},"What does this standard represent ?"),(0,r.kt)("p",null,"This Metadata standard describes two data keys that can be added to an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md"},"ERC725Y")," smart contract to keep track of issued assets."),(0,r.kt)("h3",{id:"lsp12issuedassets"},(0,r.kt)("inlineCode",{parentName:"h3"},"LSP12IssuedAssets[]")),(0,r.kt)("p",null,"This data key represents a list of all issued assets by the contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP12IssuedAssets[]",\n  "key": "0x7c8c3416d6cda87cd42c71ea1843df28ac4850354f988d55ee2eaa47b6dc05cd",\n  "keyType": "Array",\n  "valueType": "address",\n  "valueContent": "Address"\n}\n')),(0,r.kt)("h3",{id:"lsp12issuedassetsmap"},(0,r.kt)("inlineCode",{parentName:"h3"},"LSP12IssuedAssetsMap")),(0,r.kt)("p",null,"This data key represents a map key holding both:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-165"},"ERC165 interface ID")," to quickly identify the standard used by the issued assets. (Could be LSP7 or LSP8 asset)"),(0,r.kt)("li",{parentName:"ul"},"the index in the ",(0,r.kt)("a",{parentName:"li",href:"#lsp12issuedassets"},(0,r.kt)("inlineCode",{parentName:"a"},"LSP12IssuedAssets[]"))," array where the issued assets addresses are stored.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP12IssuedAssetsMap:<address>",\n  "key": "0x74ac2555c10b9349e78f0000<address>",\n  "keyType": "Mapping",\n  "valueType": "(bytes4,bytes8)",\n  "valueContent": "(Bytes4,Number)"\n}\n')),(0,r.kt)("h3",{id:"asset-verification-flow"},"Asset Verification Flow"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"LSP12 Issued Assets Flow",src:s(4063).Z,width:"3226",height:"1239"})),(0,r.kt)("p",null,"The full ",(0,r.kt)("strong",{parentName:"p"},"verification flow")," for an asset should contain a check on the ",(0,r.kt)("strong",{parentName:"p"},"asset")," and the ",(0,r.kt)("strong",{parentName:"p"},"issuer")," smart contract."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1:")," Should check on the asset smart contract, the ",(0,r.kt)("strong",{parentName:"li"},"owner")," or the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/standards/nft-2.0/LSP4-Digital-Asset-Metadata#lsp4creators"},"LSP4Creators Array"))," data key and retrieve the address of the creator from the array.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Checking LSP4Creators Array on asset",src:s(5157).Z,width:"3523",height:"1135"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2:")," Should check on the address retrieved in ",(0,r.kt)("strong",{parentName:"li"},"Step 1")," that the address of the asset being checked, matches one of the assets addresses stored in the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#lsp12issuedassets"},"LSP12IssuedAssets Array"))," of the UniversalProfile.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Checking LSP12IssuedAssets Array on UP",src:s(4588).Z,width:"3391",height:"1179"})))}h.isMDXComponent=!0},4063:function(e,t,s){t.Z=s.p+"assets/images/lsp12-issuedassets1-a63411fad3eae875714ae4e2f76c08f9.jpeg"},5157:function(e,t,s){t.Z=s.p+"assets/images/lsp12-issuedassets2-489b7ebd962821c378385c208191cff9.jpeg"},4588:function(e,t,s){t.Z=s.p+"assets/images/lsp12-issuedassets3-0e3fd1dabf8d2ccf29516a82d96c4596.jpeg"}}]);