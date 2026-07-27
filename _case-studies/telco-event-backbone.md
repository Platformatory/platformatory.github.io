---
layout: case-study
title: "Org-wide event backbone"
customer_label: "Leading South Asian telco"
industry: "Telecommunications"
tags:
  - Data Platform
  - Data Engineering
  - Modernization
technologies:
  - Apache Kafka
  - Kafka Connect
  - Debezium
  - Oracle CDC
summary: "Kafka adopted as the org-wide event backbone—billing with transactional guarantees, bi-directional active-active MySQL↔Oracle, mobile clickstream. Write scale to ~150 MB/s CDC and GB/s on network and clickstream; streaming MVs for billing reversal / reconciliation reporting."
weight: 90
draft_status: approved
the_customer: |
  A leading South Asian telco putting Apache Kafka at the center of the organization—billing, operational data movement, and digital experience on one backbone.

challenge: |
  Point-to-point integrations and database-centric corridors could not carry org-wide event traffic with consistent contracts: billing under load, cross-engine replication without dual-write chaos, and product clickstream at subscriber scale.

  The backbone had to land as a shared platform—not a one-off bus for a single program—and hold very large write throughput without freezing delivery.

work: |
  Drove Kafka adoption as the central event backbone, with Kafka Connect, Debezium, and Oracle CDC so producers and consumers could share contracts without freezing delivery.

  Use cases on the backbone:
  - Billing—usage, charging, refunds, and user notifications—with transactional guarantees at high throughput
  - Bi-directional active-active pipelines between MySQL and Oracle
  - Clickstream from the mobile app

  Built streaming materialised-view aggregates for real-time reporting on billing reversals and reconciliation.

impact:
  - "Org-wide Kafka backbone at write scale: ~150 MB/s CDC; GB/s on network and clickstream"
  - "Billing path (usage, charging, refunds, notifications) with transactional guarantees under that load"
  - "Streaming MV aggregates for real-time billing reversal / reconciliation reporting"
  - "Active-active MySQL↔Oracle pipelines on Connect / Debezium / Oracle CDC"
---
