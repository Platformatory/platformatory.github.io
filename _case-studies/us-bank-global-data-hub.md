---
layout: case-study
title: "Multi-region data hub at a 5-minute SLA"
customer_label: "Top-4 American bank"
industry: "Banking"
domains:
  - Global data hub
  - Regulatory
  - Oracle CDC
technologies:
  - Apache Kafka
  - Kafka Connect
  - Oracle CDC
  - Apache Flink
  - Confluent
summary: "Global data hub remediation—incremental cross-region copy from Oracle (including a Flexcube footprint) at a bounded 5-minute latency, hub-and-spoke aggregation for residency and PII."
weight: 40
draft_status: approved
the_customer: |
  A top-4 American bank operating a global data hub across regions and lines of business under regulatory constraints on lag and uncontrolled copies of sensitive data.

  Source systems sat heavily on Oracle, including a legacy footprint of Oracle Flexcube. The hub was meant to publish change once so consumers could trust freshness without every region mirroring everything.

challenge: |
  Copy data across regions incrementally at a bounded latency of five minutes from Oracle-produced change streams.

  Oracle throughput, high network round-trip time across regions, and LogMiner limitations made conventional low-latency replication difficult. Kafka Connect and Oracle CDC were already in the path.

work: |
  Started with producer and consumer tuning. That bought headroom but did not rewrite the topology problem.

  Moved to a low-latency hub-to-spoke architecture: regional hubs aggregate, then forward. Aggregation at the hub improved data residency and PII posture, eliminated redundant multi-region copy, and held the 5-minute SLA as a designed envelope.

impact:
  - "Bounded 5-minute incremental cross-region copy SLA—held under Oracle CDC / Connect constraints"
  - "Hub-and-spoke topology: regional hubs aggregate, then forward—after producer/consumer tuning alone proved insufficient"
  - "Stronger residency and PII posture via hub aggregation; redundant regional copies removed from the critical path"
---
