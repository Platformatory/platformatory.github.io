---
layout: case-study
title: "Real-time inventory & supply signals"
customer_label: "Global QSR brand"
industry: "Retail / QSR"
domains:
  - Supply chain
  - Real-time data
technologies:
  - Apache Kafka
  - Apache Flink
  - Aerospike
  - Apache Spark
  - Kubernetes
summary: "Real-time inventory and supply-chain signals for stores and DCs—streaming ingest and Aerospike feature reads."
weight: 80
draft_status: approved
the_customer: |
  A global quick-service restaurant brand where inventory truth is local, fast, and unforgiving.

  Wrong counts at lunch rush are a guest-experience failure, not a reporting issue.

challenge: |
  Batch inventory pictures went stale in hours while QSR demand moved in minutes.

  Stores, DCs, and planning systems disagreed when volume spiked.

work: |
  Event-driven signal paths: Kafka / Flink from stores and logistics, Aerospike as the low-latency feature store at decision time, Spark where heavier reconciliation still mattered.

  Designed so operations could trust fresher signals during peak—not only in the morning report.

impact:
  - "Real-time inventory and supply signals for store and DC decisioning"
  - "Reduced dependence on overnight batch as the only source of truth"
  - "Pattern reusable across regions as digital operations scaled"
---
