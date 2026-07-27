---
layout: case-study
title: "Routing & margin optimization"
customer_label: "Global clothing brand — D2C BU"
industry: "D2C / Logistics"
tags:
  - AI/ML
  - Product Engineering
  - Data Engineering
technologies:
  - Apache Kafka
  - Kafka Connect
  - Apache Flink
  - Flink ML
summary: "Fulfillment routing and margin optimization—carrier mix, node selection, promise date, last mile. When invoked: 34% 3PL/logistics cost savings while largely holding timeline SLAs."
weight: 170
draft_status: approved
the_customer: |
  A large D2C business unit of a global clothing brand. Every fulfillment choice is a margin choice—carrier mix, node selection, promise dates, and last mile.

challenge: |
  Optimization inherited stale joins of cost, capacity, service level, and inventory. Legacy ERPs and OMSes sat outside the streaming path. Weekly planning windows could not reflect the live network—or normalized 3PL pricing that actually moved margin.

work: |
  Owned product engineering across the fulfillment decision surface: carrier mix, node / FC selection, promise date, and last mile.

  Built supervised models and a fulfillment-domain pipeline on Kafka, Kafka Connect, Flink, and Flink ML—including real-time inventory visibility—with custom connectors into legacy ERPs and OMSes. Normalized 3PL pricing and cost as slowly changing dimensions so optimization saw a consistent cost basis.

impact:
  - "When invoked: 34% cost savings on 3PL / logistics, while largely maintaining timeline SLAs"
  - "Supervised models with real-time inventory visibility"
  - "Custom ERP / OMS connectors; SCD-normalized 3PL pricing and cost"
---
