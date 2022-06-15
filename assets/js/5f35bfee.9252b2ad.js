"use strict";(self.webpackChunkjungle_wiki=self.webpackChunkjungle_wiki||[]).push([[409],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=c(a),p=r,g=b["".concat(l,".").concat(p)]||b[p]||d[p]||i;return a?n.createElement(g,s(s({ref:t},u),{},{components:a})):n.createElement(g,s({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},294:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),s=["components"],o={sidebar_label:"Database Design"},l="Database Design",c={unversionedId:"database-design/database-design",id:"database-design/database-design",title:"Database Design",description:"Database Design",source:"@site/docs/database-design/database-design.md",sourceDirName:"database-design",slug:"/database-design/",permalink:"/Jungle-Contributor-Guide/docs/database-design/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/database-design/database-design.md",tags:[],version:"current",frontMatter:{sidebar_label:"Database Design"},sidebar:"tutorialSidebar",previous:{title:"System Architecture",permalink:"/Jungle-Contributor-Guide/docs/system-architecture/"},next:{title:"Project Framework",permalink:"/Jungle-Contributor-Guide/docs/project-framework/"}},u={},d=[{value:"Database Access",id:"database-access",level:2},{value:"Role Definitions",id:"role-definitions",level:3},{value:"Users",id:"users",level:3},{value:"Database Catalog Tables",id:"database-catalog-tables",level:2},{value:"Database Transactional Tables",id:"database-transactional-tables",level:2},{value:"Database Reporting Tables",id:"database-reporting-tables",level:2},{value:"Database Non Functional Design",id:"database-non-functional-design",level:2},{value:"Security Design",id:"security-design",level:3},{value:"Performance",id:"performance",level:3},{value:"Backups and Recovery",id:"backups-and-recovery",level:3},{value:"Archiving",id:"archiving",level:3}],b={toc:d};function p(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},b,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"database-design"},"Database Design"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Database Design",src:a(4929).Z,width:"5388",height:"3182"})),(0,i.kt)("p",null,"Mango Chango's Jungle v2.0 Database is a relational Database built with MySQL, the porpouse of this database It's to persist a collection of data items with pre-defined relationships between them. Jungle MySQL database follows ACID characteristics: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Atomicity"),(0,i.kt)("li",{parentName:"ol"},"Consistency"),(0,i.kt)("li",{parentName:"ol"},"Isolation"),(0,i.kt)("li",{parentName:"ol"},"Durability")),(0,i.kt)("h2",{id:"database-access"},"Database Access"),(0,i.kt)("h3",{id:"role-definitions"},"Role Definitions"),(0,i.kt)("h3",{id:"users"},"Users"),(0,i.kt)("h2",{id:"database-catalog-tables"},"Database Catalog Tables"),(0,i.kt)("h2",{id:"database-transactional-tables"},"Database Transactional Tables"),(0,i.kt)("h2",{id:"database-reporting-tables"},"Database Reporting Tables"),(0,i.kt)("h2",{id:"database-non-functional-design"},"Database Non Functional Design"),(0,i.kt)("h3",{id:"security-design"},"Security Design"),(0,i.kt)("h3",{id:"performance"},"Performance"),(0,i.kt)("h3",{id:"backups-and-recovery"},"Backups and Recovery"),(0,i.kt)("h3",{id:"archiving"},"Archiving"))}p.isMDXComponent=!0},4929:function(e,t,a){t.Z=a.p+"assets/images/database-design-2fa6d95a04b548b849d522ee4c5ea062.svg"}}]);