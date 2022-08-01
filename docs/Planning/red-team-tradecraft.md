---
title: "Red Team Tradecraft and TTP Guidance"
description: >
  Red Team Tradecraft and TTP Guidance
---

:::info
This template should be used to define the overall guidance on Red Team Tradecraft and TTPs. Every Red Team should have a guidance document. Keep this document updated and distributed to all Red Team members. This document should be used to guide Red Team actions of all Red Team operators on all engagements. Exceptions to these rules can (and will) be made based on specific Rules of Engagement (ROE) or decision made by Red Team leads during an engagement. Exceptions should be documented as part of the engagement logging. It is important to use and follow this document to maintain a high-quality professional Red Team.

Add custom or specific Tradecraft and TTP Guidance to this document as needed. This include specific or customs tools that should be used for various tasks, C2, enumeration, etc
:::

## Guidance

| Do                                   | Don't         |
|--------------------------------------|-----------------|
| Log all significant events           | Use untested tools on a target system             | 
| Consult with peers                   | Use unencrypted channels for C2                   |
| Understand tools and technology used | Attempt to exploit or attack unencrypted websites |
| Perform situational awareness        | Execute from non-executable locations             |
| Minimize callback (C2) volume        | Download restricted datasets                      |
|                                      | Use binaries for initial access                   |

---
## DO

### LOG ALL SIGNIFICANT ACTIONS (SUCCESSES AND FAILURES)

Log, log and log some more! Screenshot all significant actions including successful and failed attempts. One of the most important aspects of the Red Team engagement is the collection of data (a.k.a. logs). It is common that an inexperienced team completes an engagement with subpar documentation. Many actions are not fully captured, some actions are never captured, and often key failures are ignored. Each action performed provides value to the target as well as the target defenders. Incomplete logs prevent the Red Team from providing a complete and accurate depiction of the actions, obstacles, and defensive strengths and weaknesses of the target (i.e. mission failure).
There are several methods to ensure logs are appropriately captured and stored:
- Automated logging of the terminal: All terminal actions logged, timestamped and stored to a predefined location.
- Tool logs: Most commercial tools have some capability to log actions and produce a raw and/or final report.
- Custom tools logs: If you write a custom tool/script, it should output a log of actions and results.
- Operator logs: By far this is the most important log. A log may show the action performed and the result; however, only the operator can accurately note the way the action was performed, what lead them to the decision, and their interpretation of the result.
- Screenshots: Terminal logs are great for the operator and even better as supporting artifacts; however, they may mean nothing to senior level executives (and even some IT professionals). Screenshots before, during, and following the execution of an action hold much more weight than a terminal log, tool log, or operator log (often if may just be a screenshot of the terminal during execution).

### CONSULT WITH PEERS

No matter how long you have been performing IT or security, consult your peers before taking action. This is especially true during exploitation and command and control setup.
Simple mistakes often lead to Red Team discovery too early in the engagement.
Look at the command below. The command will be run as part of a tool written to provide general SA on a Linux system. What should the output look like?

    netstat –antb

The command above is a netstat command that can be executed on a Windows host. Linux does not have the "b" option and produces an "invalid option" response.
Think about it

- Have you ever typed ifconfig instead of ipconfig? 
- Have you ever typed rm * in the wrong directory?
- Have you ever entered credentials only to discover they were "fat fingered" (after access error)?
While these are oversimplifications, they represent the need for peer review on tools, C2, setup, execution, and even clean up.

### UNDERSTAND THE TOOLS AND TECHNOLOGIES USED

Understand the underlying technology of a tool or technique before using it on an event.
Know how the tool or technique interacts with a target, what network traffic it may generate, and what traces it may leave behind.
Knowing what a tool does is only one-third of the equation. What does that mean exactly? Let’s quickly look at a few questions and an example.

- What artifacts does the tool leave behind? - Are any files modified during execution?
- Are there tales in the network traffic?

Now let’s look at psexec (a commonly used tool, but not a recommended tool for Red Teaming a remote system)
Depending on how psexec is executed it:

- Copies a service file to the remote system
- Enters a service key into the registry
- Creates a prefetch file
- Creates an entry in the Application Compatibility Cache - Creates a login event
- Creates a profile folder for the remote user
- Attempts to remove service file and key when exiting (not always successful)

What happens when using the –e option? –s option? How does this differ from psexec for PowerShell?
Psexec is not a bad tool, and Red Team operators will use it. But... it is important to understand the IOCs generated by a tool. Getting caught due to a lack of tool understanding is not something any Red Team operators wants to experience.

### PERFORM SITUATIONAL AWARENESS

After gaining access to a remote system perform situational awareness before moving on.

- Understand the environment you are in (Is the target in scope?)
- What protections exist on the system or network?
- What are the risks of being caught and what attack paths does the system provide? - Are there pre-established connections to other network resources?
- Who is into the system?
- Who has recently logged into the system?

### MINIMIZE CALLBACK (C2) VOLUME

Unless a Host Based protection mechanism is triggered, it is more likely to be discovered or
caught by a defenders recognition and/or analysis of traffic on the network. To avoid early detection, it is always good tradecraft to limit the amount of traffic generated during the engagement.
There are several general concepts that, if followed, increase the success of the engagement while decreasing the chances of being discovered:

- Keep traffic internal to a network: One of the most common issues, and one you should always attempt to change, are the limited number of sensors inside a network. Most network protections are currently applied at the boundary.
- Pivot command and control traffic to a minimal number of outbound sources: Maintain at least two outbound sources for C2 redundancy; however, only use one for operations (considered an interactive tier). The second (a long or short haul tier) is dormant or extremely slow to be used as a backup if/when the primary is discovered.

---
## DON’T

### USE UNTESTED TOOLS ON A TARGET SYSTEM

Before using a new tool (script, application, binary, process, etc.) on a target system, it must be tested, undergo an internal vetting process and be added to an official toolset.
Does the tool have negative impacts on specific versions of an OS?

- Works fine on Windows 7 but causes system error in Windows 8?
- Do you know if/what additional actions the tool performs?
- Tool creates a covert channel for use inside the network.
- This tool creates a private tunnel between host on a virtual interface; however, this
creates a network conflict
- Ex: target net: 10.10.2.0/24, covert channel net: 10.10.2.0/24 - Hint: Don’t use these!
Does the tool try to call home for updates?
- At start or during a specific operation, the tool tries to poll home for updates
- This can trigger defensive alerts identifying unauthorized persons or software on the network

Does the tool attempt to run as a specific user or, worse, create a user/group? Keep these questions in mind before executing untested or unknown tools.

### USE UNENCRYPTED CHANNELS FOR C2

Command and control data exiting the network must be encrypted. Clear text data, such as
uploading a binary, issuing an operating system command or using a web shell will be detected by an IDS or other network defense if in clear text. It has become common for IPS/IDS to detect specific strings discovered in clear text traffic.
For example: "C:\Windows\System32" has become a common trigger for investigation.
Some defenders have even gone the extra mile in legitimizing a potential threat. Assume the defender uses a remote administration tool on a regular basis. Ignoring recommendation, this traffic is unencrypted. Rather than alert each time the tool is used legitimately, the alert is configured to look for inconsistencies in the text. For example: most attackers are accustomed to typing lowercase commands in windows. The defender ignores "C:\Windows\System32" but alerts on "c:\windows\system32"
Encryption of internal C2 traffic depends upon several different factors:

- Are there sensors inside the network?
- Are there other encrypted communications occurring between target systems?
- Would encrypted traffic stand-out more than unencrypted traffic?
Internal encryption is another example of where peers should be consulted to determine the best course of action before deploying C2 further into a network.

### ATTEMPT TO EXPLOIT OR ATTACK UNENCRYPTED WEBSITES

As tempting as it may be, do not attack unencrypted websites. Simple attacks can trigger IDS. Always know your target IP space. There are likely several websites available for review. Proper reconnaissance and/or coordination should have discovered each. Create a list of sites in your target log. Include IP, URLs, an educated guess at the function, ports, protocols, etc.

 Important Note!
Prior to performing any exploitation and attacks against a web server, refer to your rules of engagement and fully understand:

- Who actually owns the website?
- Who owns the system where the website is hosted? Who owns the backend application?
- Have proper approvals been obtained to test?

### EXECUTE FROM NON-EXECUTABLE LOCATIONS

Execution on a Windows environment must occur in a location typical of windows. Executable locations such as c:\programdata, c:\progam files, c:\windows\ are common. Execution for locations such as c:\windows\temp should never occur.

### USE BINARIES FOR INITIAL CAPABILITIES

As a general rule, do not drop binaries on the system. Use built-in commands, such as PowerShell, to achieve your goals first. This is not always possible and binaries may be required; however, binaries must be vetted, obfuscated and tested against detection before use.
Ensure all other "Do’s and Don’ts" are met for all binaries. Consult a senior operator before dropping any binary.

### DOWNLOAD RESTRICTED DATASETS

NEVER download (or remove from the target network) any PII, HIPPA, PCI, or other restricted
datasets. A good rule of thumb is to annotate the type of data, location, access method, and level of access of restricted data in the log. Ensure the log notes include a reference to the type of data discovered for quick reference. Take a screenshot of the displayed filename and location (assuming the file name has no restricted data included). If the operator can screenshot a portion of the dataset without capturing the restricted data, they may do so for proof-of-access; however, DO NOT take screenshots of the data itself!

