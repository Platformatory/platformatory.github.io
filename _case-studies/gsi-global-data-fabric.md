---
layout: case-study
title: "Global data fabric across operational & business lakes"
customer_label: "CIO Org of a Top Global SI"
industry: "Systems integration"
tags:
  - Data Platform
  - Data Engineering
  - Modernization
technologies:
  - Apache Kafka
  - Apache Flink
  - Confluent
  - Databricks
  - Apache Spark
  - Apache Hudi
  - ClickHouse
summary: "Operational and Business lakes on one fabric—write once, read many (~100× less redundant copy), incremental pipelines at ~5 min p95, and retirement of a home-grown batch estate that needed a 20-person team."
weight: 10
draft_status: approved
the_customer: |
  The CIO organization of a top global systems integrator. Two lake surfaces mattered most: an Operational Data lake and a Business Data lake, feeding BI, downstream consumers, and ML.

  Sources spanned enterprise SaaS and the long tail of IT—Workday, Salesforce, Zendesk, ServiceNow, plus homegrown systems pushing change through queues and CDC.

challenge: |
  Federate the Operational and Business lakes without paying a full-refresh tax for every consumer.

  Prior pipelines ran full refresh on a batch schedule: about every four hours on average, with the most frequent and costly jobs near 30 minutes. That cadence meant redundant copies and a lot of wasted fan-out. A home-grown batch processor and scheduler absorbed a 20-person operating team.

work: |
  Built the fabric end to end. Incremental change from SaaS and homegrown sources landed through Kafka, Flink, and Confluent; Databricks, Spark, and Hudi shaped lakehouse processing; ClickHouse covered interactive analytics where sub-second reads mattered.

  The design principle was write once, read many—so cutting redundant copy was a property of the platform, not a one-off pipeline rewrite.

impact:
  - "~100× less redundant data copy via write-once / read-many fanout across both lakes"
  - "Incremental processing at ~5 min p95—down from ~4-hour average batch (~30 min for the heaviest jobs)"
  - "Replaced a home-grown batch processor / scheduler that took a 20-person team to keep running"
---
