(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[18],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=i(n),p=r,g=u["".concat(c,".").concat(p)]||u[p]||d[p]||l;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>mt});var a=n(7294),r=n(6010),l=n(1944),o=n(7524),s=n(5281),c=n(7462),i=n(5999),m=n(9960);function d(e){const{permalink:t,title:n,subLabel:l,isNext:o}=e;return a.createElement(m.Z,{className:(0,r.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}function u(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(d,(0,c.Z)({},t,{subLabel:a.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(d,(0,c.Z)({},n,{subLabel:a.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var p=n(2263),g=n(143),h=n(373),f=n(4477);const b={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=b[e.versionMetadata.banner];return a.createElement(t,e)}function E(e){let{versionLabel:t,to:n,onClick:r}=e;return a.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(m.Z,{to:n,onClick:r},a.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function y(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,p.Z)(),{pluginId:o}=(0,g.gA)({failfast:!0}),{savePreferredVersionName:c}=(0,h.J)(o),{latestDocSuggestion:i,latestVersionSuggestion:m}=(0,g.Jo)(o),d=null!=i?i:(u=m).docs.find((e=>e.id===u.mainDocId));var u;return a.createElement("div",{className:(0,r.Z)(t,s.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(E,{versionLabel:m.label,to:d.path,onClick:()=>c(m.name)})))}function k(e){let{className:t}=e;const n=(0,f.E)();return n.banner?a.createElement(y,{className:t,versionMetadata:n}):null}function N(e){let{className:t}=e;const n=(0,f.E)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,s.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function L(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function C(e){let{lastUpdatedBy:t}=e;return a.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:r}=e;return a.createElement("span",{className:s.k.common.lastUpdated},a.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(L,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(C,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}const Z="iconEdit_eYIM";function T(e){let{className:t,...n}=e;return a.createElement("svg",(0,c.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(Z,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function w(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:s.k.common.editThisPage},a.createElement(T,null),a.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const B="tag_zVej",x="tagRegular_sFm0",O="tagWithCount_h2kH";function j(e){let{permalink:t,label:n,count:l}=e;return a.createElement(m.Z,{href:t,className:(0,r.Z)(B,l?O:x)},n,l&&a.createElement("span",null,l))}const A="tags_jXut",H="tag_QGVx";function S(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(A,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:H},a.createElement(j,{label:t,permalink:n}))}))))}const I="lastUpdated_vbeJ";function P(e){return a.createElement("div",{className:(0,r.Z)(s.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(S,e)))}function U(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:o}=e;return a.createElement("div",{className:(0,r.Z)(s.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(w,{editUrl:t})),a.createElement("div",{className:(0,r.Z)("col",I)},(n||l)&&a.createElement(_,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function M(e){const{content:t}=e,{metadata:n}=t,{editUrl:l,lastUpdatedAt:o,formattedLastUpdatedAt:c,lastUpdatedBy:i,tags:m}=n,d=m.length>0,u=!!(l||o||i);return d||u?a.createElement("footer",{className:(0,r.Z)(s.k.docs.docFooter,"docusaurus-mt-lg")},d&&a.createElement(P,{tags:m}),u&&a.createElement(U,{editUrl:l,lastUpdatedAt:o,lastUpdatedBy:i,formattedLastUpdatedAt:c})):null}var V=n(541),D=n(6043),R=n(3743);const z="tocCollapsibleButton_TO0P",W="tocCollapsibleButtonExpanded_MG3E";function F(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,c.Z)({type:"button"},n,{className:(0,r.Z)("clean-btn",z,!t&&W,n.className)}),a.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const q="tocCollapsible_ETCw",G="tocCollapsibleContent_vkbj",J="tocCollapsibleExpanded_sAul";function Y(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:o}=e;const{collapsed:s,toggleCollapsed:c}=(0,D.u)({initialState:!0});return a.createElement("div",{className:(0,r.Z)(q,!s&&J,n)},a.createElement(F,{collapsed:s,onClick:c}),a.createElement(D.z,{lazy:!0,className:G,collapsed:s},a.createElement(R.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:o})))}var $=n(6668);const X="anchorWithStickyNavbar_LWe7",K="anchorWithHideOnScrollNavbar_WYt5";function Q(e){let{as:t,id:n,...l}=e;const{navbar:{hideOnScroll:o}}=(0,$.L)();return"h1"!==t&&n?a.createElement(t,(0,c.Z)({},l,{className:(0,r.Z)("anchor",o?K:X),id:n}),l.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,(0,c.Z)({},l,{id:void 0}))}var ee=n(3438),te=n(8596),ne=n(4996);function ae(e){return a.createElement("svg",(0,c.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const re={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function le(e){let{children:t,href:n,isLast:r}=e;const l="breadcrumbs__link";return r?a.createElement("span",{className:l,itemProp:"name"},t):n?a.createElement(m.Z,{className:l,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:l},t)}function oe(e){let{children:t,active:n,index:l,addMicrodata:o}=e;return a.createElement("li",(0,c.Z)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function se(){const e=(0,ne.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(m.Z,{"aria-label":(0,i.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",re.breadcrumbsItemLink),href:e},a.createElement(ae,{className:re.breadcrumbHomeIcon})))}function ce(){const e=(0,ee.s1)(),t=(0,te.Ns)();return e?a.createElement("nav",{className:(0,r.Z)(s.k.docs.docBreadcrumbs,re.breadcrumbsContainer),"aria-label":(0,i.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(se,null),e.map(((t,n)=>{const r=n===e.length-1;return a.createElement(oe,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(le,{href:t.href,isLast:r},t.label))})))):null}var ie=n(3905),me=n(5742);var de=n(2389),ue=n(2949);function pe(){const{prism:e}=(0,$.L)(),{colorMode:t}=(0,ue.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var ge=n(7594),he=n.n(ge);const fe=/title=(?<quote>["'])(?<title>.*?)\1/,be=/\{(?<range>[\d,-]+)\}/,ve={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function Ee(e,t){const n=e.map((e=>{const{start:n,end:a}=ve[e];return"(?:"+n+"\\s*("+t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function ye(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:r,metastring:l}=t;if(l&&be.test(l)){const e=l.match(be).groups.range;if(0===r.length)throw new Error("A highlight range has been given in code block's metastring (``` "+l+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");const t=r[0].className,a=he()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const o=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return Ee(["js","jsBlock"],t);case"jsx":case"tsx":return Ee(["js","jsBlock","jsx"],t);case"html":return Ee(["js","jsBlock","html"],t);case"python":case"py":case"bash":return Ee(["bash"],t);case"markdown":case"md":return Ee(["html","jsx","bash"],t);default:return Ee(Object.keys(ve),t)}}(a,r),s=n.split("\n"),c=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),m=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<s.length;){const e=s[p].match(o);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?c[i[t]].range+=p+",":m[t]?c[m[t]].start=p:d[t]&&(c[d[t]].range+=c[d[t]].start+"-"+(p-1)+","),s.splice(p,1)}n=s.join("\n");const u={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;he()(n).forEach((e=>{null!=u[e]||(u[e]=[]),u[e].push(t)}))})),{lineClassNames:u,code:n}}const ke="codeBlockContainer_Ckt0";function Ne(e){let{as:t,...n}=e;const l=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,r]=e;const l=t[a];l&&"string"==typeof r&&(n[l]=r)})),n}(pe());return a.createElement(t,(0,c.Z)({},n,{style:l,className:(0,r.Z)(n.className,ke,s.k.common.codeBlock)}))}const Le={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function Ce(e){let{children:t,className:n}=e;return a.createElement(Ne,{as:"pre",tabIndex:0,className:(0,r.Z)(Le.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:Le.codeBlockLines},t))}const _e={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var Ze={Prism:n(7410).Z,theme:_e};function Te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function we(){return we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},we.apply(this,arguments)}var Be=/\r\n|\r|\n/,xe=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},Oe=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},je=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=we({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=we({},n,{backgroundColor:null}),r};function Ae(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const He=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),Te(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?je(e.theme,e.language):void 0;return t.themeDict=n})),Te(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,l=we({},Ae(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?we({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),Te(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return l[n[0]];var o=a?{display:"inline-block"}:{},s=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(s))}})),Te(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,l=e.token,o=we({},Ae(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?we({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),Te(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],l=0,o=0,s=[],c=[s];o>-1;){for(;(l=a[o]++)<r[o];){var i=void 0,m=t[o],d=n[o][l];if("string"==typeof d?(m=o>0?m:["plain"],i=d):(m=Oe(m,d.type),d.alias&&(m=Oe(m,d.alias)),i=d.content),"string"==typeof i){var u=i.split(Be),p=u.length;s.push({types:m,content:u[0]});for(var g=1;g<p;g++)xe(s),c.push(s=[]),s.push({types:m,content:u[g]})}else o++,t.push(m),n.push(i),a.push(0),r.push(i.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return xe(s),c}(void 0!==o?this.tokenize(t,a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),Se="codeLine_lJS_",Ie="codeLineNumber_Tfdd",Pe="codeLineContent_feaV";function Ue(e){let{line:t,classNames:n,showLineNumbers:l,getLineProps:o,getTokenProps:s}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=o({line:t,className:(0,r.Z)(n,l&&Se)}),m=t.map(((e,t)=>a.createElement("span",(0,c.Z)({key:t},s({token:e,key:t})))));return a.createElement("span",i,l?a.createElement(a.Fragment,null,a.createElement("span",{className:Ie}),a.createElement("span",{className:Pe},m)):a.createElement(a.Fragment,null,m,a.createElement("br",null)))}const Me={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function Ve(e){let{code:t,className:n}=e;const[l,o]=(0,a.useState)(!1),s=(0,a.useRef)(void 0),c=(0,a.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const a=document.createElement("textarea"),r=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const l=document.getSelection();let o=!1;l.rangeCount>0&&(o=l.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}a.remove(),o&&(l.removeAllRanges(),l.addRange(o)),r&&r.focus()}(t),o(!0),s.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),a.createElement("button",{type:"button","aria-label":l?(0,i.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,i.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,i.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",n,Me.copyButton,l&&Me.copyButtonCopied),onClick:c},a.createElement("span",{className:Me.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:Me.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:Me.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const De="wordWrapButtonIcon_Bwma",Re="wordWrapButtonEnabled_EoeP";function ze(e){let{className:t,onClick:n,isEnabled:l}=e;const o=(0,i.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,r.Z)("clean-btn",t,l&&Re),"aria-label":o,title:o},a.createElement("svg",{className:De,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function We(e){var t;let{children:n,className:l="",metastring:o,title:s,showLineNumbers:i,language:m}=e;const{prism:{defaultLanguage:d,magicComments:u}}=(0,$.L)(),p=null!=(t=null!=m?m:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(l))?t:d,g=pe(),h=function(){const[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(!1),l=(0,a.useRef)(null),o=(0,a.useCallback)((()=>{const n=l.current.querySelector("code");e?n.removeAttribute("style"):n.style.whiteSpace="pre-wrap",t((e=>!e))}),[l,e]),s=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=l.current,n=e>t||l.current.querySelector("code").hasAttribute("style");r(n)}),[l]);return(0,a.useEffect)((()=>{s()}),[e,s]),(0,a.useEffect)((()=>(window.addEventListener("resize",s,{passive:!0}),()=>{window.removeEventListener("resize",s)})),[s]),{codeBlockRef:l,isEnabled:e,isCodeScrollable:n,toggle:o}}(),f=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(fe))?void 0:n.groups.title)?t:""}(o)||s,{lineClassNames:b,code:v}=ye(n,{metastring:o,language:p,magicComments:u}),E=null!=i?i:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(o);return a.createElement(Ne,{as:"div",className:(0,r.Z)(l,p&&!l.includes("language-"+p)&&"language-"+p)},f&&a.createElement("div",{className:Le.codeBlockTitle},f),a.createElement("div",{className:Le.codeBlockContent},a.createElement(He,(0,c.Z)({},Ze,{theme:g,code:v,language:null!=p?p:"text"}),(e=>{let{className:t,tokens:n,getLineProps:l,getTokenProps:o}=e;return a.createElement("pre",{tabIndex:0,ref:h.codeBlockRef,className:(0,r.Z)(t,Le.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,r.Z)(Le.codeBlockLines,E&&Le.codeBlockLinesWithNumbering)},n.map(((e,t)=>a.createElement(Ue,{key:t,line:e,getLineProps:l,getTokenProps:o,classNames:b[t],showLineNumbers:E})))))})),a.createElement("div",{className:Le.buttonGroup},(h.isEnabled||h.isCodeScrollable)&&a.createElement(ze,{className:Le.codeButton,onClick:()=>h.toggle(),isEnabled:h.isEnabled}),a.createElement(Ve,{className:Le.codeButton,code:v}))))}function Fe(e){let{children:t,...n}=e;const r=(0,de.Z)(),l=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),o="string"==typeof l?We:Ce;return a.createElement(o,(0,c.Z)({key:String(r)},n),l)}const qe="details_lb9f",Ge="isBrowser_bmU9",Je="collapsibleContent_i85q";function Ye(e){return!!e&&("SUMMARY"===e.tagName||Ye(e.parentElement))}function $e(e,t){return!!e&&(e===t||$e(e.parentElement,t))}function Xe(e){let{summary:t,children:n,...l}=e;const o=(0,de.Z)(),s=(0,a.useRef)(null),{collapsed:i,setCollapsed:m}=(0,D.u)({initialState:!l.open}),[d,u]=(0,a.useState)(l.open);return a.createElement("details",(0,c.Z)({},l,{ref:s,open:d,"data-collapsed":i,className:(0,r.Z)(qe,o&&Ge,l.className),onMouseDown:e=>{Ye(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Ye(t)&&$e(t,s.current)&&(e.preventDefault(),i?(m(!1),u(!0)):m(!0))}}),null!=t?t:a.createElement("summary",null,"Details"),a.createElement(D.z,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{m(e),u(!e)}},a.createElement("div",{className:Je},n)))}const Ke="details_b_Ee";function Qe(e){let{...t}=e;return a.createElement(Xe,(0,c.Z)({},t,{className:(0,r.Z)("alert alert--info",Ke,t.className)}))}function et(e){return a.createElement(Q,e)}const tt="containsTaskList_mC6p";const nt="img_ev3q";const at={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e):e));return a.createElement(me.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props.mdxType)))?a.createElement("code",e):a.createElement(Fe,e)},a:function(e){return a.createElement(m.Z,e)},pre:function(e){var t;return a.createElement(Fe,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(Qe,(0,c.Z)({},e,{summary:n}),r)},ul:function(e){return a.createElement("ul",(0,c.Z)({},e,{className:(t=e.className,(0,r.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&tt))}));var t},img:function(e){return a.createElement("img",(0,c.Z)({loading:"lazy"},e,{className:(t=e.className,(0,r.Z)(t,nt))}));var t},h1:e=>a.createElement(et,(0,c.Z)({as:"h1"},e)),h2:e=>a.createElement(et,(0,c.Z)({as:"h2"},e)),h3:e=>a.createElement(et,(0,c.Z)({as:"h3"},e)),h4:e=>a.createElement(et,(0,c.Z)({as:"h4"},e)),h5:e=>a.createElement(et,(0,c.Z)({as:"h5"},e)),h6:e=>a.createElement(et,(0,c.Z)({as:"h6"},e))};function rt(e){let{children:t}=e;return a.createElement(ie.Zo,{components:at},t)}const lt="docItemContainer_Adtb",ot="docItemCol_GujU",st="tocMobile_aoJ5";function ct(e){var t;const{content:n}=e,{metadata:r,frontMatter:o,assets:s}=n,{keywords:c}=o,{description:i,title:m}=r,d=null!=(t=s.image)?t:o.image;return a.createElement(l.d,{title:m,description:i,keywords:c,image:d})}function it(e){const{content:t}=e,{metadata:n,frontMatter:l}=t,{hide_title:c,hide_table_of_contents:i,toc_min_heading_level:m,toc_max_heading_level:d}=l,{title:p}=n,g=!c&&void 0===t.contentTitle,h=(0,o.i)(),f=!i&&t.toc&&t.toc.length>0,b=f&&("desktop"===h||"ssr"===h);return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",!i&&ot)},a.createElement(k,null),a.createElement("div",{className:lt},a.createElement("article",null,a.createElement(ce,null),a.createElement(N,null),f&&a.createElement(Y,{toc:t.toc,minHeadingLevel:m,maxHeadingLevel:d,className:(0,r.Z)(s.k.docs.docTocMobile,st)}),a.createElement("div",{className:(0,r.Z)(s.k.docs.docMarkdown,"markdown")},g&&a.createElement("header",null,a.createElement(Q,{as:"h1"},p)),a.createElement(rt,null,a.createElement(t,null))),a.createElement(M,e)),a.createElement(u,{previous:n.previous,next:n.next}))),b&&a.createElement("div",{className:"col col--3"},a.createElement(V.Z,{toc:t.toc,minHeadingLevel:m,maxHeadingLevel:d,className:s.k.docs.docTocDesktop})))}function mt(e){const t="docs-doc-id-"+e.content.metadata.unversionedId;return a.createElement(l.FG,{className:t},a.createElement(ct,e),a.createElement(it,e))}},3743:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var a=n(7462),r=n(7294);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}var s=n(6668);function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function i(e,t){var n;let{anchorTopOffset:a}=t;const r=e.find((e=>c(e).top>=a));if(r){var l;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(r))?r:null!=(l=e[e.indexOf(r)-1])?l:null}return null!=(n=e[e.length-1])?n:null}function m(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,r.useRef)(void 0),n=m();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:o}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=i(s,{anchorTopOffset:n.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===m)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:l}=e;return t.length?r.createElement("ul",{className:l?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const p=r.memo(u);function g(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:m,maxHeadingLevel:u,...g}=e;const h=(0,s.L)(),f=null!=m?m:h.tableOfContents.minHeadingLevel,b=null!=u?u:h.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>o({toc:l(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:f,maxHeadingLevel:b});return d((0,r.useMemo)((()=>{if(c&&i)return{linkClassName:c,linkActiveClassName:i,minHeadingLevel:f,maxHeadingLevel:b}}),[c,i,f,b])),r.createElement(p,(0,a.Z)({toc:v,className:n,linkClassName:c},g))}},4477:(e,t,n)=>{"use strict";n.d(t,{E:()=>s,q:()=>o});var a=n(7294),r=n(902);const l=a.createContext(null);function o(e){let{children:t,version:n}=e;return a.createElement(l.Provider,{value:n},t)}function s(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}},7594:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,l]=t;if(a&&l){a=parseInt(a),l=parseInt(l);const e=a<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=a;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);