---
title: "What is Red Teaming?"
sidebar_position: 1
description: "Red teaming uses real-world TTPs to emulate threats and measure how effectively an organization's people, processes, and technology can detect and respond to adversary operations."
keywords: [red team, red teaming, TTPs, blue team, security testing, threat emulation]
---

import Head from '@docusaurus/Head';

<Head>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is red teaming in cybersecurity?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Red teaming is the process of using Tactics, Techniques, and Procedures (TTPs) to emulate a real-world threat with the goals of training and measuring the effectiveness of the people, processes, and technology used to defend an environment."
          }
        },
        {
          "@type": "Question",
          "name": "Why do organizations need red team engagements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Red team engagements measure the effectiveness of defenses against realistic threats, train blue teams to detect and respond to adversary operations, and test specific threat scenarios such as ransomware or advanced persistent threats."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between red teaming and penetration testing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vulnerability assessments identify technical flaws across a wide surface. Penetration tests exploit flaws to prove attack paths. Red team engagements are scenario-based exercises focused on training defenders and measuring how security operations as a whole — people, processes, and technology — can impact a threat's ability to operate."
          }
        }
      ]
    })}
  </script>
</Head>

:::tip
Red teaming is a goal oriented process driven by threat tactics. The focus is on __training__ or __measuring__ a blue team's ability to defend against this threat. Defense covers protection, detection, response, and recovery. [PDRR](http://threatexpress.com/blogs/2018/threat-gets-a-vote-applying-a-threat-based-approach-to-security-testing/#pdrr-protect-detect-respond-recover-coverage)
:::

# What is Red Teaming?

> Definition: __Red Teaming__ is the process of using Tactics, Techniques, and Procedures (TTPs) to emulate a real-world threat with the goals of training and measuring the effectiveness of the people, processes, and technology used to defend an environment.

Red teaming is __NOT__ a hunt for vulnerabilities, flaws, bugs, etc. The goal is to understand security operations as a whole (people, processes, and technology). The result of a red team engagement may identify vulnerabilities, but more importantly, red teaming provides an understanding of blue's capability to impact a threat's ability to operate.

Red teaming is recognized as a critical component of mature security programs. NIST SP 800-53 includes red team exercises under the CA-8 control family (Penetration Testing), and the [MITRE ATT&CK](https://attack.mitre.org/) framework — which catalogs 14 tactics and over 200 techniques observed in real-world adversary operations — provides a common language for describing the TTPs that red teams emulate. Organizations that adopt a threat-based approach to security testing move beyond simply cataloging vulnerabilities and instead focus on understanding how an adversary would actually operate against their environment.

### Key Principles

Red teaming is guided by several core principles that distinguish it from other forms of security testing:

- __Threat-based, not findings-based.__ Red team engagements are driven by how a real adversary operates, not by a checklist of vulnerabilities to find. The engagement is shaped by threat intelligence and realistic attack scenarios.
- __Goal-oriented.__ Every red team engagement is tied to specific objectives — such as gaining access to a critical system, exfiltrating sensitive data, or disrupting business operations. These goals are defined in the [Rules of Engagement](/docs/Templates/roe_template/) and directly map to organizational risk.
- __Realistic TTPs.__ Red teams use the same tactics, techniques, and procedures employed by real-world adversaries. Frameworks like MITRE ATT&CK provide a structured way to select and document TTPs that match the [threat profile](/docs/category/threat-profiles/) being emulated.
- __Blue team improvement is the primary outcome.__ The most important result of a red team engagement is not a list of findings — it is a measurable understanding of the blue team's ability to protect, detect, respond to, and recover from a realistic threat.

## Why Red Team?

- __Measure the effectiveness__ of the people, processes, and technology used to defend a network.
How do you know if blue TTPs are effective?
- __Train and/or measure Blue Teams__ ability to impact a threat
Blue teams need practice. Better to practice on a helpful threat that a real one
- __Test and understand__ specific threats or threat scenarios
Red team engagements can be designed to exercise custom scenarios. Scenarios can include zero-days, ransom-ware attacks, or other unique attacks.

## Threat Gets a Vote

Dig deeper in the need for the threat perspective here. [Threat Gets a Vote - Applying a Threat-Based Approach to Security Testing](https://threatexpress.com/blogs/2018/threat-gets-a-vote-applying-a-threat-based-approach-to-security-testing/)


![Diagram illustrating how the threat gets a vote in security testing decisions](/img/threat_gets_a_vote.png)

How often do security defenders ask the bad-guy how or what they will do? Many organization develop security defenses without fully understanding what is important to a threat. Red teaming provides defenders an understanding of how a threat operates in a safe controlled process.

> Better to learn and practice with a Red Team than a real buy guy... _anonymous blue teamer_

## Red Team Engagement Lifecycle

```mermaid
flowchart LR
    A[Planning] --> B[Reconnaissance]
    B --> C["Get In"]
    C --> D["Stay In"]
    D --> E[Act]
    E --> F[Reporting]
    F --> G[Lessons Learned]
```

## Red Teaming vs Penetration Testing vs Vulnerability Testing

Understanding where red teaming fits relative to other security testing types is critical. Each serves a distinct purpose in managing organizational risk:

| Aspect | Vulnerability Assessment | Penetration Test | Red Team Engagement |
|--------|------------------------|-----------------|-------------------|
| **Goal** | Identify technical flaws | Exploit flaws to prove attack paths | Train and measure blue team effectiveness |
| **Scope** | Wide, shallow | Targeted systems | Full organization |
| **Focus** | Technology | Technology | People, processes, and technology |
| **Duration** | Days | 1–2 weeks | 2–6 weeks |
| **Threat model** | CVE-based | Attack surface | Adversary emulation |
| **Risk measurement** | Attack surface reduction | Technical exploit impact | Organizational security operations |
| **Output** | Vulnerability list | Exploit evidence and attack paths | Security operations assessment |

Vulnerability assessments reduce the attack surface. Penetration tests prove that flaws are exploitable. Red team engagements measure whether an organization's security operations — as a whole — can detect, respond to, and recover from a realistic adversary.

For a deeper comparison, see **[Red Team Engagement vs Penetration Test vs Vulnerability Assessment](/docs/Concepts/red-vs-pen-vs-vuln/)**.

## Red Teaming by the Numbers

- The MITRE ATT&CK framework documents **14 tactics** and **over 200 techniques** used by real-world adversaries, providing the foundation for red team threat emulation ([MITRE ATT&CK](https://attack.mitre.org/)).
- According to the Verizon 2024 Data Breach Investigations Report, the median time for a user to fall for a phishing email is **less than 60 seconds** — a reminder that security testing must account for human factors, not just technology ([Verizon DBIR](https://www.verizon.com/business/resources/reports/dbir/)).
- The Mandiant M-Trends 2024 report found that **global median dwell time** — the time an attacker remains undetected — dropped to **10 days**, down from 16 days the prior year. Red team engagements directly test and improve an organization's ability to reduce dwell time ([Mandiant M-Trends](https://cloud.google.com/security/resources/m-trends/)).
- NIST SP 800-53 Rev. 5 includes **CA-8 (Penetration Testing)** as a control that encompasses red team exercises, recognizing adversary emulation as a key element of security assessment ([NIST SP 800-53](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final)).