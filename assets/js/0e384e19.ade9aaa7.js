"use strict";(self.webpackChunkjungle_wiki=self.webpackChunkjungle_wiki||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},u="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Welcome to Mango Chango Contribution Guide/Wiki",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/Jungle-Contributor-Guide/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"System Architecture",permalink:"/Jungle-Contributor-Guide/docs/system-architecture/"}},c={},p=[{value:"Why?",id:"why",level:2},{value:"Jungle Features",id:"jungle-features",level:2},{value:"Getting Started",id:"getting-started",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Welcome to Mango Chango Contribution Guide/Wiki"),(0,a.kt)("h2",{id:"why"},"Why?"),(0,a.kt)("p",null,"Jungle is a Bussiness and People administration tool that helps Mango Chango's Consultants to report and manage their time and skills. This Contribution Guide will help you, to colaborate, contribute in building this great tool that will enable others to improve their work. Here you'll find instructions, best practices, and the best path to get started with Jungle's development life cycle."),(0,a.kt)("h2",{id:"jungle-features"},"Jungle Features"),(0,a.kt)("p",null,"Jungle is a platform that is built with latest technologies and framework to assure reliable, scalable and maintable code base, Jungle most important components are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Jungle's Database (MyQSL)"),(0,a.kt)("li",{parentName:"ul"},"Jungle's REST API (NestJS)"),(0,a.kt)("li",{parentName:"ul"},"Jungle's Web Application (ReactJS)")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"In order to start working on Jungle. You will have to read and learn several documents that we have prepare to get you on board:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"System Architecture"),(0,a.kt)("li",{parentName:"ol"},"Database Designs"),(0,a.kt)("li",{parentName:"ol"},"Contribution Guidelines"),(0,a.kt)("li",{parentName:"ol"},"User Stories ")),(0,a.kt)("p",null,"General system Architecture\nDatabase designs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Contribution Guidelines",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Repositories"),(0,a.kt)("li",{parentName:"ul"},"Github Repo Guidelines (Best Practices)"),(0,a.kt)("li",{parentName:"ul"},"Pull Request Github Guidelines"),(0,a.kt)("li",{parentName:"ul"},"Repository Labels"),(0,a.kt)("li",{parentName:"ul"},"Javascript guidelines (link to anb standard maybe)"))),(0,a.kt)("li",{parentName:"ul"},"User Stories",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"How to take a story (how to assign to yourself the story)"),(0,a.kt)("li",{parentName:"ul"},"How to add stories to the backlog"),(0,a.kt)("li",{parentName:"ul"},"How to request a grooming session")))))}m.isMDXComponent=!0}}]);