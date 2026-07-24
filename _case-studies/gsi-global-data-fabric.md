---
layout: case-study
title: "Global data fabric across operational & business lakes"
customer_label: "Leading global systems integrator"
industry: "Systems integration"
domains:
  - Data platform
  - Analytics
technologies:
  - Apache Kafka
  - Apache Flink
  - Confluent
  - Databricks
  - Apache Spark
  - Apache Hudi
  - ClickHouse
summary: "Global data fabric across Operational and Business lakes—write-once / read-many fanout (~100× less redundant copy), incremental pipelines at ~5 min p95, retirement of a home-grown batch estate operated by a 20-person team."
weight: 10
draft_status: approved
the_customer: |
  A leading global systems integrator with two primary lake surfaces—an Operational Data lake and a Business Data lake—feeding BI applications, downstream data consumers, ML applications, and more.

  Sources spanned enterprise SaaS and the long tail of IT: Workday, Salesforce, Zendesk, ServiceNow, plus homegrown systems emitting change through queues, CDC, and related corridors.

challenge: |
  Federate the Operational and Business lakes without paying a full-refresh tax for every consumer.

  Prior pipelines were full-refresh on a batch schedule: roughly once every four hours on average, with the most frequent and costly jobs around 30 minutes. That cadence forced redundant copies and high fan-out waste. A legacy home-grown batch processor and scheduler absorbed a 20-member operating team.

work: |
  Built the fabric end to end. Kafka / Flink / Confluent carried incremental change from SaaS and homegrown sources; Databricks / Spark / Hudi shaped lakehouse processing; ClickHouse served interactive analytics where sub-second reads mattered.

  Architecture centered on high fanout—write once, read many—so reduction in redundant copy was a property of the platform, not a one-off pipeline rewrite.

impact:
  - "~100× less redundant data copy via write-once / read-many fanout across Operational and Business lakes"
  - "Incremental processing at ~5 min p95—down from ~4-hour average batch (and ~30 min for the most frequent, costly jobs)"
  - "Replaced a legacy home-grown batch processor / scheduler that required a 20-person team to keep running"
---
