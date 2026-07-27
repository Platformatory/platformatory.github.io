---
layout: case-study
title: "System Twin — IoT"
customer_label: "Global power tools manufacturer"
industry: "Manufacturing"
tags:
  - Performance Engineering
  - Platform Excellence
  - Data Engineering
technologies:
  - Apache Kafka
  - Kafka Streams
  - Apache Flink
  - OpenTelemetry
  - RocksDB
  - Kubernetes
summary: "Architecture remediation for a manufacturing-execution streaming pipeline—lifecycle enrichment across global plants. Error rate from >5% to <0.5%, e2e latency from 120 minutes to <1 second, zero incidents over an operating year."
weight: 70
draft_status: approved
the_customer: |
  A global power tools manufacturer running a streaming pipeline in manufacturing execution—enriching parts as they are produced across global plants and tracking lifecycle end to end.

challenge: |
  Major performance issues on the manufacturing-execution streaming path.

  A large Kafka Streams topology owned enrichment and lifecycle tracking. Error rates and consistency failures showed up as missed join windows, state-store explosion, and poor data quality. The platform could not hold latency or correctness under plant-scale load.

work: |
  Owned architecture remediation. Vastly simplified the Kafka Streams topology and moved fault-prone segments to Flink for consistent snapshots and faster recovery. RocksDB and related state-store tuning. Institutionalized data-quality and freshness metrics. Scaled Flink (Flink operator) and Kafka Streams with partitioning so jobs could run in parallel safely. OpenTelemetry for observability across the path.

impact:
  - "Error rate down to <0.5% (from >5%)"
  - "End-to-end latency from 120 minutes to <1 second"
  - "Self-scaling / self-healing architecture with lower cost to operate"
  - "Zero incidents over an entire operating year"
---
