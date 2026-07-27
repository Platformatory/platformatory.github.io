---
layout: case-study
title: "Multi-region data hub at a 5-minute SLA"
customer_label: "Top-4 American bank"
industry: "Banking"
tags:
  - Data Platform
  - Data Engineering
  - Performance Engineering
technologies:
  - Apache Kafka
  - Kafka Connect
  - Oracle CDC
  - Apache Flink
  - Confluent
summary: "Global data hub remediation—incremental cross-region copy from Oracle (including Flexcube) held to a 5-minute SLA, with hub-and-spoke aggregation for residency and PII."
weight: 40
draft_status: approved
the_customer: |
  A top-4 American bank running a global data hub across regions and lines of business, under regulatory pressure on lag and uncontrolled copies of sensitive data.

  Sources sat heavily on Oracle, including a legacy Flexcube footprint. The hub was meant to publish change once so consumers could trust freshness without every region mirroring everything.

challenge: |
  Copy data across regions incrementally at a bounded five-minute latency from Oracle change streams.

  Oracle throughput, high cross-region RTT, and LogMiner limits made conventional low-latency replication hard. Kafka Connect and Oracle CDC were already in the path.

work: |
  Started with producer and consumer tuning. That bought headroom but did not fix the topology.

  Moved to a low-latency hub-to-spoke design: regional hubs aggregate, then forward. Aggregation at the hub improved residency and PII posture, cut redundant multi-region copy, and held the five-minute SLA as a designed envelope.

impact:
  - "5-minute incremental cross-region copy SLA—held under Oracle CDC / Connect constraints"
  - "Hub-and-spoke topology after producer/consumer tuning alone proved insufficient"
  - "Stronger residency and PII posture; redundant regional copies off the critical path"
---
