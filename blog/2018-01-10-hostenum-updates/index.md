---
title: 'HostEnum: Updates and Usage Guide'
authors: [andrewchiles]
tags:
  - tools
slug: hostenum-updates
---

**HostEnum** (formerly Invoke-HostEnum) has received some much needed attention in recent weeks and a new version is now available on the [ThreatExpress Github](https://www.github.com/threatexpress/red-team-scripts) (formerly https://www.github.com/minisllc). I've renamed the tool to simply HostEnum since it's actually a large collection of enumeration functions which are now individually called by the Invoke-HostEnum wrapper function. It's designed to provide a quick means of generating a comprehensive system profile and I've found it extremely useful for both offensive and defensive perspectives. Recent improvements include a breakout of enumeration functions, a transition from string output to objects for improved formatting and reporting capabilities, new enumeration checks, and addition of privilege escalation checks from @harmj0y's [PowerUp](https://github.com/PowerShellMafia/PowerSploit/blob/master/Privesc/PowerUp.ps1).

<!-- truncate -->
## Recent Updates

- Changed function outputs to PS objects vs strings (mostly)
- Greatly improved HTML reporting
- Removed remaining Windows binary dependencies (primarily netstat.exe and net.exe)
- Added -Quick switch to perform a brief system survey
- Added -Privesc switch to perform PowerUp checks
- Added -All switch to perform Local, Domain, and Privesc checks
- Added firewall configuration enumeration
- Added well-known AV process detection
- Added retrieval of mapped network shares

## Function Breakout

Most enumeration functions are now individually callable after loading the script. This means if you're only interested in what AV processes are running, you can call the Get-AVInfo and Get-AVProcesses functions rather than running the entire script or modifying the code. The following is a subset of the functions and excludes ones specific to PowerUp (although they are also directly callable).

- Invoke-HostEnum
- Get-SysInfo
- Get-ProcessInfo
- Get-GroupMembership
- Get-ActiveTCPConnections
- Get-ActiveListeners
- Get-FirewallStatus
- Get-InterestingRegistryKeys
- Get-IndexedFiles
- Get-InterestingFiles
- Get-RecycleBin
- Get-AVInfo
- Get-McafeeLogs
- Get-AVProcesses
- Get-DomainAdmins
- Get-DomainAccountPolicy
- Get-BrowserInformation
- Get-ChromeHistory
- Get-ChromeBookmarks
- Get-InternetExplorerHistory
- Get-InternetExplorerBookmarks
- Get-FirefoxHistory
- Get-ActiveIEURLS
- Get-UserSPNS

## Usage

Execute locally hosted script in "Quick" mode with console output.

```
powershell -ep bypass -c Import-Module ./HostEnum.ps1; Invoke-HostEnum -Quick
```

Execute locally hosted script with HTML report output. If you want the most readable format and don't mind writing a file to disk, consider using the "-HTMLReport" option to create a report in the current directory.

```
powershell -ep bypass -c Import-Module ./HostEnum.ps1; Invoke-HostEnum -Local -HTMLReport
```

Execute all checks (equivalent to running -Local -Domain -Privesc) and save results as an HTML report.

```
powershell -ep bypass -c Import-Module ./HostEnum.ps1; Invoke-HostEnum -All -HTMLReport
```

Perform a quick "sysinfo" like check via the Get-SystemInfo function.

```
powershell -ep bypass -c Import-Module ./HostEnum.ps1; Get-SysInfo

HOSTNAME : WIN7X64
OS : Microsoft Windows 7 Enterprise Service Pack 1
ARCHITECTURE : 64-bit
DATE(UTC) : 20180110132636
DATE(LOCAL) : 20180110072636-06
INSTALLDATE : 20160121100103.000000-360
UPTIME : 0 Days, 0 Hours, 47 Minutes, 55 Seconds
IPADDRESSES : fe80::b59e:1735:dddf:d132%11, 192.168.15.10
DOMAIN : WORKGROUP
USERNAME : User
LOGONSERVER : \WIN7X64
PSVERSION : 2.0
PSSCRIPTBLOCKLOGGING : Enabled
PSTRANSCRIPTION : Disabled
PSTRANSCRIPTIONDIR :
```

I highly recommend utilizing the -HTMLReport switch whenever possible as this is the best way to view the resulting data. Alternatively you could execute any command and pipe to Out-String and Set-Content to redirect the console output if you just want text. You can still monitor execution status with the -Verbose switch.

```
powershell -ep bypass -c Import-Module ./HostEnum.ps1; Invoke-HostEnum -Verbose -All | Out-String | Set-Content $env:USERPROFILEresults.txt

VERBOSE: Performing quick enumeration...
VERBOSE: Enumerating running processes...
VERBOSE: Enumerating installed AV product...
VERBOSE: Enumerating potential AV processes...
VERBOSE: Enumerating active network connections...
VERBOSE: Enumerating current user local group membership...
```

---

## Wrap-Up

I'm always looking for ideas of new enumeration techniques and data to capture so please feel free to make comments and suggestions on the GitHub repo or contact me at @andrewchiles on Twitter. Try **HostEnum** on an upcoming engagement and let me know what other information would be useful to you regarding the environments you encounter.
