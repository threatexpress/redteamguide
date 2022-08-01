---
id: autobank
title: Threat Profile - AUTOBANK
description: >
  AUTOBANK threat profile example
---

# Threat Profile (AUTOBANK)

:::tip
A modified version of this profile was used on an assumed breach engagement. This profile is provide as an example to show details that supported a real engagement. 
:::

## Description

C2 threat inspired by the Carbanak APT malware.  It uses DNS and HTTP for C2 communications.

>Reference: http://krebsonsecurity.com/wp-content/uploads/2015/02/Carbanak_APT_eng.pdf

## Characteristics

 - C2 Backend: CobaltStrike 3
 - Port(s): 53, 445, 80 (DNS, SMB, HTTP)
 - C2 communication using DNS, HTTPS and SMB Traffic
 - IP communication using DNS hostnames

Cobalt Strike HTTP Request Profile:

 - UserAgent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/6.0)"
 - GET: /favicon
 - POST /token

## System Modifications

### Files

HTTPS PAYLOAD: 

 - Hijacked DLL: `c:\windows\system32\wlbsctrl.dll `
 - HTTPS Beacon: `c:\windows\system32\services.dll `
 - SMB   Beacon: `c:\windows\system32\services.dll `

*NOTE: using the same dll name for each beacon type.

Binary modified using a resource hacker to look similar to other Windows files

   - File Description: Services
   - File Version: 6.1.7601.17514
   - Product Name: Internet Explorer
   - Product Version: 6.1.7601.17514
   - Copyright: (c) Microsoft Corporation. All rights reserved
   - Date Modified: 7/13/2009 08:41:22 PM

## Registry
 
 - None

## Window Service

 - None

## WMI

 - None

-----------------------------------------------------

## Deployment Steps

1. Create CobaltStrike C2 Profile
2. Build payloads using profile
3. build 32 bit DLL files - named services.dll
4. Use a Resource Hacker utility to modify binaries to match File Attributes
5. Deploy dlls to target system
6. Verify time matches surrounding files (TimeStomp if needed)

## Persistence Steps (via CobaltStrike Beacon Console)

```
cd c:\windows\temp
upload /data/5-PAYLOADS/wlbsctrl.dll
upload /data/5-PAYLOADS/services1.dll (DNS Beacon)
upload /data/5-PAYLOADS/services2.dll (SMB Beacon)

shell mv services(1/2).dll services.dll

powershell-import /data/PAYLOADS/Set-FileTimeStamps.ps1
powershell Set-FileTimeStamps c:\windows\temp\wlbsctrl.dll "7/13/2009 08:41:22 PM"
powershell Set-FileTimeStamps c:\windows\temp\services.dll "7/13/2009 08:41:22 PM"

shell move c:\windows\temp\wlbsctrl.dll c:\windows\system32
shell move c:\windows\temp\services.dll c:\windows\system32

```