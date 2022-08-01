---
title: "Decomposing a Threat"
description: >
  Exercise: Decomposing a Threat in to a Threat Profile
---

## Description

This is a group exercise. As a class, we will examine the Energetic Bear threat actor to build a threat profile that can be used during a Red Team engagement

## Objectives

 - Review the Energetic Bear threat actor’s TTPs.
 - Use the information to create a threat that is similar and can be used to support future Red Team engagements.
 - Complete a threat profile

## Instructions

- Use the Energetic Bear material provided for reference.
- Modify and adjust the profile to fit your scenario.

:::note
This is one of the more difficult exercises to complete. It is not technically difficult, but dives into threat emulation design that many have not explored. There is no right or wrong answer. The exploration and process of decomposing a threat is the most valuable aspect of the exercise. Practice is the best way to understand this process.
:::

## Scenario

A client has asked your Red Team to emulate a specific threat. Specifically they are interested in the attacks by Energetic Bear.

__Goal__

As professional Red Team, you understand that emulating a specific threat actor is not easy or feasible. Instead of redesigning Energetic Bear, you understand focus should be on the emulation of a threat’s TTPs. This is more valuable that emulating a specific threat actor. The goal is not document the Energetic Bear threat actor but to create a threat profile document using Energetic Bear as inspiration. You will use research on Energetic Bear's TTPs to build out a custom threat profile that is technically feasible and can be used to engage the target with realistic threat TTPs. A complete threat profile will contain details that can be used to plan and design the execution of a threat against a target. These are typically deployed as a command and control channel. We will discuss command and control in more detail later. 

Use Energetic Bear references, MITRE, ATT&CK, personal experience, and intuition to develop the profile. Remember, this is your interpretation of a threat using a specific threat actor as inspiration.

__Resources__

- [MITRE ATT&CK Framework](https://attack.mitre.org/wiki/Main_Page), https://attack.mitre.org/wiki/Main_Page
- [MITRE ATT&CK Navigator](https://attack.mitre.org/wiki/ATT%26CK_Navigator), https://attack.mitre.org/wiki/ATT%26CK_Navigator
- [Dragonfly: Cyberespionage Attacks Against Energy Suppliers](http://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/Dragonfly_Threat_Against_Western_Energy_Suppliers.pdf), http://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/Dragonfly_Threat_Against_Western_Energy_Suppliers.pdf
- [Energetic Bear – Crouching Yeti](https://media.kasperskycontenthub.com/wp-content/uploads/sites/58/2018/03/09092926/EB-YetiJuly2014-Public.pdf), https://media.kasperskycontenthub.com/wp-content/uploads/sites/58/2018/03/09092926/EB-YetiJuly2014-Public.pdf
- [The Alley of Compromise](https://www.crowdstrike.com/blog/cve-2014-1761-alley-compromise), https://www.crowdstrike.com/blog/cve-2014-1761-alley-compromise

### Threat Profile Example

| Category            | Description          |
| ------------------- | ---------------------|
| Description         | General mid-tiered threat that uses common offensive tools and techniques. |
| Goal and Intent     | Exist in the network to enumerate systems and information in order to maintain Command and Control to support future attacks. |
| Key IOCs            | Cobalt Strike HTTPS beacon on TCP 443, Payload: c:\programdata\microsoft\iexplore.exe, Timestamp: 7/13/2009 10:04 PM, MD5: a7705501c5e216b56cf49dcf540184d0 |
| C2 Overview         | HTTPS on port 443 Cobalt Strike Beacon with a five-minute callback time. Calling directly to threat-owned domains. |
| TTPs (Enumeration, Delivery, Lateral Movement, Privilege Escalation, etc.) | Assumed Breach Model, no initial delivery via exploitation. POST-exploitation via Cobalt Strike commands. Enumeration and lateral movement via Cobalt Strike and native Windows commands. Privilege escalation limited and determined POST-exploitation. |
| Exploitation        | Assumed Breach Model, no exploitation. |
| Persistence         | User-level persistence using Microsoft Outlook rule triggered by specific email. |

### Threat Profile Usage

Threat profiles typically support the engagement story and are used to describe the technical aspects of a single C2 channel. A single threat profile is used for each C2 channel.

![](/img/exercises/threatprofilediagram.png)

### Highlights from Energetic Bear Threat Actor

- Starting in 2010 and ending in 2014, Energetic Bear / Dragonfly / Crouching Yeti malware attacked numerous computers to collect information on industrial control systems in the United States and Europe
- Spread out over time and thus difficult to detect
- The primary goal was to collect information that impacted the energy and pharmaceutical industries
- Possibly nation-state supported
- Phishing, watering hole attacks
- Known exploits were used (PDF, Java, IE, Word)
- Compromised ICS web servers
- HTTP-based C2
- Specific activities and capabilities

### IOCs from the actor Energetic Bear and the HAVEX malware

![](/img/exercises/threatprofile_0.png)

__Actor__

- Associated with the Russian Federation
- Active over multiple years
- Active primarily during Moscow business hours
- Targeted organizations based in the industry control system sector
- Goal of gathering intelligence on ICS-based organizations
- Use of custom malware

__Attack and delivery TTPs__

- Phishing
- Watering hole
- Compromised web servers

__Exploitation TTPs__

- PDF exploits
- Java and IE exploits
- Word exploits
- Custom binaries

__Post-exploitation TTPs__

- Local system enumeration for OS, username, processes, internet history, etc.
- Scan for known ICS-related ports
- DLL injection to migrate into explorer.exe
- Collect Outlook address book information
- Collect passwords from browsers
- Save exfiltrated data to an encrypted file on disk before delivery to the C2 in an HTTP POST request

__Persistence TTPs__

Run key registry modifications:

    HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run\"TmProvider"
    HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run\"TmProvider"
    HKEY_LOCAL_MACHINE\ SOFTWARE\Microsoft\Internet Explorer\InternetRegistry\"fertger"
    HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Internet Explorer\InternetRegistry

__HAVEX Paylod Delivery__

![](/img/exercises/threatprofile_1.png)

Energetic Bear used three major methods to deliver malware.

__1) Malicious PDF via spear-phishing__
Spear-phishing was used to infect targeted individuals for initial information gathering by delivering malicious PDF documents—in this case, PDF/SWF exploits targeting CVE-2011-0611 to drop malware.3 Even with this running through 2014, older exploits were still valuable.

__2) Malicious JAR and HTML via a watering hole attack__
Watering hole attacks were used to deliver Backdoor.Oldrea by Symantec. These attacks exploited CVE-2013-2465, CVE-2013-1347, and CVE-2012-1723 in Java 6, Java 7, IE 7, and IE 8 to drop the HAVEX malware. The exploits appeared to be modified Metasploit Java exploits built to deliver the HAVEX loader.

__3) Legitimate software loaders__
Energetic Bear compromised several legitimate ICS vendor websites. Binaries such as camera drivers and PLC management software were modified and made to deliver the HAVEX malware.

In order to complete the third attack type, the threat actor had to compromise several ICS vendors' websites. Sometimes called a Strategic Web Compromise (SWC) attack, these have become a favorite attack method from Russian- and Chinese-based threats. In this case, SWC attacks were used to compromise a site that would most likely be visited by customers or users of ICS systems. This made the watering hole or binary compromises much more useful against the targeted victim. Using these three attack types demonstrated an organized and arguably sophisticated threat actor. The team behind this planned and organized a scenario to be successful against its target audience.

Once malware was delivered, three major tasks were observed:

- System enumeration tools collected information, such as the OS version, machine name and username, and file and directory listings.
- A credential-harvesting tool extracted stored passwords from various web browsers.
- Secondary implants6 communicated with different C2 infrastructures using custom protocols and payloads executed in memory.

__References__

- [Dragonfly: Cyberespionage Attacks Against Energy Suppliers](http://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/Dragonfly_Threat_Against_Western_Energy_Suppliers.pdf), http://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/Dragonfly_Threat_Against_Western_Energy_Suppliers.pdf
- [Energetic Bear - Crouching Yeti](https://media.kasperskycontenthub.com/wp-content/uploads/sites/58/2018/03/09092926/EB-YetiJuly2014-Public.pdf), https://media.kasperskycontenthub.com/wp-content/uploads/sites/58/2018/03/09092926/EB-YetiJuly2014-Public.pdf
- [The Alley of Compromise](https://www.crowdstrike.com/blog/cve-2014-1761-alley-compromise, https://www.crowdstrike.com/blog/cve-2014-1761-alley-compromise)

### HAVEX HTTP Request Sample

__POST Request__

    POST /wp08/wp-includes/dtcla.php?id=285745296322896178920098FD80-20&v1=038&v2=170393861&q=5265882854508EFCF958F979E4 HTTP/1.1
    User-Agent: Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/525.19(KHTML, like Gecko) Chrome/1.0.154.36 Safari/525.19
    Host: toons.freesexycomics.com
    Content-Length: 0
    Cache-Control: no-cache

__POST Response__

    HTTP/1.1 200 OK
    Date: Wed, 22 Jan 2014 13:40:48 GMT
    Content-Type: text/html
    Transfer-Encoding: chunked
    Connection: keep-alive
    Server: Apache/1.3.37 (Unix)
    Cache-Control: no-cache

    9f65
    <html><head><mega http-equiv=’CACHE-CONTROL’ content=’NO-CACHE’></head><body>No data!<!--havexQlpoOTFBWSZTWWYvDI0BOsD/////////////////////////////////////////////4oB+93VVXu69DuN7XYzds9yt49Ques
    [...TRUNCATED ...]
    +yUW3zfTxWAOstsCwCckdW5 AH5Q6vbbCu7GputPt5CSfgPCAKXcAOOICMsqliACGYEhAQT3v9eD
    M92D/8XckU4UJBmLwyNA==havex--></body></head>

In this example from Symantec, several indicators can be identified.

The POST request shows several indicators that may be incorporated into an emulated threat:

- A target PHP file (dtcla.php)
- Interesting URL parameters (id, v1, v2, q)
- A potentially interesting User-Agent
- A target host

Like the request, the response has several indicators:

- A server header
- A potentially unique ID (9f65)
- Base64-encoded data stored between text (havex < base64 > havex)

Note: MALWAREMUSTDIE2 posted a great write-up on the HAVEX malware. This provides additional examples of C2 source code and HTTP request/response pairs.

References

1. [MALWAREMUSTDIE](http://pastebin.com/qCdMwtZ6), http://pastebin.com/qCdMwtZ6

### Threat Profile Template

| Category            | Description          |
| ------------------- | ---------------------|
| Description         |                      |
| Goal and Intent     |                      |
| Key IOCs            |                      |
| C2 Overview         |                      |
| TTPs (Enumeration, Delivery, Lateral Movement, Privilege Escalation, etc.) | |
| Exploitation        |                      |
| Persistence         |                      | 


-----------------------------------

__!! Stop Here !!__

Do not continue until ready for a possible solution.

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

## Possible Solution

### Threat Profile Example

| Category            | Description          |
| ------------------- | ---------------------|
| Description         | General mid-tiered threat that uses common offensive tools and techniques. |
| Goal and Intent     | Exist in the network to enumerate systems and information in order to maintain Command and Control to support future attacks. |
| Key IOCs            | PowerShell Empire HTTP agent on TCP 80, Location: Memory Resident and PowerShell Script stored in Registry, HTTP matching HAVEX |
| C2 Overview         | HTTPS on port 80 with a 5 second callback. Calling directly to threat-owned domains.|
| TTPs (Enumeration, Delivery, Lateral Movement, Privilege Escalation, etc.) | Initially delivered during exploitation.  POST exploitation delivery via PowerShell commands.  Enumeration and lateral movement via PS Empire and native Windows commands.  Privilege escalation limited and determined POST exploitation. |
| Exploitation        | Social Engineering via Phishing, watering hole, and supply chain via compromised web servers |
| Persistence         | Persistence via registry RUN key modification |

__HAVEX HTTP Indicators__

Parameters:
    
    v1=038&v2=170393861&q=5265…
    
Headers:
    
    <head><mega http-equiv='CACHE-CONTROL' content='NO CACHE'></head><body>No Data!<!--havexhavex--></body></head>

## Conclusion

In this exercise, you examined the Energetic Bear threat actor in order to design what a threat profile can be.

- You learned which IOCs are exposed when tools are kept to their default settings.
- You learned that the testing of tools before use is critical in understanding a tool’s IOC profile.
- You changed the default IOCs of common security tools.
- You learned that some tools are easier than others to modify.







