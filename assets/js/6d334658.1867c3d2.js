"use strict";(self.webpackChunkbs_support=self.webpackChunkbs_support||[]).push([[587],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={id:"roe-planning",title:"Rules of Engagement (ROE) Planning",sidebar_position:2},l=void 0,o={unversionedId:"checklists/roe-planning",id:"checklists/roe-planning",title:"Rules of Engagement (ROE) Planning",description:"The Rules of Engagement establish the responsibility, relationship, and guidelines between the Red Team, the network owner, the system owner, and any stakeholders required for engagement execution.",source:"@site/docs/checklists/roe-planning.md",sourceDirName:"checklists",slug:"/checklists/roe-planning",permalink:"/redteamguide/docs/checklists/roe-planning",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"roe-planning",title:"Rules of Engagement (ROE) Planning",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Red team checklist",permalink:"/redteamguide/docs/checklists/red-team-checklist"},next:{title:"Red Teaming and MITRE ATT&CK",permalink:"/redteamguide/docs/Concepts/mitre_attack"}},s={},p=[{value:"ROE Document",id:"roe-document",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Rules of Engagement",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Rules of Engagement establish the responsibility, relationship, and guidelines between the Red Team, the network owner, the system owner, and any stakeholders required for engagement execution.")),(0,i.kt)("p",null,"This document governs the entire process of a Red Team and must be adhered to during the execution of an engagement. Deviation from the rules established in the ROE must be approved by all parties prior to execution."),(0,i.kt)("p",null,"The ROE document covers numerous topics. Some include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Authorized Actions"),(0,i.kt)("li",{parentName:"ul"},"Explicitly Restricted Actions"),(0,i.kt)("li",{parentName:"ul"},"Authorized Targets and Target Space"),(0,i.kt)("li",{parentName:"ul"},"Restricted Items (Blacklist)"),(0,i.kt)("li",{parentName:"ul"},"Engagement Objectives")),(0,i.kt)("h2",{id:"roe-document"},"ROE Document"),(0,i.kt)("p",null,"The ROE documents the target information, approvals, threat implementation, activities, and issues required to staff, coordinate, and execute engagements within the target environment. "),(0,i.kt)("p",null,"The main body of the ROE (often derived from a standing template) provides information on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Red Team methodology"),(0,i.kt)("li",{parentName:"ul"},"A high-level description of the types of activities that may be executed"),(0,i.kt)("li",{parentName:"ul"},"The types of hardware and software that may be employed"),(0,i.kt)("li",{parentName:"ul"},"A recommended deconfliction process"),(0,i.kt)("li",{parentName:"ul"},"Levels of threat available (comparison)"),(0,i.kt)("li",{parentName:"ul"},"Roles and responsibilities of each functional group (Exercise Control Group (ECG), White Cell, Training Audience (TA), etc.)"),(0,i.kt)("li",{parentName:"ul"},"The identification of and references to appropriate legal requirements (PCI, FERPA, HIPAA, HITEC, SOX, GLBA, etc.)"),(0,i.kt)("li",{parentName:"ul"},"A legal responsibility disclaimer (federally mandated requirements for the Red Team to report certain findings)")),(0,i.kt)("p",null,"Information specific to each individual engagement should be documented in annexes to the ROE. At a minimum, ROE annexes should detail:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The Target of the Engagement"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Organization name"),(0,i.kt)("li",{parentName:"ul"},"Address"),(0,i.kt)("li",{parentName:"ul"},"Specific groups or divisions"),(0,i.kt)("li",{parentName:"ul"},"Organizational identifiers"),(0,i.kt)("li",{parentName:"ul"},"Senior management contact info"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An Engagement Contact List (name, role, phone, email, office location)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ECG personnel"),(0,i.kt)("li",{parentName:"ul"},"White Cell"),(0,i.kt)("li",{parentName:"ul"},"Trusted Agents"),(0,i.kt)("li",{parentName:"ul"},"Red Team Lead"),(0,i.kt)("li",{parentName:"ul"},"Red Tech Lead"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Engagement Objectives"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Conditions"),(0,i.kt)("li",{parentName:"ul"},"Threat level"),(0,i.kt)("li",{parentName:"ul"},"Targeted objectives"),(0,i.kt)("li",{parentName:"ul"},"Targets of opportunity"),(0,i.kt)("li",{parentName:"ul"},"Measures of success/failure"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Authorized Target Space"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Network",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The IP boundaries of the event"),(0,i.kt)("li",{parentName:"ul"},"Domains and/or workgroups"),(0,i.kt)("li",{parentName:"ul"},"Specific off-limits areas and resources (non-target intellectual property file share)"),(0,i.kt)("li",{parentName:"ul"},"Off-limits machines, networks, equipment, or applications (blacklist)"),(0,i.kt)("li",{parentName:"ul"},"Maintenance windows"))),(0,i.kt)("li",{parentName:"ul"},"Physical",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Areas of the campus"),(0,i.kt)("li",{parentName:"ul"},"Buildings"),(0,i.kt)("li",{parentName:"ul"},"Offices"),(0,i.kt)("li",{parentName:"ul"},"Off-limits areas (e.g., the emergency services sector of a medical complex)"),(0,i.kt)("li",{parentName:"ul"},"Off-limits materials within the target space (e.g., sensitive documents or equipment)"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Authorized Actions: Types of activities approved for the engagement")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Restricted Actions: Types of activities restricted during the engagement (if any)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The process for requesting approval of additional activities during engagement execution"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Approval process"),(0,i.kt)("li",{parentName:"ul"},"Points of contact (name, role, phone, email, office location)"),(0,i.kt)("li",{parentName:"ul"},"Alternate POC")))),(0,i.kt)("p",null,"The ROE must be updated when the target space, authorized actions, objectives, or scope are changed. For instance, the original scope may be limited to computer network attacks. If physical attacks are planned, the ROE must be updated to reflect the additional activities and controls. The Red Team Lead will address suggestions or adjustments to the ROE. Each review result must be provided to the originator. The final ROE must be approved by a Trusted Agent in senior management of the target environment."))}m.isMDXComponent=!0}}]);