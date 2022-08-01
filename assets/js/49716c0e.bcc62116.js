"use strict";(self.webpackChunkbs_support=self.webpackChunkbs_support||[]).push([[752],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={title:"What is Red Teaming?",date:new Date("2020-01-21T00:00:00.000Z"),weight:4,description:"What is Red Teaming?\n"},i=void 0,s={unversionedId:"Concepts/red-teaming",id:"Concepts/red-teaming",title:"What is Red Teaming?",description:"What is Red Teaming?\n",source:"@site/docs/Concepts/red-teaming.md",sourceDirName:"Concepts",slug:"/Concepts/red-teaming",permalink:"/docs/Concepts/red-teaming",draft:!1,tags:[],version:"current",frontMatter:{title:"What is Red Teaming?",date:"2020-01-21T00:00:00.000Z",weight:4,description:"What is Red Teaming?\n"},sidebar:"tutorialSidebar",previous:{title:"Red Teaming and MITRE ATT&CK",permalink:"/docs/Concepts/mitre_attack"},next:{title:"Red Team Engagement vs Penetration Test vs Vulnerability Assessment",permalink:"/docs/Concepts/red-vs-pen-vs-vuln"}},p={},l=[{value:"Why Red Team?",id:"why-red-team",level:2},{value:"Threat Gets a Vote",id:"threat-gets-a-vote",level:2},{value:"Red Teaming vs Penetration Testing vs Vulnerability Testing",id:"red-teaming-vs-penetration-testing-vs-vulnerability-testing",level:2}],c={toc:l};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Red teaming is a goal oriented process driven by threat tactics. The focus is on ",(0,r.kt)("strong",{parentName:"p"},"training")," or ",(0,r.kt)("strong",{parentName:"p"},"measuring")," a blue team's ability to defend against this threat. Defense covers protection, detection, response, and recovery. ",(0,r.kt)("a",{parentName:"p",href:"http://threatexpress.com/blogs/2018/threat-gets-a-vote-applying-a-threat-based-approach-to-security-testing/#pdrr-protect-detect-respond-recover-coverage"},"PDRR"))),(0,r.kt)("h1",{id:"what-is-red-teaming"},"What is Red Teaming?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Definition: ",(0,r.kt)("strong",{parentName:"p"},"Red Teaming")," is the process of using Tactics, Techniques, and Procedures (TTPs) to emulate a real-world threat with the goals of training and measuring the effectiveness of the people, processes, and technology used to defend an environment.")),(0,r.kt)("p",null,"Red teaming is ",(0,r.kt)("strong",{parentName:"p"},"NOT")," a hunt for vulnerabilities, flaws, bugs, etc. The goal is to understand security operations as a whole (people, processes, and technology). The result of a red team engagement may identify vulnerabilities, but more importantly, red teaming provides an understanding of blue's capability to impact a threat's ability to operate."),(0,r.kt)("h2",{id:"why-red-team"},"Why Red Team?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Measure the effectiveness")," of the people, processes, and technology used to defend a network.\nHow do you know if blue TTPs are effective?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Train and/or measure Blue Teams")," ability to impact a threat\nBlue teams need practice. Better to practice on a helpful threat that a real one"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Test and understand")," specific threats or threat scenarios\nRed team engagements can be designed to exercise custom scenarios. Scenarios can include zero-days, ransom-ware attacks, or other unique attacks.")),(0,r.kt)("h2",{id:"threat-gets-a-vote"},"Threat Gets a Vote"),(0,r.kt)("p",null,"Dig deeper in the need for the threat perspective here. ",(0,r.kt)("a",{parentName:"p",href:"https://threatexpress.com/blogs/2018/threat-gets-a-vote-applying-a-threat-based-approach-to-security-testing/"},"Threat Gets a Vote - Applying a Threat-Based Approach to Security Testing")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1426).Z,width:"1855",height:"1748"})),(0,r.kt)("p",null,"How often do security defenders ask the bad-guy how or what they will do? Many organization develop security defenses without fully understanding what is important to a threat. Red teaming provides defenders an understanding of how a threat operates in a safe controlled process."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Better to learn and practice with a Red Team than a real buy guy... ",(0,r.kt)("em",{parentName:"p"},"anonymous blue teamer"))),(0,r.kt)("h2",{id:"red-teaming-vs-penetration-testing-vs-vulnerability-testing"},"Red Teaming vs Penetration Testing vs Vulnerability Testing"),(0,r.kt)("p",null,"Follow this link for a comparison of security testing types."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/concepts/red-vs-pen-vs-vuln/"},"Red Team Engagement vs Penetration Test vs Vulnerability Assessment"))))}d.isMDXComponent=!0},1426:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/threat_gets_a_vote-6724612fc1058a2b4e0a729a0d1bd348.png"}}]);