"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[8873],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=p(a),u=o,c=k["".concat(s,".").concat(u)]||k[u]||m[u]||r;return a?n.createElement(c,i(i({ref:t},d),{},{components:a})):n.createElement(c,i({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1264:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:3},i="Become a validator",l={unversionedId:"networks/l16-testnet/become-validator",id:"networks/l16-testnet/become-validator",title:"Become a validator",description:"Before running validators on your node, make sure your node is running and working correctly. For more information, check the Run a node page.",source:"@site/docs/networks/l16-testnet/become-validator.md",sourceDirName:"networks/l16-testnet",slug:"/networks/l16-testnet/become-validator",permalink:"/networks/l16-testnet/become-validator",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/networks/l16-testnet/become-validator.md",tags:[],version:"current",lastUpdatedAt:1657288848,formattedLastUpdatedAt:"7/8/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"networksSidebar",previous:{title:"Run a node",permalink:"/networks/l16-testnet/run-node"},next:{title:"Become a validator",permalink:"/networks/l16-testnet/validator"}},s={},p=[{value:"Setup Validator",id:"setup-validator",level:2},{value:"Amount of validators",id:"amount-of-validators",level:2},{value:"Mnemonic",id:"mnemonic",level:2},{value:"Check your balance",id:"check-your-balance",level:2},{value:"Submit the transaction",id:"submit-the-transaction",level:2},{value:"Make a dry run first",id:"make-a-dry-run-first",level:3},{value:"Deposit your validators",id:"deposit-your-validators",level:3},{value:"Start your validator node",id:"start-your-validator-node",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Validator Node",id:"validator-node",level:3},{value:"Validator Keystore",id:"validator-keystore",level:3},{value:"Validator Key",id:"validator-key",level:3},{value:"Validator Key State",id:"validator-key-state",level:3},{value:"How Validator Keys are created",id:"how-validator-keys-are-created",level:2},{value:"An Example",id:"an-example",level:3},{value:"Node Setup Example",id:"node-setup-example",level:3},{value:"Need help?",id:"need-help",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"become-a-validator"},"Become a validator"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Before running validators on your node, make sure your node is running and working correctly. For more information, check the ",(0,o.kt)("a",{parentName:"p",href:"./run-node"},"Run a node")," page."))),(0,o.kt)("h2",{id:"setup-validator"},"Setup Validator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd lukso-l16-testnet\nlukso network validator setup\n")),(0,o.kt)("p",null,"This will create a key store and a transaction wallet. The purpose of the transaction wallet is to call and pay for the deposit transaction."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Fill in a password and save it somewhere."))),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Never delete the following files if you have deposited your validators: keystore, transaction_wallet and deposit_data.json."))),(0,o.kt)("h2",{id:"amount-of-validators"},"Amount of validators"),(0,o.kt)("p",null,"Make a choice how many validators you want to run, for every validator you need to have 220 LYXt"),(0,o.kt)("h2",{id:"mnemonic"},"Mnemonic"),(0,o.kt)("p",null,"If this is the first time you set up your validators, choose to not use an existing Mnemonic."),(0,o.kt)("p",null,"Choose to create a separate withdraw Mnemonic."),(0,o.kt)("p",null,"The Mnemonics will appear in your ",(0,o.kt)("inlineCode",{parentName:"p"},"node_config.yaml")," file."),(0,o.kt)("p",null,"Open your ",(0,o.kt)("inlineCode",{parentName:"p"},"node_config.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nano node_config.yaml\n")),(0,o.kt)("p",null,"Copy your Mnemonics and store them somewhere safe and offline."),(0,o.kt)("h2",{id:"check-your-balance"},"Check your balance"),(0,o.kt)("p",null,"Check if the wallet has enough funds:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"lukso network validator describe\n")),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.l16.lukso.network"},"Faucet")," and paste the transaction wallet public address into the field and choose the amount of LYXt you want to receive."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Transfer ",(0,o.kt)("strong",{parentName:"p"},"enough")," (#validators x staking_amount ",(0,o.kt)("strong",{parentName:"p"},"+ extra LYXt to pay deposit fees"),") funds to the transaction wallet public's address."))),(0,o.kt)("h2",{id:"submit-the-transaction"},"Submit the transaction"),(0,o.kt)("h3",{id:"make-a-dry-run-first"},"Make a dry run first"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"lukso network validator deposit --dry\n")),(0,o.kt)("p",null,"This will give you the possibility to peek in what is going to happen without executing a transaction."),(0,o.kt)("h3",{id:"deposit-your-validators"},"Deposit your validators"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are 100% sure that everything is correct you can deposit your LYXt, you will lose all your LYXt if you made a mistake"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"lukso network validator deposit\n")),(0,o.kt)("p",null,"It can take up to eight hours before your validator becomes active, but you can already start your validator in the meantime."),(0,o.kt)("p",null,"Once you deposited LYXt make sure to create a backup."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"lukso network validator backup\n")),(0,o.kt)("p",null,"Store the file ",(0,o.kt)("strong",{parentName:"p"},"node_recovery.json")," somewhere safe and offline."),(0,o.kt)("h2",{id:"start-your-validator-node"},"Start your validator node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo lukso network start\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo lukso network validator start\n")),(0,o.kt)("p",null,"Check the status of your validator, it can take up to 8 hours before your validators become active"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"lukso network validator describe\n")),(0,o.kt)("p",null,"Make sure everything is working correctly by checking the stats pages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stats.execution.l16.lukso.network"},"Execution stats")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stats.consensus.l16.lukso.network"},"Consensus stats"))),(0,o.kt)("p",null,"You can also check your ",(0,o.kt)("a",{parentName:"p",href:"/networks/l16-testnet/logs-stats-monitoring"},"logs"),"."),(0,o.kt)("h2",{id:"terminology"},"Terminology"),(0,o.kt)("h3",{id:"validator-node"},"Validator Node"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Validator Node")," is a combination of services and an underlying keystore that if run together are\nsyncing, validating and proposing blocks. In most cases it can be described as a directory that contains",(0,o.kt)("br",{parentName:"p"}),"\n","all necessary information to ",(0,o.kt)("em",{parentName:"p"},"run")," this node. At LUKSO the directory has the following structure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"configs"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"configs.yaml")," // configuration of consensus service"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"genesis.json")," // configuration of execution service"))),(0,o.kt)("li",{parentName:"ul"},"data",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"execution_data")," // db of execution service"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"consensus_data")," // db of consensus service"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"validator_data")," // db of validator service"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"keystore"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"prysm/direct/account/all-accounts.keystore.json")," // keystore of valdiator keys"),(0,o.kt)("li",{parentName:"ul"},"..."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"password.txt")," // password of keystore"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"docker-compose.yaml")," // describes how to run the docker images"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"node_config.yaml")," // adjustable values on how to run the nodes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},".env")," // auto genrated file derived from ",(0,o.kt)("strong",{parentName:"li"},"node_config.yaml"))),(0,o.kt)("h3",{id:"validator-keystore"},"Validator Keystore"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Validator Keystore")," is a directory with private key in formats for the respective validator service\nversion (Teku, Lighthouse, Prysm,...). The keystore has a fixed number of keys. If you need to change\nthe number of keys you ",(0,o.kt)("strong",{parentName:"p"},"must")," create a new keystore. There is always ",(0,o.kt)("strong",{parentName:"p"},"one")," ",(0,o.kt)("strong",{parentName:"p"},"Validator Keystore")," for\none ",(0,o.kt)("strong",{parentName:"p"},"Validator Node")),(0,o.kt)("h3",{id:"validator-key"},"Validator Key"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Validator Key")," is a private key that can have an active balance and is used to sign attestations\nand proposed blocks. The key can have an arbitrary amount of staked LYX but it ",(0,o.kt)("strong",{parentName:"p"},"won't")," change the reward.\nIt is possible to deposit LYX multiple time to this validator key and that is important for the case the ",(0,o.kt)("strong",{parentName:"p"},"Validator Key")," missed duties and lost balance."),(0,o.kt)("h3",{id:"validator-key-state"},"Validator Key State"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Validator Key State")," is the state of one particular key. A ",(0,o.kt)("strong",{parentName:"p"},"Validator Keystore")," can have many\nkeys being in many states. When firstly created all the ",(0,o.kt)("strong",{parentName:"p"},"Validator Keys")," are in the state\nNOT_DEPOSITED. (NOTE: If the keystore was recreated the state my differ for some keys)"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"State"),(0,o.kt)("th",{parentName:"tr",align:null},"Acitvated By"),(0,o.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NOT_DEPOSITED"),(0,o.kt)("td",{parentName:"tr",align:null},"..."),(0,o.kt)("td",{parentName:"tr",align:null},"The keystore was created for the first time")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PENDING"),(0,o.kt)("td",{parentName:"tr",align:null},"A deposit with ",(0,o.kt)("em",{parentName:"td"},"min staking amount")," was made"),(0,o.kt)("td",{parentName:"tr",align:null},"There is a proven stake deposited in the Deposit Contract")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ACTIVE"),(0,o.kt)("td",{parentName:"tr",align:null},"The deposit was observed by the consensus network"),(0,o.kt)("td",{parentName:"tr",align:null},"The validator is eligible to be selected to propose and attest in the upcoming epochs")))),(0,o.kt)("h2",{id:"how-validator-keys-are-created"},"How Validator Keys are created"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Validator Key")," is always part of a ",(0,o.kt)("strong",{parentName:"p"},"Validator Keystore")," - as a single key or a combination of many. The keys\nare being derived by a ",(0,o.kt)("a",{parentName:"p",href:"https://wolovim.medium.com/ethereum-201-mnemonics-bb01a9108c38"},"Mnemonic"),".\nA Mnemonic can potentially create an infinite amount of keys. It is important to understand that\nthese keys are indexed. There is a possibility to (theoretically) create a certain range."),(0,o.kt)("p",null,"Once a mnemonic is known the creation of ",(0,o.kt)("strong",{parentName:"p"},"Validator Keystores")," is ",(0,o.kt)("strong",{parentName:"p"},"not")," random but ",(0,o.kt)("strong",{parentName:"p"},"deterministic"),"."),(0,o.kt)("h3",{id:"an-example"},"An Example"),(0,o.kt)("p",null,"Given a mnemonic ",(0,o.kt)("em",{parentName:"p"},"m"),". We create a keystore from position 0 to 2. This could result into:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Keystore A"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Key0: 0x8154..12"),(0,o.kt)("li",{parentName:"ul"},"Key1: 0x7361..45"),(0,o.kt)("li",{parentName:"ul"},"Key2: 0x7481..fe")))),(0,o.kt)("p",null,"Now let's assume we deleted this keystore, and we create a new one from position 1 to 3. This results into:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Keystore B"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Key1: 0x7361..45"),(0,o.kt)("li",{parentName:"ul"},"Key2: 0x7481..fe"),(0,o.kt)("li",{parentName:"ul"},"Key3: 0x78ca..89")))),(0,o.kt)("p",null,"As you can see the Key1 and Key2 are the same in ",(0,o.kt)("strong",{parentName:"p"},"Keystore A")," and ",(0,o.kt)("strong",{parentName:"p"},"Keystore B"),". This mechanism\nallows for great power to rearrange your node setup."),(0,o.kt)("h3",{id:"node-setup-example"},"Node Setup Example"),(0,o.kt)("p",null,"Let's assume - given a mnemonic ",(0,o.kt)("em",{parentName:"p"},"m")," - we want to create 2 nodes with 30 keys in\n",(0,o.kt)("strong",{parentName:"p"},"Node A")," and 16 keys in the other ",(0,o.kt)("strong",{parentName:"p"},"Node B"),". Given our mnemonic ",(0,o.kt)("em",{parentName:"p"},"m")," we would\ne.g. have the following setup:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Node A")," has a keystore with keys from position ",(0,o.kt)("em",{parentName:"p"},"0")," to position ",(0,o.kt)("em",{parentName:"p"},"29"),"\n",(0,o.kt)("strong",{parentName:"p"},"Node B")," has a keystore with keys from position ",(0,o.kt)("em",{parentName:"p"},"30")," to position ",(0,o.kt)("em",{parentName:"p"},"45")),(0,o.kt)("p",null,"Now let's assume we want to rearrange the ",(0,o.kt)("strong",{parentName:"p"},"Validator Keys"),"'s by having an equal amount of keys on both nodes."),(0,o.kt)("p",null,"We should:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Stop the validator nodes"),(0,o.kt)("li",{parentName:"ol"},"Delete the keystores"),(0,o.kt)("li",{parentName:"ol"},"Recreate the keystores with the same mnemonic ",(0,o.kt)("strong",{parentName:"li"},"m")),(0,o.kt)("li",{parentName:"ol"},"Start the nodes again")),(0,o.kt)("p",null,"The setup could be"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Node A")," has a keystore with keys from position ",(0,o.kt)("em",{parentName:"p"},"0")," to position ",(0,o.kt)("em",{parentName:"p"},"22"),"\n",(0,o.kt)("strong",{parentName:"p"},"Node B")," has a keystore with keys from position ",(0,o.kt)("em",{parentName:"p"},"23")," to position ",(0,o.kt)("em",{parentName:"p"},"45")),(0,o.kt)("h2",{id:"need-help"},"Need help?"),(0,o.kt)("p",null,"Ask your question in the validators channel on the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/u7cmyUyw8F"},"official LUKSO Discord server"),"."))}m.isMDXComponent=!0}}]);