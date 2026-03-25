---
id: red-team-checklist
title: "Red Team Checklist"
description: "Comprehensive checklist for planning and executing red team engagements, from scoping to reporting"
sidebar_position: 1
keywords: [red team checklist, engagement planning, red team operations, security assessment checklist]
---


:::note About the checklist
This set of checklists is intended to be a start to help plan and build a red team. Each design may have additional requirements. Use this as a starting point and modify as you see fit.
:::

## Red Team Development Checklist

- [ ] Determine required knowledge and skills
    - [ ] Identify and implement alternate methods for bridging knowledge gaps
- [ ] Develop roles and responsibilities guide
- [ ] Develop red team methodology
- [ ] Develop [TTP guidance](/docs/Planning/red-team-tradecraft/) for engagements
    - [ ] Includes Bag of tricks
- [ ] Develop data collection guide and tools
- [ ] Develop operational process plan
- [ ] Develop communication plan template
- [ ] Develop [ROE template](/docs/Templates/roe_template/)
- [ ] Develop technical briefing template
- [ ] Develop [report template](/docs/Templates/report_template/)

## Planning - Red Team Engagement Checklist

### Engagement Planning

- [ ] [Rules of Engagement (ROE)](/docs/checklists/roe-planning/)
    - [ ] Event communication plan
    - [ ] Distribute deconfliction process
    - [ ] Entry point/method
    - [ ] Scope
    - [ ] [Goals/Objectives](/docs/Planning/goal-planning/) (should address at least one)
        - [ ] Protect
        - [ ] Detect
        - [ ] Respond
        - [ ] Restore
    - [ ] Target restrictions
    - [ ] Target infrastructure / asset verification / approvals
- [ ] Scenario development
- [ ] Operational impact planning

### Threat Profiles

- [ ] Network and host activity
- [ ] IOC generation (incl. subsequent analysis) and management

### Threat Infrastructure

Plan the following components for each infrastructure tier:

| Component   | Tier 1 | Tier 2 | Tier 3 |
|-------------|:------:|:------:|:------:|
| IPs         | ☐      | ☐      | ☐      |
| Systems     | ☐      | ☐      | ☐      |
| Redirectors | ☐      | ☐      | ☐      |
| PPS         | ☐      | ☐      | ☐      |

- [ ] Deploy tools to infrastructure

### Data Collection

- [ ] Data collection repository

## Execution - Red Team Engagement Checklist

- [ ] Daily completion and roll-up confirmation
    - [ ] Capture logs
    - [ ] Capture screenshots
    - [ ] Capture system changes
- [ ] Daily (or twice daily) mandatory internal RT SITREP
- [ ] Update real-time attack diagram

## Culmination - Red Team Engagement Checklist

### Engagement Closeout

- [ ] Roll up data
- [ ] Roll back system changes
- [ ] Validate data has been collected
- [ ] Outline critical attack diagram
- [ ] Technical review (tech-on-tech)
- [ ] Executive brief

### Reporting

- [ ] Draft attack narrative
- [ ] Draft observation and findings
- [ ] Finalize attack diagram
- [ ] Finalize report
