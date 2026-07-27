---
layout: case-study
title: "Zero-downtime core banking migration"
customer_label: "Leading MEA bank"
industry: "Banking"
tags:
  - Modernization
  - Platform Excellence
  - Data Engineering
technologies:
  - Apache Kafka
  - Apache Flink
  - Confluent
  - Debezium
  - Kafka Connect
  - Kubernetes
summary: "Zero-downtime core banking migration—CDC kept the target current, canary routing moved users in batches, roll-forward across 5M+ users in one week."
weight: 20
draft_status: approved
the_customer: |
  A leading Middle East & Africa bank moving from one core banking platform to another. Channels could not go dark.

  High-throughput, mission-critical load—no appetite for a big-bang weekend cutover.

challenge: |
  Migrate core platforms with zero downtime and no customer-facing disruption.

  Classic cutovers fail on dual-run inconsistency, silent drift, and all-or-nothing blast radius. The bank needed a roll-forward path with operable rollback for cohorts that misbehaved.

work: |
  Owned architecture and delivery. Continuous CDC copy (Debezium and Kafka Connect on a Kafka–Flink–Confluent path) kept the target current. Canary routing moved users in batches rather than a single flip.

  Roll-forward finished in one week across 5M+ users while the prior platform stayed live for cohorts not yet advanced.

impact:
  - "Zero-downtime platform-to-platform migration—no customer-facing outage window"
  - "CDC continuous copy with canary routing by user batch"
  - "Roll-forward completed in one week across 5M+ users"
---
