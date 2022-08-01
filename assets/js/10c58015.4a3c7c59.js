"use strict";(self.webpackChunkbs_support=self.webpackChunkbs_support||[]).push([[30],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return a?r.createElement(h,l(l({ref:t},m),{},{components:a})):r.createElement(h,l({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},56:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={title:"Decomposing a Threat",description:"Exercise: Decomposing a Threat in to a Threat Profile\n"},l=void 0,o={unversionedId:"Exercises/threat-profile",id:"Exercises/threat-profile",title:"Decomposing a Threat",description:"Exercise: Decomposing a Threat in to a Threat Profile\n",source:"@site/docs/Exercises/threat-profile.md",sourceDirName:"Exercises",slug:"/Exercises/threat-profile",permalink:"/redteamguide/docs/Exercises/threat-profile",draft:!1,tags:[],version:"current",frontMatter:{title:"Decomposing a Threat",description:"Exercise: Decomposing a Threat in to a Threat Profile\n"},sidebar:"tutorialSidebar",previous:{title:"Adversarial Mindset Challenge",permalink:"/redteamguide/docs/Exercises/mindset-challege"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Objectives",id:"objectives",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Scenario",id:"scenario",level:2},{value:"Threat Profile Example",id:"threat-profile-example",level:3},{value:"Threat Profile Usage",id:"threat-profile-usage",level:3},{value:"Highlights from Energetic Bear Threat Actor",id:"highlights-from-energetic-bear-threat-actor",level:3},{value:"IOCs from the actor Energetic Bear and the HAVEX malware",id:"iocs-from-the-actor-energetic-bear-and-the-havex-malware",level:3},{value:"HAVEX HTTP Request Sample",id:"havex-http-request-sample",level:3},{value:"Threat Profile Template",id:"threat-profile-template",level:3},{value:"Possible Solution",id:"possible-solution",level:2},{value:"Threat Profile Example",id:"threat-profile-example-1",level:3},{value:"Conclusion",id:"conclusion",level:2}],m={toc:p};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"This is a group exercise. As a class, we will examine the Energetic Bear threat actor to build a threat profile that can be used during a Red Team engagement"),(0,n.kt)("h2",{id:"objectives"},"Objectives"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Review the Energetic Bear threat actor\u2019s TTPs."),(0,n.kt)("li",{parentName:"ul"},"Use the information to create a threat that is similar and can be used to support future Red Team engagements."),(0,n.kt)("li",{parentName:"ul"},"Complete a threat profile")),(0,n.kt)("h2",{id:"instructions"},"Instructions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use the Energetic Bear material provided for reference."),(0,n.kt)("li",{parentName:"ul"},"Modify and adjust the profile to fit your scenario.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This is one of the more difficult exercises to complete. It is not technically difficult, but dives into threat emulation design that many have not explored. There is no right or wrong answer. The exploration and process of decomposing a threat is the most valuable aspect of the exercise. Practice is the best way to understand this process.")),(0,n.kt)("h2",{id:"scenario"},"Scenario"),(0,n.kt)("p",null,"A client has asked your Red Team to emulate a specific threat. Specifically they are interested in the attacks by Energetic Bear."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal")),(0,n.kt)("p",null,"As professional Red Team, you understand that emulating a specific threat actor is not easy or feasible. Instead of redesigning Energetic Bear, you understand focus should be on the emulation of a threat\u2019s TTPs. This is more valuable that emulating a specific threat actor. The goal is not document the Energetic Bear threat actor but to create a threat profile document using Energetic Bear as inspiration. You will use research on Energetic Bear's TTPs to build out a custom threat profile that is technically feasible and can be used to engage the target with realistic threat TTPs. A complete threat profile will contain details that can be used to plan and design the execution of a threat against a target. These are typically deployed as a command and control channel. We will discuss command and control in more detail later. "),(0,n.kt)("p",null,"Use Energetic Bear references, MITRE, ATT&CK, personal experience, and intuition to develop the profile. Remember, this is your interpretation of a threat using a specific threat actor as inspiration."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resources")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://attack.mitre.org/wiki/Main_Page"},"MITRE ATT&CK Framework"),", ",(0,n.kt)("a",{parentName:"li",href:"https://attack.mitre.org/wiki/Main_Page"},"https://attack.mitre.org/wiki/Main_Page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://attack.mitre.org/wiki/ATT%26CK_Navigator"},"MITRE ATT&CK Navigator"),", ",(0,n.kt)("a",{parentName:"li",href:"https://attack.mitre.org/wiki/ATT%26CK_Navigator"},"https://attack.mitre.org/wiki/ATT%26CK_Navigator")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/Dragonfly_Threat_Against_Western_Energy_Suppliers.pdf"},"Dragonfly: Cyberespionage Attacks Against Energy Suppliers"),", ",(0,n.kt)("a",{parentName:"li",href:"http://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/Dragonfly_Threat_Against_Western_Energy_Suppliers.pdf"},"http://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/Dragonfly_Threat_Against_Western_Energy_Suppliers.pdf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://media.kasperskycontenthub.com/wp-content/uploads/sites/58/2018/03/09092926/EB-YetiJuly2014-Public.pdf"},"Energetic Bear \u2013 Crouching Yeti"),", ",(0,n.kt)("a",{parentName:"li",href:"https://media.kasperskycontenthub.com/wp-content/uploads/sites/58/2018/03/09092926/EB-YetiJuly2014-Public.pdf"},"https://media.kasperskycontenthub.com/wp-content/uploads/sites/58/2018/03/09092926/EB-YetiJuly2014-Public.pdf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.crowdstrike.com/blog/cve-2014-1761-alley-compromise"},"The Alley of Compromise"),", ",(0,n.kt)("a",{parentName:"li",href:"https://www.crowdstrike.com/blog/cve-2014-1761-alley-compromise"},"https://www.crowdstrike.com/blog/cve-2014-1761-alley-compromise"))),(0,n.kt)("h3",{id:"threat-profile-example"},"Threat Profile Example"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Category"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Description"),(0,n.kt)("td",{parentName:"tr",align:null},"General mid-tiered threat that uses common offensive tools and techniques.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Goal and Intent"),(0,n.kt)("td",{parentName:"tr",align:null},"Exist in the network to enumerate systems and information in order to maintain Command and Control to support future attacks.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Key IOCs"),(0,n.kt)("td",{parentName:"tr",align:null},"Cobalt Strike HTTPS beacon on TCP 443, Payload: c:\\programdata\\microsoft\\iexplore.exe, Timestamp: 7/13/2009 10:04 PM, MD5: a7705501c5e216b56cf49dcf540184d0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"C2 Overview"),(0,n.kt)("td",{parentName:"tr",align:null},"HTTPS on port 443 Cobalt Strike Beacon with a five-minute callback time. Calling directly to threat-owned domains.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TTPs (Enumeration, Delivery, Lateral Movement, Privilege Escalation, etc.)"),(0,n.kt)("td",{parentName:"tr",align:null},"Assumed Breach Model, no initial delivery via exploitation. POST-exploitation via Cobalt Strike commands. Enumeration and lateral movement via Cobalt Strike and native Windows commands. Privilege escalation limited and determined POST-exploitation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Exploitation"),(0,n.kt)("td",{parentName:"tr",align:null},"Assumed Breach Model, no exploitation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Persistence"),(0,n.kt)("td",{parentName:"tr",align:null},"User-level persistence using Microsoft Outlook rule triggered by specific email.")))),(0,n.kt)("h3",{id:"threat-profile-usage"},"Threat Profile Usage"),(0,n.kt)("p",null,"Threat profiles typically support the engagement story and are used to describe the technical aspects of a single C2 channel. A single threat profile is used for each C2 channel."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(2120).Z,width:"799",height:"439"})),(0,n.kt)("h3",{id:"highlights-from-energetic-bear-threat-actor"},"Highlights from Energetic Bear Threat Actor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Starting in 2010 and ending in 2014, Energetic Bear / Dragonfly / Crouching Yeti malware attacked numerous computers to collect information on industrial control systems in the United States and Europe"),(0,n.kt)("li",{parentName:"ul"},"Spread out over time and thus difficult to detect"),(0,n.kt)("li",{parentName:"ul"},"The primary goal was to collect information that impacted the energy and pharmaceutical industries"),(0,n.kt)("li",{parentName:"ul"},"Possibly nation-state supported"),(0,n.kt)("li",{parentName:"ul"},"Phishing, watering hole attacks"),(0,n.kt)("li",{parentName:"ul"},"Known exploits were used (PDF, Java, IE, Word)"),(0,n.kt)("li",{parentName:"ul"},"Compromised ICS web servers"),(0,n.kt)("li",{parentName:"ul"},"HTTP-based C2"),(0,n.kt)("li",{parentName:"ul"},"Specific activities and capabilities")),(0,n.kt)("h3",{id:"iocs-from-the-actor-energetic-bear-and-the-havex-malware"},"IOCs from the actor Energetic Bear and the HAVEX malware"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(8873).Z,width:"600",height:"244"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Actor")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Associated with the Russian Federation"),(0,n.kt)("li",{parentName:"ul"},"Active over multiple years"),(0,n.kt)("li",{parentName:"ul"},"Active primarily during Moscow business hours"),(0,n.kt)("li",{parentName:"ul"},"Targeted organizations based in the industry control system sector"),(0,n.kt)("li",{parentName:"ul"},"Goal of gathering intelligence on ICS-based organizations"),(0,n.kt)("li",{parentName:"ul"},"Use of custom malware")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Attack and delivery TTPs")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Phishing"),(0,n.kt)("li",{parentName:"ul"},"Watering hole"),(0,n.kt)("li",{parentName:"ul"},"Compromised web servers")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Exploitation TTPs")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PDF exploits"),(0,n.kt)("li",{parentName:"ul"},"Java and IE exploits"),(0,n.kt)("li",{parentName:"ul"},"Word exploits"),(0,n.kt)("li",{parentName:"ul"},"Custom binaries")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Post-exploitation TTPs")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Local system enumeration for OS, username, processes, internet history, etc."),(0,n.kt)("li",{parentName:"ul"},"Scan for known ICS-related ports"),(0,n.kt)("li",{parentName:"ul"},"DLL injection to migrate into explorer.exe"),(0,n.kt)("li",{parentName:"ul"},"Collect Outlook address book information"),(0,n.kt)("li",{parentName:"ul"},"Collect passwords from browsers"),(0,n.kt)("li",{parentName:"ul"},"Save exfiltrated data to an encrypted file on disk before delivery to the C2 in an HTTP POST request")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Persistence TTPs")),(0,n.kt)("p",null,"Run key registry modifications:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\\"TmProvider"\nHKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run\\"TmProvider"\nHKEY_LOCAL_MACHINE\\ SOFTWARE\\Microsoft\\Internet Explorer\\InternetRegistry\\"fertger"\nHKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Internet Explorer\\InternetRegistry\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"HAVEX Paylod Delivery")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(6158).Z,width:"572",height:"149"})),(0,n.kt)("p",null,"Energetic Bear used three major methods to deliver malware."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1) Malicious PDF via spear-phishing"),"\nSpear-phishing was used to infect targeted individuals for initial information gathering by delivering malicious PDF documents\u2014in this case, PDF/SWF exploits targeting CVE-2011-0611 to drop malware.3 Even with this running through 2014, older exploits were still valuable."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2) Malicious JAR and HTML via a watering hole attack"),"\nWatering hole attacks were used to deliver Backdoor.Oldrea by Symantec. These attacks exploited CVE-2013-2465, CVE-2013-1347, and CVE-2012-1723 in Java 6, Java 7, IE 7, and IE 8 to drop the HAVEX malware. The exploits appeared to be modified Metasploit Java exploits built to deliver the HAVEX loader."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3) Legitimate software loaders"),"\nEnergetic Bear compromised several legitimate ICS vendor websites. Binaries such as camera drivers and PLC management software were modified and made to deliver the HAVEX malware."),(0,n.kt)("p",null,"In order to complete the third attack type, the threat actor had to compromise several ICS vendors' websites. Sometimes called a Strategic Web Compromise (SWC) attack, these have become a favorite attack method from Russian- and Chinese-based threats. In this case, SWC attacks were used to compromise a site that would most likely be visited by customers or users of ICS systems. This made the watering hole or binary compromises much more useful against the targeted victim. Using these three attack types demonstrated an organized and arguably sophisticated threat actor. The team behind this planned and organized a scenario to be successful against its target audience."),(0,n.kt)("p",null,"Once malware was delivered, three major tasks were observed:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"System enumeration tools collected information, such as the OS version, machine name and username, and file and directory listings."),(0,n.kt)("li",{parentName:"ul"},"A credential-harvesting tool extracted stored passwords from various web browsers."),(0,n.kt)("li",{parentName:"ul"},"Secondary implants6 communicated with different C2 infrastructures using custom protocols and payloads executed in memory.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"References")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/Dragonfly_Threat_Against_Western_Energy_Suppliers.pdf"},"Dragonfly: Cyberespionage Attacks Against Energy Suppliers"),", ",(0,n.kt)("a",{parentName:"li",href:"http://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/Dragonfly_Threat_Against_Western_Energy_Suppliers.pdf"},"http://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/Dragonfly_Threat_Against_Western_Energy_Suppliers.pdf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://media.kasperskycontenthub.com/wp-content/uploads/sites/58/2018/03/09092926/EB-YetiJuly2014-Public.pdf"},"Energetic Bear - Crouching Yeti"),", ",(0,n.kt)("a",{parentName:"li",href:"https://media.kasperskycontenthub.com/wp-content/uploads/sites/58/2018/03/09092926/EB-YetiJuly2014-Public.pdf"},"https://media.kasperskycontenthub.com/wp-content/uploads/sites/58/2018/03/09092926/EB-YetiJuly2014-Public.pdf")),(0,n.kt)("li",{parentName:"ul"},"[The Alley of Compromise]","(",(0,n.kt)("a",{parentName:"li",href:"https://www.crowdstrike.com/blog/cve-2014-1761-alley-compromise"},"https://www.crowdstrike.com/blog/cve-2014-1761-alley-compromise"),", ",(0,n.kt)("a",{parentName:"li",href:"https://www.crowdstrike.com/blog/cve-2014-1761-alley-compromise"},"https://www.crowdstrike.com/blog/cve-2014-1761-alley-compromise"),")")),(0,n.kt)("h3",{id:"havex-http-request-sample"},"HAVEX HTTP Request Sample"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST Request")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"POST /wp08/wp-includes/dtcla.php?id=285745296322896178920098FD80-20&v1=038&v2=170393861&q=5265882854508EFCF958F979E4 HTTP/1.1\nUser-Agent: Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/525.19(KHTML, like Gecko) Chrome/1.0.154.36 Safari/525.19\nHost: toons.freesexycomics.com\nContent-Length: 0\nCache-Control: no-cache\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST Response")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nDate: Wed, 22 Jan 2014 13:40:48 GMT\nContent-Type: text/html\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: Apache/1.3.37 (Unix)\nCache-Control: no-cache\n\n9f65\n<html><head><mega http-equiv=\u2019CACHE-CONTROL\u2019 content=\u2019NO-CACHE\u2019></head><body>No data!\x3c!--havexQlpoOTFBWSZTWWYvDI0BOsD/////////////////////////////////////////////4oB+93VVXu69DuN7XYzds9yt49Ques\n[...TRUNCATED ...]\n+yUW3zfTxWAOstsCwCckdW5 AH5Q6vbbCu7GputPt5CSfgPCAKXcAOOICMsqliACGYEhAQT3v9eD\nM92D/8XckU4UJBmLwyNA==havex--\x3e</body></head>\n")),(0,n.kt)("p",null,"In this example from Symantec, several indicators can be identified."),(0,n.kt)("p",null,"The POST request shows several indicators that may be incorporated into an emulated threat:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A target PHP file (dtcla.php)"),(0,n.kt)("li",{parentName:"ul"},"Interesting URL parameters (id, v1, v2, q)"),(0,n.kt)("li",{parentName:"ul"},"A potentially interesting User-Agent"),(0,n.kt)("li",{parentName:"ul"},"A target host")),(0,n.kt)("p",null,"Like the request, the response has several indicators:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A server header"),(0,n.kt)("li",{parentName:"ul"},"A potentially unique ID (9f65)"),(0,n.kt)("li",{parentName:"ul"},"Base64-encoded data stored between text (havex < base64 > havex)")),(0,n.kt)("p",null,"Note: MALWAREMUSTDIE2 posted a great write-up on the HAVEX malware. This provides additional examples of C2 source code and HTTP request/response pairs."),(0,n.kt)("p",null,"References"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"http://pastebin.com/qCdMwtZ6"},"MALWAREMUSTDIE"),", ",(0,n.kt)("a",{parentName:"li",href:"http://pastebin.com/qCdMwtZ6"},"http://pastebin.com/qCdMwtZ6"))),(0,n.kt)("h3",{id:"threat-profile-template"},"Threat Profile Template"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Category"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Description"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Goal and Intent"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Key IOCs"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"C2 Overview"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TTPs (Enumeration, Delivery, Lateral Movement, Privilege Escalation, etc.)"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Exploitation"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Persistence"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"!! Stop Here !!")),(0,n.kt)("p",null,"Do not continue until ready for a possible solution."),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"possible-solution"},"Possible Solution"),(0,n.kt)("h3",{id:"threat-profile-example-1"},"Threat Profile Example"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Category"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Description"),(0,n.kt)("td",{parentName:"tr",align:null},"General mid-tiered threat that uses common offensive tools and techniques.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Goal and Intent"),(0,n.kt)("td",{parentName:"tr",align:null},"Exist in the network to enumerate systems and information in order to maintain Command and Control to support future attacks.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Key IOCs"),(0,n.kt)("td",{parentName:"tr",align:null},"PowerShell Empire HTTP agent on TCP 80, Location: Memory Resident and PowerShell Script stored in Registry, HTTP matching HAVEX")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"C2 Overview"),(0,n.kt)("td",{parentName:"tr",align:null},"HTTPS on port 80 with a 5 second callback. Calling directly to threat-owned domains.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TTPs (Enumeration, Delivery, Lateral Movement, Privilege Escalation, etc.)"),(0,n.kt)("td",{parentName:"tr",align:null},"Initially delivered during exploitation.  POST exploitation delivery via PowerShell commands.  Enumeration and lateral movement via PS Empire and native Windows commands.  Privilege escalation limited and determined POST exploitation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Exploitation"),(0,n.kt)("td",{parentName:"tr",align:null},"Social Engineering via Phishing, watering hole, and supply chain via compromised web servers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Persistence"),(0,n.kt)("td",{parentName:"tr",align:null},"Persistence via registry RUN key modification")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"HAVEX HTTP Indicators")),(0,n.kt)("p",null,"Parameters:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"v1=038&v2=170393861&q=5265\u2026\n")),(0,n.kt)("p",null,"Headers:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<head><mega http-equiv='CACHE-CONTROL' content='NO CACHE'></head><body>No Data!\x3c!--havexhavex--\x3e</body></head>\n")),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"In this exercise, you examined the Energetic Bear threat actor in order to design what a threat profile can be."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You learned which IOCs are exposed when tools are kept to their default settings."),(0,n.kt)("li",{parentName:"ul"},"You learned that the testing of tools before use is critical in understanding a tool\u2019s IOC profile."),(0,n.kt)("li",{parentName:"ul"},"You changed the default IOCs of common security tools."),(0,n.kt)("li",{parentName:"ul"},"You learned that some tools are easier than others to modify.")))}c.isMDXComponent=!0},8873:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/threatprofile_0-c076648a9d54cbfc77ee6b3a848fd422.png"},6158:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/threatprofile_1-167417e8911b9d986bc96005e9cfe0a2.png"},2120:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/threatprofilediagram-34a718ef9d484fc26d523b509f119bd0.png"}}]);