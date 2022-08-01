---
id: definitions
title: Definitions
description: Red Teaming Lexicon of Definitions
sidebar_position: 1
---

import Icon from "@material-ui/core/Icon";

:::tip Info
This lexicon is a starting point to help define terms commonly used in red teaming. Clearly defined terms are critical for communications and essential for security professionals.

:::
---

## Allow-list

An allow-list is a list of things considered trustworthy or good. An allow-list is used to grant access to defined resources. This list is often associated with controlling traffic through firewall rules or controlling allowed applications by creating a list of authorized software. Creating a list of good is typically considered better practice over deny-listing. Allow-listing enforces the deny all by default approach to security.

## Assumed Breach

The Assumed Breach Model assumes a threat has some level of access to a target at the initiation of the engagement.

This model is arguably the most beneficial of all the models. The threat is assumed to have some level of access to a target before beginning. This starts a scenario much further into the attack timeline. Assuming someone can breach a network is often argued by less mature organizations. Those who say "prove it" will often not like this scenario. Less mature organizations assume that threats must prove they can get in before beginning. When is the proof important? It is important only if measuring the ability a threat has to "get in" is important. If this is not a key goal, using the Assumed Breach Model will save time and money. It will free the Red Team to explore higher impact goals.

## Blue Cell

The blue cell is the opposite side of red. Is it all the components defending a target network. The blue cell is typically comprised of blue team members, defenders, internal staff, and an organization’s management.

## Blue Team

A security team that defends against threats.

## Command and Control (C2)

Command and Control (C2) is the influence an attacker has over a compromised computer system that they control.

## Command and Control Tiers

Designing a robust C2 infrastructure involves creating multiple layers of Command and Control. These can be described as tiers. Each tier offers a level of capability and covertness. The idea of using multiple tiers is the same as not putting all your eggs in one basket. If C2 is detected and blocked, having a backup will allow operations to continue.

C2 tiers generally fall into three categories: Interactive, Short Haul, and Long Haul. These are sometimes labeled as Tier 1, 2, or 3. There is nothing unique to each tier other than how they are to be used.

**Interactive**

- Used for general commands, enumeration, scanning, data exfiltration, etc.
- This tier has the most interaction and is at the greatest risk of exposure.
- Plan to lose access from communication failure, agent failure, or Blue Team actions.
- Run enough interactive sessions to maintain access. Although interactive, this doesn’t mean blasting the client with packets. Use good judgment to minimize interaction just enough to perform an action.

**Short haul**

- Used as a backup to reestablish interactive sessions.
- Use covert communications that blend in with the target.
- Slow callback times. Callback times in the 1–24 hr. range are common.

**Long haul**

- The same as Short Haul but even lower and slower.
- Slow callback times. Callback times of 24+ hours are common.

## Control Cell

a.k.a White Cell

Serves as referee between Red Team activities and defender responses during an engagement. Controls the engagement environment/network. Monitors adherence to the ROE. Coordinates activities required to achieve engagement goals. Correlates Red Team activities with defensive actions. Ensures the engagement is conducted without bias to either side.

## Deconfliction

Deconfliction is a process that provides a way to separate Red Team activity from real-world activity.

## Deny-list

A deny-list is a list of things considered untrustworthy or bad. A deny list is used to restrict access to defined resources. This list is often associated with controlling traffic through firewall rules or restricting access to prohibited software by creating a list of prohibited software. Creating a known bad list is typically more difficult than creating a known good list and denying everything else.

## Engagement / Exercise Control Group (ECG)

The Engagement (or Exercise) Control Group is ultimately responsible for all activities conducted during the engagement. The Engagement Control Group is composed of one or two senior managers from the target environment (for example, a Chief Information Officer or Chief Operating Officer), one member from the Information Technology department of the environment, a White Cell, and a Red Team liaison. More may be added as required. All are considered to be Trusted Agents.

## Exfiltration

Exfiltration is the extraction of information from a target. This is typically through a covert channel.

## Get In, Stay In, Act

The three main phases of a Red Team engagement.

**Get In**

Gain access to a network. The Red Team must have access to their target. Access can be through a legitimate compromise or access is directly granted as part of an assumed breach scenario, such as an insider threat scenario

**Stay In** 

Establish persistence or a permanent presence. Red Team engagements are typically longer than other types of tests. A Red Team usually establishes persistence or a permanent presence to survive the duration of the engagement.

**Act**

Phase where a Red Team performs operational impacts against a target.

## IOC (Indicator of Compromise)

Indicators of Compromise (IOCs) are artifacts that identify or describe threat actions.

## OPFOR

An Opposing Force, or enemy force, that is typically used by the military in war-gaming scenarios. Red Teams are commonly associated with or support an OPFOR in war-gaming scenarios.

## OPLOG (Operator Log)

Operator logs are the records generated by Red Team operators during an engagement. These logs have specific and required fields that must be captured.

## Operational Impact

An operational impact is the effect of a goal-driven action within a target environment.

## OPSEC

OPSEC or Operational Security is a process that identifies critical information to determine if friendly actions can be observed by enemy intelligence, determines if information obtained by adversaries could be interpreted to be useful to them, and then executes selected measures that eliminate or reduce adversary exploitation of friendly critical information.  In terms of Red Teaming, it is understanding what actions Blue can observe and minimizes exposure.

## out brief, Executive

The first post-engagement meeting is usually the executive out brief. An executive brief is typically performed soon after execution completes (within one or two days following execution). This meeting is tailored toward management and should include key personnel from the target organization. The outcome of a Red Team engagement may impact how an organization operates in the future, potentially requiring funding to pursue mitigations or staffing modifications. Management awareness and buy-in are critical if Red Team results will be used to improve an organization's security stance to defend and respond to a threat.

## out brief, Technical

The technical out brief (aka a tech-on-tech) is a bi-directional technical exchange of information between the Red Team, the Blue Team, and the organization. During this exchange, both the Red and the defensive elements provide a highly detailed, step-by-step technical review of the actions and results (including all associated details) of the engagement. This is where training and education meet and is one of the most valuable opportunities for all parties to learn.

## Penetration Testing

A test methodology intended to circumvent the security function of a system. Note: Penetration testing may leverage system documentation (e.g., system design, source code, manuals) and is conducted within specific constraints. Some penetration test methods use brute force techniques. [source](https://csrc.nist.gov/glossary/term/penetration-testing)

In terms of business risk, a penetration test should be considered an attack surface reduction effort as mitigation of the findings will ultimately lead to a reduction in the attack surface. Penetration tests do not typically focus on understanding how security operations as a whole can deal with a threat. See Red Teaming

## Persistence

Persistence is the ability or techniques used to establish a permanent presence to survive the duration of the engagement.

## Prepositioning

Prepositioning is the process of using the access and capabilities gained during an engagement to best position an operator to execute an impact. 

## Red Cell

The term red cell is borrowed from the military. It is commonly associated with a group that plays OPFOR (opposing force) during red vs. blue exercises. A red cell is the components that make up the offensive portion of a red team engagement that simulates the strategic and tactical responses of a given target. The red cell is typically comprised of red team leads and operators and is commonly referred to as Red Team instead of Red Cell.

## Red Team

A Red Team is an independent group that, from the perspective of a threat or adversary, explores alternative plans and operations to challenge an organizatioøn to improve its effectiveness.

## Red Teaming

Red teaming is the process of using Tactics, Techniques, and Procedures (TTPs) to emulate real-world threats with the goal of training and measuring the effectiveness of the people, processes, and technology used to defend an environment.

In terms of business risk, a red team engagement focuses on understanding how well security operations deal with a threat through training or measurement. Technical findings are often revealed during an engagement but are not the focus. Red teaming engagements are designed to challenge security operation’s defensive strategies and assumptions and to identify gaps or flaws in the defensive strategies. Improving security operations through training or measurement is the goal of a red teaming engagement.

## Red Team Lead

Serves as the operational and administrative lead for the Red Team. Conducts engagement, budget, and resource management for the Red
Team, Provides oversight and guidance for engagements, capabilities, and technologies. Ensures adherence to all laws, regulations, policies, and Rules of Engagement.

## Red Team Operator

Complies with all Red Team requirements under the direction of the Red Team Lead. Operational executor of the engagement. Applies Red Team TTPs to the engagement. Provides technical research and capability to the Red Team. Keeps detailed logs during each phase of the engagement. Provides log and information support for the creation of the final report

## Rules of Engagement (ROE)

The Rules of Engagement establish the responsibilities, relationships, and guidelines among the Red Team, the customer, the system owner, and any stakeholders required for engagement execution.

## Situational Awareness

Situational awareness is a step in a Red Team engagement used to gather as much information as needed on the targets and target environment. The information gathered is used to determine the next actions towards privilege escalation, lateral movement, or other steps. It is a crucial component to Red Teaming and should be performed to some level on all access targets.

## Threat

A threat is an expression of intention to inflict evil, injury, or damage.

## Threat Emulation

Threat Emulation is the process of mimicking the TTPs of a specific threat.

## Threat Intelligence

Threat intelligence is information that has been aggregated, transformed, analyzed, interpreted, or enriched to provide the context for decision-making processes regarding threats.

## Threat Model

A threat model is a process by which potential threats or the absence of appropriate safeguards can be identified, enumerated, and mitigations can be prioritized.

## Threat Perspective

a Threat's Perspective is the threat's initial point of view. This perspective is used to build and shape a threat profile or scenario. A threat's perspective may be that of an outsider, nearsider, or insider.

## Threat Profile

A threat profile is used to establish the rules as to how a Red Team will act and operate. These rules serve as a roadmap for a Red Team by guiding how and what type of actions should be performed. Threat profiles are a key part of developing and designing C2 early in Red Team planning. 

## Threat Scenario

Scenarios provide insight into how a defensive solution will perform and conform to the processes, procedures, policies, activities, personnel, organizations, environment, threats, constraints, assumptions, and support involved in the security mission. Scenarios generally describe the role of the threat, how it will interact with the systems and networks within the target environment, and elicits real-world truth of how essential internal practices are employed. In short, it answers how the target's security operations would dynamically perform an action to deliver results, outputs, or prove capability.

## Tradecraft

Tradecraft is the techniques and procedures of espionage. Tradecraft is typically associated with the intelligence community. TTPs and Tradecraft are used interchangeably in this course.

## Trusted Agent (TA)

The Trusted Agent’s primary role is to limit irreversible damage and risk to life, limb, eyesight, and equipment; however, they are more often used to prevent the defenders from causing unexpected self-inflicted damage.
A Trusted Agent (TA) has privileged and detailed knowledge of engagement activities, milestones, conditions, and the engagement status that would unduly bias or influence the actions of the environment staff and defenders. A Trusted Agent must protect all information from being provided to any party without the express approval of the Engagement Control Group.

## TTPs

TTPs are Tactics, Techniques and Procedures (sometimes called Tools, Techniques, and Procedures).

## Two Person Integrity (TPI)

Two-person integrity is used to verify activities performed during the engagement and should be maintained at all times. A team member should review, understand, and provide a “sanity check” for each action/command performed. TPI reduces personal and engagement risks.

## Vulnerability Assessment

Systematic examination of an information system or product to determine the adequacy of security measures, identify security deficiencies, provide data from which to predict the effectiveness of proposed security measures, and confirm the adequacy of such measures after implementation. [source](https://csrc.nist.gov/glossary/term/vulnerability-assessment)

In terms of business risk, a vulnerability assessment should be considered an attack surface reduction effort as mitigation of the findings will ultimately lead to a reduction in the attack surface.

## Web Shell

A web shell is a piece of web code that is placed on a web server to allow an adversary to use the Web server as a gateway into a network. Web shells are commonly deployed as part of an application security attack.

