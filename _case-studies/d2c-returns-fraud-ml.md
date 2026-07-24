---
layout: case-study
title: "Real-time returns fraud detection"
customer_label: "Bay Area digital native"
industry: "D2C / Risk"
domains:
  - Fraud
  - Machine learning
technologies:
  - Apache Kafka
  - Apache Flink
  - Aerospike
  - Databricks
  - Apache Spark
summary: "Online returns-fraud detection—custom models, Aerospike feature store, low-latency serving, continuous learning."
weight: 130
draft_status: approved
the_customer: |
  A Bay Area digital-native retailer where returns are part of the brand promise—and fraudsters know it.

  Abuse at scale needed online decisioning with adversarial drift, not a rules spreadsheet.

challenge: |
  Batch scores went stale before returns finalized. Static rules got gamed.

  Risk needed models that learned continuously and still answered inside storefront latency budgets.

work: |
  Real-time fraud path for returns: Kafka / Flink for feature freshness, Aerospike as the online feature store, Databricks / Spark for training loops, low-latency online serving—so continuous learning was a platform capability, not a notebook demo.

impact:
  - "Online returns-fraud decisions with low-latency model serving"
  - "Continuous learning loop instead of static rule packs alone"
  - "Streaming feature paths risk teams could operate as product"
---
