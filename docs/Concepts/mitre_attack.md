---
title: "Red Teaming and MITRE ATT&CK"
date: 2020-01-21
sidebar-position: 4
description: >
  An overview of Red Teaming the role played by MITRE ATT&CK.
---

# MITRE ATT&CK

:::info
MITRE’s Adversarial Tactics, Techniques, and Common Knowledge (ATT&CK™) is a curated knowledge base and model for cyber adversary behavior, reflecting the various phases of an adversary’s lifecycle and the platforms they are known to target. ATT&CK is useful for understanding security risk against known adversary behavior, for planning security improvements, and verifying defenses work as expected.
:::

![](/img/mitre-1.png)

__ATT&CK is broken into Tactics, Techniques, and Procedures__

- __Tactics__ are the tactical goals a threat may use during an operation.
- __Techniques__ describe the actions threats take to achieve their objectives.
- __Procedures__ are the technical steps required to perform the action.

This frameworks provides a classification of all threat actions regardless of the underlying vulnerabilities. 

Red teams can emulate realistic TTPs through research and experience.  Much of this information has been complied in to ATT&CK. ATT&CK can be thought of a menu of TTPs. Red teams can use this to ensure they have a comprehensive set of threat TTPs, and blue teams can use this to build a scorecard of how well they are able to defend against various TTPs.

## References

| Description                                         | Link                              |
|-----------------------------------------------------|-----------------------------------|
| ATT&CK                    | https://attack.mitre.org/wiki/Main_Page |
| PRE-ATT&CK                | https://attack.mitre.org/pre-attack/index.php/Main_Page |
| ATT&CK Navigator          | https://www.mitre.org/capabilities/cybersecurity/overview/cybersecurity-blog/the-attck%E2%84%A2-navigator-a-new-open-source |
| ATT&CK Navigator Example  | https://mitre.github.io/attack-navigator/enterprise/ |