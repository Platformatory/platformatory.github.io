---
layout: case-study
title: "Millisecond-grade border control data paths"
customer_label: "Leading MEA border control"
industry: "Public sector"
domains:
  - Border control
  - Mission-critical platforms
technologies:
  - Apache Kafka
  - Apache Flink
  - Aerospike
  - Kubernetes
summary: "Durability and millisecond-grade decision-path remediation for immigration passenger flow under peak arrival waves."
weight: 30
draft_status: approved
the_customer: |
  A leading Middle East & Africa border-control operator where passenger throughput is a national-scale service level.

  Officers needed answers in milliseconds; systems had to stay durable under peak arrival waves.

challenge: |
  Hot-path decisions were fighting durability work. Peak arrival waves exposed latency spikes and recovery behavior that could stall immigration flow.

  Tuning for speed traded correctness; durability work slowed the counter.

work: |
  Performance and durability remediation on the decision path: Kafka / Flink for event movement, Aerospike for millisecond-grade reads and writes, Kubernetes for deploy and failover.

  Treated surge as the design case and made recovery a rehearsed property of the platform.

impact:
  - "Millisecond-grade performance restored on critical immigration decision paths"
  - "Durability remediation without trading away peak-hour throughput"
  - "Operability designed for surge—not only for steady state"
---
