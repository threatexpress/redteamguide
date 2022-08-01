---
id: roe-planning
title: "Rules of Engagement (ROE) Planning"
sidebar_position: 2
---

import Icon from "@material-ui/core/Icon";

:::note Rules of Engagement
The Rules of Engagement establish the responsibility, relationship, and guidelines between the Red Team, the network owner, the system owner, and any stakeholders required for engagement execution.
:::


This document governs the entire process of a Red Team and must be adhered to during the execution of an engagement. Deviation from the rules established in the ROE must be approved by all parties prior to execution.

The ROE document covers numerous topics. Some include:

* Authorized Actions
* Explicitly Restricted Actions
* Authorized Targets and Target Space
* Restricted Items (Blacklist)
* Engagement Objectives

## ROE Document

The ROE documents the target information, approvals, threat implementation, activities, and issues required to staff, coordinate, and execute engagements within the target environment. 

The main body of the ROE (often derived from a standing template) provides information on:

* The Red Team methodology
* A high-level description of the types of activities that may be executed
* The types of hardware and software that may be employed
* A recommended deconfliction process
* Levels of threat available (comparison)
* Roles and responsibilities of each functional group (Exercise Control Group (ECG), White Cell, Training Audience (TA), etc.)
* The identification of and references to appropriate legal requirements (PCI, FERPA, HIPAA, HITEC, SOX, GLBA, etc.)
* A legal responsibility disclaimer (federally mandated requirements for the Red Team to report certain findings)

Information specific to each individual engagement should be documented in annexes to the ROE. At a minimum, ROE annexes should detail:

* The Target of the Engagement
    * Organization name
    * Address
    * Specific groups or divisions
    * Organizational identifiers
    * Senior management contact info

* An Engagement Contact List (name, role, phone, email, office location)
    * ECG personnel
    * White Cell
    * Trusted Agents
    * Red Team Lead
    * Red Tech Lead

* Engagement Objectives
    * Conditions
    * Threat level
    * Targeted objectives
    * Targets of opportunity
    * Measures of success/failure

* Authorized Target Space
    * Network
        * The IP boundaries of the event
        * Domains and/or workgroups
        * Specific off-limits areas and resources (non-target intellectual property file share)
        * Off-limits machines, networks, equipment, or applications (blacklist)
        * Maintenance windows
    * Physical
        * Areas of the campus
        * Buildings
        * Offices
        * Off-limits areas (e.g., the emergency services sector of a medical complex)
        * Off-limits materials within the target space (e.g., sensitive documents or equipment)
* Authorized Actions: Types of activities approved for the engagement
* Restricted Actions: Types of activities restricted during the engagement (if any)
* The process for requesting approval of additional activities during engagement execution
    * Approval process
    * Points of contact (name, role, phone, email, office location)
    * Alternate POC

The ROE must be updated when the target space, authorized actions, objectives, or scope are changed. For instance, the original scope may be limited to computer network attacks. If physical attacks are planned, the ROE must be updated to reflect the additional activities and controls. The Red Team Lead will address suggestions or adjustments to the ROE. Each review result must be provided to the originator. The final ROE must be approved by a Trusted Agent in senior management of the target environment.


